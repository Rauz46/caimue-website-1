"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Landscape card config — wider than tall, fanned arc
const CARD_CONFIG = [
  { rotate: -18, offsetY: 32 },
  { rotate: -11, offsetY: 14 },
  { rotate: -5, offsetY: 4 },
  { rotate: 0, offsetY: -6 },  // center card, most upright
  { rotate: 5, offsetY: 4 },
  { rotate: 11, offsetY: 14 },
  { rotate: 18, offsetY: 32 },
];

const FLOAT_DURATIONS = [5.2, 6.4, 5.8, 7.0, 5.5, 6.1, 5.9];
const FLOAT_DELAYS = [0, 0.9, 0.4, 1.5, 0.7, 0.2, 1.1];

export default function MovieCardsFan({ images = [] }: { images?: string[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  // Pad / trim to exactly 7 cards
  const cardImages = Array.from({ length: 7 }, (_, i) => images[i] || null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - rect.width / 2) / (rect.width / 2),
        y: (e.clientY - rect.top - rect.height / 2) / (rect.height / 2),
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      targetRef.current.x = lerp(targetRef.current.x, mouseRef.current.x, 0.06);
      targetRef.current.y = lerp(targetRef.current.y, mouseRef.current.y, 0.06);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const cfg = CARD_CONFIG[i];
        const depth = 0.4 + Math.abs(cfg.rotate) / 60;
        const px = targetRef.current.x * 12 * depth;
        const py = targetRef.current.y * 8 * depth;
        const pr = targetRef.current.x * 2 * depth;

        card.style.setProperty("--px", `${px}px`);
        card.style.setProperty("--py", `${py}px`);
        card.style.setProperty("--pr", `${cfg.rotate + pr}deg`);
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div ref={stageRef} className="fan-stage">
      {/* Card row */}
      <div className="fan-row">
        {cardImages.map((src, i) => {
          const cfg = CARD_CONFIG[i];
          return (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="fan-card"
              style={{
                ["--base-rotate" as string]: `${cfg.rotate}deg`,
                ["--base-offsetY" as string]: `${cfg.offsetY}px`,
                ["--float-duration" as string]: `${FLOAT_DURATIONS[i]}s`,
                ["--float-delay" as string]: `${FLOAT_DELAYS[i]}s`,
                ["--pr" as string]: `${cfg.rotate}deg`,
                ["--px" as string]: "0px",
                ["--py" as string]: "0px",
                zIndex: i === 3 ? 10 : Math.abs(i - 3) <= 1 ? 8 : 5,
              }}
            >
              {src ? (
                <Image
                  src={src}
                  alt={`Movie ${i + 1}`}
                  fill
                  sizes="240px"
                  className="fan-img"
                  draggable={false}
                />
              ) : (
                <div className="fan-placeholder" />
              )}
              <div className="fan-shimmer" />
            </div>
          );
        })}
      </div>

      <style>{`
        /* ── Stage ── */
        .fan-stage {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 32px;
          /* Tall enough for landscape cards + float travel */
          height: 220px;
          overflow: visible;
        }

        /* ── Card row ── */
        .fan-row {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          position: relative;
          height: 100%;
          width: 100%;
        }

        /* ── Individual card — LANDSCAPE (wider than tall) ── */
        .fan-card {
          position: relative;
          /* Overlap cards */
          margin-left: -28px;
          flex-shrink: 0;
          /* 16:9-ish landscape ratio */
          width: 230px;
          height: 145px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.55),
            0  4px 16px rgba(0, 0, 0, 0.35);
          cursor: pointer;

          transform:
            rotate(var(--pr))
            translateX(var(--px))
            translateY(calc(var(--base-offsetY) + var(--py)));

          transition: box-shadow 0.35s ease;

          animation:
            fanFloat var(--float-duration) ease-in-out var(--float-delay) infinite,
            cardEntry 0.65s ease-out calc(var(--float-delay) * 0.6) both;

          will-change: transform;
        }

        .fan-card:first-child { margin-left: 0; }

        .fan-card:hover {
          box-shadow:
            0 32px 80px rgba(0, 0, 0, 0.7),
            0  8px 24px rgba(0, 0, 0, 0.4);
          z-index: 30 !important;
          transform:
            rotate(calc(var(--pr) * 0.4))
            translateX(var(--px))
            translateY(calc(var(--base-offsetY) + var(--py) - 20px))
            scale(1.06);
        }

        .fan-card:first-child:hover,
        .fan-card:last-child:hover {
          transform:
            rotate(calc(var(--pr) * 0.25))
            translateX(var(--px))
            translateY(calc(var(--base-offsetY) + var(--py) - 20px))
            scale(1.06);
        }

        @keyframes fanFloat {
          0%, 100% { margin-top: 0; }
          50%       { margin-top: -12px; }
        }

        @keyframes cardEntry {
          from {
            opacity: 0;
            transform:
              rotate(var(--pr))
              translateX(var(--px))
              translateY(calc(var(--base-offsetY) + 40px));
          }
          to { opacity: 1; }
        }

        .fan-img {
          object-fit: cover;
          object-position: center top;
          pointer-events: none;
          user-select: none;
          border-radius: 14px;
        }

        .fan-shimmer {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.16) 0%,
            transparent 55%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .fan-card:hover .fan-shimmer { opacity: 1; }

        .fan-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #5b21b6 0%, #2a0a5e 100%);
        }
      `}</style>
    </div>
  );
}
