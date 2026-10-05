const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('====================================================');
console.log('AUDIT & VERIFICATION SUITE FOR MOBILE-FIRST OVERHAUL');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${testName} ${details ? '- ' + details : ''}`);
    failCount++;
  }
}

const htmlFiles = ['index.html', 'grammar.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html', 'cv.html'];

// 1. Viewport verification
console.log('--- 1. Viewport Tags ---');
htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasCover = content.includes('<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">');
  const hasNoScalable = content.includes('user-scalable=no') || content.includes('maximum-scale=1');
  assert(hasCover && !hasNoScalable, `Viewport tag in ${file} is compliant (no user-scalable=no, cover included)`);
});

// 2. Images verification
console.log('\n--- 2. Image Paths & Space Normalization ---');
const scanFiles = [...htmlFiles, 'js/main.js', 'js/newsfeed.js', 'js/grammar-page.js', 'css/responsive.css', 'css/grammar-page.css'];
let foundSpaceInImg = false;
scanFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const matches = text.match(/(?:src|href|url)=["']?(image 1\/|image\/[^"'>\s]+\s+[^"'>\s]+)/gi);
    if (matches) {
      foundSpaceInImg = true;
      console.error(`Spaces found in ${file}:`, matches);
    }
  }
});
assert(!foundSpaceInImg, 'Zero image paths with spaces found across all HTML, JS, CSS files');

// 3. JavaScript Syntax Verification
console.log('\n--- 3. JavaScript Syntax Verification ---');
const jsFiles = ['js/main.js', 'js/grammar-page.js', 'js/newsfeed.js', 'js/student-assessment.js', 'js/wordshake2-game.js'];
jsFiles.forEach(f => {
  try {
    execSync(`node -c "${f}"`);
    assert(true, `Syntax clean: ${f}`);
  } catch (err) {
    assert(false, `Syntax error in ${f}`, err.message);
  }
});

// 4. Navigation Menu Completeness
console.log('\n--- 4. Navigation Menu & Accordion Completeness ---');
const navPages = ['index.html', 'grammar.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html'];
const posTopics = ['nouns', 'pronouns', 'verbs', 'adverbs', 'adjectives', 'prepositions', 'conjunctions', 'interjections'];

navPages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const allTopicsPresent = posTopics.every(t => content.includes(`data-grammar-topic="${t}"`));
  const hasAll80 = content.includes('All (80 Qs)');
  const hasLevels = ['A1', 'A2', 'B1', 'B2', 'C1_C2'].every(lvl => content.includes(`data-level="${lvl}"`));
  assert(allTopicsPresent && hasAll80 && hasLevels, `${file} contains all 8 Parts of Speech & CEFR test levels (All 80 Qs, A1-C2)`);
});

// 5. Responsive CSS & Mobile Drawer Rules
console.log('\n--- 5. CSS Mobile Drawer & Layout System ---');
const respCss = fs.readFileSync('css/responsive.css', 'utf8');
assert(respCss.includes('-webkit-text-size-adjust: 100%'), 'Includes -webkit-text-size-adjust: 100%');
assert(respCss.includes('min-height: 100dvh'), 'Includes 100dvh viewport height support');
assert(respCss.includes('env(safe-area-inset-top'), 'Includes safe-area padding for iPhone notch/home bar');
assert(respCss.includes('font-size: 16px !important'), 'Inputs enforce font-size: 16px on mobile to kill iOS auto-zoom');
assert(respCss.includes('transform: none !important'), 'Includes transform: none on mobile to prevent scale/zoom jumps');
assert(respCss.includes('.drawer-header-bar'), 'Includes British Council drawer header bar styling');
assert(respCss.includes('.drawer-search-input'), 'Includes drawer topic search input styling');
assert(respCss.includes('.test-cefr-grid'), 'Includes CEFR wrapping chip pill styles');

// 6. Grammar Page Layout & Off-canvas
console.log('\n--- 6. Grammar Dedicated Page Components ---');
const grammarHtml = fs.readFileSync('grammar.html', 'utf8');
const grammarCss = fs.readFileSync('css/grammar-page.css', 'utf8');
const grammarJs = fs.readFileSync('js/grammar-page.js', 'utf8');

assert(grammarHtml.includes('id="floating-topics-btn"'), 'grammar.html has floating Topics button');
assert(grammarHtml.includes('id="sidebar-backdrop"'), 'grammar.html has sidebar backdrop');
assert(grammarCss.includes('.floating-topics-btn'), 'grammar-page.css has floating topics button styles');
assert(grammarCss.includes('.grammar-sidebar.open'), 'grammar-page.css has off-canvas open state');
assert(grammarCss.includes('.sticky-jump-bar'), 'grammar-page.css has horizontal sticky chip bar');
assert(grammarJs.includes('setupSidebarToggle'), 'grammar-page.js handles sidebar open/close');
assert(grammarJs.includes('IntersectionObserver'), 'grammar-page.js uses IntersectionObserver for section scrollspy');
assert(grammarJs.includes('table-responsive-wrapper'), 'grammar-page.js wraps tables to prevent overflow');
assert(grammarJs.includes('grammar-load-error-card'), 'grammar-page.js provides friendly error card + Retry button');

// 7. Lightbox Verification
console.log('\n--- 7. Lightbox Magnify & Gestures ---');
const newsfeedJs = fs.readFileSync('js/newsfeed.js', 'utf8');
assert(newsfeedJs.includes('touchstart') && newsfeedJs.includes('touchend'), 'newsfeed.js handles swipe gestures on touchscreens');
assert(respCss.includes('touch-action: pinch-zoom !important'), 'responsive.css configures pinch-zoom strictly inside lightbox');

// Summary
console.log('\n====================================================');
console.log(`TOTAL TESTS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('====================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('\n🎉 ALL CHECKS PASSED PERFECTLY!');
}
