/**
 * The intro's timing, shared by every stage that lands on the same beat:
 * LoadingScreen (the logo bounce, then the video window), PageReveal (the
 * "revealed" signal), Hero (its words) and Navbar (the island). All in
 * seconds from first paint.
 *
 * The sequence (Oct 2026): on a white cover the pink dot drops and bounces
 * along the baseline, landing each letter of the logo (caimue-logo-bounce,
 * the rebrand film's choreography). A beat. Then a window opens under the
 * logo onto the hero's reel, grows into a framed card, and the card
 * expands to the full screen and becomes the hero. The navbar arrives as
 * a dynamic island while the window fills the screen.
 *
 * "LIFT" is the moment the hero's words start; the name is kept because
 * Hero and Home time their entrances from it.
 */

export const MARK_START = 0.2;
/* one play of the logo bounce at the film's beat (0.242 s) */
export const MARK_DURATION = 1.97;
export const MARK_HOLD = 0.2;

/* the window onto the reel: opens to a card, holds, then fills the screen */
export const WINDOW_START = MARK_START + MARK_DURATION + MARK_HOLD;
export const WINDOW_CARD = 0.8;
export const WINDOW_HOLD = 0.3;
export const WINDOW_FILL = 0.95;

export const LIFT_START = WINDOW_START + WINDOW_CARD + WINDOW_HOLD + 0.35;
export const LIFT_DURATION = WINDOW_FILL;
export const LIFT_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export const REVEAL_START = WINDOW_START;
export const REVEAL_DURATION = 0.01;
export const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* the moment the cover is fully gone; the loader unmounts here */
export const INTRO_END = WINDOW_START + WINDOW_CARD + WINDOW_HOLD + WINDOW_FILL;

/* the island: it appears as the window starts to fill the screen */
export const NAV_START = WINDOW_START + WINDOW_CARD + WINDOW_HOLD + 0.2;
