/**
 * Internationalization (i18n) Dictionary & Engine
 * Supports Khmer (km) and English (en)
 * Portfolio of Mr. Ouch Ol - English & Computer Science Educator
 */

const translations = {
  km: {
    // Navigation (Clean, Distinct & Non-Duplicated)
    nav_home: "ទំព័រដើម",
    nav_learning_courses: "វគ្គសិក្សា",
    header_skills_levels: "ជំនាញ & កម្រិតសិក្សា • Skills & Levels",
    skill_grammar: "Grammar",
    skill_grammar_kh: "វេយ្យាករណ៍",
    skill_vocabulary: "Vocabulary",
    skill_vocabulary_kh: "វាក្យសព្ទ",
    skill_reading: "Reading",
    skill_reading_kh: "ការអាន",
    skill_listening: "Listening",
    skill_listening_kh: "ការស្តាប់",
    skill_speaking: "Speaking",
    skill_speaking_kh: "ការនិយាយ",
    skill_writing: "Writing",
    skill_writing_kh: "ការសរសេរ",
    lvl_beginner: "កម្រិតដំបូង",
    lvl_elementary: "កម្រិតបឋម",
    lvl_intermediate: "កម្រិតមធ្យម",
    lvl_upper_int: "មធ្យមកម្រិតខ្ពស់",
    lvl_advanced: "កម្រិតជឿនលឿន",
    lvl_mastery: "ស្ទាត់ជំនាញ",
    nav_courses: "វគ្គសិក្សា & ជំនាញ",
    nav_teaching_materials: "ឯកសារបង្រៀន",
    nav_quizzes_games: "កម្រងតេស្ត & ល្បែង",
    nav_cv: "ប្រវត្តិរូបសង្ខេប",
    nav_contact: "ទំនាក់ទំនង",
    nav_about: "អំពីលោកគ្រូ",
    nav_newsfeed: "សកម្មភាព & ស្នាដៃ",
    nav_disciplines: "មុខវិជ្ជាបង្រៀន",
    nav_teaching: "ឯកសារបង្រៀន",
    nav_showcase: "ស្នាដៃ & សកម្មភាព",
    submenu_games: "ល្បែងសិក្សា",
    submenu_tests: "លំហាត់ & តេស្ត",
    submenu_tests_hub: "តេស្ត & កម្រងសំណួរថ្នាក់ទី១០",
    game_wordshape: "ល្បែង Word Shake II",
    game_wordshake2: "ល្បែង Word Shake II",
    game_hangman: "ល្បែង Hangman",
    sub_english: "ភាសាអង់គ្លេស",
    sub_cs: "វិទ្យាសាស្ត្រកុំព្យូទ័រ & ICT",
    sub_popular_courses: "វគ្គសិក្សាពេញនិយម",
    sub_live_class: "ថ្នាក់រៀនផ្សាយផ្ទាល់",
    sub_edutech_lab: "បន្ទប់ពិសោធន៍ EduTech",
    sub_process: "ដំណើរការសិក្សា",
    sub_about_me: "ស្គាល់លោកគ្រូ អ៊ូច អុល",
    sub_experience: "បទពិសោធន៍ & សមិទ្ធផល",
    sub_newsfeeds: "ព័ត៌មាន & សកម្មភាពបង្រៀន",
    sub_student_projects: "ស្នាដៃគម្រោងសិស្ស",
    sub_testimonials: "ចំណាប់អារម្មណ៍សិស្ស",
    sub_all_materials: "មេរៀនលម្អិត",
    sub_lesson_plans: "កិច្ចតែងការបង្រៀន",
    sub_slides: "ស្លាយបង្រៀន",
    sub_notes_exams: "វិញ្ញាសា",
    sub_grade10_tests: "តេស្តភាសាអង់គ្លេសថ្នាក់ទី១០",
    sub_hangman_game: "ល្បែងពាក្យ Hangman Arena",
    sub_wordshake_game: "ល្បែងពាក្យ Word Shake II",

    // E-Learn & DevSkill Pro Landing Section Keys
    elearn_hero_badge: "🔥 ថ្នាក់រៀនជំនាន់ថ្មី • Next-Gen Edu Platform",
    elearn_hero_title: "Smart Learning<br>Deeper & More<br><span class='title-gradient-orange'>-Amazing</span>",
    elearn_hero_sub: "បង្កើនសមត្ថភាពភាសាអង់គ្លេស និងវិទ្យាសាស្ត្រកុំព្យូទ័រតាមបែបសតវត្សរ៍ទី២១ ជាមួយលោកគ្រូ អ៊ូច អុល ដោយភាពស្ទាត់ជំនាញ និងទំនុកចិត្តខ្ពស់។",
    elearn_hero_btn_explore: "ចាប់ផ្តើមរៀនឥឡូវនេះ",
    elearn_hero_btn_watch: "របៀបសិក្សា & វីដេអូ",
    elearn_search_placeholder: "វាយបញ្ចូលឈ្មោះវគ្គសិក្សា ឬកម្រងសំណួរ...",
    about_us_pill: "អំពីយើង (About Us)",
    mission_statement: "យើងប្តេជ្ញាចិត្តក្នុងការពង្រឹងសមត្ថភាពសិស្សានុសិស្សទូទាំងប្រទេស តាមរយៈការអប់រំប្រកបដោយគុណភាពខ្ពស់ ងាយស្រួលចូលរៀន និងមានភាពទាក់ទាញបំផុត។",
    stat_students_count: "56k+",
    stat_students_label: "សិស្សបានចុះឈ្មោះសិក្សា",
    stat_exp_count: "25+",
    stat_exp_label: "ឆ្នាំនៃបទពិសោធន៍អប់រំ",
    stat_teachers_count: "170+",
    stat_teachers_label: "ធនធាន & កិច្ចតែងការបង្រៀន",
    elearn_stat_active: "សិស្សសកម្ម (Active)",
    elearn_stat_on_web: "នៅលើប្រព័ន្ធវេបសាយ",
    elearn_stat_community: "សហគមន៍អ្នកសិក្សា",
    elearn_trusted_text: "ទទួលបានការជឿទុកចិត្តពីសិស្សជាង ២៥,០០០+ នាក់ក្នុងការសម្រេចគោលដៅសិក្សា។",
    elearn_featured_label: "ដៃគូ & កម្មវិធីរួមមាន៖",
    process_main_title: "Working Process for<br>Join & Benifts.",
    step1_title: "ស្វែងរកវគ្គសិក្សា",
    step1_desc: "យើងបានជួយសិស្សជាង ២,៥០០ នាក់ក្នុងការចាប់ផ្តើមរៀនភាសាអង់គ្លេសថ្នាក់ទី១០ និងកុំព្យូទ័រយ៉ាងមានប្រសិទ្ធភាព។",
    step2_title: "កក់កន្លែងសិក្សា",
    step2_desc: "ចូលរួមក្នុងបន្ទប់តេស្តអន្តរកម្ម លំហាត់ Bloom Taxonomy និងល្បែងសិក្សា Hangman & Word Shake។",
    step3_title: "ទទួលវិញ្ញាបនបត្រ",
    step3_desc: "បញ្ចប់ការវាយតម្លៃ តាមដានពិន្ទុសិក្សា និងទទួលបានវិញ្ញាបនបត្របញ្ជាក់សមត្ថភាពចុះហត្ថលេខាដោយលោកគ្រូ អ៊ូច អុល។",
    courses_main_title: "Our Popular Courses",
    courses_main_sub: "ប្រព័ន្ធអប់រំអនឡាញទំនើប ងាយស្រួលរៀនសូត្រពីគ្រប់ទីកន្លែង និងគ្រប់ពេលវេលា។",
    sort_label: "តម្រៀបតាមភាពពេញនិយម",
    live_class_title: "Join your live class with your instrctor via video call",

    // New Feeds Section
    newsfeed_tag: "ព័ត៌មាន & សកម្មភាពថ្មីៗ",
    newsfeed_title: "បច្ចុប្បន្នភាព និង <span class='text-gradient'>សកម្មភាពបង្រៀនជាក់ស្ដែង</span>",
    newsfeed_subtitle: "តាមដានរូបភាពសកម្មភាពថ្មីៗ ការប្រកួតប្រជែង និងស្នាដៃសិស្សានុសិស្សរបស់លោកគ្រូ អ៊ូច អុល",
    feed_filter_all: "ទាំងអស់",
    feed_filter_projects: "ស្នាដៃគម្រោង & បទបង្ហាញ",
    feed_filter_security: "សុវត្ថិភាពអ៊ីនធឺណិត",
    feed_filter_smartboard: "ថ្នាក់ Smartboard",
    feed_filter_competition: "យុវជនសហគ្រិន",
    feed_filter_school: "បវេសនកាល & សាលា",

    // Hero Section
    school_tag: "វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ",
    status_active: "គ្រូបង្រៀនពេញសិទ្ធិ & អ្នកណែនាំបច្ចេកវិទ្យា",
    hero_greeting: "សួស្តី! សូមស្វាគមន៍មកកាន់ English Camp! ខ្ញុំបាទគឺ",
    hero_name: "មីស្ទឺរ អុល",
    hero_mentor_tag: "English Camp Mentor",
    camp_badge_text: "English Camp Adventure • ជំរំភាសា & បច្ចេកវិទ្យា",
    btn_listen_greeting: "🔊 ស្តាប់ការស្វាគមន៍",
    btn_listen_greeting_playing: "🔊 កំពុងចាក់សំឡេង...",
    hero_roles: [
      "គ្រូបង្រៀនភាសាអង់គ្លេស & English Camp Mentor 🏕️",
      "រៀននិយាយភាសាអង់គ្លេសដោយសប្បាយរីករាយ & ទំនុកចិត្ត 🗣️",
      "ស្វែងយល់វិទ្យាសាស្ត្រកុំព្យូទ័រ & កូដឌីជីថល 💻",
      "បំភ្លឺផ្លូវយុវជនវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ 🌟",
      "ដំណើរផ្សងព្រេងនៃការសិក្សាសតវត្សរ៍ទី២១! 🚀"
    ],
    hero_desc: "សូមស្វាគមន៍ប្អូនៗសិស្សានុសិស្សមកកាន់ English Camp របស់វិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ! ទីនេះជាកន្លែងដែលភាសាអង់គ្លេស និងបច្ចេកវិទ្យាឌីជីថលក្លាយជាការផ្សងព្រេងដ៏សប្បាយរីករាយ ងាយយល់ និងមានទំនុកចិត្តខ្ពស់។",
    btn_explore: "ស្វែងយល់ពីស្នាដៃ",
    btn_contact: "ទំនាក់ទំនងមកខ្ញុំ",
    btn_download_cv: "ទាញយកប្រវត្តិរូប (CV)",
    camp_word_title: "ពាក្យគន្លឹះប្រចាំថ្ងៃ",
    camp_idiom_title: "ឃ្លាគួរដឹង (Idiom)",
    camp_timer_label: "ម៉ោងសិក្សារបស់អ្នក៖",
    camp_timer_keep_going: "បន្តការខិតខំទៀត! 🌟",

    // Stats
    stat_exp: "ឆ្នាំបទពិសោធន៍",
    stat_students: "សិស្សបានបណ្ដុះបណ្ដាល",
    stat_workshops: "សិក្ខាសាលា & ក្លឹប",
    stat_dedication: "ការលះបង់ដើម្បីអប់រំ",

    // Floating Badges
    badge_lang_title: "ភាសាអង់គ្លេស",
    badge_lang_sub: "ទំនាក់ទំនង & វេយ្យាករណ៍",
    badge_tech_title: "វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    badge_tech_sub: "កូដ & បំណិនឌីជីថល",

    // About Section
    about_tag: "ស្គាល់លោកគ្រូ អ៊ូច អុល",
    about_title: "ការបង្រៀនដោយ <span class='text-gradient'>បេះដូង និងវិជ្ជាជីវៈ</span>",
    about_subtitle: "ច្រើនឆ្នាំនៃការលះបង់ក្នុងការអភិវឌ្ឍសមត្ថភាពសិស្សានុសិស្សនៅទីជនបទ",
    about_quote: "« ភាសាអង់គ្លេសជាស្ពាននាំយើងទៅកាន់ពិភពលោក ចំណែកវិទ្យាសាស្ត្រកុំព្យូទ័រជាកូនសោរបើកទ្វារអនាគត។ កាលណាយុវជនចេះទាំងពីរ ពួកគេនឹងគ្មានព្រំដែនឡើយ។ »",
    about_p1: "ខ្ញុំបាទជាគ្រូបង្រៀនមុខវិជ្ជាភាសាអង់គ្លេស និងកុំព្យូទ័រ នៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ ខេត្តសៀមរាប។ ក្នុងរយៈពេលជាងមួយទសវត្សរ៍នៃការបង្រៀន ខ្ញុំបានខិតខំប្រឹងប្រែងបង្កើតបរិយាកាសសិក្សាដ៏រស់រវើក ទំនើប និងជាក់ស្តែងសម្រាប់សិស្សានុសិស្ស។",
    about_p2: "មិនត្រឹមតែបង្រៀនទ្រឹស្តីនៅក្នុងសៀវភៅប៉ុណ្ណោះទេ ខ្ញុំតែងតែជំរុញឱ្យសិស្សអនុវត្តផ្ទាល់លើកុំព្យូទ័រ ការស្រាវជ្រាវតាមអ៊ីនធឺណិត និងការអនុវត្តការសន្ទនាជាភាសាអង់គ្លេសដើម្បីពង្រឹងទំនុកចិត្តខ្លួនឯង។",
    pillar_1_title: "វិធីសាស្ត្រទំនើប",
    pillar_1_desc: "ប្រើប្រាស់ឧបករណ៍ឌីជីថល និង EdTech ក្នុងការបង្រៀន",
    pillar_2_title: "ការអនុវត្តផ្ទាល់",
    pillar_2_desc: "៧០% នៃការរៀនគឺផ្តោតលើការអនុវត្តជាក់ស្តែង",
    pillar_3_title: "សីលធម៌ និងការដឹកនាំ",
    pillar_3_desc: "បណ្ដុះផ្នត់គំនិតវិជ្ជមាន ការធ្វើការជាក្រុម និងភាពក្លាហាន",
    pillar_4_title: "ការគាំទ្រសិស្សានុសិស្ស",
    pillar_4_desc: "ផ្តល់ការប្រឹក្សាយោបល់អាហារូបករណ៍ និងការជ្រើសរើសជំនាញ",

    // Disciplines Section
    disciplines_tag: "មុខវិជ្ជាជំនាញ",
    disciplines_title: "សសរស្តម្ភទាំងពីរនៃ <span class='text-gradient'>ការអប់រំសតវត្សរ៍ទី២១</span>",
    disciplines_subtitle: "ការរួមផ្សំរវាងជំនាញភាសាពិភពលោក និងជំនាញបច្ចេកវិទ្យាឌីជីថល",
    
    english_title: "ភាសាអង់គ្លេស (English Language)",
    english_desc: "បណ្ដុះបណ្ដាលមូលដ្ឋានគ្រឹះភាសាអង់គ្លេសរឹងមាំ ការប្រាស្រ័យទាក់ទងដោយទំនុកចិត្ត និងការត្រៀមប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)។",
    eng_topic_1: "វេយ្យាករណ៍ និងរចនាសម្ព័ន្ធប្រយោគត្រឹមត្រូវ (Grammar Mastery)",
    eng_topic_2: "ការសន្ទនា និងការនិយាយជាសាធារណៈ (Communication & Speaking)",
    eng_topic_3: "ភាសាអង់គ្លេសសម្រាប់បច្ចេកវិទ្យា (English for Computing & Tech)",
    eng_topic_4: "ការអានអត្ថបទស្រាវជ្រាវ និងការសរសេរតែងសេចក្តី (Academic Reading & Writing)",

    cs_title: "វិទ្យាសាស្ត្រកុំព្យូទ័រ (Computer Science)",
    cs_desc: "បំពាក់បំប៉នសិស្សានុសិស្សនូវចំណេះដឹងកុំព្យូទ័រ បំណិនឌីជីថល និងមូលដ្ឋានគ្រឹះនៃការសរសេរកូដដើម្បីត្រៀមខ្លួនសម្រាប់សាកលវិទ្យាល័យ។",
    cs_topic_1: "មូលដ្ឋានគ្រឹះគេហទំព័រ (HTML5, CSS3 & JavaScript Basics)",
    cs_topic_2: "ការប្រើប្រាស់កុំព្យូទ័រការិយាល័យ & កម្មវិធីឌីជីថល (Digital Literacy)",
    cs_topic_3: "ការដោះស្រាយបញ្ហា និងក្បួនដោះស្រាយ (Computational Thinking)",
    cs_topic_4: "សុវត្ថិភាពអ៊ីនធឺណិត និងការប្រើប្រាស់បច្ចេកវិទ្យាប្រកបដោយការទទួលខុសត្រូវ",

    // EduTech Lab
    lab_tag: "ឧបករណ៍អន្តរកម្ម",
    lab_title: "EduTech Interactive <span class='text-gradient'>Playground</span>",
    lab_subtitle: "សាកល្បងលេងជាមួយ Terminal កុំព្យូទ័រ ឬតេស្តចំណេះដឹងភាសាអង់គ្លេស & កូដ",
    tab_terminal: "💻 ផ្ទាំងពាក្យបញ្ជា (Terminal)",
    tab_quiz: "🧠 តេស្តចំណេះដឹង (Quick Quiz)",

    // Timeline Section
    timeline_tag: "ដំណើរជីវិតការងារ",
    timeline_title: "បទពិសោធន៍ & <span class='text-gradient'>សមិទ្ធផលការងារ</span>",
    timeline_subtitle: "ប្រវត្តិការងារ និងការលះបង់ក្នុងការអភិវឌ្ឍវិស័យអប់រំនៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ",

    // Student Projects
    projects_tag: "ស្នាដៃសិស្ស",
    projects_title: "គម្រោង & សកម្មភាព <span class='text-gradient'>សិស្សានុសិស្ស</span>",
    projects_subtitle: "ស្នាដៃដែលសិស្សានុសិស្សបានបង្កើតឡើងក្រោមការណែនាំរបស់លោកគ្រូ អ៊ូច អុល",
    filter_all: "ទាំងអស់",
    filter_web: "កុំព្យូទ័រ & គេហទំព័រ",
    filter_english: "ភាសាអង់គ្លេស",
    filter_school: "សកម្មភាពវិទ្យាល័យ",

    // Resources Section
    resources_tag: "ចែករំលែកដោយឥតគិតថ្លៃ",
    resources_title: "ធនធាន & <span class='text-gradient'>ឯកសារជំនួយស្មារតី</span>",
    resources_subtitle: "ទាញយកឯកសារសង្ខេបសម្រាប់រៀនភាសាអង់គ្លេស និងមូលដ្ឋានកុំព្យូទ័រ",
    btn_download: "ទាញយកឯកសារ",
    btn_preview: "មើលគំរូ",

    // Testimonials
    testimonials_tag: "ចំណាប់អារម្មណ៍",
    testimonials_title: "ពាក្យពេចន៍ពី <span class='text-gradient'>សិស្សានុសិស្ស</span>",
    testimonials_subtitle: "មតិយោបល់ពិតពីសិស្សានុសិស្សដែលបានបញ្ចប់ការសិក្សានិងកំពុងសិក្សា",

    // Contact
    contact_tag: "ទំនាក់ទំនង",
    contact_title: "ចូលរួមពិភាក្សា & <span class='text-gradient'>សាកសួរព័ត៌មាន</span>",
    contact_subtitle: "លោកគ្រូស្វាគមន៍ជានិច្ចចំពោះការសាកសួររបស់សិស្សានុសិស្ស មាតាបិតា និងសហការី",
    form_name: "ឈ្មោះរបស់អ្នក",
    form_email: "អ៊ីមែល ឬលេខតេឡេក្រាម",
    form_subject: "ប្រធានបទ",
    form_message: "សាររបស់អ្នក",
    btn_send: "ផ្ញើសារឥឡូវនេះ",
    hours_title: "ម៉ោងពិគ្រោះយោបល់នៅវិទ្យាល័យ",

    // Footer
    footer_desc: "លោកគ្រូ អ៊ូច អុល - គ្រូបង្រៀនមុខវិជ្ជាភាសាអង់គ្លេស និងវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ ខេត្តសៀមរាប។",
    footer_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ លោកគ្រូ អ៊ូច អុល"
  },

  en: {
    // Navigation (Clean, Distinct & Non-Duplicated)
    nav_home: "Home",
    nav_learning_courses: "Learning Courses",
    header_skills_levels: "Core Skills & CEFR Levels",
    skill_grammar: "Grammar",
    skill_grammar_kh: "Grammar Rules",
    skill_vocabulary: "Vocabulary",
    skill_vocabulary_kh: "Words & Idioms",
    skill_reading: "Reading",
    skill_reading_kh: "Comprehension",
    skill_listening: "Listening",
    skill_listening_kh: "Audio & Accents",
    skill_speaking: "Speaking",
    skill_speaking_kh: "Fluency & Talk",
    skill_writing: "Writing",
    skill_writing_kh: "Composition & Essays",
    lvl_beginner: "Beginner",
    lvl_elementary: "Elementary",
    lvl_intermediate: "Intermediate",
    lvl_upper_int: "Upper-Int",
    lvl_advanced: "Advanced",
    lvl_mastery: "Mastery",
    nav_courses: "Courses & Skills",
    nav_teaching_materials: "Teaching Materials",
    nav_quizzes_games: "Quizzes & Games",
    nav_cv: "Curriculum Vitae",
    nav_contact: "Contact",
    nav_about: "About Me",
    nav_newsfeed: "Activities & Works",
    nav_disciplines: "Curriculum",
    nav_teaching: "Teaching Materials",
    nav_showcase: "Showcase",
    submenu_games: "Educational Games",
    submenu_tests: "Exercises & Quizzes",
    submenu_tests_hub: "Grade 10 Tests Hub",
    game_wordshape: "Word Shake II Game",
    game_wordshake2: "Word Shake II Game",
    game_hangman: "Hangman Game",
    sub_english: "English Language",
    sub_cs: "Computer Science & ICT",
    sub_popular_courses: "Popular Courses",
    sub_live_class: "Live Virtual Class",
    sub_edutech_lab: "EduTech Lab",
    sub_process: "Learning Process",
    sub_about_me: "About Mr. Ouch Ol",
    sub_experience: "Milestones & Achievements",
    sub_newsfeeds: "Teaching News & Feeds",
    sub_student_projects: "Student Projects",
    sub_testimonials: "Student Reviews",
    sub_all_materials: "Detailed Lessons",
    sub_lesson_plans: "Lesson Plans",
    sub_slides: "Teaching Slides",
    sub_notes_exams: "Exam Papers",
    sub_grade10_tests: "Grade 10 English Quizzes",
    sub_hangman_game: "Hangman Word Arena",
    sub_wordshake_game: "Word Shake II Game",

    // E-Learn & DevSkill Pro Landing Section Keys
    elearn_hero_badge: "eLearning Platform • Next-Gen Education",
    elearn_hero_title: "Smart Learning<br>Deeper & More<br><span class='title-gradient-orange'>-Amazing</span>",
    elearn_hero_sub: "Empowering students in English language and modern digital literacy with high school educator Mr. Ouch Ol.",
    elearn_hero_btn_explore: "Start Learning Now",
    elearn_hero_btn_watch: "How it Works",
    elearn_search_placeholder: "Type Your Course, Quiz or Topic...",
    about_us_pill: "About Us",
    mission_statement: "We are passionate about empowering learners nationwide with high-quality, accessible & engaging education. Our mission offering a diverse range of courses.",
    stat_students_count: "56k+",
    stat_students_label: "Students Enrolled in Hub",
    stat_exp_count: "25+",
    stat_exp_label: "Years of Educational Service",
    stat_teachers_count: "170+",
    stat_teachers_label: "Lesson Plans & Modules",
    elearn_stat_active: "Active Students",
    elearn_stat_on_web: "On Websites",
    elearn_stat_community: "User Community",
    elearn_trusted_text: "Trusted by 25,000+ happy students are joining with us for achieve their goal.",
    elearn_featured_label: "Also featured in:",
    process_main_title: "Working Process for<br>Join & Benifts.",
    step1_title: "Find Course",
    step1_desc: "We've helped over 2,500 new students get into the most comprehensive English Grade 10 & ICT curricula.",
    step2_title: "Book Your Seat",
    step2_desc: "Join dynamic quiz arenas, practice tests, and Bloom taxonomy challenges anytime from your phone or PC.",
    step3_title: "Get Certificate",
    step3_desc: "Complete assessments, track your learning journey, and receive certified recognition signed by Mr. OL.",
    courses_main_title: "Our Popular Courses",
    courses_main_sub: "Online education platform is very easy to learn anything from anywhere, nowadays.",
    sort_label: "Sort by Relevance",
    live_class_title: "Join your live class with your instrctor via video call",

    // New Feeds Section
    newsfeed_tag: "New Feeds & Activities",
    newsfeed_title: "Live Updates & <span class='text-gradient'>Hands-on Highlights</span>",
    newsfeed_subtitle: "Explore recent classroom moments, student innovation competitions, and collaborative posters led by Mr. Ouch Ol",
    feed_filter_all: "All Feeds",
    feed_filter_projects: "Projects & Showcase",
    feed_filter_security: "Cybersecurity",
    feed_filter_smartboard: "Smartboard Classes",
    feed_filter_competition: "Young Entrepreneurs",
    feed_filter_school: "School & Academic",

    // Hero Section
    school_tag: "Hun Sen Svay Thom High School",
    status_active: "Full-Time Educator & Tech Mentor",
    hero_greeting: "Hello, Welcome to English Camp! I am",
    hero_name: "Mr. OL",
    hero_mentor_tag: "English Camp Mentor",
    camp_badge_text: "English Camp Adventure • Language & Tech Hub",
    btn_listen_greeting: "🔊 Listen to Greeting",
    btn_listen_greeting_playing: "🔊 Playing Audio...",
    hero_roles: [
      "English Camp Mentor & Computer Science Educator 🏕️",
      "Speak English with Joy, Confidence & Fluency 🗣️",
      "Creative Computing & Digital Problem Solving 💻",
      "Inspiring Students at Hun Sen Svay Thom High School 🌟",
      "Welcome to an Exciting Educational Adventure! 🚀"
    ],
    hero_desc: "Welcome to English Camp at Hun Sen Svay Thom High School! Here, mastering English communication and modern technology becomes an exciting, engaging adventure for every learner.",
    btn_explore: "Explore Portfolio",
    btn_contact: "Get In Touch",
    btn_download_cv: "Download CV / Resume",
    camp_word_title: "Word of the Day",
    camp_idiom_title: "Camp Fun Idiom",
    camp_timer_label: "Your Study Time:",
    camp_timer_keep_going: "Keep exploring! 🌟",

    // Stats
    stat_exp: "Years Experience",
    stat_students: "Students Mentored",
    stat_workshops: "Clubs & Workshops",
    stat_dedication: "Passion for Teaching",

    // Floating Badges
    badge_lang_title: "English Mastery",
    badge_lang_sub: "Grammar & Communication",
    badge_tech_title: "Computer Science",
    badge_tech_sub: "Web & Digital Skills",

    // About Section
    about_tag: "Meet Teacher Ouch Ol",
    about_title: "Educating with <span class='text-gradient'>Heart & Professionalism</span>",
    about_subtitle: "Dedicated years to elevating youth capabilities in Siem Reap",
    about_quote: "“English is our gateway to connect with the world, while Computer Science is the key that builds tomorrow. When students master both, their opportunities are limitless.”",
    about_p1: "I am a high school teacher in English Language and Computer Science at Hun Sen Svay Thom High School in Siem Reap province. With over a decade of teaching dedication, I strive to create dynamic, modern, and practical learning environments.",
    about_p2: "Beyond standard textbooks, I actively immerse students in hands-on computer workshops, digital problem solving, and confidence-building English conversation sessions.",
    pillar_1_title: "Modern Pedagogy",
    pillar_1_desc: "Integrating EdTech tools and interactive digital multimedia",
    pillar_2_title: "Practical Learning",
    pillar_2_desc: "70% hands-on project creation and collaborative practice",
    pillar_3_title: "Values & Leadership",
    pillar_3_desc: "Fostering teamwork, public speaking, and ethical mindsets",
    pillar_4_title: "Student Mentorship",
    pillar_4_desc: "Guiding students towards university scholarships and career paths",

    // Disciplines Section
    disciplines_tag: "Teaching Disciplines",
    disciplines_title: "Two Pillars of <span class='text-gradient'>21st Century Education</span>",
    disciplines_subtitle: "The synergy between global language mastery and digital computing",

    english_title: "English Language Education",
    english_desc: "Building rock-solid grammar foundations, confident conversational fluency, and rigorous preparation for national examinations (BacII).",
    eng_topic_1: "Grammar Precision & Sentence Construction (Grammar Mastery)",
    eng_topic_2: "Public Speaking & Confident Dialogue (Communication Skills)",
    eng_topic_3: "English for Computing & Digital Terminology (Tech English)",
    eng_topic_4: "Academic Reading Comprehension & Essay Writing",

    cs_title: "Computer Science & Digital Literacy",
    cs_desc: "Equipping high schoolers with essential computing knowledge, digital workplace readiness, and core programming concepts.",
    cs_topic_1: "Web Foundations (HTML5, Modern CSS3 & JavaScript Essentials)",
    cs_topic_2: "Office Productivity & Digital Content Creation",
    cs_topic_3: "Algorithmic Logic & Systematic Problem Solving",
    cs_topic_4: "Cybersecurity Basics & Ethical Digital Citizenship",

    // EduTech Lab
    lab_tag: "Interactive Tools",
    lab_title: "EduTech Interactive <span class='text-gradient'>Playground</span>",
    lab_subtitle: "Interact with our custom terminal or take the English & Code quick challenge",
    tab_terminal: "💻 Interactive Terminal",
    tab_quiz: "🧠 Knowledge Quiz",

    // Timeline Section
    timeline_tag: "Milestones",
    timeline_title: "Career Timeline & <span class='text-gradient'>Impact</span>",
    timeline_subtitle: "Milestones and ongoing contributions to Hun Sen Svay Thom High School",

    // Student Projects
    projects_tag: "Student Showcase",
    projects_title: "Projects & Student <span class='text-gradient'>Achievements</span>",
    projects_subtitle: "Inspiring initiatives created by students under Teacher Ouch Ol's guidance",
    filter_all: "All",
    filter_web: "Computer & Web",
    filter_english: "English & Debate",
    filter_school: "School Activities",

    // Resources Section
    resources_tag: "Free Educational Materials",
    resources_title: "Study Guides & <span class='text-gradient'>Cheatsheets</span>",
    resources_subtitle: "Download curated guides for English grammar rules and computer basics",
    btn_download: "Download PDF",
    btn_preview: "Preview Guide",

    // Testimonials
    testimonials_tag: "Testimonials",
    testimonials_title: "Words from <span class='text-gradient'>Students & Alumni</span>",
    testimonials_subtitle: "Genuine feedback from students who transformed their skills and future",

    // Contact
    contact_tag: "Get In Touch",
    contact_title: "Connect & <span class='text-gradient'>Inquire</span>",
    contact_subtitle: "Teacher Ouch Ol welcomes inquiries from students, parents, and fellow educators",
    form_name: "Your Name",
    form_email: "Email or Telegram Handle",
    form_subject: "Subject",
    form_message: "Your Message",
    btn_send: "Send Message Now",
    hours_title: "High School Consultation Schedule",

    // Footer
    footer_desc: "Mr. Ouch Ol - English & Computer Science High School Educator at Hun Sen Svay Thom High School, Siem Reap, Cambodia.",
    footer_rights: "All Rights Reserved by Mr. Ouch Ol"
  }
};

let currentLang = 'km';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('ouch_ol_lang', lang);

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update lang button label
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'km' ? 'English' : 'ភាសាខ្មែរ';
  }

  // Update typing effect words
  if (window.updateTypingWords) {
    window.updateTypingWords(translations[lang].hero_roles);
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('ouch_ol_lang') || 'km';
  setLanguage(savedLang);

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'km' ? 'en' : 'km';
      setLanguage(nextLang);
    });
  }
}
