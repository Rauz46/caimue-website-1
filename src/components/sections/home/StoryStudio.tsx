"use client";

import Image from "next/image";
import { ArrowUpRight, Youtube } from "lucide-react";
import { channels } from "@/content/site";
import { KineticHeading } from "@/components/motion/KineticHeading";
import SmoothTab, {
  TabWaveform,
  type SmoothTabItem,
} from "@/components/ui/smooth-tab";

/** Per-channel pill colour. Solid, so the sliding pill reads cleanly. */
const tabColors = ["#FF5FA2", "#3B6BF0", "#FF9B2F", "#1FA97A"];

function ChannelPanel({
  channel,
  color,
}: {
  channel: (typeof channels.items)[number];
  color: string;
}) {
  return (
    <div className="relative h-full">
      <TabWaveform color={color} />

      <div className="relative flex h-full flex-col gap-6 p-6 text-left sm:flex-row sm:items-center sm:p-7">
        {/* Preview stack */}
        <div className="grid w-full shrink-0 grid-cols-3 gap-2 sm:w-[280px] sm:grid-cols-2">
          <div className="relative col-span-2 aspect-video overflow-hidden rounded-xl bg-surface-sunk">
            <Image
              src={channel.previews[0]}
              alt=""
              fill
              sizes="280px"
              quality={72}
              loading="lazy"
              className="object-cover"
            />
          </div>
          {channel.previews.slice(1, 3).map((src) => (
            <div
              key={src}
              className="relative aspect-video overflow-hidden rounded-lg bg-surface-sunk"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="140px"
                quality={68}
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="flex-1">
          <Image
            src={channel.logo}
            alt={channel.name}
            width={170}
            height={channel.logoHeight}
            style={{ height: channel.logoHeight * 0.7, width: "auto" }}
            className="mb-4 object-contain"
          />
          <p className="mb-5 text-[0.9rem] leading-relaxed text-ink-soft">
            {channel.description}
          </p>

          {channel.comingSoon ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-sunk px-4 py-2 text-[0.78rem] font-bold text-ink-faint">
              Coming soon
            </span>
          ) : (
            <a
              href={channel.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-bold text-white transition-transform duration-300 hover:scale-[1.04]"
              style={{ background: color }}
            >
              <Youtube size={15} strokeWidth={2.5} />
              Watch on YouTube
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const tabs: SmoothTabItem[] = channels.items.map((channel, i) => {
  const color = tabColors[i % tabColors.length];
  return {
    id: channel.name,
    title: channel.name,
    description: channel.description,
    color,
    cardContent: <ChannelPanel channel={channel} color={color} />,
  };
});

export function StoryStudio() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="container relative z-10 flex flex-col items-center">
        <span className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/75">
          Caimue Studios
        </span>

        <KineticHeading
          text="It all starts with a story"
          className="mb-7 max-w-[18ch] text-center text-white"
        />

        <SmoothTab
          items={tabs}
          toolbarPosition="top"
          className="max-w-4xl"
          panelClassName="h-[520px] sm:h-[268px]"
        />
      </div>
    </section>
  );
}
