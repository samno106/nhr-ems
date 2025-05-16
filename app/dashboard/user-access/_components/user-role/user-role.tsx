"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheckIcon, ShieldUserIcon, UserLockIcon } from "lucide-react";
import RolesTab from "./roles";
import PermissionsTab from "./pemissions";
import { UserModel, UserType } from "@/types/users-model";
import { RoleType } from "@/types/roles-model";

export const UserRole = ({ user, roles }: {
  user:UserType,
  roles:RoleType[]
}) => {
  return (
    <div className="w-[65%] min-h-svh border border-neutral-200 rounded  p-3">
     {/* tab */}
     <div className="pb-2">
     <Tabs defaultValue="user_role" className="w-full">
        <TabsList className="h-10">
          <TabsTrigger value="user_role" className="py-3 px-8">
            <ShieldUserIcon strokeWidth={2} />
            <span className="text-xs">User Role</span>
          </TabsTrigger>
          <TabsTrigger value="role_permission" className="py-3 px-8">
            <ShieldCheckIcon strokeWidth={2} />
            <span className="text-xs">Role Permission</span>
          </TabsTrigger>
        </TabsList>
        <div className="py-2 w-full">
          <TabsContent value="user_role">
            <RolesTab user={user} roles={roles}/>
          </TabsContent>
          <TabsContent value="role_permission">
            <PermissionsTab/>
          </TabsContent>
        </div>
      </Tabs>
     </div>
     {/* tab */}
    </div>
  );
};

export default UserRole;
