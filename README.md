# Caimue

Marketing site for Caimue — a video-first B2B marketing agency.

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
src/
├── app/                    Routes only — pages stay thin and compose sections
│   ├── layout.tsx          Fonts, metadata, chrome, smooth scroll
│   ├── page.tsx            Home
│   └── <route>/page.tsx
│
├── components/
│   ├── layout/             Navbar, Footer — site chrome
│   ├── sections/           Page-level blocks
│   │   ├── home/           Hero, TrackRecord, Channels, Services, …
│   │   └── channels/       Per-channel page sections
│   ├── ui/                 Presentational primitives (Button, SectionHeading…)
│   ├── motion/             Animation primitives (SmoothScroll, Reveal…)
│   └── effects/            Decorative backgrounds
│
├── content/
│   └── site.ts             All copy, nav, and data. Edit words here, not in JSX.
│
├── lib/
│   ├── utils.ts            cn() class merger
│   └── motion.ts           Shared easings and framer-motion variants
│
└── styles/
    ├── globals.css         Base, typography, components, utilities
    ├── tokens.css          Design tokens (@theme) — colours, type, radii, motion
    └── compat.css          Bridge for pages not yet on the new system
```

`@/*` resolves to `src/*`.

## Design system

Tokens live in `src/styles/tokens.css` and are exposed to Tailwind through
`@theme`, so `bg-violet`, `text-ink-soft`, `font-display` etc. all come from one
place. Change a colour there and it propagates site-wide.

- **Display type** — Plus Jakarta Sans 700/800, tight tracking, on every heading.
- **Body type** — Inter 400/600/700.
- **Palette** — Caimue violet anchors a vivid secondary set (cyan, pink, amber,
  lime, coral). Elevation uses violet-tinted shadows, never flat grey.
- **Motion** — expo-out easing throughout; `Reveal` / `RevealGroup` handle
  scroll entrances, Lenis handles inertial scrolling.

### `compat.css`

The home page, navbar and footer are rebuilt on the new system. The remaining
pages still reference the previous token and utility names, so `compat.css`
re-points every legacy name (`--caimue-purple`, `.label`, `font-serif`, …) at a
new-system value — those pages inherit the new palette and type without being
rewritten. Delete a block from it once the last page using it has been migrated.

## Performance notes

Things that are load-bearing, so they don't get undone by accident:

- **The hero is a server component with CSS-only entrance animation.** Gating
  above-the-fold content behind framer-motion's `initial: { opacity: 0 }` keeps
  it invisible until hydration and pushes LCP out to whenever the JS bundle
  lands. CSS keyframes run on first paint instead.
- **No animated blur filters.** Backgrounds are static multi-stop radial
  gradients (`.mesh-*`, `.block-*`), which cost a fraction of a full-screen
  animated `blur()` during scroll.
- `content-visibility: auto` on offscreen sections via `.section-cv`.
- AVIF/WebP, trimmed `deviceSizes`, and `loading="lazy"` on everything below
  the fold.
- Smooth scrolling and every entrance animation respect
  `prefers-reduced-motion`.
