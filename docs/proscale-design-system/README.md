Design System Version: 1.0
Status: Approved for Implementation

# ProScaleMEDIA Design System

This document is the working foundation for the ProScaleMEDIA website. It defines the brand posture, visual language, motion rules, content standards, and implementation constraints for the homepage experience.

## Brand Snapshot

- Brand: ProScaleMEDIA
- Position: A Dubai-based performance marketing agency focused on paid media, growth, conversion, brand systems, and measurable business impact.
- Emotional sequence: Calm → Respect → Confidence → Action
- Core design principle: If a design decision increases attention but decreases authority, reject it.

## Homepage Room Sequence

1. Opening Statement
2. Verdict
3. Engine
4. Evidence
5. Jurisdiction
6. Operators
7. Diagnosis
8. Decision

## Visual Direction

- Dark editorial
- Architectural
- Courtroom-like authority
- Black, white, and red only
- No gradients
- No glows
- No decorative ornaments
- No generic agency visuals
- No stock-style teamwork images

## Typography

- Bebas Neue for monumental headlines
- Inter for body copy, navigation, labels, forms, and metadata
- No em dashes
- No exclamation marks
- Numbers should receive more visual weight than adjectives

## Motion

- Native scrolling only
- No Lenis
- No scroll-jacking
- No parallax
- No looping animation
- No bouncing
- No spinning
- No custom cursor
- Motion exists only for arrival, departure, and feedback
- Respect prefers-reduced-motion
- Animate only opacity, transform, color, and background-color

## Engineering Guardrails

- Next.js 15 App Router
- React 18
- TypeScript
- Tailwind CSS v4
- Framer Motion
- pnpm
- No new dependencies without approval
- Accessibility is mandatory
- Performance is part of design
- Build one room at a time
- Preserve unrelated working sections
- Do not fabricate business results, clients, testimonials, dates, budgets, or claims
