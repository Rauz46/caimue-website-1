import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
};

/**
 * Shared eyebrow / headline / lead block so every section shares one rhythm.
 * `tone="light"` is for sections sitting on the deep violet mesh.
 */
export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  tone = "dark",
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "eyebrow mb-5",
              tone === "light" && "text-violet-soft",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "inline-block h-1.5 w-1.5 rounded-full",
                tone === "light" ? "bg-pink" : "bg-violet",
              )}
            />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.06}>
        <h2
          className={cn(
            "mb-5 max-w-4xl",
            tone === "light" && "text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {body && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "lead max-w-2xl",
              centered && "mx-auto",
              tone === "light" && "text-white/70",
            )}
          >
            {body}
          </p>
        </Reveal>
      )}

      {children}
    </div>
  );
}
