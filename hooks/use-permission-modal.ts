import { ModuleType } from "@/types/modules-model";
import { create } from "zustand";

//global use hook
interface usePermissionModalStore {
  isOpen: boolean;
  modules: ModuleType[];
  onOpen: (module: ModuleType[]) => void;
  onClose: () => void;
}
export const usePermissionModal = create<usePermissionModalStore>((set) => ({
  isOpen: false,
  modules: [],
  onOpen: (modules: ModuleType[]) => set({ isOpen: true, modules: modules }),
  onClose: () => set({ isOpen: false }),
}));
