import { create } from "zustand";

type CopyModalStore = {
    isOpen: boolean;
    gradient?: string;
    text?: string;
    onOpen: (gradient: string, text?: string) => void;
    onClose: () => void;
};

const useCopyModal = create<CopyModalStore>((set) => ({
    isOpen: false,
    gradient: undefined,
    text: undefined,
    onOpen: (gradient: string, text?: string) =>
        set({ isOpen: true, gradient, text }),
    onClose: () => set({ isOpen: false, gradient: undefined, text: undefined }),
}));

export default useCopyModal;
