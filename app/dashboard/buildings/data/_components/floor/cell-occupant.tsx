import { Button } from "@/components/ui/button";
import { BuildingsCellActionProps } from "@/types/buildings-model";
import { FloorCellActionProps } from "@/types/floor-model";
import { Pencil, Trash, Users2 } from "lucide-react";

export const FloorCellOccupant = ({ data }: FloorCellActionProps) => {
  return (
    <div className="flex items-center space-x-3">
      <Button size="sm" variant="outline" className="py-0 h-6 cursor-pointer">
        <Users2 className=" size-3" />
        <span>{0}</span>
      </Button>
    </div>
  );
};
