"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Youtube } from "lucide-react";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { BrandGround } from "@/components/ui/BrandGround";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { ContactForms } from "@/components/contact/ContactForms";
import "./contact.css";

// v7 copy: one door per audience, each with its own inbox
const DOORS = [
  { label: "Brands", line: "A series, a film or a collaboration.", email: "brands@caimue.com", tone: "cm-disc--purple" },
  { label: "Artists", line: "Actors, writers, directors, crew.", email: "artists@caimue.com", tone: "cm-disc--pink" },
  { label: "Everything Else", line: "Press, partnerships, careers.", email: "hello@caimue.com", tone: "cm-disc--violet" },
];

// channel links already used across the site
const LINKS = [
  { label: "Ennitto", sub: "YouTube", href: "https://www.youtube.com/@ennitto", Icon: Youtube },
  { label: "Ennamo", sub: "YouTube", href: "https://www.youtube.com/channel/UCXWl6JIzlHIJCYbaCvV_VFg", Icon: Youtube },
  { label: "TeqDots", sub: "YouTube", href: "https://www.youtube.com/@TeqThots", Icon: Youtube },
  { label: "Caimue", sub: "LinkedIn", href: "https://www.linkedin.com/company/caimue-inc", Icon: Linkedin },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* --- Hero --- */}
      <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-14 md:pt-36 md:pb-16">
        <BrandGround className="z-0" />
        <HeroGrid className="opacity-40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-10 z-10 pointer-events-none" />
        <FloatingScribbles className="scale-75 origin-center opacity-80" />

        <div className="container mx-auto px-4 relative z-30 text-center flex flex-col items-center justify-center">
          <motion.h1 className="cm-in font-serif text-4xl! md:text-5xl! lg:text-6xl! font-bold !text-white leading-[1.15]! mb-0! tracking-tight">
            Three Doors. Pick Yours.
          </motion.h1>
        </div>
      </section>

      {/* --- The three doors --- */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden" style={{ background: "#F1E6FF" }}>
        <div className="ct-grid-lines" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="ct-doors">
            {DOORS.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className={`ct-door cm-disc ${d.tone} [--ds:170px]`}
              >
                <h2 className="font-serif text-3xl! md:text-[2.1rem]! font-bold leading-tight! whitespace-nowrap">{d.label}</h2>
                <p className="mt-2 text-base font-medium [text-wrap:balance]">{d.line}</p>
                <a className="ct-mail" href={`mailto:${d.email}`}>
                  <Mail size={16} aria-hidden />
                  {d.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Address and links --- */}
      <section className="cv-auto relative py-16 md:py-20 overflow-hidden bg-white">
        <div className="ct-grid-lines ct-grid-lines--soft" aria-hidden />
        <div className="container mx-auto px-4 relative z-10">
          <div className="ct-below">
            {/* Office card, same style as before */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="group relative"
            >
              <div className="ct-office cm-disc cm-disc--pink [--ds:190px] rounded-3xl p-8 pt-10 h-full flex flex-col">
                <div className="absolute top-4 right-4" aria-hidden>
                  <svg viewBox="0 0 80 120" fill="none" className="w-16 h-24 md:w-20 md:h-28 opacity-[0.18]">
                    {/* South Indian temple gopuram */}
                    <g fill="currentColor">
                      <ellipse cx="40" cy="6" rx="3" ry="4" />
                      <rect x="38" y="9" width="4" height="3" />
                      <path d="M33 12H47L45 20H35L33 12Z" />
                      <rect x="32" y="20" width="16" height="2" />
                      <path d="M29 22H51L49 32H31L29 22Z" />
                      <rect x="28" y="32" width="24" height="2" />
                      <path d="M25 34H55L53 46H27L25 34Z" />
                      <rect x="24" y="46" width="32" height="2" />
                      <path d="M21 48H59L57 62H23L21 48Z" />
                      <rect x="20" y="62" width="40" height="2" />
                      <path d="M17 64H63L61 80H19L17 64Z" />
                      <rect x="16" y="80" width="48" height="3" />
                      <rect x="14" y="83" width="52" height="24" />
                      <path d="M32 107V92Q32 86 40 84Q48 86 48 92V107Z" fill="#E31B23" />
                      <rect x="18" y="88" width="6" height="8" rx="3" fill="#E31B23" />
                      <rect x="56" y="88" width="6" height="8" rx="3" fill="#E31B23" />
                      <rect x="10" y="107" width="60" height="4" rx="1" />
                      <rect x="6" y="111" width="68" height="3" rx="1" />
                    </g>
                  </svg>
                </div>

                <div className="flex items-start gap-4 mb-5 relative z-10 justify-center">
                  <span className="text-4xl mt-1 inline-block" aria-hidden>🇮🇳</span>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold tracking-tight">Chennai</h3>
                    <p className="text-sm font-semibold mt-0.5 opacity-90">India</p>
                  </div>
                </div>
                <div className="h-[2px] w-12 bg-current opacity-40 mb-5 rounded-full mx-auto" />
                <div className="space-y-0.5 flex-1 relative z-10 text-center">
                  <p className="text-sm font-medium leading-relaxed">6th Floor, Arihant Technopolis,</p>
                  <p className="text-sm font-medium leading-relaxed">Chennai 600096</p>
                </div>
              </div>
            </motion.div>

            {/* Channel links */}
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="ct-links"
            >
              {LINKS.map(({ label, sub, href, Icon }) => (
                <li key={label + sub}>
                  <a className="ct-link" href={href} target="_blank" rel="noopener noreferrer">
                    <span className="ct-link-icon"><Icon size={18} aria-hidden /></span>
                    <span className="ct-link-text">
                      <span className="ct-link-label">{label}</span>
                      <span className="ct-link-sub">{sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* --- Enquiry forms (brands / artists), the only forms on the site --- */}
      <ContactForms />
    </main>
  );
}
