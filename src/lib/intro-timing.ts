/**
 * The intro's timing, shared by every stage that lands on the same beat:
 * LoadingScreen (the cover with the wordmark, then the lift), PageReveal
 * (the page settling underneath) and Navbar (arriving as the cover
 * leaves). All in seconds from first paint.
 *
 * The sequence: a white cover where the wordmark builds itself in its own
 * colours (the i rises, its controls land, the word unfolds), one held
 * beat, then the whole cover lifts straight up and the page is already
 * settling beneath it.
 */

export const MARK_START = 0.15;
/* the wordmark title sequence in LoadingScreen (i rises, controls land, word unfolds) */
export const MARK_DURATION = 1.85;
export const MARK_HOLD = 0.3;

export const LIFT_START = MARK_START + MARK_DURATION + MARK_HOLD;
export const LIFT_DURATION = 0.95;
export const LIFT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* The page zoom underneath starts just before the cover moves so what
   the lift uncovers is already in motion. */
export const REVEAL_START = LIFT_START - 0.1;
export const REVEAL_DURATION = 1.1;
export const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* The moment the cover is fully gone; the loader unmounts here. */
export const INTRO_END = LIFT_START + LIFT_DURATION;

/* The nav arrives while the cover is still leaving the top edge. */
export const NAV_START = LIFT_START + 0.25;
