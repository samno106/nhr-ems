"use client";
import { SubHero } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus2 } from "lucide-react";
import { FloorsDataTable } from "./data-table";
import { FloorColumns } from "./columns";
import { useEffect, useState } from "react";
import { FloorModel } from "@/types/floor-model";

export const FloorTab = () => {
  const [floors, setFloors] = useState<FloorModel[]>([]);

  async function getData() {
    const data = [
      {
        id: "728ed52f",
        building: "A",
        name: "Ground Floor",
        floorNumber: 0,
        createdAt: new Date(),
      },
      {
        id: "728ed52f45",
        building: "A",
        name: "First Floor",
        floorNumber: 1,
        createdAt: new Date(),
      },
    ];
    setFloors(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex items-end justify-between">
        <SubHero
          heroModel={{
            title: "Floor Management",
            sub_title: "Add, edit, or remove floors in your buildings",
          }}
        />
        <div className=" space-x-5">
          <Button
            size="sm"
            variant="outline"
            className=" cursor-pointer text-xs"
          >
            <UserPlus2 />
            <span>Assign Occupants</span>
          </Button>
          <Button size="sm" className=" cursor-pointer text-xs">
            <PlusCircle />
            <span>Add Floor</span>
          </Button>
        </div>
      </div>
      <div className="py-4 mt-5">
        <FloorsDataTable data={floors} columns={FloorColumns} />
      </div>
    </div>
  );
};

export default FloorTab;
