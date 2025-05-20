import { RoleCreateSchema } from "@/schemas";
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

//update role hook
interface useUpdateRoleModalStore {
  isOpen: boolean;
  id: string;
  role: RoleCreateSchema;
  onOpen: (id: string, role: RoleCreateSchema) => void;
  onClose: () => void;
}
export const useUpdateRoleModal = create<useUpdateRoleModalStore>((set) => ({
  isOpen: false,
  id: "",
  role: {},
  onOpen: (id: string, role: RoleCreateSchema) =>
    set({ isOpen: true, id: id, role: role }),
  onClose: () => set({ isOpen: false }),
}));

interface useDeleteRoleModalStore {
  isOpen: boolean;
  id: string;
  onOpen: (id: string) => void;
  onClose: () => void;
}
export const useDeleteRoleModal = create<useDeleteRoleModalStore>((set) => ({
  isOpen: false,
  id: "",
  onOpen: (id: string) => set({ isOpen: true, id: id }),
  onClose: () => set({ isOpen: false }),
}));
