"use client"

export const scorecolumns = [
  {
    accessorKey: "name",
    header: "Batter",
    cell: ({ row }) => (
      <div className="lg:text-sm lg:w-auto w-[25px] text-xs  p-0 m-0">
        {row?.original?.name}
      </div>
    )
  },
  {
    accessorKey: "outDec",
    header: "",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto w-[50px] text-red-500 p-0 m-0">
        {row?.original?.outDec}
      </div>
    )
  },
  {
    accessorKey: "runs",
    header: "R",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto w-[7px] p-0 m-0">
        {row?.original?.runs ? (row?.original?.runs) : (0)}
      </div>
    )
  },
  {
    accessorKey: "balls",
    header: "B",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto  w-[7px] p-0 m-0">
        {row?.original?.balls ? (row?.original?.balls) : (0)}
      </div>
    )
  },
  {
    accessorKey: "fours",
    header: "4s",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto  w-[7px] p-0 m-0">
        {row?.original?.fours ? (row?.original?.fours) : (0)}
      </div>
    )
  },
  {
    accessorKey: "sixes",
    header: "6s",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto  w-[7px] p-0 m-0">
        {row?.original?.sixes ? (row?.original?.sixes) : (0)}
      </div>
    )
  },
  {
    accessorKey: "strkRate",
    header: "SR",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto  w-[7px] p-0 m-0">
        {row?.original?.strkRate}
      </div>
    )
  },

];


export const bollingcolumns = [
  {
    accessorKey: "name",
    header: "Bowler",
    cell: ({ row }) => (
      <div className=" lg:text-sm text-xs lg:w-auto p-0 m-0">
        {row?.original?.name}
      </div>
    )
  },
  {
    accessorKey: "overs",
    header: "O",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto p-0 m-0">
        {row?.original?.overs}
      </div>
    )
  },
  {
    accessorKey: "runs",
    header: "R",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto p-0 m-0">
        {row?.original?.runs ? (row?.original?.runs) : (0)}
      </div>
    )
  },
  {
    accessorKey: "wickets",
    header: "W",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto p-0 m-0">
        {row?.original?.wickets ? (row?.original?.wickets) : (0)}
      </div>
    )
  },

  {
    accessorKey: "economy",
    header: "ER",
    cell: ({ row }) => (
      <div className="lg:text-sm text-xs lg:w-auto p-0 m-0">
        {row?.original?.economy}
      </div>
    )
  },
];