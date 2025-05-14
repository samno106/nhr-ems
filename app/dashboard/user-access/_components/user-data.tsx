"use client";

import { UserCard } from "@/components/cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserModels } from "@/types/users-model";
import { Plus, Search, Users2 } from "lucide-react";

export const UserData = ({ users }: UserModels) => {
  return (
    <div className="w-[35%] min-h-svh border border-neutral-200 rounded bg-neutral-50 p-3">
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
        <Search className=" size-4 absolute left-2 top-2.5" />
        <Input placeholder="Serach users..." className="pl-8 h-10" />
      </div>
      <div className="mt-3 w-full">
        <Button variant="outline" className="w-full cursor-pointer">
          <Plus />
          <span>New user</span>
        </Button>
      </div>
      <div className="mt-5 space-y-5">
        {users
          ? users.map((user, index) => (
              <UserCard
                key={index}
                user={{
                  id: user.id,
                  name: user.firstName + " " + user.lastName,
                  email: user.email,
                  profile: "",
                  status: user.status,
                }}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default UserData;
