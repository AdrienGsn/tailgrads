"use client";

import { useTranslations } from "next-intl";
import { GradientCard } from "./gradient-card";
import { Section } from "./section";

const GRADIENTS = [
    "bg-gradient-to-r from-green-400 to-blue-500",
    "bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400",
    "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
    "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
    "bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500",
    "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500",
    "bg-gradient-to-r from-red-400 via-yellow-500 to-green-500",
    "bg-gradient-to-r from-indigo-400 via-blue-500 to-green-500",
    "bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500",
    "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
    "bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500",
    "bg-gradient-to-r from-red-400 via-pink-500 to-purple-500",
    "bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500",
    "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
    "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
    "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500",
    "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
    "bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500",
    "bg-gradient-to-r from-red-400 via-pink-500 to-purple-500",
    "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
];

export const Gradients = () => {
    const t = useTranslations("gradients");

    return (
        <Section id="gradients" className="flex flex-col gap-5">
            <div className="max-md:text-center">
                <h2 className="text-4xl font-semibold">{t("title")}</h2>
                <h3 className="text-xl">{t("subTitle")}</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {GRADIENTS.map((gradient, index) => (
                    <GradientCard key={index} gradient={gradient} />
                ))}
            </div>
        </Section>
    );
};
