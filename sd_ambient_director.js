// ═══════════════════════════════════════════════════════════════
// sd_ambient_director.js — THE AMBIENT DIRECTOR (local, offline)
// ═══════════════════════════════════════════════════════════════
// Auto-assigns an ambient audio "bed" to EVERY story based on its
// category + detected mood — so all 100+ stories get atmosphere
// without hand-editing each one. You supply ~6 mood beds (mp3 URLs),
// not 106 per-story files.
//
// How it fits the existing system:
//   - sd_layers.js already plays a per-story ambient bed (opt-in toggle).
//     If layers.json defines an explicit ambient for a story, THAT wins.
//   - Otherwise the Ambient Director picks a bed by theme and hands it
//     to sd_layers via SD_LAYERS-compatible {src,label}.
//
// Beds are looked up from BEDS[theme].  Fill in .src with a real mp3 URL
// (see AMBIENT_SOURCING doc). Empty src = silently no bed (never breaks).
//
// window.SD_AMBIENT.  ES5-safe. Created 2026-09-23.
// ═══════════════════════════════════════════════════════════════
var SD_AMBIENT = {
  version: "1.0.0",

  // ── 1. THE BEDS (fill src with mp3 URLs; label shows on the toggle) ──
  // Pixabay CDN trick: use the bare CDN url WITHOUT '/download/'.
  BEDS: {
    deep_space:   { src: "", label: "deep space drift" },   // deep_time / cosmic
    tension:      { src: "", label: "low tension hum" },    // Legacy / thriller / horror
    warm_room:    { src: "", label: "warm room tone" },     // slice-of-life / domestic
    venue:        { src: "", label: "club / venue hum" },   // band / The Frequency
    eerie:        { src: "", label: "eerie shimmer" },      // mystery / abduction
    rain_calm:    { src: "", label: "soft rain" }           // calm / reflective
  },

  // ── 2. CATEGORY -> default theme ──
  CAT_THEME: {
    deep_time: "deep_space",
    episodes:  "tension",
    side_stories: "warm_room",
    arcs:      "warm_room",
    world:     "deep_space",
    reference: "eerie"
  },

  // ── 3. MOOD -> theme (overrides category when a mood is known) ──
  MOOD_THEME: {
    peaceful:"rain_calm", calm:"rain_calm", warm:"warm_room", happy:"warm_room",
    tense:"tension", anxious:"tension", fear:"eerie", scared:"eerie", terrified:"eerie",
    eerie:"eerie", ominous:"eerie", mysterious:"eerie",
    sad:"rain_calm", grief:"rain_calm", hopeful:"warm_room",
    action:"tension", cosmic:"deep_space", mythic:"deep_space"
  },

  // Decide the theme for a story object {category} + optional mood string.
  themeFor: function(story, mood){
    if (mood){
      var m=(""+mood).toLowerCase().replace(/[^a-z]/g,"");
      if (this.MOOD_THEME[m]) return this.MOOD_THEME[m];
    }
    if (story && story.category && this.CAT_THEME[story.category]) return this.CAT_THEME[story.category];
    return "warm_room";
  },

  // Return an {src,label} bed for a story, or null if that theme has no src yet.
  bedFor: function(story, mood){
    var theme=this.themeFor(story, mood);
    var bed=this.BEDS[theme];
    if (!bed || !bed.src) return null;         // no url supplied -> no bed (safe)
    return { src: bed.src, label: bed.label, theme: theme };
  },

  // Merge Director beds into a layers.json-style manifest object IN MEMORY,
  // so sd_layers.apply() will play them. Explicit per-story ambient wins.
  // Called after both SD_LAYERS.load() and STORIES are available.
  enrich: function(stories, layersManifest){
    if (!stories || !stories.length) return layersManifest || {version:0,layers:{}};
    var man = layersManifest || {version:0, layers:{}};
    if (!man.layers) man.layers={};
    for (var i=0;i<stories.length;i++){
      var st=stories[i]; if(!st || !st.id) continue;
      var existing = man.layers[st.id];
      if (existing && existing.ambient && existing.ambient.src) continue; // explicit wins
      var bed=this.bedFor(st, st.mood);
      if (!bed) continue;
      if (!existing) { existing = {}; man.layers[st.id]=existing; }
      existing.ambient = { src: bed.src, label: bed.label };
    }
    return man;
  },

  setBed: function(theme, src, label){
    if(!this.BEDS[theme]) this.BEDS[theme]={};
    this.BEDS[theme].src=src||""; if(label) this.BEDS[theme].label=label;
  },
  ready: function(){ // true if at least one bed has a url
    for (var k in this.BEDS){ if(this.BEDS.hasOwnProperty(k) && this.BEDS[k].src) return true; }
    return false;
  }
};
if (typeof window !== 'undefined') { try { window.SD_AMBIENT = SD_AMBIENT; } catch(e){} }
if (typeof module !== 'undefined' && module.exports) { module.exports = { SD_AMBIENT: SD_AMBIENT }; }
