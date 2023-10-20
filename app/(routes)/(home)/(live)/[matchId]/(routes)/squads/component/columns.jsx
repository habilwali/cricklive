"use client"

export const squardColumns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div>
        <span className=" p-0 m-0 text-xs  me-0" >
          {row?.original?.name}
        </span>
      </div>
    )
  },
  {
    accessorKey: "role",
    header: "",
    cell: ({ row }) => (
      <div className=" text-red-500 lg:text-sm flex flex-col p-0  text-xs">
        <span className="lg:ms-0 ms-0 p-0">
          {row?.original?.role}
        </span>
        {row?.original?.captain &&
          <span>,captain</span>

        }
      </div>
    )
  },
];


