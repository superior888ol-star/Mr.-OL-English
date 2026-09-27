/**
 * Word Shake II - Professional Educational Vocabulary Game (wordshake2-game.js)
 * High School Educator: Mr. Ouch Ol - Hun Sen Svay Thom High School
 * Modes: Solo, Vs Computer (AI), In Pairs (1v1), Group Multiplayer (QR & Link)
 * Table: 6, 8, 10, or 12 Letters
 * Rules: Words >= 3 letters, Click / Keyboard input + Enter
 */

(function() {
  'use strict';

  // ==========================================
  // 1. WEB AUDIO SYNTHESIZER
  // ==========================================
  class WSAudio {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('ws2_sound') === 'false';
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('ws2_sound', (!this.muted).toString());
      return this.muted;
    }

    playClick(pitch = 420) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.5, this.ctx.currentTime + 0.08);

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

      // Realistic dice tumbling rattle bursts
      for (let i = 0; i < 7; i++) {
        const delay = i * 0.06 + Math.random() * 0.02;
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
        const delay = idx * 0.08;
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
      osc.frequency.linearRampToValueAtTime(105, this.ctx.currentTime + 0.22);

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

      const fanfare = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      fanfare.forEach((freq, idx) => {
        const delay = idx * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.24, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.52);
      });
    }
  }

  // ==========================================
  // 2. MAIN WORD SHAKE II GAME CLASS
  // ==========================================
  class WordShake2Game {
    constructor(container, options = {}) {
      this.container = container;
      this.options = options || {};
      this.audio = new WSAudio();

      // Game Options & Modes
      this.gameMode = options.mode || 'computer'; // 'computer', 'pairs', 'group', 'solo'
      this.tableSize = options.tableSize || options.size || 10;   // 6, 8, 10, or 12 letters
      this.timerSeconds = options.time !== undefined ? parseInt(options.time, 10) : 180; // 3 minutes default (180s)
      this.timeRemaining = this.timerSeconds;
      this.timerInterval = null;
      this.isPlaying = false;
      this.isPaused = false;
      this.isFullscreen = false;
      this.splashTimeout = null;

      // Computer AI Settings
      this.aiDifficulty = 'medium'; // 'easy', 'medium', 'hard'
      this.aiInterval = null;
      this.computerScore = 0;
      this.computerWords = new Set();

      // Pairs 1v1 Settings
      this.activePairTurn = 1; // 1 (Blue) or 2 (Gold)
      this.p1Score = 0;
      this.p1Words = new Map();
      this.p2Score = 0;
      this.p2Words = new Map();

      // Group Multiplayer / Room Settings
      this.roomCode = options.roomCode || options.room || this.generateRoomCode();
      this.myTeam = options.team || 'lion'; // 'lion', 'eagle', 'dragon'
      this.teams = {
        lion: { name: 'Team Lion 🦁', score: 0, words: new Set() },
        eagle: { name: 'Team Eagle 🦅', score: 0, words: new Set() },
        dragon: { name: 'Team Dragon 🐉', score: 0, words: new Set() }
      };
      this.channel = null;

      // Board & Current Word State
      this.boardLetters = [];
      this.selectedIndices = [];
      this.possibleWords = []; // Precomputed list of valid words for this table
      this.playerScore = 0;
      this.playerWords = new Map(); // word => points
      this.highScore = parseInt(localStorage.getItem('ws2_high_score') || '0', 10);

      // Letter pools with balanced English frequencies
      this.commonVowels = 'AAAAAEEEEEEEIIIIIOOOOUU';
      this.commonConsonants = 'BBCCDDDDFFGGGHHHJKLLLLMMNNNNPPPQRRRRSSSSTTTTTTVWWXYZ';

      this.boundKeyHandler = this.handleKeyDown.bind(this);
      this.boundFullscreenChange = this.handleFullscreenChange.bind(this);
    }

    generateRoomCode() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let code = 'ST-';
      for (let i = 0; i < 4; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
      }
      return code;
    }

    init() {
      this.render();
      this.initBroadcastChannel();
      this.shakeBoard(false);
      this.startGame();
      this.triggerModeEntranceSplash(this.gameMode, true);
      if (this.options && (this.options.roomCode || this.options.room)) {
        this.showParticipantWelcomeModal();
      }
    }

    destroy() {
      if (this.timerInterval) clearInterval(this.timerInterval);
      if (this.aiInterval) clearInterval(this.aiInterval);
      if (this.channel) this.channel.close();
      if (this.splashTimeout) clearTimeout(this.splashTimeout);
      window.removeEventListener('keydown', this.boundKeyHandler);
      document.removeEventListener('fullscreenchange', this.boundFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', this.boundFullscreenChange);
    }

    // ==========================================
    // 3. BROADCAST CHANNEL & CROSS-TAB SYNC
    // ==========================================
    initBroadcastChannel() {
      if ('BroadcastChannel' in window) {
        try {
          this.channel = new BroadcastChannel('ws2_room_' + this.roomCode);
          this.channel.onmessage = (e) => {
            const data = e.data;
            if (!data) return;
            if (data.type === 'NEW_BOARD') {
              this.boardLetters = data.letters;
              this.tableSize = data.letters.length;
              this.renderLetterTable(true);
            } else if (data.type === 'TEAM_SCORE') {
              if (this.teams[data.team]) {
                this.teams[data.team].score = data.score;
                this.teams[data.team].words.add(data.word);
                this.updateTeamsUI();
              }
            }
          };
        } catch (err) {
          console.warn('BroadcastChannel error:', err);
        }
      }
    }

    broadcast(msg) {
      if (this.channel) {
        try { this.channel.postMessage(msg); } catch (e) {}
      }
    }

    // ==========================================
    // 4. HTML LAYOUT TEMPLATE
    // ==========================================
    render() {
      this.container.innerHTML = `
        <div class="ws2-container">
          <!-- Top Header -->
          <div class="ws2-header">
            <div class="ws2-brand">
              <div class="ws2-logo-icon">🔤</div>
              <div class="ws2-title-block">
                <h3>
                  Word Shake II
                  <span class="badge-mini" style="background:var(--accent-gold); color:#000; font-weight:800;">Professional Edu Edition</span>
                </h3>
                <p>តារាងអក្សរ 6 ដល់ 12 តួ • លេងទល់នឹងកុំព្យូទ័រ • ជាគូ • ឬជាក្រុមតាមរយៈ QR Code & Link</p>
              </div>
            </div>

            <div class="ws2-header-tools">
              <button class="ws2-tool-btn ws2-btn-fullscreen" title="ពេញអេក្រង់កុំព្យូទ័រ (Full Screen Display - F)" aria-label="Toggle Fullscreen">
                ⛶
              </button>
              <button class="ws2-tool-btn ws2-btn-sound" title="បិទ/បើកសំឡេង (Toggle Sound)" aria-label="Toggle Sound">
                ${this.audio.muted ? '🔇' : '🔊'}
              </button>
              <button class="ws2-tool-btn ws2-btn-help" title="របៀបលេង & ច្បាប់ពិន្ទុ (How to play)" aria-label="How to play">
                ℹ️
              </button>
            </div>
          </div>

          <!-- Primary Game Mode Selector -->
          <div class="ws2-modes-strip">
            <div class="ws2-mode-tabs">
              <button class="ws2-mode-tab ${this.gameMode === 'computer' ? 'active' : ''}" data-mode="computer">
                <span>🤖</span> ទល់នឹងកុំព្យូទ័រ (Vs AI Bot)
              </button>
              <button class="ws2-mode-tab ${this.gameMode === 'pairs' ? 'active' : ''}" data-mode="pairs">
                <span>👥</span> លេងជាគូ (In Pairs 1v1)
              </button>
              <button class="ws2-mode-tab ${this.gameMode === 'group' ? 'active' : ''}" data-mode="group">
                <span>🌐</span> លេងជាក្រុម (Group / QR Room)
              </button>
              <button class="ws2-mode-tab ${this.gameMode === 'solo' ? 'active' : ''}" data-mode="solo">
                <span>🎯</span> លេងទោល (Solo Mode)
              </button>
            </div>

            <button class="ws2-shake-btn ws2-btn-shake-action" title="ក្រឡុកគ្រាប់អក្សរថ្មី">
              <span>🎲</span> ក្រឡុកអក្សរថ្មី (Shake)
            </button>
          </div>

          <!-- Secondary Options Bar: Table Size & AI / Timer Settings -->
          <div class="ws2-options-bar">
            <!-- Table Size Selection (6, 8, 10, 12 Letters) -->
            <div class="ws2-control-group">
              <span class="ws2-control-label">ទំហំតារាងអក្សរ៖</span>
              <button class="ws2-chip-btn ws2-size-btn ${this.tableSize === 6 ? 'active' : ''}" data-size="6">6 អក្សរ</button>
              <button class="ws2-chip-btn ws2-size-btn ${this.tableSize === 8 ? 'active' : ''}" data-size="8">8 អក្សរ</button>
              <button class="ws2-chip-btn ws2-size-btn ${this.tableSize === 10 ? 'active' : ''}" data-size="10">10 អក្សរ (ស្តង់ដារ)</button>
              <button class="ws2-chip-btn ws2-size-btn ${this.tableSize === 12 ? 'active' : ''}" data-size="12">12 អក្សរ (កម្រិតខ្ពស់)</button>
            </div>

            <!-- Time Control -->
            <div class="ws2-control-group">
              <span class="ws2-control-label">ថិរវេលា៖</span>
              <button class="ws2-chip-btn ws2-timer-btn ${this.timerSeconds === 180 ? 'active' : ''}" data-time="180">3 នាទី</button>
              <button class="ws2-chip-btn ws2-timer-btn ${this.timerSeconds === 120 ? 'active' : ''}" data-time="120">2 នាទី</button>
              <button class="ws2-chip-btn ws2-timer-btn ${this.timerSeconds === 60 ? 'active' : ''}" data-time="60">1 នាទី</button>
              <button class="ws2-chip-btn ws2-timer-btn ${this.timerSeconds === 0 ? 'active' : ''}" data-time="0">សេរី (No Timer)</button>
            </div>
          </div>

          <!-- DYNAMIC ARENA STATUS: VS COMPUTER / PAIRS / GROUP -->
          <div class="ws2-arena-status-container"></div>

          <!-- MAIN PLAYING ARENA: Letter Table on Left, Builder & Found List on Right -->
          <div class="ws2-play-arena">
            <!-- Letter Table (6 to 12 Letters) -->
            <div class="ws2-letter-table-wrap">
              <div class="ws2-table-header">
                <span>តារាងគ្រាប់អក្សរ (<span class="ws2-current-count-label">${this.tableSize}</span> អក្សរ)</span>
                <span style="color:var(--accent-gold);">អប្បបរមា ៣ តួ (Min 3 Letters)</span>
              </div>

              <div class="ws2-letter-rack count-${this.tableSize}">
                <!-- Rendered dynamically -->
              </div>

              <div style="font-size:0.76rem; color:var(--text-muted); text-align:center;">
                🖱️ ចុចលើគ្រាប់អក្សរ ឬវាយតាមក្តារចុច (Keyboard) រួចចុច Enter!
              </div>
            </div>

            <!-- Interaction Side Panel -->
            <div class="ws2-interaction-panel">
              <!-- Current Word Builder Tray -->
              <div class="ws2-builder-box">
                <div class="ws2-builder-top">
                  <span style="font-weight:700;">ពាក្យកំពុងផ្គុំ (Spelling Word)</span>
                  <span class="ws2-pts-preview" style="color:var(--accent-gold); font-weight:800;">0 តួ (0 pt)</span>
                </div>

                <div class="ws2-builder-tray">
                  <span style="color:var(--text-muted); font-size:0.85rem; font-style:italic;">
                    ចុចអក្សរយ៉ាងតិច ៣ តួដើម្បីផ្គុំពាក្យ...
                  </span>
                </div>

                <div class="ws2-builder-actions">
                  <button class="ws2-btn-clear" title="លុបពាក្យ (Esc / Clear)">
                    ✕ លុប (Clear)
                  </button>
                  <button class="ws2-btn-enter" title="បញ្ជូនពាក្យ (Enter)">
                    ✓ បញ្ជូនពាក្យ (Enter)
                  </button>
                </div>

                <div class="ws2-feedback-msg info">
                  ផ្គុំពាក្យអង់គ្លេសដែលមាន ៣ តួអក្សរឡើងទៅ
                </div>
              </div>

              <!-- Found Words Explorer -->
              <div class="ws2-found-panel">
                <div class="ws2-found-title-row">
                  <span>📚 បញ្ជីពាក្យដែលបានរកឃើញ (<span class="ws2-found-count">0</span>)</span>
                  <span style="font-size:0.75rem; color:var(--text-muted);">ចុច 🔊 ដើម្បីស្តាប់ការបញ្ចេញសំឡេង</span>
                </div>

                <div class="ws2-found-chips-list">
                  <span style="color:var(--text-muted); font-size:0.82rem; font-style:italic; padding:8px 0;">
                    ពាក្យដែលអ្នករកឃើញនឹងបង្ហាញនៅទីនេះ...
                  </span>
                </div>
              </div>

              <!-- Scoring Rules Accordion -->
              <div class="ws2-rules-box" style="display:none; background:rgba(0,0,0,0.25); padding:10px 14px; border-radius:8px; border:1px solid var(--border-color); font-size:0.8rem;">
                <strong style="color:var(--accent-gold);">📜 ច្បាប់គណនាពិន្ទុ Word Shake II:</strong>
                <ul style="padding-left:18px; margin:6px 0 0; color:var(--text-secondary);">
                  <li><strong>៣ តួអក្សរ (3 letters)</strong>: ១ ពិន្ទុ (1 pt)</li>
                  <li><strong>៤ តួអក្សរ (4 letters)</strong>: ២ ពិន្ទុ (2 pts)</li>
                  <li><strong>៥ តួអក្សរ (5 letters)</strong>: ៣ ពិន្ទុ (3 pts)</li>
                  <li><strong>៦ តួអក្សរ (6 letters)</strong>: ៤ ពិន្ទុ (4 pts)</li>
                  <li><strong>៧ តួអក្សរឡើងទៅ (7+ letters)</strong>: <strong>៧ ពិន្ទុ!</strong> (7 pts)</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Game Over Modal Overlay -->
          <div class="ws2-gameover-overlay" style="display:none;">
            <div class="ws2-result-card">
              <div class="ws2-res-badge" style="font-size:3rem; margin-bottom:8px;">🏆</div>
              <h2 class="ws2-res-title" style="margin:0 0 6px; font-weight:800;">លទ្ធផលការប្រកួត (Game Finished)</h2>
              <div class="ws2-res-subtitle" style="color:var(--accent-gold); font-weight:700; margin-bottom:16px;">
                អបអរសាទរការខិតខំប្រឹងប្រែង!
              </div>

              <div class="ws2-res-stats" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-bottom:20px;">
                <div style="background:var(--bg-tertiary); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                  <div class="ws2-stat-score-val" style="font-size:1.4rem; font-weight:800; color:var(--accent-cyan); font-family:var(--font-code);">0</div>
                  <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase;">ពិន្ទុរបស់អ្នក</div>
                </div>
                <div style="background:var(--bg-tertiary); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                  <div class="ws2-stat-words-val" style="font-size:1.4rem; font-weight:800; color:var(--accent-gold); font-family:var(--font-code);">0</div>
                  <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase;">ចំនួនពាក្យ</div>
                </div>
                <div style="background:var(--bg-tertiary); padding:12px; border-radius:8px; border:1px solid var(--border-color);">
                  <div class="ws2-stat-opp-val" style="font-size:1.4rem; font-weight:800; color:#ec4899; font-family:var(--font-code);">-</div>
                  <div class="ws2-stat-opp-lbl" style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase;">គូប្រកួត</div>
                </div>
              </div>

              <button class="ws2-btn-replay ws2-shake-btn" style="width:100%; justify-content:center; padding:14px; font-size:1rem;">
                🔄 លេងម្ដងទៀត (Play Again)
              </button>
            </div>
          </div>

          <!-- Floating Exit Fullscreen Button (Shown in Fullscreen Display) -->
          <button class="ws2-exit-fullscreen-btn" title="ចាកចេញពីពេញអេក្រង់ (Exit Fullscreen - Esc / F)">
            <span>✕</span> ចាកចេញពីពេញអេក្រង់ (Exit Fullscreen)
          </button>

          <!-- Full Display Mode Entrance Splash Overlay -->
          <div class="ws2-entrance-splash" style="display:none;"></div>

          <!-- Participant Welcome Modal (Join via Room/QR) -->
          <div class="ws2-participant-modal" style="display:none;"></div>
        </div>
      `;

      this.renderArenaStatus();
      this.attachEvents();
    }

    // ==========================================
    // 5. ATTACH SCOPED DOM EVENTS
    // ==========================================
    attachEvents() {
      // Sound Toggle
      const soundBtn = this.container.querySelector('.ws2-btn-sound');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          const isMuted = this.audio.toggleMute();
          soundBtn.textContent = isMuted ? '🔇' : '🔊';
        });
      }

      // Help Toggle
      const helpBtn = this.container.querySelector('.ws2-btn-help');
      const rulesBox = this.container.querySelector('.ws2-rules-box');
      if (helpBtn && rulesBox) {
        helpBtn.addEventListener('click', () => {
          rulesBox.style.display = rulesBox.style.display === 'none' ? 'block' : 'none';
        });
      }

      // Shake Button - Scoped perfectly to this.container
      const shakeBtn = this.container.querySelector('.ws2-btn-shake-action');
      if (shakeBtn) {
        shakeBtn.addEventListener('click', () => {
          this.shakeBoard(true);
        });
      }

      // Mode Selector Tabs
      const modeTabs = this.container.querySelectorAll('.ws2-mode-tab');
      modeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          modeTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.setGameMode(tab.dataset.mode);
        });
      });

      // Table Size Buttons (6, 8, 10, 12 Letters)
      const sizeBtns = this.container.querySelectorAll('.ws2-size-btn');
      sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          sizeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.tableSize = parseInt(btn.dataset.size, 10);
          const countLabel = this.container.querySelector('.ws2-current-count-label');
          if (countLabel) countLabel.textContent = this.tableSize;
          this.shakeBoard(true);
        });
      });

      // Timer Buttons
      const timerBtns = this.container.querySelectorAll('.ws2-timer-btn');
      timerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          timerBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.timerSeconds = parseInt(btn.dataset.time, 10);
          this.timeRemaining = this.timerSeconds;
          this.updateTimerDisplay();
        });
      });

      // Submit Word Button
      const enterBtn = this.container.querySelector('.ws2-btn-enter');
      if (enterBtn) {
        enterBtn.addEventListener('click', () => this.submitWord());
      }

      // Clear Word Button
      const clearBtn = this.container.querySelector('.ws2-btn-clear');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => this.clearSelection());
      }

      // Play Again Button
      const replayBtn = this.container.querySelector('.ws2-btn-replay');
      if (replayBtn) {
        replayBtn.addEventListener('click', () => {
          const overlay = this.container.querySelector('.ws2-gameover-overlay');
          if (overlay) overlay.style.display = 'none';
          this.restartGame();
        });
      }

      // Fullscreen Toggle Buttons
      const fsBtn = this.container.querySelector('.ws2-btn-fullscreen');
      if (fsBtn) {
        fsBtn.addEventListener('click', () => this.toggleFullscreen());
      }
      const exitFsBtn = this.container.querySelector('.ws2-exit-fullscreen-btn');
      if (exitFsBtn) {
        exitFsBtn.addEventListener('click', () => this.toggleFullscreen());
      }

      // Fullscreen Change Listeners
      document.removeEventListener('fullscreenchange', this.boundFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', this.boundFullscreenChange);
      document.addEventListener('fullscreenchange', this.boundFullscreenChange);
      document.addEventListener('webkitfullscreenchange', this.boundFullscreenChange);

      // Keyboard listener
      window.removeEventListener('keydown', this.boundKeyHandler);
      window.addEventListener('keydown', this.boundKeyHandler);
    }

    handleKeyDown(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (!this.isPlaying || this.isPaused) return;

      const modal = document.getElementById('details-modal');
      const modalActive = modal && modal.classList.contains('active');
      const isInsideModal = Boolean(this.container.closest('#details-modal'));
      if (modalActive && !isInsideModal) return;
      if (!modalActive && isInsideModal) return;

      const key = e.key.toUpperCase();

      if (key === 'F' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        this.toggleFullscreen();
        return;
      }

      if (key === 'ENTER') {
        e.preventDefault();
        this.submitWord();
      } else if (key === 'BACKSPACE') {
        e.preventDefault();
        this.removeLastLetter();
      } else if (key === 'ESCAPE') {
        e.preventDefault();
        this.clearSelection();
      } else if (/^[A-Z]$/.test(key)) {
        this.selectLetterByKey(key);
      }
    }

    // ==========================================
    // 6. ARENA STATUS (VS COMPUTER / PAIRS / GROUP)
    // ==========================================
    renderArenaStatus() {
      const arenaStatus = this.container.querySelector('.ws2-arena-status-container');
      if (!arenaStatus) return;

      if (this.gameMode === 'computer') {
        arenaStatus.innerHTML = `
          <div class="ws2-vs-scoreboard">
            <div class="ws2-player-card p1">
              <div class="ws2-player-avatar">👨‍🎓</div>
              <div>
                <div class="ws2-player-name">អ្នកលេង (You)</div>
                <div class="ws2-player-score ws2-score-p1">${this.playerScore}</div>
              </div>
            </div>

            <div class="ws2-vs-center">
              <div class="ws2-vs-badge">VS AI</div>
              <div class="ws2-vs-timer ws2-timer-display">03:00</div>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
                កម្រិត AI៖ 
                <select class="ws2-ai-diff-select" style="background:var(--bg-card); color:var(--accent-cyan); border:1px solid var(--border-color); border-radius:4px; font-size:0.75rem; padding:1px 4px;">
                  <option value="easy" ${this.aiDifficulty === 'easy' ? 'selected' : ''}>ងាយស្រួល (Easy)</option>
                  <option value="medium" ${this.aiDifficulty === 'medium' ? 'selected' : ''}>មធ្យម (Medium)</option>
                  <option value="hard" ${this.aiDifficulty === 'hard' ? 'selected' : ''}>ជំនាញ (Hard)</option>
                </select>
              </div>
            </div>

            <div class="ws2-player-card p2">
              <div class="ws2-player-avatar">🤖</div>
              <div>
                <div class="ws2-player-name">EduBot AI (កុំព្យូទ័រ)</div>
                <div class="ws2-player-score ws2-score-ai">${this.computerScore}</div>
              </div>
            </div>

            <div class="ws2-bot-bubble">
              <span>💬</span>
              <span class="ws2-bot-speech">EduBot កំពុងសង្កេតមើលតារាងអក្សរដើម្បីប្រកួត...</span>
            </div>
          </div>
        `;

        const diffSelect = arenaStatus.querySelector('.ws2-ai-diff-select');
        if (diffSelect) {
          diffSelect.addEventListener('change', (e) => {
            this.aiDifficulty = e.target.value;
            this.startAIBot();
          });
        }
      } else if (this.gameMode === 'pairs') {
        arenaStatus.innerHTML = `
          <div class="ws2-vs-scoreboard">
            <div class="ws2-player-card p1">
              <div class="ws2-player-avatar">🔵</div>
              <div>
                <div class="ws2-player-name">គូទី ១ (Player 1)</div>
                <div class="ws2-player-score ws2-score-p1">${this.p1Score}</div>
              </div>
            </div>

            <div class="ws2-vs-center">
              <div class="ws2-vs-badge" style="background:linear-gradient(135deg, #0284c7, #f59e0b);">1 vs 1</div>
              <div class="ws2-vs-timer ws2-timer-display">03:00</div>
              <div class="ws2-pair-turn-indicator" style="font-size:0.78rem; font-weight:700; color:var(--accent-cyan); margin-top:2px;">
                ដល់វេន៖ គូទី ${this.activePairTurn}
              </div>
            </div>

            <div class="ws2-player-card p2">
              <div class="ws2-player-avatar">🟡</div>
              <div>
                <div class="ws2-player-name">គូទី ២ (Player 2)</div>
                <div class="ws2-player-score ws2-score-p2">${this.p2Score}</div>
              </div>
            </div>
          </div>
        `;
      } else if (this.gameMode === 'group') {
        const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
        const joinUrl = window.location.origin + basePath + 'wordshake.html?room=' + this.roomCode;
        arenaStatus.innerHTML = `
          <div class="ws2-group-hub">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
              <div>
                <h4 style="margin:0; font-size:1.05rem; color:var(--accent-cyan);">🌐 បន្ទប់លេងជាក្រុម (Classroom Multiplayer Room)</h4>
                <p style="margin:2px 0 0; font-size:0.8rem; color:var(--text-secondary);">
                  សិស្សអាចស្កេន QR Code តាមទូរសព្ទ/Tablet ឬបើក Link ដើម្បីចូលរួមប្រកួតក្នុងបន្ទប់ជាមួយគ្នា
                </p>
              </div>
              <div style="font-family:var(--font-code); font-size:1.1rem; font-weight:800; background:var(--bg-primary); padding:6px 14px; border-radius:8px; border:1px solid var(--border-color);">
                បន្ទប់៖ <span style="color:var(--accent-gold);">${this.roomCode}</span>
              </div>
            </div>

            <div style="display:grid; grid-template-columns:auto 1fr; gap:20px; align-items:center;">
              <div class="ws2-qr-card">
                <img class="ws2-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(joinUrl)}" alt="Scan to join">
                <span class="ws2-room-code-tag">${this.roomCode}</span>
              </div>

              <div style="display:flex; flex-direction:column; gap:12px;">
                <div class="ws2-link-copy-box">
                  <input type="text" class="ws2-link-input" readonly value="${joinUrl}">
                  <button class="ws2-copy-btn ws2-btn-copy-link">📋 ចម្លង Link</button>
                </div>

                <div style="font-size:0.82rem; font-weight:700;">តារាងពិន្ទុតាមក្រុម (Team Live Scores):</div>
                <div class="ws2-teams-grid">
                  <div class="ws2-team-card team-lion">
                    <div style="font-size:0.85rem; font-weight:800; color:#f59e0b;">ក្រុមតោ (Lion) 🦁</div>
                    <div class="ws2-team-score team-lion-val">${this.teams.lion.score} pts</div>
                  </div>
                  <div class="ws2-team-card team-eagle">
                    <div style="font-size:0.85rem; font-weight:800; color:#38bdf8;">ក្រុមឥន្ទ្រី (Eagle) 🦅</div>
                    <div class="ws2-team-score team-eagle-val">${this.teams.eagle.score} pts</div>
                  </div>
                  <div class="ws2-team-card team-dragon">
                    <div style="font-size:0.85rem; font-weight:800; color:#10b981;">ក្រុមនាគ (Dragon) 🐉</div>
                    <div class="ws2-team-score team-dragon-val">${this.teams.dragon.score} pts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        const copyBtn = arenaStatus.querySelector('.ws2-btn-copy-link');
        const linkInput = arenaStatus.querySelector('.ws2-link-input');
        if (copyBtn && linkInput) {
          copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(linkInput.value).then(() => {
              copyBtn.textContent = '✅ បានចម្លង!';
              setTimeout(() => { copyBtn.textContent = '📋 ចម្លង Link'; }, 2500);
            });
          });
        }
      } else {
        // Solo Mode
        arenaStatus.innerHTML = `
          <div class="ws2-solo-stats">
            <div class="ws2-stat-tile">
              <div class="icon">⏳</div>
              <div>
                <div class="label">ពេលវេលានៅសល់</div>
                <div class="value ws2-timer-display">03:00</div>
              </div>
            </div>
            <div class="ws2-stat-tile">
              <div class="icon">🏆</div>
              <div>
                <div class="label">ពិន្ទុរបស់អ្នក</div>
                <div class="value ws2-score-p1" style="color:var(--accent-gold);">${this.playerScore}</div>
              </div>
            </div>
            <div class="ws2-stat-tile">
              <div class="icon">👑</div>
              <div>
                <div class="label">ពិន្ទុខ្ពស់បំផុត</div>
                <div class="value" style="color:var(--accent-cyan);">${this.highScore}</div>
              </div>
            </div>
          </div>
        `;
      }
    }

    setGameMode(mode) {
      this.gameMode = mode;
      this.renderArenaStatus();
      this.restartGame();
      this.triggerModeEntranceSplash(mode, false);
    }

    // ==========================================
    // 7. BOARD GENERATION & SHAKE MECHANICS
    // ==========================================
    shakeBoard(playRattle = true) {
      if (playRattle) {
        this.audio.playShake();
      }

      // Generate 6, 8, 10, or 12 letters with guaranteed vowel-consonant balance
      const count = this.tableSize;
      const vowelCount = count <= 6 ? 2 : count <= 8 ? 3 : count <= 10 ? 4 : 5;
      const consonantCount = count - vowelCount;

      let letters = [];
      let attempts = 0;
      let validWords = [];

      do {
        attempts++;
        letters = [];
        for (let i = 0; i < vowelCount; i++) {
          letters.push(this.commonVowels[Math.floor(Math.random() * this.commonVowels.length)]);
        }
        for (let i = 0; i < consonantCount; i++) {
          letters.push(this.commonConsonants[Math.floor(Math.random() * this.commonConsonants.length)]);
        }
        letters.sort(() => Math.random() - 0.5);

        // Precompute all valid English words that can be made from this board
        validWords = this.solveBoardWords(letters);
      } while (validWords.length < 25 && attempts < 15);

      this.boardLetters = letters;
      this.possibleWords = validWords;
      this.selectedIndices = [];

      this.renderLetterTable(playRattle);
      this.updateBuilder();

      // If in Group mode, broadcast to other connected tabs/devices
      if (this.gameMode === 'group') {
        this.broadcast({
          type: 'NEW_BOARD',
          letters: this.boardLetters,
          room: this.roomCode
        });
      }

      // Restart AI Bot in computer mode
      if (this.gameMode === 'computer') {
        this.startAIBot();
      }
    }

    solveBoardWords(letters) {
      const dict = window.WORD_SHAPE_DICTIONARY || window.WORD_SHAKE_DICTIONARY;
      if (!dict) return [];

      const avail = {};
      letters.forEach(c => avail[c] = (avail[c] || 0) + 1);

      const found = [];
      for (const w of dict) {
        if (w.length < 3 || w.length > letters.length) continue;
        const need = {};
        let ok = true;
        for (const char of w) {
          need[char] = (need[char] || 0) + 1;
          if (!avail[char] || need[char] > avail[char]) {
            ok = false;
            break;
          }
        }
        if (ok) found.push(w);
      }
      return found;
    }

    renderLetterTable(animate = false) {
      const rack = this.container.querySelector('.ws2-letter-rack');
      if (!rack) return;

      rack.className = `ws2-letter-rack count-${this.tableSize}`;
      rack.innerHTML = '';

      this.boardLetters.forEach((char, idx) => {
        const tile = document.createElement('button');
        tile.className = 'ws2-tile' + (animate ? ' shaking' : '');
        tile.dataset.index = idx;

        // Points subscript based on Scrabble-like weights
        const pts = ['Q', 'Z', 'X'].includes(char) ? 7 :
                    ['J', 'K'].includes(char) ? 4 :
                    ['F', 'H', 'V', 'W', 'Y'].includes(char) ? 3 :
                    ['B', 'C', 'M', 'P'].includes(char) ? 2 : 1;

        tile.innerHTML = `
          <span>${char}</span>
          <span class="ws2-tile-pts">${pts}</span>
        `;

        tile.addEventListener('click', () => {
          this.toggleTileByIndex(idx);
        });

        rack.appendChild(tile);
      });

      if (animate) {
        setTimeout(() => {
          rack.querySelectorAll('.ws2-tile').forEach(t => t.classList.remove('shaking'));
        }, 700);
      }
    }

    // ==========================================
    // 8. TILE SELECTION & WORD BUILDING
    // ==========================================
    toggleTileByIndex(idx) {
      if (!this.isPlaying) return;

      const pos = this.selectedIndices.indexOf(idx);
      if (pos > -1) {
        this.selectedIndices.splice(pos, 1);
        this.audio.playClick(310);
      } else {
        this.selectedIndices.push(idx);
        const pitch = 380 + (this.selectedIndices.length * 35);
        this.audio.playClick(pitch);
      }

      this.updateSelectionVisuals();
      this.updateBuilder();
    }

    selectLetterByKey(letter) {
      const unselectedIdx = this.boardLetters.findIndex((char, idx) => {
        return char === letter && !this.selectedIndices.includes(idx);
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
        this.audio.playClick(300);
        this.updateSelectionVisuals();
        this.updateBuilder();
      }
    }

    clearSelection() {
      if (this.selectedIndices.length === 0) return;
      this.selectedIndices = [];
      this.audio.playClick(270);
      this.updateSelectionVisuals();
      this.updateBuilder();
    }

    updateSelectionVisuals() {
      const tiles = this.container.querySelectorAll('.ws2-tile');
      tiles.forEach((tile, idx) => {
        const order = this.selectedIndices.indexOf(idx);
        const existingOrder = tile.querySelector('.ws2-tile-order');
        if (existingOrder) existingOrder.remove();

        if (order > -1) {
          tile.classList.add('selected');
          const orderBadge = document.createElement('span');
          orderBadge.className = 'ws2-tile-order';
          orderBadge.textContent = order + 1;
          tile.appendChild(orderBadge);
        } else {
          tile.classList.remove('selected');
        }
      });
    }

    getCurrentWord() {
      return this.selectedIndices.map(i => this.boardLetters[i]).join('').toUpperCase();
    }

    updateBuilder() {
      const tray = this.container.querySelector('.ws2-builder-tray');
      const ptsPreview = this.container.querySelector('.ws2-pts-preview');
      const enterBtn = this.container.querySelector('.ws2-btn-enter');
      if (!tray || !ptsPreview) return;

      const word = this.getCurrentWord();

      if (word.length === 0) {
        tray.className = 'ws2-builder-tray';
        tray.innerHTML = '<span style="color:var(--text-muted); font-size:0.85rem; font-style:italic;">ចុចអក្សរយ៉ាងតិច ៣ តួដើម្បីផ្គុំពាក្យ...</span>';
        ptsPreview.textContent = '0 តួ (0 pt)';
        if (enterBtn) enterBtn.disabled = true;
        return;
      }

      tray.className = 'ws2-builder-tray has-letters';
      tray.innerHTML = this.selectedIndices.map((boardIdx, step) => {
        const char = this.boardLetters[boardIdx];
        return `
          <span class="ws2-builder-badge" data-step="${step}" title="ចុចដើម្បីលុប">
            ${char}
          </span>
        `;
      }).join('');

      // Click badge to delete
      tray.querySelectorAll('.ws2-builder-badge').forEach(badge => {
        badge.addEventListener('click', () => {
          const step = parseInt(badge.dataset.step, 10);
          this.selectedIndices.splice(step, 1);
          this.audio.playClick(300);
          this.updateSelectionVisuals();
          this.updateBuilder();
        });
      });

      const pts = this.calculatePoints(word.length);
      ptsPreview.textContent = `${word.length} តួ (+${pts} pts ប្រសិនបើត្រូវ)`;
      if (enterBtn) enterBtn.disabled = word.length < 3;
    }

    calculatePoints(len) {
      if (len < 3) return 0;
      if (len === 3) return 1;
      if (len === 4) return 2;
      if (len === 5) return 3;
      if (len === 6) return 4;
      return 7; // 7+ letters = 7 pts
    }

    // ==========================================
    // 9. SUBMIT WORD & SCORING
    // ==========================================
    submitWord() {
      const word = this.getCurrentWord();
      const tray = this.container.querySelector('.ws2-builder-tray');

      // Rule: Word must not be under 3 letters
      if (word.length < 3) {
        this.flashInvalid(tray, '⚠️ ពាក្យមិនអាចក្រោម ៣ តួអក្សរបានទេ! (Min 3 letters)');
        return;
      }

      // Check duplicates based on mode
      let alreadyFound = false;
      if (this.gameMode === 'pairs') {
        alreadyFound = (this.activePairTurn === 1 ? this.p1Words.has(word) : this.p2Words.has(word));
      } else {
        alreadyFound = this.playerWords.has(word);
      }

      if (alreadyFound) {
        this.flashInvalid(tray, `ℹ️ ពាក្យ "${word}" ត្រូវបានរកឃើញរួចហើយ! (Already found)`);
        return;
      }

      // Dictionary validation
      const dict = window.WORD_SHAPE_DICTIONARY || window.WORD_SHAKE_DICTIONARY;
      const isValid = dict ? dict.has(word) : true;

      if (!isValid) {
        this.flashInvalid(tray, `❌ ពាក្យ "${word}" មិនមានក្នុងវចនានុក្រមទេ! (Not in dictionary)`);
        return;
      }

      // SUCCESS!
      const pts = this.calculatePoints(word.length);
      this.audio.playSuccess(pts);
      this.flashValid(tray, `🎉 អស្ចារ្យណាស់! "${word}" ត្រឹមត្រូវ (+${pts} ពិន្ទុ!)`);

      if (this.gameMode === 'pairs') {
        if (this.activePairTurn === 1) {
          this.p1Words.set(word, pts);
          this.p1Score += pts;
          this.activePairTurn = 2; // Switch turn
        } else {
          this.p2Words.set(word, pts);
          this.p2Score += pts;
          this.activePairTurn = 1; // Switch turn
        }
        this.updatePairsUI();
      } else if (this.gameMode === 'group') {
        this.playerWords.set(word, pts);
        this.playerScore += pts;
        this.teams[this.myTeam].score += pts;
        this.teams[this.myTeam].words.add(word);
        this.broadcast({
          type: 'TEAM_SCORE',
          team: this.myTeam,
          score: this.teams[this.myTeam].score,
          word: word
        });
        this.updateTeamsUI();
      } else {
        // Solo & Vs Computer
        this.playerWords.set(word, pts);
        this.playerScore += pts;
        const p1ScoreEl = this.container.querySelector('.ws2-score-p1');
        if (p1ScoreEl) p1ScoreEl.textContent = this.playerScore;
      }

      // Update High Score
      if (this.playerScore > this.highScore) {
        this.highScore = this.playerScore;
        localStorage.setItem('ws2_high_score', this.highScore.toString());
      }

      // Add to Found List UI
      this.addWordToFoundList(word, pts);

      // Clear builder
      this.selectedIndices = [];
      this.updateSelectionVisuals();
      this.updateBuilder();
    }

    flashValid(tray, msg) {
      if (!tray) return;
      tray.classList.add('valid-flash');
      this.showFeedback(msg, 'success');
      setTimeout(() => tray.classList.remove('valid-flash'), 600);
    }

    flashInvalid(tray, msg) {
      if (!tray) return;
      this.audio.playError();
      tray.classList.add('invalid-shake');
      this.showFeedback(msg, 'error');
      setTimeout(() => tray.classList.remove('invalid-shake'), 450);
    }

    showFeedback(msg, type = 'info') {
      const fb = this.container.querySelector('.ws2-feedback-msg');
      if (!fb) return;
      fb.className = `ws2-feedback-msg ${type}`;
      fb.textContent = msg;
    }

    addWordToFoundList(word, pts) {
      const list = this.container.querySelector('.ws2-found-chips-list');
      const countEl = this.container.querySelector('.ws2-found-count');
      if (!list) return;

      const totalCount = this.gameMode === 'pairs' ? (this.p1Words.size + this.p2Words.size) : this.playerWords.size;
      if (countEl) countEl.textContent = totalCount;

      if (totalCount === 1) {
        list.innerHTML = '';
      }

      const tag = document.createElement('div');
      tag.className = 'ws2-found-tag' + (pts >= 7 ? ' tier-7' : '');
      tag.innerHTML = `
        <span>${word}</span>
        <span class="pts">+${pts}</span>
        <button class="speak-btn" title="បញ្ចេញសំឡេង">🔊</button>
      `;

      tag.querySelector('.speak-btn').addEventListener('click', () => {
        this.speakWord(word);
      });

      list.prepend(tag);
    }

    speakWord(word) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(word);
        utt.lang = 'en-US';
        utt.rate = 0.9;
        window.speechSynthesis.speak(utt);
      }
    }

    // ==========================================
    // 10. AI BOT LOGIC (VS COMPUTER)
    // ==========================================
    startAIBot() {
      if (this.aiInterval) clearInterval(this.aiInterval);
      if (this.gameMode !== 'computer' || !this.isPlaying) return;

      const intervalMs = this.aiDifficulty === 'easy' ? 14000 :
                         this.aiDifficulty === 'hard' ? 5000 : 8500;

      this.aiInterval = setInterval(() => {
        if (!this.isPlaying || this.possibleWords.length === 0) return;

        // Filter words that the bot hasn't found yet
        const candidateWords = this.possibleWords.filter(w => !this.computerWords.has(w));
        if (candidateWords.length === 0) return;

        // Difficulty filtering
        let chosenWord = '';
        if (this.aiDifficulty === 'easy') {
          const shortWords = candidateWords.filter(w => w.length <= 4);
          chosenWord = shortWords[Math.floor(Math.random() * shortWords.length)] || candidateWords[0];
        } else if (this.aiDifficulty === 'hard') {
          const longWords = candidateWords.filter(w => w.length >= 5);
          chosenWord = longWords[Math.floor(Math.random() * longWords.length)] || candidateWords[0];
        } else {
          chosenWord = candidateWords[Math.floor(Math.random() * candidateWords.length)];
        }

        if (chosenWord) {
          const pts = this.calculatePoints(chosenWord.length);
          this.computerWords.add(chosenWord);
          this.computerScore += pts;

          const aiScoreEl = this.container.querySelector('.ws2-score-ai');
          if (aiScoreEl) aiScoreEl.textContent = this.computerScore;

          const botSpeech = this.container.querySelector('.ws2-bot-speech');
          if (botSpeech) {
            botSpeech.textContent = `🤖 EduBot រកឃើញពាក្យ "${chosenWord}" (+${pts} pts)!`;
          }
        }
      }, intervalMs);
    }

    updatePairsUI() {
      const p1El = this.container.querySelector('.ws2-score-p1');
      const p2El = this.container.querySelector('.ws2-score-p2');
      const turnEl = this.container.querySelector('.ws2-pair-turn-indicator');

      if (p1El) p1El.textContent = this.p1Score;
      if (p2El) p2El.textContent = this.p2Score;
      if (turnEl) {
        turnEl.textContent = `ដល់វេន៖ គូទី ${this.activePairTurn} (${this.activePairTurn === 1 ? '🔵 Blue' : '🟡 Gold'})`;
        turnEl.style.color = this.activePairTurn === 1 ? 'var(--accent-cyan)' : 'var(--accent-gold)';
      }
    }

    updateTeamsUI() {
      const lionEl = this.container.querySelector('.team-lion-val');
      const eagleEl = this.container.querySelector('.team-eagle-val');
      const dragonEl = this.container.querySelector('.team-dragon-val');

      if (lionEl) lionEl.textContent = `${this.teams.lion.score} pts`;
      if (eagleEl) eagleEl.textContent = `${this.teams.eagle.score} pts`;
      if (dragonEl) dragonEl.textContent = `${this.teams.dragon.score} pts`;
    }

    // ==========================================
    // 11. TIMER & GAME OVER
    // ==========================================
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

      if (this.gameMode === 'computer') {
        this.startAIBot();
      }
    }

    restartGame() {
      this.playerScore = 0;
      this.playerWords.clear();
      this.computerScore = 0;
      this.computerWords.clear();
      this.p1Score = 0;
      this.p1Words.clear();
      this.p2Score = 0;
      this.p2Words.clear();
      this.selectedIndices = [];

      const list = this.container.querySelector('.ws2-found-chips-list');
      if (list) list.innerHTML = '<span style="color:var(--text-muted); font-size:0.82rem; font-style:italic; padding:8px 0;">ពាក្យដែលអ្នករកឃើញនឹងបង្ហាញនៅទីនេះ...</span>';

      const countEl = this.container.querySelector('.ws2-found-count');
      if (countEl) countEl.textContent = '0';

      this.renderArenaStatus();
      this.shakeBoard(true);
      this.startGame();
    }

    updateTimerDisplay() {
      const timerEls = this.container.querySelectorAll('.ws2-timer-display');
      if (timerEls.length === 0) return;

      if (this.timerSeconds === 0) {
        timerEls.forEach(el => el.textContent = '∞ សេរី');
        return;
      }

      const m = Math.floor(this.timeRemaining / 60);
      const s = this.timeRemaining % 60;
      const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      timerEls.forEach(el => {
        el.textContent = str;
        if (this.timeRemaining <= 15) {
          el.style.color = '#ef4444';
        } else if (this.timeRemaining <= 45) {
          el.style.color = '#f97316';
        } else {
          el.style.color = 'var(--accent-cyan)';
        }
      });
    }

    endGame() {
      if (this.timerInterval) clearInterval(this.timerInterval);
      if (this.aiInterval) clearInterval(this.aiInterval);
      this.isPlaying = false;
      this.audio.playGameOver();

      const overlay = this.container.querySelector('.ws2-gameover-overlay');
      if (!overlay) return;

      const titleEl = overlay.querySelector('.ws2-res-title');
      const badgeEl = overlay.querySelector('.ws2-res-badge');
      const subEl = overlay.querySelector('.ws2-res-subtitle');
      const scoreVal = overlay.querySelector('.ws2-stat-score-val');
      const wordsVal = overlay.querySelector('.ws2-stat-words-val');
      const oppVal = overlay.querySelector('.ws2-stat-opp-val');
      const oppLbl = overlay.querySelector('.ws2-stat-opp-lbl');

      if (scoreVal) scoreVal.textContent = this.playerScore;
      if (wordsVal) wordsVal.textContent = this.playerWords.size;

      if (this.gameMode === 'computer') {
        if (oppLbl) oppLbl.textContent = 'EduBot AI';
        if (oppVal) oppVal.textContent = this.computerScore;

        if (this.playerScore > this.computerScore) {
          if (badgeEl) badgeEl.textContent = '👑';
          if (titleEl) titleEl.textContent = '🎉 អ្នកបានឈ្នះកុំព្យូទ័រហើយ!';
          if (subEl) subEl.textContent = `ពិន្ទុរបស់អ្នក (${this.playerScore}) លើស EduBot AI (${this.computerScore})!`;
        } else if (this.playerScore < this.computerScore) {
          if (badgeEl) badgeEl.textContent = '🤖';
          if (titleEl) titleEl.textContent = 'EduBot AI នាំមុខលើកនេះ!';
          if (subEl) subEl.textContent = `ព្យាយាមម្តងទៀតដើម្បីយកឈ្នះកុំព្យូទ័រ!`;
        } else {
          if (badgeEl) badgeEl.textContent = '🤝';
          if (titleEl) titleEl.textContent = 'ស្មើរពិន្ទុគ្នា!';
          if (subEl) subEl.textContent = `ការប្រកួតស្វិតស្វាញណាស់ (${this.playerScore} ស្មើ ${this.computerScore})!`;
        }
      } else if (this.gameMode === 'pairs') {
        if (oppLbl) oppLbl.textContent = 'គូទី ២ (Player 2)';
        if (scoreVal) scoreVal.textContent = this.p1Score;
        if (oppVal) oppVal.textContent = this.p2Score;

        if (this.p1Score > this.p2Score) {
          if (badgeEl) badgeEl.textContent = '🔵';
          if (titleEl) titleEl.textContent = 'គូទី ១ (Player 1) ជាអ្នកឈ្នះ!';
          if (subEl) subEl.textContent = `ពិន្ទុ ${this.p1Score} ទល់នឹង ${this.p2Score}`;
        } else if (this.p2Score > this.p1Score) {
          if (badgeEl) badgeEl.textContent = '🟡';
          if (titleEl) titleEl.textContent = 'គូទី ២ (Player 2) ជាអ្នកឈ្នះ!';
          if (subEl) subEl.textContent = `ពិន្ទុ ${this.p2Score} ទល់នឹង ${this.p1Score}`;
        } else {
          if (badgeEl) badgeEl.textContent = '🤝';
          if (titleEl) titleEl.textContent = 'ស្មើពិន្ទុគ្នា!';
          if (subEl) subEl.textContent = `គូទាំងពីរធ្វើបានយ៉ាងល្អ (${this.p1Score} ស្មើ ${this.p2Score})`;
        }
      }

      overlay.style.display = 'flex';
    }

    // ==========================================
    // FULLSCREEN THEATER MODE & UI HANDLERS
    // ==========================================
    toggleFullscreen() {
      const rootContainer = this.container.querySelector('.ws2-container') || this.container;
      const isDocFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
      const isClassFs = rootContainer.classList.contains('is-fullscreen');

      if (!isDocFs && !isClassFs) {
        if (rootContainer.requestFullscreen) {
          rootContainer.requestFullscreen().catch(() => {
            rootContainer.classList.add('is-fullscreen');
          });
        } else if (rootContainer.webkitRequestFullscreen) {
          rootContainer.webkitRequestFullscreen();
        } else {
          rootContainer.classList.add('is-fullscreen');
        }
        rootContainer.classList.add('is-fullscreen');
        this.updateFullscreenUI(true);
      } else {
        if (document.exitFullscreen && document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen && document.webkitFullscreenElement) {
          document.webkitExitFullscreen();
        }
        rootContainer.classList.remove('is-fullscreen');
        this.updateFullscreenUI(false);
      }
    }

    handleFullscreenChange() {
      const isFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
      const rootContainer = this.container.querySelector('.ws2-container') || this.container;
      if (!isFs) {
        rootContainer.classList.remove('is-fullscreen');
        this.updateFullscreenUI(false);
      } else {
        rootContainer.classList.add('is-fullscreen');
        this.updateFullscreenUI(true);
      }
    }

    updateFullscreenUI(isFullscreen) {
      this.isFullscreen = isFullscreen;
      const fsBtn = this.container.querySelector('.ws2-btn-fullscreen');
      if (fsBtn) {
        fsBtn.innerHTML = isFullscreen ? '🗗' : '⛶';
        fsBtn.setAttribute('title', isFullscreen ? 'បង្រួមអេក្រង់ (Exit Fullscreen - Esc / F)' : 'ពេញអេក្រង់កុំព្យូទ័រ (Full Screen Display - F)');
      }
      const headerFsBtn = document.getElementById('btn-header-fullscreen');
      if (headerFsBtn) {
        headerFsBtn.innerHTML = isFullscreen ? '<span>🗗</span> បង្រួមអេក្រង់ (Exit Fullscreen)' : '<span>⛶</span> ពេញអេក្រង់កុំព្យូទ័រ (Full Screen Display)';
      }
    }

    // ==========================================
    // FULL DISPLAY ENTRANCE SPLASH (NEW PAGE / NEW MODE)
    // ==========================================
    triggerModeEntranceSplash(mode, isFirstLoad = false) {
      const splash = this.container.querySelector('.ws2-entrance-splash');
      if (!splash) return;

      const configs = {
        computer: {
          icon: '🤖',
          modeTag: 'VS COMPUTER AI',
          color: '#0284c7',
          title: 'ប្រកួតទល់នឹង EduBot AI',
          desc: 'សាកល្បងល្បឿន និងភាពរហ័សរហួនក្នុងការផ្គុំពាក្យ ៣ តួឡើងទៅទល់នឹងបញ្ញាសិប្បនិម្មិត!',
          rules: [
            '⚡ ផ្គុំពាក្យអង់គ្លេសដែលមាន ៣ តួអក្សរឡើងទៅ (Words >= 3 Letters)',
            '⏱️ ប្រជែងដណ្តើមពិន្ទុទល់នឹង EduBot AI ក្នុងរយៈពេលកំណត់',
            '🎯 រូបមន្តពិន្ទុ៖ 3L=1pt, 4L=2pts, 5L=3pts, 6L=4pts, 7+L=7pts!'
          ]
        },
        pairs: {
          icon: '👥',
          modeTag: 'PAIRS 1V1 RIVALRY',
          color: '#f59e0b',
          title: 'ការប្រកួតជាគូ (1v1 Rivalry)',
          desc: 'គូទី ១ 🔵 ប៉ះ គូទី ២ 🟡 ឆ្លាស់វេនគ្នាស្វែងរកពាក្យលើម៉ាស៊ីនតែមួយ (Pass & Play)!',
          rules: [
            '🔵 គូទី ១ (Player 1) vs 🟡 គូទី ២ (Player 2) ឆ្លាស់វេនគ្នា',
            '🔄 ឆ្លាស់វេនរាល់ពេលបញ្ជូនពាក្យត្រឹមត្រូវ ឬអស់ពេលកំណត់',
            '🏆 អ្នកដែលរកបានពិន្ទុសរុបខ្ពស់ជាងគេជាម្ចាស់ជ័យជម្នះ!'
          ]
        },
        group: {
          icon: '🌐',
          modeTag: 'CLASSROOM MULTIPLAYER',
          color: '#10b981',
          title: 'បន្ទប់លេងជាក្រុម (QR Code Room)',
          desc: 'សិស្សានុសិស្សស្កេន QR Code ឬបើក Link ដើម្បីប្រកួតតាមក្រុមផ្ទាល់ក្នុងថ្នាក់!',
          rules: [
            '📱 ស្កេន QR Code ឬបើក Link បន្ទប់ប្រកួតពីទូរសព្ទ/Tablet ឬកុំព្យូទ័រ',
            '🦁 ជ្រើសរើសក្រុម៖ ក្រុមតោ (Lion), ក្រុមឥន្ទ្រី (Eagle), ក្រុមនាគ (Dragon)',
            '📡 ពិន្ទុ និងតារាងអក្សរធ្វើបច្ចុប្បន្នភាព Real-Time ឆ្លងកាត់ឧបករណ៍'
          ]
        },
        solo: {
          icon: '🎯',
          modeTag: 'SOLO VOCAB PRACTICE',
          color: '#a855f7',
          title: 'ការអនុវត្តទោល (Solo Mode)',
          desc: 'ពង្រីកវាក្យសព្ទអង់គ្លេសដោយសេរីតាមល្បឿនផ្ទាល់ខ្លួន និងបំបែកកំណត់ត្រាពិន្ទុ!',
          rules: [
            '📖 ស្វែងរកពាក្យដោយសេរី គ្មានសម្ពាធ តាមល្បឿនផ្ទាល់ខ្លួន',
            '🔊 ចុចស្ដាប់ការបញ្ចេញសំឡេងតាម Web Speech API ត្រឹមត្រូវ',
            '🏅 បំបែកកំណត់ត្រាពិន្ទុខ្ពស់បំផុតផ្ទាល់ខ្លួន (High Score Challenge)'
          ]
        }
      };

      const cfg = configs[mode] || configs.computer;

      splash.innerHTML = `
        <div class="ws2-splash-content">
          <div class="ws2-splash-icon-ring" style="background:linear-gradient(135deg, ${cfg.color}, #6366f1); border: 3px solid ${cfg.color};">
            ${cfg.icon}
          </div>
          <div class="ws2-splash-mode-tag" style="background:rgba(255,255,255,0.12); color:${cfg.color}; border:1px solid ${cfg.color};">
            ${cfg.modeTag}
          </div>
          <h2 class="ws2-splash-title">${cfg.title}</h2>
          <p class="ws2-splash-desc">${cfg.desc}</p>
          <div class="ws2-splash-rules-box">
            ${cfg.rules.map(r => `
              <div class="ws2-splash-rule-item">
                <span style="color:${cfg.color}; font-weight:800;">✓</span>
                <span>${r}</span>
              </div>
            `).join('')}
          </div>
          <button class="ws2-splash-btn-enter" style="background:linear-gradient(135deg, ${cfg.color} 0%, #ec4899 100%);">
            <span>🚀</span> ចូលសង្វៀន (ENTER ARENA)
          </button>
          <div class="ws2-splash-countdown-text">ដំណើរការដោយស្វ័យប្រវត្តិក្នុ​ង 2.4s ឬចុច Space/Enter...</div>
        </div>
      `;

      splash.style.display = 'flex';
      requestAnimationFrame(() => {
        splash.classList.add('active');
      });

      this.audio.playSuccess(7);

      const dismissSplash = () => {
        if (this.splashTimeout) clearTimeout(this.splashTimeout);
        splash.classList.remove('active');
        setTimeout(() => {
          splash.style.display = 'none';
        }, 350);
        window.removeEventListener('keydown', keyDismiss);
      };

      const keyDismiss = (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
          dismissSplash();
        }
      };

      const enterBtn = splash.querySelector('.ws2-splash-btn-enter');
      if (enterBtn) {
        enterBtn.addEventListener('click', dismissSplash);
      }
      window.addEventListener('keydown', keyDismiss);

      if (this.splashTimeout) clearTimeout(this.splashTimeout);
      this.splashTimeout = setTimeout(() => {
        dismissSplash();
      }, 2400);
    }

    // ==========================================
    // PARTICIPANT WELCOME MODAL (QR CODE / ROOM LINK)
    // ==========================================
    showParticipantWelcomeModal() {
      const modal = this.container.querySelector('.ws2-participant-modal');
      if (!modal) return;

      modal.innerHTML = `
        <div class="ws2-participant-dialog">
          <div style="font-size:3rem; margin-bottom:4px;">👋 🌐</div>
          <h3 style="margin:0 0 6px; font-size:1.35rem; color:#ffffff;">ស្វាគមន៍មកកាន់បន្ទប់ Word Shake II</h3>
          <p style="color:var(--text-secondary); margin:0 0 16px; font-size:0.9rem;">
            លេខកូដបន្ទប់ប្រកួត៖ <strong style="color:var(--accent-gold); font-family:var(--font-code); font-size:1.1rem;">${this.roomCode}</strong><br>
            សូមជ្រើសរើសក្រុមប្រកួតរបស់អ្នក (Select Your Team):
          </p>
          <div class="ws2-team-choice-grid">
            <button class="ws2-team-choice-btn selected" data-team="lion">
              <span style="font-size:2rem;">🦁</span>
              <span>ក្រុមតោ (Lion)</span>
            </button>
            <button class="ws2-team-choice-btn" data-team="eagle">
              <span style="font-size:2rem;">🦅</span>
              <span>ក្រុមឥន្ទ្រី (Eagle)</span>
            </button>
            <button class="ws2-team-choice-btn" data-team="dragon">
              <span style="font-size:2rem;">🐉</span>
              <span>ក្រុមនាគ (Dragon)</span>
            </button>
          </div>
          <button class="ws2-btn-join-room ws2-shake-btn" style="width:100%; justify-content:center; padding:12px; margin-top:8px;">
            🚀 ចូលរួមការប្រកួត (Join Game Arena)
          </button>
        </div>
      `;

      modal.style.display = 'flex';
      requestAnimationFrame(() => {
        modal.classList.add('active');
      });

      const teamBtns = modal.querySelectorAll('.ws2-team-choice-btn');
      let selectedTeam = 'lion';
      teamBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          teamBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectedTeam = btn.dataset.team;
        });
      });

      const joinBtn = modal.querySelector('.ws2-btn-join-room');
      if (joinBtn) {
        joinBtn.addEventListener('click', () => {
          this.myTeam = selectedTeam;
          modal.classList.remove('active');
          setTimeout(() => { modal.style.display = 'none'; }, 300);
          this.setGameMode('group');
          this.triggerModeEntranceSplash('group', false);
        });
      }
    }
  }

  // ==========================================
  // 12. GLOBAL EXPORTS & MODAL INTEGRATION
  // ==========================================
  let activeGameInstance = null;

  window.initWordShake2Game = function(containerElement, options = {}) {
    if (activeGameInstance) {
      activeGameInstance.destroy();
    }
    activeGameInstance = new WordShake2Game(containerElement, options);
    activeGameInstance.init();
    return activeGameInstance;
  };

  // Backwards compatibility alias
  window.initWordShapeGame = window.initWordShake2Game;

  window.launchWordShake2InModal = function(options = {}) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (!modal || !modalBody) return;

    modalTitle.innerHTML = `🎮 Word Shake II — <span style="color:var(--accent-gold);">Professional Educational Challenge</span>`;
    modal.classList.add('modal-game-mode');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook cleanup to modal close
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

    window.initWordShake2Game(modalBody, options);
  };

  window.launchWordShapeInModal = window.launchWordShake2InModal;

})();
