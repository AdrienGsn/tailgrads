"use client";

import { Layout, LayoutContent } from "@/components/page/layout";
import ENV from "@/lib/env";
import { useEffect } from "react";

export const Ads = () => {
    useEffect(() => {
        try {
            ((window as any).adsbygoogle =
                (window as any).adsbygoogle || []).push({});
        } catch (error: any) {
            console.error(error.message);
        }
    }, []);

    return (
        <Layout>
            <LayoutContent className="py-2">
                <ins
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client={ENV.GOOGLE_ADSENSE_CLIENT_ID}
                    data-ad-slot="8731154998"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
            </LayoutContent>
        </Layout>
    );
};
