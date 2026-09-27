/**
 * Main Application Logic
 * Teacher Ouch Ol Portfolio
 * English & Computer Science Educator - Hun Sen Svay Thom High School
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  if (typeof initLanguage === 'function') {
    initLanguage();
  }

  initTheme();
  initTypingEffect();
  initMobileMenu();
  initScrollEffects();
  initStatsCounter();
  initProjectFilter();
  initModals();
  initContactForm();
  initEnglishCampHero();
  initELearnInteractions();
});

/* ==========================================================================
   THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('ouch_ol_theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('ouch_ol_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      themeIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  }
}

/* ==========================================================================
   HERO TYPING EFFECT
   ========================================================================== */
let typingWords = [
  "គ្រូបង្រៀនភាសាអង់គ្លេស & English Camp Mentor 🏕️",
  "រៀននិយាយភាសាអង់គ្លេសដោយសប្បាយរីករាយ & ទំនុកចិត្ត 🗣️",
  "ស្វែងយល់វិទ្យាសាស្ត្រកុំព្យូទ័រ & កូដឌីជីថល 💻",
  "បំភ្លឺផ្លូវយុវជនវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ 🌟",
  "ដំណើរផ្សងព្រេងនៃការសិក្សាសតវត្សរ៍ទី២១! 🚀"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function initTypingEffect() {
  const typingTarget = document.getElementById('typing-text');
  if (!typingTarget) return;

  function type() {
    const currentWord = typingWords[wordIndex];
    if (isDeleting) {
      charIndex--;
      typingTarget.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      typingTarget.textContent = currentWord.substring(0, charIndex);
    }

    let typeSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
      typeSpeed = 400; // Pause before typing new word
    }

    typingTimeout = setTimeout(type, typeSpeed);
  }

  type();
}

window.updateTypingWords = function(newWords) {
  if (Array.isArray(newWords) && newWords.length > 0) {
    clearTimeout(typingTimeout);
    typingWords = newWords;
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    const typingTarget = document.getElementById('typing-text');
    if (typingTarget) typingTarget.textContent = '';
    initTypingEffect();
  }
};

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navItemsWithDropdown = document.querySelectorAll('.nav-item.has-dropdown');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active');
  });

  // Mobile accordion toggle for sub-menus
  navItemsWithDropdown.forEach(item => {
    const link = item.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1080) {
          e.preventDefault();
          e.stopPropagation();
          // Toggle current dropdown, close others for clean accordion feel
          const isOpen = item.classList.contains('dropdown-open');
          navItemsWithDropdown.forEach(other => {
            if (other !== item) other.classList.remove('dropdown-open');
          });
          item.classList.toggle('dropdown-open', !isOpen);
        }
      });
    }
  });

  // Close menu when clicking sub-menu links
  const dropdownLinks = document.querySelectorAll('.dropdown-link');
  dropdownLinks.forEach(dLink => {
    dLink.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
    });
  });

  // Close menu when clicking top-level links without dropdowns
  navLinks.forEach(link => {
    if (!link.closest('.has-dropdown')) {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.classList.remove('active');
      });
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
    }
  });
}

/* ==========================================================================
   SCROLL EFFECTS (HEADER, PROGRESS BAR, FAB)
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById('site-header');
  const progressBar = document.getElementById('scroll-progress');
  const fabTop = document.getElementById('fab-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (header) {
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (fabTop) {
      if (scrollTop > 400) {
        fabTop.classList.add('visible');
      } else {
        fabTop.classList.remove('visible');
      }
    }
  });

  if (fabTop) {
    fabTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-count');
  if (statNumbers.length === 0) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.dataset.target, 10);
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              stat.textContent = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-row');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   PROJECTS FILTER SYSTEM
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   MODAL WINDOW HANDLER
   ========================================================================== */
function initModals() {
  const modalOverlay = document.getElementById('details-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body-content');
  const modalClose = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  const projectDetails = {
    proj1: {
      title: "គេហទំព័របណ្ណាល័យឌីជីថល (High School Digital Library)",
      content: `
        <div style="margin-bottom:16px;">
          <img src="image 1/photo 1.jpg" style="border-radius:12px; width:100%; height:240px; object-fit:cover;" alt="Digital Library" onerror="this.src='assets/images/teaching_activity.jpg'">
        </div>
        <h4 style="color:var(--accent-cyan); margin-bottom:8px;">គោលបំណងគម្រោង៖</h4>
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          បង្កើតឡើងដោយក្រុមសិស្សានុសិស្សថ្នាក់ទី១១ ក្រោមការបង្ហាត់បង្រៀនរបស់លោកគ្រូ អ៊ូច អុល ក្នុងបំណងជួយឱ្យសិស្សក្នុងវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ អាចស្វែងរកសៀវភៅ និងទាញយកមេរៀនជាភាសាខ្មែរ និងអង់គ្លេសតាមអនឡាញ។
        </p>
        <h4 style="color:var(--accent-gold); margin-bottom:8px;">បច្ចេកវិទ្យាប្រើប្រាស់៖</h4>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">
          <span class="skill-pill">HTML5</span>
          <span class="skill-pill">CSS3 Flexbox</span>
          <span class="skill-pill">JavaScript Search Filter</span>
          <span class="skill-pill">Responsive Design</span>
        </div>
        <p style="font-size:0.9rem; color:var(--text-muted);">🌟 ស្នាដៃនេះទទួលបានចំណាត់ថ្នាក់លេខ១ ក្នុងការតាំងពិព័រណ៍បច្ចេកវិទ្យាសាលាប្រចាំឆ្នាំ!</p>
      `
    },
    proj2: {
      title: "កម្មវិធីពាក្យគន្លឹះភាសាអង់គ្លេស (VocabMaster App)",
      content: `
        <div style="margin-bottom:16px;">
          <img src="image/group.jpg" style="border-radius:12px; width:100%; height:240px; object-fit:cover;" alt="Vocab App" onerror="this.src='assets/images/group.jpg'">
        </div>
        <h4 style="color:var(--accent-cyan); margin-bottom:8px;">លក្ខណៈពិសេស៖</h4>
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          កម្មវិធី Flashcard អន្តរកម្មសម្រាប់ទន្ទេញពាក្យគន្លឹះភាសាអង់គ្លេសប្រឡងបាក់ឌុប និងពាក្យបច្ចេកវិទ្យាកុំព្យូទ័រ ដែលមានសំឡេងបញ្ចេញសំឡេងច្បាស់ល្អ និងការធ្វើតេស្តស្វ័យប្រវត្តិ។
        </p>
        <h4 style="color:var(--accent-emerald); margin-bottom:8px;">លទ្ធផលដែលទទួលបាន៖</h4>
        <p style="color:var(--text-secondary);">
          ជួយសិស្សជាង ៤០០ នាក់ក្នុងការបង្កើនពិន្ទុភាសាអង់គ្លេសថ្នាក់ទី១២ និងជួយឱ្យសិស្សចងចាំពាក្យបច្ចេកវិទ្យាបានរហ័ស។
        </p>
      `
    },
    proj3: {
      title: "ក្លឹបជជែកដេញដោលភាសាអង់គ្លេស (Svay Thom English Debate Club)",
      content: `
        <div style="margin-bottom:16px;">
          <img src="image 1/photo 2.jpg" style="border-radius:12px; width:100%; height:240px; object-fit:cover;" alt="English Debate" onerror="this.src='image 1/photo2.jpg'">
        </div>
        <h4 style="color:var(--accent-gold); margin-bottom:8px;">សកម្មភាពក្លឹប៖</h4>
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          បង្កើតឡើងដើម្បីពង្រឹងភាពក្លាហានក្នុងការនិយាយជាសាធារណៈ (Public Speaking) និងការពិភាក្សាលើប្រធានបទសង្គម បរិស្ថាន និងបច្ចេកវិទ្យាជាភាសាអង់គ្លេស។
        </p>
        <h4 style="color:var(--accent-cyan); margin-bottom:8px;">សមិទ្ធផល៖</h4>
        <p style="color:var(--text-secondary);">
          ក្រុមសិស្សានុសិស្សតំណាងវិទ្យាល័យបានចូលរួមប្រកួតជជែកដេញដោលថ្នាក់ខេត្តសៀមរាប និងទទួលបានបទពិសោធន៍ដ៏សម្បូរបែប។
        </p>
      `
    },
    res_html: {
      title: "សៀវភៅជំនួយស្មារតី: មូលដ្ឋានគ្រឹះ HTML & CSS សម្រាប់សិស្សវិទ្យាល័យ",
      content: `
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          ឯកសារសង្ខេបកម្រាស់ ៣២ ទំព័រ ដែលចងក្រងដោយលោកគ្រូ អ៊ូច អុល បង្រៀនពីការសរសេរកូដគេហទំព័រដំបូងបង្អស់ជាភាសាខ្មែរងាយយល់ មានរូបភាព និងលំហាត់អនុវត្ត។
        </p>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:10px; margin-bottom:16px;">
          <strong>មាតិកាសំខាន់ៗ:</strong>
          <ul style="padding-left:20px; margin-top:8px; color:var(--text-secondary);">
            <li>សេចក្តីផ្តើមអំពី Internet និង Web Browser</li>
            <li>HTML Tags មូលដ្ឋាន (Headings, Paragraphs, Links, Images, Tables)</li>
            <li>CSS Styling (Colors, Fonts, Spacing, Borders)</li>
            <li>ការរៀបចំប្លង់គេហទំព័រគំរូដំបូងគេរបស់អ្នក</li>
          </ul>
        </div>
        <a href="#contact" class="btn btn-primary" onclick="closeModalWindow()" style="width:100%;">ស្នើសុំឯកសារពេញលេញតាម Telegram</a>
      `
    },
    res_grammar: {
      title: "សៀវភៅជំនួយស្មារតី: ក្បួនវេយ្យាករណ៍អង់គ្លេសត្រៀមប្រឡងបាក់ឌុប",
      content: `
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          សង្ខេបក្បួនវេយ្យាករណ៍សំខាន់ៗដែលតែងតែចេញក្នុងការប្រឡងបាក់ឌុបថ្នាក់ជាតិ (12 Tenses, Passive Voice, Conditional Sentences, Relative Clauses, Reported Speech)។
        </p>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:10px; margin-bottom:16px;">
          <strong>លក្ខណៈពិសេស:</strong>
          <ul style="padding-left:20px; margin-top:8px; color:var(--text-secondary);">
            <li>រូបមន្តសង្ខេបច្បាស់ៗងាយចាំ</li>
            <li>ឧទាហរណ៍ជាក់ស្តែងប្រៀបធៀបជាមួយភាសាខ្មែរ</li>
            <li>វិញ្ញាសាគំរូ និងគន្លឹះដោះស្រាយលំហាត់លឿន</li>
          </ul>
        </div>
        <a href="#contact" class="btn btn-primary" onclick="closeModalWindow()" style="width:100%;">ទាក់ទងលោកគ្រូដើម្បីទទួលឯកសារ</a>
      `
    },
    res_shortcuts: {
      title: "តារាងគន្លឹះ Keyboard Shortcuts សម្រាប់កុំព្យូទ័រ & កូដ",
      content: `
        <p style="color:var(--text-secondary); margin-bottom:14px;">
          តារាងផ្ទាំងកាត់ផ្លូវកាត់លើក្តារចុច (Keyboard Shortcuts) សំខាន់ៗសម្រាប់ Windows, Word, Excel, Chrome និង Code Editor ដើម្បីជួយសិស្សបង្កើនល្បឿនក្នុងការប្រើកុំព្យូទ័រ។
        </p>
        <div style="background:var(--bg-tertiary); padding:16px; border-radius:10px; margin-bottom:16px;">
          <p style="color:var(--accent-cyan); font-weight:600;">ឧទាហរណ៍៖</p>
          <p><code>Ctrl + C</code> (ចម្លង) | <code>Ctrl + V</code> (បិទភ្ជាប់) | <code>Ctrl + Z</code> (ត្រឡប់ថយក្រោយ)</p>
          <p><code>Ctrl + Shift + I</code> (បើក Developer Console ក្នុង Browser)</p>
        </div>
        <a href="#contact" class="btn btn-primary" onclick="closeModalWindow()" style="width:100%;">ទាញយកផ្ទាំងរូបភាពពេញ (A4 Poster)</a>
      `
    }
  };

  window.openDetailsModal = function(id) {
    if (projectDetails[id]) {
      modalTitle.textContent = projectDetails[id].title;
      modalBody.innerHTML = projectDetails[id].content;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModalWindow = function() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModalWindow);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModalWindow();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModalWindow();
    }
  });
}

/* ==========================================================================
   CONTACT FORM & TOAST NOTIFICATION
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const msgInput = document.getElementById('sender-msg');

    if (!nameInput.value.trim() || !msgInput.value.trim()) {
      showToast("⚠️ សូមបំពេញឈ្មោះ និងសាររបស់អ្នក!", "#f59e0b");
      return;
    }

    // Submit Simulation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const origText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>កំពុងផ្ញើ...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origText;
      contactForm.reset();
      showToast("✅ សាររបស់អ្នកត្រូវបានផ្ញើជូនលោកគ្រូ អ៊ូច អុល រួចរាល់ហើយ! លោកគ្រូនឹងឆ្លើយតបឆាប់ៗ។", "#10b981");
    }, 1200);
  });

  function showToast(message, borderColor) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    if (borderColor) {
      toast.style.borderColor = borderColor;
    }
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* ==========================================================================
   ENGLISH CAMP HERO INTERACTIVE FEATURES
   1. Voice Greeting Pronunciation (Web Speech API)
   2. Word of the Day (with Pronunciation & Next Word)
   3. Camp Fun Idiom of the Day (with Next Idiom)
   4. Student Study Timer (Gamified Study Streak)
   5. Interactive Camp Cheer Button
   ========================================================================== */
function initEnglishCampHero() {
  initVoiceGreeting();
  initCampWordOfTheDay();
  initCampIdiomOfTheDay();
  initCampStudyTimer();
  initCampCheerCounter();
}

function initVoiceGreeting() {
  const voiceBtn = document.getElementById('btn-voice-greeting');
  if (!voiceBtn) return;

  let isSpeaking = false;

  voiceBtn.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      alert("Browser audio speech synthesis is not supported on this browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setVoiceButtonState(false);
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    const greetingText = (typeof currentLang !== 'undefined' && currentLang === 'en')
      ? "Hello and welcome to English Camp! I am Mr. OL! Glad to welcome you to Hun Sen Svay Thom High School. Let's learn, explore, and have fun together!"
      : "Hello and welcome to English Camp! I am Mr. OL! សួស្តីប្អូនៗ! សូមស្វាគមន៍មកកាន់ English Camp! ខ្ញុំបាទគឺ មីស្ទឺរ អុល។ តោះរៀនភាសាអង់គ្លេស និងបច្ចេកវិទ្យាជាមួយគ្នា!";

    const utterance = new SpeechSynthesisUtterance(greetingText);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    // Pick natural voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('English')));
    if (enVoice) utterance.voice = enVoice;

    utterance.onstart = () => {
      isSpeaking = true;
      setVoiceButtonState(true);
    };

    utterance.onend = () => {
      isSpeaking = false;
      setVoiceButtonState(false);
    };

    utterance.onerror = () => {
      isSpeaking = false;
      setVoiceButtonState(false);
    };

    window.speechSynthesis.speak(utterance);
  });

  function setVoiceButtonState(speaking) {
    const label = voiceBtn.querySelector('.voice-btn-label');
    if (speaking) {
      voiceBtn.classList.add('speaking');
      if (label && typeof translations !== 'undefined' && typeof currentLang !== 'undefined') {
        label.textContent = translations[currentLang]?.btn_listen_greeting_playing || "🔊 Playing Audio...";
      }
    } else {
      voiceBtn.classList.remove('speaking');
      if (label && typeof translations !== 'undefined' && typeof currentLang !== 'undefined') {
        label.textContent = translations[currentLang]?.btn_listen_greeting || "🔊 ស្តាប់ការស្វាគមន៍";
      }
    }
  }
}

function initCampWordOfTheDay() {
  const campWords = [
    { en: "Inspire", phonetic: "/ɪnˈspaɪər/", km: "បំផុសគំនិត / លើកទឹកចិត្ត" },
    { en: "Curiosity", phonetic: "/ˌkjʊə.riˈɒs.ə.ti/", km: "ភាពចង់ចេះចង់ដឹង" },
    { en: "Achieve", phonetic: "/əˈtʃiːv/", km: "សម្រេចបានជោគជ័យ" },
    { en: "Resilience", phonetic: "/rɪˈzɪl.jəns/", km: "ភាពអត់ធ្មត់ & មិនបោះបង់" },
    { en: "Creativity", phonetic: "/ˌkriː.eɪˈtɪv.ə.ti/", km: "គំនិតច្នៃប្រឌិត" },
    { en: "Collaborate", phonetic: "/kəˈlæb.ə.reɪt/", km: "សហការគ្នាធ្វើការងារ" },
    { en: "Diligence", phonetic: "/ˈdɪl.ɪ.dʒəns/", km: "ភាពឧស្សាហ៍ព្យាយាម" },
    { en: "Empower", phonetic: "/ɪmˈpaʊ.ər/", km: "ផ្តល់អំណាច & ទំនុកចិត្ត" },
    { en: "Leadership", phonetic: "/ˈliː.də.ʃɪp/", km: "ភាពជាអ្នកដឹកនាំ" },
    { en: "Excellence", phonetic: "/ˈek.səl.əns/", km: "ឧត្តមភាព / ភាពឆ្នើម" },
    { en: "Confidence", phonetic: "/ˈkɒn.fɪ.dəns/", km: "ទំនុកចិត្តលើខ្លួនឯង" },
    { en: "Adventure", phonetic: "/ədˈven.tʃər/", km: "ការផ្សងព្រេងថ្មីៗ" }
  ];

  let currentWordIdx = 0;
  const wordEn = document.getElementById('camp-word-en');
  const wordPhonetic = document.getElementById('camp-word-phonetic');
  const wordKm = document.getElementById('camp-word-km');
  const nextBtn = document.getElementById('btn-next-word');
  const audioBtn = document.getElementById('btn-word-audio');

  function renderWord(idx) {
    if (!wordEn || !wordKm) return;
    const w = campWords[idx];
    wordEn.textContent = w.en;
    if (wordPhonetic) wordPhonetic.textContent = w.phonetic;
    wordKm.textContent = w.km;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentWordIdx = (currentWordIdx + 1) % campWords.length;
      renderWord(currentWordIdx);
      if (wordEn) {
        wordEn.style.animation = 'none';
        void wordEn.offsetWidth;
        wordEn.style.animation = 'iconBob 0.4s ease';
      }
    });
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!('speechSynthesis' in window)) return;
      const w = campWords[currentWordIdx].en;
      const utt = new SpeechSynthesisUtterance(w);
      utt.lang = 'en-US';
      utt.rate = 0.85;
      window.speechSynthesis.speak(utt);
    });
  }
}

function initCampIdiomOfTheDay() {
  const campIdioms = [
    { en: '"Piece of cake"', km: "ងាយស្រួលបំផុត (ដូចបកចេក)" },
    { en: '"Hit the books"', km: "ខិតខំរៀនសូត្រយ៉ាងខ្លាំង" },
    { en: '"Break a leg"', km: "ជូនពរឱ្យមានសំណាងល្អ" },
    { en: '"Once in a blue moon"', km: "កម្រកើតឡើងណាស់" },
    { en: '"Practice makes perfect"', km: "ការអនុវត្តច្រើននាំឱ្យស្ទាត់ជំនាញ" },
    { en: '"Under the weather"', km: "មានអារម្មណ៍មិនស្រួលខ្លួន" },
    { en: '"Bite the bullet"', km: "ហ៊ានប្រឈមនឹងការលំបាក" },
    { en: '"Keep your chin up"', km: "កុំអស់សង្ឃឹម រក្សាភាពក្លាហាន" },
    { en: '"Burn the midnight oil"', km: "រៀនសូត្រដល់យប់ជ្រៅ" },
    { en: '"Actions speak louder than words"', km: "ទង្វើសំខាន់ជាងពាក្យសម្តី" }
  ];

  let currentIdiomIdx = 0;
  const idiomEn = document.getElementById('camp-idiom-en');
  const idiomKm = document.getElementById('camp-idiom-km');
  const nextBtn = document.getElementById('btn-next-idiom');

  function renderIdiom(idx) {
    if (!idiomEn || !idiomKm) return;
    const item = campIdioms[idx];
    idiomEn.textContent = item.en;
    idiomKm.textContent = item.km;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIdiomIdx = (currentIdiomIdx + 1) % campIdioms.length;
      renderIdiom(currentIdiomIdx);
      if (idiomEn) {
        idiomEn.style.animation = 'none';
        void idiomEn.offsetWidth;
        idiomEn.style.animation = 'iconBob 0.4s ease';
      }
    });
  }
}

function initCampStudyTimer() {
  const timerDisplay = document.getElementById('camp-study-timer');
  const streakBadge = document.getElementById('camp-streak-badge');
  const timerMsg = document.getElementById('camp-timer-msg');
  if (!timerDisplay) return;

  let totalSeconds = 0;

  setInterval(() => {
    totalSeconds++;
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;

    if (streakBadge && timerMsg) {
      if (totalSeconds >= 300) {
        streakBadge.textContent = "🏆 Champion";
        streakBadge.style.background = "rgba(245, 158, 11, 0.2)";
        streakBadge.style.color = "#fbbf24";
        timerMsg.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en')
          ? "English Camp Superstar! 🏆"
          : "ម្ចាស់ជើងឯកការសិក្សា! 🏆";
      } else if (totalSeconds >= 180) {
        streakBadge.textContent = "🔥 Focused";
        streakBadge.style.background = "rgba(239, 68, 68, 0.2)";
        streakBadge.style.color = "#f87171";
        timerMsg.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en')
          ? "Super focused & learning! 🔥"
          : "កំពុងផ្តោតអារម្មណ៍យ៉ាងល្អ! 🔥";
      } else if (totalSeconds >= 60) {
        streakBadge.textContent = "⚡ Active";
        streakBadge.style.background = "rgba(56, 189, 248, 0.2)";
        streakBadge.style.color = "#38bdf8";
        timerMsg.textContent = (typeof currentLang !== 'undefined' && currentLang === 'en')
          ? "Great momentum, keep going! ⚡"
          : "ស្ទុះទៅមុខឥតឈប់ឈរ! ⚡";
      }
    }
  }, 1000);
}

function initCampCheerCounter() {
  const cheerBtn = document.getElementById('btn-camp-cheer');
  const cheerCountEl = document.getElementById('cheer-count');
  if (!cheerBtn || !cheerCountEl) return;

  let savedCheers = parseInt(localStorage.getItem('mr_ol_camp_cheers') || '142', 10);
  cheerCountEl.textContent = savedCheers;

  cheerBtn.addEventListener('click', () => {
    savedCheers++;
    localStorage.setItem('mr_ol_camp_cheers', savedCheers);
    cheerCountEl.textContent = savedCheers;

    // Pop animation
    cheerBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cheerBtn.style.transform = '';
    }, 250);

    // Floating heart particle
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = '50%';
    heart.style.top = '10%';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 0.8s ease-out';
    heart.style.zIndex = '999';
    cheerBtn.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = 'translate(-50%, -40px) scale(1.4)';
      heart.style.opacity = '0';
    }, 20);

    setTimeout(() => {
      heart.remove();
    }, 850);
  });
}

/* ==========================================================================
   E-LEARN PRO INTERACTIVE SYSTEM
   Course Search, Live Class Video Controls, Sort Filter, Class Attendance
   ========================================================================== */
function initELearnInteractions() {
  // 1. Real-time Course Search
  const searchInput = document.getElementById('course-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const courseCards = document.querySelectorAll('.elearn-course-card');
      courseCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // 2. Sort Courses Button
  const sortBtn = document.getElementById('btn-sort-courses');
  if (sortBtn) {
    let sortAsc = false;
    sortBtn.addEventListener('click', () => {
      sortAsc = !sortAsc;
      const grid = document.getElementById('elearn-course-grid');
      if (!grid) return;
      const cards = Array.from(grid.querySelectorAll('.elearn-course-card'));
      cards.sort((a, b) => {
        const titleA = a.querySelector('.elearn-course-title')?.textContent || '';
        const titleB = b.querySelector('.elearn-course-title')?.textContent || '';
        return sortAsc ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      });
      cards.forEach(card => grid.appendChild(card));
      const span = sortBtn.querySelector('span');
      if (span) {
        span.textContent = sortAsc ? 'Sorted: A-Z' : 'Sort by Relevance';
      }
    });
  }

  // 3. Live Class Video Controls
  const micBtn = document.getElementById('ctrl-mic');
  if (micBtn) {
    let micMuted = false;
    micBtn.addEventListener('click', () => {
      micMuted = !micMuted;
      micBtn.className = micMuted ? 'ctrl-btn active-red' : 'ctrl-btn active-green';
      micBtn.innerHTML = micMuted ? '🔇' : '🎤';
      showElearnToast(micMuted ? 'Microphone muted' : 'Microphone unmuted (Live)');
    });
  }

  const camBtn = document.getElementById('ctrl-camera');
  if (camBtn) {
    let camOff = false;
    camBtn.addEventListener('click', () => {
      camOff = !camOff;
      camBtn.className = camOff ? 'ctrl-btn active-red' : 'ctrl-btn';
      camBtn.innerHTML = camOff ? '🚫' : '📹';
      showElearnToast(camOff ? 'Camera turned off' : 'Camera turned on');
    });
  }

  const shareBtn = document.getElementById('ctrl-share');
  if (shareBtn) {
    let sharing = false;
    shareBtn.addEventListener('click', () => {
      sharing = !sharing;
      shareBtn.className = sharing ? 'ctrl-btn active-green' : 'ctrl-btn';
      showElearnToast(sharing ? 'Screen sharing active' : 'Screen sharing stopped');
    });
  }

  const chatBtn = document.getElementById('ctrl-chat');
  if (chatBtn) {
    chatBtn.addEventListener('click', () => {
      showElearnToast('💬 Class Chat: 245 students online. Welcome to Mr. OL\'s live stream!');
    });
  }

  const fsBtn = document.getElementById('ctrl-fullscreen');
  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
      const container = document.querySelector('.elearn-live-video-mockup');
      if (!container) return;
      if (!document.fullscreenElement) {
        container.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });
  }

  const leaveBtn = document.getElementById('ctrl-leave');
  if (leaveBtn) {
    leaveBtn.addEventListener('click', () => {
      showElearnToast('📞 You are ready to join or exit classroom session.');
    });
  }
}

function handleCourseSearch() {
  const searchInput = document.getElementById('course-search-input');
  const query = searchInput ? searchInput.value.trim() : '';
  const coursesSec = document.getElementById('courses');
  if (coursesSec) {
    coursesSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function triggerJoinClass() {
  showElearnToast('🔴 Connecting to Mr. OL\'s Live Smart Classroom... Room 1 Ready!');
  const mockup = document.querySelector('.elearn-live-video-mockup');
  if (mockup) {
    mockup.scrollIntoView({ behavior: 'smooth', block: 'center' });
    mockup.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
    mockup.style.transform = 'scale(1.02)';
    setTimeout(() => {
      mockup.style.transform = '';
    }, 600);
  }
}

function showElearnToast(message) {
  let toast = document.getElementById('elearn-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'elearn-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '28px';
    toast.style.right = '28px';
    toast.style.background = '#111827';
    toast.style.color = '#ffffff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '9999px';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)';
    toast.style.fontSize = '0.9rem';
    toast.style.fontWeight = '600';
    toast.style.zIndex = '9999';
    toast.style.transition = 'all 0.3s ease';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3200);
}
