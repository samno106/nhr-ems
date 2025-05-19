"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import {
  userAccessSchema,
  userUpdateInfoSchema,
  UserUpdateInfoSchema,
} from "@/schemas";

export async function updateUserInfo(userSchema: UserUpdateInfoSchema) {
  const result = userUpdateInfoSchema.safeParse(userSchema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.user.update({
      where: { id: userSchema.id },
      data: {
        fullName: userSchema.fullName,
        email: userSchema.email,
      },
    });

    await prisma.$disconnect();
    return { success: "User info updated successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
