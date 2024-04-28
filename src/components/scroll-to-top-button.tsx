"use client";

import { Button } from "@/components/ui/button";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton = () => {
    const scrolled = useScrollTop();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            onClick={() => scrollToTop()}
            size="rounded"
            className={cn(
                "size-10 opacity-0 fixed bottom-10 right-10 transition-all delay-300",
                scrolled && "opacity-100"
            )}
        >
            <ArrowUp className="size-7" />
        </Button>
    );
};
