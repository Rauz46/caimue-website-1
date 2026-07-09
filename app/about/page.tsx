"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// ============================================
// DATA ARRAYS
// ============================================

const allTeam = [
  // Row 1
  { name: "Joseph Olassa",      role: "Board Chair",             image: "/teams%20pic/Joseph.png",  color: "#7C3AED", bio: "The visionary who keeps us reaching further.",           tags: ["Strategy", "Vision"] },
  { name: "Vivin Raj",           role: "Startup Champion",        image: "/team/vivin.png",           color: "#DB2777", bio: "Creative force running the whole show.",                  tags: ["Creative", "Execution"] },
  { name: "Srividhya B",        role: "Head of Finance & Ops",   image: "/teams%20pic/sri.png",     color: "#10B981", bio: "Runs the engine that powers the dream.",                  tags: ["Finance", "Ops"] },
  { name: "Gowtham S",          role: "Marketing Champion",      image: "/teams%20pic/gowtham.png", color: "#F97316", bio: "Gets our stories in front of the audiences they deserve.", tags: ["Marketing", "Growth"] },
  // Row 2
  { name: "Sanjay R",           role: "Video Editor",            image: "/team/sanjay.png",         color: "#06B6D4", bio: "Sees stories in raw footage nobody else can.",            tags: ["Video", "Editing"] },
  { name: "Megha Balakrishnan", role: "WordPress AI Web Creator", image: "/teams%20pic/megha.png",   color: "#2563EB", bio: "Builds AI-powered websites that bring our stories online.", tags: ["Web", "AI"] },
  { name: "Jeevan Shreyas",     role: "Finance Enabler",         image: "/teams%20pic/jeevan.png",  color: "#C026D3", bio: "Keeps the numbers honest so the stories can be bold.",     tags: ["Finance", "Analytics"] },
  { name: "Purnimma Ravi",      role: "People Builder",          image: "/teams%20pic/purnima.png", color: "#8B5CF6", bio: "Grows people the way others grow companies.",              tags: ["People", "Culture"] },
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
  { emoji: "🎬", caption: "Craft over noise", rotation: "-rotate-[6deg]" },
  { emoji: "🤖", caption: "AI with soul", rotation: "rotate-[4deg]" },
  { emoji: "☕", caption: "Coffee-fueled chaos", rotation: "-rotate-[3deg]" },
  { emoji: "🌍", caption: "Remote, everywhere", rotation: "rotate-[5deg]" },
  { emoji: "🎉", caption: "Work hard, laugh harder", rotation: "-rotate-[4deg]" },
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
      className="relative cursor-default select-none bg-white"
      style={{
        padding: "10px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.07)",
        marginTop: index % 4 === 1 || index % 4 === 3 ? "28px" : "0px",
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
      <div className="relative overflow-hidden" style={{ height: "245px" }}>
        <div className="absolute inset-0" style={{ backgroundColor: `${person.color}25` }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Film-notch top-right */}
        <div className="absolute top-2 right-2 flex gap-0.5 z-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-3 rounded-sm opacity-40" style={{ background: "#fff" }} />
          ))}
        </div>
      </div>

      {/* Polaroid caption — white area */}
      <div className="px-3 pt-3.5 pb-3">
        {/* Name */}
        <h4 className="font-serif font-bold text-gray-900 leading-tight mb-1.5"
          style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)" }}>
          {person.name}
        </h4>
        {/* Role badge */}
        <span
          className="inline-block text-[9px] font-black uppercase tracking-[0.18em] px-3 py-1 mb-2.5 text-white rounded-sm"
          style={{ background: person.color, boxShadow: `0 2px 8px ${person.color}50` }}
        >
          {person.role}
        </span>
        {/* Bio */}
        <p className="text-[12px] leading-relaxed font-sans italic text-gray-500 mb-2 line-clamp-2">
          "{person.bio}"
        </p>
        {/* Tags */}
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] font-sans"
          style={{ color: `${person.color}cc` }}>
          {person.tags.join(" · ")}
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
      <section className="relative flex items-center justify-center pt-24 pb-4 md:pt-30 md:pb-6 overflow-hidden">
        {/* Animated gradient background,same as homepage */}
        <BackgroundGradientAnimation
          autoMove
          maskCenter
          containerClassName="absolute inset-0 z-0 h-full"
          firstColor="124, 58, 237"  // Violet-600
          secondColor="109, 40, 217" // Violet-700
          thirdColor="91, 33, 182"   // Violet-800
          fourthColor="126, 34, 206" // Purple-700
          fifthColor="107, 33, 168"  // Purple-800
          pointerColor="124, 58, 237" // Violet-600
          gradientBackgroundStart="rgb(46, 16, 101)" // Deep violet
          gradientBackgroundEnd="rgb(59, 7, 100)"    // Deep purple
        />

        {/* Subtle line grid overlay,same as homepage */}
        <HeroGrid className="opacity-40 z-10" />
        <div className="bg-noise opacity-10 z-10" />

        {/* Decorative scribbles,same as homepage */}
        <FloatingScribbles />

        {/* Decorative Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
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
            className="text-4xl! md:text-5xl! lg:text-6xl! leading-[1.15] tracking-tight mb-4 font-serif"
          >
            <span className="text-white font-bold drop-shadow-2xl block md:whitespace-nowrap">
              The studio where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308]">
                imagination
              </span>
            </span>
            <span className="text-white font-bold drop-shadow-2xl block md:whitespace-nowrap">
              meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308]">
                intelligence
              </span>
            </span>
          </motion.h1>

        </div>
      </section>

      {/* =================================================================
          SECTION 3,OUR STORY & VALUES
          ================================================================= */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: "#f3eaff" }}>
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

        {/* Floating handwritten doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-[1.15] mb-5 font-serif">
                Our{" "}
                <span className="italic bg-gradient-to-r from-purple-600 to-pink-500" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: 1.3, paddingBottom: "0.1em", paddingRight: "0.15em" }}>
                  Story
                </span>
              </h2>
              <p className="text-[var(--foreground-muted)] text-base md:text-lg leading-relaxed font-sans mb-4">
                Caimue Film Studios started with a simple belief: great stories can come from
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
                Today we blend traditional filmmaking with AI-powered production — moving faster
                without losing soul. Every short film, documentary, and brand story is a step
                toward one destination: feature films rooted in our culture, watched by the world.
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

        {/* Floating doodles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-[1.05] mb-4 font-serif">
              Meet the Caimue{" "}
              <span className="italic bg-gradient-to-r from-purple-600 to-pink-500" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: 1.3, paddingBottom: "0.1em", paddingRight: "0.15em" }}>
                Crew
              </span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-xl mx-auto font-sans">
              A small, mighty team of builders, creators, and dreamers who refuse to play it safe.
            </p>
          </motion.div>

          {/* Polaroid grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8" style={{ paddingBottom: "28px" }}>
            {allTeam.map((person, i) => (
              <TeamCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6,LIFE AT CAIMUE
          ================================================================= */}
      <section className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #fdf4ff 50%, #f0f4ff 100%)" }}>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-[1.05] mb-4 font-serif">
              We work hard.{" "}
              <span className="italic text-[var(--caimue-purple)] font-light">We laugh harder.</span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-lg mx-auto font-sans">
              No rigid hierarchies, no pointless meetings, just good people, great coffee, and work that actually matters.
            </p>
          </motion.div>

          {/* Polaroid Cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {cultureCards.map((card, i) => (
              <motion.div
                key={card.caption}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${card.rotation} bg-white rounded-2xl shadow-lg border border-gray-100 p-4 w-40 md:w-48 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:rotate-0 cursor-default`}
              >
                <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-300/60 to-pink-300/60 flex items-center justify-center mb-3">
                  <span className="text-5xl md:text-6xl">{card.emoji}</span>
                </div>
                <p className="text-center text-sm italic text-[var(--foreground-muted)] font-medium font-serif">
                  {card.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
