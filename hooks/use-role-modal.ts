import { create } from "zustand";

//global use hook
interface useRoleModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const useRoleModal = create<useRoleModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
  