/**
 * GRAMMAR PAGE CONTROLLER (grammar-page.js)
 * Standalone clean lesson reader & international standard CEFR test engine for Mr. OL English
 */

(function () {
  'use strict';

  // Topic sequence for previous/next lesson navigation
  const TOPIC_SEQUENCE = [
    'nouns',
    'pronouns',
    'verbs',
    'adverbs',
    'adjectives',
    'prepositions',
    'conjunctions',
    'interjections',
    'articles',
    'tenses_present',
    'tenses_past',
    'tenses_future',
    'voice',
    'clauses',
    'sentence_structures',
    'gerund_infinitive',
    'used_to'
  ];

  let currentTopicId = 'nouns';
  let activeFilterLevel = 'ALL'; // 'ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
  let userAnswersState = {}; // questionId -> { selectedIndex, isCorrect }

  function getQueryTopic() {
    const params = new URLSearchParams(window.location.search);
    let topic = params.get('topic') || params.get('id') || params.get('grammar');
    
    // Support hash fallback for file:/// protocol
    if (!topic && window.location.hash) {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash.startsWith('topic=')) {
        topic = hash.split('&')[0].replace('topic=', '');
      } else if (window.GRAMMAR_MASTER_DATA && window.GRAMMAR_MASTER_DATA[hash]) {
        topic = hash;
      }
    }

    if (topic && window.GRAMMAR_MASTER_DATA && window.GRAMMAR_MASTER_DATA[topic]) {
      return topic;
    }
    return 'nouns';
  }

  function getQueryLevel() {
    const params = new URLSearchParams(window.location.search);
    let lvl = params.get('level');
    if (!lvl && window.location.hash) {
      const match = window.location.hash.match(/level=([a-zA-Z0-9_&]+)/i);
      if (match) lvl = match[1];
    }
    if (lvl) {
      lvl = lvl.toUpperCase();
      if (['C1_C2', 'C1&C2', 'C1C2', 'C1', 'C2'].includes(lvl)) return 'C1_C2';
      if (['ALL', 'A1', 'A2', 'B1', 'B2'].includes(lvl)) return lvl;
    }
    return 'ALL';
  }

  function getQuerySection() {
    const params = new URLSearchParams(window.location.search);
    let sec = params.get('section') || params.get('view');
    if (!sec && window.location.hash) {
      if (window.location.hash.includes('sec-tests') || window.location.hash.includes('test')) return 'test';
      if (window.location.hash.includes('sec-notesheet') || window.location.hash.includes('lesson')) return 'lesson';
    }
    if (sec) return sec.toLowerCase();
    return null;
  }

  function init() {
    currentTopicId = getQueryTopic();
    const lvl = getQueryLevel();
    const sec = getQuerySection();
    renderLesson(currentTopicId, lvl, sec);
    setupScrollSpy();
    setupSidebarToggle();

    // Listen for browser navigation
    window.addEventListener('popstate', () => {
      currentTopicId = getQueryTopic();
      renderLesson(currentTopicId, getQueryLevel(), getQuerySection());
    });

    window.addEventListener('hashchange', () => {
      currentTopicId = getQueryTopic();
      renderLesson(currentTopicId, getQueryLevel(), getQuerySection());
    });
  }

  let loadRetryCount = 0;
  function renderLesson(topicId, customLevel, customSection) {
    if (!window.GRAMMAR_MASTER_DATA) {
      loadRetryCount++;
      if (loadRetryCount > 20) {
        const container = document.getElementById('grammar-lesson-render');
        if (container) {
          container.innerHTML = `
            <div class="grammar-load-error-card" style="text-align:center; padding: 4rem 1.5rem; max-width: 520px; margin: 2rem auto; background: var(--elearn-card-bg, #ffffff); border: 1px solid var(--elearn-border, #e2e8f0); border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
              <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
              <h2 style="font-size: 1.35rem; font-weight: 800; color: var(--elearn-text-dark, #0f172a); margin-bottom: 0.5rem;">
                មិនអាចទាញយកទិន្នន័យមេរៀនបានទេ
              </h2>
              <p style="font-size: 0.95rem; color: var(--elearn-text-gray, #64748b); margin-bottom: 1.5rem; line-height: 1.6;">
                Unable to load grammar lesson. Please check your internet connection and try again.
              </p>
              <button type="button" class="btn-retry-load" onclick="window.location.reload()" style="display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:48px; padding:12px 28px; background:var(--elearn-green, #234E38); color:#fff; font-weight:700; border-radius:12px; border:none; cursor:pointer; font-size:1rem; touch-action:manipulation;">
                <span>🔄</span> <span>ព្យាយាមម្ដងទៀត / Retry</span>
              </button>
            </div>
          `;
        }
        return;
      }
      console.warn('Grammar master data not yet loaded. Retrying in 100ms...');
      setTimeout(() => renderLesson(topicId, customLevel, customSection), 100);
      return;
    }
    loadRetryCount = 0;

    const data = window.GRAMMAR_MASTER_DATA[topicId];
    if (!data) {
      console.error('Topic not found in GRAMMAR_MASTER_DATA:', topicId);
      return;
    }

    // Attach tests from standard repository
    if (window.GRAMMAR_TESTS_DATA && window.GRAMMAR_TESTS_DATA[topicId]) {
      data.tests = window.GRAMMAR_TESTS_DATA[topicId];
    }

    // Reset user answers for the new topic
    userAnswersState = {};
    activeFilterLevel = customLevel || getQueryLevel() || 'ALL';

    // Update document title
    document.title = `${data.title} - Master Lesson & Standard Tests | Mr. OL English`;

    // Highlight active link in sidebar
    document.querySelectorAll('.sidebar-topic-link').forEach(link => {
      const linkTopic = link.getAttribute('data-grammar-topic');
      if (linkTopic === topicId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    const container = document.getElementById('grammar-lesson-render');
    if (!container) return;

    // Render Full Clean Lesson Content
    container.innerHTML = `
      <!-- Sticky Mini Quick Jump Bar -->
      <nav class="sticky-jump-bar" aria-label="Quick Section Navigation">
        <a href="#sec-notesheet" class="jump-pill active">📝 Note Sheet</a>
        <a href="#sec-meaning" class="jump-pill">📖 Meaning</a>
        <a href="#sec-usage" class="jump-pill">💡 Usages</a>
        <a href="#sec-types" class="jump-pill">📂 Types (${(data.kinds || []).length})</a>
        <a href="#sec-formation" class="jump-pill">⚡ Formulas</a>
        <a href="#sec-exceptions" class="jump-pill">⚠️ Traps</a>
        <a href="#sec-examples" class="jump-pill">💬 Examples</a>
        <a href="#sec-tests" class="jump-pill test-jump">🎯 Standard Tests (A1-C2)</a>
      </nav>

      <!-- Lesson Header & Hero -->
      <header class="lesson-header-hero">
        <div class="lesson-breadcrumb">
          <a href="index.html">ទំព័រដើម</a>
          <span>›</span>
          <a href="index.html#courses">វគ្គសិក្សាភាសាអង់គ្លេស</a>
          <span>›</span>
          <span class="active-crumb">${data.catTitle} (${data.catTitleKh})</span>
          <span>›</span>
          <strong>${data.title}</strong>
        </div>

        <div class="lesson-meta-bar">
          <span class="meta-badge category">${data.catTitle} • ${data.catTitleKh}</span>
          <span class="meta-badge cefr-all">${data.badge || 'CEFR A1 - C2'}</span>
          <span class="meta-badge time">⏱️ ~20 Mins Study + ${(data.tests || []).length} Graded Standard Questions</span>
        </div>

        <h1 class="lesson-main-title">${data.title}</h1>
        <div class="lesson-subtitle-kh">${data.subtitle || ''}</div>
      </header>

      <!-- Section 1: Handwritten Study Sheet -->
      <section id="sec-notesheet" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>📝</span> សន្លឹកកត់ត្រាសង្ខេប (Handwritten Master Study Sheet)</h2>
          <div class="sheet-toolbar">
            <button type="button" class="sheet-mode-btn" id="page-theme-toggle">
              <span class="toggle-icon">🏫</span> <span class="toggle-text">Chalkboard Style</span>
            </button>
            <button type="button" class="sheet-mode-btn" onclick="window.print()">
              <span>🖨️</span> <span>Print Study Sheet</span>
            </button>
          </div>
        </div>

        <div class="handwritten-sheet-wrapper">
          <div id="page-sheet-target" class="hw-notebook-card" style="box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
            ${(data.hwSummary && data.hwSummary.diagram) ? data.hwSummary.diagram : ''}
          </div>
        </div>
      </section>

      <!-- Section 2: Detail of Meaning & Concept -->
      <section id="sec-meaning" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>📖</span> អត្ថន័យ និងនិយមន័យ (Detail of Meaning &amp; Concept)</h2>
          <span class="sec-badge">Core Concept</span>
        </div>

        <div class="definition-card">
          <div class="def-en">${data.meaning}</div>
        </div>
      </section>

      <!-- Section 3: Usages & Real-world Situations -->
      <section id="sec-usage" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>💡</span> ការប្រើប្រាស់ជាក់ស្តែង (Practical Usage &amp; Situations)</h2>
          <span class="sec-badge">Practical Rules</span>
        </div>

        <div style="background: var(--elearn-bg); border: 1px solid var(--elearn-border); border-radius: 18px; padding: 1.5rem; line-height: 1.8;">
          <div style="font-size: 1.05rem; color: var(--elearn-text-dark); font-weight: 500;">
            ${data.use}
          </div>
        </div>
      </section>

      <!-- Section 4: Types & Classifications -->
      <section id="sec-types" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>📂</span> ប្រភេទ និងចំណាត់ថ្នាក់ (Kinds &amp; Classifications)</h2>
          <span class="sec-badge">${(data.kinds || []).length} Classifications</span>
        </div>

        <div class="types-list">
          ${(data.kinds || []).map((k, idx) => `
            <div class="types-category-card">
              <div class="type-header">
                <div class="type-name">
                  <span style="display:inline-flex; align-items:center; justify-content:center; width:26px; height:26px; border-radius:50%; background:var(--elearn-green); color:#fff; font-size:0.8rem; font-weight:800; margin-right:0.5rem;">${idx + 1}</span>
                  ${k.name}
                </div>
              </div>
              <div style="font-size: 0.95rem; color: var(--elearn-text-gray); line-height: 1.7; margin-bottom: 0.75rem;">
                ${k.desc}
              </div>
              ${k.example ? `
                <div style="background: var(--elearn-card-bg); border-left: 3px solid var(--elearn-orange); padding: 0.65rem 0.9rem; border-radius: 0 10px 10px 0; font-size: 0.9rem; color: var(--elearn-text-dark);">
                  <strong>Examples:</strong> <span style="font-style: italic; color: var(--elearn-green);">${k.example}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section 5: Formation & Structural Rules -->
      <section id="sec-formation" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>⚡</span> ទម្រង់ និងក្បួនបង្កើត (Formations &amp; Structures)</h2>
          <span class="sec-badge">Rules &amp; Patterns</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
          ${(data.formation || []).map(f => `
            <div style="background: var(--elearn-bg); border: 1px solid var(--elearn-border); border-radius: 16px; padding: 1.35rem; display: flex; flex-direction: column;">
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--elearn-text-dark); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.45rem;">
                <span>✦</span> <span>${f.rule}</span>
              </div>
              <div style="font-size: 0.92rem; color: var(--elearn-text-gray); line-height: 1.7;">
                ${f.detail}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section 6: Exceptional Rules & Traps -->
      <section id="sec-exceptions" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>⚠️</span> ក្បួនលើកលែង និងកំហុសទូទៅ (Exceptions &amp; Exam Traps)</h2>
          <span class="sec-badge" style="background: rgba(239, 68, 68, 0.1); color: #EF4444;">Watch Out</span>
        </div>

        <div class="traps-list">
          ${(data.exceptionalRules || []).map(r => `
            <div class="trap-warning-card">
              <div class="trap-title">
                <span>🚨</span> <span>Critical Rule / Trap</span>
              </div>
              <div class="trap-desc">${r}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section 7: Practical Sentence Examples with Khmer -->
      <section id="sec-examples" class="grammar-section">
        <div class="section-anchor-header">
          <h2><span>💬</span> ឧទាហរណ៍ជាក់ស្តែង (Real-life Sentence Examples)</h2>
          <span class="sec-badge">Bilingual Models</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${(data.examples || []).map((ex, idx) => `
            <div style="background: var(--elearn-bg); border: 1px solid var(--elearn-border); border-radius: 16px; padding: 1.25rem 1.5rem;">
              <div style="font-size: 1.08rem; font-weight: 700; color: var(--elearn-text-dark); margin-bottom: 0.45rem;">
                ${idx + 1}. "${ex.en}"
              </div>
              <div style="font-size: 0.98rem; color: var(--elearn-green); font-weight: 600; margin-bottom: 0.5rem;">
                👉 ${ex.kh}
              </div>
              ${ex.note ? `
                <div style="font-size: 0.85rem; color: var(--elearn-text-light); border-top: 1px dashed var(--elearn-border); padding-top: 0.45rem;">
                  💡 <strong>Grammar Note:</strong> ${ex.note}
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section 8: Standard CEFR Graded Tests Engine -->
      <section id="sec-tests" class="standard-test-section">
        <div class="test-engine-header">
          <span class="test-badge-standard">International Standard ELT Assessment</span>
          <h2 class="test-engine-title">តេស្តស្ដង់ដារអន្តរជាតិ (A1 - C2 Graded Tests)</h2>
          <p class="test-engine-subtitle">
            កម្រងសំណួរស្ដង់ដារអន្តរជាតិ ស្រង់ចេញពីប្រភព ELT ឈានមុខគេលើពិភពលោក (ដូចជា British Council, test-english, VOA, Wordwall/Bamboozle)។ សំណួរខ្លី ច្បាស់លាស់ ងាយស្រួលយល់ និងមានការពន្យល់លម្អិត។
          </p>
        </div>

        <!-- Student Assessment Bar (Name, Grade, Email) -->
        <div id="grammar-student-bar" style="margin-bottom: 1.5rem;"></div>

        <!-- Filter Level Buttons -->
        <div class="cefr-filter-tabs" role="tablist">
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'ALL' ? 'active' : ''}" data-level="ALL">All Levels / Mixed (${(data.tests || []).length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'A1' ? 'active' : ''}" data-level="A1">A1 Beginner (${(data.tests || []).filter(x => x.level === 'A1').length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'A2' ? 'active' : ''}" data-level="A2">A2 Elementary (${(data.tests || []).filter(x => x.level === 'A2').length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'B1' ? 'active' : ''}" data-level="B1">B1 Intermediate (${(data.tests || []).filter(x => x.level === 'B1').length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'B2' ? 'active' : ''}" data-level="B2">B2 Upper-Int (${(data.tests || []).filter(x => x.level === 'B2').length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'C1_C2' ? 'active' : ''}" data-level="C1_C2">C1 &amp; C2 Mastery (${(data.tests || []).filter(x => ['C1', 'C2'].includes(x.level)).length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'C1' ? 'active' : ''}" data-level="C1">C1 (${(data.tests || []).filter(x => x.level === 'C1').length})</button>
          <button type="button" class="cefr-tab-btn ${activeFilterLevel === 'C2' ? 'active' : ''}" data-level="C2">C2 (${(data.tests || []).filter(x => x.level === 'C2').length})</button>
        </div>

        <!-- Score Dashboard -->
        <div class="test-score-summary">
          <div class="score-stats">
            <div class="stat-item">
              <span class="stat-label">Total Questions</span>
              <span class="stat-val" id="stat-total-q">${(data.tests || []).length}</span>
            </div>
            <div class="stat-item correct">
              <span class="stat-label">Correct</span>
              <span class="stat-val" id="stat-correct">0</span>
            </div>
            <div class="stat-item wrong">
              <span class="stat-label">Incorrect</span>
              <span class="stat-val" id="stat-wrong">0</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Accuracy</span>
              <span class="stat-val" id="stat-accuracy">0%</span>
            </div>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
            <button type="button" class="btn-launch-arena-mode" id="btn-grammar-arena-mode" title="បើកការប្រកួតជាក្រុម ឬគូ">
              ⚔️ របៀបប្រកួត (Arena Mode)
            </button>
            <button type="button" class="retake-test-btn" id="btn-retake-test">
              🔄 Reset Tests
            </button>
            <button type="button" class="retake-test-btn" id="btn-grammar-export-excel" style="background: linear-gradient(135deg, #059669, #047857); color: #fff; border: none; font-weight: 700;">
              📗 ទាញយក Excel
            </button>
            <button type="button" class="retake-test-btn" id="btn-grammar-copy-sheets" style="background: linear-gradient(135deg, #2563EB, #1D4ED8); color: #fff; border: none; font-weight: 700;">
              📋 Google Sheets
            </button>
            <button type="button" class="retake-test-btn" id="btn-grammar-view-records">
              📊 កំណត់ត្រា &amp; វាយតម្លៃ
            </button>
          </div>
        </div>

        <!-- Questions List Render Target -->
        <div class="questions-container" id="questions-list-target">
          <!-- Rendered by renderQuestionsList() -->
        </div>
      </section>

      <!-- Lesson Navigation Footer (Previous / Next) -->
      ${renderLessonFooterNav(topicId)}
    `;

    // Initialize Chalkboard switch
    setupChalkboardToggle();

    // Render initial questions list
    renderQuestionsList(data.tests || []);

    // Setup CEFR filter tab click handlers
    setupFilterTabs(data.tests || []);

    // Render student badge in grammar-student-bar
    if (window.StudentAssessment) {
      window.StudentAssessment.renderStudentBadge('grammar-student-bar');
    }

    // Setup Retake button
    const retakeBtn = document.getElementById('btn-retake-test');
    if (retakeBtn) {
      retakeBtn.addEventListener('click', () => {
        userAnswersState = {};
        renderQuestionsList(data.tests || []);
        updateScoreStats(data.tests || []);
      });
    }

    // Setup Export & Assessment buttons
    const exportExcelBtn = document.getElementById('btn-grammar-export-excel');
    if (exportExcelBtn) {
      exportExcelBtn.addEventListener('click', () => {
        if (window.StudentAssessment) window.StudentAssessment.downloadExcelCSV();
      });
    }

    const copySheetsBtn = document.getElementById('btn-grammar-copy-sheets');
    if (copySheetsBtn) {
      copySheetsBtn.addEventListener('click', () => {
        if (window.StudentAssessment) window.StudentAssessment.copyForGoogleSheets();
      });
    }

    const viewRecordsBtn = document.getElementById('btn-grammar-view-records');
    if (viewRecordsBtn) {
      viewRecordsBtn.addEventListener('click', () => {
        if (window.StudentAssessment) window.StudentAssessment.showRecordsModal();
      });
    }

    // Scroll handling based on section or level
    const sec = customSection || getQuerySection();
    if (sec === 'test' || window.location.hash.includes('sec-tests') || (customLevel && customLevel !== 'ALL')) {
      setTimeout(() => {
        const testEl = document.getElementById('sec-tests');
        if (testEl) {
          testEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 180);
    } else if (sec === 'lesson' || window.location.hash.includes('sec-notesheet')) {
      setTimeout(() => {
        const noteEl = document.getElementById('sec-notesheet');
        if (noteEl) {
          noteEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 180);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Auto-wrap any tables in responsive container
    container.querySelectorAll('table').forEach(tbl => {
      if (!tbl.parentElement.classList.contains('table-responsive-wrapper')) {
        const wrap = document.createElement('div');
        wrap.className = 'table-responsive-wrapper';
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
      }
    });

    // Re-initialize ScrollSpy on newly rendered jump pills
    setupScrollSpy();
  }

  function renderLessonFooterNav(topicId) {
    const currentIndex = TOPIC_SEQUENCE.indexOf(topicId);
    const prevId = currentIndex > 0 ? TOPIC_SEQUENCE[currentIndex - 1] : null;
    const nextId = currentIndex < TOPIC_SEQUENCE.length - 1 ? TOPIC_SEQUENCE[currentIndex + 1] : null;

    const prevData = prevId && window.GRAMMAR_MASTER_DATA[prevId];
    const nextData = nextId && window.GRAMMAR_MASTER_DATA[nextId];

    return `
      <footer class="lesson-nav-footer">
        ${prevData ? `
          <a href="grammar.html?topic=${prevId}" class="topic-nav-card prev" data-switch-topic="${prevId}">
            <span class="nav-direction-label">← មេរៀនមុន (Previous Lesson)</span>
            <span class="nav-target-title">${prevData.title}</span>
            <span class="nav-target-sub">${prevData.catTitle}</span>
          </a>
        ` : `<div></div>`}

        ${nextData ? `
          <a href="grammar.html?topic=${nextId}" class="topic-nav-card next" data-switch-topic="${nextId}">
            <span class="nav-direction-label">មេរៀនបន្ទាប់ (Next Lesson) →</span>
            <span class="nav-target-title">${nextData.title}</span>
            <span class="nav-target-sub">${nextData.catTitle}</span>
          </a>
        ` : `<div></div>`}
      </footer>
    `;
  }

  function renderQuestionsList(allTests) {
    const target = document.getElementById('questions-list-target');
    if (!target) return;

    const filtered = (activeFilterLevel === 'ALL')
      ? allTests
      : (activeFilterLevel === 'C1_C2')
        ? allTests.filter(q => ['C1', 'C2'].includes(q.level.toUpperCase()))
        : allTests.filter(q => q.level.toUpperCase() === activeFilterLevel.toUpperCase());

    if (!filtered || filtered.length === 0) {
      target.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--elearn-text-gray); background: var(--elearn-card-bg); border-radius: 16px; border: 1px dashed var(--elearn-border);">
          No questions available for ${activeFilterLevel} in this module.
        </div>
      `;
      return;
    }

    target.innerHTML = filtered.map((q, idx) => {
      const state = userAnswersState[q.id];
      const hasAnswered = state !== undefined;
      const letters = ['A', 'B', 'C', 'D'];

      return `
        <div class="test-question-card" id="q-card-${q.id}">
          <div class="question-top-bar">
            <div class="q-meta-badges">
              <span class="q-number-badge">Item ${idx + 1} of ${filtered.length}</span>
              <span class="q-level-pill level-${q.level}">${q.level}</span>
              ${q.typeLabel ? `<span class="q-type-pill">${q.typeLabel}</span>` : ''}
              ${q.skillTested ? `<span class="q-skill-pill">🎯 ${q.skillTested}</span>` : ''}
            </div>
          </div>

          <div class="question-prompt">
            ${q.question}
          </div>

          <div class="options-list">
            ${q.options.map((opt, optIndex) => {
              let btnClass = 'option-btn';
              if (hasAnswered) {
                if (optIndex === q.answer) {
                  btnClass += (state.selectedIndex === optIndex) ? ' selected-correct' : ' reveal-correct';
                } else if (state.selectedIndex === optIndex && !state.isCorrect) {
                  btnClass += ' selected-wrong';
                }
              }

              return `
                <button type="button" 
                        class="${btnClass}" 
                        data-qid="${q.id}" 
                        data-opt-index="${optIndex}"
                        ${hasAnswered ? 'disabled' : ''}>
                  <span class="option-letter">${letters[optIndex]}</span>
                  <span class="option-text">${opt}</span>
                </button>
              `;
            }).join('')}
          </div>

          ${hasAnswered ? `
            <div class="question-explanation-box">
              <div style="font-weight: 700; color: ${state.isCorrect ? '#10B981' : '#EF4444'}; margin-bottom: 0.35rem;">
                ${state.isCorrect ? '✅ ត្រឹមត្រូវ (Correct!)' : '❌ មិនត្រឹមត្រូវ (Incorrect)'}
              </div>
              <div>${q.explanation}</div>
              ${q.sourceTip ? `
                <div class="explanation-source-tag">📚 Standard Source: ${q.sourceTip}</div>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Attach click events on option buttons
    target.querySelectorAll('.option-btn:not(:disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.getAttribute('data-qid');
        const optIndex = parseInt(btn.getAttribute('data-opt-index'), 10);
        handleOptionSelect(qid, optIndex, allTests);
      });
    });

    updateScoreStats(allTests);
  }

  function handleOptionSelect(questionId, selectedIndex, allTests) {
    function processAnswer() {
      const question = allTests.find(q => q.id === questionId);
      if (!question) return;

      const isCorrect = (selectedIndex === question.answer);
      userAnswersState[questionId] = { selectedIndex, isCorrect };

      if (window.CompetitionEngine && window.CompetitionEngine.state.isActive) {
        window.CompetitionEngine.onAnswerSubmitted(isCorrect, 10, { question: question.question });
      }

      if (navigator.vibrate) {
        navigator.vibrate(isCorrect ? 40 : [50, 40, 50]);
      }

      renderQuestionsList(allTests);
      recordGrammarAttemptProgress(allTests);
    }

    if (window.StudentAssessment && !window.StudentAssessment.hasStudent()) {
      window.StudentAssessment.requireStudentInfo(() => {
        processAnswer();
      });
    } else {
      processAnswer();
    }
  }

  function recordGrammarAttemptProgress(allTests) {
    if (!window.StudentAssessment) return;
    const currentStudent = window.StudentAssessment.getCurrentStudent();
    if (!currentStudent || !currentStudent.name) return;

    const activeQuestions = (activeFilterLevel === 'ALL')
      ? allTests
      : (activeFilterLevel === 'C1_C2')
        ? allTests.filter(q => ['C1', 'C2'].includes(q.level.toUpperCase()))
        : allTests.filter(q => q.level.toUpperCase() === activeFilterLevel.toUpperCase());

    const activeQuestionIds = new Set(activeQuestions.map(q => q.id));
    const answeredIdsInView = Object.keys(userAnswersState).filter(id => activeQuestionIds.has(id));
    if (answeredIdsInView.length === 0) return;

    const correctCount = answeredIdsInView.filter(id => userAnswersState[id].isCorrect).length;
    const topicData = window.GRAMMAR_MASTER_DATA[currentTopicId] || {};
    const topicName = topicData.title || currentTopicId || 'Grammar Quiz';

    window.StudentAssessment.recordAttempt({
      testType: 'Grammar CEFR Test',
      testTopic: topicName,
      level: activeFilterLevel === 'ALL' ? 'Mixed' : activeFilterLevel,
      total: activeQuestions.length,
      answered: answeredIdsInView.length,
      correct: correctCount,
      updateRecent: true,
      name: currentStudent.name,
      grade: currentStudent.grade,
      email: currentStudent.email
    });

    if (answeredIdsInView.length === activeQuestions.length && activeQuestions.length > 0) {
      const pct = Math.round((correctCount / activeQuestions.length) * 100);
      window.StudentAssessment.showToast(`🎉 អបអរសាទរ ${currentStudent.name}! អ្នកបានបញ្ចប់កម្រងសំណួរដោយទទួលបានពិន្ទុ ${pct}% (${correctCount}/${activeQuestions.length})`, 'success');
    }
  }

  function updateScoreStats(allTests) {
    const activeQuestions = (activeFilterLevel === 'ALL')
      ? allTests
      : (activeFilterLevel === 'C1_C2')
        ? allTests.filter(q => ['C1', 'C2'].includes(q.level.toUpperCase()))
        : allTests.filter(q => q.level.toUpperCase() === activeFilterLevel.toUpperCase());

    const activeQuestionIds = new Set(activeQuestions.map(q => q.id));
    const answeredIdsInView = Object.keys(userAnswersState).filter(id => activeQuestionIds.has(id));
    const correctCount = answeredIdsInView.filter(id => userAnswersState[id].isCorrect).length;
    const wrongCount = answeredIdsInView.length - correctCount;

    const totalEl = document.getElementById('stat-total-q');
    const correctEl = document.getElementById('stat-correct');
    const wrongEl = document.getElementById('stat-wrong');
    const accuracyEl = document.getElementById('stat-accuracy');

    if (totalEl) totalEl.textContent = activeQuestions.length;
    if (correctEl) correctEl.textContent = correctCount;
    if (wrongEl) wrongEl.textContent = wrongCount;

    if (accuracyEl) {
      if (answeredIdsInView.length === 0) {
        accuracyEl.textContent = '0%';
      } else {
        const pct = Math.round((correctCount / answeredIdsInView.length) * 100);
        accuracyEl.textContent = `${pct}%`;
      }
    }
  }

  function setupFilterTabs(allTests) {
    const tabs = document.querySelectorAll('.cefr-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFilterLevel = tab.getAttribute('data-level');
        renderQuestionsList(allTests);
      });
    });
  }

  function setupChalkboardToggle() {
    const btn = document.getElementById('page-theme-toggle');
    const target = document.getElementById('page-sheet-target');
    if (!btn || !target) return;

    let isChalkboard = false;
    btn.addEventListener('click', () => {
      isChalkboard = !isChalkboard;
      if (isChalkboard) {
        target.classList.add('chalkboard-mode');
        btn.innerHTML = '<span class="toggle-icon">📝</span> <span class="toggle-text">Paper Notebook Style</span>';
      } else {
        target.classList.remove('chalkboard-mode');
        btn.innerHTML = '<span class="toggle-icon">🏫</span> <span class="toggle-text">Chalkboard Style</span>';
      }
    });
  }

  function setupScrollSpy() {
    const jumpPills = document.querySelectorAll('.sticky-jump-bar .jump-pill');
    const tocLinks = document.querySelectorAll('.toc-item a');
    const sections = document.querySelectorAll('.grammar-section');

    if (!sections.length) return;

    if ('IntersectionObserver' in window) {
      if (window._grammarSectionObserver) {
        window._grammarSectionObserver.disconnect();
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentSecId = entry.target.getAttribute('id');
            if (!currentSecId) return;

            jumpPills.forEach(pill => {
              const href = pill.getAttribute('href');
              if (href === `#${currentSecId}`) {
                pill.classList.add('active');
                // Auto-center active pill on mobile horizontally scrollable bar
                if (window.innerWidth <= 1024) {
                  pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
              } else {
                pill.classList.remove('active');
              }
            });

            tocLinks.forEach(link => {
              const href = link.getAttribute('href');
              if (href === `#${currentSecId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1
      });

      sections.forEach(sec => observer.observe(sec));
      window._grammarSectionObserver = observer;
    }
  }

  function setupSidebarToggle() {
    const topicsBtn = document.getElementById('floating-topics-btn');
    const sidebar = document.getElementById('grammar-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const closeBtn = document.getElementById('sidebar-close-btn');

    if (!sidebar) return;

    function openSidebar() {
      sidebar.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
      if (topicsBtn) topicsBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('sidebar-open');
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      if (backdrop) backdrop.classList.remove('active');
      if (topicsBtn) topicsBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('sidebar-open');
    }

    if (topicsBtn) {
      topicsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openSidebar();
      });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (backdrop) backdrop.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });

    // Close sidebar on topic selection on mobile
    sidebar.addEventListener('click', (e) => {
      const link = e.target.closest('.sidebar-topic-link');
      if (link && window.innerWidth <= 1024) {
        closeSidebar();
      }
    });
  }

    // Delegate clicks for sidebar and footer links to switch topics smoothly
    // Delegate clicks for sidebar, navbar, and footer links to switch topics smoothly
    document.addEventListener('click', (e) => {
      const topicLink = e.target.closest('[data-grammar-topic]') || e.target.closest('[data-switch-topic]');
      if (topicLink) {
        // If clicking a parent menu item on mobile, ignore accordion toggles and prevent navigation
        const isTouchOrMobile = window.innerWidth <= 1024 || window.matchMedia('(hover: none)').matches;
        if (isTouchOrMobile && (topicLink.classList.contains('nested-3rd-parent') || topicLink.classList.contains('nested-4th-parent'))) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        const targetTopic = topicLink.getAttribute('data-grammar-topic') || topicLink.getAttribute('data-switch-topic');
        const targetLevel = topicLink.getAttribute('data-level') || '';
        const targetSec = topicLink.getAttribute('data-target-section') || '';

        if (targetTopic && window.GRAMMAR_MASTER_DATA && window.GRAMMAR_MASTER_DATA[targetTopic]) {
          e.preventDefault();
          let newUrl = `grammar.html?topic=${encodeURIComponent(targetTopic)}`;
          if (targetLevel) newUrl += `&level=${encodeURIComponent(targetLevel)}`;
          if (targetSec === 'lesson') newUrl += '#sec-notesheet';
          else if (targetLevel || targetSec === 'test') newUrl += '#sec-tests';

          try {
            if (window.location.protocol !== 'file:') {
              history.pushState(null, '', newUrl);
            } else {
              window.location.hash = `topic=${targetTopic}&level=${targetLevel}&sec=${targetSec}`;
            }
          } catch (err) {}
          currentTopicId = targetTopic;
          renderLesson(currentTopicId, targetLevel, targetSec);
        }
      }
    });

  // Auto initialize on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export to window
  window.GrammarPage = {
    renderLesson: (topic, level, section) => {
      currentTopicId = topic || currentTopicId;
      renderLesson(currentTopicId, level, section);
    },
    getCurrentTopic: () => currentTopicId,
    getCurrentLevel: () => activeFilterLevel
  };

})();
