import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { RoleType } from "@/types/roles-model";

export const RolePermissionCard = ({
  role,
  selected,
}: {
  role: RoleType;
  selected: boolean;
}) => {
  return (
    <div
      className={cn(
        "px-3 py-1.5 border border-white rounded-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer",
        selected && "bg-blue-50 border border-blue-200"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-600">
          {role?.name}
        </span>
        <Badge
          variant="outline"
          className=" text-[10px] bg-amber-500 border-none text-white font-medium"
        >
          {role?.status}
        </Badge>
      </div>
      <p className="text-xs text-gray-500 mt-1 font-[400] truncate">
        {role?.description}
      </p>
    </div>
  );
};

export default RolePermissionCard;
