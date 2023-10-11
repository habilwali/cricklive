import { Skeleton } from "../ui/skeleton";

const MiniScoreSkeleton = () => {
    return ( 
        <div className="pt-3 ps-0 pb-3">
       

          <div className={`text-2xl  font-extrabold items-start w-[300px]  mb-4 `} >
            <div className="flex">
            <Skeleton className="h-5 text-center ms-5 w-[100px] mt-2" />
          <Skeleton className="h-4 text-center ms-5 w-[80px] mt-2" />
           
           <span className=" text-slate-200 flex text-muted-foreground"> (<Skeleton className="h-4 text-center ms-0 w-[50px] mt-2" />)</span>
            </div>
            <Skeleton className=" h-4 text-center ms-5 w-[100px] mt-6" />
          </div>
    

          
      </div>
     );
}
 
export default MiniScoreSkeleton;