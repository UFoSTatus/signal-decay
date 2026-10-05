/* ═══════════════════════════════════════════════════════════════════
   sd_name_fix.js — window.SD_NAMEFIX  (added 2026-10-05, v120)
   Fixes canon names / made-up words that speech-to-text mishears
   ("Kale" → Kael, "Cova" → Kovač, "Oh Kafor" → Okafor, "the damper" →
   the Dampener) BEFORE the words land in the text box.

   CONSERVATIVE BY DESIGN:
     • whole-word, case-insensitive matches only
     • never touches ordinary English words used literally:
         "mirror", "sunny day", "kale salad", "okay for now", "the legacy of…"
     • never changes real canon names that look like mishearings:
         Kyle (The Margin's guitarist) and Sarah (Dr. Sarah Chen) stay as-is —
         only "Kyle Voss" → "Kael Voss" and "Sarah Kovach" → "Zara Kovač".
     • context words gate the risky ones (damper, legacy, sunny).
   Also normalizes capitalization of full canon names from sd_cast_index.js
   (e.g. "troy jackson" → "Troy Jackson") and unique lore terms from
   sd_pronunciation.js, when those files are loaded on the page.
   100% local, no AI, ES5. Safe to load anywhere; if it throws, callers
   keep the original text.
   ═══════════════════════════════════════════════════════════════════ */
(function (global) {
  var L = "A-Za-z\\u00C0-\\u024F'";           // letters (incl. č) + apostrophe
  var S = "\\s+";                              // space between words

  // ── variant groups ──
  var KAEL   = "(?:kael|kale|cale|kail|kayle|kaile)";
  var VOSS   = "(?:voss|vos|vaughs|vohs)";
  var MIRA   = "(?:mira|meera|myra|mirah|meira)";
  var CHEN   = "(?:chen|chan|chin|chun)";
  var OREN   = "(?:oren|orin|orrin|oran)";
  var MALIK  = "(?:malik|malek|maleek|mallik|malick|malic)";
  var JUDE   = "(?:jude|jud|judd)";
  var OKAFOR = "(?:okafor|okafore|o'kafor|okefor|ocafor|oh" + S + "kafor|o" + S + "kafor)";
  var OKAFOR_LOOSE = "(?:" + OKAFOR.slice(3, -1) + "|okay" + S + "for|ok" + S + "for|oak" + S + "a" + S + "for)";
  var ZARA   = "(?:zara|zarah|zahra|tsara)";
  var KOVAC  = "(?:kova\\u010d|kovac|kovach|kovacs|covach|covac|cova|co" + S + "vatch|koh" + S + "vatch|ko" + S + "vac)";
  var ZHAO   = "(?:zhao|zhou|jow|jao|zao|chao)";
  var ZHAO_LOOSE = "(?:zhao|zhou|jow|jao|zao|chao|chow|joe|jo|show|dow)";
  var CORINNE = "(?:corinne|corrine|corinna|coreen|corine)";
  var SOLANA = "(?:solana|solano|salana|solanna|so" + S + "lana)";

  // Context gates — only fire the risky fixes when the sentence is clearly about the lore.
  var LORE_CTX = /(legacy|machine|device|deploy|zhao|band|frequenc|resonant|harmonic|signal|five|activat|suppress|built|switch|kael|mira|oren|jude|zara|octave|agents?)/i;
  var LEGACY_CTX = /(organi[sz]ation|agents?|men in black|zhao|dampener|damper|surveil|watch|founded|director|operative|the five|resonants?)/i;
  var FOOD_CTX = /(salad|chips|smoothie|\beat\b|\bate\b|eating|leaf|leaves|lettuce|spinach|cook|recipe|vegetable|veggie|garden|grocer)/i;

  // [pattern, replacement, optional guard(fullText) → true means "OK to apply"]
  // Order matters: multi-word rules first, then single words, then casing.
  var RULES = [
    // ─ full names ─
    ["kyle" + S + VOSS,                 "Kael Voss"],
    [KAEL + S + VOSS,                   "Kael Voss"],
    ["eleanor" + S + VOSS,              "Eleanor Voss"],
    ["elena" + S + VOSS,                "Elena Voss"],
    [MIRA + S + CHEN,                   "Mira Chen"],
    [OREN + S + MALIK,                  "Oren Malik"],
    [JUDE + S + OKAFOR_LOOSE,           "Jude Okafor"],
    ["(?:" + ZARA.slice(3, -1) + "|sara|sarah)" + S + KOVAC, "Zara Kova\u010d"],
    ["(?:lena|layna|laina)" + S + KOVAC, "Lena Kova\u010d"],
    ["agent" + S + ZHAO_LOOSE,          "Agent Zhao"],
    [CORINNE + S + ZHAO_LOOSE,          "Corinne Zhao"],
    ["(?:amy|ami|a" + S + "me)" + S + "(?:hahn|han|hun)", "Amihan"],
    ["amihan" + S + SOLANA,             "Amihan Solana"],
    ["(?:ami|amy|ammy)" + S + SOLANA,   "Ami Solana"],
    ["ashley" + S + "(?:cole|kohl|coal|kole|kohle)", "Ashley Cole"],
    ["(?:wei|way|whey|wai)" + S + "(?:lin|lynn|lyn|linn)", "Wei Lin"],
    ["hollow" + S + "(?:ones|one's|once|wands|wins|ons)", "Hollow Ones"],
    ["signal" + S + "(?:decay|delay|decade|dekay|d\\.?k\\.?)", "Signal Decay"],
    ["five" + S + "(?:harmonics|harmonix)", "Five Harmonics"],
    ["zero" + S + "octave",            "Zero Octave"],
    ["first" + S + "octave",           "First Octave"],
    ["second" + S + "octave",          "Second Octave"],
    ["third" + S + "octave",           "Third Octave"],
    // ─ single names (none of these spellings exist in the stories) ─
    [KAEL,        "Kael", function (t) { return !FOOD_CTX.test(t); }],
    ["(?:meera|myra|mirah|meira)", "Mira"],
    ["(?:orin|orrin|oran)", "Oren"],
    [OKAFOR,      "Okafor"],
    [KOVAC,       "Kova\u010d"],
    ["(?:malek|maleek|mallik|malick)", "Malik"],
    ["(?:zahra|zarah|tsara)", "Zara"],
    [ZHAO,        "Zhao"],
    [CORINNE,     "Corinne"],
    ["amihan",    "Amihan"],
    ["amy",       "Ami"],                       // "Amy" never appears in canon; Ami does (229×)
    ["(?:solano|salana|solanna)", "Solana"],
    ["sonny",     "Sunny"],
    ["harmonix",  "Harmonics"],
    ["(?:codecs|kodex|codex|code" + S + "x)", "Codex"],
    ["(?:resinants|rezonants|resonents|resonants)", "Resonants"],
    ["(?:dampener|dampner|dampenor|dampeners|damp" + S + "ner)", "Dampener"],
    // ─ risky words: only with lore context ─
    ["(?:damper|dampening|damp" + S + "in" + S + "her)", "Dampener", function (t) { return LORE_CTX.test(t); }],
    ["legacy",    "Legacy",  function (t) { return LEGACY_CTX.test(t); }]
  ];

  // "sunny" as Sunny the ghost girl vs. sunny weather — handled specially below.
  var SUNNY_AFTER = /^\s+(said|says|told|tells|asked|asks|laughed|laughs|joked|jokes|joke|is a ghost|the ghost|appears|appeared|showed up|whispered|giggled)\b/i;
  var SUNNY_BEFORE = /(ghost girl|ghost|about|ask|tell|with|and|meet|met|where's|who's|where is|who is|did|does|named)\s+$/i;
  var SUNNY_NOT = /^\s+(day|days|morning|mornings|afternoon|afternoons|weather|side|skies|sky|spot|place|disposition|outlook|beach|spell)\b/i;

  var _compiled = null;
  function _compile() {
    if (_compiled) return _compiled;
    _compiled = [];
    for (var i = 0; i < RULES.length; i++) {
      _compiled.push({
        re: new RegExp("(^|[^" + L + "])(" + RULES[i][0] + ")(?![" + L + "])", "gi"),
        to: RULES[i][1],
        guard: RULES[i][2] || null
      });
    }
    return _compiled;
  }

  // Capitalization pass: full canon names from SD_CAST + unique lore terms from SD_PRON.
  var _casing = null;
  function _escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function _buildCasing() {
    if (_casing) return _casing;
    var names = [];
    try {
      if (global.SD_CAST) {
        var groups = [global.SD_CAST.members || [], global.SD_CAST.people || []];
        for (var g = 0; g < groups.length; g++) {
          for (var i = 0; i < groups[g].length; i++) {
            var n = groups[g][i] && groups[g][i].name;
            if (n && /\s/.test(n)) names.push(n);          // full names only (safe)
          }
        }
      }
      if (global.SD_PRON && global.SD_PRON.lex) {
        for (var k in global.SD_PRON.lex) {
          if (global.SD_PRON.lex.hasOwnProperty(k) && k.length >= 5 && /[A-Z]/.test(k)) names.push(k);
        }
      }
    } catch (e) {}
    names.sort(function (a, b) { return b.length - a.length; });
    _casing = [];
    for (var j = 0; j < names.length; j++) {
      _casing.push({
        re: new RegExp("(^|[^" + L + "])(" + _escRe(names[j]).replace(/\s+/g, "\\s+") + ")(?![" + L + "])", "gi"),
        to: names[j]
      });
    }
    return _casing;
  }

  function fix(text) {
    if (typeof text !== 'string' || !text) return text;
    try {
      var out = text, rules = _compile(), i;
      for (i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (r.guard && !r.guard(out)) continue;
        out = out.replace(r.re, function (m, pre) { return pre + r.to; });
      }
      // Sunny (the ghost girl) — capitalize only when it's clearly her name
      out = out.replace(new RegExp("(^|[^" + L + "])(sunny)(?![" + L + "])", "gi"), function (m, pre, word, offset, whole) {
        if (word === 'Sunny') return m;
        var before = whole.slice(0, offset + pre.length);
        var after = whole.slice(offset + m.length);
        if (SUNNY_NOT.test(after)) return m;
        if (SUNNY_AFTER.test(after) || SUNNY_BEFORE.test(before)) return pre + 'Sunny';
        return m;
      });
      var cs = _buildCasing();
      for (i = 0; i < cs.length; i++) {
        var c = cs[i];
        out = out.replace(c.re, function (m, pre) { return pre + c.to; });
      }
      return out;
    } catch (e) {
      return text;   // never break voice input
    }
  }

  global.SD_NAMEFIX = { version: '1.0.0', fix: fix, _rules: RULES, _reset: function () { _compiled = null; _casing = null; } };
  if (typeof module !== 'undefined' && module.exports) module.exports = global.SD_NAMEFIX;
})(typeof window !== 'undefined' ? window : this);
