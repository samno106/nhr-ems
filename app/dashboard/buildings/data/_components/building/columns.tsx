"use client";

import { BuildingsModel } from "@/types/buildings-model";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { BuildingsCellAction } from "./cell-action";
import { BuildingsCellOccupant } from "./cell-occupant";

export const BuildingsColumns: ColumnDef<BuildingsModel>[] = [
  {
    accessorKey: "no",
    header: "#",
    cell: ({ row }) => <span>{row.index + 1}</span>,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "address",
    header: "Address",
    cell: ({ row }) => row.original.city + ", " + row.original.country,
  },
  {
    id: "totalFloor",
    header: "Total Floors",
    cell: ({ row }) => 0,
  },
  {
    id: "occupants",
    header: "Occupants",
    cell: ({ row }) => <BuildingsCellOccupant data={row.original} />,
  },
  {
    id: "createdAt",
    header: "Created",
    cell: ({ row }) => moment(row.original.createdAt).format("ll"),
  },
  {
    id: "actions",
    header: "Action",
    enableHiding: false,
    enableSorting: true,
    cell: ({ row }) => <BuildingsCellAction data={row.original} />,
  },
];
