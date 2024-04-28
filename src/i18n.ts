"server-only";

import { type AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

const messageImports = {
    en: () => import("../messages/en.json"),
    fr: () => import("../messages/fr.json"),
} as const satisfies Record<
    Locale,
    () => Promise<{ default: AbstractIntlMessages }>
>;

export function isValidLocale(locale: unknown): locale is Locale {
    return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
    const baseLocale = new Intl.Locale(params.locale).baseName;

    if (!isValidLocale(baseLocale)) {
        notFound();
    }

    const messages = (await messageImports[baseLocale]()).default;

    return {
        messages,
    };
});
