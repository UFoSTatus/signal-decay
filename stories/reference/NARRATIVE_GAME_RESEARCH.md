# NARRATIVE GAME MECHANICS RESEARCH
## Signal Decay — Design Reference Document

---

*A comprehensive analysis of narrative mechanics in investigation games, interactive fiction, and memory-recovery systems. Written in game design analysis tone — like a GDC talk you'd actually want to attend.*

**Last Updated:** August 2026  
**Purpose:** Inform the design of Signal Decay's memory recovery chat system  
**Scope:** 12 games/systems analyzed for stealable design patterns

---

## Table of Contents

1. [Her Story](#1-her-story)
2. [Return of the Obra Dinn](#2-return-of-the-obra-dinn)
3. [Disco Elysium](#3-disco-elysium)
4. [Telling Lies / Immortality](#4-telling-lies--immortality)
5. [Outer Wilds](#5-outer-wilds)
6. [Paradise Killer](#6-paradise-killer)
7. [The Forgotten City](#7-the-forgotten-city)
8. [Neurocracy](#8-neurocracy)
9. [ARGs (I Love Bees, Year Zero, Cicada 3301)](#9-args)
10. [Bandersnatch](#10-bandersnatch)
11. [AI Chat Systems](#11-ai-chat-systems)
12. [Real Hypnotic Regression Therapy](#12-real-hypnotic-regression-therapy)
13. [Signal Decay Design Principles — Synthesis](#13-signal-decay-design-principles)

---

## 1. Her Story

**Developer:** Sam Barlow (2015)  
**Platform:** PC/iOS  
**GDC Awards:** Innovation, Best Narrative, Best Handheld/Mobile (2016)

### Core Mechanic (One Sentence)

Players type search queries into a police database and receive video clips where the interviewee speaks those exact words — limited to five results per search — constructing a non-linear detective narrative entirely through self-directed keyword exploration.

### What Makes It Feel Intelligent vs. Gamey

Her Story's genius is that it has **no verbs except search**. There's no "use item on thing," no dialogue trees, no highlighted clues. The player's only action is typing words — the same action they'd perform on any real computer. This collapses the distance between "playing a game" and "actually investigating."

The five-result limit per search is the invisible hand that prevents brute-forcing. You can't type "the" and get everything. You must think laterally — *what specific word would she say in the context I'm looking for?* This transforms every search into a hypothesis. You're not clicking highlighted objects; you're forming theories about language.

The game never tells you what it knows. It never says "you've found 60% of the clips." There's no completion meter. The narrative exists as a cloud of fragments, and the player's understanding is the only progress that matters. As Sam Barlow described it: the game is "a police interview game where you view a video database by searching against the words the interviewee speaks."

The critical insight: **the player becomes a co-creator of the storyline**. Each keyword entered leads to new insights, mirroring real investigative processes and making the discovery of each narrative piece feel earned and significant. The search mechanism actively involves players in narrative construction.

### How It Handles Wrong Answers

There are no wrong answers in Her Story. Every search returns *something* — even a "bad" search teaches you vocabulary, introduces characters, reveals timeline context. The system is designed so that lateral exploration is always productive. You cannot fail; you can only be slower or less thorough.

The game supports multiple interpretations of the central mystery. Barlow has been deliberately ambiguous about whether there's a single "correct" solution. The game ends when the player feels satisfied — a radical trust in the audience. There's a moment where the game asks "Do you understand?" and the player types their answer. That's it. That's the ending.

### How Progress Is Tracked Without Explicit UI

- **The Session Desktop:** A fictional old computer interface. The database checker shows how many clips you've tagged/viewed, but it's presented as a diegetic tool, not a progress bar.
- **Tagging System:** Players can tag clips and add them to a personal "session," creating their own organizational structure.
- **No Map, No Percentage:** The game deliberately withholds any sense of "completion." You don't know how many clips exist. You don't know what you're missing. This creates a lingering unease that mirrors real investigation — *what don't I know that I don't know?*

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Five-result limit** | Cap how much any single probe reveals; force lateral thinking |
| **Search-as-hypothesis** | Every chat message the player sends is a theory about what happened |
| **No wrong answers** | Every interaction reveals *something*; bad questions still teach vocabulary |
| **Player-directed pacing** | The player decides when they're "done" understanding |
| **Diegetic interface** | The chat app IS the investigation tool; no meta-UI sitting on top |
| **Ambiguity as design** | Allow multiple valid interpretations of recovered memories |
| **Vocabulary breadcrumbing** | Each clip teaches words that unlock other clips — each memory should teach concepts that unlock other memories |

---

## 2. Return of the Obra Dinn

**Developer:** Lucas Pope (2018)  
**Platform:** PC/Mac/Consoles  
**Awards:** BAFTA for Game Design, IGF Grand Prize

### Core Mechanic (One Sentence)

Using a magical pocket watch that replays the moment of death for each of 60 crew members, the player must deduce the identity, cause of death, and killer for every soul aboard a ghost ship — with confirmations delivered only in batches of three correct answers.

### What Makes It Feel Intelligent vs. Gamey

Obra Dinn strips detective work down to **pure observation and deduction**: no inventory puzzles, no dialogue trees, just your ability to notice details and make connections across time. The game's deductive structure works on multiple registers simultaneously:

- **Visual identification:** Recognizing faces across different death scenes
- **Linguistic clues:** Overhearing names, nationalities, ranks in audio snippets
- **Spatial reasoning:** Who was standing where, near whom
- **Social deduction:** Crew manifest tells you roles and nationalities; matching those to observed behavior
- **Process of elimination:** Four Chinese sailors, but you only hear three names — the fourth must be the remaining one

The game makes you feel smarter than you are. Lucas Pope called it "a whirlwind sort of deduction" — the systems guide you toward answers without ever explicitly pointing. The crew manifest, the sketches, the chapter structure — all of these are constraints that narrow possibility space without feeling like handholding.

The difficulty indicator system is subtle but brilliant: each portrait in the crew sketch has one, two, or three dots representing identification complexity. This signals "you're not supposed to get this yet" without spelling out why.

### How It Handles Wrong Answers

The **Rule of Three** is Obra Dinn's most important design contribution to the detective genre:

- The game only confirms correct answers in sets of three. You must get three complete fates (identity + cause of death + killer) perfectly correct before any are locked in.
- This prevents brute-forcing: you can't just cycle through names for one person because you don't know which of your current entries are correct.
- When three fates ARE confirmed, any previously-entered fates that WEREN'T confirmed are implicitly flagged as incorrect — creating negative information.
- The system creates a rhythm: long periods of uncertainty punctuated by satisfying confirmation chimes.

**The exploit (and its lesson):** Players eventually learn they can use the Rule of Three as an elimination tool — cycling through options for ambiguous identities (like the Chinese sailors who are never named) until a batch confirms. Pope acknowledged this as an acceptable trade-off: the game is "highly playable" because process of elimination and reviewing earlier deaths with fresh eyes will usually give you everything needed. You're never left feeling dumb.

### How Progress Is Tracked Without Explicit UI

- **The Ledger:** A diegetic in-world book that fills in as you make deductions. Confirmed fates get stamped permanently. Unconfirmed ones remain in pencil — editable.
- **Chapter Structure:** Deaths are grouped into narrative chapters (scenes on the ship). As you confirm fates within a chapter, the chapter's "completion" becomes visible naturally.
- **The Difficulty Dots:** One, two, or three dots per portrait signal relative challenge without being a progress bar.
- **No Percentage Completion:** The game simply has confirmed fates and unconfirmed fates. The proportion is visible but never announced.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Batch confirmation** | Don't confirm individual memories immediately; wait until a constellation of related truths are established |
| **Negative information from non-confirmation** | When one thing IS confirmed, things that AREN'T confirmed become useful data |
| **Multi-register deduction** | Memories should be identifiable through multiple channels — emotional, temporal, sensory, relational |
| **Difficulty signaling without spoiling** | Indicate "this memory is harder to access" without saying why |
| **Diegetic record-keeping** | The journal/log is part of the fiction, not a UI overlay |
| **Triangulation requirement** | Force players to cross-reference multiple sources before a memory "locks in" |
| **Feeling smarter than you are** | Design so that guided deduction feels like genius insight |

---

## 3. Disco Elysium

**Developer:** ZA/UM (2019)  
**Platform:** PC/Consoles  
**Awards:** BAFTA for Best Narrative, four BAFTA wins total, multiple Game Awards

### Core Mechanic (One Sentence)

Twenty-four internal "skills" — representing facets of the detective's psyche from Electrochemistry to Inland Empire — interject as voiced characters in dialogue, offering perceptions, urges, and deductions that the player can choose to follow or ignore, with outcomes determined by visible dice rolls.

### What Makes It Feel Intelligent vs. Gamey

Disco Elysium's internal voices are the most significant innovation in RPG dialogue since BioWare invented the dialogue wheel. Each skill is a CHARACTER with its own agenda:

- **Inland Empire** feeds delusions and mystical hunches
- **Authority** demands you assert dominance
- **Empathy** makes you feel what others feel (sometimes too much)
- **Shivers** delivers urban prophecy — the city speaking through you
- **Electrochemistry** begs you to drink, smoke, and seek pleasure
- **Half Light** triggers fight-or-flight at inappropriate moments

These voices INTERJECT without being asked. They appear as colored text in dialogue, offering observations the player didn't request. This creates the sensation of a fractured mind — thoughts arriving unbidden, competing for attention. The player doesn't choose to "use" a skill; the skill speaks WHEN IT WANTS TO (if its level is high enough).

The **Thought Cabinet** extends this further: abstract concepts can be "internalized" — spending in-game time to research a thought, which then grants permanent mechanical effects and unlocks new dialogue options. There are 53 thoughts total; an average playthrough internalizes about 16. Thoughts represent ideologies, fixations, regrets, and breakthroughs. They're the game's way of mechanizing *rumination* — the way ideas take hold of you.

### How It Handles Wrong Answers

Disco Elysium has two types of checks:

**White Checks:** Can be retried after improving the relevant skill. Failure is temporary; it means "you're not ready yet."

**Red Checks:** One chance only. But — and this is the critical insight — **failing a Red Check doesn't lock you out of content. It moves the story in a different direction.** Failing can lead to equally interesting (sometimes MORE interesting) outcomes.

The game's dice are visible. You watch them roll. You see the modifiers. This transparency transforms failure from "the game said no" into "the odds were against me." The player feels agency even in failure because they SAW the math.

Furthermore, failure in Disco Elysium is often *hilarious*. Trying to kick a door down and hurting yourself. Trying to be intimidating and being pathetic instead. The game treats failure as content, not as a barrier. Failed checks have dedicated, written responses that are as rich as successes.

**Morale/Health as stakes:** Taking psychic damage from embarrassment (losing Morale) or physical damage from exertion (losing Health) means failure has COST, but the cost is elegant — not "game over, reload," but "you're depleted, more vulnerable to the next setback."

### How Progress Is Tracked Without Explicit UI

- **The Thought Cabinet:** Researching thoughts takes in-game time. Having them installed permanently changes your character. This IS your progress — not a meter, but a transformation.
- **Case Notes:** A diegetic casebook organizes clues by investigation threads. But it's always incomplete, always messy.
- **Time of Day:** The world changes as hours pass. Conversations happen at specific times. Progress is environmental.
- **Relationship Shifts:** NPCs remember what you said. Their dialogue changes. Progress is social.
- **Skill Interjections:** As you level skills, new voices begin speaking. Progress is perceptual — you literally perceive more of the world.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Internal voices as characters** | The AI therapist's "modes" should feel like distinct approaches, not menu options |
| **Unbidden interjections** | The system should volunteer observations the player didn't ask for |
| **Failure as content** | Wrong answers in regression should yield rich, interesting responses — not dead ends |
| **Visible mechanics (dice)** | Show the player WHY something worked or didn't — build trust through transparency |
| **Thought Cabinet (rumination)** | Ideas that "install" and change subsequent interactions |
| **Psychic damage from embarrassment** | Pushing too hard on a painful memory should have felt cost |
| **Time as resource** | Rushing through sessions should have different outcomes than patient exploration |
| **White vs. Red checks** | Some memories can be re-approached; others have a single window |

---

## 4. Telling Lies / Immortality

**Developer:** Sam Barlow / Half Mermaid (2019 / 2022)  
**Platform:** PC/Consoles/iOS

### Core Mechanic (One Sentence)

**Telling Lies** drops players into the middle of one-sided video calls that can be scrubbed forward and backward like physical tape, with the central verb being "rewinding to understand context," while **Immortality** replaces text search with a visual match-cut system — clicking on objects, faces, or symbols within paused footage to jump associatively between 200+ clips spanning three decades.

### What Makes It Feel Intelligent vs. Gamey

**Telling Lies — The Scrub Mechanic:**

Sam Barlow describes his design process starting with: (1) a feeling to communicate, then (2) a metaphor that captures it. For Telling Lies:
- **The feeling:** holding onto memories of a failed relationship — sensory and emotional beats wrapped in hindsight
- **The metaphor:** surveillance — being so immersed in someone's private life that you feel you know them intimately

The scrubbing mechanic transforms usually-passive video viewing into an expressive act. Players scrub like a DJ scrubs a record — slowing to focus on an expression, rewinding to rewatch a moment, skimming through sequences to reach narrative beats. You're dropped into scenes *in media res* — at the exact moment a character speaks your search word — and must determine: *What's happening right now? Who is this? How did they get here? Who are they talking to?*

The one-sided phone calls are a masterful constraint. You only see and hear ONE participant. The other side must be inferred from pauses, reactions, context. This creates inference puzzles without any explicit puzzle mechanics.

**Immortality — The Match Cut:**

Immortality evolves from text search to VISUAL search. When paused on a frame, players hover over objects and faces. When the cursor changes to an eye icon, clicking performs a "match cut" — jumping to another clip containing a similar visual element. Click on a cross necklace; jump to another scene with a cross. Click on a face; jump to another appearance of that face.

This creates an associative, dream-like navigation. You're not thinking in words anymore; you're thinking in images, symbols, connections. The game leverages the language of cinema itself — the match cut IS the fundamental building block of film editing — and hands it to the player as their primary tool.

The hidden layer: by scrubbing backward through certain clips, players discover "subverted footage" — scenes that are literally hidden INSIDE the film, visible only when you reverse through them frame by frame. This rewards the close attention that the scrubbing mechanic demands.

### How It Handles Wrong Answers

Neither game has "wrong answers" in the traditional sense:

- **Telling Lies:** Every search yields footage. Unproductive searches still show you SOMEONE'S conversation, teaching you about the cast of characters. The game can't be "lost."
- **Immortality:** Every match cut takes you somewhere. Even "random" navigation accrues understanding. The game's hidden horror narrative surfaces whether you're looking for it or not — you'll stumble into the subverted footage eventually.

The key insight: **these games design for productive disorientation.** Being confused is the intended state. Slowly resolving that confusion IS the gameplay.

### How Progress Is Tracked Without Explicit UI

- **Telling Lies:** A bookmarking system lets you save moments. A grid view shows all clips you've discovered (with thumbnails). But there's no "story progress" indicator.
- **Immortality:** A grid of all clips fills in as you discover them. Color-coding by film. But the game's actual narrative — the hidden horror beneath the films — has no progress tracking at all. You either see it or you don't.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Dropped in media res** | Don't start memories from the beginning; drop players into the emotional climax and let them work backward |
| **One-sided information** | The player only has THEIR side of a recovered memory — the other person's perspective must be inferred |
| **Scrubbing as exploration** | Allow players to "scrub" through a memory — fast-forward through mundane parts, linger on emotional beats |
| **Visual/associative navigation** | Clicking on emotional anchors (objects, phrases, sensations) to jump between related memories |
| **Hidden layers reward close attention** | Deeper truths visible only to players who engage closely with the material |
| **Productive disorientation** | Confusion is not failure — it's the intended state that slowly resolves |
| **Surveillance intimacy** | The player should feel uncomfortably intimate with the subject's inner life |

---

## 5. Outer Wilds

**Developer:** Mobius Digital (2019)  
**Platform:** PC/Consoles  
**Awards:** BAFTA Best Game, Nebula Award for Game Writing

### Core Mechanic (One Sentence)

In a 22-minute time loop where a supernova destroys everything, the player's ONLY progression is knowledge — there are no stat upgrades, unlockable abilities, or equipment gates; what changes between loops is exclusively what the player (not the character) understands about the solar system.

### What Makes It Feel Intelligent vs. Gamey

Outer Wilds is the purest implementation of "knowledge as progression" ever made in a video game. From the moment you begin, you have every tool you will ever have: a spaceship, a scout launcher, a signalscope, a translator, and a jetpack. Nothing is unlocked. Nothing is upgraded. The final area of the game is technically accessible in your very first loop — IF you knew what to do.

This creates a game that's structured like a Metroidvania, except the "keys" that unlock previously inaccessible areas are pieces of knowledge. You learn that a certain planet has a specific tidal pattern. You learn that a cave entrance is only accessible during a 30-second window. You learn the significance of coordinates you read on a wall. The game world is the same every loop — what changes is you.

The philosophical implication is profound: **the game can never be replayed.** Once you know the answers, the game is "solved" permanently. There's no New Game+ that resets your understanding. This makes it feel precious, unrepeatable, and deeply personal.

The solar system operates on clockwork — every planet changes predictably over the 22-minute cycle. Sand flows from one twin planet to another. A black hole grows. A volcano erupts at minute 12. Players must learn these patterns through observation, not through tutorials.

### How It Handles Wrong Answers

There are no "wrong answers" in Outer Wilds — only incomplete understanding. Every death (and you die A LOT) is simply the loop resetting. Failure costs nothing except time.

The game's approach to being stuck is elegant:
- Multiple investigation threads exist simultaneously. If one is impenetrable, go explore something else.
- Clues for one location are often found at completely different locations. Getting stuck just means you haven't explored widely enough.
- The game never tells you you're wrong. It simply doesn't react to uninformed actions.

The critical design choice: **the game respects your time by NOT respecting your progress.** Every loop, the world resets. Your ship log (which records what you've learned) is the only thing that persists. This teaches players that information is the only currency that matters.

### How Progress Is Tracked Without Explicit UI

- **The Ship Log:** A diegetic computer on your ship that records discoveries as a node-and-connection map. Nodes are locations; connections show how pieces of information relate. Unexplored connections show as "?" marks.
- **Rumor Mode:** The ship log has two views — "Map Mode" (spatial) and "Rumor Mode" (conceptual connections). Rumor Mode shows the web of knowledge — what leads where, what remains unknown.
- **Color Coding:** Explored nodes are filled in; nodes you've heard about but haven't visited show as question marks; fully-explored areas have orange borders.
- **No Percentage:** There's a hidden "have you learned enough to reach the ending" check, but no explicit progress meter.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Knowledge IS the only progression** | Players advance by understanding, not by collecting items or unlocking abilities |
| **The game can never be replayed** | Once memories are recovered, they're recovered — no reset, making each revelation precious |
| **Multiple simultaneous threads** | Always have multiple memory lanes available; if one is blocked, explore another |
| **Clues scattered cross-contextually** | Information needed for Memory A is found while exploring Memory B |
| **Clockwork systems** | The memory landscape has patterns — recurring themes, temporal connections — that reveal themselves through repeated engagement |
| **Respecting intelligence** | Never tell the player the answer; trust them to synthesize connections |
| **Ship Log = knowledge map** | Give players a way to visualize what they know and what remains mysterious |
| **The question mark is a compass** | Showing "there's something here you haven't understood yet" without showing what |

---

## 6. Paradise Killer

**Developer:** Kaizen Game Works (2020)  
**Platform:** PC/Switch/Consoles

### Core Mechanic (One Sentence)

An open-world detective game where the player can accuse ANY character of ANY crime at the final trial — there is no single "correct" solution, only the argument you can build with the evidence you've gathered, and anyone you successfully accuse is immediately executed.

### What Makes It Feel Intelligent vs. Gamey

Paradise Killer's radical innovation is **removing the "correct answer" from a detective game**. The game has an objective truth (characters will confess if confronted with overwhelming evidence), but it never forces you toward it. You can:

- Begin the trial at any time — with abundant or minimal evidence
- Accuse anyone of anything, as long as you have evidence to present
- Leave crimes "unsolved" by choosing not to pursue certain threads
- Send innocent people to their deaths if you present convincing-but-misleading evidence

This transforms the detective game from "find the answer the developer hid" into "construct the most coherent interpretation of events." It mirrors real justice systems — truth and justice are not the same thing.

The open world structure explodes the visual novel format into 3D space. There are no missions, objective markers, or prescribed paths. Just you, an island full of clues, and a trial to eventually conduct. Evidence auto-links itself to relevant parties in your files. Unlinked evidence goes into an unsorted pile — unusable at trial unless you figure out its connection.

When you pick up evidence, it automatically links to relevant suspects. But if there aren't clear links, it goes into an unsorted pile that's unusable at trial unless you determine the connection. This makes players think about motive, means, and plausibility — not just "did I find all the glowing objects."

### How It Handles Wrong Answers

Paradise Killer's approach is unprecedented: **"wrong" answers are valid outcomes.**

- You can accuse the wrong person. They will be executed. The game continues.
- You can miss entire crime threads. Some mysteries remain unsolved.
- You can ask too many questions and tip off suspects — they'll flatly deny accusations.
- The trial system requires you to present a NARRATIVE — "I believe X did this because of Y and Z." If your narrative is internally coherent and supported by evidence, it succeeds.

There's no reload prompt. No "are you sure?" The game treats your judgment as final, with lethal consequences. This creates genuine weight around decision-making.

### How Progress Is Tracked Without Explicit UI

- **Case Files:** Each suspect has a dossier that fills in as you gather information. Evidence links itself to relevant parties automatically.
- **Relationship Meters:** Hanging out with suspects (non-investigation conversations) builds rapport, which occasionally unlocks "probe" options for deeper questioning.
- **Physical Exploration:** The island itself is a progress indicator — you can see areas you haven't reached, secrets you haven't found.
- **Blood Crystals:** A currency hidden around the island that represents "completionism" — finding them all isn't required but rewards thorough exploration.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **No single correct answer** | Memory recovery can have multiple valid interpretations |
| **Accuse anyone** | Let the player form theories about what happened — validate coherent narratives, not just "the right one" |
| **Trial-as-synthesis** | A moment where the player must articulate their understanding as a coherent narrative |
| **Evidence auto-linking** | When players discover something, the system should recognize its connections automatically |
| **Unsorted evidence pile** | Some discoveries don't have obvious connections — yet |
| **Premature endings are valid** | Players can "finish" with incomplete understanding — that's a valid outcome |
| **Consequences for accusations** | Proposing a memory interpretation commits you to it; recklessness has cost |

---

## 7. The Forgotten City

**Developer:** Modern Storyteller (2021)  
**Platform:** PC/Consoles  
**Origin:** Originally a Skyrim mod (2015)

### Core Mechanic (One Sentence)

A time loop set in an ancient Roman city governed by a single law — "The Golden Rule: if anyone commits a sin, everyone is punished" — where information and items persist across loops, allowing players to use knowledge gained in previous loops to manipulate NPC behavior in subsequent ones.

### What Makes It Feel Intelligent vs. Gamey

The Forgotten City's loop is shorter and more socially focused than Outer Wilds. The city has ~24 inhabitants, each with schedules, secrets, and interconnections. The loop resets when anyone sins (or when the player chooses to reset). Crucially:

- **Knowledge persists:** What you learn about characters carries across loops. In loop 1, you learn Character A's secret. In loop 2, you can confront them with that knowledge from the start.
- **Items persist:** Physical objects you're carrying when you reset come with you. This creates "fetch quest shortcuts" — grab something once, and you have it every subsequent loop.
- **NPC proxy shortcuts:** After several loops, the game gives you an NPC who will perform early-loop tasks for you, eliminating repetitive busywork. You tell them "go talk to X, tell them Y" and they do it, freeing you to explore new territory.

The game plays "like elaborate clockwork" — performing an action shifts NPC positions relative to each other, revealing new dialogue options, items, and locations. Each loop is a controlled experiment: change one variable, observe the cascade.

The philosophical dimension adds depth: "What counts as a sin?" is genuinely debated by the NPCs. Stealing? Lying? Violence in self-defense? The ambiguity creates real moral weight.

### How It Handles Wrong Answers

The Golden Rule IS the wrong-answer mechanism. If you sin (steal, kill, etc.), the city's population turns to gold, golden statues come alive to kill you, and you must flee back to the portal to reset. But:

- **Triggering the Rule isn't failure — it's information.** Now you know that action counts as a sin. Now you know what happens at that trigger point. Now you can plan around it.
- **Some paths REQUIRE triggering the Rule.** Certain information is only obtainable by causing the reset and observing what happens in the chaos.
- **You are never locked out.** As the game states: "If a conversation goes poorly, you're not locked out of progress. You can simply return to the temple and reset the loop."

The game has four endings of varying "completeness." You can reach an ending with minimal loops if you're knowledgeable enough, or it can take many loops for first-time players. The best ending requires approximately four loops with perfect play.

### How Progress Is Tracked Without Explicit UI

- **Dialogue Options:** New dialogue choices appear based on what you've learned in previous loops. The player can SEE their growing knowledge reflected in available options.
- **Quest Log:** A simple quest log tracks active objectives, but objectives shift based on loop knowledge.
- **NPC States:** Characters remember you across loops in specific circumstances (if you intervened in their lives before the reset). This creates "social progress."
- **Physical Inventory:** Items you carry across loops are tangible progress markers.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Knowledge accumulation across loops** | Each session with the AI therapist should carry forward — previous revelations unlock new approaches |
| **NPC proxy shortcuts** | Once a memory is "confirmed," don't make players re-recover it — it becomes available context |
| **Triggering catastrophe as information** | Pushing too hard on a memory and causing distress reveals something about that memory's nature |
| **Clockwork social systems** | Changing one recovered memory shifts the context around all other memories |
| **Multiple valid endings** | Different levels of memory recovery = different narrative outcomes |
| **The Rule as boundary** | There should be a clear "you've pushed too hard" threshold that the player learns to navigate |
| **Fast loops encourage experimentation** | Make re-approaching conversations low-cost so players experiment freely |

---

## 8. Neurocracy

**Developer:** Playthroughline / Younès Rabii (2021, 2023)  
**Platform:** Browser-based (web)

### Core Mechanic (One Sentence)

A murder mystery told entirely through a fictional Wikipedia-like encyclopedia called "Omnipedia," where players solve a billionaire's assassination by reading dry reference articles, following hyperlinks, checking revision histories, and noticing contradictions between updated entries across episodic releases.

### What Makes It Feel Intelligent vs. Gamey

Neurocracy is **radically anti-spectacle**. There are no cutscenes, no music stings, no highlighted clues. The entire game is reading encyclopedia articles. The player must find the drama hidden between the lines of dry, matter-of-fact prose.

The game's innovation is using the **form of Wikipedia itself** as a narrative device:

- **Hyperlinks** function as your navigation through the story. Each link is a choice — which thread to follow.
- **Revision histories** are forensic evidence. You can see WHEN articles were edited, WHAT was changed, and infer WHY. Deleted paragraphs are as revealing as added ones.
- **Neutral encyclopedic tone** hides emotional content. A sentence like "Following the dissolution of their partnership in 2045, Chen relocated to Singapore" conceals heartbreak, betrayal, and motive in clinical language.
- **Cross-referencing** is the primary mechanic. Article A mentions Entity X. Article B mentions Entity X in a different context. The contradiction between A and B is the clue.

Episodic structure adds temporal depth: each episode represents one day in 2049. Each day, new articles appear, existing ones update. Real Wikipedia users will recognize the rhythm — the "frantic editing" that follows breaking news events. Players who return each episode see the world EVOLVE, like watching a Wikipedia article during a crisis.

### How It Handles Wrong Answers

There are no input mechanisms for "answers." The game has no interface for guessing. There IS a community investigation tool called "Pipeline" for collaborative theorizing, and a forum for discussion, but the game itself never asks "who did it?"

Progress is entirely internal to the player. You're either confused or less confused. The game respects this — it never tells you you're right or wrong because there's nowhere to INPUT a theory.

The Discord/forum community became the external validation system. Players theorize together, comparing what they've noticed. This creates a metagame around collaborative deduction.

### How Progress Is Tracked Without Explicit UI

- **Episode Structure:** Ten episodes = ten in-game days. The player knows "Episode 5 of 10" but not "how much of Episode 5's content have I found."
- **Updated Articles:** Each episode marks new/changed content. Players can see what's NEW (highlighted on the main page) but must discover the subtle edits themselves.
- **Random Article Button:** Omnipedia has a "random article" feature that encourages serendipitous discovery, mimicking real Wikipedia browsing behavior.
- **No Solution Submission:** The game ends when the story ends, not when you "solve" it.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Dry tone concealing emotional content** | Clinical/neutral presentation that forces the player to FIND the emotion beneath |
| **Revision histories as evidence** | Show players how memories have been EDITED — what was suppressed, what was added, what changed |
| **Hyperlinks as navigation** | Keywords in recovered memories link to other memories — follow the thread |
| **Contradictions between sources** | Two memories of the same event that don't match are the clue, not the error |
| **Episodic reveals** | New information becomes available over time, re-contextualizing everything |
| **Anti-spectacle aesthetics** | Trust the reader to find the drama; don't highlight it for them |
| **Community metagame** | Design for the inevitable Discord/Reddit theorizing that will surround the game |

---

## 9. ARGs (I Love Bees, Year Zero, Cicada 3301)

**Era:** 2004–2014 (golden age)  
**Creators:** 42 Entertainment (ILB, Year Zero), Unknown (Cicada 3301)

### Core Mechanic (One Sentence)

Alternate Reality Games fragment a single narrative across multiple real-world platforms — websites, phone calls, USB drives, physical locations, emails, and live events — requiring collaborative community effort to assemble the full picture, with the fundamental conceit that "this is not a game."

### What Makes It Feel Intelligent vs. Gamey

ARGs operate on a principle called **TINAG: "This Is Not A Game."** The fiction extends into reality — you don't boot up an application to play, you receive a mysterious phone call, or find a USB drive in a concert bathroom, or notice that a website has been "hacked." The game-world and the real world are deliberately conflated.

**I Love Bees (2004, Halo 2 marketing):**
- A beekeeper's website was "hacked" by a stranded AI
- GPS coordinates led players to specific public payphones at specific times
- Answering the phone played audio fragments of a radio drama
- 600+ audio files assembled by the community into a coherent narrative
- Platform philosophy: "The world. The entire electronic sphere. If we could make your toaster print something we would. A single story, a single gaming experience, with no boundaries."

**Year Zero (2007, Nine Inch Nails):**
- Trent Reznor embedded clues in tour merchandise (highlighted text on t-shirts spelled URLs)
- USB drives left in concert venue bathrooms contained unreleased songs with spectrograms encoding images
- Multiple fictional websites depicted a dystopian 2022 America
- Phone numbers on walls led to voicemail recordings
- Culminated in a live event where an underground resistance concert was "raided by SWAT"
- The ARG BECAME the album's narrative — participants weren't just hearing about dystopia, they were living it

**Cicada 3301 (2012–2014):**
- Posted on 4chan: "We are looking for highly intelligent individuals. There is a message hidden in this image. Find it."
- Puzzles chained: steganography → Caesar ciphers → prime number sequences → Tor hidden services → physical posters in 14 countries → book codes → musical cryptography
- Never confirmed as a "game" — could be recruitment, art project, or something else entirely
- The unsolved nature IS the point — perpetual mystery as design choice

### How It Handles Wrong Answers

ARGs handle wrong answers through **collaborative filtering:**
- Individuals can pursue wrong paths, but the community self-corrects
- Dead ends exist and are INTENDED — they waste time for individual players but get weeded out by group effort
- The creators ("puppet masters") can adjust difficulty in real-time by adding/removing clues based on community progress
- No individual failure state — only community velocity toward or away from truth

For Cicada 3301, wrong answers literally led nowhere. Each step of the puzzle chain required the EXACT correct solution to access the next. No partial credit. No hints. Either you solved it or you didn't progress. The ruthlessness was the point.

### How Progress Is Tracked Without Explicit UI

- **Community wikis** emerge organically — players build their own tracking systems
- **Real-time updates** from puppet masters signal "the community has passed this gate" (new content appears when a puzzle is solved)
- **Physical/temporal scarcity** — you had to be at THAT payphone at THAT time; you had to find THAT poster in YOUR city
- **No progress percentage** — the community doesn't know how far they are from the end

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Cross-platform fragmentation** | Clues distributed across multiple apps/media — not everything is in the chat |
| **TINAG (This Is Not A Game)** | The memory recovery process should never feel like a game; it should feel like it's really happening |
| **Community collaboration** | Design for players sharing and comparing notes with each other |
| **Real-time puppet mastering** | Ability to adjust difficulty based on player behavior/velocity |
| **Breadcrumb chaining** | Each solved piece reveals the EXISTENCE of the next piece, not its solution |
| **Physical-world integration** | Clues that connect to real locations, real websites, real phone numbers |
| **The unsolved residue** | Not everything should be solvable; some mysteries should linger permanently |
| **Multi-disciplinary puzzles** | Require different TYPES of thinking — not just one skill |

---

## 10. Bandersnatch

**Developer:** Netflix / Charlie Brooker (2018)  
**Platform:** Netflix (streaming)

### Core Mechanic (One Sentence)

An interactive film where viewers make binary choices for the protagonist every few minutes — ranging from trivial (cereal brand) to catastrophic (kill your father) — with the narrative branching, looping, and eventually becoming self-aware about its own structure, turning "meaningless choices" into a meta-commentary on agency.

### What Makes It Feel Intelligent vs. Gamey

Bandersnatch is both a success and a cautionary tale. Its intelligence lies in its META-awareness:

**What works:**
- The protagonist Stefan is ALSO making a choose-your-own-adventure game. The viewer's choices and Stefan's game mirror each other — the film IS what it depicts.
- When the player makes Stefan follow the "correct" path (commercial success, on-time delivery), the game within the story gets poor reviews for being too linear. The meta-lesson: safe choices make boring stories.
- The "Netflix is controlling me" path breaks the fourth wall entirely — Stefan becomes aware of the viewer, and the viewer can TYPE to explain they're watching via Netflix. This is bizarre and brilliant.
- Dead ends force you backward — the narrative says "try again" diegetically, acknowledging its own structure.

**What doesn't work (and why):**
- Many choices are **arbitrary** — choosing Sugar Puffs vs. Frosties has no meaningful consequence. This teaches players that choices don't matter, undermining the moments when they DO.
- **Binary choices are restrictive.** Real decisions aren't "A or B." The format constrains thought rather than expanding it.
- **Viewer passivity between choices.** You watch for 3–4 minutes, make a 10-second choice, then watch again. The ratio of agency to passivity is low.
- **Timer pressure.** If you don't choose within ~10 seconds, the system chooses for you. This prevents contemplation.
- **Completionist frustration.** Finding all five endings requires replaying many of the same scenes. Repetition destroys immersion.

Research found that positive emotions were associated with perceived degree of control and sense of flow. When players felt genuinely in control, engagement was high. When they suspected their choices were meaningless, engagement cratered.

### How It Handles Wrong Answers

Bandersnatch has "soft endings" and "hard endings":
- **Soft endings** — the narrative doesn't conclude; it says "let's try again" and forces you back to a decision point. This is the film acknowledging you chose "wrong."
- **Hard endings** — five definitive conclusions that are all "valid." Some are happy, some are tragic, some are surreal.
- **The loop structure** means "wrong" choices are temporary — you'll be pushed back to try another path. This reduces stakes but enables exploration.

### How Progress Is Tracked Without Explicit UI

- **No progress tracking.** Netflix provides no map of branches, no indication of what you've seen vs. haven't.
- **Repeat detection:** The system knows what paths you've taken and adjusts available choices accordingly (you can't take the exact same path twice in most cases).
- **Ending count:** Some viewers learned there were five "real" endings and hunted for all five, but this was external community knowledge, not surfaced by the film.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Meaningful vs. arbitrary choices** | EVERY player input should feel consequential — never include trivial choices that train players to disengage |
| **Meta-awareness** | The system can acknowledge its own structure without breaking immersion (if done carefully) |
| **Dead ends as content** | When a path leads nowhere, make that INTERESTING — don't just say "wrong, try again" |
| **No timer pressure** | Let players think. Contemplation is part of the experience. |
| **Avoid binary restriction** | Don't reduce player agency to A/B — allow open-ended input |
| **Loop structure for exploration** | Allow re-approaching without punishing repetition |
| **ANTI-PATTERN: Arbitrary choices** | If a choice doesn't matter, DON'T PRESENT IT. Every interaction must move the needle. |
| **ANTI-PATTERN: Passive stretches** | Don't make players wait too long between moments of agency |

---

## 11. AI Chat Systems (Character.AI, AI Dungeon)

**Platform:** Web/Mobile  
**Era:** 2019–present

### Core Mechanic (One Sentence)

AI-powered interactive fiction systems that generate dynamic narrative responses to free-form player input, attempting to maintain character consistency and narrative coherence across extended sessions through various memory architectures (context windows, summarization, memory banks, and embedding retrieval).

### What Makes It Feel Intelligent vs. Gamey

**AI Dungeon's Memory Architecture:**
AI Dungeon faces the fundamental constraint of all LLM-based systems: limited context length. Its solution is layered:
- **Plot Essentials (formerly "Memory"):** A user-editable field that's ALWAYS included in the AI's context. Players write character descriptions, world rules, ongoing plot threads.
- **Author's Note:** A meta-instruction field that guides tone and style.
- **Story Cards (formerly "World Info"):** Triggered entries — when a keyword appears in recent text, its associated card is injected into context. This creates "Chekhov's Gun" moments: information that surfaces only when relevant.
- **Auto Summarization:** Older events are compressed into summaries, preserving key facts while freeing context space.
- **Memory Bank:** Automatically stores and retrieves key information, keeping the AI on track.

**Character.AI's Approach:**
Character.AI maintains a session-level buffer of recent turns (typically 10–15), plus summary embeddings for thematic continuity. Currently lacks TRUE long-term memory between sessions — "its recall is limited to the immediate conversation, impacting how deeply characters can remember user interactions and build lasting conversational context."

**What Creates Immersion:**
- **Free-form input:** Players type ANYTHING. No menu selection. This creates genuine agency.
- **Consistent personality:** When an AI character maintains voice, opinions, and behavioral patterns across hundreds of messages, it creates the illusion of genuine personality.
- **Responsive world:** Consequences that ripple — "the tavernkeeper's tone shifts when the players walk in because he knows you betrayed his brother."
- **Memory that surprises:** When an AI references something from 50 messages ago without prompting, it creates a powerful sense of "being known."

**What Breaks Immersion:**
- **Context window forgetting:** Mid-conversation amnesia where the AI contradicts what it said 20 messages ago.
- **Hallucination:** Inventing facts that contradict established fiction.
- **Tone drift:** Characters slowly losing their voice over long conversations.
- **Repetitive patterns:** AI falling into loops or defaulting to the same responses.

### How It Handles Wrong Answers

In AI narrative systems, "wrong answers" map to "actions the AI doesn't know how to respond to coherently":
- **AI Dungeon:** Will attempt to incorporate ANY input, sometimes to absurd results. "Wrong" actions just produce unusual narrative branches.
- **Character.AI:** Characters may refuse, redirect, or acknowledge confusion if input is truly incompatible with the scenario.
- **The real failure mode** isn't wrong answers — it's broken coherence. When the AI fails, it's not saying "wrong" — it's generating nonsense, contradictions, or repetition.

### How Progress Is Tracked Without Explicit UI

These systems generally DON'T track progress well — which is their greatest weakness:
- **AI Dungeon:** Story length serves as implicit progress. The Memory Bank creates a growing record. But there's no narrative arc tracking.
- **Character.AI:** Session-based. Progress resets between sessions. No persistent narrative arc.
- **The design gap:** No AI chat system has successfully solved the "meaningful plot arc" problem — generating satisfying narrative shapes (rising action, climax, resolution) over extended interactions.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Layered memory architecture** | Different types of "memory" at different persistence levels — session, case, permanent |
| **Triggered context injection** | Information that surfaces only when relevant keywords/themes appear |
| **Free-form input** | Never constrain player expression to menus; let them type naturally |
| **Memory callbacks as trust-building** | Reference earlier details to create the sensation of "being known" |
| **Plot Essentials as guardrails** | Maintain core narrative facts that can NEVER be contradicted |
| **ANTI-PATTERN: Amnesia** | The system must NEVER forget established facts. Forgetting destroys trust instantly. |
| **ANTI-PATTERN: Repetition loops** | Detect and break repetitive patterns before they become visible |
| **ANTI-PATTERN: No narrative arc** | Must design FOR pacing — rising tension, climax, resolution. AI alone won't generate this. |
| **Author's Note as tone control** | Meta-instructions that guide how the system responds without being visible to the player |

---

## 12. Real Hypnotic Regression Therapy

**Field:** Clinical Hypnotherapy  
**Relevance:** Direct analog to Signal Decay's memory recovery sessions

### Core Mechanic (One Sentence)

A therapist guides a client into a focused state of awareness and uses verbal cues, sensory anchoring, and affect bridges to navigate backward through emotional associations to specific past experiences — not "recovering" memories as fixed recordings, but co-creating a navigable relationship with the past.

### What Makes It Feel Intelligent vs. Gamey

Real regression therapy operates on principles that are DIRECTLY applicable to interactive narrative design:

**The Affect Bridge Technique:**
The therapist doesn't say "remember your childhood." They say "notice that feeling you described — that tightness in your chest. Stay with that feeling. Let it take you to the first time you felt it." The EMOTION is the navigation system, not chronological order. You follow feelings backward through time until you arrive at their origin.

**The Structure of a Session:**

1. **Induction** — Relaxation, focused attention, building rapport. "Notice your breathing. Let your awareness settle."
2. **Deepening** — Increasing absorption. Metaphors of going deeper, descending stairs, entering spaces.
3. **Bridge/Navigation** — Following emotional threads, sensory anchors, or temporal cues to access specific experiences.
4. **Exploration** — "What do you notice? What do you see? What do you hear?" The therapist asks open, non-leading questions.
5. **Reframing** — "What does the younger you need to hear? What understanding do you have now that you didn't have then?"
6. **Integration** — Connecting the recovered experience to present-day patterns. "How does knowing this change things for you?"
7. **Return** — Gradual re-orientation to the present. "In your own time, come back to this room."

**Critical Principles:**

- **Client-led, not therapist-led:** The therapist GUIDES but does not DICTATE. They ask "what do you notice?" not "you see a house, correct?"
- **Memories are constructed, not retrieved:** Modern neuroscience confirms memories are not stored like photographs. They are reconstructed each time they're accessed. This means the PROCESS of recovering a memory CHANGES it.
- **False memory risk:** Suggestive questioning can create false memories that feel completely real. Therapists must use neutral language. "What do you notice?" not "Is that your father?"
- **Symbolic truth vs. literal truth:** Whether a memory "actually happened" is less important than whether it represents a genuine emotional truth. The therapy works on the emotional relationship to the past, not on forensic accuracy.
- **Abreaction:** Sometimes accessing a memory triggers an intense emotional release (crying, shaking, anger). The therapist must manage this without shutting it down OR escalating it. Containment without suppression.
- **Ideomotor responses:** The body can signal before conscious awareness — finger movements, muscle tension, breathing changes. These are treated as communications from the subconscious.

**The Therapist's Language Patterns:**

- Open questions: "What are you experiencing?" "What do you notice around you?"
- Sensory anchoring: "What does the air feel like?" "Is there a smell?" "What sounds are present?"
- Non-leading: "Tell me more about that" instead of "Was someone else there?"
- Permission-giving: "You can move forward or backward in time." "You're safe to explore this."
- Pacing statements: "That's right." "Yes." "Continue." (Minimal, affirming, non-directive.)

### How It Handles Wrong Answers

In therapeutic regression, there ARE no wrong answers. The client's experience is the data:
- **"I don't see anything"** → "That's fine. Just notice what you DO experience. Is there a color? A temperature? A sense of space?"
- **Confabulated memories** → Treated as symbolically meaningful even if not literally true. The emotion is real; the scene may be a construction.
- **Resistance** → Interpreted as meaningful. "Something in you doesn't want to go there. Let's respect that. What's protecting you from this memory?"
- **"Nothing happened"** → "Notice what's in that 'nothing.' Is it empty? Dark? Calm? Something else?"

### How Progress Is Tracked Without Explicit UI

In therapy:
- **Session notes** (therapist's private record of themes, patterns, breakthroughs)
- **Client self-report** (changes in symptoms, dreams, daily life patterns)
- **Emotional shifts** (reduced intensity of triggers, changed relationship to memories)
- **Behavioral changes** (new actions, different responses to old situations)

There is no "you're 60% healed" metric. Progress is felt, not measured.

### Design Patterns to Steal for Signal Decay

| Pattern | Application |
|---------|-------------|
| **Affect Bridge** | Navigate memories through EMOTION, not chronology. "You feel scared. When else have you felt scared?" |
| **Client-led exploration** | The AI therapist suggests directions but the player DRIVES. Never railroad. |
| **Open, non-leading questions** | "What do you notice?" not "Is your mother there?" |
| **Sensory anchoring** | "What does the air feel like? Is there a smell?" — ground memories in physical sensation |
| **Resistance as information** | If the player avoids something, that avoidance IS a clue |
| **Symbolic truth** | Memories don't need to be literally accurate to be emotionally true and narratively valid |
| **Abreaction as climax** | Intense emotional moments should be CLIMAXES — built toward, not dumped |
| **Permission-giving language** | "You're safe to explore this." "You can move forward or backward." |
| **The seven-phase structure** | Induction → Deepening → Bridge → Exploration → Reframing → Integration → Return |
| **No wrong answers** | Everything the player says is DATA. Even "I don't remember" is meaningful. |
| **Body signals** | Text indicators of emotional state — typing speed, hesitation, word choice — as diagnostic information |

---

---

## 13. Signal Decay Design Principles — Synthesis

### The 15 Rules of Memory Recovery

These principles synthesize lessons from all 12 systems analyzed above into actionable design rules for Signal Decay's chat-based memory recovery system.

---

#### Rule 1: Knowledge Is the Only Progression

*From: Outer Wilds, Her Story*

There are no items to collect, no skills to unlock, no abilities to upgrade. The player advances exclusively through understanding. Every "gate" in the game is a knowledge gate. The player who understands the full truth of what happened could, in theory, reach the ending in a single session. The player who doesn't understand cannot progress regardless of how long they play.

**Implementation:** No mechanical barriers between the player and any memory. The only thing preventing access is not knowing the right questions to ask, the right emotions to follow, the right associations to make.

---

#### Rule 2: Every Input Is Data (There Are No Wrong Answers)

*From: Hypnotic Regression, Her Story, Disco Elysium*

Everything the player types is meaningful. "Wrong" guesses reveal what the player is thinking about. Resistance reveals what the player is avoiding. Even "I don't know" is information. The system should NEVER respond with "that's wrong" or "try again." Instead:

- Misguided input → "That's interesting. What makes you think of that?"
- Resistance → "Something keeps you from going there. Let's notice that."
- Silence → "Take your time. The memory isn't going anywhere."
- Wild guesses → Treat them as associations. Follow the emotional thread.

---

#### Rule 3: The Five-Result Limit (Constrained Revelation)

*From: Her Story, Obra Dinn's Rule of Three*

Never dump all information at once. Each probe/question/session should reveal a LIMITED amount — enough to create new questions, not enough to answer everything. Like Her Story's five-clip limit, each interaction should leave the player with more threads to pull than they had before.

**Implementation:** The AI therapist should reveal exactly enough to keep the player hungry. Three sensory details. One emotional truth. A name. A location. But never the full picture. Never all at once.

---

#### Rule 4: Navigate by Emotion, Not Chronology

*From: Hypnotic Regression, Telling Lies, Immortality*

Memories are not stored in chronological order. They're stored by emotional association. The player shouldn't be asked "what happened first?" but rather "when else did you feel this way?" The Affect Bridge is the primary navigation metaphor:

- "That anger — where does it come from?"
- "You mention cold. What else was cold?"
- "The sound of glass breaking — when was the first time?"

This creates a dreamlike, non-linear exploration that feels true to how memory actually works.

---

#### Rule 5: Failure Is Content, Not Barrier

*From: Disco Elysium, Paradise Killer, Bandersnatch*

When the player "fails" — pushes too hard, asks the wrong thing, goes somewhere premature — the response should be RICHER than silence. Failed approaches should reveal:
- Why the memory is resistant
- What emotion is blocking access
- What the memory's "defense mechanism" looks like
- A tangential detail that's useful later

Disco Elysium's failed red checks often lead to more interesting outcomes than successes. Design for this.

---

#### Rule 6: Batch Confirmation (Triangulation)

*From: Obra Dinn's Rule of Three*

Don't confirm individual memories in isolation. Require the player to establish a CONSTELLATION of related truths before anything locks in. A memory isn't "confirmed" until:
- Multiple supporting details align
- The emotional truth is consistent with other recovered memories
- The player can articulate HOW this memory connects to others

This prevents lucky guessing and creates the satisfying "click" of multiple pieces falling into place simultaneously.

---

#### Rule 7: Cross-Contextual Clue Distribution

*From: Outer Wilds, ARGs, Neurocracy*

The information needed to access Memory A should be discovered while exploring Memory B. Clues for one mystery are hidden inside other mysteries. This creates:
- Natural motivation to explore widely
- "Aha!" moments when connections form across domains
- Protection against single-path dead ends (there's always another route)

**For multi-app design:** The audio artifact in App X contains a phrase that's the key to unlocking a regression thread in App Y. The visual clue in App Z provides context for the emotion in App W.

---

#### Rule 8: The System Must Never Forget

*From: AI Chat Systems (anti-pattern), The Forgotten City*

The single fastest way to destroy player trust is for the system to "forget" something that was established. If the player recovered a memory where their mother was wearing a blue dress, and the system later refers to a red dress, the entire fiction collapses.

**Implementation:** Maintain an immutable fact store. Every confirmed detail is canonical and can never be contradicted. The system should reference previous sessions naturally — "Last time, you mentioned the smell of smoke. Let's return to that."

---

#### Rule 9: Show the Edges of the Unknown

*From: Outer Wilds' Ship Log, Neurocracy's Revision Histories*

Players should be able to see the SHAPE of what they don't know. Not the answers — the questions. Like Outer Wilds' question marks on the ship log, or Neurocracy's visible-but-unread revision histories, the player should always have a sense of:
- "There are memories I haven't accessed yet"
- "This area of my past is still dark"
- "These connections exist but I haven't understood them"

**Implementation:** A memory map that shows recovered memories as nodes, suspected connections as dotted lines, and unknown territories as fog. The fog has SHAPE — you can see where more memories exist without seeing what they are.

---

#### Rule 10: Resistance Is the Compass

*From: Hypnotic Regression, Disco Elysium's Internal Voices*

Whatever the player avoids IS where the truth lives. If they're comfortable exploring childhood summers but tense about discussing their father, the father IS the thread. The system should:
- Notice patterns of avoidance
- Gently indicate those patterns without forcing
- Treat the player's discomfort as navigation data
- NEVER force confrontation — always offer permission

"I notice you haven't asked about that night. When you're ready, we can go there. There's no rush."

---

#### Rule 11: Productive Disorientation

*From: Telling Lies, Immortality, Her Story*

Confusion is not failure. It is the intended starting state. The player SHOULD begin overwhelmed, uncertain, fragmented. The gameplay IS the process of that confusion slowly resolving into clarity. Design for:
- An initial state of "I have no idea what happened"
- A middle state of "I have theories but they conflict"
- A late state of "I think I understand, but..."
- A final state of "I see it all now" (which should arrive as revelation, not as gradual accumulation)

---

#### Rule 12: Diegetic Everything

*From: Her Story, Obra Dinn, Outer Wilds*

No meta-UI. No health bars, progress percentages, achievement notifications, or gamified elements. Every interface element must exist within the fiction:
- The chat app IS the therapy session
- The memory map IS the patient's own journal
- Audio logs ARE actual recordings
- Notes ARE actual case files

The moment anything looks like a "game interface," immersion shatters.

---

#### Rule 13: Time Pressure Destroys Contemplation

*From: Bandersnatch (anti-pattern), Hypnotic Regression*

Never force rapid decisions. The act of remembering requires patience, silence, consideration. Unlike Bandersnatch's 10-second timer, Signal Decay should:
- Allow unlimited response time
- Treat silence as productive
- Never rush the player toward closure
- Let sessions end without resolution (real therapy does)

---

#### Rule 14: Multiple Valid Interpretations

*From: Paradise Killer, Her Story, Disco Elysium*

The "true" story should support multiple valid readings. Not because the designers were lazy, but because MEMORY IS LIKE THIS. Two people remember the same event differently. Both are "true." The game should:
- Support at least 2-3 valid interpretations of key events
- Reward coherent narratives, not just "the correct one"
- Allow the player to CHOOSE which interpretation to believe
- Never confirm a single "canonical truth" (except in the most fundamental structural facts)

---

#### Rule 15: The Unsolvable Residue

*From: Cicada 3301, Real Memory Science*

Not everything should be answerable. Some memories should remain permanently partial, ambiguous, or uncertain. This mirrors:
- Real memory (we truly don't remember everything)
- Real therapy (some mysteries of the self remain)
- Real investigation (cold cases exist)
- Good storytelling (the best endings leave something unresolved)

**Implementation:** 10-15% of the game's content should be deliberately beyond full resolution. Fragments that suggest but don't confirm. Echoes that could mean multiple things. The player who accepts this ambiguity is rewarded with a richer experience than the player who demands total certainty.

---

### What We Must NEVER Do

These are inviolable anti-patterns — if Signal Decay does any of these, it has failed:

| # | Anti-Pattern | Why It's Fatal |
|---|---|---|
| 1 | **Highlighted clues / "you found evidence!" notifications** | Destroys the feeling of genuine discovery |
| 2 | **Explicit progress percentages** | Reduces memory to a collection checklist |
| 3 | **Binary choice menus** | Constrains player expression; teaches disengagement |
| 4 | **Timer pressure on responses** | Prevents contemplation; creates anxiety instead of absorption |
| 5 | **"Wrong answer" responses** | Trains players to guess-and-check instead of think |
| 6 | **Amnesia / contradicting established facts** | Instantly destroys trust in the fiction |
| 7 | **Arbitrary puzzles disconnected from narrative** | "Solve this sliding puzzle to unlock a memory" — NEVER |
| 8 | **Telling the player what they should feel** | "This memory makes you sad" — NO. Let them FEEL it. |
| 9 | **Completionism indicators** | "12/20 memories found" — this makes memories into collectibles |
| 10 | **Passive stretches without agency** | Long text dumps where the player can only click "continue" |
| 11 | **Explaining the mechanic** | Never break fiction to say "type a keyword to search." The interface should be self-evident. |
| 12 | **Punishing exploration** | Going "the wrong way" should ALWAYS yield something interesting |

---

### How Chat Regression Should Flow Naturally

Based on the seven-phase therapeutic structure, a typical Signal Decay session should follow this emotional arc:

```
PHASE 1: SETTLING (2-3 exchanges)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tone: Gentle, welcoming, grounding
Purpose: Establish presence, acknowledge where the player left off
Example: "Welcome back. Last time, we were following the thread of 
         that summer. The heat. The sound of the lawn sprinkler. 
         Would you like to continue there, or has something else 
         surfaced since then?"

PHASE 2: BRIDGE (3-5 exchanges)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tone: Curious, following the player's lead
Purpose: Find the emotional thread that leads to a specific memory
Example: "You mentioned a feeling of being watched. Stay with that.
         Not the interpretation — just the sensation. Where in your 
         body do you feel it?"

PHASE 3: DESCENT (5-10 exchanges)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tone: Deeper, more focused, more specific
Purpose: Navigate into a specific memory scene
Example: "The kitchen. The yellow light. Someone is there with you.
         Don't try to see them yet. What are they saying? What do 
         their words feel like?"

PHASE 4: REVELATION (1-3 exchanges)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tone: Still, significant, spacious
Purpose: The moment of truth — a key detail surfaces
Example: "...Yes. Take your time with that. Let it be what it is."
         [The system confirms a memory element has been recovered]

PHASE 5: INTEGRATION (3-5 exchanges)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tone: Warm, connecting, contextualizing
Purpose: Link the recovered memory to the larger picture
Example: "So the voice you've been hearing in the static — it's 
         connected to this. To what they said that night in the 
         kitchen. Does that change how you hear it now?"

PHASE 6: SURFACE (1-2 exchanges)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tone: Lightening, returning, grounding
Purpose: Close the session without forcing completion
Example: "That's enough for today. The memory isn't going anywhere.
         Rest with what you've found. We can go deeper next time."
```

**Key principles for natural flow:**
- The player should never feel like they're in a "game loop"
- Sessions should vary in length naturally — some are brief touches, some are deep dives
- Not every session needs a revelation — sometimes the work is just the exploration
- The therapist AI should adapt pacing to player engagement (short responses = going too fast; long responses = player is engaged, go deeper)
- End sessions by CHOICE, not by resource depletion

---

### How Clues Should Be Hidden Organically

Clues in Signal Decay should feel like they BELONG in their context — never like "the game designer put this here for you to find." Principles:

**1. Environmental Embedding**
Clues exist as natural parts of each app's content. A podcast episode mentions a street name. A photo's metadata contains a date. A chat message has a typo that's actually a pattern.

**2. Contextual Camouflage**
The clue is surrounded by non-clue information that looks similar. Like a real investigation — you're looking for the one relevant line in a page of irrelevant text.

**3. Retroactive Significance**
Things that seemed meaningless earlier become significant after recovering a memory. "Oh — THAT'S why that photo was important." The game teaches players to notice everything without highlighting anything.

**4. Multi-Layer Encoding**
A single piece of content can contain multiple clues for multiple memory threads. The same audio file is relevant to Memory 3 AND Memory 7 for different reasons.

**5. Behavioral Clues**
Not just factual clues — behavioral patterns are clues too. WHY does this person always change the subject when you mention Thursday? Why is this file dated wrong? Why is this conversation thread missing messages?

**6. Absence as Evidence**
What ISN'T there is as important as what is. Missing emails. Deleted photos. Gaps in timelines. The empty space has shape.

---

### How to Handle Players Who Only Use One App

Signal Decay must be completable (at minimum, a satisfying narrative experience) through any single app entry point, while rewarding multi-app engagement:

**Tier 1: Single-App Experience (Minimum Viable Narrative)**
- The chat regression system alone should provide a complete emotional arc
- 60-70% of the core narrative is accessible through therapy sessions alone
- Players can reach A ending (not necessarily the BEST ending) through one channel
- The experience should feel complete, not truncated

**Tier 2: Dual-App Experience (Enhanced Understanding)**
- Using chat + one other app reveals connections that deepen understanding
- Additional apps provide CONTEXT for what's discovered in chat (and vice versa)
- 80-85% of the narrative becomes accessible
- Some memories that are extremely difficult to access through chat alone become easier with external clues

**Tier 3: Full Multi-App Experience (Complete Picture)**
- All apps together provide the richest possible experience
- Cross-app clues are necessary for the deepest 15-20% of content
- The "true" picture (with appropriate ambiguity) requires engaging across platforms
- But even here — there's that 10-15% that remains permanently unresolved

**Design Solutions for Single-App Players:**
- Chat therapy can REFERENCE information from other apps: "Have you listened to any recordings recently? There might be something there."
- If the player hasn't engaged with other apps, the therapist provides slightly more direct guidance (adjusting difficulty downward)
- Cross-app clues always have ALSO-valid chat-only paths (just harder)
- The system tracks app usage and adjusts: heavy single-app users get more generous hints in that channel

---

### How Difficulty Should Scale

**Adaptive Difficulty Without Admitting It:**

The system should adjust challenge based on player behavior without EVER being visible:

**Signals of Struggling:**
- Repeating the same questions
- Long pauses followed by simple responses
- Expressing frustration or confusion directly
- Circling the same memories without breakthrough
- Session length decreasing (giving up sooner)

**Responses to Struggling:**
- Therapist offers slightly more specific prompts
- Unbidden interjections offer more concrete sensory details
- Cross-references become more explicit
- "Bridge" moments become more guided

**Signals of Mastery:**
- Asking precise, targeted questions
- Making connections unprompted
- Expressing theories about what happened
- Engaging deeply (long sessions, detailed responses)
- Finding cross-app clues without hints

**Responses to Mastery:**
- Therapist becomes less directive, more open
- Fewer sensory details volunteered (player is doing the work)
- New memory threads opened that are more complex
- Contradictions and ambiguities introduced
- The system trusts the player with harder material

**The Difficulty Curve (Macro):**

```
Early Game:    Easy wins. Short bridges. Clear sensory memories.
               Purpose: Teach the mechanic. Build confidence.
               "Oh, I see how this works."

Mid Game:      Longer bridges. Emotional complexity. Contradictions.
               Purpose: Deepen engagement. Create investment.
               "Wait — these two memories don't match. Something is wrong."

Late Game:     Deep resistance. Ambiguous truth. Multiple interpretations.
               Purpose: Challenge understanding. Reward persistence.
               "I thought I knew what happened but now I'm not sure."

End Game:      Integration. The big picture. Acceptance of uncertainty.
               Purpose: Emotional resolution. Narrative completion.
               "I understand as much as I can. And that's enough."
```

**The key insight from all 12 systems studied:** Difficulty should scale with EMOTIONAL complexity, not mechanical complexity. Early memories are emotionally simple (happy/sad). Late memories are emotionally contradictory (love that contains violence, safety that contained danger, joy that was actually dissociation). The challenge isn't "harder puzzles" — it's "harder truths."

---

### Final Notes: The Design Philosophy in One Paragraph

Signal Decay should feel like no game has ever felt before. It should feel like sitting in a quiet room with someone who knows you, asking careful questions, and feeling the past reassemble itself around you. It should feel like reading Wikipedia at 3am and suddenly understanding something about the world you'd never grasped. It should feel like finding a photo you don't remember taking and staring at it until the moment comes back. It should be slow, patient, intelligent, and never — not for one moment — feel like it's testing you. The player is not being examined. They are remembering. And remembering is not a puzzle to solve. It's a place to return to.

---

*Document compiled August 2026. For Signal Decay internal design reference.*
*Total analyzed systems: 12 | Stealable patterns: 89 | Design principles: 15 | Anti-patterns: 12*
