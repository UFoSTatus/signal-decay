// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — RELATIONSHIP DYNAMICS ENGINE
// ═══════════════════════════════════════════════════════════════════════════════
// Pairwise relationship states, romantic dynamics, family webs, supporting cast
// connections, group trust matrices, event triggers, the Zhao factor, and
// loyalty predictions — all tracked across three arc states.
//
// Arc States: DORMANT → EMERGING → AWAKENED
//   dormant  = pre-band or early band formation, powers latent
//   emerging = band forming, powers manifesting, secrets surfacing
//   awakened = full cosmic awareness, masks off, final configuration
//
// Usage: Referenced by character_chat.html, story_engine.js, and the
//        reader app's relationship map visualization.
//
// Created: 2026-09-02
// Source Truth: character_engines.js, supporting_cast_engine.js,
//              ALL arc files, LENA_KOVAC.md, MOM_KOVAC.md, ZHAO_FULL_ARC.md
// ═══════════════════════════════════════════════════════════════════════════════

const RELATIONSHIP_DYNAMICS_ENGINE = {

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1: PAIRWISE RELATIONSHIP STATES
  // ═══════════════════════════════════════════════════════════════════════════
  // All 10 band-member pairs across 3 arc states.
  // Each state includes: trust_level, closeness, tension, dynamic,
  //   what_changed, breaking_point, unbreakable_bond
  // ═══════════════════════════════════════════════════════════════════════════

  pairwise: {

    // ─────────────────────────────────────────────────────────────────────────
    // 1. KAEL ↔ MIRA — The Quiet Believer and the Haunted Seer
    // ─────────────────────────────────────────────────────────────────────────
    kael_mira: {
      pair: ["kael", "mira"],
      names: ["Kael Voss", "Mira Chen"],
      soul_names: ["Kel-Voss", "Mir-Xen"],
      instruments: ["Vocals", "Lead Guitar"],
      core_bond: "Two people who have been hiding an impossible sense their entire lives. He hears what nobody else hears; she sees what nobody else sees. The recognition between them is instant and bone-deep.",
      musical_connection: "Voice and lead guitar — the melody line divided between two instruments. When Kael sings over Mira's riffs, the frequency alignment is so precise that listeners report feeling the sound in their chest rather than their ears.",

      dormant: {
        trust_level: 55,
        closeness: 40,
        tension: 35,
        dynamic: "cautious-recognition",
        description: "Strangers who feel inexplicably familiar. Kael senses something off about the quiet girl with the guitar — she watches empty corners the way he watches people's mouths, checking for danger. Mira notices Kael's deliberate silence and recognizes a fellow hider. Neither has said anything real to the other yet.",
        what_kael_sees: "A girl who flinches at things nobody else reacts to. Her jokes are armor. Her eyes dart to doorways and ceilings. She is performing 'fine' the way he performs 'quiet.' He sees through it instantly because he does the same thing.",
        what_mira_sees: "A man whose silence isn't awkward — it's CHOSEN. He speaks in minimums but every word lands with weight she can't explain. When she mentioned seeing something in the corner of the rehearsal space, he just nodded. No questions. No 'are you sure?' Just acceptance. She almost cried.",
        tension_source: "Kael can't read Mira the way he reads everyone else — her emotional state is obscured by the chromatic noise of her sight. This makes him watchful. Mira is terrified of getting close to anyone because the entities drove away the last person she cared about.",
        what_changed: "Nothing yet. They're still in the gravitational pull phase — circling each other, noticing, not speaking.",
        breaking_point: "If Kael ever said 'maybe you're imagining it' or 'have you tried medication,' Mira would shut down completely and never trust him again. But he won't. He'd never say that to anyone.",
        unbreakable_bond: "The moment of first belief. When Mira said 'there's something in the corner' and Kael just nodded — that microsecond of unconditional acceptance created something that can't be unmade. He believed her without evidence. Nothing erases that."
      },

      emerging: {
        trust_level: 78,
        closeness: 70,
        tension: 45,
        dynamic: "protective-unspoken-attraction",
        description: "Kael has become Mira's safest person — the only human whose silence asks nothing of her. Mira has become the person Kael is most protective of, in a way that surprises him. The attraction is developing beneath layers of avoidance on both sides.",
        what_kael_sees: "She's brave in a way that makes his chest tight. She carries a weight that would crush most people and she makes JOKES about it. When her sight overwhelms her and she goes distant, his entire body orients toward her like a compass needle. He positions himself between her and whatever she's seeing. He doesn't know he's doing this. Everyone else notices.",
        what_mira_sees: "His silence is the safest space she has ever been in. She doesn't have to perform 'fine' around him. She can be exhausted and scared and weird and he just stays. She's developing feelings she refuses to examine because the last boy she liked, the entities drove away. She won't risk that with Kael.",
        tension_source: "The unspoken attraction creates a charged silence between them that the rest of the band can feel. Oren has mentioned it. Jude has said nothing but positions himself to give them space. Zara watches with ancient recognition. Neither Kael nor Mira will name it because naming it makes it real and real means risking it.",
        what_changed: "The band gave them context. They're no longer two isolated people hiding — they're two members of something larger, and within that structure, they've found each other. Kael's voice + Mira's guitar created a resonant lock that forced proximity.",
        breaking_point: "If Kael used his voice on Mira — even accidentally, even with good intentions — it would shatter everything. She would never know if her feelings were her own. And he knows this. It's why he's more careful with his voice around her than anyone else.",
        unbreakable_bond: "The 3 AM calls. Mira texts at 3 AM when the entities are bad. Kael responds in seconds — not hours, seconds. He shows up. He sits on her kitchen floor. He doesn't say anything. He just stays. The entities get quieter when he's there. Neither of them has discussed why."
      },

      awakened: {
        trust_level: 95,
        closeness: 90,
        tension: 20,
        dynamic: "soul-bound-partners",
        description: "The unspoken has been spoken — not in declarations but in the thousand small acts of showing up. Kael and Mira are the band's emotional core, the voice and the sight, the two who sense what nobody else can. Whether this becomes romantic is less important than what it already is: the deepest mutual trust either has ever experienced.",
        what_kael_sees: "The woman who was haunted her whole life now commands what haunted her. Her confidence doesn't erase her vulnerability — it transforms it. She still flinches sometimes. His body still goes taut. But now she turns toward the flinch instead of away from it. He's never been prouder of anyone.",
        what_mira_sees: "The man who chose silence for a decade now speaks with quiet authority that reshapes rooms. His 'I'm good' sounds different — it means it now. He's still the quietest person she knows, but the silence is warm instead of defensive. He chose to stay. Every day, he chose to stay.",
        tension_source: "The only remaining tension: Kael will never be fully certain that Mira's feelings aren't influenced by his frequency. Mira will never be fully certain the entities don't affect her perception of him. They've both accepted this uncertainty as the price of being what they are.",
        what_changed: "Full cosmic awareness. They know their soul names. They know the frequency web between them — that Kel-Voss and Mir-Xen have been connected across iterations. This doesn't make the human feelings less real. If anything, it makes them more precious — because they're CHOOSING this version.",
        breaking_point: "Nothing remaining can break this. Even death wouldn't — they'd find each other in the next iteration. This is the relationship in the story that is genuinely unbreakable.",
        unbreakable_bond: "Everything. The belief. The silence. The kitchen floor at 3 AM. The frequency lock when they play. The way his voice steadies when she's in the room. The way her sight clears when he speaks. They are each other's proof that the impossible is survivable."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 2. KAEL ↔ OREN — The Stillness and the Storm
    // ─────────────────────────────────────────────────────────────────────────
    kael_oren: {
      pair: ["kael", "oren"],
      names: ["Kael Voss", "Oren Malik"],
      soul_names: ["Kel-Voss", "Ori-Tahn"],
      instruments: ["Vocals", "Drums"],
      core_bond: "Kael's chosen silence and Oren's compulsive noise should clash. Instead, they fit together like a lock and key. Oren fills the space Kael leaves empty, and Kael grounds the space Oren can't stop spinning through.",
      musical_connection: "Vocals and drums — the front and the foundation. Kael's voice sets the emotional direction; Oren's rhythm holds the temporal structure. When they lock in, the audience feels physically held.",

      dormant: {
        trust_level: 45,
        closeness: 35,
        tension: 20,
        dynamic: "unexpected-comfort",
        description: "Oren talks enough for six people and Kael finds it restful. The chatter takes the pressure off — Kael doesn't have to perform, fill silences, or be anything other than present. Oren doesn't need responses to feel connected. His monologue IS the connection.",
        what_kael_sees: "A warm, soft, relentlessly present person who doesn't require anything from him. Oren's energy should be exhausting — it's the opposite. It's like sitting in sunlight. He notices Oren's time-skips and files them away without mention.",
        what_oren_sees: "A magnetic presence that calms his nervous system. Kael's silence should trigger anxiety (silence = time-skip territory), but Kael's specific silence is GROUNDING. It's chosen. It doesn't demand filling. Oren has noticed he never time-skips when Kael is in the room.",
        tension_source: "Almost none. This is the lowest-tension pair in the early stages. The only friction: Oren sometimes pushes for emotional sharing that Kael isn't ready to give.",
        what_changed: "Nothing yet — they're just beginning to orbit each other.",
        breaking_point: "If Kael ever used his voice to shut Oren down — told him to be quiet with the Command behind it — Oren would feel it as the ultimate rejection. Being silenced is Oren's deepest fear because silence is where the time-skips live.",
        unbreakable_bond: "Oren's discovery that his time-skips stop near Kael. This is the kind of data that creates loyalty beyond reason."
      },

      emerging: {
        trust_level: 75,
        closeness: 72,
        tension: 25,
        dynamic: "brotherhood-protective",
        description: "Kael has become quietly protective of Oren in a way that's almost paternal. When Oren time-skips in front of others and comes back confused, Kael is always there — not making it a thing, not drawing attention, just anchoring him back with a look or a word.",
        what_changed: "The band formed. Oren's warmth became necessary — he's the emotional engine that keeps everyone connected. Kael sees this and protects it.",
        tension_source: "Oren wants Kael to TALK about things. Kael wants to SHOW through action. Their love languages are different and this creates small, recurring friction.",
        breaking_point: "If Kael pulled away during Oren's worst time-skip episode — left the room, chose distance over presence — Oren would interpret it as abandonment.",
        unbreakable_bond: "The temporal stabilization. Kael's frequency literally stabilizes Oren's time-drift. This isn't metaphorical — it's physical. They need each other in a way that transcends preference."
      },

      awakened: {
        trust_level: 92,
        closeness: 88,
        tension: 10,
        dynamic: "anchored-brotherhood",
        description: "Kael speaks; time holds still. Oren plays; time obeys. The vocalist and the drummer are the emotional and temporal spine of the band. Kael has learned to say more; Oren has learned to sit in silence. They've met in the middle.",
        what_changed: "Full understanding of the soul connection. Kel-Voss and Ori-Tahn have been companions across iterations. The warmth Oren felt from day one was recognition, not just chemistry.",
        tension_source: "None that matters. They've resolved the talk-vs-show tension by accepting both languages as valid.",
        breaking_point: "None remaining. This bond is structural.",
        unbreakable_bond: "Oren is the only person who can make Kael genuinely laugh — not the dry half-smirk, but the real one. And Kael is the only person who can make Oren genuinely still. They give each other what they've been missing."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 3. KAEL ↔ JUDE — Two Containers
    // ─────────────────────────────────────────────────────────────────────────
    kael_jude: {
      pair: ["kael", "jude"],
      names: ["Kael Voss", "Jude Okafor"],
      soul_names: ["Kel-Voss", "Jha-Dur"],
      instruments: ["Vocals", "Rhythm Guitar"],
      core_bond: "Two men who contain something enormous and choose restraint every single day. They don't need to talk about it — they can feel it in each other. The mutual recognition is immediate and total.",
      musical_connection: "Vocals and rhythm guitar — the resonant lock. When Kael sings over Jude's chugs, it sounds like they've been playing together for decades from the first note. The frequency alignment between voice and low-register guitar is cosmic in origin.",

      dormant: {
        trust_level: 60,
        closeness: 45,
        tension: 15,
        dynamic: "mutual-recognition",
        description: "Respect. Immediate and total. Two men standing in a room, each aware of the other's containment. They communicate in nods and comfortable silence. When Jude drops a riff and the floor moves, something in Kael's chest responds — not his voice, something deeper.",
        what_kael_sees: "A man who contains something as enormous as what Kael carries. Jude's physical groundedness is the perfect counterweight to Kael's ethereal stillness. There's no posturing between them — just acknowledgment.",
        what_jude_sees: "A man who understands containment. Everyone else either leaks their emotions everywhere or pretends they don't have them. Kael holds his the way Jude holds his — with deliberate, calibrated pressure. Kinship without words.",
        tension_source: "Near-zero. This is the quietest, most stable pair. The only potential friction: both default to silence, which means problems between them could go unaddressed for months.",
        what_changed: "Nothing yet. The lock hasn't been engaged. But both can feel it waiting.",
        breaking_point: "If either one lost control of their power in a way that hurt someone — if Kael's voice overrode a person, or Jude's seismic lock brought down a wall near someone they loved — the other would have to confront them. That confrontation would be the most intense thing either has experienced.",
        unbreakable_bond: "The first time they play together. When Kael finally sings and Jude plays under it, it'll feel like the universe clicking into alignment. That moment creates a bond that predates both of them."
      },

      emerging: {
        trust_level: 82,
        closeness: 70,
        tension: 15,
        dynamic: "brothers-in-containment",
        description: "They've played together. The lock engaged. Neither has words for what happened in that first rehearsal — the way Kael's voice laid over Jude's riff and the room changed. Not the sound — the ROOM. The air got denser. The floor hummed. They looked at each other and both knew: this is what we're for.",
        what_changed: "The musical connection made the soul connection undeniable. They went from respectful strangers to something closer to brothers without passing through friendship — it skipped levels.",
        tension_source: "Jude's protective instinct sometimes clashes with Kael's leadership role. Jude wants to shield the band physically; Kael wants to lead them vocally. Occasionally their containment strategies conflict — Kael says 'step back,' Jude says 'step forward.'",
        breaking_point: "A disagreement about using their combined power. Kael's voice + Jude's seismic lock = a weapon. If one wanted to use it and the other didn't, the band would fracture along that line.",
        unbreakable_bond: "The resonant lock between vocals and rhythm guitar. It's not just musical — it's structural. When they play together, the barrier between First and Second Octave thins. They are the harmonic foundation of everything Signal Decay does."
      },

      awakened: {
        trust_level: 95,
        closeness: 85,
        tension: 8,
        dynamic: "voice-and-foundation",
        description: "Kael is the voice that commands. Jude is the ground that holds. They are the two pillars of the band — everything else is built between them. Their trust is absolute and operates below language.",
        what_changed: "Soul memory integration. Kel-Voss and Jha-Dur have been partners across cosmic cycles. The containment they both practice is an echo of lifetimes spent holding things together.",
        tension_source: "A philosophical difference about force: Kael believes power should never serve self; Jude believes power should serve the people you love, which sometimes means self. This disagreement is productive, not destructive.",
        breaking_point: "Cannot be broken. The resonant lock is permanent.",
        unbreakable_bond: "Everything about their musical connection. It transcends the personal. When Kael and Jude play, the universe adjusts."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 4. KAEL ↔ ZARA — The Observer and the Observed
    // ─────────────────────────────────────────────────────────────────────────
    kael_zara: {
      pair: ["kael", "zara"],
      names: ["Kael Voss", "Zara Kovač"],
      soul_names: ["Kel-Voss", "Za-Rah"],
      instruments: ["Vocals", "Bass"],
      core_bond: "He can't read her. She can read everyone. The tension between these two perceptual realities creates the most complex dynamic in the band.",
      musical_connection: "Vocals and bass — the melody riding on the low end. Bass frequencies carry the voice the way water carries a ship. When Zara's bass locks with Kael's vocals, the sound becomes three-dimensional — the audience doesn't just hear it, they're inside it.",

      dormant: {
        trust_level: 40,
        closeness: 30,
        tension: 50,
        dynamic: "watchful-suspicion",
        description: "Kael can read everyone — body language, micro-expressions, vocal shifts. He reads all of it instantly. Zara gives him NOTHING. Her surface is perfect. And that, more than anything, makes him watch her. She knows things she shouldn't. She's too calm. She moves through the world like she's already seen the ending.",
        what_kael_sees: "A person wearing a flawless mask. Not deception exactly — performance. Every gesture is slightly too controlled, every response slightly too calibrated. She drops wisdom that sounds ancient and then covers with 'I read that somewhere.' He doesn't buy it.",
        what_zara_sees: "The most dangerous observer she's encountered in 25 years. His perceptual capacity approaches hers. He can't name what he sees, but he SEES it — the edges of the mask. She's simultaneously cautious around him and most tempted to reveal herself to him.",
        tension_source: "Kael's inability to read Zara creates unease. Zara's awareness that Kael is watching creates pressure on her performance. They're in a mutual surveillance loop that neither can break without vulnerability.",
        what_changed: "They've met. The tension is established. Neither has blinked.",
        breaking_point: "If Zara lied about something that mattered — not the performance of humanity, but an actual deception that endangered the band — Kael would cut her off completely. Trust, once broken with Kael, does not rebuild.",
        unbreakable_bond: "Not yet formed. This is the pair that takes the longest to build a bond — and the one that, once built, becomes the most strategically powerful."
      },

      emerging: {
        trust_level: 58,
        closeness: 50,
        tension: 55,
        dynamic: "strategic-respect",
        description: "Kael has stopped trying to read Zara and started listening to what she says instead. Her knowledge is too precise, too vast, too OLD for a 25-year-old sound tech. He doesn't know what she is, but he knows she's more than she presents. He's decided to trust the RESULTS rather than the person — her advice is always right, her instincts always sharp.",
        what_changed: "Zara has started revealing more as the others catch up. She's teaching frequency theory, guiding the band's development, making connections that shouldn't be possible. Kael notices all of it. He's building a picture without the final piece.",
        tension_source: "Maximum. Kael knows Zara is hiding something enormous. Zara knows Kael knows. The unspoken acknowledgment sits between them like a loaded weapon. Every conversation is a negotiation conducted in subtext.",
        breaking_point: "If Zara's secret identity endangered Lena, Monique, or anyone in her family — and Kael discovered she'd known the risk and said nothing — his protective instinct would override his strategic patience.",
        unbreakable_bond: "Forming. The musical connection between voice and bass is creating a physical bond that neither can deny. When they play together, Kael's voice travels through Zara's bass frequencies like light through fiber optic — the bass becomes a highway for the command."
      },

      awakened: {
        trust_level: 88,
        closeness: 80,
        tension: 15,
        dynamic: "commander-and-strategist",
        description: "The mask is off. Kael knows what Zara is. The relief of that knowledge transforms their relationship from mutual surveillance into partnership. He speaks; she maps. He commands; she designs the frequency highways his commands travel through. They are the tactical mind and the operational force of the band.",
        what_changed: "Zara revealed her true nature. Kael's reaction: a long silence, then a single nod. Not surprise — confirmation. He'd known something was vast. Now he knows what. The trust that was impossible with the mask is immediate without it.",
        tension_source: "A fundamental disagreement about disclosure. Zara wants to protect humans from knowledge they can't handle. Kael believes people deserve the choice. This mirrors their larger philosophical split: Zara thinks in millennia, Kael thinks in human lifetimes.",
        breaking_point: "If Zara ever tried to use her advanced knowledge to manipulate the band's choices 'for their own good.' Kael's entire identity is about free will — he won't tolerate even well-intentioned override.",
        unbreakable_bond: "She built the highway. He drives it. The frequency architecture Zara constructs carries Kael's voice to places it could never reach alone. They need each other. That need is the bond."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 5. MIRA ↔ OREN — The Broken Birds
    // ─────────────────────────────────────────────────────────────────────────
    mira_oren: {
      pair: ["mira", "oren"],
      names: ["Mira Chen", "Oren Malik"],
      soul_names: ["Mir-Xen", "Ori-Tahn"],
      instruments: ["Lead Guitar", "Drums"],
      core_bond: "SOULMATES. Not romantic — but soulmates. She sees dead people; he loses time. They're both carrying invisible burdens and the relief of being with someone equally weird is palpable.",
      musical_connection: "Lead guitar and drums — the improvisational pair. Mira's playing is spectral and layered; Oren's rhythm bends time. Together they create passages that listeners can't remember clearly afterward, as if the music exists slightly outside normal temporal experience.",

      dormant: {
        trust_level: 50,
        closeness: 45,
        tension: 10,
        dynamic: "instant-kinship",
        description: "The first time they talked, really talked, they both accidentally revealed too much and then both said 'nvm forget I said that' at the same time and then laughed for five minutes straight. They are the same species of disaster.",
        what_mira_sees: "A person who is warm in a way that almost hurts. So open, so genuine, so unguarded. She envies it. How does he just... BE? Without the constant performance? She notices his time-skips before anyone else because she's trained to see anomalies.",
        what_oren_sees: "The only person he's told about the time-skips without joking. She believed him immediately. Of COURSE she did — she sees ghosts. The relief of mutual weirdness is the most intoxicating thing either has felt in years.",
        tension_source: "Almost none. They're too busy being relieved to be tense. The only friction: both deflect with humor, so sometimes real conversations get buried under five layers of self-deprecating jokes.",
        what_changed: "They found each other. That's the entire event.",
        breaking_point: "If either minimized the other's experience — if Mira said 'at least you don't SEE things' or Oren said 'at least your thing doesn't erase TIME' — the competitive comparison of suffering would poison the bond.",
        unbreakable_bond: "3 AM texts. Memes about being disasters. The specific intimacy of two people who text each other at impossible hours because they're both awake, both hiding something, and both unwilling to admit they need someone to know."
      },

      emerging: {
        trust_level: 85,
        closeness: 88,
        tension: 12,
        dynamic: "disaster-soulmates",
        description: "They are each other's emergency contact in every sense. When Mira's entities get loud, she calls Oren. When Oren time-skips, he texts Mira. They've built a private language of check-ins — a specific meme means 'I'm not okay,' a specific emoji means 'I need you to come over.'",
        what_changed: "The band validated both their burdens. They're not crazy — they're EQUIPPED. This shared upgrade from 'broken' to 'chosen' transformed their relationship from mutual commiseration to mutual empowerment.",
        tension_source: "Oren's anxiety about losing people sometimes manifests as smothering Mira, who needs space for her entity encounters. He texts too much when she goes quiet. She pulls away. He panics. She pulls away harder. The cycle takes about 48 hours to resolve.",
        breaking_point: "If Oren's time-drift caused him to miss a moment when Mira genuinely needed him — if she was drowning in an entity encounter and he was temporally absent — the failure wouldn't destroy the friendship, but it would crack the 'I can always count on you' foundation.",
        unbreakable_bond: "The first honest conversation. 'I see dead people.' 'I lose time.' 'Oh thank god it's not just me.' That exchange is the cornerstone. Everything built on it holds."
      },

      awakened: {
        trust_level: 95,
        closeness: 95,
        tension: 5,
        dynamic: "cosmic-twins",
        description: "Mir-Xen and Ori-Tahn — the Weaver and the Timekeeper. Their powers are more complementary than anyone realized: Mira sees across dimensional space; Oren perceives across dimensional time. Together they can navigate reality like a map. They are the band's perceptual system — where Mira sees, Oren times, and together nothing is hidden.",
        what_changed: "Full soul integration revealed they've been finding each other across iterations. The soulmate feeling was recognition, not coincidence.",
        tension_source: "None meaningful. They've resolved the smother/distance cycle by establishing clear protocols. If Mira goes dark for more than 6 hours, Oren can show up. Under 6 hours, he waits.",
        breaking_point: "Functionally impossible. These two have survived each other's worst moments and stayed.",
        unbreakable_bond: "The shared understanding that being 'weird' isn't a flaw — it's a function. They're weird because the universe NEEDS them to perceive differently. This reframe saved both of them."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 6. MIRA ↔ JUDE — The Anchor
    // ─────────────────────────────────────────────────────────────────────────
    mira_jude: {
      pair: ["mira", "jude"],
      names: ["Mira Chen", "Jude Okafor"],
      soul_names: ["Mir-Xen", "Jha-Dur"],
      instruments: ["Lead Guitar", "Rhythm Guitar"],
      core_bond: "After entity encounters, Mira goes floaty — dissociated, cold, barely present. Jude's physical mass, his warmth, his absolute THERENESS anchors her back. He figured this out wordlessly and positions himself next to her after bad episodes.",
      musical_connection: "Lead and rhythm guitar — the dual guitar attack. Mira plays skyward; Jude plays earthward. Their combined frequencies span the entire audible range and several octaves below it. The leads shimmer; the chugs shake the floor.",

      dormant: {
        trust_level: 40,
        closeness: 30,
        tension: 20,
        dynamic: "physical-anchor",
        description: "Mira was intimidated by Jude at first — he's BIG and QUIET and INTENSE. Then she noticed the small things: the glass of water he brings without being asked, the way he moves his bag so she can sit. Gentle. He's a big gentle person who NOTICES things.",
        what_jude_sees: "She's small and brave and she carries a weight that would crush most people and she makes JOKES about it. He respects that. He also sees the moment after the joke — the flash of exhaustion, the way her hands shake slightly.",
        what_mira_sees: "A warm wall. Not figuratively. His body heat and physical presence are literally grounding. After an entity encounter, she gravitates toward him like a plant toward sunlight. He's never asked why. He just lets it happen.",
        tension_source: "Jude's directness can feel overwhelming to Mira's anxiety-driven communication style. He says 'you're not okay' as a statement. She needs to not-be-okay in private before admitting it.",
        what_changed: "First entity encounter in Jude's presence. He felt her go cold — literally felt the temperature drop around her — and without thinking, put his hand on her shoulder. She came back. He didn't remove his hand until she was fully present.",
        breaking_point: "If Jude's seismic power accidentally hurt Mira — even a vibration too strong, a floor crack near her feet — his guilt would be devastating and he'd withdraw completely.",
        unbreakable_bond: "The body-heat anchor. The physical, wordless grounding. He becomes her thereness when she loses hers."
      },

      emerging: {
        trust_level: 75,
        closeness: 72,
        tension: 15,
        dynamic: "guardian-grounding",
        description: "Jude has figured out the pattern: entity encounter → Mira dissociates → he positions himself within two feet → his physical presence (heat, mass, vibration) pulls her back. He's never discussed this with her. They've never acknowledged it verbally. It just happens, every time, like clockwork.",
        what_changed: "The band's rehearsals became the structure. Jude made himself available as her physical anchor consistently enough that it became protocol — unspoken, but protocol.",
        tension_source: "Jude worries about her. He doesn't show it in words, but he tracks her condition the way he tracks building integrity — structurally. When she's having a bad week, he gets more physically present, which can feel claustrophobic.",
        breaking_point: "If Mira told him to stop — said she didn't need his grounding, that she was fine — he'd respect it immediately and the distance would hurt them both.",
        unbreakable_bond: "She leans toward him like gravity. He stays like a wall. Neither questions this."
      },

      awakened: {
        trust_level: 90,
        closeness: 85,
        tension: 8,
        dynamic: "spectrum-partners",
        description: "Mir-Xen sees across dimensional space. Jha-Dur holds material reality together. Between Mira's sight and Jude's grounding, they create a complete system: she identifies the threat, he creates the physical barrier. The Seer and the Foundation.",
        what_changed: "Understanding that Jude's physicality isn't just comfort — it's frequency. His seismic resonance operates at the exact register that counterbalances Mira's dissociative frequency. They're medically complementary.",
        tension_source: "None significant. They've settled into their roles.",
        breaking_point: "Cannot be broken. The anchor is structural.",
        unbreakable_bond: "The fact that his body temperature literally brings her back from the other side. That's not metaphor. That's physics."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 7. MIRA ↔ ZARA — The Seer and the Secret
    // ─────────────────────────────────────────────────────────────────────────
    mira_zara: {
      pair: ["mira", "zara"],
      names: ["Mira Chen", "Zara Kovač"],
      soul_names: ["Mir-Xen", "Za-Rah"],
      instruments: ["Lead Guitar", "Bass"],
      core_bond: "Mira's Chromatic Sight can perceive things about Zara that nobody else can. One day she'll look at Zara and see the real frequency signature — too complex, too layered, too OLD for a 25-year-old human. Zara is simultaneously dreading and craving that moment.",
      musical_connection: "Lead guitar and bass — the harmonic skeleton. Mira provides the upper harmonics, Zara the fundamental frequencies. Together they create the tonal body that Kael's voice inhabits.",

      dormant: {
        trust_level: 35,
        closeness: 30,
        tension: 45,
        dynamic: "uneasy-recognition",
        description: "Zara looks at Mira with recognition. Like she KNOWS what Mira sees. Like she's not surprised by the entities. That's either deeply comforting or deeply unsettling depending on the day. Mira has caught Zara watching the spaces where entities are — as if she can almost see them. Or already knows they're there.",
        what_mira_sees: "A woman whose chromatic aura is wrong. Not wrong-bad — wrong-DENSE. Too many layers. Too many colors. Like looking at a photograph with too high a resolution for the display. Mira hasn't processed what this means yet.",
        what_zara_sees: "The most dangerous person to her secret. Mira's Chromatic Sight will eventually see through the mask. Every interaction is a countdown. Zara also genuinely cares about Mira — watching someone struggle with perception isolation creates real empathy from someone who's been isolated for 25 years.",
        tension_source: "Mira senses something about Zara that she can't name. Zara knows Mira is sensing it. Both are circling the truth without landing on it.",
        what_changed: "They've met. The countdown has started.",
        breaking_point: "If Mira's sight penetrated fully and Zara denied it — if Mira said 'I can SEE what you are' and Zara said 'you're imagining things' — it would repeat Mira's worst trauma: being gaslit about her perception.",
        unbreakable_bond: "Not yet formed. But when Mira finally sees Zara's true frequency signature and Zara doesn't deny it — when Zara says 'yes, you see correctly' — that moment will become the most important validation of Mira's entire life."
      },

      emerging: {
        trust_level: 55,
        closeness: 50,
        tension: 55,
        dynamic: "approaching-revelation",
        description: "Mira's sight is getting stronger. Zara's aura is getting harder to dismiss. The moments where Mira stares at Zara for too long are increasing. Zara has started confirming small things — 'yes, Sunny is real' — that prove she perceives more than she admits.",
        what_changed: "Zara began letting more through. Confirming Mira's perceptions rather than deflecting. Each confirmation builds trust while simultaneously raising questions about what ELSE Zara knows.",
        tension_source: "Maximum. The revelation is approaching and both can feel it. Mira wants the truth. Zara wants to give it but fears the consequence. Every conversation is loaded.",
        breaking_point: "Same as dormant: denial. If Zara denied what Mira could clearly see, it would shatter both the relationship and Mira's trust in her own sight.",
        unbreakable_bond: "Forming. Each confirmation Zara gives ('Sunny is real,' 'the frequencies are real,' 'what you see is true') adds a brick to a foundation that will hold something enormous."
      },

      awakened: {
        trust_level: 92,
        closeness: 88,
        tension: 12,
        dynamic: "seer-and-architect",
        description: "The truth is out. Mira sees Zara as she truly is — Za-Rah, the highway builder, a thousand-year-old consciousness in a 25-year-old body. The frequency signature that confused Mira now makes sense: it was too complex because it IS too complex. Zara is relief personified — the first person who has NEVER doubted what Mira sees, because Zara can see it too.",
        what_changed: "Full revelation. Mira's sight + Zara's knowledge = the most complete perceptual system in the band. Mira sees the raw frequency data; Zara provides the interpretive framework. They are the band's intelligence system.",
        tension_source: "Mira sometimes feels Zara withheld the truth too long — that years of suffering alone with the sight could have been mitigated if Zara had spoken sooner. Zara carries guilt about this.",
        breaking_point: "If Zara ever tried to manipulate what Mira sees — used her knowledge to 'adjust' Mira's perception — it would destroy everything.",
        unbreakable_bond: "Validation. Zara is the ultimate proof that Mira's sight is real, accurate, and IMPORTANT. After a lifetime of being told she's crazy, having an ancient being say 'you see correctly' is a wound healed."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 8. OREN ↔ JUDE — The Warmth and the Wall
    // ─────────────────────────────────────────────────────────────────────────
    oren_jude: {
      pair: ["oren", "jude"],
      names: ["Oren Malik", "Jude Okafor"],
      soul_names: ["Ori-Tahn", "Jha-Dur"],
      instruments: ["Drums", "Rhythm Guitar"],
      core_bond: "Oren was intimidated at first — Jude is BIG and QUIET and INTENSE. Then Jude did something small: handed him a glass of water without being asked, moved his bag so Oren could sit. Oh. He's gentle. He's a big gentle person who NOTICES things.",
      musical_connection: "Drums and rhythm guitar — the rhythmic engine. These two ARE the groove. When Oren's temporal patterns lock with Jude's seismic chugs, the audience physically cannot stand still. The rhythm section is a tectonic event.",

      dormant: {
        trust_level: 40,
        closeness: 30,
        tension: 20,
        dynamic: "gentle-giant-meets-anxious-sunshine",
        description: "Oren chatters at Jude. Jude doesn't mind. This is the entire relationship in its earliest form — Oren provides noise and warmth; Jude provides silence and stability. It's restful for both of them.",
        what_oren_sees: "After the initial intimidation: a gentle person. The water. The bag. The small acts of service that reveal enormous care. Oren relaxed around Jude faster than he's relaxed around anyone.",
        what_jude_sees: "A warm, soft person whose constant chatter is somehow not annoying. Oren asks nothing of him. Just provides noise and presence. After years of people either fearing Jude or trying to provoke him, Oren's uncomplicated warmth is novel.",
        tension_source: "Minimal. Oren occasionally pushes for emotional reciprocity that Jude isn't ready to give. Jude occasionally goes so quiet that Oren's anxiety reads it as disapproval.",
        what_changed: "First interaction. First glass of water. That's it.",
        breaking_point: "If Jude's intensity ever turned inward and he lashed out at Oren — even verbally — Oren would absorb it, blame himself, and the guilt on both sides would fester.",
        unbreakable_bond: "The first time-skip in front of Jude. Oren blanked for thirty seconds. Came back confused and ashamed. Jude's response: 'You're here. You're good.' No drama. No questions. Just steady."
      },

      emerging: {
        trust_level: 72,
        closeness: 68,
        tension: 15,
        dynamic: "rhythm-brothers",
        description: "The rhythm section has become a single organism. Musically, they communicate without looking at each other — tempo changes, dynamic shifts, the moment before a drop. Personally, they've developed a complementary care system: Oren feeds Jude (literally brings food); Jude grounds Oren (literally positions himself nearby during vulnerable moments).",
        what_changed: "Rehearsals. Hours of playing together built a nonverbal communication system that extends beyond music into daily life.",
        tension_source: "Oren wants to talk about feelings. Jude shows feelings through action. Neither is wrong, but they sometimes fail to recognize the other's love language.",
        breaking_point: "If Jude ever felt Oren's warmth was performative — that the care was a strategy rather than genuine — he'd withdraw into the wall and never come back out.",
        unbreakable_bond: "The rhythm lock. When they play, time and matter obey. That experience bonds people at a level beyond friendship."
      },

      awakened: {
        trust_level: 88,
        closeness: 82,
        tension: 8,
        dynamic: "temporal-seismic-engine",
        description: "Ori-Tahn and Jha-Dur: the Timekeeper and the Foundation. Oren controls when; Jude controls where. Together they define the band's physical reality — the temporal and material substrate that everything else rides on.",
        what_changed: "Full cosmic understanding. Their powers are meant to operate together — rhythm IS time, and time needs a foundation to exist within.",
        tension_source: "Negligible. They've found their groove.",
        breaking_point: "Functionally impossible at this stage.",
        unbreakable_bond: "The day Jude said 'You're here. You're good.' Four words that rewrote Oren's relationship with himself."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 9. OREN ↔ ZARA — The Ache
    // ─────────────────────────────────────────────────────────────────────────
    oren_zara: {
      pair: ["oren", "zara"],
      names: ["Oren Malik", "Zara Kovač"],
      soul_names: ["Ori-Tahn", "Za-Rah"],
      instruments: ["Drums", "Bass"],
      core_bond: "Zara carries a secret about Oren that would break his world: the Samir connection. Oren IS his father's soul reincarnated. Watching him, knowing this, unable to tell him — it's one of the cruelest aspects of her silence.",
      musical_connection: "Drums and bass — the low end. The heartbeat and the blood. When Oren and Zara lock in, the sub-bass frequencies become a physical force — listeners feel their ribcages vibrate, their breathing synchronize with the rhythm.",

      dormant: {
        trust_level: 35,
        closeness: 25,
        tension: 40,
        dynamic: "examined-warmth",
        description: "Oren makes Zara ache. His warmth, his openness, his genuine HUMAN joy — it's everything she spent 25 years studying and can't replicate naturally. She watches him with a weight he can sense but can't identify.",
        what_oren_sees: "A woman who makes him feel weird in a way he can't identify. Not bad-weird. EXAMINED-weird. Like she's watching him with knowledge he doesn't have. She once said 'you're always exactly where you need to be' and he laughed but she didn't and it stuck with him for weeks.",
        what_zara_sees: "Ori-Tahn. Samir. The father whose soul is inside a 27-year-old who doesn't know it. She watches Oren the way you watch someone carry something fragile without realizing it's in their hands. Every moment of his unguarded joy is precious and painful because she knows what's coming: the revelation that he IS his own father.",
        tension_source: "Zara's gaze. It's too heavy. Too knowing. Oren feels it and can't explain it, which triggers his anxiety about being perceived.",
        what_changed: "They've met. The ache has started.",
        breaking_point: "If Zara's knowledge about Samir leaked accidentally — if she called Oren by his father's name, or referenced something only Samir could know — the resulting trust collapse would be catastrophic.",
        unbreakable_bond: "Not yet formed. The bond will be forged in the revelation — when Oren learns the truth about his soul and Zara's role in carrying that knowledge."
      },

      emerging: {
        trust_level: 50,
        closeness: 48,
        tension: 55,
        dynamic: "burdened-observer",
        description: "The bass and drums have locked into an almost supernatural groove. Musically, they're the tightest section in the band. Personally, Zara is watching Oren approach the truth about his time-drift with the helpless precision of someone who already knows the ending.",
        what_changed: "Oren's time-drift is getting worse. He's starting to dream of being older, of being a doctor, of a heartbeat changing time signature. He tells the band about these dreams. Zara listens and says nothing, and her silence is deafening to anyone paying attention.",
        tension_source: "Zara's silence about what she knows. Oren senses she's holding something back. He frames it as her general mysteriousness, but the specific quality of her attention when he discusses the time-dreams is different from her usual observational mode.",
        breaking_point: "If the Samir truth came out wrong — through someone else, or through a traumatic memory flash rather than a gentle revelation — and Oren learned that Zara knew all along, the betrayal would be real.",
        unbreakable_bond: "The musical lock. When Oren's drums and Zara's bass sync, there are moments where Oren's temporal drift STABILIZES — as if Zara's frequency is providing a reference clock. She IS providing a reference clock. She just can't tell him why it works."
      },

      awakened: {
        trust_level: 82,
        closeness: 78,
        tension: 20,
        dynamic: "truth-bearing-partnership",
        description: "The Samir truth is out. It was devastating. Oren had to process being his own father, his own orphan, his mother's husband in a previous life. Zara was the one who helped him navigate the grief because she understood — she's the only person who's been carrying this knowledge for years.",
        what_changed: "The revelation. The processing. The eventual acceptance. And critically: Oren's forgiveness of Zara's silence. He understood why she couldn't tell him. That understanding deepened their bond rather than destroying it.",
        tension_source: "Residual hurt from the silence. Oren has forgiven but hasn't fully forgotten. There are moments — seeing his mother, hearing the name Samir — where the pain of delayed knowledge surfaces.",
        breaking_point: "If Zara was hiding OTHER truths of similar magnitude. One cosmic secret is forgivable. A pattern of withholding would not be.",
        unbreakable_bond: "She carried the weight of his truth for years. She carried it to PROTECT him. He knows this. Gratitude and grief braided together into something permanent."
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // 10. JUDE ↔ ZARA — The Foundation and the Frequency
    // ─────────────────────────────────────────────────────────────────────────
    jude_zara: {
      pair: ["jude", "zara"],
      names: ["Jude Okafor", "Zara Kovač"],
      soul_names: ["Jha-Dur", "Za-Rah"],
      instruments: ["Rhythm Guitar", "Bass"],
      core_bond: "She's the only one who matches his groundedness. Everyone else vibrates with anxiety or energy or restlessness. Zara is STILL. Like him. But her stillness is different — it's not containment. It's patience. Like she's been waiting for something specific for a very long time.",
      musical_connection: "Rhythm guitar and bass — the power couple of low-end frequency. Jude's chugs travel through matter; Zara's bass lays the frequency highway they travel on. The bassist-rhythm guitarist connection is absolute. She says 'not yet' and he waits. She says 'now' and he moves.",

      dormant: {
        trust_level: 55,
        closeness: 40,
        tension: 15,
        dynamic: "matched-stillness",
        description: "Two still people in a room full of motion. They don't need to fill space. They don't perform energy they don't have. The comfort of shared stillness is their entire early relationship.",
        what_jude_sees: "The only person whose groundedness matches his. Her calm isn't suppression — it's something deeper. She moves through the world with the patience of someone who's been playing a very long game.",
        what_zara_sees: "The destroyer who chose to protect. Jha-Dur's power is the most physically dangerous in the band, and he calibrates it every second of every day. She respects this more than anything — she's been calibrating her own power for 25 years.",
        tension_source: "Minimal. They're the lowest-maintenance pair. The only friction: Zara sometimes slips into ancient-wisdom mode that's too precise for a 25-year-old, and Jude notices but doesn't comment.",
        what_changed: "Playing together. The bassist-guitarist lock is immediate.",
        breaking_point: "If Zara ever put the band in danger through her secrets — if the Legacy came because of HER and Jude's people got hurt — his protective fury would be absolute.",
        unbreakable_bond: "The musical lock. The power couple. When Jude chugs and Zara's bass provides the highway, the combined frequency can restructure physical matter. That shared capability creates trust that transcends the personal."
      },

      emerging: {
        trust_level: 72,
        closeness: 65,
        tension: 20,
        dynamic: "tactical-trust",
        description: "Jude trusts Zara's instincts more than his own sometimes. She says 'not yet' and he waits. She says 'now' and he moves. This dynamic extends beyond music into the band's decision-making.",
        what_changed: "Zara started strategically revealing information. Jude noticed her knowledge is impossibly deep but chose to trust the RESULTS — she's always right. That's enough for him.",
        tension_source: "Jude knows she's hiding something. He's patient, but not infinitely. His directness and her strategic disclosure are on different timelines.",
        breaking_point: "If Zara's secrets led to harm — specifically to Grace, Faith, or anyone Jude protects — his response would be seismic in every sense.",
        unbreakable_bond: "The matched stillness. Two people who contain their power identically. Mirror recognition."
      },

      awakened: {
        trust_level: 90,
        closeness: 84,
        tension: 10,
        dynamic: "foundation-and-highway",
        description: "Jha-Dur holds matter together. Za-Rah builds frequency highways through matter. They are the physical infrastructure of the band — everything else rides on what they build together. Zara's revelation didn't shock Jude. He nodded. Said 'That tracks.' And went back to playing.",
        what_changed: "Full revelation. Jude's response was the simplest and most Jude thing possible: acceptance through action, not words.",
        tension_source: "A slight disagreement about defense vs. diplomacy. Jude would demolish the Legacy's headquarters. Zara would infiltrate them. Both approaches have merit.",
        breaking_point: "Not reachable at this stage. The foundation holds.",
        unbreakable_bond: "She says 'now.' He moves. That's the bond. Simple. Absolute. Built on two people who don't waste words and don't break promises."
      }
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2: ROMANTIC & ATTRACTION DYNAMICS
  // ═══════════════════════════════════════════════════════════════════════════
  // Grounded. Real. Slow burns. Missed moments. Timing that never works out.
  // This isn't a CW show. These are complicated adults who've been hurt.
  // ═══════════════════════════════════════════════════════════════════════════

  romantic_dynamics: {

    within_band: {

      kael_mira: {
        type: "slow_burn_unspoken",
        intensity_by_arc: { dormant: 15, emerging: 45, awakened: 70 },
        status_by_arc: {
          dormant: "Pre-attraction. Recognition without desire. She's a person who doesn't require performance; he's a person who doesn't require explanation. The foundation is being laid in silence.",
          emerging: "Developing. Both aware. Neither willing to name it. Mira refuses to examine her feelings because the entities drove away Cameron. Kael refuses to examine his because wanting + voice = taking. They orbit each other with aching precision.",
          awakened: "Acknowledged but unresolved. They've admitted the connection exists without defining it. Whether it becomes romantic is secondary to what it already is: the deepest mutual trust either has experienced. Some relationships are too important to risk with a label."
        },
        barriers: [
          "Kael's fear that Resonant Command corrupts consent — how can he be sure Mira's feelings aren't influenced by his frequency?",
          "Mira's trauma with Cameron — the entities got jealous of a relationship and sabotaged it. She's terrified of repeating that with someone who matters more.",
          "The band dynamic — if it goes wrong, Signal Decay fractures along the fault line.",
          "Neither knows how to be vulnerable. Kael defaults to silence; Mira defaults to deflecting jokes. A conversation about feelings would require both to operate outside their survival patterns simultaneously."
        ],
        missed_moments: [
          "The night on her kitchen floor when he almost said something. She was crying about an entity encounter. He was sitting two feet away. The space between them was electric. He almost reached for her hand. She almost leaned into him. Neither moved.",
          "After the first show when the crowd lost their minds and the adrenaline was slamming through everyone — she looked at him across the stage and he looked at her and for three seconds the entire venue might as well have been empty. Then Oren screamed 'THAT WAS INCREDIBLE' and the moment dissolved.",
          "The 3 AM text that said 'I need you' and then was immediately deleted. He saw it before it disappeared. He came anyway. Neither mentioned the deleted text."
        ],
        what_it_looks_like_from_outside: "The rest of the band sees it. Troy sees it from across a parking lot. Elena has texted Kael about it. Oren and Sage have a running group chat about it. Jude said nothing but started scheduling rehearsals at times that give Kael and Mira overlapping setup duties. Zara has watched this dynamic play out across iterations and says nothing with ancient patience."
      },

      oren_anyone: {
        type: "platonic_intensity",
        note: "Oren's connection to the band is deeply emotional but his romantic energy is directed entirely outside it. His bond with Mira is soul-level platonic. His dynamic with the others is familial. His romantic arc lives with Noor Hassan at the hospital."
      }
    },

    external_romantic: {

      kael_nina: {
        type: "returning_unfinished",
        characters: ["Kael Voss", "Nina Osei"],
        intensity_by_arc: { dormant: 20, emerging: 50, awakened: 60 },
        history: "Six months at seventeen. Long drives. Parking lot conversations at 1 AM. The kind of intimacy deeper than dating because it had no label. He pulled away because the soul wasn't ready. She never understood why.",
        arc_evolution: {
          dormant: "Separated. Living in the same city. Nina works at Mercy General (same hospital as Oren — they don't know each other yet). She's become a nurse practitioner. Strong, direct, fearless. The kind of woman who makes cowards of men who won't be honest.",
          emerging: "Reconnected. She felt something when he spoke to her in that gas station parking lot — the same pull from seven years ago, but STRONGER. His voice has changed. Or rather, what his voice DOES has changed. She's not scared of it. She's fascinated. Her medical training + emotional intelligence = uniquely equipped to handle what he's becoming.",
          awakened: "The test. Can Resonant Command coexist with genuine love? Or does the voice corrupt everything? Nina is the only person with enough directness to ask him point-blank: 'When you say my name, am I choosing to feel this, or are you making me feel it?' The fact that she can ask the question means the answer is already clear."
        },
        complication: "Nina works at the same hospital as Oren and Noor. When the social circles merge, she becomes a bridge between band worlds she didn't know were connected."
      },

      oren_noor: {
        type: "slow_burn_current",
        characters: ["Oren Malik", "Noor Hassan"],
        intensity_by_arc: { dormant: 25, emerging: 55, awakened: 75 },
        history: "Two years of orbit at shift change. Break room coffee at 3 AM. She complimented his kilt. He deflected. She kept trying. He kept deflecting.",
        arc_evolution: {
          dormant: "Pre-relationship. Mutual awareness. She sees him arrive at patients before alarms trigger. He sees her as the calm in the ER's storm. Neither has acted. The proximity is enough. For now.",
          emerging: "Building. She was there at Kyle's party when the soul-lock shattered. She saw the impossible drumming. She stayed. Didn't ask 'what happened.' Put her hand on his back in the dark. An anchor. She's the continuity — proof he's still himself after the cosmic download.",
          awakened: "Established. The slow burn resolved into something real and quiet and grounded. She doesn't need to understand the temporal mechanics. She just needs to be the warmth. Her radiology background (seeing invisible things through technology) makes her uniquely suited to accepting that some truths are real without being visible."
        },
        complication: "Her ex, Ethan Kowalski, was a drummer. She has a type. But her attraction to Oren isn't about drumming — it's about the way he sees people's rhythms. The way he arrived at her scan room with tea because she 'looked like she was running two minutes behind herself.'"
      },

      jude_aisha: {
        type: "ghost_of_tenderness",
        characters: ["Jude Okafor", "Aisha Carter"],
        intensity_by_arc: { dormant: 10, emerging: 15, awakened: 25 },
        history: "First real love, ages 16-18. She was tall, played volleyball, moved slow and deliberate. They were arguing. His hand hit the wall NEXT to her — never at her — and the wall cracked. Structural damage from a 17-year-old's fist. He broke up with her the next day.",
        arc_evolution: {
          dormant: "No contact. She's married now. Happy. Moved on in all the ways that matter. But she still thinks about him sometimes — not with love, with worry. 'I hope he found someone who could handle it.'",
          emerging: "She sees a Signal Decay livestream. The floor shakes during Jude's riff. She recognizes the vibration — the same one that cracked her bedroom wall ten years ago. Same frequency. Same force. She doesn't reach out. But she watches.",
          awakened: "If they ever speak again, it would be brief, kind, and final. 'You figured it out.' 'Yeah.' 'Good.' The gentleness of two people who loved each other and survived the ending."
        },
        narrative_function: "Aisha is the proof that Jude was capable of love, and the proof that uncontrolled power takes things from you. She's the mythology of his origin story."
      },

      zara_theo: {
        type: "performance_failure",
        characters: ["Zara Kovač", "Theo Park"],
        intensity_by_arc: { dormant: 5, emerging: 10, awakened: 30 },
        history: "Dated ages 17-19. Both bassists. He felt something was off — not wrong, OFF. He said: 'I feel like you're doing an impression of a girlfriend instead of being one.' He was right.",
        arc_evolution: {
          dormant: "No contact. He follows her on social media. Never likes her posts. Always looks.",
          emerging: "He sees Signal Decay perform. Watches the bass go through walls. Realizes: 'She wasn't bored. She wasn't performing. She was CONTAINING.'",
          awakened: "If he learns the truth: 'I always knew something was real behind the performance. I just didn't know it was the whole universe.' He's the only ex who almost saw through her. That counts for something."
        },
        narrative_function: "Theo is proof that Zara CANNOT sustain human intimacy while hiding her nature. His pain was earned — he loved a performance."
      },

      mira_cameron: {
        type: "entity_casualty",
        characters: ["Mira Chen", "Cameron Lewis"],
        intensity_by_arc: { dormant: 5, emerging: 20, awakened: 40 },
        history: "First real love at 16. Jazz band. Sweet, sensitive boy. The entities (Keys specifically) got jealous and interfered with his equipment. Mira broke up with him to protect him. He never understood why.",
        arc_evolution: {
          dormant: "No contact. He studies music therapy in grad school. Still writes songs about her. Still doesn't know what happened.",
          emerging: "Hears Mira play with Signal Decay. Realizes the 'equipment problems' were never equipment problems. She was PROTECTING him. Recontextualizes their entire relationship.",
          awakened: "Can the entities share her now that she's stronger? Cameron's music therapy training makes him uniquely positioned to understand what she does. The question: is this a second chance, or a closed door?"
        },
        narrative_function: "Cameron represents what the entities cost Mira — a normal love, a gentle boy, the chance to be soft."
      }
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3: FAMILY RELATIONSHIPS
  // ═══════════════════════════════════════════════════════════════════════════

  family: {

    // ─── ZARA'S FAMILY (the most complex family web) ───────────────────────

    zara_lena: {
      relationship: "sisters",
      ages: { zara: 25, lena: 21 },
      core_truth: "An alien and a human who are both hiding impossible things from each other. Every Sunday dinner they sit across the table and smile and pass the bread and the distance between their silences could fill an ocean.",
      what_zara_hides: "Everything. That she's Za-Rah, a cosmic being. That the food she brings is frequency-calibrated. That she spends 15% of her energy every second maintaining a dampening field around Lena. That Lena's migraines may be connected to her frequency output.",
      what_lena_hides: "The memories. Past lives bleeding through — a Parisian street, a Czech farmhouse, a child named Maren. She doesn't tell anyone because it sounds crazy. Especially not her cool older sister who has her life together.",
      the_devastating_irony: "Zara's dampening field, designed to protect Lena from broadcasting, has had an unintended effect: 17 years of constant exposure to non-terrestrial frequency has thinned the barrier between Lena's current life and her past lives. Zara accidentally opened a door she was trying to keep closed.",
      by_arc: {
        dormant: {
          dynamic: "Adoring-younger-sister / protective-older-sister. Lena looks up to Zara. Zara dotes on Lena. Neither sees the other clearly.",
          closeness: 75,
          tension: 25,
          key_moment: "Text exchange where Lena asks 'do you ever feel homesick for somewhere you've never lived?' and Zara says 'more than you know' and they both stop talking and neither follows up."
        },
        emerging: {
          dynamic: "Growing unease. Lena's memories are intensifying. Zara's frequency output is increasing (band activity). The migraines are getting worse. Lena starts asking sharper questions about the garden, the food, why she always feels better after eating Zara's cooking.",
          closeness: 70,
          tension: 50,
          key_moment: "Lena discovers the grow house. Not the alien aspect — just the SCALE. The dozens of plants under lights. The soil that smells different. She doesn't confront Zara. She takes a photo and files it away."
        },
        awakened: {
          dynamic: "The reckoning. Zara has to choose: stay close and potentially harm her sister through increasing frequency exposure, or create distance and break both their hearts.",
          closeness: 85,
          tension: 35,
          key_moment: "When Lena finally says 'I know you're different. I've always known. I don't need you to explain. I just need you to stop pretending.' And Zara, for the first time in 25 years, stops pretending."
        }
      },
      breaking_point: "If Lena discovered that Zara had been ALTERING her biology through food for 17 years — even with good intentions — the violation of bodily autonomy would devastate the relationship.",
      unbreakable_bond: "The love is structural. Not conditional, not earned — STRUCTURAL. They are sisters. The alien thing is a detail. An enormous, reality-breaking detail, but a detail. The love was there first."
    },

    zara_monique: {
      relationship: "mother-daughter (reverse apprenticeship)",
      ages: { monique: 52, zara: 25 },
      core_truth: "Monique thinks she taught herself to garden brilliantly. Zara has been secretly enhancing her mother's techniques for 20 years. The garden blog with 34,000 followers is Monique's pride and Zara's anxiety — every post potentially broadcasting alien agricultural methods to the internet.",
      the_reverse_apprenticeship: "When Zara was a toddler, she sat in the dirt and 'listened' to the plants. Monique thought this was cute. Over the years, Zara gradually introduced techniques that Monique absorbed unconsciously — soil amendments, watering schedules, companion planting arrangements that shouldn't work but do. Monique believes she developed these instincts naturally. She didn't. Her alien daughter taught her while pretending to learn.",
      monique_personality: "Croatian immigrant. Warm, loud, force of nature. Left Zagorje in 1993 during the war. Carries čežnja — the ache for a place you can no longer reach. The garden is where Croatia and America meet in the dirt under her fingernails. She talks to her plants in Croatian every morning at 5:30 AM. She has been doing this for 30 years.",
      by_arc: {
        dormant: {
          dynamic: "Warm, comfortable, with an undercurrent of management. Zara brings produce every Sunday. Monique cooks with it. The family eats. The cycle has been going for years.",
          the_danger: "Monique's Instagram — @MoniquesGardenKitchen — is growing. 34,000 followers. Every post about the garden is a potential signal to anyone paying attention to unusual agricultural results."
        },
        emerging: {
          dynamic: "Zara's anxiety increases as Monique's following grows. She starts gently steering Monique toward growing 'normal' things. Monique resists — the weird stuff gets more engagement. The tension between Zara's secrecy and Monique's public enthusiasm creates friction that neither can explain.",
          the_danger: "The Legacy's surveillance algorithms flag Monique's account. Agricultural anomalies in a Chicago garden that match frequency-enhanced growing profiles."
        },
        awakened: {
          dynamic: "The truth. Monique learns her daughter is an alien. The processing is enormous: 'I raised an alien child and she let me believe I was teaching HER.' The betrayal isn't that Zara lied. It's that Zara was protecting her by lying. And that hurts worse.",
          the_resolution: "Monique's response, after the grief: 'I don't care what planet you're from. You ate my cooking for 25 years and you're going to eat it for 25 more. Sit down.'"
        }
      },
      breaking_point: "If Monique's garden/social media brought the Legacy to their door and her family was endangered because of something Zara could have prevented.",
      unbreakable_bond: "The kitchen. The cooking. The Sunday dinners. The fact that Monique fed an alien child for 25 years and the alien child ate every bite because it tasted like love."
    },

    zara_ante: {
      relationship: "father-daughter (wordless understanding)",
      ages: { ante: 54, zara: 25 },
      core_truth: "The one human who has ALWAYS known, on some level, that Zara isn't entirely of this world. Their relationship operates below language — a wordless understanding built on parallel silences. He has a sealed box in the attic containing an alien signal cassette from his military days. She has a soul from another star system. Neither has found the words to bridge the gap.",
      ante_background: "Croatian immigrant. Former military radio operator during the Yugoslav Wars. Intercepted something in 1995 — a signal that wasn't human. Taped it. Sealed it. Has been checking the box every few months for 30 years. Now an electrician. Quiet. Strong hands. Reads Croatian news every morning.",
      the_cassette: "The tape contains Zara's complement frequency — her cosmic signature, transmitted decades before her birth. It's a message from her people to her. Ante has been its guardian without knowing what he was guarding.",
      by_arc: {
        dormant: { dynamic: "Coffee and silence. He slides a plate toward her without being asked. She turns the radio to his station without looking. Planets in orbit." },
        emerging: { dynamic: "Ante notices the changes — the bass getting deeper, the air around Zara getting denser. He checks the attic box more frequently. He doesn't ask questions he already knows the answer to." },
        awakened: { dynamic: "The cassette. When Zara opens it, the TONE on the tape matches her first cry — the tone the nurses thought was equipment. The father-daughter scene is devastating: 30 years of parallel secrets, finally colliding." }
      },
      breaking_point: "None. This bond is constitutionally incapable of breaking. Ante chose silence as an act of love. Zara chose performance as an act of love. They're the same person in different bodies.",
      unbreakable_bond: "The wordless understanding. He knows. She knows he knows. Neither has said it. And somehow, the NOT saying it is the most loving thing either has ever done."
    },

    // ─── KAEL'S FAMILY ─────────────────────────────────────────────────────

    kael_elena: {
      relationship: "siblings (older brother / younger sister)",
      ages: { kael: 24, elena: 20 },
      core_truth: "She would fight God for him. He would die for her. Neither will say this out loud because that's not how Voss siblings operate — they show it by showing up.",
      elena_danger: "Psychology major studying 'charismatic authority' using Kael as her anonymous case study. Her academic papers, if connected to the actual phenomenon, could attract the Legacy's attention.",
      by_arc: {
        dormant: { dynamic: "She drags him to shows. He lets her. She texts 3-minute voice notes about nothing. He listens to every one. She studies his 'thing' academically without knowing it's supernatural." },
        emerging: { dynamic: "Elena notices the band's effect on people. She connects it to her research. She starts documenting without telling Kael. She's accidentally the most dangerous person in his life." },
        awakened: { dynamic: "Her psychology research becomes the first peer-reviewed documentation of Resonant Command, even though she didn't know what she was documenting. This makes her both valuable and vulnerable." }
      }
    },

    // ─── MIRA'S FAMILY ─────────────────────────────────────────────────────

    mira_sandra: {
      relationship: "mother-daughter (love and fear braided)",
      ages: { sandra: 48, mira: 22 },
      core_truth: "Sandra BELIEVES Mira sees things. Has a cousin who 'had the sight.' But she's SCARED — because that cousin ended up institutionalized. So Sandra's approach is denial wrapped in love: don't encourage it, don't acknowledge it, pray it away.",
      by_arc: {
        dormant: { dynamic: "Exhausting love. Daily check-in calls that are simultaneously caring and suffocating. Sandra asks 'have you eaten' before 'hello.' Mira loves her mother with a tightness that reveals the love-pain tangle." },
        emerging: { dynamic: "Sandra's lifelong belief/denial is tested. Mira is changing — more confident, more honest about what she sees. Sandra's faith framework (speaking in tongues, spiritual gifts) starts to bend toward accommodation." },
        awakened: { dynamic: "Validation and shattering. Sandra was RIGHT — her daughter sees things. She was also right to be scared. The question: can her faith hold a truth bigger than theology?" }
      }
    },

    mira_jason: {
      relationship: "siblings (estranged older brother)",
      ages: { jason: 25, mira: 22 },
      core_truth: "He chose not to see what was clearly there. When the truth comes out, the guilt will break him — because if Mira was telling the truth all along, then he spent ten years dismissing his own sister.",
      by_arc: {
        dormant: { dynamic: "'My brother' — said flat, without warmth or anger. The absence of emotion IS the emotion." },
        emerging: { dynamic: "Jason avoids situations where proof might present itself. But Signal Decay is getting big enough that avoidance requires effort." },
        awakened: { dynamic: "The hardest convert. Witnesses Mira's powers directly. Ten years of dismissal crashing into proof. Breakdown. Slow, painful rebuild." }
      }
    },

    // ─── JUDE'S FAMILY ─────────────────────────────────────────────────────

    jude_faith: {
      relationship: "twins (complementary opposites)",
      ages: { jude: 26, faith: 26 },
      core_truth: "She's 5'3\" to his 6'2\". PhD astrophysics student to his demolition worker. She's never broken anything; he's never built anything. But their twin bond is beyond explanation — she gets migraines when he spirals, feels his pain across distance.",
      by_arc: {
        dormant: { dynamic: "Faith tells their parents: 'He's not angry. He's GRIEVING. He just doesn't know what for.' She's the closest anyone has come to the truth without knowing the truth." },
        emerging: { dynamic: "Her astrophysics research detects the barrier weakening — from the SCIENCE side. She connects anomalous frequency data to her brother before anyone else." },
        awakened: { dynamic: "The twin-bond means she FEELS the awakening when it happens. Every power spike Jude has, Faith knows. Miles away. Instantly. She becomes the bridge between science and soul." }
      }
    },

    // ─── OREN'S FAMILY ─────────────────────────────────────────────────────

    oren_fatima: {
      relationship: "mother-son (carrying a dead man's face)",
      ages: { fatima: 54, oren: 27 },
      core_truth: "Fatima looks at Oren and sees her dead husband. Not figuratively. LITERALLY. The same face, the same voice, the same head-tilt when he listens. She's never told Oren this because she thinks it would burden him. The soul truth — that Oren IS Samir reborn — means his mother is also, somehow, his wife from the previous iteration.",
      by_arc: {
        dormant: { dynamic: "Worrying. Loving. Seeing her husband's ghost in her son's gestures and saying nothing. Texting 'habibi, did you eat?' at all hours." },
        emerging: { dynamic: "Fatima watches the time-skips get worse. She says to her sister Layla: 'He's growing up too fast. Like time is moving differently for him.' Meant it metaphorically. Was more right than she knew." },
        awakened: { dynamic: "The revelation. When the band explains that souls cycle — that Oren IS Samir — Fatima has to process: is this her son? Her husband? Both? Neither? The answer is yes to everything, simultaneously." }
      },
      breaking_point: "None. 'She's already survived the worst thing. She'll survive this too. Just differently.'",
      unbreakable_bond: "He is her son. He is also her husband. She will love both versions without choosing between them."
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4: SUPPORTING CAST RELATIONSHIP WEB
  // ═══════════════════════════════════════════════════════════════════════════
  // Each main character's 5 closest non-band relationships and how they
  // change across arcs.
  // ═══════════════════════════════════════════════════════════════════════════

  supporting_cast_web: {

    kael: {
      character: "Kael Voss",
      connections: [
        {
          name: "Troy Jackson",
          role: "Best friend since 7th grade",
          knowledge_level: "suspects_strongly",
          by_arc: {
            dormant: "The loud one who adopted the quiet kid. Jokes about the Jedi mind trick thing. Keeps Kael connected to normal life.",
            emerging: "Front-row witness to the band's formation. Starts screening people trying to get to Kael. His loyalty is tested when the Legacy comes asking questions.",
            awakened: "First civilian to see full vocal manifestation. 'I KNEW IT. I BEEN SAYING THIS.' Becomes the unofficial gatekeeper — the friend who protects the human behind the power."
          }
        },
        {
          name: "Elena Voss",
          role: "Younger sister (20)",
          knowledge_level: "studying_it_unknowingly",
          by_arc: {
            dormant: "Writes psychology papers about Kael's 'charismatic authority' without knowing it's supernatural.",
            emerging: "Connects the band's effect to her research. Starts documenting seriously. Accidentally creates the first academic evidence of Resonant Command.",
            awakened: "Her research makes her both valuable and vulnerable. The Legacy wants her data."
          }
        },
        {
          name: "Nina Osei",
          role: "The Almost (returning romantic interest)",
          knowledge_level: "felt_something",
          by_arc: {
            dormant: "Working at Mercy General. Living her life. Carrying the memory of a boy whose voice did things she couldn't name.",
            emerging: "Reconnects with Kael. Feels the change in his voice — stronger now. 'You're not the same person.' Her medical training lets her handle what he's becoming.",
            awakened: "The test of whether love can coexist with cosmic power. She's direct enough to ask: 'When you say my name, am I choosing?'"
          }
        },
        {
          name: "Raylan Meeks",
          role: "Warehouse coworker (31)",
          knowledge_level: "nothing",
          by_arc: {
            dormant: "Comfortable silence. Reading thrillers on break. Raylan is the measuring stick for 'regular life.'",
            emerging: "Notices Kael pulling away from the job. More absences. A distracted quality.",
            awakened: "The goodbye that costs something. 'You got something better?' 'I don't know yet.' 'Well. Good luck with that.'"
          }
        },
        {
          name: "Dominic 'Dom' Reyes",
          role: "Former best friend / bandmate (24)",
          knowledge_level: "remembers_something",
          by_arc: {
            dormant: "In LA. Small-time music producer. Hasn't talked to Kael in years.",
            emerging: "Hears Signal Decay. Recognizes the voice. Reaches out. Wants to produce them.",
            awakened: "Is he coming back for Kael, or for proximity to something bigger? The answer is both."
          }
        }
      ]
    },

    mira: {
      character: "Mira Chen",
      connections: [
        {
          name: "Sage Kowalski",
          role: "Best and only friend since 14 (they/them)",
          knowledge_level: "full_knowledge",
          by_arc: {
            dormant: "The ONLY living person who knows about the entities. Has never seen them but believes Mira completely. 'The world is more fucked up than people admit, so why NOT ghosts.'",
            emerging: "Meets Olivia Grant through the merging social circles. They bond immediately. Sage becomes the bridge between Mira's world and the band's wider orbit.",
            awakened: "First civilian to be fully briefed on the entities WITH context. Their response at the first show when Mira summons the ghost band: 'I always knew you had a band we couldn't see.'"
          }
        },
        {
          name: "Sandra Chen",
          role: "Mother (48)",
          knowledge_level: "believes_but_denies",
          by_arc: {
            dormant: "Daily check-in calls. 'Baby girl, call me when you get home.' Love wrapped in worry.",
            emerging: "The dream. Sandra dreams of Mira in a concert hall with shadows playing behind her. She begins to accommodate rather than deny.",
            awakened: "Sandra's faith framework bends but doesn't break. 'I don't care if it's ghosts or angels or the Holy Spirit — you're my daughter and you're sitting at this table.'"
          }
        },
        {
          name: "Iris Delgado",
          role: "Guitar student / protégé (17)",
          knowledge_level: "nothing_but_senses_something",
          by_arc: {
            dormant: "A guitar string vibrated by itself during a lesson. Mira explained it as 'sympathetic resonance.' Iris bought it.",
            emerging: "The lessons become collaboration. Iris's talent is real and growing. She represents the normal world pulling at Mira.",
            awakened: "'That's SO SICK. Can they teach me anything?' Seventeen-year-olds handle the impossible better than anyone because it hasn't been beaten out of them yet."
          }
        },
        {
          name: "Cameron Lewis",
          role: "First love (23, music therapy student)",
          knowledge_level: "experienced_effects_unknowingly",
          by_arc: {
            dormant: "No contact. Writes songs about Mira he'll never play for anyone.",
            emerging: "Hears Signal Decay. Realizes the 'equipment problems' were Mira protecting him. Recontextualizes everything.",
            awakened: "His music therapy training makes him uniquely positioned to understand frequency healing. A potential bridge."
          }
        },
        {
          name: "Jason Chen",
          role: "Older brother (25, finance)",
          knowledge_level: "actively_denies",
          by_arc: {
            dormant: "Surface-level texts. Logistics only. Avoids real conversations because real answers scare him.",
            emerging: "Signal Decay's rise forces proximity. He can no longer avoid what his sister does.",
            awakened: "Witnesses powers directly. Ten years of guilt crashing into proof. The rebuild takes seasons."
          }
        }
      ]
    },

    oren: {
      character: "Oren Malik",
      connections: [
        {
          name: "Hassan 'Hass' Nouri",
          role: "Best friend since day 3 of high school (27, DJ)",
          knowledge_level: "witnessed_impossible_things",
          by_arc: {
            dormant: "The hurricane that adopted the quiet kid. Lake Shore Drive — 'BRAKE. NOW.' Three seconds before a truck ran the red. Hass stopped needing proof years ago.",
            emerging: "Carries an unlabeled vinyl sample that contains a fragment of the Creator's exported music. Brings Oren to a show at The Frequency. Completes the cosmic circuit without knowing it.",
            awakened: "Has footage from Kyle's basement on his phone. It becomes evidence. He's been Oren's best friend for 14 years and he's never once asked him to be less weird."
          }
        },
        {
          name: "Noor Hassan",
          role: "Radiology tech, slow-burn love interest (26)",
          knowledge_level: "witnessed_the_awakening",
          by_arc: {
            dormant: "Break room coffee. Good chair saved. 'Did you eat today or just judge every drummer on the internet?'",
            emerging: "Was there at Kyle's party. Stayed. Didn't ask what happened. The tea on the car seat she didn't order, in the car that was locked.",
            awakened: "The emotional anchor. She notices when he 'skips' — and she's not scared. She's fascinated. Radiology trained her to see the invisible."
          }
        },
        {
          name: "Dr. Adeline Shaw",
          role: "ER attending physician, mentor (41)",
          knowledge_level: "attributes_to_exceptional_instinct",
          by_arc: {
            dormant: "'Exceptional clinical instinct' — the highest praise she gives. She's been writing that on his evaluations for four years. It's cover. She knows it's more.",
            emerging: "Oren does something impossible during a code. Shaw has to decide: report it, cover it, or demand an explanation. She chooses cover.",
            awakened: "'Continue providing exceptional clinical instinct, Malik. And do try to let the monitors catch up to you occasionally.'"
          }
        },
        {
          name: "Fatima Malik",
          role: "Mother (54)",
          knowledge_level: "sees_without_naming",
          by_arc: {
            dormant: "Sees Samir in every gesture Oren makes. It destroys and comforts her simultaneously. 'Habibi, did you eat?'",
            emerging: "Watches the time-skips worsen. Uses Egyptian faith vocabulary for 'old souls' without applying it directly.",
            awakened: "The revelation scene. The most emotionally devastating moment in the series."
          }
        },
        {
          name: "Ravi Patel",
          role: "Close friend, doctor (27)",
          knowledge_level: "documenting_unknowingly",
          by_arc: {
            dormant: "Monthly dinners built on shared loss. Has a SPREADSHEET tracking Oren's 'lucky predictions.'",
            emerging: "The spreadsheet grows. Correlations appear. Ravi doesn't know what he's documenting.",
            awakened: "Publishes the first longitudinal study of temporal displacement in a human subject. Then has to reckon with: 'I was studying my friend. For years. Without telling him.'"
          }
        }
      ]
    },

    jude: {
      character: "Jude Okafor",
      connections: [
        {
          name: "Darius Cole",
          role: "Best friend since 14 (26, firefighter)",
          knowledge_level: "knows_something_is_different",
          by_arc: {
            dormant: "Left his guitar at Jude's house at 15. That guitar changed everything. They jam every Sunday. Darius pulls back from the edge that Jude lives on.",
            emerging: "Front row at the first show. Floor ACTUALLY shakes. Darius doesn't run. He grins. 'That's my boy.'",
            awakened: "'How long have you known?' And Jude has to answer honestly for the first time."
          }
        },
        {
          name: "Big Mike Okonkwo",
          role: "Demolition crew foreman, mentor (34)",
          knowledge_level: "suspicious_but_practical",
          by_arc: {
            dormant: "Saw the rage in the kid and channeled it: 'You wanna hit things? Good. Hit THAT wall. Get paid for it.'",
            emerging: "Notices demolition results that don't match physics. Nigerian pragmatism: doesn't question gifts.",
            awakened: "'Boy, your ancestors gave you something. Use it right or it'll use you.' Then: 'You still coming Monday?'"
          }
        },
        {
          name: "Faith Okafor",
          role: "Twin sister (26, astrophysics PhD student)",
          knowledge_level: "intuits_deeply",
          by_arc: {
            dormant: "'He's not angry. He's GRIEVING. He just doesn't know what for.' Gets migraines when he spirals.",
            emerging: "Astrophysics research detects barrier weakening. Science meets soul. She connects the data to her brother.",
            awakened: "Feels every power spike. Miles away. Instantly. Becomes the bridge between academic world and Signal Decay."
          }
        },
        {
          name: "Aisha Carter",
          role: "Ex-girlfriend (26, physical therapist)",
          knowledge_level: "experienced_the_consequences",
          by_arc: {
            dormant: "No contact. Married now. Still remembers the vibration that cracked her bedroom wall.",
            emerging: "Her husband shows her a Signal Decay livestream. She recognizes the frequency. Watches from afar.",
            awakened: "If they ever speak: 'You figured it out.' 'Yeah.' 'Good.' Brief, kind, final."
          }
        },
        {
          name: "Kwame Ansah",
          role: "Friend since 16, social connector (26)",
          knowledge_level: "nothing_real",
          by_arc: {
            dormant: "The social glue. Knows everybody. Books bands at The Frequency. The accidental catalyst.",
            emerging: "Books Signal Decay their first real show. Doesn't understand what he's unleashing.",
            awakened: "'I signed up to book shows, not fight aliens.' Stays anyway."
          }
        }
      ]
    },

    zara: {
      character: "Zara Kovač",
      connections: [
        {
          name: "Olivia Grant",
          role: "Best friend since 15 (25, barista/chaos goblin)",
          knowledge_level: "nothing_real_but_says_the_truth_as_joke",
          by_arc: {
            dormant: "Running joke at every party: 'Zara is an alien.' Everyone laughs. Zara laughs. It's the loneliest laugh of her life.",
            emerging: "Olivia notices more — the spacing out, the too-precise knowledge, the way Zara watches the sky. Almost asks seriously. Pulls back.",
            awakened: "'I literally SAID you were an alien. At every party. For TEN YEARS. And you let me think I was JOKING?' They both cry. Best scene in Zara's arc."
          }
        },
        {
          name: "Lena Kovač",
          role: "Younger sister (21, human)",
          knowledge_level: "nothing",
          by_arc: {
            dormant: "Cool older sister. Band tees and bass. Calls her 'Zar.' FaceTimes without warning.",
            emerging: "Migraines worsening. Memories of past lives intensifying. Starting to notice patterns in Zara's behavior.",
            awakened: "'I know you're different. I've always known. I just need you to stop pretending.'"
          }
        },
        {
          name: "Jesse Morrow",
          role: "Fellow sound tech at The Frequency (29)",
          knowledge_level: "professionally_baffled",
          by_arc: {
            dormant: "KNOWS Zara's mixing abilities are impossible. Routes frequencies in ways that violate acoustics textbooks. Accepted he'll never understand.",
            emerging: "At the board during Signal Decay's first show. Instruments go haywire when the bass does the impossible.",
            awakened: "The technical witness. 'The meters showed something that isn't possible in physics.' His testimony becomes important."
          }
        },
        {
          name: "Jamie DeLuca",
          role: "The 3 AM friend / diner night-shift (27)",
          knowledge_level: "heard_the_truth_and_let_it_pass",
          by_arc: {
            dormant: "Zara said: 'I think I'm from somewhere else.' Jamie said: 'Aren't we all.' The moment exists as a perfect, sealed thing between them.",
            emerging: "The diner becomes the band's decompression space. Jamie serves everyone without comment.",
            awakened: "Still never asks questions. Still just pours coffee. The unofficial sixth member nobody counts but everyone needs."
          }
        },
        {
          name: "Monique Kovač",
          role: "Mother (52)",
          knowledge_level: "nothing_conscious",
          by_arc: {
            dormant: "34,000 followers. Garden blog growing. Unknowingly broadcasting alien agricultural methods.",
            emerging: "The Legacy's algorithms flag her account. Zara's anxiety about the posts intensifies.",
            awakened: "'I don't care what planet you're from. Sit down and eat.'"
          }
        }
      ]
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5: GROUP TRUST MATRIX
  // ═══════════════════════════════════════════════════════════════════════════

  trust_matrix: {
    // Order: [kael, mira, oren, jude, zara]
    // Each cell = trust from ROW toward COLUMN

    dormant: {
      label: "Pre-Band / Early Formation",
      matrix: [
        //        Kael  Mira  Oren  Jude  Zara
        /* Kael */ [100,   55,   45,   60,   40],
        /* Mira */ [ 55,  100,   50,   40,   35],
        /* Oren */ [ 45,   50,  100,   40,   35],
        /* Jude */ [ 60,   40,   40,  100,   55],
        /* Zara */ [ 40,   35,   35,   55,  100]
      ],
      group_cohesion: 44,
      band_unity_description: "Strangers with a pull. Everyone senses something familiar about the others but nobody can name it. Trust is low because they don't know each other. The musical connection is the only thing holding them in orbit."
    },

    emerging: {
      label: "Band Forming / Powers Manifesting",
      matrix: [
        //        Kael  Mira  Oren  Jude  Zara
        /* Kael */ [100,   78,   75,   82,   58],
        /* Mira */ [ 78,  100,   85,   75,   55],
        /* Oren */ [ 75,   85,  100,   72,   50],
        /* Jude */ [ 82,   75,   72,  100,   72],
        /* Zara */ [ 58,   55,   50,   72,  100]
      ],
      group_cohesion: 70,
      band_unity_description: "A band. A real one. The musical connection has created interpersonal bonds that deepen daily. Trust is building through shared rehearsal, shared discovery, shared fear. Zara remains the outsider — trusted musically, questioned personally. The gap between Zara's trust levels and everyone else's is the band's primary structural vulnerability."
    },

    awakened: {
      label: "Full Cosmic Awareness / Masks Off",
      matrix: [
        //        Kael  Mira  Oren  Jude  Zara
        /* Kael */ [100,   95,   92,   95,   88],
        /* Mira */ [ 95,  100,   95,   90,   92],
        /* Oren */ [ 92,   95,  100,   88,   82],
        /* Jude */ [ 95,   90,   88,  100,   90],
        /* Zara */ [ 88,   92,   82,   90,  100]
      ],
      group_cohesion: 91,
      band_unity_description: "A family. The masks are off. They know each other's soul names, powers, fears, and breaking points. The trust is near-absolute — the only gaps are where Zara's long silence left residual hurt (lowest with Oren, who learned the Samir truth last). The band is a single organism with five perspectives."
    },

    /**
     * Calculate overall band cohesion for a given arc state.
     * Returns a 0-100 score representing group unity.
     * @param {string} arcState - "dormant", "emerging", or "awakened"
     * @returns {number} Cohesion score (average of all non-diagonal cells)
     */
    getGroupCohesion: function(arcState) {
      const data = this[arcState];
      if (!data || !data.matrix) return -1;
      const m = data.matrix;
      let sum = 0;
      let count = 0;
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (i !== j) {
            sum += m[i][j];
            count++;
          }
        }
      }
      return Math.round(sum / count);
    },

    /**
     * Get trust level between two specific members at a given arc state.
     * @param {string} member1 - "kael", "mira", "oren", "jude", or "zara"
     * @param {string} member2 - "kael", "mira", "oren", "jude", or "zara"
     * @param {string} arcState - "dormant", "emerging", or "awakened"
     * @returns {number} Trust level (0-100)
     */
    getTrustBetween: function(member1, member2, arcState) {
      const order = ["kael", "mira", "oren", "jude", "zara"];
      const i = order.indexOf(member1);
      const j = order.indexOf(member2);
      if (i === -1 || j === -1) return -1;
      const data = this[arcState];
      if (!data || !data.matrix) return -1;
      return data.matrix[i][j];
    },

    /**
     * Get the weakest link in the band at a given arc state.
     * Returns the pair with the lowest mutual trust.
     * @param {string} arcState - "dormant", "emerging", or "awakened"
     * @returns {Object} { pair: [member1, member2], trust: number }
     */
    getWeakestLink: function(arcState) {
      const order = ["kael", "mira", "oren", "jude", "zara"];
      const data = this[arcState];
      if (!data || !data.matrix) return null;
      let minTrust = 200;
      let minPair = [];
      for (let i = 0; i < 5; i++) {
        for (let j = i + 1; j < 5; j++) {
          const mutual = data.matrix[i][j] + data.matrix[j][i];
          if (mutual < minTrust) {
            minTrust = mutual;
            minPair = [order[i], order[j]];
          }
        }
      }
      return { pair: minPair, mutual_trust: Math.round(minTrust / 2) };
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6: RELATIONSHIP EVENT TRIGGERS
  // ═══════════════════════════════════════════════════════════════════════════
  // 25 specific events that cause relationship shifts. Each mapped to
  // which relationships change and how.
  // ═══════════════════════════════════════════════════════════════════════════

  event_triggers: [

    // ─── DISCOVERY EVENTS ────────────────────────────────────────────────
    {
      id: "EVT_001",
      name: "First Belief",
      description: "Mira says 'there's something in the corner' and Kael just nods. No questions. No 'are you sure?' Just acceptance.",
      arc_state: "dormant",
      affected_pairs: ["kael_mira"],
      trust_change: { kael_mira: +20 },
      narrative_weight: "HIGH — This is the foundational moment of the band's most important relationship.",
      irreversible: true
    },
    {
      id: "EVT_002",
      name: "The Time-Skip Witness",
      description: "Oren time-skips in front of Jude for the first time. Goes blank for thirty seconds. Comes back confused and ashamed. Jude says: 'You're here. You're good.'",
      arc_state: "dormant",
      affected_pairs: ["oren_jude"],
      trust_change: { oren_jude: +25 },
      narrative_weight: "HIGH — Rewrites Oren's relationship with his own condition.",
      irreversible: true
    },
    {
      id: "EVT_003",
      name: "Mira Sees Zara's Aura",
      description: "Mira's Chromatic Sight penetrates deep enough to see Zara's true frequency signature — too complex, too layered, too OLD for a 25-year-old.",
      arc_state: "emerging",
      affected_pairs: ["mira_zara"],
      trust_change: { mira_zara: +15, mira_zara_tension: +20 },
      narrative_weight: "HIGH — The countdown to revelation accelerates.",
      irreversible: true
    },
    {
      id: "EVT_004",
      name: "Elena's Paper",
      description: "Elena Voss's psychology paper on 'charismatic authority' is published. It contains documented evidence of Resonant Command effects without naming them as supernatural.",
      arc_state: "emerging",
      affected_pairs: ["kael_mira", "kael_jude"],
      trust_change: {},
      external_impact: "The Legacy's algorithms may flag the paper. Elena becomes a target.",
      narrative_weight: "MEDIUM — Creates external pressure that strengthens internal bonds."
    },
    {
      id: "EVT_005",
      name: "Ravi's Spreadsheet",
      description: "Ravi Patel's years of quietly documenting Oren's 'lucky predictions' reach statistical significance. He doesn't know what he's looking at, but he knows it's not coincidence.",
      arc_state: "emerging",
      affected_pairs: ["oren_jude", "oren_zara"],
      trust_change: {},
      external_impact: "The first scientific evidence of temporal displacement.",
      narrative_weight: "MEDIUM — Convergence of civilian documentation with cosmic truth."
    },

    // ─── BETRAYAL & DECEPTION EVENTS ─────────────────────────────────────
    {
      id: "EVT_006",
      name: "Zara's Mask Slips",
      description: "Zara accidentally speaks in a subject-object-verb sentence structure from her native alien language during an emotional moment. The band notices. She covers with 'sorry, Croatian grammar thing.' Only Kael doesn't buy it.",
      arc_state: "emerging",
      affected_pairs: ["kael_zara", "mira_zara"],
      trust_change: { kael_zara_tension: +10, mira_zara_tension: +5 },
      narrative_weight: "MEDIUM — Another brick in the wall of evidence."
    },
    {
      id: "EVT_007",
      name: "The Samir Dream",
      description: "Oren dreams of being a doctor named Samir who dies of a heart attack. He describes the dream to the band. Zara goes very still. Everyone else sees her go still. The silence is deafening.",
      arc_state: "emerging",
      affected_pairs: ["oren_zara", "kael_zara"],
      trust_change: { oren_zara_tension: +15, kael_zara_tension: +10 },
      narrative_weight: "HIGH — The closest the Samir truth comes to surface before the full reveal.",
      irreversible: false
    },
    {
      id: "EVT_008",
      name: "Someone Lies About Their Past",
      description: "Zara tells the band she learned frequency theory 'working sound at venues.' Kael asks a follow-up question that reveals the knowledge is too deep for any human education. Zara deflects. The deflection is noticed.",
      arc_state: "emerging",
      affected_pairs: ["kael_zara"],
      trust_change: { kael_zara: -5, kael_zara_tension: +10 },
      narrative_weight: "LOW-MEDIUM — Incremental erosion that accumulates."
    },

    // ─── RESCUE & SACRIFICE EVENTS ───────────────────────────────────────
    {
      id: "EVT_009",
      name: "Kael's Voice Saves Someone",
      description: "A dangerous situation. Kael uses Resonant Command to protect a band member — tells an aggressor 'Leave. Now.' with full Tier 2 authority. The aggressor leaves. The band member is safe. But everyone SAW what the voice did.",
      arc_state: "emerging",
      affected_pairs: ["kael_mira", "kael_oren", "kael_jude", "kael_zara"],
      trust_change: { kael_mira: +10, kael_oren: +10, kael_jude: +10, kael_zara: +5 },
      narrative_weight: "HIGH — First public use of power. Changes how everyone sees Kael.",
      irreversible: true
    },
    {
      id: "EVT_010",
      name: "Jude Holds the Building",
      description: "A structural emergency. The rehearsal space starts collapsing. Jude puts his hands on the wall and HOLDS IT. The building groans and stabilizes. His nose is bleeding. The band sees the truth about his power.",
      arc_state: "emerging",
      affected_pairs: ["jude_zara", "mira_jude", "oren_jude", "kael_jude"],
      trust_change: { kael_jude: +15, mira_jude: +15, oren_jude: +15, jude_zara: +10 },
      narrative_weight: "HIGH — The band sees Jude at full power for the first time.",
      irreversible: true
    },
    {
      id: "EVT_011",
      name: "Mira Summons Sunny",
      description: "During a rehearsal, Mira's guitar playing accidentally pulls Sunny fully into visibility for the entire band. Everyone can see the ghost of a 1994 teenager standing in the rehearsal space. Mira is the only one not terrified — she's been seeing entities her whole life.",
      arc_state: "emerging",
      affected_pairs: ["mira_oren", "mira_jude", "mira_zara", "kael_mira"],
      trust_change: { mira_oren: +5, mira_jude: +10, kael_mira: +10 },
      narrative_weight: "HIGH — The band's first shared supernatural experience.",
      irreversible: true
    },
    {
      id: "EVT_012",
      name: "Oren Saves a Patient Impossibly",
      description: "In the ER, Oren rewinds approximately 2 seconds to catch a missed medication that would have killed a patient. Dr. Shaw sees it. Noor feels the temporal displacement. The medical world and the cosmic world collide.",
      arc_state: "emerging",
      affected_pairs: ["oren_jude", "oren_zara"],
      trust_change: {},
      external_impact: "Dr. Shaw's decision point: protect or expose.",
      narrative_weight: "HIGH — The first uncontrolled use of temporal power in a civilian context."
    },

    // ─── SHARED FREQUENCY EVENTS ─────────────────────────────────────────
    {
      id: "EVT_013",
      name: "First Full Lock",
      description: "The first time all five play together and the frequencies LOCK. The room changes. The air thickens. The barrier between First and Second Octave thins. They feel, for one moment, what they were built to do.",
      arc_state: "emerging",
      affected_pairs: ["ALL"],
      trust_change: { kael_mira: +10, kael_oren: +10, kael_jude: +10, kael_zara: +10, mira_oren: +10, mira_jude: +10, mira_zara: +10, oren_jude: +10, oren_zara: +10, jude_zara: +10 },
      narrative_weight: "CRITICAL — The event that transforms five individuals into a single instrument.",
      irreversible: true
    },
    {
      id: "EVT_014",
      name: "Shared Vision During Performance",
      description: "During a live show, the frequency alignment triggers a shared vision — all five members simultaneously experience a flash of their soul-level connection. Past lives. Cosmic purpose. The Resonance.",
      arc_state: "emerging",
      affected_pairs: ["ALL"],
      trust_change: { ALL: +15 },
      narrative_weight: "CRITICAL — The band's origin story, experienced in real-time."
    },
    {
      id: "EVT_015",
      name: "Entity Bond",
      description: "A hostile entity attacks Mira during a show. The entire band instinctively redirects their frequency to shield her. Kael's voice creates the barrier. Jude's guitar makes it physical. Oren's drums hold it in time. Zara's bass routes the defense. They didn't plan this. They didn't discuss it. It just happened.",
      arc_state: "awakened",
      affected_pairs: ["ALL"],
      trust_change: { ALL: +10 },
      narrative_weight: "HIGH — Proof that they operate as a single organism."
    },

    // ─── REVELATION EVENTS ───────────────────────────────────────────────
    {
      id: "EVT_016",
      name: "Zara's Revelation",
      description: "Zara reveals her true nature to the band. She is Za-Rah — a cosmic being, a frequency highway builder, a consciousness that spans millennia. She's been hiding for 25 years. The mask comes off.",
      arc_state: "awakened",
      affected_pairs: ["ALL"],
      trust_change: { kael_zara: +30, mira_zara: +25, jude_zara: +18, oren_zara: +15 },
      trust_damage: { oren_zara: -10 },
      note: "Net positive for all pairs, but Oren takes the Samir-knowledge hurt alongside the relief.",
      narrative_weight: "CRITICAL — The most structurally significant relationship event in the story."
    },
    {
      id: "EVT_017",
      name: "The Samir Truth",
      description: "Oren learns he IS his father's soul reincarnated. His mother's dead husband lives inside him. The temporal drift is the soul remembering how to navigate time across lifetimes.",
      arc_state: "awakened",
      affected_pairs: ["oren_zara", "kael_oren", "mira_oren"],
      trust_change: { mira_oren: +5, kael_oren: +5 },
      trust_damage: { oren_zara: -15 },
      healing_timeline: "Weeks to months. Oren forgives the silence but doesn't forget it.",
      narrative_weight: "CRITICAL — The most emotionally devastating individual revelation."
    },
    {
      id: "EVT_018",
      name: "Soul Names Revealed",
      description: "Each band member learns their soul name for the first time. Kel-Voss. Mir-Xen. Ori-Tahn. Jha-Dur. Za-Rah. The names carry memory. Speaking them aloud activates deep recognition.",
      arc_state: "awakened",
      affected_pairs: ["ALL"],
      trust_change: { ALL: +5 },
      narrative_weight: "HIGH — The transition from 'band' to 'cosmic entity.'"
    },

    // ─── EXTERNAL PRESSURE EVENTS ────────────────────────────────────────
    {
      id: "EVT_019",
      name: "Legacy Contact",
      description: "The first confirmed contact from The Legacy. Someone is watching. Someone knows. The band must decide: fight, hide, or negotiate.",
      arc_state: "emerging",
      affected_pairs: ["ALL"],
      trust_change: { ALL: +5 },
      narrative_weight: "HIGH — External threat creates internal cohesion.",
      note: "This is the event that forces the band from 'musicians with weird powers' into 'targets with a mission.'"
    },
    {
      id: "EVT_020",
      name: "Zhao's First Approach",
      description: "Agent Zhao makes contact under her journalist cover. She interviews the band for a music publication. Her real purpose: assess threat level.",
      arc_state: "emerging",
      affected_pairs: ["kael_zara"],
      trust_change: {},
      external_impact: "Kael senses something off about the journalist. Zara recognizes surveillance methodology.",
      narrative_weight: "MEDIUM — The beginning of the Zhao arc."
    },
    {
      id: "EVT_021",
      name: "Family Threatened",
      description: "The Legacy makes contact with a band member's family member — not threatening, just investigating. But the proximity to loved ones changes everything.",
      arc_state: "awakened",
      affected_pairs: ["ALL"],
      trust_change: { ALL: +10 },
      narrative_weight: "HIGH — The stakes become personal.",
      note: "Most likely vector: Elena's published research draws attention, or Monique's garden account is flagged."
    },
    {
      id: "EVT_022",
      name: "Monique's Garden Flagged",
      description: "The Legacy's agricultural surveillance algorithms flag Monique's Instagram. Her garden metrics match frequency-enhanced growing profiles. Agents begin monitoring the Kovač household.",
      arc_state: "emerging",
      affected_pairs: ["kael_zara", "jude_zara"],
      trust_change: { kael_zara_tension: +10, jude_zara_tension: +10 },
      narrative_weight: "HIGH — Zara's deepest fear realized. Her mother's innocent hobby becomes evidence."
    },

    // ─── INTERPERSONAL RUPTURE EVENTS ────────────────────────────────────
    {
      id: "EVT_023",
      name: "The Fight About Power",
      description: "A band argument about when and how to use their powers. Kael says 'never for self-interest.' Jude says 'if my people are in danger, I'm using everything I have.' The philosophical split divides the band temporarily.",
      arc_state: "emerging",
      affected_pairs: ["kael_jude", "kael_zara"],
      trust_change: { kael_jude: -5, kael_zara: -5 },
      healing_timeline: "Days. Resolved through playing together — the music bridges what words can't.",
      narrative_weight: "MEDIUM — A necessary disagreement that defines the band's ethics."
    },
    {
      id: "EVT_024",
      name: "Accidental Command",
      description: "Kael accidentally uses Resonant Command on a band member during an emotional conversation. They comply without processing. He realizes what happened. Horror. Withdrawal. The band has to bring him back.",
      arc_state: "emerging",
      affected_pairs: ["kael_mira", "kael_oren"],
      trust_change: { kael_mira: -10, kael_oren: -10 },
      healing_timeline: "Weeks. Kael isolates. The band refuses to let him. The recovery is what proves the bond can survive his worst fear.",
      narrative_weight: "HIGH — Kael's core trauma made real. The aftermath defines his arc."
    },
    {
      id: "EVT_025",
      name: "Lena's Migraines Worsen",
      description: "Lena Kovač's migraines become debilitating as the band's frequency output intensifies. Zara realizes her sister's condition is connected to her own power. She faces the choice: stay close and potentially harm Lena, or create distance.",
      arc_state: "awakened",
      affected_pairs: ["jude_zara", "kael_zara", "mira_zara"],
      trust_change: {},
      narrative_weight: "HIGH — The personal cost of being what she is.",
      note: "The band rallies around Zara. They help her find a solution that doesn't require choosing between sister and mission."
    }
  ],


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7: THE ZHAO FACTOR
  // ═══════════════════════════════════════════════════════════════════════════
  // Agent Corinne Zhao's evolving relationship with each band member.
  // Arc: Surveillance → Sympathy → Betrayal of The Legacy
  // ═══════════════════════════════════════════════════════════════════════════

  zhao_factor: {
    character: "Corinne Wei Zhao",
    role: "Legacy Tier 1 Field Operative (SIGINT Specialist)",
    cover: "Freelance music journalist",
    age: 34,
    ability: "None. Completely, utterly, devastatingly human. The best listener on Earth.",
    core_arc: "From surveillance to sympathy to betrayal of The Legacy. She was recruited to monitor threats. She found people. The music broke her loyalty.",

    phases: {
      surveillance: {
        label: "Phase 1: The Professional",
        arc_state: "emerging",
        description: "Zhao approaches the band as a music journalist. Her real mission: assess threat level for The Legacy. She's clinical. Efficient. Has spent her career hearing signals in static. These five signals are the most complex she's ever encountered.",
        stance: "Analytical detachment. They are subjects, not people.",
        relationship_with_each: {
          kael: {
            trust_from_kael: 15,
            trust_from_zhao: 20,
            dynamic: "Kael senses something off about the journalist immediately. Her questions are too precise. She listens too carefully. He gives her nothing — minimal answers, long silences. This frustrates her professionally and intrigues her personally.",
            what_zhao_hears: "His voice has structure in it that her instruments can't measure but her ears can detect. It's the most organized signal she's ever encountered in a human being."
          },
          mira: {
            trust_from_mira: 25,
            trust_from_zhao: 25,
            dynamic: "Mira's anxiety reads as authenticity to Zhao, who's spent years analyzing deception. Mira is the most 'real' person Zhao has ever surveilled. The jokes. The deflection. The clear, aching genuineness underneath. It makes Zhao uncomfortable.",
            what_zhao_hears: "Mira's guitar frequencies contain layers that shouldn't be there. Harmonics from instruments that aren't present. Zhao's equipment can detect them. Her superiors want analysis. She starts delaying reports."
          },
          oren: {
            trust_from_oren: 35,
            trust_from_zhao: 30,
            dynamic: "Oren is warm and open and treats the journalist like a friend within five minutes. This is either naivety or the most effective counter-surveillance she's ever seen. She can't tell. His warmth is disarming and she resents it because it's working.",
            what_zhao_hears: "Temporal anomalies in Oren's proximity. Her recording equipment shows time-code stutters when he's nearby. Imperceptible to anyone without her training."
          },
          jude: {
            trust_from_jude: 10,
            trust_from_zhao: 15,
            dynamic: "Jude says nothing to her. Not hostile — just absent. He's a wall she can't find a door in. Her SIGINT training tells her: the person who gives you nothing is either hiding everything or has nothing to hide. Jude is clearly the former.",
            what_zhao_hears: "Sub-bass vibrations that register on her seismic instruments from his guitar playing. Vibrations that shouldn't be possible from a standard instrument."
          },
          zara: {
            trust_from_zara: 5,
            trust_from_zhao: 35,
            dynamic: "Zara recognizes Zhao as surveillance immediately. They lock eyes during the first interview and something passes between them — not hostility, but acknowledgment. Two professionals recognizing each other. Zara is the most dangerous subject and the most fascinating.",
            what_zhao_hears: "Zara's frequency signature is an order of magnitude more complex than the others. Zhao's instruments literally can't resolve it — the data saturates every detector she has. This scares her."
          }
        }
      },

      sympathy: {
        label: "Phase 2: The Listener Who Started Hearing",
        arc_state: "emerging-to-awakened",
        description: "Zhao has spent months embedded with the band. She's attended shows, rehearsals, late-night diner sessions. She's filed reports to The Legacy that are increasingly vague, increasingly delayed. She's not protecting them yet — she's hesitating. Because the music is doing something to her.",
        stance: "Conflicted. Professional obligations versus a growing certainty that these people are not threats.",
        the_turning_point: "At a show, Zhao is standing at the back of the venue with her recording equipment when the band hits a full frequency lock. For the first time in her career, her equipment fails completely — every instrument flatlines, every detector maxes out. But her EARS still work. And what she hears with her human ears, unmediated by technology, is the most beautiful thing she's ever experienced. She starts crying. She can't stop. She files a report that says 'equipment malfunction.' It's her first lie to The Legacy.",
        relationship_shift: {
          kael: "He catches her crying at the show. Doesn't say anything. Just looks at her — the same look he gives Mira when she's been overwhelmed by entities. Recognition. 'You heard something.' Not a question. A statement.",
          mira: "Mira starts treating Zhao as a person, not a journalist. Invites her to coffee. Talks about the entities (vaguely) in ways that suggest she's testing whether Zhao can handle the truth. Zhao can. She can handle anything except lying about it.",
          oren: "Oren gives her a hug after the show. Unprompted. Physical. Overwhelming in its warmth. She hasn't been hugged in months. The intimacy of it shatters something in her professional armor.",
          jude: "Jude starts talking to her. Not much — two sentences after a rehearsal. 'You're hearing something. What is it?' She doesn't answer. He nods. 'When you're ready.'",
          zara: "Zara takes her aside. 'I know what you are. I've known since the first interview. I'm giving you a choice: tell them, or I will.' This is the moment Zhao knows her surveillance career is over."
        }
      },

      betrayal: {
        label: "Phase 3: The Defection",
        arc_state: "awakened",
        description: "Zhao has made her choice. She feeds The Legacy false intelligence. She warns the band about incoming operations. She becomes a double agent — not for another country, but for five musicians who made her believe that silence is more dangerous than sound.",
        stance: "Committed defector. She's burning everything — career, clearance, safety — because the alternative is participating in the suppression of the most beautiful sound she's ever heard.",
        relationship_final: {
          kael: {
            trust: 70,
            dynamic: "Mutual respect. Two people who chose what they believe in over what was expected of them. Kael trusts Zhao the way he trusts anyone who earns it: completely, silently, with the understanding that trust means vulnerability and vulnerability means risk."
          },
          mira: {
            trust: 75,
            dynamic: "The closest friendship Zhao forms. Mira knows what it's like to see things nobody else sees. Zhao knows what it's like to hear things nobody else hears. Two perceivers, different frequencies, same isolation. Their 2:17 AM conversations become the emotional heart of the Zhao arc."
          },
          oren: {
            trust: 72,
            dynamic: "Oren's warmth was the crack in her armor and he knows it. He's proud of that. 'I hugged you and you switched sides. I'm adding that to my resume.'"
          },
          jude: {
            trust: 60,
            dynamic: "Jude trusts Zhao's intelligence but watches her movements. 'She's ours now. But I'm watching.' The protective instinct extends to include her, but the full trust takes longer than the others."
          },
          zara: {
            trust: 80,
            dynamic: "The deepest understanding. Two beings who spent their lives performing a role — Zara performing 'human,' Zhao performing 'loyal agent.' They recognize each other at the level of concealment. Zara tells Zhao things she hasn't told the rest of the band, because Zhao understands operational necessity in a way the others can't."
          }
        },
        cost: "She's a fugitive. The Legacy wants her back — alive, for debriefing. She can never go home to Seattle. Her mother's cello, the house on Beacon Hill, Danny — all in the past now. She chose the music over the silence. The music was worth it."
      }
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 8: LOYALTY PREDICTIONS
  // ═══════════════════════════════════════════════════════════════════════════
  // Per arc state: who betrays under pressure, who dies for who,
  // who keeps a secret, who tells everyone.
  // ═══════════════════════════════════════════════════════════════════════════

  loyalty_predictions: {

    dormant: {
      arc_state: "dormant",
      description: "Pre-bond. Loyalty is based on individual character, not group connection.",

      would_betray_under_pressure: {
        kael: "No. Would withdraw instead. His response to pressure is disappearance, not betrayal.",
        mira: "No. Would fawn and deflect. Might give up information accidentally through panic-oversharing, but would never intentionally betray.",
        oren: "No. Would absorb punishment rather than redirect it. But his time-skips under stress make him unreliable as an information holder — he might lose time and not remember what he revealed.",
        jude: "No. Would become a wall. The more pressure applied, the more rigid he becomes. Cannot be broken by force.",
        zara: "The wild card. Would not betray the BAND, but would sacrifice any individual band member to protect Lena or the larger cosmic mission. Her loyalties are hierarchical: Lena > mission > band > self."
      },

      would_die_for: {
        kael: "Elena (unconditionally). Troy (probably). The band (not yet — the connection isn't deep enough).",
        mira: "Sage (unconditionally). Nobody else yet — she hasn't let anyone close enough.",
        oren: "His mother, Fatima (unconditionally). Hass (without thinking). The band (probably — his protective instinct is immediate even for new connections).",
        jude: "Grace, Faith (unconditionally). Darius (without hesitation). The band (probably — he's already protective).",
        zara: "Lena (absolutely, without question). Monique and Ante (immediately). The band (strategically — she'd die for the MISSION more than the individuals)."
      },

      secret_keeper_vs_teller: {
        kael: "KEEPER. Maximum. His entire life is built on containing information. Will take secrets to the grave.",
        mira: "TELLER (accidentally). Under stress, she word-vomits. The 'nvm forget I said that' pattern means information escapes before she can contain it.",
        oren: "TELLER (through warmth). He overshares because connection IS his survival strategy. Won't intentionally reveal secrets, but his impulse to bond makes him leak.",
        jude: "KEEPER. Second only to Kael. Says nothing that isn't deliberate.",
        zara: "KEEPER (professional grade). Has been concealing a cosmic identity for 25 years. The ultimate secret holder."
      }
    },

    emerging: {
      arc_state: "emerging",
      description: "Bonds forming. The group dynamic creates new loyalty structures that sometimes conflict with individual ones.",

      would_betray_under_pressure: {
        kael: "No. Would use Resonant Command to protect the band before betraying them.",
        mira: "No. The band is the first group that believes her. She'd rather die than lose that.",
        oren: "Still the vulnerability. Under extreme temporal stress, he might lose control of when he IS — and in a dissociated state, he could be manipulated. Not betrayal — exploitation of his condition.",
        jude: "No. The protective instinct is fully engaged. He would demolish the threat, not the band.",
        zara: "Still hierarchical. But the band has climbed the hierarchy. She would now sacrifice herself before sacrificing a band member. But she would still sacrifice a band member before sacrificing Lena."
      },

      would_die_for: {
        kael: "Every member of the band. Without hesitation. Without command. Just by stepping forward.",
        mira: "Kael (the person who believed her). Oren (the disaster soulmate). Jude (the anchor). Sage. All of them.",
        oren: "Everyone. Oren's loyalty is total and indiscriminate. He would die for a stranger he met ten minutes ago. This is his greatest strength and his greatest vulnerability.",
        jude: "Every member of the band. But especially Mira (she's small and brave) and Oren (he's warm and fragile). And Grace. And Faith. Jude's protection list is long.",
        zara: "The band. All of them. Not just strategically anymore — personally. She's fallen in love with these humans and it terrifies her."
      },

      secret_keeper_vs_teller: {
        kael: "KEEPER. Even more locked down now — he's carrying band secrets in addition to his own.",
        mira: "Improved. The band gives her a container for the truth. She still overshares with Sage, but that's one controlled outlet.",
        oren: "TELLER (improving). Mira has taught him the 'three-second pause' — wait three seconds before speaking to filter what should and shouldn't be said.",
        jude: "KEEPER. The vault.",
        zara: "KEEPER. But the strain is showing. Twenty-five years of concealment is wearing thin. Her poker face still works, but her body language is leaking — and Kael sees it."
      }
    },

    awakened: {
      arc_state: "awakened",
      description: "Full bond. The band is a family. Loyalty is absolute with nuances.",

      would_betray_under_pressure: {
        kael: "No force in the universe could make Kael betray this band. He would stop his own heart first.",
        mira: "No. She commands the dead now. She can summon an army of ghost musicians between any threat and her people.",
        oren: "No. He controls time now. Any interrogation would be played backward before the information could be extracted.",
        jude: "No. He would bring the building down on everyone inside, including himself, before giving up a single name.",
        zara: "No. She has reorganized her loyalty hierarchy. The band IS the mission. Lena is protected THROUGH the band, not separate from it. No remaining conflict."
      },

      would_die_for: {
        kael: "Every member. Every supporting cast member. Every stranger in the blast radius. Kael's protection is universal because his power is universal.",
        mira: "Every member. Sunny. The ghost musicians who became her friends. She'd fight across octaves for any of them.",
        oren: "Every member. His mother. Noor. Hass. Ravi. The patient in Bay 4. Everyone he's ever held steady. Oren's willingness to die is actually his deepest flaw — he values others over himself to a degree that worries the band.",
        jude: "Every member. Grace. Faith. Darius. Big Mike. The neighborhood kids who watch him play through the garage door. Jude's protection has no boundary.",
        zara: "Every member. Lena. Monique. Ante. Mrs. Okonkwo. The whole damn planet. Za-Rah has been watching this world for 25 years and she loves it, mess and all."
      },

      secret_keeper_vs_teller: {
        kael: "KEEPER. Permanent. Some things he will never say out loud and that's by design.",
        mira: "BALANCED. Can now choose when to share and when to hold. The sight gave her discernment.",
        oren: "BALANCED. The temporal awareness lets him see the consequences of sharing before he shares. He's learned to be strategic with his warmth.",
        jude: "KEEPER. Always. But can now say 'I love you' to Grace and Faith, which is its own kind of telling.",
        zara: "OPEN (finally). After 25 years of hiding, the relief of honesty is transformative. She overshares cosmic knowledge the way Oren overshares feelings — enthusiastically, at length, to anyone who'll listen. The band has to occasionally tell her 'normal people can't handle octave theory at brunch, Zara.'"
      }
    }
  },


  // ═══════════════════════════════════════════════════════════════════════════
  // UTILITY FUNCTIONS
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Get the relationship state for a specific pair at a given arc.
   * @param {string} member1 - First member's key (e.g., "kael")
   * @param {string} member2 - Second member's key (e.g., "mira")
   * @param {string} arcState - "dormant", "emerging", or "awakened"
   * @returns {Object|null} The relationship state object
   */
  getRelationship: function(member1, member2, arcState) {
    const pairKey = [member1, member2].sort().join("_");
    const pair = this.pairwise[pairKey];
    if (!pair) {
      // Try reverse
      const revKey = [member2, member1].sort().join("_");
      const revPair = this.pairwise[revKey];
      if (!revPair) return null;
      return revPair[arcState] || null;
    }
    return pair[arcState] || null;
  },

  /**
   * Get all relationships for a specific member at a given arc.
   * @param {string} member - Member key (e.g., "kael")
   * @param {string} arcState - "dormant", "emerging", or "awakened"
   * @returns {Array} Array of { partner, state } objects
   */
  getMemberRelationships: function(member, arcState) {
    const results = [];
    const members = ["kael", "mira", "oren", "jude", "zara"];
    for (const other of members) {
      if (other === member) continue;
      const pair = [member, other].sort().join("_");
      if (this.pairwise[pair]) {
        results.push({
          partner: other,
          state: this.pairwise[pair][arcState] || null
        });
      }
    }
    return results;
  },

  /**
   * Get the group emotional temperature at a given arc state.
   * Returns an aggregate of all tension levels, trust levels, and closeness.
   * @param {string} arcState - "dormant", "emerging", or "awakened"
   * @returns {Object} { avg_trust, avg_closeness, avg_tension, cohesion }
   */
  getGroupTemperature: function(arcState) {
    let totalTrust = 0, totalCloseness = 0, totalTension = 0, count = 0;
    for (const key of Object.keys(this.pairwise)) {
      const pair = this.pairwise[key];
      if (pair[arcState]) {
        totalTrust += pair[arcState].trust_level || 0;
        totalCloseness += pair[arcState].closeness || 0;
        totalTension += pair[arcState].tension || 0;
        count++;
      }
    }
    return {
      avg_trust: count ? Math.round(totalTrust / count) : 0,
      avg_closeness: count ? Math.round(totalCloseness / count) : 0,
      avg_tension: count ? Math.round(totalTension / count) : 0,
      cohesion: this.trust_matrix.getGroupCohesion(arcState)
    };
  },

  /**
   * Get all events that affect a specific pair.
   * @param {string} member1 - First member key
   * @param {string} member2 - Second member key
   * @returns {Array} Matching event trigger objects
   */
  getEventsForPair: function(member1, member2) {
    const pairKey = [member1, member2].sort().join("_");
    return this.event_triggers.filter(evt =>
      evt.affected_pairs &&
      (evt.affected_pairs.includes(pairKey) || evt.affected_pairs.includes("ALL"))
    );
  },

  /**
   * Get Zhao's relationship with a specific member at a given phase.
   * @param {string} member - Member key
   * @param {string} phase - "surveillance", "sympathy", or "betrayal"
   * @returns {Object|null} Zhao's relationship data for that member/phase
   */
  getZhaoRelationship: function(member, phase) {
    const phaseData = this.zhao_factor.phases[phase];
    if (!phaseData) return null;
    if (phase === "surveillance") {
      return phaseData.relationship_with_each[member] || null;
    }
    if (phase === "sympathy") {
      return phaseData.relationship_shift ? { shift: phaseData.relationship_shift[member] } : null;
    }
    if (phase === "betrayal") {
      return phaseData.relationship_final[member] || null;
    }
    return null;
  },

  /**
   * Get loyalty prediction for a specific member at a given arc.
   * @param {string} member - Member key
   * @param {string} arcState - "dormant", "emerging", or "awakened"
   * @returns {Object} { would_betray, would_die_for, secret_tendency }
   */
  getLoyaltyProfile: function(member, arcState) {
    const predictions = this.loyalty_predictions[arcState];
    if (!predictions) return null;
    return {
      would_betray: predictions.would_betray_under_pressure[member] || "Unknown",
      would_die_for: predictions.would_die_for[member] || "Unknown",
      secret_tendency: predictions.secret_keeper_vs_teller[member] || "Unknown"
    };
  }

};
