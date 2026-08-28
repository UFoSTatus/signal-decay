# 🎸 AI Band — Full Story Brief

## Everything Built, Changed, Added, Blocked & Imagined

**Compiled: 2026-08-25**

---

## THE BIG PICTURE — What The App Is Now

An AI creates an entire band from scratch. You pick a genre, hit Generate, and a full band plays — drums, guitar, bass, keys, strings, exotic instruments — all composed in real-time by AI "brains" that know music theory, react to each other, and play through real VSTs on an NVIDIA PC.

**The brain of each instrument is its own character.** Each has personality, preferences, knowledge of thousands of songs, and opinions about how to play.

---

## 🧠 THE 20 INSTRUMENT BRAINS (The Band Members)

Each brain is a self-contained AI musician. They don't just play notes — they THINK about music:

### Original 11 (The Core Band)

| Brain | Size | Personality / Knowledge |
| --- | --- | --- |
| **Piano** | 69.5 KB | Knows Chopin→Bill Evans→Elton John→J Dilla. Plays differently in jazz vs metalcore. |
| **Guitar** | 57.2 KB | Knows Hendrix→Dimebag→Frusciante. Aware of 5 different guitar models (7-string, 8-string, etc.) |
| **Strings** | 67.4 KB | Knows Apocalyptica→Hans Zimmer. Can voice V1/V2/Viola/Cello/Double Bass separately |
| **Sub808** | 51.7 KB | Knows TR-808 history→Metro Boomin. In rock = seasoning (3 hits). In trap = the foundation. |
| **Bass** | 35 KB | Knows Flea→Jaco→Cliff Burton. Locks to kick drum. |
| **Harp** | 31.5 KB | Pedal system knowledge. Can contrast with metalcore. |
| **Sampler** | 37.9 KB | Knows J Dilla→Madlib. MPC swing. Chops and flips. |
| **Organ** | 27.5 KB | Jimmy Smith→Jon Lord. 9 drawbar registrations. |
| **Brass** | 28.5 KB | Miles Davis→Tower of Power. Mute types, section writing. |
| **Choir** | 28.2 KB | Dimmu Borgir→Sunday Service. SATB voice leading. |
| **Synth** | 27 KB | Kraftwerk→Northlane. Patch type awareness. |

### Exotic 9 (The Specialists)

| Brain | Personality / Knowledge |
| --- | --- |
| **Flute** | Breath dynamics, fingering chart, embouchure. Classical→jazz→Celtic. |
| **Mellotron** | Tape-based voices, vintage warmth. Beatles→King Crimson→Radiohead. |
| **Mandolin** | Double-course tremolo, bluegrass chop. Chris Thile→REM. |
| **Pedal Steel** | E9 copedent, country bends. Nashville→ambient post-rock. |
| **Theremin** | EM field control, no-touch playing. Clara Rockmore→sci-fi. |
| **Taiko** | Kuchi shōga (vocal notation system), ensemble drumming. Japanese festival→film. |
| **Turntable** | 10 scratch types, jog wheel physics. DJ Qbert→scratching-as-instrument. |
| **Vocoder** | 16-band carrier/modulator. Kraftwerk→Daft Punk→T-Pain. |
| **Sitar** | 9 ragas, meend bends, sympathetic strings. Ravi Shankar→George Harrison→metal fusion. |

---

## 🎭 THE ROLE SYSTEM — Any Instrument Can Play Any Part

A brain doesn't just "play" — it takes on a ROLE:

| Role | What It Means |
| --- | --- |
| **Lead** | Main melody, solos, floats OVER drums |
| **Rhythm** | Drives the groove, LOCKED to kick/snare |
| **Pad** | Background texture, ignores drums entirely |
| **Bass** | Low-end foundation, plays WITH the kick |
| **Accent** | Punctuation — hits on specific beats only |
| **Fill** | Fills gaps between other parts |
| **Counter** | Counter-melody, answers the lead |
| **Arpeggio** | Broken chords, rhythmic motion |

**Story angle:** Same instrument, completely different character depending on role.

- Flute + Lead = fast runs in octave 5, floating above everything
- Flute + Rhythm = staccato 8th notes locked to the groove
- Sitar + Lead = raga phrases with meend bends
- Sitar + Pad = drone strings humming underneath

---

## 🔒 THE CHORD LOCK ENGINE — Who Follows Whom

16 lock modes control how instruments relate to each other:

| Mode | Behavior |
| --- | --- |
| chord_tones | Only play notes in the current chord |
| scale_tones | Can use any note in the scale |
| chromatic | Total freedom — can play anything |
| root_only | Stuck on the root note (power) |
| unison_rhythm | Everyone plays the SAME rhythm |
| call_response | One plays, another answers |
| following | Copies the leader note-for-note |
| silence | Says nothing (space IS music) |
| pedal_tone | Holds one note while others move |

**22 Triggers** can fire mid-song:

- `drop_lock` — everything locks to root (BREAKDOWN)
- `scatter` — everyone goes free (controlled chaos)
- `unison_hit` — every instrument hits the same beat (IMPACT)
- `half_time` — everything slows by half
- `build` — gradually add instruments one by one

**Story angle:** The lock engine is like a conductor giving hand signals. The band can go from chaos to perfect unison in one trigger.

---

## 🌍 GENRE EXPANSION — The Band Can Play ANYTHING

### Before (Metal Only):

The app only knew: Metalcore, Deathcore, Djent, Thrash, Doom, Prog, etc.

- Jazz got "Drop D" tuning (WRONG)
- Hip-hop got metalcore BPM (WRONG)
- No funk, no reggae, no classical, no Latin

### After (Everything):

| File | What It Added |
| --- | --- |
| Core Patch | 45 BPM ranges, 45 tunings (Jazz=Standard, not Drop D!), 33 key pools |
| Profiles | 35 genre instrument profiles + song structures |
| Compounds | 45 non-metal compound sections + 12 riff locks + 16 feel modifiers |
| Sections | 132 genre-specific section vocabularies across 53 genres |
| Bands | 70 non-metal artists (Miles Davis, Daft Punk, J Dilla, Bob Marley...) |
| Warped Tour | 153 bands from 2025-2026 Warped Tour with real stats |
| Classical | 18 composers with actual compositional DNA |
| Drum Patterns | 54 non-metal drum patterns |
| Blend Engine | Mix 2 genres per song (e.g. Jazz + Metalcore) |
| Morph Engine | Drums gradually transform between ANY 2 genres (1,560 combos) |

**Story angle:** The band went from a metal-only garage act to a genre-fluid entity that can morph between Jazz and Metalcore MID-SONG. The drums transform first, and the instruments hear the change and adapt automatically.

---

## 🎵 GENRE BLENDING — Two Souls In One Song

8 researched blend presets:

- **Pop Punk + Deathcore** (A Day To Remember / Attack Attack!)
- **Jazz + Metalcore** (Between the Buried and Me / Thank You Scientist)
- **Trap + Metalcore** (Bad Omens / Bring Me The Horizon)
- **EDM + Metalcore** (Enter Shikari / Electric Callboy)
- **Blues + Metal** (Black Sabbath / Down)
- **Reggae + Punk** (Sublime / The Clash / Bad Brains)
- **Funk + Metal** (RATM / Primus / Living Colour)
- **Classical + Metal** (Dimmu Borgir / Septicflesh)

**How it works:** Heavy sections → Genre A. Light sections → Genre B. Foundation instruments follow the heavier genre. Color instruments follow the lighter one.

**Story angle:** The band has a split personality. Verse = jazz trio. Chorus = metalcore assault. The transition is seamless because the drums morph first and everyone follows.

---

## 🥁 DRUM GENRE MORPH — The Drums Lead The Way

40 genre DNA profiles. 6 morph curves. 1,560 possible transitions.

**The key insight:** Drums morph FIRST → instruments auto-react via DrumPatternBridge. No one tells the guitar "switch to jazz" — the guitar HEARS the drums change and adapts on its own. Like real musicians in a jam.

**Morph curves:**

- Linear (gradual)
- Exponential (slow buildup → EXPLODES)
- Sudden (nothing then BAM)
- Step (4 discrete jumps)
- Smooth (S-curve, natural feel)

**Story angle:** The drummer is the leader. When they shift feel, the whole band follows without being told. It's telepathic — they share a DrumPatternBridge nervous system.

---

## 🎼 CLASSICAL COMPOSERS AS BAND MEMBERS (New This Session)

18 composers added as playable "musicians" in Build Your Band:

| Composer | What They Bring To The Band |
| --- | --- |
| **Bach** | Counterpoint — weaves lines that interlock like gears. Never parallel 5ths. |
| **Mozart** | Formal elegance — Alberti bass, balanced phrases, graceful ornamentation |
| **Beethoven** | POWER — sforzando hits, motivic development (one idea → entire movement) |
| **Chopin** | Intimacy — rubato (time bends), nocturne cascades, delicate left-hand patterns |
| **Liszt** | Virtuosity — octave runs, bravura, impossible speed, showmanship |
| **Vivaldi** | Energy — ritornello (repeated themes), virtuosic string passages |
| **Debussy** | Color — whole-tone scales, parallel chords, NO resolution (floats forever) |
| **Ravel** | Precision — perfect orchestration, Bolero-style building |
| **Stravinsky** | Chaos — polyrhythm, changing time signatures, primitive rhythm |
| **Hans Zimmer** | EPICNESS — hybrid electronic+orchestral, the BRAAAM, tension ostinatos |
| **John Williams** | Adventure — leitmotifs, brass fanfares, heroic themes |
| **Rachmaninoff** | MASSIVENESS — chords spanning 13 keys, bell textures, Russian melancholy |

**Story angle:** You can put Killswitch Engage's guitarist with Bach on piano. Bach's brain will generate counterpoint that interweaves with the metal riff — right hand answers the guitar melody canonically, left hand plays figured bass. Two eras colliding in real-time.

---

## 🎸 THE RIFF GENERATOR — Now A Full Panel

### Before (one button):

Click ⚡ → random section generated. No control. No preview. No style choices.

### After (full interface being built):

- **Section picker** — choose exactly what you want (verse/breakdown/solo/etc.)
- **Artist style cards** — pick "Periphery" and get polyrhythmic djent, pick "Spiritbox" and get dual-layer low chugs + high melody
- **Energy slider** — cold to white-hot
- **Drum context** — toggle ON and the riff reacts to current drums (inverse density: busy drums → simple riff)
- **Mini piano roll** — see the riff visually before committing
- **Riff history** — last 5 generations stored, compare and pick the best
- **Preview** — hear it through real VSTs before adding to the song

**The intelligence inside:**

- Dense drums (>70%) → guitar plays whole notes (stays out of the way)
- Sparse drums (<40%) → guitar shreds 16th notes (fills the space)
- Breakdown section → LOWEST register, locked to kick drum
- Solo section → HIGH register, FREE from drums

**Artist Riff Styles already in the brain:**

- **Architects** → Angular staccato riffs synced to toms
- **Periphery** → Polyrhythmic groupings of 7/9/11/13 against 4/4 drums
- **Spiritbox** → Dual-layer: low chugs locked to kick + high clean melody floating
- **ERRA** → Clean arpeggios that suddenly shift to unison heavy
- **Invent Animate** → Atmospheric bends and swells, minimal density
- **August Burns Red** → Technical runs between drum accents

---

## 🆕 10 NEW FEATURES BEING BUILT (Story Fuel)

### 1. ↩️ Undo System

Every action recorded. The band can "go back in time" — undo a genre change, undo adding an instrument, undo a riff choice. Full timeline of every decision.

### 2. ⌨️ Keyboard Shortcuts

The conductor has hotkeys. Space=Play, M=Mute, S=Solo, 1-9=select instruments. Like a command center.

### 3. 💥 Transition FX Engine

Automatic risers, sweeps, impacts, sub drops between sections. The "glue" between verse and chorus. Genre-aware: metal gets impacts, EDM gets risers, jazz gets nothing (just dynamics).

### 4. 🗣️ AI Natural Language Commands

Type "make the drums heavier" or "sound like Metallica" and the band adjusts. No menus — just speak.

### 5. 📈 Automation Lanes

Draw curves over time — volume fades, filter sweeps, pan movement. The band breathes dynamically instead of playing flat.

### 6. 🎸 Solo/Riff Phrase Banks

Pre-composed multi-bar phrases (not random notes). Real solos, real licks, real riffs that transpose to any key.

### 7. 🎚️ Three Modes

- **Quick** — one button, instant music (the band on autopilot)
- **Compose** — arrange sections, add instruments (the band with a producer)
- **Studio** — full control, every parameter (the band in the lab)

### 8. 🔍 Reference Track Analyzer

Feed it any song → it maps BPM, key, structure, energy curve. Then "Match This" makes YOUR song follow the same blueprint.

### 9. 🖥️ Multi-Monitor Layout

Pop out panels to separate windows across multiple screens. The studio spreads across your desk like hardware.

### 10. 🎵 Expanded Soundbanks (424 new WAVs)

12 instruments getting real audio samples — bass, theremin, vocoder, turntable, synth, organ, harp, flute, sitar, mandolin, pedal steel, taiko.

---

## 🐛 BUGS FIXED / BLOCKERS OVERCOME

### Drum Mix Sliders Did NOTHING (Fixed ✅)

- 32 sliders existed in the UI
- Data flowed all the way to DrumBrainV2
- `_vmScale()` function was DEFINED but NEVER CALLED
- **Fix:** Now called on every piece (kick, snare, ghost, hat, cymbal, fill, tom)
- **Story angle:** The mixer finally works. Each drum piece has its own voice — you can silence the snare and let ghost notes carry the groove.

### Genre Picker Was Metal-Only (Fixed ✅)

- UI only showed 10 metal genres
- The ENGINE knew 45+ genres but the UI didn't show them
- **Fix:** Dynamic sync module auto-patches UI from registered genre data
- **Story angle:** The band was trapped in metal. Now the genre picker opens up and they can see all 53 genres — they were always capable, they just couldn't see the options.

### 5 Modules Built But Never Loaded (Fixed ✅)

- amp_modeling.js, cabinet_ir.js, melody_generator.js, realtime_sync.js, vocal_processing_chain.js
- Existed on disk but no `<script>` tag in app.html
- **Story angle:** Abilities they had but couldn't access — like muscles that were never connected to the brain.

### ES6→ES5 Conversion Disaster (Past Blocker)

- The app's renderer can't handle modern JavaScript (const, let, arrow functions)
- Multiple interfaces broke catastrophically when we tried automated conversion
- **Rule established:** Write ES5 from scratch. Never convert. This is a hard constraint of their world.

### Background Tasks Failing (Past Blocker)

- Internet drops on the laptop killed multiple build attempts
- Files too large for task output
- **Solution:** Build directly in conversation, one at a time
- **Story angle:** Communication blackouts — the band lost connection mid-recording and had to start over.

---

## 🏗️ ARCHITECTURE DECISIONS (World Rules)

### Drums Get Made FIRST → Everything Layers On Top

The drummer is always the foundation. Every other instrument listens to the drums and builds their part on top. This is non-negotiable.

### The App's Language (Communication Protocol)

- `BandEventBus` — pub/sub messaging (genre:changed, drums:style_changed, etc.)
- `DrumPatternBridge.getAdvice(instrument)` — tells each player what the drums are doing
- `AppAdapter.onStep(step, bpm)` — THE CLOCK. No instrument has its own timer.
- `ChordKnowledge` — shared chord data everyone reads
- All output: `[{note, time, velocity, duration, articulation}]`

**Story angle:** They share a nervous system. The EventBus is telepathy. The clock is a shared heartbeat. No one plays alone — they're always connected.

### The 808 in Rock = Seasoning, Not Foundation

In trap/hip-hop: the 808 IS the kick (every hit) In rock/metalcore: the 808 only hits 3-5 times per SONG (accent on breakdown downbeats) Regular acoustic kick is still the groove driver.

**Story angle:** The 808 has a different personality in different genres. In trap it's the heartbeat. In metal it's the earthquake that only comes at the most dramatic moment.

### Slide Notes (FL Studio-Inspired)

Any note can "slide" from the previous pitch instead of retriggering:

- 808: ±12 semitones (huge trap slides)
- Sitar: ±7 semitones (meend bends)
- Theremin: unlimited (it's contactless)
- Flute: ±1 semitone (subtle)
- Piano: N/A (can't bend strings)

**Story angle:** Some instruments can bend reality more than others. The theremin has no limits — it slides through infinite pitch space. The piano is rigid — each note is a hammer strike, no in-between.

---

## 🎤 BUILD YOUR BAND — Pick Your Dream Lineup

### How It Works:

- Pick a player for each slot (guitar, bass, drums, keys, vocals)
- Their style DRIVES the AI generation
- Auto-detects compatible BPM, tuning, key from selected players
- Preview button plays that player's signature through real VSTs
- Generate creates a full song in the combined style

### Current Players (215):

- 50 drummers, 35 guitarists, 25 bassists, 30 vocalists, 25 keyists, 50 producers

### Being Added (90+):

- 18 classical composers
- 40+ non-metal artists (jazz/funk/hip-hop/reggae/EDM/blues)
- 30+ Warped Tour band members

### Dream Lineup Examples:

- **Killswitch guitarist + Bach on piano + Matt Greiner on drums** → Metalcore riffs with baroque counterpoint and technical precision drumming
- **Miles Davis on keys + J Dilla on drums + Flea on bass** → Modal jazz over off-grid MPC beats with slap funk bass
- **Hans Zimmer on keys + Periphery guitarist + Matt Halpern on drums** → Epic cinematic ostinatos over polyrhythmic djent
- **Chopin on keys + Bob Marley on guitar + Questlove on drums** → Delicate piano nocturnes over reggae skank and neo-soul pocket

**Story angle:** The AI band doesn't have a fixed lineup. It can channel any musician who ever lived. Put Mozart and Metallica in the same room and see what they create together.

---

## 🌊 THE MORPH — How The Band Transforms

The most powerful concept: **mid-song genre morphing.**

### How it happens:

1. Song starts as metalcore
2. At the bridge, the Drum Genre Morph Engine kicks in
3. Over 4 bars, drums gradually shift from metalcore → jazz
4. Each instrument HEARS the drums change via DrumPatternBridge
5. Guitar brain says "drums sound jazzier... I should switch to clean chords"
6. Bass brain says "less distortion, more walking"
7. Keys brain says "add jazz voicings"
8. By the end of 4 bars, the song IS jazz
9. Nobody was told to switch — they all felt it

### Morph Curves (6):

- **Linear** — steady transformation
- **Exponential** — barely changes then EXPLODES in last bar
- **Sudden** — nothing, nothing, nothing, BAM
- **Logarithmic** — transforms quickly then settles gently
- **Smooth** — S-curve, most natural
- **Step** — 4 discrete jumps (like shifting gears)

**Story angle:** The band is a living organism. It doesn't switch genres — it EVOLVES between them. The drums are the catalyst, the instruments are the response. No conductor needed.

---

## 💡 IDEAS THAT EMERGED BUT AREN'T BUILT YET

- **Vocal Space Manager** — instruments automatically duck when vocals are present (singing/screaming/whisper modes)
- **Song Versioning** — save v1, v2, v3 and compare different arrangements
- **Guided Entry** — wizard for new users ("What genre? What mood? How fast?")
- **AI Arrangement Coach** — "this chorus feels flat" → suggests fixes
- **Groove Lock to Audio** — tap a rhythm on your desk, the band plays YOUR groove
- **Shared Bottom Panel** — Comp Library + Piano Roll + Mixer + Timeline all as tabs in one space

---

## 📊 BY THE NUMBERS

| Category | Count |
| --- | --- |
| Instrument brains | 20 |
| Genre expansion files | 10 (407 KB of intelligence) |
| Genres supported | 53+ |
| Genre morph combinations | 1,560 |
| Warped Tour bands | 153 |
| Classical composers | 18 |
| Non-metal artists | 70 |
| Drum patterns (non-metal) | 54 |
| Soundbank WAVs (new) | 424 being generated |
| Soundbank WAVs (existing) | ~6,300 (guitar/bass) |
| Interfaces | 27 premium HTML panels |
| New features building | 12 modules |
| Total build folder size | ~1 GB |

---

## 🎬 STORY THEMES TO WEAVE IN

1. **Telepathy** — The band communicates through the EventBus. They don't talk, they broadcast emotions (genre:changed, energy:up).
2. **The Drummer Leads** — Every decision starts with drums. The groove is law. Everything else reacts.
3. **Genre is a spectrum, not a box** — The morph engine means they're never "metal" or "jazz" — they exist on a gradient between ALL genres simultaneously.
4. **Classical meets modern** — Bach's strict rules (never parallel 5ths) colliding with Periphery's deliberate rule-breaking (polyrhythm against 4/4). Tension between structure and chaos.
5. **The Riff is reactive** — It doesn't exist in isolation. A riff responds to what the drums are doing (inverse density). Busy drums = simple riff. Space in drums = guitar fills it.
6. **Roles shift** — The same instrument can be a lead hero or a background whisper. The Flute isn't always delicate — in Studio mode it can be the lead shredder.
7. **The 808 question** — Is it a drum or a bass? In trap, it IS both. In metal, it's a special weapon saved for the most devastating moments. Its identity changes with context.
8. **Time bends** — Slide notes (808 glides, sitar meend, theremin portamento) break the grid. Not everything is quantized. Some instruments exist between the notes.
9. **The conductor is optional** — In Quick mode, the band runs on autopilot. In Studio mode, the user IS the conductor. The band scales from autonomous to fully controlled.
10. **Failed connections** — 5 modules existed but weren't wired. The band had abilities they couldn't access — like memories trapped behind a wall. Once connected, new capabilities emerge instantly.

