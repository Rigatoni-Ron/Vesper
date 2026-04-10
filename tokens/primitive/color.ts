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

  // ─── Iris (Primary CTA) ──────────────────────────────────────────────────────
  // Muted blue-violet ramp (~252° hue) — sits between indigo and violet.
  // Desaturated for sophistication. CTA lives at 700 for AA contrast on dark.
  iris: {
    50:  "#f4f3ff",
    100: "#ece9fe",
    200: "#dbd6fd",
    300: "#c0b8fc",
    400: "#a296f8",
    500: "#8477f2",
    600: "#6e5fe8",
    700: "#5c4dd0",
    800: "#4b3faf",
    900: "#3d3490",
    950: "#231e54",
  },

  // ─── Red (Destructive / Error) ───────────────────────────────────────────────
  red: {
    50:  "#fff1f2",
    100: "#ffe2e4",
    200: "#ffc8cc",
    300: "#fda2aa",
    400: "#f87182",
    500: "#ef3d59",
    600: "#d31d42",
    700: "#ae1238",
    800: "#8e1232",
    900: "#79112f",
    950: "#43091a",
  },

  // ─── Green (Success / Positive) ──────────────────────────────────────────────
  green: {
    50:  "#f0fdf4",
    100: "#dcfce8",
    200: "#b8f5ca",
    300: "#82e9a4",
    400: "#4dd47a",
    500: "#22b255",
    600: "#168f42",
    700: "#147836",
    800: "#155f2e",
    900: "#144d27",
    950: "#062b15",
  },

  // ─── Amber / Orange (Warning) ────────────────────────────────────────────────
  // Shifted toward orange (hue ~25°) rather than yellow. Muted for refinement.
  amber: {
    50:  "#fff7ed",
    100: "#ffedce",
    200: "#fcd49a",
    300: "#f8b060",
    400: "#ed8420",
    500: "#d96010",
    600: "#c2510a",
    700: "#a04009",
    800: "#81320d",
    900: "#6a290d",
    950: "#3a1306",
  },

  // ─── Blue (Informational) ────────────────────────────────────────────────────
  blue: {
    50:  "#eff6ff",
    100: "#dbeafe",
    200: "#bdd9fe",
    300: "#8dbef9",
    400: "#5a9ef4",
    500: "#3878ea",
    600: "#1f52d4",
    700: "#1a42b8",
    800: "#1b3796",
    900: "#1b2f76",
    950: "#141d48",
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
