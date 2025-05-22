import { ModuleModel, ModuleType } from "./modules-model";

export type PermissionType = {
  id: string;
  name: string;
  moduleId: string;
  slug: string;
  description: string;
  status: boolean;
  module:ModuleModel,
  createdAt: Date;
  updatedAt: Date;
};

export interface RolePermissionsModel {
  permission: PermissionType;
  id: string;
  roleId: string;
  permissionId: string;
  assignedAt: Date;
  assignedBy: string | null;
}

