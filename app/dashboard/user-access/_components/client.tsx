"use client";

import { UserModels } from "@/types/users-model";
import UserData from "./user-data";
import UserRole from "./user-role";

export const UserAccessClient = ({ users }: UserModels) => {
  return (
    <div className="flex items-start gap-5 mt-8  rounded min-h-screen h-auto">
      <UserData users={users} />
      <UserRole />
    </div>
  );
};

export default UserAccessClient;
