"use client";

import { Layout } from "@/components/page/layout";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
    const t = useTranslations("footer");

    return (
        <footer className="mt-auto w-full bg-muted py-2">
            <Layout className="flex-col-reverse items-center justify-between md:flex-row">
                <span className="text-sm">
                    {t("copyrights", {
                        year: new Date().getFullYear(),
                        title: config.title,
                    })}
                </span>
                <nav className="flex items-center">
                    <Link
                        href="/"
                        className={buttonVariants({
                            variant: "link",
                            size: "sm",
                        })}
                    >
                        {t("home")}
                    </Link>
                    <Link
                        href={`mailto:${config.email}`}
                        className={buttonVariants({
                            variant: "link",
                            size: "sm",
                        })}
                    >
                        {t("feedback")}
                    </Link>
                    <Link
                        href="/privacy"
                        className={buttonVariants({
                            variant: "link",
                            size: "sm",
                        })}
                    >
                        {t("privacy")}
                    </Link>
                </nav>
            </Layout>
        </footer>
    );
};
