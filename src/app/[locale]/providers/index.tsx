"use client";

import { GradientProvider } from "@/context/gradient-context";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ModalProvider } from "./modal-provider";

export const Providers = (
    props: PropsWithChildren<{ locale: string; messages: AbstractIntlMessages }>
) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="theme"
        >
            <NextIntlClientProvider
                locale={props.locale}
                messages={props.messages}
            >
                <GradientProvider>
                    <Toaster />
                    <ModalProvider />
                    {props.children}
                </GradientProvider>
            </NextIntlClientProvider>
        </ThemeProvider>
    );
};
