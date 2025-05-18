import { Badge } from "@/components/ui/badge";
import { ModuleType } from "@/types/modules-model";
import PermissionModuleCard from "../permissions/permission-module-card";

export const ModuleCard = ({ module }: { module: ModuleType }) => {
  return (
    <div className="py-1 p-2">
      <div className="flex justify-between items-center py-2.5 pr-1 ">
        <h3 className="text-sm font-medium">{module.name}</h3>
        <Badge variant="outline"> 2 of {module.permissions.length}</Badge>
      </div>
      <div className="py-1.5 space-y-2.5">
        {module.permissions.map((permission, i) => (
          <PermissionModuleCard
            name={permission.name}
            desc={permission.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ModuleCard;
