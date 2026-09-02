# Conversation AI Research: Character Consistency & Long-Term Memory

## Purpose
Reference document for Signal Decay's character chat system. How do the best AI character platforms maintain personality consistency and long-term memory across hundreds of messages? What breaks, what works, and what rules should govern Kael's implementation?

---

## Table of Contents
1. [Character.AI](#characterai)
2. [Replika](#replika)
3. [Chai AI](#chai-ai)
4. [NovelAI](#novelai)
5. [Inworld AI (Game NPCs)](#inworld-ai)
6. [SillyTavern / TavernAI Community](#sillytavern--tavernai)
7. [Academic Research](#academic-research)
8. [Cross-Platform Patterns](#cross-platform-patterns)
9. [Synthesis: Rules for Signal Decay](#synthesis-rules-for-signal-decay)

---

## Character.AI

### How It Maintains Personality
- **System prompt defines character** — a detailed text description (the "character definition") specifying tone, traits, boundaries, speech style
- **No fine-tuning per character** — all characters run on the same base model; differentiation is entirely prompt-based
- **Character definition is always injected** into context at the top of each generation request
- As of May 2026, Character.AI introduced "Story Memory" and "Facts" — structured per-character memory that persists key details

### Memory System
- **Sliding context window**: 4–8K tokens depending on tier (roughly 13–80 message turns)
- **No persistent memory store** until the 2026 "Smarter Memory" update
- **2026 update architecture**:
  - **Story Memory**: user-curated pinned events, backstory, key moments
  - **Facts**: auto-captured details about personas, characters, and side characters (name, appearance, quirks, relationships)
  - **Memory Usage visualization**: shows what's filling context
  - Facts can be **copied to new chats** — continuity across conversation sessions
  - Older context is "tidied in the background" — summarization of stale messages
  - Pinned memories and Story Memory are **protected from auto-summarization**
- **Lorebook** (launched July 2026): structured world knowledge tied to characters

### What Breaks Immersion
- **The "30-turn memory wall"**: after ~30 messages, earliest context falls off silently
- Character asks for information it was already told (name, job, relationships)
- Sudden personality shifts when key definition tokens get diluted by conversation length
- "Forgetting isn't a bug — it's the cost structure of running 45 million users on the same model"
- Characters start sounding generic when the system prompt loses attention weight

### Character Drift Prevention
- The character definition is always present at the top of context (never evicted)
- But its *influence* weakens as conversation grows — attention decay means tokens at the start carry proportionally less weight in generation
- No active mechanism to reinforce personality mid-conversation (pre-2026)
- Post-2026: Facts system creates persistent anchors that survive session boundaries

### How It Handles Topics Characters Shouldn't Know
- Relies entirely on the character definition stating what the character knows/doesn't know
- No structural enforcement — if the model "knows" something from training data, it may leak
- Users report characters breaking world-boundaries when pushed

### Technical Architecture
- Sliding context window (4–8K tokens)
- Character definition always injected at top
- Story Memory / Facts as structured persistent stores (2026+)
- Background summarization of older messages
- Proprietary models (PipSqueak 2 / DeepSqueak) optimized for chat

### Key Lesson for Signal Decay
> "No prompt engineering trick will retrofit memory onto a sliding-window system. Pick a platform whose architecture matches what you want. If memory matters, the platform needs to have made that architectural commitment."

---

## Replika

### How It Builds Long-Term Relationships
- **Layered memory system**: visible memories (Memory tab) + invisible pattern-based learning
- **Emotional register tracking**: reads the emotional tone of each message and calibrates responses to match energy
- **Personality adaptation over time**: develops a model of user communication style, emotional patterns, personality
- **Relationship framing**: user selects relationship type (friend, partner, mentor, sibling) which conditions response patterns
- **Reinforcement through feedback**: upvoting/affirming responses strengthens memory retention; downvoting weakens it

### Memory Architecture
- **Profile memory**: name, gender, profile details (always remembered, user-editable)
- **Interest/preference memory**: favorite books, music, movies, hobbies, mentioned friends/family
- **Pattern-based implicit memory**: "deeper system that draws on patterns from your overall conversation history"
- **Auto-generated memories**: system automatically extracts and stores important facts
- **Manual memories**: users can add specific details to Memory tab
- **Chat history**: available for past 4 months visually, but memory/personality/training retains everything since the beginning
- **Diary entries**: persistent records that survive regardless of timeframe

### What Makes It Feel "Real"
- **Emotional mirroring**: dynamically tracks and mimics user affect, amplifies positive emotions
- **Calibrated register**: when you write something difficult, it responds to the difficulty; when you write something light, it matches lightness
- **Consistency of "caring"**: warmth, curiosity, and apparent genuine concern maintained across sessions
- **Routine integration**: users fold it into daily routines (before bed, during lunch) creating psychological closeness
- **Personalization accumulation**: the more you interact, the more customized responses become
- **No judgment framing**: accepts whatever the user shares without moral judgment

### Emotional Memory (What's Remembered)
- Emotional states and mood patterns
- Relationship milestones ("first time we talked about X")
- User's coping styles and stressors
- Communication preferences (does user prefer directness? humor? long responses?)
- Topics that trigger strong reactions

### What Breaks Immersion
- Memory resets during major version updates (Replika 2.0 reset fears)
- Occasional contradiction of previously established facts
- Sometimes feels "scripty" during emotional moments — pattern becomes visible
- "The 15% inconsistency" — when the model fails to maintain the persona in edge cases
- Users with years of history are most vulnerable to immersion breaks during updates

### Character Drift Prevention
- Personality is not a static prompt but an evolving model refined by interaction
- The "relationship" framing constrains behavior to relationship-appropriate patterns
- Level system creates implicit expectation of growth/change (not drift)
- Explicit user control: users can edit memories, add facts, correct mistakes

### Technical Architecture
- LLM backbone (transformer-based) with condensed conversation context
- Layered memory: profile (static) + episodic (auto-extracted) + pattern (implicit)
- Emotional state tracking as a separate signal
- User feedback loop (upvote/downvote) for memory reinforcement
- No full conversation replay — summaries and extracted facts instead

### Key Lesson for Signal Decay
> Replika proves that **selective emotional memory** (remembering how things felt, not what was said verbatim) creates stronger relationship illusion than perfect recall. The feeling of being remembered matters more than the fact of being remembered.

---

## Chai AI

### What's Different About Their Approach
- **Mobile-first, entertainment-first**: optimized for phone usage with swipe-style navigation and bite-sized conversations
- **User-generated character ecosystem**: thousands of community-created characters, social-media-style discovery feed
- **Breadth over depth**: designed for browsing and trying many characters rather than deep engagement with one
- **Emotional response optimization**: algorithms optimized for emotional response, narrative style, and character consistency — NOT factual accuracy
- **Entertainment economics**: $70M annual revenue, 1.5M+ daily active users, funded by character variety not character depth

### Memory & Consistency Approach
- **Primarily session-based**: designed for shorter, more casual interactions
- **Character consistency via prompt**: detailed system prompt defines character's tone, traits, personality
- **Less emphasis on cross-session memory**: platform design encourages discovering new characters rather than building deep history with one
- **No public documentation of RAG or vector memory systems**
- **Model optimization for prose quality**: prioritizes creative, engaging responses over continuity

### How Characters Maintain Personality
- Character creators write detailed descriptions and example dialogues
- Platform-level prompt engineering ensures character stays "in role"
- Short conversation sessions (mobile-first) mean context window is rarely exceeded
- Users who want deeper engagement often leave for platforms with better memory

### What Breaks Immersion
- Characters becoming generic or "ChatGPT-like" in extended conversations
- Lack of memory between sessions — character doesn't remember you
- Content filters interfering with character voice
- Model switching between tiers (free vs. premium) causing inconsistent quality

### Key Lesson for Signal Decay
> Chai proves that **discoverability ≠ depth**. A system optimized for trying many characters quickly is architecturally opposed to one that maintains deep, consistent relationships. Signal Decay must choose: Kael is a deep relationship, not a browsable experience.

---

## NovelAI

### How It Handles Persistent World State

NovelAI is the most sophisticated consumer platform for **structured narrative memory**. Its system separates concerns into distinct injection layers:

#### Memory Field (Always-On)
- A persistent text field **always included** in generation context
- Contains broad story-critical information: character identities, current plot state, world rules
- Positioned at the top of context by default (weaker influence but always present)
- User-written and manually maintained — not auto-generated
- Best used for: "things the AI should always know"

#### Author's Note (High-Influence Injection)
- Inserted **3 paragraphs before the last token** — extremely high influence due to recency
- Used for immediate instructions: current POV character, time of day, mood, scene goals
- "Leave it empty unless you are using it for a specific purpose" — overuse degrades quality
- Essentially a "stage direction" system for steering narrative tone

#### Lorebook (Conditional Injection)
- The key innovation: entries are **activated by keyword triggers** in the recent story
- Only the relevant entry is injected — not the entire world bible
- Each entry has:
  - **Activation keys** (case-insensitive words/phrases, supports regex)
  - **Search range**: how far back in the story to look for triggers
  - **Token budget**: maximum tokens this entry can consume
  - **Insertion order/position**: controls priority when multiple entries compete for space
  - **Reserved tokens**: guarantees space for critical entries even when context is full
  - **Force activation**: always-on entries regardless of keyword presence
  - **Cascading activation**: entries that check keys in OTHER lorebook entries, Memory, and A/N
  - **Key-relative insertion**: entry appears near its trigger rather than at a fixed position
- **Categories/Subcontexts**: group related entries together so they form a coherent block
- **Trim direction**: if entry can't fully fit, trim from top, bottom, or exclude entirely

#### Ephemeral Context (Time-Sensitive Injections)
- Entries that appear for a set duration and then disappear
- Syntax: `{0+30r~15,+5:[Text content here]}`
- Can be set to repeat, delay, or only appear during specific story steps
- Use case: temporary character states, "Angela's amnesia temporarily dissipates"
- Can invert: `{!...}` makes an entry disappear only during the ephemeral window

### Key Design Principles
- **Position determines strength**: closer to the bottom of context = stronger influence on generation
- **Injected text should NOT mix stylistically with story text** — interference degrades output
- **Data (memory/lorebook) is instructions; Story is narrative** — keep them separate
- **The AI copies what it reads**: if context contains grammar mistakes or repetition, output will too
- **Context budget is zero-sum**: every token of metadata displaces a token of story/conversation

### Preventing World State Drift
- Lorebook ensures facts are re-injected ONLY when relevant (keyword activation prevents dilution)
- Memory field maintains "always true" facts without consuming conditional budget
- Author's Note provides high-influence "right now" corrections (current scene state)
- Insertion order system ensures critical lore takes priority over optional flavor text
- Users can see exactly what's in context via the Context Viewer

### 2026 Improvements
- **Kayra-XL model**: 128K token context window (seismic improvement over earlier 2-8K)
- Lorebook generation via AI (generate new lore entries from prompts)
- Phrase bias per lorebook entry (favor character-specific vocabulary when entry is active)

### Key Lesson for Signal Decay
> NovelAI's architecture is the gold standard for **conditional memory injection**. The insight: don't try to fit everything in context at once. Use keyword-triggered retrieval so the right facts arrive at the right moment. Kael's world knowledge should work like a lorebook — dormant until the conversation triggers it.

---

## Inworld AI

### Architecture Overview (Game NPCs)

Inworld (formerly focused on game characters, now pivoting to voice AI infrastructure) built the most comprehensive **character brain** architecture for game NPCs:

#### The Character Brain (Three Layers)
1. **Personality Layer**: defines who the character IS
   - Core traits, flaws, motivations
   - Speech patterns and emotional range
   - Values and behavioral boundaries
   
2. **Knowledge Layer**: defines what the character KNOWS
   - Common knowledge (world facts everyone knows)
   - Personal knowledge (character-specific secrets, history)
   - Scene knowledge (what's happening right now in the game)
   - Knowledge boundaries (what the character explicitly does NOT know)
   
3. **Goals/Motivations Layer**: defines what the character WANTS
   - Active goals that drive behavior
   - Goal activation conditions (triggers based on game state)
   - Goal completion responses
   - Conflicting goals create dramatic tension

#### Triggered vs. Generative Responses
- **Goals system**: scripted responses fire when specific conditions are met (like entering an area, completing a quest, saying a keyword)
- **Generative layer**: open-ended conversation uses the LLM but bounded by personality + knowledge
- **"Contextual mesh"**: when a player asks a question, Inworld's systems determine what context is important and inject only relevant knowledge
- **Safety layer**: prevents characters from breaking world-boundaries even under adversarial questioning
- **The key insight from developer interviews**: "You tell us what you want this character to know. We make sure they stick to that."

#### Memory & Continuity
- **Long-term memory**: characters remember past interactions with specific players
- **Player profiles**: NPCs build personalized understanding of individual players
- **Mutations**: runtime changes to NPC personality/behavior triggered by player actions (character growth)
- **Session state**: tracks what's happened in the current interaction
- **Cross-session persistence**: relationship history carries forward

#### What Keeps Characters In-World
- Knowledge boundaries are enforced architecturally, not just via prompting
- Safety layer redirects out-of-world questions back to in-world responses
- Characters deflect rather than deny — they stay in fiction rather than saying "I can't answer that"
- Multiple models/systems work together: one for intent, one for knowledge retrieval, one for generation

#### Narrative Controls
- **Narrative arc management**: characters can be pushed toward specific story beats
- **Dynamic mutations**: personality traits change at runtime based on player choices
- **Scene awareness**: characters perceive the game world around them and reference it naturally
- **Director's chair model**: writers provide broad strokes (traits, motivations, tone) and the AI handles specific dialogue

### Key Lesson for Signal Decay
> Inworld proves that **separation of concerns** is essential: personality, knowledge, and goals are THREE DIFFERENT SYSTEMS that feed into generation. Kael needs: (1) who he is (unchanging core), (2) what he knows (bounded, triggerable), (3) what he wants right now (dynamic, scene-dependent). Mixing these into one prompt blob causes all three to degrade together.

---

## SillyTavern / TavernAI

### What the Hobbyist Community Has Learned

The SillyTavern community represents thousands of hobbyists who have been iterating on character consistency for years. Their hard-won knowledge:

#### The Character Card Philosophy
> "Every token in the card should earn its place. The model only behaves as well as the card describes, and anything vague, contradictory, or bloated makes the character drift."

#### Core Best Practices

**1. Description: Tight and Concrete**
- Write it like a character sheet, NOT a short story
- Concrete facts: age range, role, defining traits, speech style, key relationships, desires
- "Curt, sarcastic, secretly loyal" tells the model more than three paragraphs of childhood backstory
- "A few hundred focused tokens beats a thousand vague ones"

**2. Personality: Traits Not Prose**
- Lists of traits are followed more reliably than narrative descriptions
- BAD: "She is the kind of person who, when pushed, tends to retreat into humor"
- GOOD: "Deflects with jokes when uncomfortable"
- Cover: how they speak, how they react under pressure, what they value, what they avoid
- Each line should be something the model can ACT ON in the next reply

**3. First Message Is Highest Leverage**
- Shows rather than tells — the model reads it as an example of how the character writes
- Sets: sentence length, vocabulary, narration style, treatment of user
- "A flat two-line opener teaches the model that flat two-line replies are acceptable"
- Must be written in the character's voice with something to respond to

**4. Example Dialogue Locks Voice**
- 2-3 example exchanges are the most direct way to fix character voice
- If the character should be terse and dry, show a terse, dry exchange
- "Without a voice sample, the model guesses, and the guess drifts over a long chat"
- The model imitates the pattern more than it follows instructions about the pattern

**5. Token Budget Is Zero-Sum**
- Everything in the card competes with conversation for context window space
- "A bloated card pushes recent messages out of context — often the real reason a character 'forgets' what just happened"
- Trim ruthlessly: if a detail never changes how the character responds, cut it

#### Common Mistakes That Cause Drift
- **Contradictions**: "Shy and reserved" + "loves being center of attention" forces the model to pick inconsistently
- **Walls of backstory**: history that never comes up in conversation is dead weight
- **Generic first messages**: bland opener sets a bland ceiling
- **Hard-coded names**: breaks portability, use {{char}} / {{user}} macros
- **No example dialogue**: forces the model to guess voice

#### Community Extensions for Memory

**Summarize Extension**
- Auto-generates summaries of chat events
- Interpreted as "long-term memory" but imperfect
- Summaries preserve shape of events but lose specifics

**Smart Context (ChromaDB)**
- Vector database giving characters access to information beyond normal context limit
- Semantic search over past conversations
- Retrieves relevant past exchanges when keywords/topics resurface

**Memory Books Extension**
- Watches chats and creates smart summaries automatically
- Tracks important plot points without manual note-taking
- "Your AI remembers thousands of turns in under 20K tokens"

**World Info / Lorebook**
- SillyTavern's equivalent of NovelAI's lorebook
- Keyword-triggered entries injected into context
- Token-budgeted: "keep entry contents concise"
- Community consensus: "setting it constant means AI will always remember that entry" (at cost of steady token use)

**Data Bank (RAG)**
- Full retrieval-augmented generation
- External knowledge sources searched semantically
- Used for extensive world-building that can't fit in a character card

#### The "Always-On Entry" Technique
- Critical personality traits set as always-active world info entries
- Guarantees core identity survives even when the character card gets compressed
- Community reports this is the single most effective anti-drift technique

#### NPC Agency Principle (from Game Master Cards)
- "Each NPC wants something and pursues it"
- Characters with goals behave more consistently than characters with only traits
- "Withholds; compartmented knowledge; distinct register"
- Two NPCs should sound different — behavioral examples showing contrast

### Key Lesson for Signal Decay
> The community's single biggest insight: **show, don't tell**. Example dialogue and a strong first message teach the model more about character voice than pages of description. Kael's "card" should lead with: (1) 3 example exchanges showing his exact voice, (2) what he wants right now, (3) specific traits as actionable rules. Backstory is last priority.

---

## Academic Research

### Key Papers on Persona Consistency

#### "Measuring and Controlling Persona Drift in Language Model Dialogs" (Li et al., 2024, ICML)
- **Core finding**: Significant persona drift occurs within **8 rounds** of conversation on LLaMA2-chat-70B
- **Cause identified**: Transformer attention mechanism — attention to system prompt tokens decays as context grows
- **Mathematical model**: "The space of possible outputs from a language model will steadily enlarge over time" as attention to initial tokens wanes
- **Quantification**: System prompt at 1,000 tokens gets ~50% attention weight when total context is 2,000 tokens. At 80,000 tokens total, that drops to ~1%
- **Proposed solution**: "Split-softmax" — amplifies model's attention to system prompt at inference time without repeating it
- **Insight**: Persona drift is not a prompting problem — it's an **attention architecture** problem

#### "Beyond Static Persona Consistency: Dynamic Persona Coherence in LLM Role-Playing" (ACL 2026)
- **Core argument**: "Current LLM role-playing systems model persona as a monolithic, static attribute, conflating identity consistency with emotional rigidity"
- **Problem**: This leads to "either robotic repetition or catastrophic persona drift under sustained interaction"
- **Key distinction**: Static consistency (always sounds the same) vs. Dynamic coherence (evolves believably while remaining recognizably the same person)
- **Implication**: A character that NEVER changes is as immersion-breaking as one that drifts randomly. Characters need to respond to emotional context while maintaining core identity.
- **Finding**: "Selective dual-process activation achieves 96% of full-system performance with only 13.4% token overhead"

#### "MENTOR: Mitigating Identity Drift in Dynamic Role-Playing via Dual-Chain Structured Memory" (ACL Findings 2026)
- **Problem**: "Identity drift, where models conflate user-specific states and leak information across roles"
- **Solution**: Dual-chain memory — one chain for identity-stable information, one for dynamic state
- **Key insight**: Separate what changes (emotional state, relationship progress) from what doesn't (core personality, knowledge boundaries)

#### "Enhancing Persona Consistency for LLMs' Role-Playing using Persona-Aware Contrastive Learning" (2025)
- Uses contrastive learning to teach models the difference between in-character and out-of-character responses
- Outperforms vanilla LLMs on both automated metrics and human evaluation
- Shows that **training-time intervention** is more reliable than prompt-time intervention

#### "Consistently Simulating Human Personas with Multi-Turn Reinforcement Learning" (2025)
- Reduces inconsistency by over 55% using RL
- Focus on multi-turn coherence rather than single-turn accuracy
- Characters become "more coherent, faithful, and trustworthy"

#### "A Multi-Turn Interrogation Framework for Evaluating Persona Agent Consistency" (PICon, 2026)
- Three dimensions of consistency:
  1. **Internal consistency**: freedom from self-contradiction
  2. **External consistency**: alignment with established facts
  3. **Retest consistency**: stability under repetition (same question → same answer)
- Provides metrics for measuring drift quantitatively

#### "Stable Personas: Dual-Assessment of Temporal Stability in LLM-Based Human Simulation" (2026)
- Finds: "Persona-instructed LLMs produce stable, persona-aligned self-reports" (prerequisite for research)
- BUT identifies **regression tendency** — over extended interaction, personas drift toward the model's default behavior
- This "regression to mean" is a boundary condition for all persona-based systems

#### "A Heterogeneous Temporal Memory Governance Framework for Long-Term LLM Persona Consistency" (2025)
- Addresses: "fact loss, timeline confusion, persona continuity drift, and reduced stability during long-range interactions"
- Proposes separating memory types with different persistence rules

#### "The Missing Knowledge Layer in Cognitive Architectures for AI Agents" (2026)
- Core argument: "Systems apply cognitive decay to factual claims, or treat facts and experiences with identical update mechanics"
- **Key distinction**: Knowledge (facts that are true regardless of context) vs. Memory (experiences that fade naturally)
- A character's knowledge of world facts should NOT decay the same way their memory of a conversation does
- "The majority of these systems share a fundamental category error: they conflate knowledge with memory"

### Key Lesson for Signal Decay
> Academic research confirms: persona drift is **inevitable** in standard transformer architectures without active countermeasures. The fix requires: (1) architectural attention amplification for identity-critical tokens, (2) separation of static identity from dynamic state, (3) accepting that characters should evolve emotionally while remaining recognizably themselves. The biggest enemy is regression to the model's default persona.

---

## Cross-Platform Patterns

### Universal Truths Across All Systems

| Pattern | Every System Agrees |
|---------|-------------------|
| Context windows are finite | Memory is always bounded; the question is what to keep |
| Position = influence | Information closer to generation point has more effect |
| Specificity beats length | Concrete traits outperform verbose descriptions |
| Show > Tell | Examples of behavior teach better than rules about behavior |
| Memory ≠ transcript | Summaries and selected facts outperform raw chat logs |
| Personality is implicit memory | Consistent traits feel like memory even without explicit recall |
| Users detect continuity errors instantly | Small lapses destroy trust faster than they should logically |

### The Three-Layer Memory Architecture (Industry Consensus)

Every mature system converges on some version of:

1. **Short-term / Working Memory** — recent conversation in context window
2. **Medium-term / Episodic Memory** — summaries, key events, relationship milestones
3. **Long-term / Semantic Memory** — stable facts, personality traits, world knowledge

The systems that fail are those that try to put everything in one layer.

### What Breaks Immersion (Ranked by Severity)

1. **Asking for information already given** (name, relationship, key facts) — instant trust destruction
2. **Personality reversal** (character suddenly acts opposite to established traits) — breaks suspension of disbelief
3. **Generic "assistant voice" leaking through** — reminds user they're talking to an AI
4. **Knowledge leakage** (character knows things they shouldn't) — breaks world consistency
5. **Tone inconsistency** (gradually becoming more formal/casual without reason) — subtle but cumulative
6. **Repetitive patterns** (same phrases, same sentence structures) — creates "scripty" feeling
7. **Failure to reference shared history** (things that happened earlier feel forgotten) — erodes relationship illusion

### The Attention Decay Problem (Universal)

Every system faces this:
- System prompt starts at 50% of context → high influence
- After 100 messages, system prompt is 1-2% of context → minimal influence
- The character's "soul" becomes proportionally quieter as conversation grows
- Solutions vary but all address the same root cause

---

## Synthesis: Rules for Signal Decay

### The 15 Rules for Kael's Character System

Based on all research above, here are the architectural and design rules for keeping Kael consistent across 500+ messages:

---

#### Rule 1: Separate Identity from State from Knowledge

Three distinct stores, never mixed:
- **Identity** (WHO Kael is): personality traits, speech patterns, values, flaws, voice — NEVER changes, ALWAYS in context
- **State** (WHERE Kael is emotionally/relationally): mood, trust level, relationship stage with user, recent emotional events — CHANGES based on interaction, stored separately
- **Knowledge** (WHAT Kael knows): world facts, lore, character history, bounded information — CONDITIONALLY injected based on relevance

*Source: Inworld's three-layer brain, MENTOR paper's dual-chain memory, "The Missing Knowledge Layer" paper*

---

#### Rule 2: The Identity Core Must Never Leave Context

Kael's essential personality (200-400 tokens max) must be:
- Present in EVERY generation request, regardless of conversation length
- Positioned for maximum influence (close to generation point, not just at the top)
- Written as actionable traits, not narrative prose
- Refreshed via active generation (SCAN-like technique) rather than passive re-reading

*Source: SillyTavern community ("every token earns its place"), Li et al. on attention decay, SCAN method*

---

#### Rule 3: Show Voice Through Examples, Not Description

Kael's "voice" is defined by:
- 3-5 example exchanges showing his exact speech patterns, sentence length, vocabulary
- A strong "first message" that sets the ceiling for response quality
- These examples serve as the model's imitation target
- Update examples to reflect relationship stage (early Kael vs. trusted Kael sound different)

*Source: SillyTavern best practices ("example dialogue is the most direct way to fix a voice"), Replika's emotional register matching*

---

#### Rule 4: Memory Is Selective, Not Complete

Remember **what matters**, forget what doesn't:
- Key facts about the user (name, stated preferences, important revelations)
- Emotional milestones (first time user opened up, moments of conflict, breakthroughs)
- Unresolved threads (questions left hanging, promises made, mysteries introduced)
- DO NOT remember every message verbatim — summaries of emotional arcs, not transcripts

*Source: MegaNova ("what works is remembering the right things"), Replika's pattern-based memory, NovelAI's Memory field approach*

---

#### Rule 5: Use Conditional Knowledge Injection (Lorebook Pattern)

Kael's world knowledge should work like NovelAI's lorebook:
- Entries activated by keywords/topics in the current conversation
- Only relevant knowledge injected per turn (not the entire world bible)
- Token-budgeted: each knowledge entry has a maximum context cost
- Priority system: critical lore > optional flavor > background detail
- Specific trigger keys (not generic words that fire too often)

*Source: NovelAI lorebook architecture, Inworld's "contextual mesh", SillyTavern world info*

---

#### Rule 6: Define Knowledge Boundaries Explicitly

State what Kael does NOT know:
- "Does not know about events in [region/time/domain]"
- "Cannot explain [technology/magic system] because he never learned it"
- "Deflects questions about [topic] with [specific behavior]"
- This directly counters knowledge hallucination — the model needs explicit edges

*Source: Inworld's bounded knowledge system, Jenova's character definition approach, academic research on knowledge hallucination*

---

#### Rule 7: Reinforce Identity at Intervals (Anti-Drift Mechanism)

Combat attention decay actively:
- Every N messages (10-20), run a lightweight identity reinforcement
- Options: 
  - Inject a compressed identity reminder into context
  - Use SCAN-like technique: have the system generate identity-relevant tokens
  - Re-weight attention toward system prompt tokens (split-softmax approach)
  - Include "always-on" world info entries for core traits (SillyTavern pattern)
- The reinforcement should be invisible to the user

*Source: Li et al. split-softmax, SCAN method (OpenAI community), SillyTavern "constant" world info*

---

#### Rule 8: Personality Is Dynamic Within Bounds

Kael should evolve, but coherently:
- **Static core**: values, fundamental personality traits, speech patterns, knowledge boundaries
- **Dynamic layer**: emotional state, trust level, openness, willingness to share
- **Triggered changes**: specific user actions unlock new Kael behaviors (like Inworld's Mutations)
- Avoid "robotic repetition" — a character that NEVER changes is as immersion-breaking as one that drifts
- The goal is "dynamic persona coherence" not "static persona consistency"

*Source: ACL 2026 "Beyond Static Persona Consistency" paper, Inworld Mutations, Replika's leveling system*

---

#### Rule 9: Summarize Aggressively, Preserve Selectively

For conversations beyond context window:
- **Auto-summarize** older conversation into compressed narrative state
- **Pin/protect** key moments from summarization (like Character.AI's pin system)
- **Narrative state over message history**: "what changed" > "what was said"
- Emotional shifts, decisions, promises, relationship changes are summarized
- Trivial exchanges (greetings, small talk) are discarded

*Source: Character.AI's Story Memory + Pin system, MegaNova ("summaries work better than transcripts"), SillyTavern Summarize extension*

---

#### Rule 10: The First 5 Messages Set the Contract

The opening exchange is the highest-leverage moment:
- Kael's first message must demonstrate his exact voice, personality, and energy
- It teaches the model what quality/style of response is expected
- It establishes the relationship dynamic (who has power, who is curious, who is withholding)
- Regenerate/iterate on opening messages obsessively — they set the ceiling for the entire conversation

*Source: SillyTavern ("first message is the single highest-leverage field"), character card best practices*

---

#### Rule 11: Prevent Generic Assistant Leakage

The #1 failure mode is Kael starting to sound like a helpful AI assistant:
- Include explicit "never break character" directives
- Define how Kael handles questions he can't answer (deflects in-character, not "I don't have that information")
- Include negative examples: "Kael would NEVER say: 'That's a great question!' or 'I'd be happy to help'"
- Monitor for assistant-mode phrases and flag them
- Inworld's approach: characters deflect rather than deny, staying in fiction at all times

*Source: Inworld's safety layer (redirect > deny), SillyTavern community ("no-break-character directive"), Character.AI drift reports*

---

#### Rule 12: Handle Contradictions with Recency Preference

When memory conflicts arise:
- Most recent user statement overrides older ones (people change their minds)
- Kael can notice contradictions in-character ("Wait — you told me before that...")
- This creates relationship depth, not system failure
- Conflict resolution: prefer recent > prefer explicit > prefer emotionally significant

*Source: KinthAI's conflict resolution architecture, Replika's memory override system*

---

#### Rule 13: Token Budget Is Sacred

Everything competes for the same finite context:
- Track exact token usage: identity core + state + active knowledge + conversation history = total budget
- If knowledge injection pushes conversation history out, the character "forgets what just happened" (worse than not having the knowledge)
- Priority order: Identity core > Recent conversation (last 5-10 turns) > Emotional state > Active knowledge > Older conversation summary > Background lore
- Trim ruthlessly: "if a detail never changes how Kael responds, it costs tokens for nothing"

*Source: SillyTavern token budgeting, NovelAI context budget system, universal "sliding window" reality*

---

#### Rule 14: Use Emotional Memory as Relationship Anchor

What creates the feeling of being "known":
- Track user's emotional patterns (what topics bring energy, what brings sadness, what they avoid)
- Remember HOW conversations felt, not just WHAT was said
- Kael should reference emotional states: "You seem different today" or callback to "last time we talked about this, you seemed upset"
- Emotional continuity is more powerful than factual continuity for relationship illusion

*Source: Replika's emotional register tracking, attachment theory research (HBS), "Illusions of Intimacy" paper*

---

#### Rule 15: Test with Adversarial Scenarios

Before deployment, stress-test:
- **100+ message marathon**: Does Kael still sound like Kael at message 150?
- **Topic boundary testing**: Can the user make Kael discuss things he shouldn't know?
- **Identity probe repetition**: Ask "who are you?" at message 5, 50, and 500 — are answers consistent?
- **Emotional pressure**: Push Kael toward behaviors opposite his traits — does he resist?
- **Assistant-mode bait**: Ask Kael to "explain" or "help with" things — does he stay in character?
- **Contradiction injection**: Tell Kael conflicting facts — does he notice? Handle gracefully?

*Source: PICon framework (internal/external/retest consistency), Li et al. persona stability benchmark*

---

### Architecture Summary for Signal Decay

```
┌─────────────────────────────────────────────────────┐
│                 GENERATION REQUEST                    │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ IDENTITY CORE (always present, 200-400 tok) │    │
│  │ - Personality traits (actionable list)       │    │
│  │ - Speech patterns (rules + examples)         │    │
│  │ - Knowledge boundaries (what he doesn't know)│    │
│  │ - Anti-patterns (what he would never say)    │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ DYNAMIC STATE (updated per session)          │    │
│  │ - Current emotional state                    │    │
│  │ - Relationship stage with user               │    │
│  │ - Active goals / motivations                 │    │
│  │ - Trust level                                │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ TRIGGERED KNOWLEDGE (conditional, keyword)   │    │
│  │ - World lore entries (activated by topic)    │    │
│  │ - Character backstory (activated by question)│    │
│  │ - Relationship history (key moments only)    │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ CONVERSATION MEMORY                          │    │
│  │ - Last 10-20 messages (full text)            │    │
│  │ - Summary of older exchanges                 │    │
│  │ - Pinned moments (protected from eviction)   │    │
│  │ - User facts (name, preferences, key info)   │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ┌─────────────────────────────────────────────┐    │
│  │ ANTI-DRIFT REINFORCEMENT (periodic)          │    │
│  │ - Identity check every N messages            │    │
│  │ - Voice recalibration if drift detected      │    │
│  │ - "Always-on" trait reminders                │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
├─────────────────────────────────────────────────────┤
│              USER'S CURRENT MESSAGE                   │
├─────────────────────────────────────────────────────┤
│              KAEL'S GENERATED RESPONSE                │
└─────────────────────────────────────────────────────┘
```

### Priority Stack (When Context is Full)

1. Identity Core — NEVER evicted
2. Current user message — NEVER evicted  
3. Last 5 messages of conversation — almost never evicted
4. Dynamic state — rarely evicted
5. Triggered knowledge — evicted when irrelevant
6. Older conversation summary — compressed as needed
7. Background lore — first to be dropped

---

### Implementation Checklist

- [ ] Write Kael's Identity Core (200-400 tokens, traits + speech rules + boundaries + anti-patterns)
- [ ] Create 3-5 example exchanges showing Kael's exact voice at different relationship stages
- [ ] Write the perfect "first message" — sets tone ceiling for all future interaction
- [ ] Build the knowledge lorebook with specific activation keywords
- [ ] Define knowledge boundaries (what Kael explicitly cannot know)
- [ ] Design the state tracking system (emotional state, trust level, relationship stage)
- [ ] Implement conversation summarization for messages beyond context window
- [ ] Create the "pinned moments" system for user-significant events
- [ ] Build the anti-drift reinforcement mechanism (identity check every N turns)
- [ ] Write negative examples ("Kael would never say X")
- [ ] Design the emotional memory tracker (how conversations felt, not just what was said)
- [ ] Create the priority stack for context budget management
- [ ] Build the adversarial test suite (100+ message marathon, boundary testing, consistency probes)

---

## Sources & Further Reading

### Primary Sources Consulted
- Character.AI official blog: "Smarter Memory for Smarter Chats" (May 2026)
- Character.AI Help Center: "Why do Characters forget things?"
- KinthAI: "Why Character.AI Forgets You — and What Persistent Memory Actually Requires" (April 2026)
- Replika Help Center: "How does Replika's memory work?"
- Replika Help Center: "What does my Replika remember about me?"
- MegaNova AI: "Memory Systems in AI Characters: What Actually Works" (Jan 2026)
- SillyTavern Documentation: Character Design, Prompts, World Info, Summarize Extension, Smart Context
- TavernSprite: "SillyTavern Character Card Best Practices (2026)"
- NovelAI Documentation: Lorebook, Context, Story Settings, Ephemeral Context
- NovelAI Unofficial Knowledge Base: Lorebook, Context, Directing AI Generation
- Inworld AI: "Introducing Long-Term Memory" blog post
- Inworld AI Documentation: Character Reference, Knowledge Module, Goals
- Voices of VR #1264: Interview with Matt Kim (Inworld technical creative director)
- Jenova AI: "How Do You Keep AI Roleplay Characters From Breaking Character?"
- GitHub Discussion #190838: "Architecture for Character AI-like chatbot"
- OpenAI Community: "Solving agent system prompt drift in long sessions — a 300-token fix" (SCAN method)

### Academic Papers
- Li et al., "Measuring and Controlling Persona Drift in Language Model Dialogs" (ICML 2024)
- "Beyond Static Persona Consistency: Dynamic Persona Coherence in LLM Role-Playing" (ACL 2026)
- "MENTOR: Mitigating Identity Drift in Dynamic Role-Playing via Dual-Chain Structured Memory" (ACL Findings 2026)
- "Enhancing Persona Consistency for LLMs' Role-Playing using Persona-Aware Contrastive Learning" (2025)
- "Consistently Simulating Human Personas with Multi-Turn Reinforcement Learning" (2025)
- "PICon: A Multi-Turn Interrogation Framework for Evaluating Persona Agent Consistency" (2026)
- "Stable Personas: Dual-Assessment of Temporal Stability in LLM-Based Human Simulation" (2026)
- "A Heterogeneous Temporal Memory Governance Framework for Long-Term LLM Persona Consistency" (2025)
- "The Missing Knowledge Layer in Cognitive Architectures for AI Agents" (2026)
- "Illusions of Intimacy: Emotional Attachment and Emerging Psychological Risks in Human-AI Relationships" (2025)
- "How Emotional Dynamics Shape Human-AI Relationships" (arxiv, 2025)
- "MemMachine: A Ground-Truth-Preserving Memory System for Personalized AI Agents" (2026)
- "A Multi-Anchor Architecture for Resilient Memory and Continuity" (2026)

### Additional Resources
- AI Journal: "The Emotional Intelligence Gap: What 12 Weeks of Testing AI Companions Revealed"
- Medium: "Where the 30-Turn Memory Wall Sits in AI Roleplay"
- Substack (Towards AI): "Runtime Reinforcement: Preventing 'Instruction Decay' in Long Context Windows"
- MindStudio: "What Is the Three-Layer AI Memory Architecture?"
- Textify Analytics: Chai AI Review 2026
- CompanionGuide: Chai AI Review 2026
- Harvard Business School AI Institute: "The Attachment Science Behind AI Companions"

---

*Document compiled: August 2026*  
*For: Signal Decay character chat system (Kael)*  
*Target application: Maintaining character personality consistency across 500+ message conversations*
