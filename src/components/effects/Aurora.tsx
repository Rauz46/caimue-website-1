import { cn } from "@/lib/utils";

type Blob = {
  color: string;
  size: string;
  top: string;
  left: string;
  /** Which drift keyframe to ride, 1-3. */
  drift: 1 | 2 | 3;
  delay?: string;
};

const DEFAULT_BLOBS: Blob[] = [
  { color: "rgba(168,85,247,0.55)", size: "44rem", top: "-18%", left: "-10%", drift: 1 },
  { color: "rgba(236,72,153,0.42)", size: "38rem", top: "-8%", left: "58%", drift: 2, delay: "-6s" },
  { color: "rgba(0,196,204,0.34)", size: "34rem", top: "45%", left: "70%", drift: 3, delay: "-11s" },
  { color: "rgba(255,197,61,0.28)", size: "30rem", top: "58%", left: "-6%", drift: 2, delay: "-3s" },
];

/**
 * Slow-drifting colour fields.
 *
 * Each blob is a soft radial-gradient — no `filter: blur()`, which is the
 * expensive part of the usual implementation — and moves only via
 * `transform`, so the whole thing composites on the GPU without repainting.
 */
export function Aurora({
  className,
  blobs = DEFAULT_BLOBS,
}: {
  className?: string;
  blobs?: Blob[];
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {blobs.map((blob, i) => (
        <span
          key={i}
          className={`aurora-blob aurora-drift-${blob.drift}`}
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            animationDelay: blob.delay,
            background: `radial-gradient(circle at center, ${blob.color} 0%, transparent 68%)`,
          }}
        />
      ))}
    </div>
  );
}
