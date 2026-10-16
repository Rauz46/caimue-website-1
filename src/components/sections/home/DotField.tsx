"use client";

import { useEffect, useRef } from "react";

/**
 * The hero ground: a halftone. One regular, pixel-aligned grid of dots
 * covers the whole hero; each dot's size and brightness follow a slow
 * flowing field, so the dots gather into soft sweeping bands (larger,
 * brighter) and thin out into fine texture between them. Around the
 * hero text the dots stay small and quiet, so the type sits on calm
 * ground.
 *
 * After the dot-pattern / halftone backgrounds common on landing pages
 * (Magic UI Dot Pattern, Framer "Contour Grid", 21st.dev "Dot Wave"),
 * written from scratch: one canvas, no libraries, NO pointer
 * interaction. The field drifts very slowly, pauses off screen, and
 * holds one still frame for reduced motion.
 */

type Pocket = { x: number; y: number; rx: number; ry: number };

export function DotField({ className = "", pocket }: { className?: string; pocket?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let dpr = 1;
    let step = 18;
    let raf = 0;
    let last = 0;
    let visible = true;
    let hole: Pocket = { x: 0, y: 0, rx: 1, ry: 1 };
    const t0 = performance.now();

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      step = W < 768 ? 16 : 22;
      const target = pocket ? canvas.parentElement?.querySelector<HTMLElement>(pocket) : null;
      const c = canvas.getBoundingClientRect();
      if (target) {
        const r = target.getBoundingClientRect();
        hole = {
          x: r.left - c.left + r.width / 2,
          y: r.top - c.top + r.height / 2,
          rx: Math.max(r.width * 0.48, 140),
          ry: Math.max(r.height * 0.7, 100),
        };
      } else {
        hole = { x: W / 2, y: H * 0.5, rx: W * 0.3, ry: H * 0.2 };
      }
    };

    const smooth = (e0: number, e1: number, x: number) => {
      const k = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
      return k * k * (3 - 2 * k);
    };

    // dots are drawn into a few size/brightness buckets: one fill per bucket
    const LEVELS = 8;
    const paths: Path2D[] = [];

    const draw = (time: number) => {
      const t = time / 1000;
      for (let b = 0; b < LEVELS; b++) paths[b] = new Path2D();
      const s = 1 / Math.max(W, 1);
      const ox = ((W % step) + step) / 2;
      const oy = ((H % step) + step) / 2;

      for (let y = oy; y < H; y += step) {
        for (let x = ox; x < W; x += step) {
          const nx = x * s;
          const ny = y * s;
          // two long bands sweeping diagonally, gently bent, drifting slowly
          const a1 = Math.sin(nx * 5.2 + ny * 3.1 + 0.9 * Math.sin(ny * 4.4 - t * 0.11) + t * 0.08);
          const a2 = Math.sin(nx * 2.6 - ny * 4.8 + 0.7 * Math.sin(nx * 3.3 + t * 0.07) - t * 0.06);
          const band = Math.max(smooth(0.35, 0.98, a1), 0.75 * smooth(0.45, 1, a2));
          // fine underlying texture everywhere, so no area is ever bare
          let v = 0.2 + 0.8 * band;
          // calm pocket around the text
          const dx = (x - hole.x) / hole.rx;
          const dy = (y - hole.y) / hole.ry;
          v *= 0.3 + 0.7 * smooth(0.45, 1.15, Math.sqrt(dx * dx + dy * dy));
          const level = Math.min(LEVELS - 1, Math.floor(v * LEVELS));
          if (level < 0) continue;
          const rad = 0.7 + 2.3 * ((level + 0.5) / LEVELS);
          paths[level].moveTo(x + rad, y);
          paths[level].arc(x, y, rad, 0, Math.PI * 2);
        }
      }

      ctx.clearRect(0, 0, W, H);
      for (let b = 0; b < LEVELS; b++) {
        ctx.fillStyle = `rgba(255,255,255,${(0.07 + (0.33 * (b + 1)) / LEVELS).toFixed(3)})`;
        ctx.fill(paths[b]);
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      // the field changes slowly: 30 redraws a second look the same as 60 and halve the cost
      if (!visible || now - last < 32) return;
      last = now;
      draw(now - t0);
    };

    resize();
    draw(0);

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now() - t0);
    });
    ro.observe(canvas);

    let io: IntersectionObserver | undefined;
    if (!reduced) {
      io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(canvas);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io?.disconnect();
    };
  }, [pocket]);

  return <canvas ref={ref} className={`cx-dots ${className}`} aria-hidden />;
}
