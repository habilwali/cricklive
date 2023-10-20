import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const PointTable = ({ data }) => {
  return (
    <Table className="mb-3 w-auto ">
      <TableHeader className="bg-[#E5E5E5] ">
        <TableRow className="lg:text-sm text-xs">
          <TableHead className="w-[100px]">Teams</TableHead>
          <TableHead>M</TableHead>
          <TableHead>W</TableHead>
          <TableHead >L</TableHead>
          <TableHead >PT</TableHead>
          <TableHead >NRR</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data?.pointsTableInfo?.map((pointsTableInfo, index) => (

            <TableRow key={index}  className={`${index < 4 ? 'bg-[#022FF8] text-white hover:text-black' : " " } "lg:text-sm text-xs  "`} >
              <TableCell className="font-medium w-[200px]">{pointsTableInfo?.teamName} </TableCell>
              <TableCell className="font-medium ">{pointsTableInfo?.matchesPlayed ? (pointsTableInfo?.matchesPlayed) : (0)}</TableCell>
              <TableCell className="font-medium ">{pointsTableInfo?.matchesWon ? (pointsTableInfo?.matchesWon) : (0)}</TableCell>
              <TableCell className="font-medium ">{pointsTableInfo?.matchesLost ? (pointsTableInfo?.matchesLost) : (0)}</TableCell>
              <TableCell className="font-medium ">{pointsTableInfo?.points ? (pointsTableInfo?.points) : (0)}</TableCell>
              <TableCell className="font-medium ">{pointsTableInfo?.nrr}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

export default PointTable;