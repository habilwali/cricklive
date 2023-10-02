"use client"


import { getImagesData } from "@/lib/localdata";

import Image from "next/image";

const MatchBoard = ({data}) => {
    const imageData = getImagesData();
        return (
            <div className="w-auto h-[228px] bg-[#022FF8] flex  justify-center items-center">

                <div className="container ">
                    <div className="flex justify-between ">

                        <div className="flex items-center  justify-around">
                            <div className=" bg-[#E5E5E5] lg:w-[104.48px] lg:h-[104.48px] w-[45px] h-[45px] rounded-full flex justify-center items-center">
                                <Image src={`/${imageData[data?.data?.team1?.teamId]}`} width={100} height={100} alt="img" />
                            </div>
                            <div>
                            <h1 className='w-[50px] font-medium lg:text-2xl text-sm text-white text-center '>{data?.data?.team1?.teamName}</h1>

                            </div>
                        </div>

                        <div className=" flex flex-col  justify-center items-center gap-y-1 ">
                            <span className="w-[100px] font-medium lg:text-2xl text-sm   text-white text-md text-center">
                                VS
                            </span>

                        </div>

                        <div className="flex items-center  justify-center">
                            <div>
                            <h1 className='w-[100px] font-medium lg:text-2xl text-sm text-white text-center '>{data?.data?.team2?.teamName}</h1>
                            </div>
                           
                            <div className=" bg-[#E5E5E5] lg:w-[104.48px] lg:h-[104.48px] w-[45px] h-[45px] rounded-full flex justify-center items-center">
                                <Image src={`/${imageData[data?.data?.team2?.teamId]}`} width={100} height={100} alt="img"  />
                            </div>

                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-col-1 p-5 text-sm w-100 gap-2 text-white text-start">
                        <span className="text-md font-bold flex">Series: <p className="text-sm ms-2 "> {data?.data?.seriesName}</p></span>
                        <span className="text-md font-bold flex">Venue: <p  className="text-sm  ms-2"> {data?.data?.venueInfo.ground}</p></span>
                        <span className="text-md font-bold flex">Date & Time:  <p className="text-sm ms-2"> 20/2/2023</p></span>
                    </div>

                </div>
            </div>
        );
    }

    export default MatchBoard;