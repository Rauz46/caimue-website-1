"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type Logo = { name: string; src: string; w: number; h: number; ink: number; y: number };

const COPIES = 3; // enough to cover a 1920 screen with six marks
const BASE = 46; // px per second at rest

/**
 * The clients, one straight line of marks, a small disc between each. It drifts slowly, follows the direction of the
 * scroll and speeds up with it, and eases to a stop under the pointer.
 * Driven by GSAP's ticker; no work while off screen.
 */
export function ClientMarquee({ logos }: { logos: Logo[] }) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const row = track.current;
    if (!el || !row || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let span = row.scrollWidth / COPIES;
    let x = 0;
    let dir = -1;
    let speed = 1;
    let held = false;
    let visible = true;
    let lastY = window.scrollY;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);
    const measure = () => (span = row.scrollWidth / COPIES);
    window.addEventListener("resize", measure);

    const tick = (_t: number, dt: number) => {
      if (!visible) return;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (Math.abs(dy) > 0.5) dir = dy > 0 ? -1 : 1;
      const target = held ? 0 : 1 + Math.min(6, Math.abs(dy) * 0.25);
      speed += (target - speed) * (held ? 0.1 : 0.06);
      x += dir * BASE * speed * (dt / 1000);
      if (x <= -span) x += span;
      if (x > 0) x -= span;
      row.style.transform = `translate3d(${x}px, 0, 0)`;
    };
    gsap.ticker.add(tick);
    const enter = () => (held = true);
    const leave = () => (held = false);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      gsap.ticker.remove(tick);
      io.disconnect();
      window.removeEventListener("resize", measure);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="ca-lm" ref={root}>
      <div className="ca-lm__track" ref={track}>
        {Array.from({ length: COPIES }, (_, k) =>
          logos.map((c) => (
            <span key={`${k}-${c.name}`} className="ca-lm__item" aria-hidden={k > 0}>
              <Image src={c.src} alt={k === 0 ? c.name : ""} width={c.w} height={c.h} sizes="320px" style={{ ["--ink" as string]: c.ink, ["--y" as string]: c.y }} />
              <i className="ca-lm__dot" aria-hidden />
            </span>
          )),
        )}
      </div>
    </div>
  );
}
