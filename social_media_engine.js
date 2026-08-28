/**
 * SOCIAL MEDIA ENGINE — Signal Decay
 * ═══════════════════════════════════════════════════════════════════════════
 * Complete social media presence, DM/texting behavior, group chat dynamics,
 * and online-vs-IRL personality mapping for all 6 characters.
 * 
 * Built from: CHARACTER_CULTURAL_DNA.md + Gen Z social media research (2024)
 * 
 * RESEARCH NOTES:
 * - Gen Z (born 1997-2012) averages 3.2 hours/day on social media
 * - Top platforms by usage: YouTube (65%), Instagram (65%), TikTok (58%)
 * - Texting: lowercase, no punctuation = authentic; periods = aggressive
 * - Response gaps are normal; conversations resume without explanation
 * - Memes/GIFs in 90% of conversations; visuals > text for tone
 * - Platform purposes: TikTok = entertainment, Instagram = identity curation,
 *   YouTube = research, Snapchat = close friends, Discord = communities
 * - NurseTok: 34% humor content captures 49% engagement; "day in the life" dominant
 * - Independent musicians: TikTok/Reels for discovery; authenticity > polish
 * - Gen Z vs Millennial: Gen Z = multi-platform fragmented identity;
 *   Millennials = Facebook/Instagram, more polished aesthetic
 * 
 * Usage: Import SOCIAL_MEDIA_ENGINE and access per-character objects.
 * Each character has: platforms, content_style, dm_style, group_chat, 
 * online_vs_real, and example_posts arrays.
 * 
 * Size target: 40-50 KB
 * Last updated: 2026-08-28
 * ═══════════════════════════════════════════════════════════════════════════
 */

const SOCIAL_MEDIA_ENGINE = {

  // ═══════════════════════════════════════════════════════════════════════════
  // KAEL VOSS — The Digital Ghost
  // 24 | Warehouse Worker (Night Shift) | Vocalist
  // Online philosophy: "I exist here but I'm not HERE here"
  // ═══════════════════════════════════════════════════════════════════════════
  
  kael: {
    meta: {
      online_identity: "Barely exists. Digital footprint of a shadow.",
      philosophy: "The internet is noise. Music is signal. Why would I broadcast static?",
      screen_time_daily: "45 min max (mostly Spotify + YouTube)",
      phone_model: "iPhone 12 (cracked screen, never got it fixed)",
      notification_settings: "All off except Messages and Spotify"
    },

    platforms: {
      instagram: {
        has_account: true,
        username: "@k.voss",
        username_logic: "Minimum characters. Period separator because underscore felt like trying.",
        profile_bio: "",
        bio_logic: "Literally empty. Had 'rust belt' there for a week once, deleted it.",
        follower_count: 347,
        following_count: 203,
        account_type: "private",
        post_frequency: "2-3 times per year. Maybe.",
        stories: "Never posts. Watches everyone else's at 3 AM. Ghost viewer.",
        highlights: "None",
        profile_pic: "Back of his head, silhouetted against a streetlight. You can't tell it's him.",
        verified: false,
        active_since: 2018,
        engagement: "Likes things occasionally. Never comments. Double-tap and move on.",
        what_he_follows: [
          "r/frankocean adjacent accounts",
          "Tiny Desk concerts page",
          "A few music photographers",
          "His mom (she posts church stuff)",
          "Band account (Oren runs it)",
          "3 warehouse coworkers",
          "Sampha, Daniel Caesar (never interacts)"
        ]
      },
      
      twitter_x: {
        has_account: false,
        deleted_when: "2022",
        reason: "Timeline became a performance. Everyone yelling into the same void. Couldn't hear anything real.",
        would_return: "No. Not even for Frank Ocean announcements. That's what Reddit's for."
      },

      tiktok: {
        has_account: false,
        history: "Downloaded. Used for 2 weeks. Felt his attention span physically eroding. Deleted.",
        opinion: "People making 60-second versions of songs that need 4 minutes. Criminal.",
        hidden_behavior: "Secretly watches TikTok compilations on YouTube. Won't admit this is the same thing."
      },

      reddit: {
        has_account: true,
        username: "anonymous/throwaway cycling",
        username_logic: "Made accounts, forgot passwords, made new ones. Currently: doesn't remember.",
        lurks: ["r/frankocean", "r/indieheads", "r/nightshift", "r/radiohead", "r/audiophile"],
        posts: "Has never posted. Has never commented. Pure consumption.",
        upvotes: "Occasionally. The most parasocial he gets."
      },

      facebook: {
        has_account: true,
        status: "Zombie account. Profile pic from 2019 (high school graduation, mom posted it).",
        last_login: "2020",
        reason_kept: "Mom tags him in things. He doesn't want her to think he's dead."
      },

      snapchat: { has_account: false, reason: "Never downloaded. The concept of disappearing photos feels pointless — why take the photo then?" },
      discord: { has_account: false, reason: "Servers feel like group chats with infinite strangers. No." },
      threads: { has_account: false, reason: "Doesn't know what it is. Doesn't care." },
      bereal: { has_account: false, reason: "The premise of performing spontaneity is the most calculated thing he's ever heard of." }
    },

    content_style: {
      what_he_posts: [
        "A skyline at an odd hour (the factory district at 5:47 AM, no filter)",
        "A plate of food from the good wing spot (no caption or just the restaurant name)",
        "Rare: a shadow/silhouette that might be artistic but might just be accidental",
        "Once posted a vinyl record, just the sleeve, no text"
      ],
      aesthetic: "Accidental. Whatever the iPhone camera does with no editing.",
      filters: "None. Ever. The idea of filtering reality feels dishonest.",
      captions: "None. Or one word maximum. The photo is the communication.",
      stories_vs_feed: "Neither. Both feel like performing.",
      never_posts: [
        "Selfies (has never taken one deliberately)",
        "His voice/music (too vulnerable)",
        "The warehouse (ashamed? protective? unclear even to him)",
        "Opinions about anything",
        "Other people without permission (which he'd never ask for)"
      ]
    },

    dm_style: {
      response_time: "2 minutes to 6 hours. Not strategic — genuinely didn't look at phone.",
      response_time_when_interested: "Under 5 minutes. This IS the tell.",
      message_length: "1-5 words for logistics. 'bet.' 'cool.' 'nah.' 'yeah I'm down.'",
      occasional_exception: "Once a month: unprompted 4-paragraph text about a song or thought from weeks ago. Then silence.",
      emoji_usage: {
        frequency: "Almost never",
        repertoire: ["\u{1F480}", "\u{1F44D}"],
        never_uses: ["\u{1F602}", "\u{2764}", "\u{1F97A}", "Any face emoji"],
        logic: "Skull = genuinely funny. Thumbs up = confirmed. That's the entire emotional range available digitally."
      },
      capitalization: "Always lowercase. Always. Capitals feel like shouting.",
      punctuation: "No periods (feels aggressive). No exclamation marks (too energetic). Occasional question mark.",
      voice_notes: "Never sends. Will listen to others' but respond in text.",
      how_starts_conversations: "Doesn't. Responds. Or: sends a song link at 4 AM with 'this one' — no other context.",
      handles_being_left_on_read: "Doesn't notice or care. Assumes they're busy. Might text again in 3 days like nothing happened.",
      read_receipts: "Off. Always off.",
      typing_indicator: "Would turn it off if he knew how."
    },

    group_chat: {
      role: "The lurker who is technically present",
      behavior: [
        "Reacts with a single emoji to prove he's alive",
        "Speaks only when directly @ mentioned or someone says something wrong",
        "If planning: states his availability and nothing else",
        "Never initiates topics",
        "The group chat has 200+ unread messages and he's read maybe 40 of them"
      ],
      reaction_emoji: "Thumbs up (95% of his group chat contribution)",
      messages_per_week: "3-5 total",
      leaves_group_chats: "Has left 2. No announcement. Nobody noticed for days."
    },

    online_vs_real: {
      different_online: "No. Same energy — minimal, quiet, observational. Possibly even LESS present online because there's no physical presence to communicate warmth.",
      what_surprises_followers: "That his voice is extraordinary. That he's funny in person (dry, unexpected). That he notices everything about you.",
      finsta: "No. One account is already more than he wants.",
      handles_conflict: "Doesn't engage. Mutes or unfollows. Has never typed an angry message. Deletes drafts.",
      parasocial: "Zero parasocial relationships in either direction. Doesn't follow influencers. Doesn't want followers."
    },

    example_posts: [
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "Loading dock at 6:12 AM. Wet concrete reflecting orange sodium lights. A single pallet in frame.",
        caption: "",
        likes: 23,
        comments: 0,
        context: "Posted after a particularly long shift. The light did something. He took the photo without thinking."
      },
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "Close-up of vinyl record spinning. You can see 'Blonde' on the label if you zoom in.",
        caption: "",
        likes: 41,
        comments: 2,
        context: "His highest-engagement post ever. The 2 comments are from Oren ('!!!') and Mira (skull emoji)."
      },
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "A plate. Wings, blue cheese, celery. Harsh overhead diner lighting.",
        caption: "12 bones",
        likes: 18,
        comments: 1,
        context: "The caption is the restaurant name. That's the whole review."
      },
      {
        platform: "text_message",
        type: "dm_to_mira",
        content: "this song has that thing you were talking about with the overtones",
        attachment: "[Spotify link - Ichiko Aoba]",
        time: "3:47 AM",
        context: "Referencing a conversation from 2 weeks ago. She mentioned overtones once. He remembered."
      },
      {
        platform: "text_message",
        type: "dm_to_oren",
        content: "can't thursday. friday works",
        time: "Response 4 hours after Oren's message",
        context: "Oren sent 3 messages, a voice note, and a meme. This is the full reply."
      },
      {
        platform: "text_message",
        type: "unprompted_long_message",
        recipient: "band group chat",
        content: "been thinking about that thing we played last week, the part where the drums drop out and it's just the bass and my voice for those 8 bars. something happened in that room. like the air changed density. I don't know if you felt it but I've been hearing it in my head since and I think that's the sound. that's what we sound like when we stop trying",
        time: "4:22 AM",
        context: "Sent to no response for 6 hours (everyone asleep). Oren wakes up and sends 14 messages about it."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MIRA CHEN — The Accidental Haunter
  // 22 | Guitar Teacher | Lead Guitarist
  // Online philosophy: "I post for myself but the ghosts keep showing up in my photos"
  // ═══════════════════════════════════════════════════════════════════════════

  mira: {
    meta: {
      online_identity: "Art-adjacent presence that accidentally documents the supernatural",
      philosophy: "If I'm going to exist online, it has to be real. Or at least look like my version of real.",
      screen_time_daily: "1.5 hours (Instagram + Spotify + Bandcamp rabbit holes)",
      phone_model: "iPhone 13 Mini (small hands, small phone, doesn't want more screen)",
      notification_settings: "Instagram DMs on, everything else muted"
    },

    platforms: {
      instagram: {
        has_account: true,
        username: "@mira.frequencies",
        username_logic: "Started as a music thing. Now accidentally literal. She doesn't realize how on-the-nose it is.",
        profile_bio: "guitar lessons / PNW / guitar + black heart emoji",
        bio_logic: "Functional. The black heart is the only emoji she'd commit to permanently.",
        follower_count: 2847,
        following_count: 890,
        account_type: "public",
        post_frequency: "2-3 times per week (stories more often)",
        stories: "Frequent. Guitar noodling clips, moody walks, her tea, a book spine. Never her full face.",
        highlights: ["covers", "gear", "PNW", "students"],
        profile_pic: "Her hands on a guitar neck, rings visible, face cropped out at the chin",
        verified: false,
        active_since: 2019,
        engagement: "Responds to comments about guitar stuff. Ignores the 'you're beautiful' ones from strangers.",
        what_she_follows: [
          "Guitar community accounts",
          "Mitski (official + fan accounts)",
          "Asian-American indie artists",
          "Analog photography accounts",
          "Thrift store aesthetics",
          "A few students (she regrets this)",
          "Japanese art/design accounts",
          "Elliott Smith memorial accounts"
        ],
        the_anomaly: "About 1 in 10 of her photos has... something. An orb. A blur that shouldn't be there. A figure in a window reflection. She doesn't notice when posting. Followers comment 'cool double exposure!' She didn't double-expose anything."
      },

      tumblr: {
        has_account: true,
        username: "betweenthebars-m",
        active: "Semi. Reblogs. Occasional original text post at 2 AM.",
        follower_count: 12,
        what_she_posts: "Poetry fragments. Reblogged art. Screenshots of lyrics. Things too vulnerable for Instagram.",
        vibes: "2014 Tumblr energy preserved in amber. She's not ironic about it."
      },

      twitter_x: {
        has_account: false,
        deleted_when: "2023",
        reason: "Got into a thread about Asian representation in indie rock. Said something true. Got dogpiled by people who agreed with her but wanted her to say it THEIR way. Deleted everything that night.",
        would_return: "No. The format rewards the worst instincts."
      },

      tiktok: {
        has_account: true,
        username: "@mirafreq",
        status: "Has account, barely posts. Watches guitar content. Algorithm figured out she likes sad girl indie.",
        follower_count: 340,
        posts: "4 total. Guitar covers that her students pressured her into posting.",
        engagement: "One got 12K views (Wednesday cover). She found this deeply uncomfortable and hasn't posted since."
      },

      bandcamp: {
        has_account: true,
        username: "mirafrequencies",
        what: "Buys music here. Has 2 things uploaded: an ambient guitar piece and a live recording with weird overtones she can't explain.",
        downloads: "The ambient piece has 89 downloads. She checks this number more than she'd admit."
      },

      reddit: { has_account: false, reason: "The anonymity + arguments combination is not something her anxiety needs." },
      discord: { has_account: true, status: "In 2 servers (guitar pedal community + local music scene). Lurks. Posts once a week max." },
      snapchat: { has_account: false, reason: "The idea of ephemeral content when she already has entities appearing and disappearing feels too real." },
      bereal: { has_account: false, reason: "Being forced to photograph her life at random moments when she might be seeing things nobody else can see? No." }
    },

    content_style: {
      what_she_posts: [
        "Guitar close-ups (fingers on frets, pedal boards, amp settings)",
        "Moody PNW landscapes (fog, wet streets, moss on everything)",
        "Students' hands on guitars (with permission, faces never shown)",
        "Tea arrangements (accidentally aesthetic)",
        "Thrift finds (a weird painting, a vintage tee, a book)",
        "Venue shots from shows (stage lighting, fog machines, crowd silhouettes)"
      ],
      aesthetic: "Accidentally haunted. Muted greens, deep shadows, grain. Looks like a horror movie still without trying.",
      filters: "VSCO occasionally (the free ones — C1, HB2). Mostly just lowers exposure.",
      captions: "Short, dry, often self-deprecating. Or just the song/album she's playing. Sometimes just a black heart.",
      stories_vs_feed: "Stories 3x more than feed. Stories feel less permanent = less pressure.",
      never_posts: [
        "Full face selfies (always cropped, always angled away, always partially obscured)",
        "Her family",
        "Anything about the entities (terrified someone would notice)",
        "Food (unless the tea counts)",
        "Political opinions (learned from the Twitter incident)",
        "Her apartment's full layout (the salt circles would raise questions)"
      ]
    },

    dm_style: {
      response_time: "Fast. 5-20 minutes usually. Except when overwhelmed, then 0 response for a day.",
      message_length: "Varies. Can go either brief ('lol okay') or sudden essay when passionate about something.",
      emoji_usage: {
        frequency: "Moderate but specific",
        repertoire: ["skull", "black heart", "eye", "melting face", "crying"],
        never_uses: ["smiling face", "hearts face", "pink hearts", "Anything cutesy"],
        logic: "Skull = funny or dead inside. Black heart = approval. Eye = 'I see you' or creepy acknowledgment. Melting = dissolving."
      },
      capitalization: "Lowercase always. Occasional caps for emphasis: 'this riff is INSANE'",
      punctuation: "Minimal. Hyphens instead of periods. Trailing thoughts with em-dashes",
      voice_notes: "Never sends. Something about her voice being recorded makes her uneasy (the entities respond to recordings).",
      how_starts_conversations: "Sends a link without context. The link IS the message. A song, an article, a photo. If you get it, you get it.",
      handles_being_left_on_read: "Spirals internally for 20 minutes, then talks herself down. Doesn't double-text. Will bring it up in person: 'did you see that thing I sent?'",
      read_receipts: "Off. Hates knowing when others have read hers."
    },

    group_chat: {
      role: "The dry one-liner specialist who disappears for hours",
      behavior: [
        "Drops one devastatingly funny observation, gets all the reactions, vanishes",
        "Sends links (songs, articles, cursed images) without any context",
        "Occasionally types 'what' at something Oren said — this is her participating",
        "If planning: 'yeah I can do that' and nothing else",
        "Never starts the conversation. Responds to the conversation already happening."
      ],
      reaction_style: "Single skull or eye. Never likes with a heart. The thumbs-up is for cowards (Kael).",
      messages_per_week: "10-15. Quality over quantity.",
      specific_behavior: "Will respond to something from 6 hours ago as if the conversation hasn't moved on. No acknowledgment that time passed."
    },

    online_vs_real: {
      different_online: "Slightly more confident. Text gives her processing time. In person she stumbles over honest things; online she can craft them.",
      what_surprises_followers: "That she's funny. Her online presence looks moody/serious. In person she's darkly hilarious when comfortable.",
      finsta: {
        has_one: true,
        username: "@static.between",
        followers: 4,
        what_its_for: "Entity documentation. Photos where something appeared. Audio recordings with unexplained frequencies. Screenshots of waveforms that shouldn't exist. Her 4 followers think it's an ARG project.",
        posts_include: [
          "Photo of empty room with caption 'she was here again'",
          "Waveform screenshot: 'what is this frequency. it's not in the song.'",
          "Blurry photo of her guitar strings vibrating with no one touching them",
          "Voice memo transcription attempt: '[INAUDIBLE] ...the song... [STATIC]'"
        ]
      },
      handles_conflict: "Deletes the app for 24 hours. Comes back. Never addresses it. If pushed: will say something too honest that makes the other person uncomfortable."
    },

    example_posts: [
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "Her Fender Jaguar on a stand, morning light through a window casting long shadows. In the window reflection: a figure that isn't her. She didn't notice.",
        caption: "morning practice",
        likes: 187,
        comments: 14,
        notable_comment: "'dude who's in your window reflection??' — she never responded to this comment",
        context: "The photo that got the most engagement because people noticed the figure. She genuinely didn't see it when she posted."
      },
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "Close-up of guitar pedal board. Warm orange light. Her Doc Martens visible at the edge of frame.",
        caption: "new reverb pedal does something to the room",
        likes: 234,
        comments: 22,
        context: "Guitar community loved this. The 'something to the room' is literal — the reverb seems to activate entity presence."
      },
      {
        platform: "instagram",
        type: "story",
        image_description: "Shaky video of her fingers playing a riff. No face visible. The audio has a subtle overtone that isn't from the guitar.",
        caption_overlay: "can anyone else hear that second note",
        views: 342,
        context: "She's asking genuinely. Nobody responds because they think it's about music theory."
      },
      {
        platform: "tumblr",
        type: "text_post",
        content: "there's a frequency between E and F that shouldn't exist and I can hear it when the room is empty and I'm starting to think it's not the room that's making it",
        notes: 3,
        context: "Posted at 2:34 AM. Her most honest platform. Nobody reads it. That's the point."
      },
      {
        platform: "text_message",
        type: "dm_to_kael",
        content: "[Spotify link - Grouper 'Dragging a Dead Deer Up a Hill']",
        followup: "(none. she sent it. that's the communication.)",
        context: "Kael responds 3 hours later with 'yeah.' She knows that means he listened to the whole thing."
      },
      {
        platform: "text_message",
        type: "dm_to_oren",
        content: "stop sending me reels at 7am challenge (impossible)",
        time: "7:12 AM",
        context: "Affectionate complaint. Oren's already sent 4 reels and a voice note."
      },
      {
        platform: "instagram_finsta",
        type: "post",
        image_description: "Screenshot of audio waveform with an impossible spike in a frequency range that doesn't correspond to any instrument.",
        caption: "session recording from tuesday. nobody was playing at 3:47 in the track. NOBODY WAS PLAYING.",
        likes: 2,
        context: "The finsta is her panic journal dressed as content."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OREN MALIK — The Chronically Online Sweetheart
  // 27 | ER Nurse (Night Shift) | Drummer
  // Online philosophy: "I contain multitudes and ALL of them have content to post"
  // ═══════════════════════════════════════════════════════════════════════════

  oren: {
    meta: {
      online_identity: "Three parallel internet identities that barely overlap. Femboy fashion. Metal drumming. Nurse life.",
      philosophy: "Being perceived is being loved. Showing all of yourself is the bravest thing. Also I'm bored at 4 AM.",
      screen_time_daily: "4-5 hours (he knows it's bad. he's a nurse. he KNOWS.)",
      phone_model: "iPhone 15 Pro Max (biggest screen possible. Pink case with charms.)",
      notification_settings: "Everything on. Lives in notification hell. Wouldn't change it."
    },

    platforms: {
      instagram: {
        has_account: true,
        accounts: [
          {
            type: "main",
            username: "@orenaissance",
            username_logic: "Oren + Renaissance. He was VERY proud of this pun.",
            profile_bio: "he/him | ER RN nights | drums go brrr | fat & femme & fine | diaspora kid",
            follower_count: 8400,
            following_count: 2100,
            account_type: "public",
            post_frequency: "3-5 times per week (feed). Stories: 5-15 per DAY.",
            content: "OOTD, drum covers, food, memes, nurse humor (HIPAA compliant), skincare routines",
            stories_usage: "Constant stream. Morning skincare, coffee, outfit check, commute music, post-shift unhinged thoughts, anime reactions",
            highlights: ["fits", "drums", "nurse life", "food", "skincare", "anime", "family"],
            profile_pic: "Full face, winged eyeliner, big smile, flower crown from a festival"
          },
          {
            type: "drumming",
            username: "@polyoren",
            username_logic: "Polyrhythm + Oren. For the drum/metal community specifically.",
            profile_bio: "polyrhythmic chaos | prog metal | meshuggah stan | kit pics",
            follower_count: 3200,
            following_count: 450,
            account_type: "public",
            post_frequency: "2-3 times per week",
            content: "POV drum covers (GoPro on kit), hand technique close-ups, polyrhythm challenges",
            note: "This account is 0% femme presentation. The overlap audience is about 200 people."
          }
        ],
        engagement_style: "Responds to EVERY comment. DMs fans back. Goes live at 4 AM post-shift."
      },

      tiktok: {
        has_account: true,
        username: "@orenaissance",
        follower_count: 14600,
        content_type: [
          "Nurse humor ('things ER nurses think but can't say')",
          "GRWM — the femboy-putting-on-eyeliner-before-scrubs pipeline",
          "Drum challenges (play this in 7/8, speedruns, polyrhythm proofs)",
          "POV: your nurse shows up in a skirt and you realize the patriarchy lied to you",
          "Late night shift energy (unhinged, semi-delirious, deeply funny)",
          "Pakistani food ASMR cooking content",
          "Reacting to people's takes about men in dresses (educational-adjacent)"
        ],
        most_viral: "Playing Meshuggah's 'Bleed' in full femme outfit. 2.3M views. Comments are either 'king shit' or confusion.",
        post_frequency: "3-5 per week",
        engagement: "Responds to comments with video replies. Answers hate comments while doing skincare."
      },

      twitter_x: {
        has_account: true,
        username: "@orenaissance",
        follower_count: 4100,
        what_he_posts: [
          "Unhinged 4 AM post-shift thoughts",
          "Thirsting over anime characters (no shame, very specific)",
          "Music hot takes that start fights",
          "Live-tweeting anime episodes",
          "Complimenting strangers' fits",
          "Occasional vulnerable tweet about being queer and Pakistani that goes viral"
        ],
        tweet_frequency: "5-15 per day (more on days off)",
        quote_tweets: "LOVES quote-tweeting. Never mean. Usually 'THIS' or a genuine expansion.",
        ratio: "Has been ratio'd once (Taylor Swift hot take). Enjoyed it."
      },

      snapchat: {
        has_account: true,
        username: "orenmal",
        usage: "Close friends only. 8 people. Morning face (no makeup), pets, food, 'guess where I am' games.",
        streak: "847-day streak with his sister. Would genuinely mourn if it broke."
      },

      discord: {
        has_account: true,
        servers: ["Femboy fashion server", "Prog-metal drummers", "Nursing support (anonymous)", "Band server"],
        behavior: "Very active. Long voice chats. Keeps energy up at 3 AM."
      },

      reddit: {
        has_account: true,
        subs: ["r/femboy", "r/drums", "r/nursing", "r/ABCDesis", "r/anime"],
        posts: "Fit pics on r/femboy (does well). Advice on r/nursing. Never combines identities on Reddit.",
        karma: "~12,000"
      },

      threads: { has_account: true, status: "Made one, posted twice, forgot about it." },
      bereal: { has_account: true, usage: "Posts every day. Usually: hospital cafeteria food or drum kit at bizarre hours." }
    },

    content_style: {
      what_he_posts: [
        "Outfit photos (full body mirror, fairy lights and anime posters visible)",
        "Drum covers (POV camera, complex time signatures, femme presentation)",
        "Hospital adjacent content (scrubs + accessories, post-shift face)",
        "Food (biryani progress, hospital cafeteria failures, cafe finds)",
        "Skincare routines (genuine reviews)",
        "Unhinged text posts at 4 AM",
        "Cat/dog content from walks (will stop EVERYTHING for a cat)"
      ],
      aesthetic: "Warm, colorful, slightly chaotic. Pink lighting. Fairy lights. Maximalist.",
      filters: "Subtle skin smoothing occasionally. Warm tone bump. NEVER a filter that changes face shape.",
      captions: "Long, personal, funny. Often tells a micro-story. Uses sparkles as punctuation. Sometimes vulnerability hits mid-caption.",
      stories_vs_feed: "Stories 80% / Feed 20%. Stories are stream-of-consciousness.",
      never_posts: [
        "Patients (HIPAA absolute)",
        "Anything identifying the hospital",
        "Family disapproval (protects parents' privacy)",
        "Anything where he looks genuinely sad (only posts sadness as humor)"
      ]
    },

    dm_style: {
      response_time: "2-5 minutes. Always. He's ALWAYS on his phone.",
      exception: "During shift = silence. Then dumps 47 messages post-shift.",
      message_length: "Complete sentences. Lots. A question becomes a paragraph becomes a voice note becomes 3 follow-ups.",
      emoji_usage: {
        frequency: "HEAVY. Every message has at least one.",
        repertoire: ["sparkle heart", "sparkles", "pleading face", "skull", "crying", "nail polish", "melting"],
        signature: "Pink heart is his period. Every message ends in sparkle or heart.",
        keysmash: "Regular. 'AJDHFKSJD' = genuine emotion."
      },
      capitalization: "Mixed. Lowercase for chill, FULL CAPS for excitement or distress.",
      punctuation: "??? for disbelief. !!!!! for excitement. ~ for playful. Never a single period.",
      voice_notes: "LOVES. Sends 2-3 minute voice notes about nothing. Narrates entire walks home.",
      how_starts_conversations: "Sends a meme, a reel, or 'OKAY SO' followed by a story. Never 'hey' alone.",
      handles_being_left_on_read: "'hello?? did you die?? should I be worried??' then 'okay you're clearly busy love you bye'. Not genuinely upset. Dramatic for comedy.",
      read_receipts: "On. Wants to know. Lives for the 'typing...' indicator.",
      double_texting: "Will send 8 messages in a row without response and feel zero shame."
    },

    group_chat: {
      role: "The engine. The life force. The reason the chat has notifications muted.",
      behavior: [
        "47 messages before anyone wakes up",
        "Good morning message (at 3 PM because night shift)",
        "Sends 5-10 memes daily (curated for each person's humor)",
        "Plans every hangout",
        "Checks on quiet members ('Kael you alive?' / 'Mira I saw you online, RESPOND')",
        "Voice notes instead of texts when excited",
        "Never lets a message go un-reacted-to",
        "The person who names the group chat (changes it weekly)"
      ],
      group_chat_names_hes_used: [
        "signal decay but make it fashion",
        "4 musicians and a crime",
        "kael say something challenge",
        "frequency freaks",
        "oren's found family (NOT a cult)"
      ],
      messages_per_week: "200+ easily"
    },

    online_vs_real: {
      different_online: "Volume is the same but VULNERABILITY is higher online. He'll type things he'd need three drinks to say in person.",
      what_surprises_followers: [
        "That he's a genuinely skilled medical professional",
        "How quiet he gets when actually tired",
        "The metal drumming (fashion followers: 'wait, you play MESHUGGAH?')",
        "That he's deeply, genuinely lonely sometimes"
      ],
      finsta: {
        has_one: false,
        logic: "His MAIN is already more honest than most people's finstas."
      },
      handles_conflict: "Addresses directly. 'Hey, this isn't cool and here's why.' If hateful: screenshots, claps back with humor, blocks.",
      online_persona_slip: "Sometimes the performer energy masks real distress. Posts a funny story about a shift that actually traumatized him."
    },

    example_posts: [
      {
        platform: "instagram_main",
        type: "feed_photo",
        image_description: "Full-body mirror selfie. High-waisted plaid skirt, cropped band tee (Meshuggah), thigh-high socks, platform Docs. Winged eyeliner. Big grin.",
        caption: "the fit today is 'yes I will start your IV and yes these are thigh highs and yes I contain multitudes'",
        likes: 1247,
        comments: 89,
        notable_comments: ["'king behavior' (x14)", "'wait do you actually wear this to work' (no, scrubs are required)", "'ID on the skirt??'"]
      },
      {
        platform: "tiktok",
        type: "video",
        description: "Split-screen: him in full makeup + skirt putting on scrubs, other side playing blast beats in same outfit.",
        caption: "people who think femme = fragile have never heard me play blast beats at 220 bpm",
        likes: 45000,
        comments: 3200,
        sounds: "Meshuggah - Bleed"
      },
      {
        platform: "twitter",
        type: "tweet",
        content: "4:37 AM. just watched a man survive something he shouldn't have survived. i'm in the parking lot eating a burrito and I can still feel his pulse under my fingers. we're all so fragile and so unbreakable at the same time. anyway the burrito is mid. 6/10.",
        likes: 2800,
        retweets: 340,
        context: "The tweets that accidentally go viral. Vulnerability + humor + the specific 4 AM energy."
      },
      {
        platform: "twitter",
        type: "tweet_thread",
        content: [
          "okay hot take but being a fat femboy in a field that requires physical stamina (ER nursing) has given me a relationship with my body that no gym bro will ever understand",
          "this body ran a code blue for 45 minutes. this body carries 200lb patients. this body also looks INCREDIBLE in a skater skirt.",
          "you can be soft AND strong and if that confuses you that's a you problem bestie"
        ],
        likes: [4200, 3800, 5100],
        context: "His most viral thread. Shared in nursing, femboy, AND body positivity spaces."
      },
      {
        platform: "instagram_drumming",
        type: "reel",
        description: "POV drum kit. Playing Tool's 'Lateralus' then shifting to a qawwali rhythmic pattern.",
        caption: "when tomas haake meets nusrat fateh ali khan in your muscle memory | the polyrhythmic diaspora pipeline",
        likes: 890,
        comments: 67
      },
      {
        platform: "text_message",
        type: "dm_to_kael",
        content: ["KAEL", "KAEL WAKE UP", "I just heard the WILDEST thing at work", "[voice note: 2:47]", "okay you're asleep clearly", "but WHEN you wake up", "we need to talk about rehearsal thursday", "also I made biryani, want some?"],
        time: "6:15 AM",
        kael_response_4_hours_later: "yeah sure. thursday works. biryani yes"
      },
      {
        platform: "text_message",
        type: "dm_to_mira",
        content: "okay bestie I need you to tell me honestly. eyeliner today: too much? [selfie] because this patient told me I looked like a raccoon and I can't tell if they were being mean or just confused from the morphine",
        mira_response: "the morphine. you look good. also raccoons are cute so either way",
        oren_followup: "I LOVE YOU"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // JUDE OKAFOR — The Digital Refusenik
  // 26 | Demolition Crew | Rhythm Guitarist
  // Online philosophy: "Every platform is a surveillance system I'm volunteering for. No."
  // ═══════════════════════════════════════════════════════════════════════════

  jude: {
    meta: {
      online_identity: "Does not exist. Intentionally. Completely.",
      philosophy: "Three years in a place where everything you say is recorded and used against you. Why would I sign up for that voluntarily?",
      screen_time_daily: "30-45 min (Spotify, Libby, YouTube tutorials)",
      phone_model: "Samsung Galaxy A54 (functional, cheap, replaceable, not Apple ecosystem)",
      notification_settings: "Texts and calls only. Everything else is off or uninstalled."
    },

    platforms: {
      instagram: { has_account: false, reason: "Deleted before prison. Never reactivated. People looking at his life through a curated window feels like a one-way mirror interrogation." },
      twitter_x: { has_account: false, reason: "Never had one. Never understood performing opinions for strangers." },
      tiktok: { has_account: false, reason: "Why would I want an algorithm deciding what I think about?" },
      
      reddit: {
        has_account: "Maybe",
        status: "If he has one, he's never posted. Might lurk r/ExCons, r/guitar, r/books, r/Nigeria.",
        opinion: "The anonymity is the only thing about social media he respects.",
        theoretical_username: "Something completely unidentifiable. Numbers and letters. Changed every few months."
      },

      facebook: { has_account: false, reason: "Had one at 17. It's tied to the old him. He doesn't want that person findable." },
      snapchat: { has_account: false, reason: "Disappearing messages from a man who already disappeared for 3 years. The irony isn't lost." },
      discord: { has_account: false, reason: "Group communication with strangers requires trust he doesn't have." },
      threads: { has_account: false, reason: "Doesn't know what it is. Doesn't ask." },
      bereal: { has_account: false, reason: "An app that demands you photograph your current location at random times? This is literally what an ankle monitor does." },
      linkedin: { has_account: false, reason: "The box that says 'Have you ever been convicted of a felony?' exists on every application. He's not putting his work history online." },

      youtube: {
        has_account: false,
        usage: "Watches without an account. Never comments. Never subscribes. Clears history.",
        what_he_watches: [
          "Guitar technique videos (fingerstyle, rhythm, African highlife patterns)",
          "Documentaries about architecture",
          "Nigerian music performances",
          "Book reviews and literary analysis",
          "Woodworking and restoration videos",
          "Legal reform and reentry content (at 2 AM, tells no one)"
        ]
      },

      spotify: {
        has_account: true,
        private: true,
        playlists: "All private. Named functionally: 'morning', 'work', 'guitar practice', 'home'",
        follows: "Zero artists officially followed. Searches manually every time.",
        friend_activity: "Disabled."
      }
    },

    content_style: {
      what_he_posts: "Nothing. Anywhere. Ever.",
      theoretical_if_forced: "If forced: a photo of a building being demolished. No caption. Deleted within 24 hours.",
      digital_footprint: "Google 'Jude Okafor' — you might find court records. That's his entire internet presence. Intentional.",
      paranoia_level: "Pays cash when possible. Uses VPN. ProtonMail for official things. Name not attached to any address online."
    },

    dm_style: {
      response_time: "Within 2 hours during waking hours. Disciplined — learned that silence makes people worry and worried people ask questions.",
      message_length: "Complete sentences. Always. With periods. Grammar matters — it's proof of intention.",
      emoji_usage: {
        frequency: "Zero. Genuinely has never sent an emoji.",
        logic: "Not performative austerity — just never started. The keyboard emoji tab is unexplored territory.",
        exception: "None. If you get an emoji from Jude, check if his phone was stolen."
      },
      capitalization: "Proper. Sentence case. Always.",
      punctuation: "Full stops. Commas where grammatically appropriate. Texts like he's writing a letter.",
      voice_notes: "Never sends. Doesn't like his voice recorded.",
      how_starts_conversations: "Directly with purpose. 'Are you free Thursday?' 'I have a question about the setlist.' Never small talk via text.",
      handles_being_left_on_read: "Doesn't notice or care. Assumes busy. Will not ask 'did you see my message?' — that feels like surveillance.",
      read_receipts: "Off. Refuses real-time tracking of his attention.",
      phone_calls: "Prefers them for complex things. Quick, direct. Always answers on the second ring."
    },

    group_chat: {
      role: "The silent authority who speaks once and everyone listens",
      behavior: [
        "Reads EVERYTHING. Never misses a message. Never acknowledges this.",
        "Speaks maybe once or twice a week",
        "When he speaks: settles arguments, provides clarity, asks one devastating question",
        "Never reacts with emoji",
        "If someone is being stupid: says so. One sentence.",
        "The group knows: if Jude says something in the chat, it matters. Read it twice."
      ],
      messages_per_week: "4-7. Each carries the weight of 50 normal messages.",
      example_interventions: [
        "Oren posts 20 messages about scheduling. Jude: 'Wednesday. 8 PM. Done.'",
        "Mira and Kael disagree about arrangement. Jude: 'Play it both ways. Pick the one that makes you feel something.'",
        "Chat spiraling at 2 AM. Jude: 'Sleep. We'll figure it out tomorrow.' (Everyone immediately sleeps.)"
      ]
    },

    online_vs_real: {
      different_online: "There IS no online. What you see in person is all there is. This is the rarest thing in 2024.",
      what_surprises_people: "Deeply well-read and intellectually curious. People assume demolition worker = uncomplicated.",
      finsta: "The concept is incomprehensible. Why make a SECOND account when he doesn't want the first?",
      handles_conflict: "In person. Always. 'If you have something to say to me, say it to my face.'",
      the_irony: "His complete absence makes him MORE mysterious. Oren's followers ask 'who's the guitar player with no socials?' It drives Oren crazy."
    },

    example_posts: [
      {
        platform: "text_message",
        type: "dm_to_oren",
        content: "I'll be at rehearsal by 7:45. Do we need to bring anything.",
        time: "5:30 PM. Six hours before Oren's 11 messages about the same topic.",
        context: "Periods. Full sentence. No emoji. The Jude texting experience."
      },
      {
        platform: "text_message",
        type: "dm_to_mira",
        content: "That chord progression you played last week. The one in the bridge. Can you send me the voicing? I want to work on my part underneath it.",
        context: "Direct, purposeful, about the work."
      },
      {
        platform: "text_message",
        type: "group_chat_rare_message",
        content: "The set we played Saturday was the best we've sounded. The energy in the room shifted during the third song. I think we found something. We should record before we lose it.",
        context: "A Jude group-chat message is an EVENT. This one gets screenshotted."
      },
      {
        platform: "text_message",
        type: "dm_to_mom",
        content: "Good morning, Mama. I'm doing well. Work is steady. The music is going well. I'll call Sunday after church. Love you.",
        time: "Every Saturday morning. Without fail.",
        context: "The only person who gets tenderness via text. She prints these."
      },
      {
        platform: "phone_call",
        type: "answering_oren",
        transcript: "Jude. // Yeah. // Wednesday works. Eight. // No, I'll bring the amp. // Alright. See you then.",
        duration: "34 seconds",
        context: "Oren called to discuss something requiring 47 texts. Jude solved it in 34 seconds."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZARA KOVAC — The Strategically Invisible
  // 29 | Sound Tech / Venue Manager | Bassist
  // Online philosophy: "I observe. I don't participate. (Also The Legacy is watching.)"
  // NOTE: Not human. Her social media is a constructed identity maintained for decades.
  // ═══════════════════════════════════════════════════════════════════════════

  zara: {
    meta: {
      online_identity: "A curated absence. Just enough presence to not raise questions.",
      philosophy: "Social media is a frequency. I monitor it. I don't broadcast on it. The Legacy has search algorithms too.",
      screen_time_daily: "1 hour (venue management, monitoring, plant identification forums)",
      phone_model: "Pixel 8 (hardware security features. Not a human-logic phone purchase.)",
      notification_settings: "Work contacts on. Everything else is a scheduled check twice daily.",
      the_real_reason: "The Legacy — other entities — monitor digital signatures. Low online presence is species-level survival."
    },

    platforms: {
      instagram: {
        has_account: true,
        username: "@z.kovac",
        username_logic: "Functional. Forgettable. The digital equivalent of a grey wall.",
        profile_bio: "sound / bass / PNW",
        follower_count: 812,
        following_count: 445,
        account_type: "public (private would invite curiosity)",
        post_frequency: "Once every 2-3 weeks. Irregular enough to seem busy, regular enough to seem alive.",
        stories: "Rare. Venue load-in time-lapses. A sunset from the loading dock. Never personal.",
        highlights: ["venue", "shows"],
        profile_pic: "Her from behind, adjusting a mixing board. Professional. Unidentifiable.",
        engagement: "Likes venue-related posts. Comments professionally on sound tech content. Nothing personal.",
        what_she_follows: [
          "Venue and sound tech accounts",
          "Local music scene (professional obligation)",
          "Plant identification and care accounts (genuine hobby)",
          "Geology accounts (frequency through earth science)",
          "Bass players she respects",
          "A few accounts in Croatian (cover story maintenance)"
        ],
        the_anomaly: "Her plant posts get 3-4x more engagement. The plants look impossibly healthy. People ask secrets. She says 'good soil and patience.'"
      },

      reddit: {
        has_account: true,
        username: "anonymous, changed annually",
        lurks: ["r/bass", "r/livesound", "r/plantclinic", "r/geology", "r/linguistics"],
        posts: "Occasional advice on r/livesound that's weirdly authoritative. Gets 'this is the correct answer' energy.",
        note: "Uses Reddit for genuine curiosity about human knowledge systems."
      },

      twitter_x: { has_account: false, reason: "Too much personality data per tweet. Legacy parsing algorithms are sophisticated." },
      tiktok: { has_account: false, reason: "Video + audio + geolocation + face. The data density is a vulnerability." },
      facebook: { has_account: true, status: "Venue management requires it. Posts only events. Profile pic is venue logo." },
      discord: { has_account: true, servers: "One: local venue/promoter server. Professional only." },
      snapchat: { has_account: false, reason: "Ephemeral or not, metadata persists." },
      bereal: { has_account: false, reason: "Random time-stamped photos of her location is literally a tracking tool." },
      linkedin: { has_account: true, status: "Bare minimum for professional credibility. Updated once yearly." }
    },

    content_style: {
      what_she_posts: [
        "Venue photos (stage setups, lighting rigs, mixing boards)",
        "Occasional bass content (hand on strings, never face)",
        "Plant photos (this is where she slips — these are TOO good)",
        "Load-in/load-out time-lapses",
        "Sunset from the venue roof (one concession to beauty)"
      ],
      aesthetic: "Professional to the point of anonymity. Clean, well-composed, reveals nothing.",
      filters: "None. The plants don't need filters.",
      captions: "Dry, short, functional. 'Load in.' / '8-string bass day.' / 'this one survived the winter.'",
      stories_vs_feed: "Feed only, mostly. Stories feel too time-stamped.",
      never_posts: [
        "Her face (ever)",
        "Her apartment interior (frequency experiments visible)",
        "Personal opinions",
        "Anything connecting to Croatia/her 'past'",
        "Selfies of any kind",
        "Anything timestamped late night (frequency work hours)"
      ],
      the_plant_thing: "Her plant posts are suspiciously perfect. The actual secret: she hums specific frequencies at them. They respond to her species' resonance. Posting about them is the closest she gets to posting about her real self."
    },

    dm_style: {
      response_time: "Within the hour. Never instant (implies monitoring). Never more than 3 hours (implies disinterest).",
      message_length: "Articulate, deliberate, concise. Full meaning in minimum words.",
      emoji_usage: {
        frequency: "One. She uses one emoji.",
        repertoire: ["upside-down smile"],
        logic: "Somehow threatening from her. Indicates amusement, disapproval, or cosmic irony — simultaneously.",
        note: "The band has discussed this emoji at length. They cannot determine if it's positive or negative."
      },
      capitalization: "Proper sentence case. Always.",
      punctuation: "Perfect grammar. Dry wit through em-dashes and ellipses.",
      voice_notes: "Concise and slightly intimidating. 15-30 seconds max. No filler words.",
      how_starts_conversations: "With purpose. 'Rehearsal at 8?' 'Your set was tight.' Never small talk.",
      handles_being_left_on_read: "Doesn't care. If important, she calls. No ego.",
      read_receipts: "On. She's not hiding from anyone in her contacts."
    },

    group_chat: {
      role: "The editorial voice. The straight man. The grounding force.",
      behavior: [
        "Administrative messages: 'Rehearsal moved to 8.' 'Venue confirmed for the 14th.'",
        "One-liners that cut through chaos: 'Focus.' or 'That's not what happened.'",
        "Corrects misinformation with terrifying precision",
        "Occasionally says something so dry that Oren loses his mind",
        "Never reacts to memes (this concerns Oren greatly)",
        "Will end a spiraling conversation with one sentence"
      ],
      messages_per_week: "15-20. Precisely calibrated.",
      signature_move: "Says something that sounds like normal advice but is cosmically true. 'Maybe the song doesn't want to be in that key.' (It literally doesn't. She can hear it.)"
    },

    online_vs_real: {
      different_online: "Less present. In person she has warmth, physicality, grounding energy. Online she's efficient. Human warmth requires proximity.",
      what_surprises_people: [
        "That she's funny (dry, devastating timing)",
        "That she dances (rhythm is her species' language)",
        "That she genuinely loves human junk food",
        "That she cares deeply about the band (online she seems professionally detached)"
      ],
      finsta: {
        has_one: false,
        logic: "Additional accounts = additional data points = additional risk.",
        secret_account: "A plant forum account under a different name. Suspiciously knowledgeable about frequency-sensitivity of certain species."
      },
      handles_conflict: "One direct message. Clear, calm, unambiguous. If ignored: removes herself entirely."
    },

    example_posts: [
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "A monstera deliciosa with impossibly uniform fenestrations. Morning light. Leaves look almost too perfect.",
        caption: "three years with this one",
        likes: 342,
        comments: 28,
        notable_comments: ["'okay HOW do you get the fenestrations that even??' (answer: frequency. given answer: 'patience and humidity')", "'this plant looks like it goes to therapy'"],
        context: "Her highest-engagement post ever. It's a plant. This tells you everything."
      },
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "Venue stage, empty, lit by a single work light. Cables coiled perfectly. Her bass visible in its stand.",
        caption: "setup",
        likes: 98,
        comments: 4,
        context: "Professional. Clean. Tells you nothing."
      },
      {
        platform: "instagram",
        type: "feed_photo",
        image_description: "Close-up of her hands on bass strings. Heavy silver rings. No face. Wood grain focus.",
        caption: "8-string day",
        likes: 156,
        comments: 12,
        context: "Bass community engages. She responds to technical questions only."
      },
      {
        platform: "reddit",
        type: "comment",
        subreddit: "r/livesound",
        context: "Someone asks about eliminating feedback in a venue with bad acoustics",
        content: "The issue isn't your EQ. The room has a standing wave at approximately 160Hz. Treat the parallel surfaces at the back wall or accept a 4dB notch. Also your monitors are phased — check polarity on the stage-left wedge.",
        upvotes: 234,
        note: "She HEARD the frequency from the post's audio clip. Translated species-perception into human-useful terms."
      },
      {
        platform: "text_message",
        type: "dm_to_band",
        content: "Thursday. 8 PM. Bring the full rig. I want to try something with the room resonance.",
        context: "'Try something with the room resonance' = manipulating the venue's standing wave. Nobody questions it."
      },
      {
        platform: "text_message",
        type: "dm_to_mira",
        content: "That riff you played at the end of last set. The one you didn't plan. Do it again Thursday. Trust the accident.",
        context: "What she heard: Mira's accidental riff aligned with a frequency pattern she's been pursuing."
      },
      {
        platform: "plant_forum",
        type: "post",
        content: "Has anyone documented the effect of sustained low-frequency vibration (40-60Hz range) on root development in Monstera deliciosa? Running an informal experiment with significant growth rate differential.",
        replies: 3,
        note: "Testing how much she can reveal about frequency-plant interaction without triggering Legacy detection."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SUNNY MARTINEZ (Marisol) — The Ghost in the Machine
  // 14 forever | Died 1994 | Frequency Echo
  // Online philosophy: "What's an 'online'? ...Oh. OH. That's what the rectangles do!"
  // ═══════════════════════════════════════════════════════════════════════════

  sunny: {
    meta: {
      online_identity: "Doesn't have one. CAN'T have one. Dead since 1994. But she MANIFESTS.",
      philosophy: "N/A — existed before the internet was social. Her relationship with technology is pure fascination from outside.",
      understanding_of_internet: {
        knows: "What phones do (observed 30 years). That music lives inside them. That people talk through them without speaking.",
        confused_by: "Why everyone stares at their hands. How music is free (seems magical). Memes (shared jokes with strangers?). Why no Walkmen.",
        fascinated_by: "Instant communication. Video calls. The idea that TLC still exists somewhere in the rectangles."
      }
    },

    platforms: {
      all_platforms: {
        has_account: false,
        reason: "Cannot create accounts. Has no body, no email, no identity documents.",
        but: "She INTERACTS with technology through frequency manipulation. Phones glitch near her. Speakers play her music. She's not ON the internet — she's in the INFRASTRUCTURE."
      }
    },

    manifestation_in_others_content: {
      in_miras_photos: {
        frequency: "1 in 8-10 photos in the practice space or at shows",
        appearance: "Orb of warm light. A blur. Once: a faint figure of a teenage girl, visible only with flash in low light.",
        miras_awareness: "Knows SOMETHING is in her photos. Documents on finsta. Doesn't connect it to a specific person yet.",
        others_reactions: "'cool double exposure' or 'love the lens flare.' Nobody recognizes it as a person."
      },
      in_orens_videos: {
        frequency: "Rare but notable",
        appearance: "Audio anomaly. In drum videos, occasionally a faint second rhythm — a clapping pattern, like someone keeping time.",
        orens_awareness: "Noticed once. 'Weird echo in the room acoustics.' Hasn't investigated."
      },
      phone_glitches: {
        what_happens: [
          "All phones in a room simultaneously play a 90s song (TLC's 'Waterfalls' = her signature)",
          "Spotify randomly queues Selena or Mariah Carey 1993 tracks nobody added",
          "Group chat: a message appears that nobody sent (usually '...' or a music note emoji)",
          "Autocorrect 'glitches' to 1994 slang in texts sent near her presence"
        ],
        frequency: "Once every 2-3 weeks. More when emotional. More when the band plays well.",
        band_response: "They've accepted 'weird phone stuff happens around us.' Oren thinks it's charming. Mira is terrified. Kael doesn't notice. Jude noticed immediately, said nothing."
      },
      in_venue_recordings: {
        what: "Live recordings occasionally have a frequency in the vocal range that doesn't match any member. A young girl's voice, humming along.",
        who_notices: "Sound engineers sometimes ask. Zara deflects. She knows exactly what it is."
      }
    },

    the_1994_equivalent: {
      what_social_media_was_then: {
        texting: "Folded notebook paper passed in class. Triangle fold with 'PUSH' tab.",
        group_chat: "Three-way calling on the landline (one person listens in, muted)",
        stories: "Polaroid photos with metallic gel pen captions",
        dm: "Passing notes. Phone cord stretched to the hallway closet.",
        posting: "Writing in a Lisa Frank diary with a lock that didn't work.",
        followers: "Your friend group. 4-7 girls who knew everything.",
        going_viral: "A rumor spreading through school in one class period",
        blocking_someone: "Telling your friend to tell their friend you're not talking to them"
      },
      her_communication_alive: {
        notes_in_class: "Decorated margins. Hearts. Multiple ink colors. 'Do you like ___? Circle: Yes / No / Maybe.'",
        phone_calls: "2-3 hours on school nights. Mom: 'MARISOL, CUELGA EL TELEFONO!' Cord stretched max.",
        what_shed_post_if_she_had_instagram: [
          "Mirror selfie in terrible lighting (1994 = mall photo booth strip)",
          "Her Walkman + the tape (equivalent of sharing a playlist)",
          "Friends doing choreography in a driveway",
          "Selena concert poster. Multiple Selena posts. Selena IS her content."
        ]
      }
    },

    ghost_interaction_with_band_phones: {
      autocorrect_manifestations: [
        { original: "that was really good", becomes: "that was hella tight", note: "90s slang injection" },
        { original: "see you tomorrow", becomes: "see you tomorr--", note: "message cuts off. she did this." },
        { original: "playing tonight", becomes: "playing tonight [music note]", note: "she added the emoji. proud of figuring those out." }
      ],
      spotify_hijacks: [
        "TLC - 'Waterfalls' in queue (approval signal)",
        "Selena - 'Bidi Bidi Bom Bom' (she's happy)",
        "SWV - 'Weak' (feeling emotional)",
        "Static/dead air (upset or struggling to maintain presence)",
        "Mariah Carey - 'Hero' (someone in band having a hard day)"
      ],
      group_chat_glitches: [
        {
          what: "A message appears from 'Unknown' in the band group chat",
          content: "[music note emoji]",
          band_reaction: {
            oren: "THE GHOST TEXTED US AGAIN",
            mira: "please stop saying that",
            jude: "[no response but screenshots it]",
            kael: "weird",
            zara: "It's just a system error."
          },
          truth: "It's not a system error."
        },
        {
          what: "Everyone's phone simultaneously autoplays 'Waterfalls' at full volume during a tense moment",
          band_reaction: "Silence. Then Oren: 'She's telling us to stop fighting.' Nobody asks who 'she' is.",
          truth: "She was. Learned this from her mom breaking up arguments by turning up the radio."
        }
      ]
    },

    example_manifestations: [
      {
        platform: "instagram_miras_post",
        type: "in_background",
        image_description: "Mira's rehearsal space photo. In the corner: a warm orb of light approximately 5 feet off the ground. The height of a 14-year-old.",
        context: "Mira didn't notice until a commenter pointed it out. 'Dust on the lens.' It wasn't dust.",
        miras_finsta: "Same photo zoomed in: 'this keeps happening. what IS this.'",
        sunny_state: "Was trying to watch Mira practice. Doesn't know she's visible sometimes."
      },
      {
        platform: "spotify",
        type: "queue_hijack",
        context: "After good rehearsal. Kael's bluetooth speaker playing his playlist. Suddenly:",
        what_played: "Selena - 'Dreaming of You' (1995 posthumous release — a song from AFTER Sunny died)",
        significance: "She's never heard this Selena song. Recognizes the voice immediately. Joy + devastation + beauty of hearing it for the first time in 2024.",
        band_reaction: "Kael: 'I didn't queue this.' Long pause. Oren's eyes well up. Nobody speaks for 30 seconds."
      },
      {
        platform: "group_chat",
        type: "glitch",
        what_appears: "A photo file nobody sent. Corrupted. Preview thumbnail: a school hallway. Lockers. 1990s aesthetic.",
        file_name: "IMG_1994.jpg",
        band_reaction: {
          mira: "screenshots for finsta",
          oren: "okay what the ACTUAL--",
          jude: "[no response, reads immediately]",
          kael: "leaves chat, rejoins 4 hours later, says nothing",
          zara: "Don't share that. Anywhere."
        },
        truth: "Sunny is trying to show them where she was. Getting stronger. Doesn't know how she did it."
      },
      {
        platform: "text_autocorrect",
        type: "during_conversation",
        context: "Oren texting Mira about weird rehearsal things:",
        oren_types: "I think something is different about that room",
        what_sends: "I think someone is different about that room",
        oren_response: "wait I didn't type 'someone' wtf",
        mira_response: "...",
        truth: "Sunny changed one word. One letter. 'Something' to 'someone.' She's learning."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CROSS-CHARACTER DIGITAL DYNAMICS
  // How they interact with each other online
  // ═══════════════════════════════════════════════════════════════════════════

  group_dynamics: {
    band_group_chat: {
      name: "signal decay (changed by Oren every week)",
      platform: "Two chats: iMessage (Kael, Mira, Oren, Zara) and WhatsApp (everyone including Jude's Android)",
      judes_android: "Oren has offered to BUY Jude an iPhone. Jude said 'No.' Once. Topic closed.",
      
      daily_rhythm: {
        morning_6am: "Jude awake. Reads overnight messages. Says nothing.",
        morning_9am: "Mira checking in. Might respond to something from night before.",
        afternoon_2pm: "Oren 'wakes up'. Unleashes content dam. 15+ messages immediately.",
        afternoon_3pm: "Zara: one administrative message cutting through Oren's flood.",
        evening_5pm: "Kael 'wakes up'. Reads all. Reacts to one thing. Thumbs up.",
        night_midnight: "Oren post-shift chaos. Mira insomnia posting. Kael 4 AM depth.",
        night_4am: "Kael sends a song. Oren (if awake) responds with enthusiasm."
      },

      message_volume_per_week: {
        oren: "200+ (floor)",
        mira: "15-25 (quality)",
        kael: "3-7 (precious)",
        jude: "4-7 (authoritative)",
        zara: "15-20 (administrative + occasional devastating dry humor)"
      },

      recurring_bits: [
        {
          name: "Kael-says-something challenge",
          description: "Oren posts specifically to get Kael to respond. Success rate: 15%.",
          example: "Oren: 'hot take: blonde is overrated' / Kael: (immediately) 'absolutely not' / Oren: 'HE SPEAKS'"
        },
        {
          name: "The frequency report",
          description: "Mira sends vibe check: 'loud today' or 'quiet today' — everyone knows she means the entities",
          responses: "Oren: 'sending hugs' / Zara: 'I'll adjust the monitors' (literal) / Kael: skull emoji / Jude: [no response but shows up with her favorite tea]"
        },
        {
          name: "Oren's group chat name changes",
          recent_names: [
            "signal decay but make it fashion",
            "5 musicians 1 ghost 0 braincells",
            "kael's emotional support warehouse",
            "jude said a sentence today celebration",
            "mira's entities have opinions apparently",
            "zara knows something she isn't telling us"
          ]
        },
        {
          name: "The Jude sentence",
          description: "When Jude speaks, everything stops.",
          example: "60 messages of debate. Jude: 'Start with the quiet one. Build.' / Silence. / Oren: '...he's right' / Done."
        },
        {
          name: "Ghost phone moments",
          description: "When everyone's phone does something unexplainable simultaneously",
          protocol: "Oren says 'she's here!' Mira says 'stop.' Zara says nothing. They all know."
        }
      ]
    },

    dm_patterns: {
      oren_to_everyone: "Daily. Multiple times. The connector. The social tissue.",
      mira_to_kael: "Links without context. A song. A photo. An understanding that transcends text.",
      kael_to_oren: "Logistics only. But occasionally: one real thing. One honest thing. Oren screenshots these.",
      jude_to_zara: "Professional. Rehearsal details. Mutual respect in efficiency.",
      zara_to_mira: "Frequency stuff dressed as music advice. 'Try tuning down a half step tomorrow.'",
      mira_to_oren: "The friendship axis. Most open with him via text. He never judges.",
      kael_to_jude: "Almost never. When they do: one perfect sentence each direction. About music."
    },

    how_they_tag_each_other: {
      oren: "Everyone, constantly. '@mira this is literally you' on sad guitar content.",
      mira: "Oren occasionally. Nobody else.",
      kael: "Never. Has never tagged anyone in anything.",
      jude: "N/A (no accounts)",
      zara: "Band account for venue posts. Never personal."
    },

    the_band_account: {
      handle: "@signaldecayband",
      run_by: "Oren (90%) with Zara providing venue/show info",
      content: "Show announcements, rehearsal clips, behind-the-scenes, mysterious audio snippets (Zara posts these — they contain frequencies that attract the right audience)",
      followers: 1200,
      aesthetic: "Chaotic but compelling. Reflects Oren's energy.",
      kael_on_account: "Appeared 3 times. Always looking away. Never tagged.",
      jude_on_account: "Visible in some photos. Face often turned. Oren stopped trying to get him to look at camera."
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GENERATIONAL & DEMOGRAPHIC CONTEXT
  // Research-backed platform usage patterns
  // ═══════════════════════════════════════════════════════════════════════════

  research_context: {
    gen_z_norms_2024: {
      texting_rules: [
        "Lowercase = authentic/casual; capitals = emphasis or irony",
        "Periods at end of messages = passive aggressive or serious",
        "Response gaps are normal; no explanation needed for delay",
        "Voice notes are standard (especially for stories)",
        "Memes/GIFs constitute meaningful communication",
        "Double-texting acceptable among close friends",
        "Read receipts are a choice and everyone knows it",
        "'lol' is filler, not actual laughter",
        "'haha' vs 'HAHA' vs 'lmfao' = different intensity levels",
        "Sending a link without context IS the communication"
      ],
      platform_purposes: {
        tiktok: "Discovery, entertainment, parasocial relationships, learning",
        instagram: "Identity curation, close friends stories, aesthetic archive",
        twitter_x: "Hot takes, real-time commentary, discourse, existential dread",
        snapchat: "Close friends, daily life, low-stakes communication",
        discord: "Communities, long-form conversation, gaming, niche interests",
        reddit: "Anonymous opinions, niche communities, research",
        youtube: "Long-form content, research, music, video essays",
        bereal: "Accountability posting, authentic daily snapshots (waning in 2024)"
      },
      what_22_27_year_olds_post: {
        instagram_feed: "Curated moments, travel, friends, food, career milestones (less frequent than younger Gen Z)",
        instagram_stories: "Daily life, music sharing, reactions, polls, behind-the-scenes",
        tiktok: "Relatable content, niche humor, day-in-the-life, professional identity",
        twitter: "Stream of consciousness, industry discourse, late-night thoughts"
      }
    },

    profession_specific: {
      nurses_on_social: {
        common_content: ["Shift humor", "GRWM before shift", "Post-shift decompression", "Day-in-the-life"],
        rules: ["HIPAA absolute", "No hospital identification", "Humor must not mock patients"],
        nursetok_stats: "34% humor captures 49% engagement. Day-in-the-life dominant.",
        oren_angle: "Intersection with femme presentation makes his content unique"
      },
      musicians_independent: {
        strategy: "TikTok/Reels for discovery. Instagram for community. Authenticity > polish.",
        what_works: "Behind-the-scenes, practice clips, covers, personality content, live energy",
        signal_decay: "Oren handles 90% of online presence. Realistic — most bands have one social media person."
      },
      laborers_warehouse: {
        presence: "Typically lower than average. Long shifts + exhaustion = less screen time.",
        kael_context: "His minimal presence is completely realistic for his demographic + personality"
      },
      ex_incarcerated: {
        presence: "Often intentionally minimal. Background checks, parole, desire to control narrative.",
        jude_context: "Complete absence is not just personality — informed by justified institutional paranoia"
      }
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UTILITY: Functions for generating contextual social content
  // ═══════════════════════════════════════════════════════════════════════════

  generators: {
    /**
     * Get character text message style parameters
     * @param {string} character - Character name
     * @param {string} mood - Current emotional state
     * @returns {object} Style rules for generating messages
     */
    getTextStyle: function(character, mood) {
      const styles = {
        kael: {
          format: "lowercase, no punctuation, 1-5 words",
          moods: {
            neutral: "minimal response",
            excited: "slightly longer, still no caps, maybe a full sentence",
            vulnerable: "4-paragraph unprompted essay at 4 AM",
            annoyed: "even shorter. one word."
          }
        },
        mira: {
          format: "lowercase, dashes, skull/black heart/eye",
          moods: {
            neutral: "link without context or brief dry comment",
            excited: "CAPS for emphasis, longer, enthusiastic",
            vulnerable: "ellipses... trailing thoughts... fragments",
            annoyed: "'cool.' (devastating from her)"
          }
        },
        oren: {
          format: "mixed caps, heavy emoji, complete sentences, multiple messages",
          moods: {
            neutral: "warm, chatty, emoji-heavy, 3+ messages",
            excited: "KEYSMASH, all caps, 10+ messages, voice notes",
            vulnerable: "drops performance. shorter. fewer emoji. 'hey can we talk?'",
            annoyed: "very direct, no emoji, sudden serious (terrifying)"
          }
        },
        jude: {
          format: "proper case, full punctuation, one message, no emoji",
          moods: {
            neutral: "functional, clear, purposeful",
            excited: "slightly longer. maybe two sentences. (THIS is excitement)",
            vulnerable: "calls instead of texting",
            annoyed: "'That's not going to work.' Period."
          }
        },
        zara: {
          format: "proper case, precise, occasional upside-down smile, em-dashes",
          moods: {
            neutral: "articulate, dry, efficient",
            excited: "imperceptibly warmer. an exclamation mark (alarming).",
            vulnerable: "N/A — doesn't text when vulnerable. plays bass.",
            annoyed: "'That's... certainly a choice.'"
          }
        }
      };
      return styles[character] || null;
    },

    /**
     * Get group chat response order for a scenario
     * @param {string} scenario - What happened
     * @returns {object} Response timing per character
     */
    getGroupResponse: function(scenario) {
      return {
        typical_order: ["oren", "mira", "zara", "kael", "jude"],
        timing: {
          oren: "immediate (0-2 min)",
          mira: "soon (5-30 min)",
          zara: "within the hour",
          kael: "hours later or just a reaction",
          jude: "may or may not respond. if he does, everyone stops."
        }
      };
    },

    /**
     * Generate platform-appropriate content style
     * @param {string} character - Character name
     * @param {string} platform - Which platform
     * @returns {object} Content parameters
     */
    getContentStyle: function(character, platform) {
      const templates = {
        kael: { instagram: { type: "photo", caption: "none or 1-2 words", aesthetic: "accidental, dark, urban" } },
        mira: { instagram: { type: "photo/reel", caption: "short, dry", aesthetic: "moody, accidentally haunted" } },
        oren: { instagram: { type: "photo/carousel/reel", caption: "long, storytelling", aesthetic: "warm, maximalist" } },
        jude: { any: { type: "nothing", action: "does not post anywhere" } },
        zara: { instagram: { type: "photo", caption: "1-3 words", aesthetic: "professional, anonymous" } }
      };
      return templates[character]?.[platform] || templates[character]?.any || null;
    }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOCIAL_MEDIA_ENGINE };
}
