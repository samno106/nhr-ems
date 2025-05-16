import { Calendar, Mail, User2 } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { UserModel } from "@/types/users-model";
import moment from "moment";

export const UserProfile = ({ user }: UserModel) => {
  return (
    <div className=" flex items-start space-x-4 px-2">
      <div>
        <Avatar className=" bg-neutral-200 size-8 flex justify-center items-center">
          <User2 className=" size-5" />
        </Avatar>
      </div>

      <div className=" flex flex-col">
        <span className=" font-semibold text-sm">{user?.fullName}</span>
        <div className="flex items-center space-x-1 mt-1">
          <Mail className=" size-2.5 text-gray-500" strokeWidth={3} />
          <span className=" text-xs text-gray-500 font-medium">
            {user?.email}
          </span>
        </div>
        <div className="flex items-center space-x-1 mt-1">
          <Calendar className=" size-2.5 text-gray-500" strokeWidth={3} />
          <span className="text-xs text-gray-500 font-medium">
            Joined {moment(user?.createdAt).format("LL")}
          </span>
        </div>
      </div>
      <div className=" ml-auto">
        <Badge
          className={cn(
            "text-[10px]",
            user?.status === "Active" ? "" : "bg-amber-500 text-gray-800"
          )}
        >
          {user?.status}
        </Badge>
      </div>
    </div>
  );
};

export default UserProfile;
