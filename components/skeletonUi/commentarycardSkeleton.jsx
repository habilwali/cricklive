import Image from "next/image";
import AddsPromotion from "../adds";
import { Skeleton } from "../ui/skeleton";
import MiniScorecardSkeleton from "./miniScoreSkeleton";

const CommentarySkeleton = () => {
    return (
        <div className="grid container grid-cols-3 gap-2">
            <div className=" lg:col-span-2 col-span-3">
                <MiniScorecardSkeleton  />
            </div>
            {/* <div className=" lg:col-span-1  col-span-3  rounded-md">
                <div className="mb-3 w-auto">
                    <AddsPromotion />
                </div>
               
            </div> */}
        </div>
      );
}
 
export default CommentarySkeleton;