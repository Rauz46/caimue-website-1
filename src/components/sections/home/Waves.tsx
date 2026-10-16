import { useMemo } from "react";

/**
 * The page texture: a ribbon of hairlines, like a signal or a sound wave
 * seen side-on. Lines pinch and fan along their length, so a flat set of
 * 1px strokes reads as a twisting surface without any shading.
 *
 * Deterministic (no randomness) so server and client render the same
 * paths. Every frequency is a whole number of cycles across the tile
 * width, so two tiles side by side join seamlessly and the hero copy can
 * drift forever on a transform.
 */

const W = 1600;
const STEP = 50;

type Props = {
  /** vertical centre of the ribbon, as a fraction of the viewBox height */
  at?: number;
  lines?: number;
  /** half-spread of the ribbon at its widest, in viewBox units */
  spread?: number;
  /** main swell amplitude */
  swell?: number;
  /** phase offset, so each section's ribbon differs */
  phase?: number;
  /** edges rise and the middle dips (keeps the ribbon under centred text) */
  dip?: number;
  /** viewBox height */
  h?: number;
  /** render two tiles for a horizontal drift loop */
  drift?: boolean;
  /** seconds per drift loop */
  speed?: number;
  className?: string;
};

function line(i: number, n: number, p: Required<Omit<Props, "drift" | "speed" | "className" | "lines">>): string {
  const tau = Math.PI * 2;
  const k = i - (n - 1) / 2;
  const pts: Array<[number, number]> = [];
  for (let x = -STEP; x <= W + STEP; x += STEP) {
    const t = x / W;
    const pinch = 0.32 + 0.68 * (0.5 + 0.5 * Math.sin(tau * t + p.phase + 0.6));
    const y =
      p.at * p.h +
      (k / ((n - 1) / 2)) * p.spread * pinch +
      p.swell * Math.sin(tau * 2 * t + p.phase) +
      p.swell * 0.45 * Math.sin(tau * 3 * t + p.phase * 1.7 + k * 0.035) -
      p.dip * Math.cos(tau * t);
    pts.push([x, y]);
  }
  // Catmull-Rom through the samples, as cubic Béziers
  let d = `M${pts[1][0]} ${pts[1][1].toFixed(1)}`;
  for (let j = 1; j < pts.length - 2; j++) {
    const [x0, y0] = pts[j - 1];
    const [x1, y1] = pts[j];
    const [x2, y2] = pts[j + 1];
    const [x3, y3] = pts[j + 2];
    const c1x = x1 + (x2 - x0) / 6;
    const c1y = y1 + (y2 - y0) / 6;
    const c2x = x2 - (x3 - x1) / 6;
    const c2y = y2 - (y3 - y1) / 6;
    d += `C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${x2} ${y2.toFixed(1)}`;
  }
  return d;
}

export function Waves({
  at = 0.7,
  lines = 22,
  spread = 120,
  swell = 70,
  phase = 0,
  dip = 0,
  h = 900,
  drift = false,
  speed = 160,
  className = "",
}: Props) {
  const d = useMemo(() => {
    const p = { at, spread, swell, phase, dip, h };
    return Array.from({ length: lines }, (_, i) => line(i, lines, p)).join("");
  }, [at, lines, spread, swell, phase, dip, h]);

  return (
    <div
      className={`cx-waves ${drift ? "cx-waves--drift" : ""} ${className}`}
      style={{ ["--drift" as string]: `${speed}s` }}
      aria-hidden
    >
      <div className="cx-waves__move">
        <svg viewBox={`0 0 ${drift ? W * 2 : W} ${h}`} preserveAspectRatio="xMidYMid slice">
          <path d={d} />
          {drift && <path d={d} transform={`translate(${W} 0)`} />}
        </svg>
      </div>
    </div>
  );
}
