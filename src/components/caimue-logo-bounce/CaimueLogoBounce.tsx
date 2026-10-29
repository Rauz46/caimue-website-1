"use client";

// The caimue logo, built by the bouncing dot (as on the rebrand film's final card).
// No dependencies: one inline SVG, animated with requestAnimationFrame by logo-bounce-core.ts.
import { forwardRef, useEffect, useId, useImperativeHandle, useRef, type CSSProperties } from "react";
import { createLogoBounce } from "./logo-bounce-core";
import { DOT, LETTER_PATHS, PINK, PURPLE, STEM_X, VIEWBOX } from "./logo-paths";

export type CaimueLogoBounceProps = {
  /** "mount": play as soon as it renders. "inView": play the first time it scrolls into view.
   *  "manual": hidden until ref.play(). "static": the finished logo, no animation (ref.play() still works). */
  trigger?: "mount" | "inView" | "manual" | "static";
  /** Seconds to wait before the dot drops. */
  delay?: number;
  /** Seconds between letter landings. 0.242 is the film's timing; 0.3 is calmer. */
  beat?: number;
  /** How far above the logo the dot falls from, in logo units (the logo is ~2200 units wide). */
  dropHeight?: number;
  /** Change this value to play it again. */
  replayKey?: string | number;
  onComplete?: () => void;
  /** Letter colour (brand purple). */
  color?: string;
  /** e and dot colour (brand pink). */
  accent?: string;
  className?: string;
  style?: CSSProperties;
  /** Accessible name. */
  title?: string;
};

export type CaimueLogoBounceHandle = {
  play: (delay?: number) => void;
  /** Show the frame at s seconds (scrubbing, scroll-driven use, tests). */
  seek: (s: number) => void;
  finish: () => void;
  reset: () => void;
  /** Length of one play in seconds. */
  duration: () => number;
};

export const CaimueLogoBounce = forwardRef<CaimueLogoBounceHandle, CaimueLogoBounceProps>(function CaimueLogoBounce(
  { trigger = "mount", delay = 0, beat = 0.242, dropHeight = 1600, replayKey, onComplete, color = PURPLE, accent = PINK, className, style, title = "caimue" },
  ref,
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const ctl = useRef<ReturnType<typeof createLogoBounce> | null>(null);
  const done = useRef(onComplete);
  done.current = onComplete;

  useImperativeHandle(ref, () => ({
    play: (d = 0) => ctl.current?.play(d),
    seek: (s) => ctl.current?.seek(s),
    duration: () => ctl.current?.duration ?? 0,
    finish: () => ctl.current?.finish(),
    reset: () => ctl.current?.reset(),
  }), []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const c = createLogoBounce(svg, { beat, dropHeight, onComplete: () => done.current?.() });
    ctl.current = c;
    svg.dataset.state = "ready";
    // reduced motion: the finished logo, no movement
    if (trigger === "static" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      c.finish(); if (trigger !== "static") done.current?.(); return () => c.destroy();
    }
    c.reset();
    let io: IntersectionObserver | undefined;
    if (trigger === "mount") c.play(delay);
    else if (trigger === "inView") {
      io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { io?.disconnect(); c.play(delay); }
      }, { threshold: 0.4 });
      io.observe(svg);
    }
    return () => { io?.disconnect(); c.destroy(); };
  }, [trigger, delay, beat, dropHeight, replayKey]);

  const clipL = `${uid}-cl`, clipR = `${uid}-cr`;
  const piece = (id: string, d: string, fill: string, clip?: string) => (
    <g data-piece={id} clipPath={clip ? `url(#${clip})` : undefined}>
      <path fill={fill} fillRule="evenodd" d={d} />
    </g>
  );

  return (
    <svg
      ref={svgRef}
      data-cmb=""
      data-state={trigger === "static" ? "static" : "idle"}
      viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.w} ${VIEWBOX.h}`}
      role="img"
      aria-label={title}
      overflow="visible"
      className={className}
      style={{ display: "block", overflow: "visible", ...style }}
    >
      <title>{title}</title>
      <style>{`
        [data-cmb][data-state="idle"] [data-piece] { opacity: 0; }
        [data-cmb] [data-piece="ab"], [data-cmb] [data-piece="as"] { opacity: 0; }
        @media (scripting: none), (prefers-reduced-motion: reduce) {
          [data-cmb][data-state="idle"] [data-piece] { opacity: 1; }
          [data-cmb][data-state="idle"] [data-piece="ab"], [data-cmb][data-state="idle"] [data-piece="as"] { opacity: 0; }
        }
      `}</style>
      <defs>
        {/* the a is cut at its stem; the halves overlap by 3 units so no seam shows */}
        <clipPath id={clipL}><rect x={0} y={0} width={STEM_X + 1.5} height={1000} /></clipPath>
        <clipPath id={clipR}><rect x={STEM_X - 1.5} y={0} width={400} height={1000} /></clipPath>
      </defs>
      {piece("c", LETTER_PATHS.c, color)}
      {piece("ab", LETTER_PATHS.a, color, clipL)}
      {piece("as", LETTER_PATHS.a, color, clipR)}
      {piece("a", LETTER_PATHS.a, color)}
      {piece("i", LETTER_PATHS.i, color)}
      {piece("ml", LETTER_PATHS.ml, color)}
      {piece("mr", LETTER_PATHS.mr, color)}
      {piece("u", LETTER_PATHS.u, color)}
      {piece("e", LETTER_PATHS.e, accent)}
      <g data-piece="dot"><circle cx={DOT.cx} cy={DOT.cy} r={DOT.r} fill={accent} /></g>
    </svg>
  );
});

export default CaimueLogoBounce;
