// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — LEGACY OPERATIONS ENGINE
// ═══════════════════════════════════════════════════════════════════════════════
// Comprehensive intelligence database for The Legacy organization.
// Contains: organizational structure, key operatives, The Dampener specs,
// surveillance profiles of The Five, historical operations, threat classifications,
// The Silence intelligence, and communication protocols.
//
// Source canon: THE_LEGACY.md, LEGACY_OPERATIONS_MANUAL_LOP01.md,
//              THE_MEN_IN_BLACK.md, ZHAO_FULL_ARC.md, ASHLEY_COLE_FULL_ARC.md
//
// Usage: Referenced by the Signal Decay PWA for lore-accurate NPC dialogue,
//        narrative consistency, and interactive Legacy-themed content.
//
// Classification: TS/LEGACY EYES ONLY — HARMONIC CLEARANCE LEVEL
// Document Control: LCN-0047 | Revision 7.3 | Effective: 1 March 2024
// ═══════════════════════════════════════════════════════════════════════════════

const LEGACY_OPERATIONS_ENGINE = {

  // ═══════════════════════════════════════════════════════════════════════════
  // I. ORGANIZATIONAL STRUCTURE
  // ═══════════════════════════════════════════════════════════════════════════

  organization: {

    // ─────────────────────────────────────────────────────────────────────────
    // THE SEVEN RESTS — Governing Council (Foundation Level)
    // Named after musical rests — periods of silence in notation.
    // The irony is deliberate but has grown unconscious over generations.
    // ─────────────────────────────────────────────────────────────────────────

    the_seven_rests: {
      description: "The governing council of The Legacy. Seven seats, each named after a musical rest. Founded 1947. The founders chose these names because they saw themselves as necessary silences in the symphony of human progress.",
      naming_irony: "Zara, if she ever learned this naming convention, would laugh until she cried. Then she'd probably compose something savage about it.",
      motto: "We choose silence so that humanity may choose its own future — when it is ready.",
      founding_motto: "We are not the enemy of music. We are the levee that holds back the flood until the valley is ready.",

      succession_rules: {
        vacancy_process: "When a seat is vacated (death, incapacitation, or the extraordinarily rare retirement), all members shift up one rest.",
        entry_point: "New members always enter as the Sixty-Fourth Rest.",
        tenure: "The Whole Rest serves until death or until they invoke 'The Final Measure' — a voluntary stepping-down used exactly twice in 80 years.",
        removal: "There is no removal process. Once seated, always seated. This has caused problems exactly three times.",
        historical_problems: [
          "The Discord of 1978 — Harold Briggs attempted to weaponize the Magenta Bell. Died from unauthorized artifact activation.",
          "The Flat Note Incident of 1993 — details classified.",
          "The Chen Controversy of 2024 — Dr. James Chen's dissent on Dampener deployment against The Five."
        ]
      },

      seats: [
        {
          seat: "The Whole Rest",
          holder: "Director Elias Vought",
          age: 71,
          generation: "3rd (grandson of founder Colonel Thomas Vought)",
          specialty: "Strategic oversight, institutional memory",
          character_notes: "Soul-tired. Three generations of Voughts carrying this secret. Ex-wife Margaret left 2003. Daughter Sophia, 38, thinks he's a retired intelligence analyst. Has considered disclosure exactly twice: September 12, 2001, and the night he first heard Signal Decay's music.",
          dampener_vote: "YES — 'Not because I want to. Because I've run out of reasons to vote no.'",
          key_quote: "God help us if we're wrong.",
          tenure_years: 22,
          previous_roles: ["Field operative (14 years)", "Archive chief administrator (8 years)", "Eighth Rest (3 years)"]
        },
        {
          seat: "The Half Rest",
          holder: "Ambassador Hideki Tanaka",
          age: 68,
          generation: "2nd",
          specialty: "International coordination, Asian-Pacific operations",
          character_notes: "Based in Tokyo. Runs Asia-Pacific division independently. Represents Legacy's global reach beyond the US operational core.",
          dampener_vote: "YES"
        },
        {
          seat: "The Quarter Rest",
          holder: "Dr. Patricia Holloway",
          age: 63,
          generation: "2nd",
          specialty: "Scientific research, Archive management",
          character_notes: "The one who recruited Zhao despite atypical test results. Wrote: 'We've been selecting for fear for 80 years. It's made us effective but brittle. I wonder if we should start selecting for wonder.' Has growing doubts about containment-first approach.",
          dampener_vote: "YES (reluctantly)",
          key_quote: "Marcus. That's not a reason.",
          notable_actions: ["Overrode standard protocol to recruit Agent Zhao", "Challenged Webb's motivations for Dampener deployment"]
        },
        {
          seat: "The Eighth Rest",
          holder: "General (ret.) William 'Buck' Starling",
          age: 72,
          generation: "2nd",
          specialty: "Military operations, containment protocols",
          character_notes: "Hardliner. Objected to Zhao's recruitment. His response to Holloway's suggestion about selecting for wonder: 'Denied. Wonder gets people killed.'",
          dampener_vote: "YES",
          key_quote: "Wonder gets people killed."
        },
        {
          seat: "The Sixteenth Rest",
          holder: "Miriam Osei-Bonsu",
          age: 55,
          generation: "1st (recruited)",
          specialty: "Financial operations, institutional cover",
          character_notes: "Manages Legacy's $4.2 billion portfolio through Pacific Rim Holdings. Oversees the network of front organizations.",
          dampener_vote: "YES"
        },
        {
          seat: "The Thirty-Second Rest",
          holder: "Cardinal Antonio Reyes",
          age: 67,
          generation: "1st (recruited)",
          specialty: "Vatican liaison, religious crisis management",
          character_notes: "Maintains the Vatican connection established in 1933 when the Magenta Bell was first stored beneath the Vatican. Handles the religious implications of disclosure.",
          dampener_vote: "YES"
        },
        {
          seat: "The Sixty-Fourth Rest",
          holder: "Dr. James Chen",
          age: 44,
          generation: "1st (recruited)",
          specialty: "Quantum physics, frequency theory",
          character_notes: "The youngest member. Most brilliant theoretical mind in the organization. Wrote the memo warning that the Dampener would be ineffective against temporal manipulation (Subject ECHO-5/Oren). His recommendation was overruled by majority vote on April 2, 2025.",
          dampener_vote: "NO — dissented alongside Okonkwo",
          key_quote: "A full deployment against five active Resonants would create a silence signature approximately 400 times larger than any previous deployment. At that scale, we would not attract The Silence's attention. We would attract its presence.",
          notable_memos: [
            "March 2025: Warning that Dampener is ineffective against temporal manipulation",
            "Temporal void theory: creating a frequency void might make temporal manipulation EASIER within the field"
          ]
        }
      ],

      dampener_vote_record: {
        date: "April 2, 2025",
        subject: "Deploy The Dampener against Signal Decay (The Five)",
        result: "5-2 in favor of deployment",
        yes_votes: ["Vought (Whole Rest)", "Tanaka (Half Rest)", "Holloway (Quarter Rest)", "Starling (Eighth Rest)", "Osei-Bonsu (Sixteenth Rest)"],
        no_votes: ["Chen (Sixty-Fourth Rest)", "Reyes abstained but leaned no — operational records show Okonkwo's position paper influenced two dissenters"],
        disclosure_vote_2021: {
          subject: "Okonkwo's position paper arguing for controlled disclosure",
          result: "5-2 against disclosure",
          dissenters: ["Chen", "Okonkwo (non-voting but authored the paper)"]
        }
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DIRECTORATE COUNCIL — Operational Command (12 Members)
    // The ops manual describes a 12-member Directorate distinct from The Seven.
    // The Seven Rests = Foundation governance. Directorate = operational authority.
    // ─────────────────────────────────────────────────────────────────────────

    directorate_council: {
      description: "12 members who collectively hold absolute authority over all Legacy operations. No single member possesses unilateral authority except for OMEGA PROTOCOL activation (requires 9/12 supermajority).",
      membership: "For life. Replacement by unanimous vote of remaining members.",
      composition: {
        senior_military_intelligence: 2,
        intelligence_community_leadership: 3,
        defense_industrial_leadership: 2,
        academic_scientific: 2,
        financial_corporate: 2,
        legacy_career_operations: 1  // "The Insider's Seat"
      },
      members: [
        { designation: "LEGACY-1", affiliation: "Oversight (Chair)", years_of_service: 31, specialty: "Strategic direction" },
        { designation: "LEGACY-2", affiliation: "MIDNIGHT (Commander)", years_of_service: 24, specialty: "Dampener systems, SIGINT" },
        { designation: "LEGACY-3", affiliation: "Oversight", years_of_service: 19, specialty: "Financial operations" },
        { designation: "LEGACY-4", affiliation: "DANCE (Commander)", years_of_service: 27, specialty: "Theoretical physics, Looking Glass" },
        { designation: "LEGACY-5", affiliation: "Oversight", years_of_service: 15, specialty: "Congressional liaison (cover)" },
        { designation: "LEGACY-6", affiliation: "Oversight", years_of_service: 22, specialty: "International coordination" },
        { designation: "LEGACY-7", affiliation: "RISK (Commander)", years_of_service: 20, specialty: "Neuroscience, pharmaceuticals" },
        { designation: "LEGACY-8", affiliation: "Oversight", years_of_service: 12, specialty: "Technology sector infiltration" },
        { designation: "LEGACY-9", affiliation: "CETUS (Commander)", years_of_service: 33, specialty: "Xenobiology, craft systems" },
        { designation: "LEGACY-10", affiliation: "Oversight", years_of_service: 18, specialty: "Military liaison" },
        { designation: "LEGACY-11", affiliation: "DIXIE (Commander)", years_of_service: 29, specialty: "Tactical operations" },
        { designation: "LEGACY-12", affiliation: "Operations (Insider)", years_of_service: 38, specialty: "Legacy institutional knowledge" }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DIVISIONS — Operational Branches
    // ─────────────────────────────────────────────────────────────────────────

    divisions: {
      DANCE: {
        proword: "DANCE",
        mission: "Theoretical research, Third Octave studies, Looking Glass operations, long-range planning",
        personnel: 340,
        commander: "LEGACY-4",
        primary_facilities: ["DIVISION DANCE HQ (New Mexico)", "Looking Glass-2 (Nevada)", "S-4 Level 4-2"],
        key_programs: ["Looking Glass probability projection", "Third Octave mapping", "Frequency Origin research", "The Five predictive modeling"],
        origin_theory_preference: "Theory C — FVH sensitivity represents the baseline human condition. Current 'normal' humans are the variants. This theory is considered dangerous and its proponents are monitored.",
        notable: "Theory C researchers hypothesize that the Dampener may be reinforcing an existing suppression rather than creating a new one."
      },
      RISK: {
        proword: "RISK",
        mission: "Medical/biological research, pharmaceutical development, FVH genetic study, Handler operations, psychological operations",
        personnel: 890,
        commander: "LEGACY-7",
        primary_facilities: ["DIVISION RISK HQ (Connecticut)", "Blue Lab WP-61 (Virginia)", "Containment-East/West/Central"],
        key_programs: ["Program CRADLE (early detection)", "LEG pharmaceutical series", "Handler training and coordination", "FVH genetic mapping", "Operation SECOND HARVEST (recruitment)"],
        origin_theory_preference: "Theory A — Natural evolutionary mutation, manageable through population-level suppression.",
        pharmaceutical_series: {
          "LEG-QUIET": "Containment sedation (grades 1-9). LEG-QUIET-9 is maximum dosage for frequency-elevated metabolism.",
          "LEG-DREAMLESS": "Sleep suppression — prevents frequency activity during deep sleep. Dampener pulse sequence administered during sleep hours.",
          "LEG-FLAT": "Long-term dampening pharmaceutical. LEG-FLAT-7 administered covertly via medical channels.",
          "LEG-FORGET": "Memory significance reduction — doesn't erase memory, reduces emotional weight and motivation to discuss. Dampener pulse sequence LEG-FORGET-3.",
          "LEG-FINAL": "Terminal pharmaceutical. LEG-FINAL-1 produces cardiac arrest with minimal physical stress. Used only when termination is authorized."
        }
      },
      MIDNIGHT: {
        proword: "MIDNIGHT",
        mission: "Communications, Dampener operations, detection networks, signals intelligence, media infiltration",
        personnel: 2100,
        commander: "LEGACY-2",
        is_largest_division: true,
        primary_facilities: ["FREQ-NET Central (Utah)", "STATION ECHO network (global)", "S-4 Level 4-1 Communications"],
        key_programs: ["Dampener maintenance and expansion", "FREQ-NET detection network", "ECHO-WATCH acoustic monitoring", "Operation STATIC (music industry)", "Operation GRAY NOISE (media control)"],
        origin_theory_preference: "Theory B — Deliberate genetic intervention by Second Octave intelligences.",
        detection_systems: {
          "FREQ-NET": {
            operational_since: 2003,
            description: "Network of 47,000 frequency-emission sensors disguised as cellular infrastructure components",
            detection_threshold: "0.005 T coherent emission at Compton frequency",
            triangulation_accuracy: "within 15 meters",
            false_positive_rate: "< 0.3%",
            alert_routing: "Automated to nearest Regional Operations Chief within 4 minutes"
          },
          "ECHO-WATCH": {
            operational_since: 2011,
            description: "Acoustic analysis algorithms embedded within commercial music streaming platforms",
            purpose: "Monitors for frequency-coherent patterns in user-generated content",
            capability: "Identifies subjects producing music with anomalous harmonic content — overtone structures that should not be achievable with standard instrumentation"
          },
          "DAMPENER_VARIANCE": {
            operational_since: 1983,
            description: "The Dampener network itself functions as a detection grid",
            mechanism: "Areas where Dampener efficacy drops below standard parameters indicate the presence of a sufficiently powerful FVH subject",
            analogy: "A Category 3+ subject creates a measurable 'dead zone' in Dampener coverage — like a shadow in the frequency fog"
          }
        }
      },
      CETUS: {
        proword: "CETUS",
        mission: "Non-human entity management, Second Octave interface research, craft operations, off-world liaison",
        personnel: 170,
        is_smallest_division: true,
        commander: "LEGACY-9",
        primary_facilities: ["OPNAC BRS-01 (Colorado)", "S-4 Bays 1-8"],
        key_programs: ["Craft maintenance and study", "Second Octave entity communication", "ARV operations", "Magenta Crash research"]
      },
      DIXIE: {
        proword: "DIXIE",
        mission: "Tactical operations, field recovery, witness management, suppression enforcement, security",
        personnel: 1450,
        commander: "LEGACY-11",
        primary_facilities: ["DIVISION DIXIE OPS (Georgia)", "S-4 Security", "Field teams worldwide"],
        key_programs: ["BLUE/GREEN/RED Team operations", "SILENCE Protocol enforcement", "Protocol MIRROR/STATIC/VOID (discrediting)", "Facility security", "The Five surveillance operations"],
        recovery_teams: {
          BLUE_TEAM: {
            target_category: "1-2",
            personnel: 4,
            composition: "Team Leader, 2 Field Agents, 1 Technical Monitor",
            equipment: "Standard surveillance kit, DFP-7 portable Dampener, secure transport",
            authorization: "Regional Operations Chief",
            lethal_force: "NOT AUTHORIZED"
          },
          GREEN_TEAM: {
            target_category: "3",
            personnel: 8,
            composition: "Team Leader, 4 Field Agents, 2 Technical Monitors, 1 Medical Officer",
            equipment: "Full Faraday shielding, DFP-12 high-output portable Dampener, frequency-isolation transport pod, witness processing kit",
            authorization: "Division Commander",
            lethal_force: "AUTHORIZED — Last resort only"
          },
          RED_TEAM: {
            target_category: "4-5",
            personnel: 16,
            composition: "Team Commander, 8 Tactical Operators, 4 Technical Monitors, 2 Medical Officers, 1 Looking Glass Liaison",
            equipment: "Full spectrum frequency countermeasures, military-grade Faraday armor, ADA-3 autonomous Dampener array, frequency-null isolation chamber (mobile), area-denial electronic warfare suite",
            authorization: "Directorate Council (majority vote)",
            lethal_force: "AUTHORIZED — Standing order if containment fails",
            critical_screening: "All RED TEAM personnel pre-screened for ZERO frequency sensitivity. Monthly screening. Any elevation = permanent removal from tactical operations."
          }
        }
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CHAIN OF COMMAND
    // ─────────────────────────────────────────────────────────────────────────

    chain_of_command: {
      reporting_structure: "Directorate Council (12) → Division Commanders (5) → Regional Operations Chiefs → Station Commanders → Field Teams",
      autonomy: "The Legacy operates under autonomous authority. No elected official, military commander, or intelligence agency director possesses oversight jurisdiction unless individually cleared to HARMONIC level.",
      override: "No government agency, including the military, has access to Legacy archives. Only Legacy-cleared personnel have access to operational details."
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PERSONNEL TIERS
    // ─────────────────────────────────────────────────────────────────────────

    personnel_tiers: {
      tier_1_full_knowledge: {
        count: "~200 worldwide",
        roles: ["Field agents", "Senior scientists", "Military liaisons", "Intelligence analysts", "Archive custodians"]
      },
      tier_2_partial_knowledge: {
        count: "~2,000",
        roles: ["Compartmentalized researchers", "Military SAP personnel", "Financial specialists", "Media contacts who kill stories"]
      },
      tier_3_unknowing_assets: {
        count: "~15,000",
        roles: ["Government officials following Legacy-influenced policy", "Academic researchers with Legacy front org funding", "Tech executives implementing frequency-dampening in consumer products", "Musicians steered away from certain frequency combinations"],
        dark_irony: "Why do you think most phone speakers sound so flat?"
      },
      total_legacy_personnel: 4980,
      external_assets: "~12,000 (contractors, informants, unwitting participants)"
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FUNDING AND COVER ORGANIZATIONS
    // ─────────────────────────────────────────────────────────────────────────

    funding: {
      annual_budget: "$780 million (includes black-budget pass-throughs from 3 intelligence agencies)",
      portfolio_value: "$4.2 billion",
      front_organizations: [
        { name: "The Vought Foundation", type: "Public charity — arts education", irony: "They fund music programs while suppressing frequency knowledge" },
        { name: "Meridian Research Group", type: "Defense contractor — 'advanced acoustics'" },
        { name: "Pacific Rim Holdings", type: "Investment firm — manages the Legacy portfolio" },
        { name: "The Esperanza Trust", type: "Manages the physical Archive site" }
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // THE ARCHIVE
    // ─────────────────────────────────────────────────────────────────────────

    archive: {
      location: "1,800 feet below the Chihuahuan Desert, New Mexico",
      distance_from_roswell: "47 miles",
      distance_from_area_51: "112 miles",
      access: "Single elevator shaft disguised as the 'Esperanza Silver Mine' (officially closed since 1972). Elevator descends for 4 minutes at maximum speed. No stairwell. If power fails, the facility is sealed.",
      decoy_strategy: "Roswell and Area 51 serve as decoys — conspiracy theorists focus on the places they know about.",
      vaults: [
        { id: "Vault 1 — Recovery", contents: "12 intact or partially intact craft spanning 1933-2019", status: "Contained, monitored" },
        { id: "Vault 2 — Biological", contents: "Preserved remains of 7 non-human entities", status: "Contained, deteriorating" },
        { id: "Vault 3 — Documentary", contents: "347,000+ pages of files, recordings, photographs", status: "Cataloged, restricted" },
        { id: "Vault 4 — Technological", contents: "89 recovered devices/components", status: "Contained, 86 non-functional" },
        { id: "Vault 5 — Active Research", contents: "The Dampener, frequency measurement equipment", status: "Operational" },
        { id: "Vault 6 — Quarantine", contents: "Items deemed too dangerous to study", status: "Sealed since 1981 (Forty-Three Seconds incident)" },
        { id: "Vault 7 — The Music Room", contents: "Frequency recordings from every major event since 1947", status: "Accessible to Tier 1 only" }
      ],
      vault_6_incident: {
        year: 1981,
        trigger: "Research team activated a crystalline object recovered from a 1976 event in Brazil",
        duration: "43 seconds",
        effect: "Every person in the Archive (all 31 present) experienced a sensation of being observed by something vast, ancient, and utterly indifferent to their existence. Not malevolent. Not benevolent. Simply aware of them.",
        aftermath: "3 researchers resigned. 1 required psychiatric hospitalization. Vault sealed unanimously.",
        signal_decay_connection: "In 2024, when Signal Decay performed for the first time, the readings from Vault 6 shifted by 0.001%. It noticed them."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // II. KEY OPERATIVES
  // ═══════════════════════════════════════════════════════════════════════════

  operatives: {

    agent_zhao: {
      designation: "Agent Corinne Wei Zhao",
      rank: "Tier 1 Field Operative (SIGINT Specialist)",
      age: 34,
      born: "March 7, 1991, Seattle, Washington",
      ethnicity: "Chinese-American",
      clearance: "ULTRA / RESONANCE / EYES ONLY",
      specialty: "Signals intelligence, pattern recognition, frequency monitoring",
      assignment: "Operation HARMONIC CENSUS — Primary surveillance, Signal Decay",
      cover_identity: "Freelance music journalist",
      current_status: "FUGITIVE",
      base_frequency: "Unremarkable. 0.0 anomalous deviation. The most ordinary signal on Earth.",
      loyalty_status: "TURNED — betrayed Legacy to warn The Five",
      knowledge_level: "FULL — Tier 1 access, complete awareness of Legacy operations, The Five profiles, Dampener capabilities",
      background: {
        education: "Mathematics and Linguistics double major, University of Washington (2009-2013)",
        military: "Army ROTC, commissioned 2nd Lieutenant, MOS 35S — Signals Collector/Analyst",
        nsa_career: "2013-2019. Best signals analyst at NSA. Could identify operators by transmission pattern alone. Ability defeated machine analysis.",
        recruitment: "February 14, 2019. Resonance Exposure Test with Artifact 3-A (whispering lens). Reacted with fear AND tears — 'felt homesick for a place she'd never been.' Flagged as atypical but advanced on Holloway's override.",
        parents: "Wei-Ming Zhao (Boeing engineer, amateur radio operator KD7WMZ) and Catherine 'Kit' Zhao née Brennan (freelance cellist, Seattle Symphony contract)"
      },
      key_trait: "Can hear patterns others miss — 'shapes in static.' Not a Resonant, but has extraordinary structural perception of sound and frequency.",
      sao_paulo_assessment: {
        year: 2020,
        subject: "Ana Lucia Dos Santos — post-neutralization assessment",
        impact: "Broke something in Zhao. She saw what the Dampener did — permanently severed Ana Lucia's frequency connection. Began recurring nightmares.",
        personal_note: "What we did to this woman is something she will never understand and never recover from. She doesn't know what happened to her."
      },
      signal_decay_surveillance: {
        assignment_date: "Early 2025",
        descent_timeline: [
          "Week 1: Clinical reports. 'Subject ALPHA-1 exhibited standard vocal frequency patterns.'",
          "Week 3: 'Band cohesion improving significantly.'",
          "Week 5: 'Their music is — correction. Subjects' combined frequency output increasing.'",
          "Week 7: Report filed 48 hours late. Single line: 'They're beautiful together. I don't know how to say that in operational language.'"
        ],
        breaking_point: "Heard Zara's solo piano improvisation through warehouse walls. Deep Resonance in fragment form. Put her head against the steering wheel and sobbed.",
        the_warning: {
          time: "2:17 AM, night before Dampener deployment",
          recipient: "Mira Chen (chosen because Chromatic Sight would verify Zhao's sincerity)",
          message: "Someone is watching. Someone has technology that can silence you. Tomorrow night. Don't perform. Be careful.",
          mira_question: "Why are you telling us?",
          zhao_answer: "Because I used to think silence was protection. I don't anymore."
        }
      },
      personal_log: "I joined The Legacy because they showed me the truth. But I've been listening to Signal Decay for months now. Five people. Young. Brilliant. Completely unprepared for what they're becoming. And I don't see a threat. I see a beginning."
    },

    director_vought: {
      designation: "Director Elias Vought",
      rank: "The Whole Rest — Chair of The Seven",
      age: 71,
      born: "1955, Alexandria, Virginia",
      clearance: "DIRECTORATE",
      specialty: "Strategic oversight, institutional memory",
      loyalty_status: "LOYAL — but increasingly conflicted",
      knowledge_level: "COMPLETE — three generations of Legacy knowledge",
      lineage: {
        grandfather: "Colonel Thomas Vought — OSS, founding member, led 1944 Naples crossing to recover Magenta Bell",
        father: "Robert Vought — Second Rest, 1962-1989",
        role: "Third generation gatekeeper"
      },
      character: "Soul-tired. The kind of exhaustion that comes from carrying a truth so large that it has slowly crushed the person beneath it into someone unrecognizable.",
      family: {
        ex_wife: "Margaret — left in 2003, suspected something but never knew",
        daughter: "Sophia, age 38 — thinks her father is a retired intelligence analyst"
      },
      disclosure_considerations: [
        "September 12, 2001 — when the world seemed to be ending anyway",
        "The night he first heard Signal Decay's music — decided against it, but the second time took longer"
      ],
      key_dialogue: "I've sat in this chair for twenty-two years. My father sat in it before me. His father before him. Three generations of Voughts have kept this secret, and in three generations, the world has not become more ready for the truth."
    },

    dr_webb: {
      designation: "Dr. Marcus Webb",
      rank: "Head of Reverse Engineering, Vault 5",
      age: 58,
      born: "1967, Cambridge, Massachusetts",
      clearance: "HARMONIC",
      specialty: "Applied physics, materials science, NHI technology reverse engineering",
      education: ["PhD Applied Physics (MIT, 1992)", "PhD Materials Science (Caltech, 1996)"],
      loyalty_status: "LOYAL — driven by bitterness and professional desperation",
      knowledge_level: "DEEP — 30 years studying NHI technology, built the Dampener",
      character: "Brilliant, bitter, and broken. Has spent three decades studying something that refuses to fully yield to his understanding. The technology responds to consciousness and intention — Webb is a materialist who refuses to accept this.",
      the_dampener_problem: "His one success — and it's barely a success. The device works inconsistently. Its effective radius varies by 15% between deployments. The variable he'll never discover: the emotional state of the operators. Fear powers it. Conviction powers it. Doubt weakens it.",
      the_creator_fury: "When the Creator's AI app replicated in months what Webb couldn't do in decades, he was consumed by rage. A 20-something with a laptop and open-source ML libraries accomplished what $2.3 billion in research couldn't.",
      personal_cost: "Two divorces. A daughter who won't return his calls. Arthritis in his hands from working in that frozen vault.",
      key_dialogue: "I want the Dampener deployed. I want those five subjects neutralized. And I want that application shut down. Not because I think they're a threat. Because if they succeed — if they activate — then the proof that I wasted my life becomes UNDENIABLE."
    },

    colonel_okonkwo: {
      designation: "Colonel Sarah Okonkwo",
      rank: "Military Liaison, Tier 1",
      age: 48,
      born: "1977, Lagos, Nigeria. Raised in London from age 6.",
      clearance: "HARMONIC",
      specialty: "Cross-cultural frequency interpretation, military coordination, strategic analysis",
      background: ["British Army (1995-2010)", "MI6 (2010-2016)", "Seconded to Legacy via Five Eyes framework"],
      loyalty_status: "WAVERING — argues for disclosure, under increased surveillance",
      knowledge_level: "FULL — only non-American to hold Tier 1 position in US structure",
      character: "Grew up in two worlds: Lagos and London. Understands both Western materialist and non-Western spiritual interpretations of frequency phenomena. Her dual perspective makes her uniquely valuable and uniquely dangerous.",
      disclosure_argument: "Strategic, not idealistic. Every year of secrecy makes eventual disclosure MORE devastating. 'We are not building a levee. We are building a dam. And every year, the water rises.'",
      position_paper_2021: {
        key_argument: "Our secrecy has prevented humanity from developing frequency literacy. We have ensured that when activation events happen, the humans involved have NO FRAMEWORK for understanding their experience. We have made them helpless. We call this protection.",
        vote_result: "Rejected 5-2. Okonkwo and Chen dissented."
      },
      ashley_cole_discovery: "In 2023, during routine financial audit, noticed 25 years of payments to a PI firm cross-referenced to five specific individuals — discovered Ashley Cole's deal with The Legacy.",
      current_status: "Under increased surveillance. Communications monitored. Archive access restricted. She knows this. She continues anyway."
    },

    dr_holloway: {
      designation: "Dr. Patricia Holloway",
      rank: "The Quarter Rest",
      age: 63,
      clearance: "DIRECTORATE",
      specialty: "Scientific research, Archive management, recruitment oversight",
      loyalty_status: "LOYAL — but philosophically evolving",
      knowledge_level: "COMPLETE",
      key_contribution: "Recruited Agent Zhao despite atypical Resonance Exposure Test results. Overrode standard fear-selection protocol.",
      character: "The quiet conscience of The Seven. Increasingly questioning the fear-based selection and containment-first approaches.",
      notable_quotes: [
        "We've been selecting for fear for 80 years. It's made us effective but brittle. I wonder if we should start selecting for wonder.",
        "She's already asking the right questions. The question is whether she'll accept the wrong answers."
      ]
    },

    general_starling: {
      designation: "General (ret.) William 'Buck' Starling",
      rank: "The Eighth Rest",
      age: 72,
      clearance: "DIRECTORATE",
      specialty: "Military operations, containment protocols",
      loyalty_status: "LOYAL — hardline containment advocate",
      knowledge_level: "COMPLETE",
      character: "The iron hand. Objected to Zhao's recruitment. Believes wonder is a liability. Represents the military-industrial core of Legacy philosophy.",
      key_quote: "Denied. Wonder gets people killed."
    },

    dr_chen_james: {
      designation: "Dr. James Chen",
      rank: "The Sixty-Fourth Rest (newest member)",
      age: 44,
      clearance: "DIRECTORATE",
      specialty: "Quantum physics, frequency theory, temporal mechanics",
      loyalty_status: "LOYAL — but dissenting on key decisions",
      knowledge_level: "COMPLETE",
      character: "Most brilliant theoretical mind in the organization. Sees the flaws in the Dampener approach. His warnings about temporal manipulation being immune to frequency suppression were ignored.",
      key_contribution: "Modeled that full Dampener deployment against five active Resonants would create a silence signature 400x larger than any previous deployment — enough to attract The Silence's physical presence.",
      temporal_warning: "Time is not vibration. It is structure. A field that eliminates vibration should have no effect on temporal manipulation, just as removing sound from a room doesn't stop the clock."
    },

    dr_vasquez: {
      designation: "Dr. Elena Vasquez",
      rank: "Senior Archivist / Frequency Historian",
      clearance: "HARMONIC",
      specialty: "Legacy Archives, historical frequency event documentation, zero-frequency phenomena",
      loyalty_status: "LOYAL",
      knowledge_level: "DEEP — particular expertise in The Silence and Hollow One phenomena",
      key_quote: "The silence between notes is not the absence of music. It is music's other face. The face that watches."
    },

    ashley_cole: {
      designation: "Ashley Donovan Cole",
      rank: "EXTERNAL ASSET — Civilian informant (Resonant)",
      age: 65,
      born: "March 14, 1960, Brooklyn, New York",
      clearance: "LEGACY COMPARTMENTED (limited)",
      specialty: "Signal Architect (cosmic function — coordinates five individual signals into one coherent broadcast)",
      instrument: "Voice/Guitar",
      base_frequency: "528 Hz — 'The Love Frequency' — matches Deep Sea Well 5 near Easter Island",
      loyalty_status: "TURNED (Legacy asset since 2001) — informant against The Five for 25 years",
      knowledge_level: "PARTIAL — knows about the Archive, the Bell, the dead worlds footage. Does not know about The Silence specifically.",
      background: {
        parents: "Carlton Cole (Trinidadian, steel pan player) and Margaret Cole née Doyle (Irish-American, waitress/singer)",
        career: "Global superstar. 200+ million records sold. Multiple Grammys. Rolling Stone cover 9 times.",
        the_remembering: "October 12, 1985, Madison Square Garden. Full cosmic download mid-performance at age 25. 20,000 people. Kept singing. Nobody noticed.",
        first_thought_after_remembering: "I don't want to."
      },
      the_deal: {
        year: 2001,
        context: "The Legacy approached him at age 41 after detecting frequency spikes at his father's funeral. They showed him the Archive, the Bell, the footage from dead worlds.",
        terms: "Ashley provides intelligence on the five Harmonics. Feeds information to The Legacy. In return: his career continues undisturbed, and he is 'protected' from the consequences of activation.",
        duration: "25 years of active informant work (2001-2026)",
        betrayal_scope: "Monitoring the five Harmonics via PI network. Redirecting their paths. Feeding information to people who would Dampen them."
      },
      cosmic_function: {
        role: "Signal Architect — coordinates five separate frequencies into one coherent broadcast",
        what_it_means: "Without Ashley, five powerful beings playing at once produce noise. WITH Ashley, they produce a Signal — one coherent frequency broadcast that can wake up a planet.",
        harmonic_gravity: "His presence makes other frequencies orbit him. Not subservience — alignment. Like a tuning fork that makes other instruments want to find their note."
      },
      career_operates_at: "60% of actual capability. The 40% he's hiding could restructure reality.",
      album_titles_as_unconscious_signals: ["Frequency (1981)", "The Architecture of Sound (1982)", "Signal (1984)", "The Architect (1986)", "Resonance (1988)", "Glass Cathedral (1991)", "Meridian (1996)"],
      soren_last_call: {
        year: 1994,
        context: "Soren called to say he was leaving — going into the pocket in Patagonia. Asked Ashley to find and protect the five Harmonics.",
        ashley_response: "'I can't, Soren. I'm... I have a life. I have obligations.'",
        soren_response: "'Twenty million fans depend on your ENTERTAINMENT, Ashley. Five SOULS depend on your PURPOSE. And you're telling me you can't tell the difference.'",
        aftermath: "Last contact with Soren before he sealed himself in the pocket and was slowly cancelled out by The Silence."
      }
    },

    handler_crimson: {
      designation: "HANDLER-CRIMSON",
      rank: "Primary Handler, Subject CRIMSON",
      clearance: "OMEGA",
      assignment: "Deep cover surveillance of Subject CRIMSON since age 7",
      cover: "Neighborhood guitar instructor",
      loyalty_status: "LOYAL",
      knowledge_level: "OMEGA — full Five profiles access",
      handler_assessment: "CRIMSON exhibits increasing restlessness. States repeatedly that 'something is missing.' Suspects they are searching without knowing what for."
    },

    handler_silver: {
      designation: "HANDLER-SILVER",
      rank: "Primary Handler, Subject SILVER",
      clearance: "OMEGA",
      assignment: "Deep cover surveillance of Subject SILVER since age 8",
      cover: "Family friend/neighbor",
      loyalty_status: "LOYAL — but filing increasingly urgent recovery requests",
      knowledge_level: "OMEGA",
      handler_assessment: "SILVER is the most immediately dangerous in terms of PUBLIC EFFECT. Every public performance risks audience activation. IMMEDIATE RECOVERY recommended."
    },

    red_actual: {
      designation: "RED-ACTUAL",
      rank: "RED Team Commander",
      clearance: "HARMONIC",
      assignment: "Division DIXIE OPS — commands Category 4-5 tactical extraction teams",
      loyalty_status: "LOYAL",
      knowledge_level: "OPERATIONAL — full recovery protocols, The Five tactical profiles",
      team_specs: "16-person tactical unit. Military-grade Faraday armor. Autonomous Dampener arrays. Pre-screened for ZERO frequency sensitivity."
    },

    omega_coordinator: {
      designation: "OMEGA-COORDINATOR",
      rank: "Convergence Prevention Lead",
      clearance: "OMEGA",
      assignment: "S-4 (mobile) — coordinates all efforts to prevent The Five from meeting",
      loyalty_status: "LOYAL",
      knowledge_level: "OMEGA — the single most informed individual about The Five's movements"
    },

    looking_glass_1: {
      designation: "LOOKING-GLASS-1",
      rank: "Chief Probability Analyst",
      clearance: "RED/OMEGA",
      assignment: "S-4 Level 4-2 — operates Looking Glass probability projection array",
      loyalty_status: "LOYAL",
      knowledge_level: "DEEP — sees multiple probability timelines",
      key_contribution: "1996 projection that identified The Five with 94% confidence — highest-certainty projection ever recorded"
    },

    dampener_prime: {
      designation: "DAMPENER-PRIME",
      rank: "Chief Dampener Engineer",
      clearance: "HARMONIC",
      assignment: "FREQ-NET Central, Utah",
      loyalty_status: "LOYAL",
      knowledge_level: "TECHNICAL — complete understanding of global Dampener network"
    },

    archivist_chen: {
      designation: "Archivist Chen",
      rank: "Archive Custodian, Vault 3",
      clearance: "HARMONIC",
      specialty: "Historical cross-referencing, zero-frequency event analysis",
      loyalty_status: "LOYAL",
      knowledge_level: "DEEP — particularly regarding MIB/Hollow One phenomena",
      key_finding: "Cross-referenced Bender 1953 incident with zero-frequency logs. Confirmed the suppression pattern did not match any Legacy protocol. 'This was not us.' — referring to Hollow One deployments by The Silence."
    },

    ana_lucia_dos_santos: {
      designation: "Subject SP-2008-001",
      rank: "FORMER FVH — permanently neutralized",
      age: 36,
      location: "São Paulo favela, Brazil",
      former_ability: "Weather pattern modulation through vocalization — could make the rain dance with her singing",
      current_status: "Permanently dampened. Frequency output at baseline human. Works as music teacher at Escola de Música Estrela do Amanhã.",
      dampener_exposure: "3 hours 47 minutes, full power, close range — abilities permanently destroyed",
      her_words: "Going deaf in a sense I didn't know existed.",
      significance: "The São Paulo precedent. What The Legacy plans to do to five more people. The operation that broke Agent Zhao.",
      zhao_handwritten_note: "What we did to Ana Lucia is what we're planning to do to five more people. I'm not sure I can be part of this again."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // III. THE DAMPENER
  // ═══════════════════════════════════════════════════════════════════════════

  the_dampener: {

    // ─────────────────────────────────────────────────────────────────────────
    // TACTICAL DAMPENER (Mobile Unit — "The Crown Jewel")
    // ─────────────────────────────────────────────────────────────────────────

    tactical_unit: {
      designation: "ARTIFACT 5-ACTIVE-001 ('The Dampener')",
      reverse_engineered_from: "The Magenta Bell (Artifact 1-A) frequency drive component",
      operational_since: 1989,
      total_deployments: 14,
      development_cost: "$2.3 billion",
      development_time: "42 years of research",
      human_cost: "7 dead scientists during development",

      physical_specs: {
        main_unit: "2.4m × 1.8m × 1.6m (fits in a large cargo van)",
        weight: "3,200 kg",
        power_requirement: "Dedicated 500kW generator (separate vehicle)",
        cooling: "Liquid nitrogen (third vehicle)",
        deployment_footprint: "Three vehicles + crew of six"
      },

      operational_principle: {
        mechanism: "Does NOT block frequency — creates a localized space where frequency CANNOT PROPAGATE",
        analogy: "Blocking frequency = putting up a wall. The Dampener = creating a void where the concept of frequency ceases to exist.",
        webb_description: "Creating a local instance of absolute zero, but for vibration rather than temperature.",
        effects_within_field: [
          "Sound waves cease — not muffled, but CEASE entirely",
          "Electromagnetic signals cannot propagate (radio, cellular, WiFi — all dead)",
          "Frequency-based abilities completely nullified",
          "Biological processes continue on 'backup power' — subjects report feeling 'hollow'",
          "Time appears unaffected (THIS IS SIGNIFICANT — see temporal_problem)"
        ]
      },

      effective_radius: {
        minimum: "15 meters (enough for a room)",
        maximum: "200 meters (enough for a small venue)",
        sweet_spot: "50 meters (sustainable for maximum duration)"
      },

      duration: {
        maximum_continuous: "4 hours, 12 minutes (achieved once, 2007 test — 72 hours cooling required afterward)",
        standard_deployment: "2 hours (safety margin)",
        emergency_burst: "Full power, 30-meter radius, 6 minutes maximum — causes permanent device damage each time. Used only twice.",
        hard_limit_real_reason: "4 hours is the longest they've operated without attracting The Silence. The overheating story is cover, even internally."
      },

      inconsistency_problem: {
        symptom: "Effective radius varies by 15% between deployments with identical settings. Duration fluctuates.",
        webb_explanation: "No identified variable accounts for the variations.",
        true_variable: "The emotional state of the operators. Fear powers it. Conviction powers it. Doubt weakens it. This is why Agent Zhao was never allowed near it — her ambivalence would have reduced its effectiveness."
      },

      temporal_problem: {
        identified_by: "Dr. James Chen (Sixty-Fourth Rest)",
        core_issue: "The Dampener assumes all abilities are frequency-dependent. Temporal manipulation is NOT frequency-based — time is structure, not vibration.",
        risk: "Creating a frequency void might make temporal manipulation EASIER within the field, as there would be no frequency-based resistance to temporal restructuring.",
        subject_at_risk: "Subject ECHO-5 (Oren) — shows temporal indicators",
        chen_recommendation: "Do not deploy against ECHO-5 until temporal variable is understood.",
        foundation_response: "Overruled by majority vote, April 2, 2025."
      },

      effectiveness_per_target_frequency: {
        category_1_dormant: "100% effective — fully suppresses with no resistance",
        category_2_latent: "95%+ effective — slight residual at extreme emotional states",
        category_3_emergent: "80-90% effective — subject may retain fragments of awareness",
        category_4_active: "40-60% effective — subject develops natural immunity, Dampener signal reflected rather than absorbed",
        category_5_resonant: "MINIMAL — Category 5 subjects have demonstrated resistance. Requires prolonged saturation (20+ minutes) to reduce emissions to measurable levels",
        category_6_convergence: "UNKNOWN — no protocol exists. Modeling suggests total Dampener failure within 3 minutes if two Category 5 subjects perform together."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // GLOBAL DAMPENER NETWORK
    // ─────────────────────────────────────────────────────────────────────────

    global_network: {
      operational_since: 1983,
      principle: "Incoherent scalar electromagnetic waves at ELF frequencies (0.1-30 Hz), transmitted longitudinally through Earth's electromagnetic field",
      plain_language: "Fills the frequency environment with static that prevents human brains from tuning into the Second Octave. Like white noise drowning out a whisper.",
      global_coverage: "94.7% of global population (gaps: deep ocean, polar regions, certain elevated terrain)",
      power_consumption: "2.7 gigawatts — hidden within standard transmission losses",
      disguised_as: "Cellular infrastructure, broadcast equipment, power distribution components",

      primary_frequencies: [
        { hz: 7.83, purpose: "Schumann resonance disruption — most critical frequency. Occupies natural Earth-brain resonance channel with incoherent signal." },
        { hz: 14.1, purpose: "First harmonic of Schumann" },
        { hz: 20.3, purpose: "Second harmonic, modified" },
        { hz: 4.16, purpose: "Theta brainwave suppression — prevents frequency perception during meditative/creative states" },
        { hz: 0.7, purpose: "Sub-harmonic — Delta suppression, prevents frequency activity during deep sleep" },
        { hz: 1.2, purpose: "Sub-harmonic — Delta suppression" }
      ],

      signal_design: "Specifically NON-harmonic. Contains no repeating pattern, no rhythmic structure, no coherent overtone series. Mathematically designed to be the opposite of music — anti-pattern, anti-coherence, anti-meaning.",

      historical_milestones: [
        { year: 1950, event: "Wilbert B. Smith demonstrates geo-magnetic field energy extraction — proof of concept" },
        { year: 1963, event: "First laboratory-scale prototype achieves measurable FVH suppression" },
        { year: 1972, event: "Metropolitan coverage: DC, NYC, LA (test deployment)" },
        { year: 1976, event: "Continental operational status" },
        { year: 1983, event: "Global deployment commences — disguised as cellular infrastructure" },
        { year: 1996, event: "Digital Dampener Integration protocol — embedded in digital broadcast standards" },
        { year: 2011, event: "Smartphones function as individual Dampener nodes" },
        { year: 2019, event: "5G deployment provides unprecedented urban Dampener density" }
      ],

      coverage_zones: [
        { code: "DAMP-NA-1", zone: "North America East", status: "OPERATIONAL", level: "Standard" },
        { code: "DAMP-NA-2", zone: "North America West", status: "OPERATIONAL", level: "Standard" },
        { code: "DAMP-NA-3", zone: "North America Central", status: "OPERATIONAL", level: "Standard" },
        { code: "DAMP-EU-1", zone: "Western Europe", status: "OPERATIONAL", level: "Standard" },
        { code: "DAMP-EU-2", zone: "Eastern Europe", status: "OPERATIONAL", level: "Reduced (60%)" },
        { code: "DAMP-AP-1", zone: "East Asia", status: "OPERATIONAL", level: "Standard" },
        { code: "DAMP-AP-2", zone: "Southeast Asia", status: "OPERATIONAL", level: "Reduced (45%)" },
        { code: "DAMP-AF-1", zone: "Africa (sub-Saharan)", status: "PARTIAL", level: "Limited (30%)" },
        { code: "DAMP-SH-2", zone: "South America", status: "OPERATIONAL", level: "Reduced (55%)" },
        { code: "DAMP-OMEGA-1 through 5", zone: "Five subject residential zones", status: "OPERATIONAL", level: "Enhanced (200-400%)" }
      ],

      limitations: [
        "Category 4+ subjects develop natural immunity — signal reflected not absorbed",
        "Coherent live music can temporarily override suppression within limited radius",
        "Geographic gaps: deep ocean, polar regions, terrain above 3,000m with specific mineral compositions",
        "Cumulative exposure paradox: some subjects develop Dampener fatigue syndrome over decades",
        "Group coherence vulnerability: multiple latent FVH subjects performing together can overwhelm local coverage"
      ],

      the_five_projection: {
        by_age_25: "Standard Dampener will have ZERO efficacy against any of The Five individually",
        if_two_perform: "Local Dampener coverage will fail within ~3 km radius",
        if_all_five_perform: "Modeling cannot predict outcome. Total Dampener failure assumed. Cascade activation of latent FVH subjects within hearing range is CERTAIN."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // DEPLOYMENT HISTORY
    // ─────────────────────────────────────────────────────────────────────────

    deployment_history: [
      { date: "1989", location: "Archive (test)", target: "Controlled environment", outcome: "Success — first operational test", codename: "FIRST SILENCE" },
      { date: "1993", location: "Rural Montana", target: "Unidentified frequency source", outcome: "Source neutralized — turned out to be geological. BUT: sensors detected something massive moving toward the Dampener field. The Silence was attracted. Deployment cut short.", codename: "PALE MOTH", silence_encounter: true },
      { date: "1997", location: "Phoenix, AZ", target: "Phoenix Lights event", outcome: "Partial success — reduced public frequency exposure by ~60%", codename: "DESERT VEIL" },
      { date: "2004", location: "Pacific Ocean (ship-based)", target: "Underwater frequency signal", outcome: "Failure — ocean water conducted around the bubble", codename: "DEEP REACH" },
      { date: "2008", location: "São Paulo, Brazil", target: "Ana Lucia Dos Santos — awakening Resonant", outcome: "Success — subject's abilities PERMANENTLY destroyed after 3h47m full-power deployment", codename: "RAIN SILENCE", duration: "3 hours 47 minutes", significance: "The São Paulo precedent. Proved permanent dampening was possible. Broke Agent Zhao." },
      { date: "2012", location: "Cairo, Egypt", target: "Archaeological frequency emission", outcome: "Success — emission ceased after 47-minute deployment", codename: "PHARAOH'S REST" },
      { date: "2017", location: "Rural Japan", target: "Frequency cluster (3 individuals)", outcome: "Partial — one subject resisted (later identified as possible Harmonic)", codename: "STILL GARDEN" },
      { date: "2025", location: "[REDACTED — Eastern US]", target: "Signal Decay (5 subjects)", outcome: "[SEE CURRENT OPERATIONS FILE]", codename: "FINAL MEASURE" }
    ],

    authorization_requirements: {
      standard_deployment: "Division Commander approval for Category 1-3 targets",
      enhanced_deployment: "Directorate Council majority vote for Category 4-5 targets",
      deployment_against_the_five: "Foundation Seven Rests vote + Directorate 9/12 supermajority",
      current_authorization: "Approved 5-2 by The Seven Rests, April 2, 2025"
    },

    current_status: "OPERATIONAL — being transported to deployment position near Signal Decay's next public performance"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IV. SURVEILLANCE PROFILES OF THE FIVE
  // ═══════════════════════════════════════════════════════════════════════════

  the_five: {

    overview: {
      origin: "Identified August 14, 1996 by Looking Glass Array-1 — highest-confidence probability projection in operational history (94.3%)",
      designation: "HARMONIC CONVERGENCE scenario — OMEGA classification",
      birth_window: "Five subjects born within 18-month window, 2001-2002, exactly as projected",
      surveillance: "Under continuous Legacy surveillance since birth",
      current_threat: "Approaching activation threshold. They have not yet met one another. This must remain the case.",
      directorate_belief: "The Directorate does not believe we survive Stage 3 (all Five performing together).",
      convergence_meaning: "The Looking Glass system itself could not project what happens after convergence — not because the future is uncertain, but because the system cannot process a reality-state that different from current parameters."
    },

    subject_crimson: {
      legacy_file: "FVH-OMEGA-001",
      signal_decay_identity: "Mira Chen",
      codename: "CRIMSON",
      birth_year: 2001,
      current_category: "4 (approaching 5)",
      instrument: "Guitar (electric/acoustic)",
      frequency_signature: "Primary resonance with secondary harmonics at intervals suggesting non-standard overtone series",
      first_emission: "Age 6 (earliest of The Five)",
      handler_assigned: "Age 7 (cover: neighborhood guitar instructor)",
      threat_assessment: "EXTREME — furthest along the activation curve",
      estimated_time_to_category_5: "8-14 months",

      surveillance_milestones: [
        "Age 5: Began guitar — prodigy-level proficiency by age 9",
        "Age 14: Demonstrated Dampener awareness — reports 'the air feeling thick' in high-Dampener zones",
        "2019: Guitar amplifier produced overtones at frequencies equipment should be physically incapable of producing",
        "2022: Frequency emissions became self-sustaining — no longer require active musical engagement",
        "2023: Reported hearing 'music that isn't there' — spontaneous Second Octave perception"
      ],

      observed_anomalies: [
        "Electronic disruption in proximity (phones, amplifiers, streetlights)",
        "Self-sustaining coherent emissions without active playing",
        "Dampener zone awareness since age 14",
        "Spontaneous Second Octave auditory perception"
      ],

      recommended_action: "Increased Dampener saturation in residential zone, pharmaceutical intervention (LEG-FLAT-7 via medical channel), immediate intervention if subject begins seeking other musicians with unusual capabilities",
      blind_spots: "Chromatic Sight ability not fully documented — Legacy sensors measure electromagnetic output but cannot detect the visual-spectrum frequency perception CRIMSON experiences. They know she sees 'things' but categorize it as standard synesthesia."
    },

    subject_indigo: {
      legacy_file: "FVH-OMEGA-002",
      signal_decay_identity: "Jude Okafor-Achebe",
      codename: "INDIGO",
      birth_year: 2001,
      current_category: "4",
      instrument: "Bass guitar",
      frequency_signature: "Sub-harmonic dominant — primary resonance below standard human hearing range; body-felt rather than heard",
      first_emission: "Age 8",
      handler_assigned: "Age 9 (cover: school music teacher)",
      threat_assessment: "HIGH — may serve as gravitational center for convergence",
      estimated_time_to_category_5: "12-18 months",

      surveillance_milestones: [
        "Age 7: Began bass — unusual choice, reported being 'drawn to the low sounds'",
        "2017: Seismographic station 14 km away recorded micro-tremors correlating with practice schedule",
        "2021: Emissions began affecting FREQ-NET sensors within 200m — degraded signal coherence",
        "2023: Local gravity measurements show 0.0004% variance within 50m of subject"
      ],

      observed_anomalies: [
        "Sub-20 Hz emissions measurable by seismographic equipment",
        "Recovery personnel report feeling 'heavy' in prolonged proximity",
        "Localized gravity variance (0.0004%)",
        "Dampener infrastructure degradation within 200m"
      ],

      recommended_action: "Relocation to high-Dampener zone. Operation VOID to destabilize living situation.",
      blind_spots: "INDIGO's Deep Resonance capability — the ability to generate frequencies that produce physical warmth and emotional grounding — is categorized by Legacy as 'sub-audible environmental disturbance' rather than recognized as a healing/stabilizing function. They measure the effect but misunderstand the intent.",
      handler_note: "INDIGO is quiet, introverted, deeply connected to instrument. The danger is not that INDIGO will seek others — the danger is that INDIGO's sub-audible signature may act as a BEACON, drawing other FVH subjects without anyone consciously intending it."
    },

    subject_violet: {
      legacy_file: "FVH-OMEGA-003",
      signal_decay_identity: "Zara Okafor-Achebe",
      codename: "VIOLET",
      birth_year: 2002,
      current_category: "4",
      instrument: "Keyboards/synthesizer",
      frequency_signature: "Full-spectrum — produces coherent emissions across unusually wide frequency range simultaneously",
      first_emission: "Age 9",
      handler_assigned: "Age 10 (cover: after-school program coordinator)",
      threat_assessment: "EXTREME (INTENTIONAL DISCOVERY RISK) — most likely to consciously seek out The Five",
      estimated_time_to_category_5: "6-10 months (accelerating)",

      surveillance_milestones: [
        "Age 4: Began piano; age 12 transitioned to electronic synthesis — described acoustic piano as 'too limited'",
        "2018: Built custom synthesizer patch producing measurable Dampener interference — intuitively, without knowing the Dampener exists",
        "2020: Posted online about 'feeling like reality has a ceiling' — flagged by ECHO-WATCH, removed within 40 minutes",
        "2022: Binaural beat experiments inadvertently producing frequencies close to own resonant signature",
        "2023: Emissions display 'scanning' pattern — cycling through multiple frequencies rapidly. Division DANCE theorizes unconscious search for complementary frequencies."
      ],

      observed_anomalies: [
        "Intuitive Dampener interference creation without knowledge of Dampener existence",
        "Frequency 'scanning' behavior — unconsciously searching for complementary signals",
        "Three near-self-discoveries diverted by Handler intervention",
        "Full-spectrum coherent emission — extremely rare profile"
      ],

      recommended_action: "Internet activity monitoring upgraded to REAL-TIME. All frequency-related search queries intercepted and redirected. Handler recommends escalation to RECOVERY within 6 months.",
      blind_spots: "VIOLET's cosmic consciousness (she arrived CONSCIOUS, unlike the others). Legacy classifies her as a highly intelligent FVH subject who has independently researched frequency phenomena — they do NOT know she is a fully aware cosmic being who chose to incarnate on Earth. Their models treat her as human-plus-mutation, not as a deliberate cosmic intelligence.",
      handler_note: "Subject has come close to self-discovery three times — each time diverted. However, subject is highly intelligent and increasingly resistant to redirection."
    },

    subject_amber: {
      legacy_file: "FVH-OMEGA-004",
      signal_decay_identity: "Oren Malik",
      codename: "AMBER (also designated ECHO-5 in temporal research files)",
      birth_year: 2001,
      current_category: "3 (approaching 4)",
      instrument: "Drums/percussion",
      frequency_signature: "Pulse-dominant — emissions in rhythmic bursts, not continuous wave. Temporal anomalies documented.",
      first_emission: "Age 11 (latest of The Five — initially suspected false positive)",
      handler_assigned: "Age 12 (cover: youth sports coach)",
      threat_assessment: "MODERATE individually / CRITICAL as catalyst",
      estimated_time_to_category_5: "18-24 months (requires collaboration)",

      surveillance_milestones: [
        "Age 6: Began drums — internal clock precision at ±0.3ms (human norm: ±10-20ms)",
        "2019: Atomic clock drift of 0.00003% during practice sessions — correcting when subject stops",
        "2021: Reported 'time feeling different' during intense practice — moments lasting 'forever,' hours passing 'in seconds'",
        "2022: Activation plateau — emissions stalled. Division DANCE hypothesizes collaboration required.",
        "2023: Joined local band — frequency emissions immediately increased 340% upon first rehearsal"
      ],

      observed_anomalies: [
        "Temporal micro-anomalies: atomic clock drift during practice",
        "Superhuman rhythmic precision (±0.3ms)",
        "Pulsed rather than continuous emissions — unique temporal modality",
        "340% emission spike upon first collaborative music experience"
      ],

      recommended_action: "Destabilization of current band through Operation VOID. Prevent subject from joining any new musical groups.",
      blind_spots: "AMBER's temporal manipulation capability is the most dangerous blind spot. Dr. Chen warned that the Dampener creates a frequency void that might make temporal manipulation EASIER — but this was overruled. Legacy does not have instrumentation to measure temporal abilities directly; they detect only secondary effects (clock drift).",
      handler_note: "AMBER may be the keystone of Convergence: the one who makes the other four's frequencies lock together. If AMBER plays with even one other member of The Five, temporal effects may accelerate everyone's activation dramatically.",
      chen_warning: "If one of our current subjects possesses temporal capabilities (Subject ECHO-5 shows indicators), the Dampener may be ineffective. Or worse."
    },

    subject_silver: {
      legacy_file: "FVH-OMEGA-005",
      signal_decay_identity: "Kael Carter/Voss",
      codename: "SILVER",
      birth_year: 2002,
      current_category: "4 (may have already achieved 5)",
      instrument: "Voice",
      frequency_signature: "ANOMALOUS — does not match any documented FVH profile. Emissions appear to exist partially outside measurable electromagnetic spectrum.",
      first_emission: "Age 7",
      handler_assigned: "Age 8 (cover: family friend/neighbor)",
      threat_assessment: "EXTREME (PUBLIC EXPOSURE RISK) — the single most urgent threat",
      estimated_time_to_category_5: "May already be achieved. Awaiting updated measurement.",

      surveillance_milestones: [
        "No instrumental training — frequency emissions originate from VOICE",
        "2016: School choir performance — 3 previously baseline audience members exhibited temporary elevated sensitivity lasting 4-6 hours",
        "2019: Stopped singing publicly — felt it 'does something to people,' uncomfortable with responsibility",
        "2022: Private singing detected via smart home devices. Overtone structures impossible for single human voice — consistent with 32+ simultaneous frequencies",
        "2023: Resumed public performances. Audience members report feeling 'transformed.' Three attendees achieved Category 1 activation."
      ],

      observed_anomalies: [
        "Emissions partially outside measurable electromagnetic spectrum",
        "32+ simultaneous harmonic frequencies from single voice (physically impossible without amplification)",
        "Audience activation capability — triggered temporary Category 1 in previously baseline humans",
        "Plants near subject exhibit accelerated growth",
        "Electronic equipment occasionally IMPROVING function (unique among all FVH subjects)"
      ],

      recommended_action: "IMMEDIATE RECOVERY. Recovery authorization pending. A large public performance alone could compromise the entire suppression architecture locally.",
      blind_spots: "SILVER's decade of deliberate silence (ages 8-18) was misread by Legacy as successful suppression. They credited their Dampener saturation and Handler influence. In reality, Kael chose silence himself because of the Brendan incident — he suppressed his own power out of fear of hurting people. Legacy's instruments cannot distinguish between externally suppressed and self-suppressed states.",
      handler_note: "SILVER's voice is not merely frequency-variant — it is frequency-GENERATIVE. SILVER doesn't just emit; SILVER AWAKENS.",
      convergence_warning: "If SILVER and CRIMSON perform together — the most powerful emitter and the most powerful activator — the result is unpredictable but potentially catastrophic."
    },

    convergence_prevention: {
      active_measures: [
        "Geographic separation — all five in different cities. Operation VOID prepared to destabilize any who relocate toward another.",
        "Digital isolation — online presences monitored real-time. Any cross-contact triggers immediate digital intervention.",
        "Social network manipulation — friend recommendations, algorithms modified to prevent cross-discovery.",
        "Musical ecosystem control — Operation STATIC suppresses any emerging reputation that might attract another subject's attention.",
        "Dampener targeting — 200-400% above standard levels in each subject's residential zone.",
        "Handler coordination — weekly briefings, immediate alert for Convergence-seeking behavior."
      ],

      contingency_stages: {
        stage_1: {
          trigger: "Contact made, no joint musical activity",
          response: "Immediate Directorate escalation. GREEN and RED teams mobilized. Recovery on most isolated subject first. Maximum VOID on remainder."
        },
        stage_2: {
          trigger: "Two or more subjects perform music together",
          response: "OMEGA ALERT. All Division assets worldwide redirected. Lethal force authorized. Dampener maximized. Civilian evacuation prep (cover: chemical spill).",
          warning: "If two Category 5 subjects perform together, local Dampener failure is CERTAIN within 3 minutes."
        },
        stage_3: {
          trigger: "All Five together, performing",
          response: "No operational protocol exists. Local reality-state alteration. Cascade activation of ALL latent FVH subjects within propagation radius (possibly continental). Permanent Dampener failure.",
          directorate_assessment: "The Directorate does not believe we survive Stage 3."
        }
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // V. HISTORICAL OPERATIONS
  // ═══════════════════════════════════════════════════════════════════════════

  historical_operations: [
    {
      codename: "OPERATION HARMONY",
      date: "1944",
      location: "Naples, Italy",
      objective: "Recover the Magenta Bell before the Germans. OSS mission led by Colonel Thomas Vought.",
      team: "6 OSS operatives",
      outcome: "Success — Bell transported to US military control over 9 days.",
      casualties: "0 deaths, but 2 developed synesthesia, 1 began speaking an unknown language, Colonel Vought experienced 'temporal folding'",
      lessons_learned: "Proximity to NHI artifacts produces unpredictable neurological effects. All future artifact handling requires distance protocols.",
      significance: "Founding event. The men who survived the crossing became the first Legacy members."
    },
    {
      codename: "ROSWELL RECOVERY",
      date: "July 1947",
      location: "Roswell, New Mexico",
      objective: "Recover crashed craft and biological entities.",
      outcome: "Success — craft recovered, 2 bodies recovered, plus a device that produced shared memory experiences in all within 50 meters.",
      casualties: "None during recovery. Device exposure caused lasting psychological changes in recovery team.",
      lessons_learned: "NHI technology operates through frequency/consciousness interface, not mechanical principles. This realization shaped all future research.",
      significance: "Led directly to the founding charter of The Legacy, August 3, 1947."
    },
    {
      codename: "LEG-63-TERMINUS",
      date: "November 14, 1963",
      location: "Washington, DC / Dallas, TX",
      objective: "Presidential Containment Action — eliminate executive-level threat to operational security",
      outcome: "Threat eliminated. Organization renamed 'The Legacy.'",
      classification: "LEGACY-OMEGA",
      significance: "The most classified event in Legacy history. Ensured no sitting president would ever again threaten Legacy secrecy."
    },
    {
      codename: "PALE MOTH",
      date: "1993",
      location: "Rural Montana",
      objective: "Neutralize unidentified frequency source (second field deployment of tactical Dampener)",
      outcome: "Source neutralized — geological in origin, not NHI. BUT: sensors detected massive void signature approaching the Dampener field. The Silence was attracted.",
      casualties: "None — deployment cut short before contact.",
      lessons_learned: "The Dampener creates conditions that attract The Silence. This established the hard 4-hour deployment limit. All subsequent deployments incorporate Silence-monitoring protocols.",
      significance: "First documented near-encounter with The Silence during Dampener operations."
    },
    {
      codename: "DESERT VEIL",
      date: "1997",
      location: "Phoenix, Arizona",
      objective: "Suppress public frequency exposure during the Phoenix Lights event.",
      outcome: "Partial success — reduced public frequency exposure by approximately 60%.",
      lessons_learned: "Large-scale public frequency events cannot be fully suppressed. Media control (Operation GRAY NOISE) is essential for managing the remainder.",
      significance: "First large-scale public-facing Dampener deployment."
    },
    {
      codename: "RAIN SILENCE",
      date: "2008",
      location: "São Paulo, Brazil",
      objective: "Permanently neutralize Ana Lucia Dos Santos — awakening Resonant who could modulate weather patterns through vocalization.",
      duration: "3 hours, 47 minutes at full power, close range",
      outcome: "Success — subject's abilities PERMANENTLY destroyed. She was singing to the rain when the Dampener field enveloped her. She described it as 'going deaf in a sense I didn't know existed.'",
      casualties: "0 physical — 1 permanent capability destruction. Ana Lucia works as a music teacher now. She still sings. It doesn't do anything anymore.",
      lessons_learned: "Full-duration close-range deployment can sever the frequency connection permanently. This became the operational template for The Five.",
      significance: "The São Paulo precedent. Proved permanent dampening was possible. Agent Zhao was assigned post-neutralization assessment in 2020 — it broke her.",
      zhao_note: "What we did to Ana Lucia is what we're planning to do to five more people. I'm not sure I can be part of this again."
    },
    {
      codename: "PHARAOH'S REST",
      date: "2012",
      location: "Cairo, Egypt",
      objective: "Silence an archaeological frequency emission from a newly discovered chamber.",
      outcome: "Success — emission ceased after 47-minute deployment.",
      lessons_learned: "Ancient structures can contain dormant frequency sources. Archaeological monitoring protocols established."
    },
    {
      codename: "STILL GARDEN",
      date: "2017",
      location: "Rural Japan",
      objective: "Contain a frequency cluster of 3 individuals exhibiting coordinated emissions.",
      outcome: "Partial — two subjects neutralized, one RESISTED the Dampener. Later identified as a possible Harmonic.",
      casualties: "1 subject escaped — current whereabouts monitored.",
      lessons_learned: "Harmonic-class subjects may be inherently resistant to Dampener technology. Tactical doctrine updated for Category 4+ encounters."
    },
    {
      codename: "BRIGHT MORNING",
      date: "1987",
      location: "S-4, Bay 4",
      objective: "Protocol Gamma test — Category 4 test subject given access to the Utah Frequency Craft under containment conditions.",
      outcome: "CONTAINMENT FAILURE — subject achieved craft interface and nearly achieved flight.",
      casualties: "Subject terminated. Craft returned to dormant state. Facility section required reconstruction.",
      lessons_learned: "FVH subjects MUST NOT be given access to functional craft under any circumstances. Bay 4 permanently sealed.",
      significance: "Led to the permanent sealing of Bay 4 with ADA-9 array."
    },
    {
      codename: "PALE MORNING",
      date: "2014",
      location: "S-4, Level 4-3",
      objective: "Protocol Gamma test on juvenile subject.",
      outcome: "CONTAINMENT FAILURE — one Handler's premature approach caused subject to achieve Category 3 through emotional distress, activating two additional latent subjects within the facility.",
      casualties: "3 cascade activations. All subjects eventually contained.",
      lessons_learned: "Premature intervention on juvenile subjects causes stress-triggered activation. Handler minimum cover period extended to 3 years.",
      significance: "Established the 3-year minimum Handler cover period for juvenile subjects."
    },
    {
      codename: "THE DISCORD",
      date: "1978",
      location: "S-4 / Washington, DC",
      objective: "Prevent Third Rest Harold Briggs from weaponizing the Magenta Bell's frequency signature for Cold War operations.",
      outcome: "Foundation denied Briggs access by 6-0 vote. Briggs attempted unauthorized activation of Artifact 7-C using CIA connections.",
      casualties: "Briggs killed by uncontrolled frequency discharge — self-inflicted through unauthorized artifact activation.",
      lessons_learned: "The Foundation doesn't assassinate its own — the technology does it for them when handled by those who don't understand it."
    },
    {
      codename: "FORTY-THREE SECONDS",
      date: "1981",
      location: "The Archive, Vault 6",
      objective: "Research activation of crystalline object from 1976 Brazil event.",
      outcome: "Object activated for 43 seconds. All 31 present experienced being observed by something vast, ancient, and utterly indifferent.",
      casualties: "3 resignations, 1 psychiatric hospitalization. Vault 6 permanently sealed.",
      significance: "Established the existence of something beyond The Silence — something that doesn't even have a classification."
    }
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // VI. THREAT CLASSIFICATIONS
  // ═══════════════════════════════════════════════════════════════════════════

  threat_classifications: {

    fvh_categories: [
      {
        category: 1,
        name: "DORMANT",
        threshold: ">0.003 T at Compton resonance, no coherent output",
        behavioral_indicators: "Unusual music sensitivity, vague 'wrongness' in Dampener areas, vivid geometric dreams",
        threat_level: "NEGLIGIBLE",
        protocol: "LOG AND MONITOR. Watch List. Annual re-evaluation.",
        prevalence: "~1 in 300,000",
        dampener_effectiveness: "100%"
      },
      {
        category: 2,
        name: "LATENT",
        threshold: ">0.01 T, intermittent coherent emissions triggered by emotion/music",
        behavioral_indicators: "Electronic interference, animal reactions, hearing inaudible sounds, can activate frequency-responsive materials in lab",
        threat_level: "LOW",
        protocol: "ACTIVE SURVEILLANCE. Handler assignment. Increased Dampener exposure.",
        prevalence: "~1 in 1,200,000",
        dampener_effectiveness: "95%+"
      },
      {
        category: 3,
        name: "EMERGENT",
        threshold: ">0.05 T sustained; confirmed Second Octave interaction",
        behavioral_indicators: "Reality perturbation (displaced objects, temporal anomalies, 'missing time'), surveillance awareness developing, Dampener resistance developing",
        threat_level: "MODERATE",
        protocol: "RECOVERY RECOMMENDED. Isolation from population. Cover story required. Family assessed.",
        prevalence: "~1 in 50,000,000",
        dampener_effectiveness: "80-90%"
      },
      {
        category: 4,
        name: "ACTIVE",
        threshold: ">0.5 T continuous; can interface with recovered technology; local metric distortion",
        behavioral_indicators: "Phase-visibility of Second Octave, perceives Hollow Ones, activates nearby latent subjects, Dampener FULLY INEFFECTIVE",
        threat_level: "HIGH",
        protocol: "IMMEDIATE RECOVERY. Division DIXIE tactical team. Lethal force authorized. Witnesses processed per Suppression Protocol 7.",
        prevalence: "~1 in 500,000,000 (estimated 14-16 living individuals worldwide)",
        dampener_effectiveness: "40-60%"
      },
      {
        category: 5,
        name: "RESONANT",
        threshold: ">5.0 T estimated; exceeds measurement capability; alters local reality",
        behavioral_indicators: "Reality becomes 'thin' nearby, consensus physics unreliable, temporal displacement, telekinesis, communication with non-physical intelligences, forced activation of nearby FVH",
        threat_level: "EXTREME / EXISTENTIAL",
        protocol: "OMEGA CONTAINMENT. Directorate authorization required. Termination authorized as last resort — WARNING: may trigger uncontrolled frequency release (ref: Tunguska Theory, 1908).",
        prevalence: "Historically 1-2 per generation. Currently: FIVE CONFIRMED.",
        dampener_effectiveness: "MINIMAL — requires prolonged saturation, may still fail"
      },
      {
        category: 6,
        name: "HARMONIC CONVERGENCE (THEORETICAL)",
        threshold: "Multiple Category 5 subjects in resonant synchronization",
        behavioral_indicators: "UNKNOWN — has never been documented",
        threat_level: "BEYOND ASSESSMENT",
        protocol: "PREVENTION IS THE ONLY PROTOCOL. The Five must never operate in proximity.",
        prevalence: "One potential occurrence identified: The Five.",
        dampener_effectiveness: "TOTAL FAILURE assumed within 3 minutes"
      }
    ],

    current_five_classifications: {
      CRIMSON_mira: { current: "Category 4 (approaching 5)", assessed_timeline: "8-14 months to Category 5" },
      INDIGO_jude: { current: "Category 4", assessed_timeline: "12-18 months to Category 5" },
      VIOLET_zara: { current: "Category 4", assessed_timeline: "6-10 months to Category 5 (accelerating)" },
      AMBER_oren: { current: "Category 3 (approaching 4)", assessed_timeline: "18-24 months to Category 5 (requires collaboration)" },
      SILVER_kael: { current: "Category 4 (may already be 5)", assessed_timeline: "POSSIBLY ALREADY ACHIEVED. Awaiting updated measurement." }
    },

    activation_mechanism: {
      primary_trigger: "Sustained emotional-acoustic engagement — specifically music practice",
      statistics: {
        played_instrument: "97% of confirmed Category 3+ subjects",
        began_before_age_8: "94%",
        activation_at_10000_hours: "89% after ~10,000 hours of emotionally engaged practice",
        proximity_activation: "11% activated through proximity to another active FVH"
      },
      biological_mechanism: "Sustained acoustic-emotional engagement causes permanent molecular restructuring of neural tissue — neurons develop natural phase-conjugate mirror properties, becoming biological amplifiers of vacuum energy.",
      legacy_countermeasure: "The Dampener specifically saturates frequencies associated with emotional musical engagement. Legacy maintains covert influence over music industry distribution, venue acoustics, recording technology, and broadcast parameters.",
      core_doctrine: "The goal is not to eliminate music. The goal is to ensure music never achieves coherence."
    },

    escalation_triggers: [
      "Any FVH subject crossing from Category 3 to Category 4",
      "Any two Category 4+ subjects within 100 km of each other",
      "Any public frequency event witnessed by >50 civilians",
      "Dampener coverage drop below 80% in any metropolitan area",
      "Any social media post about frequency phenomena reaching >10,000 views before removal",
      "Any of The Five demonstrating awareness of another",
      "Vault 6 readings changing by any amount (currently shifting since Signal Decay's first performance)"
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VII. THE SILENCE
  // ═══════════════════════════════════════════════════════════════════════════

  the_silence: {

    overview: {
      nature: "The Silence exists in the spaces between sound. It lives in the gaps. It is not an entity in the traditional sense — it is an ABSENCE that has become aware.",
      domain: "Zero Octave — the boundary between First and Second Octaves. The space between moments, the gap between heartbeats, the silence between sounds.",
      age: "Billions of years. Has existed as long as there have been gaps in frequency.",
      motivation: "Suppression of frequency awakening. A dormant soul stirring is, to The Silence, an existential threat in miniature — not because one human is dangerous, but because awakening is CONTAGIOUS.",
      perception: "Can perceive First Octave by living in the spaces within it, but cannot reach into First Octave without a physical medium."
    },

    what_legacy_knows: {
      documented_encounters: [
        "1993 Montana Dampener deployment — massive void signature approached the field, retreated when device shut down",
        "1981 Vault 6 incident — the crystalline object may have connected to something even beyond The Silence",
        "Multiple sensor readings during Dampener operations showing void signatures at the edge of detection range",
        "75+ years of MIB/Hollow One reports cross-referenced with zero-frequency event logs"
      ],
      assessed_capabilities: [
        "Deploys Hollow Ones (zero-frequency puppeted human bodies) to suppress witness micro-activations",
        "Creates harmonic null fields through triangulated Hollow One deployment",
        "Can suppress human curiosity and motivation without the target realizing anything was taken",
        "Has been conducting parallel suppression operations around The Five for 20+ years — visiting anyone who noticed something unusual about them"
      ],
      fear_assessment: "The Silence is not merely an obstacle — it is the reason The Legacy exists. If The Silence didn't hunt civilizations that broadcast before they're ready, the Legacy's mission would be 'help humanity prepare' rather than 'keep humanity silent.'",
      chen_model: "A full Dampener deployment against five active Resonants would create a silence signature approximately 400 times larger than any previous deployment. At that scale, we would attract not The Silence's attention but its PRESENCE."
    },

    what_legacy_fears: [
      "That using the Dampener against The Five will attract The Silence to the deployment site",
      "That The Silence has been monitoring The Five independently — and may act if Legacy fails to contain them",
      "That The Silence and the Dampener operate on the same principle — both create frequency voids. Legacy may have been unwittingly serving The Silence's purpose for 40 years.",
      "That if The Five achieve Convergence, the signal they produce may be loud enough to draw The Silence's full manifestation — not suppression squads, but its TOTALITY",
      "That Vault 6 readings shifting after Signal Decay's first performance means something even The Silence fears is paying attention"
    ],

    hollow_ones: {
      description: "Human bodies at zero frequency. The Silence's physical medium for interacting with First Octave.",
      creation: "When a human dies 'wrong' — when the soul/frequency pattern gets stuck in the zero-frequency gap between octaves during death transition. The Silence colonizes the trapped pattern, drains it to zero.",
      appearance: "Always THREE. Black suits. Pale waxy skin. No eyebrows/eyelashes. Lips barely move. Dark eyes that don't reflect light. Outdated slang. Can't use common objects properly.",
      vehicle: "Black Cadillacs, often decades-old models in factory-new condition at exactly ambient temperature.",
      deployment_protocol: {
        trigger: "Human witnesses a frequency event and experiences micro-activation",
        positioning: "Three Hollow Ones, equilateral triangle, 8-12 feet apart",
        effect: "Harmonic null — stable zero-frequency standing wave. Suppression field radius ~40 feet. Specifically targets micro-activated signatures while leaving baseline biology intact.",
        duration: "7-23 minutes per visit",
        demand: "Always the same: 'Stop looking into this.' No threats. Just the statement.",
        aftermath: "Witnesses obey. Completely. Cannot explain why. The significance drains away. The curiosity becomes inert."
      },
      physics_of_three: "One body = weak suppression (6-foot range, minutes). Two bodies = DANGEROUS (creates anti-null spikes that can AWAKEN rather than suppress). Three bodies = stable harmonic null with no interference artifacts.",
      why_they_seem_inhuman: "The Silence has observed humans for millennia but never operated a body. It mimics what it has observed — outcomes without processes. A very good forgery by someone who has studied paintings but never held a brush.",
      legacy_classification: "NON-LEGACY SUPPRESSION. Cross-referenced: 'This was not us.' — Archivist Chen, confirming Legacy did not deploy the MIB visitors."
    },

    the_silence_around_the_five: {
      description: "For twenty years, The Silence built a wall — not around the five, but around everyone NEAR them.",
      mechanism: "Anyone who noticed something unusual about any of the five children was visited. Three men. Black suits. 'Stop looking into this.' Every single time, it worked.",
      why_not_directly: "Zero-frequency near a major harmonic signature doesn't dampen it — it PROVOKES it. Like a magnet near iron filings. The Silence cannot approach The Five directly without activating them.",
      documented_visits: {
        around_kael: [
          "Troy Williams (2016) — noticed Kael's 'shimmer' during basketball. Visited at AutoZone. Deleted his notes about Kael.",
          "Ms. Patricia Goodwin (2017) — English teacher, thesis on Kael's 'command presence.' Visited with physical copies of her email-only draft. Changed thesis direction.",
          "Jasmine Torres (2018) — girlfriend, felt 'words in her head' during a kiss. Visited at her school locker. Tore diary pages out."
        ],
        around_mira: [
          "Dr. Robert Chen (2014) — cognitive psychologist testing Mira's anomalous color perception. Visited. Closed the study."
        ]
      }
    },

    threat_protocols: {
      dampener_silence_interaction: "During any Dampener deployment, Silence-monitoring sensors must be active. If void signature detected approaching, deployment must be terminated immediately regardless of mission status.",
      four_hour_rule: "Hard limit on all Dampener deployments. Not because of overheating (cover story). Because 4 hours is the longest they've operated without attracting The Silence.",
      containment_subjects_and_silence: "FVH subjects in long-term containment must never be brought to zero frequency. Sustained zero-frequency states in proximity to human consciousness risk creating conditions that allow The Silence to manifest.",
      convergence_and_silence: "The greatest fear: full Dampener deployment against all Five simultaneously would create a void signature large enough to attract The Silence's physical presence. Not attention — PRESENCE. This scenario has no protocol."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VIII. COMMUNICATION PROTOCOLS
  // ═══════════════════════════════════════════════════════════════════════════

  communication_protocols: {

    classification_system: {
      levels: [
        { marking: "UNCLASSIFIED", access: "Public", description: "No Legacy content" },
        { marking: "CONFIDENTIAL", access: "Government employees (standard)", description: "Peripheral Legacy reference" },
        { marking: "SECRET", access: "Military/IC with need-to-know", description: "Legacy-adjacent operations" },
        { marking: "TOP SECRET", access: "TS-cleared with specific access", description: "References to Legacy mission area" },
        { marking: "TS/LEGACY BASIC", access: "All Legacy employees (~2,400)", description: "Legacy administrative content" },
        { marking: "TS/LEGACY ENHANCED", access: "Division personnel + above (~1,800)", description: "Division operational details" },
        { marking: "TS/LEGACY COMPARTMENTED", access: "Designated personnel (~600)", description: "Cross-division intelligence" },
        { marking: "TS/LEGACY EYES ONLY — HARMONIC", access: "HARMONIC cleared (~120)", description: "Full operational picture, The Five case files" },
        { marking: "TS/LEGACY EYES ONLY — OMEGA", access: "Directorate + designated", description: "Existential threat material" }
      ],
      key_note: "All information relating to Legacy operations carries a security level 2 POINTS ABOVE Top Secret.",
      document_format: "CLASSIFIED BY: LEG-DO/77019. DECLASSIFY ON: EXEMPT CATEGORY — PERMANENT DENIAL."
    },

    proword_system: {
      description: "Legacy divisions and major programs are referenced by PROWORD in all communications. Never use actual names in signals traffic.",
      divisions: {
        DANCE: "Division DANCE — theoretical research, Looking Glass",
        RISK: "Division RISK — medical, pharmaceutical, Handlers",
        MIDNIGHT: "Division MIDNIGHT — Dampener, communications, SIGINT",
        CETUS: "Division CETUS — non-human entities, craft",
        DIXIE: "Division DIXIE — tactical, security, field ops"
      },
      programs: {
        PYRAMID: "S-4 Facility (also: landing clearance call-sign: 'PYRAMID PYRAMID PYRAMID')",
        CRADLE: "Early detection program — children, schools, genetics",
        STATIC: "Music industry suppression — broadcast, recording, live venue",
        GRAY_NOISE: "Media/information control — academic, press, online",
        SECOND_HARVEST: "FVH recruitment program — turned subjects as operatives",
        SILENCE: "Witness management protocol — memory, credibility, monitoring",
        LOOKING_GLASS: "Probability projection technology — future prediction",
        GALILEO: "Craft propulsion research — S-4 bays, frequency mechanics",
        SIDEKICK: "Frequency weapons platform (OMEGA classified)",
        GLOCKE: "Dampener development program (historical)",
        VOID: "Destabilization operations against FVH subjects"
      },
      pharmaceuticals: {
        QUIET: "Containment sedation (LEG-QUIET series, grades 1-9)",
        DREAMLESS: "Sleep suppression — prevents frequency dreams",
        FLAT: "Long-term dampening pharmaceutical",
        FORGET: "Memory significance reduction — witness processing",
        FINAL: "Terminal pharmaceutical (LEG-FINAL-1)"
      }
    },

    witness_management_silence_protocol: {
      acronym: "S.I.L.E.N.C.E.",
      steps: {
        S: "SECURE — Witnesses detained immediately. No communications.",
        I: "INTERROGATE — Determine extent of knowledge and exposure duration.",
        L: "LEVEL — Assess witness for latent frequency sensitivity (exposure may have triggered activation).",
        E: "ERASE — Deploy memory-disruption protocol (LEG-FORGET-3). Does not erase memory — reduces significance. Subject retains factual recall but loses emotional weight and motivation to discuss.",
        N: "NARRATE — Provide cover story. Alternative narrative in mundane terms.",
        C: "CLEAR — Release under ongoing monitoring for 90-day assessment period.",
        E2: "EVALUATE — Final determination: returns to normal life or escalated for further processing."
      }
    },

    cover_stories: {
      approved_alternatives: [
        { scenario: "Subject disappearance", cover: "Runaway teen / mental health crisis / family dispute" },
        { scenario: "Frequency event with witnesses", cover: "Gas leak causing hallucinations / electrical fault / 'mass hysteria'" },
        { scenario: "Visible craft phase-in", cover: "Weather balloon / drone testing / CGI hoax" },
        { scenario: "Temporal anomaly", cover: "Equipment malfunction / group intoxication" },
        { scenario: "Subject death during recovery", cover: "Suicide / drug overdose / accident" },
        { scenario: "Large-scale frequency event", cover: "Industrial chemical spill (area evacuated)" }
      ],
      doctrine: "The most desirable public response is that nothing unusual has occurred. Mental health crises, drug abuse, and domestic disputes are acceptable alternatives for explaining sudden behavioral changes or disappearance of FVH subjects.",
      discrediting: "If witnesses have already contacted the press, assert they have misinterpreted natural events, are victims of hysteria or hallucinations, or are perpetrators of hoaxes. Social media character assassination protocols (Operation STATIC, Division DIXIE) are pre-authorized."
    },

    facility_access_protocols: {
      s4_entry: {
        transport: "Unmarked 737-200 aircraft (white exterior, single red stripe), call designation 'JANET'",
        landing_clearance: "Call-sign: 'PYRAMID PYRAMID PYRAMID'",
        personnel_entry: "Armed guards → optical scan → voice print → full decontamination (shower, weighing, frequency baseline measurement)",
        minimum_clearance: "Q-clearance for facility access; HARMONIC clearance for Levels 4-3 through 4-5"
      },
      interior_navigation: {
        blue_lines: "Standard personnel movement corridor. All non-Directorate staff must remain within blue lines.",
        red_lines: "Exterior boundary. Security personnel every 30 meters have STANDING SHOOT-TO-KILL ORDERS for anyone breaching the red line without Directorate authorization.",
        level_markings: "Red circle containing level number in red text (e.g., '4-1')",
        hallway_features: "Deliberately poorly lit. Gray walls with 8-inch-thick orange stripe running diagonally. Security camera domes every 10 feet."
      },
      security_tiers: [
        { tier: "GREEN", access: "Legacy employment + background verification", example: "Regional offices" },
        { tier: "BLUE", access: "Q-clearance + LEGACY BASIC", example: "Blue Lab, Building 21" },
        { tier: "AMBER", access: "LEGACY ENHANCED + Division Commander auth", example: "S-4 Levels 4-1 to 4-2" },
        { tier: "RED", access: "HARMONIC + Directorate auth", example: "S-4 Levels 4-3 to 4-5, Looking Glass" },
        { tier: "BLACK", access: "Directorate Council ONLY", example: "S-4 Bay 4 interior, Level 4-5 chambers" }
      ]
    },

    emergency_protocols: {
      dampener_coverage_drop: {
        below_80_percent: "ALERT YELLOW — Division MIDNIGHT emergency response within 2 hours",
        below_50_percent_with_fvh: "ALERT RED — All Division assets mobilized",
        total_failure: "ALERT OMEGA — Directorate authorization for martial law under Contingency Plan LEG-2024-OMEGA (has never occurred)"
      },
      convergence_alert_levels: {
        contact_only: "STAGE 1 — Immediate Directorate escalation, GREEN/RED teams mobilized",
        joint_performance: "STAGE 2 — OMEGA ALERT, all Division assets worldwide redirected, lethal force authorized",
        all_five_performing: "STAGE 3 — No protocol exists. Contingency Plan LEG-2024-OMEGA assumes current reality-state is no longer maintainable."
      },
      reporting_format: {
        field_reports: "Filed to Handler's Division operations desk. Weekly unless ALERT conditions require daily.",
        frequency_events: "Immediate FLASH traffic to Regional Operations Chief + FREQ-NET Central",
        the_five_incidents: "Immediate OMEGA-FLASH to Directorate Council + OMEGA-COORDINATOR",
        standard_header: "Classification / Date-Time Group / Originator / Subject / Body / Assessment / Recommended Action"
      }
    },

    coded_language_examples: {
      ops_manual_terminology: {
        "harmonic": "Colloquial term for frequency-variant human (FVH)",
        "the music stopped": "Subject's abilities have been permanently neutralized",
        "concert preparation": "Dampener deployment imminent",
        "venue security": "Pre-deployment surveillance of target location",
        "sound check": "Dampener calibration and testing",
        "the audience is leaving": "Witnesses being processed under SILENCE protocol",
        "final measure": "Dampener deployment or Foundation member voluntary resignation",
        "the bell is ringing": "Magenta Bell readings have changed — possible NHI activity",
        "quiet room": "Maximum isolation containment for Category 4-5 subjects",
        "second harvest": "Recruitment of turned FVH subject as operative"
      },
      zhao_surveillance_terminology: {
        "Subject ALPHA-1": "Kael (SILVER)",
        "ambient readings nominal": "No unusual frequency activity detected",
        "harmonic convergence indicators": "Signs that subjects may be discovering each other",
        "frequency enhancement beginning": "Subject's abilities are activating/growing",
        "pattern analysis suggests": "Zhao's professional cover for her intuitive assessment"
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // IX. S-4 FACILITY & CONTAINMENT
  // ═══════════════════════════════════════════════════════════════════════════

  s4_facility: {
    designation: "S-4 (also: 'The Dark Side of the Moon')",
    location: "Papoose Lake, Nevada — 12 miles south of Area 51",
    original_purpose: "Biological weapons laboratory (1950s)",
    current_purpose: "Legacy primary research, containment, and operations center",

    hangar_bays: [
      { bay: 1, contents: "1947 Roswell Craft (P-24) — covered by gray tarp", status: "STORED", code: "FC-002-6-A" },
      { bay: 2, contents: "Alien Reproduction Vehicle (ARV-1) — Legacy-built copy", status: "OPERATIONAL (restricted)", code: "FC-002-6-R" },
      { bay: 3, contents: "1933 Magenta Crash Craft — partial reconstruction", status: "ACTIVE RESEARCH", code: "FC-002-6-M" },
      { bay: 4, contents: "1958 Utah Frequency Craft — fully functional", status: "EXTREME HAZARD (sealed)", code: "FC-002-6-U", note: "Surrounded by ADA-9 (most powerful Dampener array). No physical access door — entry requires cutting through sealed bulkhead." },
      { bay: 5, contents: "Die Glocke Assembly — original (non-functional)", status: "HISTORICAL ARCHIVE", code: "SOA-103-G" },
      { bay: 6, contents: "Dampener Prototype Array (Mark I-IV)", status: "DECOMMISSIONED DISPLAY", code: "SOA-103-D" },
      { bay: 7, contents: "Unknown craft — black tarp, origins disputed (1953 Kingman?)", status: "UNDER REVIEW", code: "FC-303-N-K" },
      { bay: 8, contents: "Black isosceles triangle craft ('The Licorice Drop')", status: "STORED", code: "FC-002-6-T" },
      { bay: 9, contents: "RESERVED — CONTINGENCY (designated for Five-related recovery)", status: "PREPARED / EMPTY", code: "FC-002-6-OMEGA" }
    ],

    containment_levels: {
      "Level 4-3 (Standard)": { cells: 24, current_occupancy: 17, category: "2-3" },
      "Level 4-4 (Enhanced)": { cells: 8, current_occupancy: 5, category: "3-4" },
      "Level 4-5 (Maximum — 'The Quiet Floor')": { cells: 3, current_occupancy: 2, category: "4-5", access: "Directorate-only", monitoring: "Hardened analog systems with optical data transmission — no electronics permitted" }
    },

    total_fvh_in_containment: 47,
    total_fvh_under_active_surveillance: 230,
    total_fvh_on_watch_list: 1400,
    note: "No contained subject has EVER been released to the general population."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // X. THE OCTAVE MODEL — REALITY STRUCTURE
  // ═══════════════════════════════════════════════════════════════════════════

  octave_model: {
    first_octave: {
      name: "Physical/Material",
      description: "Observable reality as understood by baseline human consciousness. Governed by entropic thermodynamics, forward time-flow, scattering electromagnetic fields. 'Normal' reality."
    },
    second_octave: {
      name: "Frequency/Vibrational",
      description: "Parallel reality layer operating at the negentropic level — between atomic nuclei. Information and energy flow is convergent rather than divergent. Objects and entities exist as frequency patterns. Craft originate from or transit through this layer."
    },
    third_octave: {
      name: "Consciousness/Temporal",
      description: "Theoretical. Exists in the time-domain rather than space-domain. Mind and consciousness operate primarily here. Looking Glass technology achieves partial interface."
    },
    zero_frequency_layer: {
      name: "The boundary between Octaves",
      description: "Not a 'place' but a transition state where energy has not yet 'decided' to manifest as matter. The Zero-Point Field exists here. Energy density: 10^108 joules per cubic centimeter. FVH subjects access this naturally. The Silence inhabits this space."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // XI. ORIGIN THEORIES
  // ═══════════════════════════════════════════════════════════════════════════

  origin_theories: {
    theory_a: {
      name: "Natural Mutation",
      preferred_by: "Division RISK",
      claim: "FVH sensitivity is a natural evolutionary mutation occurring at predictable statistical intervals. Recessive, polygenic, requires environmental triggers.",
      implication: "Manageable through population-level suppression."
    },
    theory_b: {
      name: "Deliberate Engineering",
      preferred_by: "Division MIDNIGHT",
      claim: "FVH sensitivity is the result of deliberate genetic intervention by Second Octave intelligences. EBE-1 communicated: '2,000 years ago our ancestors planted a human creature on Earth.'",
      implication: "Suppression may be temporary — the programming will reassert."
    },
    theory_c: {
      name: "Suppressed Baseline",
      preferred_by: "Division DANCE",
      claim: "FVH sensitivity represents the BASELINE human condition. 'Normal' humans are the variants — their frequency has been suppressed by an unknown mechanism predating Legacy operations.",
      implication: "The Dampener may be reinforcing an existing suppression rather than creating a new one.",
      status: "Considered DANGEROUS. Proponents monitored."
    },
    directorate_position: "Regardless of origin, operational protocols remain identical. FVH subjects are to be identified, monitored, and contained. The question of 'why' is subordinate to 'what do we do about it.'"
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // XII. METADATA
  // ═══════════════════════════════════════════════════════════════════════════

  meta: {
    engine_version: "1.0.0",
    canon_sources: [
      "THE_LEGACY.md (Foundation Briefing Packet 7-ALPHA)",
      "LEGACY_OPERATIONS_MANUAL_LOP01.md (LOP-01-2024, Rev 7.3)",
      "THE_MEN_IN_BLACK.md (Hollow One intelligence)",
      "ZHAO_FULL_ARC.md (Agent Zhao character arc)",
      "ASHLEY_COLE_FULL_ARC.md (Resonant informant arc)"
    ],
    classification: "TS/LEGACY EYES ONLY — HARMONIC CLEARANCE LEVEL",
    document_control: "LCN-0047",
    effective_date: "1 March 2024",
    revision: "7.3",
    issuer: "THE LEGACY DIRECTORATE, OPERATIONS COMMAND",
    prepared_by: "DIVISION MIDNIGHT / OFFICE OF FREQUENCY INTELLIGENCE",
    usage: "Referenced by Signal Decay PWA for lore-accurate content, NPC dialogue, interactive Legacy-themed features, and narrative consistency enforcement.",
    warning: "This document contains compartmentalized information essential to the continuity of human civilization as currently understood. The official position of all participating governments is that no organization designated 'The Legacy' exists."
  }
};

// Export for use in PWA modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LEGACY_OPERATIONS_ENGINE;
}
