/**
 * Teaching Hub & Curriculum Module (teaching.js)
 * Manages Lesson Plans, Slides, Detailed Lessons, Exams, Quizzes, Games, and Other Works
 * Tailored for Teacher Ouch Ol - Hun Sen Svay Thom High School
 */

const teachingData = [
  // ==================== កិច្ចតែងការ (LESSON PLANS) ====================
  {
    id: "plan-1",
    category: "plans",
    grade: "grade-12",
    subject: "english",
    title: "កិច្ចតែងការ៖ Conditional Sentences (Type 1, 2, 3)",
    desc: "ប្លង់បង្រៀនពេញលេញតាមក្បួនគរុកោសល្យ ៥ ជំហាន ស្តីពីប្រយោគលក្ខខណ្ឌសម្រាប់ថ្នាក់ទី ១២ ត្រៀមប្រឡងបាក់ឌុប។",
    format: "DOCX / PDF",
    date: "សប្តាហ៍ទី ៤, ឆមាសទី ១",
    details: {
      type: "plan",
      subjectName: "ភាសាអង់គ្លេស (English)",
      gradeLevel: "ថ្នាក់ទី ១២",
      duration: "៥០ នាទី",
      objectives: [
        "ចំណេះដឹង៖ សិស្សអាចកំណត់រូបមន្ត Conditional Sentences Type 1, 2 និង 3 បានត្រឹមត្រូវ។",
        "បំណិន៖ សិស្សអាចបំពេញកិរិយាសព្ទក្នុងប្រយោគ និងសរសេរប្រយោគផ្ទាល់ខ្លួនបានយ៉ាងស្ទាត់ជំនាញ។",
        "ឥរិយាបថ៖ បង្កើនទំនុកចិត្ត និងការយល់ដឹងពីសារៈសំខាន់នៃការប្រើភាសាអង់គ្លេសក្នុងការប្រឡងបាក់ឌុប។"
      ],
      materials: "សៀវភៅសិក្សាគោល Grade 12, កាតរូបមន្ត, LCD Projector, សន្លឹកកិច្ចការ",
      steps: [
        { name: "ជំហានទី ១៖ រដ្ឋបាលថ្នាក់ (២ នាទី)", desc: "ពិនិត្យវត្តមាន សណ្តាប់ធ្នាប់ និងលើកទឹកចិត្តសិស្សមុនចាប់ផ្តើម។" },
        { name: "ជំហានទី ២៖ រំលឹកមេរៀនចាស់ (៥ នាទី)", desc: "សួរសំណួររំលឹកអំពី Simple Past និង Past Perfect Tenses។" },
        { name: "ជំហានទី ៣៖ មេរៀនថ្មី (២៥ នាទី)", desc: "ពន្យល់ពីទម្រង់ If-Clause, ឧទាហរណ៍ជាក់ស្តែងក្នុងជីវិតរស់នៅ, ឱ្យសិស្សពិភាក្សាជាគូ (Pair Work)។" },
        { name: "ជំហានទី ៤៖ ពង្រឹងចំណេះដឹង (១៥ នាទី)", desc: "ចែកសន្លឹកកិច្ចការលំហាត់ ៥ ប្រយោគ ឱ្យសិស្សដោះស្រាយ និងកែលើក្តារខៀន។" },
        { name: "ជំហានទី ៥៖ បណ្តាំផ្ញើ & កិច្ចការផ្ទះ (៣ នាទី)", desc: "ដាក់កិច្ចការផ្ទះទំព័រ ៨៤ និងឱ្យសិស្សមើលមេរៀន Passive Voice បន្ត។" }
      ]
    }
  },
  {
    id: "plan-2",
    category: "plans",
    grade: "grade-11",
    subject: "computer",
    title: "កិច្ចតែងការ៖ មូលដ្ឋានគ្រឹះ HTML Tags & Web Structure",
    desc: "កិច្ចតែងការបង្រៀនអនុវត្តជាក់ស្តែងក្នុងបន្ទប់ ICT Lab ណែនាំសិស្សអំពី tags សំខាន់ៗ និងការបង្កើតទំព័រដំបូង។",
    format: "PDF (ប្លង់កិច្ចតែងការ)",
    date: "សប្តាហ៍ទី ៨, ឆមាសទី ១",
    details: {
      type: "plan",
      subjectName: "វិទ្យាសាស្ត្រកុំព្យូទ័រ (ICT)",
      gradeLevel: "ថ្នាក់ទី ១១",
      duration: "១០០ នាទី (២ ម៉ោងជាប់គ្នា)",
      objectives: [
        "ចំណេះដឹង៖ សិស្សយល់ច្បាស់ពីតួនាទីរបស់ <html>, <head>, <body>, <h1>, <p>, <a>, <img>។",
        "បំណិន៖ សិស្សអាចសរសេរកូដលើ Notepad/VS Code និងបើកមើលលទ្ធផលលើ Browser បានដោយខ្លួនឯង។",
        "ឥរិយាបថ៖ បណ្តុះស្មារតីច្នៃប្រឌិត និងការចូលចិត្តបច្ចេកវិទ្យាគេហទំព័រ។"
      ],
      materials: "បន្ទប់កុំព្យូទ័រ ICT Lab វិទ្យាល័យ, កម្មវិធី Code Editor, ស្លាយពន្យល់",
      steps: [
        { name: "ជំហានទី ១៖ រដ្ឋបាលថ្នាក់ (៣ នាទី)", desc: "ត្រួតពិនិត្យវត្តមាន និងការបើកកុំព្យូទ័ររបស់សិស្សគ្រប់តុ។" },
        { name: "ជំហានទី ២៖ រំលឹកមេរៀនចាស់ (៧ នាទី)", desc: "រំលឹកពីគំនិត Website, Domain Name និង Web Hosting។" },
        { name: "ជំហានទី ៣៖ មេរៀនថ្មី & អនុវត្ត (៥០ នាទី)", desc: "បង្ហាញកូដផ្ទាល់លើអេក្រង់ធំ ណែនាំរចនាសម្ព័ន្ធ Tags ហើយឱ្យសិស្សអនុវត្តតាមមួយជំហានម្តងៗ។" },
        { name: "ជំហានទី ៤៖ ពង្រឹងចំណេះដឹង & បង្ហាញស្នាដៃ (៣០ នាទី)", desc: "ឱ្យសិស្សម្នាក់ៗបង្កើតទំព័រជីវប្រវត្តិផ្ទាល់ខ្លួនខ្លីមួយ រួចលោកគ្រូដើរត្រួតពិនិត្យ និងដាក់ពិន្ទុ។" },
        { name: "ជំហានទី ៥៖ បណ្តាំផ្ញើ (១០ នាទី)", desc: "បិទកុំព្យូទ័រឱ្យមានរបៀប និងស្រាវជ្រាវបន្ថែមអំពី CSS Styling នៅផ្ទះ។" }
      ]
    }
  },
  {
    id: "plan-3",
    category: "plans",
    grade: "grade-10",
    subject: "computer",
    title: "កិច្ចតែងការ៖ សុវត្ថិភាពអ៊ីនធឺណិត និងការបង្កើតលេខសម្ងាត់រឹងមាំ",
    desc: "មេរៀនគ្រឹះឌីជីថលសម្រាប់សិស្សថ្នាក់ទី ១០ យល់ដឹងពី Cyberbullying, Phishing និងការការពារគណនី។",
    format: "DOCX / PDF",
    date: "សប្តាហ៍ទី ២, ឆមាសទី ១",
    details: {
      type: "plan",
      subjectName: "វិទ្យាសាស្ត្រកុំព្យូទ័រ (Digital Safety)",
      gradeLevel: "ថ្នាក់ទី ១០",
      duration: "៥០ នាទី",
      objectives: [
        "ចំណេះដឹង៖ ស្គាល់ពីហានិភ័យលើអ៊ីនធឺណិត និងទម្រង់នៃការលួចទិន្នន័យ (Hacking & Phishing)។",
        "បំណិន៖ ចេះបង្កើត Two-Factor Authentication (2FA) និង Passwords រឹងមាំ។",
        "ឥរិយាបថ៖ ក្លាយជាពលរដ្ឋឌីជីថលប្រកបដោយក្រមសីលធម៌ និងការទទួលខុសត្រូវ។"
      ]
    }
  },

  // ==================== ស្លាយបង្រៀន (TEACHING SLIDES) ====================
  {
    id: "slide-1",
    category: "slides",
    grade: "grade-12",
    subject: "english",
    title: "ស្លាយបង្រៀន៖ Master All 12 English Tenses",
    desc: "ស្លាយ PowerPoint & Canva ចំនួន ៤៥ ស្លាយ មានពណ៌ចម្រុះ រូបភាពគំនូរជីវចល និងតារាងប្រៀបធៀប Tenses ច្បាស់ៗ។",
    format: "PPTX / PDF (45 Slides)",
    date: "បច្ចុប្បន្នភាព ២០២៥-២០២៦",
    details: {
      type: "slide",
      totalSlides: 45,
      highlights: [
        "Slide 1-10: Present Simple, Continuous, Perfect & Perfect Continuous",
        "Slide 11-20: Past Simple vs Past Continuous & Past Perfect in Context",
        "Slide 21-30: Future Forms (Will vs Going to vs Present Continuous for future)",
        "Slide 31-45: Common exam traps in BacII & Interactive Quick Questions"
      ]
    }
  },
  {
    id: "slide-2",
    category: "slides",
    grade: "grade-11",
    subject: "computer",
    title: "ស្លាយបង្រៀន៖ Modern CSS Layout (Flexbox & Grid Made Easy)",
    desc: "ស្លាយបង្រៀនប្លង់គេហទំព័រ មានដ្យាក្រាមរៀបចំ container, items, justify-content, align-items យ៉ាងងាយយល់។",
    format: "PPTX / PDF (38 Slides)",
    date: "ឆមាសទី ២",
    details: {
      type: "slide",
      totalSlides: 38,
      highlights: [
        "Slide 1-8: ដែនកំណត់នៃ Float និងហេតុផលដែលត្រូវប្រើ Flexbox",
        "Slide 9-22: Flexbox Direction, Wrap, Justify-Content, Align-Items",
        "Slide 23-34: CSS Grid 2D Layouts (Columns, Rows, Gap)",
        "Slide 35-38: ការអនុវត្តបង្កើត Header & Card Layout"
      ]
    }
  },
  {
    id: "slide-3",
    category: "slides",
    grade: "grade-10",
    subject: "english",
    title: "ស្លាយបង្រៀន៖ English for Everyday Communication & Tech Vocab",
    desc: "ស្លាយបណ្តុះបណ្តាលការសន្ទនាជាមូលដ្ឋាន និងពាក្យបច្ចេកទេសកុំព្យូទ័រដែលប្រើប្រាស់ប្រចាំថ្ងៃ។",
    format: "Canva Slides (30 Slides)",
    date: "ឆមាសទី ១",
    details: {
      type: "slide",
      totalSlides: 30,
      highlights: [
        "Greeting & Self Introduction in Professional Context",
        "Essential Computer Terms: Hardware, Software, Browser, Search Engine",
        "Practice Dialogues in Classroom & Laboratory"
      ]
    }
  },

  // ==================== មេរៀនលម្អិត (DETAILED LESSONS) ====================
  {
    id: "lesson-1",
    category: "lessons",
    grade: "grade-12",
    subject: "english",
    title: "មេរៀនលម្អិត៖ យុទ្ធសាស្ត្រដោះស្រាយវិញ្ញាសាអំណាន (Reading Comprehension Strategies)",
    desc: "ឯកសារមេរៀន ព្រមទាំងគន្លឹះ Skimming, Scanning, Context Clues និងការស្វែងរក Main Idea សម្រាប់បាក់ឌុប។",
    format: "PDF (២៨ ទំព័រ)",
    date: "ឯកសារជំនួយស្មារតីថ្នាក់ទី១២",
    details: {
      type: "lesson",
      content: `
        <h4>ខ្លឹមសារសង្ខេបនៃមេរៀន៖</h4>
        <p><strong>១. វិធីសាស្ត្រ Skimming៖</strong> ការអានត្រួសៗដើម្បីដឹងពីប្រធានបទធំ និងបំណងរបស់អ្នកនិពន្ធក្នុងរយៈពេលតិចជាង ២ នាទី។</p>
        <p><strong>២. វិធីសាស្ត្រ Scanning៖</strong> ការស្វែងរកព័ត៌មានជាក់លាក់ (លេខ, ឆ្នាំ, ឈ្មោះមនុស្ស, ទីកន្លែង) ដោយមិនចាំបាច់អានពាក្យមួយៗ។</p>
        <p><strong>៣. Context Clues៖</strong> ការទាយអត្ថន័យនៃពាក្យប្លែកៗតាមរយៈប្រយោគមុន និងក្រោយ។</p>
        <p><strong>៤. លំហាត់អនុវត្តជាក់ស្តែង៖</strong> ដកស្រង់ចេញពីអត្ថបទវិញ្ញាសាអន្តរជាតិ និងបាក់ឌុប ៥ ឆ្នាំចុងក្រោយ។</p>
      `
    }
  },
  {
    id: "lesson-2",
    category: "lessons",
    grade: "grade-11",
    subject: "computer",
    title: "មេរៀនលម្អិត៖ ក្បួនដោះស្រាយ និងការគិតបែបកុំព្យូទ័រ (Algorithms & Logic)",
    desc: "មេរៀនបង្រៀន Flowchart, Pseudocode, លក្ខខណ្ឌ If-Else, និងរង្វិលជុំ (Loops) ជាភាសាខ្មែរ។",
    format: "PDF (៣៤ ទំព័រ)",
    date: "កម្មវិធី ICT ថ្នាក់ទី១១",
    details: {
      type: "lesson",
      content: `
        <h4>មាតិកាសំខាន់ៗ៖</h4>
        <p><strong>• អ្វីទៅជា Algorithm?</strong> ជំហានលម្អិតក្នុងការដោះស្រាយបញ្ហាជាក់ស្តែងប្រកបដោយតក្កវិជ្ជា។</p>
        <p><strong>• និមិត្តសញ្ញា Flowchart៖</strong> Start/End (Oval), Process (Rectangle), Decision (Diamond), Input/Output (Parallelogram)។</p>
        <p><strong>• ឧទាហរណ៍ជាក់ស្តែង៖</strong> ក្បួនគណនាពិន្ទុមធ្យមភាគសិស្ស និងការកំណត់និទ្ទេស A, B, C, D, E, F។</p>
      `
    }
  },
  {
    id: "lesson-3",
    category: "lessons",
    grade: "grade-10",
    subject: "computer",
    title: "មេរៀនលម្អិត៖ ស្ថាបត្យកម្មកុំព្យូទ័រ និងគ្រឿងបង្គុំ Hardware",
    desc: "ស្គាល់ពីតួនាទី CPU, RAM, Storage (SSD/HDD), Motherboard, Power Supply និងឧបករណ៍បញ្ចូល/បញ្ចេញ។",
    format: "PDF (២០ ទំព័រ)",
    date: "ថ្នាក់ទី ១០",
    details: {
      type: "lesson",
      content: `
        <h4>ខ្លឹមសារមេរៀន៖</h4>
        <p>ស្វែងយល់ពីរបៀបដែលកុំព្យូទ័រដំណើរការពី Input -> Processing (CPU/RAM) -> Storage -> Output។</p>
        <p>ការថែទាំកុំព្យូទ័រក្នុងបន្ទប់ Lab និងការដោះស្រាយបញ្ហាដំបូងពេលម៉ាស៊ីនគាំង។</p>
      `
    }
  },

  // ==================== វិញ្ញាសា (EXAM PAPERS) ====================
  {
    id: "exam-1",
    category: "exams",
    grade: "grade-12",
    subject: "english",
    title: "វិញ្ញាសាគំរូត្រៀមប្រឡងបាក់ឌុប (BacII English Mock Exam 2025)",
    desc: "វិញ្ញាសាពេញលេញតាមទម្រង់ក្រសួងអប់រំ យុវជន និងកីឡា រួមមាន Reading, Vocabulary, Grammar, និង Writing អមដោយគន្លឹះដោះស្រាយ។",
    format: "PDF (សំណួរ + អត្រាកំណែ)",
    date: "ត្រៀមប្រឡងបាក់ឌុប",
    details: {
      type: "exam",
      totalMarks: 50,
      duration: "៦០ នាទី",
      sections: [
        "Part 1: Reading Comprehension (15 marks)",
        "Part 2: Grammar & Structure (15 marks)",
        "Part 3: Vocabulary in Context (10 marks)",
        "Part 4: Guided Short Writing (10 marks)"
      ],
      hasAnswerKey: true
    }
  },
  {
    id: "exam-2",
    category: "exams",
    grade: "grade-11",
    subject: "computer",
    title: "វិញ្ញាសាអនុវត្តកុំព្យូទ័រឆមាសទី ១ (ICT Practical Exam)",
    desc: "វិញ្ញាសាអនុវត្តផ្ទាល់លើកុំព្យូទ័រ៖ ការបង្កើតគេហទំព័រ HTML/CSS មួយទំព័រ និងការគ្រប់គ្រង Folder File ត្រឹមត្រូវ។",
    format: "ZIP (Project Files + Rubric)",
    date: "ប្រឡងឆមាសទី ១",
    details: {
      type: "exam",
      totalMarks: 100,
      duration: "៩០ នាទី",
      sections: [
        "Task 1: Semantic HTML Markup Structure (30 pts)",
        "Task 2: CSS Styling & Flexbox Navigation (40 pts)",
        "Task 3: Responsive Behavior & File Organization (30 pts)"
      ],
      hasAnswerKey: true
    }
  },
  {
    id: "exam-3",
    category: "exams",
    grade: "grade-10",
    subject: "english",
    title: "វិញ្ញាសាប្រឡងភាសាអង់គ្លេសឆមាសទី ២ ថ្នាក់ទី ១០",
    desc: "វិញ្ញាសាវាយតម្លៃចំណេះដឹងវេយ្យាករណ៍ Present, Past, Future, Modals និងអត្ថបទសន្ទនា។",
    format: "PDF (មានអត្រាកំណែ)",
    date: "ប្រឡងឆមាសទី ២",
    details: {
      type: "exam",
      totalMarks: 50,
      duration: "៥០ នាទី",
      hasAnswerKey: true
    }
  },

  // ==================== លំហាត់ & តេស្ត (EXERCISES & TESTS) ====================
  {
    id: "test-g10-hub",
    category: "tests",
    grade: "grade-10",
    subject: "english",
    title: "🎯 ប្រព័ន្ធតេស្ត & កម្រងសំណួរភាសាអង់គ្លេសថ្នាក់ទី១០ (Bloom A1-C1 Hub)",
    desc: "ប្រព័ន្ធតេស្តអន្តរកម្មពេញលេញគ្រប់កម្រិត Bloom (A1-C1) ផ្អែកលើសៀវភៅពុម្ព English Grade 10 របស់ក្រសួងអប់រំ យុវជន និងកីឡា។ មានសំឡេងស្ដាប់ Audio, អំណាន, វេយ្យាករណ៍, និងវាក្យសព្ទ។",
    format: "Interactive Web App (Bloom A1-C1)",
    date: "កម្មវិធីផ្លូវការថ្នាក់ទី១០",
    details: {
      type: "g10-test",
      testUrl: "tests.html",
      features: "Audio Speech, Instant Explanations, Timer, Certificate"
    }
  },
  {
    id: "test-g10-monthly",
    category: "tests",
    grade: "grade-10",
    subject: "english",
    title: "📅 តេស្តប្រចាំខែភាសាអង់គ្លេសថ្នាក់ទី១០ (Monthly Assessment Tests 1-9)",
    desc: "កម្រងវិញ្ញាសាតេស្តវាស់ស្ទង់សមត្ថភាពប្រចាំខែតាមកម្រិត Bloom's Taxonomy សម្រាប់អនុវត្តត្រៀមប្រឡងក្នុងថ្នាក់រៀន។",
    format: "Interactive Test & Timer",
    date: "តេស្តប្រចាំខែ ១-៩",
    details: {
      type: "g10-test",
      testUrl: "tests.html?mode=monthly",
      features: "មានកំណត់ម៉ោង និងពិន្ទុវិភាគតាមកម្រិត Bloom"
    }
  },
  {
    id: "test-g10-sem1",
    category: "tests",
    grade: "grade-10",
    subject: "english",
    title: "📑 វិញ្ញាសាប្រឡងភាសាអង់គ្លេសឆមាសទី ១ (Semester 1 Exam - Units 1-19)",
    desc: "វិញ្ញាសាប្រឡងឆមាសទី ១ ពេញលេញគ្រប់ជំនាញ (Listening, Reading, Grammar, Vocabulary) ផ្អែកលើមេរៀនទី ១ ដល់ទី ១៩។",
    format: "Full Exam (Units 1-19)",
    date: "ប្រឡងបញ្ចប់ឆមាសទី ១",
    details: {
      type: "g10-test",
      testUrl: "tests.html?mode=semester1",
      features: "៤០ សំណួរគ្រប់កម្រិត Bloom A1-C1"
    }
  },
  {
    id: "test-g10-sem2",
    category: "tests",
    grade: "grade-10",
    subject: "english",
    title: "📑 វិញ្ញាសាប្រឡងភាសាអង់គ្លេសឆមាសទី ២ (Semester 2 Exam - Units 20-35)",
    desc: "វិញ្ញាសាប្រឡងឆមាសទី ២ គ្រប់ជំនាញ ផ្អែកលើមេរៀនទី ២០ ដល់ទី ៣៥ (Order of Adjectives, Personality, Jobs, Two Sides, Arrangements)។",
    format: "Full Exam (Units 20-35)",
    date: "ប្រឡងបញ្ចប់ឆមាសទី ២",
    details: {
      type: "g10-test",
      testUrl: "tests.html?mode=semester2",
      features: "៤០ សំណួរគ្រប់កម្រិត Bloom A1-C1"
    }
  },
  {
    id: "test-g10-yearend",
    category: "tests",
    grade: "grade-10",
    subject: "english",
    title: "🏆 វិញ្ញាសាប្រឡងបញ្ចប់ឆ្នាំសិក្សាភាសាអង់គ្លេសថ្នាក់ទី១០ (Year-End Exam)",
    desc: "វិញ្ញាសាប្រឡងសរុបបញ្ចប់ឆ្នាំសិក្សាថ្នាក់ទី១០ វាស់ស្ទង់សមត្ថភាពគ្រប់កម្រិត Bloom (A1-C1) អមដោយវិញ្ញាបនបត្របញ្ជាក់សមត្ថភាព។",
    format: "Comprehensive Mastery Exam",
    date: "ប្រឡងបញ្ចប់ឆ្នាំសិក្សា",
    details: {
      type: "g10-test",
      testUrl: "tests.html?mode=yearend",
      features: "មាន Certificate of Achievement អាច Print បាន"
    }
  },
  {
    id: "test-1",
    category: "tests",
    grade: "grade-12",
    subject: "english",
    title: "លំហាត់តេស្តរហ័ស៖ 100 Câu Grammar Traps in English",
    desc: "កម្រងលំហាត់ជ្រើសរើសចម្លើយត្រឹមត្រូវ (Multiple Choice) ចំនួន ១០០ សំណួរ ចងក្រងពីចំណុចដែលសិស្សតែងច្រឡំញឹកញាប់បំផុត។",
    format: "Interactive Quiz / PDF Worksheet",
    date: "លំហាត់ពង្រឹងសមត្ថភាព",
    details: {
      type: "test",
      questionsCount: 100,
      features: "មានចម្លើយ និងការពន្យល់លម្អិតនៅចុងបញ្ចប់"
    }
  },
  {
    id: "test-2",
    category: "tests",
    grade: "grade-11",
    subject: "computer",
    title: "លំហាត់កូដប្រចាំសប្តាហ៍៖ CSS Flexbox Challenge 10 Levels",
    desc: "សន្លឹកកិច្ចការលំហាត់អនុវត្តតម្រឹមប្រអប់ cards ដោយប្រើ flexbox ពីកម្រិតងាយទៅកម្រិតស្មុគស្មាញ។",
    format: "Code Starter Files + PDF Guide",
    date: "អនុវត្តក្នុង ICT Lab",
    details: {
      type: "test",
      levels: 10,
      features: "មាន Starter Code និង Final Solution សម្រាប់ផ្ទៀងផ្ទាត់"
    }
  },
  {
    id: "test-3",
    category: "tests",
    grade: "grade-10",
    subject: "computer",
    title: "តេស្តវាស់ស្ទង់សមត្ថភាពវាយអក្សរ & កុំព្យូទ័រការិយាល័យ",
    desc: "លំហាត់វាយអក្សរខ្មែរយូនីកូដ និងអង់គ្លេស រួមជាមួយការរៀបចំឯកសារ Word & Excel។",
    format: "Worksheet & Criteria Form",
    date: "តេស្តប្រចាំខែ",
    details: {
      type: "test",
      features: "តារាងវាស់ពាក្យក្នុងមួយនាទី (WPM) និងភាពត្រឹមត្រូវ"
    }
  },

  // ==================== ល្បែងសិក្សា (EDUCATIONAL GAMES) ====================
  {
    id: "game-hangman",
    category: "games",
    grade: "all",
    subject: "english",
    title: "ល្បែងសិក្សាទី១៖ Hangman (The Melting Snowman, Shark Plank & Rocket)",
    desc: "ល្បែងទាយពាក្យអប់រំជំនាន់ថ្មី! លេងម្នាក់ឯង (Solo at Own Pace), ប្រកួតជាគូ (Pairs 1v1 Rivalry) ឬជាក្រុមតាម QR Code & Link។ រកបានពិន្ទុតាមចំនួនតួអក្សរ (Score Per Letter), រក្សាវេនពេលទាយត្រូវជាប់គ្នា (Streak Turns), និងទាយពាក្យទាំងមូលយកប្រាក់រង្វាន់ 5 ពិន្ទុ (Solve for Bonus) ជាមួយទិដ្ឋភាពរំភើបញាប់ញ័រដូចជា បុរសទឹកកករលាយ ក្តារបន្ទះឆ្លាមសមុទ្រ និងការបាញ់បង្ហោះរ៉ុក្កែត!",
    format: "Solo, Pairs 1v1 & Group QR Room (High-Stakes Countdown Themes)",
    date: "Score Per Letter • Streak Turns • Solve for Bonus",
    details: {
      type: "interactive-game",
      gameType: "hangman"
    }
  },
  {
    id: "game-word-shake-2",
    category: "games",
    grade: "all",
    subject: "english",
    title: "ល្បែងសិក្សាទី២៖ Word Shake II (តារាង 6-12 អក្សរ • AI, Pairs & QR Group • Full Arena)",
    desc: "ល្បែងពង្រីកវាក្យសព្ទអង់គ្លេសជំនាន់ថ្មី! តារាងអក្សរពី 6 ដល់ 12 តួ ប្រកួតទល់នឹងកុំព្យូទ័រ (AI Bot) ជាគូ (Pairs 1v1) ឬជាក្រុមតាមរយៈការស្កេន QR Code & Link។ គាំទ្រការលេងពេញអេក្រង់កុំព្យូទ័រ (Full Screen Display Arena)!",
    format: "Table 6-12 Letters (AI Bot, Pairs & QR Group • Fullscreen)",
    date: "តារាង 6-12 អក្សរ • Solo vs AI, Pairs & QR Group",
    details: {
      type: "interactive-game",
      gameType: "word-shake-2"
    }
  },
  {
    id: "game-1",
    category: "games",
    grade: "grade-11",
    subject: "computer",
    title: "ល្បែងសិក្សាទី៣៖ HTML Tag Detective (អ្នកស៊ើបអង្កេតកូដ)",
    desc: "ល្បែងផ្គូផ្គង និងស្វែងរកកូដ HTML ត្រឹមត្រូវដើម្បីដោះស្រាយបញ្ហាទំព័រគេហទំព័រដែលខូច! ចុចលេងភ្លាមៗលើ Browser។",
    format: "Interactive Web Game (Playable)",
    date: "លេងលើ Browser បានភ្លាមៗ",
    details: {
      type: "interactive-game",
      gameType: "html-detective"
    }
  },
  {
    id: "game-2",
    category: "games",
    grade: "grade-12",
    subject: "english",
    title: "ល្បែងសិក្សាទី៤៖ Vocab & Tech Match Master (ផ្គូផ្គងពាក្យគន្លឹះ)",
    desc: "ល្បែងកម្សាន្តអប់រំផ្គូផ្គងពាក្យអង់គ្លេស និងអត្ថន័យជាភាសាខ្មែរ រាប់ពិន្ទុ និងគណនាពេលវេលាជាក់ស្តែង។",
    format: "Interactive Mini Game",
    date: "លេងលើ Browser បានភ្លាមៗ",
    details: {
      type: "interactive-game",
      gameType: "vocab-match"
    }
  },

  // ==================== ស្នាដៃផ្សេងៗ (OTHER WORKS) ====================
  {
    id: "other-1",
    category: "others",
    grade: "grade-11",
    subject: "computer",
    title: "គម្រោង៖ ប្រព័ន្ធបង្កើតកាតសិស្ស និងវត្តមាន QR Code",
    desc: "គំនិតច្នៃប្រឌិតរបស់លោកគ្រូ និងសិស្សក្លឹបកូដ ក្នុងការប្រើប្រាស់ QR Code សម្រាប់កត់ត្រាវត្តមានសិស្សក្នុងបន្ទប់ ICT។",
    format: "Case Study & Source Code",
    date: "គម្រោងច្នៃប្រឌិតវិទ្យាល័យ",
    details: {
      type: "other",
      highlights: [
        "កាត់បន្ថយពេលវេលាស្រង់វត្តមានពី ១០នាទី មកត្រឹម ១នាទី",
        "សិស្សានុសិស្សបានរៀនពីការបង្កើត QR Scanner តាមកាមេរ៉ាកុំព្យូទ័រ",
        "ទទួលបានការកោតសរសើរពីគណៈគ្រប់គ្រងវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ"
      ]
    }
  },
  {
    id: "other-2",
    category: "others",
    grade: "grade-12",
    subject: "english",
    title: "កម្រងវីដេអូបង្រៀនគន្លឹះបាក់ឌុប៖ 5 Minutes English Hacks",
    desc: "កម្រងវីដេអូខ្លីៗផលិតឡើងសម្រាប់ចែករំលែកលើ Telegram & YouTube បង្រៀនគន្លឹះចងចាំក្បួនវេយ្យាករណ៍លឿនៗ។",
    format: "Video Series (12 Episodes)",
    date: "ការចែករំលែកឌីជីថល",
    details: {
      type: "other",
      highlights: [
        "វីដេអូខ្លី ងាយយល់ ចំចំណុចសំខាន់ៗ",
        "មានសិស្សទស្សនាជាង ១០,០០០ ដងក្នុងខេត្តសៀមរាប",
        "ជួយសិស្សនៅតំបន់ដាច់ស្រយាលអាចរៀនសូត្របន្ថែមដោយឥតគិតថ្លៃ"
      ]
    }
  }
];

/* ==========================================================================
   INITIALIZATION & FILTER LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTeachingHub();
});

let activeCategory = 'all';
let activeGrade = 'all';
let activeSubject = 'all';
let searchQuery = '';

function initTeachingHub() {
  // Read URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  const gradeParam = urlParams.get('grade');
  const gameParam = urlParams.get('game');

  if (catParam) {
    activeCategory = catParam;
  }
  if (gradeParam) {
    activeGrade = `grade-${gradeParam}`;
  }
  const roomParam = urlParams.get('room');
  const isHangman = (
    gameParam === 'hangman' || gameParam === 'game-hangman' ||
    (roomParam && roomParam.startsWith('HM-'))
  );
  const isWordShake2 = (
    !isHangman && (
      gameParam === 'word-shake-2' || gameParam === 'wordshake2' || 
      gameParam === 'word-shape' || gameParam === 'wordshape' || 
      gameParam === 'game-word-shake-2' || gameParam === 'game-word-shape' ||
      (roomParam && roomParam.startsWith('ST-')) ||
      (roomParam && !roomParam.startsWith('HM-'))
    )
  );

  if (isHangman || isWordShake2) {
    activeCategory = 'games';
  }

  setupEventListeners();
  syncUIButtons();
  renderTeachingCards();

  if (isHangman) {
    setTimeout(() => {
      openTeachingPreview('game-hangman');
    }, 250);
  } else if (isWordShake2) {
    setTimeout(() => {
      openTeachingPreview('game-word-shake-2');
    }, 250);
  }
}

function setupEventListeners() {
  // Category Chips
  const categoryBtns = document.querySelectorAll('.category-chip-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderTeachingCards();
    });
  });

  // Grade Pills
  const gradeBtns = document.querySelectorAll('.grade-pill-btn');
  gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      gradeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeGrade = btn.dataset.grade;
      renderTeachingCards();
    });
  });

  // Subject Tabs
  const subjectBtns = document.querySelectorAll('.subject-pill-btn');
  subjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subjectBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSubject = btn.dataset.subject;
      renderTeachingCards();
    });
  });

  // Search Input
  const searchInput = document.getElementById('teaching-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTeachingCards();
    });
  }
}

function syncUIButtons() {
  // Sync category active button
  const categoryBtns = document.querySelectorAll('.category-chip-btn');
  categoryBtns.forEach(btn => {
    if (btn.dataset.category === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Sync grade active button
  const gradeBtns = document.querySelectorAll('.grade-pill-btn');
  gradeBtns.forEach(btn => {
    if (btn.dataset.grade === activeGrade) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderTeachingCards() {
  const gridContainer = document.getElementById('teaching-cards-grid');
  const countDisplay = document.getElementById('items-count-display');
  const stageContainer = document.getElementById('wordshape-stage-container');
  if (!gridContainer) return;

  // Manage Educational Games Nav and Stages (Hangman & Word Shake II)
  const eduNavContainer = document.getElementById('edu-games-nav-container');
  const hangmanStage = document.getElementById('hangman-stage-container');
  const wordshakeStage = document.getElementById('wordshape-stage-container');
  
  if (activeCategory === 'games') {
    if (eduNavContainer) eduNavContainer.style.display = 'block';

    const urlParams = new URLSearchParams(window.location.search);
    const gameParam = urlParams.get('game');
    const roomParam = urlParams.get('room');
    const preferWordShake = (gameParam === 'word-shake-2' || gameParam === 'wordshake2' || (roomParam && roomParam.startsWith('ST-')));

    // Function to switch visible game stage
    const showGameStage = (activeGame) => {
      const btnHangman = document.getElementById('btn-tab-hangman');
      const btnWS2 = document.getElementById('btn-tab-wordshake2');

      if (activeGame === 'hangman') {
        if (hangmanStage) {
          hangmanStage.style.display = 'block';
          if (!hangmanStage.dataset.initialized) {
            hangmanStage.dataset.initialized = 'true';
            if (typeof window.initHangmanGame === 'function') {
              window.initHangmanGame(hangmanStage);
            }
          }
        }
        if (wordshakeStage) wordshakeStage.style.display = 'none';
        if (btnHangman) btnHangman.className = 'edu-game-nav-btn active';
        if (btnWS2) btnWS2.className = 'edu-game-nav-btn';
      } else {
        if (wordshakeStage) {
          wordshakeStage.style.display = 'block';
          if (!wordshakeStage.dataset.initialized) {
            wordshakeStage.dataset.initialized = 'true';
            if (typeof window.initWordShake2Game === 'function') {
              window.initWordShake2Game(wordshakeStage);
            }
          }
        }
        if (hangmanStage) hangmanStage.style.display = 'none';
        if (btnHangman) btnHangman.className = 'edu-game-nav-btn';
        if (btnWS2) btnWS2.className = 'edu-game-nav-btn active-ws2';
      }
    };

    // Initial stage selection
    showGameStage(preferWordShake ? 'wordshake' : 'hangman');

    // Attach click listeners to tabs if not already attached
    const btnHangman = document.getElementById('btn-tab-hangman');
    const btnWS2 = document.getElementById('btn-tab-wordshake2');
    if (btnHangman && !btnHangman.dataset.bound) {
      btnHangman.dataset.bound = 'true';
      btnHangman.addEventListener('click', () => showGameStage('hangman'));
    }
    if (btnWS2 && !btnWS2.dataset.bound) {
      btnWS2.dataset.bound = 'true';
      btnWS2.addEventListener('click', () => showGameStage('wordshake'));
    }
  } else {
    if (eduNavContainer) eduNavContainer.style.display = 'none';
    if (hangmanStage) hangmanStage.style.display = 'none';
    if (wordshakeStage) wordshakeStage.style.display = 'none';
  }

  // Manage Ready-To-Use Stage for Grade 10 Tests Hub
  const testsStageContainer = document.getElementById('tests-stage-container');
  if (testsStageContainer) {
    if (activeCategory === 'tests') {
      testsStageContainer.style.display = 'block';
      if (!testsStageContainer.dataset.initialized) {
        testsStageContainer.dataset.initialized = 'true';
        renderTestsHubStage(testsStageContainer);
      }
    } else {
      testsStageContainer.style.display = 'none';
    }
  }

  const filtered = teachingData.filter(item => {
    const matchCat = (activeCategory === 'all' || item.category === activeCategory);
    const matchGrade = (activeGrade === 'all' || item.grade === activeGrade || item.grade === 'all');
    const matchSubject = (activeSubject === 'all' || item.subject === activeSubject);
    const matchSearch = (!searchQuery || 
      item.title.toLowerCase().includes(searchQuery) || 
      item.desc.toLowerCase().includes(searchQuery) ||
      item.format.toLowerCase().includes(searchQuery)
    );
    return matchCat && matchGrade && matchSubject && matchSearch;
  });

  if (countDisplay) {
    countDisplay.textContent = `បង្ហាញ ${filtered.length} ធនធានបង្រៀន`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <h3 style="color: var(--text-primary); margin-bottom: 8px;">មិនមានឯកសារដែលត្រូវនឹងលក្ខខណ្ឌនេះទេ</h3>
        <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 20px;">
          សូមសាកល្បងផ្លាស់ប្តូរជម្រើសកម្រិតថ្នាក់ ឬវាយពាក្យគន្លឹះស្វែងរកផ្សេងទៀត។
        </p>
        <button class="btn btn-secondary" onclick="resetAllFilters()">សម្អាតតម្រងទាំងអស់ (Reset Filters)</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(item => {
    let gradeLabel = "ថ្នាក់ទី ១០";
    let gradeClass = "badge-grade-10";
    if (item.grade === 'grade-11') {
      gradeLabel = "ថ្នាក់ទី ១១";
      gradeClass = "badge-grade-11";
    } else if (item.grade === 'grade-12') {
      gradeLabel = "ថ្នាក់ទី ១២ (បាក់ឌុប)";
      gradeClass = "badge-grade-12";
    } else if (item.grade === 'all') {
      gradeLabel = "គ្រប់កម្រិតថ្នាក់ (Grades 10-12)";
      gradeClass = "badge-grade-12";
    }

    let catIcon = "📝";
    let catText = "កិច្ចតែងការ";
    if (item.category === 'slides') { catIcon = "📊"; catText = "ស្លាយបង្រៀន"; }
    else if (item.category === 'lessons') { catIcon = "📖"; catText = "មេរៀនលម្អិត"; }
    else if (item.category === 'exams') { catIcon = "📄"; catText = "វិញ្ញាសា"; }
    else if (item.category === 'tests') { catIcon = "✍️"; catText = "លំហាត់ & តេស្ត"; }
    else if (item.category === 'games') { catIcon = "🎮"; catText = "ល្បែងសិក្សា"; }
    else if (item.category === 'others') { catIcon = "💡"; catText = "ស្នាដៃផ្សេងៗ"; }

    const subjBadge = item.subject === 'english' ? '🇬🇧 English' : '💻 ICT / Code';
    const isHangman = item.id === 'game-hangman';
    const isWordShake2 = item.id === 'game-word-shake-2' || item.id === 'game-word-shape';
    const isG10Test = item.id && item.id.startsWith('test-g10-');

    return `
      <div class="teaching-card ${isHangman || isWordShake2 ? 'card-featured-game' : ''}" data-category="${item.category}" data-grade="${item.grade}" data-subject="${item.subject}" style="${isHangman ? 'border: 2px solid #ec4899; box-shadow: 0 0 20px rgba(236, 72, 153, 0.25);' : (isWordShake2 || isG10Test ? 'border: 2px solid var(--accent-cyan); box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);' : '')}">
        <div class="card-top-meta">
          <span class="grade-badge-tag ${gradeClass}">${gradeLabel}</span>
          <span class="category-tag-badge">
            <span>${catIcon}</span> ${catText}
          </span>
          ${isHangman ? '<span class="badge-mini" style="background:#ec4899; color:#fff; font-weight:800;">🎪 ល្បែងទី១ • Hangman</span>' : ''}
          ${isWordShake2 ? '<span class="badge-mini" style="background:var(--accent-gold); color:#000; font-weight:800;">🌟 ល្បែងទី២ • Word Shake II</span>' : ''}
          ${isG10Test ? '<span class="badge-mini" style="background:var(--accent-cyan); color:#000; font-weight:800;">🎯 Bloom A1-C1</span>' : ''}
        </div>

        <h3 class="teaching-card-title">${item.title}</h3>
        <p class="teaching-card-desc">${item.desc}</p>

        <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px; flex-wrap:wrap;">
          <span class="skill-pill" style="font-size:0.75rem;">${subjBadge}</span>
          <span class="skill-pill" style="font-size:0.75rem; color:var(--accent-cyan);">${item.date}</span>
        </div>

        <div class="teaching-card-footer">
          <div class="format-indicator">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            <span>${item.format}</span>
          </div>
          <div class="card-action-btns">
            ${isG10Test ? `
              <a href="${item.details?.testUrl || 'tests.html'}" class="btn-card-preview" style="background:linear-gradient(135deg, #0284c7, #6366f1); color:#fff; border:none; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
                🚀 ធ្វើតេស្តភ្លាមៗ
              </a>
            ` : `
              <button class="btn-card-preview" style="${isHangman ? 'background:linear-gradient(135deg, #ec4899, #8b5cf6); color:#fff; border:none; font-weight:700; box-shadow:0 4px 12px rgba(236,72,153,0.35);' : (isWordShake2 ? 'background:linear-gradient(135deg, #0284c7, #6366f1); color:#fff; border:none; font-weight:700; box-shadow:0 4px 12px rgba(56,189,248,0.35);' : '')}" onclick="openTeachingPreview('${item.id}')">
                ${isHangman ? '🎪 ចុចលេង Hangman ភ្លាមៗ' : isWordShake2 ? '🎮 ចុចលេង Word Shake II ភ្លាមៗ' : item.category === 'games' ? '🎮 ចុចលេង' : '👁️ មើលលម្អិត'}
              </button>
            `}
            <button class="btn-card-download" onclick="simulateDownload('${item.title}')" title="ទាញយកឯកសារ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.resetAllFilters = function() {
  activeCategory = 'all';
  activeGrade = 'all';
  activeSubject = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('teaching-search-input');
  if (searchInput) searchInput.value = '';
  syncUIButtons();
  document.querySelectorAll('.subject-pill-btn').forEach((b, i) => {
    if (i === 0) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderTeachingCards();
};

/* ==========================================================================
   MODAL PREVIEW & INTERACTIVE GAMES
   ========================================================================== */
window.openTeachingPreview = function(itemId) {
  const item = teachingData.find(d => d.id === itemId);
  if (!item) return;

  const modal = document.getElementById('details-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body-content');

  if (!modal || !modalBody) return;

  modalTitle.textContent = item.title;

  if (item.details?.type === 'plan') {
    // Lesson Plan Structure
    const d = item.details;
    modalBody.innerHTML = `
      <div class="plan-sheet-preview">
        <div class="plan-header-box">
          <div class="plan-row">
            <span><strong>មុខវិជ្ជា៖</strong> ${d.subjectName}</span>
            <span><strong>កម្រិតថ្នាក់៖</strong> ${d.gradeLevel}</span>
          </div>
          <div class="plan-row">
            <span><strong>គ្រូបង្រៀន៖</strong> លោកគ្រូ អ៊ូច អុល</span>
            <span><strong>រយៈពេល៖</strong> ${d.duration}</span>
          </div>
          <div class="plan-row">
            <span><strong>ទីកន្លែង៖</strong> វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ</span>
            <span><strong>កាលបរិច្ឆេទ៖</strong> ${item.date}</span>
          </div>
        </div>

        <h4 style="color:var(--accent-gold); margin-bottom:8px;">I. វត្ថុបំណងនៃមេរៀន (Lesson Objectives)</h4>
        <ul style="padding-left:20px; margin-bottom:16px; color:var(--text-secondary); font-size:0.88rem;">
          ${d.objectives.map(o => `<li style="margin-bottom:4px;">${o}</li>`).join('')}
        </ul>

        <h4 style="color:var(--accent-cyan); margin-bottom:8px;">II. សម្ភារឧបទេស (Teaching Aids)</h4>
        <p style="color:var(--text-secondary); font-size:0.88rem; margin-bottom:16px;">${d.materials || 'សៀវភៅពុម្ព, LCD Projector, ICT Lab, សន្លឹកកិច្ចការ'}</p>

        <h4 style="color:var(--accent-emerald); margin-bottom:10px;">III. ដំណើរការបង្រៀន (ដំណាក់កាលទាំង ៥ នៃគរុកោសល្យ)</h4>
        ${d.steps ? d.steps.map(s => `
          <div class="plan-step-box">
            <div class="plan-step-title">${s.name}</div>
            <div style="font-size:0.85rem; color:var(--text-secondary);">${s.desc}</div>
          </div>
        `).join('') : '<p style="color:var(--text-secondary);">ដំណើរការបង្រៀនលម្អិតមានក្នុងឯកសារទាញយក។</p>'}
      </div>

      <div style="margin-top:16px; display:flex; gap:10px;">
        <button class="btn btn-primary" style="flex:1;" onclick="simulateDownload('${item.title}')">
          📥 ទាញយកកិច្ចតែងការពេញលេញ (Word / PDF)
        </button>
      </div>
    `;
  } else if (item.details?.type === 'slide') {
    // Teaching Slide Preview
    const d = item.details;
    modalBody.innerHTML = `
      <div style="margin-bottom:16px; border-radius:12px; overflow:hidden; background:#000; border:1px solid var(--border-color);">
        <img src="assets/images/teaching_activity.jpg" style="width:100%; height:260px; object-fit:cover;" alt="Slide Preview">
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <span class="skill-pill" style="color:var(--accent-cyan);">📊 ចំនួនស្លាយសរុប៖ ${d.totalSlides} ស្លាយ</span>
        <span class="skill-pill" style="color:var(--accent-emerald);">ទម្រង់ PowerPoint & PDF</span>
      </div>
      <h4 style="color:var(--accent-gold); margin-bottom:10px;">ចំណុចសំខាន់ៗដែលមានក្នុង Slide Deck៖</h4>
      <ul style="padding-left:20px; margin-bottom:20px; color:var(--text-secondary); font-size:0.9rem;">
        ${d.highlights.map(h => `<li style="margin-bottom:6px;">${h}</li>`).join('')}
      </ul>
      <button class="btn btn-primary" style="width:100%;" onclick="simulateDownload('${item.title}')">
        📥 ទាញយក File ស្លាយបង្រៀន (PowerPoint Presentation)
      </button>
    `;
  } else if (item.details?.type === 'interactive-game') {
    // Interactive Educational Games inside modal
    if (item.details.gameType === 'hangman' || item.id === 'game-hangman') {
      if (typeof window.launchHangmanInModal === 'function') {
        window.launchHangmanInModal();
        return;
      }
    } else if (item.details.gameType === 'word-shake-2' || item.details.gameType === 'word-shape' || item.id === 'game-word-shake-2' || item.id === 'game-word-shape') {
      if (typeof window.launchWordShake2InModal === 'function') {
        window.launchWordShake2InModal();
        return;
      }
    } else if (item.details.gameType === 'html-detective') {
      launchHtmlDetectiveGame(modalBody);
    } else {
      launchVocabMatchGame(modalBody);
    }
  } else if (item.details?.type === 'g10-test') {
    modalBody.innerHTML = `
      <div style="color:var(--text-secondary); line-height:1.7; font-size:0.95rem;">
        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(99, 102, 241, 0.12)); padding:22px; border-radius:14px; border:1px solid rgba(56,189,248,0.3); margin-bottom:18px;">
          <h4 style="color:var(--accent-cyan); margin-bottom:8px; font-size:1.15rem;">${item.title}</h4>
          <p style="color:var(--text-primary); margin-bottom:14px;">${item.desc}</p>
          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
            <span class="badge-mini" style="background:#10b981; color:#fff;">🧠 Bloom A1-C1</span>
            <span class="badge-mini" style="background:#38bdf8; color:#000;">🎧 Audio Narration</span>
            <span class="badge-mini" style="background:#f59e0b; color:#000;">⏱️ Timed Assessment</span>
            <span class="badge-mini" style="background:#a855f7; color:#fff;">📖 MoEYS G10</span>
          </div>
          <p style="font-size:0.88rem; color:var(--text-muted);">
            លក្ខណៈពិសេស៖ ${item.details.features || 'មានចម្លើយ និងការពន្យល់លម្អិតទ្វេភាសា (ខ្មែរ-អង់គ្លេស)'}
          </p>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <a href="${item.details.testUrl || 'tests.html'}" class="btn btn-primary" style="flex:1; text-align:center; text-decoration:none; padding:12px; font-weight:700;">
            🚀 ចូលធ្វើតេស្តភ្លាមៗ (Launch Interactive Test) &rarr;
          </a>
          <button class="btn btn-secondary" onclick="simulateDownload('${item.title}')">
            📥 ទាញយកវិញ្ញាសា PDF
          </button>
        </div>
      </div>
    `;
  } else {
    // General detailed modal
    modalBody.innerHTML = `
      <div style="color:var(--text-secondary); line-height:1.7; font-size:0.95rem;">
        <p style="margin-bottom:14px;">${item.desc}</p>
        ${item.details?.content ? item.details.content : ''}
        ${item.details?.sections ? `
          <h4 style="color:var(--accent-cyan); margin:14px 0 8px;">ផ្នែកនៃវិញ្ញាសា៖</h4>
          <ul style="padding-left:20px; margin-bottom:16px;">
            ${item.details.sections.map(s => `<li>${s}</li>`).join('')}
          </ul>
        ` : ''}
        <div style="background:var(--bg-tertiary); padding:14px; border-radius:8px; margin:16px 0; border:1px solid var(--border-color);">
          <strong>📌 កំណត់សម្គាល់៖</strong> ឯកសារនេះត្រូវបានរៀបចំឡើងយ៉ាងផ្ចិតផ្ចង់ស្របតាមកម្មវិធីសិក្សារបស់ក្រសួងអប់រំ យុវជន និងកីឡា ដោយលោកគ្រូ អ៊ូច អុល នៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ។
        </div>
        <button class="btn btn-primary" style="width:100%;" onclick="simulateDownload('${item.title}')">
          📥 ទាញយកឯកសារនេះ (Download File)
        </button>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   GAME 1: VOCAB & TECH MATCH MASTER
   ========================================================================== */
function launchVocabMatchGame(container) {
  const pairs = [
    { en: "Algorithm", km: "ក្បួនដោះស្រាយ" },
    { en: "Database", km: "មូលដ្ឋានទិន្នន័យ" },
    { en: "Network", km: "បណ្តាញកុំព្យូទ័រ" },
    { en: "Cybersecurity", km: "សន្តិសុខសាយប័រ" }
  ];

  let cards = [];
  pairs.forEach((p, idx) => {
    cards.push({ text: p.en, pairId: idx, type: 'en' });
    cards.push({ text: p.km, pairId: idx, type: 'km' });
  });

  // Shuffle
  cards.sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <div class="game-play-area">
      <div class="game-score-bar">
        <span style="color:var(--accent-cyan);">🎮 ល្បែងផ្គូផ្គងពាក្យអង់គ្លេស & បច្ចេកវិទ្យា</span>
        <span id="game-score" style="color:var(--accent-gold);">ពិន្ទុ៖ 0 / 4</span>
      </div>
      <p style="color:var(--text-secondary); font-size:0.88rem; margin-bottom:16px;">
        សូមចុចជ្រើសរើសពាក្យភាសាអង់គ្លេស រួចចុចលើពាក្យបកប្រែជាភាសាខ្មែរដែលត្រូវគ្នា!
      </p>
      <div id="game-word-grid" class="word-grid"></div>
      <div id="game-msg" style="text-align:center; font-weight:600; min-height:24px;"></div>
    </div>
  `;

  const grid = document.getElementById('game-word-grid');
  const scoreEl = document.getElementById('game-score');
  const msgEl = document.getElementById('game-msg');
  let selectedBtn = null;
  let matchesFound = 0;

  cards.forEach(card => {
    const btn = document.createElement('button');
    btn.className = 'word-card-btn';
    btn.textContent = card.text;
    btn.dataset.pairId = card.pairId;

    btn.addEventListener('click', () => {
      if (btn.classList.contains('matched') || btn === selectedBtn) return;

      if (!selectedBtn) {
        selectedBtn = btn;
        btn.classList.add('selected');
        msgEl.textContent = 'សូមជ្រើសរើសពាក្យមួយទៀតដើម្បីផ្គូផ្គង...';
        msgEl.style.color = 'var(--accent-cyan)';
      } else {
        if (selectedBtn.dataset.pairId === btn.dataset.pairId) {
          // Match!
          btn.classList.add('matched');
          selectedBtn.classList.add('matched');
          selectedBtn.classList.remove('selected');
          selectedBtn = null;
          matchesFound++;
          scoreEl.textContent = `ពិន្ទុ៖ ${matchesFound} / 4`;
          msgEl.textContent = '🎉 អស្ចារ្យណាស់! ផ្គូផ្គងបានត្រឹមត្រូវ!';
          msgEl.style.color = 'var(--accent-emerald)';

          if (matchesFound === pairs.length) {
            msgEl.innerHTML = '🏆 <strong>អបអរសាទរ! អ្នកបានឈ្នះល្បែងផ្គូផ្គងពាក្យគន្លឹះនេះហើយ!</strong>';
          }
        } else {
          // Mismatch
          btn.classList.add('selected');
          msgEl.textContent = '❌ មិនទាន់ត្រូវគ្នាទេ សូមសាកល្បងម្តងទៀត!';
          msgEl.style.color = '#ef4444';
          setTimeout(() => {
            btn.classList.remove('selected');
            if (selectedBtn) selectedBtn.classList.remove('selected');
            selectedBtn = null;
          }, 700);
        }
      }
    });

    grid.appendChild(btn);
  });
}

/* ==========================================================================
   GAME 2: HTML TAG DETECTIVE
   ========================================================================== */
function launchHtmlDetectiveGame(container) {
  const challenges = [
    {
      code: "ខ្ញុំចង់បង្កើតប៊ូតុងចុច Link ទៅកាន់ Google។ តើត្រូវប្រើ tag អ្វី?",
      options: ["&lt;a href='...'&gt;", "&lt;link src='...'&gt;", "&lt;btn url='...'&gt;"],
      answer: 0,
      explain: "Tag &lt;a href='...'&gt; គឺជា Anchor tag សម្រាប់តំណភ្ជាប់ Hyperlink!"
    },
    {
      code: "តើ tag មួយណាដែលប្រើសម្រាប់បង្ហាញរូបភាពលើគេហទំព័រ?",
      options: ["&lt;image href='...'&gt;", "&lt;img src='...'&gt;", "&lt;picture link='...'&gt;"],
      answer: 1,
      explain: "Tag &lt;img src='...'&gt; ប្រើប្រាស់ attribute 'src' ដើម្បីទាញយករូបភាពមកបង្ហាញ!"
    }
  ];

  let currentIdx = 0;

  function renderStep() {
    const q = challenges[currentIdx];
    container.innerHTML = `
      <div class="game-play-area">
        <div class="game-score-bar">
          <span style="color:var(--accent-cyan);">🕵️ អ្នកស៊ើបអង្កេតកូដ (HTML Detective)</span>
          <span style="color:var(--accent-gold);">កម្រិត ${currentIdx + 1} / ${challenges.length}</span>
        </div>
        <div style="background:var(--bg-card); padding:16px; border-radius:8px; margin-bottom:16px; border-left:3px solid var(--accent-gold);">
          <strong style="color:var(--text-primary); font-size:1.05rem;">សំណួរ៖</strong>
          <p style="color:var(--text-secondary); margin-top:6px;">${q.code}</p>
        </div>
        <div id="game-options" style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn" onclick="checkDetectiveAnswer(${i})">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div id="detective-feedback" style="font-size:0.9rem;"></div>
      </div>
    `;
  }

  window.checkDetectiveAnswer = function(chosenIdx) {
    const q = challenges[currentIdx];
    const fb = document.getElementById('detective-feedback');
    const opts = document.querySelectorAll('#game-options .quiz-option-btn');
    opts.forEach(o => o.disabled = true);

    if (chosenIdx === q.answer) {
      opts[chosenIdx].classList.add('correct');
      fb.innerHTML = `
        <div style="color:var(--accent-emerald); margin-bottom:12px;">
          🎉 <strong>ពិតជាត្រឹមត្រូវ!</strong> ${q.explain}
        </div>
        ${currentIdx < challenges.length - 1 ? `
          <button class="btn btn-primary" style="width:100%;" onclick="nextDetectiveStep()">កម្រិតបន្ទាប់ &rarr;</button>
        ` : `
          <div style="color:var(--accent-gold); font-weight:700;">🏆 អបអរសាទរ! អ្នកបានឆ្លងកាត់ការស៊ើបអង្កេតកូដទាំងអស់ដោយជោគជ័យ!</div>
        `}
      `;
    } else {
      opts[chosenIdx].classList.add('wrong');
      opts[q.answer].classList.add('correct');
      fb.innerHTML = `
        <div style="color:#ef4444; margin-bottom:12px;">
          ❌ <strong>មិនទាន់ត្រឹមត្រូវទេ!</strong> ${q.explain}
        </div>
      `;
    }
  };

  window.nextDetectiveStep = function() {
    currentIdx++;
    renderStep();
  };

  renderStep();
}

/* ==========================================================================
   DOWNLOAD SIMULATION WITH TOAST
   ========================================================================== */
window.simulateDownload = function(itemTitle) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');

  if (toast && toastText) {
    toastText.textContent = `📥 កំពុងចាប់ផ្តើមទាញយក៖ "${itemTitle}"... រួចរាល់!`;
    toast.style.borderColor = 'var(--accent-emerald)';
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
};

/* ==========================================================================
   FEATURED GRADE 10 TESTS HUB STAGE IN TEACHING PORTAL
   ========================================================================== */
function renderTestsHubStage(container) {
  container.innerHTML = `
    <div class="tests-header-banner" style="margin-bottom:0; background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border: 2px solid var(--accent-cyan); box-shadow: 0 0 25px rgba(56, 189, 248, 0.25);">
      <div class="tests-banner-content">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
          <span class="badge-mini" style="background:var(--accent-gold); color:#000; font-weight:800; font-size:0.85rem; padding:4px 12px;">🌟 Featured Assessment Suite</span>
          <span style="font-size:0.85rem; color:var(--text-muted);">Ministry of Education, Youth and Sport (MoEYS)</span>
        </div>
        <h2 style="font-size:1.8rem; font-weight:800; color:var(--text-primary); margin-bottom:8px;">
          🎯 តេស្ត & កម្រងសំណួរភាសាអង់គ្លេសថ្នាក់ទី ១០ (Bloom A1 &rarr; C1)
        </h2>
        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6; max-width:850px; margin-bottom:20px;">
          ប្រព័ន្ធតេស្ត និងកម្រងសំណួរពេញលេញតាមកម្រិតវិជ្ជាសម្បទា Bloom's Taxonomy (ចងចាំ, យល់ដឹង, អនុវត្ត, វិភាគ, វាយតម្លៃ, បង្កើតថ្មី) ផ្អែកលើសៀវភៅពុម្ពផ្លូវការ <strong>English Grade 10</strong>។ រួមបញ្ចូលសំឡេងស្ដាប់ Audio Speech Synthesis, អំណាន, វេយ្យាករណ៍, និងវាក្យសព្ទផ្គូផ្គងខ្មែរ-អង់គ្លេស។
        </p>

        <!-- Quick Launch Buttons -->
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:10px; margin-bottom:20px;">
          <a href="tests.html?mode=unit" class="btn-test-action secondary" style="justify-content:center; text-decoration:none; font-size:0.88rem;">
            <span>📖</span> អនុវត្តតាមមេរៀន (Units 1-35)
          </a>
          <a href="tests.html?mode=monthly" class="btn-test-action secondary" style="justify-content:center; text-decoration:none; font-size:0.88rem;">
            <span>📅</span> តេស្តប្រចាំខែ (Monthly Tests)
          </a>
          <a href="tests.html?mode=semester1" class="btn-test-action secondary" style="justify-content:center; text-decoration:none; font-size:0.88rem;">
            <span>📑</span> ប្រឡងឆមាសទី ១ (Units 1-19)
          </a>
          <a href="tests.html?mode=semester2" class="btn-test-action secondary" style="justify-content:center; text-decoration:none; font-size:0.88rem;">
            <span>📑</span> ប្រឡងឆមាសទី ២ (Units 20-35)
          </a>
          <a href="tests.html?mode=yearend" class="btn-test-action secondary" style="justify-content:center; text-decoration:none; font-size:0.88rem;">
            <span>🏆</span> ប្រឡងបញ្ចប់ឆ្នាំសិក្សា (Year-End)
          </a>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px; border-top:1px solid var(--border-color); padding-top:16px;">
          <div class="framework-badges-bar">
            <span class="framework-badge badge-bloom" style="font-size:0.8rem;">🧠 Bloom A1-C1</span>
            <span class="framework-badge badge-moeys" style="font-size:0.8rem;">📖 70%+ MoEYS Content</span>
            <span class="framework-badge badge-interactive" style="font-size:0.8rem;">🎧 Listening Audio & Scripts</span>
          </div>
          <a href="tests.html" class="btn-test-action primary" style="text-decoration:none; font-size:1rem; padding:12px 28px;">
            🚀 បើកប្រព័ន្ធតេស្ត & កម្រងសំណួរពេញលេញ (Launch Full Hub) &rarr;
          </a>
        </div>
      </div>
    </div>
  `;
}

