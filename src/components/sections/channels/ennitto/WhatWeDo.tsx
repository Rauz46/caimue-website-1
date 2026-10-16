"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clapperboard, MonitorPlay, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  accent: string;
  accentSoft: string;
};

const items: Item[] = [
  {
    icon: Clapperboard,
    title: "Original Short Films",
    body: "We produce original Malayalam short films with professional execution — from script and casting to the final cut.",
    image: "/logos/ennitto/Vishudha%20Sakshi.jpg",
    accent: "#7C3AED",
    accentSoft: "#EDE9FE",
  },
  {
    icon: MonitorPlay,
    title: "Built for OTT & Streaming",
    body: "Stories crafted to travel — from YouTube to theatrical and OTT releases, made to reach a growing audience.",
    image: "/logos/ennitto/Welcome%20Home.jpg",
    accent: "#8B2FC9",
    accentSoft: "#F3E8FF",
  },
  {
    icon: Sparkles,
    title: "Discovering New Talent",
    body: "We find and back new actors, writers, and directors across Kerala — bringing them together under one production.",
    image: "/logos/ennitto/ADS-369%20Part%201.jpg",
    accent: "#DB2777",
    accentSoft: "#FCE7F3",
  },
];

export function WhatWeDo() {
  return (
    <section
      className="relative py-[72px] md:py-[88px] overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #F5F0FF, #EDE7FF)" }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(139,47,201,0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 text-[#6D28D9] text-[13px] font-semibold tracking-wide mb-5">
            ✦ What we do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4C1D95] mb-4">
            A studio for regional stories.
          </h2>
          <p className="text-[#6B21A8] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Ennitto is our Malayalam short-film studio under Caimue — original
            stories, new talent, and a clear path from shorts to the big screen.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl bg-white overflow-hidden flex flex-col"
                style={{ boxShadow: "0 6px 24px rgba(75, 29, 149, 0.08)" }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div
                    className="absolute top-4 left-4 flex items-center justify-center rounded-xl"
                    style={{
                      background: item.accentSoft,
                      color: item.accent,
                      width: 44,
                      height: 44,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-[22px] font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <div
                    className="w-10 h-[3px] rounded-full mb-3"
                    style={{ background: item.accent, opacity: 0.5 }}
                  />
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
