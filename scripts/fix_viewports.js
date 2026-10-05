const fs = require('fs');
const files = ['index.html', 'grammar.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html', 'cv.html'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<meta\s+name=["']viewport["']\s+content=["'][^"']*["']>/i, '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated viewport in ${file}`);
  }
});
