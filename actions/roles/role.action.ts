"use server";

import { prisma } from "@/lib/prisma";

export async function getRoles() {
  try {
    const roles = await prisma.role.findMany({
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
    return { roles: roles };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}

export async function getRoleById(id: string) {
  try {
    const role = await prisma.role.findFirst({
      where: {
        id: id,
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
