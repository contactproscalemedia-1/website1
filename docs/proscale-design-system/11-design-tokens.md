# Design Tokens

## Philosophy

Every visual decision must originate from a token. No arbitrary values unless documented.

This document is the single source of truth for reusable design tokens used across the ProScaleMEDIA website. Any value that appears in layout, typography, color, spacing, motion, or structure should be derived from these tokens rather than introduced inline.

## Color Tokens

### Background

- Purpose: Primary page background for the overall experience.
- Allowed use: Full-page surfaces, room backgrounds, and large sections.
- Not allowed: Use as a text color or as a substitute for surface elevation.

### Surface

- Purpose: Standard content surface for cards, panels, and content blocks.
- Allowed use: Secondary surfaces that need separation from the background.
- Not allowed: Use for primary page layout unless the composition requires a defined content plane.

### Surface Elevated

- Purpose: Slightly more prominent surface state for interactive or important content.
- Allowed use: Hovered cards, selected states, or elevated content blocks.
- Not allowed: Use for large background areas or decorative emphasis.

### Text Primary

- Purpose: Highest-contrast text for headings and core content.
- Allowed use: Headings, body copy, labels, and primary interface text.
- Not allowed: Use for decorative effects or low-contrast emphasis.

### Text Secondary

- Purpose: Secondary supporting copy that should not compete with primary text.
- Allowed use: Supporting copy, metadata, captions, and secondary labels.
- Not allowed: Use for primary headings or main calls to action.

### Text Muted

- Purpose: Minimal emphasis for less important content.
- Allowed use: Subtle metadata, helper text, and tertiary labels.
- Not allowed: Use for main copy or controls that require clear visibility.

### Accent Red

- Purpose: Selective emphasis, action cues, and signal states.
- Allowed use: Buttons, links, highlights, active states, and moments of authority.
- Not allowed: Use as a dominant background color or as a general decorative fill.

### Border

- Purpose: Structural separation between content blocks and interface elements.
- Allowed use: Input outlines, card boundaries, section dividers, and structural edges.
- Not allowed: Use as a substitute for focus states or visual emphasis.

### Divider

- Purpose: Soft structural separation with lower visual intensity than border.
- Allowed use: Section separators, list dividers, and subtle content partitions.
- Not allowed: Use as a primary focus or interactive state.

### Focus Ring

- Purpose: Visible keyboard focus state for interactive elements.
- Allowed use: Buttons, links, inputs, and other focusable controls.
- Not allowed: Use as a general decorative outline outside interactive elements.

## Typography Tokens

### Bebas Neue

#### Display XL

- Purpose: Monumental room-level headlines and primary statements.
- Relative scale: 64px mobile, 96px tablet, 128px desktop.
- Weight: Bold.
- Letter spacing: 0.02em to 0.04em.
- Line height: 0.9 to 1.0.
- Maximum line length: 10 to 12 words.
- Rules: Use for short, high-impact statements. Keep numbers visually prominent. Avoid descriptive copy in the same line if the statement risks becoming too busy.

#### Display L

- Purpose: Section introductions and high-emphasis room headers.
- Relative scale: 48px mobile, 64px tablet, 80px desktop.
- Weight: Bold.
- Letter spacing: 0.02em.
- Line height: 0.95.
- Maximum line length: 12 to 14 words.
- Rules: Prefer concise, declarative language. Reserve for the strongest statements.

#### Display M

- Purpose: Supporting statements and secondary room headlines.
- Relative scale: 36px mobile, 44px tablet, 56px desktop.
- Weight: Bold.
- Letter spacing: 0.01em.
- Line height: 1.0.
- Maximum line length: 14 words.
- Rules: Use sparingly when the content needs arresting hierarchy without full display treatment.

### Inter

#### Heading

- Purpose: Structured section headings and clear content segmentation.
- Relative scale: 24px mobile, 28px tablet, 32px desktop.
- Weight: Semi Bold.
- Letter spacing: -0.01em.
- Line height: 1.2.
- Maximum line length: 60 characters.
- Rules: Use for structured content hierarchy. Keep descriptive copy shorter than headline copy.

#### Body Large

- Purpose: Introductory body copy and stronger supporting text.
- Relative scale: 20px.
- Weight: Regular.
- Letter spacing: 0.
- Line height: 1.6.
- Maximum line length: 70 characters.
- Rules: Use for important explanatory copy. Avoid overusing it in dense layouts.

#### Body

- Purpose: Standard body text for paragraphs and long-form content.
- Relative scale: 16px.
- Weight: Regular.
- Letter spacing: 0.
- Line height: 1.7.
- Maximum line length: 75 characters.
- Rules: This is the default copy style. Use clear sentence structure and avoid unnecessary complexity.

#### Small

- Purpose: Supporting text, metadata, captions, and helper copy.
- Relative scale: 14px.
- Weight: Regular.
- Letter spacing: 0.01em.
- Line height: 1.5.
- Maximum line length: 80 characters.
- Rules: Use for labels and supporting information. Keep it concise.

#### Caption

- Purpose: Very small supporting text and compact metadata.
- Relative scale: 12px.
- Weight: Medium.
- Letter spacing: 0.02em.
- Line height: 1.4.
- Maximum line length: 60 characters.
- Rules: Use only when the content needs a lightweight label or status cue.

#### Label

- Purpose: Interface labels for navigation, forms, and controls.
- Relative scale: 13px.
- Weight: Medium.
- Letter spacing: 0.02em.
- Line height: 1.4.
- Maximum line length: 40 characters.
- Rules: Use consistently for controls and metadata. Keep labels terse and functional.

### Number and Descriptive Copy Rules

- Numbers should receive more visual weight than descriptive words in headings and statements.
- When a sentence includes a metric, a number, or a quantified claim, the number should be visually emphasized through scale, weight, or placement.
- Descriptive copy should remain secondary to the numeric or factual point.
- Avoid combining too many adjectives with numbers in the same heading.

## Spacing Scale

Use spacing tokens consistently to preserve visual rhythm.

- 4: Micro spacing for compact adjustments, icon padding, and small gaps.
- 8: Tight spacing for stacked labels, inline controls, and close content relationships.
- 12: Small but distinct spacing for compact card content and form control gaps.
- 16: Standard spacing for content blocks, button padding, and small interface separations.
- 24: Medium spacing for section internal rhythm and element grouping.
- 32: Large spacing for room content spacing and mid-level layout separation.
- 48: Strong spacing for large content clusters and major card padding.
- 64: Section-level spacing for room separation and prominent vertical rhythm.
- 96: Large section spacing for editorial layouts and broad room transitions.
- 128: Major spacing for large-screen composition and deliberate page breathing room.
- 192: Maximum spacing reserved for large-scale separation between major sections or immersive moments.

## Container Widths

- XS: Tight content areas such as compact labels, short form fields, or narrow supporting content.
- SM: Short content blocks, small cards, and compact content panels.
- MD: Standard content width for body copy, narrative content, and small-to-medium layouts.
- LG: Wider content panels and editorial content that requires more breathing room.
- XL: Broad content sections that need a large reading field without full-bleed treatment.
- Full: Full-width layouts, hero sections, immersive treatments, and wide editorial compositions.

## Border Radius

- 0: Sharp corners for editorial layouts, structural containers, and content requiring authority.
- 4: Small radius for subtle rounded controls where necessary.
- 8: Standard radius for cards and form elements.
- 12: Large radius reserved only for highly intentional interface components.

No rounded decorative shapes are permitted. Decorative curves should be avoided in favor of sharp, architectural forms.

## Borders

- Default: Standard structural border for containers and form controls.
- Strong: More visible border for elevated or interactive states.
- Divider: Minimal border used to separate content without adding visual weight.

## Elevation

Only subtle depth is permitted.

- No dramatic shadows.
- No glow.
- Depth should be expressed through contrast, spacing, and layering rather than heavy shadow systems.

## Opacity

- Disabled: Used for disabled controls and reduced emphasis.
- Muted: Used for secondary or less important content.
- Overlay: Used for screen-level overlays and temporary content emphasis.

## Motion Tokens

Use the existing easing and duration tokens as the system-wide motion source of truth.

- `--ease-verdict`: Use for major room entry and high-value transitions.
- `--ease-cut`: Use for abrupt or decisive transitions that need a sharp ending.
- `--ease-neutral`: Use for standard interface feedback and subtle state changes.
- `--dur-tap`: Use for tap and press feedback.
- `--dur-hover`: Use for hover transitions.
- `--dur-reveal`: Use for content reveal and section entry.
- `--dur-room`: Use for room-level transitions.
- `--dur-opening`: Use for the opening experience and its initial reveal.

## Z-Index Hierarchy

- Navigation: Lowest interface layer for persistent navigation.
- Modal: Highest layered UI for temporary, focused content.
- Overlay: Layer for dimmed or blocking surfaces.
- Toast: Temporary feedback layer for short-lived messages.
- Tooltip: Lightweight contextual layer for hover or focus guidance.

## General Rules

- Never invent values.
- Prefer tokens over custom CSS.
- If a new token is required, document it before implementation.
- Do not introduce one-off values for layout, spacing, color, or motion that are not traceable to the token system.
