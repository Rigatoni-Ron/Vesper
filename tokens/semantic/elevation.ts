/**
 * Semantic Elevation Tokens — Dark Mode
 *
 * Maps raw shadow values to z-axis layer roles.
 * In dark mode, layering is achieved primarily through background steps;
 * shadows add edge definition and perceived lift rather than depth illusion.
 */

import { elevationPrimitive as e } from "../primitive/elevation";

export const elevationSemantic = {

  // ─── Surfaces ────────────────────────────────────────────────────────────────
  // Applied to surface containers to visually separate them from the canvas.
  surface: {
    flat:     e.none,     // bg-surface — no extra shadow, bg step alone suffices
    raised:   e.sm,       // cards on bg-base
    floating: e.md,       // sticky headers, floating action bars
  },

  // ─── Overlays ────────────────────────────────────────────────────────────────
  dropdown:    e.md,      // menus, comboboxes, selects
  tooltip:     e.md,      // tooltips, status callouts
  popover:     e.lg,      // rich popovers, mini-dialogs
  modal:       e.xl,      // blocking dialogs, confirmations
  sheet:       e.xl,      // bottom / side drawers
  commandPalette: e["2xl"], // cmd+k overlay — highest z-layer

  // ─── Interactive States ───────────────────────────────────────────────────────
  // Focus ring for keyboard navigation — uses the lilac glow
  focusRing:   e.glow.lilac.sm,

  // Primary CTA button glow (hover / active state)
  ctaHover:    e.glow.lilac.md,
  ctaActive:   e.glow.lilac.sm,

  // ─── Input States ─────────────────────────────────────────────────────────────
  input: {
    default: e.none,
    focus:   e.glow.lilac.sm,
    error:   "0px 0px 8px rgba(244, 63, 94, 0.3)",   // red glow on error
  },

  // ─── Inset Wells ─────────────────────────────────────────────────────────────
  inset: {
    sm: e.inset.sm,       // shallow input wells, pressed buttons
    md: e.inset.md,       // code blocks, terminal areas
    lg: e.inset.lg,       // deep sunken containers
  },

} as const;

export type ElevationSemantic = typeof elevationSemantic;
