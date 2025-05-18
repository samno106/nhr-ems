import { PermissionType } from "./permissions-model";

export type ModuleType = {
  id: string;
  name: string;
  status: boolean;
  permissions: PermissionType[];
  createdAt: Date;
  updatedAt: Date;
};
