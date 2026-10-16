"use client";

/**
 * Smooth Tab
 *
 * @author  @dorianbaffier
 * @source  https://kokonutui.com  (MIT)
 *
 * Adapted for this project:
 *  - imports from `framer-motion` (this repo's dependency) rather than `motion/react`
 *  - shadcn tokens (bg-card, text-muted-foreground, …) swapped for our own
 *  - the original's `fill-${color}` is a dynamic Tailwind class and never
 *    compiles, so colours are passed as values and applied via `style`
 *  - fixed 400px toolbar / 200px panel replaced with fluid sizing
 */

import { AnimatePresence, motion, type Variants } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface SmoothTabItem {
  id: string;
  title: string;
  description?: string;
  cardContent?: React.ReactNode;
  /** Any CSS colour. Drives the sliding pill and the waveform tint. */
  color: string;
}

const WaveformPath = () => (
  <motion.path
    animate={{
      x: [0, 10, 0],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    }}
    d="M0 50
       C 20 40, 40 30, 60 50
       C 80 70, 100 60, 120 50
       C 140 40, 160 30, 180 50
       C 200 70, 220 60, 240 50
       C 260 40, 280 30, 300 50
       C 320 70, 340 60, 360 50
       C 380 40, 400 30, 420 50
       L 420 100 L 0 100 Z"
    initial={false}
  />
);

/** Decorative waveform wash sitting behind panel content. */
export function TabWaveform({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute bottom-0 h-32 w-full"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 420 100"
      >
        <motion.g
          animate={{ opacity: 0.15 }}
          initial={{ opacity: 0 }}
          style={{ fill: color, stroke: color, strokeWidth: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WaveformPath />
        </motion.g>
        <motion.g
          animate={{ opacity: 0.1 }}
          initial={{ opacity: 0 }}
          style={{
            fill: color,
            stroke: color,
            strokeWidth: 1,
            transform: "translateY(10px)",
          }}
          transition={{ duration: 0.5 }}
        >
          <WaveformPath />
        </motion.g>
      </svg>
    </div>
  );
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.95,
  }),
};

const transition = { duration: 0.4, ease: [0.32, 0.72, 0, 1] } as const;

interface SmoothTabProps {
  items: SmoothTabItem[];
  defaultTabId?: string;
  className?: string;
  /** Height of the panel. Panels are absolutely positioned to cross-fade. */
  panelClassName?: string;
  /** Tab bar above or below the panel. */
  toolbarPosition?: "top" | "bottom";
  onChange?: (tabId: string) => void;
}

export default function SmoothTab({
  items,
  defaultTabId,
  className,
  panelClassName,
  toolbarPosition = "bottom",
  onChange,
}: SmoothTabProps) {
  const [selected, setSelected] = React.useState(defaultTabId ?? items[0].id);
  const [direction, setDirection] = React.useState(0);
  const [pill, setPill] = React.useState({ width: 0, left: 0 });

  const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const measure = () => {
      const button = buttonRefs.current.get(selected);
      const container = containerRef.current;
      if (!button || !container) return;

      const rect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPill({ width: rect.width, left: rect.left - containerRect.left });
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [selected]);

  const select = (tabId: string) => {
    const from = items.findIndex((i) => i.id === selected);
    const to = items.findIndex((i) => i.id === tabId);
    setDirection(to > from ? 1 : -1);
    setSelected(tabId);
    onChange?.(tabId);
  };

  // Roving arrow-key navigation, per the tablist pattern.
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % items.length
        : (index - 1 + items.length) % items.length;
    select(items[next].id);
    buttonRefs.current.get(items[next].id)?.focus();
  };

  const selectedItem = items.find((i) => i.id === selected);

  const panel = (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-line bg-surface-raised",
        panelClassName,
      )}
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          animate="center"
          className="absolute inset-0 h-full w-full bg-surface-raised will-change-transform"
          custom={direction}
          exit="exit"
          initial="enter"
          key={`panel-${selected}`}
          id={`panel-${selected}`}
          role="tabpanel"
          aria-labelledby={`tab-${selected}`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          transition={transition}
          variants={slideVariants}
        >
          {selectedItem?.cardContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  const toolbar = (
    <div
      aria-label="Channels"
      className={cn(
        "relative mx-auto flex w-full max-w-xl items-center rounded-full border border-line bg-surface-alt p-1",
        toolbarPosition === "top" ? "mb-8" : "mt-8",
      )}
      ref={containerRef}
      role="tablist"
    >
      <motion.div
        animate={{
          width: pill.width,
          x: pill.left,
          opacity: pill.width ? 1 : 0,
        }}
        className="absolute z-[1] rounded-full"
        initial={false}
        style={{
          height: "calc(100% - 8px)",
          top: 4,
          background: selectedItem?.color,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      <div className="relative z-[2] grid w-full grid-cols-4 gap-1">
        {items.map((item, i) => {
          const isSelected = selected === item.id;
          return (
            <button
              aria-controls={`panel-${item.id}`}
              aria-selected={isSelected}
              className={cn(
                "truncate rounded-full px-2 py-2.5 text-[0.78rem] font-bold transition-colors duration-300 sm:text-[0.85rem]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet",
                isSelected
                  ? "text-white"
                  : "text-ink-soft hover:bg-black/5 hover:text-ink",
              )}
              id={`tab-${item.id}`}
              key={item.id}
              onClick={() => select(item.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              ref={(el) => {
                if (el) buttonRefs.current.set(item.id, el);
                else buttonRefs.current.delete(item.id);
              }}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className={cn("flex w-full flex-col", className)}>
      {toolbarPosition === "top" ? (
        <>
          {toolbar}
          {panel}
        </>
      ) : (
        <>
          {panel}
          {toolbar}
        </>
      )}
    </div>
  );
}
