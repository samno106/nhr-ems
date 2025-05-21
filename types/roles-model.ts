import { RolePermissionsModel } from "./permissions-model";

export type RoleType = {
  id: string;
  name: string;
  description: string;
  status: string;
  permissions: RolePermissionsModel[];
  createdAt: Date;
  updatedAt: Date;
};

export interface RoleModels {
  roles: RoleType[] | [];
}

export interface RoleModel {
  role: RoleType;
}
