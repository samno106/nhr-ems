import { Button } from "@/components/ui/button";
import { BuildingsCellActionProps } from "@/types/buildings-model";
import { Pencil, Trash, Users2 } from "lucide-react";

export const BuildingsCellOccupant = ({ data }: BuildingsCellActionProps) => {
  return (
    <div className="flex items-center space-x-3">
      <Button size="sm" variant="outline" className="py-0 h-6 cursor-pointer">
        <Users2 className=" size-3" />
        <span>{0}</span>
      </Button>
    </div>
  );
};
