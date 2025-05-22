"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheckIcon, ShieldUserIcon } from "lucide-react";
import RolesTab from "./roles";
import PermissionsTab from "./pemissions";
import { UserType } from "@/types/users-model";
import { RoleType } from "@/types/roles-model";
import { ModuleType } from "@/types/modules-model";

export const UserRole = ({
  user,
  roles,
  modules,
  role,
  roleSelected,
  handleSelectedRole,
}: {
  user: UserType;
  roles: RoleType[];
  modules: ModuleType[];
  role: RoleType;
  roleSelected: string;
  handleSelectedRole;
}) => {

  return (
    <div className="w-[65%] min-h-svh max-h-svh border border-neutral-200 rounded  pt-3">
      {/* tab */}
      <div>
        <Tabs defaultValue="user_role" className="w-full">
          <TabsList className="h-10 mx-3">
            <TabsTrigger value="user_role" className="py-3 px-8">
              <ShieldUserIcon strokeWidth={2} />
              <span className="text-xs">User Role</span>
            </TabsTrigger>
            <TabsTrigger value="role_permission" className="py-3 px-8">
              <ShieldCheckIcon strokeWidth={2} />
              <span className="text-xs">Role Permission</span>
            </TabsTrigger>
          </TabsList>
          <div className="pt-2 w-full">
            <TabsContent value="user_role">
             
              <RolesTab user={user} roles={roles} />
            </TabsContent>
            <TabsContent value="role_permission">
              <PermissionsTab
                roles={roles}
                modules={modules}
                role={role}
                roleSelected={roleSelected}
                handleSelectedRole={handleSelectedRole}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {/* tab */}
    </div>
  );
};

export default UserRole;
