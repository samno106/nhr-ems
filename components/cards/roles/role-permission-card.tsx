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
          className={cn(
            " text-[10px] text-white font-semibold",
            role?.status === "System"
              ? "bg-orange-100 text-orange-500 border-orange-300"
              : " bg-blue-100 text-blue-600  border-blue-300"
          )}
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
