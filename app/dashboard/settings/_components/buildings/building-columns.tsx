"use client"
import moment from "moment";
import { BuildingModel } from "@/types/building-model"
import { ColumnDef } from "@tanstack/react-table"
import { BuildingCellAction } from "./building-cell-action";

export const BuildingColumns: ColumnDef<BuildingModel>[] = [
  {
    accessorKey: "no",
    header: "#",
    cell:({row})=>(<span>{row.index + 1}</span>)
  },
  {
    accessorKey: "name",
    header: "Building Name",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    id:"createdAt",
    header:"Created",
    cell: ({ row }) => moment(row.original.createdAt).format("ll"),
  },
  {
    id: "actions",
    enableHiding: false,
    enableSorting: true,
    cell: ({ row }) => <BuildingCellAction data={row.original} />,
  },
]
