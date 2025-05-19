import { cn } from "@/lib/utils";
import { RoleType } from "@/types/roles-model";
import { CheckCircle2, Circle } from "lucide-react";

export const RoleCard = ({
  role,
  selected,
}: {
  role: RoleType;
  selected: boolean;
}) => {
  return (
    <div
      className={cn(
        "p-3 border border-neutral-300 rounded-md hover:bg-blue-50 hover:border-blue-200 cursor-pointer",
        selected && "bg-blue-50 border-blue-400"
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">{role?.name}</span>
        {selected ? (
          <CheckCircle2 className=" size-4 text-blue-500" />
        ) : (
          <Circle className=" size-4 text-gray-400" />
        )}
      </div>
      <p className="text-xs text-gray-500 mt-2 font-[400]">
        {role?.description}
      </p>
    </div>
  );
};

export default RoleCard;
