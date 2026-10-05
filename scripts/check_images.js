const fs = require('fs');

const items = fs.readdirSync('.');
console.log('Items in root:');
items.forEach(item => {
  const stat = fs.statSync(item);
  console.log(`${item} (${stat.isDirectory() ? 'DIR' : 'FILE'})`);
  if (stat.isDirectory() && item.startsWith('image')) {
    const sub = fs.readdirSync(item);
    console.log(`  Contents of ${item}:`, sub);
  }
});
