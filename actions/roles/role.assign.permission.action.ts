"use server";

import { prisma } from "@/lib/prisma";
import {
  RoleAssignPermissionSchema,
  roleAssignPermissionSchema,
} from "@/schemas";

export async function assignPermission(schema: RoleAssignPermissionSchema) {
  const result = roleAssignPermissionSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.rolePermission.create({
      data: {
        roleId: schema.roleId,
        permissionId: schema.permissionId,
        assignedBy: schema.assignedBy,
      },
    });

    await prisma.$disconnect();
    return { success: "Permission assigned to role successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}

export async function unAssignPermission(id: string) {
  if (id === "") {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.rolePermission.delete({
      where: { id: id },
    });

    await prisma.$disconnect();
    return { success: "Permission removed from role successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
