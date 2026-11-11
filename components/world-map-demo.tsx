"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo() {
    return (
        <div className=" py-40 bg-transparent w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl text-white">
                    Remote{" "}
                    <span className="text-neutral-400">
                        {"Connectivity".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto py-4">
                    Break free from traditional boundaries. Work from anywhere, at the
                    comfort of your own studio apartment. Perfect for Nomads and
                    Travellers.
                </p>
            </div>
            <WorldMap
                dots={[
                    {
                        start: { lat: 27.9506, lng: -82.4572, label: "Tampa(HQ)" }, // Tampa
                        end: { lat: 51.5074, lng: -0.1278, label: "London" }, // London
                    },
                    {
                        start: { lat: 51.5074, lng: -0.1278, label: "London" }, // London
                        end: { lat: 13.0827, lng: 80.2707, label: "Chennai" }, // Chennai
                    },
                ]}
                lineColor="#A855F7"
            />
        </div>
    );
}
