import createIntlMiddleware from "next-intl/middleware";

import { Locale, locales } from "@/i18n";

export default createIntlMiddleware({
    locales: locales,
    defaultLocale: "en" satisfies Locale,
    localePrefix: "never",
});

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|apple-icon.png|favicon.svg|images/|privacy-policy/|sitemap.xml|robots.txt|Ads.txt).*)",
    ],
};
