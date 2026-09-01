import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featureFilms } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Selected work.
 *
 * Given a film studio, the portfolio is the strongest thing on the page, so
 * it gets a dark stage and large tiles rather than a row of thumbnails. The
 * first two run wide; the rest fall into a four-up grid.
 */
export function Reel() {
  const [lead, second, ...rest] = featureFilms.posters;

  return (
    <section className="section-cv relative bg-surface-alt py-12 sm:py-16">
      <div className="container">
        <Reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow mb-6">Selected work</span>
            <h2 className="mb-0 max-w-[14ch]">Our reel so far</h2>
          </div>
          <Link
            href="/platforms"
            className="group inline-flex items-center gap-2 text-[0.9rem] font-bold text-violet transition-colors hover:text-violet-deep"
          >
            View all work
            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>

        {/* Two wide leads */}
        <RevealGroup className="mb-5 grid gap-5 md:grid-cols-2" gap={0.08}>
          {[lead, second].map((film) => (
            <RevealItem key={film.title}>
              <figure className="group m-0">
                <div className="parallax relative aspect-[16/10] overflow-hidden rounded-[12px] border border-line bg-surface-sunk">
                  <Image
                    src={film.src}
                    alt={film.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 620px"
                    quality={76}
                    loading="lazy"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                  <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink">
                    {film.title}
                  </span>
                  <span className="shrink-0 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                    {film.meta}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Remainder */}
        <RevealGroup
          className="grid grid-cols-2 gap-5 lg:grid-cols-4"
          gap={0.06}
        >
          {rest.map((film) => (
            <RevealItem key={film.title}>
              <figure className="group m-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[12px] border border-line bg-surface-sunk">
                  <Image
                    src={film.src}
                    alt={film.title}
                    fill
                    sizes="(max-width: 1024px) 45vw, 300px"
                    quality={74}
                    loading="lazy"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="border-b border-line py-4">
                  <span className="block font-display text-[0.9rem] font-bold leading-snug tracking-tight text-ink">
                    {film.title}
                  </span>
                  <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink-faint">
                    {film.meta}
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
