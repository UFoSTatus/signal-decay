// ═══════════════════════════════════════════════════════════════
// sd_canon_guard.js — THE CONTINUITY / CANON GUARD (local, offline)
// ═══════════════════════════════════════════════════════════════
// A local fact index + contradiction checker. Feed it story text and it
// flags canon violations: wrong surnames (draft drift), wrong birth
// years/ages, off-canon character names, wrong abilities. 100% local,
// no AI. Built to catch exactly the drift we've fought all along
// (Marcus/Juno, Vasquez/Nakamura, Mira "Solana", Zara born 1997).
//
// Source of truth: CANON_BIRTH_YEARS_AND_TIMELINE_ANCHOR.md
// window.SD_CANON.  ES5-safe. Created 2026-09-23.
// ═══════════════════════════════════════════════════════════════
var SD_CANON = {
  version: "1.0.0",
  anchorYear: 2026,   // The Five meet in 2026

  // ── CANONICAL FACTS ──
  five: {
    kael: { name:"Kael Voss",  surname:"Voss",   born:2002, age:24, role:"Vocals",       soul:"Ka-El",    ability:"Voice Manipulation" },
    mira: { name:"Mira Chen",  surname:"Chen",   born:2004, age:22, role:"Lead Guitar",  soul:"Mir-Ahk",  ability:"Frequency Sight" },
    oren: { name:"Oren Malik", surname:"Malik",  born:1999, age:27, role:"Drums",        soul:"Ori-Tahn", ability:"Temporal Drift" },
    jude: { name:"Jude Okafor",surname:"Okafor", born:2000, age:26, role:"Rhythm Guitar",soul:"Ju-Dael",  ability:"Emotional Resonance" },
    zara: { name:"Zara Kovač", surname:"Kovač",  born:2001, age:25, role:"Bass",         soul:"Zar-Ahn",  ability:"Harmonic Bridge" }
  },
  supporting: {
    lena:{ name:"Lena Kovač", born:2009, age:17 },
    ante:{ name:"Ante Kovač", born:1969 },
    marko:{ name:"Marko Kovač", born:2006 }
  },

  // ── DRIFT: wrong surname/name -> correct (these have bitten us before) ──
  driftNames: {
    "Mira Solana":"Mira Chen", "Mira Vasquez":"Mira Chen", "Mira Nakamura":"Mira Chen",
    "Marcus Chen":"Kael Voss", "Marcus":"(off-canon — likely Kael)",
    "Juno Park":"Mira Chen", "Juno":"(off-canon — likely Mira)",
    "Kael Nakamura":"Kael Voss", "Kael Morrison":"Kael Voss",
    "Zara Volkov":"Zara Kovač", "Oren Sato":"Oren Malik",
  },
  // surnames that are NEVER canon for the Five (draft variants)
  badSurnames: ["Solana","Vasquez","Nakamura","Sato","Volkov","Morrison"],

  _byName: function(name){
    for (var k in this.five){ if(this.five[k].name===name || this.five[k].surname===name) return this.five[k]; }
    return null;
  },

  // MAIN: scan text, return an array of {type, severity, found, expected, note}
  checkText: function(text){
    if (!text) return [];
    var issues = [];
    var self = this;

    // 1) off-canon / drift names
    for (var bad in this.driftNames){
      if (!this.driftNames.hasOwnProperty(bad)) continue;
      var re = new RegExp("\\b"+bad.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"\\b");
      if (re.test(text)){
        issues.push({ type:"name", severity:"high", found:bad,
          expected:this.driftNames[bad], note:"Off-canon name — should be "+this.driftNames[bad] });
      }
    }
    // 2) bad surnames attached to a first name of the Five
    var firsts = ["Kael","Mira","Oren","Jude","Zara"];
    for (var i=0;i<firsts.length;i++){
      for (var j=0;j<this.badSurnames.length;j++){
        var combo = firsts[i]+" "+this.badSurnames[j];
        if (text.indexOf(combo) >= 0){
          issues.push({ type:"surname", severity:"high", found:combo,
            expected:(self.five[firsts[i].toLowerCase()]||{}).name, note:"Draft surname drift" });
        }
      }
    }
    // 3) birth-year contradictions (e.g. "Zara ... born 1997")
    for (var key in this.five){
      if (!this.five.hasOwnProperty(key)) continue;
      var c = this.five[key];
      var first = c.name.split(" ")[0];
      // Require the FULL canonical name near the birth year (avoids Soren->Oren,
      // Eleanor Voss->Kael, and other unrelated same-first-name characters).
      var full = c.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
      var yr = new RegExp(full+"[\\s\\S]{0,60}?born(?:\\s+in)?\\s+(\\d{4})","i");
      var m = yr.exec(text);
      if (m && parseInt(m[1],10) !== c.born){
        issues.push({ type:"birthyear", severity:"high", found:c.name+" born "+m[1],
          expected:c.name+" born "+c.born, note:"Contradicts canon birth year" });
      }
    }
    // 4) age contradictions "<first> ... age NN" / "NN-year-old <first>"
    for (var key2 in this.five){
      if (!this.five.hasOwnProperty(key2)) continue;
      var c2 = this.five[key2];
      var f2 = c2.name.split(" ")[0];
      var ageRe = new RegExp("(?:"+f2+"[^.]{0,40}?\\b(\\d{2})\\s*(?:years old|-year-old)|\\b(\\d{2})[- ]year[- ]old\\s+"+f2+")","i");
      var am = ageRe.exec(text);
      if (am){
        var found = parseInt(am[1]||am[2],10);
        // only flag "@2026 age" if clearly present-day (>=18 & <=40) and mismatched
        if (found>=18 && found<=40 && found!==c2.age){
          issues.push({ type:"age", severity:"low", found:f2+" age "+found,
            expected:f2+" age "+c2.age+" (@2026)", note:"Age differs from meeting-year canon (may be a 'before' scene — verify)" });
        }
      }
    }
    return issues;
  },

  // Convenience: a printable report string
  report: function(text){
    var issues = this.checkText(text);
    if (!issues.length) return "\u2713 No canon issues detected.";
    var out = issues.length+" possible canon issue(s):\n";
    for (var i=0;i<issues.length;i++){
      var x=issues[i];
      out += "  ["+x.severity.toUpperCase()+"] "+x.found+"  \u2192  "+(x.expected||"?")+"   ("+x.note+")\n";
    }
    return out;
  }
};
if (typeof window !== 'undefined') { try { window.SD_CANON = SD_CANON; } catch(e){} }
if (typeof module !== 'undefined' && module.exports) { module.exports = { SD_CANON: SD_CANON }; }
