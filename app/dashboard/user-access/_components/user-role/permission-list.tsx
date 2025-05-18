import { ModuleCard } from "@/components/cards";
import { ModuleType } from "@/types/modules-model";

export const PermissionList = ({ modules }: { modules: ModuleType[] }) => {
  return (
    <div>
      {modules.map((module, i) => (
        <ModuleCard key={i} module={module} />
      ))}
    </div>
  );
};

export default PermissionList;
