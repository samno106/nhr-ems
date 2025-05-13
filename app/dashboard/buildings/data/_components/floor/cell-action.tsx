import { Button } from "@/components/ui/button";

import { FloorCellActionProps } from "@/types/floor-model";
import { Pencil, Trash, Users2 } from "lucide-react";

export const FloorCellAction = ({ data }: FloorCellActionProps) => {
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
