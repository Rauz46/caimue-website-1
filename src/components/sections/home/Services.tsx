import Image from "next/image";
import { Film, Megaphone, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/content/site";
import { KineticHeading } from "@/components/motion/KineticHeading";
import { CardRail } from "@/components/ui/CardRail";
import { GlowCard } from "@/components/ui/GlowCard";

const icons: Record<string, LucideIcon> = {
  film: Film,
  megaphone: Megaphone,
  sparkles: Sparkles,
  users: Users,
};

/** Rail of saturated cards, each holding a white inner panel. */
export function ServicesSection() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="container relative z-10 text-center">
        <KineticHeading
          text={services.headline}
          className="mx-auto mb-3 max-w-[22ch] text-white"
        />
        <p className="mx-auto mb-8 max-w-xl text-[0.95rem] leading-relaxed text-white/75">
          {services.body}
        </p>
      </div>

      <div className="relative z-10">
        <CardRail ariaLabel="What we make">
          {services.items.map((service) => {
            const Icon = icons[service.icon];

            return (
              <GlowCard
                key={service.title}
                radius="14px"
                glow="rgba(255,255,255,0.75)"
                className="w-[264px] shrink-0 snap-start sm:w-[296px]"
              >
                <article
                  className="beam group flex h-full flex-col overflow-hidden rounded-[14px] border border-white/25 p-4 shadow-[0_14px_34px_-18px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                  style={{ background: service.color }}
                >
                  <span className="mb-3.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-white">
                    <Icon size={17} strokeWidth={2.3} />
                  </span>

                  <div className="mb-5 text-left">
                    <h3 className="mb-2 text-[1.15rem] font-extrabold leading-[1.15] tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mb-0 text-[0.82rem] leading-relaxed text-white/85">
                      {service.body}
                    </p>
                  </div>

                  <div className="relative mt-auto h-[150px] overflow-hidden rounded-[14px] bg-white sm:h-[164px]">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="296px"
                      quality={72}
                      loading="lazy"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                </article>
              </GlowCard>
            );
          })}
        </CardRail>
      </div>
    </section>
  );
}
