"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import { RoleCreateSchema, roleCreateSchema } from "@/schemas";

export async function updateRole(schema: RoleCreateSchema, id: string) {
  const result = roleCreateSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.role.update({
      where: { id: id },
      data: {
        name: schema.name,
        description: schema.description,
      },
    });

    await prisma.$disconnect();
    return { success: "Role updated successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
