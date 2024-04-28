import { twx } from "@/lib/utils";

export const Layout = twx.div((props) => [
    "max-w-6xl flex-wrap w-full flex gap-4 m-auto px-4",
    props.className,
]);

export const LayoutHeader = twx.div((props) => [
    "flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]",
    props.className,
]);

export const LayoutTitle = twx.h1((props) => [
    "text-4xl font-bold",
    props.className,
]);

export const LayoutDescription = twx.p((props) => ["text-xl", props.className]);

export const LayoutActions = twx.div((props) => [
    "flex items-center",
    props.className,
]);

export const LayoutContent = twx.div((props) => ["size-full", props.className]);
