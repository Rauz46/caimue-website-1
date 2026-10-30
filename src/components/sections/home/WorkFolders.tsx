"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHOT_W = 1440;
const SHOT_H = 3600;

/* for now each folder holds the client's own website; swap shot and url as the real work arrives */
const FOLDERS = [
  {
    slug: "aventei",
    name: "Aventei",
    url: "https://www.aventei.com",
    logo: { src: "/logos/trim/01-micro-pe.webp", w: 344, h: 125, ink: 197 },
    line: "A US-focused micro private equity firm that needed a brand to match its ambition. We built its identity, website and LinkedIn from launch.",
    ground: "#efe8f9",
    dark: false,
  },
  {
    slug: "ignitho",
    name: "Ignitho",
    url: "https://www.ignitho.com",
    logo: { src: "/logos/trim/02-data-ai.webp", w: 328, h: 104, ink: 187 },
    line: "A data and AI company that sounded like every other. We rebuilt its story, website, sales deck and LinkedIn, and put its people on camera.",
    ground: "#dccff0",
    dark: false,
  },
  {
    slug: "simbfi",
    name: "Simbfi",
    url: "https://simbfi.com",
    logo: { src: "/logos/trim/05-finance.webp", w: 345, h: 93, ink: 167 },
    line: "A finance firm that had outgrown its website. New CEO, new services, same old pages. We repositioned it for business owners, not accountants.",
    ground: "#c3aee8",
    dark: false,
  },
  {
    slug: "piqual",
    name: "Piqual",
    url: "https://piqual.com",
    logo: { src: "/logos/trim/04-b2b-lead-gen.webp", w: 354, h: 164, ink: 155 },
    line: "A sales company people mistook for an email tool. We rewrote its website and social around the real story: a human sales team, powered by AI.",
    ground: "#9a72dc",
    dark: true,
  },
  {
    slug: "talentou",
    name: "Talentou",
    url: "https://talentou.com",
    logo: { src: "/logos/trim/07-talent-hiring.webp", w: 254, h: 48, ink: 231 },
    line: "A hiring brand that needed to be noticed in a crowded feed. We design the campaigns and posters that bring the right candidates in.",
    ground: "#672fb2",
    dark: true,
  },
];

const OUT = "expo.out";
const REST = { x: -28, y: -42 };

/**
 * The work as folders in an open box, seen from above one corner. The folder
 * under the pointer rises out of the box with its site on its face, and those
 * in front lean away. Clicking grows the site to the whole screen. Only
 * transforms, opacity and clip-path move.
 */
export function WorkFolders() {
  const stage = useRef<HTMLDivElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const folders = useRef<(HTMLButtonElement | null)[]>([]);
  const shots = useRef<(HTMLSpanElement | null)[]>([]);
  const view = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const pan = useRef<gsap.core.Tween | null>(null);
  const entered = useRef(false);
  const showing = useRef(false);
  const intent = useRef(0);
  const changed = useRef(0);
  const [active, setActive] = useState(FOLDERS.length - 1);
  const [open, setOpen] = useState<number | null>(null);

  const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* a short hover intent, so a folder rising under the pointer cannot set off its neighbours */
  const hover = (i: number) => {
    window.clearTimeout(intent.current);
    const wait = Math.max(70, 320 - (performance.now() - changed.current));
    intent.current = window.setTimeout(() => {
      changed.current = performance.now();
      setActive(i);
    }, wait);
  };

  const place = useCallback((current: number, duration: number, stagger = 0) => {
    const first = folders.current[0];
    if (!first) return;
    const h = first.offsetHeight;
    const gap = first.offsetWidth * 0.3;
    const mid = (FOLDERS.length - 1) / 2;
    folders.current.forEach((f, i) => {
      if (!f) return;
      const on = i === current;
      const ahead = i > current;
      const opts = { duration, delay: i * stagger, ease: OUT, overwrite: "auto" as const };
      gsap.to(f, { z: (i - mid) * gap + (ahead ? gap * 0.18 : 0), y: on ? -h * 0.24 : 0, rotationX: ahead ? -7 : 0, autoAlpha: 1, ...opts });
    });
  }, []);

  /* the open folder's site scrolls slowly by */
  const scrollShot = useCallback((current: number, from?: number) => {
    pan.current?.kill();
    shots.current.forEach((s, i) => {
      if (s && i !== current) gsap.to(s, { y: 0, duration: 0.6, ease: "power3.out", overwrite: true });
    });
    const shot = shots.current[current];
    const frame = shot?.parentElement;
    if (!shot || !frame || reduced()) return;
    const travel = shot.offsetHeight - frame.offsetHeight;
    if (travel <= 0) return;
    const y = from ?? 0;
    gsap.set(shot, { y });
    pan.current = gsap.to(shot, { y: -travel, duration: 22 * (1 + y / travel) + 0.01, delay: 0.5, ease: "none", overwrite: true });
  }, []);

  /* the stack fills as it comes into view; the whole scene leans a little with the pointer */
  useEffect(() => {
    const box = stage.current;
    const sc = scene.current;
    if (!box || !sc) return;
    gsap.set(sc, { rotationX: REST.x, rotationY: REST.y });
    if (reduced()) {
      entered.current = true;
      place(active, 0);
      return;
    }
    folders.current.forEach((f) => f && gsap.set(f, { y: 140, autoAlpha: 0 }));
    const st = ScrollTrigger.create({
      trigger: box,
      start: "top 85%",
      once: true,
      onEnter: () => {
        entered.current = true;
        place(active, 1.1, 0.08);
        scrollShot(active);
      },
    });
    const watch = new ResizeObserver(() => {
      if (entered.current) place(active, 0);
    });
    watch.observe(box);
    const rx = gsap.quickTo(sc, "rotationX", { duration: 1, ease: "power3.out" });
    const ry = gsap.quickTo(sc, "rotationY", { duration: 1, ease: "power3.out" });
    const lean = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const b = box.getBoundingClientRect();
      rx(REST.x - ((e.clientY - b.top) / b.height - 0.5) * 2.5);
      ry(REST.y + ((e.clientX - b.left) / b.width - 0.5) * 4);
    };
    const settle = () => {
      rx(REST.x);
      ry(REST.y);
    };
    box.addEventListener("pointermove", lean);
    box.addEventListener("pointerleave", settle);
    return () => {
      st.kill();
      watch.disconnect();
      window.clearTimeout(intent.current);
      pan.current?.kill();
      box.removeEventListener("pointermove", lean);
      box.removeEventListener("pointerleave", settle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!entered.current) return;
    place(active, reduced() ? 0 : 0.8);
    scrollShot(active);
    // ready before the click, so the opened site is already there
    new window.Image().src = `/work/${FOLDERS[active].slug}.webp`;
  }, [active, place, scrollShot]);

  /* the pointer takes over: moving down the folder reads down the site */
  const scrub = (i: number, e: React.PointerEvent<HTMLElement>) => {
    const shot = shots.current[i];
    const frame = shot?.parentElement;
    if (!shot || !frame || active !== i || e.pointerType !== "mouse") return;
    pan.current?.kill();
    const b = e.currentTarget.getBoundingClientRect();
    const travel = shot.offsetHeight - frame.offsetHeight;
    gsap.to(shot, { y: -travel * Math.min(1, Math.max(0, (e.clientY - b.top) / b.height)), duration: 0.9, ease: "power3.out", overwrite: true });
  };

  /* the site's sheet, as a clip of the whole screen */
  const clipOf = (i: number) => {
    const p = folders.current[i]?.querySelector(".wk-f__paper")?.getBoundingClientRect();
    if (!p) return "inset(0px 0px 0px 0px round 0px)";
    return `inset(${p.top}px ${window.innerWidth - p.right}px ${window.innerHeight - p.bottom}px ${p.left}px round 10px)`;
  };

  const openFolder = (i: number, from: HTMLElement) => {
    opener.current = from;
    pan.current?.pause();
    setActive(i);
    setOpen(i);
  };

  const closeFolder = useCallback(() => {
    const el = view.current;
    if (!el || open === null) return;
    showing.current = false;
    const done = () => {
      setOpen(null);
      opener.current?.focus({ preventScroll: true });
      pan.current?.resume();
    };
    if (reduced()) return done();
    gsap.to(el.querySelectorAll("[data-rise]"), { autoAlpha: 0, duration: 0.18, ease: "power2.in", overwrite: true });
    gsap.to(el, { clipPath: clipOf(open), duration: 0.7, ease: "expo.inOut", overwrite: true, onComplete: done });
  }, [open]);

  /* growing out of the folder */
  useLayoutEffect(() => {
    const el = view.current;
    if (!el || open === null || showing.current) return;
    showing.current = true;
    const focusClose = () => el.querySelector<HTMLElement>(".wk-v__close")?.focus({ preventScroll: true });
    if (reduced()) return void focusClose();
    gsap.fromTo(el, { clipPath: clipOf(open) }, { clipPath: "inset(0px 0px 0px 0px round 0px)", duration: 0.85, ease: "expo.inOut" });
    gsap.fromTo(el.querySelectorAll("[data-rise]"), { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.4, stagger: 0.06, ease: "power3.out", onStart: focusClose });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const move = (by: number) => {
    if (open === null) return;
    const next = (open + by + FOLDERS.length) % FOLDERS.length;
    setActive(next);
    setOpen(next);
    opener.current = folders.current[next];
    view.current?.querySelector(".wk-v__scroll")?.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFolder();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, closeFolder]);

  const f = open === null ? null : FOLDERS[open];
  const now = FOLDERS[active];

  return (
    <>
      <div className="wk">
        <h2 className="ca-h2 wk-title">
          Our <span className="ca-ital">work</span>
        </h2>

        <div className="wk-3d" ref={stage}>
          <div className="wk-scene" ref={scene}>
            <i className="wk-box wk-box--floor" />
            <i className="wk-box wk-box--back" />
            <i className="wk-box wk-box--left" />
            {FOLDERS.map((w, i) => (
              <button
                key={w.slug}
                type="button"
                ref={(n) => void (folders.current[i] = n)}
                className={`wk-f${w.dark ? " wk-f--dark" : ""}${active === i ? " is-open" : ""}`}
                style={{ ["--ground" as string]: w.ground }}
                aria-label={`${w.name}: open the work`}
                onPointerEnter={(e) => e.pointerType === "mouse" && hover(i)}
                onPointerLeave={() => window.clearTimeout(intent.current)}
                onPointerMove={(e) => scrub(i, e)}
                onFocus={() => setActive(i)}
                onClick={(e) => {
                  if (active === i) openFolder(i, e.currentTarget);
                  else setActive(i);
                }}
              >
                <span className="wk-f__tab">
                  <Image src={w.logo.src} alt="" width={w.logo.w} height={w.logo.h} sizes="120px" />
                </span>
                <span className="wk-f__paper">
                  <span className="wk-f__shot" ref={(n) => void (shots.current[i] = n)}>
                    <Image src={`/work/${w.slug}-sm.webp`} alt="" width={900} height={2250} unoptimized />
                  </span>
                </span>
              </button>
            ))}
            <i className="wk-box wk-box--right" />
            <i className="wk-box wk-box--front" />
          </div>
        </div>

        <div className="wk-say">
          <div className="wk-say__now" key={now.slug}>
            <span className="wk-say__mark">
              <Image className="wk-say__logo" src={now.logo.src} alt={now.name} width={now.logo.w} height={now.logo.h} sizes="240px" style={{ ["--ink" as string]: now.logo.ink }} />
            </span>
            <p className="wk-say__line">{now.line}</p>
          </div>
          <div className="wk-say__acts">
            <button type="button" className="wk-say__go" onClick={() => openFolder(active, folders.current[active] as HTMLElement)}>
              Open the work
              <svg viewBox="0 0 16 16" aria-hidden>
                <path d="M4 12L12 4M5.5 4H12V10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <Link href="/brands" className="ca-btn ca-btn--line">
              See all the work
            </Link>
          </div>
        </div>
      </div>

      {f &&
        createPortal(
          <div className="wk-v" ref={view} role="dialog" aria-modal="true" aria-label={f.name} data-lenis-prevent style={{ ["--ground" as string]: f.ground }} data-dark={f.dark || undefined}>
            <header className="wk-v__bar">
              <span className="wk-v__who" data-rise key={f.slug}>
                <Image src={f.logo.src} alt={f.name} width={f.logo.w} height={f.logo.h} sizes="200px" style={{ ["--ink" as string]: f.logo.ink }} />
              </span>
              <p className="wk-v__line" data-rise>
                {f.line}
              </p>
              <span className="wk-v__acts" data-rise>
                <a className="wk-v__visit" href={f.url} target="_blank" rel="noreferrer noopener">
                  Visit website
                  <svg viewBox="0 0 16 16" aria-hidden>
                    <path d="M4 12L12 4M5.5 4H12V10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </a>
                <button type="button" className="wk-v__btn" onClick={() => move(-1)} aria-label="Previous work">
                  <svg viewBox="0 0 16 16" aria-hidden>
                    <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <button type="button" className="wk-v__btn" onClick={() => move(1)} aria-label="Next work">
                  <svg viewBox="0 0 16 16" aria-hidden>
                    <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
                <button type="button" className="wk-v__btn wk-v__close" onClick={closeFolder} aria-label="Close">
                  <svg viewBox="0 0 16 16" aria-hidden>
                    <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </span>
            </header>
            <div className="wk-v__scroll" data-rise tabIndex={0}>
              <Image key={f.slug} className="wk-v__shot" src={`/work/${f.slug}.webp`} alt={`${f.name} website`} width={SHOT_W} height={SHOT_H} unoptimized />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
