import { UserUpdateInfoSchema, UserUpdateStatusSchema } from "@/schemas";
import { RoleType } from "@/types/roles-model";

import { create } from "zustand";

//global use hook
interface useModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useModal = create<useModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

interface useUpdateModalStore {
  isOpen: boolean;
  id: string;
  onOpen: (id: string) => void;
  onClose: () => void;
}

export const useDeleteUserModal = create<useUpdateModalStore>((set) => ({
  isOpen: false,
  id: "",
  onOpen: (data: string) => set({ isOpen: true, id: data }),
  onClose: () => set({ isOpen: false }),
}));

//user use hook
interface useUserModalStore {
  isOpen: boolean;
  roles: RoleType[];
  onOpen: (roles: RoleType[]) => void;
  onClose: () => void;
}

export const useUserAccessModal = create<useUserModalStore>((set) => ({
  isOpen: false,
  roles: [],
  onOpen: (data: RoleType[]) => set({ isOpen: true, roles: data }),
  onClose: () => set({ isOpen: false }),
}));

interface useUpdateUserModalStore {
  isOpen: boolean;
  user: UserUpdateInfoSchema;
  onOpen: (user: UserUpdateInfoSchema) => void;
  onClose: () => void;
}

export const useUpdateUserModal = create<useUpdateUserModalStore>((set) => ({
  isOpen: false,
  user: {},
  onOpen: (data: UserUpdateInfoSchema) => set({ isOpen: true, user: data }),
  onClose: () => set({ isOpen: false }),
}));

interface useUpdateUserStatusModalStore {
  isOpen: boolean;
  user: UserUpdateStatusSchema;
  onOpen: (user: UserUpdateStatusSchema) => void;
  onClose: () => void;
}

export const useUpdateUserStatusModal = create<useUpdateUserStatusModalStore>(
  (set) => ({
    isOpen: false,
    user: {},
    onOpen: (data: UserUpdateStatusSchema) => set({ isOpen: true, user: data }),
    onClose: () => set({ isOpen: false }),
  })
);

export const useResetPasswordUserModal = create<useUpdateModalStore>(
  (set) => ({
    isOpen: false,
    id: "",
    onOpen: (data: string) => set({ isOpen: true, id: data }),
    onClose: () => set({ isOpen: false }),
  })
);