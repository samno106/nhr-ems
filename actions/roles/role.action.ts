"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";

export async function getRole() {
  const session = getSession();
  try {
    const role = await prisma.role.findFirst({
      where: {
        id: (await session)?.user?.roleId,
      },
      include: {
        permissions: {
          include: {
            permission: {
              include: {
                module: true,
              },
            },
          },
        },
      },
    });

    await prisma.$disconnect();
    return { role: role };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
