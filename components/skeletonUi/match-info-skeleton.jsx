import { Skeleton } from "../ui/skeleton";

const MatchInfoSkeleton = () => {
    return (
        <div className="w-auto h-[228px] bg-[#022FF8] flex  justify-center items-center">
            <div className="container ">
                <div className="flex justify-between ">

                    <div className="flex items-center lg:p-5  justify-around">
                        <div className="flex  flex-col justify-center items-center ">
                            <div className=" bg-[#E5E5E5] lg:w-[104.48px] lg:h-[104.48px] w-[45px] h-[45px] rounded-full flex justify-center items-center">
                                <Skeleton className=" w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center" />

                            </div>
                            <Skeleton className="h-4 text-center  w-[50px] mt-2" />
                        </div>

                        <div className="flex  flex-col justify-center ms-5">
                            <Skeleton className="h-4 lg:w-[70px] w-[50px]  mt-2" />
                            <Skeleton className="h-4 lg:w-[50px] w-[30px] mt-2" />
                        </div>

                    </div>
                    <div className=" flex flex-col  justify-center items-center gap-y-1 ">
                        <span className="w-[100px] font-medium lg:text-2xl text-sm   text-white text-md text-center">
                            VS
                        </span>
                    </div>
                    <div className="flex items-center lg:p-5 justify-center">

                        <div className="flex  flex-col justify-center me-5">
                            <Skeleton className="h-4 lg:w-[70px] w-[50px] mt-2" />
                            <Skeleton className="h-4 lg:w-[50px] w-[30px] mt-2 text-center" />
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <div className=" bg-[#E5E5E5] lg:w-[104.48px]  lg:h-[104.48px] w-[45px] h-[45px] rounded-full flex justify-center items-center">
                                <Skeleton className=" w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center" />
                            </div>
                            <Skeleton className="h-4 w-[50px] text-start   mt-2" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 lg:mt-0 mt-5  p-5 text-sm w-100 gap-2 text-white  ">
                    <div className="flex lg:col-span-1  col-span-3">
                        <Skeleton className="h-4 w-[150px] mt-2 me-1" />
                        <Skeleton className="h-4 w-[130px] mt-2" />
                    </div>
                    <div className="flex lg:justify-center  lg:col-span-1  col-span-3">
                        <Skeleton className="h-4 w-[150px] mt-2 me-1" />
                        <Skeleton className="h-4 w-[130px] mt-2" />
                    </div>
                    <div className="flex  lg:justify-end lg:col-span-1  col-span-3">
                        <Skeleton className="h-4 w-[150px] mt-2 me-1" />
                        <Skeleton className="h-4 w-[130px] mt-2" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MatchInfoSkeleton;