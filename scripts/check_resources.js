const fs = require('fs');
const htmlFiles = ['index.html', 'grammar.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html', 'cv.html'];
let missing = 0;
let total = 0;

htmlFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/src=["']([^"']+)["']/g) || [];
  matches.forEach(m => {
    let src = m.replace(/src=["']/, '').replace(/["']$/, '');
    if (src.startsWith('http') || src.startsWith('data:')) return;
    if (src.includes('?')) src = src.split('?')[0];
    total++;
    if (!fs.existsSync(src)) {
      console.log('MISSING in ' + f + ': ' + src);
      missing++;
    }
  });
});

console.log('Checked ' + total + ' resources. Missing: ' + missing);
