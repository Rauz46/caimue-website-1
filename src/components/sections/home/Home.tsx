"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  ChartLine,
  Clapperboard,
  Clock,
  LayoutTemplate,
  Magnet,
  Lightbulb,
  Megaphone,
  MessagesSquare,
  MousePointerClick,
  Play,
  Plus,
  Route,
  ScanSearch,
  Search,
  Send,
  Sparkle,
  Target,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "./Hero";
import "./home-v3.css";
import "./home-polish.css";

/* ============================================================
   THE HOMEPAGE (Nov 2026). Copy: reference/content, Home Page Content v2. Built on the
   owner's reference sites, read from their own markup and styles (Frontal above all):
   small precise type, a split head (heading left, a line right), one illustrated panel
   per section drawn from the brand's own world (the 3D tiles, the films), numbered
   cells, and a close lit from below. The hero and the service box stay. The work
   section is kept in sections/work-carousel, with its README.
   ============================================================ */

gsap.registerPlugin(ScrollTrigger, SplitText);

/* trimmed to their ink. Measured on each wordmark's own capitals, leaving out the ™, taglines and swashes:
   ink, the width that gives every mark a 40px capital; y, the shift (% of its height) that sets the capitals on one line */
const CLIENTS = [
  { name: "Aventei", src: "/logos/trim/01-micro-pe.webp", w: 344, h: 125, ink: 197, y: 18.5 },
  { name: "Ignitho", src: "/logos/trim/02-data-ai.webp", w: 328, h: 104, ink: 187, y: 16 },
  { name: "Piqual", src: "/logos/trim/04-b2b-lead-gen.webp", w: 354, h: 164, ink: 155, y: 9.5 },
  { name: "Prodeia", src: "/logos/trim/prodeia-a.webp", w: 200, h: 48, ink: 170, y: 0 },
  { name: "Talentou", src: "/logos/trim/07-talent-hiring.webp", w: 254, h: 48, ink: 231, y: 0 },
  { name: "Nuivio", src: "/logos/trim/03-venture-studios.webp", w: 349, h: 114, ink: 180, y: 16.4 },
];

const PROOF = [
  { value: 2000000, suffix: "+", line: "organic views, without spending on ads" },
  { value: 25, suffix: "+", line: "creators found and brought on board" },
  { value: 6, suffix: "", line: "B2B brands we’ve worked with" },
];


const SERVICES = [
  { title: "Websites that convert", icon: MousePointerClick, line: "Pages written and built to turn visitors into enquiries." },
  { title: "Search and AI search", icon: Search, line: "Get found on Google, and cited in ChatGPT, Perplexity and Gemini." },
  { title: "LinkedIn and social", icon: MessagesSquare, line: "Your company page and leaders’ profiles, run to start buyer conversations." },
  { title: "Video and content", icon: Clapperboard, line: "Short videos, case studies and posts that make buyers stop and trust you." },
];

/* where each tile stands on the floor (columns and rows of the isometric grid) */
const FLOOR = [
  [0.5, 0.5],
  [1.5, 0.5],
  [0.5, 1.5],
  [1.5, 1.5],
];

/* each card's icon is drawn from what the card says */
const METHOD = [
  { title: "Know your market", icon: ScanSearch, text: "We study your buyers, your competitors and what your buyers search for." },
  { title: "Build the lead plan", icon: Route, text: "Who to reach, what to say, which channels to use, and what a good lead looks like for you." },
  { title: "Fix the foundation", icon: LayoutTemplate, text: "A website that turns visitors into enquiries, with clear offers and forms that work." },
  { title: "Drive visibility", icon: Megaphone, text: "Search, AI search, LinkedIn and video that put you in front of buyers every week." },
  { title: "Measure and scale", icon: TrendingUp, text: "We track every enquiry back to where it came from, then do more of what works." },
];

const WHY = [
  { title: "Built around leads, not likes", icon: Magnet, text: "Every website page, post and video has one job: bringing buyers to you." },
  { title: "One team for everything", icon: UsersRound, text: "Strategy, website, search, LinkedIn and video under one roof. No juggling three vendors." },
  { title: "You see what’s working", icon: ChartLine, text: "Every enquiry is tracked back to where it came from, so you know what your money is doing." },
  { title: "US-headquartered, working your hours", icon: Clock, text: "Based in Tampa, with a team that keeps US hours when you need us." },
];

/* a card's first line: the title on the left, its icon on the right in a soft square */
function CardHead({ title, Icon }: { title: string; Icon: LucideIcon }) {
  return (
    <div className="cd-head">
      {/* a hyphenated word is never broken at its hyphen */}
      <h3>{title.split(/(\S+-\S+)/).map((part, i) => (i % 2 ? <span key={i} className="cd-nw">{part}</span> : part))}</h3>
      <span className="cd-ic" aria-hidden>
        <Icon strokeWidth={1.75} />
      </span>
    </div>
  );
}

/* one of the channels' own films, whole */


/* the flat brand form on each tile: corner, disc, play, in turn */
function Mark({ i }: { i: number }) {
  const k = i % 3;
  return (
    <svg className="ca-mark" viewBox="0 0 48 48" aria-hidden>
      {k === 0 && <path d="M12 0H48V36A12 12 0 0 1 36 48H12A12 12 0 0 1 0 36V12A12 12 0 0 1 12 0Z" />}
      {k === 1 && <circle cx="24" cy="24" r="24" />}
      {k === 2 && (
        <>
          <path d="M12 0H36A12 12 0 0 1 48 12V48H12A12 12 0 0 1 0 36V12A12 12 0 0 1 12 0Z" />
          <path className="ca-mark__knock" d="M19 15L34 24L19 33Z" strokeWidth="4" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

/** A figure that counts up once on screen; the real value is rendered first. */
function Count({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const num = (n: number) => Math.round(n).toLocaleString("en-US");
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const o = { n: 0 };
    // every figure shares one trigger (the row) and one 2s run, so all three start together and land together
    const tw = gsap.to(o, { n: value, duration: 2, ease: "power2.out", paused: true, onUpdate: () => void (el.textContent = num(o.n)) });
    const play = () => void tw.play();
    const st = ScrollTrigger.create({ trigger: el.closest(".tr-stats") ?? el, start: "top 85%", once: true, onEnter: play });
    el.textContent = num(0);
    return () => {
      st.kill();
      tw.kill();
      el.textContent = num(value);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <span className="ca-proof__v">
      <span aria-hidden>
        <span ref={ref}>{num(value)}</span>
        {suffix && <span className="ca-proof__sfx">{suffix}</span>}
      </span>
      <span className="sr-only">{num(value) + suffix}</span>
    </span>
  );
}

/* the button's arrow sits in a white disc; on hover it leaves to the right and a second one comes in from the left */
function GoDisc() {
  const arrow = (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
    </svg>
  );
  return (
    <span className="go-disc" aria-hidden>
      {arrow}
      {arrow}
    </span>
  );
}

function ServiceFloor() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const s = open === null ? null : SERVICES[open];
  return (
    <div className={`ca-floor-stage${open !== null ? " is-open" : ""}`}>
      <div className="ca-floor-scene">
        <ol className="ca-floor" data-floor>
          {SERVICES.map((sv, i) => (
            <li key={sv.title} className="ca-tile-cell" style={{ ["--c" as string]: FLOOR[i][0], ["--r" as string]: FLOOR[i][1] }}>
              <button
                type="button"
                className={`ca-tile${open === i ? " is-active" : ""}`}
                onClick={() => setOpen(open === i ? null : i)}
                aria-pressed={open === i}
                aria-label={sv.title}
              >
                <span className="ca-tile__top">
                                    <Mark i={i} />
                </span>
                <span className="ca-tile__title">{sv.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className="ca-detail" role="dialog" aria-modal="false" aria-hidden={open === null} aria-labelledby="ca-detail-t">
        <button type="button" className="ca-detail__close" onClick={() => setOpen(null)} aria-label="Close" tabIndex={open === null ? -1 : 0}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        {s && open !== null && (
          <div className="ca-detail__body" key={open}>
            <Mark i={open} />
            <h3 className="ca-detail__t" id="ca-detail-t">
              {s.title}
            </h3>
            <p className="ca-detail__p">{s.line}</p>
          </div>
        )}
      </div>
      {/* phones: the same four as a plain list of cards */}
      <ol className="ca-svc-list">
        {SERVICES.map((sv) => (
          <li key={sv.title} className="ca-svc">
            <CardHead title={sv.title} Icon={sv.icon} />
            <p className="ca-svc__p">{sv.line}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Home() {
  const root = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wide = window.matchMedia("(min-width: 900px)").matches;

    const ctx = gsap.context(() => {
      /* ---------- headings rise line by line, then the key word takes on its colour ---------- */
      gsap.utils.toArray<HTMLElement>(".ca-h2").forEach((h) => {
        SplitText.create(h, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => {
            const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: "top 88%", once: true } });
            tl.from(self.lines, { yPercent: 110, duration: 1.1, stagger: 0.1, ease: "power4.out" });
            const em = h.querySelectorAll(".h2-em");
            if (em.length) tl.from(em, { color: getComputedStyle(h).color, duration: 0.9, ease: "power2.inOut" }, 0.5);
            return tl;
          },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((n) => {
        gsap.from(n, { y: 32, autoAlpha: 0, duration: 1, ease: "power3.out", clearProps: "transform,translate,rotate,scale,opacity,visibility", scrollTrigger: { trigger: n, start: "top 92%", once: true } });
      });


      /* ---------- the services floor: tiles drop onto it one after another ---------- */
      const tiles = el.querySelectorAll(".ca-tile");
      if (tiles.length) {
        gsap.from(tiles, { y: -60, autoAlpha: 0, duration: 0.65, stagger: 0.04, ease: "power3.out", clearProps: "transform,opacity,visibility", scrollTrigger: { trigger: ".ca-floor-stage", start: "top 85%", once: true } });
      }
      /* ---------- the method: the five cards arrive together, one after another, unhurried ---------- */
      const mdCards = el.querySelectorAll(".md-c");
      if (mdCards.length) {
        // cleared when done, so the cards' own hover scale is never held back by an inline value
        gsap.from(mdCards, { y: 28, autoAlpha: 0, duration: 1.2, stagger: 0.12, ease: "power3.out", clearProps: "transform,translate,rotate,scale,opacity,visibility", scrollTrigger: { trigger: ".md-cards", start: "top 85%", once: true } });
      }

      /* ---------- the footer reveal, one scrubbed sequence over the last screen of scroll: the footer's contents
         drift into place (the pushed version's rise, commit 217b80f); the wordmark rises letter by letter out of its own line, the full stop lands last; then the lines fade up ---------- */
      const ft = document.querySelector<HTMLElement>(".ft");
      if (ft) {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: el, start: "bottom bottom", end: () => `+=${ft.offsetHeight}`, scrub: true, invalidateOnRefresh: true },
        });
        tl.fromTo(ft.querySelectorAll(".ft__mark, .ft__say, .ft__bar"), { y: () => -ft.offsetHeight * 0.45 }, { y: 0, duration: 1 }, 0);
        const letters = ft.querySelectorAll('.ft__mark-svg [data-wm]:not([data-wm="dot"])');
        if (letters.length) tl.fromTo(letters, { y: 420 }, { y: 0, duration: 0.42, stagger: 0.06, ease: "power2.out" }, 0.04);
        const dot = ft.querySelector('.ft__mark-svg [data-wm="dot"]');
        if (dot) tl.fromTo(dot, { scale: 0, svgOrigin: "2186.28 525.52" }, { scale: 1, duration: 0.16, ease: "power3.out" }, 0.62);
        tl.fromTo(ft.querySelectorAll(".ft__say > p, .ft__bar > span"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.22, stagger: 0.04, ease: "power2.out" }, 0.6);
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="cx ca" ref={root}>
      <Hero />

      {/* ==================== OUR SERVICES: the box and its floor ==================== */}
      <section className="ca-pad ca-g-deep ca-g-dark ca-services svb" id="services">
        <div className="ca-wrap">
          <div className="ca-head" data-reveal>
            <h2 className="ca-h2">
              Our <span className="h2-em">services</span>
            </h2>
            <p className="ca-p ca-p--inv">Every channel, one goal: leads.</p>
          </div>
          <div className="ca-board">
            <ServiceFloor />
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY: the heading centred, the two paragraphs side by side, the picture centred below ==================== */}
      <section className="sty" aria-labelledby="ca-origin">
        <div className="sty-doodles" aria-hidden>
          <Sparkle className="sty-dd sty-dd--1" />
          <Plus className="sty-dd sty-dd--2" />
          <Target className="sty-dd sty-dd--3" />
          <Lightbulb className="sty-dd sty-dd--4" />
          <Send className="sty-dd sty-dd--5" />
          <TrendingUp className="sty-dd sty-dd--6" />
          <Play className="sty-dd sty-dd--7" />
        </div>
        <div className="sty-wrap">
          <div className="sty-top" data-reveal>
            <h2 className="ca-h2" id="ca-origin">
              Our <span className="h2-em">story</span>
            </h2>
            <p className="sty-sub">Built on attention. Focused on leads.</p>
          </div>
          {/* the two paragraphs on the left; the team on the brand's leaning forms on the right */}
          <div className="sty-body">
            <div className="sty-text">
              <p className="sty-p" data-reveal>
                We started as Café Musings, a group making short films and building our own channels from zero. With no ad spend, we grew
                them past 2 million organic views and worked with 25+ creators along the way. That taught us how to earn attention.
              </p>
              <p className="sty-p" data-reveal>
                Then the companies around us needed the same thing. They were great at their work, but buyers weren’t finding them. So, we
                evolved into Caimue, using what we learned to help B2B companies get found and win inbound leads.
              </p>
            </div>
            <div className="sty-stage" data-reveal>
              <i className="sty-shape sty-shape--a" aria-hidden />
              <i className="sty-shape sty-shape--b" aria-hidden />
              <div className="sty-pic">
                <Image src="/story/story-team-cut.webp" alt="" fill sizes="(max-width: 899px) 90vw, 600px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OUR TRACK RECORD: three figures, given room ==================== */}
      <section className="tr" aria-labelledby="ca-record">
        <div className="tr-in">
          <h2 className="ca-h2" id="ca-record" data-reveal>
            Our <span className="h2-em">track record</span>
          </h2>
          <ul className="tr-stats">
            {PROOF.map((p) => (
              <li key={p.line} data-reveal>
                <Count value={p.value} suffix={p.suffix} />
                <span>{p.line}</span>
              </li>
            ))}
          </ul>
          <div data-reveal>
            <Link href="/#services" className="ca-btn ca-btn--purple ca-btn--go">
              Read more
              <GoDisc />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== OUR METHOD: five cards on the purple ground ==================== */}
      <section className="md" aria-labelledby="ca-how">
        <div className="md-in">
          <div className="md-head" data-reveal>
            <h2 className="ca-h2" id="ca-how">
              Our <span className="h2-em">method</span>
            </h2>
            <p className="md-sub">How we generate inbound leads.</p>
          </div>
          <ol className="md-cards">
            {METHOD.map((s) => (
              <li key={s.title} className="md-c">
                <CardHead title={s.title} Icon={s.icon} />
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== WHY US: the same card as the method, in the purple tint ==================== */}
      <section className="wy4" aria-labelledby="ca-why">
        <div className="wy4-in">
          <div className="wy4-head" data-reveal>
            <h2 className="ca-h2" id="ca-why">
              Why B2B companies choose <span className="h2-em">Caimue</span>
            </h2>
          </div>
          <ul className="wn-grid">
            {WHY.map((w) => (
              <li key={w.title} className="wn" data-reveal>
                <CardHead title={w.title} Icon={w.icon} />
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== THE CLOSE ==================== */}
      <section className="cx2" aria-labelledby="ca-contact">
        <div className="cx2-in">
          <h2 className="ca-h2" id="ca-contact">
            Let’s fill your <span className="h2-em">pipeline</span>
          </h2>
          <p data-reveal>
            Tell us about your business and the buyers you want to reach. We’ll show you where your next inbound leads can come from, and
            what to fix first.
          </p>
          <div data-reveal>
            <Link href="/contact" className="ca-btn ca-btn--pink ca-btn--go">
              Get your inbound plan
              <GoDisc />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
