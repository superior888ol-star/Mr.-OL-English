/**
 * ==========================================================================
 * HANGMAN - HIGH-STAKES EDUCATIONAL VOCABULARY COUNTDOWN GAME
 * Developer / High School Educator: Mr. Ouch Ol - Hun Sen Svay Thom High School
 * Features:
 *   - Modes: Solo (At Own Pace), In Pairs (1v1 Rivalry), Team Battle (QR Code & Link)
 *   - Score Per Letter: 1 point for every time guessed letter appears on board
 *   - The Streak Mechanic: Guess correct to keep turn; guess wrong passes turn to rivals
 *   - Solve for Bonus: Risk a full-word guess for a massive 5-point bonus!
 *   - High-Stakes Themes: The Melting Snowman, The Shark Plank, Rocket Blast-Off
 *   - Bilingual Khmer-English definitions, clue sentences, and Web Speech pronunciation
 * ==========================================================================
 */

(function() {
  'use strict';

  // ==========================================================================
  // 1. WEB AUDIO SYNTHESIZER
  // ==========================================================================
  class HMAudio {
    constructor() {
      this.ctx = null;
      this.muted = localStorage.getItem('hm_sound') === 'false';
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
      localStorage.setItem('hm_sound', (!this.muted).toString());
      return this.muted;
    }

    playClick() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    }

    playLetterHit(count = 1, streak = 0) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const baseFreq = 440 + Math.min(streak, 8) * 45;
      for (let i = 0; i < count; i++) {
        const delay = i * 0.08;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(baseFreq + (i * 70), this.ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.2);
      }
    }

    playLetterMiss() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.26);
    }

    playBonusSolve() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const delay = idx * 0.09;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.22, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + 0.45);
      });
    }

    playThemeSound(theme, stage) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;

      if (theme === 'snowman') {
        // Sizzle / drip sound
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800 - stage * 80, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.16);
      } else if (theme === 'shark') {
        // Wood creak / water splash
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140 + stage * 30, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(90, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.22);
      } else if (theme === 'rocket') {
        // High-tech countdown beep & thruster roar
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.13);
      }
    }
  }

  // ==========================================================================
  // 2. EDUCATIONAL HIGH SCHOOL VOCABULARY DATASET (Bilingual Khmer-English)
  // ==========================================================================
  const HANGMAN_WORDS = [
    // --- Grade 10 English Core ---
    { word: "ENVIRONMENT", cat: "grade10", pos: "noun", km: "បរិស្ថាន", clue: "The natural world where people, animals, and plants live together." },
    { word: "POLLUTION", cat: "grade10", pos: "noun", km: "ការបំពុល", clue: "Harmful substances or waste contaminating air, water, or soil." },
    { word: "VOLUNTEER", cat: "grade10", pos: "noun/verb", km: "អ្នកស្ម័គ្រចិត្ត", clue: "A person who freely offers to help the community without pay." },
    { word: "COMMUNITY", cat: "grade10", pos: "noun", km: "សហគមន៍", clue: "A group of people living in the same local area with shared interests." },
    { word: "TRADITION", cat: "grade10", pos: "noun", km: "ប្រពៃណី", clue: "Customs or beliefs passed down from generation to generation." },
    { word: "FESTIVAL", cat: "grade10", pos: "noun", km: "ពិធីបុណ្យ", clue: "A day or period of cultural celebration and feast." },
    { word: "ADVENTURE", cat: "grade10", pos: "noun", km: "ការផ្សងព្រេង", clue: "An unusual and exciting, typically hazardous, experience or activity." },
    { word: "EDUCATION", cat: "grade10", pos: "noun", km: "ការអប់រំ", clue: "The process of receiving or giving systematic instruction at school." },
    { word: "FRIENDSHIP", cat: "grade10", pos: "noun", km: "មិត្តភាព", clue: "A relationship between people who care for and trust each other." },
    { word: "HERITAGE", cat: "grade10", pos: "noun", km: "បេតិកភណ្ឌ", clue: "Valued objects and cultural qualities passed down from past history." },
    { word: "CELEBRATE", cat: "grade10", pos: "verb", km: "អបអរសាទរ", clue: "To acknowledge a significant happy day or event with public festivities." },
    { word: "DISCOVERY", cat: "grade10", pos: "noun", km: "ការរកឃើញ", clue: "The act or process of finding something for the first time." },
    { word: "PROTECTION", cat: "grade10", pos: "noun", km: "ការការពារ", clue: "Keeping someone or something safe from harm, damage, or danger." },
    { word: "HEALTHY", cat: "grade10", pos: "adjective", km: "ដែលមានសុខភាពល្អ", clue: "In a good physical condition, free from disease and active." },
    { word: "IMPROVEMENT", cat: "grade10", pos: "noun", km: "ការកែលម្អ", clue: "A change that makes something better than before." },

    // --- STEM & Academic English ---
    { word: "ALGORITHM", cat: "stem", pos: "noun", km: "ក្បួនដោះស្រាយ", clue: "A step-by-step set of rules or calculations to solve a problem." },
    { word: "ECOSYSTEM", cat: "stem", pos: "noun", km: "ប្រព័ន្ធអេកូឡូស៊ី", clue: "A biological community of interacting organisms and physical environment." },
    { word: "HYPOTHESIS", cat: "stem", pos: "noun", km: "សម្មតិកម្ម", clue: "A proposed explanation made as a starting point for further investigation." },
    { word: "BIODIVERSITY", cat: "stem", pos: "noun", km: "ជីវចម្រុះ", clue: "The variety of plant and animal life in a particular habitat." },
    { word: "ATMOSPHERE", cat: "stem", pos: "noun", km: "បរិយាកាសផែនដី", clue: "The envelope of gases surrounding the Earth or another planet." },
    { word: "PHOTOSYNTHESIS", cat: "stem", pos: "noun", km: "រស្មីសំយោគ", clue: "Process by which green plants use sunlight to synthesize nutrients." },
    { word: "ELECTRICITY", cat: "stem", pos: "noun", km: "អគ្គិសនី", clue: "A form of energy resulting from the existence of charged particles." },
    { word: "LABORATORY", cat: "stem", pos: "noun", km: "មន្ទីរពិសោធន៍", clue: "A room equipped for scientific research, experiments, or teaching." },
    { word: "SUSTAINABLE", cat: "stem", pos: "adjective", km: "ចីរភាព / និរន្តរភាព", clue: "Conserving an ecological balance by avoiding depletion of natural resources." },
    { word: "PHILOSOPHY", cat: "stem", pos: "noun", km: "ទស្សនវិជ្ជា", clue: "The study of the fundamental nature of knowledge, reality, and existence." },

    // --- ICT & Computer Science ---
    { word: "COMPUTER", cat: "ict", pos: "noun", km: "កុំព្យូទ័រ", clue: "An electronic device for storing, processing, and displaying data." },
    { word: "DATABASE", cat: "ict", pos: "noun", km: "មូលដ្ឋានទិន្នន័យ", clue: "A structured set of data held in a computer, accessible in various ways." },
    { word: "SOFTWARE", cat: "ict", pos: "noun", km: "កម្មវិធីកុំព្យូទ័រ", clue: "The programs and operating systems used by a computer system." },
    { word: "HARDWARE", cat: "ict", pos: "noun", km: "ផ្នែករឹងកុំព្យូទ័រ", clue: "The physical components and electronic circuits of a computer." },
    { word: "CYBERSECURITY", cat: "ict", pos: "noun", km: "សន្តិសុខសាយប័រ", clue: "The state of being protected against criminal or unauthorized use of data." },
    { word: "ENCRYPTION", cat: "ict", pos: "noun", km: "ការបម្លែងកូដសម្ងាត់", clue: "The process of converting information into secret code to prevent unauthorized access." },
    { word: "PROGRAMMING", cat: "ict", pos: "noun", km: "ការសរសេរកូដ", clue: "The process of writing instructions that an electronic computer can execute." },
    { word: "VARIABLE", cat: "ict", pos: "noun", km: "អថេរ", clue: "A named storage location in computer memory holding a value that can change." },
    { word: "FUNCTION", cat: "ict", pos: "noun", km: "អនុគមន៍", clue: "A reusable block of code designed to perform a particular specific task." },
    { word: "INTERNET", cat: "ict", pos: "noun", km: "បណ្តាញអ៊ីនធឺណិត", clue: "A global computer network providing a variety of information and communication facilities." },
    { word: "KEYBOARD", cat: "ict", pos: "noun", km: "ក្តារចុច", clue: "A panel of keys that operate a computer or typewriter." },
    { word: "MONITOR", cat: "ict", pos: "noun", km: "អេក្រង់កុំព្យូទ័រ", clue: "A screen used to display output from a computer." },

    // --- Science & Nature ---
    { word: "DINOSAUR", cat: "science", pos: "noun", km: "សត្វដាយណូស័រ", clue: "Prehistoric reptiles that lived on Earth millions of years ago." },
    { word: "VOLCANO", cat: "science", pos: "noun", km: "ភ្នំភ្លើង", clue: "A mountain with a crater through which lava and rock fragments erupt." },
    { word: "HURRICANE", cat: "science", pos: "noun", km: "ខ្យល់ព្យុះសង្ឃរា", clue: "A severe tropical storm with powerful rotating winds and heavy rain." },
    { word: "EARTHQUAKE", cat: "science", pos: "noun", km: "ការរញ្ជួយដី", clue: "A sudden violent shaking of the ground caused by movements in the Earth's crust." },
    { word: "TELESCOPE", cat: "science", pos: "noun", km: "តេឡេស្កុប", clue: "An optical instrument designed to make distant objects appear nearer." },
    { word: "GALAXY", cat: "science", pos: "noun", km: "កាឡាក់ស៊ី", clue: "A system of millions or billions of stars, together with gas and dust." },
    { word: "RAINFOREST", cat: "science", pos: "noun", km: "ព្រៃទឹកភ្លៀង", clue: "A dense, warm forest that receives lots of rainfall all year round." },
    { word: "WILDLIFE", cat: "science", pos: "noun", km: "សត្វព្រៃ", clue: "Wild animals collectively; the native fauna of an area." },

    // --- School & Life ---
    { word: "CLASSROOM", cat: "general", pos: "noun", km: "បន្ទប់រៀន", clue: "A room in a school where students are taught lessons." },
    { word: "LIBRARY", cat: "general", pos: "noun", km: "បណ្ណាល័យ", clue: "A building or room containing collections of books and learning resources." },
    { word: "DICTIONARY", cat: "general", pos: "noun", km: "វចនានុក្រម", clue: "A book or electronic resource that lists words and gives their meanings." },
    { word: "GRADUATION", cat: "general", pos: "noun", km: "ការបញ្ចប់ការសិក្សា", clue: "The receiving or conferring of an academic degree or diploma." },
    { word: "KNOWLEDGE", cat: "general", pos: "noun", km: "ចំណេះដឹង", clue: "Facts, information, and skills acquired through experience or education." }
  ];

  // ==========================================================================
  // 3. HIGH-STAKES THEMES VECTOR SVG RENDERERS (6 Stages for each theme)
  // ==========================================================================
  const HMThemes = {
    // ----------------------------------------------------
    // THEME 1: THE MELTING SNOWMAN (បុរសទឹកកករលាយ)
    // ----------------------------------------------------
    renderSnowman(stage) {
      // Stage: 0 (perfect) to 6 (completely melted puddle)
      const sunRaysColor = stage >= 1 ? '#f59e0b' : '#38bdf8';
      const sunRadius = 24 + stage * 5;
      const headY = 90 + stage * 7;
      const headRadius = Math.max(8, 28 - stage * 3.5);
      const bodyRadius = Math.max(16, 44 - stage * 4.5);
      const bodyY = 160 + stage * 3;
      const puddleWidth = 60 + stage * 18;
      const hatY = 48 + stage * 8.5;
      const hatTilt = stage * 7;

      let sceneSVG = `
        <svg class="hm-stage-svg" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="snowSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${stage >= 4 ? '#334155' : stage >= 2 ? '#1e293b' : '#0f172a'}" />
              <stop offset="100%" stop-color="${stage >= 4 ? '#475569' : '#1e3a8a'}" />
            </linearGradient>
            <linearGradient id="snowGround" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#e0f2fe" />
              <stop offset="100%" stop-color="#93c5fd" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="50%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="rgba(245, 158, 11, 0)" />
            </radialGradient>
          </defs>

          <!-- Sky & Landscape Background -->
          <rect width="320" height="260" rx="14" fill="url(#snowSky)" />
          
          <!-- Distant Snowy Hills -->
          <path d="M-10,210 Q60,170 140,195 T330,185 L330,260 L-10,260 Z" fill="#3b82f6" opacity="0.3" />
          <path d="M-10,225 Q90,190 200,215 T330,210 L330,260 L-10,260 Z" fill="url(#snowGround)" />

          <!-- Sun (Grows hotter with each mistake) -->
          <circle cx="270" cy="50" r="${sunRadius + 15}" fill="url(#sunGlow)" opacity="${0.3 + stage * 0.12}" />
          <circle cx="270" cy="50" r="${sunRadius}" fill="${sunRaysColor}" />
          <!-- Sun Heat Rays -->
          <g stroke="${sunRaysColor}" stroke-width="2.5" stroke-linecap="round" opacity="${stage >= 1 ? 0.9 : 0.4}">
            <line x1="270" y1="12" x2="270" y2="2" />
            <line x1="270" y1="88" x2="270" y2="98" />
            <line x1="232" y1="50" x2="222" y2="50" />
            <line x1="308" y1="50" x2="318" y2="50" />
            <line x1="243" y1="23" x2="236" y2="16" />
            <line x1="297" y1="77" x2="304" y2="84" />
            <line x1="243" y1="77" x2="236" y2="84" />
            <line x1="297" y1="23" x2="304" y2="16" />
          </g>

          <!-- Melted Water Puddle (Expands with each mistake) -->
          ${stage > 0 ? `
            <ellipse cx="140" cy="225" rx="${puddleWidth}" ry="${10 + stage * 2}" fill="#38bdf8" opacity="0.85" />
            <ellipse cx="140" cy="225" rx="${puddleWidth * 0.7}" ry="${6 + stage * 1.5}" fill="#60a5fa" opacity="0.9" />
          ` : ''}

          <!-- Pine Tree in Background -->
          <polygon points="40,220 25,180 32,180 20,150 28,150 18,125 35,125 30,105 45,125 40,125 50,150 43,150 55,180 47,180 58,220" fill="#047857" />
          <rect x="36" y="220" width="8" height="15" fill="#78350f" />
      `;

      if (stage < 6) {
        // Active Snowman (still has body/head)
        sceneSVG += `
          <!-- Snowman Lower Body -->
          <circle cx="140" cy="${bodyY}" r="${bodyRadius}" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
          <!-- Coal Buttons on Body -->
          ${stage < 4 ? `
            <circle cx="140" cy="${bodyY - 10}" r="3" fill="#1e293b" />
            <circle cx="140" cy="${bodyY + 6}" r="3" fill="#1e293b" />
          ` : ''}

          <!-- Twig Arms -->
          ${stage < 2 ? `
            <!-- Left Arm -->
            <path d="M102,${bodyY - 15} L65,${bodyY - 28} M75,${bodyY - 24} L68,${bodyY - 38}" stroke="#78350f" stroke-width="3" stroke-linecap="round" />
            <!-- Right Arm -->
            <path d="M178,${bodyY - 15} L215,${bodyY - 28} M205,${bodyY - 24} L212,${bodyY - 38}" stroke="#78350f" stroke-width="3" stroke-linecap="round" />
          ` : stage < 4 ? `
            <!-- Drooping Arms -->
            <path d="M102,${bodyY - 5} L70,${bodyY + 12}" stroke="#78350f" stroke-width="3" stroke-linecap="round" />
            <path d="M178,${bodyY - 5} L210,${bodyY + 14}" stroke="#78350f" stroke-width="3" stroke-linecap="round" />
          ` : `
            <!-- Fallen sticks floating in puddle -->
            <line x1="80" y1="225" x2="60" y2="228" stroke="#78350f" stroke-width="2.5" />
            <line x1="195" y1="224" x2="215" y2="226" stroke="#78350f" stroke-width="2.5" />
          `}

          <!-- Snowman Head -->
          <circle cx="140" cy="${headY}" r="${headRadius}" fill="#ffffff" />
          
          <!-- Eyes -->
          <circle cx="${140 - headRadius * 0.35}" cy="${headY - headRadius * 0.15}" r="${stage >= 3 ? 1.5 : 2.5}" fill="#0f172a" />
          <circle cx="${140 + headRadius * 0.35}" cy="${headY - headRadius * 0.15}" r="${stage >= 3 ? 1.5 : 2.5}" fill="#0f172a" />
          
          <!-- Carrot Nose -->
          ${stage < 4 ? `
            <polygon points="${140},${headY} ${140 + headRadius * 0.8},${headY + 3} ${140},${headY + 6}" fill="#f97316" />
          ` : `
            <!-- Carrot fallen into puddle -->
            <polygon points="120,224 138,222 120,228" fill="#f97316" />
          `}

          <!-- Scarf -->
          ${stage < 3 ? `
            <path d="M${140 - headRadius},${headY + headRadius * 0.8} Q140,${headY + headRadius + 4} ${140 + headRadius},${headY + headRadius * 0.8}" stroke="#ef4444" stroke-width="7" stroke-linecap="round" fill="none" />
            <path d="M148,${headY + headRadius * 0.8} L152,${headY + headRadius + 22}" stroke="#ef4444" stroke-width="5" stroke-linecap="round" />
          ` : stage < 5 ? `
            <!-- Slipped scarf -->
            <path d="M125,${bodyY - 10} Q140,${bodyY - 4} 155,${bodyY - 10}" stroke="#ef4444" stroke-width="5" stroke-linecap="round" fill="none" />
          ` : ''}

          <!-- Top Hat (Tilts and slips with heat) -->
          <g transform="translate(140, ${hatY}) rotate(${hatTilt}) translate(-140, -${hatY})">
            <ellipse cx="140" cy="${hatY}" rx="22" ry="5" fill="#1e293b" />
            <rect x="125" y="${hatY - 26}" width="30" height="26" rx="2" fill="#0f172a" />
            <rect x="125" y="${hatY - 8}" width="30" height="5" fill="#ef4444" />
          </g>

          <!-- Sweat Drops when heat is high -->
          ${stage >= 1 ? `
            <path d="M165,${headY - 5} Q168,${headY} 165,${headY + 5} Q162,${headY} 165,${headY - 5}" fill="#38bdf8" />
            <path d="M115,${headY} Q118,${headY + 5} 115,${headY + 10} Q112,${headY + 5} 115,${headY}" fill="#38bdf8" />
          ` : ''}
        `;
      } else {
        // Stage 6: GAME OVER - Fully Melted Snowman!
        sceneSVG += `
          <!-- Steam rising from hot water -->
          <path d="M110,215 Q115,195 110,180" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="3,3" fill="none" opacity="0.7" />
          <path d="M140,210 Q145,190 140,175" stroke="#cbd5e1" stroke-width="2.5" stroke-dasharray="3,3" fill="none" opacity="0.8" />
          <path d="M170,215 Q175,195 170,180" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="3,3" fill="none" opacity="0.7" />

          <!-- Floated Top Hat on Puddle -->
          <g transform="translate(150, 222) rotate(25)">
            <ellipse cx="0" cy="0" rx="20" ry="5" fill="#1e293b" />
            <rect x="-12" y="-22" width="24" height="22" rx="2" fill="#0f172a" />
            <rect x="-12" y="-6" width="24" height="4" fill="#ef4444" />
          </g>

          <!-- Floating Carrot & Coal -->
          <polygon points="115,224 135,221 115,228" fill="#f97316" />
          <circle cx="100" cy="225" r="2.5" fill="#0f172a" />
          <circle cx="180" cy="226" r="2.5" fill="#0f172a" />
          <circle cx="125" cy="228" r="2.5" fill="#0f172a" />

          <!-- Game Over Text Banner -->
          <rect x="60" y="80" width="200" height="45" rx="10" fill="rgba(15, 23, 42, 0.85)" stroke="#ef4444" stroke-width="2" />
          <text x="160" y="108" text-anchor="middle" fill="#ef4444" font-weight="900" font-size="16" letter-spacing="1">SNOWMAN MELTED!</text>
        `;
      }

      sceneSVG += `</svg>`;
      return sceneSVG;
    },

    // ----------------------------------------------------
    // THEME 2: THE SHARK PLANK (ក្តារបន្ទះឆ្លាមសមុទ្រ)
    // ----------------------------------------------------
    renderShark(stage) {
      // Stage: 0 (safe on deck) to 6 (plunged into shark waters)
      // Character coordinates along the plank:
      // Plank starts at x=70, ends at x=250 (deck is on left: 0 to 70)
      const steps = [
        { charX: 45, charY: 145, note: 'Safe on Deck' },
        { charX: 95, charY: 145, note: 'Step 1/5' },
        { charX: 130, charY: 147, note: 'Step 2/5 (Plank Bends)' },
        { charX: 165, charY: 150, note: 'Step 3/5 (Sharks Close In!)' },
        { charX: 205, charY: 152, note: 'Step 4/5 (Wobbling!)' },
        { charX: 242, charY: 154, note: 'Step 5/5 (On The Edge!)' },
        { charX: 255, charY: 205, note: 'WALKED THE PLANK!' }
      ];

      const curStep = steps[Math.min(stage, 6)];

      let sceneSVG = `
        <svg class="hm-stage-svg" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="oceanSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#0369a1" />
            </linearGradient>
            <linearGradient id="oceanWater" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="50%" stop-color="#0369a1" />
              <stop offset="100%" stop-color="#0c4a6e" />
            </linearGradient>
          </defs>

          <!-- Sky & Moonlight / Sun -->
          <rect width="320" height="260" rx="14" fill="url(#oceanSky)" />
          <circle cx="280" cy="45" r="22" fill="#fef08a" opacity="0.8" />
          
          <!-- Ocean Waves -->
          <rect x="0" y="180" width="320" height="80" fill="url(#oceanWater)" />
          <!-- Animated Wave Curves -->
          <path d="M-10,185 Q30,175 70,185 T150,185 T230,185 T310,185 T350,185 L350,260 L-10,260 Z" fill="#0284c7" opacity="0.7" />
          <path d="M-10,195 Q40,188 90,195 T190,195 T290,195 T350,195 L350,260 L-10,260 Z" fill="#0369a1" opacity="0.8" />

          <!-- Pirate Ship Deck (Left side) -->
          <path d="M0,80 L70,110 L70,260 L0,260 Z" fill="#78350f" />
          <path d="M0,130 L70,148 L70,260 L0,260 Z" fill="#451a03" />
          <!-- Ship Railing & Mast -->
          <rect x="20" y="30" width="10" height="130" fill="#92400e" />
          <line x1="0" y1="115" x2="70" y2="135" stroke="#b45309" stroke-width="4" />
          <line x1="15" y1="120" x2="15" y2="140" stroke="#b45309" stroke-width="3" />
          <line x1="45" y1="128" x2="45" y2="145" stroke="#b45309" stroke-width="3" />
          <!-- Jolly Roger Skull Flag -->
          <path d="M25,35 L60,45 L25,55 Z" fill="#0f172a" />
          <circle cx="35" cy="45" r="4" fill="#ffffff" />

          <!-- The Wooden Plank (Bends more as stage advances) -->
          <path d="M60,158 Q150,${158 + (stage >= 2 ? stage * 2.5 : 0)} 250,${158 + (stage >= 2 ? stage * 3 : 0)}" stroke="#b45309" stroke-width="9" stroke-linecap="round" fill="none" />
          <!-- Plank wood texture markings -->
          <line x1="100" y1="156" x2="100" y2="162" stroke="#78350f" stroke-width="2" />
          <line x1="150" y1="158" x2="150" y2="164" stroke="#78350f" stroke-width="2" />
          <line x1="200" y1="160" x2="200" y2="166" stroke="#78350f" stroke-width="2" />

          <!-- Sharks Circling in the Waters Below -->
          ${stage >= 1 ? `
            <!-- Shark Fin 1 (Left) -->
            <path d="M120,205 Q125,188 135,185 Q133,197 142,205 Z" fill="#334155" />
            <circle cx="127" cy="204" r="3" fill="#ffffff" opacity="0.6" />
          ` : ''}

          ${stage >= 2 ? `
            <!-- Shark Fin 2 (Right) -->
            <path d="M210,215 Q218,194 230,192 Q227,206 238,215 Z" fill="#1e293b" />
          ` : ''}

          ${stage >= 3 ? `
            <!-- Big Hungry Shark Breaching Water Under Plank -->
            <path d="M170,225 Q180,185 195,182 Q193,205 210,225 Z" fill="#0f172a" />
            <!-- Shark Teeth -->
            <polygon points="182,192 186,188 190,192" fill="#ffffff" />
            <polygon points="190,192 194,188 198,192" fill="#ffffff" />
            <!-- Water splash rings -->
            <ellipse cx="190" cy="225" rx="20" ry="4" fill="#7dd3fc" opacity="0.6" />
          ` : ''}
      `;

      if (stage < 6) {
        // Character on Deck or Walking Plank
        sceneSVG += `
          <g transform="translate(${curStep.charX}, ${curStep.charY - 45})">
            <!-- Pirate / Student Character -->
            <!-- Head & Bandana -->
            <circle cx="0" cy="0" r="10" fill="#fbcfe8" />
            <path d="M-10,-4 Q0,-14 10,-4 L8,-1 L-8,-1 Z" fill="#ef4444" />
            <!-- Eyes (Sweating/scared as stage goes up) -->
            <circle cx="-3" cy="0" r="1.5" fill="#0f172a" />
            <circle cx="3" cy="0" r="1.5" fill="#0f172a" />
            ${stage >= 4 ? `
              <!-- Sweat drop -->
              <circle cx="8" cy="-1" r="2" fill="#38bdf8" />
            ` : ''}
            <!-- Torso (Striped shirt) -->
            <rect x="-7" y="10" width="14" height="20" rx="3" fill="#ffffff" />
            <line x1="-7" y1="14" x2="7" y2="14" stroke="#0284c7" stroke-width="2" />
            <line x1="-7" y1="20" x2="7" y2="20" stroke="#0284c7" stroke-width="2" />
            <line x1="-7" y1="26" x2="7" y2="26" stroke="#0284c7" stroke-width="2" />
            <!-- Arms (Windmilling when teetering on edge) -->
            ${stage === 5 ? `
              <line x1="-7" y1="14" x2="-18" y2="5" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round" />
              <line x1="7" y1="14" x2="18" y2="2" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round" />
            ` : `
              <line x1="-7" y1="14" x2="-14" y2="24" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round" />
              <line x1="7" y1="14" x2="14" y2="24" stroke="#fbcfe8" stroke-width="3" stroke-linecap="round" />
            `}
            <!-- Legs / Boots -->
            <line x1="-4" y1="30" x2="-4" y2="44" stroke="#1e293b" stroke-width="3.5" />
            <line x1="4" y1="30" x2="${stage === 5 ? '8' : '4'}" y2="44" stroke="#1e293b" stroke-width="3.5" />
          </g>
        `;
      } else {
        // Stage 6: GAME OVER - Splash! Walked The Plank!
        sceneSVG += `
          <!-- Giant Splash in Water -->
          <path d="M230,225 Q245,180 250,170 Q255,180 265,190 Q270,175 278,165 Q282,185 290,225 Z" fill="#e0f2fe" opacity="0.9" />
          <ellipse cx="260" cy="225" rx="30" ry="7" fill="#38bdf8" />
          
          <!-- Bubbles -->
          <circle cx="250" cy="235" r="4" fill="#ffffff" opacity="0.8" />
          <circle cx="265" cy="242" r="3" fill="#ffffff" opacity="0.7" />
          <circle cx="240" cy="248" r="5" fill="#ffffff" opacity="0.8" />

          <!-- Floating Pirate Hat on Waves -->
          <g transform="translate(260, 205) rotate(15)">
            <ellipse cx="0" cy="0" rx="14" ry="4" fill="#0f172a" />
            <path d="M-10,-2 L-6,-12 L6,-12 L10,-2 Z" fill="#1e293b" />
            <circle cx="0" cy="-7" r="2" fill="#ef4444" />
          </g>

          <!-- Sharks Converging -->
          <path d="M225,215 Q235,195 245,210 Z" fill="#0f172a" />
          <path d="M285,215 Q295,195 305,210 Z" fill="#0f172a" />

          <!-- Game Over Text Banner -->
          <rect x="55" y="80" width="210" height="45" rx="10" fill="rgba(15, 23, 42, 0.85)" stroke="#ef4444" stroke-width="2" />
          <text x="160" y="108" text-anchor="middle" fill="#ef4444" font-weight="900" font-size="15" letter-spacing="1">WALKED THE PLANK!</text>
        `;
      }

      sceneSVG += `</svg>`;
      return sceneSVG;
    },

    // ----------------------------------------------------
    // THEME 3: ROCKET BLAST-OFF (ការបាញ់បង្ហោះរ៉ុក្កែត)
    // ----------------------------------------------------
    renderRocket(stage) {
      // Stage: 0 (secured on pad) to 6 (LIFTOFF / BLAST-OFF into cosmos!)
      const countdownSec = 6 - stage;
      const gantryRetracted = stage >= 1;
      const cryogenicVapor = stage >= 2;
      const ignitionSparks = stage >= 3;
      const engineFire = stage >= 4;
      const fullThrust = stage >= 5;

      let sceneSVG = `
        <svg class="hm-stage-svg" viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="spaceSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#020617" />
              <stop offset="50%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#1e1b4b" />
            </linearGradient>
            <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#cbd5e1" />
              <stop offset="50%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#94a3b8" />
            </linearGradient>
            <linearGradient id="rocketFire" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="30%" stop-color="#f97316" />
              <stop offset="100%" stop-color="#ef4444" />
            </linearGradient>
          </defs>

          <!-- Deep Space Starry Background -->
          <rect width="320" height="260" rx="14" fill="url(#spaceSky)" />
          <!-- Stars -->
          <circle cx="30" cy="40" r="1.5" fill="#ffffff" opacity="0.8" />
          <circle cx="80" cy="25" r="1" fill="#ffffff" opacity="0.6" />
          <circle cx="150" cy="30" r="1.5" fill="#38bdf8" opacity="0.9" />
          <circle cx="230" cy="20" r="1" fill="#ffffff" opacity="0.7" />
          <circle cx="290" cy="55" r="2" fill="#fef08a" opacity="0.8" />
          <circle cx="50" cy="80" r="1" fill="#ffffff" opacity="0.5" />
          <circle cx="270" cy="90" r="1" fill="#ffffff" opacity="0.6" />

          <!-- Digital Countdown Status Screen (Top Left) -->
          <rect x="14" y="14" width="105" height="42" rx="8" fill="rgba(15, 23, 42, 0.9)" stroke="${stage >= 4 ? '#ef4444' : stage >= 2 ? '#f59e0b' : '#38bdf8'}" stroke-width="1.5" />
          <text x="22" y="30" fill="#94a3b8" font-size="9" font-weight="700">LAUNCH STATUS</text>
          <text x="22" y="48" fill="${stage >= 4 ? '#ef4444' : stage >= 2 ? '#f59e0b' : '#38bdf8'}" font-size="14" font-weight="900" font-family="monospace">
            ${stage === 6 ? 'T-0 LIFTOFF' : `T-MINUS 0${countdownSec}`}
          </text>

          <!-- Launch Pad Base Structure & Flame Trench -->
          <rect x="0" y="225" width="320" height="35" fill="#1e293b" />
          <rect x="100" y="210" width="120" height="18" fill="#334155" rx="3" />
          <line x1="0" y1="225" x2="320" y2="225" stroke="#475569" stroke-width="2" />

          <!-- Launch Pad Warning Siren (Spins red when mistakes happen) -->
          <circle cx="110" cy="202" r="5" fill="${stage >= 1 ? '#ef4444' : '#64748b'}" />
          ${stage >= 1 ? `
            <circle cx="110" cy="202" r="9" fill="none" stroke="#ef4444" stroke-width="1.5" opacity="0.7" />
          ` : ''}

          <!-- Metal Lattice Launch Tower (Right side) -->
          <line x1="220" y1="60" x2="220" y2="210" stroke="#64748b" stroke-width="4" />
          <line x1="240" y1="60" x2="240" y2="210" stroke="#64748b" stroke-width="4" />
          <!-- Tower diagonal cross-bracing -->
          <line x1="220" y1="70" x2="240" y2="100" stroke="#475569" stroke-width="2" />
          <line x1="240" y1="70" x2="220" y2="100" stroke="#475569" stroke-width="2" />
          <line x1="220" y1="100" x2="240" y2="130" stroke="#475569" stroke-width="2" />
          <line x1="240" y1="100" x2="220" y2="130" stroke="#475569" stroke-width="2" />
          <line x1="220" y1="130" x2="240" y2="160" stroke="#475569" stroke-width="2" />
          <line x1="240" y1="130" x2="220" y2="160" stroke="#475569" stroke-width="2" />
          <line x1="220" y1="160" x2="240" y2="190" stroke="#475569" stroke-width="2" />
          <line x1="240" y1="160" x2="220" y2="190" stroke="#475569" stroke-width="2" />

          <!-- Gantry Support Arms (Retract when stage >= 1) -->
          ${!gantryRetracted ? `
            <line x1="175" y1="100" x2="220" y2="100" stroke="#f59e0b" stroke-width="3.5" />
            <line x1="175" y1="150" x2="220" y2="150" stroke="#f59e0b" stroke-width="3.5" />
            <rect x="170" y="96" width="6" height="8" fill="#ef4444" />
          ` : `
            <!-- Retracted arm swung upward -->
            <line x1="220" y1="100" x2="235" y2="80" stroke="#94a3b8" stroke-width="3" />
            <line x1="220" y1="150" x2="235" y2="130" stroke="#94a3b8" stroke-width="3" />
          `}

          <!-- Cryogenic Oxygen Vapor (Stage >= 2) -->
          ${cryogenicVapor && stage < 6 ? `
            <ellipse cx="140" cy="130" rx="18" ry="7" fill="#ffffff" opacity="0.5" />
            <ellipse cx="180" cy="132" rx="16" ry="6" fill="#ffffff" opacity="0.6" />
          ` : ''}

          <!-- Ignition Sparks (Stage >= 3) -->
          ${ignitionSparks && stage < 6 ? `
            <line x1="145" y1="210" x2="135" y2="218" stroke="#fef08a" stroke-width="2" />
            <line x1="175" y1="210" x2="185" y2="218" stroke="#fef08a" stroke-width="2" />
            <line x1="150" y1="212" x2="142" y2="222" stroke="#f97316" stroke-width="1.5" />
            <line x1="170" y1="212" x2="178" y2="222" stroke="#f97316" stroke-width="1.5" />
          ` : ''}
      `;

      if (stage < 6) {
        // Rocket standing on Pad or beginning ignition
        sceneSVG += `
          <!-- Engine Flames (Stage 4 & 5) -->
          ${engineFire ? `
            <polygon points="148,206 160,${fullThrust ? 245 : 228} 172,206" fill="url(#rocketFire)" />
            <polygon points="152,206 160,${fullThrust ? 238 : 220} 168,206" fill="#fef08a" />
            <!-- Billowing Launch Smoke Clouds -->
            <circle cx="130" cy="216" r="${fullThrust ? 22 : 14}" fill="#e2e8f0" opacity="0.75" />
            <circle cx="190" cy="216" r="${fullThrust ? 22 : 14}" fill="#e2e8f0" opacity="0.75" />
            <circle cx="160" cy="222" r="${fullThrust ? 26 : 16}" fill="#cbd5e1" opacity="0.8" />
          ` : ''}

          <!-- Rocket Vehicle -->
          <g transform="translate(160, 140)">
            <!-- Main Fuselage -->
            <rect x="-14" y="-70" width="28" height="135" rx="5" fill="url(#rocketBody)" />
            <!-- Aerodynamic Nosecone -->
            <path d="M-14,-70 Q0,-105 14,-70 Z" fill="#ef4444" />
            <!-- Cockpit Window -->
            <circle cx="0" cy="-45" r="5" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5" />
            <!-- Decorative Accent Stripe & Flag -->
            <rect x="-14" y="-20" width="28" height="6" fill="#38bdf8" />
            <rect x="-8" y="-8" width="16" height="8" rx="1" fill="#0284c7" />
            <text x="0" y="-2" fill="#ffffff" font-size="5" font-weight="900" text-anchor="middle">ICT</text>
            <!-- Booster Engine Fins -->
            <polygon points="-14,40 -26,65 -14,65" fill="#ef4444" />
            <polygon points="14,40 26,65 14,65" fill="#ef4444" />
            <rect x="-10" y="65" width="20" height="6" rx="2" fill="#1e293b" />
          </g>
        `;
      } else {
        // Stage 6: GAME OVER - ROCKET BLAST-OFF INTO ORBIT!
        sceneSVG += `
          <!-- Tremendous Column of Fire & Exhaust Smoke on Pad -->
          <polygon points="135,210 160,60 185,210" fill="url(#rocketFire)" opacity="0.9" />
          <polygon points="145,210 160,110 175,210" fill="#fef08a" />
          <!-- Giant billowing launch smoke plumes -->
          <circle cx="110" cy="210" r="32" fill="#e2e8f0" opacity="0.9" />
          <circle cx="210" cy="210" r="32" fill="#e2e8f0" opacity="0.9" />
          <circle cx="160" cy="215" r="38" fill="#f8fafc" opacity="0.95" />
          <circle cx="135" cy="180" r="24" fill="#cbd5e1" opacity="0.8" />
          <circle cx="185" cy="180" r="24" fill="#cbd5e1" opacity="0.8" />

          <!-- Rocket Soaring Away High into the Cosmos -->
          <g transform="translate(160, 42) scale(0.65)">
            <rect x="-14" y="-70" width="28" height="135" rx="5" fill="url(#rocketBody)" />
            <path d="M-14,-70 Q0,-105 14,-70 Z" fill="#ef4444" />
            <polygon points="-14,40 -26,65 -14,65" fill="#ef4444" />
            <polygon points="14,40 26,65 14,65" fill="#ef4444" />
            <!-- Massive Thrust Jet Trail Behind Rocket -->
            <polygon points="-10,65 0,140 10,65" fill="url(#rocketFire)" />
            <polygon points="-6,65 0,110 6,65" fill="#fef08a" />
          </g>

          <!-- Game Over Text Banner -->
          <rect x="55" y="80" width="210" height="45" rx="10" fill="rgba(15, 23, 42, 0.9)" stroke="#f97316" stroke-width="2" />
          <text x="160" y="108" text-anchor="middle" fill="#f97316" font-weight="900" font-size="15" letter-spacing="1">ROCKET BLAST-OFF!</text>
        `;
      }

      sceneSVG += `</svg>`;
      return sceneSVG;
    }
  };

  // ==========================================================================
  // 4. MAIN HANGMAN GAME CLASS
  // ==========================================================================
  class HangmanGame {
    constructor(container, options = {}) {
      this.container = container;
      this.options = options;
      this.audio = new HMAudio();

      // Modes: 'solo' (at own pace), 'pairs' (1v1 rivalry), 'team' (QR room)
      this.gameMode = options.mode || 'solo';
      // Themes: 'snowman', 'shark', 'rocket'
      this.theme = options.theme || 'snowman';
      // Categories: 'all', 'grade10', 'stem', 'ict', 'science', 'general'
      this.category = options.category || 'all';

      // Gameplay state
      this.currentWordObj = null;
      this.targetWord = '';
      this.guessedLetters = new Set();
      this.mistakes = 0;
      this.maxMistakes = 6;
      this.streak = 0;
      this.isGameOver = false;
      this.isVictory = false;

      // Scores
      this.soloScore = parseInt(localStorage.getItem('hm_high_score') || '0', 10);
      this.currentSoloScore = 0;

      // Pair Mode (1v1)
      this.pairType = 'pass_play'; // 'pass_play' or 'vs_bot'
      this.activePairPlayer = 1; // 1 or 2
      this.p1Score = 0;
      this.p2Score = 0;

      // Team Mode (Room / QR)
      this.roomCode = options.room || this.generateRoomCode();
      this.teams = {
        lion: { name: 'ក្រុមតោ (Lion) 🦁', score: 0, streak: 0 },
        eagle: { name: 'ក្រុមឥន្ទ្រី (Eagle) 🦅', score: 0, streak: 0 },
        dragon: { name: 'ក្រុមនាគ (Dragon) 🐉', score: 0, streak: 0 }
      };
      this.teamKeys = ['lion', 'eagle', 'dragon'];
      this.activeTeamIdx = 0;

      // Timer (Optional for Solo)
      this.timedMode = false;
      this.timerSeconds = 180;
      this.timerInterval = null;

      // BroadcastChannel for live room multiplayer synchronization across tabs/devices
      this.channel = null;
      if (typeof window.BroadcastChannel !== 'undefined') {
        try {
          this.channel = new BroadcastChannel('hm_room_' + this.roomCode);
          this.channel.onmessage = this.handleRoomMessage.bind(this);
        } catch (e) {
          console.warn('BroadcastChannel not supported', e);
        }
      }

      this.boundKeyHandler = this.handleKeyDown.bind(this);
    }

    generateRoomCode() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      let code = 'HM-';
      for (let i = 0; i < 4; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
      }
      return code;
    }

    init() {
      this.renderSkeleton();
      this.bindEvents();
      this.startNewRound();

      // Check if URL has room and participant joined
      const urlParams = new URLSearchParams(window.location.search);
      const roomParam = urlParams.get('room');
      if (roomParam) {
        const partModal = this.container.querySelector('#hm-participant-welcome-modal');
        const roomDisplay = this.container.querySelector('#hm-participant-room-id');
        if (roomDisplay) roomDisplay.textContent = roomParam;
        if (partModal) {
          partModal.classList.add('active');
          return;
        }
      }

      // Show Full Display Entrance Splash on new page enter
      this.triggerModeEntranceSplash(this.gameMode, true);
    }

    destroy() {
      if (this.timerInterval) clearInterval(this.timerInterval);
      if (this.splashTimeout) clearTimeout(this.splashTimeout);
      window.removeEventListener('keydown', this.boundKeyHandler);
      if (this.boundFsChange) document.removeEventListener('fullscreenchange', this.boundFsChange);
      if (this.channel) this.channel.close();
      this.container.innerHTML = '';
    }

    // ========================================================================
    // RENDER SKELETON UI
    // ========================================================================
    renderSkeleton() {
      this.container.innerHTML = `
        <div class="hm-container" id="hm-main-box">
          <!-- Header Bar -->
          <div class="hm-header">
            <div class="hm-brand">
              <div class="hm-logo-icon">🎪</div>
              <div class="hm-title-block">
                <h3>
                  Hangman
                  <span class="badge-mini" style="background:#ec4899; color:#fff; font-weight:800;">High-Stakes Edition</span>
                </h3>
                <p>Score-Per-Letter • The Streak Mechanic • Solve for Bonus (+5 Pts) • High-Stakes Visual Countdowns</p>
              </div>
            </div>

            <div class="hm-header-tools">
              <button class="hm-fullscreen-btn hm-btn-fullscreen-toggle" title="ពេញអេក្រង់ (Full Computer Screen Display)">
                <span>⛶</span> ពេញអេក្រង់ (Full Screen)
              </button>
              <button class="hm-tool-btn hm-btn-sound" title="បិទ/បើកសំឡេង">
                ${this.audio.muted ? '🔇 សំឡេង៖ បិទ' : '🔊 សំឡេង៖ បើក'}
              </button>
              <button class="hm-tool-btn hm-btn-new-round" style="background:linear-gradient(135deg, #0284c7, #6366f1); color:#fff; border:none;">
                🔄 ពាក្យថ្មី (New Word)
              </button>
            </div>
          </div>

          <!-- Mode & Theme Control Strip -->
          <div class="hm-controls-row">
            <div class="hm-mode-tabs">
              <button class="hm-mode-tab ${this.gameMode === 'solo' ? 'active' : ''}" data-mode="solo">
                <span>👤</span> លេងម្នាក់ឯង (Solo)
              </button>
              <button class="hm-mode-tab ${this.gameMode === 'pairs' ? 'active' : ''}" data-mode="pairs">
                <span>👥</span> ប្រកួតជាគូ (Pairs 1v1)
              </button>
              <button class="hm-mode-tab ${this.gameMode === 'team' ? 'active' : ''}" data-mode="team">
                <span>🌐</span> ជាក្រុម (QR Room)
              </button>
            </div>

            <div class="hm-theme-picker">
              <span class="hm-theme-label">Countdown Theme:</span>
              <button class="hm-theme-btn ${this.theme === 'snowman' ? 'active' : ''}" data-theme="snowman">
                ⛄ Melting Snowman
              </button>
              <button class="hm-theme-btn ${this.theme === 'shark' ? 'active' : ''}" data-theme="shark">
                🦈 Shark Plank
              </button>
              <button class="hm-theme-btn ${this.theme === 'rocket' ? 'active' : ''}" data-theme="rocket">
                🚀 Rocket Blast-Off
              </button>
            </div>
          </div>

          <!-- Secondary Bar: Category & Mode Sub-Controls -->
          <div class="hm-subbar">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <span style="font-weight:700; color:var(--text-secondary);">📚 ប្រធានបទ៖</span>
              <select class="hm-category-select">
                <option value="all" ${this.category === 'all' ? 'selected' : ''}>🌟 ទាំងអស់ (All Vocab Categories)</option>
                <option value="grade10" ${this.category === 'grade10' ? 'selected' : ''}>📘 ថ្នាក់ទី១០ (Grade 10 English)</option>
                <option value="stem" ${this.category === 'stem' ? 'selected' : ''}>🔬 STEM & Academic English</option>
                <option value="ict" ${this.category === 'ict' ? 'selected' : ''}>💻 ICT & Computer Science</option>
                <option value="science" ${this.category === 'science' ? 'selected' : ''}>🌍 Science & Nature</option>
                <option value="general" ${this.category === 'general' ? 'selected' : ''}>🎓 School & General Life</option>
              </select>
            </div>

            <div id="hm-mode-subcontrols" style="display:flex; align-items:center; gap:10px;">
              <!-- Dynamic mode specifics rendered here -->
            </div>
          </div>

          <!-- Multiplayer Room Hub (Rendered when in 'team' mode) -->
          <div id="hm-group-area" style="display: ${this.gameMode === 'team' ? 'block' : 'none'};"></div>

          <!-- Status / Turn & Streak Banner -->
          <div class="hm-turn-banner">
            <div class="hm-turn-indicator" id="hm-turn-indicator-box">
              <!-- Rendered dynamically based on mode -->
            </div>

            <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
              <div class="hm-streak-box" id="hm-streak-badge">
                <span class="flame-icon">🔥</span>
                <span id="hm-streak-text">Streak: 0</span>
              </div>
              <div id="hm-score-pill" style="font-weight:800; font-size:0.9rem; color:var(--accent-gold);">
                🏆 ពិន្ទុ៖ <span id="hm-active-score-val">0</span> pts
              </div>
            </div>
          </div>

          <!-- Main Arena: Visual Countdown (Left) and Board/Keyboard (Right) -->
          <div class="hm-arena">
            <!-- Left: Visual Countdown Stage -->
            <div class="hm-visual-stage">
              <div class="hm-theme-title-tag">
                <span id="hm-theme-name-display">⛄ The Melting Snowman</span>
                <span style="font-family:monospace; color:var(--accent-cyan);" id="hm-mistakes-counter">0 / 6 Strikes</span>
              </div>

              <!-- Visual Countdown Graphic -->
              <div class="hm-stage-svg-wrapper" id="hm-svg-container">
                <!-- SVG injected dynamically -->
              </div>

              <!-- Countdown Gauge Bar -->
              <div class="hm-countdown-gauge">
                <div class="hm-gauge-header">
                  <span id="hm-gauge-status-text">Snowman Integrity: 100%</span>
                  <span id="hm-strikes-left-text">6 chances left</span>
                </div>
                <div class="hm-gauge-bar-track">
                  <div class="hm-gauge-bar-fill" id="hm-gauge-bar-fill" style="width: 100%; background: #10b981;"></div>
                </div>
                <!-- 6 Strike Indicator Dots -->
                <div class="hm-strikes-row" id="hm-strike-dots">
                  <div class="hm-strike-dot"></div>
                  <div class="hm-strike-dot"></div>
                  <div class="hm-strike-dot"></div>
                  <div class="hm-strike-dot"></div>
                  <div class="hm-strike-dot"></div>
                  <div class="hm-strike-dot"></div>
                </div>
              </div>
            </div>

            <!-- Right: Board, Letter Tiles, Clue & Virtual Keyboard -->
            <div class="hm-board">
              <!-- Clue & Pronunciation Card -->
              <div class="hm-word-hint-card">
                <div class="hm-hint-info">
                  <span class="hm-pos-badge" id="hm-word-pos">NOUN</span>
                  <span class="hm-hint-text" id="hm-word-clue">កំពុងផ្ទុកការណែនាំ...</span>
                </div>
                <button class="hm-hint-btn" id="hm-btn-speak-clue" title="ស្តាប់សំឡេងអាន">
                  🔊 ស្តាប់ពាក្យ
                </button>
              </div>

              <!-- Masked Word Letter Slots -->
              <div class="hm-word-display" id="hm-word-tiles-row">
                <!-- Letter tiles rendered dynamically -->
              </div>

              <!-- Solve for Bonus & Actions Row -->
              <div class="hm-action-bar">
                <button class="hm-btn-solve" id="hm-btn-solve-modal">
                  <span>⚡ ទាយពាក្យទាំងមូល (Solve for Bonus)</span>
                  <span class="hm-bonus-badge-pulse">+5 PTS</span>
                </button>

                <div style="font-size:0.82rem; color:var(--text-secondary);">
                  💡 <strong>Rule:</strong> ទាយត្រូវអក្សរ 1 = +1 pt / អក្សរ • ទាយត្រូវជាប់គ្នា = រក្សាវេន!
                </div>
              </div>

              <!-- Virtual QWERTY Keyboard -->
              <div class="hm-keyboard" id="hm-virtual-keyboard">
                <!-- Injected dynamically -->
              </div>
            </div>
          </div>

          <!-- Pair & Team Scoreboard Bar -->
          <div class="hm-scoreboard-bar" id="hm-scoreboard-footer">
            <!-- Injected dynamically -->
          </div>
        </div>

        <!-- MODAL: SOLVE FOR BONUS DIALOG -->
        <div class="hm-modal-overlay" id="hm-solve-modal">
          <div class="hm-modal-card">
            <div style="font-size:2.8rem; margin-bottom:-8px;">⚡</div>
            <h3 style="font-size:1.3rem; margin:0; color:var(--accent-gold);">
              Risk a Guess: Solve for Bonus!
            </h3>
            <p style="font-size:0.88rem; color:var(--text-secondary); margin:0;">
              ប្រសិនបើអ្នកទាយត្រូវពាក្យទាំងមូល អ្នកនឹងទទួលបានពិន្ទុអក្សរដែលនៅសល់ <strong>បូកបន្ថែម 5 ពិន្ទុរង្វាន់ពិសេស (+5 Points Bonus!)</strong>។
              ប៉ុន្តែបើទាយខុស អ្នកនឹងរងពិន័យ ១ កម្រិត ហើយវេននឹងត្រូវកាត់ទៅគូប្រកួតភ្លាមៗ!
            </p>

            <input type="text" id="hm-solve-input" class="hm-solve-input" placeholder="វាយពាក្យពេញនៅទីនេះ..." maxlength="25" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false">

            <div class="hm-modal-buttons">
              <button class="hm-btn-modal-cancel" id="hm-btn-solve-cancel">បោះបង់ (Cancel)</button>
              <button class="hm-btn-modal-primary" id="hm-btn-solve-submit">បញ្ជាក់ចម្លើយ (+5 Bonus) &rarr;</button>
            </div>
          </div>
        </div>

        <!-- MODAL: ROUND OVER / VICTORY CELEBRATION -->
        <div class="hm-modal-overlay" id="hm-gameover-modal">
          <div class="hm-modal-card" id="hm-gameover-card">
            <!-- Dynamic celebration / game over content -->
          </div>
        </div>

        <!-- FULL COMPUTER SCREEN ENTRANCE SPLASH (NEW PAGE / NEW GAME MODE) -->
        <div class="hm-entrance-splash" id="hm-entrance-splash-screen">
          <div class="hm-splash-content">
            <div class="hm-splash-icon-ring" id="hm-splash-icon">🎪</div>
            <span class="hm-splash-mode-tag" id="hm-splash-tag">GAME MODE</span>
            <h2 class="hm-splash-title" id="hm-splash-title">Entering Hangman Arena</h2>
            <p class="hm-splash-desc" id="hm-splash-desc">Loading educational high-stakes challenge...</p>
            
            <div class="hm-splash-rules-box" id="hm-splash-rules">
              <!-- Dynamic rules injected here -->
            </div>

            <button class="hm-splash-btn-enter" id="hm-btn-enter-arena">
              <span>ចូលលេងភ្លាមៗ (ENTER ARENA)</span> <span>&rarr;</span>
            </button>
            <div class="hm-splash-countdown-text">ដំណើរការដោយស្វ័យប្រវត្តិក្នង 2 វិនាទី...</div>
          </div>
        </div>

        <!-- PARTICIPANT WELCOME MODAL (WHEN JOINING VIA QR CODE / ROOM LINK) -->
        <div class="hm-modal-overlay" id="hm-participant-welcome-modal">
          <div class="hm-participant-dialog">
            <div style="font-size:3rem; margin-bottom:-10px;">👋</div>
            <h3 style="font-size:1.4rem; color:var(--accent-cyan); margin:0;">
              សូមស្វាគមន៍មកកាន់សង្វៀន Hangman!
            </h3>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">
              អ្នកបានចូលរួមក្នុងបន្ទប់ប្រកួត៖ <strong style="color:var(--accent-gold); font-family:monospace; font-size:1.15rem;" id="hm-participant-room-id">${this.roomCode}</strong>
            </p>
            
            <div style="font-weight:700; font-size:0.88rem; color:#cbd5e1; text-align:left;">
              សូមជ្រើសរើសក្រុមរបស់អ្នក (Choose Your Team):
            </div>
            <div class="hm-team-choice-grid">
              <button class="hm-team-choice-btn selected" data-team="lion">
                <span style="font-size:1.8rem;">🦁</span>
                <span>ក្រុមតោ (Lion)</span>
              </button>
              <button class="hm-team-choice-btn" data-team="eagle">
                <span style="font-size:1.8rem;">🦅</span>
                <span>ក្រុមឥន្ទ្រី (Eagle)</span>
              </button>
              <button class="hm-team-choice-btn" data-team="dragon">
                <span style="font-size:1.8rem;">🐉</span>
                <span>ក្រុមនាគ (Dragon)</span>
              </button>
            </div>

            <div class="hm-modal-buttons">
              <button class="hm-btn-modal-primary" id="hm-btn-participant-join" style="padding:14px; font-size:1.05rem;">
                🚀 ចូលរួមការប្រកួត (JOIN LIVE BATTLE) &rarr;
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // ========================================================================
    // BIND EVENTS & HANDLERS
    // ========================================================================
    bindEvents() {
      // Sound Toggle
      const soundBtn = this.container.querySelector('.hm-btn-sound');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          const isMuted = this.audio.toggleMute();
          soundBtn.innerHTML = isMuted ? '🔇 សំឡេង៖ បិទ' : '🔊 សំឡេង៖ បើក';
        });
      }

      // New Round
      const newRoundBtn = this.container.querySelector('.hm-btn-new-round');
      if (newRoundBtn) {
        newRoundBtn.addEventListener('click', () => {
          this.audio.playClick();
          this.startNewRound();
        });
      }

      // Mode Switcher Tabs
      const modeTabs = this.container.querySelectorAll('.hm-mode-tab');
      modeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.audio.playClick();
          const mode = tab.dataset.mode;
          if (mode === this.gameMode) return;
          this.setGameMode(mode);
        });
      });

      // Theme Switcher Buttons
      const themeBtns = this.container.querySelectorAll('.hm-theme-btn');
      themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playClick();
          themeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.theme = btn.dataset.theme;
          this.updateVisualStage();
        });
      });

      // Category Selector
      const catSelect = this.container.querySelector('.hm-category-select');
      if (catSelect) {
        catSelect.addEventListener('change', (e) => {
          this.category = e.target.value;
          this.startNewRound();
        });
      }

      // Solve for Bonus Modal Trigger
      const solveBtn = this.container.querySelector('#hm-btn-solve-modal');
      const solveModal = this.container.querySelector('#hm-solve-modal');
      const solveInput = this.container.querySelector('#hm-solve-input');
      const solveCancel = this.container.querySelector('#hm-btn-solve-cancel');
      const solveSubmit = this.container.querySelector('#hm-btn-solve-submit');

      if (solveBtn && solveModal && solveInput) {
        solveBtn.addEventListener('click', () => {
          if (this.isGameOver) return;
          this.audio.playClick();
          solveInput.value = '';
          solveModal.classList.add('active');
          setTimeout(() => solveInput.focus(), 100);
        });

        if (solveCancel) {
          solveCancel.addEventListener('click', () => {
            solveModal.classList.remove('active');
          });
        }

        if (solveSubmit) {
          solveSubmit.addEventListener('click', () => {
            this.handleSolveAttempt(solveInput.value.trim());
            solveModal.classList.remove('active');
          });
        }

        solveInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            this.handleSolveAttempt(solveInput.value.trim());
            solveModal.classList.remove('active');
          } else if (e.key === 'Escape') {
            solveModal.classList.remove('active');
          }
        });
      }

      // Clue Voice Pronunciation
      const speakBtn = this.container.querySelector('#hm-btn-speak-clue');
      if (speakBtn) {
        speakBtn.addEventListener('click', () => {
          this.speakWord();
        });
      }

      // Fullscreen Toggle
      const fsBtn = this.container.querySelector('.hm-btn-fullscreen-toggle');
      if (fsBtn) {
        fsBtn.addEventListener('click', () => {
          this.toggleFullscreen();
        });
      }

      this.boundFsChange = () => {
        const mainBox = this.container.querySelector('#hm-main-box');
        if (document.fullscreenElement) {
          if (mainBox) mainBox.classList.add('is-fullscreen');
          if (fsBtn) fsBtn.innerHTML = '<span>⛶</span> ចាកចេញ (Exit Fullscreen)';
        } else {
          if (mainBox) mainBox.classList.remove('is-fullscreen');
          if (fsBtn) fsBtn.innerHTML = '<span>⛶</span> ពេញអេក្រង់ (Full Screen)';
        }
      };
      document.addEventListener('fullscreenchange', this.boundFsChange);

      // Participant Join Dialog
      const partModal = this.container.querySelector('#hm-participant-welcome-modal');
      const teamChoiceBtns = this.container.querySelectorAll('.hm-team-choice-btn');
      const joinBtn = this.container.querySelector('#hm-btn-participant-join');
      let selectedTeam = 'lion';

      teamChoiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playClick();
          teamChoiceBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          selectedTeam = btn.dataset.team;
        });
      });

      if (joinBtn && partModal) {
        joinBtn.addEventListener('click', () => {
          this.audio.playBonusSolve();
          partModal.classList.remove('active');
          this.setGameMode('team');
          this.activeTeamIdx = this.teamKeys.indexOf(selectedTeam) !== -1 ? this.teamKeys.indexOf(selectedTeam) : 0;
          this.updateStatusBanner();
          this.updateScoreboards();
        });
      }

      // Physical Keyboard Listener
      window.removeEventListener('keydown', this.boundKeyHandler);
      window.addEventListener('keydown', this.boundKeyHandler);
    }

    toggleFullscreen() {
      const mainBox = this.container.querySelector('#hm-main-box') || this.container;
      const fsBtn = this.container.querySelector('.hm-btn-fullscreen-toggle');

      if (!document.fullscreenElement && !mainBox.classList.contains('is-fullscreen')) {
        if (mainBox.requestFullscreen) {
          mainBox.requestFullscreen().catch(() => {
            mainBox.classList.toggle('is-fullscreen');
          });
        } else {
          mainBox.classList.toggle('is-fullscreen');
        }
        if (fsBtn) fsBtn.innerHTML = '<span>⛶</span> ចាកចេញ (Exit Fullscreen)';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
        mainBox.classList.remove('is-fullscreen');
        if (fsBtn) fsBtn.innerHTML = '<span>⛶</span> ពេញអេក្រង់ (Full Screen)';
      }
    }

    triggerModeEntranceSplash(mode, isFirstLoad = false) {
      const splash = this.container.querySelector('#hm-entrance-splash-screen');
      if (!splash) return;

      const icon = splash.querySelector('#hm-splash-icon');
      const tag = splash.querySelector('#hm-splash-tag');
      const title = splash.querySelector('#hm-splash-title');
      const desc = splash.querySelector('#hm-splash-desc');
      const rules = splash.querySelector('#hm-splash-rules');

      if (mode === 'solo') {
        if (icon) {
          icon.textContent = '👤';
          icon.style.background = 'linear-gradient(135deg, #0284c7, #38bdf8)';
        }
        if (tag) {
          tag.textContent = 'SOLO PRACTICE • AT OWN PACE';
          tag.style.background = 'rgba(56, 189, 248, 0.2)';
          tag.style.color = '#38bdf8';
        }
        if (title) title.textContent = 'លេងម្នាក់ឯងតាមដំណើរផ្ទាល់ខ្លួន';
        if (desc) desc.textContent = 'ពង្រីកវាក្យសព្ទអង់គ្លេសថ្នាក់វិទ្យាល័យ និងស្វែងយល់អត្ថន័យជាភាសាខ្មែរដោយគ្មានសម្ពាធ!';
        if (rules) {
          rules.innerHTML = `
            <div class="hm-splash-rule-item"><span>🎯</span> <span><strong>Score Per Letter:</strong> ទទួលបាន 1 pt រាល់ពេលអក្សរដែលទាយបង្ហាញលើក្តារ</span></div>
            <div class="hm-splash-rule-item"><span>🔥</span> <span><strong>The Streak Mechanic:</strong> ទាយត្រូវជាប់ៗគ្នាដើម្បីបង្កើនកម្រិត Streak Flame</span></div>
            <div class="hm-splash-rule-item"><span>⚡</span> <span><strong>Solve for Bonus:</strong> ប្រថុយទាយពាក្យពេញដើម្បីទទួលបាន +5 BONUS POINTS ភ្លាមៗ!</span></div>
            <div class="hm-splash-rule-item"><span>⛄</span> <span><strong>High-Stakes Countdown:</strong> ប្រយ័ត្នបុរសទឹកកករលាយ ក្តារឆ្លាមសមុទ្រ ឬរ៉ុក្កែតហោះចេញ!</span></div>
          `;
        }
      } else if (mode === 'pairs') {
        if (icon) {
          icon.textContent = '⚔️';
          icon.style.background = 'linear-gradient(135deg, #6366f1, #a855f7)';
        }
        if (tag) {
          tag.textContent = '1v1 PAIR RIVALRY BATTLE';
          tag.style.background = 'rgba(168, 85, 247, 0.2)';
          tag.style.color = '#c084fc';
        }
        if (title) title.textContent = 'ការប្រកួតជាគូ ១ ទល់ ១ (Pairs 1v1)';
        if (desc) desc.textContent = 'ប្រកួតទល់នឹងមិត្តរួមតុ (Pass & Play) ឬទល់នឹង Teacher Bot 🤖!';
        if (rules) {
          rules.innerHTML = `
            <div class="hm-splash-rule-item"><span>🔄</span> <span><strong>Streak Mechanic:</strong> ទាយត្រូវរក្សាវេន; ទាយខុសវេនធ្លាក់ទៅគូប្រកួតភ្លាមៗ!</span></div>
            <div class="hm-splash-rule-item"><span>🎯</span> <span><strong>Score Per Letter:</strong> អក្សរចេញប៉ុន្មានដង ទទួលបានពិន្ទុប៉ុណ្ណឹង</span></div>
            <div class="hm-splash-rule-item"><span>⚡</span> <span><strong>Solve for Bonus:</strong> ហ៊ានទាយពាក្យពេញបាន 5 ពិន្ទុបន្ថែម និងឈ្នះជុំភ្លាមៗ!</span></div>
            <div class="hm-splash-rule-item"><span>🔵</span> <span><strong>Player 1 (Blue) vs Player 2 (Purple)</strong> ប្រជែងដណ្តើមពានរង្វាន់!</span></div>
          `;
        }
      } else {
        if (icon) {
          icon.textContent = '🌐';
          icon.style.background = 'linear-gradient(135deg, #f59e0b, #ef4444)';
        }
        if (tag) {
          tag.textContent = 'CLASSROOM MULTIPLAYER QR ROOM';
          tag.style.background = 'rgba(245, 158, 11, 0.2)';
          tag.style.color = '#f59e0b';
        }
        if (title) title.textContent = 'សង្វៀនប្រកួតជាក្រុមតាម QR Code & Link';
        if (desc) desc.textContent = 'សិស្សអាចស្កេន QR Code ឬបើក Link ដើម្បីចូលរួមប្រកួតជាក្រុមក្នុងបន្ទប់រៀន!';
        if (rules) {
          rules.innerHTML = `
            <div class="hm-splash-rule-item"><span>🦁🦅🐉</span> <span><strong>Teams:</strong> ក្រុមតោ (Lion) • ក្រុមឥន្ទ្រី (Eagle) • ក្រុមនាគ (Dragon)</span></div>
            <div class="hm-splash-rule-item"><span>📲</span> <span><strong>QR Code & Link:</strong> ស្កេនចូលលេងភ្លាមៗពីទូរសព្ទ ថេប្លេត ឬកុំព្យូទ័រ Lab</span></div>
            <div class="hm-splash-rule-item"><span>🔥</span> <span><strong>Streak Turn Passes:</strong> ក្រុមណាទាយត្រូវ រក្សាវេន; ទាយខុសវេនធ្លាក់ទៅក្រុមបន្ទាប់</span></div>
            <div class="hm-splash-rule-item"><span>🏆</span> <span><strong>Team Leaderboard:</strong> ពិន្ទុបូកសរុប និង Sync ជាក់ស្តែងលើអេក្រង់ធំ!</span></div>
          `;
        }
      }

      splash.classList.add('active');
      this.audio.playBonusSolve();

      if (this.splashTimeout) clearTimeout(this.splashTimeout);
      this.splashTimeout = setTimeout(() => {
        splash.classList.remove('active');
      }, 2400);

      const enterBtn = splash.querySelector('#hm-btn-enter-arena');
      if (enterBtn) {
        enterBtn.onclick = () => {
          if (this.splashTimeout) clearTimeout(this.splashTimeout);
          splash.classList.remove('active');
        };
      }
    }

    handleKeyDown(e) {
      // Don't intercept if typing in solve input or other inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (this.isGameOver) return;

      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        this.guessLetter(key);
      }
    }

    setGameMode(mode) {
      this.gameMode = mode;
      const modeTabs = this.container.querySelectorAll('.hm-mode-tab');
      modeTabs.forEach(t => t.classList.toggle('active', t.dataset.mode === mode));

      const groupArea = this.container.querySelector('#hm-group-area');
      if (groupArea) {
        groupArea.style.display = mode === 'team' ? 'block' : 'none';
        if (mode === 'team') this.renderGroupHub(groupArea);
      }

      this.streak = 0;
      this.startNewRound();
      // Show full display entrance splash whenever mode changes!
      this.triggerModeEntranceSplash(mode, false);
    }

    // ========================================================================
    // ROUND LIFECYCLE & WORD SELECTION
    // ========================================================================
    startNewRound() {
      // Filter words by category
      let pool = HANGMAN_WORDS;
      if (this.category !== 'all') {
        pool = HANGMAN_WORDS.filter(w => w.cat === this.category);
        if (pool.length === 0) pool = HANGMAN_WORDS;
      }

      const randomWord = pool[Math.floor(Math.random() * pool.length)];
      this.currentWordObj = randomWord;
      this.targetWord = randomWord.word.toUpperCase();
      this.guessedLetters.clear();
      this.mistakes = 0;
      this.isGameOver = false;
      this.isVictory = false;

      // Update UI components
      this.renderClueCard();
      this.renderWordTiles();
      this.renderVirtualKeyboard();
      this.updateVisualStage();
      this.updateStatusBanner();
      this.updateScoreboards();

      // Broadcast new round state if in room mode
      this.broadcastState('NEW_ROUND');
    }

    renderClueCard() {
      const posBadge = this.container.querySelector('#hm-word-pos');
      const clueText = this.container.querySelector('#hm-word-clue');
      if (posBadge && clueText && this.currentWordObj) {
        posBadge.textContent = this.currentWordObj.pos.toUpperCase();
        clueText.innerHTML = `
          <strong>${this.currentWordObj.km}</strong> — ${this.currentWordObj.clue}
        `;
      }
    }

    renderWordTiles(highlightBonus = false) {
      const row = this.container.querySelector('#hm-word-tiles-row');
      if (!row) return;

      row.innerHTML = '';
      for (let i = 0; i < this.targetWord.length; i++) {
        const char = this.targetWord[i];
        const tile = document.createElement('div');

        if (char === ' ' || char === '-') {
          tile.className = 'hm-letter-tile space';
          tile.textContent = char;
        } else if (this.guessedLetters.has(char) || this.isGameOver) {
          tile.className = 'hm-letter-tile revealed' + (highlightBonus ? ' bonus-revealed' : '');
          tile.textContent = char;
          if (this.isGameOver && !this.isVictory && !this.guessedLetters.has(char)) {
            tile.style.color = '#ef4444';
            tile.style.borderColor = '#ef4444';
          }
        } else {
          tile.className = 'hm-letter-tile';
          tile.textContent = '';
        }
        row.appendChild(tile);
      }
    }

    renderVirtualKeyboard() {
      const kbContainer = this.container.querySelector('#hm-virtual-keyboard');
      if (!kbContainer) return;

      const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
      ];

      kbContainer.innerHTML = '';
      rows.forEach(rowList => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'hm-kb-row';

        rowList.forEach(letter => {
          const btn = document.createElement('button');
          btn.className = 'hm-key';
          btn.textContent = letter;
          btn.dataset.letter = letter;

          if (this.guessedLetters.has(letter)) {
            btn.disabled = true;
            if (this.targetWord.includes(letter)) {
              btn.classList.add('correct');
              // Count occurrences
              const count = (this.targetWord.match(new RegExp(letter, 'g')) || []).length;
              if (count > 1) {
                const countBadge = document.createElement('span');
                countBadge.className = 'hm-key-count';
                countBadge.textContent = count;
                btn.appendChild(countBadge);
              }
            } else {
              btn.classList.add('wrong');
            }
          }

          btn.addEventListener('click', () => {
            this.guessLetter(letter);
          });

          rowDiv.appendChild(btn);
        });
        kbContainer.appendChild(rowDiv);
      });
    }

    // ========================================================================
    // GUESSING MECHANICS (Score-Per-Letter, Streak Turns, Mistake Penalties)
    // ========================================================================
    guessLetter(letter) {
      if (this.isGameOver || this.guessedLetters.has(letter)) return;

      this.guessedLetters.add(letter);
      const occurrences = (this.targetWord.match(new RegExp(letter, 'g')) || []).length;

      if (occurrences > 0) {
        // --- SCORE PER LETTER MECHANIC ---
        // "Earn 1 point for every time your guessed letter appears on the board."
        const pointsEarned = occurrences * 1;
        this.awardPoints(pointsEarned);
        this.streak++;
        this.audio.playLetterHit(occurrences, this.streak);
        this.showFloatingScore(`+${pointsEarned} PTS`);

        // --- THE STREAK MECHANIC (CORRECT GUESS) ---
        // "Guess correctly to keep your turn;"
        // (In Pair and Team modes, player/team keeps their turn!)

        // Check if word is fully revealed
        const isSolved = this.targetWord.split('').every(ch => ch === ' ' || ch === '-' || this.guessedLetters.has(ch));
        if (isSolved) {
          this.handleVictory(false);
          return;
        }
      } else {
        // --- THE STREAK MECHANIC (WRONG GUESS) ---
        // "guess wrong, and the turn passes to your rivals."
        this.streak = 0;
        this.mistakes++;
        this.audio.playLetterMiss();
        this.audio.playThemeSound(this.theme, this.mistakes);

        // Turn passes to rivals
        this.passTurnToRival('wrong_guess');

        // Check for Game Over (6 strikes)
        if (this.mistakes >= this.maxMistakes) {
          this.handleDefeat();
          return;
        }
      }

      this.renderWordTiles();
      this.renderVirtualKeyboard();
      this.updateVisualStage();
      this.updateStatusBanner();
      this.updateScoreboards();

      this.broadcastState('GUESS', { letter, occurrences });
    }

    // ========================================================================
    // SOLVE FOR BONUS (+5 MASSIVE POINTS RISK GUESS)
    // ========================================================================
    handleSolveAttempt(inputWord) {
      if (this.isGameOver || !inputWord) return;

      const cleanInput = inputWord.toUpperCase().replace(/[^A-Z]/g, '');
      const cleanTarget = this.targetWord.replace(/[^A-Z]/g, '');

      if (cleanInput === cleanTarget) {
        // --- SOLVE FOR BONUS: SUCCESS! ---
        // Calculate remaining unrevealed letters
        let unrevealedCount = 0;
        for (let ch of cleanTarget) {
          if (!this.guessedLetters.has(ch)) unrevealedCount++;
        }

        const bonusPoints = 5;
        const totalAward = unrevealedCount + bonusPoints;

        // Reveal all letters
        for (let ch of cleanTarget) this.guessedLetters.add(ch);

        this.awardPoints(totalAward);
        this.streak += 2;
        this.audio.playBonusSolve();
        this.showFloatingScore(`+${totalAward} BONUS PTS!`);

        this.handleVictory(true, totalAward);
      } else {
        // --- SOLVE FOR BONUS: WRONG GUESS (PENALTY) ---
        this.streak = 0;
        this.mistakes++;
        this.audio.playLetterMiss();
        this.audio.playThemeSound(this.theme, this.mistakes);
        this.showFloatingScore(`MISS! STRIKE ADDED`);

        this.passTurnToRival('solve_miss');

        if (this.mistakes >= this.maxMistakes) {
          this.handleDefeat();
          return;
        }

        this.renderWordTiles();
        this.renderVirtualKeyboard();
        this.updateVisualStage();
        this.updateStatusBanner();
        this.updateScoreboards();
      }

      this.broadcastState('SOLVE_ATTEMPT', { cleanInput });
    }

    passTurnToRival(reason = '') {
      if (this.gameMode === 'pairs') {
        const prevPlayer = this.activePairPlayer;
        this.activePairPlayer = this.activePairPlayer === 1 ? 2 : 1;
        
        // If playing vs Bot, trigger simulated AI turn!
        if (this.pairType === 'vs_bot' && this.activePairPlayer === 2) {
          setTimeout(() => this.triggerBotTurn(), 900);
        }
      } else if (this.gameMode === 'team') {
        this.activeTeamIdx = (this.activeTeamIdx + 1) % this.teamKeys.length;
      }
    }

    triggerBotTurn() {
      if (this.isGameOver || this.activePairPlayer !== 2) return;

      // Smart AI chooses unguessed letter with preference to vowels/common English letters
      const commonOrder = 'ETAOINSHRDLCUMWFGYPBVKJXQZ';
      let picked = '';
      for (let ch of commonOrder) {
        if (!this.guessedLetters.has(ch)) {
          picked = ch;
          break;
        }
      }

      if (picked) {
        this.guessLetter(picked);
      }
    }

    awardPoints(pts) {
      if (this.gameMode === 'solo') {
        this.currentSoloScore += pts;
        if (this.currentSoloScore > this.soloScore) {
          this.soloScore = this.currentSoloScore;
          localStorage.setItem('hm_high_score', this.soloScore.toString());
        }
      } else if (this.gameMode === 'pairs') {
        if (this.activePairPlayer === 1) this.p1Score += pts;
        else this.p2Score += pts;
      } else if (this.gameMode === 'team') {
        const teamKey = this.teamKeys[this.activeTeamIdx];
        this.teams[teamKey].score += pts;
      }
    }

    showFloatingScore(text) {
      const arena = this.container.querySelector('.hm-arena');
      if (!arena) return;

      const floatEl = document.createElement('div');
      floatEl.className = 'hm-float-score';
      floatEl.textContent = text;
      floatEl.style.left = '50%';
      floatEl.style.top = '35%';
      arena.appendChild(floatEl);

      setTimeout(() => floatEl.remove(), 1200);
    }

    // ========================================================================
    // VISUAL STAGE & THEME RENDERING
    // ========================================================================
    updateVisualStage() {
      const svgContainer = this.container.querySelector('#hm-svg-container');
      const themeTitle = this.container.querySelector('#hm-theme-name-display');
      const mistakesCounter = this.container.querySelector('#hm-mistakes-counter');
      const gaugeText = this.container.querySelector('#hm-gauge-status-text');
      const chancesLeftText = this.container.querySelector('#hm-strikes-left-text');
      const fillBar = this.container.querySelector('#hm-gauge-bar-fill');
      const dots = this.container.querySelectorAll('.hm-strike-dot');

      if (!svgContainer) return;

      // Render Theme SVG
      let svgContent = '';
      if (this.theme === 'snowman') {
        svgContent = HMThemes.renderSnowman(this.mistakes);
        if (themeTitle) themeTitle.textContent = '⛄ The Melting Snowman (បុរសទឹកកក)';
        const integrity = Math.max(0, Math.round(((6 - this.mistakes) / 6) * 100));
        if (gaugeText) gaugeText.textContent = `Snowman Integrity: ${integrity}%`;
      } else if (this.theme === 'shark') {
        svgContent = HMThemes.renderShark(this.mistakes);
        if (themeTitle) themeTitle.textContent = '🦈 The Shark Plank (ក្តារបន្ទះឆ្លាម)';
        const stepsLeft = Math.max(0, 6 - this.mistakes);
        if (gaugeText) gaugeText.textContent = `Plank Distance: ${stepsLeft} Steps to Shark Waters`;
      } else {
        svgContent = HMThemes.renderRocket(this.mistakes);
        if (themeTitle) themeTitle.textContent = '🚀 Rocket Blast-Off (រ៉ុក្កែតអវកាស)';
        const countdown = Math.max(0, 6 - this.mistakes);
        if (gaugeText) gaugeText.textContent = `Launch Countdown: T-minus 0${countdown}`;
      }

      svgContainer.innerHTML = svgContent;

      if (mistakesCounter) mistakesCounter.textContent = `${this.mistakes} / 6 Strikes`;
      if (chancesLeftText) chancesLeftText.textContent = `${Math.max(0, 6 - this.mistakes)} chances left`;

      // Fill Bar
      if (fillBar) {
        const remainingPercent = Math.max(0, ((6 - this.mistakes) / 6) * 100);
        fillBar.style.width = remainingPercent + '%';
        if (remainingPercent > 50) {
          fillBar.style.background = '#10b981';
        } else if (remainingPercent > 20) {
          fillBar.style.background = '#f59e0b';
        } else {
          fillBar.style.background = '#ef4444';
        }
      }

      // Strike Dots
      dots.forEach((dot, idx) => {
        dot.classList.toggle('filled', idx < this.mistakes);
      });
    }

    updateStatusBanner() {
      const turnBox = this.container.querySelector('#hm-turn-indicator-box');
      const streakBadge = this.container.querySelector('#hm-streak-badge');
      const streakText = this.container.querySelector('#hm-streak-text');
      const scoreVal = this.container.querySelector('#hm-active-score-val');

      if (!turnBox) return;

      if (this.gameMode === 'solo') {
        turnBox.innerHTML = `
          <span style="color:var(--accent-cyan); font-weight:800;">👤 កំពុងលេង៖</span>
          <span>លេងតាមដំណើររបស់អ្នក (Play at Your Own Pace)</span>
        `;
        if (scoreVal) scoreVal.textContent = this.currentSoloScore;
      } else if (this.gameMode === 'pairs') {
        const isP1 = this.activePairPlayer === 1;
        const pName = isP1 ? 'Player 1 (Blue) 🔵' : (this.pairType === 'vs_bot' ? 'Teacher Bot 🤖' : 'Player 2 (Purple) 🟣');
        const badgeClass = isP1 ? 'hm-turn-p1' : 'hm-turn-p2';

        turnBox.innerHTML = `
          <span>👉 វេនរបស់៖</span>
          <span class="hm-turn-badge ${badgeClass}">${pName}</span>
          <span style="font-size:0.8rem; color:var(--text-secondary);">(Guess correct to keep turn!)</span>
        `;
        if (scoreVal) scoreVal.textContent = isP1 ? this.p1Score : this.p2Score;
      } else if (this.gameMode === 'team') {
        const activeTeamKey = this.teamKeys[this.activeTeamIdx];
        const teamObj = this.teams[activeTeamKey];
        const badgeClass = `hm-turn-team-${activeTeamKey}`;

        turnBox.innerHTML = `
          <span>👉 វេនក្រុម៖</span>
          <span class="hm-turn-badge ${badgeClass}">${teamObj.name}</span>
          <span style="font-size:0.8rem; color:var(--text-secondary);">(Keep turn on streak!)</span>
        `;
        if (scoreVal) scoreVal.textContent = teamObj.score;
      }

      // Streak flame
      if (streakText && streakBadge) {
        streakText.textContent = `Streak: ${this.streak}`;
        streakBadge.classList.toggle('fire', this.streak >= 3);
      }
    }

    updateScoreboards() {
      const footerBar = this.container.querySelector('#hm-scoreboard-footer');
      if (!footerBar) return;

      if (this.gameMode === 'solo') {
        footerBar.innerHTML = `
          <div class="hm-player-card active-turn">
            <div class="hm-player-name">ពិន្ទុជុំបច្ចុប្បន្ន (Round Score)</div>
            <div class="hm-player-score" style="color:var(--accent-gold);">${this.currentSoloScore} pts</div>
          </div>
          <div class="hm-player-card">
            <div class="hm-player-name">ពិន្ទុខ្ពស់បំផុត (High Score) 👑</div>
            <div class="hm-player-score" style="color:var(--accent-cyan);">${this.soloScore} pts</div>
          </div>
          <div class="hm-player-card">
            <div class="hm-player-name">ប្រធានបទ (Subject)</div>
            <div style="font-size:1.05rem; font-weight:800; color:#38bdf8;">
              ${this.currentWordObj ? this.currentWordObj.cat.toUpperCase() : 'CORE'}
            </div>
          </div>
        `;
      } else if (this.gameMode === 'pairs') {
        footerBar.innerHTML = `
          <div class="hm-player-card ${this.activePairPlayer === 1 ? 'active-turn' : ''}">
            <div class="hm-player-name">
              <span>Player 1 🔵</span>
              ${this.activePairPlayer === 1 ? '<span class="badge-mini" style="background:#0284c7; color:#fff;">TURN</span>' : ''}
            </div>
            <div class="hm-player-score" style="color:#38bdf8;">${this.p1Score} pts</div>
          </div>
          <div class="hm-player-card ${this.activePairPlayer === 2 ? 'active-turn' : ''}">
            <div class="hm-player-name">
              <span>${this.pairType === 'vs_bot' ? 'Teacher Bot 🤖' : 'Player 2 🟣'}</span>
              ${this.activePairPlayer === 2 ? '<span class="badge-mini" style="background:#a855f7; color:#fff;">TURN</span>' : ''}
            </div>
            <div class="hm-player-score" style="color:#c084fc;">${this.p2Score} pts</div>
          </div>
          <div class="hm-player-card" style="display:flex; justify-content:center; align-items:center;">
            <button class="hm-tool-btn hm-btn-toggle-pair-type">
              ${this.pairType === 'pass_play' ? '🔄 ផ្លាស់ប្តូរទៅ៖ Vs Bot 🤖' : '🔄 ផ្លាស់ប្តូរទៅ៖ Pass & Play 👥'}
            </button>
          </div>
        `;

        const toggleBtn = footerBar.querySelector('.hm-btn-toggle-pair-type');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            this.pairType = this.pairType === 'pass_play' ? 'vs_bot' : 'pass_play';
            this.updateScoreboards();
            this.updateStatusBanner();
          });
        }
      } else if (this.gameMode === 'team') {
        footerBar.innerHTML = `
          <div class="hm-player-card ${this.activeTeamIdx === 0 ? 'active-turn' : ''}">
            <div class="hm-player-name">
              <span>🦁 ក្រុមតោ (Lion)</span>
              ${this.activeTeamIdx === 0 ? '<span class="badge-mini" style="background:#f59e0b; color:#000;">TURN</span>' : ''}
            </div>
            <div class="hm-player-score" style="color:#f59e0b;">${this.teams.lion.score} pts</div>
          </div>
          <div class="hm-player-card ${this.activeTeamIdx === 1 ? 'active-turn' : ''}">
            <div class="hm-player-name">
              <span>🦅 ក្រុមឥន្ទ្រី (Eagle)</span>
              ${this.activeTeamIdx === 1 ? '<span class="badge-mini" style="background:#38bdf8; color:#000;">TURN</span>' : ''}
            </div>
            <div class="hm-player-score" style="color:#38bdf8;">${this.teams.eagle.score} pts</div>
          </div>
          <div class="hm-player-card ${this.activeTeamIdx === 2 ? 'active-turn' : ''}">
            <div class="hm-player-name">
              <span>🐉 ក្រុមនាគ (Dragon)</span>
              ${this.activeTeamIdx === 2 ? '<span class="badge-mini" style="background:#10b981; color:#fff;">TURN</span>' : ''}
            </div>
            <div class="hm-player-score" style="color:#10b981;">${this.teams.dragon.score} pts</div>
          </div>
        `;
      }
    }

    // ========================================================================
    // MULTIPLAYER ROOM & QR CODE GENERATION
    // ========================================================================
    renderGroupHub(container) {
      const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
      const joinUrl = window.location.origin + basePath + 'hangman.html?room=' + this.roomCode;
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(joinUrl)}`;

      container.innerHTML = `
        <div class="hm-group-hub">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <h4 style="margin:0; font-size:1.1rem; color:var(--accent-cyan);">
                🌐 បន្ទប់លេងជាក្រុមតាម QR Code & Link (Classroom Team Hub)
              </h4>
              <p style="margin:3px 0 0; font-size:0.82rem; color:var(--text-secondary);">
                សិស្សអាចស្កេន QR Code ឬចម្លង Link ចូលរួមបន្ទប់តែមួយដើម្បីប្រកួតជាក្រុមជាមួយមិត្តភក្តិ!
              </p>
            </div>
            <div style="font-family:monospace; font-size:1.15rem; font-weight:800; background:var(--bg-primary); padding:6px 14px; border-radius:8px; border:1px solid var(--border-color);">
              បន្ទប់៖ <span style="color:var(--accent-gold);">${this.roomCode}</span>
            </div>
          </div>

          <div class="hm-group-body">
            <div class="hm-qr-card">
              <img class="hm-qr-img" src="${qrApiUrl}" alt="Scan QR to Join Hangman">
              <span class="hm-room-badge">${this.roomCode}</span>
            </div>

            <div class="hm-share-tools">
              <div class="hm-copy-row">
                <input type="text" class="hm-link-input" readonly value="${joinUrl}">
                <button class="hm-btn-copy" id="hm-btn-copy-link">📋 ចម្លង Link</button>
              </div>

              <div style="font-size:0.82rem; color:var(--text-secondary); line-height:1.5;">
                ✨ <strong>គន្លឹះបង្រៀនក្នុងថ្នាក់៖</strong> បង្ហាញ QR Code លើផ្ទាំង Projector ក្នុងបន្ទប់កុំព្យូទ័រ ដើម្បីឱ្យសិស្សចូលរួមប្រកួតជាក្រុមតោ ឥន្ទ្រី និងនាគ។ ក្រុមដែលទាយត្រូវនឹងរក្សាវេន; ទាយខុសវេននឹងធ្លាក់ទៅក្រុមបន្ទាប់!
              </div>
            </div>
          </div>
        </div>
      `;

      const copyBtn = container.querySelector('#hm-btn-copy-link');
      const input = container.querySelector('.hm-link-input');
      if (copyBtn && input) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(input.value).then(() => {
            copyBtn.textContent = '✅ បានចម្លង!';
            setTimeout(() => { copyBtn.textContent = '📋 ចម្លង Link'; }, 2500);
          });
        });
      }
    }

    broadcastState(type, payload = {}) {
      if (!this.channel) return;
      try {
        this.channel.postMessage({
          type,
          room: this.roomCode,
          mistakes: this.mistakes,
          streak: this.streak,
          activePairPlayer: this.activePairPlayer,
          activeTeamIdx: this.activeTeamIdx,
          p1Score: this.p1Score,
          p2Score: this.p2Score,
          teams: this.teams,
          payload
        });
      } catch (e) {
        console.warn('Broadcast error', e);
      }
    }

    handleRoomMessage(event) {
      const data = event.data;
      if (!data || data.room !== this.roomCode) return;

      if (data.type === 'NEW_ROUND') {
        this.startNewRound();
      } else if (data.type === 'GUESS') {
        if (data.payload?.letter && !this.guessedLetters.has(data.payload.letter)) {
          this.guessLetter(data.payload.letter);
        }
      }
    }

    // ========================================================================
    // VICTORY & DEFEAT HANDLING
    // ========================================================================
    handleVictory(isBonusSolve = false, bonusPoints = 5) {
      this.isGameOver = true;
      this.isVictory = true;

      this.renderWordTiles(isBonusSolve);
      this.renderVirtualKeyboard();

      let winnerTitle = '🎉 អបអរសាទរ! អ្នកបានរកឃើញពាក្យត្រឹមត្រូវ!';
      if (isBonusSolve) {
        winnerTitle = `⚡ GENIUS SOLVE! +${bonusPoints} BONUS POINTS!`;
      } else if (this.gameMode === 'pairs') {
        const winner = this.p1Score > this.p2Score ? 'Player 1 🔵' : (this.p1Score < this.p2Score ? (this.pairType === 'vs_bot' ? 'Teacher Bot 🤖' : 'Player 2 🟣') : 'ស្មើគ្នា (Draw)!');
        winnerTitle = `🏆 ជ័យជម្នះបានទៅលើ៖ ${winner}`;
      } else if (this.gameMode === 'team') {
        const topTeam = this.teamKeys.slice().sort((a, b) => this.teams[b].score - this.teams[a].score)[0];
        winnerTitle = `🏆 ក្រុមនាំមុខ៖ ${this.teams[topTeam].name}`;
      }

      this.showGameOverModal({
        icon: '🏆',
        title: winnerTitle,
        desc: `អ្នកបានស្វែងយល់ពាក្យ <strong>${this.targetWord}</strong> (${this.currentWordObj.km}) យ៉ាងស្ទាត់ជំនាញ!`,
        isWin: true
      });
    }

    handleDefeat() {
      this.isGameOver = true;
      this.isVictory = false;

      this.renderWordTiles();
      this.renderVirtualKeyboard();

      let defeatTitle = '💀 GAME OVER!';
      if (this.theme === 'snowman') defeatTitle = '⛄ បុរសទឹកកករលាយអស់ហើយ!';
      else if (this.theme === 'shark') defeatTitle = '🦈 ធ្លាក់ចូលទឹកក្បែរឆ្លាមហើយ (Walked the Plank)!';
      else defeatTitle = '🚀 រ៉ុក្កែតបានបាញ់បង្ហោះទៅបាត់ហើយ (Liftoff)!';

      this.showGameOverModal({
        icon: '💥',
        title: defeatTitle,
        desc: `ពាក្យត្រឹមត្រូវគឺ <strong>${this.targetWord}</strong> មានន័យថា <strong>${this.currentWordObj.km}</strong>។ ព្យាយាមម្តងទៀតនៅជុំបន្ទាប់!`,
        isWin: false
      });
    }

    showGameOverModal({ icon, title, desc, isWin }) {
      const modal = this.container.querySelector('#hm-gameover-modal');
      const card = this.container.querySelector('#hm-gameover-card');
      if (!modal || !card) return;

      card.innerHTML = `
        <div class="hm-gameover-icon">${icon}</div>
        <h3 style="font-size:1.35rem; margin:0; color:${isWin ? 'var(--accent-cyan)' : '#ef4444'};">${title}</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">${desc}</p>

        <div class="hm-word-reveal-box">
          <div style="font-size:0.78rem; text-transform:uppercase; color:var(--text-secondary); font-weight:700;">ពាក្យ និងអត្ថន័យ៖</div>
          <div style="display:flex; justify-content:center; align-items:center; gap:8px; margin:4px 0;">
            <span class="hm-revealed-word-text">${this.targetWord}</span>
            <button class="hm-speech-btn" id="hm-modal-speak-btn" title="ស្តាប់ការបញ្ចេញសំឡេង">🔊</button>
          </div>
          <div style="font-size:0.95rem; color:var(--accent-gold); font-weight:800;">
            ${this.currentWordObj.km} (${this.currentWordObj.pos})
          </div>
          <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">
            ${this.currentWordObj.clue}
          </div>
        </div>

        <div class="hm-modal-buttons">
          <button class="hm-btn-modal-cancel" id="hm-btn-close-gameover">មើលក្តារលេង (Review Board)</button>
          <button class="hm-btn-modal-primary" id="hm-btn-next-word-gameover">លេងពាក្យបន្ទាប់ (Next Word) &rarr;</button>
        </div>
      `;

      modal.classList.add('active');

      const speakBtn = card.querySelector('#hm-modal-speak-btn');
      if (speakBtn) speakBtn.addEventListener('click', () => this.speakWord());

      const closeBtn = card.querySelector('#hm-btn-close-gameover');
      if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

      const nextBtn = card.querySelector('#hm-btn-next-word-gameover');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          modal.classList.remove('active');
          this.startNewRound();
        });
      }
    }

    speakWord() {
      if (!this.targetWord || !('speechSynthesis' in window)) return;
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(this.targetWord.toLowerCase());
        utter.lang = 'en-US';
        utter.rate = 0.85;
        window.speechSynthesis.speak(utter);
      } catch (e) {
        console.warn('Speech error', e);
      }
    }
  }

  // ==========================================================================
  // 5. GLOBAL INITIALIZERS & MODAL RUNNERS
  // ==========================================================================
  let activeHangmanInstance = null;

  window.initHangmanGame = function(containerElement, options = {}) {
    if (activeHangmanInstance) {
      activeHangmanInstance.destroy();
    }
    activeHangmanInstance = new HangmanGame(containerElement, options);
    activeHangmanInstance.init();
    return activeHangmanInstance;
  };

  window.launchHangmanInModal = function(options = {}) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    if (!modal || !modalBody) return;

    if (modalTitle) {
      modalTitle.innerHTML = `
        <span style="display:inline-flex; align-items:center; gap:8px;">
          <span>🎪</span>
          <span>ល្បែងសិក្សា៖ Hangman (High-Stakes Countdown)</span>
          <span class="badge-mini" style="background:#ec4899; color:#fff; font-weight:800;">Edu Game</span>
        </span>
      `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook close button cleanup
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      const origClose = closeBtn.onclick;
      closeBtn.onclick = function() {
        if (activeHangmanInstance) activeHangmanInstance.destroy();
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (origClose) origClose();
      };
    }

    window.initHangmanGame(modalBody, options);
  };

})();
