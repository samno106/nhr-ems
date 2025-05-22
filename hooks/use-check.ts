import { getRole } from "@/actions";
import { RoleType } from "@/types/roles-model";

export const useCheck = async (module: string, permission: string) => {
  const { role } = await getRole();

  if (
    role.permissions
      .filter((pers) => pers.permission.module.name === module)
      .filter((per) => per.permission.slug === permission).length > 0
  ) {
    return true;
  } else {
    return false;
  }
};
