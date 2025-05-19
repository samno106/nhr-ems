"use server"

import { hashedPassword } from "@/lib/password.bcrypt";
import { prisma } from "@/lib/prisma";
import { UserAccessSchema, userAccessSchema } from "@/schemas";
import { revalidatePath } from "next/cache";

export async function createUser(userSchema:UserAccessSchema){

    const result = userAccessSchema.safeParse(userSchema);

    if (!result.success) {
        return { error: "Invalid form data" };
    }

    try {
        
        const response = await prisma.user.create({
            data:{
                fullName:userSchema.fullName,
                email:userSchema.email,
                password:(await hashedPassword(userSchema.password)).toString(),
                roleId:userSchema.roleId,
            }
        });

        await prisma.$disconnect();
        revalidatePath('/dashboard/user-access')
        return {success:"User created successfully"}

    } catch (error) {
        return { error: "Something went wrong. Please try again." };
    }

    

    
}