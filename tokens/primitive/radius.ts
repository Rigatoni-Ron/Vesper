/**
 * Primitive Border Radius Tokens
 *
 * A progressive scale from sharp to fully circular.
 * Sleek dark interfaces trend toward sm–md radii for most surfaces,
 * reserving lg+ for modals, cards, and prominent containers.
 */

export const radiusPrimitive = {

  none:  "0px",        // Sharp / no rounding
  xs:    "2px",        // Subtle — tags, badges, inline elements
  sm:    "4px",        // Buttons (compact), inputs
  md:    "6px",        // Default — most interactive elements
  lg:    "8px",        // Cards, dropdowns, popovers
  xl:    "12px",       // Modals, sheets, prominent panels
  "2xl": "16px",       // Large containers, feature cards
  "3xl": "24px",       // Hero sections, decorative containers
  full:  "9999px",     // Pills, avatars, chips, loaders

} as const;

export type RadiusPrimitive = typeof radiusPrimitive;
