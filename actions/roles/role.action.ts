"use server";

import { prisma } from "@/lib/prisma";

export async function getRole() {
  try {
    const roles = await prisma.role.findMany({
        include: {
          permissions: {
            include: {
              permission: true,
            },
          },
        },
      });

    await prisma.$disconnect();
    return await Promise.resolve(roles);
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
