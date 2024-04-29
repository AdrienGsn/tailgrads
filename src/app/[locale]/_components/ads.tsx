"use client";

import { Adsense } from "@ctrl/react-adsense";

import { Layout, LayoutContent } from "@/components/page/layout";
import ENV from "@/lib/env";

export const Ads = () => {
    return (
        <Layout>
            <LayoutContent className="my-4">
                {process.env.NODE_ENV === "production" && (
                    <div>
                        <Adsense
                            client={ENV.ADSENSE_CLIENT_ID}
                            slot="7259870550"
                            style={{ display: "block" }}
                            layout="in-article"
                            format="fluid"
                        />
                    </div>
                )}
            </LayoutContent>
        </Layout>
    );
};
