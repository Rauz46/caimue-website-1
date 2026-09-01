"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Lenis-driven inertial scrolling.
 *
 * Mounted once in the root layout. Deliberately renders nothing — Lenis
 * transforms the document scroll rather than a wrapper element, so no extra
 * DOM node (and no extra stacking context) is introduced.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Respect the OS setting: inertial scrolling is exactly the kind of
    // motion people disable it for.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      // Expo-out: fast pickup, long soft landing.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      // Touch devices already have native momentum; doubling it feels sloppy.
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Same-page anchors must go through Lenis or they jump instantly.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
