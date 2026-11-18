"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BrandGround } from "@/components/ui/BrandGround";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// ============================================
// DATA ARRAYS
// ============================================

const allTeam = [
  { name: "Joseph Olassa",      role: "Board Chair",              image: "/team/v2/joseph.webp",  color: "#7C3AED",
    bio: "The visionary who keeps us reaching further. Decades of wisdom, zero fear of new ideas — the calm hand behind our boldest bets.",
    fun: "Believes every meeting is better with a story", tags: ["Strategy", "Vision"] },
  { name: "Vivin Raj",          role: "Startup Champion",         image: "/team/v2/vivin.webp",   color: "#DB2777",
    bio: "Creative force running the whole show. From scripts to strategy, he's the spark that turned a YouTube channel into a studio.",
    fun: "Fueled by midnight edits and filter coffee", tags: ["Creative", "Execution"] },
  { name: "Gowtham S",          role: "Marketing Champion",       image: "/team/v2/gowtham.webp", color: "#F97316",
    bio: "Gets our stories in front of the audiences they deserve. Growth strategy by day, thumbnail perfectionist by night.",
    fun: "Knows the algorithm better than it knows itself", tags: ["Marketing", "Growth"] },
  { name: "Oliviya Selvaraj",   role: "Content Creator & Brand Host", image: "/team/v2/oliviya.webp", color: "#F43F5E",
    bio: "The face and voice that makes brands feel human. Camera-ready, always on, never off-script.",
    fun: "Never needs a second take", tags: ["Content", "On-Camera"] },
  { name: "Megha Balakrishnan", role: "WordPress AI Web Creator", image: "/team/v2/megha.webp",   color: "#2563EB",
    bio: "Builds AI-powered websites that bring our stories online. Design sense meets machine speed, and the web keeps up.",
    fun: "Ships sites faster than the coffee gets cold", tags: ["Web", "AI"] },
  { name: "Godson Azariah",     role: "AI Web Developer",         image: "/team/v2/godson.webp",  color: "#0891B2",
    bio: "Builds the websites that carry every story. Self-taught, fast-shipping, quietly essential.",
    fun: "Ships a feature between two cups of chai", tags: ["Web", "Dev"] },
  { name: "Manjusri S",         role: "Marketing Associate",      image: "/team/v2/manjusri.webp", color: "#F59E0B",
    bio: "With a marketer’s eye, a creative mindset and a passion for storytelling.",
    fun: "", tags: [] },
  { name: "Roshan S",           role: "Junior Associate, Content Creator", image: "/team/v2/roshan.webp", color: "#10B981",
    bio: "With a creative eye, a storyteller’s mind and a passion for content that connects.",
    fun: "", tags: [] },
];

const clients = [
  { name: "Hael", src: "/logos/loglos/hael.png" },
  { name: "Prodeify", src: "/logos/loglos/Prodeify-logo-final-768x280-1.png" },
  { name: "Piqual", src: "/logos/loglos/piqual.png" },
  { name: "Aventei", src: "/logos/loglos/aventei.png" },
  { name: "Talentou", src: "/logos/loglos/cropped-Talentou-3.png" },
  { name: "Nuivio", src: "/logos/loglos/Nuivio.png" },
];

const beliefs = [
  { title: "Story First",       line: "Format, platform and budget come after. If the story is not worth watching, nothing else matters.", rotation: "-rotate-[3deg]", tape: "#C4B5FD" },
  { title: "Rooted In Language", line: "Tamil and Malayalam, written from inside the culture.",                                                 rotation: "rotate-[2deg]",  tape: "#FBCFE8" },
  { title: "New Talent",        line: "We would rather discover an artist than rent a famous one.",                                            rotation: "-rotate-[2deg]", tape: "#FDE68A" },
  { title: "Lean And AI-First", line: "Small team, fast cycles, every rupee on the screen.",                                                    rotation: "rotate-[3deg]",  tape: "#A5F3FC" },
];

const cultureCards = [
  { img: "/images/culture/craft.png",   caption: "Craft over noise",         sub: "every frame earns its place",  rotation: "-rotate-[6deg]", tape: "#C4B5FD" },
  { img: "/images/culture/ai-soul.png", caption: "AI with soul",             sub: "tech that serves the story",   rotation: "rotate-[4deg]",  tape: "#FBCFE8" },
  { img: "/images/culture/coffee.png",  caption: "Coffee-fueled chaos",      sub: "our best ideas start here",    rotation: "-rotate-[3deg]", tape: "#FDE68A" },
  { img: "/images/culture/remote.png",  caption: "Remote, everywhere",       sub: "three cities, one crew",       rotation: "rotate-[5deg]",  tape: "#A5F3FC" },
  { img: "/images/culture/laugh.png",   caption: "Work hard, laugh harder",  sub: "the blooper reel is sacred",   rotation: "-rotate-[4deg]", tape: "#BBF7D0" },
];

// ============================================
// TEAM CARD SUBCOMPONENT
// ============================================

const TAPE_COLORS = ["#FDE68A", "#FBCFE8", "#C4B5FD", "#A5F3FC", "#BBF7D0", "#FCA5A5", "#FED7AA", "#DDD6FE"];
const ROTATIONS  = [-3, 2.5, -2, 3.5, -1.5, 3, -2.5, 1.5];

function TeamCard({ person, index }: { person: typeof allTeam[0]; index: number }) {
  const rot       = ROTATIONS[index % ROTATIONS.length];
  const tapeColor = TAPE_COLORS[index % TAPE_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rot }}
      whileInView={{ opacity: 1, y: 0, rotate: rot }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      // calm hover: the note straightens and lifts slightly, with its own quick timing (not the entrance stagger)
      whileHover={{ rotate: 0, y: -6, zIndex: 30,
        boxShadow: "0 18px 36px rgba(0,0,0,0.16), 0 4px 10px rgba(0,0,0,0.08)",
        transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] } }}
      className={`group relative cursor-default select-none bg-white w-full max-w-[320px] sm:max-w-none sm:w-[calc(50%-14px)] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-72px)/4)] ${index % 2 === 1 ? "lg:mt-7" : ""}`}
      style={{
        padding: "10px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.07)",
        zIndex: 1,
      }}
    >
      {/* Tape strip */}
      <div
        className="absolute -top-3.5 left-1/2 w-14 h-7 rounded-sm opacity-75 z-10"
        style={{
          background: tapeColor,
          transform: "translateX(-50%) rotate(-1.5deg)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      />

      {/* Photo */}
      <div className="relative overflow-hidden" style={{ height: "195px" }}>
        <div className="absolute inset-0" style={{ backgroundColor: `${person.color}25` }} />
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 240px"
          className="object-cover object-top"
        />
        {/* Film-notch top-right */}
        <div className="absolute top-2 right-2 flex gap-0.5 z-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-3 rounded-sm opacity-40" style={{ background: "#fff" }} />
          ))}
        </div>
      </div>

      {/* Polaroid caption — centered on mobile, left on larger screens */}
      <div className="px-3 pt-3 pb-3 text-center">
        {/* Name — big and bold */}
        <h4 className="font-serif font-black text-gray-900 leading-tight mb-1.5"
          style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)" }}>
          {person.name}
        </h4>
        {/* Role — quiet pill, normal case */}
        <span
          className="inline-block text-[12px] font-bold tracking-wide px-3 py-[3px] mb-2 rounded-full"
          style={{ background: `${person.color}14`, color: person.color, border: `1px solid ${person.color}30` }}
        >
          {person.role}
        </span>
        {/* Bio */}
        <p className="text-[13px] leading-relaxed font-sans italic text-gray-600">
          "{person.bio}"
        </p>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* =================================================================
          SECTION 1,HERO
          ================================================================= */}
      <section className="relative flex items-center justify-center pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
        {/* Animated gradient background,same as homepage */}
        <BrandGround className="z-0" />

        {/* Subtle line grid overlay,same as homepage */}
        <HeroGrid className="opacity-40 z-10" />
        <div className="bg-noise opacity-10 z-10" />

        {/* Decorative scribbles,same as homepage — desktop only */}
        <div className="hidden md:contents">
          <FloatingScribbles className="top-16" />
        </div>

        {/* Decorative Stars — desktop only */}
        <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
          <div className="absolute top-24 right-1/4 text-purple-400/30 text-4xl">✦</div>
          <div className="absolute top-44 left-1/3 text-purple-300/30 text-2xl">★</div>
          <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
          <div className="absolute bottom-1/4 left-1/2 text-purple-300/30 text-2xl">✦</div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          {/* Headline */}
          <motion.h1
            className="cm-in text-4xl! md:text-5xl! lg:text-6xl! leading-[1.15]! tracking-tight mb-0! font-serif [text-wrap:balance]"
          >
            <span className="text-white font-bold block">
              A Digital Entertainment Company
            </span>
            <span className="text-[#FFC4DD] font-bold block">
              For Tamil And Malayalam.
            </span>
          </motion.h1>

        </div>
      </section>

      {/* =================================================================
          SECTION 3,OUR STORY & VALUES
          ================================================================= */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: "#F1E6FF" }}>
        {/* Checked grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating handwritten doodles — desktop only */}
        <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-12 left-[8%] text-purple-400/25 text-5xl font-handwriting -rotate-12">ideas!</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-20 right-[10%] text-pink-400/20 text-4xl font-handwriting rotate-6">create ✦</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-24 left-[12%] text-purple-500/20 text-3xl font-handwriting rotate-3">★ stories</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-16 right-[8%] text-pink-400/20 text-4xl font-handwriting -rotate-6">play →</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
            className="absolute top-1/2 left-[3%] text-purple-300/15 text-6xl font-handwriting -rotate-90">AI</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/3 right-[3%] text-purple-300/15 text-5xl font-handwriting rotate-90">film</motion.span>

          {/* Decorative circles */}
          <div className="absolute top-16 right-1/4 w-32 h-32 rounded-full border-2 border-dashed border-purple-300/15 animate-spin" style={{ animationDuration: "25s" }} />
          <div className="absolute bottom-20 left-[20%] w-20 h-20 rounded-full border border-pink-300/15 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }} />

          {/* Soft glow blobs */}
        </div>

        <div className="relative z-10 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left — Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="cm-rise cm-h2 mb-5 font-serif text-center [text-wrap:balance]">
                It Started With{" "}
                <span className="text-[#5B299D]">
                  Short Films.
                </span>
              </h2>
              <p className="text-[#4A3F5C] text-base md:text-lg leading-relaxed font-sans [text-wrap:pretty]">
                Caimue began as Café Musings, a small group making short films and building channels from
                zero. With no ad spend, those films crossed 2 million organic views, and 25+ writers,
                directors and actors made their first work with us. Brands noticed and asked to be part of
                the stories. Today we make micro-series, short films and brand stories in Tamil and
                Malayalam, and we are building toward our first Malayalam feature film.
              </p>
            </motion.div>

            {/* Right — Our Culture image (values built in) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
                src="/our story.png"
                alt="The Caimue crew on set — driven by passion, integrity, and performance"
                width={1108}
                height={854}
                sizes="(max-width: 768px) 92vw, 660px"
                className="w-full max-w-[660px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 4,TEAM
          ================================================================= */}
      <section className="cv-auto relative py-12 md:py-16 overflow-hidden" style={{ background: "white" }}>
        {/* Checked grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating doodles — desktop only */}
        <div className="cm-decor absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-16 left-[6%] text-purple-300/20 text-5xl font-handwriting -rotate-12">team!</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-24 right-[8%] text-pink-300/20 text-4xl font-handwriting rotate-8">creators ✦</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-20 left-[10%] text-amber-300/20 text-3xl font-handwriting rotate-3">★ builders</motion.span>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }}
            className="absolute bottom-24 right-[6%] text-blue-300/20 text-4xl font-handwriting -rotate-6">dreamers →</motion.span>

          {/* Decorative shapes */}
          <div className="absolute top-12 right-1/4 w-24 h-24 rounded-full border-2 border-dashed border-purple-200/20 animate-spin" style={{ animationDuration: "30s" }} />
          <div className="absolute bottom-16 left-1/3 w-16 h-16 rounded-full border border-pink-200/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />

          {/* Dot accents */}
          <div className="absolute top-1/3 left-[4%] w-3 h-3 rounded-full bg-purple-400/30" />
          <div className="absolute top-1/4 right-[5%] w-4 h-4 rounded-full bg-pink-400/20" />
          <div className="absolute bottom-1/3 right-[12%] w-3 h-3 rounded-full bg-amber-400/30" />
          <div className="absolute bottom-1/4 left-[8%] w-5 h-5 rounded-full bg-blue-400/15" />

          {/* Soft glow blobs */}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="cm-rise cm-h2 mb-4 font-serif">
              Meet the Caimue{" "}
              <span className="text-[#5B299D]">
                Crew
              </span>
            </h2>
            <p className="text-[#4A3F5C] text-lg mx-auto font-sans md:whitespace-nowrap">
              A small, mighty team of builders, creators, and dreamers who refuse to play it safe.
            </p>
          </motion.div>

          {/* Polaroid grid */}
          <div className="flex flex-wrap justify-center gap-7 md:gap-6 max-w-[1040px] mx-auto" style={{ paddingBottom: "28px" }}>
            {allTeam.map((person, i) => (
              <TeamCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6,LIFE AT CAIMUE
          ================================================================= */}
      <section className="cv-auto relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden" style={{ background: "#F1E6FF" }}>
        {/* Checked grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.06,
            backgroundImage:
              "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="cm-rise cm-h2 mb-0 font-serif">
              What We{" "}
              <span className="text-[#5B299D]">Believe</span>
            </h2>
          </motion.div>

          {/* Belief notes: the crew board's paper-and-tape cards, text only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 max-w-[1080px] mx-auto">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${b.rotation} relative bg-white shadow-lg px-6 pt-9 pb-7 w-full max-w-[320px] mx-auto text-center transition-[translate,rotate,box-shadow] duration-250 ease-out hover:-translate-y-1 hover:shadow-xl hover:rotate-0 cursor-default`}
              >
                <div
                  className="absolute -top-3 left-1/2 w-14 h-6 rounded-sm opacity-80"
                  style={{ background: b.tape, transform: "translateX(-50%) rotate(-2deg)", boxShadow: "0 1px 3px rgba(0,0,0,0.15)" }}
                />
                <p className="text-xl font-bold text-gray-900 font-serif leading-tight mb-3">{b.title}</p>
                <p className="text-[15px] text-[#4A3F5C] leading-relaxed font-sans [text-wrap:pretty]">{b.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE WE ARE
          ================================================================= */}
      <section className="cv-auto relative py-14 md:py-20 overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(#4C1D95 1px, transparent 1px), linear-gradient(90deg, #4C1D95 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="cm-rise cm-h2 mb-8 font-serif">
            Where We{" "}
            <span className="text-[#5B299D]">Are</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cm-disc cm-disc--purple inline-flex flex-col items-center text-center rounded-[28px] px-10 py-9 max-w-md mx-auto"
          >
            <p className="text-2xl font-bold font-serif text-white mb-2">Chennai</p>
            <p className="text-white/90 text-base leading-relaxed">6th Floor, Arihant Technopolis, Chennai 600096</p>
          </motion.div>
          <p className="mt-6 text-[#4A3F5C] text-base">Part of the Nuivio / Aventei portfolio.</p>
        </div>
      </section>

    </div>
  );
}
