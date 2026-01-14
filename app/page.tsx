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
    tagline: "Product & Startup",
    description: "Product, startup, and brand storytelling through interviews, formats, and documentaries.",
    href: "/platforms/teqthots",
    color: "card-lime",
    image: "/images/Eye-Catching%20YouTube%20Thumbnail%20Designs.jpg",
  },
  {
    id: "short-films-tamil",
    title: "Short Films - Tamil",
    tagline: "Digital Narratives",
    description: "Original short films and digital narratives built with independent creators.",
    href: "/platforms/short-films",
    color: "card-peach",
    image: "/images/%23Atharvaa.jpg",
  },
  {
    id: "short-films-malayalam",
    title: "Short Films - Malayalam",
    tagline: "Regional Stories",
    description: "Regional storytelling with a long-term vision toward cinema and OTT",
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
      <section className="min-h-screen flex flex-col pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#be185d]">
        {/* Background Elements */}
        <HeroGrid />
        <div className="bg-noise opacity-10" />

        {/* Glossy Glass Effect - Concentric Circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Concentric circle gradients for glass effect */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-500/20 via-purple-600/10 to-transparent blur-[2px]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-purple-400/15 via-transparent to-transparent blur-[1px]" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-fuchsia-400/20 to-transparent" />

          {/* Organic Blob Shapes - Darker tones */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-indigo-700/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[80px]" />

          {/* Decorative Stars and Sparkles */}
          <div className="absolute top-20 right-1/4 text-white/40 text-4xl">✦</div>
          <div className="absolute top-40 left-1/3 text-white/30 text-2xl">★</div>
          <div className="absolute bottom-1/3 right-1/3 text-purple-200/50 text-3xl">✧</div>
          <div className="absolute top-1/2 left-1/4 text-white/20 text-xl">●</div>
          <div className="absolute bottom-1/4 left-1/2 text-white/30 text-2xl">✦</div>
          <div className="absolute top-1/3 right-1/4 text-purple-200/40 text-xl">●</div>
        </div>

        {/* Editorial Scribbles */}
        <FloatingScribbles />

        <div className="container relative z-10 flex flex-col items-start md:items-center md:text-center mt-8 md:mt-32">

          {/* Social Proof Strip - Above Headline */}
          <SocialProofStrip />

          <h1 className="w-full mx-auto mb-6 relative flex flex-col items-center gap-2">
            <span className="leading-[1.05] tracking-tight text-white text-center block font-bold drop-shadow-lg">
              We build and operate <span className="text-[#FACC15]">content ecosystems</span> for brands and creators.
            </span>
            {/* Hidden anchor for scribbles if needed */}
            <div className="absolute -right-8 top-0 w-4 h-4" id="headline-anchor" />
          </h1>

          {/* Subtext - Close to headline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-10 leading-snug font-medium drop-shadow"
          >
            An AI-first production house collaborating with brands and creators to produce digital formats, short-form content, and films across Tamil and Malayalam.
          </motion.p>

          {/* Single CTA Button - Pink */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative z-30 mb-16"
          >
            <MagneticButton href="/collaborate" variant="primary" className="bg-[#DB2777] text-white hover:bg-[#be185d] border-none shadow-xl shadow-pink-500/30">
              Collaborate with Us
            </MagneticButton>
          </motion.div>

          {/* Video Carousel - Inside Hero with Portrait Orientation */}
          <div className="relative z-10 mt-auto mb-8">
            <VideoScrollStrip />
          </div>

          {/* Wave divider at bottom of hero */}
        </div>

        {/* Wave divider at bottom of hero */}
        <WaveDividerAlt fillColor="#fceef5" />
      </section>

      {/* ==================== MARQUEE SHOWCASE ==================== */}



      {/* ==================== PLATFORMS SECTION (CENTERED) ==================== */}
      <section className="py-24 md:py-32 relative bg-[#fceef5] overflow-hidden">
        {/* Background Effects */}
        <HeroGrid />
        <div className="absolute inset-0 bg-white/5 pointer-events-none" /> {/* Subtle overlay */}
        <FloatingShapes />
        <FloatingScribbles />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label mb-4 block">Our Platforms</span>
            <h2 className="text-[var(--foreground)]">Three Verticals. One Philosophy.</h2>
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
                  <div className={`card ${platform.color} w-[320px] md:w-[360px] p-6 cursor-pointer group relative shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-3 transition-all duration-500 border-white/20`}>
                    {/* Ambient Glow behind card */}
                    <div className="absolute -inset-4 bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10" />
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
