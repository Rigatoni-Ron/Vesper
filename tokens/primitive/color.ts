/**
 * Primitive Color Tokens
 *
 * Raw color values organized into ramps (50–950).
 * These are not consumed directly in UI — use semantic tokens instead.
 * All ramps follow a perceptually-uniform progression.
 */

export const colorPrimitive = {

  // ─── Neutral ────────────────────────────────────────────────────────────────
  // Vercel-inspired near-black to white scale. Backgrounds live at the dark end;
  // foreground text lives at the light end.
  neutral: {
    0:    "#000000",
    50:   "#080808",
    100:  "#0f0f0f",
    150:  "#141414",
    200:  "#1a1a1a",
    250:  "#222222",
    300:  "#2a2a2a",
    350:  "#333333",
    400:  "#3d3d3d",
    450:  "#4a4a4a",
    500:  "#575757",
    550:  "#666666",
    600:  "#777777",
    650:  "#8c8c8c",
    700:  "#a0a0a0",
    750:  "#b3b3b3",
    800:  "#c4c4c4",
    850:  "#d4d4d4",
    900:  "#e3e3e3",
    950:  "#f0f0f0",
    1000: "#ffffff",
  },

  // ─── Lilac / Violet (Primary CTA) ───────────────────────────────────────────
  // Soft purple-violet ramp. In dark mode the CTA lives around 300–400
  // for sufficient contrast on dark surfaces while staying vibrant.
  lilac: {
    50:  "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764",
  },

  // ─── Red (Destructive / Error) ───────────────────────────────────────────────
  red: {
    50:  "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519",
  },

  // ─── Green (Success / Positive) ──────────────────────────────────────────────
  green: {
    50:  "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },

  // ─── Amber / Orange (Warning) ────────────────────────────────────────────────
  // Shifted toward orange (hue ~25°) rather than yellow.
  amber: {
    50:  "#fff7ed",
    100: "#ffedd5",
    200: "#fdd5a0",
    300: "#fcb46a",
    400: "#f99030",
    500: "#f77018",
    600: "#e85c0a",
    700: "#c2480a",
    800: "#9a3810",
    900: "#7c2e10",
    950: "#421407",
  },

  // ─── Blue (Informational) ────────────────────────────────────────────────────
  blue: {
    50:  "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },

  // ─── Alpha (black/white overlays) ────────────────────────────────────────────
  // Useful for hover/press states, overlays, and scrim layers.
  blackAlpha: {
    50:  "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.08)",
    200: "rgba(0, 0, 0, 0.12)",
    300: "rgba(0, 0, 0, 0.18)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)",
  },

  whiteAlpha: {
    50:  "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.08)",
    200: "rgba(255, 255, 255, 0.12)",
    300: "rgba(255, 255, 255, 0.18)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)",
  },

} as const;

export type ColorPrimitive = typeof colorPrimitive;
