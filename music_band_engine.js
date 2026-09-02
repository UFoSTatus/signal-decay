/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * SIGNAL DECAY — MUSIC & BAND ENGINE
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Defines EVERYTHING about Signal Decay as a BAND: instruments, playing styles,
 * musical influences, songwriting, rehearsal dynamics, live performance,
 * pairwise chemistry, and how the music evolves as powers awaken.
 *
 * Created: 2026-09-02
 * Universe Version: 2.1
 * Canon Sources: SOUL_IMBUED_INSTRUMENTS.md, FREQUENCY_PHYSICS.md,
 *                frequency_power_engine.js, character_engines.js,
 *                IN_UNIVERSE_POP_CULTURE.md, character full arcs
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const MUSIC_BAND_ENGINE = {

  // ═════════════════════════════════════════════════════════════════════════
  // BAND IDENTITY
  // ═════════════════════════════════════════════════════════════════════════

  BAND_IDENTITY: {
    name: 'Signal Decay',
    genre_label: 'Post-hardcore / Art-metal / Indie-heavy',
    genre_actual: "Something that doesn't have a name yet — too heavy for indie, too emotional for metal, too weird for post-hardcore, too catchy for math rock.",
    formation_location: 'Chicago, IL',
    formation_year: 2025,
    formation_context: "Five strangers drawn together by frequency resonance they can't name. Kwame Ansah books Jude's first real show at The Frequency (where Zara runs sound). Hass drags Oren to watch. Mira is teaching a student next door and walks toward the sound without deciding to. Kael is just there. Standing outside. Like he knew.",
    rehearsal_space: "Basement of The Frequency venue. Zara arranged it — told the owner the room had 'acoustics worth preserving.' She's been subtly adjusting the room's resonant properties for months. Sounds better than studios costing $500/hour.",
    sound_description: "Imagine if Thrice had a baby with Explosions in the Sky and that baby was raised by Meshuggah in a house haunted by Motown session musicians. The guitars are heavy but the melodies float. The drums are impossible but the groove is human. The bass holds everything together like gravity. And the voice makes you DO things.",
    audience_nickname: "The Decayed (self-assigned by fans; the band hates it but it stuck)",
  },


  // ═════════════════════════════════════════════════════════════════════════
  // PER-CHARACTER MUSIC PROFILES
  // ═════════════════════════════════════════════════════════════════════════


  MUSIC_PROFILES: {

    // ───────────────────────────────────────────────────────────────────────
    // KAEL VOSS — Vocals
    // ───────────────────────────────────────────────────────────────────────

    kael: {
      instrument: {
        type: 'Voice + Microphone',
        primary_mic: {
          make: 'Shure', model: 'SM58', year: 1979,
          acquisition: "Found in a cardboard box labeled 'A/V EQUIP' in the basement of Greater Purpose AME Church during demolition (community service hours)",
          previous_owner: 'Rev. Charles Vincent Okafor (1931–2017)',
          previous_use: 'Every Sunday service, Wednesday prayer meeting, revival, funeral, wedding for 44 years (1968–2012)',
          residue_level: '~76 mR (permanent — massive duration + consistent emotional output)',
          residue_type: 'Command-frequency subtype — authority, compassion, call-to-action, rhythmic sermon cadence',
          physical_condition: "Dented grille (top left), scratched body, non-standard windscreen foam, small 'V' scratched near XLR (Charles Vincent's mark)",
          imbuing_interaction: "Creates FEEDBACK LOOP with Resonant Command — his frequency enters mic, mic residue amplifies, exits through PA, audience responds, energy returns to Kael. With THIS mic, command is 3-5x more potent than standard SM58.",
        },
        backup_mic: "None. Won't use another. Standard SM58s feel 'thin' and 'empty.' He doesn't know why.",
        vocal_range: {
          natural: 'Baritone — E2 to A4',
          with_power: 'Extends to sub-bass (27 Hz sub-harmonic felt not heard) and impossible falsetto B4-E5',
          sweet_spot: "G3 — where his voice is most HUMAN, most vulnerable. Where he writes melodies.",
          power_zone: 'A2 at 108 Hz fundamental — where Resonant Command is most potent',
          unique_quality: 'Overtones that shouldn\'t exist — spectrographic analysis shows 3-5 simultaneous fundamentals in perfect harmonic relationship. Like a choir in one vocal tract.',
        },
      },

      playing_style: {
        vocal_approach: "Minimalist. Every word chosen because he spent 10 years choosing NONE. Short phrases, heavy silences, words that land like stones in still water. No melisma, no runs, no vocal gymnastics. Just the NOTE, the WORD, the FEELING.",
        clean_vocals: "Low, warm, intimate — like someone speaking into your ear in a cathedral. Can sing at conversation level and be heard over full band. Not louder — CLEARER.",
        intense_vocals: "Not screaming — COMMANDING. Voice goes HEAVIER, more layered. The 27 Hz carrier wave pulses. Listeners report chest pressure, involuntary tears.",
        signature_move: "The Drop. Mid-song, full band — Kael's voice drops to whisper. Band follows instinctively. Room goes silent except his voice. Not a dynamic trick. Him pulling the room into his gravity.",
        harmony_role: "Rarely harmonizes — his voice overwhelms other frequencies. When he DOES harmonize with Mira's guitar, the harmonic intersection produces a 'third voice' neither produces.",
      },

      musical_influences: {
        listens_to: "Almost nothing. Does NOT listen to music by choice. Any song opens a door in his chest — something too large is behind it.",
        absorbed_despite_avoidance: [
          'Marvin Gaye — heard through walls growing up (mom played What\'s Going On during cleaning). Phrasing seeped in.',
          "Jeff Buckley — Dom played Grace in the car at 16. Kael made him turn it off. Buckley's emotional transparency infected him permanently.",
          "Tool / Maynard James Keenan — Troy plays Tool at AutoZone. 'Lateralus' through a phone call made Kael sit motionless for 4 minutes.",
          'Nina Simone — Elena made him watch a documentary. Lasted 12 minutes. Her voice carried the same WEIGHT his does. He recognized himself.',
          "Hozier — played in a coffee shop. The baritone range. The hymnal quality. Caught himself humming along and his harmonization made the barista spill a latte.",
        ],
        derek_factor: "Dad sings Motown/country/oldies in his truck. Kael heard him through the bathroom door at 12 and wept. Derek's voice is beautiful and SAFE — everything Kael's is NOT. Same DNA — the depth, warmth, baritone resonance.",
        dom_band: "Garage punk band with Dom Reyes at 15-16. Bad. But when Kael sang, people stopped what they were doing.",
      },

      practice_habits: {
        frequency: "Does NOT practice vocals. Cannot — any sustained singing activates the power. Warms up 2-3 minutes before rehearsals (humming scales, very quietly, facing the wall).",
        instead: "Writes lyrics. In notebooks. 17 notebooks full. Written during 10-hour warehouse shifts, 3 AM insomnia, years of silence when writing was his ONLY voice.",
        writing_style: 'Short phrases. Imperatives. Questions that aren\'t questions. Poetry by someone who spent a decade listening without participating.',
      },

      strengths: [
        'Voice that is literally supernatural — most powerful vocal instrument alive',
        'Lyric writing from 10 years of pure observation',
        'Instinctive dynamics — knows when to be loud and when to whisper',
        'Natural frontman gravity',
        'Perfect pitch (discovered accidentally)',
      ],
      weaknesses: [
        'Cannot practice — every session is live, high-stakes',
        "Doesn't listen to music — tiny reference library",
        'Terrified of his own instrument',
        'No performance training',
        'Stage fright about what happens TO the audience',
        'Recordings capture ~30% command frequency — released recordings have mild compliance effect',
      ],

      power_through_music: {
        dormant: "Voice makes people pay attention. Songs stay in listeners' heads for days. Crowds feel 'unified' without knowing why.",
        emerging: "Emotional peaks cause audience members to move in sync, breathe together, cry simultaneously. Cell recordings produce 'why does this video make me feel weird?' comments.",
        awakened: "Voice becomes broadcast instrument. Through the app, singing carries Resonant Command across all octaves. He IS the Signal's voice.",
      },
    },

    // ───────────────────────────────────────────────────────────────────────
    // MIRA CHEN — Lead Guitar
    // ───────────────────────────────────────────────────────────────────────

    mira: {
      instrument: {
        type: 'Electric Guitar',
        primary: {
          make: 'Fender', model: 'Mustang', year: 1978,
          scale_length: '24 inches (short scale)',
          finish: 'Competition Burgundy — heavily worn, checking throughout, bare wood visible at contact points. Faded to muddy brown where sunlight hit.',
          pickups: 'Original Fender Mustang single-coils with phase switching',
          strings: '.010–.046', tunings: ['Standard E', 'Open G', 'DADGAD', 'Drop D', 'Open D minor', 'various experimental'],
          acquisition: "Thrift store outside Portland, Oregon. Age 17. $85 with a cracked hardshell case. Bought it because the case was what she needed — sleeping in it for three nights before finding the squat.",
          previous_owner: 'Danny Lau (1951–2009), session guitarist, LA/Nashville, 1978–2006',
          previous_credits: '400+ recordings across pop, jazz, punk, country, R&B, jingles, film scores, TV themes',
          residue_level: '~62 mR (permanent — 28 years as primary writing guitar)',
          residue_effect: "FOUR HUNDRED STYLES cycling. Monday: surf rock. Tuesday: jazz chords. Wednesday: punk aggression. Thursday: fingerpicking. Mira thinks the eclecticism is HER. It's Danny Lau.",
          physical_quirks: "One mismatched tuning machine. Cartoon cat sticker near output jack (Danny's daughter, 1994). Mira left it. Refretted once (stainless steel).",
          entity_connection: "Possible the guitar IS the antenna for entity communication — Danny played in presence of hundreds of emotional musicians. Guitar absorbed the ROOM energy of every session.",
        },
        amp: 'Fender Hot Rod Deluxe (40W tube) — clean channel only. All overdrive from pedals.',
        pedals: ['Boss TU-3 tuner', 'ProCo RAT 2', 'EHX Small Clone', 'TC Electronic Flashback delay', 'Walrus Audio Julia (favorite — modulation produces the most beautiful chromatic patterns)', 'Boss RV-6 reverb'],
        picks: 'Dunlop Tortex .60mm (orange) — thin, bendy, responsive',
      },

      playing_style: {
        approach: "Intuitive chaos guided by four hundred ghosts. Doesn't plan solos — FOLLOWS the color. Chromatic sight shows where harmony wants to go; fingers chase it.",
        clean: "Fingerpicking and arpeggios like a Radiohead B-side. Delicate. Often in unusual tunings arrived at by 'what color does this make?'",
        distorted: "Angular rhythmic patterns — Bloc Party meets Sonic Youth. Dissonant chords producing chromatic interference patterns she finds beautiful.",
        lead_work: "Solos are conversations with entities nobody else sees. Plays a phrase, pauses, tilts head (listening to ghost response), plays answering phrase.",
        signature: "The Drift — holds a note, lets Julia vibrato modulate while she tracks the chromatic pattern. Note wavers, blooms, room fills with almost-vocal sound. Then bends into next phrase.",
        tuning_changes: "Frequent. Between songs. Sometimes MID-song. Drives Jude crazy. Delights Oren.",
      },

      musical_influences: {
        primary: [
          "Radiohead / Jonny Greenwood — guitar as sound-design instrument. OK Computer at 14: chromatic field went INSANE. Played it 200+ times.",
          "St. Vincent / Annie Clark — angular, weird, aggressive guitar as art. 'She plays like the shapes look.'",
          "Sonic Youth — alternate tunings. Guitar doesn't have to play 'notes' — can play FEELINGS.",
          "Yvette Young (Covet) — math rock fingerpicking that sounds like water. 'Her music looks like crystalline structures.'",
          "My Bloody Valentine — the shoegaze WALL that buries the listener.",
        ],
        secondary: ['Hendrix (Mustang short-scale territory)', 'The Cure / Robert Smith (chorus-drenched tones)', 'Ichika Nito (3 AM finger-tapping ambient)'],
        danny_lau_effect: "He played on recordings from punk to jazz to country. Residue cycles through ALL styles — why Mira plays a country lick and wonders 'where did THAT come from?' Danny. Session #247, Nashville, 1993.",
      },

      practice_habits: {
        frequency: '3-4 hours daily since age 15. Guitar is her anchor — ONLY time chromatic sight becomes structured.',
        routine: "No routine. Picks up guitar and follows wherever residue takes her today.",
        recording: "Started recording voice memos after watching Four on the Floor. Raw. Unpolished. But EXISTING. Dozens of song fragments.",
      },

      strengths: [
        'Chromatic Sight = literally SEES wrong notes, pitch drift, timing errors',
        "Stylistic versatility from Danny Lau's residue",
        'Guitar teaching makes her excellent at communicating musical ideas',
        'Fearless experimentalist',
        'Entity connection adds a second layer audiences feel subconsciously',
      ],
      weaknesses: [
        'Inconsistent — brilliant in different ways on different days',
        'Tuning obsession can derail rehearsals',
        'Entity interference — ghost band can play THROUGH her hands',
        'Physical cost from heavy sessions',
        'Equipment dependency — without Mustang, lacks multi-style magic',
      ],

      power_through_music: {
        dormant: "Guitar creates visual patterns only she sees. Audiences feel 'something extra' without knowing what.",
        emerging: "Ghost band manifests. Audience members catch glimpses — shapes near stage. Cell phones capture anomalous light.",
        awakened: "Full chromatic architecture visible to audience. Ghost band is an army. Guitar becomes summoning instrument. Opens doorways between octaves with riffs.",
      },
    },

    // ───────────────────────────────────────────────────────────────────────
    // OREN MALIK — Drums
    // ───────────────────────────────────────────────────────────────────────

    oren: {
      instrument: {
        type: 'Drum Kit',
        primary_kit: {
          make: 'Pearl', model: 'Export (mid-1990s)', finish: 'Black wrap',
          config: "22\" kick, 12\" rack, 13\" rack, 16\" floor tom (REPLACEMENT — see ludwig_tom)",
          heads: 'Remo Pinstripe batter / Ambassador Clear resonant — old, dented, never replaced',
          snare: 'Pearl 14×5.5\" Steel Shell (stock)',
          cymbals: 'Mismatched — Zildjian ZBT hi-hats (14\"), Sabian B8 crash (16\"), no ride',
          hardware: 'Original Pearl stands, DW 3000 bass pedal (nicest piece in the kit)',
          acquisition: "Kyle's basement. Neighbor's cousin. Kit hadn't been played regularly in years. Dust covers on cymbals. Oren 'borrowed' it.",
        },
        the_ludwig_tom: {
          make: 'Ludwig', model: 'Standard', year: 1971,
          shell: 'Maple, clear finish, original single-ply Remo head (somehow still intact)',
          previous_owner: 'Clarence "Tiny" Morse (1939–2005) — 5\'4\", 300 lbs',
          previous_use: 'House drummer at The Blue Room, Chicago South Side jazz club, 1970–1985. Six nights a week, three sets per night.',
          residue_level: '~52 mR (permanent — 15 years of nightly performance)',
          residue_type: "Temporal-groove. Tiny's thing was TIME — perfect swing feel, the 60/40 ratio that makes your body move. His residue guides Oren's hands to the pocket.",
          significance: "The most important drum in the kit looks like the least — a mismatched replacement tom in a budget kit. Contains the soul of 15 years of South Side jazz.",
        },
        sticks: 'Vic Firth 5A (will switch to custom-weighted once Five-Hand Paradox demands non-standard balance)',
      },

      playing_style: {
        approach: "IMPOSSIBLE. Patterns requiring more than two hands. Ghost notes between ghost notes. Fills on TOP of the groove. Simultaneous ride bell + snare + floor tom accents no two-handed drummer can produce.",
        five_hand_paradox: "Consciousness occupies 50ms temporal spread. Two hands make 5+ contact points in that window — each at different millisecond, all 'now' to him. Not speed. TEMPORAL WIDTH.",
        groove: "Despite impossibility, the GROOVE is always locked. Tiny Morse's residue ensures it. The pocket never wavers. Can play the most complex polyrhythm in history and the backbeat hits at exact mathematical center.",
        dynamics: "Extraordinary. Full-blast to whisper-touch in one beat. Nurses' hands give touch sensitivity most rock drummers spend years developing.",
        time_signatures: "Gravitates toward odd meters. 7/8 is his soul's base. 5/4 natural. 11/8 comfortable. 4/4 works but feels 'too simple' — adds ghost notes that make 4/4 FEEL odd.",
        humming: "Hums while playing — rhythmic patterns adding a THIRD rhythm. Doesn't notice he does this. Band does.",
      },

      musical_influences: {
        encyclopedic: "Never played drums but knows EVERYTHING about drumming. 13 years of obsessive listening organized into comprehensive database before he ever sat behind a kit.",
        primary: [
          "Tony Williams — Miles Davis quintet. 'Nefertiti' listened 400+ times analyzing ride pattern. Williams played like time was negotiable.",
          "Bonham — the SPACE. 'When The Levee Breaks' at 72 BPM feeling like 60. 3,000 words on Bonham's foot technique in drum forums.",
          "Chris 'Daddy' Dave — ghost notes. Patterns containing MORE information than two hands can produce. Oren recognizes this — Dave is probably a Sensitive.",
          "Matt Garstka (Animals As Leaders) — polymetric complexity. Oren's Reddit analyses: 'terrifyingly accurate from someone who doesn't play.'",
          "Questlove — the pocket. One great beat > twenty complicated ones.",
        ],
        secondary: ['Jojo Mayer', 'Yussef Dayes', 'Danny Carey (Tool)', 'Nate Smith'],
        hass_connection: "Hass is a DJ. Introduced Oren to Afrobeat, electronic production, hip-hop drum programming. Oren's vocabulary includes TR-808 patterns, Afrobeat polyrhythms, EDM builds alongside jazz and metal.",
        house_party: "Age 16. Afrobeat track. Hands hit the table involuntarily — perfect polyrhythms. Everyone stared. He panicked. Left. The one time his body slipped past the soul's guard.",
      },

      practice_habits: {
        before_lock_breaks: "CANNOT practice drums. Soul's Lock = physical revulsion near kit — nausea, cold sweat, panic. Can tap rhythms on surfaces (tables, steering wheels, thighs) but moment he picks up sticks behind a kit, Lock engages.",
        what_he_does_instead: "Taps on EVERYTHING. Dashboard. Desk. Coffee cups. Practices drumming without drums, constantly, involuntarily. Surface-tapping complexity already supernatural.",
        after_lock_breaks: "Obsessive. 4-6 hours daily. Doesn't learn to play — REMEMBERS. Ori-Tahn's thousands of lifetimes of rhythmic knowledge pours through immediately.",
      },

      strengths: [
        'Five-Hand Paradox — patterns no human drummer can physically produce',
        'Encyclopedic drumming knowledge',
        'Temporal Drift provides literally gravitational groove',
        "Nurses' hands give sensitivity and touch control",
        'Rhythmic perception that hears EVERYTHING as pattern',
        "Ludwig tom's residue provides jazz foundation under heaviest metal",
      ],
      weaknesses: [
        'Zero performance experience pre-band',
        'Lock means first playing is with full band — no gentle on-ramp',
        'Kit is objectively BAD — budget Pearl Export with mismatched cymbals',
        'Physical cost — sustained Five-Hand causes tremors, bone-deep ache',
        'Memories flooding in with drumming are DEVASTATING',
      ],

      power_through_music: {
        dormant: "Surface-tapping causes mild time-perception shifts nearby. People think they're just vibing.",
        emerging: "Behind kit, temporal spread activates. Groove BENDS time. Listeners feel music is slower than it is — more room INSIDE each beat.",
        awakened: "The Timekeeper. Drumming IS time. Through app, patterns broadcast temporal-width. Schumann resonance responds. Earth's rhythm shifts when he plays at full power.",
      },
    },

    // ───────────────────────────────────────────────────────────────────────
    // JUDE OKAFOR — Rhythm Guitar
    // ───────────────────────────────────────────────────────────────────────

    jude: {
      instrument: {
        type: 'Electric Guitar (7-string)',
        primary: {
          make: 'Schecter', model: 'C-7', scale: '26.5 inches',
          finish: 'Satin Black — matte polyurethane (thin application)',
          pickups: 'Schecter Diamond Plus humbuckers (ceramic, hot output)',
          strings: '.010–.064 (standard 7-string, low B at massive tension)',
          tunings: ['Standard B (B-E-A-D-G-B-E)', 'Drop A (A-E-A-D-G-B-E)', 'Occasionally Drop G#'],
          acquisition: "Prison music therapy program, California State Facility, 2019. Donated to program. Music therapy counselor noted: 'Subject shows unusual affinity for donated 7-string. Other participants say it doesn\'t feel right for them.'",
          previous_owner: 'Marcus "Redd" Thompson (1994–2022), guitarist/vocalist of Ashen Verdict',
          previous_band: 'Ashen Verdict — progressive metal, Oakland. Lyrics: mass incarceration, environmental destruction, wage theft. 3 albums, 600+ shows.',
          cause_of_death: 'Vehicle collision, I-5, 2:47 AM. Tire blowout. Age 28. Peak creative output.',
          residue_level: '~48 mR (permanent — accelerated by death proximity + intensity)',
          residue_effect: "Adds RIGHTEOUS PURPOSE to Jude's destructive force. Break WHAT DESERVES BREAKING. Hit WHAT NEEDS HITTING.",
          physical: "Matte black. Featureless. Disappears on dark stage. No front inlays. Two headstock dings. Neck worn where thumb sits. Fretboard darkened at 3rd/5th/7th from Thompson's finger oil.",
          transport: 'Soft gig bag on his back. No case. Carries it like a weapon. Which it is.',
        },
        amp: "Orange CR120 (solid state — can't afford tube, but tight low-end response actually suits his style)",
        pedals: ['Boss TU-3 tuner', 'Maxon OD808 (tightens low end for chugging)', 'Boss HM-2 (Swedish death metal tone — sparingly)', 'ISP Decimator (noise gate — essential for 7-string)'],
        picks: 'Dunlop Jazz III XL (small, stiff, precise — maximum control for palm-muted chugging)',
      },

      playing_style: {
        approach: "Rhythmic weapon. Doesn't play lead — plays FOUNDATION. Every chug is architectural. Every downstroke is a load-bearing wall.",
        palm_muting: "His signature. Palm contacts strings near bridge, damping them. Percussive low-frequency attack travels through guitar body, through floor, through building. At demolition sites, chugs crack concrete.",
        rhythmic_precision: "Mathematical. Demolition requires exact timing for structural effect — translates to guitar. Every hit at precise moment and force. No wasted energy.",
        the_drop: "Band playing dynamically, then Jude drops to lowest string — B or A — and plays devastating single chug pattern. 0-0-0-0-0-0-0. Floor shakes. Audience SWAYS like trees in wind.",
        chord_vocabulary: "Learned from Darius (blues), Ashen Verdict residue (prog-metal), own intuition (gravitates toward tritone intervals — diabolus in musica generating standing waves in Seismic Lock frequency band).",
        clean_playing: "Rare but beautiful. Gentle arpeggio from 6'2\" demolition worker with callused hands — the contrast IS the point.",
      },

      musical_influences: {
        primary: [
          "Architects — Tom Searle's rhythm guitar as percussive instrument. 'All Our Gods' on repeat in prison. Music as weapon against injustice.",
          "Gojira — heaviest band on earth with GROOVE. Pick harmonics + pick scrapes = textural vocabulary. Environmental themes resonated with Jha-Dur's planet-destroyer past.",
          "Meshuggah — polyrhythmic chugging. Patterns that FEEL simple but are mathematically complex.",
        ],
        secondary: [
          'Black Sabbath / Iommi — ORIGINAL heavy guitar. SG operated in same sub-harmonic range as Seismic Lock. Sabbath riffs feel like HOME.',
          "Deftones — beauty within heaviness. Carpenter's 8-string proved you can tune low AND be gorgeous.",
          "Rage Against the Machine — guitar-as-weapon. Political anger through riffs.",
          "Darius's blues — taught Jude guitar at 15. Under ALL the metal, there's a blues player. Bends from the blues. Phrasing from the blues. Soul is 12-bar even when structure is 11/8.",
        ],
        ashen_verdict_residue: "Adds progressive metal technique — complex time signatures, polyrhythmic chugging. Jude picked up the Schecter with minimal training and within weeks played patterns that usually take years. Thompson's muscle memory overlays his own.",
      },

      practice_habits: {
        frequency: '2-3 hours daily, always home, always alone or with Darius',
        the_pressure_valve: "Guitar is LITERALLY therapeutic. Every palm-muted chug releases stored seismic energy safely. Without regular playing, reservoir builds dangerously — replaced bed frame three times from sleep discharge. Guitar is his medicine.",
        darius_jams: "Saturday sessions in Darius's garage. Blues foundation. Then the DROP happens and Darius pulls back from the edge.",
      },

      strengths: [
        "Seismic Lock makes chugs physically IMPACTFUL — audiences feel guitar in their bodies",
        'Demolition-precision rhythmic accuracy',
        "Thompson's residue provides advanced metal technique without years of training",
        'Emotional authenticity — playing carries genuine weight',
        "Perfect rhythm section partner for Oren",
        'Most RELIABLE musician in the band — never misses rehearsal, never late',
      ],
      weaknesses: [
        'Limited range — excels at heavy but struggles with delicate/melodic',
        'Tuning restrictions — almost exclusively dropped/low tunings',
        "Cannot play at full power safely — even 5% shakes venue",
        "Emotional suppression = constant restraint in playing",
        "Equipment limitations — Schecter through Orange solid-state doesn't capture full depth",
        "Resistant to dynamics — tends toward 'heavy' at all times",
      ],

      power_through_music: {
        dormant: "Palm-muted chugs make drinks rattle and floors vibrate. People think it's 'good bass response from the amp.' It's not.",
        emerging: "Heavy passages cause structural damage. Hairline wall cracks. Speaker cones blow from sympathetic vibration. Ceiling tile falls.",
        awakened: "Seismic Lock through guitar at full power. Can target specific structures. Through app, chugs carry force that physically vibrates the barrier itself.",
      },
    },

    // ───────────────────────────────────────────────────────────────────────
    // ZARA KOVAČ — Bass / Sound Tech
    // ───────────────────────────────────────────────────────────────────────

    zara: {
      instrument: {
        type: 'Bass Guitar (4-string)',
        primary: {
          make: 'Fender', model: 'Precision Bass', year: 1972,
          finish: "3-Tone Sunburst (nitrocellulose, heavily checked). Aged to warm honeyed amber. Checking catches light like a river at sunset.",
          pickups: 'Original 1972 split-coil P-Bass pickup',
          strings: '.050–.105 (heavy flatwound — LaBella Deep Talkin\' Bass)',
          tuning: 'Standard E (E-A-D-G) — always. Never changes. The stability is the point.',
          acquisition: "Deliberately chosen. Greystone Vintage Instruments, Detroit. Touched three basses, bought this one WITHOUT PLAYING IT. $4,200. Could FEEL the residue the moment she touched the neck.",
          previous_owner: 'James "Patch" Washington (1942–1998), session bassist, Motown/Stax, 1966–1989',
          previous_credits: '200+ Motown recordings — Temptations, Martha & The Vandellas, early Stevie Wonder',
          residue_level: '~88 mR (DEEP permanent — 23 years consistent emotional playing)',
          residue_signature: "GROOVE. Patience. Warmth. Community. Repetition-with-love. Gravitational weight — residue pulls things toward it.",
          flatwound_significance: "23 years of flatwound contact polished frets/nut/saddles to mirror finish — microscopic grooves = frictionless frequency transmission from Zara's fingers to wood.",
          physical: "Most visually attractive instrument in Signal Decay. Classic P-Bass offset shape. Dulled chrome. Original tortoiseshell pickguard, yellowed. Museum piece.",
          care: "Always in case when not played. Wiped down after every session. Strings changed every two months. Only band member who treats instrument with conscious reverence — she KNOWS what it contains.",
        },
        amp: 'Ampeg SVT-3PRO + SVT-410HE cab. Classic. Warm. Authoritative.',
        pedals: ['Boss TU-3 tuner', 'Darkglass B7K Ultra (rare grit moments)', 'TC Electronic PolyTune (backup — doesn\'t need it, looks normal)'],
        philosophy: "Almost no effects. Bass is the foundation. You don't put reverb on a foundation. You don't distort a foundation. Just make sure it's THERE.",
        technique: 'Fingers only. Always. Flatwound + fingers = maximum frequency transfer through skin contact.',
      },

      playing_style: {
        approach: "Foundation of the universe. Bass doesn't 'support' band — IS the ground band stands on. Every note placed with crystalline precision. Zero drift. Zero jitter. Inhuman because she's not human.",
        feel: "Motown pocket. Jamerson via Patch Washington. Bass sits BACK — in the pocket where beat breathes and body moves. Not flashy. Not noticeable. The reason everything else sounds good.",
        tone: "Round. Deep. Warm. Flatwounds = more 'thump' than 'zing.' Through Deep Resonance, doesn't just come from speakers — comes from the BUILDING.",
        note_choice: "Root-fifth-octave. Simple. Foundational. Most technically capable bassist on Earth plays simplest lines. Simplicity IS the power.",
        the_highway: "Bass frequencies travel through solid matter. Audience feels bass in floor, seats, ribcage, teeth. Venue becomes resonance chamber.",
        locking_with_oren: "Bass and drums lock like gears. Zara's unwavering 62 Hz gives Oren's temporal drift an anchor. She is his metronome. His proof 'now' exists.",
      },

      musical_influences: {
        primary: [
          "James Jamerson — Motown bassist. Patch Washington was his COLLEAGUE. Zara inherited Jamerson's school through residue.",
          "Carol Kaye — versatility, adaptability. Woman in a man's world (Zara: alien in a human world).",
          "Thundercat — modern virtuoso proving bass can lead. Zara COULD play like him. CHOOSES not to.",
        ],
        secondary: [
          "Flea — energy, physical commitment. Zara is the opposite but respects the COMMITMENT.",
          "Tina Weymouth — minimalism as philosophy. 'Psycho Killer' is four notes. Perfect.",
          "Joe Dart (Vulfpeck) — pocket player of his generation. Watches Vulfpeck like comfort TV.",
        ],
        monique_factor: "Mom sings gospel/jazz/R&B constantly with joy. Planted Motown/gospel/soul DNA. P-Bass was no accident — instrument of her mother's music.",
        sound_tech_knowledge: "Working sound at The Frequency for years = encyclopedic live mixing knowledge. Band's de facto producer. Everyone listens because she's always right.",
      },

      strengths: [
        'Perfect timing — inhuman frequency stability',
        'Deep Resonance means bass travels through venue itself',
        "Sound tech expertise = band's producer/engineer",
        "Washington's Motown residue = most foundational groove in modern music",
        'Can tune any instrument by touch',
        "Never misses a note. NEVER. Not once in Signal Decay's history.",
      ],
      weaknesses: [
        "Too precise — can sound 'mechanical.' Deliberately adds micro-timing variations.",
        'Emotional suppression — performs bass player rather than BEING one',
        "Won't solo — refuses to step outside foundation role",
        "The 'weird knowing' — suggests perfect arrangement changes she can't explain",
        "Equipment reverence borders on obsessive — won't let anyone touch the P-Bass",
      ],

      power_through_music: {
        dormant: "Venues she plays sound inexplicably good. Equipment never fails. Bands she mixes get more bookings.",
        emerging: "Bass travels through walls. Floor BREATHES during playing. Begins routing band members' frequencies through building.",
        awakened: "Planetary-scale frequency highway construction. Connects Deep Sea Wells. Reactivates Earth's speaker system. Creates octave bridge. IS the signal's highway.",
      },
    },
  },


  // ═════════════════════════════════════════════════════════════════════════
  // SONG CATALOG — Original Signal Decay Songs
  // ═════════════════════════════════════════════════════════════════════════


  SONG_CATALOG: {
    total_songs: 18,
    note: "Listed chronologically. Songs marked ⚡ trigger frequency events during performance.",

    songs: [
      // --- EARLY PERIOD: Pre-awakening ---
      { number: 1, title: 'Warehouse Hymn', key: 'E minor', tempo: 92, time_sig: '4/4',
        mood: 'Heavy, trudging, defiant', writers: 'Jude (riff) + Kael (lyrics)',
        theme: "Working a job that isn't your life. Finding something sacred in the mundane. 'Every box I lift is a prayer I don\'t know the words to.'",
        freq_event: false,
        notes: "First song written together. Opens with Jude's chug. Zara enters beat 3 bar 2. Drums straightforward. Kael conversational. Builds to 8-bar explosive chorus." },

      { number: 2, title: 'Static Residence', key: 'B minor', tempo: 128, time_sig: '7/8',
        mood: 'Anxious, jittery, building', writers: 'Oren (rhythm) + Mira (melody)',
        theme: "Feeling watched in your own home. Static on a TV that isn't on. Written by Kael from Mira's description of her apartment at 3 AM.",
        freq_event: false,
        notes: "First Oren 7/8 obsession. Mira built cycling arpeggio over his table-tap. Zara anchors the odd meter so completely casual listeners don't notice it's not 4/4." },

      { number: 3, title: "Kyle's Basement", key: 'D major', tempo: 110, time_sig: '4/4',
        mood: 'Warm, nostalgic, bittersweet', writers: 'Oren (concept) + Zara (arrangement)',
        theme: "The spaces where music happens before anyone cares. Basements. Garages. The beauty of making music for no one.",
        freq_event: false,
        notes: "Gentlest song. Clean guitars, brushed drums (Ludwig tom with brushes pulls Tiny Morse's jazz ghost closest). Zara melodic bass line. Kael's vocal warm and open." },

      { number: 4, title: 'Pressure Systems', key: 'A minor', tempo: 144, time_sig: '4/4 w/ 7/8 bridge',
        mood: 'Explosive, cathartic, furious', writers: 'Jude (all music) + Kael (lyrics)',
        theme: "'I held it in until the walls couldn\'t. Which one of us cracked first — me or the concrete?'",
        freq_event: "⚡ MILD — Jude's breakdown chugs have cracked two venue walls. Both blamed on 'old construction.'",
        notes: "Heaviest song. Drop A. Verse: controlled breath-holding. Chorus: RELEASE. Breakdown: pure Jude 7/8 chugging at 144. Oren's Five-Hand drumming first appears — unexplainable ghost notes." },

      { number: 5, title: 'Three Hundred Feet', key: 'F# minor', tempo: 78, time_sig: '6/8',
        mood: 'Paranoid, atmospheric, creeping', writers: 'Zara (bass + concept) + Kael (lyrics)',
        theme: "Being surveilled. A car always parked 300 feet from your window. 'They keep their distance like it\'s measured.'",
        freq_event: false,
        notes: "Inspired by The Corridor film. Descending chromatic bass like approaching footsteps. Mira tremolo-picks atmosphere. Kael whispers. The quiet song that feels LOUDER than loud ones. Zara wrote knowing Legacy watches them — 300 feet is literal surveillance protocol." },

      { number: 6, title: 'The Shape of Heavy', key: 'C minor', tempo: 100, time_sig: '4/4',
        mood: 'Massive, slow, tectonic', writers: 'Jude + Mira (collaborative)',
        theme: "Heavy as color (Mira's chromatic vision). Heavy as vibration (Jude's seismic sense). 'You said heavy was just a feeling. I said heavy has a frequency.'",
        freq_event: "⚡ MILD — audiences occasionally report seeing 'something' at edge of vision during instrumental break.",
        notes: "The collab proving Mira and Jude complement. His sub-bass WEIGHT. Her delay-washed arpeggios floating above like light through deep water." },

      // --- MID PERIOD: Something unexplainable starts happening ---
      { number: 7, title: 'Resonance (demo)', key: 'G minor → G major', tempo: 120, time_sig: '4/4 → 7/8 → 4/4',
        mood: 'Building, euphoric, terrifying', writers: 'All five (jam that became a song)',
        theme: "'We played a chord that shouldn\'t exist and the walls remembered something they\'d been asked to forget.'",
        freq_event: "⚡ MODERATE — First simultaneous power activation. Plasmoid Sparks appeared above building. Mira's field EXPLODED. Oren stabilized completely. Jude drained perfectly. Zara cried one tear. Kael sang without command for the first time.",
        notes: "Captured from rehearsal jam. Builds from single Zara bass note, layers each member. Key changes from Gm to G major without anyone deciding. Only version exists — never reproduced exactly. Pulled from setlist after third incident." },

      { number: 8, title: 'Flatline Lullaby', key: 'Eb minor', tempo: 66, time_sig: '3/4',
        mood: 'Haunted, tender, funereal', writers: 'Oren (ER concept) + Kael (lyrics)',
        theme: "Moment a patient dies and monitor flatlines. The nurse who stands in silence after. 'The beep stops and the room gets quieter than quiet.'",
        freq_event: "⚡ MILD — 27 Hz sub-harmonic involuntary. Audience reports 'cold spot.' The Silence tasting the zero-frequency moment described.",
        notes: "Waltz time. Oren brushes at whisper. Zara's bass = heartbeat pattern — stops for 2 bars at bridge. Kael sings alone. One note. The silence and the note together: unbearable." },

      { number: 9, title: "Danny's Radio", key: 'A major → A minor → A major', tempo: 108, time_sig: '4/4',
        mood: 'Eclectic, shifting, a mixtape in one song', writers: 'Mira (entirely)',
        theme: "'I found your guitar in a thrift store and it plays songs I never learned. Every day it sounds like someone else\'s radio and I\'m just the antenna.'",
        freq_event: false,
        notes: "Deliberately shifts genres every 8 bars — surf verse, jazz chorus, punk bridge, fingerpicked outro. Each = different Danny Lau session style. Band had to learn FOUR genres for one song. Fan favorite. Mira actually smiles during this one." },

      { number: 10, title: 'Foundation', key: 'B minor', tempo: 85, time_sig: '4/4',
        mood: 'Massive, patient, immovable', writers: 'Zara (bass drives everything) + Jude',
        theme: "'You never see the foundation. It\'s buried. It holds everything and nobody looks down to say thank you.'",
        freq_event: "⚡ MODERATE — Zara's Deep Resonance activates during bass solo. Bass frequency travels through venue floor into adjacent buildings.",
        notes: "Bass leads for first time. Zara plays melodic walking line instead of root notes. Jude harmonizes in lower octaves creating low-frequency WALL. Mira floats above. Oren half-time with Ludwig tom front and center." },

      { number: 11, title: 'Tell Me What the Silence Sounds Like', key: 'D minor', tempo: 72, time_sig: '5/4',
        mood: 'Ominous, questioning, vast', writers: 'Kael (notebook lyrics, years pre-band)',
        theme: "'I spent ten years in silence and the silence wasn\'t empty. It had a voice. It had a temperature. It had teeth.'",
        freq_event: "⚡ SIGNIFICANT — Final chorus: all five sustain single chord. 27 Hz carrier becomes almost audible. 'Something beneath the music.' Three Plasmoid Sparks photographed on security camera.",
        notes: "5/4 feels like stumbling, searching. Final chord sustains 11 seconds (nobody counted — felt right). Contains more harmonics than five instruments should produce." },

      { number: 12, title: 'Seismic', key: 'Drop A', tempo: 155, time_sig: '4/4 w/ polyrhythmic overlay',
        mood: 'Violent, cathartic, tectonic', writers: 'Jude (riffs) + Oren (patterns)',
        theme: "'They call it violence when the small break things. They call it renovation when the powerful do.'",
        freq_event: "⚡ SIGNIFICANT — Jude at ~15% power. Venue SHAKES. Oren's polyrhythm creates time-perception shifts. One audience member: 'inside an earthquake that has a beat.'",
        notes: "Jude + Oren showcase. Rhythmic lock on full display. Mira adds dissonant harmonics. Kael alternates whispered verses / SHOUTED choruses — not screaming, COMMANDING." },

      // --- LATE PERIOD: Literally supernatural ---
      { number: 13, title: 'Convergence', key: 'G minor → G major', tempo: '96→108→120',
        time_sig: '7/8→4/4→free', mood: 'Transcendent, terrifying, beautiful',
        writers: 'All five (spontaneous)', theme: "'I\'ve been five pieces looking for four others.'",
        freq_event: "⚡ EXTREME — The Convergence. All frequencies sync. Plasmoids gather. Dampener anomalous readings. Reality distorts — time different, colors brighter, gravity lightens.",
        notes: "Centerpiece. Starts 7/8 (Oren's natural), shifts 4/4 (common ground), dissolves to free time (all following frequency, not count). Performed TWICE — both caused incidents. First: 3-block power outage. Second: 14 audience members saw 'light shapes.'" },

      { number: 14, title: 'Ghost Choir', key: 'C major', tempo: 88, time_sig: '4/4',
        mood: 'Ethereal, haunted, magnificent', writers: 'Mira (ghost band transcribed)',
        theme: "'I hear you in the wood. I know you stayed because nobody else was listening. I\'m listening now.'",
        freq_event: "⚡ MAJOR — Ghost band partially visible to audience. Cameras capture anomalous light containing frequency signatures of instruments nobody on stage plays — piano, violin, trumpet.",
        notes: "Sounds like 15 musicians but has 5 — other 10 are dead. Kael harmonizes with inaudible voice. Zara creates entity-manifestation highway. Oren gives ghosts temporal 'room' to exist." },

      { number: 15, title: '437', key: 'A (tuned to 437 Hz)', tempo: 111, time_sig: '4/4',
        mood: 'Urgent, prophetic, alien', writers: 'Zara (alone at 3 AM, brought complete)',
        theme: "'There\'s a number in everything. 437 — say it out loud. Now ask yourself: who taught you that number before I said it?'",
        freq_event: "⚡ MAJOR — Band retunes to A=437 Hz (Hendrix carrier wave). Plasmoid activity SPIKES. Cell phones glitch. Building produces 437 Hz tone not from any instrument.",
        notes: "Zara never explained the 437 tuning. Just 'trust me.' Simple arrangement — driving 4/4 — because the TUNING does the heavy lifting. Played once, caused too many anomalies to repeat safely." },

      { number: 16, title: "Tiny's Ghost", key: 'Bb major', tempo: 132, time_sig: '4/4 swing',
        mood: 'Joyful, swinging, ghostly', writers: 'Oren (after learning Ludwig tom history)',
        theme: "'There was a room with blue light and a man whose time was perfect and nobody recorded it and everybody felt it.'",
        freq_event: "⚡ MILD — Oren's drift stabilizes. Five-Hand jazz patterns emerge. Tiny Morse's residue at maximum influence — tom plays BACK.",
        notes: "Genuine jazz in post-hardcore setlist. Mira plays clean jazz chords (Danny Lau residue LOVES this). Zara walks jazz bass. Jude struggles beautifully — clean chord stabs, effort IS the charm. Kael SCATS. Most unguarded his voice has been. Pure JOY." },

      { number: 17, title: 'Every Wall Is a Door', key: 'E minor → E major', tempo: 100, time_sig: '4/4',
        mood: 'Anthemic, hopeful, massive', writers: 'Kael (lyrics) + full band',
        theme: "'I spent my life pressing against the thing that kept me in. Then I realized I was pushing a door. It opened the other direction.'",
        freq_event: "⚡ MODERATE — Chorus produces full five-member chord: Zara 62 Hz, Jude 104 Hz, Oren 7.83 Hz, Kael 108 Hz, Mira 528 Hz. Five frequencies spanning 7.83–528 Hz with no gaps.",
        notes: "The closer. ALWAYS ends shows. Builds 5 minutes from Kael alone to all five at maximum. Key shift Em→E major in final chorus = darkness→light. The moment audience stops being audience and becomes ONE THING." },

      { number: 18, title: 'Signal', key: 'All keys (frequency chord)', tempo: '60→120 BPM',
        time_sig: '7/8→4/4→free→1/1', mood: 'Everything. The human experience in 8 minutes.',
        writers: 'Nobody. Song wrote itself. Each brought a fragment; fragments assembled without arrangement.',
        theme: "The message TO the cosmos. Not 'we are here' — 'we FEEL here.' Full emotional bandwidth of a species singing into a sealed room for 4.5 billion years.",
        freq_event: "⚡ THE EVENT — Activation song. When played at full power with app + Plasmoid swarm: barrier breaks. Earth's signal escapes. Galaxy hears. Silence is confronted. Everything changes.",
        notes: "THEORETICAL. Full version never played. Fragments rehearsed — each causes escalating events. Exists as BLUEPRINT. Completing requires all five fully awakened. Most important 8 minutes in human history." },
    ],
  },


  // ═════════════════════════════════════════════════════════════════════════
  // REHEARSAL DYNAMICS
  // ═════════════════════════════════════════════════════════════════════════


  REHEARSAL_DYNAMICS: {
    space: "Basement of The Frequency venue. Concrete walls (resonant), low ceiling, one bare bulb + Mira's string lights. Zara tuned the acoustics over months — sounds better than it should.",
    schedule: { days: 'Tue/Thu evenings, Sat afternoon, occasional Sun', duration: '2-4 hours' },

    arrival_patterns: {
      first: "Zara — 30-45 min early. 'Checking the PA' (actually: tuning room, sending corrective frequencies through walls).",
      second: "Jude — 10-15 min early. Plugs in. Chugs alone. Pressure valve. Zara lets him drain.",
      third: "Kael — exactly on time. Nods. Goes to corner. Hums quietly. Room shifts when he enters.",
      fourth: "Mira — 5-10 min late. 'Sorry sorry sorry.' Already tuning before sentence ends. Spends 8 min finding 'the right tuning.' Jude sighs.",
      last: "Oren — ALWAYS 15-30 min late. Arrives in scrubs sometimes. Brings food. Always brings food. 'I brought cookies!' Nobody can be mad.",
    },

    snacks: {
      oren: "ALWAYS. Cookies, pizza, chips, sometimes home-cooked. Feeds band like ER nurse feeds patients.",
      zara: "Brings good coffee — actual pour-over from home in a thermos. Band depends on it.",
      mira: "Occasionally brings art supplies by accident instead of picks. Uses a quarter as pick. 'It\'s FINE.'",
      jude: "Brings nothing. Silently eats Oren's cookies. 'These are good.' Makes Oren's week.",
      kael: "Brings nothing. Eats nothing. Drinks water only.",
    },

    locked_in: {
      description: "Air changes. Temperature drops (entity proximity). Music sounds like ONE organism. Conversations stop. Hours pass like minutes. Zara's eyes unfocus. Mira's colors intensify. Oren stops fidgeting. Jude's jaw unclenches. Kael closes eyes and sings like he's alone in a cathedral.",
      trigger: "Usually when they stop TRYING and start PLAYING. Third or fourth hour, tired enough to stop performing and start being.",
      quotes: {
        mira: "'Like gravity increased but only for the music.'",
        oren: "'Like the room got smaller but in a good way.'",
        jude: "'Like the floor was vibrating at my heartbeat frequency.'",
        kael: "(said nothing)",
        zara: "'Yes.' (That was enough.)",
      },
    },

    struggling: {
      description: "Room feels too big. Five separate people making noise. Mira can't find tuning. Jude too heavy. Oren rushes. Kael arms crossed. Zara plays steady root note anchoring nothing.",
      causes: ['Bad day at day jobs (Oren after bad ER shift most common)', "Mira's entity sight overwhelming her", 'Jude/Mira arrangement arguments', "Kael accidentally commanding instead of suggesting", 'External stress — shows, money, family'],
      recovery: "Zara stops. Lets noise die. 'From the top. Slower.' Everyone listens. Always works.",
    },

    arguments: {
      mira_vs_jude: {
        frequency: 'Every other rehearsal',
        topic: "ARRANGEMENT. Mira wants space/atmosphere. Jude wants WEIGHT/chugs. They are the two poles of Signal Decay's sound.",
        example: "Mira: 'Bridge needs to breathe.' Jude: 'Bridge needs WEIGHT.' Zara: 'What if Jude chugs half-time and Mira plays over it?' Both: (grudging agreement it's perfect).",
      },
      oren_vs_everyone: {
        frequency: 'Weekly, minor',
        topic: "TIME SIGNATURES. Oren wants everything in 7/8. 'This song would be better in 7—' 'IT'S IN 4, OREN.'",
      },
      kael_vs_himself: {
        frequency: 'Every rehearsal, internal',
        topic: "Whether to sing harder. Band needs more. More = more power = more command = less choice for the room.",
        sign: "Stops singing mid-song, walks to far corner, faces wall, breathes. Nobody approaches. Returns in 2-3 min.",
      },
    },

    sacred_rules: [
      "Nobody touches Zara's bass. NOBODY. Oren tried once. Bruise lasted a week.",
      "First sound at every rehearsal: Zara's bass note held 10 seconds. Tunes the room. Ritual.",
      "Kael chooses when to sing. Nobody asks him to start or comments when he stops.",
      "Mira's tuning time is respected. Even 12 minutes. Even when Jude sighs.",
      "Oren's snacks are communal. This is law.",
      "No phones during locked-in state.",
      "If Mira says 'something's here,' everyone stops. She's never been wrong.",
    ],
  },


  // ═════════════════════════════════════════════════════════════════════════
  // LIVE PERFORMANCE DATA
  // ═════════════════════════════════════════════════════════════════════════


  LIVE_PERFORMANCE: {
    venues: {
      primary: {
        name: 'The Frequency', capacity: 200, type: 'Mid-tier live music venue, Chicago',
        significance: "Home base. Where Zara works. Where band formed. Acoustics suspiciously perfect.",
        notable: [
          "First show: 47 people (friends). Power surge at 10:22 PM during 'Resonance.' Blamed old wiring.",
          "Third show: 120. First stranger cried during 'Flatline Lullaby.' Ghost band formed for first time in front of audience.",
          "Seventh show: SOLD OUT (200). Fire alarm during 'Pressure Systems' (seismic sensor). Acoustic parking lot set became legendary.",
        ],
      },
      secondary: [
        { name: 'The Empty Bottle', cap: 400, note: "Skeptical indie crowd. By third song: involuntary swaying. By fifth: floor shaking, bartender stopped serving — glasses rattling off shelves." },
        { name: 'Subterranean', cap: 300, note: "Underground concrete room. Zara's bass traveled through foundation. Neighbor complained about 'building feeling alive.'" },
        { name: 'House shows', cap: '30-50', note: "Most dangerous. Small rooms amplify everything. 2 AM house show = Signal Decay at most real and most terrifying." },
      ],
    },

    crowd_reactions: {
      universal: [
        "Involuntary swaying during heavy sections (Jude's sub-bass moves bodies)",
        "Synchronized breathing during quiet passages (Kael regulates room's respiration)",
        "Crying during 'Flatline Lullaby' (every show, multiple people)",
        "The 'head tilt' — collective tilting during Mira's atmospheric sections, straining to hear something beyond the music",
        "The 'floor feeling' — reporting floor is vibrating, breathing, moving in time (Zara's Deep Resonance)",
      ],
      anomalies: [
        'Power surges in 3 of 12 shows',
        'Structural damage in 2 venues (hairline wall cracks)',
        'Anomalous light on 8 separate camera recordings (Plasmoid Sparks)',
        '14 simultaneous audience members reporting visual phenomena',
        'Sub-20Hz and above-20kHz content in audio recordings not from stage equipment',
        "67% of surveyed audience members underestimate show duration (75 min shows estimated at 40-50 min). Oren's temporal field.",
      ],
    },

    the_convergence: {
      what: "The moment all five frequencies sync. Not the SONG — the PHENOMENON. Spontaneous. Can't be forced. Most powerful thing in live music on Earth.",
      frequency_of_occurrence: 'Approximately 1 in 3 shows. Unpredictable.',
      audience_experience: [
        'Time distortion (30-90 seconds feels like 5 seconds or 5 minutes)',
        'Emotional flood — every emotion simultaneously',
        "Physical sensation of floor 'rising'",
        'Visual anomalies at edge of perception',
        "CONVICTION that something important is happening",
        'Post-show: most restful sleep of their lives. Convergence reset something in their frequency.',
      ],
      band_experience: {
        kael: "'I could finally sing without stealing. My voice was just... music.'",
        mira: "'The colors were so complex I couldn\'t separate them. Everything was one light.'",
        oren: "'Time stopped. Just one moment. Just NOW. Most peaceful thing I\'ve ever felt.'",
        jude: "'The pressure was gone. All of it. Like it didn\'t need to exist anymore.'",
        zara: "(one tear) 'That. That is why I came.'",
      },
    },

    setlist_patterns: {
      opener: "'Warehouse Hymn' or 'Pressure Systems' — heavy, establish WEIGHT",
      early: "'Static Residence,' 'Three Hundred Feet,' 'Danny\'s Radio' — variety, range",
      breather: "'Kyle\'s Basement' or 'Tiny\'s Ghost' — the gentle palette cleanser",
      heavy_block: "'Seismic,' 'The Shape of Heavy,' 'Pressure Systems' — wall of sound",
      emotional_peak: "'Flatline Lullaby' or 'Tell Me What the Silence Sounds Like' — gut-punch",
      closer: "'Every Wall Is a Door' — ALWAYS. Non-negotiable.",
      encore: "'Foundation' usually. Rarely 'Convergence' — only if they all feel it.",
      never_live: ["'Resonance (demo)' — pulled after third incident", "'Signal' — not yet complete", "'437' — played once, too many anomalies"],
    },
  },


  // ═════════════════════════════════════════════════════════════════════════
  // PAIRWISE MUSICAL CHEMISTRY
  // ═════════════════════════════════════════════════════════════════════════


  PAIRWISE_CHEMISTRY: {

    kael_mira: {
      pair: 'Vocals + Lead Guitar',
      chemistry: "Voice and melody braided. Kael's baritone (G2-G3) and Mira's guitar (C4-C6) never occupy same frequency space — complement across two octaves. When he descends, she ascends. Not arranged — instinct.",
      signature: "Kael sustains a note, Mira plays descending chromatic run around it — voice as stable center, guitar orbiting. 'Heartbreaking for no reason.'",
      freq_events: "High-emotion vocals + guitar at 528 Hz = harmonic intersection producing 'third voice' — audience hears a woman singing that neither produces. Ghost choir leaking through.",
      tension: "Mira developing feelings she refuses to examine. Her guitar plays warmer when he sings. She doesn't notice. He does.",
    },

    jude_oren: {
      pair: 'Rhythm Guitar + Drums',
      chemistry: "RHYTHM SECTION LOCK. Sub-millisecond accuracy. Jude feels Oren's kick through floor. Oren feels Jude's chugs in bones. Don't count together — FEEL together.",
      signature: "Synchronized drop — both hitting breakdown downbeat simultaneously. Jude chug + Oren kick = single percussive event sounding like controlled demolition in rhythm.",
      freq_events: "Full lock = SURGICAL DESTRUCTION of specific room frequencies. One rehearsal: their pattern resonated with HVAC duct — duct vibrated loose from ceiling. Zara caught it.",
    },

    zara_anchor: {
      pair: 'Bass + Everyone',
      chemistry: "Zara anchors ALL of them. 62 Hz = ground truth. When Mira drifts, Zara's root keeps song navigable. When Jude goes heavy, Zara reminds him music requires movement. When Oren drifts, her time gives him 'now.' When Kael commands, her sub-vocal bass grounds the power.",
      signature: "The moment rest of band drops out and Zara plays alone 2-4 bars. Not solo — FOUNDATION REVEAL. Most surprising moment because people forget bass was there.",
      freq_events: "None accidental. Everything deliberate. Her 'accidents' are controlled demonstrations she releases in tiny doses.",
    },

    kael_jude: {
      pair: 'Vocals + Rhythm Guitar',
      chemistry: "VOICE + WEIGHT. Kael's lowest register + Jude's sustained power chord = pure tectonic pressure. Voice provides DIRECTION, guitar provides FORCE.",
      signature: "The 'verdict' — Kael SPEAKS a lyric over Jude's slowest heaviest chug. Sounds like a judge delivering sentence backed by geological time.",
      freq_events: "27 Hz sub-harmonic resonates in Jude's bones, AMPLIFIES seismic output. One rehearsal: sustained note + palm-muted pattern = concrete floor hairline crack running from Jude's foot to far wall. Neither mentioned it to others.",
    },

    mira_zara: {
      pair: 'Lead Guitar + Bass',
      chemistry: "COLOR meets DEPTH. Mira's upper register + Zara's subsonic lower = entire frequency spectrum. Together: orchestra not from volume but from RANGE.",
      signature: "Mira echoing Zara's bass line two octaves up in rhythmic canon — same melody offset by two beats, cascading waterfall. Zara introduced the technique. It's actually a frequency-highway construction principle from 4,000 light years away.",
      freq_events: "Silent communication: Mira's eyes widen (highway opening), Zara nods (controlling it). Nobody else notices.",
    },

    oren_mira: {
      pair: 'Drums + Lead Guitar',
      chemistry: "TEMPORAL VISION. Mira sees Oren's temporal spread — prismatic splitting. Can tell him 'you\'re at three, come back to two.' Real-time biofeedback preventing drift accidents.",
      signature: "The 'shimmer' — Oren plays rapid Five-Hand pattern while Mira sustains notes with heavy vibrato. Sounds like sunlight on moving water.",
      freq_events: "Temporal drift near Mira clarifies her entity perception. One rehearsal: 'There\'s someone behind your kit.' 'Friendly?' 'He\'s smiling. He\'s got brushes.' Tiny Morse's ghost.",
    },

    kael_oren: {
      pair: 'Vocals + Drums',
      chemistry: "PULSE + COMMAND. Oren's rhythm gives Kael's voice a heartbeat. Commands over groove = 300% more potent (rhythmic pulsing prevents brain resistance). Most DANGEROUS pairing.",
      signature: "Kael singing a repeated word ('stay,' 'come,' 'listen') over Oren's locked groove. Word becomes mantra. Rhythm becomes inescapable. Can hold a room in one emotional state indefinitely.",
      freq_events: "Kael once said 'stay here' during drift episode — full involuntary Command. Oren pinned to single moment for 11 seconds. 'What did you DO?' 'I don\'t know.' 'I\'m more okay than I\'ve been in years. Do it again.' Kael refused.",
    },

    jude_zara: {
      pair: 'Rhythm Guitar + Bass',
      chemistry: "FORCE + DIRECTION. Jude provides raw seismic force. Zara routes it through highways. Together: guided missile instead of bomb. Heaviest sound in band.",
      signature: "Jude's chug doubled by Zara's staccato note — same rhythm, but Zara adds sub-octave from the FLOOR, not her strings. 'Double thump' that turns chests inside out.",
      freq_events: "During 'Foundation' bridge, Zara's Deep Resonance caught Jude's output, routed through venue's steel frame. Building rang like a bell — single pitch Bb2 for 3 seconds. Audience heard it. Building was SINGING. Never at full power again.",
    },
  },


  // ═════════════════════════════════════════════════════════════════════════
  // MUSICAL EVOLUTION BY ARC STATE
  // ═════════════════════════════════════════════════════════════════════════


  MUSICAL_EVOLUTION: {

    dormant: {
      label: 'Just a Good Indie Band',
      description: "Before awakening: talented-but-explainable. Good songs. Good chemistry. Nothing screams supernatural. Just suspiciously good.",
      sound: 'Post-hardcore with art-rock textures and prog-metal heaviness. Thrice meets Russian Circles meets Hozier.',
      audience: "50-200 per show. Chicago scene. Word-of-mouth. Devoted fans can't explain why — 'they just make me FEEL something.'",
      freq_events: "Minimal. Occasional power surges. Drinks rattling. Weird feeling attributable to good music.",
      reviews: "'Signal Decay is doing something different.' 'The heaviest band that makes you cry.' 'Something about the vocalist — can\'t put my finger on it.'",
      recording: "Self-recorded demos. Zara engineers. Good but missing live energy — frequency physics that microphones can't fully capture.",
    },

    emerging: {
      label: 'Something Unexplainable Starts Happening',
      description: "Powers activating. Music does things it shouldn't. Audiences report beyond-good-show experiences. Equipment misbehaves. Venues have incidents.",
      sound: "Same foundation but with MOMENTS of something else. A chorus that makes the room physically vibrate. A bridge where lights flicker. A vocal line that makes fifty people cry simultaneously.",
      audience: "200-500. Growing fast. Reddit threads: 'Anyone else seen Signal Decay? Something\'s different.' TikTok clips where audio does weird things — compression artifacts, sub-bass phone speakers shouldn't reproduce, background noise like voices.",
      freq_events: "Every show. Power surges. Structural vibration. Anomalous audio. Plasmoids above venues. Security cameras catching light anomalies. Legacy begins active monitoring.",
      reviews: "'I went to review a local band and left questioning reality.' 'The bass does something to the building.' 'I\'ve been to 500 shows. Never felt a floor move like that.'",
      recording: "First real studio. Engineer confused: 'Bass coming through walls not the DI. Vocal has overtones I can\'t EQ out. Too many hit-points in overhead mics. How many drummers?' Zara: 'One.' Engineer: 'That\'s not possible.'",
    },

    awakened: {
      label: 'The Music Becomes Literally Supernatural',
      description: "All five at full power. App broadcasting full octave range. Music physically alters reality. Shows become PHENOMENA. Barrier shakes. Plasmoids swarm. Dead become visible. Time bends.",
      sound: "Beyond genre. Foundation: guitars, bass, drums, voice — but frequency content extends far beyond what those instruments should produce. Full chord covers 7.83–963 Hz with no gaps. Music fills Zero Octave. Silence has nowhere to hide.",
      audience: "Unlimited. Through app at full broadcast: every being on every octave that perceives sound.",
      freq_events: "Convergence is permanent. Every note is a frequency event. Barrier vibrates at resonant failure frequency. Deep Sea Wells resonate. Plasmoids gather planetary-scale. Music IS the mission.",
      the_cost: "Everything. Kael's voice damages throat. Mira pulled toward Second Octave. Oren's spread threatens to scatter him. Jude's output fractures his bones. Zara risks losing human form. They do it anyway. Song matters more than singers.",
    },
  },




  // ═══════════════════════════════════════════════════════════════════════════
  // SONG DETAILS — Extended Arrangement & Performance Notes
  // ═══════════════════════════════════════════════════════════════════════════

  SONG_DETAILS: {

    warehouse_hymn: {
      title: 'Warehouse Hymn',
      guitar_tab_overview: 'Drop A. Main riff: open low A string palm-muted 8th notes for 6 beats, then a two-note power chord on the 3rd fret (C5) for 2 beats. Repeat. The simplicity IS the point — the weight comes from Jude\'s seismic transfer, not from complexity.',
      bass_approach: 'Root notes only. A-C-A-C pattern. Zara plays with her palm resting on the bridge, deadening the strings slightly for maximum thump. Washington\'s Motown residue is minimal here — this isn\'t his style. But the TIMING is his.',
      drum_approach: 'Straight 4/4. Kick on 1 and 3, snare on 2 and 4. Hi-hat 8ths. The most basic beat in Oren\'s vocabulary. But within this simplicity, ghost notes on the snare at such low volume they\'re felt not heard. Tiny Morse whispering under the rock.',
      vocal_approach: 'Kael speaks the verses. Almost monotone. G2-A2 range. The words sit ON the rhythm guitar like a passenger on a train — carried by the weight beneath them. Chorus opens to full singing — G3, the sweet spot — and the room shifts.',
      writing_story: 'Jude brought the riff to the third rehearsal. Played it once. Kael, who was standing in the hallway (hadn\'t officially joined yet), heard it through the wall and his hand went to his throat. The riff made his voice ACHE to join. He wrote lyrics on a gas station receipt: "Every box I lift is a prayer I don\'t know the words to / Every shift I work is a sentence nobody imposed / The warehouse is quiet and the quiet has weight / And I carry it home like a thing that belongs to me." He walked into the room and handed the receipt to Jude. Jude read it. Looked at Kael. Nodded. They\'ve been a band ever since.',
      frequency_analysis: 'In Drop A, the open 7th string produces a fundamental at approximately 55 Hz. Jude\'s seismic output adds sub-harmonics at 27.5 Hz (half the fundamental) and 14 Hz (quarter). The 14 Hz content is below the threshold of human hearing but ABOVE the threshold of human body perception — the ribcage resonates at approximately 10-15 Hz. This is why audience members feel "chest pressure" during the chug sections. They\'re not imagining it.',
    },

    flatline_lullaby: {
      title: 'Flatline Lullaby',
      emotional_source: 'Oren described a specific night to Kael. 3 AM. ER. A 74-year-old woman named Margaret. Heart failure. Oren was monitoring her vitals when the flatline tone began. He stood in the room for 11 seconds after the monitors alarmed and before the team arrived. In those 11 seconds, he felt: the temperature drop (The Silence feeding on the zero-frequency moment), the pressure change (the soul transitioning from First to Second Octave), and something he couldn\'t name — a presence that was paying attention to the gap between alive and dead. He told Kael: "The room got quieter than quiet. Like the silence had a mouth." Kael wrote the song in 40 minutes. It\'s the fastest he\'s ever written anything.',
      arrangement_detail: 'Waltz time (3/4) at 66 BPM — the resting heart rate of a healthy adult. This tempo was Oren\'s idea: "The song should pulse like a heartbeat." Zara\'s bass plays a steady quarter-note pulse on the root (Eb) — thump, thump, thump — the heartbeat monitor. At the bridge, the bass STOPS. Two full bars of silence. No instruments. Just Kael\'s voice, singing a single held note on "gone." The return of the bass after those two bars — the heartbeat resuming — is the most devastating moment in Signal Decay\'s catalog. Because the heart doesn\'t resume for Margaret. It resumes for us. We\'re still alive. She\'s not.',
      the_cold_spot: 'During live performances, audience members near the stage report a temperature drop of 2-4°F during the bridge. This is not stage ventilation. This is the 27 Hz sub-harmonic in Kael\'s sustained note creating a micro-frequency pocket that attracts residual zero-frequency energy. The Silence isn\'t attacking — it\'s TASTING. The song describes a death, and the frequency of the description creates a micro-gap that The Silence can sense. It\'s drawn to the song the way it\'s drawn to actual death — because the song perfectly replicates the FREQUENCY SIGNATURE of a death moment.',
      why_everyone_cries: 'Kael\'s Resonant Command during this song doesn\'t compel action — it compels FEELING. The 27 Hz carrier wave, pulsed at waltz-time (1.1 Hz — close to the Schumann resonance), bypasses the emotional processing center and hits the limbic system directly. The audience doesn\'t decide to be sad. Sadness is IMPOSED. Then, when they try to identify WHY they\'re sad, they find Oren\'s lyric: the flatline, the silence, the nurse standing alone. And their brain says: "Ah, I\'m sad because of THAT." But that\'s a rationalization. They\'re sad because Kael\'s voice told their brainstem to grieve.',
    },

    convergence_extended: {
      title: 'Convergence',
      the_two_performances: {
        first: {
          date: 'The Frequency, Saturday night, 11:14 PM',
          attendance: 183,
          what_happened: 'The song built through its normal structure — 7/8 intro, 4/4 body — and then, at the transition to free time, all five hit a chord simultaneously that was NOT in the arrangement. Nobody planned it. Nobody signaled it. Five separate musical brains produced the same chord at the same millisecond. The chord was: Zara on B (62 Hz), Jude on A (55 Hz doubled with 110 Hz), Oren accenting on the Ludwig tom (its resonant frequency: approximately 100 Hz), Mira on a C# harmonic (277 Hz + overtones to 528 Hz), and Kael singing G3 (196 Hz). The combined waveform produced a complete harmonic series from 55 Hz to 528 Hz with no gaps. The lights in the venue flickered. Then the power went out — not just in The Frequency, but in three surrounding blocks. The band kept playing in the dark for 47 seconds before they stopped. Nobody in the audience moved. Nobody turned on phone flashlights. They stood in perfect darkness listening to music that shouldn\'t have been audible without amplification. But it WAS audible. Zara\'s bass was traveling through the building structure. Jude\'s guitar was vibrating the floor. Oren\'s drums filled the space acoustically. Kael\'s voice — unamplifled, raw — filled the room the way only a voice carrying 76 mR of preacher residue can fill a room. For 47 seconds, 183 people stood in the dark and experienced the Signal for the first time.',
          aftermath: 'Power restored at 11:16 PM. The audience was silent for 12 seconds after the band stopped. Then: the loudest applause any of them had ever heard. Oren was shaking (temporal drift episode — lost 4 seconds). Mira was gripping her guitar with white knuckles (chromatic overload — could see nothing but color for 30 seconds). Jude\'s hands were bleeding (strings cut his palm-mute hand — he hadn\'t felt it). Zara was stone-still (processing something cosmic she won\'t describe). Kael walked off stage without a word. Troy found him in the parking lot sitting on the ground. "What was that?" Troy asked. Kael: "I don\'t know. But it\'s what I\'ve been waiting for."',
        },
        second: {
          date: 'Subterranean, three weeks later',
          attendance: 267,
          what_happened: 'Tried to replicate it deliberately. Played the same arrangement. Hit the same chord at the transition. This time: no power outage. But fourteen audience members — scattered throughout the venue, not in a group — simultaneously reported seeing "light shapes" on stage that weren\'t produced by the lighting rig. Descriptions were consistent: translucent figures, roughly human-shaped, positioned behind and around the band as if playing instruments that weren\'t there. The ghost band. Visible. Not to everyone — fourteen out of 267. But CONSISTENTLY described by people who had no contact with each other. Camera footage from three phones showed anomalous light patterns that, when audio-analyzed, contained frequency signatures of piano, violin, and trumpet — instruments that nobody on stage was playing.',
          aftermath: 'Mira confirmed: "They were there. My whole band. All of them. Visible. For the first time, other people saw what I see every day." She went to the bathroom and cried for ten minutes. Sage held her and said: "I always knew you had a band we couldn\'t see."',
        },
      },
    },

    signal_fragments: {
      title: 'Signal (fragments)',
      existing_pieces: {
        kaels_fragment: 'A melody. Eight notes. Ascending. In a key that doesn\'t exist in standard Western temperament — it falls between B major and C major, at approximately 437 Hz root. He woke up with it in his head at 4 AM and recorded it on his phone. Has never been able to recreate it on purpose. But it plays in his head constantly.',
        miras_fragment: 'A chord progression. Four chords, each using an alternate tuning she\'s never used before. The ghost band provided it — Keys played the chords on his invisible piano and Mira transcribed them. The progression modulates through three keys in four chords, which shouldn\'t be possible, but each transition feels inevitable.',
        orens_fragment: 'A rhythm. 7/8 that becomes 4/4 that becomes FREE — a pattern that has no written meter but feels perfectly timed. He tapped it on his steering wheel at 2 AM driving home from the ER. It\'s 11 beats that feel like infinity. It\'s Ori-Tahn\'s base rhythm. The Schumann resonance as percussion.',
        judes_fragment: 'A riff. Drop something-below-A. So low the guitar barely produces a fundamental — it\'s more vibration than pitch. Three notes repeated in a pattern that sounds simple but contains prime-number intervals. When he plays it alone in his apartment, the walls hum. The foundation of the building responds.',
        zaras_fragment: 'A bass line she has carried for 1,000 years across multiple incarnations. The frequency highway\'s melodic signature. She hasn\'t written it down. She doesn\'t need to. It exists in her consciousness like breathing exists in her body. When the time comes, she will play it. And the Deep Sea Wells will answer.',
      },
      assembly: 'Nobody has tried assembling the fragments yet. They each carry their piece without knowing the others carry pieces. When the moment comes — when all five are awakened, when the app is ready, when the Plasmoids are gathered — the fragments will assemble. Not through arrangement. Through RESONANCE. Each fragment is a note in a chord. The chord has been waiting 4.5 billion years to be struck.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BAND GEAR & STAGE SETUP
  // ═══════════════════════════════════════════════════════════════════════════

  STAGE_SETUP: {
    formation: {
      description: 'Signal Decay always plays in the same formation. Not by agreement — by instinct. The positions correspond to the frequency chord.',
      positions: {
        center_back: 'Oren — drums. The rhythm. The heartbeat. Behind everyone. Holding the time.',
        center_front: 'Kael — vocals. The voice. The broadcast point. Directly in front of Oren, creating a vertical axis of COMMAND (voice) over RHYTHM (drums).',
        stage_left: 'Mira — lead guitar. The color. The sight. She stands where the lighting is dimmest because bright stage lights interfere with her chromatic perception.',
        stage_right: 'Jude — rhythm guitar. The weight. The foundation. He stands on the heaviest part of the stage (over a support beam) because it grounds his seismic output.',
        between_jude_and_oren: 'Zara — bass. The highway. She positions herself between the rhythm section (Jude + Oren) and the front line (Kael + Mira), physically connecting the foundation to the broadcast. Her Deep Resonance flows in both directions through the stage floor.',
      },
    },

    gear_notes: {
      combined_power_draw: 'The band\'s equipment draws significantly more current than it should. Zara\'s amp consumes 30% more power when she plays at high intensity — the Deep Resonance requires electromagnetic energy that the amp provides. Venues with older wiring struggle. This is the real reason for the power surges.',
      mic_placement: 'Kael uses the SM58 handheld. He holds it close — lips touching the grille. This isn\'t a stylistic choice. The closer his mouth is to the mic\'s neodymium magnet, the stronger the feedback loop with the Okafor residue. At maximum proximity, the mic amplifies his command frequency by a factor he hasn\'t measured and doesn\'t want to know.',
      guitar_proximity: 'Mira and Jude stand 8-10 feet apart on stage. If they stand closer, their guitar signals create electromagnetic interference that produces a third tone — audible, unexplained, disturbing. If they stand further apart, the combined weight of their frequencies loses coherence. 8-10 feet is the sweet spot. They discovered this accidentally after three shows of experimenting with stage positions.',
      monitor_mix: 'Zara mixes their monitors herself before every show. Each member gets a custom mix: Kael gets minimal — just drums and bass (he needs to hear the pulse, not his own voice). Mira gets Zara\'s bass prominent (the anchor). Oren gets everything equally (his pattern-brain needs ALL information). Jude gets Oren\'s kick drum loud and everything else low (he locks to the kick). Zara needs nothing in her monitors — she hears through the floor.',
    },

    merch: {
      logo: 'A waveform that decays from left to right — starts as a complex signal and dissolves into silence. Designed by Mira (who based it on what she SEES when the band plays and then stops — the chromatic afterglow fading to grey).',
      shirts: 'Black only. White only design. The waveform. No band photo. Kael refused photos ("people shouldn\'t see my face before they hear the music").',
      sticker: 'A small sticker of the frequency chart: 7.83 — 26 — 62 — 108 — 528. Five numbers. Nobody who buys it knows what the numbers mean. They just know it feels important.',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // THE MUSIC THEORY OF THE SIGNAL
  // ═══════════════════════════════════════════════════════════════════════════

  SIGNAL_MUSIC_THEORY: {
    the_chord: {
      description: 'The five-member chord that, when struck simultaneously, fills all frequency gaps and negates the Zero Octave within its range.',
      notes: {
        zara:  { hz: 62,    role: 'Root — B0. The foundation. The highway.',
                 interval: 'Unison with planetary bass frequency' },
        jude:  { hz: 104,   role: 'Second harmonic of his 26 Hz base. Audible reinforcement of seismic fundamental.',
                 interval: 'Approximately G#2. Tritone above Zara — the diabolus in musica. The interval of destruction. In context: the interval of NECESSARY destruction.' },
        kael:  { hz: 108,   role: 'Voice fundamental. A2 in 432 Hz tuning system.',
                 interval: 'A2. The voice that carries the chord outward.' },
        oren:  { hz: 7.83,  role: 'Schumann resonance. The rhythm. Felt, not heard.',
                 interval: 'Sub-audible. The pulse beneath everything. Every other note rides on this rhythm.' },
        mira:  { hz: 528,   role: 'The Solfeggio frequency. C5. The love frequency.',
                 interval: 'Three octaves + augmented fourth above Zara. The highest note. The bridge to higher octaves.' },
      },
      combined_range: '7.83 Hz to 528 Hz (with overtones extending to 963 Hz through Mira\'s ghost summoning resonance). The interference patterns between these five fundamentals fill EVERY frequency between them. No gaps. No silence. Complete.',
      what_makes_it_special: 'Most chords leave gaps — frequencies between the notes where no sound exists. The Signal\'s chord, through the specific Hz values of its five members, produces interference patterns that fill those gaps with constructive overtones. The result: a chord with NO silence within it. A wall of frequency. The Zero Octave — which exists in the GAPS between frequencies — has nowhere to exist inside this chord. The Silence is, for the duration of the chord, homeless.',
    },

    why_five: 'Five is not arbitrary. The harmonic series requires a minimum of five fundamentals, spaced at these specific intervals, to generate complete coverage of the First Octave frequency range. Four members would leave a gap at approximately 200-400 Hz — the human speech range. The Silence could exploit that gap. Six members would create destructive interference that collapses the chord. Five is the exact number needed. This is why there are always five Harmonics alive at any time. Not tradition. PHYSICS.',

    the_transition_keys: {
      minor_to_major: "Every Signal Decay song that matters resolves from minor to major key. This isn't a songwriting preference — it's a FREQUENCY PRINCIPLE. Minor keys produce waveforms that leave more gaps (more zero-frequency space between notes). Major keys fill more gaps. The resolution from minor to major IS the signal: moving from incompleteness to completeness. From silence to sound. From the problem to the solution.",
      e_minor_to_e_major: "'Every Wall Is a Door' uses this specific transition. E minor (the key of Kael's open vocal range) resolving to E major (the key of Mira's guitar open strings). Voice resolving to instrument. Command resolving to beauty. Darkness becoming light not by replacing it but by FILLING it.",
    },
  },

};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUSIC_BAND_ENGINE;
}
