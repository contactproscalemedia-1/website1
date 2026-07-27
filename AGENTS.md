# Framework Guidance

This Next.js version may contain breaking API, convention, and file-structure
changes. Read the relevant guide in `node_modules/next/dist/docs/` before
changing Next.js code, and heed all deprecation notices.

# ProScaleMEDIA Website Instructions

## Project

This is the official website of ProScaleMEDIA, a Dubai-based performance
marketing agency serving premium and luxury brands.

The website must feel like an exclusive digital flagship, not a normal
marketing agency or SaaS website.

## Technology

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP only when CSS or Framer Motion cannot achieve the required result
- Use Next/Image for website imagery
- Deployable on Vercel

## Brand System

Colors:

- Black: #000000
- White: #FFFFFF
- Brand red: #E8152A

Typography:

- Bebas Neue for primary display headlines
- Inter for body text, labels, navigation and interface elements

Do not introduce additional brand colors.

Red must be used selectively as an accent, not across every element.

## Creative Direction

The website should feel:

- Cinematic
- Editorial
- Architectural
- Luxurious
- Precise
- Exclusive
- Confident
- Unforgettable

It must not feel:

- Like SaaS
- Like a startup template
- Like a crypto website
- Like a gaming website
- Like a generic Webflow agency template
- Excessively futuristic
- Filled with cheap neon glows
- Overloaded with glassmorphism

## Experience Principles

Treat the homepage as a sequence of visual chapters.

The user journey is:

1. Intrigue
2. Authority
3. Capabilities
4. Proof
5. Philosophy
6. Method
7. Exclusivity
8. Contact

Typography should be treated as visual architecture.

Use controlled asymmetry, strong negative space, editorial image crops,
layered depth and intentional transitions.

## Motion Rules

Motion must feel slow, weighted and physically believable.

Use:

- Cinematic masked reveals
- Staggered typography
- Subtle parallax
- Scroll-linked transformations
- Magnetic buttons
- Image scale and crop transitions
- Purposeful section transitions

Avoid:

- Random floating objects
- Constant pulsing
- Excessive particles
- Animation on every element
- Cheap glitch effects
- Heavy motion that delays content access

Respect prefers-reduced-motion.

## Performance Requirements

- Target Lighthouse performance above 90
- Prevent layout shifts
- Compress all images and videos
- Lazy-load below-the-fold media
- Avoid unnecessary client components
- Avoid large animation libraries unless justified
- Maintain responsive behavior from 320px upward
- Preserve semantic HTML and keyboard navigation

## Code Quality

Before completing a task:

1. Run linting.
2. Run TypeScript checks.
3. Run the production build.
4. Check desktop and mobile layouts.
5. Confirm no broken internal links.
6. Confirm reduced-motion support.
7. Summarize all files changed.

Do not rewrite stable sections without a clear design or technical reason.
Build reusable components instead of duplicating code.

## ProScaleMEDIA Design System

Before visual or content work:

1. Read `docs/proscale-design-system/README.md`.
2. Before planning implementation, read
   `docs/proscale-design-system/10-codex-constitution.md`.
3. Read the relevant craft documents for typography, motion, layout, copy,
   and art direction.
4. Read the specification for the room being modified.

Implement only the room explicitly requested. Preserve existing functionality
outside that scope.

After implementation, run lint and the production build. Report:

- Files changed
- Tests and checks performed
- Compromises made
- Unresolved issues

Never invent case-study numbers, clients, testimonials, or performance claims.
Ask for missing business facts instead of fabricating them.
