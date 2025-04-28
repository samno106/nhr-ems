"use client";

import { BuildingModel } from "@/types/building-model"
import { BuildingDataTable } from "./building-data-table"
import { BuildingColumns } from "./building-columns"
import { useEffect, useState } from "react";




export const Buildings= ()=>{

    const [buildings, setBuildings] = useState<BuildingModel[]>([]);

    async function getData(){
        const data = [
          {
            id: "728ed52f",
            name: "Main Office",
            city: "Phnom Penh",
            country: "Cambodia",
            createdAt:new Date()
          },
          {
            id: "728ed52f",
            name: "Dev Department",
            city: "Phnom Penh",
            country: "Cambodia",
            createdAt:new Date()
          },
        ];
        setBuildings(data);
    }

    useEffect(()=>{
        getData();
    },[]);
   

    return(
        <div className="p-3">
            <div>
            <h3 className="text-2xl font-semibold">Building Management</h3>
            <span className="text-sm text-gray-500">
                Add,edit or remove buildings in your organization.
            </span>
            </div>
            <div className="container mx-auto py-10">
            <BuildingDataTable columns={BuildingColumns} data={buildings} />
            </div>
            
        </div>
    )
}

export default Buildings