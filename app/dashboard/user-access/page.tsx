import { AppHero } from "@/components/layouts";
import UserAccessClient from "./_components/client";
import { prisma } from "@/lib/prisma";

export default async function UserAccessPage() {
  const users = await prisma.user.findMany();
  const roles = await prisma.role.findMany({
    include: {
      permissions: {
        include: {
          permission: true,
        },
      },
    },
  });
  const modules = await prisma.module.findMany({
    include: { permissions: true },
  });
  

  return (
    <div className="min-h-screen h-auto px-10 mb-10">
      <AppHero
        heroModel={{
          title: "Permission Control Center",
          sub_title: "Manage user access to system.",
        }}
      />
      <UserAccessClient users={users} roles={roles} modules={modules} />
    </div>
  );
}
