"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { FloorModel } from "@/types/floor-model";
import { FloorCellOccupant } from "./cell-occupant";
import { FloorCellAction } from "./cell-action";

export const FloorColumns: ColumnDef<FloorModel>[] = [
  {
    accessorKey: "no",
    header: "#",
    cell: ({ row }) => <span>{row.index + 1}</span>,
  },
  {
    accessorKey: "building",
    header: "Building",
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "floorNumber",
    header: "Floors Number",
  },
  {
    id: "occupants",
    header: "Occupants",
    cell: ({ row }) => <FloorCellOccupant data={row.original} />,
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
    cell: ({ row }) => <FloorCellAction data={row.original} />,
  },
];
