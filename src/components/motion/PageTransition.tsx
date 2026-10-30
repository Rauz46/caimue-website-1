"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CaimueLogoBounce } from "@/components/caimue-logo-bounce/CaimueLogoBounce";

/**
 * Route-change transition: a white cover rises, the caimue logo bounces into
 * place on it, and the cover leaves once the logo has landed and the new route
 * has rendered, whichever comes last. Next's App Router keeps the DOM across
 * navigations, so the overlay runs off link clicks and `pathname` changes.
 */
export function PageTransition() {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  // the logo restarts on each navigation
  const [run, setRun] = useState(0);
  const landed = useRef(false);
  const arrived = useRef(false);

  const leave = () => {
    const el = overlay.current;
    if (!el || !landed.current || !arrived.current || el.dataset.state !== "in") return;
    el.dataset.state = "out";
    window.setTimeout(() => {
      if (el.dataset.state === "out") {
        el.dataset.state = "idle";
        setRun(0);
      }
    }, 550);
  };

  // A new route has rendered.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    arrived.current = true;
    leave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      landed.current = false;
      arrived.current = false;
      setRun((n) => n + 1);
      // Never leave the cover up if the navigation does not land.
      window.clearTimeout(stuck);
      stuck = window.setTimeout(() => {
        if (el.dataset.state === "in") el.dataset.state = "idle";
      }, 6000);
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
        {run > 0 && (
          <CaimueLogoBounce
            key={run}
            delay={0.25}
            beat={0.15}
            dropHeight={700}
            onComplete={() => {
              landed.current = true;
              window.setTimeout(leave, 180);
            }}
          />
        )}
      </span>
    </div>
  );
}
