"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCopyModal from "@/hooks/use-copy-modal";

export type GradientCardProps = {
    gradient: string;
    text?: string;
};

export const CopyButton = (props: GradientCardProps) => {
    const openCopyModal = useCopyModal((state) => state.onOpen);

    return (
        <div className="group relative flex size-full items-center justify-center rounded-lg">
            <Button
                onClick={() => openCopyModal(props.gradient, props.text)}
                size="lg"
                variant="ghost"
                className="items-center gap-2 group-hover:flex max-md:absolute max-md:bottom-1 max-md:right-1 max-md:flex md:hidden"
            >
                <Copy className="size-5" />
                <span>Copy</span>
            </Button>
        </div>
    );
};
