"use server";

import { prisma } from "@/lib/prisma";

export async function getPermissionByRole(roleId: string) {
  try {
    const permissions = await prisma.permission.findMany({
      where: {
        roles: {
          some: {
            roleId: roleId,
          },
        },
      },
      select: {
        slug: true,
      },
    });

    await prisma.$disconnect();
    return { permissions: permissions };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
