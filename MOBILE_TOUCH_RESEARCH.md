# Mobile Touch Interaction Research
## Signal Decay Investigation Board — Pinboard Interface

**Date:** 2026-08-28  
**Context:** 104KB self-contained HTML file with draggable cards, pinch zoom, 1-finger pan, red string connections, minimap, 31 nodes  
**Goal:** Rebuild the mobile touch system for dramatically better controllability

---

## Table of Contents
1. [Mobile Canvas/Map Gesture Best Practices](#1-mobile-canvasmap-gesture-best-practices)
2. [Pinch Zoom Implementation](#2-pinch-zoom-implementation)
3. [One-Finger Pan vs Two-Finger Pan](#3-one-finger-pan-vs-two-finger-pan)
4. [Touch Target Sizes](#4-touch-target-sizes)
5. [Card Selection vs Drag](#5-card-selection-vs-drag)
6. [Inertia/Momentum Scrolling](#6-inertiamomentum-scrolling)
7. [Mobile Minimap Patterns](#7-mobile-minimap-patterns)
8. [Gesture Conflicts](#8-gesture-conflicts)
9. [Performance](#9-performance)
10. [Accessibility](#10-accessibility)

---

## 1. Mobile Canvas/Map Gesture Best Practices

### What the Best Apps Do

#### Google Maps (Embedded Web)
- **Two modes:** "Cooperative" and "Greedy"
  - **Cooperative (default for embedded):** Two-finger touch gestures pan and zoom the map. One-finger gestures scroll the page. Shows a "Use two fingers to move the map" toast when user tries one-finger.
  - **Greedy (full-screen):** One-finger pans, two-finger pinch zooms. This is the Google Maps app behavior.
- **Double-tap:** Zooms in one level, centered on tap point
- **Double-tap + hold + drag up/down:** Continuous zoom (one-handed zoom gesture)
- **Key insight:** Google Maps uses mode-switching based on context (embedded vs fullscreen)

#### Miro (Mobile App / Touch)
- **Explicit mode switching:** Toggle between Select Mode (V) and Hand Mode (H)
  - Hand mode: One-finger pans
  - Select mode: One-finger selects/moves objects
- **Two-finger always pans + zooms** regardless of mode
- **Tablet:** Fingers for selection/movement, Stylus for drawing
- **Key insight:** Mode-based disambiguation removes gesture ambiguity entirely

#### tldraw (Web Canvas SDK)
- **Pointer Events API** for unified input handling across mouse/touch/pen
- **Dead zone / drag threshold:** Won't start dragging until pointer moves beyond threshold (prevents accidental drags on touch)
- **Origin tracking:** Stores where pointer_down occurred, compares against current position
- **Velocity tracking:** Smoothed velocity calculated per animation frame, used to distinguish slow precise interactions from fast flicks
- **Pinch detection:** Tracks `isPinching` flag, resets origin and velocity when pinch starts
- **Edge scrolling:** Auto-pans camera when dragging shapes toward viewport edges
- **Pen mode:** When stylus detected, ignores non-pen touch input (palm rejection)

#### Excalidraw (Web Canvas)
- **Mobile struggles acknowledged** (GitHub Issue #794): Two-finger pan is imprecise — slight non-parallel finger movement causes unwanted zoom
- **Design choice:** Single finger pan when not selecting an element, double finger for pan + zoom when canvas is full of elements
- **The fundamental tension:** Pan/zoom gestures conflict with element manipulation on touch

#### Figma (Mobile App)
- **Prototype viewing:** Double-tap + hold to access hidden menu
- **Canvas navigation:** Pinch to zoom, two-finger pan
- **No mobile editing of canvas** — mobile is view-only, which sidesteps the gesture conflict entirely

### Recommended Approach for Signal Decay

The Investigation Board is a **read-mostly, occasionally-interactive** board — closer to Google Maps "Greedy" mode than Miro's full editing canvas:

1. **Default: One-finger pan, two-finger pinch-zoom** (like Google Maps Greedy)
2. **Tap a card:** Select/open it (distinct from pan via dead zone)
3. **Long-press a card:** Enter drag mode for that card
4. **Double-tap empty space:** Zoom in one level at tap point
5. **Double-tap a card:** Open card detail

This avoids mode-switching UI while keeping all interactions accessible.

### Common Pitfalls
- ❌ Using same gesture for pan AND card drag (one-finger does both = confusion)
- ❌ Requiring two-finger pan on a phone (imprecise, causes unwanted zoom)
- ❌ No dead zone on tap → every tap becomes a micro-pan
- ❌ Ignoring the "cooperative" problem — board must own ALL touch events

---

## 2. Pinch Zoom Implementation

### What the Best Apps Do

All production canvas apps use the **Pointer Events API** (not Touch Events) for pinch detection:

```javascript
// The industry-standard pattern (used by tldraw, Figma, Excalidraw)
const pointerCache = new Map();

element.addEventListener('pointerdown', (e) => {
  pointerCache.set(e.pointerId, e);
});

element.addEventListener('pointermove', (e) => {
  pointerCache.set(e.pointerId, e);
  
  if (pointerCache.size === 2) {
    const [p1, p2] = [...pointerCache.values()];
    const currentDist = Math.hypot(
      p1.clientX - p2.clientX,
      p1.clientY - p2.clientY
    );
    // Compare to previous distance for zoom delta
  }
});

element.addEventListener('pointerup', (e) => {
  pointerCache.delete(e.pointerId);
});
```

### Zoom-Toward-Point (Critical for Natural Feel)

The #1 rule: **Zoom must be centered on the midpoint between the two fingers**, not the center of the viewport:

```javascript
function applyPinchZoom(midX, midY, scaleFactor) {
  // midX, midY = center point between two fingers in screen coords
  // scaleFactor = newDistance / previousDistance
  
  const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, 
    currentScale * scaleFactor
  ));
  
  const ratio = newScale / currentScale;
  
  // Key formula: adjust offset so the point under fingers stays fixed
  offsetX = midX - (midX - offsetX) * ratio;
  offsetY = midY - (midY - offsetY) * ratio;
  currentScale = newScale;
  
  applyTransform();
}
```

### Trackpad/Wheel Zoom (Desktop Compatibility)

The `ctrlKey` trick — used by Figma, tldraw, Excalidraw:

```javascript
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  
  if (e.ctrlKey || e.metaKey) {
    // PINCH ZOOM (trackpad) or Ctrl+scroll (mouse)
    const MAX_DELTA = 10; // Clamp: trackpad sends 0.5-3, mouse sends 100+
    const clamped = Math.max(-MAX_DELTA, Math.min(MAX_DELTA, e.deltaY));
    const factor = Math.pow(2, -clamped * 0.01);
    
    zoomAtPoint(e.clientX, e.clientY, factor);
  } else {
    // TWO-FINGER SCROLL = PAN
    panBy(-e.deltaX, -e.deltaY);
  }
}, { passive: false });
```

### Zoom Levels & Snapping

```javascript
const ZOOM_CONFIG = {
  min: 0.25,        // 25% - can see entire board
  max: 3.0,         // 300% - read small text
  default: 1.0,
  snapLevels: [0.25, 0.5, 0.75, 1.0, 1.5, 2.0, 3.0],
  snapThreshold: 0.05,  // Snap if within 5% of a level
  
  // For double-tap zoom
  doubleTapLevels: [1.0, 2.0],  // Toggle between these
};

// Snap to nearest level on gesture end
function snapZoom(currentZoom) {
  for (const level of ZOOM_CONFIG.snapLevels) {
    if (Math.abs(currentZoom - level) < ZOOM_CONFIG.snapThreshold) {
      return level;
    }
  }
  return currentZoom;
}
```

### Recommended Approach for Signal Decay

1. **Use Pointer Events API** (not Touch Events) — unified, simpler code
2. **Zoom range:** 0.3x to 3.0x (31 nodes needs wide range)
3. **Zoom-at-point:** Always zoom toward finger midpoint
4. **Double-tap zoom:** Toggle between "fit all" and 1.5x at tap point
5. **Smooth animation:** Use `requestAnimationFrame` to interpolate zoom during gesture
6. **Post-gesture snap:** Optionally snap to clean zoom levels (1.0, 1.5, 2.0)

### Common Pitfalls
- ❌ Zooming toward viewport center (feels disconnected from fingers)
- ❌ No scale clamping → zoom to infinity or zero
- ❌ Applying zoom on every pointermove without RAF → jank on low-end phones
- ❌ Not clamping deltaY for wheel events → mouse wheel overshoots wildly
- ❌ Forgetting `{ passive: false }` → browser steals zoom gesture

---

## 3. One-Finger Pan vs Two-Finger Pan

### The Core Problem

On mobile canvas interfaces, there are fundamentally more gestures needed than fingers available:
- **One finger:** Pan the canvas? Select/tap a card? Drag a card?
- **Two fingers:** Pinch zoom? Pan? (Both at once?)

### What the Best Apps Do

| App | One-finger on empty | One-finger on object | Two-finger |
|-----|--------------------|--------------------|------------|
| Google Maps (app) | Pan | Pan (no objects) | Pinch zoom + pan |
| Miro (hand mode) | Pan | Pan | Pinch zoom + pan |
| Miro (select mode) | Marquee select | Move object | Pinch zoom + pan |
| Excalidraw | Pan (if no object) | Select/move object | Pinch zoom + pan |
| tldraw | Depends on tool | Select/move | Pinch zoom + pan |
| Apple Maps | Pan | Pan | Pinch zoom + pan |

### The "Greedy Pan" Pattern (Recommended for Investigation Board)

Since the Investigation Board is **read-heavy** (users explore more than rearrange):

```javascript
// STATE MACHINE
const GestureState = {
  IDLE: 'idle',
  WAITING: 'waiting',     // Pointer down, haven't decided yet
  PANNING: 'panning',     // One-finger pan confirmed
  CARD_SELECTED: 'selected', // Tapped a card (pointer up within threshold)
  CARD_DRAGGING: 'dragging', // Long-press drag
  PINCHING: 'pinching',   // Two-finger gesture
};

const DEAD_ZONE = 8;           // px before pan starts
const LONG_PRESS_MS = 400;     // ms for long-press to drag
const TAP_MAX_DURATION = 200;  // ms max for a "tap"
const TAP_MAX_DISTANCE = 10;   // px max movement for a "tap"
```

### Decision Flow:

```
pointerdown on EMPTY SPACE:
  → Wait DEAD_ZONE pixels → Start panning
  → If pointerup before threshold → Nothing (or deselect)

pointerdown on CARD:
  → Start long-press timer (400ms)
  → If pointer moves > DEAD_ZONE before timer → Cancel, start PAN
  → If timer fires without movement → Enter DRAG mode (haptic feedback)
  → If pointerup < TAP_MAX_DURATION → TAP (select/open card)
  
Second pointer down (during any state):
  → Cancel current gesture, switch to PINCH mode
```

### Two-Finger Pan + Zoom Simultaneously

Best practice: track **both** the distance change AND the midpoint movement:

```javascript
function handlePinchMove(pointers) {
  const [p1, p2] = pointers;
  
  const currentMid = {
    x: (p1.clientX + p2.clientX) / 2,
    y: (p1.clientY + p2.clientY) / 2
  };
  const currentDist = Math.hypot(
    p1.clientX - p2.clientX, 
    p1.clientY - p2.clientY
  );
  
  if (previousMid && previousDist) {
    // Zoom component
    const scaleFactor = currentDist / previousDist;
    
    // Pan component (midpoint moved)
    const panDeltaX = currentMid.x - previousMid.x;
    const panDeltaY = currentMid.y - previousMid.y;
    
    // Apply both simultaneously
    applyZoomAtPoint(currentMid.x, currentMid.y, scaleFactor);
    applyPan(panDeltaX, panDeltaY);
  }
  
  previousMid = currentMid;
  previousDist = currentDist;
}
```

### Recommended Approach for Signal Decay

1. **One-finger on empty space:** PAN (after 8px dead zone)
2. **One-finger on card:** TAP to select (if short), LONG-PRESS to drag
3. **Two-finger:** ALWAYS pinch-zoom + pan simultaneously
4. **Key insight:** Don't require two-finger for pan — phone users will one-finger pan 95% of the time

### Common Pitfalls
- ❌ Excalidraw's complaint: Two-finger pan without zoom is nearly impossible (fingers always move slightly non-parallel)
- ❌ Requiring two-finger pan as the ONLY pan method → frustrating on phone
- ❌ Not canceling one-finger gestures when second finger arrives → state corruption
- ❌ No dead zone → every tap becomes a 2px pan

---

## 4. Touch Target Sizes

### Guidelines Summary

| Source | Minimum | Recommended | Spacing |
|--------|---------|-------------|---------|
| Apple HIG | 44×44pt | 44×44pt | — |
| Material Design | 48×48dp | 48×48dp | 8dp between targets |
| WCAG 2.5.8 (AA) | 24×24 CSS px | — | No overlap with other targets |
| WCAG 2.5.5 (AAA) | 44×44 CSS px | — | — |
| BBC Accessibility | 7×7mm | 7-10mm | 7×7mm exclusion zone |
| MIT Touch Lab | — | 10mm (fingertip width) | — |
| NN/g Research | 1cm × 1cm | — | — |

**Key stat:** Average fingertip width is 1.6-2cm, thumb average is 2.5cm (MIT Touch Lab).

### The Dense Layout Problem (31 Nodes!)

With 31 cards on a pinboard, at default zoom some cards will be smaller than 44px. Solutions:

```css
/* Strategy 1: Invisible expanded tap targets */
.card {
  position: relative;
  /* Visual size can be small */
  width: 120px;
  height: 80px;
}

.card::before {
  content: '';
  position: absolute;
  /* Expand tap area beyond visual bounds */
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  /* Invisible but tappable */
}

/* Strategy 2: Scale-aware tap targets */
.card {
  /* At zoom < 1.0, the card gets visually smaller
     but we keep the tap target at minimum 44px */
  --tap-size: max(100%, calc(44px / var(--current-zoom)));
}
```

### Zoom-Dependent Target Sizing

```javascript
function getEffectiveTapRadius(card, currentZoom) {
  const MIN_TAP_SIZE = 44; // px in screen space
  const visualSize = card.width * currentZoom;
  
  if (visualSize >= MIN_TAP_SIZE) {
    // Card is big enough — use its actual bounds
    return card.width / 2;
  } else {
    // Card is too small — expand hit area
    return (MIN_TAP_SIZE / currentZoom) / 2;
  }
}

// Hit testing uses expanded bounds at low zoom
function hitTest(screenX, screenY, cards, zoom) {
  // Convert to page coords
  const pageX = (screenX - offsetX) / zoom;
  const pageY = (screenY - offsetY) / zoom;
  
  for (const card of cards) {
    const radius = getEffectiveTapRadius(card, zoom);
    const centerX = card.x + card.width / 2;
    const centerY = card.y + card.height / 2;
    
    if (Math.abs(pageX - centerX) < radius && 
        Math.abs(pageY - centerY) < radius) {
      return card;
    }
  }
  return null;
}
```

### Visual Feedback for Expanded Targets

When zoomed out and targets overlap, show which card will be selected:

```javascript
// On hover/touch-start, highlight the card that would be hit
function showTapFeedback(screenX, screenY) {
  const hitCard = hitTest(screenX, screenY, cards, zoom);
  if (hitCard) {
    hitCard.element.classList.add('tap-highlight');
    // Brief pulse animation
  }
}
```

### Recommended Approach for Signal Decay

1. **Card minimum visual size:** 120×80px at 1.0x zoom (well above 44px)
2. **At low zoom (0.3-0.6x):** Expand hit areas to maintain 44px screen-space minimum
3. **Overlapping targets at low zoom:** Use "nearest to tap center" as tiebreaker
4. **Card interaction buttons** (if any close/expand buttons): minimum 44×44px always
5. **Red string connection points:** Invisible 48×48px tap areas around attachment points

### Common Pitfalls
- ❌ Tap areas that shrink with zoom → impossible to tap at zoomed-out overview
- ❌ Overlapping expanded tap areas with no disambiguation → wrong card selected
- ❌ Small close/dismiss buttons on cards (< 44px)
- ❌ Not considering the thumb zone on large phones (bottom 2/3 is easy reach)

---

## 5. Card Selection vs Drag

### The Industry Solution: Dead Zone + Long Press

Every major canvas app uses the same two-part solution:

#### Part 1: Dead Zone (prevents accidental drags)

From **Steve Ruiz (tldraw creator):**
> "A dead zone is very useful to prevent 'accidental drags' during clicks. Without a dead zone, a pixel or two of movement can result in a change to a shape's position. This is especially common on touch devices."

**FSM States:** idle → pointing → dragging

```javascript
class CardInteractionFSM {
  constructor() {
    this.state = 'idle';
    this.origin = null;
    this.longPressTimer = null;
    this.targetCard = null;
    
    this.DEAD_ZONE = 8;        // px — must move this far to start drag
    this.LONG_PRESS = 400;     // ms — hold this long to enter drag mode
    this.TAP_THRESHOLD = 250;  // ms — release before this = tap
  }
  
  onPointerDown(e, card) {
    this.state = 'pointing';
    this.origin = { x: e.clientX, y: e.clientY };
    this.targetCard = card;
    this.downTime = Date.now();
    
    // Start long-press timer
    this.longPressTimer = setTimeout(() => {
      if (this.state === 'pointing') {
        this.enterDragMode(card);
      }
    }, this.LONG_PRESS);
  }
  
  onPointerMove(e) {
    if (this.state === 'pointing') {
      const dist = Math.hypot(
        e.clientX - this.origin.x, 
        e.clientY - this.origin.y
      );
      
      if (dist > this.DEAD_ZONE) {
        // Moved too far — this is a PAN, not a card interaction
        clearTimeout(this.longPressTimer);
        this.state = 'idle';
        this.startCanvasPan(e);
      }
    } else if (this.state === 'dragging') {
      this.moveCard(e);
    }
  }
  
  onPointerUp(e) {
    clearTimeout(this.longPressTimer);
    const elapsed = Date.now() - this.downTime;
    const dist = Math.hypot(
      e.clientX - this.origin.x, 
      e.clientY - this.origin.y
    );
    
    if (this.state === 'pointing' && 
        elapsed < this.TAP_THRESHOLD && 
        dist < this.DEAD_ZONE) {
      // Short tap with no movement = SELECT
      this.selectCard(this.targetCard);
    } else if (this.state === 'dragging') {
      this.dropCard(e);
    }
    
    this.state = 'idle';
  }
  
  enterDragMode(card) {
    this.state = 'dragging';
    // IMPORTANT: Haptic feedback signals mode change
    navigator.vibrate?.(50);
    card.element.classList.add('dragging');
    // Visual lift effect
    card.element.style.transform += ' scale(1.05)';
    card.element.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
  }
}
```

#### Part 2: Visual & Haptic Feedback

The user MUST know they've entered drag mode:

```css
.card.dragging {
  /* Visual "lift" effect */
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: 0.9;
  /* Slight rotation for "picked up" feel */
  transition: transform 0.15s, box-shadow 0.15s;
}

/* Ghost/placeholder where card was */
.card.dragging::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px dashed rgba(255, 0, 0, 0.3);
  border-radius: inherit;
  pointer-events: none;
}
```

### What Other Apps Do

| App | Tap | Long-press | Drag |
|-----|-----|-----------|------|
| iOS Home Screen | Open app | Enter jiggle/edit mode | Move icon (after long-press) |
| Trello (mobile) | Open card | — | Drag to reorder (after long-press) |
| Miro (select mode) | Select | Context menu | Move (immediate in select mode) |
| Google Keep | Open note | Select (multi-select) | — |
| Pinterest | Open pin | Save/share menu | — |

### Recommended Approach for Signal Decay

| Gesture on Card | Action | Feedback |
|----------------|--------|----------|
| Quick tap (< 250ms) | Select card / show detail | Card highlights, info panel appears |
| Long-press (400ms) | Enter drag mode | Haptic buzz, card lifts, shadow deepens |
| Long-press + move | Drag card to new position | Card follows finger with slight offset |
| Release after drag | Drop card | Card settles with animation, connections update |
| Tap selected card | Deselect or open full detail | — |

### Common Pitfalls
- ❌ Immediate drag on touch (every tap accidentally moves cards)
- ❌ No haptic feedback when entering drag mode (user doesn't know they can move)
- ❌ Long-press delay too short (< 300ms) → accidental drags
- ❌ Long-press delay too long (> 600ms) → feels unresponsive
- ❌ Not distinguishing "finger moved during long-press wait" (should cancel to pan)

---

## 6. Inertia/Momentum Scrolling

### The Physics Model

Native iOS/Android scrolling uses a **deceleration curve** that users expect everywhere. When the user lifts their finger while moving, the viewport should continue in that direction and gradually slow down.

### Implementation

```javascript
class MomentumPan {
  constructor() {
    this.velocity = { x: 0, y: 0 };
    this.lastPosition = null;
    this.lastTime = null;
    this.animationId = null;
    
    // Physics constants
    this.FRICTION = 0.92;          // Per-frame multiplier (0.90-0.95 range)
    this.MIN_VELOCITY = 0.5;       // Stop when velocity drops below this
    this.VELOCITY_SMOOTHING = 0.4; // Blend with previous velocity
    
    // Rubber-band at edges
    this.RUBBER_BAND_FACTOR = 0.3; // How much past-edge movement is allowed
    this.SNAP_BACK_SPEED = 0.15;   // Spring constant for snapping back
  }
  
  onPointerMove(e) {
    const now = performance.now();
    
    if (this.lastPosition && this.lastTime) {
      const dt = now - this.lastTime;
      if (dt > 0) {
        const rawVx = (e.clientX - this.lastPosition.x) / dt;
        const rawVy = (e.clientY - this.lastPosition.y) / dt;
        
        // Smooth velocity to prevent jitter
        this.velocity.x = this.velocity.x * this.VELOCITY_SMOOTHING + 
                          rawVx * (1 - this.VELOCITY_SMOOTHING);
        this.velocity.y = this.velocity.y * this.VELOCITY_SMOOTHING + 
                          rawVy * (1 - this.VELOCITY_SMOOTHING);
      }
    }
    
    this.lastPosition = { x: e.clientX, y: e.clientY };
    this.lastTime = now;
  }
  
  onPointerUp() {
    // Start momentum animation
    this.startMomentum();
  }
  
  startMomentum() {
    // Scale velocity from px/ms to px/frame
    const frameVelocity = {
      x: this.velocity.x * 16, // ~16ms per frame
      y: this.velocity.y * 16
    };
    
    const animate = () => {
      // Apply friction
      frameVelocity.x *= this.FRICTION;
      frameVelocity.y *= this.FRICTION;
      
      // Check bounds and apply rubber-banding
      const newOffset = {
        x: offsetX + frameVelocity.x,
        y: offsetY + frameVelocity.y
      };
      
      // Rubber-band: allow overshooting bounds, but with resistance
      const bounds = getCanvasBounds(); // { minX, maxX, minY, maxY }
      
      if (newOffset.x > bounds.maxX) {
        const overshoot = newOffset.x - bounds.maxX;
        newOffset.x = bounds.maxX + overshoot * this.RUBBER_BAND_FACTOR;
        frameVelocity.x *= 0.5; // Extra damping past edge
      }
      if (newOffset.x < bounds.minX) {
        const overshoot = bounds.minX - newOffset.x;
        newOffset.x = bounds.minX - overshoot * this.RUBBER_BAND_FACTOR;
        frameVelocity.x *= 0.5;
      }
      // Same for Y...
      
      offsetX = newOffset.x;
      offsetY = newOffset.y;
      applyTransform();
      
      // Continue or stop
      const speed = Math.hypot(frameVelocity.x, frameVelocity.y);
      if (speed > this.MIN_VELOCITY) {
        this.animationId = requestAnimationFrame(animate);
      } else {
        // Snap back if past bounds
        this.snapBack();
      }
    };
    
    this.animationId = requestAnimationFrame(animate);
  }
  
  snapBack() {
    // Animate back to valid bounds if overshot
    const bounds = getCanvasBounds();
    let targetX = Math.max(bounds.minX, Math.min(bounds.maxX, offsetX));
    let targetY = Math.max(bounds.minY, Math.min(bounds.maxY, offsetY));
    
    if (targetX === offsetX && targetY === offsetY) return;
    
    const snapAnimate = () => {
      offsetX += (targetX - offsetX) * this.SNAP_BACK_SPEED;
      offsetY += (targetY - offsetY) * this.SNAP_BACK_SPEED;
      
      applyTransform();
      
      if (Math.abs(targetX - offsetX) > 0.5 || 
          Math.abs(targetY - offsetY) > 0.5) {
        requestAnimationFrame(snapAnimate);
      } else {
        offsetX = targetX;
        offsetY = targetY;
        applyTransform();
      }
    };
    
    requestAnimationFrame(snapAnimate);
  }
  
  // Cancel momentum if user touches again
  cancelMomentum() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.velocity = { x: 0, y: 0 };
  }
}
```

### Deceleration Curve Comparison

| Platform | Friction Factor | Feel |
|----------|----------------|------|
| iOS native | ~0.998 per ms (very slow decay) | Long, smooth coast |
| Android native | ~0.994 per ms | Slightly shorter |
| Web recommended | 0.92-0.95 per frame (60fps) | Responsive, stops within ~1s |
| Aggressive | 0.85 per frame | Quick stop, "heavy" feel |

### Recommended Approach for Signal Decay

1. **Friction: 0.92** (stops within ~40 frames / 0.67s — feels responsive for a board)
2. **Rubber-band at edges:** Allow 30% overshoot with spring-back
3. **Velocity smoothing:** 40% blend with previous (prevents jitter from noisy touch)
4. **Cancel on new touch:** Immediately stop momentum when finger touches again
5. **No momentum after card drag:** Only apply to pan gesture, not card repositioning

### Common Pitfalls
- ❌ Not canceling momentum on new pointer-down → card appears to "run away"
- ❌ Raw velocity without smoothing → erratic momentum from last-frame jitter
- ❌ No edge bounds → canvas flies off into infinity
- ❌ Linear deceleration (feels mechanical) instead of exponential (feels natural)
- ❌ Too much friction → momentum feels "sticky", too little → board is ice-skating

---

## 7. Mobile Minimap Patterns

### Is Minimap Useful on Phone?

**Short answer:** Minimaps are problematic on phones. They work on tablets/desktop.

**Problems on phone:**
- Takes up ~15-20% of already-limited screen space
- Too small to be a useful navigation target (fat fingers)
- Adds visual clutter on a conspiracy board that's already dense
- Most users don't understand what it represents at small sizes

### What Apps Do Instead

| App | Phone | Tablet/Desktop |
|-----|-------|---------------|
| Google Maps | No minimap, "recenter" button | No minimap, search + recenter |
| Miro | No minimap on mobile | Minimap (bottom-left, toggle) |
| Figma | No minimap on mobile | Minimap on desktop |
| Notion (databases) | No minimap | No minimap |
| Apple Maps | No minimap | "Zoom to fit" option |

### Better Alternatives for Phone

#### 1. "Zoom to Fit All" Button

```javascript
function zoomToFitAll(animate = true) {
  const bounds = getContentBounds(allCards); // { x, y, width, height }
  const padding = 40; // px padding around content
  
  const scaleX = (viewportWidth - padding * 2) / bounds.width;
  const scaleY = (viewportHeight - padding * 2) / bounds.height;
  const targetScale = Math.min(scaleX, scaleY, 1.0); // Don't zoom past 1.0
  
  const targetX = (viewportWidth - bounds.width * targetScale) / 2 - bounds.x * targetScale;
  const targetY = (viewportHeight - bounds.height * targetScale) / 2 - bounds.y * targetScale;
  
  if (animate) {
    animateToViewport(targetX, targetY, targetScale, 300); // 300ms
  } else {
    setViewport(targetX, targetY, targetScale);
  }
}
```

#### 2. "Zoom to Card" / Focus Navigation

```javascript
function focusOnCard(card, padding = 60) {
  const targetScale = Math.min(
    (viewportWidth - padding * 2) / card.width,
    (viewportHeight - padding * 2) / card.height,
    2.0 // Don't zoom past 2x
  );
  
  const targetX = viewportWidth / 2 - (card.x + card.width / 2) * targetScale;
  const targetY = viewportHeight / 2 - (card.y + card.height / 2) * targetScale;
  
  animateToViewport(targetX, targetY, targetScale, 250);
}
```

#### 3. Card List / Index Panel (Slide-up)

A list view of all cards that scrolls normally and taps to navigate:

```html
<!-- Bottom sheet / drawer with card index -->
<div class="card-index" role="navigation" aria-label="Investigation nodes">
  <button class="zoom-to-fit" aria-label="Show entire board">🗺️ Overview</button>
  <ul>
    <li><button onclick="focusOnCard('card-1')">📡 The Signal</button></li>
    <li><button onclick="focusOnCard('card-2')">🏢 Nexus Corp</button></li>
    <!-- etc -->
  </ul>
</div>
```

#### 4. Breadcrumb / Cluster Navigation

If cards are grouped into clusters, provide quick-jump buttons:

```html
<nav class="cluster-nav" aria-label="Board sections">
  <button onclick="focusCluster('origins')">Origins</button>
  <button onclick="focusCluster('evidence')">Evidence</button>
  <button onclick="focusCluster('suspects')">Suspects</button>
</nav>
```

### Recommended Approach for Signal Decay

1. **Remove minimap on phone** (viewport < 768px)
2. **Add floating action buttons:**
   - 🗺️ "Fit All" — zooms out to show entire board
   - 📋 "Index" — slides up card list for quick navigation
3. **Keep minimap on tablet/desktop** but make it toggleable
4. **Double-tap empty space:** Zoom to 1.5x at that point (quick focus)
5. **Card connections:** When a card is selected, show "connected to: [X], [Y]" buttons for graph navigation

### Common Pitfalls
- ❌ Minimap on phone that's too small to tap accurately
- ❌ No way to zoom out to see the whole board
- ❌ No text-based navigation alternative (only spatial)
- ❌ Zoom-to-fit that animates too slowly (> 500ms feels sluggish)

---

## 8. Gesture Conflicts

### Browser Gestures That Interfere

| Browser Gesture | Trigger | Conflict |
|----------------|---------|----------|
| Pull-to-refresh | Scroll down at top | Pan gesture |
| Back/forward swipe | Horizontal swipe from edge | Pan gesture |
| Address bar show/hide | Vertical scroll | Pan gesture |
| Pinch-to-zoom page | Two-finger pinch | Custom pinch zoom |
| Double-tap zoom | Double-tap | Card double-tap |
| iOS scroll bounce | Over-scroll | Edge panning |
| Text selection | Long-press on text | Card long-press |

### The Nuclear Option: `touch-action: none`

```css
/* On the canvas container — take FULL control of all touch */
.investigation-board {
  touch-action: none;
  
  /* Also prevent text selection during interactions */
  -webkit-user-select: none;
  user-select: none;
  
  /* Prevent callout menus on long-press (iOS) */
  -webkit-touch-callout: none;
}
```

**Important:** `touch-action: none` means the browser will NOT handle ANY touch gestures. You must implement everything yourself. This is correct for a full-screen canvas.

### Preventing Page-Level Interference

```css
/* Prevent pull-to-refresh and overscroll bounce */
html, body {
  overscroll-behavior: none;
  /* Or more targeted: */
  overscroll-behavior-y: none;
}

/* Prevent elastic scroll on iOS */
html {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
```

### Preventing Back/Forward Swipe

```css
/* Prevent horizontal overscroll navigation */
html {
  overscroll-behavior-x: none;
}
```

```javascript
// Also catch at event level for extra safety
document.addEventListener('touchmove', (e) => {
  // Only prevent default on the canvas element
  if (e.target.closest('.investigation-board')) {
    e.preventDefault();
  }
}, { passive: false });
```

### Preventing Address Bar Issues

The mobile address bar appearing/disappearing causes viewport resize. Prevent layout jumps:

```css
/* Use dvh (dynamic viewport height) for full-screen canvas */
.investigation-board {
  height: 100dvh; /* Accounts for address bar */
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

/* Fallback for older browsers */
@supports not (height: 100dvh) {
  .investigation-board {
    height: 100vh;
    height: -webkit-fill-available;
  }
}
```

### Preventing Double-Tap Zoom

```css
.investigation-board {
  /* manipulation = pan + pinch but NO double-tap zoom */
  touch-action: manipulation;
}

/* But since we're using touch-action: none, this is redundant.
   However, if you ever switch to manipulation, know that it 
   disables the 300ms tap delay AND double-tap zoom. */
```

### Event Listener Configuration

```javascript
// CRITICAL: Use { passive: false } to be able to preventDefault
const canvas = document.querySelector('.investigation-board');

// Prevent all default touch behavior on canvas
canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

// But use pointer events for actual gesture handling
canvas.addEventListener('pointerdown', handlePointerDown);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
canvas.addEventListener('pointercancel', handlePointerUp);

// Capture pointer for reliable move/up events even outside element
function handlePointerDown(e) {
  canvas.setPointerCapture(e.pointerId);
  // ... rest of handler
}
```

### The `setPointerCapture` Pattern

Critical for reliable drag — ensures you get pointermove/up even if finger slides off the element:

```javascript
function handlePointerDown(e) {
  // Capture this pointer — all future events for it come to this element
  e.target.setPointerCapture(e.pointerId);
  
  pointerCache.set(e.pointerId, {
    id: e.pointerId,
    startX: e.clientX,
    startY: e.clientY,
    currentX: e.clientX,
    currentY: e.clientY,
    type: e.pointerType // 'touch', 'mouse', or 'pen'
  });
}

function handlePointerUp(e) {
  pointerCache.delete(e.pointerId);
  // Release capture (happens automatically but explicit is safer)
  e.target.releasePointerCapture(e.pointerId);
}
```

### Recommended Approach for Signal Decay

```css
/* Full lockdown — board owns all touch */
.investigation-board {
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  overscroll-behavior: none;
  position: fixed;
  inset: 0;
  height: 100dvh;
  width: 100vw;
}

html, body {
  overscroll-behavior: none;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}
```

```javascript
// Board takes full control
const board = document.getElementById('board');
board.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
board.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
// All gesture logic through Pointer Events with setPointerCapture
```

### Common Pitfalls
- ❌ Using `{ passive: true }` (default) → can't preventDefault → browser steals gestures
- ❌ Forgetting `overscroll-behavior: none` → pull-to-refresh triggers during pan-down
- ❌ Not using `setPointerCapture` → lose events when finger slides off card
- ❌ Using `100vh` instead of `100dvh` → board height wrong when address bar appears
- ❌ Putting `touch-action: none` on body instead of just the canvas → breaks any scrollable UI elements (menus, panels)

---

## 9. Performance

### The Critical Rule: Only Animate `transform` and `opacity`

These two CSS properties are the ONLY ones that can be animated on the GPU compositor thread without triggering layout or paint:

```javascript
// ✅ GOOD: Use CSS transform for ALL movement
function applyTransform() {
  board.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${zoom})`;
}

// ❌ BAD: Changing left/top triggers layout recalculation
function applyTransformBad() {
  board.style.left = offsetX + 'px';
  board.style.top = offsetY + 'px';
}
```

### Architecture: Transform the Container, Not the Cards

```html
<!-- The world/container that gets transformed -->
<div class="board-viewport">
  <!-- This is what we translate/scale -->
  <div class="board-world" id="board-world">
    <!-- Cards are positioned with static left/top within the world -->
    <div class="card" style="left: 200px; top: 150px;">Card 1</div>
    <div class="card" style="left: 500px; top: 300px;">Card 2</div>
    <!-- SVG for connections -->
    <svg class="connections">
      <line x1="200" y1="150" x2="500" y2="300" />
    </svg>
  </div>
</div>
```

```javascript
// Pan/zoom = transform the WORLD, not each card individually
function updateViewport() {
  const world = document.getElementById('board-world');
  world.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
}
// This is O(1) — no matter how many cards/connections exist
```

### GPU Layer Promotion

```css
/* Promote the world container to its own GPU layer */
.board-world {
  will-change: transform;
  /* Force GPU compositing */
  transform: translate3d(0, 0, 0);
}

/* Do NOT promote every card — too many layers kills memory */
/* Only promote the card being dragged */
.card.dragging {
  will-change: transform;
  transform: translate3d(var(--drag-x), var(--drag-y), 0) scale(1.05);
}
```

**Warning:** Each GPU layer costs memory (9% increase per layer per NN/g 2023 study). With 31 cards, promoting all of them would use 31 layers. Only promote the world container + the actively-dragged card.

### Connection Lines: SVG vs Canvas

For 31 nodes with connections between them:

| Approach | Pros | Cons |
|----------|------|------|
| SVG `<line>` elements | DOM-based, easy styling, part of transform | Reflow on connection change |
| SVG inside world container | Scales with zoom for free | Still DOM |
| `<canvas>` element | Fast redraw, no DOM overhead | Must redraw manually on zoom/pan |
| CSS `border` + absolute divs | Hacky but GPU-accelerated | Complex positioning |

**Recommendation:** SVG inside the transformed world container. For 31 nodes with maybe 40-50 connections, SVG is fast enough and doesn't require manual redraw:

```html
<div class="board-world">
  <!-- SVG connections - positioned same as cards -->
  <svg class="connections" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
    <line x1="260" y1="190" x2="560" y2="340" 
          stroke="red" stroke-width="2" opacity="0.7"/>
  </svg>
  <!-- Cards on top -->
  <div class="card" style="left:200px; top:150px;">...</div>
</div>
```

When user drags a card, only update the SVG `x2`/`y2` attributes — this is very cheap:

```javascript
function updateConnection(line, fromCard, toCard) {
  line.setAttribute('x1', fromCard.x + fromCard.width / 2);
  line.setAttribute('y1', fromCard.y + fromCard.height / 2);
  line.setAttribute('x2', toCard.x + toCard.width / 2);
  line.setAttribute('y2', toCard.y + toCard.height / 2);
}
```

### requestAnimationFrame Throttling

Never apply transforms directly in event handlers — batch them:

```javascript
let pendingFrame = false;
let nextTransform = null;

function scheduleTransformUpdate(x, y, scale) {
  nextTransform = { x, y, scale };
  
  if (!pendingFrame) {
    pendingFrame = true;
    requestAnimationFrame(() => {
      applyTransform(nextTransform.x, nextTransform.y, nextTransform.scale);
      pendingFrame = false;
    });
  }
}

// In pointermove handler:
function handlePointerMove(e) {
  // ... calculate new offset/zoom ...
  scheduleTransformUpdate(newOffsetX, newOffsetY, newZoom); // Batched!
}
```

### Performance Budget for 31 Nodes

| Operation | Target | Notes |
|-----------|--------|-------|
| Pan (transform world) | < 1ms | Single CSS transform, compositor only |
| Pinch zoom (transform world) | < 2ms | Single CSS transform |
| Card drag (move 1 card + update 3-5 lines) | < 4ms | Update style.left/top + SVG attrs |
| Initial render (31 cards + SVG) | < 100ms | DOM creation |
| Zoom animation (with inertia) | 60fps | RAF loop, compositor |

### Reducing DOM Size

With 31 cards, DOM is manageable. But ensure cards aren't bloated:

```html
<!-- Keep card DOM minimal -->
<div class="card" data-id="card-1" style="left:200px;top:150px">
  <h3>The Signal</h3>
  <p class="card-preview">First detected on...</p>
</div>

<!-- NOT this: -->
<div class="card">
  <div class="card-header">
    <div class="card-icon"><svg>...</svg></div>
    <div class="card-title-wrapper">
      <h3 class="card-title">The Signal</h3>
      <span class="card-subtitle">...</span>
    </div>
    <button class="card-menu"><svg>...</svg></button>
  </div>
  <!-- ... 20 more nested divs ... -->
</div>
```

### Recommended Approach for Signal Decay

1. **Single transform on world container** for pan/zoom (O(1) regardless of card count)
2. **SVG for connections** inside the world container (transforms for free with parent)
3. **RAF batching** for all transform updates
4. **`will-change: transform`** only on world container + actively-dragged card
5. **Minimal card DOM** — essential text only, detail in overlay/modal
6. **CSS `contain: layout style`** on cards (isolates layout recalculation)
7. **No card visibility culling needed** — 31 nodes is fine for mobile

### Common Pitfalls
- ❌ `will-change: transform` on every card → memory explosion
- ❌ Applying transform in pointermove without RAF → multiple transforms per frame
- ❌ Using `top`/`left` for pan animation → triggers layout, CPU-bound
- ❌ Redrawing all connections on every frame even when not dragging
- ❌ Heavy card DOMs (images, complex layouts) multiplied by 31

---

## 10. Accessibility

### The Fundamental Challenge

From **tldraw's accessibility megathread** (Issue #5215):
> "The tldraw canvas is an unusual piece of media on the web. All of its unique characteristics present challenges for accessibility. Even a question like 'what is the document' (e.g. to be read by a screen reader) is complicated by the fact that the document is multi-dimensional and often changing rapidly."

### WCAG Requirements That Apply

| Criterion | Requirement | Challenge for Canvas |
|-----------|-------------|---------------------|
| 2.5.1 Pointer Gestures | Multi-point/path gestures must have single-point alternative | Pinch-zoom needs +/- buttons |
| 2.5.2 Pointer Cancellation | Single-point activation can be aborted | Card drag must be cancelable |
| 2.5.5 Target Size (AAA) | 44×44 CSS px minimum | Cards at low zoom may be smaller |
| 2.5.7 Dragging Movements | Functionality via dragging must have non-drag alternative | Card repositioning needs menu option |
| 2.5.8 Target Size (AA) | 24×24 CSS px minimum with spacing | — |
| 1.3.1 Info and Relationships | Spatial relationships must be programmatically determinable | Connections between cards |
| 4.1.2 Name, Role, Value | All UI components must be accessible | Canvas elements need ARIA |

### Strategy 1: Alternative List/Tree View

The most impactful accessibility feature: a text-based alternative to the spatial view.

```html
<!-- Hidden from sighted users, available to screen readers -->
<div class="sr-only-navigation" role="navigation" aria-label="Investigation board content">
  <h2>Investigation Nodes</h2>
  <ul role="tree" aria-label="Investigation board nodes and connections">
    <li role="treeitem" aria-expanded="false">
      <button>📡 The Signal</button>
      <span class="sr-only">Connected to: Nexus Corp, Dr. Hollis, Frequency Analysis</span>
      <ul role="group">
        <li role="treeitem">→ Connected to: Nexus Corp</li>
        <li role="treeitem">→ Connected to: Dr. Hollis</li>
        <li role="treeitem">→ Connected to: Frequency Analysis</li>
      </ul>
    </li>
    <!-- ... more nodes ... -->
  </ul>
</div>

<!-- Toggle between views -->
<button id="toggle-view" aria-label="Switch to list view">
  📋 List View
</button>
```

### Strategy 2: ARIA for Spatial Canvas

```html
<!-- Canvas region with description -->
<div class="investigation-board" 
     role="application" 
     aria-label="Investigation Board - conspiracy-style pinboard with 31 connected nodes"
     aria-roledescription="interactive pinboard">
  
  <!-- Each card as a focusable element -->
  <div class="card" 
       role="button"
       tabindex="0"
       aria-label="The Signal - First detected on March 15. Connected to 3 other nodes."
       aria-describedby="card-1-connections">
    <h3>The Signal</h3>
    <p>First detected on...</p>
  </div>
  
  <!-- Hidden connection descriptions -->
  <div id="card-1-connections" class="sr-only">
    Connected to: Nexus Corp, Dr. Hollis, Frequency Analysis
  </div>
</div>
```

### Strategy 3: Keyboard Navigation

```javascript
// Keyboard controls for the board
document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'Tab':
      // Move focus to next/previous card
      // Order: left-to-right, top-to-bottom (reading order)
      navigateCards(e.shiftKey ? 'prev' : 'next');
      e.preventDefault();
      break;
      
    case 'Enter':
    case ' ':
      // Open/select focused card
      if (focusedCard) selectCard(focusedCard);
      e.preventDefault();
      break;
      
    case 'Escape':
      // Deselect / close card detail
      deselectAll();
      break;
      
    case '+':
    case '=':
      zoomIn();
      break;
    case '-':
      zoomOut();
      break;
      
    case '0':
      zoomToFit();
      break;
      
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
      if (e.shiftKey && focusedCard) {
        // Shift+Arrow = move card (WCAG 2.5.7 alternative to drag)
        moveCardByKey(focusedCard, e.key, 10);
      } else {
        // Arrow = pan board
        panByKey(e.key, 50);
      }
      e.preventDefault();
      break;
  }
});
```

### Strategy 4: Screen Reader Announcements

```javascript
// Live region for announcing state changes
const announcer = document.createElement('div');
announcer.setAttribute('aria-live', 'polite');
announcer.setAttribute('aria-atomic', 'true');
announcer.classList.add('sr-only');
document.body.appendChild(announcer);

function announce(message) {
  announcer.textContent = ''; // Clear first (forces re-announcement)
  requestAnimationFrame(() => {
    announcer.textContent = message;
  });
}

// Use in interactions:
function selectCard(card) {
  announce(`Selected: ${card.title}. Connected to ${card.connections.length} nodes.`);
}

function moveCard(card, newX, newY) {
  announce(`Moved ${card.title} to position ${newX}, ${newY}`);
}

function zoomChanged(level) {
  announce(`Zoom: ${Math.round(level * 100)}%`);
}
```

### Strategy 5: Non-Gesture Alternatives (WCAG 2.5.1, 2.5.7)

Every gesture needs a button/keyboard alternative:

| Gesture | Alternative |
|---------|-------------|
| Pinch to zoom | +/- buttons, keyboard +/- |
| Pan (swipe) | Arrow keys, scroll if list view |
| Long-press to drag | Keyboard Shift+Arrows, "Move" button in context menu |
| Double-tap to zoom | "Zoom to card" button |
| Drag card | "Move to..." option in card menu |

```html
<!-- Zoom controls always visible -->
<div class="zoom-controls" aria-label="Zoom controls">
  <button onclick="zoomIn()" aria-label="Zoom in">+</button>
  <span aria-live="polite" aria-label="Current zoom level">100%</span>
  <button onclick="zoomOut()" aria-label="Zoom out">−</button>
  <button onclick="zoomToFit()" aria-label="Zoom to fit all nodes">⊡</button>
</div>
```

### VoiceOver / TalkBack Specific Considerations

- **VoiceOver:** Swipe left/right navigates between elements. Double-tap activates. Rotor can switch navigation mode.
- **TalkBack:** Similar swipe navigation. Explore by touch mode lets users drag finger to discover elements.
- **Key issue:** Both screen readers use gestures that conflict with canvas gestures. The `role="application"` tells the screen reader to pass through gestures → you must provide ALL navigation yourself.

### Recommended Approach for Signal Decay

1. **Dual view:** Spatial canvas (default) + List/Tree view (toggle button, accessible)
2. **`role="application"`** on the canvas (tells AT to pass through events)
3. **Keyboard navigation:** Tab between cards (sorted by reading order), arrows to pan
4. **ARIA labels** on every card with title + connection summary
5. **Live region** for state change announcements
6. **Non-drag alternatives:** Context menu with "Move to..." for card repositioning
7. **Zoom controls:** Always-visible +/- buttons (not just gesture)
8. **Focus management:** Focus moves to newly selected card, visible focus ring
9. **Skip link:** "Skip to board content" / "Skip to controls"

### Common Pitfalls
- ❌ No alternative to spatial navigation (screen reader users get nothing)
- ❌ Using `aria-hidden="true"` on the canvas (hides everything from AT)
- ❌ Gesture-only zoom with no button/keyboard alternative
- ❌ Drag-only card positioning with no alternative interaction
- ❌ No focus indicators visible on cards
- ❌ Tab order that doesn't make sense (random based on DOM order instead of spatial logic)

---

## Implementation Priority

For the Signal Decay Investigation Board rebuild, implement in this order:

### Phase 1: Core Touch (Must-Have)
1. ✅ `touch-action: none` + `overscroll-behavior: none` on board
2. ✅ Pointer Events API (not Touch Events)
3. ✅ Dead zone (8px) for tap vs pan disambiguation
4. ✅ One-finger pan with momentum
5. ✅ Two-finger pinch zoom (zoom-toward-midpoint)
6. ✅ `setPointerCapture` for reliable move/up events
7. ✅ RAF-batched transform updates
8. ✅ Single world-container transform (not per-card)

### Phase 2: Card Interaction
9. ✅ Long-press (400ms) to enter drag mode
10. ✅ Haptic feedback on drag enter
11. ✅ Visual lift effect on dragged card
12. ✅ Tap = select, Double-tap = open detail
13. ✅ Cancel drag on second finger down
14. ✅ Expanded hit areas at low zoom

### Phase 3: Polish
15. ✅ Momentum/inertia on pan release
16. ✅ Rubber-band at canvas edges
17. ✅ Double-tap empty space = zoom in
18. ✅ Zoom-to-fit button (replace minimap on phone)
19. ✅ Card index panel (slide-up list)
20. ✅ Smooth animated transitions between zoom levels

### Phase 4: Accessibility
21. ✅ Keyboard navigation (Tab/Arrows/Enter)
22. ✅ ARIA labels and live region
23. ✅ Non-gesture alternatives (zoom buttons, move menu)
24. ✅ List/Tree view toggle
25. ✅ Focus management + visible focus ring

---

## Code Template: Complete Gesture System

```javascript
/**
 * Signal Decay Investigation Board — Touch Gesture System
 * 
 * Architecture:
 * - Pointer Events API (unified mouse/touch/pen)
 * - Single container transform (translate3d + scale)
 * - FSM for gesture state management
 * - RAF-batched rendering
 */

class BoardGestureSystem {
  constructor(boardElement, worldElement) {
    this.board = boardElement;
    this.world = worldElement;
    
    // Viewport state
    this.pan = { x: 0, y: 0 };
    this.zoom = 1.0;
    this.ZOOM_MIN = 0.25;
    this.ZOOM_MAX = 3.0;
    
    // Pointer tracking
    this.pointers = new Map(); // pointerId → { x, y, startX, startY, startTime }
    
    // Gesture state
    this.state = 'idle'; // idle | waiting | panning | pinching | card-pointing | card-dragging
    this.activeCard = null;
    this.longPressTimer = null;
    
    // Momentum
    this.velocity = { x: 0, y: 0 };
    this.momentumRAF = null;
    
    // Config
    this.DEAD_ZONE = 8;
    this.LONG_PRESS_MS = 400;
    this.TAP_MAX_MS = 250;
    this.FRICTION = 0.92;
    this.MIN_VELOCITY = 0.5;
    
    // RAF batching
    this.needsRender = false;
    
    this.bindEvents();
  }
  
  bindEvents() {
    // Prevent all default touch behavior
    this.board.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
    this.board.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
    
    // Pointer events for gesture handling
    this.board.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.board.addEventListener('pointermove', this.onPointerMove.bind(this));
    this.board.addEventListener('pointerup', this.onPointerUp.bind(this));
    this.board.addEventListener('pointercancel', this.onPointerUp.bind(this));
    
    // Wheel for desktop zoom/pan
    this.board.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
  }
  
  onPointerDown(e) {
    this.board.setPointerCapture(e.pointerId);
    this.cancelMomentum();
    
    this.pointers.set(e.pointerId, {
      x: e.clientX, y: e.clientY,
      startX: e.clientX, startY: e.clientY,
      startTime: performance.now(),
      type: e.pointerType
    });
    
    // Two pointers → pinch mode
    if (this.pointers.size === 2) {
      this.cancelLongPress();
      this.state = 'pinching';
      this.initPinch();
      return;
    }
    
    // One pointer → check if on card
    const card = this.hitTestCard(e.clientX, e.clientY);
    
    if (card) {
      this.state = 'card-pointing';
      this.activeCard = card;
      this.startLongPress(card);
    } else {
      this.state = 'waiting';
    }
  }
  
  onPointerMove(e) {
    const pointer = this.pointers.get(e.pointerId);
    if (!pointer) return;
    
    const prevX = pointer.x;
    const prevY = pointer.y;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    
    switch (this.state) {
      case 'waiting': {
        const dist = Math.hypot(
          e.clientX - pointer.startX, 
          e.clientY - pointer.startY
        );
        if (dist > this.DEAD_ZONE) {
          this.state = 'panning';
        }
        break;
      }
      
      case 'card-pointing': {
        const dist = Math.hypot(
          e.clientX - pointer.startX, 
          e.clientY - pointer.startY
        );
        if (dist > this.DEAD_ZONE) {
          // Moved too far → pan instead of card interaction
          this.cancelLongPress();
          this.activeCard = null;
          this.state = 'panning';
        }
        break;
      }
      
      case 'panning': {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        this.pan.x += dx;
        this.pan.y += dy;
        this.trackVelocity(dx, dy);
        this.scheduleRender();
        break;
      }
      
      case 'pinching': {
        this.handlePinchMove();
        break;
      }
      
      case 'card-dragging': {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        this.dragCard(dx / this.zoom, dy / this.zoom);
        break;
      }
    }
  }
  
  onPointerUp(e) {
    const pointer = this.pointers.get(e.pointerId);
    if (!pointer) return;
    
    const elapsed = performance.now() - pointer.startTime;
    const dist = Math.hypot(
      pointer.x - pointer.startX,
      pointer.y - pointer.startY
    );
    
    this.pointers.delete(e.pointerId);
    this.board.releasePointerCapture(e.pointerId);
    
    switch (this.state) {
      case 'waiting':
      case 'card-pointing': {
        this.cancelLongPress();
        if (elapsed < this.TAP_MAX_MS && dist < this.DEAD_ZONE) {
          if (this.activeCard) {
            this.onCardTap(this.activeCard);
          }
        }
        break;
      }
      
      case 'panning': {
        this.startMomentum();
        break;
      }
      
      case 'card-dragging': {
        this.endCardDrag();
        break;
      }
      
      case 'pinching': {
        if (this.pointers.size === 0) {
          this.state = 'idle';
        }
        break;
      }
    }
    
    if (this.pointers.size === 0) {
      this.state = 'idle';
      this.activeCard = null;
    }
  }
  
  // ... (momentum, pinch, render methods as defined above)
  
  scheduleRender() {
    if (!this.needsRender) {
      this.needsRender = true;
      requestAnimationFrame(() => {
        this.world.style.transform = 
          `translate3d(${this.pan.x}px, ${this.pan.y}px, 0) scale(${this.zoom})`;
        this.needsRender = false;
      });
    }
  }
}

// Initialize
const board = document.getElementById('investigation-board');
const world = document.getElementById('board-world');
const gestures = new BoardGestureSystem(board, world);
```

---

## Sources

- [MDN: Pointer Events / Pinch Zoom Gestures](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Pinch_zoom_gestures)
- [MDN: CSS touch-action](https://developer.mozilla.org/Web/CSS/touch-action)
- [tldraw: Input Handling Documentation](https://tldraw.dev/sdk-features/input-handling)
- [tldraw: A Touchy Subject (blog)](https://tldraw.dev/blog/a-touchy-subject)
- [tldraw: WCAG Accessibility Megathread](https://github.com/tldraw/tldraw/issues/5215)
- [Steve Ruiz: Dead Zone Dragging](https://www.steveruiz.me/posts/dead-zone)
- [Tiger Abrodi: Trackpad Pinch-to-Zoom vs Two-Finger Scroll](https://tigerabrodi.blog/how-to-handle-trackpad-pinch-to-zoom-vs-two-finger-scroll-in-javascript-canvas-apps)
- [Google Maps: Cooperative Gesture Handling](https://developers.google.com/maps/documentation/javascript/examples/interaction-cooperative)
- [Google: Smart Scrolling for Mobile Web Maps](https://mapsplatform.google.com/resources/blog/smart-scrolling-comes-to-mobile-web-maps/)
- [Chrome DevBlog: overscroll-behavior](https://developer.chrome.com/blog/overscroll-behavior)
- [Excalidraw: Mobile Support Discussion](https://github.com/excalidraw/excalidraw/issues/794)
- [Excalidraw: Touch Device Support Meta Issue](https://github.com/excalidraw/excalidraw/issues/9705)
- [Miro: Using with Mouse/Trackpad/Touchscreen](https://help.miro.com/hc/en-us/articles/360017731053)
- [Apple HIG: UI Design Tips](https://developer.apple.com/design/tips/)
- [Material Design: Touch Targets](https://material.io/develop/web/components/touchtarget/)
- [NN/g: Touch Target Size Research](https://www.nngroup.com/articles/touch-target-size/)
- [Smashing Magazine: GPU Animation Done Right](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right)
- [Google: Compositor-Only Properties](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count)
- [TestParty: Mobile Accessibility Patterns](https://testparty.ai/blog/mobile-accessibility-patterns)
- [motion.dev: Drag Controls](https://motion.dev/docs/react-use-drag-controls) (3px default threshold)
- [BBC: Target Touch Size Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size)
- [WCAG 2.1 Specification](https://www.w3.org/TR/WCAG21/)

---

*Document size: ~35KB | Last updated: 2026-08-28*
