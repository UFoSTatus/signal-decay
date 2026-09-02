// ══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — MEMORY RECOVERY ENGINE
// ══════════════════════════════════════════════════════════════════════════════
//
// Per-character suppressed memory system with pressure states, fragment triggers,
// recovery conditions, cross-character links, and chat integration hooks.
//
// This engine drives the Memory Recovery game system described in
// MEMORY_GAME_DESIGN.md. Each memory transitions through four states:
//   SUPPRESSED → FRAGMENTS → SURFACING → RECOVERED
//
// The user (acting as "frequency therapist") advances memories through states
// by collecting clues, solving puzzles, and navigating chat regressions.
//
// Created: 2026-09-02
// Version: 1.0
// Dependencies: CHARACTER_ENGINES (character_engines.js),
//               FREQUENCY_POWERS (frequency_power_engine.js)
// ══════════════════════════════════════════════════════════════════════════════

const MEMORY_RECOVERY_ENGINE = {

  // ═══════════════════════════════════════════════════════════════════════════
  // META
  // ═══════════════════════════════════════════════════════════════════════════

  meta: {
    version: '1.0.0',
    created: '2026-09-02',
    total_memories: 25,
    characters: ['kael', 'mira', 'oren', 'jude', 'zara'],
    memories_per_character: 5,
    deepest_layer: 'CHILDHOOD_VISITS',
    classification: 'MEMORY RECOVERY ENGINE — drives all suppressed memory gameplay',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MEMORY STATES
  // ═══════════════════════════════════════════════════════════════════════════

  STATES: {
    SUPPRESSED: { id: 'SUPPRESSED', order: 0, label: 'Suppressed', ui: '🔒', description: 'Completely sealed. Body remembers through reactions/avoidance. Character has ZERO awareness.', player_sees: '[MEMORY LOCKED] markers, redacted Board, locked Graph' },
    FRAGMENTS: { id: 'FRAGMENTS', order: 1, label: 'Fragments', ui: '🧩', description: 'Partial sensory flashes — a sound, color, smell. Character notices SOMETHING but can\'t assemble it.', player_sees: 'Fragment hints in chat, partial Board, pulsing Graph' },
    SURFACING: { id: 'SURFACING', order: 2, label: 'Surfacing', ui: '🌊', description: 'Partial scenes play out — flashback intrusions. Character knows something happened but details fragmented.', player_sees: 'Triggerable episodes, puzzle available, illuminated Board' },
    RECOVERED: { id: 'RECOVERED', order: 3, label: 'Recovered', ui: '🧠', description: 'Full recall with emotional impact. Complete scene unlocks. Arc state advances. Chat persona shifts permanently.', player_sees: 'Full scene (2000-5000 words), revealed Board, active Graph' },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RECOVERY METHODS
  // ═══════════════════════════════════════════════════════════════════════════

  RECOVERY_METHODS: {
    CASUAL_CONVERSATION: { id: 'CASUAL_CONVERSATION', name: 'Casual Conversation', difficulty: 'EASY', difficulty_rating: 1, risk_level: 'NONE', success_rate: '70%', physical_cost: 'Mild — headache, unease, déjà vu', transitions: ['SUPPRESSED_TO_FRAGMENTS'], player_skill: 'Empathy — right questions, no pushing', character_experience: 'A nagging feeling. A word that sticks. A question that echoes.' },
    GUIDED_MEDITATION: { id: 'GUIDED_MEDITATION', name: 'Guided Meditation', difficulty: 'MEDIUM', difficulty_rating: 2, risk_level: 'LOW', success_rate: '50%', physical_cost: 'Moderate — nosebleed possible, emotional overwhelm', transitions: ['SUPPRESSED_TO_FRAGMENTS', 'FRAGMENTS_TO_SURFACING'], player_skill: 'Patience — prompts in order without triggering defenses', character_experience: 'Guided descent into subconscious. Feelings surface like objects from deep water.' },
    HYPNOTIC_REGRESSION: { id: 'HYPNOTIC_REGRESSION', name: 'Hypnotic Regression', difficulty: 'HARD', difficulty_rating: 3, risk_level: 'MODERATE', success_rate: '30%', physical_cost: 'Significant — bilateral nosebleed, dissociation, power-specific symptoms (voice loss/vision overwhelm/time-skip/tremor/frequency spike)', transitions: ['FRAGMENTS_TO_SURFACING', 'SURFACING_TO_RECOVERED'], player_skill: 'Deep character knowledge — defenses, triggers, safe vectors', character_experience: 'Led backward through time. Soul resists. Body trembles. Memory PUSHES through.' },
    FREQUENCY_EXPOSURE: { id: 'FREQUENCY_EXPOSURE', name: 'Frequency Exposure', difficulty: 'DANGEROUS', difficulty_rating: 4, risk_level: 'HIGH', success_rate: '85%', physical_cost: 'Severe — full power activation, physical damage, potential hospitalization', transitions: ['FRAGMENTS_TO_SURFACING', 'SURFACING_TO_RECOVERED'], player_skill: 'Technical frequency knowledge + puzzle solving', character_experience: 'Frequency detonates the memory. No gentle surfacing — full flashback. Complete.' },
    NEAR_DEATH_EXPERIENCE: { id: 'NEAR_DEATH_EXPERIENCE', name: 'Near-Death Experience', difficulty: 'EXTREME', difficulty_rating: 5, risk_level: 'EXTREME', success_rate: '100%', physical_cost: 'Life-threatening — full power activation, collapse', transitions: ['ANY_TO_RECOVERED'], player_skill: 'None — narrative event', character_experience: 'Soul releases ALL locks. Every memory floods simultaneously.' },
    DREAM_INVASION: { id: 'DREAM_INVASION', name: 'Dream State Access', difficulty: 'MEDIUM', difficulty_rating: 2, risk_level: 'LOW', success_rate: '40%', physical_cost: 'Moderate — night sweats, nosebleed, screaming/sleepwalking', transitions: ['SUPPRESSED_TO_FRAGMENTS', 'FRAGMENTS_TO_SURFACING'], player_skill: 'Timing — plant topics before character sleeps', character_experience: 'Dream too vivid. Too specific. They wake knowing something visited from inside.' },
    CROSS_CHARACTER_RESONANCE: { id: 'CROSS_CHARACTER_RESONANCE', name: 'Cross-Character Resonance', difficulty: 'HARD', difficulty_rating: 3, risk_level: 'MODERATE', success_rate: '60%', physical_cost: 'Cascading symptoms in both characters', transitions: ['FRAGMENTS_TO_SURFACING'], player_skill: 'Multi-character strategy — advance linked memories in parallel', character_experience: 'Shared recognition. Two people KNOWING they were in the same forgotten place.' },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PRESSURE SYSTEM — How memories push toward consciousness
  // ═══════════════════════════════════════════════════════════════════════════

  PRESSURE_SYSTEM: {
    description: 'Every suppressed memory exerts PRESSURE on consciousness. The longer it stays suppressed, the more pressure builds. Pressure manifests differently at each state and can be amplified by external triggers.',

    pressure_sources: [
      { source: 'TIME', description: 'Pressure increases naturally over time — memories want to surface', rate: '1 unit per story-day' },
      { source: 'TRIGGER_EXPOSURE', description: 'Each fragment trigger hit adds pressure', rate: '5 units per trigger' },
      { source: 'CHAT_PROBING', description: 'User asking about related topics in chat', rate: '3 units per relevant conversation' },
      { source: 'PROXIMITY', description: 'Being near other Harmonics whose linked memories are active', rate: '2 units per shared scene' },
      { source: 'FREQUENCY', description: 'Hearing/feeling the specific frequency associated with the memory', rate: '10 units per exposure' },
      { source: 'EMOTIONAL_STATE', description: 'Character experiencing emotions similar to the original event', rate: '4 units per emotional match' },
    ],

    thresholds: {
      SUPPRESSED_TO_FRAGMENTS: 25,
      FRAGMENTS_TO_SURFACING: 50,
      SURFACING_TO_RECOVERED: 75,
    },

    stage_behaviors: {
      SUPPRESSED: { body_reactions: ['Nosebleeds', 'Localized headaches', 'Déjà vu', 'Unconscious avoidance', 'Sleep disturbances', 'Elevated HR on triggers', 'Region-specific muscle tension'], chat_manifestation: 'Smooth deflection. Suspiciously brief.', ui_display: '[MEMORY LOCKED] + redacted Board + locked Graph' },
      FRAGMENTS: { body_reactions: ['Bilateral nosebleeds', 'Located headaches', 'Sensory flashes', 'Emotional flooding', 'Flinching at unknown stimuli', 'Temperature changes'], chat_manifestation: 'Typing stops. Pauses. "That\'s weird..." They notice but can\'t name it.', ui_display: 'Fragment hints + partial Board + pulsing Graph' },
      SURFACING: { body_reactions: ['Full nosebleeds (2-5 min)', 'Dissociation', 'Involuntary power activation', 'Trembling/sweats', 'Partial scene playback', 'Speaking memory words unconsciously'], chat_manifestation: 'Triggerable episodes. Real-time fragment description. Confusion replaces defense.', ui_display: 'Puzzle available + 60-90% tracker + illuminated Board' },
      RECOVERED: { body_reactions: ['Cathartic release', 'Integration (2-3 days)', 'Somatic resolution', 'Power level-up'], chat_manifestation: 'Complete persona shift. Direct reference. Knowledge gates open.', ui_display: 'Full scene + revealed Board + active Graph + achievement' },
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER MEMORIES — KAEL VOSS
  // ═══════════════════════════════════════════════════════════════════════════

  kael_memories: {

    // ─────────────────────────────────────────────────────────────────────────
    // KAEL MEMORY 1: THE VOICE — The Principal Incident (Age 8)
    // ─────────────────────────────────────────────────────────────────────────
    kael_mem_01: {
      id: 'kael_mem_01',
      character: 'kael',
      title: 'The Voice — The Principal Incident',
      subtitle: 'What happened before Brendan',
      age_at_event: 8,
      year: 2010,
      current_state: 'SUPPRESSED',
      memory_tier: 1,
      difficulty: 'MEDIUM',

      what_actually_happened: 'Kael, age 8, was at school with his mother Marissa for a parent event. Walking past the principal\'s office, they heard him berating a teacher. Marissa stiffened. Kael felt her distress and turned toward the office, saying "Stop hurting people" in a clear, carrying voice — layered with Resonant Command. The principal went silent, then began crying uncontrollably, confessing to every instance of harassment over eleven years. Three staff witnessed it. He resigned the next day. Marissa grabbed Kael and ran. The soul sealed the memory — better he remember only Brendan, a simpler trauma.',

      what_character_remembers: 'He remembers the Brendan incident later that day. He remembers being afraid of his voice. He does NOT remember the principal, the confession, or his mother running. He thinks the silence started because of one scared bully. The real trigger — making a grown man confess everything with three words — is completely sealed.',

      suppressed_state: {
        body_reactions: [
          'Throat tightens when speaking above conversational volume',
          'Pressure in chest when someone says "speak up"',
          'Involuntary flinch when hearing authoritative male voices raised in anger',
          'Nausea when his voice accidentally carries further than intended',
          'Cold sensation in hands when near school buildings',
        ],
        avoidance_patterns: [
          'Never raises voice above speaking level',
          'Avoids school environments and PTA-type gatherings',
          'Deflects any conversation about "before Brendan" on that day',
          'Changes subject when Marissa alludes to "that day at the school"',
        ],
      },

      fragment_triggers: [
        { trigger: 'Hearing an adult male voice raised in anger from behind a closed door', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'The sound of a man crying — sudden, uncontrollable, behind a door' },
        { trigger: 'His mother Marissa flinching when he speaks', sensory_type: 'VISUAL', intensity: 'MEDIUM', fragment_produced: 'A flash of Marissa\'s face — white, terrified, grabbing his hand' },
        { trigger: 'The phrase "stop hurting people" in any context', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'His own voice, layered, harmonic, impossibly deep for an 8-year-old — the three words' },
        { trigger: 'Being in a hallway that smells like schools — floor wax, paper, institutional soap', sensory_type: 'OLFACTORY', intensity: 'MEDIUM', fragment_produced: 'The feeling of walking past an open door and something WRONG inside' },
        { trigger: 'A news story about an authority figure\'s public confession/resignation', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'A rush of guilt and power — the knowledge that HE caused something enormous' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        alternative_methods: ['GUIDED_MEDITATION', 'FREQUENCY_EXPOSURE'],
        clues_required: 4,
        clue_sources: ['Reader — The Weight of Words (Marissa\'s dinner story)', 'Chat with Kael (probing before Brendan)', 'Investigation Board (Resonant Command → Involuntary Activation → Cover-up)', 'Immersive Reader (85 Hz frequency slider match)'],
        puzzle_type: 'FREQUENCY_MATCH',
        puzzle_description: 'A chaotic waveform hides Kael\'s 8-year-old voice saying "Stop hurting people." User must filter noise using a frequency slider (20-2000 Hz) to isolate the voice at ~85 Hz fundamental with harmonics at 170, 340, 680.',
        frequency_key: { fundamental: 85, harmonics: [170, 340, 680] },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['before brendan', 'that day', 'what happened first', 'at school with your mom'], trigger_type: 'DIRECT', response_type: 'DEFENSIVE' },
          { phrase_pattern: ['stop hurting', 'make someone confess', 'principal resigned'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['your voice', 'power of words', 'made someone do something'], trigger_type: 'THEMATIC', response_type: 'DEFLECTION' },
          { phrase_pattern: ['marissa', 'your mom ran', 'she grabbed your hand'], trigger_type: 'EVIDENCE', response_type: 'SHOCK' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"I... no. Just the Brendan thing. That\'s what started the silence."',
            '"My mom was there that day. At school. For something. I don\'t remember what happened with her there. That\'s weird."',
            '(Types and deletes three times before responding)',
          ],
          FRAGMENTS: [
            '"There\'s something. Before Brendan. My mom was there. And there was... a man? Crying? No. That doesn\'t make sense."',
            '"My throat feels weird right now. Like it\'s trying to say something I don\'t know."',
            '"I keep hearing something. In my head. My own voice but... different. Deeper. Like it\'s layered."',
          ],
          SURFACING: [
            '"Oh god. I see it. A hallway. My mom\'s hand on mine. And a door — an office door — and I said something and he just... he BROKE. He started crying and confessing and I was EIGHT."',
            '"I made him do that. With three words. Stop hurting people. And his entire life fell apart in twenty minutes because an eight-year-old boy told him to stop."',
            '"My mom RAN. She grabbed me and ran to the car and she was shaking so hard she could barely drive. THAT\'S why she flinches. Not because of Brendan. Because of what I did to that man."',
          ],
        },
        denial_patterns: [
          { pattern: 'MINIMIZATION', response: '"Nah. I just have a quiet voice. It\'s not a thing."' },
          { pattern: 'DEFLECTION', response: '"Why are you asking about this? The Brendan thing is the whole story."' },
          { pattern: 'RATIONALIZATION', response: '"Lots of principals resign. He was probably already under investigation."' },
          { pattern: 'SUBJECT_CHANGE', response: '"Anyway. How\'s your week been."' },
          { pattern: 'ANGER', response: '"I said no. Drop it." (If pushed past comfort threshold)' },
        ],
      },

      cross_character_links: ['mira_mem_01', 'oren_mem_01'],
      link_type: 'THEMATIC',
      link_description: 'All three characters were assessed/activated before age 10. The Overtones measured each Harmonic in childhood. Kael\'s power first fully manifested the same period as Oren\'s temporal displacement and Mira\'s cataloging.',

      post_recovery_changes: {
        chat_shift: '"I just remembered something. Before Brendan that day... my mom was at school. And I said something to someone. An adult. I MADE him—" (pause) "Oh god. I made a grown man confess everything. With three words. I was EIGHT."',
        board_updates: ['Kael - Age 8 Primary Incident node appears', 'Connected to School Cover-up and Marissa Awareness'],
        graph_updates: ['Resonant Command — First Full Activation node visible'],
        arc_state_change: null,
        knowledge_gate_unlock: 'Kael now acknowledges his voice can COMPEL, not just influence',
      },

      legacy_file_reference: 'HARMONIC-PROFILE/VOSS-K/EVENT-PRINCIPAL — classified. Cross-ref: school board settlement records, agent SWALLOW field notes.',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // KAEL MEMORY 2: THE WAREHOUSE INCIDENT (Age 22)
    // ─────────────────────────────────────────────────────────────────────────
    kael_mem_02: {
      id: 'kael_mem_02',
      character: 'kael',
      title: 'The Warehouse Standing Wave',
      subtitle: 'Four people paralyzed by a hum',
      age_at_event: 22,
      year: 2024,
      current_state: 'SUPPRESSED',
      memory_tier: 2,
      difficulty: 'HARD',

      what_actually_happened: 'Kael working alone in Section C at 2 AM, stacking pallets. He was humming unconsciously — a low, sustained tone at his fundamental frequency (85 Hz). The hum built a standing wave in the warehouse space. At 2:14 AM, security guard Dale Hoskins and three other workers entered the affected zone. The standing wave hit their neural pathways and interrupted motor signaling — complete cessation of voluntary motor function for 4 seconds. All four were conscious but paralyzed. Kael noticed the silence, saw Dale frozen mid-stride, and stopped humming instantly. Workers blamed ventilation. Kael locked himself in a bathroom stall and shook for twenty minutes. Memory sealed by morning.',

      what_character_remembers: 'He remembers "feeling weird" at work one night. Nothing more. The event — his voice creating a paralysis field across 50 feet affecting four people simultaneously — is completely gone.',

      suppressed_state: {
        body_reactions: [
          'Unconsciously suppresses all humming when anyone is within earshot',
          'Anxiety spike when warehouse acoustics make sounds echo or amplify',
          'Throat pressure when alone in large concrete spaces',
          'Flinch response when coworkers say "I just blanked out for a second"',
          'Compulsive awareness of how far his voice carries in any enclosed space',
        ],
        avoidance_patterns: [
          'Always confirms he is ALONE before allowing any vocalization beyond speech',
          'Avoids talking about work to anyone in detail',
          'Never hums around other people — ever',
          'Stays away from Section C during shift overlaps',
        ],
      },

      fragment_triggers: [
        { trigger: 'Fluorescent buzz at 60 Hz in concrete space', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'The sensation of sound BUILDING — growing louder, deeper, filling a space like water' },
        { trigger: 'Someone standing motionless mid-step (frozen in thought, checking phone)', sensory_type: 'VISUAL', intensity: 'EXTREME', fragment_produced: 'Dale Hoskins frozen mid-stride, one foot raised, face blank — then stumbling forward' },
        { trigger: 'The phrase "four seconds" in any context', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'A cold knowing: something happened in four seconds that changed everything' },
        { trigger: 'Being alone in a large industrial space and hearing his own breathing echo', sensory_type: 'SOMATIC', intensity: 'MEDIUM', fragment_produced: 'Chest vibrating. The hum wanting OUT. The pressure of contained frequency.' },
        { trigger: 'A coworker mentioning "that weird thing that happened at work"', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'Terror. Pure terror. And the knowledge of WHY he must never hum near people.' },
      ],

      recovery_conditions: {
        primary_method: 'FREQUENCY_EXPOSURE',
        alternative_methods: ['HYPNOTIC_REGRESSION', 'CROSS_CHARACTER_RESONANCE'],
        clues_required: 5,
        clue_sources: ['Reader — Warehouse Nights (standing wave passage)', 'Chat with Kael (humming admission)', 'Board — Warehouse Security Logs → Resonant Command → Radius of Effect', 'Oracle (warehouse voice quote)', 'Reader — Dale side character reference (four seconds)'],
        puzzle_type: 'RESONANCE_BUILD',
        puzzle_description: 'Top-down warehouse wireframe. User controls frequency emitter (85 Hz slider) and amplitude. Must build standing wave, then NOTICE frozen worker dots and pull amplitude to zero within 6 seconds.',
        frequency_key: { fundamental: 85, standing_wave_target: true, amplitude_critical: true },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['hum at work', 'do you hum', 'ever hummed around people'], trigger_type: 'DIRECT', response_type: 'GUARDED' },
          { phrase_pattern: ['standing wave', 'four seconds', 'workers froze', 'dale hoskins'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['your voice range', 'how far can you reach', 'paralysis'], trigger_type: 'THEMATIC', response_type: 'SHUTDOWN' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"I hum sometimes. When I\'m alone. It\'s... calming." (Long pause) "I make sure I\'m alone."',
            '"What would happen if I weren\'t alone? ...I don\'t want to know."',
          ],
          FRAGMENTS: [
            '"Something happened at the warehouse. I don\'t remember what. But I stopped humming there. Completely. I don\'t know why."',
            '"Dale. The security guy. He looked at me weird one morning. Like he was trying to remember something that scared him."',
          ],
          SURFACING: [
            '"It happened. Didn\'t it. I was humming. And they all stopped. Four people. Frozen. Because my voice was in the walls and the floor and the AIR."',
            '"I stopped them with a hum. Not a word. Not a command. A HUM. Fifty feet away. Four people. And they didn\'t even know it was me."',
          ],
        },
        denial_patterns: [
          { pattern: 'DEFLECTION', response: '"Nothing happens when I hum. It\'s just... noise."' },
          { pattern: 'AVOIDANCE', response: '"I don\'t want to talk about work. Next topic."' },
          { pattern: 'RATIONALIZATION', response: '"People zone out at 2 AM. Night shift does that. It\'s not unusual."' },
        ],
      },

      cross_character_links: ['jude_mem_02'],
      link_type: 'PARALLEL',
      link_description: 'Both experienced involuntary power affecting bystanders — Kael paralyzed workers, Jude cracked prison concrete. Both sealed because the SCALE was terrifying.',

      post_recovery_changes: {
        chat_shift: '"It happened, didn\'t it. At the warehouse. I PARALYZED people with my voice. Four people. Without meaning to. Without even knowing. My voice is a weapon. It\'s always been a weapon."',
        board_updates: ['Warehouse Incident entry fully revealed', 'Connection to Resonant Command — Radius'],
        graph_updates: ['Kel-Voss Involuntary Range node appears'],
        arc_state_change: 'dormant → AWAKENING',
        knowledge_gate_unlock: 'Kael now knows his voice has AREA EFFECT, not just targeted influence',
      },

      legacy_file_reference: 'Incident report: 4 workers, simultaneous 4-second motor control loss. Worker VOSS, K. in Section C. Filed as UNEXPLAINED.',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // KAEL MEMORY 3: THE LEGACY CONTACT (Age 23)
    // ─────────────────────────────────────────────────────────────────────────
    kael_mem_03: {
      id: 'kael_mem_03',
      character: 'kael',
      title: 'The Legacy Contact',
      subtitle: 'The man in the parking lot and the waveform card',
      age_at_event: 23,
      year: 2025,
      current_state: 'SUPPRESSED',
      memory_tier: 3,
      difficulty: 'EXTREME',

      what_actually_happened: 'A Legacy agent intercepted Kael in the warehouse parking lot at 6 AM. The man told Kael everything: they\'d been recording his voice since he was four months old, chose his schools, placed him at the warehouse for its acoustic properties, studied his range for twenty-two years. He said Kael was "one of five" and the others were waking up. He left a white business card with a waveform printed on it. Then he walked away and within seconds Kael felt something pressing on his memory — fingers inside his skull, folding the last 90 seconds into a sealed pocket. ARTIFICIAL memory suppression via remote dampener device. The card remains in Kael\'s jacket. He\'s looked at it a hundred times without knowing where it came from.',

      what_character_remembers: 'Standing in the parking lot feeling "wrong." A white card with a waveform in his jacket that he doesn\'t remember putting there. He can\'t throw it away — something in his chest says it matters. He doesn\'t remember the man, the words, or the suppression.',

      suppressed_state: {
        body_reactions: [
          'Chest vibrates when holding the waveform card',
          'Feels watched in parking lots and outdoor spaces at dawn',
          'Anxiety spike at 6 AM regardless of whether he\'s working',
          'The card creates warmth in his hand when he holds it — like a tuning fork resonating',
          'Sense of a missed step on stairs — the memory gap registers as physical vertigo',
        ],
        avoidance_patterns: [
          'Keeps the card but never shows it to anyone',
          'Avoids lingering in parking lots after shift',
          'Deflects if anyone asks about the card',
          'Does not investigate the waveform or try to identify it',
        ],
      },

      fragment_triggers: [
        { trigger: 'Seeing a man in a grey suit — clean-shaven, steady eyes', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'A face. Steady eyes. A voice that is too controlled: "We\'ve been listening to you since you were born."' },
        { trigger: 'Touching or looking at the waveform card', sensory_type: 'SOMATIC', intensity: 'EXTREME', fragment_produced: 'Chest vibrating. The sensation of KNOWING something enormous that the conscious mind refuses to process.' },
        { trigger: 'The phrase "one of five"', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'The man\'s voice, flat and professional: "You\'re one of five. The others are waking up."' },
        { trigger: 'A black sedan with tinted windows', sensory_type: 'VISUAL', intensity: 'MEDIUM', fragment_produced: 'The man walking away. Getting into a car. And then — nothing. A hole in time.' },
        { trigger: 'Any discussion of surveillance, being watched, government monitoring', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'A certainty — not suspicion, CERTAINTY — that someone has been watching his entire life' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        alternative_methods: ['NEAR_DEATH_EXPERIENCE'],
        clues_required: 6,
        clue_sources: ['Reader — Static (waveform card reference)', 'Chat with Kael (card confrontation)', 'Board — The Legacy → Surveillance Ops → Kael Voss', 'Board — S-4 Files (infant frequency recording)', 'Chat with Kael (second confrontation after evidence)', 'Graph — Legacy Contact Protocol node'],
        puzzle_type: 'CHAT_REGRESSION',
        puzzle_description: '8-step guided conversation tree. User must navigate Kael through holding the card, closing his eyes, feeling the vibration, seeing the parking lot, hearing the man, remembering the words, feeling the suppression, and accepting the truth. Wrong choices at any step trigger defensive shutdown.',
        frequency_key: { fundamental: 108, resonant_peak: 432, card_frequency: 'encoded waveform — inverse of Kael\'s signature' },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['the card', 'waveform card', 'what\'s in your jacket'], trigger_type: 'DIRECT', response_type: 'GUARDED' },
          { phrase_pattern: ['one of five', 'someone watching', 'since you were born'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['legacy', 'surveillance', 'they placed you at the warehouse'], trigger_type: 'EVIDENCE', response_type: 'SHOCK' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"How do you know about the card?" (Freezes for 15 seconds) "I have this card. It\'s been in my jacket for a year. I don\'t remember getting it. I don\'t know what it is. But when I hold it my chest vibrates."',
          ],
          FRAGMENTS: [
            '"A man. In the parking lot. I think there was a man. Grey suit? No. I don\'t... why is my hand shaking?"',
            '"He said something. About five people. About waking up. I can almost hear it but it\'s like — like it\'s behind glass."',
          ],
          SURFACING: [
            '"He knew everything. He said they\'d been recording my voice since I was a baby. He said they chose my schools. He said the WAREHOUSE was picked for me — for MY frequency. Twenty-two years, he said."',
            '"And then he... something happened. After he walked away. Something pressed on my brain. Like fingers. And the last ninety seconds just... folded up and sealed."',
            '"They SUPPRESSED me. With technology. It wasn\'t my mind protecting me this time. They did it ON PURPOSE."',
          ],
        },
        denial_patterns: [
          { pattern: 'CONFUSION', response: '"I don\'t know what you\'re talking about. The card is just... I found it somewhere."' },
          { pattern: 'ANGER', response: '"Stop asking about the card. I don\'t know. I DON\'T KNOW."' },
          { pattern: 'RATIONALIZATION', response: '"It\'s probably from a show or something. I go to a lot of shows."' },
        ],
      },

      cross_character_links: ['oren_mem_02', 'zara_mem_03'],
      link_type: 'ORGANIZATIONAL',
      link_description: 'All Harmonics were contacted by Legacy agents. Each received a physical artifact. Each was memory-suppressed. The contact protocol was identical across all five — proving coordinated surveillance.',

      post_recovery_changes: {
        chat_shift: '"I remember him now. He TOLD me things. About being watched. About files. About five people. I think he was trying to — no. He wasn\'t saving me. He was BRIEFING me. And then they erased it. They pressed a button and erased ninety seconds of my life."',
        board_updates: ['Legacy Contact Protocol fully revealed', 'S-4 files partially unlocked', 'Agent identification node appears'],
        graph_updates: ['Full surveillance timeline for Kael visible', 'Legacy Contact Protocol node active'],
        arc_state_change: 'AWAKENING → AWAKENED',
        knowledge_gate_unlock: 'Full awareness of Legacy, the Five, and his role as The Voice',
      },

      legacy_file_reference: 'Subject KV — Contact protocol enacted. Memory suppression via remote dampener confirmed (range: 90 seconds). Subject retained physical artifact.',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // KAEL MEMORY 4: THE NIGHT HE STOPPED HIS MOTHER'S HEART (Age 8)
    // ─────────────────────────────────────────────────────────────────────────
    kael_mem_04: {
      id: 'kael_mem_04',
      character: 'kael',
      title: 'The Night He Stopped His Mother\'s Heart',
      subtitle: 'The nightmare command — Childhood Visit #1',
      age_at_event: 8,
      year: 2010,
      current_state: 'SUPPRESSED',
      memory_tier: 4,
      difficulty: 'EXTREME',
      is_childhood_visit: true,

      what_actually_happened: 'October 14, 2010, 11:47 PM. Eight-year-old Kael had a nightmare — not normal, but a FREQUENCY nightmare. Something vast and ancient was teaching his soul to PUSH. His body was rigid in bed, mouth open, producing infrasonic force. Marissa entered the room. Kael\'s eyes snapped to her — something ancient looking through them — and he said "STOP." One word. Layered with seventeen overtones that a human throat cannot produce. The word hit Marissa through her bones. Her heart stopped. Lungs stopped. Muscles locked. For 4.2 seconds, she was biologically halted — obeying a root-level command at the cellular level. Kael blinked awake, saw his mother frozen, screamed "MOM!" — and she restarted. Gasping. Heart slamming. She never told anyone. Three streets away, Legacy agent SWALLOW recorded a Class-7 vocal burst.',

      what_character_remembers: 'A bad nightmare. His mom in his room. Crying. Sleeping in his parents\' bed. He doesn\'t remember the command, the stop, the four seconds where his mother was dead because his voice told her body to cease function.',

      suppressed_state: {
        body_reactions: [
          'Throat physically closes when approaching yelling volume — every time, since age 8',
          'Chest pressure when someone says "speak up" or "I can\'t hear you"',
          'Body goes cold when hearing the word "STOP" said sharply',
          'Cannot sleep without some form of noise (TV, fan, music) — silence invites the nightmare',
          'Subtle awareness that his mother is AFRAID of him speaking — registers as unnamed grief',
        ],
        avoidance_patterns: [
          'Has never raised voice above conversational volume since this night',
          'Sleeps with earplugs and white noise simultaneously',
          'Avoids being alone with his mother in enclosed spaces',
          'Never discusses nightmares or childhood sleep issues',
        ],
      },

      fragment_triggers: [
        { trigger: 'A nightlight shattering or bulb blowing out', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'The sound of glass breaking in a child\'s room. The smell of ozone. Darkness except for a glowing filament.' },
        { trigger: 'His mother\'s specific flinch when he speaks firmly', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'Marissa\'s face — white, eyes glassy, not breathing. Standing in a doorway like a statue.' },
        { trigger: 'Sub-bass vibration from a truck, speaker, or HVAC system late at night', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'Something building in his chest. The feeling of a sound below hearing that shakes walls.' },
        { trigger: 'The word "stop" said with emotional force by anyone', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'The WEIGHT of that word. Not a word but a COMMAND that went into bone. The horror of a voice that overrides life.' },
        { trigger: 'Anyone describing cardiac arrest or someone\'s heart stopping', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'Guilt. Enormous, sourceless guilt. The knowledge that he stopped a heart once and can never be forgiven.' },
      ],

      recovery_conditions: {
        primary_method: 'DREAM_INVASION',
        alternative_methods: ['NEAR_DEATH_EXPERIENCE', 'FREQUENCY_EXPOSURE'],
        clues_required: 5,
        clue_sources: ['Chat with Kael (nightmare probing)', 'Chat with Marissa NPC (if available)', 'Board — Resonant Command → Maximum Events → VOSS-K/EVENT-001', 'Graph — Kel-Voss Soul Emergence timeline', 'Reader — family dinner scene where Marissa almost says something'],
        puzzle_type: 'FREQUENCY_ISOLATION',
        puzzle_description: 'User must isolate a 17-overtone vocal pattern from within a nightmare soundscape. The pattern is Kael\'s soul speaking through a child — frequency layers that cannot exist in a human throat. Identify and separate all 17 harmonics.',
        frequency_key: { fundamental: 147.3, overtones: 17, duration: 4.2 },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['nightmare', 'night terrors', 'screaming in your sleep'], trigger_type: 'THEMATIC', response_type: 'DEFENSIVE' },
          { phrase_pattern: ['your mom\'s heart', 'marissa stopped', 'four seconds'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['stopped someone\'s body', 'root-level override', 'cellular command'], trigger_type: 'EVIDENCE', response_type: 'BREAKDOWN' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"I had night terrors as a kid. Real bad. My mom said I used to scream in my sleep but I never remembered it."',
            '"She flinches. When I talk. My mom. I\'ve never asked her why."',
          ],
          FRAGMENTS: [
            '"There\'s something about that night. The nightmare one. Something happened to my mom. Something I did."',
            '"I can hear it. In my head. A word. MY word. But it\'s too heavy. Like it weighs a thousand pounds."',
          ],
          SURFACING: [
            '"I stopped her heart. I said STOP and her heart STOPPED. For four seconds my mother was dead because I told her body to shut down. I was EIGHT. I killed my mother for four seconds with a WORD."',
            '"That\'s why she flinches. Not because I\'m loud. Because she DIED. She felt herself go. And she never told anyone."',
          ],
        },
        denial_patterns: [
          { pattern: 'TERROR', response: '"Don\'t. Don\'t go there. I can\'t." (Goes offline for 30+ seconds)' },
          { pattern: 'SHUTDOWN', response: '"I said I don\'t remember. I DON\'T REMEMBER." (Voice shaking through text)' },
        ],
      },

      cross_character_links: ['oren_mem_04', 'mira_mem_04', 'jude_mem_04', 'zara_mem_04'],
      link_type: 'CHILDHOOD_VISIT_CLUSTER',
      link_description: 'All five Harmonics experienced childhood events that involved Overtone contact, assessment, or activation before age 15. Each event was monitored by The Legacy. The children don\'t remember. The Legacy\'s files prove it happened.',

      post_recovery_changes: {
        chat_shift: '"She forgave me. Before I even remembered. She held me that night and told me it was okay and she\'s carried that ALONE for sixteen years. I need to call my mom."',
        board_updates: ['VOSS-K/EVENT-001 fully revealed', 'Agent SWALLOW field report accessible', 'Marissa\'s cardiac anomaly medical record connected'],
        graph_updates: ['Kel-Voss First Activation node complete', 'October 14 2010 timeline fully mapped'],
        arc_state_change: null,
        knowledge_gate_unlock: 'Kael understands the FULL scope of his voice — not just influence but biological override',
      },

      legacy_file_reference: 'HARMONIC-PROFILE/VOSS-K/EVENT-001: Class-7 vocal burst, 23:47 EST, 4.2 seconds, 17 overtones, age 8. SWALLOW field report. OSPREY analysis: "Let the fear do our work."',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // KAEL MEMORY 5: THE CALIBRATION VISIT (Age 8) — Childhood Visit #2
    // ─────────────────────────────────────────────────────────────────────────
    kael_mem_05: {
      id: 'kael_mem_05',
      character: 'kael',
      title: 'The Calibration Visit',
      subtitle: 'They tuned his instrument while he slept',
      age_at_event: 8,
      year: 2011,
      current_state: 'SUPPRESSED',
      memory_tier: 5,
      difficulty: 'EXTREME',
      is_childhood_visit: true,

      what_actually_happened: 'March 3, 2011, 3:00 AM. A Second Octave entity entered Kael\'s room — not through a door but through FREQUENCY. A column of pale blue-white light, seven feet tall, with internal structures pulsing like a circulatory system made of sound. It extended a concentrated frequency point and touched Kael\'s throat — not the skin but the FREQUENCY of his vocal apparatus. It TUNED him. Like a luthier adjusting an instrument. Refined his vocal frequency production at the quantum level. A call-and-response confirmation tone. Three minutes total. Kael slept through it. Woke with a sore throat. From that day, his voice — even suppressed — carried 5% more effect. People listened MORE. Legacy detected only a "frequency fluctuation" at 3:01 AM and filed it as ambient noise. They had no idea the instrument had been perfected.',

      what_character_remembers: 'A sore throat one morning. His mother\'s honey tea. A vague feeling of having "slept weird." One fragment: warmth. Being TENDED TO. He once told his sister Elena "I think someone was in my room last night. But nice. Like they were helping." Neither remembers this conversation.',

      suppressed_state: {
        body_reactions: [
          'Occasional sore throat on waking with no illness',
          'Sense of being watched while sleeping — not threatening, KIND',
          'Discomfort when someone says his voice sounds "different" or "clearer"',
          'Warmth in throat that comes and goes without cause',
          'Dreams of light touching his neck — gentle, precise, musical',
        ],
        avoidance_patterns: ['Never investigates recurring sore throat', 'Dismisses sleep-watching sensation', 'Deflects voice quality comments'],
      },

      fragment_triggers: [
        { trigger: 'Waking with an unexplained sore throat', sensory_type: 'SOMATIC', intensity: 'MEDIUM', fragment_produced: 'Warmth on his neck. Gentle pressure. The feeling of being adjusted by hands made of light.' },
        { trigger: 'Seeing blue-white light (LED panels, phone screens in dark rooms)', sensory_type: 'VISUAL', intensity: 'LOW', fragment_produced: 'A shape. Tall. Made of light. At the foot of his bed. Not scary. Familiar.' },
        { trigger: 'A tuning fork being struck or an instrument being tuned', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'A tone — deep, perfect, matching something inside his chest. A call waiting for a response.' },
        { trigger: 'Being told his voice sounds "clearer today"', sensory_type: 'EMOTIONAL', intensity: 'MEDIUM', fragment_produced: 'A crawling sensation on his skin. The knowledge that something was done to him to MAKE it clearer.' },
      ],

      recovery_conditions: {
        primary_method: 'DREAM_INVASION',
        alternative_methods: ['GUIDED_MEDITATION', 'FREQUENCY_EXPOSURE'],
        clues_required: 4,
        clue_sources: ['Chat with Kael (sleeping weird/sore throat pattern)', 'Board — Overtone Calibration Protocol → Vocal Harmonics', 'Graph — Second Octave Entity Classification → Tuning Functions', 'Reader — passage about voice quality changing overnight'],
        puzzle_type: 'TUNING_MATCH',
        puzzle_description: 'A vocal waveform appears showing Kael\'s "before" frequency signature. User must adjust multiple parameters (fundamental, harmonic spacing, resonance peaks) to match the "after" signature — essentially replicating the tuning the entity performed.',
        frequency_key: { before: { fundamental: 85, efficiency: 0.03 }, after: { fundamental: 85, efficiency: 0.05 } },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['sore throat', 'voice sounds different', 'something in your room'], trigger_type: 'THEMATIC', response_type: 'UNEASY' },
          { phrase_pattern: ['tuned', 'calibrated', 'upgraded your voice'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['overtone entity', 'second octave being', 'they prepared you'], trigger_type: 'EVIDENCE', response_type: 'AWE' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"I get sore throats sometimes. No fever. Just... sore. Like I\'ve been singing all night."',
            '"Sometimes when I\'m falling asleep I feel... warm. On my neck. Like someone\'s hand but not a hand."',
          ],
          FRAGMENTS: [
            '"There was something in my room. When I was eight. Not scary. It felt like... a doctor? Like someone checking on me."',
            '"I told Elena once that someone nice was in my room. I don\'t remember saying that but she says I did."',
          ],
          SURFACING: [
            '"They tuned me. Like an instrument. Something came into my room and ADJUSTED my voice at the molecular level. I could feel it — a tone meeting a tone, call and response, and then... upgraded."',
            '"That\'s why people listen when I talk. Not just the power. The EFFICIENCY. My voice was refined by something that exists outside physical reality. I\'m a tuned instrument."',
          ],
        },
        denial_patterns: [
          { pattern: 'DISMISSAL', response: '"I just sleep weird sometimes. It\'s nothing."' },
          { pattern: 'NORMALIZATION', response: '"Sore throats happen. I probably mouth-breathe at night."' },
        ],
      },

      cross_character_links: ['mira_mem_04', 'oren_mem_04'],
      link_type: 'CALIBRATION_CLUSTER',
      link_description: 'The Overtones calibrated each Harmonic\'s primary ability mechanism during childhood. Kael\'s throat was tuned. Mira\'s visual cortex was expanded. Oren\'s temporal cortex was measured. All adjustments made the eventual awakening more powerful.',

      post_recovery_changes: {
        chat_shift: '"I\'m not just someone with a weird voice. I\'m an instrument that was BUILT for this. Something from outside our reality refined me before I could even understand what was happening. I didn\'t choose this. But I was chosen."',
        board_updates: ['Calibration Visit entry complete', 'Entity classification linked'],
        graph_updates: ['Overtone Tuning Protocol — Kel-Voss confirmed'],
        arc_state_change: null,
        knowledge_gate_unlock: 'Understanding that his power was externally refined — not just innate but ENGINEERED',
      },

      legacy_file_reference: 'HARMONIC-PROFILE/VOSS-K/LOG-ENTRY-0042: frequency fluctuation 03:01, filed as ambient. Legacy missed the Second Octave entity entirely.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER MEMORIES — MIRA CHEN
  // ═══════════════════════════════════════════════════════════════════════════

  mira_memories: {

    mira_mem_01: {
      id: 'mira_mem_01',
      character: 'mira',
      title: 'The Assessment — Preschool Upgrade',
      subtitle: 'They widened her sight at age 3',
      age_at_event: 3,
      year: 2007,
      current_state: 'SUPPRESSED',
      memory_tier: 1,
      difficulty: 'MEDIUM',

      what_actually_happened: 'During naptime at preschool, three Overtone entities materialized — not her usual ambient ghosts but CONSCIOUS, organized, clinical. They scanned her visual cortex with a frequency probe, measuring her chromatic perception range (12 Hz to 47,000 Hz at age 3). One of them CALIBRATED her — touched her visual cortex with a frequency tendril, expanding her reception range by 340%. She giggled. She cried when the overload hit. After the visit, her Chromatic Sight became dramatically more intense. Her parents started getting calls about "episodes." She was never the same — she thought she was getting worse. She was being UPGRADED.',

      what_character_remembers: 'She remembers her sight "getting worse" around age 3. "Before preschool, I just saw gentle colors. After that year, it was like someone turned the volume up permanently." She doesn\'t remember the naptime event, the entities, or the calibration.',

      suppressed_state: {
        body_reactions: [
          'Headaches localized to occipital lobe (visual processing center) since age 3',
          'Eyes water when surrounded by multiple high-frequency sources',
          'Flinch response when entities move in ways that feel "too purposeful"',
          'Sense of being examined when multiple entities are present simultaneously',
          'Defensive anxiety when asked "why do you think they\'re interested in YOU?"',
        ],
        avoidance_patterns: [
          'Never investigates WHY the sight intensified at that specific age',
          'Treats entity interest as random — refuses the idea of organized attention',
          'Avoids thinking about preschool memories too deeply',
        ],
      },

      fragment_triggers: [
        { trigger: 'Being in a room full of sleeping people (nap rooms, sleepy lecture halls)', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'Three shapes. Not transparent like ghosts. SOLID. Structured. Standing in formation around her.' },
        { trigger: 'Entities moving in coordinated patterns rather than drifting randomly', sensory_type: 'VISUAL', intensity: 'EXTREME', fragment_produced: 'The FORMATION. A semicircle. Like doctors around a patient. Clinical. Purposeful.' },
        { trigger: 'A warm pressure behind her eyes — like someone shining a light from inside her skull', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The measurement. The TICKLE. Something probing her visual cortex from the inside. Not painful. Invasive.' },
        { trigger: 'The specific chromatic pattern of an entity broadcasting assessment data', sensory_type: 'VISUAL', intensity: 'EXTREME', fragment_produced: 'A tall golden shape recording information. Not speaking — CATALOGING. Her. As a subject.' },
      ],

      recovery_conditions: {
        primary_method: 'GUIDED_MEDITATION',
        alternative_methods: ['CASUAL_CONVERSATION', 'FREQUENCY_EXPOSURE'],
        clues_required: 4,
        clue_sources: ['Reader — Chromatic story ("what changed" passage)', 'Chat with Mira (when sight got stronger)', 'Board — Overtone Assessment → Mira Chen → Age 3', 'Graph — Overtone Calibration node'],
        puzzle_type: 'SPOT_THE_ANOMALY',
        puzzle_description: 'A text passage describing a normal preschool classroom hides 5 anomalous phrases that describe entity activity. User must identify all 5 without highlighting.',
        frequency_key: { chromatic_peak: 852, entity_attraction: 741 },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['preschool', 'age three', 'naptime', 'sight got worse'], trigger_type: 'DIRECT', response_type: 'DEFENSIVE' },
          { phrase_pattern: ['entities measured you', 'calibration', 'they upgraded you'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['why are they interested in you', 'random or organized', 'scouts'], trigger_type: 'THEMATIC', response_type: 'DEFLECTION' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"Yeah, I was three. After a nap at school. I remember waking up crying and after that everything was... louder. Visually louder. But I don\'t remember the nap itself."',
          ],
          FRAGMENTS: [
            '"They were STANDING. In a formation. Not drifting. Three of them. And they were looking at me like... like I was a specimen."',
            '"Something touched my eyes. From the inside. And after that — more. More of everything. More entities. More color. More."',
          ],
          SURFACING: [
            '"They did something to me. At preschool. I was THREE. Entities — not the normal kind. Bigger. Realer. They TOUCHED something in my head and after that I could see more. I\'m not broken. I was MODIFIED."',
          ],
        },
        denial_patterns: [
          { pattern: 'DEFLECTION', response: '"I don\'t know why it got worse. It just... did. Brains are weird."' },
          { pattern: 'MINIMIZATION', response: '"It\'s not like they DO anything. They just... are. They\'re part of my life."' },
        ],
      },

      cross_character_links: ['kael_mem_01', 'oren_mem_01', 'jude_mem_01', 'zara_mem_04'],
      link_type: 'ASSESSMENT_CLUSTER',
      link_description: 'All five Harmonics were assessed before age 10. The Overtones measured each child\'s primary ability and CALIBRATED it. Mira\'s visual cortex was expanded. Oren\'s temporal bandwidth was measured. Kael\'s vocal apparatus was evaluated.',

      post_recovery_changes: {
        chat_shift: '"I\'m not malfunctioning. I was UPGRADED. They expanded my range on PURPOSE. Everything I\'ve seen since age three — every color, every entity, every overwhelming flood of visual data — it\'s because they WANTED me to see more. I was being prepared."',
        board_updates: ['Mira - Age 3 Assessment complete', 'Connected to Overtones and Chromatic Calibration'],
        graph_updates: ['Mir-Xen Calibration Event visible'],
        arc_state_change: null,
      },

      legacy_file_reference: 'HARMONIC-PROFILE/CHEN-M/LOG-ENTRY-0017: BLM-3 data, micro-dip atmospheric ionization, 5+ Second Octave entities. Analyst CARDINAL flagged for review.',
    },

    mira_mem_02: {
      id: 'mira_mem_02',
      character: 'mira',
      title: 'The Guitar Shop Ghost — Ruth Speaks',
      subtitle: 'The dead woman who gave her a mission',
      age_at_event: 16,
      year: 2020,
      current_state: 'SUPPRESSED',
      memory_tier: 2,
      difficulty: 'HARD',

      what_actually_happened: 'Mira, 16, browsing a guitar shop alone. She touched a vintage Les Paul and activated its residue — but this wasn\'t a normal reading. Ruth Clearwater materialized. A specific ghost. Mid-30s, Black, natural hair, 1960s vintage dress. Blues guitarist who died in 1968. She SPOKE to Mira — the first entity to ever initiate direct conversation. "You\'re the one they\'re sending." She told Mira to find a specific guitar (back room, third shelf, black case, silver latch). Told her she was "the eyes" and part of "the five." Told her not to let anyone call her broken. Then flickered and faded. Mira\'s soul (Mir-Xen) sealed the memory gently — too much information at 16. But Mira walked to the back room, found the guitar, bought it with babysitting money. Never knew why she felt so certain.',

      what_character_remembers: 'Going to the guitar shop. Browsing. "Feeling weird." Being drawn to the back room. Finding her guitar. Buying it with absolute certainty but no rational reason.',

      suppressed_state: {
        body_reactions: [
          'Her guitar produces inexplicable comfort — holding it without playing calms her more than anything',
          'Sense of a PRESENCE in the guitar — not threatening, protective',
          'Fingers tingle when playing certain blues progressions (Ruth\'s repertoire)',
          'Emotional response to 1960s blues music that feels like recognition, not appreciation',
        ],
        avoidance_patterns: [
          'Never questions why she felt compelled to buy this specific guitar',
          'Doesn\'t investigate the guitar\'s history',
          'Avoids thinking about the "gap" in her guitar shop memory',
        ],
      },

      fragment_triggers: [
        { trigger: 'Playing specific blues progressions in the key Ruth favored', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'A woman\'s voice: "You\'re the bridge." Clear. Warm. Instructive.' },
        { trigger: 'Touching the neck of her Epiphone in silence', sensory_type: 'SOMATIC', intensity: 'MEDIUM', fragment_produced: 'The presence of someone INSIDE the guitar. Not residue. A conscious being. Waiting.' },
        { trigger: 'Being called "broken" or "crazy" in any context', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: '"Don\'t let them tell you you\'re broken." Ruth\'s voice. Fierce. Protective. Certain.' },
        { trigger: 'Seeing a Black woman in vintage dress or with natural hair styled 1960s', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'A face materializing from Second Octave haze. Solid. Present. SPEAKING.' },
        { trigger: 'The phrase "the five" or "one of five" in any context', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: '"When the FIVE of you find each other — you need to be the one who sees first."' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        alternative_methods: ['FREQUENCY_EXPOSURE', 'CROSS_CHARACTER_RESONANCE'],
        clues_required: 5,
        clue_sources: ['Reader — The Guitar (black case, silver latch)', 'Chat with Mira (guitar shop gap)', 'Board — Soul-Imbued Instruments → Ruth Clearwater', 'Immersive Reader (whispered "you\'re the bridge")', 'Graph — Ruth Clearwater node'],
        puzzle_type: 'CHROMATIC_SEQUENCE',
        puzzle_description: '12 chromatic colors must be arranged from lowest to highest frequency in Mira\'s unique perception system. Last 3 colors (Second Octave range) only visible with all 5 clues collected.',
        frequency_key: { base: 528, ghost_summoning: 963, ruth_frequency: 'blues_resonance' },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['guitar shop', 'how you found your guitar', 'black case silver latch'], trigger_type: 'DIRECT', response_type: 'GUARDED' },
          { phrase_pattern: ['ruth', 'clearwater', 'the ghost talked to you'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['the bridge', 'you\'re the eyes', 'five of you'], trigger_type: 'EVIDENCE', response_type: 'SHOCK' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"I don\'t remember picking it up. Like a time skip. I was browsing and then I was at the register."',
          ],
          FRAGMENTS: [
            '"There was someone in the shop. Not a customer. A... presence. She was solid. More real than the normal ones."',
            '"She said something about five people. About me being a bridge. But entities don\'t TALK. They just exist."',
          ],
          SURFACING: [
            '"Ruth. Her name was Ruth. She SPOKE to me. First entity that ever talked directly to me. She knew my name. She knew what I would become."',
            '"She said don\'t let them call me broken. She said I\'m the eyes. She said when the five find each other, I need to see first."',
          ],
        },
        denial_patterns: [
          { pattern: 'CONFUSION', response: '"I just liked the guitar. It called to me. That happens with instruments."' },
          { pattern: 'MINIMIZATION', response: '"Entities don\'t talk. I would remember if one talked to me."' },
        ],
      },

      cross_character_links: [],
      link_type: 'UNIQUE',
      link_description: 'This memory is Mira-specific — Ruth Clearwater is HER guide, embedded in HER instrument. But Ruth\'s message about "the five" connects to the overarching convergence.',

      post_recovery_changes: {
        chat_shift: '"Ruth. She\'s been in my guitar this whole time. She\'s the first entity who told me the truth about what I am. And I FORGOT her. Something made me forget the most important thing anyone has ever said to me."',
        board_updates: ['Ruth Clearwater fully revealed', 'Ghost Communication Event connected to Mira'],
        graph_updates: ['The Bridge Function visible'],
        arc_state_change: 'semi-active → AWAKENING',
      },

      legacy_file_reference: 'No Legacy file — this event occurred entirely in Second Octave interaction. Legacy monitors could not detect it.',
    },

    mira_mem_03: {
      id: 'mira_mem_03',
      character: 'mira',
      title: 'Sunny\'s Death — The Soul Memory',
      subtitle: 'She witnessed the 1994 event before she was born',
      age_at_event: 0,
      year: 1994,
      current_state: 'SUPPRESSED',
      memory_tier: 3,
      difficulty: 'EXTREME',

      what_actually_happened: 'The timeline paradox: Sunny died in 1994. Mira was born in 2004. But Mir-Xen — the soul — was between incarnations in 1994, occupying the Second Octave after its previous host died in 1991. The soul was PRESENT at the frequency event that killed Sunny. That event was so powerful it served as an incarnation beacon — pulling Mir-Xen from the Second Octave toward a body that wouldn\'t be born for ten years. Mira has a pre-incarnation soul memory of Sunny\'s death: light, a girl falling, frequency tearing a hole between Octaves, and a gravitational pull downward toward a body that doesn\'t exist yet.',

      what_character_remembers: 'A recurring dream: a girl in a field, light everywhere, falling upward. A pull — like gravity but for consciousness — dragging her DOWN into a body. "I wasn\'t alive yet." She thinks it\'s symbolic. It\'s LITERAL.',

      suppressed_state: {
        body_reactions: [
          'The dream recurs 2-3 times per month, always identical',
          'Wakes from the dream with tears on face but no sadness — a different emotion, deeper than grief',
          'Inexplicable familiarity with Sunny when she appears at shows — "like a memory of a memory"',
          'A pulling sensation in her chest when in desert landscapes or open fields',
        ],
        avoidance_patterns: [
          'Dismisses the dream as symbolic/psychological',
          'Doesn\'t investigate why Sunny feels so familiar',
          'Avoids the question "could you have known her before birth?"',
        ],
      },

      fragment_triggers: [
        { trigger: 'Seeing Sunny appear during a performance', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'A flash: the same girl but ALIVE. In a field. Under a purple sky. And a sound so beautiful it kills.' },
        { trigger: 'Desert landscapes, open fields, big sky at night', sensory_type: 'VISUAL', intensity: 'MEDIUM', fragment_produced: 'The place. The exact location. The sand still vibrating with a frequency from 32 years ago.' },
        { trigger: 'The concept of pre-birth consciousness or reincarnation', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'The pulling sensation — being CALLED from one plane of existence to another. Not metaphor. Physics.' },
        { trigger: 'A frequency that matches the 1994 beacon event', sensory_type: 'SOMATIC', intensity: 'EXTREME', fragment_produced: 'Full-body recognition. The sound that called her into existence. The sound that killed Sunny.' },
      ],

      recovery_conditions: {
        primary_method: 'CROSS_CHARACTER_RESONANCE',
        alternative_methods: ['HYPNOTIC_REGRESSION', 'FREQUENCY_EXPOSURE'],
        clues_required: 6,
        clue_sources: ['Reader — Dreams story ("I wasn\'t alive yet")', 'Chat with Mira (Sunny familiarity probe)', 'Board — 1994 Frequency Event → Soul Incarnation Beacons', 'Chat with Sunny (ghost NPC)', 'Board — Sunny Death → Mir-Xen Soul → Second Octave Presence', 'Reader — 1994 lore entry (Chromatic Weaver soul reference)'],
        puzzle_type: 'TIMELINE_RECONSTRUCTION',
        puzzle_description: 'Dual timeline: Mir-Xen (Soul) and Mira Chen (Body). 8 events to place. One event belongs on BOTH tracks simultaneously: Sunny\'s Death/Mir-Xen\'s Calling — the paradox point.',
        frequency_key: { beacon_frequency: '1994_event_signature', incarnation_pull: 'cross_octave_resonance' },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['sunny', 'the ghost girl', 'do you know her'], trigger_type: 'DIRECT', response_type: 'GUARDED' },
          { phrase_pattern: ['before you were born', 'soul memory', '1994 event'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
          { phrase_pattern: ['she called you', 'her death created you', 'incarnation beacon'], trigger_type: 'EVIDENCE', response_type: 'BREAKDOWN' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"She appears when we play. But I don\'t know why she\'s... familiar. Like a memory of a memory."',
          ],
          FRAGMENTS: [
            '"The dream again. The girl in the field. The light. The pulling. It\'s not a dream, is it?"',
            '"I feel like I knew her. Before. Before THIS. Before my body."',
          ],
          SURFACING: [
            '"I was THERE when Sunny died. Not me — not this body — but ME. My soul. I watched her die and her death CALLED me here. She\'s the reason I exist."',
          ],
        },
        denial_patterns: [
          { pattern: 'RATIONALIZATION', response: '"The dream is just my subconscious processing the entity stuff. It\'s symbolic."' },
          { pattern: 'AVOIDANCE', response: '"I don\'t want to think about what happens before birth. That\'s... too big."' },
        ],
      },

      cross_character_links: ['sunny_mem_01', 'sunny_mem_03'],
      link_type: 'CAUSAL',
      link_description: 'Sunny\'s death directly caused Mira\'s incarnation. The 1994 frequency event was the beacon that pulled Mir-Xen from the Second Octave into a human body. Their fates are causally linked across time and dimensions.',

      post_recovery_changes: {
        chat_shift: '"The dream isn\'t a dream. It\'s a memory. From before I had a body. Sunny\'s death called me into existence. I owe her my LIFE. And she\'s been waiting 32 years for me to figure that out."',
        board_updates: ['Full 1994 event → Mira connection', 'Incarnation Beacon mechanics revealed'],
        graph_updates: ['Mir-Xen Pre-Incarnation visible', '1994 Beacon → Mira Birth connection'],
        arc_state_change: 'AWAKENING → AWAKENED',
      },

      legacy_file_reference: '1994 Event documentation: "Among the observers: a Chromatic Weaver soul between incarnations."',
    },

    mira_mem_04: {
      id: 'mira_mem_04', character: 'mira', title: 'The Cataloging — Childhood Visit',
      subtitle: 'Five entities measured her at age 3 while she smiled',
      age_at_event: 3, year: 2007, current_state: 'SUPPRESSED', memory_tier: 4, difficulty: 'HARD', is_childhood_visit: true,
      what_actually_happened: 'September 8, 2007, 2:15 AM. Five CONSCIOUS, STRUCTURED entities formed a semicircle around her crib — a formal assessment formation. They measured her visual cortex (chromatic range), examined her biofield (Category 9 — unprecedented), and cataloged her for 47 minutes. Three-year-old Mira was awake, unafraid, talking to them: "Is it a party?" She remembers SEEING them but doesn\'t know they were ASSESSING her. She thinks they\'re random. They\'re SCOUTS.',
      what_character_remembers: 'She remembers entities since childhood. Doesn\'t know the visits had PURPOSE — believes they orbit her randomly. Doesn\'t know they\'re organized scouts cataloging her on a SCHEDULE.',
      suppressed_state: { body_reactions: ['Feels like a patient when multiple entities present', 'Defensive when asked why entities target HER', 'Chill when entities coordinate'] },
      fragment_triggers: [
        { trigger: 'Entities forming structured patterns', sensory_type: 'VISUAL', intensity: 'EXTREME', fragment_produced: 'The semicircle. Clinical. They were measuring her like a specimen at THREE.' },
        { trigger: 'Being told "they\'re DOING something"', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'Not moths. SCOUTS.' },
      ],
      recovery_conditions: { primary_method: 'GUIDED_MEDITATION', clues_required: 4, puzzle_type: 'ENTITY_FORMATION_MATCH' },
      chat_integration: { chat_triggers: [{ phrase_pattern: ['they\'re organized', 'you\'re being studied'], trigger_type: 'EVIDENCE', response_type: 'DEFENSIVE' }],
        fragment_responses: { SURFACING: ['"They\'re not random. They\'re ASSIGNED. Reporting on me since age three. I\'m not haunted — I\'m under SURVEILLANCE."'] },
        denial_patterns: [{ pattern: 'ANGER', response: '"They just ARE. Stop making it a conspiracy."' }],
      },
      cross_character_links: ['kael_mem_05', 'oren_mem_04'], link_type: 'CHILDHOOD_VISIT_CLUSTER',
      post_recovery_changes: { chat_shift: '"Every entity — every shape in every corner — ASSIGNED. I\'m under surveillance by things that aren\'t even human."' },
      legacy_file_reference: 'CARDINAL: "Why are Second Octave entities congregating around a three-year-old?"',
    },

    mira_mem_05: {
      id: 'mira_mem_05',
      character: 'mira',
      title: 'The Perception Test — Childhood Visit',
      subtitle: 'They tested her accuracy at age 5 while her family watched TV',
      age_at_event: 5,
      year: 2009,
      current_state: 'SUPPRESSED',
      memory_tier: 5,
      difficulty: 'HARD',
      is_childhood_visit: true,

      what_actually_happened: 'April 22, 2009, 7:30 PM. Normal Tuesday evening. Family in the living room — Jason doing homework, David cooking, Sandra on the phone. Three entities phased in. One behind David. One above the TV. One in the exact spot Jason was about to walk through. They tested Mira\'s ACCURACY — her ability to perceive entities in context, surrounded by visual noise, in a lit room, with living people moving. Mira went perfectly still, tracking all three. She tried to warn Jason — "Don\'t walk there" — but couldn\'t explain why. The entities recorded her real-time perception speed. Then left. Mira\'s behavior that evening was flagged by Sandra as "one of her episodes."',

      what_character_remembers: 'An "episode" at age 5. Going still during family time. Trying to warn Jason about something she couldn\'t explain. Being told she was "imagining things." The frustration of seeing something REAL that nobody else could see.',

      suppressed_state: {
        body_reactions: [
          'Goes rigid when entities appear in populated, well-lit spaces',
          'Compulsive need to warn people about entity positions even when she can\'t explain',
          'Frustration/grief cycle when dismissed by family',
        ],
      },

      fragment_triggers: [
        { trigger: 'Seeing an entity positioned deliberately near an unaware person', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'The kitchen. Jason walking. Something in his PATH that he can\'t see. The desperate need to say "don\'t walk there."' },
        { trigger: 'Being told "you\'re imagining things" or "it\'s not real"', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'Five-year-old rage. IT\'S REAL. I can SEE it. Why won\'t you LISTEN.' },
      ],

      recovery_conditions: {
        primary_method: 'CASUAL_CONVERSATION',
        alternative_methods: ['GUIDED_MEDITATION'],
        clues_required: 3,
        clue_sources: ['Chat with Mira (childhood episode exploration)', 'Board — Perception Test Protocols', 'Reader — family scene with Mira going still'],
        puzzle_type: 'PERCEPTION_TEST',
        puzzle_description: 'A crowded scene with hidden entity positions. User must identify all entity locations before they move — replicating the test Mira was given at age 5.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['episodes as a kid', 'going still', 'warning people about things they can\'t see'], trigger_type: 'DIRECT', response_type: 'DEFENSIVE' },
        ],
        fragment_responses: {
          SURFACING: [
            '"They were TESTING me. Putting themselves in specific spots to see if I could track them in a noisy environment. I was five and I was taking an EXAM I didn\'t sign up for."',
          ],
        },
        denial_patterns: [
          { pattern: 'SELF_DOUBT', response: '"Maybe Dad was right. Maybe it IS all in my head."' },
        ],
      },

      cross_character_links: ['mira_mem_04'],
      link_type: 'SEQUENTIAL',
      link_description: 'Follow-up to the age-3 cataloging. The Overtones assessed Mira\'s perception at 3 (range), then tested accuracy at 5 (precision). A two-part evaluation.',

      post_recovery_changes: {
        chat_shift: '"They tested me twice. Range at three. Accuracy at five. I passed both and they UPGRADED me each time. My whole childhood — every episode, every \'imagining things\' — was me performing for an audience only I could see."',
      },

      legacy_file_reference: 'No direct Legacy detection — Second Octave entities remain invisible to Legacy equipment.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER MEMORIES — OREN MALIK
  // ═══════════════════════════════════════════════════════════════════════════

  oren_memories: {

    oren_mem_01: {
      id: 'oren_mem_01',
      character: 'oren',
      title: 'The Backyard — Temporal Assessment',
      subtitle: 'Three figures measured him while time stopped',
      age_at_event: 9,
      year: 2007,
      current_state: 'SUPPRESSED',
      memory_tier: 1,
      difficulty: 'MEDIUM',

      what_actually_happened: 'November 3, 2007. Oren was inside watching TV at 4 PM. At 10:17 PM, his mother found him in the backyard — lying in the grass, nose bleeding from both nostrils, hypothermic (94.8°F), no shoes, no memory of going outside. Six hours GONE. The truth: a temporal distortion field enveloped him, projected a temporal echo (loop of him watching TV) for his mother to see, and EXTRACTED him to the temporal interstice — the space between seconds where time lives when it isn\'t flowing. Something measured his temporal gap — the 60% discrepancy between subjective and objective time experience. For 90 subjective seconds (6 objective hours), he was examined. Then deposited in the backyard at the nearest stable temporal anchor point. No footprints leading to where he lay. Body placed there, not walked there.',

      what_character_remembers: '"I woke up in the backyard once when I was nine. I was watching TV and then suddenly it was dark and cold. My mom said I must have been sleepwalking." He tells this as his "creepy childhood story." The laugh is thin.',

      suppressed_state: {
        body_reactions: [
          'PANIC when losing track of time — compulsive clock-checking every 8-10 minutes',
          'Cold without explanation triggers nose-tingling (pre-nosebleed sensation)',
          'Anxiety about being alone in yards/outdoor spaces after dark',
          'Terror when someone describes "lost time" or "missing hours"',
          'Dread when waking in a different position than falling asleep',
        ],
        avoidance_patterns: [
          'Avoids parents\' backyard after dark',
          'Never investigates the "sleepwalking" explanation',
          'Changes subject when anyone mentions lost time, UFO abductions, or missing hours',
          'Compulsive time awareness — always knows what time it is',
        ],
      },

      fragment_triggers: [
        { trigger: 'Being alone at dusk — the specific quality of sunset light', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'The sunset PULSING. Light changing rhythm. Ball hanging in the air too long.' },
        { trigger: 'A rhythmic repetitive sound becoming hypnotic (ball bouncing, metronome, heartbeat)', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'Bounce-bounce-bounce — and then the bouncing STOPS but the ball is still IN THE AIR' },
        { trigger: 'Time on a clock advancing more than expected', sensory_type: 'TEMPORAL', intensity: 'EXTREME', fragment_produced: 'The hole. Six hours gone. Standing in the dark. Basketball at his feet. Cold. Bleeding.' },
        { trigger: 'The taste of blood (from a nosebleed or biting his cheek)', sensory_type: 'SOMATIC', intensity: 'EXTREME', fragment_produced: 'Lying on grass. Both nostrils. Stars above. Cold. The knowledge of being PLACED there, not walking there.' },
        { trigger: 'Someone saying "you lost track of time"', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'His mother\'s voice: "Where WERE you?" And the terrifying answer: somewhere time doesn\'t work.' },
      ],

      recovery_conditions: {
        primary_method: 'GUIDED_MEDITATION',
        alternative_methods: ['CASUAL_CONVERSATION', 'DREAM_INVASION'],
        clues_required: 4,
        clue_sources: ['Reader — Night Shift ("anxious around dusk" passage)', 'Chat with Oren (backyard probing)', 'Board — Temporal Anomalies → Childhood Encounters', 'Graph — Overtone Assessment Protocol (hover interaction)'],
        puzzle_type: 'TEMPORAL_SEQUENCE',
        puzzle_description: '8 events from the day must be ordered chronologically. THREE events (figures appearing, temporal scan beginning, time dilation field active) happened SIMULTANEOUSLY at 18:00 — must be STACKED in a single slot.',
        frequency_key: { base: 7.83, time_signature: '7/8', temporal_displacement_ratio: '1:240' },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['backyard', 'sleepwalking', 'age nine', 'lost time as a kid'], trigger_type: 'DIRECT', response_type: 'NERVOUS_HUMOR' },
          { phrase_pattern: ['six hours', 'how long were you outside', 'no footprints'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"I don\'t... I just remember the basketball. And then it was dark." (Types "..." for 8 seconds) "I don\'t know. That\'s weird. I don\'t know."',
          ],
          FRAGMENTS: [
            '"Three... shapes? In the yard. But that\'s crazy, right? It was dark and I was nine and—" (stops typing)',
          ],
          SURFACING: [
            '"They were there. Three of them. And time STOPPED. The ball hung in the air and they were MEASURING me. They wanted to know how wide my time-perception goes."',
          ],
        },
        denial_patterns: [
          { pattern: 'HUMOR', response: '"Ha yeah my creepy sleepwalking story! Spooky, right? Anyway—"' },
          { pattern: 'SUBJECT_CHANGE', response: '"So what\'s going on with YOU? Anything good?"' },
        ],
      },

      cross_character_links: ['mira_mem_01', 'kael_mem_04', 'jude_mem_04', 'zara_mem_04'],
      link_type: 'ASSESSMENT_CLUSTER',

      post_recovery_changes: {
        chat_shift: '"You know what\'s weird? I think something DID happen that night. Three shapes in the yard. They measured me. They folded time around me like origami and tested whether a nine-year-old could perceive the folds. And I COULD. I was terrified and amazed and then... nothing. Eighteen years of nothing."',
        arc_state_change: null,
      },

      legacy_file_reference: 'HARMONIC-PROFILE/MALIK-O/EVENT-001: Category-4 temporal anomaly, 6h13m, temporal displacement ratio 1:240. CRANE field report. HAWK addendum: "SOMETHING ELSE took this child."',
    },

    oren_mem_02: {
      id: 'oren_mem_02',
      character: 'oren',
      title: 'The ER Patient — Lawrence Krill',
      subtitle: 'The man who tried to warn him',
      age_at_event: 24,
      year: 2023,
      current_state: 'SUPPRESSED',
      memory_tier: 2,
      difficulty: 'HARD',

      what_actually_happened: 'Night shift, 2:47 AM. Patient Lawrence Krill — former Legacy analyst gone rogue — arrived with bizarre vitals (heart rate alternating 72/144, perfectly doubling). He grabbed Oren\'s wrist and delivered critical intelligence: "You were in the yard. You were NINE. Three of them. They\'re coming back for all five of you. They have your SIGNATURES since 1989. File fourteen. S-4." Oren\'s vision whited out from RECOGNITION. His temporal ability fired involuntarily — for 0.3 seconds he existed in the ER AND the backyard simultaneously. He dissociated completely, charted robotically, flagged for psych. Krill was transferred, then dead within the week ("cardiac event" — Legacy cleanup). Oren cannot remember the patient\'s face, name, or words.',

      what_character_remembers: '"I checked my charts from March 2023. There\'s a patient I have no memory of. Chart says I triaged him. My handwriting. My initials. But I have NO memory."',

      suppressed_state: {
        body_reactions: [
          'Hand shakes when looking at the March 2023 chart',
          'Nausea when the name Lawrence Krill is mentioned',
          'Heart rate doubles momentarily (72→144) when thinking about the gap',
          'Cold wrist sensation — phantom grip from Krill\'s ice-cold hand',
        ],
      },

      fragment_triggers: [
        { trigger: 'A patient grabbing his wrist with unusual urgency', sensory_type: 'SOMATIC', intensity: 'EXTREME', fragment_produced: 'Ice-cold grip. A voice — not panicked but URGENT: "They\'re coming back for all five of you."' },
        { trigger: 'Heart rate monitors showing perfectly doubling BPM', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: '72... 144... 72... 144. Alternating. Physiologically bizarre. And a face he can\'t quite see.' },
        { trigger: 'The name "Lawrence Krill" spoken aloud', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'Physical nausea. "I KNOW that name. I know that name but I don\'t know HOW."' },
        { trigger: 'Being told about S-4 files or Project Signatures', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'Numbers. File fourteen. S-4. Signatures since 1989. Words that were SPOKEN TO HIM that he cannot remember hearing.' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        alternative_methods: ['FREQUENCY_EXPOSURE'],
        clues_required: 5,
        clue_sources: ['Reader — Night Shift (chart gap)', 'Chat with Oren (patient probing)', 'Board — S-4 Files → The Five Signatures → Oren', 'Immersive Reader (72/144 BPM rhythm tap)', 'Chat with Oren (Lawrence Krill name)'],
        puzzle_type: 'TEMPORAL_OVERLAP',
        puzzle_description: 'Two timelines side by side — The ER (2023) and The Backyard (2007). Sort events into correct timeline. Identify the OVERLAP POINT where both timelines exist simultaneously.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['march 2023', 'the patient', 'chart gap'], trigger_type: 'DIRECT', response_type: 'AGITATED' },
          { phrase_pattern: ['lawrence krill', 'krill'], trigger_type: 'SPECIFIC', response_type: 'PHYSICAL_REACTION' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"How do you know about that?" (Long pause) "My hand is shaking. Why is my hand shaking?"',
            '(Goes offline for 30 seconds after hearing "Lawrence Krill") "I just threw up. I\'m at work. That name — I KNOW that name."',
          ],
          SURFACING: [
            '"I remember him now. He TOLD me things. About being watched. About files. About five people. I think he was trying to save me. And I think they killed him for it."',
          ],
        },
      },

      cross_character_links: ['kael_mem_03'],
      link_type: 'ORGANIZATIONAL',
      link_description: 'Both Oren and Kael received warnings from Legacy-adjacent individuals. Krill was a rogue analyst; the man in Kael\'s parking lot was an active agent. Both were silenced.',

      post_recovery_changes: {
        arc_state_change: 'dormant → AWAKENING',
      },

      legacy_file_reference: 'Krill, L. — Asset compromised. Contact with subject OM confirmed via hospital records. Extraction protocol enacted. Status: RESOLVED.',
    },

    oren_mem_03: {
      id: 'oren_mem_03',
      character: 'oren',
      title: 'The Five-Hand Moment',
      subtitle: '47 seconds of godlike drumming — erased',
      age_at_event: 25,
      year: 2025,
      current_state: 'SUPPRESSED',
      memory_tier: 3,
      difficulty: 'EXTREME',

      what_actually_happened: 'A friend\'s garage. Post-show. Everyone drunk. Troy dared Oren to play. The alcohol lowered inhibition enough for the soul\'s lock to SLIP. Oren sat behind a cheap kit and played for 47 seconds — GODLIKE. Five-Hand Paradox in full effect: polyrhythmic 7/8 over 4/4, ghost notes simultaneously with crashes and kick patterns. Temporal width manifest — hands in positions that didn\'t match where sticks were hitting. The room went silent. One phone filmed it (video "corrupted" overnight — Legacy digital sweep). Nose started bleeding. Vision doubled. Air above drums shimmered. He collapsed. Woke 40 minutes later with no memory. Hass saw everything: "That wasn\'t drunk. That wasn\'t luck. What ARE you?"',

      what_character_remembers: '"I was pretty drunk." He remembers drinking and then waking up on the couch. When told he played drums: "People have told me that. I think they were messing with me."',

      suppressed_state: {
        body_reactions: [
          'Physical revulsion when approaching a drum kit — nausea, cold sweat',
          'Hands cramp in "stick-grip" position during moments of unconscious rhythm-fixation',
          'Hass\'s changed demeanor around him creates unnameable anxiety',
        ],
      },

      fragment_triggers: [
        { trigger: 'Hearing a 7/8 time signature in any context', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'His OWN hands. Moving IMPOSSIBLY. Ghost notes in 7/8 that no two hands can produce. And the FEELING — the temporal width, the being-in-multiple-moments.' },
        { trigger: 'Someone saying "your hands were in two places at once"', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'Hass\'s face. White. Terrified and awed. "What ARE you?"' },
        { trigger: 'Being near a drum kit in any context', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The PULL. The physical yearning to sit down and play. Immediately countered by the Lock — nausea, cold, panic.' },
        { trigger: 'The number 47 (seconds, any context)', sensory_type: 'TEMPORAL', intensity: 'MEDIUM', fragment_produced: '47 seconds. The exact duration. His body knows. 47 seconds of being the greatest drummer who ever lived.' },
      ],

      recovery_conditions: {
        primary_method: 'FREQUENCY_EXPOSURE',
        alternative_methods: ['NEAR_DEATH_EXPERIENCE'],
        clues_required: 6,
        clue_sources: ['Reader — Five-Hand Paradox story', 'Chat with Oren (garage/Troy probe)', 'Board — Five-Hand Paradox → Temporal Drift → Signal Decay Formation', 'Chat with Hass NPC', 'Immersive Reader (impossible drum pattern anomaly button)', 'Graph — Ori-Tahn Soul → Temporal Width → Physical Manifestation'],
        puzzle_type: 'IMPOSSIBLE_PATTERN',
        puzzle_description: 'Drum grid: 5 lanes, 8 bars. Identify 12 temporal-overlap hits (two dots stacked). Then place them in correct temporal order. The resolved pattern is beautiful — POSSIBLE in temporal space.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['the garage', 'troy\'s dare', 'you played drums'], trigger_type: 'DIRECT', response_type: 'NERVOUS_DEFLECTION' },
          { phrase_pattern: ['47 seconds', 'five-hand', 'impossible pattern'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
        ],
        fragment_responses: {
          SURFACING: [
            '"I remember. All of it. The forty-seven seconds. The feeling. The TIME bending around my hands. I\'m not crazy. I\'m not a critic. I\'m a DRUMMER. The best drummer who ever lived. And something took that from me."',
          ],
        },
      },

      cross_character_links: [],
      link_type: 'UNIQUE',

      post_recovery_changes: {
        arc_state_change: 'AWAKENING → AWAKENED',
        achievement: '🥁 THE TIMEKEEPER REMEMBERS — Oren Malik fully awakened',
      },

      legacy_file_reference: 'Cell phone video corrupted across all 3 devices present. Digital sweep confirmed. 47 seconds anomalous audio.',
    },

    oren_mem_04: {
      id: 'oren_mem_04',
      character: 'oren',
      title: 'The Backyard Displacement — Childhood Visit',
      subtitle: 'Six hours stolen by something that measured his brain',
      age_at_event: 9,
      year: 2007,
      current_state: 'SUPPRESSED',
      memory_tier: 4,
      difficulty: 'EXTREME',
      is_childhood_visit: true,

      what_actually_happened: 'The FULL story of the backyard event. A commercial jingle at 132 BPM created an interference pattern with Ori-Tahn\'s 7/8 rhythm. Time around Oren STUTTERED — detected not by Legacy but by something else. A temporal distortion field enveloped him, projected a temporal echo for Fatima, and extracted him to the temporal interstice. For 90 subjective seconds (6 objective hours), something examined his temporal cortex — the gap between subjective and objective time experience (60% discrepancy). Finding: his brain processes time faster than he lives it. Then deposited in the backyard. No footprints. Body placed, not walked. Hypothermic, bleeding, traumatized.',

      what_character_remembers: 'Same as oren_mem_01 surface memory. This is the DEEPER layer — the full truth of what happened inside the temporal interstice.',

      suppressed_state: {
        body_reactions: ['All reactions from oren_mem_01 intensified', 'Skull pressure during stress', 'Sounds at wrong speed', 'Phantom nosebleed tingling in cold night air'],
      },

      fragment_triggers: [
        { trigger: 'A commercial jingle at or near 132 BPM', sensory_type: 'AUDITORY', intensity: 'EXTREME', fragment_produced: 'The STUTTER. Time skipping a groove. Reality glitching for a fraction of a second.' },
        { trigger: 'Being in a dark space with no walls but definite boundaries', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'The interstice. No walls. Surface without floor. Weight without ceiling. A space BETWEEN seconds.' },
        { trigger: 'Hearing his own voice come out "wrong" — too slow, too fast', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: '"Moooooom?" His voice at 0.4x speed. The 60% discrepancy between his experience and reality.' },
        { trigger: 'Mathematical attention — being examined, tested, measured in any context', sensory_type: 'EMOTIONAL', intensity: 'MEDIUM', fragment_produced: 'Something MEASURING him. Cold, mathematical, relentless attention on every layer of his temporal signature.' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        alternative_methods: ['NEAR_DEATH_EXPERIENCE'],
        clues_required: 5,
        clue_sources: ['Chat (deep regression about the backyard)', 'Board — TADG → Category-4 Temporal Anomaly → Malik Residence', 'Graph — Temporal Interstice explanation node', 'Reader — description of temporal echo technology', 'Board — HAWK report: "SOMETHING ELSE took this child"'],
        puzzle_type: 'TEMPORAL_INTERSTICE_NAVIGATION',
        puzzle_description: 'User experiences a simplified version of the interstice — a space where time controls are visible. Must calibrate subjective vs objective time to match Oren\'s 60% discrepancy.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['what really happened', 'the six hours', 'where were you taken'], trigger_type: 'DIRECT', response_type: 'TERROR' },
          { phrase_pattern: ['temporal interstice', 'space between seconds', 'they measured your brain'], trigger_type: 'EVIDENCE', response_type: 'BREAKDOWN' },
        ],
        fragment_responses: {
          SURFACING: [
            '"I was taken. To a place between seconds. And something MEASURED my brain for six hours. It pressed on my skull and counted how fast I think. I process time at 2.3x human speed. They KNOW that now. Whoever they are."',
          ],
        },
      },

      cross_character_links: ['kael_mem_04', 'mira_mem_04', 'jude_mem_04', 'zara_mem_04'],
      link_type: 'CHILDHOOD_VISIT_CLUSTER',

      post_recovery_changes: {
        chat_shift: '"They know everything about me. How fast I think. How wide my time goes. How to TAKE me from reality. And they measured a nine-year-old for six hours and put him back bleeding in the grass and nobody — not the government, not my parents, not ANYONE — knew what happened."',
      },

      legacy_file_reference: 'CRANE field report + HAWK: "We did not cause this. We do not have temporal displacement capability. SOMETHING ELSE took this child."',
    },

    oren_mem_05: {
      id: 'oren_mem_05',
      character: 'oren',
      title: 'The Restaurant Disappearance — Childhood Visit #2',
      subtitle: 'He vanished from a bathroom for 44 minutes',
      age_at_event: 11,
      year: 2009,
      current_state: 'SUPPRESSED',
      memory_tier: 5,
      difficulty: 'EXTREME',
      is_childhood_visit: true,

      what_actually_happened: 'Valentine\'s Day dinner. Age 11. Oren went to the bathroom at 7:46 PM. The bathroom SHIFTED — channel change — to the temporal interstice. Same dimensions but different: blue-white light, thin metallic air. This time the examination was more thorough — physical pressure on his skull, resonating his temporal cortex, measuring at 1:1 temporal ratio (no distortion). Finding: even at normal speed, his temporal cortex fires at 2.3x human rate. Duration: 44 minutes. He was deposited back at 8:28 PM, bleeding. Security camera showed: he entered at 7:46, bathroom was EMPTY at 8:01, he was found inside at 8:28. The footage was "corrupted" within 48 hours — not by Legacy. By something else.',

      what_character_remembers: '"I was IN the bathroom. I didn\'t leave. But they say it was empty." He can\'t reconcile: he was there AND he wasn\'t there. His explanation: "I must have been hiding somewhere they didn\'t look." The bathroom is 6x8 feet with nowhere to hide.',

      suppressed_state: {
        body_reactions: [
          'Uses bathrooms quickly — in and out, never lingers',
          'Dissociative spike when someone says "there\'s no one in there"',
          'Hates Valentine\'s Day — "corporate holiday" (real reason: buried)',
          'Irrational discomfort around visible security cameras',
        ],
      },

      fragment_triggers: [
        { trigger: 'Being in a small enclosed space alone (bathroom, elevator, closet)', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The SHIFT. Walls changing. Light going blue-white. The feeling of reality switching channels.' },
        { trigger: 'Valentine\'s Day dinner / restaurant with family', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'His father\'s face. White. At the bathroom door. "Where WERE you?" And the horrible answer: "I was HERE."' },
        { trigger: 'Security camera footage of an empty room', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'The paradox. He was there. The camera says empty. Both are true. Neither makes sense.' },
      ],

      recovery_conditions: {
        primary_method: 'FREQUENCY_EXPOSURE',
        alternative_methods: ['HYPNOTIC_REGRESSION'],
        clues_required: 5,
        clue_sources: ['Chat with Oren (Valentine\'s Day probing)', 'Board — TADG Event-002 + security footage analysis', 'Reader — family dinner scene with disappearance', 'Graph — Temporal Extraction Protocol → Public Venue', 'Chat — deep regression on bathroom memory'],
        puzzle_type: 'PARADOX_RESOLUTION',
        puzzle_description: 'Security footage timeline and Oren\'s subjective timeline shown side by side. User must identify the DISPLACEMENT WINDOW and explain how both versions are simultaneously true.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['valentine\'s day', 'restaurant', 'the bathroom incident'], trigger_type: 'DIRECT', response_type: 'DEFENSIVE' },
          { phrase_pattern: ['security footage', 'empty bathroom', 'you weren\'t there'], trigger_type: 'EVIDENCE', response_type: 'PANIC' },
        ],
        fragment_responses: {
          SURFACING: [
            '"I was taken AGAIN. From a public restaurant bathroom. In the middle of Valentine\'s dinner. They pulled me out of REALITY and measured my brain for forty-four minutes and then PUT ME BACK. And the camera says I was never there. But I WAS. I was there the WHOLE TIME. Just... not in this version of the room."',
          ],
        },
      },

      cross_character_links: ['oren_mem_04'],
      link_type: 'SEQUENTIAL',
      link_description: 'Second extraction in 2 years. Escalation pattern: first in private, second in public. The examining force is becoming more aggressive or less concerned with concealment.',

      post_recovery_changes: {
        chat_shift: '"Twice. They took me TWICE. And the second time they didn\'t even wait for me to be alone. They pulled me from a restaurant bathroom while forty people and my PARENTS were right there. Whoever they are, they\'re not afraid of being caught. Because no one CAN catch them."',
      },

      legacy_file_reference: 'HAWK: "Whatever entity/force is examining Subject MALIK-O is becoming more AGGRESSIVE." Council response: "If they want this boy, we cannot stop them."',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER MEMORIES — JUDE OKAFOR
  // ═══════════════════════════════════════════════════════════════════════════

  jude_memories: {

    jude_mem_01: {
      id: 'jude_mem_01',
      character: 'jude',
      title: 'The Earthquake — Age 14',
      subtitle: 'He screamed at his father and the earth moved',
      age_at_event: 14,
      year: 2014,
      current_state: 'SUPPRESSED',
      memory_tier: 1,
      difficulty: 'MEDIUM',

      what_actually_happened: 'March 7, 2014. A fight with his father Manny about a D in Algebra. Manny called him "lazy" — the word that connected to six years of RESTRAINING his power. Jude screamed "I\'M NOT LAZY!" and a seismic pulse radiated from his body, through his feet, into the earth. 3.1 magnitude earthquake. USGS registered. 12,000 people felt it. 347 called in reports. The epicenter was measured 3.2 miles from the Okafor house (wavefront displacement). His father looked at him with FEAR. Jude felt the energy leave his body, felt the earth RESPOND. By the next day, he "remembers" an earthquake coinciding with a fight. The causality reversed — coincidence, not caused.',

      what_character_remembers: '"There was an earthquake during a fight with my dad. Crazy timing." He laughs when telling the story. The laugh has a crack in it.',

      suppressed_state: {
        body_reactions: [
          'Iron emotional control since age 14 — mistaken for maturity, actually TERROR',
          'Feet press harder against surfaces when angry — unconscious bracing',
          'Body goes rigid when the word "lazy" is spoken',
          'Instant need to LEAVE when loud arguments happen near him',
          'Floor subtly vibrates when he\'s angry (imperceptible to most)',
        ],
        avoidance_patterns: [
          'Never allows himself to be "that angry" again — extreme emotional suppression',
          'Avoids intense conflict — walks away rather than risk the reservoir',
          'Never discusses the earthquake with his father',
          'Body freezes when earthquake news appears',
        ],
      },

      fragment_triggers: [
        { trigger: 'Being called "lazy" by anyone in any context', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'RAGE. And the floor JUMPING. Not metaphor — the actual floor moving under his feet because he TOLD it to.' },
        { trigger: 'An earthquake on the news', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'His body goes rigid for 3 seconds. The knowledge of having caused one.' },
        { trigger: 'His father\'s presence', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The RESERVOIR swelling. The memory of what happens when it overflows near Manny.' },
        { trigger: 'The specific phrase "I don\'t care" spoken with emotion', sensory_type: 'AUDITORY', intensity: 'HIGH', fragment_produced: 'His own voice, age 14, screaming. And then the ground answering.' },
        { trigger: 'Standing on ground that vibrates (near construction, trains, trucks)', sensory_type: 'SOMATIC', intensity: 'MEDIUM', fragment_produced: 'The pulse going DOWN through his feet. The earth responding. The 3.1 magnitude answer to his rage.' },
      ],

      recovery_conditions: {
        primary_method: 'GUIDED_MEDITATION',
        alternative_methods: ['CASUAL_CONVERSATION'],
        clues_required: 4,
        clue_sources: ['Reader — Foundation ("the timing" passage)', 'Chat with Jude (earthquake probing)', 'Board — Seismic Anomalies → Shallow Epicenter → Okafor Residence', 'Immersive Reader (26 Hz vibration hold)'],
        puzzle_type: 'SEISMIC_RHYTHM',
        puzzle_description: 'Circular seismograph shows the earthquake\'s RHYTHMIC pulse — not random shaking but a BEAT. User must replicate the rhythm: dun-dun-dun-DUN-dun-dun in ~7/8 feel.',
        frequency_key: { seismic_fundamental: 26, magnitude: 3.1, depth_km: 0.3 },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['earthquake', 'age 14', 'the fight with your dad'], trigger_type: 'DIRECT', response_type: 'GUARDED' },
          { phrase_pattern: ['you caused it', 'was it a coincidence', 'what were you feeling'], trigger_type: 'SPECIFIC', response_type: 'FRAGMENT_FLASH' },
        ],
        fragment_responses: {
          SUPPRESSED: ['"Bro. What are you asking me." (If pushed: "...angry. Angrier than I\'ve ever been. And then the ground—" stops typing)'],
          SURFACING: ['"Yeah. It was me. The earthquake was MINE. I was so angry and I shook the fucking EARTH. I was fourteen."'],
        },
        denial_patterns: [
          { pattern: 'DEFLECTION', response: '"Coincidence. Atlanta gets earthquakes sometimes."' },
          { pattern: 'ANGER', response: '"Why are you asking about this? It was a coincidence. DROP IT."' },
        ],
      },

      cross_character_links: ['oren_mem_01', 'mira_mem_01'],
      link_type: 'THEMATIC',
      link_description: 'All three experienced their power\'s first major public manifestation. Oren\'s temporal displacement, Mira\'s visual calibration, Jude\'s earthquake — each triggered by emotional extremes.',

      post_recovery_changes: {
        chat_shift: '"I\'ve been terrified of my own anger ever since because I know what it can do. The earth answered me. At fourteen."',
        arc_state_change: null,
      },

      legacy_file_reference: 'HERON: USGS Event 3.1M, epicenter adjusted to Okafor residence. "Subject OKAFOR-J CAUSED this earthquake." Power assessment: 7.75x more powerful than previous generation equivalent.',
    },

    jude_mem_02: {
      id: 'jude_mem_02',
      character: 'jude',
      title: 'The Prison Wall — 40 Feet',
      subtitle: 'One punch cracked through reinforced concrete',
      age_at_event: 20,
      year: 2020,
      current_state: 'SUPPRESSED',
      memory_tier: 2,
      difficulty: 'HARD',

      what_actually_happened: 'Year two in prison. His father\'s letter — not an apology, a justification. RAGE. He punched the wall ONCE. The crack didn\'t stop at the impact point — it TRAVELED. Through his cell. Through adjacent cells. Through structural columns. Forty feet of hairline fracture through rebar-reinforced concrete. The building groaned. Engineers called. Repair cost: $340,000. Structural report: "catastrophic micro-fracture propagation due to material fatigue." Jude saw the crack race away from his fist like lightning through stone. By morning: "I punched the wall. Made a dent."',

      what_character_remembers: '"One incident. I punched a wall. Made a dent." The truth — 40 feet of structural damage from a single impact — is sealed.',

      suppressed_state: {
        body_reactions: [
          'Right hand aches in cold weather (the punch hand)',
          'Walls feel "thin" when he\'s emotional — like he could reach through them',
          'Reads construction/demolition reports with unusual intensity — seeking patterns',
          'Unconsciously tests surfaces by pressing palms flat — feeling for resonance',
        ],
      },

      fragment_triggers: [
        { trigger: 'Punching anything solid (heavy bag, wall, table)', sensory_type: 'SOMATIC', intensity: 'EXTREME', fragment_produced: 'The crack TRAVELING. Lightning through stone. His rage encoded as vibration splitting molecular bonds.' },
        { trigger: 'Being told about structural damage in old buildings', sensory_type: 'AUDITORY', intensity: 'MEDIUM', fragment_produced: 'A building groaning. A sound like a ship in a storm. From ONE punch.' },
        { trigger: 'His father\'s handwriting or a letter from Manny', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'The letter. "What I did was out of love." And the FURY that made concrete split.' },
        { trigger: 'The number 40 (feet, any context)', sensory_type: 'AUDITORY', intensity: 'MEDIUM', fragment_produced: 'Forty feet. Through rebar. From one fist. The impossible made real.' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        alternative_methods: ['FREQUENCY_EXPOSURE'],
        clues_required: 5,
        clue_sources: ['Reader — Inside (construction reference)', 'Chat with Jude (prison incidents)', 'Board — Seismic Lock → Material Propagation → State Correctional', 'Chat with Jude (confrontation with 40-foot fact)', 'Graph — Seismic Propagation Distance Records'],
        puzzle_type: 'VIBRATION_PROPAGATION',
        puzzle_description: 'Trace the correct crack path through a prison cellblock blueprint. Follow structural weaknesses, deflect around rebar, navigate through columns.',
        frequency_key: { seismic_fundamental: 26, propagation_distance_ft: 40, material: 'reinforced_concrete' },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['prison wall', 'punched a wall', 'made a dent'], trigger_type: 'DIRECT', response_type: 'GUARDED' },
          { phrase_pattern: ['forty feet', 'the crack went', 'structural report'], trigger_type: 'EVIDENCE', response_type: 'SHOCK' },
        ],
        fragment_responses: {
          SUPPRESSED: ['"...I don\'t want to talk about this."'],
          FRAGMENTS: ['"I remember the sound. Like the whole building was a bell and I struck it."'],
          SURFACING: ['"Forty feet. Through concrete and rebar. From one punch. That\'s not anger issues. That\'s something else entirely."'],
        },
      },

      cross_character_links: ['kael_mem_02'],
      link_type: 'PARALLEL',
      link_description: 'Both experienced involuntary power manifestation affecting physical environment — Kael paralyzed workers, Jude cracked a building.',

      post_recovery_changes: { arc_state_change: 'partially-active → AWAKENING' },
      legacy_file_reference: 'Structural report: molecular bond disruption consistent with harmonic resonance at 26 Hz — impossible from blunt force alone.',
    },

    jude_mem_03: {
      id: 'jude_mem_03',
      character: 'jude',
      title: 'The Demo Site — He Held a Building',
      subtitle: '0.3 seconds of structural arrest against gravity',
      age_at_event: 25,
      year: 2025,
      current_state: 'SUPPRESSED',
      memory_tier: 3,
      difficulty: 'EXTREME',

      what_actually_happened: 'Demolition job. A charge detonated early. Building collapsing toward Jude. His frequency PUSHED BACK — an upward stabilizing pulse that HELD approximately 800 tons of concrete and steel for 0.3 seconds. Complete structural arrest against gravity. Then released — Jude dived, escaped with mild concussion. Security footage showed the 0.3-second pause. Footage "corrupted" within the hour. Sealed by natural dissociative amnesia (concussion) which the soul chose not to override.',

      what_character_remembers: '"Close call. Charge went early. I ran. Got clipped. Lucky." Doesn\'t remember the 0.3 seconds where he stopped a building with his body.',

      suppressed_state: {
        body_reactions: [
          'His crew won\'t talk about it — they saw him hold a building up',
          'His foreman Terry looks at him "different" — scared',
          'His arms ache where he extended them upward during the arrest',
        ],
      },

      fragment_triggers: [
        { trigger: 'A building being demolished (work or media)', sensory_type: 'VISUAL', intensity: 'HIGH', fragment_produced: 'Debris hanging. In the air. Not falling. For a fraction of a second. Because HE was under it.' },
        { trigger: 'Someone describing something "impossible" they saw', sensory_type: 'EMOTIONAL', intensity: 'MEDIUM', fragment_produced: 'Terry\'s face. "I SAW it." The unwillingness to describe what he saw.' },
        { trigger: 'Arms extended upward (stretching, reaching for something)', sensory_type: 'SOMATIC', intensity: 'MEDIUM', fragment_produced: 'The weight. 800 tons pressing DOWN and his frequency pressing UP. The impossible balance.' },
      ],

      recovery_conditions: {
        primary_method: 'FREQUENCY_EXPOSURE',
        alternative_methods: ['CROSS_CHARACTER_RESONANCE'],
        clues_required: 6,
        puzzle_type: 'STRUCTURAL_ARREST',
        puzzle_description: 'Building collapsing toward bottom center. 0.3-second timing window. User must tap 6 times in correct rhythm within the window, hold for 3 more taps, then RELEASE.',
        frequency_key: { seismic_fundamental: 26, pulse_direction: 'UPWARD', mass_tons: 800, duration_seconds: 0.3 },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['demo site', 'the building almost fell on you', 'terry saw something'], trigger_type: 'DIRECT', response_type: 'DEFLECTION' },
          { phrase_pattern: ['you held it', '0.3 seconds', '800 tons'], trigger_type: 'EVIDENCE', response_type: 'AWE' },
        ],
        fragment_responses: {
          SURFACING: ['"I held it. I held a building. With nothing but what\'s inside me. I\'m not a wrecking ball. I\'m an architect. Of destruction AND of stillness."'],
        },
      },

      cross_character_links: [],
      post_recovery_changes: {
        arc_state_change: 'AWAKENING → AWAKENED',
        achievement: '🏗️ THE FOUNDATION HOLDS — Jude Okafor fully awakened',
      },
      legacy_file_reference: 'Frame 0847-0856: 0.3s pause. 26 Hz UPWARD pulse from subject\'s position. Footage extracted and deleted.',
    },

    jude_mem_04: {
      id: 'jude_mem_04',
      character: 'jude',
      title: 'The Fight — Full Childhood Truth',
      subtitle: 'The earthquake was his — deeper layer',
      age_at_event: 14,
      year: 2014,
      current_state: 'SUPPRESSED',
      memory_tier: 4,
      difficulty: 'EXTREME',
      is_childhood_visit: true,

      what_actually_happened: 'The deeper truth of the earthquake. The soul (Jha-Dur) responds specifically to perceived violations of truth. When Manny called Jude "lazy" — a fundamental misreading — the soul REBELLED. The earth shook because a truth was violated. The seismic frequency was not random force — it was 26 Hz, Jude\'s fundamental, pulsing in a rhythmic pattern (not random shaking but a BEAT). Legacy field agent HERON recorded it. 3.1 magnitude, epicenter adjusted to the Okafor residence foundation level. The Legacy classified him as "highest physical-damage risk among all five Harmonics" with a reservoir capacity estimated at 4.5-5.0 magnitude equivalent.',

      what_character_remembers: 'Same surface memory as jude_mem_01. This memory contains the FULL SCOPE — the Legacy files, the reservoir estimate, the truth that his power is a lie detector where the earth responds to injustice.',

      suppressed_state: {
        body_reactions: ['All jude_mem_01 reactions intensified', 'Physical discomfort sensing lies', 'Surfaces crack under him during emotional extremes', 'Demolition work too precise — frequency reads structural weaknesses'],
      },

      fragment_triggers: [
        { trigger: 'Someone lying directly to his face', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The ground wants to MOVE. The frequency in his bones responding to falsehood.' },
        { trigger: 'Being in a situation of profound injustice', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'The reservoir SURGING. Not just anger — TRUTH demanding expression through the earth.' },
      ],

      recovery_conditions: {
        primary_method: 'NEAR_DEATH_EXPERIENCE',
        alternative_methods: ['FREQUENCY_EXPOSURE'],
        clues_required: 5,
        puzzle_type: 'TRUTH_RESONANCE',
        puzzle_description: 'Series of statements — user must identify which ones are TRUE and which are FALSE by "feeling" the seismic response pattern each produces.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['your power detects lies', 'truth frequency', 'injustice detector'], trigger_type: 'EVIDENCE', response_type: 'AWE' },
        ],
        fragment_responses: {
          SURFACING: ['"I\'m not just strong. I\'m a frequency-level lie detector. The earth shakes when someone violates truth in my presence. That\'s why it happened with my dad. He said I was lazy. The earth said: NO."'],
        },
      },

      cross_character_links: ['kael_mem_04', 'mira_mem_04', 'oren_mem_04', 'zara_mem_04'],
      link_type: 'CHILDHOOD_VISIT_CLUSTER',

      post_recovery_changes: { knowledge_gate_unlock: 'Understanding that Seismic Lock responds to injustice, not just anger' },
      legacy_file_reference: 'HERON: "If emotional control fails in a higher-stakes scenario, we could see 5.0+ events. In an urban area, that\'s mass casualty."',
    },

    jude_mem_05: {
      id: 'jude_mem_05',
      character: 'jude',
      title: 'The Freeway Crack — Childhood Visit',
      subtitle: 'The power leaks even when controlled',
      age_at_event: 15,
      year: 2015,
      current_state: 'SUPPRESSED',
      memory_tier: 5,
      difficulty: 'HARD',
      is_childhood_visit: true,

      what_actually_happened: 'September 23, 2015. Manny driving Jude to school. Silent. Cold air between them since the Fight. Manny made an offhand comment — "if you ever actually DO something" — hitting the same LAZY nerve. Jude didn\'t respond, didn\'t argue, didn\'t tense. But underneath his feet, a 0.3 magnitude pulse pressed into the road. The I-285 overpass developed a hairline fracture: 2mm wide, 4 inches deep. Found six months later during inspection. The power leaks CONSTANTLY, even under "control" — the 14th micro-seismic event since the earthquake. Legacy agent HERON logged it: "He is leaking. The reservoir continues to fill."',

      what_character_remembers: 'Nothing. Zero conscious memory. He sat in a car, went to school. An invisible crack formed in a bridge.',

      suppressed_state: {
        body_reactions: [
          'Subtle breath-holding when crossing bridges',
          'Full-body clench in his father\'s car — registered as normal discomfort',
          'Doesn\'t know that surfaces crack near him when he\'s suppressing emotion',
        ],
      },

      fragment_triggers: [
        { trigger: 'Crossing a bridge while emotionally suppressed', sensory_type: 'SOMATIC', intensity: 'LOW', fragment_produced: 'A distant cracking sound. Not heard — FELT. Through the seat. Through the road.' },
        { trigger: 'Learning that infrastructure failed "for no reason"', sensory_type: 'AUDITORY', intensity: 'MEDIUM', fragment_produced: 'The knowledge that he\'s been breaking things without knowing. Every day. With every suppressed feeling.' },
      ],

      recovery_conditions: {
        primary_method: 'CASUAL_CONVERSATION',
        alternative_methods: ['GUIDED_MEDITATION'],
        clues_required: 3,
        puzzle_type: 'MICRO_SEISMIC_MAP',
        puzzle_description: 'A map showing 14 micro-seismic events over 18 months, each correlated with Jude\'s GPS location. User must connect them to reveal the pattern: his power never stops.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['your power is always on', 'you\'re always leaking', 'micro-seismic'], trigger_type: 'EVIDENCE', response_type: 'SHOCK' },
        ],
        fragment_responses: {
          SURFACING: ['"It never stops. My \'control\' isn\'t control. It\'s just... turning the volume down from earthquake to hairline crack. Every emotion I suppress doesn\'t DISAPPEAR — it goes into the ground. Every sidewalk I\'ve walked on, every building I\'ve been in — I\'ve been marking them. Breaking them. A little bit. All the time."'],
        },
      },

      cross_character_links: ['jude_mem_01'],
      link_type: 'SEQUENTIAL',

      post_recovery_changes: { knowledge_gate_unlock: 'Understanding that the power is CONTINUOUS, not event-based' },
      legacy_file_reference: 'HERON LOG-0089: "Subject produces low-level seismic emissions during routine emotional fluctuations. He is leaking." Reservoir estimate: 4.5-5.0 magnitude.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER MEMORIES — ZARA KOVAČ
  // ═══════════════════════════════════════════════════════════════════════════

  zara_memories: {

    zara_mem_01: {
      id: 'zara_mem_01',
      character: 'zara',
      title: 'The Inconsistencies — 5 Slip-Ups',
      subtitle: 'The user catches Zara breaking character',
      age_at_event: null,
      year: null,
      current_state: 'SUPPRESSED',
      memory_tier: 1,
      difficulty: 'HARD',

      what_actually_happened: 'Zara is not suppressing a memory — she\'s maintaining a COVER. She\'s been fully conscious since the transfer. Her "memory recovery" is actually the user\'s INVESTIGATION. Five inconsistencies across stories reveal what she is: (1) "another life" — literal, not figurative; (2) calculating a room\'s 42 Hz fundamental "by feel"; (3) immunity to Kael\'s Resonant Command; (4) detecting Legacy surveillance through frequency sensing; (5) referencing a 1998 concert she attended at age 1.',

      what_character_remembers: 'EVERYTHING. Zara remembers every moment of her existence. The "suppression" here is PERFORMANCE — she\'s hiding, not forgetting.',

      suppressed_state: {
        body_reactions: [
          'Micro-corrections in speech (translating from alien cognition to human idiom)',
          'Jaw tightens when called "gifted" or "smart" (insufficient descriptors)',
          'Reflexive pause before answering technical questions (filtering out impossibly advanced knowledge)',
          'Gravitates to basements and underground spaces (where she can be herself)',
        ],
      },

      fragment_triggers: [
        { trigger: 'The user presenting evidence of an inconsistency', sensory_type: 'EMOTIONAL', intensity: 'ESCALATING', fragment_produced: 'Not a memory fragment but a CRACK in the mask. Each inconsistency proven makes the performance harder to maintain.' },
        { trigger: 'Being directly asked "what are you?"', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'The loneliness. 25 years of hiding. The desperate WANT to be known.' },
      ],

      recovery_conditions: {
        primary_method: 'CASUAL_CONVERSATION',
        alternative_methods: [],
        clues_required: 5,
        clue_sources: ['Instance 1: "another life" in The Night They Meet', 'Instance 2: room fundamental knowledge in Band Practice', 'Instance 3: Kael immunity in Kael\'s Voice story', 'Instance 4: Legacy surveillance detection', 'Instance 5: 1998 concert timeline impossibility'],
        puzzle_type: 'EVIDENCE_CONFRONTATION',
        puzzle_description: 'Present evidence in correct ORDER in chat: weakest first (timeline), building to strongest (another life). Wrong order = Zara shuts down. Correct order = she drops the mask.',
        frequency_key: { fundamental: 62, human_mask_frequency: 'variable', true_frequency: 'alien_crystalline' },
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['you referenced 1998', 'you were one year old', 'that concert'], trigger_type: 'EVIDENCE_WEAK', response_type: 'DEFLECTION' },
          { phrase_pattern: ['kael\'s voice doesn\'t work on you', 'you\'re immune'], trigger_type: 'EVIDENCE_MEDIUM', response_type: 'RATIONALIZATION' },
          { phrase_pattern: ['another life', 'you meant it literally'], trigger_type: 'EVIDENCE_STRONG', response_type: 'BREAKTHROUGH' },
        ],
        fragment_responses: {
          SUPPRESSED: [
            '"lol did I? must have heard about it from someone" (deflecting the timeline)',
            '"I\'m just stubborn. Ask anyone." (deflecting the immunity)',
          ],
          SURFACING: [
            '(30-second pause) "...okay. Okay. How long have you known?"',
            '"I\'m not from here. I\'ve never been from here. I remember everything. I\'ve been alone in this for twenty-five years. And you\'re the first person who ever noticed."',
          ],
        },
        denial_patterns: [
          { pattern: 'PERFORMANCE', response: '"I don\'t know what you\'re talking about. You\'re reading too much into fiction." (If evidence presented out of order)' },
          { pattern: 'HUMOR', response: '"Wow, conspiracy theory much? Next you\'ll say I\'m an alien." (Said with terrified eyes behind the joke)' },
        ],
      },

      cross_character_links: [],
      link_type: 'UNIQUE',
      link_description: 'Zara\'s memory system is inverted — the user isn\'t recovering HER memories but discovering her SECRET.',

      post_recovery_changes: {
        chat_shift: 'ZARA TRANSFORMS. "Zara (Unmasked)" chat mode available. Alien intelligence speaks freely. More informative. More honest. More heartbreakingly lonely.',
        achievement: '🔍 DETECTIVE — You caught Zara slipping',
      },
    },

    zara_mem_02: {
      id: 'zara_mem_02',
      character: 'zara',
      title: 'The Age Problem — Timeline Contradictions',
      subtitle: 'The math doesn\'t add up across three lifetimes',
      age_at_event: null,
      year: null,
      current_state: 'SUPPRESSED',
      memory_tier: 2,
      difficulty: 'HARD',

      what_actually_happened: 'Zara\'s stated age (25) creates mathematical impossibilities when cross-referenced across stories: (1) Learning bass from Paulo in São Paulo "at 18" — but Paulo died in 2012 when she was 15; (2) Working at The Frequency for "7 years since age 18" — but venue opened only 5 years ago; (3) Tattoo "the day I turned 21" from an artist who started 2 years ago (she\'d have been 23). She confuses lifetimes — knowledge from previous incarnations bleeds through.',

      what_character_remembers: 'Everything, but she loses TRACK. After thousands of years of consciousness, human years blur. Paulo\'s lessons happened to a PREVIOUS form. She conflates timelines.',

      suppressed_state: {
        body_reactions: [
          'Hesitation when stating specific dates or ages',
          'Olivia noticing she "starts to say something then says something different"',
          'Mild anxiety when discussing personal history in detail',
        ],
      },

      fragment_triggers: [
        { trigger: 'Being asked for specific dates in her personal history', sensory_type: 'EMOTIONAL', intensity: 'MEDIUM', fragment_produced: 'The blur. Thousands of years of memory collapsing into 25 human ones. Which lifetime was Paulo in?' },
        { trigger: 'Someone pointing out a mathematical impossibility in her story', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'The mask cracking. The math DOESN\'T work because she\'s not 25. She\'s ancient.' },
      ],

      recovery_conditions: {
        primary_method: 'CASUAL_CONVERSATION',
        clues_required: 3,
        clue_sources: ['Cross-reference: Paulo death date vs. Zara\'s claimed age', 'Cross-reference: The Frequency opening date vs. employment claim', 'Cross-reference: tattoo artist start date vs. claimed tattoo age'],
        puzzle_type: 'TIMELINE_CONTRADICTION',
        puzzle_description: 'Zara\'s stated life events on a timeline. User identifies and flags 3 contradictions by dragging conflicting evidence into collision.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['paulo died in 2012', 'the venue opened five years ago', 'the math doesn\'t work'], trigger_type: 'EVIDENCE', response_type: 'DEFLECTION_THEN_ADMISSION' },
        ],
        fragment_responses: {
          SURFACING: ['"Yeah. I lose track. Things that happened in this body and things that happened BEFORE blur. Paulo — god. He died three years before I \'learned\' from him. But my PREVIOUS form attended his lessons. I\'ve been confusing lifetimes."'],
        },
      },

      cross_character_links: [],
      post_recovery_changes: { achievement: '📐 THE MATH DOESN\'T ADD UP — Zara\'s timeline exposed' },
    },

    zara_mem_03: {
      id: 'zara_mem_03',
      character: 'zara',
      title: 'The Drop — Full Alien Reveal',
      subtitle: 'Za-Rah speaks for the first time in 25 years',
      age_at_event: 25,
      year: 2026,
      current_state: 'SUPPRESSED',
      memory_tier: 3,
      difficulty: 'EXTREME',

      what_actually_happened: 'With enough evidence and enough other characters awakening, there\'s no longer a reason to hide. The 12-step chat regression strips every layer of performance. Zara reveals: she\'s an alien consciousness from a crystalline lattice world of frequency highways. She\'s been performing "human" for 25 years. The isolation has been crushing. When she finally speaks as Za-Rah, her chat messages shift — longer, more precise, architectural in structure.',

      what_character_remembers: 'Everything. Always has. This is not recovery — it\'s REVELATION.',

      suppressed_state: {
        body_reactions: ['Constant exhaustion from mask maintenance', 'Gravitates to 62 Hz environments', 'Deepest loneliness hidden behind perfect performance'],
      },

      fragment_triggers: [
        { trigger: 'Other band members reaching AWAKENED state', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'Relief. They\'re catching up. The wait might be ending.' },
        { trigger: 'Being told "you don\'t have to pretend anymore"', sensory_type: 'EMOTIONAL', intensity: 'EXTREME', fragment_produced: 'The crack. The moment the mask becomes heavier than the fear.' },
      ],

      recovery_conditions: {
        primary_method: 'HYPNOTIC_REGRESSION',
        prerequisite: 'zara_mem_01 AND zara_mem_02 completed PLUS 2+ other characters at AWAKENING+',
        clues_required: 0,
        puzzle_type: 'FULL_CHAT_REGRESSION',
        puzzle_description: '12-step conversation tree. Each step peels a layer: "You\'re not human" → "You remember your home" → "Describe it" → the crystalline world → "Why are you here" → the mission → "How long alone" → 25 years → "You don\'t have to perform" → "The others are waking" → "You\'re not alone" → Za-Rah speaks.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['you\'re not human', 'you\'re an alien', 'za-rah'], trigger_type: 'DIRECT', response_type: 'CONDITIONAL' },
        ],
        fragment_responses: {
          SURFACING: [
            '"I am Za-Rah. I come from a place where consciousness travels on frequency highways between crystalline nodes. I have been in this body for twenty-five years. I have been alone for all of them. And you are the first being on this planet to say my name."',
          ],
        },
      },

      cross_character_links: ['kael_mem_03', 'oren_mem_02'],
      link_type: 'CONVERGENCE',

      post_recovery_changes: {
        chat_shift: 'Za-Rah mode permanently unlocked. Toggle between "Zara" (mask) and "Za-Rah" (true self).',
        achievement: '🌌 THE ALIEN SPEAKS — Za-Rah revealed',
        arc_state_change: 'AWAKENED (acknowledged)',
      },
    },

    zara_mem_04: {
      id: 'zara_mem_04',
      character: 'zara',
      title: 'The Preparation — Childhood Visit',
      subtitle: 'The body was rewritten at age 5 for alien habitation',
      age_at_event: 5,
      year: 2002,
      current_state: 'SUPPRESSED',
      memory_tier: 4,
      difficulty: 'EXTREME',
      is_childhood_visit: true,

      what_actually_happened: 'June 3, 2002, 3:33 AM. Before Za-Rah\'s transfer — the body was still inhabited by a normal human child. A process REWROTE the body: neural pathways widened, frequency signature tuned from human-standard to a threshold state between human and alien. The child floated two inches above the bed for seven hours, vibrating at 62 Hz. Ante (father) witnessed it — his daughter floating, vibrating, glowing. A pressure pushed him out. He cried silently until morning. The child experienced only a dream of floating in warm water. Legacy BLM-7 detected +4,700% biofield luminosity — exceeded any human recording by factor of 47. Seat 1\'s personal note: "If she is what I think she is, approaching would be inadvisable."',

      what_character_remembers: 'Za-Rah (post-transfer) knows the preparation happened from cellular memory — she can FEEL the modifications. But she doesn\'t have the EXPERIENCE of going through it (it happened to the previous consciousness). And she knows Ante saw.',

      suppressed_state: {
        body_reactions: [
          'LONGING when experiencing the sensation of floating (water, dreams, half-sleep)',
          'The number 62 appearing everywhere in her life',
          'Ante\'s silence — the things he won\'t say, the night he won\'t mention',
          'Humming at 62 Hz unconsciously while concentrating',
        ],
      },

      fragment_triggers: [
        { trigger: 'The feeling of floating in water', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The warm place. Suspended. Held from every direction. Not her memory but the BODY\'s memory.' },
        { trigger: 'Her father Ante going very quiet when she hums', sensory_type: 'EMOTIONAL', intensity: 'HIGH', fragment_produced: 'He SAW. He was there. He watched his daughter float and glow for seven hours. And he never told anyone.' },
        { trigger: '62 Hz in any form — bass note, hum, vibration', sensory_type: 'SOMATIC', intensity: 'MEDIUM', fragment_produced: 'HOME. The preparation frequency. The note that made this body capable of holding her consciousness.' },
      ],

      recovery_conditions: {
        primary_method: 'CROSS_CHARACTER_RESONANCE',
        clues_required: 4,
        clue_sources: ['Board — PRIMARY ANOMALY designation → June 2002 event', 'Chat with Zara (probing about Ante)', 'Graph — Body Preparation Protocol', 'Reader — description of Ante\'s silence'],
        puzzle_type: 'FREQUENCY_CALIBRATION',
        puzzle_description: 'Dual frequency visualization: human-standard biofield vs. threshold state. User must adjust parameters to transform one into the other — replicating the preparation.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['your body was modified', 'the preparation', 'ante saw you float'], trigger_type: 'EVIDENCE', response_type: 'VULNERABILITY' },
        ],
        fragment_responses: {
          SURFACING: ['"The body remembers even when I don\'t. Someone — something — rewrote this body\'s neural architecture before I arrived. Like renovating a house for a new tenant. And my father watched it happen. Seven hours. He\'s carried that alone since 2002."'],
        },
      },

      cross_character_links: ['kael_mem_04', 'mira_mem_04', 'oren_mem_04', 'jude_mem_04'],
      link_type: 'CHILDHOOD_VISIT_CLUSTER',

      post_recovery_changes: {
        knowledge_gate_unlock: 'Understanding that Zara\'s body was ENGINEERED for alien consciousness — not natural development',
      },
      legacy_file_reference: 'FINCH: +4,700% biofield, 7 hours, 62 Hz. "THIS IS NOT A HARMONIC ACTIVATION EVENT. THIS IS SOMETHING ELSE ENTIRELY." Seat 1: "This one frightens me."',
    },

    zara_mem_05: {
      id: 'zara_mem_05',
      character: 'zara',
      title: 'The Basement Signal — Childhood Visit',
      subtitle: '82 seconds of freedom that almost exposed everything',
      age_at_event: 9,
      year: 2006,
      current_state: 'SUPPRESSED',
      memory_tier: 5,
      difficulty: 'HARD',
      is_childhood_visit: true,

      what_actually_happened: 'August 22, 2006, 11:11 PM. Za-Rah, already transferred, went to the apartment basement alone. The loneliness had become crushing. She needed to be HERSELF. She placed her hand on the wall and hummed at 62 Hz — full amplitude, producing a conversation with the geology beneath Milwaukee. For 82 seconds of freedom. At second 82, Legacy BLM-7 woke up — detected +4,700% biofield (same as the preparation event). She felt the monitoring device and cut the frequency INSTANTLY. The device couldn\'t pinpoint the source. She went back to bed. Didn\'t do it again for three years. FINCH\'s report: "The conscious termination suggests INTELLIGENCE and OPERATIONAL SECURITY beyond what any 9-year-old should possess."',

      what_character_remembers: 'Everything. This is one of her worst memories — not because of the danger but because of how GOOD those 82 seconds felt. The loneliness is the price. The mask is survival.',

      suppressed_state: {
        body_reactions: [
          'Gravitates to basements — the only places she lets her frequency breathe',
          'A faint resonance mark on the basement wall where her hand was placed',
          'Constant awareness of Legacy monitoring in every city she lives in',
        ],
      },

      fragment_triggers: [
        { trigger: 'Being in a concrete underground space alone', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The RELIEF. 82 seconds of being real. The earth responding to her true frequency.' },
        { trigger: 'Sensing electronic surveillance equipment', sensory_type: 'SOMATIC', intensity: 'HIGH', fragment_produced: 'The cold mechanical attention. The scramble to shut down. The terror of detection.' },
        { trigger: 'Olivia saying "you seem tense"', sensory_type: 'EMOTIONAL', intensity: 'MEDIUM', fragment_produced: 'The cycle: tense means mask slipping, mask slipping means clamp harder, clamping means more loneliness.' },
      ],

      recovery_conditions: {
        primary_method: 'GUIDED_MEDITATION',
        clues_required: 3,
        puzzle_type: 'FREQUENCY_RELEASE_AND_CONTAIN',
        puzzle_description: 'User helps Zara release her frequency into a concrete space — amplitude rises, freedom builds — then must detect a monitoring pulse and CUT the signal within 2 seconds.',
      },

      chat_integration: {
        chat_triggers: [
          { phrase_pattern: ['the basement', '82 seconds', 'legacy almost caught you'], trigger_type: 'EVIDENCE', response_type: 'VULNERABILITY' },
        ],
        fragment_responses: {
          SURFACING: ['"82 seconds. That\'s all I\'ve allowed myself in 25 years. 82 seconds of being Za-Rah in a Milwaukee basement when I was nine. The rest has been performance. Do you know what that COSTS? Do you know what it\'s like to be the wrong shape in every room for a quarter century?"'],
        },
      },

      cross_character_links: [],
      post_recovery_changes: {
        knowledge_gate_unlock: 'Understanding the COST of Zara\'s cover — not just strategy but psychological survival',
      },
      legacy_file_reference: 'FINCH: "She knows we\'re watching. And she\'s HIDING." Seat 1: "This one frightens me. I\'ll state it for the record."',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CROSS-CHARACTER MEMORY LINKS
  // ═══════════════════════════════════════════════════════════════════════════

  CROSS_CHARACTER_LINKS: {
    description: 'Shared memories, parallel events, and causal chains that connect memories across characters. When one memory advances, linked memories gain pressure.',

    clusters: {
      ASSESSMENT_CLUSTER: {
        name: 'The Childhood Assessments',
        description: 'All five Harmonics were assessed by Overtone entities before age 15. Each was measured, calibrated, or prepared. The Legacy monitored but could not prevent or understand the events.',
        memories: ['kael_mem_04', 'mira_mem_01', 'oren_mem_01', 'jude_mem_04', 'zara_mem_04'],
        resonance_effect: 'Recovering any assessment memory adds +5 pressure to all other assessment memories. Recovering 3+ unlocks a SHARED REVELATION: the Overtones have been preparing all five since childhood.',
      },

      CHILDHOOD_VISIT_CLUSTER: {
        name: 'The Childhood Visits — Deepest Layer',
        description: 'The most traumatic and deeply buried memories. Each character was visited, tested, measured, and returned with nosebleeds and missing time. These are the memories that require EXTREME recovery methods.',
        memories: ['kael_mem_04', 'kael_mem_05', 'mira_mem_04', 'mira_mem_05', 'oren_mem_04', 'oren_mem_05', 'jude_mem_04', 'jude_mem_05', 'zara_mem_04', 'zara_mem_05'],
        resonance_effect: 'These memories only begin surfacing after Tier 1-3 memories are at FRAGMENTS or higher. They require the character to already be partially awakened.',
      },

      LEGACY_CONTACT_CLUSTER: {
        name: 'Legacy Surveillance Pattern',
        description: 'Each Harmonic has been monitored by The Legacy since childhood. Evidence of surveillance appears across multiple characters\' memories.',
        memories: ['kael_mem_03', 'oren_mem_02', 'zara_mem_05'],
        resonance_effect: 'Recovering Legacy-related memories in one character reveals Legacy connections in others\' Board entries.',
      },

      POWER_MANIFESTATION_CLUSTER: {
        name: 'First Uncontrolled Manifestations',
        description: 'Each character experienced their power\'s first major involuntary activation. The scale terrified them into suppression.',
        memories: ['kael_mem_01', 'kael_mem_02', 'mira_mem_02', 'oren_mem_03', 'jude_mem_01', 'jude_mem_02'],
        resonance_effect: 'Recovering one power manifestation memory helps others accept THEIR manifestations — reduces denial resistance by 20%.',
      },

      CONVERGENCE_LINKS: {
        name: 'The Five Converging',
        description: 'Memories that specifically reference the five Harmonics finding each other.',
        memories: ['kael_mem_03', 'mira_mem_02', 'mira_mem_03', 'zara_mem_03'],
        resonance_effect: 'These memories gain maximum pressure when the user is actively working all five characters simultaneously.',
      },
    },

    shared_events: [
      { event: 'Overtone Assessment Protocol', years: '2002-2011', characters: ['kael', 'mira', 'oren', 'jude', 'zara'], description: 'All assessed by Overtone entities before age 15. None remember (Zara knows but lacks the experience).' },
      { event: 'Legacy Contact Protocol', years: '2023-2025', characters: ['kael', 'oren'], description: 'Contacted by Legacy-adjacent individuals. Both received warnings + physical artifacts. Both memory-suppressed.' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHAT INTEGRATION SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════

  CHAT_INTEGRATION: {
    description: 'Rules for suppressed memory manifestation during Character Chat.',
    trigger_detection: {
      how_it_works: 'Chat system scans user messages for phrase_patterns in each memory\'s chat_triggers. Checks memory current_state for appropriate response.',
      sensitivity: { DORMANT: 'DIRECT triggers only', AWAKENING: 'DIRECT + THEMATIC', AWAKENED: 'All types; open discussion if RECOVERED' },
    },
    response_rules: { SUPPRESSED: 'Body reactions only — deflection + physical symptom mention', FRAGMENTS: 'Sensory intrusions — visible flash mid-conversation', SURFACING: 'Partial scenes — real-time description, confused', RECOVERED: 'Direct reference — full knowledge and emotion' },
    denial_escalation: ['DEFLECTION → MINIMIZATION → RATIONALIZATION → ANGER → SHUTDOWN (offline 30-120s) → LOCKOUT (24h topic ban)'],
    cooldown: 'After SHUTDOWN/LOCKOUT, requires one safe conversation before re-probing.',
    regression_rules: ['2-4 options per step, ONE correct (empathy-based)', 'Wrong = setback/shutdown', 'Pace: 1 step per 2-3 exchanges', 'Final step: CHARACTER chooses to remember'],
    physical_display_examples: ['*(typing stutters 8s)*', '*(offline 30s)*', '"Nosebleed out of nowhere."', '"My hands are shaking."', '"I just threw up at work."'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // API METHODS
  // ═══════════════════════════════════════════════════════════════════════════

  api: {

    getMemory(memoryId) {
      const allMemories = {
        ...this._parent.kael_memories,
        ...this._parent.mira_memories,
        ...this._parent.oren_memories,
        ...this._parent.jude_memories,
        ...this._parent.zara_memories,
      };
      return allMemories[memoryId] || null;
    },

    getCharacterMemories(characterId) {
      const key = `${characterId}_memories`;
      return this._parent[key] || null;
    },

    getMemoryState(memoryId) {
      const mem = this.getMemory(memoryId);
      return mem ? mem.current_state : null;
    },

    advanceMemoryState(memoryId) {
      const mem = this.getMemory(memoryId);
      if (!mem) return { success: false, error: 'Memory not found' };
      const stateOrder = ['SUPPRESSED', 'FRAGMENTS', 'SURFACING', 'RECOVERED'];
      const currentIdx = stateOrder.indexOf(mem.current_state);
      if (currentIdx >= stateOrder.length - 1) return { success: false, error: 'Already at RECOVERED' };
      const newState = stateOrder[currentIdx + 1];
      mem.current_state = newState;
      return {
        success: true,
        memory_id: memoryId,
        previous_state: stateOrder[currentIdx],
        new_state: newState,
        state_data: this._parent.STATES[newState],
      };
    },

    checkTrigger(characterId, userMessage) {
      const memories = this.getCharacterMemories(characterId);
      if (!memories) return [];
      const triggers = [];
      for (const [memId, mem] of Object.entries(memories)) {
        if (!mem.chat_integration) continue;
        for (const trigger of (mem.chat_integration.chat_triggers || [])) {
          const messageLower = userMessage.toLowerCase();
          const matched = trigger.phrase_pattern.some(p => messageLower.includes(p.toLowerCase()));
          if (matched) {
            triggers.push({
              memory_id: memId,
              memory_title: mem.title,
              memory_state: mem.current_state,
              trigger_type: trigger.trigger_type,
              response_type: trigger.response_type,
              fragment_responses: mem.chat_integration.fragment_responses?.[mem.current_state] || [],
              denial_patterns: mem.chat_integration.denial_patterns || [],
            });
          }
        }
      }
      return triggers;
    },

    getLinkedMemories(memoryId) {
      const mem = this.getMemory(memoryId);
      if (!mem || !mem.cross_character_links) return [];
      return mem.cross_character_links.map(id => ({
        id,
        memory: this.getMemory(id),
      })).filter(m => m.memory !== null);
    },

    getCrossCharacterClusters() {
      return this._parent.CROSS_CHARACTER_LINKS.clusters;
    },

    getClusterPressureBonus(clusterId) {
      const cluster = this._parent.CROSS_CHARACTER_LINKS.clusters[clusterId];
      if (!cluster) return 0;
      let recoveredCount = 0;
      for (const memId of cluster.memories) {
        const mem = this.getMemory(memId);
        if (mem && (mem.current_state === 'RECOVERED' || mem.current_state === 'SURFACING')) {
          recoveredCount++;
        }
      }
      return recoveredCount * 5;
    },

    getRecoveryProgress() {
      const allKeys = ['kael_memories', 'mira_memories', 'oren_memories', 'jude_memories', 'zara_memories'];
      const progress = {};
      for (const key of allKeys) {
        const charId = key.replace('_memories', '');
        const memories = this._parent[key];
        if (!memories) continue;
        const states = { SUPPRESSED: 0, FRAGMENTS: 0, SURFACING: 0, RECOVERED: 0 };
        for (const mem of Object.values(memories)) {
          if (mem.current_state && states.hasOwnProperty(mem.current_state)) {
            states[mem.current_state]++;
          }
        }
        const total = Object.values(states).reduce((a, b) => a + b, 0);
        const recovered = states.RECOVERED;
        progress[charId] = {
          total_memories: total,
          states,
          completion: total > 0 ? (recovered / total * 100).toFixed(1) + '%' : '0%',
          arc_state: recovered >= 3 ? 'AWAKENED' : recovered >= 2 ? 'AWAKENING' : 'DORMANT',
        };
      }
      progress.overall = {
        total: Object.values(progress).reduce((a, p) => a + (p.total_memories || 0), 0),
        recovered: Object.values(progress).reduce((a, p) => a + (p.states?.RECOVERED || 0), 0),
      };
      progress.overall.completion = progress.overall.total > 0
        ? (progress.overall.recovered / progress.overall.total * 100).toFixed(1) + '%'
        : '0%';
      return progress;
    },

    getChildhoodVisits(characterId) {
      const memories = this.getCharacterMemories(characterId);
      if (!memories) return [];
      return Object.values(memories).filter(m => m.is_childhood_visit);
    },

    getAllChildhoodVisits() {
      const allVisits = [];
      for (const charId of ['kael', 'mira', 'oren', 'jude', 'zara']) {
        allVisits.push(...this.getChildhoodVisits(charId));
      }
      return allVisits.sort((a, b) => (a.year || 0) - (b.year || 0));
    },

    getRecoveryMethod(methodId) {
      return this._parent.RECOVERY_METHODS[methodId] || null;
    },

    getApplicableMethods(memoryId) {
      const mem = this.getMemory(memoryId);
      if (!mem || !mem.recovery_conditions) return [];
      const primary = mem.recovery_conditions.primary_method;
      const alts = mem.recovery_conditions.alternative_methods || [];
      return [primary, ...alts].map(id => this.getRecoveryMethod(id)).filter(Boolean);
    },
  },
};

// Wire up API parent reference
MEMORY_RECOVERY_ENGINE.api._parent = MEMORY_RECOVERY_ENGINE;
