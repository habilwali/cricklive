import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const PointTable = ({data}) => {
    return ( 
        <Table>
     
        <TableHeader className="bg-[#E5E5E5]">
          <TableRow>
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
        data?.pointsTableInfo?.map((pointsTableInfo, index)=>(
            <TableRow key={index} >
            <TableCell className="font-medium w-[200px]">{pointsTableInfo?.teamName} </TableCell>
            <TableCell className="font-medium ">{pointsTableInfo?.matchesPlayed}</TableCell>
            <TableCell className="font-medium ">{pointsTableInfo?.matchesWon}</TableCell>
            {
                pointsTableInfo?.matchesLost ? ( <TableCell className="font-medium ">{pointsTableInfo?.matchesLost}</TableCell>) : (
                    <TableCell className="font-medium ">0</TableCell>
                ) 
            }
          
            <TableCell className="font-medium ">{pointsTableInfo?.points}</TableCell>
            <TableCell className="font-medium ">{pointsTableInfo?.nrr}</TableCell>
          </TableRow>

        ))
       }
        
           
        </TableBody>
      </Table>
     );
}
 
export default PointTable;