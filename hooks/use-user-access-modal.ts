import { create } from "zustand";

interface useUserAccessModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useUserAccessModal = create<useUserAccessModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
