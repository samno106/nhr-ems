import { PermissionType } from "./permissions-model";

export type ModuleType = {
  id: string;
  name: string;
  status: boolean;
  permissions: PermissionType[];
  createdAt: Date;
  updatedAt: Date;
};

export type ModuleModel = {
  id: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};
