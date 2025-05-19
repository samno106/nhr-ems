"use client";

import { UserCard } from "@/components/cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserAccessModal } from "@/hooks/use-modal";
import { RoleType } from "@/types/roles-model";
import { UserType } from "@/types/users-model";
import { PlusCircle, Search, Users2 } from "lucide-react";
import { useState } from "react";

export const UserData = ({
  users,
  roles,
  userSelected,
  handleSelectedUser,
}: {
  users: UserType[];
  roles: RoleType[];
  userSelected: string;
  handleSelectedUser;
}) => {
  const userAccessModal = useUserAccessModal();

  const [searchUser, setSearchUser] = useState("");

  const filteredUsers = users.filter((item) =>
    item.fullName.toLowerCase().includes(searchUser.toLowerCase())
  );

  const onSelectedUser = (id: string) => {
    handleSelectedUser(id);
  };

  return (
    <div className="w-[35%] min-h-svh border border-neutral-200 rounded  p-3">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users2 className=" size-4" />
          <h3 className="text-md font-medium">Users</h3>
        </div>
        <div>
          <Badge variant="outline" className="bg-white">
            {users ? users.length : 0} users
          </Badge>
        </div>
      </div>
      <div className="mt-4 relative">
        <Search className=" size-4 absolute left-2 top-3" />
        <Input
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Serach users..."
          className="pl-8 h-10 text-xs"
        />
      </div>
      <div className="mt-3 w-full">
        <Button
          onClick={() => userAccessModal.onOpen(roles)}
          variant="outline"
          className="w-full cursor-pointer text-xs"
        >
          <PlusCircle className=" size-3.5" />
          <span>New user</span>
        </Button>
      </div>
      <div className="mt-5 space-y-3">
        {filteredUsers &&
          filteredUsers.map((user, index) => (
            <div key={index} onClick={() => onSelectedUser(user.id)}>
              <UserCard
                user={user}
                selected={user.id === userSelected ? true : false}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserData;
