"use client";

import { useCallback, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Pulls its child toward the cursor.
 *
 * Writes the offset to a CSS custom property instead of React state, so a
 * mouse move never re-renders — the existing MagneticButton in this repo
 * calls setState on every mousemove event, which is a render per frame.
 */
export function Magnetic({
  children,
  className,
  /** How far the element travels, as a fraction of cursor distance. */
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      const el = ref.current;
      if (!el || frame.current) return;

      const { clientX, clientY } = e;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        const r = el.getBoundingClientRect();
        const x = (clientX - r.left - r.width / 2) * strength;
        const y = (clientY - r.top - r.height / 2) * strength;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
      });
    },
    [strength],
  );

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  }, []);

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn("magnetic", className)}
    >
      {children}
    </span>
  );
}
