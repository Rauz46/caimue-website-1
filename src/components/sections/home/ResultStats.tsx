"use client";

import { useEffect, useRef, useState } from "react";
import { Count } from "./WhoStats";

export type ResultChart = "bars" | "play" | "ring" | "rise" | "ring2";

export type ResultStat = {
  value: string;
  label: string;
  chart: ResultChart;
};

/** The deck's small charts, drawn in code so they can grow with their figure. */
function Chart({ kind, value }: { kind: ResultChart; value: string }) {
  const pct = parseFloat(value);
  switch (kind) {
    case "bars":
      return (
        <svg viewBox="0 0 56 56" className="rc rc--bars">
          {[
            [4, 38, "#e2d6f7"],
            [15, 30, "#c9a8f5"],
            [26, 22, "#a77de6"],
            [37, 13, "#8a52d6"],
            [48, 4, "#6a2fb5"],
          ].map(([x, y, c], i) => (
            <rect key={i} x={x as number} y={y as number} width="7" height={52 - (y as number)} rx="2" fill={c as string} style={{ ["--i" as string]: i }} />
          ))}
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 56 56" className="rc rc--play">
          <circle className="rc__halo rc__halo--2" cx="28" cy="28" r="27" fill="#f6eefc" />
          <circle className="rc__halo" cx="28" cy="28" r="21" fill="#efdcf7" />
          <circle cx="28" cy="28" r="14" fill="#9a1fa6" />
          <path d="M24.5 21.5v13l10-6.5z" fill="#fff" />
        </svg>
      );
    case "rise":
      return (
        <svg viewBox="0 0 56 56" className="rc rc--rise">
          <rect x="8" y="34" width="14" height="18" rx="3" fill="#e2d6f7" />
          <rect className="rc__grow" x="32" y="16" width="14" height="36" rx="3" fill="#672fb2" />
          <path className="rc__arrow" d="M39 11V3m-4 4l4-4 4 4" fill="none" stroke="#ff0080" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default: {
      const pink = kind === "ring";
      return (
        <svg viewBox="0 0 56 56" className="rc rc--ring">
          <circle cx="28" cy="28" r="21" fill="none" stroke={pink ? "#ffe3f0" : "#f3e8fa"} strokeWidth="8" />
          <circle
            className="rc__arc"
            cx="28"
            cy="28"
            r="21"
            fill="none"
            stroke={pink ? "#ff0080" : "#9a1fa6"}
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={100}
            transform="rotate(-90 28 28)"
            style={{ ["--pct" as string]: pct }}
          />
        </svg>
      );
    }
  }
}

export function ResultStats({ items }: { items: ResultStat[] }) {
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
    <dl ref={ref} className={`cs-band${inView ? " is-on" : ""}`} data-group>
      {items.map((r) => (
        <div className="cs" key={r.label} data-card>
          <dt className="cs__label">{r.label}</dt>
          <dd className="cs__value">
            <Count value={r.value} run={inView} />
            <span className="sr-only">{r.value}</span>
          </dd>
          <dd className="cs__pic" aria-hidden>
            <Chart kind={r.chart} value={r.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
