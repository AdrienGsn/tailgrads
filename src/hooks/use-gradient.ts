import { useContext } from "react";

import GradientContext from "@/context/gradient-context";

const useGradient = () => {
    const context = useContext(GradientContext);

    return context;
};

export default useGradient;
