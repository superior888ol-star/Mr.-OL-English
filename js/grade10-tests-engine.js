/**
 * ENGLISH GRADE 10 - COMPREHENSIVE TESTS & QUIZZES INTERACTIVE ENGINE
 * Powers Unit Practice, Monthly Assessments, Semester 1 & 2 Exams, and Year-End Test
 * MoEYS Cambodia English Grade 10 Curriculum & Bloom's Taxonomy (A1 -> C1)
 */

(function() {
  'use strict';

  // Sound Effects Engine via Web Audio API (No external sound files required)
  const SoundFX = {
    ctx: null,
    enabled: true,

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    },

    playChime() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.35);
      } catch (e) {}
    },

    playBuzz() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
      } catch (e) {}
    },

    playFanfare() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.12);
          gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.12);
          gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.12 + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + i * 0.12);
          osc.stop(this.ctx.currentTime + i * 0.12 + 0.4);
        });
      } catch (e) {}
    },

    playClick() {
      if (!this.enabled) return;
      try {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }
  };

  // Main Test Engine State
  const TestState = {
    mode: "unit", // unit | monthly | semester1 | semester2 | yearend
    selectedUnit: "all",
    selectedBloom: "all",
    selectedCategory: "all",
    testMode: "practice", // practice (instant feedback) | exam (continuous timed)
    
    questions: [],
    currentIndex: 0,
    userAnswers: {}, // questionId -> answer
    checkedQuestions: {}, // questionId -> boolean
    
    // Exam Timer
    timerSeconds: 0,
    timerInterval: null,
    isTimerRunning: false,
    
    // Audio Speech
    currentUtterance: null,
    isSpeechPlaying: false
  };

  // Initialization
  function initEngine() {
    parseURLParams();
    setupExamModeTabs();
    setupFilters();
    setupUnitDropdown();
    setupTestControls();
    loadFilteredQuestions();
  }

  function parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('mode')) TestState.mode = params.get('mode');
    if (params.has('unit')) TestState.selectedUnit = params.get('unit');
    if (params.has('bloom')) TestState.selectedBloom = params.get('bloom');
    if (params.has('cat')) TestState.selectedCategory = params.get('cat');
    if (params.has('type')) TestState.testMode = params.get('type');
  }

  function setupExamModeTabs() {
    const tabsContainer = document.getElementById('exam-modes-container');
    if (!tabsContainer || !window.examModes) return;

    tabsContainer.innerHTML = window.examModes.map(m => `
      <div class="exam-mode-card-btn ${TestState.mode === m.id ? 'active' : ''}" data-mode="${m.id}">
        <div class="mode-top">
          <span class="mode-icon">${m.icon}</span>
          <span class="badge-mini" style="background:var(--accent-cyan); color:#000; font-weight:700;">G10</span>
        </div>
        <div class="mode-name">${m.titleKm}</div>
        <div class="mode-sub">${m.descEn}</div>
      </div>
    `).join('');

    tabsContainer.querySelectorAll('.exam-mode-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        SoundFX.playClick();
        tabsContainer.querySelectorAll('.exam-mode-card-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        TestState.mode = btn.dataset.mode;
        
        // Auto-adjust unit dropdown visibility
        const unitRow = document.getElementById('unit-filter-row');
        if (unitRow) {
          unitRow.style.display = TestState.mode === 'unit' ? 'flex' : 'none';
        }

        loadFilteredQuestions();
      });
    });

    const unitRow = document.getElementById('unit-filter-row');
    if (unitRow) {
      unitRow.style.display = TestState.mode === 'unit' ? 'flex' : 'none';
    }
  }

  function setupUnitDropdown() {
    const select = document.getElementById('unit-select');
    if (!select || !window.grade10Units) return;

    select.innerHTML = `<option value="all">🌟 គ្រប់មេរៀនទាំងអស់ (All 35 Units)</option>` +
      window.grade10Units.map(u => `
        <option value="${u.id}" ${String(TestState.selectedUnit) === String(u.id) ? 'selected' : ''}>
          Unit ${u.id}: ${u.title} (Sem ${u.semester})
        </option>
      `).join('');

    select.addEventListener('change', (e) => {
      SoundFX.playClick();
      TestState.selectedUnit = e.target.value;
      loadFilteredQuestions();
    });
  }

  function setupFilters() {
    // Bloom pills
    const bloomPills = document.querySelectorAll('.bloom-pill');
    bloomPills.forEach(pill => {
      pill.addEventListener('click', () => {
        SoundFX.playClick();
        bloomPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        TestState.selectedBloom = pill.dataset.bloom;
        loadFilteredQuestions();
      });
    });

    // Category pills
    const catPills = document.querySelectorAll('.cat-pill');
    catPills.forEach(pill => {
      pill.addEventListener('click', () => {
        SoundFX.playClick();
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        TestState.selectedCategory = pill.dataset.cat;
        loadFilteredQuestions();
      });
    });

    // Test mode toggle (Practice vs Exam)
    const modePracticeBtn = document.getElementById('btn-mode-practice');
    const modeExamBtn = document.getElementById('btn-mode-exam');
    if (modePracticeBtn && modeExamBtn) {
      modePracticeBtn.addEventListener('click', () => {
        SoundFX.playClick();
        modePracticeBtn.classList.add('active');
        modeExamBtn.classList.remove('active');
        TestState.testMode = 'practice';
        resetTestState();
      });
      modeExamBtn.addEventListener('click', () => {
        SoundFX.playClick();
        modeExamBtn.classList.add('active');
        modePracticeBtn.classList.remove('active');
        TestState.testMode = 'exam';
        resetTestState();
      });
    }

    // Sound toggle
    const soundToggle = document.getElementById('sound-toggle-btn');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        SoundFX.enabled = !SoundFX.enabled;
        soundToggle.textContent = SoundFX.enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
      });
    }
  }

  function setupTestControls() {
    const prevBtn = document.getElementById('btn-prev-q');
    const nextBtn = document.getElementById('btn-next-q');
    const submitBtn = document.getElementById('btn-submit-exam');
    const checkBtn = document.getElementById('btn-check-q');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (TestState.currentIndex > 0) {
          SoundFX.playClick();
          TestState.currentIndex--;
          renderCurrentQuestion();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (TestState.currentIndex < TestState.questions.length - 1) {
          SoundFX.playClick();
          TestState.currentIndex++;
          renderCurrentQuestion();
        }
      });
    }

    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        handleCheckCurrentAnswer();
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        confirmAndSubmitExam();
      });
    }

    // Modal close & retry buttons
    const closeResultsBtn = document.getElementById('btn-close-results');
    if (closeResultsBtn) {
      closeResultsBtn.addEventListener('click', () => {
        document.getElementById('results-modal-overlay').classList.remove('active');
      });
    }

    const retryBtn = document.getElementById('btn-retry-test');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        document.getElementById('results-modal-overlay').classList.remove('active');
        resetTestState();
      });
    }

    const printCertBtn = document.getElementById('btn-print-cert');
    if (printCertBtn) {
      printCertBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Results Modal Export Buttons
    const exportExcelBtn = document.getElementById('btn-export-excel-results');
    if (exportExcelBtn) {
      exportExcelBtn.addEventListener('click', () => {
        if (window.StudentAssessment) window.StudentAssessment.downloadExcelCSV();
      });
    }

    const copySheetsBtn = document.getElementById('btn-copy-sheets-results');
    if (copySheetsBtn) {
      copySheetsBtn.addEventListener('click', () => {
        if (window.StudentAssessment) window.StudentAssessment.copyForGoogleSheets();
      });
    }

    const allRecordsBtn = document.getElementById('btn-all-records-results');
    if (allRecordsBtn) {
      allRecordsBtn.addEventListener('click', () => {
        if (window.StudentAssessment) window.StudentAssessment.showRecordsModal();
      });
    }

    // Render Student Assessment Badge in Tests page
    if (window.StudentAssessment) {
      window.StudentAssessment.renderStudentBadge('tests-student-bar');
    }
  }

  function ensureStudentRegistered(callback) {
    if (window.StudentAssessment) {
      if (!window.StudentAssessment.hasStudent()) {
        window.StudentAssessment.requireStudentInfo((st) => {
          if (typeof callback === 'function') callback(st);
        });
        return false;
      }
    }
    if (typeof callback === 'function') {
      callback(window.StudentAssessment ? window.StudentAssessment.getCurrentStudent() : null);
    }
    return true;
  }

  function loadFilteredQuestions() {
    stopSpeech();
    let list = window.Grade10TestsHelper ? window.Grade10TestsHelper.getQuestionsByExamMode(TestState.mode) : (window.grade10QuestionBank || []);

    // Filter by unit
    if (TestState.mode === 'unit' && TestState.selectedUnit !== 'all') {
      list = list.filter(q => String(q.unit) === String(TestState.selectedUnit));
    }

    // Filter by bloom
    if (TestState.selectedBloom !== 'all') {
      list = list.filter(q => q.bloom === TestState.selectedBloom);
    }

    // Filter by category
    if (TestState.selectedCategory !== 'all') {
      list = list.filter(q => q.category === TestState.selectedCategory);
    }

    TestState.questions = list;
    resetTestState();
  }

  function resetTestState() {
    TestState.currentIndex = 0;
    TestState.userAnswers = {};
    TestState.checkedQuestions = {};
    stopSpeech();
    resetTimer();

    const countDisplay = document.getElementById('q-count-badge');
    if (countDisplay) {
      countDisplay.textContent = `${TestState.questions.length} សំណួរ`;
    }

    renderPalette();
    renderCurrentQuestion();

    if (TestState.testMode === 'exam' && TestState.questions.length > 0) {
      startTimer(TestState.questions.length * 90); // 1.5 min per question
    }
  }

  function resetTimer() {
    if (TestState.timerInterval) clearInterval(TestState.timerInterval);
    TestState.isTimerRunning = false;
    const timerDisplay = document.getElementById('test-timer-display');
    if (timerDisplay) {
      timerDisplay.textContent = TestState.testMode === 'exam' ? '45:00' : '00:00 (Practice)';
      timerDisplay.parentElement.classList.remove('warning');
    }
  }

  function startTimer(totalSeconds) {
    TestState.timerSeconds = totalSeconds;
    TestState.isTimerRunning = true;
    updateTimerUI();

    TestState.timerInterval = setInterval(() => {
      if (TestState.timerSeconds > 0) {
        TestState.timerSeconds--;
        updateTimerUI();
        if (TestState.timerSeconds === 300) { // 5 min warning
          const timerBadge = document.getElementById('test-timer-badge');
          if (timerBadge) timerBadge.classList.add('warning');
        }
      } else {
        clearInterval(TestState.timerInterval);
        submitExamAuto();
      }
    }, 1000);
  }

  function updateTimerUI() {
    const timerDisplay = document.getElementById('test-timer-display');
    if (!timerDisplay) return;
    const mins = Math.floor(TestState.timerSeconds / 60);
    const secs = TestState.timerSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function renderPalette() {
    const paletteGrid = document.getElementById('questions-palette-grid');
    if (!paletteGrid) return;

    paletteGrid.innerHTML = TestState.questions.map((q, idx) => {
      const isAnswered = TestState.userAnswers[q.id] !== undefined;
      const isActive = idx === TestState.currentIndex;
      return `
        <button class="palette-num-btn ${isActive ? 'active' : ''} ${isAnswered ? 'answered' : ''}" data-idx="${idx}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    paletteGrid.querySelectorAll('.palette-num-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        SoundFX.playClick();
        TestState.currentIndex = Number(btn.dataset.idx);
        renderCurrentQuestion();
      });
    });
  }

  function renderCurrentQuestion() {
    stopSpeech();
    const qCard = document.getElementById('test-stage-card');
    const emptyState = document.getElementById('test-empty-state');
    if (!qCard) return;

    if (TestState.questions.length === 0) {
      qCard.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    qCard.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';

    const q = TestState.questions[TestState.currentIndex];
    const bloomInfo = window.bloomTaxonomy ? window.bloomTaxonomy[q.bloom] : null;

    // Progress Bar
    const progressFill = document.getElementById('progress-bar-fill');
    if (progressFill) {
      const pct = ((TestState.currentIndex + 1) / TestState.questions.length) * 100;
      progressFill.style.width = `${pct}%`;
    }

    // Meta Header
    const indexBadge = document.getElementById('q-current-index');
    if (indexBadge) indexBadge.textContent = `សំណួរទី ${TestState.currentIndex + 1} / ${TestState.questions.length}`;

    const bloomBadge = document.getElementById('q-current-bloom');
    if (bloomBadge && bloomInfo) {
      bloomBadge.textContent = bloomInfo.badge;
      bloomBadge.style.backgroundColor = bloomInfo.color;
    }

    const unitBadge = document.getElementById('q-current-unit');
    if (unitBadge) {
      unitBadge.textContent = `📖 Unit ${q.unit}`;
    }

    // Audio Box
    const audioBox = document.getElementById('q-audio-box');
    if (audioBox) {
      if (q.audioScript) {
        audioBox.style.display = 'flex';
        setupAudioPlayer(q.audioScript);
      } else {
        audioBox.style.display = 'none';
      }
    }

    // Reading Passage Box
    const passageBox = document.getElementById('q-passage-box');
    const passageText = document.getElementById('q-passage-text');
    if (passageBox && passageText) {
      if (q.passage) {
        passageBox.style.display = 'block';
        passageText.textContent = q.passage;
      } else {
        passageBox.style.display = 'none';
      }
    }

    // Visual Icon Box
    const visualBox = document.getElementById('q-visual-box');
    if (visualBox) {
      if (q.visualIcon) {
        visualBox.style.display = 'block';
        visualBox.innerHTML = `<span style="font-size: 3rem; display: block; margin-bottom: 8px;">${q.visualIcon}</span>`;
      } else {
        visualBox.style.display = 'none';
      }
    }

    // Question Prompt
    const promptEl = document.getElementById('q-prompt-text');
    if (promptEl) {
      promptEl.textContent = q.question;
    }

    // Interactive Question Work Area
    const workArea = document.getElementById('q-interactive-workarea');
    if (workArea) {
      renderInteractiveQuestionContent(q, workArea);
    }

    // Feedback Panel
    const feedbackCard = document.getElementById('q-feedback-card');
    if (feedbackCard) {
      if (TestState.testMode === 'practice' && TestState.checkedQuestions[q.id]) {
        showFeedbackUI(q, feedbackCard);
      } else {
        feedbackCard.style.display = 'none';
      }
    }

    // Bottom Navigation Buttons state
    const prevBtn = document.getElementById('btn-prev-q');
    const nextBtn = document.getElementById('btn-next-q');
    const checkBtn = document.getElementById('btn-check-q');
    const submitBtn = document.getElementById('btn-submit-exam');

    if (prevBtn) prevBtn.disabled = TestState.currentIndex === 0;
    if (nextBtn) nextBtn.disabled = TestState.currentIndex === TestState.questions.length - 1;

    if (checkBtn) {
      checkBtn.style.display = TestState.testMode === 'practice' ? 'inline-flex' : 'none';
    }

    if (submitBtn) {
      submitBtn.style.display = (TestState.currentIndex === TestState.questions.length - 1 || TestState.testMode === 'exam') ? 'inline-flex' : 'none';
    }

    renderPalette();
  }

  function renderInteractiveQuestionContent(q, container) {
    container.innerHTML = '';
    const userAnswer = TestState.userAnswers[q.id];

    switch (q.type) {
      case 'vocab_match':
        renderVocabMatch(q, container);
        break;

      case 'sentence_unscramble':
        renderSentenceUnscramble(q, container);
        break;

      case 'vocab_categorize':
        renderVocabCategorize(q, container);
        break;

      case 'vocab_word_hunt':
        renderWordHunt(q, container);
        break;

      case 'error_correction':
      case 'sentence_conversion':
      case 'mcq':
      case 'listening_mcq':
      case 'reading_mcq':
      case 'true_false':
      case 'comprehension':
      case 'information_gap':
      default:
        renderStandardMCQ(q, container, userAnswer);
        break;
    }
  }

  // 1. Standard Multiple Choice / True-False / Conversions
  function renderStandardMCQ(q, container, userAnswer) {
    const list = document.createElement('div');
    list.className = 'options-list-grid';

    const letters = ['A', 'B', 'C', 'D', 'E'];
    const isChecked = TestState.checkedQuestions[q.id];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-choice-btn';
      if (userAnswer === optIdx) btn.classList.add('selected');

      if (isChecked && TestState.testMode === 'practice') {
        if (optIdx === q.correctAnswer) btn.classList.add('correct-choice');
        else if (userAnswer === optIdx && optIdx !== q.correctAnswer) btn.classList.add('incorrect-choice');
      }

      btn.innerHTML = `
        <span class="option-marker">${letters[optIdx] || optIdx + 1}</span>
        <span class="option-text">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        ensureStudentRegistered();
        SoundFX.playClick();
        TestState.userAnswers[q.id] = optIdx;
        list.querySelectorAll('.option-choice-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        renderPalette();

        // In practice mode, if already checked, re-check
        if (TestState.testMode === 'practice') {
          handleCheckCurrentAnswer();
        }
      });

      list.appendChild(btn);
    });

    container.appendChild(list);
  }

  // 2. Vocabulary Bilingual Matcher
  function renderVocabMatch(q, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'matching-board-grid';

    const leftCol = document.createElement('div');
    leftCol.className = 'matching-column';
    const rightCol = document.createElement('div');
    rightCol.className = 'matching-column';

    let selectedLeft = null;
    let selectedRight = null;
    let matchedPairs = TestState.userAnswers[q.id] || {}; // leftIdx -> rightIdx

    q.pairs.forEach((pair, idx) => {
      // Left button
      const leftBtn = document.createElement('button');
      leftBtn.className = 'matching-card-btn';
      leftBtn.textContent = `🇬🇧 ${pair.left}`;
      if (matchedPairs[idx] !== undefined) leftBtn.classList.add('matched');

      leftBtn.addEventListener('click', () => {
        ensureStudentRegistered();
        SoundFX.playClick();
        leftCol.querySelectorAll('.matching-card-btn').forEach(b => b.classList.remove('active-match'));
        leftBtn.classList.add('active-match');
        selectedLeft = idx;
        checkPairMatch();
      });
      leftCol.appendChild(leftBtn);

      // Right button
      const rightBtn = document.createElement('button');
      rightBtn.className = 'matching-card-btn';
      rightBtn.textContent = `🇰🇭 ${pair.right}`;
      if (Object.values(matchedPairs).includes(idx)) rightBtn.classList.add('matched');

      rightBtn.addEventListener('click', () => {
        ensureStudentRegistered();
        SoundFX.playClick();
        rightCol.querySelectorAll('.matching-card-btn').forEach(b => b.classList.remove('active-match'));
        rightBtn.classList.add('active-match');
        selectedRight = idx;
        checkPairMatch();
      });
      rightCol.appendChild(rightBtn);
    });

    function checkPairMatch() {
      if (selectedLeft !== null && selectedRight !== null) {
        if (selectedLeft === selectedRight) {
          SoundFX.playChime();
          matchedPairs[selectedLeft] = selectedRight;
          TestState.userAnswers[q.id] = matchedPairs;
          leftCol.children[selectedLeft].classList.add('matched');
          rightCol.children[selectedRight].classList.add('matched');
          renderPalette();
        } else {
          SoundFX.playBuzz();
        }
        leftCol.querySelectorAll('.matching-card-btn').forEach(b => b.classList.remove('active-match'));
        rightCol.querySelectorAll('.matching-card-btn').forEach(b => b.classList.remove('active-match'));
        selectedLeft = null;
        selectedRight = null;
      }
    }

    wrapper.appendChild(leftCol);
    wrapper.appendChild(rightCol);
    container.appendChild(wrapper);
  }

  // 3. Sentence Unscramble
  function renderSentenceUnscramble(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'unscramble-workspace';

    let assembledWords = TestState.userAnswers[q.id] ? TestState.userAnswers[q.id].split(' ') : [];
    let bankWords = q.scrambledWords.filter(w => !assembledWords.includes(w));

    const dropZone = document.createElement('div');
    dropZone.className = 'unscramble-drop-zone';

    const wordBank = document.createElement('div');
    wordBank.className = 'unscramble-word-bank';

    function refreshTiles() {
      dropZone.innerHTML = '';
      if (assembledWords.length === 0) {
        dropZone.innerHTML = `<span style="color:var(--text-muted); font-size:0.9rem;">👇 ចុចលើពាក្យខាងក្រោមដើម្បីតម្រៀបជាប្រយោគត្រឹមត្រូវ...</span>`;
      } else {
        assembledWords.forEach((word, idx) => {
          const tile = document.createElement('button');
          tile.className = 'word-tile-btn';
          tile.textContent = word;
          tile.addEventListener('click', () => {
            SoundFX.playClick();
            assembledWords.splice(idx, 1);
            TestState.userAnswers[q.id] = assembledWords.join(' ');
            refreshTiles();
            renderPalette();
          });
          dropZone.appendChild(tile);
        });
      }

      wordBank.innerHTML = '';
      q.scrambledWords.forEach(word => {
        // Count in scrambled vs in assembled
        const totalCount = q.scrambledWords.filter(w => w === word).length;
        const usedCount = assembledWords.filter(w => w === word).length;
        if (usedCount < totalCount) {
          const tile = document.createElement('button');
          tile.className = 'word-tile-btn';
          tile.textContent = word;
          tile.addEventListener('click', () => {
            ensureStudentRegistered();
            SoundFX.playClick();
            assembledWords.push(word);
            TestState.userAnswers[q.id] = assembledWords.join(' ');
            refreshTiles();
            renderPalette();
          });
          wordBank.appendChild(tile);
        }
      });
    }

    refreshTiles();
    wrap.appendChild(dropZone);
    wrap.appendChild(wordBank);
    container.appendChild(wrap);
  }

  // 4. Vocabulary Categorization
  function renderVocabCategorize(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'categorize-workspace';

    let userBuckets = TestState.userAnswers[q.id] || {};
    q.buckets.forEach(b => {
      if (!userBuckets[b.name]) userBuckets[b.name] = [];
    });

    const pool = document.createElement('div');
    pool.style.gridColumn = "1 / -1";
    pool.style.marginBottom = "14px";
    pool.innerHTML = `<strong style="color:var(--text-secondary); display:block; margin-bottom:8px;">ពាក្យដែលត្រូវចាត់ថ្នាក់៖</strong>`;

    let activeSelectedWord = null;

    q.options.forEach(word => {
      const isAssigned = Object.values(userBuckets).some(arr => arr.includes(word));
      if (!isAssigned) {
        const btn = document.createElement('button');
        btn.className = 'word-tile-btn';
        btn.textContent = word;
        btn.addEventListener('click', () => {
          ensureStudentRegistered();
          SoundFX.playClick();
          pool.querySelectorAll('.word-tile-btn').forEach(b => b.style.borderColor = 'var(--border-color)');
          btn.style.borderColor = 'var(--accent-gold)';
          activeSelectedWord = word;
        });
        pool.appendChild(btn);
      }
    });

    wrap.appendChild(pool);

    q.buckets.forEach(b => {
      const bucketBox = document.createElement('div');
      bucketBox.className = 'category-bucket-box';
      bucketBox.innerHTML = `<div class="bucket-title">📂 ${b.name}</div>`;
      const list = document.createElement('div');
      list.className = 'bucket-items-list';

      (userBuckets[b.name] || []).forEach(item => {
        const chip = document.createElement('div');
        chip.className = 'word-tile-btn';
        chip.style.display = 'flex';
        chip.style.justifyContent = 'space-between';
        chip.innerHTML = `<span>${item}</span> <span style="cursor:pointer; color:var(--accent-cyan); font-weight:700;">&times;</span>`;
        chip.querySelector('span:last-child').addEventListener('click', () => {
          SoundFX.playClick();
          userBuckets[b.name] = userBuckets[b.name].filter(x => x !== item);
          TestState.userAnswers[q.id] = userBuckets;
          renderVocabCategorize(q, container);
        });
        list.appendChild(chip);
      });

      bucketBox.appendChild(list);

      bucketBox.addEventListener('click', () => {
        ensureStudentRegistered();
        if (activeSelectedWord && !userBuckets[b.name].includes(activeSelectedWord)) {
          SoundFX.playClick();
          userBuckets[b.name].push(activeSelectedWord);
          TestState.userAnswers[q.id] = userBuckets;
          activeSelectedWord = null;
          renderVocabCategorize(q, container);
          renderPalette();
        }
      });

      wrap.appendChild(bucketBox);
    });

    container.appendChild(wrap);
  }

  // 5. Word Hunt / Anagram
  function renderWordHunt(q, container) {
    const wrap = document.createElement('div');
    wrap.className = 'anagram-tiles-wrapper';

    let typedLetters = TestState.userAnswers[q.id] ? TestState.userAnswers[q.id].split('') : [];

    const targetSlot = document.createElement('div');
    targetSlot.className = 'anagram-target-slot';
    targetSlot.textContent = typedLetters.length > 0 ? typedLetters.join(' ') : '_______';

    const pool = document.createElement('div');
    pool.className = 'anagram-pool';

    q.scrambledLetters.forEach((letter, idx) => {
      const tile = document.createElement('button');
      tile.className = 'anagram-letter-tile';
      tile.textContent = letter;

      tile.addEventListener('click', () => {
        ensureStudentRegistered();
        SoundFX.playClick();
        typedLetters.push(letter);
        TestState.userAnswers[q.id] = typedLetters.join('');
        targetSlot.textContent = typedLetters.join(' ');
        renderPalette();

        if (TestState.testMode === 'practice' && typedLetters.length === q.correctAnswer.length) {
          handleCheckCurrentAnswer();
        }
      });

      pool.appendChild(tile);
    });

    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.justifyContent = 'center';

    const clearBtn = document.createElement('button');
    clearBtn.className = 'btn-icon-control';
    clearBtn.textContent = '🔄 Clear (សម្អាត)';
    clearBtn.addEventListener('click', () => {
      SoundFX.playClick();
      typedLetters = [];
      TestState.userAnswers[q.id] = '';
      targetSlot.textContent = '_______';
      renderPalette();
    });

    controls.appendChild(clearBtn);

    if (q.hint) {
      const hintBtn = document.createElement('button');
      hintBtn.className = 'btn-icon-control';
      hintBtn.textContent = '💡 Hint (ជំនួយ)';
      hintBtn.addEventListener('click', () => {
        alert(`💡 Hint: ${q.hint}`);
      });
      controls.appendChild(hintBtn);
    }

    wrap.appendChild(targetSlot);
    wrap.appendChild(pool);
    wrap.appendChild(controls);
    container.appendChild(wrap);
  }

  // Audio Player Engine (Web Speech API)
  function setupAudioPlayer(textToSpeak) {
    const playBtn = document.getElementById('btn-play-audio');
    const waveEl = document.getElementById('audio-waves');
    const speedSelect = document.getElementById('audio-speed-select');
    const transcriptBtn = document.getElementById('btn-toggle-transcript');
    const transcriptBox = document.getElementById('audio-transcript-box');

    if (!playBtn) return;

    if (transcriptBtn && transcriptBox) {
      transcriptBox.textContent = textToSpeak;
      transcriptBtn.onclick = () => {
        const isHidden = transcriptBox.style.display === 'none' || !transcriptBox.style.display;
        transcriptBox.style.display = isHidden ? 'block' : 'none';
        transcriptBtn.textContent = isHidden ? '🙈 Hide Script' : '📜 Show Script';
      };
    }

    playBtn.onclick = () => {
      if (TestState.isSpeechPlaying) {
        stopSpeech();
      } else {
        startSpeech(textToSpeak, speedSelect ? Number(speedSelect.value) : 1.0);
      }
    };
  }

  function startSpeech(text, rate = 1.0) {
    if (!('speechSynthesis' in window)) {
      alert("Browser does not support Speech Synthesis audio playback.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.lang = 'en-GB'; // British English standard for MoEYS textbooks

    const playBtn = document.getElementById('btn-play-audio');
    const waveEl = document.getElementById('audio-waves');

    utterance.onstart = () => {
      TestState.isSpeechPlaying = true;
      if (playBtn) playBtn.innerHTML = `⏸️ Pause Audio`;
      if (waveEl) waveEl.classList.add('playing');
    };

    utterance.onend = utterance.onerror = () => {
      stopSpeech();
    };

    TestState.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    TestState.isSpeechPlaying = false;
    const playBtn = document.getElementById('btn-play-audio');
    const waveEl = document.getElementById('audio-waves');
    if (playBtn) playBtn.innerHTML = `🔊 Play Audio Script`;
    if (waveEl) waveEl.classList.remove('playing');
  }

  // Answer Evaluation Logic
  function handleCheckCurrentAnswer() {
    ensureStudentRegistered();
    const q = TestState.questions[TestState.currentIndex];
    if (!q) return;

    TestState.checkedQuestions[q.id] = true;
    const isCorrect = evaluateAnswer(q, TestState.userAnswers[q.id]);

    if (isCorrect) {
      SoundFX.playChime();
    } else {
      SoundFX.playBuzz();
    }

    if (window.CompetitionEngine && window.CompetitionEngine.state.isActive) {
      window.CompetitionEngine.onAnswerSubmitted(isCorrect, 10, { question: q.question });
    }

    const feedbackCard = document.getElementById('q-feedback-card');
    if (feedbackCard) {
      showFeedbackUI(q, feedbackCard, isCorrect);
    }

    // Refresh MCQ options to paint green/red
    const workArea = document.getElementById('q-interactive-workarea');
    if (workArea && q.type !== 'vocab_match' && q.type !== 'sentence_unscramble') {
      renderInteractiveQuestionContent(q, workArea);
    }

    renderPalette();
  }

  function evaluateAnswer(q, answer) {
    if (answer === undefined || answer === null) return false;

    if (q.type === 'vocab_match') {
      return Object.keys(answer).length === q.pairs.length;
    }

    if (q.type === 'sentence_unscramble') {
      const cleanAns = (answer || "").replace(/\s+/g, ' ').trim().toLowerCase();
      const cleanCorrect = q.correctAnswer.replace(/\s+/g, ' ').trim().toLowerCase();
      return cleanAns === cleanCorrect;
    }

    if (q.type === 'vocab_word_hunt') {
      return String(answer).toUpperCase() === q.correctAnswer.toUpperCase();
    }

    if (q.type === 'vocab_categorize') {
      let allCorrect = true;
      Object.keys(q.correctAnswer).forEach(bName => {
        const expected = q.correctAnswer[bName];
        const actual = (answer && answer[bName]) || [];
        if (expected.length !== actual.length || !expected.every(item => actual.includes(item))) {
          allCorrect = false;
        }
      });
      return allCorrect;
    }

    return answer === q.correctAnswer;
  }

  function showFeedbackUI(q, card, isCorrectOverride) {
    card.style.display = 'block';
    const isCorrect = isCorrectOverride !== undefined ? isCorrectOverride : evaluateAnswer(q, TestState.userAnswers[q.id]);

    card.className = `question-feedback-card ${isCorrect ? 'correct' : 'incorrect'}`;

    const titleEl = document.getElementById('feedback-status-title');
    if (titleEl) {
      titleEl.innerHTML = isCorrect ? '🎉 ត្រឹមត្រូវ! (Correct Answer)' : '❌ មិនទាន់ត្រឹមត្រូវទេ (Review Needed)';
    }

    const refEl = document.getElementById('feedback-ref-badge');
    if (refEl) {
      refEl.textContent = `📖 Textbook Source: ${q.textbookRef}`;
    }

    const enEl = document.getElementById('feedback-text-en');
    if (enEl) enEl.textContent = q.explanationEn;

    const kmEl = document.getElementById('feedback-text-km');
    if (kmEl) kmEl.textContent = q.explanationKm;
  }

  // Exam Submission & Comprehensive Results Analytics
  function confirmAndSubmitExam() {
    const unanswered = TestState.questions.filter(q => TestState.userAnswers[q.id] === undefined).length;
    if (unanswered > 0) {
      const confirmMsg = `អ្នកនៅសល់សំណួរចំនួន ${unanswered} មិនទាន់បានឆ្លើយ។ តើអ្នកពិតជាចង់បញ្ចប់ការប្រឡងឥឡូវនេះមែនទេ? (You have ${unanswered} unanswered questions. Submit anyway?)`;
      if (!confirm(confirmMsg)) return;
    }
    submitExamAuto();
  }

  function submitExamAuto() {
    if (TestState.timerInterval) clearInterval(TestState.timerInterval);
    SoundFX.playFanfare();

    let totalScore = 0;
    const bloomBreakdown = {
      L1_REMEMBER: { correct: 0, total: 0 },
      L2_UNDERSTAND: { correct: 0, total: 0 },
      L3_APPLY: { correct: 0, total: 0 },
      L4_ANALYZE: { correct: 0, total: 0 },
      L5_EVALUATE: { correct: 0, total: 0 },
      L6_CREATE: { correct: 0, total: 0 }
    };

    const categoryBreakdown = {
      reading_listening: { correct: 0, total: 0 },
      grammar: { correct: 0, total: 0 },
      vocabulary: { correct: 0, total: 0 }
    };

    TestState.questions.forEach(q => {
      const isCorrect = evaluateAnswer(q, TestState.userAnswers[q.id]);
      if (isCorrect) totalScore++;

      if (bloomBreakdown[q.bloom]) {
        bloomBreakdown[q.bloom].total++;
        if (isCorrect) bloomBreakdown[q.bloom].correct++;
      }

      if (categoryBreakdown[q.category]) {
        categoryBreakdown[q.category].total++;
        if (isCorrect) categoryBreakdown[q.category].correct++;
      }
    });

    const percent = Math.round((totalScore / Math.max(TestState.questions.length, 1)) * 100);

    let letterGrade = 'F';
    if (percent >= 90) letterGrade = 'A (ល្អប្រសើរ)';
    else if (percent >= 80) letterGrade = 'B (ល្អណាស់)';
    else if (percent >= 70) letterGrade = 'C (ល្អ)';
    else if (percent >= 60) letterGrade = 'D (មធ្យម)';
    else if (percent >= 50) letterGrade = 'E (ខ្សោយ)';

    // Render Modal
    const modal = document.getElementById('results-modal-overlay');
    if (!modal) return;

    modal.classList.add('active');

    if (window.CompetitionEngine && window.CompetitionEngine.state.isActive) {
      setTimeout(() => {
        window.CompetitionEngine.showWinnersPodium();
      }, 700);
    }

    const gradeEl = document.getElementById('results-grade-display');
    if (gradeEl) gradeEl.textContent = letterGrade;

    const percentEl = document.getElementById('results-score-display');
    if (percentEl) percentEl.textContent = `${percent}% (${totalScore} / ${TestState.questions.length} ពិន្ទុ)`;

    // Render Bloom Bar Chart
    const bloomContainer = document.getElementById('results-bloom-chart');
    if (bloomContainer) {
      bloomContainer.innerHTML = Object.keys(bloomBreakdown).map(k => {
        const b = bloomBreakdown[k];
        const bInfo = window.bloomTaxonomy[k];
        const bPct = b.total > 0 ? Math.round((b.correct / b.total) * 100) : 0;
        return `
          <div class="bloom-bar-row">
            <span class="bloom-bar-label" style="color: ${bInfo.color};">${bInfo.badge}</span>
            <div class="bloom-bar-track">
              <div class="bloom-bar-fill" style="width: ${bPct}%; background-color: ${bInfo.color};"></div>
            </div>
            <span class="bloom-bar-val">${bPct}%</span>
          </div>
        `;
      }).join('');
    }

    // Populate Printable Certificate
    const certStudentName = document.getElementById('cert-student-name');
    const certStudentGrade = document.getElementById('cert-student-grade');
    const certScore = document.getElementById('cert-score-text');
    const certDate = document.getElementById('cert-date-text');
    const certMode = document.getElementById('cert-mode-text');

    if (certScore) certScore.textContent = `${percent}% (Grade: ${letterGrade})`;
    if (certDate) certDate.textContent = new Date().toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: 'numeric' });
    if (certMode) {
      const modeObj = window.examModes.find(m => m.id === TestState.mode);
      certMode.textContent = modeObj ? modeObj.titleKm : 'English Grade 10 Assessment';
    }

    // Student Assessment Record & Display
    const modeObj = window.examModes.find(m => m.id === TestState.mode);
    const modeTitle = modeObj ? modeObj.titleKm : 'Grade 10 Assessment';
    const bloomObj = window.bloomTaxonomy[TestState.selectedBloom];
    const levelName = bloomObj ? bloomObj.level : (TestState.selectedBloom || 'All Levels');

    function finalizeStudentSubmit(st) {
      if (window.StudentAssessment) {
        window.StudentAssessment.recordAttempt({
          testType: 'Grade 10 MoEYS Test',
          testTopic: modeTitle,
          level: levelName,
          total: TestState.questions.length,
          answered: Object.keys(TestState.userAnswers).length,
          correct: totalScore,
          gradeLetter: letterGrade,
          name: st ? st.name : '',
          grade: st ? st.grade : '',
          email: st ? st.email : ''
        });
      }

      const infoBox = document.getElementById('results-student-info');
      if (infoBox) {
        if (st && st.name) {
          infoBox.innerHTML = `
            <div style="font-weight:700; color:var(--text-primary); font-size:1.05rem;">
              🎓 សិស្ស៖ <span style="color:#059669;">${window.StudentAssessment ? window.StudentAssessment.escapeHtml(st.name) : st.name}</span> • ថ្នាក់៖ <strong>${window.StudentAssessment ? window.StudentAssessment.escapeHtml(st.grade) : st.grade}</strong>
            </div>
            <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:3px;">
              📧 ${window.StudentAssessment ? window.StudentAssessment.escapeHtml(st.email) : st.email} • បានកត់ត្រាពិន្ទុជោគជ័យសម្រាប់វាយតម្លៃវឌ្ឍនភាពសិក្សា!
            </div>
          `;
        } else {
          infoBox.innerHTML = `
            <div style="font-size:0.9rem; color:var(--text-secondary);">
              ⚠️ ពិន្ទុមិនទាន់បានកត់ត្រាចូលបញ្ជីឈ្មោះសិស្សទេ • <button type="button" class="btn-register-now" style="background:none; border:none; color:var(--accent-cyan); text-decoration:underline; cursor:pointer; font-weight:700;">ចុចទីនេះដើម្បីចុះឈ្មោះ</button>
            </div>
          `;
          const regBtn = infoBox.querySelector('.btn-register-now');
          if (regBtn && window.StudentAssessment) {
            regBtn.addEventListener('click', () => {
              window.StudentAssessment.requireStudentInfo((newSt) => finalizeStudentSubmit(newSt), true);
            });
          }
        }
      }

      if (certStudentName && st && st.name) certStudentName.textContent = st.name;
      if (certStudentGrade && st && st.grade) certStudentGrade.textContent = st.grade;
    }

    if (window.StudentAssessment) {
      if (!window.StudentAssessment.hasStudent()) {
        window.StudentAssessment.requireStudentInfo((st) => {
          finalizeStudentSubmit(st);
        });
      } else {
        finalizeStudentSubmit(window.StudentAssessment.getCurrentStudent());
      }
    } else {
      finalizeStudentSubmit(null);
    }
  }

  // Export to window
  window.Grade10TestsEngine = {
    init: initEngine,
    getState: () => TestState,
    loadFilteredQuestions
  };

  // Auto init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEngine);
  } else {
    initEngine();
  }
})();
