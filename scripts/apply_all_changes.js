/**
 * scripts/apply_all_changes.js
 * Applies the 4th and 5th sub-menu rearrangement across CSS, JS, and HTML files.
 */
const fs = require('fs');

console.log('1. Updating css/elearn-pro.css...');
let cssContent = fs.readFileSync('css/elearn-pro.css', 'utf8');

const css4th5thStyles = `
/* ==========================================================================
   4TH LEVEL MENU: TOPIC ITEMS (Nouns, Verbs, Present Tenses, Voice, etc.)
   ========================================================================== */
.sub-4th-dropdown-menu {
  position: absolute;
  top: -6px;
  left: calc(100% + 8px);
  min-width: 310px;
  max-width: 350px;
  max-height: 85vh;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(32px) saturate(200%);
  -webkit-backdrop-filter: blur(32px) saturate(200%);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  padding: 10px;
  box-shadow: 0 24px 60px -8px rgba(0, 0, 0, 0.2), 
              0 6px 20px -2px rgba(0, 0, 0, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.95);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(-10px) scale(0.96);
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
              visibility 0.22s;
  z-index: 1400;
  list-style: none;
}

[data-theme="dark"] .sub-4th-dropdown-menu {
  background: rgba(18, 26, 38, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.8), 
              0 8px 24px rgba(0, 0, 0, 0.6);
}

.sub-4th-dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -16px;
  width: 20px;
  background: transparent;
}

.sub-4th-dropdown-menu.flyout-left {
  left: auto;
  right: calc(100% + 8px);
  transform: translateX(10px) scale(0.96);
  box-shadow: 0 24px 60px -8px rgba(0, 0, 0, 0.28);
}

.sub-4th-dropdown-menu.flyout-left::before {
  left: auto;
  right: -16px;
}

.sub-item-nested:hover > .sub-4th-dropdown-menu,
.sub-item-nested:focus-within > .sub-4th-dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(0) scale(1);
}

.sub-4th-grid {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.sub-4th-item-nested {
  position: relative;
}

.grammar-4th-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 11px;
  text-decoration: none;
  color: var(--elearn-text-dark);
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

[data-theme="dark"] .grammar-4th-link {
  color: #F1F5F9;
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.06);
}

.grammar-4th-link:hover,
.sub-4th-item-nested:hover > .grammar-4th-link {
  background: rgba(35, 78, 56, 0.09);
  border-color: rgba(35, 78, 56, 0.22);
  transform: translateX(2px);
}

[data-theme="dark"] .grammar-4th-link:hover,
[data-theme="dark"] .sub-4th-item-nested:hover > .grammar-4th-link {
  background: rgba(52, 211, 153, 0.16);
  border-color: rgba(52, 211, 153, 0.3);
  color: #34D399;
}

.g4-icon {
  font-size: 1.15rem;
  flex-shrink: 0;
  width: 24px;
  text-align: center;
}

.g4-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.g4-title {
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.25;
}

.g4-desc {
  font-size: 0.68rem;
  color: var(--elearn-text-gray);
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

[data-theme="dark"] .g4-desc {
  color: #94A3B8;
}

.nested-caret-4th {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--elearn-text-gray);
  margin-left: 6px;
  flex-shrink: 0;
  transition: transform 0.2s ease, color 0.2s ease;
}

.sub-4th-item-nested:hover .nested-caret-4th {
  transform: translateX(2px);
  color: var(--elearn-orange);
}

/* ==========================================================================
   5TH LEVEL SUB-MENU: LESSONS & CEFR TEST CATEGORIES (A1, A2, B1, B2, C1&C2)
   ========================================================================== */
.sub-5th-dropdown-menu {
  position: absolute;
  top: -8px;
  left: calc(100% + 8px);
  min-width: 290px;
  max-width: 320px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(36px) saturate(210%);
  -webkit-backdrop-filter: blur(36px) saturate(210%);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 18px;
  padding: 12px;
  box-shadow: 0 26px 70px -8px rgba(0, 0, 0, 0.25), 
              0 8px 24px -2px rgba(0, 0, 0, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.95);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(-10px) scale(0.96);
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
              visibility 0.22s;
  z-index: 1500;
  list-style: none;
}

[data-theme="dark"] .sub-5th-dropdown-menu {
  background: rgba(15, 23, 36, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.85), 
              0 10px 30px rgba(0, 0, 0, 0.7);
}

/* Hover bridge for 5th level */
.sub-5th-dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  bottom: -10px;
  left: -16px;
  width: 20px;
  background: transparent;
}

.sub-5th-dropdown-menu.flyout-left {
  left: auto;
  right: calc(100% + 8px);
  transform: translateX(10px) scale(0.96);
  box-shadow: 0 26px 70px -8px rgba(0, 0, 0, 0.3);
}

.sub-5th-dropdown-menu.flyout-left::before {
  left: auto;
  right: -16px;
}

.sub-4th-item-nested:hover > .sub-5th-dropdown-menu,
.sub-4th-item-nested:focus-within > .sub-5th-dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(0) scale(1);
}

.sub-5th-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 9px;
  margin-bottom: 9px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

[data-theme="dark"] .sub-5th-header {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.sub-5th-title {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--elearn-text-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

[data-theme="dark"] .sub-5th-title {
  color: #F8FAFC;
}

.sub-5th-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 7px;
  border-radius: 999px;
  background: rgba(35, 78, 56, 0.1);
  color: var(--elearn-green);
}

[data-theme="dark"] .sub-5th-badge {
  background: rgba(52, 211, 153, 0.18);
  color: #34D399;
}

.sub-5th-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Action: Lessons Link Card */
.btn-5th-action {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 12px;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(35, 78, 56, 0.06) 0%, rgba(35, 78, 56, 0.12) 100%);
  border: 1px solid rgba(35, 78, 56, 0.2);
  color: var(--elearn-text-dark);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

[data-theme="dark"] .btn-5th-action {
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.08) 0%, rgba(52, 211, 153, 0.15) 100%);
  border-color: rgba(52, 211, 153, 0.25);
  color: #F1F5F9;
}

.btn-5th-action:hover {
  background: linear-gradient(135deg, #1b4330 0%, #2a6448 100%);
  color: #FFFFFF !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(27, 67, 48, 0.25);
}

[data-theme="dark"] .btn-5th-action:hover {
  background: linear-gradient(135deg, #059669 0%, #10B981 100%);
  color: #FFFFFF !important;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
}

.act-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.act-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.act-title {
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.2;
}

.act-desc {
  font-size: 0.66rem;
  opacity: 0.78;
  line-height: 1.2;
  margin-top: 2px;
}

.act-arrow {
  font-size: 0.85rem;
  font-weight: 700;
  opacity: 0.6;
  transition: transform 0.2s ease;
}

.btn-5th-action:hover .act-arrow {
  transform: translateX(3px);
  opacity: 1;
}

/* Action: Test Section & CEFR Level Pills */
.sub-5th-test-block {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 9px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.025);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

[data-theme="dark"] .sub-5th-test-block {
  background: rgba(255, 255, 255, 0.025);
  border-color: rgba(255, 255, 255, 0.06);
}

.test-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 2px;
}

.tb-title {
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--elearn-text-dark);
}

[data-theme="dark"] .tb-title {
  color: #F8FAFC;
}

.tb-all-link {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--elearn-orange);
  text-decoration: none;
  padding: 2px 6px;
  border-radius: 6px;
  background: rgba(255, 149, 0, 0.1);
  transition: all 0.16s ease;
}

.tb-all-link:hover {
  background: var(--elearn-orange);
  color: #FFFFFF;
}

.test-cefr-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.cefr-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.16s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: 1px solid transparent;
}

.cefr-pill .pill-lvl {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.3px;
}

.cefr-pill .pill-name {
  font-size: 0.62rem;
  font-weight: 600;
  opacity: 0.85;
}

/* CEFR Color Badges */
.pill-a1 {
  background: #ECFDF5;
  border-color: rgba(16, 185, 129, 0.3);
  color: #047857;
}
.pill-a1:hover {
  background: #10B981;
  color: #FFFFFF;
  border-color: #10B981;
  transform: translateY(-1px);
}

.pill-a2 {
  background: #EFF6FF;
  border-color: rgba(59, 130, 246, 0.3);
  color: #1D4ED8;
}
.pill-a2:hover {
  background: #3B82F6;
  color: #FFFFFF;
  border-color: #3B82F6;
  transform: translateY(-1px);
}

.pill-b1 {
  background: #FFFBEB;
  border-color: rgba(245, 158, 11, 0.3);
  color: #B45309;
}
.pill-b1:hover {
  background: #F59E0B;
  color: #FFFFFF;
  border-color: #F59E0B;
  transform: translateY(-1px);
}

.pill-b2 {
  background: #FFF7ED;
  border-color: rgba(249, 115, 22, 0.3);
  color: #C2410C;
}
.pill-b2:hover {
  background: #F97316;
  color: #FFFFFF;
  border-color: #F97316;
  transform: translateY(-1px);
}

.pill-c1c2 {
  grid-column: span 2;
  background: #FAF5FF;
  border-color: rgba(139, 92, 246, 0.3);
  color: #6D28D9;
}
.pill-c1c2:hover {
  background: #8B5CF6;
  color: #FFFFFF;
  border-color: #8B5CF6;
  transform: translateY(-1px);
}

/* Dark mode CEFR pills */
[data-theme="dark"] .pill-a1 {
  background: rgba(16, 185, 129, 0.14);
  border-color: rgba(16, 185, 129, 0.3);
  color: #34D399;
}
[data-theme="dark"] .pill-a1:hover {
  background: #10B981;
  color: #FFFFFF;
}

[data-theme="dark"] .pill-a2 {
  background: rgba(59, 130, 246, 0.14);
  border-color: rgba(59, 130, 246, 0.3);
  color: #60A5FA;
}
[data-theme="dark"] .pill-a2:hover {
  background: #3B82F6;
  color: #FFFFFF;
}

[data-theme="dark"] .pill-b1 {
  background: rgba(245, 158, 11, 0.14);
  border-color: rgba(245, 158, 11, 0.3);
  color: #FBBF24;
}
[data-theme="dark"] .pill-b1:hover {
  background: #F59E0B;
  color: #FFFFFF;
}

[data-theme="dark"] .pill-b2 {
  background: rgba(249, 115, 22, 0.14);
  border-color: rgba(249, 115, 22, 0.3);
  color: #FB923C;
}
[data-theme="dark"] .pill-b2:hover {
  background: #F97316;
  color: #FFFFFF;
}

[data-theme="dark"] .pill-c1c2 {
  background: rgba(139, 92, 246, 0.14);
  border-color: rgba(139, 92, 246, 0.3);
  color: #C084FC;
}
[data-theme="dark"] .pill-c1c2:hover {
  background: #8B5CF6;
  color: #FFFFFF;
}
`;

// Insert 4th & 5th styles before .hw-sheet-container
if (!cssContent.includes('.sub-4th-dropdown-menu')) {
  cssContent = cssContent.replace(
    '/* ==========================================================================\n   HANDWRITTEN VISUAL STUDY SHEET STYLES (CLEAR, SIMPLE & STRUCTURAL)',
    css4th5thStyles + '\n/* ==========================================================================\n   HANDWRITTEN VISUAL STUDY SHEET STYLES (CLEAR, SIMPLE & STRUCTURAL)'
  );
}

// Update mobile media query in css/elearn-pro.css
const oldMobileQuery = `  .sub-3rd-dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none !important;
    pointer-events: auto;
    display: none;
    box-shadow: none;
    border: 1px dashed rgba(35, 78, 56, 0.25);
    background: rgba(35, 78, 56, 0.04);
    border-radius: 12px;
    margin-top: 6px;
    max-width: 100%;
    width: 100%;
  }

  [data-theme="dark"] .sub-3rd-dropdown-menu {
    border-color: rgba(52, 211, 153, 0.28);
    background: rgba(255, 255, 255, 0.03);
  }

  .sub-3rd-dropdown-menu::before {
    display: none;
  }

  .sub-item-nested.sub-3rd-open .sub-3rd-dropdown-menu {
    display: block;
  }

  .sub-item-nested.sub-3rd-open .nested-caret-3rd {
    transform: rotate(90deg);
    color: var(--elearn-orange);
  }`;

const newMobileQuery = `  .sub-3rd-dropdown-menu,
  .sub-4th-dropdown-menu,
  .sub-5th-dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none !important;
    pointer-events: auto;
    display: none;
    box-shadow: none;
    border: 1px dashed rgba(35, 78, 56, 0.25);
    background: rgba(35, 78, 56, 0.04);
    border-radius: 12px;
    margin-top: 6px;
    max-width: 100%;
    width: 100%;
  }

  [data-theme="dark"] .sub-3rd-dropdown-menu,
  [data-theme="dark"] .sub-4th-dropdown-menu,
  [data-theme="dark"] .sub-5th-dropdown-menu {
    border-color: rgba(52, 211, 153, 0.28);
    background: rgba(255, 255, 255, 0.03);
  }

  .sub-3rd-dropdown-menu::before,
  .sub-4th-dropdown-menu::before,
  .sub-5th-dropdown-menu::before {
    display: none;
  }

  .sub-item-nested.sub-3rd-open .sub-3rd-dropdown-menu,
  .sub-item-nested.sub-3rd-open .sub-4th-dropdown-menu {
    display: block;
  }

  .sub-item-nested.sub-3rd-open .nested-caret-3rd {
    transform: rotate(90deg);
    color: var(--elearn-orange);
  }

  .sub-4th-item-nested.sub-4th-open .sub-5th-dropdown-menu {
    display: block;
  }

  .sub-4th-item-nested.sub-4th-open .nested-caret-4th {
    transform: rotate(90deg);
    color: var(--elearn-orange);
  }`;

if (cssContent.includes(oldMobileQuery)) {
  cssContent = cssContent.replace(oldMobileQuery, newMobileQuery);
}

fs.writeFileSync('css/elearn-pro.css', cssContent, 'utf8');
console.log('css/elearn-pro.css updated successfully.');

console.log('2. Updating HTML files...');
const generatedMenuHtml = fs.readFileSync('scripts/generated_grammar_menu.html', 'utf8');

const htmlFiles = ['index.html', 'teaching.html', 'tests.html', 'hangman.html', 'wordshake.html'];
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const startTag = '<!-- Sub Menu 1: Grammar (5 Master Modules) -->';
  const endTag = '<!-- Sub Menu 2: Vocabulary -->';
  const startIdx = content.indexOf(startTag);
  const endIdx = content.indexOf(endTag);
  if (startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + generatedMenuHtml.trim() + '\n\n            ' + content.substring(endIdx);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.warn(`Could not find tags in ${file}`);
  }
}

// Update grammar.html navbar Column 1
let grammarHtml = fs.readFileSync('grammar.html', 'utf8');
const col1Start = grammarHtml.indexOf('<!-- Column 1: Grammar Modules (Core Topics) -->');
const col2Start = grammarHtml.indexOf('<!-- Column 2: Grade 10 English Units (Ministry Curriculum) -->');
if (col1Start !== -1 && col2Start !== -1) {
  // Extract just the inner list of modules from generatedMenuHtml
  const listStartTag = '<div class="sub-grammar-list">';
  const listEndTag = '</div>\n              </div>\n            </div>';
  const lStart = generatedMenuHtml.indexOf(listStartTag);
  const lEnd = generatedMenuHtml.lastIndexOf('</div>');
  const innerList = generatedMenuHtml.substring(lStart + listStartTag.length, generatedMenuHtml.indexOf('</div>\n              </div>\n            </div>'));

  const newCol1 = `<!-- Column 1: Grammar Modules (Core Topics) -->
              <div class="dropdown-col">
                <div class="col-header">
                  <span class="col-title" data-i18n="nav_grammar_skills">វេយ្យាករណ៍អង់គ្លេស</span>
                  <span class="badge-mini">5 Modules</span>
                </div>
                
                <div class="sub-dropdown-grammar">
                  <div class="sub-grammar-list">
${innerList.trim()}
                  </div>
                </div>
              </div>\n\n              `;

  grammarHtml = grammarHtml.substring(0, col1Start) + newCol1 + grammarHtml.substring(col2Start);
  fs.writeFileSync('grammar.html', grammarHtml, 'utf8');
  console.log('Updated grammar.html navigation');
}

console.log('3. Updating js/main.js...');
let mainJs = fs.readFileSync('js/main.js', 'utf8');

// Replace link click handler & accordion in main.js
const oldGrammarClick = `  // Attach click events to Grammar Master Topic links
  document.querySelectorAll('[data-grammar-topic]').forEach(link => {
    link.addEventListener('click', (e) => {
      const topic = link.dataset.grammarTopic;
      // On mobile screens, don't trigger navigation if clicking the parent arrow that toggles 3rd level
      if (window.innerWidth <= 991 && link.classList.contains('nested-3rd-parent')) {
        return; // accordion toggle handles it
      }
      if (topic) {
        if (window.location.pathname.includes('grammar.html')) {
          e.preventDefault();
          if (window.GrammarPage) {
            try {
              history.pushState(null, '', \`grammar.html?topic=\${topic}\`);
            } catch (err) {}
            window.GrammarPage.renderLesson(topic);
          }
        } else {
          // Navigate to dedicated grammar reading and testing page
          e.preventDefault();
          window.location.href = \`grammar.html?topic=\${encodeURIComponent(topic)}\`;
        }
      }
    });
  });

  // Mobile accordion toggle for 3rd level submenu
  document.querySelectorAll('.nested-3rd-parent').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();
        const parent = btn.closest('.sub-item-nested');
        if (parent) {
          parent.classList.toggle('sub-3rd-open');
        }
      }
    });
  });`;

const newGrammarClick = `  // Attach click events to Grammar Master Topic links (4th & 5th level items)
  document.querySelectorAll('[data-grammar-topic]').forEach(link => {
    link.addEventListener('click', (e) => {
      // On mobile screens, don't trigger navigation if clicking parent togglers
      if (window.innerWidth <= 991 && (link.classList.contains('nested-3rd-parent') || link.classList.contains('nested-4th-parent'))) {
        return; // accordion toggle handles it
      }
      
      const topic = link.dataset.grammarTopic;
      const level = link.dataset.level || '';
      const targetSec = link.dataset.targetSection || '';

      if (topic) {
        let targetUrl = \`grammar.html?topic=\${encodeURIComponent(topic)}\`;
        if (level) targetUrl += \`&level=\${encodeURIComponent(level)}\`;
        if (targetSec === 'lesson') {
          targetUrl += '#sec-notesheet';
        } else if (level || targetSec === 'test') {
          targetUrl += '#sec-tests';
        }

        if (window.location.pathname.includes('grammar.html')) {
          e.preventDefault();
          try {
            history.pushState(null, '', targetUrl);
          } catch (err) {}
          if (window.GrammarPage) {
            window.GrammarPage.renderLesson(topic, level, targetSec);
          }
        } else {
          e.preventDefault();
          window.location.href = targetUrl;
        }
      }
    });
  });

  // Mobile accordion toggle for 3rd level submenu
  document.querySelectorAll('.nested-3rd-parent').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();
        const parent = btn.closest('.sub-item-nested');
        if (parent) {
          parent.classList.toggle('sub-3rd-open');
        }
      }
    });
  });

  // Mobile accordion toggle for 4th level submenu
  document.querySelectorAll('.nested-4th-parent').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation();
        const parent = btn.closest('.sub-4th-item-nested');
        if (parent) {
          parent.classList.toggle('sub-4th-open');
        }
      }
    });
  });

  // Auto-flipping for 4th & 5th level flyouts on desktop to prevent screen edge overflow
  function setupFlyoutPositioning() {
    if (window.innerWidth > 991) {
      document.querySelectorAll('.sub-item-nested, .sub-4th-item-nested').forEach(item => {
        item.addEventListener('mouseenter', () => {
          const childMenu = item.querySelector('.sub-4th-dropdown-menu, .sub-5th-dropdown-menu');
          if (childMenu) {
            childMenu.classList.remove('flyout-left');
            const rect = childMenu.getBoundingClientRect();
            if (rect.right > window.innerWidth - 15) {
              childMenu.classList.add('flyout-left');
            }
          }
        });
      });
    }
  }
  setupFlyoutPositioning();
  window.addEventListener('resize', setupFlyoutPositioning);`;

if (mainJs.includes(oldGrammarClick)) {
  mainJs = mainJs.replace(oldGrammarClick, newGrammarClick);
  fs.writeFileSync('js/main.js', mainJs, 'utf8');
  console.log('js/main.js updated successfully.');
} else {
  console.warn('Could not find oldGrammarClick pattern in js/main.js');
}

console.log('All changes applied successfully!');
