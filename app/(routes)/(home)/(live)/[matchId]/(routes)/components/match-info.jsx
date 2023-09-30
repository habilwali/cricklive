"use client"


import { getImagesData } from "@/lib/localdata";

import Image from "next/image";

const MatchBoard = ({data}) => {
    const imageData = getImagesData();
        return (
            <div className="w-100 h-[228px] bg-[#022FF8] flex  justify-center items-center">

                <div className="container ">
                    <div className="flex justify-between ">

                        <div className="flex items-center  justify-center">
                            <div className=" bg-[#E5E5E5] w-[104.48px] h-[104.48px] rounded-full flex justify-center items-center">
                                <Image src={`/${imageData[data?.data?.team1?.teamId]}`} width={48} height={86} />
                            </div>
                            <h1 className='w-[100px] font-medium text-2xl text-white text-center ms-0'>{data?.data?.team1?.teamName}</h1>
                        </div>

                        <div className=" flex flex-col  justify-center items-center gap-y-3 ">
                            <span className="w-[100px] font-medium text-2xl  text-white text-md text-center">
                                VS
                            </span>

                        </div>

                        <div className="flex items-center  justify-center">
                            <h1 className='w-[100px] font-medium text-2xl text-white text-center me-5'>{data?.data?.team2?.teamName}</h1>
                            <div className=" bg-[#E5E5E5] w-[104.48px] h-[104.48px] rounded-full flex justify-center items-center">
                                <Image src={`/${imageData[data?.data?.team2?.teamId]}`} width={48} height={86} />
                            </div>

                        </div>
                    </div>
                    <div className="flex mt-5 justify-between text-white items-center">
                        <span>Series: {data?.data?.seriesName}</span>
                        <span>Venue: {data?.data?.venueInfo.ground}</span>
                        <span>Date & Time: Australia tour of India, 2023</span>
                    </div>

                </div>
            </div>
        );
    }

    export default MatchBoard;