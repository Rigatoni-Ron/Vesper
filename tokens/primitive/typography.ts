/**
 * Primitive Typography Tokens
 *
 * Raw typographic values — sizes, weights, line-heights, letter-spacings,
 * and font family stacks. Consumed by semantic typography tokens.
 */

export const typographyPrimitive = {

  // ─── Font Families ───────────────────────────────────────────────────────────
  fontFamily: {
    sans:  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    mono:  '"JetBrains Mono", "Fira Code", "Cascadia Code", "Roboto Mono", "SF Mono", Menlo, Monaco, Consolas, monospace',
  },

  // ─── Font Sizes (rem) ────────────────────────────────────────────────────────
  // 1rem = 16px base. Scale follows a minor-third (1.25) ratio with manual
  // adjustments for practical UI use.
  fontSize: {
    "2xs": "0.625rem",   //  10px
    xs:    "0.6875rem",  //  11px
    sm:    "0.75rem",    //  12px
    md:    "0.8125rem",  //  13px
    base:  "0.875rem",   //  14px  ← default body
    lg:    "1rem",       //  16px
    xl:    "1.125rem",   //  18px
    "2xl": "1.25rem",    //  20px
    "3xl": "1.5rem",     //  24px
    "4xl": "1.875rem",   //  30px
    "5xl": "2.25rem",    //  36px
    "6xl": "3rem",       //  48px
    "7xl": "3.75rem",    //  60px
    "8xl": "4.5rem",     //  72px
  },

  // ─── Font Weights ────────────────────────────────────────────────────────────
  fontWeight: {
    regular:    "400",
    medium:     "500",
    semibold:   "600",
    bold:       "700",
    extrabold:  "800",
  },

  // ─── Line Heights ────────────────────────────────────────────────────────────
  // Unitless ratios. Tighter for headings, looser for body copy.
  lineHeight: {
    none:     "1",
    tight:    "1.2",
    snug:     "1.375",
    normal:   "1.5",
    relaxed:  "1.625",
    loose:    "2",
  },

  // ─── Letter Spacing (em) ─────────────────────────────────────────────────────
  letterSpacing: {
    tighter:  "-0.05em",
    tight:    "-0.025em",
    normal:   "0em",
    wide:     "0.025em",
    wider:    "0.05em",
    widest:   "0.1em",
    // Useful for all-caps labels / overlines
    caps:     "0.08em",
  },

  // ─── Paragraph Spacing ───────────────────────────────────────────────────────
  // Used between paragraphs in long-form content.
  paragraphSpacing: {
    none: "0",
    sm:   "0.75em",
    md:   "1em",
    lg:   "1.5em",
  },

} as const;

export type TypographyPrimitive = typeof typographyPrimitive;
