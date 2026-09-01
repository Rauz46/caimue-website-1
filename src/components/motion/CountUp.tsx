"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a stat up when it scrolls into view.
 *
 * Accepts display strings like "2M+", "20+", "1,200" — the numeric run is
 * animated and any prefix/suffix is preserved verbatim.
 *
 * The server renders the FINAL value, so the real number is in the HTML even
 * if JS never runs; the animation only rewinds it once on the client.
 */
export function CountUp({
  value,
  duration = 1600,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!match) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const decimals = digits.includes(".")
      ? digits.split(".")[1].length
      : 0;

    const render = (n: number) =>
      `${prefix}${n.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;

    let frame = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / duration);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      el.textContent = render(target * eased);
      if (t < 1) frame = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.textContent = render(0);
        frame = requestAnimationFrame(step);
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  // Tabular figures stop the box jittering as digits change width.
  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
    </span>
  );
}
