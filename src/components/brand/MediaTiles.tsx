import { useId } from "react";

/**
 * Play / pause / stop as chunky brand tiles (Oct 2026). After the
 * brand book's three forms and Pentagram's VRT player icons: each
 * control sits on its own flat shape, and its glyph is CUT OUT of the
 * tile (an SVG mask), so the ground always shows through it.
 *
 *   play   the Caimue corner: a rounded square with one square corner (↘)
 *   pause  the disc
 *   stop   a rounded square
 *
 * The play triangle never sits in the disc and is never rotated (brand
 * book). Colours come from CSS variables (--mt-play, --mt-pause,
 * --mt-stop) so each ground can set its own; see home.css.
 */

export type TileKind = "play" | "pause" | "stop";

const SHAPE: Record<TileKind, string> = {
  play: "M24 0H76A24 24 0 0 1 100 24V100H24A24 24 0 0 1 0 76V24A24 24 0 0 1 24 0Z",
  pause: "M50 0A50 50 0 1 1 50 100A50 50 0 1 1 50 0Z",
  stop: "M24 0H76A24 24 0 0 1 100 24V76A24 24 0 0 1 76 100H24A24 24 0 0 1 0 76V24A24 24 0 0 1 24 0Z",
};

/* the glyphs take ~45% of the tile; the play triangle sits a little right of centre, optically */
function Glyph({ kind }: { kind: TileKind }) {
  if (kind === "play") {
    return <path d="M39 31L71 50L39 69Z" fill="#000" stroke="#000" strokeWidth={9} strokeLinejoin="round" />;
  }
  if (kind === "pause") {
    return (
      <>
        <rect x={33} y={30} width={12} height={40} rx={4} fill="#000" />
        <rect x={55} y={30} width={12} height={40} rx={4} fill="#000" />
      </>
    );
  }
  return <rect x={32} y={32} width={36} height={36} rx={7} fill="#000" />;
}

function TileShape({ kind, x = 0 }: { kind: TileKind; x?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <g className={`mt-tile mt-tile--${kind}`} transform={`translate(${x} 0)`}>
      <mask id={`mt-${id}`} maskUnits="userSpaceOnUse" x={0} y={0} width={100} height={100}>
        <rect width={100} height={100} fill="#fff" />
        <Glyph kind={kind} />
      </mask>
      <path d={SHAPE[kind]} mask={`url(#mt-${id})`} style={{ fill: `var(--mt-${kind})` }} />
    </g>
  );
}

/** The three controls in a row, touching: the site's cue device. */
export function MediaTiles({ className }: { className?: string }) {
  return (
    <svg className={`mt ${className ?? ""}`} viewBox="0 0 300 100" aria-hidden focusable="false">
      <TileShape kind="play" />
      <TileShape kind="pause" x={100} />
      <TileShape kind="stop" x={200} />
    </svg>
  );
}

/** One control on its own, e.g. set into a line of type. */
export function Tile({ kind, className }: { kind: TileKind; className?: string }) {
  return (
    <svg className={`mt ${className ?? ""}`} viewBox="0 0 100 100" aria-hidden focusable="false">
      <TileShape kind={kind} />
    </svg>
  );
}
