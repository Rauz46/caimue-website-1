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

// Fonts used by the ported channel pages (e.g. TeqThots)
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
  title: "Caimue | AI-First Film Studio",
  description: "An AI-first film studio building original Tamil and Malayalam stories at scale. Funding short films, running TeqThots and FunShortz.",
  keywords: ["film studio", "AI filmmaking", "Tamil cinema", "Malayalam cinema", "short films", "TeqThots", "FunShortz"],
  authors: [{ name: "Caimue" }],
  openGraph: {
    title: "Caimue | AI-First Film Studio",
    description: "Building original stories at scale with AI-powered systems.",
    type: "website",
    locale: "en_US",
    siteName: "Caimue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caimue | AI-First Film Studio",
    description: "Building original stories at scale with AI-powered systems.",
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
