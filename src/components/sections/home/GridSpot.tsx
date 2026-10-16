"use client";

import { useEffect } from "react";

/**
 * The ruled grid on the light sections brightens a little around the pointer.
 * Sets --mx / --my on the hovered section; the light itself is a masked
 * ::after in home-ignitho.css. Mouse only, and nothing under reduced motion.
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
        last.el.style.setProperty("--mx", `${last.x}px`);
        last.el.style.setProperty("--my", `${last.y}px`);
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
