"use client";

import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

export type StopPercentInputProps = {
    value?: number;
    onChange: (event: any) => void;
};

export const StopPercentInput = (props: StopPercentInputProps) => {
    const t = useTranslations("generator");

    return (
        <div className="group flex w-full max-w-56 items-center gap-2 rounded-md border border-border">
            <Input
                type="number"
                placeholder={t("stopPercent")}
                min={0}
                value={props.value}
                onChange={props.onChange}
                className="border-0 focus-visible:ring-0"
            />
            <span className="mr-2">%</span>
        </div>
    );
};
