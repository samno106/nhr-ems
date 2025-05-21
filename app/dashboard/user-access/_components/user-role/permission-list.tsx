"use client";

import { ModuleCard } from "@/components/cards";
import { ModuleType } from "@/types/modules-model";
import { RolePermissionsModel } from "@/types/permissions-model";

export const PermissionList = ({
  modules,
  permissions,
  roleId,
}: {
  modules: ModuleType[];
  permissions: RolePermissionsModel[];
  roleId: string;
}) => {
  return (
    <div>
      {modules.map((module, i) => (
        <ModuleCard
          key={i}
          module={module}
          permissions={permissions}
          roleId={roleId}
        />
      ))}
    </div>
  );
};

export default PermissionList;
