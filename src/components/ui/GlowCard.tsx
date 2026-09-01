"use client";

import { useCallback, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  /** Colour of the light that follows the cursor. */
  glow?: string;
  /** Rounding must match the child's, or the glow ring won't line up. */
  radius?: string;
};

/**
 * Cursor-tracking border glow.
 *
 * Position is written to CSS custom properties instead of React state, so
 * moving the mouse never triggers a re-render — the pointer handler is
 * rAF-throttled and touches only two custom props.
 */
export function GlowCard({
  children,
  className,
  glow = "rgba(255,255,255,0.55)",
  radius = "20px",
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    if (frame.current) return;
    const { clientX, clientY } = e;

    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--gx", `${clientX - rect.left}px`);
      el.style.setProperty("--gy", `${clientY - rect.top}px`);
    });
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn("glow-card", className)}
      style={{ "--glow": glow, "--glow-radius": radius } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
