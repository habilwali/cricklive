import { Skeleton } from "../ui/skeleton";

const ButtonSkeleton = () => {
    return ( 
        <div className="mt-5 flex items-center gap-2 w-100 justify-center ">
            <Skeleton className=" h-10 w-[100px] bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md"/>
            <Skeleton className=" h-10 w-[100px] bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md"/>
            <Skeleton className=" h-10 w-[100px] bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md"/>
        </div>
     );
}
 
export default ButtonSkeleton;