"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Hero } from "./Hero";
import { LogoRows } from "./LogoRows";
import { ArtBrands, ArtCreators, ArtViews } from "./ProofArt";
import "./home-v3.css";

/* ============================================================
   THE HOMEPAGE (v4, 29 Oct 2026)
   Copy: public/brand/Caimue_Website_Copy_v2.docx, home sections 1-8 in
   the doc's order, word for word. Nothing the doc does not have.
   Each section uses the matching theadaffair.com pattern (saved in
   reference/adaffair-live): logo rings, the isometric services floor
   with its detail card, the fanned work cards, the FAQ-style list, the
   centred statement, the moving line, the solid CTA card. Caimue
   colour, Urbanist only. Class prefix: ca-.
   ============================================================ */

gsap.registerPlugin(ScrollTrigger, SplitText);

/* 2. Clients: six logos, Prodeia withheld */
const CLIENTS = [
  { name: "Ignitho", src: "/logos/deck/02-data-ai.webp", w: 360, h: 137 },
  { name: "Simbfi", src: "/logos/deck/05-finance.webp", w: 360, h: 106 },
  { name: "Piqual", src: "/logos/deck/04-b2b-lead-gen.webp", w: 360, h: 175 },
  { name: "Aventei", src: "/logos/deck/01-micro-pe.webp", w: 360, h: 148 },
  { name: "Nuivio", src: "/logos/deck/03-venture-studios.webp", w: 360, h: 127 },
  { name: "Talentou", src: "/logos/deck/07-talent-hiring.webp", w: 264, h: 77 },
];

/* 3. Proof */
const PROOF = [
  { value: 2000000, suffix: "+", line: "organic views on channels we built from zero" },
  { value: 6, suffix: "", line: "B2B brands we run marketing for" },
  { value: 25, suffix: "+", line: "creators found and worked with" },
];

/* 4. The work (Simbfi's result is still to confirm, so its card carries none) */
const WORK = [
  {
    client: "Ignitho",
    logo: CLIENTS[0],
    sentence:
      "A data and AI company that buyers could not tell apart from the rest. We rebuilt the story, the website, the deck and the channels.",
    metric: "Contact page enquiries went from none most weeks to several a week.",
  },
  {
    client: "Simbfi",
    logo: CLIENTS[1],
    sentence:
      "A finance firm with a new CEO, a bigger offering, and a website that said neither. We rewrote it for business owners, not accountants.",
  },
  {
    client: "Ignitho Inc, LinkedIn",
    logo: CLIENTS[0],
    sentence: "One designed post about a new office.",
    metric: "37.2% engagement, the best on record for the page.",
  },
];

/* 5. What we do */
const SERVICES = [
  { title: "Brand strategy and story", line: "Who you are, who it is for, and the words to say it." },
  { title: "Film and creative production", line: "Brand films, customer stories, founder series, social video. Made to be watched." },
  { title: "Motion and AI media", line: "Animation, motion graphics and AI-assisted production. People run the story and the camera." },
  { title: "Brand communication", line: "Your company page, your leaders’ profiles and your announcements, all sounding like one company." },
  { title: "Website and search", line: "A website that turns visitors into enquiries, and the search work that gets it found." },
  { title: "Sales enablement", line: "The deck, the one-pager, the case study. What your team actually uses in the room." },
  { title: "Growth campaigns and measurement", line: "Launches, campaigns, ad creative, and a tracker you can open any time." },
];

/* where each tile stands on the floor (columns and rows of the isometric grid) */
const FLOOR = [
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [1, 2],
];

/* 6. How we work */
const STAGES = [
  { stage: "Brief", when: "Week 1", text: "We read everything you have, talk to you and two of your customers, and write back what we heard. You confirm it before we make anything." },
  { stage: "Blueprint", when: "Week 2", text: "One page with your positioning, your message and the plan, with dates and owners. Approved before any design." },
  { stage: "Build", when: "Weeks 3 to 6", text: "Website, deck, films and content, in that order. You see everything three working days before it goes live." },
  { stage: "Broadcast", when: "Month 2 onward", text: "We publish, run your channels, and plan next month before this one ends." },
];

/* 7. The channels' own frames, set in depth around the statement: back (small, dim),
   middle, front (large). z in px; x and y in % of the section; w in vw. */
const SPACE = [
  { src: "/logos/ennitto/Pazhampori.jpg", x: 14, y: 22, z: -220, w: 14 },
  { src: "/logos/ennamo/Live a Little.jpg", x: 12, y: 50, z: -60, w: 15 },
  { src: "/logos/ennitto/Vishudha Sakshi.jpg", x: 14, y: 78, z: -220, w: 14 },
  { src: "/logos/ennitto/Malsya Mandooka Mahamaham.jpg", x: 86, y: 22, z: -220, w: 14 },
  { src: "/logos/ennitto/Welcome Home.jpg", x: 88, y: 50, z: -60, w: 15 },
  { src: "/logos/ennitto/Smile!.jpg", x: 86, y: 78, z: -220, w: 14 },
];

const pad2 = (n: number) => String(n).padStart(2, "0");

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

function Eyebrow({ children, center, inv }: { children: string; center?: boolean; inv?: boolean }) {
  return <span className={`ca-eyebrow${center ? " ca-eyebrow--center" : ""}${inv ? " ca-eyebrow--inv" : ""}`}>{children}</span>;
}

/** A figure that counts up once it is on screen; the real value is rendered first. */
function Count({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const num = (n: number) => Math.round(n).toLocaleString("en-US");
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const o = { n: 0 };
    const tw = gsap.to(o, {
      n: value,
      duration: 1.8,
      ease: "power3.out",
      paused: true,
      onUpdate: () => {
        el.textContent = num(o.n);
      },
    });
    const st = ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => tw.play() });
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

/** 5. The services as tiles on an isometric floor; a tile opens its card over the floor. */
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
                aria-label={`${pad2(i + 1)} ${sv.title}`}
              >
                <span className="ca-tile__top">
                  <span className="ca-tile__no">{pad2(i + 1)}</span>
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
            <span className="ca-detail__no">
              {pad2(open + 1)} / {pad2(SERVICES.length)}
            </span>
            <Mark i={open} />
            <h3 className="ca-detail__t" id="ca-detail-t">
              {s.title}
            </h3>
            <p className="ca-detail__p">{s.line}</p>
          </div>
        )}
      </div>
      {/* phones: the same seven as a plain list of cards */}
      <ol className="ca-svc-list">
        {SERVICES.map((sv, i) => (
          <li key={sv.title} className="ca-svc">
            <span className="ca-tile__top">
              <span className="ca-tile__no">{pad2(i + 1)}</span>
              <Mark i={i} />
            </span>
            <h3 className="ca-svc__t">{sv.title}</h3>
            <p className="ca-svc__p">{sv.line}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 6. The four stages as an open-and-close list (theadaffair.com's FAQ pattern). */
function Stages() {
  const [open, setOpen] = useState(0);
  return (
    <div className="ca-faq-list">
      {STAGES.map((s, i) => (
        <div key={s.stage} className={`ca-faq${open === i ? " is-open" : ""}`}>
          <button type="button" className="ca-faq__q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="ca-faq__stage">{s.stage}</span>
            <span className="ca-faq__when">{s.when}</span>
            <span className="ca-faq__ic" aria-hidden />
          </button>
          <div className="ca-faq__a">
            <div>
              <p>{s.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // section two grows out of the hero: it enters as a rounded, inset card and widens to full bleed
      const sec2 = el.querySelector(".ca-proof-s");
      if (sec2) {
        gsap.fromTo(
          sec2,
          { clipPath: "inset(0% 7% 0% 7% round 56px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: sec2, start: "top bottom", end: "top 15%", scrub: true } },
        );
      }

      // the proof illustrations build in: the line draws, the tiles and avatars pop on
      const stats = el.querySelector(".ca-stats");
      if (stats) {
        const t = gsap.timeline({ scrollTrigger: { trigger: stats, start: "top 85%", once: true } });
        t.fromTo(stats.querySelectorAll("[data-art=line]"), { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 0)
          .from(stats.querySelectorAll("[data-art=area]"), { autoAlpha: 0, duration: 0.8 }, 0.7)
          .from(stats.querySelectorAll("[data-art=dot]"), { scale: 0, transformOrigin: "50% 50%", duration: 0.5, ease: "back.out(2)" }, 1.2)
          .from(stats.querySelectorAll("[data-art=tile]"), { scale: 0.6, autoAlpha: 0, duration: 0.5, stagger: 0.06, ease: "back.out(1.6)" }, 0.2)
          .from(stats.querySelectorAll("[data-art=av]"), { scale: 0.4, autoAlpha: 0, duration: 0.5, stagger: 0.07, ease: "back.out(1.8)" }, 0.3);
      }

      // two26-style scroll fill: the origin paragraph goes from faint to full word by word as it scrolls
      gsap.utils.toArray<HTMLElement>(".ca-fill").forEach((p) => {
        const split = SplitText.create(p, { type: "words", wordsClass: "ca-fw" });
        gsap.to(split.words, {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: { trigger: p, start: "top 80%", end: "bottom 45%", scrub: true },
        });
      });

      // section headings rise line by line out of a mask, like the hero
      gsap.utils.toArray<HTMLElement>(".ca-h2").forEach((h) => {
        SplitText.create(h, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.1,
              stagger: 0.1,
              ease: "power4.out",
              scrollTrigger: { trigger: h, start: "top 88%", once: true },
            }),
        });
      });

      // soft rises, transform and opacity only, each played once
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((n) => {
        gsap.from(n, { y: 36, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: n, start: "top 90%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-cascade]").forEach((g) => {
        gsap.from(g.children, {
          y: 44,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: g, start: "top 86%", once: true },
        });
      });

      // the proof illustrations: each shape pops in, in order

      // the services floor: tiles drop onto it one after another
      const tiles = el.querySelectorAll(".ca-tile");
      if (tiles.length) {
        gsap.from(tiles, {
          y: -60,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.04,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: ".ca-floor-stage", start: "top 95%", once: true },
        });
      }

      // the grid texture: the pointer brightens the grid around it (one rAF per move)
      el.querySelectorAll<HTMLElement>("[data-grid]").forEach((sec) => {
        let raf = 0;
        const move = (e: PointerEvent) => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            const r = sec.getBoundingClientRect();
            sec.style.setProperty("--mx", `${e.clientX - r.left}px`);
            sec.style.setProperty("--my", `${e.clientY - r.top}px`);
          });
        };
        sec.addEventListener("pointermove", move);
      });

      // where we came from: a slow dolly through the frames, scrubbed by the scroll
      const cam = el.querySelector(".ca-space__cam");
      if (cam) {
        gsap.fromTo(
          cam,
          { z: -160 },
          { z: 220, ease: "none", scrollTrigger: { trigger: ".ca-about", start: "top bottom", end: "bottom top", scrub: 0.6 } },
        );
      }

      // scroll depth, kept small: the origin frames drift by depth,
      // the illustrations rise slower than their figures, the footer wordmark slides up into place
      el.querySelectorAll<HTMLElement>(".ca-space__f").forEach((f) => {
        const back = f.dataset.depth === "back";
        gsap.fromTo(f, { y: back ? 30 : 60 }, { y: back ? -30 : -60, ease: "none", scrollTrigger: { trigger: ".ca-about", start: "top bottom", end: "bottom top", scrub: true } });
      });
      gsap.utils.toArray<HTMLElement>(".ca-stat__art").forEach((a) => {
        gsap.fromTo(a, { y: 30 }, { y: -30, ease: "none", scrollTrigger: { trigger: a, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // the work: the three cards arrive stacked and fan open
      const fan = el.querySelector(".ca-fan");
      if (fan && window.matchMedia("(min-width: 900px)").matches) {
        const cards = fan.querySelectorAll<HTMLElement>(".ca-fan__slot");
        gsap.from(cards, {
          xPercent: (i) => (1 - i) * 100,
          rotate: (i) => (1 - i) * 4,
          y: 40,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: { trigger: fan, start: "top 78%", once: true },
        });
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className="cx ca" ref={root}>
      <Hero />

      {/* ==================== 2 + 3. CLIENTS AND PROOF: one section, one ground ==================== */}
      <section className="ca-proof-s ca-g-purple ca-gridded ca-gridded--inv" data-grid aria-label="Brands we run marketing for">
        <div className="ca-wrap">
          <Eyebrow center>Brands we run marketing for</Eyebrow>
        </div>
        <LogoRows logos={CLIENTS} />
        <div className="ca-wrap">
          <div className="ca-stats" data-stats>
            <div className="ca-stat">
              <span className="ca-stat__art" aria-hidden>
                <ArtViews />
              </span>
              <Count value={PROOF[0].value} suffix={PROOF[0].suffix} />
              <span className="ca-proof__line">{PROOF[0].line}</span>
            </div>
            <div className="ca-stat">
              <span className="ca-stat__art" aria-hidden>
                <ArtBrands logos={CLIENTS} />
              </span>
              <Count value={PROOF[1].value} suffix={PROOF[1].suffix} />
              <span className="ca-proof__line">{PROOF[1].line}</span>
            </div>
            <div className="ca-stat">
              <span className="ca-stat__art" aria-hidden>
                <ArtCreators />
              </span>
              <Count value={PROOF[2].value} suffix={PROOF[2].suffix} />
              <span className="ca-proof__line">{PROOF[2].line}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. THE WORK: fanned cards ==================== */}
      <section className="ca-pad ca-g-plain ca-g-work ca-gridded" data-grid id="work">
        <div className="ca-wrap">
          <div className="ca-head" data-reveal>
            <h2 className="ca-h2">
              Three companies that
              <br />
              stopped being <span className="ca-ital">forgettable</span>
            </h2>
          </div>
          <div className="ca-frame ca-fan">
            {WORK.map((w, i) => (
              <article key={w.client} className="ca-fan__slot">
                <Link href="/brands" className={`ca-fan__card ca-fan__card--${i + 1}`}>
                <div className="ca-fan__body">
                  <div className="ca-fan__top">
                    <h3 className="ca-fan__client">{w.client}</h3>
                    <span className="ca-fan__arrow" aria-hidden>
                      <svg viewBox="0 0 48 48">
                        <path d="M12 36L36 12M16 12h20v20" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <p className="ca-fan__sentence">{w.sentence}</p>
                  <div className="ca-fan__foot">
                    {w.metric && (
                      <p className="ca-fan__metric">
                        <span className="ca-fan__result">Result</span>
                        {w.metric}
                      </p>
                    )}
                  </div>
                </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="ca-more" data-reveal>
            <Link href="/brands" className="ca-btn ca-btn--line">
              See all the work
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 5. WHAT WE DO: the services floor ==================== */}
      <section className="ca-pad ca-g-deep ca-services" id="services">
        <span className="ca-device ca-device--services" aria-hidden />
        <div className="ca-wrap">
          <div className="ca-head" data-reveal>
            <h2 className="ca-h2">
              Everything your marketing needs
              <br />
              <span className="ca-ital">One team</span>
            </h2>
            <p className="ca-p ca-p--inv">
              No handovers between agencies. No three versions of your story. The people who write your positioning also
              build your website, make your films and run your channels.
            </p>
          </div>
          <div className="ca-board">
            <ServiceFloor />
          </div>
          <div className="ca-more" data-reveal>
            <Link href="/process" className="ca-btn ca-btn--ghost-light">
              See how we work
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 6. HOW WE WORK: the FAQ pattern ==================== */}
      <section className="ca-pad ca-g-plain ca-gridded" data-grid aria-labelledby="ca-how">
        <div className="ca-wrap ca-faq-grid">
          <div className="ca-faq-grid__l" data-reveal>
            <h2 className="ca-h2" id="ca-how">
              Four stages
              <br />A <span className="ca-ital">date</span> on each one
            </h2>
            <ol className="ca-weeks" aria-hidden>
              {STAGES.map((st) => (
                <li key={st.when}>{st.when}</li>
              ))}
            </ol>
          </div>
          <div data-reveal>
            <Stages />
          </div>
        </div>
      </section>

      {/* ==================== 7. WHERE WE CAME FROM: the centred statement ==================== */}
      <section className="ca-pad ca-about ca-g-purple ca-g-origin" aria-labelledby="ca-origin">
        <div className="ca-wrap ca-about__in">
          <h2 className="ca-h2 ca-h2--center" id="ca-origin" data-reveal>
            We learned <span className="ca-ital">attention</span>
            <br />
            the hard way
          </h2>
          <p className="ca-p ca-fill">
            Before Caimue, we made short films and ran two channels, Ennamo in Tamil and Ennitto in Malayalam. We grew
            them past two million organic views with nothing paid behind them. On a channel, nobody owes you their
            attention. You earn it. We bring that to every B2B brand we work with.
          </p>
          <div className="ca-more" data-reveal>
            <Link href="/channels" className="ca-btn ca-btn--purple">
              See the Originals
            </Link>
          </div>
        </div>
        <div className="ca-space" aria-hidden>
          <div className="ca-space__cam">
            {SPACE.map((p) => (
              <span
                key={p.src}
                className="ca-space__f"
                style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.w}vw`, ["--z" as string]: `${p.z}px` }}
                data-depth={p.z < -400 ? "back" : p.z < 0 ? "mid" : "front"}
              >
                <Image src={p.src} alt="" fill sizes={`${p.w + 4}vw`} />
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
