"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WaveDivider, WaveDividerAlt } from "@/components/effects/WaveDivider";
import { CinematicBackground } from "@/components/effects/CinematicBackground";
import { FloatingShapes } from "@/components/effects/FloatingShapes";
import { FloatingScribbles } from "@/components/effects/FloatingScribbles";
import { VideoScrollStrip } from "@/components/ui/VideoScrollStrip";
import { SocialProofStrip } from "@/components/ui/SocialProofStrip";
import { HeroVisualFrame } from "@/components/ui/HeroVisualFrame";
import { HeroGrid } from "@/components/effects/HeroGrid";

// Video/Poster cards for the auto-scrolling marquee
const showcaseItems = [
  { id: 1, src: "/images/Hey!%20Sinamika%20Poster.jpg", title: "Hey Sinamika", type: "Short Film" },
  { id: 2, src: "/images/Hi%20papa.jpg", title: "Hi Papa", type: "Short Film" },
  { id: 3, src: "/images/Thiruchitrambalam.jpg", title: "Thiruchitrambalam", type: "FunShortz" },
  { id: 4, src: "/images/Meiyazhagan%20_%20illustration%20poster%20-%20Vishnu%20Narayanan.jpg", title: "Meiyazhagan", type: "TeqThots" },
  { id: 5, src: "/images/Odum%20Kuthira%20Chaadum%20Kuthira%20poster.jpg", title: "Odum Kuthira", type: "Short Film" },
  { id: 6, src: "/images/%23Atharvaa.jpg", title: "Atharvaa", type: "FunShortz" },
  { id: 7, src: "/images/A.jpg", title: "A", type: "TeqThots" },
  { id: 8, src: "/images/D.jpg", title: "D", type: "Short Film" },
];

// Platform cards with colors
const platforms = [
  {
    id: "teqthots",
    title: "TeqThots",
    tagline: "B2B Documentary",
    description: "Conversations that document how companies are built.",
    href: "/platforms/teqthots",
    color: "card-lime",
    image: "/images/Eye-Catching%20YouTube%20Thumbnail%20Designs.jpg",
  },
  {
    id: "funshortz",
    title: "FunShortz",
    tagline: "Tamil & Malayalam",
    description: "Short-form entertainment that resonates with regional audiences.",
    href: "/platforms/funshortz",
    color: "card-peach",
    image: "/images/%23Atharvaa.jpg",
  },
  {
    id: "short-films",
    title: "Short Films",
    tagline: "Quarterly Releases",
    description: "Original stories from emerging filmmakers, funded and produced professionally.",
    href: "/platforms/short-films",
    color: "card-purple",
    image: "/images/Meiyazhagan%20_%20illustration%20poster%20-%20Vishnu%20Narayanan.jpg",
  },
];

// Stats
const stats = [
  { number: "12+", label: "Short Films" },
  { number: "50+", label: "Reels Created" },
  { number: "2M+", label: "Views Generated" },
  { number: "25+", label: "Creators Supported" },
];

export default function Home() {
  return (
    <>
      <section className="min-h-[90vh] flex flex-col pt-32 relative overflow-hidden bg-[var(--caimue-purple)]">
        {/* Background Elements */}
        <HeroGrid />

        <div className="bg-noise" />
        <div className="bg-noise opacity-20" />
        {/* Gradients removed for cleaner solid purple look, or adjusted to be subtle light beams */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Editorial Scribbles */}
        <FloatingScribbles />

        <div className="container relative z-10 flex flex-col items-start md:items-center md:text-center mt-8 md:mt-16">

          {/* Social Proof Strip - Above Headline */}
          <SocialProofStrip />

          <h1 className="w-full mx-auto mb-6 relative flex flex-col items-center gap-2">
            <AnimatedText
              text="Built to run content"
              delay={0.2}
              className="leading-[1.05] tracking-tight text-white text-center block"
            />
            <div className="flex flex-wrap justify-center gap-x-2">
              <AnimatedText
                text="one studio,"
                delay={0.4}
                className="leading-[1.05] tracking-tight text-white text-center block"
              />
              <AnimatedText
                text="multiple brands."
                delay={0.6}
                className="leading-[1.05] tracking-tight text-[#fbbf24] text-center block md:whitespace-nowrap"
              />
            </div>
            {/* Hidden anchor for scribbles if needed */}
            <div className="absolute -right-8 top-0 w-4 h-4" id="headline-anchor" />
          </h1>

          {/* Subtext - Close to headline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-snug font-medium"
          >
            An AI-first production house operating end to end across digital formats and films in Tamil, Malayalam & English.
          </motion.p>

          {/* Single CTA Button - Purple Filled */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative z-30"
          >
            <MagneticButton href="/platforms" variant="secondary" className="bg-white text-[var(--caimue-purple)] hover:bg-white/90 border-none">
              View Our Work
            </MagneticButton>
          </motion.div>
        </div>

        {/* Wave divider at bottom of hero */}
        <WaveDividerAlt fillColor="var(--background)" />
      </section>

      {/* ==================== RECENT PRODUCTIONS STRIP ==================== */}
      <section className="relative py-8 overflow-hidden bg-[var(--background)] border-b border-[var(--card-border)]">
        <VideoScrollStrip />
      </section>

      {/* ==================== MARQUEE SHOWCASE ==================== */}



      {/* ==================== PLATFORMS SECTION (CENTERED) ==================== */}
      <section className="py-12 md:py-16 relative">
        <FloatingShapes />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="label mb-4 block">Our Platforms</span>
            <h2>Three Verticals. One Philosophy.</h2>
          </motion.div>

          {/* Centered card grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={platform.href}>
                  <div className={`card ${platform.color} w-[320px] md:w-[360px] p-6 cursor-pointer group`}>
                    {/* Tag row */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="tag">{platform.tagline}</span>
                      <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center ml-auto group-hover:bg-black/20 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-serif mb-2">
                      {platform.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm opacity-70 mb-6">
                      {platform.description}
                    </p>

                    {/* Image */}
                    <div className="relative h-[200px] rounded-[var(--border-radius)] overflow-hidden">
                      <Image
                        src={platform.image}
                        alt={platform.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Explore link */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm font-medium">Explore</span>
                      <motion.span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/10"
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <WaveDivider fillColor="var(--background-alt)" />
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-32 bg-[var(--background-alt)] relative overflow-hidden flex items-center min-h-[40vh]">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-serif font-bold text-[var(--accent)] mb-4 tracking-tighter">
                  {stat.number}
                </div>
                <p className="text-[var(--foreground-muted)] text-base font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <WaveDividerAlt fillColor="var(--background)" />
      </section>

      {/* ==================== WHAT MAKES US DIFFERENT ==================== */}
      <section className="section relative">
        <FloatingShapes />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block">What Makes Us Different</span>
              <h2 className="mb-8">
                Most production houses rely on bigger crews. We rely on better systems.
              </h2>
              <ul className="space-y-4">
                {[
                  "AI-powered planning and scheduling",
                  "Streamlined post-production pipelines",
                  "Data-informed creative decisions",
                  "Sustainable production at scale",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[var(--foreground-muted)]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Editorial Scribble Around Card */}
              <div className="absolute -inset-4 md:-inset-6 z-0 pointer-events-none">
                <svg className="w-full h-full text-[var(--accent)] opacity-60" viewBox="0 0 400 300" preserveAspectRatio="none" fill="none">
                  <path d="M10,10 C50,-10 350,-10 390,10 C410,50 410,250 390,290 C350,310 50,310 10,290 C-10,250 -10,50 10,10 Z" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="card p-8 relative z-10 bg-[var(--card-bg)] border-none shadow-xl">
                <blockquote className="text-2xl font-serif mb-6 italic text-[var(--foreground)] leading-relaxed">
                  "Creativity without structure burns out. Structure without creativity produces noise."
                </blockquote>
                <p className="text-[var(--foreground-muted)] font-medium">— The Caimue Philosophy</p>
              </div>
            </motion.div>
          </div>
        </div>

        <WaveDivider fillColor="#7c3aed" />
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 bg-[var(--caimue-purple)] relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6">
              Let's build something that lasts.
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Whether you're a filmmaker with a story, a brand seeking authentic content,
              or a creator looking for sustainable growth — we're interested.
            </p>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--caimue-purple)] font-medium rounded-full hover:bg-white/90 transition-all hover:shadow-lg"
            >
              Start a Conversation →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
