/**
 * UNIVERSAL INTERACTIVE COMPETITION ENGINE (competition-engine.js)
 * Designed for Mr. OL English E-Learning Platform
 * 
 * Supports:
 * - 4 Competition Modes: Individual Solo, Pair 1v1, Team Battle (2-4 Teams), Whole Class Arena
 * - Bamboozle / Game-Show Mystery Surprises & Punishments (Double Points, Teleport to 1st, Drop to Last, Steal Points, Shield, Lightning, Swap, Gifts)
 * - Live HUD with Active Turn Indicator & Instant Score Tracking
 * - Grand Finale Top 3 Performers Celebration Podium (Gold 🥇, Silver 🥈, Bronze 🥉) with Confetti, Memes & Trophies
 * - Excel (.csv) & Google Sheets Export
 * - 100% Mobile Optimized (Android & iOS)
 */

(function (window, document) {
  'use strict';

  // Sound Synthesizer via Web Audio API (No external sound files required)
  const ArenaAudio = {
    ctx: null,
    enabled: true,

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    },

    resume() {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },

    playChime() {
      if (!this.enabled) return;
      try {
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.2); // C6
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    },

    playFanfare() {
      if (!this.enabled) return;
      try {
        this.resume();
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const start = this.ctx.currentTime + (idx * 0.12);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);
          gain.gain.setValueAtTime(0.25, start);
          gain.gain.exponentialRampToValueAtTime(0.01, start + 0.4);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(start);
          osc.stop(start + 0.4);
        });
      } catch (e) {}
    },

    playSurprise() {
      if (!this.enabled) return;
      try {
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(800, now + 0.15);
        osc.frequency.linearRampToValueAtTime(450, now + 0.3);
        osc.frequency.linearRampToValueAtTime(950, now + 0.5);
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.55);
      } catch (e) {}
    },

    playBuzzer() {
      if (!this.enabled) return;
      try {
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.3);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    },

    playShield() {
      if (!this.enabled) return;
      try {
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } catch (e) {}
    },

    playLightning() {
      if (!this.enabled) return;
      try {
        this.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(110, now + 0.08);
        osc.frequency.setValueAtTime(440, now + 0.16);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } catch (e) {}
    }
  };

  // Canvas Confetti Celebration FX
  const Confetti = {
    canvas: null,
    ctx: null,
    particles: [],
    animId: null,

    start(duration = 4500) {
      if (!this.canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'arena-confetti-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100vw';
        this.canvas.style.height = '100vh';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '999999';
        document.body.appendChild(this.canvas);
      }
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', this.resize.bind(this));

      const colors = ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#EF4444', '#FBBF24', '#06B6D4'];
      this.particles = [];
      const count = window.innerWidth < 768 ? 90 : 180;
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height - this.canvas.height,
          size: Math.random() * 8 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.random() * 4 - 2,
          vy: Math.random() * 3 + 3,
          rot: Math.random() * 360,
          vRot: Math.random() * 6 - 3,
          tilt: Math.random() * 10
        });
      }

      this.canvas.style.display = 'block';
      const startTime = Date.now();

      const loop = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.vRot;

          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rot * Math.PI) / 180);
          this.ctx.fillStyle = p.color;
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          this.ctx.restore();

          if (p.y > this.canvas.height) {
            p.y = -20;
            p.x = Math.random() * this.canvas.width;
          }
        });

        if (Date.now() - startTime < duration) {
          this.animId = requestAnimationFrame(loop);
        } else {
          this.stop();
        }
      };
      loop();
    },

    resize() {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
    },

    stop() {
      if (this.animId) cancelAnimationFrame(this.animId);
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.style.display = 'none';
      }
    }
  };

  // Default Team Roster Presets
  const DEFAULT_TEAMS = [
    { id: 'team_red', name: 'Red Lions', nameKm: 'ក្រុមតោក្រហម', avatar: '🦁', color: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
    { id: 'team_blue', name: 'Blue Eagles', nameKm: 'ក្រុមឥន្ទ្រីខៀវ', avatar: '🦅', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
    { id: 'team_green', name: 'Green Dragons', nameKm: 'ក្រុមនាគបៃតង', avatar: '🐉', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #047857)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
    { id: 'team_gold', name: 'Gold Tigers', nameKm: 'ក្រុមខ្លាមាស', avatar: '🐯', color: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B, #B45309)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 }
  ];

  const DEFAULT_PAIRS = [
    { id: 'player_1', name: 'Player 1', nameKm: 'បេក្ខជនទី ១', avatar: '⚡', color: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4, #0E7490)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
    { id: 'player_2', name: 'Player 2', nameKm: 'បេក្ខជនទី ២', avatar: '🔥', color: '#F97316', gradient: 'linear-gradient(135deg, #F97316, #C2410C)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 }
  ];

  // Mystery Box Event Definitions
  const MYSTERY_EVENTS = [
    {
      id: 'DOUBLE_POINTS',
      titleKm: 'ទ្វេដងពិន្ទុ! (Double Points)',
      titleEn: 'Double Points x2!',
      descKm: 'ពិន្ទុនៃសំណួរនេះត្រូវបានគុណនឹង ២ ភ្លាមៗ!',
      descEn: 'Points for this round are multiplied by 2!',
      icon: '🎁',
      type: 'bonus',
      apply(engine, team) {
        team.score += 10;
        return { delta: +10, message: '+10 Bonus Points (x2 Double!)' };
      }
    },
    {
      id: 'GO_FIRST',
      titleKm: 'ហោះទៅលេខ១! (Warp to 1st Place)',
      titleEn: 'Warp to 1st Place!',
      descKm: 'អស្ចារ្យណាស់! អ្នកបានឡើងទៅឈរនៅចំណាត់ថ្នាក់លេខ ១ ដោយស្វ័យប្រវត្តិ!',
      descEn: 'Incredible! You teleport directly to #1 on the leaderboard!',
      icon: '🚀',
      type: 'super_bonus',
      apply(engine, team) {
        const highest = Math.max(...engine.state.participants.map(p => p.score));
        if (team.score >= highest) {
          team.score += 20;
          return { delta: +20, message: 'Already 1st! Awarded +20 Champion Points!' };
        } else {
          const delta = (highest - team.score) + 5;
          team.score = highest + 5;
          return { delta, message: `Surpassed 1st place with +${delta} points!` };
        }
      }
    },
    {
      id: 'GO_LAST',
      titleKm: 'ធ្លាក់ទៅលេខចុងក្រោយ! (Oops, Drop to Last)',
      titleEn: 'Drop to Last Place!',
      descKm: 'អូយ! ធ្លាក់ទៅចំណាត់ថ្នាក់ចុងក្រោយបង្អស់ (លើកលែងតែមានខែលការពារ)',
      descEn: 'Oops! Dropping to the bottom rank unless protected by a shield!',
      icon: '🕳️',
      type: 'penalty',
      apply(engine, team) {
        if (team.shields > 0) {
          team.shields--;
          return { blocked: true, message: '🛡️ Shield Deflected the Drop Penalty!' };
        }
        const lowest = Math.min(...engine.state.participants.map(p => p.score));
        const delta = Math.max(0, team.score - lowest + 5);
        team.score = Math.max(0, lowest - 5);
        return { delta: -delta, message: `Dropped score to ${team.score}!` };
      }
    },
    {
      id: 'STEAL_10',
      titleKm: 'ឆក់យក ១០ ពិន្ទុ! (Steal 10 Points)',
      titleEn: 'Steal 10 Points!',
      descKm: 'ឆក់យក ១០ ពិន្ទុពីដៃគូប្រកួតដែលឈានមុខ!',
      descEn: 'Steals 10 points from the highest ranked competitor!',
      icon: '🥷',
      type: 'attack',
      apply(engine, team) {
        const rivals = engine.state.participants.filter(p => p.id !== team.id);
        if (rivals.length === 0) {
          team.score += 10;
          return { delta: +10, message: '+10 Solo Bonus Points!' };
        }
        rivals.sort((a, b) => b.score - a.score);
        const target = rivals[0];
        if (target.shields > 0) {
          target.shields--;
          return { blocked: true, message: `🛡️ ${target.name}'s shield blocked your steal attempt!` };
        }
        const stealAmount = Math.min(10, Math.max(target.score, 0));
        target.score = Math.max(0, target.score - stealAmount);
        team.score += stealAmount;
        return { delta: +stealAmount, message: `Stole ${stealAmount} pts from ${target.name}!` };
      }
    },
    {
      id: 'STEAL_20',
      titleKm: 'ឆក់យក ២០ ពិន្ទុ! (Big Steal 20 Points)',
      titleEn: 'Mega Steal 20 Points!',
      descKm: 'ឆក់យក ២០ ពិន្ទុពេញពីក្រុមគូប្រជែង!',
      descEn: 'Steals 20 points from the rival in 1st place!',
      icon: '👑',
      type: 'attack',
      apply(engine, team) {
        const rivals = engine.state.participants.filter(p => p.id !== team.id);
        if (rivals.length === 0) {
          team.score += 20;
          return { delta: +20, message: '+20 Solo Super Bonus!' };
        }
        rivals.sort((a, b) => b.score - a.score);
        const target = rivals[0];
        if (target.shields > 0) {
          target.shields--;
          return { blocked: true, message: `🛡️ ${target.name}'s shield defended against 20-point steal!` };
        }
        const stealAmount = Math.min(20, Math.max(target.score, 0));
        target.score = Math.max(0, target.score - stealAmount);
        team.score += stealAmount;
        return { delta: +stealAmount, message: `Mega Stole ${stealAmount} pts from ${target.name}!` };
      }
    },
    {
      id: 'LIGHTNING',
      titleKm: 'រន្ទះបាញ់! (Lightning Strike)',
      titleEn: 'Lightning Strike -10!',
      descKm: 'រន្ទះបាញ់ធ្វើឱ្យគូប្រជែងឈានមុខបាត់បង់ ១០ ពិន្ទុ!',
      descEn: 'A sudden lightning strike zaps 10 points from a rival!',
      icon: '⚡',
      type: 'attack',
      apply(engine, team) {
        const rivals = engine.state.participants.filter(p => p.id !== team.id);
        if (rivals.length === 0) return { delta: 0, message: 'Thunder roars across the arena!' };
        rivals.sort((a, b) => b.score - a.score);
        const target = rivals[0];
        if (target.shields > 0) {
          target.shields--;
          return { blocked: true, message: `🛡️ ${target.name}'s shield absorbed the lightning strike!` };
        }
        target.score = Math.max(0, target.score - 10);
        return { message: `⚡ Lightning struck ${target.name} for -10 points!` };
      }
    },
    {
      id: 'SHIELD',
      titleKm: 'ទទួលបានខែលការពារ! (Shield Defense)',
      titleEn: 'Shield Acquired!',
      descKm: 'ទទួលបានខែលការពារ ១ គ្រាប់ សម្រាប់ទប់ទល់នឹងការឆក់ពិន្ទុ ឬទណ្ឌកម្ម!',
      descEn: 'Gain 1 defensive shield to automatically block the next punishment or steal!',
      icon: '🛡️',
      type: 'defense',
      apply(engine, team) {
        team.shields = Math.min(2, team.shields + 1);
        return { message: `🛡️ Active Shields: ${team.shields}/2` };
      }
    },
    {
      id: 'SWAP_SCORES',
      titleKm: 'ប្តូរពិន្ទុ! (Swap Scores)',
      titleEn: 'Score Swap!',
      descKm: 'ប្តូរពិន្ទុសរុបជាមួយគូប្រជែងដែលឈានមុខគេ!',
      descEn: 'Swap total scores with the highest rival on the board!',
      icon: '🔄',
      type: 'super_bonus',
      apply(engine, team) {
        const rivals = engine.state.participants.filter(p => p.id !== team.id);
        if (rivals.length === 0) {
          team.score += 15;
          return { delta: +15, message: '+15 Solo Swap Bonus!' };
        }
        rivals.sort((a, b) => b.score - a.score);
        const target = rivals[0];
        if (target.shields > 0) {
          target.shields--;
          return { blocked: true, message: `🛡️ ${target.name}'s shield deflected the score swap!` };
        }
        if (target.score > team.score) {
          const temp = team.score;
          team.score = target.score;
          target.score = temp;
          return { message: `Swapped scores with ${target.name}! You now have ${team.score} pts!` };
        } else {
          team.score += 10;
          return { delta: +10, message: 'You already lead! Received +10 bonus pts!' };
        }
      }
    },
    {
      id: 'SURPRISE_GIFT',
      titleKm: 'ប្រអប់កាដូភ្ញាក់ផ្អើល! (Mystery Gift Box)',
      titleEn: 'Lucky Mystery Gift!',
      descKm: 'អបអរសាទរ! អ្នកបើកបានប្រអប់កាដូមាស ទទួលបាន +១៥ ពិន្ទុ!',
      descEn: 'Lucky roll! Opened a golden gift box for +15 points!',
      icon: '🍀',
      type: 'bonus',
      apply(engine, team) {
        team.score += 15;
        return { delta: +15, message: '+15 Lucky Gift Points!' };
      }
    },
    {
      id: 'RAIN_OF_COINS',
      titleKm: 'ភ្លៀងធ្លាក់កាក់! (Rain of Coins)',
      titleEn: 'Rain of Gold Coins!',
      descKm: 'គ្រប់ក្រុមទាំងអស់ទទួលបាន +៥ ពិន្ទុ ហើយអ្នកទទួលបាន +១៥ ពិន្ទុ!',
      descEn: 'Every participant gets +5 points, and you get +15 points!',
      icon: '🪙',
      type: 'bonus',
      apply(engine, team) {
        engine.state.participants.forEach(p => {
          if (p.id === team.id) {
            p.score += 15;
          } else {
            p.score += 5;
          }
        });
        return { delta: +15, message: `+15 for ${team.name}, +5 for all others!` };
      }
    }
  ];

  // Celebratory Memes & Badges Pool for Winners Podium
  const CELEBRATION_MEMES = [
    {
      titleKm: '🏆 កំពូលជើងឯកភាសាអង់គ្លេស',
      titleEn: 'Grand Champion Trophy',
      emoji: '🥇',
      badge: 'Master Mind',
      memeText: '«ភាពឆ្លាតវៃ + ការខិតខំប្រឹងប្រែង = ជ័យជម្នះដ៏ត្រចះត្រចង់!»'
    },
    {
      titleKm: '🦁 ស្មារតីតស៊ូខ្លាំងក្លា',
      titleEn: 'Courage & Lion Spirit',
      emoji: '🦁',
      badge: 'Unstoppable',
      memeText: '«ស្មារតីក្រុមរឹងមាំ ប្រៀបបាននឹងសត្វតោដែលគ្មានថ្ងៃចុះចាញ់!»'
    },
    {
      titleKm: '🚀 ល្បឿនលឿន និងភាពសុក្រឹត',
      titleEn: 'Cosmic Speed & Accuracy',
      emoji: '🚀',
      badge: 'Galactic Rank',
      memeText: '«ឆ្លើយបានត្រឹមត្រូវ និងរហ័ស ដូចជាគ្រាប់រ៉ុក្កែតហោះទៅកាន់ផ្កាយ!»'
    },
    {
      titleKm: '🧠 ខួរក្បាលមហាសាល (Big Brain)',
      titleEn: 'Big Brain Energy',
      emoji: '🧠',
      badge: '100% IQ',
      memeText: '«វេយ្យាករណ៍ និងវាក្យសព្ទ គឺស្ថិតក្នុងកណ្តាប់ដៃរបស់អ្នក!»'
    }
  ];

  // Core Engine Controller
  const CompetitionEngine = {
    state: {
      isActive: false,
      mode: 'team', // 'individual' | 'pair' | 'team' | 'class'
      participants: [],
      currentTurnIndex: 0,
      mysteryEnabled: true,
      mysteryFrequency: 0.35, // 35% chance on correct answer
      totalQuestionsAnswered: 0,
      roundCount: 0,
      topicTitle: 'English Assessment',
      history: []
    },

    init() {
      this.injectStyles();
      this.attachGlobalLaunchers();
      this.createHudContainer();
    },

    injectStyles() {
      if (document.getElementById('arena-competition-styles')) return;
      const style = document.createElement('style');
      style.id = 'arena-competition-styles';
      style.textContent = `
        /* ==========================================================================
           UNIVERSAL COMPETITION ARENA STYLES (competition-engine.js)
           Mobile Responsive (iOS / Android) & Touch Friendly
           ========================================================================== */
        :root {
          --arena-hud-bg: rgba(15, 23, 42, 0.94);
          --arena-card-bg: #1e293b;
          --arena-gold: #F59E0B;
          --arena-silver: #94A3B8;
          --arena-bronze: #B45309;
        }

        /* 1. Floating Arena HUD Dock */
        .arena-hud-dock {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: var(--arena-hud-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 2px solid rgba(245, 158, 11, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
          padding: 8px 14px;
          display: none;
          transition: all 0.3s ease;
        }

        .arena-hud-dock.active {
          display: block;
          animation: arenaSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes arenaSlideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .arena-hud-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .arena-turn-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.08);
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .arena-turn-pulse {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
          animation: arenaPulse 1.5s infinite;
        }

        @keyframes arenaPulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }

        .arena-turn-text {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .arena-turn-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 800;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .arena-scoreboard-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding: 4px 2px;
          max-width: 60%;
          scrollbar-width: none;
        }
        .arena-scoreboard-scroll::-webkit-scrollbar { display: none; }

        .arena-score-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(30, 41, 59, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 5px 12px;
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .arena-score-chip.is-turn {
          border-color: #F59E0B;
          box-shadow: 0 0 14px rgba(245, 158, 11, 0.5);
          transform: scale(1.05);
          background: rgba(245, 158, 11, 0.15);
        }

        .arena-chip-score {
          background: rgba(255, 255, 255, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 800;
          color: #FBBF24;
        }

        .arena-hud-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .arena-hud-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          touch-action: manipulation;
          min-height: 38px;
        }

        .arena-hud-btn:hover, .arena-hud-btn:active {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .arena-hud-btn.btn-finish-arena {
          background: linear-gradient(135deg, #F59E0B, #D97706);
          border-color: #F59E0B;
          color: #111827;
        }

        /* 2. Mystery Box Surprise Modal Overlay */
        .arena-mystery-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1000000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .arena-mystery-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        .arena-mystery-card {
          background: linear-gradient(145deg, #1E293B, #0F172A);
          border: 3px solid #F59E0B;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 158, 11, 0.35);
          border-radius: 24px;
          max-width: 440px;
          width: 100%;
          padding: 28px 24px;
          text-align: center;
          color: #ffffff;
          transform: scale(0.85) rotate(-2deg);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .arena-mystery-overlay.active .arena-mystery-card {
          transform: scale(1) rotate(0deg);
        }

        .arena-mystery-icon {
          font-size: 4.5rem;
          display: inline-block;
          margin-bottom: 12px;
          animation: arenaBounce 0.8s infinite alternate ease-in-out;
        }

        @keyframes arenaBounce {
          from { transform: translateY(0) scale(1); }
          to { transform: translateY(-10px) scale(1.1); }
        }

        .arena-mystery-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #FBBF24;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .arena-mystery-target {
          font-size: 0.95rem;
          font-weight: 700;
          color: #94A3B8;
          margin-bottom: 12px;
        }

        .arena-mystery-desc {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #E2E8F0;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          border-radius: 14px;
          margin-bottom: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .arena-mystery-btn-continue {
          background: linear-gradient(135deg, #10B981, #059669);
          color: #ffffff;
          border: none;
          padding: 12px 28px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
          transition: all 0.2s;
          width: 100%;
          min-height: 48px;
        }

        /* 3. Top 3 Performers Grand Podium Modal */
        .arena-podium-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .arena-podium-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        .arena-podium-card {
          background: linear-gradient(160deg, #1e293b 0%, #0f172a 100%);
          border: 2px solid rgba(245, 158, 11, 0.5);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(245, 158, 11, 0.25);
          border-radius: 28px;
          max-width: 680px;
          width: 100%;
          padding: 32px 24px;
          color: #ffffff;
          position: relative;
          max-height: 92vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .arena-podium-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .arena-podium-crown {
          font-size: 3.5rem;
          display: inline-block;
          animation: arenaCrown 2s infinite ease-in-out;
        }

        @keyframes arenaCrown {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(4deg); }
        }

        .arena-podium-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #FBBF24;
          letter-spacing: -0.01em;
          margin: 6px 0;
        }

        .arena-podium-sub {
          font-size: 0.95rem;
          color: #94A3B8;
        }

        /* 3D Gold/Silver/Bronze Podium Display */
        .arena-podium-stage {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 12px;
          margin: 28px 0 20px 0;
          min-height: 220px;
          padding: 0 10px;
        }

        .podium-pillar {
          flex: 1;
          max-width: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .podium-performer {
          margin-bottom: 10px;
          width: 100%;
        }

        .podium-avatar-ring {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          margin: 0 auto 6px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          position: relative;
        }

        .podium-rank-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 900;
          color: #111827;
        }

        .podium-name {
          font-size: 0.88rem;
          font-weight: 800;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .podium-score {
          font-size: 0.82rem;
          font-weight: 700;
          color: #FBBF24;
        }

        .podium-block {
          width: 100%;
          border-radius: 16px 16px 6px 6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          box-shadow: inset 0 2px 6px rgba(255, 255, 255, 0.3), 0 10px 25px rgba(0, 0, 0, 0.4);
          transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 1st Place Gold Pillar */
        .pillar-1st .podium-avatar-ring {
          border: 3px solid #F59E0B;
          background: rgba(245, 158, 11, 0.2);
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
        }
        .pillar-1st .podium-rank-badge {
          background: #F59E0B;
        }
        .pillar-1st .podium-block {
          height: 140px;
          background: linear-gradient(180deg, #F59E0B 0%, #B45309 100%);
          color: #78350F;
          border-top: 3px solid #FDE68A;
        }

        /* 2nd Place Silver Pillar */
        .pillar-2nd .podium-avatar-ring {
          border: 3px solid #94A3B8;
          background: rgba(148, 163, 184, 0.2);
        }
        .pillar-2nd .podium-rank-badge {
          background: #94A3B8;
        }
        .pillar-2nd .podium-block {
          height: 105px;
          background: linear-gradient(180deg, #94A3B8 0%, #475569 100%);
          color: #0F172A;
          border-top: 3px solid #E2E8F0;
        }

        /* 3rd Place Bronze Pillar */
        .pillar-3rd .podium-avatar-ring {
          border: 3px solid #CD7F32;
          background: rgba(205, 127, 50, 0.2);
        }
        .pillar-3rd .podium-rank-badge {
          background: #CD7F32;
          color: #ffffff;
        }
        .pillar-3rd .podium-block {
          height: 80px;
          background: linear-gradient(180deg, #D97706 0%, #78350F 100%);
          color: #451A03;
          border-top: 3px solid #FCD34D;
        }

        .podium-roman-num {
          font-size: 1.8rem;
          opacity: 0.9;
          font-family: serif;
        }

        /* Celebration Meme / Fun Sticker Banner */
        .arena-meme-banner {
          background: rgba(255, 255, 255, 0.05);
          border: 1px dashed rgba(245, 158, 11, 0.4);
          border-radius: 16px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .arena-meme-emoji {
          font-size: 2.2rem;
          flex-shrink: 0;
        }

        .arena-meme-text {
          font-size: 0.88rem;
          color: #E2E8F0;
          line-height: 1.4;
        }

        .arena-meme-tag {
          font-weight: 800;
          color: #FBBF24;
          display: block;
          margin-bottom: 2px;
        }

        /* Full Standings Table */
        .arena-standings-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .arena-standings-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.88rem;
        }
        .arena-standings-row:last-child { border-bottom: none; }

        .arena-row-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .arena-row-rank {
          font-weight: 800;
          width: 22px;
          color: #94A3B8;
        }

        .arena-row-name {
          font-weight: 700;
          color: #ffffff;
        }

        .arena-row-score {
          font-weight: 800;
          color: #FBBF24;
        }

        /* Podium Export & Action Buttons */
        .arena-podium-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .arena-action-btn {
          flex: 1;
          min-width: 140px;
          min-height: 46px;
          border-radius: 12px;
          border: none;
          font-weight: 800;
          font-size: 0.88rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
          touch-action: manipulation;
        }

        .btn-export-excel-arena {
          background: linear-gradient(135deg, #059669, #047857);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(5, 150, 105, 0.35);
        }

        .btn-copy-sheets-arena {
          background: linear-gradient(135deg, #0284C7, #0369A1);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35);
        }

        .btn-play-again-arena {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* 4. Arena Setup Modal */
        .arena-setup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .arena-setup-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        .arena-setup-card {
          background: #1e293b;
          border: 2px solid #F59E0B;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          border-radius: 24px;
          max-width: 520px;
          width: 100%;
          padding: 26px 22px;
          color: #ffffff;
          max-height: 90vh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .arena-mode-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin: 18px 0;
        }

        .arena-mode-opt {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          padding: 14px 10px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          touch-action: manipulation;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .arena-mode-opt.selected {
          border-color: #F59E0B;
          background: rgba(245, 158, 11, 0.18);
          box-shadow: 0 0 16px rgba(245, 158, 11, 0.3);
        }

        .arena-opt-icon { font-size: 1.8rem; margin-bottom: 4px; }
        .arena-opt-title { font-weight: 800; font-size: 0.92rem; color: #ffffff; }
        .arena-opt-sub { font-size: 0.75rem; color: #94A3B8; }

        /* Universal Arena Trigger Button (In Page) */
        .btn-launch-arena-mode {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: #111827;
          border: 1px solid #FCD34D;
          font-weight: 800;
          font-size: 0.88rem;
          padding: 8px 16px;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
          transition: all 0.2s;
          touch-action: manipulation;
          min-height: 42px;
        }

        .btn-launch-arena-mode:hover, .btn-launch-arena-mode:active {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);
        }

        /* Mobile Adjustments (Android & iOS) */
        @media (max-width: 640px) {
          .arena-hud-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .arena-scoreboard-scroll {
            max-width: 100%;
          }
          .arena-podium-stage {
            min-height: 180px;
            gap: 6px;
          }
          .podium-avatar-ring {
            width: 46px;
            height: 46px;
            font-size: 1.6rem;
          }
          .pillar-1st .podium-block { height: 110px; }
          .pillar-2nd .podium-block { height: 85px; }
          .pillar-3rd .podium-block { height: 65px; }
          .arena-mode-grid {
            grid-template-columns: 1fr;
          }
          .arena-podium-card {
            padding: 22px 14px;
          }
        }
      `;
      document.head.appendChild(style);
    },

    createHudContainer() {
      if (document.getElementById('arena-hud-dock')) return;
      const hud = document.createElement('div');
      hud.id = 'arena-hud-dock';
      hud.className = 'arena-hud-dock';
      hud.innerHTML = `
        <div class="arena-hud-inner">
          <div class="arena-turn-indicator">
            <span class="arena-turn-pulse"></span>
            <span class="arena-turn-text">
              <span>👉 វេន៖</span>
              <span id="arena-active-team-badge" class="arena-turn-badge" style="background:#EF4444;">🦁 Red Lions</span>
            </span>
          </div>

          <div class="arena-scoreboard-scroll" id="arena-scoreboard-list">
            <!-- Chips rendered dynamically -->
          </div>

          <div class="arena-hud-actions">
            <button type="button" class="arena-hud-btn" id="arena-btn-mystery-manual" title="បើកប្រអប់អាថ៌កំបាំង">
              <span>🎁 ប្រអប់កាដូ</span>
            </button>
            <button type="button" class="arena-hud-btn btn-finish-arena" id="arena-btn-finish" title="បញ្ចប់ និងបង្ហាញចំណាត់ថ្នាក់">
              <span>🏁 បញ្ចប់ (Podium)</span>
            </button>
          </div>
        </div>
      `;
      document.body.prepend(hud);

      // Event listeners
      document.getElementById('arena-btn-finish').addEventListener('click', () => {
        this.showWinnersPodium();
      });

      document.getElementById('arena-btn-mystery-manual').addEventListener('click', () => {
        this.triggerMysteryEvent(this.getActiveParticipant(), true);
      });
    },

    attachGlobalLaunchers() {
      // Look for any element with class .btn-trigger-competition or data-arena-trigger
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-launch-arena-mode, [data-arena-trigger]');
        if (btn) {
          e.preventDefault();
          this.openSetupModal();
        }
      });
    },

    openSetupModal(options = {}) {
      let modal = document.getElementById('arena-setup-overlay');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'arena-setup-overlay';
        modal.className = 'arena-setup-overlay';
        document.body.appendChild(modal);
      }

      modal.innerHTML = `
        <div class="arena-setup-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <div style="font-size:1.35rem; font-weight:800; color:#FBBF24; display:flex; align-items:center; gap:8px;">
              <span>⚔️ របៀបប្រកួតប្រជែង (Arena Mode)</span>
            </div>
            <button type="button" id="arena-setup-close" style="background:none; border:none; color:#94A3B8; font-size:1.6rem; cursor:pointer;">&times;</button>
          </div>

          <p style="font-size:0.9rem; color:#CBD5E1; line-height:1.5;">
            ជ្រើសរើសទម្រង់ប្រកួតសម្រាប់តេស្ត សំណួរ ឬហ្គេម ជាមួយប្រព័ន្ធកាដូភ្ញាក់ផ្អើល និងទណ្ឌកម្ម (Bamboozle Style) បង្ហាញលទ្ធផលភ្លាមៗ និងវេទិកាជើងឯក Top 3!
          </p>

          <div class="arena-mode-grid">
            <div class="arena-mode-opt selected" data-mode="team">
              <span class="arena-opt-icon">🏆</span>
              <span class="arena-opt-title">ប្រកួតជាក្រុម (Team Battle)</span>
              <span class="arena-opt-sub">២ ទៅ ៤ ក្រុម (Lions, Eagles...)</span>
            </div>
            <div class="arena-mode-opt" data-mode="pair">
              <span class="arena-opt-icon">👥</span>
              <span class="arena-opt-title">ប្រកួតជាគូ 1v1 (Pair Duel)</span>
              <span class="arena-opt-sub">បេក្ខជនទី ១ ទល់ ទី ២</span>
            </div>
            <div class="arena-mode-opt" data-mode="class">
              <span class="arena-opt-icon">🏫</span>
              <span class="arena-opt-title">ប្រកួតទាំងថ្នាក់ (Whole Class)</span>
              <span class="arena-opt-sub">សិស្សទាំងអស់ក្នុងថ្នាក់</span>
            </div>
            <div class="arena-mode-opt" data-mode="individual">
              <span class="arena-opt-icon">👤</span>
              <span class="arena-opt-title">ម្នាក់ឯង (Solo Challenger)</span>
              <span class="arena-opt-sub">យកពិន្ទុផ្ទាល់ខ្លួនខ្ពស់បំផុត</span>
            </div>
          </div>

          <!-- Mystery Box Toggle -->
          <div style="background:rgba(255,255,255,0.06); padding:12px 16px; border-radius:14px; margin-bottom:18px; display:flex; align-items:center; justify-content:space-between;">
            <div>
              <div style="font-weight:700; font-size:0.92rem; color:#ffffff;">🎁 ប្រអប់កាដូ & ទណ្ឌកម្ម (Mystery Events)</div>
              <div style="font-size:0.78rem; color:#94A3B8;">ទ្វេដងពិន្ទុ, ហោះទៅលេខ១, ធ្លាក់ទៅចុងក្រោយ, ឆក់ពិន្ទុ, ខែល...</div>
            </div>
            <input type="checkbox" id="arena-setup-mystery" checked style="width:20px; height:20px; cursor:pointer;">
          </div>

          <!-- Student Registration Warning / Sync -->
          <div style="font-size:0.82rem; color:#94A3B8; margin-bottom:16px; display:flex; align-items:center; gap:6px;">
            <span>ℹ️ លទ្ធផលនៃការប្រកួតអាចទាញយកជា Excel (.csv) ឬចម្លងចូល Google Sheets បាន។</span>
          </div>

          <div style="display:flex; gap:10px;">
            <button type="button" id="arena-btn-start-launch" style="flex:1; background:linear-gradient(135deg, #F59E0B, #D97706); color:#111827; border:none; padding:12px 20px; border-radius:12px; font-weight:800; font-size:1rem; cursor:pointer; min-height:48px;">
              🚀 ចាប់ផ្តើមការប្រកួតឥឡូវនេះ
            </button>
          </div>
        </div>
      `;

      modal.classList.add('active');

      // Mode Selection handling
      let selectedMode = 'team';
      modal.querySelectorAll('.arena-mode-opt').forEach(opt => {
        opt.addEventListener('click', () => {
          modal.querySelectorAll('.arena-mode-opt').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          selectedMode = opt.getAttribute('data-mode');
        });
      });

      // Close handler
      modal.querySelector('#arena-setup-close').addEventListener('click', () => {
        modal.classList.remove('active');
      });

      // Launch handler
      modal.querySelector('#arena-btn-start-launch').addEventListener('click', () => {
        const mystery = modal.querySelector('#arena-setup-mystery').checked;
        modal.classList.remove('active');
        this.startCompetition(selectedMode, { mysteryEnabled: mystery });
        if (typeof options.onStart === 'function') options.onStart();
      });
    },

    startCompetition(mode = 'team', config = {}) {
      this.state.isActive = true;
      this.state.mode = mode;
      this.state.mysteryEnabled = config.mysteryEnabled !== false;
      this.state.currentTurnIndex = 0;
      this.state.roundCount = 0;
      this.state.history = [];

      // Setup participants
      if (mode === 'pair') {
        this.state.participants = JSON.parse(JSON.stringify(DEFAULT_PAIRS));
      } else if (mode === 'individual') {
        const student = window.StudentAssessment ? window.StudentAssessment.getCurrentStudent() : null;
        const name = student && student.name ? student.name : 'Challenger';
        this.state.participants = [
          { id: 'solo_player', name: name, nameKm: name, avatar: '🌟', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #047857)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 }
        ];
      } else if (mode === 'class') {
        // Whole class mode: 6 study groups
        this.state.participants = [
          { id: 'c_grp1', name: 'Group 1 (Alpha)', nameKm: 'ក្រុមទី ១', avatar: '🦁', color: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
          { id: 'c_grp2', name: 'Group 2 (Beta)', nameKm: 'ក្រុមទី ២', avatar: '🦅', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
          { id: 'c_grp3', name: 'Group 3 (Gamma)', nameKm: 'ក្រុមទី ៣', avatar: '🐉', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #047857)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
          { id: 'c_grp4', name: 'Group 4 (Delta)', nameKm: 'ក្រុមទី ៤', avatar: '🐯', color: '#F59E0B', gradient: 'linear-gradient(135deg, #F59E0B, #B45309)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
          { id: 'c_grp5', name: 'Group 5 (Omega)', nameKm: 'ក្រុមទី ៥', avatar: '🚀', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 },
          { id: 'c_grp6', name: 'Group 6 (Phoenix)', nameKm: 'ក្រុមទី ៦', avatar: '🔥', color: '#EC4899', gradient: 'linear-gradient(135deg, #EC4899, #BE185D)', score: 0, correct: 0, wrong: 0, streak: 0, shields: 0 }
        ];
      } else {
        // Standard 4 Teams
        this.state.participants = JSON.parse(JSON.stringify(DEFAULT_TEAMS));
      }

      // Show HUD
      const dock = document.getElementById('arena-hud-dock');
      if (dock) dock.classList.add('active');

      this.updateHud();
      ArenaAudio.playFanfare();

      if (window.StudentAssessment) {
        window.StudentAssessment.showToast(`⚔️ បានបើករបៀបប្រកួតប្រជែង (${this.getModeNameKm()})!`, 'success');
      }
    },

    getActiveParticipant() {
      if (!this.state.participants.length) return null;
      return this.state.participants[this.state.currentTurnIndex % this.state.participants.length];
    },

    advanceTurn() {
      if (this.state.participants.length > 1) {
        this.state.currentTurnIndex = (this.state.currentTurnIndex + 1) % this.state.participants.length;
      }
      this.state.roundCount++;
      this.updateHud();
    },

    updateHud() {
      const active = this.getActiveParticipant();
      if (!active) return;

      const badge = document.getElementById('arena-active-team-badge');
      if (badge) {
        badge.textContent = `${active.avatar} ${active.name}`;
        badge.style.background = active.color;
      }

      const list = document.getElementById('arena-scoreboard-list');
      if (list) {
        // Sort display by score descending
        const sorted = [...this.state.participants].sort((a, b) => b.score - a.score);
        list.innerHTML = sorted.map((p, idx) => {
          const isTurn = p.id === active.id;
          return `
            <div class="arena-score-chip ${isTurn ? 'is-turn' : ''}" style="${isTurn ? `border-color:${p.color};` : ''}">
              <span>${idx === 0 ? '👑' : `${idx + 1}.`} ${p.avatar} ${p.name}</span>
              <span class="arena-chip-score">${p.score} pts</span>
              ${p.shields > 0 ? `<span title="Active Shields">🛡️${p.shields}</span>` : ''}
              ${p.streak >= 2 ? `<span title="Streak">🔥${p.streak}</span>` : ''}
            </div>
          `;
        }).join('');
      }
    },

    // Called when a question or game round is answered
    onAnswerSubmitted(isCorrect, basePoints = 10, meta = {}) {
      if (!this.state.isActive) return;

      const team = this.getActiveParticipant();
      if (!team) return;

      let awardedPoints = isCorrect ? basePoints : 0;
      let surpriseTriggered = false;

      if (isCorrect) {
        team.correct++;
        team.streak++;
        team.score += awardedPoints;
        ArenaAudio.playChime();

        // Check if mystery event triggers
        if (this.state.mysteryEnabled && Math.random() < this.state.mysteryFrequency) {
          surpriseTriggered = true;
          setTimeout(() => {
            this.triggerMysteryEvent(team);
          }, 300);
        }
      } else {
        team.wrong++;
        team.streak = 0;
        ArenaAudio.playBuzzer();
      }

      this.state.history.push({
        teamId: team.id,
        teamName: team.name,
        isCorrect,
        points: awardedPoints,
        questionInfo: meta.question || 'Item',
        timestamp: new Date().toISOString()
      });

      this.updateHud();

      // If no mystery event was shown, advance turn immediately
      if (!surpriseTriggered) {
        this.advanceTurn();
      }
    },

    triggerMysteryEvent(team, isManual = false) {
      if (!team) team = this.getActiveParticipant();
      const event = MYSTERY_EVENTS[Math.floor(Math.random() * MYSTERY_EVENTS.length)];
      
      // Sound FX based on event type
      if (event.type === 'bonus' || event.type === 'super_bonus') {
        ArenaAudio.playFanfare();
      } else if (event.type === 'defense') {
        ArenaAudio.playShield();
      } else if (event.id === 'LIGHTNING') {
        ArenaAudio.playLightning();
      } else {
        ArenaAudio.playSurprise();
      }

      const result = event.apply(this, team);
      this.updateHud();

      // Show mystery popup
      let overlay = document.getElementById('arena-mystery-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'arena-mystery-overlay';
        overlay.className = 'arena-mystery-overlay';
        document.body.appendChild(overlay);
      }

      overlay.innerHTML = `
        <div class="arena-mystery-card">
          <div class="arena-mystery-icon">${event.icon}</div>
          <div class="arena-mystery-title">${event.titleKm}</div>
          <div class="arena-mystery-target">សម្រាប់៖ <strong style="color:${team.color};">${team.avatar} ${team.name}</strong></div>
          <div class="arena-mystery-desc">
            <div>${event.descKm}</div>
            <div style="font-size:0.85rem; color:#94A3B8; margin-top:4px;">${event.descEn}</div>
            ${result.message ? `<div style="font-weight:800; color:#10B981; margin-top:8px;">✨ ${result.message}</div>` : ''}
          </div>
          <button type="button" class="arena-mystery-btn-continue" id="arena-btn-mystery-continue">
            បន្តការប្រកួត (Continue)
          </button>
        </div>
      `;

      overlay.classList.add('active');

      const handleClose = () => {
        overlay.classList.remove('active');
        if (!isManual) this.advanceTurn();
      };

      overlay.querySelector('#arena-btn-mystery-continue').onclick = handleClose;
    },

    showWinnersPodium() {
      ArenaAudio.playFanfare();
      Confetti.start(6000);

      // Rank participants by score descending
      const ranked = [...this.state.participants].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.correct - a.correct;
      });

      const first = ranked[0] || { name: 'Champion', avatar: '🥇', score: 0 };
      const second = ranked[1] || { name: 'Runner Up', avatar: '🥈', score: 0 };
      const third = ranked[2] || { name: '3rd Place', avatar: '🥉', score: 0 };

      const randomMeme = CELEBRATION_MEMES[Math.floor(Math.random() * CELEBRATION_MEMES.length)];

      let overlay = document.getElementById('arena-podium-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'arena-podium-overlay';
        overlay.className = 'arena-podium-overlay';
        document.body.appendChild(overlay);
      }

      overlay.innerHTML = `
        <div class="arena-podium-card">
          <div class="arena-podium-header">
            <div class="arena-podium-crown">👑</div>
            <h2 class="arena-podium-title">🎉 ជើងឯកការប្រកួត (Top 3 Arena Champions)</h2>
            <div class="arena-podium-sub">សូមអបអរសាទរបេក្ខជន និងក្រុមដែលទទួលបានជ័យលាភីឆ្នើមបំផុត!</div>
          </div>

          <!-- 3D Gold/Silver/Bronze Podium -->
          <div class="arena-podium-stage">
            <!-- 2nd Place Silver -->
            <div class="podium-pillar pillar-2nd">
              <div class="podium-performer">
                <div class="podium-avatar-ring">
                  <span>${second.avatar}</span>
                  <span class="podium-rank-badge">2</span>
                </div>
                <div class="podium-name">${second.name}</div>
                <div class="podium-score">${second.score} pts</div>
              </div>
              <div class="podium-block">
                <span class="podium-roman-num">II</span>
                <span style="font-size:0.75rem; font-weight:800;">SILVER 🥈</span>
              </div>
            </div>

            <!-- 1st Place Gold (Center & Highest) -->
            <div class="podium-pillar pillar-1st">
              <div class="podium-performer">
                <div class="podium-avatar-ring">
                  <span>${first.avatar}</span>
                  <span class="podium-rank-badge">1</span>
                </div>
                <div class="podium-name" style="font-size:1.05rem; color:#FBBF24;">${first.name}</div>
                <div class="podium-score" style="font-size:0.95rem;">${first.score} pts</div>
              </div>
              <div class="podium-block">
                <span class="podium-roman-num">I</span>
                <span style="font-size:0.82rem; font-weight:900;">GOLD 🥇</span>
              </div>
            </div>

            <!-- 3rd Place Bronze -->
            <div class="podium-pillar pillar-3rd">
              <div class="podium-performer">
                <div class="podium-avatar-ring">
                  <span>${third.avatar}</span>
                  <span class="podium-rank-badge">3</span>
                </div>
                <div class="podium-name">${third.name}</div>
                <div class="podium-score">${third.score} pts</div>
              </div>
              <div class="podium-block">
                <span class="podium-roman-num">III</span>
                <span style="font-size:0.72rem; font-weight:800;">BRONZE 🥉</span>
              </div>
            </div>
          </div>

          <!-- Meme / Surprise Banner -->
          <div class="arena-meme-banner">
            <span class="arena-meme-emoji">${randomMeme.emoji}</span>
            <div class="arena-meme-text">
              <span class="arena-meme-tag">${randomMeme.titleKm} • ${randomMeme.badge}</span>
              <span>${randomMeme.memeText}</span>
            </div>
          </div>

          <!-- Full Participants Standings -->
          <div class="arena-standings-box">
            <div style="padding:8px 16px; background:rgba(255,255,255,0.06); font-weight:800; font-size:0.85rem; color:#94A3B8;">
              តារាងលទ្ធផលរួម (Overall Rankings)
            </div>
            ${ranked.map((p, idx) => `
              <div class="arena-standings-row">
                <div class="arena-row-left">
                  <span class="arena-row-rank">${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}.`}</span>
                  <span class="arena-row-name">${p.avatar} ${p.name}</span>
                </div>
                <div style="display:flex; align-items:center; gap:12px;">
                  <span style="font-size:0.8rem; color:#94A3B8;">ត្រូវ៖ ${p.correct} | ខុស៖ ${p.wrong}</span>
                  <span class="arena-row-score">${p.score} pts</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Export & Action Buttons -->
          <div class="arena-podium-actions">
            <button type="button" class="arena-action-btn btn-export-excel-arena" id="arena-btn-export-excel">
              <span>📊 ទាញយក Excel (.csv)</span>
            </button>
            <button type="button" class="arena-action-btn btn-copy-sheets-arena" id="arena-btn-copy-sheets">
              <span>📋 ចម្លង Google Sheets</span>
            </button>
            <button type="button" class="arena-action-btn btn-play-again-arena" id="arena-btn-close-podium">
              <span>🔄 បិទ / លេងម្តងទៀត</span>
            </button>
          </div>
        </div>
      `;

      overlay.classList.add('active');

      // Export Handlers
      overlay.querySelector('#arena-btn-export-excel').onclick = () => {
        this.downloadArenaExcelCSV(ranked);
      };

      overlay.querySelector('#arena-btn-copy-sheets').onclick = () => {
        this.copyArenaForGoogleSheets(ranked);
      };

      overlay.querySelector('#arena-btn-close-podium').onclick = () => {
        overlay.classList.remove('active');
        Confetti.stop();
      };
    },

    downloadArenaExcelCSV(rankedList) {
      const rows = [
        ['Rank', 'Participant/Team', 'Score (pts)', 'Correct Answers', 'Wrong Answers', 'Mode', 'Date']
      ];

      const now = new Date().toLocaleString('en-US');
      rankedList.forEach((p, idx) => {
        rows.push([
          idx + 1,
          p.name,
          p.score,
          p.correct,
          p.wrong,
          this.state.mode,
          now
        ]);
      });

      const csvContent = '\uFEFF' + rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Arena_Competition_Scores_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      if (window.StudentAssessment) {
        window.StudentAssessment.showToast('📊 បានទាញយកតារាងពិន្ទុ Excel (.csv) ដោយជោគជ័យ!', 'success');
      }
    },

    copyArenaForGoogleSheets(rankedList) {
      const rows = [
        ['Rank', 'Participant/Team', 'Score (pts)', 'Correct Answers', 'Wrong Answers', 'Mode', 'Date']
      ];

      const now = new Date().toLocaleString('en-US');
      rankedList.forEach((p, idx) => {
        rows.push([
          idx + 1,
          p.name,
          p.score,
          p.correct,
          p.wrong,
          this.state.mode,
          now
        ]);
      });

      const tsvContent = rows.map(r => r.join('\t')).join('\n');
      navigator.clipboard.writeText(tsvContent).then(() => {
        if (window.StudentAssessment) {
          window.StudentAssessment.showToast('📋 បានចម្លងពិន្ទុសម្រាប់ Google Sheets! បើក Google Sheets រួចចុច Ctrl+V (Paste)', 'success');
        } else {
          alert('Copied to clipboard for Google Sheets!');
        }
      }).catch(() => {
        alert('Could not access clipboard.');
      });
    },

    getModeNameKm() {
      switch (this.state.mode) {
        case 'pair': return 'ប្រកួតជាគូ 1v1';
        case 'team': return 'ប្រកួតជាក្រុម';
        case 'class': return 'ប្រកួតទាំងថ្នាក់';
        default: return 'ម្នាក់ឯង';
      }
    }
  };

  // Expose to window
  window.CompetitionEngine = CompetitionEngine;
  window.QuizCompetition = CompetitionEngine; // Alias

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CompetitionEngine.init());
  } else {
    CompetitionEngine.init();
  }

})(window, document);
