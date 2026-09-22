// ═══════════════════════════════════════════════════════════════
// sd_emotion_director.js — THE EMOTION DIRECTOR (local, offline)
// ═══════════════════════════════════════════════════════════════
// Reads a line of story text + the current scene [MOOD:] tag (and,
// if present, the emotional_state_machine numbers) and returns an
// EMOTION LABEL + INTENSITY that the voice engine maps to an Azure
// SSML style (<mstts:express-as>). 100% local — no AI server.
//
// This is the "brain" that makes narration emotion-reactive:
//   directEmotion("You don't get to decide that for me!", {mood:"tense"})
//     -> { style:"angry", degree:1.6 }
//
// Created 2026-09-22. ES5-safe. window.SD_EMOTION global.
// ═══════════════════════════════════════════════════════════════
var SD_EMOTION = {
  version: "1.0.0",

  // Azure Neural emotional styles we target (all real, widely supported)
  STYLES: ["angry","cheerful","sad","excited","hopeful","friendly",
           "unfriendly","terrified","whispering","shouting","calm","narration-relaxed"],

  // Scene [MOOD:] tag -> default style (the floor for a scene)
  MOOD_STYLE: {
    peaceful:"calm", calm:"calm", warm:"friendly", happy:"cheerful", joyful:"cheerful",
    tense:"unfriendly", anxious:"terrified", fear:"terrified", scared:"terrified",
    eerie:"whispering", ominous:"whispering", sad:"sad", grief:"sad", melancholy:"sad",
    hopeful:"hopeful", triumphant:"excited", excited:"excited", angry:"angry",
    action:"excited", chaotic:"shouting", intimate:"whispering", mysterious:"whispering"
  },

  // Word cues -> style (override the scene floor when the LINE itself signals emotion)
  CUES: [
    {re:/\b(scream|screamed|shout|shouted|yell|yelled|roar|roared)\b/i, style:"shouting", degree:1.8},
    {re:/\b(whisper|whispered|murmur|murmured|breathed|hushed|under (?:his|her|their) breath)\b/i, style:"whispering", degree:1.4},
    {re:/\b(furious|snarl|snarled|rage|raged|slammed|spat|barked|seethed|snapped)\b/i, style:"angry", degree:1.7},
    {re:/\b(laughed|grinned|beamed|delighted|giddy|thrilled|cheered)\b/i, style:"cheerful", degree:1.4},
    {re:/\b(wept|sobbed|tears|grief|mourned|broke down|trembling voice|choked up)\b/i, style:"sad", degree:1.6},
    {re:/\b(terrified|petrified|panic|panicked|horror|dread|shaking|blood ran cold)\b/i, style:"terrified", degree:1.7},
    {re:/\b(hope|hoped|maybe|perhaps|someday|could be|a chance)\b/i, style:"hopeful", degree:1.2},
    {re:/\b(excited|amazed|incredible|impossible|couldn.t believe|electrified)\b/i, style:"excited", degree:1.4}
  ],

  // Map emotional_state_machine numbers (0-100) -> style, when available
  fromState: function(st){
    if(!st) return null;
    var energy=st.energy||50, warmth=st.warmth||50, anxiety=st.anxiety||0;
    if(anxiety>=65) return {style:"terrified", degree: anxiety>80?1.8:1.4};
    if(energy>=70 && warmth>=60) return {style:"excited", degree:1.4};
    if(energy>=70 && warmth<40)  return {style:"angry", degree:1.5};
    if(energy<35 && warmth<40)   return {style:"sad", degree:1.4};
    if(warmth>=70)               return {style:"cheerful", degree:1.2};
    if(energy<35)                return {style:"calm", degree:1.1};
    return null;
  },

  // Punctuation nudges
  _punct: function(text){
    if(/!\s*$/.test(text) && /[A-Z]{3,}/.test(text)) return {style:"shouting", degree:1.6};
    if(/!/.test(text)) return {style:"excited", degree:1.2};
    if(/\?\s*$/.test(text)) return {style:"friendly", degree:1.0}; // questions lift slightly
    return null;
  },

  // MAIN: decide the emotion for a line.
  // opts: { mood:"tense", state:{energy,warmth,anxiety}, isDialogue:true }
  directEmotion: function(text, opts){
    opts = opts || {};
    var chosen = null;

    // 1) explicit word cues in the line win first (strongest signal)
    for(var i=0;i<this.CUES.length;i++){
      if(this.CUES[i].re.test(text)){ chosen = {style:this.CUES[i].style, degree:this.CUES[i].degree}; break; }
    }
    // 2) emotional_state_machine numbers (per-character scene mood)
    if(!chosen){ chosen = this.fromState(opts.state); }
    // 3) scene [MOOD:] tag floor
    if(!chosen && opts.mood){
      var m=(opts.mood||"").toLowerCase().replace(/[^a-z]/g,"");
      if(this.MOOD_STYLE[m]) chosen = {style:this.MOOD_STYLE[m], degree:1.2};
    }
    // 4) punctuation nudge
    if(!chosen){ chosen = this._punct(text); }
    // 5) default: relaxed narration for prose, calm for dialogue
    if(!chosen){ chosen = {style: opts.isDialogue?"calm":"narration-relaxed", degree:1.0}; }

    // clamp degree
    chosen.degree = Math.max(0.5, Math.min(2, chosen.degree||1));
    return chosen;
  },

  // Pull the nearest preceding [MOOD:x] tag from raw markdown given a char index
  moodAt: function(rawText, index){
    if(!rawText) return null;
    var before = rawText.slice(0, index);
    var m = before.match(/\[MOOD:\s*([a-zA-Z_]+)\s*\]/g);
    if(!m || !m.length) return null;
    var last = m[m.length-1];
    var mm = last.match(/\[MOOD:\s*([a-zA-Z_]+)\s*\]/);
    return mm ? mm[1] : null;
  }
};
if (typeof window !== 'undefined') { try { window.SD_EMOTION = SD_EMOTION; } catch(e){} }
if (typeof module !== 'undefined' && module.exports) { module.exports = { SD_EMOTION: SD_EMOTION }; }
