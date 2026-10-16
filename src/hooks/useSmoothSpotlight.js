/**
 * Smooth Spotlight Tracker Hook / Utility
 * Linear interpolation (lerp) engine for cursor-following spotlights.
 * Completely eliminates abrupt jumps, jitter, and frantic tracking.
 * 
 * Easing: 0.08 - 0.09 factor creates a luxurious, slightly delayed fluid follow
 * that glides smoothly behind the cursor and settles softly.
 */

const activeTrackers = new WeakMap();

export function createSmoothSpotlight(options = {}) {
  const {
    lerpFactor = 0.085, // Smooth, slightly delayed tracking
    propertyPrefix = "--spotlight"
  } = options;

  const isReducedMotion = () => {
    return (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  };

  const handleMouseEnter = (e) => {
    if (isReducedMotion()) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let state = activeTrackers.get(el);
    if (!state) {
      state = {
        currentX: x,
        currentY: y,
        targetX: x,
        targetY: y,
        rafId: null,
        isHovered: true,
        leaveTimer: null
      };
      activeTrackers.set(el, state);
    } else {
      if (state.leaveTimer) {
        clearTimeout(state.leaveTimer);
        state.leaveTimer = null;
      }
      state.isHovered = true;
      state.targetX = x;
      state.targetY = y;
    }

    el.style.setProperty(`${propertyPrefix}-x`, `${x}px`);
    el.style.setProperty(`${propertyPrefix}-y`, `${y}px`);

    startLoop(el, state);
  };

  const handleMouseMove = (e) => {
    if (isReducedMotion()) return;
    const el = e.currentTarget;
    let state = activeTrackers.get(el);
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!state) {
      state = {
        currentX: x,
        currentY: y,
        targetX: x,
        targetY: y,
        rafId: null,
        isHovered: true,
        leaveTimer: null
      };
      activeTrackers.set(el, state);
    } else {
      state.targetX = x;
      state.targetY = y;
      state.isHovered = true;
    }

    if (!state.rafId) {
      startLoop(el, state);
    }
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    const state = activeTrackers.get(el);
    if (!state) return;

    state.isHovered = false;

    // Do NOT remove properties immediately to avoid sudden snap/teleport while CSS opacity fades out.
    // The spotlight gracefully settles at its last interpolated position.
    state.leaveTimer = setTimeout(() => {
      if (!state.isHovered) {
        if (state.rafId) {
          cancelAnimationFrame(state.rafId);
          state.rafId = null;
        }
        el.style.removeProperty(`${propertyPrefix}-x`);
        el.style.removeProperty(`${propertyPrefix}-y`);
        activeTrackers.delete(el);
      }
    }, 550);
  };

  function startLoop(el, state) {
    if (state.rafId) return;

    const tick = () => {
      const dx = state.targetX - state.currentX;
      const dy = state.targetY - state.currentY;

      state.currentX += dx * lerpFactor;
      state.currentY += dy * lerpFactor;

      el.style.setProperty(`${propertyPrefix}-x`, `${state.currentX.toFixed(2)}px`);
      el.style.setProperty(`${propertyPrefix}-y`, `${state.currentY.toFixed(2)}px`);

      // Continue animating while hovered or until settled within fractional pixel
      if (state.isHovered || Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        state.rafId = requestAnimationFrame(tick);
      } else {
        state.rafId = null;
      }
    };

    state.rafId = requestAnimationFrame(tick);
  }

  return {
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
}
