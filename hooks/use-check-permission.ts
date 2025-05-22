import { getRole } from "@/actions";
import { prisma } from "@/lib/prisma";
import { getSession } from "next-auth/react";
import { create } from "zustand";

export const checkPermission = async (module:string,permission:string)=>{

    const session = getSession();

    const roles = await prisma.role.findMany({
      include: {
        permissions: {
          include: {
            permission: {
              include:{
                module:true
              }
            },
          },
        },
      },
    });

    const role = roles.filter(async (role) => role.id === (await session)?.user?.roleId)[0];
  
    if(role?.permissions.filter((pers)=> pers.permission.module.name === module).filter((per)=>per.permission.slug === permission).length>0){
      return true
    }else{
        return false
    }
    
}

export const getDataRoles= async ()=>{
    const roles = await getRole()
    
    return {
        roles:roles
    }
}

export type Action={
    isChecked:boolean;
    module:string;
    permission:string;
    checked: (module:string,permission:string)=>boolean;
}

const useCheckPermission = create<Action>((set)=>({
    isChecked:false,
    module:"",
    permission:"",
    checked:  (module,permission)=>{
        const roles = getDataRoles()
        console.log("My roles ",roles)
        // const checked =  checkPermission(module, permission) as unknown as boolean
        return true;
    }
})) 

export default useCheckPermission