"use client";

import { Layout, LayoutContent } from "@/components/page/layout";

export const Ads = () => {
    return (
        <Layout>
            <LayoutContent className="my-4 bg-red-400">
                ADS
                {/* {process.env.NODE_ENV === "production" && (
                        <div>
                            <Adsense
                                client={ENV.ADSENSE_CLIENT_ID}
                                slot="7259870550"
                                style={{ display: "block" }}
                                layout="in-article"
                                format="fluid"
                            />
                        </div>
                    )} */}
            </LayoutContent>
        </Layout>
    );
};
