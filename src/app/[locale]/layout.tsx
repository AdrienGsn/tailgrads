import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import TailwindIndicator from "@/components/utils/tailwind-indicator";
import { config } from "@/config";
import { Locale } from "@/i18n";
import { getServerUrl } from "@/lib/get-server-url";
import { cn } from "@/lib/utils";
import { LayoutParams } from "@/types/next";
import { getMessages, getTranslations } from "next-intl/server";
import { isRtlLang } from "rtl-detect";
import { Ads } from "./_components/ads";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(props: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: "metadata",
    });

    return {
        title: {
            default: config.title,
            template: `%s - ${config.title}`,
        },
        description: config.description,
        icons: [
            {
                rel: "favicon",
                url: "/images/favicon.ico",
            },
            {
                rel: "icon",
                url: "/images/logo.png",
            },
            {
                rel: "apple-icon",
                url: "/images/apple-icon.png",
            },
        ],
        keywords: config.keywords,
        metadataBase: new URL(getServerUrl()),
        openGraph: {
            type: "website",
            title: config.title,
            description: config.description,
            url: getServerUrl(),
            images: ["/images/opengraph-image.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: config.title,
            description: config.description,
            site: getServerUrl(),
            images: ["/images/twitter-image.png"],
        },
    };
}

export default async function RootLayout(
    props: LayoutParams<{ locale: string }>
) {
    const locale = props.params.locale as Locale;
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            dir={isRtlLang(locale) ? "rtl" : "ltr"}
            className="h-full"
        >
            <body className={cn("h-full bg-bakground", inter.className)}>
                <Providers locale={locale} messages={messages}>
                    <Header />
                    <main className="flex-1">{props.children}</main>
                    <ScrollToTopButton />
                    <Ads />
                    <Footer />
                </Providers>
                <TailwindIndicator />
            </body>
        </html>
    );
}
