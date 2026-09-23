// ═══════════════════════════════════════════════════════════════
// sd_pronunciation.js — THE PRONUNCIATION LEXICON (local, offline)
// ═══════════════════════════════════════════════════════════════
// Makes TTS say Signal Decay's hard canon names correctly on BOTH paths:
//   • Azure SSML  -> wraps terms in <sub alias="..."> (clean, precise)
//   • Browser TTS -> phonetic respelling (browsers can't read SSML)
// 100% local, no AI. window.SD_PRON.
//
// Each entry: { say: browser respelling, alias: Azure sub alias, ipa: optional }
// Longest-match-first so multi-word terms win over single words.
// Created 2026-09-22. ES5-safe. Additive — safe to load anywhere.
// ═══════════════════════════════════════════════════════════════
var SD_PRON = {
  version: "1.0.0",

  // ── LEXICON ── (key = term as written; case-insensitive whole-word match)
  lex: {
    // ─ Band surnames / names ─
    "Kovač":      { say: "KOH-vahch",    alias: "Kovach" },
    "Kovac":      { say: "KOH-vahch",    alias: "Kovach" },
    "Okafor":     { say: "oh-KAH-for",   alias: "oh-KAH-for" },
    "Voss":       { say: "vahss",        alias: "Voss" },
    "Kael":       { say: "kale",         alias: "Kale" },
    "Kael Voss":  { say: "Kale vahss",   alias: "Kale Voss" },
    "Mira":       { say: "MEE-rah",      alias: "Meerah" },
    "Oren":       { say: "OR-en",        alias: "Oren" },
    "Malik":      { say: "mah-LEEK",     alias: "mah-LEEK" },
    "Jude":       { say: "jood",         alias: "Jude" },
    "Zara":       { say: "ZAR-ah",       alias: "Zarah" },
    "Lena":       { say: "LAY-nah",      alias: "Laynah" },
    "Zhao":       { say: "jow",          alias: "Jow" },      // like "now" with j
    "Agent Zhao": { say: "Agent jow",    alias: "Agent Jow" },
    // ─ Soul names ─
    "Za-Rah":     { say: "zah-RAH",      alias: "zah-RAH" },
    "Ka-El":      { say: "kah-EL",       alias: "kah-EL" },
    "Mir-Ahk":    { say: "MEER-ahk",     alias: "Meerahk" },
    "Ori-Tahn":   { say: "OR-ee-tahn",   alias: "Oree-tahn" },
    "Ju-Dael":    { say: "joo-DALE",     alias: "joo-DALE" },
    "Zar-Ahn":    { say: "zar-AHN",      alias: "zar-AHN" },
    // ─ Lore / mythos terms ─
    "Anunnaki":   { say: "ah-noo-NAH-kee", alias: "ah-noo-NAH-kee" },
    "Nordics":    { say: "NOR-dicks",    alias: "Nordics" },
    "Resonant":   { say: "REZ-uh-nunt",  alias: "Rezonant" },
    "Resonants":  { say: "REZ-uh-nunts", alias: "Rezonants" },
    "Schumann":   { say: "SHOO-mahn",    alias: "Shoomahn" },
    "Maldek":     { say: "MAL-deck",     alias: "Maldek" },
    "Pa-Taal":    { say: "pah-TAHL",     alias: "pah-TAHL" },
    "Rigelian":   { say: "rih-JEE-lee-un", alias: "rih-JEE-lee-un" },
    "Rigelians":  { say: "rih-JEE-lee-uns", alias: "rih-JEE-lee-uns" },
    "Draco":      { say: "DRAY-koh",     alias: "Draykoh" },
    "Sasquatch":  { say: "SAS-kwatch",   alias: "Saskwatch" },
    // ─ Real-world UFOlogy proper nouns ─
    "Rendlesham": { say: "REND-uhl-shum", alias: "Rendlesham" },
    "Varginha":   { say: "var-ZHEEN-yah", alias: "var-ZHEEN-yah" },
    "Kecksburg":  { say: "KEKS-burg",    alias: "Keksburg" },
    "Socorro":    { say: "so-KOR-oh",    alias: "soKORoh" },
    "Pascagoula": { say: "pass-kuh-GOO-luh", alias: "pass-kuh-GOO-luh" },
    "Nimitz":     { say: "NIM-its",      alias: "Nimits" },
    "Grusch":     { say: "groosh",       alias: "Groosh" },
    "Lazar":      { say: "luh-ZAR",      alias: "luh-ZAR" }
  },

  _sorted: null,
  _terms: function(){
    if(this._sorted) return this._sorted;
    var keys=[]; for(var k in this.lex){ if(this.lex.hasOwnProperty(k)) keys.push(k); }
    keys.sort(function(a,b){ return b.length - a.length; });  // longest first
    this._sorted=keys; return keys;
  },
  _escRe: function(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); },
  // Unicode-aware "letter" class incl. Latin Extended (č etc.). ASCII \\b breaks after č.
  _L: "A-Za-z\\u00C0-\\u024F",

  // Browser path: replace each term with its phonetic respelling in plain text.
  respell: function(text){
    if(!text) return text;
    var terms=this._terms(), out=text, L=this._L;
    for(var i=0;i<terms.length;i++){
      var t=terms[i], say=this.lex[t].say;
      if(!say) continue;
      // (start|non-letter) + term + (?!letter) ; keep the leading char via $1
      var re=new RegExp("(^|[^"+L+"])("+this._escRe(t)+")(?![" + L + "])","g");
      out=out.replace(re, "$1"+say);
    }
    return out;
  },

  // Azure path: wrap each term in <sub alias="..."> so SSML says it right.
  // Call on the ESCAPED text BEFORE it goes inside <prosody>.
  ssmlSub: function(escapedText){
    if(!escapedText) return escapedText;
    var terms=this._terms(), out=escapedText, L=this._L;
    for(var i=0;i<terms.length;i++){
      var t=terms[i], alias=this.lex[t].alias;
      if(!alias) continue;
      var re=new RegExp("(^|[^"+L+"])("+this._escRe(t)+")(?![" + L + "])","g");
      out=out.replace(re, "$1<sub alias=\""+alias+"\">"+t+"</sub>");
    }
    return out;
  },

  has: function(term){ return !!this.lex[term]; },
  add: function(term, say, alias){ this.lex[term]={say:say, alias:alias||say}; this._sorted=null; }
};
if (typeof window !== 'undefined') { try { window.SD_PRON = SD_PRON; } catch(e){} }
if (typeof module !== 'undefined' && module.exports) { module.exports = { SD_PRON: SD_PRON }; }
