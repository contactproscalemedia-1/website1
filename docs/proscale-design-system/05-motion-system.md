# Motion System

## Motion Principles

Motion should support understanding, not spectacle. It should feel deliberate and physical, with a measured pace and a clear purpose.

## Allowed Motion Behavior

Use motion only for:

- Arrival: content entering the viewport
- Departure: content leaving or transitioning between rooms
- Feedback: hover, tap, focus, or state changes

## Prohibited Motion

- Parallax
- Scroll-jacking
- Looping animation
- Bouncing
- Spinning
- Custom cursor effects
- Decorative motion that delays content access

## Approved Tokens

- `--ease-verdict: cubic-bezier(0.16, 1, 0.3, 1);`
- `--ease-cut: cubic-bezier(0.7, 0, 0.84, 0);`
- `--ease-neutral: cubic-bezier(0.33, 1, 0.68, 1);`
- `--dur-tap: 100ms;`
- `--dur-hover: 180ms;`
- `--dur-reveal: 600ms;`
- `--dur-room: 800ms;`
- `--dur-opening: 1200ms;`

## Reduced Motion

Respect `prefers-reduced-motion`. In reduced motion mode, remove translate-based movement and character-level stagger, and keep transitions simple and readable.

## Implementation Notes

Animate only opacity, transform, color, and background-color. Motion should end in stillness, especially in the opening experience.
