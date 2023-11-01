

import { Skeleton } from "../ui/skeleton";

const OngoingSeriesSkeleton = () => {

    return (
        <div className="mt-2 text-black">
            <div className="flex justify-between">
                <span className="ms-1 pt-3 text-sm font-medium">
                    <Skeleton className="h-4 w-[100px]" />
                </span>
            </div>
            <Skeleton className="grid lg:grid-rows  grid-cols-1 gap-2 p-5 mt-2  bg-white">
                <div className="flex justify-between items-center">
                    <Skeleton className="h-4 lg:w-[500px] w-[200px]" />
                    <Skeleton className=" h-7 w-7 row-span-full  top-1 right-3  " />
                </div>

                <div className="flex justify-between items-center">
                    <Skeleton className="h-4 lg:w-[500px] w-[200px]" />
                    <Skeleton className=" h-7 w-7 row-span-full  top-1 right-3  " />
                </div>

                <div className="flex justify-between items-center">
                    <Skeleton className="h-4 lg:w-[500px] w-[200px]" />
                    <Skeleton className=" h-7 w-7 row-span-full  top-1 right-3  " />
                </div>
            </Skeleton>
        </div>
    );
}

export default OngoingSeriesSkeleton;