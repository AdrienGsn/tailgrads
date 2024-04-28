import useHistory from "@/hooks/use-history";
import { PropsWithChildren, createContext } from "react";

type GradientContextProps = {
    direction: string;
    setDirection: (direction: string) => void;
    from: string;
    setFrom: (from: string) => void;
    fromStop?: number;
    setFromStop: (stop?: number) => void;
    via?: string;
    setVia: (via: string) => void;
    viaStop?: number;
    setViaStop: (stop?: number) => void;
    to: string;
    setTo: (to: string) => void;
    toStop?: number;
    setToStop: (stop?: number) => void;
    undo: () => void;
    canUndo: boolean;
    redo: () => void;
    canRedo: boolean;
    randomize: () => void;
};

const GradientContext = createContext<GradientContextProps>({
    direction: "bg-gradient-to-r",
    setDirection: (direction) => {},
    from: "from-pink-500",
    setFrom: (from) => {},
    fromStop: undefined,
    setFromStop: (stop) => {},
    via: undefined,
    setVia: (via) => {},
    viaStop: undefined,
    setViaStop: (stop) => {},
    to: "to-yellow-500",
    setTo: (to) => {},
    toStop: undefined,
    setToStop: (stop) => {},
    undo: () => {},
    canUndo: false,
    redo: () => {},
    canRedo: false,
    randomize: () => {},
});

export const GradientProvider = (props: PropsWithChildren) => {
    const { state, set, undo, canUndo, redo, canRedo, save } = useHistory({
        direction: "bg-gradient-to-r",
        from: "from-pink-500",
        fromStop: 0,
        via: "",
        viaStop: 0,
        to: "to-yellow-500",
        toStop: 0,
    });

    const direction = state.direction;

    const setDirection = (direction: string) => {
        set({ ...state, direction });

        save();
    };

    const from = state.from;

    const setFrom = (from: string) => {
        set({ ...state, from });

        save();
    };

    const fromStop = state.fromStop;

    const setFromStop = (stop?: number) => {
        set({ ...state, fromStop: stop ?? 0 });

        save();
    };

    const via = state.via;

    const setVia = (via: string) => {
        set({ ...state, via: via ?? "" });

        save();
    };

    const viaStop = state.viaStop;

    const setViaStop = (stop?: number) => {
        set({ ...state, viaStop: stop ?? 0 });

        save();
    };

    const to = state.to;

    const setTo = (to: string) => {
        set({ ...state, to });

        save();
    };

    const toStop = state.toStop;

    const setToStop = (stop?: number) => {
        set({ ...state, toStop: stop ?? 0 });

        save();
    };

    const randomize = () => {
        // TODO: random gradient
        // set({ ...state, lightColors: newLightColors, darkColors: newDarkColors });
        // save();
    };

    return (
        <GradientContext.Provider
            value={{
                direction,
                setDirection,
                from,
                setFrom,
                fromStop,
                setFromStop,
                via,
                setVia,
                viaStop,
                setViaStop,
                to,
                setTo,
                toStop,
                setToStop,
                undo,
                canUndo,
                redo,
                canRedo,
                randomize,
            }}
        >
            {props.children}
        </GradientContext.Provider>
    );
};

export default GradientContext;
