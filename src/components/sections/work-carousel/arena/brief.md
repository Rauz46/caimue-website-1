# Caimue "Our work" section: arena brief

Caimue is a B2B creative marketing agency. The owner's words about the current section: "it still looks bad", "looks like a design from early 2000", "I hate it", "cheap". They want top Awwwards quality, and proposed: "the card contains a 3D space where this screenshot will be placed."

Build `prototype.html`: ONE self-contained page showing ONLY this section at full viewport height (no page scroll at 1907x943 and 1440x810). Plain HTML/CSS/JS in one file. Be fearless; two other designers are competing against you and a harsh judge will throw out anything that looks like a template.

## Look first (Read these images; base B = C:/Users/Godson/AppData/Local/Temp/claude/c--Users-Godson-web-programs-caimue-page/41b4d0b3-aa2e-4508-bc08-5e3134a3c4d4/scratchpad)
- The rejected current design: B/arena2/r14/2-work.jpg. Study why it reads as dated.
- The two sections the owner approves, which yours must feel made by the same hand: B/arena2/r14/5-services.jpg (services) and the first frame of B/arena3/site/home.jpg (hero billboard). Dark violet ink, solid purple and lavender, one physical object carrying the section, lit 3D.
- Real award-winning work to study: B/research/sheets5/basement.jpg (work presented as a brand mark in a lit material scene, never a flat screenshot), B/research/sheets3/instrument.jpg, B/research/sheets3/basic.jpg, B/research/sheets2/buck.jpg. Diverge from them; don't copy.

Read C:/Users/Godson/.claude/skills/high-end-visual-design/SKILL.md and C:/Users/Godson/.claude/skills/emil-design-eng/SKILL.md for craft (skim). Project rules below beat skill defaults.

## Why it reads as dated (the problem to solve)
The only imagery is screenshots of client websites: blue and purple gradient heroes, stock people, small text. Shown flat and straight-on they look like a 2000s portfolio. The treatment must carry the quality the images don't have: lighting, material, depth, crop, angle, scale. Do not make the screenshot small and tidy. Later these cards will also hold posters, deck pages and film frames, so nothing may depend on it being a website (no fake browser chrome as the idea).

## Fixed requirements
- Section ground: white #fff with a very faint grid (the committed background; it must not change). Page text ink #110a1f, purple #672fb2, lavender #e4d9f5, Outfit font (Google Fonts link is fine). Inside a card you may use the palette freely, including ink #110a1f and deep purple.
- A reserved empty strip 80px tall at the very top for the site's nav bar. Below it, heading "Our work" top centre, large (about 5vw, min with 10vh), weight 500, tight tracking.
- Interaction: cards side by side in a seamless LOOP; one card at the centre, larger and in front; sideways wheel/trackpad scroll, mouse drag, keyboard arrows and two arrow buttons move it, smoothly with inertia, settling on a card. Vertical scroll is never hijacked. Clicking a side card centres it. Motion comes from a card's distance to centre, so nothing jumps.
- Each card is ONE object holding both the 3D space with the work and the words: logo and sentence, always visible, never on hover.
- Below the row: buttons "Open the work" and "See all the work" with `.wc-prev` and `.wc-next` arrow buttons. The focused card has class `is-on` and `aria-label` set to the client name. `.wc-next` must work; a test tool clicks it.
- Exact words only; invent nothing, no extra labels, numbers, tags, or captions. No all caps anywhere. No full stops in headings.
- Avoid: hover-only text, glassmorphism, neon glows, particles, cursor effects, gradient text, tilted-for-no-reason cards, drop-shadow-on-white as the only depth, anything that looks like a Framer template.
- Must stay smooth (transforms and opacity while moving). Respect prefers-reduced-motion.

## Assets (use these absolute URLs)
Base: file:///C:/Users/Godson/web%20programs/caimue-page/public
Captures, tall full-page site images, 1440x3600 at /work/SLUG.webp, and 900x2250 at /work/SLUG-sm.webp. The top ~800px of a capture is the site's first screen; further down are its other sections, so you can use several crops.
COOKIE BARS: aventei's capture has a cookie bar at y 835 to 932 and ignitho's at y 838 to 900 (in 1440-wide pixels). It must NEVER be visible; crop above it or below it.

- Aventei, slug aventei, logo /logos/trim/01-micro-pe.webp: "A US-focused micro private equity firm that needed a brand to match its ambition. We built its identity, website and LinkedIn from launch."
- Ignitho, slug ignitho, logo /logos/trim/02-data-ai.webp: "A data and AI company that sounded like every other. We rebuilt its story, website, sales deck and LinkedIn, and put its people on camera."
- Simbfi, slug simbfi, logo /logos/trim/05-finance.webp: "A finance firm that had outgrown its website. New CEO, new services, same old pages. We repositioned it for business owners, not accountants."
- Piqual, slug piqual, logo /logos/trim/04-b2b-lead-gen.webp: "A sales company people mistook for an email tool. We rewrote its website and social around the real story: a human sales team, powered by AI."
- Talentou, slug talentou, logo /logos/trim/07-talent-hiring.webp: "A hiring brand that needed to be noticed in a crowded feed. We design the campaigns and posters that bring the right candidates in."
Logos are colour logos with transparent backgrounds; on dark use filter: brightness(0) invert(1), or put them on a light surface.

## How you are judged
1. Would a stranger still call this dated or cheap? (decisive)
2. Is there a real, convincing sense of 3D space inside the card, with light and material?
3. Same hand as the approved hero and services sections.
4. Works for any kind of work, not just websites.
5. Words readable; one card; the centre clearly in front; smooth loop.

## Render and iterate (required)
Run: node B/arena4/shot.mjs <your prototype.html> <your dir>/shots
Then Read <your dir>/shots/sheet.jpg and the full-size 1907-idle.jpg. Iterate at least twice on what you actually see. Fix errors it prints. Don't deliver something you haven't looked at. Only write inside your own directory.

## Deliver
prototype.html and rationale.md in your directory. In your final message, in under 150 words: the UX decisions and why, alternatives you discarded, and your direction's honest weak point.
