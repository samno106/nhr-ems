import { RoleType } from "@/types/roles-model";
import { create } from "zustand";

interface useModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface useUserModalStore {
  isOpen: boolean;
  roles:RoleType[];
  onOpen: (roles:RoleType[]) => void;
  onClose: () => void;
}

export const useUserAccessModal = create<useUserModalStore>((set) => ({
  isOpen: false,
  roles:[],
  onOpen: (data:RoleType[]) => set({ isOpen: true, roles:data }),
  onClose: () => set({ isOpen: false }),
}));
