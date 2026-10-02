// scripts/compile_all_master.js
// Compiles all 15 topics into js/grammar-tests-data.js (1,200 standard ELT questions)
const fs = require('fs');
const path = require('path');

const { getNouns } = require('./build_pos_tests');
const { getPronouns } = require('./gen_topics_2_to_5');
const { getVerbs } = require('./build_topics_3_to_5');
const { getAdverbs, getAdjectives } = require('./build_adverbs_adjectives');
const { getPrepositions } = require('./build_prep_conj_inter_art');
const { getConjunctions } = require('./build_conjunctions');
const { getInterjections } = require('./build_inter_art_tenses');
const { getArticles } = require('./build_articles_and_tenses');
const { getTensesPresent } = require('./build_tenses');
const { getTensesPast, getTensesFuture } = require('./build_past_future');
const { getVoice, getClauses, getSentenceStructures } = require('./build_voice_clauses_sentences');

const topics = {
  nouns: getNouns(),
  pronouns: getPronouns(),
  verbs: getVerbs(),
  adverbs: getAdverbs(),
  adjectives: getAdjectives(),
  prepositions: getPrepositions(),
  conjunctions: getConjunctions(),
  interjections: getInterjections(),
  articles: getArticles(),
  tenses_present: getTensesPresent(),
  tenses_past: getTensesPast(),
  tenses_future: getTensesFuture(),
  voice: getVoice(),
  clauses: getClauses(),
  sentence_structures: getSentenceStructures()
};

console.log('=== COMPILING AND VALIDATING 15 GRAMMAR TOPICS ===');
let totalQuestions = 0;

for (const [topicKey, list] of Object.entries(topics)) {
  if (!Array.isArray(list)) {
    throw new Error(`Topic ${topicKey} did not return an array`);
  }
  
  const counts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  const typeCounts = {};

  list.forEach((item, idx) => {
    if (!item.id || !item.level || !item.question || !Array.isArray(item.options) || typeof item.answer !== 'number') {
      throw new Error(`Topic ${topicKey} item at index ${idx} has invalid schema: ${JSON.stringify(item)}`);
    }
    if (item.answer < 0 || item.answer >= item.options.length) {
      throw new Error(`Topic ${topicKey} item ${item.id} answer index ${item.answer} is out of bounds`);
    }
    counts[item.level] = (counts[item.level] || 0) + 1;
    typeCounts[item.type] = (typeCounts[item.type] || 0) + 1;
  });

  const expected = { A1: 15, A2: 15, B1: 15, B2: 15, C1: 10, C2: 10 };
  for (const lvl of Object.keys(expected)) {
    if (counts[lvl] !== expected[lvl]) {
      throw new Error(`Topic ${topicKey} level ${lvl} has ${counts[lvl]} items, expected ${expected[lvl]}!`);
    }
  }

  if (list.length !== 80) {
    throw new Error(`Topic ${topicKey} has ${list.length} items, expected 80!`);
  }

  totalQuestions += list.length;
  console.log(`✓ Topic "${topicKey}": 80 items (A1:15, A2:15, B1:15, B2:15, C1:10, C2:10) | Types: ${Object.keys(typeCounts).length}`);
}

console.log(`\nTOTAL QUESTIONS VALIDATED: ${totalQuestions} / 1200 across all 15 topics.`);

const outputHeader = `// js/grammar-tests-data.js
// Standard ELT Question Bank (1,200 items across 15 topics: 15 A1, 15 A2, 15 B1, 15 B2, 10 C1, 10 C2 each)
// Formats: Multiple Choice, Correct/Incorrect, Checking Error, Matching, Fill Blank, Cloze, Open Bracket, Sentence Unscramble, Odd One Out, Error Correction
// Tested Skills: Memory, Understanding, Explaining, Producing
// Sources: British Council, test-english, Cambridge, Oxford, VOA, Bamboozle, Wordwall standards

(function() {
  const data = `;

const outputFooter = `;

  if (typeof window !== 'undefined') {
    window.GRAMMAR_TESTS_DATA = data;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }
})();
`;

const targetPath = path.resolve(__dirname, '../js/grammar-tests-data.js');
const fileContent = outputHeader + JSON.stringify(topics, null, 2) + outputFooter;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Successfully written to: ${targetPath} (${(fileContent.length / 1024).toFixed(1)} KB)`);
