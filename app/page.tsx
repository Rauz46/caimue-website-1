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
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

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

// just test push by Madan .
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
      <section className="min-h-screen flex flex-col pt-32 pb-20 relative overflow-hidden">
        {/* Background Animation */}
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 z-0"
          firstColor="168, 85, 247"  // Purple-500
          secondColor="236, 72, 153" // Pink-500
          thirdColor="192, 38, 211"  // Fuchsia-600
          fourthColor="139, 92, 246" // Violet-500
          fifthColor="219, 39, 119"  // Pink-600
          pointerColor="219, 39, 119"
          gradientBackgroundStart="rgb(88, 28, 135)" // Deep Purple
          gradientBackgroundEnd="rgb(192, 38, 211)" // Fuchsia
        />

        {/* Background Elements */}
        <HeroGrid className="opacity-40 z-10" />
        <div className="bg-noise opacity-10 z-10" />

        {/* Decorative Stars and Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div className="absolute top-20 right-1/4 text-purple-400/30 text-4xl">✦</div>
          <div className="absolute top-40 left-1/3 text-purple-300/30 text-2xl">★</div>
          <div className="absolute bottom-1/3 right-1/3 text-purple-200/40 text-3xl">✧</div>
          <div className="absolute top-1/2 left-1/4 text-purple-400/20 text-xl">●</div>
          <div className="absolute bottom-1/4 left-1/2 text-purple-300/30 text-2xl">✦</div>
          <div className="absolute top-1/3 right-1/4 text-purple-200/30 text-xl">●</div>
        </div>

        {/* Editorial Scribbles */}
        <FloatingScribbles />

        <div className="container relative z-10 flex flex-col items-start md:items-center md:text-center mt-6 md:mt-24">

          {/* Social Proof Strip - Above Headline */}
          <SocialProofStrip />

          <h1 className="w-full mx-auto mb-6 relative flex flex-col items-center gap-2">
            <span className="leading-[1.1] tracking-tight text-white text-center block font-bold drop-shadow-lg max-w-6xl">
              <span className="md:whitespace-nowrap">Why does your brand still struggle</span><br className="hidden md:block" />
              <span className="md:whitespace-nowrap">to look cinematic while your</span><br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#FACC15] to-[#EAB308] md:whitespace-nowrap">competitors look viral?</span>
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

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-white/40 mb-12"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Video Carousel - Inside Hero with Portrait Orientation */}
          <div className="relative z-10 mt-auto mb-8">
            <VideoScrollStrip />
          </div>
        </div>

        {/* Wave divider at bottom of hero - moved outside container for full width */}
        <WaveDivider position="bottom" fillColor="#ffffff" className="z-20" />
      </section>

      {/* ==================== PLATFORMS SECTION (CENTERED) ==================== */}
      <section className="py-12 md:py-20 relative bg-white overflow-hidden">
        {/* The divider from hero already covers the top, so we can remove or keep this if it adds depth. 
            User said "it should not be straight line", so we need the wavy transition. */}

        {/* Background Effects */}
        <HeroGrid className="opacity-30" />
        <div className="absolute inset-0 bg-white/5 pointer-events-none" /> {/* Subtle overlay */}
        <FloatingShapes />
        <FloatingScribbles color="text-fuchsia-500/80" />

        <div className="container relative z-20">
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
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#be185d] relative overflow-hidden flex flex-col items-center">
        {/* Wave from Platforms */}
        <WaveDividerAlt position="top" fillColor="#ffffff" className="z-10" />

        {/* Background Effects */}
        <HeroGrid className="opacity-20" />
        <div className="bg-noise opacity-5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="label !text-white/60 mb-4 block">Our Impact</span>
            <h2 className="!text-white text-4xl md:text-5xl mb-6">Impact by the Numbers</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From independent creators to global brands, we've helped tell stories that resonate across every platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] shadow-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 tracking-tighter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-white/60 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT MAKES US DIFFERENT ==================== */}
      <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
        {/* Wave from Stats */}
        <WaveDivider position="top" fillColor="#be185d" className="z-10" />

        <div className="container relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label mb-4 block text-gray-400">Our Story</span>
              <h2 className="mb-8 text-gray-900 border-l-4 border-[var(--accent)] pl-6">
                Caimue exists to bring structure to storytelling.
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We operate as an AI-first production house that helps brands invest in content with confidence, while enabling creators to focus on craft.
                </p>
                <p>
                  From digital formats to films, we don’t just produce content — we run the engine behind it.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Subtle Editorial Scribble Around Card */}
              <div className="absolute -inset-4 md:-inset-6 z-0 pointer-events-none">
                <svg className="w-full h-full text-[var(--accent)] opacity-20" viewBox="0 0 400 300" preserveAspectRatio="none" fill="none">
                  <path d="M10,10 C50,-10 350,-10 390,10 C410,50 410,250 390,290 C350,310 50,310 10,290 C-10,250 -10,50 10,10 Z" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="card p-10 relative z-10 bg-white border border-gray-100 shadow-2xl rounded-[40px]">
                <blockquote className="text-2xl font-serif mb-6 italic text-gray-800 leading-relaxed">
                  "Creativity without structure burns out. Structure without creativity produces noise."
                </blockquote>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">— The Caimue Philosophy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#be185d] relative overflow-hidden">
        {/* Wave from Previous Section */}
        <WaveDividerAlt position="top" fillColor="#fafafa" className="z-10" />

        {/* Background Effects - Using animated grid for edge-to-edge coverage */}
        <HeroGrid className="opacity-20" />
        <FloatingScribbles color="text-fuchsia-400/30" />

        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="!text-white text-4xl md:text-7xl mb-8 tracking-tight font-bold drop-shadow-2xl">
              Let's build something that lasts.
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're a filmmaker with a story, a brand seeking authentic content,
              or a creator looking for sustainable growth — we're interested.
            </p>
            <Link
              href="/collaborate"
              className="inline-flex items-center gap-3 px-12 py-5 bg-[#DB2777] text-white font-bold text-lg rounded-full hover:bg-[#be185d] transition-all hover:shadow-[0_0_50px_rgba(219,39,119,0.5)] hover:-translate-y-1 active:scale-95 shadow-2xl"
            >
              Start a Conversation →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
