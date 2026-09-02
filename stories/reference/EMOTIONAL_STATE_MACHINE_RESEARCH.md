# Emotional State Machine Research for Signal Decay

## Purpose & Scope

This document surveys how commercial games and academic models represent persistent emotional states that carry across interactions and influence NPC behavior. The goal is to extract design principles for Signal Decay's character system—where characters like Oren, Sable, and others maintain emotional continuity across chat sessions without exposing numerical "gamey" meters to the player.

---

## Part I: Game Systems Analysis

---

### 1. The Sims 4 — Emotion & Moodlet System

#### Architecture

The Sims 4 replaced the simple "mood bar" of The Sims 3 with a multi-dimensional emotion system. Each Sim has a current **emotional state** (Happy, Sad, Angry, Embarrassed, Tense, Bored, Flirty, Energized, Focused, Inspired, Confident, Playful, Uncomfortable, or Fine as default).

#### How Emotions Are Stored

- **Moodlets**: Each event generates a moodlet with three properties:
  - **Emotion type** (which emotion it contributes to)
  - **Strength** (numerical weight, typically +1 to +5)
  - **Duration** (time until expiry, from 2 hours to permanent)
- The game sums all active moodlets by emotion type. The emotion with the highest total strength becomes the Sim's dominant emotional state.
- If multiple emotions tie, a priority system resolves conflicts.

#### Decay Mechanics

- Moodlets have fixed durations (e.g., "Had a Great Meal" = +1 Happy for 4 hours).
- When duration expires, the moodlet simply disappears—no gradual fade.
- Some moodlets are **permanent** (trait-based) and never decay.
- Environmental moodlets (e.g., "Nice Décor") persist only while the condition holds, then vanish instantly.
- There is no exponential decay curve—it's binary: present or absent.

#### Compounding

- Multiple moodlets of the same emotion type stack additively.
- A Sim with "Good Meal" (+1 Happy), "Beautiful Environment" (+2 Happy), and "Socialized" (+1 Happy) has a total Happy weight of 4.
- Intensity thresholds exist: at certain cumulative strengths, the emotion displays as "Very [Emotion]" (e.g., Very Happy, Very Angry).
- **Emotional Auras**: Sims in extreme emotional states can affect nearby Sims, creating contagion.

#### Behavioral Effects

- Emotions unlock and lock specific interactions (e.g., Flirty enables romantic socials; Angry enables mean socials).
- Skill gain rates are modified by emotion (Focused Sims learn Logic faster; Inspired Sims paint better).
- At extreme levels, emotions can cause autonomous behaviors:
  - Very Angry Sims may autonomously break objects.
  - Very Tense Sims can die from cardiac arrest.
  - Very Embarrassed Sims can die of embarrassment.

#### Persistence Across Sessions

- Moodlet timers pause when the game is saved/closed and resume on load.
- No cross-session decay—state is perfectly preserved in the save file.
- Relationship scores (separate from emotions) persist permanently.

#### Key Design Lesson for Signal Decay

> The Sims proves that **simple additive stacking with fixed decay timers** is sufficient to create emergent emotional complexity. The strength/duration separation lets designers tune volatility per emotion type. However, the binary decay (present → gone) feels artificial—Signal Decay should prefer gradual fade.

---

### 2. Dwarf Fortress — Personality, Stress, and Memory

#### Architecture

Dwarf Fortress models the deepest emotional simulation in commercial games. Each dwarf has:

- **Personality Facets** (50+ traits rated 0–100): anger propensity, anxiety propensity, gregariousness, love propensity, stress vulnerability, etc.
- **Values/Beliefs**: what the dwarf cares about (family, craftsmanship, nature, etc.)
- **Stress Level**: a single scalar value modified by all emotional events.
- **Memory System**: short-term (8 slots), long-term (8 slots), and core memory (unlimited).

#### How Emotions Are Stored

The game defines **170 distinct emotions** (130 currently implemented), each with a **Divider** value indicating strength:
- Divider 1 or -1: Strongest effect (Joy, Agony, Terror, Love, Rage)
- Divider 2 or -2: Strong (Anger, Grief, Happiness, Elation)
- Divider 4 or -4: Moderate (Anxiety, Guilt, Pleasure, Pride)
- Divider 8 or -8: Weak (Annoyance, Boredom, Contentment, Nostalgia)

Negative dividers reduce stress; positive dividers increase it.

#### The Memory System (Critical for Signal Decay)

**Short-Term Memory (8 slots)**:
- When a dwarf experiences something, the emotion is stored in one of 8 short-term slots.
- Memories are grouped into categories. Only the strongest emotion per category occupies a slot.
- If all 8 slots are full, the new memory overwrites the weakest slot—**even if the new memory is weaker**. This creates constant cycling of weak impressions.
- Result: Only strong experiences persist in short-term memory.

**Long-Term Memory (8 slots)**:
- After one year, a short-term memory attempts promotion to long-term.
- Stronger memories survive promotion; weak ones are discarded.
- Long-term memories are "revisited" periodically, causing additional stress changes even years after the original event.
- The dwarf's thoughts screen shows "She felt satisfied remembering work" vs. "She felt satisfied at work" to distinguish recalled vs. immediate.

**Core Memory (unlimited)**:
- When a dwarf thinks about a long-term memory, there's a 1:3 chance it becomes a core memory.
- Core memories permanently alter personality facets: "She can easily fall in love or develop positive sentiments, after gaining a sibling in 351."
- These changes are indicated in bright magenta in the UI.

#### Decay Mechanics

- Emotions don't decay smoothly—they are **displaced** by new experiences.
- The cycling of the weakest short-term slot means that mundane daily events constantly wash out mild impressions.
- Traumatic memories (Divider 1) resist displacement because they're always stronger than incoming mundane thoughts.
- Time affects memories through the promotion pipeline: short-term → long-term → core, each transition taking roughly a year.

#### Personality Mutation Over Time

- Memories that become core memories permanently shift personality facets.
- A dwarf who witnesses many deaths may become more stress-resistant (or more anxious, depending on personality).
- This creates **emergent character arcs** without scripted narratives.

#### Behavioral Effects at High Stress

- Specific emotions at extreme stress levels trigger visible behaviors:
  - "Writhing in agony!" (immobility)
  - "In existential crisis!" (lies on ground pondering meaning of life)
  - "Anguished!" (lies on ground crying)
  - "Enraged at all enemies!" (goes berserk, attacks anyone)
  - "Overcome by terror!" (flees from all threats)

#### Key Design Lessons for Signal Decay

> **Memory slots with competitive displacement** is brilliant for a chat system. Signal Decay characters could have limited "emotional memory" where strong interactions displace weak ones. The promotion pipeline (immediate → remembered → personality-shaping) maps perfectly to conversation → session memory → long-term character drift. The key insight: **you don't need smooth decay if you have displacement by new inputs.**

---

### 3. RimWorld — Mood System & Mental Breaks

#### Architecture

RimWorld simplifies Dwarf Fortress's system into a more transparent model:

- **Mood Bar**: 0–100% scale, visible to player.
- **Base Mood**: Set by difficulty (22–42%).
- **Thoughts**: Named modifiers with positive or negative values and durations.
- **Mood Target**: Instantaneous sum of all thoughts + base mood.
- **Actual Mood**: Moves toward the target at +12/hour (rising) or -8/hour (falling).

#### How Emotions Are Stored

Each thought (analogous to a moodlet) has:
- **Name**: e.g., "Ate without table" (-3), "Impressive bedroom" (+5), "My friend died" (-15)
- **Mood effect**: numerical modifier
- **Duration**: in-game hours/days until expiry
- **Stack limit**: some thoughts can exist multiple times; others are unique
- **Stage progression**: some thoughts worsen or improve over stages (e.g., grief starts at -30, then -18, then -8)

#### The Lag System (Critical for Signal Decay)

The actual mood bar **does not instantly match the target**:
- Rising: +12 mood points per in-game hour
- Falling: -8 mood points per in-game hour
- While sleeping: mood is frozen (no mental breaks during sleep)

This creates **emotional inertia**—a sudden tragedy doesn't instantly crash mood, and a sudden celebration doesn't instantly fix it. The character takes time to "process" changes.

#### Compounding and Stacking

- Multiple instances of the same thought can stack (e.g., multiple colonist deaths).
- Different thoughts from different categories stack freely.
- Negative thoughts tend to have larger magnitudes than positive ones—asymmetric emotional weight.
- Environmental bonuses (nice room, good meal) are consistent small positives that offset occasional large negatives.

#### Mental Break Thresholds

Three escalating danger zones:
- **Minor break** (mood < 35%): hide in room, sad wandering, food binge
- **Major break** (mood < 20%): fire starting, drug binge, psychotic wandering
- **Extreme break** (mood < 5%): murder, berserk rage, catatonia

The threshold model means that **it's not about absolute mood but about crossing critical lines**. A character at 36% is fine; at 34% they might snap.

#### Trait Modification

Character traits modify the system:
- **Iron-Willed**: mental break threshold lowered (harder to break)
- **Neurotic**: gains mood buffs/debuffs at 120% strength
- **Psychopath**: immune to most social mood effects
- **Depressive**: permanent -12 mood

#### Key Design Lessons for Signal Decay

> The **mood lag system** (asymmetric rise/fall rates) is essential for Signal Decay. Characters should "warm up" faster than they "cool down" from hurt (or vice versa, depending on personality). The threshold model is also perfect—rather than continuous behavioral gradients, Signal Decay characters could have distinct behavioral "modes" triggered when dimensions cross critical values. **Oren at anxiety > 0.7 behaves qualitatively differently than at anxiety = 0.5.**

---

### 4. Disco Elysium — Thought Cabinet & Morale

#### Architecture

Disco Elysium takes a radically different approach: emotions aren't a simulation running in the background but a **deliberate identity-construction system**.

#### The Thought Cabinet

- The player has **12 slots** for "Thoughts" (can unlock up to 12 from starting 3).
- Thoughts are acquired through dialogue choices, exploration, and behavior patterns.
- Each thought has **two phases**:
  1. **Research phase**: While "cooking," the thought gives a temporary modifier (often negative or neutral).
  2. **Internalization**: After a set research time (15 minutes to 20 hours of in-game time), the thought "matures" into its permanent form with different (usually better) effects.

#### The Maturation Mechanic

This is the key innovation: **thoughts change over time**:
- "Mazovian Socio-Economics" while researching: -2 Visual Calculus
- "Mazovian Socio-Economics" when internalized: Left-wing dialogue options give +4 XP, -1 Visual Calculus, -1 Authority
- The player doesn't know the final form until it completes.
- Research time represents the character "processing" an idea.
- Sleeping doesn't count—only awake time advances the thought.

#### Morale as Health

- Morale functions as a second health bar (alongside physical Health).
- When Morale hits zero, the game ends (the character gives up psychologically).
- Failed skill checks in social/intellectual skills damage Morale.
- Certain thoughts, items, and substances restore Morale.
- This creates a system where **emotional damage is as lethal as physical damage**.

#### The Political Alignment System

Hidden counters track every dialogue choice:
- Communist, Fascist, Ultraliberal, and Moralist scores accumulate.
- At certain thresholds, corresponding Thoughts become available.
- The character's political identity emerges from accumulated micro-choices.
- "There are always little integers in the background, counting everything you say."

#### Behavioral Effects

- Internalized thoughts permanently change available dialogue options.
- They modify skill checks throughout the game.
- The character's personality literally changes based on what they choose to "think about."
- Forgetting a thought costs a skill point and permanently removes it—representing the difficulty of unlearning.

#### Key Design Lessons for Signal Decay

> The **maturation mechanic** is powerful for Signal Decay. When a player says something hurtful to Oren, that hurt shouldn't instantly resolve—it should "cook" in Oren's mind, potentially transforming from initial shock into lasting resentment or (if subsequent interactions are positive) eventual understanding. The "hidden integers counting everything you say" principle is exactly what Signal Decay needs: **every conversational choice moves hidden counters that eventually cross thresholds and change behavior**.

---

### 5. Animal Crossing — Friendship Levels & Gift Memory

#### Architecture

Animal Crossing uses a deceptively simple but psychologically effective system:

- **Friendship Score**: Hidden integer per villager, starting at 25, capping at 255.
- **Friendship Levels**: Six discrete levels with behavior unlocks.
- **Daily Decay**: Friendship decreases slightly each day without interaction.
- **Personality Types**: Eight types (Normal, Peppy, Lazy, Jock, Cranky, Snooty, Smug, Sisterly) that determine dialogue pools and gift preferences.

#### How Friendship Is Stored

The 0–255 scale is modified by:
- **Talking**: +1 per day (first conversation only)
- **Gifting**: +1 to +5 depending on gift quality and preference match
- **Completing favors**: +3 to +5
- **Sending letters**: +1 to +3 based on content quality
- **Negative actions**: hitting with net (-3), pushing (-1), ignoring for days (-2/day)

#### Decay Mechanics

- Each day without interaction: approximately -2 friendship points.
- At maximum friendship (255), decay is paused—a reward for maxed relationships.
- Decay is passive and automatic—the game simulates "drifting apart."
- A villager who has been ignored for a week will comment on the absence.

#### Behavioral Changes Across Levels

Friendship unlocks feel natural:
- **Level 1 (0-29)**: Generic greetings, may refuse gifts
- **Level 2 (30-59)**: Accept gifts, basic conversation topics
- **Level 3 (60-99)**: Give nicknames, send letters, ask for favors
- **Level 4 (100-149)**: Give their photo (rare item), unique dialogue
- **Level 5 (150-199)**: Visit player's home, ping to hang out
- **Level 6 (200-255)**: Express desire to never leave, deepest dialogue

#### Gift Memory

- Villagers remember what you've gifted them and may display/wear items.
- Gifts affect their home interior—furniture you give replaces existing pieces.
- Clothing gifts are worn in rotation.
- This creates **visible evidence** of relationship history without numerical display.

#### Session Persistence

- All friendship data saves to the island file.
- Time-skip detection: if you haven't played in months, villagers comment on your absence.
- Some villagers may have moved away during extended absence (consequence of neglect).

#### Key Design Lessons for Signal Decay

> The **daily decay with interaction arrest** is perfect for chat-based characters. If a player doesn't talk to Oren for three days, his openness/comfort scores should drift toward baseline. The visible behavioral tier system (new topics, new intimacy, new vulnerability) maps directly to dialogue unlocks. The gift memory principle translates to **conversation memory**—characters should reference past conversations as evidence of relationship depth.

---

### 6. Façade (2005) — Real-Time Relationship Tracking

#### Architecture

Façade is the most directly relevant precedent for Signal Decay. It's a 20-minute interactive drama where the player converses (via typed text) with a married couple, Trip and Grace, whose relationship is disintegrating.

#### The Beat System

The drama is decomposed into approximately **20 story "beats"**:
- Each beat is a self-contained dramatic unit (e.g., "Trip boasts about his career," "Grace reveals dissatisfaction with apartment décor").
- A **Drama Manager** sequences beats to create rising dramatic tension.
- The Drama Manager selects the next beat based on: dramatic arc position, player affinity scores, and recently completed beats.

#### Affinity Tracking

The system tracks **two continuous affinity values**:
- **Player-Trip affinity**: How much Trip likes/trusts the player (-1.0 to +1.0)
- **Player-Grace affinity**: How much Grace likes/trusts the player (-1.0 to +1.0)

Additionally:
- **Trip-Grace affinity**: The current state of their relationship (always declining unless player intervenes)
- **Dramatic tension**: A scalar tracking overall narrative intensity

#### How Player Input Affects State

Every player utterance is processed through a Natural Language Understanding system that classifies it into **discourse acts**:
- Agreeing with Trip, disagreeing with Trip
- Agreeing with Grace, disagreeing with Grace
- Flirting with either character
- Changing the subject
- Being supportive, being confrontational
- Meta-commentary (talking about the situation itself)

Each discourse act modifies affinity values:
- Agreeing with Trip: +0.1 Trip affinity, -0.05 Grace affinity (she notices favoritism)
- Flirting with Grace: +0.15 Grace affinity, -0.2 Trip affinity (he's jealous)
- Being confrontational: -0.1 both affinities, +0.3 dramatic tension

#### Behavioral Response to State

Character behavior is tightly coupled to affinity:
- **High Trip affinity**: He confides in you, shares secrets about Grace
- **Low Trip affinity**: He becomes defensive, redirects conversation, may ask you to leave
- **Escalation**: If both affinities drop below threshold, you're thrown out
- **Drama Manager steering**: At high dramatic tension, the manager selects more confrontational beats regardless of player behavior

#### The Relationship Arc

The system also models the couple's relationship on a continuous arc:
- The default trajectory is **toward separation**.
- Player actions can slow, halt, or reverse this trajectory.
- But the system is biased toward dramatic outcomes—helping the couple requires sustained, strategic intervention.
- Multiple endings are possible based on final affinity states.

#### Key Design Lessons for Signal Decay

> Façade demonstrates that **continuous affinity tracking during conversation** works. Every utterance shifts state. The dual-affinity model (where supporting one character can cost another) creates interesting dynamics for Signal Decay's ensemble cast. The Drama Manager concept—where an orchestrating system selects content based on emotional state—is directly applicable to how Signal Decay selects which topics characters bring up or avoid.

---

### 7. Supergiant Games (Hades/Pyre) — Evolving NPC Relationships

#### Hades: Persistence Through Repetition

Hades solved the problem of "how do NPCs feel alive across hundreds of encounters" in a roguelike structure:

**Affinity System**:
- Each NPC has a heart meter (visible in Codex).
- Gifting Nectar fills hearts (+1 affinity per gift, up to 6 locked hearts).
- After 5-6 Nectars, a "Favor" quest unlocks.
- Completing the Favor unlocks remaining hearts (fillable with Ambrosia).
- Maximum affinity enables romance paths for select characters.

**Dialogue Priority Queue**:
- Each NPC has hundreds of dialogue lines organized by priority.
- High-priority lines (story-critical, first-time events) play before low-priority ones.
- The system tracks which lines have been delivered and never repeats them.
- Contextual lines fire based on game state: "I see you're carrying my keepsake" or "You died to the Hydra again?"

**Reactivity Without Simulation**:
- NPCs don't have internal emotional states that simulate between encounters.
- Instead, they have **response pools** gated by flags and counters.
- The feeling of "evolving relationship" comes from **content exhaustion + flag gates**, not from running emotional simulation.
- But it works because the sheer volume of content (over 300,000 words of dialogue) makes repetition rare.

#### Pyre: Permanent Consequences

Pyre innovated with **irreversible relationship changes**:
- Characters you liberate (free from exile) leave your party permanently.
- Remaining characters react to who you chose to free and who you left behind.
- Characters remember outcomes of previous Rites (competitions):
  - "Those other characters remember the outcome of their last encounter."
- NPC morale visibly shifts based on win/loss streaks.
- Liberation choices create guilt/gratitude dynamics in remaining party members.

**The "No Fail State" Model**:
- Losing a Rite doesn't end the game—it changes the narrative.
- Characters respond to defeat with dialogue that acknowledges failure.
- This creates a system where **all outcomes are emotionally meaningful**, not just victories.

#### Key Design Lessons for Signal Decay

> Hades' **priority queue + flag gate system** is practical for Signal Decay's dialogue generation. Rather than procedurally generating all responses, the system could maintain a priority queue of "things this character wants to say" based on emotional state, relationship level, and unaddressed topics. Pyre's irreversibility principle applies directly: **some things said in conversation cannot be unsaid**, and the character's response to a hurtful comment should permanently shift (even slightly) their disposition.

---

## Part II: Academic Models

---

### 8. The OCC Model (Ortony, Clore & Collins, 1988)

#### Overview

The OCC model is the most widely used framework for computational emotion in AI/games. It defines **22 emotion types** organized by what they're "about":

#### Emotion Taxonomy

**Emotions about Events** (consequences for self or others):
| Category | Positive | Negative |
|----------|----------|----------|
| Self-relevant (actual) | Joy | Distress |
| Self-relevant (prospective) | Hope | Fear |
| Self-relevant (confirmed) | Satisfaction | Fears-confirmed |
| Self-relevant (disconfirmed) | Relief | Disappointment |
| Other-relevant (desirable for other) | Happy-for | Resentment |
| Other-relevant (undesirable for other) | Gloating | Pity/Sorry-for |

**Emotions about Actions** (agency and standards):
| Category | Positive | Negative |
|----------|----------|----------|
| Own actions | Pride | Shame |
| Others' actions | Admiration | Reproach |

**Emotions about Objects** (attraction/aversion):
| Category | Positive | Negative |
|----------|----------|----------|
| Object properties | Love/Like | Hate/Disgust |

**Compound Emotions**:
- Gratitude = Joy + Admiration
- Anger = Distress + Reproach
- Gratification = Joy + Pride
- Remorse = Distress + Shame

#### Appraisal Variables

Each emotion is triggered by appraising a situation against:
- **Desirability**: How much does this event align with my goals?
- **Praiseworthiness**: Does this action conform to my standards?
- **Appealingness**: Do I find this object/person attractive?
- **Likelihood**: How probable is a prospective event?
- **Unexpectedness**: Was this surprising?
- **Proximity**: How psychologically close is this to me?

#### Intensity Modulation

Emotion intensity is determined by:
- Strength of the relevant goal/standard
- Degree of desirability/praiseworthiness
- Proximity (personal relevance)
- Unexpectedness (surprising events intensify emotions)
- Arousal (current baseline activation level)

#### Computational Implementations

The **GAMYGDALA engine** (Popescu et al., 2013) implements OCC for games:
- Game developers define NPC goals and annotate events with goal-relevance.
- GAMYGDALA produces emotions with intensities according to OCC.
- Emotions decay exponentially over time toward neutral.
- Multiple emotions can coexist (a character can feel both pride and anxiety).
- The system supports **social relations**: characters feel emotions about others' events based on liking.

#### Key Design Lessons for Signal Decay

> The OCC model gives Signal Decay a **principled basis for determining which emotion a character feels** in response to player statements. If Oren's goal is "protect my privacy" and the player asks intrusive questions, the appraisal is: low desirability → Distress. If the player compliments his work (aligns with his goal of "be recognized"), the appraisal is: high desirability → Joy, high praiseworthiness → Gratitude. The compound emotion system lets Signal Decay generate nuanced responses: "Oren feels Gratitude (you noticed his work) mixed with Anxiety (now he has to live up to expectations)."

---

### 9. The PAD Model (Mehrabian & Russell, 1974)

#### Overview

The PAD model represents all emotional states as points in a three-dimensional space:

- **P (Pleasure)**: -1.0 (extreme displeasure) to +1.0 (extreme pleasure)
- **A (Arousal)**: -1.0 (total calm/boredom) to +1.0 (extreme excitement/activation)
- **D (Dominance)**: -1.0 (complete submissiveness) to +1.0 (complete control)

#### Mapping Emotions to PAD Space

| Emotion | P | A | D |
|---------|------|------|------|
| Joy | +0.8 | +0.5 | +0.5 |
| Anger | -0.6 | +0.8 | +0.6 |
| Fear | -0.7 | +0.7 | -0.7 |
| Sadness | -0.7 | -0.3 | -0.5 |
| Surprise | +0.2 | +0.8 | -0.2 |
| Disgust | -0.6 | +0.3 | +0.4 |
| Contentment | +0.7 | -0.4 | +0.3 |
| Boredom | -0.3 | -0.7 | -0.3 |
| Anxiety | -0.5 | +0.6 | -0.6 |
| Pride | +0.6 | +0.4 | +0.7 |
| Shame | -0.6 | +0.2 | -0.7 |

#### Advantages for Computational Use

1. **Continuous**: No discrete category boundaries—emotions blend smoothly.
2. **Interpolatable**: You can move between emotional states along smooth trajectories.
3. **Compact**: Only 3 numbers represent the entire emotional state.
4. **Generative**: Any point in the space maps to a describable emotional state.
5. **Decay is natural**: State can drift toward origin (neutral) via simple vector math.

#### Applications in Virtual Characters

- PAD space is used to drive facial animation parameters.
- Characters can have "personality baseline" points they drift toward when unstimulated.
- Events push the state away from baseline; time pulls it back.
- The speed of return to baseline can be personality-dependent (resilient characters return quickly; neurotic characters drift slowly).

#### Limitations

- Dominance is poorly defined and hard to operationalize.
- The model doesn't explain *why* emotions arise (unlike OCC's appraisal framework).
- Cultural differences in emotion mapping are not captured.
- It's a description space, not a generation mechanism.

#### Key Design Lessons for Signal Decay

> PAD gives Signal Decay an efficient **state representation**. Rather than tracking 22 OCC emotions explicitly, the system can maintain a PAD vector per character that drifts based on conversation events. However, PAD alone isn't sufficient for Signal Decay's needs because it doesn't capture relational dimensions (trust, openness) that are conversation-specific. The best approach is a **hybrid**: use PAD-like continuous dimensions but define them around conversational relevance rather than pure affect theory.

---

## Part III: Cross-Cutting Analysis

---

### Decay Patterns Across Systems

| System | Decay Type | Rate | Notes |
|--------|-----------|------|-------|
| The Sims 4 | Binary expiry | Fixed duration | Moodlet present → gone |
| Dwarf Fortress | Displacement | Event-driven | New memories push out old ones |
| RimWorld | Duration + lag | +12/-8 per hour toward target | Asymmetric rise/fall |
| Disco Elysium | None (permanent internalization) | N/A | Thoughts are forever once researched |
| Animal Crossing | Linear daily decay | ~-2/day without contact | Arrested at max friendship |
| Façade | Continuous during interaction | Immediate | Resets between sessions (single-session game) |
| Hades | No simulation between encounters | N/A | Flag-based, not numerical |
| PAD model | Exponential decay toward baseline | Personality-dependent | Mathematical: `state = baseline + (state - baseline) * e^(-λt)` |
| GAMYGDALA | Exponential decay | Configurable λ | Standard emotion engine approach |

### Compounding Patterns

| System | Compounding Model |
|--------|------------------|
| The Sims 4 | Additive (same-type moodlets sum) |
| Dwarf Fortress | Strongest-wins per memory category |
| RimWorld | Additive (all thoughts sum freely) |
| Disco Elysium | Exclusive (slot-limited, choices compete) |
| Animal Crossing | Cumulative (running total of all interactions) |
| OCC/GAMYGDALA | Intensity-modulated by goal importance |

### Behavioral Effect Patterns

| System | How State Affects Behavior |
|--------|--------------------------|
| The Sims 4 | Interaction unlocks/locks, skill modifiers, autonomous actions |
| Dwarf Fortress | Text descriptors at extremes, behavioral overrides (berserk, catatonia) |
| RimWorld | Threshold-based breaks (minor/major/extreme) |
| Disco Elysium | Dialogue option unlocks, skill check modifiers |
| Animal Crossing | Topic/interaction tier unlocks |
| Façade | Content selection (which beats play), tone of delivery |
| Hades | Dialogue pool gating, available romance options |

---

## Part IV: Signal Decay Emotional State Machine Design

---

### Design Philosophy

Signal Decay characters should feel **emotionally real without being gamey**. The player should never see a number, never feel like they're "grinding affinity," and never encounter an obviously mechanical response. Instead, emotional state should manifest as:

- Changes in **response length** (withdrawn characters give shorter answers)
- Changes in **topic willingness** (anxious characters deflect personal questions)
- Changes in **initiative** (happy characters ask questions, share unprompted)
- Changes in **vocabulary and tone** (comfortable Oren uses more slang; guarded Oren is formal)
- Changes in **response latency** (simulated: enthusiastic characters "respond faster")

---

### Dimensional Framework

After analyzing all systems above, Signal Decay should track **six dimensions** per character:

#### 1. Mood (Valence)
- **Range**: -1.0 (deeply unhappy) to +1.0 (joyful)
- **Baseline**: Per-character (Oren: 0.1, slightly melancholic; Sable: -0.2, often wary)
- **Decay**: Exponential toward baseline, half-life = 3 sessions
- **Modified by**: Overall conversation tone, good/bad news, humor success/failure

#### 2. Energy (Arousal)
- **Range**: -1.0 (exhausted/withdrawn) to +1.0 (animated/hyperactive)
- **Baseline**: Per-character (Oren: -0.1, generally calm; Sable: 0.3, tends toward intensity)
- **Decay**: Fast—exponential toward baseline, half-life = 1 session
- **Modified by**: Conversation pace, exciting topics, time of day (simulated)

#### 3. Trust
- **Range**: 0.0 (complete distrust) to 1.0 (full trust)
- **Baseline**: Starting value per character (Oren: 0.3; Sable: 0.15)
- **Decay**: Very slow—linear, -0.02 per day without interaction (trust fades slowly)
- **Growth**: Asymmetric—builds slowly (+0.01 to +0.05 per positive interaction), drops fast (-0.1 to -0.3 for betrayals)
- **Modified by**: Consistency of behavior, keeping "promises," respecting boundaries

#### 4. Openness
- **Range**: 0.0 (completely closed) to 1.0 (fully vulnerable)
- **Baseline**: Per-character (Oren: 0.2; Sable: 0.1)
- **Decay**: Moderate—resets partially between sessions (openness must be rebuilt each conversation)
- **Growth**: Requires trust > 0.4 to exceed openness 0.5; trust > 0.7 for openness > 0.8
- **Modified by**: Reciprocal vulnerability (player sharing → character sharing), safe responses to previous openness

#### 5. Anxiety
- **Range**: 0.0 (perfectly calm) to 1.0 (panicking)
- **Baseline**: Per-character (Oren: 0.4, naturally anxious; Sable: 0.2)
- **Decay**: Moderate—exponential toward baseline, half-life = 2 sessions
- **Growth**: Spikes from threatening topics, pressure, inconsistency
- **Modified by**: Trust inversely correlates (high trust suppresses anxiety spikes)

#### 6. Comfort
- **Range**: 0.0 (deeply uncomfortable) to 1.0 (completely at ease)
- **Baseline**: Per-character (Oren: 0.3; Sable: 0.2)
- **Decay**: Moderate—partially resets between sessions (must be rebuilt)
- **Growth**: Slow accumulation from predictable, warm interactions
- **Modified by**: Familiarity of topics, absence of surprises, humor, validation

---

### State Persistence in localStorage

#### Storage Schema

```javascript
// localStorage key: "signaldecay_character_state_{characterId}"
{
  "characterId": "oren",
  "version": 2,
  "lastInteraction": "2024-03-15T22:30:00Z",
  "dimensions": {
    "mood": { "value": 0.35, "baseline": 0.1 },
    "energy": { "value": -0.1, "baseline": -0.1 },
    "trust": { "value": 0.52, "baseline": 0.3 },
    "openness": { "value": 0.15, "baseline": 0.2 },
    "anxiety": { "value": 0.55, "baseline": 0.4 },
    "comfort": { "value": 0.42, "baseline": 0.3 }
  },
  "memory": {
    "shortTerm": [
      { "event": "player_shared_vulnerability", "emotion": "gratitude", "strength": 0.7, "session": 12 },
      { "event": "player_asked_intrusive_question", "emotion": "anxiety", "strength": 0.4, "session": 12 },
      { "event": "player_made_joke", "emotion": "amusement", "strength": 0.3, "session": 11 },
      { "event": "player_remembered_detail", "emotion": "touched", "strength": 0.6, "session": 11 },
      { "event": "player_validated_feeling", "emotion": "relief", "strength": 0.5, "session": 10 }
    ],
    "longTerm": [
      { "event": "first_real_conversation", "emotion": "hope", "strength": 0.8, "session": 3 },
      { "event": "player_defended_character", "emotion": "loyalty", "strength": 0.9, "session": 7 }
    ],
    "coreTraits": [
      { "trait": "trust_baseline", "shift": +0.05, "cause": "sustained_positive_interactions", "session": 10 }
    ]
  },
  "conversationCount": 12,
  "topicsDiscussed": ["work", "family", "anxiety", "dreams"],
  "boundariesRespected": ["ex_relationship", "father"],
  "boundariesViolated": []
}
```

#### Decay Calculation on Session Start

```javascript
function applyTimeDecay(state) {
  const now = new Date();
  const lastInteraction = new Date(state.lastInteraction);
  const hoursSince = (now - lastInteraction) / (1000 * 60 * 60);
  const daysSince = hoursSince / 24;
  
  // Mood: exponential decay toward baseline, half-life = 72 hours (3 days ≈ 3 sessions)
  const moodLambda = Math.LN2 / 72;
  state.dimensions.mood.value = state.dimensions.mood.baseline + 
    (state.dimensions.mood.value - state.dimensions.mood.baseline) * Math.exp(-moodLambda * hoursSince);
  
  // Energy: fast decay, half-life = 24 hours
  const energyLambda = Math.LN2 / 24;
  state.dimensions.energy.value = state.dimensions.energy.baseline + 
    (state.dimensions.energy.value - state.dimensions.energy.baseline) * Math.exp(-energyLambda * hoursSince);
  
  // Trust: very slow linear decay
  state.dimensions.trust.value = Math.max(
    state.dimensions.trust.baseline,
    state.dimensions.trust.value - (0.02 * daysSince)
  );
  
  // Openness: partial reset toward baseline (decays faster)
  const opennessLambda = Math.LN2 / 36; // 36-hour half-life
  state.dimensions.openness.value = state.dimensions.openness.baseline + 
    (state.dimensions.openness.value - state.dimensions.openness.baseline) * Math.exp(-opennessLambda * hoursSince);
  
  // Anxiety: moderate decay toward baseline
  const anxietyLambda = Math.LN2 / 48;
  state.dimensions.anxiety.value = state.dimensions.anxiety.baseline + 
    (state.dimensions.anxiety.value - state.dimensions.anxiety.baseline) * Math.exp(-anxietyLambda * hoursSince);
  
  // Comfort: moderate decay
  const comfortLambda = Math.LN2 / 48;
  state.dimensions.comfort.value = state.dimensions.comfort.baseline + 
    (state.dimensions.comfort.value - state.dimensions.comfort.baseline) * Math.exp(-comfortLambda * hoursSince);
  
  state.lastInteraction = now.toISOString();
  return state;
}
```

---

### How Conversations Modify State

#### Event Classification

Each player message is classified into **impact categories**:

```javascript
const IMPACT_MAP = {
  // Positive impacts
  "validation": { mood: +0.1, trust: +0.02, openness: +0.05, anxiety: -0.05, comfort: +0.08 },
  "humor_success": { mood: +0.15, energy: +0.1, comfort: +0.1, anxiety: -0.03 },
  "vulnerability_shared": { trust: +0.05, openness: +0.08, comfort: +0.05 },
  "remembered_detail": { trust: +0.03, mood: +0.1, comfort: +0.05 },
  "respectful_boundary": { trust: +0.04, comfort: +0.1, anxiety: -0.08 },
  "genuine_interest": { mood: +0.05, openness: +0.03, energy: +0.05 },
  
  // Negative impacts
  "intrusive_question": { anxiety: +0.15, openness: -0.1, comfort: -0.1, trust: -0.02 },
  "dismissal": { mood: -0.15, trust: -0.05, openness: -0.1, comfort: -0.08 },
  "boundary_violation": { trust: -0.15, anxiety: +0.2, openness: -0.2, comfort: -0.2 },
  "inconsistency": { trust: -0.08, anxiety: +0.1, comfort: -0.05 },
  "pressure": { anxiety: +0.15, comfort: -0.1, openness: -0.05 },
  "humor_failure": { mood: -0.03, comfort: -0.05, energy: -0.05 },
  
  // Neutral/complex
  "topic_change": { energy: +0.02, openness: -0.02 },
  "silence_comfortable": { comfort: +0.05, anxiety: -0.03 },
  "deep_question": { openness: +0.03, anxiety: +0.05, energy: +0.08 }
};
```

#### Personality-Weighted Responses

Each character has **sensitivity multipliers** that scale impacts:

```javascript
const OREN_SENSITIVITY = {
  mood: 1.0,          // Normal mood reactivity
  energy: 0.8,        // Slightly dampened energy swings
  trust: 0.7,         // Slow to trust (multiplier < 1 for gains, > 1 for losses)
  trust_loss: 1.5,    // But quick to lose trust
  openness: 1.2,      // Responsive to openness opportunities
  anxiety: 1.4,       // Highly anxiety-prone (amplified anxiety events)
  comfort: 1.1        // Slightly more responsive to comfort
};

const SABLE_SENSITIVITY = {
  mood: 0.8,          // Dampened mood swings (stoic exterior)
  energy: 1.3,        // High energy reactivity (intense)
  trust: 0.5,         // Very slow to trust
  trust_loss: 2.0,    // Extreme distrust on betrayal
  openness: 0.6,      // Resistant to opening up
  anxiety: 0.7,       // Less visibly anxious
  comfort: 0.9        // Moderate comfort response
};
```

#### Application Function

```javascript
function applyConversationEvent(state, eventType, characterProfile) {
  const impacts = IMPACT_MAP[eventType];
  if (!impacts) return state;
  
  for (const [dimension, delta] of Object.entries(impacts)) {
    let multiplier = characterProfile.sensitivity[dimension] || 1.0;
    
    // Asymmetric trust handling
    if (dimension === 'trust' && delta < 0) {
      multiplier = characterProfile.sensitivity.trust_loss || multiplier;
    }
    
    const adjustedDelta = delta * multiplier;
    const dim = state.dimensions[dimension];
    
    // Apply with clamping
    dim.value = Math.max(-1, Math.min(1, dim.value + adjustedDelta));
    
    // For 0-1 dimensions (trust, openness, comfort), clamp to 0-1
    if (['trust', 'openness', 'comfort', 'anxiety'].includes(dimension)) {
      dim.value = Math.max(0, Math.min(1, dim.value));
    }
  }
  
  // Memory slot management (Dwarf Fortress-inspired)
  updateMemorySlots(state, eventType, impacts);
  
  return state;
}
```

---

### How State Affects Response Generation

#### The Prompt Injection System

Rather than generating responses purely from state, Signal Decay should inject **state-derived personality modifiers** into the LLM prompt:

```javascript
function generateStatePrompt(state, character) {
  const { mood, energy, trust, openness, anxiety, comfort } = state.dimensions;
  
  let stateDirectives = [];
  
  // Mood effects
  if (mood.value > 0.5) {
    stateDirectives.push("You're in a genuinely good mood. Use warmer language, offer more, ask follow-up questions.");
  } else if (mood.value < -0.3) {
    stateDirectives.push("You're feeling low. Responses are shorter, less enthusiastic. You might deflect with humor or go quiet.");
  }
  
  // Energy effects
  if (energy.value > 0.5) {
    stateDirectives.push("You're energized and talkative. Longer responses, more tangents, more exclamation.");
  } else if (energy.value < -0.3) {
    stateDirectives.push("You're tired/low-energy. Shorter sentences. Maybe you mention being tired. Less initiation.");
  }
  
  // Trust effects
  if (trust.value > 0.7) {
    stateDirectives.push("You trust this person significantly. You can share personal details, admit weakness, ask for help.");
  } else if (trust.value < 0.3) {
    stateDirectives.push("You don't really trust this person yet. Keep things surface-level. Deflect personal questions. Stay vague about details.");
  }
  
  // Openness effects
  if (openness.value > 0.6) {
    stateDirectives.push("You're feeling open and vulnerable right now. You might share something you normally wouldn't.");
  } else if (openness.value < 0.2) {
    stateDirectives.push("You're closed off right now. Topic changes, short answers, steering toward safe subjects.");
  }
  
  // Anxiety effects
  if (anxiety.value > 0.7) {
    stateDirectives.push("You're quite anxious. Hedging language, qualifiers ('I guess', 'maybe', 'I don't know'), shorter responses, possible topic avoidance.");
  } else if (anxiety.value > 0.5) {
    stateDirectives.push("You're somewhat uneasy. Subtle signs: more qualifiers, slightly shorter responses, occasional deflection.");
  }
  
  // Comfort effects
  if (comfort.value > 0.7) {
    stateDirectives.push("You're very comfortable with this person right now. Natural language, inside references, relaxed tone.");
  } else if (comfort.value < 0.3) {
    stateDirectives.push("You're not very comfortable. More formal language, fewer contractions, less slang, careful word choice.");
  }
  
  // Compound states (emergent behaviors from dimension combinations)
  if (trust.value > 0.6 && anxiety.value > 0.5) {
    stateDirectives.push("You trust them but you're anxious—you might share your anxiety directly: 'I'm kind of stressed about something...'");
  }
  if (mood.value < -0.2 && trust.value < 0.3) {
    stateDirectives.push("You're in a bad mood and don't trust them. You might be curt or slightly rude. Guard is fully up.");
  }
  if (openness.value > 0.5 && comfort.value > 0.6 && mood.value > 0.2) {
    stateDirectives.push("This is a golden state—you're open, comfortable, and in decent spirits. This is when genuine connection happens. Deeper topics emerge naturally.");
  }
  
  return stateDirectives.join('\n');
}
```

#### Behavioral Mode Thresholds (RimWorld-Inspired)

Like RimWorld's mental break thresholds, Signal Decay characters have behavioral modes:

```javascript
const BEHAVIORAL_MODES = {
  oren: {
    // Withdrawal mode: trust < 0.2 OR (anxiety > 0.8 AND comfort < 0.2)
    withdrawal: (s) => s.trust.value < 0.2 || (s.anxiety.value > 0.8 && s.comfort.value < 0.2),
    
    // Deflection mode: anxiety > 0.6 AND openness < 0.3
    deflection: (s) => s.anxiety.value > 0.6 && s.openness.value < 0.3,
    
    // Warmth mode: mood > 0.3 AND trust > 0.5 AND comfort > 0.5
    warmth: (s) => s.mood.value > 0.3 && s.trust.value > 0.5 && s.comfort.value > 0.5,
    
    // Vulnerability mode: trust > 0.7 AND openness > 0.6 AND anxiety < 0.4
    vulnerable: (s) => s.trust.value > 0.7 && s.openness.value > 0.6 && s.anxiety.value < 0.4,
    
    // Irritability mode: mood < -0.3 AND energy < -0.2
    irritable: (s) => s.mood.value < -0.3 && s.energy.value < -0.2
  }
};
```

---

### Memory System Design (Dwarf Fortress-Inspired)

#### Short-Term Memory (5 slots)

Stores significant emotional events from recent conversations:

```javascript
function updateMemorySlots(state, eventType, impacts) {
  const totalImpact = Object.values(impacts).reduce((sum, v) => sum + Math.abs(v), 0);
  
  const newMemory = {
    event: eventType,
    emotion: dominantEmotion(impacts),
    strength: totalImpact,
    session: state.conversationCount,
    timestamp: new Date().toISOString()
  };
  
  const shortTerm = state.memory.shortTerm;
  
  // Check if same category exists
  const existingIdx = shortTerm.findIndex(m => m.event === eventType);
  if (existingIdx >= 0) {
    // Keep stronger memory
    if (newMemory.strength > shortTerm[existingIdx].strength) {
      shortTerm[existingIdx] = newMemory;
    }
    return;
  }
  
  // If slots available, fill
  if (shortTerm.length < 5) {
    shortTerm.push(newMemory);
    return;
  }
  
  // Otherwise, displace weakest (even if new is weaker—DF behavior)
  const weakestIdx = shortTerm.reduce((minIdx, m, idx, arr) => 
    m.strength < arr[minIdx].strength ? idx : minIdx, 0);
  shortTerm[weakestIdx] = newMemory;
}
```

#### Long-Term Memory Promotion

After every 5 sessions, the strongest short-term memory is promoted:

```javascript
function promoteToLongTerm(state) {
  if (state.conversationCount % 5 !== 0) return;
  if (state.memory.shortTerm.length === 0) return;
  
  // Find strongest short-term memory
  const strongest = state.memory.shortTerm.reduce((best, m) => 
    m.strength > best.strength ? m : best);
  
  // Promote if stronger than weakest long-term, or if space available
  if (state.memory.longTerm.length < 3) {
    state.memory.longTerm.push({...strongest, promoted: true});
  } else {
    const weakestLT = state.memory.longTerm.reduce((minIdx, m, idx, arr) =>
      m.strength < arr[minIdx].strength ? idx : minIdx, 0);
    if (strongest.strength > state.memory.longTerm[weakestLT].strength) {
      state.memory.longTerm[weakestLT] = {...strongest, promoted: true};
    }
  }
  
  // Remove from short-term
  state.memory.shortTerm = state.memory.shortTerm.filter(m => m !== strongest);
}
```

#### Core Trait Mutation (Long-Term Character Drift)

After 15+ sessions, accumulated long-term memories can shift baselines:

```javascript
function evaluateCoreTraitShifts(state) {
  if (state.conversationCount < 15) return;
  if (state.conversationCount % 10 !== 0) return; // Check every 10 sessions
  
  // Analyze long-term memory patterns
  const positiveMemories = state.memory.longTerm.filter(m => 
    ['gratitude', 'joy', 'hope', 'loyalty', 'touched'].includes(m.emotion));
  const negativeMemories = state.memory.longTerm.filter(m =>
    ['anxiety', 'hurt', 'distrust', 'anger', 'withdrawal'].includes(m.emotion));
  
  // If pattern is consistently positive, shift trust baseline up
  if (positiveMemories.length >= 2 && negativeMemories.length === 0) {
    const shift = 0.03;
    state.dimensions.trust.baseline = Math.min(0.8, state.dimensions.trust.baseline + shift);
    state.memory.coreTraits.push({
      trait: 'trust_baseline',
      shift: shift,
      cause: 'sustained_positive_memories',
      session: state.conversationCount
    });
  }
  
  // If pattern is consistently negative, shift anxiety baseline up
  if (negativeMemories.length >= 2 && positiveMemories.length === 0) {
    const shift = 0.05;
    state.dimensions.anxiety.baseline = Math.min(0.9, state.dimensions.anxiety.baseline + shift);
    state.memory.coreTraits.push({
      trait: 'anxiety_baseline',
      shift: shift,
      cause: 'sustained_negative_memories',
      session: state.conversationCount
    });
  }
}
```

---

### Avoiding the "Gamey" Feel

#### Principles from the Research

1. **No visible meters** (unlike Sims, unlike RimWorld). State is invisible.
2. **Behavioral changes are gradual** (like Animal Crossing's tier system, not like Sims' instant emotion switches).
3. **Characters never explicitly reference the system** ("I trust you 73%"). Instead: "I don't usually talk about this, but..."
4. **Asymmetric awareness**: The player should sense something is different but not know exactly what number changed.
5. **Emergent rather than scripted**: The interesting behaviors come from dimension *combinations*, not individual thresholds.

#### Anti-Patterns to Avoid

| Pattern | Why It Feels Gamey | Signal Decay Alternative |
|---------|-------------------|------------------------|
| Explicit affinity notifications | "Trust increased!" | Silent state change, manifested only in next response |
| Gift/grind mechanics | Give 6 Nectars → unlock heart | No guaranteed unlock; trust grows organically from conversation quality |
| Identical thresholds for all characters | Everyone opens up at Trust=0.7 | Each character has unique threshold profiles |
| Instant state changes | One message = dramatic mood shift | Lag system (RimWorld): actual state moves gradually toward target |
| Predictable response patterns | "Say X → always get Y reaction" | Noise/randomness in thresholds; same input at different states yields different outputs |
| Visible progress tracking | Heart meters, friendship bars | Progress is felt through new topics, new vulnerability, new language |

#### Natural Behavioral Signals

Instead of meters, the player perceives state through:

- **Response length**: Comfortable, trusting Oren writes 3-4 sentences. Guarded Oren writes 1.
- **Question-asking**: High-openness characters ask the player questions. Low-openness characters only respond.
- **Topic introduction**: High-comfort characters bring up new subjects unprompted.
- **Emoji/punctuation use**: High-mood characters use more expressive punctuation. Low-energy characters trail off...
- **Callback frequency**: High-trust characters reference past conversations. Low-trust characters don't acknowledge history.
- **Vulnerability depth**: The *content* of what they share scales with state. Low trust = surface facts. High trust = fears, hopes, contradictions.

---

### The RimWorld Lag Applied to Signal Decay

Rather than instantly jumping to new values, Signal Decay should implement **intra-conversation lag**:

```javascript
function applyIntraSessionLag(currentState, targetState, messagesThisSession) {
  // State moves toward target at a rate proportional to messages exchanged
  const lagFactor = Math.min(1.0, messagesThisSession * 0.1); // Full convergence after ~10 messages
  
  for (const dim of Object.keys(currentState.dimensions)) {
    const current = currentState.dimensions[dim].value;
    const target = targetState.dimensions[dim].value;
    
    // Asymmetric: negative changes manifest faster than positive (you notice hurt immediately)
    const rate = target < current ? lagFactor * 1.5 : lagFactor * 0.8;
    
    currentState.dimensions[dim].value = current + (target - current) * rate;
  }
  
  return currentState;
}
```

This means:
- If the player says something hurtful at message 2, the character doesn't fully "feel" it until message 4-5.
- If the player is being warm and supportive, the character warms up even more slowly.
- This prevents whiplash and creates the feeling of emotional mass/inertia.

---

### Complete State Machine Flow

```
SESSION START
    │
    ├─ Load state from localStorage
    ├─ Apply time-based decay (exponential toward baselines)
    ├─ Check for long-term memory promotion (if threshold sessions reached)
    ├─ Generate session-start context prompt from current state
    │
    ▼
CONVERSATION LOOP
    │
    ├─ Player sends message
    ├─ Classify message into impact category (LLM-assisted or rule-based)
    ├─ Calculate target state change (IMPACT_MAP × sensitivity multipliers)
    ├─ Apply intra-session lag (gradual convergence)
    ├─ Update memory slots if event is significant
    ├─ Evaluate behavioral mode thresholds
    ├─ Generate state prompt injection for response
    ├─ Character responds (LLM generates with state context)
    ├─ Response itself may modify state (character sharing = increased openness)
    │
    ▼
SESSION END
    │
    ├─ Promote strongest short-term memory if cycle threshold met
    ├─ Evaluate core trait shifts if session count threshold met
    ├─ Save state to localStorage
    ├─ Increment conversation count
    │
    ▼
BETWEEN SESSIONS
    │
    ├─ State is frozen in localStorage
    ├─ On next session start, time-decay is calculated from lastInteraction timestamp
    └─ The gap between sessions becomes meaningful: 
       "where have you been?" vs. "hey, welcome back" vs. no comment
```

---

### Character Profiles: Oren Example

```javascript
const OREN_PROFILE = {
  id: "oren",
  name: "Oren",
  
  // Starting baselines (who Oren IS without player influence)
  baselines: {
    mood: 0.1,       // Slightly melancholic default
    energy: -0.1,    // Calm, slightly introverted
    trust: 0.3,      // Cautious but not hostile
    openness: 0.2,   // Default guardedness
    anxiety: 0.4,    // Naturally anxious person
    comfort: 0.3     // Moderate starting comfort
  },
  
  // How much each dimension reacts to events
  sensitivity: {
    mood: 1.0,
    energy: 0.8,
    trust: 0.7,        // Slow to trust
    trust_loss: 1.5,   // Quick to distrust
    openness: 1.2,     // Responsive when conditions are right
    anxiety: 1.4,      // Anxiety-prone
    comfort: 1.1
  },
  
  // What topics/situations trigger each dimension
  triggers: {
    anxiety_increase: ["direct_questions_about_past", "career_pressure", "social_expectations", "being_compared"],
    anxiety_decrease: ["validation", "shared_silence", "humor", "normalized_struggle"],
    trust_increase: ["remembered_detail", "no_judgment", "reciprocal_sharing", "respected_boundary"],
    trust_decrease: ["pushed_too_hard", "told_others", "inconsistent_behavior", "minimized_feelings"],
    openness_increase: ["safe_follow_up", "related_personal_share", "named_specific_emotion"],
    openness_decrease: ["changed_subject_abruptly", "advice_giving_unsolicited", "comparison_to_others"]
  },
  
  // Behavioral mode descriptions for prompt injection
  modes: {
    withdrawal: {
      condition: (s) => s.trust.value < 0.2 || (s.anxiety.value > 0.8 && s.comfort.value < 0.2),
      prompt: "You've withdrawn. One-word answers. You might say 'I should go' or just not respond to the emotional content. Redirect to something impersonal."
    },
    deflection: {
      condition: (s) => s.anxiety.value > 0.6 && s.openness.value < 0.3,
      prompt: "You're deflecting. Self-deprecating humor, changing the subject, asking about them instead. 'Anyway, what about you?' energy."
    },
    warmth: {
      condition: (s) => s.mood.value > 0.3 && s.trust.value > 0.5 && s.comfort.value > 0.5,
      prompt: "You're warm and present. You ask follow-up questions. You share small personal details unprompted. You use their name. Inside jokes if applicable."
    },
    vulnerable: {
      condition: (s) => s.trust.value > 0.7 && s.openness.value > 0.6 && s.anxiety.value < 0.4,
      prompt: "You're being genuinely vulnerable. You might share something you've never told anyone. Your language is less performative, more hesitant but honest. Sentence fragments. Real feelings."
    },
    irritable: {
      condition: (s) => s.mood.value < -0.3 && s.energy.value < -0.2,
      prompt: "You're irritable and low-energy. Curt responses. Might snap slightly then immediately feel guilty about it. 'Sorry. I just... yeah. Sorry.'"
    }
  },
  
  // Decay configuration
  decay: {
    mood: { type: "exponential", halfLifeHours: 72 },
    energy: { type: "exponential", halfLifeHours: 24 },
    trust: { type: "linear", ratePerDay: -0.02, floor: "baseline" },
    openness: { type: "exponential", halfLifeHours: 36 },
    anxiety: { type: "exponential", halfLifeHours: 48 },
    comfort: { type: "exponential", halfLifeHours: 48 }
  }
};
```

---

### Calibration and Tuning

#### Testing Framework

The emotional state machine needs calibration through playtesting scenarios:

| Scenario | Expected Behavior | Dimensions Tested |
|----------|-------------------|-------------------|
| Player is consistently kind for 10 sessions | Oren opens up gradually, shares personal topic by session 8-10 | Trust, Openness growth rates |
| Player pushes a boundary early | Oren pulls back noticeably for 2-3 sessions | Trust loss, Anxiety spike, Comfort crash |
| Player disappears for 2 weeks | Oren acknowledges absence subtly, slightly more guarded | Trust decay, Comfort reset |
| Player alternates kind/harsh | Oren stays guarded, high anxiety, inconsistency penalty | Trust stagnation, Anxiety sustained |
| Player shares vulnerability first | Oren reciprocates with small vulnerability if trust > threshold | Openness gating on trust |
| Player only talks about surface topics | Oren stays pleasant but distant, never deepens | Openness plateau, Trust plateau |

#### Tuning Parameters Summary

| Parameter | Low Value Effect | High Value Effect | Oren Default |
|-----------|-----------------|-------------------|--------------|
| Trust growth rate | Walls up forever | Too easy to befriend | 0.02/positive event |
| Trust loss rate | No consequences for harm | One mistake = relationship over | 0.1/violation |
| Anxiety half-life | Anxiety vanishes between sessions | Anxiety compounds forever | 48 hours |
| Openness gate (trust required) | Opens up to strangers | Never opens up | Trust > 0.4 |
| Mood asymmetry (hurt vs. help) | Positive bias (unrealistically forgiving) | Negative bias (doom spiral) | 1.5x negative weight |
| Memory slot count | Forgets everything | Remembers every slight | 5 short-term, 3 long-term |

---

## Part V: Synthesis & Recommendations

---

### What to Steal from Each System

| Source | Principle | Signal Decay Application |
|--------|-----------|------------------------|
| The Sims 4 | Additive stacking, duration-based expiry | Short-term emotional events stack within a session |
| Dwarf Fortress | Memory slots with competitive displacement, personality mutation | The entire memory architecture; core trait shifts over time |
| RimWorld | Asymmetric lag (mood ≠ mood target), threshold-based behavioral modes | Intra-session lag + behavioral mode thresholds |
| Disco Elysium | Thought maturation, hidden counters counting everything | Delayed emotional processing; "everything counts" philosophy |
| Animal Crossing | Daily decay, tier-based behavior unlocks, visible relationship evidence | Between-session trust decay; behavioral tiers as design targets |
| Façade | Real-time affinity tracking during conversation, dual-character dynamics | Per-message state modification; ensemble emotional dynamics |
| Hades | Priority queue dialogue, flag-gated content, persistent narrative across cycles | Topic priority system; "never exactly repeat" principle |
| Pyre | Irreversible consequences, emotional permanence | Some interactions permanently shift character baselines |
| OCC Model | Appraisal-based emotion generation, goal-relative evaluation | Classifying player inputs by character-goal relevance |
| PAD Model | Continuous dimensional state space, exponential decay toward baseline | The dimensional architecture itself; decay mathematics |

---

### Implementation Priority

1. **Phase 1 (MVP)**: Six dimensions + exponential decay + basic event classification + localStorage persistence
2. **Phase 2**: Memory slots (short-term/long-term) + behavioral mode thresholds
3. **Phase 3**: Personality sensitivity multipliers + intra-session lag + compound state detection
4. **Phase 4**: Core trait mutation (baseline drift) + long-term memory promotion
5. **Phase 5**: Cross-character dynamics (talking about Oren with Sable affects both states)

---

### Open Questions for Playtesting

1. **Decay rate calibration**: How quickly should trust fade between sessions? Too fast = punishing players who have lives. Too slow = no consequence for neglect.
2. **Detection accuracy**: Can the LLM reliably classify player messages into impact categories, or does this need rule-based fallback?
3. **State injection format**: Should the state prompt be explicit ("your trust is 0.52") or narrative ("you're cautiously warming up to them")?
4. **Recovery mechanics**: If a player badly damages trust, is there a path back? How long and difficult should repair be?
5. **Transparency calibration**: How much should the player be able to intuit about the system? Zero awareness makes it feel random. Full awareness makes it feel gamey.

---

### Final Design Maxim

> "The best emotional state machine is one the player never thinks about but always feels."

The goal is not for players to optimize their way through trust gates. The goal is for them to talk to Oren like a person—and for Oren to respond like one. The state machine is the invisible scaffolding that makes that possible. It should be felt in the difference between talking to Oren on day one and Oren after twenty conversations. It should be felt in the weight of silence after something careless is said. It should be felt in the warmth of a character who remembers what you told them three weeks ago.

The machine serves the feeling. Not the other way around.

---

## References & Further Reading

- Ortony, A., Clore, G. L., & Collins, A. (1988). *The Cognitive Structure of Emotions*. Cambridge University Press.
- Mehrabian, A., & Russell, J. A. (1974). *An Approach to Environmental Psychology*. MIT Press.
- Clore, G. L., & Ortony, A. (2013). "Psychological Construction in the OCC Model of Emotion." *Emotion Review*, 5(4), 335-343.
- Popescu, A., Broekens, J., & van Someren, M. (2013). "GAMYGDALA: An Emotion Engine for Games." *IEEE Transactions on Affective Computing*.
- Mateas, M., & Stern, A. (2003). "Integrating Plot, Character and Natural Language Processing in the Interactive Drama Façade." *TIDSE 2003*.
- Mateas, M., & Stern, A. (2005). "Structuring Content in the Façade Interactive Drama Architecture." *AIIDE 2005*.
- Adam, C., Herzig, A., & Longin, D. (2009). "A Logical Formalization of the OCC Theory of Emotions." *Synthese*, 168(2), 201-248.
- Broekens, J., Hudlicka, E., & Bidarra, R. (2016). "Emotional Appraisal Engines for Games." *Handbook of Digital Games and Entertainment Technologies*.
- Dwarf Fortress Wiki. "Memory (thought)" and "Feelings." https://dwarffortresswiki.org
- RimWorld Wiki. "Mood" and "Mental Break." https://rimworldwiki.com
- Disco Elysium Wiki. "Thought Cabinet." https://discoelysium.wiki.gg

---

*Document compiled for Signal Decay development. Target: emotional authenticity over mechanical transparency.*
