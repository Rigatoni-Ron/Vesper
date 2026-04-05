/**
 * Semantic Color Tokens — Dark Mode
 *
 * Maps primitive color values to intent-based roles.
 * Components should ONLY reference semantic tokens, never primitives directly.
 * This allows themes to swap without touching component code.
 *
 * Naming convention:  {category}-{role}-{variant?}
 */

import { colorPrimitive as p } from "../primitive/color";

export const colorSemantic = {

  // ─── Backgrounds ─────────────────────────────────────────────────────────────
  // Layered from deepest (canvas) upward. Each step is ~1 stop lighter,
  // creating depth without heavy shadows — the Vercel paradigm.
  bg: {
    canvas:     p.neutral[50],    // #080808  — outermost page/app background
    base:       p.neutral[100],   // #0f0f0f  — primary content area
    surface:    p.neutral[150],   // #141414  — cards, panels, sidebars
    elevated:   p.neutral[200],   // #1a1a1a  — dropdowns, popovers, tooltips
    overlay:    p.neutral[250],   // #222222  — modals, sheets
    inverse:    p.neutral[950],   // #f0f0f0  — inverted surfaces (rare)
    // Hover / active layer tints (applied on top of current surface)
    hover:      p.whiteAlpha[50], // 4% white overlay
    active:     p.whiteAlpha[100],// 8% white overlay
    selected:   "rgba(109, 40, 217, 0.12)", // violet tint for selection state
  },

  // ─── Borders ─────────────────────────────────────────────────────────────────
  // Hairline borders define surfaces. Keep them barely perceptible on dark bg.
  border: {
    subtlest:  p.neutral[200],    // #1a1a1a  — dividers within a surface
    subtle:    p.neutral[300],    // #2a2a2a  — default card/panel edge
    default:   p.neutral[350],    // #333333  — inputs, form fields at rest
    strong:    p.neutral[450],    // #4a4a4a  — focused inputs, active containers
    inverse:   p.neutral[800],    // #c4c4c4  — borders on inverted surfaces
    // Interactive states
    focus:     "#c084fc",         // lilac.400 — keyboard focus ring
    error:     p.red[500],
    success:   p.green[500],
    warning:   p.amber[500],
  },

  // ─── Foreground / Text ───────────────────────────────────────────────────────
  text: {
    primary:    p.neutral[950],   // #f0f0f0  — headings, primary body
    secondary:  p.neutral[700],   // #a0a0a0  — secondary body, labels
    tertiary:   p.neutral[600],   // #777777  — placeholders, helper text
    disabled:   p.neutral[450],   // #4a4a4a  — disabled states
    inverse:    p.neutral[100],   // #0f0f0f  — text on light/inverted surfaces
    link:       "#c084fc",        // lilac.400
    linkHover:  "#d8b4fe",        // lilac.300
    // Status
    error:      p.red[400],
    success:    p.green[400],
    warning:    p.amber[400],
    info:       p.blue[400],
  },

  // ─── Icon ─────────────────────────────────────────────────────────────────────
  icon: {
    primary:   p.neutral[900],    // #e3e3e3
    secondary: p.neutral[650],    // #8c8c8c
    tertiary:  p.neutral[500],    // #575757
    disabled:  p.neutral[400],    // #3d3d3d
    inverse:   p.neutral[150],    // #141414
    // Status
    error:     p.red[400],
    success:   p.green[400],
    warning:   p.amber[400],
    info:      p.blue[400],
    // Brand
    brand:     "#c084fc",         // lilac.400
  },

  // ─── Primary (CTA) — Dark Violet ─────────────────────────────────────────────
  // All filled-button states are verified against #ffffff text.
  // Default and active meet WCAG AAA (≥ 7:1); hover meets AA (≥ 4.5:1).
  primary: {
    bg:         "#6d28d9",        // violet.700 — 7.10:1 ✓ WCAG AAA
    bgHover:    "#7c3aed",        // violet.600 — 5.70:1 ✓ WCAG AA  (transient)
    bgActive:   "#5b21b6",        // violet.800 — 8.98:1 ✓ WCAG AAA
    bgSubtle:   "rgba(109, 40, 217, 0.12)",  // translucent bg for ghost/secondary
    bgSubtleHover: "rgba(109, 40, 217, 0.18)",
    fg:         p.neutral[1000],  // #ffffff   — label on filled primary button
    fgSubtle:   "#c084fc",        // lilac.400 — 7.28:1 on bg-base ✓ WCAG AAA
    border:     "#6d28d9",        // violet.700
    borderHover: "#7c3aed",       // violet.600
  },

  // ─── Destructive / Danger ────────────────────────────────────────────────────
  destructive: {
    bg:         p.red[600],
    bgHover:    p.red[500],
    bgActive:   p.red[700],
    bgSubtle:   "rgba(244, 63, 94, 0.12)",
    bgSubtleHover: "rgba(244, 63, 94, 0.18)",
    fg:         p.neutral[1000],
    fgSubtle:   p.red[400],
    border:     p.red[600],
    borderHover: p.red[500],
  },

  // ─── Success ─────────────────────────────────────────────────────────────────
  success: {
    bg:         p.green[600],
    bgHover:    p.green[500],
    bgSubtle:   "rgba(34, 197, 94, 0.12)",
    fg:         p.neutral[1000],
    fgSubtle:   p.green[400],
    border:     p.green[600],
  },

  // ─── Warning ─────────────────────────────────────────────────────────────────
  warning: {
    bg:         p.amber[500],
    bgHover:    p.amber[400],
    bgSubtle:   "rgba(247, 112, 24, 0.12)",
    fg:         p.neutral[0],
    fgSubtle:   p.amber[400],
    border:     p.amber[500],
  },

  // ─── Info ────────────────────────────────────────────────────────────────────
  info: {
    bg:         p.blue[600],
    bgHover:    p.blue[500],
    bgSubtle:   "rgba(59, 130, 246, 0.12)",
    fg:         p.neutral[1000],
    fgSubtle:   p.blue[400],
    border:     p.blue[600],
  },

  // ─── Neutral Interactive ─────────────────────────────────────────────────────
  // For secondary buttons, ghost actions, and neutral states.
  neutral: {
    bg:         p.neutral[200],
    bgHover:    p.neutral[300],
    bgActive:   p.neutral[350],
    bgSubtle:   p.whiteAlpha[50],
    bgSubtleHover: p.whiteAlpha[100],
    fg:         p.neutral[950],
    fgSubtle:   p.neutral[700],
    border:     p.neutral[350],
    borderHover: p.neutral[500],
  },

  // ─── Code Surfaces ───────────────────────────────────────────────────────────
  // For inline code, code blocks, and terminal-style elements.
  code: {
    bg:         p.neutral[150],
    bgBlock:    p.neutral[100],
    border:     p.neutral[250],
    fg:         "#d8b4fe",        // lilac.300 — default code text
    fgPunctuation: p.neutral[600],
    fgKeyword:  "#c084fc",        // lilac.400
    fgString:   p.green[300],
    fgNumber:   p.amber[300],  // #fcb46a — orange tint in code
    fgComment:  p.neutral[550],
  },

} as const;

export type ColorSemantic = typeof colorSemantic;
