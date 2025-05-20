"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import { UserAccessSchema, userAccessSchema } from "@/schemas";

export async function createUser(schema: UserAccessSchema) {
  const result = userAccessSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.user.create({
      data: {
        fullName: schema.fullName,
        email: schema.email,
        password: (await hashedPassword(schema.password)).toString(),
        roleId: schema.roleId,
        status: "Active",
      },
    });

    await prisma.$disconnect();
    return { success: "User created successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
