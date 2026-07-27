# Responsive System

This document defines the responsive behavior for the ProScaleMEDIA experience. The implementation should preserve hierarchy, readability, and authority across mobile, tablet, desktop, and wide screens.

## Breakpoints

### Mobile

- Intended for compact screens and single-column content.
- Prioritize clarity, concentrated copy, and clear CTA placement.
- Avoid dense layouts and unnecessary side-by-side content.

### Tablet

- Intended for mid-sized screens and hybrid layouts.
- Allow some additional balance between text and supporting visuals.
- Maintain strong hierarchy without increasing visual noise.

### Desktop

- Intended for the main implementation target.
- Support editorial rhythm, controlled asymmetry, and larger headline scale.
- Preserve calm spacing and clear content grouping.

### Wide

- Intended for large displays and immersive layouts.
- Allow more generous negative space and broader compositional spread.
- Avoid stretching content unnaturally or introducing decorative density.

## Grid

### Mobile

- 4 columns.
- Use single-column stacking for most content blocks.

### Tablet

- 8 columns.
- Allow some two-column composition where content benefits from balance.

### Desktop

- 12 columns.
- Support more editorial and architectural layouts with controlled asymmetry.

## Container Behavior

Containers should scale with the viewport while preserving a readable content width. Content should not become overly wide on desktop or overly cramped on mobile. Use container widths from the token system rather than hard-coded values.

## Typography Scaling

Typography must scale steadily across breakpoints. Headlines should become larger on larger screens, while body copy should remain readable and stable. Avoid abrupt jumps in font size that disrupt hierarchy.

## Spacing Scaling

Spacing should increase as the viewport grows. Use the space scale to create more breathing room on larger screens while keeping compact rhythm on mobile.

## Room Spacing

Room spacing should remain consistent enough to feel intentional, but it should increase slightly on larger screens. Large sections should not feel cramped or overly compressed on mobile.

## Headline Wrapping

Headlines should wrap predictably and preserve meaning. Avoid awkward breaks in short statements, and keep the most important words together when possible.

## CTA Behavior

- On mobile, prioritize one primary CTA and keep the action area clear and touch-friendly.
- On tablet and desktop, CTA groups may become more contextual and spacious.
- Avoid multiple competing calls to action in a single room.

## Navigation Collapse

Navigation should collapse into a compact, accessible pattern on smaller screens. The mobile experience should preserve clarity and not overload the viewport with too many interactive items.

## Touch Targets

All interactive targets must be at least 44px in both dimensions. This applies to buttons, links, and form controls.

## Safe Areas

Content and interactive elements should avoid being placed too close to screen edges. Respect safe areas for mobile browsers and device-specific display cutouts where relevant.

## Image Behavior

Images should respond to viewport size without introducing layout shifts. Prefer responsive images, explicit dimensions, and controlled aspect ratios. Avoid heavy media in the initial viewport unless it materially improves the experience.

## Video Behavior

Video should be used sparingly and only when it adds meaningful value. On mobile, reduce or avoid autoplay and prefer a lightweight experience. Video should never replace the primary content hierarchy.

## Motion Adjustments

### Desktop

Allow fuller transitions and more layered reveal timing.

### Mobile

Keep motion lighter, shorter, and less complex. Avoid overly long entrance sequences.

### Reduced Motion

Reduced motion mode should remove translate-based movement, reduce stagger timing, and simplify transitions so that the same content remains readable and calm.

## Performance Guidance

- Avoid unnecessary layout shifts.
- Prefer responsive images.
- Use lazy loading where appropriate.
- Avoid expensive animation on mobile.
- Keep the opening experience lightweight and fast to perceive.

## Accessibility

The responsive system must support WCAG 2.2 AA expectations.

- Keyboard navigation must remain functional at all breakpoints.
- Visible focus states must be preserved.
- Semantic landmarks should be used for structure.
- Heading hierarchy must remain logical across viewport changes.
- A skip link should be present for navigation-heavy layouts.
- Reduced motion should be respected.
- Color contrast should remain sufficient for all text and controls.
