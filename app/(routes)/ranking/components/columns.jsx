"use client"

import Image from "next/image";

export const rankingColumns = [
  {
    accessorKey: "rank",
    header: "Position",
  },

  {
    accessorKey: "name",
    header: "Player",
    cell: ({ row }) => (
            <div className=" text-red-500 gap-x-2 flex items-center justify-start p-0 m-0">
                <Image className="rounded-md mt-0 p-0 ms-0" src="/logo/Profile_User.svg" alt="me" width="49" height="49" />
              {row?.original?.name}
            </div>
          )
  },

  {
    accessorKey: "country",
    header: "Team",
  },

  {
    accessorKey: "rating",
    header: "Rating",
  },

 
 
];