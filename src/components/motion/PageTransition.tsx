"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Route-change transition, modelled on the reference site.
 *
 * Theirs: Barba.js swaps the container while GSAP DrawSVGPlugin strokes a
 * path across the screen (stroke-width 8% -> 70%, so the line paints the
 * viewport) and the logo springs in on an elastic ease.
 *
 * Ours is a single solid panel that slides up to cover and off the top to
 * reveal, plus the mark. Only `transform` and `opacity` animate, so it is
 * pure compositor work — an earlier stroke-width version repainted the whole
 * viewport every frame and stuttered on navigation.
 *
 * Next's App Router keeps the DOM across navigations, so rather than
 * intercepting the swap we drive the overlay off `pathname` changes: paint in
 * on click, paint out once the new route has rendered.
 */
export function PageTransition() {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  // When the cover started rising, so a fast route swap still lets it land.
  const inAt = useRef(0);

  // Paint OUT whenever a new route has rendered.
  useEffect(() => {
    const el = overlay.current;
    if (!el) return;

    if (first.current) {
      first.current = false;
      return;
    }

    // Back/forward never painted in, so there is nothing to paint out.
    if (el.dataset.state !== "in") return;

    // Let the cover finish rising (0.42s) before it leaves, or it would jump.
    const wait = Math.max(0, 420 - (performance.now() - inAt.current));
    const out = window.setTimeout(() => {
      el.dataset.state = "out";
    }, wait);
    const idle = window.setTimeout(() => {
      if (el.dataset.state === "out") el.dataset.state = "idle";
    }, wait + 550);

    return () => {
      window.clearTimeout(out);
      window.clearTimeout(idle);
    };
  }, [pathname]);

  // Paint IN as soon as an internal link is clicked, so the cover is already
  // moving while Next fetches the next route.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stuck = 0;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;
      if (anchor.target === "_blank") return;

      // Same-origin, different path only.
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      const el = overlay.current;
      if (!el) return;
      el.dataset.state = "in";
      inAt.current = performance.now();
      // Never leave the cover up if the navigation does not land.
      window.clearTimeout(stuck);
      stuck = window.setTimeout(() => {
        if (el.dataset.state === "in") el.dataset.state = "idle";
      }, 4000);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => {
      window.clearTimeout(stuck);
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);

  return (
    <div
      ref={overlay}
      className="page-transition"
      data-state="idle"
      aria-hidden="true"
    >
      <div className="page-transition__panel" />

      <span className="page-transition__mark">
        <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
          <circle
            cx="24"
            cy="24"
            r="21"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle cx="24" cy="24" r="6" fill="currentColor" />
          {[0, 72, 144, 216, 288].map((a) => (
            <circle
              key={a}
              cx="24"
              cy="9.5"
              r="3.2"
              fill="currentColor"
              transform={`rotate(${a} 24 24)`}
            />
          ))}
        </svg>
      </span>
    </div>
  );
}
