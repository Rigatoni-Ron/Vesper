/**
 * Semantic Spacing Tokens — Dark Mode
 *
 * Intent-based spacing aliases that map to the primitive scale.
 * Using semantic names makes layouts resilient to base-unit changes
 * and communicates design intent at the component level.
 */

import { spacingPrimitive as s } from "../primitive/spacing";

export const spacingSemantic = {

  // ─── Component Internals ─────────────────────────────────────────────────────
  // Padding / gap within a single component.
  component: {
    // Padding inside compact elements (icon-only buttons, badges, chips)
    paddingXs:  s[1],       //  4px
    paddingSm:  s[1.5],     //  6px
    // Padding inside standard interactive elements (buttons, inputs, tags)
    paddingMd:  s[2],       //  8px
    paddingLg:  s[3],       //  12px
    // Gap between icon and label
    gapXs:      s[1],       //  4px
    gapSm:      s[1.5],     //  6px
    gapMd:      s[2],       //  8px
    // Gap between grouped elements (radio group, checkbox list)
    groupGapSm: s[2],       //  8px
    groupGapMd: s[3],       //  12px
    groupGapLg: s[4],       //  16px
  },

  // ─── Inset (Surface Padding) ──────────────────────────────────────────────────
  // Internal padding of cards, panels, modals, sidebars.
  inset: {
    xs:   s[2],             //  8px   — dense list items
    sm:   s[3],             //  12px  — compact cards, small panels
    md:   s[4],             //  16px  — default card/panel padding
    lg:   s[6],             //  24px  — comfortable cards
    xl:   s[8],             //  32px  — feature cards, prominent panels
    "2xl": s[12],           //  48px  — section padding
  },

  // ─── Stack (Vertical Rhythm) ──────────────────────────────────────────────────
  // Vertical gap between stacked elements (list items, form fields, sections).
  stack: {
    "2xs":  s[0.5],         //  2px   — dense item separator
    xs:     s[1],           //  4px   — label + control
    sm:     s[2],           //  8px   — tightly grouped items
    md:     s[3],           //  12px  — default field gap
    lg:     s[4],           //  16px  — section within a form
    xl:     s[6],           //  24px  — major groups
    "2xl":  s[8],           //  32px  — section-to-section
    "3xl":  s[12],          //  48px  — page sections
    "4xl":  s[16],          //  64px  — hero / major page divisions
  },

  // ─── Inline (Horizontal Gap) ──────────────────────────────────────────────────
  // Horizontal gap between sibling elements in a row.
  inline: {
    "2xs":  s[0.5],         //  2px
    xs:     s[1],           //  4px
    sm:     s[2],           //  8px   — icon + label, breadcrumb items
    md:     s[3],           //  12px  — nav items, toolbar actions
    lg:     s[4],           //  16px  — card row, table cells
    xl:     s[6],           //  24px  — section columns
    "2xl":  s[8],           //  32px
  },

  // ─── Layout ───────────────────────────────────────────────────────────────────
  // Structural whitespace — gutters, margins, page-level spacing.
  layout: {
    gutterSm:     s[4],     //  16px  — mobile inner gutter
    gutter:       s[6],     //  24px  — default inner gutter
    gutterLg:     s[8],     //  32px  — wide-viewport gutter
    sectionSm:    s[12],    //  48px  — section vertical gap (compact)
    section:      s[20],    //  80px  — section vertical gap (default)
    sectionLg:    s[32],    //  128px — section vertical gap (spacious)
    pageMaxWidth: "1280px",
    contentMaxWidth: "720px",
  },

  // ─── Sidebar / Navigation ─────────────────────────────────────────────────────
  sidebar: {
    width:         "240px",
    widthCollapsed: "56px",
    itemPaddingX:  s[3],    //  12px
    itemPaddingY:  s[1.5],  //  6px
    sectionGap:    s[6],    //  24px
  },

  // ─── Hit Target ───────────────────────────────────────────────────────────────
  // Minimum interactive area sizes for accessibility (WCAG 2.5.5).
  hitTarget: {
    sm: "28px",             // Compact: icon buttons in dense toolbars
    md: "32px",             // Default interactive element height
    lg: "36px",             // Standard button / input height
    xl: "40px",             // Prominent buttons
  },

} as const;

export type SpacingSemantic = typeof spacingSemantic;
