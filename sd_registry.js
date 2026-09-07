/* ══════════════════════════════════════════════════════════════════════
 * SIGNAL DECAY — SELF-AWARE APP REGISTRY  (sd_registry.js)
 * The "smart power strip." Engines self-register here; apps query here.
 * Pure ES5. No dependencies. Safe on file:// and GitHub Pages. No keys.
 * Created: Monday, September 7, 2026  (Phase A of the Expansion Roadmap)
 *
 * WHAT IT IS: structural self-awareness — the app keeps a live list of its
 * own engines, knows what each provides, wires itself, notices gaps, and can
 * describe itself. NOT sentience. Think "Settings > About" for the app.
 *
 * HOW IT WORKS:
 *  1) This file loads FIRST (before the engines).
 *  2) Each engine, at the bottom of its file, calls SD_REGISTRY.register({...}).
 *  3) Apps ask the registry: "who provides character_prompt?" etc.
 *
 * SAFE ROLLOUT: this runs ALONGSIDE the existing hardcoded wiring. Nothing
 * breaks. buildSystemPrompt() is only switched to use collect() AFTER the
 * System Status screen confirms every engine registered.
 * ════════════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  // If it already exists (another page already made it), reuse it.
  if (global.SD_REGISTRY) { return; }

  var registry = {
    version: 1,
    _engines: {},   // name -> descriptor
    _errors: [],    // things that went wrong (for the Status screen)

    /* An engine calls this from its footer to announce itself. */
    register: function (descriptor) {
      // --- Validate, so a broken engine can't poison the registry ---
      if (!descriptor || typeof descriptor !== 'object') {
        this._errors.push({ when: now(), msg: 'register() got no descriptor' });
        return false;
      }
      if (typeof descriptor.name !== 'string' || !descriptor.name) {
        this._errors.push({ when: now(), msg: 'engine registered with no name' });
        return false;
      }
      if (this._engines[descriptor.name]) {
        // Duplicate name — keep the first, log the clash (canon-safe: no silent overwrite)
        this._errors.push({ when: now(),
          msg: 'duplicate engine name ignored: ' + descriptor.name });
        return false;
      }

      // --- Fill in safe defaults so consumers never hit "undefined" ---
      this._engines[descriptor.name] = {
        name:         descriptor.name,
        version:      descriptor.version || '0.0',
        provides:     descriptor.provides || [],        // e.g. ['character_prompt','music']
        characters:   descriptor.characters || [],      // e.g. ['kael','mira',...]
        canon:        descriptor.canon === true,         // is this a canon source?
        priority:     (typeof descriptor.priority === 'number') ? descriptor.priority : 50,
        getForCharacter: (typeof descriptor.getForCharacter === 'function')
                            ? descriptor.getForCharacter : null,
        describe:     (typeof descriptor.describe === 'function')
                            ? descriptor.describe : null,
        registeredAt: now()
      };
      return true;
    },

    /* Is a named engine present? */
    has: function (name) { return !!this._engines[name]; },

    /* Get one engine's descriptor. */
    get: function (name) { return this._engines[name] || null; },

    /* List all engine descriptors, highest priority first. */
    all: function () {
      var out = [], k;
      for (k in this._engines) {
        if (this._engines.hasOwnProperty(k)) { out.push(this._engines[k]); }
      }
      out.sort(function (a, b) { return b.priority - a.priority; });
      return out;
    },

    /* CAPABILITY DISCOVERY: everyone who provides a given capability. */
    providersOf: function (capability) {
      var out = [], list = this.all(), i;
      for (i = 0; i < list.length; i++) {
        if (indexOf(list[i].provides, capability) !== -1) { out.push(list[i]); }
      }
      return out;
    },

    /* Ask every provider of a capability for its contribution for one character.
       Missing/broken engines are skipped (self-healing). Returns an array of
       { name, text } — the caller decides how to assemble them. */
    collect: function (capability, characterId, arcState) {
      var providers = this.providersOf(capability), out = [], i, piece;
      for (i = 0; i < providers.length; i++) {
        if (!providers[i].getForCharacter) { continue; }
        try {
          piece = providers[i].getForCharacter(characterId, arcState, capability);
          if (piece && ('' + piece).length) {
            out.push({ name: providers[i].name, text: '' + piece });
          }
        } catch (e) {
          // One bad engine must NEVER break the prompt. Log and move on.
          this._errors.push({ when: now(),
            msg: 'engine "' + providers[i].name + '" threw during collect: ' + e });
        }
      }
      return out;
    },

    /* SELF-REPORTING: a plain-data snapshot the AI, the learning engine,
       and the Status screen can all read. */
    report: function () {
      var list = this.all(), engines = [], i;
      for (i = 0; i < list.length; i++) {
        engines.push({
          name: list[i].name, version: list[i].version,
          provides: list[i].provides, characters: list[i].characters,
          canon: list[i].canon
        });
      }
      return {
        generatedAt: now(),
        registryVersion: this.version,
        engineCount: list.length,
        engines: engines,
        errors: this._errors.slice(0)
      };
    },

    /* Which characters is a capability missing for? (gap detection) */
    coverageGaps: function (capability, allCharacters) {
      var providers = this.providersOf(capability), covered = {}, i, j, gaps = [];
      for (i = 0; i < providers.length; i++) {
        for (j = 0; j < providers[i].characters.length; j++) { covered[providers[i].characters[j]] = true; }
      }
      for (i = 0; i < allCharacters.length; i++) {
        if (!covered[allCharacters[i]]) { gaps.push(allCharacters[i]); }
      }
      return gaps;
    },

    /* One-sentence human explanation for chat/debug. */
    explain: function () {
      var r = this.report(), caps = {}, i, j;
      for (i = 0; i < r.engines.length; i++) {
        for (j = 0; j < r.engines[i].provides.length; j++) { caps[r.engines[i].provides[j]] = true; }
      }
      var capList = []; for (var c in caps) { if (caps.hasOwnProperty(c)) { capList.push(c); } }
      return 'I have ' + r.engineCount + ' engines loaded. I can provide: '
           + capList.join(', ') + '. Errors logged: ' + r.errors.length + '.';
    },

    /* ── Phase-1 BRIDGE: auto-registers engines that don't yet have a footer,
       by checking for their known global. Lets the Status screen show ALL
       engines during rollout. Delete once every engine has its own footer.
       IMPORTANT: matches each engine's REAL global name (some are const, but
       these are the window globals confirmed present). ── */
    bootstrapKnownEngines: function () {
      var known = [
        { g: 'CHARACTER_ENGINES',        name: 'character',    provides: ['character_prompt'],            canon: true, priority: 90 },
        { g: 'UFOLOGY_KNOWLEDGE',        name: 'ufology',      provides: ['character_prompt','ufology'],  canon: true, priority: 50 },
        { g: 'ORACLE_KNOWLEDGE',         name: 'oracle',       provides: ['lore'],                        canon: true, priority: 50 },
        { g: 'FREQUENCY_POWERS',         name: 'frequency',    provides: ['character_prompt','power'],    canon: true, priority: 70 },
        { g: 'SUPPORTING_CAST',          name: 'supporting',   provides: ['character_prompt','cast'],     canon: true, priority: 45 },
        { g: 'SOCIAL_MEDIA_ENGINE',      name: 'social',       provides: ['character_prompt','social'],   canon: true, priority: 35 },
        { g: 'DAILY_LIFE',               name: 'daily_life',   provides: ['character_prompt','time'],      canon: true, priority: 80 },
        { g: 'MUSIC_BAND_ENGINE',        name: 'music_band',   provides: ['character_prompt','music'],     canon: true, priority: 40 },
        { g: 'MEMORY_RECOVERY_ENGINE',   name: 'memory',       provides: ['character_prompt','memory'],    canon: true, priority: 55 },
        { g: 'EMOTIONAL_STATE_MACHINE',  name: 'emotional',    provides: ['character_prompt','emotional'], canon: true, priority: 60 },
        { g: 'CONVERSATION_FLOW_ENGINE', name: 'conversation', provides: ['character_prompt','conversation'], canon: true, priority: 45 },
        { g: 'LOCATIONS_ENGINE',         name: 'locations',    provides: ['character_prompt','location'],  canon: true, priority: 40 },
        { g: 'LEGACY_OPERATIONS_ENGINE', name: 'legacy',       provides: ['lore','legacy'],                canon: true, priority: 50 },
        { g: 'TIMELINE_ENGINE',          name: 'timeline',     provides: ['lore','timeline'],              canon: true, priority: 50 },
        { g: 'RELATIONSHIP_DYNAMICS_ENGINE', name: 'relationship', provides: ['character_prompt','relationship'], canon: true, priority: 55 },
        { g: 'VOICE_ENGINE',             name: 'voice',        provides: ['voice'],                        canon: true, priority: 30 }
      ];
      for (var i = 0; i < known.length; i++) {
        var k = known[i];
        if (!this.has(k.name) && typeof global[k.g] !== 'undefined') {
          this.register({ name: k.name, version: '(bootstrap)', provides: k.provides,
                          characters: [], canon: k.canon, priority: k.priority,
                          getForCharacter: null });
        }
      }
      return this.report();
    }
  };

  // --- tiny ES5 helpers (no modern syntax anywhere) ---
  function now() { return new Date().toISOString(); }
  function indexOf(arr, val) {
    if (!arr || !arr.length) { return -1; }
    for (var i = 0; i < arr.length; i++) { if (arr[i] === val) { return i; } }
    return -1;
  }

  global.SD_REGISTRY = registry;

})(typeof window !== 'undefined' ? window : this);

if (typeof module !== 'undefined' && module.exports) { module.exports = (typeof window !== 'undefined' ? window.SD_REGISTRY : this.SD_REGISTRY); }
