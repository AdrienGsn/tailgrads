"use client";

import Script from "next/script";

import ENV from "@/lib/env";

export const Ads = () => {
    if (ENV.NODE_ENV !== "production") {
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ENV.ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};
