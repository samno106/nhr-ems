import { Info } from "lucide-react"

export const RoleInfoCard=()=>{

    return(
        <div className="py-3 px-4 bg-blue-50 rounded-md flex items-start space-x-3">
           <Info className=" mt-1.5 size-4 text-gray-500"/>
            <div>
                <span className="text-[12px] font-medium text-gray-600">About User Roles</span>
                <p className="text-[11px] font-medium text-gray-500"> A user's permission as determined by their assigned roles. Each role contain a set of permissions that grant access to defferent parts of the system.</p>
            </div>
        </div>
    )
}

export default RoleInfoCard