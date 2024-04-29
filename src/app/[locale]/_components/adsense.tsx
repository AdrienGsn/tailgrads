import Script from "next/script";

import ENV from "@/lib/env";

export type AdSenseProps = {
    pId: string;
};

export const AdSense = (props: AdSenseProps) => {
    if (ENV.NODE_ENV !== "production") {
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${props.pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};
