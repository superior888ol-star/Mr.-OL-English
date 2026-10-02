/**
 * Mr. OL English E-Learning Platform
 * Complete Grammar Syllabus & Handwritten Study Sheet Engine
 * Covers:
 * 1. Parts of Speech (Nouns, Pronouns, Verbs, Adverbs, Adjectives, Prepositions, Conjunctions, Interjections)
 * 2. Articles (Definite "The", Indefinite "A / An", Zero Articles Ø)
 * 3. English Tenses (Present, Past, Future - All 12 Tenses)
 * 4. Passive Voice & Active Voice / Clauses (Independent & Dependent: Noun, Adjective, Adverb Clauses)
 * 5. Sentence Structures & Fragments (4 Sentence Types, 5 Patterns, Fragment & Run-on Fixes)
 */

window.GRAMMAR_MASTER_DATA = {
  // =========================================================================
  // MODULE 1: PARTS OF SPEECH
  // =========================================================================
  nouns: {
    id: "nouns",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Nouns (នាម)",
    subtitle: "Kinds of Nouns, Singular & Plural, Countable & Uncountable",
    badge: "1.1 Parts of Speech",
    hwSummary: {
      title: "Nouns: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Hun Sen Svay Thom</div>
          <div class="hw-title">★ NOUNS (នាម) = Name of Person, Place, Thing or Idea</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. KINDS OF NOUNS</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">Proper:</span> Specific name (Capitals!) ➔ <em>Mr. Ol, Siem Reap</em></li>
                <li><span class="hw-hl cyan">Common:</span> General item ➔ <em>teacher, laptop, school</em></li>
                <li><span class="hw-hl lime">Abstract:</span> Feeling/Concept ➔ <em>wisdom, bravery, love</em></li>
                <li><span class="hw-hl pink">Concrete:</span> Physical ➔ <em>book, desk, bell</em></li>
                <li><span class="hw-hl orange">Collective:</span> Group ➔ <em>team, class, staff</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. COUNTABLE vs UNCOUNTABLE</div>
              <div class="hw-formula">[Countable] ➔ One apple, Two apples (Uses a/an, many, few)</div>
              <div class="hw-formula">[Uncountable] ➔ Water, Information, Rice (Uses much, little, some. NO plural!)</div>
              <div class="hw-tip">⚠️ Danger Trap: "Informations" ❌ ➔ "Information" or "A piece of information" ✅</div>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">3. PLURALIZATION RULES & IRREGULARS</div>
            <div class="hw-flow">
              <span>+s (cats)</span> ➔ 
              <span>-ch/-sh/-ss/-x/+es (boxes)</span> ➔ 
              <span>consonant + y ➔ -ies (cities)</span> ➔ 
              <span>-f/-fe ➔ -ves (life ➔ lives)</span>
            </div>
            <div class="hw-irregulars">
              Irregular Must-Knows: man ➔ men | child ➔ children | tooth ➔ teeth | foot ➔ feet | mouse ➔ mice | person ➔ people | sheep ➔ sheep
            </div>
          </div>
        </div>
      `
    },
    meaning: "A noun is a naming word that represents a person, place, thing, substance, animal, quality, or abstract idea. In Khmer, នាម គឺជាពាក្យដែលប្រើសម្រាប់សម្គាល់ឈ្មោះមនុស្ស សត្វ វត្ថុ ទីកន្លែង ឬគំនិតអរូបី។",
    formation: [
      { rule: "Noun Suffixes (Noun Formations)", detail: "-tion/-sion (education), -ment (development), -ness (kindness), -ity (activity), -ship (friendship), -er/-or (teacher, educator), -ance/-ence (importance, difference)." },
      { rule: "Compound Nouns", detail: "Formed by joining two words: Noun + Noun (classroom), Adjective + Noun (whiteboard), Verb + Noun (swimming pool)." }
    ],
    use: "Nouns function as the Subject of a sentence, the Direct or Indirect Object of a verb, the Object of a preposition, or a Subject Complement.",
    kinds: [
      { name: "Proper Nouns (នាមអសាធារណ៍)", desc: "Names of specific individuals, places, days, or organizations. Always capitalized.", example: "Mr. Ol, Siem Reap, Cambodia, Monday, UNESCO" },
      { name: "Common Nouns (នាមសាធារណ៍)", desc: "General names for people, places, or items in a class.", example: "teacher, school, dictionary, student, river" },
      { name: "Concrete Nouns (រូបនាម)", desc: "Nouns that can be experienced through the 5 physical senses (see, touch, hear, smell, taste).", example: "notebook, chalk, computer, flower, coffee" },
      { name: "Abstract Nouns (អរូបនាម)", desc: "Ideas, qualities, feelings, or states of being that cannot be physically touched.", example: "knowledge, happiness, courage, honesty, patience" },
      { name: "Collective Nouns (នាមសមូហភាព)", desc: "Words denoting a group of individuals or things acting as a unit.", example: "family, committee, class, jury, flock of birds" },
      { name: "Countable Nouns (នាមរាប់បាន)", desc: "Items that can be separated and counted individually. Take singular and plural forms.", example: "one pen ➔ three pens; a student ➔ five students" },
      { name: "Uncountable / Mass Nouns (នាមរាប់មិនបាន)", desc: "Substances, concepts, or collective masses that cannot be counted directly with numbers.", example: "water, advice, information, furniture, homework, luggage, money" }
    ],
    exceptionalRules: [
      "Plural in form but singular in meaning (takes singular verb): News, Mathematics, Physics, Economics, Gymnastics, Athletics. Example: 'The news is encouraging.' (NOT are).",
      "Always plural and take plural verbs: Scissors, trousers, glasses, tweezers, jeans, clothes. Example: 'These scissors are sharp.' (Use 'a pair of scissors' for singular quantity).",
      "Nouns that can be both Countable and Uncountable with meaning change: 'Coffee' (drink/mass: I love coffee) vs 'A coffee' (a cup of coffee); 'Hair' (all hair on head) vs 'A hair' (a single strand); 'Paper' (material) vs 'A paper' (newspaper or research report).",
      "Uncountable words that students frequently pluralize wrongly: Advice (never advices), Information (never informations), Equipment (never equipments), Furniture (never furnitures), Homework (never homeworks)."
    ],
    examples: [
      { en: "Teacher Ouch Ol teaches English and Computer Science at Hun Sen Svay Thom.", kh: "លោកគ្រូ អ៊ូច អុល បង្រៀនភាសាអង់គ្លេស និងវិទ្យាសាស្ត្រកុំព្យូទ័រនៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ។", note: "Proper nouns: Ouch Ol, English, Hun Sen Svay Thom" },
      { en: "The dedicated staff gives valuable advice to enthusiastic students.", kh: "បុគ្គលិកដែលមានការលះបង់ផ្តល់ដំបូន្មានដ៏មានតម្លៃដល់សិស្សដែលមានចិត្តចង់រៀន។", note: "Collective noun (staff), Uncountable noun (advice), Countable plural (students)" },
      { en: "Education brings wisdom, freedom, and bright opportunities.", kh: "ការអប់រំនាំមកនូវប្រាជ្ញា សេរីភាព និងឱកាសដ៏ភ្លឺស្វាង។", note: "Abstract nouns (education, wisdom, freedom) + Plural noun (opportunities)" }
    ]
  },

  pronouns: {
    id: "pronouns",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Pronouns (សព្វនាម)",
    subtitle: "Definite Pronouns, Indefinite Pronouns & Case Matrix",
    badge: "1.2 Parts of Speech",
    hwSummary: {
      title: "Pronouns: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Pronoun Case System</div>
          <div class="hw-title">★ PRONOUNS (សព្វនាម) = Replace Nouns to Prevent Repetition</div>
          
          <div class="hw-table-wrap">
            <table class="hw-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Object</th>
                  <th>Poss. Adj</th>
                  <th>Poss. Pron</th>
                  <th>Reflexive</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>I</td><td>me</td><td>my + noun</td><td>mine</td><td>myself</td></tr>
                <tr><td>You</td><td>you</td><td>your + noun</td><td>yours</td><td>yourself / -selves</td></tr>
                <tr><td>He</td><td>him</td><td>his + noun</td><td>his</td><td>himself</td></tr>
                <tr><td>She</td><td>her</td><td>her + noun</td><td>hers</td><td>herself</td></tr>
                <tr><td>It</td><td>it</td><td>its + noun</td><td>its</td><td>itself</td></tr>
                <tr><td>We</td><td>us</td><td>our + noun</td><td>ours</td><td>ourselves</td></tr>
                <tr><td>They</td><td>them</td><td>their + noun</td><td>theirs</td><td>themselves</td></tr>
              </tbody>
            </table>
          </div>

          <div class="hw-grid-2" style="margin-top:12px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">INDEFINITE PRONOUNS (Always Singular Verb!)</div>
              <div class="hw-flow">
                <span>Someone / Somebody</span><br>
                <span>Anyone / Anybody</span><br>
                <span>Everyone / Everybody</span><br>
                <span>No one / Nobody / Nothing</span>
              </div>
              <div class="hw-tip">⭐ Golden Rule: "Everyone <u>is</u> ready" (NOT are!). "Nobody <u>knows</u>" (takes -s).</div>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">REFLEXIVE vs INTENSIVE</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">Reflexive:</span> Subject = Object ➔ <em>He taught himself to code.</em></li>
                <li><span class="hw-hl cyan">Intensive:</span> Just for emphasis ➔ <em>Mr. Ol himself inspected the exam.</em></li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    meaning: "A pronoun is a word used in place of a noun or noun phrase to prevent awkward repetition and improve sentence fluency. In Khmer, សព្វនាម គឺជាពាក្យដែលប្រើជំនួសនាម ដើម្បីកុំឱ្យមានការនិយាយពាក្យដដែលៗ។",
    formation: [
      { rule: "Definite Pronoun Cases", detail: "Subject case (I/he/they), Object case (me/him/them), Possessive adjective (my/his/their + noun), Possessive pronoun (mine/his/theirs), Reflexive (-self / -selves)." },
      { rule: "Indefinite Pronoun Compounds", detail: "Formed by combining {some-, any-, every-, no-} + {-one, -body, -thing, -where}." }
    ],
    use: "Used to maintain clarity and reference back to an antecedent (the noun being replaced) without saying the noun repeatedly.",
    kinds: [
      { name: "Subjective Pronouns (សព្វនាមប្រធាន)", desc: "Perform the action of the verb as the subject.", example: "I, You, He, She, It, We, They. (e.g., 'She explained the grammar rule.')" },
      { name: "Objective Pronouns (សព្វនាមកម្មបទ)", desc: "Receive the action of the verb or act as the object of a preposition.", example: "Me, You, Him, Her, It, Us, Them. (e.g., 'The teacher guided him patiently.')" },
      { name: "Possessive Adjectives (គុណនាមកម្មសិទ្ធិ)", desc: "Precede a noun to show ownership (technically determiners).", example: "My, Your, His, Her, Its, Our, Their. (e.g., 'This is our classroom.')" },
      { name: "Possessive Pronouns (សព្វនាមកម្មសិទ្ធិ)", desc: "Stand alone without a noun to replace a possessive noun phrase.", example: "Mine, Yours, His, Hers, Ours, Theirs. (e.g., 'The high score is hers.')" },
      { name: "Reflexive Pronouns (សព្វនាមឆ្លុះបញ្ចាំង)", desc: "Used when the subject and object of the sentence are the exact same entity.", example: "Myself, Yourself, Himself, Herself, Itself, Ourselves, Yourselves, Themselves." },
      { name: "Indefinite Pronouns (សព្វនាមមិនកំណត់)", desc: "Refer to non-specific people, places, or things.", example: "someone, anyone, everyone, nobody, somebody, anything, nothing, each, neither, either" }
    ],
    exceptionalRules: [
      "Indefinite pronouns ending in -one, -body, -thing take SINGULAR verbs: 'Everyone is participating' (NOT are); 'Somebody has left their bag.'",
      "'Each', 'Either', 'Neither' take singular verbs: 'Neither of the answers is correct' (NOT are).",
      "Reflexive vs Intensive: Reflexive cannot be removed without ruining sentence sense ('He hurt himself'); Intensive is purely for emphasis and can be removed ('I built this platform myself').",
      "Formal Subject vs Informal Object in comparisons: Formal: 'He is taller than I (am)'; Informal/Colloquial: 'He is taller than me'."
    ],
    examples: [
      { en: "Nobody knew the answer until she explained it herself.", kh: "គ្មាននរណាម្នាក់ដឹងចម្លើយទេ រហូតដល់នាងបានពន្យល់វាដោយខ្លួនឯង។", note: "Indefinite (nobody) + Subject (she) + Object (it) + Intensive (herself)" },
      { en: "Teacher Ouch Ol told us that this digital library is ours to explore.", kh: "លោកគ្រូ អ៊ូច អុល បានប្រាប់យើងថាបណ្ណាល័យឌីជីថលនេះគឺជារបស់យើងសម្រាប់ស្វែងយល់។", note: "Object pronoun (us) + Possessive pronoun (ours)" },
      { en: "Each of the Grade 10 students has submitted their assignment on time.", kh: "សិស្សថ្នាក់ទី១០ម្នាក់ៗបានប្រគល់កិច្ចការរបស់ពួកគេទាន់ពេលវេលា។", note: "'Each' takes singular verb 'has'" }
    ]
  },

  verbs: {
    id: "verbs",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Verbs (កិរិយាសព្ទ)",
    subtitle: "Main, Modals, Finite vs Non-Finite, Transitive & Causatives",
    badge: "1.3 Parts of Speech",
    hwSummary: {
      title: "Verbs: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Verb Classification Map</div>
          <div class="hw-title">★ VERBS (កិរិយាសព្ទ) = Action, State of Being or Occurrence</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. TRANSITIVE vs INTRANSITIVE</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">Transitive:</span> Needs Object ➔ <em>He <u>wrote</u> an essay.</em></li>
                <li><span class="hw-hl cyan">Intransitive:</span> NO Object ➔ <em>The rain <u>stopped</u>.</em></li>
              </ul>
              <div class="hw-tip">⚡ Only Transitive verbs can become Passive Voice!</div>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. MODAL AUXILIARY VERBS</div>
              <div class="hw-formula">Subject + Modal + V_base (Bare Infinitive)</div>
              <ul class="hw-list">
                <li><b>Can/Could:</b> Ability / Polite request</li>
                <li><b>Must:</b> 100% Obligation / Strong deduction</li>
                <li><b>Should / Ought to:</b> Advice / Recommendation</li>
                <li><b>May / Might:</b> Possibility / Permission</li>
              </ul>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">3. CAUSATIVE VERBS (ធ្វើឱ្យនរណាម្នាក់ធ្វើអ្វីមួយ)</div>
            <div class="hw-grid-2">
              <div>
                <p>• <b>MAKE</b> (Force): S + make + Person + <span class="hw-hl lime">V_base</span><br>➔ <em>Teacher made him revise the test.</em></p>
                <p>• <b>LET</b> (Allow): S + let + Person + <span class="hw-hl lime">V_base</span><br>➔ <em>She let me use her tablet.</em></p>
              </div>
              <div>
                <p>• <b>HAVE</b> (Delegate): S + have + Person + <span class="hw-hl lime">V_base</span><br>➔ <em>I had the technician fix the PC.</em></p>
                <p>• <b>GET</b> (Persuade): S + get + Person + <span class="hw-hl pink">to + V_base</span><br>➔ <em>I got my friend <u>to study</u> with me.</em></p>
              </div>
            </div>
            <div class="hw-formula" style="margin-top:8px;">★ Passive Causative: S + have / get + Something + <b>V3 (Past Participle)</b> ➔ <em>I had my laptop repaired.</em></div>
          </div>
        </div>
      `
    },
    meaning: "A verb is the core engine of a sentence. It expresses physical action, mental action, state of being, or condition. In Khmer, កិរិយាសព្ទ គឺជាពាក្យដែលបញ្ជាក់អំពីសកម្មភាព ដំណើរ ឬភាពនៃប្រធាននៅក្នុងល្បះ។",
    formation: [
      { rule: "Principal Parts of a Verb", detail: "1. Base/Infinitive (V1: write), 2. Past Simple (V2: wrote), 3. Past Participle (V3: written), 4. Present Participle (V-ing: writing), 5. 3rd Person Singular (V-s/es: writes)." },
      { rule: "Regular vs Irregular", detail: "Regular verbs add -ed/-d (study ➔ studied). Irregular verbs change vowels, consonants, or stay identical (go ➔ went ➔ gone; cut ➔ cut ➔ cut)." }
    ],
    use: "Verbs tell what the subject does, what happens to the subject, or what the subject is.",
    kinds: [
      { name: "Main / Action Verbs (កិរិយាសព្ទមេ/សកម្មភាព)", desc: "Depict physical or mental action.", example: "teach, code, analyze, practice, create" },
      { name: "Stative Verbs (កិរិយាសព្ទស្ថានភាព)", desc: "Describe states, senses, feelings, or thoughts. Generally NOT used in continuous (-ing) tenses.", example: "know, understand, believe, love, smell, belong, resemble" },
      { name: "Modal Auxiliary Verbs (កិរិយាសព្ទជំនួយម៉ូដាល់)", desc: "Modify main verbs to express obligation, ability, permission, advice, or possibility.", example: "can, could, may, might, must, should, would, will, ought to" },
      { name: "Finite vs Non-Finite / Infinite Verbs", desc: "Finite verbs agree with subject and show tense (He writes); Non-finite verbs do not show tense (To write [Infinitive], Writing [Gerund], Written [Participle]).", example: "Finite: 'She speaks English.' / Non-Finite: 'She wants to speak English.'" },
      { name: "Transitive & Intransitive Verbs", desc: "Transitive verbs take a direct object (He kicked the ball). Intransitive verbs do not take an object (He arrived early).", example: "Transitive: build, write, design / Intransitive: arrive, sleep, die, exist" },
      { name: "Causative Verbs (កិរិយាសព្ទហេតុ)", desc: "Used when the subject causes someone else to perform an action (make, have, let, get, help).", example: "make someone do, have someone do, let someone do, get someone TO do" }
    ],
    exceptionalRules: [
      "Stative verbs with dual meanings: 'I have a computer' (stative: possession) vs 'I am having breakfast' (dynamic: eating); 'I think it is easy' (opinion) vs 'I am thinking about the answer' (mental action).",
      "Causative 'GET' takes 'TO + infinitive', while 'MAKE', 'HAVE', 'LET' take bare infinitive: 'I got him to join' (WITH to) vs 'I made him join' (WITHOUT to).",
      "Modals in past deduction: Must have + V3 (certain it happened: 'He must have left'); Cant have + V3 (impossible); Should have + V3 (regret: 'I should have studied harder')."
    ],
    examples: [
      { en: "Teacher Ouch Ol makes difficult ICT concepts easy to understand.", kh: "លោកគ្រូ អ៊ូច អុល ធ្វើឱ្យគោលគំនិត ICT ដ៏ពិបាកប្រែជាស្រួលយល់។", note: "Causative pattern: makes [something] + adjective" },
      { en: "You must review the Bloom's Taxonomy tests before attempting the exam.", kh: "អ្នកត្រូវតែពិនិត្យមើលតេស្ត Bloom's Taxonomy ឡើងវិញ មុនពេលចូលរួមការប្រឡង។", note: "Modal of obligation (must) + bare infinitive (review)" },
      { en: "The students had their essays evaluated by their English teacher.", kh: "សិស្សានុសិស្សបានឱ្យគ្រូបង្រៀនភាសាអង់គ្លេសរបស់ពួកគេវាយតម្លៃអត្ថបទតែងសេចក្តី។", note: "Passive causative: had + [object] + V3 (evaluated)" }
    ]
  },

  adverbs: {
    id: "adverbs",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Adverbs (គុណកិរិយា)",
    subtitle: "Meaning, Formation, Use, Kinds & Exceptional Rules",
    badge: "1.4 Parts of Speech",
    hwSummary: {
      title: "Adverbs: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Adverb Blueprint</div>
          <div class="hw-title">★ ADVERBS (គុណកិរិយា) = Modifies Verb, Adjective or another Adverb</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. KINDS OF ADVERBS</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">Manner:</span> HOW? ➔ <em>fluently, diligently, fast</em></li>
                <li><span class="hw-hl cyan">Place:</span> WHERE? ➔ <em>here, there, outside</em></li>
                <li><span class="hw-hl lime">Time:</span> WHEN? ➔ <em>yesterday, now, soon</em></li>
                <li><span class="hw-hl pink">Frequency:</span> HOW OFTEN? ➔ <em>always, often, never</em></li>
                <li><span class="hw-hl orange">Degree:</span> HOW MUCH? ➔ <em>extremely, very, quite</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. ORDER OF ADVERBS (MPT)</div>
              <div class="hw-formula">Manner + Place + Time (MPT)</div>
              <p>➔ <em>She sang <span class="hw-hl yellow">beautifully</span> [Manner] <span class="hw-hl cyan">at school</span> [Place] <span class="hw-hl lime">yesterday</span> [Time].</em></p>
              <div class="hw-tip">⚠️ Danger: Words ending in -ly that are ADJECTIVES, NOT adverbs: <em>friendly, lonely, lovely, silly</em>. (We say: "in a friendly way").</div>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">3. CRITICAL IRREGULARS & MEANING TRAPS</div>
            <div class="hw-grid-2">
              <div>
                <p>• <b>Fast</b> ➔ Fast (NO "fastly"!)<br>• <b>Hard</b> ➔ Hard (NO "hardly" as manner!)</p>
              </div>
              <div>
                <p>• <b>Hard</b> (diligent) vs <b>Hardly</b> (almost not!)<br>• <b>Late</b> (not on time) vs <b>Lately</b> (recently)</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    meaning: "An adverb is a word that modifies or describes a verb, an adjective, another adverb, or a whole clause, answering questions like How? When? Where? How often? or To what degree? In Khmer, គុណកិរិយា គឺជាពាក្យដែលបញ្ជាក់ន័យបន្ថែមឱ្យកិរិយាសព្ទ គុណនាម ឬគុណកិរិយាផ្សេងទៀត។",
    formation: [
      { rule: "Adjective + -ly", detail: "quick ➔ quickly, fluent ➔ fluently, patient ➔ patiently." },
      { rule: "Ending in consonant + -y", detail: "Change -y to -i and add -ly: happy ➔ happily, easy ➔ easily." },
      { rule: "Ending in -le", detail: "Drop -e and add -y: simple ➔ simply, gentle ➔ gently, terrible ➔ terribly." },
      { rule: "Ending in -ic", detail: "Add -ally: automatic ➔ automatically, tragic ➔ tragically." },
      { rule: "Irregular Adverb Forms", detail: "good ➔ well; fast ➔ fast; hard ➔ hard; late ➔ late; early ➔ early; straight ➔ straight." }
    ],
    use: "Placed in front position for sentence connection, mid-position before main verbs / after auxiliary verbs, or end-position after the verb and object.",
    kinds: [
      { name: "Adverbs of Manner (របៀប)", desc: "Describe HOW an action takes place.", example: "clearly, quietly, diligently, enthusiastically, fast" },
      { name: "Adverbs of Place (ទីកន្លែង)", desc: "Describe WHERE an action occurs.", example: "here, there, abroad, upstairs, everywhere, inside" },
      { name: "Adverbs of Time (ពេលវេលា)", desc: "Describe WHEN an action occurs or how long.", example: "yesterday, today, tomorrow, soon, recently, now" },
      { name: "Adverbs of Frequency (ភាពញឹកញាប់)", desc: "Describe HOW OFTEN an event happens.", example: "always (100%), usually (80%), often (60%), sometimes (50%), rarely (10%), never (0%)" },
      { name: "Adverbs of Degree (កម្រិត)", desc: "Describe INTENSITY or quantity.", example: "very, extremely, completely, fairly, quite, too, barely" }
    ],
    exceptionalRules: [
      "Adjectives ending in -ly that are NOT adverbs: friendly, lively, lovely, lonely, silly, ugly. To use them adverbially, say: 'in a friendly manner / way'.",
      "Identical Adjective & Adverb pairs: Fast (a fast car / he drove fast); Hard (a hard test / he worked hard); Late (he is late / he arrived late).",
      "Meaning Shift Traps: 'Hard' (with great energy) vs 'Hardly' (almost not at all: 'He hardly sleeps'); 'Late' (tardy) vs 'Lately' (recently); 'Near' (close) vs 'Nearly' (almost)."
    ],
    examples: [
      { en: "The students listened attentively while Mr. Ol explained the grammatical formula.", kh: "សិស្សានុសិស្សបានស្តាប់យ៉ាងយកចិត្តទុកដាក់ ខណៈពេលដែលលោកគ្រូ អ៊ូច អុល ពន្យល់រូបមន្តវេយ្យាករណ៍។", note: "Adverb of manner: attentively (modifies verb 'listened')" },
      { en: "He always reviews his lesson materials extremely thoroughly at night.", kh: "គាត់តែងតែរំលឹកឯកសារមេរៀនរបស់គាត់យ៉ាងហ្មត់ចត់បំផុតនៅពេលយប់។", note: "Frequency (always), Degree (extremely), Manner (thoroughly), Time (at night)" },
      { en: "She worked very hard and passed the national scholarship exam easily.", kh: "នាងបានខិតខំប្រឹងប្រែងយ៉ាងខ្លាំង ហើយបានប្រឡងជាប់អាហារូបករណ៍ថ្នាក់ជាតិយ៉ាងងាយស្រួល។", note: "Irregular adverb 'hard' + regular adverb 'easily'" }
    ]
  },

  adjectives: {
    id: "adjectives",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Adjectives (គុណនាម)",
    subtitle: "Meaning, Formation, Use, Kinds, OSASCOMP Order & Exceptions",
    badge: "1.5 Parts of Speech",
    hwSummary: {
      title: "Adjectives: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Adjective Mastery</div>
          <div class="hw-title">★ ADJECTIVES (គុណនាម) = Describing & Qualifying Nouns</div>
          
          <div class="hw-sketch-box">
            <div class="hw-box-head">1. THE ROYAL ORDER OF ADJECTIVES: O-S-A-S-C-O-M-P</div>
            <div class="hw-table-wrap">
              <table class="hw-table" style="font-size:0.82rem;">
                <thead><tr><th>O</th><th>S</th><th>A</th><th>S</th><th>C</th><th>O</th><th>M</th><th>P</th><th>NOUN</th></tr></thead>
                <tbody>
                  <tr>
                    <td><b>Opinion</b></td><td><b>Size</b></td><td><b>Age</b></td><td><b>Shape</b></td><td><b>Color</b></td><td><b>Origin</b></td><td><b>Material</b></td><td><b>Purpose</b></td><td><b>Thing</b></td>
                  </tr>
                  <tr>
                    <td>beautiful</td><td>large</td><td>antique</td><td>round</td><td>brown</td><td>Khmer</td><td>wooden</td><td>study</td><td>desk</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="hw-tip">⭐ Mnemonic: <u>O</u>n <u>S</u>unday <u>A</u>unt <u>S</u>ally <u>C</u>leaned <u>O</u>ur <u>M</u>other's <u>P</u>late!</div>
          </div>

          <div class="hw-grid-2" style="margin-top:12px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">2. ATTRIBUTIVE vs PREDICATIVE</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">Attributive:</span> BEFORE noun ➔ <em>An <u>inspiring</u> teacher.</em></li>
                <li><span class="hw-hl cyan">Predicative:</span> AFTER linking verb ➔ <em>The lesson is <u>inspiring</u>.</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">3. -ED vs -ING ADJECTIVES</div>
              <ul class="hw-list">
                <li><span class="hw-hl lime">-ED (Feelings):</span> <em>The students are <u>interested</u>.</em></li>
                <li><span class="hw-hl pink">-ING (Causes feeling):</span> <em>The quiz is <u>interesting</u>.</em></li>
              </ul>
              <div class="hw-tip">⚠️ Never say: "I am boring" (means you are dull!). Say: "I am bored!"</div>
            </div>
          </div>
        </div>
      `
    },
    meaning: "An adjective is a word that modifies, describes, quantifies, or identifies a noun or pronoun by giving details about its size, shape, color, quality, or origin. In Khmer, គុណនាម គឺជាពាក្យដែលបញ្ជាក់លក្ខណៈ បរិមាណ ឬគុណសម្បត្តិរបស់នាម ឬសព្វនាម។",
    formation: [
      { rule: "Common Adjective Suffixes", detail: "-ful (careful, helpful), -less (hopeless, careless), -able/-ible (capable, flexible), -ous (famous, dangerous), -ive (creative, active), -ic/-ical (historic, historical), -al (digital, national), -ish (childish, reddish)." },
      { rule: "Compound Adjectives", detail: "Noun + Adjective (sugar-free), Adjective + Noun (high-speed), Adverb + Past Participle (well-known, densely-populated), Number + Noun (a ten-minute quiz)." }
    ],
    use: "Used attributively directly in front of nouns, or predicatively after linking verbs (be, seem, look, feel, sound, taste, smell, become).",
    kinds: [
      { name: "Descriptive / Qualitative (គុណភាព)", desc: "Describe the nature or physical/emotional quality of the noun.", example: "innovative, brilliant, humble, green, antique" },
      { name: "Quantitative / Numeral (បរិមាណ & ចំនួន)", desc: "Indicate how much or how many.", example: "many, several, few, twenty, first, second" },
      { name: "Demonstrative Adjectives (ចង្អុលបង្ហាញ)", desc: "Point out which specific noun is meant (followed by noun).", example: "this laptop, that book, these students, those schools" },
      { name: "Distributive Adjectives (បែងចែក)", desc: "Refer to members of a group individually.", example: "each student, every day, either option, neither answer" }
    ],
    exceptionalRules: [
      "OSASCOMP Order: When multiple adjectives describe one noun, follow Opinion ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material ➔ Purpose.",
      "-ed vs -ing participial adjectives: -ed describes the recipient's feeling (bored, excited, tired); -ing describes the thing creating the feeling (boring, exciting, tiring).",
      "Adjectives that CANNOT be used attributively (only predicative after linking verbs): afraid, alive, alone, asleep, awake, aware, glad, ill, pleased, upset."
    ],
    examples: [
      { en: "He is an inspiring, dedicated educator who builds modern educational platforms.", kh: "លោកគ្រូគឺជាអ្នកអប់រំដែលពោរពេញដោយការបំផុសគំនិត និងការលះបង់ ដែលបង្កើតវេទិកាអប់រំទំនើបៗ។", note: "Attributive adjectives: inspiring, dedicated, modern, educational" },
      { en: "The students were excited because the interactive lesson was thrilling.", kh: "សិស្សានុសិស្សមានអារម្មណ៍រំភើប ពីព្រោះមេរៀនអន្តរកម្មពិតជាគួរឱ្យទាក់ទាញខ្លាំងណាស់។", note: "-ed adjective (excited: feeling) vs -ing adjective (thrilling: cause)" },
      { en: "She bought a lovely, small, round, Cambodian wooden souvenir.", kh: "នាងបានទិញវត្ថុអនុស្សាវរីយ៍ធ្វើពីឈើរបស់ខ្មែរ រាងមូល តូច និងស្រស់ស្អាតមួយ។", note: "OSASCOMP order: Opinion (lovely) ➔ Size (small) ➔ Shape (round) ➔ Origin (Cambodian) ➔ Material (wooden)" }
    ]
  },

  prepositions: {
    id: "prepositions",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Prepositions (ធៀបសព្វ / អាយតនិបាត)",
    subtitle: "Meaning, Formation, Use, Kinds, Time/Place Triangle & Exceptions",
    badge: "1.6 Parts of Speech",
    hwSummary: {
      title: "Prepositions: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Preposition Pyramid Chart</div>
          <div class="hw-title">★ PREPOSITIONS (ធៀបសព្វ) = In, On, At Time & Place Pyramid</div>
          
          <div class="hw-pyramid-wrap">
            <div class="hw-pyramid-level hw-pyr-in">
              <b>IN (General / Biggest)</b><br>
              <span>TIME: Centuries, Decades, Years, Months, Seasons (in 2026, in October, in summer)</span><br>
              <span>PLACE: Countries, Cities, Enclosed Space (in Cambodia, in Siem Reap, in room)</span>
            </div>
            <div class="hw-pyramid-level hw-pyr-on">
              <b>ON (More Specific / Medium)</b><br>
              <span>TIME: Days & Dates (on Monday, on October 2nd, on my birthday)</span><br>
              <span>PLACE: Streets, Surfaces, Transport (on National Road 6, on table, on a bus)</span>
            </div>
            <div class="hw-pyramid-level hw-pyr-at">
              <b>AT (Very Specific / Point)</b><br>
              <span>TIME: Precise Hours, Moments (at 7:30 AM, at noon, at midnight)</span><br>
              <span>PLACE: Exact Address, Specific Point (at Hun Sen Svay Thom, at the door)</span>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">DEPENDENT PREPOSITION ESSENTIALS</div>
            <div class="hw-grid-2">
              <div>
                <p>• depend <b>ON</b><br>• interested <b>IN</b><br>• good / bad <b>AT</b></p>
              </div>
              <div>
                <p>• proud <b>OF</b><br>• belong <b>TO</b><br>• apologize <b>FOR</b></p>
              </div>
            </div>
            <div class="hw-tip">⚠️ No preposition with: <em>yesterday, today, tomorrow, next week, last month, every day</em>. (Say: "I will see you next Monday", NOT "on next Monday"!).</div>
          </div>
        </div>
      `
    },
    meaning: "A preposition is a word or group of words placed before a noun, pronoun, or gerund to show direction, location, time, spatial relationship, or to introduce an object. In Khmer, ធៀបសព្វ ឬអាយតនិបាត គឺជាពាក្យដែលបញ្ជាក់ទំនាក់ទំនងរវាងនាម ឬសព្វនាម ជាមួយនឹងពាក្យដទៃទៀតក្នុងល្បះ។",
    formation: [
      { rule: "Simple Prepositions", detail: "Single words: in, on, at, by, for, from, of, to, with, through, over, under." },
      { rule: "Compound Prepositions", detail: "Formed by prefixing or compounding: into, onto, within, without, throughout, upon." },
      { rule: "Phrasal / Complex Prepositions", detail: "Multi-word phrases: in front of, according to, on behalf of, because of, in addition to, in spite of." }
    ],
    use: "Must be followed by a noun, pronoun, or gerund (-ing form), known as the Object of the Preposition. Never followed immediately by a bare verb.",
    kinds: [
      { name: "Prepositions of Time (ពេលវេលា)", desc: "Show when something happens (At for precise time, On for days/dates, In for months/years/centuries).", example: "at 8:00 AM, on Friday, in 2026, during the lesson, since morning" },
      { name: "Prepositions of Place & Position (ទីកន្លែង)", desc: "Show where something is situated.", example: "at school, on the desk, in the library, under the chair, between two rooms" },
      { name: "Prepositions of Direction & Movement (ទិសដៅ/ចលនា)", desc: "Show movement towards or across a destination.", example: "to school, into the classroom, across the bridge, through the gate" }
    ],
    exceptionalRules: [
      "No preposition before time expressions with next, last, this, every: 'I met him last Monday' (NOT on last Monday); 'We study every day' (NOT in every day).",
      "Preposition at end of sentence: In natural English, prepositions frequently end questions and relative clauses: 'What are you looking at?' / 'This is the school he graduated from.'",
      "Transport prepositions: Use 'ON' for public transit or open transport where you can walk/stand (on a bus, on a train, on a plane, on a ship, on a bike); Use 'IN' for enclosed personal vehicles (in a car, in a taxi, in a truck)."
    ],
    examples: [
      { en: "Classes at Hun Sen Svay Thom begin at 7:00 AM on Monday mornings.", kh: "ថ្នាក់រៀននៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ ចាប់ផ្តើមនៅម៉ោង ៧:០០ ព្រឹក នៅរៀងរាល់ព្រឹកថ្ងៃចន្ទ។", note: "At (specific place: school), At (exact time: 7:00 AM), On (day: Monday mornings)" },
      { en: "The dedicated students are passionate about learning and good at problem-solving.", kh: "សិស្សានុសិស្សដែលខិតខំប្រឹងប្រែងមានចំណង់ចំណូលចិត្តចំពោះការរៀនសូត្រ និងពូកែខាងដោះស្រាយបញ្ហា។", note: "Dependent prepositions: passionate about, good at (+ gerunds)" },
      { en: "She walked into the computer lab and sat in front of the workstation.", kh: "នាងបានដើរចូលទៅក្នុងបន្ទប់កុំព្យូទ័រ ហើយអង្គុយនៅពីមុខតុការងារ។", note: "Direction (into) + Complex preposition of position (in front of)" }
    ]
  },

  conjunctions: {
    id: "conjunctions",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Conjunctions (ឈ្នាប់)",
    subtitle: "FANBOYS, Subordinating, Correlative & Parallelism Rules",
    badge: "1.7 Parts of Speech",
    hwSummary: {
      title: "Conjunctions: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Conjunction Connector Engine</div>
          <div class="hw-title">★ CONJUNCTIONS (ឈ្នាប់) = Connecting Words, Phrases & Clauses</div>
          
          <div class="hw-sketch-box">
            <div class="hw-box-head">1. THE 7 COORDINATING CONJUNCTIONS: F-A-N-B-O-Y-S</div>
            <div class="hw-grid-2">
              <ul class="hw-list">
                <li><b>F - For:</b> Reason ➔ <em>He studied, <u>for</u> tests matter.</em></li>
                <li><b>A - And:</b> Addition ➔ <em>English <u>and</u> ICT skills.</em></li>
                <li><b>N - Nor:</b> Negative ➔ <em>He doesn't lie, <u>nor</u> does he cheat.</em></li>
                <li><b>B - But:</b> Contrast ➔ <em>It was tough, <u>but</u> they passed.</em></li>
              </ul>
              <ul class="hw-list">
                <li><b>O - Or:</b> Option ➔ <em>Study now <u>or</u> regret later.</em></li>
                <li><b>Y - Yet:</b> Surprise ➔ <em>Tired, <u>yet</u> he smiled.</em></li>
                <li><b>S - So:</b> Result ➔ <em>It rained, <u>so</u> we stayed in.</em></li>
              </ul>
            </div>
            <div class="hw-tip">⭐ Punctuation Rule: When joining 2 independent clauses with FANBOYS, use a COMMA before it!</div>
          </div>

          <div class="hw-grid-2" style="margin-top:12px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">2. SUBORDINATING CONJUNCTIONS</div>
              <p>Connect Dependent Clause ➔ Independent Clause:</p>
              <div class="hw-flow">
                <span>Although</span> • <span>Because</span> • <span>Since</span> • <span>Unless</span> • <span>While</span> • <span>If</span>
              </div>
              <p style="margin-top:6px;">➔ <em><u>Because</u> he practiced, he succeeded.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">3. CORRELATIVE PAIRS & PARALLELISM</div>
              <ul class="hw-list">
                <li>• <b>both ... and</b></li>
                <li>• <b>either ... or</b></li>
                <li>• <b>neither ... nor</b></li>
                <li>• <b>not only ... but also</b></li>
              </ul>
              <div class="hw-tip">⚠️ Verb agrees with the CLOSER subject in either/neither!</div>
            </div>
          </div>
        </div>
      `
    },
    meaning: "A conjunction is a linking word used to connect words, phrases, or clauses, demonstrating the logical relationship between them (addition, contrast, cause, condition, choice). In Khmer, ឈ្នាប់ គឺជាពាក្យដែលប្រើសម្រាប់ភ្ជាប់ពាក្យ ឃ្លា ឬល្បះ ឱ្យមានទំនាក់ទំនងសមហេតុផលជាមួយគ្នា។",
    formation: [
      { rule: "Single-word Conjunctions", detail: "and, but, because, although, unless, since, while, after, if." },
      { rule: "Compound Conjunctions", detail: "as soon as, in order that, so that, as long as, provided that." },
      { rule: "Correlative Conjunction Pairs", detail: "both...and, not only...but also, either...or, neither...nor, whether...or." }
    ],
    use: "Used to build compound and complex sentences, prevent choppy short fragments, and ensure cohesive text flow.",
    kinds: [
      { name: "Coordinating Conjunctions (FANBOYS)", desc: "Join words, phrases, or independent clauses of equal grammatical rank.", example: "For, And, Nor, But, Or, Yet, So" },
      { name: "Subordinating Conjunctions (ឈ្នាប់បន្ទាប់បន្សំ)", desc: "Join an independent clause with a dependent subordinate clause.", example: "because, since, although, even though, while, whereas, if, unless, until, before" },
      { name: "Correlative Conjunctions (ឈ្នាប់គូ)", desc: "Work in pairs to join grammatically equal elements.", example: "both...and, either...or, neither...nor, not only...but also, whether...or" }
    ],
    exceptionalRules: [
      "Subject-Verb Agreement with Correlative Conjunctions: When subjects are joined by 'either...or' or 'neither...nor', the verb agrees with the subject CLOSER to the verb: 'Neither the teacher nor the students were absent' vs 'Neither the students nor the teacher was absent.'",
      "Parallel Structure: Elements joined by conjunctions must share identical grammatical forms (Not: 'She likes reading and to swim' ❌ ➔ 'She likes reading and swimming' ✅).",
      "Comma with Subordinating Clauses: If the dependent clause comes FIRST, use a comma ('Because it rained, we studied inside.'). If it comes SECOND, usually NO comma is needed ('We studied inside because it rained.')."
    ],
    examples: [
      { en: "He teaches not only English grammar but also computer programming.", kh: "លោកគ្រូបង្រៀនមិនត្រឹមតែវេយ្យាករណ៍ភាសាអង់គ្លេសប៉ុណ្ណោះទេ ថែមទាំងការសរសេរកម្មវិធីកុំព្យូទ័រទៀតផង។", note: "Correlative pair: not only ... but also (parallel noun phrases)" },
      { en: "Although the curriculum was demanding, every student persevered and achieved excellence.", kh: "ទោះបីជាកម្មវិធីសិក្សាមានភាពលំបាកក៏ដោយ ក៏សិស្សគ្រប់រូបបានព្យាយាមនិងសម្រេចបាននូវឧត្តមភាព។", note: "Subordinating conjunction (Although) + Coordinating conjunction (and)" },
      { en: "You can study with interactive flashcards, or you can test your skills with timed quizzes.", kh: "អ្នកអាចរៀនជាមួយកាតពាក្យអន្តរកម្ម ឬអ្នកអាចសាកល្បងជំនាញរបស់អ្នកជាមួយនឹងកម្រងសំណួរកំណត់ពេល។", note: "FANBOYS coordinating conjunction 'or' joining two independent clauses" }
    ]
  },

  interjections: {
    id: "interjections",
    category: "parts_of_speech",
    catTitle: "Parts of Speech",
    catTitleKh: "ថ្នាក់នៃពាក្យ",
    title: "Interjections (ឧទានសព្ទ)",
    subtitle: "Meaning, Formation, Use, Emotional Categories & Rules",
    badge: "1.8 Parts of Speech",
    hwSummary: {
      title: "Interjections: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Expressive Language</div>
          <div class="hw-title">★ INTERJECTIONS (ឧទានសព្ទ) = Sudden Emotion & Reaction Words</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. EMOTION CATEGORIES</div>
              <ul class="hw-list">
                <li><span class="hw-hl lime">Joy / Triumph:</span> <em>Hurrah! Yay! Bingo!</em></li>
                <li><span class="hw-hl cyan">Surprise / Wonder:</span> <em>Wow! Oh! Aha! Gosh!</em></li>
                <li><span class="hw-hl pink">Pain / Disgust:</span> <em>Ouch! Ew! Yuck! Oof!</em></li>
                <li><span class="hw-hl yellow">Attention:</span> <em>Hey! Look! Hark! Shh!</em></li>
                <li><span class="hw-hl orange">Relief:</span> <em>Phew! Thank goodness!</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. PUNCTUATION RULES</div>
              <div class="hw-formula">Strong Emotion ➔ Exclamation Mark (!)</div>
              <p>➔ <em><b>Ouch!</b> That hurt.</em></p>
              <div class="hw-formula">Mild / Conversational ➔ Comma (,)</div>
              <p>➔ <em><b>Well,</b> let's see what happens next.</em></p>
              <div class="hw-tip">⭐ Academic Note: Avoid in formal research papers, but vital for authentic dialogue, storytelling, and expressive speech!</div>
            </div>
          </div>
        </div>
      `
    },
    meaning: "An interjection is an exclamatory word or phrase spoken suddenly to express strong emotion, reaction, surprise, pain, or greeting. It stands grammatically independent from the rest of the sentence. In Khmer, ឧទានសព្ទ គឺជាពាក្យ ឬកន្សោមពាក្យដែលបន្លឺឡើងដើម្បីបញ្ជាក់ពីអារម្មណ៍រំភើប ភ្ញាក់ផ្អើល ឈឺចាប់ ឬការស្វាគមន៍។",
    formation: [
      { rule: "Single-word Exclamations", detail: "Wow!, Ouch!, Alas!, Hey!, Phew!, Bravo!, Hurrah!, Oops!, Aha!" },
      { rule: "Short Phrases Used as Interjections", detail: "Oh my goodness!, Good grief!, Thank goodness!, Well done!, Holy cow!" }
    ],
    use: "Used at the beginning of spoken or creative written sentences to convey tone, mood, and immediate human response.",
    kinds: [
      { name: "Interjections of Joy & Celebration", desc: "Express triumph, happiness, or victory.", example: "Hurrah! Yay! Bingo! Bravo! Cheers!" },
      { name: "Interjections of Surprise & Wonder", desc: "Express astonishment or revelation.", example: "Wow! Oh! Gosh! Aha! Really!" },
      { name: "Interjections of Pain & Disgust", desc: "Express physical discomfort or revulsion.", example: "Ouch! Ow! Ew! Yuck! Ugh!" },
      { name: "Interjections of Greeting & Attention", desc: "Used to welcome or capture the listener's focus.", example: "Hello! Hey! Hi! Hark! Look! Psst!" }
    ],
    exceptionalRules: [
      "Syntactic Independence: Interjections have no grammatical dependency on the subject or verb of the sentence; removing them leaves the grammatical structure intact.",
      "Punctuation Choice: Use an exclamation mark (!) for intense emotion ('Ouch! I burned my finger.'), and a comma (,) for mild feelings ('Oh, I didn't see you there.').",
      "Avoid in formal academic writing (IELTS Task 2, scientific dissertations) unless quoting direct speech."
    ],
    examples: [
      { en: "Wow! The interactive website designed by Mr. Ol is remarkably smooth!", kh: "អីយ៉ា! គេហទំព័រអន្តរកម្មដែលរៀបចំដោយលោកគ្រូ អ៊ូច អុល ពិតជារលូនគួរឱ្យកត់សម្គាល់!", note: "Interjection of wonder/surprise (Wow!)" },
      { en: "Yay! All the Grade 10 students scored high marks on their grammar assessment!", kh: "ជយោ! សិស្សថ្នាក់ទី១០ ទាំងអស់ទទួលបានពិន្ទុខ្ពស់ក្នុងការវាយតម្លៃវេយ្យាករណ៍របស់ពួកគេ!", note: "Interjection of celebration/triumph (Yay!)" },
      { en: "Phew! The final semester examination is finally finished.", kh: "ហ្អាស! ការប្រឡងឆមាសចុងក្រោយត្រូវបានបញ្ចប់ជាស្ថាពរហើយ។", note: "Interjection of relief (Phew!)" }
    ]
  },

  // =========================================================================
  // MODULE 2: ARTICLES (Definite "The", Indefinite "A/An", Zero Article Ø)
  // =========================================================================
  articles: {
    id: "articles",
    category: "articles",
    catTitle: "Articles",
    catTitleKh: "ឧបបទ / អត្ថបទសព្ទ",
    title: "Articles: Definite 'The', Indefinite 'A/An' & Zero Article",
    subtitle: "Meaning, Formation, Use, Kinds, Exceptional Rules & Examples",
    badge: "2. Articles Master Module",
    hwSummary: {
      title: "Articles: Visual Summary Decision Map",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Complete Articles Guide</div>
          <div class="hw-title">★ ARTICLES (ឧបបទ) = Determiners: Specific vs General</div>
          
          <div class="hw-decision-flow">
            <div class="hw-flow-step">
              <span class="hw-flow-num">1</span>
              <div><b>Is it Specific & Known to both Speaker & Listener?</b><br>➔ YES: Use <b>THE</b> <em>(Pass me <u>the</u> blue pen)</em></div>
            </div>
            <div class="hw-flow-step">
              <span class="hw-flow-num">2</span>
              <div><b>If NOT Specific (General / First Mention): Is it Singular & Countable?</b><br>
              ➔ YES: Use <b>A</b> (Consonant Sound) or <b>AN</b> (Vowel Sound)</div>
            </div>
            <div class="hw-flow-step">
              <span class="hw-flow-num">3</span>
              <div><b>If General & PLURAL or UNCOUNTABLE?</b><br>➔ Use <b>ZERO ARTICLE (Ø)</b> <em>(<u>Ø</u> Books are precious; <u>Ø</u> Water is life)</em></div>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:12px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">SOUND RULE: A vs AN (Phonetics, NOT Letters!)</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">A:</span> <em><b>a</b> book, <b>a</b> university [ju:], <b>a</b> European [ju:], <b>a</b> one-day trip [w]</em></li>
                <li><span class="hw-hl cyan">AN:</span> <em><b>an</b> apple, <b>an</b> hour [silent h], <b>an</b> honest man [silent h], <b>an</b> MP3 [em]</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">WHEN TO USE 'THE' (Must-Knows!)</div>
              <ul class="hw-list">
                <li>• Unique: <em>the sun, the moon, the sky</em></li>
                <li>• Superlatives: <em>the best, the first</em></li>
                <li>• Rivers/Oceans: <em>the Mekong, the Pacific</em></li>
                <li>• Plural countries: <em>the USA, the UK, the Philippines</em></li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    meaning: "Articles are determiners used before nouns to specify whether the referent is particular/known (Definite: The) or general/unidentified (Indefinite: A/An), or abstract/uncountable (Zero Article Ø). In Khmer, ឧបបទ ឬអត្ថបទសព្ទ គឺជាពាក្យកំណត់ដែលឈរពីមុខនាម ដើម្បីបញ្ជាក់ថានាមនោះជាអ្វីដែលជាក់លាក់ ឬជាទូទៅ។",
    formation: [
      { rule: "Definite Article: 'The'", detail: "Used before singular, plural, or uncountable nouns when the reference is specific." },
      { rule: "Indefinite Article: 'A'", detail: "Used before singular countable nouns starting with a CONSONANT SOUND." },
      { rule: "Indefinite Article: 'An'", detail: "Used before singular countable nouns starting with a VOWEL SOUND (a, e, i, o, u sound)." },
      { rule: "Zero Article: 'Ø'", detail: "No article placed before plural nouns or uncountable nouns in a general sense, and before most proper nouns." }
    ],
    use: "Crucial for grammatical accuracy in formal writing, examinations, and conversational clarity.",
    kinds: [
      { name: "Definite Article 'THE' (ឧបបទជាក់លាក់)", desc: "Used when both speaker and listener know exactly which person, place, or thing is being discussed.", example: "the sun, the moon, the teacher, the Mekong River, the Kingdom of Cambodia" },
      { name: "Indefinite Article 'A / AN' (ឧបបទមិនជាក់លាក់)", desc: "Used for singular countable items mentioned for the first time or non-specific members of a group.", example: "a student, a university, an honest person, an hour, a book" },
      { name: "Zero Article 'Ø' (គ្មានឧបបទ)", desc: "Omission of article for general plural/uncountable nouns, languages, meals, sports, and proper names.", example: "Ø Water is essential; Ø English is global; Ø Football is exciting" }
    ],
    exceptionalRules: [
      "Sound over Spelling: 'A' vs 'An' is determined strictly by pronunciation, NOT the spelling letter: 'A university' (begins with consonant sound /j/), 'A one-way ticket' (begins with /w/); 'An hour' (begins with vowel sound /aʊ/ due to silent h), 'An honest leader' (silent h).",
      "Institutional Nouns (School, Hospital, Prison, Bed, Church): Omit 'the' when visiting for its primary purpose ('He is in hospital' = he is sick; 'She goes to school' = she is a student). Use 'the' when visiting as a physical location ('She went to the hospital to visit him').",
      "Geographical Names: Use 'the' with oceans (the Atlantic), rivers (the Mekong), mountain ranges (the Himalayas), and plural/union country names (the United States, the United Kingdom, the Philippines, the Netherlands). Do NOT use 'the' with individual mountains (Mount Everest), single lakes (Lake Victoria), continents (Asia), or most countries (Cambodia, Japan, France)."
    ],
    examples: [
      { en: "A student from Hun Sen Svay Thom won the national competition.", kh: "សិស្សម្នាក់មកពីវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ បានឈ្នះការប្រកួតថ្នាក់ជាតិ។", note: "Indefinite 'a' (singular countable) + Definite 'the' (specific competition)" },
      { en: "The sun rises in the east and provides light to the entire earth.", kh: "ព្រះអាទិត្យរះនៅទិសខាងកើត ហើយផ្តល់ពន្លឺដល់ផែនដីទាំងមូល។", note: "Definite 'the' for unique celestial bodies and directions" },
      { en: "Ø Education empowers Ø people to build a better future.", kh: "ការអប់រំផ្តល់អំណាចដល់មនុស្សក្នុងការកសាងអនាគតកាន់តែប្រសើរ។", note: "Zero article before abstract uncountable 'Education' and general plural 'people'" }
    ]
  },

  // =========================================================================
  // MODULE 3: ENGLISH TENSES (12 Master Tenses)
  // =========================================================================
  tenses_present: {
    id: "tenses_present",
    category: "tenses",
    catTitle: "English Tenses",
    catTitleKh: "កាលទាំង ១២",
    title: "Present Tenses (បច្ចុប្បន្នកាលទាំង ៤)",
    subtitle: "Present Simple, Continuous, Perfect & Perfect Continuous",
    badge: "3.1 English Tenses",
    hwSummary: {
      title: "Present Tenses: Visual Timeline & Formulas",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Present Timeline Blueprint</div>
          <div class="hw-title">★ THE 4 PRESENT TENSES (បច្ចុប្បន្នកាល)</div>
          
          <div class="hw-timeline-sketch">
            <div class="hw-tl-line"></div>
            <div class="hw-tl-point" style="left:20%;">Past</div>
            <div class="hw-tl-point active" style="left:60%;">NOW (Present)</div>
            <div class="hw-tl-point" style="left:90%;">Future</div>
          </div>

          <div class="hw-grid-2" style="margin-top:14px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. PRESENT SIMPLE</div>
              <div class="hw-formula">S + V1(s/es) + O</div>
              <p>• Daily habits, permanent facts, timetables.</p>
              <p>➔ <em>Mr. Ol <u>teaches</u> English every day.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. PRESENT CONTINUOUS</div>
              <div class="hw-formula">S + am/is/are + V-ing + O</div>
              <p>• Happening right NOW or temporary trends.</p>
              <p>➔ <em>We <u>are coding</u> the quiz right now.</em></p>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:10px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">3. PRESENT PERFECT</div>
              <div class="hw-formula">S + have/has + V3 (Past Participle)</div>
              <p>• Past action with PRESENT result / life experience.</p>
              <p>➔ <em>He <u>has taught</u> for over 7 years.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">4. PRESENT PERFECT CONTINUOUS</div>
              <div class="hw-formula">S + have/has + been + V-ing</div>
              <p>• Started in past, ongoing duration up to NOW.</p>
              <p>➔ <em>They <u>have been studying</u> for 3 hours.</em></p>
            </div>
          </div>
          <div class="hw-tip" style="margin-top:10px;">⚠️ Stative Verbs (know, love, understand) NEVER use Continuous! (Say: "I know him", NOT "I am knowing him").</div>
        </div>
      `
    },
    meaning: "The four present tenses describe routines, current ongoing actions, experiences linking the past to the present, and actions whose duration up to the present is highlighted. In Khmer, បច្ចុប្បន្នកាល សម្តែងអំពីសកម្មភាពទម្លាប់ ការពិតទូទៅ សកម្មភាពកំពុងកើតឡើងនៅពេលនេះ ឬសកម្មភាពដែលបានចាប់ផ្តើមពីមុនហើយបន្តមកដល់បច្ចុប្បន្ន។",
    formation: [
      { rule: "1. Present Simple", detail: "Affirmative: S + V1(s/es) | Negative: S + do/does not + V_base | Question: Do/Does + S + V_base?" },
      { rule: "2. Present Continuous", detail: "Affirmative: S + am/is/are + V-ing | Negative: S + am/is/are not + V-ing | Question: Am/Is/Are + S + V-ing?" },
      { rule: "3. Present Perfect", detail: "Affirmative: S + have/has + V3 | Negative: S + have/has not + V3 | Question: Have/Has + S + V3?" },
      { rule: "4. Present Perfect Continuous", detail: "Affirmative: S + have/has + been + V-ing | Negative: S + have/has not + been + V-ing | Question: Have/Has + S + been + V-ing?" }
    ],
    use: "Used to describe everything happening in the present realm, from universal truths to ongoing tasks.",
    kinds: [
      { name: "Present Simple", desc: "Habits, general truths, fixed schedules.", example: "The sun rises in the east; Mr. Ol teaches English." },
      { name: "Present Continuous", desc: "Actions occurring at the moment of speaking, temporary states.", example: "Students are taking a quiz right now." },
      { name: "Present Perfect", desc: "Past events with present relevance, experiences, unfinished periods.", example: "I have lived in Siem Reap since 2015." },
      { name: "Present Perfect Continuous", desc: "Emphasizes the continuous duration of an action up to now.", example: "She has been practicing grammar for two hours." }
    ],
    exceptionalRules: [
      "Stative Verbs cannot be continuous: 'I believe you' (NOT I am believing you); 'This book belongs to him' (NOT is belonging).",
      "Present Simple with future meaning: Used for official timetables, itineraries, or schedules ('The school bus leaves at 6:30 AM tomorrow').",
      "Present Continuous with 'always' to express annoyance: 'He is always forgetting his homework!' (shows irritation, not just a neutral habit).",
      "Since vs For with Present Perfect: 'Since' + specific starting point (since Monday, since 2020); 'For' + duration period (for 3 days, for 5 years)."
    ],
    examples: [
      { en: "Teacher Ouch Ol develops interactive educational tools for high school learners.", kh: "លោកគ្រូ អ៊ូច អុល បង្កើតឧបករណ៍អប់រំអន្តរកម្មសម្រាប់សិស្សវិទ្យាល័យ។", note: "Present Simple (habitual professional action: 3rd person -s)" },
      { en: "Our students are practicing grammar transformations on the web platform at this moment.", kh: "សិស្សរបស់យើងកំពុងអនុវត្តការបំប្លែងវេយ្យាករណ៍នៅលើវេទិកាគេហទំព័រនៅពេលនេះ។", note: "Present Continuous (happening right now: are practicing)" },
      { en: "He has guided hundreds of candidates to achieve outstanding exam outcomes.", kh: "លោកគ្រូបានណែនាំបេក្ខជនរាប់រយនាក់ឱ្យទទួលបានលទ្ធផលប្រឡងដ៏ឆ្នើម។", note: "Present Perfect (accumulated life experience: has guided)" }
    ]
  },

  tenses_past: {
    id: "tenses_past",
    category: "tenses",
    catTitle: "English Tenses",
    catTitleKh: "កាលទាំង ១២",
    title: "Past Tenses (អតីតកាលទាំង ៤)",
    subtitle: "Past Simple, Continuous, Perfect & Perfect Continuous",
    badge: "3.2 English Tenses",
    hwSummary: {
      title: "Past Tenses: Visual Timeline & Formulas",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Past Timeline Blueprint</div>
          <div class="hw-title">★ THE 4 PAST TENSES (អតីតកាល)</div>
          
          <div class="hw-timeline-sketch">
            <div class="hw-tl-line"></div>
            <div class="hw-tl-point active" style="left:20%;">Past Perfect (1st)</div>
            <div class="hw-tl-point active" style="left:48%;">Past Simple (2nd)</div>
            <div class="hw-tl-point" style="left:80%;">NOW</div>
          </div>

          <div class="hw-grid-2" style="margin-top:14px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. PAST SIMPLE</div>
              <div class="hw-formula">S + V2 (Past Form) + O</div>
              <p>• Completed action at specific past time.</p>
              <p>➔ <em>We <u>built</u> the app yesterday.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. PAST CONTINUOUS</div>
              <div class="hw-formula">S + was/were + V-ing + O</div>
              <p>• Action in progress when interrupted.</p>
              <p>➔ <em>I <u>was explaining</u> when the bell rang.</em></p>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:10px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">3. PAST PERFECT</div>
              <div class="hw-formula">S + had + V3 (Earlier Past)</div>
              <p>• Action completed BEFORE another past event.</p>
              <p>➔ <em>He <u>had studied</u> before he took the test.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">4. PAST PERFECT CONTINUOUS</div>
              <div class="hw-formula">S + had + been + V-ing</div>
              <p>• Continuous duration up until a past point.</p>
              <p>➔ <em>She <u>had been revising</u> for days.</em></p>
            </div>
          </div>
          <div class="hw-tip" style="margin-top:10px;">⭐ The Golden Past Combo: <em>When + Past Simple (interruption), While + Past Continuous (background action).</em></div>
        </div>
      `
    },
    meaning: "The four past tenses narrate completed events, background actions in progress, and the exact chronological sequence of events in the past. In Khmer, អតីតកាល សម្តែងអំពីសកម្មភាពដែលបានកើតឡើង និងបានបញ្ចប់រួចរាល់ហើយនៅក្នុងអតីតកាល។",
    formation: [
      { rule: "1. Past Simple", detail: "Affirmative: S + V2 | Negative: S + did not + V_base | Question: Did + S + V_base?" },
      { rule: "2. Past Continuous", detail: "Affirmative: S + was/were + V-ing | Negative: S + was/were not + V-ing | Question: Was/Were + S + V-ing?" },
      { rule: "3. Past Perfect", detail: "Affirmative: S + had + V3 | Negative: S + had not + V3 | Question: Had + S + V3?" },
      { rule: "4. Past Perfect Continuous", detail: "Affirmative: S + had + been + V-ing | Negative: S + had not + been + V-ing | Question: Had + S + been + V-ing?" }
    ],
    use: "Essential for storytelling, historical accounts, essay narratives, and exam reading passages.",
    kinds: [
      { name: "Past Simple", desc: "Finished action at a definite time in the past.", example: "He joined Hun Sen Svay Thom in 2018." },
      { name: "Past Continuous", desc: "Action in progress at a specific past moment, or ongoing background action.", example: "Students were reading when the teacher entered." },
      { name: "Past Perfect", desc: "Action taking place before another past action (earlier past).", example: "The test had ended before he arrived." },
      { name: "Past Perfect Continuous", desc: "Duration of an activity ongoing up to another moment in the past.", example: "They had been preparing the presentation for hours." }
    ],
    exceptionalRules: [
      "Interrupted Past: Longer action in Past Continuous + Shorter interrupting action in Past Simple ('While I was teaching [long], the power went out [short]').",
      "Past Perfect is ONLY needed when comparing two past events to make sequence crystal clear. If words like 'before' or 'after' already make order obvious, Past Simple is acceptable ('He finished before he left').",
      "Did + Base Form in Negatives and Questions: Always revert to V_base! ('Did you go?' NOT Did you went? ❌; 'He didn't know' NOT He didn't knew? ❌)."
    ],
    examples: [
      { en: "In 2018, Teacher Ouch Ol joined the faculty at Hun Sen Svay Thom High School.", kh: "នៅក្នុងឆ្នាំ២០១៨ លោកគ្រូ អ៊ូច អុល បានចូលរួមបម្រើការងារនៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ។", note: "Past Simple (specific past year: joined)" },
      { en: "The students were analyzing grammar questions while the educator was preparing digital slides.", kh: "សិស្សានុសិស្សកំពុងវិភាគសំណួរវេយ្យាករណ៍ ខណៈពេលដែលគ្រូបង្រៀនកំពុងរៀបចំស្លាយឌីជីថល។", note: "Two simultaneous actions in Past Continuous (were analyzing / was preparing)" },
      { en: "By the time the final bell rang, every candidate had completed their answer sheet.", kh: "នៅពេលដែលកណ្តឹងចុងក្រោយបន្លឺឡើង បេក្ខជនគ្រប់រូបបានបំពេញសន្លឹកចម្លើយរបស់ពួកគេរួចរាល់ហើយ។", note: "Past Perfect (earlier: had completed) vs Past Simple (later: rang)" }
    ]
  },

  tenses_future: {
    id: "tenses_future",
    category: "tenses",
    catTitle: "English Tenses",
    catTitleKh: "កាលទាំង ១២",
    title: "Future Tenses (អនាគតកាលទាំង ៤)",
    subtitle: "Future Simple, Continuous, Perfect & Perfect Continuous",
    badge: "3.3 English Tenses",
    hwSummary: {
      title: "Future Tenses: Visual Timeline & Formulas",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Future Timeline Blueprint</div>
          <div class="hw-title">★ THE 4 FUTURE TENSES (អនាគតកាល)</div>
          
          <div class="hw-timeline-sketch">
            <div class="hw-tl-line"></div>
            <div class="hw-tl-point" style="left:20%;">Past</div>
            <div class="hw-tl-point" style="left:50%;">NOW</div>
            <div class="hw-tl-point active" style="left:82%;">Future (Deadline)</div>
          </div>

          <div class="hw-grid-2" style="margin-top:14px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. FUTURE SIMPLE</div>
              <div class="hw-formula">S + will + V_base + O</div>
              <p>• Predictions, spontaneous decisions, promises.</p>
              <p>➔ <em>I <u>will help</u> you with grammar.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. FUTURE CONTINUOUS</div>
              <div class="hw-formula">S + will be + V-ing + O</div>
              <p>• In progress at a specific future moment.</p>
              <p>➔ <em>Tomorrow at 9 AM, we <u>will be testing</u>.</em></p>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:10px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">3. FUTURE PERFECT</div>
              <div class="hw-formula">S + will have + V3 (By a deadline)</div>
              <p>• Completed BEFORE a future point in time.</p>
              <p>➔ <em>By next year, they <u>will have graduated</u>.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">4. FUTURE PERFECT CONTINUOUS</div>
              <div class="hw-formula">S + will have been + V-ing</div>
              <p>• Duration of action up to a future point.</p>
              <p>➔ <em>By 2027, he <u>will have been teaching</u> for 9 yrs.</em></p>
            </div>
          </div>
          <div class="hw-tip" style="margin-top:10px;">⚠️ Time Clause Trap: Never use "WILL" after <em>when, as soon as, before, after, if</em>! Say: "When he <u>arrives</u>, I will talk to him" (NOT When he will arrive! ❌).</div>
        </div>
      `
    },
    meaning: "The four future tenses express predictions, scheduled arrangements, actions ongoing at a future moment, and deadlines by which an action will have been completed. In Khmer, អនាគតកាល សម្តែងអំពីសកម្មភាព ព្រឹត្តិការណ៍ ឬគម្រោងដែលនឹងកើតឡើងនៅក្នុងពេលខាងមុខ។",
    formation: [
      { rule: "1. Future Simple", detail: "S + will + V_base | Neg: S + will not (won't) + V_base | Q: Will + S + V_base?" },
      { rule: "2. Future Continuous", detail: "S + will be + V-ing | Neg: S + will not be + V-ing | Q: Will + S + be + V-ing?" },
      { rule: "3. Future Perfect", detail: "S + will have + V3 | Neg: S + will not have + V3 | Q: Will + S + have + V3?" },
      { rule: "4. Future Perfect Continuous", detail: "S + will have been + V-ing | Neg: S + will not have been + V-ing | Q: Will + S + have been + V-ing?" }
    ],
    use: "Used for planning, goals, forecasts, scientific projections, and setting milestones.",
    kinds: [
      { name: "Future Simple", desc: "Spontaneous decisions, predictions, promises, intentions.", example: "I will study harder; It will rain." },
      { name: "Future Continuous", desc: "Action that will be in progress at a particular time in the future.", example: "At 10:00 AM tomorrow, we will be writing the essay." },
      { name: "Future Perfect", desc: "Action that will be finished before a specific deadline in the future.", example: "By next month, I will have finished Grade 10 English." },
      { name: "Future Perfect Continuous", desc: "Emphasizes duration continuing up to a designated future time.", example: "By December, he will have been working here for 8 years." }
    ],
    exceptionalRules: [
      "Future Time Clauses: In clauses beginning with 'when, while, as soon as, before, after, until, if, unless', use PRESENT SIMPLE, NOT future 'will': 'When he arrives, we will start' (NOT When he will arrive ❌).",
      "Will vs Going To: 'Will' is used for instant/spontaneous decisions ('The phone is ringing, I will answer it') and general predictions. 'Going to' is used for premeditated plans made before speaking ('I am going to study ICT next semester') or predictions based on physical present evidence ('Look at those black clouds! It is going to rain').",
      "Present Continuous for Fixed Future Arrangements: If a personal arrangement is already booked and scheduled, use Present Continuous ('I am flying to Siem Reap tomorrow morning')."
    ],
    examples: [
      { en: "The students will master all essential grammar rules through this digital platform.", kh: "សិស្សានុសិស្សនឹងស្ទាត់ជំនាញលើក្បួនវេយ្យាករណ៍សំខាន់ៗទាំងអស់តាមរយៈវេទិកាឌីជីថលនេះ។", note: "Future Simple (prediction/promise: will master)" },
      { en: "Tomorrow at 8:30 AM, candidates will be sitting for their Bloom's Taxonomy evaluation.", kh: "នៅថ្ងៃស្អែកវេលាម៉ោង ៨:៣០ ព្រឹក បេក្ខជននឹងកំពុងអង្គុយប្រឡងការវាយតម្លៃ Bloom's Taxonomy របស់ពួកគេ។", note: "Future Continuous (action in progress at exact future hour: will be sitting)" },
      { en: "By the end of this academic year, we will have accomplished all core syllabus targets.", kh: "នៅដំណាច់ឆ្នាំសិក្សានេះ យើងនឹងសម្រេចបាននូវគោលដៅនៃកម្មវិធីសិក្សាស្នូលទាំងអស់។", note: "Future Perfect (completed before deadline: will have accomplished)" }
    ]
  },

  // =========================================================================
  // MODULE 4: PASSIVE VOICE & ACTIVE VOICE / CLAUSES
  // =========================================================================
  voice: {
    id: "voice",
    category: "voice_clauses",
    catTitle: "Passive Voice & Active Voice",
    catTitleKh: "ល្បះមិនផ្ទាល់ & ល្បះផ្ទាល់",
    title: "Passive Voice and Active Voice (ល្បះមិនផ្ទាល់ & ល្បះផ្ទាល់)",
    subtitle: "Meaning, Formation Matrix across Tenses, Rules, Keynotes & Examples",
    badge: "4.1 Voice & Clauses",
    hwSummary: {
      title: "Passive Voice: Transformation Machine",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Voice Transformation Machine</div>
          <div class="hw-title">★ ACTIVE ➔ PASSIVE VOICE (ល្បះមិនផ្ទាល់)</div>
          
          <div class="hw-voice-machine">
            <div class="hw-vm-row">
              <span class="hw-vm-badge active-b">ACTIVE:</span>
              <span class="hw-vm-part">[Subject]</span> ➔ 
              <span class="hw-vm-part">[Verb]</span> ➔ 
              <span class="hw-vm-part">[Object]</span>
            </div>
            <div class="hw-vm-arrow">⬇ Cross Transformation ⬇</div>
            <div class="hw-vm-row">
              <span class="hw-vm-badge passive-b">PASSIVE:</span>
              <span class="hw-vm-part hl">[New Subject (Old Object)]</span> + 
              <span class="hw-vm-part hl">[BE in exact tense]</span> + 
              <span class="hw-vm-part hl">[V3 (Past Part.)]</span> + 
              <span class="hw-vm-part">[(by Agent)]</span>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">MASTER TENSE CONVERSION MATRIX</div>
            <ul class="hw-list" style="font-size:0.85rem;">
              <li>• <b>Present Simple:</b> is / am / are + V3 ➔ <em>Code is written.</em></li>
              <li>• <b>Present Cont:</b> is / am / are + being + V3 ➔ <em>Code is being written.</em></li>
              <li>• <b>Present Perfect:</b> have / has + been + V3 ➔ <em>Code has been written.</em></li>
              <li>• <b>Past Simple:</b> was / were + V3 ➔ <em>Code was written.</em></li>
              <li>• <b>Past Cont:</b> was / were + being + V3 ➔ <em>Code was being written.</em></li>
              <li>• <b>Past Perfect:</b> had + been + V3 ➔ <em>Code had been written.</em></li>
              <li>• <b>Future Simple:</b> will be + V3 ➔ <em>Code will be written.</em></li>
              <li>• <b>Modal:</b> modal + be + V3 ➔ <em>Code must be written.</em></li>
            </ul>
          </div>
          <div class="hw-tip" style="margin-top:10px;">⭐ Keynote by Mr. OL: Omit "by + agent" when the agent is unknown, obvious, or unimportant (e.g. <em>by people, by someone</em>).</div>
        </div>
      `
    },
    meaning: "Active voice emphasizes the DOER of the action (Subject performs verb). Passive voice emphasizes the RECIPIENT or RESULT of the action (Subject is acted upon). In Khmer, ល្បះផ្ទាល់ (Active) សង្កត់ធ្ងន់លើអ្នកធ្វើសកម្មភាព រីឯ ល្បះមិនផ្ទាល់ (Passive) សង្កត់ធ្ងន់លើកម្មបទ ឬអ្នករងអំពើ។",
    formation: [
      { rule: "Universal Passive Formula", detail: "Object of Active becomes Subject + Appropriate form of BE (matching active tense) + Past Participle (V3) + [by + Agent]." },
      { rule: "Present & Past Continuous Passive", detail: "Add 'being' between BE and V3: is/are being + V3 (Present Cont); was/were being + V3 (Past Cont)." },
      { rule: "Perfect Tenses Passive", detail: "Add 'been' between have/has/had and V3: has/have been + V3; had been + V3." }
    ],
    use: "Used when the doer is unknown, obvious, or unimportant, or when focusing on scientific processes, news headlines, and formal reports.",
    kinds: [
      { name: "Active Voice (ល្បះផ្ទាល់)", desc: "Focuses directly on who/what performs the action.", example: "Mr. Ol designs the interactive platform." },
      { name: "Passive Voice (ល្បះមិនផ្ទាល់)", desc: "Focuses on the outcome, process, or receiver of the action.", example: "The interactive platform is designed by Mr. Ol." }
    ],
    exceptionalRules: [
      "Intransitive Verbs cannot be transformed into Passive: Verbs like happen, arrive, die, sleep, disappear have no object, so they have NO passive form (Never say: 'An accident was happened' ❌ ➔ 'An accident happened' ✅).",
      "Verbs with Two Objects (Direct & Indirect: give, send, offer, teach, show): Can produce TWO correct passive sentences: Active: 'Mr. Ol taught the students English.' ➔ Passive 1 (preferred): 'The students were taught English by Mr. Ol.' / Passive 2: 'English was taught to the students by Mr. Ol.'",
      "Prepositional Verbs: Retain their prepositions in passive voice: Active: 'They laughed at him.' ➔ Passive: 'He was laughed at.'",
      "Agent Omission: Do NOT write 'by someone, by people, by them' if it adds no useful information: 'My bike was stolen' (NOT by someone)."
    ],
    examples: [
      { en: "Active: Teacher Ouch Ol launched the digital learning portal.", kh: "ល្បះផ្ទាល់៖ លោកគ្រូ អ៊ូច អុល បានសម្ពោធដាក់ឱ្យដំណើរការគេហទំព័ររៀនឌីជីថល។", note: "Subject (Ouch Ol) + Verb (launched) + Object (portal)" },
      { en: "Passive: The digital learning portal was launched by Teacher Ouch Ol.", kh: "ល្បះមិនផ្ទាល់៖ គេហទំព័ររៀនឌីជីថលត្រូវបានសម្ពោធដាក់ឱ្យដំណើរការដោយលោកគ្រូ អ៊ូច អុល។", note: "Past Simple Passive: was + launched + by Agent" },
      { en: "Modern educational technology is widely used throughout the classroom.", kh: "បច្ចេកវិទ្យាអប់រំទំនើបត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយនៅទូទាំងថ្នាក់រៀន។", note: "Present Simple Passive with omitted agent (is widely used)" }
    ]
  },

  clauses: {
    id: "clauses",
    category: "voice_clauses",
    catTitle: "Clauses",
    catTitleKh: "ឈ្នាប់ និងឃ្លា",
    title: "Clauses: Independent & Dependent (Noun, Adjective & Adverb)",
    subtitle: "Independent vs Dependent, Noun Clauses, Relative Clauses & Adverb Clauses",
    badge: "4.2 Voice & Clauses",
    hwSummary: {
      title: "Clauses: Visual Architecture Blueprint",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Clauses Architecture</div>
          <div class="hw-title">★ CLAUSES (ឈ្នាប់ & ឃ្លា) = Group of words with Subject + Predicate</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. INDEPENDENT CLAUSE</div>
              <p>• Expresses a complete thought.</p>
              <p>• Can stand alone as a sentence!</p>
              <p>➔ <em><u>Mr. Ol teaches English.</u> (Complete!)</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. DEPENDENT CLAUSE</div>
              <p>• Has Subject + Verb, but INCOMPLETE thought.</p>
              <p>• Starts with subordinator (because, although, who).</p>
              <p>➔ <em><u>Because he is dedicated...</u> (Needs more!)</em></p>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">3. THE 3 TYPES OF DEPENDENT CLAUSES</div>
            <div class="hw-grid-2">
              <div>
                <p>• <span class="hw-hl yellow">Noun Clause:</span> Acts as Subject/Object.<br>➔ <em><u>What he explained</u> was clear.</em><br>➔ <em>I know <u>that you will succeed</u>.</em></p>
                <p>• <span class="hw-hl cyan">Adjective (Relative) Clause:</span> Modifies Noun.<br>➔ <em>The educator <u>who inspires us</u> works here.</em></p>
              </div>
              <div>
                <p>• <span class="hw-hl lime">Adverb Clause:</span> Modifies Verb (Time, Reason, Condition, Concession).<br>➔ <em><u>Although the test was tough</u>, we passed.</em><br>➔ <em>We review <u>before exams start</u>.</em></p>
              </div>
            </div>
          </div>
          <div class="hw-tip" style="margin-top:10px;">⭐ Relative Pronouns: <b>who</b> (people-subject), <b>whom</b> (people-object), <b>whose</b> (possession), <b>which</b> (things), <b>that</b> (people & things in defining clauses).</div>
        </div>
      `
    },
    meaning: "A clause is a group of related words containing both a subject and a finite predicate verb. An Independent Clause expresses a complete thought and can stand alone as a sentence. A Dependent (Subordinate) Clause cannot stand alone and functions as a noun, adjective, or adverb within a sentence. In Khmer, ឃ្លា (Clause) គឺជាបណ្តុំនៃពាក្យដែលមានប្រធាន និងកិរិយាសព្ទ។ ឃ្លាឯករាជ្យអាចឈរតែឯងបាន រីឯឃ្លាមិនឯករាជ្យត្រូវពឹងផ្អែកលើឃ្លាឯករាជ្យដើម្បីបង្កើតន័យពេញលេញ។",
    formation: [
      { rule: "Independent Clause Formula", detail: "Subject + Finite Verb + (Object/Complement) = Standalone Sentence." },
      { rule: "Dependent Clause Formula", detail: "Subordinator (Conjunction or Relative Pronoun) + Subject + Finite Verb." }
    ],
    use: "Used to construct complex and compound-complex sentences, express nuanced logic, and create professional writing.",
    kinds: [
      { name: "Independent Clauses (ឃ្លាឯករាជ្យ)", desc: "Can stand alone as a grammatically complete simple sentence.", example: "Teacher Ouch Ol teaches English." },
      { name: "Noun Clauses (ឃ្លាដើរតួជានាម)", desc: "Functions as the Subject, Direct Object, or Complement of a sentence. Introduced by that, what, whether, who, how, why.", example: "What you learn today will shape your future." },
      { name: "Adjective / Relative Clauses (ឃ្លាគុណនាម)", desc: "Modifies a noun or pronoun. Introduced by relative pronouns (who, whom, whose, which, that).", example: "The teacher who guides us is remarkably patient." },
      { name: "Adverb Clauses (ឃ្លាគុណកិរិយា)", desc: "Modifies a verb, adjective, or adverb. Shows Time, Reason, Condition, Concession, Purpose, or Result.", example: "Although grammar is complex, steady practice makes it effortless." }
    ],
    exceptionalRules: [
      "Defining vs Non-Defining Relative Clauses: Defining clauses give essential info (NO commas, can use 'that': 'The student who won the contest got a scholarship'); Non-defining clauses give extra bonus info (COMMAS REQUIRED, cannot use 'that': 'Mr. Ol, who teaches at Svay Thom, built this platform').",
      "Omission of Relative Pronouns: You can omit who/which/that ONLY when it functions as the OBJECT of the relative clause ('The book [that] I read' ✅ vs 'The teacher who inspired me' - CANNOT omit 'who' because it is the subject!).",
      "Reduced Clauses: Adverb clauses and relative clauses can often be reduced to participial phrases for elegant concise writing: 'After he finished the lesson, he left' ➔ 'After finishing the lesson, he left.'"
    ],
    examples: [
      { en: "Noun Clause: What he explained during the session inspired the entire class.", kh: "ឃ្លានាម៖ អ្វីដែលលោកគ្រូបានពន្យល់នៅក្នុងវគ្គបណ្តុះបណ្តាល បានបំផុសគំនិតសិស្សទាំងអស់ក្នុងថ្នាក់។", note: "Noun clause 'What he explained during the session' acts as the Subject" },
      { en: "Relative Clause: The students who practiced diligently achieved top scores on their CEFR evaluation.", kh: "ឃ្លាគុណនាម៖ សិស្សដែលបានខិតខំប្រឹងប្រែងអនុវត្ត ទទួលបានពិន្ទុខ្ពស់ក្នុងការវាយតម្លៃ CEFR របស់ពួកគេ។", note: "Relative clause 'who practiced diligently' modifies 'The students'" },
      { en: "Adverb Clause: Because the digital quizzes provide instant feedback, learners progress rapidly.", kh: "ឃ្លាគុណកិរិយា៖ ដោយសារតែតេស្តឌីជីថលផ្តល់នូវមតិកែលម្អភ្លាមៗ អ្នកសិក្សារីកចម្រើនយ៉ាងឆាប់រហ័ស។", note: "Adverb clause of reason 'Because the digital quizzes provide instant feedback'" }
    ]
  },

  // =========================================================================
  // MODULE 5: SENTENCE STRUCTURES AND ITS FRAGMENTS
  // =========================================================================
  sentence_structures: {
    id: "sentence_structures",
    category: "sentence_structures",
    catTitle: "Sentence Structures & Fragments",
    catTitleKh: "ទម្រង់ល្បះ និងកំហុសល្បះ",
    title: "Sentence Structures and Its Fragments (ទម្រង់ល្បះ និងកំហុសល្បះ)",
    subtitle: "4 Sentence Structures, 5 Patterns, Fragment & Run-on Fixes",
    badge: "5. Sentence Structures",
    hwSummary: {
      title: "Sentence Structures & Fragment Doctor",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Sentence Architecture</div>
          <div class="hw-title">★ THE 4 SENTENCE STRUCTURES (ទម្រង់ល្បះទាំង ៤)</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. SIMPLE SENTENCE</div>
              <div class="hw-formula">1 Independent Clause (1 S + 1 V)</div>
              <p>➔ <em>Mr. Ol inspires high school students.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. COMPOUND SENTENCE</div>
              <div class="hw-formula">Indep Clause + , FANBOYS + Indep Clause</div>
              <p>➔ <em>He teaches English, <u>and</u> he codes apps.</em></p>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:10px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">3. COMPLEX SENTENCE</div>
              <div class="hw-formula">1 Indep Clause + 1+ Dep Clause(s)</div>
              <p>➔ <em><u>Although grammar is strict</u>, practice helps.</em></p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">4. COMPOUND-COMPLEX</div>
              <div class="hw-formula">2+ Indep Clauses + 1+ Dep Clause</div>
              <p>➔ <em>Because exams are near, students study, and teachers help.</em></p>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">★ FRAGMENT DOCTOR: 3 FATAL ERRORS & HOW TO CURE THEM</div>
            <ul class="hw-list" style="font-size:0.85rem;">
              <li>❌ <b>Missing Subject:</b> <em>Teaches English at Svay Thom.</em><br>➔ CURE: Add Subject ➔ <em><b>Mr. Ol</b> teaches English at Svay Thom.</em> ✅</li>
              <li>❌ <b>Missing Verb:</b> <em>The dedicated educator with modern ideas.</em><br>➔ CURE: Add Verb ➔ <em>The dedicated educator with modern ideas <b>inspired us</b>.</em> ✅</li>
              <li>❌ <b>Dependent Clause Alone:</b> <em>Because it was raining hard.</em><br>➔ CURE: Attach to Independent Clause ➔ <em><b>We stayed indoors</b> because it was raining hard.</em> ✅</li>
              <li>❌ <b>Comma Splice:</b> <em>He studied hard, he passed.</em><br>➔ CURE: <em>He studied hard, <b>so</b> he passed.</em> OR <em>He studied hard<b>;</b> he passed.</em> ✅</li>
            </ul>
          </div>
        </div>
      `
    },
    meaning: "A sentence is a complete grammatical unit of words containing at least one independent clause (subject + predicate) expressing a complete thought. Sentence structures determine how clauses are combined. A Sentence Fragment is an incomplete piece of a sentence wrongly punctuated with a period. In Khmer, ទម្រង់ល្បះ កំណត់អំពីរបៀបផ្សំផ្គុំឃ្លាឯករាជ្យ និងឃ្លាមិនឯករាជ្យ។ កំហុសល្បះមិនពេញលេញ (Sentence Fragment) គឺជាកំហុសវេយ្យាករណ៍ដែលខ្វះប្រធាន ខ្វះកិរិយាសព្ទ ឬជាឃ្លាមិនឯករាជ្យដែលឈរតែឯង។",
    formation: [
      { rule: "1. Simple Sentence", detail: "1 Independent Clause: S + V (+ O/C)." },
      { rule: "2. Compound Sentence", detail: "Independent Clause + [comma + FANBOYS or semicolon ;] + Independent Clause." },
      { rule: "3. Complex Sentence", detail: "Independent Clause + Dependent Clause (joined by Subordinator)." },
      { rule: "4. Compound-Complex Sentence", detail: "At least 2 Independent Clauses + at least 1 Dependent Clause." }
    ],
    use: "Varying sentence structure prevents monotony in essays, engages readers, and demonstrates high-level syntactic command in IELTS and BacII examinations.",
    kinds: [
      { name: "Pattern 1: S + V", desc: "Subject + Intransitive Verb.", example: "The bell rang. / Birds sing." },
      { name: "Pattern 2: S + V + O", desc: "Subject + Transitive Verb + Direct Object.", example: "She reads English books." },
      { name: "Pattern 3: S + V + C", desc: "Subject + Linking Verb + Subject Complement (adjective/noun).", example: "The lesson is informative." },
      { name: "Pattern 4: S + V + IO + DO", desc: "Subject + Verb + Indirect Object + Direct Object.", example: "The teacher gave the students advice." },
      { name: "Pattern 5: S + V + DO + OC", desc: "Subject + Verb + Direct Object + Object Complement.", example: "They elected him class president." }
    ],
    exceptionalRules: [
      "Fragment Type 1 (Missing Subject): Never leave a predicate without its subject in declarative sentences: 'Is very interesting' ❌ ➔ 'The lesson is very interesting' ✅.",
      "Fragment Type 2 (Participial Phrase masquerading as sentence): '-ing' phrases without helping verbs cannot stand as sentences: 'Studying in the computer lab all afternoon.' ❌ ➔ 'They were studying in the computer lab all afternoon.' ✅.",
      "Run-on Sentences & Comma Splices: Joining two independent clauses with only a comma is a Comma Splice. Cure it with: 1. Period (.), 2. Semicolon (;), 3. Comma + FANBOYS (, and), 4. Subordinating conjunction (Because...)."
    ],
    examples: [
      { en: "Simple: Mr. Ol designs engaging digital English curricula.", kh: "ល្បះទោល៖ លោកគ្រូ អ៊ូច អុល បង្កើតកម្មវិធីសិក្សាភាសាអង់គ្លេសឌីជីថលដ៏ទាក់ទាញ។", note: "1 Independent Clause (1 Subject + 1 Transitive Verb + 1 Direct Object)" },
      { en: "Compound: English opens doors to world knowledge, and technology accelerates learning.", kh: "ល្បះផ្សំ៖ ភាសាអង់គ្លេសបើកទ្វារទៅកាន់ចំណេះដឹងពិភពលោក ហើយបច្ចេកវិទ្យាជួយពន្លឿនការរៀនសូត្រ។", note: "2 Independent Clauses joined by comma + 'and' (FANBOYS)" },
      { en: "Complex: Although grammar demands patience, consistent practice guarantees fluency.", kh: "ល្បះលាយ៖ ទោះបីជាវេយ្យាករណ៍ទាមទារការអត់ធ្មត់ក៏ដោយ ការអនុវត្តជាប្រចាំធានានូវភាពស្ទាត់ជំនាញ។", note: "1 Dependent Clause (Although...) + 1 Independent Clause" },
      { en: "Compound-Complex: Because the national exams are approaching, students are practicing diligently, and teachers are offering support.", kh: "ល្បះផ្សំ-លាយ៖ ដោយសារការប្រឡងថ្នាក់ជាតិកាន់តែកៀក សិស្សានុសិស្សកំពុងខិតខំប្រឹងប្រែង ហើយលោកគ្រូអ្នកគ្រូកំពុងផ្តល់ការគាំទ្រ។", note: "1 Dependent Clause + 2 Independent Clauses joined by 'and'" }
    ]
  },

  // =========================================================================
  // MODULE 6: GERUND & INFINITIVE
  // =========================================================================
  gerund_infinitive: {
    id: "gerund_infinitive",
    category: "gerund_infinitive",
    catTitle: "Gerund & Infinitive",
    catTitleKh: "កិរិយាសព្ទ Gerund និង Infinitive",
    title: "Gerund & Infinitive (កិរិយាសព្ទ Gerund និង Infinitive)",
    subtitle: "Gerund (V-ing), To-Infinitive, Bare Infinitive & Verbs with Meaning Shifts",
    badge: "6. Gerund & Infinitive",
    hwSummary: {
      title: "Gerund & Infinitive: Master Visual Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Hun Sen Svay Thom</div>
          <div class="hw-title">★ GERUND (-ing) vs INFINITIVE (to + V / Bare V)</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. GERUND (V-ing) = VERB AS NOUN</div>
              <ul class="hw-list">
                <li><span class="hw-hl yellow">As Subject:</span> <em><b>Learning</b> English opens global doors.</em></li>
                <li><span class="hw-hl cyan">As Object:</span> <em>I enjoy <b>reading</b> and <b>coding</b>.</em></li>
                <li><span class="hw-hl lime">After Preposition:</span> <em>Good at <b>speaking</b>; without <b>asking</b>.</em></li>
                <li><span class="hw-hl pink">Special Expressions:</span> <em>can't help, look forward to, it's no use, feel like, spend time + V-ing</em></li>
              </ul>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. TO-INFINITIVE (to + Base Verb)</div>
              <ul class="hw-list">
                <li><span class="hw-hl orange">Purpose (Why?):</span> <em>He came to school <b>to learn</b>.</em></li>
                <li><span class="hw-hl cyan">After Adjectives:</span> <em>It is easy <b>to understand</b>.</em></li>
                <li><span class="hw-hl lime">After Specific Verbs:</span> <em>want, decide, hope, plan, promise, agree, refuse, afford, manage + to V</em></li>
                <li><span class="hw-hl yellow">Bare Infinitive (No 'to'):</span> <em>Modals (can/must), Let &amp; Make: She made me <b>laugh</b>.</em></li>
              </ul>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">★ THE 5 CRITICAL VERBS WITH MEANING SHIFTS</div>
            <div class="hw-flow" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:10px; font-size:0.85rem;">
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>REMEMBER:</b><br>
                ➔ <em>Remember to lock</em> (Duty: Don't forget to do it!)<br>
                ➔ <em>Remember locking</em> (Memory: I recall doing it in past)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>STOP:</b><br>
                ➔ <em>Stopped to smoke</em> (Paused in order to smoke)<br>
                ➔ <em>Stopped smoking</em> (Quit the habit completely)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>FORGET:</b><br>
                ➔ <em>Forgot to bring</em> (Failed to do an obligation)<br>
                ➔ <em>Forgot meeting</em> (Lost past memory of event)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>TRY:</b><br>
                ➔ <em>Try to lift</em> (Make great effort at hard task)<br>
                ➔ <em>Try restarting</em> (Experiment with a method/solution)
              </div>
              <div style="background:rgba(255,255,255,0.06); padding:8px; border-radius:8px;">
                <b>REGRET:</b><br>
                ➔ <em>Regret to inform</em> (Formal polite bad news)<br>
                ➔ <em>Regret saying</em> (Sorry about a past mistake)
              </div>
            </div>
          </div>
        </div>
      `
    },
    meaning: "A Gerund is the -ing form of a verb that functions as a noun (Subject, Direct Object, or Prepositional Object). An Infinitive is the base form of a verb, typically preceded by 'to' (To-Infinitive) or without 'to' (Bare Infinitive). In Khmer, Gerund គឺជាកិរិយាសព្ទបន្ថែម -ing ដែលបំពេញមុខងារជានាម (កិរិយានាម) ដូចជាធ្វើជាប្រធាន កម្មបទ ឬបំពេញន័យឱ្យធៀបសព្វ។ រីឯ Infinitive គឺជាកិរិយាសព្ទដើម ដែលអាចមាន 'to' (To-infinitive) ឬគ្មាន 'to' (Bare infinitive) សម្រាប់បញ្ជាក់ពីគោលបំណង ឬប្រើជាមួយកិរិយាសព្ទជំនួយ។",
    formation: [
      { rule: "1. Gerund Form", detail: "Base Verb + -ing (e.g. reading, swimming, writing). Negative: not + V-ing (not knowing)." },
      { rule: "2. To-Infinitive Form", detail: "to + Base Verb (e.g. to read, to swim). Negative: not + to + Base Verb (not to disturb)." },
      { rule: "3. Bare Infinitive Form", detail: "Base Verb without 'to' (e.g. can speak, let him go, make her smile)." },
      { rule: "4. Perfect & Passive Forms", detail: "Passive Gerund: being + V3 (being praised); Passive Infinitive: to be + V3 (to be invited); Perfect Gerund: having + V3 (having finished); Perfect Infinitive: to have + V3 (to have seen)." }
    ],
    use: "Gerunds and Infinitives allow verbs to act as subjects, objects, complements, adjectives, or adverbs, making English expressions flexible and precise in academic writing and conversation.",
    kinds: [
      { name: "1. Gerund as Subject & Complement", desc: "Functions as the core noun topic of a sentence or subject complement.", example: "Learning English is exciting. / My passion is teaching." },
      { name: "2. Gerund after Prepositions", desc: "Any verb following a preposition (in, on, at, about, with, without, before, after) must be a Gerund.", example: "She passed the exam by studying diligently. / He left without saying goodbye." },
      { name: "3. Verbs Followed Exclusively by Gerund", desc: "admit, avoid, consider, deny, enjoy, finish, imagine, keep, mind, postpone, practice, recommend, suggest, risk.", example: "He avoided answering the awkward question. / She suggested visiting Angkor Wat." },
      { name: "4. To-Infinitive of Purpose & after Adjectives", desc: "Explains why an action happens or follows emotional/evaluative adjectives.", example: "I went to town to buy textbooks. / It is vital to practice daily. / I was glad to meet Mr. Ol." },
      { name: "5. Verbs Followed Exclusively by To-Infinitive", desc: "agree, afford, arrange, decide, demand, hope, learn, manage, offer, plan, pretend, promise, refuse, threaten, volunteer, want.", example: "She decided to study computer science. / They refused to give up." },
      { name: "6. Bare Infinitive (Modals, Make, Let, Had better)", desc: "Verbs without 'to' after modal verbs (can, could, will, must), causatives (make, let), and idioms (had better, would rather).", example: "You must complete your homework. / She made him apologize. / You had better rest." },
      { name: "7. Verbs with Meaning Shifts", desc: "Verbs that take both Gerund and Infinitive with distinct changes in meaning (remember, forget, stop, regret, try, mean).", example: "Remember to call mom (duty) vs Remember calling mom (memory)." }
    ],
    exceptionalRules: [
      "Trap 1: 'To' as a Preposition vs 'To' of Infinitive: In phrases like 'look forward to', 'be used to', 'get used to', 'object to', and 'confess to', the word 'to' is a preposition, requiring a GERUND (-ing), NOT a base verb! Example: 'I look forward to meeting you' ✅ (NOT 'to meet' ❌).",
      "Trap 2: Passive Causative 'Make': Active 'make' takes a bare infinitive ('The teacher made us rewrite the essay'). But in the passive voice, it MUST take a to-infinitive: 'We were made TO rewrite the essay' ✅.",
      "Trap 3: Verbs with NO change in meaning: 'Begin', 'start', 'continue', 'bother', 'intend' can take either a gerund or to-infinitive with identical meaning: 'It started to rain' = 'It started raining'.",
      "Trap 4: 'Need + V-ing' (Passive Sense): When followed by a gerund, 'need' conveys a passive meaning: 'The car needs washing' = 'The car needs to be washed'."
    ],
    examples: [
      { en: "Gerund as Subject: Mastering English grammar requires continuous dedication and active practice.", kh: "កិរិយានាមធ្វើជាប្រធាន៖ ការស្ទាត់ជំនាញវេយ្យាករណ៍អង់គ្លេសទាមទារការលះបង់បន្តបន្ទាប់ និងការអនុវត្តយ៉ាងសកម្ម។", note: "Gerund 'Mastering' acts as the subject of the main verb 'requires'." },
      { en: "Preposition + Gerund: Mr. Ol succeeded in designing interactive digital quizzes for his high school students.", kh: "ធៀបសព្វ + Gerund៖ លោកគ្រូ អ៊ូច អុល ទទួលបានជោគជ័យក្នុងការបង្កើតកម្រងសំណួរឌីជីថលអន្តរកម្មសម្រាប់សិស្សវិទ្យាល័យរបស់គាត់។", note: "After preposition 'in', verb 'design' must be the gerund 'designing'." },
      { en: "To-Infinitive of Purpose: Students wake up early to revise their lesson sheets before the national BacII examination.", kh: "To-Infinitive បញ្ជាក់គោលបំណង៖ សិស្សានុសិស្សក្រោកពីព្រលឹមដើម្បីរំលឹកសន្លឹកមេរៀនរបស់ពួកគេមុនពេលប្រឡងបាក់ឌុបថ្នាក់ជាតិ។", note: "'to revise' expresses the purpose of waking up early." },
      { en: "Meaning Shift: He stopped to answer his teacher's question, but he has stopped using his phone during class entirely.", kh: "ការប្រែប្រួលអត្ថន័យ៖ គាត់បានឈប់បន្តិចដើម្បីឆ្លើយសំណួររបស់គ្រូ ប៉ុន្តែគាត់បានឈប់ប្រើប្រាស់ទូរស័ព្ទក្នុងម៉ោងរៀនទាំងស្រុងហើយ។", note: "'stopped to answer' = paused in order to answer; 'stopped using' = quit the habit completely." }
    ]
  },

  // =========================================================================
  // MODULE 7: USED TO / BE, GET USED TO
  // =========================================================================
  used_to: {
    id: "used_to",
    category: "used_to",
    catTitle: "Used to / Be, Get used to",
    catTitleKh: "ទម្រង់ Used to, Be used to, Get used to",
    title: "Used to / Be, Get used to (ទម្រង់ Used to / Be, Get used to)",
    subtitle: "Past Habits vs. Being Accustomed to vs. The Process of Getting Familiar",
    badge: "7. Used to / Be, Get used to",
    hwSummary: {
      title: "Used to / Be & Get used to: Visual Summary Cheat-Sheet",
      tag: "Handwritten Master Notes",
      diagram: `
        <div class="hw-notebook-card">
          <div class="hw-top-stamp">💡 Note by Mr. OL • Hun Sen Svay Thom</div>
          <div class="hw-title">★ THE TRIPLE DISTINCTION: USED TO vs BE USED TO vs GET USED TO</div>
          
          <div class="hw-grid-2">
            <div class="hw-sketch-box">
              <div class="hw-box-head">1. USED TO + BASE VERB (Past Habit/State)</div>
              <div class="hw-formula">(+) S + used to + V1</div>
              <div class="hw-formula">(-) S + didn't use to + V1</div>
              <div class="hw-formula">(?) Did + S + use to + V1?</div>
              <p>➔ <em>I <b>used to live</b> in Siem Reap.</em> (True in past; NOT true now! ធ្លាប់ធ្វើពីមុន តែឥឡូវលែង)</p>
              <div class="hw-tip">⚠️ Danger Trap: Never use "I use to..." for present habits! Use "I usually..." ✅</div>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">2. BE USED TO + V-ing / NOUN (Accustomed)</div>
              <div class="hw-formula">S + [am/is/are/was/were] + used to + [V-ing / Noun]</div>
              <p>➔ <em>She is <b>used to waking up</b> at 5 AM.</em></p>
              <p>➔ <em>I am <b>used to the tropical heat</b>.</em></p>
              <p>➔ Meaning: Normal, familiar, comfortable, not strange! (ធ្លាប់ស៊ាំនឹង... មិនចម្លែក ឬមិនពិបាកឡើយ)</p>
            </div>
          </div>

          <div class="hw-grid-2" style="margin-top:10px;">
            <div class="hw-sketch-box">
              <div class="hw-box-head">3. GET USED TO + V-ing / NOUN (Adaptation)</div>
              <div class="hw-formula">S + [get/gets/got/will get] + used to + [V-ing / Noun]</div>
              <p>➔ <em>He is <b>getting used to driving</b> on the left.</em></p>
              <p>➔ <em>You will soon <b>get used to the new classroom</b>.</em></p>
              <p>➔ Meaning: The ongoing process of becoming familiar over time. (កំពុងស៊ាំទៅនឹង... ចាប់ផ្តើមសម្របខ្លួន)</p>
            </div>

            <div class="hw-sketch-box">
              <div class="hw-box-head">4. PASSIVE VOICE OF "USE" (Watch Out!)</div>
              <div class="hw-formula">Subject + be + used + to + Base Verb</div>
              <p>➔ <em>Bamboo <b>is used to build</b> houses.</em></p>
              <p>➔ <em>Solar panels <b>are used to generate</b> power.</em></p>
              <p>➔ Meaning: Passive of verb 'use' = used for the purpose of, NOT a habit!</p>
            </div>
          </div>

          <div class="hw-sketch-box" style="margin-top:12px;">
            <div class="hw-box-head">★ "USED TO" vs "WOULD" FOR PAST HABITS</div>
            <ul class="hw-list" style="font-size:0.85rem;">
              <li>✅ <b>Repeated Actions:</b> Both allowed! ➔ <em>My grandfather <b>used to / would</b> tell us folklore every night.</em></li>
              <li>❌ <b>Past States (be, have, live, know, like):</b> ONLY "used to" is correct! ➔ <em>He <b>used to be</b> thin.</em> (NOT <em>He would be thin</em> ❌)</li>
              <li>❌ <b>Negative &amp; Questions:</b> "Used to" with "did" is preferred ➔ <em>Did you <b>use to</b> ride a bike?</em></li>
            </ul>
          </div>
        </div>
      `
    },
    meaning: "These three structures share similar words but communicate entirely distinct temporal realities and psychological states. 'Used to + infinitive' refers exclusively to terminated past habits or past states that no longer exist. 'Be used to + V-ing/noun' means being accustomed or habituated to something so that it feels normal and unchallenging. 'Get used to + V-ing/noun' signifies the dynamic transitional process of adapting to something new. In Khmer, 'Used to + V' សម្គាល់ទម្លាប់ ឬស្ថានភាពពីអតីតកាលដែលបានបញ្ចប់ (ធ្លាប់... តែឥឡូវលែង)។ 'Be used to + V-ing' សម្គាល់ការធ្លាប់ស៊ាំ ឬស៊ាំនឹងអ្វីមួយ (មានអារម្មណ៍ធម្មតា មិនលំបាក)។ រីឯ 'Get used to + V-ing' សម្គាល់ដំណើរការនៃការសម្របខ្លួន ឬកំពុងស៊ាំទៅនឹងស្ថានភាពថ្មី។",
    formation: [
      { rule: "1. Used to (Past Habit/State)", detail: "Positive: S + used to + Base Verb; Negative: S + didn't use to + Base Verb; Question: Did + S + use to + Base Verb?" },
      { rule: "2. Be used to (Present/Past Familiarity)", detail: "S + [am/is/are/was/were] + used to + [V-ing / Noun / Pronoun]. Negative: S + am/is/are not + used to + [V-ing / N]." },
      { rule: "3. Get used to (Process of Adaptation)", detail: "S + [get/gets/got/will get/have got] + used to + [V-ing / Noun / Pronoun]." },
      { rule: "4. Passive 'Be used to + Base Verb'", detail: "Subject (Thing) + am/is/are/was/were + used + to + Base Verb (purpose/function)." }
    ],
    use: "Crucial for discussing personal background, historical changes, cultural adaptation (culture shock), overcoming difficulties in new environments, and academic BacII/IELTS comparative descriptions.",
    kinds: [
      { name: "1. Used to + Base Verb (Past Habits)", desc: "Repeated actions performed frequently in the past that are discontinued today.", example: "I used to play marbles with my village friends after school." },
      { name: "2. Used to + Base Verb (Past States)", desc: "Past situations, occupations, residences, or static truths that have changed.", example: "There used to be a dense forest where the school campus now stands. / He used to be very shy." },
      { name: "3. Be used to + V-ing/Noun (Present Comfort)", desc: "Being thoroughly accustomed to an environment, climate, noise, or routine.", example: "Siem Reap residents are used to welcoming tourists from all continents." },
      { name: "4. Be used to + V-ing/Noun (Past Comfort)", desc: "Being accustomed to a condition during an earlier epoch in life.", example: "When he lived in England, he was used to enduring sub-zero temperatures." },
      { name: "5. Get used to + V-ing/Noun (Adaptation)", desc: "The ongoing effort or journey of familiarization with novel conditions.", example: "Grade 10 students quickly get used to solving standardized Bloom's Taxonomy tests." },
      { name: "6. Passive 'Be used to' (Tool/Object Function)", desc: "Describes what a device, material, or tool is utilized for (takes Base Verb).", example: "Microphones are used to amplify the speaker's voice in the assembly hall." },
      { name: "7. Used to vs Would", desc: "'Would' is strictly for repeated actions in narrative prose; 'used to' works for both actions and states.", example: "We would go fishing on Sundays (action) ✅ / He used to live in Battambang (state) ✅." }
    ],
    exceptionalRules: [
      "Trap 1: Dropping the 'd' in Questions & Negatives: Because 'did' carries the past tense, write 'use to', NOT 'used to': 'Did you USE to walk?' ✅ (NOT 'Did you used to' ❌); 'I didn't USE to like tea' ✅ (NOT 'didn't used to' ❌).",
      "Trap 2: 'To' is a Preposition in 'Be/Get used to': Because 'to' is a preposition, it must be followed by a noun or GERUND (-ing): 'I am used to LIVING alone' ✅ (NOT 'used to live' ❌).",
      "Trap 3: Present Habit Error: English does NOT have a present tense 'use to'! To express current habits, use 'usually', 'normally', or the Present Simple: 'I usually get up at 6:00' ✅ (NEVER 'I use to get up at 6:00' ❌).",
      "Trap 4: Stative Verbs with 'Would': Never replace 'used to' with 'would' when the verb is stative: 'She used to have long hair' ✅ (NOT 'She would have long hair' ❌)."
    ],
    examples: [
      { en: "Past Habit: In the 1990s, students used to write all assignments by hand before computers became widespread.", kh: "ទម្លាប់ពីអតីតកាល៖ ក្នុងទសវត្សរ៍ឆ្នាំ ១៩៩០ សិស្សានុសិស្សធ្លាប់សរសេរកិច្ចការទាំងអស់ដោយដៃ មុនពេលកុំព្យូទ័រត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយ។", note: "'used to write' describes a discontinued past practice." },
      { en: "Past State: There used to be a traditional wooden bridge connecting the two riverbanks in Siem Reap.", kh: "ស្ថានភាពពីអតីតកាល៖ ពីមុនធ្លាប់មានស្ពានឈើបុរាណមួយតភ្ជាប់ត្រើយទាំងសងខាងនៃដងស្ទឹងសៀមរាប។", note: "'used to be' denotes a past existential reality that is no longer there." },
      { en: "Present Familiarity: Having taught for over fifteen years, Mr. Ouch Ol is used to explaining intricate grammar rules with ease.", kh: "ការធ្លាប់ស៊ាំបច្ចុប្បន្ន៖ ដោយបានបង្រៀនអស់រយៈពេលជាង ១៥ ឆ្នាំមកហើយ លោកគ្រូ អ៊ូច អុល បានស៊ាំទៅនឹងការពន្យល់ក្បួនវេយ្យាករណ៍ដ៏ស្មុគស្មាញយ៉ាងងាយស្រួល។", note: "'is used to explaining' expresses complete comfort and expertise (be used to + V-ing)." },
      { en: "Adaptation Process: Moving from junior high to high school can be daunting, but pupils soon get used to studying specialized subjects.", kh: "ដំណើរការសម្របខ្លួន៖ ការផ្លាស់ប្តូរពីអនុវិទ្យាល័យមកវិទ្យាល័យអាចជាការពិបាកខ្លះ ប៉ុន្តែសិស្សានុសិស្សឆាប់ស៊ាំនឹងការរៀនមុខវិជ្ជាឯកទេស។", note: "'get used to studying' emphasizes the dynamic transition of adaptation." }
    ]
  }

};

/**
 * Universal Modal Opener for Grammar Syllabus
 */
window.showGrammarMasterModal = function(topicKey) {
  const data = window.GRAMMAR_MASTER_DATA[topicKey] || window.GRAMMAR_MASTER_DATA.nouns;
  
  let modal = document.getElementById('grammar-master-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'grammar-master-modal';
    modal.className = 'modal-overlay grammar-modal-overlay';
    document.body.appendChild(modal);
  }

  // Generate tabs for quick switching between modules
  const allTopics = [
    { key: "nouns", label: "Nouns (នាម)" },
    { key: "pronouns", label: "Pronouns (សព្វនាម)" },
    { key: "verbs", label: "Verbs (កិរិយាសព្ទ)" },
    { key: "adverbs", label: "Adverbs (គុណកិរិយា)" },
    { key: "adjectives", label: "Adjectives (គុណនាម)" },
    { key: "prepositions", label: "Prepositions (ធៀបសព្វ)" },
    { key: "conjunctions", label: "Conjunctions (ឈ្នាប់)" },
    { key: "interjections", label: "Interjections (ឧទានសព្ទ)" },
    { key: "articles", label: "Articles (The/A/An/Ø)" },
    { key: "tenses_present", label: "Present Tenses" },
    { key: "tenses_past", label: "Past Tenses" },
    { key: "tenses_future", label: "Future Tenses" },
    { key: "voice", label: "Active & Passive Voice" },
    { key: "clauses", label: "Clauses (Noun/Adj/Adv)" },
    { key: "sentence_structures", label: "Sentence Structures & Fragments" },
    { key: "gerund_infinitive", label: "Gerund & Infinitive" },
    { key: "used_to", label: "Used to / Be, Get used to" }
  ];

  const tabsHtml = allTopics.map(t => `
    <button class="grammar-pill-tab ${t.key === data.id ? 'active' : ''}" onclick="window.showGrammarMasterModal('${t.key}')">
      ${t.label}
    </button>
  `).join('');

  // Formations list
  const formationsHtml = data.formation.map(f => `
    <div class="grammar-info-item">
      <div class="grammar-item-bullet">✦</div>
      <div>
        <strong>${f.rule}:</strong> <span class="text-secondary">${f.detail}</span>
      </div>
    </div>
  `).join('');

  // Kinds list
  const kindsHtml = data.kinds.map(k => `
    <div class="grammar-kind-card">
      <div class="grammar-kind-header">
        <span class="grammar-kind-title">${k.name}</span>
      </div>
      <p class="grammar-kind-desc">${k.desc}</p>
      <div class="grammar-kind-example">
        <span class="hw-ex-label">Example:</span> <em>${k.example}</em>
      </div>
    </div>
  `).join('');

  // Exceptional rules
  const exceptionsHtml = data.exceptionalRules.map(e => `
    <li class="grammar-exception-li">
      <span class="grammar-exc-icon">⚠️</span>
      <span>${e}</span>
    </li>
  `).join('');

  // Examples with Khmer translations
  const examplesHtml = data.examples.map((ex, idx) => `
    <div class="grammar-full-example-card">
      <div class="ex-number">#0${idx + 1}</div>
      <div class="ex-content">
        <div class="ex-en">${ex.en}</div>
        <div class="ex-kh">${ex.kh}</div>
        <div class="ex-note">💡 <strong>Analysis:</strong> ${ex.note}</div>
      </div>
    </div>
  `).join('');

  modal.innerHTML = `
    <div class="modal-card grammar-modal-card">
      <!-- Modal Header -->
      <div class="modal-header grammar-modal-header">
        <div class="grammar-modal-brand">
          <span class="badge-module">${data.badge}</span>
          <h2 class="grammar-modal-main-title">${data.title}</h2>
          <p class="grammar-modal-sub">${data.subtitle}</p>
        </div>
        <div class="grammar-modal-actions">
          <button class="hw-style-toggle-btn" id="hw-theme-toggle" title="Toggle Notebook / Chalkboard style">
            <span class="toggle-icon">🏫</span> <span class="toggle-text">Chalkboard Style</span>
          </button>
          <button class="modal-close-btn" id="grammar-modal-close" aria-label="Close modal">&times;</button>
        </div>
      </div>

      <!-- Quick Navigation Tabs Carousel -->
      <div class="grammar-tabs-bar">
        <div class="grammar-tabs-scroll">
          ${tabsHtml}
        </div>
      </div>

      <!-- Modal Scrollable Content Body -->
      <div class="modal-body grammar-modal-body">
        
        <!-- SECTION 1: PICTURE OF SUMMARIZE DETAIL (HANDWRITING FONT) -->
        <div class="grammar-section-block">
          <div class="section-title-wrap">
            <span class="sec-badge">1</span>
            <h3 class="grammar-sec-title">
              <span>🖼️ Summarize Detail (Handwritten Study Sheet)</span>
              <span class="sec-badge-kh">រូបភាពសង្ខេបព័ត៌មានលម្អិត (អក្សរដៃច្បាស់សាមញ្ញ)</span>
            </h3>
          </div>
          <div class="hw-sheet-container" id="hw-sheet-render-target">
            ${data.hwSummary.diagram}
          </div>
        </div>

        <!-- SECTION 2: DETAIL OF MEANING -->
        <div class="grammar-section-block">
          <div class="section-title-wrap">
            <span class="sec-badge">2</span>
            <h3 class="grammar-sec-title">
              <span>📖 Detail of Meaning & Core Concept</span>
              <span class="sec-badge-kh">អត្ថន័យ និងនិយមន័យលម្អិត</span>
            </h3>
          </div>
          <div class="grammar-meaning-box">
            <p class="grammar-meaning-text">${data.meaning}</p>
            <div class="grammar-use-box">
              <strong>🎯 Core Usage:</strong> ${data.use}
            </div>
          </div>
        </div>

        <!-- SECTION 3: FORMATION & RULES -->
        <div class="grammar-section-block">
          <div class="section-title-wrap">
            <span class="sec-badge">3</span>
            <h3 class="grammar-sec-title">
              <span>⚙️ Formation, Formulas & Structure</span>
              <span class="sec-badge-kh">រូបមន្ត និងទម្រង់នៃការកកើត</span>
            </h3>
          </div>
          <div class="grammar-formations-list">
            ${formationsHtml}
          </div>
        </div>

        <!-- SECTION 4: KINDS & CATEGORIES -->
        <div class="grammar-section-block">
          <div class="section-title-wrap">
            <span class="sec-badge">4</span>
            <h3 class="grammar-sec-title">
              <span>🗂️ Kinds & Sub-Classifications</span>
              <span class="sec-badge-kh">ប្រភេទនីមួយៗ និងការវិភាគ</span>
            </h3>
          </div>
          <div class="grammar-kinds-grid">
            ${kindsHtml}
          </div>
        </div>

        <!-- SECTION 5: EXCEPTIONAL RULES & KEYNOTES -->
        <div class="grammar-section-block">
          <div class="section-title-wrap">
            <span class="sec-badge">5</span>
            <h3 class="grammar-sec-title">
              <span>⚡ Exceptional Rules & Traps to Avoid</span>
              <span class="sec-badge-kh">ក្បួនលើកលែង និងចំណុចប្រយ័ត្ន</span>
            </h3>
          </div>
          <ul class="grammar-exceptions-list">
            ${exceptionsHtml}
          </ul>
        </div>

        <!-- SECTION 6: PRACTICAL EXAMPLES FOR EACH -->
        <div class="grammar-section-block">
          <div class="section-title-wrap">
            <span class="sec-badge">6</span>
            <h3 class="grammar-sec-title">
              <span>📝 Practical Model Examples (Bilingual Khmer-English)</span>
              <span class="sec-badge-kh">ឧទាហរណ៍ជាក់ស្តែងនីមួយៗ</span>
            </h3>
          </div>
          <div class="grammar-examples-grid">
            ${examplesHtml}
          </div>
        </div>

        <!-- SECTION 7: INTERACTIVE ACTIONS -->
        <div class="grammar-footer-actions">
          <a href="tests.html?cat=grammar" class="btn btn-primary grammar-action-btn">
            <span>📝</span> ធ្វើតេស្តអនុវត្តវេយ្យាករណ៍ (Practice Test)
          </a>
          <a href="teaching.html?cat=lessons" class="btn btn-secondary grammar-action-btn">
            <span>📚</span> មេរៀនសៀវភៅពុម្ពថ្នាក់ទី១០ (Grade 10 Book)
          </a>
          <button class="btn btn-outline grammar-action-btn" onclick="document.getElementById('grammar-master-modal').classList.remove('active'); document.body.style.overflow='';">
            <span>✕</span> បិទផ្ទាំងនេះ (Close)
          </button>
        </div>

      </div>
    </div>
  `;

  // Attach event handlers
  const closeBtn = modal.querySelector('#grammar-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Chalkboard style switcher
  const themeToggle = modal.querySelector('#hw-theme-toggle');
  const sheetTarget = modal.querySelector('#hw-sheet-render-target');
  if (themeToggle && sheetTarget) {
    let isChalkboard = false;
    themeToggle.addEventListener('click', () => {
      isChalkboard = !isChalkboard;
      if (isChalkboard) {
        sheetTarget.classList.add('chalkboard-mode');
        themeToggle.innerHTML = '<span class="toggle-icon">📝</span> <span class="toggle-text">Paper Notebook Style</span>';
      } else {
        sheetTarget.classList.remove('chalkboard-mode');
        themeToggle.innerHTML = '<span class="toggle-icon">🏫</span> <span class="toggle-text">Chalkboard Style</span>';
      }
    });
  }

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Update browser URL without reload if supported
  try {
    history.pushState(null, '', `?grammar=${data.id}`);
  } catch (err) {}
};
