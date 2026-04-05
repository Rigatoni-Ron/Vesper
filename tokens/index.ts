/**
 * Dark Mode Design System — Token Barrel
 *
 * Single import point for all tokens.
 *
 *   import { tokens } from "./tokens"
 *   import { colorSemantic, textStyle } from "./tokens/semantic"
 *   import { colorPrimitive } from "./tokens/primitive"
 */

// ─── Primitive ────────────────────────────────────────────────────────────────
export * from "./primitive";
export * as primitive from "./primitive";

// ─── Semantic ─────────────────────────────────────────────────────────────────
export * from "./semantic";
export * as semantic from "./semantic";

// ─── Convenience bundle ───────────────────────────────────────────────────────
import {
  colorPrimitive,
  typographyPrimitive,
  spacingPrimitive,
  radiusPrimitive,
  elevationPrimitive,
} from "./primitive";

import {
  colorSemantic,
  fontFamily,
  textStyle,
  spacingSemantic,
  radiusSemantic,
  elevationSemantic,
} from "./semantic";

export const tokens = {
  primitive: {
    color:      colorPrimitive,
    typography: typographyPrimitive,
    spacing:    spacingPrimitive,
    radius:     radiusPrimitive,
    elevation:  elevationPrimitive,
  },
  semantic: {
    color:      colorSemantic,
    fontFamily,
    textStyle,
    spacing:    spacingSemantic,
    radius:     radiusSemantic,
    elevation:  elevationSemantic,
  },
} as const;

export type Tokens = typeof tokens;
