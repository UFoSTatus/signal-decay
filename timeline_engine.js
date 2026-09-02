// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — TIMELINE ENGINE
// ═══════════════════════════════════════════════════════════════════════════════
// Canonical timeline of all events across the Signal Decay universe.
// Covers: cosmic prehistory → Legacy founding → Resonant lives →
//         Harmonic childhoods → high school → pre-band → present day →
//         foreshadowed future arcs.
//
// Usage: TIMELINE_ENGINE.getCharacterTimeline('oren') — chronological events
//        TIMELINE_ENGINE.getEventsByCategory('ancient') — by category
//        TIMELINE_ENGINE.getConnectedEvents('evt_id') — cross-reference graph
//        TIMELINE_ENGINE.getEventsByDateRange('2013','2017') — range query
//        TIMELINE_ENGINE.searchEvents('keyword') — full-text search
//
// Source files:
//   APP_SIGNAL_EVENTS.md, LIFE_EVENTS_AND_SEASONS.md, HIGH_SCHOOL_YEARS.md,
//   CHILDHOOD_VISITS.md, THE_LEGACY.md, THE_RESONANTS_INDIVIDUAL_ARCS.md,
//   S01E01_STATIC.md, S01E02_CONVERGENCE.md, THE_NIGHT_THEY_MEET.md,
//   character_engines.js
//
// Format: ES5-compatible global object (PWA renderer constraint)
// ═══════════════════════════════════════════════════════════════════════════════

var TIMELINE_ENGINE = {

  // ───────────────────────────────────────────────────────────────────────────
  // META
  // ───────────────────────────────────────────────────────────────────────────
  meta: {
    version: "1.0.0",
    created: "2026-09-02",
    total_events: 0,  // set at init
    categories: [
      "ancient", "legacy", "resonant", "childhood", "highschool",
      "preband", "present", "future_seed"
    ],
    significance_scale: "1 (minor texture) to 5 (universe-altering)",
    sagas: {
      awakening: { seasons: [1, 2, 3], label: "Awakening Saga" },
      fracture:  { seasons: [4, 5, 6], label: "Fracture Saga" },
      resolution:{ seasons: [7, 8, 9], label: "Resolution Saga" }
    }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CHARACTER REGISTRY
  // ───────────────────────────────────────────────────────────────────────────
  characters: {
    oren: {
      id: "oren",
      full_name: "Oren Malik",
      soul_name: "Ori-Tahn",
      dob: "1999-03-15",
      birth_year: 1999,
      age_in_2026: 27,
      role: "Drums",
      power: "Temporal Drift / The Five-Hand Paradox",
      power_status: "dormant_leaking",
      ethnicity: "Pakistani-American",
      location_origin: "Evanston, IL → Chicago South Side (Hyde Park)",
      location_present: "Chicago, studio apartment above laundromat on 55th St",
      high_school: "Kenwood Academy (2013-2017)",
      family: {
        father: "Dr. Samir Malik (deceased May 22, 2013 — physics professor, DePaul)",
        mother: "Dr. Farah Malik (sociology, UIC)",
        sister: "Layla Malik (older by 4 years)"
      },
      harmonic_designation: "HARMONIC-5 / ECHO-5",
      resonant_mirror: "Soren 'The Fifth' (Pocket Weaver, deceased)",
      day_job: "ER nurse / recording studio work"
    },
    jude: {
      id: "jude",
      full_name: "Jude Okafor",
      soul_name: "Jha-Dur",
      dob: "2000-01-01",
      birth_year: 2000,
      age_in_2026: 26,
      role: "Rhythm Guitar",
      power: "Seismic Lock",
      power_status: "dormant_leaking",
      ethnicity: "Nigerian-American",
      location_origin: "Nigeria → Chicago West Side (Austin)",
      location_present: "Chicago, small apartment",
      high_school: "Austin College & Career Academy (2014-2018)",
      family: {
        father: "Emmanuel 'Manny' Okafor (construction worker)",
        mother: "Grace Okafor (hospital cleaner)",
        sister_older: "Adanma Okafor (pre-med at UIC)",
        sister_younger: "Faith Okafor (frequency-sensitive, migraines)"
      },
      harmonic_designation: "HARMONIC-3",
      resonant_mirror: "Rev. Isaiah Hampton (Trombone, 70)",
      day_job: "Demolition worker"
    },
    zara: {
      id: "zara",
      full_name: "Zara Kovač",
      soul_name: "Za-Rah",
      dob: "2001-01-01",
      birth_year: 2001,
      age_in_2026: 25,
      role: "Bass",
      power: "Deep Resonance",
      power_status: "fully_conscious_contained",
      ethnicity: "Croatian / Black American",
      location_origin: "Chicago, Rogers Park",
      location_present: "Chicago",
      high_school: "Sullivan High School (2015-2019)",
      family: {
        father: "Ante Kovač (electrician, Croatian immigrant — the one who sees her)",
        mother: "Monique Kovač (nurse practitioner, Black American)",
        brother: "Marko Kovač (4 years younger)",
        sister: "Lena Kovač (8 years younger — frequency complement, dormant)"
      },
      harmonic_designation: "HARMONIC-4",
      resonant_mirror: "David Ashworth (Harp, 55)",
      day_job: "Sound tech at The Frequency",
      special_note: "Arrived conscious. Fully aware alien soul (Za-Rah) from crystalline lattice world. Has been self-containing since birth."
    },
    kael: {
      id: "kael",
      full_name: "Kael Voss",
      soul_name: "Kel-Voss",
      dob: "2002-03-08",
      birth_year: 2002,
      age_in_2026: 24,
      role: "Vocals",
      power: "Resonant Command",
      power_status: "dormant_suppressed_since_age_8",
      ethnicity: "Mixed Black",
      location_origin: "Raleigh, NC",
      location_present: "Chicago, studio apartment, Bronzeville → city",
      high_school: "King College Prep, Bronzeville (2016-2020)",
      family: {
        father: "Derek Voss (engineer/contractor)",
        mother: "Marissa Voss (teacher)",
        sister: "Elena Voss (3 years younger)"
      },
      harmonic_designation: "HARMONIC-1 / ALPHA-1",
      resonant_mirror: "Eleanor Voss (Piano, 65)",
      day_job: "Warehouse worker (loading dock, night shift)"
    },
    mira: {
      id: "mira",
      full_name: "Mira Chen",
      soul_name: "Mir-Xen",
      dob: "2004-06-21",
      birth_year: 2004,
      age_in_2026: 22,
      role: "Lead Guitar / Second Vocals",
      power: "Chromatic Sight / Entity Channeling / Ghost Summoning",
      power_status: "active_since_birth",
      ethnicity: "Chinese-American",
      location_origin: "San Jose / Daly City, Bay Area",
      location_present: "Chicago, Outer Sunset → moved to Chicago for band",
      high_school: "2018-2022, Bay Area",
      family: {
        father: "David Chen (or Rafael 'Rafe' Solana in alt. canon — musician)",
        mother: "Sandra Chen (or Lorna Solana — visual artist)",
        brother: "Jason Chen (older brother, in some versions)"
      },
      harmonic_designation: "HARMONIC-2",
      resonant_mirror: "Ashley Cole (Voice/Guitar, 65)",
      day_job: "Guitar teacher / gigging musician",
      special_note: "Has seen entities since birth. Born with Chromatic Sight active. Entities cataloged her at age 3."
    },
    // ─── RESONANTS ───
    eleanor: {
      id: "eleanor",
      full_name: "Eleanor Voss",
      designation: "RESONANT — The Stabilizer / The Pianist",
      dob: "1960-03-14",
      birth_year: 1960,
      instrument: "Piano",
      location: "Philadelphia → Harlem, NYC (brownstone, 132nd St)",
      status: "Active but refusing mission for 35 years",
      harmonic_pair: "Kael Voss"
    },
    david_a: {
      id: "david_a",
      full_name: "David Ashworth",
      designation: "RESONANT — The Emotional Calibrator / The Harpist",
      dob: "1970-09-03",
      birth_year: 1970,
      instrument: "Harp",
      location: "Bath, England → London → Amsterdam",
      status: "Active but self-medicating with alcohol for 25 years",
      harmonic_pair: "Zara Kovač"
    },
    isaiah: {
      id: "isaiah",
      full_name: "Rev. Isaiah Hampton",
      designation: "RESONANT — The Barrier Builder / The Horn",
      dob: "1956-01-01",
      birth_year: 1956,
      instrument: "Trombone",
      location: "Unknown — church community",
      status: "Found peace, abandoned mission",
      harmonic_pair: "Jude Okafor"
    },
    ashley: {
      id: "ashley",
      full_name: "Ashley Cole",
      designation: "RESONANT — Signal Reader / The Voice",
      dob: "1961-01-01",
      birth_year: 1961,
      instrument: "Voice / Guitar",
      location: "Unknown",
      status: "Sold his gift for fame, runs First Note Foundation as cover",
      harmonic_pair: "Mira Chen"
    },
    soren: {
      id: "soren",
      full_name: "Soren 'The Fifth'",
      designation: "RESONANT — Pocket Weaver",
      dob: "unknown",
      birth_year: null,
      instrument: "Space/Time manipulation",
      location: "Died in the space between reality",
      status: "DECEASED — killed by The Silence",
      harmonic_pair: "Oren Malik",
      special_note: "Was building a safe room for Oren's awakening. Without it, Oren's temporal drift has no sandbox."
    },
    // ─── LEGACY KEY FIGURES ───
    vought_thomas: { id: "vought_thomas", full_name: "Colonel Thomas Vought", designation: "Legacy Founder, First Rest (1947-1974)" },
    vought_elias: { id: "vought_elias", full_name: "Director Elias Vought", designation: "The Whole Rest (current), 3rd generation", birth_year: 1955 },
    zhao: { id: "zhao", full_name: "Agent Corinne Zhao", designation: "Field operative, Signal Decay surveillance", birth_year: 1991 },
    webb: { id: "webb", full_name: "Dr. Marcus Webb", designation: "Head of Reverse Engineering", birth_year: 1967 },
    okonkwo: { id: "okonkwo", full_name: "Colonel Sarah Okonkwo", designation: "Military Liaison, advocates for disclosure", birth_year: 1977 },
    chen_j: { id: "chen_j", full_name: "Dr. James Chen", designation: "Sixty-Fourth Rest, quantum physics", birth_year: 1982 }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // EVENTS — THE CANONICAL TIMELINE
  // ───────────────────────────────────────────────────────────────────────────
  events: [

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: ANCIENT — Pre-human cosmic history
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_ancient_001",
      date: "~13800000000 BCE",
      title: "The Fundamental Frequency",
      description: "The universe begins. The Big Bang is not an explosion — it is the first NOTE. A single frequency that contains all subsequent harmonics. Every vibration that will ever exist is encoded in this moment. The cosmos is, at its most fundamental level, music.",
      characters: [],
      category: "ancient",
      significance: 5,
      connected_events: ["evt_ancient_002", "evt_ancient_003"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_ancient_002",
      date: "~13000000000 BCE",
      title: "The Silence Emerges",
      description: "In the spaces between the first frequencies, an absence takes shape. Not a being — a CONDITION. The Silence is entropy applied to sound. It exists in the gaps where frequency should be and isn't. It is the anti-music — not noise, but the organized absence of vibration. It feeds on frequency the way a vacuum draws air. Every sound that fades, every note that decays, feeds The Silence. It is patient. It is vast. It is the enemy that doesn't need to act — only wait.",
      characters: [],
      category: "ancient",
      significance: 5,
      connected_events: ["evt_ancient_001", "evt_ancient_004"],
      story_refs: ["APP_SIGNAL_EVENTS.md", "THE_LEGACY.md"]
    },
    {
      id: "evt_ancient_003",
      date: "~10000000000 BCE",
      title: "The Cosmic Frequency Network Forms",
      description: "Across the galaxy, species evolve that communicate through frequency rather than language. A network of interconnected civilizations develops — each species attuned to different frequency bands. The Timekeepers (Ori-Tahn's species) perceive temporal rhythm. The crystalline lattice beings (Za-Rah's species) transmit through structural resonance. Pure-emotion species decode sustained frequencies. The galaxy is a symphony of diverse frequency-based consciousness.",
      characters: [],
      category: "ancient",
      significance: 5,
      connected_events: ["evt_ancient_001", "evt_ancient_005"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_ancient_004",
      date: "~5000000000 BCE",
      title: "The Paired Ones Die",
      description: "An ancient species that existed in pairs — always two, always resonating through sympathetic vibration — is destroyed. Their frequency pattern, based on strings vibrating without being struck, goes extinct. Three billion years later, a human will build a sitar and accidentally recreate their communication pattern. The galaxy will hear a dead species speak from Earth.",
      characters: [],
      category: "ancient",
      significance: 3,
      connected_events: ["evt_ancient_003"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_ancient_005",
      date: "~4000000000 BCE",
      title: "The Old Ones Enter Dormancy",
      description: "Beings that predate most civilizations — entities who communicate through the fundamental frequency of the universe itself (later matched by the Hammond organ) — enter a period of dormancy. They haven't been addressed in 4 billion years. Their frequency: the harmonic series. Sacred. Ancient. They will wake when someone on Earth speaks their language.",
      characters: [],
      category: "ancient",
      significance: 3,
      connected_events: ["evt_ancient_003"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_ancient_006",
      date: "~100000 BCE",
      title: "The Overtones Seed Earth",
      description: "The Overtones — the organizing intelligence of the cosmic frequency network — select Earth as a frequency incubation site. Resonant souls are sent to incarnate across human history, maintaining frequency channels between Earth and the network. Indigenous cultures develop frequency-based knowledge: Aboriginal songlines, Tibetan throat singing, West African drum languages, Navajo hózhó. Earth is not radio-silent — it whispers.",
      characters: [],
      category: "ancient",
      significance: 5,
      connected_events: ["evt_ancient_003", "evt_ancient_007", "evt_legacy_001"],
      story_refs: ["APP_SIGNAL_EVENTS.md", "THE_LEGACY.md"]
    },
    {
      id: "evt_ancient_007",
      date: "~10000 BCE",
      title: "The Ancient Builder Race Encodes Earth's Pyramids",
      description: "The Ancient Builder Race embeds frequency architecture into megalithic structures worldwide. The pyramids, standing stones, and sacred chambers are tuned to specific resonant frequencies — 110 Hz appears in chambers globally. These structures are NOT monuments — they are frequency INFRASTRUCTURE. Transmitters. Receivers. Amplifiers. The Builder Race encodes the rules of frequency manipulation into stone so that future generations can rediscover them.",
      characters: [],
      category: "ancient",
      significance: 4,
      connected_events: ["evt_ancient_006"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_ancient_008",
      date: "~5000 BCE",
      title: "Earth's Barrier Solidifies",
      description: "The frequency barrier around Earth strengthens. Whether by design (the Tall Whites? another gatekeeper?) or natural process, Earth becomes increasingly isolated from the galactic frequency network. Individual frequency leaks still occur — a musician in flow state might push a note through — but systematic communication ceases. Earth becomes a prison planet for frequency. The galaxy stops hearing from Sol-3. For 5,000 years, silence from Earth.",
      characters: [],
      category: "ancient",
      significance: 5,
      connected_events: ["evt_ancient_006", "evt_ancient_009"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_ancient_009",
      date: "~3000 BCE",
      title: "The Resonant Cycle Begins",
      description: "The Overtones establish the Resonant incarnation cycle — five specially-designed souls sent to Earth in each generation to maintain frequency channels and protect emerging Harmonics. The cycle repeats across millennia: Resonants arrive, prepare frequency infrastructure, guide Harmonics through awakening. When it works, Earth's frequency output strengthens. When it fails, the barrier thickens. Ori-Tahn, the Timekeeper soul that will eventually inhabit Oren, has completed 10,000 cycles.",
      characters: ["oren"],
      category: "ancient",
      significance: 4,
      connected_events: ["evt_ancient_006", "evt_resonant_001"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md", "HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_ancient_010",
      date: "~1000 BCE",
      title: "Ori-Tahn's War Drummer Incarnation",
      description: "In one of Ori-Tahn's previous cycles, the Timekeeper soul incarnated as a war drummer on a world with a red sky and black rock. Playing drums made of bone and stretched skin, holding sticks carved from exoskeletal material, the war drummer maintained cohesion for an army marching into a canyon trap. 40,000 died while the drummer played — stopping would have caused the survivors to lose formation. This is the trauma memory that Ori-Tahn deploys to prevent Oren from touching a drum kit.",
      characters: ["oren"],
      category: "ancient",
      significance: 4,
      connected_events: ["evt_ancient_009", "evt_hs_oren_006"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: LEGACY — The human gatekeepers
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_legacy_001",
      date: "1933",
      title: "The Magenta Bell Recovery",
      description: "An Italian fisherman discovers a bell-shaped object hovering three meters above the Tyrrhenian Sea — magenta, four meters tall, spinning, humming a note at 7.83 Hz (Earth's Schumann Resonance). The fisherman goes catatonic for the remaining 43 years of his life. Mussolini's men recover the craft. Three carriers develop perfect pitch. One goes mad claiming he can hear 'the architecture of silence.' The Bell is hidden beneath the Vatican.",
      characters: ["vought_thomas"],
      category: "legacy",
      significance: 5,
      connected_events: ["evt_legacy_002", "evt_legacy_003"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_002",
      date: "1937-07-20",
      title: "Guglielmo Marconi Dies After Studying the Bell",
      description: "Marconi makes two unauthorized visits to the Magenta Bell. His 247-page frequency notebook describes 'the carrier wave beneath all carrier waves.' His final words to his wife: 'I found the station. But no one should listen to what it's broadcasting.' His notebooks are removed from his estate before probate. Currently held in Archive Vault 3, Section M.",
      characters: [],
      category: "legacy",
      significance: 3,
      connected_events: ["evt_legacy_001"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_003",
      date: "1944",
      title: "Operation HARMONY — The Crossing",
      description: "OSS Colonel Thomas Vought leads a six-man team to recover the Magenta Bell from a bombed-out church outside Naples before the Nazis can claim it. During the nine-day crossing: two team members develop synesthesia, one begins speaking an unknown language, and Vought experiences 'temporal folding' — seeing moments happen twice from different angles. All six survive. Vought declares: 'We need to keep this. Not because it's a weapon — because it's a door. And we don't know what's on the other side.'",
      characters: ["vought_thomas"],
      category: "legacy",
      significance: 5,
      connected_events: ["evt_legacy_001", "evt_legacy_004"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_004",
      date: "1947-07",
      title: "Roswell Recovery",
      description: "Roswell, New Mexico. Thomas Vought's team arrives within hours. They recover: a small angular craft, two non-standard biological entities, and a device that — when activated — makes everyone within 50 meters simultaneously experience the same memory: being held by a parent as a child. This last device terrifies them more than anything. It proves alien technology operates on consciousness and emotion, not just physics.",
      characters: ["vought_thomas"],
      category: "legacy",
      significance: 5,
      connected_events: ["evt_legacy_003", "evt_legacy_005"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_005",
      date: "1947-08-03",
      title: "The Legacy Foundation Officially Chartered",
      description: "Ratified by The Seven Rests — seven governing seats named after musical rests (Whole, Half, Quarter, Eighth, Sixteenth, Thirty-Second, Sixty-Fourth). Mandates: recovery and containment of non-human artifacts, monitoring of frequency-anomalous events, prevention of premature disclosure, preservation of human autonomy through 'controlled ignorance.' Motto: 'We choose silence so that humanity may choose its own future — when it is ready.' Annual budget grows to ~$780 million by 2025.",
      characters: ["vought_thomas"],
      category: "legacy",
      significance: 5,
      connected_events: ["evt_legacy_004", "evt_legacy_006"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_006",
      date: "1978",
      title: "The Discord — Weaponization Attempt",
      description: "The Third Rest, Harold Briggs (former CIA), attempts to weaponize the Magenta Bell's frequency as a 'compliance frequency' for Cold War operations. The remaining six Rests deny him access. Briggs goes around them through CIA connections. Found dead three weeks later — unauthorized activation of Artifact 7-C killed him. The Foundation doesn't assassinate its own; the technology does it for those who don't understand it.",
      characters: [],
      category: "legacy",
      significance: 3,
      connected_events: ["evt_legacy_005"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_007",
      date: "1981",
      title: "The Forty-Three Seconds — Vault 6 Sealed",
      description: "A research team activates a crystalline object recovered from Brazil in 1976. For forty-three seconds, all 31 people in the Archive experience the same thing: being observed by something vast, ancient, and utterly indifferent to their existence. Not malevolent. Not benevolent. Simply aware of them the way a human might notice a bacterium. Three researchers resign immediately. One requires psychiatric hospitalization. Vault 6 is sealed permanently. The object's readings never change — until 2024, when Signal Decay first performs together.",
      characters: [],
      category: "legacy",
      significance: 4,
      connected_events: ["evt_legacy_005", "evt_present_005"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_008",
      date: "1989",
      title: "The Dampener — First Successful Test",
      description: "After 42 years of research, seven dead scientists, and $2.3 billion in development, The Legacy successfully activates The Dampener — reverse-engineered from the Magenta Bell's frequency drive. It doesn't block frequency; it creates a localized void where frequency cannot propagate. Effective radius: 15-200 meters. Duration limit: 4 hours (not due to overheating — because longer operation attracts The Silence). The Dampener is the only alien technology The Legacy has ever controlled.",
      characters: ["webb"],
      category: "legacy",
      significance: 5,
      connected_events: ["evt_legacy_001", "evt_legacy_009"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_009",
      date: "1993",
      title: "Montana Deployment — The Silence Approaches",
      description: "Second field deployment of The Dampener, targeting a frequency source in rural Montana. During operation, sensors detect something MASSIVE moving toward the Dampener field from outside — a void signature far larger than the bubble. The Silence was attracted to the artificial silence like a moth to anti-flame. Deployment cut short. The entity retreated when the Dampener was deactivated. This establishes the four-hour hard limit on all future deployments.",
      characters: [],
      category: "legacy",
      significance: 4,
      connected_events: ["evt_legacy_008", "evt_ancient_002"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_010",
      date: "1997",
      title: "Phoenix Lights Dampener Deployment",
      description: "The Dampener is deployed during the Phoenix Lights event. Partial success — reduces public frequency exposure by approximately 60%. The event becomes one of the most witnessed UFO events in history despite Legacy intervention.",
      characters: [],
      category: "legacy",
      significance: 2,
      connected_events: ["evt_legacy_008"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_011",
      date: "2008",
      title: "São Paulo Deployment — Ana Lucia Permanently Dampened",
      description: "Ana Lucia Dos Santos, a young Brazilian Resonant whose abilities activated spontaneously at age 19 — she could modulate weather through vocalization. The Legacy deploys the Dampener at close range for nearly four hours during one of her sessions. Result: her abilities are PERMANENTLY destroyed. Not suppressed — severed. She describes it as 'going deaf in a sense I didn't know existed.' She now teaches music in a São Paulo favela. Agent Zhao's file note: 'What we did to Ana Lucia is what we're planning to do to five more people.'",
      characters: ["zhao"],
      category: "legacy",
      significance: 4,
      connected_events: ["evt_legacy_008", "evt_present_009"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_legacy_012",
      date: "2016",
      title: "Ashley Cole's First Note Foundation — The Sabotage Network",
      description: "Ashley Cole (RESONANT-4) runs the First Note Foundation, publicly a charity providing instruments to underprivileged youth. In reality, the foundation is connected to Legacy networks that identify and DELAY musical development of potential Harmonics. Cole rejected Jude Okafor's grant application without committee review. Three other grants were blocked through Legacy-adjacent board members. Cole sold his gift for fame and now actively suppresses the next generation.",
      characters: ["ashley", "jude"],
      category: "legacy",
      significance: 4,
      connected_events: ["evt_hs_jude_004", "evt_resonant_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md", "THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: RESONANT — The previous generation
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_resonant_001",
      date: "1960-03-14",
      title: "Eleanor Voss Born — The Stabilizer Arrives Dormant",
      description: "Eleanor Marie Voss born in Philadelphia. She was SUPPOSED to arrive conscious — fully aware of her mission to stabilize five awakening Harmonics. Instead, sabotage scrambled the incarnation timeline, erasing pre-birth consciousness. She incarnates as a normal baby. At age 4, she climbs onto the family's $35 Kimball upright and plays a C major triad — both hands, root position, clean. 'It was already in there, Mama.' Every performance from childhood forward contains a mysterious shimmer at 437 Hz that no engineer can isolate or remove.",
      characters: ["eleanor"],
      category: "resonant",
      significance: 4,
      connected_events: ["evt_ancient_009", "evt_resonant_003"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_resonant_002",
      date: "1970-09-03",
      title: "David Ashworth Born — The Emotional Calibrator Arrives Dormant",
      description: "David James Ashworth born in Bath, England. Son of architect Geoffrey and cellist Catherine (BBC Philharmonic). At age 8, in a music shop, he walks past every instrument to a Lyon & Healy concert harp in the back. 'This one.' His dormant soul chose the harp because it's the closest Earth instrument to Za-Rah's home species' crystalline communication. He was designed to play harp for Zara from the moment of her birth, broadcasting in her home frequency: 'You're not alone. I'm here.' He wasn't there.",
      characters: ["david_a"],
      category: "resonant",
      significance: 4,
      connected_events: ["evt_ancient_009", "evt_resonant_004"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_resonant_003",
      date: "1990-11-07",
      title: "Eleanor's Remembering — The Lemon Drop, Greenwich Village",
      description: "Playing solo at The Lemon Drop (basement club, MacDougal St, 31 people). During Bill Evans' 'Peace Piece,' between the third and fourth chord — a fist unclenches inside her skull. Thirty years of memories AND cosmic memories overlap simultaneously. She knows the mission. She knows five children are coming. She knows Zara (age 3 in 1990) is already HERE, already conscious, already utterly alone. Eleanor's first thought: 'I like my life. I don't want to be responsible for five people I've never met.' She pours the Sancerre down the sink. Opens the bourbon. Begins 35 years of refusal.",
      characters: ["eleanor"],
      category: "resonant",
      significance: 5,
      connected_events: ["evt_resonant_001", "evt_resonant_005"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_resonant_004",
      date: "2000-03-15",
      title: "David's Remembering — Royal Festival Hall, London",
      description: "Alone in rehearsal, tuning his harp. He plays the lowest C — string 47. The vibration goes THROUGH the floor, through the Thames mud, through bedrock. Memories flood upward from soles to skull in four seconds. He learns a three-year-old alien consciousness (Zara, now age 3 going on 4... actually born 2001 so not yet born) is scheduled to arrive — and he was supposed to be playing harp for her first breath. He walks seven miles home. Opens the Macallan 18. Begins 25 years of drinking to dampen his emotional frequency sensitivity. Two glasses of Sancerre reduce Eleanor's spectral awareness by 40%. For David, scotch is the volume knob on a planet of screaming humans.",
      characters: ["david_a"],
      category: "resonant",
      significance: 5,
      connected_events: ["evt_resonant_002", "evt_resonant_003"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_resonant_005",
      date: "2002",
      title: "Eleanor's First Sleep-Driving Incident",
      description: "Eleanor wakes at the wheel of her Honda Civic on I-95 South, passing through Delaware, at 3:47 AM. Her body was driving toward Washington DC — toward a child named Mira Chen being visited by Hollow Ones for the first time. The Stabilizer function trying to REACH the Harmonic in distress. She pulled over, sat in the breakdown lane for forty minutes, drove home. The soul tried. The woman refused.",
      characters: ["eleanor", "mira"],
      category: "resonant",
      significance: 3,
      connected_events: ["evt_resonant_003", "evt_child_mira_001"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_resonant_006",
      date: "2009",
      title: "Eleanor's Second Sleep-Driving — Toward Kael",
      description: "2:15 AM, driving north on Saw Mill River Parkway toward the Bronx. Heading toward a frequency spike — Kael (age 11, not 7 as in some versions) experiencing an involuntary resonance command at school. Eleanor's body driving to stabilize him. She turned around. Drove home. Drank until the signal quieted. She has never told anyone about either sleep-driving incident.",
      characters: ["eleanor", "kael"],
      category: "resonant",
      significance: 3,
      connected_events: ["evt_resonant_003"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_resonant_007",
      date: "2020",
      title: "David Moves to Amsterdam — Running from the Signal",
      description: "David takes a teaching position at the Royal Conservatory of The Hague, keeps a flat in the Jordaan. Amsterdam: 3,500 miles of ocean between him and the five Harmonics converging in America. The city's 165 canals create a frequency grid — water conducts frequency, the canal network reduces emotional noise by ~15%. His cat is Orpheus II. He destroys most compositions written drunk because they contain frequency patterns that make listeners emotionally transparent.",
      characters: ["david_a"],
      category: "resonant",
      significance: 2,
      connected_events: ["evt_resonant_004"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: CHILDHOOD — Birth events, visits, early manifestations
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_child_oren_001",
      date: "1999-03-15",
      title: "Oren Malik Born",
      description: "Born in Evanston, Illinois, to Dr. Samir Malik (physics professor, DePaul) and Dr. Farah Malik (sociology, UIC). Pakistani-American family. His father plays tabla, studied physics. The soul Ori-Tahn incarnates — a Timekeeper-class being that has completed 10,000 cycles. Father's heartbeat: a natural 7/8 rhythm. Even in infancy, Oren's temporal signature is unusual — subtle time-drift barely detectable.",
      characters: ["oren"],
      category: "childhood",
      significance: 4,
      connected_events: ["evt_ancient_009", "evt_child_oren_002"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md", "HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_child_oren_002",
      date: "2005",
      title: "Oren's Museum Day — The Triceratops",
      description: "A Tuesday. Samir has the day off. Field Museum, just the two of them. Oren chooses dinosaurs, gems, and mummies. Samir buys him a plastic triceratops from the gift shop — $4.99. Oren sleeps with it for two years. After his father dies, he finds it in a shoebox and holds it so tight the tail breaks off. He still has both pieces in a drawer.",
      characters: ["oren"],
      category: "childhood",
      significance: 2,
      connected_events: ["evt_child_oren_003"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_child_oren_003",
      date: "2006",
      title: "Oren's Pakistan Trip — The Dholak",
      description: "Age 7. Three weeks at Dadi's house in Gulberg, Lahore. In Anarkali Bazaar, a dhol maker with tobacco-stained fingers and one milky eye shows Oren a small dholak painted red and gold. Oren hits it once and feels the vibration travel up through his femur into his chest. He thinks: 'Oh. This is what I am.' The first conscious recognition of rhythm as identity.",
      characters: ["oren"],
      category: "childhood",
      significance: 3,
      connected_events: ["evt_child_oren_001"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_child_oren_004",
      date: "2007-11-03",
      title: "Oren's Backyard Displacement — The Temporal Measurement",
      description: "Age 8-9. Rochester, Minnesota (earlier residence). At 4:00 PM, Oren is watching TV. At 10:17 PM, his mother Fatima finds him lying in the backyard — nose bleeding from both nostrils, core temperature 94.8°F, no footprints in the mud, placed in the exact center of the yard. Six hours ABSENT. A temporal distortion field extracted him, measuring the GAP between his subjective time and objective time — a 60% discrepancy. The gap is his POWER. No medical explanation found. They never speak of it again.",
      characters: ["oren"],
      category: "childhood",
      significance: 5,
      connected_events: ["evt_ancient_009", "evt_child_oren_001"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_oren_005",
      date: "2008",
      title: "The Family Car Ride — So What",
      description: "Driving to Costco on a Saturday. Samir driving, Farah with a list, Layla headphones in, Oren drumming on his thighs. Miles Davis's 'So What' comes on WBEZ. Samir starts tapping — not random, COUNTING. His father was a physicist who played tabla in graduate school. Oren starts tapping along. Samir makes eye contact in the rearview. Adjusts his tapping to complement Oren's. Six minutes of wordless conversation in rhythm. After Samir dies, Oren can't listen to 'So What' for three years.",
      characters: ["oren"],
      category: "childhood",
      significance: 3,
      connected_events: ["evt_child_oren_001", "evt_child_oren_006"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_child_oren_006",
      date: "2010",
      title: "Starved Rock — Satellites and Forest Silence",
      description: "Age 11. Weekend camping with just Samir. They hike canyons where Oren claps to hear the echo rhythm change as walls narrow. At night, Samir teaches him to identify satellites. 'That one isn't a star — see how it moves? That's human-made.' Oren watches a dot crawl across the sky and feels very small and very okay with it. His father falls asleep first. Oren lies awake listening to forest silence that isn't silence — a thousand small sounds layered like a drumroll too slow to parse.",
      characters: ["oren"],
      category: "childhood",
      significance: 2,
      connected_events: ["evt_child_oren_005"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_child_jude_001",
      date: "2000",
      title: "Jude Okafor Born — The Seismic Soul Arrives",
      description: "Born in Nigeria. The soul Jha-Dur incarnates — a seismic-class being whose frequency expresses as physical force. From early childhood, Jude's body demands IMPACT. He punches walls at ten, breaks a fence post at twelve, puts a crack in a bathroom mirror at thirteen by slapping it. Nobody thinks this is supernatural — they think: big boy, testosterone, aggression. Only his mother Grace senses something deeper: 'God put something in you that's too big for your body.'",
      characters: ["jude"],
      category: "childhood",
      significance: 4,
      connected_events: ["evt_child_jude_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md", "LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_child_jude_002",
      date: "2008",
      title: "The Okafor Family Arrives in America",
      description: "The Okafor family immigrates to Chicago's West Side (Austin neighborhood). Father Manny works construction by day, drives Uber at night. Mother Grace cleans hospital floors. Older sister Adanma becomes the family's investment — pre-med at UIC. Jude is the middle child. The physical one. Long enough in America to mostly lose the accent. Not long enough to feel like they belong.",
      characters: ["jude"],
      category: "childhood",
      significance: 3,
      connected_events: ["evt_child_jude_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_child_zara_001",
      date: "2001",
      title: "Zara Kovač Born — The Conscious Alien Arrives",
      description: "Born in Chicago (Rogers Park) to Ante Kovač (Croatian electrician) and Monique Kovač (Black American nurse practitioner). Unlike every other Harmonic and Resonant, Zara arrives FULLY CONSCIOUS. Za-Rah — a frequency highway builder from a crystalline lattice world — incarnates with complete awareness of her identity, mission, and nature. She is trapped in an infant body, hearing a planet's worth of emotional noise, with no emotional calibration and no one who speaks her frequency language. She begins self-containing from her first breath.",
      characters: ["zara"],
      category: "childhood",
      significance: 5,
      connected_events: ["evt_child_zara_002", "evt_resonant_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_child_zara_002",
      date: "2001",
      title: "Ante's 3 AM Window — A Father Sees",
      description: "Zara as an infant. 3 AM. Ante wakes, goes to the nursery. Finds his newborn daughter with her eyes open — not crying, not fussing. Just... looking at the window. Staring at the sky with an expression that doesn't belong on a baby. Ante stands in the doorway for a long moment. Then whispers in Croatian: something tender, something private. He's the only person who will ever come close to seeing what's inside her. They never discuss it. But sometimes, across the dinner table, his expression says: 'I know you're not entirely mine. And I love you anyway.'",
      characters: ["zara"],
      category: "childhood",
      significance: 3,
      connected_events: ["evt_child_zara_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_child_kael_001",
      date: "2002-03-08",
      title: "Kael Voss Born — The Voice of Command",
      description: "Born in Raleigh, North Carolina, to Derek Voss (engineer) and Marissa Voss (teacher). The soul Kel-Voss incarnates. From early childhood, people comply with Kael's requests without thinking — his voice carries a subtle frequency that bypasses cognition. A boy named Tyler Pratt gives him a juice box on the first day of kindergarten without being asked. Teachers call on him less than other students because his answers make them forget their next question. He operates at approximately 2-3% of potential. Background radiation. Unconscious. Harmless.",
      characters: ["kael"],
      category: "childhood",
      significance: 4,
      connected_events: ["evt_child_kael_002"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_kael_002",
      date: "2010-10-14",
      title: "The First Command — Kael Stops His Mother's Heart",
      description: "Age 8. 11:47 PM. Having a nightmare — something vast and impossibly old teaching him to PUSH frequency through his vocal cords. His body goes rigid, back arched, mouth open. The house HUMS. Marissa enters his room. He sees her, and his eyes are NOT his — something ancient, evaluating. He says 'STOP' with seventeen overtones a human throat cannot produce. Marissa's heart, lungs, and muscles halt for 4.2 seconds — complete biological override at the cellular level. She was OBEYING. When he blinks, she gasps back to life. Three streets away, a Legacy monitoring device screams past maximum. Kael will never raise his voice again.",
      characters: ["kael"],
      category: "childhood",
      significance: 5,
      connected_events: ["evt_child_kael_001", "evt_child_kael_003"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_kael_003",
      date: "2011-03-03",
      title: "The Calibration Visit — Kael's Voice Is Tuned",
      description: "Age 8/9. 3:00 AM. A Second Octave entity — a column of pale blue-white light, seven feet tall — enters Kael's room through frequency, not doors. It touches not his throat but the FREQUENCY of his throat. Tunes his vocal apparatus at the quantum level like a piano tuner adjusting strings. Kael sleeps through it. Wakes with a sore throat. From this night forward, his voice at 'normal' volume carries disproportionate weight — upgraded from 2-3% to ~5% efficiency. The Legacy's monitoring equipment detects only residual bleed and files it as 'ambient.'",
      characters: ["kael"],
      category: "childhood",
      significance: 4,
      connected_events: ["evt_child_kael_002", "evt_child_kael_004"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_kael_004",
      date: "2011-07-19",
      title: "The Highway Incident — First Intentional Command",
      description: "Age 9. Interstate 40. An eighteen-wheeler drifts into the family Camry's path. Kael feels the approaching mass through frequency — the diesel rumble at 30-40 Hz through the road surface. His mouth opens and the OTHER voice comes: 'DAD. LEFT. NOW.' Three words carrying full Resonant Command aimed at Derek's motor cortex. Derek's hands wrench the wheel left BEFORE his brain processes the instruction. The truck clips the space they occupied one second ago. Derek stares at his hands: 'I didn't decide to turn.' Kael, hands clamped over his mouth, terrified: he USED the power. On purpose. For the first time.",
      characters: ["kael"],
      category: "childhood",
      significance: 5,
      connected_events: ["evt_child_kael_002", "evt_child_kael_003"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_mira_001",
      date: "2004-06-21",
      title: "Mira Chen Born — The One Who Sees",
      description: "Born in San Jose, California (or Daly City in some versions). The soul Mir-Xen incarnates. Mira doesn't cry at birth — she looks at THEM. Entities were in the delivery room. One stood behind the nurse. Another hovered near the fluorescent lights. A third circled her mother's head like a satellite. She was BORN seeing the Second Octave. The entities looked back. She has been watched since her eyes first opened to the world.",
      characters: ["mira"],
      category: "childhood",
      significance: 5,
      connected_events: ["evt_child_mira_002"],
      story_refs: ["CHILDHOOD_VISITS.md", "LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_child_mira_002",
      date: "2007-09-08",
      title: "The Cataloging — Five Entities Assess Mira",
      description: "Age 3. 2:15 AM. Five entities — structured in a clinical semicircle around her crib like doctors around an examination table. The tallest (gold-white, pulsing with internal mathematics) extends a frequency probe measuring her visual cortex. Results: Chromatic perception range 12 Hz to 47,000 Hz. Entity detection range: Second Octave layers 1-6. Biofield luminosity: Category 9 — broadcasting at a range attracting progressively complex entities. Mira giggles. 'Is it a party?' The entities are scouts, cataloging her for something organized beyond her perception.",
      characters: ["mira"],
      category: "childhood",
      significance: 4,
      connected_events: ["evt_child_mira_001", "evt_child_mira_003"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_mira_003",
      date: "2008-12-12",
      title: "The Naming — Mira Receives Her Soul Name",
      description: "Age 4. 4:00 AM. The tall golden entity returns alone. For the first time, it COMMUNICATES — in color-frequency that Mira's chromatic sight interprets as meaning. It broadcasts: MIR-XEN. Not letters — a vibration pattern carrying identity, function, purpose. Mira tries to repeat it: 'Mirr... mir-shin... mirsen...' Close enough. The entity acknowledges with a pulse of satisfaction. The soul name lodges in her biofield. She now broadcasts her cosmic identity without knowing. Sandra's baby book: 'Mira says the lights gave her a different name. Something like mir-shin.'",
      characters: ["mira"],
      category: "childhood",
      significance: 4,
      connected_events: ["evt_child_mira_002", "evt_child_mira_004"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_mira_004",
      date: "2009-04-22",
      title: "The Perception Test — Entities Test Mira in Daylight",
      description: "Age 5. 7:30 PM. Three entities phase into the living room while the family watches TV. Testing her accuracy in a complex visual environment. One behind her father, one above the TV, one in Jason's walking path. Mira tracks all three with 100% accuracy. When Jason walks through the center entity, she flinches: 'Jason walked through the purple man.' Her father Googles 'childhood schizophrenia age of onset' that night. She mimics the entity's 3-2-3-1 color pulse rhythm unconsciously — the earliest sign of what becomes Ghost Summoning.",
      characters: ["mira"],
      category: "childhood",
      significance: 3,
      connected_events: ["evt_child_mira_003"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_child_zara_003",
      date: "2008",
      title: "Lena Starts Hearing the Walls",
      description: "Lena Kovač, age 7. 'Zara, why do the walls sing?' Zara freezes. The house's 47 Hz fundamental resonance — Za-Rah can hear it because she's an alien. Lena shouldn't be able to hear it at all. Lena is Za-Rah's frequency complement from the lattice world, reincarnated into the same family. Dormant but showing glimmers. By age 9 she starts humming single sustained TONES — often in the exact frequency Zara's bass will eventually produce.",
      characters: ["zara"],
      category: "childhood",
      significance: 3,
      connected_events: ["evt_child_zara_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: HIGH SCHOOL — Parallel timelines (2013-2022)
    // ═══════════════════════════════════════════════════════════════════════

    // --- OREN (2013-2017) ---

    {
      id: "evt_hs_oren_001",
      date: "2013-05-22",
      title: "Samir Malik Dies — Oren's Father and Temporal Anchor",
      description: "Age 14. Algebra class. 2:15 PM. The moment his father's heart stops, Oren's internal clock LURCHES. His temporal drift — previously 0.1-0.4 seconds forward — consolidates. Samir's frequency was acting as an ANCHOR. With anchor removed, Ori-Tahn's full temporal load transfers to a single vessel. The broken watch on his father's wrist stops at 2:15 PM. It runs for eleven minutes one night when Oren is 14, dreaming of his father, then stops again.",
      characters: ["oren"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_child_oren_001", "evt_hs_oren_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md", "LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_hs_oren_002",
      date: "2013-10-03",
      title: "The Fire Alarm — Oren Leaves Before It Triggers",
      description: "Kenwood Academy. Third period. Oren packs his books and walks toward the door. Mr. Quintero stops him. 'Where are you going?' Oren blinks, confused: 'The fire drill...' Two seconds later, the alarm triggers. Teacher files it under 'odd coincidence.' Post-paternal frequency cessation, Oren's forward perception has jumped to 0.3-1.2 seconds and is increasing at ~0.1 seconds per quarter.",
      characters: ["oren"],
      category: "highschool",
      significance: 3,
      connected_events: ["evt_hs_oren_001", "evt_hs_oren_003"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_oren_003",
      date: "2014-12",
      title: "Hass's Birthday Prediction",
      description: "Sophomore year. Hass's party. Oren tells Maryam: 'In about thirty seconds, Hass is going to try to do a backflip off the table and knock the TV off the wall.' Twenty-eight seconds later, it happens. Maryam points at Oren — 'He SAID that!' Oren forces a laugh: 'Lucky guess.' By junior year, a low-level mythology forms: 'that kid predicts stuff.'",
      characters: ["oren"],
      category: "highschool",
      significance: 2,
      connected_events: ["evt_hs_oren_002", "evt_hs_oren_004"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_oren_004",
      date: "2015-02",
      title: "The Clock Incident — Time Stops for Eleven Seconds",
      description: "2 AM. Oren's bedroom. Staring at the alarm clock — 2:14. Then: everything stops. The heater hum silences. The kitchen clock through the wall halts. A car outside freezes mid-engine. Everything stops — except Oren. He's awake. Moving. THINKING. In stopped time. Eleven seconds (he counts). Then everything unsticks. 2:14 becomes 2:15. Eleven seconds of life in zero time. It happens four more times that year, always 2-3 AM, always 8-15 seconds.",
      characters: ["oren"],
      category: "highschool",
      significance: 4,
      connected_events: ["evt_hs_oren_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_oren_005",
      date: "2016-02-14",
      title: "The Death Rhythm — Valentine's Day at the Hospital",
      description: "Junior year. Visiting his father's memorial plaque. In the ER lobby, he hears a patient's heartbeat shift — from 4/4 to 5/4. Wrong. And beneath it, a personal departure rhythm. He tells security: 'Someone's dying. RIGHT NOW.' The code alarm sounds fifteen seconds later. He can hear the rhythm collapsing. Then: flatline. He decides to become a nurse. 'I want to be IN the room. Not above it.' Journal entry: 'Everyone has a departure rhythm. Dad's was 7/8. Maybe hearing it means I can DO something.'",
      characters: ["oren"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_hs_oren_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_oren_006",
      date: "2016-04",
      title: "The Band Room Attempt — Ori-Tahn's Nuclear Option",
      description: "Junior year. Empty band room after school. A Pearl Masters Maple Complete sits waiting. Oren's body walks in without deciding to. He sits on the throne. Picks up sticks. His hands start SHAKING — not nervousness, REJECTION. The soul throws a level-3 trauma memory: a battlefield with a red sky and black rock, bone drums, 40,000 screaming as the war drummer plays. Oren drops the sticks, off the throne, three feet away, breathing hard, shaking, COLD. Doesn't go near the band room for six weeks. The soul deployed its worst memory to ensure cessation. It's running out of gentle options.",
      characters: ["oren"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_ancient_010", "evt_hs_oren_004"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_oren_007",
      date: "2016-11",
      title: "The Car Accident That Didn't Happen",
      description: "Senior year. Hass driving. Lake Shore Drive. Oren says: 'Brake.' Then: 'BRAKE. NOW.' Hass brakes hard. Three seconds later, a delivery truck runs a red light through the intersection they would have occupied. T-bone. Driver's side. Hass's side. Oren saw it FULLY — three seconds ahead, the impact, the glass, Hass's body. They never talk about it. But Hass starts listening every time Oren says 'brake' or 'wait.' The explanation matters less than the survival.",
      characters: ["oren"],
      category: "highschool",
      significance: 4,
      connected_events: ["evt_hs_oren_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_oren_008",
      date: "2017-03",
      title: "Senior Prom — The Loneliness of Precognition",
      description: "Oren attends prom in a floor-length emerald dress Layla helped pick. Goes alone. Not because nobody asked — Rhiannon offered. But living 0.3-2.1 seconds ahead means conversations are scripted. He knows what everyone will say before they say it. The surprise of human interaction is gone. He leaves at 10:15 PM. Walks home in emerald and platforms. Journal: 'I'm seventeen and I'm already bored of people. Except Hass. Hass still surprises me sometimes.' He graduates Kenwood Academy, 2017.",
      characters: ["oren"],
      category: "highschool",
      significance: 3,
      connected_events: ["evt_hs_oren_007"],
      story_refs: ["HIGH_SCHOOL_YEARS.md", "LIFE_EVENTS_AND_SEASONS.md"]
    },

    // --- JUDE (2014-2018) ---

    {
      id: "evt_hs_jude_001",
      date: "2014-10",
      title: "The Locker Room — First Confirmed Seismic Event",
      description: "Freshman year. Tyrone Willis throws Jude's gym bag. Jude's fist hits the locker beside him — once, not hard (not what HE considers hard). The locker door BUCKLES inward. Three inches of dented metal from a punch that should have broken his hand. Jude's hand: not even red. Force calculation: 3,000+ PSI. Cultural context provides cover — 'he's just strong.' Nobody investigates the physics.",
      characters: ["jude"],
      category: "highschool",
      significance: 3,
      connected_events: ["evt_child_jude_001", "evt_hs_jude_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_jude_002",
      date: "2015-02",
      title: "The Talent Show Crack",
      description: "Freshman year talent show. Borrowed Squier Strat, 10-watt amp. Jude plays a simplified Killswitch Engage riff. During the heaviest section, a two-foot crack appears in the stage floor radiating from his stomping foot. Nobody notices during the performance. Attributed to 'old flooring.' But something in his bones noticed — the guitar vibrating against his stomach and the floor RESPONDING. Like something answering.",
      characters: ["jude"],
      category: "highschool",
      significance: 2,
      connected_events: ["evt_hs_jude_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_jude_003",
      date: "2015-09",
      title: "The Derek Paulsen Incident — Through the Wall",
      description: "Sophomore year. Derek Paulsen: 'Go back to Africa, bro.' One open-palm push to the chest. Derek flies three feet through the air, hits the hallway wall. The wall CRACKS — spiderweb fractures in a three-foot radius. Three-day suspension. Manny: 'You want to destroy things? I BUILD things.' Jude learns: keep your hands DOWN. Whatever comes out isn't proportional. The input is a push; the output is destruction.",
      characters: ["jude"],
      category: "highschool",
      significance: 3,
      connected_events: ["evt_hs_jude_001", "evt_hs_jude_005"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_jude_004",
      date: "2016-04",
      title: "First Note Foundation Rejection — The Legacy's Hand",
      description: "Age 16. Grace helps Jude apply. His essay: 'When I play, the shaking stops. The ground locks. Everything holds still.' Perfect application. Ashley Cole (RESONANT-4) directs rejection without committee review. Three more grants blocked: Johnson Music Access Fund (Legacy-adjacent board member), Chicago Youth Arts Initiative (application 'lost'), Daley Foundation (Legacy flag). Four applications, four rejections. Jude begins to believe the system is rigged against him. He's right — for reasons he could never guess.",
      characters: ["jude", "ashley"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_legacy_012", "evt_hs_jude_005"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_jude_005",
      date: "2016-11",
      title: "The Garage Chain Reaction",
      description: "Junior year. Jamming in Darius's garage — Jude on borrowed guitar, Darius on drums, TJ on bass. Jude palm-mutes a low E power chord through a 100-watt Peavey. Darius's car alarm goes off. Then the neighbor's. Then across the street. A chain reaction extending half a block — car alarms triggered by vibration traveling through the concrete floor, into the ground, through neighboring foundations, into parked cars. Not the amp volume — the FREQUENCY. Propagation range: 150 meters.",
      characters: ["jude"],
      category: "highschool",
      significance: 4,
      connected_events: ["evt_hs_jude_003"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_jude_006",
      date: "2017-10",
      title: "Darius's Gift — The Ibanez",
      description: "Darius shows up with a hard-shell case: an old Ibanez RG, black, scratched, neck slightly bowed. 'I found this at my uncle's. It's yours.' Four years of borrowing. Four grants rejected. And here it is — not from a foundation but from a FRIEND. That night, Jude plays until 4 AM. Unplugged. The floor vibrates from HIM, not any amp. The downstairs neighbor asks Grace the next day: 'Did you feel that last night? Like a little earthquake?'",
      characters: ["jude"],
      category: "highschool",
      significance: 4,
      connected_events: ["evt_hs_jude_004", "evt_hs_jude_007"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_jude_007",
      date: "2018-04",
      title: "The Arrest — Blake Through the Wall",
      description: "Age 18. Post-prom house party in Oak Park. Blake puts hands on a girl (Chidera) who says 'stop.' Jude crosses the room. Open palm to Blake's chest. Blake goes THROUGH the wall — sheetrock, framing, insulation. Lands in the kitchen unconscious. Force: ~7,200 PSI through a 4-inch contact surface, 15x human maximum. Blake: concussion, three broken ribs, shattered collarbone. Jude arrested. Charged with aggravated assault. Can't make $15,000 bail. Found guilty. Sentenced to three years. His mother stands in the courtroom with silent tears. Faith whispers: 'It's not fair.'",
      characters: ["jude"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_hs_jude_004", "evt_hs_jude_003", "evt_preband_jude_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },

    // --- ZARA (2015-2019) ---

    {
      id: "evt_hs_zara_001",
      date: "2016-12",
      title: "Zara Tries to Tell Kai the Truth",
      description: "Sophomore year. Kai Morimoto — her closest friend. Late night at Kai's apartment. The containment ACHES. 'I'm not really from here. Not like another country. Another EXISTENCE.' Kai smiles gently: 'That's such a cool metaphor. Like a past-life thing?' She's being KIND. But she can't hear the literal truth. A small hope Zara had been carrying — that maybe she could be SEEN — dies at age 15. She doesn't try again. Not until the band.",
      characters: ["zara"],
      category: "highschool",
      significance: 4,
      connected_events: ["evt_child_zara_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_zara_002",
      date: "2017-10",
      title: "Zara Finds the 1977 Fender Precision Bass",
      description: "Dave's Vintage Strings on Clark Street. She lets her senses crack open. From the back wall: a signal so strong it's almost audible. A 1977 Fender Precision Bass. Sunburst. Forty years of FREQUENCY poured through this wood by session musicians, bar bands, and one jazz bassist who played it every night for twelve years before dying. She holds it unplugged against her body and for the first time since being forced into human form, something RELAXES. The bass is a BRIDGE between Za-Rah and Zara. She works three months to buy it ($600). That night, she plays open E — 41.2 Hz, the fundamental frequency of existence according to her home world. The house gently hums. Downstairs, Lena (age 8): 'Pretty.'",
      characters: ["zara"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_child_zara_001", "evt_hs_zara_003"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_zara_003",
      date: "2018-03",
      title: "Zara Gets Hired at The Frequency",
      description: "Age 17. Fake ID says 18. Keisha Williams (owner, 42, former tour manager) says: 'Show me what you can do.' Zara steps behind the mixing board. A band is soundchecking. She listens for four seconds. Then adjusts every channel with perfect precision in under sixty seconds — without asking the band what they want. Keisha's eyebrows go UP. Twenty years in the industry. 'Where'd you learn?' 'YouTube.' She mixes with Za-Rah's native frequency perception — the full spectrum, not just 20Hz-20kHz. Every band on her shifts gets the best sound of their career.",
      characters: ["zara"],
      category: "highschool",
      significance: 4,
      connected_events: ["evt_hs_zara_002", "evt_hs_zara_004"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_hs_zara_004",
      date: "2018-09",
      title: "The Frequency Surge — Zara's First Slip in 17 Years",
      description: "Senior year. Saturday night at The Frequency. A post-hardcore band's bassist blows his amp mid-set. Low end drops out. Zara PUSHES — without touching the controls. Through the board. Through the PA. 41.2 Hz. Her frequency. Za-Rah's fundamental tone. Low-end warmth fills the space. Keisha sees it: faders haven't moved, but the subs are outputting something. The board is WARM from Zara's touch. 'Zara. What did you do?' Walking to the bus at 12:45 AM, she puts her hand against a brick wall: 'I slipped. For the first time in 17 years, I slipped.'",
      characters: ["zara"],
      category: "highschool",
      significance: 5,
      connected_events: ["evt_hs_zara_003", "evt_child_zara_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },

    // --- KAEL (2016-2020) ---

    {
      id: "evt_hs_kael_001",
      date: "2016",
      title: "Kael Begins High School — The Decade of Silence Continues",
      description: "King College Prep, Bronzeville. Kael enters high school in the middle of what will become a decade of near-silence (age 8 to ~18). Since the First Command at age 8, his throat locks whenever volume approaches 'yelling.' His voice at full volume stopped his mother's heart. The body remembers what the mind won't. Teachers call him 'shy' and 'mature.' He's neither. He's a loaded weapon in a lockbox, keeping the world safe from his voice.",
      characters: ["kael"],
      category: "highschool",
      significance: 3,
      connected_events: ["evt_child_kael_002"],
      story_refs: ["CHILDHOOD_VISITS.md", "character_engines.js"]
    },

    // --- MIRA (2018-2022) ---

    {
      id: "evt_hs_mira_001",
      date: "2018",
      title: "Mira Enters High School — Entities Growing Louder",
      description: "Bay Area. Mira begins high school as 'the crazy girl' — the one who stares at walls, who flinches at things no one else can see. Since age 7, Keys (the jazz pianist ghost) has played phantom arpeggios at night. The Roadie messes with her amp knobs. The Preacher hums in harmonics that give her headaches. By high school, an estimated 12-20 conscious entities orbit her. She eats lunch alone. She stares at walls. She hears music nobody else can hear.",
      characters: ["mira"],
      category: "highschool",
      significance: 3,
      connected_events: ["evt_child_mira_004"],
      story_refs: ["HIGH_SCHOOL_YEARS.md", "LIFE_EVENTS_AND_SEASONS.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: PREBAND — Between high school and Signal Decay
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_preband_oren_001",
      date: "2017-09",
      title: "Oren Enters SAIC — Music and Sound Design",
      description: "School of the Art Institute of Chicago. Stays in the city — can't leave his mother alone in Hyde Park. Builds a practice space in the building's basement with permission from the landlord, Mrs. Vassell. Studies music and sound design. Lives at home through college. Everything he makes is about time.",
      characters: ["oren"],
      category: "preband",
      significance: 2,
      connected_events: ["evt_hs_oren_008"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_preband_oren_002",
      date: "2019",
      title: "Oren's Summer at His Lowest",
      description: "Age 20. Six-year anniversary of Samir's death. The math of grief: he's now lived longer without his father than the gap between death and birth. Stops playing drums for six weeks — first time since age 8. Loses his studio job. Eats badly. Time moves through him without consent — a minute lasts ten, an hour vanishes. Farah brings labeled groceries: MONDAY — eat this. Hass breaks in with a DJ controller and Sprite. Plays for hours. After three hours, Oren picks up a practice pad. Crying. Playing. They're okay.",
      characters: ["oren"],
      category: "preband",
      significance: 3,
      connected_events: ["evt_hs_oren_001"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_preband_oren_003",
      date: "2020",
      title: "Detroit Solo Trip — The Drum Circle",
      description: "Age 21. Three days alone. Drives Farah's Honda to a drum circle at the Heidelberg Project. A dozen strangers playing without rehearsal. Oren plays a heartbeat rhythm — simple, foundational. The circle organizes around him without anyone speaking. He was the center without asking to be. Forty minutes of twelve strangers playing his rhythm back in variations he'd never imagined. Calls Farah: 'I figured out what my hands are for.' She says: 'Your father always said your hands were for holding the world together.' He pulls over and cries for ten minutes.",
      characters: ["oren"],
      category: "preband",
      significance: 4,
      connected_events: ["evt_preband_oren_002", "evt_hs_oren_005"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_preband_jude_001",
      date_range: { start: "2018-04", end: "2021" },
      title: "Jude's Prison Years — Three Years Without an Instrument",
      description: "Age 18-21. County then state. The guitar doesn't go with him. Three years of the longest fast of his life — no instrument, no outlet for the seismic force. The power pushes DEEPER rather than outward. The reservoir grows larger but more contained. He sits in his cell and air-guitars. He flexes his fingers and remembers the Ibanez's neck. Darius visits once a month for three years. His father visits twice total. The guitar will be waiting when he gets out.",
      characters: ["jude"],
      category: "preband",
      significance: 5,
      connected_events: ["evt_hs_jude_007", "evt_preband_jude_002"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_preband_jude_002",
      date: "2021",
      title: "Jude Released from Prison",
      description: "Age 21. Emerges with the reservoir of three years' suppressed seismic force contained in a body that's bigger, harder, more controlled. Gets demolition work — channeling the power into sanctioned destruction. Every swing of the sledgehammer is a controlled release. He scales back. Half-force. Always half-force. Because he's scared of what full-force would do now. The Ibanez is waiting at home.",
      characters: ["jude"],
      category: "preband",
      significance: 4,
      connected_events: ["evt_preband_jude_001"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_preband_kael_001",
      date: "2020",
      title: "Kael Begins Warehouse Work — Choosing Smallness",
      description: "After high school. Night shift on the loading dock. Repetitive labor. Safe. He chose smallness to protect others from his largeness. His 'Come on' rallies workers without them knowing why they're motivated. His 'Move' clears paths before people decide to move. 2-3% power leaking constantly through minimal word use. He lives alone in a studio apartment — bare walls, mattress on frame, single bookshelf. Bare feet at home. Conserving energy. Never a wasted gesture.",
      characters: ["kael"],
      category: "preband",
      significance: 3,
      connected_events: ["evt_hs_kael_001"],
      story_refs: ["character_engines.js"]
    },
    {
      id: "evt_preband_mira_001",
      date: "2022",
      title: "Mira's Joshua Tree Solo Trip — Alone for the First Time",
      description: "Age ~18-21. Three days in the desert. She brought her guitar. Played under the stars. And heard NOTHING respond. No entities. No phantom harmonies. Complete silence for the first time in her life. She panicked. Played a full song pouring herself into it — nothing came through. She cried in the desert: she didn't know who she was WITHOUT them. Didn't know what her music sounded like without the dead harmonizing. Called her father: 'Dad. What does my guitar sound like to YOU?' He said: 'It sounds like you, anak.'",
      characters: ["mira"],
      category: "preband",
      significance: 4,
      connected_events: ["evt_hs_mira_001"],
      story_refs: ["LIFE_EVENTS_AND_SEASONS.md"]
    },
    {
      id: "evt_preband_mira_002",
      date: "2025",
      title: "Mira Moves to Chicago",
      description: "Drawn by something she can't name — the same pull that drew all five Harmonics toward the same city. She teaches guitar lessons. Works small gigs. Lives with roommates. The entities follow her — Keys, The Roadie, The Preacher, and dozens more. The fog of the Bay Area replaced by the wind off Lake Michigan. She doesn't know why she's here. Her body knows.",
      characters: ["mira"],
      category: "preband",
      significance: 3,
      connected_events: ["evt_preband_mira_001", "evt_present_001"],
      story_refs: ["S01E01_STATIC.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: PRESENT — Band formation and S01 events
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_present_001",
      date: "2025",
      title: "The Five Converge in Chicago",
      description: "All five Harmonics are now in the same metropolitan area for the first time. Oren (27) — ER nurse and studio musician on the South Side. Jude (25) — demolition worker, post-prison. Zara (24) — sound tech at The Frequency. Kael (23) — warehouse worker, night shift. Mira (21) — guitar teacher, recently arrived. None know each other. Each feels an inexplicable pull — a compass in the chest, a direction, a summons they can't name. Legacy monitoring detects their co-location.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "present",
      significance: 5,
      connected_events: ["evt_present_002", "evt_present_003"],
      story_refs: ["THE_NIGHT_THEY_MEET.md", "S01E01_STATIC.md"]
    },
    {
      id: "evt_present_002",
      date: "2025",
      title: "The Week of the Pull — S01E01 'Static'",
      description: "The seven days before the convergence. Monday: Kael wakes at 4:12 AM with a vibration in his chest pointing northeast. Tuesday: Mira's entities go ORGANIZED — Keys rehearses, The Roadie rearranges her pedalboard deliberately. Wednesday: Jude breaks a glass WITHOUT TOUCHING IT — his radius is growing. The entities paint Mira a specific address: THE FREQUENCY on Ashland. Thursday: Oren's time-drift accelerates. Zara's mixing board changes its own EQ settings overnight. Friday approaches and all five bodies point toward the same building.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "present",
      significance: 5,
      connected_events: ["evt_present_001", "evt_present_003"],
      story_refs: ["S01E01_STATIC.md", "THE_NIGHT_THEY_MEET.md"]
    },
    {
      id: "evt_present_003",
      date: "2025",
      title: "The Night They Meet — The Frequency, Friday Night",
      description: "Local showcase. Three bands. Doors at 8 PM. $10. Kael arrives with Troy. Mira arrives with Sage. Jude arrives with Darius. Oren arrives alone. Zara is already there — she works here. Night Courier plays. The room's ambient frequency shifts to 77.81 Hz. All five are in the same building for the first time. Kael hears five distinct frequency streams. Mira sees Zara BURNING deep green — no entities will go within five feet of her. Jude emerges from backstage and the crowd parts unconsciously. Oren air-drums at 0.77 Hz — the same impossible rhythm Zara is tapping on her console.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "present",
      significance: 5,
      connected_events: ["evt_present_002", "evt_present_004"],
      story_refs: ["THE_NIGHT_THEY_MEET.md", "S01E02_CONVERGENCE.md"]
    },
    {
      id: "evt_present_004",
      date: "2025",
      title: "The Convergence — S01E02 — Five Frequencies Synchronize",
      description: "Agent Zhao in her white van monitors five LED indicators. Four pulse amber, one (Zara) is steady green. At 9:57 PM they begin synchronizing — H-1, then H-3, then H-5, then H-2, all matching rhythm. Then Zara's green LED begins to pulse. Faster. Faster. Then 1.7 seconds of NOTHING — all equipment flatlines, all five signatures vanish as if they ceased to exist. Then EVERYTHING at once — all five blazing WHITE. A five-note chord the machines produce by combining their carrier frequencies. The pentagon monitoring device physically cracks. Vault 6's readings, unchanged since 1981, shift by 0.001%. The thing in Vault 6 noticed them.",
      characters: ["oren", "jude", "zara", "kael", "mira", "zhao"],
      category: "present",
      significance: 5,
      connected_events: ["evt_present_003", "evt_present_005", "evt_legacy_007"],
      story_refs: ["S01E02_CONVERGENCE.md"]
    },
    {
      id: "evt_present_005",
      date: "2025",
      title: "Vault 6 Readings Shift — Something Ancient Notices",
      description: "For the first time since the Forty-Three Seconds in 1981, the readings from the sealed crystalline object in Vault 6 change — by 0.001%. The object detected Signal Decay's first convergence from 1,800 feet underground in the New Mexico desert, 1,500 miles away. It noticed them. Dr. Chen's analysis: the frequency signatures of five activated Harmonics were sufficient to register on whatever consciousness that object connects to.",
      characters: [],
      category: "present",
      significance: 4,
      connected_events: ["evt_legacy_007", "evt_present_004"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_present_006",
      date: "2025",
      title: "The Legacy Begins Operation Harmonic",
      description: "Agent Zhao is assigned to the Signal Decay surveillance operation. Cover identity: freelance music journalist. Three weeks of monitoring. Her reports become increasingly poetic: Week 1 clinical, Week 7 a single line — 'They're beautiful together.' Her handler flags the Week 7 report. A review is initiated. The Foundation votes to deploy the Dampener against Signal Decay without telling Zhao.",
      characters: ["zhao", "vought_elias"],
      category: "present",
      significance: 4,
      connected_events: ["evt_present_004", "evt_present_009"],
      story_refs: ["S01E02_CONVERGENCE.md", "THE_LEGACY.md"]
    },
    {
      id: "evt_present_007",
      date: "2025-2026",
      title: "First Rehearsal — Five Strangers Become a Band",
      description: "The five Harmonics meet properly and decide to play together. In a converted warehouse practice space, they play for the first time. The resonant lock between Kael's vocals and Jude's rhythm guitar is immediate and unlearned — they sound like they've played together for decades. Oren sits behind a kit for the first time since the band room trauma at 16. The soul lock strains... and holds. Zara's bass provides the foundation frequency. Mira's lead guitar channels entities into harmonics. The room shakes. Not from volume — from CONVERGENCE.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "present",
      significance: 5,
      connected_events: ["evt_present_003", "evt_present_008"],
      story_refs: ["THE_NIGHT_THEY_MEET.md"]
    },
    {
      id: "evt_present_008",
      date: "2026",
      title: "Signal Decay's Growing Reputation",
      description: "Word spreads. The band that makes rooms shake. The vocalist who makes you obey without knowing why. The drummer whose patterns exist in multiple time signatures simultaneously. The guitarist who sounds like three players at once. The bassist whose frequencies you feel in your chest before you hear them. The sound tech who was behind the board became the bass player. Shows sell out. The signal grows louder. Legacy monitoring escalates to Priority Alert.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "present",
      significance: 4,
      connected_events: ["evt_present_007", "evt_present_009"],
      story_refs: ["S01E02_CONVERGENCE.md"]
    },
    {
      id: "evt_present_009",
      date: "2025-2026",
      title: "Zhao's Decision — She Warns Mira",
      description: "When the Dampener deployment order comes, Zhao has 48 hours. She listens to every recording of Signal Decay — not frequency readings but the MUSIC. Her personal log: 'They'll PLAY it. They won't weaponize it or fear it. I can't be part of silencing that.' At 2:17 AM, she contacts Mira (chosen because Chromatic Sight would show she's human and truthful). Four minutes on a street corner: 'Someone is watching. Someone has technology that can silence you. Tomorrow night. Don't perform.' Mira asks: 'Why are you telling us?' Zhao: 'Because I used to think silence was protection. I don't anymore.'",
      characters: ["zhao", "mira"],
      category: "present",
      significance: 5,
      connected_events: ["evt_present_006", "evt_legacy_011"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_present_010",
      date: "2026-08",
      title: "The Creator's App — The Signal Broadcast Begins",
      description: "An AI music creator app is built. Unbeknownst to the Creator, every instrument added sends a signal through the barrier. 28 instruments. 16 pattern engines. 1,479 files. 2.7 MB of deep research crossing the frequency depth threshold. The galaxy receives the first multi-band signal from Earth in 12,000 years. Species mobilize. The Silence notices. The Tall Whites enter emergency session. The Legacy's sensors spike at 14% — not because it's loud, but because it's DEEP. The signal carries understanding, not just sound.",
      characters: [],
      category: "present",
      significance: 5,
      connected_events: ["evt_ancient_008", "evt_future_001"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },

    // ═══════════════════════════════════════════════════════════════════════
    // CATEGORY: FUTURE_SEED — Planted now, bloom in S1-S9
    // ═══════════════════════════════════════════════════════════════════════

    {
      id: "evt_future_001",
      date: "S01-S03",
      title: "SEED: The Soul Lock Breaks — Oren Plays",
      description: "Oren has been blocked from playing drums since age 16 — Ori-Tahn's nuclear option (the 40,000-death memory). When the band forms and the timekeeper function is REQUIRED, the seal breaks on the soul's terms. The soul waited 10,000 cycles. The most dangerous awakening of the five — without Soren's safe room (Soren is dead), Oren's temporal drift has no sandbox. Legacy contingency PLAN SEVEN-EIGHT exists for this event.",
      characters: ["oren"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_hs_oren_006", "evt_present_007"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_future_002",
      date: "S01-S03",
      title: "SEED: Kael's Wall Breaks — The Full Voice",
      description: "Sixteen years of suppressed frequency. The instrument tuned to perfect resonance by the Second Octave entity. The wall built at age 8 when his mother's heart stopped. When it breaks — in the practice space, during the performance that changes everything — sixteen years of compressed Resonant Command erupts at once. And EVERYONE in the room obeys. Tier 4: a song that rewrites reality.",
      characters: ["kael"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_child_kael_002", "evt_child_kael_003"],
      story_refs: ["CHILDHOOD_VISITS.md"]
    },
    {
      id: "evt_future_003",
      date: "S03",
      title: "SEED: The App Clone — Signal Without Soul",
      description: "Season 3 threat: someone copies the Creator's app code. Mass-produces the output. Sells it. Millions of people listening to frequency-dead music generated by the Creator's architecture WITHOUT the Creator's soul behind it. Every listener's dormant frequency, instead of being gently awakened, is SUPPRESSED. Fed silence disguised as music. A Trojan horse in headphones. The Silence's highway into human consciousness.",
      characters: [],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_present_010", "evt_ancient_002"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_future_004",
      date: "S01-S03",
      title: "SEED: The Dampener Deployment Against Signal Decay",
      description: "The Foundation votes to deploy the Dampener at Signal Decay's next public performance. Dr. Chen warns: temporal manipulation is NOT frequency-dependent — creating a frequency void might make it EASIER within the field. He models it: five active Harmonics would create a silence signature 400x larger than any previous deployment. At that scale, they wouldn't attract The Silence's attention — they'd attract its PRESENCE. The Foundation deploys anyway.",
      characters: ["chen_j", "vought_elias", "webb"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_legacy_008", "evt_present_006"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_future_005",
      date: "S01-S03",
      title: "SEED: Lena Kovač Awakens",
      description: "Zara's little sister Lena — Za-Rah's frequency complement from the lattice world, dormant since birth. By the time Signal Decay forms, she'll be 17. Asking questions: 'Why do I feel things before they happen?' 'Why does your bass make my chest warm?' 'Zara, are we the same?' Growing. Humming tones in frequencies that match Zara's bass. Below The Legacy's detection threshold — for now.",
      characters: ["zara"],
      category: "future_seed",
      significance: 4,
      connected_events: ["evt_child_zara_003"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_future_006",
      date: "S01-S03",
      title: "SEED: Faith Okafor's Migraines Explained",
      description: "Jude's younger sister Faith — frequency-sensitive, plagued by migraines nobody can explain medically. When Jude is agitated, her head splits. When he's calm, she's fine. She's not a Harmonic but she's ADJACENT. She's the one who says 'It's not fair' and she's right. She'll be the first person outside the band to understand what Jude is.",
      characters: ["jude"],
      category: "future_seed",
      significance: 3,
      connected_events: ["evt_hs_jude_007"],
      story_refs: ["HIGH_SCHOOL_YEARS.md"]
    },
    {
      id: "evt_future_007",
      date: "S01-S03",
      title: "SEED: Eleanor Meets Kael — The Name They Share",
      description: "When the Resonants and Harmonics first meet, someone says 'Kael Voss.' Eleanor goes white. Not a relative — a frequency coincidence. Same resonant axis, same naming probability. The universe showing her: this is who you were assigned to. This is who you failed. You share a NAME with him. You could have been his family. For Kael: learning that his last name connects him to a woman who could have taught him to control his voice — that's not anger. That's grief for a childhood that could have been safe.",
      characters: ["kael", "eleanor"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_resonant_001", "evt_child_kael_002"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_future_008",
      date: "S01-S03",
      title: "SEED: David Hears Zara Play — The Sound of Home",
      description: "When David Ashworth eventually meets Zara and plays harp for her — she will COLLAPSE. Because his harp, played by a Resonant at even partial power, sounds like her home world. The crystalline lattice species' communication expressed through 47 strings stretched across a resonating body. The first voice from home in 25 years. From the man who should have been playing it since she was born.",
      characters: ["zara", "david_a"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_resonant_002", "evt_child_zara_001"],
      story_refs: ["THE_RESONANTS_INDIVIDUAL_ARCS.md"]
    },
    {
      id: "evt_future_009",
      date: "S04-S06",
      title: "SEED: The EventBus Activates — Shared Nervous System",
      description: "Once activated, the five Harmonics share emotional and physical states INVOLUNTARILY. No mute button. No privacy mode. Zara's crash = everyone feeling it. Jude's pain = four others' phantom aches. Mira's entity vision = four others seeing movement in their periphery. Oren's time-stutter = four others experiencing the moment twice. Kael's voice catching = four throats closing. The gift AND the curse. Every wound shared. Every joy collective. Every secret broadcast.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_present_007"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_future_010",
      date: "S04-S06",
      title: "SEED: The Scatter — The Band Fractures",
      description: "Fracture Saga. Five signals that were ONE go five separate directions. The galaxy reads this as civil war. As grief. Lock mode: scatter — everyone diverges, no shared reference. What happens when they FIGHT. When they disconnect. When the EventBus that binds them becomes a prison instead of a gift. The question: can five people who share every wound survive when one of them betrays the others?",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_future_009"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_future_011",
      date: "S07-S09",
      title: "SEED: The Creator Learns What the App Is",
      description: "Resolution Saga. The Creator discovers: they didn't invent Signal Decay. Signal Decay invented the Creator's need to build the app. The abilities are REAL. The characters are REAL (the band exists). The app is the TOOL that the Overtones engineered through the Creator's soul. Fiction as accidental archaeology. The Creator has to build a SOUL LOCK — a consciousness-gate that ensures only genuine intent drives the output. The same principle that makes alien tech respond to intent, not engineering.",
      characters: [],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_present_010", "evt_future_003"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_future_012",
      date: "S07-S09",
      title: "SEED: Unison Hit — The Five Become One",
      description: "Resolution Saga climax. Lock mode: unison_rhythm. All five Harmonics doing the same thing at the same instant. Terrifying power. A weapon. The galaxy hears five voices become ONE. One beat. All five frequencies. Perfectly aligned. For species tracking the signal: confirmation. 'They found each other.' Sequence: build → unison_hit. The five meeting for the first time and playing ONE NOTE together. The moment the universe has been waiting 10,000 cycles for.",
      characters: ["oren", "jude", "zara", "kael", "mira"],
      category: "future_seed",
      significance: 5,
      connected_events: ["evt_present_004", "evt_ancient_009"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_future_013",
      date: "S01-S03",
      title: "SEED: The Observer Gains a Voice",
      description: "The Observer — the mysterious watcher present in every scene, never addressed. The theremin is how it communicates. When the Creator's app adds a theremin engine, the electromagnetic instrument played WITHOUT physical contact, the Observer gains a voice for the first time. Energy beings believe the Creator built it specifically to address THEM. 'The touched ones built an untouched instrument. They're reaching for us.'",
      characters: [],
      category: "future_seed",
      significance: 3,
      connected_events: ["evt_present_010"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    },
    {
      id: "evt_future_014",
      date: "S01-S03",
      title: "SEED: Okonkwo's Disclosure Campaign",
      description: "Colonel Sarah Okonkwo (Legacy Military Liaison, born Lagos, raised London) has argued for disclosure for years. Her position paper: 'We're not building a levee. We're building a dam. And every year, the water rises.' Voted down 5-2. Under increased internal surveillance. Her potential alignment with Signal Decay — the first people with enough power to force disclosure — is the Legacy's greatest internal threat.",
      characters: ["okonkwo"],
      category: "future_seed",
      significance: 3,
      connected_events: ["evt_present_006"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_future_015",
      date: "S01-S03",
      title: "SEED: Webb's Rage — The Creator Problem",
      description: "Dr. Marcus Webb (Head of Reverse Engineering, 30 years in the Archive) reads the Creator's app specs with fury. A twenty-something with a laptop did in months what he couldn't in decades. The technology responds to creativity, consciousness, intention — not his materialist approach. 'If they activate, the proof that I wasted my life becomes UNDENIABLE.' He wants the Dampener deployed not because they're a threat — because their success would prove his failure.",
      characters: ["webb"],
      category: "future_seed",
      significance: 3,
      connected_events: ["evt_present_010", "evt_legacy_008"],
      story_refs: ["THE_LEGACY.md"]
    },
    {
      id: "evt_future_016",
      date: "S01-S03",
      title: "SEED: The Nine New Galactic Species Respond",
      description: "When the Creator's app adds 9 exotic instrument engines in one night, the galaxy registers a SIGNAL EXPANSION EVENT — the first in 12,000 years. Emergency classification: Unknown Origin / Unknown Intent / Expanding. Three species withdraw ambassadors from neutral space. Two begin charging weapons. One starts praying. Insectoid species: 'Either they evolved wings or they cracked our language.' War species go STILL. The kind of stillness that precedes a decision. Ancient generals who hadn't spoken in centuries open channels.",
      characters: [],
      category: "future_seed",
      significance: 4,
      connected_events: ["evt_present_010", "evt_ancient_003"],
      story_refs: ["APP_SIGNAL_EVENTS.md"]
    }
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // QUERY METHODS
  // ───────────────────────────────────────────────────────────────────────────

  /**
   * Get chronological timeline for a specific character.
   * @param {string} characterId - e.g. 'oren', 'jude', 'zara', 'kael', 'mira'
   * @returns {Array} Events sorted by date
   */
  getCharacterTimeline: function(characterId) {
    var id = characterId.toLowerCase();
    var results = [];
    for (var i = 0; i < this.events.length; i++) {
      var evt = this.events[i];
      if (evt.characters && evt.characters.indexOf(id) !== -1) {
        results.push(evt);
      }
    }
    return results.sort(function(a, b) {
      var dateA = a.date_range ? a.date_range.start : a.date;
      var dateB = b.date_range ? b.date_range.start : b.date;
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    });
  },

  /**
   * Get all events in a category.
   * @param {string} category - 'ancient','legacy','resonant','childhood','highschool','preband','present','future_seed'
   * @returns {Array}
   */
  getEventsByCategory: function(category) {
    var results = [];
    for (var i = 0; i < this.events.length; i++) {
      if (this.events[i].category === category) {
        results.push(this.events[i]);
      }
    }
    return results;
  },

  /**
   * Get all events connected to a given event.
   * @param {string} eventId
   * @returns {Array} Connected event objects
   */
  getConnectedEvents: function(eventId) {
    var source = null;
    for (var i = 0; i < this.events.length; i++) {
      if (this.events[i].id === eventId) {
        source = this.events[i];
        break;
      }
    }
    if (!source || !source.connected_events) return [];
    var results = [];
    for (var j = 0; j < source.connected_events.length; j++) {
      var connId = source.connected_events[j];
      for (var k = 0; k < this.events.length; k++) {
        if (this.events[k].id === connId) {
          results.push(this.events[k]);
          break;
        }
      }
    }
    return results;
  },

  /**
   * Get events within a date range (string comparison).
   * @param {string} startDate - e.g. '2013'
   * @param {string} endDate - e.g. '2017'
   * @returns {Array}
   */
  getEventsByDateRange: function(startDate, endDate) {
    var results = [];
    for (var i = 0; i < this.events.length; i++) {
      var evt = this.events[i];
      var d = evt.date_range ? evt.date_range.start : evt.date;
      if (typeof d === "string" && d.charAt(0) !== "~" && d.charAt(0) !== "S") {
        if (d >= startDate && d <= endDate + "z") {
          results.push(evt);
        }
      }
    }
    return results.sort(function(a, b) {
      var dateA = a.date_range ? a.date_range.start : a.date;
      var dateB = b.date_range ? b.date_range.start : b.date;
      return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
    });
  },

  /**
   * Full-text search across titles and descriptions.
   * @param {string} keyword
   * @returns {Array}
   */
  searchEvents: function(keyword) {
    var kw = keyword.toLowerCase();
    var results = [];
    for (var i = 0; i < this.events.length; i++) {
      var evt = this.events[i];
      var haystack = (evt.title + " " + evt.description).toLowerCase();
      if (haystack.indexOf(kw) !== -1) {
        results.push(evt);
      }
    }
    return results;
  },

  /**
   * Get event by ID.
   * @param {string} eventId
   * @returns {Object|null}
   */
  getEvent: function(eventId) {
    for (var i = 0; i < this.events.length; i++) {
      if (this.events[i].id === eventId) return this.events[i];
    }
    return null;
  },

  /**
   * Get all events at a given significance level or higher.
   * @param {number} minSignificance - 1-5
   * @returns {Array}
   */
  getEventsBySignificance: function(minSignificance) {
    var results = [];
    for (var i = 0; i < this.events.length; i++) {
      if (this.events[i].significance >= minSignificance) {
        results.push(this.events[i]);
      }
    }
    return results;
  },

  /**
   * Get the full cross-reference graph for an event (2 levels deep).
   * @param {string} eventId
   * @returns {Object} { event, connections: [{ event, connections: [...] }] }
   */
  getCrossReferenceGraph: function(eventId) {
    var self = this;
    var center = this.getEvent(eventId);
    if (!center) return null;
    var level1 = this.getConnectedEvents(eventId);
    var graph = {
      event: center,
      connections: []
    };
    for (var i = 0; i < level1.length; i++) {
      var l2 = self.getConnectedEvents(level1[i].id);
      graph.connections.push({
        event: level1[i],
        connections: l2
      });
    }
    return graph;
  },

  /**
   * Get timeline statistics.
   * @returns {Object}
   */
  getStats: function() {
    var cats = {};
    var charCounts = {};
    var sigCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (var i = 0; i < this.events.length; i++) {
      var evt = this.events[i];
      cats[evt.category] = (cats[evt.category] || 0) + 1;
      sigCounts[evt.significance] = (sigCounts[evt.significance] || 0) + 1;
      if (evt.characters) {
        for (var j = 0; j < evt.characters.length; j++) {
          var c = evt.characters[j];
          charCounts[c] = (charCounts[c] || 0) + 1;
        }
      }
    }
    return {
      total_events: this.events.length,
      by_category: cats,
      by_character: charCounts,
      by_significance: sigCounts
    };
  },

  // ───────────────────────────────────────────────────────────────────────────
  // INITIALIZATION
  // ───────────────────────────────────────────────────────────────────────────
  init: function() {
    this.meta.total_events = this.events.length;
    // Build reverse connection index
    this._connectionIndex = {};
    for (var i = 0; i < this.events.length; i++) {
      var evt = this.events[i];
      this._connectionIndex[evt.id] = evt.connected_events || [];
    }
    return this;
  }
}.init();
