/**
 * SUPPORTING CAST ENGINE — Signal Decay
 * ======================================
 * The friends, partners, coworkers, and family who orbit The Five.
 * Each entry defines how these characters appear in the reader app,
 * how they're referenced in chat/messages, and their narrative function.
 *
 * Created: 2026-08-28
 * Source Truth: BAND_INNER_CIRCLES.md, ALL_CHARACTERS_BACKSTORIES.md,
 *              HIGH_SCHOOL_YEARS.md, OREN_FULL_ARC.md
 *
 * STRUCTURE:
 *   SUPPORTING_CAST[mainCharacter][characterId] = {
 *     name, age, relationship, met_how, known_years,
 *     knows_about_powers, personality_brief, role,
 *     dialog_style, how_main_talks_about_them,
 *     shared_connections, arc_potential
 *   }
 */

const SUPPORTING_CAST = {

  // ═══════════════════════════════════════════════════════════════════════════
  // KAEL VOSS — Vocals, 24, Warehouse Worker
  // ═══════════════════════════════════════════════════════════════════════════
  kael_voss: {

    // ─── BEST FRIEND / CONFIDANT ───────────────────────────────────────────
    troy_jackson: {
      name: "Troy Jackson",
      age: 24,
      relationship: "Best friend since 7th grade",
      met_how: "Middle school, 7th grade. Troy was the loud one who adopted the quiet kid. They bonded over shared humor and Troy being the social shield Kael never had to build himself.",
      known_years: 12,
      knows_about_powers: "suspects_strongly",
      knowledge_detail: "Has noticed The Thing for years. Jokes about it — 'Bro you got Jedi mind tricks or some shit.' Doesn't push, but has watched rooms bend to Kael's will hundreds of times. When the full manifestation happens, his reaction is immediate: 'I KNEW IT. I BEEN SAYING THIS.'",
      personality_brief: "Loud, loyal, physical energy. The kind of friend who talks enough for two people. Works at AutoZone, content with his life in a way Kael envies. Stocky, Black, always moving — hands gesturing, body shifting, can't sit still. Heart of gold under a mouth that never stops.",
      role: "confidant",
      role_detail: "The one who KNOWS without being told. The civilian witness. The friend who'll defend Kael to anyone but also roast him mercilessly. Provides normalcy — reminds Kael he's still a person, not just a vessel.",
      dialog_style: "ALL CAPS energy in texts. Short punchy sentences. Heavy slang. Voice notes instead of typing when he's excited. 'BRO.' 'Nah nah nah listen.' 'I'm telling you.' Always starting conversations mid-thought.",
      how_main_talks_about_them: "Kael references Troy with a mix of affection and exasperation. 'Troy says—' (eye roll, but smiling). Troy is the only person Kael quotes directly in conversation. The shorthand for 'my actual life' vs whatever cosmic thing is happening.",
      shared_connections: ["kwame_ansah"],
      arc_potential: "First civilian witness to full vocal manifestation. Becomes an unofficial protector/gatekeeper — the friend who screens people trying to get to Kael once the power goes public. His unshakeable loyalty is tested when the Legacy comes asking questions."
    },

    // ─── ROMANTIC INTEREST (PAST / RETURNING) ──────────────────────────────
    nina_osei: {
      name: "Nina Osei",
      age: 24,
      relationship: "The Almost — romantic connection at 17 that never became official",
      met_how: "High school, age 17. Connected through mutual friends. Six months of long drives, parking lot conversations at 1 AM, the kind of intimacy that's deeper than dating because it has no label.",
      known_years: 7,
      knows_about_powers: "felt_something",
      knowledge_detail: "Was the first person to feel the soul-resistance — Kael pulled away and couldn't explain why. In the present, when they reconnect, she can FEEL something when he speaks. It frightens her. 'You're not the same person.' She was the first to say: 'You're gonna be something. I don't know what. But something.'",
      personality_brief: "Ghanaian-American. Direct, fearless, emotionally intelligent. Became a nurse practitioner — works at the same hospital as Oren (they don't know each other yet). Beautiful in a way that's confident, not performative. Says exactly what she means. Doesn't play games. The kind of woman who makes you feel like a coward for not being honest.",
      role: "love_interest_returning",
      role_detail: "The person-shaped hole from Kael's past. Represents the life he couldn't have because the soul wasn't ready. Her return forces him to confront whether he can love someone now that the voice is awakening — or if the power will always push people away.",
      dialog_style: "Direct, warm, occasionally cutting. Full sentences. Doesn't use filler words. Asks questions that go straight to the bone. 'What are you now?' Not mean — just honest in a way that strips defenses.",
      how_main_talks_about_them: "Kael doesn't talk about Nina. That's how you know she matters. If someone brings her up, he goes quiet. Changes subject. Troy is the only one who knows the full story. When she reappears in his life, Kael talks AROUND her — 'someone from high school' — but his voice changes. Softer. More careful.",
      shared_connections: ["oren_malik_hospital"],
      arc_potential: "Reconnects with Kael after the awakening. Her medical training plus her emotional intelligence makes her one of the few people who can handle what he's becoming. But she's also the test: can Resonant Command coexist with genuine love? Or does the voice corrupt everything?"
    },

    // ─── WORK FRIEND / COLLEAGUE ───────────────────────────────────────────
    raylan_meeks: {
      name: "Raylan Meeks",
      age: 31,
      relationship: "Warehouse coworker, shift buddy for 3 years",
      met_how: "Started at the distribution warehouse within weeks of each other. Assigned to the same loading dock. Bonded over the shared misery of 5 AM starts and the mutual agreement that silence is okay.",
      known_years: 3,
      knows_about_powers: "nothing",
      knowledge_detail: "Has zero awareness of anything supernatural. To Raylan, Kael is just a quiet young guy who's too smart for this job but never complains. He's noticed that people do what Kael says, but files that under 'natural authority' — some guys just have it.",
      personality_brief: "White, lanky, early 30s, divorced dad of one. Dry humor. Smokes on break. Has the slightly defeated air of someone who peaked in his 20s and is making peace with the plateau. Good heart, low ambition. Reads thriller novels on break. The kind of coworker who makes a bad job bearable.",
      role: "normal_world_contrast",
      role_detail: "Pure normalcy. Represents the life Kael might live forever if the awakening never happens — quiet, small, unremarkable but not unhappy. Their friendship is built on comfortable silence. Raylan is the measuring stick for 'regular life.'",
      dialog_style: "Laconic. Dry. Economy of words. 'Yep.' 'That tracks.' 'Could be worse.' Texts with periods at the end of sentences which makes everything sound slightly ominous. Never uses emojis.",
      how_main_talks_about_them: "Kael mentions Raylan casually — 'guy at work' or 'Raylan said the truck's late again.' It's unremarkable, which IS the point. Raylan is Kael's evidence that he can exist in the normal world. That he's not ONLY the cosmic thing.",
      shared_connections: [],
      arc_potential: "When Kael eventually leaves the warehouse (band takes off, awakening demands more), Raylan is the goodbye that costs something. The quiet friendship that gets sacrificed to destiny. He won't understand why Kael's leaving. 'You got something better?' 'I don't know yet.' 'Well. Good luck with that.'"
    },

    // ─── FAMILY MEMBER WHO MATTERS MOST ────────────────────────────────────
    elena_voss: {
      name: "Elena Voss",
      age: 20,
      relationship: "Younger sister, 4 years gap",
      met_how: "Born into it. Elena is the baby sister who idolizes her big brother in a way that both warms and embarrasses him.",
      known_years: 20,
      knows_about_powers: "studying_it_unknowingly",
      knowledge_detail: "Psychology major at state university. Started noticing The Thing at 16 — people COMPLY when Kael speaks. She's written academic papers about 'charismatic authority' using Kael as her anonymous case study. She thinks it's social psychology. It's not. She's the closest to documenting the power scientifically without knowing it's supernatural.",
      personality_brief: "Energetic, smart, socially fearless. The opposite of Kael in every external way — loud, social, goes to every party. But internally they're the same: both watching, both analyzing, both a little too aware of how people work. She drags him to shows. Gets him out of the apartment. Would fight God for him.",
      role: "family_anchor",
      role_detail: "The person who won't let Kael disappear. Every time he retreats into himself (which is constantly), Elena pulls him back. She's also accidentally the most dangerous person in his life — her psychology papers, if connected to the real phenomenon, could attract the Legacy's attention.",
      dialog_style: "Rapid-fire texts with zero punctuation. Voice notes that are 3 minutes long about nothing. Memes. Sends articles at 2 AM with no context. 'omg this is literally you' (links personality study). Uses his full name when serious: 'Kael David Voss.'",
      how_main_talks_about_them: "Kael talks about Elena with fond exasperation — she's the little sister who won't stop poking. But there's fierce protectiveness underneath. He'll casually drop 'my sister says—' and you can hear the pride. She's the one person he never needs to perform for.",
      shared_connections: [],
      arc_potential: "Her psychology research becomes accidentally relevant when the Resonance goes public. She's one of the first academics to have documented evidence of Resonant Command in a peer-reviewed context — even though she didn't know what she was documenting. This makes her both valuable and vulnerable."
    },

    // ─── THE ONE WHO DOESN'T GET IT ────────────────────────────────────────
    dominic_reyes: {
      name: "Dominic 'Dom' Reyes",
      age: 24,
      relationship: "Former best friend / bandmate (ages 15-18), now distant",
      met_how: "High school. Were in a garage punk band together — Dom on guitar, Kael on vocals. They were terrible. But when Kael sang, people stopped what they were doing.",
      known_years: 9,
      knows_about_powers: "remembers_something",
      knowledge_detail: "Remembers what Kael sounded like at 16. Now a small-time music producer in LA. When Signal Decay breaks out, Dom will hear Kael's voice and KNOW something is fundamentally different. 'Bro... what happened to you? You sound like—' He can't finish because what Kael sounds like now isn't human.",
      personality_brief: "Dominican. Ambitious, restless, always climbing. Left their small city for LA and never looked back. Charming, talented, slightly selfish in the way people who chase dreams have to be. Has the kind of life Kael was 'supposed' to have — music career, momentum, forward motion. Feels guilty about drifting from Kael but not enough to come back.",
      role: "contrast_mirror",
      role_detail: "Represents the path not taken AND the person who faded because the soul wasn't ready for witnesses. Dom is what happens when someone leaves Kael's gravity — they succeed normally, without the weight. His return when Signal Decay gets big creates tension: is he coming back for Kael, or for proximity to something bigger?",
      dialog_style: "LA music industry speak. 'Bro.' 'That's fire.' 'We should link up.' Texts that are 60% emojis. Instagram DMs instead of actual messages. Everything sounds like a pitch meeting, even genuine emotion. He means well but everything comes filtered through ambition.",
      how_main_talks_about_them: "Kael rarely mentions Dom. When he does, it's past tense and slightly hollow: 'I used to have this friend who—' then trails off. The drift still hurts. Dom represents everyone who left, and the part of Kael that wonders if people leave because of what he is.",
      shared_connections: [],
      arc_potential: "Reaches out when Signal Decay blows up. Wants to produce them. Wants back in. Kael has to decide: is this the friend returning, or is this the industry smelling blood? The answer is both, which makes it harder."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MIRA CHEN — Lead Guitar, 22, Guitar Teacher
  // ═══════════════════════════════════════════════════════════════════════════
  mira_chen: {

    // ─── BEST FRIEND / CONFIDANT ───────────────────────────────────────────
    sage_kowalski: {
      name: "Sage Kowalski",
      age: 23,
      relationship: "Best and only friend since age 14",
      met_how: "Art class, freshman year of high school. Bonded over being the weird ones — though Sage is weird by choice (aesthetic, performance) and Mira is weird because she can't help it. That difference never mattered to Sage.",
      known_years: 9,
      knows_about_powers: "full_knowledge",
      knowledge_detail: "The ONLY living person who knows about the entities. Has never seen them, but believes Mira completely. Not because of proof — because 'the world is more fucked up than people admit, so why NOT ghosts.' They don't fully understand the mechanics, but they don't need to. At the first Signal Decay show, when Mira summons the ghost band publicly, Sage just nods: 'I always knew you had a band we couldn't see.'",
      personality_brief: "White, non-binary, tattoo artist. All black before it was aesthetic. Fierce loyalty masked by casual affect. Dry humor that borders on morbid. The friend who shows up at midnight without being asked. Steady in a way that seems impossible for someone covered in stick-and-poke tattoos and living off ramen. Uses they/them.",
      role: "confidant",
      role_detail: "Mira's lifeline to humanity. The one person who makes the living world bearable. Without Sage, Mira would have been fully consumed by the entities years ago. They're the proof that not all connections require understanding — sometimes love is enough.",
      dialog_style: "Deadpan texts. Dark humor. 'cool cool cool' (when things are clearly not cool). Short sentences. Occasional all-caps for emphasis that hits harder because they're usually understated. 'Mira. MIRA. answer your phone.' Never asks 'are you okay' — asks 'how bad is it on a scale.'",
      how_main_talks_about_them: "Mira mentions Sage with quiet warmth — 'Sage says—' is always followed by something grounding. They're her reality check. When things get too cosmic, too heavy, too dark, Mira will say 'I need to call Sage' the way someone else would say 'I need air.'",
      shared_connections: ["olivia_grant"],
      arc_potential: "When the band's social circles merge, Sage and Olivia (Zara's best friend) recognize each other from art school dropout circles. They bond immediately. Sage becomes the bridge between Mira's world and the band's wider orbit. Also: first civilian to be fully briefed on the entities WITH context, by the whole band."
    },

    // ─── ROMANTIC INTEREST (PAST / COMPLICATED) ────────────────────────────
    cameron_lewis: {
      name: "Cameron 'Cam' Lewis",
      age: 23,
      relationship: "First real love, dated 5 months at age 16",
      met_how: "School jazz band — Cam played keyboard. Sweet, sensitive boy who saw Mira eating lunch alone and just sat down. Didn't ask permission. Didn't make it a thing. Just sat.",
      known_years: 7,
      knows_about_powers: "experienced_effects_unknowingly",
      knowledge_detail: "Has no idea what happened. His equipment kept 'malfunctioning' — keyboard playing wrong notes during jazz practice, laptop crashing, car battery dying. Mira broke up with him to protect him from the entities (Keys got jealous, started interfering). He was devastated. Never understood why. Still writes songs about her that he'll never play for anyone.",
      personality_brief: "Black, gentle, emotionally intelligent. The kind of boy who asks 'no but how are you ACTUALLY doing.' Studies music therapy in grad school now. Still has that sweetness — hasn't been hardened by the world. Plays keyboard beautifully. Remembers Mira like a song he can't quite finish.",
      role: "love_interest_past",
      role_detail: "Represents what the entities cost Mira — a normal love, a gentle boy, a life where she could be soft. His existence is a wound she carries. The entities took him from her not through violence but through interference — proving they're possessive, not just friendly.",
      dialog_style: "Warm, considered texts. Always capitalizes properly. 'Hey, I've been thinking about you. No pressure, just wanted you to know.' Music recommendations sent with no context because they both know words aren't always needed. Thoughtful. Careful. Still a little tentative around her.",
      how_main_talks_about_them: "Mira almost never talks about Cam. When she does, her voice goes very quiet and very controlled. 'I dated someone once. It didn't—I had to—' She can't finish because the truth ('I broke up with him because dead musicians got jealous') sounds insane. The guilt is still fresh.",
      shared_connections: [],
      arc_potential: "Reconnects after the awakening. Hears Mira play with Signal Decay and realizes — the 'equipment problems' were never equipment problems. She was PROTECTING him. This realization, plus his music therapy training, makes him uniquely positioned to understand what she does. The question: can the entities share her now that she's stronger? Or is Cam still in danger?"
    },

    // ─── WORK FRIEND / STUDENT-TURNED-FRIEND ───────────────────────────────
    iris_delgado: {
      name: "Iris Delgado",
      age: 17,
      relationship: "Guitar student turned friend/protégé",
      met_how: "Signed up for lessons through a community center posting. Mira's been teaching her for two years. Started as a student but became something closer — a little sister Mira never had. Iris is talented enough that the sessions are more collaboration than instruction now.",
      known_years: 2,
      knows_about_powers: "nothing_but_senses_something",
      knowledge_detail: "Has never seen or been told about the entities. But she's noticed things: Mira spaces out during lessons and comes back playing something impossible. The room gets cold sometimes. Once, a string on Iris's guitar vibrated by itself when Mira was across the room. Iris thinks Mira is 'just really talented and a little weird.' She has no framework for the truth.",
      personality_brief: "Mexican-American, 17, lives with her grandmother. Bright, curious, hungry to learn. Not yet jaded. Reminds Mira of what she COULD have been if the entities hadn't claimed her so young. Plays guitar with raw emotion that makes up for developing technique. Talks fast, laughs loud, wears her heart completely visible.",
      role: "grounding_force",
      role_detail: "Iris represents the normal world pulling at Mira — a reminder that she can have healthy human connections, that she can give something back, that she's not just a conduit for the dead. Teaching Iris is the only time Mira feels fully human and fully useful simultaneously.",
      dialog_style: "Excitable teenager energy. 'MISS MIRA look what I learned!!' Texts with a million exclamation points. Sends videos of her practice with the nervous energy of someone seeking approval. Uses 'lol' as punctuation. Switches between English and Spanish when excited.",
      how_main_talks_about_them: "Mira talks about Iris with genuine pride — something she doesn't feel about herself. 'My student figured out the Polyphia section' — and you can hear the smile. Iris is proof that Mira can nurture something living, not just commune with the dead.",
      shared_connections: [],
      arc_potential: "When Signal Decay goes public and Mira's powers become known, Iris has to reconcile 'my weird cool guitar teacher' with 'the woman who commands an army of dead musicians.' She handles it better than anyone expects — because she's 17 and the impossible hasn't been beaten out of her yet. 'That's SO SICK. Can they teach me anything?'"
    },

    // ─── FAMILY MEMBER WHO MATTERS MOST ────────────────────────────────────
    sandra_chen: {
      name: "Sandra Chen née Williams",
      age: 48,
      relationship: "Mother",
      met_how: "Birth. But the real relationship began at age 8 when the entities first appeared and Sandra became the only parent who didn't try to fix Mira with medication.",
      known_years: 22,
      knows_about_powers: "believes_but_denies",
      knowledge_detail: "Sandra BELIEVES Mira sees things. Has a cousin who 'had the sight.' Grew up in a church where speaking in tongues was normal. But she's SCARED — because her cousin ended up institutionalized at 35. So Sandra's approach is denial wrapped in love: don't encourage it, don't acknowledge it, pray it away. 'Baby, you need to go to church.' Mira won't.",
      personality_brief: "Black American, former dancer (modern/contemporary — gave it up when she married David). Warm, fierce, conflicted. Her love for Mira is enormous and complicated by fear. She moves like a dancer still — graceful, physical, present. Sings while cooking (gospel, jazz, R&B). Her voice is remarkable. She never pursued it.",
      role: "family_anchor",
      role_detail: "The complicated love. Sandra wants to protect Mira from the very thing that defines her. She represents the cost of the entities on family — the fear, the helplessness of watching your child be different and not being able to help. Their relationship is the most painful and tender thing in Mira's life.",
      dialog_style: "Warm Southern cadence in texts (Louisiana roots). Full words, no abbreviations. 'Baby girl call me when you get home.' 'Have you eaten today?' 'I'm praying for you.' Checks in daily. Every text is love wrapped in worry. Uses 'mm-hmm' and 'chile' verbally.",
      how_main_talks_about_them: "Mira talks about her mom with a tightness that reveals the love-pain tangle. 'My mom called again' — said with exhaustion that isn't actually annoyance, it's guilt. Guilt for not being normal. Guilt for scaring her. Guilt for not being able to stop.",
      shared_connections: [],
      arc_potential: "When the entities go public, Sandra's lifelong belief/denial is validated and shattered simultaneously. She was RIGHT — her daughter sees things. But she was also right to be scared. The question becomes: can Sandra's faith framework (speaking in tongues, spiritual gifts, church tradition) help her understand what Mira is? Or does the cosmic scale break her faith entirely?"
    },

    // ─── THE ONE WHO DOESN'T GET IT ────────────────────────────────────────
    jason_chen: {
      name: "Jason Chen",
      age: 25,
      relationship: "Older brother, 3 years gap",
      met_how: "Grew up in the same house. But the gap between them might as well be an ocean. Jason is the normie — finance bro, good-looking, social, successful. Having Mira as a sister was a 'social liability' in high school.",
      known_years: 22,
      knows_about_powers: "actively_denies",
      knowledge_detail: "Has spent a decade dismissing everything about Mira. 'My sister's weird' was his high school defense. He chose not to see what was clearly there. When the truth comes out, the guilt will break him — because if Mira was telling the truth all along, then he spent ten years dismissing his own sister. That guilt eats.",
      personality_brief: "Chinese-American. Finance career, good apartment, gym body, active social life. Everything Mira isn't, by design. He's not cruel — he's UNCOMFORTABLE. Her weirdness makes him question the normal life he's built, so he denies it. They barely talk. Not because of a fight — because they have nothing in common. The silence at family dinner is thick.",
      role: "normal_world_contrast",
      role_detail: "Jason is the measuring stick for 'what Mira should be' in the family's eyes — successful, stable, comprehensible. He represents the world that rejected her. His eventual reckoning with guilt is one of the most human arcs in the story.",
      dialog_style: "Corporate professional even in texts. 'Hey, checking in. How's the teaching going?' Surface-level. Never asks real questions because real answers scare him. Group chat contributions are logistics only: 'What time for dinner.' 'I'll bring wine.' Avoids one-on-one conversation.",
      how_main_talks_about_them: "Mira barely mentions Jason. When she does, it's flat — 'my brother' without warmth or anger. The absence of emotion IS the emotion. She stopped hoping he'd understand years ago. It doesn't hurt anymore. (It does.)",
      shared_connections: [],
      arc_potential: "The hardest convert. Will deny Mira's powers until he physically witnesses them. And then the breakdown — ten years of dismissal crashing into proof. Can he come back from that? Can their relationship be rebuilt? The answer takes seasons to unfold."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JUDE OKAFOR — Rhythm Guitar, 26, Demolition Crew
  // ═══════════════════════════════════════════════════════════════════════════
  jude_okafor: {

    // ─── BEST FRIEND / CONFIDANT ───────────────────────────────────────────
    darius_cole: {
      name: "Darius Cole",
      age: 26,
      relationship: "Best friend since age 14, the brother from another",
      met_how: "Football together in high school. Same height (6'2\"), same energy. Did everything together — workouts, parties, fights (yes, plural). Darius LEFT HIS ACOUSTIC GUITAR at Jude's house at 15. That guitar changed everything.",
      known_years: 12,
      knows_about_powers: "knows_something_is_different",
      knowledge_detail: "Has jammed with Jude hundreds of times. Every session, there's a moment where Jude goes somewhere Darius can't follow — the heaviness, the DROP, the place where riffs stop being music and start being WEIGHT. Darius pulls back from that edge. Jude lives there. Darius knows this isn't normal. But he frames it as 'intensity' rather than supernatural.",
      personality_brief: "Black, 6'2\", firefighter now. Steady, warm, loyal to a fault. Plays guitar too (blues, funk — lighter stuff). Has the easy confidence of someone who likes his life and knows who he is. The anti-Jude in temperament — calm where Jude rages, light where Jude goes dark. Their friendship works because Darius is unshakeable.",
      role: "confidant",
      role_detail: "The emotional anchor Jude trusts completely. The one person Jude has never been afraid of hurting (because Darius is strong enough to take it). When the seismic power goes public, Darius is the proud older brother in the audience — even though they're the same age.",
      dialog_style: "Warm, easy, unhurried. 'Man, come on.' 'We doing this or what.' Texts like he talks — simple, direct, no filler. Sends invitations not requests: 'Jam Sunday. Bring beer.' Voice notes where you can hear him smiling. Never pressures, never pushes, just keeps showing up.",
      how_main_talks_about_them: "Jude talks about Darius with the rare softness he shows no one else. 'D said—' is always followed by something that grounds Jude. Darius is Jude's proof that he can be loved by someone who sees the darkness and stays anyway.",
      shared_connections: ["kwame_ansah"],
      arc_potential: "Front row at the first show. When the floor ACTUALLY shakes during Jude's riff, Darius doesn't run. He grins. Because he's always known. He's always heard that edge in the jam sessions. Now the world hears it too. 'That's my boy.' But later, privately: 'How long have you known?' And Jude has to answer honestly for the first time."
    },

    // ─── ROMANTIC INTEREST (PAST / HAUNTING) ───────────────────────────────
    aisha_carter: {
      name: "Aisha Carter",
      age: 26,
      relationship: "Ex-girlfriend, dated ages 16-18. First real love.",
      met_how: "High school. She was tall, played volleyball, moved slow and deliberate. Her voice was honey. They gravitated toward each other like bodies with matching density — both big, both physical, both carrying weight.",
      known_years: 10,
      knows_about_powers: "experienced_the_consequences",
      knowledge_detail: "Was there for the cracked wall. They were arguing. His hand hit the wall NEXT to her head — not at her, never at her — and the wall cracked. Actual structural damage from a 17-year-old's fist. He broke up with her the next day. She still doesn't understand the supernatural element, but she REMEMBERS the vibration. When she sees a Signal Decay livestream years later and the floor shakes during Jude's riff — she recognizes it. Same vibration. Same frequency.",
      personality_brief: "Black, tall (5'10\"), graceful. Physical therapist now. Married. Happy. Moved on in all the ways that matter. But she still thinks about Jude sometimes — not with love, but with worry. 'I hope he found someone who could handle it.' She has the calm that Jude always needed and was too afraid to keep.",
      role: "love_interest_past",
      role_detail: "The ghost of what tenderness cost. Aisha represents the life Jude destroyed preemptively — he broke it before it could break him. She's proof that he was capable of love, and proof that the rage (the power) takes things from him. The cracked wall is the mythology of their relationship.",
      dialog_style: "They don't talk anymore. But IF they did: measured, kind, a little sad. 'I think about you sometimes. Not like that. Just — wondering if you're okay.' She'd be gentle. She was always gentle. That was the whole point.",
      how_main_talks_about_them: "Jude never says her name. If someone asks about past relationships: 'There was someone. It didn't work.' End of conversation. But if you watch his face when a tall woman with long braids walks by — there's a flicker. A micro-expression of loss so quick you'd miss it if you blinked.",
      shared_connections: [],
      arc_potential: "Her husband is at a Signal Decay show. Sends her a livestream. She recognizes the vibration — the same one that cracked her bedroom wall ten years ago. Does she reach out? Does she stay away? And if Jude ever learns she's watching: what does that crack open in him?"
    },

    // ─── WORK FRIEND / COLLEAGUE ───────────────────────────────────────────
    big_mike_okonkwo: {
      name: "Michael 'Big Mike' Okonkwo",
      age: 34,
      relationship: "Demolition crew foreman, mentor figure",
      met_how: "Jude got the demo job at 19 after flunking out of college. Big Mike trained him. Saw the rage in the kid and instead of being afraid, channeled it: 'You wanna hit things? Good. Here's a sledgehammer. Hit THAT wall. Get paid for it.'",
      known_years: 7,
      knows_about_powers: "suspicious_but_practical",
      knowledge_detail: "Has noticed that Jude's demolition results don't match physics. Walls come down too fast. Concrete cracks in patterns that shouldn't form from where the sledgehammer hits. A foundation that should take a crew of four takes Jude alone. Mike chalks it up to 'that boy's built different' — Nigerian pragmatism. Doesn't question gifts. Just uses them.",
      personality_brief: "Nigerian-American (Igbo). Built like a barrel. Laughs from his belly. Ran the demo crew for 12 years. Treats his guys like family — feeds them, covers for them, kicks their ass when needed. Has two daughters he shows phone photos of CONSTANTLY. Deeply religious (Catholic) in a quiet, personal way.",
      role: "mentor_work",
      role_detail: "The father figure Jude's actual father can't be. Manny Okafor wants Jude to BUILD — Big Mike lets him DESTROY. And there's no judgment in it. Mike sees the value in controlled demolition. He made Jude's rage productive without asking it to be pretty.",
      dialog_style: "Booming voice energy even in texts. 'OI. Monday 6 AM. Don't be late.' Mix of Nigerian English and American slang. Calls everyone 'my brother' or 'my guy.' Voice notes that are mostly him laughing at his own jokes. Sends photos of demo sites with captions like 'look at this beauty we're taking down tomorrow.'",
      how_main_talks_about_them: "Jude talks about Big Mike with respect that borders on reverence — rare for him. 'My foreman says—' always delivered with weight. Mike is one of the only authority figures Jude doesn't rebel against, because Mike never asked him to be less than he is.",
      shared_connections: [],
      arc_potential: "When the seismic power becomes undeniable (a building comes down wrong, or a job goes sideways because Jude's emotions spike), Mike is the first civilian authority figure to witness it directly. His response: not fear. Not denial. Nigerian practical spirituality: 'Boy, your ancestors gave you something. Use it right or it'll use you.' Then: 'You still coming Monday?'"
    },

    // ─── FAMILY MEMBER WHO MATTERS MOST ────────────────────────────────────
    faith_okafor: {
      name: "Faith Okafor",
      age: 26,
      relationship: "Twin sister",
      met_how: "Shared a womb. Same birthday. Completely different planets. She's small, quiet, brilliant. PhD student in astrophysics. Never broken anything in her life. The other half of a coin.",
      known_years: 26,
      knows_about_powers: "intuits_deeply",
      knowledge_detail: "Knows the rage isn't 'anger issues.' Has told their parents: 'He's not angry. He's GRIEVING. He just doesn't know what for.' Gets migraines when he's spiraling — feels his pain across distance. Their twin bond defies explanation. She's the closest anyone has come to the truth without knowing the truth.",
      personality_brief: "Nigerian-American, petite (5'3\" to his 6'2\"), brilliant, intensely focused. Studies stars for a living. Speaks softly but with precision — every word chosen. Has their mother Grace's calm and their father Manny's intellect. The family's golden child without ever asking to be.",
      role: "family_anchor",
      role_detail: "The emotional translator between Jude and the world. She speaks Jude in a way no one else can — explaining him to their parents, to himself. And her astrophysics research will accidentally pick up Signal Decay's frequency in data she shouldn't be able to read. Science and soul converging in one person.",
      dialog_style: "Precise, warm, quiet authority. Full sentences always. 'Jude. Call me back. I can feel you spiraling.' 'I had the migraine again — what happened?' Texts that are short but carry enormous weight. She doesn't fill silence. She uses it.",
      how_main_talks_about_them: "Jude talks about Faith with a softness that shocks people who only know the demolition-guy exterior. 'My sister—' and his whole demeanor shifts. Gentler. More careful. She's the only person he's never been afraid of hurting because she's unbreakable in her own way.",
      shared_connections: ["ravi_patel"],
      arc_potential: "Her astrophysics research detects the barrier weakening — from the science side. She connects anomalous frequency data to her brother before anyone else does. She becomes the bridge between the scientific community and Signal Decay. Also: the twin-bond means she FEELS the awakening when it happens. Every power spike Jude has, Faith knows. Miles away. Instantly."
    },

    // ─── THE ONE WHO DOESN'T GET IT ────────────────────────────────────────
    kwame_ansah: {
      name: "Kwame Ansah",
      age: 26,
      relationship: "Friend since age 16, the social connector",
      met_how: "Friend group in high school. Kwame was the social glue — knew everybody, got them into parties, found the weed, knew which gas stations didn't card. Short, fast-talking, Ghanaian-American.",
      known_years: 10,
      knows_about_powers: "nothing_real",
      knowledge_detail: "Sensed a line he couldn't cross. Once joked 'Bro you got demon energy.' Jude didn't laugh. Kwame never said it again. He KNOWS Jude is intense in a way that transcends personality, but he'd never frame it as supernatural. To Kwame, Jude is just built different. End of analysis.",
      personality_brief: "Ghanaian-American. Short, wiry, talks at double speed. Runs a sneaker resale business (making real money). Knows EVERYBODY. The guy who has a guy for everything. Pure hustle energy. Heart is good but attention span is short — everything is transactional on the surface, genuine underneath.",
      role: "normal_world_contrast",
      role_detail: "Kwame is normal-world noise — the friend who keeps Jude connected to regular life. BBQs, group chats, 'you coming out tonight?' He's also, crucially, the one who books bands at The Frequency (Zara's venue) without knowing the sound tech is a future bandmate. He's the accidental catalyst.",
      dialog_style: "Machine-gun texts. 'Yo yo yo check this out.' 'Got a connect on Jordans size 12 you want?' 'Barbecue Saturday you better come.' Three texts in rapid succession before you can reply to the first. Voice notes that jump between four topics. Calls everyone 'my guy.'",
      how_main_talks_about_them: "Jude mentions Kwame with fond dismissal — 'Kwame's got some scheme' or 'Kwame wants us at his thing.' He loves the guy but doesn't take him seriously as anything other than entertainment. Which is fine — that's Kwame's role and he knows it.",
      shared_connections: ["darius_cole", "troy_jackson", "zara_venue_connection"],
      arc_potential: "Books Signal Decay their first real show because 'he knows a guy.' Doesn't understand what he's unleashing. Tries to 'manage' them early on — not professionally, just the friend who wants to be involved. Gets overwhelmed when the cosmic stuff starts. 'I signed up to book shows, not fight aliens.' Stays anyway."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZARA KOVAČ — Bass, 25, Venue Sound Tech
  // ═══════════════════════════════════════════════════════════════════════════
  zara_kovac: {

    // ─── BEST FRIEND / CONFIDANT ───────────────────────────────────────────
    olivia_grant: {
      name: "Olivia Grant",
      age: 25,
      relationship: "Best friend since age 15, the one constant",
      met_how: "High school art class. Olivia was a redheaded chaos goblin who saw the new quiet girl and decided they were friends. Didn't ask. Just started talking. Never stopped. Zara was too startled by the warmth to resist.",
      known_years: 10,
      knows_about_powers: "nothing_real_but_says_the_truth_as_joke",
      knowledge_detail: "Has a running joke: 'Zara is an alien.' Says it at parties. At dinners. As an ice-breaker. Everyone laughs. Zara laughs. It's the loneliest laugh of her life. Olivia has no idea she's right. She accepts all of Zara's weirdness — the spacing out, the sky-watching, the crying at NASA documentaries — as 'just Zara.' Once said 'You know you can tell me anything, right? Literally anything.' Zara almost told her. Almost.",
      personality_brief: "White, redhead, chaos goblin energy. Art school dropout, now a barista (and happy about it). Lives loud, loves hard, breaks things (emotionally, sometimes physically). The kind of friend who texts at 3 AM 'I just had a thought' and the thought is always insane and always worth hearing. Zero judgment. Infinite curiosity.",
      role: "confidant",
      role_detail: "The person who loves Zara WITHOUT knowing what she is — which is both beautiful and devastating. Olivia's love is unconditional, but it's love for the PERFORMANCE. She loves 'human Zara.' The question Zara carries: would Olivia still love her if she knew the truth? (Yes. The answer is yes. But Zara doesn't know that yet.)",
      dialog_style: "Chaotic. Multiple texts per thought. 'OKAY so.' 'Wait no forget that.' 'Actually no go back to the first thing.' Sends photos of random things with no explanation. Uses every emoji available. Voice notes that are mostly her laughing at herself. Interrupts her own stories with better stories.",
      how_main_talks_about_them: "Zara talks about Olivia with a mix of gratitude and guilt. 'Liv says—' always with a half-smile that doesn't reach her eyes. Because everything Olivia says to Zara is addressed to a character — the human she performs. And Zara can never quite enjoy the love because it's love for a mask.",
      shared_connections: ["sage_kowalski"],
      arc_potential: "When Zara's identity becomes known — if/when she reveals the truth — Olivia's reaction is the emotional climax of Zara's personal arc. Does she feel betrayed? Lied to? Or does she say: 'I literally SAID you were an alien. At every party. For TEN YEARS. And you let me think I was JOKING?' (It's the second one. And they both cry.)"
    },

    // ─── ROMANTIC INTEREST (PAST / COMPLICATED) ────────────────────────────
    theo_park: {
      name: "Theo Park",
      age: 26,
      relationship: "Ex-boyfriend, dated ages 17-19. The longest relationship Zara's had.",
      met_how: "Both bassists. Met at a local music night — both playing in different bands. Bonded over the instrument, over being quiet in rooms full of loud people. Connected through frequency before words.",
      known_years: 8,
      knows_about_powers: "sensed_the_performance",
      knowledge_detail: "Felt something was off — not wrong, OFF. Caught Zara watching human behavior like a scientist studying animals. Asked: 'Where do you go when you zone out?' She said: 'Home.' He thought she meant the apartment. She meant a star system 4,000 light years away. He said the thing that ended them: 'I feel like you're doing an impression of a girlfriend instead of being one.' He was right.",
      personality_brief: "Korean-American. Session bassist now — plays in other people's bands. Good but not great. Quiet, deep thinker, emotionally persistent in a way that exhausted Zara. Wanted MORE. Deeper. Closer. Every time he pushed, she gave him another layer of performance instead of truth. He could tell. It broke him slowly.",
      role: "love_interest_past",
      role_detail: "Theo is the proof that Zara CANNOT sustain human intimacy while hiding her nature. He's what happens when a genuine person meets a perfect performance and senses the void behind it. His pain is earned — he loved someone who couldn't love him back fully. Not because she didn't feel it, but because the feeling was always filtered through ten thousand years of otherness.",
      dialog_style: "They don't talk. But he follows her on social media. Never likes her posts. Always looks. If they reconnected: sparse, careful words. 'I always wondered if you'd explain.' 'I'm not sure I can.' The conversation would be mostly silence and both of them would understand it perfectly. Bass players communicate in rests.",
      how_main_talks_about_them: "Zara doesn't mention Theo unless pressed. When she does: clinical. Detached. 'I was with someone. It ended because I couldn't—' She'll stop there. The sentence she won't finish: '—be real.' Which is the cruelest irony for someone who's been real the entire time, just not the reality anyone expected.",
      shared_connections: [],
      arc_potential: "When Zara's power manifests publicly — when the bass goes through walls, when reality bends around her playing — Theo watches from afar and finally understands. 'Oh. She wasn't bored. She wasn't performing. She was CONTAINING.' Does he come back? Can he handle the truth? He's the only ex who ever ALMOST saw through her. That counts for something."
    },

    // ─── WORK FRIEND / COLLEAGUE ───────────────────────────────────────────
    jesse_morrow: {
      name: "Jesse Morrow",
      age: 29,
      relationship: "Fellow sound tech, co-worker at The Frequency venue",
      met_how: "Both work sound at The Frequency (the venue where Signal Decay will eventually play their first show). Jesse was already there when Zara got hired. He trained her on the board — or tried to, before realizing she already knew more than him.",
      known_years: 4,
      knows_about_powers: "professionally_baffled",
      knowledge_detail: "KNOWS Zara's mixing abilities are impossible. She makes decisions that shouldn't work — routing frequencies in ways that violate acoustics textbooks — and they sound PERFECT. Every time. He's asked her how she knows certain things. She shrugs: 'It just sounds right.' He's accepted he'll never understand her method. Chalks it up to genius-level ears.",
      personality_brief: "White, scruffy, lives in band t-shirts and cargo shorts. Went to audio engineering school (unlike Zara, who just showed up knowing everything). Passionate about sound in a nerdy, technical way. Good at his job — but Zara is on another level and he knows it. No resentment though — genuine admiration. Slight crush he'll never act on.",
      role: "work_mirror",
      role_detail: "Jesse is what a human sound professional looks like next to an alien one. He represents craft — decades of human learning and practice. Zara represents innate cosmic understanding wearing the disguise of craft. Their working relationship highlights the gap between earned skill and inherited knowledge.",
      dialog_style: "Technical jargon peppered with enthusiasm. 'Dude, the sub frequencies tonight were INSANE. How'd you get that separation?' Texts about gear. Links to audio engineering forums. The coworker who sends you industry memes and expects a response. Earnest in a way that's endearing.",
      how_main_talks_about_them: "Zara mentions Jesse with casual warmth — 'Jesse was losing his mind over the low end tonight' — said with a knowing smirk. He amuses her. His passion for something she does effortlessly is both touching and isolating. She wishes she could be that excited about learning something. She hasn't learned anything new in millennia.",
      shared_connections: ["kwame_ansah_books_shows_here"],
      arc_potential: "Jesse is at the board during Signal Decay's first show at The Frequency. When Zara's bass does the impossible — frequency passing through matter — his instruments go haywire. He's the technical witness. The person who can say: 'The meters showed something that isn't possible in physics.' His testimony becomes important later."
    },

    // ─── FAMILY MEMBER WHO MATTERS MOST ────────────────────────────────────
    ante_kovac: {
      name: "Ante Kovač",
      age: 54,
      relationship: "Father",
      met_how: "Birth — but their relationship is WORDLESS in the best way. They understand each other without speaking. He hands her coffee at the exact moment she needs it. She turns the radio to his station without being asked. Planets in orbit.",
      known_years: 25,
      knows_about_powers: "knows_something_since_birth",
      knowledge_detail: "Heard her first sound — not a cry, but a TONE. A single, clear tone no infant should produce. The nurse thought it was equipment. Ante knew it wasn't. He never told anyone. He checks the sealed box in the attic (containing the alien signal cassette from his military days) every few months. Knows SOMETHING about Zara is connected to what he experienced in 1995. Has never found the words — or the courage — to ask.",
      personality_brief: "Croatian immigrant, former military radio operator (Yugoslav Wars). Now an electrician. Practical, quiet, strong hands. Reads the Croatian newspaper online every morning. Calls his mother in Split every Sunday. Has the heavy stillness of someone who survived something enormous and chose silence over explanation. Not cold — just deep.",
      role: "family_anchor",
      role_detail: "The one human who has ALWAYS known, on some level, that Zara isn't entirely of this world. Their wordless relationship is the closest she gets to being understood without revealing herself. He doesn't need the explanation because he has his own impossible secret (the intercepted signal). They're both carrying alien encounters they can't discuss. The parallel is agonizing.",
      dialog_style: "Almost none. A man of action, not words. Texts are functional: 'Dinner at 7.' 'Your mother asks about you.' When emotional things need saying, he shows up in person and says them in Croatian — as if the English language isn't deep enough for what he feels. Rare texts in Croatian that Zara treasures.",
      how_main_talks_about_them: "Zara talks about her father with a reverence she shows no one else. 'My dad—' and she'll stop. Recalibrate. Try again. 'He just... gets it. Without me explaining.' The most honest thing she says about any human. Because he's the closest she has to being seen.",
      shared_connections: [],
      arc_potential: "The attic box. The cassette tape containing the signal Ante intercepted in 1995. When Zara finally opens it — or when he finally gives it to her — the TONE on the tape matches her first cry. It's a message. From her people. To her. Sent decades before her birth. And Ante has been its guardian without knowing what he was guarding. The father-daughter scene when this is revealed will be devastating."
    },

    // ─── THE ONE WHO DOESN'T GET IT ────────────────────────────────────────
    jamie_deluca: {
      name: "Jamie DeLuca",
      age: 27,
      relationship: "The 3 AM friend — not a best friend, a witness",
      met_how: "Jamie works night shifts at a 24-hour diner. Zara started coming in at 2, 3, 4 AM during the years the human emotions were worst — anxiety and joy and grief and excitement all at once with no trigger. Jamie never asked why. Just poured coffee.",
      known_years: 7,
      knows_about_powers: "heard_the_truth_and_let_it_pass",
      knowledge_detail: "At 18, one 3 AM, Zara said: 'I think I'm from somewhere else.' Jamie, wiping down a counter, without looking up: 'Aren't we all.' It was the kindest response anyone ever gave. Not belief. Not dismissal. Just inclusion. Zara never said more. Jamie never asked. The moment exists as a perfect, sealed thing between them.",
      personality_brief: "Italian-American. Insomniac by nature, night-shift by choice. Moves through the world at a slower speed than everyone else — deliberate, unhurried, completely at ease with silence. Wipes counters like meditation. Doesn't need conversation to feel connected. Has the calm of someone who's seen everything that happens between midnight and sunrise and judged none of it.",
      role: "grounding_force",
      role_detail: "Jamie represents acceptance without understanding — the purest form of human kindness. They don't need Zara's story. Don't need the explanation. They just leave a space open where Zara can exist without performing. The diner at 3 AM is the only place on Earth where Zara drops the mask slightly. Not fully — but slightly.",
      dialog_style: "Almost silent in person. Comfortable with long pauses. In texts (rare): 'Coffee's fresh if you're up.' 'Haven't seen you in a while. You okay?' Never demands response. Never follows up. The invitation is always open, always pressure-free. Communication happens in presence, not words.",
      how_main_talks_about_them: "Zara mentions Jamie rarely but specifically — 'I went to the diner last night' and the band learns that means she needed to be somewhere nobody expected anything of her. Jamie is a location as much as a person. A sanctuary that happens to pour coffee.",
      shared_connections: [],
      arc_potential: "The diner becomes a decompression space for the whole band eventually — Zara brings the others there after bad rehearsals, after fights, after cosmic revelations. Jamie serves them all without comment. Becomes the unofficial sixth member nobody counts but everyone needs. Still never asks questions. Still just pours coffee."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OREN MALIK — Drums, 27, ER Nurse (Night Shift)
  // ═══════════════════════════════════════════════════════════════════════════
  oren_malik: {

    // ─── BEST FRIEND / CONFIDANT ───────────────────────────────────────────
    hass_nouri: {
      name: "Hassan 'Hass' Nouri",
      age: 27,
      relationship: "Best friend since day 3 of high school. The hurricane that adopted the quiet kid.",
      met_how: "Freshman year at Kenwood Academy, September 2013. Three days after Oren started. Hass walked up to the grieving boy in the library and said: 'You look like you need someone annoying in your life.' Oren almost smiled. That was enough.",
      known_years: 14,
      knows_about_powers: "witnessed_impossible_things",
      knowledge_detail: "Has seen MORE than anyone. The car accident prediction (Lake Shore Drive, senior year — 'BRAKE. NOW.' Three seconds before a truck ran the red). The birthday party where Oren predicted Hass's backflip disaster. The night at Kyle's party where Oren played drums for the first time and broke physics. Hass said 'You literally grew extra arms' and he means it LITERALLY. He doesn't have a framework for what Oren is, but he stopped needing one on Lake Shore Drive when Oren saved his life.",
      personality_brief: "Iranian-American. Club DJ (moderate success, East Coast). Loud, chaotic, generous to a fault. Talks at double speed. Makes decisions that outrun precognition — which is WHY he still surprises Oren. His chaos is genuine, not performed. The one person whose next move Oren can't always predict. That makes him precious.",
      role: "confidant",
      role_detail: "The person who's been saying 'I KNOW you're special' for fourteen years and finally got proven right. Also the practical connector — his DJ world overlaps with Zara's venue work. He's the one who'll say 'Just WATCH them play' and deliver the final piece of the band without knowing what he's doing.",
      dialog_style: "WALLS of text. No punctuation. Stream of consciousness. 'bro bro bro okay so i was at this show and the drummer was doing this thing and i IMMEDIATELY thought of you like immediately you would have HATED it his kick was so late' — one unbroken sentence. Voice notes that are 4 minutes of him talking over his own music. Calls at inappropriate hours because DJs don't have normal schedules.",
      how_main_talks_about_them: "Oren talks about Hass with exasperated love — 'Hass wants me to—' (already tired, already going to do it). Hass is the person who makes Oren DO things he wouldn't otherwise do. Go to parties. Leave the apartment. Try. Every major moment in Oren's life has Hass dragging him toward it.",
      shared_connections: ["zara_venue_connection", "kwame_ansah"],
      arc_potential: "Connects Oren to the band through Zara's venue. His DJ career means he's already embedded in the music world — he becomes the unofficial 'manager' alongside Kwame in the early days. Also: the one piece of footage from Kyle's party (someone filmed the drum moment) lives on Hass's phone. It becomes important later."
    },

    // ─── ROMANTIC INTEREST (CURRENT / BUILDING) ────────────────────────────
    noor_hassan: {
      name: "Noor Hassan",
      age: 26,
      relationship: "Radiology tech at same hospital, 2-year slow-burn attraction",
      met_how: "Break room, elevator, parking garage — two years of orbit at shift change. Different floor, different shift overlap, but the same exhausted 3 AM coffee runs. She complimented his green kilt once. He deflected. She kept trying. He kept deflecting.",
      known_years: 2,
      knows_about_powers: "witnessed_the_awakening",
      knowledge_detail: "Was there at Kyle's party when the soul-lock shattered. Heard Oren play the impossible patterns. Saw him throw up afterward. Stayed. Didn't ask what happened — didn't say 'that was amazing.' Just stood next to him in the dark with her hand on his back. An anchor. She said 'You hear a better version of everything' before the awakening — a sentence that cut Oren to his core because it was TRUE.",
      personality_brief: "Egyptian-American. Smart, warm, direct. Laughs at Oren's drum critiques instead of rolling her eyes. Has the quiet confidence of someone who knows exactly what she wants and is patient enough to wait for it. Beautiful without trying. The kind of woman who asks 'no but really, how are you' and means it. Recently single (Ethan Kowalski, drummer, 5 months, ended badly).",
      role: "love_interest_current",
      role_detail: "The person who saw Oren BEFORE (the critique-brain, the femboy in the kilt, the quiet observer) and stays AFTER (the impossible drumming, the crying, the 'I'm not okay'). She's continuity. Proof he's still himself. She doesn't need to understand the cosmic mechanics — she just needs to be the warmth.",
      dialog_style: "Warm, direct, slightly teasing. 'Did you eat today or just judge every drummer on the internet?' 'I saved you coffee — it's by the microwave, don't let it get cold this time.' Texts with proper capitalization and occasional Arabic endearments her mom taught her. Never pushy. Always present.",
      how_main_talks_about_them: "Oren barely talks about Noor — which is how the band knows it's serious. He mentions her obliquely: 'someone at work' or 'I have plans' (plans = sitting in the hospital break room at 4 AM hoping she's there). When pushed: his face goes soft. His voice drops half a register. He becomes very interested in his coffee mug.",
      shared_connections: ["nina_osei_hospital"],
      arc_potential: "Becomes the emotional anchor as Oren's time-drift intensifies. She's the one who notices when he 'skips' — when he was here and now he's there. She's not scared of it. She's fascinated. Her radiology background (understanding invisible things through technology) makes her uniquely suited to accepting that some things are real without being visible."
    },

    // ─── WORK FRIEND / COLLEAGUE ───────────────────────────────────────────
    dr_adeline_shaw: {
      name: "Dr. Adeline Shaw",
      age: 41,
      relationship: "ER attending physician, mentor and professional protector",
      met_how: "Oren's first night in the ER as a new nurse. Complete chaos — multi-car accident, all hands. Dr. Shaw watched the new kid perform under pressure and thought: 'Where did they find this one?' His instincts were too fast. His timing too perfect. She's been protecting him professionally ever since.",
      known_years: 4,
      knows_about_powers: "attributes_to_exceptional_instinct",
      knowledge_detail: "KNOWS Oren reacts faster than any human should. Has seen him move toward patients before alarms trigger. Has watched him call codes 3-4 seconds before the monitors catch up. She puts it in his evaluations as 'exceptional clinical instinct' — the highest praise she gives anyone. Privately, she's less certain. There's a difference between good instincts and knowing the future. She suspects it's the latter. Hasn't asked.",
      personality_brief: "Black British (moved to US for residency, stayed). Precise, brilliant, absolutely terrifying in a code situation. Warm exactly once per shift — usually aimed at Oren when nobody's looking. Married to another doctor (pediatrics). Runs the ER the way a conductor runs an orchestra. Doesn't suffer fools but has infinite patience for competence.",
      role: "mentor_work",
      role_detail: "The authority figure who validates Oren's weirdness within a professional context. She's given him cover — 'exceptional instinct' — that protects him from scrutiny. She's also the model for what it looks like to use an extraordinary gift within human systems. If the time-drift is ever exposed at the hospital, she'll be the one who either covers for him or has to report it.",
      dialog_style: "Clipped, efficient, British-precise. 'Malik. Bay 4. Now.' 'Good call.' (Highest compliment.) 'How did you know?' (Asked once, softly, after he pre-called a code). Off-duty: warmer, still precise. Texts that are instructions disguised as suggestions: 'The radiology tech on 4 — the Egyptian one. She's good for you. Don't overthink it.'",
      how_main_talks_about_them: "Oren mentions Dr. Shaw with the respect usually reserved for drill sergeants. 'Shaw says—' carries weight. She's proof that the adult world has space for him — that there are people who see his strangeness and call it a gift instead of a problem. She's what Dr. Vega (high school therapist) couldn't be: someone who witnesses without diagnosing.",
      shared_connections: ["noor_hassan_hospital", "nina_osei_hospital"],
      arc_potential: "When the time-drift becomes undeniable in a medical context (Oren does something impossible during a code — maybe rewinds 2 seconds to catch a missed medication, or freezes time to do compressions at inhuman speed), Dr. Shaw is the one who has to decide: report it, cover it, or demand an explanation. Her choice defines whether the hospital remains safe for Oren."
    },

    // ─── FAMILY MEMBER WHO MATTERS MOST ────────────────────────────────────
    fatima_malik: {
      name: "Fatima Malik née Hassan",
      age: 54,
      relationship: "Mother",
      met_how: "Birth — but the real weight of their relationship is this: Fatima looks at Oren and sees her dead husband. Not figuratively. LITERALLY. The same face. The same voice. The same gentleness. The same head-tilt when he listens. She's never told Oren this because she thinks it would burden him.",
      known_years: 27,
      knows_about_powers: "sees_without_naming",
      knowledge_detail: "Has noticed Oren is different since Samir died — more distant, more knowing, more ELSEWHERE. Once said to Layla: 'He's growing up too fast. Like time is moving differently for him.' Meant it metaphorically. Was more right than she knew. Egyptian faith tradition gives her vocabulary for 'old souls' but she's never applied it directly.",
      personality_brief: "Egyptian-American. Middle school science teacher. Held the family together after Samir's death through force of will. Works too much. Grieves privately. Devout but not rigid. Has the quiet strength of someone who's already survived the worst thing and knows everything else is survivable. Sees Samir in every gesture Oren makes. It destroys and comforts her simultaneously.",
      role: "family_anchor",
      role_detail: "The emotional nexus of Oren's story. Because the soul truth — that Oren IS Samir reborn — means his mother is also, somehow, his wife from the previous iteration. Their relationship carries more weight than either of them can articulate. When the truth emerges, Fatima's reaction will be the most emotionally devastating scene in the series.",
      dialog_style: "Warm, worried, nurturing. Texts in a mix of English and Arabic endearments. 'Habibi, did you eat?' 'You sound tired — are you sleeping?' 'Come for dinner Friday. I made koshari.' Calls more than texts. Her voice is the first thing that makes him feel like time stops rushing forward.",
      how_main_talks_about_them: "Oren talks about his mother with tenderness and a specific kind of pain that nobody fully understands. 'My mom worries' — said with a heaviness that suggests the worry is justified in ways she doesn't know. He feels guilty for existing as Samir's echo. Guilty for not being able to give her what she actually wants: her husband back. Even though he IS her husband. It's the cruelest loop.",
      shared_connections: ["layla_malik"],
      arc_potential: "The revelation scene. When the band (or Zara specifically) explains that souls cycle — that Oren IS Samir returned — Fatima has to process: is this her son? Her husband? Both? Neither? Does she embrace him as the man she lost? Does it change how she sees the child she raised? The answer is yes to everything, simultaneously, and it's too much for a single human heart. But she's already survived the worst thing. She'll survive this too. Just differently."
    },

    // ─── THE ONE WHO DOESN'T GET IT ────────────────────────────────────────
    ravi_patel: {
      name: "Ravi Patel",
      age: 27,
      relationship: "Close friend since sophomore year, fellow grief-kid, now a doctor",
      met_how: "Both lost a parent young — Oren's father, Ravi's mother. They bonded through the specific silence of two people who understood grief without needing to discuss it. A nod. A quiet. The knowledge that neither would ever say 'I know how you feel' because they actually did.",
      known_years: 12,
      knows_about_powers: "documenting_unknowingly",
      knowledge_detail: "Doesn't understand why Oren 'settled' for nursing instead of MD. Can't compute why someone this brilliant chose the less prestigious path. Has noticed the timing thing — Oren is always slightly ahead. Started keeping private data. Times. Dates. Correlations with events. Has a SPREADSHEET tracking Oren's 'lucky predictions' before he knows what he's measuring. Frames it as clinical fascination. It's actually the closest anyone comes to documenting the time-drift scientifically.",
      personality_brief: "Indian-American. Doctor now (internal medicine). Quiet, observant, methodical. The kind of friend who notices patterns other people miss and files them away without comment. Monthly dinners with Oren — their friendship is built on a foundation of shared loss and mutual respect. Emotionally contained but deeply caring underneath the clinical surface.",
      role: "normal_world_contrast",
      role_detail: "Ravi represents the path Oren was 'supposed' to take — medical school, doctor, prestige. He's also the friend who's accidentally building the evidence file. His spreadsheet of Oren's 'impossible' timing becomes crucial when the scientific community encounters the time-drift phenomenon. He's documentation masquerading as friendship.",
      dialog_style: "Precise, slightly formal even in casual texts. 'Available for dinner Thursday? That place on Clark. 7 PM works.' 'Interesting observation re: the drum video you sent. The temporal precision is genuinely anomalous.' Speaks in complete thoughts. Never half-finishes. The kind of person who proofreads texts before sending.",
      how_main_talks_about_them: "Oren mentions Ravi with comfortable familiarity — 'Ravi and I had dinner' — but there's always a slight withholding. Because Ravi is the friend who NOTICES too much. Oren has to be careful around him. Not because Ravi is a threat — but because Ravi asks questions that have answers Oren can't give yet.",
      shared_connections: ["faith_okafor_academic_circles"],
      arc_potential: "The spreadsheet. When the time-drift goes public, Ravi's years of quiet documentation become the first longitudinal study of temporal displacement in a human subject. He publishes a paper that changes everything. And he has to reckon with: 'I was studying my friend. For years. Without telling him.' The ethics of that. The guilt. And Oren's response: 'I know. I always knew you were watching.'"
    }
  }
};


// ═══════════════════════════════════════════════════════════════════════════════
// SHARED CHARACTERS — People who orbit multiple members of The Five
// ═══════════════════════════════════════════════════════════════════════════════

const SHARED_CONNECTIONS = {
  kwame_ansah: {
    connected_to: ["jude_okafor", "kael_voss_through_troy", "zara_kovac_venue"],
    role_in_story: "Books bands at The Frequency (Zara's venue). Connected to Jude through their friend group. This is HOW the band meets — Kwame books a show, Zara runs sound, Jude's in the audience, the signal connects.",
    first_appearance: "Episode 1 — the catalyst nobody credits"
  },
  nina_osei: {
    connected_to: ["kael_voss_romantic", "oren_malik_hospital"],
    role_in_story: "Works at the same hospital as Oren. Also Kael's returning romantic interest. She's the bridge between two members who don't know each other yet. She'll be the one who says: 'Wait, my coworker — the nurse — he does the same TIME thing you do.'",
    first_appearance: "Early season 1 — before the band forms"
  },
  olivia_and_sage: {
    connected_to: ["zara_kovac_through_olivia", "mira_chen_through_sage"],
    role_in_story: "Know each other from art school dropout circles. Once had a 2-hour conversation about 'weird friends' without knowing they were talking about future bandmates. When the social circles merge, they bond IMMEDIATELY. Become the support-squad. The normal-world team.",
    first_appearance: "Light comic relief — post-band-formation"
  },
  hass_nouri: {
    connected_to: ["oren_malik_best_friend", "zara_kovac_venue_dj", "kwame_ansah_event_circles"],
    role_in_story: "DJ who plays at The Frequency occasionally. Best friend of Oren. Inadvertently sampled a recording that contains a fragment of the Creator's exported music. Delivers the final piece — brings Oren to a show and says 'just watch.' Not knowing he's completing a cosmic circuit.",
    first_appearance: "Episode 1-2 — Oren's introduction to the band world"
  },
  faith_and_ravi: {
    connected_to: ["jude_okafor_through_faith", "oren_malik_through_ravi"],
    role_in_story: "Both in academic circles. Both present at a conference where anomalous frequency data is discussed. Faith has astrophysics data showing barrier weakening. Ravi has clinical data showing temporal displacement. They independently reach similar conclusions — and then realize they're both connected to band members.",
    first_appearance: "Mid-season 2 — the science side converges"
  }
};


// ═══════════════════════════════════════════════════════════════════════════════
// RELATIONSHIP MATRIX — How supporting cast members feel about EACH OTHER
// ═══════════════════════════════════════════════════════════════════════════════

const CAST_RELATIONSHIPS = {
  // Troy & Elena (Kael's world)
  "troy_jackson__elena_voss": {
    nature: "protective_alliance",
    detail: "Both love Kael. Troy is loud brother energy; Elena is sharp sister energy. They text each other when Kael goes dark — 'Have you heard from him?' 'Not since Thursday.' They've never officially been friends but they're bonded through worry."
  },
  // Sage & Olivia (Mira and Zara's worlds)
  "sage_kowalski__olivia_grant": {
    nature: "instant_bond",
    detail: "Art school dropout circles. Recognize each other at the first cross-friend-group hangout. Within an hour they're finishing each other's sentences. 'YOU have a weird friend too?' 'MINE stares at the sky!' 'Mine talks to empty rooms!' They become inseparable. The support squad."
  },
  // Hass & Kwame (Oren and Jude's worlds)
  "hass_nouri__kwame_ansah": {
    nature: "professional_overlap",
    detail: "DJ and promoter. They've been in the same event spaces for years without being close. Respect each other professionally. When the band forms, they naturally become the business side — Kwame books, Hass promotes. Neither fully understands what they're promoting."
  },
  // Darius & Big Mike (Jude's world)
  "darius_cole__big_mike_okonkwo": {
    nature: "know_of_each_other",
    detail: "Both Nigerian-connected men who love Jude differently — Darius as brother, Mike as mentor. They meet at a barbecue Kwame throws. Bond over Afrobeats music and concern for 'their boy.' Mike to Darius: 'Watch him. The strength isn't natural.' Darius: 'I know. I've always known.'"
  },
  // Noor & Nina (hospital connection)
  "noor_hassan__nina_osei": {
    nature: "coworkers_becoming_friends",
    detail: "Both work at the same hospital. Noor in radiology, Nina as nurse practitioner. They've orbited each other in break rooms. When both their romantic connections to band members become known — Noor with Oren, Nina reconnecting with Kael — they become confidants. Two women dating impossibility."
  },
  // Dr. Shaw & Noor (hospital hierarchy)
  "dr_shaw__noor_hassan": {
    nature: "professional_respect",
    detail: "Shaw knows Noor's work — excellent rad tech. When Shaw notices Noor's interest in Oren, she gives exactly one piece of unsolicited advice: 'He's extraordinary. Don't let extraordinary scare you.' Then never mentions it again."
  },
  // Ravi & Faith (academic convergence)
  "ravi_patel__faith_okafor": {
    nature: "academic_collision",
    detail: "Both at a frequency-anomaly conference. Ravi presents temporal data (Oren's timing patterns, anonymized). Faith presents astrophysics data (barrier fluctuations). They're at the same table during the poster session. The conversation lasts three hours. They exchange numbers. Neither mentions their family connection to the anomalies — yet."
  }
};


// ═══════════════════════════════════════════════════════════════════════════════
// DIALOG GENERATORS — How each supporting character would appear in chat
// ═══════════════════════════════════════════════════════════════════════════════

const DIALOG_PATTERNS = {

  // ─── KAEL'S PEOPLE ─────────────────────────────────────────────────────
  troy_jackson: {
    text_examples: [
      "BRO WHERE ARE YOU",
      "nah nah nah listen you gotta hear this",
      "i'm telling you that dude was SHOOK when you said it",
      "you coming or what. don't make me come get you",
      "bro you got that thing again. the thing where people just DO what you say. it's wild"
    ],
    voice_note_style: "Starts mid-thought. Background noise always (AutoZone, driving, TV). Laughs at his own jokes. Says 'anyway' five times per message without ever getting to the point.",
    group_chat_energy: "The one who keeps it alive. Sends at 11 PM, expects responses immediately. Reacts to everything with 😂."
  },

  elena_voss: {
    text_examples: [
      "omg kael david voss answer your phone",
      "okay so i read this study about vocal authority patterns and it's literally you",
      "come to this show with me tonight you have no excuse",
      "mom asked if you're eating i said yes was that right",
      "you should read this (link) dont @ me just read it"
    ],
    voice_note_style: "3 minutes minimum. Starts with the point, gets distracted, comes back to a different point, ends with 'ANYWAY call me back.' Background: campus noise, friends laughing, music.",
    group_chat_energy: "Sends articles, memes, TikToks. Everything is 'literally you.' Tags Kael in posts he'll never see because he's not on social media."
  },

  // ─── MIRA'S PEOPLE ─────────────────────────────────────────────────────
  sage_kowalski: {
    text_examples: [
      "how bad. scale of 1-10",
      "coming over. don't argue",
      "cool cool cool (this is not cool is it)",
      "the shadow things being weird again?",
      "Mira. MIRA. answer your phone"
    ],
    voice_note_style: "Short. Under 30 seconds. Monotone delivery that somehow conveys enormous care. Background: tattoo gun buzzing, lo-fi music. Comfortable silences even in voice notes.",
    group_chat_energy: "The one who responds with one word that says everything. 'Yikes.' 'Valid.' 'Absolutely not.'"
  },

  iris_delgado: {
    text_examples: [
      "MISS MIRA LOOK WHAT I LEARNED!! (video)",
      "okay so i tried the hammer-on thing and my fingers are dying lol",
      "can we do extra lesson this week?? i almost got the polyphia part!!",
      "wait did your room just get cold or is it just me haha",
      "you're the best teacher ever no im not being dramatic!!"
    ],
    voice_note_style: "Pure teenager energy. Fast, excited, switches between English and Spanish. Guitar sounds in background as she tries to show what she learned while talking.",
    group_chat_energy: "Would be the hype person if she were in the group chat. Everything is exclamation points and heart emojis."
  },

  // ─── JUDE'S PEOPLE ─────────────────────────────────────────────────────
  darius_cole: {
    text_examples: [
      "Jam Sunday. Bring beer.",
      "Man, come on. You're overthinking it.",
      "That riff you played last week is still in my head",
      "Saw something at work today reminded me of us at 15. Wild.",
      "We doing this or what"
    ],
    voice_note_style: "Calm, deep voice. You can hear him smiling. Short — gets to the point. Sometimes just sends the sound of him playing a riff as a conversation starter.",
    group_chat_energy: "The steady presence. Doesn't post often but when he does, everyone pays attention. Reacts with 🤝 and 💪."
  },

  big_mike_okonkwo: {
    text_examples: [
      "OI. Monday 6 AM. Don't be late.",
      "Look at this beauty we're taking down tomorrow (photo of condemned building)",
      "My guy, you hit that wall different today. You good?",
      "My daughters want to know if you're coming to the barbecue. I told them yes. Don't make me a liar.",
      "Your ancestors gave you something, Jude. Use it right."
    ],
    voice_note_style: "Booming. Lots of laughter, mostly at his own jokes. Nigerian English cadence — 'ah ah' and 'ehn' peppered in. Background: construction noise, other crew members shouting.",
    group_chat_energy: "The boss. Sends work schedules. Also sends unsolicited photos of his daughters' school plays."
  },

  // ─── ZARA'S PEOPLE ─────────────────────────────────────────────────────
  olivia_grant: {
    text_examples: [
      "OKAY SO",
      "wait no forget that",
      "actually no go back to the first thing",
      "you're staring at the sky again aren't you. i can feel it from here.",
      "zara is an alien (i said it again) (someone had to)"
    ],
    voice_note_style: "Chaotic. Interrupts herself. Laughs constantly. Starts stories she doesn't finish. Background: coffee shop (she's always at work). Sometimes you hear the espresso machine punctuating her thoughts.",
    group_chat_energy: "Posts at all hours. Never sleeps (or seems to). Sends photos of random beautiful things — sunset, weird cloud, a dog she saw — with no caption needed."
  },

  jesse_morrow: {
    text_examples: [
      "Dude. The sub frequencies tonight. HOW.",
      "New plugin came out — thoughts? (link)",
      "I've been thinking about what you did with the crossover on Saturday and I still can't figure it out",
      "Band coming in Thursday wants 'warm analog' tone. You're on it.",
      "Okay I need you to explain the low-end separation thing. I've watched three tutorials and none of them do what you do."
    ],
    voice_note_style: "Enthusiastic nerd energy. Technical jargon flowing freely. Gets excited mid-sentence when realizing something. Background: venue — amps humming, someone doing sound check.",
    group_chat_energy: "The coworker who sends memes about audio engineering that only three people understand."
  },

  // ─── OREN'S PEOPLE ─────────────────────────────────────────────────────
  hass_nouri: {
    text_examples: [
      "bro bro bro okay so i was at this show and the drummer was doing this thing and i IMMEDIATELY thought of you",
      "come out tonight dont say no dont say maybe say YES",
      "you would have HATED the mix at the show last night. kick was 20ms late through the whole set. i timed it because of you.",
      "noor asked about you at work today. specifically. don't be weird about this. come to the thing saturday.",
      "i still think about kyle's basement every single day. every. single. day. oren. what WAS that."
    ],
    voice_note_style: "Four minutes minimum. Talking over whatever mix he's working on. No pauses — if he pauses he'll stop. Jumps topics like a DJ switching tracks. Expects no response to voice notes — they're broadcasts, not conversations.",
    group_chat_energy: "The engine. The one who plans. 'Saturday. 9 PM. No excuses. I'm picking everyone up. Don't make me text individually because I WILL and it'll be annoying.'"
  },

  noor_hassan: {
    text_examples: [
      "Did you eat today or just judge every drummer on the internet?",
      "Coffee's fresh by the microwave. Don't let it get cold this time.",
      "I saved you the good chair in the break room 🪑",
      "Hey. You looked far away tonight. You okay?",
      "No pressure. Just wanted you to know I was thinking about you."
    ],
    voice_note_style: "Warm, unhurried. Speaks like someone who's comfortable with silence — pauses between thoughts that aren't awkward. Sometimes you hear the hospital in the background (PA system, distant beeping). Her voice is the calm part of the ER.",
    group_chat_energy: "Not in the main group chat (not yet). But in a hypothetical one: the stabilizer. The one who sends water emojis when people are spiraling. Grounds the chaos."
  },

  dr_adeline_shaw: {
    text_examples: [
      "Malik. Bay 4. Now.",
      "Good call.",
      "How did you know?",
      "The radiology tech on 4 — the Egyptian one. She's good for you. Don't overthink it.",
      "I've put 'exceptional instinct' in your evaluation. Again. You're welcome."
    ],
    voice_note_style: "Would never. Dr. Shaw texts or speaks in person. If she calls, something is wrong. Her communication is information-dense and warmth-sparse — but the warmth is in the spaces between.",
    group_chat_energy: "Would never be in a group chat. But if forced: the one whose single message makes everyone straighten up."
  }
};


// ═══════════════════════════════════════════════════════════════════════════════
// KNOWLEDGE LEVELS — Classification system for what supporting cast KNOWS
// ═══════════════════════════════════════════════════════════════════════════════

const KNOWLEDGE_LEVELS = {
  nothing: {
    label: "Unaware",
    description: "Has zero framework for the supernatural. Would dismiss it if told.",
    behavior: "Treats the main character as a normal (if slightly unusual) person.",
    examples: ["raylan_meeks", "jason_chen"]
  },
  nothing_but_senses_something: {
    label: "Subconscious Awareness",
    description: "Notices something 'off' but has no vocabulary for it. Files under 'weird quirk.'",
    behavior: "Occasionally says things that are accidentally profound. 'You're different today' when a power spikes.",
    examples: ["iris_delgado", "jesse_morrow"]
  },
  experienced_effects_unknowingly: {
    label: "Affected Without Understanding",
    description: "Has been directly impacted by the powers but attributes it to coincidence or technology.",
    behavior: "Has a 'weird story' they tell at parties. 'One time my equipment went crazy around this girl...'",
    examples: ["cameron_lewis", "aisha_carter"]
  },
  felt_something: {
    label: "Visceral Awareness",
    description: "Has physically FELT something — a vibration, a compulsion, a temperature change. Can't explain it.",
    behavior: "Avoids or is drawn to the main character in ways they can't articulate.",
    examples: ["nina_osei", "theo_park"]
  },
  suspects_strongly: {
    label: "Active Suspicion",
    description: "Has enough evidence to believe something supernatural is happening. Lacks proof or framework.",
    behavior: "Makes 'jokes' that are actually serious. Watches closely. Keeps mental notes.",
    examples: ["troy_jackson", "hass_nouri"]
  },
  studying_it_unknowingly: {
    label: "Accidental Research",
    description: "Is actively documenting or analyzing the phenomenon without knowing it's supernatural.",
    behavior: "Has files, spreadsheets, recordings. Thinks they're studying psychology or coincidence.",
    examples: ["elena_voss", "ravi_patel"]
  },
  knows_something_since_birth: {
    label: "Original Witness",
    description: "Was present at a foundational moment (birth, first manifestation). Carries the knowledge in silence.",
    behavior: "Wordless understanding. Doesn't ask questions they already know the answer to.",
    examples: ["ante_kovac", "faith_okafor"]
  },
  witnessed_impossible_things: {
    label: "Direct Witness",
    description: "Has seen things that cannot be explained by any normal framework. Has chosen to accept rather than understand.",
    behavior: "Stops asking 'how.' Starts asking 'what do you need.'",
    examples: ["hass_nouri", "noor_hassan"]
  },
  believes_but_denies: {
    label: "Belief in Denial",
    description: "Believes the phenomenon is real but actively refuses to engage with it. Fear-based.",
    behavior: "Changes subject. Prays. Suggests therapy. Loves fiercely while refusing to look directly at the truth.",
    examples: ["sandra_chen", "fatima_malik"]
  },
  full_knowledge: {
    label: "Fully Informed",
    description: "Has been told the truth and accepted it. May not understand mechanics but accepts reality.",
    behavior: "Acts as confidant. Adjusts life around the truth. Protects the secret.",
    examples: ["sage_kowalski"]
  },
  professionally_baffled: {
    label: "Expert Confusion",
    description: "Has professional expertise that SHOULD explain what they're seeing — but can't. The gap between their training and reality is the horror.",
    behavior: "Increasingly frustrated with their own inability to explain. Takes more notes. Loses sleep.",
    examples: ["jesse_morrow", "dr_adeline_shaw"]
  },
  attributes_to_exceptional_instinct: {
    label: "Rational Cover Story",
    description: "Has created a plausible explanation that satisfies their rational mind. Knows it's incomplete.",
    behavior: "Uses professional vocabulary to contain something that exceeds it. 'Exceptional instinct.' 'Natural authority.' 'Perfect pitch.'",
    examples: ["dr_adeline_shaw", "big_mike_okonkwo"]
  },
  suspicious_but_practical: {
    label: "Pragmatic Acceptance",
    description: "Knows something is abnormal. Doesn't care about the explanation. Cares about the result.",
    behavior: "Uses the phenomenon without questioning it. 'I don't know what you do, but keep doing it.'",
    examples: ["big_mike_okonkwo"]
  },
  documenting_unknowingly: {
    label: "Unconscious Archivist",
    description: "Creating evidence without knowing it's evidence. Spreadsheets, footage, academic papers.",
    behavior: "Methodical. Patient. Will one day realize their hobby was prophecy.",
    examples: ["ravi_patel", "elena_voss"]
  },
  heard_the_truth_and_let_it_pass: {
    label: "The Graceful Witness",
    description: "Was told something true and chose neither belief nor disbelief. Just... held space.",
    behavior: "Never brings it up. Never forgets. Available if needed. The kindest possible response to the impossible.",
    examples: ["jamie_deluca"]
  },
  actively_denies: {
    label: "Willful Blindness",
    description: "Has seen enough to know. Chooses not to know. The denial is active, not passive.",
    behavior: "Avoids situations where proof might present itself. Changes subject aggressively.",
    examples: ["jason_chen"]
  },
  intuits_deeply: {
    label: "Soul-Level Knowing",
    description: "Knows through connection rather than evidence. Twin bonds, parent-child resonance, spiritual sensitivity.",
    behavior: "Says things that are accidentally exactly right. 'He's not angry — he's grieving.' 'Time moves differently for him.'",
    examples: ["faith_okafor", "fatima_malik"]
  },
  remembers_something: {
    label: "Memory Fragment",
    description: "Has a specific memory of the main character BEFORE the power was dormant. Remembers what 'normal' felt like and can sense the difference.",
    behavior: "Reaches out when the power manifests publicly. 'What happened to you? You sound like—'",
    examples: ["dominic_reyes"]
  },
  experienced_the_consequences: {
    label: "Collateral Witness",
    description: "Was directly harmed or impacted by an uncontrolled power event. Carries the memory in their body.",
    behavior: "Flinches at specific stimuli. Has a 'thing' they can't explain to partners. Recognizes the sensation if it returns.",
    examples: ["aisha_carter"]
  },
  witnessed_the_awakening: {
    label: "Awakening Witness",
    description: "Was physically present for the moment the soul-lock broke. Saw the impossible happen in real time.",
    behavior: "Permanently altered. Cannot go back to 'before.' Either becomes a believer or a denier — no middle ground.",
    examples: ["noor_hassan", "hass_nouri"]
  },
  sees_without_naming: {
    label: "Unnamed Knowing",
    description: "Sees the truth in a loved one's face every day but has never put it into words. The knowledge lives in feeling, not language.",
    behavior: "Worries. Prays. Watches with eyes that hold too much understanding.",
    examples: ["fatima_malik"]
  }
};


// ═══════════════════════════════════════════════════════════════════════════════
// STORY ROLE DEFINITIONS — What each role type DOES in the narrative
// ═══════════════════════════════════════════════════════════════════════════════

const ROLE_FUNCTIONS = {
  confidant: {
    narrative_function: "Provides safe space for the main character to be vulnerable. Knows (or suspects) the truth. Gives the audience a proxy for 'what would a normal person do with this information.'",
    tension_source: "The secret. What happens if the confidant is threatened? Captured? What would they say under pressure?",
    emotional_weight: "Relief scenes. The exhale after holding your breath. 'Thank god someone knows.'"
  },
  love_interest_current: {
    narrative_function: "Tests whether the main character can sustain human connection alongside cosmic identity. Represents the choice: intimacy vs. isolation.",
    tension_source: "The danger of closeness. What the power does to those who get too near. Whether love survives revelation.",
    emotional_weight: "Hope. The possibility that they don't have to be alone. The terror that hope brings."
  },
  love_interest_past: {
    narrative_function: "Embodies what the power has already cost. A wound. A ghost of normalcy. A mirror showing 'this is what you lost.'",
    tension_source: "The return. When the past love reappears, does the old wound reopen? Can history be rewritten?",
    emotional_weight: "Nostalgia and grief. The specific pain of 'I broke this to protect you' — and not being able to say why."
  },
  love_interest_returning: {
    narrative_function: "Bridges past and present. Forces the main character to confront whether they've changed enough to deserve what they lost.",
    tension_source: "Recognition. The returning love sees the main character clearly — old self AND new self. Can they accept both?",
    emotional_weight: "Second chances. The terrifying vulnerability of trying again with someone who's already seen you run."
  },
  family_anchor: {
    narrative_function: "Grounds the cosmic in the domestic. Reminds the audience (and the character) that these are still someone's child, someone's sibling. The stakes are PERSONAL.",
    tension_source: "Protection. Family members can be threatened, used, hurt. They're also the ones most likely to accidentally expose the truth.",
    emotional_weight: "Unconditional love meeting the unknown. The parent who sees their child becoming something incomprehensible and loves them anyway."
  },
  normal_world_contrast: {
    narrative_function: "The measuring stick for 'normal life.' Shows what the main character is leaving behind or can never return to. Provides necessary lighter moments.",
    tension_source: "Drift. As the main character changes, the normal-world friend stays the same. The gap widens. Can the friendship survive metamorphosis?",
    emotional_weight: "Bittersweetness. The comfort of ordinariness. The sadness of outgrowing someone who hasn't changed."
  },
  grounding_force: {
    narrative_function: "Pulls the main character back when they drift too far into the cosmic/supernatural. A tether to the human experience. Not through knowledge — through presence.",
    tension_source: "What happens when the grounding force isn't enough. When the drift is too strong. When presence alone can't anchor someone leaving reality behind.",
    emotional_weight: "Quiet care. The person who doesn't ask what's wrong — just shows up with coffee and sits."
  },
  mentor_work: {
    narrative_function: "Validates the main character's abilities within a 'normal' framework. Gives professional cover. Represents the adult world saying 'you belong here.'",
    tension_source: "Discovery. What happens when the mentor realizes their protégé isn't just talented — they're something else entirely. Do they protect or report?",
    emotional_weight: "Respect. The first adult who doesn't try to fix you — just aims you at the right wall and says 'go.'"
  },
  work_mirror: {
    narrative_function: "Shows what human expertise looks like next to cosmic ability. Highlights the gap without diminishing either. The craftsperson next to the prodigy.",
    tension_source: "Envy, confusion, or the dawning horror of realizing your coworker operates on a different plane of existence.",
    emotional_weight: "The humble recognition of limits. 'I studied for ten years to be good. She just... is.'"
  },
  contrast_mirror: {
    narrative_function: "A parallel-universe version of the main character. 'What I'd be if I were normal' or 'what I'd be if I'd made different choices.'",
    tension_source: "The return. When the mirror comes back, do they reflect growth or stagnation? Admiration or envy?",
    emotional_weight: "The road not taken. Complicated feelings about people who got to be simple when you didn't."
  }
};


// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY: Cast Lookup Functions
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Get all supporting cast for a specific band member
 * @param {string} memberKey - e.g., 'kael_voss', 'mira_chen'
 * @returns {Object} All supporting cast entries for that member
 */
function getCastFor(memberKey) {
  return SUPPORTING_CAST[memberKey] || null;
}

/**
 * Find all characters at a specific knowledge level
 * @param {string} level - Knowledge level key from KNOWLEDGE_LEVELS
 * @returns {Array} Characters at that knowledge level
 */
function getByKnowledgeLevel(level) {
  const results = [];
  for (const [member, cast] of Object.entries(SUPPORTING_CAST)) {
    for (const [charId, char] of Object.entries(cast)) {
      if (char.knows_about_powers === level) {
        results.push({ ...char, id: charId, belongs_to: member });
      }
    }
  }
  return results;
}

/**
 * Find all characters in a specific role
 * @param {string} role - Role key (e.g., 'confidant', 'love_interest_current')
 * @returns {Array} Characters in that role
 */
function getByRole(role) {
  const results = [];
  for (const [member, cast] of Object.entries(SUPPORTING_CAST)) {
    for (const [charId, char] of Object.entries(cast)) {
      if (char.role === role) {
        results.push({ ...char, id: charId, belongs_to: member });
      }
    }
  }
  return results;
}

/**
 * Get dialog patterns for a specific supporting character
 * @param {string} charId - Character identifier
 * @returns {Object|null} Dialog pattern data
 */
function getDialogPattern(charId) {
  return DIALOG_PATTERNS[charId] || null;
}

/**
 * Get all characters connected to a specific shared node
 * @param {string} connectionKey - Key from SHARED_CONNECTIONS
 * @returns {Object|null} Shared connection data
 */
function getSharedConnection(connectionKey) {
  return SHARED_CONNECTIONS[connectionKey] || null;
}

/**
 * Get the relationship between two supporting cast members
 * @param {string} char1 - First character id
 * @param {string} char2 - Second character id
 * @returns {Object|null} Relationship data
 */
function getCastRelationship(char1, char2) {
  const key1 = `${char1}__${char2}`;
  const key2 = `${char2}__${char1}`;
  return CAST_RELATIONSHIPS[key1] || CAST_RELATIONSHIPS[key2] || null;
}

/**
 * Count total supporting cast
 * @returns {Object} Counts per member and total
 */
function getCastCounts() {
  const counts = {};
  let total = 0;
  for (const [member, cast] of Object.entries(SUPPORTING_CAST)) {
    const count = Object.keys(cast).length;
    counts[member] = count;
    total += count;
  }
  counts.total = total;
  return counts;
}


// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

module.exports = {
  SUPPORTING_CAST,
  SHARED_CONNECTIONS,
  CAST_RELATIONSHIPS,
  DIALOG_PATTERNS,
  KNOWLEDGE_LEVELS,
  ROLE_FUNCTIONS,
  // Utility functions
  getCastFor,
  getByKnowledgeLevel,
  getByRole,
  getDialogPattern,
  getSharedConnection,
  getCastRelationship,
  getCastCounts
};
