import { DataTable } from "@/components/ui/data-table";

import { Card, CardContent } from "@/components/ui/card";
import { rankingTeamsColumns } from "@/components/ranking-columns";

const RankingTable = ({data}) => {
   
    const blue = true;
    return ( 
       <div>
        <Card className="p-0 m-0">
            <CardContent className="mt-0 p-0" >
            <DataTable columns={rankingTeamsColumns} blue={blue} data={data?.data?.rank} />
            </CardContent>

        </Card>
      
       </div>
     );
}
 
export default RankingTable;