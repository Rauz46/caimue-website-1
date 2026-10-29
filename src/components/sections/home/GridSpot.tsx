"use client";

import { useEffect } from "react";

/**
 * The ruled grid on the light sections brightens a little around the pointer.
 * Moves a 400px masked ::after (home-ignitho.css) to the pointer by transform, so only
 * that circle repaints. Mouse only, and nothing under reduced motion.
 */
export function GridSpot() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".cx .cx-sheet:not(.cx-hero):not(.cx-talk)"),
    );
    let raf = 0;
    let last: { el: HTMLElement; x: number; y: number } | null = null;

    const move = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      last = { el, x: e.clientX - r.left, y: e.clientY - r.top };
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!last) return;
        // the section's grid is 56px, centred horizontally and starting at the top;
        // the circle's own grid is offset so its lines sit exactly on the section's
        const { el, x, y } = last;
        const left = x - 200;
        const top = y - 200;
        const x0 = (el.clientWidth - 56) / 2;
        el.style.setProperty("--spot-x", `${left}px`);
        el.style.setProperty("--spot-y", `${top}px`);
        el.style.setProperty("--spot-bx", `${(((x0 - left) % 56) + 56) % 56}px`);
        el.style.setProperty("--spot-by", `${(((0 - top) % 56) + 56) % 56}px`);
      });
    };
    const enter = (e: PointerEvent) => (e.currentTarget as HTMLElement).setAttribute("data-spot", "");
    const leave = (e: PointerEvent) => (e.currentTarget as HTMLElement).removeAttribute("data-spot");

    sections.forEach((s) => {
      s.addEventListener("pointermove", move);
      s.addEventListener("pointerenter", enter);
      s.addEventListener("pointerleave", leave);
    });
    return () => {
      cancelAnimationFrame(raf);
      sections.forEach((s) => {
        s.removeEventListener("pointermove", move);
        s.removeEventListener("pointerenter", enter);
        s.removeEventListener("pointerleave", leave);
        s.removeAttribute("data-spot");
      });
    };
  }, []);

  return null;
}
