import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserCardModel } from "@/types/cards/user-card-model";
import { UserType } from "@/types/users-model";
import { User2 } from "lucide-react";

export const UserCard = ({
  user,
  selected,
}: {
  user: UserType;
  selected: boolean;
}) => {
  return (
    <div
      className={cn(
        " overflow-hidden flex items-center space-x-4 rounded-md  py-2 px-3 hover:bg-neutral-100 cursor-pointer",
        selected && "bg-blue-50 border border-blue-100"
      )}
    >
      <div>
        <Avatar className=" bg-neutral-200 size-8 flex justify-center items-center">
          <User2 className=" size-5" />
        </Avatar>
      </div>
      <div className=" flex flex-col">
        <span className=" font-semibold text-sm">{user.fullName}</span>
        <span className=" text-xs mt-1 text-gray-500 font-medium">
          {user.email}
        </span>
      </div>
      <div className=" ml-auto">
        <Badge
          className={cn(
            "text-[10px]",
            user.status === "Active" ? "" : "bg-amber-500 text-gray-800"
          )}
        >
          {user.status}
        </Badge>
      </div>
    </div>
  );
};

export default UserCard;
