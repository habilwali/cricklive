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

export function MiniBowlerTableSkeleton() {
  return (
    <Table>
      
      <TableHeader className="bg-[#E5E5E5]">
        <TableRow>
          <TableHead className="w-[100px]">Bowler</TableHead>
          <TableHead>O</TableHead>
          <TableHead>M</TableHead>
          <TableHead >R</TableHead>
          <TableHead >W</TableHead>
          <TableHead >ECO</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
     
          <TableRow >
            <TableCell className="font-medium w-[200px] flex"><Skeleton className="h-5 text-center ms-0 w-[50px] mt-2" /> <span className="text-[#911414]">*</span></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
          </TableRow>
          <TableRow >
            <TableCell className="font-medium w-[200px]"><Skeleton className="h-5 text-center ms-0 w-[50px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
            <TableCell className="font-medium "><Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /></TableCell>
          </TableRow>
      </TableBody>
    </Table>
  )
}
