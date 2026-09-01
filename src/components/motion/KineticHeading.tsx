"use client";

import { useEffect, useRef } from "react";
import type { ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Word-by-word heading reveal.
 *
 * Deliberately for below-the-fold headings only: the hero headline must paint
 * on the first frame, and any staggered opacity animation delays LCP by its
 * own duration.
 *
 * Server output is the plain, fully visible heading. On mount we arm it (only
 * if it is still off screen) and let an IntersectionObserver release it, so
 * the text is never blank for no-JS, print or screenshot.
 */
export function KineticHeading({
  text,
  as: Tag = "h2",
  className,
  /** Words rendered in the accent gradient, by index. */
  accentFrom,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  accentFrom?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.9) return;

    el.dataset.armed = "true";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={cn("kinetic", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "kinetic__word",
            accentFrom !== undefined && i >= accentFrom && "text-gradient-gold",
          )}
          style={{ "--i": i } as React.CSSProperties}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
