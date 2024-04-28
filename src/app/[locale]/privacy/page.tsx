"use client";

import { Layout, LayoutContent } from "@/components/page/layout";
import { Markdown } from "@/components/page/markdown";
import { PageParams } from "@/types/next";

export default function RoutePage(props: PageParams<{ locale: string }>) {
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
