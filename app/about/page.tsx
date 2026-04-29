"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Film, Users, Briefcase, Play, Eye, Globe } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroGrid } from "@/components/effects/HeroGrid";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";

// ============================================
// DATA ARRAYS
// ============================================

const allTeam = [
  { name: "Joseph Olassa",       role: "Board Chair",              image: "/teams%20pic/Joseph.png",  color: "#7C3AED", bio: "The visionary who keeps us reaching further.",             tags: ["Strategy", "Vision"] },
  { name: "Vivek Sathiamoorthy", role: "Chief of Startup Success", image: "/teams%20pic/Vivek.png",   color: "#F97316", bio: "Makes founders believe their story can change everything.", tags: ["Storytelling", "Startups"] },
  { name: "Vivin",               role: "Startup Champion",         image: "/team/vivin.png",           color: "#DB2777", bio: "Creative force running the whole show.",                    tags: ["Creative", "Execution"] },
  { name: "Anton Joseph Ciby",   role: "Chief of Revenue",         image: "/teams%20pic/anton.png",   color: "#2563EB", bio: "Turns creativity into revenue without losing the soul.",    tags: ["Revenue", "Growth"] },
  { name: "Srividhya B",         role: "Head of Finance & Ops",    image: "/teams%20pic/sri.png",     color: "#10B981", bio: "Runs the engine that powers the dream.",                    tags: ["Finance", "Ops"] },
  { name: "Sanjay R",            role: "Video Editor",             image: "/team/sanjay.png",         color: "#06B6D4", bio: "Sees stories in raw footage nobody else can.",              tags: ["Video", "Editing"] },
  { name: "Disha Napoleon",      role: "Finance Enabler",          image: "/teams%20pic/disha.png",   color: "#C026D3", bio: "Numbers person with a creative heart.",                     tags: ["Finance", "Analytics"] },
  { name: "Purnimma Ravi",       role: "People Builder",           image: "/teams%20pic/purnima.png", color: "#8B5CF6", bio: "Grows people the way others grow companies.",               tags: ["People", "Culture"] },
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

function TeamCard({ person, index }: { person: typeof allTeam[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -10, boxShadow: `0 28px 60px -10px ${person.color}50` }}
      className="relative rounded-[24px] overflow-hidden flex flex-col cursor-default select-none bg-white"
      style={{
        height: "360px",
        boxShadow: `0 4px 24px -4px ${person.color}25`,
        border: `1.5px solid ${person.color}20`,
      }}
    >
      {/* Left color accent strip */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] z-20" style={{ background: person.color }} />

      {/* ── Photo section — top 58% ── */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: "58%" }}>
        {/* Colored bg behind photo */}
        <div className="absolute inset-0" style={{ backgroundColor: `${person.color}30` }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.image}
          alt={person.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Dark-to-transparent gradient at bottom of photo */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, transparent 72%)" }}
        />

        {/* Animated <<< top-right */}
        <motion.span
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute top-3 right-3 text-[11px] font-mono font-bold text-white/80 z-10"
        >{"<<<"}</motion.span>

        {/* Role badge — bottom-left of photo, overlaid on gradient */}
        <div className="absolute bottom-3 left-4 z-10">
          <span
            className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg"
            style={{ background: person.color, color: "#fff", boxShadow: `0 4px 12px ${person.color}60` }}
          >
            {person.role}
          </span>
        </div>
      </div>

      {/* ── Info section — bottom 38% ── */}
      <div className="relative flex-1 px-5 pt-4 pb-4 flex flex-col justify-between overflow-hidden">
        {/* Faint watermark behind text */}
        <span
          className="absolute -top-3 right-2 font-black uppercase pointer-events-none select-none leading-none"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            color: `${person.color}09`,
            letterSpacing: "-0.04em",
          }}
        >
          {person.role.split(" ")[0]}
        </span>

        <div className="relative z-10">
          {/* Name */}
          <h4
            className="font-black font-serif leading-[1.0] mb-1 text-gray-900"
            style={{ fontSize: "clamp(1.1rem, 1.75vw, 1.4rem)", letterSpacing: "-0.025em" }}
          >
            {person.name}
          </h4>

          {/* Thin color rule under name */}
          <div className="mb-2 h-[2px] w-8 rounded-full" style={{ background: person.color }} />

          {/* Bio quote */}
          <p
            className="text-[11.5px] leading-snug font-sans italic line-clamp-2 mb-2.5"
            style={{ color: "#6b7280" }}
          >
            <span className="text-[18px] font-serif leading-none mr-0.5 align-bottom" style={{ color: person.color }}>"</span>
            {person.bio}
            <span className="text-[18px] font-serif leading-none ml-0.5 align-bottom" style={{ color: person.color }}>"</span>
          </p>

          {/* Skill line */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] font-sans" style={{ color: `${person.color}99` }}>
            {person.tags.join(" · ")}
          </p>
        </div>

        {/* Bottom gradient accent line */}
        <div
          className="h-[2px] rounded-full"
          style={{ background: `linear-gradient(to right, ${person.color}, ${person.color}20)` }}
        />
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
          containerClassName="absolute inset-0 z-0"
          firstColor="139, 92, 246"
          secondColor="147, 51, 234"
          thirdColor="124, 58, 237"
          fourthColor="168, 85, 247"
          fifthColor="192, 132, 252"
          pointerColor="139, 92, 246"
          gradientBackgroundStart="rgb(76, 29, 149)"
          gradientBackgroundEnd="rgb(88, 28, 135)"
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
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-1.5 rounded-full border border-white/20 bg-white/5 text-purple-200 text-xs font-bold tracking-[0.2em] uppercase mb-5 font-sans"
          >
            About Caimue
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-4 font-serif"
          >
            <span className="text-white font-bold drop-shadow-2xl block">
              The studio where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308]">
                imagination
              </span>
            </span>
            <span className="text-white font-bold drop-shadow-2xl block">
              meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308]">
                intelligence
              </span>
            </span>
          </motion.h1>

        </div>
      </section>

      {/* =================================================================
          SECTION 3,WHAT WE DO
          ================================================================= */}
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: "#f3eaff" }}>
        {/* Cross-hatch lines texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.07,
            backgroundImage:
              "linear-gradient(45deg, rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
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

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="text-[var(--caimue-purple)] text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-sans">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] leading-[1.15] font-serif">
              Two channels, one{" "}
              <span className="italic bg-gradient-to-r from-purple-600 to-pink-500" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: 1.3, paddingBottom: "0.1em", paddingRight: "0.15em" }}>
                creative engine
              </span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ---- Ennitto Card ---- */}
            <motion.a
              href="https://ennitto.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[2rem] overflow-hidden border border-purple-200/60 bg-white shadow-xl shadow-purple-200/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-300/30 cursor-pointer"
            >
              {/* Content area */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white text-xs font-bold font-sans shadow-md">01</span>
                  <span className="text-purple-500 text-xs font-bold tracking-[0.2em] uppercase font-sans">Channel</span>
                </div>
                {/* Logo */}
                <div className="mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/ennitto%20logo.png" alt="Ennitto" className="w-[130px] md:w-[170px] h-auto object-contain" />
                </div>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-3 font-sans">
                  Short films with soul. Ennitto is our studio for culturally rooted narratives,
                  stories that honour regional identity while reaching for a global audience.
                  Every frame is a love letter to the worlds we come from.
                </p>

                {/* Compact stat strip */}
                <div className="flex items-center gap-4 mb-3 py-2 px-3 rounded-2xl bg-purple-50 border border-purple-100">
                  {[
                    { value: "2.5M+", label: "Views", icon: <Eye size={11} className="text-purple-400" /> },
                    { value: "17+", label: "Films", icon: <Film size={11} className="text-purple-400" /> },
                    { value: "40+", label: "Artists", icon: <Users size={11} className="text-purple-400" /> },
                  ].map(({ value, label, icon }, i) => (
                    <div key={label} className="flex items-center gap-3">
                      {i > 0 && <div className="w-px h-5 bg-purple-200" />}
                      <div className="flex items-center gap-1.5">
                        {icon}
                        <span className="text-sm font-black text-purple-600">{value}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Language tags */}
                <div className="flex gap-2 mb-4">
                  {["Malayalam", "Tamil", "English"].map((lang) => (
                    <span key={lang} className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-600 border border-purple-100">
                      {lang}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-purple-600 font-bold font-sans group-hover:gap-3 transition-all">
                  Explore Ennitto
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>

            {/* ---- TeqThots Card ---- */}
            <motion.a
              href="https://teqthots.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group relative rounded-[2rem] overflow-hidden border border-pink-200/60 bg-white shadow-xl shadow-pink-200/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-300/30 cursor-pointer"
            >
              {/* Content area */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 text-white text-xs font-bold font-sans shadow-md">02</span>
                  <span className="text-pink-500 text-xs font-bold tracking-[0.2em] uppercase font-sans">Channel</span>
                </div>
                {/* Logo */}
                <div className="mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/teqthots%20updated%20logo%20final%20lasttt.png" alt="TeqThots" className="w-[130px] md:w-[170px] h-auto object-contain" />
                </div>
                <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-3 font-sans">
                  A platform for tech thinkers and visual explainers. TeqThots breaks down
                  complex ideas into cinematic, shareable stories, making technology
                  approachable, beautiful, and impossible to scroll past.
                </p>

                {/* Compact stat strip */}
                <div className="flex items-center gap-4 mb-4 py-2 px-3 rounded-2xl bg-pink-50 border border-pink-100">
                  {[
                    { value: "1M+", label: "Reach", icon: <Globe size={11} className="text-pink-400" /> },
                    { value: "10+", label: "Videos", icon: <Play size={11} className="text-pink-400" /> },
                    { value: "12+", label: "Brands", icon: <Briefcase size={11} className="text-pink-400" /> },
                  ].map(({ value, label, icon }, i) => (
                    <div key={label} className="flex items-center gap-3">
                      {i > 0 && <div className="w-px h-5 bg-pink-200" />}
                      <div className="flex items-center gap-1.5">
                        {icon}
                        <span className="text-sm font-black text-pink-600">{value}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-pink-600 font-bold font-sans group-hover:gap-3 transition-all">
                  Explore TeqThots
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 4,TEAM
          ================================================================= */}
      <section className="relative py-12 md:py-16 bg-white overflow-hidden">
        {/* Cross-hatch texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(45deg, rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(124,58,237,0.3) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
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
            className="text-center mb-8"
          >
            <span className="text-[var(--caimue-purple)] text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-sans">
              The People
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] leading-[1.05] mb-4 font-serif">
              Meet the Caimue{" "}
              <span className="italic bg-gradient-to-r from-purple-600 to-pink-500" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "inline-block", lineHeight: 1.3, paddingBottom: "0.1em", paddingRight: "0.15em" }}>
                crew
              </span>
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-xl mx-auto font-sans">
              A small, mighty team of builders, creators, and dreamers who refuse to play it safe.
            </p>
          </motion.div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {allTeam.map((person, i) => (
              <TeamCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6,LIFE AT CAIMUE
          ================================================================= */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #fdf4ff 50%, #f0f4ff 100%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[var(--caimue-purple)] text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-sans">
              Culture
            </span>
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
