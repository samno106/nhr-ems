"use client";

import RoleCard from "@/components/cards/roles/role-card";
import RoleInfoCard from "@/components/cards/roles/role-info-cord";
import { Badge } from "@/components/ui/badge";
import UserProfile from "@/components/user-profile/user-profile";
import { RoleModels, RoleType } from "@/types/roles-model";
import { UserModel, UserType } from "@/types/users-model";

export const RolesTab = ({
  user,
  roles,
}: {
  user: UserType;
  roles: RoleType[];
}) => {
  return (
    <div className="py-2 ">
      <div className="border-b pb-5">
        <UserProfile user={user} />
      </div>
      <div className="py-5 px-2">
        <div className=" flex items-center justify-between">
          <span className="text-sm font-medium">Assigned Role</span>
          <Badge variant="outline">1 of {roles&&roles.length} roles assigned</Badge>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-5">
          {roles && roles.map((role, r) => <RoleCard key={r} role={role} selected={role.id === user.roleId?true:false} />)}
        </div>
        <div className="mt-5">
          <RoleInfoCard />
        </div>
      </div>
    </div>
  );
};

export default RolesTab;
