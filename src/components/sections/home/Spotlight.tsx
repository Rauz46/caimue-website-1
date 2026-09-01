import Image from "next/image";
import { trackRecord } from "@/content/site";
import { KineticHeading } from "@/components/motion/KineticHeading";

const accents = ["#7C3AED", "#E0409C", "#00A8B0"];

/**
 * Track record as a sticky card deck.
 *
 * Each card pins a little lower than the last, so they deal out into a
 * visible stack as you scroll while the covered card compresses and dims.
 * Pure CSS — `position: sticky` for the pinning and a scroll-driven
 * animation for the settle — so it runs on the compositor with no scroll
 * handler, and degrades to a plain stacked list without scroll-timeline.
 */
export function Spotlight() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="container">
        <KineticHeading
          text={trackRecord.headline}
          className="mx-auto mb-3 max-w-[20ch] text-center text-white"
        />
        <p className="mx-auto mb-8 max-w-xl text-center text-[0.95rem] leading-relaxed text-white/75">
          {trackRecord.body}
        </p>

        {/* Extra bottom room gives the last card somewhere to pin against. */}
        <div className="pb-[14vh]">
          {trackRecord.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="stack-item"
              style={{ "--i": i } as React.CSSProperties}
            >
              <article
                className="beam relative mb-6 overflow-hidden rounded-[18px] border border-white/25 bg-white shadow-[0_28px_64px_-28px_rgba(23,10,46,0.6)]"
                style={
                  {
                    "--beam-color": accents[i % accents.length],
                    "--beam-duration": `${7 + i}s`,
                  } as React.CSSProperties
                }
              >
                <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_1.1fr]">
                  {/* Copy */}
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="font-display text-[0.72rem] font-bold tabular-nums"
                        style={{ color: accents[i % accents.length] }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-line" />
                    </div>

                    <span
                      className="mb-2 font-display text-[2.5rem] font-extrabold leading-none tracking-tight sm:text-[3.25rem]"
                      style={{ color: accents[i % accents.length] }}
                    >
                      {pillar.stat}
                    </span>

                    <h3 className="mb-3 max-w-[14ch] text-ink">{pillar.title}</h3>
                    <p className="mb-0 max-w-[42ch] text-[0.95rem] leading-relaxed text-ink-soft">
                      {pillar.body}
                    </p>
                  </div>

                  {/* Collage. Fixed height so the card is sized by the art
                      rather than by whichever column happens to be longer —
                      an auto-height grid left a tall band of empty white
                      beside the copy. */}
                  <div className="grid h-[260px] grid-cols-3 grid-rows-2 gap-2 p-2.5 sm:h-[300px]">
                    <div className="parallax relative col-span-2 row-span-2 overflow-hidden rounded-[12px] bg-surface-sunk">
                      <Image
                        src={pillar.images[0].src}
                        alt={pillar.images[0].alt}
                        fill
                        sizes="(max-width: 1024px) 60vw, 420px"
                        quality={76}
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    {pillar.images.slice(1, 3).map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-square overflow-hidden rounded-[10px] bg-surface-sunk"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="180px"
                          quality={72}
                          loading="lazy"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
