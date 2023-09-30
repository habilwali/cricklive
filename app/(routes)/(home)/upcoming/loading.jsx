import MatchesCardSkeleton from "@/components/skeletonUi/matches-card-skeleton";
import ScorecardSkeleton from "@/components/skeletonUi/scorecard-skeleton";

const Loading = () => {
    return (  
       <div className="container">
<ScorecardSkeleton/>
<MatchesCardSkeleton/>
       </div>
    );
}
 
export default Loading;