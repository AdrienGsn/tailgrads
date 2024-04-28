"use client";

import useGradient from "@/hooks/use-gradient";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const TAILWIND_COLORS = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
];

const TAILWIND_PERCENTS = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
];

export type ColorSelectorProps = {
    step: "from" | "via" | "to";
};

export const ColorSelector = (props: ColorSelectorProps) => {
    const { setFrom, setVia, setTo, from, via, to } = useGradient();

    const getGradient = (color: string, percent: number): string => {
        return `bg-${color}-${percent}`;
    };

    const handleUpdate = (color: string, percent: number) => {
        if (props.step === "from") {
            setFrom(`from-${color}-${percent}`);
        } else if (props.step === "via") {
            setVia(`via-${color}-${percent}`);
        } else if (props.step === "to") {
            setTo(`to-${color}-${percent}`);
        }
    };

    return (
        <div className="flex max-h-[300px] flex-col gap-4 overflow-auto rounded-md border border-border p-4">
            {TAILWIND_COLORS.map((color) => (
                <div key={color} className="flex flex-col gap-1">
                    <p className="text-base">
                        {color[0].toLocaleUpperCase()}
                        {color.slice(1, color.length).toString()}
                    </p>
                    <div className="flex gap-4">
                        {TAILWIND_PERCENTS.map((percent) => {
                            const isActive =
                                props.step === "from"
                                    ? from === `from-${color}-${percent}`
                                    : props.step === "via"
                                    ? via === `via-${color}-${percent}`
                                    : props.step === "to"
                                    ? to === `to-${color}-${percent}`
                                    : false;

                            return (
                                <div
                                    key={percent}
                                    role="button"
                                    onClick={() => handleUpdate(color, percent)}
                                    className="flex flex-col gap-2"
                                >
                                    <div
                                        className={cn(
                                            "size-7 md:size-10 border border-border relative rounded-md",
                                            `${getGradient(color, percent)}`,
                                            isActive &&
                                                "border-2 border-green-500"
                                        )}
                                    >
                                        {isActive && (
                                            <div className="absolute flex size-full items-center justify-center bg-green-500/40">
                                                <Check className="size-3 text-foreground md:size-5" />
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-sm">{percent}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};
