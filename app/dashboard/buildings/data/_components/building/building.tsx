"use client";

import { SubHero } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { PlusCircle, UserPlus2 } from "lucide-react";
import { BuildingsDataTable } from "./data-table";
import { BuildingsColumns } from "./columns";
import { useEffect, useState } from "react";
import { BuildingsModel } from "@/types/buildings-model";

export const BuildingTab = () => {
  const [buildings, setBuildings] = useState<BuildingsModel[]>([]);

  async function getData() {
    const data = [
      {
        id: "728ed52f",
        name: "Main Office",
        city: "Phnom Penh",
        country: "Cambodia",
        createdAt: new Date(),
      },
      {
        id: "728ed52f",
        name: "Dev Department",
        city: "Phnom Penh",
        country: "Cambodia",
        createdAt: new Date(),
      },
    ];
    setBuildings(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex items-end justify-between">
        <SubHero
          heroModel={{
            title: "Building Management",
            sub_title: "Add, edit, or remove buildings in your organization",
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
            <span>Add Building</span>
          </Button>
        </div>
      </div>
      <div className="py-4 mt-5">
        <BuildingsDataTable data={buildings} columns={BuildingsColumns} />
      </div>
    </div>
  );
};

export default BuildingTab;
