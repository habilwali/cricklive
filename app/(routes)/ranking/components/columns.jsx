"use client"

export const squardColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "role",
    header: "",
    cell: ({ row }) => (
            <div className=" text-red-500 gap-x-2">
              {row?.original?.role}

             <span>, </span>
              {row?.original?.captain && 
              <span>captain</span>
              }
            </div>
          )
  },

 
 
];