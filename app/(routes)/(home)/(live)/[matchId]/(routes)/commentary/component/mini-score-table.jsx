import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export function MiniScoreTable({data}) {
  return (
    <Table>
     
    <TableHeader className="bg-[#E5E5E5]">
      <TableRow>
        <TableHead className="w-[100px]">Batter</TableHead>
        <TableHead>R</TableHead>
        <TableHead>B</TableHead>
        <TableHead >4s</TableHead>
        <TableHead >6s</TableHead>
        <TableHead >SR</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
   
        <TableRow >
          <TableCell className="font-medium w-[200px]">{data?.batsmanStriker?.batName}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanStriker?.batRuns}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanStriker?.batBalls}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanStriker?.batFours}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanStriker?.batSixes}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanStriker?.batStrikeRate}</TableCell>
        </TableRow>
        <TableRow >
          <TableCell className="font-medium w-[200px]">{data?.batsmanNonStriker?.batName}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanNonStriker?.batRuns}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanNonStriker?.batBalls}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanNonStriker?.batFours}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanNonStriker?.batSixes}</TableCell>
          <TableCell className="font-medium ">{data?.batsmanNonStriker?.batStrikeRate}</TableCell>
        </TableRow>
    </TableBody>
  </Table>
  )
}
