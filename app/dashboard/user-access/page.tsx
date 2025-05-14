import { AppHero } from "@/components/layouts";
import UserAccessClient from "./_components/client";
import { prisma } from "@/lib/prisma";

export default async function UserAccessPage() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      roleId: true,
      status: true,
      createdAt: true,
    },
  });

  return (
    <div className="min-h-screen h-auto px-10 mb-10">
      <AppHero
        heroModel={{
          title: "Permission Control Center",
          sub_title: "Manage user access to system.",
        }}
      />
      <UserAccessClient users={users} />
    </div>
  );
}
