/**
 * Primitive Elevation Tokens
 *
 * Shadow definitions for dark-mode surfaces. Dark mode shadows are subtle —
 * depth is primarily communicated through background layering (bg-base →
 * bg-surface → bg-elevated) rather than heavy drop shadows. Shadows here
 * add soft edge definition and perceived lift.
 *
 * Each level defines:
 *   - boxShadow: CSS box-shadow value
 *   - dropShadow: CSS filter drop-shadow (useful for SVG / non-rectangular shapes)
 */

export const elevationPrimitive = {

  none: {
    boxShadow:  "none",
    dropShadow: "none",
  },

  // Hairline lift — floating labels, badge overlaps
  xs: {
    boxShadow:  "0px 1px 2px rgba(0, 0, 0, 0.4)",
    dropShadow: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4))",
  },

  // Cards, input focus rings, inline menus
  sm: {
    boxShadow:  "0px 1px 3px rgba(0, 0, 0, 0.5), 0px 1px 2px rgba(0, 0, 0, 0.36)",
    dropShadow: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.5))",
  },

  // Dropdowns, tooltips, command palettes
  md: {
    boxShadow:  "0px 4px 8px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.36)",
    dropShadow: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5))",
  },

  // Popovers, floating toolbars
  lg: {
    boxShadow:  "0px 8px 16px rgba(0, 0, 0, 0.56), 0px 4px 8px rgba(0, 0, 0, 0.4)",
    dropShadow: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.56))",
  },

  // Modals, drawers, sheets
  xl: {
    boxShadow:  "0px 16px 32px rgba(0, 0, 0, 0.64), 0px 8px 16px rgba(0, 0, 0, 0.48)",
    dropShadow: "drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.64))",
  },

  // Full-page overlays, dialogs
  "2xl": {
    boxShadow:  "0px 24px 48px rgba(0, 0, 0, 0.72), 0px 12px 24px rgba(0, 0, 0, 0.56)",
    dropShadow: "drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.72))",
  },

  // ─── Inset Shadows ────────────────────────────────────────────────────────
  // Used inside inputs, wells, and pressed-state surfaces.
  inset: {
    sm: "inset 0px 1px 2px rgba(0, 0, 0, 0.4)",
    md: "inset 0px 2px 4px rgba(0, 0, 0, 0.5)",
    lg: "inset 0px 4px 8px rgba(0, 0, 0, 0.6)",
  },

  // ─── Glow / Halo (for primary CTA elements) ───────────────────────────────
  // Violet ambient glow matching the primary CTA (#6d28d9 / violet.700).
  // Higher opacity compensates for the darker base colour on dark surfaces.
  glow: {
    lilac: {
      sm: "0px 0px 10px rgba(109, 40, 217, 0.45)",
      md: "0px 0px 18px rgba(109, 40, 217, 0.5), 0px 0px 5px rgba(109, 40, 217, 0.55)",
      lg: "0px 0px 36px rgba(109, 40, 217, 0.55), 0px 0px 10px rgba(109, 40, 217, 0.65)",
    },
  },

} as const;

export type ElevationPrimitive = typeof elevationPrimitive;
