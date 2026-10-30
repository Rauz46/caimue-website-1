"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Hero } from "./Hero";
import { ClientMarquee } from "./ClientMarquee";
import { WorkFolders } from "./WorkFolders";
import { ARROW_PATH, HAND_PATH } from "@/components/motion/Cursor";
import "./home-v3.css";

/* ============================================================
   THE HOMEPAGE (v6, 30 Oct 2026). On desktop every section is exactly one
   screen. The click from the hero opens section two (brand purple, the
   figures as three cards in depth, the clients large below); then the work cards, the service
   floor, the four stages as cards, and the origin statement. Copy: the
   doc and the owner's page text, word for word.
   ============================================================ */

gsap.registerPlugin(ScrollTrigger, SplitText);

/* trimmed to their ink. Measured on each wordmark's own capitals, leaving out the ™, taglines and swashes:
   ink, the width that gives every mark a 40px capital; y, the shift (% of its height) that sets the capitals on one line */
const CLIENTS = [
  { name: "Ignitho", src: "/logos/trim/02-data-ai.webp", w: 328, h: 104, ink: 187, y: 16 },
  { name: "Simbfi", src: "/logos/trim/05-finance.webp", w: 345, h: 93, ink: 167, y: -4 },
  { name: "Piqual", src: "/logos/trim/04-b2b-lead-gen.webp", w: 354, h: 164, ink: 155, y: 9.5 },
  { name: "Aventei", src: "/logos/trim/01-micro-pe.webp", w: 344, h: 125, ink: 197, y: 18.5 },
  { name: "Nuivio", src: "/logos/trim/03-venture-studios.webp", w: 349, h: 114, ink: 180, y: 16.4 },
  { name: "Talentou", src: "/logos/trim/07-talent-hiring.webp", w: 254, h: 48, ink: 231, y: 0 },
];

const PROOF = [
  { value: 2000000, suffix: "+", line: "organic views on channels we built ourselves, with zero ad spend" },
  { value: 6, suffix: "", line: "B2B brands we run marketing for" },
  { value: 25, suffix: "+", line: "creators we discovered and worked with" },
];


const SERVICES = [
  { title: "Brand strategy and story", line: "Who you are, who it is for, and the words to say it." },
  { title: "Video production", line: "Brand videos, customer stories, founder series and social video. Made to be watched." },
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

/* span: where the stage sits on its small scale, in steps (six weeks, then month 2 onward) */
const STAGES = [
  { stage: "Brief", when: "Week 1", span: [0, 1], text: "We study your business, talk to you and, where possible, your customers, and write back what we heard. Nothing is made until you agree." },
  { stage: "Blueprint", when: "Week 2", span: [1, 2], text: "One page with your positioning, your message and the plan, with dates and owners. Approved before any design." },
  { stage: "Build", when: "Weeks 3 to 6", span: [2, 6], text: "Website, sales deck, videos and content, in that order. You see everything three working days before it goes live." },
  { stage: "Broadcast", when: "Month 2 onward", span: [6, 7], text: "We run your channels, report what is working, and plan next month before this one ends." },
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

/* the flat graphic filling the lower part of each card: the views rising, the six clients themselves, the creators */
const BARS = [
  [14, "#ece4f7"],
  [20, "#e2d6f3"],
  [27, "#d9cbef"],
  [34, "#c9b5e9"],
  [42, "#b89ee2"],
  [50, "#a27fdb"],
  [58, "#8c5fd2"],
  [66, "#7a45c4"],
  [74, "#672fb2"],
  [82, "#9a32b4"],
  [91, "#cc1f9c"],
  [100, "#ff0080"],
] as const;

function ProofArt({ k }: { k: number }) {
  if (k === 0) {
    return (
      <span className="ca-art ca-art--bars" data-depth="0.45" aria-hidden>
        {BARS.map(([height, background]) => (
          <i key={height} style={{ height: `${height}%`, background }} />
        ))}
      </span>
    );
  }
  if (k === 1) {
    return (
      <span className="ca-art ca-art--logos" data-depth="0.45" aria-hidden>
        {CLIENTS.map((c) => (
          <i key={c.name}>
            <Image src={c.src} alt="" width={c.w} height={c.h} sizes="120px" style={{ ["--ink" as string]: c.ink }} />
          </i>
        ))}
      </span>
    );
  }
  return (
    <span className="ca-art ca-art--dots" data-depth="0.45" aria-hidden>
      {Array.from({ length: 25 }, (_, n) => (
        <i key={n} />
      ))}
    </span>
  );
}

/** A figure that counts up when cued (desktop) or once on screen (phones); the real value is rendered first. */
function Count({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const num = (n: number) => Math.round(n).toLocaleString("en-US");
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const o = { n: 0 };
    const tw = gsap.to(o, { n: value, duration: 1.8, ease: "power3.out", paused: true, onUpdate: () => void (el.textContent = num(o.n)) });
    const play = () => void tw.play();
    const cued = window.matchMedia("(min-width: 900px)").matches;
    const st = cued ? null : ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: play });
    if (cued) window.addEventListener("caimue:proof", play, { once: true });
    el.textContent = num(0);
    return () => {
      st?.kill();
      window.removeEventListener("caimue:proof", play);
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

export function Home() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wide = window.matchMedia("(min-width: 900px)").matches;

    const ctx = gsap.context(() => {
      /* ---------- the click: the scroll brings the arrow in; on the word it becomes the hand and the
         word answers; then the press and the opening play at their own pace, the disc over the cursor ---------- */
      const stage = el.querySelector<HTMLElement>(".ca-stage");
      const two = stage?.querySelector<HTMLElement>(".ca-two");
      const word = stage?.querySelector<HTMLElement>(".hx-tone");
      const hand = stage?.querySelector<HTMLElement>(".ca-clicker");
      if (stage && two && word && hand && wide) {
        const at = () => {
          const st = stage.getBoundingClientRect();
          const w = word.getBoundingClientRect();
          return { x: w.left - st.left + w.width * 0.5, y: w.top - st.top + w.height * 0.74, w: st.width, h: st.height };
        };
        const far = () => {
          const p = at();
          return Math.hypot(Math.max(p.x, p.w - p.x), Math.max(p.y, p.h - p.y)) + 80;
        };
        const path = () => {
          const p = at();
          return { x0: p.w + 30, y0: p.h * 0.92, cx: p.w * 0.84, cy: p.y + p.h * 0.1, x1: p.x, y1: p.y };
        };
        let P = path();
        const glide = { t: 0 };
        const CLICK_AT = 0.44;
        let clicked = false;
        let counted = false;
        let refreshing = false;
        // eased, so the hand glides back onto its path after the click instead of jumping there
        const handX = gsap.quickTo(hand, "x", { duration: 0.35, ease: "power3.out" });
        const handY = gsap.quickTo(hand, "y", { duration: 0.35, ease: "power3.out" });
        const placeHand = () => {
          const t = glide.t;
          const u = 1 - t;
          handX(u * u * P.x0 + 2 * u * t * P.cx + t * t * P.x1);
          handY(u * u * P.y0 + 2 * u * t * P.cy + t * t * P.y1);
          gsap.set(hand, { autoAlpha: t > 0 ? 1 : 0 });
        };

        const film = stage.querySelector<HTMLVideoElement>(".hx-bb");
        const click = gsap.timeline({
          paused: true,
          // fully open: drop the circle, so no edge of it can show whatever the layout does next
          onComplete: () => {
            film?.pause();
            two.style.clipPath = "none";
          },
          onReverseComplete: placeHand,
        });
        click
          .to(hand, { scale: 0.82, duration: 0.1, ease: "power2.in" }, 0)
          .to(word, { scale: 0.97, duration: 0.1, ease: "power2.in" }, 0)
          .to(hand, { scale: 1, duration: 0.32, ease: "power3.out" }, 0.1)
          .to(word, { scale: 1, duration: 0.32, ease: "power3.out" }, 0.1)
          .fromTo(
            two,
            { clipPath: () => `circle(0px at ${P.x1}px ${P.y1}px)` },
            { clipPath: () => `circle(${far()}px at ${P.x1}px ${P.y1}px)`, duration: 1.1, ease: "expo.inOut" },
            0.16,
          )
          .to(hand, { autoAlpha: 0, duration: 0.01 }, 0.8)
          .from(two.querySelectorAll("[data-emerge]"), { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.07, ease: "expo.out" }, 0.72)
          .call(
            () => {
              if (counted) return;
              counted = true;
              window.dispatchEvent(new Event("caimue:proof"));
            },
            [],
            0.9,
          );

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          onUpdate() {
            if (refreshing) return;
            const p = this.progress();
            hand.classList.toggle("is-hand", p >= 0.33);
            if (!clicked && p >= CLICK_AT) {
              clicked = true;
              click.timeScale(1).play();
            } else if (clicked && (tl.scrollTrigger?.progress ?? p) < CLICK_AT - 0.04) {
              // the real scroll, not the scrub: a layout refresh drops the scrub back to 0 and it catches up late
              clicked = false;
              void film?.play();
              // the same move played backward, on its own curve
              click.timeScale(2).reverse();
            }
          },
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: "+=150%",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefreshInit: () => {
              refreshing = true;
            },
            onRefresh: () => {
              refreshing = false;
              P = path();
            },
          },
        });
        tl.fromTo(
            glide,
            { t: 0 },
            {
              t: 1,
              duration: 0.3,
              ease: "power2.inOut",
              immediateRender: false,
              onUpdate: () => {
                if (click.progress() > 0) return;
                placeHand();
              },
            },
            0.02,
          )
          .fromTo(word, { color: "#d9cbef" }, { color: "#ffffff", duration: 0.06, immediateRender: false }, 0.32)
          .fromTo(".hx-under path", { strokeWidth: 9 }, { strokeWidth: 14, duration: 0.06, immediateRender: false }, 0.32)
          .to({}, { duration: 0.62 }, 0.38);
      }

      /* ---------- section two: flat at rest; on hover the card rises and leans to the pointer, its layers
         shifting by depth (the text nearest, the graphic behind it), and all of it settles back on leave ---------- */
      if (wide) {
        el.querySelectorAll<HTMLElement>(".ca-t3").forEach((cell) => {
          const card = cell.querySelector<HTMLElement>(".ca-t3__card");
          if (!card) return;
          const to = (node: HTMLElement, prop: string) => gsap.quickTo(node, prop, { duration: 0.7, ease: "power3.out" });
          const rx = to(card, "rotationX");
          const ry = to(card, "rotationY");
          const lift = to(card, "y");
          const growX = to(card, "scaleX");
          const growY = to(card, "scaleY");
          const grow = (s: number) => {
            growX(s);
            growY(s);
          };
          // the elements' shadows fall away from the pointer: offset and strength, eased, read by the stylesheet
          const shade = { x: 0, y: 0, a: 0 };
          const cast = (x: number, y: number, a: number) =>
            gsap.to(shade, {
              x,
              y,
              a,
              duration: 0.7,
              ease: "power3.out",
              overwrite: true,
              onUpdate: () => {
                card.style.setProperty("--sx", `${shade.x}px`);
                card.style.setProperty("--sy", `${shade.y}px`);
                card.style.setProperty("--sa", `${shade.a}`);
              },
            });
          const layers = Array.from(card.querySelectorAll<HTMLElement>("[data-depth]"), (node) => ({
            depth: Number(node.dataset.depth),
            x: to(node, "x"),
            y: to(node, "y"),
          }));
          cell.addEventListener("pointermove", (e) => {
            const b = cell.getBoundingClientRect();
            const px = (e.clientX - b.left) / b.width - 0.5;
            const py = (e.clientY - b.top) / b.height - 0.5;
            rx(py * -6);
            ry(px * 7);
            lift(-10);
            grow(1.02);
            cast(px * -18, py * -14, 0.16);
            for (const l of layers) {
              l.x(px * l.depth * 16);
              l.y(py * l.depth * 12);
            }
          });
          cell.addEventListener("pointerleave", () => {
            rx(0);
            ry(0);
            lift(0);
            grow(1);
            cast(0, 0, 0);
            for (const l of layers) {
              l.x(0);
              l.y(0);
            }
          });
        });
      }

      /* ---------- headings rise line by line; soft rises once ---------- */
      gsap.utils.toArray<HTMLElement>(".ca-h2").forEach((h) => {
        SplitText.create(h, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, { yPercent: 110, duration: 1.1, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: h, start: "top 88%", once: true } }),
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((n) => {
        gsap.from(n, { y: 32, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: n, start: "top 92%", once: true } });
      });


      /* ---------- the services floor: tiles drop onto it one after another ---------- */
      const tiles = el.querySelectorAll(".ca-tile");
      if (tiles.length) {
        gsap.from(tiles, { y: -60, autoAlpha: 0, duration: 0.65, stagger: 0.04, ease: "power3.out", clearProps: "transform,opacity,visibility", scrollTrigger: { trigger: ".ca-floor-stage", start: "top 92%", once: true } });
      }

      /* ---------- the four stages: the rail fills; as it reaches each card, the card rises and its
         place on the calendar fills ---------- */
      const cards = gsap.utils.toArray<HTMLElement>("[data-stage]");
      if (cards.length) {
        const flow = gsap.timeline({ scrollTrigger: { trigger: ".ca-sc", start: "top 76%", once: true } });
        if (wide) flow.fromTo(".ca-sc__rail i", { scaleX: 0 }, { scaleX: 1, duration: 1.9, ease: "power1.inOut" }, 0);
        cards.forEach((c, i) => {
          flow
            .from(c, { y: 56, autoAlpha: 0, duration: 0.9, ease: "expo.out" }, i * 0.42)
            .from(c.querySelector(".ca-sc__fill"), { scaleX: 0, transformOrigin: "0% 50%", duration: 0.8, ease: "expo.out" }, i * 0.42 + 0.3);
        });
      }

      /* ---------- where we came from: the fill, and a slow dolly through the frames ---------- */
      gsap.utils.toArray<HTMLElement>(".ca-fill").forEach((p) => {
        const split = SplitText.create(p, { type: "words", wordsClass: "ca-fw", aria: "none" });
        gsap.to(split.words, { opacity: 1, stagger: 0.04, ease: "none", scrollTrigger: { trigger: p, start: "top 85%", end: "bottom 68%", scrub: true } });
      });
      const cam = el.querySelector(".ca-space__cam");
      if (cam && wide) {
        gsap.fromTo(cam, { z: -140 }, { z: 50, ease: "none", scrollTrigger: { trigger: ".ca-about", start: "top bottom", end: "bottom top", scrub: 0.6 } });
      }

      /* ---------- the footer's contents rise into place as the page lifts off it ---------- */
      const ft = document.querySelector<HTMLElement>(".ft");
      if (ft) {
        gsap.fromTo(
          ft.querySelectorAll(".ft__mark, .ft__say, .ft__bar"),
          { y: () => -ft.offsetHeight * 0.45 },
          { y: 0, ease: "none", scrollTrigger: { trigger: el, start: "bottom bottom", end: () => `+=${ft.offsetHeight}`, scrub: true, invalidateOnRefresh: true } },
        );
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className="cx ca" ref={root}>
      <div className="ca-stage">
        <Hero />

        <section className="ca-proof-s ca-two ca-gridded" data-grid aria-label="Brands we run marketing for">
          <div className="ca-two__in">
            <header className="ca-two__top" data-emerge>
              <h2 className="ca-h2 ca-two__title">Brands we run marketing for</h2>
              <p className="ca-two__head">We learned to earn attention on our own channels first</p>
            </header>
            <div className="ca-two__band" data-emerge>
              <ClientMarquee logos={CLIENTS} />
            </div>
            <ul className="ca-tiles3">
              {PROOF.map((p, k) => (
                <li key={p.line} className={`ca-t3 ca-t3--${k + 1}`} data-emerge>
                  <div className="ca-t3__card">
                    <div className="ca-t3__text" data-depth="1">
                      <Count value={p.value} suffix={p.suffix} />
                      <span className="ca-t3__line">{p.line}</span>
                    </div>
                    <ProofArt k={k} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="ca-clicker" aria-hidden>
          <svg className="ca-clicker__arrow" viewBox="0 0 30 30">
            <path d={ARROW_PATH} />
          </svg>
          <svg className="ca-clicker__hand" viewBox="0 0 256 256">
            <path d={HAND_PATH} paintOrder="stroke" />
          </svg>
        </div>
      </div>

      {/* ==================== THE WORK ==================== */}
      <section className="ca-pad ca-g-plain ca-g-work ca-gridded ca-screen" data-grid id="work">
        <div className="ca-wrap">
          <WorkFolders />
        </div>
      </section>

      {/* ==================== WHAT WE DO: the service floor ==================== */}
      <section className="ca-pad ca-g-deep ca-g-dark ca-services ca-screen" id="services">
        <div className="ca-wrap">
          <div className="ca-head" data-reveal>
            <h2 className="ca-h2">
              Everything your marketing needs <span className="ca-ital">One team</span>
            </h2>
            <p className="ca-p ca-p--inv">
              No handovers between agencies. No three versions of your story. The people who shape your message also build your
              website, create your videos and run your channels.
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

      {/* ==================== THE FOUR STAGES: cards on a rail ==================== */}
      <section className="ca-pad ca-g-plain ca-g-stages ca-gridded ca-screen" data-grid aria-labelledby="ca-how">
        <div className="ca-wrap">
          <div className="ca-head">
            <h2 className="ca-h2" id="ca-how">
              Four stages
              <br />A clear <span className="ca-ital">date</span> on each
            </h2>
          </div>
          <div className="ca-sc">
            <div className="ca-sc__rail" aria-hidden>
              <i />
            </div>
            <ol className="ca-sc__list">
              {STAGES.map((s) => (
                <li key={s.stage} className="ca-sc__card" data-stage>
                  <div className="ca-sc__top">
                    <span className="ca-sc__when">{s.when}</span>
                    <div className="ca-sc__scale" aria-hidden>
                    <i className="ca-sc__fill" style={{ left: `${(s.span[0] / 7) * 100}%`, width: `${((s.span[1] - s.span[0]) / 7) * 100}%` }} />
                  </div>
                  </div>
                  <div className="ca-sc__body">
                    <h3 className="ca-sc__name">{s.stage}</h3>
                    <p className="ca-sc__text">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ==================== WHERE WE CAME FROM ==================== */}
      <section className="ca-pad ca-about ca-g-purple ca-g-dark ca-g-origin ca-screen" aria-labelledby="ca-origin">
        <div className="ca-wrap ca-about__in">
          <h2 className="ca-h2 ca-h2--center" id="ca-origin">
            We learned <span className="ca-ital">attention</span>
            <br />
            the hard way
          </h2>
          <p className="ca-p ca-fill">
            Before Caimue, we made short films and ran two channels, Ennamo in Tamil and Ennitto in Malayalam. On a channel, nobody
            owes you their attention. You earn it, every single post. We bring that same discipline to every B2B brand we work with.
          </p>
          <div className="ca-more" data-reveal>
            <Link href="/platforms" className="ca-btn ca-btn--purple">
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
