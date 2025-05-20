import Link from "next/link"

export const AuthLogo=()=>{
    return(
        <Link href="/">
        <div className="flex space-x-1 items-center">
            <span className=" font-bold text-blue-500 text-2xl">NHR</span><span className="font-bold text-2xl">EMS</span>
        </div>
        </Link>
    )
}
export default AuthLogo