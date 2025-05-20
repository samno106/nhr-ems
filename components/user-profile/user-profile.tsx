"use client";

import {
  Calendar,
  CircleFadingPlusIcon,
  Info,
  KeyRound,
  Mail,
  PenBox,
  Settings,
  Trash,
  User2,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserModel, UserType } from "@/types/users-model";
import moment from "moment";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useDeleteUserModal,
  useResetPasswordUserModal,
  useUpdateUserModal,
  useUpdateUserStatusModal,
} from "@/hooks/use-modal";

export const UserProfile = ({ user }: { user: UserType }) => {
  const updateUserModal = useUpdateUserModal();
  const updateUserStatusModal = useUpdateUserStatusModal();
  const resetPasswordUserModal = useResetPasswordUserModal();
  const deleteUserModal = useDeleteUserModal();
                

  return (
    <div className=" flex items-start space-x-4 px-2">
      <div>
        <Avatar className=" bg-neutral-200 size-9 flex justify-center items-center">
          <User2 className=" size-6" />
        </Avatar>
      </div>

      <div className=" flex flex-col">
        <div className=" flex items-center space-x-4">
          <span className=" font-semibold text-md">{user?.fullName}</span>
          <Badge
            className={cn(
              "text-[10px]",
              user?.status === "Active" ? "" : "bg-amber-500 text-gray-800"
            )}
          >
            {user?.status}
          </Badge>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <Mail className=" size-2.5 text-gray-500" strokeWidth={3} />
          <span className=" text-xs text-gray-500 font-medium">
            {user?.email}
          </span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <Calendar className=" size-2.5 text-gray-500" strokeWidth={3} />
          <span className="text-xs text-gray-500 font-medium">
            Joined {moment(user?.createdAt).format("LL")}
          </span>
        </div>
      </div>
      <div className=" ml-auto">
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
              className="cursor-pointer"
              onClick={() => updateUserModal.onOpen(user)}
            >
              <Info className=" size-3.5 text-gray-700" />
              <span>Update info</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => updateUserStatusModal.onOpen(user)}
            >
              <CircleFadingPlusIcon className="size-3.5 text-gray-700" />
              <span>Change Status</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={()=>resetPasswordUserModal.onOpen(user.id)}>
              <KeyRound className="size-3.5 text-gray-700" />
              <span>Reset Password</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={()=>deleteUserModal.onOpen(user.id)}>
              <Trash className="size-3.5 text-red-500" />
              <span className="text-red-500">Delete User</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserProfile;
