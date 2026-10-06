/* ════════════════════════════════════════════════════════════════════
   sd_unlocks.js — window.SD_UNLOCK                (added 2026-10-06, v121)
   ONE shared Deep Time lock list + ONE rule, used by every app:
     Reader (index.html) · Timeline · Investigation Board · Immersive Reader
   A Deep Time story is OPEN if ANY of these is true:
     1. Director's Clearance  (drop switch unlocks.json  OR  Timeline toggle sd_director)
     2. force-unlocked by the drop switch (story id or title)
     3. cleared in the 📻 tuning mini-game (sd_gates_cleared)
     4. stories read (>= 50%) >= the lock number
   Lock numbers = the Codex values (v118 rescale, 8–33). Edit ONLY here.
   Reads only (never writes reading progress). Same-device browser storage.
   Live: other open tabs/apps update without a reload (storage event +
   BroadcastChannel 'sd_unlocks' + re-check when a page comes back into view).
   Phase B later: point _read() at progress_state.js — no app changes needed.
   ES5 · file:// + GitHub Pages safe · every call is wrapped (never throws).
   ════════════════════════════════════════════════════════════════════ */
(function (g) {
  'use strict';

  var REQS = {
    dt_first_octave: 8,
    dt_detuning: 10,
    dt_gold_and_flood: 11,
    dt_home_note: 12,
    dt_maldek: 13,
    dt_capstone: 14,
    dt_ice_kings: 15,
    dt_extraction: 16,
    dt_first_wave: 17,
    dt_elder_brother: 18,
    dt_ring_makers: 19,
    dt_europa_crypt: 20,
    dt_proxima_signal: 21,
    dt_poles_moved: 22,
    dt_magenta_bell: 23,
    dt_harmonic_manifest: 24,
    dt_grid_falls: 28,
    dt_the_chase: 29,
    dt_twenty_two: 30,
    dt_the_escort: 31,
    dt_creditors: 32,
    dt_dark_object: 33
  };
  var TITLES = {
    dt_first_octave: "The First Octave",
    dt_detuning: "The Detuning",
    dt_gold_and_flood: "The Gold and the Flood",
    dt_home_note: "The Home Note",
    dt_maldek: "The Breaking of Maldek",
    dt_capstone: "The Setting of the Capstone",
    dt_ice_kings: "The Ice Kings",
    dt_extraction: "The Extraction",
    dt_first_wave: "First Wave",
    dt_elder_brother: "Elder Brother",
    dt_ring_makers: "The Ring Makers of Saturn",
    dt_europa_crypt: "Europa Crypt",
    dt_proxima_signal: "Proxima Signal",
    dt_poles_moved: "The Day the Poles Moved",
    dt_magenta_bell: "The Magenta Bell",
    dt_harmonic_manifest: "The Harmonic Manifest",
    dt_grid_falls: "The Grid Falls",
    dt_the_chase: "The Chase",
    dt_twenty_two: "The Twenty-Two Programs",
    dt_the_escort: "The Escort",
    dt_creditors: "The Creditors",
    dt_dark_object: "The Dark Object"
  };
  // other ids that mean the same story (Investigation Board node ids)
  var ALIASES = { dt_gold_flood: 'dt_gold_and_flood' };

  var KEYS = { history: 'sd_history', gates: 'sd_gates_cleared', manifest: 'sd_unlocks_cache', director: 'sd_director' };
  var M = { director_clearance: false, global_threshold_multiplier: 1, force_unlock: [], threshold_overrides: {} };
  var subs = [], lastSig = null, chan = null;

  function _read(key, fallback) {
    try { var v = g.localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
  }
  function _raw(key) { try { return g.localStorage.getItem(key); } catch (e) { return null; } }

  function applyManifest(o) {
    if (!o || typeof o !== 'object') return;
    if (typeof o.director_clearance === 'boolean') M.director_clearance = o.director_clearance;
    if (typeof o.global_threshold_multiplier === 'number' && o.global_threshold_multiplier > 0) M.global_threshold_multiplier = o.global_threshold_multiplier;
    if (o.force_unlock && o.force_unlock.length) M.force_unlock = o.force_unlock.slice();
    if (o.threshold_overrides && typeof o.threshold_overrides === 'object') M.threshold_overrides = o.threshold_overrides;
  }

  function canon(id) { return (id && ALIASES[id]) || id; }
  function has(id) { id = canon(id); return !!id && Object.prototype.hasOwnProperty.call(REQS, id); }

  function readCount() {
    var h = _read(KEYS.history, {}), n = 0;
    if (!h || typeof h !== 'object') return 0;
    for (var k in h) { if (Object.prototype.hasOwnProperty.call(h, k) && h[k] && h[k].progress >= 50) n++; }
    return n;
  }
  function directorOn() { return !!M.director_clearance || _raw(KEYS.director) === '1'; }
  function isForced(id) {
    var f = M.force_unlock; if (!f || !f.length) return false;
    for (var i = 0; i < f.length; i++) { if (f[i] === id || f[i] === TITLES[id]) return true; }
    return false;
  }
  function isTuned(id) {
    var a = _read(KEYS.gates, []);
    if (!a || !a.length) return false;
    for (var i = 0; i < a.length; i++) { if (a[i] === id) return true; }
    return false;
  }
  function reqFor(id) {
    id = canon(id); if (!has(id)) return null;
    var ov = M.threshold_overrides || {};
    if (Object.prototype.hasOwnProperty.call(ov, TITLES[id]) && typeof ov[TITLES[id]] === 'number') return ov[TITLES[id]];
    if (Object.prototype.hasOwnProperty.call(ov, id) && typeof ov[id] === 'number') return ov[id];
    return Math.ceil(REQS[id] * (M.global_threshold_multiplier || 1));
  }
  /* full answer: {gated, unlocked, req, readCount, remaining, how} */
  function state(id) {
    id = canon(id);
    if (!has(id)) return { gated: false, unlocked: true, req: null, readCount: readCount(), remaining: 0, how: 'not_gated' };
    var rc = readCount(), req = reqFor(id), how = 'locked';
    if (directorOn()) how = 'director';
    else if (isForced(id)) how = 'forced';
    else if (isTuned(id)) how = 'tuned';
    else if (rc >= req) how = 'read';
    return { gated: true, unlocked: how !== 'locked', req: req, readCount: rc, remaining: Math.max(0, req - rc), how: how };
  }
  function isUnlocked(id) { try { return state(id).unlocked; } catch (e) { return false; } }
  function openList() { var out = []; for (var k in REQS) { if (Object.prototype.hasOwnProperty.call(REQS, k) && isUnlocked(k)) out.push(k); } return out; }
  function sig() { return openList().join(','); }

  /* ── live updates ── */
  function check(force) {
    var s; try { s = sig(); } catch (e) { return; }
    if (!force && s === lastSig) return;
    lastSig = s;
    for (var i = 0; i < subs.length; i++) { try { subs[i](openList()); } catch (e) {} }
  }
  function onChange(fn) { if (typeof fn === 'function') subs.push(fn); }
  function ping() { check(false); try { if (chan) chan.postMessage({ t: 'changed', at: Date.now() }); } catch (e) {} }

  try { applyManifest(_read(KEYS.manifest, null)); } catch (e) {}
  try { lastSig = sig(); } catch (e) {}
  try {
    g.addEventListener('storage', function (ev) {
      if (!ev || ev.key == null || ev.key === KEYS.history || ev.key === KEYS.gates || ev.key === KEYS.director || ev.key === KEYS.manifest) {
        if (ev && ev.key === KEYS.manifest) applyManifest(_read(KEYS.manifest, null));
        check(false);
      }
    });
  } catch (e) {}
  try { if (typeof g.BroadcastChannel !== 'undefined') { chan = new g.BroadcastChannel('sd_unlocks'); chan.onmessage = function () { applyManifest(_read(KEYS.manifest, null)); check(false); }; } } catch (e) { chan = null; }
  try { g.addEventListener('pageshow', function () { check(false); }); } catch (e) {}
  try { if (g.document) g.document.addEventListener('visibilitychange', function () { if (!g.document.hidden) check(false); }); } catch (e) {}

  /* drop switch: network first, cache already applied above */
  function load(cb) {
    try {
      if (typeof g.fetch !== 'function') { if (cb) cb(); return; }
      g.fetch('unlocks.json', { cache: 'no-store' })
        .then(function (r) { if (!r.ok) throw new Error('bad'); return r.json(); })
        .then(function (j) { applyManifest(j); try { g.localStorage.setItem(KEYS.manifest, JSON.stringify(j)); } catch (e) {} check(false); if (cb) cb(); })
        .catch(function () { if (cb) cb(); });
    } catch (e) { if (cb) cb(); }
  }
  load();

  g.SD_UNLOCK = {
    version: '2026-10-06',
    REQS: REQS, TITLES: TITLES, ALIASES: ALIASES,
    has: has, canon: canon, reqFor: reqFor, readCount: readCount, directorOn: directorOn,
    isUnlocked: isUnlocked, state: state, openList: openList,
    onChange: onChange, ping: ping, load: load, _applyManifest: applyManifest
  };
})(typeof window !== 'undefined' ? window : this);
