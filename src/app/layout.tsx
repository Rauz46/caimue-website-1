import type { Metadata } from "next";
import { clash, generalSans, caveat, satoshi, instrument, geistMono, urbanist } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/home.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Animator } from "@/components/motion/Animator";
import { PageTransition } from "@/components/motion/PageTransition";
import { LoadingScreen } from "@/components/motion/LoadingScreen";
import { PageReveal } from "@/components/motion/PageReveal";
import { site } from "@/content/site";

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
      className={`${clash.variable} ${generalSans.variable} ${caveat.variable} ${satoshi.variable} ${instrument.variable} ${geistMono.variable} ${urbanist.variable}`}
    >
      <body>
        <LoadingScreen />
        <SmoothScroll />
        <Animator />
        <PageTransition />
        <PageReveal>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PageReveal>
      </body>
    </html>
  );
}
