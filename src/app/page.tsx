import { Hero } from "@/components/sections/home/Hero";
import { StoryStudio } from "@/components/sections/home/StoryStudio";
import { ServicesSection } from "@/components/sections/home/Services";
import { Spotlight } from "@/components/sections/home/Spotlight";
import { Reel } from "@/components/sections/home/Reel";
import { WorkWithUs } from "@/components/sections/home/WorkWithUs";
import { ColumnRules } from "@/components/effects/ColumnRules";

export default function HomePage() {
  return (
    <>
      {/* The hero sits INSIDE the ramp rather than owning a background of its
          own — that shared parent is what removes the seam under the hero and
          lets one violet -> magenta -> orange run the full height. */}
      <div className="ground-flow relative">
        {/* Structure, not surface noise: 1px column rules give the colour
            field something to measure against. */}
        <ColumnRules className="z-0" />
        <div className="grain z-0 opacity-[0.025]" aria-hidden />

        <div className="relative z-10">
          <Hero />
          <StoryStudio />
          <ServicesSection />
          <Spotlight />
        </div>
      </div>

      <Reel />
      <WorkWithUs />
    </>
  );
}
