const fs = require('fs');
const htmlFiles = ['index.html', 'grammar.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html', 'cv.html'];

htmlFiles.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  const srcs = new Set();
  while ((match = regex.exec(content)) !== null) {
    srcs.add(match[1]);
  }
  console.log(`=== ${f} (${srcs.size} unique srcs) ===`);
  srcs.forEach(s => console.log('  ' + s));
});
