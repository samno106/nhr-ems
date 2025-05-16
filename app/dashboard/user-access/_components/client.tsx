"use client";

import { UserType } from "@/types/users-model";
import UserData from "./user-data/user-data";
import UserRole from "./user-role/user-role";
import { RoleType } from "@/types/roles-model";
import { useState } from "react";
import { useSession } from "next-auth/react";



export const UserAccessClient = ({ users, roles }:{
  users:UserType[],
  roles:RoleType[]
}) => {

  const {data: session} = useSession();

  const [userSelected, setUserSelected] = useState<string>(session.user.id);

  const handleSelectedUser=(userId:string)=>{
      setUserSelected(userId);
  }

  return (
    <div className="flex items-start gap-5 mt-8  rounded min-h-screen h-auto">
      <UserData users={users} userSelected={userSelected} 
      handleSelectedUser={handleSelectedUser}/>
      <UserRole user={users.filter((user)=>user.id === userSelected)[0]} roles={roles}/>
    </div>
  );
};

export default UserAccessClient;
