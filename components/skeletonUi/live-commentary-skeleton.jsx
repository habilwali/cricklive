import { addLineBreaks, convertToNextInteger } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const LiveCommentarySkeleton = () => {

  
  return (
    <div className="flex flex-col ">
   
        <div className=" p-2" >
         
            <div className="w-100 bg-slate-300 p-2  mb-3 text-sm rounded-md flex justify-around items-center">
              <span>
              <Skeleton className="h-5 text-center ms-4 w-[100px] mt-2" />
              </span>
              |
              <div className="flex flex-col items-center">
                <span className="flex items-center">
                  Runs Scored: <Skeleton className="h-5 text-center ms-4 w-[100px] mt-2" />
                </span>
                <span>
                <Skeleton className="h-5 text-center ms-4 w-[200px] mt-2" />
                </span>
              </div>
              |

              <div className="flex flex-col items-center">
                <span className="flex justify-center items-center ">
                  Score after <Skeleton className="h-5 text-center ms-4 me-3 w-[100px] mt-2" /> over
                </span>
                <div className="flex font-bold">
                  <span>
                  <Skeleton className="h-5 text-center ms-4 w-[100px] mt-2" />
                  </span>
                  <span>
                  <Skeleton className="h-5 text-center ms-4 w-[100px] mt-2" />
                  </span>
                </div>

              </div>
              

              
              
            
            </div>
          

          <div className="flex">
            <span className="me-3 text-md font-bold"><Skeleton className="h-5 text-center ms-4 w-[50px] mt-2" /></span>
            <span className="text-sm">
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            </span>
          </div>
          <div className="flex mt-5">
            <span className="me-3 text-md font-bold"><Skeleton className="h-5 text-center ms-4 w-[50px] mt-2" /></span>
            <span className="text-sm">
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            <Skeleton className="h-5 text-center ms-4 w-[600px] mt-2" />
            </span>
          </div>
        </div>
    
    </div>
  );
};

export default LiveCommentarySkeleton;
