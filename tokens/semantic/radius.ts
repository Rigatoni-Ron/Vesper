/**
 * Semantic Border Radius Tokens — Dark Mode
 *
 * Maps primitive radius values to component roles.
 * Keeps the system coherent — changing a semantic alias updates
 * all components that reference it simultaneously.
 */

import { radiusPrimitive as r } from "../primitive/radius";

export const radiusSemantic = {

  // ─── Interactive Elements ─────────────────────────────────────────────────────
  button: {
    sm:   r.sm,      // 4px  — compact / icon-only button
    md:   r.md,      // 6px  — default button
    lg:   r.lg,      // 8px  — large button
    pill: r.full,    // pill / rounded button variant
  },

  input: {
    default: r.md,   // 6px  — text inputs, selects, textareas
    sm:      r.sm,   // 4px  — compact inputs in dense layouts
  },

  badge: {
    default: r.sm,   // 4px  — status badges with text
    pill:    r.full, // pill shape for count badges, tags
  },

  // ─── Container Surfaces ───────────────────────────────────────────────────────
  card: {
    sm:   r.md,      // 6px  — dense / list-style cards
    md:   r.lg,      // 8px  — default card
    lg:   r.xl,      // 12px — feature cards, prominent panels
  },

  panel: {
    sm:  r.md,       // 6px  — inline sub-panels, code blocks
    md:  r.lg,       // 8px  — sidebar sections, widget panels
    lg:  r.xl,       // 12px — full-width panels
  },

  // ─── Overlays ─────────────────────────────────────────────────────────────────
  dropdown:   r.lg,  // 8px  — menus, select dropdowns, comboboxes
  tooltip:    r.sm,  // 4px  — tooltips (keep tight / minimal)
  popover:    r.lg,  // 8px  — rich popovers, floating cards
  modal:      r.xl,  // 12px — dialog modals
  sheet:      r["2xl"], // 16px — bottom / side sheets

  // ─── Media & Decorative ───────────────────────────────────────────────────────
  avatar: {
    sm:     r.sm,    // 4px  — 24px avatar in compact contexts
    md:     r.md,    // 6px  — 32px avatar
    lg:     r.lg,    // 8px  — 40px avatar
    circle: r.full,  // circular avatar
  },

  image:        r.lg,    // 8px  — default image rounding
  thumbnail:    r.md,    // 6px  — small thumbnails

  // ─── Utility ─────────────────────────────────────────────────────────────────
  none:   r.none,
  full:   r.full,

} as const;

export type RadiusSemantic = typeof radiusSemantic;
