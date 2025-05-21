"use server";

import { prisma } from "@/lib/prisma";

export async function changeUserRole(id: string, roleId: string) {
  if (id === "") {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.user.update({
      where: { id: id },
      data: {
        roleId: roleId,
      },
    });

    await prisma.$disconnect();
    return { success: "User role changed successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." + error };
  }
}
