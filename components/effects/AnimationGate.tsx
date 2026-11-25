"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Pauses every CSS animation in a section while that section is off screen (24 Nov 2026 scroll pass).
 * The page has about 28 looping animations; without this they all keep running while you read one section, and on a
 * phone that work competes with the scroll itself. Each section and the footer gets `cm-off` when it is more than
 * 200px outside the screen; globals.css pauses everything inside `.cm-off`.
 */
export function AnimationGate() {
    const pathname = usePathname();
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.target.classList.toggle("cm-off", !e.isIntersecting)),
            { rootMargin: "200px 0px" },
        );
        document.querySelectorAll("section, footer").forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [pathname]);
    return null;
}
