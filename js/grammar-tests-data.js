// js/grammar-tests-data.js
// Standard ELT Question Bank (1,200 items across 15 topics: 15 A1, 15 A2, 15 B1, 15 B2, 10 C1, 10 C2 each)
// Formats: Multiple Choice, Correct/Incorrect, Checking Error, Matching, Fill Blank, Cloze, Open Bracket, Sentence Unscramble, Odd One Out, Error Correction
// Tested Skills: Memory, Understanding, Explaining, Producing
// Sources: British Council, test-english, Cambridge, Oxford, VOA, Bamboozle, Wordwall standards

(function() {
  const data = {
  "nouns": [
    {
      "id": "noun_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Memory",
      "question": "Which word is a noun in the following sentence: \"The happy children play in the garden.\"",
      "options": [
        "happy",
        "children",
        "play",
        "in"
      ],
      "answer": 1,
      "explanation": "\"Children\" is a plural noun naming people. \"Happy\" is an adjective, \"play\" is a verb, and \"in\" is a preposition.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "noun_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Plural)",
      "skillTested": "Producing",
      "question": "Write the correct plural form of the noun in brackets: \"There are two (bus) ______ waiting at the station.\"",
      "options": [
        "buses",
        "buss",
        "busses",
        "busies"
      ],
      "answer": 0,
      "explanation": "Nouns ending in -s, -sh, -ch, -x, or -z form their plural by adding -es: \"buses\".",
      "sourceTip": "Elementary Spelling Rules"
    },
    {
      "id": "noun_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate this sentence: \"She has three childs and two cats.\"",
      "options": [
        "Correct",
        "Incorrect - the plural of \"child\" is \"children\""
      ],
      "answer": 1,
      "explanation": "\"Child\" is an irregular noun; its standard plural is \"children\", not \"childs\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "noun_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun is the ODD ONE OUT because it is NOT a proper noun?",
      "options": [
        "Siem Reap",
        "Angkor Wat",
        "School",
        "Monday"
      ],
      "answer": 2,
      "explanation": "\"School\" is a common noun. \"Siem Reap\", \"Angkor Wat\", and \"Monday\" are proper nouns and are capitalized.",
      "sourceTip": "Wordwall ELT"
    },
    {
      "id": "noun_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Understanding",
      "question": "Please give me an ______ from the fruit basket.",
      "options": [
        "apple",
        "banana",
        "orange juice",
        "bread"
      ],
      "answer": 0,
      "explanation": "\"An\" is used before singular countable nouns beginning with a vowel sound: \"an apple\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "noun_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange these words into a grammatical sentence: [has / a / red / brother / my / car]",
      "options": [
        "My brother has a red car.",
        "A red car has my brother.",
        "My brother a red car has.",
        "Has my brother a red car."
      ],
      "answer": 0,
      "explanation": "Standard English word order is Subject (My brother) + Verb (has) + Object (a red car).",
      "sourceTip": "Bamboozle Word Order"
    },
    {
      "id": "noun_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake in the sentence: \"The two [A: woman] [B: are] [C: reading] books in the [D: library].\"",
      "options": [
        "A: woman",
        "B: are",
        "C: reading",
        "D: library"
      ],
      "answer": 0,
      "explanation": "\"Two\" requires the plural noun \"women\", not singular \"woman\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "noun_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the singular noun \"tooth\" with its correct irregular plural form:",
      "options": [
        "tooths",
        "teeth",
        "toothes",
        "teethes"
      ],
      "answer": 1,
      "explanation": "The irregular plural of \"tooth\" is \"teeth\" (vowel mutation).",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "noun_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate this sentence: \"Monday is the first day of the week.\"",
      "options": [
        "Correct - \"Monday\" is capitalized as a proper noun",
        "Incorrect - days of the week are common nouns"
      ],
      "answer": 0,
      "explanation": "Names of the days of the week are proper nouns and must always be capitalized.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "noun_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Plural)",
      "skillTested": "Producing",
      "question": "Change the noun in brackets into plural: \"I saw three (baby) ______ in the clinic.\"",
      "options": [
        "babys",
        "babies",
        "babyes",
        "babyies"
      ],
      "answer": 1,
      "explanation": "Nouns ending in consonant + y change the \"y\" to \"i\" and add \"-es\": \"babies\".",
      "sourceTip": "Spelling Rules A1"
    },
    {
      "id": "noun_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "My father bought a new ______ for his home office yesterday.",
      "options": [
        "computer",
        "computering",
        "computes",
        "computered"
      ],
      "answer": 0,
      "explanation": "The blank requires a singular countable noun following the article \"a new\": \"computer\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "noun_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is the ODD ONE OUT (not a noun)?",
      "options": [
        "Table",
        "Window",
        "Run",
        "Teacher"
      ],
      "answer": 2,
      "explanation": "\"Run\" is a verb (action), while table, window, and teacher are nouns.",
      "sourceTip": "ELT Warmup Games"
    },
    {
      "id": "noun_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "A person who teaches students in a classroom is called a ______.",
      "options": [
        "teacher",
        "teaching",
        "teaches",
        "taught"
      ],
      "answer": 0,
      "explanation": "The noun naming the profession is \"teacher\" (noun with agent suffix -er).",
      "sourceTip": "British Council A1"
    },
    {
      "id": "noun_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Unscramble to make a correct sentence: [birds / the / sing / trees / in / the]",
      "options": [
        "The birds sing in the trees.",
        "In the trees sing the birds the.",
        "The trees sing the birds in.",
        "Birds the in the trees sing."
      ],
      "answer": 0,
      "explanation": "Subject (The birds) + Verb (sing) + Prepositional Phrase (in the trees).",
      "sourceTip": "Wordwall English"
    },
    {
      "id": "noun_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"There are [A: five] [B: boxs] [C: on] the [D: floor].\"",
      "options": [
        "A: five",
        "B: boxs",
        "C: on",
        "D: floor"
      ],
      "answer": 1,
      "explanation": "Nouns ending in -x add -es to form the plural: \"boxes\", not \"boxs\".",
      "sourceTip": "Spelling Traps A1"
    },
    {
      "id": "noun_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which of the following is an UNCOUNTABLE noun?",
      "options": [
        "Chair",
        "Furniture",
        "Table",
        "Desk"
      ],
      "answer": 1,
      "explanation": "\"Furniture\" is an uncountable collective mass noun in English; individual pieces are called \"pieces of furniture\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "noun_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Could you please give me a slice of ______?",
      "options": [
        "bread",
        "breads",
        "a bread",
        "some breads"
      ],
      "answer": 0,
      "explanation": "\"Bread\" is uncountable. We use partitives like \"a slice of bread\" or \"a loaf of bread\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "noun_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The teacher gave us many useful advices for the exam.\"",
      "options": [
        "Correct",
        "Incorrect - \"advice\" is uncountable and cannot take -s or \"many\""
      ],
      "answer": 1,
      "explanation": "\"Advice\" is strictly uncountable. Say \"a lot of advice\" or \"pieces of advice\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "noun_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Plural)",
      "skillTested": "Producing",
      "question": "Supply the plural form: \"The chef used three sharp (knife) ______ to prepare dinner.\"",
      "options": [
        "knifes",
        "knives",
        "knifees",
        "knivs"
      ],
      "answer": 1,
      "explanation": "Nouns ending in -fe (knife, life, wife) change -fe to -ves: \"knives\".",
      "sourceTip": "Oxford Practice A2"
    },
    {
      "id": "noun_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"She [A: bought] [B: two] [C: new] [D: furnitures] for her bedroom.\"",
      "options": [
        "A: bought",
        "B: two",
        "C: new",
        "D: furnitures"
      ],
      "answer": 3,
      "explanation": "\"Furniture\" has no plural form. Say \"two pieces of furniture\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "noun_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun is the ODD ONE OUT because it is COUNTABLE?",
      "options": [
        "Information",
        "Luggage",
        "Suitcase",
        "Water"
      ],
      "answer": 2,
      "explanation": "\"Suitcase\" is countable (one suitcase, two suitcases). Information, luggage, and water are uncountable.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "noun_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Unscramble the question: [much / how / have / luggage / you / do / ?]",
      "options": [
        "How much luggage do you have?",
        "How many luggage do you have?",
        "How luggage do you have much?",
        "Luggage how much you do have?"
      ],
      "answer": 0,
      "explanation": "Uncountable \"luggage\" requires quantifier \"How much\": \"How much luggage do you have?\".",
      "sourceTip": "Bamboozle A2"
    },
    {
      "id": "noun_a2_8",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Which quantifier correctly pairs with the uncountable noun \"traffic\"?",
      "options": [
        "a few",
        "heavy",
        "many",
        "several"
      ],
      "answer": 1,
      "explanation": "We say \"heavy traffic\" or \"a lot of traffic\". \"Few\", \"many\", and \"several\" only modify countable nouns.",
      "sourceTip": "Collocations A2"
    },
    {
      "id": "noun_a2_9",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The news on TV is very shocking tonight.\"",
      "options": [
        "Correct - \"news\" is singular in grammatical concord",
        "Incorrect - \"news\" ends in -s so it requires \"are\""
      ],
      "answer": 0,
      "explanation": "Although \"news\" ends in -s, it is an uncountable singular noun that takes a singular verb: \"The news is...\".",
      "sourceTip": "VOA English A2"
    },
    {
      "id": "noun_a2_10",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Understanding",
      "question": "There ______ too much noise in this café; let us study in the library.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": 1,
      "explanation": "\"Noise\" used as a general mass noun is uncountable and agrees with singular \"is\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "noun_a2_11",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the compound noun: \"You need a valid (pass / port) ______ to travel abroad.\"",
      "options": [
        "passport",
        "pass-porter",
        "passporte",
        "passing-port"
      ],
      "answer": 0,
      "explanation": "The single closed compound noun is \"passport\".",
      "sourceTip": "Word Formation A2"
    },
    {
      "id": "noun_a2_12",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: has] [B: a lot of] [C: homeworks] [D: tonight].\"",
      "options": [
        "A: has",
        "B: a lot of",
        "C: homeworks",
        "D: tonight"
      ],
      "answer": 2,
      "explanation": "\"Homework\" is uncountable in English. Say \"a lot of homework\" or \"assignments\".",
      "sourceTip": "School English Traps"
    },
    {
      "id": "noun_a2_13",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "We need to buy two ______ of toothpaste at the supermarket.",
      "options": [
        "tubes",
        "bottles",
        "slices",
        "loaves"
      ],
      "answer": 0,
      "explanation": "The standard container partitive for toothpaste is \"tubes of toothpaste\".",
      "sourceTip": "Partitives A2"
    },
    {
      "id": "noun_a2_14",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which irregular plural has a vowel change inside the word?",
      "options": [
        "Children",
        "Oxen",
        "Men",
        "Sheep"
      ],
      "answer": 2,
      "explanation": "\"Man\" -> \"Men\" undergoes vowel mutation. (\"Children\" and \"oxen\" add -(r)en; \"sheep\" has zero plural).",
      "sourceTip": "Irregular Plurals A2"
    },
    {
      "id": "noun_a2_15",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange correctly: [gives / honest / my / always / friend / advice]",
      "options": [
        "My friend always gives honest advice.",
        "Always my friend gives honest advice.",
        "My friend gives always honest advice.",
        "Honest advice my friend always gives."
      ],
      "answer": 0,
      "explanation": "Subject (My friend) + Frequency Adverb (always) + Verb (gives) + Object (honest advice).",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "noun_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What is the correct plural form of the compound noun \"sister-in-law\"?",
      "options": [
        "sister-in-laws",
        "sisters-in-law",
        "sisters-in-laws",
        "sister-ins-law"
      ],
      "answer": 1,
      "explanation": "In compound nouns with prepositions, pluralize the principal noun: \"sisters-in-law\".",
      "sourceTip": "Cambridge B1 Preliminary"
    },
    {
      "id": "noun_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The staff ______ meeting in the boardroom right now to discuss the new project.",
      "options": [
        "is",
        "are",
        "was",
        "has"
      ],
      "answer": 1,
      "explanation": "In British ELT, collective nouns like \"staff\" or \"team\" take a plural verb when referring to the individual members acting.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "noun_b1_3",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"A group of [A: researchers] [B: has published] three [C: papers] on [D: climatology].\"",
      "options": [
        "A: researchers",
        "B: has published",
        "C: papers",
        "D: climatology - no error in sentence!"
      ],
      "answer": 3,
      "explanation": "The sentence is completely correct! \"Papers\" here countably means published academic articles.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "noun_b1_4",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Nominalization)",
      "skillTested": "Producing",
      "question": "Convert the verb into a noun: \"Their sudden (decide) ______ to sell the company surprised everyone.\"",
      "options": [
        "decision",
        "decidement",
        "decisiveness",
        "deciding"
      ],
      "answer": 0,
      "explanation": "The nominalization formed from \"decide\" is \"decision\".",
      "sourceTip": "Word Formation B1"
    },
    {
      "id": "noun_b1_5",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The police is investigating the recent break-in at the store.\"",
      "options": [
        "Correct",
        "Incorrect - \"police\" is always grammatically plural and takes \"are\""
      ],
      "answer": 1,
      "explanation": "\"Police\" is always a plural collective noun without -s: \"The police ARE investigating\".",
      "sourceTip": "Oxford B1 Traps"
    },
    {
      "id": "noun_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun has a plural form ending in \"-ves\"?",
      "options": [
        "Roof",
        "Cliff",
        "Thief",
        "Chef"
      ],
      "answer": 2,
      "explanation": "\"Thief\" -> \"thieves\". Roofs, cliffs, and chefs are regular and simply add -s.",
      "sourceTip": "Spelling Irregularities B1"
    },
    {
      "id": "noun_b1_7",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Her ______ of ancient Khmer history impressed the visiting university professors.",
      "options": [
        "knowledges",
        "knowledge",
        "knowledging",
        "knowledgability"
      ],
      "answer": 1,
      "explanation": "\"Knowledge\" is uncountable and never takes plural -s: \"Her knowledge of...\".",
      "sourceTip": "B1 Academic Vocabulary"
    },
    {
      "id": "noun_b1_8",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [scissors / these / are / sharp / very / sewing]",
      "options": [
        "These sewing scissors are very sharp.",
        "These sharp sewing are scissors very.",
        "Scissors sewing these are very sharp.",
        "Very sharp are these sewing scissors."
      ],
      "answer": 0,
      "explanation": "\"These sewing scissors\" (pair noun taking plural determiner and verb) + are + very sharp.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "noun_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Which collective noun traditionally groups fish together?",
      "options": [
        "A flock of fish",
        "A herd of fish",
        "A school of fish",
        "A pack of fish"
      ],
      "answer": 2,
      "explanation": "The collective noun for fish is \"a school of fish\" (or \"shoal\").",
      "sourceTip": "Collective Nouns B1"
    },
    {
      "id": "noun_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The acoustics in the newly built concert hall are magnificent.\"",
      "options": [
        "Correct - \"acoustics\" referring to sound qualities takes a plural verb",
        "Incorrect - ends in -ics so it must be singular"
      ],
      "answer": 0,
      "explanation": "When nouns ending in -ics refer to physical qualities (acoustics, athletics), they take plural agreement.",
      "sourceTip": "B1 Concord Rules"
    },
    {
      "id": "noun_b1_11",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: bought] [B: a pair of] [C: jeans] that [D: was] on sale.\"",
      "options": [
        "A: bought",
        "B: a pair of",
        "C: jeans",
        "D: was"
      ],
      "answer": 3,
      "explanation": "When \"that\" refers back to \"jeans\" (or jeans directly), it takes \"were\", or if referring to \"a pair\", \"was\" is accepted, but in: \"She bought jeans that WERE on sale.\"",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "noun_b1_12",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Add the suffix for the abstract noun: \"Regular exercise promotes good physical and mental (healthy) ______.\"",
      "options": [
        "health",
        "healthiness",
        "healthful",
        "healthement"
      ],
      "answer": 0,
      "explanation": "The abstract noun is \"health\".",
      "sourceTip": "Word Formation B1"
    },
    {
      "id": "noun_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which of these is an ABSTRACT noun (not physical/concrete)?",
      "options": [
        "Bravery",
        "Statue",
        "River",
        "Passport"
      ],
      "answer": 0,
      "explanation": "\"Bravery\" represents an intangible quality or concept (abstract noun).",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "noun_b1_14",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Understanding",
      "question": "A large crowd of ______ gathered outside the national stadium.",
      "options": [
        "spectator",
        "spectators",
        "spectatoring",
        "spectatress"
      ],
      "answer": 1,
      "explanation": "\"A crowd of...\" takes a plural countable noun: \"spectators\".",
      "sourceTip": "B1 Sentence Completion"
    },
    {
      "id": "noun_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange into a clean sentence: [customs / the / airport / officers / inspected / our / at / bags]",
      "options": [
        "Customs officers inspected our bags at the airport.",
        "At the airport inspected customs officers our bags.",
        "Our bags inspected customs officers at the airport.",
        "Customs inspected officers our bags at the airport."
      ],
      "answer": 0,
      "explanation": "Compound Subject (Customs officers) + Verb (inspected) + Direct Object (our bags) + Place (at the airport).",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "noun_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "In which sentence does \"glass\" function as an uncountable mass noun?",
      "options": [
        "He accidentally stepped on broken glass on the floor.",
        "She poured herself a glass of orange juice.",
        "He needs new glasses to read small print.",
        "There was a glass on the bedside table."
      ],
      "answer": 0,
      "explanation": "In option A, \"glass\" refers to the substance/material itself, making it uncountable mass.",
      "sourceTip": "Oxford B2 Practice"
    },
    {
      "id": "noun_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "There is a serious ______ of clean drinking water in the drought-affected region.",
      "options": [
        "scarceness",
        "scarcity",
        "scarce",
        "scarcifulness"
      ],
      "answer": 1,
      "explanation": "The formal abstract noun derived from the adjective \"scarce\" is \"scarcity\".",
      "sourceTip": "Word Formation B2"
    },
    {
      "id": "noun_b2_3",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"The committee [A: have] [B: signed] [C: their] names on [D: its] charter.\"",
      "options": [
        "A: have",
        "B: signed",
        "C: their",
        "D: its - clash in pronoun concord!"
      ],
      "answer": 3,
      "explanation": "Pronoun concord must be consistent: if using plural \"have\" and \"their names\", you must say \"their charter\", not \"its\".",
      "sourceTip": "Concord B2"
    },
    {
      "id": "noun_b2_4",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Plural)",
      "skillTested": "Producing",
      "question": "Provide the plural of the classical loan: \"Scientists discovered several new (species) ______ in the rainforest.\"",
      "options": [
        "species",
        "specieses",
        "specie",
        "specii"
      ],
      "answer": 0,
      "explanation": "\"Species\" is an invariable noun whose singular and plural forms are identical.",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "noun_b2_5",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Economics have always been her favorite academic discipline.\"",
      "options": [
        "Correct",
        "Incorrect - academic subjects ending in -ics take a singular verb"
      ],
      "answer": 1,
      "explanation": "Names of academic subjects (economics, physics, mathematics) take a singular verb: \"Economics has always been...\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "noun_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which compound noun pluralizes ONLY the first element?",
      "options": [
        "Passer-by",
        "Mother-in-law",
        "Attorney general",
        "Toothbrush"
      ],
      "answer": 3,
      "explanation": "\"Toothbrush\" pluralizes the second noun: \"toothbrushes\". The others pluralize the head noun (passers-by, mothers-in-law, attorneys general).",
      "sourceTip": "Compound Plurals B2"
    },
    {
      "id": "noun_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Order into a formal sentence: [expansion / approved / the / factory / board / of / the / has]",
      "options": [
        "The board has approved the expansion of the factory.",
        "The factory expansion has the board approved of.",
        "Of the factory the expansion has approved the board.",
        "Has the board approved expansion the factory of."
      ],
      "answer": 0,
      "explanation": "Subject (The board) + Auxiliary and Verb (has approved) + Object (the expansion of the factory).",
      "sourceTip": "B2 Syntax"
    },
    {
      "id": "noun_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The government has introduced stricter ______ against illegal logging.",
      "options": [
        "measures",
        "measurings",
        "measurements",
        "measured"
      ],
      "answer": 0,
      "explanation": "\"Measures\" in the plural is a specific political/legal noun meaning official actions or sanctions.",
      "sourceTip": "Collocations B2"
    },
    {
      "id": "noun_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the verb \"persevere\" with its correct noun form:",
      "options": [
        "Perseverance",
        "Perseveration",
        "Perseverment",
        "Perseverity"
      ],
      "answer": 0,
      "explanation": "The noun derived from \"persevere\" is \"perseverance\".",
      "sourceTip": "Cambridge B2 Word List"
    },
    {
      "id": "noun_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The luggage were loaded onto the cargo plane by the ground crew.\"",
      "options": [
        "Correct",
        "Incorrect - \"luggage\" is uncountable and requires singular \"was\""
      ],
      "answer": 1,
      "explanation": "\"Luggage\" is strictly uncountable and takes a singular verb: \"The luggage WAS loaded\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "noun_b2_11",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"A [A: five-years-old] child [B: was] [C: rescued] from the [D: building].\"",
      "options": [
        "A: five-years-old",
        "B: was",
        "C: rescued",
        "D: building"
      ],
      "answer": 0,
      "explanation": "When a compound numeral modifies a noun pre-nominally, the noun remains singular: \"a five-year-old child\".",
      "sourceTip": "Compound Modifiers B2"
    },
    {
      "id": "noun_b2_12",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the noun: \"The (fail) ______ of the bank triggered an economic panic.\"",
      "options": [
        "failure",
        "failingness",
        "failment",
        "failed"
      ],
      "answer": 0,
      "explanation": "The nominalization of \"fail\" is \"failure\".",
      "sourceTip": "Word Formation B2"
    },
    {
      "id": "noun_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun can be BOTH countable and uncountable with a shift in meaning?",
      "options": [
        "Coffee",
        "Information",
        "Luggage",
        "Furniture"
      ],
      "answer": 0,
      "explanation": "\"Coffee\" is uncountable as a liquid mass, but countable when ordering cups/portions: \"two coffees, please\".",
      "sourceTip": "B2 Semantic Shifts"
    },
    {
      "id": "noun_b2_14",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Understanding",
      "question": "The company's sudden ______ of bankruptcy caused stock prices to plummet.",
      "options": [
        "declaration",
        "declarement",
        "declarance",
        "declarity"
      ],
      "answer": 0,
      "explanation": "The correct nominalization is \"declaration\".",
      "sourceTip": "Academic Nouns B2"
    },
    {
      "id": "noun_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble the sentence: [concord / subject-verb / essential / is / for / academic / writing]",
      "options": [
        "Subject-verb concord is essential for academic writing.",
        "Academic writing is essential for subject-verb concord.",
        "Essential is subject-verb concord for academic writing.",
        "For academic writing is subject-verb concord essential."
      ],
      "answer": 0,
      "explanation": "Subject (Subject-verb concord) + Verb (is) + Complement (essential) + Prepositional phrase (for academic writing).",
      "sourceTip": "B2 Syntax"
    },
    {
      "id": "noun_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the plural form of the Greek loan noun \"criterion\":",
      "options": [
        "criteria",
        "criterions",
        "criterias",
        "criterium"
      ],
      "answer": 0,
      "explanation": "Nouns of Greek origin ending in -on form their plural in -a: \"criterion\" -> \"criteria\".",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "noun_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Latin Plural)",
      "skillTested": "Producing",
      "question": "Provide the classical plural form of the noun in brackets: \"Multiple (hypothesis) ______ were proposed to explain the cosmic phenomenon.\"",
      "options": [
        "hypotheses",
        "hypothesis",
        "hypothesises",
        "hypothesea"
      ],
      "answer": 0,
      "explanation": "Greek loan nouns ending in -is change to -es: \"hypotheses\" (pronounced /haɪˈpɒθəsiːz/).",
      "sourceTip": "Academic Lexis C1"
    },
    {
      "id": "noun_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"This [A: data] [B: are] [C: completely] [D: inconclusive].\"",
      "options": [
        "A: data",
        "B: are - in formal academic style, data can be plural (datum -> data), but with \"This\" singular demonstrative, there is a mismatch!"
      ],
      "answer": 0,
      "explanation": "\"This\" is singular while \"are\" is plural. Write either \"These data are...\" (formal) or \"This data is...\" (standard).",
      "sourceTip": "C1 Concord Nuance"
    },
    {
      "id": "noun_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Jack and Jill's wedding was attended by three hundred guests.\"",
      "options": [
        "Correct - shared/joint possession uses 's only on the final name",
        "Incorrect - both Jack and Jill must take 's"
      ],
      "answer": 0,
      "explanation": "When two or more nouns jointly possess a single entity (their shared wedding), only the final noun takes the apostrophe-s.",
      "sourceTip": "Chicago Manual of Style C1"
    },
    {
      "id": "noun_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange this academic sentence: [phenomenon / fascinating / is / this / optical / rare / a]",
      "options": [
        "This is a fascinating, rare optical phenomenon.",
        "This optical phenomenon is a rare fascinating.",
        "A fascinating optical phenomenon is rare this.",
        "Fascinating optical phenomenon this is a rare."
      ],
      "answer": 0,
      "explanation": "Demonstrative Subject (This) + Verb (is) + Predicate Noun Phrase (a fascinating, rare optical phenomenon).",
      "sourceTip": "C1 Advanced Word Order"
    },
    {
      "id": "noun_c1_6",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which Latinate noun forms its plural in \"-i\"?",
      "options": [
        "Radius",
        "Index",
        "Matrix",
        "Apex"
      ],
      "answer": 0,
      "explanation": "\"Radius\" -> \"radii\" (plural in -i). \"Index\" becomes \"indices\", \"matrix\" becomes \"matrices\", \"apex\" becomes \"apices\".",
      "sourceTip": "Classical Plurals C1"
    },
    {
      "id": "noun_c1_7",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The archaeological excavation unearthed the fossilized ______ of an unknown hominid.",
      "options": [
        "remains",
        "remain",
        "remaining",
        "remaindership"
      ],
      "answer": 0,
      "explanation": "\"Remains\" (meaning a corpse or ancient relics) is a pluralia tantum noun that occurs only in the plural.",
      "sourceTip": "Lexical Syntax C1"
    },
    {
      "id": "noun_c1_8",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"They [A: examined] [B: three] [C: different] [D: phenomenons] in the particle accelerator.\"",
      "options": [
        "A: examined",
        "B: three",
        "C: different",
        "D: phenomenons"
      ],
      "answer": 3,
      "explanation": "The standard academic plural of \"phenomenon\" is \"phenomena\".",
      "sourceTip": "C1 Advanced Vocabulary"
    },
    {
      "id": "noun_c1_9",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The company was placed into ______ after failing to service its sovereign bond debts.",
      "options": [
        "receivership",
        "receivement",
        "receivers",
        "receivability"
      ],
      "answer": 0,
      "explanation": "\"Receivership\" is the specialized legal state where an independent receiver administers a bankrupt company.",
      "sourceTip": "C1 Business English"
    },
    {
      "id": "noun_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"John's and Mary's cars were parked in adjacent bays.\"",
      "options": [
        "Correct - separate ownership requires 's on each individual noun",
        "Incorrect - only the second name can take 's"
      ],
      "answer": 0,
      "explanation": "Because they own separate cars (\"cars\" plural), both individual owners must receive the genitive marker: \"John's and Mary's cars\".",
      "sourceTip": "C1 Genitive Mastery"
    },
    {
      "id": "noun_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which of the following is a zero-plural noun used in hunting and measurement jargon?",
      "options": [
        "Brace",
        "Glove",
        "Shoe",
        "Sleeve"
      ],
      "answer": 0,
      "explanation": "\"Brace\" (meaning a pair of game animals or birds) takes zero plural after numerals: \"three brace of pheasants\".",
      "sourceTip": "C2 Proficiency Lexicology"
    },
    {
      "id": "noun_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Archaic Plural)",
      "skillTested": "Producing",
      "question": "Supply the zero plural in historical context: \"The merchant traded five (head) ______ of prime Angus cattle.\"",
      "options": [
        "head",
        "heads",
        "heades",
        "headen"
      ],
      "answer": 0,
      "explanation": "In livestock terminology, \"head\" maintains an invariant zero plural after numbers: \"five head of cattle\".",
      "sourceTip": "Historical Syntax C2"
    },
    {
      "id": "noun_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the syntactic defect: \"The [A: barracks] [B: was] completely [C: renovated] last year, but now [D: they are] decaying again.\"",
      "options": [
        "A: barracks",
        "B: was",
        "C: renovated",
        "D: they are - shifted pronominal number!"
      ],
      "answer": 3,
      "explanation": "While \"barracks\" can be singular or plural, switching from singular \"was\" to plural \"they are\" within the same sentence violates concord consistency.",
      "sourceTip": "C2 Stylistic Concord"
    },
    {
      "id": "noun_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct the formal legal clause: [jurisprudence / this / established / case / landmark / of / body / a / new]",
      "options": [
        "This landmark case established a new body of jurisprudence.",
        "A new body of jurisprudence established this landmark case.",
        "Established this landmark case a new body of jurisprudence.",
        "Of jurisprudence a new body established this landmark case."
      ],
      "answer": 0,
      "explanation": "Subject (This landmark case) + Verb (established) + Direct Object (a new body of jurisprudence).",
      "sourceTip": "C2 Academic Prose"
    },
    {
      "id": "noun_c2_5",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun exhibits morphological MUTATION PLURAL without an affix?",
      "options": [
        "Foot (feet)",
        "Bacterium (bacteria)",
        "Formula (formulae)",
        "Index (indices)"
      ],
      "answer": 0,
      "explanation": "\"Foot\" -> \"feet\" is an internal vowel mutation (umlaut/ablaut) inherited from Proto-Germanic.",
      "sourceTip": "Historical Linguistics C2"
    },
    {
      "id": "noun_c2_6",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Understanding",
      "question": "The ambassador was granted ______ from diplomatic prosecution under the Vienna Convention.",
      "options": [
        "immunity",
        "immuneness",
        "immunitude",
        "immunitas"
      ],
      "answer": 0,
      "explanation": "\"Immunity\" is the precise formal legal noun.",
      "sourceTip": "C2 Diplomatic Register"
    },
    {
      "id": "noun_c2_7",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The committee has reached consensus, but their individual motives remain opaque.\"",
      "options": [
        "Correct - intentional conceptual shift from unified entity to distinct individuals",
        "Incorrect - collective nouns can never shift agreement"
      ],
      "answer": 0,
      "explanation": "In sophisticated English, writers may deliberate move from singular (unified act) to plural (individual members' mental states).",
      "sourceTip": "C2 Rhetorical Concord"
    },
    {
      "id": "noun_c2_8",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "His prose was characterized by extraordinary ______, avoiding all verbose redundancies.",
      "options": [
        "brevity",
        "briefness",
        "briefment",
        "brevation"
      ],
      "answer": 0,
      "explanation": "\"Brevity\" is the high-register classical noun denoting concise expressiveness.",
      "sourceTip": "C2 Stylistics"
    },
    {
      "id": "noun_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Every [A: means] [B: have] [C: been] [D: exhausted] in the search.\"",
      "options": [
        "A: means",
        "B: have - \"Every\" requires singular agreement!",
        "C: been",
        "D: exhausted"
      ],
      "answer": 1,
      "explanation": "\"Every\" modifies singular countables: \"means\" when preceded by \"every\" is grammatically singular and requires \"has been\".",
      "sourceTip": "C2 Traps"
    },
    {
      "id": "noun_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Hebrew Loan Plural)",
      "skillTested": "Producing",
      "question": "What is the plural of the Hebrew loan noun \"cherub\" in traditional theological contexts?",
      "options": [
        "cherubim",
        "cherubs",
        "cherubes",
        "cherubites"
      ],
      "answer": 0,
      "explanation": "The traditional Biblical/theological plural of \"cherub\" is \"cherubim\" (or \"seraph\" -> \"seraphim\").",
      "sourceTip": "C2 Loan Morphology"
    }
  ],
  "pronouns": [
    {
      "id": "pron_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Replace the subject: \"Mary is a doctor.\" -> \"______ is a doctor.\"",
      "options": [
        "He",
        "She",
        "It",
        "They"
      ],
      "answer": 1,
      "explanation": "\"Mary\" is a singular female person, so the subject personal pronoun is \"She\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "pron_a1_2",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Please give that red apple to ______; I am hungry.",
      "options": [
        "I",
        "me",
        "my",
        "mine"
      ],
      "answer": 1,
      "explanation": "Following a preposition (\"to\"), use the objective pronoun \"me\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "pron_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Him is my best friend from school.\"",
      "options": [
        "Correct",
        "Incorrect - \"He\" is the subject pronoun"
      ],
      "answer": 1,
      "explanation": "\"He\" must be used as the subject of the sentence, not object pronoun \"him\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "pron_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is an OBJECT pronoun?",
      "options": [
        "He",
        "They",
        "Us",
        "She"
      ],
      "answer": 2,
      "explanation": "\"Us\" is an objective pronoun (subject form is \"we\").",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "pron_a1_5",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Possessive)",
      "skillTested": "Producing",
      "question": "Fill with the possessive adjective: \"I have a cat. (I) ______ cat is white.\"",
      "options": [
        "My",
        "Me",
        "Mine",
        "Myself"
      ],
      "answer": 0,
      "explanation": "The possessive adjective before a noun is \"My\".",
      "sourceTip": "Elementary Pronouns"
    },
    {
      "id": "pron_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange the words: [sister / she / is / my / younger]",
      "options": [
        "She is my younger sister.",
        "My sister is she younger.",
        "She my younger is sister.",
        "Younger sister she is my."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (is) + Possessive Noun Phrase (my younger sister).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "pron_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"David and [A: me] [B: went] [C: to] the [D: market].\"",
      "options": [
        "A: me",
        "B: went",
        "C: to",
        "D: market"
      ],
      "answer": 0,
      "explanation": "As part of the compound subject performing the action, use \"I\": \"David and I went...\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "pron_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the pronoun \"we\" with its corresponding possessive pronoun:",
      "options": [
        "our",
        "ours",
        "us",
        "ourselves"
      ],
      "answer": 1,
      "explanation": "\"Ours\" is the standalone possessive pronoun for \"we\" (e.g., \"This classroom is ours\").",
      "sourceTip": "British Council A1"
    },
    {
      "id": "pron_a1_9",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Look at those birds! ______ are flying south for the winter.",
      "options": [
        "It",
        "They",
        "Them",
        "Their"
      ],
      "answer": 1,
      "explanation": "Plural animals/things take the subject pronoun \"They\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "pron_a1_10",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"This pencil belongs to me. It is mine.\"",
      "options": [
        "Correct - \"mine\" is the possessive pronoun",
        "Incorrect - say \"It is my\""
      ],
      "answer": 0,
      "explanation": "\"Mine\" correctly stands alone without a following noun.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "pron_a1_11",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Where are my keys? I cannot find ______ anywhere.",
      "options": [
        "it",
        "them",
        "they",
        "their"
      ],
      "answer": 1,
      "explanation": "\"Keys\" is plural, so the direct object pronoun is \"them\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "pron_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which pronoun is a DEMONSTRATIVE pronoun?",
      "options": [
        "This",
        "You",
        "Him",
        "We"
      ],
      "answer": 0,
      "explanation": "\"This\" (along with that, these, those) is a demonstrative pronoun.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "pron_a1_13",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Change into plural: \"That book is interesting.\" -> \"(Those) ______ books are interesting.\"",
      "options": [
        "Those",
        "These",
        "This",
        "Them"
      ],
      "answer": 0,
      "explanation": "The plural form of \"that\" is \"those\".",
      "sourceTip": "Demonstratives A1"
    },
    {
      "id": "pron_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [give / can / you / your / pen / me / ?]",
      "options": [
        "Can you give me your pen?",
        "Can you give your pen me?",
        "Give can you me your pen?",
        "Your pen can you give me?"
      ],
      "answer": 0,
      "explanation": "Modal (Can) + Subject (you) + Verb (give) + Indirect Object (me) + Direct Object (your pen)?",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "pron_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"The dog [A: is] wagging [B: it's] [C: tail] [D: happily].\"",
      "options": [
        "A: is",
        "B: it's",
        "C: tail",
        "D: happily"
      ],
      "answer": 1,
      "explanation": "Possessive determiner is \"its\" (without apostrophe). \"It's\" is a contraction of \"it is\".",
      "sourceTip": "Common Traps A1"
    },
    {
      "id": "pron_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the reflexive pronoun: \"Be careful with that boiling water, or you will scald ______.\"",
      "options": [
        "you",
        "your",
        "yourself",
        "yourselves"
      ],
      "answer": 2,
      "explanation": "When the subject and object are the same person (singular you), use \"yourself\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "pron_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Nobody came to the party, so she sat by ______ the entire evening.",
      "options": [
        "her",
        "hers",
        "herself",
        "she"
      ],
      "answer": 2,
      "explanation": "\"By herself\" is an idiomatic phrase meaning alone / without company.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "pron_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The two brothers always look after each other.\"",
      "options": [
        "Correct - \"each other\" is a reciprocal pronoun for two parties",
        "Incorrect - say \"themselves\""
      ],
      "answer": 0,
      "explanation": "\"Each other\" denotes mutual reciprocal action between two individuals.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "pron_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Reflexive)",
      "skillTested": "Producing",
      "question": "Complete with reflexive form: \"He taught (he) ______ how to write computer code.\"",
      "options": [
        "himself",
        "hisself",
        "him",
        "he"
      ],
      "answer": 0,
      "explanation": "The masculine singular reflexive pronoun is \"himself\" (never *hisself).",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "pron_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"Is [A: there] [B: anybody] in the office who [C: can] help [D: we]?\"",
      "options": [
        "A: there",
        "B: anybody",
        "C: can",
        "D: we"
      ],
      "answer": 3,
      "explanation": "Object of the verb \"help\" must be the objective pronoun \"us\", not subjective \"we\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "pron_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is an INDEFINITE pronoun?",
      "options": [
        "Someone",
        "They",
        "Mine",
        "Himself"
      ],
      "answer": 0,
      "explanation": "\"Someone\" refers to an unspecified person (indefinite pronoun).",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "pron_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange into a question: [phone / is / this / whose / mobile / ?]",
      "options": [
        "Whose mobile phone is this?",
        "This mobile phone whose is?",
        "Whose is mobile phone this?",
        "Mobile phone whose this is?"
      ],
      "answer": 0,
      "explanation": "Interrogative possessive \"Whose\" + Noun (mobile phone) + Verb (is) + Demonstrative (this)?",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "pron_a2_8",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Which relative pronoun refers to human beings as subject?",
      "options": [
        "Who",
        "Which",
        "Where",
        "When"
      ],
      "answer": 0,
      "explanation": "\"Who\" is the relative pronoun used for persons.",
      "sourceTip": "Relative Pronouns A2"
    },
    {
      "id": "pron_a2_9",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The jacket belongs to Sarah; this blue one is ______.",
      "options": [
        "my",
        "mine",
        "me",
        "myself"
      ],
      "answer": 1,
      "explanation": "\"Mine\" replaces the noun phrase \"my jacket\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "pron_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Everyone have finished their lunch in the cafeteria.\"",
      "options": [
        "Correct",
        "Incorrect - \"Everyone\" takes a singular verb \"has\""
      ],
      "answer": 1,
      "explanation": "Indefinite pronouns ending in -one and -body are grammatically singular: \"Everyone has...\".",
      "sourceTip": "Concord A2"
    },
    {
      "id": "pron_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I don't know ______ about this topic; could you explain it to me?",
      "options": [
        "something",
        "anything",
        "nothing",
        "everything"
      ],
      "answer": 1,
      "explanation": "In negative sentences, use \"anything\" (not \"nothing\").",
      "sourceTip": "Indefinite Pronouns A2"
    },
    {
      "id": "pron_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with relative pronoun: \"The boy (who / which) ______ won the competition received a gold medal.\"",
      "options": [
        "who",
        "which",
        "whom",
        "where"
      ],
      "answer": 0,
      "explanation": "Use \"who\" for a person in a defining relative clause.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "pron_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which pronoun is a POSSESSIVE pronoun (not adjective)?",
      "options": [
        "Yours",
        "Your",
        "My",
        "Their"
      ],
      "answer": 0,
      "explanation": "\"Yours\" is a standalone possessive pronoun. \"Your\", \"my\", and \"their\" are possessive adjectives.",
      "sourceTip": "Possessives A2"
    },
    {
      "id": "pron_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Order the sentence: [painted / living / the / they / room / themselves]",
      "options": [
        "They painted the living room themselves.",
        "Themselves they painted the living room.",
        "They the living room themselves painted.",
        "The living room they painted themselves."
      ],
      "answer": 0,
      "explanation": "Emphatic reflexive \"themselves\" sits naturally at the end of the clause.",
      "sourceTip": "Word Order A2"
    },
    {
      "id": "pron_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"Neither of [A: the] [B: answers] [C: are] [D: correct].\"",
      "options": [
        "A: the",
        "B: answers",
        "C: are",
        "D: correct"
      ],
      "answer": 2,
      "explanation": "\"Neither of...\" is grammatically singular in standard English and takes \"is\": \"Neither of the answers IS correct\".",
      "sourceTip": "Standard ELT A2"
    },
    {
      "id": "pron_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the relative pronoun indicating possession: \"The musician ______ violin was stolen was devastated.\"",
      "options": [
        "who",
        "whom",
        "whose",
        "which"
      ],
      "answer": 2,
      "explanation": "\"Whose\" represents the possessive relative pronoun (\"the musician's violin\").",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "pron_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "If anybody calls while I am out, please take ______ message.",
      "options": [
        "his",
        "her",
        "their",
        "its"
      ],
      "answer": 2,
      "explanation": "Singular \"their\" is standard gender-neutral pronominal concord for indefinite pronouns.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "pron_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The committee has published their annual financial report.\"",
      "options": [
        "Correct",
        "Incorrect - shift from singular \"has\" to plural \"their\""
      ],
      "answer": 1,
      "explanation": "Concord consistency: either \"The committee HAS published ITS report\" or \"The committee HAVE published THEIR report\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "pron_b1_4",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Insert the reciprocal: \"The three business partners regularly collaborate with (each other / one another) ______.\"",
      "options": [
        "one another",
        "each other",
        "themselves",
        "theirselves"
      ],
      "answer": 0,
      "explanation": "Traditionally, \"one another\" is preferred for interactions involving three or more parties.",
      "sourceTip": "Grammar B1"
    },
    {
      "id": "pron_b1_5",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Between you and [A: I], [B: there] [C: are] some serious [D: concerns].\"",
      "options": [
        "A: I",
        "B: there",
        "C: are",
        "D: concerns"
      ],
      "answer": 0,
      "explanation": "Preposition \"Between\" governs objective pronouns: \"Between you and me\" (not \"I\").",
      "sourceTip": "British Council B1"
    },
    {
      "id": "pron_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which relative pronoun can refer to a WHOLE PRECEDING CLAUSE?",
      "options": [
        "Which",
        "Who",
        "Whom",
        "That"
      ],
      "answer": 0,
      "explanation": "Sentential relative clauses use \", which\": \"He arrived late, which annoyed the boss.\"",
      "sourceTip": "B1 Sentential Relatives"
    },
    {
      "id": "pron_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble the sentence: [car / is / this / that / than / faster / of / mine]",
      "options": [
        "This car is faster than that of mine.",
        "That car is faster than this of mine.",
        "Faster is this car than that of mine.",
        "Than that of mine this car is faster."
      ],
      "answer": 0,
      "explanation": "Comparative structure using demonstrative pro-form \"that of mine\".",
      "sourceTip": "B1 Comparison"
    },
    {
      "id": "pron_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Neither the manager nor the assistant ______ aware of the schedule change.",
      "options": [
        "was",
        "were",
        "have been",
        "are"
      ],
      "answer": 0,
      "explanation": "In \"Neither... nor\", the verb agrees with the nearer subject (\"the assistant was\").",
      "sourceTip": "Proximity Concord B1"
    },
    {
      "id": "pron_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the pronoun with its formal replacement: \"people who\" ->",
      "options": [
        "those who",
        "them who",
        "these that",
        "ones which"
      ],
      "answer": 0,
      "explanation": "\"Those who...\" is the standard formal demonstrative antecedent.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "pron_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He introduced hisself to the newly arrived guests.\"",
      "options": [
        "Correct",
        "Incorrect - the standard reflexive pronoun is \"himself\""
      ],
      "answer": 1,
      "explanation": "*Hisself is non-standard dialectal; standard English requires \"himself\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "pron_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ of the two applicants had the necessary qualifications for the job.",
      "options": [
        "Neither",
        "None",
        "Nobody",
        "Nothing"
      ],
      "answer": 0,
      "explanation": "\"Neither\" is used when referring specifically to two entities (\"None\" is used for three or more).",
      "sourceTip": "B1 Quantifiers"
    },
    {
      "id": "pron_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"She [A: blamed] [B: herself] [C: for] [D: what happened].\"",
      "options": [
        "A: blamed",
        "B: herself",
        "C: for",
        "D: what happened - No mistake!"
      ],
      "answer": 3,
      "explanation": "The sentence is grammatically flawless: \"She blamed herself for what happened.\"",
      "sourceTip": "Error Checking B1"
    },
    {
      "id": "pron_b1_13",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Use the correct relative pronoun: \"The hotel (in which / where) ______ we stayed was near the coast.\"",
      "options": [
        "where",
        "which",
        "that",
        "whom"
      ],
      "answer": 0,
      "explanation": "\"Where\" replaces \"in which\" for locations: \"The hotel where we stayed...\".",
      "sourceTip": "Relative Clauses B1"
    },
    {
      "id": "pron_b1_14",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word CANNOT function as a relative pronoun in a non-defining clause?",
      "options": [
        "That",
        "Which",
        "Who",
        "Whom"
      ],
      "answer": 0,
      "explanation": "\"That\" can NEVER be used in non-defining (comma-separated) relative clauses.",
      "sourceTip": "Cambridge B1 Traps"
    },
    {
      "id": "pron_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [wants / to / speak / someone / to / you / outside]",
      "options": [
        "Someone outside wants to speak to you.",
        "To speak to you wants someone outside.",
        "Outside someone wants to speak you to.",
        "Wants someone to speak outside to you."
      ],
      "answer": 0,
      "explanation": "Subject (Someone outside) + Verb (wants to speak) + Prepositional Object (to you).",
      "sourceTip": "Word Order B1"
    },
    {
      "id": "pron_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the formal sentence with correct preposition + relative pronoun:",
      "options": [
        "The professor to whom the manuscript was dedicated has retired.",
        "The professor to who the manuscript was dedicated has retired.",
        "The professor who the manuscript was dedicated has retired.",
        "The professor which the manuscript was dedicated has retired."
      ],
      "answer": 0,
      "explanation": "Preposition fronting in formal English governs \"whom\": \"to whom the manuscript was dedicated\".",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "pron_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The salary of an experienced surgeon is considerably higher than ______ of a resident doctor.",
      "options": [
        "that",
        "this",
        "those",
        "these"
      ],
      "answer": 0,
      "explanation": "\"That\" is the formal demonstrative pro-form replacing the singular noun \"the salary\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "pron_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Whoever wins the election will face immediate economic challenges.\"",
      "options": [
        "Correct - \"Whoever\" functions as the subject of \"wins\" in the nominal clause",
        "Incorrect - should be \"Whomever\""
      ],
      "answer": 0,
      "explanation": "\"Whoever\" acts as the subject of the finite verb \"wins\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "pron_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"Give the prize to [A: whomever] [B: has] [C: submitted] the best [D: essay].\"",
      "options": [
        "A: whomever",
        "B: has",
        "C: submitted",
        "D: essay"
      ],
      "answer": 0,
      "explanation": "Even following the preposition \"to\", the nominal clause requires a subjective pronoun \"whoever\" to serve as subject of \"has submitted\".",
      "sourceTip": "B2 Traps"
    },
    {
      "id": "pron_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the demonstrative pro-form: \"The challenges of today are far greater than (that / those) ______ of the last century.\"",
      "options": [
        "those",
        "that",
        "this",
        "these"
      ],
      "answer": 0,
      "explanation": "For plural referents (\"the challenges\"), use the demonstrative pro-form \"those\".",
      "sourceTip": "Formal Grammar B2"
    },
    {
      "id": "pron_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which pronoun is an EMPHATIC reflexive pronoun rather than a true reflexive?",
      "options": [
        "The Queen herself opened the new hospital wing.",
        "He cut himself with a knife.",
        "She looked at herself in the mirror.",
        "They introduced themselves."
      ],
      "answer": 0,
      "explanation": "In A, \"herself\" simply emphasizes \"The Queen\" and can be omitted without changing core syntax.",
      "sourceTip": "Reflexive vs Emphatic B2"
    },
    {
      "id": "pron_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Order into a formal sentence: [delighted / were / with / the / results / themselves / they]",
      "options": [
        "They were delighted with the results themselves.",
        "Themselves were they delighted with the results.",
        "With the results they were delighted themselves.",
        "They themselves delighted were with the results."
      ],
      "answer": 0,
      "explanation": "Subject (They) + Verb (were) + Predicate (delighted with the results) + Emphatic pronoun (themselves).",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "pron_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The committee members were divided in ______ opinions regarding the restructuring plan.",
      "options": [
        "their",
        "its",
        "his",
        "our"
      ],
      "answer": 0,
      "explanation": "When members of a collective body disagree or act separately, use plural \"their\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "pron_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the pronoun function: \"It is raining\" - what type of \"It\" is this?",
      "options": [
        "Dummy / Ambient \"it\"",
        "Anaphoric personal pronoun",
        "Demonstrative pronoun",
        "Possessive pronoun"
      ],
      "answer": 0,
      "explanation": "\"It\" in weather expressions is an ambient / dummy (expletive) pronoun devoid of semantic referent.",
      "sourceTip": "Linguistic Grammar B2"
    },
    {
      "id": "pron_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"One must not forget his obligations to the community.\"",
      "options": [
        "Correct in informal speech, but inconsistent with \"one\" in formal English",
        "Completely standard in formal British English"
      ],
      "answer": 0,
      "explanation": "In strictly formal British English, \"one\" requires \"one's obligations\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "pron_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The author ______ novel became a bestseller has agreed to an exclusive interview.",
      "options": [
        "whose",
        "who",
        "whom",
        "which"
      ],
      "answer": 0,
      "explanation": "\"Whose\" expresses possession for persons in relative clauses.",
      "sourceTip": "B2 Relative Clauses"
    },
    {
      "id": "pron_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Neither of [A: the] two delegates [B: were] prepared to concede [C: their] [D: position].\"",
      "options": [
        "A: the",
        "B: were - in formal English, \"Neither\" takes singular \"was\"",
        "C: their",
        "D: position"
      ],
      "answer": 1,
      "explanation": "Standard formal written English requires singular agreement with \"neither\": \"was prepared\".",
      "sourceTip": "Formal Concord B2"
    },
    {
      "id": "pron_b2_13",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Provide the indefinite pronoun: \"(None / Neither) ______ of the twelve board members voted against the motion.\"",
      "options": [
        "None",
        "Neither",
        "Nobody",
        "Nothing"
      ],
      "answer": 0,
      "explanation": "For more than two entities (\"twelve members\"), use \"None\", not \"Neither\".",
      "sourceTip": "Precision B2"
    },
    {
      "id": "pron_b2_14",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which of the following is a COMPOUND INDEFINITE PRONOUN?",
      "options": [
        "Everywhere",
        "Somebody",
        "Each",
        "Either"
      ],
      "answer": 1,
      "explanation": "\"Somebody\" is a compound indefinite pronoun (some + body). \"Everywhere\" is an adverb.",
      "sourceTip": "Morphology B2"
    },
    {
      "id": "pron_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [it / to / necessary / is / reserve / advance / seats / in]",
      "options": [
        "It is necessary to reserve seats in advance.",
        "To reserve seats in advance is it necessary.",
        "In advance it is necessary to reserve seats.",
        "Necessary it is in advance to reserve seats."
      ],
      "answer": 0,
      "explanation": "Anticipatory \"It\" + Copula (is) + Adjective (necessary) + Extraposed Infinitive (to reserve seats in advance).",
      "sourceTip": "Anticipatory Syntax B2"
    },
    {
      "id": "pron_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the sentence with impeccable formal anticipatory \"it\":",
      "options": [
        "It was thought advisable to postpone the referendum until next spring.",
        "There was thought advisable to postpone the referendum.",
        "It was thought advisable postponing the referendum.",
        "It had thought advisable to postpone the referendum."
      ],
      "answer": 0,
      "explanation": "Formal extraposition with anticipatory \"It\" and to-infinitive complement.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "pron_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with the formal relative pronoun: \"The archive contains historical documents, many of (which / that) ______ have never been transcribed.\"",
      "options": [
        "which",
        "that",
        "whom",
        "what"
      ],
      "answer": 0,
      "explanation": "Quantifier + \"of which\" (quantified relative clause) cannot use \"that\": \"many of which\".",
      "sourceTip": "C1 Relative Syntax"
    },
    {
      "id": "pron_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the flaw: \"He is one of those scholars who [A: believes] that the text [B: is] an 18th-century [C: forgery].\"",
      "options": [
        "A: believes - the antecedent of \"who\" is plural \"scholars\", so it requires \"believe\"!",
        "B: is",
        "C: forgery",
        "No error"
      ],
      "answer": 0,
      "explanation": "In \"one of those [plural noun] who...\", the relative pronoun \"who\" refers to the plural antecedent (\"scholars believe\").",
      "sourceTip": "Advanced Concord C1"
    },
    {
      "id": "pron_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"They awarded the fellowship to whomever demonstrated the greatest merit.\"",
      "options": [
        "Correct",
        "Incorrect - \"whoever\" must be used as subject of \"demonstrated\""
      ],
      "answer": 1,
      "explanation": "\"Whoever\" acts as the subject of the clause \"demonstrated the greatest merit\", despite following preposition \"to\".",
      "sourceTip": "C1 Traps"
    },
    {
      "id": "pron_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [whom / the / ambassador / to / was / presented / credential / the / smiled]",
      "options": [
        "The ambassador to whom the credential was presented smiled.",
        "To whom the ambassador the credential was presented smiled.",
        "The credential was presented to whom the ambassador smiled.",
        "Smiled the ambassador to whom the credential was presented."
      ],
      "answer": 0,
      "explanation": "Formal pied-piping relative clause: \"The ambassador to whom the credential was presented smiled.\"",
      "sourceTip": "C1 Syntax"
    },
    {
      "id": "pron_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The government introduced a policy, the implementation ______ proved exceptionally contentious.",
      "options": [
        "whereof",
        "of which",
        "whose",
        "to which"
      ],
      "answer": 1,
      "explanation": "\"...the implementation of which proved...\" is high-register genitive relative syntax.",
      "sourceTip": "Academic Register C1"
    },
    {
      "id": "pron_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which archaic relative pronoun means \"the thing which / that which\"?",
      "options": [
        "What",
        "Wherewith",
        "Whence",
        "Whither"
      ],
      "answer": 0,
      "explanation": "\"What\" functions as a fused relative pronoun incorporating its antecedent: \"What she said\" = \"The thing which she said\".",
      "sourceTip": "Linguistic Syntax C1"
    },
    {
      "id": "pron_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the structure: \"It is no use crying over spilled milk.\" What role does \"It\" play?",
      "options": [
        "Anticipatory \"it\" with gerund complement",
        "Personal anaphoric pronoun",
        "Deictic pronoun",
        "Reflexive substitute"
      ],
      "answer": 0,
      "explanation": "Anticipatory \"It\" licenses a gerundial complement in fixed idiomatic constructions.",
      "sourceTip": "C1 Syntax Analysis"
    },
    {
      "id": "pron_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The committee consists of ten experts, none of ______ holds a political affiliation.",
      "options": [
        "whom",
        "who",
        "which",
        "whose"
      ],
      "answer": 0,
      "explanation": "Following preposition \"of\" with human referents, formal syntax demands objective \"whom\".",
      "sourceTip": "C1 Formal Register"
    },
    {
      "id": "pron_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"One should always do what they believe to be right in their conscience.\"",
      "options": [
        "Acceptable in informal speech, but inconsistent with \"one's\" in formal prose",
        "Completely ungrammatical in all registers"
      ],
      "answer": 0,
      "explanation": "Traditional formal grammar insists on \"One should do what one believes...\".",
      "sourceTip": "Stylistic Concord C1"
    },
    {
      "id": "pron_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the sentence with strictly consistent formal impersonal pronoun concord:",
      "options": [
        "If one aspires to academic excellence, one must dedicate oneself tirelessly to one's research.",
        "If one aspires to academic excellence, they must dedicate themselves tirelessly to their research.",
        "If one aspires to academic excellence, you must dedicate yourself tirelessly to your research.",
        "If one aspires to academic excellence, he must dedicate himself tirelessly to his research."
      ],
      "answer": 0,
      "explanation": "Strict formal consistency requires \"one -> oneself -> one's\" throughout.",
      "sourceTip": "C2 Stylistics"
    },
    {
      "id": "pron_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Archaic Pronoun)",
      "skillTested": "Producing",
      "question": "Supply the archaic objective relative: \"Give homage unto (he / him) ______ the king delighteth to honor.\"",
      "options": [
        "him whom",
        "he who",
        "him who",
        "he whom"
      ],
      "answer": 0,
      "explanation": "Classical biblical/literary English: \"unto him whom the king...\".",
      "sourceTip": "Historical English C2"
    },
    {
      "id": "pron_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the subtle defect: \"The treaty, [A: the signatories] [B: whereof] [C: were] six sovereign nations, [D: was ratified].\"",
      "options": [
        "A: the signatories",
        "B: whereof - archaic but grammatical",
        "C: were",
        "D: was ratified - Sentence is fully correct in high legal register!"
      ],
      "answer": 3,
      "explanation": "\"Whereof\" is an archaic pronominal adverb meaning \"of which\". The sentence is impeccable in formal legal prose.",
      "sourceTip": "C2 Legal Registers"
    },
    {
      "id": "pron_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble this periodic sentence: [whoever / dispute / this / may / truth / the / evidence / speaks / for / itself]",
      "options": [
        "Whoever may dispute this truth, the evidence speaks for itself.",
        "The evidence speaks for itself whoever may dispute this truth.",
        "Dispute this truth whoever may the evidence speaks for itself.",
        "For itself speaks the evidence whoever may dispute this truth."
      ],
      "answer": 0,
      "explanation": "Concessive nominal relative clause fronted for rhetorical weight.",
      "sourceTip": "C2 Rhetoric"
    },
    {
      "id": "pron_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "He was bereft of any financial support, ______ circumstance drove him into deep melancholy.",
      "options": [
        "which",
        "that",
        "what",
        "whose"
      ],
      "answer": 0,
      "explanation": "Sentential relative determiner: \"which circumstance drove him...\" (= and this circumstance).",
      "sourceTip": "C2 Classical Syntax"
    },
    {
      "id": "pron_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which item is a PRONOMINAL ADVERB equivalent to \"about which\"?",
      "options": [
        "Whereabout",
        "Thereabout",
        "Hereabout",
        "Whereby"
      ],
      "answer": 0,
      "explanation": "\"Whereabout\" (or \"whereabouts\") historically functioned as a pronominal adverb meaning \"about which / concerning which\".",
      "sourceTip": "C2 Morphology"
    },
    {
      "id": "pron_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "They reached an amicable accord, by virtue ______ hostilities ceased immediately.",
      "options": [
        "whereof",
        "wherein",
        "whereby",
        "whereat"
      ],
      "answer": 0,
      "explanation": "\"By virtue whereof\" is the established classical legal connective meaning \"by virtue of which\".",
      "sourceTip": "Legal English C2"
    },
    {
      "id": "pron_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"It is me whom you must blame for the catastrophe.\"",
      "options": [
        "Grammatically flawed in strict formal syntax - should be \"It is I whom you must blame\"",
        "Impeccable in all formal academic contexts"
      ],
      "answer": 0,
      "explanation": "In strict classical prescriptive grammar, the predicate after the copula takes nominative case: \"It is I whom...\".",
      "sourceTip": "Prescriptive C2"
    },
    {
      "id": "pron_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"The diplomat [A: upon] [B: whose] advice the treaty [C: was signed] [D: have died].\"",
      "options": [
        "A: upon",
        "B: whose",
        "C: was signed",
        "D: have died - subject is singular \"The diplomat\"!"
      ],
      "answer": 3,
      "explanation": "The subject \"The diplomat\" requires singular agreement: \"has died\", not \"have died\".",
      "sourceTip": "Subject-Verb Concord C2"
    },
    {
      "id": "pron_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with the fused relative: \"(What / That which) ______ was once considered impossible has now become everyday reality.\"",
      "options": [
        "What",
        "Which",
        "That",
        "Whom"
      ],
      "answer": 0,
      "explanation": "Fused relative \"What\" seamlessly embeds antecedent and relative pronoun.",
      "sourceTip": "C2 Fused Relatives"
    }
  ],
  "verbs": [
    {
      "id": "vrb_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct third-person singular present form: \"Tom ______ to school every day.\"",
      "options": [
        "walk",
        "walks",
        "walking",
        "is walk"
      ],
      "answer": 1,
      "explanation": "He/She/It in the Present Simple takes -s: \"Tom walks\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "vrb_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Past Simple)",
      "skillTested": "Producing",
      "question": "Change the verb in brackets into Past Simple: \"Yesterday, she (go) ______ to the library.\"",
      "options": [
        "went",
        "goed",
        "gone",
        "going"
      ],
      "answer": 0,
      "explanation": "\"Go\" is an irregular verb whose past tense is \"went\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "vrb_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"They doesn't like cold winter weather.\"",
      "options": [
        "Correct",
        "Incorrect - \"They\" requires auxiliary \"don't\""
      ],
      "answer": 1,
      "explanation": "Subject pronoun \"They\" takes \"do not / don't\", not \"doesn't\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "vrb_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb is an IRREGULAR past tense verb?",
      "options": [
        "Played",
        "Watched",
        "Bought",
        "Cooked"
      ],
      "answer": 2,
      "explanation": "\"Bought\" is the irregular past of \"buy\" (played, watched, cooked are regular -ed).",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "vrb_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Look! The children ______ football in the school playground.",
      "options": [
        "play",
        "are playing",
        "plays",
        "played"
      ],
      "answer": 1,
      "explanation": "Action happening right now signaled by \"Look!\" takes Present Continuous: \"are playing\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "vrb_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she / English / speaks / very / well]",
      "options": [
        "She speaks English very well.",
        "She very well speaks English.",
        "Very well she English speaks.",
        "English speaks she very well."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (speaks) + Object (English) + Adverbial (very well).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "vrb_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: can] [B: plays] the piano [C: very] [D: skillfully].\"",
      "options": [
        "A: can",
        "B: plays",
        "C: very",
        "D: skillfully"
      ],
      "answer": 1,
      "explanation": "Modal auxiliaries like \"can\" are followed by the bare infinitive: \"can play\" (not plays).",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "vrb_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the base verb \"eat\" with its past participle form:",
      "options": [
        "ate",
        "eaten",
        "eating",
        "eats"
      ],
      "answer": 1,
      "explanation": "Base \"eat\" -> Past \"ate\" -> Past Participle \"eaten\".",
      "sourceTip": "Elementary Verb Forms"
    },
    {
      "id": "vrb_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I am having two brothers and one sister.\"",
      "options": [
        "Correct",
        "Incorrect - \"have\" meaning possess is a stative verb in present simple"
      ],
      "answer": 1,
      "explanation": "\"Have\" denoting possession is stative and cannot take progressive aspect: \"I have two brothers\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "vrb_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Auxiliary)",
      "skillTested": "Producing",
      "question": "Complete the question: \"(Do / Does) ______ your parents live in Siem Reap?\"",
      "options": [
        "Do",
        "Does",
        "Are",
        "Is"
      ],
      "answer": 0,
      "explanation": "\"Parents\" is plural, so use the auxiliary \"Do\": \"Do your parents live...\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "vrb_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "My grandfather ______ up at 5:30 AM every morning.",
      "options": [
        "wakes",
        "wake",
        "is waking",
        "woken"
      ],
      "answer": 0,
      "explanation": "Daily routine requires Present Simple third-person singular: \"wakes\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "vrb_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb is a MODAL auxiliary verb?",
      "options": [
        "Can",
        "Jump",
        "Sing",
        "Read"
      ],
      "answer": 0,
      "explanation": "\"Can\" is a modal auxiliary verb expressing ability.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "vrb_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "They ______ to the cinema last night because they were too tired.",
      "options": [
        "didn't go",
        "didn't went",
        "don't go",
        "weren't go"
      ],
      "answer": 0,
      "explanation": "Negative Past Simple uses \"didn't + bare infinitive\": \"didn't go\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "vrb_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [listening / to / music / is / he / his / bedroom / in]",
      "options": [
        "He is listening to music in his bedroom.",
        "He is in his bedroom listening to music.",
        "In his bedroom is he listening to music.",
        "Listening to music is he in his bedroom."
      ],
      "answer": 0,
      "explanation": "Subject (He) + Present Continuous (is listening) + Prepositional phrase (to music) + Place (in his bedroom).",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "vrb_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"Did you [A: saw] [B: the new] movie [C: at the] [D: cinema]?\"",
      "options": [
        "A: saw",
        "B: the new",
        "C: at the",
        "D: cinema"
      ],
      "answer": 0,
      "explanation": "Auxiliary \"Did\" takes the bare infinitive: \"Did you SEE...\", not \"saw\".",
      "sourceTip": "Elementary Traps"
    },
    {
      "id": "vrb_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the modal verb of polite permission: \"______ I borrow your pen for a moment?\"",
      "options": [
        "May",
        "Must",
        "Should",
        "Will"
      ],
      "answer": 0,
      "explanation": "\"May I...?\" is standard formal polite permission in English.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "vrb_a2_2",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Infinitive/Gerund)",
      "skillTested": "Producing",
      "question": "Use the correct verb pattern: \"She decided (study) ______ abroad next semester.\"",
      "options": [
        "to study",
        "studying",
        "study",
        "studied"
      ],
      "answer": 0,
      "explanation": "The verb \"decide\" takes a to-infinitive: \"decided to study\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "vrb_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"I look forward to meet you next week.\"",
      "options": [
        "Correct",
        "Incorrect - \"look forward to\" takes a gerund (-ing)"
      ],
      "answer": 1,
      "explanation": "\"Look forward to\" has a prepositional \"to\", requiring a gerund: \"look forward to meeting you\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "vrb_a2_4",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: suggested] [B: to go] to the [C: beach] for the [D: weekend].\"",
      "options": [
        "A: suggested",
        "B: to go",
        "C: beach",
        "D: weekend"
      ],
      "answer": 1,
      "explanation": "\"Suggest\" is followed by a gerund or that-clause, never a to-infinitive: \"suggested going\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "vrb_a2_5",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "You ______ smoke inside the hospital; it is strictly prohibited by law.",
      "options": [
        "must not",
        "don't have to",
        "might not",
        "needn't"
      ],
      "answer": 0,
      "explanation": "\"Must not\" expresses strict prohibition by law or regulation.",
      "sourceTip": "Modals A2"
    },
    {
      "id": "vrb_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb takes a GERUND (-ing) after it?",
      "options": [
        "Enjoy",
        "Want",
        "Decide",
        "Hope"
      ],
      "answer": 0,
      "explanation": "\"Enjoy\" is followed by a gerund (\"enjoy reading\"), whereas want, decide, and hope take to-infinitives.",
      "sourceTip": "Verb Patterns A2"
    },
    {
      "id": "vrb_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she / how / knows / to / a / drive / car]",
      "options": [
        "She knows how to drive a car.",
        "She knows to drive how a car.",
        "How to drive a car knows she.",
        "A car knows she how to drive."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (knows) + Interrogative infinitive (how to drive a car).",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "vrb_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "When I was young, I ______ swim across the river easily.",
      "options": [
        "could",
        "can",
        "might",
        "must"
      ],
      "answer": 0,
      "explanation": "Past general ability is expressed by \"could\".",
      "sourceTip": "Modals A2"
    },
    {
      "id": "vrb_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the verb with its pattern: \"refuse\" ->",
      "options": [
        "+ to-infinitive",
        "+ gerund (-ing)",
        "+ bare infinitive",
        "+ past participle"
      ],
      "answer": 0,
      "explanation": "\"Refuse\" takes a to-infinitive: \"refused to answer\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "vrb_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"You don't have to come if you are busy tomorrow.\"",
      "options": [
        "Correct - expresses absence of obligation",
        "Incorrect - should be \"must not\""
      ],
      "answer": 0,
      "explanation": "\"Don't have to\" correctly conveys that an action is optional (absence of obligation).",
      "sourceTip": "test-english A2"
    },
    {
      "id": "vrb_a2_11",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Phrasal Verb)",
      "skillTested": "Producing",
      "question": "Complete the phrasal verb meaning extinguish: \"Please (put) ______ out your cigarette.\"",
      "options": [
        "put",
        "take",
        "give",
        "turn"
      ],
      "answer": 0,
      "explanation": "\"Put out\" means extinguish a fire or cigarette.",
      "sourceTip": "Phrasal Verbs A2"
    },
    {
      "id": "vrb_a2_12",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: enjoys] [B: to read] [C: mystery] [D: novels].\"",
      "options": [
        "A: enjoys",
        "B: to read",
        "C: mystery",
        "D: novels"
      ],
      "answer": 1,
      "explanation": "\"Enjoy\" requires a gerund: \"enjoys READING\", not \"to read\".",
      "sourceTip": "Verb Patterns A2"
    },
    {
      "id": "vrb_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb is STATIVE (does not normally take continuous aspect)?",
      "options": [
        "Believe",
        "Run",
        "Sing",
        "Eat"
      ],
      "answer": 0,
      "explanation": "\"Believe\" is a stative verb of mental state (e.g., \"I believe you\", never *\"I am believing you\").",
      "sourceTip": "Stative Verbs A2"
    },
    {
      "id": "vrb_a2_14",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "If you have a fever, you ______ see a doctor.",
      "options": [
        "should",
        "could",
        "may",
        "would"
      ],
      "answer": 0,
      "explanation": "\"Should\" gives advice and recommendation.",
      "sourceTip": "VOA English A2"
    },
    {
      "id": "vrb_a2_15",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [promised / she / help / to / with / homework / my / me]",
      "options": [
        "She promised to help me with my homework.",
        "She promised to me help with my homework.",
        "With my homework she promised to help me.",
        "To help me with my homework she promised."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (promised) + To-Infinitive (to help me) + Prepositional phrase (with my homework).",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "vrb_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Distinguish transitive vs intransitive: \"The company plans to ______ prices next quarter.\"",
      "options": [
        "raise",
        "rise",
        "arise",
        "raising"
      ],
      "answer": 0,
      "explanation": "\"Raise\" is transitive and requires a direct object (\"prices\"). \"Rise\" is intransitive.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "vrb_b1_2",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Meaning Shift)",
      "skillTested": "Producing",
      "question": "Notice the meaning: \"He stopped (smoke) ______ three years ago because of health concerns.\"",
      "options": [
        "smoking",
        "to smoke",
        "smoke",
        "smoked"
      ],
      "answer": 0,
      "explanation": "\"Stop + gerund\" means to quit a habit or action permanently.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "vrb_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"On the way to work, I stopped to buy a newspaper.\"",
      "options": [
        "Correct - \"stop + to-infinitive\" indicates pausing in order to do something",
        "Incorrect - \"stop\" must always take -ing"
      ],
      "answer": 0,
      "explanation": "\"Stop + to-infinitive\" expresses pausing one action in order to perform another.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "vrb_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The sun [A: raises] [B: in the east] [C: and sets] [D: in the west].\"",
      "options": [
        "A: raises",
        "B: in the east",
        "C: and sets",
        "D: in the west"
      ],
      "answer": 0,
      "explanation": "The sun rises (intransitive verb \"rise\"), not \"raises\".",
      "sourceTip": "B1 Confusing Pairs"
    },
    {
      "id": "vrb_b1_5",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The teacher made the students ______ their essays before leaving the room.",
      "options": [
        "rewrite",
        "to rewrite",
        "rewriting",
        "rewrote"
      ],
      "answer": 0,
      "explanation": "Causative \"make\" takes bare infinitive: \"made the students rewrite\".",
      "sourceTip": "Causatives B1"
    },
    {
      "id": "vrb_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb takes an object followed by a BARE infinitive (without to)?",
      "options": [
        "Let",
        "Allow",
        "Permit",
        "Force"
      ],
      "answer": 0,
      "explanation": "\"Let\" takes a bare infinitive (\"let him go\"). Allow, permit, and force take a to-infinitive (\"allow him to go\").",
      "sourceTip": "Causative Patterns B1"
    },
    {
      "id": "vrb_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [advised / he / smoking / me / to / quit]",
      "options": [
        "He advised me to quit smoking.",
        "He advised to quit smoking me.",
        "Me he advised to quit smoking.",
        "To quit smoking he advised me."
      ],
      "answer": 0,
      "explanation": "Subject (He) + Verb (advised) + Object (me) + Infinitive (to quit smoking).",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "vrb_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I remember ______ the front door before leaving, but now it is unlocked!",
      "options": [
        "locking",
        "to lock",
        "lock",
        "locked"
      ],
      "answer": 0,
      "explanation": "\"Remember + gerund\" recalls a past action completed earlier.",
      "sourceTip": "B1 Verb Complementation"
    },
    {
      "id": "vrb_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the modal with its meaning: \"You must have left your wallet at home.\"",
      "options": [
        "Strong logical deduction in the past",
        "Past obligation",
        "Polite request",
        "Future certainty"
      ],
      "answer": 0,
      "explanation": "\"Must have + past participle\" expresses high confidence/logical deduction in the past.",
      "sourceTip": "Modals of Deduction B1"
    },
    {
      "id": "vrb_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"She avoided to answer the journalist's difficult question.\"",
      "options": [
        "Correct",
        "Incorrect - \"avoid\" requires a gerund (-ing)"
      ],
      "answer": 1,
      "explanation": "\"Avoid\" takes a gerund: \"avoided answering\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "vrb_b1_11",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Past Habit)",
      "skillTested": "Producing",
      "question": "Complete the discontinued habit: \"My father (use / play) ______ the guitar when he was in college.\"",
      "options": [
        "used to play",
        "was used to play",
        "is used to playing",
        "use to play"
      ],
      "answer": 0,
      "explanation": "\"Used to + bare infinitive\" describes past habits that no longer happen.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "vrb_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: had better] [B: to leave] now [C: or he] [D: will miss] his flight.\"",
      "options": [
        "A: had better",
        "B: to leave",
        "C: or he",
        "D: will miss"
      ],
      "answer": 1,
      "explanation": "\"Had better\" is followed by a bare infinitive without \"to\": \"had better leave\".",
      "sourceTip": "Modal Idioms B1"
    },
    {
      "id": "vrb_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb pairs with BOTH a gerund and infinitive with VIRTUALLY NO change in meaning?",
      "options": [
        "Begin",
        "Remember",
        "Stop",
        "Forget"
      ],
      "answer": 0,
      "explanation": "\"Begin\" can take either to-infinitive or gerund without meaningful distinction (\"began to rain\" / \"began raining\").",
      "sourceTip": "Verb Complementation B1"
    },
    {
      "id": "vrb_b1_14",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The noise from the construction site kept me ______ all night.",
      "options": [
        "awake",
        "awaking",
        "to awake",
        "awoken"
      ],
      "answer": 0,
      "explanation": "\"Keep someone awake\" is the standard collocated resultative structure.",
      "sourceTip": "Resultatives B1"
    },
    {
      "id": "vrb_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [cannot / laughing / I / help / whenever / joke / tells / he / that]",
      "options": [
        "I cannot help laughing whenever he tells that joke.",
        "Whenever he tells that joke I cannot help laughing.",
        "He tells that joke whenever I cannot help laughing.",
        "Laughing I cannot help whenever he tells that joke."
      ],
      "answer": 0,
      "explanation": "Idiom \"cannot help + V-ing\" (unable to prevent oneself from doing something).",
      "sourceTip": "Idioms B1"
    },
    {
      "id": "vrb_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the causative structure with \"get\": \"The manager got the contractor ______ the blueprints by Friday.\"",
      "options": [
        "to revise",
        "revise",
        "revising",
        "revised"
      ],
      "answer": 0,
      "explanation": "Causative \"get + person\" requires a to-infinitive: \"got the contractor to revise\". (Contrast with \"have someone revise\").",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "vrb_b2_2",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Modal Deduction)",
      "skillTested": "Producing",
      "question": "Express negative past deduction: \"He (cannot / commit) ______ the crime because he was overseas at the time.\"",
      "options": [
        "cannot have committed",
        "could not commit",
        "must not have committed",
        "should not commit"
      ],
      "answer": 0,
      "explanation": "\"Cannot have + past participle\" conveys logical impossibility in the past.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "vrb_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The committee demanded that the president resigns immediately.\"",
      "options": [
        "Correct in informal British English, but in formal English the subjunctive \"resign\" is required",
        "Ungrammatical in all contexts"
      ],
      "answer": 0,
      "explanation": "Formal mandative subjunctive requires the base form: \"demanded that the president RESIGN\".",
      "sourceTip": "Subjunctive B2"
    },
    {
      "id": "vrb_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: regrets] [B: informing] you that your application [C: has been] [D: unsuccessful].\"",
      "options": [
        "A: regrets",
        "B: informing",
        "C: has been",
        "D: unsuccessful"
      ],
      "answer": 1,
      "explanation": "When formally delivering bad news, use \"regret + to-infinitive\": \"regret TO INFORM you\". \"Regret informing\" means feeling sorry about having done it in the past.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "vrb_b2_5",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The witness claims ______ a dark sedan speeding away from the scene of the robbery.",
      "options": [
        "to have seen",
        "having seen",
        "to see",
        "saw"
      ],
      "answer": 0,
      "explanation": "\"Claim + perfect infinitive\" (to have seen) expresses an earlier completed action.",
      "sourceTip": "Advanced Infinitives B2"
    },
    {
      "id": "vrb_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb CANNOT be used in the passive voice because it is strictly INTRANSITIVE?",
      "options": [
        "Arrive",
        "Design",
        "Destroy",
        "Produce"
      ],
      "answer": 0,
      "explanation": "\"Arrive\" has no direct object and cannot be passivized (*\"The station was arrived by him\").",
      "sourceTip": "Transitivity B2"
    },
    {
      "id": "vrb_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she / have / the / her / repaired / car / at / had / garage]",
      "options": [
        "She had her car repaired at the garage.",
        "She had repaired her car at the garage.",
        "Her car she had repaired at the garage.",
        "At the garage had she her car repaired."
      ],
      "answer": 0,
      "explanation": "Causative passive: Subject (She) + had + Object (her car) + Past Participle (repaired) + Place (at the garage).",
      "sourceTip": "Causative B2"
    },
    {
      "id": "vrb_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The board insisted that all financial statements ______ audited by an independent firm.",
      "options": [
        "be",
        "are",
        "were",
        "must be"
      ],
      "answer": 0,
      "explanation": "Mandative subjunctive with \"insist\" takes the base form: \"be audited\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "vrb_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the structure: \"I would rather you didn't smoke here.\" What does \"didn't smoke\" express?",
      "options": [
        "Hypothetical present preference",
        "Past completed action",
        "Future obligation",
        "Polite permission"
      ],
      "answer": 0,
      "explanation": "\"Would rather + subject + past tense\" expresses a polite present preference for another person's behavior.",
      "sourceTip": "B2 Hypothetical Structures"
    },
    {
      "id": "vrb_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He was seen leave the building through the back exit.\"",
      "options": [
        "Correct",
        "Incorrect - in passive voice, verbs of perception require to-infinitive (\"seen TO LEAVE\")"
      ],
      "answer": 1,
      "explanation": "In the passive, verbs of perception take a to-infinitive: \"He was seen TO LEAVE\".",
      "sourceTip": "Perception Verbs B2"
    },
    {
      "id": "vrb_b2_11",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the past intention: \"We (hope) ______ to visit the temple yesterday, but the road was flooded.\"",
      "options": [
        "had hoped",
        "have hoped",
        "were hoping",
        "would hope"
      ],
      "answer": 0,
      "explanation": "Past Perfect \"had hoped\" signifies an unfulfilled past intention.",
      "sourceTip": "Unfulfilled Past B2"
    },
    {
      "id": "vrb_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"They [A: would live] in a small village [B: before] they [C: moved] to the [D: capital].\"",
      "options": [
        "A: would live",
        "B: before",
        "C: moved",
        "D: capital"
      ],
      "answer": 0,
      "explanation": "\"Would\" cannot express past states (only repeated dynamic actions); use \"used to live\".",
      "sourceTip": "Past Habits B2"
    },
    {
      "id": "vrb_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb takes an OBJECT COMPLEMENT (SVOC)?",
      "options": [
        "Elect (They elected him president)",
        "Sleep (He slept)",
        "Give (She gave him a gift)",
        "Run (They ran)"
      ],
      "answer": 0,
      "explanation": "\"Elect\" takes a direct object + object complement (\"elected him president\").",
      "sourceTip": "Sentence Patterns B2"
    },
    {
      "id": "vrb_b2_14",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The minister was ______ to have resigned after the financial scandal broke.",
      "options": [
        "reported",
        "reporting",
        "report",
        "reportable"
      ],
      "answer": 0,
      "explanation": "Personal reporting passive: \"Subject + be reported + to-infinitive\".",
      "sourceTip": "Reporting Passives B2"
    },
    {
      "id": "vrb_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [you / had / better / an / umbrella / take / case / in / it / rains]",
      "options": [
        "You had better take an umbrella in case it rains.",
        "In case it rains you had better take an umbrella.",
        "Had you better take an umbrella in case it rains.",
        "Take an umbrella you had better in case it rains."
      ],
      "answer": 0,
      "explanation": "Subject (You) + Modal idiom (had better take) + Object (an umbrella) + Condition (in case it rains).",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "vrb_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the catenative verb structure with correct complementation:",
      "options": [
        "He claims to have avoided paying the luxury tax.",
        "He claims having avoided to pay the luxury tax.",
        "He claims to avoid pay the luxury tax.",
        "He claims to have avoided to pay the luxury tax."
      ],
      "answer": 0,
      "explanation": "\"Claim\" licenses to-infinitive, which in turn licenses gerund \"paying\" after \"avoid\".",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "vrb_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Subjunctive)",
      "skillTested": "Producing",
      "question": "Formal resolution: \"Be it resolved that the charter (amend) ______ without delay.\"",
      "options": [
        "be amended",
        "is amended",
        "should be amended",
        "was amended"
      ],
      "answer": 0,
      "explanation": "Formal third-person imperative / mandative subjunctive: \"be amended\".",
      "sourceTip": "Subjunctive C1"
    },
    {
      "id": "vrb_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The legislation proposes that every citizen [A: pays] taxes [B: in accordance] [C: with] [D: their] income.\"",
      "options": [
        "A: pays - in high formal legislative style, subjunctive \"pay\" is expected!",
        "B: in accordance",
        "C: with",
        "D: their"
      ],
      "answer": 0,
      "explanation": "Formal legislative mandates require the subjunctive base form: \"proposes that every citizen PAY...\".",
      "sourceTip": "Legislative Register C1"
    },
    {
      "id": "vrb_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Were the proposal to be accepted, substantial funding would be allocated.\"",
      "options": [
        "Correct - inverted second conditional expressing formal hypothesis",
        "Incorrect - should be \"Was the proposal\""
      ],
      "answer": 0,
      "explanation": "Inverted conditional replaces \"If the proposal were to be accepted\" with \"Were the proposal to be accepted\".",
      "sourceTip": "Inversion C1"
    },
    {
      "id": "vrb_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [had / no / he / sooner / arrived / than / meeting / the / commenced]",
      "options": [
        "No sooner had he arrived than the meeting commenced.",
        "Had he arrived no sooner than the meeting commenced.",
        "The meeting commenced no sooner than he had arrived.",
        "No sooner the meeting commenced than had he arrived."
      ],
      "answer": 0,
      "explanation": "Negative fronted inversion: \"No sooner had he arrived than...\".",
      "sourceTip": "Negative Inversion C1"
    },
    {
      "id": "vrb_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The ambassador was ______ to have negotiated the clandestine ceasefire agreement.",
      "options": [
        "purported",
        "purporting",
        "purport",
        "purportedly"
      ],
      "answer": 0,
      "explanation": "\"Be purported to + infinitive\" is an advanced evidential reporting passive.",
      "sourceTip": "Advanced Academic C1"
    },
    {
      "id": "vrb_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb resists passivization due to symmetrical/middle semantic properties?",
      "options": [
        "Resemble",
        "Praise",
        "Evaluate",
        "Critique"
      ],
      "answer": 0,
      "explanation": "\"Resemble\" is a middle stative verb that cannot form a passive (*\"His father is resembled by him\").",
      "sourceTip": "Middle Verbs C1"
    },
    {
      "id": "vrb_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the aspectual nuance: \"I was wondering if you could assist me.\" What does past continuous convey here?",
      "options": [
        "Pragmatic politeness / Tentativeness",
        "Interrupted past action",
        "Past habit",
        "Unfulfilled intention"
      ],
      "answer": 0,
      "explanation": "Past continuous with mental verbs (\"was wondering / was hoping\") creates polite social distance.",
      "sourceTip": "Pragmatic Grammar C1"
    },
    {
      "id": "vrb_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He resented ______ about his previous financial insolvency during the cross-examination.",
      "options": [
        "being questioned",
        "to be questioned",
        "questioning",
        "having questioned"
      ],
      "answer": 0,
      "explanation": "\"Resent + passive gerund (-ing)\": \"resented being questioned\".",
      "sourceTip": "Gerund Complementation C1"
    },
    {
      "id": "vrb_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Had I known about the protocol breach, I would have intervened immediately.\"",
      "options": [
        "Correct - inverted third conditional",
        "Incorrect - conditional requires \"if\""
      ],
      "answer": 0,
      "explanation": "Inversion of auxiliary \"Had\" is standard literary and formal third conditional syntax.",
      "sourceTip": "Inverted Conditionals C1"
    },
    {
      "id": "vrb_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the archaic optative subjunctive wishing formula:",
      "options": [
        "Long live the King!",
        "May the King lives long!",
        "The King will live long!",
        "Living long is the King!"
      ],
      "answer": 0,
      "explanation": "\"Long live the King!\" is an archaic formulaic optative subjunctive expressing a formal wish.",
      "sourceTip": "Formulaic Subjunctive C2"
    },
    {
      "id": "vrb_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Subjunctive Clause)",
      "skillTested": "Producing",
      "question": "Formal legal mandate: \"The magistrate ordered that the prisoner (remand) ______ in custody.\"",
      "options": [
        "be remanded",
        "is remanded",
        "should be remanded",
        "was remanded"
      ],
      "answer": 0,
      "explanation": "Formal mandative subjunctive: \"be remanded\".",
      "sourceTip": "Legal English C2"
    },
    {
      "id": "vrb_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Come [A: what] [B: may], we [C: shall] remain steadfast in our [D: resolve].\"",
      "options": [
        "A: what",
        "B: may",
        "C: shall",
        "D: resolve - No error! Sentence is an impeccable formulaic subjunctive!"
      ],
      "answer": 3,
      "explanation": "\"Come what may\" is a completely correct classical idiom with inverted subjunctive syntax.",
      "sourceTip": "C2 Formulaic Idioms"
    },
    {
      "id": "vrb_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [suffice / it / to / say / that / negotiations / have / collapsed]",
      "options": [
        "Suffice it to say that negotiations have collapsed.",
        "To say it suffice that negotiations have collapsed.",
        "That negotiations have collapsed suffice it to say.",
        "Suffice to say it that negotiations have collapsed."
      ],
      "answer": 0,
      "explanation": "Formulaic third-person subjunctive: \"Suffice it to say that...\".",
      "sourceTip": "C2 Rhetoric"
    },
    {
      "id": "vrb_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "He spoke softly, ______ he arouse the suspicions of the border guards.",
      "options": [
        "lest",
        "unless",
        "inasmuch as",
        "provided that"
      ],
      "answer": 0,
      "explanation": "\"Lest\" means \"for fear that\" and takes a bare subjunctive verb: \"lest he arouse\".",
      "sourceTip": "Archaic Subjunctive C2"
    },
    {
      "id": "vrb_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb exhibits DATIVE SHIFT with preposition \"for\" rather than \"to\"?",
      "options": [
        "Buy (buy someone something / buy something for someone)",
        "Give",
        "Lend",
        "Send"
      ],
      "answer": 0,
      "explanation": "\"Buy\" shifts with benefactive \"for\" (\"buy for him\"). Give, lend, and send shift with recipient \"to\".",
      "sourceTip": "Dative Alternation C2"
    },
    {
      "id": "vrb_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The committee recommended that the treaty ______ ratified without reservation.",
      "options": [
        "be",
        "is",
        "was",
        "should be"
      ],
      "answer": 0,
      "explanation": "Mandative subjunctive with \"recommend\" takes base form \"be\".",
      "sourceTip": "C2 Mandative"
    },
    {
      "id": "vrb_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The diplomat was to have met the foreign minister yesterday, but sudden illness prevented the summit.\"",
      "options": [
        "Correct - \"was to have + past participle\" conveys an unfulfilled scheduled past destiny",
        "Incorrect - double past auxiliary is ungrammatical"
      ],
      "answer": 0,
      "explanation": "\"Was to have + past participle\" is high-register syntax for an official past plan that failed to materialize.",
      "sourceTip": "Historical Destiny C2"
    },
    {
      "id": "vrb_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"Try [A: as] he [B: might], he [C: could not] [D: unfasten the lock].\"",
      "options": [
        "A: as",
        "B: might",
        "C: could not",
        "D: unfasten the lock - Flawless concessive inversion!"
      ],
      "answer": 3,
      "explanation": "\"Try as he might\" is an established inverted concessive formula meaning \"although he tried hard\".",
      "sourceTip": "C2 Inversion"
    },
    {
      "id": "vrb_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the inverted hypothetical: \"(Were / Had) ______ it not for your generous assistance, we would have foundered.\"",
      "options": [
        "Were",
        "Had",
        "Was",
        "If"
      ],
      "answer": 0,
      "explanation": "\"Were it not for...\" is standard inverted counterfactual syntax for present/general conditions.",
      "sourceTip": "C2 Counterfactuals"
    }
  ],
  "adverbs": [
    {
      "id": "adv_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which word is an adverb of manner: \"She sings ______.\"",
      "options": [
        "beautiful",
        "beautifully",
        "beauty",
        "beautify"
      ],
      "answer": 1,
      "explanation": "\"Beautifully\" is an adverb describing how she sings (verb + -ly).",
      "sourceTip": "British Council A1"
    },
    {
      "id": "adv_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Adverb Formation)",
      "skillTested": "Producing",
      "question": "Change the adjective into an adverb: \"He drives very (careful) ______.\"",
      "options": [
        "carefully",
        "careful",
        "carefulness",
        "carefuly"
      ],
      "answer": 0,
      "explanation": "Regular adverbs of manner add -ly to the adjective: \"carefully\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "adv_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"They always are happy to see us.\"",
      "options": [
        "Correct",
        "Incorrect - frequency adverbs follow the verb \"to be\" (\"They are always happy\")"
      ],
      "answer": 1,
      "explanation": "Adverbs of frequency follow the verb \"be\": \"They ARE ALWAYS happy\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "adv_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is an ADVERB OF TIME?",
      "options": [
        "Yesterday",
        "Quickly",
        "Quietly",
        "Slowly"
      ],
      "answer": 0,
      "explanation": "\"Yesterday\" tells when an action happened (time). Quickly, quietly, slowly tell how (manner).",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "adv_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Please speak ______; the baby is sleeping.",
      "options": [
        "quietly",
        "quiet",
        "quietness",
        "more quiet"
      ],
      "answer": 0,
      "explanation": "The verb \"speak\" is modified by the adverb of manner \"quietly\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "adv_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [never / he / late / is / school / for]",
      "options": [
        "He is never late for school.",
        "He never is late for school.",
        "Late for school is he never.",
        "Never he is late for school."
      ],
      "answer": 0,
      "explanation": "Subject (He) + Verb be (is) + Frequency adverb (never) + Complement (late for school).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "adv_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: speaks] [B: French] [C: very] [D: fluent].\"",
      "options": [
        "A: speaks",
        "B: French",
        "C: very",
        "D: fluent"
      ],
      "answer": 3,
      "explanation": "\"Speaks\" requires an adverb: \"fluently\", not adjective \"fluent\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "adv_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the adjective \"fast\" with its adverb form:",
      "options": [
        "fastly",
        "fast",
        "fasterly",
        "fasting"
      ],
      "answer": 1,
      "explanation": "\"Fast\" is a flat adverb; its adverb form is identical to the adjective: \"He runs fast\".",
      "sourceTip": "Elementary Adverbs"
    },
    {
      "id": "adv_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"He worked very hardly on the farm yesterday.\"",
      "options": [
        "Correct",
        "Incorrect - \"hard\" is the adverb meaning with effort; \"hardly\" means almost not"
      ],
      "answer": 1,
      "explanation": "\"Hard\" means with great energy; \"hardly\" means barely/almost not at all.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "adv_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Turn the adjective in brackets into an adverb: \"The children played (happy) ______ in the park.\"",
      "options": [
        "happily",
        "happyly",
        "happifully",
        "happiness"
      ],
      "answer": 0,
      "explanation": "Adjectives ending in consonant + y change \"y\" to \"i\" before adding -ly: \"happily\".",
      "sourceTip": "Spelling Rules A1"
    },
    {
      "id": "adv_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I ______ drink tea in the morning; it is my daily routine.",
      "options": [
        "usually",
        "never",
        "rarely",
        "seldom"
      ],
      "answer": 0,
      "explanation": "\"Usually\" indicates habitual action matching \"daily routine\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "adv_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word ending in -ly is an ADJECTIVE (not an adverb)?",
      "options": [
        "Friendly",
        "Slowly",
        "Quickly",
        "Easily"
      ],
      "answer": 0,
      "explanation": "\"Friendly\" describes a noun (e.g., \"a friendly teacher\") and is an adjective, not an adverb.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "adv_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The train arrived ______ at the platform.",
      "options": [
        "safely",
        "safe",
        "safeness",
        "safer"
      ],
      "answer": 0,
      "explanation": "\"Arrived\" is modified by the adverb \"safely\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "adv_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [outside / raining / heavily / it / is]",
      "options": [
        "It is raining heavily outside.",
        "It heavily is raining outside.",
        "Raining heavily outside is it.",
        "Outside it raining is heavily."
      ],
      "answer": 0,
      "explanation": "Subject (It) + Verb (is raining) + Manner (heavily) + Place (outside).",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "adv_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: did] [B: very] [C: good] on his [D: English exam].\"",
      "options": [
        "A: did",
        "B: very",
        "C: good",
        "D: English exam"
      ],
      "answer": 2,
      "explanation": "Modify the verb \"did\" with adverb \"well\", not adjective \"good\".",
      "sourceTip": "Good vs Well A1"
    },
    {
      "id": "adv_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct position for \"enough\": \"He is not ______ to join the police force.\"",
      "options": [
        "old enough",
        "enough old",
        "too old",
        "enough older"
      ],
      "answer": 0,
      "explanation": "\"Enough\" follows adjectives and adverbs: \"old enough\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "adv_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The coffee was ______ hot to drink immediately; I had to wait ten minutes.",
      "options": [
        "too",
        "very",
        "enough",
        "much"
      ],
      "answer": 0,
      "explanation": "\"Too + adjective + to-infinitive\" expresses an excessive degree preventing an action.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "adv_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"She arrived lately to the conference because of heavy rain.\"",
      "options": [
        "Correct",
        "Incorrect - \"late\" means after scheduled time; \"lately\" means recently"
      ],
      "answer": 1,
      "explanation": "\"Late\" means unpunctual. \"Lately\" means recently.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "adv_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Comparative Adverb)",
      "skillTested": "Producing",
      "question": "Supply the comparative adverb: \"Can you please speak (slow) ______ so I can understand?\"",
      "options": [
        "more slowly",
        "slowlier",
        "slowly",
        "most slowly"
      ],
      "answer": 0,
      "explanation": "Adverbs ending in -ly form their comparative with \"more\": \"more slowly\".",
      "sourceTip": "Comparative Adverbs A2"
    },
    {
      "id": "adv_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"She [A: plays] the violin [B: more better] [C: than] her [D: brother].\"",
      "options": [
        "A: plays",
        "B: more better",
        "C: than",
        "D: brother"
      ],
      "answer": 1,
      "explanation": "Double comparative is wrong: \"better\", not \"more better\".",
      "sourceTip": "Double Comparatives A2"
    },
    {
      "id": "adv_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adverb is an ADVERB OF DEGREE?",
      "options": [
        "Extremely",
        "Yesterday",
        "Outside",
        "Daily"
      ],
      "answer": 0,
      "explanation": "\"Extremely\" indicates intensity/degree. Yesterday is time, outside is place, daily is frequency.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "adv_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [quite / the / test / difficult / was]",
      "options": [
        "The test was quite difficult.",
        "The test quite was difficult.",
        "Quite difficult was the test.",
        "Was the test quite difficult."
      ],
      "answer": 0,
      "explanation": "Subject (The test) + Verb (was) + Adverb of degree (quite) + Adjective (difficult).",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "adv_a2_8",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the degree adverb with its meaning: \"almost\" ->",
      "options": [
        "Nearly, but not completely",
        "Exceedingly high",
        "In an unhurried way",
        "At no time"
      ],
      "answer": 0,
      "explanation": "\"Almost\" indicates approximation / nearly completed.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "adv_a2_9",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I haven't seen my former classmate ______; I wonder where he lives now.",
      "options": [
        "lately",
        "late",
        "later",
        "latest"
      ],
      "answer": 0,
      "explanation": "\"Lately\" means recently in the period leading up to the present.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "adv_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Fortunately, everyone escaped the burning building unhurt.\"",
      "options": [
        "Correct - \"Fortunately\" is a sentence adverb commenting on the whole event",
        "Incorrect - sentence adverbs cannot stand at the beginning"
      ],
      "answer": 0,
      "explanation": "Sentence adverbs like \"fortunately\" correctly stand at the beginning of a clause.",
      "sourceTip": "Sentence Adverbs A2"
    },
    {
      "id": "adv_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The athlete ran ______ fast that nobody could overtake him.",
      "options": [
        "so",
        "such",
        "too",
        "very"
      ],
      "answer": 0,
      "explanation": "\"So + adverb + that-clause\": \"ran so fast that...\".",
      "sourceTip": "Degree Patterns A2"
    },
    {
      "id": "adv_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the adverb from \"early\": \"He arrived (early) ______ than anyone else.\"",
      "options": [
        "earlier",
        "more early",
        "more earlier",
        "earliest"
      ],
      "answer": 0,
      "explanation": "\"Early\" forms comparative \"earlier\".",
      "sourceTip": "Irregular Comparatives A2"
    },
    {
      "id": "adv_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word functions as BOTH an adjective and an adverb without -ly?",
      "options": [
        "Hard",
        "Careful",
        "Slowly",
        "Quick"
      ],
      "answer": 0,
      "explanation": "\"Hard\" is both an adjective (\"hard test\") and adverb (\"work hard\").",
      "sourceTip": "Flat Adverbs A2"
    },
    {
      "id": "adv_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [fluently / speaks / three / she / languages]",
      "options": [
        "She speaks three languages fluently.",
        "She speaks fluently three languages.",
        "Fluently she speaks three languages.",
        "Three languages she speaks fluently."
      ],
      "answer": 0,
      "explanation": "Standard position for adverb of manner is after the direct object: \"speaks three languages fluently\".",
      "sourceTip": "Word Order A2"
    },
    {
      "id": "adv_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"He [A: is] [B: enough strong] to [C: lift] that heavy [D: box].\"",
      "options": [
        "A: is",
        "B: enough strong",
        "C: lift",
        "D: box"
      ],
      "answer": 1,
      "explanation": "\"Enough\" follows adjectives: \"strong enough\", not \"enough strong\".",
      "sourceTip": "Enough Placement A2"
    },
    {
      "id": "adv_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the sentence with correct subject-auxiliary inversion after a negative adverb:",
      "options": [
        "Seldom have I seen such an awe-inspiring vista.",
        "Seldom I have seen such an vista.",
        "Seldom I did see such an vista.",
        "Seldom saw I such an vista."
      ],
      "answer": 0,
      "explanation": "When negative or restrictive adverbs (seldom, rarely, never) front a clause, inversion occurs: \"Seldom have I seen\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "adv_b1_2",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the inverted auxiliary: \"Rarely (do / does) ______ she attend public receptions these days.\"",
      "options": [
        "does",
        "do",
        "is",
        "did"
      ],
      "answer": 0,
      "explanation": "Fronted \"Rarely\" with third-person singular \"she\" takes auxiliary \"does\": \"Rarely does she attend\".",
      "sourceTip": "Inversion B1"
    },
    {
      "id": "adv_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He has finished almost his homework.\"",
      "options": [
        "Correct",
        "Incorrect - \"almost\" sits immediately before the word it modifies (\"almost finished his homework\")"
      ],
      "answer": 1,
      "explanation": "Focusing adverbs like \"almost\" immediately precede the verb/constituent modified: \"has almost finished\".",
      "sourceTip": "Focusing Adverbs B1"
    },
    {
      "id": "adv_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Never [A: in my life] [B: I had] [C: experienced] such [D: terrifying turbulence].\"",
      "options": [
        "A: in my life",
        "B: I had",
        "C: experienced",
        "D: terrifying turbulence"
      ],
      "answer": 1,
      "explanation": "Negative fronting requires inversion: \"Never in my life HAD I experienced...\".",
      "sourceTip": "Negative Inversion B1"
    },
    {
      "id": "adv_b1_5",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The proposal was rejected ______ on financial grounds; the committee liked the design.",
      "options": [
        "purely",
        "pure",
        "pureness",
        "in pure"
      ],
      "answer": 0,
      "explanation": "\"Purely\" is a limiting/focusing adverb meaning \"solely / strictly\".",
      "sourceTip": "Focusing Adverbs B1"
    },
    {
      "id": "adv_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adverb triggers subject-auxiliary inversion when placed at the beginning of a clause?",
      "options": [
        "Hardly",
        "Usually",
        "Frequently",
        "Obviously"
      ],
      "answer": 0,
      "explanation": "Negative/restrictive adverbs like \"Hardly\", \"Scarcely\", \"Seldom\", \"Never\" trigger inversion.",
      "sourceTip": "Inversion Triggers B1"
    },
    {
      "id": "adv_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [have / rarely / heard / I / such / nonsense]",
      "options": [
        "Rarely have I heard such nonsense.",
        "Rarely I have heard such nonsense.",
        "I have rarely such nonsense heard.",
        "Such nonsense rarely have I heard."
      ],
      "answer": 0,
      "explanation": "Fronted negative adverb (Rarely) + Auxiliary (have) + Subject (I) + Verb (heard) + Object (such nonsense).",
      "sourceTip": "Word Order B1"
    },
    {
      "id": "adv_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The team worked ______ through the night to finish the architectural model.",
      "options": [
        "tirelessly",
        "tiringly",
        "tiredly",
        "tiresome"
      ],
      "answer": 0,
      "explanation": "\"Tirelessly\" means without resting or giving up.",
      "sourceTip": "Adverb Collocations B1"
    },
    {
      "id": "adv_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the discourse adverb: \"Frankly\" ->",
      "options": [
        "Speaking honestly and directly",
        "In an accidental manner",
        "Without any delay",
        "At an earlier time"
      ],
      "answer": 0,
      "explanation": "\"Frankly\" is an evaluative stance adverb meaning \"honestly speaking\".",
      "sourceTip": "Stance Adverbs B1"
    },
    {
      "id": "adv_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"She definitely has been practicing the piano every afternoon.\"",
      "options": [
        "Correct in informal speech; in strict grammar, mid-position adverbs sit after the first auxiliary (\"has definitely been\")",
        "Completely unacceptable"
      ],
      "answer": 0,
      "explanation": "Mid-position adverbs normally sit after the first auxiliary verb: \"has definitely been practicing\".",
      "sourceTip": "Adverb Placement B1"
    },
    {
      "id": "adv_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The patient is ______ recovering from the surgical procedure.",
      "options": [
        "gradually",
        "gradual",
        "graduality",
        "in gradual"
      ],
      "answer": 0,
      "explanation": "Modify the continuous verb \"recovering\" with the manner adverb \"gradually\".",
      "sourceTip": "B1 Vocabulary"
    },
    {
      "id": "adv_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She speaks [A: English] [B: very well], but she [C: hardly speaks] [D: no Spanish].\"",
      "options": [
        "A: English",
        "B: very well",
        "C: hardly speaks",
        "D: no Spanish"
      ],
      "answer": 3,
      "explanation": "\"Hardly\" is already negative; double negation is incorrect: say \"hardly speaks ANY Spanish\".",
      "sourceTip": "Double Negatives B1"
    },
    {
      "id": "adv_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a CONJUNCTIVE adverb (sentence connector)?",
      "options": [
        "However",
        "Because",
        "Although",
        "While"
      ],
      "answer": 0,
      "explanation": "\"However\" is a conjunctive adverb. Because, although, and while are subordinating conjunctions.",
      "sourceTip": "Connectors B1"
    },
    {
      "id": "adv_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the adverb from \"extreme\": \"It was an (extreme) ______ difficult problem to solve.\"",
      "options": [
        "extremely",
        "extremeful",
        "extreming",
        "extremity"
      ],
      "answer": 0,
      "explanation": "Adverb modifying the adjective \"difficult\" is \"extremely\".",
      "sourceTip": "Degree Modifiers B1"
    },
    {
      "id": "adv_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [had / no / started / sooner / rain / the / left / than / we]",
      "options": [
        "No sooner had we left than the rain started.",
        "No sooner we had left than the rain started.",
        "Than we had left no sooner the rain started.",
        "The rain started no sooner had we left than."
      ],
      "answer": 0,
      "explanation": "Correlative inversion: \"No sooner had we left than the rain started.\"",
      "sourceTip": "Correlative Inversion B1"
    },
    {
      "id": "adv_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which adverb correctly intensifies the NON-GRADABLE adjective \"exhausted\"?",
      "options": [
        "utterly",
        "very",
        "fairly",
        "a bit"
      ],
      "answer": 0,
      "explanation": "Non-gradable/extreme adjectives pair with totalizing adverbs like \"utterly\", \"completely\", or \"absolutely\" (not \"very\").",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "adv_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Little ______ that the decision would alter the course of his entire life.",
      "options": [
        "did he know",
        "he knew",
        "he did know",
        "knew he"
      ],
      "answer": 0,
      "explanation": "Fronted negative/restrictive \"Little\" triggers subject-auxiliary inversion: \"Little did he know\".",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "adv_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Only by working together we can resolve this crisis.\"",
      "options": [
        "Correct",
        "Incorrect - \"Only by...\" fronting requires inversion (\"can we resolve\")"
      ],
      "answer": 1,
      "explanation": "\"Only + prepositional phrase\" fronted requires inversion: \"Only by working together CAN WE resolve...\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "adv_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Scarcely [A: had the plane landed] [B: than] the passengers [C: unfastened] their [D: seatbelts].\"",
      "options": [
        "A: had the plane landed",
        "B: than - \"Scarcely\" pairs with \"when\", not \"than\"!",
        "C: unfastened",
        "D: seatbelts"
      ],
      "answer": 1,
      "explanation": "\"Scarcely... when\" is the correlative pair (\"No sooner\" pairs with \"than\").",
      "sourceTip": "Correlative Pairs B2"
    },
    {
      "id": "adv_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Viewpoint Adverb)",
      "skillTested": "Producing",
      "question": "Form the viewpoint adverb from \"economy\": \"(Economy) ______, the country has outperformed expectations.\"",
      "options": [
        "Economically",
        "Economic",
        "Economical",
        "Economizing"
      ],
      "answer": 0,
      "explanation": "\"Economically\" functions as a viewpoint/domain adverb meaning \"from an economic standpoint\".",
      "sourceTip": "Viewpoint Adverbs B2"
    },
    {
      "id": "adv_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adverb expresses CERTAINTY rather than probability?",
      "options": [
        "Undoubtedly",
        "Probably",
        "Presumably",
        "Possibly"
      ],
      "answer": 0,
      "explanation": "\"Undoubtedly\" expresses absolute certainty; the others express degrees of likelihood.",
      "sourceTip": "Epistemic Modality B2"
    },
    {
      "id": "adv_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [under / circumstances / should / no / this / opened / door / be]",
      "options": [
        "Under no circumstances should this door be opened.",
        "Under this door should no circumstances be opened.",
        "Should under no circumstances this door be opened.",
        "This door should under no circumstances opened be."
      ],
      "answer": 0,
      "explanation": "Negative fronting: \"Under no circumstances should this door be opened.\"",
      "sourceTip": "B2 Negative Inversion"
    },
    {
      "id": "adv_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The witness described the suspect as being ______ five feet ten inches tall.",
      "options": [
        "approximately",
        "approximate",
        "approximating",
        "approximativeness"
      ],
      "answer": 0,
      "explanation": "\"Approximately\" modifies numerical approximations.",
      "sourceTip": "B2 Precision Lexis"
    },
    {
      "id": "adv_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the adverb collocation: \"deeply\" ->",
      "options": [
        "deeply regret / deeply moved",
        "deeply fast / deeply loud",
        "deeply dead / deeply unique",
        "deeply hot / deeply cold"
      ],
      "answer": 0,
      "explanation": "\"Deeply\" collocates strongly with emotional adjectives and verbs: deeply regret, deeply moved, deeply concerned.",
      "sourceTip": "Collocations B2"
    },
    {
      "id": "adv_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Not only did he win the championship, but he also broke the world record.\"",
      "options": [
        "Correct - fronted \"Not only\" inverted main clause followed by \"but also\"",
        "Incorrect - should not have inversion"
      ],
      "answer": 0,
      "explanation": "\"Not only did he win... but he also...\" is standard formal correlative inversion.",
      "sourceTip": "B2 Correlative Syntax"
    },
    {
      "id": "adv_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He spoke so ______ that the audience could barely hear his closing remarks.",
      "options": [
        "faintly",
        "faint",
        "fainting",
        "faintness"
      ],
      "answer": 0,
      "explanation": "Adverb of manner modifying the verb \"spoke\": \"faintly\".",
      "sourceTip": "B2 Adverbs"
    },
    {
      "id": "adv_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: is] [B: utterly tired] after [C: running] the [D: marathon].\"",
      "options": [
        "A: is",
        "B: utterly tired",
        "C: running",
        "D: marathon"
      ],
      "answer": 1,
      "explanation": "\"Tired\" is gradable, so use \"very tired\" or \"utterly EXHAUSTED\" (gradable vs ungradable clash).",
      "sourceTip": "Adverb Collocations B2"
    },
    {
      "id": "adv_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adverb is a FOCUSING adverb?",
      "options": [
        "Merely",
        "Quickly",
        "Happily",
        "Gracefully"
      ],
      "answer": 0,
      "explanation": "\"Merely\" is a focusing/limiting adverb (meaning \"only / just\").",
      "sourceTip": "Focusing Adverbs B2"
    },
    {
      "id": "adv_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Convert to an adverb: \"The board members reached agreement (unanimous) ______.\"",
      "options": [
        "unanimously",
        "unanimity",
        "unanimous",
        "unanimouslyness"
      ],
      "answer": 0,
      "explanation": "\"Unanimously\" describes how agreement was reached.",
      "sourceTip": "Word Formation B2"
    },
    {
      "id": "adv_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [rarely / seen / have / such / dedication / I / extraordinary]",
      "options": [
        "Rarely have I seen such extraordinary dedication.",
        "Rarely I have seen such extraordinary dedication.",
        "Such extraordinary dedication have I rarely seen.",
        "I have rarely seen such dedication extraordinary."
      ],
      "answer": 0,
      "explanation": "Negative fronting: \"Rarely have I seen such extraordinary dedication.\"",
      "sourceTip": "Inversion B2"
    },
    {
      "id": "adv_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which adverb expresses temporal continuity up to a specific historical point in formal academic prose?",
      "options": [
        "Hitherto",
        "Thereafter",
        "Heretofore",
        "Whilom"
      ],
      "answer": 0,
      "explanation": "\"Hitherto\" means \"until this time / previously\".",
      "sourceTip": "Academic Lexis C1"
    },
    {
      "id": "adv_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Insert the inverted auxiliary: \"On no account (should / must) ______ confidential documents be removed from the archive.\"",
      "options": [
        "should",
        "could",
        "would",
        "will"
      ],
      "answer": 0,
      "explanation": "Negative prepositional fronting: \"On no account SHOULD confidential documents be removed...\".",
      "sourceTip": "C1 Inversion"
    },
    {
      "id": "adv_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"Barely [A: the meeting had begun] [B: when] the delegates [C: staged] a walkout.\"",
      "options": [
        "A: the meeting had begun - requires inversion: \"Barely had the meeting begun\"",
        "B: when",
        "C: staged",
        "No error"
      ],
      "answer": 0,
      "explanation": "\"Barely\" at clause head requires inversion: \"Barely had the meeting begun\".",
      "sourceTip": "C1 Inversion Traps"
    },
    {
      "id": "adv_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The discovery was serendipitous, insofar as the researchers were searching for an entirely different compound.\"",
      "options": [
        "Correct - \"insofar as\" functions as a formal adverbial conjunction of extent/degree",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Insofar as\" is formal academic syntax expressing the extent or degree to which something is true.",
      "sourceTip": "C1 Formal Syntax"
    },
    {
      "id": "adv_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [only / did / then / comprehend / the / of / gravity / we / the / situation]",
      "options": [
        "Only then did we comprehend the gravity of the situation.",
        "Did we only then comprehend the gravity of the situation.",
        "Then only did we the gravity of the situation comprehend.",
        "The gravity of the situation only then did we comprehend."
      ],
      "answer": 0,
      "explanation": "Fronted restrictive temporal adverbial: \"Only then did we comprehend the gravity of the situation.\"",
      "sourceTip": "C1 Inversion"
    },
    {
      "id": "adv_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The two theories are ______ incompatible; accepting one logically entails rejecting the other.",
      "options": [
        "fundamentally",
        "merely",
        "fairly",
        "scarcely"
      ],
      "answer": 0,
      "explanation": "\"Fundamentally incompatible\" is a high-level academic collocation denoting mutually exclusive principles.",
      "sourceTip": "Academic Collocations C1"
    },
    {
      "id": "adv_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adverb functions as a CONCESSIVE conjunct (similar to \"nevertheless\")?",
      "options": [
        "Nonetheless",
        "Furthermore",
        "Moreover",
        "Consequently"
      ],
      "answer": 0,
      "explanation": "\"Nonetheless\" conveys concession/contrast; furthermore/moreover express addition; consequently expresses result.",
      "sourceTip": "Discourse Markers C1"
    },
    {
      "id": "adv_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the position: \"The board will definitely have been informed.\" What position is \"definitely\" in?",
      "options": [
        "Mid-position after first auxiliary",
        "End-position",
        "Fronted position",
        "Predicative complement"
      ],
      "answer": 0,
      "explanation": "In multi-auxiliary verb chains, mid-position adverbs sit after the first finite auxiliary (\"will definitely have been\").",
      "sourceTip": "C1 Adverb Placement"
    },
    {
      "id": "adv_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The treaty was ______ signed in Geneva, concluding two years of hostilities.",
      "options": [
        "formally",
        "formal",
        "formalism",
        "in formal"
      ],
      "answer": 0,
      "explanation": "Adverb of manner modifying the passive verb \"was signed\": \"formally\".",
      "sourceTip": "C1 Lexis"
    },
    {
      "id": "adv_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Seldom if ever does one encounter an orator of such eloquence.\"",
      "options": [
        "Correct - double negative/restrictive fronting with inverted pronoun concord",
        "Incorrect - double fronting is ungrammatical"
      ],
      "answer": 0,
      "explanation": "\"Seldom if ever\" is an established formulaic restrictive phrase triggering subject-auxiliary inversion.",
      "sourceTip": "C1 Idiomatic Inversion"
    },
    {
      "id": "adv_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What syntactic function does \"hitherto\" perform in: \"A hitherto unknown manuscript was discovered in the abbey\"?",
      "options": [
        "Pre-adjectival temporal modifier",
        "Sentence conjunction",
        "Locative preposition",
        "Direct object complement"
      ],
      "answer": 0,
      "explanation": "\"Hitherto\" functions as a temporal adverb modifying the participial adjective \"unknown\".",
      "sourceTip": "C2 Morphology & Syntax"
    },
    {
      "id": "adv_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the high formal inversion: \"Not since the Treaty of Versailles (have / had) ______ sovereign boundaries been redrawn on this scale.\"",
      "options": [
        "have",
        "had",
        "were",
        "did"
      ],
      "answer": 0,
      "explanation": "Temporal fronted restriction with present relevance: \"Not since... have sovereign boundaries been redrawn...\".",
      "sourceTip": "C2 Formal Inversion"
    },
    {
      "id": "adv_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the defect: \"In no way [A: the minister's remarks] [B: can be construed] as an admission of [C: culpability].\"",
      "options": [
        "A: the minister's remarks - requires inversion: \"can the minister's remarks be construed\"!",
        "B: can be construed",
        "C: culpability",
        "No error"
      ],
      "answer": 0,
      "explanation": "Negative adverbial \"In no way\" requires auxiliary inversion: \"In no way CAN the minister's remarks be construed\".",
      "sourceTip": "C2 Inversion Traps"
    },
    {
      "id": "adv_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [whither / nor / whence / he / knew / came / it / it / went]",
      "options": [
        "He knew neither whence it came nor whither it went.",
        "Whence it came nor whither it went he knew neither.",
        "Neither whence it came he knew nor whither it went.",
        "Nor whither it went he knew neither whence it came."
      ],
      "answer": 0,
      "explanation": "Archaic directional adverbs: \"whence\" (from where) and \"whither\" (to where).",
      "sourceTip": "Classical Rhetoric C2"
    },
    {
      "id": "adv_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The argument, ______ sound in premise, collapses when subjected to empirical verification.",
      "options": [
        "ostensibly",
        "pure",
        "plain",
        "merely"
      ],
      "answer": 0,
      "explanation": "\"Ostensibly\" means apparently or seemingly on the surface, but perhaps not in fact.",
      "sourceTip": "C2 Epistemic Adverbs"
    },
    {
      "id": "adv_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which archaic adverb means \"to what place / where to\"?",
      "options": [
        "Whither",
        "Whence",
        "Thither",
        "Hither"
      ],
      "answer": 0,
      "explanation": "\"Whither\" means \"to where\". (\"Whence\" means \"from where\"; \"thither\" means \"to that place\"; \"hither\" means \"to this place\").",
      "sourceTip": "Archaic Directionals C2"
    },
    {
      "id": "adv_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The resolution was passed ______, without a single dissenting voice.",
      "options": [
        "nemine contradicente",
        "ipso facto",
        "inter alia",
        "de facto"
      ],
      "answer": 0,
      "explanation": "\"Nemine contradicente\" (abbreviated nem. con.) is a Latinate parliamentary adverb meaning unanimously / with no one dissenting.",
      "sourceTip": "Latin Adverbials C2"
    },
    {
      "id": "adv_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Much though I admire his erudition, I cannot endorse his methodological approach.\"",
      "options": [
        "Correct - fronted adverbial \"Much though\" expressing concession",
        "Incorrect - concession must start with \"Although\""
      ],
      "answer": 0,
      "explanation": "\"Adverb + though + clause\" is established formal fronted concessive syntax.",
      "sourceTip": "C2 Concessive Syntax"
    },
    {
      "id": "adv_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Never [A: had I] [B: seen] such vanity, [C: nor I had] [D: anticipated] such arrogance.\"",
      "options": [
        "A: had I",
        "B: seen",
        "C: nor I had - negative \"nor\" also triggers inversion: \"nor had I anticipated\"!",
        "D: anticipated"
      ],
      "answer": 2,
      "explanation": "Negative coordinator \"nor\" requires auxiliary inversion: \"nor had I anticipated\".",
      "sourceTip": "Compound Inversion C2"
    },
    {
      "id": "adv_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the formal restrictive connector: \"The agreement holds good (insofar / inasumch) ______ as both parties observe the covenants.\"",
      "options": [
        "insofar",
        "inasmuch",
        "insomuch",
        "wherever"
      ],
      "answer": 0,
      "explanation": "\"Insofar as\" specifies the boundary/extent of applicability.",
      "sourceTip": "C2 Legal Syntax"
    }
  ],
  "adjectives": [
    {
      "id": "adj_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the adjective in the sentence: \"The small bird built a nest in the tree.\"",
      "options": [
        "small",
        "bird",
        "built",
        "tree"
      ],
      "answer": 0,
      "explanation": "\"Small\" is an adjective describing the size of the noun \"bird\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "adj_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Comparative)",
      "skillTested": "Producing",
      "question": "Form the comparative of the adjective: \"An elephant is (big) ______ than a horse.\"",
      "options": [
        "bigger",
        "biger",
        "more big",
        "biggest"
      ],
      "answer": 0,
      "explanation": "One-syllable adjectives with C-V-C double the consonant: \"bigger\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "adj_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"She wore a dress red to the wedding party.\"",
      "options": [
        "Correct",
        "Incorrect - in English, descriptive adjectives precede the noun (\"a red dress\")"
      ],
      "answer": 1,
      "explanation": "In English, adjectives usually sit before the noun (attributive position): \"a red dress\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "adj_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is an IRREGULAR comparative adjective?",
      "options": [
        "Better",
        "Taller",
        "Smaller",
        "Older"
      ],
      "answer": 0,
      "explanation": "\"Better\" is the irregular comparative of \"good\" (good -> better -> best).",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "adj_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Today is the ______ day of the year.",
      "options": [
        "hottest",
        "hotter",
        "most hot",
        "hotest"
      ],
      "answer": 0,
      "explanation": "Superlative with \"the\" for short adjectives: \"the hottest\" (double t).",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "adj_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [has / eyes / brown / beautiful / she]",
      "options": [
        "She has beautiful brown eyes.",
        "She has brown beautiful eyes.",
        "Beautiful eyes brown she has.",
        "Eyes brown beautiful she has."
      ],
      "answer": 0,
      "explanation": "Opinion (beautiful) precedes Color (brown): \"beautiful brown eyes\".",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "adj_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"Mount Everest is the [A: most high] [B: mountain] [C: in] the [D: world].\"",
      "options": [
        "A: most high",
        "B: mountain",
        "C: in",
        "D: world"
      ],
      "answer": 0,
      "explanation": "One-syllable adjectives take -est: \"the HIGHEST\", not \"the most high\".",
      "sourceTip": "Elementary Superlatives"
    },
    {
      "id": "adj_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the adjective \"bad\" with its superlative form:",
      "options": [
        "baddest",
        "worst",
        "worse",
        "more bad"
      ],
      "answer": 1,
      "explanation": "Irregular adjective \"bad\" -> comparative \"worse\" -> superlative \"worst\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "adj_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"This soup tastes delicious.\"",
      "options": [
        "Correct - linking verb \"taste\" is followed by a predicative adjective",
        "Incorrect - should use adverb \"deliciously\""
      ],
      "answer": 0,
      "explanation": "Linking verbs of perception (taste, smell, look, feel) take predicative adjectives, not adverbs.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "adj_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Provide the superlative: \"He is the (friendly) ______ person in our office.\"",
      "options": [
        "friendliest",
        "most friendly",
        "friendlyest",
        "more friendly"
      ],
      "answer": 0,
      "explanation": "Two-syllable adjectives ending in -y change \"y\" to \"i\" and add -est: \"friendliest\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "adj_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "She is ______ than her older sister.",
      "options": [
        "taller",
        "tallest",
        "more tall",
        "tall"
      ],
      "answer": 0,
      "explanation": "Comparative with \"than\" for short adjective: \"taller\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "adj_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is an OPPOSITE (antonym) of \"cheap\"?",
      "options": [
        "Expensive",
        "Small",
        "Quiet",
        "Fast"
      ],
      "answer": 0,
      "explanation": "\"Expensive\" is the antonym of \"cheap\".",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "adj_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "My grandfather bought an ______ wooden chair at the market.",
      "options": [
        "old",
        "young",
        "modern",
        "newly"
      ],
      "answer": 0,
      "explanation": "\"An\" requires a vowel sound: \"an old wooden chair\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "adj_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [cold / was / yesterday / weather / the / very]",
      "options": [
        "The weather was very cold yesterday.",
        "Yesterday the cold weather was very.",
        "Very cold was the weather yesterday.",
        "The weather very cold was yesterday."
      ],
      "answer": 0,
      "explanation": "Subject (The weather) + Verb (was) + Adjective phrase (very cold) + Time (yesterday).",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "adj_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"This car is [A: more cheap] [B: than] that [C: luxury] [D: sedan].\"",
      "options": [
        "A: more cheap",
        "B: than",
        "C: luxury",
        "D: sedan"
      ],
      "answer": 0,
      "explanation": "One-syllable adjective \"cheap\" takes -er: \"cheaper\", not \"more cheap\".",
      "sourceTip": "Comparative Rules A1"
    },
    {
      "id": "adj_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Distinguish -ed vs -ing: \"The grammar lecture was so ______ that many students felt ______.\"",
      "options": [
        "boring / bored",
        "bored / boring",
        "boring / boring",
        "bored / bored"
      ],
      "answer": 0,
      "explanation": "-ing describes the cause/characteristic (the lecture was boring); -ed describes the feeling experienced (students felt bored).",
      "sourceTip": "test-english A2"
    },
    {
      "id": "adj_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "My city is not as ______ as Bangkok.",
      "options": [
        "crowded",
        "more crowded",
        "crowdedest",
        "most crowded"
      ],
      "answer": 0,
      "explanation": "Equative comparison uses \"as + base adjective + as\": \"as crowded as\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "adj_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The children were fascinating by the magician's tricks.\"",
      "options": [
        "Correct",
        "Incorrect - emotional recipient requires participial adjective \"fascinated\""
      ],
      "answer": 1,
      "explanation": "People experiencing the feeling take -ed: \"were fascinated\".",
      "sourceTip": "Participial Adjectives A2"
    },
    {
      "id": "adj_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (OSASCOMP)",
      "skillTested": "Producing",
      "question": "Order the adjectives: \"She wore a (Italian / black / stylish) ______ leather jacket.\"",
      "options": [
        "stylish black Italian",
        "black Italian stylish",
        "Italian stylish black",
        "stylish Italian black"
      ],
      "answer": 0,
      "explanation": "OSASCOMP: Opinion (stylish) -> Color (black) -> Origin (Italian).",
      "sourceTip": "Adjective Order A2"
    },
    {
      "id": "adj_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"He is [A: the most] [B: unique] painter [C: in the entire] [D: country].\"",
      "options": [
        "A: the most",
        "B: unique",
        "C: in the entire",
        "D: country"
      ],
      "answer": 0,
      "explanation": "\"Unique\" is an absolute/non-gradable adjective (meaning one of a kind); it cannot take \"most\".",
      "sourceTip": "Non-gradables A2"
    },
    {
      "id": "adj_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective CANNOT be used before a noun (only predicative after linking verbs)?",
      "options": [
        "Afraid",
        "Happy",
        "Small",
        "Green"
      ],
      "answer": 0,
      "explanation": "\"Afraid\" is an a-adjective used only predicatively (e.g., \"The boy is afraid\", never *\"an afraid boy\").",
      "sourceTip": "Predicative Only A2"
    },
    {
      "id": "adj_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [interested / is / in / history / she / Cambodian]",
      "options": [
        "She is interested in Cambodian history.",
        "She is in Cambodian history interested.",
        "Interested in Cambodian history she is.",
        "In Cambodian history is she interested."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (is) + Adjective (interested) + Prepositional complement (in Cambodian history).",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "adj_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Traveling by bullet train is ______ more comfortable than taking the bus.",
      "options": [
        "much",
        "very",
        "more",
        "too"
      ],
      "answer": 0,
      "explanation": "Comparatives are modified by \"much\" (or \"far / significantly\"), never \"very\": \"much more comfortable\".",
      "sourceTip": "Modifiers of Comparatives A2"
    },
    {
      "id": "adj_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the compound adjective: \"a child who is six years old\" ->",
      "options": [
        "a six-year-old child",
        "a six-years-old child",
        "a six-year-aged child",
        "a six-years child"
      ],
      "answer": 0,
      "explanation": "Hyphenated compound pre-nominal modifiers remain singular: \"a six-year-old child\".",
      "sourceTip": "Compound Adjectives A2"
    },
    {
      "id": "adj_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The asleep baby looked so peaceful in the crib.\"",
      "options": [
        "Correct",
        "Incorrect - \"asleep\" is predicative only; say \"The sleeping baby\""
      ],
      "answer": 1,
      "explanation": "\"Asleep\" cannot be used attributively before a noun; use \"sleeping baby\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "adj_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "This restaurant is ______ expensive than the one near the harbor.",
      "options": [
        "less",
        "least",
        "little",
        "lesser"
      ],
      "answer": 0,
      "explanation": "Comparative of inferiority uses \"less + adjective + than\": \"less expensive than\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "adj_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the adjective from \"create\": \"She is a highly (create) ______ graphic designer.\"",
      "options": [
        "creative",
        "creating",
        "creativity",
        "creation"
      ],
      "answer": 0,
      "explanation": "The adjective suffix is -ive: \"creative\".",
      "sourceTip": "Word Formation A2"
    },
    {
      "id": "adj_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a NON-GRADABLE (extreme) adjective?",
      "options": [
        "Freezing",
        "Cold",
        "Warm",
        "Hot"
      ],
      "answer": 0,
      "explanation": "\"Freezing\" means extremely cold and cannot be modified by \"very\" (use \"absolutely freezing\").",
      "sourceTip": "Gradable vs Extreme A2"
    },
    {
      "id": "adj_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [round / table / a / bought / dining / wooden / they]",
      "options": [
        "They bought a round wooden dining table.",
        "They bought a wooden round dining table.",
        "A dining round wooden table they bought.",
        "They bought round a wooden dining table."
      ],
      "answer": 0,
      "explanation": "Shape (round) precedes Material (wooden), followed by Purpose noun (dining table).",
      "sourceTip": "OSASCOMP A2"
    },
    {
      "id": "adj_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: feels] [B: happily] [C: about] her [D: promotion].\"",
      "options": [
        "A: feels",
        "B: happily",
        "C: about",
        "D: promotion"
      ],
      "answer": 1,
      "explanation": "Linking verb \"feels\" takes an adjective: \"feels HAPPY\", not adverb \"happily\".",
      "sourceTip": "Linking Verbs A2"
    },
    {
      "id": "adj_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Order according to OSASCOMP: \"He drove a ______ sports car.\"",
      "options": [
        "sleek new Italian red",
        "sleek new red Italian",
        "new sleek Italian red",
        "red sleek Italian new"
      ],
      "answer": 1,
      "explanation": "Opinion (sleek) -> Age (new) -> Color (red) -> Origin (Italian).",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "adj_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The longer you wait to prepare, the ______ the exam will feel.",
      "options": [
        "more difficult",
        "most difficult",
        "difficult",
        "difficulter"
      ],
      "answer": 0,
      "explanation": "Double proportional comparative: \"The + comparative..., the + comparative...\": \"The longer..., the more difficult...\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "adj_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The architecture of Florence is older than Rome.\"",
      "options": [
        "Correct",
        "Incorrect - faulty comparison: comparing architecture to a city! Say \"than that of Rome\""
      ],
      "answer": 1,
      "explanation": "Logical comparison requires comparing like with like: \"than THAT OF Rome\".",
      "sourceTip": "Logical Comparison B1"
    },
    {
      "id": "adj_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"She [A: gave] a [B: three-hours] [C: lecture] on [D: international law].\"",
      "options": [
        "A: gave",
        "B: three-hours",
        "C: lecture",
        "D: international law"
      ],
      "answer": 1,
      "explanation": "Hyphenated compound adjective remains singular: \"a three-hour lecture\".",
      "sourceTip": "Compound Adjectives B1"
    },
    {
      "id": "adj_b1_5",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Negative Prefix)",
      "skillTested": "Producing",
      "question": "Add the correct negative prefix: \"It is (responsible) ______ to drive without a seatbelt.\"",
      "options": [
        "irresponsible",
        "unresponsible",
        "disresponsible",
        "inresponsible"
      ],
      "answer": 0,
      "explanation": "Adjectives beginning with \"r\" take the prefix \"ir-\": \"irresponsible\".",
      "sourceTip": "Prefixes B1"
    },
    {
      "id": "adj_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective takes the negative prefix \"il-\"?",
      "options": [
        "Logical",
        "Possible",
        "Tolerant",
        "Sincere"
      ],
      "answer": 0,
      "explanation": "\"Logical\" -> \"illogical\" (prefix il- before l).",
      "sourceTip": "Word Formation B1"
    },
    {
      "id": "adj_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Order: [more / the / the / we / practice / fluent / become / we]",
      "options": [
        "The more we practice, the more fluent we become.",
        "The more fluent we become, the more we practice.",
        "The more practice we, the more fluent become we.",
        "We become the more fluent, the more practice we."
      ],
      "answer": 0,
      "explanation": "Proportional comparative: \"The more..., the more...\".",
      "sourceTip": "Proportional B1"
    },
    {
      "id": "adj_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The homeless ______ provided with temporary shelter and warm meals during the blizzard.",
      "options": [
        "were",
        "was",
        "is",
        "has been"
      ],
      "answer": 0,
      "explanation": "\"The + adjective\" representing a whole class of people is plural and takes a plural verb: \"The homeless WERE...\".",
      "sourceTip": "The + Adjective B1"
    },
    {
      "id": "adj_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the collocation: \"crystal\" ->",
      "options": [
        "crystal clear",
        "crystal hot",
        "crystal quiet",
        "crystal cheap"
      ],
      "answer": 0,
      "explanation": "Established compound intensifying adjective: \"crystal clear\".",
      "sourceTip": "Collocations B1"
    },
    {
      "id": "adj_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The rich has a social responsibility to assist the underprivileged.\"",
      "options": [
        "Correct",
        "Incorrect - \"The rich\" refers to rich people collectively and takes a plural verb \"have\""
      ],
      "answer": 1,
      "explanation": "\"The rich\" is a plural collective adjective noun: \"The rich HAVE...\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "adj_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The climate of Cambodia is much hotter than ______ of northern Japan.",
      "options": [
        "that",
        "this",
        "those",
        "these"
      ],
      "answer": 0,
      "explanation": "\"That\" replaces the singular noun \"the climate\".",
      "sourceTip": "Comparative Pro-forms B1"
    },
    {
      "id": "adj_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: is] [B: senior] [C: than] me [D: in the company].\"",
      "options": [
        "A: is",
        "B: senior",
        "C: than",
        "D: in the company"
      ],
      "answer": 2,
      "explanation": "Latin comparatives (senior, junior, superior, inferior) take \"to\", not \"than\": \"senior TO me\".",
      "sourceTip": "Latin Comparatives B1"
    },
    {
      "id": "adj_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective takes preposition \"TO\" instead of \"than\" in comparative structures?",
      "options": [
        "Superior",
        "Better",
        "Taller",
        "Bigger"
      ],
      "answer": 0,
      "explanation": "\"Superior to\" (Latin comparative). Better, taller, and bigger take \"than\".",
      "sourceTip": "Comparative Rules B1"
    },
    {
      "id": "adj_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the prefix: \"Her explanation was completely (comprehensible) ______; nobody understood it.\"",
      "options": [
        "incomprehensible",
        "uncomprehensible",
        "discomprehensible",
        "imcomprehensible"
      ],
      "answer": 0,
      "explanation": "\"Incomprehensible\" (prefix in-).",
      "sourceTip": "Word Formation B1"
    },
    {
      "id": "adj_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she / someone / looking / is / for / reliable]",
      "options": [
        "She is looking for someone reliable.",
        "She is looking for reliable someone.",
        "Reliable someone she is looking for.",
        "Someone she is looking for reliable."
      ],
      "answer": 0,
      "explanation": "Adjectives modifying indefinite pronouns (someone, anyone, nothing) sit AFTER the pronoun (postpositive): \"someone reliable\".",
      "sourceTip": "Postpositive B1"
    },
    {
      "id": "adj_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which postpositive adjective sits AFTER the noun in institutional titles?",
      "options": [
        "President-elect",
        "Elect-president",
        "Election-president",
        "Elected-president"
      ],
      "answer": 0,
      "explanation": "\"President-elect\" (like \"heir apparent\", \"court martial\") uses postpositive French loan syntax.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "adj_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The museum displays artifacts dating from ancient times to the ______ century.",
      "options": [
        "present",
        "presence",
        "presented",
        "presently"
      ],
      "answer": 0,
      "explanation": "\"The present century\" (adjective meaning current).",
      "sourceTip": "B2 Vocabulary"
    },
    {
      "id": "adj_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The wounded was evacuated by helicopter immediately after the explosion.\"",
      "options": [
        "Correct if referring to one person, but \"the wounded\" collectively takes plural \"were\"",
        "Always singular"
      ],
      "answer": 0,
      "explanation": "\"The wounded\" as a generic plural takes \"were evacuated\"; if singular, say \"the wounded soldier was...\".",
      "sourceTip": "Plural Adjectives B2"
    },
    {
      "id": "adj_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"This car is [A: by far] the [B: most expensive] of [C: the two] [D: vehicles].\"",
      "options": [
        "A: by far",
        "B: most expensive",
        "C: the two - when comparing only two, strict prescriptive grammar uses comparative \"the MORE expensive\"!",
        "D: vehicles"
      ],
      "answer": 1,
      "explanation": "When comparing strictly two items, traditional grammar requires the comparative: \"the MORE expensive of the two\".",
      "sourceTip": "Prescriptive Comparison B2"
    },
    {
      "id": "adj_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Negative Prefix)",
      "skillTested": "Producing",
      "question": "Complete with negative prefix: \"His behavior was utterly (defensible) ______.\"",
      "options": [
        "indefensible",
        "undefensible",
        "disdefensible",
        "imdefensible"
      ],
      "answer": 0,
      "explanation": "\"Indefensible\" takes the prefix in-.",
      "sourceTip": "B2 Word Formation"
    },
    {
      "id": "adj_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which of the following is a COMPOUND HYPHENATED ADJECTIVE?",
      "options": [
        "State-of-the-art",
        "Contemporary",
        "Sophisticated",
        "Modernistic"
      ],
      "answer": 0,
      "explanation": "\"State-of-the-art\" is a multi-word compound adjective.",
      "sourceTip": "Compound Morphology B2"
    },
    {
      "id": "adj_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [heir / prince / the / is / the / to / apparent / throne / the]",
      "options": [
        "The prince is the heir apparent to the throne.",
        "The apparent heir prince is to the throne.",
        "The throne is heir apparent to the prince.",
        "To the throne the prince heir apparent is."
      ],
      "answer": 0,
      "explanation": "Postpositive legal title: \"heir apparent\".",
      "sourceTip": "Postpositive Syntax B2"
    },
    {
      "id": "adj_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The company's assets are ______ to its accumulated sovereign liabilities.",
      "options": [
        "inferior",
        "less",
        "smaller",
        "lower"
      ],
      "answer": 0,
      "explanation": "\"Inferior to\" is the formal comparative collocation.",
      "sourceTip": "B2 Collocations"
    },
    {
      "id": "adj_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the ungradable adjective with its suitable adverb modifier: \"dead\" ->",
      "options": [
        "Stone dead / completely dead",
        "Very dead",
        "Fairly dead",
        "A bit dead"
      ],
      "answer": 0,
      "explanation": "Absolute/ungradable adjectives pair with totalizing intensifiers (\"completely dead\" or idiom \"stone dead\").",
      "sourceTip": "Collocations B2"
    },
    {
      "id": "adj_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"She is a well-known, highly respected, and deeply committed educator.\"",
      "options": [
        "Correct - well-punctuated coordinate compound participial adjectives",
        "Incorrect - too many adjectives"
      ],
      "answer": 0,
      "explanation": "Symmetrical coordinate compound adjectives modifying \"educator\".",
      "sourceTip": "Adjective Chains B2"
    },
    {
      "id": "adj_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "There is ______ little hope of finding survivors after the avalanche.",
      "options": [
        "precious",
        "preciously",
        "preciousness",
        "more precious"
      ],
      "answer": 0,
      "explanation": "\"Precious little\" is an established idiomatic intensifying modifier meaning \"almost none\".",
      "sourceTip": "Idiomatic Modifiers B2"
    },
    {
      "id": "adj_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"The [A: two first] chapters of the dissertation [B: establish] the [C: theoretical] [D: framework].\"",
      "options": [
        "A: two first - ordinal precedes cardinal: \"The first two\"!",
        "B: establish",
        "C: theoretical",
        "D: framework"
      ],
      "answer": 0,
      "explanation": "Order of numerals: Ordinal (first) precedes Cardinal (two): \"The FIRST TWO chapters\".",
      "sourceTip": "Numeral Order B2"
    },
    {
      "id": "adj_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective is ATTRIBUTIVE ONLY (never predicative)?",
      "options": [
        "Former (a former president)",
        "Asleep",
        "Alive",
        "Afraid"
      ],
      "answer": 0,
      "explanation": "\"Former\" can only sit before a noun (\"the former minister\", never *\"The minister is former\"). Asleep, alive, afraid are predicative only.",
      "sourceTip": "Attributive Only B2"
    },
    {
      "id": "adj_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the adjective: \"His speech was full of (provoke) ______ statements that sparked fierce debate.\"",
      "options": [
        "provocative",
        "provokingness",
        "provocable",
        "provokeful"
      ],
      "answer": 0,
      "explanation": "\"Provocative\" is the standard qualitative adjective.",
      "sourceTip": "B2 Vocabulary"
    },
    {
      "id": "adj_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [available / seats / were / no / the / flight / on]",
      "options": [
        "There were no seats available on the flight.",
        "No seats were there available on the flight.",
        "Available seats there were no on the flight.",
        "On the flight seats available were no there."
      ],
      "answer": 0,
      "explanation": "Postpositive position: \"no seats available on the flight\".",
      "sourceTip": "Postpositive Syntax B2"
    },
    {
      "id": "adj_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the sentence exhibiting correct postpositive adjective placement in formal register:",
      "options": [
        "The secretary general addressed all delegates present.",
        "The secretary general addressed all present delegates.",
        "The secretary general addressed all delegates presentation.",
        "The secretary general addressed present all delegates."
      ],
      "answer": 0,
      "explanation": "\"Delegates present\" (postpositive \"present\" means \"who were in attendance\"; whereas \"present delegates\" would mean current).",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "adj_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form the literary adjective meaning unchanging: \"The laws of the cosmos remain (mutable) ______.\"",
      "options": [
        "immutable",
        "unmutable",
        "dismutable",
        "nonmutable"
      ],
      "answer": 0,
      "explanation": "\"Immutable\" (from Latin immutabilis) means unchangeable.",
      "sourceTip": "Classical Vocabulary C1"
    },
    {
      "id": "adj_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the defect: \"The [A: proposed] reforms are [B: diametrically] [C: opposed] [D: than] the previous policy.\"",
      "options": [
        "A: proposed",
        "B: diametrically",
        "C: opposed",
        "D: than - \"opposed\" governs \"to\", not \"than\"!"
      ],
      "answer": 3,
      "explanation": "The dependent preposition for \"opposed\" is \"to\": \"opposed TO the previous policy\".",
      "sourceTip": "Dependent Prepositions C1"
    },
    {
      "id": "adj_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"She gave an impromptu, off-the-cuff response to the interrogation.\"",
      "options": [
        "Correct - hyphenated idiomatic compound adjective",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Off-the-cuff\" is an established hyphenated compound adjective meaning spontaneous/unprepared.",
      "sourceTip": "Compound Adjectives C1"
    },
    {
      "id": "adj_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [words / fail / to / express / my / profound / gratitude]",
      "options": [
        "Words fail to express my profound gratitude.",
        "My profound gratitude words fail to express.",
        "To express words fail my profound gratitude.",
        "Fail words to express my gratitude profound."
      ],
      "answer": 0,
      "explanation": "Subject (Words) + Verb (fail to express) + Direct Object (my profound gratitude).",
      "sourceTip": "C1 Rhetoric"
    },
    {
      "id": "adj_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The treaty contains ______ ambiguous clauses that allow divergent interpretations.",
      "options": [
        "deliberately",
        "deliberate",
        "deliberateness",
        "in deliberate"
      ],
      "answer": 0,
      "explanation": "Adverb modifying the participial/qualitative adjective \"ambiguous\": \"deliberately ambiguous\".",
      "sourceTip": "Adverb-Adjective Collocations C1"
    },
    {
      "id": "adj_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective means \"existing only in name / insignificant\"?",
      "options": [
        "Nominal",
        "Formidable",
        "Inestimable",
        "Prodigious"
      ],
      "answer": 0,
      "explanation": "\"Nominal\" (from Latin nomen) means in name only (e.g., \"a nominal fee\").",
      "sourceTip": "C1 Academic Lexis"
    },
    {
      "id": "adj_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the postpositive phrase: \"the stars visible\" vs \"the visible stars\". What is the difference?",
      "options": [
        "\"Stars visible\" means visible at that specific moment; \"visible stars\" means inherently capable of being seen",
        "They are completely synonymous in every nuance",
        "Only \"visible stars\" is grammatical",
        "Only \"stars visible\" is grammatical"
      ],
      "answer": 0,
      "explanation": "Postpositive adjectives in English often denote temporary stage states rather than inherent permanent traits.",
      "sourceTip": "Linguistic Semantics C1"
    },
    {
      "id": "adj_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He was ______ to sudden bouts of melancholy when working in isolation.",
      "options": [
        "prone",
        "prostrate",
        "pliant",
        "prevailing"
      ],
      "answer": 0,
      "explanation": "\"Prone to\" is the idiomatic dependent adjective collocation meaning susceptible/predisposed.",
      "sourceTip": "C1 Collocations"
    },
    {
      "id": "adj_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The ambassador was persona non grata in the host nation.\"",
      "options": [
        "Correct - Latinate postpositive diplomatic designation",
        "Incorrect - ungrammatical English"
      ],
      "answer": 0,
      "explanation": "\"Persona non grata\" is standard diplomatic vocabulary.",
      "sourceTip": "Diplomatic English C1"
    },
    {
      "id": "adj_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which adjective expresses absolute irremediability in formal register?",
      "options": [
        "Irretrievable",
        "Transitory",
        "Ephemeral",
        "Contingent"
      ],
      "answer": 0,
      "explanation": "\"Irretrievable\" means impossible to recover, regain, or remedy.",
      "sourceTip": "C2 Academic Vocabulary"
    },
    {
      "id": "adj_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Latin Suffix)",
      "skillTested": "Producing",
      "question": "Form the classical adjective meaning all-powerful: \"The monarch possessed (omni / potent) ______ authority.\"",
      "options": [
        "omnipotent",
        "omnipresent",
        "omniscient",
        "omnivorous"
      ],
      "answer": 0,
      "explanation": "\"Omnipotent\" means having unlimited or universal power.",
      "sourceTip": "Classical Morphology C2"
    },
    {
      "id": "adj_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the subtle defect: \"His [A: brilliant] [B: but] [C: thoroughly erratic] conduct [D: were noted].\"",
      "options": [
        "A: brilliant",
        "B: but",
        "C: thoroughly erratic",
        "D: were noted - subject is singular \"conduct\"!"
      ],
      "answer": 3,
      "explanation": "\"Conduct\" is an uncountable singular noun, so the passive verb must be \"WAS noted\".",
      "sourceTip": "C2 Concord Traps"
    },
    {
      "id": "adj_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [conviction / steadfast / her / in / chancellor / the / signed / treaty / the]",
      "options": [
        "Steadfast in her conviction, the chancellor signed the treaty.",
        "The chancellor signed the treaty steadfast in her conviction.",
        "In her conviction steadfast, the chancellor signed the treaty.",
        "Signed the treaty the chancellor steadfast in her conviction."
      ],
      "answer": 0,
      "explanation": "Fronted participial/adjectival appositive clause for periodic rhetorical suspension.",
      "sourceTip": "Periodic Sentences C2"
    },
    {
      "id": "adj_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The archaeological relic was deemed to be of ______ cultural and historical significance.",
      "options": [
        "inestimable",
        "unestimate",
        "disestimated",
        "estimate-less"
      ],
      "answer": 0,
      "explanation": "\"Inestimable\" means too great or valuable to be measured.",
      "sourceTip": "High-Register Lexis C2"
    },
    {
      "id": "adj_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective describes an inherently PERIPHERAL / SECONDARY quality?",
      "options": [
        "Incidental",
        "Quintessential",
        "Constitutive",
        "Cardinal"
      ],
      "answer": 0,
      "explanation": "\"Incidental\" means occurring as a minor accompaniment. Quintessential, constitutive, and cardinal mean essential/fundamental.",
      "sourceTip": "C2 Antonymy"
    },
    {
      "id": "adj_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "His reasoning was riddled with ______ fallacies that rendered the thesis untenable.",
      "options": [
        "egregious",
        "gregarious",
        "effusive",
        "elusive"
      ],
      "answer": 0,
      "explanation": "\"Egregious\" denotes conspicuously bad or glaringly offensive errors.",
      "sourceTip": "C2 Lexical Precision"
    },
    {
      "id": "adj_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The treaty made provisions for matters financial and ecclesiastical.\"",
      "options": [
        "Correct - stylized postpositive coordination in legal and solemn prose",
        "Incorrect - adjectives must precede nouns"
      ],
      "answer": 0,
      "explanation": "Postpositive coordinate adjectives (\"matters financial and ecclesiastical\") are hallmark features of formal archaic and statutory English.",
      "sourceTip": "C2 Stylistic Inversion"
    },
    {
      "id": "adj_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She delivered an [A: impassioned], [B: erudite], and [C: deeply persuasion] [D: address].\"",
      "options": [
        "A: impassioned",
        "B: erudite",
        "C: deeply persuasion",
        "D: address"
      ],
      "answer": 2,
      "explanation": "Parallelism defect: \"persuasion\" is a noun; the coordinate series of adjectives requires \"persuasive\".",
      "sourceTip": "Syntactic Parallelism C2"
    },
    {
      "id": "adj_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Provide the adjective meaning impervious to decay or corruption: \"He possessed an (corrupt) ______ integrity.\"",
      "options": [
        "incorruptible",
        "uncorrupting",
        "discorruptible",
        "noncorrupted"
      ],
      "answer": 0,
      "explanation": "\"Incorruptible\" represents highest-register ethical characterization.",
      "sourceTip": "C2 Lexicogrammar"
    }
  ],
  "prepositions": [
    {
      "id": "prep_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the preposition of time for clock times: \"The school bell rings ______ 7:00 AM.\"",
      "options": [
        "at",
        "in",
        "on",
        "to"
      ],
      "answer": 0,
      "explanation": "Exact clock times take \"at\": \"at 7:00 AM\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "prep_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Days)",
      "skillTested": "Producing",
      "question": "Insert the preposition for days: \"We do not have classes (in / on) ______ Sunday.\"",
      "options": [
        "on",
        "in",
        "at",
        "by"
      ],
      "answer": 0,
      "explanation": "Days of the week take \"on\": \"on Sunday\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "prep_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"My birthday is in 15th August.\"",
      "options": [
        "Correct",
        "Incorrect - specific dates take \"on\" (\"on 15th August\")"
      ],
      "answer": 1,
      "explanation": "Specific calendar dates take \"on\", while months alone take \"in\": \"on 15th August\" vs \"in August\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "prep_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which phrase takes the preposition \"IN\"?",
      "options": [
        "in July",
        "at Monday",
        "on 5 o'clock",
        "at 2026"
      ],
      "answer": 0,
      "explanation": "Months take \"in\" (\"in July\"). Days take on; clock times take at; years take in.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "prep_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The cat is sleeping ______ the kitchen table.",
      "options": [
        "under",
        "between",
        "during",
        "since"
      ],
      "answer": 0,
      "explanation": "Locative preposition indicating beneath: \"under the table\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "prep_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she / lives / Siem Reap / in]",
      "options": [
        "She lives in Siem Reap.",
        "She in Siem Reap lives.",
        "Siem Reap in she lives.",
        "Lives she in Siem Reap."
      ],
      "answer": 0,
      "explanation": "Cities and countries take \"in\": \"lives in Siem Reap\".",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "prep_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"We [A: usually] [B: go to] school [C: on] [D: the morning].\"",
      "options": [
        "A: usually",
        "B: go to",
        "C: on",
        "D: the morning"
      ],
      "answer": 2,
      "explanation": "Parts of the day take \"in\": \"IN the morning\" (except \"at night\").",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "prep_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the night expression: \"______ night\"",
      "options": [
        "At night",
        "In night",
        "On night",
        "To night"
      ],
      "answer": 0,
      "explanation": "The fixed expression is \"at night\".",
      "sourceTip": "Elementary Collocations"
    },
    {
      "id": "prep_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The book is on the desk.\"",
      "options": [
        "Correct - \"on\" indicates surface contact",
        "Incorrect - say \"in the desk\""
      ],
      "answer": 0,
      "explanation": "\"On\" correctly indicates resting on top of a surface.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "prep_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Years)",
      "skillTested": "Producing",
      "question": "Insert preposition for years: \"Angkor Wat was built (in / at) ______ the 12th century.\"",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "answer": 0,
      "explanation": "Centuries and years take \"in\": \"in the 12th century\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "prep_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The children walked ______ the bridge to reach the other side.",
      "options": [
        "across",
        "between",
        "underneath",
        "into"
      ],
      "answer": 0,
      "explanation": "\"Across\" denotes movement from one side of a surface to the opposite side.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "prep_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a PREPOSITION OF MOVEMENT?",
      "options": [
        "Into",
        "Under",
        "At",
        "On"
      ],
      "answer": 0,
      "explanation": "\"Into\" indicates motion towards the inside of something.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "prep_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Put the milk ______ the refrigerator, please.",
      "options": [
        "into",
        "onto",
        "across",
        "through"
      ],
      "answer": 0,
      "explanation": "Movement inside an enclosed space takes \"into\" or \"in\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "prep_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [standing / is / door / the / at / he]",
      "options": [
        "He is standing at the door.",
        "He is at standing the door.",
        "At the door standing is he.",
        "The door is standing he at."
      ],
      "answer": 0,
      "explanation": "Specific exact point takes \"at\": \"standing at the door\".",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "prep_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"They [A: arrived] [B: to] the airport [C: on] [D: time].\"",
      "options": [
        "A: arrived",
        "B: to - \"arrive\" takes \"at\" or \"in\", never \"to\"!",
        "C: on",
        "D: time"
      ],
      "answer": 1,
      "explanation": "We say \"arrive AT the airport\" or \"arrive IN a city\", never *arrive to.",
      "sourceTip": "Arrive Prepositions A1"
    },
    {
      "id": "prep_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the dependent preposition: \"She is very interested ______ world literature.\"",
      "options": [
        "in",
        "about",
        "on",
        "with"
      ],
      "answer": 0,
      "explanation": "The adjective \"interested\" takes the dependent preposition \"in\": \"interested in\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "prep_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The young boy is afraid ______ spiders and snakes.",
      "options": [
        "of",
        "with",
        "from",
        "at"
      ],
      "answer": 0,
      "explanation": "Adjective collocation: \"afraid of\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "prep_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"It depends from the weather whether we go camping.\"",
      "options": [
        "Correct",
        "Incorrect - \"depend\" takes the preposition \"on\", not \"from\""
      ],
      "answer": 1,
      "explanation": "Collocation: \"depend on\", never *depend from.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "prep_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Movement)",
      "skillTested": "Producing",
      "question": "Supply the preposition: \"The train passed (through / across) ______ the long mountain tunnel.\"",
      "options": [
        "through",
        "across",
        "over",
        "into"
      ],
      "answer": 0,
      "explanation": "\"Through\" indicates movement in 3D space with limits around it (like a tunnel).",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "prep_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: is good] [B: in] playing [C: the] [D: piano].\"",
      "options": [
        "A: is good",
        "B: in - skills take \"good AT\"!",
        "C: the",
        "D: piano"
      ],
      "answer": 1,
      "explanation": "Abilities and skills take \"good at\": \"good AT playing the piano\".",
      "sourceTip": "Good at A2"
    },
    {
      "id": "prep_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which preposition correctly completes: \"listening ______ music\"?",
      "options": [
        "to",
        "at",
        "on",
        "with"
      ],
      "answer": 0,
      "explanation": "The verb \"listen\" requires \"to\": \"listen to music\".",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "prep_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [divided / the / them / money / was / between / two / the]",
      "options": [
        "The money was divided between the two of them.",
        "Between the two of them the money was divided.",
        "The two of them was divided the money between.",
        "Was the money divided between the two of them."
      ],
      "answer": 0,
      "explanation": "\"Between\" is used for division among two entities: \"between the two\".",
      "sourceTip": "Between vs Among A2"
    },
    {
      "id": "prep_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "He jumped ______ the swimming pool to cool off.",
      "options": [
        "into",
        "onto",
        "towards",
        "through"
      ],
      "answer": 0,
      "explanation": "Motion from outside into water takes \"into\".",
      "sourceTip": "Movement A2"
    },
    {
      "id": "prep_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the adjective: \"proud\" ->",
      "options": [
        "proud of",
        "proud in",
        "proud with",
        "proud for"
      ],
      "answer": 0,
      "explanation": "Dependent preposition: \"proud of\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "prep_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The marathon runner walked across the finish line.\"",
      "options": [
        "Correct - \"across\" indicates crossing a line or boundary",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Across\" is standard for traversing lines, roads, or rivers.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "prep_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I have been living in this apartment ______ three years.",
      "options": [
        "for",
        "since",
        "during",
        "from"
      ],
      "answer": 0,
      "explanation": "\"For\" is used with a duration/period of time (\"for three years\").",
      "sourceTip": "For vs Since A2"
    },
    {
      "id": "prep_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Starting Point)",
      "skillTested": "Producing",
      "question": "Supply preposition: \"She has worked as a teacher (for / since) ______ 2018.\"",
      "options": [
        "since",
        "for",
        "during",
        "until"
      ],
      "answer": 0,
      "explanation": "\"Since\" marks the specific starting point in the past: \"since 2018\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "prep_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which phrase takes \"DURING\" rather than \"for\"?",
      "options": [
        "during the summer holiday",
        "for three months",
        "for two hours",
        "for a week"
      ],
      "answer": 0,
      "explanation": "\"During\" is followed by a known named event or noun phrase; \"for\" takes time duration numbers.",
      "sourceTip": "During vs For A2"
    },
    {
      "id": "prep_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [waited / for / station / she / at / him / the]",
      "options": [
        "She waited for him at the station.",
        "She waited at the station for him.",
        "For him she waited at the station.",
        "At the station she for him waited."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb + Dependent Prep (waited for him) + Place (at the station).",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "prep_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: apologized] [B: to] the teacher [C: with] his [D: late arrival].\"",
      "options": [
        "A: apologized",
        "B: to",
        "C: with - \"apologize FOR something\"!",
        "D: late arrival"
      ],
      "answer": 2,
      "explanation": "The preposition for the cause of apology is \"for\": \"apologized FOR his late arrival\".",
      "sourceTip": "Collocations A2"
    },
    {
      "id": "prep_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Distinguish \"between\" vs \"among\": \"The scholarship funds were distributed equally ______ the four winning schools.\"",
      "options": [
        "among",
        "between",
        "within",
        "amid"
      ],
      "answer": 0,
      "explanation": "\"Among\" is used for distribution involving more than two group members.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "prep_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She finally succeeded ______ obtaining her university degree with top honors.",
      "options": [
        "in",
        "on",
        "at",
        "to"
      ],
      "answer": 0,
      "explanation": "\"Succeed in + gerund\": \"succeeded in obtaining\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "prep_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Despite of the heavy traffic, we arrived on schedule.\"",
      "options": [
        "Correct",
        "Incorrect - \"Despite\" does NOT take \"of\" (say \"Despite the traffic\" or \"In spite of\")"
      ],
      "answer": 1,
      "explanation": "\"Despite\" takes a direct noun phrase without \"of\"; \"In spite of\" requires \"of\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "prep_b1_4",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Complex Preposition)",
      "skillTested": "Producing",
      "question": "Complete the complex preposition: \"We proceeded (in / on) ______ spite of the sudden thunderstorm.\"",
      "options": [
        "in",
        "on",
        "at",
        "with"
      ],
      "answer": 0,
      "explanation": "The fixed 3-word preposition is \"in spite of\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "prep_b1_5",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: insisted] [B: to pay] [C: for] [D: our dinner].\"",
      "options": [
        "A: insisted",
        "B: to pay - \"insist on + gerund\"!",
        "C: for",
        "D: our dinner"
      ],
      "answer": 1,
      "explanation": "\"Insist on doing something\": \"insisted ON PAYING for dinner\".",
      "sourceTip": "Dependent Prepositions B1"
    },
    {
      "id": "prep_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb takes the dependent preposition \"FROM\"?",
      "options": [
        "Prevent (prevent someone from doing something)",
        "Object",
        "Rely",
        "Accuse"
      ],
      "answer": 0,
      "explanation": "\"Prevent from\". Object takes to; rely takes on; accuse takes of.",
      "sourceTip": "Verb Patterns B1"
    },
    {
      "id": "prep_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [behalf / spoke / of / on / all / staff / she / the]",
      "options": [
        "She spoke on behalf of all the staff.",
        "On behalf of all the staff spoke she.",
        "She all the staff on behalf of spoke.",
        "All the staff spoke she on behalf of."
      ],
      "answer": 0,
      "explanation": "Complex prepositional idiom: \"on behalf of all the staff\".",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "prep_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The detective accused the suspect ______ embezzling state treasury funds.",
      "options": [
        "of",
        "for",
        "with",
        "about"
      ],
      "answer": 0,
      "explanation": "Collocation: \"accuse someone OF a crime\".",
      "sourceTip": "B1 Collocations"
    },
    {
      "id": "prep_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the adjective: \"capable\" ->",
      "options": [
        "capable of",
        "capable with",
        "capable to",
        "capable for"
      ],
      "answer": 0,
      "explanation": "\"Capable of + gerund\": \"capable of winning\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "prep_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The meeting will take place at Monday afternoon.\"",
      "options": [
        "Correct",
        "Incorrect - specific days and parts of days take \"on\" (\"on Monday afternoon\")"
      ],
      "answer": 1,
      "explanation": "When a day name modifies a time of day, use \"on\": \"ON Monday afternoon\".",
      "sourceTip": "Time Prepositions B1"
    },
    {
      "id": "prep_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Due ______ unexpected engine trouble, the flight was delayed by four hours.",
      "options": [
        "to",
        "of",
        "for",
        "with"
      ],
      "answer": 0,
      "explanation": "\"Due to + noun\" expresses causation.",
      "sourceTip": "B1 Connectors"
    },
    {
      "id": "prep_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: is accused] [B: for] [C: stealing] the [D: jewelry].\"",
      "options": [
        "A: is accused",
        "B: for - should be \"OF stealing\"!",
        "C: stealing",
        "D: jewelry"
      ],
      "answer": 1,
      "explanation": "\"Accuse of\", not \"accuse for\".",
      "sourceTip": "Dependent Prepositions B1"
    },
    {
      "id": "prep_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which prepositional phrase means \"representing someone\"?",
      "options": [
        "On behalf of",
        "In front of",
        "In view of",
        "By means of"
      ],
      "answer": 0,
      "explanation": "\"On behalf of\" means acting as a representative of someone.",
      "sourceTip": "Complex Prepositions B1"
    },
    {
      "id": "prep_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply dependent preposition: \"They congratulated him (on / for) ______ winning the championship.\"",
      "options": [
        "on",
        "for",
        "with",
        "about"
      ],
      "answer": 0,
      "explanation": "\"Congratulate someone ON an achievement\".",
      "sourceTip": "Collocations B1"
    },
    {
      "id": "prep_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [she / proud / is / achievements / her / students' / of]",
      "options": [
        "She is proud of her students' achievements.",
        "She is her students' achievements proud of.",
        "Proud of her students' achievements is she.",
        "Her students' achievements she is proud of."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (is) + Adjective + Preposition (proud of) + Object.",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "prep_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Complete the formal legal phrase: \"The contract was executed ______ accordance with statutory requirements.\"",
      "options": [
        "in",
        "on",
        "at",
        "with"
      ],
      "answer": 0,
      "explanation": "\"In accordance with\" is the standard formal legal phrase.",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "prep_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ regard to your inquiry of 12th May, we are pleased to confirm your reservation.",
      "options": [
        "With",
        "In",
        "At",
        "By"
      ],
      "answer": 0,
      "explanation": "\"With regard to\" (or \"In regard to\").",
      "sourceTip": "Formal Correspondence B2"
    },
    {
      "id": "prep_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The person whom I spoke with was very knowledgeable.\"",
      "options": [
        "Correct in standard English, though formal registers prefer fronted \"The person with whom I spoke\"",
        "Completely incorrect"
      ],
      "answer": 0,
      "explanation": "Preposition stranding is standard in modern English; preposition fronting (\"with whom\") is formal.",
      "sourceTip": "Preposition Stranding B2"
    },
    {
      "id": "prep_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: has been] [B: barred] [C: to enter] the [D: competition].\"",
      "options": [
        "A: has been",
        "B: barred",
        "C: to enter - \"barred FROM entering\"!",
        "D: competition"
      ],
      "answer": 2,
      "explanation": "\"Bar someone FROM doing something\" (+ gerund).",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "prep_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Provide preposition: \"He is completely oblivious (to / of) ______ the risks involved in the venture.\"",
      "options": [
        "to",
        "of",
        "with",
        "about"
      ],
      "answer": 0,
      "explanation": "\"Oblivious to\" (or \"of\") denotes unawareness.",
      "sourceTip": "B2 Dependent Prepositions"
    },
    {
      "id": "prep_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which prepositional phrase means \"taking something into account\"?",
      "options": [
        "In light of",
        "In lieu of",
        "At the mercy of",
        "In quest of"
      ],
      "answer": 0,
      "explanation": "\"In light of\" means considering/taking into account. (\"In lieu of\" means instead of).",
      "sourceTip": "Complex Idioms B2"
    },
    {
      "id": "prep_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [accordance / acted / the / with / instructions / doctor's / in / he]",
      "options": [
        "He acted in accordance with the doctor's instructions.",
        "In accordance with the doctor's instructions he acted.",
        "He in accordance with the doctor's instructions acted.",
        "Acted he in accordance with the doctor's instructions."
      ],
      "answer": 0,
      "explanation": "Subject (He) + Verb (acted) + Complex prepositional phrase (in accordance with...).",
      "sourceTip": "B2 Syntax"
    },
    {
      "id": "prep_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The government policy proved detrimental ______ public healthcare services.",
      "options": [
        "to",
        "for",
        "with",
        "at"
      ],
      "answer": 0,
      "explanation": "\"Detrimental to\": causing harm or damage to.",
      "sourceTip": "Collocations B2"
    },
    {
      "id": "prep_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the preposition: \"exempt\" ->",
      "options": [
        "exempt from",
        "exempt to",
        "exempt with",
        "exempt of"
      ],
      "answer": 0,
      "explanation": "\"Exempt from\" (e.g., \"exempt from military service\").",
      "sourceTip": "test-english B2"
    },
    {
      "id": "prep_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The executive resigned in protest against the proposed merger.\"",
      "options": [
        "Correct - \"in protest against\" is the established fixed phrase",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"In protest against/at\" is standard formal usage.",
      "sourceTip": "British Council B2"
    },
    {
      "id": "prep_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He was acquitted ______ all charges of espionage after a six-month trial.",
      "options": [
        "of",
        "from",
        "with",
        "for"
      ],
      "answer": 0,
      "explanation": "\"Acquit someone OF charges\".",
      "sourceTip": "Legal Vocabulary B2"
    },
    {
      "id": "prep_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"The new tax [A: applies] [B: on] all [C: imported] consumer [D: goods].\"",
      "options": [
        "A: applies",
        "B: on - \"applies TO\"!",
        "C: imported",
        "D: goods"
      ],
      "answer": 1,
      "explanation": "\"Apply to\" (meaning have relevance or legal force over).",
      "sourceTip": "Collocations B2"
    },
    {
      "id": "prep_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which adjective governs the dependent preposition \"OF\"?",
      "options": [
        "Innocent (innocent of a crime)",
        "Prone",
        "Vulnerable",
        "Allergic"
      ],
      "answer": 0,
      "explanation": "\"Innocent of\". Prone to, vulnerable to, allergic to.",
      "sourceTip": "Dependent Prepositions B2"
    },
    {
      "id": "prep_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the preposition: \"The minister was compromised (by / through) ______ his association with the lobbyist.\"",
      "options": [
        "by",
        "with",
        "at",
        "on"
      ],
      "answer": 0,
      "explanation": "Agentive/instrumental cause with passive: \"compromised by his association\".",
      "sourceTip": "Passive Prepositions B2"
    },
    {
      "id": "prep_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [compromise / agreed / on / reached / both / terms / a / parties]",
      "options": [
        "Both parties reached an agreed compromise on terms.",
        "Both parties agreed on terms reached a compromise.",
        "Reached both parties a compromise agreed on terms.",
        "On terms both parties reached an agreed compromise."
      ],
      "answer": 0,
      "explanation": "Subject (Both parties) + Verb (reached) + Object (an agreed compromise on terms).",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "prep_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the formal Latinate phrase meaning \"in place of / instead of\":",
      "options": [
        "In lieu of",
        "In light of",
        "In spite of",
        "In view of"
      ],
      "answer": 0,
      "explanation": "\"In lieu of\" strictly means in place of / instead of (e.g., \"accepted shares in lieu of salary\").",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "prep_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the formal fronted preposition: \"The treaty, (under / by) ______ the terms of which trade was resumed, expired in 1914.\"",
      "options": [
        "under",
        "by",
        "on",
        "at"
      ],
      "answer": 0,
      "explanation": "\"Under the terms of which...\" is standard formal treaty language.",
      "sourceTip": "Pied-Piping C1"
    },
    {
      "id": "prep_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The proposal is [A: completely] [B: at variance] [C: to] the council's [D: stated objectives].\"",
      "options": [
        "A: completely",
        "B: at variance",
        "C: to - \"at variance WITH\"!",
        "D: stated objectives"
      ],
      "answer": 2,
      "explanation": "The fixed idiom is \"at variance WITH\" (meaning in contradiction or disagreement with).",
      "sourceTip": "Idiomatic Prepositions C1"
    },
    {
      "id": "prep_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The ambassador spoke under the aegis of the United Nations Security Council.\"",
      "options": [
        "Correct - \"under the aegis of\" means under the protection/sponsorship of",
        "Incorrect - ungrammatical idiom"
      ],
      "answer": 0,
      "explanation": "\"Under the aegis of\" is an established classical diplomatic idiom.",
      "sourceTip": "Diplomatic Register C1"
    },
    {
      "id": "prep_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [whom / to / diplomat / the / credentials / the / presented / were / bowed]",
      "options": [
        "The diplomat to whom the credentials were presented bowed.",
        "To whom the credentials were presented the diplomat bowed.",
        "The credentials to whom the diplomat were presented bowed.",
        "Bowed the diplomat to whom the credentials were presented."
      ],
      "answer": 0,
      "explanation": "Pied-piping relative clause: \"The diplomat to whom the credentials were presented bowed.\"",
      "sourceTip": "C1 Syntax"
    },
    {
      "id": "prep_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The company was deemed to be ______ violation of international trade sanctions.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "answer": 0,
      "explanation": "Legal collocation: \"in violation of\".",
      "sourceTip": "Legal English C1"
    },
    {
      "id": "prep_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which prepositional phrase means \"at intense disagreement / in bitter conflict\"?",
      "options": [
        "At loggerheads with",
        "At liberty to",
        "At the mercy of",
        "At odds with"
      ],
      "answer": 0,
      "explanation": "\"At loggerheads with\" describes a state of stubborn confrontation.",
      "sourceTip": "C1 Idioms"
    },
    {
      "id": "prep_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the formal phrase: \"with a view to\" -> what verb form follows?",
      "options": [
        "+ gerund (-ing)",
        "+ bare infinitive",
        "+ past participle",
        "+ clause with that"
      ],
      "answer": 0,
      "explanation": "\"With a view to\" is followed by a gerund: \"with a view to establishing diplomatic ties\".",
      "sourceTip": "C1 Complementation"
    },
    {
      "id": "prep_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "His actions were ______ compatible with the ethical standards expected of a public servant.",
      "options": [
        "hardly",
        "in",
        "un",
        "dis"
      ],
      "answer": 0,
      "explanation": "\"Hardly compatible with\" is a formal academic collocation.",
      "sourceTip": "Collocations C1"
    },
    {
      "id": "prep_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"They traded concessions on reciprocal basis.\"",
      "options": [
        "Incorrect - requires the preposition \"on a reciprocal basis\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "The established phrase is \"on a reciprocal basis\" (with indefinite article).",
      "sourceTip": "C1 Precision"
    },
    {
      "id": "prep_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the Latinate legal preposition meaning \"without prejudice to\":",
      "options": [
        "Salvo",
        "Coram",
        "Ultra",
        "Infra"
      ],
      "answer": 0,
      "explanation": "\"Salvo\" (from Latin salvus) is used in classical statutory English meaning \"saving / without prejudice to\".",
      "sourceTip": "C2 Legal Jurisprudence"
    },
    {
      "id": "prep_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the high-register idiom: \"The two factions remain at (loggerheads / heads) ______ over sovereign maritime rights.\"",
      "options": [
        "loggerheads",
        "crossroads",
        "headwinds",
        "crosshairs"
      ],
      "answer": 0,
      "explanation": "\"At loggerheads\" (meaning intractable dispute).",
      "sourceTip": "C2 Idiomatic English"
    },
    {
      "id": "prep_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the subtle defect: \"He was [A: exonerated] [B: for] any [C: complicity] [D: in the plot].\"",
      "options": [
        "A: exonerated",
        "B: for - \"exonerated FROM (or of)\"!",
        "C: complicity",
        "D: in the plot"
      ],
      "answer": 1,
      "explanation": "\"Exonerate from/of blame\", not *exonerate for.",
      "sourceTip": "C2 Legal Collocations"
    },
    {
      "id": "prep_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [aegis / the / under / auspices / and / council / the / of / meeting / convened / was]",
      "options": [
        "The meeting was convened under the aegis and auspices of the council.",
        "Under the aegis and auspices of the council the meeting was convened.",
        "The council was convened under the aegis and auspices of the meeting.",
        "Convened was the meeting under the aegis and auspices of the council."
      ],
      "answer": 0,
      "explanation": "High diplomatic prose style: \"under the aegis and auspices of...\".",
      "sourceTip": "C2 Diplomatic Style"
    },
    {
      "id": "prep_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The minister acted in total ______ of established parliamentary conventions.",
      "options": [
        "contravention",
        "contraventing",
        "contraventionment",
        "contraventive"
      ],
      "answer": 0,
      "explanation": "\"In contravention of\": in violation or defiance of.",
      "sourceTip": "C2 Legal Lexis"
    },
    {
      "id": "prep_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which prepositional idiom means \"in the very act of committing a crime\"?",
      "options": [
        "In flagrante delicto",
        "Sub judice",
        "Prima facie",
        "Ipso facto"
      ],
      "answer": 0,
      "explanation": "\"In flagrante delicto\" (caught red-handed).",
      "sourceTip": "Latin Legal Phrases C2"
    },
    {
      "id": "prep_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The case is currently sub ______, and public commentary is legally restricted.",
      "options": [
        "judice",
        "rosa",
        "silentio",
        "lege"
      ],
      "answer": 0,
      "explanation": "\"Sub judice\" (under judicial consideration, hence prohibited from public discussion).",
      "sourceTip": "C2 Legal English"
    },
    {
      "id": "prep_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The proceedings were conducted sub rosa, behind barred doors.\"",
      "options": [
        "Correct - \"sub rosa\" is a classical idiom meaning in secret / confidentially",
        "Incorrect - ungrammatical"
      ],
      "answer": 0,
      "explanation": "\"Sub rosa\" (under the rose) means confidentially / in secret.",
      "sourceTip": "Classical Idioms C2"
    },
    {
      "id": "prep_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the flaw: \"He [A: acted] [B: under the guise] [C: with] a neutral [D: observer].\"",
      "options": [
        "A: acted",
        "B: under the guise",
        "C: with - \"under the guise OF\"!",
        "D: observer"
      ],
      "answer": 2,
      "explanation": "\"Under the guise of...\", not *with.",
      "sourceTip": "Fixed Prepositional Idioms C2"
    },
    {
      "id": "prep_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the formal Latinate phrase: \"The judgment stands (per / pro) ______ incuriam, having overlooked binding precedent.\"",
      "options": [
        "per",
        "pro",
        "in",
        "de"
      ],
      "answer": 0,
      "explanation": "\"Per incuriam\" (through lack of care or regard for a statutory provision).",
      "sourceTip": "C2 Jurisprudence"
    }
  ],
  "conjunctions": [
    {
      "id": "conj_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the coordinating conjunction to show contrast: \"I like milk, ______ I do not like coffee.\"",
      "options": [
        "and",
        "but",
        "so",
        "or"
      ],
      "answer": 1,
      "explanation": "\"But\" connects contrasting ideas in compound sentences.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "conj_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Choose (and / or): \"Would you like coffee (and / or) ______ tea?\"",
      "options": [
        "or",
        "and",
        "but",
        "so"
      ],
      "answer": 0,
      "explanation": "\"Or\" connects alternatives or choices.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "conj_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"She stayed at home because it was raining heavily.\"",
      "options": [
        "Correct - \"because\" introduces the clause of cause/reason",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Because\" correctly explains the reason for staying home.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "conj_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a COORDINATING conjunction (FANBOYS)?",
      "options": [
        "So",
        "Because",
        "Although",
        "Since"
      ],
      "answer": 0,
      "explanation": "FANBOYS: For, And, Nor, But, Or, Yet, So. \"Because\" and \"although\" are subordinating.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "conj_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He was hungry, ______ he ate two bowls of rice.",
      "options": [
        "so",
        "but",
        "because",
        "or"
      ],
      "answer": 0,
      "explanation": "\"So\" introduces the result of being hungry.",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "conj_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [tired / was / he / he / went / so / to / bed]",
      "options": [
        "He was tired so he went to bed.",
        "So he went to bed he was tired.",
        "He went to bed so was he tired.",
        "Tired he was so went he to bed."
      ],
      "answer": 0,
      "explanation": "Cause clause (He was tired) + Conjunction (so) + Result clause (he went to bed).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "conj_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: studied hard] [B: because] she [C: wanted to] [D: pass the exam].\"",
      "options": [
        "A: studied hard",
        "B: because",
        "C: wanted to",
        "D: pass the exam - No mistake! Sentence is correct!"
      ],
      "answer": 3,
      "explanation": "The sentence is completely grammatical: \"She studied hard because she wanted to pass the exam.\"",
      "sourceTip": "Error Checking A1"
    },
    {
      "id": "conj_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match FANBOYS: What does the letter \"B\" stand for?",
      "options": [
        "But",
        "Because",
        "Before",
        "By"
      ],
      "answer": 0,
      "explanation": "In the FANBOYS acronym, B stands for \"But\".",
      "sourceTip": "Elementary Acronyms"
    },
    {
      "id": "conj_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I will call you when I arrive at the station.\"",
      "options": [
        "Correct - \"when\" introduces the time clause",
        "Incorrect - say \"when I will arrive\""
      ],
      "answer": 0,
      "explanation": "Time clauses with \"when\" take the present tense for future time.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "conj_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with (before / after): \"Wash your hands (before / after) ______ you eat dinner.\"",
      "options": [
        "before",
        "after",
        "while",
        "since"
      ],
      "answer": 0,
      "explanation": "\"Before\" indicates prior action.",
      "sourceTip": "Spelling A1"
    },
    {
      "id": "conj_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Tom is tall ______ his brother is short.",
      "options": [
        "and",
        "but",
        "or",
        "so"
      ],
      "answer": 1,
      "explanation": "Contrast between two people uses \"but\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "conj_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which conjunction connects two things that happen at the same time?",
      "options": [
        "While",
        "Before",
        "After",
        "Until"
      ],
      "answer": 0,
      "explanation": "\"While\" indicates simultaneous ongoing actions.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "conj_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Wait here ______ I come back with the tickets.",
      "options": [
        "until",
        "because",
        "so",
        "although"
      ],
      "answer": 0,
      "explanation": "\"Until\" indicates up to the point in time when an event happens.",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "conj_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [likes / apples / and / bananas / she]",
      "options": [
        "She likes apples and bananas.",
        "She likes bananas and apples.",
        "Apples and bananas she likes.",
        "She apples and bananas likes."
      ],
      "answer": 0,
      "explanation": "Subject (She) + Verb (likes) + Compound Object (apples and bananas).",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "conj_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Although [A: it was raining], [B: but] we [C: went] for [D: a walk].\"",
      "options": [
        "A: it was raining",
        "B: but - double conjunction error: do not use \"but\" with \"Although\"!",
        "C: went",
        "D: a walk"
      ],
      "answer": 1,
      "explanation": "Do not use \"Although\" and \"but\" in the same sentence: \"Although it was raining, we went for a walk.\"",
      "sourceTip": "Double Conjunction Traps A1"
    },
    {
      "id": "conj_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the correlative conjunction pair: \"You can choose ______ the red car ______ the blue one.\"",
      "options": [
        "either / or",
        "neither / or",
        "both / or",
        "either / nor"
      ],
      "answer": 0,
      "explanation": "\"Either\" pairs with \"or\" to present two alternatives.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "conj_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ he felt sick, he still went to work to finish his presentation.",
      "options": [
        "Although",
        "Because",
        "Unless",
        "So"
      ],
      "answer": 0,
      "explanation": "\"Although\" introduces concession/contrast.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "conj_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"You will fail the exam unless you do not study.\"",
      "options": [
        "Correct",
        "Incorrect - double negative: \"unless\" already means \"if... not\", so say \"unless you study\""
      ],
      "answer": 1,
      "explanation": "\"Unless\" incorporates negation; say \"unless you study\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "conj_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Correlative)",
      "skillTested": "Producing",
      "question": "Supply the partner: \"She speaks (both) ______ French and Spanish fluently.\"",
      "options": [
        "both",
        "either",
        "neither",
        "not only"
      ],
      "answer": 0,
      "explanation": "\"Both\" pairs with \"and\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "conj_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"Neither [A: my father] [B: or] my mother [C: likes] [D: spicy food].\"",
      "options": [
        "A: my father",
        "B: or - \"Neither\" pairs with \"NOR\"!",
        "C: likes",
        "D: spicy food"
      ],
      "answer": 1,
      "explanation": "\"Neither\" pairs strictly with \"nor\".",
      "sourceTip": "Correlative Pairs A2"
    },
    {
      "id": "conj_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a SUBORDINATING conjunction of condition?",
      "options": [
        "Unless",
        "And",
        "Or",
        "But"
      ],
      "answer": 0,
      "explanation": "\"Unless\" introduces conditional subordinate clauses.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "conj_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [arrived / as / as / we / called / we / soon]",
      "options": [
        "We called as soon as we arrived.",
        "As soon as we arrived we called.",
        "We arrived as soon as we called.",
        "As we arrived soon as called we."
      ],
      "answer": 0,
      "explanation": "Complex time conjunction: \"as soon as\".",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "conj_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "He worked overtime ______ he could earn extra money for his family vacation.",
      "options": [
        "so that",
        "unless",
        "although",
        "whereas"
      ],
      "answer": 0,
      "explanation": "\"So that\" expresses purpose followed by a modal clause.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "conj_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the conjunction: \"as long as\" ->",
      "options": [
        "Provided that / on the condition that",
        "At an earlier time",
        "In spite of",
        "Because of"
      ],
      "answer": 0,
      "explanation": "\"As long as\" means on the condition that.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "conj_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Take an umbrella in case it rains.\"",
      "options": [
        "Correct - \"in case\" prepares for a future contingency",
        "Incorrect - say \"in case it will rain\""
      ],
      "answer": 0,
      "explanation": "\"In case\" takes the present tense for future possibility.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "conj_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ she was tired, she smiled warmly at her guests.",
      "options": [
        "Even though",
        "Because",
        "Unless",
        "Since"
      ],
      "answer": 0,
      "explanation": "\"Even though\" emphasizes strong concession.",
      "sourceTip": "Concession A2"
    },
    {
      "id": "conj_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the partner: \"He is (not only) ______ intelligent but also extraordinarily modest.\"",
      "options": [
        "not only",
        "neither",
        "either",
        "both"
      ],
      "answer": 0,
      "explanation": "\"Not only\" pairs with \"but also\".",
      "sourceTip": "Correlatives A2"
    },
    {
      "id": "conj_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which conjunction indicates TIME sequence?",
      "options": [
        "After",
        "Though",
        "Unless",
        "Whereas"
      ],
      "answer": 0,
      "explanation": "\"After\" introduces a temporal sequence.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "conj_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [rains / we / stay / will / inside / if / it]",
      "options": [
        "If it rains, we will stay inside.",
        "We will stay inside if it rains.",
        "It rains if we will stay inside.",
        "Stay inside will we if it rains."
      ],
      "answer": 0,
      "explanation": "First conditional: \"If it rains, we will stay inside.\"",
      "sourceTip": "Conditionals A2"
    },
    {
      "id": "conj_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"I will [A: wait] here [B: until] you [C: will come] [D: back].\"",
      "options": [
        "A: wait",
        "B: until",
        "C: will come - time clauses take present tense \"come\"!",
        "D: back"
      ],
      "answer": 2,
      "explanation": "Subordinate time clauses with \"until\" do not take \"will\": \"until you come back\".",
      "sourceTip": "Time Clauses A2"
    },
    {
      "id": "conj_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Notice concord with correlatives: \"Neither the teacher nor the students ______ present in the auditorium.\"",
      "options": [
        "were",
        "was",
        "is",
        "has been"
      ],
      "answer": 0,
      "explanation": "In \"Neither... nor\", proximity concord dictates agreement with the nearer subject (\"the students were\").",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "conj_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "You can borrow my car ______ you promise to return it with a full tank of fuel.",
      "options": [
        "provided that",
        "unless",
        "despite",
        "whereas"
      ],
      "answer": 0,
      "explanation": "\"Provided that\" means on the strict condition that.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "conj_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The laboratory was understaffed; however, they completed the analysis on time.\"",
      "options": [
        "Correct - conjunctive adverb with semicolon and comma",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Conjunctive adverbs connecting independent clauses take semicolon before and comma after: \"; however,\".",
      "sourceTip": "Punctuation B1"
    },
    {
      "id": "conj_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Not only [A: the director] [B: but also] the actors [C: was] praised by [D: the critics].\"",
      "options": [
        "A: the director",
        "B: but also",
        "C: was - nearer subject is plural \"actors\", so use \"were\"!",
        "D: the critics"
      ],
      "answer": 2,
      "explanation": "Proximity concord requires \"were\" with \"actors\".",
      "sourceTip": "Correlative Concord B1"
    },
    {
      "id": "conj_b1_5",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Condition)",
      "skillTested": "Producing",
      "question": "Insert formal conditional conjunction: \"(Providing / Unless) ______ that all signatures are obtained, the treaty takes effect.\"",
      "options": [
        "Providing",
        "Unless",
        "Although",
        "Despite"
      ],
      "answer": 0,
      "explanation": "\"Providing that / Provided that\" introduces formal conditions.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "conj_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word introduces a CLAUSE OF CONTRAST?",
      "options": [
        "Whereas",
        "Because",
        "Since",
        "So that"
      ],
      "answer": 0,
      "explanation": "\"Whereas\" introduces a direct contrast between two clauses.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "conj_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [nor / he / neither / called / wrote / he]",
      "options": [
        "He neither called nor did he write.",
        "Neither he called nor wrote he.",
        "He called neither nor did he write.",
        "Nor he wrote neither he called."
      ],
      "answer": 0,
      "explanation": "Correlative negation: \"He neither called nor did he write\" (or \"He neither called nor wrote\").",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "conj_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The economy grew rapidly, ______ inflation remained remarkably low.",
      "options": [
        "while",
        "unless",
        "because",
        "in order that"
      ],
      "answer": 0,
      "explanation": "\"While\" here functions concessively meaning \"although / at the same time\".",
      "sourceTip": "B1 Concessive Connectors"
    },
    {
      "id": "conj_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the conjunctive adverb: \"Furthermore\" ->",
      "options": [
        "In addition / moreover",
        "On the contrary",
        "As a consequence",
        "In place of"
      ],
      "answer": 0,
      "explanation": "\"Furthermore\" adds supporting evidence or points.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "conj_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He failed the test, he didn't study.\"",
      "options": [
        "Incorrect - comma splice: two independent clauses joined by only a comma!",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Comma splice: two independent clauses cannot be joined by a comma alone without a coordinating conjunction (or semicolon).",
      "sourceTip": "Comma Splices B1"
    },
    {
      "id": "conj_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Some people prefer living in bustling cities, ______ others cherish the tranquility of rural villages.",
      "options": [
        "whereas",
        "since",
        "because",
        "unless"
      ],
      "answer": 0,
      "explanation": "\"Whereas\" contrasts two distinct preferences.",
      "sourceTip": "B1 Connectors"
    },
    {
      "id": "conj_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: is not only] [B: a gifted pianist] [C: but] an accomplished composer [D: as well].\"",
      "options": [
        "A: is not only",
        "B: a gifted pianist",
        "C: but - standard correlative is \"but also\", though \"but... as well\" is colloquial, in standard tests \"but also\" is required!",
        "D: as well"
      ],
      "answer": 2,
      "explanation": "Formal correlative coordination requires: \"not only... but also...\".",
      "sourceTip": "Correlative Standards B1"
    },
    {
      "id": "conj_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a CAUSAL conjunction (gives reason)?",
      "options": [
        "Inasmuch as",
        "Although",
        "Even if",
        "Unless"
      ],
      "answer": 0,
      "explanation": "\"Inasmuch as\" means since / because.",
      "sourceTip": "Causal Conjunctions B1"
    },
    {
      "id": "conj_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with the purpose conjunction: \"She wore headphones (so that / in order) ______ she would not disturb her roommate.\"",
      "options": [
        "so that",
        "in order",
        "because",
        "despite"
      ],
      "answer": 0,
      "explanation": "\"So that + modal clause\" expresses purpose.",
      "sourceTip": "Clauses of Purpose B1"
    },
    {
      "id": "conj_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [as / long / you / work / as / hard / you / will / succeed]",
      "options": [
        "As long as you work hard, you will succeed.",
        "You will succeed as long as you work hard.",
        "Work hard as long as you will succeed.",
        "As you work hard long as will you succeed."
      ],
      "answer": 0,
      "explanation": "Conditional clause: \"As long as you work hard, you will succeed.\"",
      "sourceTip": "B1 Syntax"
    },
    {
      "id": "conj_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the concessive structure with fronted adjective: \"______ the task was, they accomplished it ahead of schedule.\"",
      "options": [
        "Difficult though",
        "Although difficult",
        "Despite difficult",
        "Even though difficult"
      ],
      "answer": 0,
      "explanation": "\"Adjective + though/as + subject + verb\": \"Difficult though the task was...\".",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "conj_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The company will continue operations ______ that government subsidies remain available.",
      "options": [
        "provided",
        "unless",
        "lest",
        "despite"
      ],
      "answer": 0,
      "explanation": "\"Provided that\" introduces formal conditional necessity.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "conj_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He decided to reject the promotion, for he wished to spend more time with his children.\"",
      "options": [
        "Correct - coordinating conjunction \"for\" introducing an explanatory clause with a comma",
        "Incorrect - \"for\" cannot be a conjunction"
      ],
      "answer": 0,
      "explanation": "\"For\" is the literary coordinating conjunction of the FANBOYS family meaning \"because / seeing that\".",
      "sourceTip": "FANBOYS Literary B2"
    },
    {
      "id": "conj_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"We [A: will proceed] [B: with the project] [C: on condition] [D: unless funding is cut].\"",
      "options": [
        "A: will proceed",
        "B: with the project",
        "C: on condition",
        "D: unless funding is cut - clash of redundant conditions!"
      ],
      "answer": 3,
      "explanation": "\"On condition that\" should be followed by positive condition (\"on condition that funding is maintained\"), not \"unless\".",
      "sourceTip": "B2 Redundancy"
    },
    {
      "id": "conj_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Formal Concession)",
      "skillTested": "Producing",
      "question": "Supply the inverted concession: \"Much (as / though) ______ I respect his intellect, I find his conclusion flawed.\"",
      "options": [
        "as",
        "like",
        "with",
        "by"
      ],
      "answer": 0,
      "explanation": "\"Much as / Much though\" introduces fronted concession.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "conj_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which connector CANNOT coordinate two main clauses with only a comma?",
      "options": [
        "However",
        "And",
        "But",
        "So"
      ],
      "answer": 0,
      "explanation": "\"However\" is a conjunctive adverb and cannot coordinate with only a comma (it requires a semicolon or full stop).",
      "sourceTip": "Punctuation B2"
    },
    {
      "id": "conj_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [not / was / proposal / the / accepted / only / it / but / was / praised / also]",
      "options": [
        "Not only was the proposal accepted, but it was also praised.",
        "The proposal was not only accepted but also it was praised.",
        "Accepted was the proposal not only but it was praised also.",
        "Was the proposal not only accepted but it was also praised."
      ],
      "answer": 0,
      "explanation": "Correlative inversion: \"Not only was the proposal accepted, but it was also praised.\"",
      "sourceTip": "Correlative Inversion B2"
    },
    {
      "id": "conj_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The expedition pressed onward, ______ the blizzard grew fiercer by the hour.",
      "options": [
        "even as",
        "unless",
        "in case",
        "provided"
      ],
      "answer": 0,
      "explanation": "\"Even as\" emphasizes simultaneous ongoing dramatic occurrence.",
      "sourceTip": "B2 Narrative Connectors"
    },
    {
      "id": "conj_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the conjunction: \"lest\" -> what meaning does it convey?",
      "options": [
        "For fear that / to prevent",
        "In the same manner",
        "Since that time",
        "As a direct result"
      ],
      "answer": 0,
      "explanation": "\"Lest\" means for fear that / in order to avoid.",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "conj_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The meeting will proceed whether or not the chairman attends.\"",
      "options": [
        "Correct - \"whether or not\" expresses alternative condition",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Whether or not\" (or \"whether... or not\") introduces alternative conditions.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "conj_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She locked the confidential files in the safe ______ anyone unauthorized should see them.",
      "options": [
        "lest",
        "unless",
        "whereas",
        "while"
      ],
      "answer": 0,
      "explanation": "\"Lest + should\" expresses purpose to prevent an undesirable outcome.",
      "sourceTip": "B2 Purpose Clauses"
    },
    {
      "id": "conj_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: is neither] [B: qualified] [C: and nor] [D: experienced].\"",
      "options": [
        "A: is neither",
        "B: qualified",
        "C: and nor - \"and\" is redundant before \"nor\"!",
        "D: experienced"
      ],
      "answer": 2,
      "explanation": "Say \"neither qualified NOR experienced\", never *and nor.",
      "sourceTip": "Correlative Accuracy B2"
    },
    {
      "id": "conj_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word functions as a SUBORDINATING conjunction of concession?",
      "options": [
        "Notwithstanding that",
        "Consequently",
        "Therefore",
        "Thus"
      ],
      "answer": 0,
      "explanation": "\"Notwithstanding that\" introduces a subordinate concessive clause (the others are conjunctive adverbs of result).",
      "sourceTip": "Concessives B2"
    },
    {
      "id": "conj_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the conjunction: \"(Inasmuch / Insomuch) ______ as the evidence is inconclusive, the indictment must be dismissed.\"",
      "options": [
        "Inasmuch",
        "Insomuch",
        "Insofar",
        "Incase"
      ],
      "answer": 0,
      "explanation": "\"Inasmuch as\" means considering that / since.",
      "sourceTip": "Legal Connectors B2"
    },
    {
      "id": "conj_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [you / whether / or / agree / not / policy / this / enforced / be / will]",
      "options": [
        "Whether you agree or not, this policy will be enforced.",
        "This policy will be enforced whether you agree or not.",
        "Agree or not whether you this policy will be enforced.",
        "Enforced this policy will be whether you agree or not."
      ],
      "answer": 0,
      "explanation": "Alternative conditional clause: \"Whether you agree or not, this policy will be enforced.\"",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "conj_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the formal literary inverted conditional replacing \"If you should require further information\":",
      "options": [
        "Should you require further information",
        "Had you required further information",
        "Were you to require further information",
        "If requiring further information"
      ],
      "answer": 0,
      "explanation": "\"Should you require...\" is the established formal inversion for tentative conditions.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "conj_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the inverted third conditional: \"(Had / If) ______ the board been alerted earlier, the insolvency could have been averted.\"",
      "options": [
        "Had",
        "If",
        "Should",
        "Were"
      ],
      "answer": 0,
      "explanation": "Third conditional inversion: \"Had the board been alerted earlier...\".",
      "sourceTip": "C1 Inversion"
    },
    {
      "id": "conj_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Were [A: I was] [B: in your position], I [C: would decline] [D: the invitation].\"",
      "options": [
        "A: I was - inverted subjunctive must use \"Were I\", never *Were I was!",
        "B: in your position",
        "C: would decline",
        "D: the invitation"
      ],
      "answer": 0,
      "explanation": "Inversion replaces \"if\": \"Were I in your position\", not *Were I was.",
      "sourceTip": "Inverted Subjunctive C1"
    },
    {
      "id": "conj_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The treaty shall remain in force, save that either signatory may give six months' notice of termination.\"",
      "options": [
        "Correct - \"save that\" is a formal statutory conjunction meaning \"except that\"",
        "Incorrect - ungrammatical English"
      ],
      "answer": 0,
      "explanation": "\"Save that\" is standard classical legal/formal English meaning \"except that\".",
      "sourceTip": "Statutory Register C1"
    },
    {
      "id": "conj_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [had / we / known / never / would / we / consented / have]",
      "options": [
        "Had we known, we never would have consented.",
        "Never would we have consented had we known.",
        "We never would have consented had we known.",
        "Consented never would we have had we known."
      ],
      "answer": 0,
      "explanation": "Inverted third conditional: \"Had we known, we never would have consented.\"",
      "sourceTip": "C1 Inversion"
    },
    {
      "id": "conj_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The resolution was adopted, ______ certain delegations registered strong reservations.",
      "options": [
        "albeit",
        "despite",
        "because",
        "unless"
      ],
      "answer": 0,
      "explanation": "\"Albeit\" functions as a formal concessive conjunction/adverb meaning \"although / even though\".",
      "sourceTip": "Academic Lexis C1"
    },
    {
      "id": "conj_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which connector functions as an EXCLUSIONARY conjunction meaning \"except that\"?",
      "options": [
        "Save that",
        "Insofar as",
        "Inasmuch as",
        "Whereas"
      ],
      "answer": 0,
      "explanation": "\"Save that\" expresses exception. Insofar as / inasmuch as express degree/cause.",
      "sourceTip": "C1 Connectors"
    },
    {
      "id": "conj_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the structure: \"Adjective + as/though + subject + verb\" (e.g., \"Eloquent though he was...\"):",
      "options": [
        "Fronted concessive subordinate clause",
        "Relative clause of manner",
        "Causal clause of result",
        "Conditional clause"
      ],
      "answer": 0,
      "explanation": "Fronted concessive syntax expressing \"although he was eloquent\".",
      "sourceTip": "C1 Syntactic Analysis"
    },
    {
      "id": "conj_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He guarded the manuscript jealously, ______ it fall into unscrupulous hands.",
      "options": [
        "lest",
        "unless",
        "whereas",
        "whilst"
      ],
      "answer": 0,
      "explanation": "\"Lest + subjunctive\" (fall): \"lest it fall into unscrupulous hands\".",
      "sourceTip": "C1 Subjunctive Connectors"
    },
    {
      "id": "conj_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Be that as it may, we must proceed with the scheduled hearing.\"",
      "options": [
        "Correct - formulaic concessive discourse transition meaning \"nevertheless\"",
        "Incorrect - ungrammatical structure"
      ],
      "answer": 0,
      "explanation": "\"Be that as it may\" is an established formulaic concessive idiom.",
      "sourceTip": "Formulaic Subjunctive C1"
    },
    {
      "id": "conj_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the archaic conditional conjunction equivalent to \"if / provided that\" in Shakespearean English:",
      "options": [
        "An (or An't)",
        "Lest",
        "Save",
        "Ere"
      ],
      "answer": 0,
      "explanation": "\"An\" (or \"An it please you\") was the early modern English conjunction meaning \"if\".",
      "sourceTip": "Historical Syntax C2"
    },
    {
      "id": "conj_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Negative Coordinator)",
      "skillTested": "Producing",
      "question": "Supply the inverted coordinator: \"He gave no reason for his departure, (nor / neither) ______ did he bid farewell.\"",
      "options": [
        "nor",
        "neither",
        "or",
        "so"
      ],
      "answer": 0,
      "explanation": "\"Nor + auxiliary inversion\": \"nor did he bid farewell\".",
      "sourceTip": "C2 Negative Coordination"
    },
    {
      "id": "conj_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the subtle defect: \"Except [A: if] [B: a treaty] [C: is ratified], it [D: possesses no legal force].\"",
      "options": [
        "A: if - in formal statutory prose, say \"Unless a treaty is ratified\" or \"Except when\"!",
        "B: a treaty",
        "C: is ratified",
        "D: possesses no legal force"
      ],
      "answer": 0,
      "explanation": "\"Except if\" is colloquial; formal statutory prose demands \"Unless a treaty is ratified\".",
      "sourceTip": "C2 Statutory Precision"
    },
    {
      "id": "conj_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [may / as / be / it / that / verdict / the / stands]",
      "options": [
        "Be that as it may, the verdict stands.",
        "The verdict stands, be that as it may.",
        "That as it may be, the verdict stands.",
        "As it may be that, the verdict stands."
      ],
      "answer": 0,
      "explanation": "Classical formulaic concessive: \"Be that as it may, the verdict stands.\"",
      "sourceTip": "C2 Rhetoric"
    },
    {
      "id": "conj_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The contract is valid ______ the provisions of Clause 12 are observed in full.",
      "options": [
        "insofar as",
        "insomuch",
        "wherever",
        "whence"
      ],
      "answer": 0,
      "explanation": "\"Insofar as\" marks precise conditional applicability.",
      "sourceTip": "C2 Legal Drafting"
    },
    {
      "id": "conj_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which archaic temporal conjunction means \"BEFORE\"?",
      "options": [
        "Ere",
        "Since",
        "Whilst",
        "Whereupon"
      ],
      "answer": 0,
      "explanation": "\"Ere\" (from Old English ær) is the classical poetic conjunction meaning \"before\".",
      "sourceTip": "Archaic Conjunctions C2"
    },
    {
      "id": "conj_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He had scarce set foot upon the shore ______ the tempest broke forth with unprecedented fury.",
      "options": [
        "ere",
        "than",
        "while",
        "as"
      ],
      "answer": 0,
      "explanation": "\"Scarce... ere / when\" is high classical narrative syntax.",
      "sourceTip": "Classical Prose C2"
    },
    {
      "id": "conj_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Notwithstanding that the evidence was circumstantial, the jury convicted the defendant.\"",
      "options": [
        "Correct - \"Notwithstanding that\" is a formal compound subordinating conjunction of concession",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Notwithstanding that\" is standard high-level legal/academic concession.",
      "sourceTip": "C2 Legal Jurisprudence"
    },
    {
      "id": "conj_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Neither [A: did he call] [B: nor he wrote] [C: to explain] his [D: absence].\"",
      "options": [
        "A: did he call",
        "B: nor he wrote - second clause must also be inverted: \"nor did he write\"!",
        "C: to explain",
        "D: absence"
      ],
      "answer": 1,
      "explanation": "Parallelism in correlative negative clauses requires symmetric inversion: \"Neither did he call nor did he write\".",
      "sourceTip": "Parallel Inversion C2"
    },
    {
      "id": "conj_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the inverted counterfactual without \"if\": \"(Were / Had) ______ it not been for your prompt intervention, tragedy would have ensued.\"",
      "options": [
        "Had",
        "Were",
        "Should",
        "Could"
      ],
      "answer": 0,
      "explanation": "\"Had it not been for...\" is standard inverted counterfactual syntax.",
      "sourceTip": "Counterfactual Inversion C2"
    }
  ],
  "interjections": [
    {
      "id": "int_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which interjection expresses sudden physical pain?",
      "options": [
        "Wow!",
        "Ouch!",
        "Hey!",
        "Yay!"
      ],
      "answer": 1,
      "explanation": "\"Ouch!\" is the standard exclamation of sudden pain.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "int_a1_2",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______! Look at that shooting star in the night sky!\"",
      "options": [
        "Wow",
        "Ouch",
        "Ugh",
        "Shh"
      ],
      "answer": 0,
      "explanation": "\"Wow!\" expresses wonder, amazement, or awe.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "int_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Shh! The baby is sleeping in the next room.\"",
      "options": [
        "Correct - \"Shh\" urges silence or quietness",
        "Incorrect - interjections cannot be used in a sentence"
      ],
      "answer": 0,
      "explanation": "\"Shh!\" is an onomatopoeic interjection urging quiet.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "int_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which interjection expresses JOY or celebration?",
      "options": [
        "Yay!",
        "Ouch!",
        "Ugh!",
        "Oops!"
      ],
      "answer": 0,
      "explanation": "\"Yay!\" expresses triumph, celebration, or joy.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "int_a1_5",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [did / you / look / hey / that / see / ?]",
      "options": [
        "Hey, did you see that?",
        "Did you see that hey?",
        "See that hey did you?",
        "Hey see that you did?"
      ],
      "answer": 0,
      "explanation": "Conversational opener: \"Hey, did you see that?\".",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "int_a1_6",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Oops [A: I] [B: accidentally] [C: dropped] the [D: milk jug].\"",
      "options": [
        "A: I - missing punctuation after interjection: \"Oops! I...\" or \"Oops, I...\"",
        "B: accidentally",
        "C: dropped",
        "D: milk jug"
      ],
      "answer": 0,
      "explanation": "Interjections must be punctuated with an exclamation point or comma.",
      "sourceTip": "Punctuation A1"
    },
    {
      "id": "int_a1_7",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match: \"Oops!\" ->",
      "options": [
        "Expresses a minor accidental mistake",
        "Expresses extreme anger",
        "Calls for complete silence",
        "Shows greetings"
      ],
      "answer": 0,
      "explanation": "\"Oops!\" acknowledges an accidental spill or small mistake.",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "int_a1_8",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Select the greeting interjection: \"(Hello / Goodbye) ______! How are you today?\"",
      "options": [
        "Hello",
        "Goodbye",
        "Ouch",
        "Oops"
      ],
      "answer": 0,
      "explanation": "\"Hello!\" is the universal greeting interjection.",
      "sourceTip": "Elementary Interjections"
    },
    {
      "id": "int_a1_9",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "\"______, that spider looks scary!\"",
      "options": [
        "Eek",
        "Yay",
        "Bingo",
        "Bravo"
      ],
      "answer": 0,
      "explanation": "\"Eek!\" expresses sudden shock, fear, or alarm.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "int_a1_10",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Hurrah! Our team won the football match!\"",
      "options": [
        "Correct - \"Hurrah!\" expresses victory/triumph",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Hurrah!\" is an established exclamation of victory.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "int_a1_11",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______! Don't touch that hot stove!\"",
      "options": [
        "Hey",
        "Yay",
        "Hmm",
        "Aha"
      ],
      "answer": 0,
      "explanation": "\"Hey!\" is used to attract urgent attention or issue a warning.",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "int_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which interjection expresses DISGUST?",
      "options": [
        "Yuck!",
        "Yum!",
        "Yay!",
        "Hurrah!"
      ],
      "answer": 0,
      "explanation": "\"Yuck!\" expresses disgust. \"Yum!\" expresses deliciousness.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "int_a1_13",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the exclamation of relief: \"(Phew / Ouch) ______! That was a close call!\"",
      "options": [
        "Phew",
        "Ouch",
        "Ugh",
        "Oops"
      ],
      "answer": 0,
      "explanation": "\"Phew!\" expresses relief after suspense or danger.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "int_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [you / congratulations / graduated / on / having]",
      "options": [
        "Congratulations on having graduated!",
        "Having graduated on congratulations you!",
        "You on having graduated congratulations!",
        "Congratulations you on having graduated!"
      ],
      "answer": 0,
      "explanation": "Exclamative formula: \"Congratulations on having graduated!\".",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "int_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"Oh [A: what a] [B: beautiful] [C: sunrise] [D: is it!]\"",
      "options": [
        "A: what a",
        "B: beautiful",
        "C: sunrise",
        "D: is it! - exclamatives do not invert: \"what a beautiful sunrise it is!\""
      ],
      "answer": 3,
      "explanation": "Exclamative sentences retain normal subject-verb order: \"what a beautiful sunrise it is!\".",
      "sourceTip": "Exclamative Syntax A1"
    },
    {
      "id": "int_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What does the conversational filler \"Hmm...\" indicate?",
      "options": [
        "Thinking / contemplation before answering",
        "Sudden physical pain",
        "Victory celebration",
        "Anger"
      ],
      "answer": 0,
      "explanation": "\"Hmm\" indicates hesitation, contemplation, or reflection.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "int_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______, I didn't see you standing there!\"",
      "options": [
        "Oh",
        "Hurrah",
        "Bravo",
        "Yuck"
      ],
      "answer": 0,
      "explanation": "\"Oh!\" expresses surprise or mild startle.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "int_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Aha! I finally found where I left my car keys!\"",
      "options": [
        "Correct - \"Aha!\" expresses sudden realization or discovery",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Aha!\" marks the triumph of discovery or sudden understanding.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "int_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the applause interjection: \"(Bravo / Bah) ______! That was a magnificent violin solo!\"",
      "options": [
        "Bravo",
        "Bah",
        "Ugh",
        "Ouch"
      ],
      "answer": 0,
      "explanation": "\"Bravo!\" expresses acclaim and applause for an artistic performance.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "int_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Well [A: I] [B: am not] [C: sure about] [D: that plan].\"",
      "options": [
        "A: I - missing comma after introductory discourse interjection \"Well,\"",
        "B: am not",
        "C: sure about",
        "D: that plan"
      ],
      "answer": 0,
      "explanation": "Introductory discourse markers like \"Well,\" require a comma.",
      "sourceTip": "Punctuation A2"
    },
    {
      "id": "int_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which interjection expresses BOREDOM or FRUSTRATION?",
      "options": [
        "Ugh!",
        "Yippee!",
        "Bingo!",
        "Bravo!"
      ],
      "answer": 0,
      "explanation": "\"Ugh!\" expresses disgust, exhaustion, or frustration.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "int_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [idea / what / brilliant / a / !]",
      "options": [
        "What a brilliant idea!",
        "A brilliant idea what!",
        "Idea what a brilliant!",
        "What brilliant a idea!"
      ],
      "answer": 0,
      "explanation": "Exclamative structure: \"What a + adjective + noun!\".",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "int_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "\"______! That was a close call; the car almost hit us.\"",
      "options": [
        "Phew",
        "Yum",
        "Oops",
        "Yay"
      ],
      "answer": 0,
      "explanation": "\"Phew!\" indicates narrow escape and relief.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "int_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"Uh-huh\" ->",
      "options": [
        "Informal affirmative / agreement (\"yes\")",
        "Strong negative disagreement",
        "Call for emergency help",
        "Formal greeting"
      ],
      "answer": 0,
      "explanation": "\"Uh-huh\" is an informal affirmative response.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "int_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Gosh, this suitcase is incredibly heavy!\"",
      "options": [
        "Correct - \"Gosh\" is a mild euphemistic exclamation of surprise",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Gosh\" is a common euphemism for expressing mild surprise.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "int_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______! I told you not to touch that hot pan!\"",
      "options": [
        "See",
        "Yay",
        "Bingo",
        "Phew"
      ],
      "answer": 0,
      "explanation": "\"See!\" is used to vindicate a prior warning.",
      "sourceTip": "VOA English A2"
    },
    {
      "id": "int_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the exclamation of success: \"(Bingo / Bah) ______! That is the exact address we needed!\"",
      "options": [
        "Bingo",
        "Bah",
        "Ugh",
        "Ouch"
      ],
      "answer": 0,
      "explanation": "\"Bingo!\" announces the exact match or discovery.",
      "sourceTip": "Idioms A2"
    },
    {
      "id": "int_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which interjection is an informal greeting?",
      "options": [
        "Hi!",
        "Bah!",
        "Ouch!",
        "Ugh!"
      ],
      "answer": 0,
      "explanation": "\"Hi!\" is an informal greeting.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "int_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [luck / good / with / your / exam / !]",
      "options": [
        "Good luck with your exam!",
        "Your exam with good luck!",
        "With your exam good luck!",
        "Luck good with your exam!"
      ],
      "answer": 0,
      "explanation": "Exclamative wish formula: \"Good luck with your exam!\".",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "int_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the mistake: \"How [A: beautiful] [B: is the garden] [C: in] [D: spring!]\"",
      "options": [
        "A: beautiful",
        "B: is the garden - exclamatives do not invert: \"the garden is\"!",
        "C: in",
        "D: spring!"
      ],
      "answer": 1,
      "explanation": "\"How + adjective + subject + verb!\": \"How beautiful THE GARDEN IS in spring!\".",
      "sourceTip": "Exclamatives A2"
    },
    {
      "id": "int_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which literary interjection conveys deep sorrow, regret, or grief?",
      "options": [
        "Alas!",
        "Yippee!",
        "Aha!",
        "Phew!"
      ],
      "answer": 0,
      "explanation": "\"Alas!\" is a classical exclamation of grief, pity, or regret.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "int_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______! We have searched everywhere, but the ancient parchment is lost forever.\"",
      "options": [
        "Alas",
        "Bravo",
        "Bingo",
        "Yay"
      ],
      "answer": 0,
      "explanation": "\"Alas\" introduces tragic loss or mournful regret.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "int_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Indeed, the experimental results substantiate the initial hypothesis.\"",
      "options": [
        "Correct - \"Indeed\" functions as an emphatic affirmative discourse adverbial/interjection",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Indeed\" affirms and emphasizes agreement in formal discourse.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "int_b1_4",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the interjection of exasperation: \"(Bother / Bravo) ______! I forgot to save the document before the computer crashed!\"",
      "options": [
        "Bother",
        "Bravo",
        "Hurrah",
        "Eureka"
      ],
      "answer": 0,
      "explanation": "\"Bother!\" is a mild British exclamation of annoyance.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "int_b1_5",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Alas, [A: the valiant] knight [B: was] [C: fallen] in [D: battle.]\"",
      "options": [
        "A: the valiant",
        "B: was",
        "C: fallen - in modern English say \"had fallen\" or \"fell\"",
        "D: battle."
      ],
      "answer": 2,
      "explanation": "Say \"had fallen\" or \"fell in battle\".",
      "sourceTip": "B1 Literary Syntax"
    },
    {
      "id": "int_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which interjection is uttered upon experiencing a sudden scientific or creative discovery?",
      "options": [
        "Eureka!",
        "Alas!",
        "Bah!",
        "Ouch!"
      ],
      "answer": 0,
      "explanation": "\"Eureka!\" (from Greek heureka - \"I have found it!\") celebrates sudden creative breakthrough.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "int_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [all / after / indeed / right / you / were]",
      "options": [
        "Indeed, you were right after all.",
        "After all you were right indeed.",
        "You were right indeed after all.",
        "Right you were indeed after all."
      ],
      "answer": 0,
      "explanation": "Emphatic confirmation: \"Indeed, you were right after all.\"",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "int_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "\"______! The deadline is in twenty minutes and we haven't finished printing!\"",
      "options": [
        "Heavens",
        "Yay",
        "Bravo",
        "Bingo"
      ],
      "answer": 0,
      "explanation": "\"Heavens!\" or \"Good heavens!\" expresses shock, anxiety, or dismay.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "int_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"By all means!\" ->",
      "options": [
        "Enthusiastic permission / agreement (\"certainly\")",
        "Refusal",
        "Sympathy",
        "Disbelief"
      ],
      "answer": 0,
      "explanation": "\"By all means!\" grants polite, willing permission.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "int_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Darn it! I missed the last bus home!\"",
      "options": [
        "Correct - mild colloquial euphemism for annoyance",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Darn it!\" is a mild, acceptable colloquial euphemism.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "int_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______, let us examine the second proposition on the agenda.\"",
      "options": [
        "Now",
        "Ouch",
        "Yay",
        "Oops"
      ],
      "answer": 0,
      "explanation": "Discourse marker \"Now\" signals a transition to a new topic.",
      "sourceTip": "VOA English B1"
    },
    {
      "id": "int_b1_12",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the interjection: \"(Goodness / Yuck) ______ gracious! What an enormous library!\"",
      "options": [
        "Goodness",
        "Yuck",
        "Oops",
        "Bah"
      ],
      "answer": 0,
      "explanation": "Fixed idiom: \"Goodness gracious!\" expressing astonishment.",
      "sourceTip": "Idioms B1"
    },
    {
      "id": "int_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which phrase is an exclamation of CONDOLENCE?",
      "options": [
        "My deepest condolences!",
        "Congratulations!",
        "Hurrah!",
        "Bingo!"
      ],
      "answer": 0,
      "explanation": "\"My deepest condolences!\" expresses sympathy in bereavement.",
      "sourceTip": "Social Conventions B1"
    },
    {
      "id": "int_b1_14",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [grief / what / tragedy / alas / and / a / !]",
      "options": [
        "Alas, what a tragedy and grief!",
        "What a tragedy and grief, alas!",
        "And grief alas what a tragedy!",
        "A tragedy what alas and grief!"
      ],
      "answer": 0,
      "explanation": "Literary exclamation: \"Alas, what a tragedy and grief!\".",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "int_b1_15",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"Dear me [A: I] [B: had no idea] [C: the situation] was [D: so grave].\"",
      "options": [
        "A: I - missing comma after \"Dear me,\"",
        "B: had no idea",
        "C: the situation",
        "D: so grave"
      ],
      "answer": 0,
      "explanation": "\"Dear me,\" requires a comma before the main clause.",
      "sourceTip": "Punctuation B1"
    },
    {
      "id": "int_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What pragmatic function does \"Come off it!\" serve in British discourse?",
      "options": [
        "Rejects an assertion as exaggerated, absurd, or implausible",
        "Expresses formal agreement",
        "Invites someone to speak louder",
        "Calls for an immediate ceasefire"
      ],
      "answer": 0,
      "explanation": "\"Come off it!\" is a colloquial British interjection dismissing an absurd claim.",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "int_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______! That argument is sheer nonsense; look at the empirical data!\"",
      "options": [
        "Rubbish",
        "Bravo",
        "Hear",
        "Bingo"
      ],
      "answer": 0,
      "explanation": "\"Rubbish!\" dismisses a thesis as invalid or absurd.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "int_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Hear, hear! The minister's proposal deserves unanimous endorsement.\"",
      "options": [
        "Correct - parliamentary interjection shouting approval of a speaker's remarks",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Hear, hear!\" (shortened from \"Hear him, hear him\") expresses approval in assemblies.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "int_b2_4",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Provide the parliamentary exclamation of agreement: \"(Hear / Here) ______ hear!\"",
      "options": [
        "Hear, hear",
        "Here, here",
        "Hear, here",
        "Here, hear"
      ],
      "answer": 0,
      "explanation": "Spelled \"Hear, hear!\" (meaning \"listen to him!\").",
      "sourceTip": "Spelling Traps B2"
    },
    {
      "id": "int_b2_5",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Here, here! [A: We fully] [B: support] the [C: motion] [D: on the table].\"",
      "options": [
        "A: We fully",
        "B: support",
        "C: motion",
        "Spelled \"Here, here!\" instead of \"Hear, hear!\""
      ],
      "answer": 3,
      "explanation": "The traditional spelling is \"Hear, hear!\" (not *Here, here).",
      "sourceTip": "Parliamentary English B2"
    },
    {
      "id": "int_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which interjection functions as a PARENTHETICAL HEDGING DEVICE?",
      "options": [
        "Mind you",
        "Hurrah",
        "Bingo",
        "Yum"
      ],
      "answer": 0,
      "explanation": "\"Mind you\" cautions the listener to consider an important counter-qualification.",
      "sourceTip": "Discourse Markers B2"
    },
    {
      "id": "int_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [it / expensive / is / you / mind / a / car / luxury]",
      "options": [
        "Mind you, it is an expensive luxury car.",
        "It is an expensive luxury car, mind you.",
        "A luxury car it is expensive, mind you.",
        "Luxury car mind you it is an expensive."
      ],
      "answer": 0,
      "explanation": "Parenthetical qualification: \"Mind you, it is an expensive luxury car.\"",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "int_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "\"______! Do you expect us to believe that fabricated excuse?\"",
      "options": [
        "Come now",
        "Hurrah",
        "Bravo",
        "Yum"
      ],
      "answer": 0,
      "explanation": "\"Come now!\" urges reasonableness and challenges prevarication.",
      "sourceTip": "B2 Conversational Idioms"
    },
    {
      "id": "int_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"For heaven's sake!\" ->",
      "options": [
        "Exasperated appeal or impatience",
        "Joyful celebration",
        "Polite greeting",
        "Farewell"
      ],
      "answer": 0,
      "explanation": "Expresses exasperation or intense pleading.",
      "sourceTip": "British Council B2"
    },
    {
      "id": "int_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"So be it; if they reject our peaceful terms, war is inevitable.\"",
      "options": [
        "Correct - classical formulaic resignation / acceptance meaning \"let it be so\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"So be it\" is an established formulaic subjunctive of resignation.",
      "sourceTip": "Formulaic Subjunctive B2"
    },
    {
      "id": "int_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______, let us not jump to hasty conclusions before the forensic report arrives.\"",
      "options": [
        "Now then",
        "Oops",
        "Yuck",
        "Ouch"
      ],
      "answer": 0,
      "explanation": "\"Now then\" calms agitation and refocuses discussion.",
      "sourceTip": "Discourse B2"
    },
    {
      "id": "int_b2_12",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the warning: \"(Look / Watch) ______ out! That scaffolding is collapsing!\"",
      "options": [
        "Look",
        "Watch",
        "See",
        "Take"
      ],
      "answer": 0,
      "explanation": "Exclamative warning: \"Look out!\" or \"Watch out!\".",
      "sourceTip": "Emergency Exclamations B2"
    },
    {
      "id": "int_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which phrase is an EXCLAMATION OF IMPATIENCE?",
      "options": [
        "Get on with it!",
        "Take your time!",
        "By all means!",
        "Be my guest!"
      ],
      "answer": 0,
      "explanation": "\"Get on with it!\" urges someone to hurry or proceed without delay.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "int_b2_14",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [heaven's / for / what / on / doing / sake / you / are / earth / ?]",
      "options": [
        "For heaven's sake, what on earth are you doing?",
        "What on earth are you doing for heaven's sake?",
        "Doing what on earth are you for heaven's sake?",
        "For heaven's sake doing what on earth are you?"
      ],
      "answer": 0,
      "explanation": "Double exclamative reinforcement: \"For heaven's sake, what on earth are you doing?\".",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "int_b2_15",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the mistake: \"Well, [A: that is] [B: certainly] a [C: rather unexpected] [D: development!]\"",
      "options": [
        "A: that is",
        "B: certainly",
        "C: rather unexpected",
        "D: development! - Flawless sentence!"
      ],
      "answer": 3,
      "explanation": "The sentence is completely correct.",
      "sourceTip": "Error Checking B2"
    },
    {
      "id": "int_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze the rhetorical presentational interjection: \"Lo and behold, the missing heir stepped into the hall!\" What does it signal?",
      "options": [
        "A dramatic, unexpected revelation or turn of events",
        "An apology",
        "An imperative prohibition",
        "A concessive condition"
      ],
      "answer": 0,
      "explanation": "\"Lo and behold!\" dramatically heralds an astonishing discovery or spectacle.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "int_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Archaic Interjection)",
      "skillTested": "Producing",
      "question": "Supply the archaic exclamative: \"(Hark / Hush) ______! Didst thou not hear the nocturnal chime?\"",
      "options": [
        "Hark",
        "Hush",
        "Lo",
        "Alas"
      ],
      "answer": 0,
      "explanation": "\"Hark!\" (from Old English heorcnian) is an archaic imperative interjection meaning \"listen attentively!\".",
      "sourceTip": "Archaic Rhetoric C1"
    },
    {
      "id": "int_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Lo and behold [A: the prodigal] [B: son] [C: returned] [D: to his homeland.]\"",
      "options": [
        "A: the prodigal - missing comma after introductory interjection \"Lo and behold,\"",
        "B: son",
        "C: returned",
        "D: to his homeland."
      ],
      "answer": 0,
      "explanation": "Parenthetical interjection: \"Lo and behold, the prodigal son returned...\".",
      "sourceTip": "Punctuation C1"
    },
    {
      "id": "int_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Woe betide anyone who dares violate the sanctity of this sanctuary.\"",
      "options": [
        "Correct - archaic formulaic subjunctive curse/warning meaning \"bad fortune will come to\"",
        "Incorrect - ungrammatical English"
      ],
      "answer": 0,
      "explanation": "\"Woe betide...\" is an established classical optative/curse formula.",
      "sourceTip": "C1 Classical Idioms"
    },
    {
      "id": "int_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [woe / to / those / who / justice / pervert]",
      "options": [
        "Woe unto those who pervert justice!",
        "Those who pervert justice woe unto!",
        "Unto those who pervert justice woe!",
        "Pervert justice woe unto those who!"
      ],
      "answer": 0,
      "explanation": "Biblical/Classical exclamative formula: \"Woe unto those who pervert justice!\".",
      "sourceTip": "C1 Rhetoric"
    },
    {
      "id": "int_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "\"______! What an unprincipled breach of diplomatic etiquette!\"",
      "options": [
        "Fie",
        "Yay",
        "Bingo",
        "Yum"
      ],
      "answer": 0,
      "explanation": "\"Fie!\" is an archaic interjection expressing righteous moral indignation or disgust.",
      "sourceTip": "Literary English C1"
    },
    {
      "id": "int_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which term describes primary interjections that lack word-internal grammatical composition?",
      "options": [
        "Primary interjections (e.g. Ouch, Phew)",
        "Secondary interjections (e.g. Heavens, Heavens above)",
        "Nominal compounds",
        "Phrasal verbs"
      ],
      "answer": 0,
      "explanation": "Primary interjections are non-derived expressive vocalizations.",
      "sourceTip": "Linguistic Grammar C1"
    },
    {
      "id": "int_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"God forbid!\" ->",
      "options": [
        "Expresses fervent hope that a catastrophe does NOT occur",
        "Blessing",
        "Farewell",
        "Celebration"
      ],
      "answer": 0,
      "explanation": "Formulaic optative subjunctive wishing to ward off disaster.",
      "sourceTip": "Formulaic Expressions C1"
    },
    {
      "id": "int_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"______ forbid that such a tragedy should ever recur!\"",
      "options": [
        "Heaven",
        "World",
        "Earth",
        "Life"
      ],
      "answer": 0,
      "explanation": "\"Heaven forbid that...\" is the established formal formulaic subjunctive.",
      "sourceTip": "C1 Subjunctive Idioms"
    },
    {
      "id": "int_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Perish the thought that our sovereign institutions could fall into tyranny.\"",
      "options": [
        "Correct - formulaic subjunctive expressing absolute abhorrence of an idea",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Perish the thought\" rejects a suggestion as unthinkable.",
      "sourceTip": "C1 Formulaic Subjunctive"
    },
    {
      "id": "int_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What syntactic status do true primary interjections hold within generative clausal grammar?",
      "options": [
        "Syntactically extra-clausal parentheticals devoid of argument-structure dependency",
        "Heads of verb phrases",
        "Prepositional adjuncts",
        "Relative pro-forms"
      ],
      "answer": 0,
      "explanation": "Primary interjections are peripheral, extra-sentential expressive tokens outside clausal dependency trees.",
      "sourceTip": "Theoretical Syntax C2"
    },
    {
      "id": "int_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Archaic Oath)",
      "skillTested": "Producing",
      "question": "Supply the archaic Shakespearean exclamation: \"(Marry / Merry) ______! I never beheld such audacity!\"",
      "options": [
        "Marry",
        "Merry",
        "Mary",
        "Marie"
      ],
      "answer": 0,
      "explanation": "\"Marry!\" was an Elizabethan exclamation/oath derived from the name of the Virgin Mary.",
      "sourceTip": "Shakespearean Lexis C2"
    },
    {
      "id": "int_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the flaw: \"Alack and [A: well-a-day] [B: the kingdom] [C: were plunged] into [D: mourning].\"",
      "options": [
        "A: well-a-day",
        "B: the kingdom",
        "C: were plunged - singular \"kingdom\" takes \"WAS plunged\"!",
        "D: mourning"
      ],
      "answer": 2,
      "explanation": "Singular subject \"the kingdom\" takes \"was plunged\".",
      "sourceTip": "Archaic Concord C2"
    },
    {
      "id": "int_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [perish / the / thought / that / honor / should / die]",
      "options": [
        "Perish the thought that honor should die!",
        "That honor should die perish the thought!",
        "The thought perish that honor should die!",
        "Honor should die perish the thought that!"
      ],
      "answer": 0,
      "explanation": "Classical optative subjunctive formula: \"Perish the thought that...\".",
      "sourceTip": "Classical Rhetoric C2"
    },
    {
      "id": "int_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "\"______! What ungodly treachery is this that strikes in the night?\"",
      "options": [
        "Zounds",
        "Yay",
        "Oops",
        "Bingo"
      ],
      "answer": 0,
      "explanation": "\"Zounds!\" (archaic oath: \"God's wounds\") expresses profound indignation.",
      "sourceTip": "Historical English C2"
    },
    {
      "id": "int_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which item is an ARCHETYPE OF SECONDARY INTERJECTION?",
      "options": [
        "Good grief! (derived from standard lexical noun phrase)",
        "Ouch!",
        "Ugh!",
        "Phew!"
      ],
      "answer": 0,
      "explanation": "\"Good grief\" is a secondary interjection derived from lexical morphemes.",
      "sourceTip": "Morphological Categorization C2"
    },
    {
      "id": "int_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "\"Woe is me, for I am ______!\" cried the desolate monarch.",
      "options": [
        "undone",
        "undoing",
        "undid",
        "undone-ness"
      ],
      "answer": 0,
      "explanation": "Classical literary lamentation: \"Woe is me, for I am undone!\".",
      "sourceTip": "Biblical Syntax C2"
    },
    {
      "id": "int_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Alack the day that ever I was born!\"",
      "options": [
        "Correct - archaic Shakespearean lamentation of tragedy",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Alack the day!\" is an authentic Shakespearean tragic lamentation.",
      "sourceTip": "Elizabethan Syntax C2"
    },
    {
      "id": "int_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Out [A: upon it!] [B: I will] [C: have none of] [D: your treasonous counsel.]\"",
      "options": [
        "A: upon it!",
        "B: I will",
        "C: have none of",
        "D: your treasonous counsel. - Flawless classical dramatic idiom!"
      ],
      "answer": 3,
      "explanation": "\"Out upon it!\" is an authentic classical exclamation of condemnation.",
      "sourceTip": "C2 Drama"
    },
    {
      "id": "int_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the Shakespearean exclamation of disdain: \"(Fie / Fee) ______ on thee, false traitor!\"",
      "options": [
        "Fie",
        "Fee",
        "Foe",
        "Fum"
      ],
      "answer": 0,
      "explanation": "\"Fie on thee!\" expresses utter moral contempt.",
      "sourceTip": "Classical Rhetoric C2"
    }
  ],
  "articles": [
    {
      "id": "art_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct indefinite article based on sound: \"She has been waiting here for ______ hour.\"",
      "options": [
        "an",
        "a",
        "the",
        "Ø (no article)"
      ],
      "answer": 0,
      "explanation": "\"Hour\" begins with an unpronounced silent \"h\", producing the vowel sound /aʊə/, so it takes \"an\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "art_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Choose (a / an): \"He attends (a / an) ______ university in Phnom Penh.\"",
      "options": [
        "a",
        "an",
        "the",
        "Ø"
      ],
      "answer": 0,
      "explanation": "\"University\" begins with a consonant glide sound /j/ (\"yoo-ni-ver-si-ty\"), requiring \"a\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "art_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I bought an umbrella yesterday because of the rain.\"",
      "options": [
        "Correct - \"umbrella\" begins with a vowel sound /^/ and takes \"an\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"An umbrella\" is the correct standard indefinite article.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "art_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun takes the article \"AN\"?",
      "options": [
        "Apple",
        "Book",
        "Computer",
        "Desk"
      ],
      "answer": 0,
      "explanation": "\"Apple\" begins with vowel /æ/.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "art_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Look at ______ moon shining in the night sky.",
      "options": [
        "the",
        "a",
        "an",
        "Ø"
      ],
      "answer": 0,
      "explanation": "Unique astronomical entities take the definite article \"the\" (\"the moon\", \"the sun\").",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "art_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [cat / the / milk / drank / the]",
      "options": [
        "The cat drank the milk.",
        "The milk drank the cat.",
        "Cat the drank milk the.",
        "The drank cat the milk."
      ],
      "answer": 0,
      "explanation": "Subject (The cat) + Verb (drank) + Object (the milk).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "art_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: wants] to become [B: a] [C: engineer] at a [D: technology firm].\"",
      "options": [
        "A: wants",
        "B: a - vowel sound \"engineer\" requires \"an\"!",
        "C: engineer",
        "D: technology firm"
      ],
      "answer": 1,
      "explanation": "\"Engineer\" begins with a vowel sound /e/, requiring \"an engineer\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "art_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the article: \"European country\" ->",
      "options": [
        "A European country",
        "An European country",
        "Ø European country",
        "The all European country"
      ],
      "answer": 0,
      "explanation": "\"European\" begins with the consonant sound /j/ (\"yoo-ro-pe-an\"), taking \"a\".",
      "sourceTip": "Elementary Traps A1"
    },
    {
      "id": "art_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Cats like drinking milk.\"",
      "options": [
        "Correct - zero article with plural countables and uncountables in general statements",
        "Incorrect - say \"The cats like the milk\""
      ],
      "answer": 0,
      "explanation": "Zero article is used when talking about things or animals in general.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "art_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Select (a / an): \"It was (a / an) ______ honest mistake.\"",
      "options": [
        "an",
        "a",
        "the",
        "Ø"
      ],
      "answer": 0,
      "explanation": "\"Honest\" has a silent \"h\", so use \"an honest mistake\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "art_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I saw a dog and a cat. ______ dog was chasing the cat.",
      "options": [
        "The",
        "A",
        "An",
        "Ø"
      ],
      "answer": 0,
      "explanation": "Second mention of a previously introduced noun takes \"The\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "art_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word takes \"A\" (not \"an\")?",
      "options": [
        "House",
        "Hour",
        "Heir",
        "Honor"
      ],
      "answer": 0,
      "explanation": "\"House\" has a pronounced consonant /h/. \"Hour\", \"heir\", and \"honor\" have silent \"h\" and take \"an\".",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "art_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "We eat ______ breakfast at 7:00 AM every morning.",
      "options": [
        "Ø (no article)",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Names of general daily meals take the zero article (Ø).",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "art_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [earth / the / the / revolves / sun / around]",
      "options": [
        "The earth revolves around the sun.",
        "The sun revolves around the earth.",
        "Around the sun revolves the earth.",
        "Revolves the earth around the sun."
      ],
      "answer": 0,
      "explanation": "Unique cosmic bodies: \"The earth revolves around the sun.\"",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "art_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: plays] [B: the football] [C: every] [D: Saturday].\"",
      "options": [
        "A: plays",
        "B: the football - sports take zero article: \"plays football\"!",
        "C: every",
        "D: Saturday"
      ],
      "answer": 1,
      "explanation": "Names of sports take zero article: \"plays football\", never *plays the football.",
      "sourceTip": "Sports Articles A1"
    },
    {
      "id": "art_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which musical instrument sentence is correct?",
      "options": [
        "She plays the guitar very well.",
        "She plays guitar very well.",
        "She plays a guitar very well.",
        "She plays an guitar very well."
      ],
      "answer": 0,
      "explanation": "Musical instruments when played take the definite article \"the\": \"plays the guitar\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "art_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Mount Everest is the highest mountain in ______ Himalayas.",
      "options": [
        "the",
        "Ø",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Mountain ranges (plural) take \"the\" (\"the Himalayas\", \"the Alps\"). Individual peaks take zero article (\"Mount Everest\").",
      "sourceTip": "test-english A2"
    },
    {
      "id": "art_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The burglar was sent to the prison for three years.\"",
      "options": [
        "Correct",
        "Incorrect - institutions visited for their primary purpose take zero article (\"sent to prison\")"
      ],
      "answer": 1,
      "explanation": "Primary institutional purpose takes zero article: \"sent to prison\" (as an inmate).",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "art_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Geographical)",
      "skillTested": "Producing",
      "question": "Select (the / Ø): \"We spent our holiday in (the / Ø) ______ United Kingdom.\"",
      "options": [
        "the",
        "Ø",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Countries containing \"Kingdom\", \"States\", or \"Republic\" take \"the\": \"the United Kingdom\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "art_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"We [A: visited] [B: the Mount Fuji] [C: during our trip to] [D: Japan].\"",
      "options": [
        "A: visited",
        "B: the Mount Fuji - individual mountain peaks take zero article: \"Mount Fuji\"!",
        "C: during our trip to",
        "D: Japan"
      ],
      "answer": 1,
      "explanation": "Individual mountain peaks do not take \"the\": \"Mount Fuji\".",
      "sourceTip": "Geographical Rules A2"
    },
    {
      "id": "art_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which country name takes the definite article \"THE\"?",
      "options": [
        "Netherlands",
        "Cambodia",
        "France",
        "Japan"
      ],
      "answer": 0,
      "explanation": "Plural country names take \"the\": \"the Netherlands\", \"the Philippines\".",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "art_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [pacific / is / ocean / ocean / the / largest / the]",
      "options": [
        "The Pacific Ocean is the largest ocean.",
        "The largest ocean is the Pacific Ocean.",
        "The Pacific Ocean the largest is ocean.",
        "Largest the ocean is the Pacific Ocean."
      ],
      "answer": 0,
      "explanation": "Oceans take \"the\": \"The Pacific Ocean is the largest ocean.\"",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "art_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The children go to ______ school at 7:30 AM every morning.",
      "options": [
        "Ø (no article)",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Attending school as students takes zero article: \"go to school\".",
      "sourceTip": "Institutional Articles A2"
    },
    {
      "id": "art_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the body of water: \"Mekong River\" ->",
      "options": [
        "The Mekong River",
        "Ø Mekong River",
        "A Mekong River",
        "Some Mekong River"
      ],
      "answer": 0,
      "explanation": "Rivers always take the definite article \"the\": \"the Mekong River\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "art_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The doctor advised him to stay in bed for three days.\"",
      "options": [
        "Correct - \"in bed\" is a fixed zero article phrase for resting/sleeping",
        "Incorrect - say \"in the bed\""
      ],
      "answer": 0,
      "explanation": "\"In bed\" is an established zero article idiomatic collocation.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "art_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She was taken to ______ hospital in an ambulance after the accident.",
      "options": [
        "Ø (no article)",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "In British English, being hospitalized as a patient takes zero article: \"taken to hospital\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "art_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply article: \"(The / Ø) ______ Sahara is the largest hot desert in the world.\"",
      "options": [
        "The",
        "Ø",
        "A",
        "An"
      ],
      "answer": 0,
      "explanation": "Deserts take the definite article: \"The Sahara Desert\".",
      "sourceTip": "Deserts A2"
    },
    {
      "id": "art_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which geographical entity takes ZERO ARTICLE (Ø)?",
      "options": [
        "Lake Superior (individual lake)",
        "Amazon River",
        "Pacific Ocean",
        "Himalayas"
      ],
      "answer": 0,
      "explanation": "Individual lakes take zero article (\"Lake Superior\"). Rivers, oceans, and mountain chains take \"the\".",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "art_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [piano / she / plays / the / evening / every]",
      "options": [
        "She plays the piano every evening.",
        "Every evening she plays the piano.",
        "The piano she plays every evening.",
        "She every evening plays the piano."
      ],
      "answer": 0,
      "explanation": "Musical instruments take \"the\": \"plays the piano\".",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "art_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: travels to] [B: work] [C: by] [D: the bus] every day.\"",
      "options": [
        "A: travels to",
        "B: work",
        "C: by",
        "D: the bus - modes of travel with \"by\" take zero article: \"by bus\"!"
      ],
      "answer": 3,
      "explanation": "\"By + transport\" takes zero article: \"by bus\", \"by train\", \"by car\".",
      "sourceTip": "Transport Articles A2"
    },
    {
      "id": "art_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the sentence with correct generic reference representing a whole species:",
      "options": [
        "The blue whale is the largest mammal on Earth.",
        "A blue whale is largest mammal.",
        "Blue whale is the largest mammal.",
        "Some blue whale is largest mammal."
      ],
      "answer": 0,
      "explanation": "\"The + singular countable noun\" represents an entire biological species in formal/scientific style.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "art_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Alexander Graham Bell invented ______ telephone in 1876.",
      "options": [
        "the",
        "a",
        "an",
        "Ø"
      ],
      "answer": 0,
      "explanation": "Inventions taken as a cultural/scientific innovation take \"the\": \"invented the telephone\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "art_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The unemployment has risen sharply over the last fiscal quarter.\"",
      "options": [
        "Correct",
        "Incorrect - abstract uncountables used generally take zero article (\"Unemployment has risen\")"
      ],
      "answer": 1,
      "explanation": "General abstract concepts take zero article: \"Unemployment has risen\", not *The unemployment.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "art_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: was appointed] [B: the Chairman] of [C: the board of] [D: directors].\"",
      "options": [
        "A: was appointed",
        "B: the Chairman - unique institutional roles after \"appoint/elect\" take zero article: \"appointed Chairman\"!",
        "C: the board of",
        "D: directors"
      ],
      "answer": 1,
      "explanation": "Unique institutional positions after appoint/elect/become omit the article: \"appointed Chairman\".",
      "sourceTip": "Unique Roles B1"
    },
    {
      "id": "art_b1_5",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Generic Class)",
      "skillTested": "Producing",
      "question": "Choose (The / Ø): \"(The / Ø) ______ rich should contribute more to public infrastructure.\"",
      "options": [
        "The",
        "Ø",
        "A",
        "An"
      ],
      "answer": 0,
      "explanation": "\"The + adjective\" represents a whole collective class of people: \"The rich\".",
      "sourceTip": "The + Adjective B1"
    },
    {
      "id": "art_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun phrase takes the ZERO ARTICLE (Ø)?",
      "options": [
        "At dawn",
        "In the morning",
        "In the afternoon",
        "In the evening"
      ],
      "answer": 0,
      "explanation": "\"At dawn\", \"at dusk\", \"at noon\" take zero article.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "art_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [is / dolphin / a / highly / intelligent / the / mammal]",
      "options": [
        "The dolphin is a highly intelligent mammal.",
        "A highly intelligent mammal is the dolphin.",
        "The mammal is a highly intelligent dolphin.",
        "Dolphin the is a highly intelligent mammal."
      ],
      "answer": 0,
      "explanation": "Generic reference: \"The dolphin is a highly intelligent mammal.\"",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "art_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "We crossed ______ Alps on our rail journey from Zurich to Milan.",
      "options": [
        "the",
        "Ø",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Mountain chains take \"the\": \"the Alps\".",
      "sourceTip": "Geographical Articles B1"
    },
    {
      "id": "art_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the illness: \"have ______ flu\"",
      "options": [
        "have the flu",
        "have a flu",
        "have Ø flu",
        "have an flu"
      ],
      "answer": 0,
      "explanation": "In standard English, we say \"have the flu\" (or \"have flu\").",
      "sourceTip": "Illnesses B1"
    },
    {
      "id": "art_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"She plays chess better than anyone else in our club.\"",
      "options": [
        "Correct - board games take zero article (Ø)",
        "Incorrect - say \"plays the chess\""
      ],
      "answer": 0,
      "explanation": "Board games and sports take zero article: \"plays chess\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "art_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He went to the prison to visit ______ brother who was incarcerated there.",
      "options": [
        "his",
        "the",
        "a",
        "Ø"
      ],
      "answer": 0,
      "explanation": "When visiting a prison merely as a visitor, the building takes \"the\" (or possessive \"his brother\").",
      "sourceTip": "B1 Institutional Nuance"
    },
    {
      "id": "art_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"They [A: walked] [B: arm in the arm] [C: along] the [D: moonlit beach].\"",
      "options": [
        "A: walked",
        "B: arm in the arm - paired coordinates take zero article: \"arm in arm\"!",
        "C: along",
        "D: moonlit beach"
      ],
      "answer": 1,
      "explanation": "Binominal paired idioms omit articles: \"arm in arm\", \"hand in hand\".",
      "sourceTip": "Binominals B1"
    },
    {
      "id": "art_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which institution takes \"THE\" when visited as an external visitor rather than for primary purpose?",
      "options": [
        "The hospital (The architect visited the hospital to inspect renovations)",
        "School",
        "Church",
        "Prison"
      ],
      "answer": 0,
      "explanation": "All these institutions take \"the\" when referring specifically to the physical building rather than primary purpose.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "art_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Select: \"(The / Ø) ______ life in Victorian England was difficult for the working class.\"",
      "options": [
        "Ø",
        "The",
        "A",
        "An"
      ],
      "answer": 0,
      "explanation": "When \"life\" refers to human existence in general, it takes zero article: \"Life in Victorian England...\".",
      "sourceTip": "Abstract Articles B1"
    },
    {
      "id": "art_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [by / travelled / they / through / night / the / forest]",
      "options": [
        "They travelled through the forest by night.",
        "Through the forest they travelled by night.",
        "By night they travelled through the forest.",
        "They travelled by night through the forest."
      ],
      "answer": 0,
      "explanation": "Idiom \"by night / by day\" takes zero article: \"travelled by night\".",
      "sourceTip": "B1 Syntax"
    },
    {
      "id": "art_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct article usage for newspapers and periodicals: \"I read an editorial in ______ Times yesterday.\"",
      "options": [
        "the",
        "Ø",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Well-known newspapers take the definite article: \"The Times\", \"The Guardian\", \"The New York Times\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "art_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The cruise ship will dock in ______ Bahamas before crossing the Atlantic.",
      "options": [
        "the",
        "Ø",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Island groups (plural) take \"the\": \"the Bahamas\", \"the Canary Islands\".",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "art_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He was elected President of the Royal Geographic Society.\"",
      "options": [
        "Correct - unique elected institutional titles omit the article",
        "Incorrect - must say \"the President\""
      ],
      "answer": 0,
      "explanation": "Verbs of election/appointment omit the article before unique offices: \"elected President\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "art_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: has been studying] [B: the history of] [C: the medieval Europe] [D: for her doctorate].\"",
      "options": [
        "A: has been studying",
        "B: the history of",
        "C: the medieval Europe - continents take zero article: \"medieval Europe\"!",
        "D: for her doctorate"
      ],
      "answer": 2,
      "explanation": "Continents, even with pre-modifying adjectives, do not take \"the\": \"medieval Europe\", not *the medieval Europe.",
      "sourceTip": "Geographical Traps B2"
    },
    {
      "id": "art_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Choose (the / Ø): \"He plays (the / Ø) ______ violin in the city symphony orchestra.\"",
      "options": [
        "the",
        "Ø",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Musical instruments take \"the\": \"plays the violin\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "art_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which geographical entity takes THE DEFINITE ARTICLE?",
      "options": [
        "The Hague (city exception)",
        "Paris",
        "London",
        "Berlin"
      ],
      "answer": 0,
      "explanation": "\"The Hague\" is one of the rare cities that historically retains \"The\". Paris, London, Berlin take zero article.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "art_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [toe / inspected / head / the / doctor / from / to / him]",
      "options": [
        "The doctor inspected him from head to toe.",
        "From head to toe the doctor inspected him.",
        "The doctor from head to toe inspected him.",
        "Inspected him the doctor from head to toe."
      ],
      "answer": 0,
      "explanation": "Binominal zero article idiom: \"from head to toe\".",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "art_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The treaty was signed in ______ presence of twenty foreign dignitaries.",
      "options": [
        "the",
        "a",
        "Ø",
        "an"
      ],
      "answer": 0,
      "explanation": "Fixed formal phrase: \"in the presence of\".",
      "sourceTip": "Formal Collocations B2"
    },
    {
      "id": "art_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"go to sea\" vs \"go to the sea\". What does \"go to sea\" mean?",
      "options": [
        "To become a sailor / mariner as a profession",
        "To spend a vacation on the beach",
        "To swim in deep water",
        "To sail a yacht for an afternoon"
      ],
      "answer": 0,
      "explanation": "\"Go to sea\" (zero article) idiomatically means to take up the career of a sailor.",
      "sourceTip": "Idiomatic Semantics B2"
    },
    {
      "id": "art_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The man was accused of treason and committed to the Tower of London.\"",
      "options": [
        "Correct - historic buildings and monuments take \"The\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Historic public monuments take \"The\": \"The Tower of London\", \"The Colosseum\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "art_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ English spoken in northern regions exhibits distinctive dialectal traits.",
      "options": [
        "The",
        "Ø",
        "A",
        "An"
      ],
      "answer": 0,
      "explanation": "When a language is restricted by a post-modifying clause or participle, it takes \"The\": \"The English spoken in...\".",
      "sourceTip": "Restricted Languages B2"
    },
    {
      "id": "art_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the defect: \"He [A: is learning] [B: the French] [C: in order to] [D: study in Paris].\"",
      "options": [
        "A: is learning",
        "B: the French - languages take zero article: \"learning French\"!",
        "C: in order to",
        "D: study in Paris"
      ],
      "answer": 1,
      "explanation": "Languages in general take zero article: \"learning French\", never *learning the French.",
      "sourceTip": "Languages B2"
    },
    {
      "id": "art_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which organization takes the DEFINITE ARTICLE?",
      "options": [
        "The United Nations",
        "NATO (acronym pronounced as word)",
        "UNESCO",
        "OPEC"
      ],
      "answer": 0,
      "explanation": "Names spelled out or full institutional titles take \"The\" (\"The United Nations\"). Acronyms pronounced as single words take zero article (NATO, UNESCO).",
      "sourceTip": "Institutional Names B2"
    },
    {
      "id": "art_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with (the / Ø): \"They crossed (the / Ø) ______ Lake Geneva on a steamboat.\"",
      "options": [
        "Ø",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Lakes preceded by the word \"Lake\" take zero article: \"Lake Geneva\".",
      "sourceTip": "Geographical B2"
    },
    {
      "id": "art_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [sick / hospital / visited / he / the / the / in]",
      "options": [
        "He visited the sick in the hospital.",
        "In the hospital he visited the sick.",
        "He visited in the hospital the sick.",
        "The sick he visited in the hospital."
      ],
      "answer": 0,
      "explanation": "\"The sick\" (plural generic class) + \"in the hospital\".",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "art_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze the generic reference: \"The dodo is an extinct flightless bird.\" What does \"The dodo\" denote?",
      "options": [
        "An entire biological species viewed as an intellectual class",
        "One specific individual bird in a zoo",
        "A metaphorical idiom",
        "An indefinite bird"
      ],
      "answer": 0,
      "explanation": "\"The + singular countable\" serves as a high formal scientific representative for an entire biological taxon.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "art_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Double Article Contrast)",
      "skillTested": "Producing",
      "question": "Supply the articles: \"He was elected (Ø / the) ______ President at (the / a) ______ annual general meeting.\"",
      "options": [
        "Ø / the",
        "the / the",
        "a / an",
        "the / a"
      ],
      "answer": 0,
      "explanation": "Unique elected role takes zero article (\"elected President\"); specific meeting takes \"the\".",
      "sourceTip": "C1 Precision Syntax"
    },
    {
      "id": "art_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: was appointed] to [B: the office of] [C: the Prime Minister] [D: yesterday].\"",
      "options": [
        "A: was appointed",
        "B: the office of",
        "C: the Prime Minister - after \"the office of / title of\", omit the article: \"the office of Prime Minister\"!",
        "D: yesterday"
      ],
      "answer": 2,
      "explanation": "Idiom \"the office/post/title of Prime Minister\" omits the second article.",
      "sourceTip": "C1 Institutional Collocations"
    },
    {
      "id": "art_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"They stood face to face in silent contemplation.\"",
      "options": [
        "Correct - paired coordinate binominal phrases omit articles",
        "Incorrect - say \"the face to the face\""
      ],
      "answer": 0,
      "explanation": "Binominal paired anatomical idioms strictly omit articles: \"face to face\", \"shoulder to shoulder\".",
      "sourceTip": "Binominals C1"
    },
    {
      "id": "art_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [little / does / he / consequences / the / realize]",
      "options": [
        "Little does he realize the consequences.",
        "Does he realize little the consequences.",
        "The consequences does he little realize.",
        "Realize little does he the consequences."
      ],
      "answer": 0,
      "explanation": "Adverbial \"Little\" with negative fronting takes zero determiner: \"Little does he realize...\".",
      "sourceTip": "C1 Stylistic Inversion"
    },
    {
      "id": "art_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "He assumed the mantle of leadership in ______ wake of the geopolitical crisis.",
      "options": [
        "the",
        "a",
        "Ø",
        "an"
      ],
      "answer": 0,
      "explanation": "Fixed formal metaphor: \"in the wake of\".",
      "sourceTip": "C1 Idiomatic Lexis"
    },
    {
      "id": "art_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which title takes ZERO ARTICLE after the appositive verb \"turn\"?",
      "options": [
        "He turned traitor. (zero article)",
        "He became a teacher.",
        "She remained an architect.",
        "They elected him the leader."
      ],
      "answer": 0,
      "explanation": "\"Turn traitor / turn politician\" uses zero article after \"turn\" denoting sudden change of loyalty or profession.",
      "sourceTip": "Zero Article Nuance C1"
    },
    {
      "id": "art_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the structure: \"A lion is a dangerous animal\" vs \"The lion is an endangered species\":",
      "options": [
        "\"A lion\" generalizes by any typical specimen; \"The lion\" generalizes by the whole taxon class",
        "They are strictly identical in register",
        "Only \"The lion\" is grammatical",
        "Only \"A lion\" is grammatical"
      ],
      "answer": 0,
      "explanation": "Generic \"a\" refers to any individual exemplar; generic \"the\" refers to the abstract taxonomic category.",
      "sourceTip": "Theoretical Semantics C1"
    },
    {
      "id": "art_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The council met behind ______ closed doors to deliberate the sensitive verdict.",
      "options": [
        "Ø (no article)",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Fixed idiom: \"behind closed doors\" (zero article).",
      "sourceTip": "C1 Idiomatic Expressions"
    },
    {
      "id": "art_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Man is mortal and subject to the immutable laws of nature.\"",
      "options": [
        "Correct - \"Man\" without an article represents the human race universally in classical philosophy",
        "Incorrect - say \"The man\""
      ],
      "answer": 0,
      "explanation": "In classical philosophical prose, \"Man\" (zero article, capitalized) denotes humanity as a whole.",
      "sourceTip": "Philosophical English C1"
    },
    {
      "id": "art_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the sentence exhibiting zero article in classical rhetorical parallelism:",
      "options": [
        "Father and son stood united against the tempest.",
        "The father and the son stood united.",
        "A father and a son stood united.",
        "The father and a son stood united."
      ],
      "answer": 0,
      "explanation": "Paired coordinate kinship nouns omit articles in elevated and poetic prose: \"Father and son stood united\".",
      "sourceTip": "C2 Poetic & Classical Syntax"
    },
    {
      "id": "art_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Statutory Omission)",
      "skillTested": "Producing",
      "question": "Supply the zero article in statutory legal style: \"Notice is hereby given to (the / Ø) ______ purchaser of record.\"",
      "options": [
        "Ø",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "High statutory legal drafting regularly dispenses with articles before functional parties: \"purchaser of record\", \"landlord\", \"tenant\".",
      "sourceTip": "Statutory Drafting C2"
    },
    {
      "id": "art_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the subtle defect: \"He [A: was sentenced] [B: to the prison] [C: for the term of] [D: his natural life].\"",
      "options": [
        "A: was sentenced",
        "B: to the prison - criminal incarceration requires zero article: \"sentenced to prison\"!",
        "C: for the term of",
        "D: his natural life"
      ],
      "answer": 1,
      "explanation": "Judicial sentences omit the article: \"sentenced to prison\", not *to the prison.",
      "sourceTip": "C2 Legal Incarceration Formulas"
    },
    {
      "id": "art_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [hand / they / walked / hand / in / through / meadows / the]",
      "options": [
        "They walked hand in hand through the meadows.",
        "Hand in hand they walked through the meadows.",
        "Through the meadows they walked hand in hand.",
        "They through the meadows walked hand in hand."
      ],
      "answer": 0,
      "explanation": "Binominal zero article: \"hand in hand\".",
      "sourceTip": "C2 Stylistics"
    },
    {
      "id": "art_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The treaty was drafted in ______ haste, resulting in numerous interpretive ambiguities.",
      "options": [
        "Ø (no article)",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "\"In haste\" (or \"in great haste\") is an adverbial prepositional phrase with zero article.",
      "sourceTip": "Idiomatic Prepositionals C2"
    },
    {
      "id": "art_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which noun phrase features an INCORPORATED ZERO ARTICLE?",
      "options": [
        "Leave town (e.g. He decided to leave town)",
        "Leave the town",
        "Leave a town",
        "Leave this town"
      ],
      "answer": 0,
      "explanation": "\"Leave town\" is an idiom with an incorporated zero article.",
      "sourceTip": "Syntactic Incorporation C2"
    },
    {
      "id": "art_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The suspect was caught in ______ flagrante delicto.",
      "options": [
        "Ø (no article)",
        "the",
        "a",
        "an"
      ],
      "answer": 0,
      "explanation": "Latin legal maxims take zero English articles.",
      "sourceTip": "Latin Maxims C2"
    },
    {
      "id": "art_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Day by day and night by night, the vigilant sentinels kept watch.\"",
      "options": [
        "Correct - paired temporal reduplication takes zero article",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Day by day and night by night\" strictly takes zero article.",
      "sourceTip": "Reduplication C2"
    },
    {
      "id": "art_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: was appointed] [B: to the position of] [C: the Chief Justice] [D: of the Supreme Court].\"",
      "options": [
        "A: was appointed",
        "B: to the position of",
        "C: the Chief Justice - \"the position of Chief Justice\"!",
        "D: of the Supreme Court"
      ],
      "answer": 2,
      "explanation": "\"The position of Chief Justice\" omits the second article.",
      "sourceTip": "C2 Office Titles"
    },
    {
      "id": "art_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the formal zero-article phrase: \"(At / In) ______ close quarters, swordplay demanded extraordinary agility.\"",
      "options": [
        "At",
        "In",
        "On",
        "With"
      ],
      "answer": 0,
      "explanation": "\"At close quarters\" is the fixed zero article military/combat idiom.",
      "sourceTip": "C2 Idioms"
    }
  ],
  "tenses_present": [
    {
      "id": "t_pres_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the Present Simple for habits: \"She ______ coffee every morning at breakfast.\"",
      "options": [
        "drinks",
        "drink",
        "is drinking",
        "drinking"
      ],
      "answer": 0,
      "explanation": "Third-person singular \"She\" takes \"-s\" in the Present Simple: \"drinks\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "t_pres_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Present Simple)",
      "skillTested": "Producing",
      "question": "Conjugate the verb in brackets: \"They (live) ______ in a quiet neighborhood near the river.\"",
      "options": [
        "live",
        "lives",
        "living",
        "are live"
      ],
      "answer": 0,
      "explanation": "\"They\" takes the base form: \"live\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "t_pres_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The sun rises in the east and sets in the west.\"",
      "options": [
        "Correct - scientific and universal facts take the Present Simple",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Universal natural laws and permanent facts require the Present Simple.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "t_pres_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which time expression is typical of the PRESENT CONTINUOUS?",
      "options": [
        "Right now",
        "Every day",
        "Usually",
        "On Sundays"
      ],
      "answer": 0,
      "explanation": "\"Right now\" indicates an action in progress now. Every day, usually, on Sundays are for habits (Present Simple).",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "t_pres_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Listen! The birds ______ sweetly in the trees.",
      "options": [
        "are singing",
        "sing",
        "sings",
        "sang"
      ],
      "answer": 0,
      "explanation": "Signal word \"Listen!\" indicates action happening right now: \"are singing\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "t_pres_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [works / hospital / a / in / brother / my]",
      "options": [
        "My brother works in a hospital.",
        "My brother in a hospital works.",
        "In a hospital works my brother.",
        "Works my brother in a hospital."
      ],
      "answer": 0,
      "explanation": "Subject (My brother) + Verb (works) + Place (in a hospital).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "t_pres_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: don't] [B: work] on [C: Saturday] [D: mornings].\"",
      "options": [
        "A: don't",
        "B: work",
        "C: Saturday",
        "D: mornings"
      ],
      "answer": 0,
      "explanation": "\"She\" requires the auxiliary \"doesn't\": \"She DOESN'T work\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "t_pres_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the question form: \"Where (live / do / you)?\"",
      "options": [
        "Where do you live?",
        "Where you live?",
        "Where does you live?",
        "Where are you live?"
      ],
      "answer": 0,
      "explanation": "Interrogative: Wh-word + do + subject (you) + base verb (live)?",
      "sourceTip": "Elementary Questions A1"
    },
    {
      "id": "t_pres_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I am understanding the lesson now.\"",
      "options": [
        "Incorrect - \"understand\" is a stative verb of mental state and takes simple aspect (\"I understand\")",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Stative verbs of cognition (understand, know, realize) do not take continuous aspect: \"I understand now\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "t_pres_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Present Continuous)",
      "skillTested": "Producing",
      "question": "Form Present Continuous: \"Be quiet! The baby (sleep) ______ in the cradle.\"",
      "options": [
        "is sleeping",
        "sleeps",
        "is sleep",
        "are sleeping"
      ],
      "answer": 0,
      "explanation": "Temporary action in progress: \"is sleeping\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "t_pres_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Water ______ at 100 degrees Celsius under normal atmospheric pressure.",
      "options": [
        "boils",
        "is boiling",
        "boil",
        "boiled"
      ],
      "answer": 0,
      "explanation": "Scientific fact takes Present Simple: \"boils\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "t_pres_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb is a STATIVE verb that normally avoids the -ing form?",
      "options": [
        "Know",
        "Run",
        "Sing",
        "Dance"
      ],
      "answer": 0,
      "explanation": "\"Know\" is stative (e.g. \"I know him\", never *\"I am knowing him\").",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "t_pres_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Where is Peter? — He ______ dinner in the kitchen.",
      "options": [
        "is cooking",
        "cooks",
        "cooked",
        "cook"
      ],
      "answer": 0,
      "explanation": "Action in progress at the time of speaking: \"is cooking\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "t_pres_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [at / they / having / lunch / are / moment / the]",
      "options": [
        "They are having lunch at the moment.",
        "At the moment are they having lunch.",
        "They at the moment are having lunch.",
        "Having lunch are they at the moment."
      ],
      "answer": 0,
      "explanation": "\"At the moment\" signals Present Continuous: \"They are having lunch at the moment.\"",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "t_pres_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: is wanting] [B: to buy] [C: a new] [D: bicycle].\"",
      "options": [
        "A: is wanting - \"want\" is a stative verb: say \"He wants\"!",
        "B: to buy",
        "C: a new",
        "D: bicycle"
      ],
      "answer": 0,
      "explanation": "Stative verb \"want\" takes Present Simple: \"He wants to buy\", not *is wanting.",
      "sourceTip": "Stative Verbs A1"
    },
    {
      "id": "t_pres_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the Present Perfect for an unfinished experience in life: \"______ you ever ______ to Angkor Wat?\"",
      "options": [
        "Have / been",
        "Did / go",
        "Are / going",
        "Do / go"
      ],
      "answer": 0,
      "explanation": "\"Have you ever been...?\" asks about life experience up to the present.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "t_pres_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I ______ three emails so far this morning.",
      "options": [
        "have written",
        "wrote",
        "am writing",
        "had written"
      ],
      "answer": 0,
      "explanation": "\"So far this morning\" is an unfinished time period connecting to the present: Present Perfect \"have written\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "t_pres_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"I have lived in Phnom Penh since five years.\"",
      "options": [
        "Correct",
        "Incorrect - duration of time takes \"for\", not \"since\" (\"for five years\")"
      ],
      "answer": 1,
      "explanation": "\"For\" is used with periods/durations (five years); \"since\" takes specific points in time (since 2019).",
      "sourceTip": "British Council A2"
    },
    {
      "id": "t_pres_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Present Perfect)",
      "skillTested": "Producing",
      "question": "Conjugate: \"She (not / finish) ______ her science assignment yet.\"",
      "options": [
        "has not finished",
        "did not finish",
        "have not finished",
        "is not finishing"
      ],
      "answer": 0,
      "explanation": "\"Yet\" at the end of a negative sentence takes the Present Perfect: \"has not finished\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "t_pres_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"I [A: have visited] [B: Angkor Wat] [C: two years ago] [D: with my family].\"",
      "options": [
        "A: have visited - specific past time \"two years ago\" requires Past Simple \"visited\"!",
        "B: Angkor Wat",
        "C: two years ago",
        "D: with my family"
      ],
      "answer": 0,
      "explanation": "Specific completed past time expressions (yesterday, two years ago, in 2020) require the Past Simple, never the Present Perfect.",
      "sourceTip": "Past vs Present Perfect A2"
    },
    {
      "id": "t_pres_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which time marker pairs with the PRESENT PERFECT SIMPLE?",
      "options": [
        "Already",
        "Yesterday",
        "Last night",
        "In 1999"
      ],
      "answer": 0,
      "explanation": "\"Already\", \"yet\", \"just\", \"ever\", \"never\", \"since\", \"for\" pair with the Present Perfect.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "t_pres_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [seen / film / that / already / I / have]",
      "options": [
        "I have already seen that film.",
        "Already I have seen that film.",
        "I have seen already that film.",
        "That film I have already seen."
      ],
      "answer": 0,
      "explanation": "Adverb \"already\" sits between auxiliary and past participle: \"have already seen\".",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "t_pres_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "How long ______ your English teacher?",
      "options": [
        "have you known",
        "did you know",
        "are you knowing",
        "do you know"
      ],
      "answer": 0,
      "explanation": "\"How long have you known...?\" asks about duration from the past to the present with a stative verb.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "t_pres_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"just\" in Present Perfect ->",
      "options": [
        "Action completed a very short time ago",
        "Action that has not happened yet",
        "Action at an exact clock time",
        "Action happening right now"
      ],
      "answer": 0,
      "explanation": "\"Just\" indicates very recent completion: \"I have just arrived\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "t_pres_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The train departs at 6:30 tomorrow morning.\"",
      "options": [
        "Correct - Present Simple expresses fixed public timetables in the future",
        "Incorrect - future must use \"will\""
      ],
      "answer": 0,
      "explanation": "Official timetables, schedules, and public itineraries use the Present Simple for future time.",
      "sourceTip": "Timetable Future A2"
    },
    {
      "id": "t_pres_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "We ______ each other since our elementary school days.",
      "options": [
        "have known",
        "knew",
        "are knowing",
        "know"
      ],
      "answer": 0,
      "explanation": "Duration up to now with stative verb \"know\": \"have known\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "t_pres_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"He (already / eat) ______ lunch, so he is not hungry now.\"",
      "options": [
        "has already eaten",
        "already ate",
        "have already eaten",
        "is already eating"
      ],
      "answer": 0,
      "explanation": "Result in the present: \"has already eaten\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "t_pres_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence uses Present Simple for a TIMETABLED future event?",
      "options": [
        "The flight leaves at 9:00 AM tomorrow.",
        "I am meeting John tomorrow.",
        "It will rain tomorrow.",
        "I am going to study tomorrow."
      ],
      "answer": 0,
      "explanation": "\"The flight leaves...\" represents an official public schedule.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "t_pres_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [arrived / has / plane / the / just / ?]",
      "options": [
        "Has the plane just arrived?",
        "The plane has just arrived?",
        "Just arrived has the plane?",
        "Has just the plane arrived?"
      ],
      "answer": 0,
      "explanation": "Interrogative: Has + subject (the plane) + just + past participle (arrived)?",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "t_pres_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: has lived] in [B: London] [C: since] [D: three years].\"",
      "options": [
        "A: has lived",
        "B: London",
        "C: since - periods of duration take \"for three years\"!",
        "D: three years"
      ],
      "answer": 2,
      "explanation": "\"Since\" marks points in time (since 2021); duration takes \"for\": \"FOR three years\".",
      "sourceTip": "Since vs For A2"
    },
    {
      "id": "t_pres_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the Present Perfect Continuous for an action with evident physical results: \"Her hands are covered in paint because she ______ the kitchen.\"",
      "options": [
        "has been painting",
        "has painted",
        "painted",
        "is painting"
      ],
      "answer": 0,
      "explanation": "The continuous aspect emphasizes the ongoing physical activity that caused the present visible result.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "t_pres_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "How long ______ for the delayed train? — For over forty-five minutes!",
      "options": [
        "have you been waiting",
        "have you waited",
        "did you wait",
        "are you waiting"
      ],
      "answer": 0,
      "explanation": "Focusing on the ongoing duration of waiting up to the present: \"have you been waiting\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "t_pres_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"I have been writing ten letters this morning.\"",
      "options": [
        "Incorrect - completed quantities/numbers require the Present Perfect Simple (\"have written ten letters\")",
        "Correct"
      ],
      "answer": 0,
      "explanation": "When stating the completed quantity or number of items produced (ten letters), use the Simple aspect: \"have written\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "t_pres_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: has been knowing] him [B: since] they [C: were] [D: children].\"",
      "options": [
        "A: has been knowing - \"know\" is a stative verb and cannot take continuous aspect: \"has known\"!",
        "B: since",
        "C: were",
        "D: children"
      ],
      "answer": 0,
      "explanation": "Stative verbs cannot be used in continuous aspect: \"has known\", not *has been knowing.",
      "sourceTip": "Stative Present Perfect B1"
    },
    {
      "id": "t_pres_b1_5",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"The ground is wet because it (rain) ______ for hours.\"",
      "options": [
        "has been raining",
        "has rained",
        "is raining",
        "rained"
      ],
      "answer": 0,
      "explanation": "Ongoing process with evident present result: \"has been raining\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "t_pres_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb CANNOT be used in the Present Perfect Continuous?",
      "options": [
        "Belong (stative)",
        "Wait",
        "Work",
        "Study"
      ],
      "answer": 0,
      "explanation": "\"Belong\" is stative of ownership and takes simple aspect: \"has belonged\".",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "t_pres_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [working / here / has / she / been / morning / all]",
      "options": [
        "She has been working here all morning.",
        "She here has been working all morning.",
        "All morning she has been working here.",
        "Working here she has been all morning."
      ],
      "answer": 0,
      "explanation": "Subject (She) + has been working + Place (here) + Duration (all morning).",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "t_pres_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "As soon as he ______ at the venue, please notify the director.",
      "options": [
        "arrives",
        "will arrive",
        "is arriving",
        "has arrived"
      ],
      "answer": 0,
      "explanation": "Future time clauses with \"as soon as\" take the Present Simple (never \"will\"): \"arrives\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "t_pres_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the aspect: \"I have read that novel\" vs \"I have been reading that novel\":",
      "options": [
        "\"have read\" = completed action; \"have been reading\" = ongoing activity/process",
        "They are strictly synonymous",
        "Only \"have read\" is correct",
        "Only \"have been reading\" is correct"
      ],
      "answer": 0,
      "explanation": "Simple aspect emphasizes completion/achievement; Continuous aspect emphasizes process/duration.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "t_pres_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"When the conference will end tomorrow, we will celebrate.\"",
      "options": [
        "Incorrect - subordinate time clauses introduced by \"when\" take the present simple (\"ends\"), not \"will end\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Do not use \"will\" in temporal subordinate clauses: \"When the conference ENDS...\".",
      "sourceTip": "Time Clauses B1"
    },
    {
      "id": "t_pres_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Why are you out of breath? — Because I ______ all the way from the bus stop.",
      "options": [
        "have been running",
        "have run",
        "ran",
        "was running"
      ],
      "answer": 0,
      "explanation": "Continuous aspect highlights the physical exertion producing the present panting: \"have been running\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "t_pres_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: has been smoking] [B: twenty cigarettes] [C: today] [D: already].\"",
      "options": [
        "A: has been smoking - stated quantity \"twenty cigarettes\" requires Simple: \"has smoked\"!",
        "B: twenty cigarettes",
        "C: today",
        "D: already"
      ],
      "answer": 0,
      "explanation": "When specifying how many times or how many items (quantity), use Present Perfect Simple: \"has smoked\".",
      "sourceTip": "Quantity vs Duration B1"
    },
    {
      "id": "t_pres_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which time expression introduces a FUTURE TIME CLAUSE taking the present tense?",
      "options": [
        "The moment that...",
        "In the past",
        "Two years ago",
        "Last decade"
      ],
      "answer": 0,
      "explanation": "\"The moment that...\" introduces a subordinate time clause taking the Present Simple.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "t_pres_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"I (study) ______ French for six months, but I still struggle with pronunciation.\"",
      "options": [
        "have been studying",
        "am studying",
        "studied",
        "study"
      ],
      "answer": 0,
      "explanation": "Duration up to now: \"have been studying\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "t_pres_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [you / what / doing / been / have / morning / all / ?]",
      "options": [
        "What have you been doing all morning?",
        "All morning what have you been doing?",
        "What have doing you been all morning?",
        "Have you been doing what all morning?"
      ],
      "answer": 0,
      "explanation": "Interrogative: What + have + you + been doing + all morning?",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "t_pres_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze the stative verb dynamic shift: \"The chef ______ the soup to check the seasoning.\"",
      "options": [
        "is tasting",
        "tastes",
        "has tasted",
        "taste"
      ],
      "answer": 0,
      "explanation": "When \"taste\" denotes deliberate physical action (sampling), it functions dynamically and can take progressive -ing.",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "t_pres_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I ______ of moving to a quieter town outside the capital.",
      "options": [
        "am thinking",
        "think",
        "thought",
        "have thought"
      ],
      "answer": 0,
      "explanation": "\"Thinking of + gerund\" denotes active mental contemplation/deliberation.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "t_pres_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He is always interrupting people during staff meetings.\"",
      "options": [
        "Correct - \"always + continuous\" expresses speaker annoyance or characteristic behavior",
        "Incorrect - \"always\" must only take simple present"
      ],
      "answer": 0,
      "explanation": "Progressive with \"always / continually\" idiomatically conveys speaker exasperation or critical hyperbole.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "t_pres_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"This is the first time I [A: am seeing] [B: such] a magnificent [C: ancient] [D: temple].\"",
      "options": [
        "A: am seeing - the structure \"This is the first time...\" requires Present Perfect: \"have seen\"!",
        "B: such",
        "C: ancient",
        "D: temple"
      ],
      "answer": 0,
      "explanation": "\"This is the first/second time + Subject + Present Perfect\": \"have seen\".",
      "sourceTip": "First Time Structure B2"
    },
    {
      "id": "t_pres_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Aspect Shift)",
      "skillTested": "Producing",
      "question": "Conjugate: \"I (have) ______ lunch with the regional director tomorrow afternoon.\"",
      "options": [
        "am having",
        "have",
        "have had",
        "will have had"
      ],
      "answer": 0,
      "explanation": "\"Have\" dynamically meaning \"eat / attend a meeting\" takes continuous for future arrangement: \"am having lunch\".",
      "sourceTip": "Dynamic Shifts B2"
    },
    {
      "id": "t_pres_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb shifts meaning between stative perception and dynamic action?",
      "options": [
        "Smell (The rose smells sweet / He is smelling the rose)",
        "Arrive",
        "Destroy",
        "Construct"
      ],
      "answer": 0,
      "explanation": "\"Smell\", \"taste\", \"look\", \"feel\" shift between stative sensation and active dynamic examination.",
      "sourceTip": "Stative-Dynamic B2"
    },
    {
      "id": "t_pres_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [continually / complaining / is / he / about / workload / his]",
      "options": [
        "He is continually complaining about his workload.",
        "Continually he is complaining about his workload.",
        "About his workload he is continually complaining.",
        "He complaining is continually about his workload."
      ],
      "answer": 0,
      "explanation": "Continuous with frequency adverb: \"He is continually complaining...\".",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "t_pres_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "This is the third time the server ______ this week.",
      "options": [
        "has crashed",
        "crashes",
        "is crashing",
        "crashed"
      ],
      "answer": 0,
      "explanation": "\"This is the third time...\" requires Present Perfect Simple: \"has crashed\".",
      "sourceTip": "B2 Structures"
    },
    {
      "id": "t_pres_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"I see what you mean\" vs \"I am seeing the doctor tomorrow\":",
      "options": [
        "\"I see\" = understand (stative); \"I am seeing\" = meeting/consulting (dynamic arrangement)",
        "Both are stative",
        "Both are dynamic",
        "Only the first is correct"
      ],
      "answer": 0,
      "explanation": "Semantic shift of \"see\": mental comprehension vs scheduled appointment.",
      "sourceTip": "Semantics B2"
    },
    {
      "id": "t_pres_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The committee has been deciding on the merger proposal for months.\"",
      "options": [
        "Incorrect - \"decide\" is a punctual/achievement verb; say \"has been deliberating\" or \"has decided\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Punctual verbs (decide, break, arrive) resist continuous duration unless expressing repeated attempts; use \"has been deliberating\".",
      "sourceTip": "Punctual vs Durative B2"
    },
    {
      "id": "t_pres_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Unless the witness ______ under oath, her testimony cannot be admitted.",
      "options": [
        "testifies",
        "will testify",
        "is testifying",
        "testified"
      ],
      "answer": 0,
      "explanation": "Conditional clause with \"unless\" takes Present Simple: \"testifies\".",
      "sourceTip": "B2 Conditions"
    },
    {
      "id": "t_pres_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"She [A: is resembling] [B: her grandmother] in [C: both] appearance [D: and demeanor].\"",
      "options": [
        "A: is resembling - \"resemble\" is strictly stative: \"resembles\"!",
        "B: her grandmother",
        "C: both",
        "D: and demeanor"
      ],
      "answer": 0,
      "explanation": "\"Resemble\" is an uninflectable stative middle verb: \"resembles\", never *is resembling.",
      "sourceTip": "Stative Middle Verbs B2"
    },
    {
      "id": "t_pres_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb CANNOT be used dynamically with progressive aspect?",
      "options": [
        "Possess (ownership)",
        "Have (eating/partying)",
        "Think (contemplating)",
        "Taste (sampling)"
      ],
      "answer": 0,
      "explanation": "\"Possess\" is strictly stative and never takes progressive (*\"I am possessing a car\").",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "t_pres_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"It is essential that she (be) ______ present at the deposition.\"",
      "options": [
        "be",
        "is",
        "was",
        "are"
      ],
      "answer": 0,
      "explanation": "Mandative subjunctive with \"essential\": base form \"be\".",
      "sourceTip": "Subjunctive B2"
    },
    {
      "id": "t_pres_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [time / is / this / the / has / broken / first / promise / he / a]",
      "options": [
        "This is the first time he has broken a promise.",
        "He has broken a promise this is the first time.",
        "The first time this is he has broken a promise.",
        "A promise this is the first time he has broken."
      ],
      "answer": 0,
      "explanation": "\"This is the first time + Present Perfect\": \"This is the first time he has broken a promise.\"",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "t_pres_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze the HISTORIC PRESENT in storytelling: \"Suddenly the door flies open and this mysterious figure steps into the tavern.\" What is its rhetorical effect?",
      "options": [
        "It brings past narrative events dramatically into the immediate psychological present",
        "It denotes a future scheduled appointment",
        "It expresses habitual action",
        "It describes a hypothetical condition"
      ],
      "answer": 0,
      "explanation": "The historic present creates narrative immediacy and dramatic suspense in literary prose.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "t_pres_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate performative verb: \"I hereby (pronounce) ______ you husband and wife.\"",
      "options": [
        "pronounce",
        "am pronouncing",
        "have pronounced",
        "will pronounce"
      ],
      "answer": 0,
      "explanation": "Explicit performative speech acts executing an institutional action require the simple present: \"I hereby pronounce\".",
      "sourceTip": "Speech Acts C1"
    },
    {
      "id": "t_pres_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"I am [A: hereby resigning] [B: from my position] [C: as director] [D: of the board].\"",
      "options": [
        "A: hereby resigning - performatives take simple present: \"I hereby RESIGN\"!",
        "B: from my position",
        "C: as director",
        "D: of the board"
      ],
      "answer": 0,
      "explanation": "Performatives with \"hereby\" (resign, declare, swear) take simple present: \"I hereby resign\".",
      "sourceTip": "Performatives C1"
    },
    {
      "id": "t_pres_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The ambassador is to meet with the foreign secretary in Brussels on Thursday.\"",
      "options": [
        "Correct - \"be to + infinitive\" expresses formal diplomatic arrangement/decree",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Be to + infinitive\" is standard high-register syntax for official diplomatic schedules.",
      "sourceTip": "Official Schedules C1"
    },
    {
      "id": "t_pres_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [resign / hereby / from / I / office / public]",
      "options": [
        "I hereby resign from public office.",
        "From public office I hereby resign.",
        "Hereby I resign from public office.",
        "Resign I hereby from public office."
      ],
      "answer": 0,
      "explanation": "Performative declaration: \"I hereby resign from public office.\"",
      "sourceTip": "C1 Syntax"
    },
    {
      "id": "t_pres_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Shakespeare ______ human nature with unparalleled psychological acuity.",
      "options": [
        "portrays",
        "is portraying",
        "was portrayed",
        "has been portraying"
      ],
      "answer": 0,
      "explanation": "Literary/critical present tense discusses ongoing works of literature: \"Shakespeare portrays...\".",
      "sourceTip": "Critical Present C1"
    },
    {
      "id": "t_pres_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb is an EXPLICIT PERFORMATIVE verb?",
      "options": [
        "Declare (I declare the assembly open)",
        "Swim",
        "Contemplate",
        "Reflect"
      ],
      "answer": 0,
      "explanation": "\"Declare\" performs the act in the utterance itself (performative verb).",
      "sourceTip": "Linguistic Pragmatics C1"
    },
    {
      "id": "t_pres_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match the discourse present: \"The report states that revenue has increased.\" Why is \"states\" in the present?",
      "options": [
        "Timeless documentary present in academic citations",
        "The report is speaking right now",
        "Historic narrative fiction",
        "Future schedule"
      ],
      "answer": 0,
      "explanation": "Timeless documentary present is standard when citing texts, articles, and research reports.",
      "sourceTip": "Academic Citation C1"
    },
    {
      "id": "t_pres_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The treaty ______ that all prisoners of war shall be repatriated immediately.",
      "options": [
        "stipulates",
        "is stipulating",
        "has been stipulating",
        "stipulatedly"
      ],
      "answer": 0,
      "explanation": "Formal statutory present: \"The treaty stipulates that...\".",
      "sourceTip": "C1 Legal Lexis"
    },
    {
      "id": "t_pres_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Newton posits that an object remains at rest unless acted upon by an external force.\"",
      "options": [
        "Correct - timeless scientific/academic present",
        "Incorrect - Newton lived in the 17th century so it must be past"
      ],
      "answer": 0,
      "explanation": "Academic citation convention represents established scientific laws in the timeless present.",
      "sourceTip": "Academic Discourse C1"
    },
    {
      "id": "t_pres_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "In theoretical linguistics, what distinguishes the \"instantaneous present\" from the \"habitual present\"?",
      "options": [
        "The instantaneous present describes events synchronized precisely with the speech event (e.g. sports commentary or stage directions)",
        "It describes ancient mythology",
        "It is an archaic dialect",
        "It only occurs with negative polarity"
      ],
      "answer": 0,
      "explanation": "The instantaneous present (e.g. \"Messi passes to Iniesta and he scores!\") coincides with the moment of utterance.",
      "sourceTip": "C2 Theoretical Linguistics"
    },
    {
      "id": "t_pres_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Stage Direction)",
      "skillTested": "Producing",
      "question": "Complete the dramatic stage direction: \"Hamlet (enter) ______ carrying an unread manuscript.\"",
      "options": [
        "enters",
        "is entering",
        "entered",
        "has entered"
      ],
      "answer": 0,
      "explanation": "Theatrical stage directions strictly employ the simple present: \"Hamlet enters\".",
      "sourceTip": "Dramatic Present C2"
    },
    {
      "id": "t_pres_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"The constitution [A: provides that] sovereignty [B: resides] in the people, who [C: exercises it] [D: through representatives].\"",
      "options": [
        "A: provides that",
        "B: resides",
        "C: exercises it - antecedent \"the people\" takes plural \"exercise it\"!",
        "D: through representatives"
      ],
      "answer": 2,
      "explanation": "\"The people\" is plural: \"who EXERCISE it\", not *exercises.",
      "sourceTip": "C2 Statutory Concord"
    },
    {
      "id": "t_pres_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [enters / dagger / Macbeth / bearing / drawn / a]",
      "options": [
        "Macbeth enters, bearing a drawn dagger.",
        "Bearing a drawn dagger Macbeth enters.",
        "A drawn dagger Macbeth enters bearing.",
        "Enters Macbeth bearing a drawn dagger."
      ],
      "answer": 0,
      "explanation": "Classical theatrical present: \"Macbeth enters, bearing a drawn dagger.\"",
      "sourceTip": "C2 Drama"
    },
    {
      "id": "t_pres_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I hereby ______ that the statements submitted herein are true and accurate to the best of my knowledge.",
      "options": [
        "attest",
        "am attesting",
        "have attested",
        "attested"
      ],
      "answer": 0,
      "explanation": "Legal performative: \"I hereby attest\".",
      "sourceTip": "C2 Legal Drafting"
    },
    {
      "id": "t_pres_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb serves as an ASCRIPTIVE performative?",
      "options": [
        "Bequeath (I bequeath my estate to my daughter)",
        "Run",
        "Sing",
        "Climb"
      ],
      "answer": 0,
      "explanation": "\"Bequeath\" is a legal performative disposing of property.",
      "sourceTip": "C2 Legal Verbs"
    },
    {
      "id": "t_pres_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The philosopher argues that virtue ______ its own reward.",
      "options": [
        "is",
        "was",
        "has been",
        "being"
      ],
      "answer": 0,
      "explanation": "Timeless proverbial truth in academic discourse: \"is\".",
      "sourceTip": "Philosophical Discourse C2"
    },
    {
      "id": "t_pres_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"I name this vessel 'HMS Sovereign'.\"",
      "options": [
        "Correct - classical performative christening speech act",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Performative speech act executing the naming of a ship.",
      "sourceTip": "Speech Acts C2"
    },
    {
      "id": "t_pres_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The treaty [A: stipulates that] neither signatory [B: have] the authority to [C: deploy armaments] [D: unilaterally].\"",
      "options": [
        "A: stipulates that",
        "B: have - \"neither signatory\" requires singular \"HAS\"!",
        "C: deploy armaments",
        "D: unilaterally"
      ],
      "answer": 1,
      "explanation": "\"Neither signatory\" is singular and takes \"has\".",
      "sourceTip": "C2 Statutory Grammar"
    },
    {
      "id": "t_pres_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate performative: \"We, the jury, (find) ______ the defendant not guilty as charged.\"",
      "options": [
        "find",
        "are finding",
        "have found",
        "found"
      ],
      "answer": 0,
      "explanation": "Juridical performative verdict: \"find\".",
      "sourceTip": "C2 Jurisprudence"
    }
  ],
  "tenses_past": [
    {
      "id": "t_past_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What is the past simple of the irregular verb \"buy\"?",
      "options": [
        "bought",
        "buyed",
        "boated",
        "boughten"
      ],
      "answer": 0,
      "explanation": "\"Buy\" is irregular: past tense is \"bought\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "t_past_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate into Past Simple: \"Yesterday, she (visit) ______ her grandmother.\"",
      "options": [
        "visited",
        "visitted",
        "visiting",
        "visit"
      ],
      "answer": 0,
      "explanation": "Regular verb adds -ed: \"visited\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "t_past_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"We didn't went to the park yesterday.\"",
      "options": [
        "Incorrect - auxiliary \"didn't\" takes bare infinitive: \"didn't go\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Negative Past Simple uses \"didn't + base form\": \"didn't go\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "t_past_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb has an IRREGULAR past form?",
      "options": [
        "See (saw)",
        "Watch (watched)",
        "Clean (cleaned)",
        "Open (opened)"
      ],
      "answer": 0,
      "explanation": "\"See\" -> \"saw\" is irregular.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "t_past_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Where ______ you last night at eight o'clock?",
      "options": [
        "were",
        "was",
        "are",
        "did"
      ],
      "answer": 0,
      "explanation": "Plural/second-person \"you\" takes \"were\" in the past: \"Where were you?\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "t_past_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [saw / yesterday / an / elephant / we]",
      "options": [
        "We saw an elephant yesterday.",
        "Yesterday saw we an elephant.",
        "An elephant saw we yesterday.",
        "We yesterday an elephant saw."
      ],
      "answer": 0,
      "explanation": "Subject (We) + Past verb (saw) + Object (an elephant) + Time (yesterday).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "t_past_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Did you [A: ate] [B: dinner] [C: with] your [D: friends]?\"",
      "options": [
        "A: ate - questions with \"Did\" take base verb \"eat\"!",
        "B: dinner",
        "C: with",
        "D: friends"
      ],
      "answer": 0,
      "explanation": "Say \"Did you EAT\", not *did you ate.",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "t_past_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the past simple of \"take\":",
      "options": [
        "took",
        "taked",
        "taken",
        "taking"
      ],
      "answer": 0,
      "explanation": "\"Take\" -> \"took\".",
      "sourceTip": "Elementary Verbs A1"
    },
    {
      "id": "t_past_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"They was very happy with the results.\"",
      "options": [
        "Incorrect - plural \"They\" takes \"were\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Subject \"They\" takes \"were\": \"They WERE very happy\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "t_past_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply past form: \"He (write) ______ a letter to his penfriend last week.\"",
      "options": [
        "wrote",
        "written",
        "writed",
        "writing"
      ],
      "answer": 0,
      "explanation": "\"Write\" -> \"wrote\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "t_past_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I ______ a great movie on television last Sunday.",
      "options": [
        "watched",
        "watch",
        "was watch",
        "watching"
      ],
      "answer": 0,
      "explanation": "Past completed action takes Past Simple: \"watched\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "t_past_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb has an IDENTICAL base and past form (no change)?",
      "options": [
        "Cut (cut / cut)",
        "Eat (ate)",
        "Go (went)",
        "Drive (drove)"
      ],
      "answer": 0,
      "explanation": "\"Cut\" remains \"cut\" in the past tense.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "t_past_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She ______ a delicious chocolate cake for my birthday party.",
      "options": [
        "made",
        "maked",
        "make",
        "making"
      ],
      "answer": 0,
      "explanation": "\"Make\" -> \"made\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "t_past_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [went / bed / to / early / they / night / last]",
      "options": [
        "They went to bed early last night.",
        "Last night went they to bed early.",
        "Early to bed they went last night.",
        "They to bed went early last night."
      ],
      "answer": 0,
      "explanation": "Subject + Verb + Place + Manner + Time.",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "t_past_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"He [A: didn't] [B: knew] the [C: correct] [D: answer].\"",
      "options": [
        "A: didn't",
        "B: knew - use base form \"know\"!",
        "C: correct",
        "D: answer"
      ],
      "answer": 1,
      "explanation": "\"Didn't know\", not *didn't knew.",
      "sourceTip": "Common Traps A1"
    },
    {
      "id": "t_past_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the interrupted action: \"While I ______ dinner, the telephone ______.\"",
      "options": [
        "was cooking / rang",
        "cooked / was ringing",
        "was cooking / was ringing",
        "cooked / rang"
      ],
      "answer": 0,
      "explanation": "Ongoing background action takes Past Continuous (\"was cooking\"); the shorter interruption takes Past Simple (\"rang\").",
      "sourceTip": "test-english A2"
    },
    {
      "id": "t_past_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "What ______ at 8:00 PM last night when the lights went out?",
      "options": [
        "were you doing",
        "did you do",
        "have you done",
        "had you done"
      ],
      "answer": 0,
      "explanation": "Action in progress at a specific past point in time: \"were you doing\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "t_past_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"While he was walking home, it started to rain.\"",
      "options": [
        "Correct - past continuous background interrupted by past simple",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Standard interrupted past narrative pattern.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "t_past_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Past Continuous)",
      "skillTested": "Producing",
      "question": "Conjugate: \"The children (play) ______ in the garden when the storm began.\"",
      "options": [
        "were playing",
        "was playing",
        "played",
        "are playing"
      ],
      "answer": 0,
      "explanation": "Plural subject \"children\" takes \"were playing\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "t_past_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"While I [A: was walking] in the park, I [B: was finding] a gold [C: watch on] the [D: ground].\"",
      "options": [
        "A: was walking",
        "B: was finding - sudden discovery is a momentary event: \"found\"!",
        "C: watch on",
        "D: ground"
      ],
      "answer": 1,
      "explanation": "Sudden punctual events take Past Simple: \"found\", not *was finding.",
      "sourceTip": "Punctual Past A2"
    },
    {
      "id": "t_past_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which time conjunction typically introduces the ONGOING background clause?",
      "options": [
        "While",
        "Suddenly",
        "Then",
        "Next"
      ],
      "answer": 0,
      "explanation": "\"While\" introduces continuous background actions.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "t_past_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [reading / when / arrived / was / he / I / book / a]",
      "options": [
        "I was reading a book when he arrived.",
        "When he arrived was I reading a book.",
        "A book was I reading when he arrived.",
        "He arrived when I was reading a book."
      ],
      "answer": 0,
      "explanation": "Continuous background + when + past simple interruption.",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "t_past_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "They ______ television when the power failed.",
      "options": [
        "were watching",
        "watched",
        "was watching",
        "are watching"
      ],
      "answer": 0,
      "explanation": "\"Were watching\" (interrupted continuous).",
      "sourceTip": "test-english A2"
    },
    {
      "id": "t_past_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"used to\" in past sentences ->",
      "options": [
        "Past habit or state that no longer exists today",
        "Action happening right now",
        "Future plan",
        "Recent past with result"
      ],
      "answer": 0,
      "explanation": "\"Used to\" expresses discontinued past habits or states.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "t_past_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I used to play basketball every weekend when I was in school.\"",
      "options": [
        "Correct - discontinued past habit",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Used to play\" correctly describes a past habit.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "t_past_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He ______ live in Paris before he relocated to London.",
      "options": [
        "used to",
        "was used to",
        "is used to",
        "use to"
      ],
      "answer": 0,
      "explanation": "\"Used to + base verb\" expresses past state.",
      "sourceTip": "VOA English A2"
    },
    {
      "id": "t_past_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"At midnight, the wind (blow) ______ violently against the shutters.\"",
      "options": [
        "was blowing",
        "blew",
        "has blown",
        "had blown"
      ],
      "answer": 0,
      "explanation": "Specific ongoing moment in past: \"was blowing\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "t_past_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which irregular verb forms its past with \"-ought\"?",
      "options": [
        "Think (thought)",
        "Sing",
        "Drive",
        "Speak"
      ],
      "answer": 0,
      "explanation": "\"Think\" -> \"thought\" (-ought pattern).",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "t_past_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [sleeping / soundly / were / children / the]",
      "options": [
        "The children were sleeping soundly.",
        "Soundly were the children sleeping.",
        "Were the children sleeping soundly.",
        "The children soundly were sleeping."
      ],
      "answer": 0,
      "explanation": "Subject + were + sleeping soundly.",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "t_past_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: used to] [B: went] swimming [C: every morning] in [D: summer].\"",
      "options": [
        "A: used to",
        "B: went - \"used to\" takes bare infinitive \"go\"!",
        "C: every morning",
        "D: summer"
      ],
      "answer": 1,
      "explanation": "\"Used to GO\", not *used to went.",
      "sourceTip": "Used to Traps A2"
    },
    {
      "id": "t_past_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the Past Perfect for an earlier past action: \"When we arrived at the cinema, the movie ______.\"",
      "options": [
        "had already started",
        "already started",
        "has already started",
        "was already starting"
      ],
      "answer": 0,
      "explanation": "The earlier of two past actions requires the Past Perfect: \"had already started\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "t_past_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "He couldn't board the aircraft because he ______ his passport at home.",
      "options": [
        "had left",
        "left",
        "has left",
        "was leaving"
      ],
      "answer": 0,
      "explanation": "Action occurring prior to arriving at the airport: \"had left\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "t_past_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"By the time the fire brigade arrived, the neighbors had extinguished the flames.\"",
      "options": [
        "Correct - \"By the time + past simple\" paired with past perfect",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Action completed before a past deadline: Past Perfect \"had extinguished\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "t_past_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"When I [A: reached] the station, the [B: train] [C: already] [D: departed].\"",
      "options": [
        "A: reached",
        "B: train",
        "C: already",
        "D: departed - requires past perfect \"HAD already departed\"!"
      ],
      "answer": 3,
      "explanation": "Earlier event requires Past Perfect: \"had already departed\".",
      "sourceTip": "Past Perfect B1"
    },
    {
      "id": "t_past_b1_5",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Past Perfect Continuous)",
      "skillTested": "Producing",
      "question": "Conjugate: \"He was exhausted because he (drive) ______ for six hours without a break.\"",
      "options": [
        "had been driving",
        "was driving",
        "has been driving",
        "drove"
      ],
      "answer": 0,
      "explanation": "Duration up to a specific past moment: \"had been driving\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "t_past_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which structure CANNOT express past habit with a STATIVE verb?",
      "options": [
        "Would (e.g. He would be shy)",
        "Used to (He used to be shy)",
        "Past simple (He was shy)",
        "Past continuous"
      ],
      "answer": 0,
      "explanation": "\"Would\" for past habits cannot be used with stative verbs (be, have, live); only dynamic repeated actions.",
      "sourceTip": "Would vs Used to B1"
    },
    {
      "id": "t_past_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [already / had / they / eaten / arrived / we / when]",
      "options": [
        "They had already eaten when we arrived.",
        "When we arrived had they already eaten.",
        "Already eaten they had when we arrived.",
        "We arrived when they had already eaten."
      ],
      "answer": 0,
      "explanation": "Past perfect before past simple: \"They had already eaten when we arrived.\"",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "t_past_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "She told the police that she ______ the suspect near the bank earlier that afternoon.",
      "options": [
        "had seen",
        "saw",
        "has seen",
        "was seeing"
      ],
      "answer": 0,
      "explanation": "Reported speech backshift to earlier past: \"had seen\".",
      "sourceTip": "Backshift B1"
    },
    {
      "id": "t_past_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"By 2010\" in past narrative ->",
      "options": [
        "Past Perfect Simple (had completed)",
        "Present Perfect",
        "Past Continuous",
        "Future in the past"
      ],
      "answer": 0,
      "explanation": "\"By + past year\" typically takes the Past Perfect.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "t_past_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"As children, we would swim in the clear mountain lake every summer.\"",
      "options": [
        "Correct - \"would\" correctly expresses repeated dynamic past actions",
        "Incorrect - must use \"used to\""
      ],
      "answer": 0,
      "explanation": "\"Would swim\" is authentic storytelling style for repeated past dynamic actions.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "t_past_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The garden was completely flooded because it ______ for forty-eight hours.",
      "options": [
        "had been raining",
        "rained",
        "was raining",
        "has rained"
      ],
      "answer": 0,
      "explanation": "Continuous duration explaining a past condition: \"had been raining\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "t_past_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"When I [A: lived] in Paris, I [B: would have] a small [C: apartment near] the [D: Seine].\"",
      "options": [
        "A: lived",
        "B: would have - \"would\" cannot express past states! Say \"used to have\"!",
        "C: apartment near",
        "D: Seine"
      ],
      "answer": 1,
      "explanation": "\"Would\" cannot be used with state verbs like \"have\": say \"used to have\".",
      "sourceTip": "Would vs Used to B1"
    },
    {
      "id": "t_past_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which tense highlights DURATION leading up to a past reference point?",
      "options": [
        "Past Perfect Continuous",
        "Past Simple",
        "Past Continuous",
        "Present Perfect"
      ],
      "answer": 0,
      "explanation": "Past Perfect Continuous emphasizes ongoing duration before a past moment.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "t_past_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"Before she moved to Tokyo, she (never / study) ______ Japanese.\"",
      "options": [
        "had never studied",
        "never studied",
        "has never studied",
        "was never studying"
      ],
      "answer": 0,
      "explanation": "Life experience up to a past time: \"had never studied\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "t_past_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [working / had / for / been / he / hours / when / arrived / help]",
      "options": [
        "He had been working for hours when help arrived.",
        "When help arrived he had been working for hours.",
        "Help arrived when he had been working for hours.",
        "For hours had he been working when help arrived."
      ],
      "answer": 0,
      "explanation": "Past perfect continuous with duration clause.",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "t_past_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Express an unfulfilled past intention: \"I ______ to attend the lecture, but an urgent matter detained me.\"",
      "options": [
        "had hoped",
        "have hoped",
        "was hoping to have",
        "would hope"
      ],
      "answer": 0,
      "explanation": "Past Perfect (\"had hoped / had intended\") expresses a past hope or intention that was not realized.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "t_past_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "If only we ______ the train earlier, we would not be stranded here now!",
      "options": [
        "had caught",
        "caught",
        "have caught",
        "would catch"
      ],
      "answer": 0,
      "explanation": "Expressing past regret with \"If only\" takes the Past Perfect: \"had caught\".",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "t_past_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"No sooner had the curtain fallen than the audience erupted into applause.\"",
      "options": [
        "Correct - inverted past perfect with \"no sooner... than\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Inverted Past Perfect with \"No sooner... than\": \"No sooner had the curtain fallen...\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "t_past_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Hardly [A: the prime minister had] finished speaking [B: when] the journalists [C: clamored] with [D: questions].\"",
      "options": [
        "A: the prime minister had - negative fronting requires inversion: \"Hardly HAD the prime minister finished\"!",
        "B: when",
        "C: clamored",
        "D: questions"
      ],
      "answer": 0,
      "explanation": "Negative fronting requires inversion: \"Hardly had the prime minister finished...\".",
      "sourceTip": "Negative Inversion B2"
    },
    {
      "id": "t_past_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Third Conditional)",
      "skillTested": "Producing",
      "question": "Conjugate: \"If she (consult) ______ a specialist earlier, the disease could have been treated.\"",
      "options": [
        "had consulted",
        "consulted",
        "has consulted",
        "would consult"
      ],
      "answer": 0,
      "explanation": "Third conditional if-clause takes the Past Perfect: \"had consulted\".",
      "sourceTip": "Conditionals B2"
    },
    {
      "id": "t_past_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which construction expresses a PAST COUNTERFACTUAL WISH?",
      "options": [
        "I wish I had accepted the scholarship.",
        "I wish I were taller.",
        "I wish you would listen.",
        "I wish to speak to the manager."
      ],
      "answer": 0,
      "explanation": "\"Wish + Past Perfect\" expresses regret about past events.",
      "sourceTip": "Wishes B2"
    },
    {
      "id": "t_past_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [had / departed / train / the / already / station / the / from]",
      "options": [
        "The train had already departed from the station.",
        "Already the train had departed from the station.",
        "From the station the train had already departed.",
        "Departed had the train already from the station."
      ],
      "answer": 0,
      "explanation": "Past perfect completed action.",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "t_past_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The scientists realized that their calculations ______ flawed from the outset.",
      "options": [
        "had been",
        "were being",
        "have been",
        "are"
      ],
      "answer": 0,
      "explanation": "Past perfect state preceding the realization: \"had been flawed\".",
      "sourceTip": "B2 Academic Narrative"
    },
    {
      "id": "t_past_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"I had intended to call you\" ->",
      "options": [
        "Unfulfilled past plan / intention",
        "Action completed in present",
        "Routine past habit",
        "Uncertain future"
      ],
      "answer": 0,
      "explanation": "\"Had intended\" signals an unrealized past intention.",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "t_past_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Galileo proved that the Earth revolved around the Sun.\"",
      "options": [
        "Acceptable in informal backshift, but timeless scientific truths retain the Present Simple (\"revolves\")",
        "Strictly mandatory"
      ],
      "answer": 0,
      "explanation": "In academic reporting, enduring scientific truths typically retain the present tense: \"proves that the Earth revolves\".",
      "sourceTip": "Sequence of Tenses B2"
    },
    {
      "id": "t_past_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "By midnight, the rescue team ______ searching the ruins for fifteen consecutive hours.",
      "options": [
        "had been",
        "was",
        "has been",
        "had"
      ],
      "answer": 0,
      "explanation": "\"By midnight... had been searching\": Past Perfect Continuous.",
      "sourceTip": "British Council B2"
    },
    {
      "id": "t_past_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the defect: \"I [A: wish] [B: I didn't spend] all my [C: savings] on that [D: depreciating asset last month].\"",
      "options": [
        "A: wish",
        "B: I didn't spend - past regret requires Past Perfect: \"hadn't spent\"!",
        "C: savings",
        "D: depreciating asset last month"
      ],
      "answer": 1,
      "explanation": "Regret about a past action requires \"hadn't spent\", not *didn't spend.",
      "sourceTip": "Wishes B2"
    },
    {
      "id": "t_past_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb pairs with \"used to\" but CANNOT take \"would\" for past descriptions?",
      "options": [
        "Reside (He used to reside here)",
        "Play",
        "Visit",
        "Swim"
      ],
      "answer": 0,
      "explanation": "\"Reside\" is stative; \"would\" only takes repeated dynamic actions.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "t_past_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"Scarcely had she closed her eyes when the alarm (ring) ______.\"",
      "options": [
        "rang",
        "had rung",
        "was ringing",
        "rings"
      ],
      "answer": 0,
      "explanation": "The time clause with \"when\" takes Past Simple: \"rang\".",
      "sourceTip": "Correlatives B2"
    },
    {
      "id": "t_past_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [had / known / if / I / I / spoken / would / have]",
      "options": [
        "If I had known, I would have spoken.",
        "Had I known, I would have spoken.",
        "I would have spoken if I had known.",
        "Known if I had, I would have spoken."
      ],
      "answer": 0,
      "explanation": "Third conditional: \"If I had known, I would have spoken.\"",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "t_past_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze historical narrative destiny: \"He was to become one of the twentieth century's pre-eminent statesmen.\" What does \"was to become\" signify?",
      "options": [
        "Retrospective destiny viewed from a past vantage point",
        "A command given to him",
        "A conditional hypothesis",
        "An interrupted action"
      ],
      "answer": 0,
      "explanation": "\"Was/were to + infinitive\" conveys historical retrospective destiny in elevated narrative prose.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "t_past_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate inverted third conditional: \"(Had / If) ______ the sovereign listened to wise counsel, the catastrophe might have been averted.\"",
      "options": [
        "Had",
        "If",
        "Should",
        "Were"
      ],
      "answer": 0,
      "explanation": "Inverted third conditional: \"Had the sovereign listened...\".",
      "sourceTip": "C1 Inversion"
    },
    {
      "id": "t_past_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Had I [A: have known] of the [B: imminent danger], I [C: would never have] [D: ventured forth].\"",
      "options": [
        "A: have known - redundant auxiliary: say \"Had I known\"!",
        "B: imminent danger",
        "C: would never have",
        "D: ventured forth"
      ],
      "answer": 0,
      "explanation": "Say \"Had I known\", not *Had I have known.",
      "sourceTip": "C1 Traps"
    },
    {
      "id": "t_past_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The ambassador had hoped to have concluded the negotiations before winter.\"",
      "options": [
        "Correct - double perfect expressing deep unfulfilled retrospective intention in formal register",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Double perfect with \"had hoped to have concluded\" is an authentic classical idiom of unfulfilled intention.",
      "sourceTip": "High-Register Syntax C1"
    },
    {
      "id": "t_past_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [had / no / fallen / sooner / darkness / than / started / wolves / the / howling]",
      "options": [
        "No sooner had darkness fallen than the wolves started howling.",
        "Had darkness fallen no sooner than the wolves started howling.",
        "The wolves started howling no sooner had darkness fallen than.",
        "No sooner than darkness fallen had the wolves started howling."
      ],
      "answer": 0,
      "explanation": "Inverted narrative syntax: \"No sooner had darkness fallen than...\".",
      "sourceTip": "C1 Syntax"
    },
    {
      "id": "t_past_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The expedition was ______ to have departed at dawn, but adverse gales intervened.",
      "options": [
        "due",
        "intended",
        "having",
        "about"
      ],
      "answer": 0,
      "explanation": "\"Was due to have departed\" expresses an official schedule that was thwarted.",
      "sourceTip": "C1 Retrospective Schedules"
    },
    {
      "id": "t_past_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which construction expresses UNREALIZED PAST DESTINY?",
      "options": [
        "He was to have succeeded to the dukedom.",
        "He succeeded to the dukedom.",
        "He was succeeding to the dukedom.",
        "He has succeeded to the dukedom."
      ],
      "answer": 0,
      "explanation": "\"Was to have succeeded\" explicitly denotes that the anticipated destiny was never fulfilled.",
      "sourceTip": "Historical Modality C1"
    },
    {
      "id": "t_past_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"I had hoped to meet you\" ->",
      "options": [
        "Unfulfilled past hope",
        "Certain past fact",
        "Present obligation",
        "Future arrangement"
      ],
      "answer": 0,
      "explanation": "Past perfect expresses an unrealized hope.",
      "sourceTip": "C1 Semantics"
    },
    {
      "id": "t_past_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Scarcely ______ set foot on the continent when revolutionary fervour erupted.",
      "options": [
        "had he",
        "he had",
        "did he",
        "was he"
      ],
      "answer": 0,
      "explanation": "\"Scarcely had he set foot...\": inverted past perfect.",
      "sourceTip": "C1 Inversion"
    },
    {
      "id": "t_past_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The delegates had been meeting behind closed doors for a week before accord was reached.\"",
      "options": [
        "Correct - past perfect continuous duration preceding past simple event",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Impeccable narrative past perfect continuous aspect.",
      "sourceTip": "Narrative Tenses C1"
    },
    {
      "id": "t_past_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "In literary stylistics, what function does the \"free indirect discourse\" past tense perform?",
      "options": [
        "It blends third-person narrator voice with a character's internal past thoughts without reporting clauses",
        "It denotes scientific truths",
        "It functions as a future modal",
        "It replaces passive voice"
      ],
      "answer": 0,
      "explanation": "Free indirect style renders a character's subjective interior monologue using third-person past tenses.",
      "sourceTip": "C2 Literary Stylistics"
    },
    {
      "id": "t_past_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Subjunctive Counterfactual)",
      "skillTested": "Producing",
      "question": "Conjugate: \"(Were / Had) ______ the sovereign been made aware of the conspiracy, the rebels would have met instant retribution.\"",
      "options": [
        "Had",
        "Were",
        "Should",
        "Could"
      ],
      "answer": 0,
      "explanation": "Inverted third conditional: \"Had the sovereign been made aware...\".",
      "sourceTip": "C2 Inversion"
    },
    {
      "id": "t_past_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"He was to have [A: delivered] the keynote address, but [B: his sudden indisposition] [C: had prevented] him [D: from attending].\"",
      "options": [
        "A: delivered",
        "B: his sudden indisposition",
        "C: had prevented - the preventing event is in the same time frame as the speech event: use Past Simple \"prevented\"!",
        "D: from attending"
      ],
      "answer": 2,
      "explanation": "Use Past Simple \"prevented\", avoiding past perfect pile-up.",
      "sourceTip": "C2 Narrative Economy"
    },
    {
      "id": "t_past_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [become / was / premier / the / to / celebrated / most / architect / his / of / era]",
      "options": [
        "He was to become the most celebrated architect of his era.",
        "The most celebrated architect of his era was he to become.",
        "Of his era he was to become the most celebrated architect.",
        "To become he was the most celebrated architect of his era."
      ],
      "answer": 0,
      "explanation": "Elevated historical biography prose: \"He was to become the most celebrated architect of his era.\"",
      "sourceTip": "C2 Biography Style"
    },
    {
      "id": "t_past_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Little ______ that their clandestine correspondence had been intercepted by imperial censors.",
      "options": [
        "did they suspect",
        "they suspected",
        "had they suspected",
        "were they suspecting"
      ],
      "answer": 0,
      "explanation": "Fronted negative: \"Little did they suspect...\".",
      "sourceTip": "C2 Negative Inversion"
    },
    {
      "id": "t_past_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb form in classical English conveys past irrealis subjunctive?",
      "options": [
        "Were (e.g. If I were king)",
        "Was",
        "Am",
        "Been"
      ],
      "answer": 0,
      "explanation": "\"Were\" is the past subjunctive irrealis marker.",
      "sourceTip": "Historical Subjunctive C2"
    },
    {
      "id": "t_past_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The dynasty had ______ fallen into decay before the barbarian incursions began.",
      "options": [
        "already",
        "yet",
        "still",
        "hitherto"
      ],
      "answer": 0,
      "explanation": "\"Had already fallen\" confirms prior decay.",
      "sourceTip": "C2 Historical Prose"
    },
    {
      "id": "t_past_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"He spoke as though he had witnessed the battle with his own eyes.\"",
      "options": [
        "Correct - \"as though + past perfect\" expresses hypothetical counterfactual manner",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"As though + past perfect\" conveys counterfactual comparison.",
      "sourceTip": "Counterfactual Manner C2"
    },
    {
      "id": "t_past_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Never [A: had the empire] [B: witnessed] such devastation, [C: nor had] [D: its armies suffered such ignominy.]\"",
      "options": [
        "A: had the empire",
        "B: witnessed",
        "C: nor had",
        "D: its armies suffered - Flawless double inversion!"
      ],
      "answer": 3,
      "explanation": "The sentence is completely flawless in elevated style.",
      "sourceTip": "C2 Coordinate Inversion"
    },
    {
      "id": "t_past_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete the inverted counterfactual: \"(Had / If) ______ not the archives been consumed by flames, the provenance would be indisputable.\"",
      "options": [
        "Had",
        "If",
        "Were",
        "Should"
      ],
      "answer": 0,
      "explanation": "\"Had not the archives been consumed...\": standard negative third conditional inversion.",
      "sourceTip": "C2 Syntax"
    }
  ],
  "tenses_future": [
    {
      "id": "t_fut_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose \"will\" for a spontaneous decision made right now: \"The phone is ringing! — Don't worry, I ______ it.\"",
      "options": [
        "will answer",
        "answer",
        "am answering",
        "answered"
      ],
      "answer": 0,
      "explanation": "Instant spontaneous decisions made at the moment of speaking take \"will\": \"I will answer\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "t_fut_a1_2",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Intention)",
      "skillTested": "Producing",
      "question": "Use \"be going to\" for a prior plan: \"We (visit) ______ our grandparents next Sunday.\"",
      "options": [
        "are going to visit",
        "will visit",
        "visit",
        "visited"
      ],
      "answer": 0,
      "explanation": "Pre-planned intentions use \"be going to\": \"are going to visit\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "t_fut_a1_3",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Look at those dark black clouds! It is going to rain.\"",
      "options": [
        "Correct - \"be going to\" expresses predictions based on present physical evidence",
        "Incorrect - say \"It will rain\""
      ],
      "answer": 0,
      "explanation": "Observable sensory evidence takes \"be going to\": \"It is going to rain\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "t_fut_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which modal verb expresses simple future prediction or spontaneous promise?",
      "options": [
        "Will",
        "Can",
        "Must",
        "May"
      ],
      "answer": 0,
      "explanation": "\"Will\" is the primary modal of future prediction and spontaneous decision.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "t_fut_a1_5",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I promise I ______ your secret to anyone.",
      "options": [
        "will not tell",
        "am not telling",
        "do not tell",
        "didn't tell"
      ],
      "answer": 0,
      "explanation": "Promises take \"will / will not\": \"I will not tell\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "t_fut_a1_6",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [help / I / carry / will / you / bag / that]",
      "options": [
        "I will help you carry that bag.",
        "I will carry you help that bag.",
        "Will I help you carry that bag.",
        "You will help I carry that bag."
      ],
      "answer": 0,
      "explanation": "Spontaneous offer: Subject (I) + will help + you + bare infinitive (carry that bag).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "t_fut_a1_7",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Find the mistake: \"She [A: will] [B: goes] to the [C: market] [D: tomorrow].\"",
      "options": [
        "A: will",
        "B: goes - modal \"will\" takes bare infinitive \"go\"!",
        "C: market",
        "D: tomorrow"
      ],
      "answer": 1,
      "explanation": "\"Will\" takes the base form: \"will GO\", not *will goes.",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "t_fut_a1_8",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match: \"I'll\" -> contraction of:",
      "options": [
        "I will / I shall",
        "I would",
        "I had",
        "I am"
      ],
      "answer": 0,
      "explanation": "\"I'll\" is the contraction of \"I will\".",
      "sourceTip": "Contractions A1"
    },
    {
      "id": "t_past_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I think people will travel to Mars in the future.\"",
      "options": [
        "Correct - \"think + will\" for personal future predictions",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Personal opinions and predictions take \"think + will\": \"will travel\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "t_fut_a1_10",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply future form: \"Don't worry, I (carry) ______ that heavy suitcase for you.\"",
      "options": [
        "will carry",
        "am going to carry",
        "carry",
        "carried"
      ],
      "answer": 0,
      "explanation": "Instant offer of help: \"will carry\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "t_fut_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "They ______ their final high school examination next month.",
      "options": [
        "are going to take",
        "will take",
        "took",
        "takes"
      ],
      "answer": 0,
      "explanation": "Planned intention: \"are going to take\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "t_fut_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence expresses an INSTANT DECISION made right now?",
      "options": [
        "I'm hungry. I'll make a sandwich.",
        "I am going to study medicine next year.",
        "The train leaves at 8:00.",
        "We are flying to Tokyo tomorrow."
      ],
      "answer": 0,
      "explanation": "\"I'll make a sandwich\" is made on the spot.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "t_fut_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Watch out! You ______ drop that glass vase!",
      "options": [
        "are going to",
        "will",
        "shall",
        "do"
      ],
      "answer": 0,
      "explanation": "Immediate imminent danger based on sensory evidence: \"are going to drop\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "t_fut_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [sunny / be / it / tomorrow / will]",
      "options": [
        "It will be sunny tomorrow.",
        "Tomorrow it will be sunny.",
        "Sunny it will be tomorrow.",
        "Will it be sunny tomorrow."
      ],
      "answer": 0,
      "explanation": "Weather prediction: \"It will be sunny tomorrow.\"",
      "sourceTip": "Syntax A1"
    },
    {
      "id": "t_fut_a1_15",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"We [A: are going] [B: visit] our [C: cousins] [D: next weekend].\"",
      "options": [
        "A: are going",
        "B: visit - requires \"to visit\": \"are going TO visit\"!",
        "C: cousins",
        "D: next weekend"
      ],
      "answer": 1,
      "explanation": "\"Be going to + base verb\": \"are going TO visit\".",
      "sourceTip": "Be going to A1"
    },
    {
      "id": "t_fut_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose Present Continuous for fixed personal arrangements: \"I ______ the dentist tomorrow at 10:00 AM; I already have my appointment card.\"",
      "options": [
        "am seeing",
        "will see",
        "see",
        "saw"
      ],
      "answer": 0,
      "explanation": "Fixed personal arrangements booked in advance take the Present Continuous: \"am seeing\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "t_fut_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The train for Battambang ______ at 6:45 AM from Platform 2.",
      "options": [
        "leaves",
        "is leaving",
        "will leave",
        "is going to leave"
      ],
      "answer": 0,
      "explanation": "Timetabled public transport uses the Present Simple for future time: \"leaves\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "t_fut_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"We are flying to Singapore next Friday; the tickets are already booked.\"",
      "options": [
        "Correct - fixed arrangement with tickets booked takes Present Continuous",
        "Incorrect - must use \"will\""
      ],
      "answer": 0,
      "explanation": "Fixed arrangement with arrangements/tickets already completed: Present Continuous.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "t_fut_a2_4",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Arrangement)",
      "skillTested": "Producing",
      "question": "Conjugate: \"They (have) ______ a barbecue party this Saturday evening.\"",
      "options": [
        "are having",
        "will have",
        "have",
        "had"
      ],
      "answer": 0,
      "explanation": "Social arrangement: \"are having\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "t_fut_a2_5",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The conference [A: will start] [B: at 9:00 AM] [C: tomorrow] according to [D: the official schedule].\"",
      "options": [
        "A: will start - official timetables use Present Simple: \"starts\"!",
        "B: at 9:00 AM",
        "C: tomorrow",
        "D: the official schedule"
      ],
      "answer": 0,
      "explanation": "Official public timetable schedules take Present Simple: \"starts\".",
      "sourceTip": "Timetable Future A2"
    },
    {
      "id": "t_fut_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which structure expresses a PRE-PLANNED INTENTION (decision made before now)?",
      "options": [
        "Be going to (I am going to buy a car)",
        "Will for instant offer",
        "Present simple timetable",
        "Past simple"
      ],
      "answer": 0,
      "explanation": "\"Be going to\" expresses intentions planned before speaking.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "t_fut_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [tomorrow / meeting / are / we / director / the]",
      "options": [
        "We are meeting the director tomorrow.",
        "Tomorrow we are meeting the director.",
        "The director are we meeting tomorrow.",
        "Are we meeting the director tomorrow."
      ],
      "answer": 0,
      "explanation": "Arrangement: \"We are meeting the director tomorrow.\"",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "t_fut_a2_8",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I will call you as soon as I ______ at the hotel.",
      "options": [
        "arrive",
        "will arrive",
        "arrived",
        "am arriving"
      ],
      "answer": 0,
      "explanation": "Future time clause with \"as soon as\" takes Present Simple: \"arrive\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "t_fut_a2_9",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"Shall I help you?\" -> What does \"Shall I\" express?",
      "options": [
        "Polite offer to do something for the listener",
        "Past obligation",
        "Strict prohibition",
        "Certain prediction"
      ],
      "answer": 0,
      "explanation": "\"Shall I...?\" offers assistance politely.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "t_fut_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Shall we go for a walk in the park?\"",
      "options": [
        "Correct - \"Shall we\" makes a polite joint suggestion",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Shall we...?\" is standard polite joint suggestion.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "t_fut_a2_11",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Be careful on that icy ladder; you ______ slip!",
      "options": [
        "are going to",
        "will",
        "shall",
        "do"
      ],
      "answer": 0,
      "explanation": "Imminent prediction from present evidence: \"are going to slip\".",
      "sourceTip": "VOA English A2"
    },
    {
      "id": "t_fut_a2_12",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"What time (do) ______ the museum open tomorrow morning?\"",
      "options": [
        "does",
        "will",
        "is",
        "did"
      ],
      "answer": 0,
      "explanation": "Timetable question: \"What time DOES the museum open...?\".",
      "sourceTip": "Timetable A2"
    },
    {
      "id": "t_fut_a2_13",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence expresses a SCHEDULED PUBLIC TIMETABLE?",
      "options": [
        "The semester begins on September 1st.",
        "I'll visit you soon.",
        "I am buying milk.",
        "Look at the clouds."
      ],
      "answer": 0,
      "explanation": "\"The semester begins on September 1st\" is a scheduled calendar timetable.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "t_fut_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [shall / we / dinner / where / have / ?]",
      "options": [
        "Where shall we have dinner?",
        "Shall we have dinner where?",
        "Where we shall have dinner?",
        "Have dinner where shall we?"
      ],
      "answer": 0,
      "explanation": "Interrogative suggestion: Where + shall + we + have dinner?",
      "sourceTip": "Syntax A2"
    },
    {
      "id": "t_fut_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the defect: \"If it [A: will rain] tomorrow, the [B: outdoor match] [C: will be] [D: cancelled].\"",
      "options": [
        "A: will rain - conditional if-clause takes present simple: \"If it rains\"!",
        "B: outdoor match",
        "C: will be",
        "D: cancelled"
      ],
      "answer": 0,
      "explanation": "First conditional if-clause takes Present Simple: \"If it rains\", never *will rain.",
      "sourceTip": "Conditionals A2"
    },
    {
      "id": "t_fut_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the Future Continuous for an action in progress at a future moment: \"This time tomorrow, I ______ on the beach in Sihanoukville.\"",
      "options": [
        "will be relaxing",
        "will relax",
        "relax",
        "will have relaxed"
      ],
      "answer": 0,
      "explanation": "\"This time tomorrow\" specifies ongoing activity at that future point: Future Continuous \"will be relaxing\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "t_fut_b1_2",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ you ______ your laptop this afternoon? If not, could I borrow it?",
      "options": [
        "Will / be using",
        "Do / use",
        "Did / use",
        "Are / used"
      ],
      "answer": 0,
      "explanation": "Polite inquiry about plans without pressuring: Future Continuous \"Will you be using...?\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "t_fut_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"By 2030, scientists will have discovered a cure for the disease.\"",
      "options": [
        "Correct - \"By + future time\" requires Future Perfect Simple (\"will have discovered\")",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Action completed before a future deadline: Future Perfect Simple \"will have discovered\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "t_fut_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"By [A: next December], they [B: will complete] the [C: new] suspension [D: bridge].\"",
      "options": [
        "A: next December",
        "B: will complete - \"By + deadline\" takes Future Perfect: \"will have completed\"!",
        "C: new",
        "D: bridge"
      ],
      "answer": 1,
      "explanation": "\"By next December... will have completed\".",
      "sourceTip": "Future Perfect B1"
    },
    {
      "id": "t_fut_b1_5",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Future Perfect)",
      "skillTested": "Producing",
      "question": "Conjugate: \"By five o'clock, she (finish) ______ all the reports.\"",
      "options": [
        "will have finished",
        "will finish",
        "will be finishing",
        "has finished"
      ],
      "answer": 0,
      "explanation": "Completion prior to five o'clock: \"will have finished\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "t_fut_b1_6",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which time expression triggers the FUTURE PERFECT SIMPLE?",
      "options": [
        "By the end of this month",
        "Right now",
        "Every day",
        "At present"
      ],
      "answer": 0,
      "explanation": "\"By the end of this month\" indicates completion prior to that deadline.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "t_fut_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [be / this / flying / time / will / to / London / tomorrow / we]",
      "options": [
        "This time tomorrow we will be flying to London.",
        "We will be flying to London this time tomorrow.",
        "To London we will be flying this time tomorrow.",
        "Tomorrow this time will we be flying to London."
      ],
      "answer": 0,
      "explanation": "Future continuous ongoing action: \"This time tomorrow we will be flying to London.\"",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "t_fut_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Don't phone between 7:00 and 8:00 PM; we ______ dinner.",
      "options": [
        "will be having",
        "have",
        "had",
        "will have had"
      ],
      "answer": 0,
      "explanation": "Action in progress during that time: \"will be having\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "t_fut_b1_9",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"be about to\" -> What does it convey?",
      "options": [
        "Action on the verge of happening immediately",
        "Action completed long ago",
        "Routine habit",
        "Distant uncertain possibility"
      ],
      "answer": 0,
      "explanation": "\"Be about to + infinitive\" indicates immediate imminent occurrence.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "t_past_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The train is about to depart; please step aboard immediately.\"",
      "options": [
        "Correct - immediate future on the verge of happening",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Is about to depart\" correctly indicates immediate departure.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "t_fut_b1_11",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "By next year, they ______ married for twenty-five years.",
      "options": [
        "will have been",
        "will be",
        "are",
        "have been"
      ],
      "answer": 0,
      "explanation": "Duration completed by a future point: \"will have been married\".",
      "sourceTip": "Future Perfect B1"
    },
    {
      "id": "t_fut_b1_12",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"When [A: you will arrive] [B: at the airport], [C: I will be waiting] [D: at the arrivals gate].\"",
      "options": [
        "A: you will arrive - subordinate time clause with \"When\" takes present simple: \"you arrive\"!",
        "B: at the airport",
        "C: I will be waiting",
        "D: at the arrivals gate"
      ],
      "answer": 0,
      "explanation": "Time clauses take Present Simple: \"When you arrive...\".",
      "sourceTip": "Time Clauses B1"
    },
    {
      "id": "t_fut_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which structure indicates an action IN PROGRESS at a specified future moment?",
      "options": [
        "Future Continuous (will be doing)",
        "Future Simple",
        "Future Perfect",
        "Present Simple"
      ],
      "answer": 0,
      "explanation": "Future Continuous conveys in-progress activity at a future point.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "t_fut_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"Hurry up! The ceremony is (about / begin) ______.\"",
      "options": [
        "about to begin",
        "about beginning",
        "about begin",
        "about began"
      ],
      "answer": 0,
      "explanation": "\"Be about to + bare infinitive\": \"about to begin\".",
      "sourceTip": "Immediate Future B1"
    },
    {
      "id": "t_fut_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [have / by / left / will / noon / they]",
      "options": [
        "They will have left by noon.",
        "By noon they will have left.",
        "Will they have left by noon.",
        "Left they will have by noon."
      ],
      "answer": 0,
      "explanation": "Future perfect: \"They will have left by noon.\"",
      "sourceTip": "Syntax B1"
    },
    {
      "id": "t_fut_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the Future Perfect Continuous: \"By next October, Dr. Bennett ______ at the university for thirty years.\"",
      "options": [
        "will have been teaching",
        "will be teaching",
        "will teach",
        "has been teaching"
      ],
      "answer": 0,
      "explanation": "Duration continuing up to a future reference point: Future Perfect Continuous \"will have been teaching\".",
      "sourceTip": "Cambridge B2 First"
    },
    {
      "id": "t_fut_b2_2",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The flight left on time, so they ______ in Bangkok by now.",
      "options": [
        "should have arrived",
        "would arrive",
        "must arrive",
        "will arrive"
      ],
      "answer": 0,
      "explanation": "Modal of expectation: \"should have arrived\" conveys high likelihood based on schedule.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "t_fut_b2_3",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The foreign minister is to visit Tokyo next month for bilateral trade talks.\"",
      "options": [
        "Correct - \"be to + infinitive\" expresses official diplomatic itineraries/decrees",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Be to + infinitive\" is standard formal syntax for official arrangements.",
      "sourceTip": "Official Future B2"
    },
    {
      "id": "t_fut_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"By the time [A: the new stadium] [B: will open], the team [C: will have played] fifty games [D: elsewhere].\"",
      "options": [
        "A: the new stadium",
        "B: will open - \"By the time\" is a time clause taking Present Simple: \"opens\"!",
        "C: will have played",
        "D: elsewhere"
      ],
      "answer": 1,
      "explanation": "\"By the time the new stadium OPENS...\".",
      "sourceTip": "Time Clauses B2"
    },
    {
      "id": "t_fut_b2_5",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Future Perfect Continuous)",
      "skillTested": "Producing",
      "question": "Conjugate: \"By the end of this marathon, the athletes (run) ______ for over four hours.\"",
      "options": [
        "will have been running",
        "will be running",
        "will run",
        "have been running"
      ],
      "answer": 0,
      "explanation": "Continuous duration up to a future milestone: \"will have been running\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "t_fut_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which structure conveys an IMMINENT EVENT about to take place immediately?",
      "options": [
        "Be on the verge of + V-ing",
        "Future Simple",
        "Future Perfect",
        "Present Simple"
      ],
      "answer": 0,
      "explanation": "\"Be on the verge of doing\" indicates imminent immediate action.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "t_fut_b2_7",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [due / is / at / flight / land / to / five / the]",
      "options": [
        "The flight is due to land at five.",
        "At five the flight is due to land.",
        "Due to land is the flight at five.",
        "The flight at five is due to land."
      ],
      "answer": 0,
      "explanation": "\"Be due to + infinitive\" expresses scheduled future time.",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "t_fut_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Scientists are on the ______ of making a breakthrough in quantum computing.",
      "options": [
        "verge",
        "about",
        "due",
        "bound"
      ],
      "answer": 0,
      "explanation": "Collocation: \"on the verge of + gerund\".",
      "sourceTip": "B2 Collocations"
    },
    {
      "id": "t_fut_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"be bound to\" -> What does it mean?",
      "options": [
        "Certain / inevitable to happen",
        "Unlikely to happen",
        "Past event",
        "Impossible"
      ],
      "answer": 0,
      "explanation": "\"Be bound to\" expresses inevitability or strong certainty.",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "t_fut_b2_10",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"With his talent and work ethic, he is bound to succeed.\"",
      "options": [
        "Correct - \"bound to\" expresses certainty/inevitability",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Bound to succeed\" is standard natural English for certainty.",
      "sourceTip": "British Council B2"
    },
    {
      "id": "t_fut_b2_11",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The company is on the ______ of collapse unless an emergency bailout is agreed.",
      "options": [
        "brink",
        "about",
        "due",
        "verging"
      ],
      "answer": 0,
      "explanation": "Fixed idiom: \"on the brink of collapse\".",
      "sourceTip": "Idioms B2"
    },
    {
      "id": "t_fut_b2_12",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"The treaty [A: is to signed] [B: by both] heads of state [C: in Geneva] [D: on Friday].\"",
      "options": [
        "A: is to signed - passive requires \"is to BE signed\"!",
        "B: by both",
        "C: in Geneva",
        "D: on Friday"
      ],
      "answer": 0,
      "explanation": "Passive official decree: \"is to BE signed\".",
      "sourceTip": "Official Passive B2"
    },
    {
      "id": "t_fut_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which future phrase conveys HIGH PROBABILITY based on normal expectation?",
      "options": [
        "Should (The train should arrive on time)",
        "Will not",
        "Might not",
        "Could possibly"
      ],
      "answer": 0,
      "explanation": "\"Should\" expresses normal deduction/expectation of future events.",
      "sourceTip": "Modals B2"
    },
    {
      "id": "t_fut_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"By midnight, the storm (pass) ______ and clear skies will return.\"",
      "options": [
        "will have passed",
        "will pass",
        "passes",
        "passed"
      ],
      "answer": 0,
      "explanation": "Completion before midnight: \"will have passed\".",
      "sourceTip": "Future Perfect B2"
    },
    {
      "id": "t_fut_b2_15",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Put in order: [bound / mistake / you / are / make / to / a]",
      "options": [
        "You are bound to make a mistake.",
        "To make a mistake you are bound.",
        "Are you bound to make a mistake.",
        "A mistake you are bound to make."
      ],
      "answer": 0,
      "explanation": "Certainty: \"You are bound to make a mistake.\"",
      "sourceTip": "Syntax B2"
    },
    {
      "id": "t_fut_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze behavioral generic \"will\": \"A venomous snake will only strike if cornered.\" What does \"will\" convey here?",
      "options": [
        "Characteristic behavioral predictability rather than future time",
        "Spontaneous offer made now",
        "Scheduled public appointment",
        "Past habit"
      ],
      "answer": 0,
      "explanation": "\"Will\" functions epistemically to express characteristic habit or law-like behavioral disposition.",
      "sourceTip": "Cambridge C1 Advanced"
    },
    {
      "id": "t_fut_c1_2",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the official diplomatic future: \"The Prime Minister (meet) ______ with his European counterparts in Paris.\"",
      "options": [
        "is to meet",
        "will be met",
        "meets with",
        "meeting"
      ],
      "answer": 0,
      "explanation": "\"Be to + infinitive\" expresses official diplomatic schedule.",
      "sourceTip": "C1 Diplomatic Register"
    },
    {
      "id": "t_fut_c1_3",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Provided that the treaty [A: will be ratified] [B: next week], trade sanctions [C: will be lifted] [D: forthwith].\"",
      "options": [
        "A: will be ratified - conditional \"provided that\" takes Present Simple: \"is ratified\"!",
        "B: next week",
        "C: will be lifted",
        "D: forthwith"
      ],
      "answer": 0,
      "explanation": "Conditional clauses take Present Simple: \"is ratified\", never *will be ratified.",
      "sourceTip": "Conditional Tenses C1"
    },
    {
      "id": "t_fut_c1_4",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"Oil will float on water.\"",
      "options": [
        "Correct - \"will\" expresses inherent scientific disposition / general truth",
        "Incorrect - must only use simple present"
      ],
      "answer": 0,
      "explanation": "\"Will\" conveys inherent characteristic property or natural law.",
      "sourceTip": "Scientific Will C1"
    },
    {
      "id": "t_fut_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Assemble: [summit / to / in / take / place / is / Geneva / the]",
      "options": [
        "The summit is to take place in Geneva.",
        "In Geneva the summit is to take place.",
        "To take place the summit is in Geneva.",
        "Is the summit to take place in Geneva."
      ],
      "answer": 0,
      "explanation": "Official diplomatic arrangement: \"The summit is to take place in Geneva.\"",
      "sourceTip": "C1 Syntax"
    },
    {
      "id": "t_fut_c1_6",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The spacecraft is ______ to touch down on Mars at 14:00 GMT.",
      "options": [
        "slated",
        "about",
        "bound",
        "verging"
      ],
      "answer": 0,
      "explanation": "\"Be slated to + infinitive\" is formal high-register American/international English for scheduled future events.",
      "sourceTip": "Academic Register C1"
    },
    {
      "id": "t_fut_c1_7",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which modal use of \"will\" expresses VOLITIONAL OBSTINACY (stubborn refusal)?",
      "options": [
        "The car won't start! (obstinate refusal)",
        "I will buy milk.",
        "It will rain.",
        "The shop will open at 9."
      ],
      "answer": 0,
      "explanation": "\"Won't start\" expresses volitional refusal attributed metaphorically to an inanimate object.",
      "sourceTip": "Volitional Will C1"
    },
    {
      "id": "t_fut_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Understanding",
      "question": "Match: \"Boys will be boys\" -> What does \"will\" convey?",
      "options": [
        "Proverbial characteristic inevitability",
        "Future time prediction",
        "Spontaneous intention",
        "Subjunctive mood"
      ],
      "answer": 0,
      "explanation": "Proverbial predictability of human nature.",
      "sourceTip": "Proverbial Will C1"
    },
    {
      "id": "t_fut_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The consortium is on the ______ of finalizing the multi-billion dollar acquisition.",
      "options": [
        "cusp",
        "verge",
        "brink",
        "point"
      ],
      "answer": 0,
      "explanation": "\"On the cusp of + V-ing\": on the threshold or verge of major accomplishment.",
      "sourceTip": "C1 Idioms"
    },
    {
      "id": "t_fut_c1_10",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"By December 2030, the consortium will have been operating the facility for half a century.\"",
      "options": [
        "Correct - Future Perfect Continuous with duration prepositional phrase",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Impeccable Future Perfect Continuous syntax.",
      "sourceTip": "C1 Aspectual Mastery"
    },
    {
      "id": "t_fut_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "In statutory legislative drafting, what does the modal \"SHALL\" express in: \"The lessee shall maintain the premises in good repair\"?",
      "options": [
        "A mandatory legal obligation / imperative duty",
        "A future prediction of probability",
        "A polite suggestion",
        "A hypothetical condition"
      ],
      "answer": 0,
      "explanation": "Statutory \"shall\" denotes mandatory, legally binding obligation.",
      "sourceTip": "C2 Statutory Drafting"
    },
    {
      "id": "t_fut_c2_2",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket (Statutory Prohibition)",
      "skillTested": "Producing",
      "question": "Complete the statutory prohibition: \"No officer (shall / will) ______ disclose classified intelligence without prior authorization.\"",
      "options": [
        "shall",
        "will",
        "may",
        "can"
      ],
      "answer": 0,
      "explanation": "High statutory drafting strictly employs \"shall\": \"No officer shall disclose...\".",
      "sourceTip": "C2 Legal English"
    },
    {
      "id": "t_fut_c2_3",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the defect: \"The treaty [A: stipulates that] the commission [B: will be convened] [C: within thirty days] of [D: ratification].\"",
      "options": [
        "A: stipulates that",
        "B: will be convened - statutory instruments require mandatory \"SHALL be convened\"!",
        "C: within thirty days",
        "D: of ratification"
      ],
      "answer": 1,
      "explanation": "Formal legal instruments use \"shall be convened\" to express legal imperative, not predictive \"will\".",
      "sourceTip": "Legal Drafting C2"
    },
    {
      "id": "t_fut_c2_4",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Reconstruct: [binding / terms / the / shall / upon / parties / be / all]",
      "options": [
        "The terms shall be binding upon all parties.",
        "Binding upon all parties the terms shall be.",
        "Shall the terms be binding upon all parties.",
        "All parties shall the terms be binding upon."
      ],
      "answer": 0,
      "explanation": "Statutory legal clause: \"The terms shall be binding upon all parties.\"",
      "sourceTip": "C2 Jurisprudence"
    },
    {
      "id": "t_fut_c2_5",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "All disputes arising hereunder ______ be resolved by binding arbitration in Geneva.",
      "options": [
        "shall",
        "will",
        "may",
        "would"
      ],
      "answer": 0,
      "explanation": "Statutory arbitration covenant requires \"shall\".",
      "sourceTip": "Arbitration C2"
    },
    {
      "id": "t_fut_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb phrase in formal contracts expresses CONDITION PRECEDENT to future performance?",
      "options": [
        "Subject to the fulfillment of (Subject to Clause 4, the closing shall occur)",
        "Will be",
        "Was",
        "Had been"
      ],
      "answer": 0,
      "explanation": "\"Subject to the fulfillment of...\" sets a condition precedent.",
      "sourceTip": "C2 Contracts"
    },
    {
      "id": "t_fut_c2_7",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Payment ______ become due and payable within thirty days of invoice presentation.",
      "options": [
        "shall",
        "will",
        "may",
        "must to"
      ],
      "answer": 0,
      "explanation": "Commercial contract standard: \"shall become due\".",
      "sourceTip": "C2 Commercial Law"
    },
    {
      "id": "t_fut_c2_8",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Explaining",
      "question": "Evaluate: \"The tenant shall not sublet the premises without the landlord's written consent.\"",
      "options": [
        "Correct - standard statutory covenant of prohibition using \"shall not\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Shall not\" is the standard legal formula for prohibitive covenants.",
      "sourceTip": "C2 Legal English"
    },
    {
      "id": "t_fut_c2_9",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Nothing in this agreement [A: shall be construed] as [B: creating] [C: an partnership] [D: between the parties].\"",
      "options": [
        "A: shall be construed",
        "B: creating",
        "C: an partnership - consonant sound requires \"A partnership\"!",
        "D: between the parties"
      ],
      "answer": 2,
      "explanation": "Spelling flaw: \"a partnership\", not *an partnership.",
      "sourceTip": "C2 Precision"
    },
    {
      "id": "t_fut_c2_10",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"This agreement (remain) ______ in force until terminated in writing by either signatory.\"",
      "options": [
        "shall remain",
        "will remaining",
        "remains to be",
        "shall remaining"
      ],
      "answer": 0,
      "explanation": "\"This agreement shall remain in force...\": standard term clause.",
      "sourceTip": "C2 Legal Drafting"
    }
  ],
  "voice": [
    {
      "id": "voice_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct passive verb: \"English ______ all over the world.\"",
      "options": [
        "is spoken",
        "speaks",
        "is speak",
        "spoken"
      ],
      "answer": 0,
      "explanation": "Present passive formula: \"is/are + past participle (V3)\". \"English is spoken\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "voice_a1_2",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The car was washed by my father yesterday.\"",
      "options": [
        "Correct - past passive \"was + V3\" with agent \"by my father\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Past passive: \"was washed by...\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "voice_a1_3",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence is in the PASSIVE voice?",
      "options": [
        "The window was broken by the ball.",
        "Tom kicked the red ball.",
        "Anna opened the front door.",
        "We ate lunch together."
      ],
      "answer": 0,
      "explanation": "\"was broken\" has \"be + past participle\". The others are active.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "voice_a1_4",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "This delicious cake was ______ by my mother.",
      "options": [
        "made",
        "make",
        "making",
        "maked"
      ],
      "answer": 0,
      "explanation": "Passive requires past participle V3: \"was made\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "voice_a1_5",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange into passive: [written / this book / was / by Mark Twain]",
      "options": [
        "This book was written by Mark Twain.",
        "Was written this book by Mark Twain.",
        "By Mark Twain this book was written.",
        "This book written was by Mark Twain."
      ],
      "answer": 0,
      "explanation": "Subject (This book) + was + V3 (written) + by-agent.",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "voice_a1_6",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the error: \"The letters [A: are] [B: deliver] [C: every] [D: morning].\"",
      "options": [
        "B: deliver - should be V3 \"delivered\" in passive",
        "A: are",
        "C: every",
        "D: morning"
      ],
      "answer": 0,
      "explanation": "Present passive needs V3: \"are delivered\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "voice_a1_7",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the active \"They build houses\" to its passive form:",
      "options": [
        "Houses are built by them.",
        "Houses were built by them.",
        "Houses is built.",
        "Houses are build."
      ],
      "answer": 0,
      "explanation": "Present simple active -> Present simple passive: \"Houses are built\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "voice_a1_8",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Fill in the bracket: \"The museum (visit) ______ by thousands of tourists every summer.\"",
      "options": [
        "is visited",
        "visits",
        "was visit",
        "is visiting"
      ],
      "answer": 0,
      "explanation": "Present simple passive singular: \"is visited\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "voice_a1_9",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which preposition introduces the agent who performs the action in passive voice?",
      "options": [
        "by",
        "with",
        "from",
        "at"
      ],
      "answer": 0,
      "explanation": "We use \"by\" for the agent: \"painted by Picasso\".",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "voice_a1_10",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The homework was did by Alex.\"",
      "options": [
        "Incorrect - past participle of \"do\" is \"done\", not \"did\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Use V3: \"was done\", never *was did.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "voice_a1_11",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Rice ______ in many Asian countries.",
      "options": [
        "is grown",
        "are grown",
        "grows by",
        "is grew"
      ],
      "answer": 0,
      "explanation": "Rice is uncountable (singular): \"is grown\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "voice_a1_12",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence is ACTIVE voice?",
      "options": [
        "The chef prepared the salad.",
        "The salad was prepared by the chef.",
        "The room is cleaned every day.",
        "The letters were sent on Monday."
      ],
      "answer": 0,
      "explanation": "\"The chef prepared\" is active because the subject performs the verb.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "voice_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "These photos ______ taken during our holiday in Rome.",
      "options": [
        "were",
        "was",
        "is",
        "did"
      ],
      "answer": 0,
      "explanation": "Plural subject \"These photos\" + past passive takes \"were taken\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "voice_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [found / the lost keys / were / in the garden]",
      "options": [
        "The lost keys were found in the garden.",
        "In the garden found were the lost keys.",
        "Were found the lost keys in the garden.",
        "The lost keys in the garden were found."
      ],
      "answer": 0,
      "explanation": "Subject + were + V3 (found) + location.",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "voice_a1_15",
      "level": "A1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"The movie was direct by Steven Spielberg.\"",
      "options": [
        "The movie was directed by Steven Spielberg.",
        "The movie direct by Steven Spielberg.",
        "The movie was directs by Steven Spielberg.",
        "The movie is direct by Steven Spielberg."
      ],
      "answer": 0,
      "explanation": "Regular verb past participle requires -ed: \"directed\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "voice_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Change to passive: \"Alexander Graham Bell invented the telephone.\"",
      "options": [
        "The telephone was invented by Alexander Graham Bell.",
        "The telephone is invented by Alexander Graham Bell.",
        "The telephone were invented by Alexander Graham Bell.",
        "Alexander Graham Bell was invented the telephone."
      ],
      "answer": 0,
      "explanation": "Past simple active -> \"was/were + V3\": \"was invented\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "voice_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Seatbelts must ______ at all times during the flight.",
      "options": [
        "be worn",
        "worn",
        "be wear",
        "been worn"
      ],
      "answer": 0,
      "explanation": "Modal passive formula: \"modal + be + V3\" -> \"must be worn\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "voice_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The ancient bridge can be seen from our hotel window.\"",
      "options": [
        "Correct - modal passive \"can + be + V3 (seen)\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Correct modal passive construction: \"can be seen\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "voice_a2_4",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Millions of [A: emails] [B: are] [C: send] across [D: the world] every day.\"",
      "options": [
        "C: send - should be past participle \"sent\"",
        "A: emails",
        "B: are",
        "D: the world"
      ],
      "answer": 0,
      "explanation": "\"send\" is irregular: V3 is \"sent\" -> \"are sent\".",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "voice_a2_5",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb form is a valid passive infinitive?",
      "options": [
        "to be cleaned",
        "to being cleaned",
        "to have clean",
        "to be clean"
      ],
      "answer": 0,
      "explanation": "Passive infinitive is \"to be + V3\": \"to be cleaned\".",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "voice_a2_6",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Turn into past passive: \"The thief (catch) ______ by the police last night.\"",
      "options": [
        "was caught",
        "was catched",
        "is caught",
        "were caught"
      ],
      "answer": 0,
      "explanation": "Singular subject in past passive: \"was caught\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "voice_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [cannot / without a ticket / be / entered / the theater]",
      "options": [
        "The theater cannot be entered without a ticket.",
        "Without a ticket entered cannot be the theater.",
        "Cannot be entered the theater without a ticket.",
        "The theater cannot entered be without a ticket."
      ],
      "answer": 0,
      "explanation": "Modal passive negative: Subject + cannot + be + V3 + prepositional phrase.",
      "sourceTip": "Bamboozle A2"
    },
    {
      "id": "voice_a2_8",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the active modal \"You should clean the room\" to passive:",
      "options": [
        "The room should be cleaned.",
        "The room should cleaned.",
        "The room must been cleaned.",
        "The room was should clean."
      ],
      "answer": 0,
      "explanation": "\"should + clean\" -> \"should be cleaned\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "voice_a2_9",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The Pyramids of Giza ______ thousands of years ago.",
      "options": [
        "were built",
        "was built",
        "are built",
        "built"
      ],
      "answer": 0,
      "explanation": "Plural subject + past time indicator = \"were built\".",
      "sourceTip": "VOA English A2"
    },
    {
      "id": "voice_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"My bicycle was stolen yesterday while I was in the shop.\"",
      "options": [
        "Correct - agent is unknown so \"by someone\" is omitted",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "In passive, when the agent is unknown or obvious, we omit \"by...\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "voice_a2_11",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which sentence correctly shows instrument with \"with\" vs agent with \"by\"?",
      "options": [
        "The letter was written with a pen by John.",
        "The letter was written by a pen with John.",
        "The letter was written of a pen from John.",
        "The letter was written at a pen by John."
      ],
      "answer": 0,
      "explanation": "\"by\" = agent (person/creator); \"with\" = tool or instrument.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "voice_a2_12",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb CANNOT be used in the passive voice?",
      "options": [
        "Arrive (intransitive)",
        "Paint (transitive)",
        "Destroy (transitive)",
        "Write (transitive)"
      ],
      "answer": 0,
      "explanation": "Intransitive verbs (no direct object like \"arrive\", \"sleep\", \"happen\") cannot form passive.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "voice_a2_13",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The package will ______ tomorrow morning.",
      "options": [
        "be delivered",
        "delivered",
        "been delivered",
        "be deliver"
      ],
      "answer": 0,
      "explanation": "Future passive: \"will be delivered\".",
      "sourceTip": "British Council A2"
    },
    {
      "id": "voice_a2_14",
      "level": "A2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct the error: \"All the milk was drank by the cat.\"",
      "options": [
        "All the milk was drunk by the cat.",
        "All the milk were drank by the cat.",
        "All the milk is drank by the cat.",
        "All the milk was drinking by the cat."
      ],
      "answer": 0,
      "explanation": "Past participle V3 of \"drink\" is \"drunk\" (drink, drank, drunk).",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "voice_a2_15",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Smoking [A: is] [B: not] [C: allow] [D: inside] the hospital.\"",
      "options": [
        "C: allow - must be passive V3 \"allowed\"",
        "A: is",
        "B: not",
        "D: inside"
      ],
      "answer": 0,
      "explanation": "Present passive negative: \"is not allowed\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "voice_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct Present Continuous passive: \"Right now, the road ______.\"",
      "options": [
        "is being repaired",
        "is repairing",
        "is been repaired",
        "has being repaired"
      ],
      "answer": 0,
      "explanation": "Present continuous passive formula: \"is/are being + V3\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "voice_b1_2",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Convert to Past Continuous passive: \"When I arrived, the dinner (prepare) ______.\"",
      "options": [
        "was being prepared",
        "was preparing",
        "had being prepared",
        "is being prepared"
      ],
      "answer": 0,
      "explanation": "Past continuous passive: \"was being prepared\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "voice_b1_3",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The report has already been submitted to the manager.\"",
      "options": [
        "Correct - Present Perfect passive \"has been + V3\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Present Perfect passive: \"has/have been + past participle\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "voice_b1_4",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which passive tense uses \"being\"?",
      "options": [
        "Continuous / Progressive passives",
        "Simple passives",
        "Perfect passives",
        "Modal simple passives"
      ],
      "answer": 0,
      "explanation": "Continuous passives (present & past) require the auxiliary \"being\".",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "voice_b1_5",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [has / cancelled / due to rain / the flight / been]",
      "options": [
        "The flight has been cancelled due to rain.",
        "Due to rain the flight cancelled has been.",
        "Has been cancelled the flight due to rain.",
        "The flight cancelled has been due to rain."
      ],
      "answer": 0,
      "explanation": "Subject + has been + V3 (cancelled) + reason.",
      "sourceTip": "Bamboozle B1"
    },
    {
      "id": "voice_b1_6",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The stadium [A: was] [B: being] [C: build] when the [D: storm] struck.\"",
      "options": [
        "C: build - must be past participle \"built\"",
        "A: was",
        "B: being",
        "D: storm"
      ],
      "answer": 0,
      "explanation": "Continuous passive needs V3: \"was being built\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "voice_b1_7",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Active: \"Someone gave Sarah a promotion.\" Which is the more natural passive when focusing on Sarah?",
      "options": [
        "Sarah was given a promotion.",
        "A promotion was given Sarah.",
        "Sarah was gave a promotion.",
        "A promotion was gave to Sarah."
      ],
      "answer": 0,
      "explanation": "With two objects (Sarah / promotion), person as subject is most natural: \"Sarah was given a promotion.\"",
      "sourceTip": "British Council B1"
    },
    {
      "id": "voice_b1_8",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The new hospital ______ by the Prime Minister next month.",
      "options": [
        "will be opened",
        "is opened",
        "will opened",
        "will being opened"
      ],
      "answer": 0,
      "explanation": "Future passive: \"will be opened\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "voice_b1_9",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "When we got back to the parking lot, our car ______ away.",
      "options": [
        "had been towed",
        "has been towed",
        "was being tow",
        "had towed"
      ],
      "answer": 0,
      "explanation": "Past Perfect passive for an action completed before another past event: \"had been towed\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "voice_b1_10",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The mystery happened last Tuesday evening.\" -> Can we say \"The mystery was happened\"?",
      "options": [
        "Incorrect - \"happen\" is an intransitive verb and cannot be made passive",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Intransitive verbs like \"happen, occur, die, remain\" have no passive form.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "voice_b1_11",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the active tense to its passive auxiliary:\nPresent Perfect active (has/have written)",
      "options": [
        "has/have been written",
        "is being written",
        "was written",
        "will be written"
      ],
      "answer": 0,
      "explanation": "Present Perfect passive = has/have been + V3.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "voice_b1_12",
      "level": "B1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"The dogs are take care of by my neighbor.\"",
      "options": [
        "The dogs are taken care of by my neighbor.",
        "The dogs are took care of by my neighbor.",
        "The dogs are being take care by my neighbor.",
        "The dogs were take cared of by my neighbor."
      ],
      "answer": 0,
      "explanation": "Phrasal verbs keep their preposition in passive: \"taken care of\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "voice_b1_13",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence contains a CAUSATIVE passive structure (have/get something done)?",
      "options": [
        "I had my laptop repaired yesterday.",
        "I repaired my laptop yesterday.",
        "My laptop was repaired.",
        "A technician repaired my laptop."
      ],
      "answer": 0,
      "explanation": "\"have/get something done\" (had my laptop repaired) expresses arranging for someone else to do the action.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "voice_b1_14",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Conjugate: \"Don't enter the laboratory; new experiments (conduct) ______ right now.\"",
      "options": [
        "are being conducted",
        "are conducted",
        "have been conducted",
        "were conducted"
      ],
      "answer": 0,
      "explanation": "Action in progress at speech time (\"right now\") + passive: \"are being conducted\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "voice_b1_15",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [must / taken / immediately / action / be]",
      "options": [
        "Action must be taken immediately.",
        "Immediately action must taken be.",
        "Be taken must action immediately.",
        "Action taken must be immediately."
      ],
      "answer": 0,
      "explanation": "Subject (Action) + modal (must) + be + V3 (taken) + adverb (immediately).",
      "sourceTip": "test-english B1"
    },
    {
      "id": "voice_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the correct passive reporting structure: \"People believe the criminal is hiding abroad.\"",
      "options": [
        "The criminal is believed to be hiding abroad.",
        "The criminal is believed hiding abroad.",
        "It believes that the criminal is hiding abroad.",
        "The criminal was believed to hide abroad."
      ],
      "answer": 0,
      "explanation": "Personal passive reporting structure: \"Subject + is believed + to-infinitive\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "voice_b2_2",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"It is widely reported that inflation has decreased this quarter.\"",
      "options": [
        "Correct - impersonal passive reporting structure \"It is + V3 + that-clause\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Impersonal reporting structure: \"It is reported / said / thought that...\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "voice_b2_3",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply modal perfect passive: \"The package (should / deliver) ______ yesterday, but it never arrived.\"",
      "options": [
        "should have been delivered",
        "should be delivered",
        "should had been delivered",
        "should have delivered"
      ],
      "answer": 0,
      "explanation": "Modal perfect passive: \"should have been + V3\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "voice_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The proposal [A: was] [B: objected] [C: by] several committee [D: members].\"",
      "options": [
        "B: objected - needs preposition \"objected to by\"",
        "A: was",
        "C: by",
        "D: members"
      ],
      "answer": 0,
      "explanation": "Prepositional verbs retain their preposition in passive: \"was objected TO by\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "voice_b2_5",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb CANNOT be followed by a bare infinitive in the passive (\"He was made to pay\")?",
      "options": [
        "Make (requires \"to\" in passive: \"was made to do\")",
        "Help",
        "Let (replaced by \"allowed to\")",
        "Hear"
      ],
      "answer": 0,
      "explanation": "Active \"They made him apologize\" becomes passive \"He was made TO apologize\" (bare infinitive gains \"to\").",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "voice_b2_6",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [the ancient artifacts / are / thought / to have been / stolen]",
      "options": [
        "The ancient artifacts are thought to have been stolen.",
        "Are thought the ancient artifacts to have been stolen.",
        "To have been stolen are thought the ancient artifacts.",
        "The ancient artifacts to have been stolen are thought."
      ],
      "answer": 0,
      "explanation": "Subject + are thought + to have been + V3 (perfect passive infinitive).",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "voice_b2_7",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the passive form of \"They let us leave early\":",
      "options": [
        "We were allowed to leave early.",
        "We were let leave early.",
        "We were let to leave early.",
        "They were allowed to leave early."
      ],
      "answer": 0,
      "explanation": "\"Let\" is not normally used in passive; replace with \"be allowed to\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "voice_b2_8",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The candidate resented ______ during her opening speech.",
      "options": [
        "being interrupted",
        "to be interrupted",
        "having interrupted",
        "interrupted"
      ],
      "answer": 0,
      "explanation": "\"Resent\" takes a gerund: passive gerund is \"being + V3\" (being interrupted).",
      "sourceTip": "British Council B2"
    },
    {
      "id": "voice_b2_9",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the active \"People say he is a billionaire\" to impersonal passive:",
      "options": [
        "It is said that he is a billionaire.",
        "He is said being a billionaire.",
        "It says he is a billionaire.",
        "He was said a billionaire."
      ],
      "answer": 0,
      "explanation": "Impersonal passive: \"It is said that...\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "voice_b2_10",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She hopes ______ for the promotion next month.",
      "options": [
        "to be selected",
        "to being selected",
        "being selected",
        "to select"
      ],
      "answer": 0,
      "explanation": "\"Hope\" is followed by a to-infinitive; passive to-infinitive is \"to be selected\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "voice_b2_11",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The roof needs repaired immediately.\"",
      "options": [
        "Incorrect - say \"needs repairing\" or \"needs to be repaired\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "\"Need\" takes passive gerund (\"needs repairing\") or passive infinitive (\"needs to be repaired\").",
      "sourceTip": "test-english B2"
    },
    {
      "id": "voice_b2_12",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence uses a causative structure expressing an involuntary misfortune?",
      "options": [
        "He had his passport stolen at the railway station.",
        "He had his teeth cleaned by the dentist.",
        "He had his car serviced yesterday.",
        "He had the painter paint the fence."
      ],
      "answer": 0,
      "explanation": "\"had his passport stolen\" describes an accident/misfortune, not an arranged service.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "voice_b2_13",
      "level": "B2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"The building will have finished by the end of the year.\"",
      "options": [
        "The building will have been finished by the end of the year.",
        "The building will be finish by the end of the year.",
        "The building will have finish by the end of the year.",
        "The building has been finished by the end of the year."
      ],
      "answer": 0,
      "explanation": "Future Perfect passive requires \"will have been + V3\": \"will have been finished\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "voice_b2_14",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Supply the causative form: \"I must (get / my eyes / test) ______ next week.\"",
      "options": [
        "get my eyes tested",
        "get my eyes test",
        "get tested my eyes",
        "get my eyes to test"
      ],
      "answer": 0,
      "explanation": "Causative: \"get + object + V3\" -> \"get my eyes tested\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "voice_b2_15",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He [A: is] [B: alleged] [C: to] [D: stole] the priceless jewelry.\"",
      "options": [
        "D: stole - must be perfect infinitive \"to have stolen\"",
        "A: is",
        "B: alleged",
        "C: to"
      ],
      "answer": 0,
      "explanation": "When the alleged action occurred before the present allegation, use \"to have stolen\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "voice_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the most formal impersonal passive construction with a dummy \"there\":",
      "options": [
        "There are said to be several ancient tombs buried beneath the sand.",
        "It is said there are several ancient tombs beneath the sand.",
        "Several ancient tombs are said to be there buried.",
        "Ancient tombs say there are beneath the sand."
      ],
      "answer": 0,
      "explanation": "\"There + passive verb (are said) + to be\" is a standard academic reporting structure.",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "voice_c1_2",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"A sudden crisis was occurred during the diplomatic negotiations.\"",
      "options": [
        "Incorrect - \"occur\" is unaccusative/intransitive and cannot be passivized",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Unaccusative verbs (occur, happen, fall, emerge) cannot appear in the passive voice.",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "voice_c1_3",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Transform using passive reporting: \"They estimate that the company lost millions.\" -> \"The company is estimated (lose) ______ millions.\"",
      "options": [
        "to have lost",
        "to lose",
        "having lost",
        "to have been lost"
      ],
      "answer": 0,
      "explanation": "The loss preceded the present estimation: use perfect infinitive \"to have lost\".",
      "sourceTip": "test-english C1"
    },
    {
      "id": "voice_c1_4",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Identify the dangling participle caused by passive misuse: \"[A: Walking into] [B: the lab], [C: the solution] was [D: spilled] by the student.\"",
      "options": [
        "A: Walking into - dangling modifier: the solution was not walking!",
        "B: the lab",
        "C: the solution",
        "D: spilled"
      ],
      "answer": 0,
      "explanation": "The subject of the main clause is \"the solution\", which makes the participle dangle.",
      "sourceTip": "British Council C1"
    },
    {
      "id": "voice_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [regarded / as / the theory / has / long been / obsolete]",
      "options": [
        "The theory has long been regarded as obsolete.",
        "Has long been regarded as obsolete the theory.",
        "The theory regarded as obsolete has long been.",
        "Long been the theory has regarded as obsolete."
      ],
      "answer": 0,
      "explanation": "Subject + auxiliary + adverb + been + V3 + complement: \"has long been regarded as obsolete\".",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "voice_c1_6",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb takes a passive with \"with\" rather than \"by\" to denote contents/coverage?",
      "options": [
        "Cover (covered with snow)",
        "Direct (directed by Nolan)",
        "Write (written by Austen)",
        "Paint (painted by Monet)"
      ],
      "answer": 0,
      "explanation": "Stative passives denoting coverage/filling take \"with\": \"covered with snow\", \"filled with water\".",
      "sourceTip": "Wordwall C1"
    },
    {
      "id": "voice_c1_7",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "No one enjoys ______ like a child in public.",
      "options": [
        "being spoken down to",
        "to be spoken down",
        "being spoken down",
        "having spoken down"
      ],
      "answer": 0,
      "explanation": "Phrasal prepositional verb in passive gerund keeps all particles: \"being spoken down to\".",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "voice_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the active structure to its causative equivalent:\n\"I paid a specialist to translate the document.\"",
      "options": [
        "I had the document translated by a specialist.",
        "I was translated the document.",
        "The document was having translated.",
        "I got to translate the document."
      ],
      "answer": 0,
      "explanation": "Causative passive: \"have + object + V3\".",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "voice_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The CEO was seen ______ the headquarters through the underground garage late at night.",
      "options": [
        "to leave",
        "leave",
        "left",
        "leaving to"
      ],
      "answer": 0,
      "explanation": "Verbs of perception take a to-infinitive (or -ing) in the passive: \"was seen TO leave / leaving\".",
      "sourceTip": "test-english C1"
    },
    {
      "id": "voice_c1_10",
      "level": "C1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct: \"An important conclusion was arrived after three days of debates.\"",
      "options": [
        "An important conclusion was arrived at after three days of debates.",
        "An important conclusion was arrived to after three days of debates.",
        "An important conclusion arrived at after three days of debates.",
        "An important conclusion was arrive at after three days."
      ],
      "answer": 0,
      "explanation": "The prepositional verb is \"arrive at\"; the passive MUST retain \"at\": \"was arrived at\".",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "voice_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Why is passive voice preferred here: \"The compound was heated to 100°C and subsequently titrated\"?",
      "options": [
        "To maintain scientific objectivity and focus on the experiment rather than the researcher",
        "Because the active form is grammatically incorrect in English",
        "Because intransitive verbs require passive voice in lab reports",
        "To increase sentence length and lexical complexity"
      ],
      "answer": 0,
      "explanation": "In academic and scientific discourse, passive promotes an objective, process-oriented register.",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "voice_c2_2",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"A magnificent bouquet of roses was given me by the committee.\"",
      "options": [
        "Correct - in formal British English, the indirect object can remain without \"to\" in passive",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "In formal/literary British English, ditransitive passivization allows \"was given me\", though \"was given to me\" is more common.",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "voice_c2_3",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form passive with perfect participle: \"(Warn) ______ repeatedly of the impending avalanche, the climbers nonetheless proceeded up the ridge.\"",
      "options": [
        "Having been warned",
        "Having warned",
        "Being warned",
        "To have been warned"
      ],
      "answer": 0,
      "explanation": "Passive perfect participle clause: \"Having been warned\".",
      "sourceTip": "test-english C2"
    },
    {
      "id": "voice_c2_4",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the subtle register violation: \"The defendant [A: is alleged] [B: to have been] [C: being influenced] [D: by external coercion].\"",
      "options": [
        "C: being influenced - double continuous is ungrammatical; say \"to have been influenced\"",
        "A: is alleged",
        "B: to have been",
        "D: by external coercion"
      ],
      "answer": 0,
      "explanation": "English does not combine continuous \"being\" with perfect passive infinitive: use \"to have been influenced\".",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "voice_c2_5",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [been / the resolution / reached / has finally / upon / agreed]",
      "options": [
        "The resolution agreed upon has finally been reached.",
        "Has finally been reached the resolution agreed upon.",
        "The resolution has finally been reached agreed upon.",
        "Agreed upon has the resolution finally been reached."
      ],
      "answer": 0,
      "explanation": "Prepositional passive modifier + main passive verb: \"The resolution agreed upon has finally been reached.\"",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "voice_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which verb exhibits \"middle voice\" (active morphology with passive meaning)?",
      "options": [
        "The bread cuts easily.",
        "The bread was cut by John.",
        "John cut the bread.",
        "The bread has been cut."
      ],
      "answer": 0,
      "explanation": "Middle voice (ergative/mediopassive): active in form (\"cuts easily\"), but patient is subject.",
      "sourceTip": "Wordwall C2"
    },
    {
      "id": "voice_c2_7",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "There is no record of the treaty ever ______ by the governing council.",
      "options": [
        "having been ratified",
        "to be ratified",
        "been ratified",
        "being had ratified"
      ],
      "answer": 0,
      "explanation": "Preposition \"of\" requires gerund; past passive action requires \"having been ratified\".",
      "sourceTip": "British Council C2"
    },
    {
      "id": "voice_c2_8",
      "level": "C2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the discourse function of the passive to its example:\n\"End-focus principle (placing heavy new info at the end)\"",
      "options": [
        "The theorem was discovered independently by a secluded mathematician from Kyoto.",
        "It is believed that peace will prevail.",
        "The book was sold out.",
        "My bike was stolen."
      ],
      "answer": 0,
      "explanation": "Passive allows long, heavy agents to be placed at the end for rhetorical emphasis (end-weight/end-focus).",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "voice_c2_9",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Under no circumstances ______ to leave the premises without written clearance.",
      "options": [
        "is any personnel to be permitted",
        "any personnel is to be permitted",
        "permitted is any personnel",
        "any personnel to be permitted is"
      ],
      "answer": 0,
      "explanation": "Negative adverbial inversion + passive: \"Under no circumstances IS any personnel TO BE PERMITTED...\".",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "voice_c2_10",
      "level": "C2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct: \"The committee decided that he be conferred with the honorary doctorate.\"",
      "options": [
        "The committee decided that he be conferred the honorary doctorate.",
        "The committee decided that he conferred the honorary doctorate.",
        "The committee decided that he was confer the honorary doctorate.",
        "The committee decided that he been conferred with the doctorate."
      ],
      "answer": 0,
      "explanation": "\"Confer\" in ditransitive passive takes a direct object without \"with\": \"be conferred the honorary doctorate\" (or \"conferred upon him\").",
      "sourceTip": "Cambridge C2"
    }
  ],
  "clauses": [
    {
      "id": "clau_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What must EVERY clause contain?",
      "options": [
        "A subject and a verb",
        "A subject and a preposition",
        "Only a noun",
        "Two punctuation marks"
      ],
      "answer": 0,
      "explanation": "A clause is a group of words that contains both a subject and a predicate verb.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "clau_a1_2",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Because it was raining.\" -> Is this a complete independent clause that can stand alone as a sentence?",
      "options": [
        "Incorrect - it starts with \"Because\", making it a dependent clause",
        "Correct"
      ],
      "answer": 0,
      "explanation": "A dependent clause cannot stand alone as a complete sentence; it is a fragment.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "clau_a1_3",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I like the teacher ______ explains grammar clearly.",
      "options": [
        "who",
        "which",
        "where",
        "when"
      ],
      "answer": 0,
      "explanation": "Use \"who\" for people in relative clauses.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "clau_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which relative pronoun refers to THINGS, not people?",
      "options": [
        "Which",
        "Who",
        "Whom",
        "Whoever"
      ],
      "answer": 0,
      "explanation": "\"Which\" refers to animals and objects.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "clau_a1_5",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she was tired / went to bed / because / Sarah]",
      "options": [
        "Sarah went to bed because she was tired.",
        "Because she was tired Sarah went to bed.",
        "Sarah because she was tired went to bed.",
        "Went to bed Sarah because she was tired."
      ],
      "answer": 0,
      "explanation": "Independent clause + dependent reason clause (\"because she was tired\").",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "clau_a1_6",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"This is [A: the laptop] [B: who] [C: I bought] [D: yesterday].\"",
      "options": [
        "B: who - \"laptop\" is an object, use \"which\" or \"that\"",
        "A: the laptop",
        "C: I bought",
        "D: yesterday"
      ],
      "answer": 0,
      "explanation": "Use \"which\" or \"that\" for objects, never \"who\".",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "clau_a1_7",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the relative pronoun to its antecedent:\n\"Where\"",
      "options": [
        "Places (e.g. the city where I was born)",
        "People",
        "Time",
        "Possessions"
      ],
      "answer": 0,
      "explanation": "\"Where\" refers to places in relative clauses.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "clau_a1_8",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Choose the clause that can stand alone as a complete sentence:",
      "options": [
        "She loves playing tennis.",
        "Although she loves playing tennis.",
        "When she loves playing tennis.",
        "Because she loves playing tennis."
      ],
      "answer": 0,
      "explanation": "\"She loves playing tennis\" has no subordinating conjunction and expresses a complete thought.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "clau_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The restaurant where we ate was very cheap.\"",
      "options": [
        "Correct - \"where we ate\" is a relative clause modifying \"restaurant\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Correct use of relative adverb \"where\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "clau_a1_10",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I will call you when I ______ home.",
      "options": [
        "arrive",
        "will arrive",
        "arrived",
        "arriving"
      ],
      "answer": 0,
      "explanation": "Time clauses with \"when\" use present simple to refer to the future.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "clau_a1_11",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word introduces a condition clause?",
      "options": [
        "If",
        "Because",
        "Who",
        "Which"
      ],
      "answer": 0,
      "explanation": "\"If\" introduces a conditional clause.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "clau_a1_12",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Combine into one sentence with \"who\": \"I met a girl. She speaks four languages.\" -> \"I met a girl (who) ______ four languages.\"",
      "options": [
        "who speaks",
        "who speak",
        "which speaks",
        "who she speaks"
      ],
      "answer": 0,
      "explanation": "Replace the subject pronoun \"She\" with \"who\": \"who speaks\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "clau_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "We stayed inside ______ the weather was cold and windy.",
      "options": [
        "because",
        "who",
        "which",
        "where"
      ],
      "answer": 0,
      "explanation": "\"because\" introduces an adverbial clause of reason.",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "clau_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [if you study / will pass / the test / you / hard]",
      "options": [
        "If you study hard, you will pass the test.",
        "You will pass the test you study hard if.",
        "If will pass the test, you study hard.",
        "You study hard if you will pass the test."
      ],
      "answer": 0,
      "explanation": "Conditional clause (\"If you study hard\") + main clause (\"you will pass the test\").",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "clau_a1_15",
      "level": "A1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"The man which lives next door is a doctor.\"",
      "options": [
        "The man who lives next door is a doctor.",
        "The man where lives next door is a doctor.",
        "The man whose live next door is a doctor.",
        "The man which live next door is a doctor."
      ],
      "answer": 0,
      "explanation": "For human beings, use \"who\" or \"that\", not \"which\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "clau_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which sentence contains a DEFINING relative clause (essential information, no commas)?",
      "options": [
        "The student who got the highest score won a scholarship.",
        "Paris, which is the capital of France, is beautiful.",
        "My father, who is 55, loves gardening.",
        "Mr. Smith, whom I met yesterday, is very kind."
      ],
      "answer": 0,
      "explanation": "Defining relative clauses identify which person/thing is meant and have NO commas.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "clau_a2_2",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "That is the artist ______ paintings are displayed in the national gallery.",
      "options": [
        "whose",
        "who's",
        "which",
        "who"
      ],
      "answer": 0,
      "explanation": "Use \"whose\" to show possession in relative clauses.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "clau_a2_3",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"That is the girl who's cat was lost.\"",
      "options": [
        "Incorrect - \"who's\" means \"who is\" or \"who has\"; possession is \"whose\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Whose = possessive pronoun. Who's = contraction of \"who is/has\".",
      "sourceTip": "test-english A2"
    },
    {
      "id": "clau_a2_4",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"We won't [A: start] the movie [B: until] [C: everyone] [D: will arrive].\"",
      "options": [
        "D: will arrive - time clauses with \"until\" take present simple \"arrives\"",
        "A: start",
        "B: until",
        "C: everyone"
      ],
      "answer": 0,
      "explanation": "Time clauses (until, when, before, after) do not use \"will\"; use present tense.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "clau_a2_5",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word introduces an adverbial clause of CONCESSION?",
      "options": [
        "Although",
        "Because",
        "Whenever",
        "Since"
      ],
      "answer": 0,
      "explanation": "\"Although\" introduces contrast/concession.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "clau_a2_6",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Complete with \"unless\": \"You will fail the exam (study) ______ hard.\"",
      "options": [
        "unless you study",
        "unless you will study",
        "unless you don't study",
        "unless you studied"
      ],
      "answer": 0,
      "explanation": "\"Unless\" means \"if not\" and is followed by affirmative verb in present simple: \"unless you study\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "clau_a2_7",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she was ill / went to work / although / Maria]",
      "options": [
        "Although Maria was ill, she went to work.",
        "Maria went to work was ill although.",
        "Although went to work, Maria was ill.",
        "Maria although was ill she went to work."
      ],
      "answer": 0,
      "explanation": "Concession clause (\"Although Maria was ill,\") + main clause (\"she went to work.\").",
      "sourceTip": "Bamboozle A2"
    },
    {
      "id": "clau_a2_8",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "When can the relative pronoun (who/which/that) be OMITTED in a defining relative clause?",
      "options": [
        "When it is the object of the relative clause (e.g. \"The book [that] I read\")",
        "When it is the subject of the clause",
        "When the sentence is negative",
        "Never in English"
      ],
      "answer": 0,
      "explanation": "Object relative pronouns can be omitted: \"The book (which) I bought\". Subject pronouns cannot (\"The man who called\").",
      "sourceTip": "British Council A2"
    },
    {
      "id": "clau_a2_9",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "I know the man ______ you were talking to.",
      "options": [
        "whom / who / that / (no pronoun)",
        "where",
        "whose",
        "when"
      ],
      "answer": 0,
      "explanation": "When referring to an object person, who/whom/that or zero pronoun is possible.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "clau_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"London, that is a big city, has many museums.\"",
      "options": [
        "Incorrect - \"that\" cannot be used in non-defining relative clauses; use \"which\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "In non-defining clauses (with commas), you MUST use \"which\" for things, never \"that\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "clau_a2_11",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the clause function:\n\"Why he left so suddenly is a secret.\"",
      "options": [
        "Noun Clause (acting as subject of the sentence)",
        "Adjective Clause",
        "Adverb Clause",
        "Independent Clause"
      ],
      "answer": 0,
      "explanation": "\"Why he left so suddenly\" answers \"What?\" and serves as the noun subject.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "clau_a2_12",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence contains a NON-DEFINING relative clause?",
      "options": [
        "My brother, who lives in Tokyo, is visiting next week.",
        "The dog that barked all night belongs to Dave.",
        "Students who work hard get good grades.",
        "The car which I rented broke down."
      ],
      "answer": 0,
      "explanation": "Non-defining clauses add extra, non-essential information and are set off by commas.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "clau_a2_13",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I won't go to the beach ______ it rains.",
      "options": [
        "if",
        "unless",
        "though",
        "despite"
      ],
      "answer": 0,
      "explanation": "Condition: \"if it rains\". (\"unless it rains\" would mean \"I will go except if it rains\").",
      "sourceTip": "test-english A2"
    },
    {
      "id": "clau_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [what / told me / I cannot believe / you]",
      "options": [
        "I cannot believe what you told me.",
        "What you told me I cannot believe.",
        "I cannot what you told me believe.",
        "You told me what I cannot believe."
      ],
      "answer": 0,
      "explanation": "Subject + verb + noun clause object: \"what you told me\".",
      "sourceTip": "Bamboozle A2"
    },
    {
      "id": "clau_a2_15",
      "level": "A2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"The hotel which we stayed at it was very clean.\"",
      "options": [
        "The hotel which we stayed at was very clean.",
        "The hotel where we stayed at was very clean.",
        "The hotel that we stayed at it was very clean.",
        "The hotel which we stayed was very clean."
      ],
      "answer": 0,
      "explanation": "Do not include the pronoun \"it\" because \"which\" already represents the object of \"at\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "clau_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the type of dependent clause: \"I believe [that honesty is the best policy].\"",
      "options": [
        "Noun clause (direct object of \"believe\")",
        "Adjective / Relative clause",
        "Adverb clause of condition",
        "Independent coordinate clause"
      ],
      "answer": 0,
      "explanation": "The clause answers \"What do I believe?\" and functions as the noun object.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "clau_b1_2",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Although it was freezing, but they went swimming.\"",
      "options": [
        "Incorrect - double connector error; do not use both \"Although\" and \"but\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Use either \"Although it was freezing, they went swimming\" OR \"It was freezing, but they went swimming\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "clau_b1_3",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She asked me ______ I had ever visited Japan.",
      "options": [
        "whether",
        "that",
        "what",
        "which"
      ],
      "answer": 0,
      "explanation": "Indirect yes/no questions use \"if\" or \"whether\" to introduce a noun clause.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "clau_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"My grandmother, [A: that] [B: turned 80] [C: last week], [D: is] still active.\"",
      "options": [
        "A: that - non-defining clauses must use \"who\" for people, not \"that\"",
        "B: turned 80",
        "C: last week",
        "D: is"
      ],
      "answer": 0,
      "explanation": "\"That\" is NEVER used in non-defining relative clauses (clauses with commas).",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "clau_b1_5",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word introduces an adverb clause of PURPOSE?",
      "options": [
        "So that",
        "Because",
        "Although",
        "While"
      ],
      "answer": 0,
      "explanation": "\"So that\" (or \"in order that\") introduces an adverbial clause of purpose.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "clau_b1_6",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Combine using a reduced relative participle clause: \"The woman who is talking to the manager is my aunt.\" -> \"The woman (talk) ______ to the manager is my aunt.\"",
      "options": [
        "talking",
        "talked",
        "talks",
        "to talk"
      ],
      "answer": 0,
      "explanation": "Active relative clause reduces to present participle (-ing): \"talking to the manager\".",
      "sourceTip": "British Council B1"
    },
    {
      "id": "clau_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she was looking for / what / she finally found]",
      "options": [
        "She finally found what she was looking for.",
        "What she was looking for she finally found.",
        "She was looking for what she finally found.",
        "She found finally what was she looking for."
      ],
      "answer": 0,
      "explanation": "Subject + verb + nominal relative clause object: \"what she was looking for\".",
      "sourceTip": "Bamboozle B1"
    },
    {
      "id": "clau_b1_8",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "In which sentence does the relative clause have \"whose\" functioning properly?",
      "options": [
        "The author whose latest novel became a bestseller attended the gala.",
        "The author who's latest novel became a bestseller attended the gala.",
        "The author which latest novel became a bestseller attended the gala.",
        "The author that his latest novel became a bestseller attended the gala."
      ],
      "answer": 0,
      "explanation": "\"whose latest novel\" correctly marks possessive antecedent.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "clau_b1_9",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The reason ______ he missed the flight was the heavy traffic.",
      "options": [
        "why",
        "which",
        "where",
        "whose"
      ],
      "answer": 0,
      "explanation": "\"The reason why...\" introduces a relative clause of cause/reason.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "clau_b1_10",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the clause connector to its relationship:\n\"Whereas\"",
      "options": [
        "Contrast / Comparison",
        "Reason / Cause",
        "Time",
        "Condition"
      ],
      "answer": 0,
      "explanation": "\"Whereas\" connects contrasting clauses (e.g. \"He likes cats, whereas I prefer dogs\").",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "clau_b1_11",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Can you tell me where does the train station be?\"",
      "options": [
        "Incorrect - indirect question noun clause requires statement word order: \"where the train station is\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Noun clauses embedded in questions use statement order (Subject + Verb), not inversion.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "clau_b1_12",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence contains an ADJECTIVE (relative) clause?",
      "options": [
        "The shoes that I bought yesterday are too tight.",
        "I wonder where she went.",
        "Because it was late, we left.",
        "That she passed the exam surprised everyone."
      ],
      "answer": 0,
      "explanation": "\"that I bought yesterday\" modifies the noun \"shoes\", making it an adjective clause.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "clau_b1_13",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "______ hard he tried, he could not solve the puzzle.",
      "options": [
        "However",
        "Although",
        "Despite",
        "Even"
      ],
      "answer": 0,
      "explanation": "\"However + adjective/adverb\" introduces a concessive clause: \"However hard he tried...\".",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "clau_b1_14",
      "level": "B1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct: \"I don't know where did he put the car keys.\"",
      "options": [
        "I don't know where he put the car keys.",
        "I don't know where did he puts the car keys.",
        "I don't know where he did put the keys.",
        "I don't know where puts he the car keys."
      ],
      "answer": 0,
      "explanation": "In a noun clause, do not invert or use \"did\": \"where he put the keys\".",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "clau_b1_15",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The package [A: sent] [B: from Berlin] [C: which] [D: it arrived] this morning was damaged.\"",
      "options": [
        "D: it arrived - pronoun \"it\" is redundant with \"which\"",
        "A: sent",
        "B: from Berlin",
        "C: which"
      ],
      "answer": 0,
      "explanation": "\"which\" serves as the subject of \"arrived\"; adding \"it\" is a resumptive pronoun error.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "clau_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the structure: \"Having finished the report, Mark shut down his computer.\"",
      "options": [
        "Participle clause expressing completed prior action",
        "Finite adverbial clause",
        "Noun clause in apposition",
        "Relative non-defining clause"
      ],
      "answer": 0,
      "explanation": "\"Having finished the report\" is a non-finite perfect participle clause functioning adverbially.",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "clau_b2_2",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"The suspect denied what he had committed any crime.\"",
      "options": [
        "Incorrect - use \"that\", not \"what\": \"denied THAT he had committed\"",
        "Correct"
      ],
      "answer": 0,
      "explanation": "\"What\" means \"the thing that\" and cannot replace the declarative complementizer \"that\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "clau_b2_3",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The company fired twenty workers, ______ caused a massive strike.",
      "options": [
        "which",
        "that",
        "what",
        "who"
      ],
      "answer": 0,
      "explanation": "A sentential relative clause (referring back to the entire preceding clause) uses \", which\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "clau_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The committee [A: recommended] [B: that] the policy [C: is] [D: revised] immediately.\"",
      "options": [
        "C: is - should be subjunctive \"be revised\"",
        "A: recommended",
        "B: that",
        "D: revised"
      ],
      "answer": 0,
      "explanation": "Mandative subjunctive after \"recommend that\": \"that the policy BE revised\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "clau_b2_5",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [surprised everyone / that he resigned / so suddenly]",
      "options": [
        "That he resigned so suddenly surprised everyone.",
        "Surprised everyone that he resigned so suddenly.",
        "So suddenly that he resigned surprised everyone.",
        "That surprised everyone he resigned so suddenly."
      ],
      "answer": 0,
      "explanation": "Noun clause acting as the complete sentence subject: \"That he resigned so suddenly...\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "clau_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word introduces a clause of RESULT?",
      "options": [
        "So... that (He was so tired that he fell asleep)",
        "In order that",
        "As though",
        "Whereas"
      ],
      "answer": 0,
      "explanation": "\"so... that\" expresses result/consequence.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "clau_b2_7",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Reduce the relative clause: \"Any employee who violates the safety rules will be dismissed.\" -> \"Any employee (violate) ______ the safety rules will be dismissed.\"",
      "options": [
        "violating",
        "violated",
        "violates",
        "to violate"
      ],
      "answer": 0,
      "explanation": "Active relative clause reduces to present participle: \"violating the safety rules\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "clau_b2_8",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Select the sentence with a correct preposition + relative pronoun structure:",
      "options": [
        "The premise upon which this theory is built has been thoroughly tested.",
        "The premise which upon this theory is built has been tested.",
        "The premise that upon this theory is built has been tested.",
        "The premise where upon this theory is built has been tested."
      ],
      "answer": 0,
      "explanation": "In formal English, preposition precedes relative pronoun: \"upon which\". \"That\" cannot follow prepositions.",
      "sourceTip": "British Council B2"
    },
    {
      "id": "clau_b2_9",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "She looked ______ she had seen a ghost.",
      "options": [
        "as if",
        "although",
        "because",
        "so that"
      ],
      "answer": 0,
      "explanation": "\"as if\" or \"as though\" introduces an adverbial clause of manner/comparison.",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "clau_b2_10",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the reduced clause to its full clause equivalent:\n\"Left alone in the dark, the child began to cry.\"",
      "options": [
        "Because he was left alone in the dark...",
        "While he was leaving alone...",
        "If he leaves alone...",
        "Although he had left alone..."
      ],
      "answer": 0,
      "explanation": "Past participle clause expresses passive cause: \"Because he was left alone...\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "clau_b2_11",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Much as I respect your opinion, I cannot agree with your proposal.\"",
      "options": [
        "Correct - \"Much as...\" is an advanced concessive clause meaning \"Even though I respect...\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Much as + subject + verb\" functions as an advanced concession clause.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "clau_b2_12",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "We visited three museums, none of ______ was open on Monday.",
      "options": [
        "which",
        "whom",
        "what",
        "them"
      ],
      "answer": 0,
      "explanation": "Quantifier + of which/whom introduces a non-defining relative clause: \"none of which\". (Note: \"none of them\" would require a semicolon or new sentence).",
      "sourceTip": "British Council B2"
    },
    {
      "id": "clau_b2_13",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence contains a WH-EVER clause functioning as an adverbial concession?",
      "options": [
        "Whatever happens, stay calm and follow instructions.",
        "Take whatever you want from the fridge.",
        "I will agree to whatever terms you propose.",
        "Whatever is on the desk belongs to the teacher."
      ],
      "answer": 0,
      "explanation": "In \"Whatever happens, stay calm\", the clause means \"No matter what happens\" and modifies the main clause.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "clau_b2_14",
      "level": "B2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"He is the professor whom taught me advanced linguistics.\"",
      "options": [
        "He is the professor who taught me advanced linguistics.",
        "He is the professor which taught me advanced linguistics.",
        "He is the professor whose taught me advanced linguistics.",
        "He is the professor what taught me advanced linguistics."
      ],
      "answer": 0,
      "explanation": "\"Whom\" is an objective pronoun; here the pronoun is the subject of \"taught\", so use \"who\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "clau_b2_15",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"The proposal [A: on that] [B: we spent] three months [C: was rejected] [D: by the board].\"",
      "options": [
        "A: on that - relative pronoun \"that\" cannot follow a preposition; use \"on which\"",
        "B: we spent",
        "C: was rejected",
        "D: by the board"
      ],
      "answer": 0,
      "explanation": "Never place a preposition directly before relative \"that\"; say \"on which\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "clau_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What type of clause is \"It was the marketing director who proposed the merger\"?",
      "options": [
        "A cleft clause (it-cleft) used for information focus",
        "A reduced participial clause",
        "A coordinate independent clause",
        "A nominal appositive clause"
      ],
      "answer": 0,
      "explanation": "Cleft sentences divide a clause to highlight a specific element (\"It was X that/who Y\").",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "clau_c1_2",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Be that as it may, we must proceed according to the original protocol.\"",
      "options": [
        "Correct - archaic fixed subjunctive clause expressing concession (\"Even if that is true\")",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Be that as it may\" is a recognized idiomatic subjunctive concessive clause.",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "clau_c1_3",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "What strikes me most about the research ______ the meticulous methodology.",
      "options": [
        "is",
        "are",
        "being",
        "were"
      ],
      "answer": 0,
      "explanation": "Wh-cleft clauses with \"What\" usually take a singular copular verb (\"is\") when the focus is an abstract concept.",
      "sourceTip": "British Council C1"
    },
    {
      "id": "clau_c1_4",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Hard [A: though] [B: did he work], he [C: failed to meet] the [D: deadline].\"",
      "options": [
        "B: did he work - inverted fronted adjective clauses with \"though/as\" do NOT take auxiliary inversion; say \"Hard though he worked\"",
        "A: though",
        "C: failed to meet",
        "D: deadline"
      ],
      "answer": 0,
      "explanation": "In \"Adjective + though/as + Subject + Verb\", normal SVO order follows: \"Hard though he worked\".",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "clau_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [he said / what / bear in mind / you should]",
      "options": [
        "You should bear in mind what he said.",
        "What he said bear in mind you should.",
        "Bear in mind you should what he said.",
        "You should what he said bear in mind."
      ],
      "answer": 0,
      "explanation": "Subject + verb + phrasal idiom + nominal relative clause object.",
      "sourceTip": "test-english C1"
    },
    {
      "id": "clau_c1_6",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence contains a VERBLESS clause?",
      "options": [
        "When in Rome, do as the Romans do.",
        "When you are in Rome, do as the Romans do.",
        "Whenever you go to Rome, do as the Romans do.",
        "If you should be in Rome, do as the Romans do."
      ],
      "answer": 0,
      "explanation": "\"When in Rome\" has ellipsis of subject and copula (\"When [you are] in Rome\"), forming a verbless clause.",
      "sourceTip": "Wordwall C1"
    },
    {
      "id": "clau_c1_7",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The minister made the bold assertion ______ all public debt would be eliminated within five years.",
      "options": [
        "that",
        "which",
        "what",
        "whom"
      ],
      "answer": 0,
      "explanation": "Noun complement clause: \"assertion that...\" explains the content of the noun (not a relative clause!).",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "clau_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the cleft structure:\n\"Wh-cleft (Pseudo-cleft)\"",
      "options": [
        "What we need is decisive leadership.",
        "It was Sarah who solved the riddle.",
        "All I want is a cup of coffee.",
        "The reason why he left is unknown."
      ],
      "answer": 0,
      "explanation": "\"What we need is...\" is the canonical wh-cleft (pseudo-cleft) construction.",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "clau_c1_9",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Invert the conditional clause without \"if\": \"(If you should need) ______ any assistance, please contact the front desk.\"",
      "options": [
        "Should you need",
        "Had you need",
        "Were you need",
        "Do you need"
      ],
      "answer": 0,
      "explanation": "Conditional inversion: \"If you should need\" -> \"Should you need\".",
      "sourceTip": "British Council C1"
    },
    {
      "id": "clau_c1_10",
      "level": "C1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix: \"The fact which the climate is warming is undeniable.\"",
      "options": [
        "The fact that the climate is warming is undeniable.",
        "The fact what the climate is warming is undeniable.",
        "The fact whose climate is warming is undeniable.",
        "The fact which climate is warming is undeniable."
      ],
      "answer": 0,
      "explanation": "\"that the climate is warming\" is a noun complement clause defining the fact, not an adjective clause.",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "clau_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze the italicized construction: \"The deliberations having concluded, the delegates signed the treaty.\"",
      "options": [
        "An absolute clause (nominative absolute) with its own overt subject",
        "A dangling participle modifier",
        "A coordinated main clause with ellipsis",
        "A relative clause of result"
      ],
      "answer": 0,
      "explanation": "An absolute clause has its own noun subject (\"The deliberations\") and a non-finite participle (\"having concluded\"), grammatically independent from the main clause.",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "clau_c2_2",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Cost what it may, the expedition will proceed to the pole.\"",
      "options": [
        "Correct - archaic optative/concessive subjunctive clause meaning \"Whatever it may cost\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"Cost what it may\" is an idiomatic concessive subjunctive construction in high formal English.",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "clau_c2_3",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "She was reluctant to accept the award, ______ modesty was her defining trait.",
      "options": [
        "for",
        "so",
        "although",
        "despite"
      ],
      "answer": 0,
      "explanation": "Literary coordinating conjunction \"for\" introduces an explanatory clause of cause/reason.",
      "sourceTip": "British Council C2"
    },
    {
      "id": "clau_c2_4",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"He will support [A: whoever] [B: the committee] [C: nominates] to [D: the council].\"",
      "options": [
        "A: whoever - should be objective \"whomever\" as the direct object of \"nominates\"",
        "B: the committee",
        "C: nominates",
        "D: the council"
      ],
      "answer": 0,
      "explanation": "In rigorous formal C2 English, when the relative pronoun is the direct object of the subordinate verb, \"whomever\" is prescribed.",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "clau_c2_5",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she persevered / daunted though / by the obstacles / she was]",
      "options": [
        "Daunted though she was by the obstacles, she persevered.",
        "She persevered daunted though by the obstacles she was.",
        "Though daunted she was by the obstacles, she persevered.",
        "By the obstacles daunted though she was she persevered."
      ],
      "answer": 0,
      "explanation": "Fronted participle complement clause: \"Daunted though she was by the obstacles, she persevered.\"",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "clau_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which construction exemplifies a \"free relative clause\" (nominal relative)?",
      "options": [
        "I will give you whatever you desire.",
        "I will give you the thing which you desire.",
        "I will give you that which is yours.",
        "I will give you everything that you desire."
      ],
      "answer": 0,
      "explanation": "\"whatever you desire\" merges antecedent and relative pronoun into a single nominal constituent.",
      "sourceTip": "Wordwall C2"
    },
    {
      "id": "clau_c2_7",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Strange ______ it may seem, the ancient monument aligns precisely with the winter solstice.",
      "options": [
        "as",
        "like",
        "so",
        "though as"
      ],
      "answer": 0,
      "explanation": "\"Adjective + as/though + subject + modal\" is a classical concessive clause formula.",
      "sourceTip": "British Council C2"
    },
    {
      "id": "clau_c2_8",
      "level": "C2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the clause type:\n\"Come Monday, we must finalize the budget.\"",
      "options": [
        "Subjunctive temporal clause (meaning \"When Monday comes\")",
        "Conditional counterfactual",
        "Defining relative clause",
        "Noun predicate clause"
      ],
      "answer": 0,
      "explanation": "\"Come Monday\" is an inverted subjunctive temporal clause formula.",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "clau_c2_9",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Form inverted counterfactual conditional: \"(Had they known) ______ the truth, they would never have consented.\"",
      "options": [
        "Had they known",
        "If had they known",
        "Were they to know",
        "Did they know"
      ],
      "answer": 0,
      "explanation": "Third conditional inversion: \"Had they known\".",
      "sourceTip": "test-english C2"
    },
    {
      "id": "clau_c2_10",
      "level": "C2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct: \"The professor with whom notes I studied received a Nobel prize.\"",
      "options": [
        "The professor whose notes I studied received a Nobel prize.",
        "The professor of whom notes I studied received a Nobel prize.",
        "The professor which notes I studied received a Nobel prize.",
        "The professor who's notes I studied received a Nobel prize."
      ],
      "answer": 0,
      "explanation": "Possession of notes belonging to the professor requires the relative determiner \"whose notes\".",
      "sourceTip": "Oxford C2"
    }
  ],
  "sentence_structures": [
    {
      "id": "sent_a1_1",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What are the core elements of a standard English simple sentence?",
      "options": [
        "Subject + Verb (+ Object / Complement)",
        "Preposition + Conjunction",
        "Only an adjective",
        "Verb + Adverb only"
      ],
      "answer": 0,
      "explanation": "A basic sentence requires at least a Subject and a Verb: \"Birds fly\".",
      "sourceTip": "British Council A1"
    },
    {
      "id": "sent_a1_2",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Running quickly down the street.\" -> Is this a complete sentence?",
      "options": [
        "Incorrect - it is a sentence fragment (missing subject and finite verb)",
        "Correct"
      ],
      "answer": 0,
      "explanation": "A participial phrase without a subject or finite verb is a fragment.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "sent_a1_3",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "I like tea, ______ my brother prefers coffee.",
      "options": [
        "but",
        "because",
        "so that",
        "although"
      ],
      "answer": 0,
      "explanation": "\"but\" connects two contrasting independent clauses in a compound sentence.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "sent_a1_4",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word is a coordinating conjunction (FANBOYS)?",
      "options": [
        "And",
        "Because",
        "Although",
        "While"
      ],
      "answer": 0,
      "explanation": "FANBOYS: For, And, Nor, But, Or, Yet, So.",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "sent_a1_5",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange into standard order: [plays / my sister / piano / the / every evening]",
      "options": [
        "My sister plays the piano every evening.",
        "Plays my sister the piano every evening.",
        "Every evening plays the piano my sister.",
        "The piano plays my sister every evening."
      ],
      "answer": 0,
      "explanation": "Subject (My sister) + Verb (plays) + Object (the piano) + Time expression (every evening).",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "sent_a1_6",
      "level": "A1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the fragment error: \"[A: We stayed home.] [B: Because it rained] [C: all afternoon.] [D: It was cold.]\"",
      "options": [
        "B: Because it rained - dependent clause standing alone as a fragment",
        "A: We stayed home.",
        "C: all afternoon.",
        "D: It was cold."
      ],
      "answer": 0,
      "explanation": "Dependent clauses cannot stand alone with a period.",
      "sourceTip": "Oxford A1"
    },
    {
      "id": "sent_a1_7",
      "level": "A1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the sentence type:\n\"The sun rises in the east.\"",
      "options": [
        "Simple Sentence (one independent clause)",
        "Compound Sentence",
        "Complex Sentence",
        "Compound-Complex Sentence"
      ],
      "answer": 0,
      "explanation": "Contains one independent clause with a subject and verb.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "sent_a1_8",
      "level": "A1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which sentence is a COMPOUND sentence?",
      "options": [
        "Jack cooked dinner, and Jill washed the dishes.",
        "Jack cooked dinner before Jill arrived.",
        "Cooking dinner was fun.",
        "Jack, who is a chef, cooked dinner."
      ],
      "answer": 0,
      "explanation": "Two independent clauses joined by comma + coordinating conjunction \"and\".",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "sent_a1_9",
      "level": "A1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"She woke up late, so she missed the morning bus.\"",
      "options": [
        "Correct - compound sentence joined by comma and \"so\"",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"so\" connects cause and result between two independent clauses.",
      "sourceTip": "test-english A1"
    },
    {
      "id": "sent_a1_10",
      "level": "A1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Do you want to walk, ______ shall we take a taxi?",
      "options": [
        "or",
        "because",
        "so",
        "although"
      ],
      "answer": 0,
      "explanation": "\"or\" connects two alternative clauses.",
      "sourceTip": "British Council A1"
    },
    {
      "id": "sent_a1_11",
      "level": "A1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which is a COMPLETE sentence?",
      "options": [
        "The baby is sleeping.",
        "In the blue car.",
        "After the heavy storm.",
        "To learn English quickly."
      ],
      "answer": 0,
      "explanation": "\"The baby is sleeping\" has a subject (The baby) and a finite verb (is sleeping).",
      "sourceTip": "Wordwall A1"
    },
    {
      "id": "sent_a1_12",
      "level": "A1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Connect these two clauses into one compound sentence: \"It was raining. We took an umbrella.\" -> \"It was raining, (so) ______ an umbrella.\"",
      "options": [
        "so we took",
        "because we took",
        "but we took",
        "or we took"
      ],
      "answer": 0,
      "explanation": "\"so\" introduces the consequence/result.",
      "sourceTip": "Cambridge A1"
    },
    {
      "id": "sent_a1_13",
      "level": "A1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "My father works in a bank, ______ my mother is a teacher.",
      "options": [
        "and",
        "because",
        "although",
        "if"
      ],
      "answer": 0,
      "explanation": "\"and\" adds corresponding information between two coordinate clauses.",
      "sourceTip": "VOA English A1"
    },
    {
      "id": "sent_a1_14",
      "level": "A1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [tired / was / Tom / went to bed / he / early / so]",
      "options": [
        "Tom was tired, so he went to bed early.",
        "So Tom was tired he went to bed early.",
        "Tom went to bed early so was he tired.",
        "He went to bed early so Tom was tired."
      ],
      "answer": 0,
      "explanation": "Clause 1 + comma + so + Clause 2.",
      "sourceTip": "Bamboozle A1"
    },
    {
      "id": "sent_a1_15",
      "level": "A1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the word order: \"Always she arrives at school early.\"",
      "options": [
        "She always arrives at school early.",
        "She arrives always at school early.",
        "At school early she always arrives.",
        "Always arrives she at school early."
      ],
      "answer": 0,
      "explanation": "Frequency adverbs like \"always\" go between subject and main verb: \"She always arrives\".",
      "sourceTip": "test-english A1"
    },
    {
      "id": "sent_a2_1",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What is a \"comma splice\"?",
      "options": [
        "Joining two independent clauses with only a comma and no conjunction",
        "Using a comma after a subordinating clause",
        "Forgetting a period at the end of a sentence",
        "Putting a comma before an adjective"
      ],
      "answer": 0,
      "explanation": "A comma splice occurs when two complete sentences are incorrectly glued together with only a comma.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "sent_a2_2",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"I love swimming, it is great exercise.\" -> Is this punctuation correct?",
      "options": [
        "Incorrect - this is a comma splice error (needs semicolon, period, or \"because/for\")",
        "Correct"
      ],
      "answer": 0,
      "explanation": "Two independent clauses cannot be joined by a comma alone.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "sent_a2_3",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Although the test was difficult, ______ passed with high scores.",
      "options": [
        "everyone",
        "but everyone",
        "so everyone",
        "and everyone"
      ],
      "answer": 0,
      "explanation": "Do NOT add \"but\" or \"so\" after an initial \"Although\" clause in English.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "sent_a2_4",
      "level": "A2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"[A: The alarm rang.] [B: But nobody] [C: woke up.] [D: Because they were exhausted.]\"",
      "options": [
        "D: Because they were exhausted. - fragment dependent clause",
        "A: The alarm rang.",
        "B: But nobody",
        "C: woke up."
      ],
      "answer": 0,
      "explanation": "\"Because they were exhausted\" is a dependent clause that needs to attach to a main clause.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "sent_a2_5",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange into a complex sentence: [finished his homework / went outside / after / David / to play]",
      "options": [
        "After David finished his homework, he went outside to play.",
        "David finished his homework after he went outside to play.",
        "Went outside to play after David finished his homework.",
        "David after finished his homework went outside to play."
      ],
      "answer": 0,
      "explanation": "Subordinate clause with comma + main clause.",
      "sourceTip": "Bamboozle A2"
    },
    {
      "id": "sent_a2_6",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence is a COMPLEX sentence (one independent clause + at least one dependent clause)?",
      "options": [
        "When the bell rang, the students left the classroom.",
        "The students packed their bags and left.",
        "The bell rang, and the students left.",
        "The bell rang loudly."
      ],
      "answer": 0,
      "explanation": "\"When the bell rang (dependent), the students left the classroom (independent)\" is complex.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "sent_a2_7",
      "level": "A2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the coordinating conjunction:\n\"Nor\"",
      "options": [
        "Negative alternative (e.g. neither A nor B)",
        "Reason",
        "Time",
        "Concession"
      ],
      "answer": 0,
      "explanation": "\"Nor\" links negative coordinates (and triggers subject-auxiliary inversion).",
      "sourceTip": "test-english A2"
    },
    {
      "id": "sent_a2_8",
      "level": "A2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Fix the comma splice: \"I missed the train, I had to take a taxi.\" -> \"I missed the train, (so) ______ take a taxi.\"",
      "options": [
        "so I had to",
        "because I had to",
        "although I had to",
        "while I had to"
      ],
      "answer": 0,
      "explanation": "Add coordinating conjunction \"so\" to fix the comma splice.",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "sent_a2_9",
      "level": "A2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Where does the comma go when an adverbial dependent clause comes FIRST?",
      "options": [
        "Immediately after the dependent clause (e.g. \"Before you leave, lock the door.\")",
        "Between the subject and verb",
        "At the very end of the sentence",
        "No comma is ever used"
      ],
      "answer": 0,
      "explanation": "Introductory dependent clauses require a comma separating them from the independent clause.",
      "sourceTip": "British Council A2"
    },
    {
      "id": "sent_a2_10",
      "level": "A2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Lock the door before you leave.\" -> Does this require a comma before \"before\"?",
      "options": [
        "No - when the dependent clause comes second, a comma is normally NOT used",
        "Yes - always put a comma before \"before\""
      ],
      "answer": 0,
      "explanation": "When the main clause comes first, no comma precedes the subordinate clause.",
      "sourceTip": "test-english A2"
    },
    {
      "id": "sent_a2_11",
      "level": "A2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "The weather was freezing; ______, we enjoyed our hiking trip.",
      "options": [
        "nevertheless",
        "because",
        "so",
        "and"
      ],
      "answer": 0,
      "explanation": "A conjunctive adverb like \"nevertheless / however\" follows a semicolon and precedes a comma.",
      "sourceTip": "Oxford A2"
    },
    {
      "id": "sent_a2_12",
      "level": "A2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which is a FUSED (RUN-ON) sentence error?",
      "options": [
        "The sun set darkness covered the valley.",
        "The sun set, and darkness covered the valley.",
        "When the sun set, darkness covered the valley.",
        "The sun set; darkness covered the valley."
      ],
      "answer": 0,
      "explanation": "\"The sun set darkness covered...\" fuses two clauses together with no punctuation or conjunction.",
      "sourceTip": "Wordwall A2"
    },
    {
      "id": "sent_a2_13",
      "level": "A2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Neither the manager ______ the assistants were present at the meeting.",
      "options": [
        "nor",
        "or",
        "and",
        "but"
      ],
      "answer": 0,
      "explanation": "Correlative conjunction pair: \"Neither... nor\".",
      "sourceTip": "Cambridge A2"
    },
    {
      "id": "sent_a2_14",
      "level": "A2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [she didn't / she was hungry / eat anything / although]",
      "options": [
        "Although she was hungry, she didn't eat anything.",
        "She didn't eat anything although she was hungry.",
        "Although she didn't eat anything, she was hungry.",
        "She was hungry although she didn't eat anything."
      ],
      "answer": 0,
      "explanation": "Introductory clause with comma: \"Although she was hungry, she didn't eat anything.\"",
      "sourceTip": "Bamboozle A2"
    },
    {
      "id": "sent_a2_15",
      "level": "A2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the comma splice: \"He studied hard, he passed the exam.\"",
      "options": [
        "He studied hard, so he passed the exam.",
        "He studied hard he passed the exam.",
        "He studied hard, but he passed the exam.",
        "He studied hard, because he passed the exam."
      ],
      "answer": 0,
      "explanation": "Add coordinating conjunction \"so\" (or replace comma with a semicolon / period).",
      "sourceTip": "test-english A2"
    },
    {
      "id": "sent_b1_1",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What defines a COMPOUND-COMPLEX sentence?",
      "options": [
        "At least two independent clauses and at least one dependent clause",
        "One independent clause and two dependent clauses",
        "Three independent clauses joined by colons",
        "A sentence with two compound subjects"
      ],
      "answer": 0,
      "explanation": "Compound-complex = 2+ independent clauses + 1+ dependent clauses.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "sent_b1_2",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Though Mitchell prefers watching documentaries, his brother loves science fiction films, and they often debate which movie to rent.\"",
      "options": [
        "Correct - Compound-Complex: 1 dependent clause (\"Though...\") + 2 independent clauses",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Exemplifies a valid compound-complex structure.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "sent_b1_3",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The company had a record year; ______, the CEO distributed generous bonuses.",
      "options": [
        "therefore",
        "because",
        "although",
        "but"
      ],
      "answer": 0,
      "explanation": "Conjunctive adverb of result: semicolon + therefore + comma.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "sent_b1_4",
      "level": "B1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the parallel structure flaw: \"She enjoys [A: swimming], [B: to hike in the mountains], and [C: riding] [D: her bicycle].\"",
      "options": [
        "B: to hike in the mountains - should be gerund \"hiking\" to maintain parallelism",
        "A: swimming",
        "C: riding",
        "D: her bicycle"
      ],
      "answer": 0,
      "explanation": "Parallel structure requires identical grammatical forms in a series (swimming, hiking, riding).",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "sent_b1_5",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which word CANNOT be used with a semicolon and comma as a conjunctive adverb?",
      "options": [
        "Because (subordinating conjunction)",
        "However (conjunctive adverb)",
        "Furthermore (conjunctive adverb)",
        "Consequently (conjunctive adverb)"
      ],
      "answer": 0,
      "explanation": "\"Because\" is a subordinating conjunction, not a transitional conjunctive adverb.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "sent_b1_6",
      "level": "B1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Combine into parallel form: \"The job requires dedication, (patience) ______, and being hardworking.\" -> \"dedication, patience, and ______.\"",
      "options": [
        "hard work",
        "hardworking",
        "to work hard",
        "worked hard"
      ],
      "answer": 0,
      "explanation": "Parallel series of three nouns: dedication, patience, and hard work.",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "sent_b1_7",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [however / the product / was high / the price / was exceptional]",
      "options": [
        "The price was high; however, the product was exceptional.",
        "The price was high however the product was exceptional.",
        "However the price was high the product was exceptional.",
        "The product was exceptional however the price was high."
      ],
      "answer": 0,
      "explanation": "Independent clause + semicolon + however + comma + independent clause.",
      "sourceTip": "Bamboozle B1"
    },
    {
      "id": "sent_b1_8",
      "level": "B1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Which punctuation mark joins two closely related independent clauses WITHOUT a coordinating conjunction?",
      "options": [
        "Semicolon (;)",
        "Comma (,)",
        "Hyphen (-)",
        "Apostrophe (')"
      ],
      "answer": 0,
      "explanation": "A semicolon connects two independent clauses that are closely linked in meaning.",
      "sourceTip": "British Council B1"
    },
    {
      "id": "sent_b1_9",
      "level": "B1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Not only did the storm destroy the bridge, ______ it knocked down the power lines.",
      "options": [
        "but also",
        "and also",
        "so that",
        "or else"
      ],
      "answer": 0,
      "explanation": "Correlative pair: \"Not only... but also...\".",
      "sourceTip": "test-english B1"
    },
    {
      "id": "sent_b1_10",
      "level": "B1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the sentence error to its remedy:\n\"Comma splice (I woke up, it was noon)\"",
      "options": [
        "Add a coordinating conjunction (I woke up, and it was noon) or use a semicolon",
        "Remove the subject",
        "Delete the verb",
        "Add another comma"
      ],
      "answer": 0,
      "explanation": "Fix comma splices with semicolon, period, or coordinating conjunction.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "sent_b1_11",
      "level": "B1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"To prepare for the exam, flashcards were reviewed by David.\" -> Does this sentence contain a dangling modifier?",
      "options": [
        "Yes - \"To prepare for the exam\" implies David, but the subject of the clause is \"flashcards\"",
        "No - perfectly correct"
      ],
      "answer": 0,
      "explanation": "Dangling modifier: flashcards cannot prepare for an exam. Say: \"To prepare for the exam, David reviewed flashcards.\"",
      "sourceTip": "Cambridge B1"
    },
    {
      "id": "sent_b1_12",
      "level": "B1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which structure exhibits FAULTY parallelism?",
      "options": [
        "He likes running, reading, and to swim.",
        "He likes running, reading, and swimming.",
        "He likes to run, to read, and to swim.",
        "He likes to run, read, and swim."
      ],
      "answer": 0,
      "explanation": "\"running, reading, and to swim\" mixes gerunds with an infinitive.",
      "sourceTip": "Wordwall B1"
    },
    {
      "id": "sent_b1_13",
      "level": "B1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The flight was delayed; ______, we missed our connecting train in Zurich.",
      "options": [
        "consequently",
        "although",
        "because",
        "unless"
      ],
      "answer": 0,
      "explanation": "\"consequently\" signals logical result after a semicolon.",
      "sourceTip": "test-english B1"
    },
    {
      "id": "sent_b1_14",
      "level": "B1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [neither / nor / the teacher / the students / were convinced]",
      "options": [
        "Neither the teacher nor the students were convinced.",
        "Nor the students neither the teacher were convinced.",
        "The teacher neither nor the students were convinced.",
        "Were convinced neither the teacher nor the students."
      ],
      "answer": 0,
      "explanation": "Correlative subject structure: \"Neither X nor Y were convinced.\"",
      "sourceTip": "Bamboozle B1"
    },
    {
      "id": "sent_b1_15",
      "level": "B1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct the dangling modifier: \"Walking into the kitchen, the smoke alarm sounded.\"",
      "options": [
        "When I walked into the kitchen, the smoke alarm sounded.",
        "Walking into the kitchen, the alarm made sound.",
        "The smoke alarm sounded walking into the kitchen.",
        "Into the kitchen walking, the smoke alarm sounded."
      ],
      "answer": 0,
      "explanation": "The smoke alarm was not walking into the kitchen; clarify the human agent.",
      "sourceTip": "Oxford B1"
    },
    {
      "id": "sent_b2_1",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the inversion structure: \"Seldom ______ such a breathtaking display of fireworks.\"",
      "options": [
        "have I seen",
        "I have seen",
        "did I saw",
        "I saw"
      ],
      "answer": 0,
      "explanation": "Negative frequency adverbs (Seldom, Rarely, Never) at the start of a sentence trigger inversion: auxiliary + subject + verb.",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "sent_b2_2",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"No sooner had we stepped outside than the torrential downpour started.\"",
      "options": [
        "Correct - \"No sooner had... than...\" inversion formula",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "\"No sooner\" triggers inverted past perfect and is paired with \"than\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "sent_b2_3",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Hardly had the meeting begun ______ the fire alarm rang.",
      "options": [
        "when",
        "than",
        "then",
        "that"
      ],
      "answer": 0,
      "explanation": "\"Hardly... when\" (or \"Scarcely... when\") is the required correlative pair.",
      "sourceTip": "test-english B2"
    },
    {
      "id": "sent_b2_4",
      "level": "B2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the flaw: \"Not only [A: she speaks] [B: fluent Russian], but she [C: also] [D: writes] classical poetry.\"",
      "options": [
        "A: she speaks - negative limiter \"Not only\" at start requires inversion: \"does she speak\"",
        "B: fluent Russian",
        "C: also",
        "D: writes"
      ],
      "answer": 0,
      "explanation": "\"Not only DOES SHE SPEAK...\" is required by fronted negative inversion.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "sent_b2_5",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [did / realize / the danger / little / they / they were in]",
      "options": [
        "Little did they realize the danger they were in.",
        "They realized little did the danger they were in.",
        "Did they realize little the danger they were in.",
        "The danger they were in little did they realize."
      ],
      "answer": 0,
      "explanation": "Negative limiter \"Little\" + did + subject + bare infinitive: \"Little did they realize...\".",
      "sourceTip": "Bamboozle B2"
    },
    {
      "id": "sent_b2_6",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which fronted phrase does NOT trigger auxiliary inversion?",
      "options": [
        "In the corner stood a grandfather clock (locative full inversion, not auxiliary)",
        "Under no circumstances should you...",
        "Rarely have we witnessed...",
        "At no time was the public in danger..."
      ],
      "answer": 0,
      "explanation": "Locative prepositional inversion moves the main verb directly (\"stood a clock\"), unlike negative auxiliary inversion.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "sent_b2_7",
      "level": "B2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Invert with \"Never\": \"I have never seen such courage.\" -> \"Never (see) ______ such courage.\"",
      "options": [
        "have I seen",
        "I have seen",
        "did I saw",
        "saw I"
      ],
      "answer": 0,
      "explanation": "\"Never have I seen such courage.\"",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "sent_b2_8",
      "level": "B2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "What is a \"periodic sentence\"?",
      "options": [
        "A sentence where the main independent clause is held until the very end, building suspense",
        "A sentence that repeats words at regular periods",
        "A sentence that contains only periods and no commas",
        "A run-on sentence that spans several lines"
      ],
      "answer": 0,
      "explanation": "In a periodic sentence, subordinate details come first and the main thought is delayed until the climax.",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "sent_b2_9",
      "level": "B2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Only after reading the contract carefully ______ realize the hidden costs.",
      "options": [
        "did he",
        "he did",
        "he had",
        "was he"
      ],
      "answer": 0,
      "explanation": "\"Only after...\" fronted triggers subject-auxiliary inversion in the main clause: \"did he realize\".",
      "sourceTip": "British Council B2"
    },
    {
      "id": "sent_b2_10",
      "level": "B2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the fronted inversion trigger:\n\"Under no circumstances\"",
      "options": [
        "Negative restriction (e.g. Under no circumstances may students leave)",
        "Locative inversion",
        "Comparison",
        "Purpose"
      ],
      "answer": 0,
      "explanation": "\"Under no circumstances\" requires immediate auxiliary inversion: \"may you...\", \"should we...\".",
      "sourceTip": "test-english B2"
    },
    {
      "id": "sent_b2_11",
      "level": "B2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Having been cooked for four hours, the guests relished the roast beef.\" -> Is there a dangling modifier?",
      "options": [
        "Yes - \"the guests\" were not cooked for four hours!",
        "No - perfectly clear"
      ],
      "answer": 0,
      "explanation": "The introductory participial modifier attaches to \"the guests\". Fix: \"...the guests relished the roast beef, which had been cooked for four hours.\"",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "sent_b2_12",
      "level": "B2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which sentence is a \"cumulative (loose) sentence\" (main clause first, followed by modifiers)?",
      "options": [
        "The old mansion loomed on the hill, its windows dark and its wooden shutters rattling in the wind.",
        "Because the windows were dark and the shutters rattled, the old mansion loomed.",
        "When night fell, the old mansion loomed on the hill.",
        "Hardly had night fallen when the mansion loomed."
      ],
      "answer": 0,
      "explanation": "A cumulative sentence opens with the main clause and accumulates explanatory details.",
      "sourceTip": "Wordwall B2"
    },
    {
      "id": "sent_b2_13",
      "level": "B2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "So intense ______ that the athletes had to take frequent hydration breaks.",
      "options": [
        "was the heat",
        "the heat was",
        "had the heat been",
        "is the heat"
      ],
      "answer": 0,
      "explanation": "\"So + adjective\" fronted triggers inversion: \"So intense was the heat that...\".",
      "sourceTip": "Oxford B2"
    },
    {
      "id": "sent_b2_14",
      "level": "B2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [on no account / must / be / left unattended / this luggage]",
      "options": [
        "On no account must this luggage be left unattended.",
        "Must this luggage be left unattended on no account.",
        "This luggage on no account must be left unattended.",
        "On no account this luggage must be left unattended."
      ],
      "answer": 0,
      "explanation": "Negative fronting: \"On no account + modal must + subject + passive infinitive\".",
      "sourceTip": "Bamboozle B2"
    },
    {
      "id": "sent_b2_15",
      "level": "B2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Fix the sentence: \"Scarcely had she arrived than the phone rang.\"",
      "options": [
        "Scarcely had she arrived when the phone rang.",
        "Scarcely had she arrived then the phone rang.",
        "Scarcely she had arrived when the phone rang.",
        "Scarcely did she arrived when the phone rang."
      ],
      "answer": 0,
      "explanation": "\"Scarcely\" pairs with \"when\", whereas \"No sooner\" pairs with \"than\".",
      "sourceTip": "Cambridge B2"
    },
    {
      "id": "sent_c1_1",
      "level": "C1",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Analyze the rhetorical balance: \"Ask not what your country can do for you; ask what you can do for your country.\" This is an example of:",
      "options": [
        "Chiasmus / Antimetabole (reversal of grammatical structures in successive clauses)",
        "Asyndeton only",
        "Anacoluthon",
        "Polysyndeton"
      ],
      "answer": 0,
      "explanation": "Chiasmus / antimetabole reverses identical words and concepts across parallel balanced clauses (AB - BA).",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "sent_c1_2",
      "level": "C1",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Only by relentless experimentation were the scientists able to synthesize the unstable isotope.\"",
      "options": [
        "Correct - \"Only by + gerund\" fronting triggers main clause auxiliary inversion",
        "Incorrect"
      ],
      "answer": 0,
      "explanation": "Fronted restrictive adverbial phrase \"Only by...\" requires inversion: \"were the scientists able\".",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "sent_c1_3",
      "level": "C1",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Construct a conditional inversion without \"if\": \"(If it had not been for) ______ your steadfast support, I would have succumbed to despair.\"",
      "options": [
        "Had it not been for",
        "Were it not been for",
        "Should it not be for",
        "Had not it been for"
      ],
      "answer": 0,
      "explanation": "Unreal past conditional inversion: \"Had it not been for...\".",
      "sourceTip": "test-english C1"
    },
    {
      "id": "sent_c1_4",
      "level": "C1",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the error: \"Not until [A: did she reach] the summit [B: did she realize] [C: how treacherous] the path [D: had been].\"",
      "options": [
        "A: did she reach - do NOT invert inside the \"Not until\" dependent clause; invert only the main clause (\"did she reach\" -> \"she reached\")",
        "B: did she realize",
        "C: how treacherous",
        "D: had been"
      ],
      "answer": 0,
      "explanation": "In \"Not until X, Y\", only the main clause Y is inverted: \"Not until she reached the summit did she realize...\".",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "sent_c1_5",
      "level": "C1",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [the truth / to emerge / begins / only then]",
      "options": [
        "Only then does the truth begin to emerge.",
        "Only then the truth begins to emerge.",
        "Begins the truth only then to emerge.",
        "The truth only then does begin to emerge."
      ],
      "answer": 0,
      "explanation": "\"Only then\" + auxiliary does + subject (the truth) + base verb (begin to emerge).",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "sent_c1_6",
      "level": "C1",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which stylistic device omits conjunctions between coordinate clauses for dramatic pace (\"I came, I saw, I conquered\")?",
      "options": [
        "Asyndeton",
        "Polysyndeton",
        "Litotes",
        "Zeugma"
      ],
      "answer": 0,
      "explanation": "Asyndeton deliberately removes coordinating conjunctions to create rhythm and speed.",
      "sourceTip": "Wordwall C1"
    },
    {
      "id": "sent_c1_7",
      "level": "C1",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Were the proposal ______ approved by the senate, severe budgetary constraints would follow.",
      "options": [
        "to be",
        "be",
        "been",
        "is"
      ],
      "answer": 0,
      "explanation": "Second conditional inversion with passive infinitive: \"Were + subject + to be + V3\".",
      "sourceTip": "British Council C1"
    },
    {
      "id": "sent_c1_8",
      "level": "C1",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the rhetorical sentence scheme:\n\"Polysyndeton\"",
      "options": [
        "Deliberate repetition of multiple coordinating conjunctions for emotional weight",
        "Omission of conjunctions",
        "Reversal of clause order",
        "Abrupt shift in syntactic construction mid-sentence"
      ],
      "answer": 0,
      "explanation": "Polysyndeton uses multiple conjunctions in close succession (e.g. \"and... and... and...\").",
      "sourceTip": "Cambridge C1"
    },
    {
      "id": "sent_c1_9",
      "level": "C1",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "Such ______ that thousands queued overnight outside the stadium.",
      "options": [
        "was the demand for tickets",
        "the demand was for tickets",
        "the demand for tickets was",
        "was for tickets the demand"
      ],
      "answer": 0,
      "explanation": "\"Such was + noun phrase + that-clause\" is an inverted emphatic structure.",
      "sourceTip": "Oxford C1"
    },
    {
      "id": "sent_c1_10",
      "level": "C1",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct: \"No sooner we had closed the windows than the thunder roared.\"",
      "options": [
        "No sooner had we closed the windows than the thunder roared.",
        "No sooner we closed the windows than the thunder roared.",
        "No sooner did we closed the windows than the thunder roared.",
        "No sooner had we closed the windows when the thunder roared."
      ],
      "answer": 0,
      "explanation": "\"No sooner\" at the start of a sentence requires inversion: \"No sooner had we closed...\".",
      "sourceTip": "test-english C1"
    },
    {
      "id": "sent_c2_1",
      "level": "C2",
      "type": "multiple_choice",
      "typeLabel": "Multiple Choice",
      "skillTested": "Understanding",
      "question": "Identify the syntactic error in: \"The architect designed a skyscraper, and which won several international awards.\"",
      "options": [
        "Faulty coordination with \"and which\" (coordinating a relative clause to an independent clause without a preceding relative clause)",
        "Comma splice",
        "Dangling participle",
        "Split infinitive"
      ],
      "answer": 0,
      "explanation": "\"And which\" cannot coordinate a relative clause directly to a main clause unless preceded by an existing parallel relative clause.",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "sent_c2_2",
      "level": "C2",
      "type": "correct_incorrect",
      "typeLabel": "Correct or Incorrect",
      "skillTested": "Understanding",
      "question": "Evaluate: \"Gazing upon the ancient ruins, an overwhelming sense of reverence swept over the historian.\" -> Is this a dangling modifier?",
      "options": [
        "Yes - the participial phrase modifies \"an overwhelming sense of reverence\", which cannot gaze upon ruins",
        "No - perfectly acceptable in modern prose"
      ],
      "answer": 0,
      "explanation": "A dangling participle must logically attach to the immediate subject of the matrix clause. The historian did the gazing, not the sense of reverence.",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "sent_c2_3",
      "level": "C2",
      "type": "fill_blank",
      "typeLabel": "Fill in the Blank",
      "skillTested": "Producing",
      "question": "The treatise was profound in conception, lucid in exposition, and ______ in argumentation.",
      "options": [
        "compelling",
        "to compel",
        "it compelled",
        "having compelled"
      ],
      "answer": 0,
      "explanation": "Strict parallel tricolon of paired adjective-prepositional phrase structures: profound..., lucid..., compelling...",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "sent_c2_4",
      "level": "C2",
      "type": "checking_error",
      "typeLabel": "Checking Error",
      "skillTested": "Explaining",
      "question": "Spot the syntactic disruption: \"The minister started by [A: praising the workforce], [B: outlined new incentives], and [C: concluded] [D: with a tribute].\"",
      "options": [
        "B: outlined new incentives - unparallel structure following preposition \"by\"; should be \"outlining new incentives\"",
        "A: praising the workforce",
        "C: concluded",
        "D: with a tribute"
      ],
      "answer": 0,
      "explanation": "Parallel coordination after preposition \"by\": \"by praising..., outlining..., and concluding...\".",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "sent_c2_5",
      "level": "C2",
      "type": "sentence_unscramble",
      "typeLabel": "Sentence Unscramble",
      "skillTested": "Producing",
      "question": "Arrange: [the truth / conceal / he attempted / much as / was revealed / everything]",
      "options": [
        "Much as he attempted to conceal the truth, everything was revealed.",
        "Everything was revealed much as he attempted to conceal the truth.",
        "To conceal the truth much as he attempted everything was revealed.",
        "Much as everything was revealed he attempted to conceal the truth."
      ],
      "answer": 0,
      "explanation": "Fronted concessive clause: \"Much as he attempted to conceal the truth, everything was revealed.\"",
      "sourceTip": "test-english C2"
    },
    {
      "id": "sent_c2_6",
      "level": "C2",
      "type": "odd_one_out",
      "typeLabel": "Odd One Out",
      "skillTested": "Memory",
      "question": "Which term describes an abrupt grammatical discontinuity where a sentence starts with one construction and shifts mid-stream (\"Anacoluthon\")?",
      "options": [
        "Anacoluthon (syntactic fracture / lack of grammatical sequence)",
        "Polysyndeton",
        "Chiasmus",
        "Tricolon"
      ],
      "answer": 0,
      "explanation": "Anacoluthon is an intentional or accidental syntactic fracture where the sentence abandons its original structure mid-way.",
      "sourceTip": "Wordwall C2"
    },
    {
      "id": "sent_c2_7",
      "level": "C2",
      "type": "cloze",
      "typeLabel": "Cloze Test",
      "skillTested": "Understanding",
      "question": "Little ______ that the document would spark a worldwide revolution.",
      "options": [
        "did the authors imagine",
        "the authors imagined",
        "had the authors imagine",
        "the authors did imagine"
      ],
      "answer": 0,
      "explanation": "Negative polarity adverb \"Little\" triggers inversion: \"did the authors imagine\".",
      "sourceTip": "British Council C2"
    },
    {
      "id": "sent_c2_8",
      "level": "C2",
      "type": "matching",
      "typeLabel": "Matching",
      "skillTested": "Memory",
      "question": "Match the advanced structural phenomenon:\n\"Gapping (Syntactic Ellipsis)\"",
      "options": [
        "Omission of identical repeated verbs in coordinate clauses (e.g. \"Paul visited Rome, and Mary, Venice\")",
        "Duplication of auxiliaries",
        "Fronting of objects",
        "Inversion of tense markers"
      ],
      "answer": 0,
      "explanation": "Gapping deletes the lexical verb in the second coordinate clause when it matches the first.",
      "sourceTip": "Cambridge C2"
    },
    {
      "id": "sent_c2_9",
      "level": "C2",
      "type": "open_bracket",
      "typeLabel": "Open Bracket",
      "skillTested": "Producing",
      "question": "Invert negative conditional clause: \"(Were it not for) ______ his prompt intervention, the venture would have collapsed.\"",
      "options": [
        "Were it not for",
        "If it were not",
        "Had it not for",
        "Should it not be for"
      ],
      "answer": 0,
      "explanation": "Second conditional inversion: \"Were it not for...\".",
      "sourceTip": "Oxford C2"
    },
    {
      "id": "sent_c2_10",
      "level": "C2",
      "type": "error_correction",
      "typeLabel": "Error Correction",
      "skillTested": "Explaining",
      "question": "Correct the faulty coordination: \"He is a scholar of great renown and who has published extensively in peer-reviewed journals.\"",
      "options": [
        "He is a scholar who possesses great renown and who has published extensively.",
        "He is a scholar of great renown and published extensively.",
        "He is a scholar of great renown whom has published extensively.",
        "He is a scholar having great renown and which published extensively."
      ],
      "answer": 0,
      "explanation": "To coordinate with \"and who...\", the preceding element must also be a relative clause (\"who possesses... and who has published...\").",
      "sourceTip": "Cambridge C2"
    }
  ],
  "gerund_infinitive": [
    {
        "id": "gi_a1_1",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct form: \"She likes ______ books in the library.\"",
        "options": [
            "read",
            "reading",
            "to readed",
            "reads"
        ],
        "answer": 1,
        "explanation": "After the verb \"like\", we frequently use a gerund (V-ing) to express general hobbies: \"reading\".",
        "sourceTip": "British Council A1"
    },
    {
        "id": "gi_a1_2",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct form: \"I want ______ a new laptop for my studies.\"",
        "options": [
            "buying",
            "to buy",
            "buy",
            "bought"
        ],
        "answer": 1,
        "explanation": "The verb \"want\" is followed by a to-infinitive: \"want to buy\".",
        "sourceTip": "test-english A1"
    },
    {
        "id": "gi_a1_3",
        "level": "A1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"They decided ______ to Angkor Wat this weekend.\"",
        "options": [
            "go",
            "going",
            "to go",
            "went"
        ],
        "answer": 2,
        "explanation": "\"Decide\" is always followed by a to-infinitive: \"decided to go\".",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "gi_a1_4",
        "level": "A1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate this sentence: \"He is very good at speak English.\"",
        "options": [
            "Correct",
            "Incorrect - it should be \"good at speaking\""
        ],
        "answer": 1,
        "explanation": "After prepositions like \"at\", verbs must take the gerund form (-ing): \"good at speaking\".",
        "sourceTip": "Oxford A1"
    },
    {
        "id": "gi_a1_5",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct sentence: \"We enjoy ______ football after class.\"",
        "options": [
            "playing",
            "to play",
            "play",
            "played"
        ],
        "answer": 0,
        "explanation": "\"Enjoy\" is always followed by a gerund: \"enjoy playing\".",
        "sourceTip": "British Council A1"
    },
    {
        "id": "gi_a1_6",
        "level": "A1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Put the verb in brackets into the correct form: \"Thank you for (help) ______ me with my homework.\"",
        "options": [
            "help",
            "to help",
            "helping",
            "helped"
        ],
        "answer": 2,
        "explanation": "After the preposition \"for\", the verb takes -ing: \"for helping\".",
        "sourceTip": "test-english A1"
    },
    {
        "id": "gi_a1_7",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct sentence:",
        "options": [
            "I would like to have a cup of tea.",
            "I would like having a cup of tea.",
            "I would like have a cup of tea.",
            "I would like to having a cup of tea."
        ],
        "answer": 0,
        "explanation": "\"Would like\" is followed by a to-infinitive: \"would like to have\".",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "gi_a1_8",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Complete the phrase: \"Let's go ______ at the market this afternoon.\"",
        "options": [
            "shop",
            "to shop",
            "shopping",
            "shopped"
        ],
        "answer": 2,
        "explanation": "The expression \"go + V-ing\" is used for recreational activities and chores: \"go shopping\".",
        "sourceTip": "British Council A1"
    },
    {
        "id": "gi_a1_9",
        "level": "A1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error in: \"She hopes seeing her family next week.\"",
        "options": [
            "She",
            "hopes",
            "seeing (should be \"to see\")",
            "next week"
        ],
        "answer": 2,
        "explanation": "\"Hope\" requires a to-infinitive: \"hopes to see\", not \"seeing\".",
        "sourceTip": "Oxford A1"
    },
    {
        "id": "gi_a1_10",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What role does \"Swimming\" play in \"Swimming is my favorite sport\"?",
        "options": [
            "Verb in present continuous",
            "Gerund functioning as Subject",
            "Infinitive of purpose",
            "Adjective"
        ],
        "answer": 1,
        "explanation": "Here \"Swimming\" is a gerund (V-ing) acting as the subject of the sentence.",
        "sourceTip": "Grammar in Use A1"
    },
    {
        "id": "gi_a1_11",
        "level": "A1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"He needs ______ his homework before dinner.\"",
        "options": [
            "finish",
            "finishing",
            "to finish",
            "finished"
        ],
        "answer": 2,
        "explanation": "\"Need\" is followed by a to-infinitive when expressing personal obligation: \"needs to finish\".",
        "sourceTip": "test-english A1"
    },
    {
        "id": "gi_a1_12",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct option: \"You can ______ English very well.\"",
        "options": [
            "speak",
            "to speak",
            "speaking",
            "spoke"
        ],
        "answer": 0,
        "explanation": "Modal verbs like \"can\", \"must\", and \"should\" take a bare infinitive (base form without \"to\"): \"can speak\".",
        "sourceTip": "British Council A1"
    },
    {
        "id": "gi_a1_13",
        "level": "A1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Is this sentence correct? \"I love to eating Khmer noodles in the morning.\"",
        "options": [
            "Correct",
            "Incorrect - say \"love eating\" or \"love to eat\""
        ],
        "answer": 1,
        "explanation": "You cannot combine \"to\" with a gerund here: either use \"to eat\" or \"eating\".",
        "sourceTip": "Oxford A1"
    },
    {
        "id": "gi_a1_14",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"She promised ______ on time tomorrow.\"",
        "options": [
            "arrive",
            "to arrive",
            "arriving",
            "arrived"
        ],
        "answer": 1,
        "explanation": "\"Promise\" is followed by a to-infinitive: \"promised to arrive\".",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "gi_a1_15",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which verb is followed by a gerund (V-ing)?",
        "options": [
            "decide",
            "hope",
            "finish",
            "promise"
        ],
        "answer": 2,
        "explanation": "\"Finish\" is followed by a gerund: \"finish doing something\". The others take to-infinitives.",
        "sourceTip": "test-english A1"
    },
    {
        "id": "gi_a2_1",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct form: \"He avoided ______ questions about the test.\"",
        "options": [
            "answer",
            "to answer",
            "answering",
            "answered"
        ],
        "answer": 2,
        "explanation": "\"Avoid\" is followed by a gerund: \"avoided answering\".",
        "sourceTip": "British Council A2"
    },
    {
        "id": "gi_a2_2",
        "level": "A2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"We agreed ______ the project together.\"",
        "options": [
            "doing",
            "to do",
            "do",
            "did"
        ],
        "answer": 1,
        "explanation": "\"Agree\" is followed by a to-infinitive: \"agreed to do\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "gi_a2_3",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct sentence expressing purpose:",
        "options": [
            "I went to the store for buy some milk.",
            "I went to the store to buy some milk.",
            "I went to the store for to buy milk.",
            "I went to the store buying milk."
        ],
        "answer": 1,
        "explanation": "The to-infinitive is used to express purpose (why someone does something): \"to buy milk\".",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "gi_a2_4",
        "level": "A2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the mistake: \"They refused helping the strange man.\"",
        "options": [
            "They",
            "refused",
            "helping (should be \"to help\")",
            "the strange man"
        ],
        "answer": 2,
        "explanation": "\"Refuse\" is followed by a to-infinitive: \"refused to help\".",
        "sourceTip": "Oxford A2"
    },
    {
        "id": "gi_a2_5",
        "level": "A2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"Do you mind (open) ______ the window, please?\"",
        "options": [
            "open",
            "to open",
            "opening",
            "opened"
        ],
        "answer": 2,
        "explanation": "\"Mind\" is followed by a gerund: \"Do you mind opening...?\"",
        "sourceTip": "British Council A2"
    },
    {
        "id": "gi_a2_6",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct form: \"She is learning ______ traditional Khmer music.\"",
        "options": [
            "play",
            "playing",
            "to play",
            "played"
        ],
        "answer": 2,
        "explanation": "\"Learn\" is followed by a to-infinitive: \"learning to play\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "gi_a2_7",
        "level": "A2",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Is this sentence grammatically correct? \"He suggested going to the park.\"",
        "options": [
            "Correct",
            "Incorrect - should be \"suggested to go\""
        ],
        "answer": 0,
        "explanation": "\"Suggest\" is followed by a gerund: \"suggested going\". It is grammatically correct.",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "gi_a2_8",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which sentence uses a bare infinitive correctly?",
        "options": [
            "My teacher made me to redo the assignment.",
            "My teacher made me redoing the assignment.",
            "My teacher made me redo the assignment.",
            "My teacher made to redo the assignment."
        ],
        "answer": 2,
        "explanation": "The causative verb \"make\" takes an object + bare infinitive in the active voice: \"made me redo\".",
        "sourceTip": "Oxford A2"
    },
    {
        "id": "gi_a2_9",
        "level": "A2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"We can't afford ______ on holiday this month.\"",
        "options": [
            "go",
            "going",
            "to go",
            "went"
        ],
        "answer": 2,
        "explanation": "\"Afford\" is followed by a to-infinitive: \"afford to go\".",
        "sourceTip": "British Council A2"
    },
    {
        "id": "gi_a2_10",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct negative infinitive: \"He told me ______ late.\"",
        "options": [
            "not be",
            "to not be",
            "not to be",
            "not being"
        ],
        "answer": 2,
        "explanation": "The negative to-infinitive places \"not\" directly before \"to\": \"not to be\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "gi_a2_11",
        "level": "A2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the mistake: \"She left the classroom without to say goodbye.\"",
        "options": [
            "She left",
            "the classroom",
            "without to say (should be \"without saying\")",
            "goodbye"
        ],
        "answer": 2,
        "explanation": "\"Without\" is a preposition and must be followed by a gerund: \"without saying\".",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "gi_a2_12",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct sentence: \"It is important ______ daily vocabulary.\"",
        "options": [
            "practice",
            "to practice",
            "practicing",
            "practiced"
        ],
        "answer": 1,
        "explanation": "After dummy \"It is + Adjective\", use a to-infinitive: \"It is important to practice\".",
        "sourceTip": "Oxford A2"
    },
    {
        "id": "gi_a2_13",
        "level": "A2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete with the correct form: \"She practiced (speak) ______ English every morning.\"",
        "options": [
            "speak",
            "to speak",
            "speaking",
            "spoke"
        ],
        "answer": 2,
        "explanation": "\"Practice\" takes a gerund: \"practiced speaking\".",
        "sourceTip": "British Council A2"
    },
    {
        "id": "gi_a2_14",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Complete: \"My parents let me ______ to the party with my classmates.\"",
        "options": [
            "go",
            "to go",
            "going",
            "went"
        ],
        "answer": 0,
        "explanation": "\"Let\" takes object + bare infinitive: \"let me go\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "gi_a2_15",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which of the following verbs can take BOTH gerund and infinitive with NO change in meaning?",
        "options": [
            "enjoy",
            "begin",
            "decide",
            "avoid"
        ],
        "answer": 1,
        "explanation": "\"Begin\" can take either a gerund or to-infinitive with essentially identical meaning: \"began raining\" = \"began to rain\".",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "gi_b1_1",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does this mean: \"I remembered to lock the door before leaving.\"?",
        "options": [
            "I had a memory of locking it in the past.",
            "I did not forget my duty; I locked the door.",
            "I forgot to lock it.",
            "I stopped locking doors."
        ],
        "answer": 1,
        "explanation": "\"Remember to do\" means remembering a duty or task and carrying it out. \"Remember doing\" refers to a past memory.",
        "sourceTip": "British Council B1"
    },
    {
        "id": "gi_b1_2",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does this mean: \"I remember meeting him in Siem Reap two years ago.\"?",
        "options": [
            "I had a task to meet him.",
            "I have a past memory of meeting him.",
            "I forgot to meet him.",
            "I should meet him now."
        ],
        "answer": 1,
        "explanation": "\"Remember + V-ing\" refers to recollecting a past experience or event.",
        "sourceTip": "test-english B1"
    },
    {
        "id": "gi_b1_3",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Compare: \"He stopped smoking\" vs \"He stopped to smoke\". Which is correct?",
        "options": [
            "Both mean he quit smoking completely.",
            "\"He stopped smoking\" = he quit the habit; \"He stopped to smoke\" = he paused what he was doing in order to smoke.",
            "\"He stopped to smoke\" = he quit smoking.",
            "Neither sentence is correct English."
        ],
        "answer": 1,
        "explanation": "\"Stop + V-ing\" = terminate an action/habit. \"Stop + to-inf\" = pause another activity in order to do something.",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "gi_b1_4",
        "level": "B1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"I will never forget ______ Angkor Wat for the first time.\"",
        "options": [
            "see",
            "to see",
            "seeing",
            "saw"
        ],
        "answer": 2,
        "explanation": "\"Forget + V-ing\" means losing the memory of a past experience: \"forget seeing\".",
        "sourceTip": "Oxford B1"
    },
    {
        "id": "gi_b1_5",
        "level": "B1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"Don't forget taking your umbrella when you leave!\"",
        "options": [
            "Don't",
            "forget taking (should be \"forget to take\")",
            "your umbrella",
            "when you leave"
        ],
        "answer": 1,
        "explanation": "For a future obligation or reminder, use \"forget to + base verb\": \"Don't forget to take\".",
        "sourceTip": "British Council B1"
    },
    {
        "id": "gi_b1_6",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Complete the sentence: \"We look forward to ______ you at the graduation ceremony.\"",
        "options": [
            "see",
            "saw",
            "seeing",
            "be seen"
        ],
        "answer": 2,
        "explanation": "In \"look forward to\", \"to\" is a preposition, so it must be followed by a gerund: \"seeing\".",
        "sourceTip": "test-english B1"
    },
    {
        "id": "gi_b1_7",
        "level": "B1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"She tried (turn) ______ off the computer, but it didn't resolve the error.\"",
        "options": [
            "turn",
            "turning",
            "to turn",
            "turned"
        ],
        "answer": 1,
        "explanation": "\"Try + V-ing\" means to experiment with a method to see if it solves a problem.",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "gi_b1_8",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does \"I tried to lift the heavy box\" imply?",
        "options": [
            "I experimented with lifting as a hobby.",
            "I made a physical effort to lift it, but it was difficult or unsuccessful.",
            "I watched someone lift it.",
            "I easily lifted it."
        ],
        "answer": 1,
        "explanation": "\"Try + to-infinitive\" means making an effort or attempt to accomplish something difficult.",
        "sourceTip": "Oxford B1"
    },
    {
        "id": "gi_b1_9",
        "level": "B1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Is this sentence correct? \"I regret telling you that your application has been rejected.\"",
        "options": [
            "Correct",
            "Incorrect - it should be \"I regret to tell you\""
        ],
        "answer": 1,
        "explanation": "For formal, polite announcements of bad news, use \"regret to say/tell/inform\": \"I regret to tell you\". \"Regret telling\" means feeling sorry about having told someone something in the past.",
        "sourceTip": "British Council B1"
    },
    {
        "id": "gi_b1_10",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"She admitted ______ the document without authorization.\"",
        "options": [
            "take",
            "to take",
            "taking",
            "taken"
        ],
        "answer": 2,
        "explanation": "\"Admit\" is followed by a gerund: \"admitted taking\".",
        "sourceTip": "test-english B1"
    },
    {
        "id": "gi_b1_11",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which verb takes an object + to-infinitive?",
        "options": [
            "suggest",
            "enjoy",
            "encourage",
            "avoid"
        ],
        "answer": 2,
        "explanation": "\"Encourage\" takes object + to-infinitive: \"encourage someone to do something\".",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "gi_b1_12",
        "level": "B1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"He managed ______ all 80 questions before the timer ran out.\"",
        "options": [
            "answer",
            "answering",
            "to answer",
            "answered"
        ],
        "answer": 2,
        "explanation": "\"Manage\" takes a to-infinitive: \"managed to answer\".",
        "sourceTip": "Oxford B1"
    },
    {
        "id": "gi_b1_13",
        "level": "B1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"They persuaded him resigning from his position.\"",
        "options": [
            "They persuaded",
            "him resigning (should be \"him to resign\")",
            "from",
            "his position"
        ],
        "answer": 1,
        "explanation": "\"Persuade\" takes object + to-infinitive: \"persuaded him to resign\".",
        "sourceTip": "British Council B1"
    },
    {
        "id": "gi_b1_14",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Complete the sentence: \"I would rather ______ at home tonight.\"",
        "options": [
            "stay",
            "to stay",
            "staying",
            "stayed"
        ],
        "answer": 0,
        "explanation": "\"Would rather\" is an idiom followed by a bare infinitive: \"would rather stay\".",
        "sourceTip": "test-english B1"
    },
    {
        "id": "gi_b1_15",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"You had better ______ a doctor immediately.\"",
        "options": [
            "consult",
            "to consult",
            "consulting",
            "consulted"
        ],
        "answer": 0,
        "explanation": "\"Had better\" takes a bare infinitive: \"had better consult\".",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "gi_b2_1",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct form: \"The suspect denied ______ anywhere near the bank that evening.\"",
        "options": [
            "be",
            "to be",
            "being",
            "having been being"
        ],
        "answer": 2,
        "explanation": "\"Deny\" is followed by a gerund: \"denied being\" or \"denied having been\".",
        "sourceTip": "British Council B2"
    },
    {
        "id": "gi_b2_2",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "In passive voice, causative \"make\" changes its complementation. Which is correct?",
        "options": [
            "He was made sign the confession.",
            "He was made to sign the confession.",
            "He was made signing the confession.",
            "He was made signed the confession."
        ],
        "answer": 1,
        "explanation": "While active \"make\" takes a bare infinitive (\"They made him sign\"), passive \"be made\" requires a to-infinitive: \"He was made to sign\".",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "gi_b2_3",
        "level": "B2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"This dirty whiteboard really needs ______ before the next lecture.\"",
        "options": [
            "clean",
            "to clean",
            "cleaning",
            "cleaned"
        ],
        "answer": 2,
        "explanation": "\"Need + V-ing\" conveys a passive meaning equivalent to \"needs to be cleaned\": \"needs cleaning\".",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "gi_b2_4",
        "level": "B2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"He objects to work on weekends.\"",
        "options": [
            "He",
            "objects to work (should be \"objects to working\")",
            "on",
            "weekends"
        ],
        "answer": 1,
        "explanation": "In \"object to\", \"to\" is a preposition, requiring a gerund: \"objects to working\".",
        "sourceTip": "test-english B2"
    },
    {
        "id": "gi_b2_5",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does this mean: \"Taking this course means studying at least 10 hours a week.\"?",
        "options": [
            "I intend to study 10 hours.",
            "It involves or entails studying 10 hours.",
            "I failed to study.",
            "I stopped studying."
        ],
        "answer": 1,
        "explanation": "\"Mean + V-ing\" expresses that something entails, involves, or results in an action.",
        "sourceTip": "British Council B2"
    },
    {
        "id": "gi_b2_6",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Contrast with: \"I didn't mean to hurt your feelings.\" What does \"mean + to-inf\" express?",
        "options": [
            "Involving a consequence",
            "Intention or purpose",
            "Past memory",
            "Experimenting"
        ],
        "answer": 1,
        "explanation": "\"Mean + to-infinitive\" indicates intention: \"did not intend to hurt\".",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "gi_b2_7",
        "level": "B2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"I can't help (wonder) ______ what happened to him.\"",
        "options": [
            "wonder",
            "to wonder",
            "wondering",
            "wondered"
        ],
        "answer": 2,
        "explanation": "\"Can't help\" is an idiom followed by a gerund: \"can't help wondering\" (unable to stop myself from wondering).",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "gi_b2_8",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Complete: \"It's no use ______ over spilled milk.\"",
        "options": [
            "cry",
            "to cry",
            "crying",
            "cried"
        ],
        "answer": 2,
        "explanation": "The fixed expression \"it's no use / it's no good\" takes a gerund: \"crying\".",
        "sourceTip": "British Council B2"
    },
    {
        "id": "gi_b2_9",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct sentence involving perception verbs:",
        "options": [
            "I saw him to steal the wallet.",
            "I saw him steal the wallet.",
            "I saw him stole the wallet.",
            "I saw to steal the wallet."
        ],
        "answer": 1,
        "explanation": "Perception verbs (see, hear, watch, notice) take an object + bare infinitive (for a completed action): \"saw him steal\".",
        "sourceTip": "test-english B2"
    },
    {
        "id": "gi_b2_10",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What is the nuance of \"I heard her singing in the shower\" vs \"I heard her sing the whole song\"?",
        "options": [
            "No difference in meaning.",
            "\"Singing\" emphasizes an ongoing action in progress; \"sing\" emphasizes the completed performance.",
            "\"Singing\" is incorrect grammar.",
            "\"Sing\" indicates an incomplete action."
        ],
        "answer": 1,
        "explanation": "Object + V-ing stresses an action in progress, while Object + bare infinitive stresses witnessing the complete act from start to finish.",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "gi_b2_11",
        "level": "B2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"There is no point in ______ about things you cannot change.\"",
        "options": [
            "worry",
            "to worry",
            "worrying",
            "worried"
        ],
        "answer": 2,
        "explanation": "\"There is no point in\" has the preposition \"in\", thus requiring a gerund: \"worrying\".",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "gi_b2_12",
        "level": "B2",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate this sentence: \"She confessed to having forged the signature.\"",
        "options": [
            "Correct - \"to\" is a preposition here, and \"having forged\" is a perfect gerund",
            "Incorrect - should be \"confessed to forge\""
        ],
        "answer": 0,
        "explanation": "\"Confess to\" takes a gerund; the perfect gerund \"having forged\" accurately highlights that the forgery happened prior to the confession.",
        "sourceTip": "British Council B2"
    },
    {
        "id": "gi_b2_13",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct complementation: \"The government committed itself to ______ carbon emissions.\"",
        "options": [
            "reduce",
            "reducing",
            "reduced",
            "have reduced"
        ],
        "answer": 1,
        "explanation": "\"Commit oneself to\" contains preposition \"to\" and takes a gerund: \"reducing\".",
        "sourceTip": "test-english B2"
    },
    {
        "id": "gi_b2_14",
        "level": "B2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"He postponed to submit his research paper until Friday.\"",
        "options": [
            "He",
            "postponed to submit (should be \"postponed submitting\")",
            "his research paper",
            "until Friday"
        ],
        "answer": 1,
        "explanation": "\"Postpone\" takes a gerund: \"postponed submitting\".",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "gi_b2_15",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete: \"She claims ______ the President in Paris last summer.\"",
        "options": [
            "meet",
            "to meet",
            "meeting",
            "to have met"
        ],
        "answer": 3,
        "explanation": "The perfect infinitive \"to have met\" expresses an action that occurred prior to the time of claiming.",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "gi_c1_1",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Select the sentence exhibiting formal genitive case with a gerund:",
        "options": [
            "I strongly resent him interrupting our meeting.",
            "I strongly resent his interrupting our meeting.",
            "I strongly resent he interrupting our meeting.",
            "I strongly resent to him interrupting our meeting."
        ],
        "answer": 1,
        "explanation": "In formal, standard English, a noun or pronoun preceding a gerund takes the possessive (genitive) case: \"his interrupting\".",
        "sourceTip": "British Council C1"
    },
    {
        "id": "gi_c1_2",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Identify the passive gerund in the following options:",
        "options": [
            "She hates being treated like a novice.",
            "She hates to treat like a novice.",
            "She hates treating like a novice.",
            "She hates to be treating like a novice."
        ],
        "answer": 0,
        "explanation": "\"Being treated\" is a passive gerund (\"being + V3\"), indicating the subject receives the action of treating.",
        "sourceTip": "Cambridge C1"
    },
    {
        "id": "gi_c1_3",
        "level": "C1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"The suspect is believed ______ the country using a counterfeit passport.\"",
        "options": [
            "to leave",
            "to be leaving",
            "to have left",
            "leaving"
        ],
        "answer": 2,
        "explanation": "The perfect infinitive \"to have left\" is necessary to denote that the departure occurred before the present belief.",
        "sourceTip": "Oxford C1"
    },
    {
        "id": "gi_c1_4",
        "level": "C1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"With a view to enhance bilateral trade, both nations signed the accord.\"",
        "options": [
            "With a view to enhance (should be \"With a view to enhancing\")",
            "bilateral trade",
            "both nations",
            "signed the accord"
        ],
        "answer": 0,
        "explanation": "\"With a view to\" is a formal prepositional idiom meaning \"with the aim of\"; the \"to\" is a preposition requiring a gerund: \"enhancing\".",
        "sourceTip": "test-english C1"
    },
    {
        "id": "gi_c1_5",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Analyze: \"He went on to talk about the economic reforms.\" What does \"go on + to-inf\" indicate?",
        "options": [
            "He continued talking about the same topic without stopping.",
            "He finished one topic and proceeded to a new, subsequent topic.",
            "He stopped talking entirely.",
            "He regretted talking."
        ],
        "answer": 1,
        "explanation": "\"Go on + to-infinitive\" indicates transitioning to a new activity or topic. \"Go on + V-ing\" means continuing the existing activity.",
        "sourceTip": "British Council C1"
    },
    {
        "id": "gi_c1_6",
        "level": "C1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"He was furious at (keep) ______ waiting in the rain for over an hour.\"",
        "options": [
            "keeping",
            "being kept",
            "to be kept",
            "having kept"
        ],
        "answer": 1,
        "explanation": "The preposition \"at\" requires a gerund, and because he was the recipient of the waiting imposition, passive gerund \"being kept\" is required.",
        "sourceTip": "Cambridge C1"
    },
    {
        "id": "gi_c1_7",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct complementation: \"She would prefer ______ indoors rather than go out in this storm.\"",
        "options": [
            "staying",
            "to stay",
            "stay",
            "stayed"
        ],
        "answer": 1,
        "explanation": "\"Would prefer\" is followed by a to-infinitive (\"to stay\"), contrasted with \"rather than + bare infinitive\" (\"go out\").",
        "sourceTip": "Oxford C1"
    },
    {
        "id": "gi_c1_8",
        "level": "C1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate: \"The treaty is subject to being ratified by the senate.\"",
        "options": [
            "Correct - \"subject to\" takes a gerund complement",
            "Incorrect - must be \"subject to ratify\""
        ],
        "answer": 0,
        "explanation": "\"Subject to\" is a prepositional phrase, correctly taking the passive gerund \"being ratified\".",
        "sourceTip": "British Council C1"
    },
    {
        "id": "gi_c1_9",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"I appreciate ______ given the opportunity to present my thesis.\"",
        "options": [
            "having",
            "having been",
            "to have been",
            "being having"
        ],
        "answer": 1,
        "explanation": "\"Appreciate\" governs a gerund; the perfect passive gerund \"having been given\" expresses that the opportunity was granted prior to the appreciation.",
        "sourceTip": "test-english C1"
    },
    {
        "id": "gi_c1_10",
        "level": "C1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"He was accused of to have leaked state secrets.\"",
        "options": [
            "He was",
            "accused of to have leaked (should be \"of having leaked\")",
            "state secrets",
            "to the press"
        ],
        "answer": 1,
        "explanation": "After the preposition \"of\", an infinitive cannot stand; the perfect gerund \"having leaked\" is mandatory.",
        "sourceTip": "Cambridge C1"
    },
    {
        "id": "gi_c2_1",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Analyze the stylistic nuance of the split infinitive in: \"He resolved to boldly confront the tribunal.\"",
        "options": [
            "It is categorically ungrammatical and must be altered.",
            "It is grammatically permissible and emphasizes the manner of confrontation naturally.",
            "It should be replaced with a gerund.",
            "It lacks an auxiliary verb."
        ],
        "answer": 1,
        "explanation": "Modern linguistic consensus accepts split infinitives where splitting avoids awkwardness or ambiguity and imparts natural rhetorical emphasis.",
        "sourceTip": "Cambridge C2"
    },
    {
        "id": "gi_c2_2",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Identify the construction in: \"For him to abandon the project now would be catastrophic.\"",
        "options": [
            "Prepositional phrase modifying the verb \"would be\"",
            "Infinitive clause with an overt subject introduced by \"for\" acting as subject",
            "Dangling participial clause",
            "Causative inversion"
        ],
        "answer": 1,
        "explanation": "\"For + noun phrase + to-infinitive\" forms a non-finite clause with an overt subject (\"him\"), functioning here as the clausal subject of the sentence.",
        "sourceTip": "Oxford C2"
    },
    {
        "id": "gi_c2_3",
        "level": "C2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the subtle prescriptive error: \"There is no excuse for him failing to report the anomaly.\"",
        "options": [
            "There is no",
            "for him failing (formal prescriptive rule favors \"his failing\")",
            "to report",
            "the anomaly"
        ],
        "answer": 1,
        "explanation": "In formal academic registers, the subject of a gerund takes the genitive form (\"his failing\") rather than the accusative (\"him failing\").",
        "sourceTip": "British Council C2"
    },
    {
        "id": "gi_c2_4",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "In the literary sentence: \"To know her is to revere her\", what grammatical function do both infinitives perform?",
        "options": [
            "Subject and Direct Object",
            "Subject and Subject Complement",
            "Adverbial and Adjectival",
            "Appositive and Adjunct"
        ],
        "answer": 1,
        "explanation": "\"To know her\" is the subject, and \"to revere her\" is the subject complement linked by the copular verb \"is\".",
        "sourceTip": "Cambridge C2"
    },
    {
        "id": "gi_c2_5",
        "level": "C2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"The defendant professed ______ no recollection of the events in question.\"",
        "options": [
            "having",
            "to have",
            "to having",
            "having had"
        ],
        "answer": 1,
        "explanation": "\"Profess\" followed by a complement clause in high-register English takes a to-infinitive: \"professed to have\".",
        "sourceTip": "Oxford C2"
    },
    {
        "id": "gi_c2_6",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Examine: \"He did nothing except ______ complaints all evening.\"",
        "options": [
            "voice",
            "to voice",
            "voicing",
            "voiced"
        ],
        "answer": 0,
        "explanation": "After \"do + nothing/anything/something + except/but\", the subsequent verb typically takes a bare infinitive: \"voice\".",
        "sourceTip": "test-english C2"
    },
    {
        "id": "gi_c2_7",
        "level": "C2",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate: \"The ambassador was said to have been preparing the dispatch when the hostilities commenced.\"",
        "options": [
            "Correct - perfect continuous passive infinitive",
            "Incorrect - double modal conflict"
        ],
        "answer": 0,
        "explanation": "\"To have been preparing\" is a valid perfect continuous infinitive depicting an action in progress prior to the reporting.",
        "sourceTip": "British Council C2"
    },
    {
        "id": "gi_c2_8",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Choose the correct complementation: \"The committee balked at ______ the unvetted expenditure.\"",
        "options": [
            "sanction",
            "to sanction",
            "sanctioning",
            "having to sanction"
        ],
        "answer": 2,
        "explanation": "\"Balk at\" is an intransitive phrasal verb requiring the prepositional gerund complement \"sanctioning\".",
        "sourceTip": "Cambridge C2"
    },
    {
        "id": "gi_c2_9",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "What role does the to-infinitive serve in: \"She was the first female scholar to be awarded the honorary doctorate.\"?",
        "options": [
            "Adverb of consequence",
            "Post-modifying adjectival infinitive qualifying \"scholar\"",
            "Direct object of \"was\"",
            "Subject complement"
        ],
        "answer": 1,
        "explanation": "The infinitive clause \"to be awarded...\" functions adjectivally to post-modify the noun phrase \"the first female scholar\".",
        "sourceTip": "Oxford C2"
    },
    {
        "id": "gi_c2_10",
        "level": "C2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"He would sooner die than to surrender the garrison.\"",
        "options": [
            "He would sooner",
            "die",
            "than to surrender (should be \"than surrender\")",
            "the garrison"
        ],
        "answer": 2,
        "explanation": "\"Would sooner / would rather... than\" links parallel bare infinitives: \"die than surrender\".",
        "sourceTip": "British Council C2"
    }
],
  "used_to": [
    {
        "id": "ut_a1_1",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct form for a past habit: \"When I was young, I ______ play football every afternoon.\"",
        "options": [
            "used to",
            "use to",
            "was used to",
            "am used to"
        ],
        "answer": 0,
        "explanation": "\"Used to + base verb\" describes a past habit that no longer occurs: \"used to play\".",
        "sourceTip": "British Council A1"
    },
    {
        "id": "ut_a1_2",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does this mean: \"Mr. Ol used to live in Phnom Penh.\"?",
        "options": [
            "He lives in Phnom Penh now.",
            "He lived in Phnom Penh in the past, but he does not live there now.",
            "He will move to Phnom Penh.",
            "He visits Phnom Penh regularly."
        ],
        "answer": 1,
        "explanation": "\"Used to\" indicates a past state or habit that is no longer true in the present.",
        "sourceTip": "test-english A1"
    },
    {
        "id": "ut_a1_3",
        "level": "A1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the negative sentence: \"She didn't ______ like spicy food when she was a child.\"",
        "options": [
            "used to",
            "use to",
            "using to",
            "used"
        ],
        "answer": 1,
        "explanation": "After \"didn't\", the verb returns to the base form: \"didn't use to\".",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "ut_a1_4",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct question form:",
        "options": [
            "Did you used to have a bicycle?",
            "Did you use to have a bicycle?",
            "Were you used to have a bicycle?",
            "Do you used to have a bicycle?"
        ],
        "answer": 1,
        "explanation": "Questions in the past simple with \"did\" require the base form \"use to\": \"Did you use to...?\"",
        "sourceTip": "Oxford A1"
    },
    {
        "id": "ut_a1_5",
        "level": "A1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate this sentence: \"He uses to go to school by bus every day.\"",
        "options": [
            "Correct",
            "Incorrect - \"used to\" cannot be used for present habits; say \"usually goes\""
        ],
        "answer": 1,
        "explanation": "\"Used to\" only exists for the past. For present habits, use \"usually\" with the Present Simple: \"He usually goes\".",
        "sourceTip": "British Council A1"
    },
    {
        "id": "ut_a1_6",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Complete the sentence: \"We used to ______ long walks along the river.\"",
        "options": [
            "take",
            "taking",
            "took",
            "taken"
        ],
        "answer": 0,
        "explanation": "\"Used to\" is followed by a base verb: \"used to take\".",
        "sourceTip": "test-english A1"
    },
    {
        "id": "ut_a1_7",
        "level": "A1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the mistake: \"She didn't used to watch television.\"",
        "options": [
            "She",
            "didn't used to (should be \"didn't use to\")",
            "watch",
            "television"
        ],
        "answer": 1,
        "explanation": "The auxiliary \"didn't\" carries the past tense, so \"used\" must be \"use\": \"didn't use to\".",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "ut_a1_8",
        "level": "A1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"My brother (use to) ______ have very long hair.\"",
        "options": [
            "use to",
            "used to",
            "was used to",
            "using to"
        ],
        "answer": 1,
        "explanation": "The affirmative past habit/state takes \"used to + base verb\": \"used to have\".",
        "sourceTip": "Oxford A1"
    },
    {
        "id": "ut_a1_9",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Complete the sentence: \"There ______ be a cinema in our village years ago.\"",
        "options": [
            "used to",
            "is used to",
            "got used to",
            "was using to"
        ],
        "answer": 0,
        "explanation": "\"There used to be\" expresses a past state or existence that is no longer there.",
        "sourceTip": "British Council A1"
    },
    {
        "id": "ut_a1_10",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which sentence is grammatically correct?",
        "options": [
            "I didn't use to drink coffee, but now I do.",
            "I didn't used to drink coffee, but now I do.",
            "I not used to drink coffee.",
            "I use to drank coffee."
        ],
        "answer": 0,
        "explanation": "The correct negative form is \"didn't use to + base verb\".",
        "sourceTip": "test-english A1"
    },
    {
        "id": "ut_a1_11",
        "level": "A1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"They ______ swim in the lake during summer vacations.\"",
        "options": [
            "used to",
            "use to",
            "are used to",
            "were use to"
        ],
        "answer": 0,
        "explanation": "Affirmative past habit takes \"used to\": \"used to swim\".",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "ut_a1_12",
        "level": "A1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Is this sentence correct? \"I used to play computer games when I was ten.\"",
        "options": [
            "Correct",
            "Incorrect - should be \"used to playing\""
        ],
        "answer": 0,
        "explanation": "For past habits, \"used to\" is followed by the base verb: \"used to play\". It is correct.",
        "sourceTip": "Oxford A1"
    },
    {
        "id": "ut_a1_13",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What is the meaning of \"He used to smoke 20 cigarettes a day\"?",
        "options": [
            "He still smokes 20 cigarettes a day.",
            "He has quit smoking.",
            "He never smoked.",
            "He wants to smoke."
        ],
        "answer": 1,
        "explanation": "\"Used to\" signifies that the habit has terminated in the present.",
        "sourceTip": "British Council A1"
    },
    {
        "id": "ut_a1_14",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete the question: \"______ you use to have a pet when you were little?\"",
        "options": [
            "Did",
            "Do",
            "Were",
            "Have"
        ],
        "answer": 0,
        "explanation": "Past simple questions take \"Did\": \"Did you use to...?\"",
        "sourceTip": "test-english A1"
    },
    {
        "id": "ut_a1_15",
        "level": "A1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Complete the sentence: \"My grandfather ______ tell us ancient stories every evening.\"",
        "options": [
            "used to",
            "use to",
            "is used to",
            "uses to"
        ],
        "answer": 0,
        "explanation": "\"Used to + base verb\" describes a regular past habit.",
        "sourceTip": "Cambridge A1"
    },
    {
        "id": "ut_a2_1",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Contrast: \"I used to walk to work, but now I ______.\"",
        "options": [
            "drive",
            "used to drive",
            "am used to drive",
            "drove"
        ],
        "answer": 0,
        "explanation": "\"Used to walk\" contrasts with present behavior: \"now I drive\".",
        "sourceTip": "British Council A2"
    },
    {
        "id": "ut_a2_2",
        "level": "A2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"We never ______ lock our front door in the countryside.\"",
        "options": [
            "used to",
            "use to",
            "using to",
            "used"
        ],
        "answer": 0,
        "explanation": "With \"never\", the verb retains \"used to\": \"never used to lock\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "ut_a2_3",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct sentence to express an ongoing familiarity:",
        "options": [
            "I am used to getting up early.",
            "I used to get up early.",
            "I get used to got up early.",
            "I am use to get up early."
        ],
        "answer": 0,
        "explanation": "\"Be used to + V-ing\" expresses that an action is familiar and normal for the subject.",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "ut_a2_4",
        "level": "A2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"He is used to drive on the right side of the road.\"",
        "options": [
            "He is",
            "used to drive (should be \"used to driving\")",
            "on the right",
            "side of the road"
        ],
        "answer": 1,
        "explanation": "After \"be used to\", use a gerund (V-ing) or noun: \"used to driving\".",
        "sourceTip": "Oxford A2"
    },
    {
        "id": "ut_a2_5",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "What follows \"be used to\"?",
        "options": [
            "Base verb",
            "Gerund (V-ing) or Noun",
            "Past participle",
            "To-infinitive"
        ],
        "answer": 1,
        "explanation": "\"Be used to\" means \"accustomed to\", where \"to\" is a preposition taking a gerund or noun.",
        "sourceTip": "British Council A2"
    },
    {
        "id": "ut_a2_6",
        "level": "A2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete with the correct form: \"She is not used to (eat) ______ spicy food.\"",
        "options": [
            "eat",
            "eating",
            "ate",
            "eaten"
        ],
        "answer": 1,
        "explanation": "\"Be used to\" takes a gerund: \"not used to eating\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "ut_a2_7",
        "level": "A2",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate: \"Did she used to work as a nurse?\"",
        "options": [
            "Correct",
            "Incorrect - should be \"Did she use to work\""
        ],
        "answer": 1,
        "explanation": "After the auxiliary \"Did\", \"used\" must be \"use\": \"Did she use to work\".",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "ut_a2_8",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does this sentence mean: \"I am getting used to the noise in the city.\"?",
        "options": [
            "I am familiar with the noise already.",
            "I am in the process of becoming accustomed to the noise.",
            "I used to hear noise in the past.",
            "I dislike all noise."
        ],
        "answer": 1,
        "explanation": "\"Get used to\" describes the ongoing process of becoming familiar with something new.",
        "sourceTip": "Oxford A2"
    },
    {
        "id": "ut_a2_9",
        "level": "A2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"Don't worry, you will soon get used to ______ the new software.\"",
        "options": [
            "use",
            "to use",
            "using",
            "used"
        ],
        "answer": 2,
        "explanation": "\"Get used to\" takes a gerund: \"get used to using\".",
        "sourceTip": "British Council A2"
    },
    {
        "id": "ut_a2_10",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Choose the correct negative form of \"be used to\":",
        "options": [
            "I didn't used to the heat.",
            "I am not used to the heat.",
            "I not am used to the heat.",
            "I am used to not heat."
        ],
        "answer": 1,
        "explanation": "The negative of \"am used to\" is \"am not used to + noun\": \"am not used to the heat\".",
        "sourceTip": "test-english A2"
    },
    {
        "id": "ut_a2_11",
        "level": "A2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"Where did you used to go on holiday?\"",
        "options": [
            "Where",
            "did you used to (should be \"did you use to\")",
            "go",
            "on holiday"
        ],
        "answer": 1,
        "explanation": "\"Did\" requires the base form \"use to\": \"Where did you use to go?\".",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "ut_a2_12",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Complete the sentence: \"Living in Siem Reap was strange at first, but now I ______ the climate.\"",
        "options": [
            "used to",
            "am used to",
            "use to",
            "get use to"
        ],
        "answer": 1,
        "explanation": "\"Am used to + noun\" expresses present comfort and familiarity.",
        "sourceTip": "Oxford A2"
    },
    {
        "id": "ut_a2_13",
        "level": "A2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete: \"He will never get used to (work) ______ the night shift.\"",
        "options": [
            "work",
            "working",
            "worked",
            "to work"
        ],
        "answer": 1,
        "explanation": "\"Get used to\" takes a gerund: \"get used to working\".",
        "sourceTip": "British Council A2"
    },
    {
        "id": "ut_a2_14",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Which sentence refers to a PAST STATE that is no longer true?",
        "options": [
            "He used to be a teacher.",
            "He is used to teaching.",
            "He is getting used to teaching.",
            "He usually teaches."
        ],
        "answer": 0,
        "explanation": "\"Used to be\" describes a past state/profession that has ceased.",
        "sourceTip": "test-english A2"
    },
    {
        "id": "ut_a2_15",
        "level": "A2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Complete: \"Did they ______ live near the river before the flood?\"",
        "options": [
            "used to",
            "use to",
            "uses to",
            "using to"
        ],
        "answer": 1,
        "explanation": "Question with \"Did\" takes \"use to\": \"Did they use to live...?\".",
        "sourceTip": "Cambridge A2"
    },
    {
        "id": "ut_b1_1",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Analyze the difference: 1. \"I used to live alone.\" vs 2. \"I am used to living alone.\"",
        "options": [
            "Sentence 1 and 2 mean the exact same thing.",
            "1 = Past habit/state (I don't live alone now); 2 = Present familiarity (I live alone and it feels normal).",
            "1 = Present familiarity; 2 = Past habit.",
            "Both sentences are ungrammatical."
        ],
        "answer": 1,
        "explanation": "Sentence 1 is a finished past state. Sentence 2 means living alone is customary and comfortable for the speaker.",
        "sourceTip": "British Council B1"
    },
    {
        "id": "ut_b1_2",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Why is \"She would have a car\" incorrect to mean \"She used to have a car\"?",
        "options": [
            "\"Would\" can only express past repeated actions, NEVER past states or possession.",
            "\"Would\" is only for future tense.",
            "\"Have\" cannot be used with \"would\".",
            "\"Used to\" is only for adjectives."
        ],
        "answer": 0,
        "explanation": "\"Would\" can substitute for \"used to\" only for repeated physical actions, never for stative verbs (have, be, know, live).",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "ut_b1_3",
        "level": "B1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"When we were children, my grandmother ______ bake fresh bread every Saturday.\"",
        "options": [
            "would",
            "was used to",
            "get used to",
            "is used to"
        ],
        "answer": 0,
        "explanation": "For repeated past actions, both \"used to\" and \"would\" are correct: \"would bake\".",
        "sourceTip": "test-english B1"
    },
    {
        "id": "ut_b1_4",
        "level": "B1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"When I moved to London, it took me months to get used to drive on the left.\"",
        "options": [
            "When I moved",
            "it took me months",
            "to get used to drive (should be \"to driving\")",
            "on the left"
        ],
        "answer": 2,
        "explanation": "\"Get used to\" requires a gerund: \"get used to driving\".",
        "sourceTip": "Oxford B1"
    },
    {
        "id": "ut_b1_5",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What does this express: \"He was used to working under intense pressure.\"?",
        "options": [
            "He worked under pressure in the past and quit.",
            "In the past, he found working under pressure normal and manageable.",
            "He is beginning to work under pressure now.",
            "He refused to work under pressure."
        ],
        "answer": 1,
        "explanation": "\"Was used to + V-ing\" expresses past familiarity (he was accustomed to it at that time in the past).",
        "sourceTip": "British Council B1"
    },
    {
        "id": "ut_b1_6",
        "level": "B1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete with the correct form: \"At first, the students found the online platform difficult, but they soon got used to (navigate) ______ it.\"",
        "options": [
            "navigate",
            "navigating",
            "navigated",
            "to navigate"
        ],
        "answer": 1,
        "explanation": "\"Got used to\" takes a gerund: \"got used to navigating\".",
        "sourceTip": "test-english B1"
    },
    {
        "id": "ut_b1_7",
        "level": "B1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Is this sentence correct? \"I used to know all the irregular verbs when I was in Grade 10.\"",
        "options": [
            "Correct - \"know\" is a stative verb used properly with \"used to\"",
            "Incorrect - must say \"would know\""
        ],
        "answer": 0,
        "explanation": "\"Used to\" is perfectly correct with stative verbs like \"know\", \"believe\", \"understand\".",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "ut_b1_8",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Contrast: \"This machine is used to cut metal.\" What is the meaning here?",
        "options": [
            "The machine is accustomed to cutting metal.",
            "Passive voice of \"use\": the purpose of the machine is to cut metal.",
            "The machine cut metal in the past, but not now.",
            "The machine is becoming familiar with metal."
        ],
        "answer": 1,
        "explanation": "This is the passive voice of the main verb \"use\" + to-infinitive of purpose: \"is used to cut\".",
        "sourceTip": "Oxford B1"
    },
    {
        "id": "ut_b1_9",
        "level": "B1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete: \"A dictionary is ______ look up unfamiliar words.\"",
        "options": [
            "used to",
            "used for",
            "used to looking",
            "using to"
        ],
        "answer": 0,
        "explanation": "Passive voice: \"is used to + base verb\" (or \"is used for looking up\"): \"used to look up\".",
        "sourceTip": "British Council B1"
    },
    {
        "id": "ut_b1_10",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Which sentence is INCORRECT?",
        "options": [
            "I used to love chocolate.",
            "I would love chocolate when I was younger.",
            "I used to eat chocolate every day.",
            "I would eat chocolate every day."
        ],
        "answer": 1,
        "explanation": "\"Love\" is a stative verb; \"would love\" cannot describe a past habit or preference.",
        "sourceTip": "test-english B1"
    },
    {
        "id": "ut_b1_11",
        "level": "B1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"Are you used to live in such a crowded apartment?\"",
        "options": [
            "Are you",
            "used to live (should be \"used to living\")",
            "in such a",
            "crowded apartment"
        ],
        "answer": 1,
        "explanation": "\"Are you used to\" (familiarity) requires a gerund: \"used to living\".",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "ut_b1_12",
        "level": "B1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"I cannot get used to (wear) ______ this tight formal uniform.\"",
        "options": [
            "wear",
            "wearing",
            "wore",
            "worn"
        ],
        "answer": 1,
        "explanation": "\"Get used to\" takes a gerund: \"get used to wearing\".",
        "sourceTip": "Oxford B1"
    },
    {
        "id": "ut_b1_13",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which expression means \"in the process of becoming accustomed\"?",
        "options": [
            "used to do",
            "be used to doing",
            "get used to doing",
            "did use to do"
        ],
        "answer": 2,
        "explanation": "\"Get used to doing\" describes the ongoing transition of adaptation.",
        "sourceTip": "British Council B1"
    },
    {
        "id": "ut_b1_14",
        "level": "B1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete: \"He didn't ______ like classical music, but now he attends concerts regularly.\"",
        "options": [
            "use to",
            "used to",
            "was used to",
            "getting used to"
        ],
        "answer": 0,
        "explanation": "Negative past habit with \"didn't\": \"didn't use to\".",
        "sourceTip": "test-english B1"
    },
    {
        "id": "ut_b1_15",
        "level": "B1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate: \"Bamboo is used to build durable traditional houses in rural Cambodia.\"",
        "options": [
            "Correct - passive voice expressing purpose/function",
            "Incorrect - should be \"used to building\""
        ],
        "answer": 0,
        "explanation": "This is passive voice of \"use\" + to-infinitive of purpose: \"is used to build\". It is fully correct.",
        "sourceTip": "Cambridge B1"
    },
    {
        "id": "ut_b2_1",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Identify the sentence where \"used to\" CANNOT be replaced by \"would\":",
        "options": [
            "Every Sunday morning, my father would wash the motorcycle.",
            "We used to live in a small wooden house by the river.",
            "The students would study in the library after lunch.",
            "He used to visit his grandparents every summer."
        ],
        "answer": 1,
        "explanation": "\"Live\" is a state verb; \"would\" cannot describe past states, so \"used to live\" cannot become \"would live\".",
        "sourceTip": "British Council B2"
    },
    {
        "id": "ut_b2_2",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "What is the formal British English negative of \"used to\" without auxiliary \"did\"?",
        "options": [
            "He used not to smoke.",
            "He didn't use to smoke.",
            "He was not used to smoke.",
            "He used to not smoke."
        ],
        "answer": 0,
        "explanation": "In formal, traditional British English, \"used not to + base verb\" (often contracted as \"usedn't to\") is used without auxiliary \"did\".",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "ut_b2_3",
        "level": "B2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"Having lived in Phnom Penh for over a decade, she is completely accustomed to ______ in heavy traffic.\"",
        "options": [
            "drive",
            "driving",
            "drove",
            "driven"
        ],
        "answer": 1,
        "explanation": "\"Accustomed to\" is synonymous with \"used to\", where \"to\" is a preposition taking a gerund: \"driving\".",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "ut_b2_4",
        "level": "B2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"Solar radiation is used to generating clean energy across modern installations.\"",
        "options": [
            "Solar radiation",
            "is used to generating (should be \"is used to generate\")",
            "clean energy",
            "across modern installations"
        ],
        "answer": 1,
        "explanation": "Passive voice of \"use\" expresses purpose with a to-infinitive: \"is used to generate\", NOT \"generating\".",
        "sourceTip": "test-english B2"
    },
    {
        "id": "ut_b2_5",
        "level": "B2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"It took the exchange student nearly three months to get used to (speak) ______ English all day long.\"",
        "options": [
            "speak",
            "speaking",
            "spoke",
            "to speak"
        ],
        "answer": 1,
        "explanation": "\"Get used to\" takes a gerund: \"get used to speaking\".",
        "sourceTip": "British Council B2"
    },
    {
        "id": "ut_b2_6",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Choose the correct tag question: \"You used to play chess for the school team, ______?\"",
        "options": [
            "didn't you?",
            "usedn't you?",
            "both A and B are acceptable in formal/standard English",
            "weren't you?"
        ],
        "answer": 2,
        "explanation": "\"Didn't you?\" is standard modern English, while \"usedn't you?\" is acceptable in formal British usage.",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "ut_b2_7",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Analyze: \"I am used to getting up early\" vs \"I got used to getting up early\". What is the aspectual difference?",
        "options": [
            "No difference.",
            "\"Am used to\" describes an existing state of familiarity; \"got used to\" describes the past accomplishment of becoming familiar.",
            "\"Got used to\" means I am still struggling.",
            "\"Am used to\" is only for past actions."
        ],
        "answer": 1,
        "explanation": "\"Am used to\" is a stative condition; \"got used to\" focuses on the completed transition of becoming adapted.",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "ut_b2_8",
        "level": "B2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"New teachers often take several weeks to ______ the noise of energetic classrooms.\"",
        "options": [
            "use to",
            "get used to",
            "be used to",
            "used to"
        ],
        "answer": 1,
        "explanation": "\"Take time to get used to\" indicates the transition of adapting to an environment.",
        "sourceTip": "British Council B2"
    },
    {
        "id": "ut_b2_9",
        "level": "B2",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate: \"There used to be a dense forest here before the road construction began.\"",
        "options": [
            "Correct - \"there used to be\" describes a past existential state",
            "Incorrect - must say \"there would be\""
        ],
        "answer": 0,
        "explanation": "\"There used to be\" is the correct grammatical structure for past states; \"would\" is invalid here.",
        "sourceTip": "test-english B2"
    },
    {
        "id": "ut_b2_10",
        "level": "B2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error: \"When she arrived in England, she wasn't used to drive on the left side.\"",
        "options": [
            "When she arrived",
            "she wasn't",
            "used to drive (should be \"used to driving\")",
            "on the left side"
        ],
        "answer": 2,
        "explanation": "\"Wasn't used to\" (past familiarity) governs a gerund: \"used to driving\".",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "ut_b2_11",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Which sentence shows the correct negative form in everyday modern English?",
        "options": [
            "He didn't use to complain so frequently.",
            "He didn't used to complain so frequently.",
            "He used not complain so frequently.",
            "He wasn't use to complain so frequently."
        ],
        "answer": 0,
        "explanation": "Standard modern English uses \"didn't use to + base verb\".",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "ut_b2_12",
        "level": "B2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete: \"Don't worry about the shift work; you will soon get used to (sleep) ______ during the day.\"",
        "options": [
            "sleep",
            "sleeping",
            "slept",
            "to sleep"
        ],
        "answer": 1,
        "explanation": "\"Get used to\" takes a gerund: \"sleeping\".",
        "sourceTip": "British Council B2"
    },
    {
        "id": "ut_b2_13",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Memory",
        "question": "Which modal can substitute for \"used to\" when describing past repeated actions?",
        "options": [
            "might",
            "should",
            "would",
            "could"
        ],
        "answer": 2,
        "explanation": "\"Would\" expresses repeated past actions/habits (e.g. \"We would play outside for hours\").",
        "sourceTip": "test-english B2"
    },
    {
        "id": "ut_b2_14",
        "level": "B2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Why can we say \"I used to be shy\" but NOT \"I would be shy\"?",
        "options": [
            "Because \"shy\" is a noun.",
            "Because \"be\" is a stative verb describing a state, not a repeated action.",
            "Because \"would\" requires a third-person pronoun.",
            "Because \"used to\" is more modern."
        ],
        "answer": 1,
        "explanation": "\"Would\" cannot describe states of being, feelings, or static conditions.",
        "sourceTip": "Cambridge B2"
    },
    {
        "id": "ut_b2_15",
        "level": "B2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"As a senior surgeon, Dr. Sok is thoroughly used to ______ under immense stress.\"",
        "options": [
            "operate",
            "operating",
            "operated",
            "to operate"
        ],
        "answer": 1,
        "explanation": "\"Is used to\" takes a gerund: \"operating\".",
        "sourceTip": "Oxford B2"
    },
    {
        "id": "ut_c1_1",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "In formal rhetoric, analyze: \"Used he to attend the annual symposium?\"",
        "options": [
            "It is completely ungrammatical.",
            "It is an archaic/formal British inverted question structure without the auxiliary \"did\".",
            "It is an imperative structure.",
            "It is a passive inversion."
        ],
        "answer": 1,
        "explanation": "Historically and in highly formal British registers, \"used to\" could invert directly with the subject without auxiliary \"do/did\".",
        "sourceTip": "Cambridge C1"
    },
    {
        "id": "ut_c1_2",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Contrast the nuance: \"He used to write essays\" vs \"He was in the habit of writing essays\" vs \"He would write essays\".",
        "options": [
            "\"Used to\" suggests past fact/contrast with present; \"would\" evokes nostalgic or characteristic repetition; \"in the habit of\" emphasizes deliberate routine.",
            "All three are semantically indistinguishable.",
            "\"Would\" can describe discontinued states.",
            "\"Used to\" cannot take an adverb."
        ],
        "answer": 0,
        "explanation": "\"Used to\" focuses on temporal discontinuity with the present, while \"would\" introduces a narrative, nostalgic coloring to repeated activities.",
        "sourceTip": "Oxford C1"
    },
    {
        "id": "ut_c1_3",
        "level": "C1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the error in: \"The microchip was used to calculating cryptographic hashes before the upgrade.\"",
        "options": [
            "The microchip",
            "was used to calculating (should be \"was used to calculate\")",
            "cryptographic hashes",
            "before the upgrade"
        ],
        "answer": 1,
        "explanation": "Passive voice of \"use\" demands an infinitive of purpose: \"was used to calculate\", not a gerund.",
        "sourceTip": "British Council C1"
    },
    {
        "id": "ut_c1_4",
        "level": "C1",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete: \"Having immigrated to Canada, he found (get) ______ used to the harsh sub-zero temperatures a grueling ordeal.\"",
        "options": [
            "get",
            "getting",
            "got",
            "to get"
        ],
        "answer": 1,
        "explanation": "The gerund \"getting used to...\" functions as the direct object of the verb \"found\": \"found getting used to... grueling\".",
        "sourceTip": "Cambridge C1"
    },
    {
        "id": "ut_c1_5",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Analyze the double-modal regionalism \"used to could\" in colloquial dialects (e.g., Southern American English):",
        "options": [
            "It is recognized in standard academic English.",
            "It is a non-standard double modal equivalent to standard \"used to be able to\".",
            "It is a passive gerund.",
            "It is the future conditional of used to."
        ],
        "answer": 1,
        "explanation": "\"Used to could\" is a dialectal double modal meaning \"used to be able to\", which must be avoided in standard academic English.",
        "sourceTip": "Oxford C1"
    },
    {
        "id": "ut_c1_6",
        "level": "C1",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete: \"The veteran diplomat was not easily perturbed, being well used to ______ with hostility.\"",
        "options": [
            "meet",
            "meeting",
            "being met",
            "having met"
        ],
        "answer": 2,
        "explanation": "The passive gerund \"being met\" matches the context of receiving hostile treatment.",
        "sourceTip": "British Council C1"
    },
    {
        "id": "ut_c1_7",
        "level": "C1",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate: \"He used not to be so irritable before the restructuring.\"",
        "options": [
            "Correct - formal British negative with stative verb \"be\"",
            "Incorrect - \"used not\" cannot precede \"be\""
        ],
        "answer": 0,
        "explanation": "\"Used not to be\" is a well-formed formal structure expressing a past negative state.",
        "sourceTip": "test-english C1"
    },
    {
        "id": "ut_c1_8",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "What is the syntactic category of \"used\" in \"I am used to the noise\"?",
        "options": [
            "A finite past tense verb",
            "A participial adjective meaning \"habituated/accustomed\"",
            "An auxiliary modal",
            "A passive voice participle of \"use\""
        ],
        "answer": 1,
        "explanation": "In \"be used to\", \"used\" functions as a predicate adjective meaning accustomed/habituated, followed by the preposition \"to\".",
        "sourceTip": "Cambridge C1"
    },
    {
        "id": "ut_c1_9",
        "level": "C1",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Identify the error: \"She has been getting used to work in the intensive care unit.\"",
        "options": [
            "She has been",
            "getting used to work (should be \"to working\")",
            "in the",
            "intensive care unit"
        ],
        "answer": 1,
        "explanation": "\"Getting used to\" requires the gerund \"working\".",
        "sourceTip": "British Council C1"
    },
    {
        "id": "ut_c1_10",
        "level": "C1",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"Archaeological remnants suggest that obsidian blades ______ perform surgical incisions.\"",
        "options": [
            "used to",
            "were used to",
            "were used to being",
            "had been used to"
        ],
        "answer": 1,
        "explanation": "Passive voice of purpose: \"were used to perform\".",
        "sourceTip": "Oxford C1"
    },
    {
        "id": "ut_c2_1",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "Examine the grammaticalization of \"used to\" /juːst tuː/ from the lexical verb \"use\" /juːz/:",
        "options": [
            "It underwent phonological devoicing (/z/ -> /s/) and semantic bleaching to become a defective marginal modal.",
            "It retained full lexical transitive verb properties.",
            "It is an active progressive participle.",
            "It developed from the noun \"usage\"."
        ],
        "answer": 0,
        "explanation": "Historical linguistics demonstrates that \"used to\" underwent phonological assimilation (devoicing to /s/) and semantic bleaching, developing into a marginal modal of past habitual aspect.",
        "sourceTip": "Cambridge C2"
    },
    {
        "id": "ut_c2_2",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Identify the sentence where the auxiliary contraction \"usedn't\" is used with historical precision:",
        "options": [
            "He usedn't to be so cynical about administrative directives.",
            "He usedn't be so cynical.",
            "He usedn't to being cynical.",
            "He didn't usedn't be cynical."
        ],
        "answer": 0,
        "explanation": "\"Usedn't to + base verb\" represents the traditional contracted negative marginal modal form in high-register British English.",
        "sourceTip": "Oxford C2"
    },
    {
        "id": "ut_c2_3",
        "level": "C2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the register inconsistency: \"In 18th-century treatises, the term would denote legal sovereignty, but now it doesn't.\"",
        "options": [
            "In 18th-century treatises",
            "would denote (should be \"used to denote\" because \"denote\" is stative)",
            "legal sovereignty",
            "now it doesn't"
        ],
        "answer": 1,
        "explanation": "\"Denote\" is a stative verb representing an ongoing conceptual meaning, rendering \"would\" illicit; \"used to denote\" is required.",
        "sourceTip": "British Council C2"
    },
    {
        "id": "ut_c2_4",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "In literary narrative, how does the alternating use of \"used to\" and \"would\" function strategically?",
        "options": [
            "\"Used to\" establishes the general temporal habitus/setting, while subsequent \"would\" clauses iterate specific, evocative habitual vignettes.",
            "\"Used to\" is used for dialogue, \"would\" for narrative prose.",
            "They cannot be combined in the same paragraph.",
            "\"Would\" indicates uncertainty."
        ],
        "answer": 0,
        "explanation": "Standard literary convention uses \"used to\" to frame the overarching past background, followed by \"would\" to depict lyrical, repeated vignettes within that frame.",
        "sourceTip": "Cambridge C2"
    },
    {
        "id": "ut_c2_5",
        "level": "C2",
        "type": "fill_blank",
        "typeLabel": "Fill in the Blank",
        "skillTested": "Producing",
        "question": "Complete: \"The reclusive author was habituated to isolation, ______ accustomed to the solitude of his highland retreat.\"",
        "options": [
            "become",
            "being",
            "having",
            "to be"
        ],
        "answer": 1,
        "explanation": "The participial phrase \"being accustomed to...\" parallels \"habituated to isolation\".",
        "sourceTip": "Oxford C2"
    },
    {
        "id": "ut_c2_6",
        "level": "C2",
        "type": "correct_incorrect",
        "typeLabel": "Correct or Incorrect",
        "skillTested": "Understanding",
        "question": "Evaluate the syntactic validity of: \"Never used she to question the council's verdict.\"",
        "options": [
            "Valid formal literary negative inversion",
            "Invalid double inversion"
        ],
        "answer": 0,
        "explanation": "Fronting negative adverb \"Never\" triggers subject-auxiliary inversion with marginal modal \"used\": \"Never used she to question\".",
        "sourceTip": "British Council C2"
    },
    {
        "id": "ut_c2_7",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Explaining",
        "question": "Contrast: \"Water is used to irrigate crops\" vs \"Farmers are used to irrigating crops\". What distinguishes the prepositional phrase in sentence 2 from the infinitive in sentence 1?",
        "options": [
            "Sentence 1 features a to-infinitive clause of purpose; sentence 2 features a preposition \"to\" taking a non-finite gerundial noun phrase complement.",
            "Sentence 1 contains a gerund.",
            "Sentence 2 is passive voice.",
            "Both are identical complement clauses."
        ],
        "answer": 0,
        "explanation": "Sentence 1 has the verb \"use\" + to-infinitive of purpose. Sentence 2 has the adjective \"used\" + preposition \"to\" governing a gerund noun phrase complement.",
        "sourceTip": "Cambridge C2"
    },
    {
        "id": "ut_c2_8",
        "level": "C2",
        "type": "checking_error",
        "typeLabel": "Checking Error",
        "skillTested": "Explaining",
        "question": "Find the flaw in: \"He is used to withstand extreme climatic variance.\"",
        "options": [
            "He is",
            "used to withstand (should be \"used to withstanding\")",
            "extreme",
            "climatic variance"
        ],
        "answer": 1,
        "explanation": "The predicate adjective \"used to\" (accustomed) requires the gerund complement \"withstanding\".",
        "sourceTip": "Oxford C2"
    },
    {
        "id": "ut_c2_9",
        "level": "C2",
        "type": "open_bracket",
        "typeLabel": "Open Bracket",
        "skillTested": "Producing",
        "question": "Complete the sentence: \"Long exposure to radiation rendered the sensors useless, as they were not designed to be used to (measure) ______ such intense flux.\"",
        "options": [
            "measure",
            "measuring",
            "measured",
            "be measured"
        ],
        "answer": 0,
        "explanation": "Here \"be used to\" is passive voice of \"use\" with purpose infinitive \"to measure\" (NOT habitual familiarity).",
        "sourceTip": "British Council C2"
    },
    {
        "id": "ut_c2_10",
        "level": "C2",
        "type": "multiple_choice",
        "typeLabel": "Multiple Choice",
        "skillTested": "Understanding",
        "question": "What accounts for the unacceptability of: *\"He uses to read the Times every morning\"?",
        "options": [
            "The marginal modal \"used to\" has no present tense paradigm; present habitual aspect is morphosyntactically encoded by the simple present tense.",
            "\"Times\" should be italicized.",
            "\"Read\" cannot follow \"uses\".",
            "\"Uses\" is only transitive."
        ],
        "answer": 0,
        "explanation": "The defective marginal modal \"used to\" has undergone total historical syncope of its present tense paradigm, necessitating the simple present with adverbs of frequency.",
        "sourceTip": "Cambridge C2"
    }
]
};

  if (typeof window !== 'undefined') {
    window.GRAMMAR_TESTS_DATA = data;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }
})();
