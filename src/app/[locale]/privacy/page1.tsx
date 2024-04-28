"use client";

import { Layout, LayoutContent } from "@/components/page/layout";
import { PageParams } from "@/types/next";

export default function RoutePage(props: PageParams<{ locale: string }>) {
    return (
        <Layout>
            <LayoutContent className="mt-16 lg:mt-32">
                {/* <Markdown filePath="privacy-policy.mdx" /> */}
            </LayoutContent>
        </Layout>
    );
}
