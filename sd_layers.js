/* ══════════════════════════════════════════════════════════════════
   SIGNAL DECAY — REVEAL LAYERS  (sd_layers.js)
   Stage 2: progressive enrichment. A story can gain optional media
   layers over time (hero illustration, ambient audio bed, end gallery,
   and later motion) WITHOUT touching the story text or anyone's saved
   progress.

   Core rules (from the live-service research):
   - The text ALWAYS renders first. Layers are a BONUS, never a wall.
   - Versioned manifest (layers.json), network-first + cached + defaults.
   - Old clients ignore layer types they don't understand.
   - Missing/failed media must NEVER break the story (all guarded).
   - Ambient audio is OFF by default, opt-in via a subtle toggle,
     remembered per-device.

   Pure ES5, no deps. Exposes window.SD_LAYERS.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  if (window.SD_LAYERS) return;

  var MANIFEST = { version: 0, layers: {} };
  var loaded = false;
  var AUDIO_PREF_KEY = 'sd_ambient_on';   // remembers the toggle per-device
  var curAudio = null;

  function ambientPref() {
    try { return localStorage.getItem(AUDIO_PREF_KEY) === '1'; } catch (e) { return false; }
  }
  function setAmbientPref(on) {
    try { localStorage.setItem(AUDIO_PREF_KEY, on ? '1' : '0'); } catch (e) {}
  }

  /* ── load manifest: network-first, cache fallback, then baked-in ── */
  function load(cb) {
    function apply(obj, cacheIt) {
      if (obj && obj.layers && typeof obj.layers === 'object') {
        MANIFEST = { version: obj.version || 1, layers: obj.layers };
        if (cacheIt) { try { localStorage.setItem('sd_layers_cache', JSON.stringify(obj)); } catch (e) {} }
      }
      loaded = true;
      if (cb) cb();
    }
    try {
      fetch('layers.json', { cache: 'no-store' })
        .then(function (r) { if (!r.ok) throw new Error('bad'); return r.json(); })
        .then(function (j) { apply(j, true); })
        .catch(function () {
          var cached = null;
          try { cached = JSON.parse(localStorage.getItem('sd_layers_cache') || 'null'); } catch (e) {}
          apply(cached || { version: 0, layers: {} }, false);
        });
    } catch (e) { apply({ version: 0, layers: {} }, false); }
  }

  function layersFor(storyId) {
    if (!storyId || !MANIFEST.layers) return null;
    return MANIFEST.layers[storyId] || null;
  }
  function hasLayers(storyId) {
    var L = layersFor(storyId);
    return !!(L && (L.hero || L.ambient || (L.gallery && L.gallery.length)));
  }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* stop any playing ambient bed (call on story close / switch) */
  function stopAmbient() {
    if (curAudio) {
      try { curAudio.pause(); curAudio.src = ''; } catch (e) {}
      curAudio = null;
    }
  }

  /* build the hero image HTML (guarded: onerror hides it, never breaks layout) */
  function heroHTML(src) {
    if (!src) return '';
    var u = esc(src);
    return '<div class="sdl-hero"><img src="' + u + '" alt="" '
      + 'onerror="this.parentNode.style.display=\'none\'" '
      + 'style="width:100%;border-radius:12px;display:block;" loading="lazy"></div>';
  }

  /* build ambient toggle HTML (audio element created lazily on click) */
  function ambientHTML(ambient) {
    if (!ambient || !ambient.src) return '';
    var label = esc(ambient.label || 'ambience');
    return '<button type="button" class="sdl-ambient" data-src="' + esc(ambient.src) + '" '
      + 'style="display:inline-flex;align-items:center;gap:7px;font-size:0.7rem;font-weight:600;'
      + 'border:1px solid rgba(125,211,252,0.3);background:rgba(125,211,252,0.08);color:#7dd3fc;'
      + 'padding:6px 12px;border-radius:100px;cursor:pointer;margin-bottom:16px;">'
      + '<i class="fa-solid fa-music"></i> <span class="sdl-amb-label">Play ambience \u00b7 ' + label + '</span></button>';
  }

  function galleryHTML(gallery) {
    if (!gallery || !gallery.length) return '';
    var h = '<div class="sdl-gallery" style="margin-top:32px;display:grid;gap:16px;">';
    for (var i = 0; i < gallery.length; i++) {
      var g = gallery[i];
      if (!g || !g.src) continue;
      h += '<figure style="margin:0;">'
        + '<img src="' + esc(g.src) + '" alt="" loading="lazy" '
        + 'onerror="this.parentNode.style.display=\'none\'" '
        + 'style="width:100%;border-radius:12px;display:block;">'
        + (g.caption ? '<figcaption style="font-size:0.7rem;color:#7c8a99;margin-top:6px;text-align:center;">' + esc(g.caption) + '</figcaption>' : '')
        + '</figure>';
    }
    h += '</div>';
    return h;
  }

  /* ── main entry: enrich an already-rendered story ──
     storyId       : the story's id
     bodyEl        : the reader body element (already contains header + text)
     opts.beforeEl : optional node to insert hero/ambient before (top of content)
     Safe to call even if no layers exist (no-op). */
  function apply(storyId, bodyEl) {
    stopAmbient(); // clean any prior bed when switching stories
    if (!bodyEl) return;
    var L = layersFor(storyId);
    if (!L) return;

    // 1) hero + ambient go at the TOP of the body (before existing content)
    var topHTML = heroHTML(L.hero) + ambientHTML(L.ambient);
    if (topHTML) {
      var top = document.createElement('div');
      top.className = 'sdl-top';
      top.innerHTML = topHTML;
      if (bodyEl.firstChild) bodyEl.insertBefore(top, bodyEl.firstChild);
      else bodyEl.appendChild(top);

      // wire ambient toggle
      var btn = top.querySelector('.sdl-ambient');
      if (btn) {
        btn.addEventListener('click', function () {
          var src = this.getAttribute('data-src');
          var lbl = this.querySelector('.sdl-amb-label');
          if (curAudio) {
            // toggle OFF
            stopAmbient();
            setAmbientPref(false);
            if (lbl) lbl.textContent = 'Play ambience';
            this.style.opacity = '';
            return;
          }
          try {
            curAudio = new Audio(src);
            curAudio.loop = true;
            curAudio.volume = 0.35;
            var pr = curAudio.play();
            if (pr && pr.catch) pr.catch(function () {}); // autoplay guard
            setAmbientPref(true);
            if (lbl) lbl.textContent = 'Pause ambience';
            this.style.opacity = '0.85';
          } catch (e) { curAudio = null; }
        });
      }
    }

    // 2) gallery goes at the END of the body
    var gHTML = galleryHTML(L.gallery);
    if (gHTML) {
      var g = document.createElement('div');
      g.innerHTML = gHTML;
      bodyEl.appendChild(g);
    }
  }

  window.SD_LAYERS = {
    load: load,
    apply: apply,
    hasLayers: hasLayers,
    layersFor: layersFor,
    stopAmbient: stopAmbient,
    _manifest: function () { return MANIFEST; }
  };
})();
