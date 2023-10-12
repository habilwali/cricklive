import { DataTable } from "@/components/ui/data-table";
import { rankingColumns } from "./columns";
import { Card, CardContent } from "@/components/ui/card";

const RankingTable = ({data}) => {
    const blue = true;
    return ( 
       <div>
        <Card className="p-0 m-0">
            <CardContent className="mt-0 p-0" >
            <DataTable columns={rankingColumns} blue={blue} data={data?.data?.rank} />
            </CardContent>

        </Card>
      
       </div>
     );
}
 
export default RankingTable;