"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Wordmark } from "@/components/brand/Wordmark";
import { MARK_START, LIFT_START, LIFT_DURATION, LIFT_EASE, INTRO_END } from "@/lib/intro-timing";

/**
 * Intro cover: a short title sequence built from the wordmark itself.
 * Plays on every full page load, never on client-side route changes.
 *
 * The story device is the pink i, which carries play / pause / stop:
 *   1. the i rises out of the baseline,
 *   2. its play / pause / stop light up,
 *   3. the word unfolds outward from the i (a and m, then c and u,
 *      then e), each letter arriving already moving,
 *   4. one held beat, then the whole cover lifts straight up.
 *
 * COVER-FIRST: the white cover is in the server-rendered HTML (the logo
 * is never recoloured, so it plays on white in its own colours); the
 * mark's parts start hidden in CSS (.intro [data-wm]) so nothing flashes
 * before the timeline takes over.
 */
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const mark = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Not cleaned up on purpose: Strict Mode's dev double-invoke once
    // cancelled this timeout and left the cover up forever.
    window.setTimeout(() => setDone(true), reduced ? 0 : INTRO_END * 1000);
  }, []);

  useEffect(() => {
    const el = mark.current;
    if (!el) return;
    const part = (k: string) => el.querySelectorAll<SVGElement>(`[data-wm="${k}"]`);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: MARK_START, defaults: { ease: "expo.out" } });

      // 1. the i rises out of the baseline
      tl.fromTo(part("i-bar"), { autoAlpha: 1, scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.7 }, 0);
      tl.set(part("i"), { autoAlpha: 1 }, 0);

      // 2. play / pause / stop light up inside it
      tl.fromTo(part("i-sym"), { autoAlpha: 0, scale: 0.6, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 0.6 }, 0.45);

      // 3. the word unfolds outward from the i
      const unfold = (k: string, fromX: number, at: number) =>
        tl.fromTo(part(k), { autoAlpha: 0, x: fromX }, { autoAlpha: 1, x: 0, duration: 0.8 }, at);
      unfold("a", 140, 0.84);
      unfold("m", -140, 0.84);
      unfold("c", 220, 0.94);
      unfold("u", -220, 0.94);
      unfold("e", -260, 1.04);
    }, el);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="intro"
      aria-hidden
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{ duration: LIFT_DURATION, delay: LIFT_START, ease: LIFT_EASE }}
    >
      <div className="intro__wm" ref={mark}>
        <Wordmark />
      </div>
    </motion.div>
  );
}
