


import { Skeleton } from "../ui/skeleton";

const TopStoriesSkeleton = () => {

    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <span className="ms-1 pt-3 text-sm font-medium">
                    <Skeleton className="h-4 w-[100px]" />
                </span>
            </div>
                    <div className="grid lg:grid-cols-2  cursor-pointer rounded-md bg-white pb-5 mt-2 grid-cols-1 gap-2 border-0">
                        <div className=" rounded-lg p-3">
                        <Skeleton className="h-[250px] w-auto" />
                        </div>
                        <div className="flex flex-col  items-center  justify-center " >
                            <div className="lg:w-[441px]  lg:p-1 p-2  flex  flex-col ">
                            <Skeleton className="h-4 w-[300px] mb-3" />
                            <Skeleton className="h-4 w-[300px] mb-3" />
                            <Skeleton className="h-4 w-[300px] mb-3" />
                            <Skeleton className="h-4 w-[100px]" />
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default TopStoriesSkeleton;