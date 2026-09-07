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

// ═══════════════════════════════════════════════════════════════════════════
// REAL-WORLD GROUNDING ENHANCEMENT — 7 September 2026
// ───────────────────────────────────────────────────────────────────────────
// ADDITIVE PASS: authentic intelligence-agency tradecraft, surveillance method
// names, classified-document formatting language, covert-ops jargon, and
// historical black-program parallels grounded in real declassified sources
// (CIA/NSA/MI6/Mossad structure, MKUltra, Stargate, COINTELPRO, Mockingbird,
// Church Committee, Snowden/Ellsberg/Manning whistleblower literature).
//
// Source: reference/INTELLIGENCE_OPERATIONS_RESEARCH.md (unclassified/OSINT).
// NOTHING WAS REMOVED. All original canon fields are intact. Three new
// top-level sections were APPENDED before METADATA:
//   XII.  real_world_tradecraft_notes
//   XIII. classification_format_reference
//   XIV.  historical_program_parallels
// Existing METADATA renumbered to XV (comment label only).
//
// In-world note: all real-agency terminology below is included as the craft
// vocabulary The Legacy inherited from the OSS/CIA officers among its founders.
// The horror is that it is ordinary. The bureaucracy is the weapon.
// ═══════════════════════════════════════════════════════════════════════════

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
      signal_decay_identity: "Zara Kovač-Achebe",
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
      signal_decay_identity: "Kael Voss/Voss",
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
  // XII. REAL-WORLD TRADECRAFT NOTES  [ADDED 2026-09-07 — real-world grounding]
  // ───────────────────────────────────────────────────────────────────────────
  // Authentic intelligence-agency terminology and method names, mapped to how
  // The Legacy actually uses them in the field. Grounds Legacy operations in
  // real OSINT-documented tradecraft so NPC dialogue and case files read true.
  // ═══════════════════════════════════════════════════════════════════════════

  real_world_tradecraft_notes: {

    doctrine_statement: "The Legacy's operational vocabulary is inherited, not invented. Its founders were OSS and early-CIA officers; the craft carried over intact. When a Handler talks shop, they use the same words a real case officer would. Only the targets are different.",

    // ─────────────────────────────────────────────────────────────────────────
    // AGENCY STRUCTURE PARALLELS — how Legacy org maps to real services
    // ─────────────────────────────────────────────────────────────────────────
    agency_structure_parallels: {
      description: "The Legacy's internal architecture mirrors real intelligence services. Understanding the parallels clarifies who holds what authority.",
      cia_directorate_model: {
        note: "The CIA runs five semi-autonomous Directorates (Operations, Analysis, Science & Technology, Digital Innovation, Support). Legacy's Divisions (DANCE, RISK, MIDNIGHT, CETUS, DIXIE) are the direct analogue — each a semi-autonomous pillar under the Directorate Council.",
        directorate_of_operations: "Real DO = clandestine collection + covert action, organized into geographic Divisions running Stations under a Chief of Station (COS) who directs Case Officers handling Assets. Legacy analogue: DIXIE (tactical/field ops) + the Handler network.",
        special_activities_center: "The DO's SAC handles paramilitary/covert action. Legacy analogue: DIVISION DIXIE GREEN/RED teams.",
        directorate_of_science_technology: "Real DS&T builds technical collection systems; historically designated 'MK' in the cryptonym system (MKUltra was a DS&T project). Legacy analogue: DIVISION MIDNIGHT (Dampener, SIGINT) + DANCE (Looking Glass)."
      },
      nsa_alphanumeric_model: {
        note: "The NSA designates its org with alphanumeric codes (S=Signals Intelligence Directorate, T=Technology, etc.), sub-organized S1/S2/S3 with lettered desks (S2A South Asia, S2H Russia, S2I Counter-Terrorism). This is the bureaucratic naming convention Legacy imitates in signals traffic.",
        legacy_usage: "A memo routed through 'Section S2-THETA' or 'Division T4-MERIDIAN' reads as authentic institutional compartmentalization. FREQ-NET Central is Legacy's SIGINT Directorate analogue (compare NSA S3 Data Acquisition: cryptanalysis, Global Access Operations, Special Source Operations).",
        real_sid_subunits: ["S31 — Cryptanalysis and Exploitation Services (code-breaking)", "S33 — Global Access Operations (physical/technical intercept)", "S35 — Special Source Operations (domestic collection partnerships with telecoms)"]
      },
      mi6_sis_model: {
        note: "Britain's SIS is headed by 'C' (after first chief Mansfield Cumming, who signed in green ink — tradition maintained today). Officers use numbered designations (e.g. 'P5'), work under Foreign Office diplomatic cover, and denied the service's existence until the Intelligence Services Act 1994.",
        legacy_usage: "The single-initial chief tradition ('C') is echoed in Legacy's musical-rest naming of The Seven — a personal cipher for the top seat. The 'officially denied to exist' posture is Legacy's default public stance (see meta.warning)."
      },
      mossad_model: {
        note: "Mossad is the closest real analogue to The Legacy: small, elite, deniable, council-led, extreme compartmentalization. Collections division (Tzomet) runs HUMINT via case officers called 'katsas.' Metsada handles special ops including the ~40-operative Kidon assassination unit. LAP runs psychological warfare/disinformation.",
        sayanim_parallel: "Mossad's 'sayanim' — thousands of volunteer civilian helpers abroad who provide safe houses, vehicles, and expertise without doing espionage — parallels Legacy's peripheral-asset network: people who support operations without ever seeing the full picture.",
        dual_controller_tradecraft: "In major cities Mossad keeps two separate senior controllers (Collections vs. liaison) so that if one is compromised the other stays clean. Legacy applies the same firewall between Handler operations (RISK) and field neutralization (DIXIE)."
      },
      oversight_body_parallels: {
        note: "The Seven functions like a hybrid of the NSC Principals Committee (authorizes covert action via written Presidential Findings, briefed only to the congressional 'Gang of Eight') and the Foreign Intelligence Surveillance Court (FISC) — a secret 11-judge court that historically approved ~99.97% of surveillance requests.",
        inherent_tension: "The FISC's near-automatic approval rate models exactly how an oversight body becomes captured by what it oversees. The Seven both authorize operations AND provide the only oversight of them — the same structural conflict. This is why Chen's and Holloway's dissents matter: genuine oversight friction is rare and institutionally discouraged.",
        real_bodies: ["NSC Principals Committee (8-12 senior officials)", "SSCI — Senate Select Committee on Intelligence (15 members)", "HPSCI — House Permanent Select Committee (22 members)", "The Gang of Eight — most restricted briefing tier", "IC Inspector General — receives whistleblower complaints through classified channels"]
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // COMPARTMENTALIZATION — need-to-know mechanics
    // ─────────────────────────────────────────────────────────────────────────
    compartmentalization: {
      core_principle: "Clearance is necessary but NOT sufficient. Even with full clearance you only access what your specific duties require — you also need 'need-to-know.' The most common sentence in the intelligence world is 'You're not read in for that.'",
      real_mechanics: {
        sci: "Sensitive Compartmented Information — intelligence from sensitive sources/methods, divided into compartments protected by codewords (e.g. TALENT-KEYHOLE for satellite imagery, COMINT, HCS for HUMINT source protection, SI for special signals intelligence).",
        sap: "Special Access Program — even more restricted than SCI. Acknowledged SAPs (existence known, details classified), Unacknowledged SAPs / USAPs ('black programs' — existence itself classified), and Waived SAPs (exempt from normal congressional reporting — briefed only to the Gang of Eight).",
        read_in_out: "Gaining access ('read in') requires formal briefing and a compartment-specific NDA. Losing it ('read out') requires formal debriefing.",
        bigot_list: "A 'bigot list' names everyone read into a compartment. Term originates from WWII 'To Gibraltar' movement orders (TOBIG reversed → BIGOT).",
        codewords: "Compartment codewords are drawn from approved lists and are deliberately MEANINGLESS — chosen so they can't be associated with the program. Changed periodically."
      },
      legacy_application: "Legacy uses a layered system where even senior personnel lack the full picture. Members of The Seven each control specific chambers/compartments. A field operative running surveillance may have no idea their target is a Resonant — they just follow their compartment's protocol. This is how HARMONIC CENSUS operatives were kept from realizing what The Five actually are.",
      real_world_failure_mode: "The 9/11 Commission found excessive compartmentalization stopped the CIA and FBI from sharing dots-connecting information. A declassified CIA critique admitted the system 'often does not protect truly sensitive information and it fails to ensure appropriate dissemination.' Legacy's brittleness (per Holloway: '80 years selecting for fear') is the same institutional pathology.",
      legacy_chamber_terms: {
        note: "Legacy substitutes its own vocabulary over the real primitives (see classification_format_reference.legacy_terminology_map).",
        chamber: "= compartment (a restricted information category)",
        inducted: "= read in",
        severed: "= read out",
        access_roster: "= bigot list"
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SURVEILLANCE METHODS — real named techniques
    // ─────────────────────────────────────────────────────────────────────────
    surveillance_methods: {
      physical_surveillance_humint: {
        team_structure: "Real surveillance uses teams of 6-12 operatives rotating in shifts so no single person holds visual contact long enough to be burned. Legacy HARMONIC CENSUS teams follow the same rotation.",
        foot_surveillance_roles: {
          eyeball: "The operative with direct visual on the target ('I have eyeball').",
          backup: "Second operative in visual range, ready to take over.",
          trigger: "Operative positioned to alert the team the instant the target moves.",
          floating: "Operatives off-target but positioned to pick up if eyeball loses contact.",
          loose_tail: "Following at a distance — low detection risk, higher loss risk.",
          tight_tail: "Close follow — higher detection risk, used when loss is unacceptable.",
          stroller: "Operative disguised as a casual pedestrian.",
          vehicle_box: "Multiple vehicles surrounding the target in traffic (lead, parallel, follow cars)."
        },
        rabbit: "A surveillance target who is moving (real tradecraft term). Used in Legacy field chatter for a Resonant on the move."
      },
      surveillance_detection_route_sdr: {
        definition: "An SDR is a deliberate path taken to determine whether one is being followed — run for 1-2 hours before an operational meeting. The destination is never approached until the operative is confident they are 'black' (clean of surveillance).",
        techniques: [
          "Choke points — narrow passages that force a follower to expose themselves",
          "U-turns / reversals — walking back the way you came to see who follows",
          "Stop-and-look — pausing at a shop window using reflections to observe behind",
          "Staircase transitions — entering a building and immediately changing floors",
          "Timed pauses — sitting on a bench a set duration, noting who lingers"
        ],
        zhao_relevance: "As a turned Tier-1 SIGINT operative, Zhao knows every SDR technique — she trained on them. Her detection of counter-surveillance awareness in a target (or her own use of an SDR while fugitive) is professionally grounded, not intuition."
      },
      dry_cleaning: {
        definition: "The process of shaking a tail ('going black').",
        techniques: [
          "Entering a crowded venue (theater, department store, subway) and leaving via a different exit",
          "Switching transport modes (car -> subway -> taxi -> foot)",
          "Using natural cover — entering a building you have a legitimate reason to visit",
          "Pre-positioned vehicle switches in parking garages",
          "Disguise changes — reversible jacket, adding/removing a hat, changing gait"
        ]
      },
      sigint: {
        note: "Signals intelligence is Zhao's home discipline and DIVISION MIDNIGHT's core mission. Real subtypes below map onto Legacy's FREQ-NET.",
        comint: "Communications intelligence — intercepted calls, emails, radio.",
        elint: "Electronic intelligence — radar emissions, weapons-system signatures.",
        fisint: "Foreign Instrumentation Signals Intelligence — telemetry from tests.",
        metadata_vs_content: "Metadata (who called whom, when, how long, from where) requires less authorization than content interception. NSA's Section 215 collected metadata on virtually all US phone calls. FVH monitoring uses the same distinction.",
        real_programs_referenced: {
          PRISM: "NSA collection directly from tech-company servers (Google, Facebook, Apple, Microsoft, Yahoo).",
          upstream_collection: "Tapping fiber-optic cables at internet exchange points.",
          IMSI_catcher_stingray: "Portable fake cell tower forcing nearby phones to connect, revealing location/metadata.",
          TEMPEST: "Capturing electromagnetic emanations from screens/keyboards at a distance.",
          key_loggers: "Hardware/software recording every keystroke."
        },
        legacy_note: "FREQ-NET is Legacy's fusion of SIGINT + MASINT (Measurement and Signature Intelligence — the real discipline for detecting nuclear detonations and unique technical signatures). Detecting a Resonant's frequency emission is functionally MASINT."
      },
      pattern_of_life: {
        definition: "A Pattern-of-Life (POL) profile documents a target so thoroughly that ANY deviation from baseline stands out. This is the actual analytic method behind Legacy's surveillance dossiers on The Five.",
        standard_elements: ["Daily routine (wake, commute, arrival/departure, lunch)", "Frequency analysis (which locations, how often, which days)", "Social network mapping (who they meet, where, how long)", "Communication patterns (call frequency, time of day, duration, recipients)", "Financial patterns (spending, unusual transactions, cash vs card)", "Travel patterns (regular vs irregular trips)", "Baseline behavior (what is 'normal' — deviations flagged)", "Known associates (family/professional/social/unknown)"],
        deviation_detection: "The goal is a baseline so complete that a new unidentified contact, a changed commute, or a dropped routine triggers a flag. Legacy adds a special category: 'anomalous deviations' — behavioral changes that correlate with frequency-activation events.",
        the_five_relevance: "The 'convergence indicators' in the surveillance profiles ARE deviation-detection outputs: The Five beginning to seek out other musicians registers as an anomalous change from their established POL baselines."
      },
      dead_drops_and_agent_comms: {
        note: "Classic asset-communication tradecraft — relevant to how Zhao, once turned, would contact The Five without detection, and how Legacy Handlers communicate with turned FVH assets (Operation SECOND HARVEST).",
        dead_drop: "A concealed location (hollow tree, loose brick, magnetic container behind a dumpster) for leaving material to be collected later. Signaled by a pre-arranged visual mark (chalk mark, gum on a lamppost, potted plant position). Separate clearance and abort signals confirm retrieval or warn away.",
        brush_pass: "A brief choreographed exchange of a small object (thumb drive, folded paper) between two people in motion, without stopping or speaking. Occurs in crowded public spaces.",
        live_drop: "A direct meeting between officer and source (vs. dead drop).",
        digital_dead_drop: "Shared email account where messages are saved as DRAFTS and never sent — both parties log in, read, delete. Also steganography (data hidden in image files) and disappearing-message apps.",
        one_time_pad: "The only provably unbreakable encryption — two identical pads of random numbers, each page used once and destroyed. No pattern to break. Plausible method for The Seven's most sensitive council traffic.",
        commo_plan: "The agreed schedule and method of contact between an officer and a source (real term: 'commo plan').",
        parole: "A pre-arranged verbal recognition signal between agents."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // COVERT-OPS OPERATIONAL JARGON — the working vocabulary
    // ─────────────────────────────────────────────────────────────────────────
    operational_jargon: {
      critical_distinctions: {
        officer_vs_agent: "An OFFICER is a trained employee of the service (e.g. Zhao, a Handler). An AGENT / ASSET is a recruited civilian (usually turned) who provides intelligence. Officers HANDLE agents; officers are never called 'agents' in real parlance. Note: Legacy uses 'Agent Zhao' as a rank-title, but by real convention she is an OFFICER. A turned Resonant (Operation SECOND HARVEST) is properly an ASSET.",
        clandestine_vs_covert: "CLANDESTINE = the activity itself is secret (espionage — no one knows it's happening). COVERT = the sponsor is secret (the activity may be visible, but who's behind it is hidden). Dampener deployments are covert; surveillance of The Five is clandestine.",
        cover_for_status_vs_action: "Cover for STATUS = the overall false identity (Zhao's 'freelance music journalist'). Cover for ACTION = a plausible reason to be in a specific place doing a specific thing (attending a Signal Decay show 'for a review')."
      },
      glossary: {
        access_agent: "An agent who provides access to targets/locations rather than intelligence itself.",
        agent_of_influence: "An agent used to covertly shape policy or opinion (compare Operation GRAY NOISE media control).",
        backstop: "Supporting elements that confirm a cover story if checked (phone number, employer, references).",
        black_bag_job: "Clandestine break-in to plant bugs or photograph documents.",
        blown: "A cover identity or operation that has been discovered/compromised.",
        bona_fides: "Proof of genuine identity or affiliation.",
        bridge_agent: "An intermediary connecting a case officer to a source, adding insulation.",
        burned: "An operative whose cover is compromised and can no longer work in that identity.",
        cut_out: "An intermediary who transfers information between two parties who cannot safely meet directly.",
        cobbler: "A specialist who forges passports and identity documents.",
        cold_approach: "Recruiting an agent with no prior relationship.",
        damage_assessment: "Evaluation of what has been compromised after a breach (Legacy: 'Breach Protocol').",
        dangle: "An operative deliberately offered to an adversary service as bait to become a double agent.",
        denied_area: "A region where operating conditions are extremely hostile to intelligence work.",
        developmental: "A potential agent being cultivated but not yet recruited.",
        exfiltration: "Clandestine removal of a person from a hostile area.",
        false_flag: "An operation designed to appear as conducted by another party.",
        going_native: "When an operative adopts the perspective of the people they're targeting — precisely Zhao's arc as she comes to see The Five as 'a beginning,' not a threat.",
        honey_trap: "Using romantic/sexual enticement to recruit or compromise a target (operatives: 'raven' male, 'swallow' female).",
        legend: "A comprehensive false biographical history for an undercover operative.",
        moscow_rules: "Informal tradecraft principles for operating in extremely hostile counterintelligence environments ('assume everyone is under opposition control').",
        noc: "Non-Official Cover — an officer with no diplomatic cover and thus no immunity if caught. Zhao's music-journalist identity is NOC.",
        official_cover: "An officer under diplomatic cover (embassy) — has immunity.",
        opsec: "Operational Security — practices preventing adversary discovery of your operations.",
        pitch: "The moment a potential agent is formally asked to spy.",
        pocket_litter: "Small personal items (receipts, ticket stubs) that support a cover identity.",
        proprietary: "A company secretly owned/run by the service (compare Pacific Rim Holdings as Legacy's financial cover; real example: Air America was a CIA proprietary).",
        roll_up: "The systematic compromise and arrest of an intelligence network.",
        safe_house: "A secure secret location for meetings, debriefings, or hiding.",
        sheep_dipping: "Disguising military personnel as civilians.",
        sigact: "Significant Activity — any event of intelligence significance.",
        sleeper_agent: "An agent planted and kept dormant until activated.",
        the_take: "The intelligence obtained from a source or operation.",
        tradecraft: "The methods and techniques of espionage — the whole discipline.",
        walk_in: "A volunteer who approaches a service to offer information (Legacy: 'Emergent' — a civilian who discovers anomalous activity and makes contact).",
        wet_work: "Assassination operations (from Russian 'mokroye delo,' 'wet affair'). Compare Legacy's LEG-FINAL-1 and LEG-63-TERMINUS."
      },
      cryptonym_system: {
        note: "CIA operations/agents use cryptonyms: a two-letter DIGRAPH (geographic/functional area) + an arbitrary WORD deliberately chosen NOT to suggest the subject, sometimes split by a slash (ZR/RIFLE). Legacy's OMEGA/ALPHA subject designators and division PROWORDS follow this logic.",
        real_digraphs: {"AE": "Soviet Union (1960s)", "AM": "Cuba", "MK": "CIA Technical Services Division (MKUltra)", "MH": "Worldwide operations", "ZR": "Worldwide special projects", "KU": "CIA itself (KUBARK)"},
        famous_cryptonyms: {"KUBARK": "the CIA itself in internal documents", "TRIGON": "Aleksandr Ogorodnik, Soviet diplomat/CIA spy", "HERO": "Col. Oleg Penkovsky, key Cold War asset", "AMTHUG": "Fidel Castro"},
        naming_conventions: "NSA uses two-word combos from approved lists (PRISM, XKEYSCORE, BOUNDLESS INFORMANT; SSO programs FAIRVIEW, STORMBREW, BLARNEY). DoD uses the NICKA system: first word from a command's approved list + random second word (DESERT STORM, NEPTUNE SPEAR). Legacy operation names (HARMONY, PALE MOTH, RAIN SILENCE) follow the two-word evocative-but-uninformative pattern.",
        legacy_practice: "Personnel refer to subjects by designator/cryptonym, never by name, in signals traffic (see communication_protocols.proword_system). CRIMSON, INDIGO, VIOLET, etc. ARE Legacy cryptonyms for The Five."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // WHISTLEBLOWER PSYCHOLOGY — grounding Zhao's arc
    // ─────────────────────────────────────────────────────────────────────────
    whistleblower_psychology: {
      note: "Zhao's turn is written to the documented psychology of real intelligence whistleblowers. She is not a cynic or rebel — she is an idealist who discovers the organization's actual behavior diverges from its stated values.",
      alford_two_systems: "Psychologist C. Frederick Alford (a decade studying whistleblowers) identifies the key moment: 'I wasn't against the system, I was the system! I just didn't realize that there were two systems.' The official system (rules, oversight, mission) and the real one (power, self-protection, institutional survival). Whistleblowers suffer a 'delayed loss of innocence.'",
      disillusionment_arc: [
        "1. IDENTIFICATION — deeply loyal, internalizes the mission, sees self AS the mission. (Zhao: 'I joined The Legacy because they showed me the truth.')",
        "2. AWARENESS — a specific instance of wrongdoing that cannot be rationalized. Typically a single revelatory moment. (Zhao: the Sao Paulo / Ana Lucia post-neutralization assessment; then hearing Signal Decay's music.)",
        "3. INTERNAL STRUGGLE — tries to fix it through channels; can last years.",
        "4. BETRAYAL — channels fail or produce retaliation; the 'two systems' become visible.",
        "5. DECISION POINT — accept the corruption or expose it and accept the consequences. Most accept. Whistleblowers are the ones who 'couldn't live with themselves anymore without doing something.'",
        "6. ACTION — information is released. (Zhao's 2:17 AM warning to Mira Chen.)",
        "7. AFTERMATH — social isolation, career destruction, persecution; the organization pathologizes them."
      ],
      moral_injury: "Military-psychology term: damage from perpetrating, witnessing, or failing to prevent acts that transgress deeply held moral beliefs. Zhao's Sao Paulo assessment is a textbook moral-injury event.",
      cant_unknow_problem: "Once an operative discovers something deeply wrong they cannot return to unknowing; the knowledge compels action because continuing to participate while knowing creates intolerable cognitive dissonance. (Zhao: 'Because I used to think silence was protection. I don't anymore.')",
      social_identity_disruption: "In intelligence, compartmentalization limits outside relationships, so the professional community IS the whistleblower's whole social world — and it turns on them entirely. Alford: 'What it takes to become a whistleblower... isn't what it takes to survive as one.'",
      paradox_of_screening: "Organizations cannot screen out potential whistleblowers because the traits of a GOOD officer (loyalty, conscientiousness, belief in the mission, moral commitment) are the SAME traits that make someone blow the whistle when the mission is betrayed. Holloway's recruitment of Zhao 'despite atypical results' is this paradox in action.",
      real_case_parallels: {
        ellsberg: "Daniel Ellsberg (Pentagon Papers, 1971): RAND analyst, TS clearance, ex-Marine, pro-government until he read the classified history and saw systematic lies about Vietnam. Copied 7,000 pages; tried Senators first; then the NYT. Concluded most of the thousands with access simply couldn't imagine — chose not to think about — the consequences of exposure.",
        snowden: "Edward Snowden (2013): NSA contractor who revealed PRISM/upstream/metadata collection. Highly deliberate — contacted journalists months ahead, curated documents to avoid endangering agents. 'I don't want to live in a world where everything I do and say is recorded.' Understood the consequences and acted anyway.",
        manning: "Chelsea Manning (2010): Army analyst, released 750,000 documents incl. the 'Collateral Murder' video. Downloaded to CDs disguised as music discs. Sentenced to 35 years; served 7 before commutation.",
        zhao_mapping: "Zhao = Ellsberg's pro-institution idealism + Snowden's technical fluency and deliberate curation (she chose Mira Chen specifically because Chromatic Sight would verify her sincerity) + Manning's frontline moral-injury trigger."
      },
      organizational_response_nuts_and_sluts: {
        note: "The organizational response to whistleblowing follows a fixed escalation — this is how The Legacy will treat Zhao once she turns.",
        sequence: ["1. Ignore the complaint.", "2. Discredit the messenger — psychiatric evaluation, personal attacks, accusations of disloyalty ('nuts and sluts').", "3. Prosecute under security laws.", "4. Invoke national security to seal proceedings and limit public knowledge."],
        legacy_toolkit: "Legacy adds capabilities real agencies lack: LEG-FORGET memory-significance reduction, LEG-FINAL termination, and the S.I.L.E.N.C.E. witness protocol. But the escalation logic is identical to the real 'nuts and sluts' pattern."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CONTAINMENT & COVER-UP MECHANICS — the bureaucracy is the weapon
    // ─────────────────────────────────────────────────────────────────────────
    containment_mechanics: {
      doctrine: "Real cover-ups are less dramatic than fiction suggests. They rely on institutional inertia, plausible deniability, legal architecture, and bureaucratic language — not black helicopters. The Legacy doesn't need a conspiracy; it needs a functioning bureaucracy with the right classification authorities. The horror is how ORDINARY it is.",
      classification_as_containment: "The simplest containment mechanism is classification itself. Classify at TOP SECRET//SAP with waived reporting and access shrinks to a handful of people, with oversight limited to the Gang of Eight. This is why Legacy material sits 'two points above Top Secret.'",
      damage_assessment_breach_protocol: {
        note: "Legacy's 'Breach Protocol' is a real damage-assessment process. Steps when classified information is compromised:",
        steps: ["1. Initial notification through security channels", "2. Assemble a damage-assessment team (counterintelligence officers, subject-matter experts, legal counsel, security officers)", "3. Scope determination — what was compromised, who had access, potential damage", "4. Source protection — are human sources endangered?", "5. Containment — prevent further dissemination", "6. Remediation — change compromised methods, relocate endangered personnel", "7. Investigation — how did it happen, who is responsible"],
        zhao_application: "Zhao's warning to The Five triggers exactly this: a damage-assessment team convenes, her Tier-1 access is mapped for scope, and her knowledge of Dampener capabilities and The Five profiles marks the compromise as catastrophic."
      },
      personnel_quiet_measures: {
        note: "Documented tactics (COINTELPRO + intelligence history) for neutralizing problematic personnel/witnesses — the real menu behind Legacy's handling of dissenters:",
        tactics: ["Medical pathologization — psychiatric referral creating a record to discredit testimony", "Career destruction — meaningless transfers, negative evaluations, denied promotion", "Social isolation — colleagues instructed to limit contact, breeding paranoia", "Legal pressure — investigation of unrelated infractions to create leverage", "Gaslighting — denying events, altering records, moving/destroying evidence", "Financial pressure — cutting pay/benefits, imposing legal costs"],
        formal_quiet_measures: ["Administrative leave pending 'investigation'", "Repeated polygraph targeting to create stress and elicit admissions", "Compartment reduction — systematically cutting access until the person is effectively out", "'Read out' from programs with an implication of unreliability"]
      },
      evidence_suppression: {
        document_control: "Classified documents are serialized — each copy numbered and tracked (see the 'Copy 003 of 007' convention). Classified waste goes in 'burn bags' for destruction; destruction is logged on signed 'destruction certificates'; periodic inventories detect missing documents.",
        bulk_destruction_precedent: "When programs terminate, bulk-destruction orders can erase entire archives. CIA Director Richard Helms ordered ALL MKUltra files destroyed in 1973; ~20,000 pages survived only because they were misfiled in financial records and later surfaced via FOIA. Legacy's 'Dissolution queue' is the same mechanism — and the same vulnerability (misfiled records survive).",
        digital: "Classified networks (SIPRNet, JWICS) log and audit heavily; USB ports are often disabled; print jobs are logged. Yet Manning wrote data to music-labeled CDs and Snowden used a thumb drive — technical controls are imperfect. Any Legacy leak arc should exploit exactly this gap."
      },
      incident_site_protocols: {
        note: "The bureaucratic structure of physical containment is consistent whether the incident is biological, nuclear, or anomalous:",
        steps: ["1. Initial cordon — physical perimeter", "2. Access control — only authorized personnel inside", "3. Evidence preservation — document before moving anything", "4. Environmental monitoring — sample air/water/soil", "5. Personnel decontamination — process everyone who was inside", "6. Chain of custody — track every item from collection to storage", "7. After-action report"],
        nuclear_codewords_parallel: "DoE/DoD use event codewords Legacy echoes: BROKEN ARROW (nuclear weapon accident), BENT SPEAR (significant incident), EMPTY QUIVER (weapon seizure/theft/loss). Legacy's EVENT CLASS ALPHA-through-OMEGA scheme is the same idea for anomalous phenomena."
      },
      concealment_toolkit: {
        institutional_inertia: "Most secrets are kept not by active conspiracy but by the system's default toward secrecy — classification is automatic, declassification requires effort, and the culture of silence is internalized.",
        plausible_deniability: "Operations are structured so seniors can truthfully deny knowledge of specifics: verbal orders leave no paper trail; cut-outs insulate decision-makers; a program-within-a-program (acknowledged SAP hiding an unacknowledged sub-program).",
        legal_architecture: {
          state_secrets_privilege: "Government blocks disclosure in court by asserting national security.",
          cipa: "Classified Information Procedures Act — controls classified material in criminal proceedings.",
          glomar_response: "'We can neither confirm nor deny the existence of the requested records' — named after the CIA salvage ship Glomar Explorer. Legacy standard denial: 'No record exists.'",
          foia_exemptions: "National-security exemptions allow indefinite withholding."
        },
        bureaucratic_language_as_concealment: "The most effective cover-up tool is bureaucratic language itself. A line like 'the committee determined the anomalous readings were consistent with equipment malfunction; no further action required; close file' reveals nothing while creating a paper trail that says the issue was addressed. This is the register EVERY Legacy official record should adopt."
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // XIII. CLASSIFICATION FORMAT REFERENCE  [ADDED 2026-09-07 — real-world grounding]
  // ───────────────────────────────────────────────────────────────────────────
  // Authentic classified-document formatting language so any in-game Legacy
  // document (case files, IIRs, memos) can be rendered with real banner lines,
  // portion markings, authority blocks, and the source-reliability matrix.
  // ═══════════════════════════════════════════════════════════════════════════

  classification_format_reference: {

    doctrine: "A Legacy document should read exactly like a routine intelligence report — the horror is in the CONTENT, not the tone. Use banner lines, portion markings, hedging language, passive construction, numbered paragraphs, and the source-reliability matrix.",

    banner_lines: {
      description: "Every classified document begins AND ends with a banner line — the overall classification, at top and bottom of every page. Components are separated by DOUBLE SLASHES: [LEVEL]//[COMPARTMENT]//[DISSEMINATION].",
      structure: ["1. Classification level: CONFIDENTIAL, SECRET, or TOP SECRET", "2. Compartment markings (SCI, SAP codewords) if any", "3. Dissemination controls (who can see this)"],
      real_examples: ["TOP SECRET//SCI//HCS-P//NOFORN", "SECRET//SI//TK//REL TO USA, FVEY", "TOP SECRET//SAR-BP//ORCON//NOFORN", "UNCLASSIFIED//FOUO", "SECRET//NOFORN//20380901"],
      legacy_examples: ["TOP SECRET//MERIDIAN//ORCON//NOFORN", "TS//LEGACY EYES ONLY — HARMONIC//ORCON//NOFORN", "TS//HARMONIC//NODIS"]
    },

    dissemination_controls: {
      NOFORN: "Not Releasable to Foreign Nationals.",
      "REL TO": "Releasable to specified countries (e.g. REL TO USA, GBR, CAN, AUS, NZL = Five Eyes / FVEY).",
      ORCON: "Originator Controlled — cannot be disseminated without the originating office's permission.",
      PROPIN: "Caution — Proprietary Information Involved.",
      FISA: "Foreign Intelligence Surveillance Act — subject to specific legal restrictions.",
      IMCON: "Imagery Intelligence Control.",
      "EYES ONLY": "Restricted to named individuals only — no further distribution (Legacy: 'Council Sealed').",
      WNINTEL: "Warning Notice — Intelligence Sources and Methods Involved.",
      LIMDIS: "Limited Distribution.",
      EXDIS: "Exclusive Distribution.",
      NODIS: "No Distribution beyond the original addressees."
    },

    portion_markings: {
      description: "Every paragraph, bullet, heading, chart, image, and table gets its OWN classification marking in parentheses at the start — so different parts of one document carry different classification levels.",
      examples: {
        "(U)": "This portion is UNCLASSIFIED.",
        "(S)": "This portion is SECRET.",
        "(TS//SCI)": "This portion is TOP SECRET//SCI (e.g. source identity).",
        "(S//NF)": "SECRET // Not Releasable to Foreign Nationals.",
        "(U//FOUO)": "UNCLASSIFIED but For Official Use Only.",
        "(TS//M)": "Legacy example — TOP SECRET // MERIDIAN compartment."
      }
    },

    classification_authority_block: {
      description: "Every originally classified document carries an authority block near the bottom of page one.",
      original_classification: ["Classified by: [Name and Position], [Agency]", "Reason: [Section of Executive Order 13526]", "Declassify on: [Date or Event]"],
      derivative_classification: ["Derived from: [Source Document(s)]", "Declassify on: [Date or Event, often a 25X exemption code]"],
      declassification_exemption_codes: {
        "25X1": "Reveal identity of a confidential human/HUMINT source.",
        "25X2": "Reveal information assisting WMD development.",
        "25X3": "Reveal information impairing US cryptologic systems.",
        "25X4": "Reveal information impairing intelligence sources or methods.",
        "25X5": "Reveal information damaging to foreign relations.",
        "50X1-HUM": "50-year exemption for human-source information."
      },
      legacy_note: "The engine's meta block already uses 'DECLASSIFY ON: EXEMPT CATEGORY — PERMANENT DENIAL,' which reads as a fictional analogue of a waived-SAP permanent exemption. For in-game realism, derivative Legacy docs can cite '25X4' (sources/methods) — appropriate given FVH detection methods."
    },

    document_control_numbers: {
      description: "Classified documents receive tracking numbers for accountability.",
      typical_format: "DOC-[Agency]-[Year]-[Sequential]-[Copy Number]  e.g. DOC-CIA-2024-04872-003 (copy 3 of N).",
      legacy_format: "LGC-[Function]-[Year]-[Sequential]  e.g. LGC-OPS-2024-01847, LGC-SIGINT-2024-00491, LGC-RESEARCH-2019-00044. Matches the existing LCN-0047 document-control convention in the engine header.",
      iir_header: ["INTELLIGENCE INFORMATION REPORT", "[CLASSIFICATION BANNER]", "REPORT NUMBER: [Agency Designator]-[Sequential]", "DATE OF INFORMATION: [Date]", "DATE OF REPORT: [Date]", "REFERENCES: [Related reports]", "SUBJECT: [Topic]", "SOURCE: [Source description with reliability assessment]"]
    },

    source_reliability_matrix: {
      description: "The standard NATO/US source-evaluation matrix. A rating like 'B-2' means 'usually reliable source, information probably true.' Apply to Legacy HUMINT sources (e.g. THORN-7 [B-2]).",
      source_reliability: {"A": "Completely reliable", "B": "Usually reliable", "C": "Fairly reliable", "D": "Not usually reliable", "E": "Unreliable", "F": "Cannot be judged"},
      information_confidence: {"1": "Confirmed by other sources", "2": "Probably true", "3": "Possibly true", "4": "Doubtful", "5": "Improbable", "6": "Cannot be judged"}
    },

    bureaucratic_voice: {
      description: "Real intelligence documents use a deliberately flat style. This is what makes intelligence fiction feel real.",
      characteristics: ["Passive voice: 'It is assessed that...' not 'We think...'", "Hedging: 'likely,' 'probably,' 'with moderate confidence,' 'suggests'", "Institutional attribution: 'This Office assesses...' / 'Per source reporting...'", "Absence of emotion — clinical even when describing atrocity", "Extensive caveats — every assessment includes confidence level and an alternative hypothesis", "Numbered paragraphs for easy reference", "Action-oriented structure: Findings -> Assessment -> Implications -> Recommended Action"],
      confidence_levels: ["HIGH CONFIDENCE", "MODERATE CONFIDENCE", "LOW CONFIDENCE"],
      structure_template: ["1. ADMINISTRATIVE NOTE (compartment, distribution, legal warning)", "2. SUMMARY", "3. DETAILED REPORTING (lettered/numbered sub-paragraphs)", "4. ASSESSMENT (key analytical judgments + alternative hypotheses with probabilities)", "5. RECOMMENDED ACTIONS", "6. DISTRIBUTION (access list; copy N of M)"]
    },

    sample_legacy_document: {
      description: "A full worked example of an authentic Legacy Intelligence Information Report. Illustrative only — usable verbatim as an in-game found document.",
      text: [
        "TOP SECRET//MERIDIAN//ORCON//NOFORN",
        "",
        "INTELLIGENCE INFORMATION REPORT",
        "",
        "REPORT NUMBER: LGC-OPS-2024-01847",
        "DATE OF INFORMATION: 15 March 2024",
        "DATE OF REPORT: 18 March 2024",
        "REFERENCES: LGC-OPS-2024-01722 (Preliminary Assessment), LGC-SIGINT-2024-00491 (Technical Collection Report)",
        "SUBJECT: Anomalous Signal Activity — [CODENAME REDACTED]",
        "SOURCE: LEGACY/THORN-7 [B-2]",
        "",
        "1. (U) ADMINISTRATIVE NOTE. This report is derived from MERIDIAN-compartmented collection activities and is subject to ORCON restrictions. Distribution limited to MERIDIAN-accessed personnel listed in Annex D. Unauthorized disclosure is subject to criminal penalties under 18 U.S.C. 793-798.",
        "",
        "2. (TS//M) SUMMARY. During the reporting period 12-15 MAR 2024, monitoring station ECHO-FOUR detected signal anomalies consistent with previous [PROGRAM CODENAME] events. Pattern analysis indicates a 73% correlation with baseline parameters established in LGC-RESEARCH-2019-00044. Source THORN-7 reports behavioral changes in SUBJECT [CRYPTONYM] beginning approximately 10 MAR 2024. Assessment: Event probability elevated to CONDITION AMBER. Recommend transition to enhanced monitoring posture per SOG-MERIDIAN-7.3.",
        "",
        "3. (S//NF) DETAILED REPORTING.",
        "   a. (S//NF) Signal Detection. At 0347 local on 13 MAR 2024, automated array at [LOCATION] registered a sustained anomalous emission in the [REDACTED] frequency range. Duration 4 min 17 sec. Pattern signature consistent with EVENT CLASS THETA.",
        "   b. (TS//M) Source Reporting. THORN-7 (reliability B, confidence 2) reports SUBJECT [CRYPTONYM] exhibited: (1) departure from established commute pattern on 12 and 14 MAR; (2) three unscheduled contacts with previously unidentified individuals; (3) reported sleep disturbance and disorientation (uncorroborated).",
        "   c. (S//NF) Environmental Analysis. Sampling conducted 16 MAR per SOG-MERIDIAN-4.1. Results pending. Preliminary field readings within normal parameters; note previous events showed delayed environmental indicators.",
        "",
        "4. (TS//M) ASSESSMENT. This office assesses with MODERATE CONFIDENCE that the reported activity constitutes a developing EVENT CLASS THETA occurrence. Alternative hypothesis: equipment degradation at ECHO-FOUR (est. 15%). Alternative hypothesis: SUBJECT behavioral changes unrelated to signal activity (est. 30%).",
        "",
        "5. (S//NF) RECOMMENDED ACTIONS. a. Transition [CRYPTONYM] monitoring from STANDARD to ENHANCED per SOG-MERIDIAN-7.3. b. Request SIGINT tasking through LEGACY/COMMS. c. Deploy environmental assessment team within 48 hours. d. Brief COUNCIL representative for this compartment. e. Update [REGION] threat assessment to CONDITION AMBER.",
        "",
        "6. (U) DISTRIBUTION. Per MERIDIAN compartment access list (Annex D). Copy 003 of 007.",
        "",
        "Classified by: [POSITION], Legacy Operations Directorate",
        "Derived from: MERIDIAN Program Classification Guide, 2023",
        "Declassify on: 25X4 (50 years from date of report)",
        "",
        "TOP SECRET//MERIDIAN//ORCON//NOFORN"
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // XIV. HISTORICAL PROGRAM PARALLELS  [ADDED 2026-09-07 — real-world grounding]
  // ───────────────────────────────────────────────────────────────────────────
  // Real declassified black programs that parallel Legacy operations. Each entry
  // maps a documented historical program to its Legacy analogue so writers can
  // ground fictional operations in the texture of real institutional history.
  // ═══════════════════════════════════════════════════════════════════════════

  historical_program_parallels: {

    doctrine: "Everything The Legacy does has a real-world precedent. The US government DID spend decades and millions studying the paranormal, controlling media, suppressing dissidents, and experimenting on unwitting citizens. These programs are the historical DNA of The Legacy.",

    mkultra: {
      years: "1953-1973",
      what: "CIA program to develop mind control, behavioral modification, and interrogation methods. 'MK' = the CIA Technical Services Division digraph.",
      structure: ["Authorized by DCI Allen Dulles (1953); run by Dr. Sidney Gottlieb (Chief, Chemical Division, Technical Services Staff)", "149 known sub-projects under the MKULTRA 'umbrella'", "Estimated budget ~$25M (1960s dollars)", "Conducted at 80+ institutions — universities, hospitals, prisons, pharma companies", "Funding laundered through shell foundations (Society for the Investigation of Human Ecology; Geschickter Fund) so many researchers had NO IDEA they worked for the CIA"],
      activities: ["LSD on unwitting subjects (CIA employees, military, prisoners, mental patients, public)", "Sensory deprivation, isolation, abuse", "Dr. D. Ewen Cameron's 'psychic driving' at Montreal's Allan Memorial Institute — weeks of repeated message playback to catatonic patients (Sub-project 68, among the most abusive)", "Hypnosis experiments toward a 'Manchurian Candidate' assassin", "Development of poisons, truth serums, incapacitants"],
      authorization_chain: "DCI -> Deputy Director for Plans -> Chief, Technical Services Staff -> Project Director (Gottlieb). No congressional oversight existed.",
      exposure: "CIA IG flagged concerns 1963 (partial curtailment). Director Richard Helms ordered all files destroyed 1973. ~20,000 pages survived — misfiled in financial records — surfaced via FOIA. Church Committee (1975); Gottlieb pleaded the Fifth in 1977 Senate testimony.",
      legacy_parallel: "The direct model for DIVISION RISK's pharmaceutical program (LEG-QUIET/DREAMLESS/FLAT/FORGET/FINAL series) and the umbrella structure of compartmentalized sub-projects with academic/corporate cutouts. The records-destruction-with-survivors precedent is the template for any Legacy archive-leak arc. Gottlieb's chemical-division authority mirrors LEGACY-7 (RISK Commander, neuroscience/pharmaceuticals)."
    },

    stargate: {
      years: "1977-1995",
      what: "US Army/DIA program investigating REMOTE VIEWING (psychic perception at a distance) for intelligence use. Proves the US government formally studied the paranormal through intelligence channels.",
      structure: ["Established 1977 at Fort Meade; run by DIA + Stanford Research Institute (SRI)", "Small unit: 15-20 people, working from 'an old, leaky wooden barracks'", "~$20M over 20 years", "Overseen at points by Lt. Frederick 'Skip' Atwater under Maj. Gen. Albert Stubblebine"],
      the_renaming_pattern: ["GONDOLA WISH (1977)", "GRILL FLAME (1978)", "CENTER LANE (1983)", "SUN STREAK (1985)", "STAR GATE (1991)", "SCANATE (parallel CIA program, 'scan by coordinate')"],
      operations: ["Claimed to locate hostages and a downed Soviet spy plane (1976)", "Briefed the Iranian hostage crisis to President Carter (1980 Situation Room)", "Attempted to locate SCUD missiles in the Gulf War", "Proponents claimed 65% accuracy in later experiments"],
      closure: "1995 — transferred DIA->CIA; an American Institutes for Research review found remote-viewing intelligence 'vague and ambiguous... difficult if not impossible... for actionable intelligence.' Terminated and declassified; records published in CIA's CREST archive January 2017.",
      legacy_parallel: "The direct precedent for LOOKING GLASS (probability projection) and DIVISION DANCE's theoretical research — a small, marginal, deniable paranormal unit inside the intelligence community. The six-codename renaming pattern is the template for how Legacy buries a sensitive program through bureaucratic obfuscation (compare GLOCKE -> Dampener development lineage). The 'leaky barracks' scale shows how the anomalous is kept marginal even internally."
    },

    cointelpro: {
      years: "1956-1971",
      what: "FBI counterintelligence program targeting domestic political organizations. The model for HOW agencies suppress and discredit.",
      structure: ["Authorized by Director J. Edgar Hoover; managed by Assistant Director William C. Sullivan", "Directives issued from Hoover to field offices via internal memoranda", "~0.2% of FBI workload over 15 years, across 23 field offices"],
      tactics: ["Infiltration — placing agents inside target organizations", "Psychological warfare — anonymous letters, calls, planted rumors", "'Snitch-jacketing' — falsely labeling loyal members as informants to spark internal purges", "Media manipulation — planting false stories in friendly outlets", "Legal harassment — coordinated arrests, IRS audits", "'Black propaganda' — forged documents attributed to targets", "The FBI mailed MLK a 'suicide letter' package with surveillance recordings"],
      exposure: "8 March 1971 — the Citizens' Commission to Investigate the FBI burgled the Media, Pennsylvania field office during the Ali-Frazier fight (cover/distraction). Stolen documents reached the press; the Washington Post published; led to the Church Committee (1975-76), which condemned it as a constitutional-rights violation.",
      legacy_parallel: "The template for Operation STATIC (music-industry suppression), Operation GRAY NOISE (media/information control), and the S.I.L.E.N.C.E. witness protocol's discrediting steps. Snitch-jacketing maps onto how Legacy could turn The Five against each other or against Zhao. The 'break in and steal the files' exposure model is the master template for any Legacy leak/theft arc — including a Zhao-driven disclosure."
    },

    mockingbird: {
      years: "1950s-1970s",
      what: "Alleged CIA program to influence media by cultivating journalists as assets.",
      key_elements: ["Relationships with journalists at the Washington Post, NYT, Time, CBS", "CIA-funded fronts (Congress for Cultural Freedom) published magazines and funded intellectual projects", "Managed by Cord Meyer and Frank Wisner; allegedly involved 400+ journalists at peak", "Church Committee found a network of several hundred foreign individuals providing intelligence and propaganda"],
      relevance: "Demonstrates narrative control not through crude censorship but through cultivated relationships with media gatekeepers.",
      legacy_parallel: "The direct model for Operation GRAY NOISE (media/information control — academic, press, online) and the cover-story doctrine in communication_protocols.cover_stories. Zhao's own cover as a 'freelance music journalist' is a Mockingbird-style media placement in miniature."
    },

    church_committee: {
      years: "1975-1976",
      what: "The Senate Select Committee to Study Governmental Operations with Respect to Intelligence Activities, chaired by Senator Frank Church. The watershed exposure of MKUltra, COINTELPRO, Mockingbird, and assassination plots.",
      relevance: "Established the modern oversight architecture (SSCI/HPSCI, the FISA framework) that Legacy's Seven both imitates and evades. In-world, the Church Committee is the near-miss The Legacy survived — the moment institutional secrecy was nearly broken and then re-sealed. Legacy doctrine treats 'another Church Committee' as an existential-tier disclosure event.",
      legacy_parallel: "Historical proof that even the deepest black programs can be dragged into daylight by a single committee with subpoena power. Frames the stakes of any Zhao disclosure arc: not just a leak, but the potential trigger for a Church-Committee-scale reckoning."
    },

    nuclear_incident_codewords: {
      what: "DoE/DoD event-classification codewords for nuclear weapon incidents.",
      codewords: {"BROKEN ARROW": "Nuclear weapon accident.", "BENT SPEAR": "Nuclear weapon significant incident.", "EMPTY QUIVER": "Nuclear weapon seizure, theft, or loss.", "NUCFLASH": "Possible detonation risk / risk of nuclear war."},
      legacy_parallel: "The naming logic behind Legacy's EVENT CLASS ALPHA-through-OMEGA and its ALERT YELLOW/RED/OMEGA posture (see communication_protocols.emergency_protocols). A Resonant achieving craft-interface (cf. Operation BRIGHT MORNING) is Legacy's EMPTY QUIVER equivalent — an uncontained asset of catastrophic potential."
    },

    real_world_disclaimer: "All programs above are documented in publicly available, unclassified/declassified sources (CIA FOIA/CREST, the Church Committee Final Report, the 9/11 Commission Report, and mainstream scholarship). They are included solely as historical grounding for the fiction of The Legacy. No classified information is contained herein."
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // XV. METADATA
  // ═══════════════════════════════════════════════════════════════════════════

  meta: {
    engine_version: "1.0.0",
    enhancement_2026_09_07: {
      title: "Real-World Grounding Enhancement",
      date: "7 September 2026",
      type: "ADDITIVE — no existing fields removed",
      sections_added: ["real_world_tradecraft_notes (XII)", "classification_format_reference (XIII)", "historical_program_parallels (XIV)"],
      source: "reference/INTELLIGENCE_OPERATIONS_RESEARCH.md (unclassified OSINT compilation)",
      purpose: "Ground The Legacy in authentic intelligence-agency tradecraft, real surveillance method names, proper classified-document formatting, real operational jargon, and historical black-program parallels (MKUltra, Stargate, COINTELPRO, Mockingbird, Church Committee).",
      real_world_disclaimer: "All real-agency terminology and historical programs referenced are drawn from publicly available, unclassified/declassified sources and are included solely as creative-fiction grounding. No actual classified information is contained herein.",
      backup_file: "legacy_operations_engine_BACKUP_pre_realworld_20260907.js"
    },
    canon_sources: [
      "THE_LEGACY.md (Foundation Briefing Packet 7-ALPHA)",
      "LEGACY_OPERATIONS_MANUAL_LOP01.md (LOP-01-2024, Rev 7.3)",
      "THE_MEN_IN_BLACK.md (Hollow One intelligence)",
      "ZHAO_FULL_ARC.md (Agent Zhao character arc)",
      "ASHLEY_COLE_FULL_ARC.md (Resonant informant arc)",
      "INTELLIGENCE_OPERATIONS_RESEARCH.md (real-world grounding, 2026-09-07 — unclassified OSINT)"
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

/* Phase A (2026-09-07): expose to window so the self-aware registry (sd_registry.js)
   can detect this const-declared engine. Additive; does not change existing behavior. */
if (typeof window !== 'undefined') { try { window.LEGACY_OPERATIONS_ENGINE = LEGACY_OPERATIONS_ENGINE; } catch(e){} }
