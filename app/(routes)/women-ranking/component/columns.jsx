"use client"

import Image from "next/image";

export const rankingColumns = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => (
      <div className="w-auto lg:text-base text-xs">
      <span >
        {row?.original?.rank}
      </span>
      </div>
    )
  

  },

  {
    accessorKey: "name",
    header: "Player",
    cell: ({ row }) => (
            <div className=" text-blue-500 lg:text-base  text-xs gap-x-2 flex items-center w-auto p-0 m-0 justify-start ">
               
                <Image className="rounded-md mt-0 p-0 ms-0 w-10" src="/logo/Profile_User.svg" alt="me" width="49" height="49"  />
              {row?.original?.name}
            </div>
          )
  },

  {
    accessorKey: "country",
    header: "Team",
    cell: ({ row }) => (
      <div className="w-auto lg:text-base text-xs ">
      <span >
        {row?.original?.country}
      </span>
      </div>
    )
  },

  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => (
      <div className="w-auto lg:text-base  text-xs">
      <span >
        {row?.original?.rating}
      </span>
      </div>
    )
  },

 
 
];

export const rankingTeamsColumns = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ row }) => (
      <div className="w-auto lg:text-base text-xs">
      <span >
        {row?.original?.rank}
      </span>
      </div>
    )
  

  },

  {
    accessorKey: "name",
    header: "Team",
    cell: ({ row }) => (
            <div className=" text-blue-500 lg:text-base  text-xs gap-x-2 flex items-center  justify-start  w-auto">
               
                <Image className="rounded-md mt-0 p-0 ms-0 w-10" src="/logo/Profile_User.svg" alt="me" width="49" height="49"  />
              {row?.original?.name}
            </div>
          )
  },

  {
    accessorKey: "matches",
    header: "Matches",
    cell: ({ row }) => (
      <div className="w-auto lg:text-base text-xs">
      <span >
        {row?.original?.matches}
      </span>
      </div>
    )
  },

  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => (
      <div className="w-auto lg:text-base  text-xs">
      <span >
        {row?.original?.rating}
      </span>
      </div>
    )
  },

 
 
];