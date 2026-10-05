const fs = require('fs');
const files = ['index.html', 'grammar.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html', 'cv.html'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasNouns = content.includes('data-grammar-topic="nouns"');
  const hasPronouns = content.includes('data-grammar-topic="pronouns"');
  const hasVerbs = content.includes('data-grammar-topic="verbs"');
  const hasAdverbs = content.includes('data-grammar-topic="adverbs"');
  const hasAdjectives = content.includes('data-grammar-topic="adjectives"');
  const hasPrepositions = content.includes('data-grammar-topic="prepositions"');
  const hasConjunctions = content.includes('data-grammar-topic="conjunctions"');
  const hasInterjections = content.includes('data-grammar-topic="interjections"');
  const hasAll80 = content.includes('All (80 Qs)');
  
  console.log(`${f}: Nouns=${hasNouns}, Pronouns=${hasPronouns}, Verbs=${hasVerbs}, Adverbs=${hasAdverbs}, Adj=${hasAdjectives}, Prep=${hasPrepositions}, Conj=${hasConjunctions}, Interj=${hasInterjections}, All80=${hasAll80}`);
});
