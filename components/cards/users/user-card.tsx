import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserCardModel } from "@/types/cards/user-card-model";
import { User2 } from "lucide-react";

export const UserCard = ({ user }: { user: UserCardModel }) => {
  return (
    <div className=" overflow-hidden flex items-center space-x-4 rounded  py-2 px-3 hover:bg-neutral-100 cursor-pointer">
      <div>
        <Avatar className=" bg-neutral-200 size-8 flex justify-center items-center">
          <User2 className=" size-5" />
        </Avatar>
      </div>
      <div className=" flex flex-col">
        <span className=" font-semibold text-sm">{user.name}</span>
        <span className=" text-xs">{user.email}</span>
      </div>
      <div className=" ml-auto">
        <Badge
          className={cn(
            "",
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
