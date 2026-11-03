"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import gsap from "gsap";
import "./work-carousel.css";

type Piece = { src: string; small?: string; w: number; h: number; alt: string; cut?: [number, number] };

/* Each card holds a client's pieces of work, of any kind: a site, a deck page, a poster, a frame
   from a film. Opening a card shows them all in order. cut: a strip of a capture to skip, where the
   site showed a cookie bar.
   stack: one to three sheets floating in the card, bottom to top. crop is [x, y, w, h] in the picture's
   own pixels and w is the sheet's width in the card; a poster or film frame can be a single sheet.
   For now each holds the client's own website; add pieces and sheets as the real work arrives. */
const site = (slug: string, name: string, cut?: [number, number]): Piece => ({ src: `/work/${slug}.webp`, small: `/work/${slug}-sm.webp`, w: 1440, h: 3600, alt: `${name} website`, cut });

type Sheet = { src: string; size: number; crop: [number, number, number, number]; w: number };
const sheets = (slug: string, list: [[number, number, number, number], number][]): Sheet[] =>
  list.map(([crop, width]) => ({ src: `/work/${slug}-sm.webp`, size: 1440, crop, w: width }));

const WORK: { slug: string; name: string; url: string; logo: string; logoH: number; tile: "purple" | "lav"; line: string; pieces: Piece[]; stack: Sheet[] }[] = [
  {
    slug: "aventei",
    name: "Aventei",
    url: "https://www.aventei.com",
    logo: "/logos/trim/01-micro-pe.webp",
    logoH: 44,
    tile: "purple",
    stack: sheets("aventei", [[[60, 2520, 1320, 800], 450], [[790, 310, 560, 490], 310], [[50, 200, 800, 225], 600]]),
    line: "A US-focused micro private equity firm that needed a brand to match its ambition. We built its identity, website and LinkedIn from launch.",
    pieces: [site("aventei", "Aventei", [835, 932])],
  },
  {
    slug: "ignitho",
    name: "Ignitho",
    url: "https://www.ignitho.com",
    logo: "/logos/trim/02-data-ai.webp",
    logoH: 36,
    tile: "lav",
    stack: sheets("ignitho", [[[30, 1190, 1030, 400], 450], [[60, 1790, 1320, 600], 400], [[300, 215, 860, 290], 600]]),
    line: "A data and AI company that sounded like every other. We rebuilt its story, website, sales deck and LinkedIn, and put its people on camera.",
    pieces: [site("ignitho", "Ignitho", [838, 900])],
  },
  {
    slug: "simbfi",
    name: "Simbfi",
    url: "https://simbfi.com",
    logo: "/logos/trim/05-finance.webp",
    logoH: 36,
    tile: "purple",
    stack: sheets("simbfi", [[[120, 2130, 1200, 440], 450], [[880, 200, 510, 470], 310], [[40, 185, 840, 250], 600]]),
    line: "A finance firm that had outgrown its website. New CEO, new services, same old pages. We repositioned it for business owners, not accountants.",
    pieces: [site("simbfi", "Simbfi")],
  },
  {
    slug: "piqual",
    name: "Piqual",
    url: "https://piqual.com",
    logo: "/logos/trim/04-b2b-lead-gen.webp",
    logoH: 48,
    tile: "lav",
    stack: sheets("piqual", [[[200, 1400, 1040, 600], 450], [[900, 170, 420, 330], 330], [[50, 170, 820, 190], 600]]),
    line: "A sales company people mistook for an email tool. We rewrote its website and social around the real story: a human sales team, powered by AI.",
    pieces: [site("piqual", "Piqual")],
  },
  {
    slug: "talentou",
    name: "Talentou",
    url: "https://talentou.com",
    logo: "/logos/trim/07-talent-hiring.webp",
    logoH: 31,
    tile: "purple",
    stack: sheets("talentou", [[[200, 1370, 1040, 590], 450], [[860, 235, 450, 315], 330], [[50, 195, 800, 170], 600]]),
    line: "A hiring brand that needed to be noticed in a crowded feed. We design the campaigns and posters that bring the right candidates in.",
    pieces: [site("talentou", "Talentou")],
  },
];

const N = WORK.length;
const FOLLOW = 7; // how quickly the row catches up with where it is going
const wrap = (i: number) => ((i % N) + N) % N;

/* the stack, in the card's own units: where each of three slots sits closed (a tight pile) and open */
const STACK = {
  tile: { w: 540, h: 390, t: 30 },
  thick: [20, 20, 24],
  closed: [[16, 10], [0, 0], [-14, -8]],
  open: [[150, 170], [-205, 110], [30, -20]],
  zClosed: [82, 124, 168],
  zOpen: [92, 178, 272],
};
const ROT_X = 56;
const ROT_Z = -35;
const EDGES = 5; // copies behind a slab that make its thickness
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const div = (cls: string, parent: Element) => {
  const d = document.createElement("div");
  d.className = cls;
  parent.appendChild(d);
  return d;
};

/* every piece in a card, one after another */
function workMarkup(i: number) {
  return WORK[i].pieces
    .map((p) => {
      const size = `width="${p.w}" height="${p.h}" decoding="async"`;
      if (!p.cut) return `<img src="${p.src}" alt="${p.alt}" ${size}>`;
      return (
        `<div class="wk-slice" style="aspect-ratio:${p.w}/${p.cut[0]}"><img src="${p.src}" alt="${p.alt}" ${size}></div>` +
        `<div class="wk-slice" style="aspect-ratio:${p.w}/${p.h - p.cut[1]}"><img src="${p.src}" alt="" ${size} style="margin-top:${(-p.cut[1] / p.w) * 100}%"></div>`
      );
    })
    .join("");
}

/**
 * The work: a looping row of cards, the one at the centre larger and in front. Each card
 * is a dark isometric space, the same world as the service floor, holding the work as a
 * stack of thick sheets that opens as the card reaches the centre and closes as it leaves.
 * Everything comes from a card's distance to the centre, so nothing jumps. Sideways scroll,
 * drag or the arrows move the row. Click a side card to centre it; click the centre card to
 * grow its work to the whole screen.
 */
export function WorkCarousel() {
  const root = useRef<HTMLElement>(null);
  const viewerEl = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const work = root.current;
    const viewer = viewerEl.current;
    if (!mounted || !work || !viewer) return;

    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctl = new AbortController();
    const listen = { signal: ctl.signal };
    const q = <E extends Element>(s: string, from: ParentNode = work) => from.querySelector(s) as E;
    const row = q<HTMLElement>(".wc-rail");
    const cards = Array.from(work.querySelectorAll<HTMLElement>(".wc-card"));
    const sheet = q<HTMLElement>(".wk-v-sheet", viewer);
    const back = q<HTMLElement>(".wk-v-back", viewer);
    const logo = q<HTMLImageElement>(".wk-v-logo", viewer);
    const visit = q<HTMLAnchorElement>(".wk-v-visit", viewer);
    const prev = q<HTMLElement>(".wk-v-prev", viewer);
    const next = q<HTMLElement>(".wk-v-next", viewer);
    const close = q<HTMLElement>(".wk-v-close", viewer);

    /* ---------- each card's stack, built for the current size ---------- */
    type Part = { W: number; H: number; slot: number; face: HTMLElement; dim: HTMLElement; cast: HTMLElement | null; sheet: HTMLElement; sheen: HTMLElement | null };
    type Built = { el: HTMLElement; iso: HTMLElement; words: HTMLElement; parts: Part[]; tileCast: HTMLElement };
    let built: Built[] = [];
    let G = { cw: 0, ch: 0, s: 0.6, Xs: 0, step: 0, k: 1.3, u: 1 };
    let loadImages = false;
    const px = (v: number) => `${Math.round(v * G.u * 100) / 100}px`;

    const solid = (parent: HTMLElement, w_: number, h_: number, t: number, top: string, edgeA: string, edgeB: string, radius: number) => {
      parent.textContent = "";
      Object.assign(parent.style, { width: px(w_), height: px(h_) });
      for (let i = EDGES; i >= 1; i--) {
        const ex = div("wc-ex", parent);
        ex.style.background = i > EDGES * 0.55 ? edgeB : edgeA;
        ex.style.borderRadius = px(radius);
        ex.style.transform = `translateZ(${(-(t * G.u) * i) / EDGES}px)`;
      }
      const f = div("wc-face", parent);
      f.style.background = top;
      f.style.borderRadius = px(radius);
      return f;
    };

    const buildCard = (cardEl: HTMLElement, i: number): Built => {
      const item = WORK[i];
      const u = G.u;
      const scene = q<HTMLElement>(".wc-scene", cardEl);
      scene.textContent = "";
      const iso = div("wc-iso", scene);
      const floor = div("wc-floor", iso);
      const fs = 1500 * u;
      const cell = 75 * u;
      Object.assign(floor.style, { left: px(-750), top: px(-750), width: `${fs}px`, height: `${fs}px`, backgroundSize: `${cell}px ${cell}px`, transform: "translateZ(-2px)" });
      const ground = div("wc-ground", iso);
      Object.assign(ground.style, { left: px(-STACK.tile.w / 2 + 14), top: px(-STACK.tile.h / 2 + 30), width: px(STACK.tile.w), height: px(STACK.tile.h) });

      const lav = item.tile === "lav";
      const tile = div("wc-slab", iso);
      const tileFace = solid(tile, STACK.tile.w, STACK.tile.h, STACK.tile.t, lav ? "#e4d9f5" : "#672fb2", lav ? "#b7a2dc" : "#4a2190", lav ? "#9f87cc" : "#3e1a75", 30);
      tile.style.left = px(-STACK.tile.w / 2);
      tile.style.top = px(-STACK.tile.h / 2);
      tile.style.transform = `translateZ(${px(STACK.tile.t)})`;

      const offset = 3 - item.stack.length; // fewer sheets take the top slots
      const parts: Part[] = item.stack.map((s, j) => {
        const slot = j + offset;
        const [cx, cy, cwid, chei] = s.crop;
        const W = s.w;
        const H = (W * chei) / cwid;
        const sheet = div("wc-slab", iso);
        const face = solid(sheet, W, H, STACK.thick[slot], "#fff", "#efe8fa", "#b7a2dc", 14);
        sheet.style.left = px(-W / 2);
        sheet.style.top = px(-H / 2);
        const zoom = (W * u) / cwid;
        const img = div("wc-img", face);
        img.dataset.src = s.src;
        Object.assign(img.style, { borderRadius: px(14), backgroundSize: `${s.size * zoom}px auto`, backgroundPosition: `${-cx * zoom}px ${-cy * zoom}px` });
        if (loadImages) img.style.backgroundImage = `url("${s.src}")`;
        const dim = div("wc-dim", face);
        div("wc-rim", face);
        const top = j === item.stack.length - 1;
        // the top sheet carries the light: brighter above, and a sheen that travels as the card moves
        const sheen = top ? div("wc-sheen", face) : null;
        return { W, H, slot, face, dim, cast: null, sheet, sheen };
      });
      // a sheet's shadow falls inside the face of the sheet below, so it stops at its edge
      parts.forEach((p, j) => {
        const upper = parts[j + 1];
        if (!upper) return;
        const cast = div("wc-cast", p.face);
        Object.assign(cast.style, { width: px(upper.W), height: px(upper.H), borderRadius: px(18), filter: `blur(${px(20)})` });
        p.cast = cast;
        p.face.insertBefore(cast, p.dim);
      });
      const tileCast = div("wc-cast", tileFace);
      Object.assign(tileCast.style, { width: px(parts[0].W), height: px(parts[0].H), borderRadius: px(18), filter: `blur(${px(24)})` });
      return { el: cardEl, iso, words: q<HTMLElement>(".wc-words", cardEl), parts, tileCast };
    };

    /* ---------- the row: pos follows target; both in cards, and free to run past either end ---------- */
    let pos = 0;
    let target = 0;
    let drawn = NaN;
    let focus = -1;
    let open = RM ? 1 : 0; // the first opening, when the section arrives
    let inView = false;
    let tiltX = 0;
    let tiltY = 0;
    let wantX = 0;
    let wantY = 0;

    const draw = () => {
      const { cw, ch, s, Xs, step, k, u } = G;
      built.forEach((b, i) => {
        // the shortest way round the loop
        const d = wrap(i - pos + N / 2) - N / 2;
        const a = Math.abs(d);
        if (a >= 2.05) {
          b.el.style.visibility = "hidden";
          return;
        }
        b.el.style.visibility = "visible";
        const e = smooth(1 - Math.min(a, 1)); // 1 at the centre, 0 from one card away
        const X = Math.sign(d) * (a <= 1 ? Xs * a : Xs + (a - 1) * step);
        b.el.style.transform = `translate3d(${X.toFixed(2)}px,0,0) scale(${lerp(s, 1, e).toFixed(4)})`;
        b.el.style.zIndex = String(100 - Math.round(a * 20));
        // the words grow against the shrinking card, so they stay readable on the sides
        b.words.style.transform = `scale(${lerp(k, 1, e).toFixed(4)})`;

        const o = e * open;
        const ss = lerp(1.1, 1, e);
        const ix = lerp(0.5, 0.45, e) * cw;
        const iy = lerp(0.4, 0.5, e) * ch;
        b.iso.style.transform = `translate3d(${ix.toFixed(2)}px,${iy.toFixed(2)}px,0) rotateX(${(ROT_X + tiltY * e).toFixed(3)}deg) rotateZ(${(ROT_Z + tiltX * e).toFixed(3)}deg) scale3d(${ss},${ss},${ss})`;

        const at = b.parts.map((p) => ({
          x: lerp(STACK.closed[p.slot][0], STACK.open[p.slot][0], o) * u,
          y: lerp(STACK.closed[p.slot][1], STACK.open[p.slot][1], o) * u,
          z: lerp(STACK.zClosed[p.slot], STACK.zOpen[p.slot], o) * u,
        }));
        b.parts.forEach((p, j) => {
          p.sheet.style.transform = `translate3d(${at[j].x.toFixed(2)}px,${at[j].y.toFixed(2)}px,${at[j].z.toFixed(2)}px)`;
          // lower sheets sit in the shade of those above, and catch light as the stack opens
          p.dim.style.opacity = j === b.parts.length - 1 ? "0" : lerp(p.slot === 0 ? 0.8 : 0.62, p.slot === 0 ? 0.22 : 0.06, o).toFixed(3);
          if (p.sheen) p.sheen.style.transform = `translate3d(${(d * -38).toFixed(2)}%,0,0)`;
          const up = b.parts[j + 1];
          if (p.cast && up) {
            const gap = at[j + 1].z - at[j].z;
            const lx = at[j + 1].x - at[j].x + ((p.W - up.W) / 2) * u + gap * 0.1;
            const ly = at[j + 1].y - at[j].y + ((p.H - up.H) / 2) * u + gap * 0.34;
            p.cast.style.transform = `translate(${lx.toFixed(2)}px,${ly.toFixed(2)}px)`;
            p.cast.style.opacity = lerp(0.9, 0.4, o).toFixed(3);
          }
        });
        const q0 = b.parts[0];
        const gap = at[0].z - STACK.tile.t * u;
        const lx = at[0].x + ((STACK.tile.w - q0.W) / 2) * u + gap * 0.1;
        const ly = at[0].y + ((STACK.tile.h - q0.H) / 2) * u + gap * 0.34;
        b.tileCast.style.transform = `translate(${lx.toFixed(2)}px,${ly.toFixed(2)}px)`;
        b.tileCast.style.opacity = lerp(0.8, 0.42, o).toFixed(3);
      });
      const f = wrap(Math.round(pos));
      if (f !== focus) {
        focus = f;
        cards.forEach((c, i) => c.classList.toggle("is-on", i === f));
      }
      drawn = pos;
    };

    const measure = () => {
      const W = work.clientWidth;
      const rh = Math.max(280, row.clientHeight);
      let cw = rh * 1.16;
      let ch = rh;
      if (cw > W - 40) {
        cw = W - 40;
        ch = cw / 1.16;
      }
      const u = cw / 900;
      const gapX = 20;
      const s = clamp(((W - cw) / 2 - gapX - 26) / cw, 0.5, 0.74);
      const Xs = cw / 2 + gapX + (cw * s) / 2;
      G = { cw, ch, s, Xs, step: Math.max(cw * s + gapX, W / 2 - Xs + (cw * s) / 2 + 30), k: clamp(14.5 / (22.5 * u * s), 1, 1.48), u };
      work.style.setProperty("--wc-u", `${u}px`);
      work.style.setProperty("--wc-cw", `${cw}px`);
      work.style.setProperty("--wc-ch", `${ch}px`);
      cards.forEach((c) => {
        c.style.top = `${(rh - ch) / 2}px`;
      });
      built = cards.map(buildCard);
      drawn = NaN;
      draw();
    };
    window.addEventListener("resize", measure, listen);
    measure();

    /* the pictures load as the section comes near */
    const near = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        near.disconnect();
        loadImages = true;
        work.querySelectorAll<HTMLElement>(".wc-img").forEach((im) => {
          im.style.backgroundImage = `url("${im.dataset.src}")`;
        });
      },
      { rootMargin: "120% 0px" },
    );
    near.observe(work);
    ctl.signal.addEventListener("abort", () => near.disconnect());

    const tick = (_t: number, dtMs: number) => {
      const k = RM ? 1 : 1 - Math.exp((-FOLLOW * dtMs) / 1000);
      pos += (target - pos) * k;
      if (Math.abs(target - pos) < 0.0004) pos = target;
      let changed = pos !== drawn;
      if (inView && open < 1) {
        open = Math.min(1, open + dtMs / 1150);
        changed = true;
      }
      const lean = 1 - Math.exp((-7 * dtMs) / 1000);
      if (Math.abs(wantX - tiltX) > 0.004 || Math.abs(wantY - tiltY) > 0.004) {
        tiltX += (wantX - tiltX) * lean;
        tiltY += (wantY - tiltY) * lean;
        changed = true;
      }
      work.classList.toggle("is-moving", changed);
      if (changed) draw();
    };
    gsap.ticker.add(tick);

    /* the pointer turns the centre stack a few degrees */
    if (!RM && window.matchMedia("(pointer: fine)").matches) {
      work.addEventListener(
        "pointermove",
        (e) => {
          if (dragging) return;
          wantX = clamp((e.clientX / window.innerWidth - 0.5) * 2, -1, 1) * 5;
          wantY = clamp(-(e.clientY / window.innerHeight - 0.5) * 2, -1, 1) * 3.2;
        },
        listen,
      );
      work.addEventListener(
        "pointerleave",
        () => {
          wantX = 0;
          wantY = 0;
        },
        listen,
      );
    }

    const settle = (at = target) => {
      target = Math.round(at);
    };
    const moveBy = (d: number) => settle(Math.round(target) + d);
    const goTo = (i: number) => settle(pos + (wrap(i - pos + N / 2) - N / 2));

    /* ---------- sideways scroll; up and down still scroll the page ---------- */
    let wheelStop = 0;
    row.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        e.preventDefault();
        target += e.deltaX / G.Xs;
        window.clearTimeout(wheelStop);
        wheelStop = window.setTimeout(() => settle(), 120);
      },
      { passive: false, signal: ctl.signal },
    );

    /* ---------- dragging: the row follows the hand, and a throw carries on ---------- */
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startAt = 0;
    let lastX = 0;
    let lastT = 0;
    let speed = 0;
    row.addEventListener(
      "pointerdown",
      (e) => {
        if (e.button !== 0) return;
        dragging = true;
        moved = false;
        startX = lastX = e.clientX;
        startAt = target;
        lastT = e.timeStamp;
        speed = 0;
      },
      listen,
    );
    window.addEventListener(
      "pointermove",
      (e) => {
        if (!dragging) return;
        const dx = e.clientX - startX;
        if (!moved && Math.abs(dx) > 6) {
          moved = true;
          row.classList.add("is-drag");
        }
        if (!moved) return;
        target = startAt - dx / G.Xs;
        const dt = e.timeStamp - lastT;
        if (dt > 0) speed = 0.7 * speed + 0.3 * ((e.clientX - lastX) / dt);
        lastX = e.clientX;
        lastT = e.timeStamp;
      },
      listen,
    );
    const release = () => {
      if (!dragging) return;
      dragging = false;
      row.classList.remove("is-drag");
      if (!moved) return;
      const thrown = target - (speed * 220) / G.Xs;
      // a short drag past a little way still moves on one card
      const dragged = target - startAt;
      settle(Math.abs(dragged) > 0.12 && Math.abs(thrown - startAt) < 0.5 ? startAt + Math.sign(dragged) : thrown);
    };
    window.addEventListener("pointerup", release, listen);
    window.addEventListener("pointercancel", release, listen);
    // a drag that ends on a card is not a click on it
    row.addEventListener(
      "click",
      (e) => {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      },
      { capture: true, signal: ctl.signal },
    );
    row.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          moveBy(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          moveBy(-1);
        }
      },
      listen,
    );
    q<HTMLElement>(".wc-prev").addEventListener("click", () => moveBy(-1), listen);
    q<HTMLElement>(".wc-next").addEventListener("click", () => moveBy(1), listen);

    /* ---------- the row arrives once, and the stack opens ---------- */
    if (!RM) work.classList.add("wc--pre");
    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (inView) work.classList.remove("wc--pre");
      },
      { threshold: 0.3 },
    );
    io.observe(work);
    ctl.signal.addEventListener("abort", () => io.disconnect());

    /* ---------- the work grows out of its card ---------- */
    let state: "closed" | "opening" | "open" | "closing" = "closed";
    let opener: HTMLElement | null = null;
    let anims: Animation[] = [];
    let scroller: HTMLElement | null = null;
    let active = 0;
    const END: Keyframe = { transform: "matrix(1,0,0,1,0,0)", clipPath: "inset(0px 0px 0px 0px round 0px)" };

    const makeScroll = (i: number) => {
      const s = document.createElement("div");
      s.className = "wk-v-scroll";
      s.tabIndex = 0;
      s.setAttribute("aria-label", WORK[i].name);
      s.innerHTML = workMarkup(i);
      sheet.appendChild(s);
      return s;
    };
    const fillBar = (i: number) => {
      logo.src = WORK[i].logo;
      logo.alt = WORK[i].name;
      visit.href = WORK[i].url;
      viewer.setAttribute("aria-label", WORK[i].name);
    };
    const startPose = (i: number): Keyframe => {
      const r = cards[i].getBoundingClientRect();
      const vw = sheet.offsetWidth;
      const vh = sheet.offsetHeight;
      const s = r.width / vw;
      return {
        transform: `matrix(${s},0,0,${s},${r.left},${r.top})`,
        clipPath: `inset(0px 0px ${Math.max(0, vh - r.height / s)}px 0px round ${(34 * G.u) / s}px)`,
      };
    };
    const outside = () => [document.querySelector("main"), document.querySelector(".site-header")] as (HTMLElement | null)[];
    const lock = (locked: boolean) => {
      const sb = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.classList.toggle("wk-lock", locked);
      document.body.style.paddingRight = locked && sb ? `${sb}px` : "";
      outside().forEach((el) => {
        if (el) el.inert = locked;
      });
    };
    const finish = () => {
      if (state === "opening") {
        state = "open";
        anims.forEach((a) => a.cancel());
        back.style.opacity = "1";
        viewer.classList.add("is-open");
        scroller?.focus({ preventScroll: true });
      } else if (state === "closing") {
        state = "closed";
        anims.forEach((a) => a.cancel());
        back.style.opacity = "0";
        viewer.classList.remove("is-show");
        sheet.textContent = "";
        scroller = null;
        lock(false);
        opener?.focus({ preventScroll: true });
      }
    };
    const run = (from: Keyframe, to: Keyframe, dur: number, ease: string) => {
      anims.forEach((a) => a.cancel());
      const closing = from === END;
      const a = sheet.animate([from, to], { duration: dur, easing: ease, fill: "both" });
      const b = back.animate([{ opacity: closing ? 1 : 0 }, { opacity: closing ? 0 : 1 }], { duration: dur * 0.7, easing: "linear", fill: "both", delay: closing ? dur * 0.3 : 0 });
      anims = [a, b];
      a.onfinish = finish;
    };
    const openViewer = (i: number, from: HTMLElement) => {
      if (state !== "closed") return;
      state = "opening";
      active = i;
      opener = from;
      // the row stands still on this card
      goTo(i);
      pos = target;
      draw();
      sheet.textContent = "";
      scroller = makeScroll(i);
      fillBar(i);
      lock(true);
      viewer.classList.add("is-show");
      if (RM) {
        const a = sheet.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, fill: "both" });
        anims = [a];
        a.onfinish = finish;
        back.style.opacity = "1";
        return;
      }
      run(startPose(i), END, 640, "cubic-bezier(.32,.72,0,1)");
    };
    const closeViewer = () => {
      if (state !== "open" || !scroller) return;
      state = "closing";
      viewer.classList.remove("is-open");
      scroller.scrollTop = 0;
      if (RM) {
        const a = sheet.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, fill: "both" });
        anims = [a];
        a.onfinish = finish;
        return;
      }
      run(END, startPose(active), 500, "cubic-bezier(.4,0,.1,1)");
    };
    const switchTo = (d: number) => {
      if (state !== "open" || !scroller) return;
      const hadFocus = document.activeElement === scroller;
      active = wrap(active + d);
      goTo(active);
      pos = target;
      draw();
      const old = scroller;
      scroller = makeScroll(active);
      fillBar(active);
      opener = cards[active];
      if (RM) old.remove();
      else {
        scroller.animate([{ transform: `translateX(${d * 7}%)`, opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 300, easing: "cubic-bezier(.23,1,.32,1)" });
        const o = old.animate([{ transform: "none", opacity: 1 }, { transform: `translateX(${-d * 7}%)`, opacity: 0 }], { duration: 220, easing: "linear", fill: "both" });
        o.onfinish = () => old.remove();
      }
      if (hadFocus) scroller.focus({ preventScroll: true });
    };

    cards.forEach((card, i) =>
      card.addEventListener(
        "click",
        () => {
          if (focus === i) openViewer(i, card);
          else goTo(i);
        },
        listen,
      ),
    );
    const openBtn = q<HTMLElement>(".wc-open");
    openBtn.addEventListener("click", () => openViewer(focus, openBtn), listen);
    close.addEventListener("click", closeViewer, listen);
    prev.addEventListener("click", () => switchTo(-1), listen);
    next.addEventListener("click", () => switchTo(1), listen);
    document.addEventListener(
      "keydown",
      (e) => {
        if (state === "closed") return;
        if (e.key === "Escape") {
          e.preventDefault();
          closeViewer();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          switchTo(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          switchTo(-1);
        } else if (e.key === "Tab" && state === "open" && scroller) {
          // keep focus in the viewer
          const list: HTMLElement[] = [scroller, prev, next, visit, close];
          const k = list.indexOf(document.activeElement as HTMLElement);
          e.preventDefault();
          list[(k + (e.shiftKey ? -1 : 1) + list.length) % list.length].focus();
        }
      },
      listen,
    );

    return () => {
      ctl.abort();
      gsap.ticker.remove(tick);
      window.clearTimeout(wheelStop);
      anims.forEach((a) => a.cancel());
      lock(false);
      viewer.classList.remove("is-show", "is-open");
      sheet.textContent = "";
      work.classList.remove("wc--pre");
    };
  }, [mounted]);

  return (
    <section className="ca-pad ca-g-plain ca-gridded ca-screen wc" id="work" ref={root} data-grid aria-labelledby="wc-title">
      <div className="ca-head">
        <h2 className="ca-h2" id="wc-title">
          Our work
        </h2>
      </div>

      <div className="wc-rail" role="group" aria-roledescription="carousel" aria-labelledby="wc-title" tabIndex={0}>
        {WORK.map((c) => (
          <div key={c.slug} className="wc-card" role="group" aria-label={c.name}>
            <div className="wc-scene" aria-hidden />
            <div className="wc-words">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} alt={c.name} draggable={false} style={{ height: `calc(var(--wc-u) * ${c.logoH})` }} />
              <p>{c.line}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="wc-acts">
        <button className="wc-prev" type="button" aria-label="Previous work">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M13 8H3M7.5 3.5 3 8l4.5 4.5" />
          </svg>
        </button>
        <button className="ca-btn ca-btn--purple wc-open" type="button">
          Open the work
        </button>
        <Link className="ca-btn ca-btn--line" href="/brands">
          See all the work
        </Link>
        <button className="wc-next" type="button" aria-label="Next work">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
          </svg>
        </button>
      </div>

      {mounted &&
        createPortal(
          <div className="wk-viewer" ref={viewerEl} role="dialog" aria-modal="true" tabIndex={-1} data-lenis-prevent>
            <div className="wk-v-back" />
            <div className="wk-v-sheet" />
            <div className="wk-v-bar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="wk-v-logo" alt="" />
              <div className="wk-v-nav">
                <button className="wk-v-prev" type="button" aria-label="Previous work">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M13 8H3M7.5 3.5 3 8l4.5 4.5" />
                  </svg>
                </button>
                <button className="wk-v-next" type="button" aria-label="Next work">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                </button>
              </div>
              <div className="wk-v-acts">
                <a className="wk-v-visit" target="_blank" rel="noreferrer noopener">
                  Visit website
                </a>
                <button className="wk-v-close" type="button">
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
