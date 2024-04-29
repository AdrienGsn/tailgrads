import { getServerUrl } from "@/lib/get-server-url";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${getServerUrl()}/`,
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: `${getServerUrl()}/en`,
                    fr: `${getServerUrl()}/fr`,
                },
            },
        },
    ];
}
