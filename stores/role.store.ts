
import { getRole } from "@/actions";
import { prisma } from "@/lib/prisma";
import { RoleType } from "@/types/roles-model";
import { create } from "zustand";



export type State={
    data:RoleType[],
}

export type Action={
    fetchData: ()=>void
}

export const useRoleStore = create<State & Action>((set)=>({
    data:[],
    fetchData: async () =>{
        const roles = await getRole();
        console.log("My Role ", roles)
    }
}))

export default useRoleStore