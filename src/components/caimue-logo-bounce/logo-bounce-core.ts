// The caimue logo bounce, framework-agnostic. A straight port of buildLogo() from the rebrand film
// (videos/caimue-rebrand/tools/film.template.html): the pink dot drops in and bounces across the baseline,
// and each letter lands as the dot touches it. Every frame is a pure function of time, so seeking is exact.
import { DOT } from "./logo-paths";

// ---------- motion tokens (same curves as the film) ----------
function bez(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const X = (t: number) => ((ax * t + bx) * t + cx) * t, Y = (t: number) => ((ay * t + by) * t + cy) * t;
  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0, hi = 1, t = x;
    for (let i = 0; i < 40; i++) { if (X(t) < x) lo = t; else hi = t; t = (lo + hi) / 2; }
    return Y(t);
  };
}
type Ease = (x: number) => number;
const E = { out: bez(0.16, 1, 0.3, 1), in: bez(0.7, 0, 0.84, 0), lin: (x: number) => x };
const back = (s: number): Ease => (p) => { const q = p - 1; return p <= 0 ? 0 : p >= 1 ? 1 : 1 + (s + 1) * q * q * q + s * q * q; };
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const P = (t: number, a: number, b: number, e: Ease = E.lin) => e(clamp((t - a) / (b - a)));
const mix = (a: number, b: number, p: number) => a + (b - a) * p;
const pulse = (dt: number, at = 0.03, tau = 0.09) => (dt < 0 ? 0 : dt < at ? dt / at : Math.exp(-(dt - at) / tau));
const hop = (u: number, h: number) => -h * 4 * u * (1 - u);
type Pose = { tx?: number; ty?: number; r?: number; s?: number; sx?: number; sy?: number };
const piv = (px: number, py: number, o: Pose) =>
  `translate(${px + (o.tx || 0)} ${py + (o.ty || 0)}) rotate(${o.r || 0}) scale(${o.sx ?? o.s ?? 1} ${o.sy ?? o.s ?? 1}) translate(${-px} ${-py})`;

// ---------- the choreography, in the film's build time (seconds) ----------
const TD = 14.25;                                           // the dot starts to drop
const LAND = [14.75, 15.12, 15.46, 15.8, 16.14, 16.5];      // it lands on c, a, i, m, u, e
const XS = [238, 634.24, 916.39, 1257.44, 1690.54, 2186.26]; // where each landing happens (logo units)
const END = LAND[5] + 0.6;                                  // everything has settled
const DOTX = DOT.cx, DOTY = DOT.cy;

export const PIECES = ["c", "ab", "as", "a", "i", "ml", "mr", "u", "e"] as const;
export type PieceId = (typeof PIECES)[number];
type Els = Record<PieceId | "dot", SVGGElement>;

export type LogoBounceOptions = {
  /** Seconds between landings. 0.242 = eighth notes at 124 BPM, the film's final card. Bigger = slower. */
  beat?: number;
  /** How far above the baseline the dot starts its drop, in logo units (the logo is ~2200 units wide). */
  dropHeight?: number;
  /** Called once when the logo has fully settled. */
  onComplete?: () => void;
};

/** Drives one logo SVG. The SVG must contain <g data-piece="..."> for every PIECES id plus data-piece="dot". */
export function createLogoBounce(svg: SVGSVGElement, opts: LogoBounceOptions = {}) {
  const beat = opts.beat ?? 0.242;
  const drop = opts.dropHeight ?? 1600;
  const els = Object.fromEntries([...PIECES, "dot"].map((id) => [id, svg.querySelector(`[data-piece="${id}"]`)])) as Els;
  if (Object.values(els).some((el) => !el)) throw new Error("createLogoBounce: the SVG is missing a data-piece group");

  // real seconds -> build time: landing for landing, so every landing falls exactly on the beat
  const SP = (LAND[5] - LAND[0]) / (5 * beat);
  const L0 = (LAND[0] - TD) / SP;                            // real time of the first landing
  const landAt = (n: number) => L0 + n * beat;
  const toBuild = (s: number) => {
    if (s < landAt(0)) return LAND[0] + (s - landAt(0)) * SP;
    for (let n = 1; n < 6; n++) if (s < landAt(n)) return mix(LAND[n - 1], LAND[n], (s - landAt(n - 1)) / beat);
    return LAND[5] + (s - landAt(5)) * SP;
  };
  /** Total length in real seconds. */
  const duration = landAt(5) + (END - LAND[5]) / SP;

  const dotAt = (t: number) => {
    if (t < LAND[0]) { const u = clamp((t - TD) / (LAND[0] - TD)); return { x: XS[0], y: DOTY - drop * (1 - u * u) }; }
    for (let n = 1; n < LAND.length; n++) {
      if (t < LAND[n]) { const u = (t - LAND[n - 1]) / (LAND[n] - LAND[n - 1]); return { x: mix(XS[n - 1], XS[n], u), y: DOTY + hop(u, n === 5 ? 300 : 230) }; }
    }
    if (t < LAND[5] + 0.24) return { x: DOTX, y: DOTY + hop((t - LAND[5]) / 0.24, 60) };
    if (t < LAND[5] + 0.38) return { x: DOTX, y: DOTY + hop((t - LAND[5] - 0.24) / 0.14, 18) };
    return { x: DOTX, y: DOTY };
  };
  const dotSq = (t: number) =>
    LAND.reduce((s, l) => s + pulse(t - l, 0.02, 0.08), 0) + 0.45 * pulse(t - LAND[5] - 0.24, 0.02, 0.07) + 0.2 * pulse(t - LAND[5] - 0.38, 0.02, 0.06);
  const show = (el: SVGGElement, p: number) => { el.style.opacity = p > 0 ? "1" : "0"; };

  /** Draw the frame at build time t. */
  const draw = (t: number) => {
    const D = els;
    let p: number;
    p = P(t, LAND[0] - 0.04, LAND[0] + 0.55); show(D.c, p);
    D.c.setAttribute("transform", piv(238, 400, { r: mix(-220, 0, E.out(p)), s: mix(0.2, 1, back(1.6)(p)) }));
    const aDone = t >= LAND[1] + 0.65;
    p = P(t, LAND[1] - 0.02, LAND[1] + 0.5); show(D.ab, aDone ? 0 : p);
    D.ab.setAttribute("transform", piv(590, 420, { r: mix(-160, 0, E.out(p)), s: mix(0.3, 1, back(1.5)(p)) }));
    p = P(t, LAND[1] + 0.02, LAND[1] + 0.3, E.in); show(D.as, aDone ? 0 : P(t, LAND[1] + 0.02, LAND[1] + 0.03));
    const asq = pulse(t - (LAND[1] + 0.3), 0.02, 0.1);
    D.as.setAttribute("transform", piv(759.24, 590, { ty: mix(-700, 0, p), sx: 1 + 0.12 * asq, sy: 1 - 0.18 * asq }));
    show(D.a, aDone ? 1 : 0);
    p = P(t, LAND[2] - 0.02, LAND[2] + 0.45); show(D.i, p);
    D.i.setAttribute("transform", piv(916.39, 590, { sy: back(2.2)(p) }));
    p = P(t, LAND[3] - 0.02, LAND[3] + 0.45); show(D.ml, p);
    D.ml.setAttribute("transform", piv(1165.44, 590, { sy: back(2)(p) }));
    p = P(t, LAND[3] + 0.06, LAND[3] + 0.53); show(D.mr, p);
    D.mr.setAttribute("transform", piv(1349.44, 590, { sy: back(2)(p) }));
    p = P(t, LAND[4] - 0.03, LAND[4] + 0.55); show(D.u, p);
    D.u.setAttribute("transform", piv(1690.54, 400, { r: mix(180, 0, E.out(p)), s: mix(0.5, 1, back(1.4)(p)) }));
    p = P(t, LAND[5] - 0.34, LAND[5] + 0.06); show(D.e, p);
    D.e.setAttribute("transform", piv(2060.76, 400, { r: mix(-300, 0, E.out(p)), s: mix(0.25, 1, E.out(p)) }));
    const d = dotAt(t), sq = dotSq(t);
    show(D.dot, t >= TD ? 1 : 0);
    D.dot.setAttribute("transform",
      `translate(${d.x} 590) scale(${1 + 0.32 * sq} ${1 - 0.32 * sq}) translate(${-d.x} -590) translate(${d.x - DOTX} ${d.y - DOTY})`);
  };

  /** The finished logo, with no transforms left on it. */
  const finish = () => {
    for (const id of PIECES) { els[id].style.opacity = id === "ab" || id === "as" ? "0" : "1"; els[id].removeAttribute("transform"); }
    els.dot.style.opacity = "1"; els.dot.removeAttribute("transform");
  };
  /** Nothing visible: the state before the drop. */
  const reset = () => { stop(); draw(-1e9); };

  let raf = 0, t0 = 0, done = false;
  const stop = () => { if (raf) cancelAnimationFrame(raf); raf = 0; };
  const tick = (now: number) => {
    const s = (now - t0) / 1000;
    if (s >= duration) { finish(); raf = 0; if (!done) { done = true; opts.onComplete?.(); } return; }
    draw(toBuild(s));
    raf = requestAnimationFrame(tick);
  };

  return {
    duration,
    /** Play from the start (after an optional delay in seconds). */
    play(delay = 0) {
      stop(); done = false; draw(-1e9);
      t0 = performance.now() + delay * 1000;
      raf = requestAnimationFrame(tick);
    },
    /** Show the frame at s seconds from the start (for scrubbing or tests). */
    seek(s: number) { stop(); if (s >= duration) finish(); else draw(toBuild(s)); },
    finish() { stop(); finish(); },
    reset,
    destroy: stop,
  };
}
