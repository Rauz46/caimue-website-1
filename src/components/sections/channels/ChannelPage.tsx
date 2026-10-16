"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { HeroGrid } from "@/components/effects/HeroGrid";

export interface ChannelGalleryItem {
  src: string;
  label?: string;
}

export interface ChannelPageProps {
  logo: string;
  name: string;
  titleLines: [string, string];
  description: string;
  longDescription?: string;
  accentFrom: string;
  accentTo: string;
  aspect?: string; // e.g. "2 / 3" for posters, "16 / 9" for thumbnails
  gallery: ChannelGalleryItem[];
  cta: { text: string; href: string; external?: boolean };
}

export function ChannelPage({
  logo,
  name,
  titleLines,
  description,
  longDescription,
  accentFrom,
  accentTo,
  aspect = "3 / 4",
  gallery,
  cta,
}: ChannelPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center pt-24 relative overflow-hidden">
        <HeroGrid />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `linear-gradient(135deg, ${accentFrom} 0%, transparent 55%)`,
          }}
        />

        <div className="container text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={name}
              loading="lazy"
              decoding="async"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </motion.div>

          <h1 className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-x-4">
            <AnimatedText
              text={titleLines[0]}
              delay={0.4}
              className="text-[var(--foreground)]"
            />
            <AnimatedText
              text={titleLines[1]}
              delay={0.8}
              className="text-[var(--caimue-purple)]"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-[var(--foreground-muted)] text-xl max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container">
          {longDescription && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[var(--foreground-muted)] text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16"
            >
              {longDescription}
            </motion.p>
          )}

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="relative rounded-2xl overflow-hidden group"
                style={{ aspectRatio: aspect }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label || name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.label && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-bold drop-shadow leading-tight">
                      {item.label}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
          >
            <a
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3"
              style={{
                background: `linear-gradient(135deg, ${accentTo}, ${accentFrom})`,
              }}
            >
              {cta.text}
              <ArrowRight size={18} />
            </a>
            <Link
              href="/#channels"
              className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-[var(--caimue-purple)] font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              All channels
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
