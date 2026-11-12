import type { Metadata } from "next";
import { Playfair_Display, Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/effects/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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

const SITE_TITLE = "Caimue | Video Worth Watching. Brands Worth Building.";
const SITE_DESCRIPTION = "Corporate films and LinkedIn campaigns for B2B brands worth remembering.";
const SHARE_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Caimue: Video Worth Watching. Brands Worth Building." };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caimue.com"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["B2B marketing agency", "video marketing", "corporate videos", "LinkedIn media campaigns", "marketing websites", "Tamil content", "Malayalam content", "TeqDots", "FunShortz"],
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jakarta.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScroll />
          <GrainOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
