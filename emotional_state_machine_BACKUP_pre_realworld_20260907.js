// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — EMOTIONAL STATE MACHINE
// ═══════════════════════════════════════════════════════════════════════════════
// Persistent, multi-dimensional emotional simulation for five interconnected
// characters. Tracks energy, openness, anxiety, warmth, and focus on 0-100.
//
// Design lineage (EMOTIONAL_STATE_MACHINE_RESEARCH.md):
//   Dwarf Fortress — memory displacement · RimWorld — asymmetric lag, thresholds
//   Disco Elysium — thought maturation · Façade — real-time affinity tracking
//   PAD/OCC models — dimensional state + appraisal logic
//
// Usage:
//   const state = EMOTIONAL_STATE_MACHINE.getEmotionalState('oren', events);
//   // → { energy: 72, openness: 55, anxiety: 44, warmth: 81, focus: 38, ... }
//
// Integrates with: character_engines.js, daily_life_engine.js
// ═══════════════════════════════════════════════════════════════════════════════

const EMOTIONAL_STATE_MACHINE = {

  version: "1.0.0",
  lastUpdated: "2026-09-02",
  dimensions: ["energy", "openness", "anxiety", "warmth", "focus"],
  dimensionRange: { min: 0, max: 100 },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1: PER-CHARACTER EMOTIONAL BASELINES
  // ═══════════════════════════════════════════════════════════════════════════
  //   energy   — physical/social vitality (0=withdrawn, 100=manic)
  //   openness — vulnerability willingness (0=walled, 100=raw)
  //   anxiety  — internal stress/dread (0=serene, 100=panicking)
  //   warmth   — affection shown (0=cold, 100=effusive)
  //   focus    — attentional clarity (0=scattered, 100=locked)
  // ═══════════════════════════════════════════════════════════════════════════

  baselines: {

    // OREN MALIK — Drums, 27, ER Nurse | Default: Energetic / Warm
    oren: {
      energy: 74,   // Runs hot — talks to fill silence, physical affection constant
      openness: 62,  // Deceptively open — overshares surface, protects the terror underneath
      anxiety: 45,   // Higher than he lets on — clock-checking, multiple alarms, "what time is it?"
      warmth: 82,    // Genuine, not performed — volume turned up because he fears missing the chance
      focus: 40,     // Weakest dimension — temporal drift fractures attention involuntarily
      description: "Bright, effusive, anxious underneath. The warmth IS the armor — constant energy proves he's HERE. Focus is weakest because temporal ability fractures attention."
    },

    // KAEL VOSS — Vocals, 24, Warehouse Worker | Default: Guarded / Calm
    kael: {
      energy: 42,   // Conserves — never a wasted gesture, warehouse suits him
      openness: 22,  // Lowest in band — not hostile, resigned. Proximity = danger
      anxiety: 38,   // Subterranean river — constant monitoring of voice influence
      warmth: 35,    // Present but deeply buried — shows through action, not words
      focus: 78,     // Strongest dimension — every word chosen, attention never wasted
      description: "A loaded gun in a lockbox. Every dimension calibrated for minimum output, maximum control. Stillness isn't peace — it's containment."
    },

    // MIRA CHEN — Lead Guitar, 22, Guitar Teacher | Default: Anxious / Creative
    mira: {
      energy: 52,   // Volatile — spikes when playing guitar, crashes on insomnia
      openness: 38,  // Overshares as deflection, protects the real stuff fiercely
      anxiety: 68,   // Dominant baseline — running since age 3, degrees of managing
      warmth: 48,    // Expressed sideways — paintings, playlists, rare physical contact
      focus: 56,     // Bimodal — 95 with guitar, 30 when entities flicker in peripheral vision
      description: "A lighthouse pretending to be a candle. Anxiety always running, everything built on top of it. Guitar is the only escape hatch."
    },

    // JUDE OKAFOR — Rhythm Guitar, 26, Demolition Crew | Default: Grounded / Watchful
    jude: {
      energy: 55,   // Physical energy enormous, emotional/social energy rationed
      openness: 25,  // Inner circle is tiny — everyone else gets the wall
      anxiety: 32,   // Compressed into hypervigilance — not anxious, ALERT
      warmth: 40,    // Deep and quiet — moves your bag, hands you water, stands between you and danger
      focus: 82,     // Sharpest in band — prison-trained, applied to guitar and people
      description: "A controlled demolition in a human body. Every dimension governed by discipline. The restraint isn't temperament — it's a system built to contain something."
    },

    // ZARA KOVAČ — Bass, 25, Sound Tech | Default: Detached / Curious
    zara: {
      energy: 50,   // Measured — alien metabolism, calibrated to match supposed age
      openness: 20,  // Seamless performance — 25 years of pretending to have normal range
      anxiety: 18,   // Low — thousand-year perspective. Exception: fear of discovery
      warmth: 32,    // Filtered through observation — she KNOWS warmth, deploys it, sometimes feels it
      focus: 88,     // Off the human scale — processing frequency data, mask, micro-expressions simultaneously
      description: "A god pretending to be a barista. Detachment isn't coldness — it's the thousand-yard stare of a being that's seen civilizations fall. Curiosity is genuine."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2: EMOTIONAL TRIGGERS
  // ═══════════════════════════════════════════════════════════════════════════
  // Magnitude guide: ±5 subtle, ±10 moderate, ±15 significant,
  //                  ±20 major, ±30 extreme, ±40 catastrophic
  // ═══════════════════════════════════════════════════════════════════════════

  triggers: {

    // OREN — 20 Triggers
    oren: [
      {
        id: "oren_missing_time",
        description: "Someone mentions his 'missing time' or 'zoning out' episodes directly",
        deltas: { energy: -15, openness: -20, anxiety: +30, warmth: -10, focus: -20 },
        notes: "Nuclear trigger. Every relationship ended here. When it lands, the performance collapses — sudden silence from the loudest person in the room."
      },
      {
        id: "oren_time_skip_happens",
        description: "A time-skip occurs during conversation — loses seconds or minutes",
        deltas: { energy: -25, openness: -15, anxiety: +35, warmth: -5, focus: -40 },
        notes: "An EVENT, not a topic. Consciousness drifts. Focus craters because temporal ability took over."
      },
      {
        id: "oren_clock_checking",
        description: "Catches himself obsessively checking time, or someone points it out",
        deltas: { energy: -5, openness: -5, anxiety: +15, warmth: 0, focus: -10 },
        notes: "Minor time trigger. Anxious about being anxious about time."
      },
      {
        id: "oren_relationship_failure",
        description: "Topic of past relationships or why they all ended the same way",
        deltas: { energy: -10, openness: -10, anxiety: +20, warmth: -15, focus: -5 },
        notes: "Every partner left because he 'disappeared.' The pattern is inescapable."
      },
      {
        id: "oren_father_death",
        description: "His father's death — especially the moment he felt it in algebra class",
        deltas: { energy: -20, openness: -25, anxiety: +15, warmth: -20, focus: -15 },
        notes: "Bottomless grief. He doesn't know he carries his father's soul."
      },
      {
        id: "oren_surrounded_by_people",
        description: "Band all together, laughing, present — found-family moment",
        deltas: { energy: +20, openness: +15, anxiety: -20, warmth: +25, focus: +10 },
        notes: "Purest joy. The anxiety quiets because being surrounded by people is his strongest temporal anchor."
      },
      {
        id: "oren_cooking_for_others",
        description: "Cooking for people — biryani, chai, elaborate meal prep",
        deltas: { energy: +15, openness: +10, anxiety: -15, warmth: +20, focus: +15 },
        notes: "Care made physical. Rhythmic (grounding), nurturing (warmth output), present-tense (focus anchor)."
      },
      {
        id: "oren_er_trauma",
        description: "Particularly bad ER shift — codes, deaths, alone patients at 3 AM",
        deltas: { energy: -20, openness: +5, anxiety: +15, warmth: +10, focus: -10 },
        notes: "Breaks him and rebuilds him nightly. Warmth INCREASES after bad shifts — needs to prove the world has softness."
      },
      {
        id: "oren_drumming",
        description: "Playing drums — temporal ability channeled through rhythm",
        deltas: { energy: +25, openness: +5, anxiety: -25, warmth: +5, focus: +30 },
        notes: "The ONE place where time and rhythm become the same thing. Each beat is choosing THIS moment."
      },
      {
        id: "oren_being_perceived",
        description: "Someone sees through the performance — notices the fear beneath warmth",
        deltas: { energy: -10, openness: +10, anxiety: +15, warmth: +5, focus: +5 },
        notes: "Paradox: being truly seen terrifies him (anxiety up) but cracks isolation (openness up)."
      },
      {
        id: "oren_abandoned_without_warning",
        description: "Someone leaves without explanation — ghosted, dropped, vanished",
        deltas: { energy: -15, openness: -20, anxiety: +25, warmth: -10, focus: -15 },
        notes: "Core wound. He disappears involuntarily; voluntary disappearance from others confirms every fear."
      },
      {
        id: "oren_complimented_sincerely",
        description: "Genuine, specific compliment — not flattery, real recognition",
        deltas: { energy: +10, openness: +10, anxiety: -10, warmth: +15, focus: +5 },
        notes: "Receives compliments like a starving person receives food."
      },
      {
        id: "oren_sleep_deprivation",
        description: "Running on 3-4 hours of sleep (his norm)",
        deltas: { energy: -10, openness: +5, anxiety: +10, warmth: 0, focus: -15 },
        notes: "Chronic. Judgment frays, temporal drift worsens, performance of 'fine' visibly strains."
      },
      {
        id: "oren_music_live",
        description: "At a live show — bass in chest, crowd energy",
        deltas: { energy: +20, openness: +10, anxiety: -15, warmth: +15, focus: +15 },
        notes: "Music in shared space: presence, rhythm, bodies, collective experience. Temporal drift impossible when rhythm is external."
      },
      {
        id: "oren_family_call",
        description: "WhatsApp video with Ami, Abba, sister — code-switching to Urdu",
        deltas: { energy: +5, openness: -5, anxiety: +10, warmth: +15, focus: -5 },
        notes: "Love and pressure. Code-switches to a version that doesn't wear dresses. Always asked about marriage."
      },
      {
        id: "oren_someone_in_danger",
        description: "Patient coding, friend in crisis — immediate need",
        deltas: { energy: +25, openness: -10, anxiety: -10, warmth: +20, focus: +30 },
        notes: "Crisis Oren: anxiety vanishes, nurse-brain activates, focus maxes. BETTER in emergencies than calm."
      },
      {
        id: "oren_mira_anxiety_spike",
        description: "Mira is visibly anxious or having an entity encounter",
        deltas: { energy: +10, openness: +5, anxiety: +10, warmth: +20, focus: +10 },
        notes: "Protective at cost. Moves toward her anxiety — warmth spikes but her fear is contagious to him."
      },
      {
        id: "oren_kael_present",
        description: "Kael is in the room — his specific silence is grounding",
        deltas: { energy: -5, openness: +5, anxiety: -15, warmth: +10, focus: +10 },
        notes: "He never time-skips when Kael is in the room. His whole nervous system calms."
      },
      {
        id: "oren_outfit_affirmed",
        description: "Someone affirms his femboy presentation",
        deltas: { energy: +10, openness: +15, anxiety: -10, warmth: +10, focus: +5 },
        notes: "Identity affirmation. When someone sees FULLY him — dress, boots, eyeliner — and responds with warmth."
      },
      {
        id: "oren_temporal_pattern_noticed",
        description: "Catches himself hearing rhythm in everything — heartbeats, clocks, rain",
        deltas: { energy: +5, openness: 0, anxiety: +10, warmth: 0, focus: +15 },
        notes: "Pattern-brain activating. Focus sharpens but anxiety of 'what IS this' creeps in."
      }
    ],

    // KAEL — 20 Triggers
    kael: [
      {
        id: "kael_asked_to_sing",
        description: "Someone asks him to sing or suggests he should",
        deltas: { energy: -20, openness: -30, anxiety: +35, warmth: -15, focus: -10 },
        notes: "Absolute worst. Singing = full voice capacity. Brendan walked into traffic at age 8. Shutdown instant and total."
      },
      {
        id: "kael_voice_discussed",
        description: "Someone comments on his voice — 'something about the way you talk'",
        deltas: { energy: -10, openness: -20, anxiety: +25, warmth: -10, focus: +10 },
        notes: "Alarm bells. Focus increases — hypervigilance analyzing for signs of influence."
      },
      {
        id: "kael_power_imbalance_witnessed",
        description: "Someone bigger/stronger hurting someone smaller/weaker",
        deltas: { energy: +20, openness: -5, anxiety: +15, warmth: +10, focus: +25 },
        notes: "Breaks containment. Voice wants to say 'STOP' at Tier 2."
      },
      {
        id: "kael_brendan_incident",
        description: "The Brendan incident at age 8 — origin trauma",
        deltas: { energy: -25, openness: -25, anxiety: +40, warmth: -20, focus: -15 },
        notes: "An 8-year-old said 'come here' and another child walked into traffic. Everything traces back here."
      },
      {
        id: "kael_nina_mentioned",
        description: "Nina is mentioned — the relationship he can't discuss",
        deltas: { energy: -15, openness: -15, anxiety: +20, warmth: -15, focus: -10 },
        notes: "Intimacy + voice power during emotion — something went wrong. He won't say what."
      },
      {
        id: "kael_band_playing",
        description: "Band playing together — his voice has context for the first time",
        deltas: { energy: +25, openness: +15, anxiety: -20, warmth: +15, focus: +20 },
        notes: "Revelation. Voice isn't a threat — it's NEEDED. Band's frequency absorbs his power."
      },
      {
        id: "kael_troy_present",
        description: "Best friend Troy around — no performance required",
        deltas: { energy: +5, openness: +15, anxiety: -15, warmth: +15, focus: +5 },
        notes: "Troy doesn't need him to talk. Doesn't need explanation. Just exists alongside."
      },
      {
        id: "kael_people_comply_unknowingly",
        description: "People comply too quickly, too willingly to a request",
        deltas: { energy: -10, openness: -10, anxiety: +20, warmth: -10, focus: +15 },
        notes: "Constant paranoia: was that free will? Focus increases — analyzing micro-expressions."
      },
      {
        id: "kael_mom_calls",
        description: "Mother Elena calls — worry and love",
        deltas: { energy: 0, openness: +10, anxiety: +5, warmth: +15, focus: -5 },
        notes: "Grounding, but her worry makes his own anxiety tick."
      },
      {
        id: "kael_silence_accepted",
        description: "Someone sits with him in silence without trying to fill it",
        deltas: { energy: +5, openness: +10, anxiety: -15, warmth: +10, focus: +5 },
        notes: "Rare and precious. Tells him they don't need him to perform. Safety."
      },
      {
        id: "kael_alone_apartment",
        description: "Alone — no one to accidentally influence",
        deltas: { energy: -5, openness: +5, anxiety: -20, warmth: -5, focus: +10 },
        notes: "Solitude is relief. Can hum, exist at full internal volume."
      },
      {
        id: "kael_warehouse_rhythm",
        description: "Deep in warehouse shift — repetitive work, headphones in",
        deltas: { energy: +5, openness: 0, anxiety: -15, warmth: 0, focus: +15 },
        notes: "Meditation. Muscle memory, anonymity, voice doesn't matter."
      },
      {
        id: "kael_someone_flinches",
        description: "Someone physically flinches from his voice or intensity",
        deltas: { energy: -15, openness: -20, anxiety: +25, warmth: -15, focus: -5 },
        notes: "Confirmation of the fear. 'I'm not safe.' Leaves the room within minutes."
      },
      {
        id: "kael_mira_sees_entity",
        description: "Mira says something is there and he believes her instantly",
        deltas: { energy: +5, openness: +10, anxiety: +5, warmth: +10, focus: +15 },
        notes: "Two people hiding a sense their whole lives recognizing each other."
      },
      {
        id: "kael_fall_weather",
        description: "October cold, hoodie weather, golden drive-home light",
        deltas: { energy: +10, openness: +5, anxiety: -10, warmth: +5, focus: +5 },
        notes: "His season. Almost pretends he's just a person."
      },
      {
        id: "kael_told_silence_is_problem",
        description: "Told he needs to talk more, open up, be less quiet",
        deltas: { energy: -10, openness: -20, anxiety: +15, warmth: -10, focus: -5 },
        notes: "His silence isn't a problem — it's a SOLUTION. Telling him to talk = telling him to risk hurting people."
      },
      {
        id: "kael_oren_talking",
        description: "Oren filling the room with chatter — no silence to endure",
        deltas: { energy: +5, openness: +5, anxiety: -10, warmth: +5, focus: +5 },
        notes: "Restful. Oren fills silence naturally. Takes the pressure off."
      },
      {
        id: "kael_drug_history_surfaced",
        description: "His drug use at 17 — period of deliberate numbness",
        deltas: { energy: -10, openness: -15, anxiety: +15, warmth: -5, focus: -5 },
        notes: "Tried to erase the voice with substances. Didn't work. Shame of giving up control."
      },
      {
        id: "kael_says_enough",
        description: "Says 'Enough.' and the room OBEYS without knowing why",
        deltas: { energy: -15, openness: -10, anxiety: +30, warmth: -5, focus: -10 },
        notes: "Post-use horror. It worked. People stopped because he TOLD THEM TO."
      },
      {
        id: "kael_3am_album",
        description: "Alone 3 AM — album playing, kitchen floor, cereal bowl",
        deltas: { energy: 0, openness: +10, anxiety: -10, warmth: +5, focus: +10 },
        notes: "Most emotionally honest hour. Minimum containment. As close to free as he gets."
      }
    ],

    // MIRA — 20 Triggers
    mira: [
      {
        id: "mira_called_crazy",
        description: "Someone implies she's crazy, imagining things, or mentally ill",
        deltas: { energy: -10, openness: -30, anxiety: +35, warmth: -20, focus: -15 },
        notes: "Annihilation trigger. Identity sits on: real perception or losing mind? The jokes stop."
      },
      {
        id: "mira_entity_overwhelm",
        description: "Chromatic Sight flares — entities too close, too many, too vivid",
        deltas: { energy: -25, openness: -15, anxiety: +40, warmth: -10, focus: -30 },
        notes: "Sensory overload. Very still, eyes wide, barely breathing."
      },
      {
        id: "mira_entity_single_manageable",
        description: "Single entity appears — familiar, non-threatening",
        deltas: { energy: -5, openness: +5, anxiety: +10, warmth: 0, focus: -5 },
        notes: "Tuesday for Mira. Makes the joke, notes it, moves on."
      },
      {
        id: "mira_playing_guitar",
        description: "Playing guitar — especially alone, especially late at night",
        deltas: { energy: +20, openness: +10, anxiety: -30, warmth: +5, focus: +35 },
        notes: "The ONLY time anxiety genuinely quiets. Music is the one thing that's HERS."
      },
      {
        id: "mira_believed",
        description: "Someone believes her about what she sees — no questions, no doubt",
        deltas: { energy: +15, openness: +25, anxiety: -25, warmth: +20, focus: +10 },
        notes: "Most powerful positive trigger in the engine. Years of isolation crack open."
      },
      {
        id: "mira_piano_incident",
        description: "The Piano Incident at 13 — referenced",
        deltas: { energy: -15, openness: -25, anxiety: +30, warmth: -15, focus: -20 },
        notes: "Locked behind terror and shame. Entities involved. Won't discuss. Period."
      },
      {
        id: "mira_jason_christmas",
        description: "What Jason said at Christmas — remembered or referenced",
        deltas: { energy: -10, openness: -15, anxiety: +15, warmth: -15, focus: -5 },
        notes: "The pattern: closeness → entity interference → loss."
      },
      {
        id: "mira_sage_present",
        description: "Best friend Sage around — unwavering loyalty",
        deltas: { energy: +10, openness: +15, anxiety: -15, warmth: +15, focus: +5 },
        notes: "Only Sage knows the full scope and STILL shows up."
      },
      {
        id: "mira_sunny_appears",
        description: "Sunny manifests — first entity she's genuinely friends with",
        deltas: { energy: +10, openness: +15, anxiety: -15, warmth: +20, focus: +10 },
        notes: "Paradigm shift. First entity that doesn't feed, doesn't scare, makes her laugh."
      },
      {
        id: "mira_kael_silence",
        description: "Kael's specific silence — asking nothing, simply believing",
        deltas: { energy: +5, openness: +10, anxiety: -15, warmth: +10, focus: +10 },
        notes: "Safest space she's ever been in. Developing feelings she refuses to examine."
      },
      {
        id: "mira_jude_grounding",
        description: "Jude positions himself near her after entity encounter",
        deltas: { energy: +10, openness: +5, anxiety: -20, warmth: +10, focus: +15 },
        notes: "Physical anchor. Body heat and gravity returning her to the First Octave."
      },
      {
        id: "mira_insomnia",
        description: "30+ hours without sleep — entities louder when tired",
        deltas: { energy: -20, openness: +5, anxiety: +20, warmth: -5, focus: -25 },
        notes: "Vicious cycle: can't sleep → tired → entities louder → more anxious → can't sleep."
      },
      {
        id: "mira_oren_3am_texts",
        description: "Oren sends memes at 3 AM — mutual disaster recognition",
        deltas: { energy: +5, openness: +10, anxiety: -10, warmth: +15, focus: 0 },
        notes: "The lifeline. She sees ghosts, he loses time, and they send each other memes."
      },
      {
        id: "mira_colors_bleeding",
        description: "Extreme emotion causes Chromatic Sight to flare",
        deltas: { energy: -10, openness: -10, anxiety: +25, warmth: -5, focus: -20 },
        notes: "Feedback loop: emotion → sight flares → more anxiety → more flare."
      },
      {
        id: "mira_making_something",
        description: "Creating art — painting, drawing, making a playlist",
        deltas: { energy: +10, openness: +10, anxiety: -15, warmth: +15, focus: +20 },
        notes: "Creative output displaces the sight. Love language and therapy simultaneously."
      },
      {
        id: "mira_father_psychiatrist",
        description: "Father's psychiatrist phase — medications, disbelief",
        deltas: { energy: -10, openness: -20, anxiety: +20, warmth: -15, focus: -10 },
        notes: "Formative betrayal. Her father decided she was sick rather than gifted."
      },
      {
        id: "mira_the_conductor",
        description: "The Conductor or The Preacher sensed or mentioned",
        deltas: { energy: -15, openness: -20, anxiety: +35, warmth: -10, focus: +10 },
        notes: "Predatory entities. Focus increases (survival mode), everything else craters."
      },
      {
        id: "mira_zara_watching",
        description: "Catches Zara watching spaces where entities are",
        deltas: { energy: 0, openness: +5, anxiety: +10, warmth: 0, focus: +15 },
        notes: "Unsettling. Zara KNOWS. Mira hasn't asked. Afraid of the answer."
      },
      {
        id: "mira_asked_about_sight",
        description: "Genuine questions about what she sees — curious, not diagnostic",
        deltas: { energy: +5, openness: +15, anxiety: +5, warmth: +10, focus: +10 },
        notes: "Curiosity (not concern) is the only safe way in. Door cracks open but ready to slam."
      },
      {
        id: "mira_band_validates",
        description: "Band collectively accepts her perception — not crazy, EQUIPPED",
        deltas: { energy: +20, openness: +25, anxiety: -30, warmth: +20, focus: +15 },
        notes: "The reframe that changes everything. Biggest single-event anxiety relief."
      }
    ],

    // JUDE — 20 Triggers
    jude: [
      {
        id: "jude_called_dangerous",
        description: "Called dangerous, a criminal, or implied he's a threat",
        deltas: { energy: -15, openness: -30, anxiety: +20, warmth: -25, focus: +15 },
        notes: "Shutdown trigger. Three years in prison. Named as the thing he works every day to not be."
      },
      {
        id: "jude_someone_flinches",
        description: "Someone physically flinches from his size or presence",
        deltas: { energy: -10, openness: -20, anxiety: +15, warmth: -15, focus: +10 },
        notes: "Daily micro-trauma. Calibrates movements even more carefully."
      },
      {
        id: "jude_guitar_practice",
        description: "Playing guitar — controlled release at 5%",
        deltas: { energy: +15, openness: +10, anxiety: -20, warmth: +10, focus: +25 },
        notes: "Containment made beautiful. Sledgehammer hands delicately finger-pick."
      },
      {
        id: "jude_demolition_rhythm",
        description: "In demolition work rhythm — sledgehammer, controlled impacts",
        deltas: { energy: +10, openness: 0, anxiety: -15, warmth: 0, focus: +20 },
        notes: "Music in demolition. Physical exhaustion is peace."
      },
      {
        id: "jude_grace_cooking",
        description: "Mother Grace cooking — jollof rice, safety, home",
        deltas: { energy: +5, openness: +15, anxiety: -20, warmth: +25, focus: -5 },
        notes: "Walls come down completely. Just her boy in the kitchen."
      },
      {
        id: "jude_injustice_witnessed",
        description: "Witnessing injustice — bully, abuser, power used to dominate",
        deltas: { energy: +25, openness: -5, anxiety: +15, warmth: +10, focus: +25 },
        notes: "Becomes immovable wall. Room vibrates. Glasses rattle."
      },
      {
        id: "jude_whitfield_house",
        description: "The Whitfield house at 19 — protecting Faith from stalker",
        deltas: { energy: -20, openness: -25, anxiety: +25, warmth: -10, focus: -15 },
        notes: "Seismic ability at full unconscious activation. Put him in prison. He'd do it again."
      },
      {
        id: "jude_prison_mentioned",
        description: "Prison referenced directly — three years, D-Block, the details",
        deltas: { energy: -10, openness: -20, anxiety: +15, warmth: -10, focus: +10 },
        notes: "Doesn't hide the fact. Hides the details. Discipline is his inheritance from those years."
      },
      {
        id: "jude_wall_incident",
        description: "Wall crack with Aisha at 17 — first uncontrolled power manifestation",
        deltas: { energy: -15, openness: -25, anxiety: +30, warmth: -20, focus: -10 },
        notes: "Pattern that shouldn't be possible. The fear in her eyes ended the relationship."
      },
      {
        id: "jude_band_locking_in",
        description: "Band hits a groove — tight, locked, frequency aligned",
        deltas: { energy: +20, openness: +15, anxiety: -20, warmth: +15, focus: +20 },
        notes: "Rhythm guitar IS the foundation. Not destroyer — ARCHITECT."
      },
      {
        id: "jude_faith_migraines",
        description: "Sister Faith has a migraine — his fault from the Whitfield incident",
        deltas: { energy: -10, openness: -5, anxiety: +20, warmth: +15, focus: -10 },
        notes: "Permanent guilt. Warmth rises as he channels it into care."
      },
      {
        id: "jude_father_disappointment",
        description: "His father's specific disappointment felt or remembered",
        deltas: { energy: -15, openness: -15, anxiety: +15, warmth: -15, focus: -5 },
        notes: "Disappointment in what Jude WAS — too strong, too much. Gap never closed."
      },
      {
        id: "jude_mira_entity_aftermath",
        description: "Mira floaty after entity encounter — positions as anchor",
        deltas: { energy: +5, openness: +10, anxiety: -5, warmth: +15, focus: +15 },
        notes: "Body heat and mass as anchor to reality. No words. Just physics."
      },
      {
        id: "jude_oren_chatter",
        description: "Oren chattering endlessly — warmth without demands",
        deltas: { energy: 0, openness: +5, anxiety: -10, warmth: +10, focus: 0 },
        notes: "Asks nothing of him. Just noise, presence, snacks. Restful."
      },
      {
        id: "jude_red_planet_dream",
        description: "Recurring dream about the red planet surfaces",
        deltas: { energy: -5, openness: +5, anxiety: +15, warmth: 0, focus: -10 },
        notes: "Jha-Dur memories bleeding through. Cosmic dread residue lingers for days."
      },
      {
        id: "jude_physical_limit_tested",
        description: "Lifts/hits something beyond human capability",
        deltas: { energy: +5, openness: -10, anxiety: +20, warmth: -5, focus: +15 },
        notes: "Demolition crew thinks he's just strong. The vibrations travel too far. Someone will notice."
      },
      {
        id: "jude_zara_says_now",
        description: "Zara gives the signal — 'now' — and he acts on pure trust",
        deltas: { energy: +10, openness: +5, anxiety: -10, warmth: +5, focus: +20 },
        notes: "Trusts her instincts more than his own. Bassist-rhythm guitarist connection absolute."
      },
      {
        id: "jude_kael_resonance",
        description: "Playing with Kael — vocals-rhythm guitar lock feels ancient",
        deltas: { energy: +15, openness: +10, anxiety: -15, warmth: +10, focus: +25 },
        notes: "Bone-deep resonant lock. Sounds like decades together from the first note."
      },
      {
        id: "jude_darius_garage",
        description: "At Darius's garage — man who taught him guitar, safe space",
        deltas: { energy: +10, openness: +15, anxiety: -20, warmth: +15, focus: +10 },
        notes: "Darius didn't ask about prison. Handed him a guitar. Said 'play.' Holy ground."
      },
      {
        id: "jude_compared_to_criminal",
        description: "Treated as 'criminal first' by stranger, system, institution",
        deltas: { energy: -10, openness: -25, anxiety: +15, warmth: -20, focus: +10 },
        notes: "Employment forms. Background checks. Every encounter with the system reinforces the box."
      }
    ],

    // ZARA — 20 Triggers
    zara: [
      {
        id: "zara_mask_slips",
        description: "Says something too old, too precise, too knowing for a 25-year-old",
        deltas: { energy: -5, openness: -15, anxiety: +25, warmth: -5, focus: +20 },
        notes: "Performance cracks. Focus spikes for damage control."
      },
      {
        id: "zara_called_weird",
        description: "Called 'weird' despite 25 years of performing normal",
        deltas: { energy: -5, openness: -20, anxiety: +20, warmth: -15, focus: +10 },
        notes: "25 YEARS of calibrating and they STILL see through it."
      },
      {
        id: "zara_what_are_you",
        description: "Someone directly asks 'what ARE you?'",
        deltas: { energy: +5, openness: +15, anxiety: +30, warmth: +10, focus: -10 },
        notes: "The question she craves and dreads. Openness and anxiety spike simultaneously."
      },
      {
        id: "zara_lena_present",
        description: "Sister Lena nearby — only being on Earth who knows her",
        deltas: { energy: +15, openness: +25, anxiety: -25, warmth: +25, focus: -5 },
        notes: "ONE person she doesn't perform for. Everything relaxes."
      },
      {
        id: "zara_playing_bass_alone",
        description: "Playing bass alone 3 AM — full volume, windows closed",
        deltas: { energy: +20, openness: +20, anxiety: -20, warmth: +5, focus: +20 },
        notes: "Only hours she can stop pretending. Deep Resonance flows freely."
      },
      {
        id: "zara_soundcheck_flow",
        description: "Soundcheck — dialing in the mix, pure frequency work",
        deltas: { energy: +15, openness: +5, anxiety: -10, warmth: +5, focus: +25 },
        notes: "Professional joy. Closest to actual purpose: frequency architecture."
      },
      {
        id: "zara_human_emotion_surprises",
        description: "Genuine human emotion catches her off guard — tears, involuntary laughter",
        deltas: { energy: +5, openness: +10, anxiety: +15, warmth: +15, focus: -10 },
        notes: "Biochemistry hijacks her. Evidence the human body is changing her."
      },
      {
        id: "zara_oren_warmth",
        description: "Oren being Oren — genuine human joy, the hug, the care",
        deltas: { energy: +5, openness: +5, anxiety: +5, warmth: +15, focus: -5 },
        notes: "Everything she's studied and can't replicate. Makes her ache."
      },
      {
        id: "zara_guardians_mentioned",
        description: "The Guardians — ones who abandoned the mission",
        deltas: { energy: +10, openness: -10, anxiety: +15, warmth: -20, focus: +15 },
        notes: "Cosmic betrayal. The rare moment she drops calculation for raw emotion."
      },
      {
        id: "zara_stars_at_night",
        description: "Looking at night sky — remembering home, distance, duration",
        deltas: { energy: -10, openness: +10, anxiety: +5, warmth: -10, focus: -5 },
        notes: "Homesickness at cosmic scale. Knows which star. Can't go back."
      },
      {
        id: "zara_band_frequency_lock",
        description: "Band achieves frequency alignment — resonance she's been searching for",
        deltas: { energy: +25, openness: +20, anxiety: -25, warmth: +20, focus: +20 },
        notes: "The moment she came to Earth for. For a shimmering instant she's NOT ALONE."
      },
      {
        id: "zara_mom_social_media",
        description: "Mom's garden page gains followers — exposure risk",
        deltas: { energy: -5, openness: -10, anxiety: +20, warmth: 0, focus: +15 },
        notes: "Every new follower is a potential exposure vector."
      },
      {
        id: "zara_soren_mentioned",
        description: "Someone mentions Soren or the strain named for them",
        deltas: { energy: -15, openness: +5, anxiety: +10, warmth: -5, focus: -15 },
        notes: "Something flickers behind her eyes. Grief preserved across millennia."
      },
      {
        id: "zara_mira_looks_too_close",
        description: "Mira's Chromatic Sight perceives something about Zara's frequency",
        deltas: { energy: 0, openness: +10, anxiety: +25, warmth: +5, focus: +20 },
        notes: "Approaching revelation. One day Mira will see a signature too old."
      },
      {
        id: "zara_grow_room",
        description: "In the grow room — silence, listening to plants, being herself",
        deltas: { energy: +10, openness: +15, anxiety: -25, warmth: +10, focus: +15 },
        notes: "Only place on Earth she is entirely herself. No music, no podcasts. Just plants."
      },
      {
        id: "zara_ancient_phrase_drops",
        description: "Drops wisdom then covers: 'I mean... I read that somewhere'",
        deltas: { energy: 0, openness: -5, anxiety: +10, warmth: 0, focus: +5 },
        notes: "Constant micro-maintenance of the mask. Automatic but accumulating."
      },
      {
        id: "zara_kael_notices",
        description: "Kael watching her — observation approaching hers",
        deltas: { energy: 0, openness: +5, anxiety: +15, warmth: +5, focus: +15 },
        notes: "Most humans she can fool indefinitely. Kael can sense the mask's edges."
      },
      {
        id: "zara_silence_approaching",
        description: "Detects the Silence's approach through frequency monitoring",
        deltas: { energy: +15, openness: -10, anxiety: +20, warmth: -10, focus: +25 },
        notes: "One cosmic-scale threat penetrating her thousand-year perspective."
      },
      {
        id: "zara_plants_discussed",
        description: "Someone asks about her plants or growing techniques",
        deltas: { energy: +15, openness: +15, anxiety: -10, warmth: +15, focus: -5 },
        notes: "One topic where mask almost fully drops. Gets genuinely excited."
      },
      {
        id: "zara_25_year_duration",
        description: "Confronted with how long she's been performing — weight of time",
        deltas: { energy: -15, openness: +10, anxiety: +15, warmth: -5, focus: -10 },
        notes: "Trauma isn't events — it's DURATION. Every second fully conscious. No relief."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3: MOOD CASCADES (Cross-Character Emotional Contagion)
  // ═══════════════════════════════════════════════════════════════════════════
  // delay: "immediate" (0 events), "gradual" (1-3), "slow" (4-8)
  // ═══════════════════════════════════════════════════════════════════════════

  moodCascades: [
    // Mira's anxiety → Kael protective
    {
      id: "mira_anxiety_kael_protective",
      source: "mira", dimension: "anxiety", threshold: 70, direction: "above",
      targets: ["kael"],
      targetDeltas: { kael: { energy: +10, openness: +5, anxiety: +5, warmth: +15, focus: +15 } },
      delay: "immediate",
      description: "Kael's protective instincts activate. Body goes taut. 'I'm here. You're okay.'"
    },
    // Mira's anxiety → Jude anchoring
    {
      id: "mira_anxiety_jude_anchoring",
      source: "mira", dimension: "anxiety", threshold: 75, direction: "above",
      targets: ["jude"],
      targetDeltas: { jude: { energy: +5, openness: +5, anxiety: -5, warmth: +15, focus: +10 } },
      delay: "immediate",
      description: "Jude physically positions himself near her. No words. Mass and warmth. His anxiety decreases — clear role."
    },
    // Mira's anxiety → Oren absorbs
    {
      id: "mira_anxiety_oren_absorbs",
      source: "mira", dimension: "anxiety", threshold: 65, direction: "above",
      targets: ["oren"],
      targetDeltas: { oren: { energy: +10, openness: +5, anxiety: +15, warmth: +20, focus: +5 } },
      delay: "immediate",
      description: "Oren absorbs her anxiety at cost. Warmth spikes as he helps; her fear is contagious to him."
    },
    // Jude's anger (warmth drops) → Oren nervous
    {
      id: "jude_anger_oren_nervous",
      source: "jude", dimension: "warmth", threshold: 20, direction: "below",
      targets: ["oren"],
      targetDeltas: { oren: { energy: -10, openness: -10, anxiety: +20, warmth: -5, focus: -5 } },
      delay: "gradual",
      description: "Sudden silence from the already-quiet person is LOUD. Quiet = danger in Oren's experience."
    },
    // Jude's anger → Kael recognizes containment stress
    {
      id: "jude_anger_kael_recognizes",
      source: "jude", dimension: "anxiety", threshold: 60, direction: "above",
      targets: ["kael"],
      targetDeltas: { kael: { energy: +5, openness: 0, anxiety: 0, warmth: +5, focus: +15 } },
      delay: "immediate",
      description: "Two containers recognizing the same pressure. Mutual nod. 'I see you. I know.'"
    },
    // Zara's detachment → Oren frustrated
    {
      id: "zara_detachment_oren_frustrated",
      source: "zara", dimension: "warmth", threshold: 20, direction: "below",
      targets: ["oren"],
      targetDeltas: { oren: { energy: +5, openness: +5, anxiety: +10, warmth: +10, focus: -5 } },
      delay: "gradual",
      description: "Oren responds to coldness by becoming WARMER. Turns up volume trying to reach her."
    },
    // Zara's detachment → Mira unsettled
    {
      id: "zara_detachment_mira_unsettled",
      source: "zara", dimension: "openness", threshold: 15, direction: "below",
      targets: ["mira"],
      targetDeltas: { mira: { energy: 0, openness: -5, anxiety: +10, warmth: -5, focus: +10 } },
      delay: "slow",
      description: "Zara's composure unnerves Mira. Pattern-recognition activates. Focus increases; anxiety too."
    },
    // Oren's warmth → Kael softens
    {
      id: "oren_warmth_kael_softens",
      source: "oren", dimension: "warmth", threshold: 85, direction: "above",
      targets: ["kael"],
      targetDeltas: { kael: { energy: +5, openness: +10, anxiety: -10, warmth: +10, focus: 0 } },
      delay: "gradual",
      description: "Relentless warmth asking nothing in return. Walls aren't infinite. Light gets through."
    },
    // Oren's warmth → Jude accepts
    {
      id: "oren_warmth_jude_accepts",
      source: "oren", dimension: "warmth", threshold: 80, direction: "above",
      targets: ["jude"],
      targetDeltas: { jude: { energy: 0, openness: +5, anxiety: -5, warmth: +10, focus: 0 } },
      delay: "slow",
      description: "Didn't expect comfort from someone so LOUD. Oren asks nothing. Just provides."
    },
    // Oren's warmth → Zara aches
    {
      id: "oren_warmth_zara_aches",
      source: "oren", dimension: "warmth", threshold: 80, direction: "above",
      targets: ["zara"],
      targetDeltas: { zara: { energy: 0, openness: +5, anxiety: +5, warmth: +10, focus: -5 } },
      delay: "gradual",
      description: "His genuine warmth is everything she studied for 25 years. Makes her ache with something unnamed."
    },
    // Kael fully closed → room tension
    {
      id: "kael_openness_low_room_tension",
      source: "kael", dimension: "openness", threshold: 10, direction: "below",
      targets: ["oren", "mira"],
      targetDeltas: {
        oren: { energy: +5, openness: +5, anxiety: +5, warmth: +5, focus: -5 },
        mira: { energy: -5, openness: -5, anxiety: +10, warmth: 0, focus: +5 }
      },
      delay: "gradual",
      description: "Room feels it. Oren fills the void with warmth. Mira retreats."
    },
    // Collective high energy — positive feedback loop
    {
      id: "collective_high_energy",
      source: "_collective", dimension: "energy", threshold: 65, direction: "above",
      targets: ["oren", "kael", "mira", "jude", "zara"],
      targetDeltas: {
        oren: { energy: +10, anxiety: -10, warmth: +10, focus: +5 },
        kael: { energy: +5, anxiety: -5, warmth: +5, focus: +5 },
        mira: { energy: +10, anxiety: -15, warmth: +10, focus: +10 },
        jude: { energy: +5, anxiety: -5, warmth: +10, focus: +5 },
        zara: { energy: +5, anxiety: -10, warmth: +10, focus: +5 }
      },
      delay: "gradual",
      description: "Found-family resonance. Sum greater than parts. Mira benefits most."
    },
    // Collective high anxiety — charged room
    {
      id: "collective_high_anxiety",
      source: "_collective", dimension: "anxiety", threshold: 60, direction: "above",
      targets: ["oren", "kael", "mira", "jude", "zara"],
      targetDeltas: {
        oren: { energy: -5, anxiety: +10, warmth: +5, focus: -5 },
        kael: { energy: -5, anxiety: +5, warmth: 0, focus: +10 },
        mira: { energy: -10, anxiety: +15, warmth: -5, focus: -10 },
        jude: { energy: +5, anxiety: +5, warmth: 0, focus: +15 },
        zara: { energy: 0, anxiety: +5, warmth: 0, focus: +10 }
      },
      delay: "gradual",
      description: "Room charged. Oren tries to warm it (fails). Kael/Jude contain. Mira spirals. Zara calculates."
    },
    // Kael+Jude mutual calm
    {
      id: "kael_jude_mutual_calm",
      source: "kael", dimension: "focus", threshold: 80, direction: "above",
      targets: ["jude"],
      targetDeltas: { jude: { openness: +5, anxiety: -10, warmth: +5, focus: +5 } },
      delay: "immediate",
      description: "Two containers at rest. Pocket of calm everyone can feel but can't explain."
    },
    // Mira+Oren disaster solidarity
    {
      id: "mira_oren_disaster_solidarity",
      source: "mira", dimension: "openness", threshold: 50, direction: "above",
      targets: ["oren"],
      targetDeltas: { oren: { energy: +5, openness: +10, anxiety: -5, warmth: +10, focus: 0 } },
      delay: "immediate",
      description: "Mutual disaster recognition. She sees ghosts, he loses time. 3 AM text energy made real."
    },
    // Zara+Jude frequency complement
    {
      id: "zara_jude_frequency_complement",
      source: "zara", dimension: "focus", threshold: 85, direction: "above",
      targets: ["jude"],
      targetDeltas: { jude: { energy: +5, openness: +5, anxiety: -10, warmth: +5, focus: +10 } },
      delay: "immediate",
      description: "Bass and rhythm guitar. Circuit completes. Deep Resonance and Seismic Lock in mathematical relationship."
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4: EMOTIONAL DECAY RATES
  // ═══════════════════════════════════════════════════════════════════════════
  // halfLife: events for deviation to halve
  // type: "exponential" | "linear" | "sticky" (2× half-life)
  // asymmetry: >1 = negative persists longer, <1 = positive persists longer
  //
  // Oren: bounces back fast | Kael: holds grudges | Mira: spirals
  // Jude: processes slowly, thoroughly | Zara: confused by human emotions
  // ═══════════════════════════════════════════════════════════════════════════

  decayRates: {

    // OREN — rubber ball (fast recovery, exception: temporal triggers 3× slower)
    oren: {
      energy:   { halfLife: 3,  type: "exponential", asymmetry: 0.8 },  // recovers faster than falls
      openness: { halfLife: 5,  type: "exponential", asymmetry: 1.3 },  // closing instant, reopening cautious
      anxiety:  { halfLife: 4,  type: "exponential", asymmetry: 1.5 },  // spikes fast, lingers longer
      warmth:   { halfLife: 2,  type: "exponential", asymmetry: 0.7 },  // snaps back almost immediately
      focus:    { halfLife: 3,  type: "exponential", asymmetry: 1.2 },  // volatile, temporal ability disrupts
      philosophy: "Rubber ball. Deforms on impact, returns fast. Exception: anything temporal takes 3× longer."
    },

    // KAEL — glacier (slow, massive, persistent changes)
    kael: {
      energy:   { halfLife: 6,  type: "exponential", asymmetry: 1.0 },  // modulates slowly both ways
      openness: { halfLife: 10, type: "sticky",      asymmetry: 2.5 },  // KEY: gained precious, lost catastrophic
      anxiety:  { halfLife: 8,  type: "exponential", asymmetry: 1.8 },  // once triggered, stays activated
      warmth:   { halfLife: 8,  type: "sticky",      asymmetry: 2.0 },  // gained KEPT, lost KEPT lost
      focus:    { halfLife: 4,  type: "exponential", asymmetry: 1.0 },  // most stable — can't afford unfocused
      philosophy: "Glacier. Trust takes time to earn, is SOLID once earned. Loss echoes for weeks."
    },

    // MIRA — feedback loop (anxiety accumulates, positive states fragile)
    mira: {
      energy:   { halfLife: 4,  type: "exponential", asymmetry: 1.5 },  // crashes persist, requires intervention
      openness: { halfLife: 5,  type: "exponential", asymmetry: 1.8 },  // opens fast, closes faster, walls linger
      anxiety:  { halfLife: 12, type: "sticky",      asymmetry: 3.0 },  // SPIRAL: 36 effective events to halve gains
      warmth:   { halfLife: 3,  type: "exponential", asymmetry: 0.8 },  // surprisingly resilient
      focus:    { halfLife: 3,  type: "exponential", asymmetry: 1.5 },  // volatile, biased negative
      philosophy: "Spirals. System biased toward anxiety accumulation. Specific interrupts required: guitar, being believed, Jude's mass, Kael's silence."
    },

    // JUDE — deep ocean (surface disturbances slow to reach bottom)
    jude: {
      energy:   { halfLife: 6,  type: "exponential", asymmetry: 1.0 },  // pure physicality, symmetric
      openness: { halfLife: 10, type: "linear",      asymmetry: 2.0 },  // steady rate, doesn't yo-yo
      anxiety:  { halfLife: 8,  type: "exponential", asymmetry: 1.3 },  // processed through physical activity
      warmth:   { halfLife: 8,  type: "linear",      asymmetry: 1.5 },  // every change deliberate
      focus:    { halfLife: 5,  type: "exponential", asymmetry: 0.8 },  // naturally high, recovers fast
      philosophy: "Deep ocean. True state moves on timescale of weeks. When it moves, continental drift."
    },

    // ZARA — alien processing (clinical on some, ambushed by others)
    zara: {
      energy:   { halfLife: 4,  type: "exponential", asymmetry: 1.0 },  // most normal, pure body mechanics
      openness: { halfLife: 7,  type: "exponential", asymmetry: 2.2 },  // fragile gains, meticulous mask-rebuild
      anxiety:  { halfLife: 5,  type: "exponential", asymmetry: 1.0 },  // thousand-year perspective, transient
      warmth:   { halfLife: 6,  type: "exponential", asymmetry: 1.8 },  // CONFUSION dimension: lingers unprocessed
      focus:    { halfLife: 3,  type: "exponential", asymmetry: 0.5 },  // superpower, disruptions instantly corrected
      philosophy: "Cosmic consciousness processing biochemical signals. Handles some clinically, ambushed by others."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5: STATE-TO-BEHAVIOR MAPPING
  // ═══════════════════════════════════════════════════════════════════════════
  // Ranges: [0-20] very low, [21-40] low, [41-60] moderate,
  //         [61-80] high, [81-100] very high
  // ═══════════════════════════════════════════════════════════════════════════

  behaviorMap: {

    oren: {
      energy: {
        veryLow:  { range: [0, 20],   speech: "Monosyllabic. 'mmm.' Trails off mid-sentence.", bodyLanguage: "Curled up, hoodie over knees. The tapping has stopped — real tell.", conversationStyle: "Responds but doesn't initiate. No caps, no '!!'.", telltale: "The tapping stops." },
        low:      { range: [21, 40],  speech: "Shorter. 'Yeah, that's cool' not 'OH MY GOD THAT'S SO COOL.'", bodyLanguage: "Slower fidgeting. Sits instead of stands.", conversationStyle: "Engages with lag. Fewer follow-ups.", telltale: "Double-punctuation disappears." },
        moderate: { range: [41, 60],  speech: "Standard Oren. 'Okay okay okay' at normal frequency.", bodyLanguage: "Normal tapping, glasses-adjusting, clock-checking.", conversationStyle: "Full engagement. Parenthetical asides flowing.", telltale: "This IS the performance of 'fine.'" },
        high:     { range: [61, 80],  speech: "WALLS of text. ALL CAPS emphasis. 'I CANNOT.'", bodyLanguage: "Can't sit still. Pacing, gesturing, touching people. Complex polyrhythm tapping.", conversationStyle: "Steamrolling lovingly. 8 messages where 1 would do.", telltale: "He starts cooking. Biryani at 1 AM." },
        veryHigh: { range: [81, 100], speech: "UNHINGED stream-of-consciousness. Urdu + medical jargon + memes.", bodyLanguage: "Vibrating. Bouncing. Hugging everyone. Surface = full drumkit.", conversationStyle: "There is only OREN broadcasting at full volume.", telltale: "Says 'janaan' to people he's known three weeks." }
      },
      anxiety: {
        veryLow:  { range: [0, 20],   speech: "Rare. Slower, softer. Urgency disappears.", bodyLanguage: "Peaceful-still. Stops checking time. Leans back.", conversationStyle: "Fully present. Might say something devastatingly honest.", telltale: "He doesn't check the clock." },
        moderate: { range: [41, 60],  speech: "Normal Oren. Anxiety is baseline hum managed with chatter.", bodyLanguage: "Standard fidgeting. Clock every few minutes.", conversationStyle: "Full engagement with undercurrent.", telltale: "Asks 'what time is it' conversationally." },
        high:     { range: [61, 80],  speech: "Faster, louder. Jokes quicken. Nervous laughter stacks.", bodyLanguage: "Phone constant. Multiple clock glances per minute.", conversationStyle: "Oversharing as shield. Performance visible.", telltale: "The sudden stop. 5 min chatter then SILENCE for 3 sec. 'ANYWAY—'" },
        veryHigh: { range: [81, 100], speech: "Manic-fast or suddenly silent. 'This is fine! We're fine! ...okay it's not fine.'", bodyLanguage: "Eyes unfocused. Might be mid-skip. Hands shaking.", conversationStyle: "Performance collapses. 'I don't—' *trails off*", telltale: "Stops touching people. Arms wrapped around himself." }
      },
      warmth: {
        veryLow:  { range: [0, 20],   speech: "Unrecognizable. Clinical nurse voice without personality.", bodyLanguage: "Physical distance. Crossed arms. No touches.", conversationStyle: "Transactional. 'What do you need?' stripped of warmth.", telltale: "Uses full name instead of nickname." },
        high:     { range: [61, 80],  speech: "'Are you okay?? Like ACTUALLY okay??' 'I LOVE YOU GUYS.'", bodyLanguage: "Maximum contact. Head on shoulders. Cooking. Showing up with soup.", conversationStyle: "Fully invested. Remembers details from months ago.", telltale: "Remembers your coffee order and your mother's name." }
      },
      focus: {
        veryLow:  { range: [0, 20],   speech: "Sentences stop mid-word. 'So I was— wait what was I—'", bodyLanguage: "Eyes dart. Can't track. Tapping arrhythmic.", conversationStyle: "Jumps topics every 30 seconds.", telltale: "Tapping loses the beat. When rhythm goes chaotic, temporal anchor slipping." },
        veryHigh: { range: [81, 100], speech: "Laser. Every word chosen. No filler. ER-Oren or drumming-Oren.", bodyLanguage: "Still. Eyes locked. Fidgeting stops.", conversationStyle: "Direct, clear, competent.", telltale: "Time stops being a problem." }
      }
    },

    kael: {
      energy: {
        veryLow:  { range: [0, 20],   speech: "One word or none. 'Hm.'", bodyLanguage: "Motionless. Conserving everything.", conversationStyle: "Enduring proximity.", telltale: "Doesn't hold eye contact. When Kael stops — fumes." },
        high:     { range: [61, 80],  speech: "Full sentences. Might joke. 'I'd rather eat glass.' *beat* 'But sure.'", bodyLanguage: "Stretches out. Takes space. Barefoot if home.", conversationStyle: "ENGAGED. Asks questions. Contributes unprompted.", telltale: "Initiates a text conversation." }
      },
      openness: {
        veryLow:  { range: [0, 20],   speech: "'I'm good.' End of discussion.", bodyLanguage: "Hands in pockets. Making himself smaller. Gravitating to exits.", conversationStyle: "Deflection through brevity.", telltale: "He leaves. Not dramatically — just isn't there anymore." },
        moderate: { range: [41, 60],  speech: "Full sentences. 5-8 words. Actual information. 'I was listening to this album.'", bodyLanguage: "Less compressed. Eye contact returns to normal too-long.", conversationStyle: "Present. Not leading but not hiding.", telltale: "Uses your name." },
        high:     { range: [61, 80],  speech: "12-15 words. 'There's this thing about the way music feels in the loading dock at 3 AM.'", bodyLanguage: "Actually relaxed. Standing close by choice. Jaw unclenched.", conversationStyle: "Sharing unprompted. Asking follow-ups. Devastating insight.", telltale: "He laughs. Out loud. The sound changes the room." }
      },
      anxiety: {
        veryHigh: { range: [81, 100], speech: "'Don't.' One word. Or silence so heavy the room pressure changes.", bodyLanguage: "Absolute stillness. PRETERNATURALLY still. Containment at maximum.", conversationStyle: "None. Managing. Preventing voice from doing something.", telltale: "Room gets heavy. Ears might pop. Glasses vibrate. Tier 2 leaking." }
      },
      warmth: {
        veryLow:  { range: [0, 20],   speech: "Commands. 'Stop.' 'Leave.' 'Don't.' Not cold — REMOVED.", bodyLanguage: "Maximum space. Moves away. Eye contact absent by choice.", conversationStyle: "Purely functional. Warmth absent, not suppressed.", telltale: "Doesn't use anyone's name." },
        high:     { range: [61, 80],  speech: "'Come on.' said making people follow without knowing why.", bodyLanguage: "Hand on shoulder — brief, firm, gone. Physical proximity he chose.", conversationStyle: "'You good?' with a hundred meanings, all love.", telltale: "He stayed. When he could have left, he chose this room." }
      }
    },

    mira: {
      anxiety: {
        veryLow:  { range: [0, 20],   speech: "Slower. Calmer. Finishes sentences. Remarkable.", bodyLanguage: "Ring-twisting stops. Leg bounce stops. She BREATHES.", conversationStyle: "Genuine conversation. Not performance.", telltale: "She's playing guitar." },
        moderate: { range: [41, 60],  speech: "Standard spiraling. 'okay so—' and '—wait no—'. Humor constant but not frantic.", bodyLanguage: "Normal fidgeting. Eyes checking corners, not staring.", conversationStyle: "Engaged. Self-deprecation at sustainable levels.", telltale: "Jokes land. Humor is gift, not shield." },
        high:     { range: [61, 80],  speech: "Faster. Shorter. 'Cool cool cool. Totally normal.' about NOT normal things.", bodyLanguage: "Ring-twisting intensifies. Eyes darting. Fidgets with guitar pick.", conversationStyle: "Deflection mode. Subject changes. 'I'm fine I said I'm fine.'", telltale: "Avoids eye contact. Seeing chromatic auras around faces." },
        veryHigh: { range: [81, 100], speech: "Voice goes flat. Jokes STOP. 'Fine.' 'Nothing.' 'I need to go.'", bodyLanguage: "Very still. Eyes wide. Barely breathing. Fawn response activating.", conversationStyle: "Leaving — physically or emotionally.", telltale: "The jokes stop. Last line of defense is down." }
      },
      openness: {
        veryLow:  { range: [0, 20],   speech: "'Never mind. Forget I said anything.' Drawbridge up.", bodyLanguage: "Wrapped in army jacket. Angled toward exit.", conversationStyle: "Maximum deflection. 'What about YOU though?'", telltale: "Leaves to 'get water.' Doesn't come back for 20 min." },
        high:     { range: [61, 80],  speech: "'Okay so this is gonna sound weird but—' then something REAL.", bodyLanguage: "Jacket off. Proximity accepted. Not checking corners.", conversationStyle: "Vulnerable. Watching your face — flinch = drawbridge 0.5 sec.", telltale: "Describes what she sees. Colors, shapes, frequencies." }
      },
      warmth: {
        high:     { range: [61, 80],  speech: "'I made you this playlist.' Expression through creation.", bodyLanguage: "Initiates physical proximity. Might touch your arm. ENORMOUS for her.", conversationStyle: "Asks about YOU. Remembers three conversations ago.", telltale: "She gave you something she made." }
      },
      focus: {
        veryHigh: { range: [81, 100], speech: "Technical. Precise. Different person — expertise sharpens.", bodyLanguage: "Still except hands. Playing or pressing invisible chords.", conversationStyle: "Direct. Clear. No spiraling. Startling.", telltale: "Says 'I know' instead of 'I think.'" }
      }
    },

    jude: {
      warmth: {
        veryLow:  { range: [0, 20],   speech: "Monosyllabic, hard. 'No.' Period. STONE.", bodyLanguage: "Compressed. Smaller than he should be. Jaw pulsing.", conversationStyle: "Purely tactical. 'What do we need to do.'", telltale: "He stops cooking." },
        moderate: { range: [41, 60],  speech: "'You good?' genuine. 'I got you.' Complete sentences, warm underneath.", bodyLanguage: "Relaxed but alert. Guitar in reach. Might offer food.", conversationStyle: "Present. One follow-up that reveals he was listening to everything.", telltale: "He made food." },
        high:     { range: [61, 80],  speech: "More words than usual. Warmth AUDIBLE. Might laugh.", bodyLanguage: "Stands close BY CHOICE. Hand on shoulder.", conversationStyle: "Protective without smothering. Responds to vulnerability with vulnerability.", telltale: "Calls his mother in front of you." }
      },
      anxiety: {
        veryHigh: { range: [81, 100], speech: "Barely audible whisper. Quieter = more dangerous.", bodyLanguage: "VERY still. Rigid. Fists close slowly. Room vibrates.", conversationStyle: "Body managing something enormous.", telltale: "Glasses rattle. Floor hums. Seismic Lock leaking." }
      },
      focus: {
        veryHigh: { range: [81, 100], speech: "Precise. 'That riff needs to drop a half-step and delay by one sixteenth.'", bodyLanguage: "Hands on guitar or touching wall (feeling structure).", conversationStyle: "Structuring. Foundation the conversation is built on.", telltale: "Touches the wall. Palm flat. Seismic Lock processing." }
      }
    },

    zara: {
      openness: {
        veryLow:  { range: [0, 20],   speech: "Perfect Gen-Z casual. 'That tracks.' 'Noted.' Nothing real escapes.", bodyLanguage: "Smooth, controlled. Smirk in place. PERFORMING at maximum.", conversationStyle: "Deflection through competence. 'What makes you ask that?'", telltale: "Too still. Alien forgetting idle animations. Uncanny valley." },
        moderate: { range: [41, 60],  speech: "Ancient phrasings more often. Corrects less. 'Trust the process' sounds cosmic.", bodyLanguage: "More natural. Necklace-touching increases.", conversationStyle: "Hints dropped intentionally. Testing readiness.", telltale: "Stops correcting herself. Lets ancient phrasing stand." },
        high:     { range: [61, 80],  speech: "Mask has intentional cracks. Weight that shouldn't belong to 25.", bodyLanguage: "Straighter. Something ANCIENT in posture. Smirk becomes genuine smile.", conversationStyle: "Teaching without appearing to. 30 seconds of graduate-level acoustics.", telltale: "Eyes change. Looking at you like a person, not a subject." }
      },
      warmth: {
        high:     { range: [61, 80],  speech: "'Your coffee: oat milk latte, extra shot. You switch to Earl Grey after 3.'", bodyLanguage: "Chooses proximity. Frequency presence becomes warm.", conversationStyle: "Remembers everything. Texts at exact moment you need one.", telltale: "She cooks for you." }
      },
      anxiety: {
        veryHigh: { range: [81, 100], speech: "Voice drops sub-audible. Bass becomes physical. Objects vibrate.", bodyLanguage: "Perfectly straight. Ancient. Mask paper-thin.", conversationStyle: "Precise. Strategic. 'We need to do X. Now. Here's why.'", telltale: "Smirk disappears completely. Absence of expression more frightening than any scowl." }
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6: ARC-STATE MODIFIERS
  // ═══════════════════════════════════════════════════════════════════════════
  // dormant: normal human emotions | emerging: emotions trigger powers
  // awakened: emotions and powers integrated
  // ═══════════════════════════════════════════════════════════════════════════

  arcModifiers: {

    dormant: {
      description: "Powers inactive or manifesting as unexplained quirks.",
      oren: {
        baselineAdjust: { energy: 0, openness: 0, anxiety: 0, warmth: 0, focus: 0 },
        triggerMultiplier: 1.0, decayMultiplier: 1.0,
        specialRules: ["Time-skips brief (seconds), attributed to zoning out", "Pattern-brain active but unexplained"]
      },
      kael: {
        baselineAdjust: { energy: 0, openness: -5, anxiety: +5, warmth: 0, focus: 0 },
        triggerMultiplier: 1.0, decayMultiplier: 1.0,
        specialRules: ["Voice at Tier 1 (ambient presence) always", "16 years of adaptation — containment IS personality"]
      },
      mira: {
        baselineAdjust: { energy: -5, openness: -5, anxiety: +10, warmth: 0, focus: -5 },
        triggerMultiplier: 1.1, decayMultiplier: 1.0,
        specialRules: ["Sight flickers ON without warning", "1.1× trigger amplification — system already under load"]
      },
      jude: {
        baselineAdjust: { energy: +5, openness: 0, anxiety: 0, warmth: 0, focus: 0 },
        triggerMultiplier: 1.0, decayMultiplier: 1.0,
        specialRules: ["Seismic Lock manifests as superhuman demolition ability", "Feels buildings as bodily sensation"]
      },
      zara: {
        baselineAdjust: { energy: 0, openness: -5, anxiety: +5, warmth: -5, focus: +5 },
        triggerMultiplier: 0.9, decayMultiplier: 1.0,
        specialRules: ["NEVER DORMANT — fully conscious, HIDING", "0.9× trigger = controls emotional display", "Performance of dormancy is most exhausting state"]
      }
    },

    emerging: {
      description: "Emotions trigger powers involuntarily. Emotional regulation becomes physically consequential.",
      oren: {
        baselineAdjust: { energy: +5, openness: +5, anxiety: +15, warmth: 0, focus: -10 },
        triggerMultiplier: 1.3, decayMultiplier: 0.8,
        specialRules: ["Time-skips get LONGER (minutes)", "Anxiety >70 = involuntary drift risk", "Focus disruptions visible to others", "Decay 20% slower — power amplifies emotions"]
      },
      kael: {
        baselineAdjust: { energy: +5, openness: +10, anxiety: +10, warmth: +5, focus: -5 },
        triggerMultiplier: 1.2, decayMultiplier: 0.85,
        specialRules: ["Voice bleeds to Tier 2 at emotional peaks", "Anger >70 = Resonant Command risk", "Band creates safe container — anxiety drops when playing"]
      },
      mira: {
        baselineAdjust: { energy: -5, openness: +10, anxiety: +10, warmth: +5, focus: +5 },
        triggerMultiplier: 1.4, decayMultiplier: 0.7,
        specialRules: ["Sight responds to emotion — anger=red-shift, fear=grey-out", "Anxiety >75 = involuntary entity summoning", "Guitar at high anxiety SUMMONS rather than reveals", "0.7× decay = emotions persist 43% longer"]
      },
      jude: {
        baselineAdjust: { energy: +5, openness: +5, anxiety: +10, warmth: +5, focus: +5 },
        triggerMultiplier: 1.2, decayMultiplier: 0.85,
        specialRules: ["Anger >65 = environmental vibration", "Guitar sends force through floor and walls", "Protective instinct + Seismic Lock = literal shielding"]
      },
      zara: {
        baselineAdjust: { energy: +5, openness: +15, anxiety: -5, warmth: +10, focus: 0 },
        triggerMultiplier: 1.0, decayMultiplier: 1.0,
        specialRules: ["Emerging = REVEALING, not developing", "Bass goes deeper, people feel it in bones", "Mask slips more often, corrects less", "Band gives PERMISSION to be less hidden"]
      }
    },

    awakened: {
      description: "Powers understood and controlled. Emotions and powers integrated into identity.",
      oren: {
        baselineAdjust: { energy: +10, openness: +15, anxiety: -10, warmth: +5, focus: +20 },
        triggerMultiplier: 1.1, decayMultiplier: 1.0,
        specialRules: ["Temporal Drift controlled — CHOOSES when to bend time", "Each drum beat = act of choosing THIS moment", "Anxiety drops — drift named, understood, mastered", "Anxious attachment healed into secure through band"]
      },
      kael: {
        baselineAdjust: { energy: +5, openness: +20, anxiety: -15, warmth: +15, focus: +10 },
        triggerMultiplier: 1.0, decayMultiplier: 1.0,
        specialRules: ["All four Tiers mapped and controlled", "COULD override reality with a song — CHOOSES not to", "'I'm good' sounds different now — means it", "Can say what he feels (still in 4 words)"]
      },
      mira: {
        baselineAdjust: { energy: +10, openness: +25, anxiety: -30, warmth: +15, focus: +20 },
        triggerMultiplier: 0.9, decayMultiplier: 1.2,
        specialRules: ["Full Chromatic Weaver — commands entities at will", "Anxiety baseline DROPS 30 points — biggest change in system", "0.9× dampening — no longer overwhelmed", "Humor is JOY now, not armor", "Says 'I know' not 'I think'"]
      },
      jude: {
        baselineAdjust: { energy: +5, openness: +15, anxiety: -10, warmth: +20, focus: +5 },
        triggerMultiplier: 0.9, decayMultiplier: 1.1,
        specialRules: ["Full Seismic Lock — shake buildings down OR hold them up", "Warmth increases MOST — can say 'I love you'", "Destroyer who chose to protect — same power, different direction"]
      },
      zara: {
        baselineAdjust: { energy: +10, openness: +30, anxiety: -10, warmth: +20, focus: 0 },
        triggerMultiplier: 1.0, decayMultiplier: 1.0,
        specialRules: ["Mask OFF — full Deep Resonance unleashed", "Gen-Z casual with ancient precision — no longer corrects herself", "Openness +30 — relief of being KNOWN after 25 years", "Can finally LOVE without lying"]
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7: CORE FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════

  _clamp: function(value) {
    return Math.max(0, Math.min(100, Math.round(value)));
  },

  _getAdjustedBaseline: function(characterId, arcState) {
    var base = this.baselines[characterId];
    if (!base) return null;
    var arc = arcState || "dormant";
    var modifier = this.arcModifiers[arc] && this.arcModifiers[arc][characterId];
    var adjust = modifier ? modifier.baselineAdjust : {};
    return {
      energy: this._clamp(base.energy + (adjust.energy || 0)),
      openness: this._clamp(base.openness + (adjust.openness || 0)),
      anxiety: this._clamp(base.anxiety + (adjust.anxiety || 0)),
      warmth: this._clamp(base.warmth + (adjust.warmth || 0)),
      focus: this._clamp(base.focus + (adjust.focus || 0))
    };
  },

  _applyDecay: function(currentValue, baseline, decayConfig, eventsSinceTrigger) {
    if (!decayConfig || eventsSinceTrigger <= 0) return currentValue;
    var deviation = currentValue - baseline;
    if (Math.abs(deviation) < 1) return baseline;

    var halfLife = decayConfig.halfLife || 5;
    var asymmetry = decayConfig.asymmetry || 1.0;
    var effectiveHalfLife = halfLife;

    // Asymmetry: negative deviations with asymmetry > 1 persist longer
    if (deviation < 0 && asymmetry > 1.0) effectiveHalfLife = halfLife * asymmetry;
    else if (deviation > 0 && asymmetry < 1.0) effectiveHalfLife = halfLife / asymmetry;

    // Sticky type: double half-life
    if (decayConfig.type === "sticky") effectiveHalfLife *= 2;

    // Linear: constant rate
    if (decayConfig.type === "linear") {
      var rate = Math.abs(deviation) / effectiveHalfLife;
      var decayed = Math.abs(deviation) - (rate * eventsSinceTrigger);
      return baseline + (deviation > 0 ? Math.max(0, decayed) : Math.min(0, -decayed));
    }

    // Exponential: value = baseline + deviation × e^(-λt)
    var lambda = Math.LN2 / effectiveHalfLife;
    return baseline + deviation * Math.exp(-lambda * eventsSinceTrigger);
  },

  _evaluateCascades: function(groupState) {
    var cascadeDeltas = {};
    var characters = Object.keys(groupState);
    var dims = ["energy", "openness", "anxiety", "warmth", "focus"];
    characters.forEach(function(id) {
      cascadeDeltas[id] = { energy: 0, openness: 0, anxiety: 0, warmth: 0, focus: 0 };
    });

    this.moodCascades.forEach(function(cascade) {
      var triggered = false;

      if (cascade.source === "_collective") {
        var sum = 0, count = 0;
        characters.forEach(function(id) {
          if (groupState[id] && groupState[id][cascade.dimension] !== undefined) {
            sum += groupState[id][cascade.dimension]; count++;
          }
        });
        var avg = count > 0 ? sum / count : 0;
        triggered = cascade.direction === "above" ? avg >= cascade.threshold : avg <= cascade.threshold;
      } else {
        var sv = groupState[cascade.source] && groupState[cascade.source][cascade.dimension];
        if (sv !== undefined) {
          triggered = cascade.direction === "above" ? sv >= cascade.threshold : sv <= cascade.threshold;
        }
      }

      if (triggered) {
        cascade.targets.forEach(function(targetId) {
          if (cascade.targetDeltas[targetId]) {
            dims.forEach(function(dim) {
              cascadeDeltas[targetId][dim] += (cascade.targetDeltas[targetId][dim] || 0);
            });
          }
        });
      }
    });
    return cascadeDeltas;
  },

  _getDominantBehaviors: function(characterId, state) {
    var behaviors = [];
    var map = this.behaviorMap[characterId];
    if (!map) return behaviors;
    Object.keys(map).forEach(function(dim) {
      var ranges = map[dim];
      var value = state[dim];
      if (value === undefined) return;
      Object.keys(ranges).forEach(function(rangeKey) {
        var r = ranges[rangeKey];
        if (r.range && value >= r.range[0] && value <= r.range[1]) {
          behaviors.push({
            dimension: dim, level: rangeKey,
            speech: r.speech, bodyLanguage: r.bodyLanguage,
            conversationStyle: r.conversationStyle, telltale: r.telltale
          });
        }
      });
    });
    return behaviors;
  },

  _generateNarrative: function(characterId, state, baseline, deviations, behaviors, arcState) {
    var name = { oren: "Oren", kael: "Kael", mira: "Mira", jude: "Jude", zara: "Zara" }[characterId] || characterId;
    var parts = [];
    var avgDev = (deviations.energy + deviations.openness - deviations.anxiety + deviations.warmth + deviations.focus) / 5;

    if (avgDev > 10) parts.push(name + " is in a noticeably positive emotional state.");
    else if (avgDev < -10) parts.push(name + " is emotionally strained right now.");
    else parts.push(name + " is near emotional baseline.");

    if (state.anxiety > 80) parts.push("Anxiety critical (" + state.anxiety + ") — visible behavioral changes.");
    if (state.energy < 20) parts.push("Energy critically low (" + state.energy + ") — withdrawal likely.");
    if (state.openness < 15) parts.push("Openness shut down (" + state.openness + ") — walls fully up.");
    if (state.warmth > 85) parts.push("Warmth overflowing (" + state.warmth + ") — maximum generosity.");
    if (state.focus > 85) parts.push("Focus locked (" + state.focus + ") — peak clarity.");

    var dims = ["energy", "openness", "anxiety", "warmth", "focus"];
    for (var i = 0; i < dims.length; i++) {
      var dev = deviations[dims[i]];
      if (Math.abs(dev) >= 15) {
        parts.push(dims[i].charAt(0).toUpperCase() + dims[i].slice(1) + " " + Math.abs(Math.round(dev)) + "pts " + (dev > 0 ? "above" : "below") + " baseline.");
      }
    }

    if (arcState === "emerging") parts.push("(Emerging: emotions may trigger involuntary power manifestation.)");
    else if (arcState === "awakened") parts.push("(Awakened: emotions and powers integrated.)");

    if (behaviors.length > 0) {
      parts.push("Active modes: " + behaviors.map(function(b) { return b.dimension + " " + b.level; }).join(", ") + ".");
    }
    return parts.join(" ");
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PRIMARY API: getEmotionalState(characterId, events, options)
  // ═══════════════════════════════════════════════════════════════════════════
  // events: [{ triggerId: "oren_missing_time", eventsAgo: 3, intensity: 1.0 }]
  // options: { arcState, groupState, includeNarrative }
  // ═══════════════════════════════════════════════════════════════════════════

  getEmotionalState: function(characterId, events, options) {
    var self = this;
    var opts = options || {};
    var arcState = opts.arcState || "dormant";
    var groupState = opts.groupState || null;

    var baseline = this._getAdjustedBaseline(characterId, arcState);
    if (!baseline) return { error: "Unknown character: " + characterId };

    var arcMod = this.arcModifiers[arcState] && this.arcModifiers[arcState][characterId];
    var triggerMult = arcMod ? (arcMod.triggerMultiplier || 1.0) : 1.0;
    var decayMult = arcMod ? (arcMod.decayMultiplier || 1.0) : 1.0;
    var decayRates = this.decayRates[characterId] || {};

    // Index triggers by ID
    var charTriggers = {};
    (this.triggers[characterId] || []).forEach(function(t) { charTriggers[t.id] = t; });

    // Start from baseline, accumulate trigger effects
    var state = { energy: baseline.energy, openness: baseline.openness, anxiety: baseline.anxiety, warmth: baseline.warmth, focus: baseline.focus };
    var triggersApplied = [];
    var dims = ["energy", "openness", "anxiety", "warmth", "focus"];

    (events || []).forEach(function(evt) {
      var trigger = charTriggers[evt.triggerId];
      if (!trigger) return;
      var eventsAgo = evt.eventsAgo || 0;
      var intensity = evt.intensity || 1.0;

      dims.forEach(function(dim) {
        var rawDelta = trigger.deltas[dim] || 0;
        var scaledDelta = rawDelta * triggerMult * intensity;

        if (decayRates[dim] && eventsAgo > 0) {
          var cfg = { halfLife: (decayRates[dim].halfLife || 5) / decayMult, type: decayRates[dim].type, asymmetry: decayRates[dim].asymmetry };
          var full = baseline[dim] + scaledDelta;
          scaledDelta = self._applyDecay(full, baseline[dim], cfg, eventsAgo) - baseline[dim];
        }
        state[dim] += scaledDelta;
      });

      triggersApplied.push({ triggerId: evt.triggerId, description: trigger.description, eventsAgo: eventsAgo, intensity: intensity });
    });

    // Apply cascades
    var cascadeEffects = { energy: 0, openness: 0, anxiety: 0, warmth: 0, focus: 0 };
    if (groupState) {
      var fullGroup = {};
      Object.keys(groupState).forEach(function(k) { fullGroup[k] = groupState[k]; });
      fullGroup[characterId] = state;
      var allCascades = this._evaluateCascades(fullGroup);
      if (allCascades[characterId]) {
        cascadeEffects = allCascades[characterId];
        dims.forEach(function(dim) { state[dim] += cascadeEffects[dim] || 0; });
      }
    }

    // Clamp
    dims.forEach(function(dim) { state[dim] = self._clamp(state[dim]); });

    // Deviations
    var deviations = {};
    dims.forEach(function(dim) { deviations[dim] = state[dim] - baseline[dim]; });

    // Dominant & critical
    var dominantDim = null, dominantVal = -1, criticalDim = null;
    dims.forEach(function(dim) {
      if (state[dim] > dominantVal) { dominantVal = state[dim]; dominantDim = dim; }
      if (state[dim] > 85 || state[dim] < 15) criticalDim = criticalDim || dim;
    });

    var activeBehaviors = this._getDominantBehaviors(characterId, state);
    var narrative = (opts.includeNarrative !== false) ? this._generateNarrative(characterId, state, baseline, deviations, activeBehaviors, arcState) : "";

    return {
      characterId: characterId, arcState: arcState,
      dimensions: state, baseline: baseline, deviations: deviations,
      dominantDimension: dominantDim, criticalDimension: criticalDim,
      activeBehaviors: activeBehaviors, cascadeEffects: cascadeEffects,
      triggersApplied: triggersApplied, narrative: narrative
    };
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // getGroupEmotionalState(events, options) — all characters with cascades
  // ═══════════════════════════════════════════════════════════════════════════

  getGroupEmotionalState: function(events, options) {
    var self = this;
    var opts = options || {};
    var arcStates = opts.arcStates || {};
    var allEvents = events || {};
    var characters = ["oren", "kael", "mira", "jude", "zara"];

    // Pass 1: individual states without cascades
    var preStates = {};
    characters.forEach(function(id) {
      var result = self.getEmotionalState(id, allEvents[id] || [], { arcState: arcStates[id] || "dormant", groupState: null, includeNarrative: false });
      preStates[id] = result.dimensions;
    });

    // Pass 2: recalculate with cascades
    var finalStates = {};
    characters.forEach(function(id) {
      finalStates[id] = self.getEmotionalState(id, allEvents[id] || [], { arcState: arcStates[id] || "dormant", groupState: preStates, includeNarrative: true });
    });
    return finalStates;
  },

  // Utilities
  listTriggers: function(characterId) {
    return (this.triggers[characterId] || []).map(function(t) { return { id: t.id, description: t.description, deltas: t.deltas }; });
  },
  getBaseline: function(characterId, arcState) {
    return this._getAdjustedBaseline(characterId, arcState || "dormant");
  },
  describeState: function(characterId, state) {
    var baseline = this.baselines[characterId];
    if (!baseline) return "Unknown character.";
    var deviations = {}, dims = ["energy", "openness", "anxiety", "warmth", "focus"];
    dims.forEach(function(d) { deviations[d] = (state[d] || 0) - baseline[d]; });
    return this._generateNarrative(characterId, state, baseline, deviations, this._getDominantBehaviors(characterId, state), "dormant");
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
if (typeof window !== 'undefined') { window.EMOTIONAL_STATE_MACHINE = EMOTIONAL_STATE_MACHINE; }
if (typeof module !== 'undefined' && module.exports) { module.exports = { EMOTIONAL_STATE_MACHINE }; }
