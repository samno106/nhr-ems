"use client";

import { UserType } from "@/types/users-model";
import UserData from "./user-data/user-data";
import UserRole from "./user-role/user-role";
import { RoleType } from "@/types/roles-model";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { UserAccessSkeleton } from "@/components/skeletons";

export const UserAccessClient = ({
  users,
  roles,
}: {
  users: UserType[];
  roles: RoleType[];
}) => {
  const { data: session, status } = useSession();

  const [userSelected, setUserSelected] = useState<string>(session?.user?.id);
  const [roleSelected, setRoleSelected] = useState<string>(
    session?.user?.roleId
  );

  const handleSelectedUser = (userId: string) => {
    setUserSelected(userId);
  };

  const handleSelectedRole = (roleId: string) => {
    setRoleSelected(roleId);
  };

  useEffect(() => {
    if (status === "authenticated") {
      setUserSelected(session?.user?.id);
      setRoleSelected(session?.user?.roleId);
    }
  }, [status]);

  if (status === "loading") return <UserAccessSkeleton />;

  return (
    <div className="flex items-start gap-5 mt-8  rounded min-h-screen h-auto">
      <UserData
        users={users}
        userSelected={userSelected}
        handleSelectedUser={handleSelectedUser}
      />
      <UserRole
        user={users.filter((user) => user.id === userSelected)[0]}
        roleSelected={roleSelected}
        handleSelectedRole={handleSelectedRole}
        roles={roles}
        role={roles.filter((role) => role.id === roleSelected)[0]}
      />
    </div>
  );
};

export default UserAccessClient;
