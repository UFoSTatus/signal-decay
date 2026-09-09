/* ══════════════════════════════════════════════════════════════════
   SIGNAL DECAY — THE RECEIVER CONSOLE  (sd_receiver.js)
   Stage 3: the engagement-verified unlock gate.

   A premium, diegetic frequency-tuning mini-game. The reader "tunes in"
   to a hidden signal; a swinging needle, a signal-strength bar, a
   resolving waveform, and a rising audio tone give real game-feel.
   Lock the signal when it's strong enough -> the entry declassifies.

   Design rules (from the live-service research):
   - Skill-based, never luck-based.
   - Soft-fail ONLY: a decaying "Signal Integrity" meter never ends the
     game; it just surfaces help.
   - MANDATORY anti-gatekeeping BYPASS LADDER:
       1. no hard fails  2. unlimited retries  3. hint (narrows the band)
       4. contextual skip (with gentle confirm)  5. tunable difficulty.
   - Additive: clearing a gate is one MORE way to unlock, never the only
     way, and it never re-locks anything.

   Pure ES5. No external deps. Web Audio + canvas fully guarded so it
   never throws in a sandboxed preview. Exposes window.SD_RECEIVER.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  if (window.SD_RECEIVER) return; // idempotent

  var CLEARED_KEY = 'sd_gates_cleared';

  /* ── persistence: which story-gates have been cleared ── */
  function getCleared() {
    try { return JSON.parse(localStorage.getItem(CLEARED_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function isCleared(id) {
    if (!id) return false;
    var arr = getCleared();
    for (var i = 0; i < arr.length; i++) { if (arr[i] === id) return true; }
    return false;
  }
  function markCleared(id) {
    if (!id) return;
    var arr = getCleared();
    if (arr.indexOf(id) === -1) { arr.push(id); }
    try { localStorage.setItem(CLEARED_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  /* ── one-time CSS injection ── */
  function injectCSS() {
    if (document.getElementById('sd-receiver-css')) return;
    var css = ''
      + '.sdrx-overlay{position:fixed;inset:0;z-index:9000;display:none;align-items:center;justify-content:center;'
      + 'background:rgba(4,10,16,0.86);backdrop-filter:blur(6px);padding:16px;'
      + 'padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));}'
      + '.sdrx-overlay.on{display:flex;}'
      + '.sdrx-panel{width:100%;max-width:440px;background:linear-gradient(160deg,#0e1620,#0a0f16);'
      + 'border:1px solid rgba(125,211,252,0.25);border-radius:18px;padding:20px 20px 18px;'
      + 'box-shadow:0 24px 80px rgba(0,0,0,0.6),0 0 40px rgba(125,211,252,0.08);color:#e8eef5;'
      + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;'
      + 'max-height:calc(100dvh - 32px);overflow-y:auto;-webkit-overflow-scrolling:touch;}'
      + '.sdrx-head{display:flex;align-items:baseline;gap:10px;margin-bottom:2px;}'
      + '.sdrx-title{font-size:0.7rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#7dd3fc;}'
      + '.sdrx-sub{font-size:0.7rem;color:#7c8a99;margin-bottom:14px;line-height:1.4;}'
      + '.sdrx-target{font-size:0.62rem;color:#94a3b8;letter-spacing:0.5px;margin-bottom:12px;}'
      + '.sdrx-target b{color:#e8eef5;}'
      + '.sdrx-wave{width:100%;height:74px;display:block;background:#060a0f;border:1px solid rgba(255,255,255,0.06);border-radius:10px;}'
      + '.sdrx-meters{display:flex;gap:14px;align-items:flex-end;margin:12px 0 4px;}'
      + '.sdrx-needlewrap{flex:1;height:70px;position:relative;background:radial-gradient(120% 140% at 50% 100%,rgba(125,211,252,0.06),transparent 70%);'
      + 'border:1px solid rgba(255,255,255,0.06);border-radius:10px;overflow:hidden;}'
      + '.sdrx-needle{position:absolute;left:50%;bottom:6px;width:2px;height:56px;background:linear-gradient(#7dd3fc,#38bdf8);'
      + 'transform-origin:bottom center;transform:rotate(0deg);transition:transform .08s linear;box-shadow:0 0 8px rgba(125,211,252,0.7);}'
      + '.sdrx-needle-hub{position:absolute;left:50%;bottom:2px;width:8px;height:8px;margin-left:-4px;border-radius:50%;background:#38bdf8;}'
      + '.sdrx-ticks{position:absolute;inset:0;}'
      + '.sdrx-str{width:64px;}'
      + '.sdrx-str-label{font-size:0.54rem;color:#7c8a99;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;text-align:center;}'
      + '.sdrx-str-bar{height:56px;width:100%;background:rgba(255,255,255,0.05);border-radius:6px;position:relative;overflow:hidden;}'
      + '.sdrx-str-fill{position:absolute;left:0;right:0;bottom:0;height:0%;background:linear-gradient(#f59e0b,#7dd3fc);transition:height .1s linear;}'
      + '.sdrx-str-pct{font-size:0.6rem;color:#e8eef5;text-align:center;margin-top:3px;font-variant-numeric:tabular-nums;}'
      + '.sdrx-dialwrap{margin:14px 0 4px;}'
      + '.sdrx-dial{-webkit-appearance:none;appearance:none;width:100%;height:26px;background:transparent;cursor:pointer;}'
      + '.sdrx-dial:focus{outline:none;}'
      + '.sdrx-dial::-webkit-slider-runnable-track{height:8px;border-radius:5px;'
      + 'background:linear-gradient(90deg,#1e293b,#334155,#1e293b);border:1px solid rgba(255,255,255,0.08);}'
      + '.sdrx-dial::-moz-range-track{height:8px;border-radius:5px;background:#334155;}'
      + '.sdrx-dial::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;margin-top:-8px;border-radius:50%;'
      + 'background:radial-gradient(circle at 35% 30%,#e8eef5,#7dd3fc);border:2px solid #0a0f16;box-shadow:0 0 12px rgba(125,211,252,0.8);}'
      + '.sdrx-dial::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#7dd3fc;border:2px solid #0a0f16;}'
      + '.sdrx-scale{display:flex;justify-content:space-between;font-size:0.55rem;color:#5b6b7a;margin-top:5px;font-variant-numeric:tabular-nums;}'
      + '.sdrx-status{text-align:center;font-size:0.74rem;font-weight:600;margin:12px 0 10px;min-height:18px;color:#94a3b8;}'
      + '.sdrx-status.lock{color:#7dd3fc;}'
      + '.sdrx-integrity{height:4px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;margin-bottom:14px;}'
      + '.sdrx-integrity-fill{height:100%;width:100%;background:linear-gradient(90deg,#7dd3fc,#8b5cf6);transition:width .3s linear;}'
      + '.sdrx-btns{display:flex;gap:8px;flex-wrap:wrap;}'
      + '.sdrx-btn{flex:1;min-width:110px;border:1px solid rgba(255,255,255,0.12);background:#141b24;color:#cbd5e1;'
      + 'padding:12px 10px;border-radius:10px;font-size:0.8rem;font-weight:700;cursor:pointer;transition:all .15s;}'
      + '.sdrx-btn:hover{border-color:#7dd3fc;color:#7dd3fc;}'
      + '.sdrx-btn.primary{background:linear-gradient(120deg,#0ea5e9,#7dd3fc);color:#04212f;border-color:transparent;}'
      + '.sdrx-btn.primary:disabled{opacity:0.4;cursor:not-allowed;background:#1e293b;color:#64748b;}'
      + '.sdrx-btn.ghost{flex:0 0 auto;min-width:0;background:transparent;border-color:transparent;color:#64748b;font-weight:600;font-size:0.72rem;}'
      + '.sdrx-btn.ghost:hover{color:#94a3b8;}'
      + '.sdrx-hint{font-size:0.68rem;color:#fbbf24;text-align:center;margin:8px 0 2px;min-height:14px;line-height:1.4;}'
      + '.sdrx-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:8px;}'
      + '@media(max-width:380px){.sdrx-btn{min-width:90px;font-size:0.74rem;}}';
    var el = document.createElement('style');
    el.id = 'sd-receiver-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ── build the modal DOM once ── */
  var dom = null;
  function buildDOM() {
    if (dom) return dom;
    injectCSS();
    var ov = document.createElement('div');
    ov.className = 'sdrx-overlay';
    ov.innerHTML =
      '<div class="sdrx-panel" role="dialog" aria-label="Receiver Console">'
      + '<div class="sdrx-head"><span class="sdrx-title">\uD83D\uDCFB Receiver Console</span></div>'
      + '<div class="sdrx-sub" id="sdrxSub">Tune the dial until the signal locks. There is no way to fail \u2014 take your time.</div>'
      + '<div class="sdrx-target" id="sdrxTarget"></div>'
      + '<canvas class="sdrx-wave" id="sdrxWave" width="400" height="74"></canvas>'
      + '<div class="sdrx-meters">'
        + '<div class="sdrx-needlewrap"><canvas class="sdrx-ticks" id="sdrxTicks" width="300" height="70"></canvas>'
          + '<div class="sdrx-needle" id="sdrxNeedle"></div><div class="sdrx-needle-hub"></div></div>'
        + '<div class="sdrx-str"><div class="sdrx-str-label">Signal</div>'
          + '<div class="sdrx-str-bar"><div class="sdrx-str-fill" id="sdrxStrFill"></div></div>'
          + '<div class="sdrx-str-pct" id="sdrxStrPct">0%</div></div>'
      + '</div>'
      + '<div class="sdrx-dialwrap">'
        + '<input type="range" class="sdrx-dial" id="sdrxDial" min="0" max="1000" value="500">'
        + '<div class="sdrx-scale"><span>300 MHz</span><span>347</span><span>400 MHz</span></div>'
      + '</div>'
      + '<div class="sdrx-status" id="sdrxStatus">Searching\u2026</div>'
      + '<div class="sdrx-integrity"><div class="sdrx-integrity-fill" id="sdrxIntegrity"></div></div>'
      + '<div class="sdrx-hint" id="sdrxHint"></div>'
      + '<div class="sdrx-btns">'
        + '<button class="sdrx-btn primary" id="sdrxLock" disabled>Lock Signal</button>'
        + '<button class="sdrx-btn" id="sdrxHintBtn">Hint</button>'
      + '</div>'
      + '<div class="sdrx-foot">'
        + '<button class="sdrx-btn ghost" id="sdrxCancel">\u2190 Not now</button>'
        + '<button class="sdrx-btn ghost" id="sdrxSkip">Override &amp; declassify \u2192</button>'
      + '</div>'
      + '</div>';
    document.body.appendChild(ov);
    dom = {
      ov: ov,
      sub: ov.querySelector('#sdrxSub'),
      target: ov.querySelector('#sdrxTarget'),
      wave: ov.querySelector('#sdrxWave'),
      ticks: ov.querySelector('#sdrxTicks'),
      needle: ov.querySelector('#sdrxNeedle'),
      strFill: ov.querySelector('#sdrxStrFill'),
      strPct: ov.querySelector('#sdrxStrPct'),
      dial: ov.querySelector('#sdrxDial'),
      status: ov.querySelector('#sdrxStatus'),
      integrity: ov.querySelector('#sdrxIntegrity'),
      hint: ov.querySelector('#sdrxHint'),
      lock: ov.querySelector('#sdrxLock'),
      hintBtn: ov.querySelector('#sdrxHintBtn'),
      cancel: ov.querySelector('#sdrxCancel'),
      skip: ov.querySelector('#sdrxSkip')
    };
    drawTicks();
    return dom;
  }

  function drawTicks() {
    try {
      var c = dom.ticks, ctx = c.getContext('2d');
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      for (var i = 0; i <= 20; i++) {
        var x = (i / 20) * c.width;
        var tall = (i % 5 === 0);
        ctx.lineWidth = tall ? 1.4 : 0.7;
        ctx.beginPath();
        ctx.moveTo(x, 4);
        ctx.lineTo(x, tall ? 16 : 10);
        ctx.stroke();
      }
    } catch (e) {}
  }

  /* ── audio (fully guarded) ── */
  var audioCtx = null, osc = null, gain = null, noiseNode = null, noiseGain = null;
  function startAudio() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === 'suspended') { try { audioCtx.resume(); } catch (e) {} }
      osc = audioCtx.createOscillator();
      gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 220;
      gain.gain.value = 0.0001;
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start();
    } catch (e) { osc = null; }
  }
  function updateAudio(prox) {
    // prox 0..1 (1 = locked on). Tone rises + clarifies as you approach.
    try {
      if (!osc || !audioCtx) return;
      var t = audioCtx.currentTime;
      osc.frequency.setTargetAtTime(220 + prox * prox * 500, t, 0.05);
      gain.gain.setTargetAtTime(0.02 + prox * 0.06, t, 0.05);
    } catch (e) {}
  }
  function stopAudio() {
    try { if (osc) { osc.stop(); osc.disconnect(); } } catch (e) {}
    osc = null;
  }

  /* ── active game state ── */
  var game = null;

  function proximity(state) {
    // returns 0..1 based on |dial - target| vs tolerance band
    var d = Math.abs(state.dial - state.target);
    var span = state.tol;             // full-strength within tol
    if (d >= span * 6) return 0;
    var p = 1 - (d / (span * 6));
    // sharpen near the top so "locking" feels precise
    return Math.max(0, Math.min(1, p * p));
  }

  function drawWave(state, prox) {
    try {
      var c = dom.wave, ctx = c.getContext('2d'), W = c.width, H = c.height, mid = H / 2;
      ctx.clearRect(0, 0, W, H);
      var clarity = prox;                 // 0 = pure noise, 1 = clean sine
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = clarity > 0.6 ? '#7dd3fc' : (clarity > 0.25 ? '#38bdf8' : '#475569');
      ctx.beginPath();
      state.phase = (state.phase || 0) + 0.15;
      for (var x = 0; x <= W; x += 2) {
        var sine = Math.sin((x / W) * Math.PI * 10 + state.phase) * (H * 0.32) * clarity;
        var noise = (Math.random() - 0.5) * (H * 0.7) * (1 - clarity);
        var y = mid + sine + noise;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    } catch (e) {}
  }

  function tick() {
    if (!game || !game.running) return;
    var state = game;
    var prox = proximity(state);

    // needle: -45deg (far low) .. +45deg (far high), 0 at target
    var signed = (state.dial - state.target);
    var norm = Math.max(-1, Math.min(1, signed / (state.tol * 6)));
    dom.needle.style.transform = 'rotate(' + (norm * 45) + 'deg)';

    var pct = Math.round(prox * 100);
    dom.strFill.style.height = pct + '%';
    dom.strPct.textContent = pct + '%';
    drawWave(state, prox);
    updateAudio(prox);

    var locked = prox >= 0.9;
    dom.lock.disabled = !locked;
    if (locked) {
      dom.status.textContent = '\u25C9 SIGNAL LOCKED \u2014 press Lock';
      dom.status.className = 'sdrx-status lock';
    } else if (prox > 0.5) {
      dom.status.textContent = 'Signal strengthening\u2026';
      dom.status.className = 'sdrx-status';
    } else if (prox > 0.15) {
      dom.status.textContent = 'Faint carrier detected\u2026';
      dom.status.className = 'sdrx-status';
    } else {
      dom.status.textContent = 'Searching\u2026';
      dom.status.className = 'sdrx-status';
    }

    // Signal Integrity: a SOFT, decaying meter. It NEVER fails the game.
    // It only decays while you're far off, and surfaces the hint when low.
    if (!locked) {
      state.integrity -= (prox < 0.3 ? 0.055 : 0.02);
      if (state.integrity < 0) state.integrity = 0;
    } else {
      state.integrity = Math.min(100, state.integrity + 0.5);
    }
    dom.integrity.style.width = state.integrity + '%';
    // auto-help when integrity bottoms out (bypass ladder rung 3)
    if (state.integrity <= 0 && !state.hintShown) { showHint(); }

    game.raf = requestAnimationFrame(tick);
  }

  function showHint() {
    if (!game) return;
    game.hintShown = true;
    var dir = (game.dial < game.target) ? 'RIGHT (higher)' : 'LEFT (lower)';
    // also narrow the visible band by nudging tolerance up a touch (easier lock)
    game.tol = Math.min(game.tol * 1.5, 90);
    dom.hint.textContent = '\uD83D\uDCA1 Turn the dial ' + dir + '. The lock window just widened.';
  }

  function endGame() {
    if (game) { game.running = false; if (game.raf) cancelAnimationFrame(game.raf); }
    stopAudio();
  }

  function close() {
    endGame();
    if (dom) dom.ov.classList.remove('on');
  }

  function success() {
    var opts = game ? game.opts : {};
    if (opts.storyId) markCleared(opts.storyId);
    // celebratory flash
    dom.status.textContent = '\u2713 TRANSMISSION DECLASSIFIED';
    dom.status.className = 'sdrx-status lock';
    endGame();
    setTimeout(function () {
      close();
      if (opts.onSuccess) { try { opts.onSuccess(); } catch (e) {} }
    }, 650);
  }

  function doSkip() {
    // Bypass ladder rung 4: contextual skip WITH gentle confirm.
    var opts = game ? game.opts : {};
    if (!game.skipArmed) {
      game.skipArmed = true;
      dom.skip.textContent = 'Sure? Tap again to override \u2192';
      setTimeout(function () {
        if (game) { game.skipArmed = false; dom.skip.innerHTML = 'Override &amp; declassify \u2192'; }
      }, 3000);
      return;
    }
    if (opts.storyId) markCleared(opts.storyId); // skip still counts as cleared
    endGame();
    close();
    if (opts.onSuccess) { try { opts.onSuccess(); } catch (e) {} } // treat as unlocked
  }

  /* ── public: open the console for a given entry ──
     opts = { storyId, title, difficulty (0..1, higher=easier), onSuccess, onCancel } */
  function open(opts) {
    opts = opts || {};
    buildDOM();
    // difficulty -> tolerance width. default medium. higher difficulty value = easier.
    var diff = (typeof opts.difficulty === 'number') ? opts.difficulty : 0.5;
    var tol = 14 + diff * 26;          // 14 (hard) .. 40 (easy) dial-units
    var target = 120 + Math.floor(Math.random() * 760); // hidden target in 0..1000 band
    game = {
      running: true, opts: opts, target: target, tol: tol,
      dial: 500, integrity: 100, hintShown: false, skipArmed: false, phase: 0, raf: null
    };
    dom.dial.value = 500;
    dom.hint.textContent = '';
    dom.skip.innerHTML = 'Override &amp; declassify \u2192';
    dom.target.innerHTML = 'Target transmission: <b>' + (opts.title ? esc(opts.title) : 'CLASSIFIED') + '</b>';
    dom.sub.textContent = 'Tune the dial until the signal locks. There is no way to fail \u2014 take your time. Hint and Override are always available.';
    dom.status.textContent = 'Searching\u2026';
    dom.status.className = 'sdrx-status';
    dom.ov.classList.add('on');

    // wire controls (rebind each open; simplest + safe)
    dom.dial.oninput = function () { if (game) game.dial = parseInt(this.value, 10) || 0; };
    dom.lock.onclick = function () { if (game && proximity(game) >= 0.9) success(); };
    dom.hintBtn.onclick = function () { showHint(); };
    dom.cancel.onclick = function () { close(); if (opts.onCancel) { try { opts.onCancel(); } catch (e) {} } };
    dom.skip.onclick = function () { doSkip(); };

    startAudio();
    endGamePrev();
    game.running = true;
    game.raf = requestAnimationFrame(tick);
  }
  function endGamePrev() { /* ensure only one loop */ }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ── automatic difficulty by tier depth ──
     Deeper signals (higher research-level req) are fainter and harder to
     catch — thematically, a 2.6-billion-year-old carrier is harder to tune
     than a 2023 one. Returns a difficulty value 0..1 where HIGHER = EASIER
     (wider lock window). The bypass ladder still self-eases anyone who
     struggles, so a harder baseline never means "stuck". */
  function difficultyForTier(req) {
    var r = (typeof req === 'number' && req > 0) ? req : 30;
    // req ~2 (modern) -> ~0.85 easy ; req ~70 (deep past) -> ~0.28 hard
    var d = 0.9 - (r / 70) * 0.62;
    if (d < 0.28) d = 0.28;   // floor: never impossibly tight
    if (d > 0.85) d = 0.85;   // ceiling: always a little skill required
    return d;
  }

  window.SD_RECEIVER = {
    open: open,
    difficultyForTier: difficultyForTier,
    isCleared: isCleared,
    markCleared: markCleared,
    close: close,
    _proximity: proximity   // exposed for load-testing
  };
})();
