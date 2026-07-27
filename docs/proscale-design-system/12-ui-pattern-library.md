# UI Pattern Library

This document defines reusable interface primitives for the ProScaleMEDIA experience. Every primitive should be implemented from the design tokens and used consistently across the site.

## Buttons

### Primary

- Purpose: High-significance actions that move the experience forward.
- Sizing: Standard button size for primary room actions and prominent CTAs.
- Padding: Horizontal and vertical spacing derived from the spacing token system.
- Hover: Subtle state change using color, background, or opacity rather than decorative motion.
- Focus: Visible focus ring in the approved focus color.
- Disabled: Reduced contrast and disabled interaction state.
- Loading: Show a loading state without changing layout.

### Secondary

- Purpose: Supporting actions that complement a primary action.
- Sizing: Same general scale as the primary button, but with lower emphasis.
- Padding: Derived from spacing tokens.
- Hover: Subtle contrast shift or surface change.
- Focus: Clear visible focus ring.
- Disabled: Reduced contrast and disabled interaction state.
- Loading: Show a restrained loading indication.

### Ghost

- Purpose: Low-emphasis actions that should not compete with primary content.
- Sizing: Compact or standard depending on context.
- Padding: Minimal but accessible spacing.
- Hover: Minimal background or text change.
- Focus: Visible and non-intrusive focus ring.
- Disabled: Reduced emphasis and clear disabled affordance.
- Loading: Show a neutral loading state without visual noise.

### Text

- Purpose: Inline actions, links, and low-emphasis navigation.
- Sizing: Inline sizing based on surrounding content.
- Padding: No heavy padding by default.
- Hover: Underline or color change only.
- Focus: Visible focus treatment that does not disturb layout.
- Disabled: Remove interactive affordance and present as static content.
- Loading: Avoid loading states unless the action is process-driven.

### Accessibility Notes

- All buttons must have a visible focus state.
- Use clear labels rather than icon-only actions when the action is important.
- Do not rely on color alone to communicate state.

## Headings

### Eyebrow

- Purpose: Compact framing label above a section or room.
- Use when: The section needs a short label or introduction.
- Do not use when: A stronger, more prominent heading is already sufficient.

### Section Title

- Purpose: Clear content section naming.
- Use when: The page needs a strong subsection hierarchy.
- Do not use when: The heading would be redundant with the room title.

### Display

- Purpose: Large room or section statement headlines.
- Use when: The page needs a high-impact presentation.
- Do not use when: The text should remain compact or informational.

### Metric

- Purpose: Highlight a measurable fact or result.
- Use when: The content is quantitative and should carry emphasis.
- Do not use when: The content is conceptual or qualitative.

## Body Text

Body text should remain readable and restrained. Use it for explanation, proof, or supporting detail. Avoid large blocks of dense text unless the content requires it.

## CTA Groups

CTA groups should be composed of one primary action and, when necessary, a secondary action. Keep the group visually ordered and avoid competing emphasis.

## Containers

### Standard

- Purpose: General content container for narrative or informational blocks.
- Use when: Standard page structure is needed.
- Do not use when: The content requires a more editorial or immersive layout.

### Editorial

- Purpose: Content blocks that need more negative space and stronger hierarchy.
- Use when: The experience should feel architectural and authoritative.
- Do not use when: The content is utility-based or highly interactive.

### Wide

- Purpose: Broad content areas for larger text blocks or supporting layouts.
- Use when: The content benefits from more horizontal space.
- Do not use when: The content should remain compact.

### Full Bleed

- Purpose: Immersive sections that span the available width.
- Use when: The experience needs impact or a stronger visual statement.
- Do not use when: The content requires a contained reading width.

## Cards

### Evidence Card

- Purpose: Present proof, evidence, or explanation of a point.
- Use when: A compact block of supporting content needs emphasis.
- Do not use when: The content would be better expressed as a full section.

### Metric Card

- Purpose: Highlight a quantitative or comparative fact.
- Use when: The design needs to foreground metrics clearly.
- Do not use when: The metric is not significant enough to merit a distinct card.

### Case Study Card

- Purpose: Summarize a case, approach, or capability.
- Use when: The content benefits from a compact, structured preview.
- Do not use when: The content is sensitive, incomplete, or unapproved.

## Statistics

### Large Number

- Purpose: Emphasize a measurable value.
- Use when: The number is the primary point.
- Do not use when: The number is secondary to surrounding narrative.

### Supporting Label

- Purpose: Clarify the meaning of a statistic.
- Use when: The value needs explanation or context.
- Do not use when: The number is already self-explanatory.

## Dividers

Use dividers to separate content with restraint. Avoid overusing them, and ensure they support hierarchy rather than decorate the page.

## Quotes

Use quotes sparingly and only when the content is genuinely relevant. They should support authority, not dramatize the experience.

## Evidence Blocks

Evidence blocks should present proof, rationale, or explanation in a format that feels structured and credible. Keep them compact and factual.

## Section Headers

Section headers should establish the purpose of a section with clarity. Keep them concise and aligned with the room logic of the homepage.

## Forms

### Inputs

- Purpose: Single-line data entry.
- Use when: The form requires short text input.
- Do not use when: The input is better handled through another control.

### Textarea

- Purpose: Multi-line input.
- Use when: The user needs to provide more detail.
- Do not use when: A single-line input is sufficient.

### Select

- Purpose: Controlled choice selection.
- Use when: The user must choose from a defined set of options.
- Do not use when: A radio or button group is more appropriate.

### Validation

- Purpose: Communicate errors, required states, or completion feedback.
- Use when: A field or action needs user correction.
- Do not use when: The form is already valid or no action is pending.

### Accessibility Notes

- Inputs must have visible labels.
- Validation must be announced in a meaningful way.
- Error and success states must not rely on color alone.

## Navigation

Navigation should remain simple, readable, and unobtrusive. It should support scanning and movement without competing with the editorial tone of the page.

## Footer

The footer should reinforce clarity and provide supporting information. Keep it functional, not ornamental.

## Empty States

Empty states should explain what is missing and how the user can proceed. They should be calm, clear, and free from unnecessary drama.

## Loading States

Loading states should be quiet and lightweight. They should not create motion that feels playful or intrusive.

## Skeleton States

Skeleton states should preserve layout and avoid sudden shifts. They should communicate that content is arriving without visual noise.
