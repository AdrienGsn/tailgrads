"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (
    props: PropsWithChildren<{ id?: string; className?: string }>
) => {
    return (
        <section
            id={props.id}
            className={cn("w-full py-16 lg:py-32", props.className)}
        >
            {props.children}
        </section>
    );
};
