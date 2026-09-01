import type { Transition, Variants } from "framer-motion";

/** Expo-out. Matches --ease-out-expo in tokens.css. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Gentle overshoot for things that "pop" in. */
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const transition: Transition = {
  duration: 0.7,
  ease: easeOutExpo,
};

/** Default viewport config: fire once, slightly before the element lands. */
export const viewport = { once: true, margin: "-12% 0px -12% 0px" } as const;

/* --------------------------------------------------------------- variants */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: easeSpring },
  },
};

/**
 * Parent wrapper for staggered children. Children should use `fadeUp`
 * (or any variant keyed `hidden` / `show`) without their own transition delay.
 */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Per-word/line headline reveal. */
export const lineUp: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
};
