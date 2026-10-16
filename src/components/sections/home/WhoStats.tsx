"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type WhoStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

/** "2.09M" -> { n: 2.09, dp: 2, suffix: "M" } */
function parse(value: string) {
  const m = value.match(/^([\d.]+)(.*)$/);
  if (!m) return { n: 0, dp: 0, suffix: value };
  const dp = m[1].includes(".") ? m[1].split(".")[1].length : 0;
  return { n: parseFloat(m[1]), dp, suffix: m[2] };
}

/** Counts up to the real figure once `run` turns true; renders the final value until then. */
function Count({ value, run }: { value: string; run: boolean }) {
  const { n, dp, suffix } = parse(value);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dur = 1600;
    const t0 = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setShown((n * eased).toFixed(dp) + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    setShown((0).toFixed(dp) + suffix);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, n, dp, suffix]);

  return <span aria-hidden>{shown}</span>;
}

export function WhoStats({ items }: { items: WhoStat[] }) {
  const ref = useRef<HTMLDListElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <dl ref={ref} className="cw-grid" data-group>
      {items.map((s) => (
        <div className="cw" key={s.label} data-card>
          <dt className="cw__label">{s.label}</dt>
          <dd className="cw__row">
            <span className="cw__value">
              <Count value={s.value} run={inView} />
              <span className="sr-only">{s.value}</span>
            </span>
            <span className="cx-ico" aria-hidden>
              <s.icon strokeWidth={1.8} />
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
