import { RoleType } from "@/types/roles-model";

import { create } from "zustand";

export type Action = {
  module: string;
  permission: string;
  can: (role: RoleType, module: string, permission: string) => boolean;
};

const useCan = create<Action>((set) => ({
  module: "",
  permission: "",
  can: (role, module, permission) => {
    if (
      role?.permissions.filter(
        (per) =>
          per.permission.module.name === module &&
          per.permission.slug === permission
      ).length > 0
    ) {
      return true;
    }
    return false;
  },
}));

export default useCan;
