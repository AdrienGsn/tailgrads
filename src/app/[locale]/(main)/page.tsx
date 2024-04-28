"use client";

import { Layout, LayoutContent } from "@/components/page/layout";
import { PageParams } from "@/types/next";
import { Generator } from "./_components/generator";
import { Gradients } from "./_components/gradients";
import { Hero } from "./_components/hero";

export default function RoutePage(props: PageParams) {
    return (
        <Layout>
            <LayoutContent className="mt-16 lg:mt-32">
                <Hero />
                <Generator />
                <Gradients />
            </LayoutContent>
        </Layout>
    );
}
