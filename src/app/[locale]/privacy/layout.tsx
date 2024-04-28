import { LayoutParams } from "@/types/next";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    robots: {
        index: false,
        follow: true,
    },
};

export default async function RoutePage(props: LayoutParams) {
    return props.children;
}
