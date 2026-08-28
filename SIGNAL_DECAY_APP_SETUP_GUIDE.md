# 📡 Signal Decay — Complete App Setup Guide

> **Who this is for:** You're a creative person, not a coder. This guide explains everything in plain English with tap-by-tap instructions. No programming knowledge required.

---

## Table of Contents

1. [How to Activate All AI Functions](#1-how-to-activate-all-ai-functions)
2. [How to Make This a PWA (Real App)](#2-how-to-make-this-a-pwa-progressive-web-app)
3. [Azure Hosting Options (Put It Online)](#3-azure-hosting-options)
4. [Quick Start Checklist](#4-quick-start-checklist)
5. [Future AI Features Roadmap](#5-future-ai-features-roadmap)

---

## 1. How to Activate All AI Functions

Your Signal Decay reader has **five audio/AI systems** built in. Here's how each one works and how to turn it on.

---

### 🗣️ Character Voices (Web Speech API — Free, Built-in)

**What it is:** Your browser can read text aloud using built-in voices. Signal Decay assigns each character a unique voice — different pitch, speed, and tone — so you can *hear* who's speaking without reading the name.

**Cost:** Completely free. Built into your browser. Nothing to install.

**Which browsers work:**
| Browser | Works? | Notes |
|---------|--------|-------|
| ✅ Google Chrome | Yes | Best support, most voices |
| ✅ Microsoft Edge | Yes | Great, uses same engine as Chrome |
| ✅ Safari (Mac/iPhone) | Yes | Good quality, fewer voice options |
| ⚠️ Firefox | Partial | Voices may sound robotic or not load |

**How to turn it on:**

1. Open `immersive_reader.html` in **Google Chrome** (drag the file onto a Chrome window, or right-click → Open With → Chrome)
2. Tap the **☰ menu** or **⚙️ Settings** button (gear icon)
3. Find the **"Voice"** section
4. Make sure **"Enable Voices"** toggle is switched **ON** (it's on by default)
5. Adjust **"Voice Volume"** slider to your preference (80% default)
6. Close settings

**How to test it:**

1. From the title screen, tap **"Play Demo"** or load any story
2. As panels advance, you'll see a small indicator at the bottom showing the character name and a sound wave animation
3. Each character sounds different:
   - **Narrator** — slow, deep, calm
   - **Marcus Chen** — natural male pitch
   - **Oren Nakamura** — slightly higher, faster (energetic hacker)
   - **Hass Rivera** — deep, deliberate (ex-military)
   - **Juno Park** — high pitch, warm (journalist)
   - **Mira Volkov** — medium-high, slower (mysterious physicist)
   - **Sunny Martinez** — highest pitch, fast (kid energy)
   - **Legacy Agent** — very deep, very slow (menacing)
   - **Abuela Rosa** — warm, medium-high, slow (grandmotherly)

**Troubleshooting:**

- **No voice plays at all?** → Make sure your device isn't muted. Check that volume slider in settings is above 0.
- **Voices take a moment to appear the first time?** → This is normal! The browser needs to download its voice list on first use. Close the page, wait 5 seconds, reopen it. They'll load.
- **Only one robotic voice?** → You're probably on Firefox. Switch to Chrome or Edge.
- **Voice cuts out mid-sentence?** → Chrome has a bug with long text. The app breaks text into chunks to avoid this, but if it happens, tap the back arrow then forward to replay that panel.

---

### 🎭 Premium Character Voices (ElevenLabs — Optional Upgrade)

**What it is:** ElevenLabs is an AI voice company that creates studio-quality, human-sounding voices. Instead of robotic browser voices, you get voices that sound like real actors reading your story.

**Cost:** Free tier available (limited). Paid tiers for heavy use.

| Tier | Cost | Characters/Month | Roughly Equals |
|------|------|-----------------|----------------|
| Free | $0 | 10,000 chars | ~5–10 story chapters |
| Starter | $5/month | 30,000 chars | ~15–30 chapters |
| Creator | $22/month | 100,000 chars | ~50–100 chapters |

> **"Characters" here means letters, not story characters.** A typical chapter has about 1,000–2,000 letters of dialogue.

**How to sign up and connect it:**

1. **Create an account:**
   - Go to [elevenlabs.io](https://elevenlabs.io) in your browser
   - Click **"Sign Up"** (top right)
   - Sign up with Google or email — free, no credit card needed

2. **Get your API key** (this is like a password that lets the app use your account):
   - Log in to ElevenLabs
   - Click your **profile icon** (bottom-left of the dashboard)
   - Click **"Profile + API key"**
   - You'll see a field labeled **"API Key"** — click the **eye icon** to reveal it
   - Click **"Copy"** (the clipboard icon)

3. **Paste it into Signal Decay:**
   - Open `immersive_reader.html` in Chrome
   - Tap **⚙️ Settings**
   - Scroll down to **"ElevenLabs Premium Voices (Optional)"**
   - Tap the text field that says *"Enter ElevenLabs API key..."*
   - **Paste** your key (Ctrl+V on PC, Cmd+V on Mac)
   - The key saves automatically

4. **Turn it on:**
   - Just below the key field, find **"Use Premium Voices"** toggle
   - Tap it to switch **ON**
   - Done! Next time a character speaks, you'll hear the ElevenLabs voice

**How voice assignment works:**

Right now, all characters use a default ElevenLabs voice (called "Rachel"). In a future update, you'll be able to:
- Browse the ElevenLabs Voice Library (thousands of voices)
- Pick a specific voice for each character (deep male for Hass, young female for Juno, etc.)
- Copy the "Voice ID" from ElevenLabs and assign it in the app's settings

**If it stops working:** The app automatically falls back to free browser voices if your ElevenLabs quota runs out or the API key expires. You won't lose functionality — it just sounds less polished.

---

### 🎵 Background Music (Web Audio API — Free, Built-in)

**What it is:** The app generates ambient music *in real time* using your browser's audio capabilities. There are no music files — the app literally creates sound waves on the fly, like a tiny synthesizer in your browser.

**Cost:** Completely free. No files to download. No streaming service.

**How it works:**

Stories contain invisible mood tags like `[MOOD:tense]` or `[MOOD:peaceful]`. When the reader hits one of these tags, the music smoothly crossfades to match the new mood. You don't see the tags — you just hear the atmosphere shift.

**Available moods:**
| Mood Tag | What It Sounds Like |
|----------|-------------------|
| `[MOOD:tense]` | Low drones, uneasy rumbling, slow pulsing |
| `[MOOD:peaceful]` | Gentle sine waves, soft harmonics, calm |
| `[MOOD:eerie]` | Detuned oscillators, faint static hiss |
| `[MOOD:action]` | Driving bass, rhythmic pulsing, intense |
| `[MOOD:emotional]` | Warm chord tones, gentle progressions |

**How to control it:**

1. Open `immersive_reader.html`
2. Tap **⚙️ Settings**
3. In the **"Music & Ambience"** section:
   - **"Background Music"** toggle → ON/OFF
   - **"Music Volume"** slider → drag to adjust (default 30% — it's meant to be subtle)

**⚠️ Important browser rule:** The very first time you open the page, you must **tap or click somewhere** before any audio can play. This is a security feature in all browsers (prevents websites from blasting sound at you). Just tap anywhere on the page once, and music will work from then on.

---

### 🔊 Sound Effects (Web Audio API — Free, Built-in)

**What it is:** Just like music, sound effects are generated by the browser in real time. When a story says `[SFX:thunder]`, you literally hear thunder — synthesized on the spot.

**Cost:** Free. No audio files needed.

**Available sound effects:**

| SFX Tag | What You Hear |
|---------|--------------|
| `[SFX:door]` | Heavy door thud/slam |
| `[SFX:rain]` | Rainfall ambience (3 seconds) |
| `[SFX:thunder]` | Deep rumbling thunder crack |
| `[SFX:footsteps]` | Six rhythmic footstep taps |
| `[SFX:frequency_hum]` | Eerie electrical hum (4 seconds) |
| `[SFX:heartbeat]` | Four heartbeat pulses |
| `[SFX:static]` | Radio/TV static burst |
| `[SFX:wind]` | Howling wind (3 seconds) |
| `[SFX:glass_break]` | Shattering glass |
| `[SFX:alarm]` | Alternating alarm tones |

**How to control it:**

1. Tap **⚙️ Settings**
2. In **"Music & Ambience"** section:
   - **"Sound Effects"** toggle → ON/OFF

When an SFX plays, a small gold indicator appears in the top-right corner showing **"♫ rain"** (or whatever sound) for 2 seconds.

**How to add SFX to your own stories:**

When writing story markdown, just put the tag on its own line:

```markdown
Marcus pushed through the heavy door.

[SFX:door]

The rain was deafening outside.

[SFX:rain]
```

The tag is invisible to the reader — they just hear the sound.

---

### 🎨 AI Image Generation (Future Feature — Not Yet Active)

**What it is:** In the future, each story panel could have AI-generated art — like a graphic novel that draws itself.

**Planned options:**
- **Azure OpenAI DALL-E 3** — Microsoft's image AI (good for consistent style)
- **Stability AI (Stable Diffusion)** — Open-source alternative, very customizable
- **Midjourney API** — Highest quality art style (when their API becomes available)

**Current status:** The app's architecture already supports image panels — the code has a `panel-image` container ready to go. When image generation is added, each story scene would describe itself in a hidden prompt tag (like `[IMAGE:dark alley, rain, neon signs, noir style]`) and the app would generate art live.

**Why it's not here yet:** Image generation costs money per image ($0.02–$0.08 each) and requires API keys. We'll add it when the economics make sense for a reader app.

---

## 2. How to Make This a PWA (Progressive Web App)

### 📱 What's a PWA? (Plain English)

A PWA makes your website behave like a **real app you'd download from the App Store** — but without actually going through an app store. Here's what you get:

- ✅ **Install it on your home screen** — has its own icon, just like a "real" app
- ✅ **Works offline** — loads even with no internet (perfect for reading on planes/subway)
- ✅ **Full screen** — no browser address bar or tabs cluttering the view
- ✅ **Feels native** — swipe, scroll, and interact like any phone app

### 📄 Files You Need

You need **three things** added to your reader_app folder:

| File | What It Does |
|------|-------------|
| `manifest.json` | Tells the phone "this is an app" — name, icon, colors |
| `service-worker.js` | Saves all files locally so it works offline |
| `icons/` folder | App icons the phone uses on your home screen |

---

### File 1: manifest.json

Create a new file called `manifest.json` in your `reader_app` folder. Paste this entire block into it:

```json
{
  "name": "Signal Decay",
  "short_name": "Signal Decay",
  "description": "An immersive investigation into the frequency conspiracy",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#0a0a0f",
  "theme_color": "#c0392b",
  "orientation": "any",
  "icons": [
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

**What each line means:**
- `name` — full app name shown during install
- `short_name` — what appears under the icon on your home screen
- `start_url` — which page opens when you tap the app icon
- `display: standalone` — hides the browser UI (full-screen app feel)
- `background_color` — the dark background while the app loads
- `theme_color` — the color of the status bar on Android
- `icons` — your app icon in two sizes (phone needs both)

---

### File 2: service-worker.js

Create a new file called `service-worker.js` in your `reader_app` folder. Paste this entire block:

```javascript
// Signal Decay — Service Worker (Offline Support)
// This file lets the app work without internet

const CACHE_NAME = 'signal-decay-v1';

// All the files that make up your app
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/investigation_board.html',
  '/immersive_reader.html',
  '/universe_graph.html',
  '/manifest.json'
];

// INSTALL: When the service worker is first registered, cache everything
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE: Clean up old caches when a new version is deployed
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH: Cache-first strategy
// Try to load from cache first (instant, works offline)
// If not in cache, fetch from network and save to cache for next time
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Found in cache! Return it immediately
        // Also fetch fresh version in background (stale-while-revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {}); // Ignore network errors silently
        return cachedResponse;
      }
      // Not in cache — fetch from network
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        // Save to cache for next time
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      }).catch(() => {
        // Network failed and not in cache — show offline page
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
```

**What this does in plain English:**
- First visit: downloads and saves all your app files locally on the device
- Every visit after: loads instantly from the saved copy (even without internet!)
- When internet IS available: quietly checks for updates in the background
- If everything fails: shows your main page as a fallback

---

### File 3: App Icons

You need two PNG images in an `icons` folder inside `reader_app`:

```
reader_app/
  ├── icons/
  │   ├── icon-192.png   (192 × 192 pixels)
  │   └── icon-512.png   (512 × 512 pixels)
  ├── manifest.json
  ├── service-worker.js
  ├── index.html
  └── ... (your other files)
```

**How to create icons quickly:**
1. Design a simple icon (the Signal Decay radio tower logo works great)
2. Use [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net) to generate both sizes
3. Or just make a 512×512 image in any image editor and resize a copy to 192×192

---

### Step-by-Step: Connect It All Together

**Step 1:** Open your `index.html` file in a text editor (Notepad, VS Code, whatever)

**Step 2:** Find the `<head>` section (near the top, between `<head>` and `</head>`)

**Step 3:** Add these two lines anywhere inside `<head>`:

```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#c0392b">
```

**Step 4:** Find the end of the `<body>` section (look for `</body>` near the bottom)

**Step 5:** Add this script just BEFORE `</body>`:

```html
<script>
  // Register the service worker for offline support
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('✅ Service Worker registered'))
      .catch((err) => console.log('❌ SW registration failed:', err));
  }
</script>
```

**Step 6:** Save the file. That's it!

---

### 📲 How to Install on Your Phone

#### iPhone / iPad:
1. Open your Signal Decay URL in **Safari** (must be Safari — Chrome on iPhone won't work for install)
2. Tap the **Share button** (square with arrow pointing up, bottom center)
3. Scroll down and tap **"Add to Home Screen"**
4. Give it a name (or keep "Signal Decay") → tap **"Add"**
5. Done! It's now on your home screen like any app ✨

#### Android:
1. Open your Signal Decay URL in **Chrome**
2. You'll see a banner at the bottom: *"Add Signal Decay to Home screen"* — tap it
3. **OR:** tap the **three dots** (⋮) top-right → tap **"Install app"** or **"Add to Home Screen"**
4. Tap **"Install"**
5. Done! Find it in your app drawer 🎉

#### Desktop (Windows/Mac):
1. Open your Signal Decay URL in **Chrome**
2. Look in the address bar — you'll see a **⊕ icon** (circle with plus) on the right side
3. Click it → click **"Install"**
4. The app opens in its own window, no browser chrome!

---

## 3. Azure Hosting Options

Right now the app only works on YOUR computer. To share it with others (or use it on your phone from anywhere), you need to put it online. Here are your options, ranked from easiest to most feature-rich.

---

### Option C: GitHub Pages (Simplest — FREE) ⭐ Recommended to Start

**What it is:** GitHub (owned by Microsoft) will host your website files for free. You upload, they serve it to the world.

**Cost:** $0

**Steps:**

1. **Create a GitHub account**
   - Go to [github.com](https://github.com) → "Sign up"
   - Pick a username, enter email, create password
   - Verify your email

2. **Create a new repository (project)**
   - Click the **"+"** icon (top right) → **"New repository"**
   - Name it: `signal-decay`
   - Set it to **Public**
   - Click **"Create repository"**

3. **Upload your files**
   - On the repo page, click **"uploading an existing file"** link
   - Drag your entire `reader_app` folder contents into the upload area
   - Click **"Commit changes"** (green button)

4. **Enable GitHub Pages**
   - Go to **Settings** tab (top of repo page)
   - Scroll down to **"Pages"** in the left sidebar
   - Under "Source," select **"main"** branch and **"/ (root)"** folder
   - Click **"Save"**

5. **Get your URL** (takes ~2 minutes to go live):
   ```
   https://YOUR-USERNAME.github.io/signal-decay/
   ```

---

### Option A: Azure Static Web Apps (FREE tier — More Professional)

**What it is:** Microsoft Azure hosts your HTML/CSS/JS files on their global network. Fast worldwide, HTTPS secured, supports custom domains.

**Cost:** Free tier. No credit card required to start.

**What free tier includes:**
- ✅ Hosting your static files
- ✅ HTTPS (secure connection)
- ✅ Global CDN (fast loading anywhere in the world)
- ✅ Custom domain support
- ✅ 100 GB bandwidth/month

**Steps:**

1. **Create an Azure account**
   - Go to [portal.azure.com](https://portal.azure.com)
   - Click "Start free" — you get $200 credit and 12 months of free services
   - Sign in with Microsoft account (or create one)

2. **Create a Static Web App**
   - In the Azure Portal, click **"+ Create a resource"**
   - Search for **"Static Web App"** → click **"Create"**
   - Fill in:
     - **Name:** `signal-decay`
     - **Plan type:** Free
     - **Region:** pick the closest to you
     - **Source:** GitHub (connect your GitHub account) — OR "Other" for manual deploy

3. **Deploy your files**
   - If connected to GitHub: it auto-deploys when you push code
   - If manual: use the [Azure Static Web Apps CLI](https://aka.ms/swa/cli-local-development)
     ```
     npx @azure/static-web-apps-cli deploy ./reader_app
     ```
   - Or deploy from VS Code with the "Azure Static Web Apps" extension (click deploy, select folder, done)

4. **Get your URL:**
   ```
   https://signal-decay.azurestaticapps.net
   ```

---

### Option B: Azure Blob Storage ($web Container)

**What it is:** Azure's file storage system, but configured to serve a website. The cheapest paid option.

**Cost:** ~$0.01/month for a small site like this (basically free)

**Steps:**

1. **Create a Storage Account**
   - In Azure Portal → **"+ Create a resource"** → **"Storage account"**
   - Name it: `signaldecayst` (only lowercase letters and numbers)
   - Pick your region → Create

2. **Enable static website hosting**
   - Open your storage account
   - Left sidebar → **"Static website"** (under Data management)
   - Toggle to **"Enabled"**
   - Index document: `index.html`
   - Click **"Save"**

3. **Upload your files**
   - Go to **"Containers"** in left sidebar
   - You'll see a new **`$web`** container — click it
   - Click **"Upload"** → select all your reader_app files
   - Maintain the folder structure

4. **Get your URL** (shown on the Static website page):
   ```
   https://signaldecayst.z13.web.core.windows.net
   ```

---

### 🤔 Which Option Should You Pick?

| Option | Cost | Difficulty | Custom Domain | Best For |
|--------|------|-----------|---------------|----------|
| 🥇 GitHub Pages | FREE | Easy (5 min) | ✅ Yes | Fastest to get online, great for sharing |
| 🥈 Azure Static Web Apps | FREE | Medium (15 min) | ✅ Yes | Production app with auto-deploy |
| 🥉 Azure Blob Storage | ~$0.01/mo | Medium (15 min) | ✅ Yes | If you want Azure-only solution |

**My recommendation:** Start with **GitHub Pages**. It takes 5 minutes and costs nothing. Upgrade to Azure Static Web Apps later if you want auto-deployment from code changes.

---

### 🌐 Custom Domain (Optional)

Want a URL like `signaldecay.app` instead of a long github.io address?

1. **Buy a domain** (~$10/year):
   - [Namecheap.com](https://namecheap.com) — search for `signaldecay.app` or `signaldecay.com`
   - Or use [Google Domains](https://domains.google), [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

2. **Point it to your host:**
   - In your domain registrar's DNS settings, add a **CNAME record**:
     - For GitHub Pages: point to `YOUR-USERNAME.github.io`
     - For Azure: point to your `.azurestaticapps.net` URL

3. **HTTPS is automatic** — both GitHub Pages and Azure provide free HTTPS certificates. No extra setup.

---

## 4. Quick Start Checklist

Do these in order. Check off each one as you go:

```
□ Step 1:  Open investigation_board.html in Chrome
           → Verify: map loads, nodes are clickable

□ Step 2:  Open immersive_reader.html in Chrome
           → Verify: tap "Play Demo" — text appears panel by panel

□ Step 3:  Test voices
           → In immersive_reader, make sure voices toggle is ON
           → Play a story — you should hear character voices

□ Step 4:  Test music & SFX
           → Tap anywhere on the page first (unlocks audio)
           → Play a story with [MOOD:] tags — hear background music shift
           → Play a story with [SFX:] tags — hear sound effects trigger

□ Step 5:  (Optional) Sign up at elevenlabs.io
           → Get free API key
           → Paste into Settings → ElevenLabs field
           → Toggle "Use Premium Voices" ON
           → Test: voices should now sound human-quality

□ Step 6:  (Optional) Make it a PWA
           → Create manifest.json (copy from Section 2 above)
           → Create service-worker.js (copy from Section 2 above)
           → Create icons folder with icon-192.png and icon-512.png
           → Add <link> and <script> to index.html
           → Test: Chrome should show install prompt ⊕

□ Step 7:  (Optional) Put it online
           → Upload to GitHub Pages (free, 5 minutes)
           → Share URL with friends/testers

□ Step 8:  (Optional) Install on your phone
           → Open the URL on your phone
           → iPhone: Safari → Share → Add to Home Screen
           → Android: Chrome → three dots → Install App
```

---

## 5. Future AI Features Roadmap

These features aren't built yet, but the app's architecture is ready to support them:

### 🖼️ AI-Generated Panel Art
- Every story scene gets a unique illustration generated by AI
- Think: a graphic novel that draws itself as you read
- Tech: DALL-E 3, Stability AI, or Midjourney
- Cost estimate: $0.02–$0.08 per image

### 🎤 Voice Cloning
- Record YOUR voice reading a few sentences
- AI creates a clone of your voice
- Use it as the narrator — hear yourself tell the story
- Tech: ElevenLabs Voice Cloning (requires paid tier)

### ✍️ AI Story Generation
- Give a prompt: *"Marcus discovers a hidden frequency in the subway"*
- AI writes a full Signal Decay episode in the proper format
- Complete with `[MOOD:]`, `[SFX:]`, and `[PANEL]` tags
- Tech: GPT-4, Claude, or similar large language model

### 🎶 AI Music Composer
- Instead of synthesized drones, generate actual composed music per chapter
- Unique soundtrack for each story that matches the mood perfectly
- Tech: Suno API or Udio API (AI music generation services)

### 💬 Character Chat
- Talk TO the characters using conversational AI
- Ask Marcus about a clue, interrogate Legacy Agent, get advice from Abuela
- Characters stay in-persona based on their story knowledge
- Tech: Fine-tuned LLM with character memories

### 🌍 Translation & Localized Voices
- Auto-translate stories to Spanish, Japanese, French, etc.
- Voices speak in the translated language with matching accents
- Tech: Translation API + multilingual ElevenLabs voices

---

## 💡 Tips & Tricks

- **Reading at night?** The app is already dark-themed (OLED black) — easy on the eyes.
- **Too fast/slow?** Adjust the **Auto-advance** speed in settings (panel pause timer).
- **Writing your own stories?** Use the markdown format with tags:
  ```markdown
  [MOOD:tense]

  [PANEL]
  The hallway stretched into darkness.

  [SFX:footsteps]

  [PANEL]
  [Marcus] "Did you hear that?"

  [PANEL]
  [Juno] "Hear what? I didn't—"

  [SFX:static]

  [MOOD:eerie]

  [PANEL]
  The radio crackled to life on its own.
  ```
- **Load your own story:** In the immersive reader, tap **"Load Custom Story"** → paste your markdown → tap **"Load"**.

---

> **Questions?** This app is a living project. Every feature described in the "Future" section can be built when you're ready. The hard part (the architecture) is already done — future features are "plug and play."

---

*Guide version 1.0 — August 2026*
