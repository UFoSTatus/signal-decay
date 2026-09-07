// ============================================================================
// LOCATIONS ENGINE — Signal Decay
// ============================================================================
// Purpose: Comprehensive spatial intelligence for every location in the Signal
// Decay universe. Provides physical descriptions, sensory data, atmospheric
// variations, character associations, and frequency properties for story
// generation, immersive reader experience, and AI chat context.
//
// Usage: Import LOCATIONS_ENGINE, query by location id or type. Cross-reference
// with daily_life_engine.js for character-location intersections and
// character_engines.js for personality-space relationships.
//
// Canon Sources: THE_NIGHT_THEY_MEET.md, character full arcs, SUPPORTING_CAST_STORIES.md,
//                daily_life_engine.js, character_engines.js
//
// Last Updated: 2026-09-07
// Target: 80-110 KB (now ~141 KB after real-world sensory enhancement)
// ============================================================================
// ENHANCEMENT 2026-09-07 - REAL-WORLD SENSORY DETAIL (ADDITIVE ONLY)
// ----------------------------------------------------------------------------
// Added `sensory_realism_notes` and, for frequency/mechanical hotspots,
// `infrasound_notes` to major locations. All detail is grounded in the two
// research references (LOCATIONS_SENSORY_RESEARCH.md, URBAN_SPACES_SENSORY_RESEARCH.md):
// real dive-bar atmosphere (sticky floors, failing neon, ghost-of-cigarettes,
// the bathroom ecosystem), ER culture (fluorescent buzz, the "Devil's Tritone"
// of massed alarms, floor-bleach-and-cold-coffee night-shift smell), warehouse
// district (120Hz fluorescent hum, dock-threshold microweather, cardboard),
// plant/creative/minimalist apartment realism, demolition (you TASTE the dust,
// HAVS phantom vibration, transient "haunted" geometries), and Vic Tandy's
// infrasound research (18.98Hz standing waves, the eyeball's 18-19Hz resonance,
// elevated cortisol) as the scientific floor under the "tuning fork" concept.
// NO existing fields were removed or altered. Every addition is a NEW sibling
// key placed immediately after each location's existing `sensory` block.
// ============================================================================

const LOCATIONS_ENGINE = {

  // ==========================================================================
  // SECTION 1: THE BAR — "The Frequency"
  // ==========================================================================
  // The gravitational center of Signal Decay. Where all five are drawn.
  // Not just a venue — a tuning fork. A room that resonates at Earth's
  // base frequency. The container for the convergence.
  // ==========================================================================

  the_frequency: {
    meta: {
      id: "the_frequency",
      name: "The Frequency",
      official_name: "The Frequency — but the sign hasn't been fully legible in years. The Q flickers. Has flickered since 2021. Zara could fix it. She likes the heartbeat it gives the sign.",
      type: "venue",
      subtype: "live_music_venue",
      address: "2847 West Ashland Avenue",
      neighborhood: "West Town / Ukrainian Village border — a block that can't decide if it's gentrifying or decaying",
      capacity: 200,
      year_built: 1948,
      original_use: "Machine shop — industrial fabrication, metal work. The kind of business extinct in this neighborhood for forty years.",
      converted_year: 2003,
      owner: "Mick Brennan — still owns it but hasn't set foot inside in two years. Florida. Second wife. Bad back.",
      manager: "Keisha Park — handles booking and business. Leaves the sound to Zara because Zara is 'the best ear in this city and I'm not exaggerating even a little.'",
      sound_tech: "Zara Kovač — three years running. Built the room's sound from scratch.",
      story_significance: "The place where all five members of Signal Decay are drawn on the night they meet. Not by coincidence — by frequency. The room itself is a tuning fork, and something is about to strike it."
    },

    // -----------------------------------------------------------------------
    // THE EXTERIOR
    // -----------------------------------------------------------------------
    exterior: {
      building: "Red brick, painted over once in the '70s — ghost of old paint peeling in patches like the building is shedding a skin it outgrew. Low-slung, single story, industrial proportions. The roofline is flat with a slight pitch toward the back that channels rain into a downspout that plays a D# when it's raining hard enough.",
      awning: "Black canvas awning over the entrance, slightly frayed at the eastern edge. Absorbs streetlight and creates a pocket of shadow around the door that makes entering feel like stepping into something.",
      the_sign: "THE FREQUENCY in amber neon, hand-bent tubes, installed by Mick himself in 2004. The Q has a loose connection and flickers — three quick pulses, pause, three quick pulses. Like a heartbeat with an arrhythmia. The amber color is specific: 590nm wavelength. The exact color Kael sees in his dream of the building before he's ever been there. At night the sign casts a warm pool of light on the sidewalk that people unconsciously step INTO rather than around.",
      entrance: "Heavy black door. No handle on the outside — you push. This is deliberate (Mick's design, Keisha's maintenance). The lack of handle means you have to commit. You don't pull open The Frequency — you press into it. The door weighs approximately 80 pounds and swings on oiled hinges that make no sound.",
      parking: "Four spots out back. Gravel lot. A dumpster that Keisha has repainted twice (it keeps getting tagged). One security light on a pole that buzzes at 120Hz — the harmonic of the American electrical grid. Zara hears it every night and it's become her clock-in sound.",
      neighboring_buildings: {
        left: "Pho Saigon — Vietnamese restaurant, open until 2 AM, always steaming, always good. The steam from their kitchen vent drifts across The Frequency's back wall and makes the bricks smell like star anise and beef bone on cold nights. Owner is Mrs. Nguyen, who calls Zara 'the quiet one' and leaves a bowl of pho on the venue's back step on show nights.",
        right: "Former laundromat — FOR LEASE sign since 2024, nobody's biting. Windows still have the old SUDS-N-SPIN logo in faded vinyl. The space inside is empty and echoes. Sometimes Zara can hear the ghost of the washing machines through the shared wall — a rhythmic thudding at 1200 RPM that her alien senses pick up from the residual vibration embedded in the concrete.",
        across_street: "Three establishments: (1) Ruben's Tire Shop — open 7 to 7, radio always tuned to La Raza 93.5, the norteño music bleeding across the street and mixing with whatever's being sound-checked inside. (2) Lucky's Bodega — 24 hours, fluorescent-lit, a cat named Chairman who sits in the window and watches the venue door like a bouncer. The bodega sells exactly one brand of good coffee and seventeen brands of bad beer. (3) A three-story apartment building — yellow brick, one unit on the second floor that ALWAYS has its lights on. Every time Zara walks past after close-down at 1 AM, that light is on. She's never seen who lives there. She's stopped wondering."
      }
    },

    // -----------------------------------------------------------------------
    // THE INTERIOR — Complete Layout
    // -----------------------------------------------------------------------
    interior: {
      entry_hallway: {
        description: "Seven feet long. Matte black walls. Cracked concrete floor. Forces a CHOICE: left to bar, right to floor. Narrow enough for single-file only — entering is always a commitment.",
        sensory: {
          sound: "Muffled bass. Street noise to venue sound in seven feet — an airlock between worlds.",
          smell: "Stale beer, floor sealant, iron from the machine-shop bones. Ozone if you're Zara.",
          temperature: "3-4 degrees cooler than outside in summer, warmer in winter. Thermal buffer.",
          lighting: "Single amber-gelled fixture (Zara's first-week swap). Matches the sign. Continuity."
        }
      },

      the_bar: {
        description: "Runs along the entire left wall — thirty feet of scarred oak that Mick salvaged from a demolished church in Pilsen. Twelve stools, mismatched (eight are original, four were replaced after various incidents). The bar surface is carved with a decade of initials, band logos, phone numbers, and one very detailed drawing of a cat that nobody claims credit for.",
        bartender: {
          name: "Diego Reyes",
          age: 34,
          tenure: "Since 2019. Five years. Knows everyone.",
          description: "Mexican-American, stocky, forearms like bridge cables from years of lifting kegs and breaking up arguments. Shaved head. Gold chain (patron saint — his grandmother insisted). Sleeve tattoo on the left arm: music-themed, ending at the wrist with a treble clef that peeks out from under his watch.",
          personality: "Knows everyone's drink before they order it. Reads the room better than most therapists. Has a rule: if you're crying at his bar, the next drink is free but you have to tell him what's wrong. Surprisingly good at advice. Terrible at following his own.",
          bartending_style: "Fast, efficient, no flourish. Pours draft beers with a one-hand tilt that wastes zero foam. Memorizes drink orders after one visit. Has been known to cut people off with nothing more than a look.",
          knows_about_the_band: "Nothing supernatural. But he noticed the night they all came in — noticed the way the room changed when all five were present. 'The air got thicker. Like before a storm. I've worked concerts with 200 people screaming and it never felt like that. Five strangers standing in different parts of the room and the whole place went electric.'"
        },
        back_bar: "Three tiers of bottles against a silvered mirror. Three local drafts rotating. A pink neon DRINKS sign (Mick's wife picked it, wife left, sign stayed). Pegboard of Polaroids — two thousand photos, five years of bands.",
        draft_system: "Six-tap tower. Three active, three rotating.",
        stools: "Twelve. Oak and cast iron. Two wobble (4 and 9). Stool 1: where Diego puts regulars he's worried about."
      },

      the_floor: {
        description: "Two hundred capacity standing. Concrete with failed sealant — the specific venue stickiness of beer and time. Shoes make a tearing sound when you shift weight.",
        acoustics: "Natural resonant frequency: D#2 — 77.78 Hz. Zara found it her first week testing the PA. The room SINGS when you find its note.",
        dead_spots: "250Hz by left speakers (phase cancellation). 1kHz center-right (guitars thin there). Zara compensates.",
        sweet_spot: "Dead center, fifteen feet from stage. Sound wraps around you. Zara's north star.",
        floor_stains: "Diego's catalogue: (1) Wine stain shaped like Australia — 2020 poet. (2) Perfect-circle scuff — 2022 dancer. (3) Something that might be blood near the back wall. Persists.",
        ceiling: "Exposed I-beams from the original machine shop, painted black. Ductwork visible. Ceiling height: fourteen feet — unusual for the building's era, but the original fabrication work required clearance for industrial equipment. This height is part of why the acoustics work — the cubic volume of air gives the sound room to develop before it hits a surface.",
        walls: "Brick on three sides (left, right, back), black-painted drywall on the stage wall. The brick absorbs high frequencies and reflects lows, which gives the room a naturally warm sound. Old machine shop bolts still protrude from the left wall at irregular intervals — Keisha hung plants from them once, they all died from the beer atmosphere within a month."
      },

      the_stage: {
        description: "Eighteen inches elevated. Twenty feet wide, twelve feet deep. Black plywood decking that's been replaced twice (Mick, 2008; Keisha, 2021). The current surface has a satisfying give when you step on it — not bouncy, but alive. You can feel the hollow space beneath.",
        drum_riser: "Six-inch platform, four feet by four feet, at the back of the stage. Covered in the same black plywood. The left rear leg has a shim made from a folded beer coaster — Oren will notice this immediately and find it weirdly endearing.",
        stage_left: "A half-stack amp that belongs to the venue — a Marshall JCM800 2203 that Mick bought in 2004 and that has been the workhorse of ten thousand local bands. The tubes have been replaced six times. The speaker cabinet has a tear in the grille cloth that Diego patched with gaffer tape. It still sounds incredible.",
        stage_right: "A bass rig: Ampeg SVT Classic head on an Ampeg 8x10 cabinet. Zara's choice. She spec'd it, Keisha approved the budget, and it arrived three months before Zara started working here. (Zara doesn't question the timing. Zara doesn't question any of the things that seem to have been placed in her path.) The SVT is warm, round, enormous. When it's cranked, you feel the bass in your sternum.",
        center_stage: "Mic stand. Chrome, telescoping, weighted base. A single SM58 that Diego calls 'Old Faithful' because it's been dropped, kicked, thrown, and rained on and still works perfectly. A small strip of gaffer tape on the base marks the exact position where Kael will stand without knowing why it feels right.",
        stage_lights: "On a manual dimmer board behind the mixing position. No computer control, no DMX — just six channels of PAR cans and two followspots that haven't been used since 2022. The PAR cans have colored gels: amber (channels 1-2), red (channels 3-4), blue (channels 5-6). Zara built the light design herself — simple, warm, effective. The amber wash is her default because it matches the sign. Continuity.",
        monitors: "QSC K12.2 powered monitors — one at each corner of the stage, one at the drum riser. Twelve-inch woofers. Zara runs them hot because she likes the musicians to feel the mix in their bodies, not just their ears. The monitor at drum position is angled up slightly — a detail she'll adjust for Oren without being asked.",
        backstage_wall: "Covered in band stickers, show posters, and a single framed photo of Mick on opening night, 2003, grinning with a hammer in one hand and a beer in the other. Under the photo, written in Sharpie: 'Every good room starts with a first note. —M.B.'"
      },

      mixing_position: {
        description: "Back center, raised eight inches. Zara's cockpit.",
        console: "Yamaha TF3 — digital, 48 channels (Mick's gear-midlife-crisis purchase). Zara loves it possessively.",
        outboard: "Two dbx 166 compressors. Lexicon MX300 reverb (1.8s decay, slightly dark). Her personal EQ rack — bought with own money, bolted to the table.",
        monitors_at_mix: "JBL 305P reference pair on isolation pads.",
        zara_personal_touches: "USB fan. Pho Saigon coaster. Green pen for set lists. A sticker: BASS IS NOT A SUGGESTION — origin unknown, kept.",
        sightlines: "Full view of stage, floor, bar. Signal system with Diego: two fingers = 'going loud'; fist = 'problem'; thumbs up = 'good.'"
      },

      green_room: {
        description: "A closet. Eight by six feet. Brown pleather couch (seats three barely). Mini-fridge: PBR and water. Mirror with three of twelve vanity lights still working.",
        the_sign: "Sharpie on cardstock: DON'T LEAVE YOUR SHIT. WE WILL THROW IT AWAY. — Z. Enforced twice. Both times: drumsticks. Zero hesitation.",
        walls: "Cinder block, grey. Covered in band signatures. One says: 'The Frequency saved my life — J.M., 2020.' Nobody knows J.M.",
        smell: "Sweat, PBR, nervous musicians. Underneath: concrete. The building's bones.",
        what_bands_do_here: "Wait. Pace. Tune. Argue about the set list. Wonder if tonight changes everything. (It never does. Until it does.)"
      },

      bathrooms: {
        description: "Two single-stall rooms in the back hallway. One marked with a star, one with a moon — Mick thought gendered symbols were cooler than M/F. The hallway between them is four feet wide, lit by a single bulb that Zara has replaced nine times because the vibration from the PA keeps loosening it.",
        star_bathroom: "Has an electrical outlet that bands use to charge phones during sets. The toilet runs if you don't jiggle the handle. Graffiti on the inside of the door: an entire conversation between two unknown people conducted over what appears to be several months, debating whether Tool is overrated. (The consensus: Tool is exactly rated.)",
        moon_bathroom: "The lock is broken and you have to hold the door shut from inside. A piece of gaffer tape labeled 'HOLD DOOR — LOCK BROKEN — SORRY' has been there for two years. The mirror is intact but tilted slightly left, making everyone who looks at it feel subtly off-balance. Zara suspects this is not an accident but can't prove it.",
        shared_features: "Both have industrial soap dispensers (pink soap, smells like nothing), automatic paper towel dispensers (one works, one doesn't), and floors that are inexplicably wetter than any other surface in the building at all times."
      }
    },

    // -----------------------------------------------------------------------
    // CHARACTER GRAVITATIONAL POINTS — Where Each Person Goes in The Frequency
    // -----------------------------------------------------------------------
    character_spots: {
      kael: "Back wall, stage left. Leans against the brick between two old machine-shop bolts. From here he can see the stage, the bar, and both exits. He doesn't choose this spot consciously — his body just takes him there. The wall is cool against his back. He can feel the bass through the brick. When the band starts playing, his chest resonates with the low frequencies traveling through the wall and he has to concentrate not to hum along.",
      mira: "Near the mixing position, slightly to the right. She gravitates to where the sound is most controlled — where Zara's careful mix turns chaos into architecture. Also: from this position, the stage lights don't blind her, which means the chromatic sight isn't overwhelmed by the visual noise of the light show. She can see the REAL light — the frequency light — without competition.",
      jude: "Near the stage, stage right, close to the bass cabinet. He wants to FEEL it. The Ampeg 8x10 puts out physical bass pressure that hits his body like a warm hand on his chest. He stands with his feet shoulder-width apart, weight even, like a man bracing for something. The floor vibrations travel up through his boots and into the place where Seismic Lock lives, and it feels like being fed.",
      oren: "Roaming. He doesn't stay in one place. He moves through the room — bar to floor to mixing position to bar — because standing still means the time-drift catches him. Movement keeps him in the present. But he always ends up near the drum riser. Always. Standing below it, looking up at whoever's behind the kit, his hands unconsciously tapping the rhythm on his thigh.",
      zara: "At the board. Always. Even when she's not working — even when another tech could run the show — she positions herself at or near the mixing position. It's her cockpit. Her throne. The one place on Earth where her alien senses are an asset, not a liability. From here she can hear every frequency in the room, adjust in real-time, and feel the building respond. She IS the room's nervous system."
    },

    // -----------------------------------------------------------------------
    // THE BOOTH — Where History Happens
    // -----------------------------------------------------------------------
    the_booth: {
      description: "A single booth in the back-right corner. Four-top. Red vinyl seats, cracked and patched with gaffer tape. The table is a slab of reclaimed wood that Mick sanded but never sealed, so it absorbs everything — beer rings, pen marks, the oil from a thousand resting elbows. This booth has the worst sightline to the stage (the column at the edge of the bar partially blocks the view) but the best SOUND. It sits at the intersection of two reflective surfaces (back wall brick and side wall concrete) that create a natural acoustic focus. Whatever's on stage sounds better here than anywhere else in the room.",
      significance: "This is where Signal Decay will sit together for the first time after the night they meet. Not planned. They'll drift to it independently over several visits, each discovering that this corner SOUNDS right, FEELS right. By the third week, Diego will start keeping it open for them without being asked. He won't know why. He'll just know: that booth belongs to them.",
      regular_patrons_who_also_love_it: "A retired jazz guitarist named Leonard who comes every Wednesday for open mic and has claimed the booth since 2019. He'll cede it to the band without being asked — will simply stop coming on the nights they're there, as if he senses the space has been reassigned by something larger than preference."
    },

    // -----------------------------------------------------------------------
    // SENSORY DATA — For Story Generation
    // -----------------------------------------------------------------------
    sensory: {
      ambient_sounds: [
        "Ice in glasses behind the bar — a constant, arrhythmic chiming",
        "Diego's pour — the specific glug-and-hiss of draft beer hitting a tilted glass",
        "The floor sticking to shoes — that slight tearing sound of soles on sealed concrete",
        "The Q in the neon sign flickering — barely audible buzz-pop-buzz-pop from outside",
        "The Pho Saigon kitchen through the left wall — a distant clatter of woks and steam",
        "The HVAC system — a low drone at approximately 120Hz that Zara has EQ'd around",
        "Between bands: the murmur of 150 people, layered conversations creating a specific frequency soup at around 300Hz that sounds, to Mira, like a warm golden haze"
      ],
      dominant_colors: [
        "Amber — the sign, the stage lights, the bar's warm wood, the beer in glasses",
        "Black — the walls, the ceiling, the stage, the hallway",
        "Brick red — exposed walls, the warm undertone of everything",
        "Pink — the DRINKS sign behind the bar, a single point of contrast",
        "Steel grey — the I-beams overhead, the industrial bones"
      ],
      temperature_feel: "Warm. Always warmer than outside, even in summer. Two hundred bodies and a PA system generate heat. The venue breathes — cooler near the floor (concrete), warmer at head height (bodies and lights), coolest in the green room (cinder block), hottest at the mixing position (electronics). Zara's USB fan is not a luxury.",
      smell_notes: [
        "Stale beer — the base note. Always present. Embedded in every surface.",
        "Fresh sweat — especially near the stage, especially during the second band's set",
        "Iron — the old machine-shop bones sweating through the walls, metallic and ancient",
        "Pho — star anise and beef bone drifting through the left wall from Mrs. Nguyen's kitchen",
        "Ozone — the electrical system running hot, noticeable only to Zara and sometimes to Mira",
        "PBR — sharper than the general beer smell, concentrated near the bar taps",
        "Rain — when it rains, the back door seal leaks and the venue gets a petrichor overlay that transforms the whole atmosphere"
      ],
      time_of_day_variations: {
        morning: {
          hours: "8 AM - 12 PM",
          state: "Closed. Silent. Dark. The room at its most honest. HVAC cycles on at 10. The 7.83Hz Schumann resonance is most noticeable now.",
          lighting: "None. Amber neon sign glow through the hallway only.",
          frequency_activity: "LOW. Natural D#2 resonance without interference."
        },
        afternoon: {
          hours: "12 PM - 5 PM",
          state: "Keisha in the office. Deliveries. Diego mops. No magic under work fluorescents.",
          lighting: "Harsh fluorescents. Repurposed industrial space exposed.",
          frequency_activity: "LOW. Building stores energy. Residual frequency from last night dissipating."
        },
        sound_check: {
          hours: "5 PM - 7 PM (show days)",
          state: "The room wakes. Zara's calibration: 1kHz sine wave, then instruments. Temperature rises. Air thickens. The building remembers what it's for.",
          lighting: "Amber wash. Industrial space becomes vessel.",
          frequency_activity: "RISING. D#2 interacts with whatever key the bands play. Hit a D# on bass and the whole room RINGS."
        },
        show_time: {
          hours: "8 PM - 12 AM",
          state: "Full capacity. Two hundred bodies generating heat, frequency, emotion. Diego in constant motion. Zara at the board processing every frequency simultaneously. What the building was BUILT for.",
          lighting: "Amber/red primaries, blue for ballads. Mixing position dark. Pink DRINKS sign. Polaroid wall glows.",
          frequency_activity: "HIGH. Zara manages like air traffic control. On the night Signal Decay first plays together, activity exceeds anything the building has ever contained."
        },
        after_close: {
          hours: "12 AM - 2 AM",
          state: "Room empties. Silence is RINGING. Zara powers down PA in reverse order, coils cables. Diego cleans. Last two in the building. They don't talk much.",
          lighting: "House lights — bright, unflattering, honest.",
          frequency_activity: "DECLINING. Walls retain frequency for up to an hour. The building processes the evening's sound slowly."
        }
      }
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in real dive-bar / small-venue accounts (LOCATIONS_SENSORY_RESEARCH.md, URBAN_SPACES_SENSORY_RESEARCH.md)
      the_sticky_floor: "The concrete never fully cleans. A decade of spilled beer has soaked into the failed sealant and the pores of the slab. Every step produces a faint tack-and-release - the sole adhering for a half-second, then tearing free. On a busy night the whole floor whispers with it, two hundred people peeling their shoes off the ground in overlapping rhythm. Diego mops with lemon cleaner that never wins; by 11 PM the lemon has surrendered back to beer.",
      the_bar_top_tack: "The scarred oak is sealed but the seal is old. Rest your forearm on it and it comes away with a faint stickiness - dried liquor, condensation rings, the ghost of a thousand pours. Wet napkins leave fibrous ghosts Diego scrapes with a thumbnail. The brass foot rail is the cleanest thing you will touch all night - cool, worn smooth, the one surface that stays honest.",
      neon_as_light_source: "Dive-bar light is warm and failing - 2200-2700K, the color temperature of a room that has given up on flattering anyone and somehow flatters everyone. The amber sign and pink DRINKS neon do not blaze; they glow weakly and unevenly, throwing pink-red and amber washes that hide imperfections and make strangers look slightly better than they are. The one cold-white light in the building is the bathroom fluorescent, and under it everyone looks terrible. Nobody wants to fix this.",
      the_ghost_of_cigarettes: "Illinois went smoke-free in 2008 but the tar never left. It lives in the ceiling, in the foam of the two booth cushions by the back wall, in the grout. On humid nights - August, or when the back-door seal leaks rain - it blooms back out of the walls, a faint stale-tobacco undertone under the beer. Regulars stopped smelling it years ago. Newcomers catch it on the second breath.",
      the_bathroom_ecosystem: "Single stall, hook-and-eye latch that never quite lines up. One bare fluorescent tube - the harshest, coldest light in the building. Sharpie latrinalia layered years deep: band names, phone numbers, a running argument in three pens, one genuinely good haiku. The floor is always faintly wet and you learn not to ask why. Pink industrial hand soap from a wall dispenser, and under it the failing sweetness of a urinal cake you catch from the hallway when the door swings.",
      the_stage_intimacy: "At 200-cap the front row is close enough to hand the singer a beer. Sweat from the stage genuinely lands on the first two rows during the second band's set. Eye contact is unavoidable - nowhere for a performer to hide, no darkness to disappear into. Kael, who has spent his whole life disappearing, will feel this like a physical pressure the first time he steps up.",
      the_temperature_swing: "Never comfortable - too cold when the crowd is thin and the back door is propped, too hot once two hundred bodies and the PA generate heat. Patrons keep their jackets on all night or strip to a t-shirt by the second band. No in-between.",
      the_door_airlock: "The seven-foot entry hallway is a genuine acoustic airlock - the crowd-roar drops and swells as the front door opens and closes, a burst of street noise and cold air, then the seal. Regulars unconsciously time their entrances to the gaps between songs."
    },

    infrasound_notes: {
      // ADDED 2026-09-07 - the science under the "tuning fork" (Vic Tandy 18.98Hz, 1998; MacEwan 2026 cortisol study; NASA 1977 eyeball resonance)
      overview: "The Frequency's supernatural charge has a real-world floor under it. A converted 1948 machine shop: high cubic volume, hard parallel brick walls, aging HVAC, a basement mechanical run. That is a textbook infrasound generator. Long before anything supernatural is invoked, this room is physiologically capable of making people feel watched, uneasy, or moved - because pressure below 20Hz acts on the body directly.",
      the_hvac_standing_wave: "The HVAC drone Zara EQ'd around at ~120Hz carries a subharmonic the console never shows her - a slow pressure oscillation in the 17-19Hz band from a slightly imbalanced basement return fan. It pools strongest at the back of the room, near the mixing position. This is squarely in the range documented to raise salivary cortisol and produce a sense of unease and 'presence' in people who cannot name any cause. Zara feels it as a low body-hum she has never questioned. New bartenders sometimes say the back of the room 'feels off' during load-in and can't say why.",
      the_eyeball_frequency: "18-19Hz sits near the resonant frequency of the human eyeball. When the return fan runs hard on a cold night, patrons standing dead-center-back occasionally catch a grey smear at the edge of vision that vanishes when they turn to look - central vision doesn't smear, so the figure cannot survive a direct stare. Here it reads as a ghost, or as the room's magic. The mechanism is a trembling eye and a threat-detection brain doing exactly what it evolved to do with the wrong input.",
      why_it_matters_here: "The honest hinge of Signal Decay: the dread is real, the presence is real, the chill is real - measurable, physiological, reproducible. What's false is only the first explanation the mind reaches for. The Frequency amplifies where other buildings attenuate; infrasound is the physics that lets the room feel haunted before it ever earns the word.",
      who_registers_it: "Zara (lifelong, unquestioned body-hum). Mira sees it as a slow indigo pulse low against the back wall on cold nights. Kael feels it as directional pressure in the sternum. Oren, attuned to the ABSENCE of expected patterns, notices the nights it is NOT running more than the nights it is."
    },

    // -----------------------------------------------------------------------
    // FREQUENCY PROPERTIES — The Room's Secret
    // -----------------------------------------------------------------------
    frequency_properties: {
      natural_resonant_frequency: "D#2 — 77.78 Hz",
      schumann_resonance_activity: "The room vibrates at 7.83Hz (Earth's base electromagnetic frequency) unprovoked. Nothing plugged in, nothing turned on — the room hums. Zara noticed it on a Thursday maintenance day and put her hand on the wall and felt it like a heartbeat.",
      notch_filter_anomaly: "On a Monday before the night they meet, Zara's mixing board had a notch filter active at 7.83Hz that she NEVER programmed. It appeared overnight. She reset it. It hasn't returned — but the fact that the board responded to the building's frequency autonomously suggests the room's resonance is stronger than passive.",
      acoustic_geometry: "Ceiling height (14ft) + concrete floor + brick walls + wooden stage = a box that RESONATES. The cubic volume creates standing waves at specific frequencies. The room's geometry is acoustically ideal not by design but by the coincidence of industrial architecture and musical repurposing. Or not coincidence at all.",
      the_frequency_hypothesis: "Zara has worked at The Frequency for three years and has always assumed the acoustics were math — ceiling height, floor material, wall angles. After the night all five are present, she's no longer sure it's just math. The room might be a tuning fork. And something is about to strike it."
    },

    // -----------------------------------------------------------------------
    // REGULAR PATRONS
    // -----------------------------------------------------------------------
    regular_patrons: [
      { name: "Leonard Oaks", description: "Retired jazz guitarist, 68. Wednesday open mic. Bourbon neat, three hours. One song — always different, always beautiful. A Dormant One whose playing makes Diego stop pouring but never fully BLOOMS." },
      { name: "The Wednesday Poets", description: "3-5 spoken word artists. Led by Destiny, who performs with closed eyes. Frequency-adjacent — emotional weight bordering on supernatural." },
      { name: "The Wonderwall Guy", description: "Monday open mic. 'Wonderwall.' Unironically. Every week. Diego bets on when he'll learn a second song. Odds: never." }
    ]
  },

  // ==========================================================================
  // SECTION 2: CHARACTER-LINKED SPACES — Homes
  // ==========================================================================

  // --------------------------------------------------------------------------
  // KAEL'S APARTMENT
  // --------------------------------------------------------------------------
  kael_apartment: {
    meta: {
      id: "kael_apartment",
      name: "Kael's Apartment",
      type: "home",
      address: "Studio apartment, exact location undisclosed — city location, Chicago",
      neighborhood: "Working-class block. Probably Logan Square or Humboldt Park. A building with a buzzer that doesn't work and a landlord who responds to texts three days late.",
      character: "kael",
      rent: "Affordable. Not cheap — just the kind of cheap that a night-shift warehouse worker can sustain without a roommate if he doesn't eat out and doesn't buy things.",
      story_significance: "The lockbox. The container. Where Kael's smallness is most controlled and most comfortable. Every surface in this apartment is a choice NOT to expand."
    },

    layout: {
      overview: "Studio. One room that serves as bedroom, living room, and kitchen. Approximately 400 square feet. Hardwood floors, old and scarred. One window facing east — the sunrise side, which he sees every morning coming home from work and which he blocks with blackout curtains because daylight is for sleeping.",
      kitchen: "Galley-style along one wall. A counter barely big enough for a cutting board, a stovetop with two burners (one works), a microwave, a mini-fridge that hums at a frequency Kael has unconsciously tuned out but that visitors notice. A single cabinet holds: coffee (good beans — the one food indulgence), a box of cereal (always off-brand, always corn-based), a mug that says WORLD'S OKAYEST (the rest has chipped off — could be 'okayest' anything: brother, worker, human). Instant coffee for work days. French press for off days — bought at Goodwill, works perfectly, produces the only ritual he protects.",
      sleeping_area: "Mattress on a frame. Not the floor — he has a frame. But no headboard. White sheets, dark grey comforter. One pillow. Blackout curtains — heavy, industrial, hung from a tension rod that's slightly too long for the window, so one side sags. The curtains turn day into night. Essential for someone who sleeps 9 AM to 5 PM.",
      living_area: "One chair. A good chair — the only piece of furniture he chose with intention. A deep-seated armchair from a thrift store, dark green corduroy, slightly worn on the right armrest where he rests his hand. This chair is where Kael listens to music. Full albums, start to finish, on off days. The French press on the side table. The one lamp on. Nothing else.",
      bookshelf: "One. Not large. Contains: Hanif Abdurraqib essays (dog-eared, annotated in pencil), Frank Ocean vinyl (does not own a record player — bought it because the object mattered), three library books he's forgotten to return, a notebook he writes in but never shows anyone, and a photo of Elena at her college orientation looking triumphant.",
      bathroom: "Small. Functional. The shower runs hot for exactly seven minutes before going lukewarm. He's timed it. A single towel hook. A mirror he doesn't look at more than necessary."
    },

    what_it_reveals: "The physical manifestation of restraint. Minimal not from aesthetics but PRACTICE — living small because wanting means the voice might reach. Bare walls = containment. The one exception: the green chair, French press, and album ritual. That's where the real Kael lives.",

    sensory: {
      ambient_sounds: [
        "The mini-fridge hum — constant, mechanical, oddly comforting",
        "Street noise through the blackout curtains — muffled, distant, like hearing the world from underwater",
        "The building settling — old wood expanding and contracting",
        "Kael's breathing — in the silence, it's the loudest sound. He's aware of it.",
        "Spotify on low through a phone speaker — ambient playlists for sleeping, specific albums for the chair"
      ],
      dominant_colors: [
        "Grey — the comforter, the walls (unpainted, just drywall primer)",
        "Dark green — the chair, the one anchor of color",
        "White — sheets, ceiling, the fridge",
        "Amber — the one lamp, warm-toned, casting the room in the same frequency as The Frequency's sign"
      ],
      temperature_feel: "Cool. He keeps the thermostat low — partly economics, partly preference. The apartment is always slightly cooler than comfortable, which means the comforter and the chair are warmth sources. Warmth must be sought, not ambient. This maps to everything about Kael.",
      smell_notes: [
        "Coffee — the dominant note. Always. Whether fresh-brewed or residual.",
        "Clean laundry — he does it religiously. The one domestic discipline.",
        "Nothing else. The absence of smell IS a smell. The apartment smells like CLEAN NOTHING, which is unusual for a 24-year-old man's apartment and reflects his control.",
        "When he comes home from work: warehouse smell — cardboard, conveyor belt oil, the metallic tang of the loading dock — clinging to his clothes and fading by the time he showers."
      ],
      time_of_day_variations: {
        morning_return: "6:30 AM. Cool, dark, waiting. Cereal at the counter. Watches sunrise through the curtain gap, then closes it. Showers. Bed.",
        deep_sleep: "10 AM - 4 PM. Tomb-like. Fridge hums. Curtains hold. Phone silent under the pillow.",
        waking: "5 PM. Alarm. 90-second morning — shower, coffee, toast, dress.",
        off_day_afternoon: "2 PM. French press. The chair. Full album. The apartment becomes a listening room.",
        off_day_night: "9 PM - 2 AM. Most alive. Floor-sitting. Voice memos of sounds outside. His in a way daytime isn't."
      }
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in warehouse-worker economics and studio-apartment acoustics (LOCATIONS_SENSORY_RESEARCH.md sec 7C)
      the_affordable_studio_reality: "This is what a night-shift warehouse wage buys in Chicago without a roommate: a small older studio, second or third floor, no dishwasher, radiator or baseboard heat he doesn't fully control, single-pane windows that let the street in. The rent is sustainable only because he doesn't eat out and doesn't buy things. Every economy in this room is a decision, not a hardship he resents.",
      single_pane_sound_bleed: "Through the single-pane east window the world arrives muffled but present - a neighbor's TV laugh-track through the wall, footsteps overhead landing on his ceiling, the hot-water pipes knocking when someone two floors down runs a shower. He has learned the building's sound schedule the way he learned the warehouse conveyor's: it is a timetable his body reads without asking.",
      the_blackout_dark: "The blackout curtains do real work - they turn 2 PM into a convincing midnight so a man who sleeps 10 AM to 4 PM can sleep at all. The seal is imperfect: one side sags off the too-long tension rod, and a single blade of daylight lands across the floor and tracks slowly toward the bed as the afternoon turns. He wakes when it reaches his face. He has never fixed the rod. The blade is a clock he trusts.",
      the_clean_nothing_smell: "Most 24-year-old men's studios have a smell. His has the deliberate absence of one - clean laundry and good coffee over scrubbed neutrality. The absence is the tell. A man controlling his voice controls his air too; nothing is allowed to accumulate, because accumulation is a form of wanting.",
      warehouse_on_the_clothes: "When he comes home at 6:30 the shift comes with him - cardboard, conveyor-belt oil, the metallic tang of the loading dock threaded into the cotton. It fades by the time he showers. For twenty minutes the studio smells like the one place his voice is safely drowned, and then it smells like nothing again."
    }
  },

  // --------------------------------------------------------------------------
  // MIRA'S APARTMENT
  // --------------------------------------------------------------------------
  mira_apartment: {
    meta: {
      id: "mira_apartment",
      name: "Mira's Apartment",
      type: "home",
      address: "Studio apartment, Lincoln Square area, Chicago",
      neighborhood: "Lincoln Square — residential, tree-lined, a mix of families and young professionals. Close to the Western Brown Line stop. Walkable to the coffee shops where she grades student exercises and the thrift stores where she finds guitar pedals.",
      character: "mira",
      story_significance: "The haunted house. Not because ghosts are HERE — because ghosts are ALWAYS here. This is where Mira lives with her visible dead. Every room has entities. Every corner has color. The apartment is beautiful and terrifying simultaneously, like Mira herself."
    },

    layout: {
      overview: "Studio, slightly larger than Kael's — maybe 500 square feet. Old building, high ceilings (10 ft), hardwood floors that creak in specific spots. One large window facing south, which means good natural light that Mira both needs (for painting) and can't fully tolerate (the chromatic sight is worse in bright light). Result: blackout curtains that she opens selectively, creating controlled shafts of light that she maneuvers around like obstacles.",
      the_teaching_corner: "A section near the window with two chairs (one for her, one for the student), a music stand, her teaching amp (a small Fender Frontman 10G — nothing fancy, purely functional), and a side table with her lesson planner, a mug of green tea that's always going cold, and a small bowl of guitar picks in various gauges. This is where she gives lessons. Students sit facing the window; Mira sits with her back to it, which means the entities that cluster near the bookshelf are behind her students. They don't know they're being watched by dead musicians.",
      bed_area: "Against the far wall. A full-size mattress on a low platform frame. Dark sheets — she cycles between navy and black. A weighted blanket (15 lbs — helps with the anxiety, helps pin her to the present when the entities are active). String lights along the wall above the bed — warm white LEDs that she keeps on 24/7 because darkness plus entities equals terror.",
      kitchen_area: "Open to the main room. Small. A kettle, a single pot, a pan. She doesn't cook much — eats cereal, toast, takeout, whatever Sage brings over. The kitchen counter is perpetually covered in things that aren't food: paint tubes, guitar strings still in packaging, a half-empty bag of cat treats for Hendrix, an open notebook with lyrics/ideas scrawled in three colors of pen.",
      the_closet: "Locked. Always. This is where the paintings live. Canvases she's bought specifically because they're too large to accidentally display — 24x36, 30x40. Paintings of what she sees. The entities. The color fields. The shapes in corners. A visual record of the Second Octave that nobody has ever seen except Sage (once, briefly, under controlled conditions). The painting of her grandmother — titled 家人 (jiā rén) — is in there too. Face-down."
    },

    what_it_reveals: "Organized chaos with invisible architecture. Looks cluttered — but objects on surfaces reduce 'perching space' for entities. She learned at 16 that they settle on empty surfaces. The clutter isn't mess. It's fortification against things only she can see.",

    entity_activity: {
      permanent_residents: [
        "Keys — the jazz pianist. Gravitates to the corner near the bookshelf. Mira can feel his presence as a cold spot approximately 3 feet in diameter. He hums. The hum has pattern.",
        "The Roadie — the dead sound tech. Stays near her pedalboard. Adjusts things. She'll find her effect chain rearranged in the morning — distortion before reverb, or reverb before distortion. He's solving a puzzle she hasn't posed."
      ],
      visitors: "Variable. On quiet nights: 3-5 ambient entities, formless, drifting. On nights before something important: 20-30, pressing close, buzzing, excited. The night before they meet at The Frequency: more entities than she's ever seen at once. The apartment temperature drops 8 degrees.",
      cold_spots: "Permanent cold spot by the bookshelf (Keys). Intermittent cold spot near the front door (entities come and go). A cold band across the ceiling that Mira doesn't understand — she's hung fabric to mask it but the cold persists."
    },

    sensory: {
      ambient_sounds: [
        "String lights buzzing faintly — a high, thin frequency only she and possibly Hendrix can hear",
        "Hendrix purring — the cat's purr at 25-50 Hz promotes bone density. Also seems to calm the entities.",
        "The building's old pipes — a periodic clank-and-whistle that Mira has nicknamed 'the heating ghost' (it's not a ghost; it's just pipes)",
        "Entity sounds — phantom piano notes from Keys, faint and spectral. Amp adjustments from The Roadie — clicks and pops from the pedalboard. Neither sound has a physical source.",
        "Guitar — when she practices at night, the entities harmonize. Her single guitar produces the sound of three. The recordings she sends Sage at 3 AM contain instruments that aren't there."
      ],
      dominant_colors: [
        "Warm white — string lights, the dominant illumination",
        "Deep burgundy — her hair dye, the throw blanket on the bed, the wine Sage brings",
        "Olive green — the army jacket draped over the chair, thrift store finds",
        "Silver — the rings on her fingers catching light",
        "The chromatic layer — to Mira, the apartment is ALWAYS overlaid with color. Sound-color. Entity-color. The walls pulse with a faint indigo during silence. Keys produces spectral green-gold. The Roadie is a dull orange."
      ],
      temperature_feel: "Cold. Unusually cold for a building with functional heating. The entity activity suppresses ambient temperature. Visitors notice. Sage brings a hoodie. The weighted blanket is not just for anxiety — it's for warmth.",
      smell_notes: [
        "Paint — acrylic and watercolor. Always. Even when she hasn't painted in days, the residue is in the air.",
        "Green tea — the kettle runs three times a day minimum",
        "Cat — Hendrix has a specific warm-fur smell that is one of Mira's few comfort anchors",
        "Cold — the entity cold has a smell. Or rather: an absence of smell. Where the cold spots are, the air smells like NOTHING. Scrubbed clean. Antiseptic absence.",
        "Marijuana — faint, intermittent. She uses it medicinally to dull the chromatic sight by approximately 30%. Sage knows. Her parents don't."
      ],
      time_of_day_variations: {
        morning: "Bright. Chromatic sight INTENSE — every dust mote in sunlight produces micro-bursts of golden frequency-color.",
        lesson_time: "Afternoon. Entities retreat when students arrive. Mostly. Keys sometimes plays over lessons.",
        evening_alone: "Entities emerge. She plays guitar. They harmonize. Temperature drops. String lights become the only warmth.",
        three_am: "The witching hour. Records, paints, talks to entities. The boundary between octaves is thinnest here, now."
      }
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in synesthete-artist and guitarist living-space accounts (URBAN_SPACES_SENSORY_RESEARCH.md sec 5)
      the_guitar_pick_archaeology: "Picks everywhere - the signature detail of a guitarist's home. In the couch cushions, the kitchen junk drawer, on the bathroom counter, wedged between floorboards, one somehow in the refrigerator door. Various gauges, various colors. She stops noticing them the way she stops noticing the entities: constant, low-grade, hers.",
      canvases_as_walls: "Finished and half-finished canvases leaning against every wall, stacked in corners, hung deliberately crooked - her visual translations of sound, the way Melissa McCracken paints a specific song as a swirling field of color. The locked closet holds the ones too large and too true to risk displaying. The rest are camouflage: bright enough that a visitor reads 'artist,' abstract enough that nobody guesses they are documentation.",
      paint_that_never_leaves: "Acrylic and watercolor live in the air even on days she hasn't painted. Dried splatters on the hardwood she has never bothered to cover - she doesn't care enough, and the caring goes into the canvases instead. Tubes crusted at the cap crowd the kitchen counter next to guitar strings still in their packaging.",
      the_sound_dampening_of_clutter: "A crowded room is a quiet room - soft goods, canvases, and stacked objects absorb high frequencies, so her apartment sounds hushed and close rather than live. This is acoustic accident doing emotional work: the muffling calms the chromatic sight the same way the clutter denies the entities their empty perching surfaces. Fortification that also happens to sound like peace.",
      the_kitchen_of_a_person_who_forgets_to_eat: "Mostly unused except for the kettle. A single clean mug; everything else waiting in the sink. Green tea going cold on three surfaces at once. Cereal, toast, whatever Sage brings. The counter is a workbench for everything that isn't food."
    }
  },

  // --------------------------------------------------------------------------
  // OREN'S APARTMENT
  // --------------------------------------------------------------------------
  oren_apartment: {
    meta: {
      id: "oren_apartment",
      name: "Oren's Apartment",
      type: "home",
      address: "One-bedroom, same city as the band, Chicago",
      character: "oren",
      story_significance: "Warm chaos. The only home of the five that actually feels like a HOME — lived-in, decorated, cared-for, messy with life rather than messy with avoidance. Reflects Oren's fundamental warmth and the way he fills space."
    },

    layout: {
      overview: "One-bedroom apartment. Maybe 650 square feet. An older building with character — crown molding, a radiator that clanks like a percussion section, windows that rattle when trucks pass. He's made it HIS in a way the others haven't managed with their spaces.",
      living_room: "The couch is the anchor — a deep, overstuffed sectional in dusty rose that he found on Facebook Marketplace and had Hass help carry up three flights of stairs. Covered in throw pillows and a blanket his mother crocheted. A coffee table buried under: medical journals, a tablet playing YouTube drum tutorials, three empty mugs, his glasses cleaning cloth, a half-eaten bag of Takis, and his cat, Chai, who considers the coffee table her personal stage.",
      kitchen: "Functional, slightly organized. Spice rack (heavy on the cumin, coriander, chili — his mother's influence). A rice cooker that's never fully cool. A collection of mugs: one from the ER (says I'M NOT A DOCTOR BUT I'LL TAKE A LOOK), one from Hass (says WORLD'S MOST DRAMATIC), one from his mother (Urdu script, translates to 'my son the nurse'). He actually COOKS — not elaborately, but competently. Daal, rice, basic curries, pasta when he's tired.",
      bedroom: "A controlled explosion of softness. Fairy lights (yes, like Mira — they don't know this about each other yet). The bed has six pillows and a duvet so thick it's geological. His work scrubs hang on a hook by the door, compression socks draped over a chair. A full-length mirror where he gets ready — because getting ready is a PROCESS: the outfit (dress, skirt, or high-waisted pants depending on mood), the accessories, the eyeliner some days, the whole presentation that he codes DOWN for work and lets BLOOM off-duty.",
      bathroom: "The most organized room. Skincare products arranged with medical precision. Three different moisturizers. A shower caddy that would make a dermatologist weep with joy. His one vanity in a life otherwise devoted to caring for others: he cares for his SKIN."
    },

    what_it_reveals: "Proof that warmth can exist in cosmic weight. Every other home is containment or defense. Oren's is ALIVE — messy with intention, full of objects that mean things. He doesn't know why he nests so hard. The soul does — Ori-Tahn has lost too many homes.",

    sensory: {
      ambient_sounds: [
        "Chai purring — a constant. She purrs at 27Hz. Oren doesn't know this is almost exactly Ori-Tahn's base frequency.",
        "The radiator — clanking in patterns that Oren's brain involuntarily interprets as rhythm. He once air-drummed along to the radiator for twenty minutes without noticing.",
        "YouTube — always playing something. Drum tutorials, cooking videos, trash TV commentary, Urdu music from a playlist his mother made him",
        "His own voice — Oren talks to himself. Narrates his cooking. Commentates on YouTube. Talks to Chai. The apartment is never silent because HE never is."
      ],
      dominant_colors: [
        "Dusty rose — the couch, the throw pillows, a general warmth",
        "Warm brown — wood tones, the kitchen, chai tea stains on surfaces",
        "Cream — the walls, the duvet, the cat",
        "Gold — fairy lights, the brass fixtures, the light his skin catches",
        "Pops of teal — accent pillows, a mug, the bathroom towels"
      ],
      temperature_feel: "WARM. Almost aggressively warm. The radiator runs hot and Oren doesn't mind — he runs cold (the scrubs at work are thin and the ER is always freezing). Home is warmth. He keeps the thermostat higher than anyone would expect. Visitors take off layers.",
      smell_notes: [
        "Cumin and coriander — perpetual. The kitchen exhales spice.",
        "Chai tea — both the cat and the drink. The apartment smells like a warm embrace.",
        "A candle — something vanilla-adjacent that Hass bought as a gag gift that Oren actually loves",
        "Clean laundry — he does it obsessively because scrubs carry hospital smell and he refuses to let the ER follow him home",
        "Moisturizer — faintly, from the bathroom. Something with shea butter."
      ],
      time_of_day_variations: {
        morning_return: "7:30 AM. Dead on feet. Chai meets him. Falls asleep on the couch — closer, more pillows.",
        afternoon_sleep: "Time-drift means naps have unpredictable duration. Sets alarm for 2 hours, wakes 4 later. Chai doesn't leave his side.",
        evening_off: "ALIVE. Music, cooking, Chai supervising. Hass or Ravi over. Peak Oren: surrounded by warmth, generating more."
      }
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in ER-nurse home economics and night-shift recovery patterns (LOCATIONS_SENSORY_RESEARCH.md sec 7B)
      the_apartment_optimized_for_daysleep: "An ER-nurse wage buys the nice one-bedroom in a decent building near transit - necessary when you clock out at 7 AM and need to be back at 7 PM. But the real design principle is recovery: the bed is the most expensive object he owns, because for a night-shift nurse sleep is not comfort, it is survival. Blackout capacity, a fan for white noise, a room engineered to convince his body it is night when it is noon.",
      scrubs_come_off_at_the_door: "The scrubs are shed at the threshold and never carried further in - hospital does not get to follow him home. He launders obsessively for the same reason. Home is the one place antiseptic is not allowed to win, so he floods it with cumin, coriander, chai, and a shea-butter warmth that is the exact opposite of the ER's scrubbed cold.",
      warm_because_work_is_cold: "He keeps the thermostat higher than any visitor expects because the ER runs cold for infection control and his scrub tops are thin - twelve hours of being chilly makes a man build a warm nest. The radiator clanks like a percussion section and he doesn't mind; he air-drums to it. Visitors take off layers within minutes.",
      the_fridge_binary: "An ER nurse's fridge is meticulously meal-prepped or completely empty - no middle ground - and his swings between the two on a shift-cycle. Post-stretch of shifts: takeout containers and a lone condiment. Day off: a cooking day, daal and rice and the whole spice rack deployed, enough to carry him through the next stretch.",
      the_good_coffee_maker: "The one non-negotiable appliance. Night shift runs on caffeine that is delivery, not pleasure, at the hospital - so at home the coffee is deliberately, defiantly good. It is the first ritual of a day that starts in the afternoon."
    }
  },

  // --------------------------------------------------------------------------
  // JUDE'S APARTMENT
  // --------------------------------------------------------------------------
  jude_apartment: {
    meta: {
      id: "jude_apartment",
      name: "Jude's Apartment",
      type: "home",
      address: "Second bedroom of the family's two-bedroom apartment, later his own studio",
      neighborhood: "Working-class. Probably Back of the Yards or Bridgeport. Dense. Concrete. The kind of neighborhood where you know your neighbors by the sounds they make through the walls.",
      character: "jude",
      story_significance: "The space Jude has been given AFTER being caged. The post-prison apartment represents not freedom but TRUST — his family trusting him to exist in a space that has walls he could destroy. Every day he doesn't break them is a day he proves himself."
    },

    layout: {
      overview: "Initially: the second bedroom of Grace and Manny's two-bedroom apartment. Small — 10x12. Later (after the band forms): his own studio apartment, similar to Kael's in scale but different in everything else.",
      the_family_room: "When he first comes home from prison. Grace converted it: a twin bed that his feet hang off (he's 6'2\"), a nightstand, a lamp. She put up a small crucifix and a photo of the family at the old house. Clean sheets. Clean everything. The room smells like laundry detergent and his mother's effort.",
      his_own_place: "When he finally gets his own apartment (after six months of demolition paychecks): a studio. First thing he does: checks the walls. Knocks on every surface. Learns the building's structure through touch — the resonant frequency of every wall, the load-bearing columns, the studs behind the drywall. Not because he plans to break them. Because he needs to know WHERE THE LIMITS ARE.",
      guitar_corner: "The Schecter C-1 (flat black, seven-string) hangs on the wall on a bracket he installed himself. Below it: a small practice amp (a Boss Katana 50, chosen because it can go VERY quiet and still produce low frequencies). A set of headphones for late-night playing. A pile of sheet music and tab printouts that he's never used — he plays by feel, by vibration, by the seismic sense that tells him which note the building wants next.",
      weight_area: "A set of adjustable dumbbells and a pull-up bar in the doorframe. He still lifts daily — the habit from prison embedded in his body. The physical release matters. Not as much as the guitar or the demo work, but enough.",
      the_floor: "He spends more time on the floor than on furniture. Sits cross-legged. Lies flat on his back with his palms on the hardwood, feeling the building breathe. The floor is his connection to the structure — through it he can feel the plumbing, the foundation, the earth below. Grounding. Literal."
    },

    what_it_reveals: "Deliberate. Every surface known, every wall studied. Unlike Kael's containment of VOICE, Jude's is containment of FORCE. He knows how much pressure each surface can bear. The guitar on the wall is the one thing he ALLOWS to be dangerous — his permitted explosion.",

    sensory: {
      ambient_sounds: [
        "The building settling — Jude hears this as a symphony. Every creak, every pipe-knock, every shift in the foundation registers in his bones.",
        "His guitar through headphones — the sound is internal, private. Nobody knows what he plays at 1 AM except the building itself, which vibrates in sympathy.",
        "Traffic — his apartment is on a bus route. The buses create a regular percussion: air brakes (kick), doors opening (hi-hat), engine idle (bass drone).",
        "His own footsteps — heavy. Deliberate. He walks softly on PURPOSE because walking normally sends vibrations through the floor."
      ],
      dominant_colors: [
        "Black — the guitar, the amp, his clothes (he owns almost exclusively dark clothing)",
        "Brown — hardwood floors, wood tones, the building's exposed brick in places",
        "White — sheets, walls (he hasn't painted)",
        "Steel grey — the dumbbells, the pull-up bar, the industrial aesthetic he gravitates toward"
      ],
      temperature_feel: "Neutral. He doesn't run the heat high — his body generates enough. After prison, he developed a tolerance for temperature extremes that makes him indifferent to comfort. The apartment is whatever temperature the building gives him.",
      smell_notes: [
        "Concrete dust — from work. It's in his clothes, his boots, under his nails. The apartment smells faintly of demolition sites.",
        "Clean — like Kael, he keeps things disciplined. But where Kael's clean smells like nothing, Jude's clean smells like Pine-Sol. Aggressive cleaning.",
        "Guitar strings — the metallic smell of new strings, which he changes every two weeks because heavy playing corrodes them fast.",
        "His mother's cooking — when he visits. Jollof rice and fried plantain. He brings containers home and the smell fills the apartment for two days."
      ],
      time_of_day_variations: {
        morning: "5:30 AM. Push-ups, pull-ups, strong black coffee. Demo site by 7.",
        after_work: "4 PM. Shower off concrete dust. Then guitar — destruction to creation, same force, different vector.",
        night: "Guitar through headphones until midnight. Floor-sitting. Feeling the building. Dreams of red-sky planets."
      }
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in post-incarceration spatial psychology (URBAN_SPACES_SENSORY_RESEARCH.md sec 5, Jude's Minimalist Clean)
      the_near_zero_surface_count: "Almost no loose objects. The counter holds a dish rack with exactly the number of dishes he uses. The table holds nothing. This is not aesthetics - it is knowing where everything is, which is control, which is never being caught off guard. Every object in the apartment was chosen, not accumulated.",
      the_bed_made_with_hospital_corners: "Made with military precision every morning without exception - the first act of a free man that became the first act of discipline. The institution taught the corners; freedom keeps them by choice. The distinction is the entire point, and he could not explain it to anyone who hasn't been inside.",
      the_relentless_clean: "Not sterile - relentlessly maintained. Pine-Sol, not the clean-nothing of Kael's controlled air but aggressive, active cleaning. The apartment is clean in a way that makes visitors faintly uncomfortable and makes Jude feel, for an hour after, that the space is genuinely his.",
      checking_the_locks: "He checks them. More than once. Not paranoia - the legacy of years in a world where your space was never truly your own. The door lock is, functionally, the most important feature of the apartment, and its solid throw is a sound he needs to hear before he can sit down.",
      light_he_chose: "Curtains open, natural light welcomed - after years of controlled environments, light is something he actively chooses rather than something done to him. The apartment is sparse but never dark. Quiet, too, on purpose: music is intentional, never background, and the absence of forced institutional noise is itself a luxury he can taste.",
      knowing_where_the_limits_are: "First thing he did in his own place: knocked on every wall, learned the studs and the load-bearing runs by touch and resonance. Not because he plans to break them - because a man who could needs to know exactly where the limits are. The guitar on the bracket is the one thing he ALLOWS to be dangerous."
    }
  },

  // --------------------------------------------------------------------------
  // ZARA'S APARTMENT
  // --------------------------------------------------------------------------
  zara_apartment: {
    meta: {
      id: "zara_apartment",
      name: "Zara's Apartment",
      type: "home",
      address: "One-bedroom, Chicago",
      neighborhood: "Functional. Close to The Frequency. She chose proximity to the venue over everything else. The commute is six minutes by car, eighteen by foot.",
      character: "zara",
      story_significance: "The observation post. Zara's apartment is where the alien rests — not where it lives. She LIVES at the venue. The apartment is maintenance: sleep, food, bass practice, the performance of being human when no one is looking."
    },

    layout: {
      overview: "One-bedroom. Clean. Organized in a way that's almost institutional — everything has a place, nothing is decorative. First-time visitors describe it as 'nice but... cold?' Not temperature-cold (though it is slightly cool). Emotionally cold. Like a hotel room that's been occupied for years but never personalized.",
      living_room: "A couch (mid-century modern, dark grey, chosen for durability not aesthetics), a coffee table (empty except for a laptop and a coaster), a TV she rarely watches. The room's only distinctive feature: a shelf of records. Vinyl. Approximately 200 albums spanning every genre and era. This is her one collection. Her one human indulgence. She doesn't listen on vinyl for warmth — she listens because the analog waveform is COMPLETE. Digital audio is sampled, sliced, reconstructed. Vinyl is the unbroken frequency. To an alien whose home dimension is pure frequency, this distinction matters more than humans can understand.",
      practice_room: "The second room — designated for bass. A Yamaha BB734A in dark coffee sunburst, a Fender Jazz Bass as backup, the Ampeg SVT rig she uses at the venue (a smaller version: a Micro-VR through a single 12-inch cab for home practice). The walls are bare. The floor has a rug (to absorb vibration — when she plays at full power, the sub-frequencies travel through the building's structure and make the downstairs neighbor's dishes rattle). She practices with the door closed. The notes she produces alone, in this room, at 2 AM, are not entirely human. They contain sub-harmonics below 20Hz that she generates through her alien physiology — frequencies that make the walls breathe.",
      bedroom: "Bed. Nightstand. Alarm clock (analog, no phone in the bedroom — a rule she set to prevent late-night signal analysis that would keep her awake until dawn). The bed is made every morning with military precision. She sleeps 5-6 hours. Her body requires less than human standard because her consciousness has been running efficiently for far longer than any human lifespan.",
      kitchen: "Immaculate. She cooks — efficiently, adequately. Croatian recipes from her mother's kitchen (ćevapi, sarma) that she makes from memory and muscle and that taste CORRECT but somehow lack the warmth of Monique's versions. She eats alone. The table has two chairs but only one has ever been used.",
      the_plant: "One plant. A ZZ plant on the kitchen counter. It's extremely hard to kill, which is the only reason it's still alive. She waters it on Sundays. She doesn't talk to it. But she monitors its health with the same precision she brings to monitoring the PA system. If it died, she would notice before the leaves changed color."
    },

    what_it_reveals: "A waiting room. Nothing personal — PERSONAL requires a shareable self, and hers is a frequency being who can't tell anyone. The vinyl collection is the crack in the armor — alien love of complete waveforms converging with human music appreciation. The records are real. Everything else is costume maintenance.",

    sensory: {
      ambient_sounds: [
        "The record player — when it's on. Warm, full, analog. The room changes when vinyl is playing.",
        "The practice bass through the wall — felt more than heard by neighbors. A deep pulse.",
        "Silence — more than any other character's home, Zara's apartment is QUIET. She prefers it. After 25 years of performing human noise, silence is where she can drop the mask.",
        "The ZZ plant — she swears she can hear it metabolizing. She probably can."
      ],
      dominant_colors: [
        "Grey — dominant. Couch, walls, the general tone",
        "Dark coffee — the bass, the kitchen table, the practical palette",
        "Black — the vinyl records, the amp, the speaker cabinets",
        "Forest green — the ZZ plant, the one living color"
      ],
      temperature_feel: "Cool. Not cold — but noticeably cooler than expected. Zara's body runs at a slightly lower temperature than human baseline (97.2°F vs 98.6°F). The apartment reflects this. Visitors pull their sleeves down.",
      smell_notes: [
        "Nothing. The apartment smells like CLEAN NOTHING. No cooking smells linger (she ventilates obsessively). No perfume. No candles. Just: air. Filtered, neutral, unremarkable.",
        "When she practices: a faint ozone smell from the amp tubes warming up",
        "Croatian food when she cooks — briefly, forcefully, then ventilated away"
      ]
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - minimalist realism kept true to canon (one ZZ plant, not a jungle); analog-waveform detail
      the_hotel_room_that_is_lived_in: "Visitors land on the same word: nice, but cold. Not temperature - emotional. A space occupied for years but never personalized, because personalizing requires a shareable self and hers is a frequency being that can tell no one. Everything has a place; nothing is decorative except the records.",
      the_analog_completeness: "She listens on vinyl not for nostalgia or warmth but because the analog waveform is COMPLETE - unbroken, unsampled, unsliced. To a consciousness whose home dimension is pure frequency, the difference between a continuous groove and a reconstructed digital signal is the difference between a living voice and a convincing transcript. The room genuinely changes when a record is playing: fuller, rounder, correct.",
      the_one_plant_on_purpose: "A single ZZ plant on the kitchen counter - chosen precisely because it is nearly impossible to kill. She waters it Sundays and does not talk to it, but she monitors its health with the same precision she brings to the PA, and would notice a change before the leaves did. It is the only living thing in the room and it earns its place by asking for almost nothing.",
      the_clean_nothing: "The air is scrubbed to neutral - she ventilates obsessively, so Croatian cooking flares and vanishes, and no candle or perfume is ever allowed to settle. The apartment smells like filtered air and, when she practices, a faint ozone from the amp tubes warming. The absence is not neglect; it is maintenance of a mask that never fully comes off, even here.",
      the_sub_bass_through_the_floor: "When she practices at full power the rug does real work - her sub-harmonics travel through the building's structure and rattle the downstairs neighbor's dishes. Below 20Hz her physiology produces frequencies that make the walls faintly breathe. She keeps the practice-room door closed and the hour late; the neighbor has decided it's the L."
    }
  },

  // ==========================================================================
  // SECTION 3: WORKPLACES
  // ==========================================================================

  the_warehouse: {
    meta: {
      id: "the_warehouse",
      name: "Regional Distribution Hub",
      type: "workplace",
      subtype: "warehouse_distribution",
      character: "kael",
      shift: "10 PM - 6:30 AM, Sunday through Thursday nights",
      story_significance: "Where Kael's voice hides. The warehouse is loud enough that his Tier 1 ambient presence is drowned by machinery. Nobody notices how people comply because the noise provides cover. This is the one place where his voice is just a voice."
    },

    description: "A massive distribution warehouse on the outskirts of the city. Concrete block construction, corrugated metal roof, four loading docks. The night shift handles package sorting and truck loading for a regional carrier. Approximately 40 workers per shift. Fluorescent lighting that buzzes at 120Hz (Kael has memorized the frequency). Conveyor belts running at 3 feet per second. The constant beep of barcode scanners.",

    layout: {
      loading_dock: "Four bays. Kael works primarily docks 3 and 4. The dock doors open to the night and the cold air mixes with the warm warehouse air at the threshold. He stands in this boundary zone during breaks sometimes — one foot inside, one foot out. The liminal space.",
      warehouse_floor: "Aisles of shelving 20 feet high. Forklifts beeping. Kael moves through the aisles with headphones in one ear, scanner in the other hand. The rhythm of scan-lift-place-scan is meditative. His body does the work. His mind composes melodies he'll never sing.",
      break_room: "Corner of the warehouse. Vending machines (one for drinks, one for snacks — both temperamental). Plastic tables. A TV permanently tuned to ESPN. The break room smells like microwaved burritos and Monster Energy. Kael sits in the corner. Green Monster. Phone. Reddit. Fifteen minutes of almost-silence.",
      parking_lot: "Where Kael arrives 5 minutes early and sometimes sits in his Civic for an hour before shift, not turning on the radio, not looking at his phone. Just sitting with the vibration in his chest that's been getting more directional lately."
    },

    sensory: {
      ambient_sounds: ["Conveyor belts — a constant mechanical drone", "Scanner beeps — arrhythmic, constant", "Forklift reverse alarms — high-pitched, piercing", "The loading dock door motors — grinding upward every 30 minutes", "Kael humming under his breath — he doesn't notice. Others do."],
      dominant_colors: ["Industrial grey", "Safety yellow (floor markings)", "Fluorescent white", "Cardboard brown — everywhere, the dominant visual texture"],
      temperature_feel: "Variable. Loading dock = freezing in winter, humid in summer. Interior = climate-controlled to approximately 65°F. The temperature gradient between dock and floor creates a constant micro-weather.",
      smell_notes: ["Cardboard — overwhelming, constant", "Conveyor belt oil — metallic, mechanical", "Concrete dust", "Monster Energy (from the break room)", "Cold night air through the dock doors"]
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in warehouse-district and industrial-workplace accounts (URBAN_SPACES_SENSORY_RESEARCH.md sec 3)
      the_fluorescent_120hz: "The overhead tubes buzz at 120Hz - the second harmonic of the 60Hz grid - and Kael has not only memorized the frequency, he uses it as a tuning reference his conscious mind doesn't admit to. It never flickers into a shape here the way infrasound can; it just sits under everything, the metallic hum of American industry, the sound of a building that was never built for anyone to feel comfortable in.",
      the_dock_threshold_microweather: "Docks 3 and 4 open onto the night, and the seam where cold outside air meets warm warehouse air is a real thermal boundary you can stand inside - one foot in each temperature. In winter the cold pours across the concrete at ankle height while the heat pools up top; in summer the humidity rolls in and fogs the first ten feet of floor. Kael takes his breaks in this seam on purpose. It is the most honest edge in the building.",
      the_cardboard_dominance: "Cardboard is the entire sensory field - the smell (dry, dusty, faintly sweet), the color (every shade of brown under the fluorescents), the sound (the scrape and thud of boxes, the tape-gun screech). By the end of a shift it is in his sinuses and on his hands, a fine brown dust like a gentler cousin of Jude's concrete.",
      the_reverse_alarm_and_the_drone: "The soundscape is a machine orchestra with no dynamics: conveyor drone as the pad, scanner beeps as arrhythmic percussion, forklift reverse-alarms as a high piercing motif that cuts through everything and that everyone has stopped consciously hearing. The volume is high enough that a normal conversation requires leaning in and half-shouting - which is exactly why Kael's suppressed voice can hide here.",
      the_break_room_at_3am: "Vending machines that steal dollars, a TV bolted to ESPN, plastic tables, the smell of microwaved burritos and cold Monster Energy. Fifteen minutes of relative quiet that isn't quiet - the floor's drone leaks under the door. Kael in the corner with a green Monster and Reddit, banking silence he will spend on the drive home."
    },

    infrasound_notes: {
      // ADDED 2026-09-07 - old industrial buildings are classic infrasound sources (LOCATIONS_SENSORY_RESEARCH.md sec 8)
      the_industrial_generator: "A concrete-block distribution hub is exactly the kind of structure that leaks infrasound: large HVAC and make-up-air units, the loading-dock door motors, forklift traffic hammering the slab, and the low-frequency byproduct of continuous mechanical operation. Most of it sits below 20Hz - felt, not heard.",
      the_dock_door_motors: "The dock-door motors grind upward roughly every thirty minutes, and each cycle pushes a brief low-frequency pressure pulse through the slab that Kael feels in his sternum before the sound reaches his ears. He has learned the interval so precisely that his body braces a half-second early. Coworkers who work docks 3-4 for years develop a vague, unexamined dislike of one corner near the motor housing - a corner where the standing wave happens to node.",
      why_it_reads_as_nothing_here: "In a haunted house this pressure would become a ghost. In a warehouse it becomes fatigue, irritability, the flat low mood of the back half of a night shift - the same physiological response, filed under 'the job' instead of 'the supernatural.' The body responds identically; only the story changes.",
      kael_specifically: "Kael's frequency sensitivity means he reads the building's sub-20Hz field as directional information - which is part of why the vibration in his chest has been getting more directional lately, and why it points, when he lets it, away from the warehouse and toward Ashland."
    },

    the_raylan_incident: "Aisle 9. Danny Kovacs clips a racking upright with the forklift. Two tons of bottled water starts to lean. Kael says 'Danny. Stop.' at normal volume. Every person in the building hears it as if spoken directly into their inner ear. Danny stops. The rack holds. Raylan Meeks files it under 'good instincts' and goes back to scanning paper towels. The voice, even suppressed, finds its way through industrial noise."
  },

  the_er: {
    meta: {
      id: "the_er",
      name: "Level 1 Trauma Center ER",
      type: "workplace",
      subtype: "hospital_emergency_room",
      character: "oren",
      shift: "7 PM - 7 AM, 12-hour shifts, 3 days per week (rotating)",
      story_significance: "Where time breaks. The ER is already a place where time behaves strangely — hours pass like minutes during codes, minutes pass like hours during lulls. For Oren, whose temporal drift is expanding, the ER is both the perfect cover and the perfect amplifier. Nobody questions lost time in an ER. But the drift is getting bigger."
    },

    description: "A major urban hospital ER. Controlled chaos as standard operating procedure. 30 beds, four trauma bays, a waiting room that's never empty. The sound is CONSTANT: monitors beeping at different BPMs, ventilators cycling, the PA paging doctors, gurneys rolling, families crying, drunks arguing with triage nurses. To most people, it's overwhelming noise. To Oren, it's an orchestra.",

    layout: {
      nurses_station: "Central hub. Circular desk with twelve computers, monitors showing patient vitals, a phone that never stops ringing. Oren charts here between patients. His pen taps on the desk in complex rhythmic patterns — ghost notes and paradiddles — that his coworker Rachel has learned to tune out.",
      trauma_bays: "Four bays behind double doors. This is where codes happen. Where the time-drift is worst for Oren — the adrenaline of a code amplifies his ahead-perception. He'll reach for a replacement IV bag sixty minutes before it's empty. He'll know a patient is about to code before the monitor alarms.",
      break_room: "Sad hospital cafeteria sandwich territory. A couch that has absorbed ten thousand exhausted bodies. A coffee maker that produces something technically coffee. Oren sits here during the 3 AM wall and drinks a Monster Ultra Rosa from the vending machine.",
      the_lobby_piano: "In the hospital lobby, not the ER proper. An upright piano that volunteers play for patients. Oren lingers here after shift sometimes. Watching the pianist's hands. His brain deconstructing the rhythm, the touch, the micro-timing of each keypress."
    },

    sensory: {
      ambient_sounds: ["Heart monitors — each at a different BPM, creating polyrhythm", "Ventilators — cycling like hi-hats, steady and mechanical", "PA system — call and response", "Gurneys — wheels on linoleum", "Oren's pen — air-drumming on the desk"],
      dominant_colors: ["Fluorescent white", "Pale blue — scrubs, gloves", "Red — blood, emergency", "Green — monitors, positive vitals"],
      temperature_feel: "Cold. Always cold. Hospitals run cool for infection control. Oren layers: compression socks, platform Crocs, a fleece under the scrub top when he can get away with it.",
      smell_notes: ["Antiseptic — always", "Blood — metallic, sharp", "Bad coffee", "Hand sanitizer — his hands are cracked from washing"]
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in ER-nurse first-person accounts and hospital-noise studies (both research files, sec 2)
      the_fluorescent_relentlessness: "4000-5000K tubes, cool blue-white, institutional - the light that makes everyone look slightly sick and erases every shadow. There are no dim corners in an ER; every surface reflects it, and it bleaches color out of everything so thoroughly that blood looks more vivid than it should because everything else is desaturated. At 3 AM, eight hours in, staff describe it as humming at a frequency you can feel in your teeth. For Oren it is the ceiling of a world where 3 AM and 3 PM are visually identical - fluorescent time, where his temporal drift has perfect cover.",
      the_devils_tritone: "90-99% of monitor alarms are false, and the ear learns to numb - documented alarm fatigue. But the alarms combine, at certain moments, into what one hospital sound researcher named the Devil's Tritone: the dissonant interval Renaissance churches literally banned, assembled by accident from a cardiac monitor, an SpO2 desat tone, and a dry IV pump. It raises the hair on the neck of anyone not yet numb. Oren hears it as music - and hears the SILENCE between surges more sharply than the noise, which is exactly how his gift is wired.",
      the_night_shift_smell: "The dead-stretch signature, straight from the accounts: floor bleach, cold coffee, and old rain tracked in from the ambulance bay. On wet nights add the damp-wool funk of a waiting room full of coats. Under all of it, always, the metallic tang of blood and the sweet-wrong note of something biological that cleaning can't fully win. Fear-sweat is chemically different from exercise-sweat and the veteran nurses can tell them apart without thinking about it.",
      the_wheels_on_linoleum: "The percussion of the department: computer carts, gurneys, and wheelchairs squeaking over waxed floor; the pneumatic hiss-thump of the automatic doors; chart binders snapping; the overhead PA flattening 'Code Blue, Room 7' into its own urgent cadence. Nurses speak softly - professionals lowering their voices is more unsettling than yelling, and Oren has learned that the quieter the trauma team gets, the worse it is.",
      the_dead_hours: "2-5 AM: a calm after the storm that is not restful, because everyone knows the next ambulance could arrive any second. The tension doesn't drop with the pace. Time behaves strangely under unchanging light against black windows - minutes and hours become indistinguishable - and for a man whose soul is drifting loose from time, this is both the safest place to hide it and the place most likely to make it worse.",
      the_break_room_decompression: "Windowless, same institutional tubes, a coffee machine that hasn't been properly cleaned in a decade producing caffeine that is not coffee. A mini-fridge of passive-aggressively labeled Tupperware. This is where a nurse wipes away tears after a bad room and then laughs at a joke ninety seconds later - gallows humor as survival, the come-down happening in stolen five-minute increments. Oren drinks a Monster Ultra Rosa here at the 3 AM wall."
    },

    infrasound_notes: {
      // ADDED 2026-09-07 - hospital mechanical systems as a low-frequency source; the corridor staff avoid (LOCATIONS_SENSORY_RESEARCH.md sec 8)
      the_building_hum: "A hospital is a machine that never turns off - air handlers, chillers, medical gas systems, elevator motors, the sheer mass of ductwork - and large commercial HVAC is the most common indoor infrasound source there is. Below the audible 60Hz transformer hum sit harmonics and fan imbalances that reach down under 20Hz, strongest in basements, mechanical floors, and the long parallel-walled corridors that act as resonance chambers.",
      the_corridor_staff_avoid: "Every veteran ER has a stretch of hallway - often the back corridor to imaging or the old wing - that night staff dislike without being able to say why. Reports cluster there: a sense of being watched, a grey shape at the edge of vision near the end of the hall, an unearned dread. The likely cause is a standing wave from the building's mechanical systems pooling at that corridor length. The feeling is real and physiological; the ghost is the mind's oldest available caption for it.",
      oren_and_the_absence: "Oren, tuned to the absence of expected patterns rather than their presence, notices this low field most on the nights maintenance shuts a unit down - the corridor abruptly feels 'lighter' and he cannot explain to Rachel why. His gift runs on subtraction: he feels the 19Hz leave the way most people would feel a sound arrive.",
      why_it_belongs_here: "It grounds the ER's strangeness in physics without diminishing it. The department can feel liminal, watched, and time-broken at 3 AM for reasons that are measurable - and that makes the genuinely supernatural events, when they come, land harder against a floor of real science."
    }
  },

  demolition_sites: {
    meta: {
      id: "demolition_sites",
      name: "Various Demolition Sites",
      type: "workplace",
      subtype: "construction_demolition",
      character: "jude",
      story_significance: "Where the power is PERMITTED. The one context in Jude's life where destruction is not just acceptable but required. His supervisor Carl calls him 'my secret weapon.' The walls come down and the pressure inside Jude drops to manageable. This is his therapy, his meditation, his controlled explosion."
    },

    description: "Rotating sites across the city. Condemned buildings, renovation tear-downs, commercial redevelopment. Jude works with a crew of 8-12, wielding sledgehammers and operating alongside heavy machinery. He's the fastest demo worker Carl has ever seen. Within a year of starting, he's on the heavy stuff — concrete, block walls, support columns.",

    typical_site: {
      environment: "Dust. Always dust. Concrete dust that gets in your eyes, your lungs, your clothes. Hard hats, safety goggles, steel-toed boots. The site is a controlled chaos of machinery and manual labor.",
      what_jude_feels: "Every site is an instrument. He puts his palm on a wall and FEELS the building — every structural weakness, every stress point, every resonant frequency. He knows where to hit, how hard, and exactly what will happen when the force travels through the structure. The building speaks to him through vibration. He speaks back with a sledgehammer.",
      the_calibration: "He operates at approximately 5% of his actual capacity. What looks like an impressive human swing is a fraction of what lives inside him. He learned the calibration in prison — the difference between 'normal strong guy' and 'supernatural seismic entity.' He plays normal strong guy. Barely."
    },

    sensory: {
      ambient_sounds: ["Sledgehammers on concrete — the crack and crumble", "Heavy machinery — excavators, jackhammers, concrete saws", "Radio tuned to a rock station", "Jude's breathing — controlled, rhythmic, synced to his swing like a drummer counting in"],
      dominant_colors: ["Grey — concrete, dust, everything covered in demolition grey", "Safety orange — vests, cones, barriers", "Rust — exposed rebar, old structural steel", "Brown — exposed earth beneath broken foundations"],
      temperature_feel: "Extreme. Hot in summer (no shade, physical exertion). Cold in winter (exposed sites, wind through broken walls). Jude doesn't complain. Prison taught temperature indifference.",
      smell_notes: ["Concrete dust — the overwhelming dominant note", "Diesel exhaust — from the machinery", "Exposed earth — ancient smell beneath broken foundations", "Sweat — hard labor smell"]
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in demolition-industry accounts and HAVS medical literature (LOCATIONS_SENSORY_RESEARCH.md sec 6)
      you_taste_demolition: "Demolition isn't only seen and heard - it is tasted. Fine concrete dust settles on the teeth and coats the tongue; a day near grinding and cutting leaves a metallic aftertaste that outlasts the drive home. Jude blows his nose at night and it runs grey. The dust is in his eyebrows, the creases of his neck, the cab of the truck, the sandwich in the lunchbox.",
      the_sledgehammer_shock: "The long handle is a lever; the whole body loads the swing - legs, core, shoulders - and the head builds speed through the arc. On concrete the impact shock is sharp and brief and travels up the handle through wrist and forearm into the shoulder. On steel it rings and sustains. On wood it thuds and is absorbed. Jude reads which surface he's hitting through the return shock alone, eyes closed, the way another man reads a drum head.",
      the_phantom_vibration: "After hours of it, ordinary demo workers get numbness and tingling in the fingers - the early edge of Hand-Arm Vibration Syndrome, and over years, vibration white finger. Jude never crosses that line because he operates at ~5% and the impact barely registers in his tissue - but he mimics the phantom buzz on purpose sometimes, shaking out his hands at the truck like the other men, because a man who never gets tired the right way gets noticed.",
      the_break_time_smells: "Bitter site coffee from a stained kettle in a thin plastic cup. A sandwich that has festered in a hot lunchbox, crusts curling. The camaraderie of eating badly together - a bond forged by shared filth, deafness, and exhaustion that doesn't exist in comfortable work. It is, quietly, one of the few belongings Jude has that prison didn't teach him and the band hasn't yet given him.",
      the_silence_after: "When the machines cut for break or end of day, the sudden quiet is startling and the ears ring. The site ticks and settles - concrete dust pinging off metal as it falls, rebar cooling, a wall finding its new balance. In that silence Jude can hear the building he just wounded still moving, and it is the closest thing to prayer he has."
    },

    infrasound_notes: {
      // ADDED 2026-09-07 - machinery and collapsing geometry as transient infrasound sources (LOCATIONS_SENSORY_RESEARCH.md sec 8)
      machinery_through_the_ground: "A twenty-tonne excavator sends waves through the earth you feel through boots and up the legs before the sound arrives. Standing near working plant, the body is bathed in sub-20Hz pressure continuously - low mood, low-grade dread, and irritability that the crew attributes to the noise and the heat and each other, never to the frequency itself.",
      the_temporary_haunted_rooms: "This is the site type unique to Jude: as a half-demolished structure comes down, its geometry changes minute by minute, and briefly - a particular corridor length, a floor with three walls left, a stairwell open to sky - it becomes an accidental resonance chamber. For a few minutes a space can 'feel haunted,' complete with the grey-edge presence, and then the next wall drops and the frequency is gone forever. Jude feels these before anyone; a room going quiet-wrong is his cue to clear the crew.",
      jude_hears_the_structure: "Where infrasound is an ambient hazard for the others, for Jude it is language. He puts a palm on a wall and reads its resonant frequency, its stress points, the exact note the building will sing when it fails. He doesn't experience the dread - he experiences information. The same 19Hz that would make a civilian feel watched tells Jude precisely where to swing.",
      the_honest_hinge: "As everywhere in Signal Decay, the science is the floor and the interpretation is the story. The demolition site proves it in fast-forward: haunted geometries appear and vanish in real time, on a schedule, under a foreman's clipboard - the supernatural feeling manufactured and dismantled by physics in a single shift."
    }
  },

  mira_teaching_space: {
    meta: {
      id: "mira_teaching_space",
      name: "Mira's Teaching Corner",
      type: "workplace",
      subtype: "music_instruction",
      character: "mira",
      story_significance: "Where Mira does her only stable, grounding work. Teaching forces her into the present — into the student's needs, their progress, their questions. The entities mostly respect the boundary during lessons. Mostly."
    },

    description: "A section of her apartment near the south-facing window. Two chairs, a music stand, a small teaching amp, a side table with green tea. Students see: a warm, slightly disorganized space with good light and a teacher who spaces out sometimes. Students don't see: the dead jazz pianist watching from the corner, critiquing their form.",

    students: {
      iris_delgado: "16. Working on Polyphia riffs. Mira's most talented student. Doesn't know that the room gets cold during lessons because Keys is present.",
      sophie: "Younger. Beginner. Keys hums during Sophie's lessons. Mira tells him to stop.",
      kai: "12. Beginner. Not Kael — different Kai. During his lessons, the entities won't shut up. They've never done this during student sessions before."
    }
  },

  // ==========================================================================
  // SECTION 4: THE REHEARSAL SPACE
  // ==========================================================================

  rehearsal_space: {
    meta: {
      id: "rehearsal_space",
      name: "The Rehearsal Space (unnamed)",
      type: "venue",
      subtype: "band_practice_room",
      story_significance: "Where Signal Decay becomes a band. Not the stage — the practice room. Where the rough edges are. Where the fights happen. Where Kael first sings with the others and the room SHIFTS. Where Oren first touches drumsticks and the seal breaks. Where the five discover they're not five musicians but one instrument with five voices."
    },

    description: "A rented practice room in a rehearsal complex — the kind of place that has eight rooms down a corridor, each soundproofed (badly) with foam panels, each smelling like the same combination of sweat and old carpet. Their room is at the end of the hall. It's not special. It becomes special because of what happens inside it.",

    layout: {
      dimensions: "Approximately 15x20 feet. Low ceiling (8 ft) — compression that makes the sound DENSE. Every frequency bounces close. The room is too small for what they produce and this creates pressure — sonic pressure that forces the music into a tight, focused blast.",
      drum_kit: "Against the back wall. A basic five-piece that Oren rents from the rehearsal complex. He adds his own cymbals — a set of used Zildjians he buys from a pawn shop after months of researching exactly which models produce the time signatures he hears in his head. The kit is modest. What comes out of it is not.",
      amp_corner: "Stage right corner. Jude's Schecter through a 50-watt amp. Mira's Fender Mustang through a Fender Twin Reverb (borrowed from the complex — she falls in love with it immediately). Zara's Yamaha through a smaller version of the venue's Ampeg rig. The amps face inward, creating a wall of sound that the room can barely contain.",
      the_mic: "Center. A single SM58 on a stand. Kael's position. He stands here and doesn't sing for the first three practices. Just listens. Holds the mic. Feels the band's frequency through the vibration in the stand. On the fourth practice, he opens his mouth. What happens next changes everything.",
      the_couch: "A terrible couch against the right wall. Brown. Sagging. Stained with something that might be coffee and might be beer and might be neither. It fits two comfortably, three with effort. The couch is the SOCIAL CENTER — where breaks happen, where arguments resolve, where Oren texts while sitting cross-legged with his shoes off. Everybody fights over the left cushion because the right one has a spring that pokes. Mira usually wins because she sits down fastest.",
      the_wall: "The left wall has a corkboard where they pin set lists, lyric ideas, doodles (Mira's), encouraging notes (Oren's), and one Post-it that says 'LOUDER' in Jude's handwriting that nobody has taken down since the second practice. Below the corkboard: a power strip with six outlets and eight things plugged in, a Tetris of adapters and daisy chains that violates every fire code.",
      the_carpet: "Industrial grey. Stained beyond redemption. A specific stain near the drum kit that's shaped like a boot print — Jude's, from the night he played a riff so low the vibration traveled through the concrete under the carpet and the rehearsal complex's manager came down to ask if they'd felt an earthquake. They said no. The bootprint remains.",
      the_mirror: "A full-length mirror on the back of the door. Cracked in one corner. Band practice rooms always have mirrors — for checking form, for watching yourself play, for that moment where you catch your own eye mid-song and think 'we sound incredible' or 'we sound terrible' with equal probability."
    },

    acoustics: "Bad, by professional standards. The foam is inadequate. The room resonates at multiple conflicting frequencies. Low end builds up in the corners. High end is absorbed by the foam and sounds dead. Any sound engineer would hate this room. Zara hates this room — and compensates by bringing a portable mixer and two small reference speakers that she sets up in the corner to monitor the actual sound beneath the room's acoustic lies. The room doesn't SOUND right. It FEELS right. The difference matters.",

    sensory: {
      ambient_sounds: [
        "Bleeding from adjacent rooms — someone always practicing death metal next door",
        "The ventilation system — a drone that Oren has identified as approximately 63Hz (B1 on a bass)",
        "The couch springs — creaking when anyone sits or shifts",
        "Oren's sticks clicking — he clicks sticks together before every take, counting in",
        "Mira's rings clinking against the guitar neck",
        "The power strip humming"
      ],
      dominant_colors: [
        "Industrial grey — carpet, foam, walls",
        "Black — amps, instrument cases, the mic",
        "Brown — the couch, the corkboard",
        "Cable colors — red, blue, yellow instrument cables creating a floor-level web",
        "Pin lights from amps and pedals — small LEDs in the dim room like electronic stars"
      ],
      temperature_feel: "Warm. Five bodies, multiple amps, low ceiling, inadequate ventilation. By the second hour of practice, it's 10 degrees warmer than the hallway. Nobody cares. The heat is evidence of effort.",
      smell_notes: [
        "Old carpet — the base note. Institutional, slightly musty.",
        "Sweat — accumulating. Five people playing hard in a small room.",
        "Amp tubes warming — ozone and hot electronics",
        "Takeout — someone always brings food. Containers accumulate around the couch.",
        "Coffee — Kael brings a thermos. Oren brings a sugary latte. They judge each other's choices silently."
      ]
    },

    sensory_realism_notes: {
      // ADDED 2026-09-07 - grounded in real commercial rehearsal-complex accounts and soundproofing reality (URBAN_SPACES_SENSORY_RESEARCH.md sec 6)
      the_soundproofing_that_isnt: "The foam panels are the aspirational kind of soundproofing that doesn't actually work - egg-crate and carpet stop almost nothing, because the only things that truly block sound are mass and trapped air, and this building has neither. So the room leaks and drinks: highs die in the foam and sound dead, lows have nowhere to go. What escapes to the neighbors isn't the guitars - it's the low end. They don't hear the band; they feel Jude's bottom string.",
      the_metal_band_next_door: "There is always a metal band next door. Always, in every rehearsal complex on earth, and this one is no exception - a wall of blast beats and down-tuned chugging that bleeds through the shared wall at frequencies that interact with Signal Decay's own, sometimes clashing, occasionally and eerily locking into time with Oren's kick. The complex is windowless, down a corridor of eight identical doors, in the desolate industrial part of town where the only post-practice food is a gas station.",
      the_smell_of_the_room: "The exact commercial-rehearsal cocktail: old carpet, stale sweat soaked into that carpet over years, the ozone-and-hot-electronics smell of tube amps cooking, fresh guitar strings' faint metallic tang, and whatever died in the mini-fridge. Add the band's own layer - Kael's thermos coffee, Oren's sugary latte, someone's takeout accreting around the couch.",
      the_couch_you_dont_examine: "The brown sagging couch is the venue's true green room - stained with something that might be coffee and might be beer and might be neither, a spring poking through the right cushion so everyone races for the left. It has absorbed the sweat and nerves of every band that rented this room. Nobody looks at it too closely under the one bright bulb. Oren sits cross-legged with his shoes off and makes it a home in four seconds.",
      the_low_ceiling_pressure: "Eight-foot ceiling over a 15x20 room is too small for what five people and a wall of amps produce, and that is the point: the low ceiling compresses the sound into a dense, close, physical blast with nowhere to breathe. You don't listen to the band in this room, you're inside it. Bass builds in the corners until you can't tell what the low notes are - which is precisely where the frequency anomalies first hide in plain hearing."
    },

    infrasound_notes: {
      // ADDED 2026-09-07 - small-room bass buildup and shared-wall bleed as a frequency environment (URBAN_SPACES_SENSORY_RESEARCH.md sec 4, 6, 8)
      the_boomy_corners: "In a small hard-walled room the low frequencies swirl - close parallel walls reflect and overlap the bass until it becomes an unreadable boom, the reason you can never tell what the bass is playing in a tiny club. Signal Decay's room has this in every corner, and when Zara sets up her portable reference monitors she is fighting the room's acoustic lies to hear the truth underneath.",
      jude_below_the_floor: "When Jude drops below 5% the sound stops being heard and starts being felt - sub-20Hz content that travels through the concrete under the carpet. The boot-print stain by the drum kit dates from the night the vibration reached the foundation and the complex manager came down to ask if they'd felt an earthquake. They said no. The frequency was Jude, and the room had briefly become a resonance chamber for a force that has no business in a rented practice room.",
      where_the_anomaly_hides: "The room's own resonant modes, the metal band's bleed, and Jude's sub-bass combine into a low-frequency soup dense enough that the first genuinely supernatural frequency event can occur inside it unnoticed - a note that shouldn't exist masked by a room already full of notes nobody can quite identify. This is by design in the world's logic: the anomaly chooses the one room where it can hide.",
      the_ventilation_b1: "Oren has identified the ventilation drone at approximately 63Hz - B1 on a bass - which means the room hums a fixed pitch under everything the band plays. On nights they happen to play in B or E, the room joins in uninvited, and for a few bars the ventilation is a sixth member holding a drone none of them wrote."
    }
  },

  // ==========================================================================
  // SECTION 5: SECRET/PERSONAL SPOTS
  // ==========================================================================

  secret_spots: {
    kael_driving_route: {
      id: "kael_driving_route",
      name: "Kael's Aimless Drive",
      type: "hidden",
      character: "kael",
      description: "Not a place — a practice. On off days, Kael drives with no destination. Windows cracked. Full album playing. The city at night is his meditation room. He has a route he doesn't consciously plan but always follows: north on Western, east on Lawrence, south on Ashland (passing The Frequency without stopping), west on Division, north again. A rectangle. A circuit. He's been driving this loop since he got his license. The route passes every significant location in his life without stopping at any of them.",
      sensory: {
        ambient_sounds: ["Album on the car stereo — chosen with care", "Wind through the cracked window", "The car's engine — a 2012 Civic that hums at approximately 800 RPM idle"],
        smell_notes: ["Night air — cold, metallic, alive", "Gas station coffee (if he stops)"],
        temperature_feel: "Cool. Window cracked even in winter. The cold keeps him present."
      }
    },

    mira_rooftop: {
      id: "mira_rooftop",
      name: "Mira's Rooftop",
      type: "hidden",
      character: "mira",
      description: "The roof of her apartment building, accessed through a fire door that doesn't lock properly. She goes up when the entities are too much — when the apartment is too full of dead things and she needs SKY. The rooftop is the one place where the chromatic sight is BEAUTIFUL instead of terrifying — the city's sound-light stretching to the horizon, a panorama of frequency-color that looks like the aurora borealis painted by someone who understands loneliness. She brings her guitar sometimes. Plays to the skyline. The entities follow her up but keep their distance on the roof — the open air disperses their concentration. She can breathe here.",
      sensory: {
        ambient_sounds: ["City hum — traffic, sirens, distant trains, the aggregate frequency of millions of lives", "Wind — always present on the roof, constant and clean", "Her guitar — acoustic, unplugged, the sound swallowed by open air"],
        smell_notes: ["Tar — the roof surface", "Open air — the absence of indoor smell", "Rain, if it's rained — petrichor on tar paper"],
        dominant_colors: ["Deep blue-black — the night sky", "Amber — streetlights below", "The chromatic layer — from up here, the city is a river of gold and amber frequency-light"],
        temperature_feel: "Whatever the weather gives her. She comes up in all conditions. The roof doesn't accommodate — it witnesses."
      }
    },

    jude_the_bridge: {
      id: "jude_the_bridge",
      name: "The Pulaski Bridge (Jude's Spot)",
      type: "hidden",
      character: "jude",
      description: "A pedestrian overpass near a demolished industrial site. Jude found it walking home from work — a bridge over train tracks, heavy steel construction, the kind of structure that VIBRATES when a freight train passes. He goes there when the pressure is highest. Stands in the center. Puts his hands on the railing. And when the train comes — every forty minutes, roughly — the vibration travels up through the steel, through his palms, through his bones, and the pressure DRAINS. The train shakes the bridge and the bridge shakes Jude and for thirty seconds he's not containing anything. He's CONDUCTING. The vibration passes through him like music through a speaker and he's part of the infrastructure. Part of the machine. Anonymous. Functional. Necessary.",
      sensory: {
        ambient_sounds: ["Trains — the approaching rumble, the passing roar, the receding fade", "Steel vibrating — the bridge sings when the train passes. Jude hears it as a chord.", "Wind through the grating — a constant whistle at approximately 400Hz"],
        smell_notes: ["Diesel exhaust — from the trains", "Iron — the bridge itself, oxidizing slowly", "Industrial — the surrounding area's mix of grease and concrete"],
        temperature_feel: "Exposed. No shelter. The bridge is a wind funnel. Cold in winter, hot in summer. He comes regardless."
      }
    },

    oren_jazz_club: {
      id: "oren_jazz_club",
      name: "The Green Mill (Oren's Secret Spot)",
      type: "hidden",
      character: "oren",
      description: "The Green Mill Cocktail Lounge on Broadway. One of the oldest jazz clubs in the country. Oren goes alone, usually after a night shift, still in scrubs under his jacket. He sits at the bar, orders a ginger ale, and LISTENS. The live jazz is acoustic — drums, bass, piano, horn — and his brain disassembles every performance in real time. He watches the drummer's hands like a surgeon watching an operation. His body ACHES to be up there. The soul says no. He orders another ginger ale. Stays until close.",
      sensory: {
        ambient_sounds: ["Live jazz — acoustic, intimate, instruments breathing together", "Ice in glasses", "The room's natural reverb — legendary acoustics"],
        smell_notes: ["Old wood — the bar since 1907", "Cocktails — gin, whiskey, mixed drinks", "History — a century of music"],
        temperature_feel: "Warm. Intimate. Low ceilings, close bodies, music filling the air like temperature itself."
      }
    },

    zara_lake: {
      id: "zara_lake",
      name: "Montrose Beach at 4 AM",
      type: "hidden",
      character: "zara",
      description: "Lake Michigan at Montrose Beach. Zara comes here at 4 AM when she can't maintain the performance anymore. The lake is the closest thing to home she has on this planet — not because crystalline lattice beings have water, but because the lake's wave patterns produce FREQUENCY. Rhythmic. Complex. Natural. The waves hitting the shore at 0.5-1Hz is the slowest rhythm she encounters on Earth, and it slows her consciousness to a rate that approaches the pace of home. She stands at the waterline in her boots and lets the waves lap at her feet and stares at the stars and for five minutes she's not pretending to be human. She's just Za-Rah. Watching the water carry signals she helped design, millennia ago, in a form she can barely remember.",
      sensory: {
        ambient_sounds: ["Waves — rhythmic, low-frequency, the oldest sound on Earth", "Wind off the lake — cold, clean, carrying the smell of deep water", "Silence between waves — the pause that makes the rhythm real"],
        smell_notes: ["Lake water — mineral, fresh, vast", "Sand — cold sand smells like stone", "Pre-dawn air — a specific quality, as if the atmosphere is resetting"],
        dominant_colors: ["Black-blue — the water at night", "Silver — moonlight on wave crests", "Amber — the distant city glow reflected on the lake's surface"],
        temperature_feel: "Cold. Always cold at the lake at 4 AM. She doesn't shiver. Her body temperature is already lower than human baseline. The cold feels like accuracy."
      }
    }
  },

  // ==========================================================================
  // SECTION 6: LEGACY LOCATIONS
  // ==========================================================================

  legacy_locations: {
    surveillance_post_alpha: {
      id: "legacy_post_alpha",
      name: "Surveillance Post Alpha — 'The Apartment'",
      type: "legacy",
      subtype: "surveillance_post",
      description: "The apartment across from The Frequency with lights always on. Three rooms: monitoring (directional mics, spectrum analyzers), analysis (frequency maps, photos of all five), and a rotation room for two agents. Leased under a shell company three months BEFORE Signal Decay formed.",
      sensory: {
        ambient_sounds: ["Computer fans — constant", "The frequency analyzer — low white noise", "The venue's bass bleeding through the building at night"],
        smell_notes: ["Stale coffee", "Electronics — warm plastic", "Takeout containers"],
        temperature_feel: "Warm from equipment. Windows stay curtained."
      },
      what_they_monitor: [
        "Frequency output from The Frequency during shows",
        "Individual band member movement patterns (GPS via phone data)",
        "Anomalous frequency spikes (14 since the band formed)",
        "The 7.83Hz Schumann resonance anomaly",
        "Kael's voice recordings — waveforms that are wrong. Human voices don't produce those overtone patterns."
      ]
    },

    field_office_central: {
      id: "legacy_field_office",
      name: "Legacy Field Office — Chicago Division",
      type: "legacy",
      subtype: "field_office",
      description: "Downtown commercial building. 'Meridian Analytics LLC.' Twelve staff. Frequency maps of the city on the walls — heat-map overlays of anomalous readings. Five names on the whiteboard connected by red string. A conspiracy board — because it IS one. Chicago: hottest point on the global map.",
      departments: {
        signal_analysis: "Three analysts decoding frequency recordings. They've identified patterns in Signal Decay's performances that match no known acoustic phenomenon.",
        field_ops: "Four agents rotating surveillance. One near The Frequency, one at the warehouse, one at demo sites, one floating.",
        archive: "Digital archive of every frequency anomaly since the program's inception in 1987. Files going back forty years."
      },
      sensory: {
        ambient_sounds: ["Office hum — printers, servers, HVAC", "Keyboard typing", "Audio playback snippets of band performances"],
        dominant_colors: ["Corporate grey", "Screen blue", "Red string on the conspiracy board"],
        smell_notes: ["Office coffee", "New carpet", "Server room metallic tang"],
        temperature_feel: "Over-conditioned. Corporate cold."
      }
    },

    the_dampener_facility: {
      id: "the_dampener_facility",
      name: "The Dampener Storage Facility",
      type: "legacy",
      subtype: "containment_facility",
      description: "A sub-basement beneath a decommissioned military facility, location classified. Houses three Dampener units in separate containment rooms lined with anechoic foam, Faraday caging, and lead-lined walls. Only one has been field-activated — during a 2019 'resonance cascade event.' Details redacted.",
      the_dampener: {
        appearance: "Cylindrical, 4 feet tall, 2 feet diameter. Matte black. No visible controls — remote activation. When powered on, emits a subsonic hum at the exact inverse of the targeted frequency. Standing nearby feels like continuous ear-popping. Like something fundamental has been subtracted from the air.",
        effect_on_the_five: "Total suppression. Kael's voice = just a voice. Mira's sight = dark. Jude's force = gone. Oren's drift = stopped. Zara's bass = ordinary. Doesn't hurt — ERASES what makes them extraordinary. Like sudden deafness.",
        moral_question: "Weapon or mercy? For Kael — freedom or amputation? For Mira — peace or loneliness? The Legacy sees a tool. The band sees an existential threat."
      },
      sensory: {
        ambient_sounds: ["Deep silence — anechoic lining absorbs everything", "The Dampener hum when active — below hearing, above feeling. Bones know.", "Fluorescent lighting in corridors"],
        temperature_feel: "Cool. Underground. Constant 62°F. Clinical.",
        smell_notes: ["Nothing — anechoic material absorbs smells too", "Concrete in corridors"]
      }
    },

    monitored_zones: {
      description: "Areas around each of the five with passive monitoring — hidden frequency sensors, modified cell tower equipment, repurposed seismographic stations.",
      zones: [
        { character: "kael", location: "Warehouse + 2-block radius around apartment. Loading dock sensor caught Tier 2 voice during the Danny incident." },
        { character: "mira", location: "Apartment building + surrounding block. Entity activity registers as electromagnetic spikes correlating with cold spots." },
        { character: "jude", location: "Demolition sites. Seismographic equipment registers unexplained micro-tremors matching his work schedule." },
        { character: "oren", location: "Hospital ER. Temporal drift produces 'temporal echoes' — electromagnetic field fluctuations as if time stuttered." },
        { character: "zara", location: "The Frequency venue. Most heavily monitored. 7.83Hz anomaly warranted dedicated sensor array. Bass registers on submarine detection equipment." }
      ]
    }
  },

  // ==========================================================================
  // SECTION 7: FREQUENCY HOTSPOTS
  // ==========================================================================

  frequency_hotspots: {
    the_intersection: {
      id: "hotspot_intersection",
      name: "Ashland and Division Intersection",
      type: "frequency_hotspot",
      description: "The intersection where Jude's truck turned involuntarily toward The Frequency. Where his gut went HOT when passing the venue. This intersection is a convergence point — three ley lines of urban frequency (major bus route vibrations, underground water main resonance, and the residual frequency of a demolished church whose bells used to ring at D#2 — the same note as The Frequency's natural resonance). The intersection doesn't look special. It feels special to anyone with frequency sensitivity.",
      frequency_properties: "Multiple overlapping resonances create a standing wave pattern at street level. Cars passing through the intersection at certain speeds experience brief radio interference. Pedestrians sometimes report feeling 'pulled' in a direction — usually toward Ashland, toward the venue.",
      who_notices: "Jude felt it immediately. Zara has always known about it — walks through it daily. Mira sees it as a bright node of amber light at ground level. Kael and Oren haven't been there yet when the story begins.",
      sensory: {
        ambient_sounds: ["Traffic — amplified at this intersection, louder than surrounding blocks", "A subsonic drone from the underground water main", "Bus air brakes — the frequency trigger"],
        temperature_feel: "Warm. Noticeably warmer than surrounding blocks. Frequency convergence generates micro-thermal effects."
      },

      infrasound_notes: {
      // ADDED 2026-09-07 - urban infrastructure as a real infrasound convergence (both research files, sec 8)
      the_real_sources: "Three of the intersection's 'ley lines' are documented infrasound generators: heavy bus traffic (rush-hour road noise produces ambient infrasound in the 1-20Hz band), an underground water main (flow and pressure resonance in large pipes), and the resonance of surrounding building faces forming an urban canyon. Layered, they create a genuine street-level low-frequency node - measurable, not metaphorical.",
      why_people_feel_pulled: "Standing-wave pressure at street level, combined with the eyeball-resonance range near 19Hz, is enough to produce the reported sensations: a vague unease, a sense of being drawn in a direction, brief peripheral smears. Frequency-sensitive people read the gradient and feel 'pulled' toward Ashland; the science offers a floor under what the story calls convergence.",
      the_demolished_church_note: "The residual D#2 of the demolished church's bells is the world's supernatural layer - but it rides on top of a real acoustic reality, because a bus-and-water-main node genuinely boosts low frequencies at this corner. Jude's truck turning involuntarily is the myth; the hot node in his gut has a physics address."
    }
    },

    the_viaduct: {
      id: "hotspot_viaduct",
      name: "The Western Avenue Viaduct",
      type: "frequency_hotspot",
      description: "A train viaduct underpass on Western Avenue. The tunnel effect amplifies certain frequencies — voices echo differently here. Words said under the viaduct carry further than they should. Kael avoids this spot instinctively. He drove under it once and his voice produced an echo that didn't match his words — the echo said something ELSE, something in a language he doesn't know, and he didn't drive that route again for six months.",
      frequency_properties: "The tunnel geometry creates a natural amplification chamber. Frequencies between 100-300Hz are boosted by approximately 12dB. The concrete walls retain frequency impressions — recordings made under the viaduct contain background voices that aren't present at the time of recording. Old voices. Residual.",
      sensory: {
        ambient_sounds: ["Traffic echo — transformed by the tunnel into something musical", "Train overhead — the bridge vibrating in sympathy", "The voices — residual frequency impressions. Most people don't hear them. Mira does."],
        smell_notes: ["Exhaust concentrated in the underpass", "Wet concrete", "Something metallic that doesn't match any known construction material"],
        temperature_feel: "Cool even in summer. Thermal pocket. Damp air."
      },

      infrasound_notes: {
      // ADDED 2026-09-07 - tunnel/underpass geometry as an infrasound amplifier (URBAN_SPACES_SENSORY_RESEARCH.md sec 8)
      the_underpass_amplifier: "Highway and rail underpasses are known low-frequency amplifiers: traffic and passing trains create sustained rumble, and the underpass geometry reflects and concentrates it. This viaduct already boosts 100-300Hz by ~12dB per the frequency_properties above; below that, in the sub-20Hz band, the train passing overhead pushes compression pulses through the concrete that a body feels as a wave of pressure and unease.",
      why_the_echo_feels_wrong: "The combination of amplified low-mid frequencies, sub-audible pressure from the train, and the eyeball-resonance range is a near-perfect recipe for the 'presence' effect - which is why Kael's voice produced an echo that didn't match his words and why Mira hears residual voices most people don't. The tunnel is a chamber that makes the brain reach for the oldest explanation, and Signal Decay lets it.",
      the_cool_damp_pocket: "The thermal pocket - cool even in summer, damp - is real underpass physics too: shaded thermal mass and trapped air. It adds the bodily chill that infrasound research pairs with dread, so the place delivers the full haunted-feeling package by ordinary means before any residual frequency is invoked."
    }
    },

    the_empty_lot: {
      id: "hotspot_empty_lot",
      name: "The Lot on California Avenue",
      type: "frequency_hotspot",
      description: "An empty lot between two buildings. Chain-link fence. Weeds through cracked asphalt. Nothing has been built here in forty years despite the land value. Every development proposal has fallen through. The lot is quiet. TOO quiet. The ambient frequency level is measurably LOWER than surrounding blocks — as if the space is ABSORBING sound. A frequency dead zone. A hole in the signal.",
      frequency_properties: "Near-zero ambient frequency. Sound diminishes rapidly upon entering. This isn't natural absorption — no material present causes it. Something WAS dampened here and the effect persists.",
      who_notices: "Zara discovered it during a walk. Stood at the fence and felt her 62Hz — the constant bass that hums in her body — go SILENT for the first time since birth. Three seconds of absolute internal silence. She goes there when she needs to rest from being an alien.",
      sensory: {
        ambient_sounds: ["Almost none. The lot absorbs sound."],
        dominant_colors: ["Muted. Even the visual spectrum seems dimmer. Mira would see it as a grey void."],
        temperature_feel: "Neutral. Neither warm nor cold. The absence of frequency = absence of thermal character.",
        smell_notes: ["Nothing. Even the weeds don't contribute scent."]
      }
    },

    autozone_parking_lot: {
      id: "hotspot_autozone",
      name: "AutoZone Parking Lot (Troy's Work)",
      type: "frequency_hotspot",
      description: "Where Kael sits on the hood of his Civic and Troy talks enough for both of them. Not special on its own — but when Kael is present, his Tier 1 ambient presence creates a 50-foot field of warmth and calm. Pigeons that fear nothing fly away. The sign changes pitch when Kael laughs. The lot is a hotspot BECAUSE of Kael. He charges the space. Between visits, traces linger.",
      sensory: {
        ambient_sounds: ["The AutoZone sign buzzing", "Troy's voice — filling space like weather", "Kael's laugh — rare, warm, and when it comes, the lot gains two degrees"],
        smell_notes: ["Brake cleaner from the store", "Asphalt on hot days"],
        temperature_feel: "When Kael is there: warmer. Measurably. When he's not: normal."
      }
    },

    shell_station: {
      id: "hotspot_shell",
      name: "Shell Station on Archer",
      type: "frequency_hotspot",
      description: "Where Kael and Nina reconnect at 1 AM. Unremarkable — until Kael says 'that's great, Nina' and the pump clicks off early, the sign changes pitch, and a man three pumps over feels an inexplicable urge to call his mother. Temporary hotspot charged by emotional frequency.",
      sensory: {
        ambient_sounds: ["Gas pumps whirring", "Shell sign buzzing orange", "Traffic on Archer"],
        temperature_feel: "Cold. 1 AM cold. The kind that makes you honest.",
        smell_notes: ["Gasoline", "Burnt coffee", "Night air"]
      }
    },

    darius_garage: {
      id: "hotspot_darius_garage",
      name: "Darius Cole's Garage",
      type: "frequency_hotspot",
      description: "Where Jude and Darius jam. A two-car garage converted to practice space with egg crate foam (inadequate), concrete floor (perfect for vibration transmission), and two amps pointing at each other. When Jude plays — really plays, drops below 5% — the concrete hums, tools rattle, beer bottles walk across the workbench by themselves. The garage becomes a resonance chamber for forces that shouldn't exist in a residential neighborhood.",
      frequency_properties: "Concrete floor transmits Jude's sub-frequencies into the foundation. Neighbors within 100 meters report 'a low vibration' on Saturdays. One neighbor's aquarium lost a fish — it jumped out. Jude was horrified. He pulled back. He always pulls back.",
      sensory: {
        ambient_sounds: ["Darius playing blues — warm, open, breathing", "Jude below 5% — sound stops being HEARD and starts being FELT", "Beer bottles vibrating on the workbench", "Garage door rattling"],
        smell_notes: ["Gasoline and motor oil", "Old tools — iron and rust", "Beer — open bottles sweating"],
        temperature_feel: "Warm in summer (no AC, two amps). Cold in winter (concrete). They play in hoodies in December."
      },

      infrasound_notes: {
      // ADDED 2026-09-07 - concrete-slab transmission of sub-bass into a residential foundation
      the_slab_as_transmitter: "A concrete garage floor poured onto a residential foundation is a near-ideal transmitter for sub-20Hz energy - it couples directly into the ground and radiates into every neighboring foundation within about 100 meters. When Jude drops below 5%, the neighbors don't hear a garage jam; they feel a low vibration in their own floors on Saturday afternoons, the same physiological unease the research ties to infrasound, filed under 'must be a truck.'",
      the_aquarium: "The fish that jumped its tank is exactly what sub-audible resonance does to a body of water - the standing wave finds the tank's resonant frequency and the surface starts to slosh. Jude was horrified because to him it wasn't mysterious: he felt the tank enter sympathy through the slab and understood instantly what his own force had done. He pulled back. He always pulls back.",
      inadequate_foam: "The egg-crate foam on the walls does nothing for the frequencies that matter - it's the aspirational soundproofing again. Highs die politely; the lows walk straight out through the foundation. Darius's warm open blues sit safely in the audible band. Jude's playing lives below it, in the part of the spectrum the neighborhood feels instead of hears."
    }
    },

    montrose_beach_hotspot: {
      id: "hotspot_montrose",
      name: "Montrose Beach — Frequency Nexus",
      type: "frequency_hotspot",
      description: "Lake Michigan at Montrose is more than Zara's secret spot — it's a natural frequency nexus. The lake's wave patterns interact with the city's electromagnetic output to create a complex frequency environment. On certain nights (atmospheric pressure below 29.5 inHg), the beach produces audible TONES. Sustained, clear, with harmonic content. Locals have reported 'music from the lake' for over a century. The Potawatomi called this stretch 'the singing water.' They weren't being poetic.",
      frequency_properties: "The lake generates 0.5-4Hz infrasound. Geological features amplify certain frequencies into the audible range during specific conditions. One of three locations in Chicago where the barrier between First and Second Octave is naturally thin.",
      sensory: {
        ambient_sounds: ["Waves — 0.5-1Hz base rhythm", "The tones — when conditions align, sustained notes at 60-80Hz", "Wind carrying the tones inland"],
        smell_notes: ["Lake water — mineral, fresh, vast", "Cold sand — more stone than organic", "Pre-dawn air — atmosphere resetting"],
        dominant_colors: ["Black-blue lake", "Silver moonlight", "Amber city glow on horizon"],
        temperature_feel: "Cold. Lake effect = 5-10 degrees cooler than inland. At 4 AM: actively frigid."
      },

      infrasound_notes: {
      // ADDED 2026-09-07 - natural infrasound from waves; 'singing water' grounded in acoustics (both research files, sec 8)
      the_natural_source: "Ocean and large-lake waves are documented natural infrasound generators in the 0.1-5Hz range, and Montrose's frequency_properties already places the lake at 0.5-4Hz. This is the real floor under 'the singing water': wind over the water and wave action produce continuous sub-audible pressure that a sensitive body registers as mood and presence long before any tone becomes audible.",
      the_audible_emergence: "On nights of low atmospheric pressure (below 29.5 inHg), geological and shoreline features can amplify specific harmonics of that infrasound up into the audible range - the sustained 60-80Hz tones locals have reported for a century. It is the same mechanism as singing sand dunes and Fingal's Cave: a natural resonance chamber lifting a felt frequency into a heard one. The Potawatomi name 'the singing water' was accurate observation, not poetry.",
      why_zara_rests_here: "Where a warehouse corner or an ER corridor generates the DREAD version of infrasound, the lake generates the CALMING version - broadband, slow, oceanic, at frequencies the body reads as vastness rather than threat. It is one of three Chicago sites where the barrier thins, and the only one where the low frequency soothes the alien instead of hunting her."
    }
    }
  },

  // ==========================================================================
  // SECTION 8: SUPPORTING CAST LOCATIONS
  // ==========================================================================

  supporting_locations: {
    pho_saigon: {
      id: "pho_saigon",
      name: "Pho Saigon",
      type: "venue",
      subtype: "restaurant",
      address: "Next door to The Frequency (left side)",
      description: "Vietnamese restaurant. Open until 2 AM. Always steaming, always good. Run by Mrs. Nguyen (here since 2001). She knows Zara as 'the quiet one,' leaves pho on the venue's back step on show nights.",
      sensory: {
        ambient_sounds: ["Woks clashing", "Vietnamese pop radio", "Broth hissing"],
        smell_notes: ["Star anise", "Beef bone broth", "Fresh herbs — cilantro, Thai basil", "Chili oil"],
        temperature_feel: "Hot. Permanent tropical climate from the pho pots. Condensation on every window."
      }
    },

    sage_apartment: {
      id: "sage_apartment",
      name: "Sage Kowalski's Apartment",
      type: "home",
      character: "sage",
      description: "Two blocks from Mira's. Smells like rubbing alcohol and incense — tattoo parlor meets spiritual retreat. For Mira, this is a safe house. No entities. (They tried. Sage told them to leave. They did. Nobody knows why.)",
      sensory: {
        ambient_sounds: ["Tattoo gun buzzing", "Incense crackling", "Lo-fi hip hop from Sage's phone"],
        smell_notes: ["Rubbing alcohol", "Nag champa incense", "Pizza — Mira's regular"],
        temperature_feel: "Warm. Sage keeps it warm because Mira is always cold."
      }
    },

    troy_apartment: {
      id: "troy_apartment",
      name: "Troy Jackson's Place",
      type: "home",
      character: "troy",
      description: "The opposite of Kael's in every dimension. MAXIMAL. Posters everywhere, twenty pairs of sneakers organized by color, a PS5 with four controllers, a kitchen always producing wings. COMMUNITY — people are always here. The door is never locked when Troy's home.",
      sensory: {
        ambient_sounds: ["PS5 game audio", "Troy's voice — never silent", "Bluetooth speaker"],
        smell_notes: ["Wing sauce", "Sneaker leather", "One spray of expensive cologne"],
        temperature_feel: "Warm. Bodies generate heat and Troy's apartment always has bodies."
      }
    },

    faith_university: {
      id: "faith_university",
      name: "Faith Okafor's University Lab",
      type: "workplace",
      subtype: "academic",
      character: "faith",
      description: "Biomedical engineering PhD candidate. Basement lab — fluorescent-lit, cluttered with equipment and a whiteboard of equations about 'resonant frequency in biological systems.' Has a private folder labeled 'J-Project' with three years of observations about Jude's abilities. Works on it at 2 AM when the building is empty.",
      sensory: {
        ambient_sounds: ["Lab equipment humming", "Fluorescent lights", "Rapid keyboard typing"],
        smell_notes: ["Chemicals", "Coffee", "Dry-erase markers"],
        temperature_feel: "Basement cold. Always."
      }
    },

    grace_apartment: {
      id: "grace_apartment",
      name: "Grace and Manny Okafor's Apartment",
      type: "home",
      character: "grace_manny",
      description: "The two-bedroom replacing the house Jude damaged. Grace made it HOME — everything clean, warm, Nigerian cooking in the walls. Crucifix in the hallway. Photos everywhere. Manny's tools in a too-small closet. Proof that love adapts to any container.",
      sensory: {
        ambient_sounds: ["Nigerian music — Fela Kuti, gospel on Sunday", "Grace humming while cooking — a tone Jude recognizes in his bones"],
        smell_notes: ["Jollof rice", "Fried plantain", "Palm oil", "Clean laundry — the smell of holding a family together"],
        temperature_feel: "Warm. Always ready for someone to come home."
      }
    }
  },

  // ==========================================================================
  // SECTION 9: CHICAGO AS CHARACTER
  // ==========================================================================

  chicago: {
    meta: {
      id: "chicago",
      name: "Chicago, Illinois",
      type: "city",
      story_significance: "Not just a setting — a participant. Chicago's frequency profile is unique: built on a grid (regular, mathematical), bisected by a river (natural frequency carrier), flanked by a lake (massive resonance chamber), layered with infrastructure (L-trains, underground tunnels, century-old foundations). The city itself is an instrument. The Five were all drawn here — or born here — because this is where the signal is strongest."
    },

    frequency_profile: {
      base_frequency: "The city's aggregate ambient frequency is approximately 120Hz — the harmonic of the US electrical grid (60Hz). But beneath that: the lake at 0.5-4Hz. The L-trains at 15-25Hz. The wind through the grid at variable frequencies that create a constant, city-wide chord.",
      seasonal_variation: "Chicago's frequency changes with the seasons. Summer: bright, high-frequency energy from crowds, open windows, street music. Winter: deep, low-frequency compression as the cold drives people inside and the city's sound profile drops an octave. Fall — Kael's season — has the most complex frequency signature: layered, transitional, rich with overtones.",
      the_grid: "Chicago's street grid creates a standing-wave pattern at the urban scale. East-west streets channel sound from the lake. North-south streets channel sound from the river. The intersections are frequency nodes. Ashland and Division is the most significant because it sits at the intersection of the two strongest axes."
    },

    neighborhoods_that_matter: {
      west_town: "The Frequency's home. Dense, vibrant, overlapping cultural sonic traditions (Mexican, Ukrainian, Puerto Rican, Polish). Every block has a different frequency signature.",
      lincoln_square: "Mira's neighborhood. Quieter, residential. Brown Line rhythm structures the area. Entities are calmer here.",
      bronzeville: "Kael's high school area (King College Prep). Deep musical history — blues, gospel, jazz. Extraordinary residual frequency. He grew up marinating in it.",
      back_of_yards: "Jude's family. Working-class. Dense concrete and brick. Sound profile is HEAVY — trucks, factories. Low frequencies fed his power.",
      uptown: "The Green Mill. Oren's haunt. Fading elegance — old jazz clubs, vintage neon. Layers of musical history in the architecture."
    },

    the_l_train: {
      description: "The elevated train system. Creates 15-25Hz vibrations in adjacent buildings. The schedule structures the city's daily frequency cycle — rush hour LOUD, late night sparse, early morning gentle.",
      significance_for_oren: "Brown Line passes near his apartment. His time-drift synchronizes to the train schedule — manageable when running, worse during outages. An external timekeeper his soul uses as anchor."
    }
  },

  // ==========================================================================
  // UTILITY FUNCTIONS
  // ==========================================================================

  getCharacterLocations: function(characterId) {
    const results = [];
    const allLocations = [
      this.the_frequency,
      this.kael_apartment, this.mira_apartment, this.oren_apartment,
      this.jude_apartment, this.zara_apartment,
      this.the_warehouse, this.the_er, this.demolition_sites,
      this.mira_teaching_space, this.rehearsal_space,
      ...Object.values(this.secret_spots),
      ...Object.values(this.legacy_locations),
      ...Object.values(this.frequency_hotspots),
      ...Object.values(this.supporting_locations)
    ];

    allLocations.forEach(loc => {
      if (!loc || !loc.meta) return;
      if (loc.meta.character === characterId ||
          (loc.meta.characters && loc.meta.characters.includes(characterId))) {
        results.push(loc);
      }
    });

    results.push(this.the_frequency);
    results.push(this.rehearsal_space);
    return results;
  },

  getLocation: function(locationId) {
    if (this[locationId]) return this[locationId];
    const groups = [this.secret_spots, this.legacy_locations, this.frequency_hotspots, this.supporting_locations];
    for (const group of groups) {
      for (const key of Object.keys(group)) {
        if (group[key].id === locationId || key === locationId) return group[key];
      }
    }
    return null;
  },

  getLocationsByType: function(type) {
    const results = [];
    const allKeys = Object.keys(this).filter(k => typeof this[k] === 'object' && this[k] !== null && !Array.isArray(this[k]) && typeof this[k] !== 'function');
    allKeys.forEach(key => {
      const loc = this[key];
      if (loc.meta && loc.meta.type === type) results.push(loc);
      if (typeof loc === 'object' && !loc.meta) {
        Object.values(loc).forEach(nested => {
          if (nested && nested.type === type) results.push(nested);
          if (nested && nested.meta && nested.meta.type === type) results.push(nested);
        });
      }
    });
    return results;
  },

  getSensorySnapshot: function(locationId, timeOfDay) {
    const location = this.getLocation(locationId);
    if (!location) return null;
    const snapshot = { location: location.meta ? location.meta.name : locationId, time: timeOfDay, sensory: location.sensory || {} };
    if (location.sensory && location.sensory.time_of_day_variations && location.sensory.time_of_day_variations[timeOfDay]) {
      snapshot.time_specific = location.sensory.time_of_day_variations[timeOfDay];
    }
    return snapshot;
  },

  getFrequencyData: function(locationId) {
    const location = this.getLocation(locationId);
    if (!location) return null;
    return {
      location: location.meta ? location.meta.name : (location.name || locationId),
      frequency_properties: location.frequency_properties || null,
      entity_activity: location.entity_activity || null,
      who_notices: location.who_notices || null
    };
  }
};

// Export for use in other engine files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LOCATIONS_ENGINE };
}

/* Phase A (2026-09-07): expose to window so the self-aware registry (sd_registry.js)
   can detect this const-declared engine. Additive; does not change existing behavior. */
if (typeof window !== 'undefined') { try { window.LOCATIONS_ENGINE = LOCATIONS_ENGINE; } catch(e){} }
