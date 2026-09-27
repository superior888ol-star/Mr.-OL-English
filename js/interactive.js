/**
 * Interactive EduTech Lab Features
 * 1. Custom Interactive Terminal for Teacher Ouch Ol
 * 2. English & Computer Science Interactive Quiz
 */

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
  initQuiz();
  initLabTabs();
});

/* ==========================================================================
   LAB TABS TOGGLER
   ========================================================================== */
function initLabTabs() {
  const tabBtns = document.querySelectorAll('.lab-tab-btn');
  const tabContents = document.querySelectorAll('.lab-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   INTERACTIVE TERMINAL
   ========================================================================== */
function initTerminal() {
  const termBody = document.getElementById('terminal-body');
  const termOutput = document.getElementById('terminal-output');
  const termInput = document.getElementById('terminal-input');
  const quickChips = document.querySelectorAll('.term-chip');

  if (!termInput || !termOutput) return;

  const commands = {
    help: () => {
      return `
<div class="term-line highlight">Available Commands / បញ្ជីពាក្យបញ្ជាដែលអាចប្រើបាន៖</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">help</strong>      - បង្ហាញបញ្ជីពាក្យបញ្ជា (List all available commands)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">about</strong>     - ព័ត៌មានសង្ខេបអំពីលោកគ្រូ អ៊ូច អុល (About Teacher Ouch Ol)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">skills</strong>    - ជំនាញបង្រៀនភាសាអង់គ្លេស & កុំព្យូទ័រ (Teaching Specializations)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">school</strong>    - អំពីវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ (Hun Sen Svay Thom High School)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">courses</strong>   - ថ្នាក់រៀន និងមុខវិជ្ជាទទួលបន្ទុក (Classes & Subjects)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">quote</strong>     - ទស្សនវិជ្ជាអប់រំ (Teacher's Motto & Philosophy)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">camp</strong>      - អំពី English Camp Adventure & លោកគ្រូ មីស្ទឺរ អុល (English Camp Info)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">contact</strong>   - ព័ត៌មានទំនាក់ទំនង (Contact Details)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">feeds</strong>     - ព័ត៌មាន និងសកម្មភាពថ្មីៗ (Recent Feeds & Activities)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">cv</strong>        - បើកមើល និងទាញយកប្រវត្តិរូបសង្ខេប (View & Download CV / Resume)</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">matrix</strong>    - បើកដំណើរការបែប Matrix Digital Rain</div>
<div class="term-line">  <strong style="color:var(--accent-cyan)">clear</strong>     - សម្អាតអេក្រង់ Terminal (Clear screen)</div>
`;
    },

    about: () => {
      return `
<div class="term-line highlight">=== អំពីលោកគ្រូ អ៊ូច អុល (About Mr. Ouch Ol) ===</div>
<div class="term-line">👤 <strong>ឈ្មោះ:</strong> អ៊ូច អុល (Ouch Ol)</div>
<div class="term-line">🎓 <strong>មុខតំណែង:</strong> គ្រូបង្រៀនកម្រិតឧត្តម មុខវិជ្ជាភាសាអង់គ្លេស & វិទ្យាសាស្ត្រកុំព្យូទ័រ</div>
<div class="term-line">🏫 <strong>ស្ថាប័ន:</strong> វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ (ខេត្តសៀមរាប)</div>
<div class="term-line">⏳ <strong>បទពិសោធន៍:</strong> ជាង ១២ ឆ្នាំ ក្នុងការអប់រំ និងអភិវឌ្ឍយុវជន</div>
<div class="term-line">💡 <strong>បេសកកម្ម:</strong> ជំរុញឱ្យសិស្សានុសិស្សនៅជនបទមានសមត្ថភាពភាសាអន្តរជាតិ និងបច្ចេកវិទ្យាស្មើមុខស្មើមាត់លើឆាកជាតិ</div>
`;
    },

    skills: () => {
      return `
<div class="term-line highlight">=== ជំនាញ និងមុខវិជ្ជាបង្រៀន (Core Skills) ===</div>
<div class="term-line" style="color:var(--accent-gold)">[1] ភាសាអង់គ្លេស (English Language Mastery):</div>
<div class="term-line">  - វេយ្យាករណ៍ច្បាស់លាស់ (Advanced English Grammar)</div>
<div class="term-line">  - ការសន្ទនា & ការបញ្ចេញសំឡេង (Speaking & Phonetics)</div>
<div class="term-line">  - ភាសាអង់គ្លេសសម្រាប់បច្ចេកវិទ្យា (English for Computer Tech)</div>
<div class="term-line">  - យុទ្ធសាស្ត្រប្រឡងបាក់ឌុប (BacII Exam Preparation)</div>
<div class="term-line" style="color:var(--accent-cyan)">[2] វិទ្យាសាស្ត្រកុំព្យូទ័រ (Computer Science):</div>
<div class="term-line">  - មូលដ្ឋានគេហទំព័រ (HTML5, Modern CSS, JavaScript Essentials)</div>
<div class="term-line">  - កម្មវិធីការិយាល័យ & Google Workspace (Digital Literacy)</div>
<div class="term-line">  - ការដោះស្រាយបញ្ហាតាមក្បួនកុំព្យូទ័រ (Algorithmic Logic)</div>
<div class="term-line">  - សុវត្ថិភាពអ៊ីនធឺណិត និងបញ្ញាសិប្បនិម្មិតក្នុងវិស័យអប់រំ (Cybersecurity & AI in Education)</div>
`;
    },

    school: () => {
      return `
<div class="term-line highlight">=== វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ ===</div>
<div class="term-line">📍 <strong>ទីតាំង:</strong> ឃុំស្វាយធំ ស្រុកប្រាសាទបាគង / ក្រុងសៀមរាប ខេត្តសៀមរាប</div>
<div class="term-line">🏫 <strong>បរិយាកាស:</strong> បរិវេណសាលាធំទូលាយ មានអគារសិក្សាទំនើប បន្ទប់កុំព្យូទ័រ (ICT Lab) បណ្ណាល័យ និងបរិស្ថានបៃតង</div>
<div class="term-line">🌟 <strong>សកម្មភាពលេចធ្លោ:</strong> ក្លឹបភាសាអង់គ្លេស ក្លឹបបច្ចេកវិទ្យាព័ត៌មានវិទ្យា និងការប្រកួតប្រជែងសមត្ថភាពសិស្សពូកែ</div>
`;
    },

    courses: () => {
      return `
<div class="term-line highlight">=== ថ្នាក់រៀន និងកាលវិភាគបង្រៀន (Courses & Grade Levels) ===</div>
<div class="term-line">📚 <strong>ថ្នាក់ទី ១០:</strong> មូលដ្ឋានគ្រឹះកុំព្យូទ័រ ICT & ភាសាអង់គ្លេសទំនាក់ទំនង</div>
<div class="term-line">📚 <strong>ថ្នាក់ទី ១១:</strong> HTML/CSS ការបង្កើតគេហទំព័រ & វេយ្យាករណ៍អង់គ្លេសកម្រិតមធ្យម</div>
<div class="term-line">📚 <strong>ថ្នាក់ទី ១២:</strong> ត្រៀមប្រឡងបាក់ឌុបភាសាអង់គ្លេស & បំណិនបច្ចេកវិទ្យាឌីជីថលសម្រាប់សាកលវិទ្យាល័យ</div>
<div class="term-line">💡 <strong>ក្លឹបក្រៅម៉ោង:</strong> ក្លឹបសរសេរកូដ (Coding Club) រៀងរាល់រសៀលថ្ងៃសៅរ៍</div>
`;
    },

    quote: () => {
      return `
<div class="term-line" style="color:var(--accent-gold); font-size:1.05rem;">
« ភាសាអង់គ្លេសជាស្ពាននាំយើងទៅកាន់ពិភពលោក ចំណែកវិទ្យាសាស្ត្រកុំព្យូទ័រជាកូនសោរបើកទ្វារអនាគត។ »
</div>
<div class="term-line" style="color:var(--text-muted);">- លោកគ្រូ អ៊ូច អុល, វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ</div>
`;
    },

    contact: () => {
      return `
<div class="term-line highlight">=== ព័ត៌មានទំនាក់ទំនង (Contact Info) ===</div>
<div class="term-line">📧 <strong>Email:</strong> ouch.ol.hs@moeys.gov.kh</div>
<div class="term-line">📱 <strong>Telegram:</strong> @Teacher_OuchOl</div>
<div class="term-line">📞 <strong>ទូរស័ព្ទ:</strong> (+855) 81 73 88 99</div>
<div class="term-line">🏫 <strong>ការិយាល័យ:</strong> បន្ទប់កុំព្យូទ័រ ICT Lab, វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ</div>
`;
    },

    camp: () => {
      return `
<div class="term-line highlight">🏕️ === ENGLISH CAMP ADVENTURE • វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ ===</div>
<div class="term-line">🌟 <strong>Mentor:</strong> Mr. OL (មីស្ទឺរ អុល)</div>
<div class="term-line">🗣️ <strong>Greeting:</strong> "Hello, Welcome to English Camp! I am Mr. OL!"</div>
<div class="term-line">💡 <strong>គោលបំណង:</strong> លើកកម្ពស់ទំនុកចិត្តនៃការសន្ទនាភាសាអង់គ្លេស ការស្រាវជ្រាវ និងបំណិនកុំព្យូទ័រ</div>
<div class="term-line">🎯 <strong>បាវចនា:</strong> "Practice makes perfect! Enjoy learning every single day!"</div>
`;
    },

    cv: () => {
      return `
<div class="term-line highlight">=== ប្រវត្តិរូបសង្ខេប / CURRICULUM VITAE ===</div>
<div class="term-line">👤 <strong>បេក្ខជន៖</strong> លោកគ្រូ អ៊ូច អុល (OUCH OL)</div>
<div class="term-line">🎓 <strong>កម្រិតវប្បធម៌៖</strong> បរិញ្ញាបត្រជាន់ខ្ពស់ TESOL (កំពុងសិក្សា), គរុកោសល្យជាន់ខ្ពស់ NIE, បរិញ្ញាបត្រ TEFL BBU</div>
<div class="term-line">🏫 <strong>បទពិសោធន៍៖</strong> គ្រូបង្រៀនភាសាអង់គ្លេស & ICT នៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ (២០១៤-បច្ចុប្បន្ន)</div>
<div class="term-line" style="margin-top:6px;">
  👉 <a href="cv.html" target="_blank" style="color:var(--accent-cyan); text-decoration:underline; font-weight:700;">[ ចុចទីនេះដើម្បីបើកមើល និងទាញយក CV ជា PDF A4 Format ] &rarr;</a>
</div>
`;
    },

    feeds: () => {
      const section = document.getElementById('newsfeed');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      return `
<div class="term-line highlight">=== NEW FEEDS & RECENT ACTIVITIES (៥ ការបង្ហោះ) ===</div>
<div class="term-line">📰 [1] ៦ ម៉ោងមុន: ការរៀនផ្អែកលើគម្រោង (PBL) & ផ្ទាំងរូបភាពច្នៃប្រឌិត (10 រូប)</div>
<div class="term-line">🛡️ [2] ២ ថ្ងៃមុន: ម៉ោងសិក្សា Cybersecurity & សុវត្ថិភាពអ៊ីនធឺណិត (3 រូប)</div>
<div class="term-line">🖥️ [3] ៤ ថ្ងៃមុន: ថ្នាក់រៀនឌីជីថលឆ្លាតវៃជាមួយ Smartboard & AI (5 រូប)</div>
<div class="term-line">🚀 [4] ១ សប្ដាហ៍មុន: សិស្សប្រកួតប្រជែងគម្រោង PWA សហគ្រិនខ្មែរ (1 រូប)</div>
<div class="term-line">🏫 [5] ២ សប្ដាហ៍មុន: បវេសនកាលឆ្នាំសិក្សាថ្មី & ភាពជាអ្នកដឹកនាំ (2 រូប)</div>
<div class="term-line" style="margin-top:6px;">👉 កំពុងរំកិលទៅកាន់ផ្នែក New Feeds លើទំព័រដើម...</div>
`;
    },

    news: () => {
      return commands.feeds();
    },

    matrix: () => {
      return `
<div class="term-line" style="color:#22c55e;">
01001111 01110101 01100011 01101000 00100000 01001111 01101100<br>
[SYSTEM OK]: Hun Sen Svay Thom ICT Network Online.<br>
10101010 11001100 00110011 11110000 00001111 10101010<br>
English + Coding = Limitless Opportunities for Cambodian Youth! 🇰🇭✨
</div>
`;
    },

    clear: () => {
      termOutput.innerHTML = '';
      return '';
    }
  };

  function executeCommand(cmdText) {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    // Echo command
    const echoDiv = document.createElement('div');
    echoDiv.className = 'term-line';
    echoDiv.innerHTML = `<span class="term-user">visitor@svaythom:~$</span> ${escapeHTML(cleanCmd)}`;
    termOutput.appendChild(echoDiv);

    // Run action
    if (commands[cleanCmd]) {
      const resultHtml = commands[cleanCmd]();
      if (resultHtml) {
        const resDiv = document.createElement('div');
        resDiv.innerHTML = resultHtml;
        termOutput.appendChild(resDiv);
      }
    } else {
      const errDiv = document.createElement('div');
      errDiv.className = 'term-line error-msg';
      errDiv.innerHTML = `ពាក្យបញ្ជាមិនត្រឹមត្រូវ: "${escapeHTML(cleanCmd)}"។ សូមវាយ <span style="color:var(--accent-cyan); text-decoration:underline; cursor:pointer;" onclick="runTermQuick('help')">help</span> ដើម្បីមើលបញ្ជីពាក្យបញ្ជា។`;
      termOutput.appendChild(errDiv);
    }

    termBody.scrollTop = termBody.scrollHeight;
    termInput.value = '';
  }

  window.runTermQuick = function(cmd) {
    termInput.value = cmd;
    executeCommand(cmd);
  };

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(termInput.value);
    }
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

  // Focus input on terminal click
  termBody.addEventListener('click', () => {
    termInput.focus();
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   INTERACTIVE KNOWLEDGE QUIZ
   ========================================================================== */
function initQuiz() {
  const quizData = [
    {
      question: "តើកូដ HTML មួយណាដែលត្រូវបានប្រើសម្រាប់បង្កើត Link (តំណភ្ជាប់) ទៅកាន់គេហទំព័រផ្សេង?",
      category: "Computer Science (HTML)",
      options: [
        { text: "<link href='...'>", correct: false },
        { text: "<a href='...'>", correct: true },
        { text: "<href to='...'>", correct: false },
        { text: "<nav src='...'>", correct: false }
      ],
      explanation: "ត្រឹមត្រូវហើយ! ថេក <code>&lt;a href='...'&gt;</code> (Anchor tag) ប្រើសម្រាប់បង្កើតតំណភ្ជាប់ Hyperlink នៅក្នុងគេហទំព័រ។"
    },
    {
      question: "Choose the correct English sentence in Present Perfect tense:",
      category: "English Grammar",
      options: [
        { text: "Teacher Ouch Ol has taught here for over 10 years.", correct: true },
        { text: "Teacher Ouch Ol is teaching here since 10 years.", correct: false },
        { text: "Teacher Ouch Ol have taught here for 10 years.", correct: false },
        { text: "Teacher Ouch Ol teaches here for 10 years ago.", correct: false }
      ],
      explanation: "Excellent! 'Has taught' with singular subject (Teacher Ouch Ol) + 'for over 10 years' expresses an action that began in the past and continues to the present."
    },
    {
      question: "តើ CSS មួយណាដែលធ្វើឱ្យប្លង់គេហទំព័រអាចរៀបចំជា ២ ជួរឈរ (2 Columns Grid) បានល្អបំផុត?",
      category: "Computer Science (CSS)",
      options: [
        { text: "display: grid; grid-template-columns: 1fr 1fr;", correct: true },
        { text: "display: block; float: double;", correct: false },
        { text: "layout: columns(2);", correct: false },
        { text: "display: flex; flex-direction: up-down;", correct: false }
      ],
      explanation: "ពិតជាត្រឹមត្រូវ! <code>grid-template-columns: 1fr 1fr;</code> គឺជាវិធីទំនើប និងមានប្រសិទ្ធភាពខ្ពស់ក្នុងការបែងចែកជួរឈរស្មើគ្នា។"
    },
    {
      question: "In technical English, which word best defines 'the process of finding and fixing errors in code'?",
      category: "English for Tech",
      options: [
        { text: "Compiling", correct: false },
        { text: "Debugging", correct: true },
        { text: "Refactoring", correct: false },
        { text: "Rendering", correct: false }
      ],
      explanation: "Correct! 'Debugging' (ការដកកំហុស) គឺសំដៅលើដំណើរការស្វែងរក និងជួសជុលបញ្ហា Error ឬ Bug ក្នុងកម្មវិធី។"
    }
  ];

  let currentQuestionIdx = 0;
  let score = 0;

  const questionEl = document.getElementById('quiz-question');
  const categoryEl = document.getElementById('quiz-category');
  const optionsEl = document.getElementById('quiz-options');
  const progressEl = document.getElementById('quiz-progress-text');
  const scoreBadgeEl = document.getElementById('quiz-score-badge');
  const feedbackEl = document.getElementById('quiz-feedback');

  if (!questionEl || !optionsEl) return;

  function loadQuestion(idx) {
    const q = quizData[idx];
    questionEl.textContent = q.question;
    categoryEl.textContent = q.category;
    progressEl.textContent = `សំណួរទី ${idx + 1} នៃ ${quizData.length}`;
    scoreBadgeEl.textContent = `ពិន្ទុ: ${score} / ${quizData.length}`;
    feedbackEl.className = 'quiz-feedback';
    feedbackEl.innerHTML = '';

    optionsEl.innerHTML = '';
    q.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `<span><strong>${String.fromCharCode(65 + index)}.</strong> ${opt.text}</span>`;
      btn.addEventListener('click', () => handleSelectOption(btn, opt, q));
      optionsEl.appendChild(btn);
    });
  }

  function handleSelectOption(btn, selectedOpt, questionObj) {
    const allBtns = optionsEl.querySelectorAll('.quiz-option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selectedOpt.correct) {
      score++;
      btn.classList.add('correct');
      feedbackEl.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
      feedbackEl.style.border = '1px solid var(--accent-emerald)';
      feedbackEl.style.color = 'var(--accent-emerald)';
      feedbackEl.innerHTML = `🎉 <strong>ចម្លើយត្រឹមត្រូវ!</strong> ${questionObj.explanation}`;
    } else {
      btn.classList.add('wrong');
      // Highlight the correct one
      allBtns.forEach((b, i) => {
        if (questionObj.options[i].correct) {
          b.classList.add('correct');
        }
      });
      feedbackEl.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
      feedbackEl.style.border = '1px solid #ef4444';
      feedbackEl.style.color = '#ef4444';
      feedbackEl.innerHTML = `❌ <strong>មិនទាន់ត្រឹមត្រូវទេ!</strong> ${questionObj.explanation}`;
    }

    feedbackEl.classList.add('show');
    scoreBadgeEl.textContent = `ពិន្ទុ: ${score} / ${quizData.length}`;

    // Show Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.style.marginTop = '16px';
    nextBtn.style.width = '100%';
    nextBtn.innerHTML = (currentQuestionIdx < quizData.length - 1) ? 'សំណួរបន្ទាប់ &rarr;' : 'មើលលទ្ធផលសរុប 🏆';

    nextBtn.addEventListener('click', () => {
      currentQuestionIdx++;
      if (currentQuestionIdx < quizData.length) {
        loadQuestion(currentQuestionIdx);
      } else {
        showResults();
      }
    });

    feedbackEl.appendChild(nextBtn);
  }

  function showResults() {
    progressEl.textContent = 'លទ្ធផលបញ្ចប់';
    questionEl.textContent = `🎉 អបអរសាទរ! អ្នកឆ្លើយបានពិន្ទុ ${score} ក្នុងចំណោម ${quizData.length} សំណួរ!`;
    categoryEl.textContent = 'Completed Quiz';
    optionsEl.innerHTML = '';
    
    let encouragement = "";
    if (score === quizData.length) {
      encouragement = "🌟 ល្អឥតខ្ចោះ! អ្នកមានមូលដ្ឋានគ្រឹះទាំងភាសាអង់គ្លេស និងកុំព្យូទ័របានយ៉ាងរឹងមាំ!";
    } else if (score >= 2) {
      encouragement = "👍 ល្អណាស់! បន្តការខិតខំរៀនសូត្របន្ថែមជាមួយលោកគ្រូ អ៊ូច អុល នៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ!";
    } else {
      encouragement = "💪 មិនអីទេ! ការរៀនសូត្រត្រូវការពេលវេលា។ សូមមកកាន់បន្ទប់ ICT Lab ឬក្លឹបភាសាអង់គ្លេសដើម្បីពង្រឹងសមត្ថភាព!";
    }

    feedbackEl.style.backgroundColor = 'rgba(56, 189, 248, 0.12)';
    feedbackEl.style.border = '1px solid var(--accent-cyan)';
    feedbackEl.style.color = 'var(--text-primary)';
    feedbackEl.innerHTML = `
      <div style="font-size:1.1rem; margin-bottom:12px; font-weight:600;">${encouragement}</div>
      <p style="color:var(--text-secondary); margin-bottom:16px;">ចំណេះដឹងកុំព្យូទ័រ និងភាសាអង់គ្លេស នឹងជួយបើកឱកាសការងារ និងអាហារូបករណ៍យ៉ាងច្រើនសម្រាប់អ្នក!</p>
      <button id="btn-restart-quiz" class="btn btn-secondary" style="width:100%;">🔄 សាកល្បងម្ដងទៀត (Retake Quiz)</button>
    `;
    feedbackEl.classList.add('show');

    document.getElementById('btn-restart-quiz')?.addEventListener('click', () => {
      currentQuestionIdx = 0;
      score = 0;
      loadQuestion(0);
    });
  }

  // Load first question
  loadQuestion(0);
}
