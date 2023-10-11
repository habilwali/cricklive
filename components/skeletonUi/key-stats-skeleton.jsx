import { Skeleton } from "../ui/skeleton";

const KeyStatsSkeleton = () => {
    return ( 
        <div className=" border-[#E5E5E5] ">
        <div className=" bg-[#E5E5E5] p-3 " >
           <h1>Key Stats</h1>
        </div>
        <div className="flex flex-col gap-2 p-2"> 
          <span className="flex items-center "><span className=" font-bold   w-100">Partnership:</span> <Skeleton className="h-5 text-center ms-4 w-[100px] mt-2" /></span>
          <span className="flex items-center"><span className=" font-bold">Last Wicket:</span> <Skeleton className="h-5 text-center ms-4 w-[100px] mt-2" /></span>
        
            <span className="flex items-center"> <span className=" font-bold">Last 10 ovrs:</span> <Skeleton className="h-5 text-center ms-4 w-[50px] mt-2" />, <Skeleton className="h-5 text-center ms-0 w-[30px] mt-2" /> wkts</span>
          
          <span className="flex"> <span className=" font-bold">Toss:</span> <Skeleton className="h-5 text-center ms-4 w-[200px] mt-2" /> </span>
        </div>
      </div>
     );
}
 
export default KeyStatsSkeleton;