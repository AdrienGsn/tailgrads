"use client";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
    // const { scrollYBouncedProgress } = useDeboundedScroll(400);

    // const scrollYBouncedProgressDelayed = useTransform(
    //     scrollYBouncedProgress,
    //     [0, 0.75, 1],
    //     [0, 0, 1]
    // );

    const { scrollY, scrollYProgress } = useScroll();

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous!) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            style={{
                height: useTransform(scrollYProgress, [0, 0.1], [64, 40]),
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 z-50 w-full backdrop-blur-lg"
        >
            <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 py-2">
                <Logo />
                <motion.nav
                    style={{
                        translateY: useTransform(
                            scrollYProgress,
                            [0, 0.1],
                            [0, -100]
                        ),
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="hidden items-center lg:flex"
                >
                    <Link
                        href="/#"
                        className={buttonVariants({
                            variant: "link",
                        })}
                    >
                        Home
                    </Link>
                    <Link
                        href="/#generator"
                        className={buttonVariants({ variant: "link" })}
                    >
                        Generator
                    </Link>
                    <Link
                        href="/#gradients"
                        className={buttonVariants({ variant: "link" })}
                    >
                        Gradients
                    </Link>
                </motion.nav>
                <motion.div
                    style={{
                        translateY: useTransform(
                            scrollYProgress,
                            [0, 0.1],
                            [0, -100]
                        ),
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="flex items-center gap-1 divide-x"
                >
                    <Link
                        href={`mailto:${config.email}`}
                        className={buttonVariants({
                            variant: "link",
                            className: "flex items-center gap-1",
                        })}
                    >
                        <MessageCircle className="size-5" />
                        Send Feedback
                    </Link>
                    <div>
                        <ThemeToggle />
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
};
