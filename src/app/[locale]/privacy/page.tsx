import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Layout, LayoutContent } from "@/components/page/layout";
import { Markdown } from "@/components/page/markdown";
import { PageParams } from "@/types/next";

export async function generateMetadata(props: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations({
        locale: props.params.locale,
        namespace: "metadata",
    });

    return {
        title: t("titles.privacy"),
        alternates: {
            canonical: "/privacy",
        },
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function RoutePage(props: PageParams<{ locale: string }>) {
    return (
        <Layout>
            <LayoutContent className="mt-16 lg:mt-32">
                <Markdown
                    filePath={`privacy-policy/${props.params.locale}.md`}
                />
            </LayoutContent>
        </Layout>
    );
}
