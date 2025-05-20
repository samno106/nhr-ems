"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import {
  userResetPasswordSchema,
  UserResetPasswordSchema,
} from "@/schemas";

export async function deleteUser(id:string) {

  if (id === "") {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.user.delete({where:{id:id}})

    await prisma.$disconnect();
    return { success: "User deleted successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again."+error };
  }
}
