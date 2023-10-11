import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import KeyStatsSkeleton from "./key-stats-skeleton";
import LiveCommentarySkeleton from "./live-commentary-skeleton";
import { MiniBowlerTableSkeleton } from "./mini-bowler-table-skeleton";
import { MiniScoreTableSkeleton } from "./mini-score-table-skeleton";
import MiniScoreSkeleton from "./miniscore-skeleten";

const MiniScorecardSkeleton = () => {
    return ( 

        
        <Skeleton className="mt-5 rounded-md p-2 bg-white">
        <MiniScoreSkeleton  />
        <div className="grid lg:grid-cols-3 gap-4">
          <div className=" col-span-2">
          <MiniScoreTableSkeleton/>
         <MiniBowlerTableSkeleton  />
          </div>
         <KeyStatsSkeleton/>
        </div>
       <div className="pt-5 pb-3">
          <span className="flex items-center"><span className=" font-bold">Recent:</span><Skeleton className="h-5 text-center ms-4 w-[150px] mt-2" /></span>
        </div> 
         <Separator /> 
        <LiveCommentarySkeleton /> 
      </Skeleton>
     );
}
 
export default MiniScorecardSkeleton;