import type { Metadata } from "next";
import {
  Caveat,
  Inter,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { site } from "@/content/site";

/**
 * Three faces, minimum weights each — every extra weight is another blocking
 * font file on first paint.
 */

/** Display face — geometric, heavy, tight. Carries every headline. */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  preload: true,
});

/** Body face. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

/** Editorial serif — the "Fancy a chat?" headline and legacy pages. */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: false,
});

/** Handwritten accent, used for the film-set margin notes. */
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Caimue is a video-first B2B marketing agency — corporate videos, LinkedIn media campaigns, and marketing websites in Tamil, Malayalam, and English. Backed by a talent pipeline from TeqDots and FunShortz.",
  keywords: [
    "B2B marketing agency",
    "video marketing",
    "corporate videos",
    "LinkedIn media campaigns",
    "marketing websites",
    "Tamil content",
    "Malayalam content",
    "TeqDots",
    "FunShortz",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Corporate videos, LinkedIn media campaigns, and marketing websites that make brands impossible to scroll past.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description:
      "Corporate videos, LinkedIn media campaigns, and marketing websites that make brands impossible to scroll past.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
