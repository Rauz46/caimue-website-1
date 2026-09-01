"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
    dots?: Array<{
        start: { lat: number; lng: number; label?: string };
        end: { lat: number; lng: number; label?: string };
    }>;
    lineColor?: string;
}

export default function WorldMap({
    dots = [],
    lineColor = "#0ea5e9",
}: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    // Create the map. Height and grid determine the density of dots.
    const map = new DottedMap({ height: 100, grid: "diagonal" });

    // Handle optional theme logic. Defaulting to dark-friendly colors for the footer design.
    const theme = "dark";

    const svgMap = map.getSVG({
        radius: 0.22,
        color: "#FFFFFF40",
        shape: "circle",
        backgroundColor: "transparent",
    });

    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (
        start: { x: number; y: number },
        end: { x: number; y: number }
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div className="w-full aspect-[2/1] relative font-sans">
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
                alt="world map"
                height="495"
                width="1056"
                draggable={false}
            />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-none select-none"
            >
                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                    return (
                        <g key={`path-group-${i}`}>
                            <motion.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke="url(#path-gradient)"
                                strokeWidth="1"
                                initial={{
                                    pathLength: 0,
                                }}
                                animate={{
                                    pathLength: 1,
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: 0.5 * i,
                                    ease: "easeOut",
                                }}
                                key={`path-${i}`}
                            ></motion.path>
                        </g>
                    );
                })}

                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {dots.map((dot, i) => (
                    <g key={`points-group-${i}`}>
                        <g key={`start-${i}`}>
                            <circle
                                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                r="3"
                                fill={lineColor}
                            />
                            <circle
                                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                                r="3"
                                fill={lineColor}
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="r"
                                    from="3"
                                    to="10"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>
                        <g key={`end-${i}`}>
                            <circle
                                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                r="3"
                                fill={lineColor}
                            />
                            <circle
                                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                                r="3"
                                fill={lineColor}
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="r"
                                    from="3"
                                    to="10"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>

                        {/* Labels for locations */}
                        <text
                            x={projectPoint(dot.start.lat, dot.start.lng).x + 8}
                            y={projectPoint(dot.start.lat, dot.start.lng).y + 4}
                            fill="white"
                            fontSize="22"
                            fontWeight="600"
                            letterSpacing="0.5"
                            className="pointer-events-none select-none drop-shadow-md"
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                        >
                            {dot.start.label}
                        </text>
                        <text
                            x={projectPoint(dot.end.lat, dot.end.lng).x + 8}
                            y={projectPoint(dot.end.lat, dot.end.lng).y + 4}
                            fill="white"
                            fontSize="22"
                            fontWeight="600"
                            letterSpacing="0.5"
                            className="pointer-events-none select-none drop-shadow-md"
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                        >
                            {dot.end.label}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
}
