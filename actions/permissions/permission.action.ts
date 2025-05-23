import { permissions } from './../../prisma/seed/data';
"use server";

import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";

export async function getPermission() {
  const session = getSession();
  try {
    const permissions = await prisma.permission.findMany({
    where:{
        roles:{
            some:{
                roleId: (await session)?.user?.roleId
            }
        }
        },
        select:{
            slug:true
        }
    });

    await prisma.$disconnect();
    return { permissions: permissions };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
