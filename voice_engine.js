// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL DECAY — VOICE ENGINE
// ═══════════════════════════════════════════════════════════════════════════════
// The "voice brain": defines WHO each character sounds like across all backends,
// and ROUTES each line of dialogue to whatever TTS backend is available
// (ElevenLabs -> Azure -> Browser -> [future] Local Neural). It does NOT make audio;
// it hands a ready-to-speak instruction (a "plan") to the backend speak functions
// the page provides (window.__speakEleven / __speakAzure / __speakBrowser / __speakLocal).
//
// Arc-aware: reads localStorage['sd_arc_<id>'] and subtly shifts the voice
// across dormant -> emerging -> awakened.
//
// Removes the HARD ElevenLabs dependency: the character identity lives in the
// profile here, so if ElevenLabs is off/out of credits the SAME character still
// speaks through Azure, and if Azure is off, through the free browser voice.
//
// Created: 2026-09-06
// Pattern: ES5 only (var / function), window global + module.exports footer.
// Integrates with: character_chat.html, immersive_reader.html, emotional_state_machine.js
// ═══════════════════════════════════════════════════════════════════════════════

var VOICE_ENGINE = {
  version: "1.0.0",
  lastUpdated: "2026-09-06",

  // ── 1. COMPLETE VOICE PROFILES ────────────────────────────────────────────
  // ONE profile per character drives ALL backends. Browser numbers are the
  // canonical "shape" of the voice (pitch/rate/volume); Azure derives SSML
  // prosody from them; ElevenLabs uses its own voiceId + settings.
  profiles: {
    narrator: {
      displayName: "Narrator",
      persona: "measured, low, omniscient, unhurried",
      base:    { pitch: 0.80, rate: 0.90, volume: 1.00 },
      tone:    { warmth: 0.4, energy: 0.3, breathiness: 0.2, gravel: 0.4 },
      backends: {
        eleven: { voiceId: "pNInz6obpgDQGcFmaJgB", // Adam
                  settings: { stability: 0.6, similarity_boost: 0.75, style: 0.2, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-GuyNeural", style: "narration-relaxed" },
        browser:{ pitch: 0.80, rate: 0.90, volume: 1.00 }
      }
    },
    kael: {
      displayName: "Kael Voss",
      persona: "quiet, watchful, restrained; says less than he knows",
      base:    { pitch: 1.00, rate: 1.05, volume: 0.95 },
      tone:    { warmth: 0.3, energy: 0.4, breathiness: 0.2, gravel: 0.5 },
      backends: {
        eleven: { voiceId: "29vD33N1CtxCmqQRPOHJ", // Drew
                  settings: { stability: 0.65, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-DavisNeural", style: "chat" },
        browser:{ pitch: 1.00, rate: 1.05, volume: 0.95 }
      }
    },
    oren: {
      displayName: "Oren Malik",
      persona: "warm, animated, time-skips; sunshine energy",
      base:    { pitch: 1.20, rate: 1.10, volume: 0.90 },
      tone:    { warmth: 0.8, energy: 0.9, breathiness: 0.1, gravel: 0.1 },
      backends: {
        eleven: { voiceId: "yoZ06aMxZJJ28mfd3POQ", // Josh
                  settings: { stability: 0.4, similarity_boost: 0.75, style: 0.5, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-JasonNeural", style: "cheerful" },
        browser:{ pitch: 1.20, rate: 1.10, volume: 0.90 }
      }
    },
    jude: {
      displayName: "Jude Okafor",
      persona: "deep, grounded, deliberate; ex-con calm; seismic weight",
      base:    { pitch: 0.70, rate: 0.95, volume: 1.00 },
      tone:    { warmth: 0.5, energy: 0.4, breathiness: 0.1, gravel: 0.7 },
      backends: {
        eleven: { voiceId: "VR6AewLTigWG4xSOukaG", // Arnold
                  settings: { stability: 0.7, similarity_boost: 0.8, style: 0.1, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-TonyNeural", style: "chat" },
        browser:{ pitch: 0.70, rate: 0.95, volume: 1.00 }
      }
    },
    zara: {
      displayName: "Zara Kovac",
      persona: "otherworldly, precise, alien soul; fully conscious",
      base:    { pitch: 1.40, rate: 1.00, volume: 0.90 },
      tone:    { warmth: 0.4, energy: 0.5, breathiness: 0.4, gravel: 0.2 },
      backends: {
        eleven: { voiceId: "EXAVITQu4vr4xnSDxMaL", // Bella
                  settings: { stability: 0.55, similarity_boost: 0.7, style: 0.35, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-JennyNeural", style: "chat" },
        browser:{ pitch: 1.40, rate: 1.00, volume: 0.90 }
      }
    },
    mira: {
      displayName: "Mira Chen",
      persona: "sees colors in sound; dark humor; wry, quick",
      base:    { pitch: 1.10, rate: 0.90, volume: 0.92 },
      tone:    { warmth: 0.6, energy: 0.6, breathiness: 0.3, gravel: 0.2 },
      backends: {
        eleven: { voiceId: "MF3mGyEYCl7XYWbV9V6O", // Elli
                  settings: { stability: 0.5, similarity_boost: 0.75, style: 0.4, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-AriaNeural", style: "chat" },
        browser:{ pitch: 1.10, rate: 0.90, volume: 0.92 }
      }
    },
    sunny: {
      displayName: "Sunny",
      persona: "radiant plasmoid guide; bright, fast, benevolent",
      base:    { pitch: 1.60, rate: 1.10, volume: 0.90 },
      tone:    { warmth: 0.9, energy: 1.0, breathiness: 0.3, gravel: 0.0 },
      backends: {
        eleven: { voiceId: "jBpfuIE2acCO8z3wKNLl", // Dorothy
                  settings: { stability: 0.45, similarity_boost: 0.7, style: 0.55, use_speaker_boost: true } },
        azure:  { voiceName: "en-US-SaraNeural", style: "cheerful" },
        browser:{ pitch: 1.60, rate: 1.10, volume: 0.90 }
      }
    }
  },

  // ── 2. ARC-STATE MODIFIERS ────────────────────────────────────────────────
  // As a character awakens, the voice drops slightly in pitch, slows a touch,
  // and gains expressive "style" (more inflection). Subtle on purpose.
  arcModifiers: {
    dormant:  { pitchMul: 1.00, rateMul: 1.00, styleAdd: 0.00 },
    emerging: { pitchMul: 0.97, rateMul: 0.98, styleAdd: 0.10 },
    awakened: { pitchMul: 0.94, rateMul: 0.95, styleAdd: 0.20 }
  },

  // ── 3. BACKEND AVAILABILITY (routing inputs) ──────────────────────────────
  // Filled from localStorage / settings at runtime via syncRuntimeFromSettings().
  runtime: {
    elevenEnabled: false, elevenKey: "",
    azureEnabled:  false, azureKey: "", azureRegion: "eastus2",
    localEnabled:  false,          // future Tier 4 (Kokoro/Piper)
    outputEnabled: true            // master voice-output switch
  },

  // ── 4. ROUTING: pick the best available backend ───────────────────────────
  pickBackend: function(){
    if (this.runtime.elevenEnabled && this.runtime.elevenKey) return "eleven";
    if (this.runtime.azureEnabled  && this.runtime.azureKey)  return "azure";
    if (this.runtime.localEnabled)                            return "local"; // future
    return "browser";
  },

  // ── 5. BUILD A SPEAK INSTRUCTION for a character (arc + emotion applied) ───
  getSpeakPlan: function(characterId, opts){
    opts = opts || {};
    var p = this.profiles[characterId] || this.profiles.narrator;
    var arc = opts.arcState || this._readArc(characterId);
    var mod = this.arcModifiers[arc] || this.arcModifiers.dormant;
    var backend = opts.forceBackend || this.pickBackend();

    // Optional emotional nudge from emotional_state_machine.js (energy/warmth/etc.)
    var emo = opts.emotion || null;  // e.g. { energy: 72, warmth: 81, anxiety: 44 }

    var plan = { backend: backend, characterId: characterId, displayName: p.displayName };

    if (backend === "eleven"){
      var s = {}; for (var k in p.backends.eleven.settings) { s[k] = p.backends.eleven.settings[k]; }
      var styleBase = (typeof s.style === "number") ? s.style : 0;
      var emoNudge = emo ? (emo.energy - 50) / 300 : 0;
      s.style = Math.min(1, Math.max(0, styleBase + mod.styleAdd + emoNudge));
      plan.voiceId  = p.backends.eleven.voiceId;
      plan.settings = s;
      plan.model_id = opts.lowLatency ? "eleven_flash_v2_5" : "eleven_multilingual_v2";
    } else if (backend === "azure"){
      plan.voiceName = p.backends.azure.voiceName;
      plan.style     = p.backends.azure.style;
      plan.prosody   = {
        pitch: Math.round((p.base.pitch * mod.pitchMul - 1) * 50) + "%", // -> SSML pitch
        rate:  Math.round((p.base.rate  * mod.rateMul) * 100) + "%"
      };
    } else { // browser (or local, which reuses browser-style numbers)
      plan.pitch  = p.base.pitch  * mod.pitchMul;
      plan.rate   = p.base.rate   * mod.rateMul;
      plan.volume = p.base.volume;
    }
    return plan;
  },

  // ── 6. SPEAK: get the plan, then hand off to the real backend function ─────
  // The page provides these (lifted from immersive_reader.html):
  //   window.__speakEleven(text, plan, cb, onFail)
  //   window.__speakAzure(text, plan, cb, onFail)
  //   window.__speakBrowser(text, plan, cb)
  //   window.__speakLocal(text, plan, cb, onFail)   [future]
  speak: function(text, characterId, cb, opts){
    if (!this.runtime.outputEnabled){ if (cb) cb(); return; }
    if (!text || !text.trim()){ if (cb) cb(); return; }
    var plan = this.getSpeakPlan(characterId, opts);
    var self = this;
    function fallback(){ // graceful degrade: eleven -> azure -> browser
      if (plan.backend === "eleven"){ plan.backend = "azure"; }
      else if (plan.backend === "azure"){ plan.backend = "browser"; }
      self._dispatch(text, characterId, plan, cb);
    }
    try { this._dispatch(text, characterId, plan, cb, fallback); }
    catch(e){ if (window.console) console.warn('[VOICE_ENGINE] speak error, falling back:', e); fallback(); }
  },

  _dispatch: function(text, characterId, plan, cb, onFail){
    if (plan.backend === "eleven" && window.__speakEleven) return window.__speakEleven(text, plan, cb, onFail);
    if (plan.backend === "azure"  && window.__speakAzure)  return window.__speakAzure(text, plan, cb, onFail);
    if (plan.backend === "local"  && window.__speakLocal)  return window.__speakLocal(text, plan, cb, onFail);
    if (window.__speakBrowser) return window.__speakBrowser(text, plan, cb);
    if (cb) cb();
  },

  // Stop any in-progress speech across backends.
  stop: function(){
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch(e){}
    try { if (window.__voiceStopAudio) window.__voiceStopAudio(); } catch(e){}
  },

  _readArc: function(id){
    try { return localStorage.getItem('sd_arc_' + id) || 'dormant'; } catch(e){ return 'dormant'; }
  },

  // Refresh runtime from stored keys + voice settings. Call on load and when
  // settings change. Keys live in sd_api_keys; toggles in sd_voice_settings.
  syncRuntimeFromSettings: function(){
    try {
      var keys = JSON.parse(localStorage.getItem('sd_api_keys') || '{}');
      this.runtime.elevenKey = keys.elevenlabs || keys.eleven || "";
      this.runtime.azureKey  = keys.azure_speech || keys.azureSpeech || keys.azure || "";
      var v = JSON.parse(localStorage.getItem('sd_voice_settings') || '{}');
      this.runtime.elevenEnabled = !!v.elevenEnabled && !!this.runtime.elevenKey;
      this.runtime.azureEnabled  = (v.azureEnabled !== false) && !!this.runtime.azureKey;
      this.runtime.localEnabled  = !!v.localEnabled;
      this.runtime.outputEnabled = (v.outputEnabled !== false);
      if (v.azureRegion) this.runtime.azureRegion = v.azureRegion;
    } catch(e){ if (window.console) console.warn('[VOICE_ENGINE] syncRuntimeFromSettings:', e); }
  },

  // Convenience: list character ids that have a profile.
  listCharacters: function(){
    var ids = []; for (var k in this.profiles){ if (this.profiles.hasOwnProperty(k)) ids.push(k); }
    return ids;
  }
};

if (typeof window !== 'undefined') { window.VOICE_ENGINE = VOICE_ENGINE; }
if (typeof module !== 'undefined' && module.exports) { module.exports = { VOICE_ENGINE: VOICE_ENGINE }; }
