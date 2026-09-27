/**
 * ENGLISH GRADE 10 - COMPREHENSIVE TESTS & QUIZZES DATA BANK
 * Grounded in MoEYS Cambodia "English Grade 10" Textbook (70%+ authentic content)
 * Aligned with Bloom's Taxonomy (Levels A1 -> C1)
 * Covers: Units 1-35, Revision Units, Monthly Assessments, Semester 1 & 2 Exams, End of Year Test
 * Categories: Listening/Reading, Grammar, Vocabulary
 */

const grade10Units = [
  { id: 1, title: "My Personal Information", semester: 1, focus: "Greetings, introductions, age, numbers (-teen vs -ty)" },
  { id: 2, title: "Family and Relatives", semester: 1, focus: "Family members, possessives, countries & nationalities" },
  { id: 3, title: "Daily Routine & Time", semester: 1, focus: "Present simple, telling time, daily activities, household chores" },
  { id: 4, title: "Home and Furniture", semester: 1, focus: "Rooms, furniture (fish tank, wardrobe), prepositions of place" },
  { id: 5, title: "Food and Markets", semester: 1, focus: "Countable & uncountable nouns, quantifiers (some, any, much, many)" },
  { id: 6, title: "Free Time and Hobbies", semester: 1, focus: "Interests, sports, adverbs of frequency (always, often, rarely)" },
  { id: 7, title: "Review & Consolidation 1", semester: 1, focus: "Review of Units 1-6" },
  { id: 8, title: "Health and Illnesses", semester: 1, focus: "Aches, pains, symptoms, should/shouldn't for advice" },
  { id: 9, title: "Sports and Fitness", semester: 1, focus: "Football, golf, cycling, can/can't for ability" },
  { id: 10, title: "Weather and Seasons", semester: 1, focus: "Cambodia climate, monsoon, rainy season, comparative adjectives" },
  { id: 11, title: "Places in Town & Directions", semester: 1, focus: "Giving directions, prepositions of movement, town landmarks" },
  { id: 12, title: "Past Holidays & Trips", semester: 1, focus: "Past simple regular and irregular verbs, travel memories" },
  { id: 13, title: "Review & Consolidation 2", semester: 1, focus: "Review of Units 8-12, food & cooking (fry, French fries, first)" },
  { id: 14, title: "Clothes & Shopping", semester: 1, focus: "Prices in Riel, food shopping roleplay (apples, juice, vinegar, biscuits)" },
  { id: 15, title: "Animals & Nature", semester: 1, focus: "Cambodian wildlife, comparative & superlative adjectives" },
  { id: 16, title: "Life in Countryside vs City", semester: 1, focus: "Contrasting urban and rural lifestyle, quiet vs noisy" },
  { id: 17, title: "Traditional Festivals", semester: 1, focus: "Pchum Ben, Water Festival, Khmer New Year, cultural traditions" },
  { id: 18, title: "Inventions & Technology", semester: 1, focus: "Modern inventions, passive voice introduction, uses of tech" },
  { id: 19, title: "Semester 1 Review & Revision", semester: 1, focus: "Comprehensive review of Semester 1 (Units 1-18)" },
  { id: 20, title: "Future Dreams & Aspirations", semester: 2, focus: "Will vs won't, future predictions, career hopes" },
  { id: 21, title: "What Does It Look Like?", semester: 2, focus: "Order of adjectives (opinion, size, age, shape, colour, origin, material)" },
  { id: 22, title: "Personality Adjectives", semester: 2, focus: "sensible, mean, rude, lazy, easygoing, patient, polite, hardworking" },
  { id: 23, title: "What Are You Wearing?", semester: 2, focus: "Present continuous (wear, carry), negative forms, clothes items" },
  { id: 24, title: "School Life & Study Tips", semester: 2, focus: "Subjects (Maths, History, Chemistry), 'How to do better in History!'" },
  { id: 25, title: "What Do You Intend to Do?", semester: 2, focus: "Gerund vs Infinitive (stop doing/stop to do, remember doing/to do)" },
  { id: 26, title: "Environment & Conservation", semester: 2, focus: "Protecting forests, plastic waste, recycle, conditional type 1" },
  { id: 27, title: "Getting Around (Transport)", semester: 2, focus: "Transport (bus, tuk tuk, scooter, taxi, train), timetables, fares" },
  { id: 28, title: "Jobs & Occupations", semester: 2, focus: "Receptionist, tour operator, tour guide, entertainer, bellboy, waitress" },
  { id: 29, title: "There Are Always Two Sides", semester: 2, focus: "Tourism in Siem Reap & Angkor Wat, advantages & disadvantages" },
  { id: 30, title: "Plans and Arrangements", semester: 2, focus: "Present continuous for fixed future plans, booking flights, hotels" },
  { id: 31, title: "What Are You Going to Do?", semester: 2, focus: "Be going to for intentions, Aunty Sheila & Uncle Robert visiting Siem Reap" },
  { id: 32, title: "Review & Suggestions", semester: 2, focus: "Making suggestions (Why don't we...?, How about...?), comparing transport" },
  { id: 33, title: "Celebrations & Special Events", semester: 2, focus: "Parties, invitations, accept/refuse politely" },
  { id: 34, title: "Media, News & Communication", semester: 2, focus: "Newspapers, internet news, reported speech basics" },
  { id: 35, title: "Consolidation & Year-End Review", semester: 2, focus: "Health reading: 'Is she healthy?' (Neary & Channy), comprehensive review" }
];

const bloomTaxonomy = {
  L1_REMEMBER: {
    code: "L1_REMEMBER",
    level: "A1",
    labelEn: "Remembering",
    labelKm: "កម្រិតចងចាំ (Recall & Facts)",
    color: "#10b981",
    badge: "🧠 A1 Remembering",
    desc: "Recall facts, vocabulary terms, textbook glossary definitions, and character details."
  },
  L2_UNDERSTAND: {
    code: "L2_UNDERSTAND",
    level: "A2",
    labelEn: "Understanding",
    labelKm: "កម្រិតយល់ដឹង (Comprehend & Categorize)",
    color: "#06b6d4",
    badge: "💡 A2 Understanding",
    desc: "Explain ideas, classify words, recognize main ideas, and understand dialogues."
  },
  L3_APPLY: {
    code: "L3_APPLY",
    level: "B1",
    labelEn: "Applying",
    labelKm: "កម្រិតអនុវត្ត (Apply & Convert)",
    color: "#3b82f6",
    badge: "⚙️ B1 Applying",
    desc: "Apply grammar rules in context, convert sentence forms, and complete authentic exchanges."
  },
  L4_ANALYZE: {
    code: "L4_ANALYZE",
    level: "B2",
    labelEn: "Analyzing",
    labelKm: "កម្រិតវិភាគ (Analyze & Spot Errors)",
    color: "#8b5cf6",
    badge: "🔍 B2 Analyzing",
    desc: "Analyze errors in structure, contrast viewpoints (e.g. tourism pros/cons), and find discrepancies."
  },
  L5_EVALUATE: {
    code: "L5_EVALUATE",
    level: "B2+",
    labelEn: "Evaluating",
    labelKm: "កម្រិតវាយតម្លៃ (Evaluate & Information Gap)",
    color: "#ec4899",
    badge: "⚖️ B2+ Evaluating",
    desc: "Assess claims against evidence (e.g. Neary's health habits) and resolve information gaps."
  },
  L6_CREATE: {
    code: "L6_CREATE",
    level: "C1",
    labelEn: "Creating",
    labelKm: "កម្រិតបង្កើតថ្មី (Synthesize & Unscramble)",
    color: "#f59e0b",
    badge: "🎨 C1 Creating",
    desc: "Reconstruct complex scrambled sentences, solve anagram word hunts, and synthesize language."
  }
};

const examModes = [
  { id: "unit", titleEn: "Unit Practice", titleKm: "អនុវត្តតាមមេរៀន (Units 1-35)", descEn: "Targeted practice for any specific unit or revision unit", descKm: "អនុវត្តលំហាត់ និងកម្រងសំណួរសម្រាប់មេរៀននីមួយៗ", icon: "📖" },
  { id: "monthly", titleEn: "Monthly Assessment Tests", titleKm: "តេស្តប្រចាំខែ (Months 1-9)", descEn: "Official monthly progress tests aligned with MoEYS semester schedules", descKm: "តេស្តវាស់ស្ទង់សមត្ថភាពប្រចាំខែ សម្រាប់គ្រប់កម្រិត Bloom", icon: "📅" },
  { id: "semester1", titleEn: "Semester 1 Exam", titleKm: "ប្រឡងឆមាសទី ១ (Units 1-19)", descEn: "Mid-year comprehensive exam covering Units 1 to 19", descKm: "វិញ្ញាសាប្រឡងបញ្ចប់ឆមាសទី ១ គ្រប់ជំនាញ ៤០ សំណួរ", icon: "📑" },
  { id: "semester2", titleEn: "Semester 2 Exam", titleKm: "ប្រឡងឆមាសទី ២ (Units 20-35)", descEn: "Second semester final exam covering Units 20 to 35", descKm: "វិញ្ញាសាប្រឡងបញ្ចប់ឆមាសទី ២ គ្រប់ជំនាញ ៤០ សំណួរ", icon: "📑" },
  { id: "yearend", titleEn: "End of Academic Year Test", titleKm: "ប្រឡងបញ្ចប់ឆ្នាំសិក្សា (All Units)", descEn: "Full annual mastery exam across all 35 units with Bloom certificate", descKm: "វិញ្ញាសាប្រឡងចុងឆ្នាំរួមទូទាំងសៀវភៅ ទទួលបានវិញ្ញាបនបត្រ Bloom A1-C1", icon: "🏆" }
];

const grade10QuestionBank = [
  // =========================================================================
  // UNIT 1: MY PERSONAL INFORMATION
  // =========================================================================
  {
    id: "u1-q1",
    unit: 1,
    unitTitle: "Unit 1: My Personal Information",
    examTypes: ["unit", "monthly_1", "semester1", "yearend"],
    bloom: "L1_REMEMBER",
    category: "reading_listening",
    type: "listening_mcq",
    question: "Listen to the dialogue between Tim and Kosal (Unit 1, p. 2). How old is Kosal?",
    audioScript: "Hi Tim. Hey Kosal. How old are you? I'm 15. How about you? I'm 15 too. How old is your mum? She's 38 and my dad's 40. How old are your parents? My mum's 42 and my dad's 45.",
    options: ["14 years old", "15 years old", "16 years old", "38 years old"],
    correctAnswer: 1,
    explanationEn: "In the Unit 1 conversation on page 2, Kosal replies: 'I'm 15. How about you?' and Tim says 'I'm 15 too.'",
    explanationKm: "នៅក្នុងកិច្ចសន្ទនាទំព័រទី ២ មេរៀនទី ១ កុសលឆ្លើយថា 'I'm 15' ហើយ ធីម ក៏ឆ្លើយថា 'I'm 15 too'។",
    textbookRef: "English Grade 10, Unit 1, Lesson A, p. 2"
  },
  {
    id: "u1-q2",
    unit: 1,
    unitTitle: "Unit 1: My Personal Information",
    examTypes: ["unit", "monthly_1", "semester1", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "grammar",
    type: "mcq",
    question: "Which of the following numbers ends with the suffix '-teen' as taught in Unit 1?",
    options: ["Forty (40)", "Fifty (50)", "Fifteen (15)", "Eighty (80)"],
    correctAnswer: 2,
    explanationEn: "Unit 1 teaches distinguishing '-teen' numbers (13-19) from '-ty' numbers (20, 30, 40...). Fifteen (15) ends in '-teen', while forty, fifty, and eighty end in '-ty'.",
    explanationKm: "មេរៀនទី ១ បង្រៀនឱ្យបែងចែកលេខកន្ទុយ '-teen' (១៣-១៩) និងកន្ទុយ '-ty' (២០-៩០)។ Fifteen (15) មានកន្ទុយ '-teen'។",
    textbookRef: "English Grade 10, Unit 1, p. 2 (Activity 3C)"
  },
  {
    id: "u1-q3",
    unit: 1,
    unitTitle: "Unit 1: My Personal Information",
    examTypes: ["unit", "monthly_1", "semester1"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "sentence_conversion",
    question: "Convert this statement into a correct question: 'Kosal's father is 40 years old.'",
    options: [
      "How old Kosal's father is?",
      "How old is Kosal's father?",
      "How old does Kosal's father?",
      "How many years Kosal's father has?"
    ],
    correctAnswer: 1,
    explanationEn: "To form a question asking about age with the verb 'to be', invert the subject and verb: 'How old is [subject]?' -> 'How old is Kosal's father?'",
    explanationKm: "ទម្រង់សំណួរសួរពីអាយុប្រើកិរិយាសព្ទ To Be គឺ៖ 'How old + is/are + subject?' ដូច្នេះចម្លើយត្រឹមត្រូវគឺ 'How old is Kosal's father?'",
    textbookRef: "English Grade 10, Unit 1, p. 2"
  },
  {
    id: "u1-q4",
    unit: 1,
    unitTitle: "Unit 1: My Personal Information",
    examTypes: ["unit", "monthly_1", "semester1", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each English word from Unit 1 with its correct Khmer translation:",
    pairs: [
      { left: "greeting", right: "ការស្វាគមន៍" },
      { left: "good afternoon", right: "ទិវាសួស្តី (ពេលរសៀល)" },
      { left: "good morning", right: "អរុណសួស្តី (ពេលព្រឹក)" },
      { left: "personal information", right: "ព័ត៌មានផ្ទាល់ខ្លួន" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Official MoEYS Grade 10 Glossary: greeting = ការស្វាគមន៍; good afternoon = ទិវាសួស្តី; good morning = អរុណសួស្តី; personal information = ព័ត៌មានផ្ទាល់ខ្លួន.",
    explanationKm: "សទ្ទានុក្រមផ្លូវការទំព័រ ១៩៩៖ greeting = ការស្វាគមន៍, good afternoon = ទិវាសួស្តី, good morning = អរុណសួស្តី។",
    textbookRef: "English Grade 10, Glossary, p. 199"
  },
  {
    id: "u1-q5",
    unit: 1,
    unitTitle: "Unit 1: My Personal Information",
    examTypes: ["unit", "monthly_1", "semester1"],
    bloom: "L4_ANALYZE",
    category: "grammar",
    type: "error_correction",
    question: "Spot the error in the underlined parts: 'Tim's (A) mum is 38 years old, and he's (B) father (C) is 40 years old (D).'",
    options: ["Tim's (A)", "he's (B)", "father (C)", "years old (D)"],
    correctAnswer: 1,
    correctionNote: "Replace 'he's' with the possessive adjective 'his'.",
    explanationEn: "'He's' is a contraction of 'he is'. The sentence requires the possessive adjective 'his father'.",
    explanationKm: "'He's' គឺមកពី 'he is'។ នៅក្នុងប្រយោគនេះត្រូវប្រើ Possessive Adjective 'his' (his father) មិនមែន 'he's' ទេ។",
    textbookRef: "English Grade 10, Unit 1 & Unit 2, Possessives"
  },

  // =========================================================================
  // UNIT 2: FAMILY AND RELATIVES
  // =========================================================================
  {
    id: "u2-q1",
    unit: 2,
    unitTitle: "Unit 2: Family and Relatives",
    examTypes: ["unit", "monthly_1", "semester1"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match the country with its nationality as introduced in Unit 2:",
    pairs: [
      { left: "France", right: "French (ជនជាតិបារាំង)" },
      { left: "Cambodia", right: "Cambodian (ជនជាតិខ្មែរ)" },
      { left: "Japan", right: "Japanese (ជនជាតិជប៉ុន)" },
      { left: "Australia", right: "Australian (ជនជាតិអូស្ត្រាលី)" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "In Unit 2 (p. 7-12) and glossary p. 199: France -> French (ជនជាតិបារាំង), Cambodia -> Cambodian, Japan -> Japanese, Australia -> Australian.",
    explanationKm: "នៅក្នុងមេរៀនទី ២ និងសទ្ទានុក្រមទំព័រ ១៩៩៖ France -> French (ជនជាតិបារាំង), Cambodia -> Cambodian។",
    textbookRef: "English Grade 10, Unit 2, p. 8 & Glossary p. 199"
  },
  {
    id: "u2-q2",
    unit: 2,
    unitTitle: "Unit 2: Family and Relatives",
    examTypes: ["unit", "monthly_1", "semester1", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "grammar",
    type: "mcq",
    question: "Choose the correct sentence showing family relationship:",
    options: [
      "Vicki is Lynn sister.",
      "Vicki is Lynn's sister.",
      "Vicki is the sister to Lynn's.",
      "Vicki is sister of Lynn's."
    ],
    correctAnswer: 1,
    explanationEn: "In English, we add apostrophe 's' ('s) to the possessor noun to show family relationship: 'Lynn's sister'.",
    explanationKm: "ដើម្បីបញ្ជាក់ភាពជាម្ចាស់ ឬទំនាក់ទំនងគ្រួសារ យើងប្រើ Apostrophe 's' នៅខាងចុងឈ្មោះ៖ 'Lynn's sister'។",
    textbookRef: "English Grade 10, Unit 2, Family Tree"
  },

  // =========================================================================
  // UNIT 5 & 14: FOOD, SHOPPING & INFORMATION GAP
  // =========================================================================
  {
    id: "u14-q1",
    unit: 14,
    unitTitle: "Unit 14: Clothes & Shopping (Market Roleplay)",
    examTypes: ["unit", "monthly_4", "semester1", "yearend"],
    bloom: "L5_EVALUATE",
    category: "reading_listening",
    type: "information_gap",
    passage: "Student B's grocery price list at the local market (Unit 14B, p. 193):\n- Onions: 2,000 Riels per basket\n- Vinegar: 4,000 Riels per bottle\n- Biscuits: 12,000 Riels per tin\n\nStudent A buys 2 bottles of vinegar and 1 basket of onions. Student A pays with a 20,000 Riel banknote.",
    question: "Evaluate the transaction: How much total did Student A spend, and how much change should the shop assistant return?",
    options: [
      "Total: 8,000 Riels | Change: 12,000 Riels",
      "Total: 10,000 Riels | Change: 10,000 Riels",
      "Total: 12,000 Riels | Change: 8,000 Riels",
      "Total: 14,000 Riels | Change: 6,000 Riels"
    ],
    correctAnswer: 1,
    explanationEn: "Calculation: 2 bottles of vinegar = 2 x 4,000 = 8,000 Riels. 1 basket of onions = 2,000 Riels. Total = 10,000 Riels. Change from 20,000 Riel note = 20,000 - 10,000 = 10,000 Riels.",
    explanationKm: "ការគណនា៖ ទឹកខ្មេះ ២ ដប = ២ x ៤,០០០ = ៨,០០០ រៀល; ខ្ទឹមបារាំង ១ កន្ត្រក = ២,០០០ រៀល។ សរុប = ១០,០០០ រៀល។ ប្រាក់អាប់ពីក្រដាស ២០,០០០ រៀល គឺ ២០,០០០ - ១០,០០០ = ១០,០០០ រៀល។",
    textbookRef: "English Grade 10, Unit 14B Roleplay, p. 193"
  },
  {
    id: "u14-q2",
    unit: 14,
    unitTitle: "Unit 14: Clothes & Shopping",
    examTypes: ["unit", "monthly_4", "semester1"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_visual",
    question: "Look at the grocery items from Unit 14B (p. 193). Which item is sold for 4,000 Riel per bottle?",
    visualIcon: "🍾",
    options: ["Fish sauce (ទឹកត្រី)", "Orange juice (ទឹកក្រូច)", "Vinegar (ទឹកខ្មេះ)", "Cooking oil (ប្រេងឆា)"],
    correctAnswer: 2,
    explanationEn: "In the supermarket shelf illustration on page 193, the shelf sign clearly labels: 'VINEGAR 4,000 Riel'.",
    explanationKm: "នៅក្នុងរូបភាពធ្នើរទំនិញទំព័រ ១៩៣ ស្លាកតម្លៃបានសរសេរយ៉ាងច្បាស់ថា 'VINEGAR 4,000 Riel' (ទឹកខ្មេះ)។",
    textbookRef: "English Grade 10, Unit 14B, p. 193"
  },

  // =========================================================================
  // UNIT 21: WHAT DOES IT LOOK LIKE? (ADJECTIVE ORDER)
  // =========================================================================
  {
    id: "u21-q1",
    unit: 21,
    unitTitle: "Unit 21: What Does It Look Like?",
    examTypes: ["unit", "monthly_6", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Following the order of adjectives rule taught in Unit 21 (Opinion -> Size -> Age -> Shape -> Colour -> Origin -> Material), choose the correct sentence:",
    options: [
      "Channy is wearing a silver beautiful Cambodian necklace.",
      "Channy is wearing a beautiful Cambodian silver necklace.",
      "Channy is wearing a silver Cambodian beautiful necklace.",
      "Channy is wearing a Cambodian silver beautiful necklace."
    ],
    correctAnswer: 1,
    explanationEn: "Adjective Order: Opinion (beautiful) -> Origin (Cambodian) -> Material (silver) + Noun (necklace). Therefore: 'beautiful Cambodian silver necklace'.",
    explanationKm: "ក្បួនលំដាប់គុណនាម (Order of Adjectives)៖ Opinion (beautiful) -> Origin (Cambodian) -> Material (silver) -> Noun (necklace)។",
    textbookRef: "English Grade 10, Unit 21, Lesson A, p. 115"
  },
  {
    id: "u21-q2",
    unit: 21,
    unitTitle: "Unit 21: What Does It Look Like?",
    examTypes: ["unit", "monthly_6", "semester2", "yearend"],
    bloom: "L4_ANALYZE",
    category: "grammar",
    type: "error_correction",
    question: "Analyze the adjective order error: 'Kosal bought a (A) plastic (B) lovely (C) blue notebook (D).'",
    options: ["a (A)", "plastic (B)", "lovely (C)", "blue notebook (D)"],
    correctAnswer: 1,
    correctionNote: "Opinion (lovely) must precede Colour (blue) and Material (plastic): 'a lovely blue plastic notebook'.",
    explanationEn: "In Unit 21, Opinion adjectives (lovely) must come before Colour (blue) and Material (plastic). 'Plastic lovely' is inverted.",
    explanationKm: "គុណនាម Opinion (lovely) ត្រូវនៅពីមុខ Colour (blue) និង Material (plastic)៖ 'a lovely blue plastic notebook'។",
    textbookRef: "English Grade 10, Unit 21, p. 115-116"
  },
  {
    id: "u21-q3",
    unit: 21,
    unitTitle: "Unit 21: What Does It Look Like?",
    examTypes: ["unit", "monthly_6", "semester2"],
    bloom: "L6_CREATE",
    category: "grammar",
    type: "sentence_unscramble",
    question: "Unscramble these words to form the correct textbook sentence from Unit 21:",
    scrambledWords: ["bought", "Lynn", "delicious", "box", "French", "a", "of", "chocolates"],
    correctAnswer: "Lynn bought a delicious box of French chocolates",
    explanationEn: "Subject: Lynn | Verb: bought | Object: a delicious (opinion) box of French (origin) chocolates.",
    explanationKm: "រៀបចំប្រយោគ៖ 'Lynn bought a delicious box of French chocolates' (លីន បានទិញប្រអប់សូកូឡាបារាំងដ៏ឆ្ងាញ់)។",
    textbookRef: "English Grade 10, Unit 21, p. 117"
  },

  // =========================================================================
  // UNIT 22: PERSONALITY ADJECTIVES
  // =========================================================================
  {
    id: "u22-q1",
    unit: 22,
    unitTitle: "Unit 22: Personality Adjectives",
    examTypes: ["unit", "monthly_6", "semester2", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each Grade 10 personality adjective with its exact definition and Khmer meaning (Unit 22, p. 121):",
    pairs: [
      { left: "sensible", right: "having good judgement (មានការគិតគូរល្អ)" },
      { left: "mean", right: "not willing to share or spend money (កំណាញ់/ចិត្តអាក្រក់)" },
      { left: "patient", right: "able to wait calmly without getting angry (អត់ធ្មត់)" },
      { left: "easygoing", right: "relaxed and happy, not easily upset (រួសរាយ/មិនប្រកាន់)" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "From Unit 22 vocabulary table (p. 121): sensible = having good judgement; mean = not willing to share; patient = able to wait calmly; easygoing = relaxed.",
    explanationKm: "ដកស្រង់ពីតារាងពាក្យ Unit 22 ទំព័រ ១២១៖ sensible = មានការគិតគូរល្អ; mean = កំណាញ់; patient = អត់ធ្មត់; easygoing = រួសរាយ/មិនប្រកាន់។",
    textbookRef: "English Grade 10, Unit 22, p. 121 & Glossary p. 200"
  },
  {
    id: "u22-q2",
    unit: 22,
    unitTitle: "Unit 22: Personality Adjectives",
    examTypes: ["unit", "monthly_6", "semester2", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "vocabulary",
    type: "vocab_categorize",
    question: "Categorize the personality adjectives from Unit 22 into Positive Traits vs Negative Traits:",
    buckets: [
      { name: "Positive Personality Traits", items: ["hardworking", "polite", "generous", "cheerful"] },
      { name: "Negative Personality Traits", items: ["lazy", "rude", "mean", "impatient"] }
    ],
    options: ["hardworking", "lazy", "polite", "rude", "generous", "mean", "cheerful", "impatient"],
    correctAnswer: {
      "Positive Personality Traits": ["hardworking", "polite", "generous", "cheerful"],
      "Negative Personality Traits": ["lazy", "rude", "mean", "impatient"]
    },
    explanationEn: "Hardworking, polite, generous, and cheerful are positive traits. Lazy, rude, mean, and impatient are negative traits.",
    explanationKm: "hardworking (ខិតខំ), polite (គួរសម), generous (សប្បុរស), cheerful (រីករាយ) គឺវិជ្ជមាន; lazy (ខ្ជិល), rude (ឈ្លើយ), mean (កំណាញ់), impatient (ខ្វះការអត់ធ្មត់) គឺអវិជ្ជមាន។",
    textbookRef: "English Grade 10, Unit 22, p. 121-124"
  },
  {
    id: "u22-q3",
    unit: 22,
    unitTitle: "Unit 22: Personality Adjectives",
    examTypes: ["unit", "monthly_6", "semester2"],
    bloom: "L4_ANALYZE",
    category: "reading_listening",
    type: "comprehension",
    passage: "Sophea never gets angry when buses are delayed, she waits quietly for hours and always helps older people cross the street with a warm smile. However, her brother Dara rarely helps with housework, spends all day lying on the sofa, and refuses to lend his pens to classmates.",
    question: "Based on Unit 22 personality concepts, which pair of adjectives best describes Sophea and Dara respectively?",
    options: [
      "Sophea is easygoing and Dara is hardworking.",
      "Sophea is patient and polite, while Dara is lazy and mean.",
      "Sophea is sensible and Dara is generous.",
      "Sophea is rude and Dara is cheerful."
    ],
    correctAnswer: 1,
    explanationEn: "Waiting calmly and helping others shows Sophea is 'patient' and 'polite'. Lying on the sofa and refusing to share pens shows Dara is 'lazy' and 'mean'.",
    explanationKm: "ការរង់ចាំដោយស្ងប់ស្ងាត់ និងជួយអ្នកដទៃបង្ហាញថា សុភា ជាមនុស្ស 'patient' (អត់ធ្មត់) និង 'polite' (គួរសម)។ ចំណែកតារាដេកលើសាឡុងមិនជួយការងារ និងមិនឱ្យគេខ្ចីប៊ិច បង្ហាញថា 'lazy' (ខ្ជិល) និង 'mean' (កំណាញ់)។",
    textbookRef: "English Grade 10, Unit 22, p. 122"
  },

  // =========================================================================
  // UNIT 23: WHAT ARE YOU WEARING? (PRESENT CONTINUOUS)
  // =========================================================================
  {
    id: "u23-q1",
    unit: 23,
    unitTitle: "Unit 23: What Are You Wearing?",
    examTypes: ["unit", "monthly_7", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Look at the students waiting outside the school gate. Complete the sentence with the correct Present Continuous form:\n'Look! Kosal and Tim _______ helmets, but Somnang _______ a cap.'",
    options: [
      "is wearing / are wearing",
      "are wearing / is wearing",
      "wears / wear",
      "wearing / wears"
    ],
    correctAnswer: 1,
    explanationEn: "'Kosal and Tim' is plural -> 'are wearing'. 'Somnang' is singular third person -> 'is wearing'.",
    explanationKm: "ប្រធានពហុវចនៈ 'Kosal and Tim' ប្រើ 'are wearing'។ ប្រធានឯកវចនៈ 'Somnang' ប្រើ 'is wearing'។",
    textbookRef: "English Grade 10, Unit 23, p. 127-128"
  },
  {
    id: "u23-q2",
    unit: 23,
    unitTitle: "Unit 23: What Are You Wearing?",
    examTypes: ["unit", "monthly_7", "semester2"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "sentence_conversion",
    question: "Convert the positive statement into the correct negative Present Continuous form:\n'Lynn is wearing a traditional silk skirt today.'",
    options: [
      "Lynn is not wear a traditional silk skirt today.",
      "Lynn is not wearing a traditional silk skirt today.",
      "Lynn does not wearing a traditional silk skirt today.",
      "Lynn not is wearing a traditional silk skirt today."
    ],
    correctAnswer: 1,
    explanationEn: "Present Continuous negative rule: Subject + is/am/are + not + V-ing. 'Lynn is not wearing...'",
    explanationKm: "ទម្រង់បដិសេធនៃ Present Continuous៖ Subject + is/am/are + not + V-ing។ ដូច្នេះ៖ 'Lynn is not wearing a traditional silk skirt today.'",
    textbookRef: "English Grade 10, Unit 23, p. 129"
  },
  {
    id: "u23-q3",
    unit: 23,
    unitTitle: "Unit 23: What Are You Wearing?",
    examTypes: ["unit", "monthly_7", "semester2", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each clothing accessory from Unit 23 with its Khmer translation:",
    pairs: [
      { left: "helmet", right: "មួកសុវត្ថិភាព" },
      { left: "scarf", right: "ក្រមា / កន្សែងបង់ក" },
      { left: "sandals", right: "ស្បែកជើងសង្រែក" },
      { left: "belt", right: "ខ្សែក្រវាត់" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Unit 23 vocabulary: helmet = មួកសុវត្ថិភាព; scarf = ក្រមា/កន្សែងបង់ក; sandals = ស្បែកជើងសង្រែក; belt = ខ្សែក្រវាត់.",
    explanationKm: "វាក្យសព្ទសម្លៀកបំពាក់ទំព័រ ១២៧៖ helmet = មួកសុវត្ថិភាព, scarf = ក្រមា/កន្សែង, sandals = ស្បែកជើងសង្រែក, belt = ខ្សែក្រវាត់។",
    textbookRef: "English Grade 10, Unit 23, p. 127 & Glossary p. 201"
  },

  // =========================================================================
  // UNIT 24: SCHOOL LIFE & STUDY TIPS
  // =========================================================================
  {
    id: "u24-q1",
    unit: 24,
    unitTitle: "Unit 24: School Life",
    examTypes: ["unit", "monthly_7", "semester2", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "reading_listening",
    type: "reading_mcq",
    passage: "Textbook Reading: 'How to do better in History!' (Unit 24, p. 133)\nMany students find History difficult because there are lots of dates, names and formulas to remember. Mr. David advises students not to cram everything the night before the exam. Instead, make revision cards with important dates on one side and key events on the other side. Review these cards for ten minutes every day with a classmate.",
    question: "According to the reading passage in Unit 24, what is the best study method to improve in History?",
    options: [
      "Stay up late cramming all textbook pages the night before the test.",
      "Create revision flashcards with dates and events, and review them 10 minutes daily.",
      "Memorize only the teacher's examination formulas without reading.",
      "Stop taking notes during History class to focus only on listening."
    ],
    correctAnswer: 1,
    explanationEn: "The passage explicitly advises creating revision cards with dates on one side and events on the other, reviewing them for 10 minutes every day.",
    explanationKm: "អត្ថបទបានណែនាំយ៉ាងច្បាស់ឱ្យបង្កើតកាតរំលឹក (revision cards) ដោយសរសេរកាលបរិច្ឆេទនៅម្ខាង និងព្រឹត្តិការណ៍នៅម្ខាងទៀត ហើយរំលឹក ១០ នាទីរាល់ថ្ងៃ។",
    textbookRef: "English Grade 10, Unit 24, Lesson A, p. 133"
  },
  {
    id: "u24-q2",
    unit: 24,
    unitTitle: "Unit 24: School Life",
    examTypes: ["unit", "monthly_7", "semester2"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match the school subjects from Unit 24 with their definitions:",
    pairs: [
      { left: "Chemistry", right: "the scientific study of substances and reactions (គីមីវិទ្យា)" },
      { left: "Geography", right: "the study of the earth's surface and countries (ភូមិវិទ្យា)" },
      { left: "History", right: "the study of past events and historical figures (ប្រវត្តិវិទ្យា)" },
      { left: "Physics", right: "the study of matter, energy, heat and light (រូបវិទ្យា)" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Chemistry = គីមីវិទ្យា; Geography = ភូមិវិទ្យា; History = ប្រវត្តិវិទ្យា; Physics = រូបវិទ្យា.",
    explanationKm: "មុខវិជ្ជាសិក្សាទំព័រ ១៣៣៖ Chemistry (គីមី), Geography (ភូមិវិទ្យា), History (ប្រវត្តិវិទ្យា), Physics (រូបវិទ្យា)។",
    textbookRef: "English Grade 10, Unit 24, p. 133 & Glossary p. 199"
  },

  // =========================================================================
  // UNIT 25: WHAT DO YOU INTEND TO DO? (GERUND VS INFINITIVE)
  // =========================================================================
  {
    id: "u25-q1",
    unit: 25,
    unitTitle: "Unit 25: What Do You Intend to Do?",
    examTypes: ["unit", "monthly_7", "semester2", "yearend"],
    bloom: "L4_ANALYZE",
    category: "grammar",
    type: "mcq",
    question: "Analyze the difference in meaning between these two textbook sentences from Unit 25 (p. 139):\n1. 'Tim stopped to talk to Kosal.'\n2. 'Tim stopped talking to Kosal.'\nWhich explanation is correct?",
    options: [
      "In sentence 1, Tim quit being Kosal's friend; in sentence 2, Tim paused his walking to chat.",
      "In sentence 1, Tim paused his activity in order to chat with Kosal; in sentence 2, Tim ceased/ended his conversation with Kosal.",
      "Both sentences mean exactly the same thing in modern English.",
      "Sentence 2 is grammatically incorrect in British English."
    ],
    correctAnswer: 1,
    explanationEn: "Unit 25 focuses on verb shifts: 'stop to do' = pause one action in order to perform another; 'stop doing' = terminate/cease the action itself.",
    explanationKm: "មេរៀនទី ២៥ បង្រៀនពីភាពខុសគ្នានៃន័យ៖ 'stop to talk' មានន័យថា ឈប់សកម្មភាពកំពុងធ្វើ ដើម្បីនិយាយជាមួយកុសល; 'stop talking' មានន័យថា ឈប់និយាយ (បញ្ចប់ការសន្ទនា)។",
    textbookRef: "English Grade 10, Unit 25, p. 139-140"
  },
  {
    id: "u25-q2",
    unit: 25,
    unitTitle: "Unit 25: What Do You Intend to Do?",
    examTypes: ["unit", "monthly_7", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Complete the sentence with the correct form: 'Don't forget _______ the front door before you leave for school!'",
    options: ["locking", "to lock", "lock", "locked"],
    correctAnswer: 1,
    explanationEn: "'Forget/remember + to-infinitive' refers to a duty or future obligation to do something. 'Remember/forget to lock the door'.",
    explanationKm: "កិរិយាសព្ទ 'forget/remember + to-infinitive' បង្ហាញពីកាតព្វកិច្ចដែលត្រូវធ្វើ៖ 'Don't forget to lock the front door'។",
    textbookRef: "English Grade 10, Unit 25, p. 140"
  },
  {
    id: "u25-q3",
    unit: 25,
    unitTitle: "Unit 25: What Do You Intend to Do?",
    examTypes: ["unit", "monthly_7", "semester2"],
    bloom: "L4_ANALYZE",
    category: "grammar",
    type: "error_correction",
    question: "Identify the grammar error: 'Leakhana intends (A) visiting (B) Angkor Wat next month, so she promised (C) helping (D) her uncle.'",
    options: ["intends (A)", "visiting (B)", "promised (C)", "helping (D)"],
    correctAnswer: 3,
    correctionNote: "The verb 'promise' must be followed by a to-infinitive: 'promised to help'.",
    explanationEn: "The verb 'promise' takes a to-infinitive: 'promised to help', not a gerund 'helping'.",
    explanationKm: "កិរិយាសព្ទ 'promise' ត្រូវភ្ជាប់ជាមួយ To-Infinitive (promised to help) មិនមែន Gerund (helping) ទេ។",
    textbookRef: "English Grade 10, Unit 25, p. 141"
  },

  // =========================================================================
  // UNIT 27: GETTING AROUND (TRANSPORTATION)
  // =========================================================================
  {
    id: "u27-q1",
    unit: 27,
    unitTitle: "Unit 27: Getting Around",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each transport mode from Unit 27 with its phrasal verb usage:",
    pairs: [
      { left: "get on / get off", right: "bus, train, plane, boat (រថយន្តក្រុង, រថភ្លើង, យន្តហោះ, ទូក)" },
      { left: "get in / get out of", right: "taxi, car (តាក់ស៊ី, ឡាន)" },
      { left: "ride", right: "scooter, motorbike, bicycle (ម៉ូតូ, កង់)" },
      { left: "drive", right: "car, bus, truck (ឡាន, រថយន្តក្រុង)" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "In Unit 27 (p. 145 & glossary p. 199): We use 'get on/off' for buses, trains, boats; 'get in/out of' for taxis and cars; 'ride' for bikes/scooters.",
    explanationKm: "ក្បួនប្រើ Phrasal verbs ក្នុង Unit 27៖ យានជំនិះធំ (bus, train, plane, boat) ប្រើ get on / get off; ឡាន/តាក់ស៊ី ប្រើ get in / get out of។",
    textbookRef: "English Grade 10, Unit 27, p. 145 & Glossary p. 199"
  },
  {
    id: "u27-q2",
    unit: 27,
    unitTitle: "Unit 27: Getting Around",
    examTypes: ["unit", "monthly_8", "semester2"],
    bloom: "L5_EVALUATE",
    category: "reading_listening",
    type: "comprehension",
    passage: "Transport Timetable (Siem Reap to Battambang):\n- Speedboat: Departs 7:00 AM, arrives 1:00 PM (6 hours). Price: $20. Scenic views of Tonle Sap lake.\n- Express Bus: Departs 8:30 AM, arrives 11:30 AM (3 hours). Price: $7. Air-conditioned.\n- Private Taxi: Departs anytime, duration: 2 hours 15 mins. Price: $45.",
    question: "A group of 3 high school students have only $30 total budget and need to reach Battambang before 1:00 PM for a school competition. Which transport option should they evaluate and choose?",
    options: [
      "The Speedboat, because it has scenic views.",
      "The Express Bus, because 3 tickets cost $21 (under $30) and they arrive at 11:30 AM (well before 1:00 PM).",
      "The Private Taxi, because it is the fastest option.",
      "None of the options fit their schedule."
    ],
    correctAnswer: 1,
    explanationEn: "Budget is $30 total. Express bus is $7/person x 3 = $21 (within budget) and arrives at 11:30 AM (before 1:00 PM). Speedboat would cost 3 x $20 = $60 (exceeds budget). Taxi costs $45 (exceeds budget).",
    explanationKm: "ថវិកាសរុប ៣០ ដុល្លារ។ រថយន្តក្រុង ៧ ដុល្លារ x ៣ នាក់ = ២១ ដុល្លារ (មិនលើសថវិកា) ហើយទៅដល់ម៉ោង ១១:៣០ ព្រឹក (មុនម៉ោង ១:០០ រសៀល)។ ជម្រើសផ្សេងទៀតលើសថវិកា។",
    textbookRef: "English Grade 10, Unit 27 & Unit 32 Transport Comparison, p. 147"
  },

  // =========================================================================
  // UNIT 28: JOBS & OCCUPATIONS
  // =========================================================================
  {
    id: "u28-q1",
    unit: 28,
    unitTitle: "Unit 28: Jobs & Occupations",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each tourism/hospitality job from Unit 28 with its job responsibility:",
    pairs: [
      { left: "tour guide", right: "leads tourists and explains historical places (មគ្គុទ្ទេសក៍ទេសចរណ៍)" },
      { left: "receptionist", right: "welcomes guests and hands over room keys at hotel desk (បុគ្គលិកទទួលភ្ញៀវ)" },
      { left: "bellboy", right: "helps hotel guests carry heavy luggage to their rooms (អ្នកយួរឥវ៉ាន់សណ្ឋាគារ)" },
      { left: "tour operator", right: "organizes tour itineraries and transport bookings (អ្នករៀបចំដំណើរកម្សាន្ត)" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Definitions from Unit 28 (p. 151) and Audio Script 28B (p. 226).",
    explanationKm: "ដកស្រង់ពីតួនាទីការងារមេរៀនទី ២៨ ទំព័រ ១៥១ និងកូដសំឡេងទំព័រ ២២៦៖ tour guide, receptionist, bellboy, tour operator។",
    textbookRef: "English Grade 10, Unit 28, p. 151 & Audio 28B p. 226"
  },
  {
    id: "u28-q2",
    unit: 28,
    unitTitle: "Unit 28: Jobs & Occupations",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "reading_listening",
    type: "listening_mcq",
    question: "Listen to the Tour Announcement (Audio Script 28B, p. 226). What should tourists do if they are too tired to carry their luggage?",
    audioScript: "Good morning and welcome to our tour. We're now heading to Kampot province and we'll arrive in a few hours. I am your tour guide for this whole trip, and I promise to make it an unforgettable one! When we arrive and finish the check-in at the hotel, you could get the key to your room from the receptionist and relax for two hours before our tour begins. If you're too tired to carry your luggage, you could ask the bellboys to carry it for you. At 7pm, we'll have dinner at the restaurant near the hotel.",
    options: [
      "Leave their luggage on the bus overnight.",
      "Ask the bellboys to carry the luggage for them.",
      "Ask the bus driver to take it to the restaurant.",
      "Carry it immediately to Kep beach."
    ],
    correctAnswer: 1,
    explanationEn: "In Audio Script 28B: 'If you're too tired to carry your luggage, you could ask the bellboys to carry it for you.'",
    explanationKm: "នៅក្នុងកូដសំឡេង ២៨B ទំព័រ ២២៦ មគ្គុទ្ទេសក៍បានប្រកាសថា៖ 'If you're too tired to carry your luggage, you could ask the bellboys to carry it for you.'",
    textbookRef: "English Grade 10, Audio Script 28B, p. 226"
  },
  {
    id: "u28-q3",
    unit: 28,
    unitTitle: "Unit 28: Jobs & Occupations",
    examTypes: ["unit", "monthly_8", "semester2"],
    bloom: "L6_CREATE",
    category: "vocabulary",
    type: "vocab_word_hunt",
    question: "Word Hunt Anagram: Unscramble the letters to reveal a key hospitality job from Unit 28:\nLetters: 'E P T O C I E N R T I S'",
    scrambledLetters: ["R", "E", "C", "E", "P", "T", "I", "O", "N", "I", "S", "T"],
    correctAnswer: "RECEPTIONIST",
    hint: "This hotel worker checks guests in and gives them room keys.",
    explanationEn: "R-E-C-E-P-T-I-O-N-I-S-T is the hotel front desk staff member who greets guests.",
    explanationKm: "RECEPTIONIST (បុគ្គលិកទទួលភ្ញៀវសណ្ឋាគារ) គឺជាពាក្យគន្លឹះក្នុងមេរៀនទី ២៨។",
    textbookRef: "English Grade 10, Unit 28, p. 151"
  },

  // =========================================================================
  // UNIT 29: THERE ARE ALWAYS TWO SIDES (SIEM REAP TOURISM)
  // =========================================================================
  {
    id: "u29-q1",
    unit: 29,
    unitTitle: "Unit 29: There Are Always Two Sides",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L4_ANALYZE",
    category: "reading_listening",
    type: "listening_mcq",
    question: "Listen to the conversation between Kosal and Tim about the magazine (Audio Script 29B, p. 226). Who owns the magazine Tim is showing?",
    audioScript: "Kosal: Hey, Tim. What are you reading? Tim: Oh hey, Kosal. I'm just reading a magazine! The owner of this magazine is actually my mum's friend! I'm bringing it here today because I want to show it to you too. Kosal: That's great. What's it about? Tim: It's about tourism! My mum's friend loves travelling and she wants to show other people the beautiful places to visit. She includes a brief history of Cambodia and also places to visit in Siem Reap here!",
    options: [
      "Tim's teacher at Svay Thom High School",
      "Kosal's older brother",
      "Tim's mum's friend who loves travelling",
      "A foreign tourist from Singapore"
    ],
    correctAnswer: 2,
    explanationEn: "Tim states in Audio 29B: 'The owner of this magazine is actually my mum's friend! I'm bringing it here today because I want to show it to you too.'",
    explanationKm: "ធីម បានបញ្ជាក់ក្នុងកិច្ចសន្ទនាទំព័រ ២២៦ ថា៖ 'The owner of this magazine is actually my mum's friend!' (មិត្តភក្តិរបស់ម្តាយធីម)។",
    textbookRef: "English Grade 10, Audio Script 29B, p. 226"
  },
  {
    id: "u29-q2",
    unit: 29,
    unitTitle: "Unit 29: There Are Always Two Sides",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L4_ANALYZE",
    category: "reading_listening",
    type: "true_false",
    question: "True or False (Unit 29, p. 157):\n'Tourism in Siem Reap brings economic benefits by creating local jobs, but heavy bus traffic and litter can also damage ancient temple environments.'",
    options: ["True", "False"],
    correctAnswer: 0,
    explanationEn: "True. The core theme of Unit 29 ('There Are Always Two Sides') examines both the positive economic impact (jobs, revenue) and negative impacts (traffic, pollution, wear and tear on temples).",
    explanationKm: "ពិត (True)។ ប្រធានបទ Unit 29 បង្ហាញពីជ្រុងពីរ៖ ផលវិជ្ជមានផ្នែកសេដ្ឋកិច្ច (ការងារ) និងផលអវិជ្ជមាន (ការកកស្ទះចរាចរណ៍ សំរាម និងផលប៉ះពាល់បរិស្ថានប្រាសាទ)។",
    textbookRef: "English Grade 10, Unit 29, p. 157-158"
  },

  // =========================================================================
  // UNIT 30 & 31: PLANS, ARRANGEMENTS & "BE GOING TO"
  // =========================================================================
  {
    id: "u31-q1",
    unit: 31,
    unitTitle: "Unit 31: What Are You Going to Do?",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Aunty Sheila and Uncle Robert have decided on their itinerary for next week. Complete the sentence using 'be going to':\n'Next Tuesday, Uncle Robert and Aunty Sheila _______ around the Angkor Thom temple complex.'",
    options: [
      "is going to cycle",
      "are going to cycle",
      "will cycling",
      "goes to cycle"
    ],
    correctAnswer: 1,
    explanationEn: "Plural subject ('Uncle Robert and Aunty Sheila') takes 'are' + 'going to' + base verb ('cycle').",
    explanationKm: "ប្រធានពហុវចនៈ (Uncle Robert and Aunty Sheila) ត្រូវប្រើ 'are going to cycle'។",
    textbookRef: "English Grade 10, Unit 31, p. 169-170"
  },
  {
    id: "u31-q2",
    unit: 31,
    unitTitle: "Unit 31: What Are You Going to Do?",
    examTypes: ["unit", "monthly_9", "semester2"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "sentence_conversion",
    question: "Convert the present intention into a future question with 'be going to':\n'Kosal intends to take a sunset boat cruise on Tonle Sap lake.'",
    options: [
      "Is Kosal going to take a sunset boat cruise on Tonle Sap lake?",
      "Does Kosal going to take a sunset boat cruise on Tonle Sap lake?",
      "Will Kosal is going to take a sunset boat cruise on Tonle Sap lake?",
      "Are Kosal going to take a sunset boat cruise on Tonle Sap lake?"
    ],
    correctAnswer: 0,
    explanationEn: "Question form of 'be going to': Be (Is) + Subject (Kosal) + going to + verb (take)...?",
    explanationKm: "ទម្រង់សំណួរ 'be going to' សម្រាប់ប្រធានឯកវចនៈ Kosal៖ 'Is Kosal going to take...?'",
    textbookRef: "English Grade 10, Unit 31, p. 171"
  },
  {
    id: "u31-q3",
    unit: 31,
    unitTitle: "Unit 31: What Are You Going to Do?",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each travel accommodation term from Unit 31 with its definition:",
    pairs: [
      { left: "guesthouse", right: "an informal, smaller and cheaper place to stay (ផ្ទះសំណាក់)" },
      { left: "itinerary", right: "a detailed plan or route of a journey (តារាងកម្មវិធីធ្វើដំណើរ)" },
      { left: "attraction", right: "an interesting place that tourists visit (រមណីយដ្ឋានទេសចរណ៍)" },
      { left: "check-out", right: "leaving and paying the bill at a hotel (ការចេញពីបន្ទប់សណ្ឋាគារ)" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Definitions from Unit 31 & Audio 28B: guesthouse = ផ្ទះសំណាក់; itinerary = តារាងកម្មវិធី; attraction = រមណីយដ្ឋាន; check-out = ការចេញពីសណ្ឋាគារ.",
    explanationKm: "វាក្យសព្ទទាក់ទងនឹងការធ្វើដំណើរទំព័រ ១៦៩ និងសទ្ទានុក្រមទំព័រ ១៩៩-២២៦។",
    textbookRef: "English Grade 10, Unit 31, p. 169 & Glossary p. 199"
  },

  // =========================================================================
  // UNIT 32: REVIEW & SUGGESTIONS
  // =========================================================================
  {
    id: "u32-q1",
    unit: 32,
    unitTitle: "Unit 32: Review & Suggestions",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Choose the correct suggestion structure taught in Unit 32 (p. 175):\n'It's a hot sunny afternoon. _______ to the community pool for a swim?'",
    options: [
      "Why don't we go",
      "Why we don't go",
      "How about to go",
      "Let's to go"
    ],
    correctAnswer: 0,
    explanationEn: "In English: 'Why don't we + base verb?' ('Why don't we go?'). 'How about' requires a gerund ('How about going?'), and 'Let's' takes base verb without 'to' ('Let's go').",
    explanationKm: "ក្បួនបង្កើតឃ្លាស្នើសុំ (Making suggestions) ក្នុង Unit 32៖ 'Why don't we + base verb?' (Why don't we go?)។ បើប្រើ 'How about' ត្រូវប្រើ 'How about going?'។",
    textbookRef: "English Grade 10, Unit 32, p. 175"
  },

  // =========================================================================
  // UNIT 35: CONSOLIDATION & YEAR-END REVIEW ("IS SHE HEALTHY?")
  // =========================================================================
  {
    id: "u35-q1",
    unit: 35,
    unitTitle: "Unit 35: Consolidation (Reading: 'Is she healthy?')",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L1_REMEMBER",
    category: "reading_listening",
    type: "reading_mcq",
    passage: "Unit 35 Textbook Reading (p. 187):\n'I've got many good friends, but my best friend is Neary. She's friendly, beautiful and kind. We know everything about each other, but I just don't know if she's healthy or not! Neary likes coffee very much, but her coffee is always too sweet! In the morning, she always wakes up early. She only eats a little bit for breakfast before she goes to school with her brother. Sometimes, I go to Neary's house and have lunch there. Neary's mother cooks the best food. Although she enjoys eating vegetables and rarely eats meat, she usually buys an ice cream and a piece of cake to eat after dinner. In her free time, she loves going to the gym. I also know that she always goes to bed very late at night. Now, do you think she's healthy?'",
    question: "According to Channy's text in Unit 35, what does Neary rarely eat?",
    options: ["Vegetables", "Ice cream", "Meat", "Cake"],
    correctAnswer: 2,
    explanationEn: "The text states: 'Although she enjoys eating vegetables and rarely eats meat...'",
    explanationKm: "នៅក្នុងអត្ថបទបានសរសេរយ៉ាងច្បាស់ថា៖ 'Although she enjoys eating vegetables and rarely eats meat...' (នាងកម្រញ៉ាំសាច់ណាស់)។",
    textbookRef: "English Grade 10, Unit 35, p. 187 (Question 4)"
  },
  {
    id: "u35-q2",
    unit: 35,
    unitTitle: "Unit 35: Consolidation (Reading: 'Is she healthy?')",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L5_EVALUATE",
    category: "reading_listening",
    type: "comprehension",
    passage: "Unit 35 Textbook Reading (p. 187):\n'Neary likes coffee very much, but her coffee is always too sweet! In the morning, she always wakes up early. She only eats a little bit for breakfast before she goes to school with her brother... In her free time, she loves going to the gym. I also know that she always goes to bed very late at night.'",
    question: "Evaluate Neary's lifestyle habits based on the health criteria taught in Grade 10: Which of the following highlights both her positive health habits AND her unhealthy habits?",
    options: [
      "She has no healthy habits at all because she drinks coffee.",
      "Positive: she exercises at the gym and eats vegetables; Unhealthy: she drinks overly sweet coffee, eats very little breakfast, has sugary desserts after dinner, and sleeps very late.",
      "Positive: she sleeps very late and skips lunch; Unhealthy: she goes to the gym.",
      "Neary is 100% perfectly healthy because gym workouts cancel out all bad habits."
    ],
    correctAnswer: 1,
    explanationEn: "Evaluation: Neary's positive habits include loving the gym and eating vegetables. Her unhealthy habits include drinking too sweet coffee, minimal breakfast, nightly cake/ice cream, and consistently sleeping very late.",
    explanationKm: "ការវាយតម្លៃ៖ ទម្លាប់ល្អគឺហាត់ប្រាណនៅ gym និងញ៉ាំបន្លែ; ទម្លាប់មិនល្អគឺផឹកកាហ្វេផ្អែមពេក ញ៉ាំអាហារពេលព្រឹកតិចតួច ញ៉ាំបង្អែមផ្អែមរាល់ល្ងាច និងចូលគេងយប់ជ្រៅ។",
    textbookRef: "English Grade 10, Unit 35, p. 187"
  },
  {
    id: "u35-q3",
    unit: 35,
    unitTitle: "Unit 35: Consolidation",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L6_CREATE",
    category: "grammar",
    type: "sentence_unscramble",
    question: "Unscramble the words from Unit 35 (p. 187, Activity 1) to form a meaningful family profile sentence:",
    scrambledWords: ["in", "I", "tenth", "grade", "father's", "am", "name", "and", "Somnang", "my", "is"],
    correctAnswer: "I am in tenth grade and my father's name is Somnang",
    explanationEn: "This is the exact model sentence provided on page 187: 'I am in tenth grade. My father's name is Somnang.'",
    explanationKm: "នេះជាប្រយោគគំរូផ្ទាល់លើទំព័រ ១៨៧៖ 'I am in tenth grade and my father's name is Somnang'។",
    textbookRef: "English Grade 10, Unit 35, p. 187"
  },

  // =========================================================================
  // ADDITIONAL BLOOM & VARIETY EXPANSIONS (A1 TO C1 MASTERY)
  // =========================================================================
  {
    id: "extra-voc-1",
    unit: 13,
    unitTitle: "Unit 13: Cooking & Food",
    examTypes: ["unit", "monthly_3", "semester1", "yearend"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match each cooking and food vocabulary word from Unit 13 with its Khmer meaning (Glossary, p. 199):",
    pairs: [
      { left: "fry", right: "ឆា / ចៀន / បំពង" },
      { left: "French fries", right: "ដំឡូងបារាំងបំពង" },
      { left: "fish sauce", right: "ទឹកត្រី" },
      { left: "hamburger", right: "ហាំបឺហ្គឺ" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Official MoEYS Glossary (p. 199): fry = ឆា/ចៀន/បំពង; French fries = ដំឡូងបារាំងបំពង; fish sauce = ទឹកត្រី; hamburger = ហាំបឺហ្គឺ.",
    explanationKm: "សទ្ទានុក្រមទំព័រ ១៩៩៖ fry = ឆា/ចៀន/បំពង, French fries = ដំឡូងបារាំងបំពង, fish sauce = ទឹកត្រី, hamburger = ហាំបឺហ្គឺ។",
    textbookRef: "English Grade 10, Unit 13 & Glossary p. 199"
  },
  {
    id: "extra-voc-2",
    unit: 28,
    unitTitle: "Unit 28: Jobs & Professions",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "vocabulary",
    type: "vocab_categorize",
    question: "Categorize these jobs from Unit 28 and Unit 1 into Tourism & Hospitality Jobs vs Education & Tech Jobs:",
    buckets: [
      { name: "Tourism & Hospitality", items: ["tour guide", "receptionist", "bellboy", "waitress"] },
      { name: "Education & Tech", items: ["teacher", "computer programmer", "librarian", "school principal"] }
    ],
    options: ["tour guide", "teacher", "receptionist", "computer programmer", "bellboy", "librarian", "waitress", "school principal"],
    correctAnswer: {
      "Tourism & Hospitality": ["tour guide", "receptionist", "bellboy", "waitress"],
      "Education & Tech": ["teacher", "computer programmer", "librarian", "school principal"]
    },
    explanationEn: "Tourism/hospitality jobs serve hotel guests and travelers; education/tech jobs work in schools and digital laboratories.",
    explanationKm: "ការងារទេសចរណ៍ និងបដិសណ្ឋារកិច្ច (tour guide, receptionist, bellboy, waitress) បម្រើការក្នុងសណ្ឋាគារ/ដំណើរកម្សាន្ត; ការងារអប់រំ និងបច្ចេកវិទ្យា (teacher, programmer...)។",
    textbookRef: "English Grade 10, Unit 28, p. 151"
  },
  {
    id: "extra-gram-1",
    unit: 8,
    unitTitle: "Unit 8: Health & Advice",
    examTypes: ["unit", "monthly_2", "semester1", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Neary has a severe toothache and cannot eat properly. Choose the best advice using 'should':",
    options: [
      "She should eat more ice cream after dinner.",
      "She should go see a dentist immediately.",
      "She shouldn't sleep at night.",
      "She should to buy vinegar."
    ],
    correctAnswer: 1,
    explanationEn: "'Should + base verb' gives medical/health advice. Seeing a dentist is the correct advice for a toothache.",
    explanationKm: "ទម្រង់ផ្តល់ដំបូន្មានសុខភាព 'should + base verb'៖ 'She should go see a dentist immediately' (នាងគួរតែទៅជួបទន្តពេទ្យភ្លាមៗ)។",
    textbookRef: "English Grade 10, Unit 8, Health Advice"
  },
  {
    id: "extra-gram-2",
    unit: 10,
    unitTitle: "Unit 10: Weather & Comparisons",
    examTypes: ["unit", "monthly_3", "semester1", "yearend"],
    bloom: "L4_ANALYZE",
    category: "grammar",
    type: "error_correction",
    question: "Spot the comparative adjective error: 'In April, Siem Reap is much more hot (A) than (B) in December, and the temples (C) are crowded (D).'",
    options: ["more hot (A)", "than (B)", "the temples (C)", "are crowded (D)"],
    correctAnswer: 0,
    correctionNote: "One-syllable adjective 'hot' forms comparative with '-er' (doubling consonant): 'hotter', not 'more hot'.",
    explanationEn: "Single syllable adjectives ending in CVC double the final consonant and add '-er': 'hot' -> 'hotter'. 'More hot' is an error.",
    explanationKm: "គុណនាមព្យាង្គមួយ 'hot' ត្រូវថែម '-ter' ក្លាយជា 'hotter' មិនត្រូវប្រើ 'more hot' ឡើយ។",
    textbookRef: "English Grade 10, Unit 10, Comparative Adjectives"
  },
  {
    id: "extra-read-1",
    unit: 29,
    unitTitle: "Unit 29: Tourism Pros and Cons",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L5_EVALUATE",
    category: "reading_listening",
    type: "comprehension",
    passage: "Textbook Debate on Angkor Tourism (Unit 29):\nLocal business owner Mr. Bunna: 'Tourism brings millions of dollars into our province. My handicraft shop supports four families.'\nEnvironmental officer Ms. Kolap: 'However, large tour buses cause vibration cracks in old temple foundations, and plastic bottles left along Angkor Wat moat pollute our waterways.'",
    question: "Evaluate the two perspectives. What is the most balanced conclusion based on Unit 29?",
    options: [
      "Siem Reap should completely ban all foreign tourists forever.",
      "We should ignore the environment completely to make the maximum amount of money.",
      "Siem Reap needs sustainable tourism that protects cultural heritage and the environment while continuing to support local livelihoods.",
      "Only domestic tourists should be allowed to ride buses."
    ],
    correctAnswer: 2,
    explanationEn: "Unit 29 emphasizes finding balance between the two sides of tourism: economic benefits and environmental/heritage preservation (sustainable tourism).",
    explanationKm: "មេរៀនទី ២៩ ('There Are Always Two Sides') ផ្តោតលើទេសចរណ៍ប្រកបដោយចីរភាព៖ ទាញប្រយោជន៍សេដ្ឋកិច្ចសម្រាប់ជីវភាពប្រជាពលរដ្ឋ ស្របពេលការពារបរិស្ថាន និងបេតិកភណ្ឌប្រាសាទ។",
    textbookRef: "English Grade 10, Unit 29, p. 157-160"
  },
  {
    id: "extra-create-1",
    unit: 27,
    unitTitle: "Unit 27: Getting Around",
    examTypes: ["unit", "monthly_8", "semester2", "yearend"],
    bloom: "L6_CREATE",
    category: "grammar",
    type: "sentence_unscramble",
    question: "Unscramble these words to form an authentic Cambodian travel advice sentence from Unit 27:",
    scrambledWords: ["you", "must", "wear", "a", "when", "helmet", "scooter", "you", "ride", "a"],
    correctAnswer: "You must wear a helmet when you ride a scooter",
    explanationEn: "Modal 'must' + base verb 'wear' + object 'a helmet' + time clause 'when you ride a scooter'.",
    explanationKm: "ប្រយោគណែនាំសុវត្ថិភាពចរាចរណ៍ Unit 27៖ 'You must wear a helmet when you ride a scooter' (អ្នកត្រូវតែពាក់មួកសុវត្ថិភាពនៅពេលជិះម៉ូតូ)។",
    textbookRef: "English Grade 10, Unit 27 & Unit 23, p. 127 & 145"
  },

  // =========================================================================
  // UNIT 3: DAILY ROUTINE & TIME (PRESENT SIMPLE)
  // =========================================================================
  {
    id: "u3-q1",
    unit: 3,
    unitTitle: "Unit 3: Daily Routine & Time",
    examTypes: ["unit", "monthly_1", "semester1"],
    bloom: "L2_UNDERSTAND",
    category: "reading_listening",
    type: "true_false",
    question: "True or False (Unit 3):\n'Kosal usually gets up at 5:30 AM every morning, feeds the family fish in the fish tank, and rides his bicycle to school at 6:45 AM.'",
    options: ["True", "False"],
    correctAnswer: 0,
    explanationEn: "True. In Unit 3 (Daily Routines), Kosal describes waking up early at 5:30 AM and feeding the fish tank (glossary p. 199: fish tank = ទូ/អាងចិញ្ចឹមត្រី).",
    explanationKm: "ពិត (True)។ មេរៀនទី ៣ រៀបរាប់ពីទម្លាប់ប្រចាំថ្ងៃរបស់កុសល ក្រោកម៉ោង ៥:៣០ ព្រឹក និងដាក់ចំណីត្រីក្នុងអាងចិញ្ចឹមត្រី។",
    textbookRef: "English Grade 10, Unit 3, p. 13 & Glossary p. 199"
  },
  {
    id: "u3-q2",
    unit: 3,
    unitTitle: "Unit 3: Daily Routine & Time",
    examTypes: ["unit", "monthly_1", "semester1"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Complete the sentence with the correct third person singular form:\n'Every evening, Tim _______ his homework before he _______ dinner with his family.'",
    options: ["finish / have", "finishes / has", "finishs / haves", "finishing / having"],
    correctAnswer: 1,
    explanationEn: "Third person singular present simple: 'finish' ends in -sh -> 'finishes'; 'have' -> irregular 'has'.",
    explanationKm: "Present Simple សម្រាប់ប្រធានឯកវចនៈបុរសទី៣ (Tim)៖ កិរិយាសព្ទបញ្ចប់ដោយ -sh ថែម -es (finishes); កិរិយាសព្ទ have ប្តូរជា has។",
    textbookRef: "English Grade 10, Unit 3, Present Simple"
  },

  // =========================================================================
  // UNIT 4: HOME AND CHORES
  // =========================================================================
  {
    id: "u4-q1",
    unit: 4,
    unitTitle: "Unit 4: Home and Chores",
    examTypes: ["unit", "monthly_2", "semester1"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match household items from Unit 4 with their Khmer meaning (Glossary, p. 199):",
    pairs: [
      { left: "furniture", right: "គ្រឿងសង្ហារិម" },
      { left: "fish tank", right: "ទូ / អាងចិញ្ចឹមត្រី" },
      { left: "grandma", right: "ជីដូន / យាយ" },
      { left: "grandpa", right: "ជីតា / តា" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Official MoEYS Glossary (p. 199): furniture = គ្រឿងសង្ហារិម; fish tank = អាងចិញ្ចឹមត្រី; grandma = ជីដូន; grandpa = ជីតា.",
    explanationKm: "សទ្ទានុក្រមទំព័រ ១៩៩៖ furniture = គ្រឿងសង្ហារិម, fish tank = អាងចិញ្ចឹមត្រី, grandma = ជីដូន, grandpa = ជីតា។",
    textbookRef: "English Grade 10, Unit 4 & Glossary p. 199"
  },

  // =========================================================================
  // UNIT 6 & 9: FREE TIME, HOBBIES & SPORTS
  // =========================================================================
  {
    id: "u9-q1",
    unit: 9,
    unitTitle: "Unit 9: Sports and Fitness",
    examTypes: ["unit", "monthly_3", "semester1"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_visual",
    question: "Which sport from Unit 8 & 9 (Glossary, p. 199) is described as 'a game played on a large open-air course where players hit small balls into holes'?",
    visualIcon: "⛳",
    options: ["Football (កីឡាបាល់ទាត់)", "Golf (កីឡាវាយកូនហ្គោល)", "Volleyball (កីឡាបាល់ទះ)", "Tennis (កីឡាវាយកូនបាល់)"],
    correctAnswer: 1,
    explanationEn: "In Unit 9 & Glossary p. 199: golf = កីឡាវាយកូនហ្គោល; football = កីឡាបាល់ទាត់.",
    explanationKm: "សទ្ទានុក្រមទំព័រ ១៩៩៖ golf = កីឡាវាយកូនហ្គោល (វាយកូនបាល់តូចចូលរន្ធ)។",
    textbookRef: "English Grade 10, Unit 9 & Glossary p. 199"
  },
  {
    id: "u9-q2",
    unit: 9,
    unitTitle: "Unit 9: Sports and Fitness",
    examTypes: ["unit", "monthly_3", "semester1"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "sentence_conversion",
    question: "Convert this sentence to express ability in the past:\n'Kosal can play football very well this year.'",
    options: [
      "Kosal could play football very well last year.",
      "Kosal can played football very well last year.",
      "Kosal could played football very well last year.",
      "Kosal was can play football very well last year."
    ],
    correctAnswer: 0,
    explanationEn: "The past tense form of modal 'can' is 'could' + base verb: 'Kosal could play...'",
    explanationKm: "ទម្រង់អតីតកាលនៃ Modal 'can' គឺ 'could' បូកនឹង Base Verb៖ 'Kosal could play football very well last year.'",
    textbookRef: "English Grade 10, Unit 9, Modals of Ability"
  },

  // =========================================================================
  // UNIT 11: PLACES IN TOWN & GIVING DIRECTIONS
  // =========================================================================
  {
    id: "u11-q1",
    unit: 11,
    unitTitle: "Unit 11: Places in Town & Directions",
    examTypes: ["unit", "monthly_3", "semester1"],
    bloom: "L2_UNDERSTAND",
    category: "reading_listening",
    type: "reading_mcq",
    passage: "Directions to Svay Thom Market:\n'Go straight down the main road until you reach the traffic lights. Turn left onto Street 6. Walk past the post office and the secondary school. The market is opposite the pagoda, between the pharmacy and the bakery.'",
    question: "Where is the market located according to the directions?",
    options: [
      "Next to the traffic lights on the right",
      "Behind the secondary school",
      "Opposite the pagoda, between the pharmacy and the bakery",
      "Inside the post office"
    ],
    correctAnswer: 2,
    explanationEn: "The passage states: 'The market is opposite the pagoda, between the pharmacy and the bakery.'",
    explanationKm: "តាមការណែនាំផ្លូវ៖ 'The market is opposite the pagoda, between the pharmacy and the bakery' (ផ្សារនៅទល់មុខវត្ត ចន្លោះរវាងឱសថស្ថាន និងហាងនំប៉័ង)។",
    textbookRef: "English Grade 10, Unit 11, Directions"
  },

  // =========================================================================
  // UNIT 12: PAST HOLIDAYS (PAST SIMPLE VERBS)
  // =========================================================================
  {
    id: "u12-q1",
    unit: 12,
    unitTitle: "Unit 12: Past Holidays",
    examTypes: ["unit", "monthly_4", "semester1", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Choose the correct past simple forms to complete Lynn's holiday story:\n'Last holiday, Lynn _______ to Sihanoukville with her family. They _______ in the sea and _______ delicious seafood.'",
    options: [
      "goed / swimmed / eated",
      "went / swam / ate",
      "went / swim / eat",
      "was go / was swim / was eat"
    ],
    correctAnswer: 1,
    explanationEn: "Irregular past simple forms: go -> went; swim -> swam; eat -> ate.",
    explanationKm: "កិរិយាសព្ទមិនទៀងទាត់ក្នុង Past Simple៖ go -> went; swim -> swam; eat -> ate។",
    textbookRef: "English Grade 10, Unit 12, Irregular Past Verbs"
  },
  {
    id: "u12-q2",
    unit: 12,
    unitTitle: "Unit 12: Past Holidays",
    examTypes: ["unit", "monthly_4", "semester1"],
    bloom: "L4_ANALYZE",
    category: "grammar",
    type: "error_correction",
    question: "Spot the error in the past simple question: 'Did (A) Tim went (B) to Angkor Wat with (C) his classmates yesterday (D)?'",
    options: ["Did (A)", "went (B)", "with (C)", "yesterday (D)"],
    correctAnswer: 1,
    correctionNote: "After auxiliary 'Did', the main verb must remain in its base form: 'Did Tim go...'",
    explanationEn: "In past simple questions with 'Did', the main verb is in base form: 'Did Tim go', not 'Did Tim went'.",
    explanationKm: "នៅពេលប្រើជំនួយកិរិយាសព្ទ 'Did' ក្នុងសំណួរ កិរិយាសព្ទគោលត្រូវតែជា Base form៖ 'Did Tim go' មិនមែន 'went' ទេ។",
    textbookRef: "English Grade 10, Unit 12, Past Simple Questions"
  },

  // =========================================================================
  // UNIT 15: ANIMALS & NATURE (COMPARATIVE & SUPERLATIVE)
  // =========================================================================
  {
    id: "u15-q1",
    unit: 15,
    unitTitle: "Unit 15: Animals & Nature",
    examTypes: ["unit", "monthly_4", "semester1"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Select the grammatically correct superlative sentence from Unit 15:\n'The Asian elephant is _______ land animal in Cambodia.'",
    options: [
      "the heavier",
      "the heaviest",
      "most heavy",
      "heaviest than"
    ],
    correctAnswer: 1,
    explanationEn: "Superlative of two-syllable adjective ending in -y ('heavy'): change -y to -i and add -est -> 'the heaviest'.",
    explanationKm: "គុណនាម superlative បញ្ចប់ដោយ -y (heavy) ត្រូវប្តូរ -y ជា -i ហើយថែម -est -> 'the heaviest'។",
    textbookRef: "English Grade 10, Unit 15, Superlative Adjectives"
  },
  {
    id: "u15-q2",
    unit: 15,
    unitTitle: "Unit 15: Animals & Nature",
    examTypes: ["unit", "monthly_4", "semester1"],
    bloom: "L1_REMEMBER",
    category: "vocabulary",
    type: "vocab_match",
    question: "Match wildlife vocabulary with Khmer definitions (Glossary, p. 199):",
    pairs: [
      { left: "forest", right: "ព្រៃ" },
      { left: "fishing", right: "នេសាទ" },
      { left: "greasy", right: "ដែលមានខ្លាញ់ច្រើន" },
      { left: "fruits", right: "ផ្លែឈើ" }
    ],
    correctAnswer: [0, 1, 2, 3],
    explanationEn: "Official MoEYS Glossary (p. 199): forest = ព្រៃ; fishing = នេសាទ; greasy = ដែលមានខ្លាញ់ច្រើន; fruits = ផ្លែឈើ.",
    explanationKm: "សទ្ទានុក្រមទំព័រ ១៩៩៖ forest = ព្រៃ, fishing = នេសាទ, greasy = ដែលមានខ្លាញ់ច្រើន, fruits = ផ្លែឈើ។",
    textbookRef: "English Grade 10, Glossary, p. 199"
  },

  // =========================================================================
  // UNIT 17: TRADITIONAL FESTIVALS
  // =========================================================================
  {
    id: "u17-q1",
    unit: 17,
    unitTitle: "Unit 17: Traditional Festivals",
    examTypes: ["unit", "monthly_5", "semester1", "yearend"],
    bloom: "L2_UNDERSTAND",
    category: "reading_listening",
    type: "reading_mcq",
    passage: "Cambodian Festivals Text (Unit 17):\n'During the Water Festival (Bon Om Touk) in November, thousands of boat rowers travel from all provinces to Phnom Penh. At night, illuminated boats (Bandaet Pratip) float on the Tonle Sap and Mekong rivers while fireworks light up the sky. Families gather on the riverbank to eat flattened rice with banana and coconut juice (Ak Ambok).'",
    question: "Which traditional food is eaten during the Water Festival according to Unit 17?",
    options: [
      "French fries and hamburgers",
      "Ak Ambok (flattened rice with banana and coconut)",
      "Vinegar with onions",
      "Sweet coffee with ice cream"
    ],
    correctAnswer: 1,
    explanationEn: "The passage notes that families gather to eat Ak Ambok (flattened rice with banana and coconut juice) during Bon Om Touk.",
    explanationKm: "អត្ថបទបញ្ជាក់ថា ក្នុងពិធីបុណ្យអុំទូក ប្រជាពលរដ្ឋជួបជុំគ្នាទទួលទានអកអំបុក (Ak Ambok) ជាមួយចេក និងទឹកដូង។",
    textbookRef: "English Grade 10, Unit 17, Festivals"
  },

  // =========================================================================
  // UNIT 18: INVENTIONS & TECHNOLOGY (PASSIVE VOICE INTRO)
  // =========================================================================
  {
    id: "u18-q1",
    unit: 18,
    unitTitle: "Unit 18: Inventions & Technology",
    examTypes: ["unit", "monthly_5", "semester1", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "sentence_conversion",
    question: "Convert the active sentence into the present passive voice:\n'Millions of students use smart mobile phones today.'",
    options: [
      "Smart mobile phones are used by millions of students today.",
      "Smart mobile phones were used by millions of students today.",
      "Smart mobile phones is used by millions of students today.",
      "Smart mobile phones are using by millions of students today."
    ],
    correctAnswer: 0,
    explanationEn: "Present Simple Passive: Plural Subject (smart mobile phones) + are + past participle (used) + by agent.",
    explanationKm: "ទម្រង់ Passive Voice នៃ Present Simple៖ Subject (smart mobile phones) + are + V3 (used) + by + agent។",
    textbookRef: "English Grade 10, Unit 18, Passive Voice"
  },

  // =========================================================================
  // UNIT 20: FUTURE DREAMS & ASPIRATIONS (WILL VS WON'T)
  // =========================================================================
  {
    id: "u20-q1",
    unit: 20,
    unitTitle: "Unit 20: Future Dreams & Aspirations",
    examTypes: ["unit", "monthly_6", "semester2"],
    bloom: "L2_UNDERSTAND",
    category: "grammar",
    type: "mcq",
    question: "Complete the prediction about future technology:\n'In 2040, people _______ rely on petrol cars because electric vehicles will be everywhere.'",
    options: ["won't", "will", "aren't", "doesn't"],
    correctAnswer: 0,
    explanationEn: "'Won't' (will not) expresses a negative future prediction: people will not rely on petrol cars.",
    explanationKm: "ប្រើ 'won't' (will not) សម្រាប់ការព្យាករណ៍អវិជ្ជមាននាពេលអនាគត (មនុស្សនឹងលែងពឹងផ្អែកលើឡានសាំង)។",
    textbookRef: "English Grade 10, Unit 20, Future Predictions"
  },

  // =========================================================================
  // UNIT 26: ENVIRONMENT & CONSERVATION (CONDITIONAL TYPE 1)
  // =========================================================================
  {
    id: "u26-q1",
    unit: 26,
    unitTitle: "Unit 26: Environment & Conservation",
    examTypes: ["unit", "monthly_7", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Complete the First Conditional sentence about environmental protection (Unit 26):\n'If we _______ plastic bags into rivers, fish and aquatic creatures _______.'",
    options: [
      "throw / will suffer",
      "threw / will suffer",
      "will throw / suffer",
      "throw / would suffer"
    ],
    correctAnswer: 0,
    explanationEn: "First Conditional structure: If + Present Simple (throw), ... will + base verb (will suffer).",
    explanationKm: "ទម្រង់ First Conditional៖ 'If + Present Simple, will + base verb' (If we throw..., fish will suffer)។",
    textbookRef: "English Grade 10, Unit 26, First Conditional"
  },
  {
    id: "u26-q2",
    unit: 26,
    unitTitle: "Unit 26: Environment & Conservation",
    examTypes: ["unit", "monthly_7", "semester2"],
    bloom: "L2_UNDERSTAND",
    category: "vocabulary",
    type: "vocab_categorize",
    question: "Categorize actions into Eco-friendly Habits vs Harmful Habits (Unit 26):",
    buckets: [
      { name: "Eco-Friendly Habits", items: ["recycle plastic bottles", "turn off lights when leaving", "plant trees"] },
      { name: "Harmful Habits", items: ["dump garbage into waterways", "burn plastic in public", "cut down forest trees"] }
    ],
    options: ["recycle plastic bottles", "dump garbage into waterways", "turn off lights when leaving", "burn plastic in public", "plant trees", "cut down forest trees"],
    correctAnswer: {
      "Eco-Friendly Habits": ["recycle plastic bottles", "turn off lights when leaving", "plant trees"],
      "Harmful Habits": ["dump garbage into waterways", "burn plastic in public", "cut down forest trees"]
    },
    explanationEn: "Recycling, saving electricity, and planting trees help the environment. Dumping trash, burning plastic, and deforestation cause pollution.",
    explanationKm: "ការកែច្នៃផ្លាស្ទិក បិទភ្លើង និងដាំដើមឈើជាសកម្មភាពល្អចំពោះបរិស្ថាន; ចោលសំរាមក្នុងទឹក ដុតផ្លាស្ទិក និងកាប់ព្រៃបំផ្លាញបរិស្ថាន។",
    textbookRef: "English Grade 10, Unit 26, Conservation"
  },

  // =========================================================================
  // UNIT 30: PLANS AND ARRANGEMENTS (PRESENT CONTINUOUS AS FUTURE)
  // =========================================================================
  {
    id: "u30-q1",
    unit: 30,
    unitTitle: "Unit 30: Plans and Arrangements",
    examTypes: ["unit", "monthly_8", "semester2"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "mcq",
    question: "Tim has already bought his flight ticket to Singapore. Which sentence expresses this arranged plan correctly?",
    options: [
      "Tim is flying to Singapore next Friday morning.",
      "Tim flies to Singapore next Friday morning already.",
      "Tim will to fly to Singapore next Friday morning.",
      "Tim fly to Singapore next Friday morning."
    ],
    correctAnswer: 0,
    explanationEn: "Present Continuous ('is flying') is used for fixed arrangements when tickets, dates, and plans are already confirmed.",
    explanationKm: "Present Continuous ('is flying') ត្រូវបានប្រើប្រាស់សម្រាប់គម្រោងដែលបានរៀបចំទុកជាមុនច្បាស់លាស់ (ទិញសំបុត្ររួចរាល់)។",
    textbookRef: "English Grade 10, Unit 30, Fixed Arrangements"
  },

  // =========================================================================
  // UNIT 33 & 34: CELEBRATIONS & MEDIA / REPORTED SPEECH
  // =========================================================================
  {
    id: "u34-q1",
    unit: 34,
    unitTitle: "Unit 34: Media & News",
    examTypes: ["unit", "monthly_9", "semester2", "yearend"],
    bloom: "L3_APPLY",
    category: "grammar",
    type: "sentence_conversion",
    question: "Convert the direct speech into reported speech:\\nKosal said: 'I am reading an interesting article about tourism.'\\n-> Kosal said that he _______ an interesting article about tourism.",
    options: ["was reading", "is reading", "has read", "will read"],
    correctAnswer: 0,
    explanationEn: "Reported speech backshift: Present Continuous ('am reading') becomes Past Continuous ('was reading').",
    explanationKm: "ក្បួន Reported Speech៖ កាល Present Continuous (am reading) ត្រូវថយក្រោយមួយកាលទៅជា Past Continuous (was reading)។",
    textbookRef: "English Grade 10, Unit 34, Reported Speech"
  },
  {
    id: "u34-q2",
    unit: 34,
    unitTitle: "Unit 34: Media & News",
    examTypes: ["unit", "monthly_9", "semester2"],
    bloom: "L6_CREATE",
    category: "vocabulary",
    type: "vocab_word_hunt",
    question: "Word Hunt Anagram: Unscramble the letters to reveal a key media publication from Unit 29 & 34:\nLetters: 'M A G A Z I N E'",
    scrambledLetters: ["G", "A", "Z", "I", "N", "E", "M", "A"],
    correctAnswer: "MAGAZINE",
    hint: "Tim showed Kosal a printed tourism publication owned by his mum's friend.",
    explanationEn: "M-A-G-A-Z-I-N-E: A periodical publication containing articles and illustrations (ទស្សនាវដ្តី).",
    explanationKm: "MAGAZINE (ទស្សនាវដ្តី) គឺជាពាក្យដែលធីមបានកាន់អានក្នុង Audio 29B។",
    textbookRef: "English Grade 10, Unit 29 & Audio 29B, p. 226"
  }
];

// Helper methods for retrieving tests by criteria
const Grade10TestsHelper = {
  getAllQuestions: () => grade10QuestionBank,
  
  getQuestionsByUnit: (unitNumber) => {
    return grade10QuestionBank.filter(q => q.unit === Number(unitNumber));
  },

  getQuestionsByExamMode: (mode) => {
    if (mode === "yearend") return grade10QuestionBank;
    if (mode === "semester1") {
      return grade10QuestionBank.filter(q => q.unit <= 19 || q.examTypes.includes("semester1"));
    }
    if (mode === "semester2") {
      return grade10QuestionBank.filter(q => q.unit >= 20 || q.examTypes.includes("semester2"));
    }
    if (mode.startsWith("monthly")) {
      return grade10QuestionBank.filter(q => q.examTypes.includes(mode) || q.examTypes.includes("monthly_1") || q.examTypes.includes("monthly_6") || q.examTypes.includes("monthly_8"));
    }
    return grade10QuestionBank;
  },

  getQuestionsByBloom: (bloomLevel) => {
    if (!bloomLevel || bloomLevel === "all") return grade10QuestionBank;
    return grade10QuestionBank.filter(q => q.bloom === bloomLevel || bloomTaxonomy[q.bloom]?.level === bloomLevel);
  },

  getQuestionsByCategory: (cat) => {
    if (!cat || cat === "all") return grade10QuestionBank;
    return grade10QuestionBank.filter(q => q.category === cat);
  }
};

// Expose globally for browser usage
if (typeof window !== 'undefined') {
  window.grade10Units = grade10Units;
  window.bloomTaxonomy = bloomTaxonomy;
  window.examModes = examModes;
  window.grade10QuestionBank = grade10QuestionBank;
  window.Grade10TestsHelper = Grade10TestsHelper;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    grade10Units,
    bloomTaxonomy,
    examModes,
    grade10QuestionBank,
    Grade10TestsHelper
  };
}
