"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import { RoleCreateSchema, roleCreateSchema } from "@/schemas";

export async function createRole(schema: RoleCreateSchema) {
  const result = roleCreateSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.role.create({
      data: {
        name: schema.name,
        description:schema.description,
      },
    });

    await prisma.$disconnect();
    return { success: "Role created successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
