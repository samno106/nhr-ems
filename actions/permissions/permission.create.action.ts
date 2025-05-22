"use server";

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { createPermissionSchema, CreatePermissionSchema } from "@/schemas";

export async function createPermission(schema: CreatePermissionSchema) {
  const result = createPermissionSchema.safeParse(schema);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    await prisma.permission.create({
      data: {
        name: schema.name,
        slug:slugify(schema.name),
        description: schema.description,
        moduleId: schema.moduleId,
      },
    });

    await prisma.$disconnect();
    return { success: "Permission created successfully" };
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}
