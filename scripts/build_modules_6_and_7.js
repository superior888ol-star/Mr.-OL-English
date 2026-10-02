// scripts/build_modules_6_and_7.js
const fs = require('fs');
const { q } = require('./q_helper');

console.log('--- Generating Modules 6 & 7 (Gerund/Infinitive & Used to) ---');

// =========================================================================
// 1. GENERATE 80 QUESTIONS FOR GERUND & INFINITIVE
// =========================================================================
const gerundInfinitiveQuestions = [];

// A1: 15 Questions
gerundInfinitiveQuestions.push(
  q('gi_a1_1', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct form: "She likes ______ books in the library."',
    ['read', 'reading', 'to readed', 'reads'], 1,
    'After the verb "like", we frequently use a gerund (V-ing) to express general hobbies: "reading".', 'British Council A1'),
  q('gi_a1_2', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct form: "I want ______ a new laptop for my studies."',
    ['buying', 'to buy', 'buy', 'bought'], 1,
    'The verb "want" is followed by a to-infinitive: "want to buy".', 'test-english A1'),
  q('gi_a1_3', 'A1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "They decided ______ to Angkor Wat this weekend."',
    ['go', 'going', 'to go', 'went'], 2,
    '"Decide" is always followed by a to-infinitive: "decided to go".', 'Cambridge A1'),
  q('gi_a1_4', 'A1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate this sentence: "He is very good at speak English."',
    ['Correct', 'Incorrect - it should be "good at speaking"'], 1,
    'After prepositions like "at", verbs must take the gerund form (-ing): "good at speaking".', 'Oxford A1'),
  q('gi_a1_5', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct sentence: "We enjoy ______ football after class."',
    ['playing', 'to play', 'play', 'played'], 0,
    '"Enjoy" is always followed by a gerund: "enjoy playing".', 'British Council A1'),
  q('gi_a1_6', 'A1', 'open_bracket', 'Open Bracket', 'Producing',
    'Put the verb in brackets into the correct form: "Thank you for (help) ______ me with my homework."',
    ['help', 'to help', 'helping', 'helped'], 2,
    'After the preposition "for", the verb takes -ing: "for helping".', 'test-english A1'),
  q('gi_a1_7', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct sentence:',
    ['I would like to have a cup of tea.', 'I would like having a cup of tea.', 'I would like have a cup of tea.', 'I would like to having a cup of tea.'], 0,
    '"Would like" is followed by a to-infinitive: "would like to have".', 'Cambridge A1'),
  q('gi_a1_8', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Complete the phrase: "Let\'s go ______ at the market this afternoon."',
    ['shop', 'to shop', 'shopping', 'shopped'], 2,
    'The expression "go + V-ing" is used for recreational activities and chores: "go shopping".', 'British Council A1'),
  q('gi_a1_9', 'A1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error in: "She hopes seeing her family next week."',
    ['She', 'hopes', 'seeing (should be "to see")', 'next week'], 2,
    '"Hope" requires a to-infinitive: "hopes to see", not "seeing".', 'Oxford A1'),
  q('gi_a1_10', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What role does "Swimming" play in "Swimming is my favorite sport"?',
    ['Verb in present continuous', 'Gerund functioning as Subject', 'Infinitive of purpose', 'Adjective'], 1,
    'Here "Swimming" is a gerund (V-ing) acting as the subject of the sentence.', 'Grammar in Use A1'),
  q('gi_a1_11', 'A1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "He needs ______ his homework before dinner."',
    ['finish', 'finishing', 'to finish', 'finished'], 2,
    '"Need" is followed by a to-infinitive when expressing personal obligation: "needs to finish".', 'test-english A1'),
  q('gi_a1_12', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct option: "You can ______ English very well."',
    ['speak', 'to speak', 'speaking', 'spoke'], 0,
    'Modal verbs like "can", "must", and "should" take a bare infinitive (base form without "to"): "can speak".', 'British Council A1'),
  q('gi_a1_13', 'A1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Is this sentence correct? "I love to eating Khmer noodles in the morning."',
    ['Correct', 'Incorrect - say "love eating" or "love to eat"'], 1,
    'You cannot combine "to" with a gerund here: either use "to eat" or "eating".', 'Oxford A1'),
  q('gi_a1_14', 'A1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete the sentence: "She promised ______ on time tomorrow."',
    ['arrive', 'to arrive', 'arriving', 'arrived'], 1,
    '"Promise" is followed by a to-infinitive: "promised to arrive".', 'Cambridge A1'),
  q('gi_a1_15', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which verb is followed by a gerund (V-ing)?',
    ['decide', 'hope', 'finish', 'promise'], 2,
    '"Finish" is followed by a gerund: "finish doing something". The others take to-infinitives.', 'test-english A1')
);

// A2: 15 Questions
gerundInfinitiveQuestions.push(
  q('gi_a2_1', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct form: "He avoided ______ questions about the test."',
    ['answer', 'to answer', 'answering', 'answered'], 2,
    '"Avoid" is followed by a gerund: "avoided answering".', 'British Council A2'),
  q('gi_a2_2', 'A2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "We agreed ______ the project together."',
    ['doing', 'to do', 'do', 'did'], 1,
    '"Agree" is followed by a to-infinitive: "agreed to do".', 'test-english A2'),
  q('gi_a2_3', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct sentence expressing purpose:',
    ['I went to the store for buy some milk.', 'I went to the store to buy some milk.', 'I went to the store for to buy milk.', 'I went to the store buying milk.'], 1,
    'The to-infinitive is used to express purpose (why someone does something): "to buy milk".', 'Cambridge A2'),
  q('gi_a2_4', 'A2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the mistake: "They refused helping the strange man."',
    ['They', 'refused', 'helping (should be "to help")', 'the strange man'], 2,
    '"Refuse" is followed by a to-infinitive: "refused to help".', 'Oxford A2'),
  q('gi_a2_5', 'A2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "Do you mind (open) ______ the window, please?"',
    ['open', 'to open', 'opening', 'opened'], 2,
    '"Mind" is followed by a gerund: "Do you mind opening...?"', 'British Council A2'),
  q('gi_a2_6', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct form: "She is learning ______ traditional Khmer music."',
    ['play', 'playing', 'to play', 'played'], 2,
    '"Learn" is followed by a to-infinitive: "learning to play".', 'test-english A2'),
  q('gi_a2_7', 'A2', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Is this sentence grammatically correct? "He suggested going to the park."',
    ['Correct', 'Incorrect - should be "suggested to go"'], 0,
    '"Suggest" is followed by a gerund: "suggested going". It is grammatically correct.', 'Cambridge A2'),
  q('gi_a2_8', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which sentence uses a bare infinitive correctly?',
    ['My teacher made me to redo the assignment.', 'My teacher made me redoing the assignment.', 'My teacher made me redo the assignment.', 'My teacher made to redo the assignment.'], 2,
    'The causative verb "make" takes an object + bare infinitive in the active voice: "made me redo".', 'Oxford A2'),
  q('gi_a2_9', 'A2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "We can\'t afford ______ on holiday this month."',
    ['go', 'going', 'to go', 'went'], 2,
    '"Afford" is followed by a to-infinitive: "afford to go".', 'British Council A2'),
  q('gi_a2_10', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct negative infinitive: "He told me ______ late."',
    ['not be', 'to not be', 'not to be', 'not being'], 2,
    'The negative to-infinitive places "not" directly before "to": "not to be".', 'test-english A2'),
  q('gi_a2_11', 'A2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the mistake: "She left the classroom without to say goodbye."',
    ['She left', 'the classroom', 'without to say (should be "without saying")', 'goodbye'], 2,
    '"Without" is a preposition and must be followed by a gerund: "without saying".', 'Cambridge A2'),
  q('gi_a2_12', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct sentence: "It is important ______ daily vocabulary."',
    ['practice', 'to practice', 'practicing', 'practiced'], 1,
    'After dummy "It is + Adjective", use a to-infinitive: "It is important to practice".', 'Oxford A2'),
  q('gi_a2_13', 'A2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete with the correct form: "She practiced (speak) ______ English every morning."',
    ['speak', 'to speak', 'speaking', 'spoke'], 2,
    '"Practice" takes a gerund: "practiced speaking".', 'British Council A2'),
  q('gi_a2_14', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Complete: "My parents let me ______ to the party with my classmates."',
    ['go', 'to go', 'going', 'went'], 0,
    '"Let" takes object + bare infinitive: "let me go".', 'test-english A2'),
  q('gi_a2_15', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which of the following verbs can take BOTH gerund and infinitive with NO change in meaning?',
    ['enjoy', 'begin', 'decide', 'avoid'], 1,
    '"Begin" can take either a gerund or to-infinitive with essentially identical meaning: "began raining" = "began to rain".', 'Cambridge A2')
);

// B1: 15 Questions
gerundInfinitiveQuestions.push(
  q('gi_b1_1', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does this mean: "I remembered to lock the door before leaving."?',
    ['I had a memory of locking it in the past.', 'I did not forget my duty; I locked the door.', 'I forgot to lock it.', 'I stopped locking doors.'], 1,
    '"Remember to do" means remembering a duty or task and carrying it out. "Remember doing" refers to a past memory.', 'British Council B1'),
  q('gi_b1_2', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does this mean: "I remember meeting him in Siem Reap two years ago."?',
    ['I had a task to meet him.', 'I have a past memory of meeting him.', 'I forgot to meet him.', 'I should meet him now.'], 1,
    '"Remember + V-ing" refers to recollecting a past experience or event.', 'test-english B1'),
  q('gi_b1_3', 'B1', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Compare: "He stopped smoking" vs "He stopped to smoke". Which is correct?',
    ['Both mean he quit smoking completely.', '"He stopped smoking" = he quit the habit; "He stopped to smoke" = he paused what he was doing in order to smoke.', '"He stopped to smoke" = he quit smoking.', 'Neither sentence is correct English.'], 1,
    '"Stop + V-ing" = terminate an action/habit. "Stop + to-inf" = pause another activity in order to do something.', 'Cambridge B1'),
  q('gi_b1_4', 'B1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "I will never forget ______ Angkor Wat for the first time."',
    ['see', 'to see', 'seeing', 'saw'], 2,
    '"Forget + V-ing" means losing the memory of a past experience: "forget seeing".', 'Oxford B1'),
  q('gi_b1_5', 'B1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "Don\'t forget taking your umbrella when you leave!"',
    ['Don\'t', 'forget taking (should be "forget to take")', 'your umbrella', 'when you leave'], 1,
    'For a future obligation or reminder, use "forget to + base verb": "Don\'t forget to take".', 'British Council B1'),
  q('gi_b1_6', 'B1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Complete the sentence: "We look forward to ______ you at the graduation ceremony."',
    ['see', 'saw', 'seeing', 'be seen'], 2,
    'In "look forward to", "to" is a preposition, so it must be followed by a gerund: "seeing".', 'test-english B1'),
  q('gi_b1_7', 'B1', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "She tried (turn) ______ off the computer, but it didn\'t resolve the error."',
    ['turn', 'turning', 'to turn', 'turned'], 1,
    '"Try + V-ing" means to experiment with a method to see if it solves a problem.', 'Cambridge B1'),
  q('gi_b1_8', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does "I tried to lift the heavy box" imply?',
    ['I experimented with lifting as a hobby.', 'I made a physical effort to lift it, but it was difficult or unsuccessful.', 'I watched someone lift it.', 'I easily lifted it.'], 1,
    '"Try + to-infinitive" means making an effort or attempt to accomplish something difficult.', 'Oxford B1'),
  q('gi_b1_9', 'B1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Is this sentence correct? "I regret telling you that your application has been rejected."',
    ['Correct', 'Incorrect - it should be "I regret to tell you"'], 1,
    'For formal, polite announcements of bad news, use "regret to say/tell/inform": "I regret to tell you". "Regret telling" means feeling sorry about having told someone something in the past.', 'British Council B1'),
  q('gi_b1_10', 'B1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete the sentence: "She admitted ______ the document without authorization."',
    ['take', 'to take', 'taking', 'taken'], 2,
    '"Admit" is followed by a gerund: "admitted taking".', 'test-english B1'),
  q('gi_b1_11', 'B1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which verb takes an object + to-infinitive?',
    ['suggest', 'enjoy', 'encourage', 'avoid'], 2,
    '"Encourage" takes object + to-infinitive: "encourage someone to do something".', 'Cambridge B1'),
  q('gi_b1_12', 'B1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "He managed ______ all 80 questions before the timer ran out."',
    ['answer', 'answering', 'to answer', 'answered'], 2,
    '"Manage" takes a to-infinitive: "managed to answer".', 'Oxford B1'),
  q('gi_b1_13', 'B1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "They persuaded him resigning from his position."',
    ['They persuaded', 'him resigning (should be "him to resign")', 'from', 'his position'], 1,
    '"Persuade" takes object + to-infinitive: "persuaded him to resign".', 'British Council B1'),
  q('gi_b1_14', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Complete the sentence: "I would rather ______ at home tonight."',
    ['stay', 'to stay', 'staying', 'stayed'], 0,
    '"Would rather" is an idiom followed by a bare infinitive: "would rather stay".', 'test-english B1'),
  q('gi_b1_15', 'B1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete the sentence: "You had better ______ a doctor immediately."',
    ['consult', 'to consult', 'consulting', 'consulted'], 0,
    '"Had better" takes a bare infinitive: "had better consult".', 'Cambridge B1')
);

// B2: 15 Questions
gerundInfinitiveQuestions.push(
  q('gi_b2_1', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct form: "The suspect denied ______ anywhere near the bank that evening."',
    ['be', 'to be', 'being', 'having been being'], 2,
    '"Deny" is followed by a gerund: "denied being" or "denied having been".', 'British Council B2'),
  q('gi_b2_2', 'B2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'In passive voice, causative "make" changes its complementation. Which is correct?',
    ['He was made sign the confession.', 'He was made to sign the confession.', 'He was made signing the confession.', 'He was made signed the confession.'], 1,
    'While active "make" takes a bare infinitive ("They made him sign"), passive "be made" requires a to-infinitive: "He was made to sign".', 'Cambridge B2'),
  q('gi_b2_3', 'B2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "This dirty whiteboard really needs ______ before the next lecture."',
    ['clean', 'to clean', 'cleaning', 'cleaned'], 2,
    '"Need + V-ing" conveys a passive meaning equivalent to "needs to be cleaned": "needs cleaning".', 'Oxford B2'),
  q('gi_b2_4', 'B2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "He objects to work on weekends."',
    ['He', 'objects to work (should be "objects to working")', 'on', 'weekends'], 1,
    'In "object to", "to" is a preposition, requiring a gerund: "objects to working".', 'test-english B2'),
  q('gi_b2_5', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does this mean: "Taking this course means studying at least 10 hours a week."?',
    ['I intend to study 10 hours.', 'It involves or entails studying 10 hours.', 'I failed to study.', 'I stopped studying.'], 1,
    '"Mean + V-ing" expresses that something entails, involves, or results in an action.', 'British Council B2'),
  q('gi_b2_6', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Contrast with: "I didn\'t mean to hurt your feelings." What does "mean + to-inf" express?',
    ['Involving a consequence', 'Intention or purpose', 'Past memory', 'Experimenting'], 1,
    '"Mean + to-infinitive" indicates intention: "did not intend to hurt".', 'Cambridge B2'),
  q('gi_b2_7', 'B2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "I can\'t help (wonder) ______ what happened to him."',
    ['wonder', 'to wonder', 'wondering', 'wondered'], 2,
    '"Can\'t help" is an idiom followed by a gerund: "can\'t help wondering" (unable to stop myself from wondering).', 'Oxford B2'),
  q('gi_b2_8', 'B2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Complete: "It\'s no use ______ over spilled milk."',
    ['cry', 'to cry', 'crying', 'cried'], 2,
    'The fixed expression "it\'s no use / it\'s no good" takes a gerund: "crying".', 'British Council B2'),
  q('gi_b2_9', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct sentence involving perception verbs:',
    ['I saw him to steal the wallet.', 'I saw him steal the wallet.', 'I saw him stole the wallet.', 'I saw to steal the wallet.'], 1,
    'Perception verbs (see, hear, watch, notice) take an object + bare infinitive (for a completed action): "saw him steal".', 'test-english B2'),
  q('gi_b2_10', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What is the nuance of "I heard her singing in the shower" vs "I heard her sing the whole song"?',
    ['No difference in meaning.', '"Singing" emphasizes an ongoing action in progress; "sing" emphasizes the completed performance.', '"Singing" is incorrect grammar.', '"Sing" indicates an incomplete action.'], 1,
    'Object + V-ing stresses an action in progress, while Object + bare infinitive stresses witnessing the complete act from start to finish.', 'Cambridge B2'),
  q('gi_b2_11', 'B2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "There is no point in ______ about things you cannot change."',
    ['worry', 'to worry', 'worrying', 'worried'], 2,
    '"There is no point in" has the preposition "in", thus requiring a gerund: "worrying".', 'Oxford B2'),
  q('gi_b2_12', 'B2', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate this sentence: "She confessed to having forged the signature."',
    ['Correct - "to" is a preposition here, and "having forged" is a perfect gerund', 'Incorrect - should be "confessed to forge"'], 0,
    '"Confess to" takes a gerund; the perfect gerund "having forged" accurately highlights that the forgery happened prior to the confession.', 'British Council B2'),
  q('gi_b2_13', 'B2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct complementation: "The government committed itself to ______ carbon emissions."',
    ['reduce', 'reducing', 'reduced', 'have reduced'], 1,
    '"Commit oneself to" contains preposition "to" and takes a gerund: "reducing".', 'test-english B2'),
  q('gi_b2_14', 'B2', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "He postponed to submit his research paper until Friday."',
    ['He', 'postponed to submit (should be "postponed submitting")', 'his research paper', 'until Friday'], 1,
    '"Postpone" takes a gerund: "postponed submitting".', 'Cambridge B2'),
  q('gi_b2_15', 'B2', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete: "She claims ______ the President in Paris last summer."',
    ['meet', 'to meet', 'meeting', 'to have met'], 3,
    'The perfect infinitive "to have met" expresses an action that occurred prior to the time of claiming.', 'Oxford B2')
);

// C1: 10 Questions
gerundInfinitiveQuestions.push(
  q('gi_c1_1', 'C1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Select the sentence exhibiting formal genitive case with a gerund:',
    ['I strongly resent him interrupting our meeting.', 'I strongly resent his interrupting our meeting.', 'I strongly resent he interrupting our meeting.', 'I strongly resent to him interrupting our meeting.'], 1,
    'In formal, standard English, a noun or pronoun preceding a gerund takes the possessive (genitive) case: "his interrupting".', 'British Council C1'),
  q('gi_c1_2', 'C1', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Identify the passive gerund in the following options:',
    ['She hates being treated like a novice.', 'She hates to treat like a novice.', 'She hates treating like a novice.', 'She hates to be treating like a novice.'], 0,
    '"Being treated" is a passive gerund ("being + V3"), indicating the subject receives the action of treating.', 'Cambridge C1'),
  q('gi_c1_3', 'C1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "The suspect is believed ______ the country using a counterfeit passport."',
    ['to leave', 'to be leaving', 'to have left', 'leaving'], 2,
    'The perfect infinitive "to have left" is necessary to denote that the departure occurred before the present belief.', 'Oxford C1'),
  q('gi_c1_4', 'C1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "With a view to enhance bilateral trade, both nations signed the accord."',
    ['With a view to enhance (should be "With a view to enhancing")', 'bilateral trade', 'both nations', 'signed the accord'], 0,
    '"With a view to" is a formal prepositional idiom meaning "with the aim of"; the "to" is a preposition requiring a gerund: "enhancing".', 'test-english C1'),
  q('gi_c1_5', 'C1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Analyze: "He went on to talk about the economic reforms." What does "go on + to-inf" indicate?',
    ['He continued talking about the same topic without stopping.', 'He finished one topic and proceeded to a new, subsequent topic.', 'He stopped talking entirely.', 'He regretted talking.'], 1,
    '"Go on + to-infinitive" indicates transitioning to a new activity or topic. "Go on + V-ing" means continuing the existing activity.', 'British Council C1'),
  q('gi_c1_6', 'C1', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "He was furious at (keep) ______ waiting in the rain for over an hour."',
    ['keeping', 'being kept', 'to be kept', 'having kept'], 1,
    'The preposition "at" requires a gerund, and because he was the recipient of the waiting imposition, passive gerund "being kept" is required.', 'Cambridge C1'),
  q('gi_c1_7', 'C1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct complementation: "She would prefer ______ indoors rather than go out in this storm."',
    ['staying', 'to stay', 'stay', 'stayed'], 1,
    '"Would prefer" is followed by a to-infinitive ("to stay"), contrasted with "rather than + bare infinitive" ("go out").', 'Oxford C1'),
  q('gi_c1_8', 'C1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate: "The treaty is subject to being ratified by the senate."',
    ['Correct - "subject to" takes a gerund complement', 'Incorrect - must be "subject to ratify"'], 0,
    '"Subject to" is a prepositional phrase, correctly taking the passive gerund "being ratified".', 'British Council C1'),
  q('gi_c1_9', 'C1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete the sentence: "I appreciate ______ given the opportunity to present my thesis."',
    ['having', 'having been', 'to have been', 'being having'], 1,
    '"Appreciate" governs a gerund; the perfect passive gerund "having been given" expresses that the opportunity was granted prior to the appreciation.', 'test-english C1'),
  q('gi_c1_10', 'C1', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "He was accused of to have leaked state secrets."',
    ['He was', 'accused of to have leaked (should be "of having leaked")', 'state secrets', 'to the press'], 1,
    'After the preposition "of", an infinitive cannot stand; the perfect gerund "having leaked" is mandatory.', 'Cambridge C1')
);

// C2: 10 Questions
gerundInfinitiveQuestions.push(
  q('gi_c2_1', 'C2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Analyze the stylistic nuance of the split infinitive in: "He resolved to boldly confront the tribunal."',
    ['It is categorically ungrammatical and must be altered.', 'It is grammatically permissible and emphasizes the manner of confrontation naturally.', 'It should be replaced with a gerund.', 'It lacks an auxiliary verb.'], 1,
    'Modern linguistic consensus accepts split infinitives where splitting avoids awkwardness or ambiguity and imparts natural rhetorical emphasis.', 'Cambridge C2'),
  q('gi_c2_2', 'C2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Identify the construction in: "For him to abandon the project now would be catastrophic."',
    ['Prepositional phrase modifying the verb "would be"', 'Infinitive clause with an overt subject introduced by "for" acting as subject', 'Dangling participial clause', 'Causative inversion'], 1,
    '"For + noun phrase + to-infinitive" forms a non-finite clause with an overt subject ("him"), functioning here as the clausal subject of the sentence.', 'Oxford C2'),
  q('gi_c2_3', 'C2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the subtle prescriptive error: "There is no excuse for him failing to report the anomaly."',
    ['There is no', 'for him failing (formal prescriptive rule favors "his failing")', 'to report', 'the anomaly'], 1,
    'In formal academic registers, the subject of a gerund takes the genitive form ("his failing") rather than the accusative ("him failing").', 'British Council C2'),
  q('gi_c2_4', 'C2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'In the literary sentence: "To know her is to revere her", what grammatical function do both infinitives perform?',
    ['Subject and Direct Object', 'Subject and Subject Complement', 'Adverbial and Adjectival', 'Appositive and Adjunct'], 1,
    '"To know her" is the subject, and "to revere her" is the subject complement linked by the copular verb "is".', 'Cambridge C2'),
  q('gi_c2_5', 'C2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "The defendant professed ______ no recollection of the events in question."',
    ['having', 'to have', 'to having', 'having had'], 1,
    '"Profess" followed by a complement clause in high-register English takes a to-infinitive: "professed to have".', 'Oxford C2'),
  q('gi_c2_6', 'C2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Examine: "He did nothing except ______ complaints all evening."',
    ['voice', 'to voice', 'voicing', 'voiced'], 0,
    'After "do + nothing/anything/something + except/but", the subsequent verb typically takes a bare infinitive: "voice".', 'test-english C2'),
  q('gi_c2_7', 'C2', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate: "The ambassador was said to have been preparing the dispatch when the hostilities commenced."',
    ['Correct - perfect continuous passive infinitive', 'Incorrect - double modal conflict'], 0,
    '"To have been preparing" is a valid perfect continuous infinitive depicting an action in progress prior to the reporting.', 'British Council C2'),
  q('gi_c2_8', 'C2', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Choose the correct complementation: "The committee balked at ______ the unvetted expenditure."',
    ['sanction', 'to sanction', 'sanctioning', 'having to sanction'], 2,
    '"Balk at" is an intransitive phrasal verb requiring the prepositional gerund complement "sanctioning".', 'Cambridge C2'),
  q('gi_c2_9', 'C2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'What role does the to-infinitive serve in: "She was the first female scholar to be awarded the honorary doctorate."?',
    ['Adverb of consequence', 'Post-modifying adjectival infinitive qualifying "scholar"', 'Direct object of "was"', 'Subject complement'], 1,
    'The infinitive clause "to be awarded..." functions adjectivally to post-modify the noun phrase "the first female scholar".', 'Oxford C2'),
  q('gi_c2_10', 'C2', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "He would sooner die than to surrender the garrison."',
    ['He would sooner', 'die', 'than to surrender (should be "than surrender")', 'the garrison'], 2,
    '"Would sooner / would rather... than" links parallel bare infinitives: "die than surrender".', 'British Council C2')
);

console.log(`Generated ${gerundInfinitiveQuestions.length} questions for Gerund & Infinitive.`);


// =========================================================================
// 2. GENERATE 80 QUESTIONS FOR USED TO / BE, GET USED TO
// =========================================================================
const usedToQuestions = [];

// A1: 15 Questions
usedToQuestions.push(
  q('ut_a1_1', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct form for a past habit: "When I was young, I ______ play football every afternoon."',
    ['used to', 'use to', 'was used to', 'am used to'], 0,
    '"Used to + base verb" describes a past habit that no longer occurs: "used to play".', 'British Council A1'),
  q('ut_a1_2', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does this mean: "Mr. Ol used to live in Phnom Penh."?',
    ['He lives in Phnom Penh now.', 'He lived in Phnom Penh in the past, but he does not live there now.', 'He will move to Phnom Penh.', 'He visits Phnom Penh regularly.'], 1,
    '"Used to" indicates a past state or habit that is no longer true in the present.', 'test-english A1'),
  q('ut_a1_3', 'A1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the negative sentence: "She didn\'t ______ like spicy food when she was a child."',
    ['used to', 'use to', 'using to', 'used'], 1,
    'After "didn\'t", the verb returns to the base form: "didn\'t use to".', 'Cambridge A1'),
  q('ut_a1_4', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct question form:',
    ['Did you used to have a bicycle?', 'Did you use to have a bicycle?', 'Were you used to have a bicycle?', 'Do you used to have a bicycle?'], 1,
    'Questions in the past simple with "did" require the base form "use to": "Did you use to...?"', 'Oxford A1'),
  q('ut_a1_5', 'A1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate this sentence: "He uses to go to school by bus every day."',
    ['Correct', 'Incorrect - "used to" cannot be used for present habits; say "usually goes"'], 1,
    '"Used to" only exists for the past. For present habits, use "usually" with the Present Simple: "He usually goes".', 'British Council A1'),
  q('ut_a1_6', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Complete the sentence: "We used to ______ long walks along the river."',
    ['take', 'taking', 'took', 'taken'], 0,
    '"Used to" is followed by a base verb: "used to take".', 'test-english A1'),
  q('ut_a1_7', 'A1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the mistake: "She didn\'t used to watch television."',
    ['She', 'didn\'t used to (should be "didn\'t use to")', 'watch', 'television'], 1,
    'The auxiliary "didn\'t" carries the past tense, so "used" must be "use": "didn\'t use to".', 'Cambridge A1'),
  q('ut_a1_8', 'A1', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "My brother (use to) ______ have very long hair."',
    ['use to', 'used to', 'was used to', 'using to'], 1,
    'The affirmative past habit/state takes "used to + base verb": "used to have".', 'Oxford A1'),
  q('ut_a1_9', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Complete the sentence: "There ______ be a cinema in our village years ago."',
    ['used to', 'is used to', 'got used to', 'was using to'], 0,
    '"There used to be" expresses a past state or existence that is no longer there.', 'British Council A1'),
  q('ut_a1_10', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which sentence is grammatically correct?',
    ['I didn\'t use to drink coffee, but now I do.', 'I didn\'t used to drink coffee, but now I do.', 'I not used to drink coffee.', 'I use to drank coffee.'], 0,
    'The correct negative form is "didn\'t use to + base verb".', 'test-english A1'),
  q('ut_a1_11', 'A1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "They ______ swim in the lake during summer vacations."',
    ['used to', 'use to', 'are used to', 'were use to'], 0,
    'Affirmative past habit takes "used to": "used to swim".', 'Cambridge A1'),
  q('ut_a1_12', 'A1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Is this sentence correct? "I used to play computer games when I was ten."',
    ['Correct', 'Incorrect - should be "used to playing"'], 0,
    'For past habits, "used to" is followed by the base verb: "used to play". It is correct.', 'Oxford A1'),
  q('ut_a1_13', 'A1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What is the meaning of "He used to smoke 20 cigarettes a day"?',
    ['He still smokes 20 cigarettes a day.', 'He has quit smoking.', 'He never smoked.', 'He wants to smoke.'], 1,
    '"Used to" signifies that the habit has terminated in the present.', 'British Council A1'),
  q('ut_a1_14', 'A1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete the question: "______ you use to have a pet when you were little?"',
    ['Did', 'Do', 'Were', 'Have'], 0,
    'Past simple questions take "Did": "Did you use to...?"', 'test-english A1'),
  q('ut_a1_15', 'A1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Complete the sentence: "My grandfather ______ tell us ancient stories every evening."',
    ['used to', 'use to', 'is used to', 'uses to'], 0,
    '"Used to + base verb" describes a regular past habit.', 'Cambridge A1')
);

// A2: 15 Questions
usedToQuestions.push(
  q('ut_a2_1', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Contrast: "I used to walk to work, but now I ______."',
    ['drive', 'used to drive', 'am used to drive', 'drove'], 0,
    '"Used to walk" contrasts with present behavior: "now I drive".', 'British Council A2'),
  q('ut_a2_2', 'A2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "We never ______ lock our front door in the countryside."',
    ['used to', 'use to', 'using to', 'used'], 0,
    'With "never", the verb retains "used to": "never used to lock".', 'test-english A2'),
  q('ut_a2_3', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct sentence to express an ongoing familiarity:',
    ['I am used to getting up early.', 'I used to get up early.', 'I get used to got up early.', 'I am use to get up early.'], 0,
    '"Be used to + V-ing" expresses that an action is familiar and normal for the subject.', 'Cambridge A2'),
  q('ut_a2_4', 'A2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "He is used to drive on the right side of the road."',
    ['He is', 'used to drive (should be "used to driving")', 'on the right', 'side of the road'], 1,
    'After "be used to", use a gerund (V-ing) or noun: "used to driving".', 'Oxford A2'),
  q('ut_a2_5', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'What follows "be used to"?',
    ['Base verb', 'Gerund (V-ing) or Noun', 'Past participle', 'To-infinitive'], 1,
    '"Be used to" means "accustomed to", where "to" is a preposition taking a gerund or noun.', 'British Council A2'),
  q('ut_a2_6', 'A2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete with the correct form: "She is not used to (eat) ______ spicy food."',
    ['eat', 'eating', 'ate', 'eaten'], 1,
    '"Be used to" takes a gerund: "not used to eating".', 'test-english A2'),
  q('ut_a2_7', 'A2', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate: "Did she used to work as a nurse?"',
    ['Correct', 'Incorrect - should be "Did she use to work"'], 1,
    'After the auxiliary "Did", "used" must be "use": "Did she use to work".', 'Cambridge A2'),
  q('ut_a2_8', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does this sentence mean: "I am getting used to the noise in the city."?',
    ['I am familiar with the noise already.', 'I am in the process of becoming accustomed to the noise.', 'I used to hear noise in the past.', 'I dislike all noise.'], 1,
    '"Get used to" describes the ongoing process of becoming familiar with something new.', 'Oxford A2'),
  q('ut_a2_9', 'A2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "Don\'t worry, you will soon get used to ______ the new software."',
    ['use', 'to use', 'using', 'used'], 2,
    '"Get used to" takes a gerund: "get used to using".', 'British Council A2'),
  q('ut_a2_10', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Choose the correct negative form of "be used to":',
    ['I didn\'t used to the heat.', 'I am not used to the heat.', 'I not am used to the heat.', 'I am used to not heat.'], 1,
    'The negative of "am used to" is "am not used to + noun": "am not used to the heat".', 'test-english A2'),
  q('ut_a2_11', 'A2', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "Where did you used to go on holiday?"',
    ['Where', 'did you used to (should be "did you use to")', 'go', 'on holiday'], 1,
    '"Did" requires the base form "use to": "Where did you use to go?".', 'Cambridge A2'),
  q('ut_a2_12', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Complete the sentence: "Living in Siem Reap was strange at first, but now I ______ the climate."',
    ['used to', 'am used to', 'use to', 'get use to'], 1,
    '"Am used to + noun" expresses present comfort and familiarity.', 'Oxford A2'),
  q('ut_a2_13', 'A2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete: "He will never get used to (work) ______ the night shift."',
    ['work', 'working', 'worked', 'to work'], 1,
    '"Get used to" takes a gerund: "get used to working".', 'British Council A2'),
  q('ut_a2_14', 'A2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Which sentence refers to a PAST STATE that is no longer true?',
    ['He used to be a teacher.', 'He is used to teaching.', 'He is getting used to teaching.', 'He usually teaches.'], 0,
    '"Used to be" describes a past state/profession that has ceased.', 'test-english A2'),
  q('ut_a2_15', 'A2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Complete: "Did they ______ live near the river before the flood?"',
    ['used to', 'use to', 'uses to', 'using to'], 1,
    'Question with "Did" takes "use to": "Did they use to live...?".', 'Cambridge A2')
);

// B1: 15 Questions
usedToQuestions.push(
  q('ut_b1_1', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Analyze the difference: 1. "I used to live alone." vs 2. "I am used to living alone."',
    ['Sentence 1 and 2 mean the exact same thing.', '1 = Past habit/state (I don\'t live alone now); 2 = Present familiarity (I live alone and it feels normal).', '1 = Present familiarity; 2 = Past habit.', 'Both sentences are ungrammatical.'], 1,
    'Sentence 1 is a finished past state. Sentence 2 means living alone is customary and comfortable for the speaker.', 'British Council B1'),
  q('ut_b1_2', 'B1', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Why is "She would have a car" incorrect to mean "She used to have a car"?',
    ['"Would" can only express past repeated actions, NEVER past states or possession.', '"Would" is only for future tense.', '"Have" cannot be used with "would".', '"Used to" is only for adjectives.'], 0,
    '"Would" can substitute for "used to" only for repeated physical actions, never for stative verbs (have, be, know, live).', 'Cambridge B1'),
  q('ut_b1_3', 'B1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "When we were children, my grandmother ______ bake fresh bread every Saturday."',
    ['would', 'was used to', 'get used to', 'is used to'], 0,
    'For repeated past actions, both "used to" and "would" are correct: "would bake".', 'test-english B1'),
  q('ut_b1_4', 'B1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "When I moved to London, it took me months to get used to drive on the left."',
    ['When I moved', 'it took me months', 'to get used to drive (should be "to driving")', 'on the left'], 2,
    '"Get used to" requires a gerund: "get used to driving".', 'Oxford B1'),
  q('ut_b1_5', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What does this express: "He was used to working under intense pressure."?',
    ['He worked under pressure in the past and quit.', 'In the past, he found working under pressure normal and manageable.', 'He is beginning to work under pressure now.', 'He refused to work under pressure.'], 1,
    '"Was used to + V-ing" expresses past familiarity (he was accustomed to it at that time in the past).', 'British Council B1'),
  q('ut_b1_6', 'B1', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete with the correct form: "At first, the students found the online platform difficult, but they soon got used to (navigate) ______ it."',
    ['navigate', 'navigating', 'navigated', 'to navigate'], 1,
    '"Got used to" takes a gerund: "got used to navigating".', 'test-english B1'),
  q('ut_b1_7', 'B1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Is this sentence correct? "I used to know all the irregular verbs when I was in Grade 10."',
    ['Correct - "know" is a stative verb used properly with "used to"', 'Incorrect - must say "would know"'], 0,
    '"Used to" is perfectly correct with stative verbs like "know", "believe", "understand".', 'Cambridge B1'),
  q('ut_b1_8', 'B1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Contrast: "This machine is used to cut metal." What is the meaning here?',
    ['The machine is accustomed to cutting metal.', 'Passive voice of "use": the purpose of the machine is to cut metal.', 'The machine cut metal in the past, but not now.', 'The machine is becoming familiar with metal.'], 1,
    'This is the passive voice of the main verb "use" + to-infinitive of purpose: "is used to cut".', 'Oxford B1'),
  q('ut_b1_9', 'B1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete: "A dictionary is ______ look up unfamiliar words."',
    ['used to', 'used for', 'used to looking', 'using to'], 0,
    'Passive voice: "is used to + base verb" (or "is used for looking up"): "used to look up".', 'British Council B1'),
  q('ut_b1_10', 'B1', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Which sentence is INCORRECT?',
    ['I used to love chocolate.', 'I would love chocolate when I was younger.', 'I used to eat chocolate every day.', 'I would eat chocolate every day.'], 1,
    '"Love" is a stative verb; "would love" cannot describe a past habit or preference.', 'test-english B1'),
  q('ut_b1_11', 'B1', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "Are you used to live in such a crowded apartment?"',
    ['Are you', 'used to live (should be "used to living")', 'in such a', 'crowded apartment'], 1,
    '"Are you used to" (familiarity) requires a gerund: "used to living".', 'Cambridge B1'),
  q('ut_b1_12', 'B1', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "I cannot get used to (wear) ______ this tight formal uniform."',
    ['wear', 'wearing', 'wore', 'worn'], 1,
    '"Get used to" takes a gerund: "get used to wearing".', 'Oxford B1'),
  q('ut_b1_13', 'B1', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which expression means "in the process of becoming accustomed"?',
    ['used to do', 'be used to doing', 'get used to doing', 'did use to do'], 2,
    '"Get used to doing" describes the ongoing transition of adaptation.', 'British Council B1'),
  q('ut_b1_14', 'B1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete: "He didn\'t ______ like classical music, but now he attends concerts regularly."',
    ['use to', 'used to', 'was used to', 'getting used to'], 0,
    'Negative past habit with "didn\'t": "didn\'t use to".', 'test-english B1'),
  q('ut_b1_15', 'B1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate: "Bamboo is used to build durable traditional houses in rural Cambodia."',
    ['Correct - passive voice expressing purpose/function', 'Incorrect - should be "used to building"'], 0,
    'This is passive voice of "use" + to-infinitive of purpose: "is used to build". It is fully correct.', 'Cambridge B1')
);

// B2: 15 Questions
usedToQuestions.push(
  q('ut_b2_1', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Identify the sentence where "used to" CANNOT be replaced by "would":',
    ['Every Sunday morning, my father would wash the motorcycle.', 'We used to live in a small wooden house by the river.', 'The students would study in the library after lunch.', 'He used to visit his grandparents every summer.'], 1,
    '"Live" is a state verb; "would" cannot describe past states, so "used to live" cannot become "would live".', 'British Council B2'),
  q('ut_b2_2', 'B2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'What is the formal British English negative of "used to" without auxiliary "did"?',
    ['He used not to smoke.', 'He didn\'t use to smoke.', 'He was not used to smoke.', 'He used to not smoke.'], 0,
    'In formal, traditional British English, "used not to + base verb" (often contracted as "usedn\'t to") is used without auxiliary "did".', 'Cambridge B2'),
  q('ut_b2_3', 'B2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "Having lived in Phnom Penh for over a decade, she is completely accustomed to ______ in heavy traffic."',
    ['drive', 'driving', 'drove', 'driven'], 1,
    '"Accustomed to" is synonymous with "used to", where "to" is a preposition taking a gerund: "driving".', 'Oxford B2'),
  q('ut_b2_4', 'B2', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "Solar radiation is used to generating clean energy across modern installations."',
    ['Solar radiation', 'is used to generating (should be "is used to generate")', 'clean energy', 'across modern installations'], 1,
    'Passive voice of "use" expresses purpose with a to-infinitive: "is used to generate", NOT "generating".', 'test-english B2'),
  q('ut_b2_5', 'B2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "It took the exchange student nearly three months to get used to (speak) ______ English all day long."',
    ['speak', 'speaking', 'spoke', 'to speak'], 1,
    '"Get used to" takes a gerund: "get used to speaking".', 'British Council B2'),
  q('ut_b2_6', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Choose the correct tag question: "You used to play chess for the school team, ______?"',
    ['didn\'t you?', 'usedn\'t you?', 'both A and B are acceptable in formal/standard English', 'weren\'t you?'], 2,
    '"Didn\'t you?" is standard modern English, while "usedn\'t you?" is acceptable in formal British usage.', 'Cambridge B2'),
  q('ut_b2_7', 'B2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Analyze: "I am used to getting up early" vs "I got used to getting up early". What is the aspectual difference?',
    ['No difference.', '"Am used to" describes an existing state of familiarity; "got used to" describes the past accomplishment of becoming familiar.', '"Got used to" means I am still struggling.', '"Am used to" is only for past actions.'], 1,
    '"Am used to" is a stative condition; "got used to" focuses on the completed transition of becoming adapted.', 'Oxford B2'),
  q('ut_b2_8', 'B2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "New teachers often take several weeks to ______ the noise of energetic classrooms."',
    ['use to', 'get used to', 'be used to', 'used to'], 1,
    '"Take time to get used to" indicates the transition of adapting to an environment.', 'British Council B2'),
  q('ut_b2_9', 'B2', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate: "There used to be a dense forest here before the road construction began."',
    ['Correct - "there used to be" describes a past existential state', 'Incorrect - must say "there would be"'], 0,
    '"There used to be" is the correct grammatical structure for past states; "would" is invalid here.', 'test-english B2'),
  q('ut_b2_10', 'B2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error: "When she arrived in England, she wasn\'t used to drive on the left side."',
    ['When she arrived', 'she wasn\'t', 'used to drive (should be "used to driving")', 'on the left side'], 2,
    '"Wasn\'t used to" (past familiarity) governs a gerund: "used to driving".', 'Cambridge B2'),
  q('ut_b2_11', 'B2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Which sentence shows the correct negative form in everyday modern English?',
    ['He didn\'t use to complain so frequently.', 'He didn\'t used to complain so frequently.', 'He used not complain so frequently.', 'He wasn\'t use to complain so frequently.'], 0,
    'Standard modern English uses "didn\'t use to + base verb".', 'Oxford B2'),
  q('ut_b2_12', 'B2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete: "Don\'t worry about the shift work; you will soon get used to (sleep) ______ during the day."',
    ['sleep', 'sleeping', 'slept', 'to sleep'], 1,
    '"Get used to" takes a gerund: "sleeping".', 'British Council B2'),
  q('ut_b2_13', 'B2', 'multiple_choice', 'Multiple Choice', 'Memory',
    'Which modal can substitute for "used to" when describing past repeated actions?',
    ['might', 'should', 'would', 'could'], 2,
    '"Would" expresses repeated past actions/habits (e.g. "We would play outside for hours").', 'test-english B2'),
  q('ut_b2_14', 'B2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Why can we say "I used to be shy" but NOT "I would be shy"?',
    ['Because "shy" is a noun.', 'Because "be" is a stative verb describing a state, not a repeated action.', 'Because "would" requires a third-person pronoun.', 'Because "used to" is more modern.'], 1,
    '"Would" cannot describe states of being, feelings, or static conditions.', 'Cambridge B2'),
  q('ut_b2_15', 'B2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete the sentence: "As a senior surgeon, Dr. Sok is thoroughly used to ______ under immense stress."',
    ['operate', 'operating', 'operated', 'to operate'], 1,
    '"Is used to" takes a gerund: "operating".', 'Oxford B2')
);

// C1: 10 Questions
usedToQuestions.push(
  q('ut_c1_1', 'C1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'In formal rhetoric, analyze: "Used he to attend the annual symposium?"',
    ['It is completely ungrammatical.', 'It is an archaic/formal British inverted question structure without the auxiliary "did".', 'It is an imperative structure.', 'It is a passive inversion.'], 1,
    'Historically and in highly formal British registers, "used to" could invert directly with the subject without auxiliary "do/did".', 'Cambridge C1'),
  q('ut_c1_2', 'C1', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Contrast the nuance: "He used to write essays" vs "He was in the habit of writing essays" vs "He would write essays".',
    ['"Used to" suggests past fact/contrast with present; "would" evokes nostalgic or characteristic repetition; "in the habit of" emphasizes deliberate routine.', 'All three are semantically indistinguishable.', '"Would" can describe discontinued states.', '"Used to" cannot take an adverb.'], 0,
    '"Used to" focuses on temporal discontinuity with the present, while "would" introduces a narrative, nostalgic coloring to repeated activities.', 'Oxford C1'),
  q('ut_c1_3', 'C1', 'checking_error', 'Checking Error', 'Explaining',
    'Find the error in: "The microchip was used to calculating cryptographic hashes before the upgrade."',
    ['The microchip', 'was used to calculating (should be "was used to calculate")', 'cryptographic hashes', 'before the upgrade'], 1,
    'Passive voice of "use" demands an infinitive of purpose: "was used to calculate", not a gerund.', 'British Council C1'),
  q('ut_c1_4', 'C1', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete: "Having immigrated to Canada, he found (get) ______ used to the harsh sub-zero temperatures a grueling ordeal."',
    ['get', 'getting', 'got', 'to get'], 1,
    'The gerund "getting used to..." functions as the direct object of the verb "found": "found getting used to... grueling".', 'Cambridge C1'),
  q('ut_c1_5', 'C1', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Analyze the double-modal regionalism "used to could" in colloquial dialects (e.g., Southern American English):',
    ['It is recognized in standard academic English.', 'It is a non-standard double modal equivalent to standard "used to be able to".', 'It is a passive gerund.', 'It is the future conditional of used to.'], 1,
    '"Used to could" is a dialectal double modal meaning "used to be able to", which must be avoided in standard academic English.', 'Oxford C1'),
  q('ut_c1_6', 'C1', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete: "The veteran diplomat was not easily perturbed, being well used to ______ with hostility."',
    ['meet', 'meeting', 'being met', 'having met'], 2,
    'The passive gerund "being met" matches the context of receiving hostile treatment.', 'British Council C1'),
  q('ut_c1_7', 'C1', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate: "He used not to be so irritable before the restructuring."',
    ['Correct - formal British negative with stative verb "be"', 'Incorrect - "used not" cannot precede "be"'], 0,
    '"Used not to be" is a well-formed formal structure expressing a past negative state.', 'test-english C1'),
  q('ut_c1_8', 'C1', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'What is the syntactic category of "used" in "I am used to the noise"?',
    ['A finite past tense verb', 'A participial adjective meaning "habituated/accustomed"', 'An auxiliary modal', 'A passive voice participle of "use"'], 1,
    'In "be used to", "used" functions as a predicate adjective meaning accustomed/habituated, followed by the preposition "to".', 'Cambridge C1'),
  q('ut_c1_9', 'C1', 'checking_error', 'Checking Error', 'Explaining',
    'Identify the error: "She has been getting used to work in the intensive care unit."',
    ['She has been', 'getting used to work (should be "to working")', 'in the', 'intensive care unit'], 1,
    '"Getting used to" requires the gerund "working".', 'British Council C1'),
  q('ut_c1_10', 'C1', 'multiple_choice', 'Multiple Choice', 'Producing',
    'Complete the sentence: "Archaeological remnants suggest that obsidian blades ______ perform surgical incisions."',
    ['used to', 'were used to', 'were used to being', 'had been used to'], 1,
    'Passive voice of purpose: "were used to perform".', 'Oxford C1')
);

// C2: 10 Questions
usedToQuestions.push(
  q('ut_c2_1', 'C2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'Examine the grammaticalization of "used to" /juːst tuː/ from the lexical verb "use" /juːz/:',
    ['It underwent phonological devoicing (/z/ -> /s/) and semantic bleaching to become a defective marginal modal.', 'It retained full lexical transitive verb properties.', 'It is an active progressive participle.', 'It developed from the noun "usage".'], 0,
    'Historical linguistics demonstrates that "used to" underwent phonological assimilation (devoicing to /s/) and semantic bleaching, developing into a marginal modal of past habitual aspect.', 'Cambridge C2'),
  q('ut_c2_2', 'C2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Identify the sentence where the auxiliary contraction "usedn\'t" is used with historical precision:',
    ['He usedn\'t to be so cynical about administrative directives.', 'He usedn\'t be so cynical.', 'He usedn\'t to being cynical.', 'He didn\'t usedn\'t be cynical.'], 0,
    '"Usedn\'t to + base verb" represents the traditional contracted negative marginal modal form in high-register British English.', 'Oxford C2'),
  q('ut_c2_3', 'C2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the register inconsistency: "In 18th-century treatises, the term would denote legal sovereignty, but now it doesn\'t."',
    ['In 18th-century treatises', 'would denote (should be "used to denote" because "denote" is stative)', 'legal sovereignty', 'now it doesn\'t'], 1,
    '"Denote" is a stative verb representing an ongoing conceptual meaning, rendering "would" illicit; "used to denote" is required.', 'British Council C2'),
  q('ut_c2_4', 'C2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'In literary narrative, how does the alternating use of "used to" and "would" function strategically?',
    ['"Used to" establishes the general temporal habitus/setting, while subsequent "would" clauses iterate specific, evocative habitual vignettes.', '"Used to" is used for dialogue, "would" for narrative prose.', 'They cannot be combined in the same paragraph.', '"Would" indicates uncertainty.'], 0,
    'Standard literary convention uses "used to" to frame the overarching past background, followed by "would" to depict lyrical, repeated vignettes within that frame.', 'Cambridge C2'),
  q('ut_c2_5', 'C2', 'fill_blank', 'Fill in the Blank', 'Producing',
    'Complete: "The reclusive author was habituated to isolation, ______ accustomed to the solitude of his highland retreat."',
    ['become', 'being', 'having', 'to be'], 1,
    'The participial phrase "being accustomed to..." parallels "habituated to isolation".', 'Oxford C2'),
  q('ut_c2_6', 'C2', 'correct_incorrect', 'Correct or Incorrect', 'Understanding',
    'Evaluate the syntactic validity of: "Never used she to question the council\'s verdict."',
    ['Valid formal literary negative inversion', 'Invalid double inversion'], 0,
    'Fronting negative adverb "Never" triggers subject-auxiliary inversion with marginal modal "used": "Never used she to question".', 'British Council C2'),
  q('ut_c2_7', 'C2', 'multiple_choice', 'Multiple Choice', 'Explaining',
    'Contrast: "Water is used to irrigate crops" vs "Farmers are used to irrigating crops". What distinguishes the prepositional phrase in sentence 2 from the infinitive in sentence 1?',
    ['Sentence 1 features a to-infinitive clause of purpose; sentence 2 features a preposition "to" taking a non-finite gerundial noun phrase complement.', 'Sentence 1 contains a gerund.', 'Sentence 2 is passive voice.', 'Both are identical complement clauses.'], 0,
    'Sentence 1 has the verb "use" + to-infinitive of purpose. Sentence 2 has the adjective "used" + preposition "to" governing a gerund noun phrase complement.', 'Cambridge C2'),
  q('ut_c2_8', 'C2', 'checking_error', 'Checking Error', 'Explaining',
    'Find the flaw in: "He is used to withstand extreme climatic variance."',
    ['He is', 'used to withstand (should be "used to withstanding")', 'extreme', 'climatic variance'], 1,
    'The predicate adjective "used to" (accustomed) requires the gerund complement "withstanding".', 'Oxford C2'),
  q('ut_c2_9', 'C2', 'open_bracket', 'Open Bracket', 'Producing',
    'Complete the sentence: "Long exposure to radiation rendered the sensors useless, as they were not designed to be used to (measure) ______ such intense flux."',
    ['measure', 'measuring', 'measured', 'be measured'], 0,
    'Here "be used to" is passive voice of "use" with purpose infinitive "to measure" (NOT habitual familiarity).', 'British Council C2'),
  q('ut_c2_10', 'C2', 'multiple_choice', 'Multiple Choice', 'Understanding',
    'What accounts for the unacceptability of: *"He uses to read the Times every morning"?',
    ['The marginal modal "used to" has no present tense paradigm; present habitual aspect is morphosyntactically encoded by the simple present tense.', '"Times" should be italicized.', '"Read" cannot follow "uses".', '"Uses" is only transitive.'], 0,
    'The defective marginal modal "used to" has undergone total historical syncope of its present tense paradigm, necessitating the simple present with adverbs of frequency.', 'Cambridge C2')
);

console.log(`Generated ${usedToQuestions.length} questions for Used to / Be, Get used to.`);


// =========================================================================
// 3. INSERT INTO js/grammar-tests-data.js
// =========================================================================
console.log('Inserting into js/grammar-tests-data.js...');
let testsContent = fs.readFileSync('js/grammar-tests-data.js', 'utf8');

// Check if already present
if (!testsContent.includes('"gerund_infinitive":')) {
  const insertMarker = '    }\n  ]\n};';
  const newTestsChunk = `    }
  ],
  "gerund_infinitive": ${JSON.stringify(gerundInfinitiveQuestions, null, 4)},
  "used_to": ${JSON.stringify(usedToQuestions, null, 4)}
};`;

  if (testsContent.includes(insertMarker)) {
    testsContent = testsContent.replace(insertMarker, newTestsChunk);
    fs.writeFileSync('js/grammar-tests-data.js', testsContent, 'utf8');
    console.log('✓ Successfully inserted 160 questions into js/grammar-tests-data.js');
  } else {
    console.error('Could not find insert marker in js/grammar-tests-data.js');
  }
} else {
  console.log('Questions already present in js/grammar-tests-data.js');
}

// =========================================================================
// 4. INSERT INTO js/grammar-data.js
// =========================================================================
console.log('Inserting syllabus data into js/grammar-data.js...');
let grammarDataContent = fs.readFileSync('js/grammar-data.js', 'utf8');

const gerundInfinitiveMasterData = `
  // =========================================================================
  // MODULE 6: GERUND & INFINITIVE
  // =========================================================================
  gerund_infinitive: {
    id: "gerund_infinitive",
    category: "gerund_infinitive",
    catTitle: "Gerund & Infinitive",
    catTitleKh: "កិរិយាសព្ទ Gerund និង Infinitive",
    title: "Gerund & Infinitive (កិរិយាសព្ទ Gerund និង Infinitive)",
    subtitle: "Gerund (V-ing), To-Infinitive, Bare Infinitive & Verbs with Meaning Shifts",
    badge: "6. Gerund & Infinitive",
    hwSummary: {
      title: "Gerund & Infinitive: Master Visual Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: \`
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Hun Sen Svay Thom</div>
          <div class="hw-title">★ GERUND (-ing) vs INFINITIVE (to + V / Bare V)</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. GERUND (V-ing) = VERB AS NOUN</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">As Subject:</span> <em><b>Learning</b> English opens global doors.</em></li>
                <li><span class="hw-hl cyan">As Object:</span> <em>I enjoy <b>reading</b> and <b>coding</b>.</em></li>
                <li><span class="hw-hl lime">After Preposition:</span> <em>Good at <b>speaking</b>; without <b>asking</b>.</em></li>
                <li><span class="hw-hl pink">Special Expressions:</span> <em>can't help, look forward to, it's no use, feel like, spend time + V-ing</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. TO-INFINITIVE (to + Base Verb)</div>
              <ul class="hw-list">
                <li><span class="hw-hl orange">Purpose (Why?):</span> <em>He came to school <b>to learn</b>.</em></li>
                <li><span class="hw-hl cyan">After Adjectives:</span> <em>It is easy <b>to understand</b>.</em></li>
                <li><span class="hw-hl lime">After Specific Verbs:</span> <em>want, decide, hope, plan, promise, agree, refuse, afford, manage + to V</em></li>
                <li><span class="hw-hl yellow">Bare Infinitive (No 'to'):</span> <em>Modals (can/must), Let &amp; Make: She made me <b>laugh</b>.</em></li>
              </ul>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">★ THE 5 CRITICAL VERBS WITH MEANING SHIFTS</div>
            <div class="hw-flow" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:10px; font-size:0.85rem;">
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>REMEMBER:</b><br>
                ➔ <em>Remember to lock</em> (Duty: Don't forget to do it!)<br>
                ➔ <em>Remember locking</em> (Memory: I recall doing it in past)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>STOP:</b><br>
                ➔ <em>Stopped to smoke</em> (Paused in order to smoke)<br>
                ➔ <em>Stopped smoking</em> (Quit the habit completely)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>FORGET:</b><br>
                ➔ <em>Forgot to bring</em> (Failed to do an obligation)<br>
                ➔ <em>Forgot meeting</em> (Lost past memory of event)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>TRY:</b><br>
                ➔ <em>Try to lift</em> (Make great effort at hard task)<br>
                ➔ <em>Try restarting</em> (Experiment with a method/solution)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>REGRET:</b><br>
                ➔ <em>Regret to inform</em> (Formal polite bad news)<br>
                ➔ <em>Regret saying</em> (Sorry about a past mistake)
              </div>
            </div>
          </div>
        </div>
      \`
    },
    meaning: "A Gerund is the -ing form of a verb that functions as a noun (Subject, Direct Object, or Prepositional Object). An Infinitive is the base form of a verb, typically preceded by 'to' (To-Infinitive) or without 'to' (Bare Infinitive). In Khmer, Gerund គឺជាកិរិយាសព្ទបន្ថែម -ing ដែលបំពេញមុខងារជានាម (កិរិយានាម) ដូចជាធ្វើជាប្រធាន កម្មបទ ឬបំពេញន័យឱ្យធៀបសព្វ។ រីឯ Infinitive គឺជាកិរិយាសព្ទដើម ដែលអាចមាន 'to' (To-infinitive) ឬគ្មាន 'to' (Bare infinitive) សម្រាប់បញ្ជាក់ពីគោលបំណង ឬប្រើជាមួយកិរិយាសព្ទជំនួយ។",
    formation: [
      { rule: "1. Gerund Form", detail: "Base Verb + -ing (e.g. reading, swimming, writing). Negative: not + V-ing (not knowing)." },
      { rule: "2. To-Infinitive Form", detail: "to + Base Verb (e.g. to read, to swim). Negative: not + to + Base Verb (not to disturb)." },
      { rule: "3. Bare Infinitive Form", detail: "Base Verb without 'to' (e.g. can speak, let him go, make her smile)." },
      { rule: "4. Perfect & Passive Forms", detail: "Passive Gerund: being + V3 (being praised); Passive Infinitive: to be + V3 (to be invited); Perfect Gerund: having + V3 (having finished); Perfect Infinitive: to have + V3 (to have seen)." }
    ],
    use: "Gerunds and Infinitives allow verbs to act as subjects, objects, complements, adjectives, or adverbs, making English expressions flexible and precise in academic writing and conversation.",
    kinds: [
      { name: "1. Gerund as Subject & Complement", desc: "Functions as the core noun topic of a sentence or subject complement.", example: "Learning English is exciting. / My passion is teaching." },
      { name: "2. Gerund after Prepositions", desc: "Any verb following a preposition (in, on, at, about, with, without, before, after) must be a Gerund.", example: "She passed the exam by studying diligently. / He left without saying goodbye." },
      { name: "3. Verbs Followed Exclusively by Gerund", desc: "admit, avoid, consider, deny, enjoy, finish, imagine, keep, mind, postpone, practice, recommend, suggest, risk.", example: "He avoided answering the awkward question. / She suggested visiting Angkor Wat." },
      { name: "4. To-Infinitive of Purpose & after Adjectives", desc: "Explains why an action happens or follows emotional/evaluative adjectives.", example: "I went to town to buy textbooks. / It is vital to practice daily. / I was glad to meet Mr. Ol." },
      { name: "5. Verbs Followed Exclusively by To-Infinitive", desc: "agree, afford, arrange, decide, demand, hope, learn, manage, offer, plan, pretend, promise, refuse, threaten, volunteer, want.", example: "She decided to study computer science. / They refused to give up." },
      { name: "6. Bare Infinitive (Modals, Make, Let, Had better)", desc: "Verbs without 'to' after modal verbs (can, could, will, must), causatives (make, let), and idioms (had better, would rather).", example: "You must complete your homework. / She made him apologize. / You had better rest." },
      { name: "7. Verbs with Meaning Shifts", desc: "Verbs that take both Gerund and Infinitive with distinct changes in meaning (remember, forget, stop, regret, try, mean).", example: "Remember to call mom (duty) vs Remember calling mom (memory)." }
    ],
    exceptionalRules: [
      "Trap 1: 'To' as a Preposition vs 'To' of Infinitive: In phrases like 'look forward to', 'be used to', 'get used to', 'object to', and 'confess to', the word 'to' is a preposition, requiring a GERUND (-ing), NOT a base verb! Example: 'I look forward to meeting you' ✅ (NOT 'to meet' ❌).",
      "Trap 2: Passive Causative 'Make': Active 'make' takes a bare infinitive ('The teacher made us rewrite the essay'). But in the passive voice, it MUST take a to-infinitive: 'We were made TO rewrite the essay' ✅.",
      "Trap 3: Verbs with NO change in meaning: 'Begin', 'start', 'continue', 'bother', 'intend' can take either a gerund or to-infinitive with identical meaning: 'It started to rain' = 'It started raining'.",
      "Trap 4: 'Need + V-ing' (Passive Sense): When followed by a gerund, 'need' conveys a passive meaning: 'The car needs washing' = 'The car needs to be washed'."
    ],
    examples: [
      { en: "Gerund as Subject: Mastering English grammar requires continuous dedication and active practice.", kh: "កិរិយានាមធ្វើជាប្រធាន៖ ការស្ទាត់ជំនាញវេយ្យាករណ៍អង់គ្លេសទាមទារការលះបង់បន្តបន្ទាប់ និងការអនុវត្តយ៉ាងសកម្ម។", note: "Gerund 'Mastering' acts as the subject of the main verb 'requires'." },
      { en: "Preposition + Gerund: Mr. Ol succeeded in designing interactive digital quizzes for his high school students.", kh: "ធៀបសព្វ + Gerund៖ លោកគ្រូ អ៊ូច អុល ទទួលបានជោគជ័យក្នុងការបង្កើតកម្រងសំណួរឌីជីថលអន្តរកម្មសម្រាប់សិស្សវិទ្យាល័យរបស់គាត់។", note: "After preposition 'in', verb 'design' must be the gerund 'designing'." },
      { en: "To-Infinitive of Purpose: Students wake up early to revise their lesson sheets before the national BacII examination.", kh: "To-Infinitive បញ្ជាក់គោលបំណង៖ សិស្សានុសិស្សក្រោកពីព្រលឹមដើម្បីរំលឹកសន្លឹកមេរៀនរបស់ពួកគេមុនពេលប្រឡងបាក់ឌុបថ្នាក់ជាតិ។", note: "'to revise' expresses the purpose of waking up early." },
      { en: "Meaning Shift: He stopped to answer his teacher's question, but he has stopped using his phone during class entirely.", kh: "ការប្រែប្រួលអត្ថន័យ៖ គាត់បានឈប់បន្តិចដើម្បីឆ្លើយសំណួររបស់គ្រូ ប៉ុន្តែគាត់បានឈប់ប្រើប្រាស់ទូរស័ព្ទក្នុងម៉ោងរៀនទាំងស្រុងហើយ។", note: "'stopped to answer' = paused in order to answer; 'stopped using' = quit the habit completely." }
    ]
  },

  // =========================================================================
  // MODULE 7: USED TO / BE, GET USED TO
  // =========================================================================
  used_to: {
    id: "used_to",
    category: "used_to",
    catTitle: "Used to / Be, Get used to",
    catTitleKh: "ទម្រង់ Used to, Be used to, Get used to",
    title: "Used to / Be, Get used to (ទម្រង់ Used to / Be, Get used to)",
    subtitle: "Past Habits vs. Being Accustomed to vs. The Process of Getting Familiar",
    badge: "7. Used to / Be, Get used to",
    hwSummary: {
      title: "Used to / Be & Get used to: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: \`
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Hun Sen Svay Thom</div>
          <div class="hw-title">★ THE TRIPLE DISTINCTION: USED TO vs BE USED TO vs GET USED TO</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. USED TO + BASE VERB (Past Habit/State)</div>
              <div class="hw-formula">(+) S + used to + V1</div>
              <div class="hw-formula">(-) S + didn't use to + V1</div>
              <div class="hw-formula">(?) Did + S + use to + V1?</div>
              <p>➔ <em>I <b>used to live</b> in Siem Reap.</em> (True in past; NOT true now! ធ្លាប់ធ្វើពីមុន តែឥឡូវលែង)</p>
              <div class="hw-tip">⚠️ Danger Trap: Never use "I use to..." for present habits! Use "I usually..." ✅</div>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. BE USED TO + V-ing / NOUN (Accustomed)</div>
              <div class="hw-formula">S + [am/is/are/was/were] + used to + [V-ing / Noun]</div>
              <p>➔ <em>She is <b>used to waking up</b> at 5 AM.</em></p>
              <p>➔ <em>I am <b>used to the tropical heat</b>.</em></p>
              <p>➔ Meaning: Normal, familiar, comfortable, not strange! (ធ្លាប់ស៊ាំនឹង... មិនចម្លែក ឬមិនពិបាកឡើយ)</p>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:10px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">3. GET USED TO + V-ing / NOUN (Adaptation)</div>
              <div class="hw-formula">S + [get/gets/got/will get] + used to + [V-ing / Noun]</div>
              <p>➔ <em>He is <b>getting used to driving</b> on the left.</em></p>
              <p>➔ <em>You will soon <b>get used to the new classroom</b>.</em></p>
              <p>➔ Meaning: The ongoing process of becoming familiar over time. (កំពុងស៊ាំទៅនឹង... ចាប់ផ្តើមសម្របខ្លួន)</p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">4. PASSIVE VOICE OF "USE" (Watch Out!)</div>
              <div class="hw-formula">Subject + be + used + to + Base Verb</div>
              <p>➔ <em>Bamboo <b>is used to build</b> houses.</em></p>
              <p>➔ <em>Solar panels <b>are used to generate</b> power.</em></p>
              <p>➔ Meaning: Passive of verb 'use' = used for the purpose of, NOT a habit!</p>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">★ "USED TO" vs "WOULD" FOR PAST HABITS</div>
            <ul class="hw-list" style="font-size:0.85rem;">
              <li>✅ <b>Repeated Actions:</b> Both allowed! ➔ <em>My grandfather <b>used to / would</b> tell us folklore every night.</em></li>
              <li>❌ <b>Past States (be, have, live, know, like):</b> ONLY "used to" is correct! ➔ <em>He <b>used to be</b> thin.</em> (NOT <em>He would be thin</em> ❌)</li>
              <li>❌ <b>Negative &amp; Questions:</b> "Used to" with "did" is preferred ➔ <em>Did you <b>use to</b> ride a bike?</em></li>
            </ul>
          </div>
        </div>
      \`
    },
    meaning: "These three structures share similar words but communicate entirely distinct temporal realities and psychological states. 'Used to + infinitive' refers exclusively to terminated past habits or past states that no longer exist. 'Be used to + V-ing/noun' means being accustomed or habituated to something so that it feels normal and unchallenging. 'Get used to + V-ing/noun' signifies the dynamic transitional process of adapting to something new. In Khmer, 'Used to + V' សម្គាល់ទម្លាប់ ឬស្ថានភាពពីអតីតកាលដែលបានបញ្ចប់ (ធ្លាប់... តែឥឡូវលែង)។ 'Be used to + V-ing' សម្គាល់ការធ្លាប់ស៊ាំ ឬស៊ាំនឹងអ្វីមួយ (មានអារម្មណ៍ធម្មតា មិនលំបាក)។ រីឯ 'Get used to + V-ing' សម្គាល់ដំណើរការនៃការសម្របខ្លួន ឬកំពុងស៊ាំទៅនឹងស្ថានភាពថ្មី។",
    formation: [
      { rule: "1. Used to (Past Habit/State)", detail: "Positive: S + used to + Base Verb; Negative: S + didn't use to + Base Verb; Question: Did + S + use to + Base Verb?" },
      { rule: "2. Be used to (Present/Past Familiarity)", detail: "S + [am/is/are/was/were] + used to + [V-ing / Noun / Pronoun]. Negative: S + am/is/are not + used to + [V-ing / N]." },
      { rule: "3. Get used to (Process of Adaptation)", detail: "S + [get/gets/got/will get/have got] + used to + [V-ing / Noun / Pronoun]." },
      { rule: "4. Passive 'Be used to + Base Verb'", detail: "Subject (Thing) + am/is/are/was/were + used + to + Base Verb (purpose/function)." }
    ],
    use: "Crucial for discussing personal background, historical changes, cultural adaptation (culture shock), overcoming difficulties in new environments, and academic BacII/IELTS comparative descriptions.",
    kinds: [
      { name: "1. Used to + Base Verb (Past Habits)", desc: "Repeated actions performed frequently in the past that are discontinued today.", example: "I used to play marbles with my village friends after school." },
      { name: "2. Used to + Base Verb (Past States)", desc: "Past situations, occupations, residences, or static truths that have changed.", example: "There used to be a dense forest where the school campus now stands. / He used to be very shy." },
      { name: "3. Be used to + V-ing/Noun (Present Comfort)", desc: "Being thoroughly accustomed to an environment, climate, noise, or routine.", example: "Siem Reap residents are used to welcoming tourists from all continents." },
      { name: "4. Be used to + V-ing/Noun (Past Comfort)", desc: "Being accustomed to a condition during an earlier epoch in life.", example: "When he lived in England, he was used to enduring sub-zero temperatures." },
      { name: "5. Get used to + V-ing/Noun (Adaptation)", desc: "The ongoing effort or journey of familiarization with novel conditions.", example: "Grade 10 students quickly get used to solving standardized Bloom's Taxonomy tests." },
      { name: "6. Passive 'Be used to' (Tool/Object Function)", desc: "Describes what a device, material, or tool is utilized for (takes Base Verb).", example: "Microphones are used to amplify the speaker's voice in the assembly hall." },
      { name: "7. Used to vs Would", desc: "'Would' is strictly for repeated actions in narrative prose; 'used to' works for both actions and states.", example: "We would go fishing on Sundays (action) ✅ / He used to live in Battambang (state) ✅." }
    ],
    exceptionalRules: [
      "Trap 1: Dropping the 'd' in Questions & Negatives: Because 'did' carries the past tense, write 'use to', NOT 'used to': 'Did you USE to walk?' ✅ (NOT 'Did you used to' ❌); 'I didn't USE to like tea' ✅ (NOT 'didn't used to' ❌).",
      "Trap 2: 'To' is a Preposition in 'Be/Get used to': Because 'to' is a preposition, it must be followed by a noun or GERUND (-ing): 'I am used to LIVING alone' ✅ (NOT 'used to live' ❌).",
      "Trap 3: Present Habit Error: English does NOT have a present tense 'use to'! To express current habits, use 'usually', 'normally', or the Present Simple: 'I usually get up at 6:00' ✅ (NEVER 'I use to get up at 6:00' ❌).",
      "Trap 4: Stative Verbs with 'Would': Never replace 'used to' with 'would' when the verb is stative: 'She used to have long hair' ✅ (NOT 'She would have long hair' ❌)."
    ],
    examples: [
      { en: "Past Habit: In the 1990s, students used to write all assignments by hand before computers became widespread.", kh: "ទម្លាប់ពីអតីតកាល៖ ក្នុងទសវត្សរ៍ឆ្នាំ ១៩៩០ សិស្សានុសិស្សធ្លាប់សរសេរកិច្ចការទាំងអស់ដោយដៃ មុនពេលកុំព្យូទ័រត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយ។", note: "'used to write' describes a discontinued past practice." },
      { en: "Past State: There used to be a traditional wooden bridge connecting the two riverbanks in Siem Reap.", kh: "ស្ថានភាពពីអតីតកាល៖ ពីមុនធ្លាប់មានស្ពានឈើបុរាណមួយតភ្ជាប់ត្រើយទាំងសងខាងនៃដងស្ទឹងសៀមរាប។", note: "'used to be' denotes a past existential reality that is no longer there." },
      { en: "Present Familiarity: Having taught for over fifteen years, Mr. Ouch Ol is used to explaining intricate grammar rules with ease.", kh: "ការធ្លាប់ស៊ាំបច្ចុប្បន្ន៖ ដោយបានបង្រៀនអស់រយៈពេលជាង ១៥ ឆ្នាំមកហើយ លោកគ្រូ អ៊ូច អុល បានស៊ាំទៅនឹងការពន្យល់ក្បួនវេយ្យាករណ៍ដ៏ស្មុគស្មាញយ៉ាងងាយស្រួល។", note: "'is used to explaining' expresses complete comfort and expertise (be used to + V-ing)." },
      { en: "Adaptation Process: Moving from junior high to high school can be daunting, but pupils soon get used to studying specialized subjects.", kh: "ដំណើរការសម្របខ្លួន៖ ការផ្លាស់ប្តូរពីអនុវិទ្យាល័យមកវិទ្យាល័យអាចជាការពិបាកខ្លះ ប៉ុន្តែសិស្សានុសិស្សឆាប់ស៊ាំនឹងការរៀនមុខវិជ្ជាឯកទេស។", note: "'get used to studying' emphasizes the dynamic transition of adaptation." }
    ]
  }
`;

if (!grammarDataContent.includes('gerund_infinitive:')) {
  const insertMarker = '    examples: [\n      { en: "Simple: Mr. Ol designs engaging digital English curricula.", kh: "ល្បះទោល៖ លោកគ្រូ អ៊ូច អុល បង្កើតកម្មវិធីសិក្សាភាសាអង់គ្លេសឌីជីថលដ៏ទាក់ទាញ។", note: "1 Independent Clause (1 Subject + 1 Transitive Verb + 1 Direct Object)" },\n      { en: "Compound: English opens doors to world knowledge, and technology accelerates learning.", kh: "ល្បះផ្សំ៖ ភាសាអង់គ្លេសបើកទ្វារទៅកាន់ចំណេះដឹងពិភពលោក ហើយបច្ចេកវិទ្យាជួយពន្លឿនការរៀនសូត្រ។", note: "2 Independent Clauses joined by comma + \'and\' (FANBOYS)" },\n      { en: "Complex: Although grammar demands patience, consistent practice guarantees fluency.", kh: "ល្បះលាយ៖ ទោះបីជាវេយ្យាករណ៍ទាមទារការអត់ធ្មត់ក៏ដោយ ការអនុវត្តជាប្រចាំធានានូវភាពស្ទាត់ជំនាញ។", note: "1 Dependent Clause (Although...) + 1 Independent Clause" },\n      { en: "Compound-Complex: Because the national exams are approaching, students are practicing diligently, and teachers are offering support.", kh: "ល្បះផ្សំ-លាយ៖ ដោយសារការប្រឡងថ្នាក់ជាតិកាន់តែកៀក សិស្សានុសិស្សកំពុងខិតខំប្រឹងប្រែង ហើយលោកគ្រូអ្នកគ្រូកំពុងផ្តល់ការគាំទ្រ។", note: "1 Dependent Clause + 2 Independent Clauses joined by \'and\'" }\n    ]\n  }\n};';

  const replacement = `    examples: [
      { en: "Simple: Mr. Ol designs engaging digital English curricula.", kh: "ល្បះទោល៖ លោកគ្រូ អ៊ូច អុល បង្កើតកម្មវិធីសិក្សាភាសាអង់គ្លេសឌីជីថលដ៏ទាក់ទាញ។", note: "1 Independent Clause (1 Subject + 1 Transitive Verb + 1 Direct Object)" },
      { en: "Compound: English opens doors to world knowledge, and technology accelerates learning.", kh: "ល្បះផ្សំ៖ ភាសាអង់គ្លេសបើកទ្វារទៅកាន់ចំណេះដឹងពិភពលោក ហើយបច្ចេកវិទ្យាជួយពន្លឿនការរៀនសូត្រ។", note: "2 Independent Clauses joined by comma + 'and' (FANBOYS)" },
      { en: "Complex: Although grammar demands patience, consistent practice guarantees fluency.", kh: "ល្បះលាយ៖ ទោះបីជាវេយ្យាករណ៍ទាមទារការអត់ធ្មត់ក៏ដោយ ការអនុវត្តជាប្រចាំធានានូវភាពស្ទាត់ជំនាញ។", note: "1 Dependent Clause (Although...) + 1 Independent Clause" },
      { en: "Compound-Complex: Because the national exams are approaching, students are practicing diligently, and teachers are offering support.", kh: "ល្បះផ្សំ-លាយ៖ ដោយសារការប្រឡងថ្នាក់ជាតិកាន់តែកៀក សិស្សានុសិស្សកំពុងខិតខំប្រឹងប្រែង ហើយលោកគ្រូអ្នកគ្រូកំពុងផ្តល់ការគាំទ្រ។", note: "1 Dependent Clause + 2 Independent Clauses joined by 'and'" }
    ]
  },
${gerundInfinitiveMasterData}
};`;

  if (grammarDataContent.includes(insertMarker)) {
    grammarDataContent = grammarDataContent.replace(insertMarker, replacement);
    console.log('✓ Inserted gerund_infinitive and used_to into GRAMMAR_MASTER_DATA');
  } else {
    console.error('Could not find sentence_structures end in js/grammar-data.js');
  }

  // Also update allTopics array in js/grammar-data.js
  const allTopicsOld = '    { key: "sentence_structures", label: "Sentence Structures & Fragments" }\n  ];';
  const allTopicsNew = `    { key: "sentence_structures", label: "Sentence Structures & Fragments" },
    { key: "gerund_infinitive", label: "Gerund & Infinitive" },
    { key: "used_to", label: "Used to / Be, Get used to" }
  ];`;

  if (grammarDataContent.includes(allTopicsOld)) {
    grammarDataContent = grammarDataContent.replace(allTopicsOld, allTopicsNew);
    console.log('✓ Updated allTopics array in js/grammar-data.js');
  }

  fs.writeFileSync('js/grammar-data.js', grammarDataContent, 'utf8');
} else {
  console.log('Modules 6 & 7 already present in js/grammar-data.js');
}

// =========================================================================
// 5. UPDATE js/grammar-page.js TOPIC_SEQUENCE
// =========================================================================
console.log('Updating js/grammar-page.js TOPIC_SEQUENCE...');
let pageJsContent = fs.readFileSync('js/grammar-page.js', 'utf8');
const oldSeq = "    'sentence_structures'\n  ];";
const newSeq = "    'sentence_structures',\n    'gerund_infinitive',\n    'used_to'\n  ];";
if (pageJsContent.includes(oldSeq)) {
  pageJsContent = pageJsContent.replace(oldSeq, newSeq);
  fs.writeFileSync('js/grammar-page.js', pageJsContent, 'utf8');
  console.log('✓ Updated TOPIC_SEQUENCE in js/grammar-page.js');
}

// =========================================================================
// 6. UPDATE scripts/generate_nav_grammar.js & REGENERATE NAVIGATION
// =========================================================================
console.log('Updating scripts/generate_nav_grammar.js...');
let navGenContent = fs.readFileSync('scripts/generate_nav_grammar.js', 'utf8');

const oldModulesEnd = `  {
    num: 5,
    id: 'sentence_structures',
    defaultTopic: 'sentence_structures',
    title: 'Sentence Structures & Fragments',
    titleKh: 'Simple/Compound/Complex & Fixes',
    badge: 'Patterns',
    items: [
      {
        topic: 'sentence_structures',
        icon: '🏗️',
        title: 'Sentence Structures',
        titleKh: 'ទម្រង់ប្រយោគ',
        desc: '5 Patterns, Compound, Complex & Fragments'
      }
    ]
  }
];`;

const newModulesEnd = `  {
    num: 5,
    id: 'sentence_structures',
    defaultTopic: 'sentence_structures',
    title: 'Sentence Structures & Fragments',
    titleKh: 'Simple/Compound/Complex & Fixes',
    badge: 'Patterns',
    items: [
      {
        topic: 'sentence_structures',
        icon: '🏗️',
        title: 'Sentence Structures',
        titleKh: 'ទម្រង់ប្រយោគ',
        desc: '5 Patterns, Compound, Complex & Fragments'
      }
    ]
  },
  {
    num: 6,
    id: 'gerund_infinitive',
    defaultTopic: 'gerund_infinitive',
    title: 'Gerund & Infinitive',
    titleKh: 'កិរិយាសព្ទ Gerund & Infinitive',
    badge: 'Verb Forms',
    items: [
      {
        topic: 'gerund_infinitive',
        icon: '🎯',
        title: 'Gerund & Infinitive',
        titleKh: 'Gerund & Infinitive',
        desc: 'V-ing, To-Infinitive, Bare Infinitive & Verbs with Meaning Shifts'
      }
    ]
  },
  {
    num: 7,
    id: 'used_to',
    defaultTopic: 'used_to',
    title: 'Used to / Be, Get used to',
    titleKh: 'ទម្រង់ Used to, Be & Get used to',
    badge: 'Habits',
    items: [
      {
        topic: 'used_to',
        icon: '⏳',
        title: 'Used to / Be, Get used to',
        titleKh: 'Used to, Be/Get used to',
        desc: 'Past Habits vs Accustomed to vs Process of Getting Familiar'
      }
    ]
  }
];`;

if (navGenContent.includes(oldModulesEnd)) {
  navGenContent = navGenContent.replace(oldModulesEnd, newModulesEnd);
  fs.writeFileSync('scripts/generate_nav_grammar.js', navGenContent, 'utf8');
  console.log('✓ Updated scripts/generate_nav_grammar.js with modules 6 & 7');
}

// Regenerate generated_grammar_menu.html
console.log('Regenerating scripts/generated_grammar_menu.html...');
require('./generate_nav_grammar.js');

// =========================================================================
// 7. APPLY REGENERATED NAVIGATION MENU TO ALL 6 HTML FILES
// =========================================================================
console.log('Applying updated 7-module navigation menu to HTML files...');
const generatedMenuHtml = fs.readFileSync('scripts/generated_grammar_menu.html', 'utf8');

const htmlFiles = ['index.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html'];
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const startTag = '<!-- Sub Menu 1: Grammar (5 Master Modules) -->';
  const startTag7 = '<!-- Sub Menu 1: Grammar (7 Master Modules) -->';
  const actualStartTag = content.includes(startTag) ? startTag : (content.includes(startTag7) ? startTag7 : null);
  const endTag = '<!-- Sub Menu 2: Vocabulary -->';

  if (actualStartTag && content.includes(endTag)) {
    const startIdx = content.indexOf(actualStartTag);
    const endIdx = content.indexOf(endTag);
    // Replace header tag to indicate 7 Master Modules
    let menuToInsert = generatedMenuHtml.replace('<!-- Sub Menu 1: Grammar (5 Master Modules) -->', '<!-- Sub Menu 1: Grammar (7 Master Modules) -->');
    content = content.substring(0, startIdx) + menuToInsert.trim() + '\n\n            ' + content.substring(endIdx);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✓ Updated navigation in ${file}`);
  } else {
    console.warn(`Could not find navigation tags in ${file}`);
  }
}

// Update grammar.html navbar Column 1
let grammarHtml = fs.readFileSync('grammar.html', 'utf8');
const col1Start = grammarHtml.indexOf('<!-- Column 1: Grammar Modules (Core Topics) -->');
const col2Start = grammarHtml.indexOf('<!-- Column 2: Grade 10 English Units (Ministry Curriculum) -->');
if (col1Start !== -1 && col2Start !== -1) {
  const listStartTag = '<div class="sub-grammar-list">';
  const lStart = generatedMenuHtml.indexOf(listStartTag);
  const innerList = generatedMenuHtml.substring(lStart + listStartTag.length, generatedMenuHtml.indexOf('</div>\n              </div>\n            </div>'));

  const newCol1 = `<!-- Column 1: Grammar Modules (Core Topics) -->
              <div class="dropdown-col">
                <div class="col-header">
                  <span class="col-title" data-i18n="nav_grammar_skills">វេយ្យាករណ៍អង់គ្លេស</span>
                  <span class="badge-mini">7 Modules</span>
                </div>
                
                <div class="sub-dropdown-grammar">
                  <div class="sub-grammar-list">
${innerList.trim()}
                  </div>
                </div>
              </div>\n\n              `;

  grammarHtml = grammarHtml.substring(0, col1Start) + newCol1 + grammarHtml.substring(col2Start);
  fs.writeFileSync('grammar.html', grammarHtml, 'utf8');
  console.log('✓ Updated grammar.html navigation to 7 Modules');
}

console.log('--- ALL TASKS FOR MODULES 6 & 7 COMPLETED SUCCESSFULLY ---');
