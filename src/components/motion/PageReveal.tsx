"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVEAL_START, REVEAL_DURATION, REVEAL_EASE } from "@/lib/intro-timing";

gsap.registerPlugin(ScrollTrigger);

/**
 * The page is "revealed" once this wrapper's transform is gone. Two
 * things hang on that moment:
 *
 *   1. Every ScrollTrigger on the page re-measures. ScrollTrigger reads
 *      positions with getBoundingClientRect, which INCLUDES ancestor
 *      transforms — a trigger measured while this wrapper was still at
 *      scale 1.16 (around the centre of a page thousands of pixels
 *      tall) records its start hundreds of pixels above where it really
 *      is, and reports real progress at scroll 0. That is precisely the
 *      "hero half-way through its scroll transition before I touched
 *      the wheel" bug.
 *   2. Components that build scroll-driven timelines (Hero) wait for
 *      this signal before creating them, so they never measure through
 *      the transform in the first place.
 *
 * Signalled two ways so nothing depends on listener timing: an
 * attribute (for anyone who mounts after it fired) and an event (for
 * anyone already waiting).
 */
function markRevealed() {
  document.documentElement.dataset.revealed = "1";
  ScrollTrigger.refresh();
  window.dispatchEvent(new Event("caimue:revealed"));
}

/**
 * Zooms the whole page (navbar included) down from oversized to its
 * resting scale, timed to start the instant the star wipe reaches full
 * cover — so the zoom's first third happens hidden behind opaque ink,
 * and what the wipe uncovers is a page already in motion. The two
 * components never talk to each other; they both read the same
 * constants from lib/intro-timing, which is what keeps them in sync.
 *
 * THE WRAPPER NEVER UNMOUNTS. An earlier version rendered `{children}`
 * bare once the zoom finished, to get rid of the transform — a
 * `transform` on an ancestor makes it the containing block for any
 * `position:fixed` descendant, which would have quietly broken Navbar's
 * fixed header for the rest of the session otherwise. But swapping from
 * `<motion.div>{children}</motion.div>` to `<>{children}</>` is a
 * different DOM structure, and React unmounts and remounts everything
 * under it to get there — Navbar, Hero, all of it. Hero has its own
 * entrance animation, so that remount replayed it from scratch a beat
 * after it had already finished.
 *
 * Same element for the component's whole life instead: once the scale
 * animation completes, `onAnimationComplete` reaches through a ref and
 * sets `transform` to `none` directly on the DOM node — a plain
 * mutation, not a re-render, so nothing downstream remounts, and the
 * containing-block problem is still solved because `none` (not
 * `scale(1)`) is what actually satisfies the spec.
 *
 * PERFORMANCE — scaling the entire page tree is the single most
 * expensive thing in the intro: without a hint, the browser re-
 * rasterises every layer inside it at a new resolution on every frame.
 * `will-change: transform` promotes the wrapper once, so it rasterises
 * once and the frames after that are pure compositor work. It is set
 * declaratively (not left to a heuristic) and CLEARED the moment the
 * zoom lands — a permanent `will-change` on a wrapper this big pins a
 * large texture in GPU memory for the rest of the session and makes
 * ordinary scrolling worse, which is the usual way this fix backfires.
 *
 * 1.16, not the 1.22 this used to run: a smaller scale delta means less
 * of the page starts outside the viewport, so there is less to raster,
 * and behind an opaque cover for the first third of it the extra 6% was
 * never visible as "zoom" anyway.
 */
/* 0.94, growing to 1 (Oct 2026): the intro now exits by pushing through
   the wordmark's full stop (the word grows past camera), so the page
   beyond must grow too: a shrinking page under a growing exit is a
   mirrored Z vector and reads as the camera changing its mind. */
/* 1 (Oct 2026): the intro now ends by a window onto the reel filling the screen, so the page
   stays at rest underneath; only the revealed signal is kept */
const START_SCALE = 1;

export function PageReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // No zoom under reduced motion, so no completion callback to hang the
  // signal on — fire it on mount instead.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) markRevealed();
  }, []);

  return (
    <motion.div
      ref={ref}
      /* framer-motion's useReducedMotion() is null on the server and for
         the first client render, so branching on it HERE rendered one
         inline transform on the server and another on the client, and
         React logged a hydration mismatch it explicitly does not patch
         up. initial and style are identical either way now; the reduced
         branch lives in transition, which is never a DOM attribute, so
         the zoom simply lands in zero seconds instead of not existing. */
      initial={{ scale: START_SCALE }}
      animate={{ scale: 1 }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: REVEAL_DURATION, delay: REVEAL_START, ease: REVEAL_EASE }
      }
      onAnimationComplete={() => {
        if (ref.current) {
          ref.current.style.transform = "none";
          ref.current.style.willChange = "auto";
        }
        markRevealed();
      }}
      /* zoom about the middle of the first screen (the intro always starts
         at scroll 0), not of the whole document: about the document's
         centre, the hero sat above the viewport while the iris opened */
      style={{
        transformOrigin: "50% 50vh",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
