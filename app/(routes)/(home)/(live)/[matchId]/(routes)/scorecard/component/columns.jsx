"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"



export const scorecolumns = [
  {
    accessorKey: "name",
    header: "Batter",
    cell: ({ row }) => (
      <div className=" lg:w-auto w-[30px] p-0 m-0">
        {row?.original?.name}
      </div>
    )
  },

  {
    accessorKey: "outDec",
    header: "",
    cell: ({ row }) => (
            <div className=" text-xs lg:w-auto w-[50px] text-red-500 p-0 m-0">
              {row?.original?.outDec}
            </div>
          )
  },
  {
    accessorKey: "runs",
    header: "R",
  },
  {
    accessorKey: "balls",
    header: "B",
  },
  {
    accessorKey: "fours",
    header: "4s",
  },
  {
    accessorKey: "sixes",
    header: "6s",
  },
  {
    accessorKey: "strkRate",
    header: "SR",
  },

];


export const bollingcolumns = [
  {
    accessorKey: "name",
    header: "Bollers",
  },
  {
    accessorKey: "overs",
    header: "O",
  },
  {
    accessorKey: "runs",
    header: "R",
  },
  {
    accessorKey: "wickets",
    header: "W",
  },

  {
    accessorKey: "economy",
    header: "ER",
  },
];