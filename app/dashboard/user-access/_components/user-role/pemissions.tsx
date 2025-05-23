"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RolePermissionCard, RoleInfoCard } from "@/components/cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RoleType } from "@/types/roles-model";
import { Info, PlusCircle, Settings, Trash } from "lucide-react";
import PermissionList from "./permission-list";
import { ModuleType } from "@/types/modules-model";
import {
  useDeleteRoleModal,
  useRoleModal,
  useUpdateRoleModal,
} from "@/hooks/use-role-modal";
import { usePermissionModal } from "@/hooks/use-permission-modal";

export const PermissionsTab = ({
  roles,
  modules,
  role,
  roleSelected,
  handleSelectedRole,
}: {
  roles: RoleType[];
  modules: ModuleType[];
  role: RoleType;
  roleSelected: string;
  handleSelectedRole;
}) => {
  const useCreateModal = useRoleModal();
  const useUpateModal = useUpdateRoleModal();
  const useDeleteModal = useDeleteRoleModal();
  const usePermssionCreateModal = usePermissionModal();

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
            onClick={useCreateModal.onOpen}
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
            <h4 className="text-lg font-semibold">{role?.name ?? "--/--"}</h4>
            <p className="mt-1 text-[12px] text-gray-500 font-medium">
              {role?.description ?? "--/--"}
            </p>
            <Badge variant="outline" className="mt-2.5">
              {role?.permissions.length ?? 0} permissions
            </Badge>
          </div>
          <div className="text-right w-20 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 cursor-pointer"
                >
                  <Settings className=" size-4 text-gray-600" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => useUpateModal.onOpen(role?.id, role)}
                  className="cursor-pointer text-xs font-medium"
                >
                  <Info className=" size-3.5 text-gray-700" />
                  <span>Update info</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  disabled={role?.status === "System" ? true : false}
                  onClick={() => useDeleteModal.onOpen(role?.id)}
                  className="text-red-500 cursor-pointer text-xs font-medium"
                >
                  <Trash className="size-3.5 text-red-500" />
                  <span className="text-red-500">Delete Role</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* header */}
        {/* list permission */}
        <div className=" border-t">
          <div className=" flex justify-between items-center px-3 py-2 bg-neutral-50 border-b border-neutral-100">
            <h4 className="text-sm font-semibold ">Permissions</h4>
            {/* <Button
              size="sm"
              variant="outline"
              className=" cursor-pointer"
              onClick={() => usePermssionCreateModal.onOpen(modules)}
            >
              <PlusCircle className=" size-3 " />
              <span className="text-xs">New permission</span>
            </Button> */}
          </div>
          <ScrollArea className="h-[323px]">
            <div className="py-1 px-2">
              <PermissionList
                modules={modules}
                permissions={role?.permissions}
                roleId={role.id}
              />
            </div>
          </ScrollArea>
          <div className="p-2">
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
