"use client";

import { Layout } from "@/components/page/layout";
import { buttonVariants } from "@/components/ui/button";
import { config } from "@/config";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="mt-auto w-full bg-muted py-2">
            <Layout className="flex-col-reverse items-center justify-between md:flex-row">
                <span className="text-sm">
                    © {new Date().getFullYear()} {config.title}. All rights
                    reserved.
                </span>
                <nav className="flex items-center">
                    <Link
                        href="/"
                        className={buttonVariants({
                            variant: "link",
                            size: "sm",
                        })}
                    >
                        Home
                    </Link>
                    <Link
                        href={`mailto:${config.email}`}
                        className={buttonVariants({
                            variant: "link",
                            size: "sm",
                        })}
                    >
                        Send Feedback
                    </Link>
                    <Link
                        href="/privacy"
                        className={buttonVariants({
                            variant: "link",
                            size: "sm",
                        })}
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </Layout>
        </footer>
    );
};
