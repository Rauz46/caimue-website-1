import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * The one shadow on the site.
 *
 * `drop-shadow(... 0px ...)` — a hard offset with ZERO blur. That single
 * restraint is what reads as screen-printed sticker rather than as a card
 * lifted off the page, and it is why the rest of the design can go entirely
 * shadow-free without looking flat.
 *
 * The burst is a 12-point star run through a Catmull-Rom smoothing pass, so
 * the points are soft. Spiky points read as a discount sticker.
 */
export function StickerBadge({
  number,
  label,
  className,
  rotate = 7,
}: {
  number: string;
  label: string;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={cn("badge", className)}
      style={{ "--rot": `${rotate}deg` } as CSSProperties}
      aria-hidden
    >
      <svg className="badge__img" viewBox="0 0 200 200" fill="none">
        <path
          d="M100.0 2.0C106.9 2.0 112.5 20.5 120.7 22.7C128.9 24.9 143.0 11.7 149.0 15.1C155.0 18.6 150.6 37.5 156.6 43.4C162.5 49.4 181.4 45.0 184.9 51.0C188.3 57.0 175.1 71.1 177.3 79.3C179.5 87.5 198.0 93.1 198.0 100.0C198.0 106.9 179.5 112.5 177.3 120.7C175.1 128.9 188.3 143.0 184.9 149.0C181.4 155.0 162.5 150.6 156.6 156.6C150.6 162.5 155.0 181.4 149.0 184.9C143.0 188.3 128.9 175.1 120.7 177.3C112.5 179.5 106.9 198.0 100.0 198.0C93.1 198.0 87.5 179.5 79.3 177.3C71.1 175.1 57.0 188.3 51.0 184.9C45.0 181.4 49.4 162.5 43.4 156.6C37.5 150.6 18.6 155.0 15.1 149.0C11.7 143.0 24.9 128.9 22.7 120.7C20.5 112.5 2.0 106.9 2.0 100.0C2.0 93.1 20.5 87.5 22.7 79.3C24.9 71.1 11.7 57.0 15.1 51.0C18.6 45.0 37.5 49.4 43.4 43.4C49.4 37.5 45.0 18.6 51.0 15.1C57.0 11.7 71.1 24.9 79.3 22.7C87.5 20.5 93.1 2.0 100.0 2.0Z"
          fill="var(--color-blush)"
          stroke="var(--color-ink)"
          strokeWidth="3"
        />
      </svg>

      <div className="badge__content">
        <span className="badge__number">{number}</span>
        <span className="badge__title">{label}</span>
      </div>
    </div>
  );
}
