/**
 * Primitive Spacing Tokens
 *
 * 4px base-unit scale. Every value is a multiple of 4px to ensure
 * pixel-perfect alignment across components. Consumed by semantic tokens
 * and used directly for margin, padding, gap, and layout.
 */

export const spacingPrimitive = {

  //            rem        px
  0:    "0px",           //  0
  px:   "1px",           //  1  (hairline)
  0.5:  "0.125rem",      //  2
  1:    "0.25rem",       //  4
  1.5:  "0.375rem",      //  6
  2:    "0.5rem",        //  8
  2.5:  "0.625rem",      //  10
  3:    "0.75rem",       //  12
  3.5:  "0.875rem",      //  14
  4:    "1rem",          //  16
  5:    "1.25rem",       //  20
  6:    "1.5rem",        //  24
  7:    "1.75rem",       //  28
  8:    "2rem",          //  32
  9:    "2.25rem",       //  36
  10:   "2.5rem",        //  40
  11:   "2.75rem",       //  44
  12:   "3rem",          //  48
  14:   "3.5rem",        //  56
  16:   "4rem",          //  64
  18:   "4.5rem",        //  72
  20:   "5rem",          //  80
  24:   "6rem",          //  96
  28:   "7rem",          //  112
  32:   "8rem",          //  128
  36:   "9rem",          //  144
  40:   "10rem",         //  160
  44:   "11rem",         //  176
  48:   "12rem",         //  192
  56:   "14rem",         //  224
  64:   "16rem",         //  256
  72:   "18rem",         //  288
  80:   "20rem",         //  320
  96:   "24rem",         //  384

} as const;

export type SpacingPrimitive = typeof spacingPrimitive;
