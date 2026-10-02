// scripts/q_helper.js
function q(id, level, type, typeLabel, skillTested, question, options, answer, explanation, sourceTip) {
  if (!options || options.length < 2) {
    throw new Error(`Question ${id} must have at least 2 options`);
  }
  if (answer < 0 || answer >= options.length) {
    throw new Error(`Question ${id} answer index ${answer} is out of bounds (options: ${options.length})`);
  }
  return {
    id,
    level,
    type, // 'multiple_choice', 'correct_incorrect', 'checking_error', 'fill_blank', 'open_bracket', 'sentence_unscramble', 'odd_one_out', 'matching', 'cloze'
    typeLabel,
    skillTested, // 'Memory', 'Understanding', 'Explaining', 'Producing'
    question,
    options,
    answer,
    explanation,
    sourceTip: sourceTip || 'British Council & test-english standard'
  };
}

module.exports = { q };
