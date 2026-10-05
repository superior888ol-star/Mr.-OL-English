/**
 * Script to generate the rearranged 3rd, 4th, and 5th level Grammar Navigation Menu
 */
const fs = require('fs');

const GRAMMAR_MODULES = [
  {
    num: 1,
    id: 'parts_of_speech',
    defaultTopic: 'nouns',
    title: 'Parts of Speech',
    titleKh: 'ថ្នាក់នៃពាក្យ (8 Word Classes)',
    badge: '8 Classes',
    items: [
      {
        topic: 'nouns',
        icon: '📦',
        title: 'Nouns (នាម)',
        titleKh: 'នាម',
        desc: 'Kinds, Sing/Plural, Countable & Uncountable'
      },
      {
        topic: 'pronouns',
        icon: '👤',
        title: 'Pronouns (សព្វនាម)',
        titleKh: 'សព្វនាម',
        desc: 'Definite (Subj/Obj/Poss/Refl) & Indefinite'
      },
      {
        topic: 'verbs',
        icon: '⚡',
        title: 'Verbs (កិរិយាសព្ទ)',
        titleKh: 'កិរិយាសព្ទ',
        desc: 'Main, Modals, Finite, Transitive & Causatives'
      },
      {
        topic: 'adverbs',
        icon: '🚀',
        title: 'Adverbs (គុណកិរិយា)',
        titleKh: 'គុណកិរិយា',
        desc: 'Meaning, Formation, Use, Kinds & Exceptions'
      },
      {
        topic: 'adjectives',
        icon: '🎨',
        title: 'Adjectives (គុណនាម)',
        titleKh: 'គុណនាម',
        desc: 'Visual Summary, OSASCOMP Order & Rules'
      },
      {
        topic: 'prepositions',
        icon: '📍',
        title: 'Prepositions (ធៀបសព្វ)',
        titleKh: 'ធៀបសព្វ',
        desc: 'Visual Summary, In/On/At Triangle & Rules'
      },
      {
        topic: 'conjunctions',
        icon: '🔗',
        title: 'Conjunctions (ឈ្នាប់)',
        titleKh: 'ឈ្នាប់',
        desc: 'Visual Summary, FANBOYS, Subordinating & Pairs'
      },
      {
        topic: 'interjections',
        icon: '💥',
        title: 'Interjections (ឧទានសព្ទ)',
        titleKh: 'ឧទានសព្ទ',
        desc: 'Visual Summary, Emotions, Punctuations & Use'
      }
    ]
  },
  {
    num: 2,
    id: 'articles',
    defaultTopic: 'articles',
    title: 'Articles (ឧបបទ)',
    titleKh: 'The, A/An & Zero Articles (Ø)',
    badge: 'Articles',
    items: [
      {
        topic: 'articles',
        icon: '📰',
        title: 'Articles (A, An, The & Ø)',
        titleKh: 'ឧបបទ',
        desc: 'Definite, Indefinite & Zero Article Rules'
      }
    ]
  },
  {
    num: 3,
    id: 'tenses',
    defaultTopic: 'tenses_present',
    title: 'English Tenses (កាលទាំង ១២)',
    titleKh: 'Present, Past & Future Tenses',
    badge: '12 Tenses',
    items: [
      {
        topic: 'tenses_present',
        icon: '🟢',
        title: 'Present Tenses (បច្ចុប្បន្ន)',
        titleKh: 'បច្ចុប្បន្នកាល',
        desc: 'Simple, Continuous, Perfect, Perfect Continuous'
      },
      {
        topic: 'tenses_past',
        icon: '🔵',
        title: 'Past Tenses (អតីតកាល)',
        titleKh: 'អតីតកាល',
        desc: 'Simple, Continuous, Perfect, Perfect Continuous'
      },
      {
        topic: 'tenses_future',
        icon: '🟣',
        title: 'Future Tenses (អនាគតកាល)',
        titleKh: 'អនាគតកាល',
        desc: 'Simple, Continuous, Perfect, Perfect Continuous'
      }
    ]
  },
  {
    num: 4,
    id: 'voice_clauses',
    defaultTopic: 'voice',
    title: 'Passive & Active / Clauses',
    titleKh: 'Voice Shifts & Dependent Clauses',
    badge: 'Structure',
    items: [
      {
        topic: 'voice',
        icon: '🔄',
        title: 'Active & Passive Voice',
        titleKh: 'កិរិយាវាចក',
        desc: 'Formula Matrix across 8 Tenses & Keynotes'
      },
      {
        topic: 'clauses',
        icon: '🧩',
        title: 'Clauses Architecture',
        titleKh: 'អនុប្រយោគ',
        desc: 'Independent, Noun, Adjective & Adverb Clauses'
      }
    ]
  },
  {
    num: 5,
    id: 'sentence_structures',
    defaultTopic: 'sentence_structures',
    title: 'Sentence Structures & Fragments',
    titleKh: 'Simple/Compound/Complex & Fixes',
    badge: 'Patterns',
    items: [
      {
        topic: 'sentence_structures',
        icon: '🏗️',
        title: 'Sentence Structures',
        titleKh: 'ទម្រង់ប្រយោគ',
        desc: '5 Patterns, Compound, Complex & Fragments'
      }
    ]
  },
  {
    num: 6,
    id: 'gerund_infinitive',
    defaultTopic: 'gerund_infinitive',
    title: 'Gerund & Infinitive',
    titleKh: 'កិរិយាសព្ទ Gerund & Infinitive',
    badge: 'Verb Forms',
    items: [
      {
        topic: 'gerund_infinitive',
        icon: '🎯',
        title: 'Gerund & Infinitive',
        titleKh: 'Gerund & Infinitive',
        desc: 'V-ing, To-Infinitive, Bare Infinitive & Verbs with Meaning Shifts'
      }
    ]
  },
  {
    num: 7,
    id: 'used_to',
    defaultTopic: 'used_to',
    title: 'Used to / Be, Get used to',
    titleKh: 'ទម្រង់ Used to, Be & Get used to',
    badge: 'Habits',
    items: [
      {
        topic: 'used_to',
        icon: '⏳',
        title: 'Used to / Be, Get used to',
        titleKh: 'Used to, Be/Get used to',
        desc: 'Past Habits vs Accustomed to vs Process of Getting Familiar'
      }
    ]
  }
];

function generate5thSubmenu(item) {
  return `                    <!-- 5th Sub Menu: Lessons & Test with CEFR Levels (A1, A2, B1, B2, C1&C2) -->
                    <div class="sub-5th-dropdown-menu">
                      <div class="sub-5th-header">
                        <span class="sub-5th-title">${item.icon} ${item.title}</span>
                        <span class="sub-5th-badge">Syllabus &amp; Tests</span>
                      </div>
                      <div class="sub-5th-actions">
                        <!-- Action 1: Lessons -->
                        <a href="grammar.html?topic=${item.topic}#sec-notesheet" class="btn-5th-action btn-5th-lesson" data-grammar-topic="${item.topic}" data-target-section="lesson" title="Study ${item.title}">
                          <span class="act-icon">📖</span>
                          <div class="act-body">
                            <span class="act-title">Lessons (មេរៀន)</span>
                            <span class="act-desc">Study Notes, Formulas, Rules &amp; Traps</span>
                          </div>
                          <span class="act-arrow">→</span>
                        </a>

                        <!-- Action 2: Test Categorized by CEFR Levels -->
                        <div class="sub-5th-test-block">
                          <div class="test-block-header">
                            <span class="tb-title">🎯 Test (តេស្តអនុវត្ត)</span>
                            <a href="grammar.html?topic=${item.topic}&level=ALL#sec-tests" class="tb-all-link" data-grammar-topic="${item.topic}" data-level="ALL" title="Practice all 80 standard questions">All (80 Qs)</a>
                          </div>
                          <div class="test-cefr-grid">
                            <a href="grammar.html?topic=${item.topic}&level=A1#sec-tests" class="cefr-pill pill-a1" data-grammar-topic="${item.topic}" data-level="A1" title="${item.title} - A1 Beginner Test">
                              <span class="pill-lvl">A1</span>
                              <span class="pill-name">Beginner</span>
                            </a>
                            <a href="grammar.html?topic=${item.topic}&level=A2#sec-tests" class="cefr-pill pill-a2" data-grammar-topic="${item.topic}" data-level="A2" title="${item.title} - A2 Elementary Test">
                              <span class="pill-lvl">A2</span>
                              <span class="pill-name">Elementary</span>
                            </a>
                            <a href="grammar.html?topic=${item.topic}&level=B1#sec-tests" class="cefr-pill pill-b1" data-grammar-topic="${item.topic}" data-level="B1" title="${item.title} - B1 Intermediate Test">
                              <span class="pill-lvl">B1</span>
                              <span class="pill-name">Intermediate</span>
                            </a>
                            <a href="grammar.html?topic=${item.topic}&level=B2#sec-tests" class="cefr-pill pill-b2" data-grammar-topic="${item.topic}" data-level="B2" title="${item.title} - B2 Upper-Intermediate Test">
                              <span class="pill-lvl">B2</span>
                              <span class="pill-name">Upper-Int</span>
                            </a>
                            <a href="grammar.html?topic=${item.topic}&level=C1_C2#sec-tests" class="cefr-pill pill-c1c2" data-grammar-topic="${item.topic}" data-level="C1_C2" title="${item.title} - C1 & C2 Advanced Test">
                              <span class="pill-lvl">C1 &amp; C2</span>
                              <span class="pill-name">Advanced</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>`;
}

function generateModuleHtml(mod) {
  const itemsHtml = mod.items.map(item => `
                  <!-- 4th Level Item: ${item.title} -->
                  <div class="sub-4th-item-nested">
                    <a href="grammar.html?topic=${item.topic}" class="grammar-4th-link nested-4th-parent" data-grammar-topic="${item.topic}" title="${item.title}">
                      <span class="g4-icon">${item.icon}</span>
                      <div class="g4-text">
                        <span class="g4-title">${item.title}</span>
                        <span class="g4-desc">${item.desc}</span>
                      </div>
                      <span class="nested-caret-4th">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </span>
                    </a>
${generate5thSubmenu(item)}
                  </div>`).join('\n');

  return `                  <!-- ${mod.num}. ${mod.title} with 4th & 5th Level Flyout Submenu -->
                  <div class="sub-item-nested">
                    <a href="grammar.html?topic=${mod.defaultTopic}" class="grammar-menu-item nested-3rd-parent" data-grammar-topic="${mod.defaultTopic}" title="${mod.num}. ${mod.title}">
                      <span class="grammar-num-badge">${mod.num}</span>
                      <span class="grammar-item-content">
                        <span class="grammar-item-title">${mod.title}</span>
                        <span class="grammar-item-sub">${mod.titleKh}</span>
                      </span>
                      <span class="nested-caret-3rd">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </span>
                    </a>

                    <!-- 4th Level Menu: ${mod.title} -->
                    <div class="sub-4th-dropdown-menu sub-3rd-dropdown-menu">
                      <div class="sub-menu-header">
                        <span class="sub-header-title">${mod.title}</span>
                        <span class="badge-cefr">${mod.badge}</span>
                      </div>
                      <div class="sub-4th-grid">
${itemsHtml}
                      </div>
                    </div>
                  </div>`;
}

function generateCompleteGrammarDropdown() {
  const modulesHtml = GRAMMAR_MODULES.map(generateModuleHtml).join('\n\n');
  return `            <!-- Sub Menu 1: Grammar (5 Master Modules) -->
            <div class="dropdown-item-nested">
              <a href="javascript:void(0)" class="dropdown-link nested-parent-link" data-skill="grammar">
                <span class="item-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path><line x1="9" y1="7" x2="15" y2="7"></line><line x1="9" y1="11" x2="13" y2="11"></line></svg>
                </span>
                <span class="nested-link-text">
                  <span class="skill-name" data-i18n="skill_grammar">Grammar</span>
                  <span class="skill-subtext" data-i18n="skill_grammar_kh">វេយ្យាករណ៍</span>
                </span>
                <span class="nested-caret">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
              </a>

              <!-- 3rd Menu: Grammar Master Syllabus (7 Core Modules) -->
              <div class="sub-dropdown-menu sub-dropdown-grammar">
                <div class="sub-menu-header">
                  <span class="sub-header-title">Grammar Master Syllabus</span>
                  <span class="badge-cefr">7 Modules</span>
                </div>
                
                <div class="sub-grammar-list">
${modulesHtml}
                </div>
              </div>
            </div>`;
}

fs.writeFileSync('scripts/generated_grammar_menu.html', generateCompleteGrammarDropdown(), 'utf8');
console.log('Successfully generated scripts/generated_grammar_menu.html!');
