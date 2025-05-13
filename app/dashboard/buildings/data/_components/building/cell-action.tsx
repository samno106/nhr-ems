import { Button } from "@/components/ui/button";
import { BuildingsCellActionProps } from "@/types/buildings-model";
import { Pencil, Trash, Users2 } from "lucide-react";

export const BuildingsCellAction = ({ data }: BuildingsCellActionProps) => {
  return (
    <div className="flex items-center space-x-3">
      <Button size="icon" variant="ghost" className="w-6 h-6 cursor-pointer">
        <Users2 className=" size-3.5" />
      </Button>
      <Button size="icon" variant="ghost" className="w-6 h-6 cursor-pointer">
        <Pencil className=" size-3.5" />
      </Button>
      <Button size="icon" variant="ghost" className="w-6 h-6 cursor-pointer">
        <Trash className=" size-3.5" />
      </Button>
    </div>
  );
};
