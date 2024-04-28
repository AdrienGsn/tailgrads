"use client";

import { Input } from "@/components/ui/input";

export type StopPercentInputProps = {
    value?: number;
    onChange: (event: any) => void;
};

export const StopPercentInput = (props: StopPercentInputProps) => {
    return (
        <div className="group flex w-full max-w-56 items-center gap-2 rounded-md border border-border">
            <Input
                type="number"
                placeholder="Stop Percent"
                min={0}
                value={props.value}
                onChange={props.onChange}
                className="border-0 focus-visible:ring-0"
            />
            <span className="mr-2">%</span>
        </div>
    );
};
