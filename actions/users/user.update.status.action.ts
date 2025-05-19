"use server";

import { prisma } from "@/lib/prisma";
import { userUpdateStatusSchema, UserUpdateStatusSchema } from "@/schemas";

export async function updateUserStatus(userSchema: UserUpdateStatusSchema) {
  const result = userUpdateStatusSchema.safeParse(userSchema);

  if (!result.success) {
    return { error: "Data form is invalid" };
  }

  try {
    await prisma.user.update({
      where: { id: userSchema.id },
      data: {
        status: userSchema.status,
      },
    });

    await prisma.$disconnect();
    return { success: "User status changed successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
