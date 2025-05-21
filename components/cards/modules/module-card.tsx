"use client";

import { Badge } from "@/components/ui/badge";
import { ModuleType } from "@/types/modules-model";
import PermissionModuleCard from "../permissions/permission-module-card";
import { RolePermissionsModel } from "@/types/permissions-model";

export const ModuleCard = ({
  module,
  permissions,
  roleId,
}: {
  module: ModuleType;
  permissions: RolePermissionsModel[];
  roleId: string;
}) => {
  return (
    <div className="py-1 p-2">
      <div className="flex justify-between items-center py-2.5 pr-1 ">
        <h3 className="text-sm font-medium">{module.name}</h3>

        <Badge variant="outline">
          {
            permissions.filter(
              (perms) => perms.permission.moduleId === module.id
            ).length
          }
          <span className=" mx-1">of</span>
          {module.permissions.length}
        </Badge>
      </div>
      <div className="py-1.5 space-y-2.5">
        {module.permissions.map((permission, i) => (
          <PermissionModuleCard
            name={permission.name}
            desc={permission.description}
            roleId={roleId}
            permissionId={permission.id}
            rolePermissionId={
              permissions.filter(
                (pers) => pers.permissionId === permission.id
              )[0]?.id
            }
            selected={
              permissions.filter((pers) => pers.permissionId === permission.id)
                .length > 0
                ? true
                : false
            }
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ModuleCard;
