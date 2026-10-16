import localFont from "next/font/local";
import { Caveat, Geist, Geist_Mono, Instrument_Serif, Urbanist } from "next/font/google";

/**
 * Self-hosted from Fontshare (Indian Type Foundry), free for commercial use.
 *
 * Chosen over the previous Plus Jakarta Sans deliberately: Jakarta / Inter /
 * Poppins are the default UI faces on most generated sites, which is a large
 * part of why a page reads as templated. Clash Display goes ultra-wide at
 * heavy weights with sharp thick/thin contrast — it carries a headline as an
 * image rather than as neutral text.
 *
 * Served from our own origin via next/font/local: no third-party request, no
 * layout shift, and only the weights actually used (5 files, ~99KB total).
 */
export const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  preload: true,
  src: [
    { path: "../fonts/clash-display-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/clash-display-700.woff2", weight: "700", style: "normal" },
  ],
});

/**
 * Vercel's own open-source UI face (vercel.com/font), replacing General
 * Sans. Exported under the same name and CSS variable — `--font-general` —
 * so nothing downstream (layout.tsx's className wiring, tokens.css's
 * `--font-sans` alias) needed to change to pick it up.
 */
export const generalSans = Geist({
  variable: "--font-general",
  subsets: ["latin"],
  // 900 added for the hero headline, which now carries the composition on
  // its own rather than sitting beside a full-bleed logo — 700 read thin
  // at that scale.
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  preload: true,
});

/**
 * Hero headline only, for now — Geist at 900 read too thick once the
 * headline became the hero's main content, and DM Sans (tried next)
 * didn't land either. Checked actual usage data instead of guessing a
 * third time: Satoshi is Fontshare's single most-used family (108k
 * views, ahead of Clash Display and General Sans on the same catalogue)
 * and its terminals are genuinely rounded without tipping into the
 * bubbly/display territory a font like Poppins sits in — closer to a
 * softened grotesque than a geometric-rounded face. Self-hosted the
 * same way Clash Display is, not pulled from Fontshare's CDN, so it's
 * one less third-party request rather than one more.
 */
export const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
  src: [
    { path: "../fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
});

/** Handwritten accent, used for the film-set margin notes. */
export const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

/**
 * The hero's serif — the BUCK cover sets its lower lines in a Times-like
 * editorial serif against sans caps. Instrument Serif is the closest open
 * face: narrow, high-contrast, one weight, roman + italic.
 */
export const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

/** Monospace for small technical labels (the homepage's equation row, step numbers, office clocks). */
export const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

/**
 * The homepage face (v18). Urbanist: a geometric sans with soft, round
 * terminals (no sharp spurs at display size), and the face the site's
 * approver already reads as professional. SIL Open Font License, so free
 * for commercial use. 400 body, 500 UI, 600 headings, 700 the hero title.
 */
export const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});
