export type PermissionType = {
  id: string;
  name: string;
  moduleId: string;
  slug: string;
  description: string;
  status: boolean;
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
