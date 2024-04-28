"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useCopyModal from "@/hooks/use-copy-modal";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

export const CopyModal = () => {
    const [_, copyToClipboard] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    const isOpen = useCopyModal((state) => state.isOpen);
    const onClose = useCopyModal((state) => state.onClose);
    const gradient = useCopyModal((state) => state.gradient);
    const text = useCopyModal((state) => state.text);

    const copy = () => {
        copyToClipboard(gradient!).then(() => {
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <div className="flex flex-col gap-5">
                    <div
                        className={cn(
                            "group w-full h-52 rounded-lg flex items-center justify-center",
                            text ? "bg-muted" : `${gradient}`
                        )}
                    >
                        {text && (
                            <h2
                                className={cn(
                                    "z-50 text-4xl font-semibold  max-w-sm",
                                    gradient
                                )}
                            >
                                {text}
                            </h2>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Input value={gradient} />
                        <Button variant="outline" onClick={copy}>
                            {copied ? (
                                <Check className="size-5" />
                            ) : (
                                <Copy className="size-5" />
                            )}
                        </Button>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
