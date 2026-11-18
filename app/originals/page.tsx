"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { BrandGround } from "@/components/ui/BrandGround";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { HandDrawnScribbles } from "@/components/effects/HandDrawnScribbles";
import { PlatformsSection } from "@/components/ui/PlatformsSection";
import "./originals.css";

// ============================================
// LIBRARY DATA (real titles, posters and links already in this repo)
// ============================================

type Format = "Micro-series" | "Short films" | "Feature films" | "Founder stories";
type Language = "Tamil" | "Malayalam" | "English";

type Title = {
  title: string;
  poster: string;
  remote?: boolean; // YouTube thumbnail, served as a plain <img>
  language: Language;
  format: Format;
  meta?: string; // runtime, parts or views, only where the repo has a real value
  href: string;
};

const ENNITTO = "https://www.youtube.com/@ennitto";
const ENNAMO = "https://www.youtube.com/channel/UCXWl6JIzlHIJCYbaCvV_VFg";
const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const LIBRARY: Title[] = [
  { title: "Nadha Nee Varum Kaalocha Kelkuvaan", poster: "/images/Movies/Nadha Nee Varum Kaalocha Kelkuvaan.jpg", language: "Malayalam", format: "Short films", meta: "1 Lakh+ views", href: yt("HlRkj5mbEM8") },
  { title: "Harinarayana Kudu Charitham", poster: "/images/Movies/Harinarayana Kudu Charitham.jpg", language: "Malayalam", format: "Short films", meta: "3 Lakhs+ views", href: ENNITTO },
  { title: "Vishudha Sakshi", poster: "/images/Movies/Vishudha Sakshi.jpg", language: "Malayalam", format: "Short films", meta: "1 Lakh+ views", href: ENNITTO },
  { title: "Welcome Home", poster: "/images/Movies/Welcome Home.jpg", language: "Malayalam", format: "Short films", meta: "100K views & counting", href: ENNITTO },
  { title: "ADS-369", poster: "/images/Movies/ADS-369 Part 1.jpg", language: "Malayalam", format: "Short films", meta: "4 parts", href: ENNITTO },
  { title: "Malsya Mandooka Mahamaham", poster: "/images/Movies/Malsya Mandooka Mahamaham.jpg", language: "Malayalam", format: "Short films", href: ENNITTO },
  { title: "Smile!", poster: "/images/Movies/Smile!.jpg", language: "Malayalam", format: "Short films", href: ENNITTO },
  { title: "Pazhampori", poster: "/images/Movies/Pazhampori.jpg", language: "Malayalam", format: "Short films", href: ENNITTO },
  { title: "Live a Little", poster: "/images/Movies/Live a Little.jpg", language: "Tamil", format: "Short films", href: yt("UbEN3ahOKcI") },
  { title: "Kadhal GPT", poster: "/images/Movies/Kadhal GPT.webp", language: "Tamil", format: "Short films", href: ENNAMO },
  { title: "Inside Piqual — Episode 1", poster: thumb("zwhRON7SIPU"), remote: true, language: "English", format: "Founder stories", href: yt("zwhRON7SIPU") },
  { title: "Piqual in Action — A Real Day Inside a Startup", poster: thumb("PRvikFx6kU4"), remote: true, language: "English", format: "Founder stories", href: yt("PRvikFx6kU4") },
  { title: "Real SaaS Product Debate — SimBFI × TeqDots", poster: thumb("f_Wn3YpgPcw"), remote: true, language: "English", format: "Founder stories", href: yt("f_Wn3YpgPcw") },
];

const FORMATS = ["All", "Micro-series", "Short films", "Feature films", "Founder stories"] as const;

// ============================================
// PIECES
// ============================================

function Pills<T extends string>({ label, options, value, onChange }: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="or-filter" role="group" aria-label={label}>
      <span className="or-filter-label">{label}</span>
      <div className="or-pills">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className="or-pill"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function TitleCard({ t }: { t: Title }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      className="or-card"
    >
      <div className="or-poster">
        {t.remote ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.poster} alt={`${t.title} poster`} loading="lazy" decoding="async" />
        ) : (
          <Image src={t.poster} alt={`${t.title} poster`} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px" />
        )}
      </div>
      <div className="or-body">
        <h3 className="or-title">{t.title}</h3>
        <p className="or-meta">
          {t.language} · {t.format === "Short films" ? "Short film" : t.format === "Founder stories" ? "Founder story" : t.format}
          {t.meta ? <> · {t.meta}</> : null}
        </p>
        <a className="or-watch" href={t.href} target="_blank" rel="noopener noreferrer">
          <Play size={14} fill="currentColor" aria-hidden />
          Watch
        </a>
      </div>
    </motion.article>
  );
}

// ============================================
// PAGE
// ============================================

export default function OriginalsPage() {
  const [format, setFormat] = useState<(typeof FORMATS)[number]>("All");

  const shown = useMemo(
    () => LIBRARY.filter((t) => format === "All" || t.format === format),
    [format]
  );

  return (
    <div className="min-h-screen">
      {/* ===== Banner 1: Hero ===== */}
      <section className="relative flex items-center justify-center pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
        <BrandGround className="z-0" />
        <HeroGrid className="opacity-40 z-10" />
        <div className="bg-noise opacity-10 z-10" />
        <div className="hidden md:contents">
          <FloatingScribbles className="top-16" />
        </div>
        <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
          <div className="absolute top-24 right-1/4 text-purple-400/30 text-4xl">✦</div>
          <div className="absolute top-44 left-1/3 text-purple-300/30 text-2xl">★</div>
          <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="cm-in text-4xl! md:text-5xl! lg:text-6xl! leading-[1.15]! tracking-tight mb-0! font-serif text-white! font-bold">
            Our Originals.
          </h1>
        </div>
      </section>

      {/* ===== Banner 2: The library ===== */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-white">
        <div className="or-grid-lines" aria-hidden />
        <HandDrawnScribbles />
        <div className="container relative z-10">
          <div className="or-filters">
            <Pills label="Format" options={FORMATS} value={format} onChange={setFormat} />
          </div>

          {shown.length > 0 ? (
            <motion.div layout className="or-library">
              {shown.map((t) => (
                <TitleCard key={t.title} t={t} />
              ))}
            </motion.div>
          ) : (
            <p className="or-empty">Coming soon.</p>
          )}
        </div>
      </section>

      {/* ===== Banner 3: Coming up ===== */}
      <section className="relative py-14 md:py-20 overflow-hidden" style={{ background: "#F1E6FF" }}>
        <div className="or-grid-lines" aria-hidden />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="cm-rise cm-h2 font-serif mb-4">
              On The <span className="text-[#5B299D]">Slate.</span>
            </h2>
            <p className="text-[#4A3F5C] text-lg mx-auto max-w-xl [text-wrap:balance]">
              What we are writing, shooting and editing right now.
            </p>
          </motion.div>

          <div className="or-slate">
            {[
              { title: "Mirror", line: "Malayalam short film", tone: "cm-disc--purple" },
              { title: "Untitled Feature", line: "Malayalam", note: "In development.", tone: "cm-disc--pink" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`or-slate-card cm-disc ${s.tone} [--ds:180px]`}
              >
                <h3 className="font-serif text-2xl md:text-[1.75rem] font-bold leading-tight">{s.title}</h3>
                <p className="mt-2 text-base font-medium">{s.line}</p>
                {s.note ? <p className="mt-1 text-base">{s.note}</p> : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Banner 4: Our channels ===== */}
      <PlatformsSection />

      {/* ===== Banner 5: Close ===== */}
      <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: "#FFFFFF" }}>
        <div className="or-grid-lines" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container relative z-10 text-center"
        >
          <h2 className="cm-rise cm-h2 font-serif mb-8">
            Have A Story We <span className="text-[#5B299D]">Should Make?</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/for-artists" className="btn-primary">For Artists</Link>
            <Link href="/for-brands" className="or-btn-ghost">For Brands</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
