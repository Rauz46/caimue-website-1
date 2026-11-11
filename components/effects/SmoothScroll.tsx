"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Site-wide smooth scrolling (Nov 2026 perf pass).
 * lerp-based (not a fixed 1.5 s duration), so the page follows the wheel closely and settles quickly instead of
 * floating behind it. Touch keeps native scrolling. Skipped entirely for prefers-reduced-motion.
 */
export function SmoothScroll({ children }: { children?: React.ReactNode }) {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const lenis = new Lenis({ lerp: 0.12, wheelMultiplier: 1, smoothWheel: true });
        let id = 0;
        const raf = (time: number) => { lenis.raf(time); id = requestAnimationFrame(raf); };
        id = requestAnimationFrame(raf);
        return () => { cancelAnimationFrame(id); lenis.destroy(); };
    }, []);
    return <>{children}</>;
}
