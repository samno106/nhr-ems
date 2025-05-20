"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import {
  userResetPasswordSchema,
  UserResetPasswordSchema,
} from "@/schemas";

export async function resetUserPassword(userSchema: UserResetPasswordSchema, id:string) {
  const result = userResetPasswordSchema.safeParse(userSchema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.user.update({
      where: { id: id },
      data: {
        password: (await hashedPassword(userSchema.newPassword)).toString(),
      },
    });

    await prisma.$disconnect();
    return { success: "Password reseted successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again."+error };
  }
}
