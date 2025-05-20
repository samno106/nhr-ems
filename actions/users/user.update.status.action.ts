"use server";

import { prisma } from "@/lib/prisma";
import { userUpdateStatusSchema, UserUpdateStatusSchema } from "@/schemas";

export async function updateUserStatus(schema: UserUpdateStatusSchema) {
  const result = userUpdateStatusSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Data form is invalid" };
  }

  try {
    await prisma.user.update({
      where: { id: schema.id },
      data: {
        status: schema.status,
      },
    });

    await prisma.$disconnect();
    return { success: "User status changed successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
