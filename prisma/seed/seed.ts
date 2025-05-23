
import { prisma } from "@/lib/prisma";
import { modules, permissions, rolePermissions, roles, user } from "./data";
import { hashedPassword } from "@/lib/password.bcrypt";


const load = async ()=>{
    try {
        
        await prisma.module.createMany({
            data:modules
        });

        console.log("Modules are created");

        await prisma.permission.createMany({
            data:permissions
        });
        console.log("Permissions are created");

        await prisma.role.createMany({
            data:roles
        });

        console.log("Roles are created");

        await prisma.user.create({
            data:{
                fullName:user.fullName,
                email:user.email,
                roleId:user.roleId,
                password:(await hashedPassword(user.password)).toString(),
                status:user.status

            }
        });
        console.log("User are created");

        await prisma.rolePermission.createMany({
            data:rolePermissions
        });
        console.log("Role and permissions are created");

    } catch (error) {
        console.error(error)
    }finally{
        await prisma.$disconnect()
    }
}

load();