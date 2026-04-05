/**
 * Semantic Typography Tokens — Dark Mode
 *
 * Composed text styles that map to real UI roles.
 * Each style bundles size, weight, line-height, and letter-spacing.
 * Components reference these roles rather than raw primitive values.
 */

import { typographyPrimitive as t } from "../primitive/typography";

// ─── Font Family ──────────────────────────────────────────────────────────────
export const fontFamily = {
  body: t.fontFamily.sans,
  code: t.fontFamily.mono,
} as const;

// ─── Text Styles ──────────────────────────────────────────────────────────────
// Format: { fontSize, fontWeight, lineHeight, letterSpacing }

export const textStyle = {

  // ── Display ─────────────────────────────────────────────────────────────────
  // Hero headings, landing-page headlines
  display: {
    "2xl": {
      fontSize:      t.fontSize["8xl"],
      fontWeight:    t.fontWeight.bold,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.tighter,
    },
    xl: {
      fontSize:      t.fontSize["7xl"],
      fontWeight:    t.fontWeight.bold,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.tighter,
    },
    lg: {
      fontSize:      t.fontSize["6xl"],
      fontWeight:    t.fontWeight.bold,
      lineHeight:    t.lineHeight.tight,
      letterSpacing: t.letterSpacing.tighter,
    },
    md: {
      fontSize:      t.fontSize["5xl"],
      fontWeight:    t.fontWeight.bold,
      lineHeight:    t.lineHeight.tight,
      letterSpacing: t.letterSpacing.tight,
    },
    sm: {
      fontSize:      t.fontSize["4xl"],
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.tight,
      letterSpacing: t.letterSpacing.tight,
    },
    xs: {
      fontSize:      t.fontSize["3xl"],
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.tight,
      letterSpacing: t.letterSpacing.tight,
    },
  },

  // ── Heading ─────────────────────────────────────────────────────────────────
  // Section headers, panel titles, modal headings (h1–h6 equivalents)
  heading: {
    xl: {
      fontSize:      t.fontSize["2xl"],
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.tight,
    },
    lg: {
      fontSize:      t.fontSize.xl,
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.tight,
    },
    md: {
      fontSize:      t.fontSize.lg,
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.normal,
    },
    sm: {
      fontSize:      t.fontSize.base,
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.normal,
    },
    xs: {
      fontSize:      t.fontSize.md,
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.normal,
    },
  },

  // ── Body ────────────────────────────────────────────────────────────────────
  // Paragraph text, descriptions, content areas
  body: {
    xl: {
      fontSize:      t.fontSize.xl,
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.relaxed,
      letterSpacing: t.letterSpacing.normal,
    },
    lg: {
      fontSize:      t.fontSize.lg,
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.relaxed,
      letterSpacing: t.letterSpacing.normal,
    },
    md: {
      fontSize:      t.fontSize.base,   // 14px — Vercel default body size
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.normal,
      letterSpacing: t.letterSpacing.normal,
    },
    sm: {
      fontSize:      t.fontSize.md,     // 13px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.normal,
      letterSpacing: t.letterSpacing.normal,
    },
    xs: {
      fontSize:      t.fontSize.sm,     // 12px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.normal,
      letterSpacing: t.letterSpacing.normal,
    },
  },

  // ── Label ───────────────────────────────────────────────────────────────────
  // Button text, form labels, navigation items, tabs
  label: {
    xl: {
      fontSize:      t.fontSize.lg,
      fontWeight:    t.fontWeight.medium,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.normal,
    },
    lg: {
      fontSize:      t.fontSize.base,
      fontWeight:    t.fontWeight.medium,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.normal,
    },
    md: {
      fontSize:      t.fontSize.md,     // 13px — default button/label size
      fontWeight:    t.fontWeight.medium,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.normal,
    },
    sm: {
      fontSize:      t.fontSize.sm,     // 12px
      fontWeight:    t.fontWeight.medium,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.normal,
    },
    xs: {
      fontSize:      t.fontSize.xs,     // 11px
      fontWeight:    t.fontWeight.medium,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.wide,
    },
  },

  // ── Caption / Helper ────────────────────────────────────────────────────────
  // Form helper text, timestamps, metadata, footnotes
  caption: {
    md: {
      fontSize:      t.fontSize.sm,     // 12px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.normal,
    },
    sm: {
      fontSize:      t.fontSize.xs,     // 11px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.normal,
    },
    xs: {
      fontSize:      t.fontSize["2xs"], // 10px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.snug,
      letterSpacing: t.letterSpacing.wide,
    },
  },

  // ── Overline / Eyebrow ──────────────────────────────────────────────────────
  // Section labels above headings, category tags rendered in all-caps
  overline: {
    md: {
      fontSize:      t.fontSize.xs,     // 11px
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.caps,
      textTransform: "uppercase" as const,
    },
    sm: {
      fontSize:      t.fontSize["2xs"], // 10px
      fontWeight:    t.fontWeight.semibold,
      lineHeight:    t.lineHeight.none,
      letterSpacing: t.letterSpacing.caps,
      textTransform: "uppercase" as const,
    },
  },

  // ── Code ────────────────────────────────────────────────────────────────────
  // Inline code, code blocks, terminal output — CSS: use var(--font-code)
  code: {
    lg: {
      fontFamily:    t.fontFamily.mono,
      fontSize:      t.fontSize.base,   // 14px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.relaxed,
      letterSpacing: t.letterSpacing.normal,
    },
    md: {
      fontFamily:    t.fontFamily.mono,
      fontSize:      t.fontSize.md,     // 13px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.relaxed,
      letterSpacing: t.letterSpacing.normal,
    },
    sm: {
      fontFamily:    t.fontFamily.mono,
      fontSize:      t.fontSize.sm,     // 12px
      fontWeight:    t.fontWeight.regular,
      lineHeight:    t.lineHeight.relaxed,
      letterSpacing: t.letterSpacing.normal,
    },
  },

  // ── Mono UI ─────────────────────────────────────────────────────────────────
  // Monospace type used in UI chrome — token names, metadata, annotations,
  // section markers. Distinct from code blocks: tighter weights & tracking.
  // CSS: var(--font-mono) + individual --mono-{role}-{size}-* properties.
  monoUi: {

    // label — token identifiers, property names, named values (e.g. "--space-4")
    label: {
      md: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize.md,       // 13px
        fontWeight:    t.fontWeight.medium,
        lineHeight:    t.lineHeight.none,
        letterSpacing: t.letterSpacing.normal,
      },
      sm: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize.sm,       // 12px
        fontWeight:    t.fontWeight.medium,
        lineHeight:    t.lineHeight.none,
        letterSpacing: t.letterSpacing.normal,
      },
      xs: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize.xs,       // 11px
        fontWeight:    t.fontWeight.medium,
        lineHeight:    t.lineHeight.none,
        letterSpacing: t.letterSpacing.wide,
      },
    },

    // caption — values, hex codes, px measurements, secondary annotations
    caption: {
      md: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize.sm,       // 12px
        fontWeight:    t.fontWeight.regular,
        lineHeight:    t.lineHeight.snug,
        letterSpacing: t.letterSpacing.normal,
      },
      sm: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize.xs,       // 11px
        fontWeight:    t.fontWeight.regular,
        lineHeight:    t.lineHeight.snug,
        letterSpacing: t.letterSpacing.normal,
      },
      xs: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize["2xs"],   // 10px
        fontWeight:    t.fontWeight.regular,
        lineHeight:    t.lineHeight.snug,
        letterSpacing: t.letterSpacing.normal,
      },
    },

    // overline — section markers & group titles, always rendered uppercase
    overline: {
      md: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize.xs,       // 11px
        fontWeight:    t.fontWeight.semibold,
        lineHeight:    t.lineHeight.none,
        letterSpacing: t.letterSpacing.caps,
        textTransform: "uppercase" as const,
      },
      sm: {
        fontFamily:    t.fontFamily.mono,
        fontSize:      t.fontSize["2xs"],   // 10px
        fontWeight:    t.fontWeight.semibold,
        lineHeight:    t.lineHeight.none,
        letterSpacing: t.letterSpacing.caps,
        textTransform: "uppercase" as const,
      },
    },

  },

} as const;

export type TextStyle = typeof textStyle;
