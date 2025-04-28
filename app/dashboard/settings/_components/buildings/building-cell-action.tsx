import { Button } from "@/components/ui/button";
import { BuildingCellActionProps } from "@/types/building-model";
import { Pencil, Trash } from "lucide-react";


export const BuildingCellAction = ({ data }: BuildingCellActionProps) => {

    return(
        <div className="flex items-center space-x-3">
            <Button size="icon" variant="secondary" className="w-6 h-6 border">
                <Pencil className=" size-3.5"/>
            </Button>
            <Button size="icon" variant="secondary" className="w-6 h-6 border">
                <Trash className=" size-3.5"/>
            </Button>
        </div>
    )
}