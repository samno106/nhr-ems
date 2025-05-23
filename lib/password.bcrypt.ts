import bcrypt, { genSaltSync } from "bcryptjs";

export function hashedPassword(password:string){
    const salt = genSaltSync(12);
    return bcrypt.hash(password, salt).then((hashed:string)=>{
        return hashed
    })
}

export function comparePassword(password:string, hashedPassword:string){
    return bcrypt.compare(password,hashedPassword).then((result:boolean)=>{
        return result
    })
}
