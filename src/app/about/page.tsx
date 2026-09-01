"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { NAV_HEIGHT } from "@/lib/layout";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// ============================================
// DATA ARRAYS
// ============================================

const allTeam = [
  // Row 1
  { name: "Joseph Olassa",      role: "Board Chair",              image: "/team/styled/joseph.png",  color: "#7C3AED",
    bio: "The visionary who keeps us reaching further. Decades of wisdom, zero fear of new ideas — the calm hand behind our boldest bets.",
    fun: "Believes every meeting is better with a story", tags: ["Strategy", "Vision"] },
  { name: "Vivin Raj",          role: "Startup Champion",         image: "/team/styled/vivin.png",   color: "#DB2777",
    bio: "Creative force running the whole show. From scripts to strategy, he's the spark that turned a YouTube channel into a studio.",
    fun: "Fueled by midnight edits and filter coffee", tags: ["Creative", "Execution"] },
  { name: "Srividhya B",        role: "Head of Finance & Ops",    image: "/team/styled/sri.png",     color: "#10B981",
    bio: "Runs the engine that powers the dream. Budgets, operations, and a hundred moving parts — all humming in perfect sync.",
    fun: "Balances spreadsheets and shoot schedules blindfolded", tags: ["Finance", "Ops"] },
  { name: "Gowtham S",          role: "Marketing Champion",       image: "/team/styled/gowtham.png", color: "#F97316",
    bio: "Gets our stories in front of the audiences they deserve. Growth strategy by day, thumbnail perfectionist by night.",
    fun: "Knows the algorithm better than it knows itself", tags: ["Marketing", "Growth"] },
  // Row 2
  { name: "Oliviya Selvaraj",   role: "Content Creator & Brand Host", image: "/teams%20pic/oliviya.png", color: "#F43F5E",
    bio: "The face and voice that makes brands feel human. Camera-ready, always on, never off-script.",
    fun: "Never needs a second take", tags: ["Content", "On-Camera"] },
  { name: "Priyadharshini",     role: "Marketing Associate",      image: "/teams%20pic/Priya.png",   color: "#F59E0B",
    bio: "Turns a blank page into a poster that stops the scroll. Design instinct, AI toolkit, sharp eye.",
    fun: "Has a Figma tab open before the coffee's poured", tags: ["Design", "Marketing"] },
  { name: "Megha Balakrishnan", role: "WordPress AI Web Creator", image: "/team/styled/megha.png",   color: "#2563EB",
    bio: "Builds AI-powered websites that bring our stories online. Design sense meets machine speed, and the web keeps up.",
    fun: "Ships sites faster than the coffee gets cold", tags: ["Web", "AI"] },
  { name: "Godson Azariah",     role: "AI Web Developer",         image: "/teams%20pic/godson.png",  color: "#0891B2",
    bio: "Builds the websites that carry every story. Self-taught, fast-shipping, quietly essential.",
    fun: "Ships a feature between two cups of chai", tags: ["Web", "Dev"] },
  { name: "Jeevan Shreyas",     role: "Finance Enabler",          image: "/team/styled/jeevan.png",  color: "#C026D3",
    bio: "Keeps the numbers honest so the stories can be bold. Clean books, clear dashboards, zero drama at month-end.",
    fun: "Finds plot holes in budgets, not scripts", tags: ["Finance", "Analytics"] },
  { name: "Purnimma Ravi",      role: "People Builder",           image: "/team/styled/purnima.png", color: "#8B5CF6",
    bio: "Grows people the way others grow companies. Culture, care, and the occasional perfectly-timed intervention snack.",
    fun: "Remembers everyone's chai order by heart", tags: ["People", "Culture"] },
];

const clients = [
  { name: "Hael", src: "/logos/loglos/hael.png" },
  { name: "Prodeify", src: "/logos/loglos/Prodeify-logo-final-768x280-1.png" },
  { name: "Piqual", src: "/logos/loglos/piqual.png" },
  { name: "Aventei", src: "/logos/loglos/aventei.png" },
  { name: "Talentou", src: "/logos/loglos/cropped-Talentou-3.png" },
  { name: "Nuivio", src: "/logos/loglos/Nuivio.png" },
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
      whileHover={{ rotate: 0, y: -14, scale: 1.05, zIndex: 30,
        boxShadow: "0 32px 64px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.12)" }}
      className={`group relative cursor-default select-none bg-white w-full max-w-[320px] mx-auto sm:max-w-none ${index % 4 === 1 || index % 4 === 3 ? "md:mt-7" : ""} ${index === 8 ? "lg:col-start-2" : ""} ${index === 9 ? "md:col-start-2 lg:col-start-3" : ""}`}
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {/* Film-notch top-right */}
        <div className="absolute top-2 right-2 flex gap-0.5 z-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-3 rounded-sm opacity-40" style={{ background: "#fff" }} />
          ))}
        </div>
      </div>

      {/* Polaroid caption — centered on mobile, left on larger screens */}
      <div className="px-3 pt-3 pb-3 text-center sm:text-left">
        {/* Name — big and bold */}
        <h4 className="font-black text-gray-900 leading-tight mb-1.5"
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
      <section
        className="ground-hero relative flex items-center justify-center overflow-hidden pb-16"
        style={{ paddingTop: NAV_HEIGHT + 72 }}
      >

        {/* Subtle line grid overlay,same as homepage */}
        <HeroGrid className="opacity-40 z-10" />
        <div className="bg-noise opacity-10 z-10" />

        {/* Decorative scribbles,same as homepage — desktop only */}
        <div className="hidden md:contents">
          <FloatingScribbles />
        </div>

        {/* Decorative Stars — desktop only */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
          <div className="absolute top-24 right-1/4 text-purple-400/30 text-4xl">✦</div>
          <div className="absolute top-44 left-1/3 text-purple-300/30 text-2xl">★</div>
          <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
          <div className="absolute bottom-1/4 left-1/2 text-purple-300/30 text-2xl">✦</div>
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl! md:text-5xl! lg:text-6xl! leading-[1.15] tracking-tight mb-4"
          >
            <span className="text-white font-bold drop-shadow-2xl block md:whitespace-nowrap">
              The studio where{" "}
              <span className="text-gradient-gold">
                imagination
              </span>
            </span>
            <span className="text-white font-bold drop-shadow-2xl block md:whitespace-nowrap">
              meets{" "}
              <span className="text-gradient-gold">
                intelligence
              </span>
            </span>
          </motion.h1>

        </div>
      </section>

      {/* =================================================================
          SECTION 3,OUR STORY & VALUES
          ================================================================= */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: "var(--color-surface-alt)" }}>
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
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
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
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-purple-300/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-300/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left — Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-[1.15] mb-5">
                Our{" "}
                <span className="text-gradient">
                  Story
                </span>
              </h2>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed font-sans mb-4">
                Caimue started with a simple belief: great stories can come from
                anywhere. We began on YouTube, producing original Malayalam and Tamil short films —
                written, cast, and directed in-house — and grew past 2 million views one honest
                story at a time.
              </p>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed font-sans mb-4">
                Along the way we discovered something bigger than films: people. More than 25
                writers, directors, and actors earned their first real credits with us, and our
                channels became homes for regional stories and founder journeys told with
                cinematic craft.
              </p>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed font-sans">
                Today that same craft powers a video-first B2B marketing agency — corporate videos,
                LinkedIn media campaigns, and marketing websites built with the same speed and soul.
                Our short films and features stay part of the story too, a proving ground for the
                talent behind every brand we work with.
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
              <img
                src="/our%20story.png"
                alt="The Caimue crew on set — driven by passion, integrity, and performance"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[660px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 4,TEAM
          ================================================================= */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: "white" }}>
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
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
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
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200/10 rounded-full blur-[130px]" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-[1.05] mb-4">
              Meet the Caimue{" "}
              <span className="text-gradient">
                Crew
              </span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-xl mx-auto font-sans">
              A small, mighty team of builders, creators, and dreamers who refuse to play it safe.
            </p>
          </motion.div>

          {/* Polaroid grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-6 max-w-5xl mx-auto" style={{ paddingBottom: "28px" }}>
            {allTeam.map((person, i) => (
              <TeamCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6,LIFE AT CAIMUE
          ================================================================= */}
      <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden" style={{ backgroundColor: "var(--color-surface-sunk)" }}>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-[1.05] mb-4">
              We work hard.{" "}
              <span className="italic text-[var(--caimue-purple)] font-light">We celebrate harder.</span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-lg mx-auto font-sans">
              No rigid hierarchies, no pointless meetings, just good people, great coffee, and work that actually matters.
            </p>
          </motion.div>

          {/* Polaroid Cards — always one row of five */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 lg:gap-7 justify-items-center">
            {cultureCards.map((card, i) => (
              <motion.div
                key={card.caption}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${card.rotation} relative bg-white shadow-lg p-2.5 pb-3.5 w-full max-w-[220px] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:rotate-0 cursor-default ${i === 4 ? "col-span-2 sm:col-span-1 justify-self-center sm:justify-self-auto max-w-[170px] sm:max-w-[220px]" : ""}`}
              >
                {/* Tape strip */}
                <div
                  className="absolute -top-3 left-1/2 w-14 h-6 rounded-sm opacity-80 z-10"
                  style={{
                    background: card.tape,
                    transform: "translateX(-50%) rotate(-2deg)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  }}
                />
                <div className="aspect-square overflow-hidden mb-3 bg-purple-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.08]"
                  />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 leading-tight mb-1">
                  {card.caption}
                </p>
                <p className="text-center font-handwriting text-[13px] text-purple-500 leading-tight">
                  {card.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
