import { CheckCircle2 } from "lucide-react";

export const PermissionModuleCard = ({ name, desc }) => {
  return (
    <div className="px-2 py-1.5 bg-blue-50 rounded flex justify-between items-center">
      <div>
        <h4 className=" text-[12px] font-medium">{name}</h4>
        <p className="text-xs text-gray-500 font-medium">{desc}</p>
      </div>
      <CheckCircle2 className=" size-4 text-blue-500" />
    </div>
  );
};

export default PermissionModuleCard;
