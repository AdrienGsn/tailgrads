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
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ColorSelector } from "./color-selector";
import { CopyButton } from "./copy-button";
import { StopPercentInput } from "./stop-percent-input";

const TAILWIND_DIRECTIONS = {
    "bg-gradient-to-t": "To Top",
    "bg-gradient-to-tr": "To Top Right",
    "bg-gradient-to-r": "To Right",
    "bg-gradient-to-br": "To Bottom Right",
    "bg-gradient-to-b": "To Bottom",
    "bg-gradient-to-bl": "To Bottom Left",
    "bg-gradient-to-l": "To Left",
    "bg-gradient-to-tl": "To Top Left",
};

export type GradientSelectorProps = {
    text?: boolean;
};

export const GradientSelector = (props: GradientSelectorProps) => {
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
                    <h3 className="text-base xl:text-xl">Settings</h3>
                    <p className="max-w-md text-xs xl:text-base">
                        Add the third color if needed and set the gradient
                        direction if you're looking for a linear or radial
                        gradient.
                    </p>
                </div>
                <div className="grid w-1/2 gap-4 xl:grid-cols-2">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Direction</p>
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
                                {Object.keys(TAILWIND_DIRECTIONS).map(
                                    (direction: string, index) => (
                                        <SelectItem
                                            key={index}
                                            value={direction}
                                            className="text-xs"
                                        >
                                            {
                                                TAILWIND_DIRECTIONS[
                                                    direction as keyof typeof TAILWIND_DIRECTIONS
                                                ]
                                            }
                                        </SelectItem>
                                    )
                                )}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">Third Color</p>
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
                                    No
                                </SelectItem>
                                <SelectItem value="true" className="text-xs">
                                    Yes
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {props.text && (
                        <div className="flex flex-col gap-1 xl:col-span-2">
                            <h3>Your Text</h3>
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
                                    From Color
                                </TabsTrigger>
                                {activeVia && (
                                    <TabsTrigger
                                        value="via"
                                        onClick={() => setStep("via")}
                                    >
                                        Via Color
                                    </TabsTrigger>
                                )}
                                <TabsTrigger
                                    value="to"
                                    onClick={() => setStep("to")}
                                >
                                    To Color
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
                                    Undo
                                </Button>
                                <Button
                                    variant="outline"
                                    size={isMobile ? "sm" : "default"}
                                    className="flex items-center gap-1"
                                    disabled={!canRedo}
                                    onClick={redo}
                                >
                                    <Redo className="size-4" />
                                    Redo
                                </Button>
                            </div>
                        </div>
                        <TabsContent
                            value="from"
                            className="flex flex-col gap-4"
                        >
                            <div className="flex gap-4 max-lg:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg">Stop Percent</h3>
                                    <p className="text-sm">
                                        Set the percent of the color
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
                                    <h3 className="text-lg">Stop Percent</h3>
                                    <p className="text-sm">
                                        Set the percent of the color
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
                                    <h3 className="text-lg">Stop Percent</h3>
                                    <p className="text-sm">
                                        Set the percent of the color
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
