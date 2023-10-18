
import { DataTable } from "@/components/ui/data-table";
import { bollingcolumns, scorecolumns } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const ScoreCardTable = ({ data }) => {
  
  return (
    <>
      <Card className="mt-5 rounded-md w-100">
        <CardHeader className="bg-[#022FF8] rounded-sm text-white flex flex-row justify-between "  >
          <CardTitle>{data?.batTeamName}</CardTitle>
          <CardTitle>{data?.score}-{data?.wickets} ({data?.overs})</CardTitle>
        </CardHeader>
        <CardContent className="p-1">
          <DataTable searchKey="name" columns={scorecolumns} data={data?.batsman} />
          <Separator />
          <div className="p-3">
            <span >Extra  {data?.extras?.total} ({data?.extras?.byes}b, {data?.extras?.legByes}lb, {data?.extras?.wides}wd, {data?.extras?.noBalls}nb)</span>
          </div>
          <Separator />
          <div className="p-3">
            <span >Total  {data?.score}-{data?.wickets}({data?.overs})</span>
          </div>
          <Separator />
          {/* <div className="p-3 flex flex-col">
            <span>Did not bat</span>
            <span >shaheen, naseem</span>
          </div> */}
          <DataTable columns={bollingcolumns}  data={data?.bowler} />
        </CardContent>
      </Card>


    </>
  );
};