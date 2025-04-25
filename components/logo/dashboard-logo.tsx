import Link from "next/link"

export const DashboardLogo=()=>{
    return(
        <>
        <Link href="/dashboard">
        <div className="flex space-x-1 items-center">
            <span className=" font-bold text-blue-500 text-xl">NHR</span><span className="font-bold text-xl">EMS</span>
        </div>
        </Link>
        </>
    )
}
export default DashboardLogo