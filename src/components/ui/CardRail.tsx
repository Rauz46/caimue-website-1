"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardRailProps = {
  children: ReactNode;
  className?: string;
  controls?: boolean;
  ariaLabel: string;
};

/**
 * Horizontal rail that bleeds off both edges of the viewport when it has more
 * cards than fit, and simply centres them when it doesn't.
 *
 * Native scroll + CSS scroll-snap rather than a carousel library: keeps
 * touch/trackpad momentum, works without JS, stays keyboard reachable.
 */
export function CardRail({
  children,
  className,
  controls = true,
  ariaLabel,
}: CardRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [overflows, setOverflows] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;

    // Threshold well above 1px: sub-pixel layout rounding otherwise reports a
    // scrollable rail that has nowhere to actually go, which leaves the
    // arrows on screen doing nothing.
    const slack = el.scrollWidth - el.clientWidth;
    setOverflows(slack > 24);
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= slack - 8);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    sync();
    el.addEventListener("scroll", sync, { passive: true });

    // Card widths are fluid, so re-measure on element resize, not just window.
    const ro = new ResizeObserver(sync);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", sync);
      ro.disconnect();
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={railRef}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className={cn(
          "no-scrollbar flex gap-4 overflow-x-auto pb-2",
          overflows
            ? // Bleed: left edge lines up with `.container`, right edge only
              // needs the gutter — matching the left there invents ~300px of
              // empty scroll distance.
              "snap-x snap-mandatory scroll-smooth pl-[calc(max(0px,(100vw-var(--container))/2)+var(--gutter))] pr-[var(--gutter)]"
            : "justify-center px-[var(--gutter)]",
        )}
      >
        {children}
      </div>

      {controls && overflows && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      )}
    </div>
  );
}
