"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type Logo = { name: string; src: string; w: number; h: number };

const BAND_H = 128; // the ribbon's thickness, px
const SAG = 0; // straight: the ribbon runs level across the section
const GAP = 260; // distance between marks along the ribbon, px

/**
 * The clients on a white band (after two26.studio's ribbon, run straight): a
 * thick white stroke runs across the section and the marks ride along it
 * in their own colours, each turned to follow the curve. Driven by
 * GSAP's ticker: a slow drift, a little faster while scrolling, easing to
 * a stop under the pointer, no work off screen.
 */
export function LogoRows({ logos }: { logos: Logo[] }) {
  const root = useRef<HTMLDivElement>(null);
  const items = [...logos, ...logos, ...logos];

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const tiles = Array.from(el.querySelectorAll<HTMLElement>(".ca-rib__mark"));
    const band = el.querySelector<SVGPathElement>(".ca-rib__band");
    let W = el.clientWidth;
    let H = el.clientHeight;
    const curve = (x: number) => {
      const u = (x - W / 2) / (W / 2); // -1 .. 1 across the section
      return H / 2 - SAG / 2 + SAG * (1 - u * u);
    };
    const slope = (x: number) => {
      const u = (x - W / 2) / (W / 2);
      return (-2 * SAG * u) / (W / 2);
    };
    const drawBand = () => {
      W = el.clientWidth;
      H = el.clientHeight;
      if (!band) return;
      const pts: string[] = [];
      for (let x = -40; x <= W + 40; x += 20) pts.push(`${x},${curve(x).toFixed(1)}`);
      band.setAttribute("d", `M${pts.join(" L")}`);
    };
    drawBand();
    const total = items.length * GAP;
    let pos = 0;
    const place = () => {
      tiles.forEach((t, i) => {
        let x = (((i * GAP + pos) % total) + total) % total - GAP;
        if (x > W + GAP) x -= total;
        const y = curve(x);
        const rot = (Math.atan(slope(x)) * 180) / Math.PI;
        t.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rot}deg)`;
      });
    };
    place();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      drawBand();
      place();
    };
    window.addEventListener("resize", resize);
    if (reduced) return () => window.removeEventListener("resize", resize);

    let speed = 1;
    let target = 1;
    let boost = 0;
    let lastY = window.scrollY;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);
    const BASE = 40; // px per second along the ribbon
    const tick = (_t: number, dt: number) => {
      if (!visible) return;
      const y = window.scrollY;
      boost = Math.min(5, boost * 0.92 + Math.abs(y - lastY) * 0.02);
      lastY = y;
      speed += ((target === 0 ? 0 : target + boost) - speed) * 0.07;
      pos -= BASE * speed * (dt / 1000);
      place();
    };
    gsap.ticker.add(tick);
    const enter = () => (target = 0);
    const leave = () => (target = 1);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      gsap.ticker.remove(tick);
      io.disconnect();
      window.removeEventListener("resize", resize);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ca-rib" ref={root}>
      <svg className="ca-rib__svg" aria-hidden>
        <path className="ca-rib__band" fill="none" stroke="#ffffff" strokeWidth={BAND_H} strokeLinecap="butt" />
      </svg>
      {items.map((c, i) => (
        <span key={`${c.name}-${i}`} className="ca-rib__mark" aria-hidden={i >= logos.length}>
          <Image src={c.src} alt={i < logos.length ? c.name : ""} width={c.w} height={c.h} sizes="150px" />
        </span>
      ))}
    </div>
  );
}
