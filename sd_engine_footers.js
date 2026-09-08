/* ══════════════════════════════════════════════════════════════════
 * SIGNAL DECAY — ENGINE FOOTERS  (sd_engine_footers.js)
 * Phase A · step 2 — gives every engine a REAL self-registration:
 *   • a live `characters` list (probed from the actual engine data — self-correcting)
 *   • a real getForCharacter(characterId, arcState, capability) contribution
 *
 * WHY ONE FILE (not 16 edits): safer to verify, trivial to revert (delete this
 * file + its <script> tag), and it can't corrupt any engine's own source. The
 * logic here is PORTED DIRECTLY from the proven getX() wrappers in
 * character_chat.html — same behaviour, now discoverable through the registry.
 *
 * LOAD ORDER: this file MUST load AFTER all engine files and AFTER sd_registry.js,
 * but it runs at parse time — BEFORE the DOMContentLoaded bootstrap bridge — so
 * these full registrations win and the bridge cleanly stands down (it only
 * registers engines that aren't already present).
 *
 * SAFE ROLLOUT: buildSystemPrompt() is NOT changed by this file. The old
 * hardcoded wiring keeps running. This only makes the registry's self-report
 * (and the System Status grid) reflect reality. Flipping buildSystemPrompt() to
 * the dynamic collect() loop is a SEPARATE later step.
 * Created: Tuesday, September 8, 2026
 * ══════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  var reg = global.SD_REGISTRY;
  if (!reg) { return; }   // registry missing — nothing to do (fail safe)

  // The canonical playable characters we measure coverage against.
  var BAND = ['kael', 'mira', 'oren', 'jude', 'zara', 'sunny'];

  // Return the subset of BAND for which testFn(id) is truthy. Never throws.
  function covered(testFn) {
    var out = [];
    for (var i = 0; i < BAND.length; i++) {
      try { if (testFn(BAND[i])) { out.push(BAND[i]); } } catch (e) {}
    }
    return out;
  }

  // Register one engine, but only if its global is actually present.
  // If the bootstrap already registered it (shouldn't, since we run first),
  // register() will no-op on the duplicate — safe either way.
  function reggie(globalName, descriptor) {
    try {
      if (typeof global[globalName] === 'undefined') { return; }
      reg.register(descriptor);
    } catch (e) {
      // Never let one engine's footer break the others.
      if (global.console) { console.warn('[footers] ' + globalName + ' failed: ' + e); }
    }
  }

  /* ─────────────────────────────────────────────────────────────
     PORTED CONTRIBUTORS — one per engine, mirroring the getX() wrappers.
     Each takes (id, arcState) and returns a short string ('' if nothing).
     ───────────────────────────────────────────────────────────── */

  // character_engines.js → core identity line
  function cCharacter(id) {
    var E = global.CHARACTER_ENGINES; if (!E || !E[id]) { return ''; }
    var e = E[id], meta = e.meta || {}, psych = e.psychological || {};
    var name = meta.full_name || id;
    var core = psych.core_summary ||
      ('Fear: ' + (psych.core_fear ? psych.core_fear.split('.')[0] : '?') +
       '. Desire: ' + (psych.core_desire ? psych.core_desire.split('.')[0] : '?') + '.');
    return 'You are ' + name + (meta.role ? ', ' + meta.role + ' of Signal Decay' : '') + '. ' + core;
  }

  // daily_life_engine.js → what they're doing right now
  function cDaily(id) {
    var D = global.DAILY_LIFE; if (!D || !D[id]) { return ''; }
    var life = D[id], now = new Date(), hour = now.getHours(), min = now.getMinutes();
    var days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    var today = days[now.getDay()];
    var off = life.off_days && life.off_days.indexOf(today) !== -1;
    var sched = off ? life.typical_off_day : life.typical_work_day;
    if (!sched) { return ''; }
    var entry = sched[String(hour).padStart(2,'0') + ':' + (min >= 30 ? '30' : '00')] ||
                sched[String(hour).padStart(2,'0') + ':00'];
    if (!entry) {
      for (var h = hour; h >= 0; h--) {
        var k = String(h).padStart(2,'0') + ':00', k30 = String(h).padStart(2,'0') + ':30';
        if (sched[k]) { entry = sched[k]; break; }
        if (sched[k30]) { entry = sched[k30]; break; }
      }
    }
    if (!entry) { return ''; }
    var act = (typeof entry === 'string') ? entry : (entry.activity || entry.doing || '');
    return act ? ('RIGHT NOW: ' + act) : '';
  }

  // ufology_knowledge_matrix.js → what they know, gated by arc state
  function cUfology(id, arcState) {
    var U = global.UFOLOGY_KNOWLEDGE; if (!U || !U.topics) { return ''; }
    var topics = U.topics, keys = Object.keys(topics), know = [], count = 0;
    for (var i = 0; i < keys.length && count < 5; i++) {
      var t = topics[keys[i]], cd = t[id]; if (!cd) { continue; }
      var sk = cd[arcState || 'dormant'];
      if (!sk || sk === 'unaware' || sk === null) { continue; }
      know.push((t.display_name || keys[i]) + ': ' + sk); count++;
    }
    return know.length ? ('What you know: ' + know.join(' | ')) : '';
  }

  // frequency_power_engine.js → ability awareness, gated by arc state
  function cPower(id, arcState) {
    var F = global.FREQUENCY_POWERS; if (!F) { return ''; }
    var p = F[id.toUpperCase()]; if (!p) { return ''; }
    if (arcState === 'awakening') {
      return 'Ability (' + (p.power_name || '?') + ') emerging. ' + (p.description ? p.description.slice(0,100) : '');
    }
    if (arcState && arcState !== 'dormant') {
      return 'Ability: ' + (p.power_name || '?') + '. ' + (p.description ? p.description.slice(0,150) : '');
    }
    return p.dormant_experience || 'You sense something different about yourself but cannot name it.';
  }

  // supporting_cast_engine.js → inner circle
  function cCast(id) {
    var S = global.SUPPORTING_CAST; if (!S) { return ''; }
    var map = { kael:'kael_voss', mira:'mira_chen', oren:'oren_malik', jude:'jude_okafor', zara:'zara_kovac', sunny:'sunny' };
    var cast = S[map[id] || id]; if (!cast) { return ''; }
    var members = Object.keys(cast).slice(0,3).map(function (k) {
      var m = cast[k]; return m && m.name ? (m.name + (m.relationship ? ' (' + m.relationship + ')' : '')) : '';
    }).filter(Boolean);
    return members.length ? ('YOUR PEOPLE: ' + members.join(', ')) : '';
  }

  // social_media_engine.js → texting/DM style
  function cSocial(id) {
    var S = global.SOCIAL_MEDIA_ENGINE; if (!S || !S[id]) { return ''; }
    var s = S[id], dm = s.dm_style || (s.platforms && s.platforms.instagram && s.platforms.instagram.engagement) || '';
    if (dm && typeof dm === 'object') { return dm.description || dm.tone || ''; }
    return (typeof dm === 'string' && dm) ? ('TEXTING STYLE: ' + dm) : '';
  }

  // music_band_engine.js → instrument + gear (compact port)
  function cMusic(id) {
    var M = global.MUSIC_BAND_ENGINE; if (!M || !M.MUSIC_PROFILES || !M.MUSIC_PROFILES[id]) { return ''; }
    var p = M.MUSIC_PROFILES[id], inst = p.instrument || {};
    var gear = inst.primary || inst.primary_mic || inst.primary_guitar || inst.primary_kit || inst.primary_bass || {};
    var parts = [];
    var g = inst.type ? ('You play ' + inst.type) : '';
    if (gear.make) { g += ' — a ' + [gear.year, gear.make, gear.model].filter(Boolean).join(' '); }
    if (g) { parts.push(g.trim() + '.'); }
    if (gear.tunings && gear.tunings.length) { parts.push('Tunings: ' + gear.tunings.slice(0,6).join(', ') + '.'); }
    else if (gear.tuning) { parts.push('Tuning: ' + gear.tuning + '.'); }
    if (inst.pedals && inst.pedals.length) { parts.push('Pedals: ' + inst.pedals.slice(0,6).join(', ') + '.'); }
    return parts.length ? ('MUSIC: ' + parts.join(' ')) : '';
  }

  // emotional_state_machine.js → baseline dimensions
  function cEmotional(id) {
    var E = global.EMOTIONAL_STATE_MACHINE; if (!E || !E.baselines || !E.baselines[id]) { return ''; }
    var b = E.baselines[id], parts = [];
    ['energy','warmth','anxiety','openness','focus'].forEach(function (dim) {
      if (typeof b[dim] === 'number') { parts.push(dim + ' ' + b[dim]); }
    });
    if (!parts.length) { return ''; }
    var out = 'Emotional baseline (0-100): ' + parts.join(', ') + '.';
    if (b.description) { out += ' ' + b.description.split('.')[0] + '.'; }
    return out;
  }

  // memory_recovery_engine.js → suppressed-memory chat triggers.
  // REAL shape: MEMORY_RECOVERY_ENGINE[id + '_memories'] = { <id>_mem_01: {..}, ... }
  // each memory has chat_integration.chat_triggers[].phrase_pattern/response_type.
  function cMemory(id) {
    var M = global.MEMORY_RECOVERY_ENGINE; if (!M) { return ''; }
    var group = M[id + '_memories']; if (!group || typeof group !== 'object') { return ''; }
    var keys = Object.keys(group), trig = [];
    for (var i = 0; i < keys.length && trig.length < 6; i++) {
      var mem = group[keys[i]]; if (!mem) { continue; }
      var ct = (mem.chat_integration && mem.chat_integration.chat_triggers) || [];
      for (var j = 0; j < ct.length && trig.length < 6; j++) {
        var ph = ct[j].phrase_pattern || [];
        if (ph.length) { trig.push('"' + ph[0] + '" (' + (ct[j].response_type || 'react') + ')'); }
      }
    }
    return trig.length ? ('SUPPRESSED MEMORY TRIGGERS — react with unease/deflection, NOT full recall: ' + trig.join(', ')) : '';
  }

  // relationship_dynamics_engine.js → bonds with bandmates
  function cRelationship(id) {
    var R = global.RELATIONSHIP_DYNAMICS_ENGINE; if (!R || !R.pairwise) { return ''; }
    var pw = R.pairwise, keys = Object.keys(pw), bonds = [];
    for (var i = 0; i < keys.length && bonds.length < 3; i++) {
      var rel = pw[keys[i]]; if (!rel || !rel.pair || rel.pair.indexOf(id) === -1) { continue; }
      var other = rel.pair[0] === id ? rel.pair[1] : rel.pair[0];
      var bond = rel.core_bond ? rel.core_bond.split('.')[0] : '';
      if (bond) { bonds.push(other + ': ' + bond); }
    }
    return bonds.length ? ('BOND FEELINGS — ' + bonds.join(' | ')) : '';
  }

  // conversation_flow_engine.js → interruption tendency (uses exposed helper if present)
  function cConversation(id) {
    if (typeof global.getInterruptionScore === 'function') {
      try {
        var sc = global.getInterruptionScore(id);
        if (sc !== undefined && sc !== null && typeof sc !== 'object') {
          return 'Interruption tendency (0-100): ' + sc + '.';
        }
      } catch (e) {}
    }
    return '';
  }

  // voice_engine.js → voice profile summary (per character)
  // REAL shape: VOICE_ENGINE.profiles[id] = { displayName, base:{pitch,rate,volume},
  //   backends:{ eleven:{voiceId}, azure:{voiceName}, browser:{...} } }
  function cVoice(id) {
    var V = global.VOICE_ENGINE; if (!V || !V.profiles || !V.profiles[id]) { return ''; }
    var p = V.profiles[id], be = p.backends || {}, base = p.base || {}, bits = [];
    if (be.eleven && be.eleven.voiceId) { bits.push('ElevenLabs ' + be.eleven.voiceId); }
    if (be.azure && be.azure.voiceName) { bits.push('Azure ' + be.azure.voiceName); }
    if (typeof base.pitch !== 'undefined') { bits.push('pitch ' + base.pitch); }
    if (typeof base.rate !== 'undefined') { bits.push('rate ' + base.rate); }
    return bits.length ? ('VOICE: ' + bits.join(', ') + '.') : '';
  }

  /* ─────────────────────────────────────────────────────────────
     REGISTRATIONS — names/priorities/provides MATCH the bootstrap bridge
     so these fully replace it. characters are probed live (self-correcting).
     ───────────────────────────────────────────────────────────── */

  reggie('CHARACTER_ENGINES', {
    name: 'character', version: '1.0', canon: true, priority: 90,
    provides: ['character_prompt'],
    characters: covered(function (id) { return global.CHARACTER_ENGINES[id]; }),
    getForCharacter: function (id, arc) { return cCharacter(id); }
  });

  reggie('DAILY_LIFE', {
    name: 'daily_life', version: '1.0', canon: true, priority: 80,
    provides: ['character_prompt', 'time'],
    characters: covered(function (id) { return global.DAILY_LIFE[id]; }),
    getForCharacter: function (id, arc) { return cDaily(id); }
  });

  reggie('FREQUENCY_POWERS', {
    name: 'frequency', version: '1.0', canon: true, priority: 70,
    provides: ['character_prompt', 'power'],
    characters: covered(function (id) { return global.FREQUENCY_POWERS[id.toUpperCase()]; }),
    getForCharacter: function (id, arc) { return cPower(id, arc); }
  });

  reggie('EMOTIONAL_STATE_MACHINE', {
    name: 'emotional', version: '1.0', canon: true, priority: 60,
    provides: ['character_prompt', 'emotional'],
    characters: covered(function (id) { return global.EMOTIONAL_STATE_MACHINE.baselines && global.EMOTIONAL_STATE_MACHINE.baselines[id]; }),
    getForCharacter: function (id, arc) { return cEmotional(id); }
  });

  reggie('MEMORY_RECOVERY_ENGINE', {
    name: 'memory', version: '1.0', canon: true, priority: 55,
    provides: ['character_prompt', 'memory'],
    characters: covered(function (id) {
      var g = global.MEMORY_RECOVERY_ENGINE[id + '_memories'];
      return g && Object.keys(g).length > 0;
    }),
    getForCharacter: function (id, arc) { return cMemory(id); }
  });

  reggie('RELATIONSHIP_DYNAMICS_ENGINE', {
    name: 'relationship', version: '1.0', canon: true, priority: 55,
    provides: ['character_prompt', 'relationship'],
    characters: covered(function (id) {
      var pw = global.RELATIONSHIP_DYNAMICS_ENGINE.pairwise || {};
      var ks = Object.keys(pw);
      for (var i = 0; i < ks.length; i++) { if (pw[ks[i]] && pw[ks[i]].pair && pw[ks[i]].pair.indexOf(id) !== -1) { return true; } }
      return false;
    }),
    getForCharacter: function (id, arc) { return cRelationship(id); }
  });

  reggie('UFOLOGY_KNOWLEDGE', {
    name: 'ufology', version: '1.0', canon: true, priority: 50,
    provides: ['character_prompt', 'ufology'],
    characters: covered(function (id) {
      var t = global.UFOLOGY_KNOWLEDGE.topics || {}, ks = Object.keys(t);
      for (var i = 0; i < ks.length; i++) { if (t[ks[i]] && t[ks[i]][id]) { return true; } }
      return false;
    }),
    getForCharacter: function (id, arc) { return cUfology(id, arc); }
  });

  reggie('SUPPORTING_CAST', {
    name: 'supporting', version: '1.0', canon: true, priority: 45,
    provides: ['character_prompt', 'cast'],
    characters: covered(function (id) {
      var map = { kael:'kael_voss', mira:'mira_chen', oren:'oren_malik', jude:'jude_okafor', zara:'zara_kovac', sunny:'sunny' };
      return global.SUPPORTING_CAST[map[id] || id];
    }),
    getForCharacter: function (id, arc) { return cCast(id); }
  });

  reggie('CONVERSATION_FLOW_ENGINE', {
    name: 'conversation', version: '1.0', canon: true, priority: 45,
    provides: ['character_prompt', 'conversation'],
    characters: covered(function (id) { return cConversation(id) !== ''; }),
    getForCharacter: function (id, arc) { return cConversation(id); }
  });

  reggie('MUSIC_BAND_ENGINE', {
    name: 'music_band', version: '1.0', canon: true, priority: 40,
    provides: ['character_prompt', 'music'],
    characters: covered(function (id) { return global.MUSIC_BAND_ENGINE.MUSIC_PROFILES && global.MUSIC_BAND_ENGINE.MUSIC_PROFILES[id]; }),
    getForCharacter: function (id, arc) { return cMusic(id); }
  });

  reggie('SOCIAL_MEDIA_ENGINE', {
    name: 'social', version: '1.0', canon: true, priority: 35,
    provides: ['character_prompt', 'social'],
    characters: covered(function (id) { return global.SOCIAL_MEDIA_ENGINE[id]; }),
    getForCharacter: function (id, arc) { return cSocial(id); }
  });

  reggie('VOICE_ENGINE', {
    name: 'voice', version: '1.0', canon: true, priority: 30,
    provides: ['voice'],
    characters: covered(function (id) {
      var V = global.VOICE_ENGINE, p = V.profiles || V.PROFILES || V.voiceProfiles;
      return p && p[id];
    }),
    getForCharacter: function (id, arc) { return cVoice(id); }
  });

  // ── Lore-level engines: not per-character. Registered with real getForCharacter
  //    returning '' (they contribute to lore/timeline/legacy, not the char prompt),
  //    and empty characters — the Status grid honestly shows lore as non-per-character. ──
  reggie('LOCATIONS_ENGINE', {
    name: 'locations', version: '1.0', canon: true, priority: 40,
    provides: ['character_prompt', 'location'], characters: [],
    getForCharacter: function () { return ''; }
  });
  reggie('ORACLE_KNOWLEDGE', {
    name: 'oracle', version: '1.0', canon: true, priority: 50,
    provides: ['lore'], characters: [],
    getForCharacter: function () { return ''; }
  });
  reggie('LEGACY_OPERATIONS_ENGINE', {
    name: 'legacy', version: '1.0', canon: true, priority: 50,
    provides: ['lore', 'legacy'], characters: [],
    getForCharacter: function () { return ''; }
  });
  reggie('TIMELINE_ENGINE', {
    name: 'timeline', version: '1.0', canon: true, priority: 50,
    provides: ['lore', 'timeline'], characters: [],
    getForCharacter: function () { return ''; }
  });

  if (global.console) {
    console.log('[footers] engine footers registered — ' + reg.report().engineCount + ' engines self-describe now.');
  }

})(typeof window !== 'undefined' ? window : this);
