"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

export type GradientCardProps = {
    gradient: string;
};

export const GradientCard = (props: GradientCardProps) => {
    return (
        <Card className="flex flex-col gap-4 p-4">
            <div
                className={cn(
                    "group w-full h-40 rounded-lg flex items-center justify-center",
                    props.gradient
                )}
            >
                <div className="flex size-full items-center justify-center">
                    <CopyButton gradient={props.gradient} />
                </div>
            </div>
            <p className="text-xs text-foreground">{props.gradient}</p>
        </Card>
    );
};
