"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Hardcoded removed.

export default function HeroCarousel({ videos = [] }: { videos?: any[] }) {
  // Duplicate cards for infinite loop. Use API videos if available, otherwise fallback.
  const sourceCards =
    videos && videos.length > 0
      ? videos.slice(0, 6)
      : [
          { id: 1, videoId: "L8ib0Y4VKYU" },
          { id: 2, videoId: "Ua-pzrr4aUA" },
          { id: 3, videoId: "dBTFAIZDnAw" },
          { id: 4, videoId: "L8ib0Y4VKYU" },
          { id: 5, videoId: "Ua-pzrr4aUA" },
          { id: 6, videoId: "dBTFAIZDnAw" },
        ];

  const displayCards = [...sourceCards, ...sourceCards];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "2rem 0 3rem",
        position: "relative",
        perspective: "1200px",
        marginTop: "0",
      }}
    >
      <style>{`
                @media (max-width: 768px) {
                    .hero-carousel-wrapper { padding: 3rem 0 6rem !important; margin-top: -1rem !important; }
                    .hero-carousel-card { width: 160px !important; height: 260px !important; border-radius: 20px !important; }
                    .hero-carousel-squiggle { display: none !important; }
                    .hero-carousel-track { gap: 1rem !important; }
                }
            `}</style>
      {/* Arched Track */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          display: "flex",
          gap: "2.5rem",
          width: "fit-content",
          padding: "0 2rem",
          transformStyle: "preserve-3d",
        }}
      >
        {displayCards.map((card, idx) => {
          const rotation = idx % 2 === 0 ? 2 : -2;
          const yOffset = idx % 3 === 0 ? 15 : idx % 3 === 1 ? 0 : -15;

          return (
            <div
              key={`${card.id}-${idx}`}
              className="hero-carousel-card"
              style={{
                width: "230px",
                height: "380px",
                borderRadius: "32px",
                background: "#000",
                border: "1px solid rgba(255,255,255,0.15)",
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
                transform: `rotateZ(${rotation}deg) translateY(${yOffset}px)`,
                transition: "all 0.5s ease",
              }}
            >
              <iframe loading="lazy"
                src={`https://www.youtube-nocookie.com/embed/${card.videoId}?autoplay=1&mute=1&loop=1&playlist=${card.videoId}&controls=0&modestbranding=1&playsinline=1`}
                style={{
                  position: "absolute",
                  top: "-10%",
                  left: "-50%",
                  width: "200%",
                  height: "120%",
                  border: "none",
                  pointerEvents: "none",
                }}
                title={`Short ${card.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />

              {/* Protective Glass/Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)`,
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Card Content Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.2)",
                    marginBottom: "0.5rem",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Play size={14} className="text-white fill-white" />
                </div>
                <div
                  style={{
                    width: "60%",
                    height: 6,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.3)",
                    marginBottom: "0.4rem",
                  }}
                />
                <div
                  style={{
                    width: "40%",
                    height: 6,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Stylized Floating Squiggle Text (similar to reference) */}
      <div
        className="hero-carousel-squiggle"
        style={{
          position: "absolute",
          top: "15%",
          right: "12%",
          transform: "rotate(12deg)",
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "1.5rem",
          color: "#c4b5fd",
          opacity: 0.8,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div style={{ marginBottom: "-0.5rem" }}>Elevate</div>
        <div>your brand</div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <path
            d="M5 5C5 5 15 25 35 35"
            stroke="#c4b5fd"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
