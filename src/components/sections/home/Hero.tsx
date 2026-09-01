import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { channels, hero } from "@/content/site";
import { CardRail } from "@/components/ui/CardRail";
import { GlowCard } from "@/components/ui/GlowCard";
import { Aurora } from "@/components/effects/Aurora";
import { CountUp } from "@/components/motion/CountUp";
import { Magnetic } from "@/components/motion/Magnetic";
import { NAV_HEIGHT } from "@/lib/layout";

/**
 * One flat colour per card, drawn from a single harmonious set. Two-stop
 * brand gradients per channel fought each other badly here.
 */
const cardColors = ["#FF5FA2", "#3B6BF0", "#FF9B2F", "#1FA97A"];

/**
 * Exactly one viewport tall.
 *
 * `100svh` (small viewport height) rather than `100vh` so mobile browsers
 * don't crop the card rail behind collapsing URL chrome. Copy block flexes to
 * fill; the rail is pinned to the bottom edge.
 *
 * Paints no base colour — the violet -> orange ramp belongs to the shared
 * `.ground-flow` parent in page.tsx, so no seam appears beneath the hero.
 */
export function Hero() {
  return (
    <section
      className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden"
      style={{ paddingTop: NAV_HEIGHT }}
    >
      <Aurora className="opacity-80" />

      {/* Overhead light cone */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(255,255,255,0.16) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="grain" aria-hidden />

      {/* Copy — flexes to absorb whatever height is left over */}
      <div className="container relative z-10 flex flex-1 flex-col items-center justify-center py-6 text-center">
        {/* text-wrap:wrap overrides the global `balance` on headings. The
            lines are split by hand here, so balancing just redistributes
            within a single-line span and detaches the final full stop. */}
        <h1
          className="rise mb-5 max-w-5xl [text-wrap:wrap] text-white"
          style={{ "--delay": "0.04s" } as React.CSSProperties}
        >
          <span className="block">{hero.headline[0]}</span>
          <span className="shimmer block">{hero.headline[1]}</span>
        </h1>

        <p
          className="rise mb-7 max-w-[46ch] text-balance text-[0.95rem] leading-relaxed text-white/85 sm:text-base"
          style={{ "--delay": "0.12s" } as React.CSSProperties}
        >
          {hero.body}
        </p>

        <div
          className="rise flex flex-col items-center gap-3 sm:flex-row"
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <Magnetic>
            <Link href={hero.primaryCta.href} className="btn btn-light">
              {hero.primaryCta.label}
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href={hero.secondaryCta.href}
              className="btn border-2 border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10"
            >
              <Play size={14} strokeWidth={2.5} fill="currentColor" />
              {hero.secondaryCta.label}
            </Link>
          </Magnetic>
        </div>

        {/* Proof strip */}
        <dl
          className="rise mt-8 grid w-full max-w-2xl grid-cols-4 gap-x-4 border-t border-white/15 pt-6"
          style={{ "--delay": "0.28s" } as React.CSSProperties}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="m-0">
                <CountUp
                  value={stat.value}
                  className="block font-display text-[1.35rem] font-extrabold leading-none tracking-tight text-white sm:text-[1.7rem]"
                />
                <span className="mt-1.5 block text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.08em] text-white/55 sm:text-[0.7rem]">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Channel rail, pinned to the bottom edge */}
      <div
        className="rise relative z-10 shrink-0 pb-8"
        style={{ "--delay": "0.36s" } as React.CSSProperties}
      >
        <CardRail ariaLabel="Caimue channels">
          {channels.items.map((channel, i) => (
            <GlowCard
              key={channel.name}
              radius="14px"
              glow="rgba(255,255,255,0.75)"
              className="w-[188px] shrink-0 snap-start sm:w-[212px]"
            >
              <article
                className="beam group relative overflow-hidden rounded-[14px] border border-white/25 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                style={{ background: cardColors[i % cardColors.length] }}
              >
                <div className="flex items-center justify-between gap-2 px-3.5 pb-2.5 pt-3">
                  <span className="truncate font-display text-[0.78rem] font-bold leading-none tracking-tight text-white">
                    {channel.name}
                  </span>
                  {channel.comingSoon && (
                    <span className="shrink-0 rounded-full bg-white/25 px-1.5 py-0.5 text-[0.52rem] font-bold uppercase leading-none tracking-wide text-white">
                      Soon
                    </span>
                  )}
                </div>

                <div className="mx-2 mb-2 flex h-[104px] items-center justify-center rounded-[10px] bg-white px-5 sm:h-[116px]">
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    width={180}
                    height={channel.logoHeight}
                    style={{ height: channel.logoHeight * 0.78, width: "auto" }}
                    className="max-w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
              </article>
            </GlowCard>
          ))}

          {/* The reel itself, as the closing card */}
          <GlowCard
            radius="14px"
            glow="rgba(255,255,255,0.75)"
            className="w-[188px] shrink-0 snap-start sm:w-[212px]"
          >
            <Link
              href="/platforms"
              className="beam group relative block overflow-hidden rounded-[14px] border border-white/25 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
              style={{ background: "#8B3DFF" }}
            >
              <div className="flex items-center justify-between gap-2 px-3.5 pb-2.5 pt-3">
                <span className="truncate font-display text-[0.78rem] font-bold leading-none tracking-tight text-white">
                  Short Films
                </span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={2.5}
                  className="shrink-0 text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <div className="relative mx-2 mb-2 h-[104px] overflow-hidden rounded-[10px] sm:h-[116px]">
                <Image
                  src="/images/Movies/Vishudha Sakshi.jpg"
                  alt="Vishudha Sakshi"
                  fill
                  sizes="212px"
                  quality={72}
                  priority
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
            </Link>
          </GlowCard>
        </CardRail>
      </div>
    </section>
  );
}
