"use client";
import { cn } from "@/lib/utils";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/* ---------- Phones: the same moving ground drawn into one small canvas (19 Nov 2026 perf pass) ----------
   On a phone the DOM version is six radial-gradient layers, each about the size of the hero at 3x density, under a
   CSS mask: roughly 90 MB of GPU tiles that a fast fling outruns, so the hero showed up half drawn. These soft
   gradients look the same drawn small and stretched, so on phones they are painted into one canvas a third of the
   size, mask included, and the GPU scales it up. The geometry mirrors the CSS exactly: blobs are 80% boxes centred
   in the container with a circle gradient (colour at .8 alpha, clear at 50% of the farthest-corner radius), each
   rotating about its transform-origin (keyframes first..fifth); the sixth blob drifts along the blob-drift path
   (70 s); the mask is radial-gradient(ellipse 58% 52% at 50% 40%, clear to 38%, solid from 78%). */
const PHONE_QUERY = "(max-width: 767px), (pointer: coarse)";
const CANVAS_SCALE = 3; // one canvas pixel per 3 CSS pixels
// [origin x offset px, origin y offset px, seconds per turn, direction, element opacity]
const ORBITS: [number, number, number, number, number][] = [[0, 0, 30, 1, 1], [-400, 0, 40, -1, 1], [400, 0, 35, 1, 1], [-200, 0, 45, -1, 0.7], [-800, 800, 50, 1, 1]];
// blob-drift keyframes (globals.css): translate in % of the element, 37 evenly spaced stops over 70 s
const DRIFT = [[50,98],[71,96.2],[86.4,91],[92,83],[86.4,73.2],[71,62.8],[50,53],[29,45],[13.6,39.8],[8,38],[13.6,39.8],[29,45],[50,53],[71,62.8],[86.4,73.2],[92,83],[86.4,91],[71,96.2],[50,98],[29,96.2],[13.6,91],[8,83],[13.6,73.2],[29,62.8],[50,53],[71,45],[86.4,39.8],[92,38],[86.4,39.8],[71,45],[50,53],[29,62.8],[13.6,73.2],[8,83],[13.6,91],[29,96.2],[50,98]];

function PhoneGround({ colours, pointer, onReady }: { colours: string[]; pointer: string; onReady: () => void }) {
    const ref = useRef<HTMLCanvasElement>(null);
    useLayoutEffect(() => {
        const cv = ref.current;
        const ctx = cv?.getContext("2d");
        if (!cv || !ctx) return;
        let W = 0, H = 0, raf = 0, visible = true, elapsed = 0, last = performance.now(), ready = false;
        const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const size = () => {
            const r = cv.getBoundingClientRect();
            W = r.width; H = r.height;
            cv.width = Math.max(1, Math.ceil(W / CANVAS_SCALE));
            cv.height = Math.max(1, Math.ceil(H / CANVAS_SCALE));
        };
        const blob = (x: number, y: number, r: number, rgb: string, alpha: number) => {
            const g = ctx.createRadialGradient(x, y, 0, x, y, r);
            g.addColorStop(0, `rgba(${rgb}, .8)`);
            g.addColorStop(1, `rgba(${rgb}, 0)`);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = g;
            ctx.fillRect(x - r, y - r, r * 2, r * 2);
        };
        const draw = (t: number) => {
            ctx.setTransform(1 / CANVAS_SCALE, 0, 0, 1 / CANVAS_SCALE, 0, 0);
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = 1;
            ctx.clearRect(0, 0, W, H);
            const cx = W / 2, cy = H / 2;
            const r80 = 0.5 * Math.hypot(0.4 * W, 0.4 * H); // 50% of the farthest-corner radius of an 80% box
            ORBITS.forEach(([ox, oy, secs, dir, alpha], i) => {
                const a = dir * (t / secs) * Math.PI * 2;
                const dx = -ox, dy = -oy; // blob centre relative to its origin
                blob(cx + ox + Math.cos(a) * dx - Math.sin(a) * dy, cy + oy + Math.sin(a) * dx + Math.cos(a) * dy, r80, colours[i], alpha);
            });
            // the drifting sixth blob: a W x H box at (-W/2, -H/2), translated along the path
            const p = ((((t % 70) + 70) % 70) / 70) * (DRIFT.length - 1);
            const k = Math.min(Math.floor(p), DRIFT.length - 2), f = p - k, A = DRIFT[k], B = DRIFT[k + 1];
            blob(((A[0] + (B[0] - A[0]) * f) / 100) * W, ((A[1] + (B[1] - A[1]) * f) / 100) * H, 0.5 * Math.hypot(0.5 * W, 0.5 * H), pointer, 0.7);
            // the mask: keeps the colour away from the headline
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "destination-in";
            ctx.save();
            ctx.translate(W * 0.5, H * 0.4);
            ctx.scale(0.58 * W, 0.52 * H);
            const m = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
            m.addColorStop(0, "rgba(0,0,0,0)"); m.addColorStop(0.38, "rgba(0,0,0,0)"); m.addColorStop(0.78, "#000"); m.addColorStop(1, "#000");
            ctx.fillStyle = m;
            ctx.fillRect(-10, -10, 20, 20);
            ctx.restore();
            if (!ready) { ready = true; onReady(); }
        };
        // The blobs take 30-70 s per loop, so 30 redraws a second look the same as 60; and while the page is being
        // scrolled they hold still (time keeps running, so they carry on from the right place), leaving the phone's
        // main thread and GPU free for the scroll itself.
        let lastDraw = 0, scrolling = false, scrollTimer = 0;
        const onScroll = () => { scrolling = true; clearTimeout(scrollTimer); scrollTimer = window.setTimeout(() => { scrolling = false; }, 160); };
        window.addEventListener("scroll", onScroll, { passive: true });
        const tick = (now: number) => {
            // a frame's timestamp can be a little earlier than the performance.now() taken when the loop started
            elapsed += Math.max(0, now - last) / 1000; last = now;
            if (!scrolling && now - lastDraw >= 32) { lastDraw = now; draw(elapsed); }
            raf = requestAnimationFrame(tick);
        };
        const run = () => {
            cancelAnimationFrame(raf); raf = 0;
            if (visible && !document.hidden && !still) { last = performance.now(); raf = requestAnimationFrame(tick); }
        };
        size(); draw(0); run();
        const ro = new ResizeObserver(() => { size(); draw(elapsed); });
        ro.observe(cv);
        const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; run(); }, { rootMargin: "120px" });
        io.observe(cv);
        const vis = () => run();
        document.addEventListener("visibilitychange", vis);
        return () => {
            cancelAnimationFrame(raf); clearTimeout(scrollTimer); ro.disconnect(); io.disconnect();
            document.removeEventListener("visibilitychange", vis); window.removeEventListener("scroll", onScroll);
        };
    }, [colours, pointer, onReady]);
    return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(108, 0, 162)",
    gradientBackgroundEnd = "rgb(0, 17, 82)",
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "100, 220, 255",
    fourthColor = "200, 50, 50",
    fifthColor = "180, 180, 50",
    pointerColor = "140, 100, 255",
    size = "80%",
    blendingValue = "hard-light",
    children,
    className,
    interactive = true,
    autoMove = false,
    maskCenter = false,
    maskImage,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    autoMove?: boolean;
    maskCenter?: boolean;
    maskImage?: string;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Use refs for animation values to avoid React re-renders
    const tgX = useRef(0);
    const tgY = useRef(0);
    const curX = useRef(0);
    const curY = useRef(0);

    // Colours are scoped to THIS instance (inline custom properties on its own
    // container, present from the server render). They used to be written onto
    // <body>, so the last instance mounted (the footer) overwrote the hero's.
    const colourVars = {
        "--gradient-background-start": gradientBackgroundStart,
        "--gradient-background-end": gradientBackgroundEnd,
        "--first-color": firstColor,
        "--second-color": secondColor,
        "--third-color": thirdColor,
        "--fourth-color": fourthColor,
        "--fifth-color": fifthColor,
        "--pointer-color": pointerColor,
        "--size": size,
        "--blending-value": blendingValue,
    } as React.CSSProperties;

    // Phones draw the moving ground into one small canvas (see PhoneGround); the DOM blobs stay until its first frame
    const [phone, setPhone] = useState(false);
    const [phoneReady, setPhoneReady] = useState(false);
    useEffect(() => {
        if (!autoMove || !interactive || blendingValue !== "normal" || size !== "80%") return;
        setPhone(window.matchMedia(PHONE_QUERY).matches);
    }, [autoMove, interactive, blendingValue, size]);
    const phoneColours = useRef([firstColor, secondColor, thirdColor, fourthColor, fifthColor]).current;
    const markReady = useRef(() => setPhoneReady(true)).current;

    // Pause all animation work while the section is offscreen
    const [inView, setInView] = useState(true);
    useEffect(() => {
        const el = containerRef.current;
        if (!el || typeof IntersectionObserver === "undefined") return;
        const io = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin: "120px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // Cursor-follow mode only: ease toward the pointer, and stop the loop once the blob has settled
    // (it restarts on the next mouse move). Auto-drift is a pure CSS animation (see .blob-drift), no JS per frame.
    const rafRef = useRef(0);
    const step = () => {
        if (!interactiveRef.current) return;
        curX.current += (tgX.current - curX.current) / 20;
        curY.current += (tgY.current - curY.current) / 20;
        interactiveRef.current.style.transform = `translate3d(${Math.round(curX.current)}px, ${Math.round(curY.current)}px, 0)`;
        if (Math.abs(tgX.current - curX.current) > 0.5 || Math.abs(tgY.current - curY.current) > 0.5) {
            rafRef.current = requestAnimationFrame(step);
        } else {
            rafRef.current = 0;
        }
    };
    useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (autoMove || !interactive || !inView) return; // auto-drift ignores the cursor
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            tgX.current = event.clientX - rect.left;
            tgY.current = event.clientY - rect.top;
            if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            style={colourVars}
            className={cn(
                "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
                containerClassName
            )}
        >
            <div className={cn("", className)}>{children}</div>
            {phone && <PhoneGround colours={phoneColours} pointer={pointerColor} onReady={markReady} />}
            {!phoneReady && <div
                className={cn(
                    "gradients-container h-full w-full",
                    !inView && "anim-paused"
                )}
                style={(() => {
                    // Custom mask wins; otherwise maskCenter keeps the moving
                    // colors out of the center (behind the headline).
                    const mask =
                        maskImage ??
                        (maskCenter
                            ? "radial-gradient(ellipse 58% 52% at 50% 40%, transparent 0%, transparent 38%, black 78%)"
                            : undefined);
                    return mask
                        ? { WebkitMaskImage: mask, maskImage: mask }
                        : undefined;
                })()}
            >
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:center_center]`,
                        `animate-first`,
                        `opacity-100 will-change-transform`
                    )}
                />
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-400px)]`,
                        `animate-second`,
                        `opacity-100 will-change-transform`
                    )}
                />
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+400px)]`,
                        `animate-third`,
                        `opacity-100 will-change-transform`
                    )}
                />
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-fourth`,
                        `opacity-70 will-change-transform`
                    )}
                />
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
                        `animate-fifth`,
                        `opacity-100 will-change-transform`
                    )}
                />

                {interactive && (
                    <div
                        ref={interactiveRef}
                        className={cn(
                            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
                            `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
                            `opacity-70 will-change-transform`,
                            autoMove && `blob-drift`
                        )}
                    />
                )}
            </div>}
        </div>
    );
};
