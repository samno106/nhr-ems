"use client";

import { RolePermissionCard } from "@/components/cards";
import RoleInfoCard from "@/components/cards/roles/role-info-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RoleType } from "@/types/roles-model";
import { UserType } from "@/types/users-model";
import { Pen, PlusCircle } from "lucide-react";

export const PermissionsTab = ({
  user,
  roles,
  role,
  roleSelected,
  handleSelectedRole,
}: {
  user: UserType;
  roles: RoleType[];
  role: RoleType;
  roleSelected: string;
  handleSelectedRole;
}) => {
  const onSelectedRole = (id: string) => {
    handleSelectedRole(id);
  };

  return (
    <div className=" flex items-start border-t min-h-full">
      <div className="p-3 w-[40%] min-h-full ">
        <div className=" flex justify-between items-center">
          <h4 className=" font-semibold text-sm">Roles</h4>
          <Button
            size="icon"
            variant={"ghost"}
            className=" hover:cursor-pointer"
          >
            <PlusCircle className="size-4" />
          </Button>
        </div>
        <div className="mt-3 space-y-3">
          {roles &&
            roles.map((role, r) => (
              <div onClick={() => onSelectedRole(role.id)} key={r}>
                <RolePermissionCard
                  role={role}
                  selected={role.id === roleSelected ? true : false}
                />
              </div>
            ))}
        </div>
      </div>
      <div className=" w-[100%] border-l">
        {/* header */}
        <div className="px-3 py-4 flex justify-between items-start ">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">{role.name}</h4>
            <p className="mt-1 text-[12px] text-gray-500 font-medium">
              {role.description}
            </p>
            <Badge variant="outline" className="mt-2.5">
              14 permissions
            </Badge>
          </div>
          <div className=" text-right w-20 ">
            <Button size={"sm"} variant={"outline"}>
              <Pen className=" size-3" />
              <span>Edit</span>
            </Button>
          </div>
        </div>
        {/* header */}
        {/* list permission */}
        <div className="px-2 pt-2 border-t">
          <div className=" flex justify-between items-center px-1 py-2">
            <h4 className="text-sm font-medium ">Permissions</h4>
            <Button size="sm" variant="outline">
              <PlusCircle className=" size-3" />
              <span className="text-xs">New permission</span>
            </Button>
          </div>
          <ScrollArea className="h-[295px]">
            <div className="p-4">
              {Array.from({ length: 20 }).map((tag, i) => (
                <div key={i} className="text-sm">
                  A
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="py-2">
            <RoleInfoCard
              title={"About Role"}
              desc={
                "System roles cannot be modified. Create a custom role to define custom permissions."
              }
            />
          </div>
        </div>
        {/* list permission */}
      </div>
    </div>
  );
};

export default PermissionsTab;
