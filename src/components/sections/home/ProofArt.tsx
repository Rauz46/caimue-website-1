import Image from "next/image";
import { UserRound } from "lucide-react";

type Logo = { name: string; src: string; w: number; h: number };

/**
 * The three proof illustrations, drawn in code (no picture files): each
 * one shows the figure it sits on. data-art marks what the section builds
 * in on scroll.
 */

/** Views: a growth line that draws itself, the area under it, the latest point in pink. */
export function ArtViews() {
  const line = "M10 132 C 50 128, 70 112, 100 114 S 150 92, 180 86 S 232 52, 262 30";
  return (
    <svg className="ca-art2" viewBox="0 0 280 150" aria-hidden>
      {[38, 76, 114].map((y) => (
        <line key={y} x1="10" x2="270" y1={y} y2={y} stroke="rgb(255 255 255 / .12)" strokeDasharray="3 6" />
      ))}
      <path data-art="area" d={`${line} L262 148 L10 148 Z`} fill="rgb(217 203 239 / .16)" />
      <path data-art="line" d={line} fill="none" stroke="#ffffff" strokeWidth={4} strokeLinecap="round" pathLength={1} />
      <circle data-art="dot" cx="262" cy="30" r="16" fill="rgb(255 0 128 / .25)" />
      <circle data-art="dot" cx="262" cy="30" r="7" fill="#ff0080" />
    </svg>
  );
}

/** Brands: the six client marks, on white tiles. */
export function ArtBrands({ logos }: { logos: Logo[] }) {
  return (
    <span className="ca-art2 ca-art2--brands" aria-hidden>
      {logos.map((c) => (
        <span key={c.name} data-art="tile" className="ca-art2__tile">
          <Image src={c.src} alt="" width={c.w} height={c.h} sizes="80px" />
        </span>
      ))}
    </span>
  );
}

/** Creators: a group of avatars, overlapping, with a pink "+". */
export function ArtCreators() {
  return (
    <span className="ca-art2 ca-art2--crew" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} data-art="av" className={`ca-art2__av ca-art2__av--${i}`}>
          <UserRound />
        </span>
      ))}
      <span data-art="av" className="ca-art2__av ca-art2__av--plus">
        +
      </span>
    </span>
  );
}
