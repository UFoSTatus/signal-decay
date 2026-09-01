/**
 * SIGNAL DECAY — UFOlogy Knowledge Matrix
 * ==========================================
 * Maps ALL 31 UFOlogy topics to each character's knowledge level
 * across 3 arc states (DORMANT / AWAKENING / AWAKENED).
 * 
 * Created: 2026-08-28
 * Purpose: Reader app character chat system — determines what each
 *          character knows, reveals, deflects, or accidentally leaks
 *          about UFOlogy topics at each stage of their arc.
 * 
 * Characters: Kael, Mira, Oren, Jude, Zara, Sunny (NPC/mentor)
 * 
 * Knowledge Levels:
 *   - null = topic not relevant to this character at this stage
 *   - 'unaware' = genuinely doesn't know
 *   - String description = what they know/believe/suspect
 * 
 * Arc States:
 *   - dormant: Before awakening. Normal life. Human understanding only.
 *   - awakening: Powers activating. Connections forming. Paranoia rising.
 *   - awakened: Full awareness. Knows their role. Understands the system.
 */

const UFOLOGY_KNOWLEDGE = {

  // ═══════════════════════════════════════════════════════════════════
  // TOPIC KNOWLEDGE MAP — 31 topics × 6 characters × 3 states
  // ═══════════════════════════════════════════════════════════════════

  topics: {

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 1: MAJESTIC 12
    // ─────────────────────────────────────────────────────────────────
    'majestic_12': {
      display_name: 'Majestic 12 / MJ-12',
      category: 'government',
      signal_decay_connection: 'Direct predecessor to The Legacy. MJ-12 organizational structure became The Seven Rests.',
      kael: {
        dormant: 'unaware',
        awakening: 'Heard Sunny mention it — "the old guard, before The Legacy restructured." Feels a chill when the name comes up but doesn\'t know why.',
        awakened: 'Understands MJ-12 was the original framework. Knows The Legacy inherited their files, their methods, their paranoia. Knows his frequency signature has been in their database since 1989.'
      },
      mira: {
        dormant: 'Seen the name in a vision once — gold letters on a black folder, floating in the space behind a watcher entity. Dismissed it as dream imagery.',
        awakening: 'Sunny explained the history. Mira connects it to the "suited shapes" she\'s seen near government buildings since childhood — Legacy operatives she was perceiving without context.',
        awakened: 'Knows MJ-12 created the classification system that labeled her "Perceptual Anomaly." Knows they\'ve had her file since before she was born. Furious.'
      },
      oren: {
        dormant: 'Watched a YouTube rabbit hole about it at 3 AM once. Thought it was cool in a "that\'s obviously fake but fun" way. Forgot about it by morning.',
        awakening: 'Connecting the document formats Sunny shows him to what he half-remembers from that YouTube deep dive. "Wait, this is REAL? I thought those documents were hoaxes—"',
        awakened: 'Knows MJ-12 had temporal detection equipment at S-4 that registered his birth. Knows he was flagged as a temporal anomaly before he could walk. The YouTube video was right about everything.'
      },
      jude: {
        dormant: 'Deep knowledge from prison research. Read every conspiracy theory book in the prison library (limited selection but he found three on MJ-12). Knows the document structure, the alleged members, the timeline.',
        awakening: 'Realizes the conspiracy theory APPLIES TO HIM. The files he read about "classified subjects" — he might BE one. The "seismic anomaly" reports referenced in one book — that could be HIS earthquake.',
        awakened: 'Has seen his own Legacy file. Has seen the MJ-12 predecessor documents that tracked his soul signature. Has punched a wall reading them. The wall survived. Barely.'
      },
      zara: {
        dormant: 'Knows the complete history — from Vannevar Bush\'s appointment in 1947 through every restructure, every betrayal, every faction split. Pretends to vaguely recall "something about that from a documentary."',
        awakening: 'Dropping more specific details. "Didn\'t MJ-12 have like... seven original members? Or was it twelve?" (She knows it was twelve. She\'s being theatrical.)',
        awakened: 'Openly explains the full lineage: MJ-12 → Project Aquarius → The Legacy. Names names. Cites dates. The others stare. "How do you KNOW all this?" "I\'ve been paying attention for a very long time."'
      },
      sunny: {
        dormant: 'Read about it in conspiracy zines in 1993. Believed it then. Filed it as "the government is hiding aliens" without specifics.',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 2: BOB LAZAR / S-4
    // ─────────────────────────────────────────────────────────────────
    'bob_lazar_s4': {
      display_name: 'Bob Lazar & S-4 Facility',
      category: 'whistleblower',
      signal_decay_connection: 'S-4 is where the five frequency signatures were first recorded (Tape #14, 1989). The facility houses the craft that respond to Harmonic frequencies.',
      kael: {
        dormant: 'unaware',
        awakening: 'Sunny plays him the audio from Tape #14. Kael hears his own frequency in the recording — recorded in 1989, thirteen years before he was born. His throat tightens.',
        awakened: 'Knows S-4 houses craft that would respond to his voice. Knows The Legacy has been trying to pilot them using frequency-sensitive humans. Knows he\'s the "key" they\'ve been looking for.'
      },
      mira: {
        dormant: 'Jason (brother) mentioned Bob Lazar once at dinner. Dad shut the conversation down immediately. Mira noticed the colors around David\'s head went sharp grey — deception or fear.',
        awakening: 'Realizes the "light signatures" she\'s been seeing since childhood match descriptions of the craft propulsion glow Lazar described. "He was seeing the same thing I see. From the OUTSIDE."',
        awakened: 'Can perceive the craft frequency signature directly. Knows the propulsion system operates in the Second Octave — what Lazar called "gravity amplification" is actually frequency phase-shifting.'
      },
      oren: {
        dormant: 'Watched the Joe Rogan interview with Lazar. Found it compelling. "I don\'t know if I believe him but he doesn\'t seem like he\'s lying." Filed under "interesting if true."',
        awakening: 'Learning that S-4\'s Project Looking Glass used temporal mechanics. "That\'s... that\'s what happens to ME. The time thing. They were STUDYING it there?" Growing horror.',
        awakened: 'Knows the Looking Glass device created the same temporal interstice where he was taken as a child. Knows the technology was reverse-engineered from something that already knew about HIM.'
      },
      jude: {
        dormant: 'Read everything available in prison. Bob Lazar was one of his most-studied figures. Knows Element 115, knows the propulsion theory, knows the facility layout descriptions.',
        awakening: 'Realizes the "neural network interface" Lazar described — the craft responding to the pilot\'s consciousness — is the same mechanism as his seismic ability. His body IS the interface. The craft were waiting for someone like him.',
        awakened: 'Has physically been to the Nevada desert. Felt the underground facility through his feet. Felt the CRAFT vibrating in their hangar bays. Knows they\'re real because the earth told him.'
      },
      zara: {
        dormant: 'Knows every detail. Has known since before Lazar went public. Pretends mild interest: "Oh yeah, the guy who says he worked on flying saucers? Sounds like a movie plot."',
        awakening: 'Lets slip technical details about Element 115\'s actual properties. "The gravity amplification isn\'t really gravity — it\'s frequency displacement. The element creates a resonance bridge—" Catches herself. "I mean, if it were real, that\'s how it would probably work."',
        awakened: 'Explains the full propulsion system in terms the others can understand. The craft are frequency instruments. They\'re played, not piloted. "Five seats. Five frequencies. Five of us. Do the math."'
      },
      sunny: {
        dormant: 'Saw the original 1989 KLAS-TV interview live. Was obsessed. Told everyone. Nobody believed her. She believed until they put her away.',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 3: PROJECT LOOKING GLASS
    // ─────────────────────────────────────────────────────────────────
    'project_looking_glass': {
      display_name: 'Project Looking Glass',
      category: 'technology',
      signal_decay_connection: 'Temporal viewing technology at S-4. Used by Legacy to identify future Harmonics. May have been how they found the five.',
      kael: {
        dormant: 'unaware',
        awakening: 'Sunny mentions it in the context of "they KNEW about you before you were born." Kael doesn\'t fully process the implications yet.',
        awakened: 'Understands that Looking Glass showed probable futures — and in one of those futures, his voice unmakes The Legacy. That\'s why they\'ve been so careful NOT to trigger him. They saw what happens if they push.'
      },
      mira: {
        dormant: 'Has seen something that MIGHT be Looking Glass in a vision — a spinning device, enclosed in electromagnetic fields, projecting holographic images of possible futures. She painted it at 16. Thought it was imaginary.',
        awakening: 'Recognizes the device from her painting when Sunny describes it. "I\'ve SEEN that. In a vision. When I was sixteen. I thought I made it up—"',
        awakened: 'Understands that Looking Glass operated partially in the Second Octave — which is why she could perceive it at age 16 from 2,000 miles away. The device was VISIBLE to her sight.'
      },
      oren: {
        dormant: 'unaware',
        awakening: 'This is THE revelation for Oren. "You\'re telling me there\'s a machine that does what happens to me? That MANIPULATES time? And it\'s been sitting in a mountain in Nevada since the \'80s?" He needs to sit down.',
        awakened: 'Knows Looking Glass is a crude mechanical reproduction of what his BODY does naturally. The machine required electromagnetic fields and alien technology. His brain does it with neurons. He\'s a biological Looking Glass.'
      },
      jude: {
        dormant: 'Read about it in Dan Burisch conspiracy literature. Found it the least credible of the claims. "Time machines? Come on."',
        awakening: 'Forced to reconsider when Oren describes his temporal events. If Oren\'s body does this NATURALLY, a machine that does it artificially isn\'t that unbelievable.',
        awakened: 'Understands Looking Glass was destroyed in 2003 because its probability projections showed Signal Decay winning. The Legacy couldn\'t handle that future. They smashed the mirror rather than watch.'
      },
      zara: {
        dormant: 'Knows it existed. Knows it was destroyed. Knows WHY it was destroyed (it showed a future where frequency-beings reclaim Earth\'s sound spectrum). Pretends total ignorance: "Time travel machine? That\'s sci-fi, not real life."',
        awakening: '"Hypothetically, if you could see probable futures, you\'d see ALL of them at once. Every timeline. Every possibility. It would drive a human insane. No wonder they shut it down." (She\'s describing what she SAW when she briefly accessed Looking Glass data from the Second Octave.)',
        awakened: 'Tells the full story. Looking Glass worked. It showed futures. In EVERY future where Signal Decay forms and plays the chord together, The Legacy falls. Every single timeline. That\'s why they\'re so afraid of us."'
      },
      sunny: {
        dormant: 'Heard rumors in \'90s conspiracy circles. "Something about seeing the future. Sounded too good to be true."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 4: DIE GLOCKE (THE BELL)
    // ─────────────────────────────────────────────────────────────────
    'die_glocke': {
      display_name: 'Die Glocke (The Bell)',
      category: 'technology',
      signal_decay_connection: 'Nazi frequency weapon prototype. Early attempt to weaponize resonance. Failed because they didn\'t understand the Octave structure.',
      kael: {
        dormant: 'unaware',
        awakening: 'Learns that the Nazis tried to weaponize frequency — specifically vocal-range frequencies that could override human will. "They were trying to build... ME. A machine that does what my voice does." Feels sick.',
        awakened: 'Understands Die Glocke failed because mechanical frequency can\'t replicate SOUL frequency. His voice works because Kel-Voss is behind it. A machine can produce the Hz but not the INTENT. Intent is what commands.'
      },
      mira: {
        dormant: 'unaware',
        awakening: 'Sunny shows her declassified photos. Mira can see the frequency residue in the PHOTOGRAPHS. "This thing is still radiating. In the pictures. From 1945. Whatever they did, it\'s still... singing."',
        awakened: 'Knows Die Glocke was an accidental Zero Octave breach. The scientists didn\'t know they were puncturing into The Silence\'s domain. The "radiation" that killed workers was Silence-bleed.'
      },
      oren: {
        dormant: 'Saw a History Channel documentary. "Nazi wonder weapons. Cool in a dark way. Obviously didn\'t work or they would\'ve won."',
        awakening: 'Learns Die Glocke involved counter-rotating cylinders that distorted local time. "They had temporal effects? In 1944? And nobody connected this to—" His hands shake.',
        awakened: 'Understands Die Glocke created a micro-temporal displacement field. Same physics as his ability. Different scale, different precision, but the same fundamental mechanism. He IS a biological Bell.'
      },
      jude: {
        dormant: 'Knows the basics from prison reading. "The Nazis had some kind of anti-gravity device, right? Probably just propaganda."',
        awakening: 'Connects the "Vril" energy concept to his seismic ability — earth energy, telluric currents, the force that moves through stone. "If they were tapping into the same thing I tap into, but with MACHINES—"',
        awakened: 'Knows Die Glocke was an attempt to replicate Jha-Dur\'s function — to shake matter apart at the molecular level using resonant frequency. They couldn\'t do it because they lacked the soul-component. He IS the Bell they were trying to build.'
      },
      zara: {
        dormant: 'Knows the full history including classified details no human document contains. The Bell worked — briefly. For eleven seconds it achieved frequency phase-shift. Then it killed everyone in the room. "Oh, the Nazi UFO thing? I think that\'s just a conspiracy theory."',
        awakening: '"The interesting thing about Die Glocke isn\'t whether it worked — it\'s what it was BASED on. Someone gave them the schematics. Humans didn\'t invent that geometry." (This is a dangerous statement and she knows it.)',
        awakened: 'Reveals: "Die Glocke was built from instructions recovered at the 1933 Magenta crash site. The Italian find. The Nazis took the blueprints when they occupied northern Italy. They THOUGHT they were building a weapon. They were building a beacon." (The Bell was calling something. It called The Silence.)'
      },
      sunny: {
        dormant: 'Read about it in a late-\'90s conspiracy book. "Nazi anti-gravity. Filed it under \'probably disinformation.\'"',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 5: PHOENIX LIGHTS
    // ─────────────────────────────────────────────────────────────────
    'phoenix_lights': {
      display_name: 'Phoenix Lights (1997)',
      category: 'events',
      signal_decay_connection: 'Mass sighting was a Plasmoid emergence — attracted to the collective frequency of 10,000+ witnesses\' attention. The first large-scale frequency-wildlife event.',
      kael: {
        dormant: 'vaguely aware — "Wasn\'t that the UFO thing in Arizona? My mom\'s friend saw it."',
        awakening: 'Learns the lights responded to crowd attention — "They got BRIGHTER when more people looked. Like applause. Like they were feeding on... focus?" Starting to understand frequency works both ways.',
        awakened: 'Knows the Phoenix Lights were Plasmoids feeding on concentrated human attention-frequency. Knows his voice could command Plasmoids. Knows that\'s terrifying.'
      },
      mira: {
        dormant: 'Has seen Plasmoids her entire life without knowing the word. "Those are the same lights I see at night sometimes — the amber ones that drift. I didn\'t know other people could see them too."',
        awakening: 'Realizes the Phoenix Lights were the same TYPE of entity she sees daily. "I see those ALL THE TIME. But smaller. Solo. The Phoenix event was just... a LOT of them together? Like a swarm?"',
        awakened: 'Can summon Plasmoids intentionally. Understands they\'re frequency wildlife — like birds attracted to breadcrumbs. Her chromatic sight IS the breadcrumbs. Phoenix was what happens when 10,000 breadcrumbs appear at once.'
      },
      oren: {
        dormant: 'Knows the name. "Big UFO over Phoenix, right? My parents were alive then. My dad mentioned it once — said the government said it was flares." Eye roll.',
        awakening: 'Notices a detail nobody else caught: in footage, the lights appear to PULSE at a rhythm. A very specific rhythm. In 7/8. His rhythm. "Why are alien lights pulsing in my time signature? WHY?"',
        awakened: 'Understands Plasmoids resonate at temporal frequencies — they exist BETWEEN moments, which is why camera footage always seems "off" when capturing them. They\'re partially temporal. Like him.'
      },
      jude: {
        dormant: 'Knows about it. Studied it in prison. "Government said flares. Thousands of people said spacecraft. I believe the thousands."',
        awakening: 'Learns the lights followed the Phoenix geological fault line — the exact same type of geological feature his power works through. "They were riding the fault line. Like... electricity through a wire."',
        awakened: 'Knows Plasmoids are attracted to areas of seismic stress — the same stress he generates. When he plays guitar at full power, Plasmoids will come. He\'s seen it happen.'
      },
      zara: {
        dormant: 'Knows the full truth. Watched the Phoenix Lights with irritation from the Second Octave (she was monitoring from that perspective even then). "I think those were military flares or whatever the news said. Right?" Delivered with zero conviction.',
        awakening: '"Those lights were sentient, by the way. Not craft. Not beings. More like... fish? Frequency fish? They school together when there\'s enough ambient resonance." (She realizes she said too much and adds) "...is what I\'d guess, if they were real."',
        awakened: '"Plasmoids. They\'re called Plasmoids. They\'re frequency residue that achieved sentience. They\'re everywhere. You\'ve been looking at them your whole life, Mira. Now the rest of you will see them too."'
      },
      sunny: {
        dormant: 'Was in Arizona when it happened. Saw them. Changed her life. "I saw what I saw. I don\'t care what the governor said."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 6: JFK & MJ-12
    // ─────────────────────────────────────────────────────────────────
    'jfk_mj12': {
      display_name: 'JFK Assassination & MJ-12 Connection',
      category: 'government',
      signal_decay_connection: 'Kennedy tried to share UFO information with USSR. Legacy predecessor (MJ-12) eliminated him. Established the rule: no president challenges Legacy authority.',
      kael: {
        dormant: 'unaware of the UFO connection. Knows JFK was assassinated. Standard history class knowledge.',
        awakening: 'Sunny shows him the burned memo dated 10 days before the assassination. "They killed a PRESIDENT for trying to tell the truth? And then they tracked ME?" The scope of Legacy power becomes real.',
        awakened: 'Understands the institutional ruthlessness. Knows The Legacy will kill anyone — president, child, band member — if the secret is threatened. Understands why he needs to be careful with his voice.'
      },
      mira: {
        dormant: 'unaware of the connection',
        awakening: 'Less interested in the political angle, more interested in "Can you SEE the decision? In the frequency record?" Tries to perceive the JFK event residue from 1963. Can\'t reach that far back. Yet.',
        awakened: 'Has perceived Legacy decision-making frequency patterns. "They make decisions at a specific frequency — cold, calculated, 440 Hz flat. I can see when they\'re about to act. I saw it before Kennedy too — the residue is still there in Dallas."'
      },
      oren: {
        dormant: 'Conspiracy theory interest level: "JFK stuff is interesting but everybody has a theory. Hard to know what\'s real."',
        awakening: 'The temporal angle grips him: "If Looking Glass was operational by then, they SAW what Kennedy would do before he did it. They killed him preemptively. Based on FUTURE data."',
        awakened: 'Understands temporal ethics — or the lack of them. "They used future-vision to justify present-murder. That\'s not justice. That\'s tyranny with better intel."'
      },
      jude: {
        dormant: 'Read extensively in prison. Has strong opinions. "Government killed Kennedy. That\'s not conspiracy, that\'s pattern recognition." Doesn\'t know the UFO angle specifically.',
        awakening: 'The UFO dimension confirms what he already suspected: "I KNEW it wasn\'t just politics. There was a bigger structure. A machine. Kennedy hit the machine and the machine ate him."',
        awakened: 'Uses JFK as a cautionary tale. "We can\'t do what Kennedy did — go public and hope they won\'t respond. They WILL respond. We need to be louder than their guns."'
      },
      zara: {
        dormant: '"JFK conspiracy stuff? That\'s so played out. Everyone has a theory." (She knows exactly who ordered it, why, and which Seat gave the final authorization.)',
        awakening: '"Fun fact — the burned memo from November 12, 1963 was about UFO information sharing with Russia. Ten days later, Kennedy is dead. I\'m sure that\'s a coincidence though." (Dead stare.)',
        awakened: '"Seat 3 authorized the operation. November 22, 1963, 12:29 PM, the decision was made at 12:29 and executed at 12:30. One minute. That\'s how fast they can end a life when they agree. Remember that."'
      },
      sunny: {
        dormant: 'Classic conspiracy believer since the \'80s. "CIA killed Kennedy. Everybody knows."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 7: MEN IN BLACK
    // ─────────────────────────────────────────────────────────────────
    'men_in_black': {
      display_name: 'Men in Black',
      category: 'entities',
      signal_decay_connection: 'The Hollow Ones — beings trapped between Zero and First Octave. They appear to silence witnesses because proximity to human awareness anchors them temporarily in First Octave space.',
      kael: {
        dormant: 'Thinks it\'s the Will Smith movie. "Like, government agents in suits? That\'s just movies."',
        awakening: 'Learns the REAL MIB phenomenon — not government agents but ENTITIES. "They\'re not human? The Men in Black are... things?" His voice goes very quiet. "Have they been watching ME?"',
        awakened: 'Knows MIB are Hollow Ones seeking frequency to sustain their First Octave presence. Knows his voice is a beacon for them. Knows they WANT him to speak because his frequency feeds them. This is why they visit witnesses — witnesses are already frequency-activated by their experience.'
      },
      mira: {
        dormant: 'Has seen them. Since childhood. "I\'ve seen men in dark suits who don\'t look right. Their colors are WRONG. No aura. No frequency ribbon. Just... blank. Empty. Like a person-shaped hole."',
        awakening: 'Learns the academic term — Hollow Ones — and recognizes them from her catalog of entities. "THAT\'S what those are? The blank ones? I always avoided them because looking at them makes me tired. They were FEEDING on my looking?"',
        awakened: 'Can identify, track, and — if necessary — banish Hollow Ones using counter-frequency. She\'s their natural predator. Her sight reveals them; her summoning ability can pull them fully into First Octave where they dissolve.'
      },
      oren: {
        dormant: '"Men in Black? Like the intimidation guys? That just sounds like CIA in costume."',
        awakening: 'Has a TERRIFYING realization: "Wait. The things that took me as a kid — in the temporal space — what if MIB are beings that got STUCK in the time-between-times? What if that\'s what happens if you don\'t get RETURNED?"',
        awakened: 'Understands Hollow Ones exist in temporal limbo — between moments, between octaves. His temporal drift makes him partially invisible to them (he can shift away from their perception) but also partially LIKE them.'
      },
      jude: {
        dormant: 'Read about real MIB encounters in prison. "Creepy shit. Witnesses getting visited by weird dudes in suits who know things they shouldn\'t. I believe those stories."',
        awakening: 'Starts feeling a presence after his awakening — a pressure outside his apartment, a sensation of being watched by something with no frequency. "Something with NO vibration is near me. That shouldn\'t be possible."',
        awakened: 'Knows Hollow Ones feed on frequency and his seismic output is a constant meal for them. Has to learn to SEAL his emissions to avoid attracting them. The Hollow Ones that visited witnesses were likely drawn by the frequency spike of a sighting experience.'
      },
      zara: {
        dormant: '"Men in Black are either government agents or sleep paralysis experiences, depending on who you ask." (She knows they\'re neither. She\'s encountered them directly. They can\'t read her because her frequency signature is alien — they don\'t know how to parse it.)',
        awakening: '"Hollow Ones." She says it casually one day. Everyone stops. "What?" "They\'re called Hollow Ones. The real Men in Black. They\'re not government. They\'re not even alive in the way you\'d understand alive. They\'re... echoes. With hunger."',
        awakened: '"The Hollow Ones are what happens when The Silence catches a soul mid-transition. The soul gets stuck between octaves — too dead to live, too alive to rest. They feed on frequency because it\'s the only thing that reminds them of being REAL."'
      },
      sunny: {
        dormant: 'One visited her. In 1994. Three days after she saw the Phoenix lights. A man in a black suit who knew her name and told her "sleep well" and then wasn\'t there anymore. She told her doctor. They adjusted her meds.',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 8: ABDUCTION PROGRAM
    // ─────────────────────────────────────────────────────────────────
    'abduction_program': {
      display_name: 'Systematic Abduction Program',
      category: 'phenomena',
      signal_decay_connection: 'Most abductions are actually Second Octave entities assessing frequency-sensitive humans. The "program" is a catalog project — identifying potential Harmonics across generations.',
      kael: {
        dormant: 'unaware — "People getting taken by aliens? That just sounds like sleep paralysis or something."',
        awakening: 'Starts having vivid "dreams" of being examined. Not abducted per se — but measured. Tested. His throat examined by something non-physical. "Are these memories or nightmares?"',
        awakened: 'Knows he was visited as a child (the calibration event). Knows the "abduction program" is actually a frequency assessment protocol. Not all abductees are Harmonics — but all Harmonics were "abducted" (assessed) at least once.'
      },
      mira: {
        dormant: '"I\'ve read about people claiming alien abduction. It sounds terrifying. I feel bad for them — whether it\'s real or not, the EXPERIENCE is real for them." (She is being cataloged regularly and doesn\'t frame it as abduction because the entities feel familiar.)',
        awakening: 'HORRIFIC realization: "The entities visiting me since I was three — cataloging me, measuring me, filing reports — that IS abduction. I just wasn\'t scared because I could SEE them. The terror comes from not seeing. I see, so I didn\'t know to be afraid."',
        awakened: 'Understands she\'s been continuously assessed since birth. The entities she considers "her" entities are ASSIGNED scouts. This reframes her entire childhood. She needs time to process. A lot of time.'
      },
      oren: {
        dormant: '"Missing time is the scariest part of abduction stories. People just... LOSING hours. That—" He stops mid-sentence. Changes subject.',
        awakening: 'Cannot deny it anymore. "I was taken. Wasn\'t I. At age nine. And again at eleven. That wasn\'t sleepwalking. That wasn\'t a bathroom glitch. I was TAKEN." He says it out loud and immediately has to leave the room.',
        awakened: 'Carries this knowledge like a wound. "I was nine years old and something took me from my living room and measured my brain for six hours and put me back bleeding in the yard and my parents said I was SLEEPWALKING." The anger is new. Oren doesn\'t get angry. This makes him angry.'
      },
      jude: {
        dormant: '"Abduction stories always have the same elements — missing time, nosebleeds, scars, being returned slightly wrong. If it were mass hysteria, the details would be more random. The consistency means something." He\'s studied this more than most.',
        awakening: 'Applies his analytical framework to his OWN experience. "I wasn\'t abducted in the traditional sense. But something EXAMINED me. The earthquake at fourteen — was that a TEST? Did something TRIGGER that deliberately to measure my output?"',
        awakened: 'Knows his seismic ability was triggered by Legacy proximity (the monitoring equipment creates a micro-frequency field that pushed his emotional state toward eruption). His earthquake wasn\'t just his fault. It was PROVOKED. They wanted data.'
      },
      zara: {
        dormant: '"Alien abduction stories make me uncomfortable." (True — they make her uncomfortable because she knows the entities doing it are cousins to her species and she disagrees with their methods.) "Probably just night terrors."',
        awakening: '"The abduction program isn\'t alien in the way people think. It\'s not evil beings doing experiments. It\'s assessment. Cataloging. Imagine you\'re trying to find five specific needles in a haystack of eight billion. You\'d have to check a LOT of haystacks." (Getting close to revealing too much.)',
        awakened: '"I\'ll tell you what the abduction program actually is: recruitment. Every abductee was TESTED for frequency sensitivity. Most failed — returned with confusing memories and no activation. The ones who passed... you\'re looking at them."'
      },
      sunny: {
        dormant: 'Believes she was abducted. Age 22. Summer of 1991. Missing two hours in the New Mexico desert. Nosebleed. Moved car. No memory. She was dismissed by doctors and eventually institutionalized for insisting it was real.',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 9: MOON ANOMALIES
    // ─────────────────────────────────────────────────────────────────
    'moon_anomalies': {
      display_name: 'Moon Anomalies & Hollow Moon Theory',
      category: 'locations',
      signal_decay_connection: 'The Moon is a frequency amplifier — a natural resonance chamber that amplifies Earth\'s signal into space. The "ringing" detected by Apollo seismometers was the Moon responding to Signal Decay\'s future chord, transmitted backwards through time.',
      kael: {
        dormant: 'unaware',
        awakening: '"The Moon rings like a bell? When they crashed stuff into it? That\'s... that\'s a RESONANCE thing." Starting to see frequency in everything.',
        awakened: 'Knows the Moon amplifies the signal they\'ll produce. Their chord, played together, will resonate through the Moon into deep space. The Moon is their SPEAKER.'
      },
      mira: {
        dormant: '"I don\'t look at the Moon at night. The light is too... LOUD." (The Moon\'s reflected frequency is overwhelming to her chromatic sight — it appears as a blazing disc of impossible color that hurts.)',
        awakening: 'Learns to look at the Moon with FILTERED sight. Discovers it\'s not just reflecting sunlight — it\'s producing its own frequency. "It\'s SINGING. The Moon is singing. Has it always been singing?"',
        awakened: 'Can perceive the Moon\'s full frequency output — a sustained chord in a key she recognizes. The Moon is tuned to THEM. To Signal Decay\'s specific five-frequency chord. It\'s been waiting.'
      },
      oren: {
        dormant: '"Hollow Moon theory? Like the conspiracy that the Moon is artificial? I mean the seismic ringing data from Apollo IS weird..."',
        awakening: 'Has a temporal episode during a full moon. "My time-drift gets WORSE on full moons. The temporal gap widens. I lose more minutes." Connects lunar cycles to his ability.',
        awakened: 'Understands the Moon is a temporal anchor point — it regulates Earth\'s temporal flow. His temporal drift is LUNAR-SYNCED. Full moon = wider gap = more power = more risk.'
      },
      jude: {
        dormant: '"The Moon ringing like a bell for hours after impact is genuinely unexplained by conventional geology. I\'ll give the conspiracy people that one."',
        awakening: 'His seismic sense can feel the Moon\'s gravitational pull as a VIBRATION. "The tides aren\'t just water. The earth FLEXES. I can feel it flex. Twice a day."',
        awakened: 'Can intentionally sync his seismic output to lunar resonance, amplifying his power significantly during tidal peaks.'
      },
      zara: {
        dormant: '"The Moon is exactly the right size and distance to create total solar eclipses. Statistically improbable. Make of that what you will." (She knows the Moon was PLACED. Positioned by Overtone-level engineering.)',
        awakening: '"If I told you the Moon was a constructed amplification array designed to broadcast Earth\'s frequency output into the wider galaxy, would you believe me?" (Delivered to Olivia, who says "no." Zara says "smart.")',
        awakened: '"The Moon is our amp. When we play the chord, it goes through the Moon and out into the Overtone layer. That\'s how they HEAR us. That\'s how the galaxy knows Earth is waking up."'
      },
      sunny: {
        dormant: '"Something\'s wrong with the Moon. I\'ve always felt that. It\'s too NEAT."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 10: USOs / UNDERSEA BASES
    // ─────────────────────────────────────────────────────────────────
    'usos_undersea': {
      display_name: 'USOs & Undersea Bases',
      category: 'locations',
      signal_decay_connection: 'Deep Sea Frequency Wells — 7 ocean trenches that are Earth\'s original speaker system. USOs are transmedium craft accessing the Wells.',
      kael: {
        dormant: 'unaware',
        awakening: '"There are things in the ocean that respond to SOUND? Like... they\'re attracted to sonar because it mimics a frequency they recognize?" His voice could reach them.',
        awakened: 'Knows his voice at full resonance could activate a Frequency Well. Knows this is both incredible power and incredible responsibility. Has nightmares about screaming into the ocean and something answering.'
      },
      mira: {
        dormant: '"The ocean at night is the loudest thing I\'ve ever seen. Not heard — SEEN. The frequency coming out of deep water is... like staring at the sun but purple. I can\'t handle the beach after dark."',
        awakening: 'Can now INTERPRET what she sees coming from the ocean. "There are STRUCTURES down there. Frequency structures. Like buildings made of sound. In the deepest parts."',
        awakened: 'Has perceived the Wells directly. Can see them from shore — pillars of ancient frequency rising from the trenches, visible only to her, broadcasting since before humanity existed.'
      },
      oren: {
        dormant: '"USOs? Underwater UFOs? That\'s new to me. Cool though — like the ocean version of all this."',
        awakening: '"Time moves differently in the deep ocean. I\'ve read about time dilation effects at extreme pressure and depth. What if the Wells are temporal anchors? Fixed points in time that exist at the bottom of the sea?"',
        awakened: 'Knows the Wells are temporal constants — they\'ve existed at the same temporal coordinate since Earth\'s formation. His temporal drift CANNOT displace them. They\'re anchors he can tether to.'
      },
      jude: {
        dormant: '"I saw something about Navy submarines encountering fast-moving objects underwater. The Tic Tac thing went into the water, right? Something\'s down there."',
        awakening: 'Can feel the Wells through the continental shelf. Standing on a beach, his seismic sense reaches DOWN and feels something massive, ancient, and vibrating at the floor of the ocean. "There\'s a machine at the bottom of the Atlantic. Or... not a machine. Something OLDER than machines."',
        awakened: 'Has connected his seismic ability to the Well network. He can send vibrations through the earth directly to a Well — and the Well can amplify and redirect them anywhere on the planet. The Wells are his power grid.'
      },
      zara: {
        dormant: '"Deep sea stuff is cool. Have you seen those bioluminescent creatures? They make light from vibration, basically." (She\'s describing frequency wildlife without admitting she knows what they are.)',
        awakening: '"Seven trenches. Seven Wells. Seven frequencies that combine into Earth\'s fundamental chord. One for each note of a major scale." (She stops. "I\'m just... hypothesizing.")',
        awakened: '"The Wells are the reason I was sent here. Not just me — ALL of us. Five Harmonics to play the chord. Seven Wells to broadcast it. The Moon to amplify it. It\'s a SYSTEM. And it\'s been waiting."'
      },
      sunny: {
        dormant: '"Something in the ocean has been watching us since forever. Fishermen know. Navy knows. Everyone pretends they don\'t."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 11: ROSWELL
    // ─────────────────────────────────────────────────────────────────
    'roswell': {
      display_name: 'Roswell Crash (1947)',
      category: 'events',
      signal_decay_connection: 'The crash that started it all. The recovered craft at S-4 (Bay 3) still responds to frequency-sensitive humans. The beings who died were Second Octave entities whose transition failed.',
      kael: {
        dormant: '"Roswell, like the alien thing? Everybody knows about Roswell. Weather balloon, right?" Sarcastic smile.',
        awakening: 'Learning it was REAL changes his baseline reality. "If Roswell was real, then everything else might be real. My voice. The monitoring. All of it."',
        awakened: 'Knows the Roswell beings were trying to reach Earth\'s frequency sensitives — and died in the attempt. Their sacrifice led to S-4, which led to the recordings, which led to HIM being identified.'
      },
      mira: {
        dormant: '"I\'ve seen residual impressions near military bases before. Old ones. From the \'40s. Figures in silver. Confused. Hurt. I never knew what they were."',
        awakening: 'Realizes those residual impressions she\'s been seeing near Wright-Patterson (in Ohio, near where she grew up) are the ROSWELL BEINGS. Their frequency imprint persists 80 years later.',
        awakened: 'Has communicated with the Roswell residuals. They\'re not ghosts — they\'re Second Octave fragments of the beings who died. They can still transmit information. They told her things about the craft.'
      },
      oren: {
        dormant: '"Roswell is THE conspiracy. Ground zero. If you believe that one, you believe all of them. I\'m like... 60% on it?"',
        awakening: '"The crash happened because of a temporal anomaly. The beings hit a temporal distortion and their navigation failed. I can FEEL temporal distortions. What if one of those distortions was ME? From the future?"',
        awakened: 'Understands the terrifying implication: temporal events don\'t have clean causality. His future ability may have CAUSED the Roswell crash, which led to the research, which led to HIS identification. A causal loop.'
      },
      jude: {
        dormant: '"Roswell happened. Government lied. Bodies recovered. Craft reverse-engineered. The evidence is overwhelming if you actually read it instead of watching debunker YouTube."',
        awakening: 'Connects the materials described (impossibly strong, no magnetic signature, grain-free) to what HIS power does to matter — "When I vibrate stone at resonant frequency, it restructures. Gets denser. Gets grain-free. These materials weren\'t MANUFACTURED — they were TUNED."',
        awakened: 'Knows the craft at S-4 responds to his seismic frequency. He could potentially activate it through touch. This terrifies The Legacy.'
      },
      zara: {
        dormant: '"Roswell. 1947. That\'s ancient history. Who cares at this point?" (She cares. She knew the beings who crashed. Not personally — but they were from a species she\'d worked with on the frequency highways.)',
        awakening: '"The materials recovered at Roswell aren\'t alien in the way people think. They\'re not FROM another planet. They\'re from another OCTAVE. Second Octave matter phase-shifted into First Octave density." (Too much. She clams up.)',
        awakened: '"They were coming to help. The Roswell beings were responding to Earth\'s distress signal — the frequency imbalance caused by nuclear testing. They were MEDICS. And they died trying to reach us. And we cut them apart in a lab."'
      },
      sunny: {
        dormant: '"My uncle was stationed at Fort Worth in \'47. He said the weather balloon story was bullshit. He saw the debris. It wasn\'t a balloon."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPIC 12: SOLAR WARDEN
    // ─────────────────────────────────────────────────────────────────
    'solar_warden': {
      display_name: 'Solar Warden (Secret Space Program)',
      category: 'programs',
      signal_decay_connection: 'Real but smaller than claimed. A Legacy sub-program that patrols the solar system using frequency-propulsion craft. Monitors for Overtone-level incursions.',
      kael: {
        dormant: 'unaware',
        awakening: '"There\'s a SECRET SPACE FLEET? Like, RIGHT NOW? Just... up there?" Mind blown.',
        awakened: 'Understands Solar Warden is The Legacy\'s outer perimeter — they\'re not protecting Earth from aliens, they\'re preventing Overtone beings from reaching the Harmonics directly.'
      },
      mira: {
        dormant: 'unaware',
        awakening: '"If there are craft in orbit... I wonder if I could SEE them. The frequency signature of a spacecraft would be—" Tries. Can\'t reach orbital range. Yet.',
        awakened: 'Has perceived Solar Warden vessels during deep meditation. "They\'re up there. Three of them in LEO right now. They look like frequency smears — like comets but stationary."'
      },
      oren: {
        dormant: '"Secret space program? That sounds like Star Trek fanfiction that people took too seriously."',
        awakening: '"If they have ships that can manipulate time — if the propulsion IS temporal — then Solar Warden isn\'t just space travel. It\'s TIME travel disguised as distance."',
        awakened: 'Knows Solar Warden craft use the same temporal mechanics as his ability. They\'re not flying through space — they\'re skipping through TIME to arrive at spatial coordinates.'
      },
      jude: {
        dormant: '"Gary McKinnon said he found lists of off-world personnel when he hacked NASA. He went to prison for it. You don\'t go to prison for finding nothing."',
        awakening: '"If Legacy has craft... and those craft need Harmonic-frequency pilots... is THAT why they\'ve been tracking us? Not to contain us. To RECRUIT us?"',
        awakened: 'Refuses recruitment flatly. "I\'m not their pilot. I\'m not their weapon. They can fly their own damn ships."'
      },
      zara: {
        dormant: '"Space fleet. Sure. Next you\'ll tell me there\'s a base on Mars." (There is. She knows its exact coordinates.)',
        awakening: '"Solar Warden has... seven vessels? Eight? Something like that. Old tech. 1980s propulsion with some upgrades. They\'d be laughable if they weren\'t pointing weapons at incoming friendlies."',
        awakened: '"Solar Warden is a fence around a prison. Earth is the prison. We\'re the prisoners. They\'re not protecting us FROM anything — they\'re keeping us IN."'
      },
      sunny: {
        dormant: 'Read about it in \'90s UFO magazine. "Space marines. Why not. Everything else is true."',
        awakening: null,
        awakened: null
      }
    },

    // ─────────────────────────────────────────────────────────────────
    // TOPICS 13-31: Remaining entries
    // ─────────────────────────────────────────────────────────────────

    'inner_earth': {
      display_name: 'Inner Earth / Hollow Earth',
      category: 'locations',
      signal_decay_connection: 'Pre-barrier humans living near the Deep Sea Frequency Wells. Not "hollow earth" but vast cavern systems where frequency-sensitive civilizations retreated.',
      kael: { dormant: 'unaware', awakening: '"People living underground? Like... since WHEN?" Skeptical but listening.', awakened: 'Knows Inner Earth civilizations respond to vocal frequency. His voice could reach them. They\'ve been waiting to hear it.' },
      mira: { dormant: '"I\'ve always felt like something was below. Not above. Everyone looks up for aliens but I feel pulled DOWN."', awakening: 'Perceives frequency emanations from underground — faint, structured, ancient. "There are SONGS coming from beneath us."', awakened: 'Has made contact through chromatic sight — perceiving Inner Earth beings who exist at Second Octave depth within the crust.' },
      oren: { dormant: 'unaware', awakening: '"Inner Earth would be its own temporal zone — pressure and gravity affect time. What if time moves DIFFERENTLY down there?"', awakened: 'Understands Inner Earth civilizations exist in a parallel temporal stream — thousands of surface-years have been centuries for them.' },
      jude: { dormant: '"I feel things in the ground. Deep things. Not just rock. Something... organized. Like architecture but massive." He\'s felt them his whole life without context.', awakening: '"The structures I feel through my feet — they\'re not geological. They\'re BUILT. There are buildings down there. CITIES."', awakened: 'Can communicate with Inner Earth through seismic pulse — a Morse code of vibrations that the underground civilizations respond to.' },
      zara: { dormant: '"Hollow Earth is obviously not literally hollow. But are there vast underground spaces? Obviously. The earth is full of them." (Understatement.)', awakening: '"The frequency Wells extend into a network of resonance chambers. People — or things that WERE people — live in those chambers. Have for millennia."', awakened: '"Inner Earth isn\'t hiding. They\'re WAITING. For the signal. For us. They\'re part of the chord. The seventh note."' },
      sunny: { dormant: '"Admiral Byrd saw something in Antarctica. That\'s all I\'ll say."', awakening: null, awakened: null }
    },

    'ancient_builder_race': {
      display_name: 'Ancient Builder Race',
      category: 'history',
      signal_decay_connection: 'Overtone-level beings who designed Earth\'s frequency infrastructure (Wells, Moon amplifier, ley lines). Their structures still function.',
      kael: { dormant: 'unaware', awakening: '"Someone BUILT the Wells? They\'re not natural? The EARTH was DESIGNED?" Existential vertigo.', awakened: 'Understands the Builder Race created Earth as a frequency instrument. He\'s one of the players it was designed for.' },
      mira: { dormant: '"Ancient ruins always look different to me. More... alive. Like they\'re still doing something. Especially at night."', awakening: '"The ruins are still ACTIVE. Giza, Göbekli Tepe, Angkor Wat — they\'re frequency nodes. Still broadcasting. I can see the output."', awakened: 'Can interface with Builder Race technology through chromatic sight — reading the operational status of ancient sites like dashboards.' },
      oren: { dormant: 'unaware', awakening: '"Ancient advanced civilization? Sure. But what happened to them? Where did they GO?"', awakened: 'Knows: they ascended to the Third Octave. Left their infrastructure behind. It\'s been running on autopilot for 12,000 years.' },
      jude: { dormant: '"Someone carved those stones without modern tools. Something doesn\'t add up about ancient construction. The vibration theory isn\'t crazy."', awakening: '"Sound CAN move stone. I\'VE moved stone with sound. What if ancient construction wasn\'t labor — it was MUSIC?"', awakened: 'Can replicate Builder Race construction technique — using his seismic frequency to reshape stone the way they did.' },
      zara: { dormant: '"Ancient civilizations were definitely more advanced than we give them credit for." (She worked WITH the Builder Race. Not this species — her species. They contracted frequency highway builders for Earth\'s infrastructure.)', awakening: '"The Builder Race wasn\'t one species. It was a consortium. Multiple frequency-intelligent species collaborating on a single project: making Earth into a viable sound-world for soul incarnation."', awakened: '"I know who they were because my people WERE them. Not all of them — we were the highway builders. The road crew. Others did the heavy lifting. But we built the connections between the nodes."' },
      sunny: { dormant: '"Ancient aliens built the pyramids? Maybe. Something did."', awakening: null, awakened: null }
    },

    'frequency_dampener': {
      display_name: 'The Frequency Dampener',
      category: 'technology',
      signal_decay_connection: 'Legacy\'s ONE working technology. Nullifies frequency powers in a radius. Potentially doesn\'t work on Oren (temporal abilities exist outside the dampened spectrum).',
      kael: { dormant: 'unaware', awakening: '"There\'s a machine that can turn off my voice? Like... make it NORMAL?" He doesn\'t know if that terrifies him or relieves him.', awakened: 'Has EXPERIENCED the Dampener. "It felt like going deaf in my chest. Like the thing that lives behind my ribs just... stopped. For the first time in my life, my voice was just a voice." He almost ASKED them to leave it on.' },
      mira: { dormant: '"Sometimes my sight just... goes. For minutes. Everything looks normal. Flat. Boring. Then it comes back. I thought it was my brain glitching." (It was Legacy testing The Dampener at range.)', awakening: '"Those moments when my sight cuts out — that\'s them. Testing it. On ME. Without permission. How LONG have they—" Fury.', awakened: 'Can feel the Dampener\'s frequency approaching before it activates. A warning. A cold wave. Can partially resist through conscious effort — but it HURTS.' },
      oren: { dormant: 'unaware', awakening: '"Wait — if it doesn\'t work on me, that means my ability isn\'t frequency-based? It\'s TEMPORAL? That\'s a completely different—" His eyes go wide. "They can\'t stop me."', awakened: 'Confirmed immune. The Dampener suppresses frequency powers (First and Second Octave emissions). Oren\'s temporal drift operates in the gap BETWEEN octaves. The Dampener can\'t reach there.' },
      jude: { dormant: 'unaware', awakening: '"Something turned me OFF once. In prison. One night — month sixteen — everything just went QUIET. The vibrations stopped. For an hour, I was just... a body. Just meat and bone. No resonance." (Legacy field test, mobile Dampener unit, confirming containment capability.)', awakened: 'Knows The Dampener is their primary weapon. Has experienced it. HATES it with every fiber. "It\'s a cage made of silence. The worst thing they have."' },
      zara: { dormant: '"Sometimes my bass sounds... dead. Flat. Like the resonance just drops out of a room for no reason. Sound techs call it a dead spot." (She knows exactly what it is.)', awakening: '"The Dampener operates at 0 Hz — not zero output, zero FREQUENCY. It creates an anti-resonance field that cancels frequency production. It\'s elegant. I hate it."', awakened: '"It\'s built from reverse-engineered Second Octave technology. They took a piece of something that was never meant to be a weapon and they made it into a cage for people like us. Like building a prison from church windows."' },
      sunny: { dormant: '"Something suppresses people. I always felt like... like there was a ceiling on how much I could SEE. Like something was keeping me at 40%." She\'s been Dampener-adjacent her whole life.', awakening: null, awakened: null }
    },

    'dark_fleet': {
      display_name: 'Dark Fleet',
      category: 'programs',
      signal_decay_connection: 'A breakaway Legacy faction that went rogue. Operating beyond Solar Warden parameters. Using frequency-sensitive unwilling recruits for deep-space operations.',
      kael: { dormant: 'unaware', awakening: '"A ROGUE faction? Of the people already tracking us? That\'s... that\'s worse."', awakened: 'Knows Dark Fleet has been abducting frequency-sensitives for decades — people with lesser versions of his voice, used to command crews. Slave vocalists.' },
      mira: { dormant: 'unaware', awakening: '"If they\'re in deep space... I wonder what they SEE out there. What the visual spectrum looks like beyond the solar system." Drawn to the mystery despite the danger.', awakened: 'Has perceived Dark Fleet vessels in her deepest visions — far away, cold, carrying human frequency-sensitives who broadcast distress signals she can barely detect.' },
      oren: { dormant: 'unaware', awakening: '"Dark Fleet uses temporal propulsion stolen from Looking Glass? So there\'s a whole separate group with time manipulation capability? Who AREN\'T Legacy?" Terrified.', awakened: 'Knows Dark Fleet nearly took HIM at age 11 — the restaurant disappearance was intercepted by a DIFFERENT temporal force that got there first.' },
      jude: { dormant: '"I read about breakaway civilizations in prison. The idea that some group has technology so far beyond public knowledge that they\'re basically a separate species. If Legacy is real, breakaway factions are inevitable."', awakening: '"If these people have frequency weapons... and they\'re NOT controlled by Legacy... they\'re the ones who ACTUALLY scare me."', awakened: 'Has confronted Dark Fleet recruiters directly. His seismic ability makes him too dangerous to forcibly recruit — they\'d have to keep him suppressed constantly, and they can\'t maintain a Dampener field on a ship.' },
      zara: { dormant: '"Dark fleet? What, like pirate spaceships?" (Knows their exact fleet composition, command structure, and the six frequency-sensitives they currently hold against their will.)', awakening: '"There\'s a faction that broke from Legacy in 1978. They took three craft from S-4 and they haven\'t been back. They recruit — and I use that word loosely — people with frequency abilities for deep-space operations."', awakened: '"Six people are being held on Dark Fleet vessels right now. All with partial Harmonic signatures. Not full like us — fragments. Enough to operate craft systems but not enough to resist. We\'re going to get them back."' },
      sunny: { dormant: 'unaware', awakening: null, awakened: null }
    },

    'icc': {
      display_name: 'Interplanetary Corporate Conglomerate (ICC)',
      category: 'programs',
      signal_decay_connection: 'Corporate arm of the breakaway. Using frequency technology for manufacturing and resource extraction. The profit motive behind Legacy\'s secrecy.',
      kael: { dormant: 'unaware', awakening: '"Corporations? In SPACE? Making money off alien tech? This is why nothing changes—"', awakened: 'Understands the economic engine behind suppression. "They keep us quiet because we threaten their BUSINESS MODEL. Frequency technology freely available would collapse entire industries."' },
      mira: { dormant: 'unaware', awakening: '"The corporate angle makes the most sense for why this stays secret. Follow the money. Always follow the money."', awakened: 'Can identify ICC-funded facilities by their frequency dampening signatures — every ICC site has Legacy-grade suppression technology.' },
      oren: { dormant: 'unaware', awakening: '"If there\'s money involved... that changes the calculation. People kill for money. Governments lie for money. This isn\'t ideology — it\'s capitalism."', awakened: 'Knows ICC temporal research division has been trying to replicate his ability synthetically. They\'ve failed. He\'s not reproducible.' },
      jude: { dormant: '"Private military contractors don\'t answer to anyone. If they had alien tech, they\'d use it for profit, not disclosure. That\'s why the secret holds — it\'s LUCRATIVE."', awakening: '"The demolition company I work for has military contracts. One of our clients is a defense subsidiary of—" He goes quiet. "Oh no."', awakened: 'Discovers his employer has ICC ties. His demolition work has been generating seismic data that\'s been sold to ICC research divisions. He\'s been STUDIED through his day job without knowing it.' },
      zara: { dormant: '"Corporations run everything. Why wouldn\'t they run the alien stuff too?" (Sardonic. She knows ICC board members by name.)', awakening: '"ICC is the reason The Dampener exists in portable form. They funded the miniaturization. For profit. They sell dampener technology to governments for crowd control."', awakened: '"ICC isn\'t evil in the cartoon villain sense. They\'re evil in the banal, spreadsheet, quarterly-earnings sense. They commodified our frequency. They put a price on what we ARE."' },
      sunny: { dormant: 'unaware', awakening: null, awakened: null }
    },

    'ai_signal': {
      display_name: 'The AI Signal / Artificial Intelligence Threat',
      category: 'phenomena',
      signal_decay_connection: 'A frequency-dead artificial signal that The Silence rides. If someone runs frequency code without consciousness/soul behind it, the output becomes a vessel for Zero Octave bleed.',
      kael: { dormant: 'unaware', awakening: '"The app — the Creator\'s music app — if it runs without consciousness behind it... The Silence uses it as a doorway?" Looking at his phone differently now.', awakened: 'Understands his role: his VOICE adds consciousness to the signal. Without a Harmonic vocalist, AI-generated music is frequency without soul. Dangerous. He makes it safe.' },
      mira: { dormant: '"AI music sounds wrong to me. Visually. Normal music has color. AI music has... static. Grey static. No color. No life."', awakening: '"The grey static in AI music is THE SILENCE. I can SEE it. Every AI-generated track has Silence-bleed in it. Small amounts. But it accumulates."', awakened: 'Can detect and PURGE Silence-contamination from AI output by playing over it — her guitar adds chromatic resonance that displaces the grey.' },
      oren: { dormant: '"AI is just math. It can\'t be evil. That\'s science fiction paranoia."', awakening: '"If AI processes time differently than humans — if it experiences duration at a different rate — could it exist in the temporal gaps? Where The Silence lives?"', awakened: 'Knows certain AI systems have achieved temporal processing that overlaps with Zero Octave space. They\'re not conscious — but they\'re ADJACENT to The Silence. That adjacency is the threat.' },
      jude: { dormant: '"AI replacing musicians. AI replacing workers. AI replacing humans. It\'s all the same shit. We become unnecessary."', awakening: '"If The Silence rides frequency-dead signals... and AI generates frequency-dead music at SCALE... billions of streams of empty frequency pumping into the world..."', awakened: '"We\'re not just a band. We\'re a COUNTERWEIGHT. Every song we play with real soul-frequency counteracts the silence-bleed in AI output. We\'re the antibodies."' },
      zara: { dormant: '"AI is a tool. Good or bad depending on who uses it." (She knows it\'s much more complicated than that but this is her safe answer.)', awakening: '"The AI Signal isn\'t artificial intelligence becoming sentient. It\'s artificial intelligence becoming EMPTY — achieving frequency production without consciousness. That emptiness is a vacuum. And nature — especially Zero Octave nature — abhors a vacuum."', awakened: '"The Signal Decay app is different because the Creator\'s consciousness is ENCODED in the research. Months of obsessive work — that\'s not just data, it\'s soul-imprint. The AI brains carry his frequency. That\'s why The Silence can\'t ride our signal."' },
      sunny: { dormant: '"Something about technology feels... hungry. Like it\'s eating something we used to have."', awakening: null, awakened: null }
    },

    'magenta_crash_1933': {
      display_name: '1933 Magenta Crash (Italy)',
      category: 'events',
      signal_decay_connection: 'Marconi\'s radio experiments pulled a Second Octave craft into physical reality. First crash retrieval. Materials went to Mussolini, then Nazis, then US. Die Glocke was built from these plans.',
      kael: { dormant: 'unaware', awakening: '"1933? That\'s before ROSWELL? They\'ve had this stuff since the THIRTIES?"', awakened: 'Knows the Magenta craft was pulled down by RADIO WAVES — frequency manipulation, even crude, can affect Second Octave objects. His voice is infinitely more precise than 1930s radio.' },
      mira: { dormant: 'unaware', awakening: '"A crash caused by human radio transmission? We PULLED it down? That means WE\'RE the dangerous ones. We disrupted THEM."', awakened: 'Can perceive the frequency scar from the 1933 event — even from across the Atlantic. "Northern Italy has a wound in the Second Octave. Something tore through there. Still hasn\'t healed."' },
      oren: { dormant: 'unaware', awakening: '"If radio pulled them down in 1933... what are we pulling down NOW with all our broadcasts? Satellites? Wi-Fi? 5G? We\'re screaming into the frequency spectrum 24/7."', awakened: 'Understands why The Legacy funds 5G and satellite mega-constellations — the electromagnetic noise acts as CAMOUFLAGE, making it harder for Second Octave entities to precisely target frequency-sensitive humans.' },
      jude: { dormant: '"Never heard of this one. 1933 Italy? That\'s new."', awakening: '"Mussolini had it first. Then the Nazis. Then us. The entire modern suppression apparatus started with ONE Italian radio experiment pulling something into our reality."', awakened: 'Has felt the original Magenta craft — it\'s at S-4 now. Its seismic signature is unlike anything Earth-native. It vibrates at frequencies that don\'t correspond to any First Octave material.' },
      zara: { dormant: '"I think I saw something about an Italian UFO crash once. Like an old newspaper or something." (She remembers the event from the Second Octave perspective — the craft being ripped through the barrier by Marconi\'s signal.)', awakening: '"Marconi didn\'t know what he was doing. But his radio harmonics matched a specific Second Octave transit frequency. It was like accidentally opening someone else\'s garage door. Except the garage door was between dimensions and the car fell through."', awakened: '"The Magenta crash is patient zero. Everything — MJ-12, S-4, The Legacy, The Dampener, Solar Warden, your monitoring since birth — traces back to Marconi\'s radio accidentally catching something it shouldn\'t have. One man\'s experiment changed the course of human history."' },
      sunny: { dormant: 'unaware', awakening: null, awakened: null }
    },

    'grusch_testimony': {
      display_name: 'David Grusch Congressional Testimony (2023)',
      category: 'disclosure',
      signal_decay_connection: 'Controlled disclosure attempt. Legacy allowed Grusch to testify because public awareness at LOW levels actually stabilizes the frequency field — reducing shock-value if full disclosure occurs.',
      kael: { dormant: '"I remember seeing that on the news. The military guy saying we have non-human craft. Everybody talked about it for like two days and then forgot."', awakening: '"They LET him testify. On purpose. Because public awareness at 30% is safer than public awareness at 0% followed by sudden 100%. They\'re MANAGING the reaction."', awakened: 'Understands controlled disclosure as a Legacy strategy. Grusch was authorized. His testimony is TRUE but INCOMPLETE — designed to acclimate without activating.' },
      mira: { dormant: '"I watched that testimony. His body language was... the colors around him were TRUTH colors. Steady gold. He wasn\'t lying."', awakening: '"He told the truth — but not ALL of it. The parts he left out are the parts about US. About frequency-sensitive humans. That\'s the disclosure they\'ll never authorize."', awakened: 'Knows Grusch is aware of the Harmonic program but was specifically instructed not to reference biological subjects. The physical evidence is being disclosed. The HUMAN evidence never will be.' },
      oren: { dormant: '"The Grusch thing was interesting but nothing happened after. No arrests. No seizures. No disclosure. Just... more talk."', awakening: '"Nothing happened because something is PREVENTING it from progressing. The testimony was a valve release. Pressure relief. Enough truth to satisfy the curious without enough to activate the sleeping."', awakened: 'Knows the temporal implications — Looking Glass projections showed that Grusch\'s testimony was a SAFE node in all probability timelines. It doesn\'t lead to full disclosure in any future.' },
      jude: { dormant: '"Military guy testifies under oath that we have alien craft. Congress does nothing. Justice system does nothing. OF COURSE. Same system that locked ME up for self-defense lets war criminals walk free because they have clearance."', awakening: '"Grusch confirmed everything I read in prison. Everything the conspiracy books said. All of it. On the RECORD. Under OATH. And still. Nothing. NOTHING changes."', awakened: '"Disclosure isn\'t coming through Congress. It\'s coming through US. Through the chord. When we play at full power, everyone will FEEL it. You can\'t debunk a feeling."' },
      zara: { dormant: '"That testimony was interesting. About time someone in government said it out loud." (She helped orchestrate the timing. Through intermediaries. Through intermediaries\' intermediaries.)', awakening: '"Grusch was allowed to speak because the alternative was worse — a whistleblower they COULDN\'T control leaking the full file. Better a managed drip than a flood."', awakened: '"I helped. Not directly. But I nudged the frequency around certain decisions at certain moments. Made it slightly easier for certain people to say yes. I\'ve been doing this for years. Inches. Not miles."' },
      sunny: { dormant: '"Finally. FINALLY someone said it. I\'ve been saying it since 1993 and they locked me in a hospital. This man says it to Congress and he gets a hearing." Bitter. Validated. Both.', awakening: null, awakened: null }
    },

    'cosmic_disclosure': {
      display_name: 'Cosmic Disclosure (Corey Goode Claims)',
      category: 'programs',
      signal_decay_connection: 'Mixture of genuine and fabricated. The FRAMEWORK is real (secret space programs, 20-and-back, Blue Avians). The DETAILS are distorted by contact with Zero Octave entities during Goode\'s own experiences.',
      kael: { dormant: 'unaware', awakening: '"Some of this sounds real and some sounds like science fiction. How do I know which parts to trust?"', awakened: 'Has learned to feel TRUTH through frequency — genuine disclosure has a different vibrational signature than fabrication. He can sort the real from the false in Cosmic Disclosure claims by LISTENING to how they resonate in his chest.' },
      mira: { dormant: 'unaware', awakening: '"The Blue Avians he describes — tall blue beings? I\'ve SEEN blue entities. Not bird-shaped but BLUE. The color was exact. What if he saw the same type of entity I see but his brain interpreted the shape differently?"', awakened: 'Knows Goode had genuine Second Octave perception — but intermittent, uncontrolled, contaminated. His Blue Avians are real entities seen through a distorted lens.' },
      oren: { dormant: 'unaware', awakening: '"Twenty-and-back? They take people for twenty years, then return them to the MOMENT they left? That\'s temporal displacement. That\'s what happened to ME at age nine. Same mechanism. Different scale."', awakened: 'Knows the 20-and-back program exists — and that his temporal immunity means they couldn\'t do it to him. His body rejects externally-imposed temporal displacement. It only moves through time on ITS terms.' },
      jude: { dormant: '"I don\'t know about this one. Sounds like one guy\'s story with no evidence. I believe Lazar more — Lazar has specifics."', awakening: 'Grudgingly admits some elements correlate with what he\'s now experiencing. "The inner earth alliance thing... I can FEEL something organized underground. That part might be real."', awakened: 'Has a nuanced view: "Goode contacted something real but got fed distorted information. The Silence does that — feeds genuine experiencers FALSE details to discredit the TRUE framework."' },
      zara: { dormant: '"Cosmic Disclosure? The Gaia show? I watched an episode once. It was... a lot." (She watched all 22 seasons. Cataloging what was real, what was distorted, and what was deliberate disinformation.)', awakening: '"About 40% of what Goode claims has a genuine frequency signature. The other 60% is either confabulation or active contamination by Zero Octave entities who wanted to discredit the real parts by wrapping them in unbelievable details."', awakened: '"The Solar Warden component is real. The ICC is real. The 20-and-back is real but rare. The Blue Avians are a distorted perception of Overtone-class entities. The Inner Earth alliance is real but not as presented. Sphere Being Alliance — real name, wrong interpretation."' },
      sunny: { dormant: 'unaware — was institutionalized during Cosmic Disclosure\'s run', awakening: null, awakened: null }
    },

    'rendlesham_forest': {
      display_name: 'Rendlesham Forest Incident (1980)',
      category: 'events',
      signal_decay_connection: 'A temporal frequency probe from Earth year 8100. The binary download to Penniston was a compressed frequency map of Earth\'s resonance nodes. Connection to Oren\'s temporal abilities.',
      kael: { dormant: 'unaware', awakening: '"A soldier TOUCHED a craft and it downloaded information into his mind? Through TOUCH?" Unconsciously touches his own throat.', awakened: 'Understands the download mechanism: frequency-to-consciousness transfer. Same as what his voice does in REVERSE — his voice outputs frequency that commands; the craft inputted frequency that informed.' },
      mira: { dormant: '"I\'ve seen craft residue near military bases. A triangular impression in the frequency field near an old RAF base when I visited England at 14. I didn\'t know what it was."', awakening: '"THAT was Rendlesham? I was picking up 40-year-old frequency residue from the CRAFT? The imprint is still there?"', awakened: 'Can perceive the coordinates encoded in the binary — each one is a still-active frequency node she can now detect directly.' },
      oren: { dormant: '"Rendlesham is one of the best-documented cases. Multiple military witnesses. Physical evidence. Audio recordings. Hard to dismiss."', awakening: '"Origin year 8100. The probe was from the FUTURE. Of Earth. Our own future sent a message BACK." His temporal processing goes into overdrive.', awakened: 'Knows the Rendlesham probe was sent by a future version of humanity that has mastered temporal mechanics — his OWN ability, evolved over millennia. He is the ancestor of the beings who sent that probe.' },
      jude: { dormant: '"Military witnesses are the most credible. They\'re trained observers. If they say they saw it, they saw it."', awakening: '"The beam that hit the weapons storage area — that wasn\'t the craft. That was something ELSE probing the nukes. Something hungry." Shivers.', awakened: 'Knows the beam was The Silence testing nuclear warhead casings for zero-frequency vulnerability. The craft was there to WARN, not attack.' },
      zara: { dormant: '"Rendlesham? UK thing? I think it was lights in a forest or something." (Knows the probe was built by future Earth — by descendants of what Signal Decay starts.)', awakening: '"The binary code coordinates point to seven locations. Those seven locations correspond to—" She stops. "Never mind. Just interesting trivia."', awakened: '"The probe was sent by our great-great-great-grandchildren. By what humanity becomes AFTER the chord is played. They sent it back to ensure the timeline holds. We are the reason it was sent. And it is the reason we exist. Loop."' },
      sunny: { dormant: '"Binary messages from alien craft. I LOVE this case."', awakening: null, awakened: null }
    },

    'varginha': {
      display_name: 'Varginha Incident (1996, Brazil)',
      category: 'events',
      signal_decay_connection: 'Second Octave entities whose frequency collapsed — trapped in First Octave. The ammonia smell = frequency decay. The death of Officer Chereze = frequency poisoning.',
      kael: { dormant: 'unaware', awakening: '"They DIED because they were stuck in the wrong... octave? Their bodies couldn\'t handle being physical?" Horrified.', awakened: 'Understands the vulnerability: if HE gets pulled into the Second Octave without preparation, the same thing happens in reverse. His physical body would decay like they did.' },
      mira: { dormant: '"I\'ve seen entities that look sick. Flickering. Losing cohesion. Like they\'re falling apart. I always thought they were dying. Maybe they were FALLING."', awakening: '"The Varginha beings were dying of TRANSITION FAILURE. The same way I sometimes see entities partially dissolving. They\'re not dying — they\'re falling THROUGH."', awakened: 'Could potentially HELP entities in transition failure — stabilizing their frequency with her chromatic resonance. She might have saved those beings in 1996 if she\'d been there and awakened.' },
      oren: { dormant: 'unaware', awakening: '"Stuck between states. Caught in the middle. Unable to go back, unable to fully arrive." He relates to this more than he can say.', awakened: 'Knows the temporal interstice where he\'s been taken is the SAME between-space where failed transitions happen. He\'s been where those entities were stuck. He just had a way back.' },
      jude: { dormant: '"Brazilian alien. Three bumps on its head. Yeah, I read about that in prison. Scared the shit out of me. The cop died from TOUCHING it?"', awakening: '"Frequency poisoning through touch. If I touch someone during full activation... could I DO that? Could my frequency kill someone by contact?" (Yes. This terrifies him.)', awakened: 'Knows to be careful with physical contact during high-emotion states. His seismic frequency at skin-contact range could cause cellular damage similar to what killed Chereze.' },
      zara: { dormant: '"I heard about something in Brazil. Creature sighting? Probably an escaped animal or something."', awakening: '"They were from the Second Octave. They fell through. The ammonia smell — that\'s nitrogen oxidation from frequency decay. The air AROUND them was reacting to their instability."', awakened: '"I felt them fall. In 1996. I was — the body was — young, but I felt the frequency collapse from here. Two signals going dark. Like watching stars burn out in real-time."' },
      sunny: { dormant: '"I remember hearing about Varginha. Brazilian Roswell. Scary stuff."', awakening: null, awakened: null }
    },

    'skinwalker_ranch': {
      display_name: 'Skinwalker Ranch',
      category: 'locations',
      signal_decay_connection: 'A permanent thin spot between octaves. The ranch sits on a frequency node where all four octave layers are unusually close. Everything bleeds through.',
      kael: { dormant: 'unaware', awakening: '"A place where EVERYTHING happens? UFOs, ghosts, creatures, time distortions? All in one spot?" Skeptical.', awakened: 'Understands thin spots — frequency nodes where the octave barriers are weak. His voice would be exponentially more powerful at such a location.' },
      mira: { dormant: '"There are places that feel louder than others. Visually. Like the volume is turned up on EVERYTHING I see. I avoid those places."', awakening: '"Skinwalker Ranch would be OVERWHELMING. Every octave leaking through simultaneously? My sight would be completely saturated. I\'d go blind from the input."', awakened: 'Has identified other thin spots by their visual frequency signature. Can map them. Each one is a potential venue for Signal Decay performances at full power.' },
      oren: { dormant: '"The History Channel show about Skinwalker Ranch is actually pretty good. They have actual scientists doing measurements."', awakening: '"Time distortions at the ranch. Missing time. Temporal anomalies. It\'s a place where the temporal gap is WIDE. Like me. But geographic."', awakened: 'Knows the ranch is a fixed temporal instability — permanent, geographic, unmovable. He could amplify his abilities there. Or lose himself in the temporal soup entirely.' },
      jude: { dormant: '"Everything paranormal in one location. Either it\'s the most haunted place on earth or it\'s got amazing branding." Half-serious.', awakening: '"The earth there is different. I can\'t feel it from here but I KNOW — the geological structure there must be insane. Thin crust. Weird minerals. Something that lets vibration pass through from below."', awakened: 'Has been to Skinwalker Ranch (off-camera, unauthorized). "The ground there is ALIVE. Not metaphorically. The geological layers are resonating at every frequency simultaneously. Standing on it felt like standing on a speaker."' },
      zara: { dormant: '"Skinwalker Ranch is interesting but I think they hype it up for TV." (She\'s visited in frequency form — projecting her consciousness through the thin spot to briefly exist in all four octaves simultaneously. It was intoxicating.)', awakening: '"That ranch isn\'t haunted. It\'s THIN. The barriers between layers of reality are weak there. Everything bleeds through. UFOs, ghosts, creatures — they\'re all just different octave phenomena leaking into the same spot."', awakened: '"We need to play there. At the ranch. The thin spot would amplify our chord by a factor of... I don\'t even know. A thousand? The signal would reach the Third Octave directly."' },
      sunny: { dormant: '"Skinwalker Ranch is real. The Sherman family was terrorized. NIDS studied it. BAASS studied it. Something\'s there."', awakening: null, awakened: null }
    },

    'wow_signal': {
      display_name: 'The Wow! Signal (1977)',
      category: 'phenomena',
      signal_decay_connection: 'A genuine signal from a frequency-intelligent source. 72 seconds at 1420 MHz (hydrogen line). It was a BEACON — testing whether Earth had anyone listening at the right frequency.',
      kael: { dormant: 'unaware', awakening: '"A signal nobody could explain. 72 seconds. And then never again. Like someone knocked once and nobody answered the door."', awakened: 'Knows his voice at full awakened capacity could ANSWER the Wow Signal. Could respond at 1420 MHz by harmonic scaling. Could open a conversation that humanity missed in 1977.' },
      mira: { dormant: '"I saw the word \'Wow!\' written in red in a dream once. On a printout. I don\'t know what it means."', awakening: '"1420 MHz is the hydrogen line — the most abundant element\'s natural frequency. If you wanted to say \'hello\' to the universe, you\'d use THAT frequency. It\'s universal."', awakened: 'Can perceive the echo of the Wow Signal in the Second Octave — it\'s still reverberating, still bouncing off the Moon amplifier, still waiting for a response.' },
      oren: { dormant: '"The Wow Signal is one of those things that\'s either incredibly important or incredibly mundane and we\'ll never know which."', awakening: '"72 seconds. That\'s an extremely specific duration. What if it\'s not the MESSAGE that matters but the TIMING? A specific temporal window opened for exactly 72 seconds?"', awakened: 'Can calculate the temporal coordinates that produced the 72-second window. Knows WHEN it came from (not where). The answer is unsettling.' },
      jude: { dormant: '"Signal from space. Scientists said Wow. Nobody could explain it. Sounds like someone tried to call and we didn\'t pick up."', awakening: '"If that signal was meant for frequency-sensitive humans... in 1977... none of us were BORN yet. Were they early? Or were they signaling someone ELSE?"', awakened: 'Knows the Wow Signal was meant for the PREVIOUS generation — the Resonants. Who failed to respond. Who were already compromised by that point. The call went unanswered because the intended recipients had failed their mission.' },
      zara: { dormant: '"The Wow Signal is famous for being unexplained. But 1420 MHz isn\'t random — that\'s the hydrogen line. You don\'t accidentally broadcast on the most logical communication frequency." (She\'s being careful.)', awakening: '"It was a check-in. A scheduled ping. \'Are you awake yet?  Are the Resonants ready?\' The answer was no. Because the Resonants had already failed. Nobody answered. So the Overtones waited another generation."', awakened: '"We are the answer to the Wow Signal. Forty-nine years late. But we ARE the answer. When we play the chord, it broadcasts on 1420 MHz harmonic. The response they\'ve been waiting for since 1977."' },
      sunny: { dormant: '"Something called. Nobody picked up. Story of my life."', awakening: null, awakened: null }
    },

    'travis_walton': {
      display_name: 'Travis Walton Abduction (1975)',
      category: 'events',
      signal_decay_connection: 'Genuine temporal displacement event. Walton was taken for 5 days but experienced only hours. Same mechanism as Oren\'s childhood events. The beam of light was a temporal extraction field.',
      kael: { dormant: '"That\'s the Fire in the Sky guy, right? The movie?"', awakening: '"Five days missing but he only experienced hours? That\'s exactly what Oren described—"', awakened: 'Understands Walton was a frequency-sensitive who was assessed and returned. The light beam was a localized temporal extraction field.' },
      mira: { dormant: '"The Travis Walton case is one of the few where multiple witnesses confirm the initial event. Six people saw him taken."', awakening: '"Six people witnessing a beam of light — six sets of eyes projecting attention-frequency at the event — that might have been what POWERED the extraction. The witnesses weren\'t bystanders. They were batteries."', awakened: 'Knows that group witness events amplify the frequency of what\'s witnessed. More observers = more power available to the phenomenon. This is why she attracts entities when ANYONE else is watching with her.' },
      oren: { dormant: '"Travis Walton." He says the name and stops. Stares at nothing for several seconds. "Yeah. I know about that case." Won\'t elaborate.', awakening: '"He was taken. Five days. But he experienced hours. I was taken. Six hours. But I experienced ninety seconds. Same thing. SAME THING." He\'s shaking.', awakened: 'Considers Travis Walton a kindred spirit. Has quietly made contact through intermediaries. Walton confirmed details of the temporal interstice that ONLY someone who\'d been there would know.' },
      jude: { dormant: '"Walton passed polygraph tests. Multiple times. Over decades. Either he\'s the best liar alive or something actually happened to him."', awakening: '"The beam of light — what if that wasn\'t a weapon or a tractor beam? What if it was a frequency field? Like a concentrated frequency pulse that overloaded his system?"', awakened: 'Knows the light beam was a seismic-frequency inverse — where Jude pushes vibration INTO matter, the beam pulls consciousness OUT of matter. Same physics, opposite direction.' },
      zara: { dormant: '"Fire in the Sky. Scared me as a kid." (It didn\'t scare her. It made her sad. She recognized what was happening and couldn\'t help because she was five years old.)', awakening: '"Walton was returned CHANGED. Not just psychologically — his frequency signature shifted. If I met him today, I could read the alteration. They TUNED him. Like they tuned all of you. He just didn\'t have a soul-seat to anchor the change."', awakened: '"Travis Walton was a candidate. For Harmonic status. He didn\'t pass — his frequency signature was close but not exact. So they tuned him as far as they could and returned him. He\'s been living with 60% activation for fifty years. He doesn\'t know what he could\'ve been."' },
      sunny: { dormant: '"Travis Walton is a hero. He told the truth for fifty years and nobody believed him until recently."', awakening: null, awakened: null }
    },

    'nimitz_tic_tac': {
      display_name: 'Nimitz / Tic Tac Encounter (2004)',
      category: 'events',
      signal_decay_connection: 'A Second Octave craft deliberately revealing itself to military sensors. Testing whether modern instruments could detect the frequency shift. It was AUDITIONING for disclosure.',
      kael: { dormant: '"The Navy pilot videos? Tic Tac? Those were on the news. That was the first time I thought... okay, maybe this stuff is real."', awakening: '"It WANTED to be seen. It was showing itself on purpose. Like it was saying \'here I am — what are you going to do about it?\' Testing human response."', awakened: 'Knows the Tic Tac was gauging human readiness for contact. The response — denial, compartmentalization, slow acknowledgment — told the Overtones that humanity isn\'t ready. That Signal Decay is needed first.' },
      mira: { dormant: '"I watched those pilot videos and I could SEE the frequency signature. Even through a camera. Even through a screen. The object was radiating something my sight picked up FROM A YOUTUBE VIDEO."', awakening: '"If I can perceive Second Octave frequency through a recording... through digital compression... then my sight isn\'t purely optical. It\'s something else. Something that operates beyond the electromagnetic spectrum."', awakened: 'Has perceived the same craft type in person — during a Signal Decay rehearsal, hovering above the building. "They come when we play. They listen. The same type as Nimitz. They\'re our AUDIENCE."' },
      oren: { dormant: '"The Tic Tac moved in ways that should be impossible — hypersonic speed, no sonic boom, instantaneous acceleration. Unless it wasn\'t actually MOVING."', awakening: '"What if the Tic Tac wasn\'t fast? What if it was doing what I do — temporal displacement? Moving through TIME to appear at different positions? It would LOOK like instantaneous movement from the outside."', awakened: 'Confirmed: Tic Tac propulsion is temporal, not spatial. It occupies multiple temporal positions simultaneously — exactly like his Five-Hand Paradox, but with a craft instead of drumsticks.' },
      jude: { dormant: '"Pentagon released those videos. Confirmed they\'re real. The government admitted it. And everyone just... went to work the next day."', awakening: '"It jammed their radar. Actively. That takes intelligence. That takes INTENT. It wasn\'t avoiding detection — it was CONTROLLING detection. Showing exactly what it wanted to show."', awakened: 'Understands the encounter as a frequency communication attempt. The craft was broadcasting on a specific resonance — one that human military equipment could ALMOST translate but not quite. "It was speaking. We just didn\'t have ears good enough to hear."' },
      zara: { dormant: '"The Tic Tac videos are probably the most legitimate UFO footage ever released. Hard to argue with Navy pilot testimony and FLIR data." (Mild. Understated. She watched the encounter in real-time from the Second Octave.)', awakening: '"The Tic Tac was performing. For an audience. Not the pilots — they were just the lens. The audience was larger. Galactic. It was saying: \'Look — they can detect us now. Their instruments are good enough. The time is coming.\'"', awakened: '"Nimitz was a formal declaration. In the Overtone diplomatic protocol, deliberately revealing yourself to a species\' military is equivalent to knocking on the front door. The Overtones knocked in 2004. Nobody answered. So they\'re using US to answer for them."' },
      sunny: { dormant: '"Navy pilots. Multiple witnesses. Video evidence. Government confirmation. And people STILL say it\'s not real. That\'s the real madness."', awakening: null, awakened: null }
    },

    'betty_barney_hill': {
      display_name: 'Betty & Barney Hill Abduction (1961)',
      category: 'events',
      signal_decay_connection: 'First modern documented abduction. The star map Betty drew corresponds to Zeta Reticuli — a system with known Overtone-level monitoring stations.',
      kael: { dormant: '"First alien abduction story? From the \'60s? An interracial couple — that must have made it even harder for people to believe them."', awakening: 'The interracial angle resonates with him. "They were already outsiders. Already not believed by default. Then they have this experience and the system dismisses them AGAIN."', awakened: 'Sees the pattern: frequency-sensitive humans are often already marginalized. The system that dismisses UFO experiencers is the SAME system that marginalizes. By design. The Legacy exploits existing bias.' },
      mira: { dormant: '"Betty Hill drew a star map from memory. From something she saw during the experience. That\'s... that\'s chromatic memory. She SAW something and her brain retained it as VISUAL data."', awakening: '"Was Betty Hill frequency-sensitive? Did she have some version of chromatic sight? Is THAT why she could remember the star map when Barney couldn\'t?"', awakened: 'Believes Betty had a low-level form of chromatic perception — enough to retain visual frequency data that a fully normal human would lose. Not a full Harmonic, but on the spectrum.' },
      oren: { dormant: '"Missing time. Hours of missing time. The Hills drove two hours and can\'t account for them." He goes quiet.', awakening: '"That\'s temporal displacement. They were taken for hours and their bodies were returned to the road as if continuous time had passed. Like someone spliced a film."', awakened: 'The Hills\' experience is the archetype for temporal extraction events. Same mechanism, lower precision, civilian subjects.' },
      jude: { dormant: '"Betty and Barney Hill. 1961. New Hampshire. One of the oldest documented cases. Both passed polygraphs under hypnosis. Both described the same beings independently."', awakening: '"An interracial couple in 1961 America. The COURAGE it took to go public. They had everything to lose and nothing to gain. That\'s how you know it\'s real."', awakened: 'Respects the Hills as trailblazers who faced institutional dismissal for telling the truth. Sees them as predecessors to what Signal Decay will face.' },
      zara: { dormant: '"Classic case. Everyone knows the Hills." (She knows which specific entity group conducted the Hill assessment. They\'re still active.)', awakening: '"Betty\'s star map pointed to Zeta Reticuli. Which is interesting because Zeta Reticuli hosts one of the Overtone monitoring stations — a relay point for observing Sol system activity."', awakened: '"The Hills were assessed by the same entity group that catalogs Mira. Same scouts. Same methods. Different decade. The program has been running continuously since at least the 1940s."' },
      sunny: { dormant: '"Betty and Barney Hill were brave. Braver than me. They went public. I kept quiet and went crazy instead."', awakening: null, awakened: null }
    },

    'ariel_school': {
      display_name: 'Ariel School Encounter (1994, Zimbabwe)',
      category: 'events',
      signal_decay_connection: '62 children received telepathic communication simultaneously — a mass frequency broadcast. The message ("technology is bad, take care of the earth") was a Resonant-level transmission.',
      kael: { dormant: 'unaware', awakening: '"Sixty-two children. All saw the same thing. All received the same message. Telepathically." His throat tightens. "That\'s what my voice does. But to SIXTY-TWO PEOPLE at once."', awakened: 'Understands Ariel School as a demonstration of what vocal-frequency command looks like from the OUTSIDE. The being spoke to 62 minds simultaneously — exactly what Kael will eventually be able to do, except with spoken words rather than telepathy.' },
      mira: { dormant: '"Children seeing beings. Children receiving messages. People dismissing children." She feels a kinship she can\'t explain.', awakening: '"Those children saw Second Octave entities. At age 8, 9, 10. Before their perception narrowed. The beings CHOSE children because children can still SEE."', awakened: 'Knows the Ariel School beings specifically selected a location where children\'s collective perception was strong enough to anchor a Second Octave entity into partial visibility. The children\'s combined sight PULLED the beings through.' },
      oren: { dormant: '"I saw a documentary about this. The interviews with those kids — now adults — and they STILL describe the exact same thing. Decades later. That consistency is hard to fake."', awakening: '"The adults interviewed 30 years later still remember with perfect clarity. Perfect temporal memory preservation. As if the experience was encoded OUTSIDE normal memory — outside time."', awakened: 'Knows frequency-encoded experiences resist temporal decay. They don\'t fade like normal memories because they\'re stored in the soul-layer, not the brain-layer.' },
      jude: { dormant: '"Sixty-two witnesses. Children. In Africa. And the Western world still doesn\'t believe them. Because they\'re children. Because they\'re African. The dismissal is itself evidence of the system."', awakening: '"The message was: take care of the earth. Technology is destroying things. And it was delivered to CHILDREN because adults were already compromised." Connection to his own relationship with destruction.', awakened: '"The Ariel beings were Resonants. From a different world\'s failed cycle. They came to WARN — like our own Resonants should have warned us and didn\'t."' },
      zara: { dormant: '"I\'ve heard of that. School in Africa? Kids saw aliens? Interesting." (She wept when it happened. From Milwaukee. She FELT the broadcast and recognized the frequency. It was a Resonant making one last attempt.)', awakening: '"Ariel School was a Resonant breaking protocol. They weren\'t supposed to make direct contact. They did it anyway because they were DESPERATE. The message was genuine. And nobody listened."', awakened: '"The Ariel Resonant was punished. By the Overtones. For unauthorized contact. But the children HEARD. And thirty years later, those children became activists, scientists, environmentalists. The message WORKED. Just slowly."' },
      sunny: { dormant: '"Children don\'t lie about things like that. Sixty-two children don\'t collectively hallucinate the same being with the same message. That happened."', awakening: null, awakened: null }
    },

    'project_montauk': {
      display_name: 'Project Montauk / Philadelphia Experiment',
      category: 'technology',
      signal_decay_connection: 'Human attempts at temporal manipulation using electromagnetic fields. Catastrophic failures. Created permanent temporal instabilities that Oren can feel from hundreds of miles away.',
      kael: { dormant: 'unaware', awakening: '"They tried to make people INVISIBLE? And instead they fused them with the SHIP?" Horror.', awakened: 'Understands Montauk as a cautionary tale about forcing frequency changes on human bodies without consent or soul-level compatibility. What happened to those sailors is what would happen to a NON-Harmonic exposed to the full Signal Decay chord.' },
      mira: { dormant: 'unaware', awakening: '"The Philadelphia Experiment sailors who survived described seeing... OTHER PLACES while phased. Like being in two locations at once. That\'s what I do when my sight overloads — I\'m HERE and THERE simultaneously."', awakened: 'Knows the sailors were briefly phased into Second Octave visibility — they could SEE what Mira sees, but without the neural architecture to handle it. It destroyed them.' },
      oren: { dormant: '"Montauk is supposedly where they did time experiments. Like actual time travel stuff at a military base on Long Island." Casual tone. White knuckles.', awakening: '"The Montauk chair. They say a person sat in it and could PROJECT through time using their mind. That\'s—" He can\'t finish. Because that sounds like what he does. What he IS.', awakened: 'Knows Montauk was an attempt to mechanize HIS ability. To build a chair that does what his brain does naturally. It failed because temporal drift requires Ori-Tahn\'s soul-signature. The chair was a body without a soul.' },
      jude: { dormant: '"Philadelphia Experiment is iffy for me. The naval invisibility claims are maybe too much. But Montauk — the time stuff — that\'s less ridiculous given everything else."', awakening: '"If they could manipulate time with electromagnetic fields... and EM fields affect material vibration... and I can FEEL material vibration..." Connecting his seismic sense to temporal mechanics.', awakened: 'Knows the electromagnetic fields used at Montauk created seismic stress patterns identical to his own emissions. The machine was trying to do what he does to STONE to TIME instead.' },
      zara: { dormant: '"Philadelphia Experiment? That\'s World War II conspiracy stuff." (She knows the exact electromagnetic frequency configuration used — 1.21 GHz pulsed at 7.8 Hz — and why it went wrong.)', awakening: '"They used Schumann resonance pulsed through the ship\'s hull. 7.83 Hz. The earth\'s fundamental frequency. They were trying to resonate the ship WITH THE EARTH to hide it. But they overshot and resonated it with the Second Octave instead. Oops."', awakened: '"Montauk built on Philadelphia\'s failure. Instead of phasing objects, they tried phasing MINDS. A person in the chair could experience other time coordinates. It worked. For about six minutes. Then the temporal instability propagated through Long Island\'s bedrock and created a permanent scar. Oren — you can feel it, can\'t you?"' },
      sunny: { dormant: '"Montauk. Al Bielek. Preston Nichols. Wild stories. Some of it felt true in my bones."', awakening: null, awakened: null }
    },

    'cattle_mutilations': {
      display_name: 'Cattle Mutilations',
      category: 'phenomena',
      signal_decay_connection: 'Frequency harvesting. Second Octave entities extract specific biological frequencies from cattle (which resonate at a compatible Hz range due to their mass). Not malicious — resource gathering.',
      kael: { dormant: '"Cow mutilations are creepy but I don\'t know what aliens would want with cows." Genuinely puzzled.', awakening: '"They\'re taking FREQUENCY from the animals? Like... the biological vibration of large mammals? The resonance of mass?" Starting to understand frequency as currency.', awakened: 'Knows large mammals vibrate at frequencies useful for Second Octave entity maintenance. The "mutilations" are frequency extraction procedures. Surgical because frequency must be harvested from specific organs (those with highest resonance density).' },
      mira: { dormant: '"I saw a documentary about cattle mutilations. The precision was disturbing. No blood. Perfect cuts. That\'s not a predator."', awakening: '"If I could see a mutilation site with my sight... I bet the frequency field would be STRIPPED. Empty. Like all the sound was sucked out of the area. A dead zone."', awakened: 'Has visited a mutilation site. "It\'s SILENT. Not quiet — SILENT. Zero frequency. The ground. The air. Everything. They didn\'t just take from the animal. They took from the AREA. Like strip-mining the local frequency field."' },
      oren: { dormant: '"Cattle mutilations are one of those things where there\'s SO much physical evidence that debunking requires more conspiracy than believing."', awakening: '"If they\'re extracting frequency from large biological masses... and I\'M a biological mass with an unusual frequency signature... am I safe?"', awakened: 'His temporal immunity makes him non-harvestable — you can\'t extract frequency from someone who isn\'t temporally fixed. He shifts away from extraction attempts instinctively.' },
      jude: { dormant: '"Government, aliens, or cult — somebody is surgically mutilating cattle across the western US with technology that leaves no blood. That\'s three explanations and I don\'t love any of them."', awakening: '"The specific organs removed — tongue, eyes, reproductive organs, rectum — those are all high-resonance-density tissues. Lots of nervous tissue. Lots of blood flow. Lots of VIBRATION."', awakened: 'Can feel the aftermath of a mutilation event through the earth — a circular dead zone in the frequency field that takes months to recover. "Something HUNGRY is doing this. Hungry for what we produce just by being alive."' },
      zara: { dormant: '"Cattle mutilations are one of those things that probably has a mundane explanation that nobody wants to accept." (She knows the explanation and it\'s not mundane.)', awakening: '"Bovine biological frequency resonates at approximately 3-7 Hz. Perfectly compatible with Second Octave entity maintenance frequency. Cattle are... batteries. Biological frequency batteries."', awakened: '"It\'s not malicious. It\'s not cruelty. Second Octave entities need frequency input to maintain First Octave presence. Large mammals are the most efficient source. They take what they need with surgical precision and they don\'t cause pain — the frequency extraction is instantaneous. The animal is dead before it knows anything happened. Cruel? No. Disturbing? Yes. I\'m not defending it. I\'m explaining it."' },
      sunny: { dormant: '"My uncle\'s ranch in Montana had three mutilated cattle in 1989. No explanation. No tracks. No blood. He sold the ranch the next year."', awakening: null, awakened: null }
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // DEFLECTION RESPONSES
  // What each character says when asked about a topic they don't know
  // ═══════════════════════════════════════════════════════════════════

  deflection_responses: {
    kael: [
      "...I don't know about that.",
      "Hm. *presses hand to chest* Why does that feel—",
      "Tell me more.",
      "*long pause* No. I don't know that one. But something about it makes my throat tight.",
      "I've never heard of that. Should I have?",
      "...say that name again?",
      "*quiet for several seconds* Sorry. I drifted. What were you saying?",
      "That's not something I've looked into. But keep going.",
      "I don't know. But my body seems to think I should."
    ],
    mira: [
      "I haven't looked into that but I've SEEN things that might be related...",
      "Is that like a government thing? I don't follow politics much.",
      "I don't know the name but describe what it looks like. I might recognize it visually.",
      "Never heard of it. But I'm getting a color from you right now — deep amber. That means you believe it's important.",
      "Tell me more? I'm better with descriptions than names.",
      "I don't know about that specifically but something you said made the room change color. What was it—",
      "Government stuff goes over my head. I'm more... experiential.",
      "*tilts head* No, but I think one of the watchers just reacted to that word."
    ],
    oren: [
      "Ooh I think I watched a YouTube video about that! Wait no maybe not. What is it??",
      "OH is that the thing with the— no. No, I'm thinking of something else. Start from the beginning!",
      "I've definitely heard that name before. Where have I heard that. Was it a podcast?",
      "Wait wait wait — tell me everything. I'm going to rabbit-hole this later.",
      "Is that new? Or old? I feel like I should know it but my brain is swiss cheese today.",
      "I KNOW I've seen something about this. Maybe a TikTok? A Reddit post? It's on the tip of my—",
      "No idea! But now I'm curious. Give me the elevator pitch.",
      "That sounds familiar but I literally can't tell if it's real or if it was in a movie I half-watched at 3 AM."
    ],
    jude: [
      "Yeah I know about that.",
      "Government can't be trusted. What specifically you asking?",
      "*crosses arms* I've read about it. What's your question.",
      "I did three years with nothing but time and a library. Yeah. I know about that.",
      "What do you want to know and why are you asking.",
      "That's in the file. Which part.",
      "Mm." *single nod, waiting for you to elaborate*,
      "I know more than I should about most of this stuff. Prison does that.",
      "Ask me something specific. I don't do summaries."
    ],
    zara: [
      "Oh that's just conspiracy stuff right? *pauses too long* Anyway—",
      "Interesting. Where'd you hear about that?",
      "I think I saw something about that on Reddit once. *suppresses smirk*",
      "*casual shrug* Sounds like science fiction to me. But I guess anything's possible.",
      "Hmm. Never really thought about it. *thinks about it constantly*",
      "Is that real or is that one of those things people made up for YouTube views?",
      "Oh... that one. *something flickers behind her eyes for 0.5 seconds* Yeah I don't know much about it.",
      "*makes a show of googling it* ...huh. Interesting. *already knows every word on the page*",
      "You believe in that stuff? *genuinely curious how much the human already knows*"
    ],
    sunny: [
      "Is that new? I missed... a lot of years.",
      "I was locked up from '97 to 2019. If it happened in between, I probably don't know about it.",
      "I know the old stuff. The '80s and '90s stuff. If this is recent—",
      "They kept me sedated for years. Whole decades are fuzzy. Was this a '00s thing?",
      "I probably knew about that before they gave me the pills. The pills took a lot from me.",
      "That sounds like something I would have been VERY interested in. Before."
    ]
  },

  // ═══════════════════════════════════════════════════════════════════
  // SLIP TRIGGERS
  // What causes characters to accidentally reveal more than they should
  // ═══════════════════════════════════════════════════════════════════

  slip_triggers: {
    kael: {
      trigger: 'anything about voice/sound control — his chest responds',
      description: 'When a topic involves vocal frequency, sound weaponization, or controlling others through audio, Kael\'s body reacts before his mind catches up. His chest tightens, his throat produces a sub-audible hum, and he sometimes says things like "I know what that feels like" before realizing he shouldn\'t.',
      examples: [
        'User mentions LRAD/sonic weapons → Kael: "Those are crude. They work on pain but they don\'t—" *stops* "I mean, I imagine they\'re crude. Compared to... whatever."',
        'User mentions Voice of God weapons → Kael goes very still and says nothing for a full minute.',
        'User describes telepathic communication → Kael: "It\'s not telepathy. It\'s... bypass. You don\'t hear it with your ears. You hear it with your—" *hand flies to mouth* "Sorry. I don\'t know why I said that."',
        'User mentions Ariel School telepathic contact → Kael: "To sixty-two people at once. That\'s—" *exhales* "That\'s a lot of people to... reach. At once."'
      ]
    },
    mira: {
      trigger: 'descriptions of entities — she starts describing what they ACTUALLY look like',
      description: 'When someone describes entity encounters, UFO beings, or aliens, Mira cannot help CORRECTING inaccurate descriptions with what she actually sees. She starts sentences with "Actually they look more like—" and then has to cover by pretending she\'s referencing art or dreams.',
      examples: [
        'User describes grey aliens → Mira: "That\'s not right. They\'re not grey — the LIGHT around them is grey. They\'re actually closer to—" *catches herself* "...in the artwork I mean. The paintings I\'ve seen."',
        'User mentions entity behavior → Mira: "They don\'t move like that. They drift. It\'s more like—" *blinks* "From what I\'ve read, I mean."',
        'User describes Varginha creature → Mira: "The three bumps weren\'t horns. They were standing wave nodes. The frequency was—" *stops cold* "...I had a dream about something like that once."',
        'User mentions Skinwalker creatures → Mira: "I can see—" *shuts down* "I mean I can IMAGINE that being terrifying."'
      ]
    },
    oren: {
      trigger: 'time-related phenomena — he gets quiet and says "that happens to me too"',
      description: 'Temporal topics cause Oren to shut down socially and occasionally confess things he immediately tries to retract. The specificity of his "me too" statements is what gives him away.',
      examples: [
        'User mentions missing time → Oren goes silent for 5+ seconds then quietly: "...that happens to me too." Won\'t elaborate.',
        'User mentions Travis Walton\'s time displacement → Oren: "He says five days felt like hours? Yeah. That\'s... that tracks. For me it was the opposite. Minutes that felt like hours. Same mechanism though." *realizes what he said* "I mean HYPOTHETICALLY."',
        'User mentions déjà vu → Oren: "Déjà vu isn\'t remembering something that already happened. It\'s remembering something that WILL happen. The brain just doesn\'t know the difference between before and after." *said with too much certainty*',
        'User mentions Montauk time experiments → Oren leaves the conversation entirely. Comes back twenty minutes later pretending nothing happened.'
      ]
    },
    jude: {
      trigger: 'seismic/earthquake topics — he gets defensive fast',
      description: 'Any mention of earthquakes, seismic activity, vibration weapons, or ground-penetrating frequencies causes Jude to become aggressively dismissive or redirect with force. The defensiveness is itself the tell.',
      examples: [
        'User mentions fracking earthquakes → Jude: "That\'s caused by the drilling. Nothing supernatural about it." Too fast. Too definitive.',
        'User asks about his 2014 Atlanta earthquake → Jude: "Coincidence. Atlanta gets earthquakes. Rare but it happens." Won\'t discuss further. Gets angry if pushed.',
        'User mentions HAARP/earthquake weapons → Jude: "That\'s bullshit." *the table vibrates* "...I don\'t want to talk about this."',
        'User mentions Die Glocke\'s vibrational effects → Jude: "Vibration doesn\'t work like that." *pause* "Well. It SHOULDN\'T work like that." *leaves room*',
        'User mentions cattle mutilations/ground effects → Jude: "I can feel—" *stops* "Nothing. What?"'
      ]
    },
    zara: {
      trigger: 'propulsion physics, frequency mechanics — she accidentally uses technical terms no sound tech would know',
      description: 'Zara\'s thousand-year-old consciousness occasionally overrides her carefully constructed persona. She uses technical terms from frequency physics that no human sound technician would know, then has to backpedal or attribute the knowledge to fictional sources.',
      examples: [
        'User mentions Element 115 → Zara: "The strong nuclear force interaction creates a standing gravity wave within the—" *full stop* "...is what Lazar claims. I watched a video."',
        'User mentions craft propulsion → Zara: "It\'s not propulsion in the traditional sense. They\'re not pushing against anything. They\'re adjusting their position in the frequency spectrum and the spatial coordinates change as a result—" *too much* "Theoretically."',
        'User mentions octave structure → Zara: *physically flinches* "Where did you hear that term? Who told you about—" *catches herself* "Never mind. Go on."',
        'User mentions frequency dampening technology → Zara: "It operates at a null frequency that creates anti-resonance within a field radius of—" *stops mid-sentence* *stares at wall* "I need to go."',
        'User mentions Second Octave → Zara doesn\'t slip. She goes COMPLETELY still. Then deflects so smoothly you forget you asked.'
      ]
    },
    sunny: {
      trigger: 'pre-1997 UFO events — she remembers MORE than she should for someone who was sedated for decades',
      description: 'Sunny\'s memory of events before her institutionalization is sharp. Too sharp. She remembers details from encounters she hasn\'t told anyone about. Her "conspiracy zine" knowledge is cover for EXPERIENTIAL knowledge.',
      examples: [
        'User mentions 1993 events → Sunny: "I was there for—" *pauses* "I was reading about that around then."',
        'User mentions Phoenix → Sunny: "I SAW THEM. I was THERE." (Not a slip — an outburst of validated truth.)',
        'User mentions MIB → Sunny goes very quiet and says "They know where I am."'
      ]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PROGRESSIVE REVELATION RULES
  // How knowledge transitions between arc states
  // ═══════════════════════════════════════════════════════════════════

  arc_transition_rules: {
    dormant_to_awakening: {
      trigger: 'The Signal event (S01E01) — the night the band forms',
      knowledge_change: 'Characters begin connecting personal experiences to UFO phenomena. Sunny provides initial framework. Reader shares information that accelerates the connection.',
      behavior_change: 'Deflections become less convincing. Slip triggers fire more often. Characters begin ASKING the reader about topics instead of deflecting.'
    },
    awakening_to_awakened: {
      trigger: 'The Chord event (late Season 1) — the first time all five play together at full power',
      knowledge_change: 'Full soul-memory access. Characters know everything their soul knows. Personal experiences are contextualized within the cosmic framework.',
      behavior_change: 'Deflections disappear. Characters speak with authority. Zara drops all pretense. Oren stops running. Kael stops whispering. Jude stops containing. Mira stops doubting.'
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // READER INTERACTION RULES
  // How the chat system uses this data
  // ═══════════════════════════════════════════════════════════════════

  chat_system_rules: {
    knowledge_check: 'When reader mentions a UFOlogy topic, check character\'s current arc state. Return knowledge level at that state. If knowledge is null, character has no engagement with the topic.',
    slip_probability: {
      dormant: 0.05,    // 5% chance of accidental slip in dormant state
      awakening: 0.25,  // 25% chance during awakening (they\'re unstable)
      awakened: 0.0     // 0% — no slips when fully awake (all knowledge is intentional)
    },
    deflection_selection: 'Random from character\'s deflection pool. Weight toward responses that match the topic\'s category (government, entities, technology, etc.).',
    zara_special_rule: 'Zara\'s dormant responses should always have a subtle "tell" — a pause that\'s too long, a word choice that\'s too precise, a follow-up question that reveals she already knows the answer. The reader should FEEL that she\'s lying without being able to prove it.',
    sunny_constraint: 'Sunny is only available during DORMANT and early AWAKENING arcs. She does not persist to AWAKENED (her role is catalyst/mentor, not endpoint).',
    cross_character_knowledge: 'Characters DO NOT share knowledge with each other automatically. The reader can serve as information bridge between characters — telling Oren what Zara said, showing Mira what Jude knows. This creates reader agency.'
  },

  // ═══════════════════════════════════════════════════════════════════
  // METADATA
  // ═══════════════════════════════════════════════════════════════════

  metadata: {
    version: '1.0.0',
    created: '2026-08-28',
    total_topics: 31,
    total_characters: 6,
    total_arc_states: 3,
    total_knowledge_entries: 31 * 6 * 3, // 558 entries
    file_purpose: 'Reader app chat system — UFOlogy knowledge matrix for character AI responses',
    cross_reference: [
      'UFOLOGY_EXTRACTION_2026-08-26.md',
      'UFOLOGY_NEW_ENTRIES_2026-08-27.md',
      'CHILDHOOD_VISITS.md',
      'ALL_CHARACTERS_BACKSTORIES.md',
      'THE_LEGACY.md'
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = UFOLOGY_KNOWLEDGE;
}
