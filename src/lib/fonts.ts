import { Outfit } from "next/font/google";

/**
 * The site's one face. Outfit: a minimal, clean geometric sans. SIL Open Font
 * License, so free for commercial use. Variable (wght 100 to 900), so one file
 * covers every weight. The older font names resolve to it in tokens.css.
 */
export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
