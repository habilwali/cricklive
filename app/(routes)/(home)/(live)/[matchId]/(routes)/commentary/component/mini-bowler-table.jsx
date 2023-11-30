import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export function MiniBowlerTable({data}) {
  return (
    <Table>
     
      <TableHeader className="bg-[#E5E5E5]">
        <TableRow className="lg:text-sm text-xs">
          <TableHead >Bowler</TableHead>
          <TableHead>O</TableHead>
          <TableHead>M</TableHead>
          <TableHead >R</TableHead>
          <TableHead >W</TableHead>
          <TableHead >ECO</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
     
          <TableRow className="lg:text-sm text-xs " >
            <TableCell className="font-medium ">{data?.bowlerStriker?.bowlName} <span className="text-[#911414]">*</span></TableCell>
            <TableCell className="font-medium ">{data?.bowlerStriker?.bowlOvs}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerStriker?.bowlMaidens}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerStriker?.bowlRuns}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerStriker?.bowlWkts}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerStriker?.bowlEcon}</TableCell>
          </TableRow>
          <TableRow className="lg:text-sm text-xs">
            <TableCell className="font-medium w-[200px]">{data?.bowlerNonStriker?.bowlName}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerNonStriker?.bowlOvs}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerNonStriker?.bowlMaidens}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerNonStriker?.bowlRuns}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerNonStriker?.bowlWkts}</TableCell>
            <TableCell className="font-medium ">{data?.bowlerNonStriker?.bowlEcon}</TableCell>
          </TableRow>
      </TableBody>
    </Table>



   
  )
}
