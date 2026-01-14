import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caimue | AI-First Production House",
  description: "An AI-first production house building original Tamil and Malayalam stories at scale. Funding short films, running TeqThots and FunShortz.",
  keywords: ["production house", "AI filmmaking", "Tamil cinema", "Malayalam cinema", "short films", "TeqThots", "FunShortz"],
  authors: [{ name: "Caimue" }],
  openGraph: {
    title: "Caimue | AI-First Production House",
    description: "Building original stories at scale with AI-powered systems.",
    type: "website",
    locale: "en_US",
    siteName: "Caimue",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caimue | AI-First Production House",
    description: "Building original stories at scale with AI-powered systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScroll>
            <GrainOverlay />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
