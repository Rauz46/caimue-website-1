import type { Metadata } from "next";
import { Playfair_Display, Urbanist, Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { RevealOnce } from "@/components/effects/RevealOnce";

// Site-wide heading font (23 Nov 2026 trial; was Playfair Display, set in --font-heading in globals.css)
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

// Playfair stays only for the few channel-page bits that name it directly; not preloaded, so other pages never fetch it
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Fonts used by the ported channel pages (e.g. TeqDots)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: false, // only the channel pages use it
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  preload: false, // decorative handwriting only
});

const SITE_TITLE = "Caimue | Tamil and Malayalam Micro-Series, Short Films and Originals";
const SITE_DESCRIPTION = "Caimue is a digital entertainment company making micro-series, short films and feature films in Tamil and Malayalam, and story-led video for brands.";
const SHARE_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Caimue: Tamil and Malayalam micro-series, short films and originals" };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caimue.com"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["Tamil micro-series", "Malayalam micro-series", "Tamil short films", "Malayalam short films", "digital entertainment", "brand micro-series", "Ennitto", "Ennamo", "TeqDots"],
  authors: [{ name: "Caimue" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Caimue",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} ${playfair.variable} ${inter.variable} ${jakarta.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScroll />
          <RevealOnce />
          <GrainOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
