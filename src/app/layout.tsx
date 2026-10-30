import type { Metadata } from "next";
import { outfit } from "@/lib/fonts";
import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/inner.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Animator } from "@/components/motion/Animator";
import { PageTransition } from "@/components/motion/PageTransition";
import { LoadingScreen } from "@/components/motion/LoadingScreen";
import { Cursor } from "@/components/motion/Cursor";
import { PageReveal } from "@/components/motion/PageReveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: "Caimue is a creative marketing agency that helps B2B brands get remembered and win inbound leads, through brand strategy, websites, video marketing, social media and campaigns.",
  keywords: ["B2B creative marketing agency", "B2B marketing", "brand strategy", "video marketing", "websites", "social media", "campaigns", "Tampa"],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: "A creative marketing agency that helps B2B brands get remembered and win inbound leads.",
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: "A creative marketing agency that helps B2B brands get remembered and win inbound leads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={outfit.variable}
    >
      <body>
        <LoadingScreen />
        <SmoothScroll />
        <Cursor />
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
