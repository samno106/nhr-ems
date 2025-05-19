"use client";

import { RoleCard } from "@/components/cards";
import RoleInfoCard from "@/components/cards/roles/role-info-card";
import { Badge } from "@/components/ui/badge";
import UserProfile from "@/components/user-profile/user-profile";
import { RoleType } from "@/types/roles-model";
import { UserType } from "@/types/users-model";

export const RolesTab = ({
  user,
  roles,
}: {
  user: UserType;
  roles: RoleType[];
}) => {
  return (
    <div className="pt-4 border-t">
      <div className="border-b pb-5 px-2">
        <UserProfile user={user} />
      </div>
      <div className="py-5 px-4">
        <div className=" flex items-center justify-between">
          <span className="text-sm font-medium">Assigned Role</span>
          <Badge variant="outline">
            1 of {roles && roles.length} roles assigned
          </Badge>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-5">
          {roles &&
            roles.map((role, r) => (
              <RoleCard
                key={r}
                role={role}
                selected={role.id === user?.roleId ? true : false}
              />
            ))}
        </div>
        <div className="mt-5">
          <RoleInfoCard
            title={"About User Roles"}
            desc="A user's permission as determined by their assigned roles. Each role
          contain a set of permissions that grant access to defferent parts of
          the system"
          />
        </div>
      </div>
    </div>
  );
};

export default RolesTab;
