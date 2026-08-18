import type { Metadata } from "next";
import { Playfair_Display, Inter, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { ThemeProvider } from "@/components/ThemeProvider";

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
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caimue | Video-First B2B Marketing Agency",
  description: "Caimue is a video-first B2B marketing agency — corporate videos, LinkedIn media campaigns, and marketing websites in Tamil, Malayalam, and English. Backed by a talent pipeline from TeqDots and FunShortz.",
  keywords: ["B2B marketing agency", "video marketing", "corporate videos", "LinkedIn media campaigns", "marketing websites", "Tamil content", "Malayalam content", "TeqDots", "FunShortz"],
  authors: [{ name: "Caimue" }],
  openGraph: {
    title: "Caimue | Video-First B2B Marketing Agency",
    description: "Corporate videos, LinkedIn media campaigns, and marketing websites that make brands impossible to scroll past.",
    type: "website",
    locale: "en_US",
    siteName: "Caimue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caimue | Video-First B2B Marketing Agency",
    description: "Corporate videos, LinkedIn media campaigns, and marketing websites that make brands impossible to scroll past.",
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
          <GrainOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
