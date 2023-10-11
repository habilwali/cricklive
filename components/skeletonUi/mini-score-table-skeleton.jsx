import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "../ui/skeleton"


export function MiniScoreTableSkeleton() {
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
        <TableCell className="font-medium w-[200px] flex"> <Skeleton className="h-5 text-center ms-0 w-[50px] mt-2" /><span className="text-[#911414]">*</span></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
      </TableRow>

      <TableRow >
        <TableCell className="font-medium w-[200px] flex"> <Skeleton className="h-5 text-center ms-0 w-[50px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
        <TableCell className="font-medium "> <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
      </TableRow>
    </TableBody>
  </Table>
  )
}
