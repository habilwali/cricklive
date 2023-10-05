
import { MiniScoreTable, } from "./mini-score-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MiniBowlerTable } from "./mini-bowler-table";
import LiveCommentary from "./live-commentary";
import MiniScore from "./mini-score";

export const MiniScoreCard = ({ data }) => {
  return (
    <>
      <Card className="mt-5 rounded-md p-2">
        <MiniScore data={data} />
        <div className="grid lg:grid-cols-3 gap-4">
          <div className=" col-span-2">
          <MiniScoreTable data={data?.miniscore} />
         <MiniBowlerTable data={data?.miniscore} />
          </div>
          <div className=" border-[#E5E5E5] ">
            <div className=" bg-[#E5E5E5] p-3 " >
               <h1>Key Stats</h1>
            </div>
            <div className="flex flex-col gap-2 p-2"> 
              <span><span className=" font-bold">Partnership:</span> {data?.miniscore?.partnerShip?.runs} ({data?.miniscore?.partnerShip?.balls})</span>
              <span><span className=" font-bold">Last Wicket:</span> {data?.miniscore?.lastWicket}</span>
              {data?.miniscore?.latestPerformance?.map((latestPerformance,index) => (
                <span key={index}> <span className=" font-bold">{latestPerformance.label}:</span> {latestPerformance.runs}, {latestPerformance.wkts} wkts</span>
              ))}
              <span > <span className=" font-bold">Toss:</span>  {data?.matchHeader?.tossResults?.tossWinnerName} ({data?.matchHeader?.tossResults?.decision})</span>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-3">
          <span className=""><span className=" font-bold">Recent:</span> {data?.miniscore?.recentOvsStats}</span>
        </div>
        <Separator />
        <LiveCommentary data={data} />
      </Card>


    </>
  );
};