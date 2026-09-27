/**
 * DETAILED LESSONS & CURRICULUM READER (lessons-reader.js)
 * Clean, interactive reading and course curriculum platform for Cambodian High School
 * Tailored for Teacher Ouch Ol - Hun Sen Svay Thom High School
 * 
 * Features:
 *  - Subject selection: English (ភាសាអង់គ្លេស) or Computer Science (វិទ្យាសាស្ត្រកុំព្យូទ័រ)
 *  - Grade level selection: Grade 9, 10, 11, 12
 *  - Live search filter across chapters and lessons
 *  - Progress tracking with localStorage persistence
 *  - Interactive concept cards, formulas, code snippets & knowledge check reveals
 *  - Previous/Next lesson navigation
 *  - Responsive mobile drawer/toggle
 */

const courseCurriculumData = {
  // ==========================================
  // ENGLISH CURRICULUM (ភាសាអង់គ្លេស)
  // ==========================================
  english: {
    "grade-9": [
      {
        id: "en-g9-ch1",
        title: "ជំពូកទី ១៖ មូលដ្ឋានគ្រឹះការសន្ទនាប្រចាំថ្ងៃ (Daily English & Routines)",
        desc: "ទម្លាប់ប្រចាំថ្ងៃ រូបមន្ត Present Simple និងការប្រើប្រាស់ Adverbs of Frequency",
        lessons: [
          {
            id: "en-g9-l1",
            title: "មេរៀនទី ១៖ Present Simple Tense & Daily Routine",
            duration: "១៥ នាទីអាន",
            lead: "រៀនសូត្រពីរបៀបនិយាយអំពីទម្លាប់ប្រចាំថ្ងៃ សកម្មភាពកើតឡើងដដែលៗ និងរូបមន្ត Present Simple Tense យ៉ាងលម្អិត។",
            content: `
              <h3>១. រូបមន្ត និងទម្រង់ Present Simple Tense</h3>
              <p>Present Simple ប្រើប្រាស់សម្រាប់រៀបរាប់អំពីការពិតទូទៅ (General Truths) និងសកម្មភាពជាទម្លាប់ប្រចាំថ្ងៃ (Habits/Routines)។</p>
              
              <div class="reader-callout">
                <div class="reader-callout-title">💡 រូបមន្តគន្លឹះ (Affirmative & Negative):</div>
                <p><strong>(+) Subject + Verb (s/es) + Object...</strong><br>
                <em>ឧទាហរណ៍៖</em> I wake up at 6:00 AM every morning. / He teaches English at Hun Sen Svay Thom.</p>
                <p><strong>(-) Subject + do/does + not + Verb Infinitive...</strong><br>
                <em>ឧទាហរណ៍៖</em> She does not drink coffee at night.</p>
              </div>

              <h3>២. ច្បាប់នៃការថែម -s ឬ -es លើកិរិយាសព្ទ</h3>
              <p>នៅពេល Subject ជាកិរិយាសព្ទឯកវចនៈបុរសទី៣ (He, She, It, ឬឈ្មោះមនុស្សម្នាក់)៖</p>
              <ul>
                <li>កិរិយាសព្ទបញ្ចប់ដោយ <strong>-o, -ch, -sh, -ss, -x</strong>៖ ថែម <strong>-es</strong> (e.g., go &rarr; goes, watch &rarr; watches, teach &rarr; teaches)</li>
                <li>កិរិយាសព្ទបញ្ចប់ដោយ <strong>ព្យញ្ជនៈ + y</strong>៖ ដូរ y ជា i រួចថែម <strong>-es</strong> (e.g., study &rarr; studies, fly &rarr; flies)</li>
                <li>ករណីផ្សេងទៀត៖ ថែម <strong>-s</strong> ធម្មតា (e.g., play &rarr; plays, read &rarr; reads)</li>
              </ul>

              <div class="reader-concept-grid">
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Always (100%)</div>
                  <div class="reader-concept-def">តែងតែធ្វើ៖ I always review my lessons before bed.</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Often (70%)</div>
                  <div class="reader-concept-def">ជារឿយៗ៖ Sothea often plays football after school.</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Sometimes (50%)</div>
                  <div class="reader-concept-def">ជួនកាល៖ We sometimes eat out with family.</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Never (0%)</div>
                  <div class="reader-concept-def">មិនដែល៖ He never comes late to class.</div>
                </div>
              </div>

              <div class="reader-practice-box">
                <h4>✍️ សាកល្បងអនុវត្តចំណេះដឹង៖</h4>
                <p>បំពេញចន្លោះប្រហោង៖ "Mr. Ol ________ (teach) English and Computer Science with passion."</p>
                <button class="reader-check-btn" onclick="toggleReaderAnswer('ans-g9-l1')">បង្ហាញចម្លើយ & ការពន្យល់</button>
                <div id="ans-g9-l1" class="reader-answer-reveal">
                  ✅ <strong>ចម្លើយត្រឹមត្រូវ៖ teaches</strong> (ដោយសារ Subject ជា Mr. Ol ឯកវចនៈបុរសទី៣ ហើយ verb 'teach' បញ្ចប់ដោយ -ch ត្រូវថែម -es)
                </div>
              </div>
            `
          },
          {
            id: "en-g9-l2",
            title: "មេរៀនទី ២៖ Telling Time & Describing Schedules",
            duration: "១២ នាទីអាន",
            lead: "របៀបប្រាប់ពេលវេលាទាំងបែប British English (past/to) និង American English ងាយយល់ និងជាក់ស្តែង។",
            content: `
              <h3>១. វិធីប្រាប់ម៉ោងតាមក្បួនខ្នាតអន្តរជាតិ</h3>
              <p>មានពីរវិធីក្នុងការប្រាប់ម៉ោងជាភាសាអង់គ្លេស៖</p>
              <ul>
                <li><strong>វិធីទី ១ (Digital Style):</strong> និយាយម៉ោងមុន រួចនិយាយនាទី (e.g., 7:15 = Seven fifteen; 8:45 = Eight forty-five)</li>
                <li><strong>វិធីទី ២ (Traditional Style):</strong> និយាយនាទីមុន រួចប្រើ <em>past</em> ឬ <em>to</em> (e.g., 7:15 = A quarter past seven; 8:45 = A quarter to nine)</li>
              </ul>
              <div class="reader-callout reader-callout-gold">
                <div class="reader-callout-title">⏰ ចំណាំសំខាន់ៗ៖</div>
                <p>• <strong>Half past:</strong> កន្លះម៉ោង (e.g., 6:30 = Half past six)<br>
                • <strong>A quarter past:</strong> លើស ១៥ នាទី<br>
                • <strong>A quarter to:</strong> ខ្វះ ១៥ នាទីទៀតគ្រប់ម៉ោង</p>
              </div>
            `
          }
        ]
      },
      {
        id: "en-g9-ch2",
        title: "ជំពូកទី ២៖ ទីកន្លែងក្នុងក្រុង និងការប្រាប់ផ្លូវ (Places & Directions)",
        desc: "ទីកន្លែងសំខាន់ៗក្នុងទីក្រុង និងក្បួនប្រាប់ទិសដៅភ្ញៀវទេសចរ",
        lessons: [
          {
            id: "en-g9-l3",
            title: "មេរៀនទី ១៖ Prepositions of Place & Movement",
            duration: "១៨ នាទីអាន",
            lead: "ស្វែងយល់ពី Next to, Opposite, Between, Turn left, Go straight ahead សម្រាប់ប្រាប់ផ្លូវភ្ញៀវទេសចរនៅសៀមរាប។",
            content: `
              <h3>១. ឃ្លាសំខាន់ៗក្នុងការប្រាប់ទិសដៅ</h3>
              <p>នៅពេលភ្ញៀវទេសចរសួររកផ្លូវទៅកាន់ប្រាសាទអង្គរវត្ត ឬផ្សាររាត្រីក្នុងខេត្តសៀមរាប យើងអាចប្រើឃ្លាគន្លឹះដូចខាងក្រោម៖</p>
              <div class="reader-concept-grid">
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Go straight ahead</div>
                  <div class="reader-concept-def">ដើរត្រង់ទៅមុខរហូតដល់ផ្លូវកែង ឬរង្វង់មូល</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Turn left / Turn right</div>
                  <div class="reader-concept-def">បត់ឆ្វេង ឬបត់ស្តាំត្រង់ចំណុចភ្លើងស្តុប</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">It's on your right</div>
                  <div class="reader-concept-def">ទីតាំងនោះនៅខាងស្តាំដៃរបស់អ្នក</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Opposite the park</div>
                  <div class="reader-concept-def">នៅទល់មុខសួនច្បារ ឬសាលារៀន</div>
                </div>
              </div>
            `
          }
        ]
      }
    ],

    "grade-10": [
      {
        id: "en-g10-ch1",
        title: "ជំពូកទី ១៖ គ្រួសារ និងជីវិតប្រចាំថ្ងៃ (Family, Daily Life & Personal Info)",
        desc: "មេរៀនស្របតាមសៀវភៅគោល MoEYS English Grade 10 Units 1-5",
        lessons: [
          {
            id: "en-g10-l1",
            title: "មេរៀនទី ១៖ Family Relationships & Possessive Pronouns",
            duration: "១៥ នាទីអាន",
            lead: "ស្វែងយល់ពីវាក្យសព្ទគ្រួសារ និងការប្រើប្រាស់ Possessive Adjectives (my, your, his, her) និង Possessive Pronouns (mine, yours, hers)។",
            content: `
              <h3>១. វាក្យសព្ទគ្រួសារកម្រិតទូលំទូលាយ (Extended Family)</h3>
              <p>នៅក្នុងកម្មវិធីសិក្សាភាសាអង់គ្លេសថ្នាក់ទី១០ សិស្សានុសិស្សត្រូវស្គាល់ពាក្យគ្រួសារច្បាស់លាស់៖</p>
              <ul>
                <li><strong>Immediate family:</strong> Parents, siblings, spouse, children</li>
                <li><strong>Extended family:</strong> Relatives, cousins, nephew (ក្មួយប្រុស), niece (ក្មួយស្រី), in-laws (សាច់ថ្លៃ)</li>
              </ul>

              <h3>២. ការបែងចែក Possessive Adjectives vs Possessive Pronouns</h3>
              <div class="reader-callout">
                <p><strong>Possessive Adjective:</strong> ត្រូវមាននាម (Noun) នៅពីក្រោយជានិច្ច &rarr; <em>This is my textbook.</em></p>
                <p><strong>Possessive Pronoun:</strong> ឈរតែឯង ជំនួសឲ្យនាមដែលបានរៀបរាប់រួច &rarr; <em>This textbook is mine.</em></p>
              </div>

              <div class="reader-practice-box">
                <h4>✍️ លំហាត់អនុវត្ត៖</h4>
                <p>បំពេញប្រយោគ៖ "Is this Neary's pen? No, it's not ________ (she / her / hers)."</p>
                <button class="reader-check-btn" onclick="toggleReaderAnswer('ans-g10-l1')">បង្ហាញចម្លើយ</button>
                <div id="ans-g10-l1" class="reader-answer-reveal">
                  ✅ <strong>ចម្លើយត្រឹមត្រូវ៖ hers</strong> (ព្រោះជា Possessive Pronoun ឈរតែឯងនៅចុងប្រយោគ)
                </div>
              </div>
            `
          },
          {
            id: "en-g10-l2",
            title: "មេរៀនទី ២៖ Quantifiers: Countable & Uncountable Nouns",
            duration: "២០ នាទីអាន",
            lead: "ការប្រើ Much, Many, Some, Any, A few, A little ជាមួយនាមរាប់បាន និងនាមរាប់មិនបានក្នុងទីផ្សារ។",
            content: `
              <h3>១. នាមរាប់បាន (Countable) vs នាមរាប់មិនបាន (Uncountable)</h3>
              <p>នៅក្នុងភាសាអង់គ្លេស នាមត្រូវបានបែងចែកជាពីរក្រុមធំៗ៖</p>
              <div class="reader-concept-grid">
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Countable Nouns</div>
                  <div class="reader-concept-def">អាចរាប់ជា ១, ២, ៣... បាន (apples, books, pens)។ ប្រើជាមួយ <strong>many, a few</strong>។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Uncountable Nouns</div>
                  <div class="reader-concept-def">មិនអាចរាប់ជាលេខបានទេ (water, rice, money, information)។ ប្រើជាមួយ <strong>much, a little</strong>។</div>
                </div>
              </div>

              <h3>២. ច្បាប់នៃការប្រើ Some និង Any</h3>
              <ul>
                <li><strong>Some:</strong> ប្រើក្នុងប្រយោគស្រប (Affirmative) និងសំណើសុំ (Offers/Requests) &rarr; <em>Would you like some tea?</em></li>
                <li><strong>Any:</strong> ប្រើក្នុងប្រយោគបដិសេធ (Negative) និងសំនួរទូទៅ (Questions) &rarr; <em>We don't have any sugar left.</em></li>
              </ul>
            `
          }
        ]
      },
      {
        id: "en-g10-ch2",
        title: "ជំពូកទី ២៖ សុខភាព និងបរិស្ថានកម្ពុជា (Health & Cambodia Environment)",
        desc: "សុខភាព រដូវកាលនៅកម្ពុជា និងបរិស្ថាន MoEYS Units 8-10",
        lessons: [
          {
            id: "en-g10-l3",
            title: "មេរៀនទី ១៖ Modal Verbs for Advice: Should & Shouldn't",
            duration: "១៥ នាទីអាន",
            lead: "របៀបផ្តល់ដំបូន្មានចំពោះសុខភាព ការរៀនសូត្រ និងការថែរក្សាខ្លួនក្នុងរដូវភ្លៀង។",
            content: `
              <h3>១. ការប្រើ Should / Shouldn't</h3>
              <p>យើងប្រើ <strong>should + verb infinitive</strong> ដើម្បីផ្តល់អនុសាសន៍ល្អ ឬដំបូន្មានមានប្រយោជន៍។</p>
              <div class="reader-callout reader-callout-emerald">
                <div class="reader-callout-title">💊 ឧទាហរណ៍សុខភាពជាក់ស្តែង៖</div>
                <p>• You <strong>should drink</strong> plenty of clean water every day.<br>
                • You <strong>shouldn't stay up</strong> too late before the examination.</p>
              </div>
            `
          }
        ]
      }
    ],

    "grade-11": [
      {
        id: "en-g11-ch1",
        title: "ជំពូកទី ១៖ កាលកម្រិតខ្ពស់ និងល្បះអកម្ម (Advanced Tenses & Passive Voice)",
        desc: "ការគ្រប់គ្រង Past Perfect និងល្បះអកម្មកម្រិតមធ្យម",
        lessons: [
          {
            id: "en-g11-l1",
            title: "មេរៀនទី ១៖ Past Simple vs Past Continuous in Narratives",
            duration: "១៨ នាទីអាន",
            lead: "ការរៀបរាប់ដំណើររឿងដោយប្រើ Past Simple សម្រាប់សកម្មភាពកាត់ និង Past Continuous សម្រាប់សកម្មភាពកំពុងកើតឡើង។",
            content: `
              <h3>១. រូបមន្ត Past Continuous</h3>
              <p><strong>Subject + was/were + Verb-ing...</strong></p>
              <div class="reader-callout">
                <div class="reader-callout-title">🎬 ឧទាហរណ៍គន្លឹះ៖</div>
                <p><em>"While I <strong>was studying</strong> in the library, the rain <strong>started</strong>."</em><br>
                (សកម្មភាពកំពុងរៀនបានកើតឡើងមុន និងកំពុងបន្ត ស្រាប់តែភ្លៀងធ្លាក់មកកាត់។)</p>
              </div>
            `
          },
          {
            id: "en-g11-l2",
            title: "មេរៀនទី ២៖ Passive Voice Formation & Real-world Usage",
            duration: "២០ នាទីអាន",
            lead: "បំលែង Active ទៅ Passive Voice គ្រប់ Tenses យ៉ាងច្បាស់លាស់ និងមានភាពជឿជាក់។",
            content: `
              <h3>១. គោលការណ៍បំលែង Active &rarr; Passive</h3>
              <p>Passive Voice ផ្តោតសំខាន់លើ <strong>កម្មបទ (Object)</strong> ឬលទ្ធផលនៃសកម្មភាពជាជាងអ្នកធ្វើ៖</p>
              <div class="reader-callout reader-callout-gold">
                <p><strong>Active:</strong> Mr. Ol created this interactive learning platform.<br>
                <strong>Passive:</strong> This interactive learning platform <strong>was created</strong> by Mr. Ol.</p>
              </div>
              <h3>២. តារាងរូបមន្ត Passive Voice</h3>
              <ul>
                <li><strong>Present Simple:</strong> am/is/are + V3 (Past Participle)</li>
                <li><strong>Past Simple:</strong> was/were + V3</li>
                <li><strong>Future Simple:</strong> will be + V3</li>
                <li><strong>Present Perfect:</strong> have/has been + V3</li>
              </ul>
            `
          }
        ]
      }
    ],

    "grade-12": [
      {
        id: "en-g12-ch1",
        title: "ជំពូកទី ១៖ ប្រយោគលក្ខខណ្ឌ និងត្រៀមបាក់ឌុប (Conditionals & BacII Prep)",
        desc: "ប្រយោគលក្ខខណ្ឌ Conditional Types 0, 1, 2, 3 ត្រៀមប្រឡងបាក់ឌុប",
        lessons: [
          {
            id: "en-g12-l1",
            title: "មេរៀនទី ១៖ Conditional Sentences (Types 1, 2, 3)",
            duration: "២៥ នាទីអាន",
            lead: "មេរៀនស្នូលដែលតែងតែចេញក្នុងវិញ្ញាសាបាក់ឌុបជារៀងរាល់ឆ្នាំ អមដោយគន្លឹះចងចាំ និងលំហាត់គំរូ។",
            content: `
              <h3>១. ប្រៀបធៀបលក្ខខណ្ឌទាំង ៤ ប្រភេទ</h3>
              
              <div class="reader-concept-grid">
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Type 0 (Fact)</div>
                  <div class="reader-concept-def">
                    <strong>If + Present Simple, Present Simple</strong><br>
                    ការពិតវិទ្យាសាស្ត្រ៖ <em>If you heat ice, it melts.</em>
                  </div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Type 1 (Real Future)</div>
                  <div class="reader-concept-def">
                    <strong>If + Present Simple, will + Verb</strong><br>
                    អាចកើតឡើងពិតប្រាកដ៖ <em>If you study hard, you will pass the BacII exam.</em>
                  </div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Type 2 (Unreal Present)</div>
                  <div class="reader-concept-def">
                    <strong>If + Past Simple, would + Verb</strong><br>
                    ការស្រមើស្រមៃពេលបច្ចុប្បន្ន៖ <em>If I were you, I would take that opportunity.</em>
                  </div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Type 3 (Regret in Past)</div>
                  <div class="reader-concept-def">
                    <strong>If + Past Perfect, would have + V3</strong><br>
                    ស្តាយក្រោយក្នុងអតីតកាល៖ <em>If they had left earlier, they would not have missed the bus.</em>
                  </div>
                </div>
              </div>

              <div class="reader-practice-box">
                <h4>✍️ សំណួរវិញ្ញាសាបាក់ឌុបគំរូ៖</h4>
                <p>"If Sokha had studied all chapters carefully, he ________________ (pass) the national exam with Grade A."</p>
                <button class="reader-check-btn" onclick="toggleReaderAnswer('ans-g12-l1')">បង្ហាញចម្លើយ & ការបកស្រាយ</button>
                <div id="ans-g12-l1" class="reader-answer-reveal">
                  ✅ <strong>ចម្លើយត្រឹមត្រូវ៖ would have passed</strong><br>
                  <em>ការបកស្រាយ៖</em> If-clause ប្រើ Past Perfect (had studied) ដូច្នេះ Main clause ត្រូវតែប្រើ <strong>would have + V3 (passed)</strong> តាមរូបមន្ត Conditional Type 3។
                </div>
              </div>
            `
          },
          {
            id: "en-g12-l2",
            title: "មេរៀនទី ២៖ Reading Comprehension Mastery: Skimming & Scanning",
            duration: "២០ នាទីអាន",
            lead: "យុទ្ធសាស្ត្រដោះស្រាយអត្ថបទអំណានបាក់ឌុបឱ្យបានពិន្ទុពេញ ក្នុងរយៈពេលដ៏ខ្លី និងមានប្រសិទ្ធភាពខ្ពស់។",
            content: `
              <h3>១. ភាពខុសគ្នារវាង Skimming និង Scanning</h3>
              <ul>
                <li><strong>Skimming (ការអានត្រួសៗ):</strong> អានចំណងជើង កថាខណ្ឌដើម និងចុង ដើម្បីចាប់យក Main Idea ក្នុងរយៈពេល ១-២ នាទី។</li>
                <li><strong>Scanning (ការរាវរកព័ត៌មានជាក់លាក់):</strong> ភ្នែកស្កេនរកពាក្យគន្លឹះ លេខ ឆ្នាំ ឬឈ្មោះមនុស្ស ដោយមិនចាំបាច់អានពាក្យគ្រប់តួ។</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  // ==========================================
  // COMPUTER SCIENCE CURRICULUM (វិទ្យាសាស្ត្រកុំព្យូទ័រ)
  // ==========================================
  computer: {
    "grade-9": [
      {
        id: "cs-g9-ch1",
        title: "ជំពូកទី ១៖ ស្គាល់កុំព្យូទ័រ និងសុវត្ថិភាពឌីជីថល (Hardware & Digital Safety)",
        desc: "ស្គាល់ពីកុំព្យូទ័រ ប្រព័ន្ធប្រតិបត្តិការ និងសុវត្ថិភាពឌីជីថល",
        lessons: [
          {
            id: "cs-g9-l1",
            title: "មេរៀនទី ១៖ Hardware Components & Motherboard Architecture",
            duration: "១៥ នាទីអាន",
            lead: "ស្វែងយល់ពីតួនាទីរបស់ CPU (ខួរក្បាល), RAM (អង្គចងចាំបណ្តោះអាសន្ន), SSD/HDD និង GPU។",
            content: `
              <h3>១. គ្រឿងបង្គុំសំខាន់ៗនៃកុំព្យូទ័រ (Computer Hardware)</h3>
              <p>កុំព្យូទ័រដំណើរការតាមវដ្ត៖ <strong>Input &rarr; Processing &rarr; Storage &rarr; Output</strong>។</p>

              <div class="reader-concept-grid">
                <div class="reader-concept-card">
                  <div class="reader-concept-term">CPU (Central Processing Unit)</div>
                  <div class="reader-concept-def">ខួរក្បាលកណ្តាលរបស់កុំព្យូទ័រ ធ្វើការគណនាកូដ និងតក្កវិជ្ជាទាំងអស់។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">RAM (Random Access Memory)</div>
                  <div class="reader-concept-def">អង្គចងចាំល្បឿនលឿនសម្រាប់ផ្ទុកទិន្នន័យដែលកម្មវិធីកំពុងដំណើរការផ្ទាល់។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">SSD (Solid State Drive)</div>
                  <div class="reader-concept-def">អង្គផ្ទុកទិន្នន័យអចិន្ត្រៃយ៍ដែលមានល្បឿនអាន/សរសេរលឿនជាង HDD ចាស់ៗរហូតដល់ ១០ ដង។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Motherboard</div>
                  <div class="reader-concept-def">ផ្ទាំងសៀគ្វីមេដែលភ្ជាប់គ្រឿងបន្លាស់ទាំងអស់ឲ្យទាក់ទងគ្នាបានយ៉ាងរលូន។</div>
                </div>
              </div>
            `
          },
          {
            id: "cs-g9-l2",
            title: "មេរៀនទី ២៖ Internet Safety & Strong Passwords",
            duration: "១២ នាទីអាន",
            lead: "វិធីការពារគណនី Facebook, Telegram, Google ពីការលួច (Hacking) និងការក្លែងបន្លំ (Phishing)។",
            content: `
              <h3>១. ច្បាប់ ៣ យ៉ាងដើម្បីសុវត្ថិភាពគណនី</h3>
              <ul>
                <li><strong>ប្រើលេខសម្ងាត់រឹងមាំ (Strong Password):</strong> យ៉ាងតិច ១២ ខ្ទង់ មានអក្សរធំ តូច លេខ និងនិមិត្តសញ្ញា (@, #, $...)។</li>
                <li><strong>បើកដំណើរការ 2FA (Two-Factor Authentication):</strong> បញ្ជាក់កូដតាមទូរស័ព្ទដៃបន្ថែមលើ Password។</li>
                <li><strong>ប្រយ័ត្នតំណភ្ជាប់ចម្លែក (Phishing Links):</strong> កុំចុចលើ Link ដែលផ្ញើមកតាម Chat ដោយគ្មានប្រភពច្បាស់លាស់។</li>
              </ul>
            `
          }
        ]
      }
    ],

    "grade-10": [
      {
        id: "cs-g10-ch1",
        title: "ជំពូកទី ១៖ ការប្រើប្រាស់កម្មវិធីការិយាល័យ (Office Productivity & Cloud)",
        desc: "ការប្រើប្រាស់ Word, Excel, PowerPoint និង Google Workspace ក្នុងវិទ្យាល័យ",
        lessons: [
          {
            id: "cs-g10-l1",
            title: "មេរៀនទី ១៖ Microsoft Word Formatting & Academic Reports",
            duration: "១៥ នាទីអាន",
            lead: "ការរៀបចំឯកសារកិច្ចការស្រាវជ្រាវ គម្រោងសិស្ស ដោយប្រើ Heading Styles, Table of Contents និង Margin។",
            content: `
              <h3>១. ការកំណត់រចនាសម្ព័ន្ធឯកសារបែប Professional</h3>
              <p>ការសរសេររបាយការណ៍ និងកិច្ចតែងការបង្រៀនឱ្យមានស្តង់ដារតម្រូវឲ្យកំណត់ទំព័រដូចខាងក្រោម៖</p>
              <ul>
                <li><strong>Margin ស្តង់ដារ៖</strong> Top: 1 inch (2.54cm), Bottom: 1 inch, Left: 1.25 inch (សម្រាប់ដេរក្បាល), Right: 1 inch</li>
                <li><strong>ពុម្ពអក្សរខ្មែរ៖</strong> ប្រើ 'Kantumruy Pro' ឬ 'Koh Santepheap' ទំហំ 11-12pt</li>
                <li><strong>ពុម្ពអក្សរអង់គ្លេស៖</strong> ប្រើ 'Times New Roman' ឬ 'Plus Jakarta Sans' ទំហំ 12pt</li>
              </ul>
            `
          },
          {
            id: "cs-g10-l2",
            title: "មេរៀនទី ២៖ Excel Formulas: SUM, AVERAGE, IF & RANK",
            duration: "២០ នាទីអាន",
            lead: "រូបមន្ត Excel សំខាន់ៗសម្រាប់គណនាពិន្ទុ មធ្យមភាគ និងចំណាត់ថ្នាក់សិស្សក្នុងថ្នាក់រៀន។",
            content: `
              <h3>១. រូបមន្តគណនាពិន្ទុមធ្យមភាគ និងនិទ្ទេស</h3>
              <div class="reader-code-box">
                <div class="reader-code-header"><span>Excel Formulas</span><span>Sheet1</span></div>
=SUM(C2:G2)               // បូកសរុបពិន្ទុគ្រប់មុខវិជ្ជា
=AVERAGE(C2:G2)           // រកពិន្ទុមធ្យមភាគ
=IF(H2>=50, "ជាប់", "ធ្លាក់") // លក្ខខណ្ឌកំណត់ជាប់ ឬធ្លាក់
=RANK(H2, $H$2:$H$45)     // កំណត់ចំណាត់ថ្នាក់លេខ ១ ដល់ ៤៥ ក្នុងថ្នាក់
              </div>
            `
          }
        ]
      }
    ],

    "grade-11": [
      {
        id: "cs-g11-ch1",
        title: "ជំពូកទី ១៖ ការសរសេរកូដគេហទំព័រគ្រឹះ (HTML5 & CSS3 Web Development)",
        desc: "ការសរសេរកូដគេហទំព័រដំបូងបង្អស់នៅក្នុងបន្ទប់ ICT Lab",
        lessons: [
          {
            id: "cs-g11-l1",
            title: "មេរៀនទី ១៖ Semantic HTML Tags & Page Layout",
            duration: "២០ នាទីអាន",
            lead: "រៀនសូត្រពី <!DOCTYPE html>, <header>, <nav>, <main>, <section>, <article>, <footer> តាមស្តង់ដារ W3C។",
            content: `
              <h3>១. រចនាសម្ព័ន្ធគ្រឹះនៃទំព័រ HTML5</h3>
              <p>រាល់ឯកសារគេហទំព័រទំនើបតែងតែចាប់ផ្តើមដោយ Semantic tags ដែលជួយដល់ SEO និង Accessibility៖</p>

              <div class="reader-code-box">
                <div class="reader-code-header"><span>HTML5 Document</span><span>index.html</span></div>
&lt;!DOCTYPE html&gt;
&lt;html lang="km"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;ទំព័រដំបូងរបស់ខ្ញុំ&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;សូមស្វាគមន៍មកកាន់គេហទំព័រខ្ញុំ!&lt;/h1&gt;
  &lt;/header&gt;
  &lt;main&gt;
    &lt;p&gt;ខ្ញុំកំពុងរៀនកូដជាមួយលោកគ្រូ អ៊ូច អុល។&lt;/p&gt;
  &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;
              </div>

              <h3>២. Tags សំខាន់ៗដែលត្រូវចងចាំ</h3>
              <ul>
                <li><code>&lt;a href="url"&gt;</code>: បង្កើតតំណភ្ជាប់ (Hyperlink)</li>
                <li><code>&lt;img src="path" alt="desc"&gt;</code>: បង្ហាញរូបភាពលើគេហទំព័រ</li>
                <li><code>&lt;ul&gt; &amp; &lt;li&gt;</code>: បង្កើតបញ្ជីដែលគ្មានលេខរៀង (Unordered List)</li>
              </ul>
            `
          },
          {
            id: "cs-g11-l2",
            title: "មេរៀនទី ២៖ CSS Styling: Colors, Flexbox & Layout",
            duration: "២៥ នាទីអាន",
            lead: "តុបតែងគេហទំព័រឱ្យមានសោភ័ណភាព ពណ៌ស្រស់ស្អាត និងរៀបចំ Layout ដោយប្រើ Modern Flexbox។",
            content: `
              <h3>១. ការប្រើប្រាស់ Display: Flex</h3>
              <p>Flexbox គឺជាឧបករណ៍ដ៏មានឥទ្ធិពលបំផុតក្នុងការតម្រៀបធាតុ (Elements) ឱ្យនៅផ្ដេក ឬបញ្ឈរស្មើៗគ្នា៖</p>
              <div class="reader-code-box">
                <div class="reader-code-header"><span>CSS3 Stylesheet</span><span>style.css</span></div>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f172a;
  padding: 16px 24px;
}
              </div>
            `
          }
        ]
      }
    ],

    "grade-12": [
      {
        id: "cs-g12-ch1",
        title: "ជំពូកទី ១៖ ក្បួនដោះស្រាយ និងតក្កវិជ្ជាកូដ (Algorithms & Logic)",
        desc: "ក្បួនដោះស្រាយ និងការគិតបែបវិទ្យាសាស្ត្រកុំព្យូទ័រ (Computational Thinking)",
        lessons: [
          {
            id: "cs-g12-l1",
            title: "មេរៀនទី ១៖ Flowchart, Pseudocode & Conditional Logic",
            duration: "២២ នាទីអាន",
            lead: "ដោះស្រាយបញ្ហាជាជំហានៗដោយប្រើ Flowchart (Start/End, Process, Decision, Input/Output) និង Pseudocode។",
            content: `
              <h3>១. និមិត្តសញ្ញា Flowchart សំខាន់ៗ</h3>
              <div class="reader-concept-grid">
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Oval (Start / End)</div>
                  <div class="reader-concept-def">សម្គាល់ចំណុចចាប់ផ្តើម ឬបញ្ចប់នៃកម្មវិធី។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Rectangle (Process)</div>
                  <div class="reader-concept-def">ការគណនាទិន្នន័យ (e.g., Total = A + B)។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Diamond (Decision)</div>
                  <div class="reader-concept-def">ការសម្រេចចិត្តបែប If/Else ដែលមានលទ្ធផល Yes ឬ No។</div>
                </div>
                <div class="reader-concept-card">
                  <div class="reader-concept-term">Parallelogram (I/O)</div>
                  <div class="reader-concept-def">ការទទួលព័ត៌មានពីអ្នកប្រើ (Input) ឬបង្ហាញលើអេក្រង់ (Output)។</div>
                </div>
              </div>
            `
          },
          {
            id: "cs-g12-l2",
            title: "មេរៀនទី ២៖ JavaScript Basics: Variables, Loops & Functions",
            duration: "២៥ នាទីអាន",
            lead: "ភាសាកូដ JavaScript ដើម្បីបង្កើតអន្តរកម្មលើគេហទំព័រ ដូចជាប៊ូតុងចុច និងការគណនាស្វ័យប្រវត្តិ។",
            content: `
              <h3>១. អថេរ (Variables) និង Function ក្នុង JavaScript</h3>
              <div class="reader-code-box">
                <div class="reader-code-header"><span>JavaScript</span><span>script.js</span></div>
// អនុគមន៍គណនាពិន្ទុ
function calculateGrade(score) {
  if (score >= 90) {
    return "Grade A (ល្អប្រសើរ)";
  } else if (score >= 80) {
    return "Grade B (ល្អណាស់)";
  } else if (score >= 50) {
    return "Grade E (ជាប់)";
  } else {
    return "Grade F (ធ្លាក់)";
  }
}

console.log(calculateGrade(92)); // Output: Grade A
              </div>
            `
          }
        ]
      }
    ]
  }
};

// Global state for Reader
let currentReaderSubject = 'english';
let currentReaderGrade = 'grade-10';
let currentReaderLessonId = null;
let currentMobileView = 'content'; // 'syllabus' | 'content'
let readerContainerEl = null;

// Persistent read completion tracker
let completedLessons = new Set();
try {
  const saved = localStorage.getItem('mr_ol_read_lessons');
  if (saved) {
    JSON.parse(saved).forEach(id => completedLessons.add(id));
  }
} catch (e) {
  console.warn('LocalStorage error:', e);
}

function saveCompletedLessons() {
  try {
    localStorage.setItem('mr_ol_read_lessons', JSON.stringify([...completedLessons]));
  } catch (e) {}
}

/**
 * Initialize Reader Component inside target container
 */
function initLessonsReader(container) {
  if (!container) return;
  readerContainerEl = container;

  // Read URL params
  const urlParams = new URLSearchParams(window.location.search);
  const subjParam = urlParams.get('subject');
  const gradeParam = urlParams.get('grade');
  const lessonParam = urlParams.get('lesson');

  if (subjParam && (subjParam === 'english' || subjParam === 'computer')) {
    currentReaderSubject = subjParam;
  }
  if (gradeParam) {
    if (gradeParam.startsWith('grade-')) {
      currentReaderGrade = gradeParam;
    } else if (['9', '10', '11', '12'].includes(gradeParam)) {
      currentReaderGrade = `grade-${gradeParam}`;
    }
  }

  // Pre-select first lesson if none provided
  const chapters = (courseCurriculumData[currentReaderSubject] && courseCurriculumData[currentReaderSubject][currentReaderGrade]) || [];
  if (lessonParam) {
    currentReaderLessonId = lessonParam;
  } else if (chapters.length > 0 && chapters[0].lessons.length > 0) {
    currentReaderLessonId = chapters[0].lessons[0].id;
  }

  renderReaderComponent(container);
}

/**
 * Render the entire Reader UI shell
 */
function renderReaderComponent(container) {
  if (!container) container = readerContainerEl;
  if (!container) return;

  const chapters = (courseCurriculumData[currentReaderSubject] && courseCurriculumData[currentReaderSubject][currentReaderGrade]) || [];

  // Default to first lesson if current not found in current course
  if (!currentReaderLessonId || !findLessonById(currentReaderLessonId)) {
    if (chapters.length > 0 && chapters[0].lessons.length > 0) {
      currentReaderLessonId = chapters[0].lessons[0].id;
    } else {
      currentReaderLessonId = null;
    }
  }

  const totalCount = countTotalLessons(chapters);
  const doneCount = chapters.reduce((acc, ch) => acc + ch.lessons.filter(l => completedLessons.has(l.id)).length, 0);
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
  const gradeNum = currentReaderGrade.replace('grade-', '');
  const subjectName = currentReaderSubject === 'english' ? 'ភាសាអង់គ្លេស (English)' : 'វិទ្យាសាស្ត្រកុំព្យូទ័រ (Computer Science)';
  const subjectEmoji = currentReaderSubject === 'english' ? '🇬🇧' : '💻';

  container.innerHTML = `
    <div class="lp-container">
      <!-- 1. Top Control & Summary Bar -->
      <header class="lp-topbar">
        <div class="lp-topbar-left">
          <span class="lp-course-badge">${subjectEmoji} ថ្នាក់ទី ${gradeNum}</span>
          <div class="lp-course-title">${subjectName}</div>
        </div>

        <div class="lp-topbar-right">
          <!-- Mobile Syllabus Toggle -->
          <button class="lp-mobile-view-toggle" onclick="toggleMobileView()">
            <span id="mobile-toggle-icon">📋</span>
            <span id="mobile-toggle-text">${currentMobileView === 'syllabus' ? '📖 អានមេរៀន' : '📋 មាតិកា'}</span>
          </button>

          <!-- Study Progress Tracker -->
          <div class="lp-progress-wrap" title="វឌ្ឍនភាពនៃការអាន">
            <div class="lp-progress-bar-bg">
              <div class="lp-progress-bar-fill" id="lp-progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="lp-progress-label" id="lp-progress-text">បានអាន ${doneCount}/${totalCount} (${pct}%)</span>
          </div>
        </div>
      </header>

      <!-- 2. Main Workspace: Left Syllabus Sidebar + Right Reading Canvas -->
      <div class="lp-workspace ${currentMobileView === 'syllabus' ? 'view-syllabus' : 'view-content'}" id="lp-workspace">
        <!-- LEFT SIDEBAR: Course Syllabus Accordion -->
        <aside class="lp-sidebar">
          <div class="lp-sidebar-header">
            <h4 class="lp-sidebar-title">
              <span>📚</span>
              <span>មាតិកាមេរៀន (Syllabus)</span>
            </h4>
            <span class="lp-sidebar-meta" id="lp-sidebar-count">${chapters.length} ជំពូក • ${totalCount} មេរៀន</span>
          </div>

          <!-- Live Search Input -->
          <div class="lp-search-box">
            <div class="lp-search-input-wrap">
              <span class="lp-search-input-icon">🔍</span>
              <input
                type="text"
                class="lp-search-input"
                placeholder="ស្វែងរកមេរៀនក្នុងមាតិកា..."
                oninput="filterReaderLessons(this.value)"
                autocomplete="off"
              />
            </div>
          </div>

          <!-- Chapters Accordion -->
          <div class="lp-chapters-list" id="lp-chapters-list">
            ${renderChaptersAccordion(chapters)}
          </div>
        </aside>

        <!-- RIGHT CONTENT AREA: Lecture Reading Canvas -->
        <main class="lp-content-view">
          <div class="lp-article-container" id="lp-article-container">
            ${renderActiveLessonContent()}
          </div>
        </main>
      </div>
    </div>
  `;
}

/**
 * Render chapters and lessons accordion for sidebar
 */
function renderChaptersAccordion(chapters) {
  if (!chapters || chapters.length === 0) {
    return `
      <div style="padding: 32px 20px; color: var(--lp-text-muted); text-align: center; font-size: 0.88rem;">
        <div style="font-size: 1.8rem; margin-bottom: 8px;">📂</div>
        មិនទាន់មានមាតិកាសម្រាប់កម្រិតថ្នាក់នេះនៅឡើយទេ
      </div>
    `;
  }

  return chapters.map((ch, idx) => {
    const hasActive = ch.lessons.some(l => l.id === currentReaderLessonId);
    const isOpen = hasActive || idx === 0;
    const doneInCh = ch.lessons.filter(l => completedLessons.has(l.id)).length;

    return `
      <div class="lp-chapter-item" data-ch-id="${ch.id}">
        <button class="lp-chapter-btn ${isOpen ? 'open' : ''}" onclick="toggleChapterAccordion('${ch.id}')">
          <div class="lp-chapter-left">
            <div class="lp-chapter-title">${ch.title}</div>
            <div class="lp-chapter-meta">
              <span>${ch.lessons.length} មេរៀន</span>
              <span>•</span>
              <span class="lp-done-meta">${doneInCh}/${ch.lessons.length} បានអាន</span>
            </div>
          </div>
          <span class="lp-chapter-arrow">▼</span>
        </button>

        <div class="lp-lessons-sublist ${isOpen ? 'open' : ''}" id="lecture-list-${ch.id}">
          ${ch.lessons.map(lesson => {
            const isDone = completedLessons.has(lesson.id);
            const isActive = lesson.id === currentReaderLessonId;

            return `
              <button class="lp-lesson-row ${isActive ? 'active' : ''}" onclick="selectReaderLesson('${lesson.id}')">
                <div class="lp-checkbox ${isDone ? 'checked' : ''}">${isDone ? '✓' : ''}</div>
                <div class="lp-lesson-info">
                  <div class="lp-lesson-name">${lesson.title}</div>
                  <div class="lp-lesson-meta">
                    <span>📄 មេរៀន</span>
                    <span>•</span>
                    <span>${lesson.duration}</span>
                  </div>
                </div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render active lecture article reading canvas
 */
function renderActiveLessonContent() {
  const found = findLessonById(currentReaderLessonId);

  if (!found) {
    return `
      <div style="text-align: center; padding: 80px 20px;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">📖</div>
        <h3 style="color: var(--lp-text-primary); margin-bottom: 8px;">សូមជ្រើសរើសមេរៀនមួយពី Sidebar ខាងឆ្វេង</h3>
        <p style="color: var(--lp-text-secondary); max-width: 420px; margin: 0 auto;">អ្នកអាចចុចលើជំពូកណាមួយក្នុងបញ្ជីមាតិកា ដើម្បីពន្លា និងចាប់ផ្តើមអានមេរៀនលម្អិត។</p>
      </div>
    `;
  }

  const { lesson, chapter, prevLesson, nextLesson } = found;
  const gradeNum = currentReaderGrade.replace('grade-', '');
  const subjectName = currentReaderSubject === 'english' ? 'ភាសាអង់គ្លេស' : 'វិទ្យាសាស្ត្រកុំព្យូទ័រ';
  const isDone = completedLessons.has(lesson.id);

  return `
    <div class="lp-article-header">
      <div class="lp-article-meta-row">
        <span class="lp-tag tag-emerald">ថ្នាក់ទី ${gradeNum}</span>
        <span class="lp-tag tag-cyan">${subjectName}</span>
        <span style="color: var(--lp-text-muted); font-size: 0.82rem;">⏱️ ${lesson.duration}</span>
        ${isDone ? '<span class="lp-tag tag-success">✓ បានអានចប់</span>' : ''}
      </div>
      <h1 class="lp-article-title">${lesson.title}</h1>
      <p class="lp-article-lead">${lesson.lead}</p>
    </div>

    <div class="lp-article-body">
      ${lesson.content}
    </div>

    <div class="lp-footer-nav">
      <div>
        ${prevLesson ? `
          <button class="lp-nav-btn" onclick="selectReaderLesson('${prevLesson.id}')">
            ← មេរៀនមុន
          </button>
        ` : `
          <button class="lp-nav-btn" disabled>← មេរៀនដំបូង</button>
        `}
      </div>

      <div>
        <button class="lp-complete-btn ${isDone ? 'completed' : ''}" onclick="markLessonDone('${lesson.id}')">
          ${isDone ? '✓ បានអានចប់ហើយ' : '☑ កំណត់ថាបានអានចប់'}
        </button>
      </div>

      <div>
        ${nextLesson ? `
          <button class="lp-nav-btn primary" onclick="selectReaderLesson('${nextLesson.id}')">
            មេរៀនបន្ទាប់ →
          </button>
        ` : `
          <button class="lp-nav-btn primary" style="background: var(--lp-emerald); border-color: var(--lp-emerald);">
            បញ្ចប់ជំពូកនេះ 🎉
          </button>
        `}
      </div>
    </div>
  `;
}

/**
 * Toggle mobile view between syllabus and content
 */
window.toggleMobileView = function() {
  currentMobileView = (currentMobileView === 'syllabus') ? 'content' : 'syllabus';
  const workspace = document.getElementById('lp-workspace');
  if (workspace) {
    if (currentMobileView === 'syllabus') {
      workspace.classList.remove('view-content');
      workspace.classList.add('view-syllabus');
    } else {
      workspace.classList.remove('view-syllabus');
      workspace.classList.add('view-content');
    }
  }
  const toggleBtnText = document.getElementById('mobile-toggle-text');
  if (toggleBtnText) {
    toggleBtnText.textContent = (currentMobileView === 'syllabus') ? '📖 អានមេរៀន' : '📋 មាតិកា';
  }
};

/**
 * Toggle section accordion
 */
window.toggleChapterAccordion = function(chId) {
  const list = document.getElementById(`lecture-list-${chId}`);
  const group = document.querySelector(`.lp-chapter-item[data-ch-id="${chId}"]`);
  if (!list || !group) return;

  const btn = group.querySelector('.lp-chapter-btn');
  const isOpen = list.classList.contains('open');

  if (isOpen) {
    list.classList.remove('open');
    if (btn) btn.classList.remove('open');
  } else {
    list.classList.add('open');
    if (btn) btn.classList.add('open');
  }
};

/**
 * Switch Subject (english | computer)
 */
window.switchReaderSubject = function(subject) {
  if (currentReaderSubject === subject) return;
  currentReaderSubject = subject;
  currentReaderLessonId = null;

  // Sync external deck buttons if present
  document.querySelectorAll('.subject-btn').forEach(btn => {
    if (btn.dataset.subject === subject) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderReaderComponent(readerContainerEl);
};

/**
 * Switch Grade (grade-9 | grade-10 | grade-11 | grade-12)
 */
window.switchReaderGrade = function(grade) {
  if (currentReaderGrade === grade) return;
  currentReaderGrade = grade;
  currentReaderLessonId = null;

  // Sync external deck buttons if present
  document.querySelectorAll('.grade-btn').forEach(btn => {
    if (btn.dataset.grade === grade) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderReaderComponent(readerContainerEl);
};

/**
 * Select active lesson
 */
window.selectReaderLesson = function(lessonId) {
  currentReaderLessonId = lessonId;

  // On mobile screens, automatically switch to content view
  if (window.innerWidth <= 960) {
    currentMobileView = 'content';
    const workspace = document.getElementById('lp-workspace');
    if (workspace) {
      workspace.classList.remove('view-syllabus');
      workspace.classList.add('view-content');
    }
    const toggleBtnText = document.getElementById('mobile-toggle-text');
    if (toggleBtnText) toggleBtnText.textContent = '📋 មាតិកា';
  }

  // Update active state in sidebar
  const allRows = document.querySelectorAll('.lp-lesson-row');
  allRows.forEach(row => row.classList.remove('active'));

  // Render article canvas
  const articleContainer = document.getElementById('lp-article-container');
  if (articleContainer) {
    articleContainer.innerHTML = renderActiveLessonContent();
    // Scroll content view to top
    const contentView = document.querySelector('.lp-content-view');
    if (contentView) contentView.scrollTop = 0;
  }

  // Open the parent chapter accordion if closed
  const found = findLessonById(lessonId);
  if (found && found.chapter) {
    const list = document.getElementById(`lecture-list-${found.chapter.id}`);
    const group = document.querySelector(`.lp-chapter-item[data-ch-id="${found.chapter.id}"]`);
    if (list) list.classList.add('open');
    if (group) {
      const btn = group.querySelector('.lp-chapter-btn');
      if (btn) btn.classList.add('open');
    }
  }

  // Highlight active row
  const activeBtn = document.querySelector(`.lp-lesson-row[onclick*="${lessonId}"]`);
  if (activeBtn) activeBtn.classList.add('active');
};

/**
 * Mark lesson as read / completed
 */
window.markLessonDone = function(lessonId) {
  if (completedLessons.has(lessonId)) {
    completedLessons.delete(lessonId);
  } else {
    completedLessons.add(lessonId);
  }

  saveCompletedLessons();

  // Update progress bar
  const chapters = (courseCurriculumData[currentReaderSubject] && courseCurriculumData[currentReaderSubject][currentReaderGrade]) || [];
  const totalCount = countTotalLessons(chapters);
  const doneCount = chapters.reduce((acc, ch) => acc + ch.lessons.filter(l => completedLessons.has(l.id)).length, 0);
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  const barFill = document.getElementById('lp-progress-fill');
  const barText = document.getElementById('lp-progress-text');
  if (barFill) barFill.style.width = `${pct}%`;
  if (barText) barText.textContent = `បានអាន ${doneCount}/${totalCount} (${pct}%)`;

  // Update checkbox state in sidebar
  const rows = document.querySelectorAll('.lp-lesson-row');
  rows.forEach(row => {
    if (row.getAttribute('onclick')?.includes(lessonId)) {
      const box = row.querySelector('.lp-checkbox');
      if (box) {
        if (completedLessons.has(lessonId)) {
          box.classList.add('checked');
          box.textContent = '✓';
        } else {
          box.classList.remove('checked');
          box.textContent = '';
        }
      }
    }
  });

  // Re-render active lesson content footer
  const articleContainer = document.getElementById('lp-article-container');
  if (articleContainer) {
    articleContainer.innerHTML = renderActiveLessonContent();
  }
};

/**
 * Live search filter across lessons
 */
window.filterReaderLessons = function(query) {
  const q = (query || '').toLowerCase().trim();
  const sections = document.querySelectorAll('.lp-chapter-item');

  sections.forEach(sec => {
    const rows = sec.querySelectorAll('.lp-lesson-row');
    let hasMatch = false;

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        row.style.display = 'flex';
        hasMatch = true;
      } else {
        row.style.display = 'none';
      }
    });

    const btn = sec.querySelector('.lp-chapter-btn');
    const btnText = btn ? btn.textContent.toLowerCase() : '';
    if (btnText.includes(q)) hasMatch = true;

    if (hasMatch) {
      sec.style.display = 'block';
      if (q) {
        const list = sec.querySelector('.lp-lessons-sublist');
        if (list) list.classList.add('open');
        if (btn) btn.classList.add('open');
      }
    } else {
      sec.style.display = 'none';
    }
  });
};

/**
 * Toggle inline practice answer reveal
 */
window.toggleReaderAnswer = function(elemId) {
  const el = document.getElementById(elemId);
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
};

/**
 * Helper to count total lessons in chapter list
 */
function countTotalLessons(chapters) {
  if (!chapters) return 0;
  return chapters.reduce((sum, ch) => sum + (ch.lessons ? ch.lessons.length : 0), 0);
}

/**
 * Helper to find lesson metadata by ID
 */
function findLessonById(lessonId) {
  const chapters = (courseCurriculumData[currentReaderSubject] && courseCurriculumData[currentReaderSubject][currentReaderGrade]) || [];
  
  const allLessons = [];
  chapters.forEach(ch => {
    ch.lessons.forEach(l => {
      allLessons.push({ lesson: l, chapter: ch });
    });
  });

  const idx = allLessons.findIndex(item => item.lesson.id === lessonId);
  if (idx === -1) return null;

  return {
    lesson: allLessons[idx].lesson,
    chapter: allLessons[idx].chapter,
    prevLesson: idx > 0 ? allLessons[idx - 1].lesson : null,
    nextLesson: idx < allLessons.length - 1 ? allLessons[idx + 1].lesson : null
  };
}

// Export initialization for teaching.js
window.initLessonsReader = initLessonsReader;
window.courseCurriculumData = courseCurriculumData;
