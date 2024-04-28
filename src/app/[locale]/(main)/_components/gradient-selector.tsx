"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCopyModal from "@/hooks/use-copy-modal";
import useGradient from "@/hooks/use-gradient";
import { cn } from "@/lib/utils";
import { Redo, Undo } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ColorSelector } from "./color-selector";
import { CopyButton } from "./copy-button";
import { StopPercentInput } from "./stop-percent-input";

const TAILWIND_DIRECTIONS = [
    "bg-gradient-to-t",
    "bg-gradient-to-tr",
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "bg-gradient-to-b",
    "bg-gradient-to-bl",
    "bg-gradient-to-l",
    "bg-gradient-to-tl",
];

export type GradientSelectorProps = {
    text?: boolean;
};

export const GradientSelector = (props: GradientSelectorProps) => {
    const t = useTranslations("generator");

    const isMobile = useMediaQuery("(max-width: 768px)");

    const {
        direction,
        from,
        via,
        to,
        fromStop,
        viaStop,
        toStop,
        setDirection,
        setVia,
        setFromStop,
        setViaStop,
        setToStop,
        undo,
        canUndo,
        redo,
        canRedo,
    } = useGradient();

    const [step, setStep] = useState<"from" | "via" | "to">("from");
    const [activeVia, setActiveVia] = useState(false);
    const [text, setText] = useState("Awesome Gradient");

    const openCopyModal = useCopyModal((state) => state.onOpen);

    const getGradient = (): string => {
        return props.text
            ? `${direction} ${from} ${
                  fromStop && fromStop > 0 ? "from-" + fromStop + "%" : ""
              } ${via ? via : ""} ${
                  viaStop && viaStop > 0 ? "via-" + viaStop + "%" : ""
              } ${to} ${
                  toStop && toStop > 0 ? "to-" + toStop + "%" : ""
              } bg-clip-text text-transparent`
            : `${direction} ${from} ${
                  fromStop && fromStop > 0 ? "from-" + fromStop + "%" : ""
              } ${via ? via : ""} ${
                  viaStop && viaStop > 0 ? "via-" + viaStop + "%" : ""
              } ${to} ${toStop && toStop > 0 ? "to-" + toStop + "%" : ""}`;
    };

    return (
        <div className="flex flex-col gap-10">
            <Card className="flex gap-8 rounded p-4 max-lg:flex-row xl:items-start xl:justify-between">
                <div className="flex w-1/2 flex-col gap-2">
                    <h3 className="text-base xl:text-xl">{t("settings")}</h3>
                    <p className="max-w-md text-xs xl:text-base">
                        {t("settingsDescription")}
                    </p>
                </div>
                <div className="grid w-1/2 gap-4 xl:grid-cols-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">{t("direction")}</p>
                        <Select
                            defaultValue="bg-gradient-to-r"
                            onValueChange={(direction) =>
                                setDirection(direction)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.values(TAILWIND_DIRECTIONS).map(
                                    (direction: string, index) => (
                                        <SelectItem
                                            key={index}
                                            value={direction}
                                            className="text-xs"
                                        >
                                            {t(`directions.${direction}`)}
                                        </SelectItem>
                                    )
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">{t("thirdColor")}</p>
                        <Select
                            defaultValue="false"
                            onValueChange={(active) => {
                                if (active === "false") {
                                    setActiveVia(false);

                                    if (step === "via") {
                                        setStep("from");
                                    }

                                    setVia("");
                                } else {
                                    setActiveVia(true);
                                }
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="false" className="text-xs">
                                    {t("no")}
                                </SelectItem>
                                <SelectItem value="true" className="text-xs">
                                    {t("yes")}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {props.text && (
                        <div className="flex flex-col gap-1 xl:col-span-2">
                            <h3>{t("yourText")}</h3>
                            <Input
                                className="w-full"
                                value={text}
                                onChange={(event) =>
                                    setText(event.target.value)
                                }
                            />
                        </div>
                    )}
                </div>
            </Card>
            <div className="flex gap-4 max-lg:flex-row">
                <div className="flex flex-col gap-2">
                    <Tabs defaultValue="from" className="space-y-5">
                        <div className="flex items-center justify-between gap-4">
                            <TabsList>
                                <TabsTrigger
                                    value="from"
                                    onClick={() => setStep("from")}
                                >
                                    {t("fromColor")}
                                </TabsTrigger>
                                {activeVia && (
                                    <TabsTrigger
                                        value="via"
                                        onClick={() => setStep("via")}
                                    >
                                        {t("viaColor")}
                                    </TabsTrigger>
                                )}
                                <TabsTrigger
                                    value="to"
                                    onClick={() => setStep("to")}
                                >
                                    {t("toColor")}
                                </TabsTrigger>
                            </TabsList>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size={isMobile ? "sm" : "default"}
                                    className="flex items-center gap-1"
                                    disabled={!canUndo}
                                    onClick={undo}
                                >
                                    <Undo className="size-4" />
                                    {t("undo")}
                                </Button>
                                <Button
                                    variant="outline"
                                    size={isMobile ? "sm" : "default"}
                                    className="flex items-center gap-1"
                                    disabled={!canRedo}
                                    onClick={redo}
                                >
                                    <Redo className="size-4" />
                                    {t("redo")}
                                </Button>
                            </div>
                        </div>
                        <TabsContent
                            value="from"
                            className="flex flex-col gap-4"
                        >
                            <div className="flex gap-4 max-lg:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg">
                                        {t("stopPercent")}
                                    </h3>
                                    <p className="text-sm">
                                        {t("stopDescription")}
                                    </p>
                                </div>
                                <StopPercentInput
                                    value={fromStop}
                                    onChange={(event) =>
                                        setFromStop(Number(event.target.value))
                                    }
                                />
                            </div>
                            <ColorSelector step={step} />
                        </TabsContent>
                        <TabsContent
                            value="via"
                            className="flex flex-col gap-4"
                        >
                            <div className="flex gap-4 max-lg:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg">
                                        {t("stopPercent")}
                                    </h3>
                                    <p className="text-sm">
                                        {t("stopDescription")}
                                    </p>
                                </div>
                                <StopPercentInput
                                    value={viaStop}
                                    onChange={(event) =>
                                        setViaStop(Number(event.target.value))
                                    }
                                />
                            </div>
                            <ColorSelector step={step} />
                        </TabsContent>
                        <TabsContent value="to" className="flex flex-col gap-4">
                            <div className="flex gap-4 max-lg:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg">
                                        {t("stopPercent")}
                                    </h3>
                                    <p className="text-sm">
                                        {t("stopDescription")}
                                    </p>
                                </div>
                                <StopPercentInput
                                    value={toStop}
                                    onChange={(event) =>
                                        setToStop(Number(event.target.value))
                                    }
                                />
                            </div>
                            <ColorSelector step={step} />
                        </TabsContent>
                    </Tabs>
                </div>
                <div
                    className={cn(
                        "group h-60 rounded-lg w-full mt-auto mb-4 relative",
                        props.text ? "bg-muted" : getGradient()
                    )}
                >
                    <div className="absolute size-full">
                        <CopyButton gradient={getGradient()} text={text} />
                    </div>
                    {props.text && (
                        <div className="flex size-full items-center justify-center p-4">
                            <h2
                                className={cn(
                                    "text-4xl font-semibold max-w-sm",
                                    getGradient()
                                )}
                            >
                                {text}
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
