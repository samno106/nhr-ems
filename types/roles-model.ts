export type RoleType = {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface RoleModels {
  roles: RoleType[] | [];
}

export interface RoleModel {
  role: RoleType;
}
