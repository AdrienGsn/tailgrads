"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const { scrollYProgress } = useScroll();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <motion.div
                style={{
                    width: useTransform(scrollYProgress, [0, 0.1], [20, 14]),
                    height: useTransform(scrollYProgress, [0, 0.1], [20, 14]),
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                <SunMedium className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
            </motion.div>
        </Button>
    );
};
