"use client";

import { config } from "@/config";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export const Logo = () => {
    const { scrollYProgress } = useScroll();

    return (
        <Link href="/" className="flex items-center gap-2">
            <motion.img
                src="/images/logo.png"
                alt={config.title}
                style={{
                    height: useTransform(scrollYProgress, [0, 0.1], [35, 28]),
                    width: useTransform(scrollYProgress, [0, 0.1], [35, 28]),
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            />
            <motion.p
                style={{
                    fontSize: useTransform(scrollYProgress, [0, 0.1], [18, 5]),
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="hidden font-semibold md:flex"
            >
                {config.title}
            </motion.p>
        </Link>
    );
};
