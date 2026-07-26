# ProScaleMEDIA

Production Next.js 15 rebuild of the ProScaleMEDIA marketing site: dark editorial performance-marketing agency site with a case-study carousel, animated stats, and a lead-capture footer.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- shadcn/ui primitives (`components/ui`)
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — root layout, page, metadata, OG image route
- `components/sections/` — one component per page section (Hero, Services, CaseStudies, Position, Approach, ContactCTA)
- `components/` — shared UI (Nav, Footer, AnnouncementBar, EmailCapture, icons)
- `components/ui/` — shadcn-style primitives (Button, Input)
- `lib/data.ts` — all site copy and structured content (services, case studies, nav links, stats)
- `public/images/` — extracted site imagery plus `manifest.json` documenting each asset for later swap

## Accessibility & motion

All decorative animation (CTA particles, radar scan, glitch text, logo marquee, protocol scroll-reveal, stat counters, carousel autoplay) respects `prefers-reduced-motion` and falls back to a static state.

## Deploy

Deploys to Vercel with zero configuration: `vercel deploy` or connect the repo in the Vercel dashboard.
