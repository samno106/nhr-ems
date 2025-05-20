"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import {
  userAccessSchema,
  userUpdateInfoSchema,
  UserUpdateInfoSchema,
} from "@/schemas";

export async function updateUserInfo(schema: UserUpdateInfoSchema) {
  const result = userUpdateInfoSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.user.update({
      where: { id: schema.id },
      data: {
        fullName: schema.fullName,
        email: schema.email,
      },
    });

    await prisma.$disconnect();
    return { success: "User info updated successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
