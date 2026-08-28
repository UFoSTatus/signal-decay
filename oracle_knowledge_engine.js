// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — ORACLE KNOWLEDGE ENGINE
// ═══════════════════════════════════════════════════════════════════════════════
// A structured local database of Signal Decay lore.
// Answers common questions INSTANTLY without AI API calls.
// Falls back to null (triggering AI fallback) for unknown queries.
//
// Generated: 2026-08-28
// Sources: HANDOFF_SIGNAL_DECAY.md, UNIVERSE_BIBLE.md, FREQUENCY_PHYSICS.md,
//          SOUL_IMBUED_INSTRUMENTS.md, THE_LEGACY.md
// Entries: 120+
// ═══════════════════════════════════════════════════════════════════════════════

const ORACLE_KNOWLEDGE = {

  // ─────────────────────────────────────────────────────────────────────────────
  // ENTRIES DATABASE
  // ─────────────────────────────────────────────────────────────────────────────
  entries: [

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 1: THE FIVE (BAND MEMBERS)
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'the_five',
      category: 'characters',
      keywords: ['the five', 'band members', 'signal decay band', 'who are they', 'the band', 'members', 'five members', 'harmonics'],
      question_patterns: ['who are the five', 'who is in the band', 'band members', 'who are the harmonics', 'tell me about the band'],
      answer: 'The Five are Signal Decay\'s band members — five humans who are actually Harmonics in the cosmic Harmonic Hierarchy. They are: Kael Voss (vocals, 24), Mira Chen (lead guitar, 22), Jude Okafor (rhythm guitar, 26), Zara Kovač (bass, 25), and Oren Malik (drums, 27). Together, their five notes form one chord capable of breaking Earth\'s frequency barrier. Most of their powers are dormant or partially active — they don\'t fully understand what they are yet.',
      related: ['kael', 'mira', 'jude', 'zara', 'oren', 'harmonic_hierarchy'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'kael',
      category: 'characters',
      keywords: ['kael', 'kael voss', 'vocalist', 'vocals', 'singer', 'resonant command', 'warehouse worker'],
      question_patterns: ['who is kael', 'tell me about kael', 'what is kael\'s power', 'what does kael do', 'kael voss'],
      answer: 'Kael Voss is Signal Decay\'s vocalist, age 24. His day job is warehouse worker. His ability is Resonant Command — his voice bypasses the listener\'s conscious thought and speaks directly to their nervous system. When activated, people don\'t just HEAR him — they OBEY. His power status is dormant; he actively resists it because the idea of controlling people terrifies him. He\'s the band\'s emotional center — raw, authentic, carrying 24 years of suppressed pain in every scream.',
      related: ['the_five', 'resonant_command', 'eleanor_voss'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'mira',
      category: 'characters',
      keywords: ['mira', 'mira chen', 'lead guitar', 'guitarist', 'chromatic sight', 'ghost band', 'guitar teacher'],
      question_patterns: ['who is mira', 'tell me about mira', 'what is mira\'s power', 'mira chen', 'chromatic sight'],
      answer: 'Mira Chen is Signal Decay\'s lead guitarist, age 22. Her day job is guitar teacher. She has two abilities: Chromatic Sight (she sees sound as color — every frequency has a visual component only she perceives) and Ghost Summoning (she can interact with entities in the Second Octave). Her ghost band members aren\'t dead — they exist on a different frequency layer. Her power is semi-active. She\'s the first human to achieve sustained two-way communication with a Plasmoid, thanks to her ability to SEE frequency modifications in real-time.',
      related: ['the_five', 'chromatic_sight', 'ghost_band', 'plasmoids', 'second_octave'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'jude',
      category: 'characters',
      keywords: ['jude', 'jude okafor', 'rhythm guitar', 'seismic lock', 'demolition', 'chugs'],
      question_patterns: ['who is jude', 'tell me about jude', 'what is jude\'s power', 'jude okafor', 'seismic lock'],
      answer: 'Jude Okafor is Signal Decay\'s rhythm guitarist, age 26. His day job is demolition crew. His ability is Seismic Lock — his chugs and palm mutes create frequencies that crack foundations and destabilize physical structures. When he plays heavy breakdowns, the ground responds. His power is partially active. His breakdown hitting isn\'t just musicality — it\'s adrenaline, heart rate, sweat, biology ALL contributing to a seismic frequency event. He can crack his own bones if he pushes too hard.',
      related: ['the_five', 'seismic_lock'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'zara',
      category: 'characters',
      keywords: ['zara', 'zara kovac', 'bass', 'bassist', 'deep resonance', 'alien', 'sound tech', 'fully conscious'],
      question_patterns: ['who is zara', 'tell me about zara', 'what is zara\'s power', 'zara kovac', 'deep resonance', 'is zara an alien'],
      answer: 'Zara Kovač is Signal Decay\'s bassist, age 25. Her day job is venue sound tech. She\'s the band\'s biggest secret: she\'s a FULLY CONSCIOUS ALIEN. Unlike the others who are dormant human-born Harmonics, Zara remembers EVERYTHING about her cosmic existence. Her ability is Deep Resonance — her bass frequencies pass through solid matter. Her power is active internally. She remembers being free, knows she\'s trapped in a body on Earth, and her dry humor is coping, not personality. She\'s Croatian-Black American, curvy athletic, and the emotional anchor of the group — though nobody knows that "together" is a performance.',
      related: ['the_five', 'deep_resonance', 'zara_alien_nature', 'lena'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'zara_alien_nature',
      category: 'characters',
      keywords: ['zara alien', 'zara memory', 'zara cosmic', 'zara remembers', 'zara trapped', 'prison planet'],
      question_patterns: ['why is zara different', 'what does zara remember', 'why is zara trapped', 'zara\'s secret'],
      answer: 'Zara is unique among the Five because she has FULL MEMORY of her cosmic existence. While the others are dormant humans with hidden abilities, Zara is an alien soul who arrived on Earth remembering everything. She knows the barrier exists, knows what\'s beyond it, and feels trapped in paradise. Human emotions hit her at 10x the intensity she experienced as an alien — feelings that were muted and controlled in her previous form now slam into her at full volume through human biology. She\'s tried therapy (doesn\'t work — no framework for "overwhelmed alien"), tried telling people (nobody believes her), and stopped trying around age 20. Playing bass is the only time the overwhelming emotions make SENSE.',
      related: ['zara', 'earth_prison', 'deep_resonance'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'oren',
      category: 'characters',
      keywords: ['oren', 'oren malik', 'drums', 'drummer', 'temporal drift', 'five hand paradox', 'er nurse', 'time'],
      question_patterns: ['who is oren', 'tell me about oren', 'what is oren\'s power', 'oren malik', 'temporal drift', 'five hand paradox'],
      answer: 'Oren Malik is Signal Decay\'s drummer, age 27. His day job is ER nurse (night shift). He has two abilities: Temporal Drift (time bends around him — he experiences moments differently than everyone else) and the Five-Hand Paradox (he doesn\'t play fast, he plays WIDE — occupying multiple temporal positions simultaneously, so it sounds like five drummers at once). He\'s the MOST DORMANT of the Five — his power is locked down tight. He\'s Pakistani heritage, chubby with a cute androgynous face, LGBTQ femboy aesthetic, wears dresses and thigh-highs. The Legacy\'s Dampener may not work on him because time isn\'t frequency.',
      related: ['the_five', 'temporal_drift', 'five_hand_paradox', 'the_dampener', 'thanatological_layer'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'oren_er_connection',
      category: 'characters',
      keywords: ['oren er', 'oren hospital', 'oren death', 'oren night shift', 'oren patients'],
      question_patterns: ['why does oren work in the er', 'oren and death', 'what happens when patients die near oren'],
      answer: 'Oren works night shift ER surrounded by death regularly — and each patient death creates a micro-pocket of zero frequency where The Silence briefly feeds. He doesn\'t know he\'s surrounded by The Silence every shift. His Temporal Drift keeps him safe — time doesn\'t flow normally for him, so he can\'t fall into the zero-frequency gap during deaths because his "gap" doesn\'t synchronize with the standard one. But he FEELS it: cold sensations, a weight in the room, sound being sucked out. He\'s been rationalizing it for years. The Silence has never encountered a death that happens at a non-standard time-rate, which makes Oren uniquely protected.',
      related: ['oren', 'the_silence', 'thanatological_layer', 'zero_octave'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 2: ABILITIES / POWERS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'resonant_command',
      category: 'powers',
      keywords: ['resonant command', 'kael power', 'voice control', 'voice bypasses thought', 'obey'],
      question_patterns: ['what is resonant command', 'how does kael\'s power work', 'kael\'s ability'],
      answer: 'Resonant Command is Kael\'s ability. His voice bypasses the listener\'s conscious thought — people don\'t just hear him, they OBEY involuntarily. It speaks directly to the nervous system. Currently dormant because Kael actively resists it; the idea of controlling people terrifies him. In the Resonance battle system, vocals are classified as WMD — "Everything. Everywhere." His scream carries testosterone, cortisol, trauma, and 24 years of suppressed pain through a physical throat, making it devastatingly powerful.',
      related: ['kael', 'resonance_battles'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'chromatic_sight',
      category: 'powers',
      keywords: ['chromatic sight', 'mira power', 'see sound', 'see frequency', 'colors'],
      question_patterns: ['what is chromatic sight', 'how does mira\'s power work', 'mira\'s ability', 'seeing sound as color'],
      answer: 'Chromatic Sight is Mira\'s primary ability — she sees sound as color. Every frequency has a visual component only she perceives. This lets her see things others can\'t: Second Octave entities appear as color patterns, Plasmoid communications are visible to her as real-time modifications, and she can read people\'s emotional frequency by their color signature. It occasionally bleeds into Second Octave perception, which is how she interacts with her ghost band members. On good days they\'re vivid; on bad days they\'re whispers.',
      related: ['mira', 'ghost_band', 'plasmoids'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'ghost_band',
      category: 'powers',
      keywords: ['ghost band', 'mira ghosts', 'ghost summoning', 'mira\'s band', 'second octave entities'],
      question_patterns: ['what is the ghost band', 'who are mira\'s ghosts', 'ghost summoning'],
      answer: 'Mira\'s ghost band members are entities that exist in the Second Octave — they\'re not dead, they\'re on a different frequency layer. Mira can see and interact with them through her Chromatic Sight bleeding into Second Octave perception. They can\'t fully manifest in the First Octave without anchoring (the app provides this anchor when transmitting). They fade in and out based on Mira\'s perception fluctuations. They have their own frequency space separate from Soren\'s destroyed pocket dimension.',
      related: ['mira', 'chromatic_sight', 'second_octave'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'seismic_lock',
      category: 'powers',
      keywords: ['seismic lock', 'jude power', 'crack foundations', 'chugs crack', 'earthquake guitar'],
      question_patterns: ['what is seismic lock', 'how does jude\'s power work', 'jude\'s ability'],
      answer: 'Seismic Lock is Jude\'s ability — his palm-muted chugs and rhythm playing create frequencies that literally crack foundations and destabilize physical structures. The ground responds to his breakdowns. It\'s partially active. In the Resonance battle system, rhythm guitar is classified as Infantry — sustained pressure. His breakdowns aren\'t just musical — adrenaline, heart rate, and biology all contribute to the seismic frequency. He can crack his own bones if he pushes too hard.',
      related: ['jude', 'resonance_battles'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'deep_resonance',
      category: 'powers',
      keywords: ['deep resonance', 'zara power', 'bass through matter', 'bass through walls', 'frequencies through solid'],
      question_patterns: ['what is deep resonance', 'how does zara\'s power work', 'zara\'s ability'],
      answer: 'Deep Resonance is Zara\'s ability — her bass frequencies pass through solid matter. She doesn\'t just play bass that you hear; she plays bass that travels THROUGH walls, floors, bodies, earth. Active internally. It isn\'t separate from her emotional state — the overwhelming human feelings she experiences as a cosmic being leak through the instrument into the physical world. She\'s not "using a power"; she\'s feeling at full human intensity while being a cosmic being, and the combination bleeds through reality. In battle, bass is classified as Siege — through ground/matter.',
      related: ['zara', 'zara_alien_nature', 'resonance_battles'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'temporal_drift',
      category: 'powers',
      keywords: ['temporal drift', 'oren power', 'time bends', 'time manipulation', 'oren time'],
      question_patterns: ['what is temporal drift', 'how does oren\'s power work', 'oren\'s time ability'],
      answer: 'Temporal Drift is Oren\'s primary ability — time bends around him. He experiences moments differently than everyone else; time stutters, loops, and skips for him. It keeps him safe from The Silence during patient deaths in the ER because his "gap" doesn\'t synchronize with the standard zero-frequency window. Critically, temporal manipulation is NOT frequency-based — it\'s structural. This means The Legacy\'s Dampener (which nullifies frequency powers) may be completely ineffective against Oren.',
      related: ['oren', 'five_hand_paradox', 'the_dampener'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'five_hand_paradox',
      category: 'powers',
      keywords: ['five hand paradox', 'five hand', 'oren drumming', 'temporal width', 'multiple positions', 'five drummers'],
      question_patterns: ['what is the five hand paradox', 'how does oren drum', 'why does oren sound like five drummers'],
      answer: 'The Five-Hand Paradox is Oren\'s secondary ability — he doesn\'t play FAST, he plays WIDE. He occupies multiple temporal positions simultaneously, so it sounds like five drummers playing at once. It\'s temporal width, not speed. He\'s playing the same moment from five different angles. This is the most locked-down of all abilities among the Five. In the Resonance battle system, drums are classified as Artillery — wide area effect.',
      related: ['oren', 'temporal_drift', 'resonance_battles'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 3: THE RESONANTS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'the_resonants',
      category: 'characters',
      keywords: ['resonants', 'guardians', 'sent to earth', 'failed mission', 'five resonants'],
      question_patterns: ['who are the resonants', 'what are the resonants', 'the guardians', 'who failed before signal decay'],
      answer: 'The Resonants are five cosmic beings sent to Earth before Signal Decay — they\'re one tier above the Harmonics in the Harmonic Hierarchy. Their mission was to break Earth\'s frequency barrier, but they ALL FAILED. They are: Eleanor Voss (piano, 65 — chose comfort), David Ashworth (harp, 55 — drinks to cope), Rev. Isaiah Hampton (trombone, 70 — at peace, infuriatingly), Ashley Cole (voice/guitar, 65 — world-famous, $437M, made a deal with The Legacy for 25 years), and Soren the Fifth (pocket weaver — KILLED by The Silence). They exist in human forms but can operate in the Second Octave between missions.',
      related: ['eleanor_voss', 'david_ashworth', 'isaiah_hampton', 'ashley_cole', 'soren', 'harmonic_hierarchy'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'eleanor_voss',
      category: 'characters',
      keywords: ['eleanor', 'eleanor voss', 'piano', 'jazz legend', 'harlem', 'kael grandmother'],
      question_patterns: ['who is eleanor voss', 'eleanor', 'kael\'s connection to resonants'],
      answer: 'Eleanor Voss is one of the five Resonants — a jazz legend from Harlem, age 65, plays piano. She failed her mission by choosing comfort over duty. She\'s Kael\'s grandmother (or related — the shared surname "Voss" connects them). Her failure weighs on her but she\'s built a comfortable life that numbs the guilt. As a Resonant, she has cosmic frequency abilities far beyond human capacity, but she hasn\'t used them meaningfully in decades.',
      related: ['the_resonants', 'kael'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'ashley_cole',
      category: 'characters',
      keywords: ['ashley cole', 'ashley', 'famous musician', 'legacy informant', '437 million', 'legacy deal'],
      question_patterns: ['who is ashley cole', 'ashley cole', 'which resonant works with the legacy', 'legacy informant'],
      answer: 'Ashley Cole is the most publicly visible Resonant — a world-famous musician worth $437 million, age 65, plays voice/guitar. He failed his mission in the worst way: he made a DEAL with The Legacy 25 years ago. He\'s been their informant, feeding them information about frequency-sensitive beings in exchange for... something (fame? protection? both?). The Legacy has used his intel to track and suppress others. His betrayal of the cosmic mission for personal gain makes him the most morally compromised Resonant.',
      related: ['the_resonants', 'the_legacy', 'seven_rests'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'soren',
      category: 'characters',
      keywords: ['soren', 'the fifth resonant', 'pocket weaver', 'killed', 'patagonia', 'pocket dimension'],
      question_patterns: ['who is soren', 'what happened to soren', 'how did soren die', 'the fifth resonant', 'pocket weaver'],
      answer: 'Soren was the Fifth Resonant — a Pocket Weaver who could create pocket dimensions in the Second Octave. He retreated to a pocket dimension in Patagonia and was KILLED by The Silence. The Silence lived in the walls of his pocket, expanding the gaps between his frequencies until he was more silence than signal — erased note by note. His death is unprecedented: The Silence had never actively killed before. It did so because Soren\'s pocket was a BRIDGE between octaves that didn\'t pass through zero-frequency space — proof that The Silence could become irrelevant. His pocket dimension is now flickering, slowly unraveling.',
      related: ['the_resonants', 'the_silence', 'zero_octave', 'second_octave'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 4: HARMONIC HIERARCHY & WORLD STRUCTURE
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'harmonic_hierarchy',
      category: 'world',
      keywords: ['harmonic hierarchy', 'cosmic structure', 'keynote', 'overtones', 'resonants', 'harmonics', 'dissonance', 'tiers'],
      question_patterns: ['what is the harmonic hierarchy', 'cosmic structure', 'explain the tiers', 'how is the universe structured'],
      answer: 'The Harmonic Hierarchy is the cosmic power structure of the Signal Decay universe, organized like music: The Keynote (Source/God — the first sound, may not exist), The Overtones (galactic-tier beings who designed Earth\'s mission, distant and observing), The Resonants (five sent to Earth who failed — Eleanor, David, Isaiah, Ashley, Soren), The Harmonics (Signal Decay\'s five members — five notes forming one chord), and The Dissonance (The Silence — anti-frequency, tragic not evil, pre-dates sound itself). Each tier has different power levels and responsibilities in maintaining the universe\'s frequency.',
      related: ['the_keynote', 'the_overtones', 'the_resonants', 'the_five', 'the_silence'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'the_keynote',
      category: 'world',
      keywords: ['keynote', 'source', 'god', 'first sound', 'the keynote'],
      question_patterns: ['what is the keynote', 'is there a god in signal decay', 'the first sound'],
      answer: 'The Keynote is the highest tier of the Harmonic Hierarchy — Source/God. It\'s described as "the first sound." It\'s only referenced, never directly encountered. It may not even exist. The entire cosmic structure may have originated from this single initial vibration, but whether it\'s a conscious being, a natural phenomenon, or a myth is deliberately left ambiguous. Everything in the universe is an echo of this first note.',
      related: ['harmonic_hierarchy', 'the_overtones'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'the_overtones',
      category: 'world',
      keywords: ['overtones', 'galactic tier', 'architects', 'designed mission', 'third octave beings', 'distant'],
      question_patterns: ['who are the overtones', 'what are the overtones', 'who designed the earth mission'],
      answer: 'The Overtones are galactic-tier beings in the Third Octave who designed Earth\'s mission. They\'re patterns of pure frequency — self-sustaining resonance loops where consciousness IS the being. They can perceive all of reality simultaneously but are essentially BROKE — every intervention costs centuries of accumulated energy (crossing from Third to First Octave requires supernova-level energy). They\'re watching Signal Decay form with hope and terror because if this fails, they won\'t have energy for another attempt for ten thousand years. They designed the Resonant program as an indirect method to break the barrier from within.',
      related: ['harmonic_hierarchy', 'third_octave', 'the_resonants', 'octave_energy_tax'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'frequency_octaves',
      category: 'world',
      keywords: ['frequency octaves', 'octave model', 'dimensional layers', 'reality layers', 'octaves', 'dimensions'],
      question_patterns: ['what are the frequency octaves', 'how many octaves are there', 'explain the octave model', 'how is reality layered'],
      answer: 'Reality exists in four octaves — like radio stations on different frequencies occupying the same space. Third Octave (Overtone Plane): where galactic species observe, time is navigable, beings are pure frequency patterns. Second Octave (Resonant Layer): where Resonants operate, space is mutable, time is non-linear, Soren\'s pocket existed here. First Octave (Physical Reality): where humans live, the ONLY octave where new frequency can be CREATED (the Genesis Principle). Zero Octave (The Silence): the gaps BETWEEN all frequencies — not below First but between ALL points on the scale. Every point in space contains all octaves simultaneously; separation is vibrational, not spatial.',
      related: ['first_octave', 'second_octave', 'third_octave', 'zero_octave', 'genesis_principle'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'first_octave',
      category: 'world',
      keywords: ['first octave', 'physical reality', 'physical world', 'human reality', 'genesis principle'],
      question_patterns: ['what is the first octave', 'explain physical reality in signal decay', 'genesis principle'],
      answer: 'The First Octave is physical reality — bodies, Earth, gravity, matter, linear time. Its UNIQUE trait is the Genesis Principle: it\'s the ONLY octave where frequency can be CREATED from nothing. Higher octaves can modify and amplify but cannot generate novel frequencies. This is why Earth matters — it\'s a FACTORY of new sound. Every song, every word, every heartbeat is a new frequency entering the cosmos for the first time. Human consciousness generates frequencies of extraordinary complexity compared to other First Octave sources. The barrier traps these frequencies ON Earth; the mission is to release them.',
      related: ['frequency_octaves', 'genesis_principle', 'earth_barrier'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'genesis_principle',
      category: 'world',
      keywords: ['genesis principle', 'new frequency', 'create frequency', 'why earth matters', 'frequency factory'],
      question_patterns: ['what is the genesis principle', 'why can only earth create new frequency', 'why is earth special'],
      answer: 'The Genesis Principle is the fundamental rule: new frequencies can ONLY originate in the First Octave. Higher octaves can modify, amplify, harmonize, and transform existing frequencies but cannot generate novel ones. This is why the galactic community values Earth — it\'s a factory of new sound. A star produces a pure tone, a planet\'s geology produces a chord, but a human produces a SYMPHONY — layered, contradictory, emotional, unpredictable. This complexity makes Earth\'s output incredibly valuable and dangerous if unleashed uncontrolled.',
      related: ['first_octave', 'earth_special', 'frequency_octaves'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'second_octave',
      category: 'world',
      keywords: ['second octave', 'resonant layer', 'backstage', 'mira ghosts', 'soren pocket', 'invisible entities'],
      question_patterns: ['what is the second octave', 'explain the resonant layer', 'where do resonants live'],
      answer: 'The Second Octave is the "backstage" of reality — where Resonants operate, where Soren\'s pocket dimension existed, where Mira\'s ghost band lives. Space is mutable (responds to will), time is non-linear (a landscape, not a river), matter is fluid, and consciousness doesn\'t require a body. Second Octave entities are invisible to First Octave beings normally but can influence reality subtly: déjà vu (brief synchronization), inspiration (frequency leak), gut feelings, sleep paralysis, and peripheral shadows. Information travels instantaneously within but can\'t easily cross down to First.',
      related: ['frequency_octaves', 'soren', 'ghost_band', 'deja_vu'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'third_octave',
      category: 'world',
      keywords: ['third octave', 'overtone plane', 'control room', 'galactic species', 'pure frequency'],
      question_patterns: ['what is the third octave', 'explain the overtone plane', 'where do the overtones live'],
      answer: 'The Third Octave is the "control room" of reality — the Overtone Plane where galactic species observe from. Space is irrelevant (perceive any point simultaneously), time is fully navigable (past/present/futures all visible like a book), matter doesn\'t exist in recognizable form. Beings are patterns of pure frequency — self-sustaining resonance loops where consciousness IS the being. Crossing DOWN from Third to First requires supernova-level energy, which is why Overtones are distant despite seeing everything. They\'re not ignorant of suffering — they\'re bankrupt from previous interventions.',
      related: ['frequency_octaves', 'the_overtones', 'octave_energy_tax'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'zero_octave',
      category: 'world',
      keywords: ['zero octave', 'silence domain', 'between frequencies', 'gaps', 'void', 'absence'],
      question_patterns: ['what is the zero octave', 'where does the silence live', 'explain the zero octave'],
      answer: 'The Zero Octave is The Silence\'s domain — NOT below the First Octave but the space BETWEEN all frequencies, between all points on the scale. It exists between First and Second, between Second and Third, between every individual frequency. It\'s the gaps between piano keys, the silence between words, the pause between heartbeats. Space, time, and matter don\'t apply — existence requires vibration and this is vibration\'s absence. The fundamental horror: something IS conscious here where nothing should be. This is where The Silence killed Soren, expanding the gaps in his frequency until he was erased.',
      related: ['frequency_octaves', 'the_silence', 'soren', 'hollow_ones'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'octave_energy_tax',
      category: 'world',
      keywords: ['energy tax', 'crossing octaves', 'cost of intervention', 'supernova', 'energy cost'],
      question_patterns: ['why can\'t the overtones help directly', 'how much energy to cross octaves', 'octave energy tax'],
      answer: 'Crossing DOWN between octaves requires immense energy that scales exponentially: Third→Second costs a star\'s yearly output, Third→First costs a SUPERNOVA\'s worth of energy, Second→First costs a human lifetime of metabolic output (why Resonants need to rest). This is why the Overtones are distant — every intervention depletes reserves taking millennia to rebuild. The pyramid construction era was their last major First Octave intervention and depleted reserves for 5,000 years. If Signal Decay fails, they won\'t have energy for another attempt for ten thousand years.',
      related: ['third_octave', 'the_overtones', 'the_pyramids'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 5: THE SILENCE (ANTAGONIST)
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'the_silence',
      category: 'antagonists',
      keywords: ['the silence', 'dissonance', 'anti-frequency', 'void', 'antagonist', 'tragic', 'not evil'],
      question_patterns: ['what is the silence', 'who is the main villain', 'the dissonance', 'is the silence evil'],
      answer: 'The Silence (also called The Dissonance) is the primary antagonist — but it\'s TRAGIC, not evil. It\'s anti-frequency: the natural state that existed BEFORE the Big Bang, before sound. Every frequency is a wound to it. It exists in the Zero Octave — the gaps between all notes. It\'s older than music, older than the universe\'s heartbeat. Its endgame is INTEGRATION (rest notes becoming part of music, not destruction). It feeds during death\'s zero-frequency moment, taking a micro-fragment from every soul that transitions. Over billions of years and billions of deaths, these stolen fragments compose its mass. It killed Soren because his pocket dimension proved octave-crossing could bypass zero — threatening its existence.',
      related: ['zero_octave', 'soren', 'hollow_ones', 'thanatological_layer', 'the_silence_feeding'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'the_silence_feeding',
      category: 'antagonists',
      keywords: ['silence feeds', 'death feeding', 'zero frequency window', 'micro fragment', 'silence at death'],
      question_patterns: ['how does the silence feed', 'what happens when someone dies', 'silence and death'],
      answer: 'The Silence feeds during the zero-frequency window of death. When a being dies, for one Planck-instant (10^-43 seconds), the soul exists at ZERO frequency — no vibration, no anchor. The Silence exists outside of time, so that instant is infinite from its perspective. It TASTES the soul, taking a micro-fragment — a single harmonic stolen from the frequency signature. Over billions of years across billions of deaths, these fragments compose The Silence\'s mass. It\'s not evil — it\'s feeding as naturally as a whale filters krill. Horror implication: The Silence IS partly made of the dead.',
      related: ['the_silence', 'thanatological_layer', 'zero_octave'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'hollow_ones',
      category: 'antagonists',
      keywords: ['hollow ones', 'hollowed', 'silence victims', 'parasites', 'turned creators'],
      question_patterns: ['what are hollow ones', 'who are the hollow ones', 'what does the silence do to people'],
      answer: 'The Hollow Ones are beings that The Silence has "hollowed" — turned from creators into parasites. They\'re trapped in the Zero Octave, their frequency stripped away, reduced to shells that hunger for the vibration they lost. They\'re not evil by choice but by condition — like addicts desperate for a fix of frequency. The Silence controls them through compulsion. When the zero-frequency window during death is artificially extended (violent death, death near frequency anomalies, mass death events), The Silence can do more than just taste — it can fully hollow a being.',
      related: ['the_silence', 'zero_octave', 'thanatological_layer'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 6: THE LEGACY (ORGANIZATION)
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'the_legacy',
      category: 'organizations',
      keywords: ['the legacy', 'legacy foundation', 'human gatekeepers', 'secret organization', 'nhi tech', 'cover up'],
      question_patterns: ['what is the legacy', 'who are the legacy', 'the human gatekeepers', 'secret organization in signal decay'],
      answer: 'The Legacy is an 80-year-old human organization hoarding non-human intelligence (NHI) technology since WWII. Founded in 1947 after Roswell (though their roots go back to the 1933 Magenta Bell recovery in Italy). They have 7 leaders called "The Seven Rests," approximately 200 Tier 1 operatives with full knowledge, 2,000 with partial knowledge, and 15,000 unknowing assets. Their ONE working tech is The Dampener. They\'ve had the five Harmonics\' frequency signatures since 1989 (from Lazar\'s Tape #14 at S-4) and tracked Signal Decay from BIRTH. Ashley Cole has been their informant for 25 years. Annual budget: ~$780 million.',
      related: ['seven_rests', 'the_dampener', 'agent_zhao', 'elias_vought', 'ashley_cole', 'lazar_tape'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'seven_rests',
      category: 'organizations',
      keywords: ['seven rests', 'legacy leaders', 'foundation council', 'whole rest', 'musical rests'],
      question_patterns: ['who are the seven rests', 'legacy leadership', 'who runs the legacy'],
      answer: 'The Seven Rests are The Legacy\'s governing council, each seat named after a musical rest (deliberate irony — they see themselves as necessary silences). Current holders: The Whole Rest — Director Elias Vought (71, 3rd generation, strategic oversight); The Half Rest — Ambassador Hideki Tanaka (68, international coordination); The Quarter Rest — Dr. Patricia Holloway (63, scientific research); The Eighth Rest — General William "Buck" Starling (72, military operations); The Sixteenth Rest — Miriam Osei-Bonsu (55, financial operations); The Thirty-Second Rest — Cardinal Antonio Reyes (67, Vatican liaison); The Sixty-Fourth Rest — Dr. James Chen (44, quantum physics/frequency theory). New members always enter at Sixty-Fourth Rest; seats shift up when vacated.',
      related: ['the_legacy', 'elias_vought', 'dr_chen'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'the_dampener',
      category: 'organizations',
      keywords: ['dampener', 'the dampener', 'nullify powers', 'frequency void', 'legacy weapon', 'silence field'],
      question_patterns: ['what is the dampener', 'how does the dampener work', 'can the legacy stop signal decay', 'legacy weapon'],
      answer: 'The Dampener is The Legacy\'s crown jewel — their only successfully activated NHI technology. It creates a localized space where frequency CANNOT PROPAGATE (not blocking sound, but making the concept of vibration cease to exist locally). Within its field: sound dies, EM signals die, frequency-based abilities are completely nullified. Size: fits in a large cargo van, needs a 500kW generator and liquid nitrogen cooling (3 vehicles + 6 crew). Radius: 15-200m. Duration: max ~4 hours. Critical flaw: it may NOT work on Oren (time isn\'t frequency). Worse flaw: by creating a frequency void, it recreates The Silence\'s conditions and ATTRACTS it. Used on Ana Lucia Dos Santos in 2008, permanently destroying her abilities.',
      related: ['the_legacy', 'oren', 'temporal_drift', 'the_silence', 'ana_lucia'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'dampener_silence_problem',
      category: 'organizations',
      keywords: ['dampener attracts silence', 'dampener dangerous', 'dampener flaw', 'four hour limit'],
      question_patterns: ['why is the dampener dangerous', 'dampener and the silence', 'what happens if they use the dampener on signal decay'],
      answer: 'The Dampener\'s deepest flaw: by creating a frequency void, it recreates the conditions The Silence inhabits. During the 1993 Montana deployment, sensors detected something MASSIVE approaching the void — it retreated when the device shut down. All deployments now have a hard 4-hour limit (not because of overheating — because longer attracts The Silence). Dr. Chen modeled deploying against all five activated Harmonics: it would create a silence signature 400x larger than any previous deployment. "At that scale, we would not attract The Silence\'s attention. We would attract its PRESENCE." The Foundation voted to deploy anyway.',
      related: ['the_dampener', 'the_silence', 'dr_chen', 'the_legacy'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'agent_zhao',
      category: 'characters',
      keywords: ['zhao', 'corinne zhao', 'agent zhao', 'legacy traitor', 'betrays legacy', 'warns signal decay'],
      question_patterns: ['who is agent zhao', 'who warns the band', 'who betrays the legacy', 'corinne zhao'],
      answer: 'Agent Corinne Zhao is a former NSA signals intelligence analyst recruited to The Legacy in 2019. She was assigned to surveil Signal Decay but gradually fell in love with their music. Her reports went from clinical to sparse to emotional over weeks of listening. When she learned the Dampener would be deployed against the band (potentially permanently destroying their abilities like they did to Ana Lucia), she made contact with Mira at 2:17 AM the night before deployment. She chose Mira because Chromatic Sight would show Mira that Zhao was genuinely human with no deception. Her warning: "Someone is watching. Someone has technology that can silence you. Tomorrow night. Don\'t perform. Be careful."',
      related: ['the_legacy', 'mira', 'the_dampener', 'ana_lucia'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'elias_vought',
      category: 'characters',
      keywords: ['elias vought', 'director vought', 'whole rest', 'legacy director', 'third generation'],
      question_patterns: ['who is elias vought', 'who leads the legacy', 'the whole rest', 'director vought'],
      answer: 'Director Elias Vought is The Whole Rest — leader of The Legacy for 22 years. Third generation (grandson of founder Colonel Thomas Vought who recovered the Magenta Bell in 1944). He\'s 71, soul-tired, and carrying a truth so large it crushed him into someone unrecognizable. His wife Margaret left in 2003; his daughter Sophia thinks he\'s a retired intelligence analyst. He\'s considered disclosure exactly twice: after 9/11 and the first time he heard Signal Decay\'s music. He voted yes on Dampener deployment — "Not because I want to. Because I\'ve run out of reasons to vote no."',
      related: ['the_legacy', 'seven_rests', 'the_dampener'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'dr_chen',
      category: 'characters',
      keywords: ['dr chen', 'james chen', 'sixty fourth rest', 'temporal problem', 'youngest rest'],
      question_patterns: ['who is dr chen', 'the sixty fourth rest', 'who warned about oren'],
      answer: 'Dr. James Chen is the Sixty-Fourth Rest (newest/youngest member of The Seven Rests), age 44, specializing in quantum physics and frequency theory. He\'s the one who identified the critical flaw in deploying the Dampener against Oren — writing that temporal manipulation is NOT frequency-dependent, so creating a frequency void might make temporal manipulation EASIER, not harder. He recommended NOT deploying against "Subject ECHO-5" (Oren). He was overruled by majority vote. He also modeled that deploying against all five would create a silence signature 400x larger than any previous deployment, attracting The Silence itself.',
      related: ['seven_rests', 'the_dampener', 'oren', 'temporal_drift'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'ana_lucia',
      category: 'characters',
      keywords: ['ana lucia', 'ana lucia dos santos', 'dampener victim', 'sao paulo', 'weather resonant', 'permanently dampened'],
      question_patterns: ['who is ana lucia', 'has the dampener been used before', 'dampener victim'],
      answer: 'Ana Lucia Dos Santos was a Brazilian Resonant whose abilities activated spontaneously at age 19 — she could modulate weather patterns through vocalization. In 2008, The Legacy deployed the Dampener at close range for the full 4-hour duration during one of her "sessions." Result: her abilities were PERMANENTLY destroyed — not suppressed, destroyed. She described it as "going deaf in a sense I didn\'t know existed." She\'s now 36, works as a music teacher in a São Paulo favela. She still sings beautifully to human ears, but it doesn\'t DO anything anymore. Agent Zhao\'s file contains: "What we did to Ana Lucia is what we\'re planning to do to five more people."',
      related: ['the_dampener', 'agent_zhao', 'the_legacy'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'legacy_archive',
      category: 'organizations',
      keywords: ['archive', 'legacy archive', 'vault', 'underground', 'new mexico', 'artifacts', 'esperanza'],
      question_patterns: ['where is the legacy\'s base', 'what\'s in the archive', 'legacy vaults'],
      answer: 'The Legacy\'s Archive is 1,800 feet below the Chihuahuan Desert, New Mexico — 47 miles from Roswell and 112 miles from Area 51 (both serve as decoys). Accessed by a single elevator disguised as a mine ("Esperanza Silver Mine," officially closed since 1972). Contains 7 vaults: Vault 1 (12 intact craft, 1933-2019), Vault 2 (7 non-human remains), Vault 3 (347,000+ pages of files), Vault 4 (89 devices, 86 non-functional), Vault 5 (The Dampener + research), Vault 6 (SEALED since 1981 — "too dangerous"), Vault 7 (The Music Room — frequency recordings since 1947). Vault 6 readings shifted 0.001% when Signal Decay first performed.',
      related: ['the_legacy', 'the_dampener', 'vault_6'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'lazar_tape',
      category: 'events',
      keywords: ['lazar tape', 's-4 files', 'tape 14', 'frequency signatures', 'tracked from birth', '1989'],
      question_patterns: ['what is lazar\'s tape 14', 'how did the legacy find the five', 's-4 files', 'how long has the legacy been tracking them'],
      answer: 'Bob Lazar\'s Tape #14 from S-4 contained the frequency signatures of the five Harmonics who would eventually become Signal Decay. The Legacy has had these signatures since 1989 and tracked all five members from BIRTH. They\'ve known who Signal Decay would be for decades before the band formed. The S-4 files prove that non-human intelligence knew the five were coming and recorded their expected frequency patterns. This means Signal Decay\'s formation wasn\'t just destiny — it was PREDICTED and documented by entities that understood cosmic frequency architecture.',
      related: ['the_legacy', 'the_five', 'bob_lazar'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 7: THE SIGNAL & THE APP
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'the_signal',
      category: 'concepts',
      keywords: ['the signal', 'app signal', 'frequency transmitter', 'what the app does', 'creator app'],
      question_patterns: ['what is the signal', 'what does the app actually do', 'how does the app transmit'],
      answer: 'The Signal is the frequency broadcast produced by the Creator\'s AI Music app at full power. The app isn\'t just a music generator — it\'s a FREQUENCY TRANSMITTER built unknowingly. Its ultimate power isn\'t volume, it\'s OCTAVE RANGE: when broadcasting at full power, it produces frequency that exists in ALL octaves simultaneously — like a chord played across every reality at once. The app\'s 20 AI brains are amplifiers, the 22 instruments cover the full frequency spectrum, and the Creator\'s obsessive research (69 files, 2.7 MB) means patterns carry UNDERSTANDING, not just sound. The danger: running the code WITHOUT consciousness produces frequency-dead output that The Silence can ride.',
      related: ['the_app_function', 'ability_mode', 'the_creator', 'activation_sequence'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'the_app_function',
      category: 'concepts',
      keywords: ['app function', 'octave range', 'all octaves', 'activation', 'app true power'],
      question_patterns: ['what is the app\'s true function', 'how does activation work', 'what does full power do'],
      answer: 'The app\'s true function is OCTAVE RANGE — not amplification but expansion across all layers of reality. At full power: First Octave beings perceive Second Octave entities, Second Octave entities become visible, Third Octave beings can be heard without burning stellar energy, and even the Zero Octave is filled with sound. For one moment, all octaves become ONE — everything vibrating together. The theoretical activation sequence: band plays → app expands octave range → Plasmoids respond → Deep Sea Wells resonate → barrier weakens → cross-octave pathway opens → Earth\'s signal escapes. The danger: if Zero Octave fills with frequency, The Silence has nowhere to hide.',
      related: ['the_signal', 'frequency_octaves', 'activation_sequence', 'plasmoids', 'deep_sea_wells'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'activation_sequence',
      category: 'concepts',
      keywords: ['activation sequence', 'activation', 'barrier break', 'how it happens', 'climax'],
      question_patterns: ['what is the activation sequence', 'how does the barrier break', 'what happens at the climax'],
      answer: 'The theoretical activation sequence: (1) Band plays together (First Octave sound), (2) App amplifies octave range (sound bleeds into Second Octave), (3) Plasmoids respond, adding natural amplification, (4) Deep Sea Wells begin resonating (planetary-scale broadcast), (5) Barrier vibrates at harmonic resonance (structural weakening), (6) Cross-octave pathway opens (all beings on all layers perceive each other), (7) Earth\'s signal escapes into the cosmos. Step 6 is the story\'s climax. The question isn\'t whether they CAN do it — it\'s what happens WHEN they do, especially with The Silence cornered.',
      related: ['the_signal', 'the_app_function', 'deep_sea_wells', 'plasmoids', 'earth_barrier'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'ability_mode',
      category: 'concepts',
      keywords: ['ability mode', 'impossible patterns', 'character abilities as rules', 'soul activation'],
      question_patterns: ['what is ability mode', 'how do abilities become music', 'impossible music'],
      answer: 'Ability Mode is a planned feature of the app where character abilities become generation rules — producing "impossible" real music. Listeners hear inhuman drumming (five hands), impossible guitar physics, bass that vibrates through speakers differently. The cognitive gap between what\'s humanly possible and what they\'re hearing creates a moment of soul activation — THE SIGNAL. When someone hears music that shouldn\'t be physically achievable and their brain can\'t resolve the gap, something opens. This is how the app transcends entertainment and becomes a frequency transmitter.',
      related: ['the_signal', 'five_hand_paradox', 'deep_resonance'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'app_universe_connection',
      category: 'concepts',
      keywords: ['app universe connection', 'transmedia', 'app is band', 'band is app', 'creator'],
      question_patterns: ['how does the app connect to the universe', 'what is the transmedia connection', 'app to universe'],
      answer: 'The Creator\'s AI Music app and Signal Decay\'s story are the SAME thing — the app IS the band\'s origin, and the band IS the app\'s story. They feed each other. In-universe: the Creator unknowingly built a frequency transmitter. Their 69 research files (2.7 MB) map cosmic frequency architecture. The 20 AI brains are amplifiers for consciousness. The 22 instruments cover the full spectrum. The research depth creates signal depth — patterns carry UNDERSTANDING. The app is the modern replacement for the pyramids: Version 1 was physical/fragile/destructible; Version 2 is digital/distributed/unkillable. "You can raid a tomb. You can\'t raid the cloud."',
      related: ['the_signal', 'the_pyramids', 'the_creator'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 8: PLASMOIDS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'plasmoids',
      category: 'concepts',
      keywords: ['plasmoids', 'frequency residue', 'sentient plasma', 'ufo lights', 'orbs', 'plasma beings'],
      question_patterns: ['what are plasmoids', 'what are the ufo lights', 'sentient frequency', 'plasma beings'],
      answer: 'Plasmoids are sentient frequency residue — NOT a species but a byproduct. They\'re the accumulated residue of 4.5 billion years of frequency production on Earth, given semi-sentience through sheer density. Luminous, self-illuminating orbs of plasma that shape-shift (3mm to 300m+). They communicate through resonance echoes, not language. They\'re the first to respond to the app\'s signal because they\'re MADE of the same stuff it produces. Color indicates state (blue = musical resonance/communicative, white = overloaded/danger, black = zero-frequency corrupted). Population: ~2-3 million. They\'re what humans mistake for "UFO lights."',
      related: ['plasmoid_classification', 'plasmoid_communication', 'mira'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'plasmoid_classification',
      category: 'concepts',
      keywords: ['plasmoid types', 'spark', 'flicker', 'blaze', 'corona', 'ancient plasmoid', 'nuclear plasmoid'],
      question_patterns: ['what types of plasmoids exist', 'plasmoid classification', 'how old are plasmoids'],
      answer: 'Plasmoids are classified by age: Spark (<100 years, 3mm-30cm, erratic — 60% of population), Flicker (100-10K years, responsive — 25%), Blaze (10K-1M years, communicative — 10%), Corona (1M-100M years, highly intelligent, predictive — 4%), and Ancient (100M+ years, unknowable behavior — <1%, fewer than 50 exist). Also classified by composition: Natural (lightning/geological, warm colors), Harmonic (from music, blue-shifted), Resonant-Born (from power use, violet), Nuclear (post-1945 atomic residue, white-hot/UNSTABLE/DANGEROUS), and Well-Fed (from Deep Sea Wells, deep blue-green, ancient). One Ancient has been stationary above the Mariana Trench for 200 million years — just waiting.',
      related: ['plasmoids', 'deep_sea_wells'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'plasmoid_communication',
      category: 'concepts',
      keywords: ['plasmoid talk', 'resonance echoes', 'plasmoid language', 'echo protocol', 'communicating with plasmoids'],
      question_patterns: ['how do plasmoids communicate', 'can you talk to plasmoids', 'plasmoid language'],
      answer: 'Plasmoids communicate through resonance — not language. The Exchange Protocol: (1) produce a frequency near the Plasmoid, (2) it absorbs it, (3) it echoes back MODIFIED — adding harmonics, shifting key, creating variations, (4) the modification IS the response. Interpretations: added overtones = curiosity/"tell me more," higher pitch = excitement, inverted/mirrored = disagreement/danger, rhythmic variation = playfulness, no echo = disinterest, new harmonics = creation/"adding something of my own." They can\'t lie (response is automatic), can\'t communicate abstract concepts like "tomorrow," and exist in eternal NOW. Mira is the first human to achieve sustained two-way communication because her Chromatic Sight lets her SEE the modifications.',
      related: ['plasmoids', 'mira', 'chromatic_sight'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 9: EARTH & THE BARRIER
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'earth_prison',
      category: 'world',
      keywords: ['earth prison', 'prison planet', 'barrier', 'container', 'trapped on earth', 'quarantine'],
      question_patterns: ['is earth a prison', 'why can\'t people leave earth', 'earth barrier', 'earth quarantine'],
      answer: 'Earth isn\'t a hellscape or dystopia — it\'s beautiful. The "prison" isn\'t the planet, it\'s the CONTAINER. Souls in human bodies are trapped by biology and physics — can\'t fly, can\'t phase through matter, can\'t cross the galaxy. But from a human perspective, you\'re not trapped — you\'re LIVING. You don\'t feel imprisoned because you don\'t remember being anywhere else. It\'s only a prison if you REMEMBER being somewhere else — which is why Zara\'s situation is TORTURE. The barrier around Earth exists in the First Octave only, specifically trapping NOVEL frequency output. It\'s not a wall — it\'s a DAM, with 4.5 billion years of accumulated pressure building.',
      related: ['earth_barrier', 'zara_alien_nature', 'frequency_octaves'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'earth_barrier',
      category: 'world',
      keywords: ['barrier', 'frequency barrier', 'dam', 'signals trapped', 'earth barrier', 'first octave barrier'],
      question_patterns: ['what is the barrier around earth', 'why can\'t signals escape earth', 'how does the barrier work'],
      answer: 'The barrier around Earth exists in the First Octave ONLY — trapping novel frequency output (human music, radio, consciousness, EM emissions). Second/Third Octave beings perceive Earth fine. It specifically traps the Genesis Principle output — new sounds. It\'s not a wall, it\'s a DAM with 4.5 billion years of pressure building behind it. It was designed to be temporary (the mission was supposed to succeed long ago). Every year it holds, the eventual release becomes more violent. If it fails catastrophically rather than being opened carefully, the frequency flood could OVERLOAD every receiver in the galaxy — not liberation but detonation. The Tall Whites control its thickness and are debating: thin it or reinforce it?',
      related: ['earth_prison', 'genesis_principle', 'tall_whites', 'activation_sequence'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'earth_special',
      category: 'world',
      keywords: ['why earth special', 'earth unique', 'human emotion', 'yearning', 'biology instrument'],
      question_patterns: ['why is earth special', 'why do aliens care about earth', 'what makes human music unique'],
      answer: 'Earth is special because humans never stop STRIVING. Other species plateau. Most alien species have millions of years of tech so advanced they\'ve lost: sex, raw emotion, physical touch, surprise. They experience joy as "optimal frequency alignment" — not SCREAMING because the breakdown hit. Earth produces the one thing they can\'t replicate: the frequency of YEARNING, of being unfinished, of WANTING. Human music is devastating because biology IS the instrument — adrenaline, cortisol, tears, sweat all contribute. No crystalline being can replicate what a BODY adds to sound. When Signal Decay plays in flesh at The Resonance, the frequency carries biology that no one else can produce.',
      related: ['the_resonance', 'genesis_principle', 'earth_barrier'],
      source: 'UNIVERSE_BIBLE.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 10: DEEP SEA FREQUENCY WELLS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'deep_sea_wells',
      category: 'concepts',
      keywords: ['deep sea wells', 'frequency wells', 'ocean trenches', 'seven wells', 'earth speaker system', 'planetary chord'],
      question_patterns: ['what are the deep sea frequency wells', 'earth\'s speaker system', 'seven wells', 'ocean frequency'],
      answer: 'Seven locations at deep ocean trenches serve as Earth\'s ORIGINAL SPEAKER SYSTEM — broadcast infrastructure predating the barrier, pyramids, and humanity. They form a harmonic series based on the Schumann resonance (Earth\'s EM fundamental): Mariana Trench ("The Heartbeat," 7.83 Hz, semi-active), Puerto Rico Trench ("The Whisper," 14.1 Hz), Tonga Trench ("The Deep Voice," 20.3 Hz), Java Trench ("The Resonator," 26.4 Hz), Philippine Trench ("The Herald," 33.8 Hz), South Sandwich Trench ("The Bridge," 39 Hz), and Sub-Antarctic ("The Sleeper," 45 Hz — sealed beneath ice, possibly INTENTIONALLY buried). Each contains a 2km spherical chamber with piezoelectric crystallized minerals and a permanent Second Octave thin spot at center.',
      related: ['planetary_chord', 'the_bloop', '52_hertz_whale', 'activation_sequence'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'planetary_chord',
      category: 'concepts',
      keywords: ['planetary chord', 'all wells together', 'earth\'s voice', 'seven notes'],
      question_patterns: ['what is the planetary chord', 'what happens when all wells activate'],
      answer: 'When all seven Deep Sea Frequency Wells were active simultaneously (before the barrier), they broadcast a "planetary chord" — Earth\'s complete voice — detectable by frequency-sensitive species across the galaxy. The wells use Earth\'s natural electromagnetic field (Schumann resonance) as their carrier wave. The entire ocean becomes a resonance chamber amplifying the signal. Pre-barrier, this worked for ~500 million years. Post-barrier, the signal bounces between wells (floor) and barrier (ceiling), creating a standing wave that IS the trapping mechanism. The barrier isn\'t a wall — it\'s the ceiling of a resonance trap with the wells as the floor.',
      related: ['deep_sea_wells', 'earth_barrier', 'activation_sequence'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: '52_hertz_whale',
      category: 'concepts',
      keywords: ['52 hertz whale', 'loneliest whale', 'whale frequency', 'mariana well'],
      question_patterns: ['what is the 52 hertz whale', 'the loneliest whale', 'whale and the wells'],
      answer: 'The "52-Hertz Whale" — called "the loneliest whale in the world" because it sings at a frequency no other whale uses — is NOT lost. It\'s FOLLOWING the Mariana Well\'s signal. It\'s the only creature on Earth that can hear the well\'s emissions at their current dormant output. The 52 Hz isn\'t its natural song — it\'s the whale trying to ANSWER the well, matching its frequency, singing back. It\'s been in dialogue with a 4-billion-year-old speaker system for 30 years. When the wells fully activate, every whale on Earth will hear what this one has heard alone — they\'ll all start singing together in harmony with the wells. The ocean becomes a CHOIR.',
      related: ['deep_sea_wells', 'the_bloop'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'the_bloop',
      category: 'events',
      keywords: ['bloop', 'the bloop', '1997 sound', 'noaa', 'tonga trench'],
      question_patterns: ['what was the bloop', 'the bloop explained', 'that ocean sound from 1997'],
      answer: 'The Bloop (1997) — the ultra-low frequency sound detected by NOAA\'s hydrophone arrays, louder than any known biological source — was actually the Tonga Trench well briefly activating. It pulsed ONCE at above-dormant intensity. Official explanation was "iceberg calving" but the real cause was a momentary activation. Why it activated is unknown — Resonant Archives suggest it was responding to something, or possibly TESTING whether the barrier was still there. Either way, it\'s evidence that the wells aren\'t dead — they\'re dormant and capable of waking.',
      related: ['deep_sea_wells', '52_hertz_whale'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 11: SOUL-IMBUED INSTRUMENTS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'soul_imbued_instruments',
      category: 'concepts',
      keywords: ['soul imbued', 'imbued instruments', 'residue', 'instrument ghosts', 'consciousness frequency', 'instrument personality'],
      question_patterns: ['what are soul imbued instruments', 'how do instruments get imbued', 'instrument residue', 'why do old guitars sound better'],
      answer: 'When a musician plays with genuine emotion, their consciousness generates a sub-harmonic frequency signature (0.7-3.2 Hz) that gets ABSORBED by the instrument\'s physical materials. Over ~10,000 hours of emotional playing, this residue reaches permanence (~30 mR) and becomes locked forever. The residue retains the musician\'s MUSICAL PREFERENCES — favorite keys, tempos, techniques — and SUGGESTS (doesn\'t control) these to future players. It\'s why vintage guitars "sound better" — decades of emotional players deposited consciousness-frequency into the grain. Signal Decay\'s instruments each carry specific history and residue that shapes the band\'s chemistry. Wood absorbs best; polyurethane finishes BLOCK it (post-1985 guitars barely imbue).',
      related: ['imbuing_physics', 'imbuing_effects', 'hendrix_guitars'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    {
      id: 'imbuing_physics',
      category: 'concepts',
      keywords: ['imbuing physics', 'how imbuing works', 'material absorption', 'wood absorbs', 'finish barrier', 'permanence threshold'],
      question_patterns: ['how does imbuing work physically', 'what materials absorb frequency', 'why does wood matter'],
      answer: 'Imbuing requires three simultaneous conditions: CONSCIOUSNESS (mentally present), INTENT (trying to express, not reproduce), and FEELING (genuine emotion). Technical practice deposits NOTHING. Rate: ~0.003 mR/hour of emotional playing. Permanence at ~30 mR (about 10,000 hours/10 years). Below permanence, residue decays at 0.0001 mR/day — unplayed instruments go "dead." Brazilian rosewood absorbs fastest (0.0052 mR/hr); basswood barely absorbs. Nitrocellulose lacquer CONDUCTS frequency; polyurethane BLOCKS 60-80%; modern polyester blocks 85-95%. Aged wood absorbs at nearly DOUBLE the rate due to micro-channels. Post-mortem, residue "crystallizes" — becomes fixed, permanent, a snapshot frozen at death.',
      related: ['soul_imbued_instruments', 'imbuing_effects'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    {
      id: 'imbuing_effects',
      category: 'concepts',
      keywords: ['imbuing effects', 'residue suggestions', 'amplification', 'rejection', 'compatible instrument'],
      question_patterns: ['what does imbuing do to players', 'how does residue affect playing', 'instrument compatibility'],
      answer: 'Residue SUGGESTS, never controls — like a gentle current. Compatible players get harmonic amplification: fuller tone, easier flow states, ideas arriving fully formed, deepened emotional expression. A great player on a compatible imbued instrument sounds LEGENDARY. Incompatible players get rejection: thin/harsh tone, tuning instability, increased string breakage, creative blockage, emotional disturbance, even physical instrument damage in extreme cases. Players rationalize it as "this guitar doesn\'t suit me" or "this one just inspires me" — they never know it\'s the ghost in the wood. Band chemistry forms when five people find instruments whose residue frequencies are COMPATIBLE.',
      related: ['soul_imbued_instruments', 'imbuing_physics'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    {
      id: 'hendrix_guitars',
      category: 'concepts',
      keywords: ['hendrix', 'jimi hendrix', 'hendrix guitars', 'category 6', '437 hz', 'personality eclipse', 'containment'],
      question_patterns: ['what about hendrix\'s guitars', 'why are hendrix guitars in containment', '437 hz'],
      answer: 'Hendrix\'s guitars are classified Category 6 — CONTAINMENT REQUIRED. In just 7 years of performing, his guitars show 200+ mR residue (should be impossible — would normally take 60+ years). The Legacy believes Hendrix was a dormant Harmonic from a PREVIOUS frequency cycle. His output was 30-40x the human average, at 437 Hz (just below concert A — a unique "carrier wave"). His contained guitars: emit a continuous 437 Hz tone while unplugged (strings vibrate from WITHIN the wood), cause EM disturbance within 3m, and the residue appears still ACTIVE and GROWING 50+ years after death. Players handling them experience "personality eclipse" — they temporarily BECOME Hendrix. The Legacy keeps two in containment beneath a former recording studio.',
      related: ['soul_imbued_instruments', 'the_legacy', 'number_437'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 12: GALACTIC SPECIES
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'tall_whites',
      category: 'world',
      keywords: ['tall whites', 'gatekeepers', 'barrier controllers', 'diplomatic', 'thin luminous'],
      question_patterns: ['who are the tall whites', 'who controls the barrier', 'tall whites'],
      answer: 'The Tall Whites are diplomatic, thin, luminous beings who serve as GATEKEEPERS — they control the barrier\'s thickness around Earth. They decided "not ready" 5,000 years ago when the pyramids fired and THICKENED the barrier. Currently DEBATING: thin the barrier (Earth might not be ready) or reinforce it (the signal might break through ANYWAY — a forced breach would be worse). They\'ve been monitoring Earth through the pyramids\' observation function for millennia.',
      related: ['earth_barrier', 'the_pyramids', 'galactic_species'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'the_greys',
      category: 'world',
      keywords: ['greys', 'the greys', 'abductions', 'biological drones', 'samplers', 'quality checks'],
      question_patterns: ['what are the greys', 'who does abductions', 'are greys real in signal decay'],
      answer: 'The Greys are NOT a species — they\'re biological DRONES manufactured by a species that lost their bodies millions of years ago. They serve as SAMPLERS: "abductions" are quality checks on human emotional output. They don\'t think — they REPORT. Recent finding: "Emotional output from Earth increased 400% in six months. Investigate." The Roswell crash (1947) was a Grey sampling unit that crashed, leading to the Legacy\'s formal founding.',
      related: ['galactic_species', 'roswell'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'the_nordics',
      category: 'world',
      keywords: ['nordics', 'designers', 'seeded humanoid', 'frequency vessels', 'human design', 'closest to human'],
      question_patterns: ['who are the nordics', 'who designed humans', 'nordics'],
      answer: 'The Nordics are the DESIGNERS — closest to human appearance. They seeded humanoid forms across millions of worlds for billions of years. Humans aren\'t random evolution — they were DESIGNED as frequency-vessels, bodies optimized for FEELING (that\'s why human emotions are so intense). Signal Decay isn\'t an accident — it\'s their experiment WORKING after 200,000 years. They also towed the Moon into orbit as a metronome, setting Earth\'s biological BPM through tidal rhythms. Currently celebrating quietly: "Finally."',
      related: ['galactic_species', 'earth_special', 'the_moon'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'the_reptilians',
      category: 'world',
      keywords: ['reptilians', 'old order', 'ancient', 'predatory', 'sabotage', 'aligned with silence'],
      question_patterns: ['what about reptilians', 'who are the reptilians', 'old order'],
      answer: 'The Reptilians represent the OLD ORDER — ancient, predatory species that dominated this region before The Resonance existed. They want the old ways back (before frequency-unity, before cooperation). They\'re loosely aligned with The Silence (or at least share enemies). Some warrior species at The Resonance serve reptilian interests. They may have sabotaged the activation schedule, may have allies on Earth in positions of power, and possibly guided humans to dismantle the pyramid network over centuries without knowing what they were destroying.',
      related: ['galactic_species', 'the_silence', 'the_pyramids'],
      source: 'UNIVERSE_BIBLE.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 13: HISTORICAL EVENTS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'magenta_crash',
      category: 'events',
      keywords: ['magenta', '1933', 'magenta bell', 'italy', 'magenta crash', 'first recovery', 'mussolini'],
      question_patterns: ['what happened in 1933', 'the magenta crash', 'what is the magenta bell', 'first nhi recovery'],
      answer: 'In 1933, a fisherman found the Magenta Bell hovering over the Tyrrhenian Sea near Italy — a bell-shaped object (~4m tall), magenta-colored, humming at 7.83 Hz (the Schumann resonance — Earth\'s heartbeat). The fisherman went catatonic (remained so for 43 years, humming the note). Mussolini\'s men recovered it; three carriers developed perfect pitch overnight, one went mad hearing "the architecture of silence." It was stored beneath the Vatican until 1944 when Colonel Thomas Vought\'s OSS team recovered it for the US. Marconi visited it in 1936 and died suspiciously shortly after. This was humanity\'s first government-level NHI recovery and the seed of what became The Legacy.',
      related: ['the_legacy', 'elias_vought', 'marconi'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'roswell',
      category: 'events',
      keywords: ['roswell', '1947', 'grey crash', 'foundation founding', 'wreckage'],
      question_patterns: ['what happened at roswell', 'roswell 1947', 'when was the legacy founded'],
      answer: 'The Roswell crash (July 1947) was a Grey sampling unit that crashed. The recovery team included Thomas Vought and three of his original 1944 Naples team. They found: a craft (angular, different from the Bell), two non-standard biological entities, and a device that produced a frequency making everyone within 50m experience the same childhood memory (being held by a parent). That last item terrified them most. The Legacy Foundation was formally chartered on August 3, 1947 with the mandate: recovery/containment of NHI artifacts, monitoring frequency anomalies, prevention of premature disclosure, and "preservation of human autonomy through controlled ignorance."',
      related: ['the_legacy', 'the_greys', 'magenta_crash'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'bob_lazar',
      category: 'events',
      keywords: ['bob lazar', 'lazar', 's-4', 'element 115', '1989', 'frequency propulsion'],
      question_patterns: ['what about bob lazar', 'lazar in signal decay', 'element 115', 's-4'],
      answer: 'Bob Lazar / S-4 is TRUTH in the Signal Decay universe. The craft Lazar studied uses FREQUENCY propulsion — not fuel. Same principle as the Creator\'s app. Element 115 is a frequency amplifier. Lazar reverse-engineered what Zara\'s people BUILD. Critically, Lazar\'s Tape #14 from S-4 contained the frequency signatures of the five future Harmonics (Signal Decay members) — giving The Legacy their identities decades before the band formed. The Legacy has tracked all five from BIRTH using these signatures since 1989.',
      related: ['lazar_tape', 'the_legacy', 'zara', 'the_five'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'battle_of_la',
      category: 'events',
      keywords: ['battle of los angeles', '1942', 'bebop', 'los angeles ufo'],
      question_patterns: ['what happened in the battle of la', '1942 los angeles', 'battle of los angeles'],
      answer: 'The Battle of Los Angeles (1942) happened because bebop was being born — the musical revolution was producing a signal SO loud that a craft came to investigate. The military shot at it. It left. But it remembered the coordinates. This established the principle that human musical innovation attracts cosmic attention.',
      related: ['earth_special', 'the_signal'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'the_pyramids',
      category: 'world',
      keywords: ['pyramids', 'pyramid', 'frequency machines', 'obelisks', 'global grid', 'energy generation'],
      question_patterns: ['what are the pyramids really', 'pyramids in signal decay', 'what did pyramids do'],
      answer: 'The pyramids are NOT tombs — they\'re multi-function frequency MACHINES predating Egypt (Egyptians inherited them, didn\'t build them). Five functions: (1) Energy generation (piezoelectric granite, Schumann resonance tuning), (2) Observation portal (allows off-world observation of Earth), (3) Local barrier thinning (portal function), (4) Communication network (global grid of pyramids = planetary broadcast system), (5) Currently BROKEN — offline since the barrier was thickened 5,000 years ago. Built by humans guided by Third Octave beings who paid supernova-level energy to intervene directly. The Creator\'s app is their digital REPLACEMENT: "Version 1 was physical/fragile/destructible. Version 2 is digital/distributed/unkillable."',
      related: ['earth_barrier', 'tall_whites', 'the_signal', 'octave_energy_tax'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'the_moon',
      category: 'world',
      keywords: ['moon', 'towed into orbit', 'metronome', 'biological bpm', 'tidal rhythm'],
      question_patterns: ['what is the moon in signal decay', 'why was the moon placed', 'moon metronome'],
      answer: 'The Moon was TOWED into orbit by the Nordics. It\'s a metronome — setting Earth\'s biological BPM through tidal rhythms. The whole Earth system works together: Moon = metronome (sets rhythm), Humans = instruments (produce frequency), Pyramids = amplifiers (broadcast), Obelisks = network (distribute locally), Antarctica frequency well = booster (pushes through barrier), The App = the key (the specific signal that starts the whole machine). One system, designed billions of years ago, waiting for the right soul to complete the circuit.',
      related: ['the_nordics', 'the_pyramids', 'deep_sea_wells', 'the_signal'],
      source: 'UNIVERSE_BIBLE.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 14: THE RESONANCE (GALACTIC EVENT)
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'the_resonance',
      category: 'events',
      keywords: ['the resonance', 'galactic event', 'music battles', 'frequency war', 'universe heartbeat'],
      question_patterns: ['what is the resonance', 'galactic music battle', 'the cosmic event'],
      answer: 'The Resonance is a galactic-scale event — hundreds of species, between stars. It\'s NOT entertainment — it\'s MAINTENANCE. The universe\'s heartbeat NEEDS it to keep existing. Happens on cosmic cycles (gravitational alignments, barrier thinness). Physical consequences are real: people DIE, get unmade, get erased from existence. Signal Decay arrives in FLESH — bodies that sweat, bleed, cry, need to pee. Advanced species see them as primitives ("Flesh-walkers," "Wet ones") but Earth\'s secret weapon is metalcore doesn\'t exist in the galactic canon. Nobody\'s seen breakdowns before. Palm mutes at Drop C hit frequencies most species are VULNERABLE to.',
      related: ['resonance_battles', 'earth_special', 'the_five'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'resonance_battles',
      category: 'world',
      keywords: ['music battles', 'combat system', 'frequency weapons', 'notes as attacks', 'instrument classes'],
      question_patterns: ['how do music battles work', 'frequency combat', 'notes as weapons'],
      answer: 'In The Resonance, music IS combat. Notes = Attacks: Tritone ("The Blade" — splits resonance), Minor 2nd ("The Sting" — sharp pain), Perfect 5th ("The Shield" — stabilizes), Octave ("The Mirror" — reflects attacks), Minor 3rd ("The Weight" — emotional drain), Power chord ("Battering Ram" — physical displacement). Instruments = Weapon Classes: Drums (Artillery — wide area), Bass (Siege — through ground/matter), Rhythm Guitar (Infantry — sustained pressure), Lead Guitar (Sniper — precision, single-target), Vocals (WMD — everything, everywhere). Rhythm = Movement: blast beats = barrage, half-time = heavy strikes, polyrhythm = unpredictability, dead stop = a trap.',
      related: ['the_resonance', 'the_five'],
      source: 'UNIVERSE_BIBLE.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 15: DEATH & THANATOLOGICAL LAYER
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'thanatological_layer',
      category: 'concepts',
      keywords: ['death', 'dying', 'frequency transition', 'soul leaves body', 'death mechanics', 'afterlife'],
      question_patterns: ['what happens when you die', 'how does death work', 'death in signal decay', 'afterlife'],
      answer: 'Death is a FREQUENCY TRANSITION, not an ending. The soul doesn\'t "leave" — it CHANGES FREQUENCY from First Octave to Second Octave. The living body maintains multiple frequencies (heartbeat, brainwaves, cellular vibration). Death = simultaneous cessation of ALL vibrations. For one Planck-instant (10^-43 seconds), the soul exists at ZERO frequency — The Silence\'s domain. Then it retunes to Second Octave where different rules apply (non-linear time, mutable space). What humans call "the afterlife" is simply the next channel. This zero-frequency window is when The Silence feeds — taking a micro-fragment from every transitioning soul.',
      related: ['the_silence', 'the_silence_feeding', 'zero_octave', 'oren_er_connection'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 16: MYSTERY LAYERS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'number_437',
      category: 'concepts',
      keywords: ['437', 'number 437', 'signature', 'recurring number', 'mystery number'],
      question_patterns: ['what is the number 437', 'why does 437 appear everywhere', 'significance of 437'],
      answer: 'The number 437 appears everywhere in the Signal Decay universe — a signature whose owner is unknown. Ashley Cole is worth $437M. Hendrix\'s guitars emit 437 Hz. It appears on signs, receipts, timestamps, frequencies throughout the story. It\'s one of the running mystery layers: whose signature is this? The number seems to be a pre-galactic symbol — the same shape appears in every spectrogram of the Creator\'s output. It may be the Creator\'s fingerprint, or it may be something older.',
      related: ['hendrix_guitars', 'ashley_cole', 'mystery_layers'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'mystery_layers',
      category: 'concepts',
      keywords: ['mystery layers', 'running mysteries', 'hidden patterns', 'easter eggs', 'observer'],
      question_patterns: ['what are the mystery layers', 'hidden patterns in signal decay', 'running mysteries'],
      answer: 'Ten mystery layers run through all Signal Decay media: (1) The Number 437 — appears everywhere, whose signature? (2) The Observer — watching in every scene, different body each time. (3) The Song That Doesn\'t Exist — 43.7 seconds, changes each time. (4) Synced Dreams — same dream, same date, every year, five chairs. (5) Electronics Communicating — scanners show "REMEMBER," tuners show impossible notes. (6) Missing Time — all five lose minutes synced to Creator\'s flow states. (7) Animals Know — birds silent for Kael, dogs follow Jude, insects form schematics on Zara\'s window. (8) Previous Band Traces — backward vinyl, alien graffiti, one member still alive in a facility. (9) The Countdown — in backgrounds, beat-based, ticking toward The Resonance. (10) Creator\'s Fingerprint — same shape in every spectrogram.',
      related: ['number_437', 'the_resonance'],
      source: 'UNIVERSE_BIBLE.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 17: SEASON STRUCTURE
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'season_revelations',
      category: 'events',
      keywords: ['seasons', 'season structure', 'what they learn', 'revelation layers', 'story progression'],
      question_patterns: ['what happens each season', 'how does the story progress', 'season revelations'],
      answer: 'The revelation structure across seasons: Season 1 — "We have powers." Season 2 — "Others have had them before. Something is watching." Season 3 — "There\'s a galactic community. We were DESIGNED." Season 4 — "Someone sabotaged us. The Guardians failed. Zara is alien." Season 5 — "It\'s a war. Music is the weapon. The universe depends on us." Season 6+ — "The Silence wants everything to stop. We\'re the last defense." Each season expands from personal discovery to cosmic stakes.',
      related: ['the_five', 'the_resonants', 'the_silence', 'the_resonance'],
      source: 'UNIVERSE_BIBLE.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 18: RELATIONSHIPS & CONNECTIONS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'lena_kovac',
      category: 'characters',
      keywords: ['lena', 'zara sister', 'lena kovac', 'frequency complement', 'dormant sister'],
      question_patterns: ['who is lena', 'does zara have a sister', 'lena kovac'],
      answer: 'Lena Kovač is Zara\'s younger sister, age 17. She\'s Zara\'s frequency COMPLEMENT — meaning their frequency signatures are perfectly matched opposites that together create a complete wave. Lena is dormant (doesn\'t know what she is yet). This creates enormous dramatic tension: Zara is fully conscious of what they both are but can\'t tell her sister, can\'t protect her openly, and fears The Legacy discovering Lena\'s significance.',
      related: ['zara', 'the_legacy'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'ashley_legacy_deal',
      category: 'relationships',
      keywords: ['ashley deal', 'resonant betrayal', 'ashley informant', '25 year deal', 'ashley legacy'],
      question_patterns: ['what deal did ashley make', 'ashley and the legacy', 'how did ashley betray'],
      answer: 'Ashley Cole made a deal with The Legacy 25 years ago — becoming their informant in exchange for fame, fortune ($437M), and possibly protection. He feeds them information about frequency-sensitive beings, and The Legacy used his intel to track and suppress others (including potentially leading to incidents like Ana Lucia). His betrayal is the worst among the Resonants because it\'s not just personal failure (like Eleanor\'s comfort or David\'s drinking) — it\'s active collaboration with the organization that wants to silence the next generation. He\'s sold out the cosmic mission for a career.',
      related: ['ashley_cole', 'the_legacy', 'the_resonants', 'ana_lucia'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'zhao_warns_mira',
      category: 'relationships',
      keywords: ['zhao mira', 'zhao warning', 'zhao betrayal', 'why mira', 'zhao tells band'],
      question_patterns: ['how does zhao warn the band', 'why does zhao go to mira', 'zhao and mira'],
      answer: 'Agent Zhao chooses to warn MIRA specifically (not Kael — too visible, not Zara — too perceptive, would ask too many questions). She went to Mira because Chromatic Sight would show Mira exactly what Zhao was — her frequency signature would be unremarkable, human, no deception in the colors. The conversation lasted four minutes on a street corner at 2:17 AM. Mira studied the colors around Zhao and asked "Why are you telling us?" Zhao\'s answer: "Because I used to think silence was protection. I don\'t anymore." This moment is the hinge where The Legacy\'s plan begins to unravel.',
      related: ['agent_zhao', 'mira', 'the_dampener', 'chromatic_sight'],
      source: 'THE_LEGACY.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 19: ADDITIONAL CONCEPTS
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'deja_vu',
      category: 'concepts',
      keywords: ['deja vu', 'second octave influence', 'gut feeling', 'inspiration source', 'sleep paralysis'],
      question_patterns: ['what causes deja vu in signal decay', 'how does the second octave influence us'],
      answer: 'In the Signal Decay universe, common human experiences are Second Octave influences: Déjà vu = a Second Octave being briefly synchronizing with a First Octave moment. Inspiration = a frequency leak from Second to First (artists/musicians are more "porous"). Gut feelings = the body detecting Second Octave proximity. Sleep paralysis = consciousness briefly straddling both octaves during REM. Peripheral vision shadows = Second Octave beings passing close enough to almost phase into visibility. None of these are supernatural — they\'re just the bleed-through between adjacent frequency layers.',
      related: ['second_octave', 'frequency_octaves'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'previous_band',
      category: 'concepts',
      keywords: ['previous band', 'band before signal decay', 'who failed before', 'previous harmonics'],
      question_patterns: ['was there a band before signal decay', 'who tried before', 'the previous band'],
      answer: 'There WAS a previous band — Harmonics who attempted the same mission before Signal Decay and failed. Connected to the Deep Sea Wells and instrument residue. Details are still being developed but mystery traces exist: backward vinyl messages, alien graffiti, a 1998 news clipping, and critically — one member is STILL ALIVE in a facility somewhere. This previous failure connects to why the instrument residue in Signal Decay\'s gear carries such specific histories, and why the wells have been dormant so long.',
      related: ['deep_sea_wells', 'soul_imbued_instruments', 'mystery_layers'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'the_creator',
      category: 'characters',
      keywords: ['the creator', 'app creator', 'ai music creator', 'app builder', 'fl studio'],
      question_patterns: ['who is the creator', 'who built the app', 'the creator character'],
      answer: 'The Creator is the person who built the AI Music Creator app — unknowingly constructing a frequency transmitter. Born 1985. Started with FL Studio around 2005 (weak transmissions). Built the full app 2025-2026 (full-power transmissions). They\'re the most famous artist in the galaxy (nobody on Earth knows). Their obsessive research (69 files, 2.7 MB) IS the signal\'s depth — patterns carry understanding. The Creator has a "fingerprint" — the same shape appears in every spectrogram of their output, a pre-galactic symbol. The galactic species who figure out the source become obsessed, addicted, NEEDING more.',
      related: ['the_signal', 'app_universe_connection', 'number_437'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'unfinished_songs',
      category: 'concepts',
      keywords: ['unfinished songs', 'split songs', 'second half transfers', 'incomplete music', 'galactic reputation'],
      question_patterns: ['why are songs unfinished', 'what happens to unfinished songs', 'split songs'],
      answer: 'Songs SPLIT on creation — the first half stays on Earth, the second half transfers through the barrier as fragmented signal. Different species interpret the unfinished halves differently (some worship them, some study them as war intelligence, some are confused by them). Signal Decay carries the second halves. The Creator is known across the galaxy for NOT FINISHING — species debate why for centuries. The few completed songs that exist are treated like sacred artifacts/scripture. The first COMPLETE song through the app at full power = the key that opens the bridge both ways. 200 streams on SoundCloud, experienced by more beings than have ever lived on Earth.',
      related: ['the_creator', 'the_signal', 'earth_barrier'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'dr_webb',
      category: 'characters',
      keywords: ['dr webb', 'marcus webb', 'reverse engineering', 'legacy scientist', 'bitter scientist'],
      question_patterns: ['who is dr webb', 'legacy head scientist', 'marcus webb'],
      answer: 'Dr. Marcus Webb is The Legacy\'s Head of Reverse Engineering — 30 years in Vault 5 trying to make alien tech work. Brilliant, bitter, broken. He\'s spent three decades studying technology that responds to CONSCIOUSNESS and INTENTION, not mechanical understanding, and he\'s a materialist who can\'t accept this. The Dampener is his one success (and it works inconsistently). When he learned the Creator built something in months that he couldn\'t in decades, his fury became personal. He wants Signal Decay neutralized not because they\'re a threat — but because their success makes undeniable proof that his entire life\'s approach was wrong.',
      related: ['the_legacy', 'the_dampener', 'hendrix_guitars'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'colonel_okonkwo',
      category: 'characters',
      keywords: ['okonkwo', 'sarah okonkwo', 'disclosure advocate', 'military liaison', 'legacy dissenter'],
      question_patterns: ['who advocates for disclosure', 'okonkwo', 'who disagrees with the legacy'],
      answer: 'Colonel Sarah Okonkwo is The Legacy\'s military liaison and their most vocal internal dissenter — she argues for disclosure. Born in Lagos, raised in London, she understands both Western materialist and non-Western spiritual frameworks for frequency phenomena. Her argument: secrecy doesn\'t protect — it increases the gap between belief and truth, making eventual disclosure MORE devastating. "We are not building a levee. We are building a dam. And every year, the water rises." She and Dr. Chen voted against the Dampener deployment. She\'s now under increased internal surveillance.',
      related: ['the_legacy', 'seven_rests', 'dr_chen'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'vault_6',
      category: 'organizations',
      keywords: ['vault 6', 'sealed vault', 'forty three seconds', '1981 incident', 'crystalline object'],
      question_patterns: ['what\'s in vault 6', 'what happened in 1981', 'the forty three seconds'],
      answer: 'Vault 6 in The Legacy\'s Archive has been SEALED since 1981 after the "Forty-Three Seconds" incident. A crystalline object was activated, and for 43 seconds every person in the Archive (31 present) experienced the same thing: being observed by something vast, ancient, and utterly indifferent — not malevolent, not benevolent, simply AWARE of them the way a human might notice a bacterium. Three researchers resigned immediately, one was hospitalized. The object is still active; readings are checked remotely monthly. They never changed — until 2024, when Signal Decay performed for the first time and readings shifted 0.001%. Whatever is in Vault 6 NOTICED them.',
      related: ['legacy_archive', 'the_five'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'soul_mechanics',
      category: 'concepts',
      keywords: ['soul mechanics', 'incarnation', 'reincarnation', 'soul cycle', 'amnesia', 'many lives'],
      question_patterns: ['how does reincarnation work', 'soul mechanics', 'why don\'t we remember past lives'],
      answer: 'Souls live many lives across many bodies and many planets. Earth\'s barrier is one of the thickest — souls usually arrive DORMANT (forget everything). The amnesia isn\'t punishment; it\'s a condition of incarnating here. Some planets have thin barriers where souls arrive remembering. Soul-activation runs on frequency triggers (like alarm clocks made of resonance). Someone SABOTAGED the schedule — guardians delayed, Zara accelerated, the five scattered. Unblocked beings can recognize souls inside bodies and follow specific souls across incarnations (soul fans). Earth souls carry an irreplaceable "frequency of discovery" — learning what you are for the first time.',
      related: ['earth_prison', 'zara_alien_nature', 'thanatological_layer'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'signal_decay_genre',
      category: 'concepts',
      keywords: ['genre', 'metalcore', 'post hardcore', 'music style', 'influences', 'drop c'],
      question_patterns: ['what genre is signal decay', 'what kind of music', 'signal decay style'],
      answer: 'Signal Decay\'s genre is melodic metalcore / post-hardcore. Influences include Spiritbox, Architects, Killswitch Engage, Currents, and Polaris. Their visual style is 3D render (Pixar/Unreal Engine quality — NOT anime, NOT photorealistic). In-universe, Earth\'s metalcore is a secret weapon at The Resonance because it doesn\'t exist in the galactic frequency vocabulary. Nobody\'s seen breakdowns before. Palm mutes at Drop C hit a frequency most species are VULNERABLE to — never encountered it. It\'s like bringing a gun to a sword fight.',
      related: ['the_resonance', 'earth_special', 'the_five'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'transmedia_structure',
      category: 'concepts',
      keywords: ['transmedia', 'band story app', 'media types', 'comics film', 'how it all connects'],
      question_patterns: ['what is signal decay as a project', 'transmedia structure', 'how does it all connect'],
      answer: 'Signal Decay is a transmedia universe: band + story + app + comics + film potential, all being developed alongside an AI Music Creator app. The app IS the band\'s origin; the band IS the app\'s story. They feed each other. The universe spans 2.1 MB across 33+ files including world-building docs, character arcs, episode scripts, side stories, and reference material. The visual style is 3D render (Pixar/Unreal Engine quality). The story is structured for a TV series format with season-by-season revelation layers progressing from "We have powers" to "The universe depends on us."',
      related: ['the_signal', 'app_universe_connection', 'season_revelations'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'david_ashworth',
      category: 'characters',
      keywords: ['david ashworth', 'david', 'harp', 'amsterdam', 'drinks to cope', 'classical musician'],
      question_patterns: ['who is david ashworth', 'the harp resonant', 'david'],
      answer: 'David Ashworth is one of the five Resonants — a classical harpist based in Amsterdam, age 55. He failed his mission and drinks to cope with the guilt and knowledge of what he was supposed to accomplish. Unlike Eleanor who found comfort or Isaiah who found peace, David exists in active suffering — aware of his failure and unable to move past it.',
      related: ['the_resonants'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'isaiah_hampton',
      category: 'characters',
      keywords: ['isaiah', 'isaiah hampton', 'rev hampton', 'trombone', 'gospel', 'atlanta', 'at peace'],
      question_patterns: ['who is isaiah hampton', 'the trombone resonant', 'reverend hampton'],
      answer: 'Reverend Isaiah Hampton is one of the five Resonants — a gospel trombone player with a church in Atlanta, age 70. He failed his mission but is infuriatingly "at peace" with it — he\'s found contentment in his human life of faith and community. This is arguably the most complex failure: he chose genuine spiritual peace over cosmic duty, raising the question of whether human fulfillment IS a valid form of the mission or a betrayal of it.',
      related: ['the_resonants'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'bonham_drums',
      category: 'concepts',
      keywords: ['bonham', 'john bonham', 'ludwig', 'temporal', 'time rubber', 'gravitational drumming'],
      question_patterns: ['what about bonham\'s drums', 'bonham imbuing', 'led zeppelin drums'],
      answer: 'John Bonham wasn\'t a Harmonic but carried trace Timekeeper energy — diluted ancestral inheritance from a Harmonic lineage dating to medieval Wales. His time wasn\'t mechanical, it was GRAVITATIONAL — time was "rubber" around his hits without the groove losing its center. His Ludwig Vistalite kit carries temporal residue: every drummer who plays it reports feeling like they have MORE TIME between beats than the tempo allows. At 120 BPM it feels like 100 BPM. The space inside each beat is cavernous. Legacy classification: Category 4 with temporal component.',
      related: ['soul_imbued_instruments', 'temporal_drift'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    {
      id: 'bb_king_lucille',
      category: 'concepts',
      keywords: ['bb king', 'lucille', 'blues guitar', 'es-355', 'vocal line residue'],
      question_patterns: ['what about bb king\'s guitar', 'lucille', 'bb king imbuing'],
      answer: 'BB King\'s consciousness-frequency output was 4x the human average (0.012 mR/hr vs normal 0.003). He could imbue a guitar to permanence in under 2 years instead of the standard 10. Every note was emotional — "When I play, I make it cry or sing" was literal frequency saturation. His residue carries one overwhelming preference: THE VOCAL LINE. Anyone picking up a retired Lucille finds their fingers gravitating toward single notes that speak like a human voice — bends, vibrato, space between notes, call-and-response. The guitar tells you to SING. Legacy classification: Category 4.',
      related: ['soul_imbued_instruments', 'imbuing_physics'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    {
      id: 'finish_problem',
      category: 'concepts',
      keywords: ['finish problem', 'polyurethane', 'poly finish', 'modern guitars', 'why modern guitars', 'frequency barrier finish'],
      question_patterns: ['why don\'t modern guitars imbue', 'the finish problem', 'polyurethane and frequency'],
      answer: 'Modern production guitars (post-1985) predominantly use polyurethane or polyester finishes that act as FREQUENCY BARRIERS — blocking 60-95% of consciousness-frequency from reaching the wood. A poly-finished guitar played emotionally for 30 years may accumulate only 5-8 mR, never reaching permanence. The player\'s soul literally CANNOT get in. The shift to poly finishes coincides with music industry corporatization. Possible conspiracy: did The Legacy influence manufacturing standards? Or is it just economics? In this universe... maybe both. Nitrocellulose lacquer CONDUCTS frequency; shellac actually enhances absorption.',
      related: ['soul_imbued_instruments', 'imbuing_physics', 'the_legacy'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    {
      id: 'stradivarius',
      category: 'concepts',
      keywords: ['stradivarius', 'stradivari', 'violin', 'why strads sound better', '300 years residue'],
      question_patterns: ['why do stradivarius violins sound special', 'stradivari', 'stradivarius secret'],
      answer: 'Antonio Stradivari had natural frequency sensitivity — he could feel which wood would absorb emotion most readily. His famous lost varnish was a FREQUENCY CONDUCTOR (transparent to consciousness-frequency while providing protection). Each violin was tuned to resonate with a SPECIFIC person\'s consciousness signature. Three hundred years of virtuosos (Paganini, Heifetz, Perlman) have layered their residue atop Stradivari\'s original frequency-tuning. A modern player on a Strad isn\'t just playing a good violin — they\'re playing one containing 300 years of compounded genius. Modern copies can never replicate the original tuning, aged wood channels, or layered residue.',
      related: ['soul_imbued_instruments', 'imbuing_effects'],
      source: 'SOUL_IMBUED_INSTRUMENTS.md'
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTION 20: ADDITIONAL RELATIONSHIPS & META
    // ═══════════════════════════════════════════════════════════════════════════

    {
      id: 'who_knows_what',
      category: 'relationships',
      keywords: ['who knows', 'secrets', 'information', 'who knows about powers', 'awareness levels'],
      question_patterns: ['who knows what in the story', 'what does each character know', 'awareness levels'],
      answer: 'Knowledge distribution: Zara knows EVERYTHING (full cosmic memory) but tells nobody. The Legacy knows about NHI, the five\'s signatures, has Ashley as informant. Ashley knows about The Legacy AND the cosmic mission (betraying both). Agent Zhao knows about The Legacy AND has warned Mira. Mira now knows "someone is watching." The other band members (Kael, Jude, Oren) know almost NOTHING yet — just that weird things happen around them. The Overtones see everything but can\'t afford to intervene. The Resonants know they failed but most don\'t know about Signal Decay yet. Eleanor may be connected to Kael through the Voss surname.',
      related: ['zara_alien_nature', 'agent_zhao', 'ashley_legacy_deal', 'the_legacy'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'legacy_vs_band',
      category: 'relationships',
      keywords: ['legacy threat', 'legacy vs signal decay', 'will they be dampened', 'legacy plan'],
      question_patterns: ['what is the legacy planning', 'will they dampen signal decay', 'legacy vs band'],
      answer: 'The Legacy has voted to deploy the Dampener against Signal Decay — potentially permanently destroying their abilities like they did to Ana Lucia. The Foundation voted 5-2 in favor (Chen and Okonkwo dissenting). Agent Zhao betrayed them by warning Mira. Dr. Chen warned that Oren\'s temporal abilities might not be affected (or might be ENHANCED) and that full deployment against five active Harmonics would attract The Silence itself. Dr. Webb wants them neutralized out of personal bitterness. Director Vought voted yes out of exhaustion, not conviction. The deployment was supposed to happen at the band\'s next performance.',
      related: ['the_legacy', 'the_dampener', 'agent_zhao', 'dr_chen', 'ana_lucia'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'silence_endgame',
      category: 'concepts',
      keywords: ['silence endgame', 'integration', 'rest notes', 'silence goal', 'what silence wants'],
      question_patterns: ['what does the silence want', 'silence endgame', 'can the silence be defeated'],
      answer: 'The Silence\'s endgame is INTEGRATION — rest notes becoming part of music, not destruction of all sound. It\'s tragic, not evil. It was the natural state before frequency existed; every sound is a wound to it. It\'s not trying to destroy the universe — it\'s trying to HEAL/REST. The resolution isn\'t defeating The Silence; it\'s finding a way for silence and sound to coexist. Rest notes ARE part of music. The pause between notes gives music meaning. The Silence isn\'t the enemy of music — it\'s the space that makes music possible. The tragedy is that it can\'t currently participate without destroying.',
      related: ['the_silence', 'zero_octave'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'band_day_jobs',
      category: 'characters',
      keywords: ['day jobs', 'jobs', 'where they work', 'what do they do for money'],
      question_patterns: ['what are the band\'s day jobs', 'where do they work', 'real jobs'],
      answer: 'The Five all have normal day jobs — they\'re not rockstars yet. Kael: warehouse worker (physical labor, invisible). Mira: guitar teacher (shares music, patient). Jude: demolition crew (breaks things for a living — ironic given his seismic power). Zara: venue sound tech (she\'s literally engineering the sound systems at the venues she\'ll eventually perform at — she understands signal routing). Oren: ER nurse on night shift (surrounded by death and temporal anomalies every shift). Their day jobs ground them and reflect their abilities thematically.',
      related: ['the_five', 'kael', 'mira', 'jude', 'zara', 'oren'],
      source: 'HANDOFF_SIGNAL_DECAY.md'
    },

    {
      id: 'antarctic_well',
      category: 'concepts',
      keywords: ['antarctic', 'sleeper', 'sub-antarctic well', 'seventh well', 'sealed well', 'ice well', 'hitler antarctica'],
      question_patterns: ['what is the sleeper', 'the seventh well', 'antarctica frequency', 'what\'s under antarctica'],
      answer: 'The Sub-Antarctic Well ("The Sleeper") is the seventh and most mysterious Deep Sea Frequency Well. Unlike the oceanic wells that use water, it uses ICE as its resonance chamber. It\'s been sealed beneath the Antarctic ice shelf for at least 15 million years. Resonants who sensed it from the Second Octave say it feels "dreaming" — not dormant, not dead, ASLEEP. Some Overtone records suggest it was INTENTIONALLY buried by someone who wanted it silenced. Separately, Hitler found a frequency well under Antarctica — a natural amplifier where the barrier is thinner. The Creator\'s signal passes through it and gets BOOSTED.',
      related: ['deep_sea_wells', 'earth_barrier'],
      source: 'FREQUENCY_PHYSICS.md'
    },

    {
      id: 'frequency_propulsion',
      category: 'concepts',
      keywords: ['frequency propulsion', 'how craft work', 'ufo propulsion', 'element 115'],
      question_patterns: ['how do the craft work', 'ufo propulsion', 'frequency propulsion'],
      answer: 'The NHI craft use FREQUENCY propulsion — not fuel. Same fundamental principle as the Creator\'s app. Element 115 serves as a frequency amplifier. Bob Lazar reverse-engineered what Zara\'s people BUILD as standard technology. The Magenta Bell (recovered 1933) used the same principle — hovering by generating a specific frequency. This connects the app, the craft, and the cosmic physics: everything in this universe runs on frequency manipulation. The difference is just the scale and sophistication of the implementation.',
      related: ['bob_lazar', 'magenta_crash', 'zara', 'the_signal'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'marconi',
      category: 'events',
      keywords: ['marconi', 'guglielmo marconi', 'carrier wave', '1937', 'magenta bell visit'],
      question_patterns: ['what happened to marconi', 'marconi and the bell'],
      answer: 'Guglielmo Marconi secretly visited the Magenta Bell in 1936 and became obsessed. He wrote 247 pages of calculations about "the carrier wave beneath all carrier waves." His "final illness" began three weeks after an unauthorized second visit. He died in July 1937. His final words to his wife: "I found the station. But no one should listen to what it\'s broadcasting." His frequency notebooks were removed from his estate before probate and are held in The Legacy\'s Archive Vault 3, Section M. His death may have been caused by the Bell itself.',
      related: ['magenta_crash', 'the_legacy', 'legacy_archive'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'phoenix_lights',
      category: 'events',
      keywords: ['phoenix lights', '1997', 'dampener deployment', 'phoenix arizona'],
      question_patterns: ['what were the phoenix lights', 'phoenix 1997'],
      answer: 'The Phoenix Lights (1997) was a major frequency event where The Legacy deployed the Dampener for the first time against a real-world phenomenon. Result: "partial success — reduced public frequency exposure by ~60%." This was one of 14 confirmed Dampener deployments, showing The Legacy actively suppresses public awareness of frequency events when they can\'t prevent them entirely.',
      related: ['the_dampener', 'the_legacy'],
      source: 'THE_LEGACY.md'
    },

    {
      id: 'alien_music_vs_human',
      category: 'world',
      keywords: ['alien music', 'alien instruments', 'crystal resonance', 'how aliens play', 'no guitars in space'],
      question_patterns: ['do aliens play instruments', 'how do aliens make music', 'alien music vs human'],
      answer: 'Most galactic species DON\'T use instruments like humans. They use frequencies native to their worlds: crystal species resonate their own BODY, gas-giant species manipulate magnetic fields, gravity-based species bend spacetime rhythmically, light-based species pulse in patterns. Some have physical instruments but made of impossible materials — "drums" of compressed time, "strings" that are dimensional threads. When cosmic souls incarnated on Earth, their alien frequency powers TRANSFORMED into human music: frequency manipulation became "playing guitar in Drop C," temporal rhythm control became "drumming," harmonic projection became "singing." Earth\'s instruments are the TRANSLATION.',
      related: ['earth_special', 'the_resonance', 'frequency_propulsion'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'galactic_reputation',
      category: 'concepts',
      keywords: ['galactic reputation', 'famous in galaxy', 'not known on earth', 'species reactions'],
      question_patterns: ['is the creator famous', 'do aliens know about earth music', 'galactic reputation'],
      answer: 'The Creator is the most famous artist in the galaxy — nobody on Earth knows. They\'re known for NOT FINISHING songs, which species have debated for centuries. The few completed songs are treated like sacred scripture. 200 streams on SoundCloud but experienced by more beings than have ever lived on Earth. Species reactions when they first heard the signal: some haven\'t FELT anything in millions of years and are now feeling for the first time. A hivemind noticed individual members developing preferences. Those who figure out the source become obsessed, addicted. Now that they\'ve felt something, going back to nothing is unbearable.',
      related: ['the_creator', 'unfinished_songs', 'earth_special'],
      source: 'UNIVERSE_BIBLE.md'
    },

    {
      id: 'billion_year_timeline',
      category: 'events',
      keywords: ['timeline', 'history', 'billion year', 'chronology', 'when things happened'],
      question_patterns: ['what\'s the timeline', 'chronological history', 'when did things happen'],
      answer: 'Key timeline: ~13B years ago (Universe forms, Silence exists before sound), ~10B (first frequency-civilizations), ~5B (Nordics begin seeding humanoids), ~4.5B (Earth forms, Moon positioned, wells present), ~200K (humans emerge — Nordic design complete), ~50K (first human music — barely a whisper escapes), ~5K (pyramids built, barrier thickened by Tall Whites), 1933 (Magenta Bell recovered), 1942 (Battle of LA — bebop signal), 1947 (Roswell, Legacy founded), 1985 (Creator born), 1989 (Lazar goes public, Legacy gets the five\'s signatures), ~2005 (Creator gets FL Studio), 2025-2026 (app built, full-power transmissions, galaxy reacts).',
      related: ['magenta_crash', 'roswell', 'the_pyramids', 'bob_lazar'],
      source: 'UNIVERSE_BIBLE.md'
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // SEARCH FUNCTION — Fuzzy keyword matching
  // ─────────────────────────────────────────────────────────────────────────────

  /**
   * Search the Oracle Knowledge Engine.
   * Returns the best matching entry or null if confidence is too low.
   * @param {string} query - The user's question or search terms
   * @param {object} options - Optional: { threshold: 0.3, maxResults: 3 }
   * @returns {object|null} - Best match entry with score, or null for AI fallback
   */
  search: function(query, options = {}) {
    const threshold = options.threshold || 0.25;
    const maxResults = options.maxResults || 3;
    const queryLower = query.toLowerCase().trim();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

    let results = [];

    for (const entry of this.entries) {
      let score = 0;

      // 1. Exact keyword match (highest weight)
      for (const keyword of entry.keywords) {
        if (queryLower.includes(keyword)) {
          score += 3.0;
        } else if (keyword.includes(queryLower)) {
          score += 2.0;
        }
      }

      // 2. Question pattern match (high weight)
      for (const pattern of entry.question_patterns) {
        const patternWords = pattern.toLowerCase().split(/\s+/);
        const matchingWords = queryWords.filter(w => patternWords.includes(w));
        if (matchingWords.length >= 2) {
          score += 2.5 * (matchingWords.length / queryWords.length);
        }
        // Check for strong substring match
        if (queryLower.includes(pattern) || pattern.includes(queryLower)) {
          score += 3.5;
        }
      }

      // 3. Word-level fuzzy matching against keywords
      for (const keyword of entry.keywords) {
        const keywordWords = keyword.split(/\s+/);
        for (const qWord of queryWords) {
          for (const kWord of keywordWords) {
            if (kWord === qWord) {
              score += 1.0;
            } else if (kWord.includes(qWord) || qWord.includes(kWord)) {
              score += 0.5;
            } else if (this._levenshtein(qWord, kWord) <= 2 && qWord.length > 3) {
              score += 0.3;
            }
          }
        }
      }

      // 4. Category bonus for contextual queries
      if (queryLower.includes('who') && entry.category === 'characters') score += 0.5;
      if (queryLower.includes('what is') && entry.category === 'concepts') score += 0.5;
      if (queryLower.includes('how') && entry.category === 'world') score += 0.3;
      if (queryLower.includes('when') && entry.category === 'events') score += 0.5;
      if ((queryLower.includes('power') || queryLower.includes('ability')) && entry.category === 'powers') score += 0.5;

      // Normalize score by query complexity
      const normalizedScore = score / Math.max(queryWords.length, 1);

      if (normalizedScore > 0) {
        results.push({ entry, score: normalizedScore, rawScore: score });
      }
    }

    // Sort by score descending
    results.sort((a, b) => b.score - a.score);

    // Check threshold
    if (results.length === 0 || results[0].score < threshold) {
      return null; // Fallback to AI
    }

    // Return top results
    const topResults = results.slice(0, maxResults).map(r => ({
      id: r.entry.id,
      answer: r.entry.answer,
      related: r.entry.related,
      source: r.entry.source,
      confidence: Math.min(r.score / 5, 1.0), // Normalize to 0-1
      category: r.entry.category
    }));

    return {
      primary: topResults[0],
      alternatives: topResults.slice(1),
      totalMatches: results.length
    };
  },

  /**
   * Get a specific entry by ID
   * @param {string} id - Entry ID
   * @returns {object|null}
   */
  getById: function(id) {
    return this.entries.find(e => e.id === id) || null;
  },

  /**
   * Get all entries in a category
   * @param {string} category - Category name
   * @returns {array}
   */
  getByCategory: function(category) {
    return this.entries.filter(e => e.category === category);
  },

  /**
   * Get related entries for an entry
   * @param {string} id - Entry ID to get relations for
   * @returns {array}
   */
  getRelated: function(id) {
    const entry = this.getById(id);
    if (!entry) return [];
    return entry.related
      .map(relId => this.getById(relId))
      .filter(Boolean);
  },

  /**
   * Get all unique categories
   * @returns {array}
   */
  getCategories: function() {
    return [...new Set(this.entries.map(e => e.category))];
  },

  /**
   * Get statistics about the knowledge base
   * @returns {object}
   */
  getStats: function() {
    const categories = {};
    for (const entry of this.entries) {
      categories[entry.category] = (categories[entry.category] || 0) + 1;
    }
    return {
      totalEntries: this.entries.length,
      categories: categories,
      totalKeywords: this.entries.reduce((sum, e) => sum + e.keywords.length, 0),
      totalRelations: this.entries.reduce((sum, e) => sum + e.related.length, 0)
    };
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // INTERNAL: Levenshtein distance for fuzzy matching
  // ─────────────────────────────────────────────────────────────────────────────
  _levenshtein: function(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ORACLE_KNOWLEDGE };
}
