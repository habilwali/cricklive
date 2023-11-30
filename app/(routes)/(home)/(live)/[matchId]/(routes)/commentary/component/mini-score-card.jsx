import { MiniScoreTable, } from "./mini-score-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MiniBowlerTable } from "./mini-bowler-table";
import LiveCommentary from "./live-commentary";
import MiniScore from "./mini-score";
import KeyStats from "./key-stats";

export const MiniScoreCard = ({ data }) => {

  return (
    <>
      <Card className="mt-5 rounded-md p-2  relative">
        <MiniScore data={data} />
        <div className="grid lg:grid-cols-3 lg:gap-4">
          <div className=" col-span-2">
          <MiniScoreTable data={data?.miniscore} />
         <MiniBowlerTable data={data?.miniscore} />
          </div>
          <KeyStats data={data}/> 
        </div>
        <div className="pt-2 pb-3">
          <span className=" lg:text-sm text-xs"><span className=" font-bold lg:text-sm text-xs">Recent:</span> {data?.miniscore?.recentOvsStats}</span>
        </div>
        <Separator />
        <LiveCommentary data={data} />
      </Card>
    </>
  );
};