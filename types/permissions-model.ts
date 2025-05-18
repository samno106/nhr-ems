import { ModuleType } from "./modules-model";

export type PermissionType = {
  id: string;
  name: string;
  moduleId: string;
  slug: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};
