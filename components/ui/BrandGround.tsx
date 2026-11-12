"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

/**
 * Hero ground: the site's original moving violet gradient (kept light: normal
 * blending, centre masked, paused off screen by the component itself) under the
 * brand disc pair in one corner. Its colours are also set in globals.css so the
 * first paint is already correct before any JavaScript runs.
 */
type Corner = "tl" | "tr" | "bl" | "br";

export function BrandGround({
    className,
    discCorner = "tr",
}: {
    className?: string;
    discCorner?: Corner;
}) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)} style={{ background: "rgb(84, 30, 196)" }} aria-hidden>
            <BackgroundGradientAnimation
                autoMove
                maskCenter
                blendingValue="normal"
                containerClassName="absolute inset-0 !h-full !w-full"
                firstColor="139, 92, 246"
                secondColor="124, 58, 237"
                thirdColor="107, 43, 229"
                fourthColor="255, 61, 139"
                fifthColor="91, 33, 182"
                pointerColor="139, 92, 246"
                gradientBackgroundStart="rgb(84, 30, 196)"
                gradientBackgroundEnd="rgb(107, 43, 229)"
            />
            {/* subtle circle composition: kept to the edges, out of the headline zone */}
            <span className="cm-hs cm-hs--big" />
            <span className="cm-hs cm-hs--ring" />
            <span className="cm-hs cm-hs--mid" />
            <span className="cm-hs cm-hs--dot-y" />
            <span className="cm-hs cm-hs--dot-p" />
            <span className={`cm-ground-disc cm-ground-disc--${discCorner}`} />
        </div>
    );
}
