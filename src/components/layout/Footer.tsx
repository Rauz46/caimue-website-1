import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import WorldMap from "@/components/ui/world-map";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { footerCta, nav, site } from "@/content/site";

/** Tampa (HQ) -> London -> Chennai. */
const routes = [
  {
    start: { lat: 27.9506, lng: -82.4572, label: "Tampa(HQ)" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 13.0827, lng: 80.2707, label: "Chennai" },
  },
];

export function Footer() {
  return (
    <footer className="relative bg-white">
      {/* ---------------- Purple CTA band with the world map ---------------- */}
      <section className="relative flex min-h-[420px] items-center overflow-hidden py-16 md:h-[453px] md:py-0">
        {/* A slice of the same violet -> magenta -> orange ramp the rest of the
            page runs on, so this band reads as the theme returning rather than
            a colour scheme of its own. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #6b41e6 0%, #8b3dff 26%, #c026d3 58%, #e0409c 78%, #f4622c 100%)",
          }}
          aria-hidden
        />
        <div
          className="grid-lines absolute inset-0 opacity-40"
          style={
            {
              "--grid-color": "rgba(255,255,255,0.07)",
              "--grid-size": "48px",
            } as React.CSSProperties
          }
          aria-hidden
        />
        <FloatingScribbles color="text-white/25" className="z-[1]" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <Reveal as="h2" className="mb-6 font-serif text-[2.75rem] font-bold tracking-tight text-white sm:text-[3.5rem] lg:text-[4rem]"
              >
                {footerCta.headline}
              </Reveal>

              <Reveal as="p" delay={0.08} className="mb-9 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg"
              >
                {footerCta.body}
              </Reveal>

              <Reveal delay={0.16}>
                <Link
                  href={footerCta.cta.href}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-[#4c1d95] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.5)] sm:text-lg"
                >
                  Start a Conversation
                  <ArrowRight size={20} />
                </Link>
              </Reveal>
            </div>

            {/* World map */}
            <div className="hidden w-full lg:block">
              <WorldMap dots={routes} lineColor="#FF0000" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- White bottom bar ---------------- */}
      <div className="bg-white py-10">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Link
              href="/"
              className="transition-transform duration-300 hover:scale-105"
              aria-label={`${site.name} — home`}
            >
              <Image
                src={site.logoFooter}
                alt={site.name}
                width={200}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-[0.95rem] font-bold text-[#1f2937] transition-colors hover:text-violet"
              >
                Contact
              </Link>

              <div className="flex items-center gap-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-100 bg-gray-50/50 text-gray-400 transition-all hover:border-gray-200 hover:text-violet"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-100 bg-gray-50/50 text-gray-400 transition-all hover:border-gray-200 hover:text-violet"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-[0.8125rem] font-medium text-gray-400 md:flex-row">
            <p className="mb-0">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              {nav.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-gray-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
