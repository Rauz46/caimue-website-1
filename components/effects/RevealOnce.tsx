"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./reveal-once.css";

/**
 * Reveals play once (19 Nov 2026 perf pass). They used to be scroll-linked (animation-timeline: view()), which made
 * the browser recompute every reveal on every scroll frame, and on a fast fling content showed up half-faded or
 * half-scaled. Now each element plays its entrance once, in time, the first time it comes into view, and stays done.
 * Only elements still below the fold when the page opens wait for this; anything already on screen just shows, so
 * nothing on the first screen ever depends on JavaScript. Styles: reveal-once.css.
 */
const TARGETS = ".cm-rise, .lc, .hc, .cm-disc, .cm-decor > *, .cm-decor-item, .au-step, .au-perk, .au-faq, .au-form-card, .au-logos";

export function RevealOnce() {
    const path = usePathname();
    useEffect(() => {
        if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const fold = window.innerHeight * 0.92;
        const waiting = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
            (el) => !el.closest("footer") && !el.classList.contains("rv-in") && el.getBoundingClientRect().top > fold,
        );
        if (!waiting.length) return;
        waiting.forEach((el) => el.classList.add("rv-wait"));
        const io = new IntersectionObserver(
            (entries) => {
                let n = 0;
                for (const e of entries) {
                    if (!e.isIntersecting) continue;
                    const el = e.target as HTMLElement;
                    // things that arrive together (a row of cards) follow each other by a beat
                    el.style.setProperty("--rv-d", `${Math.min(n++, 4) * 70}ms`);
                    el.classList.replace("rv-wait", "rv-in");
                    io.unobserve(el);
                }
            },
            // the observed area runs from just above the bottom of the screen up and sideways without end, so anything
            // on screen or already scrolled past counts as seen: a fast jump can't leave an element waiting forever
            { rootMargin: "100000px 100000px -6% 100000px" },
        );
        waiting.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [path]);
    return null;
}
