const fs = require('fs');
const path = require('path');

// Ensure image_1 directory exists
if (!fs.existsSync('image_1')) {
  fs.mkdirSync('image_1', { recursive: true });
}

// Copy and normalize files from 'image 1' to 'image_1'
const img1Files = fs.readdirSync('image 1');
const fileMap1 = {};

img1Files.forEach(file => {
  let safeName = file.replace(/\s+/g, '_');
  // Specific clean names
  if (file === 'Leader Upgrading  Program.jpg') safeName = 'leader_upgrading_program.jpg';
  if (file === 'New Academic Year Opening day.jpg') safeName = 'new_academic_year_opening_day.jpg';
  if (file === 'photo 1.jpg') safeName = 'photo_1.jpg';
  if (file === 'photo 2.jpg') safeName = 'photo_2.jpg';

  const srcPath = path.join('image 1', file);
  const destPath = path.join('image_1', safeName);
  fs.copyFileSync(srcPath, destPath);
  fileMap1[`image 1/${file}`] = `image_1/${safeName}`;
});

// Also normalize files inside 'image' directory
const imgFiles = fs.readdirSync('image');
const fileMap0 = {};
imgFiles.forEach(file => {
  if (file.includes(' ')) {
    const safeName = file.replace(/\s+/g, '_');
    const srcPath = path.join('image', file);
    const destPath = path.join('image', safeName);
    fs.copyFileSync(srcPath, destPath);
    fileMap0[`image/${file}`] = `image/${safeName}`;
  }
});

console.log('Normalized image_1 files:', fs.readdirSync('image_1'));
console.log('Normalized image files:', fs.readdirSync('image'));

// Now update all references in index.html, cv.html, js/newsfeed.js
const allReplacements = { ...fileMap1, ...fileMap0 };

['index.html', 'cv.html', 'js/newsfeed.js'].forEach(targetFile => {
  if (fs.existsSync(targetFile)) {
    let content = fs.readFileSync(targetFile, 'utf8');
    let replacedCount = 0;
    for (const [oldPath, newPath] of Object.entries(allReplacements)) {
      if (content.includes(oldPath)) {
        content = content.split(oldPath).join(newPath);
        replacedCount++;
      }
    }
    // Also replace any remaining 'image 1/' with 'image_1/'
    if (content.includes('image 1/')) {
      content = content.split('image 1/').join('image_1/');
      replacedCount++;
    }
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log(`Updated ${targetFile}: ${replacedCount} references updated.`);
  }
});
