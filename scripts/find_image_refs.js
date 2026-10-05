const fs = require('fs');

const searchDirs = ['.', 'css', 'js', 'scripts'];
const extList = ['.html', '.css', '.js', '.json'];

function scanDir(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(file => {
    const full = dir === '.' ? file : `${dir}/${file}`;
    if (file === '.git' || file === 'node_modules') return;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (['css', 'js', 'scripts'].includes(file)) {
        files = files.concat(scanDir(full));
      }
    } else if (extList.some(ext => file.endsWith(ext))) {
      files.push(full);
    }
  });
  return files;
}

const allFiles = scanDir('.');
const matches = [];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('image 1') || line.includes('image/') || line.includes('image%201')) {
      matches.push({ file, lineNum: idx + 1, line: line.trim() });
    }
  });
});

console.log(`Found ${matches.length} matching lines:`);
matches.forEach(m => console.log(`${m.file}:${m.lineNum} -> ${m.line}`));
