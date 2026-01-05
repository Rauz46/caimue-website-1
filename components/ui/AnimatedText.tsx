"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    splitBy?: "word" | "letter";
    once?: boolean;
}

export function AnimatedText({
    text,
    className = "",
    delay = 0,
    splitBy = "word",
    once = true,
}: AnimatedTextProps) {
    const items = splitBy === "word" ? text.split(" ") : text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: splitBy === "word" ? 0.12 : 0.03,
                delayChildren: delay,
            },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >
            {items.map((item, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                >
                    {item}
                    {splitBy === "word" && index < items.length - 1 && (
                        <span className="inline-block">&nbsp;</span>
                    )}
                </motion.span>
            ))}
        </motion.span>
    );
}
