import Link from "next/link";
import { workWithUs } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const accents: Record<string, string> = {
  violet: "#7c3aed",
  pink: "#e0409c",
};

/**
 * Two-door section, laid out like a plan comparison: neutral ground, bordered
 * white cards, one CTA each.
 */
export function WorkWithUs() {
  return (
    <section className="section-cv relative bg-[#f4f4f7] py-10 sm:py-14">
      <div className="container">
        <Reveal className="mb-12 text-center">
          <h2 className="mx-auto mb-3 max-w-2xl">{workWithUs.headline}</h2>
          <p className="lead mx-auto max-w-xl">{workWithUs.body}</p>
        </Reveal>

        <RevealGroup
          className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2"
          gap={0.1}
        >
          {workWithUs.paths.map((path) => {
            const accent = accents[path.accent];

            return (
              <RevealItem key={path.title} className="h-full">
                <article className="flex h-full flex-col rounded-[16px] border border-line-strong bg-white p-8">
                  <span
                    className="mb-4 inline-flex w-fit rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white"
                    style={{ background: accent }}
                  >
                    {path.kicker}
                  </span>

                  <h3 className="mb-3 text-[1.6rem] font-extrabold tracking-tight text-ink">
                    {path.title}
                  </h3>

                  <p className="mb-7 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
                    {path.body}
                  </p>

                  <Link
                    href={path.cta.href}
                    className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-[0.85rem] font-bold text-white transition-transform duration-300 hover:scale-[1.02]"
                    style={{ background: accent }}
                  >
                    {path.cta.label}
                  </Link>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
