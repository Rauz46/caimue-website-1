import { cn } from "@/lib/utils";

/**
 * Organic blob field used as a section background.
 *
 * The reference builds these as single enormous inline SVG paths (its hero
 * blob is one path across a 1920x1403 viewBox) and animates their
 * `stroke-width` from 0 up and back, which makes the shape swell and settle.
 * The Animator drives that via `data-blob`; the geometry lives here.
 *
 * Drawn rather than photographed on purpose: no image payload, and it stays
 * correct when the film artwork is swapped out later.
 */

const SHAPES = {
  /** Broad sweep for a hero — fills the upper right and lower left. */
  hero: [
    "M-120 340C60 190 300 120 520 190c220 70 300 300 520 330 220 30 420-140 640-120 180 16 320 150 380 300v560H-120Z",
    "M1180 60c180-70 380 10 470 170 90 160 40 360-90 470-130 110-330 120-470 20-140-100-200-300-140-460 30-80 130-160 230-200Z",
  ],
  /** Softer, centred mass for mid-page sections. */
  soft: [
    "M120 420C220 250 460 170 700 230c240 60 350 260 600 280 250 20 400-160 620-110 150 34 260 170 300 320v480H120Z",
  ],
  /** Two counter-weighted lobes, for a band that needs asymmetry. */
  split: [
    "M-80 520C40 330 300 250 520 330c220 80 260 320 470 380 210 60 400-80 610-40v460H-80Z",
    "M1420 120c150-60 330 40 380 200 50 160-40 340-190 410-150 70-340 20-430-120-90-140-40-340 100-430 45-29 95-48 140-60Z",
  ],
} as const;

export function Blob({
  shape = "soft",
  color,
  className,
  /** Peak stroke width the Animator breathes to. Reference uses 60 (35 small). */
  stroke = 60,
  opacity = 1,
}: {
  shape?: keyof typeof SHAPES;
  color: string;
  className?: string;
  stroke?: number;
  opacity?: number;
}) {
  return (
    <div
      data-blob
      data-blob-stroke={stroke}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      style={{ opacity }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1920 1200"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        fill="none"
      >
        {SHAPES[shape].map((d, i) => (
          <path
            key={i}
            d={d}
            fill={color}
            stroke={color}
            strokeWidth={0}
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}
