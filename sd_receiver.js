/* ══════════════════════════════════════════════════════════════════
   SIGNAL DECAY — THE RECEIVER CONSOLE  (sd_receiver.js) — v2
   The engagement-verified unlock gate, now with FOUR gate types that
   escalate by tier depth (Splinter-Cell / Abe / Tomb-Raider feel):

     1. SINGLE     — find one sweet spot, lock it (tutorial tier)
     2. MULTIPIN   — lock N harmonics IN SEQUENCE (tumbler / lockpick)
     3. SEQUENCE   — console plays a tone pattern; repeat it (Simon/chant)
     4. CONSTELLATION — connect star-points in order (spatial decode)

   ONE core mechanic (tune a frequency); the rest are variations.
   Difficulty is AUTOMATIC by tier (gateForTier) — no player slider.

   MANDATORY anti-gatekeeping BYPASS LADDER (every type):
     • no hard fails  • FAILURE WIDENS THE WINDOW (persistence always wins)
     • hint  • contextual Override (2-tap)  • auto-difficulty by tier
   Additive: clearing a gate is one MORE way to unlock, never the only
   way; never re-locks anything. Pure ES5, guarded audio/canvas, exposes
   window.SD_RECEIVER with the SAME public API as v1.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  if (window.SD_RECEIVER) return;

  var CLEARED_KEY = 'sd_gates_cleared';

  /* ── persistence ── */
  function getCleared() { try { return JSON.parse(localStorage.getItem(CLEARED_KEY) || '[]'); } catch (e) { return []; } }
  function isCleared(id) { if (!id) return false; var a = getCleared(); for (var i = 0; i < a.length; i++) { if (a[i] === id) return true; } return false; }
  function markCleared(id) { if (!id) return; var a = getCleared(); if (a.indexOf(id) === -1) a.push(id); try { localStorage.setItem(CLEARED_KEY, JSON.stringify(a)); } catch (e) {} }

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function vibrate(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

  /* ── CSS (superset of v1 + pin indicators + constellation canvas) ── */
  function injectCSS() {
    if (document.getElementById('sd-receiver-css')) return;
    var css = ''
      + '.sdrx-overlay{position:fixed;inset:0;z-index:9000;display:none;align-items:center;justify-content:center;background:rgba(4,10,16,0.86);backdrop-filter:blur(6px);padding:16px;padding-top:max(16px,env(safe-area-inset-top));padding-bottom:max(16px,env(safe-area-inset-bottom));}'
      + '.sdrx-overlay.on{display:flex;}'
      + '.sdrx-panel{width:100%;max-width:460px;background:linear-gradient(160deg,#0e1620,#0a0f16);border:1px solid rgba(125,211,252,0.25);border-radius:18px;padding:20px 20px 18px;box-shadow:0 24px 80px rgba(0,0,0,0.6),0 0 40px rgba(125,211,252,0.08);color:#e8eef5;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;max-height:calc(100dvh - 32px);overflow-y:auto;-webkit-overflow-scrolling:touch;}'
      + '.sdrx-head{display:flex;align-items:baseline;gap:10px;margin-bottom:2px;}'
      + '.sdrx-title{font-size:0.7rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#7dd3fc;}'
      + '.sdrx-mode{margin-left:auto;font-size:0.56rem;font-weight:700;letter-spacing:1px;color:#5b6b7a;text-transform:uppercase;}'
      + '.sdrx-sub{font-size:0.7rem;color:#7c8a99;margin-bottom:12px;line-height:1.4;}'
      + '.sdrx-target{font-size:0.62rem;color:#94a3b8;letter-spacing:0.5px;margin-bottom:10px;}'
      + '.sdrx-target b{color:#e8eef5;}'
      + '.sdrx-pins{display:flex;gap:6px;margin:0 0 10px;}'
      + '.sdrx-pin{flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,0.08);transition:background .2s,box-shadow .2s;}'
      + '.sdrx-pin.seated{background:linear-gradient(90deg,#7dd3fc,#38bdf8);box-shadow:0 0 8px rgba(125,211,252,0.7);}'
      + '.sdrx-pin.active{background:rgba(245,158,11,0.5);}'
      + '.sdrx-wave{width:100%;height:74px;display:block;background:#060a0f;border:1px solid rgba(255,255,255,0.06);border-radius:10px;}'
      + '.sdrx-constel{width:100%;height:220px;display:block;background:#060a0f;border:1px solid rgba(255,255,255,0.06);border-radius:10px;touch-action:none;}'
      + '.sdrx-meters{display:flex;gap:14px;align-items:flex-end;margin:12px 0 4px;}'
      + '.sdrx-needlewrap{flex:1;height:70px;position:relative;background:radial-gradient(120% 140% at 50% 100%,rgba(125,211,252,0.06),transparent 70%);border:1px solid rgba(255,255,255,0.06);border-radius:10px;overflow:hidden;}'
      + '.sdrx-needle{position:absolute;left:50%;bottom:6px;width:2px;height:56px;background:linear-gradient(#7dd3fc,#38bdf8);transform-origin:bottom center;transform:rotate(0deg);transition:transform .08s linear;box-shadow:0 0 8px rgba(125,211,252,0.7);}'
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
      + '.sdrx-dial::-webkit-slider-runnable-track{height:8px;border-radius:5px;background:linear-gradient(90deg,#1e293b,#334155,#1e293b);border:1px solid rgba(255,255,255,0.08);}'
      + '.sdrx-dial::-moz-range-track{height:8px;border-radius:5px;background:#334155;}'
      + '.sdrx-dial::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;margin-top:-8px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#e8eef5,#7dd3fc);border:2px solid #0a0f16;box-shadow:0 0 12px rgba(125,211,252,0.8);}'
      + '.sdrx-dial::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#7dd3fc;border:2px solid #0a0f16;}'
      + '.sdrx-scale{display:flex;justify-content:space-between;font-size:0.55rem;color:#5b6b7a;margin-top:5px;font-variant-numeric:tabular-nums;}'
      + '.sdrx-status{text-align:center;font-size:0.74rem;font-weight:600;margin:12px 0 10px;min-height:18px;color:#94a3b8;}'
      + '.sdrx-status.lock{color:#7dd3fc;}'
      + '.sdrx-integrity{height:4px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden;margin-bottom:14px;}'
      + '.sdrx-integrity-fill{height:100%;width:100%;background:linear-gradient(90deg,#7dd3fc,#8b5cf6);transition:width .3s linear;}'
      + '.sdrx-btns{display:flex;gap:8px;flex-wrap:wrap;}'
      + '.sdrx-btn{flex:1;min-width:104px;border:1px solid rgba(255,255,255,0.12);background:#141b24;color:#cbd5e1;padding:12px 10px;border-radius:10px;font-size:0.8rem;font-weight:700;cursor:pointer;transition:all .15s;}'
      + '.sdrx-btn:hover{border-color:#7dd3fc;color:#7dd3fc;}'
      + '.sdrx-btn.primary{background:linear-gradient(120deg,#0ea5e9,#7dd3fc);color:#04212f;border-color:transparent;}'
      + '.sdrx-btn.primary:disabled{opacity:0.4;cursor:not-allowed;background:#1e293b;color:#64748b;}'
      + '.sdrx-btn.ghost{flex:0 0 auto;min-width:0;background:transparent;border-color:transparent;color:#64748b;font-weight:600;font-size:0.72rem;}'
      + '.sdrx-btn.ghost:hover{color:#94a3b8;}'
      + '.sdrx-hint{font-size:0.68rem;color:#fbbf24;text-align:center;margin:8px 0 2px;min-height:14px;line-height:1.4;}'
      + '.sdrx-foot{display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:8px;}'
      + '.sdrx-hide{display:none !important;}'
      + '@media(max-width:380px){.sdrx-btn{min-width:88px;font-size:0.74rem;}}';
    var el = document.createElement('style'); el.id = 'sd-receiver-css'; el.textContent = css;
    document.head.appendChild(el);
  }

  /* ── DOM ── */
  var dom = null;
  function buildDOM() {
    if (dom) return dom;
    injectCSS();
    var ov = document.createElement('div');
    ov.className = 'sdrx-overlay';
    ov.innerHTML =
      '<div class="sdrx-panel" role="dialog" aria-label="Receiver Console">'
      + '<div class="sdrx-head"><span class="sdrx-title">\uD83D\uDCFB Receiver Console</span><span class="sdrx-mode" id="sdrxMode"></span></div>'
      + '<div class="sdrx-sub" id="sdrxSub"></div>'
      + '<div class="sdrx-target" id="sdrxTarget"></div>'
      + '<div class="sdrx-pins sdrx-hide" id="sdrxPins"></div>'
      + '<canvas class="sdrx-wave" id="sdrxWave" width="420" height="74"></canvas>'
      + '<canvas class="sdrx-constel sdrx-hide" id="sdrxConstel" width="420" height="220"></canvas>'
      + '<div class="sdrx-meters" id="sdrxMeters">'
        + '<div class="sdrx-needlewrap"><canvas class="sdrx-ticks" id="sdrxTicks" width="300" height="70"></canvas><div class="sdrx-needle" id="sdrxNeedle"></div><div class="sdrx-needle-hub"></div></div>'
        + '<div class="sdrx-str"><div class="sdrx-str-label">Signal</div><div class="sdrx-str-bar"><div class="sdrx-str-fill" id="sdrxStrFill"></div></div><div class="sdrx-str-pct" id="sdrxStrPct">0%</div></div>'
      + '</div>'
      + '<div class="sdrx-dialwrap" id="sdrxDialWrap"><input type="range" class="sdrx-dial" id="sdrxDial" min="0" max="1000" value="500"><div class="sdrx-scale"><span>300 MHz</span><span>347</span><span>400 MHz</span></div></div>'
      + '<div class="sdrx-status" id="sdrxStatus">Searching\u2026</div>'
      + '<div class="sdrx-integrity"><div class="sdrx-integrity-fill" id="sdrxIntegrity"></div></div>'
      + '<div class="sdrx-hint" id="sdrxHint"></div>'
      + '<div class="sdrx-btns">'
        + '<button class="sdrx-btn primary" id="sdrxLock" disabled>Lock Signal</button>'
        + '<button class="sdrx-btn" id="sdrxHintBtn">Hint</button>'
        + '<button class="sdrx-btn sdrx-hide" id="sdrxReplay">\u25B6 Replay</button>'
      + '</div>'
      + '<div class="sdrx-foot">'
        + '<button class="sdrx-btn ghost" id="sdrxCancel">\u2190 Not now</button>'
        + '<button class="sdrx-btn ghost" id="sdrxSkip">Override &amp; declassify \u2192</button>'
      + '</div>'
      + '</div>';
    document.body.appendChild(ov);
    dom = {
      ov: ov, mode: ov.querySelector('#sdrxMode'), sub: ov.querySelector('#sdrxSub'), target: ov.querySelector('#sdrxTarget'),
      pins: ov.querySelector('#sdrxPins'), wave: ov.querySelector('#sdrxWave'), constel: ov.querySelector('#sdrxConstel'),
      meters: ov.querySelector('#sdrxMeters'), ticks: ov.querySelector('#sdrxTicks'), needle: ov.querySelector('#sdrxNeedle'),
      strFill: ov.querySelector('#sdrxStrFill'), strPct: ov.querySelector('#sdrxStrPct'),
      dialWrap: ov.querySelector('#sdrxDialWrap'), dial: ov.querySelector('#sdrxDial'),
      status: ov.querySelector('#sdrxStatus'), integrity: ov.querySelector('#sdrxIntegrity'), hint: ov.querySelector('#sdrxHint'),
      lock: ov.querySelector('#sdrxLock'), hintBtn: ov.querySelector('#sdrxHintBtn'), replay: ov.querySelector('#sdrxReplay'),
      cancel: ov.querySelector('#sdrxCancel'), skip: ov.querySelector('#sdrxSkip')
    };
    drawTicks();
    return dom;
  }
  function drawTicks() {
    try { var c = dom.ticks, ctx = c.getContext('2d'); ctx.clearRect(0, 0, c.width, c.height); ctx.strokeStyle = 'rgba(148,163,184,0.35)';
      for (var i = 0; i <= 20; i++) { var x = (i / 20) * c.width; var tall = (i % 5 === 0); ctx.lineWidth = tall ? 1.4 : 0.7; ctx.beginPath(); ctx.moveTo(x, 4); ctx.lineTo(x, tall ? 16 : 10); ctx.stroke(); }
    } catch (e) {}
  }

  /* ── audio (guarded) ── */
  var audioCtx = null, osc = null, gain = null;
  function ensureCtx() { try { var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; if (!audioCtx) audioCtx = new AC(); if (audioCtx.state === 'suspended') { try { audioCtx.resume(); } catch (e) {} } return audioCtx; } catch (e) { return null; } }
  function startAudio() { try { var ac = ensureCtx(); if (!ac) return; osc = ac.createOscillator(); gain = ac.createGain(); osc.type = 'sine'; osc.frequency.value = 220; gain.gain.value = 0.0001; osc.connect(gain); gain.connect(ac.destination); osc.start(); } catch (e) { osc = null; } }
  function updateAudio(prox) { try { if (!osc || !audioCtx) return; var t = audioCtx.currentTime; osc.frequency.setTargetAtTime(220 + prox * prox * 500, t, 0.05); gain.gain.setTargetAtTime(0.015 + prox * 0.05, t, 0.05); } catch (e) {} }
  function stopAudio() { try { if (osc) { osc.stop(); osc.disconnect(); } } catch (e) {} osc = null; }
  /* one-shot blip (seat chime / sequence playback) */
  function blip(freqHz, when, dur, vol) {
    try { var ac = ensureCtx(); if (!ac) return; var o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; o.frequency.value = freqHz;
      var t0 = ac.currentTime + (when || 0); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || 0.09, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + (dur || 0.22));
      o.connect(g); g.connect(ac.destination); o.start(t0); o.stop(t0 + (dur || 0.22) + 0.02); } catch (e) {}
  }

  /* ── shared proximity: 0..1 from |dial-target| vs tol ── */
  function proxTo(dial, target, tol) { var d = Math.abs(dial - target); if (d >= tol * 6) return 0; var p = 1 - (d / (tol * 6)); return Math.max(0, Math.min(1, p * p)); }
  /* back-compat single-lock proximity used by load tests + SINGLE type */
  function proximity(state) { return proxTo(state.dial, state.target, state.tol); }

  function randTarget() { return 120 + Math.floor(Math.random() * 760); }

  /* ── automatic gate selection by tier ──
     Returns { type, tol, pins, steps }. Higher req = deeper = harder:
     tighter tol, more pins/steps, and harder TYPES. */
  function difficultyForTier(req) {
    var r = (typeof req === 'number' && req > 0) ? req : 30;
    var d = 0.9 - (r / 70) * 0.62; if (d < 0.28) d = 0.28; if (d > 0.85) d = 0.85; return d; // legacy 0..1 (kept for API/back-compat)
  }
  function gateForTier(req) {
    var r = (typeof req === 'number' && req > 0) ? req : 30;
    var diff = difficultyForTier(r);
    var tol = 14 + diff * 26;               // 14 (hard) .. 40 (easy) dial-units
    if (r <= 15)      return { type: 'single', tol: tol, pins: 1, steps: 0 };
    if (r <= 34)      return { type: 'multipin', tol: tol, pins: 2, steps: 0 };
    if (r <= 47)      return { type: (r % 2 ? 'sequence' : 'multipin'), tol: tol, pins: 3, steps: 3 };
    if (r <= 62)      return { type: 'constellation', tol: tol, pins: 4, steps: 4 };
    return { type: 'constellation', tol: Math.max(12, tol - 4), pins: 5, steps: 5 };
  }

  /* ── active game ── */
  var game = null;

  /* draw the tuning waveform (used by single + multipin + sequence-input) */
  function drawWave(prox) {
    try { var c = dom.wave, ctx = c.getContext('2d'), W = c.width, H = c.height, mid = H / 2;
      ctx.clearRect(0, 0, W, H); var clarity = prox; ctx.lineWidth = 1.6;
      ctx.strokeStyle = clarity > 0.6 ? '#7dd3fc' : (clarity > 0.25 ? '#38bdf8' : '#475569'); ctx.beginPath();
      game.phase = (game.phase || 0) + 0.15;
      for (var x = 0; x <= W; x += 2) { var sine = Math.sin((x / W) * Math.PI * 10 + game.phase) * (H * 0.32) * clarity; var noise = (Math.random() - 0.5) * (H * 0.7) * (1 - clarity); var y = mid + sine + noise; if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke();
    } catch (e) {}
  }

  function setPins(n, seated, activeIdx) {
    if (!n) { dom.pins.className = 'sdrx-pins sdrx-hide'; return; }
    dom.pins.className = 'sdrx-pins';
    var h = '';
    for (var i = 0; i < n; i++) { var cls = 'sdrx-pin' + (i < seated ? ' seated' : (i === activeIdx ? ' active' : '')); h += '<div class="' + cls + '"></div>'; }
    dom.pins.innerHTML = h;
  }

  /* current proximity to the ACTIVE target (depends on type) */
  function activeProx() {
    if (!game) return 0;
    if (game.type === 'multipin') return proxTo(game.dial, game.targets[game.seated], game.tol);
    if (game.type === 'sequence') { if (game.phaseMode !== 'input') return 0; return proxTo(game.dial, game.targets[game.inputIdx], game.tol); }
    return proxTo(game.dial, game.target, game.tol); // single
  }

  /* ── the loop ── */
  function tick() {
    if (!game || !game.running) return;

    if (game.type === 'constellation') { drawConstellation(); game.raf = requestAnimationFrame(tick); return; }

    var prox = activeProx();

    // needle points to active target
    var tgt = (game.type === 'multipin') ? game.targets[game.seated]
            : (game.type === 'sequence' && game.phaseMode === 'input') ? game.targets[game.inputIdx]
            : game.target;
    if (typeof tgt === 'number') { var norm = Math.max(-1, Math.min(1, (game.dial - tgt) / (game.tol * 6))); dom.needle.style.transform = 'rotate(' + (norm * 45) + 'deg)'; }

    var pct = Math.round(prox * 100);
    dom.strFill.style.height = pct + '%'; dom.strPct.textContent = pct + '%';
    drawWave(prox); updateAudio(prox);

    var canLock = false, statusTxt = 'Searching\u2026', statusLock = false;

    if (game.type === 'single') {
      canLock = prox >= 0.9;
      statusTxt = canLock ? '\u25C9 SIGNAL LOCKED \u2014 press Lock' : (prox > 0.5 ? 'Signal strengthening\u2026' : (prox > 0.15 ? 'Faint carrier\u2026' : 'Searching\u2026'));
      statusLock = canLock;
    } else if (game.type === 'multipin') {
      // hold near a pin to seat it; dwell timer
      if (prox >= 0.9) { game.dwell = (game.dwell || 0) + 1; }
      else { game.dwell = 0; }
      var need = 26; // ~ frames to seat
      if (game.dwell >= need) { seatPin(); }
      setPins(game.pins, game.seated, game.seated);
      statusTxt = game.seated >= game.pins ? '\u25C9 ALL PINS SEATED \u2014 press Lock'
                : (prox >= 0.9 ? 'Holding pin ' + (game.seated + 1) + '\u2026 (' + Math.min(100, Math.round(game.dwell / need * 100)) + '%)'
                : (prox > 0.4 ? 'Close to pin ' + (game.seated + 1) + '\u2026' : 'Seeking pin ' + (game.seated + 1) + ' of ' + game.pins + '\u2026'));
      statusLock = game.seated >= game.pins;
      canLock = statusLock;
    } else if (game.type === 'sequence') {
      if (game.phaseMode === 'play') { statusTxt = 'Listen\u2026 (' + (game.playIdx + 1) + '/' + game.seq.length + ')'; }
      else if (game.phaseMode === 'input') {
        if (prox >= 0.9) { game.dwell = (game.dwell || 0) + 1; } else { game.dwell = 0; }
        if (game.dwell >= 20) { matchStep(); }
        setPins(game.seq.length, game.inputIdx, game.inputIdx);
        statusTxt = prox >= 0.9 ? 'Matching tone ' + (game.inputIdx + 1) + '\u2026' : 'Repeat tone ' + (game.inputIdx + 1) + ' of ' + game.seq.length + '\u2026';
        statusLock = false;
      } else if (game.phaseMode === 'done') { statusTxt = '\u25C9 SEQUENCE MATCHED \u2014 press Lock'; statusLock = true; canLock = true; }
    }

    dom.lock.disabled = !canLock;
    dom.status.textContent = statusTxt;
    dom.status.className = 'sdrx-status' + (statusLock ? ' lock' : '');

    // Signal Integrity — soft, never fails. Decays when far; surfaces hint at 0.
    var near = prox >= 0.4 || (game.type === 'sequence' && game.phaseMode === 'play');
    game.integrity += near ? 0.2 : -0.045; if (game.integrity < 0) game.integrity = 0; if (game.integrity > 100) game.integrity = 100;
    dom.integrity.style.width = game.integrity + '%';
    if (game.integrity <= 0 && !game.hintShown) showHint();

    game.raf = requestAnimationFrame(tick);
  }

  /* seat a pin in MULTIPIN (satisfying) + FAILURE-WIDENS handled by slip elsewhere */
  function seatPin() {
    game.dwell = 0;
    game.seated++;
    blip(520 + game.seated * 90, 0, 0.18, 0.1); vibrate(18);
    if (game.seated < game.pins) { game.targets[game.seated] = randTarget(); }  // next pin, new spot
  }
  /* SEQUENCE: match current input step */
  function matchStep() {
    game.dwell = 0;
    blip(440 + game.inputIdx * 70, 0, 0.16, 0.1); vibrate(14);
    game.inputIdx++;
    if (game.inputIdx >= game.seq.length) { game.phaseMode = 'done'; }
  }

  /* ── SEQUENCE playback ── */
  function playSequence() {
    game.phaseMode = 'play'; game.playIdx = 0;
    var i = 0;
    function step() {
      if (!game || game.type !== 'sequence' || game.phaseMode !== 'play') return;
      if (i >= game.seq.length) { game.phaseMode = 'input'; game.inputIdx = 0; game.dwell = 0; return; }
      game.playIdx = i;
      blip(300 + game.seq[i] * 0.6, 0, 0.34, 0.12);
      i++;
      game._seqTimer = setTimeout(step, 520);
    }
    step();
  }

  /* ── CONSTELLATION ──
     Star points scattered; connect in the numbered order by tapping.
     Wrong tap = soft buzz, no penalty (failure-widens: after N wrong taps,
     the next correct star pulses brighter as a built-in hint). */
  function initConstellation() {
    var n = game.pins; // reuse pins count as star count (4..5)
    game.stars = []; game.next = 0; game.wrong = 0;
    var W = 420, H = 220, pad = 34;
    for (var i = 0; i < n; i++) {
      game.stars.push({ x: pad + Math.random() * (W - 2 * pad), y: pad + Math.random() * (H - 2 * pad), order: i });
    }
    // shuffle draw order irrelevant; order field defines correct sequence
    dom.constel.className = 'sdrx-constel';
    dom.wave.className = 'sdrx-wave sdrx-hide';
    dom.meters.className = 'sdrx-meters sdrx-hide';
    dom.dialWrap.className = 'sdrx-dialwrap sdrx-hide';
    setPins(0);
    // pointer handler
    dom.constel.onpointerdown = function (ev) { constelTap(ev); };
  }
  function constelXY(ev) {
    var r = dom.constel.getBoundingClientRect();
    var sx = dom.constel.width / r.width, sy = dom.constel.height / r.height;
    return { x: (ev.clientX - r.left) * sx, y: (ev.clientY - r.top) * sy };
  }
  function constelTap(ev) {
    if (!game || game.type !== 'constellation') return;
    var p = constelXY(ev), best = -1, bestD = 1e9;
    for (var i = 0; i < game.stars.length; i++) { var s = game.stars[i]; var dx = s.x - p.x, dy = s.y - p.y, dd = dx * dx + dy * dy; if (dd < bestD) { bestD = dd; best = i; } }
    if (bestD > 40 * 40) return; // missed all
    if (game.stars[best].order === game.next) {
      blip(500 + game.next * 80, 0, 0.18, 0.1); vibrate(16);
      game.next++;
      if (game.next >= game.stars.length) { game.phaseMode = 'done'; dom.lock.disabled = false; dom.status.textContent = '\u25C9 CONSTELLATION TRACED \u2014 press Lock'; dom.status.className = 'sdrx-status lock'; }
    } else {
      blip(150, 0, 0.14, 0.06); vibrate(8); game.wrong++;
      dom.status.textContent = 'Not that one \u2014 follow the numbers.';
    }
  }
  function drawConstellation() {
    try {
      var c = dom.constel, ctx = c.getContext('2d'), W = c.width, H = c.height;
      ctx.clearRect(0, 0, W, H);
      // drawn connections so far
      ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 2; ctx.beginPath();
      var drawn = [];
      for (var o = 0; o < game.next; o++) { for (var i = 0; i < game.stars.length; i++) { if (game.stars[i].order === o) drawn.push(game.stars[i]); } }
      for (var k = 0; k < drawn.length; k++) { if (k === 0) ctx.moveTo(drawn[k].x, drawn[k].y); else ctx.lineTo(drawn[k].x, drawn[k].y); }
      if (drawn.length) ctx.stroke();
      // stars
      game.phase = (game.phase || 0) + 0.05;
      for (var s = 0; s < game.stars.length; s++) {
        var st = game.stars[s], done = st.order < game.next, isNext = st.order === game.next;
        var pulse = isNext ? (2 + Math.sin(game.phase * 3) * 1.5 + (game.wrong >= 3 ? 3 : 0)) : 0;
        ctx.beginPath(); ctx.arc(st.x, st.y, 7 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = done ? '#7dd3fc' : (isNext ? '#fcd34d' : '#334155'); ctx.fill();
        ctx.fillStyle = done ? '#04212f' : '#e8eef5'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(String(st.order + 1), st.x, st.y);
      }
    } catch (e) {}
  }

  function showHint() {
    if (!game) return;
    game.hintShown = true;
    // FAILURE-WIDENS + directional hint, per type
    if (game.type === 'constellation') {
      dom.hint.textContent = '\uD83D\uDCA1 Follow the numbers in order. The next star is pulsing brighter.';
      game.wrong = Math.max(game.wrong, 3);
      return;
    }
    game.tol = Math.min(game.tol * 1.6, 95); // widen the window (persistence path)
    var tgt = (game.type === 'multipin') ? game.targets[game.seated] : (game.type === 'sequence' && game.phaseMode === 'input' ? game.targets[game.inputIdx] : game.target);
    var dir = (typeof tgt === 'number' && game.dial < tgt) ? 'RIGHT (higher)' : 'LEFT (lower)';
    dom.hint.textContent = '\uD83D\uDCA1 Turn the dial ' + dir + '. The lock window just widened.';
    game.hintShown = false; // allow the auto-hint to fire again if they stall again (keeps widening)
  }

  function endGame() { if (game) { game.running = false; if (game.raf) cancelAnimationFrame(game.raf); if (game._seqTimer) clearTimeout(game._seqTimer); } stopAudio(); }
  function close() { endGame(); if (dom) dom.ov.classList.remove('on'); }
  function success() {
    var opts = game ? game.opts : {};
    if (opts.storyId) markCleared(opts.storyId);
    blip(660, 0, 0.5, 0.12); blip(990, 0.08, 0.5, 0.08); vibrate([20, 40, 30]);
    dom.status.textContent = '\u2713 TRANSMISSION DECLASSIFIED'; dom.status.className = 'sdrx-status lock';
    endGame();
    setTimeout(function () { close(); if (opts.onSuccess) { try { opts.onSuccess(); } catch (e) {} } }, 650);
  }
  function doSkip() {
    var opts = game ? game.opts : {};
    if (!game.skipArmed) { game.skipArmed = true; dom.skip.textContent = 'Sure? Tap again to override \u2192'; setTimeout(function () { if (game) { game.skipArmed = false; dom.skip.innerHTML = 'Override &amp; declassify \u2192'; } }, 3000); return; }
    if (opts.storyId) markCleared(opts.storyId);
    endGame(); close(); if (opts.onSuccess) { try { opts.onSuccess(); } catch (e) {} }
  }

  /* ── open ── */
  function open(opts) {
    opts = opts || {};
    buildDOM();
    var g; 
    if (typeof opts.req === 'number') g = gateForTier(opts.req);
    else { var diff = (typeof opts.difficulty === 'number') ? opts.difficulty : 0.5; g = { type: 'single', tol: 14 + diff * 26, pins: 1, steps: 0 }; }
    if (opts.forceType) g.type = opts.forceType; // for testing/dev

    game = { running: true, opts: opts, type: g.type, tol: g.tol, pins: g.pins,
      dial: 500, integrity: 100, hintShown: false, skipArmed: false, phase: 0, dwell: 0, raf: null };

    // reset shared UI to defaults
    dom.wave.className = 'sdrx-wave'; dom.constel.className = 'sdrx-constel sdrx-hide';
    dom.meters.className = 'sdrx-meters'; dom.dialWrap.className = 'sdrx-dialwrap';
    dom.replay.className = 'sdrx-btn sdrx-hide'; setPins(0);
    dom.dial.value = 500; dom.hint.textContent = ''; dom.skip.innerHTML = 'Override &amp; declassify \u2192';
    dom.target.innerHTML = 'Target transmission: <b>' + (opts.title ? esc(opts.title) : 'CLASSIFIED') + '</b>';
    dom.status.textContent = 'Searching\u2026'; dom.status.className = 'sdrx-status';
    dom.ov.classList.add('on');

    var modeLabel = { single: 'TUNE', multipin: 'HARMONIC LOCK', sequence: 'CALL & RESPONSE', constellation: 'STAR DECODE' };
    dom.mode.textContent = modeLabel[game.type] || '';

    // type-specific init
    if (game.type === 'single') {
      game.target = randTarget();
      dom.sub.textContent = 'Tune the dial until the signal locks. No way to fail \u2014 Hint and Override always available.';
    } else if (game.type === 'multipin') {
      game.targets = []; game.seated = 0; for (var i = 0; i < game.pins; i++) game.targets.push(randTarget());
      setPins(game.pins, 0, 0);
      dom.sub.textContent = 'Lock ' + game.pins + ' harmonics in sequence \u2014 find each, then HOLD to seat it. Slipping just re-seats the current pin. Hint / Override always available.';
    } else if (game.type === 'sequence') {
      game.seq = []; for (var s = 0; s < (g.steps || 3); s++) game.seq.push(randTarget());
      game.targets = game.seq; game.inputIdx = 0; game.phaseMode = 'play';
      dom.replay.className = 'sdrx-btn';
      setPins(game.seq.length, 0, 0);
      dom.sub.textContent = 'Listen to the signal\u2019s pattern, then repeat it on the dial. Replay as often as you like. Hint / Override always available.';
      playSequence();
    } else if (game.type === 'constellation') {
      dom.sub.textContent = 'Trace the transmission: tap the stars in numbered order. Wrong taps don\u2019t hurt \u2014 the next star pulses. Hint / Override always available.';
      initConstellation();
    }

    // controls
    dom.dial.oninput = function () { if (game) game.dial = parseInt(this.value, 10) || 0; };
    dom.lock.onclick = function () {
      if (!game) return;
      if (game.type === 'single' && activeProx() >= 0.9) success();
      else if (game.type === 'multipin' && game.seated >= game.pins) success();
      else if (game.type === 'sequence' && game.phaseMode === 'done') success();
      else if (game.type === 'constellation' && game.phaseMode === 'done') success();
    };
    dom.hintBtn.onclick = function () { showHint(); };
    dom.replay.onclick = function () { if (game && game.type === 'sequence') { if (game._seqTimer) clearTimeout(game._seqTimer); playSequence(); } };
    dom.cancel.onclick = function () { close(); if (opts.onCancel) { try { opts.onCancel(); } catch (e) {} } };
    dom.skip.onclick = function () { doSkip(); };

    startAudio();
    game.raf = requestAnimationFrame(tick);
  }

  window.SD_RECEIVER = {
    open: open,
    difficultyForTier: difficultyForTier,
    gateForTier: gateForTier,
    isCleared: isCleared,
    markCleared: markCleared,
    close: close,
    _proxTo: proxTo,
    _proximity: proximity
  };
})();
