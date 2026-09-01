import { cn } from "@/lib/utils";

/**
 * Vertical 1px column rules pinned to the container grid.
 *
 * "Invisible architecture" — the structure is what makes a large colour field
 * read as designed rather than as flat paint, and it does the job without the
 * surface noise of a hatch or dot field.
 */
export function ColumnRules({
  count = 5,
  className,
  color,
}: {
  /** Number of interior rules. 5 gives sixths, which suits a 12-col grid. */
  count?: number;
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    >
      <div className="container relative h-full">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className="col-rule"
            style={
              {
                left: `${((i + 1) / (count + 1)) * 100}%`,
                ...(color ? { "--rule-color": color } : {}),
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
