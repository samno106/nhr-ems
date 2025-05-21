import { z } from "zod";

export const roleCreateSchema = z.object({
  name: z.string({ required_error: "Fullname is required" }).min(1),
  description: z.string(),
});

export type RoleCreateSchema = z.infer<typeof roleCreateSchema>;

export const roleAssignPermissionSchema = z.object({
  roleId: z.string({ required_error: "role is required" }).min(1),
  permissionId: z.string({ required_error: "permission is required" }).min(1),
  assignedBy: z.string(),
});

export type RoleAssignPermissionSchema = z.infer<
  typeof roleAssignPermissionSchema
>;
