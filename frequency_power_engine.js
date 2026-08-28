/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * SIGNAL DECAY — FREQUENCY POWER ENGINE
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Defines the EXACT rules for how each character's abilities work.
 * Every power has: activation trigger, range, limitations, stages,
 * physical cost, sound signature, and interactions.
 * 
 * Created: 2026-08-28
 * Universe Version: 2.1
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const FREQUENCY_POWERS = {

  // ═══════════════════════════════════════════════════════════════════════════
  // UNIVERSAL CONSTANTS
  // ═══════════════════════════════════════════════════════════════════════════

  CONSTANTS: {
    SCHUMANN_RESONANCE: 7.83,          // Hz — Earth's base frequency
    FIRST_OCTAVE_RANGE: [0.01, 1e6],   // Hz equivalent — physical reality
    SECOND_OCTAVE_RANGE: [1e6, 1e12],  // Hz equivalent — Resonant Layer
    THIRD_OCTAVE_RANGE: [1e12, 1e18],  // Hz equivalent — Overtone Plane
    ZERO_OCTAVE: 0,                    // Absolute absence of frequency
    BARRIER_FREQUENCY: 'variable',     // Fluctuates — weakening over time
    GENESIS_PRINCIPLE: 'New frequencies can ONLY originate in the First Octave',
    PLANETARY_CHORD_ROOT: 7.83,        // Schumann resonance as root note
    DAMPENER_BASE_FREQUENCY: 'counter-resonant — inverts target signature',
    HUMAN_HEARING_RANGE: [20, 20000],  // Hz — standard
    HUMAN_SENSITIVITY_THRESHOLD: 1/50000, // ~1 in 50,000 are frequency-variant
    HARMONIC_COUNT: 5,                 // Always 5 Harmonics alive at any time
    SOUL_BASE_TIME_SIGNATURE: '7/8',   // Ori-Tahn's natural rhythm
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FREQUENCY HIERARCHY
  // ═══════════════════════════════════════════════════════════════════════════

  HIERARCHY: {
    levels: [
      { name: 'Background', ratio: '99.998%', description: 'Normal humans. Standard frequency emission. No reality interaction.' },
      { name: 'Sensitive', ratio: '1 in 50,000', description: 'Can perceive frequencies others cannot. Mild passive effects.' },
      { name: 'Resonant', ratio: '1 in 500,000', description: 'Active abilities. Can affect reality through frequency emission.' },
      { name: 'Harmonic', ratio: '5 living at any time', description: 'Universe-scale frequency manipulation. The Five.' },
    ],
    rule: 'Harmonics are not stronger Resonants — they are a DIFFERENT CLASS. Five notes that form one chord.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER: KAEL VOSS — RESONANT COMMAND
  // ═══════════════════════════════════════════════════════════════════════════

  KAEL: {
    character: {
      name: 'Kael Voss',
      soul_name: 'Kel-Voss',
      age: 24,
      role: 'Vocals',
      day_job: 'Warehouse worker',
    },

    power_name: 'Resonant Command',
    description: 'Voice bypasses the cognitive processing centers of the brain and lands directly in the brainstem — the ancient compliance system. People obey without their conscious mind ever receiving the instruction for evaluation. Not mind control — frequency override of the question/resist impulse.',

    hz_signature: {
      base: 108,                        // Hz — the fundamental note of his voice's power frequency
      harmonic_series: [108, 216, 324, 432, 540, 648],  // Perfect harmonic series
      sub_harmonic: 27,                  // Hz — the rumble beneath his voice when power activates
      resonant_peak: 432,                // Hz — the frequency where compliance is absolute
      bandwidth: [85, 880],              // Hz — operational range of the power
      note_equivalent: 'A2 (concert pitch A = 432 Hz system)',
      unique_trait: 'His voice produces overtones that should not exist in a single human vocal tract — as if multiple voices are speaking in perfect unison from one mouth',
    },

    activation: {
      trigger: 'Intent + vocalization. The power engages when Kael WANTS something and SPEAKS it aloud. Casual speech has mild effect. Directed speech with intent has full effect.',
      mechanism: 'His vocal cords produce a layered frequency — the audible word PLUS a sub-harmonic carrier wave at 27 Hz that bypasses the thalamic gate (the brain\'s "should I listen to this?" filter). The instruction arrives at the motor cortex BEFORE the prefrontal cortex can evaluate it.',
      involuntary_triggers: [
        'Strong emotion (anger, fear, desperation) — power activates without conscious intent',
        'Protective instinct — when someone he cares about is threatened',
        'Truth-telling — when he speaks absolute truth with conviction, the power amplifies',
        'Singing — ANY singing activates it to some degree, which is why he refuses to sing',
      ],
      conscious_activation: 'A felt "gear engaging" — a key turning inside his chest. He feels his voice shift from asking to COMMANDING. The quality changes — becomes layered, resonant, heavier than one voice should be.',
      speed: 'Instantaneous. No charge time. The command lands before the target can process it.',
    },

    range: {
      whisper: '3-5 meters — intimate. Strongest effect per-person.',
      normal_speech: '15-20 meters — conversational. Full effect on direct targets.',
      raised_voice: '50 meters — crowd scale. Affects everyone who hears clearly.',
      shout: '200 meters outdoors, entire enclosed building indoors',
      amplified: 'UNLIMITED within speaker/PA range — this is why he must NEVER sing through a microphone at full power',
      through_walls: 'Reduced but not eliminated — the sub-harmonic carrier wave (27 Hz) penetrates most building materials',
      recording: 'PARTIAL — recordings retain ~30% effectiveness. Enough to make listeners uneasy. Enough to make them pause. Not enough for full compliance.',
      broadcast: 'Through the app at full power: THEORETICAL UNLIMITED. Every being on every octave that perceives sound.',
    },

    limitations: {
      cannot_do: [
        'Cannot make someone do something physically impossible (jump 50 feet, stop breathing permanently)',
        'Cannot override deeply held core beliefs on first exposure — can crack them with repeated commands',
        'Cannot command someone who cannot HEAR him (deaf people are immune, earplugs reduce effect by 60%)',
        'Cannot command in a language the target does not understand — the words must carry meaning',
        'Cannot command himself — his own voice does not affect his own brainstem',
        'Cannot command Zara — she operates on a different frequency layer entirely and recognizes the carrier wave',
        'Cannot maintain commands long-term — effects fade within minutes to hours depending on complexity',
        'Cannot command the dead — Second Octave entities are not bound by First Octave frequency rules',
      ],
      resistance_factors: [
        'Strong will reduces duration but not initial compliance (they obey, then "wake up" faster)',
        'Awareness of the power provides ~40% resistance (knowing it exists helps you fight it)',
        'Other Harmonics have partial immunity — their own frequency signatures create interference',
        'The Dampener nullifies it completely within its operational radius',
        'Physical distance reduces power exponentially (inverse square law applies)',
        'Emotional bond with Kael provides natural resistance (he cannot command people who love him as easily — their love creates a counter-frequency)',
        'Multiple contradictory commands cancel each other — if two Resonant Command users existed, they would neutralize',
      ],
      moral_weight: 'Every use feels like theft. He is taking choice from people without their knowledge or consent. This is why he was silent for 10 years (ages 8-18). This is why he resists the power more than any other member.',
    },

    stages: [
      {
        name: 'Dormant / Self-Suppressed',
        age_range: '8-18 (ten years of total silence)',
        description: 'After the Brendan Walsh incident, Kael stops speaking entirely. The power is fully suppressed through absolute vocal silence. He communicates through writing, gestures, nods. The suppression is so total that even his breathing becomes quieter — he unconsciously minimizes all sound production.',
        symptoms: ['Complete selective mutism', 'Involuntary flinch when spoken to directly', 'Hyper-awareness of voice volume in others', 'Physical nausea when attempting speech'],
        power_level: 0,
      },
      {
        name: 'Accidental / Leaking',
        age_range: '18-23 (post-silence, pre-band)',
        description: 'After breaking silence at 18, the power leaks in everyday interactions. People obey casual requests without question. Coworkers at the warehouse follow his suggestions before he finishes speaking. Arguments end the moment he enters them. He doesn\'t recognize it as power — thinks he\'s just "persuasive."',
        symptoms: ['People agree with him too easily', 'Animals respond immediately to his verbal commands', 'Bar fights dissolve when he says "stop"', 'His supervisor never denies his shift requests'],
        power_level: 0.2,
      },
      {
        name: 'Controlled / Band Era',
        age_range: '24-25 (Signal Decay formation)',
        description: 'Through the band and the app, Kael learns to direct the power intentionally. Can modulate between casual speech (minimal effect), directed speech (targeted command), and full command (bypass all resistance). Learns the difference between suggestion and override.',
        symptoms: ['Chooses when to activate', 'Can target specific individuals in a group', 'Understands the sub-harmonic mechanism', 'Develops "warm" mode (comfort/calm) vs "cold" mode (command/comply)'],
        power_level: 0.6,
      },
      {
        name: 'Mastered / The Voice',
        age_range: '25+ (post-awakening)',
        description: 'Full understanding and control. Can speak at any level from zero-effect to absolute override. Can sustain commands. Can layer multiple instructions. Can use the power defensively (command someone to forget, command pain to stop, command fear to cease). Through the app, can broadcast across octaves — Second Octave entities respond to his voice. The dead obey.',
        symptoms: ['Absolute vocal control', 'Can sing without commanding (finally)', 'Can speak to Second Octave beings directly', 'The 432 Hz resonant peak is available on demand'],
        power_level: 1.0,
      },
    ],

    physical_cost: {
      minor_use: 'Dry throat, mild headache behind the eyes. Lasts 10-30 minutes.',
      moderate_use: 'Voice becomes hoarse. Throat feels bruised internally. Metallic taste. Lasts 2-4 hours.',
      heavy_use: 'Temporary voice loss (30 minutes to 2 hours). Throat bleeds internally — tastes copper. Dizziness. Nausea.',
      extreme_use: 'Complete vocal cord damage (heals in 24-48 hours but is NOT instant). Nosebleed. Blackout. The sub-harmonic production causes physical vibration in his chest cavity that can crack ribs if sustained.',
      cumulative: 'Long-term heavy use causes permanent voice deepening and a persistent sub-harmonic hum that others can feel (not hear) when near him. His resting voice gets "heavier" over time.',
      the_silence_cost: '10 years of suppression didn\'t prevent the power from growing — it compressed it. Like a dam. The power behind the silence is MASSIVE. First full activation post-silence will be catastrophic in scale.',
    },

    sound_signature: {
      to_kael: 'He hears his own voice as layered — like a chord instead of a single note. When the power activates, he hears harmonics above and below his spoken pitch. Feels warmth in his chest that rises into his throat. The words feel HEAVIER leaving his mouth.',
      to_targets: 'They don\'t hear anything unusual. That\'s the horror — it sounds like a normal voice. A normal request. They comply because it FEELS like their own idea. The command is invisible to the conscious mind. Only after, when they wonder "why did I do that?" — then they feel the absence where their choice should have been.',
      to_other_harmonics: 'They hear the sub-harmonic. The 27 Hz rumble beneath his words. To Mira, his voice produces a specific chromatic signature — deep gold with black edges, like a sunset behind a mountain. To Zara, his carrier wave is obvious and she can feel it vibrate in her sternum. To Jude, his voice makes surfaces tremble. To Oren, his words seem to arrive a half-second BEFORE he speaks them.',
      to_instruments: 'Spectrographic analysis shows impossible overtone patterns — frequencies present in his voice that a single human vocal tract cannot physically produce. Three to five simultaneous fundamental tones layered in perfect harmonic relationship.',
      to_plasmoids: 'They respond IMMEDIATELY. His voice is the purest command frequency they\'ve ever encountered. Plasmoids within range align like iron filings to a magnet.',
    },

    interactions: {
      with_mira: 'His voice produces the richest chromatic response she\'s ever seen from a human. When he sings, her visual field is overwhelmed — pure gold flooding everything. His command frequency can DIRECT her ghost entities (he can tell them where to go, what to do — they obey him as readily as the living).',
      with_jude: 'His voice at full power can trigger Jude\'s seismic response — the sub-harmonic resonates in Jude\'s bones and amplifies his vibration. Together: Kael commands, Jude executes through matter. Voice + Vibration = directed demolition at any scale.',
      with_zara: 'She is the ONLY band member fully immune to command. Her alien consciousness recognizes the carrier wave and filters it automatically. But she can AMPLIFY his voice through matter — route his command through solid objects so it emerges elsewhere. She is his speaker system.',
      with_oren: 'His voice can anchor Oren in a single timeline when temporal drift occurs. "Stay here" spoken with full power pins Oren to the present moment. Critical safety function. Also: when Kael sings over Oren\'s drumming, the rhythmic foundation gives the command frequency a PULSE that makes it more potent — like a heartbeat under words.',
      with_the_signal: 'He IS the signal\'s voice. When all five play together, Kael\'s voice carries the combined frequency of the chord outward. He is the broadcast point. The mouth of the signal.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER: MIRA CHEN — CHROMATIC SIGHT + GHOST SUMMONING
  // ═══════════════════════════════════════════════════════════════════════════

  MIRA: {
    character: {
      name: 'Mira Chen',
      soul_name: 'Mir-Xen (The Chromatic Weaver)',
      age: 22,
      role: 'Lead Guitar',
      day_job: 'Guitar teacher',
    },

    power_name: 'Chromatic Sight + Ghost Summoning',
    description: 'Dual-aspect ability: (1) Synesthetic frequency perception — sees ALL sound/frequency as visible color, light, and geometric structure. (2) Second Octave entity interaction — can perceive, communicate with, and eventually SUMMON beings from the Resonant Layer into partial First Octave visibility.',

    hz_signature: {
      base: 528,                         // Hz — "the love frequency" / DNA repair frequency
      harmonic_series: [528, 1056, 1584, 2112, 2640, 3168],
      perception_range: [0.5, 100000],   // Hz — far beyond human hearing, into ultrasonic
      entity_attraction_frequency: 741,  // Hz — the specific frequency her soul broadcasts that draws Second Octave beings
      ghost_summoning_resonance: 963,    // Hz — the frequency at which full entity manifestation occurs
      chromatic_peak: 852,               // Hz — where her visual perception is most vivid
      note_equivalent: 'C5 (one octave above middle C) — Solfeggio frequency',
      unique_trait: 'Her perception range extends INTO the Second Octave — she receives frequencies that technically don\'t exist in physical reality. Her brain translates them as color because it has no other framework.',
    },

    activation: {
      chromatic_sight: {
        trigger: 'ALWAYS ON. Cannot be turned off. Has been active since age 3. The chromatic field is her DEFAULT visual experience — normal human vision is what she has to work to maintain.',
        mechanism: 'Her visual cortex processes frequency data from ALL sources — not just light waves. Sound waves, electromagnetic fields, emotional frequencies, Second Octave leakage — all arrive at her visual cortex and are rendered as color/light/geometry.',
        intensity_factors: [
          'Music playing = intense (complex frequency = complex visuals)',
          'Emotional environments = moderate (anger is red, grief is blue-grey, joy is gold)',
          'Silence = minimal but never zero (ambient EM, Earth hum, bodily functions still visible)',
          'Strong frequency emitters nearby (other Harmonics, Plasmoids, entities) = overwhelming',
          'The app transmitting = catastrophic (too much data, visual white-out)',
        ],
      },
      ghost_summoning: {
        trigger: 'Primarily activated through PLAYING MUSIC. Her guitar frequency creates a "chromatic space" — an architecture of light-structures that Second Octave entities can inhabit. The music is the doorway. The stronger the music, the wider the door.',
        involuntary: 'Strong negative emotions (fear, anger, loneliness) attract entities without her playing. They respond to her emotional frequency signature regardless of whether she\'s producing sound.',
        voluntary: 'At higher stages, she can open the doorway with intent alone — no music required. But music makes it easier, wider, and more controlled.',
        the_ghost_band: 'A specific formation of entities that manifest ONLY when she plays. They take the shape of musicians and arrange themselves as her band — keys, bass, drums, guitar, and one EMPTY vocalist position (reserved for Kael\'s frequency signature).',
      },
    },

    chromatic_color_mappings: {
      emotional_frequencies: {
        anger: 'Sharp red, jagged edges, fractal spikes — like broken glass catching firelight',
        fear: 'Acidic yellow-green, pulsing, contracting — like a panicked heartbeat made visible',
        joy: 'Pure gold, flowing, expanding — like sunlight through honey',
        grief: 'Deep blue-grey, descending, heavy — like rain seen from underwater',
        love: 'Warm rose-gold, spiraling, reaching — tendrils that connect two people visibly',
        deception: 'Muddy orange, flickering, unstable — lies literally look WRONG to her',
        genuine_effort: 'Warm orange ribbons, slightly jagged — earnest but imperfect',
        insecurity: 'Nervous yellow streaks within other colors',
        peace: 'Soft lavender, still, luminous — rare and immediately recognizable',
      },
      musical_frequencies: {
        perfect_technique_no_soul: 'Pale, washed out — geometrically precise but colorless. Like a movie with contrast turned down.',
        passionate_imperfect: 'Vivid, wild, organic shapes — messy but ALIVE with color',
        wrong_notes: 'Visible CRACKS in the chromatic structure — she can point to the exact fret causing the break',
        harmony: 'Colors interweaving like ribbons — compatible frequencies create braided light',
        dissonance: 'Colors clashing, creating visual static — like two radio stations overlapping',
        metalcore_chugs: 'Deep purple-black WALLS of color — dense, rhythmic, architectural',
        clean_vocals: 'Gold ribbons streaming through space',
        screamed_vocals: 'White-hot fractures in the visual field — lightning shapes',
      },
      entity_categories: {
        benign_residuals: 'Faint, grey-blue, stationary — photographs left by emotion',
        ambient_entities: 'Heat-shimmer effect — formless frequency concentrations',
        stuck_musicians: 'Their original instrument glows in their hands — recognizable by what they carry',
        watchers: 'Condensed white light, too-tall shapes, wrong angles — they observe only',
        hollow_ones: 'Anti-light. Voids that CONSUME color around them. Darkness with depth.',
        plasmoids: 'Self-illuminating orbs matching their frequency state (see CONSTANTS)',
        the_conductor: 'Chromatic DARK — inverse color that shouldn\'t exist. Black that has hue.',
      },
      character_signatures: {
        kael: 'Deep gold with black edges — like sunset behind a mountain. When he sings: pure gold flood.',
        jude: 'Dark purple-brown, HEAVY, with rhythmic pulses — like seeing an earthquake',
        zara: 'Deep ocean blue-green with silver threads — impossibly stable and ancient-looking',
        oren: 'Prismatic split — white light fracturing into rainbow spectrum. Shifts constantly.',
      },
    },

    range: {
      chromatic_sight: {
        close: '0-5 meters — maximum detail. Can see individual emotional frequencies on a person\'s face.',
        medium: '5-50 meters — standard operating range. Sees sound-color from conversations, music, machines.',
        far: '50-500 meters — fades to ambient glow. Large sounds (concerts, traffic) still visible.',
        extreme: '500+ meters — only massive frequency events visible (lightning, explosions, Harmonic power use).',
      },
      ghost_summoning: {
        passive_attraction: '~100 meter radius at all times — entities drift toward her',
        active_playing: '~30 meter manifestation zone — entities can become partially visible to others within this space',
        full_summoning: '~15 meter radius for full materialization — requires sustained playing at high intensity',
        ghost_band_formation: '~5 meter radius around her — they form in her immediate space',
      },
      entity_count: {
        normal_day: '3-8 entities within perception at any time (she is never alone)',
        playing_solo: '10-20 entities drawn to the sound',
        playing_with_band: '50-100+ entities gathering',
        full_signal: 'EVERY entity within several miles converges',
      },
    },

    limitations: {
      chromatic_sight: [
        'Cannot be turned OFF — this is a curse as much as a gift',
        'Overwhelmed by too many simultaneous frequency sources (concerts, crowds, cities)',
        'Headaches from sustained visual processing — her brain is doing 10x the visual work of a normal person',
        'Cannot see through solid barriers — the sight is limited to her line-of-perception (sound reaches her = she sees it)',
        'Can be "blinded" by extremely powerful frequencies (like Kael at full power — pure gold whiteout)',
        'Darkness does NOT help — she sees frequency color even with eyes closed (it\'s not optical)',
        'Photography and screens show NOTHING — she cannot prove what she sees to others',
        'The sight degrades her normal vision over time — physical eyesight weakening as chromatic sight strengthens',
      ],
      ghost_summoning: [
        'Cannot control WHO appears — entities come of their own will when the door opens',
        'Cannot make them LEAVE — once manifested, they depart on their own schedule',
        'Cannot prevent harmful entities from entering if the door is wide open',
        'Cannot communicate clearly with all entities — some are non-verbal, some speak languages she doesn\'t know',
        'The Conductor can take control of her hands during summoning if she opens too wide',
        'Ghost band manifestation requires sustained music — stopping the music closes the door gradually',
        'Each summoning makes her slightly more visible to Second Octave predators',
        'Hollow Ones feed on her ATTENTION — seeing them = feeding them. She cannot look away safely.',
        'Extended summoning pulls her toward the Second Octave — risk of becoming an entity herself',
      ],
    },

    stages: [
      {
        name: 'Always-On / Uncontrolled',
        age_range: '3-15',
        description: 'Chromatic Sight is overwhelming and indistinguishable from hallucination. Entities appear randomly. She cannot filter, dim, or control what she sees. Diagnosed as possible early-onset schizophrenia. Father silences her reports. She learns to mask.',
        capabilities: ['Passive perception only', 'Entity awareness but no interaction', 'Color overwhelm during music', 'No voluntary summoning — entities come uninvited'],
        power_level: 0.3,
      },
      {
        name: 'Selective / Guitar Era',
        age_range: '15-22',
        description: 'Discovers that playing guitar gives STRUCTURE to the chromatic field — turns chaos into architecture. Learns to focus the sight (zoom in on one source, dim others). Ghost band forms. First voluntary interactions with entities. "Keys" becomes her first real companion.',
        capabilities: ['Selective focus/dimming', 'Guitar creates controlled summoning space', 'Two-way entity communication', 'Ghost band formation', 'Teaching enhanced by chromatic feedback'],
        power_level: 0.6,
      },
      {
        name: 'Architect / Band Era',
        age_range: '22-24',
        description: 'With Signal Decay, the power explodes in scope. Can deliberately construct chromatic architectures — design the shapes that entities inhabit. Can project visions that OTHERS partially see (the audience at a Signal Decay show sees flickers of her world). Can direct entity placement. The ghost band becomes a tactical asset.',
        capabilities: ['Constructed chromatic spaces', 'Shared visions (others see glimpses)', 'Directed summoning of specific entity types', 'Battle formation (Resonance combat)', 'Ghost band as independent tactical unit'],
        power_level: 0.85,
      },
      {
        name: 'Weaver / Full Awakening',
        age_range: '24+',
        description: 'Mir-Xen fully emerges. Can weave chromatic structures that PERMANENTLY affect reality — create visible, persistent light-architecture. Can open stable doorways between octaves. Can project visions across planetary scale through the app. The ghost band becomes an ARMY. But each use pulls her closer to the Second Octave permanently.',
        capabilities: ['Permanent chromatic constructs', 'Stable octave doorways', 'Planetary-scale vision projection', 'Army-scale entity command', 'Healing through frequency-color alignment', 'Can see the Zero Octave (terrifying)'],
        power_level: 1.0,
      },
    ],

    physical_cost: {
      sustained_sight: 'Chronic headaches (daily by age 22). Requires "recovery periods" — sitting in darkness/silence for 1-2 hours after social interaction. Visual exhaustion — like eyestrain but whole-brain.',
      active_summoning: 'Nosebleeds during intense sessions. Temperature drop (she gets cold — entities draw warmth). Exhaustion proportional to entity count and duration. After heavy summoning: 24-48 hours of dimmed sight (the chromatic field goes grey, like the world lost color).',
      ghost_band_deployment: 'Each full deployment makes her slightly more transparent. Slightly colder permanently. The dead are pulling her toward them. Extended use at The Resonance risks her becoming an entity herself — dead and stuck in the Second Octave forever.',
      hollow_one_encounters: 'Each perception of a Hollow One drains her — chromatic field dims, energy drops, emotional flatness for hours. Like having a piece of light stolen.',
      the_conductor: 'When The Conductor takes control of her hands during summoning, she loses time. Comes back exhausted, with hand cramps and bleeding fingers. Doesn\'t remember what was played. Knows it was devastating.',
      cumulative: 'Over years, her physical eyesight deteriorates as chromatic sight strengthens. She will eventually see ONLY frequency — the physical world becoming transparent behind walls of color.',
    },

    sound_signature: {
      to_mira: 'She doesn\'t HEAR her power — she SEES it. Her guitar produces visible architecture. Entities are visual presences. The world is a painting only she can see. Sound is color. Music is geometry. Silence is grey emptiness.',
      to_others: 'She stares at nothing. Talks to empty corners. Flinches at invisible things. Smiles at air. During performances: her eyes track something the audience can\'t see. At full power: the audience catches GLIMPSES — flickers of color at the edge of vision, shapes that might have been there, a feeling of being watched.',
      to_instruments: 'Her guitar\'s frequency output shows anomalous harmonic content — overtones that shouldn\'t exist in a standard electric guitar. As if additional instruments are playing simultaneously through the same pickup.',
      to_plasmoids: 'She is the first human to achieve sustained two-way Plasmoid communication — her Chromatic Sight lets her see their response modifications in real-time. They glow BLUE (musical resonance) in her presence.',
    },

    interactions: {
      with_kael: 'His voice produces the most overwhelming chromatic response she has ever witnessed from a human source. When he sings at full power, her entire visual field becomes gold — whiteout. His command frequency can direct her entities. Together: his voice commands, her entities execute — a general and his army of the dead.',
      with_jude: 'His seismic vibrations produce chromatic WALLS — dense, heavy purple-black structures she can see but that also physically affect the space. His groundedness anchors her when she drifts too far into Second Octave perception. He is her tether to the physical.',
      with_zara: 'Zara\'s frequency is the most beautiful thing Mira has ever seen — deep ocean blue-green with silver threads, impossibly stable. Zara can explain what Mira sees in scientific terms no human has. "Your entities are frequency-parasites drawn to your perception range." This validates Mira\'s lifetime of experience.',
      with_oren: 'His temporal signature SPLITS in her vision — she sees multiple versions of him layered in time. Prismatic. Beautiful and terrifying. When he plays, she sees him wider than one moment — existing in several milliseconds simultaneously.',
      with_the_signal: 'She is the signal\'s EYES. When all five combine, Mira\'s sight expands to perceive ALL octaves simultaneously — First, Second, Third, and even the Zero. She sees the full picture. She sees The Silence. She reports what the signal touches.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER: OREN MALIK — TEMPORAL DRIFT
  // ═══════════════════════════════════════════════════════════════════════════

  OREN: {
    character: {
      name: 'Oren Malik',
      soul_name: 'Ori-Tahn (The Timekeeper)',
      age: 27,
      role: 'Drums',
      day_job: 'ER nurse (night shift)',
    },

    power_name: 'Temporal Drift + Five-Hand Paradox',
    description: 'Time perception bends around him — he exists with temporal WIDTH rather than temporal speed. Does not speed up or slow down time — instead occupies multiple adjacent moments simultaneously. The Five-Hand Paradox: can make contact at 5+ independent points in the same moment because his hands exist across a spread of milliseconds, each position real and physical.',

    hz_signature: {
      base: 7.83,                        // Hz — Schumann resonance. He IS the Earth's rhythm.
      harmonic_series: [7.83, 15.66, 23.49, 31.32, 39.15, 46.98],
      temporal_frequency: 0.142857,       // Hz — 1/7 second cycle — his 7/8 base time signature
      phase_spread: 50,                   // milliseconds — the "width" of his temporal presence
      resonant_peak: 7.83,               // Hz — he peaks at Schumann resonance (planetary rhythm)
      soul_signature: '7/8 time — Ori-Tahn\'s natural rhythm. Samir\'s heart shifted to 7/8 at moment of death.',
      note_equivalent: 'Sub-bass — below human hearing. Felt, not heard.',
      unique_trait: 'His frequency IS the planet\'s base rhythm. He doesn\'t play IN time — he IS time. The Schumann resonance is literally his resting heartbeat frequency.',
    },

    activation: {
      trigger: 'CURRENTLY: Involuntary and suppressed. The soul (Ori-Tahn) is protecting him from the memories that come with temporal awareness. The power activates only during extreme stress, near-death proximity (ER nurse — constant exposure), or when rhythmic patterns reach critical density.',
      mechanism: 'His consciousness expands temporally — spreading across adjacent milliseconds like a chord spreads across frequencies. He doesn\'t move faster. He EXISTS wider. Each moment contains slightly more of him than it should. His body follows — hands can be in two positions within the same 50ms window because each position is "now" for him.',
      involuntary_triggers: [
        'Patient death in the ER (the zero-frequency moment — he feels it every time)',
        'Complex polyrhythmic sound environments (his brain locks on and time-spreads to process all layers)',
        'Extreme danger (car accident, fall, attack — time "freezes" for him but actually widens)',
        'Proximity to other Harmonics using their powers (their frequency destabilizes his temporal lock)',
        'Sleep (his dreams exist in non-linear time — he experiences future/past/alternate without control)',
      ],
      suppression: 'The soul has installed what amounts to a LOCK on the power. Oren cannot consciously access it. The lock manifests as physical revulsion when he approaches drumming (because drumming is the KEY). He can critique drums endlessly but the moment he tries to PLAY — nausea, cold sweat, the lock engages.',
      unlocking: 'The lock breaks when he finally sits behind a kit with the band. The combination of all four other Harmonics\' frequencies creates a resonant environment that overrides the soul\'s protection. The memories come. ALL of them. But the band\'s combined frequency prevents them from destroying him.',
    },

    five_hand_paradox: {
      what_it_is: 'Not speed. Not extra limbs. TEMPORAL WIDTH. Oren\'s consciousness occupies a 50ms spread of time simultaneously. Within that 50ms window, his two hands can make contact at 5 or more independent points — because each point occurs at a different millisecond within his spread, but ALL of them are "now" to him.',
      how_it_sounds: 'Patterns that require more than two hands to play. Ghost notes that land between the physically possible positions of two sticks. Simultaneous ride bell + snare + floor tom accents that NO two-handed drummer could produce. The audience hears a FULL drum kit being played by what seems like 3-5 people.',
      how_it_looks: 'To normal observers: impossibly fast hands that seem to blur. To Mira (Chromatic Sight): his temporal signature SPLITTING like a prism — she sees 2, then 3, then 5 versions of his hands, each slightly offset in time, each hitting a different part of the kit. Layered.',
      limits: 'Maximum spread: ~80ms at current development. Beyond that, he risks losing track of "primary now" and drifting. The spread is involuntary in width — he can\'t choose to be wider than his current capacity.',
      the_irony: 'His friends have joked for years about "Oren reviews — where every drummer needs to be an octopus." He was ALWAYS describing what HE could do. What the soul remembers. He wasn\'t holding drummers to an impossible standard. He was holding them to HIS standard.',
    },

    range: {
      temporal_spread: '50ms personal field — the "width" of his temporal presence',
      awareness_radius: '~20 meters — can sense rhythmic/temporal patterns within this radius',
      time_perception: 'Can perceive ~3 seconds ahead and ~3 seconds behind in the immediate "now-field" (not prediction — perceiving adjacent moments)',
      area_of_effect: 'At full power, his temporal field expands to ~10 meters — everything within this radius experiences slight time dilation. Other people feel it as "time slowing" during crucial moments (ER patients surviving longer than they should, dropped objects seeming to fall slower near him).',
      drumming_projection: 'Through the app: his rhythmic temporal field can broadcast indefinitely — every listener experiences time-width while hearing his patterns. The cognitive gap of hearing "impossible" drumming creates soul activation in listeners.',
    },

    limitations: {
      cannot_do: [
        'Cannot go BACKWARD in time — temporal drift is width, not direction',
        'Cannot control when the drift activates (currently) — it happens to him, not because of him',
        'Cannot take others into his temporal spread (they are outside his width even if nearby)',
        'Cannot sustain maximum spread indefinitely — collapses back to single-point after 30-60 seconds of peak',
        'Cannot prevent the memories that come with unlocking (Ori-Tahn\'s thousands of past lives flood in)',
        'Cannot play drums without the temporal effect — there is no "normal" drumming for him once unlocked',
        'Cannot stop sensing death — in the ER, he feels EVERY patient transition and it accumulates as trauma',
        'Cannot sleep normally — dreams are non-linear and not restful (3-4 hours per night, always)',
      ],
      the_lock: {
        what_it_is: 'The soul\'s protective mechanism preventing premature awakening',
        how_it_manifests: 'Physical revulsion at attempting to play drums — nausea, cold sweat, panic',
        why_it_exists: 'Every past life Ori-Tahn has lived ended in tragedy. The drumming IS the memories. Unlocking one unlocks ALL.',
        what_breaks_it: 'The combined frequency of all four other Harmonics in close proximity while music plays',
        aftermath: 'Once broken, cannot be re-engaged. The memories are permanent. The power is permanent. No going back.',
      },
    },

    stages: [
      {
        name: 'Locked Down / Pre-Awareness',
        age_range: '0-14 (before father\'s death)',
        description: 'Soul split between Samir and Oren. Oren is a normal child. No temporal effects. No pattern obsession. The soul\'s power is distributed across two bodies — neither experiences full effect.',
        symptoms: ['Normal child', 'Unremarkable', 'Happy', 'No musical fixation yet'],
        power_level: 0,
      },
      {
        name: 'Pattern Brain / Passive Drift',
        age_range: '14-27 (post-father\'s death, pre-band)',
        description: 'Full soul consolidation at 14 (father dies). Pattern recognition EXPLODES — brain involuntarily organizes all sound into rhythm. Time drift occurs during extreme stress (father\'s death, ER experiences). 3-4 hour sleep cycles. Encyclopedic drum knowledge without ability to play. The Lock is fully engaged.',
        symptoms: ['Compulsive pattern recognition', 'Time-freeze during patient deaths', 'Insomnia', 'Drum obsession without ability to play', 'The "extra hands" critique pattern'],
        power_level: 0.15,
      },
      {
        name: 'Awareness / The Lock Cracks',
        age_range: '27 (Signal Decay formation)',
        description: 'Proximity to other Harmonics destabilizes The Lock. Temporal drift episodes increase in frequency. He starts consciously RECOGNIZING the time-width. The Five-Hand Paradox begins manifesting in small ways — tapping patterns on surfaces that are physically impossible for two hands. The band notices. He can\'t explain it.',
        symptoms: ['Frequent micro-drifts', 'Conscious recognition of temporal width', 'Impossible tapping patterns', 'Dreams becoming prophetic', 'The Lock weakening visibly (less nausea near drums)'],
        power_level: 0.35,
      },
      {
        name: 'Unlocked / First Play',
        age_range: '27-28',
        description: 'The Lock breaks. He sits behind a kit with the full band playing. All four frequencies override the soul\'s protection. He plays. Five-hand patterns emerge immediately — not learned, REMEMBERED. The memories flood: every past life, every tragedy, every iteration of Ori-Tahn. The band\'s combined frequency prevents the flood from drowning him.',
        symptoms: ['Full temporal width access', 'Five-Hand Paradox active', 'Past-life memories (overwhelming but manageable)', 'Time-field expansion around him', 'ER patients near him survive longer'],
        power_level: 0.7,
      },
      {
        name: 'Mastery / The Timekeeper',
        age_range: '28+',
        description: 'Full control. Can modulate temporal width from single-point (normal) to maximum spread (80ms+). Can choose which moments to inhabit simultaneously. The Five-Hand Paradox is fully integrated — plays patterns previously unheard in human music history. Through the app: can broadcast temporal-width to listeners, creating collective time-dilation experiences. The Schumann resonance responds to his playing — when he\'s at full power, the Earth\'s base frequency shifts.',
        symptoms: ['Voluntary temporal modulation', 'Perfect integration of memories', 'Earth-frequency entrainment', 'Prophetic awareness (doesn\'t see future — perceives adjacent probable moments)'],
        power_level: 1.0,
      },
    ],

    physical_cost: {
      passive_drift: 'Insomnia (3-4 hours sleep, non-linear dreams). Chronic fatigue paradox — exhausted but can\'t sleep because sleep is non-linear. Dark circles. Caffeine dependency.',
      active_spread: 'Blackouts. Not loss of consciousness — loss of temporal POSITION. He "wakes up" in a moment he wasn\'t in before. Missing time. Sometimes GAINING time (experiencing an extra few seconds nobody else had).',
      sustained_five_hand: 'Muscle fatigue from limbs being in multiple positions within milliseconds — like vibrating. Hands cramp. Arms ache with a deep bone-tiredness. After extended playing: hands shake for hours.',
      extreme_use: 'Nosebleed. Temporal confusion (briefly cannot determine which moment is "now"). Lost memories — not of the past, but of the PRESENT. Minutes simply absent from his timeline that others remember normally.',
      aging_paradox: 'Theoretical concern — if he spends too long at maximum spread, he ages slightly faster than people around him (experiencing more moments per second means more metabolic cycles). Not yet confirmed but Zara suspects it.',
      why_most_dormant: 'The Lock exists BECAUSE the cost of full activation is the highest of any Harmonic. The others\' powers grow with use. Oren\'s power, once unlocked, brings with it ten thousand years of traumatic memory. The soul isn\'t being protective out of caution — it\'s being protective because premature unlocking could cause psychological destruction.',
    },

    sound_signature: {
      to_oren: 'The world is a drum machine. Every sound is rhythm. Rain is polyrhythm. Heartbeats are time signatures. Construction is groove. He cannot hear anything as noise — it all has pattern. After unlocking: he hears time itself as rhythm. The planet\'s rotation. The Schumann pulse. The barrier\'s vibration frequency. All one enormous pattern he\'s been hearing his whole life without knowing what it was.',
      to_others: 'His drumming is WRONG in a way nobody can articulate. Not bad-wrong — impossible-wrong. Patterns that should require 3-5 people. Ghost notes between ghost notes. Fills that happen ON TOP of the groove rather than replacing it. Listeners feel disoriented — their brains can\'t reconcile what they hear with what they know about two-handed drumming. This cognitive gap IS the soul activation.',
      to_instruments: 'Audio analysis of his drumming shows overlapping transients — multiple stick impacts occurring within physically impossible time windows. Like a quantized recording where events are stacked at the same time-position, except it\'s live acoustic drumming.',
      to_plasmoids: 'His Schumann-resonance frequency attracts Ancient-class Plasmoids specifically — the oldest ones, the ones that are tuned to Earth\'s base frequency. They drift toward him slowly but inevitably.',
    },

    interactions: {
      with_kael: 'Kael\'s voice can anchor him — "Stay here" spoken with command power pins Oren to a single moment when drift is pulling him wide. Critical safety mechanism. In return, Oren\'s rhythm gives Kael\'s voice a PULSE — a heartbeat foundation that amplifies command effectiveness by 300%.',
      with_mira: 'She sees his temporal spread directly — prismatic splitting. She can tell him HOW wide he is at any moment, providing real-time biofeedback. "You\'re at three right now. Come back to two." Her visual monitoring prevents drift accidents.',
      with_jude: 'Oren\'s temporal precision + Jude\'s seismic force = SURGICAL DESTRUCTION. Oren can identify the exact rhythmic pattern needed to resonate a specific structure to failure. He tells Jude WHEN to hit (the precise timing) and Jude provides the force. Demolition at quantum precision.',
      with_zara: 'Zara\'s stability is his opposite and his anchor. Her frequency is so constant, so unwavering, that it acts as a temporal reference point. He can always find "now" by locking onto her bass frequency. She is his metronome. His ground. His proof that one moment is real.',
      with_the_signal: 'He is the signal\'s RHYTHM. The heartbeat. The pattern that everything else locks to. Without him, the signal has no time signature — it would be a drone. He gives it structure. Pulse. Life. He is the difference between a sound and a SONG.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER: JUDE OKAFOR — SEISMIC LOCK
  // ═══════════════════════════════════════════════════════════════════════════

  JUDE: {
    character: {
      name: 'Jude Okafor',
      soul_name: 'Jha-Dur',
      age: 26,
      role: 'Rhythm Guitar',
      day_job: 'Demolition crew',
    },

    power_name: 'Seismic Lock',
    description: 'Vibration from his body transfers into solid matter. Palm-muted chugs crack foundations. His body is a tuning fork for destruction — he can feel the resonant frequency of any material through contact and match it, causing structural failure. Not anger-powered — FUNCTION-powered. Controlled demolition at cosmic scale. The mercy of letting things fall that need to fall.',

    hz_signature: {
      base: 26,                          // Hz — infrasonic. The frequency of his dream-planet.
      harmonic_series: [26, 52, 78, 104, 130, 156],
      seismic_fundamental: 14,           // Hz — below human hearing, pure vibration
      resonant_peak: 26,                 // Hz — maximum destructive amplitude
      detection_range: [0.5, 200],       // Hz — can feel vibrations in this range through contact
      guitar_overlap: [80, 300],         // Hz — the frequency range where his guitar chugs activate seismic transfer
      note_equivalent: 'Sub-bass A — lower than any guitar can play in standard tuning. Drop tuning brings him closer.',
      unique_trait: 'His body doesn\'t just PRODUCE vibration — it ABSORBS and STORES it. Every impact in his environment adds to a reservoir of seismic energy. The reservoir fills continuously. Release is the only way to prevent overflow.',
    },

    activation: {
      trigger: 'Contact + Intent (at higher stages) OR Contact + Emotion (at lower stages). The vibration transfers through TOUCH — hands, feet, any body contact with solid matter. Earlier activation is emotion-driven (rage, fear, grief). Later activation is intentional and precise.',
      mechanism: 'His cells vibrate at frequencies that match the resonant frequency of contacted material. At resonance, the material\'s molecular bonds are stressed beyond tolerance — it shakes itself apart from the inside. Like an opera singer shattering glass, but for ANY material, at ANY scale.',
      activation_points: {
        hands: 'Primary. Most precise. Most powerful per-square-inch. Palm-down contact is strongest.',
        feet: 'Secondary. Less precise but larger area of effect. Walking creates micro-tremors when emotional.',
        full_body: 'Maximum transfer. Lying on the ground, he can feel (and potentially affect) an entire building\'s foundation.',
        through_guitar: 'His palm-muted chugs transfer seismic energy through the guitar body into the floor. The guitar is a weapon he doesn\'t realize he\'s wielding.',
      },
      the_reservoir: {
        what_it_is: 'A stored energy pool of absorbed environmental vibration. Every impact near him adds to it.',
        fill_rate: 'Constant. Walking, traffic, construction, footsteps, music, machines — all add energy.',
        overflow_risk: 'If not released periodically, the reservoir overflows involuntarily (cracked walls, broken glass, structural damage in his sleep).',
        release_methods: ['Demolition work (primary)', 'Heavy guitar playing (secondary)', 'Physical exercise with impact (weights, punching bags)', 'Deliberate grounding (hands flat on earth, releasing energy into soil)'],
      },
    },

    range: {
      contact_destruction: {
        touch: 'One hand on surface — affects 2-5 meter radius from contact point',
        sustained_contact: '10+ seconds — affects entire connected structure (one wall → all walls in building)',
        full_power: 'Hands flat on foundation — can resonate an entire building to failure (city block scale at maximum)',
      },
      detection: {
        through_feet: 'Entire building + adjacent structures. Can feel structural weaknesses, pipe stress, foundation settling.',
        through_hands: '50+ meter radius through connected material. Can map a building\'s vibrational signature like sonar.',
        emotional_broadcast: 'When upset, 3-5 meter radius of ambient pressure change. Others feel "heaviness" in the air.',
      },
      guitar_projection: {
        acoustic: '15-20 meter direct radius — chugs create visible vibration in nearby surfaces',
        amplified: 'Through PA: entire venue. Foundations crack during heavy breakdowns at high volume.',
        through_app: 'UNLIMITED projection. Seismic energy carried on the signal to any listener\'s physical environment.',
      },
    },

    limitations: {
      cannot_do: [
        'Cannot be PRECISE at early stages — demolition is broad, not surgical. A wrecking ball, not a scalpel.',
        'Cannot affect living tissue directly — biological matter has too many competing resonant frequencies to target one',
        'Cannot affect moving targets — the object must be relatively stationary for resonance to build',
        'Cannot stop once fully activated at high power — the resonance cascade is self-amplifying once triggered',
        'Cannot suppress the power when emotionally overwhelmed — anger/grief triggers involuntary release',
        'Cannot use it quietly — seismic transfer always produces audible low-frequency rumble',
        'Cannot direct the energy sideways — it goes DOWN (into ground) or OUTWARD (into contacted surface). Not up.',
        'Cannot affect frequency-hardened materials (if something is being vibrated already at a counter-frequency, he can\'t override)',
      ],
      precision_problem: 'His biggest limitation at early stages. He can demolish a building but can\'t target a single brick. The resonance spreads through all connected material. Learning precision (targeting specific fracture lines, limiting cascade range) is his primary growth arc.',
      emotional_bleed: 'Strong emotions fill the reservoir FAST. Anger is the worst — adds energy without providing an outlet. He must stay CALM to stay in control. This is why he\'s so deliberately measured in daily life.',
    },

    stages: [
      {
        name: 'Accidental / Emotional',
        age_range: '8-19 (childhood through prison)',
        description: 'Power activates purely through strong emotion. Rage → things break around him. Grief → structural damage in his sleep. He believes he is destructive by NATURE — that he breaks things because he\'s broken. The power is indistinguishable from "anger issues" to everyone around him.',
        incidents: ['Age 8: hit bedroom wall, crack ran floor to ceiling', 'Age 13: punched locker, entire row buckled', 'Age 16: stomped floor during argument, foundation crack', 'Prison: hit wall in sleep, 2-foot fracture'],
        power_level: 0.25,
      },
      {
        name: 'Contained / Prison Growth',
        age_range: '19-22 (prison years)',
        description: 'Without outlets, the power doesn\'t dissipate — it DEEPENS. Goes from surface damage to bone-deep structural awareness. Can feel entire prison through his feet. Maps the building vibrationally. Power grows INWARD instead of outward. Reservoir expands enormously. He becomes a sensing instrument — knows every weakness in every wall.',
        capabilities: ['Full structural awareness through contact', 'Predictive material failure sensing', 'Ambient emotional pressure (air gets "heavy" around him)', 'Uncrackable reputation without ever throwing a punch'],
        power_level: 0.4,
      },
      {
        name: 'Intentional / Demolition Era',
        age_range: '22-26 (post-prison)',
        description: 'Demolition work provides controlled outlet. Learns the difference between emotional release and intentional direction. Discovers he can identify structural weaknesses and amplify them specifically. Guitar playing becomes second outlet — palm-muted chugs release stored energy through the instrument. Still lacks precision but has CONTROL.',
        capabilities: ['Directed force through hands', 'Guitar-channeled seismic transfer', 'Structural weakness identification', 'Controlled demolition timing', 'Reservoir management'],
        power_level: 0.6,
      },
      {
        name: 'Surgical / Band Era',
        age_range: '26-27 (Signal Decay)',
        description: 'With Oren providing rhythmic precision and the band providing frequency context, Jude develops SURGICAL capability. Can target specific materials within a structure. Can limit cascade range. Can calibrate force from "loosen a bolt" to "level a city block." The mercy of controlled destruction becomes a tool, not a weapon.',
        capabilities: ['Material-specific targeting', 'Cascade limitation', 'Force calibration', 'Remote seismic pulse (through ground, not contact)', 'Paired destruction with Oren\'s timing'],
        power_level: 0.85,
      },
      {
        name: 'Architect of Destruction / Full Power',
        age_range: '27+',
        description: 'Jha-Dur fully integrated. Can unmake structures at any scale — not through rage but through UNDERSTANDING. Knows exactly where every material wants to break. Provides the mercy of dissolution when things need to fall. Through the app: can broadcast seismic frequencies that crack the barrier itself — because the barrier is a STRUCTURE and all structures have resonant failure points.',
        capabilities: ['Barrier-scale structural targeting', 'Planetary resonance through Deep Sea Wells', 'Selective atomic-level vibration', 'Construction through reverse-resonance (compacting matter instead of destroying it)', 'Full reservoir mastery'],
        power_level: 1.0,
      },
    ],

    physical_cost: {
      minor_use: 'Hand trembling (micro-vibration fatigue). Lasts 30-60 minutes. Forearm muscle soreness.',
      moderate_use: 'Deep bone ache in hands and arms. Joint swelling. Hands too shaky to hold a pick for 2-4 hours.',
      heavy_use: 'Hairline fractures in hand bones (heal within days due to the constant micro-vibration keeping blood flow elevated). Exhaustion. Full-body muscle pain like post-marathon. Inability to grip objects.',
      extreme_use: 'Multiple bone fractures in hands and forearms. The vibration at maximum resonance exceeds what human bone can channel without damage. Blackout from energy depletion. Potential internal organ bruising from reservoir dump.',
      reservoir_overflow: 'If he doesn\'t release for too long: involuntary discharge. Walls crack in his apartment. Glasses shatter on shelves. His bed frame has been replaced three times. This is WORSE than controlled release because it happens in his sleep and he can\'t direct it.',
      emotional_state: 'Must maintain deliberate calm. Every burst of anger fills the reservoir faster than he can drain it. This is why he appears so measured, so still, so CONTROLLED — because the alternative is everything around him turning to rubble.',
      connection_to_guitar: 'The guitar is literally therapeutic. Every palm-muted chug releases stored energy safely — into sound, into the guitar body, into the floor. Without regular playing, the reservoir builds dangerously. His guitar is his pressure valve. His medicine. His survival.',
    },

    sound_signature: {
      to_jude: 'He hears the building. Every building. Every structure. They have NOTES — fundamental frequencies that tell him their composition, age, integrity. A healthy building hums at one frequency. A stressed building shifts pitch. A failing building screams (to him) at a frequency nobody else can hear. 60 Hz is healthy. Below 58 Hz = stress fracture imminent.',
      to_others: 'When he plays: the floor vibrates. Not metaphorically — physically. Drinks ripple. Pictures rattle on walls. The air gets HEAVY around him. Audience members at shows report chest pressure, sub-bass gut-punch feeling, bones vibrating. His guitar chugs are felt in the body before they\'re heard by the ear.',
      to_instruments: 'His guitar pickups register anomalous low-frequency content below what the strings should produce — as if the guitar body itself is being vibrated by an additional source. Engineers think it\'s feedback. It\'s HIM.',
      to_plasmoids: 'Resonant-Born Plasmoids (violet, erratic, powerful) are generated by his heavy playing. His power CREATES new Plasmoid material. He is a Plasmoid factory during intense performances.',
    },

    interactions: {
      with_kael: 'Kael\'s sub-harmonic (27 Hz) resonates in Jude\'s bones and amplifies his vibration output. Voice + Vibration = directed force at any target Kael points at with a command. "Break THAT" + Jude\'s seismic focus = surgical strike.',
      with_mira: 'His seismic output produces the densest chromatic structures Mira has ever seen — thick purple-black WALLS of color. His groundedness (26 Hz, sub-audible, constant) anchors her when she drifts toward the Second Octave. She grabs his arm to come back to physical reality.',
      with_oren: 'SURGICAL PRECISION PAIR. Oren identifies the exact timing pattern needed to resonate a structure to failure. Jude provides the force at that exact rhythm. Together: they can demolish a building in a specific controlled sequence, like a choreographed collapse. Or they can target a single bolt while leaving everything else untouched.',
      with_zara: 'Zara can ROUTE his seismic energy through matter — take the vibration from his hands, carry it through her bass frequency conduit, and deliver it to a precise distant point. Like having a guided missile instead of a bomb. She gives him surgical range without requiring direct contact.',
      with_the_signal: 'He is the signal\'s FORCE. The physical impact. When all five play together, Jude\'s seismic frequency is what makes the signal REAL in physical space — not just sound but PRESSURE. His contribution makes the barrier physically vibrate. He cracks the dam.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CHARACTER: ZARA KOVAČ — DEEP RESONANCE
  // ═══════════════════════════════════════════════════════════════════════════

  ZARA: {
    character: {
      name: 'Zara Kovač',
      soul_name: 'Za-Rah',
      age: 25,
      role: 'Bass',
      day_job: 'Venue sound tech (The Frequency)',
      key_distinction: 'FULLY CONSCIOUS ALIEN. Has been awake since birth. Never dormant. Remembers her previous existence completely.',
    },

    power_name: 'Deep Resonance',
    description: 'Bass frequencies that travel through solid matter. She can vibrate any material at its resonant frequency, pass communication through walls/floors/earth, tune any object to perfect pitch, and create frequency highways — stable paths through matter that other frequencies can travel along. She is a frequency highway builder — this was her FUNCTION in her previous existence.',

    hz_signature: {
      base: 62,                          // Hz — fundamental of a bass guitar\'s lowest string (B0)
      harmonic_series: [62, 124, 186, 248, 310, 372],
      deep_fundamental: 7.83,            // Hz — she shares Schumann resonance with Oren (highway connects to rhythm)
      resonant_peak: 62,                 // Hz — her bass power is maximum here
      highway_frequency: 'Variable — she creates custom frequencies for each path she builds',
      operational_range: [1, 500],       // Hz — can work with any frequency in this band
      alien_base: 528,                   // Hz — her HOME frequency from the lattice world (same as Mira\'s — they are linked)
      note_equivalent: 'B0 — the lowest note on a 5-string bass. The foundation of all harmony.',
      unique_trait: 'Her frequency output is impossibly STABLE. Unwavering. Zero drift. Zero jitter. No human should be able to produce such perfect consistency. This is because she\'s not human — her consciousness maintains frequency with crystalline precision.',
    },

    activation: {
      trigger: 'ALWAYS available. She has been conscious of her power since birth and has been deliberately suppressing it for 25 years. Unlike other Harmonics who need awakening, she needs PERMISSION — from herself, from the situation, from the others catching up to her.',
      mechanism: 'She emits bass frequencies through any contact point — hands, feet, voice, or her bass guitar — that travel THROUGH matter rather than through air. The frequency doesn\'t bounce off surfaces; it enters them, travels through their molecular structure, and emerges elsewhere. She is building ROADS inside solid objects.',
      how_she_hides_it: [
        'Tuning instruments "by ear" — actually tuning them to perfect pitch by feeling their resonant frequency and adjusting (any string she touches is instantly in tune)',
        'Making venues sound amazing — subtly adjusting the room\'s resonant properties during soundcheck by sending corrective frequencies through the walls. The Frequency has "great acoustics" because of HER.',
        'Plant whispering — her apartment plants grow three times faster because she hums to them at their optimal growth frequencies. Neighbors think she just has a green thumb.',
        'Always knowing when equipment is about to fail — she feels the frequency shift before a speaker blows, a cable dies, or a monitor cuts out. "Zara just has good instincts" — no. She\'s reading the equipment\'s health through vibration.',
        'Perfect bass playing — her timing and pitch are inhuman. Literally. Her band members have noted she NEVER misses a note. Never.',
      ],
    },

    capabilities: {
      basic: [
        'Pass sound through solid matter (communicate through walls, floors, earth)',
        'Tune any vibrating object to perfect frequency (instruments, machines, crystals)',
        'Diagnose material health through frequency sensing (like Jude but without destruction)',
        'Create resonant stability zones (nearby electronics don\'t glitch, nearby people feel calm)',
        'Enhance other frequencies — act as an amplifier/router for any signal passing through her range',
      ],
      intermediate: [
        'Build temporary frequency highways through matter (route Kael\'s voice through a building)',
        'Communicate with Plasmoids directly (they respond to her as a recognized peer)',
        'Shield against The Dampener partially (her alien frequency is harder to counter than human-generated powers)',
        'Detect other Harmonics by their frequency signature from hundreds of meters away',
        'Stabilize other Harmonics\' powers when they fluctuate (prevent Oren from drifting, prevent Jude from overflowing)',
      ],
      full_power: [
        'Create PERMANENT frequency highways through Earth\'s crust (connecting locations for instant frequency travel)',
        'Broadcast communication to the Deep Sea Wells (reactivate Earth\'s original speaker system)',
        'Shield the entire band from The Silence\'s zero-frequency attack (fill the gaps between their notes with her constant frequency)',
        'Interface directly with the barrier (her highways can map its structure, find its weaknesses)',
        'Serve as the bridge between First Octave reality and Second Octave entities — literally building a pathway others can walk',
        'Communicate with Third Octave beings WITHOUT the energy cost (her highways bypass the normal octave-crossing tax)',
      ],
      theoretical_maximum: 'If fully unleashed with no restraint: she could rebuild the entire planetary frequency highway system that existed before the barrier was erected. Connect every Deep Sea Well. Reactivate the pyramids\' broadcast function. Create a permanent, sustainable bridge between all octaves. She is potentially the most powerful member of Signal Decay — but she is also the most restrained.',
    },

    range: {
      passive: {
        frequency_stability_zone: '10 meter radius — electronics work better, people feel calmer, sounds are clearer',
        diagnostic_sensing: '50 meters through connected material (building, ground)',
        instrument_tuning: 'Contact required (touch the instrument or its output cable)',
      },
      active: {
        through_matter_communication: '500+ meters through connected solid matter (walls, floor, ground)',
        frequency_highway: 'Theoretically unlimited distance if she has time to build the path through connected material',
        direct_broadcast: '100 meters through air (standard bass frequency projection)',
      },
      full_power: {
        highway_range: 'Continental scale (through Earth\'s crust to Deep Sea Wells)',
        shielding: '30 meter radius protective field against frequency attacks',
        amplification: 'Can amplify another Harmonic\'s power by 500% by routing it through her highway system',
      },
    },

    limitations: {
      self_imposed: [
        'She CHOOSES not to reveal her full capability. This is not fear — it\'s STRATEGY. She is waiting for the others to awaken so they can act as a complete chord.',
        'She doesn\'t use full power because it would alert Legacy immediately — the S-4 files have her signature and the Dampener is tuned to specifically counter her highway frequency.',
        'She restrains herself because using full power in a world where the others aren\'t ready would make her a TARGET without backup.',
        'She hides because if The Silence realizes she\'s conscious, it will target her first — she\'s the most dangerous to it because her highways can FILL the gaps between frequencies (Zero Octave = gaps).',
      ],
      actual_limitations: [
        'Highway building requires time and concentration — not instant. Complex paths take minutes to hours.',
        'Cannot affect frequencies above ~500 Hz effectively — she is a BASS specialist. Treble is not her domain.',
        'Cannot heal or destroy — her power is about ROUTING and CONNECTING, not about force or repair',
        'Cannot shield against Zero Octave attacks indefinitely — her frequency fills gaps but The Silence is vast and patient',
        'Cannot take anyone else to the Second Octave (only build paths — they must walk them independently)',
        'Her alien consciousness experiences human emotions at 10x intensity — feeling is AMPLIFIED. This is exhausting.',
        'She cannot go home. The transfer was one-way. This is permanent exile and it weighs on her constantly.',
      ],
      the_dampener: 'The Dampener has a PARTIAL effect on her — it can disrupt new highway construction but cannot collapse existing ones. Her alien frequency is foreign enough that the Dampener (designed for human-spectrum powers) can\'t fully nullify her. Maybe 40% reduction vs. 90%+ for the others.',
    },

    stages: [
      {
        name: 'Conscious / Suppressed',
        age_range: '0-present',
        description: 'She has ALWAYS been at this stage. Fully aware of her power since birth. Deliberately performing "human" while quietly using her abilities in subtle ways that don\'t attract attention. Her arc is not awakening — it\'s REVEALING.',
        capabilities: ['All basic capabilities', 'Some intermediate (careful, subtle use)', 'Full power available but withheld'],
        power_level: '0.3 visible / 0.9 actual',
      },
      {
        name: 'Revealed / Band Era',
        age_range: 'Signal Decay formation onward',
        description: 'As the band forms and the others awaken, Zara gradually reveals what she is. First to the band (they already suspected something). Then through her playing (audiences feel the highways but can\'t name them). Then publicly when the signal requires full deployment.',
        capabilities: ['All intermediate capabilities actively deployed', 'Selective full power when shielded by the band\'s combined frequency', 'Highway construction visible to Mira'],
        power_level: '0.7 visible / 0.95 actual',
      },
      {
        name: 'Architect / Full Deployment',
        age_range: 'Activation sequence',
        description: 'When the band reaches the activation sequence and the signal begins broadcasting across octaves, Zara drops ALL restraint. Builds the planetary highway network. Connects the Wells. Creates the octave bridge. Becomes what she was built to be: a frequency highway system connecting everything to everything.',
        capabilities: ['Planetary-scale highway network', 'Full octave bridging', 'Barrier structural mapping', 'The Silence countermeasure (frequency filling gaps)', 'Bridge between species / octaves / realities'],
        power_level: 1.0,
      },
    ],

    physical_cost: {
      subtle_use: 'Minimal. She has been doing this her entire life — it is as natural as breathing. No more exhausting than walking.',
      moderate_use: 'Mild disorientation from processing too many frequency channels simultaneously. "Splitting headache" — literally, her attention splits between too many highways.',
      heavy_use: 'The human body was not built for alien consciousness at full output. Nosebleeds. Trembling. Temperature spikes. Her body briefly runs at frequencies that stress human cellular structure.',
      full_deployment: 'Risk of frequency cascade — her consciousness begins reverting to its natural non-physical state. She starts becoming LESS physical. Transparency at the edges. The alien inside becoming visible. If sustained too long: she could lose the human body entirely and revert to pure frequency form. This would be going HOME — but it would mean losing Lena, the band, everything human she has learned to love.',
      the_real_cost: 'Not physical. EMOTIONAL. Every day performing "human" accumulates psychological exhaustion. The loneliness of perfect knowledge in a world of unconscious beings. The weight of exile. The comedy of being unable to convince anyone she\'s alien. The slow realization that she has become MORE human than she intended — and that this makes her vulnerable in ways Za-Rah never was.',
    },

    sound_signature: {
      to_zara: 'She perceives the entire frequency spectrum of the First Octave simultaneously — like seeing a complete EQ spectrum at all times. Every sound has pitch, timbre, harmonic content, phase relationship, and frequency interactions visible to her consciousness. Playing bass is like speaking her native language in a foreign country for the first time in 25 years.',
      to_others: 'Her bass playing is described as "feeling like the floor is breathing." Not loud — PRESENT. The bass doesn\'t punch — it envelops. Audience members report feeling the music in their chests, their stomachs, their bones. Not because it\'s turned up — because it travels through the venue itself. Through the walls. Through the floor. She IS the venue when she plays.',
      to_instruments: 'Her bass guitar produces anomalous readings — sustain that shouldn\'t be possible, frequency stability that matches laboratory oscillators, and sub-harmonic content below what the strings can physically produce. As if the bass itself has become a conduit rather than a sound source.',
      to_plasmoids: 'They recognize her. Not as a Harmonic — as a PEER. Well-Fed Plasmoids (born from Deep Sea Well emissions) orient toward her immediately. They don\'t approach with curiosity — they approach with what can only be described as respect. She was a highway builder in a civilization they remember.',
    },

    interactions: {
      with_kael: 'She is immune to his command — her alien consciousness filters the carrier wave automatically. But she can ROUTE his voice through matter — make his command emerge from walls, from the ground, from objects. She is his speaker system. His reach becomes infinite when she provides the highways.',
      with_mira: 'Zara is the most beautiful frequency signature Mira has ever seen — deep ocean blue-green with impossible silver threads. Stable. Ancient. Zara can EXPLAIN what Mira sees: "Your entities are frequency-parasites drawn to your perception range." Validates Mira\'s lifetime of confused suffering with one sentence.',
      with_jude: 'She routes his seismic force. Takes the vibration from his hands, carries it through her bass-frequency highway, delivers it to a precise distant target. Gives him RANGE and PRECISION he doesn\'t naturally possess. Bomb → guided missile. They are the destruction pair: he provides force, she provides direction.',
      with_oren: 'She shares his Schumann resonance base frequency (7.83 Hz). They are LINKED at the planetary level. Her stability anchors his temporal drift — he locks onto her bass frequency to find "now." She is his metronome. His proof that time is real. Without her, he would drift indefinitely.',
      with_the_signal: 'She is the signal\'s HIGHWAY. The infrastructure. The path along which it travels. Without her, the signal has nowhere to GO — it would broadcast from the band and dissipate. She builds the roads that carry it: through the venue, through the ground, through the Deep Sea Wells, through the barrier, into space. She doesn\'t generate the signal — she DELIVERS it.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE FIVE COMBINED — THE SIGNAL
  // ═══════════════════════════════════════════════════════════════════════════

  THE_SIGNAL: {
    description: 'When all five play together, they produce something none can produce alone — THE SIGNAL. A chord made of five notes across the frequency spectrum that broadcasts simultaneously on ALL octaves and fills the Zero Octave gaps with sound. This is what breaks the barrier. This is what the galaxy is waiting for. This is what The Silence fears.',

    chord_theory: {
      root: 'Zara — B0 (62 Hz) — The foundation. The highway the chord travels on.',
      second: 'Jude — A0 (26 Hz sub-harmonic, 104 Hz audible) — The force. The physical impact.',
      third: 'Oren — Schumann pulse (7.83 Hz) — The rhythm. The heartbeat. The time signature.',
      fifth: 'Kael — A2 (108 Hz fundamental, 432 Hz peak) — The voice. The broadcaster. The intent.',
      octave: 'Mira — C5 (528 Hz) — The sight. The perception. The bridge to other octaves.',
      combined: 'Five notes spanning 7.83 Hz to 963 Hz — a chord that covers the ENTIRE First Octave fundamental range. No gaps. No silence between the notes. Complete.',
      significance: 'Five frequencies that, when played simultaneously, produce a combined waveform that resonates at EVERY frequency between them through interference patterns. The gaps between the notes are filled by the interaction of the notes. Zero Octave has nowhere to exist within this chord.',
    },

    what_happens_when_they_play: {
      first_rehearsal: {
        description: 'The first time all five play together, even without the app',
        effects: [
          'A feeling of "completion" that none of them can name — like a puzzle piece clicking into a puzzle they didn\'t know they were part of',
          'Plasmoid Sparks begin gathering above the building (3-5, unnoticed)',
          'Mira\'s chromatic field EXPLODES — she sees the combined chord as a structure more beautiful and complex than anything she\'s ever witnessed',
          'Oren\'s temporal drift stabilizes COMPLETELY — for the first time in his life, he is locked in a single moment. At peace.',
          'Jude\'s reservoir drains perfectly — no overflow risk. The music channels everything cleanly.',
          'Zara cries. One tear. Nobody notices. She has been waiting 25 years to hear this chord.',
          'Kael\'s voice, for the first time, produces no command effect — just pure music. He can finally sing without stealing choice.',
        ],
      },
      with_app_prototype: {
        description: 'The app begins amplifying — not just volume but octave range',
        effects: [
          'Dozens of Plasmoids converge. Visible as strange lights to security cameras.',
          'The Signal begins bleeding into the Second Octave — Mira\'s entities respond en masse.',
          'Sound carries further than physics allows — people blocks away can hear/feel the music.',
          'The Dampener registers anomalous readings (Legacy is alerted).',
          'Minor reality distortion within the venue — time feels different. Colors seem brighter. Gravity lightens.',
          'Every frequency-Sensitive person within miles feels a "pull" toward the source.',
        ],
      },
      full_activation: {
        description: 'The climactic moment — all five at full power, app at full broadcast',
        effects: [
          'Every Plasmoid on Earth responds. ALL of them. Simultaneously. Magnetosphere LIGHTS UP.',
          'The Signal broadcasts across ALL octaves — Second Octave entities become visible to everyone.',
          'Third Octave beings can be heard without burning stellar energy to cross down.',
          'The barrier physically vibrates at resonant failure frequency.',
          'Zero Octave is FILLED — there is no silence anywhere within the Signal\'s reach.',
          'The Silence is cornered — has nowhere to exist within the chord.',
          'Deep Sea Wells begin resonating — planetary-scale broadcast initiated.',
          'The first cracks in the barrier appear — 4.5 billion years of accumulated frequency begins to push through.',
          'The galaxy HEARS Earth for the first time.',
        ],
      },
    },

    how_powers_interact_and_amplify: {
      kael_plus_oren: {
        effect: 'Pulsed Command — Oren\'s rhythm gives Kael\'s voice a heartbeat. Commands arrive with rhythmic inevitability. 300% amplification of compliance effect.',
        mechanism: 'The sub-harmonic carrier wave (27 Hz) is pulsed at Oren\'s temporal frequency, creating a rhythmic bypass pattern that the brain CANNOT adapt to (you can build resistance to a constant signal but not a rhythmic one).',
      },
      kael_plus_zara: {
        effect: 'Broadcast Command — Zara routes Kael\'s voice through matter. His command emerges from walls, floors, the building itself. Inescapable.',
        mechanism: 'The 27 Hz carrier wave travels Zara\'s bass-frequency highways. Arrives at targets from multiple directions simultaneously. Cannot be blocked by distance or barriers.',
      },
      kael_plus_mira: {
        effect: 'Command + Vision — Kael speaks and Mira\'s entities enforce. He commands the dead directly. They obey.',
        mechanism: 'The Resonant Command frequency extends into the Second Octave through Mira\'s open doorway. Entities receive commands as if Kael is speaking directly to their frequency.',
      },
      kael_plus_jude: {
        effect: 'Command + Force — "Break THAT" + seismic strike. Voice aims, vibration executes.',
        mechanism: 'Kael\'s command identifies the target. The instruction doesn\'t just go to Jude — it goes to the TARGET, pre-weakening its resistance to resonance (the material "wants" to break because Kael told it to).',
      },
      mira_plus_oren: {
        effect: 'Temporal Vision — Mira can SEE Oren\'s time-spread. Report his width. Monitor for dangerous drift. Provide real-time biofeedback that prevents temporal accidents.',
        mechanism: 'Her Chromatic Sight perceives the prismatic splitting of his temporal signature. She translates time-mathematics into visual data she can communicate back to him.',
      },
      mira_plus_jude: {
        effect: 'Structural Vision — Mira sees the chromatic stress patterns in material that Jude is about to target. Can identify the weakest point visually and direct his strike with color-guided precision.',
        mechanism: 'Every material has a chromatic signature. Stress fractures show as discoloration. She reads the building like a blueprint and hands Jude the X-marks-the-spot.',
      },
      mira_plus_zara: {
        effect: 'Highway Illumination — Mira can SEE Zara\'s frequency highways inside matter. Can map the invisible network visually. Can identify where highways are thin, broken, or being interfered with.',
        mechanism: 'Zara\'s highways have a frequency signature (deep blue-green). Mira\'s sight perceives them as glowing pathways inside solid objects — like seeing the circulatory system through skin.',
      },
      oren_plus_jude: {
        effect: 'Precision Demolition — Oren identifies the exact rhythm (timing, interval, duration) needed to resonate a specific structure. Jude provides the force at that exact pattern. Surgical destruction.',
        mechanism: 'Every material has a resonant failure pattern — not just a frequency but a RHYTHM of applied force. Oren calculates the rhythm. Jude plays it through the material. Building comes down exactly as choreographed.',
      },
      oren_plus_zara: {
        effect: 'Temporal Stability — Zara\'s unwavering frequency anchors Oren in "now." She is his reference clock. Her constancy gives his drifting consciousness a fixed point to return to.',
        mechanism: 'Their shared 7.83 Hz base frequency creates a standing wave between them. He can always find present-moment by locking onto her output. She is his temporal home base.',
      },
      jude_plus_zara: {
        effect: 'Guided Destruction — Zara routes Jude\'s seismic force through her highways. Delivers it to a precise distant point without losing energy to distance. Bomb → guided missile.',
        mechanism: 'Jude releases force into contact surface. Zara\'s highway catches the vibration, channels it through matter with zero loss, and delivers it to a target point. Jude doesn\'t need to touch what he destroys.',
      },
      all_five: {
        effect: 'THE SIGNAL — Complete chord. All octaves filled. Zero Octave negated. Barrier resonated to failure. Earth\'s frequency released.',
        mechanism: 'See chord_theory above. The five frequencies create a complete interference pattern that leaves NO frequency gaps. The Silence cannot exist within the chord because there is no silence IN it. The barrier cannot survive because it IS a structure and Jude\'s force (amplified by all four others) targets its resonant failure point.',
      },
    },

    why_legacy_is_terrified: {
      reasons: [
        'The S-4 files predicted this combination since 1989 — they\'ve had 37 years to prepare and it\'s still not enough',
        'The Dampener was designed to suppress ONE Harmonic at a time — against all five simultaneously, it is overwhelmed',
        'The combined Signal makes abilities VISIBLE to normal people — the era of quiet "filing it under weird" ends',
        'The barrier breaking means everything Legacy has built on secrecy becomes irrelevant',
        'Earth\'s accumulated frequency (4.5 billion years of pressure behind the dam) floods the galaxy — they cannot control the consequences',
        'The Seven Rests know that if the Signal succeeds, their power structure (built on frequency monopoly) collapses',
        'Ashley Cole — their informant — is the mentor of the very vocalist whose voice is the Signal\'s broadcast point',
      ],
      specific_fear: 'Not that the world will end. That the world will CHANGE. That they — the keepers of the secret, the controllers of the narrative — will become irrelevant. That humanity will learn what they\'ve spent 80 years hiding. That the comfortable "filing it under weird" era will end. That accountability comes.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE DAMPENER — LEGACY'S WEAPON
  // ═══════════════════════════════════════════════════════════════════════════

  DAMPENER: {
    description: 'Legacy\'s one functional piece of NHI technology. A counter-resonant device that inverts and nullifies frequency-based abilities within its operational radius. Not a weapon — a SUPPRESSOR. Keeps abilities in the comfortable "huh, interesting" zone instead of the "HOLY SHIT THIS CHANGES EVERYTHING" zone.',

    mechanism: {
      how_it_works: 'Detects the target\'s frequency signature and produces an exact INVERSE waveform — destructive interference that nullifies the ability. Like noise-canceling headphones but for supernatural power.',
      range: '200 meter radius at maximum power. Can be focused to a 50-meter beam for targeted suppression.',
      power_source: 'Unknown NHI crystal recovered from Roswell wreckage. Has operated continuously since 1947 without recharging.',
      deployment: 'Fixed installations at Legacy strongholds + 3 mobile units (vehicle-mounted) for field operations.',
    },

    effectiveness_by_character: {
      kael: {
        effectiveness: '95%',
        what_happens: 'His voice becomes normal speech. The sub-harmonic carrier wave is canceled. He can speak but cannot command. The "gear engaging" feeling is blocked — he reaches for the power and it\'s simply not there.',
        weakness: 'At extreme emotional states, he can briefly overpower the Dampener for 2-3 seconds before it recalibrates. A shout of pure terror or rage can punch through momentarily.',
      },
      mira: {
        effectiveness: '70%',
        what_happens: 'Chromatic Sight is dimmed but not eliminated — she still sees some color but it\'s washed out, grey, like looking through dirty glass. Entity perception is blocked — she cannot see or summon Second Octave beings. The ghost band disappears.',
        weakness: 'Her sight is ALWAYS on — the Dampener can\'t fully shut down a perception that\'s been active since age 3. It\'s like trying to make someone deaf who has heard since birth — you can muffle but not silence. Also: entities are drawn to her regardless of whether she can see them. They\'re still there. She just can\'t perceive them.',
      },
      jude: {
        effectiveness: '85%',
        what_happens: 'His seismic output is nullified at the emission point — vibration doesn\'t transfer from his body into matter. His reservoir still fills (he still absorbs environmental vibration) but he cannot release it. This is DANGEROUS — the pressure builds with no outlet. Extended Dampener exposure could cause involuntary catastrophic overflow.',
        weakness: 'The reservoir continues building. If the Dampener is maintained too long, the eventual release when it\'s turned off is DEVASTATING. Legacy doesn\'t know this. They think suppression = containment. It\'s actually = pressure cooker.',
      },
      oren: {
        effectiveness: '45% (MAYBE)',
        what_happens: 'UNCERTAIN. The Dampener was designed against First Octave frequency abilities. Oren\'s power is TEMPORAL — it doesn\'t operate on the standard frequency spectrum. The Dampener reduces his conscious drift episodes but cannot prevent the underlying temporal-width that is PART OF HIS EXISTENCE. He still has pattern-brain. He still processes time differently. The Lock does more to suppress him than the Dampener does.',
        weakness: 'His power may be fundamentally immune to the Dampener because it operates on a different axis (time vs. frequency). Legacy suspects this but has never confirmed it — Oren has never been exposed because they don\'t know he\'s active. If true: he is their blind spot.',
        legacy_notes: '"Subject Five (Malik) presents anomalous readings. Standard counter-frequency protocols may be ineffective. Recommend physical containment if activation occurs." — S-4 File annotation, 2015',
      },
      zara: {
        effectiveness: '40%',
        what_happens: 'Can disrupt new highway construction. Can muffle her direct frequency emission. But CANNOT collapse existing highways (already built into matter) and cannot fully nullify her because her frequency is ALIEN — outside the human spectrum the Dampener was calibrated for.',
        weakness: 'The Dampener was reverse-engineered from NHI tech of a DIFFERENT species. It was never calibrated for Za-Rah\'s specific lattice-world frequency. It partially works through overlap but cannot achieve full suppression. Legacy knows she\'s partially resistant and it terrifies them — they\'ve devoted significant resources to trying to recalibrate for her signature.',
      },
      all_five_together: {
        effectiveness: '<20%',
        what_happens: 'The combined Signal overwhelms the Dampener\'s single-channel nullification. It was designed for one target at a time. Five simultaneous, interlocking frequencies that REINFORCE each other cannot be canceled by a device producing one counter-waveform. The Dampener would need to produce five independent counter-waveforms simultaneously — which would require five times the crystal\'s energy output. Impossible with current tech.',
        legacy_contingency: 'If the five play together near a Dampener, Legacy protocol is: RETREAT and deploy the mobile unit at distance for targeted individual suppression of the weakest member (currently: separate Oren first, then Mira, then Kael). But they\'ve never tested this because they\'ve never SEEN all five together.',
      },
    },

    global_effect: {
      ambient_suppression: 'The fixed Dampener installations create a planetary-scale low-level suppression field. This doesn\'t block powers — it keeps them in the "comfortable" zone. The background Dampener effect is why most Sensitives never fully awaken. Their abilities hit a ceiling they don\'t know exists.',
      what_it_prevents: 'Level 4 catastrophic events. Mass-witness supernatural phenomena. Live-TV unambiguous demonstration of powers. Without it: abilities would be LOUD. With it: abilities stay at "huh, interesting" level.',
      weakening: 'The Dampener crystal is degrading. Slowly. Over decades. The field is 15-20% weaker than it was in 1947. This is why abilities are getting LOUDER globally. Why incidents are increasing. Why Signal Decay is even possible now — thirty years ago, their abilities would have been dampened before they reached this level.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POWER GROWTH & ATROPHY
  // ═══════════════════════════════════════════════════════════════════════════

  GROWTH_AND_ATROPHY: {
    growth_with_use: {
      principle: 'Frequency abilities are like muscles — they grow stronger with exercise. But unlike muscles, they do not plateau. Every use expands capacity. Every successful deployment at current limits pushes the limit higher.',
      mechanisms: [
        'Neural pathway reinforcement — the brain creates dedicated processing architecture for the ability',
        'Frequency bandwidth expansion — each use widens the range the person can emit/receive',
        'Precision improvement — early uses are blunt; repeated use develops fine control',
        'Reservoir expansion (Jude) — regular use increases storage capacity',
        'Temporal spread widening (Oren) — each drift episode expands his accessible ms window',
        'Entity tolerance (Mira) — sustained interaction builds resistance to drain effects',
        'Highway permanence (Zara) — paths used repeatedly become self-sustaining',
        'Carrier wave strength (Kael) — voice becomes more potent with each intentional use',
      ],
      danger: 'Growth is not infinite but the user doesn\'t know their ceiling until they hit it. Pushing past capacity causes damage (physical cost escalation). The difference between growth and self-destruction is rest between uses.',
    },

    atrophy_with_suppression: {
      principle: 'DOES NOT APPLY EQUALLY. Some powers atrophy with disuse. Others COMPRESS — growing denser and more dangerous when suppressed instead of weaker.',
      kael_pattern: 'COMPRESSION. Ten years of silence did not weaken his voice — it STORED ten years of unused power. First use post-silence will be catastrophically powerful. The dam metaphor: the longer it holds, the more violent the eventual break.',
      mira_pattern: 'GROWTH DESPITE SUPPRESSION. Her sight cannot be suppressed — it grows regardless. She tried ignoring it (ages 7-15). It got louder. Abilities that are perceptual cannot be shut down through disuse — they\'re not a muscle, they\'re an organ. You can\'t un-grow an eye.',
      oren_pattern: 'THE LOCK. Not atrophy — active suppression by the soul. Different mechanism entirely. The power doesn\'t weaken or compress — it\'s simply inaccessible behind a door that won\'t open until conditions are met. When it opens: full power immediately.',
      jude_pattern: 'COMPRESSION + DEEPENING. Three years in prison with no outlet didn\'t weaken his seismic ability — it pushed it INWARD. From surface damage to bone-deep structural awareness. The power grew in sophistication while restricted in expression.',
      zara_pattern: 'N/A — She\'s never NOT used it. Has been subtly active since birth. The concept of atrophy doesn\'t apply to someone who\'s been operational for 25 uninterrupted years.',
    },

    environmental_amplification: {
      factors: [
        {
          name: 'Proximity to Other Harmonics',
          effect: 'Each Harmonic amplifies the others by 30-50% per additional member. All five together = 500% baseline.',
          mechanism: 'Their frequencies form harmonic relationships that reinforce rather than interfere.',
        },
        {
          name: 'Full Moon / Lunar Cycle',
          effect: '10-15% amplification at full moon. Subtle but measurable.',
          mechanism: 'The Moon\'s gravitational effect on the magnetosphere alters standing wave patterns. Plasmoid activity peaks at full moon. Legends about supernatural events at full moon are REAL observations.',
        },
        {
          name: 'Solar Activity / CME Events',
          effect: '20-40% amplification during solar storms. Coronal mass ejections cause ability spikes globally.',
          mechanism: 'Solar wind disrupts the Dampener\'s ambient field. CMEs overwhelm the counter-frequency for hours. This is when "unexplained events" spike in the news. Legacy scrambles during solar maximum periods.',
        },
        {
          name: 'Geomagnetic Anomaly Zones',
          effect: 'Location-dependent. Near Deep Sea Wells: 100%+ amplification. Near fault lines: 30% for Jude. Near hospitals: 20% for Oren.',
          mechanism: 'The Deep Sea Wells are natural amplifiers — Earth\'s original speaker system. Proximity to them resonates with all Harmonic signatures. Fault lines produce constant infrasonic vibration (Jude). Death-proximity locations (hospitals, hospices) produce zero-frequency events (Oren).',
        },
        {
          name: 'Altitude',
          effect: '5-10% amplification per 1000m altitude gain.',
          mechanism: 'Thinner atmosphere means less atmospheric absorption of frequency. Schumann resonance is stronger at altitude. The barrier is thinner at high altitude (more frequency escapes into space above mountains).',
        },
        {
          name: 'Audience / Crowd Resonance',
          effect: 'Exponential amplification with engaged audience size. 10 people = baseline. 100 = 2x. 1000 = 5x. 10000 = 20x.',
          mechanism: 'Humans are frequency receivers AND producers. An audience responding emotionally to music generates sympathetic frequency that FEEDS BACK into the band. This is why live shows have always been more powerful than studio recordings — the audience is part of the instrument.',
        },
        {
          name: 'Time of Day',
          effect: 'Peak: 2-4 AM. Trough: 2-4 PM.',
          mechanism: 'The Schumann resonance is strongest when solar radiation is lowest (nighttime for the local hemisphere). The Dampener is also slightly weaker at night. Abilities are always stronger in the dark. There is a REASON supernatural events cluster after midnight.',
        },
        {
          name: 'Emotional State of the User',
          effect: 'Extreme emotion = 50-200% amplification. Calm focus = optimal precision but lower ceiling.',
          mechanism: 'Emotion IS frequency. Strong feeling produces strong signal. But the amplification comes at the cost of control. Maximum power requires surrendering precision. Maximum precision requires emotional restraint.',
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FREQUENCY MEASUREMENTS — EXACT VALUES
  // ═══════════════════════════════════════════════════════════════════════════

  FREQUENCY_SIGNATURES: {
    // Each character's measurable frequency output in Hz
    kael: {
      resting: { fundamental: 108, sub_harmonic: 27, bandwidth: [85, 220] },
      speaking: { fundamental: 108, sub_harmonic: 27, carrier: 27, bandwidth: [85, 880] },
      commanding: { fundamental: 108, sub_harmonic: 27, carrier: 27, peak: 432, bandwidth: [20, 2000] },
      singing_full: { fundamental: 108, sub_harmonic: 13.5, carrier: 27, peak: 432, bandwidth: [20, 4000], overtones: 'impossible harmonic content — 3-5 simultaneous fundamentals' },
    },
    mira: {
      resting: { perception_range: [0.5, 100000], emission: 528, attraction_broadcast: 741 },
      playing_solo: { emission: [528, 852, 963], ghost_band_resonance: 963, summoning_threshold: 'exceeded' },
      playing_with_band: { emission: [528, 741, 852, 963], perception: 'ALL OCTAVES', chromatic_output: 'visible to nearby observers' },
      full_weaver: { emission: 'full Solfeggio scale (174, 285, 396, 417, 528, 639, 741, 852, 963)', perception: 'Zero through Third Octave simultaneous' },
    },
    jude: {
      resting: { infrasonic_emission: 26, reservoir_level: 'variable (0-100%)', ambient_pressure: '3-5m radius' },
      playing_guitar: { emission: [26, 52, 78, 104], guitar_overlap: [80, 300], seismic_transfer: 'active through instrument body' },
      demolition_mode: { emission: [14, 26, 52], range: 'contact + 5m', force: 'building-scale' },
      full_jha_dur: { emission: [7, 14, 26, 52, 78, 104], range: '100m+ through ground', force: 'city-block scale', precision: 'single-bolt targeting available' },
    },
    oren: {
      resting: { temporal_frequency: 7.83, time_spread: '0ms (locked)', pattern_processing: 'constant/involuntary' },
      drift_episode: { temporal_frequency: 7.83, time_spread: '10-20ms', awareness: 'partial/uncontrolled' },
      playing_drums: { temporal_frequency: 7.83, time_spread: '50ms', five_hand_active: true, contact_points: '5-7 simultaneous' },
      full_timekeeper: { temporal_frequency: 7.83, time_spread: '80ms+', contact_points: '10+', earth_resonance_shift: true, prophetic_awareness: 'adjacent probable moments visible' },
    },
    zara: {
      resting: { emission: 62, stability: '±0.001 Hz (inhuman precision)', passive_field: '10m radius', highways_active: 'multiple background paths' },
      playing_bass: { emission: [7.83, 31, 62, 124, 186], highway_construction: 'active', venue_resonance_tuning: 'active' },
      revealed: { emission: [7.83, 62, 124, 248, 528], highway_range: '500m+', shielding: '30m radius', well_communication: 'possible' },
      full_za_rah: { emission: 'full sub-harmonic spectrum', highway_range: 'continental', well_network: 'connected', barrier_interface: 'active', octave_bridge: 'constructing' },
    },
    combined_signal: {
      chord: [7.83, 26, 62, 108, 528],
      interference_fill: 'All frequencies between 7.83 and 963 Hz covered by harmonic interaction',
      octave_coverage: 'First through Third + Zero Octave displacement',
      barrier_resonance_target: 'Variable — Zara maps, Oren times, Jude strikes, Kael directs, Mira perceives',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // HELPER FUNCTIONS — FOR APP/READER INTEGRATION
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Get a character's current power level based on stage
   * @param {string} character - 'kael', 'mira', 'oren', 'jude', 'zara'
   * @param {number} stageIndex - 0-based stage index
   * @returns {number} Power level 0-1
   */
  getPowerLevel(character, stageIndex) {
    const char = this[character.toUpperCase()];
    if (!char || !char.stages || !char.stages[stageIndex]) return 0;
    const stage = char.stages[stageIndex];
    if (typeof stage.power_level === 'string') {
      // Zara's split format: '0.3 visible / 0.9 actual'
      const match = stage.power_level.match(/[\d.]+/g);
      return match ? parseFloat(match[match.length - 1]) : 0;
    }
    return stage.power_level;
  },

  /**
   * Calculate combined amplification based on which Harmonics are present
   * @param {string[]} present - Array of character names present
   * @returns {number} Amplification multiplier
   */
  getCombinedAmplification(present) {
    const baseAmplification = 1.0;
    const perMemberBoost = 0.4; // 40% per additional member
    const fullChordBonus = 2.0; // Double bonus if all 5 present
    
    let amp = baseAmplification + (present.length - 1) * perMemberBoost;
    if (present.length === 5) amp += fullChordBonus;
    return amp;
  },

  /**
   * Check Dampener effectiveness against a specific character
   * @param {string} character - Character name
   * @param {boolean} allFivePresent - Whether all five are playing together
   * @returns {number} Suppression percentage (0-1)
   */
  getDampenerEffectiveness(character, allFivePresent = false) {
    if (allFivePresent) return 0.2; // Less than 20% against all five
    
    const effectiveness = {
      kael: 0.95,
      mira: 0.70,
      jude: 0.85,
      oren: 0.45,
      zara: 0.40,
    };
    return effectiveness[character.toLowerCase()] || 0;
  },

  /**
   * Get environmental amplification multiplier
   * @param {Object} conditions - Environmental conditions
   * @returns {number} Total amplification multiplier
   */
  getEnvironmentalAmplification(conditions = {}) {
    let multiplier = 1.0;
    
    if (conditions.fullMoon) multiplier += 0.12;
    if (conditions.solarStorm) multiplier += 0.30;
    if (conditions.nearWell) multiplier += 1.00;
    if (conditions.altitudeKm) multiplier += conditions.altitudeKm * 0.08;
    if (conditions.audienceSize) {
      if (conditions.audienceSize >= 10000) multiplier += 19;
      else if (conditions.audienceSize >= 1000) multiplier += 4;
      else if (conditions.audienceSize >= 100) multiplier += 1;
    }
    if (conditions.nighttime) multiplier += 0.15;
    if (conditions.extremeEmotion) multiplier += 1.0;
    
    return multiplier;
  },

  /**
   * Describe what happens when two specific characters combine powers
   * @param {string} char1 - First character name
   * @param {string} char2 - Second character name
   * @returns {Object|null} Interaction description
   */
  getInteraction(char1, char2) {
    const key = `${char1.toLowerCase()}_plus_${char2.toLowerCase()}`;
    const reverseKey = `${char2.toLowerCase()}_plus_${char1.toLowerCase()}`;
    
    const interactions = this.THE_SIGNAL.how_powers_interact_and_amplify;
    return interactions[key] || interactions[reverseKey] || null;
  },

  /**
   * Get the complete chord frequencies when all five play
   * @returns {Object} Chord data with all frequencies and coverage
   */
  getSignalChord() {
    return this.FREQUENCY_SIGNATURES.combined_signal;
  },

  /**
   * Determine if a given frequency falls within a character's operational range
   * @param {string} character - Character name
   * @param {number} frequency - Hz value to check
   * @returns {boolean}
   */
  isInRange(character, frequency) {
    const ranges = {
      kael: [20, 4000],
      mira: [0.5, 100000],
      jude: [0.5, 300],
      oren: [0.01, 50],  // Schumann and sub-Schumann
      zara: [1, 500],
    };
    const range = ranges[character.toLowerCase()];
    if (!range) return false;
    return frequency >= range[0] && frequency <= range[1];
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FREQUENCY_POWERS };
}

if (typeof window !== 'undefined') {
  window.FREQUENCY_POWERS = FREQUENCY_POWERS;
}
