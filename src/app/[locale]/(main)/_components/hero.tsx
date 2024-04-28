"use client";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Section } from "./section";

export const Hero = () => {
    return (
        <Section
            id=""
            className="flex gap-20 max-lg:flex-row max-lg:items-center max-lg:text-center lg:items-center lg:justify-between"
        >
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-semibold">TailGrads</h2>
                <h3 className="max-w-xl text-xl md:text-2xl">
                    TailGrads is a user-friendly web tool designed to blend
                    Tailwind CSS colors and generate striking gradients,
                    allowing you to achieve perfect color combinations. You can
                    easily copy and paste class names for seamless integration
                    into your project.
                </h3>
                <div className="mt-16">
                    <Link
                        href="/#generator"
                        className={buttonVariants({ size: "lg" })}
                    >
                        Generate Gradient
                    </Link>
                </div>
            </div>
            <div className="flex max-w-sm items-center justify-center">
                <Image
                    src="/images/hero.svg"
                    alt="Hero"
                    layout="responsive"
                    height={250}
                    width={250}
                />
            </div>
        </Section>
    );
};
