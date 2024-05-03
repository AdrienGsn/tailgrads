"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { GradientSelector } from "./gradient-selector";
import { Section } from "./section";

export const Generator = () => {
    const t = useTranslations("generator");

    return (
        <Section id="generator" className="flex flex-col gap-10">
            <div className="max-lg:text-center">
                <h2 className="text-4xl font-semibold">{t("title")}</h2>
                <h3 className="text-xl">{t("subTitle")}</h3>
            </div>
            <Tabs defaultValue="background">
                <div className="flex w-full justify-center">
                    <TabsList>
                        <TabsTrigger
                            value="background"
                            className="py-1 lg:px-10"
                        >
                            {t("background")}
                        </TabsTrigger>
                        <TabsTrigger value="text" className="py-1 lg:px-10">
                            {t("text")}
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="background">
                    <Card className="w-full rounded-md p-5">
                        <GradientSelector />
                    </Card>
                </TabsContent>
                <TabsContent value="text">
                    <Card className="w-full rounded-md p-5">
                        <GradientSelector text />
                    </Card>
                </TabsContent>
            </Tabs>
        </Section>
    );
};
