/**
 * STUDENT ASSESSMENT & SCORE TRACKING ENGINE (student-assessment.js)
 * Manages student registration (Name, Grade, Email) for tests & quizzes,
 * records performance for study progress evaluation, and enables exporting
 * to Excel (.csv with UTF-8 BOM) and Google Sheets.
 *
 * Developed for Mr. Ouch Ol (Teacher Ol) English Platform
 * Hun Sen Svay Thom High School
 */

(function (window) {
  'use strict';

  const STORAGE_KEY_STUDENT = 'mr_ol_current_student';
  const STORAGE_KEY_RECORDS = 'mr_ol_student_assessment_records';

  const StudentAssessment = {
    currentStudent: null,
    records: [],

    init() {
      this.loadStudent();
      this.loadRecords();
      this.injectStylesIfNeeded();
      this.createRegistrationModal();
      this.createRecordsModal();
      this.createToastContainer();
    },

    loadStudent() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_STUDENT);
        if (raw) {
          this.currentStudent = JSON.parse(raw);
        }
      } catch (e) {
        this.currentStudent = null;
      }
    },

    saveStudent(student) {
      this.currentStudent = {
        name: (student.name || '').trim(),
        grade: (student.grade || '').trim(),
        email: (student.email || '').trim().toLowerCase(),
        registeredAt: new Date().toISOString()
      };
      try {
        localStorage.setItem(STORAGE_KEY_STUDENT, JSON.stringify(this.currentStudent));
      } catch (e) {}
      this.updateAllStudentBadges();
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('studentProfileUpdated', { detail: this.currentStudent }));
    },

    clearCurrentStudent() {
      this.currentStudent = null;
      try {
        localStorage.removeItem(STORAGE_KEY_STUDENT);
      } catch (e) {}
      this.updateAllStudentBadges();
      window.dispatchEvent(new CustomEvent('studentProfileUpdated', { detail: null }));
    },

    loadRecords() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY_RECORDS);
        if (raw) {
          this.records = JSON.parse(raw);
        } else {
          this.records = [];
        }
      } catch (e) {
        this.records = [];
      }
    },

    saveRecords() {
      try {
        localStorage.setItem(STORAGE_KEY_RECORDS, JSON.stringify(this.records));
      } catch (e) {}
    },

    /**
     * Ensures student info is provided before taking a test or quiz.
     * @param {Function} callback Called when student is confirmed
     * @param {boolean} forcePrompt If true, always prompts the registration modal
     */
    requireStudentInfo(callback, forcePrompt = false) {
      if (!forcePrompt && this.currentStudent && this.currentStudent.name && this.currentStudent.grade && this.currentStudent.email) {
        if (typeof callback === 'function') callback(this.currentStudent);
        return;
      }

      this.openRegistrationModal(callback);
    },

    getCurrentStudent() {
      return this.currentStudent;
    },

    hasStudent() {
      return !!(this.currentStudent && this.currentStudent.name && this.currentStudent.grade && this.currentStudent.email);
    },

    /**
     * Record a test attempt with student info
     * @param {Object} data 
     */
    recordAttempt(data) {
      if (!this.currentStudent) {
        this.loadStudent();
      }

      const now = new Date();
      const pct = Math.round((data.correct / (data.total || 1)) * 100);
      let gradeLetter = 'F';
      let evalNote = 'ត្រូវការអនុវត្តបន្ថែម (Needs More Practice)';

      if (pct >= 90) {
        gradeLetter = 'A';
        evalNote = 'ល្អឥតខ្ចោះ! ស្ទាត់ជំនាញកម្រិតខ្ពស់ (Mastery & Distinction)';
      } else if (pct >= 80) {
        gradeLetter = 'B';
        evalNote = 'ល្អប្រសើរ! យល់ដឹងច្បាស់លាស់ (Very Good Progress)';
      } else if (pct >= 70) {
        gradeLetter = 'C';
        evalNote = 'ល្អបង្គួរ! ឆ្លងកាត់ស្ដង់ដារ (Good Competency)';
      } else if (pct >= 50) {
        gradeLetter = 'D';
        evalNote = 'មធ្យម! គួររំលឹកមេរៀនឡើងវិញ (Fair / Passing)';
      }

      const record = {
        id: 'rec_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        timestamp: now.toISOString(),
        dateFormatted: now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        studentName: this.currentStudent ? this.currentStudent.name : (data.name || 'Anonymous Student'),
        studentGrade: this.currentStudent ? this.currentStudent.grade : (data.grade || 'N/A'),
        studentEmail: this.currentStudent ? this.currentStudent.email : (data.email || 'N/A'),
        testType: data.testType || 'Grammar Test',
        testTopic: data.testTopic || 'General Quiz',
        level: data.level || 'All',
        totalQuestions: data.total || 0,
        answeredQuestions: data.answered || data.total || 0,
        correctAnswers: data.correct || 0,
        wrongAnswers: (data.total || 0) - (data.correct || 0),
        scorePercent: pct,
        gradeLetter: data.gradeLetter || gradeLetter,
        evaluationNote: data.evaluationNote || evalNote,
        timeSpent: data.timeSpent || 'N/A'
      };

      // Check if we should update an existing attempt for this student + testTopic + level in the last 15 minutes, or prepend
      const recentIndex = this.records.findIndex(r => 
        r.studentEmail === record.studentEmail &&
        r.testTopic === record.testTopic &&
        r.level === record.level &&
        (now.getTime() - new Date(r.timestamp).getTime()) < 15 * 60 * 1000
      );

      if (recentIndex !== -1 && data.updateRecent) {
        this.records[recentIndex] = record;
      } else {
        this.records.unshift(record);
      }

      // Limit stored records to 500 for storage safety
      if (this.records.length > 500) {
        this.records = this.records.slice(0, 500);
      }

      this.saveRecords();
      return record;
    },

    /**
     * Download records as an Excel-compatible CSV file (with UTF-8 BOM)
     */
    downloadExcelCSV(filteredRecords = null) {
      const recordsToExport = filteredRecords || this.records;
      if (!recordsToExport || recordsToExport.length === 0) {
        this.showToast('⚠️ មិនទាន់មានទិន្នន័យពិន្ទុសម្រាប់ទាញយកទេ (No records to export)', 'warning');
        return;
      }

      const headers = [
        'ល.រ (No.)',
        'កាលបរិច្ឆេទ (Date & Time)',
        'ឈ្មោះសិស្ស (Student Name)',
        'ថ្នាក់រៀន (Grade/Class)',
        'គណនីអ៊ីមែល (Email)',
        'ប្រភេទតេស្ត (Test Category)',
        'វិញ្ញាសា/មេរៀន (Topic)',
        'កម្រិត (Level)',
        'សំណួរត្រូវ (Correct)',
        'សំណួរខុស (Incorrect)',
        'សរុបសំណួរ (Total Questions)',
        'ភាគរយ % (Percentage)',
        'និទ្ទេស (Grade)',
        'ការវាយតម្លៃវឌ្ឍនភាពសិក្សា (Study Progress Evaluation)'
      ];

      function escapeCSV(val) {
        if (val === null || val === undefined) return '""';
        let str = String(val).replace(/"/g, '""');
        return `"${str}"`;
      }

      const rows = recordsToExport.map((rec, idx) => [
        idx + 1,
        rec.dateFormatted,
        rec.studentName,
        rec.studentGrade,
        rec.studentEmail,
        rec.testType,
        rec.testTopic,
        rec.level,
        rec.correctAnswers,
        rec.wrongAnswers,
        rec.totalQuestions,
        rec.scorePercent + '%',
        rec.gradeLetter,
        rec.evaluationNote
      ].map(escapeCSV).join(','));

      // Prepend UTF-8 Byte Order Mark (BOM) so MS Excel renders Khmer characters correctly
      const BOM = '\uFEFF';
      const csvContent = BOM + [headers.map(escapeCSV).join(','), ...rows].join('\r\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const nowStr = new Date().toISOString().slice(0, 10);
      link.setAttribute('href', url);
      link.setAttribute('download', `Mr_OL_Student_Scores_${nowStr}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      this.showToast('✅ បានទាញយក File Excel (.csv) ដោយជោគជ័យ!', 'success');
    },

    /**
     * Copy records formatted for direct paste into Google Sheets (TSV format)
     */
    copyForGoogleSheets(filteredRecords = null) {
      const recordsToExport = filteredRecords || this.records;
      if (!recordsToExport || recordsToExport.length === 0) {
        this.showToast('⚠️ មិនទាន់មានទិន្នន័យពិន្ទុទេ (No records to copy)', 'warning');
        return;
      }

      const headers = [
        'No.',
        'Date & Time',
        'Student Name',
        'Grade/Class',
        'Email',
        'Test Category',
        'Topic',
        'Level',
        'Correct',
        'Incorrect',
        'Total',
        'Score %',
        'Grade',
        'Progress Evaluation'
      ];

      const rows = recordsToExport.map((rec, idx) => [
        idx + 1,
        rec.dateFormatted,
        rec.studentName,
        rec.studentGrade,
        rec.studentEmail,
        rec.testType,
        rec.testTopic,
        rec.level,
        rec.correctAnswers,
        rec.wrongAnswers,
        rec.totalQuestions,
        rec.scorePercent + '%',
        rec.gradeLetter,
        rec.evaluationNote
      ].join('\t'));

      const tsvContent = [headers.join('\t'), ...rows].join('\n');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(tsvContent).then(() => {
          this.showToast('📋 បានចម្លងទិន្នន័យសម្រាប់ Google Sheets រួចរាល់! ចុច Ctrl+V ដើម្បី Paste ក្នុង Google Sheet', 'success');
        }).catch(() => {
          this.fallbackCopyText(tsvContent);
        });
      } else {
        this.fallbackCopyText(tsvContent);
      }
    },

    fallbackCopyText(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        this.showToast('📋 បានចម្លងទិន្នន័យសម្រាប់ Google Sheets រួចរាល់! ចុច Ctrl+V ក្នុង Google Sheet', 'success');
      } catch (err) {
        this.showToast('❌ មិនអាចចម្លងបានទេ សូមទាញយកជា File Excel ជំនួសវិញ', 'error');
      }
      document.body.removeChild(textArea);
    },

    /**
     * Render the student badge in any container
     */
    renderStudentBadge(containerId) {
      if (typeof document === 'undefined') return;
      const container = document.getElementById(containerId);
      if (!container) return;

      if (!this.currentStudent) {
        container.innerHTML = `
          <div class="student-pill-badge guest">
            <span class="badge-icon">👤</span>
            <span class="badge-text">មិនទាន់ចុះឈ្មោះ (Guest Student)</span>
            <button type="button" class="btn-student-action btn-register-trigger">
              📝 ចុះឈ្មោះ (Register)
            </button>
            <button type="button" class="btn-student-action btn-view-records">
              📊 កំណត់ត្រាពិន្ទុ &amp; Excel
            </button>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="student-pill-badge active">
            <span class="badge-icon">🎓</span>
            <div class="badge-details">
              <span class="student-name"><strong>${this.escapeHtml(this.currentStudent.name)}</strong></span>
              <span class="student-meta">ថ្នាក់៖ <strong>${this.escapeHtml(this.currentStudent.grade)}</strong> • 📧 ${this.escapeHtml(this.currentStudent.email)}</span>
            </div>
            <div class="badge-actions">
              <button type="button" class="btn-student-action btn-switch-student" title="ប្តូរសិស្សផ្សេងទៀត">
                ✏️ ប្តូរសិស្ស
              </button>
              <button type="button" class="btn-student-action btn-view-records" title="មើលកំណត់ត្រាពិន្ទុ និងទាញយក Excel">
                📊 កំណត់ត្រា &amp; Excel
              </button>
            </div>
          </div>
        `;
      }

      // Attach click events
      const regBtn = container.querySelector('.btn-register-trigger');
      if (regBtn) {
        regBtn.addEventListener('click', () => this.requireStudentInfo(null, true));
      }

      const switchBtn = container.querySelector('.btn-switch-student');
      if (switchBtn) {
        switchBtn.addEventListener('click', () => this.requireStudentInfo(null, true));
      }

      const recordsBtn = container.querySelector('.btn-view-records');
      if (recordsBtn) {
        recordsBtn.addEventListener('click', () => this.showRecordsModal());
      }
    },

    updateAllStudentBadges() {
      if (typeof document === 'undefined') return;
      // Find all elements with student badge class or specific IDs
      ['grammar-student-bar', 'tests-student-bar', 'general-student-bar'].forEach(id => {
        this.renderStudentBadge(id);
      });
      document.querySelectorAll('[data-render-student-badge]').forEach(el => {
        if (el.id) this.renderStudentBadge(el.id);
      });
    },

    /* ==========================================================================
       MODALS CREATION & UI
       ========================================================================== */

    createRegistrationModal() {
      if (document.getElementById('student-reg-modal')) return;

      const modal = document.createElement('div');
      modal.id = 'student-reg-modal';
      modal.className = 'student-modal-overlay';
      modal.innerHTML = `
        <div class="student-modal-card" role="dialog" aria-modal="true" aria-labelledby="student-reg-title">
          <div class="student-modal-header">
            <div class="modal-icon-badge">🎓</div>
            <div>
              <h3 id="student-reg-title" class="modal-title">ចុះឈ្មោះព័ត៌មានសិស្សមុននឹងធ្វើតេស្ត</h3>
              <p class="modal-subtitle">Student Assessment Registration • English Platform</p>
            </div>
            <button type="button" class="btn-modal-close" id="btn-close-reg-modal" aria-label="បិទ">&times;</button>
          </div>

          <form id="student-reg-form" class="student-form-body" novalidate>
            <div class="form-info-notice">
              <span>💡</span> ព័ត៌មាននេះប្រើសម្រាប់កត់ត្រាពិន្ទុ និងវាយតម្លៃវឌ្ឍនភាពនៃការសិក្សា ហើយអាចទាញយកជា <strong>Excel / Google Sheet</strong> សម្រាប់លោកគ្រូ និងសិស្សផ្ទាល់។
            </div>

            <!-- Field 1: Name -->
            <div class="form-group-item">
              <label for="student-input-name" class="form-label">
                <span>👤 ឈ្មោះពេញសិស្ស (Student Name)</span>
                <span class="required-star">*</span>
              </label>
              <input type="text" id="student-input-name" class="student-input-field" 
                     placeholder="ឧ. សុខ សាន ឬ Sok San" required autocomplete="name">
              <div class="field-error-msg" id="err-student-name">សូមបញ្ចូលឈ្មោះរបស់អ្នក</div>
            </div>

            <!-- Field 2: Grade / Class -->
            <div class="form-group-item">
              <label for="student-input-grade" class="form-label">
                <span>🏫 ថ្នាក់រៀន / បន្ទប់ (Grade &amp; Section)</span>
                <span class="required-star">*</span>
              </label>
              <input type="text" id="student-input-grade" class="student-input-field" 
                     list="grade-datalist-options" placeholder="ឧ. 10A, 10B, 11A, 12A..." required>
              <datalist id="grade-datalist-options">
                <option value="10A">
                <option value="10B">
                <option value="10C">
                <option value="10D">
                <option value="10E">
                <option value="10F">
                <option value="Grade 10">
                <option value="11A">
                <option value="11B">
                <option value="Grade 11">
                <option value="12A">
                <option value="12B">
                <option value="Grade 12">
              </datalist>
              <div class="field-error-msg" id="err-student-grade">សូមជ្រើសរើស ឬបញ្ចូលថ្នាក់រៀនរបស់អ្នក</div>
            </div>

            <!-- Field 3: Email Account -->
            <div class="form-group-item">
              <label for="student-input-email" class="form-label">
                <span>📧 គណនីអ៊ីមែល (Email Address)</span>
                <span class="required-star">*</span>
              </label>
              <input type="email" id="student-input-email" class="student-input-field" 
                     placeholder="ឧ. student@gmail.com" required autocomplete="email">
              <div class="field-error-msg" id="err-student-email">សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ (ឧ. name@gmail.com)</div>
            </div>

            <div class="modal-form-actions">
              <button type="button" class="btn-modal-cancel" id="btn-cancel-reg">បោះបង់ (Cancel)</button>
              <button type="submit" class="btn-modal-submit" id="btn-submit-reg">
                🚀 បញ្ជាក់ &amp; ចាប់ផ្តើមធ្វើតេស្ត (Confirm &amp; Proceed)
              </button>
            </div>
          </form>
        </div>
      `;

      document.body.appendChild(modal);

      // Event handlers
      const form = modal.querySelector('#student-reg-form');
      const closeBtn = modal.querySelector('#btn-close-reg-modal');
      const cancelBtn = modal.querySelector('#btn-cancel-reg');

      const handleClose = () => {
        modal.classList.remove('active');
        if (this._pendingCallback) {
          // If cancelled without registration, don't execute
          this._pendingCallback = null;
        }
      };

      closeBtn.addEventListener('click', handleClose);
      cancelBtn.addEventListener('click', handleClose);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) handleClose();
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = modal.querySelector('#student-input-name');
        const gradeInput = modal.querySelector('#student-input-grade');
        const emailInput = modal.querySelector('#student-input-email');

        const errName = modal.querySelector('#err-student-name');
        const errGrade = modal.querySelector('#err-student-grade');
        const errEmail = modal.querySelector('#err-student-email');

        let isValid = true;

        const nameVal = nameInput.value.trim();
        if (nameVal.length < 2) {
          errName.style.display = 'block';
          nameInput.classList.add('input-error');
          isValid = false;
        } else {
          errName.style.display = 'none';
          nameInput.classList.remove('input-error');
        }

        const gradeVal = gradeInput.value.trim();
        if (gradeVal.length < 1) {
          errGrade.style.display = 'block';
          gradeInput.classList.add('input-error');
          isValid = false;
        } else {
          errGrade.style.display = 'none';
          gradeInput.classList.remove('input-error');
        }

        const emailVal = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
          errEmail.style.display = 'block';
          emailInput.classList.add('input-error');
          isValid = false;
        } else {
          errEmail.style.display = 'none';
          emailInput.classList.remove('input-error');
        }

        if (isValid) {
          this.saveStudent({ name: nameVal, grade: gradeVal, email: emailVal });
          modal.classList.remove('active');
          this.showToast(`🎉 ស្វាគមន៍ ${nameVal}! ព័ត៌មានត្រូវបានកត់ត្រារួចរាល់។`, 'success');

          if (typeof this._pendingCallback === 'function') {
            const cb = this._pendingCallback;
            this._pendingCallback = null;
            cb(this.currentStudent);
          }
        }
      });
    },

    openRegistrationModal(callback) {
      this._pendingCallback = callback;
      const modal = document.getElementById('student-reg-modal');
      if (!modal) {
        this.createRegistrationModal();
      }
      const activeModal = document.getElementById('student-reg-modal');
      if (!activeModal) return;

      // Pre-fill if exists
      if (this.currentStudent) {
        const nameInput = activeModal.querySelector('#student-input-name');
        const gradeInput = activeModal.querySelector('#student-input-grade');
        const emailInput = activeModal.querySelector('#student-input-email');
        if (nameInput) nameInput.value = this.currentStudent.name || '';
        if (gradeInput) gradeInput.value = this.currentStudent.grade || '';
        if (emailInput) emailInput.value = this.currentStudent.email || '';
      }

      activeModal.classList.add('active');
      const firstInput = activeModal.querySelector('#student-input-name');
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    },

    createRecordsModal() {
      if (document.getElementById('student-records-modal')) return;

      const modal = document.createElement('div');
      modal.id = 'student-records-modal';
      modal.className = 'student-modal-overlay';
      modal.innerHTML = `
        <div class="student-modal-card records-modal-card" role="dialog" aria-modal="true">
          <div class="student-modal-header">
            <div class="modal-icon-badge">📊</div>
            <div>
              <h3 class="modal-title">កំណត់ត្រាពិន្ទុ &amp; វាយតម្លៃការសិក្សា</h3>
              <p class="modal-subtitle">Student Scores, Evaluation &amp; Export Center</p>
            </div>
            <button type="button" class="btn-modal-close" id="btn-close-records-modal" aria-label="បិទ">&times;</button>
          </div>

          <!-- Summary Statistics Dashboard -->
          <div class="records-stats-grid" id="records-stats-dashboard">
            <!-- Dynamic stats rendered by JS -->
          </div>

          <!-- Records Toolbar: Search & Export -->
          <div class="records-toolbar">
            <div class="records-search-box">
              <span>🔍</span>
              <input type="text" id="records-filter-input" placeholder="ស្វែងរកតាមឈ្មោះ, ថ្នាក់ ឬមេរៀន...">
            </div>
            <div class="records-export-buttons">
              <button type="button" class="btn-export-excel" id="btn-export-excel-action">
                📗 ទាញយក Excel (.csv)
              </button>
              <button type="button" class="btn-copy-sheets" id="btn-copy-sheets-action">
                📋 ចម្លងសម្រាប់ Google Sheets
              </button>
              <button type="button" class="btn-clear-records" id="btn-clear-records-action" title="សម្អាតកំណត់ត្រាទាំងអស់">
                🗑️ សម្អាត
              </button>
            </div>
          </div>

          <!-- Table Container -->
          <div class="records-table-wrapper">
            <table class="records-data-table" id="records-table">
              <thead>
                <tr>
                  <th>ល.រ</th>
                  <th>កាលបរិច្ឆេទ</th>
                  <th>ឈ្មោះសិស្ស</th>
                  <th>ថ្នាក់</th>
                  <th>វិញ្ញាសា / មេរៀន</th>
                  <th>កម្រិត</th>
                  <th>ពិន្ទុ</th>
                  <th>%</th>
                  <th>និទ្ទេស</th>
                  <th>ការវាយតម្លៃ</th>
                </tr>
              </thead>
              <tbody id="records-table-body">
                <!-- Dynamic rows -->
              </tbody>
            </table>
          </div>

          <div class="records-modal-footer">
            <span id="records-count-info" class="records-count-info">សរុប៖ 0 កំណត់ត្រា</span>
            <button type="button" class="btn-modal-cancel" id="btn-done-records">បិទ (Close)</button>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Event handlers
      const closeBtn = modal.querySelector('#btn-close-records-modal');
      const doneBtn = modal.querySelector('#btn-done-records');
      const searchInput = modal.querySelector('#records-filter-input');
      const excelBtn = modal.querySelector('#btn-export-excel-action');
      const sheetsBtn = modal.querySelector('#btn-copy-sheets-action');
      const clearBtn = modal.querySelector('#btn-clear-records-action');

      const closeModal = () => modal.classList.remove('active');
      closeBtn.addEventListener('click', closeModal);
      doneBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });

      searchInput.addEventListener('input', () => {
        this.renderRecordsTable(searchInput.value);
      });

      excelBtn.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        const filtered = query ? this.records.filter(r => 
          (r.studentName && r.studentName.toLowerCase().includes(query)) ||
          (r.studentGrade && r.studentGrade.toLowerCase().includes(query)) ||
          (r.testTopic && r.testTopic.toLowerCase().includes(query))
        ) : null;
        this.downloadExcelCSV(filtered);
      });

      sheetsBtn.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        const filtered = query ? this.records.filter(r => 
          (r.studentName && r.studentName.toLowerCase().includes(query)) ||
          (r.studentGrade && r.studentGrade.toLowerCase().includes(query)) ||
          (r.testTopic && r.testTopic.toLowerCase().includes(query))
        ) : null;
        this.copyForGoogleSheets(filtered);
      });

      clearBtn.addEventListener('click', () => {
        if (this.records.length === 0) return;
        if (confirm('តើអ្នកប្រាកដជាចង់សម្អាតកំណត់ត្រាពិន្ទុទាំងអស់មែនទេ? (Are you sure you want to clear all records?)')) {
          this.records = [];
          this.saveRecords();
          this.renderRecordsTable();
          this.showToast('🗑️ បានសម្អាតកំណត់ត្រាពិន្ទុទាំងអស់រួចរាល់', 'info');
        }
      });
    },

    showRecordsModal() {
      this.loadRecords();
      const modal = document.getElementById('student-records-modal');
      if (!modal) {
        this.createRecordsModal();
      }
      const activeModal = document.getElementById('student-records-modal');
      if (!activeModal) return;

      const searchInput = activeModal.querySelector('#records-filter-input');
      if (searchInput) searchInput.value = '';

      this.renderRecordsTable();
      activeModal.classList.add('active');
    },

    renderRecordsTable(query = '') {
      const modal = document.getElementById('student-records-modal');
      if (!modal) return;

      const tbody = modal.querySelector('#records-table-body');
      const countInfo = modal.querySelector('#records-count-info');
      const statsDash = modal.querySelector('#records-stats-dashboard');

      let list = this.records;
      if (query) {
        const q = query.trim().toLowerCase();
        list = list.filter(r => 
          (r.studentName && r.studentName.toLowerCase().includes(q)) ||
          (r.studentGrade && r.studentGrade.toLowerCase().includes(q)) ||
          (r.studentEmail && r.studentEmail.toLowerCase().includes(q)) ||
          (r.testTopic && r.testTopic.toLowerCase().includes(q)) ||
          (r.level && r.level.toLowerCase().includes(q))
        );
      }

      if (countInfo) {
        countInfo.textContent = `បង្ហាញ ${list.length} ក្នុងចំណោម ${this.records.length} កំណត់ត្រា (Showing ${list.length} of ${this.records.length})`;
      }

      // Stats Dashboard
      if (statsDash) {
        const totalTests = this.records.length;
        const avgScore = totalTests > 0 
          ? Math.round(this.records.reduce((acc, r) => acc + (r.scorePercent || 0), 0) / totalTests)
          : 0;
        const highestScore = totalTests > 0 
          ? Math.max(...this.records.map(r => r.scorePercent || 0))
          : 0;
        const uniqueStudents = new Set(this.records.map(r => (r.studentEmail || r.studentName || '').toLowerCase())).size;

        statsDash.innerHTML = `
          <div class="stat-card">
            <span class="stat-num">${totalTests}</span>
            <span class="stat-lbl">ចំនួនដងធ្វើតេស្ត (Attempts)</span>
          </div>
          <div class="stat-card">
            <span class="stat-num">${uniqueStudents}</span>
            <span class="stat-lbl">សិស្សសរុប (Students)</span>
          </div>
          <div class="stat-card highlight">
            <span class="stat-num">${avgScore}%</span>
            <span class="stat-lbl">ពិន្ទុជាមធ្យម (Avg. Score)</span>
          </div>
          <div class="stat-card">
            <span class="stat-num">${highestScore}%</span>
            <span class="stat-lbl">ពិន្ទុខ្ពស់បំផុត (Top Score)</span>
          </div>
        `;
      }

      if (list.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="10" class="empty-table-cell">
              ${this.records.length === 0 ? '📝 មិនទាន់មានកំណត់ត្រាពិន្ទុនៅឡើយទេ (No test attempts recorded yet)' : '🔍 មិនមានកំណត់ត្រាដែលត្រូវនឹងការស្វែងរកនេះទេ (No matching records)'}
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = list.map((rec, i) => {
        let badgeClass = 'badge-d';
        if (rec.gradeLetter.includes('A')) badgeClass = 'badge-a';
        else if (rec.gradeLetter.includes('B')) badgeClass = 'badge-b';
        else if (rec.gradeLetter.includes('C')) badgeClass = 'badge-c';

        return `
          <tr>
            <td style="font-weight: 700; color: var(--elearn-text-gray);">${i + 1}</td>
            <td style="white-space: nowrap; font-size: 0.8rem;">${rec.dateFormatted}</td>
            <td style="font-weight: 700;">
              <div>${this.escapeHtml(rec.studentName)}</div>
              <div style="font-size: 0.75rem; color: var(--elearn-text-gray); font-weight: normal;">${this.escapeHtml(rec.studentEmail)}</div>
            </td>
            <td><span class="grade-pill">${this.escapeHtml(rec.studentGrade)}</span></td>
            <td>
              <div style="font-weight: 600;">${this.escapeHtml(rec.testTopic)}</div>
              <div style="font-size: 0.75rem; color: var(--elearn-text-gray);">${this.escapeHtml(rec.testType)}</div>
            </td>
            <td><span class="level-tag">${this.escapeHtml(rec.level)}</span></td>
            <td style="font-weight: 700;">${rec.correctAnswers}/${rec.totalQuestions}</td>
            <td style="font-weight: 800; color: var(--elearn-green);">${rec.scorePercent}%</td>
            <td><span class="grade-badge ${badgeClass}">${rec.gradeLetter}</span></td>
            <td style="font-size: 0.8rem; max-width: 220px;">${this.escapeHtml(rec.evaluationNote)}</td>
          </tr>
        `;
      }).join('');
    },

    createToastContainer() {
      if (document.getElementById('student-assessment-toasts')) return;
      const toastCont = document.createElement('div');
      toastCont.id = 'student-assessment-toasts';
      toastCont.className = 'assessment-toast-container';
      document.body.appendChild(toastCont);
    },

    showToast(message, type = 'info') {
      const container = document.getElementById('student-assessment-toasts');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = `assessment-toast toast-${type}`;
      toast.innerHTML = `
        <div class="toast-content">${message}</div>
      `;

      container.appendChild(toast);
      setTimeout(() => toast.classList.add('visible'), 10);

      setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    },

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    injectStylesIfNeeded() {
      // Styles are also injected into elearn-pro.css, but this ensures standalone resilience
    }
  };

  // Auto initialize on DOM ready
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => StudentAssessment.init());
    } else {
      StudentAssessment.init();
    }
  }

  // Export to window
  window.StudentAssessment = StudentAssessment;

})(window);
