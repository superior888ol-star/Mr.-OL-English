/**
 * Word Shape - Educational Vocabulary Game (wordshape-game.js)
 * Inspired by British Council LearnEnglish Wordshake
 * Tailored for Mr. Ouch Ol's Teaching Hub at Hun Sen Svay Thom High School
 */

(function() {
  'use strict';

  // ==========================================
  // AUDIO SYNTHESIZER (WEB AUDIO API)
  // ==========================================
  class GameAudio {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('wordshape_sound') === 'false';
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('wordshape_sound', (!this.muted).toString());
      return this.muted;
    }

    playClick(freq = 440) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    }

    playShake() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      // Realistic dice tumbling rattle sound
      for (let i = 0; i < 7; i++) {
        const delay = i * 0.07 + Math.random() * 0.03;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(180 + Math.random() * 260, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.06);
      }
    }

    playSuccess(pts) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const notes = pts >= 7 ? [523.25, 659.25, 783.99, 1046.50] :
                    pts >= 4 ? [523.25, 659.25, 783.99] :
                    pts >= 2 ? [523.25, 659.25] : [523.25, 587.33];

      notes.forEach((freq, idx) => {
        const delay = idx * 0.09;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.36);
      });
    }

    playError() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    }

    playTick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    }

    playGameOver() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      chords.forEach((freq, idx) => {
        const delay = idx * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.22, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.52);
      });
    }
  }

  // ==========================================
  // WORD SHAPE GAME ENGINE
  // ==========================================
  class WordShapeGame {
    constructor(container) {
      this.container = container;
      this.audio = new GameAudio();

      // Standard British Council / Boggle 16-cube dice set
      this.dice = [
        "AAEEGN", "ELRTTY", "AOOTTW", "ABBJOO",
        "EHRTVW", "CIMOTU", "DISTTY", "EIOSST",
        "DELRVY", "ACHOPS", "HIMNQU", "EEINSU",
        "EEGHNW", "AFFKPS", "HLNNRZ", "DEILRX"
      ];

      // Game State
      this.board = [];
      this.selectedIndices = [];
      this.foundWords = new Map(); // word => { points, timestamp }
      this.score = 0;
      this.highScore = parseInt(localStorage.getItem('wordshape_high_score') || '0', 10);
      this.timerSeconds = 180; // 3 minutes standard British Council Wordshake
      this.timeRemaining = 180;
      this.timerInterval = null;
      this.isPlaying = false;
      this.isPaused = false;
      this.mode = 'classic'; // 'classic' (3m), 'sprint' (2m), 'blitz' (1m), 'practice' (no timer)

      this.boundKeyHandler = this.handleKeyDown.bind(this);
    }

    init() {
      this.renderLayout();
      this.attachEvents();
      this.shakeNewBoard(false);
      this.startGame();
    }

    destroy() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      window.removeEventListener('keydown', this.boundKeyHandler);
    }

    // ==========================================
    // RENDER HTML TEMPLATE
    // ==========================================
    renderLayout() {
      this.container.innerHTML = `
        <div class="wordshape-game-wrapper" id="ws-game-wrapper">
          <!-- Game Header -->
          <div class="wordshape-header">
            <div class="wordshape-title-box">
              <div class="wordshape-logo-icon">🔤</div>
              <div class="wordshape-title-text">
                <h3>
                  Word Shape
                  <span class="badge-mini" style="background:var(--accent-gold); color:#000; font-weight:700;">British Council Style</span>
                </h3>
                <p>ក្រឡុកគ្រាប់អក្សរ 16 តួ ស្វែងរកពាក្យអង់គ្លេសត្រឹមត្រូវក្នុងរយៈពេល 3 នាទី!</p>
              </div>
            </div>

            <div class="wordshape-header-actions">
              <button id="ws-btn-sound" class="ws-btn-icon" title="បិទ/បើកសំឡេង (Toggle Sound)" aria-label="Toggle Sound">
                ${this.audio.muted ? '🔇' : '🔊'}
              </button>
              <button id="ws-btn-help" class="ws-btn-icon" title="របៀបលេង & រូបមន្តពិន្ទុ (How to play)" aria-label="How to play">
                ℹ️
              </button>
            </div>
          </div>

          <!-- Mode Selector & Shake Action -->
          <div class="wordshape-mode-bar">
            <div class="ws-mode-pills">
              <button class="ws-mode-btn ${this.mode === 'classic' ? 'active' : ''}" data-mode="classic">⏱️ 3 នាទី (Classic)</button>
              <button class="ws-mode-btn ${this.mode === 'sprint' ? 'active' : ''}" data-mode="sprint">⚡ 2 នាទី (Sprint)</button>
              <button class="ws-mode-btn ${this.mode === 'blitz' ? 'active' : ''}" data-mode="blitz">🔥 1 នាទី (Blitz)</button>
              <button class="ws-mode-btn ${this.mode === 'practice' ? 'active' : ''}" data-mode="practice">🌱 អនុវត្តសេរី (No Timer)</button>
            </div>

            <button id="ws-btn-shake" class="ws-shake-action-btn">
              <span>🎲</span> ក្រឡុកអក្សរថ្មី (Shake)
            </button>
          </div>

          <!-- Dashboard: Timer, Score, High Score, Found Count -->
          <div class="wordshape-dashboard">
            <div class="ws-stat-card">
              <div class="ws-stat-icon">⏳</div>
              <div class="ws-stat-info">
                <span class="ws-stat-label">ពេលវេលានៅសល់</span>
                <span id="ws-display-timer" class="ws-stat-value timer">03:00</span>
              </div>
            </div>

            <div class="ws-stat-card">
              <div class="ws-stat-icon">🏆</div>
              <div class="ws-stat-info">
                <span class="ws-stat-label">ពិន្ទុបច្ចុប្បន្ន</span>
                <span id="ws-display-score" class="ws-stat-value score">0</span>
              </div>
            </div>

            <div class="ws-stat-card">
              <div class="ws-stat-icon">📝</div>
              <div class="ws-stat-info">
                <span class="ws-stat-label">ពាក្យរកឃើញ</span>
                <span id="ws-display-words-count" class="ws-stat-value">0</span>
              </div>
            </div>

            <div class="ws-stat-card">
              <div class="ws-stat-icon">👑</div>
              <div class="ws-stat-info">
                <span class="ws-stat-label">ពិន្ទុខ្ពស់បំផុត</span>
                <span id="ws-display-highscore" class="ws-stat-value" style="color:var(--accent-gold);">${this.highScore}</span>
              </div>
            </div>
          </div>

          <!-- Main Game Arena -->
          <div class="wordshape-arena">
            <!-- Left: 4x4 Letter Tray -->
            <div class="wordshape-tray">
              <div id="ws-letter-grid" class="wordshape-grid">
                <!-- 16 Cubes rendered dynamically -->
              </div>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-top:10px;">
                💡 ចុចលើគ្រាប់អក្សរ ឬវាយតាម Keyboard ផ្ទាល់!
              </div>
            </div>

            <!-- Right: Builder & Found Words List -->
            <div class="wordshape-side-panel">
              <!-- Current Word Builder -->
              <div class="ws-word-builder-box">
                <div class="ws-builder-header">
                  <span>ពាក្យកំពុងផ្គុំ (Spelling Word)</span>
                  <span id="ws-pts-preview" style="color:var(--accent-gold); font-weight:700;">0 តួ (0 pt)</span>
                </div>

                <div id="ws-builder-tray" class="ws-builder-tray">
                  <span class="ws-builder-placeholder">ជ្រើសរើសអក្សរយ៉ាងតិច ៣ តួ...</span>
                </div>

                <div class="ws-builder-actions">
                  <button id="ws-btn-clear" class="ws-btn-clear" title="លុបពាក្យ (Esc / Clear)">
                    ✕ លុប (Clear)
                  </button>
                  <button id="ws-btn-submit" class="ws-btn-submit" title="បញ្ជូនពាក្យ (Enter / Submit)">
                    ✓ បញ្ជូនពាក្យ (Submit)
                  </button>
                </div>

                <!-- Feedback Message -->
                <div id="ws-feedback-msg" class="ws-feedback-msg info">
                  ស្វែងរកពាក្យដែលមានប្រវែង ៣ ដល់ ៧ តួអក្សរ
                </div>
              </div>

              <!-- Found Words Explorer -->
              <div class="ws-found-container">
                <div class="ws-found-header">
                  <span>📚 បញ្ជីពាក្យដែលបានរកឃើញ (<span id="ws-found-tally">0</span>)</span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">ចុច 🔊 ដើម្បីស្តាប់ការបញ្ចេញសំឡេង</span>
                </div>

                <div id="ws-found-list" class="ws-found-list">
                  <span style="color:var(--text-muted); font-size:0.82rem; font-style:italic; padding:10px 0;">
                    ពាក្យដែលអ្នករកឃើញនឹងបង្ហាញនៅទីនេះ...
                  </span>
                </div>
              </div>

              <!-- Rules Accordion (British Council scoring) -->
              <div id="ws-rules-box" class="ws-rules-accordion" style="display:none;">
                <strong style="color:var(--accent-gold);">📜 ច្បាប់គណនាពិន្ទុ British Council Wordshake:</strong>
                <table class="ws-rules-table">
                  <thead>
                    <tr><th>ប្រវែងពាក្យ (Letters)</th><th>ពិន្ទុដែលទទួលបាន (Points)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>៣ តួអក្សរ (3 letters)</td><td><strong>១ ពិន្ទុ</strong> (1 point)</td></tr>
                    <tr><td>៤ តួអក្សរ (4 letters)</td><td><strong>២ ពិន្ទុ</strong> (2 points)</td></tr>
                    <tr><td>៥ តួអក្សរ (5 letters)</td><td><strong>៣ ពិន្ទុ</strong> (3 points)</td></tr>
                    <tr><td>៦ តួអក្សរ (6 letters)</td><td><strong>៤ ពិន្ទុ</strong> (4 points)</td></tr>
                    <tr><td>៧ តួអក្សរឡើងទៅ (7+ letters)</td><td><strong>៧ ពិន្ទុ!</strong> (7 points)</td></tr>
                  </tbody>
                </table>
                <div style="margin-top:6px; font-size:0.75rem; color:var(--text-muted);">
                  * ទទួលស្គាល់ពាក្យនាមពហុវចនៈ និងទម្រង់កិរិយាសព្ទក្នុងវចនានុក្រមភាសាអង់គ្លេសស្តង់ដារ។
                </div>
              </div>
            </div>
          </div>

          <!-- Game Over Modal Overlay -->
          <div id="ws-gameover-overlay" class="ws-gameover-modal" style="display:none;">
            <div class="ws-result-box">
              <div id="ws-result-badge" class="ws-result-badge">🏆</div>
              <h2 id="ws-result-title" class="ws-result-title">អស់ពេលហើយ! (Time's Up)</h2>
              <div id="ws-result-rank" class="ws-result-rank">Wordshake Scholar</div>

              <div class="ws-result-stats-grid">
                <div class="ws-result-stat-card">
                  <div id="ws-res-score" class="val">0</div>
                  <div class="lbl">ពិន្ទុសរុប</div>
                </div>
                <div class="ws-result-stat-card">
                  <div id="ws-res-words" class="val">0</div>
                  <div class="lbl">ចំនួនពាក្យ</div>
                </div>
                <div class="ws-result-stat-card">
                  <div id="ws-res-longest" class="val">-</div>
                  <div class="lbl">ពាក្យវែងបំផុត</div>
                </div>
              </div>

              <button id="ws-btn-play-again" class="ws-btn-replay">
                🔄 លេងម្ដងទៀត (Play Again)
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // ==========================================
    // ATTACH DOM & KEYBOARD LISTENERS
    // ==========================================
    attachEvents() {
      // Sound Toggle
      const soundBtn = document.getElementById('ws-btn-sound');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          const isMuted = this.audio.toggleMute();
          soundBtn.textContent = isMuted ? '🔇' : '🔊';
        });
      }

      // Help Toggle
      const helpBtn = document.getElementById('ws-btn-help');
      const rulesBox = document.getElementById('ws-rules-box');
      if (helpBtn && rulesBox) {
        helpBtn.addEventListener('click', () => {
          rulesBox.style.display = rulesBox.style.display === 'none' ? 'block' : 'none';
        });
      }

      // Shake Button
      const shakeBtn = document.getElementById('ws-btn-shake');
      if (shakeBtn) {
        shakeBtn.addEventListener('click', () => {
          this.shakeNewBoard(true);
        });
      }

      // Mode Selector Pills
      const modeBtns = this.container.querySelectorAll('.ws-mode-btn');
      modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          modeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.setMode(btn.dataset.mode);
        });
      });

      // Submit Word
      const submitBtn = document.getElementById('ws-btn-submit');
      if (submitBtn) {
        submitBtn.addEventListener('click', () => this.submitWord());
      }

      // Clear Word
      const clearBtn = document.getElementById('ws-btn-clear');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => this.clearSelection());
      }

      // Play Again
      const replayBtn = document.getElementById('ws-btn-play-again');
      if (replayBtn) {
        replayBtn.addEventListener('click', () => {
          document.getElementById('ws-gameover-overlay').style.display = 'none';
          this.shakeNewBoard(true);
          this.startGame();
        });
      }

      // Physical Keyboard Listener
      window.removeEventListener('keydown', this.boundKeyHandler);
      window.addEventListener('keydown', this.boundKeyHandler);
    }

    handleKeyDown(e) {
      // Don't intercept if user is typing in a search bar or text input outside
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (!this.isPlaying || this.isPaused) return;

      const key = e.key.toUpperCase();

      if (key === 'ENTER') {
        e.preventDefault();
        this.submitWord();
      } else if (key === 'BACKSPACE') {
        e.preventDefault();
        this.removeLastLetter();
      } else if (key === 'ESCAPE') {
        e.preventDefault();
        this.clearSelection();
      } else if (key === ' ') {
        e.preventDefault();
        this.clearSelection();
      } else if (/^[A-Z]$/.test(key)) {
        // Find unused tile with this letter
        this.selectLetterByKey(key);
      }
    }

    // ==========================================
    // BOARD GENERATION & SHAKE MECHANICS
    // ==========================================
    shakeNewBoard(playRattle = true) {
      if (playRattle) {
        this.audio.playShake();
      }

      // Roll 16 cubes ensuring rich vocabulary potential
      let validCount = 0;
      let attempts = 0;
      let newLetters = [];

      do {
        attempts++;
        const shuffledDice = [...this.dice].sort(() => Math.random() - 0.5);
        newLetters = shuffledDice.map(die => {
          const l = die[Math.floor(Math.random() * die.length)];
          return l === 'Q' ? 'Qu' : l;
        });

        // Solve and ensure at least 40 valid words exist
        validCount = this.countPossibleWords(newLetters);
      } while (validCount < 40 && attempts < 15);

      this.board = newLetters;
      this.selectedIndices = [];
      this.renderGrid(playRattle);
      this.updateBuilder();
    }

    countPossibleWords(letters) {
      if (!window.WORD_SHAPE_DICTIONARY) return 100;
      const avail = {};
      letters.forEach(l => {
        const char = l.toUpperCase();
        avail[char] = (avail[char] || 0) + 1;
      });

      let count = 0;
      for (const word of window.WORD_SHAPE_DICTIONARY) {
        if (word.length < 3 || word.length > 7) continue;
        const need = {};
        let ok = true;
        for (const c of word) {
          need[c] = (need[c] || 0) + 1;
          if (!avail[c] || need[c] > avail[c]) {
            ok = false;
            break;
          }
        }
        if (ok) {
          count++;
          if (count >= 50) break; // Plenty found, fast break
        }
      }
      return count;
    }

    renderGrid(shouldAnimate = false) {
      const grid = document.getElementById('ws-letter-grid');
      if (!grid) return;

      grid.innerHTML = '';
      this.board.forEach((letter, idx) => {
        const cube = document.createElement('button');
        cube.className = 'ws-cube' + (shouldAnimate ? ' shaking' : '');
        cube.dataset.index = idx;
        cube.innerHTML = `<span>${letter}</span>`;

        cube.addEventListener('click', () => {
          this.toggleLetterByIndex(idx);
        });

        grid.appendChild(cube);
      });

      if (shouldAnimate) {
        setTimeout(() => {
          grid.querySelectorAll('.ws-cube').forEach(c => c.classList.remove('shaking'));
        }, 750);
      }
    }

    // ==========================================
    // LETTER SELECTION & WORD BUILDING
    // ==========================================
    toggleLetterByIndex(idx) {
      if (!this.isPlaying) return;

      const pos = this.selectedIndices.indexOf(idx);
      if (pos > -1) {
        // If already selected: remove it from current word
        this.selectedIndices.splice(pos, 1);
        this.audio.playClick(320);
      } else {
        // Select letter
        this.selectedIndices.push(idx);
        const pitch = 380 + (this.selectedIndices.length * 35);
        this.audio.playClick(pitch);
      }

      this.updateSelectionVisuals();
      this.updateBuilder();
    }

    selectLetterByKey(letter) {
      // Find the first unselected tile matching letter
      const unselectedIdx = this.board.findIndex((l, idx) => {
        const charMatch = (l === 'Qu' && letter === 'Q') || (l.toUpperCase() === letter);
        return charMatch && !this.selectedIndices.includes(idx);
      });

      if (unselectedIdx !== -1) {
        this.selectedIndices.push(unselectedIdx);
        const pitch = 380 + (this.selectedIndices.length * 35);
        this.audio.playClick(pitch);
        this.updateSelectionVisuals();
        this.updateBuilder();
      } else {
        this.audio.playError();
        this.showFeedback(`អក្សរ "${letter}" ត្រូវបានប្រើអស់ហើយ ឬគ្មានក្នុងតារាង!`, 'error');
      }
    }

    removeLastLetter() {
      if (this.selectedIndices.length > 0) {
        this.selectedIndices.pop();
        this.audio.playClick(320);
        this.updateSelectionVisuals();
        this.updateBuilder();
      }
    }

    clearSelection() {
      if (this.selectedIndices.length === 0) return;
      this.selectedIndices = [];
      this.audio.playClick(280);
      this.updateSelectionVisuals();
      this.updateBuilder();
    }

    updateSelectionVisuals() {
      const cubes = this.container.querySelectorAll('.ws-cube');
      cubes.forEach((cube, idx) => {
        const order = this.selectedIndices.indexOf(idx);
        const existingStep = cube.querySelector('.ws-cube-step');
        if (existingStep) existingStep.remove();

        if (order > -1) {
          cube.classList.add('selected');
          const stepBadge = document.createElement('span');
          stepBadge.className = 'ws-cube-step';
          stepBadge.textContent = order + 1;
          cube.appendChild(stepBadge);
        } else {
          cube.classList.remove('selected');
        }
      });
    }

    getCurrentWord() {
      return this.selectedIndices.map(i => this.board[i]).join('').toUpperCase();
    }

    updateBuilder() {
      const tray = document.getElementById('ws-builder-tray');
      const ptsPreview = document.getElementById('ws-pts-preview');
      const submitBtn = document.getElementById('ws-btn-submit');
      if (!tray || !ptsPreview) return;

      const word = this.getCurrentWord();

      if (word.length === 0) {
        tray.className = 'ws-builder-tray';
        tray.innerHTML = '<span class="ws-builder-placeholder">ជ្រើសរើសអក្សរយ៉ាងតិច ៣ តួ...</span>';
        ptsPreview.textContent = '0 តួ (0 pt)';
        if (submitBtn) submitBtn.disabled = true;
        return;
      }

      tray.className = 'ws-builder-tray has-letters';
      tray.innerHTML = this.selectedIndices.map((boardIdx, step) => {
        const char = this.board[boardIdx];
        return `
          <span class="ws-letter-badge" data-step="${step}" title="ចុចដើម្បីលុប">
            ${char}
          </span>
        `;
      }).join('');

      // Add click to remove on badges
      tray.querySelectorAll('.ws-letter-badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
          const step = parseInt(badge.dataset.step, 10);
          this.selectedIndices.splice(step, 1);
          this.audio.playClick(320);
          this.updateSelectionVisuals();
          this.updateBuilder();
        });
      });

      const pts = this.calculatePoints(word.length);
      ptsPreview.textContent = `${word.length} តួ (+${pts} pts ប្រសិនបើត្រូវ)`;
      if (submitBtn) submitBtn.disabled = word.length < 3;
    }

    // ==========================================
    // SCORING & WORD VALIDATION
    // ==========================================
    calculatePoints(len) {
      if (len < 3) return 0;
      if (len === 3) return 1;
      if (len === 4) return 2;
      if (len === 5) return 3;
      if (len === 6) return 4;
      return 7; // 7+ letters = 7 points (British Council Wordshake rule)
    }

    submitWord() {
      const word = this.getCurrentWord();
      const tray = document.getElementById('ws-builder-tray');

      // Check 1: Length
      if (word.length < 3) {
        this.flashInvalid(tray, "ពាក្យត្រូវមានយ៉ាងតិច ៣ តួអក្សរឡើងទៅ! (Min 3 letters)");
        return;
      }

      // Check 2: Duplicate
      if (this.foundWords.has(word)) {
        this.flashInvalid(tray, `ពាក្យ "${word}" ត្រូវបានរកឃើញរួចហើយ! (Already found)`);
        return;
      }

      // Check 3: Dictionary
      const isValid = this.checkDictionary(word);
      if (!isValid) {
        this.flashInvalid(tray, `ពាក្យ "${word}" មិនមានក្នុងវចនានុក្រមទេ! (Not in dictionary)`);
        return;
      }

      // SUCCESS!
      const pts = this.calculatePoints(word.length);
      this.foundWords.set(word, { points: pts, timestamp: Date.now() });
      this.score += pts;

      this.audio.playSuccess(pts);
      this.flashValid(tray, `🎉 អស្ចារ្យ! "${word}" ត្រឹមត្រូវ (+${pts} ពិន្ទុ!)`);

      // Update High Score
      if (this.score > this.highScore) {
        this.highScore = this.score;
        localStorage.setItem('wordshape_high_score', this.highScore.toString());
        const hsEl = document.getElementById('ws-display-highscore');
        if (hsEl) hsEl.textContent = this.highScore;
      }

      // Update UI Counters
      const scoreEl = document.getElementById('ws-display-score');
      if (scoreEl) scoreEl.textContent = this.score;

      const wordsCountEl = document.getElementById('ws-display-words-count');
      if (wordsCountEl) wordsCountEl.textContent = this.foundWords.size;

      const tallyEl = document.getElementById('ws-found-tally');
      if (tallyEl) tallyEl.textContent = this.foundWords.size;

      // Add to Found List
      this.addWordToFoundList(word, pts);

      // Clear builder
      this.selectedIndices = [];
      this.updateSelectionVisuals();
      this.updateBuilder();
    }

    checkDictionary(word) {
      if (window.WORD_SHAPE_DICTIONARY && window.WORD_SHAPE_DICTIONARY.size > 0) {
        return window.WORD_SHAPE_DICTIONARY.has(word.toUpperCase());
      }
      // Fallback
      return true;
    }

    flashValid(tray, msg) {
      tray.classList.add('valid-flash');
      this.showFeedback(msg, 'success');
      setTimeout(() => tray.classList.remove('valid-flash'), 600);
    }

    flashInvalid(tray, msg) {
      this.audio.playError();
      tray.classList.add('invalid-shake');
      this.showFeedback(msg, 'error');
      setTimeout(() => tray.classList.remove('invalid-shake'), 450);
    }

    showFeedback(msg, type = 'info') {
      const fb = document.getElementById('ws-feedback-msg');
      if (!fb) return;
      fb.className = `ws-feedback-msg ${type}`;
      fb.textContent = msg;
    }

    addWordToFoundList(word, pts) {
      const list = document.getElementById('ws-found-list');
      if (!list) return;

      // Clear placeholder if first word
      if (this.foundWords.size === 1) {
        list.innerHTML = '';
      }

      const pill = document.createElement('div');
      const tierClass = pts >= 7 ? 'tier-7' : pts >= 4 ? 'tier-4' : '';
      pill.className = `ws-found-pill ${tierClass}`;
      pill.innerHTML = `
        <span>${word}</span>
        <span class="pts-badge">+${pts}</span>
        <button class="ws-speak-btn" title="ស្តាប់ការបញ្ចេញសំឡេង">🔊</button>
      `;

      pill.querySelector('.ws-speak-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        this.speakWord(word);
      });

      list.prepend(pill);
    }

    speakWord(word) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
      }
    }

    // ==========================================
    // TIMER & GAME LIFECYCLE
    // ==========================================
    setMode(mode) {
      this.mode = mode;
      if (mode === 'classic') this.timerSeconds = 180;
      else if (mode === 'sprint') this.timerSeconds = 120;
      else if (mode === 'blitz') this.timerSeconds = 60;
      else if (mode === 'practice') this.timerSeconds = 0;

      this.timeRemaining = this.timerSeconds;
      this.restartGame();
    }

    startGame() {
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.isPlaying = true;
      this.isPaused = false;
      this.timeRemaining = this.timerSeconds;
      this.updateTimerDisplay();

      if (this.timerSeconds > 0) {
        this.timerInterval = setInterval(() => {
          this.timeRemaining--;
          this.updateTimerDisplay();

          if (this.timeRemaining <= 10 && this.timeRemaining > 0) {
            this.audio.playTick();
          }

          if (this.timeRemaining <= 0) {
            this.endGame();
          }
        }, 1000);
      }
    }

    restartGame() {
      this.score = 0;
      this.foundWords.clear();
      this.selectedIndices = [];

      const scoreEl = document.getElementById('ws-display-score');
      if (scoreEl) scoreEl.textContent = '0';

      const countEl = document.getElementById('ws-display-words-count');
      if (countEl) countEl.textContent = '0';

      const tallyEl = document.getElementById('ws-found-tally');
      if (tallyEl) tallyEl.textContent = '0';

      const list = document.getElementById('ws-found-list');
      if (list) {
        list.innerHTML = '<span style="color:var(--text-muted); font-size:0.82rem; font-style:italic; padding:10px 0;">ពាក្យដែលអ្នករកឃើញនឹងបង្ហាញនៅទីនេះ...</span>';
      }

      this.shakeNewBoard(true);
      this.startGame();
    }

    updateTimerDisplay() {
      const el = document.getElementById('ws-display-timer');
      if (!el) return;

      if (this.timerSeconds === 0) {
        el.textContent = '∞ សេរី';
        el.className = 'ws-stat-value timer';
        return;
      }

      const m = Math.floor(this.timeRemaining / 60);
      const s = this.timeRemaining % 60;
      el.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

      if (this.timeRemaining <= 15) {
        el.className = 'ws-stat-value timer danger';
      } else if (this.timeRemaining <= 45) {
        el.className = 'ws-stat-value timer warning';
      } else {
        el.className = 'ws-stat-value timer';
      }
    }

    endGame() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.isPlaying = false;
      this.audio.playGameOver();

      const overlay = document.getElementById('ws-gameover-overlay');
      if (!overlay) return;

      // Stats
      document.getElementById('ws-res-score').textContent = this.score;
      document.getElementById('ws-res-words').textContent = this.foundWords.size;

      // Longest Word
      let longest = '-';
      for (const [w] of this.foundWords) {
        if (w.length > (longest === '-' ? 0 : longest.length)) {
          longest = w;
        }
      }
      document.getElementById('ws-res-longest').textContent = longest;

      // Rank & Badge
      let badge = '🌱';
      let rank = 'English Learner (អ្នកចាប់ផ្តើម)';
      if (this.score >= 70) {
        badge = '👑';
        rank = 'Wordshake Grandmaster (មហាវីរបុរសវាក្យសព្ទ)';
      } else if (this.score >= 45) {
        badge = '🏆';
        rank = 'Vocabulary Champion (ជើងឯកវាក្យសព្ទ)';
      } else if (this.score >= 25) {
        badge = '🌟';
        rank = 'English Scholar (អ្នកប្រាជ្ញភាសាអង់គ្លេស)';
      } else if (this.score >= 10) {
        badge = '🚀';
        rank = 'Active Word Builder (អ្នកផ្គុំពាក្យរហ័ស)';
      }

      document.getElementById('ws-result-badge').textContent = badge;
      document.getElementById('ws-result-rank').textContent = rank;

      overlay.style.display = 'flex';
    }
  }

  // ==========================================
  // GLOBAL EXPORTS & MODAL INTEGRATION
  // ==========================================
  let activeGameInstance = null;

  window.initWordShapeGame = function(containerElement) {
    if (activeGameInstance) {
      activeGameInstance.destroy();
    }
    activeGameInstance = new WordShapeGame(containerElement);
    activeGameInstance.init();
    return activeGameInstance;
  };

  window.launchWordShapeInModal = function() {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (!modal || !modalBody) return;

    modalTitle.innerHTML = `🎮 Word Shape — <span style="color:var(--accent-gold);">English Vocabulary Challenge</span>`;
    modal.classList.add('modal-game-mode');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook game cleanup to modal close
    const originalClose = window.closeModalWindow;
    window.closeModalWindow = function() {
      if (activeGameInstance) {
        activeGameInstance.destroy();
        activeGameInstance = null;
      }
      modal.classList.remove('modal-game-mode');
      if (typeof originalClose === 'function') {
        originalClose();
      } else {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    window.initWordShapeGame(modalBody);
  };

})();
