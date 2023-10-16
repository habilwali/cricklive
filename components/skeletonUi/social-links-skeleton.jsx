import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

const SocialLinkSkeleton = () => {
  return (
    <div className="dark:text-black">
      <div className="flex justify-between">
        <span className="ms-1 pt-3 text-sm font-medium">
          <Skeleton className="h-4 w-[100px]" />
        </span>
      </div>
      <div className="rounded-md bg-white pb-0 mt-3  gap-1 border-0 p-3 ">
        <div className="flex justify-between flex-col gap-y-5  p-3">
          <div className="flex items-center ">
            <Skeleton className="h-[36px] w-[36px]" />
            <Skeleton className="h-4 w-[100px] ms-5" />
          </div>  
          <div className="flex items-center ">
            <Skeleton className="h-[36px] w-[36px]" />
            <Skeleton className="h-4 w-[100px] ms-5" />
          </div> 
          <div className="flex items-center ">
            <Skeleton className="h-[36px] w-[36px]" />
            <Skeleton className="h-4 w-[100px] ms-5" />
          </div> 
          <div className="flex items-center ">
            <Skeleton className="h-[36px] w-[36px]" />
            <Skeleton className="h-4 w-[100px] ms-5" />
          </div> 
          <div className="flex items-center ">
            <Skeleton className="h-[36px] w-[36px]" />
            <Skeleton className="h-4 w-[100px] ms-5" />
          </div>        
        </div>
      </div>
    </div>

  );
}

export default SocialLinkSkeleton;