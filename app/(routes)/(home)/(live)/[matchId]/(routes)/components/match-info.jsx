"use client"


import { getImagesData } from "@/lib/localdata";
import { format } from "date-fns";

import Image from "next/image";

const MatchBoard = ({ data, score }) => {
    console.log("ssss >>>>", score?.miniscore?.matchScoreDetails);
    const imageData = getImagesData();
    return (
        <div className="w-auto h-[228px] bg-[#022FF8] flex  justify-center items-center">
            <div className="container ">
                <div className="flex justify-between items-center ">

                    <div className="flex items-center lg:p-5  justify-around">
                        <div className="flex justify-center  flex-col items-center" > 
                            <div className=" bg-[#E5E5E5] lg:w-[104.48px] lg:h-[104.48px] w-[45px] h-[45px] rounded-full flex justify-center items-center">
                                <Image src={`/${imageData[data?.data?.team1?.teamId]}`} width={100} height={100} alt="img" />

                            </div>
                            <span className="text-white text-sm font-bold pt-2  text-center">{data?.data?.team1?.teamName}</span>
                        </div>
                        {score?.miniscore?.matchScoreDetails?.inningsScoreList.map((score) => (
                            data?.data?.team1?.teamSName === score?.batTeamName &&
                            <div className="flex  flex-col justify-center lg:ms-5 ms-3">
                                <h1 className='font-medium lg:text-2xl text-sm text-white text-center '>{score?.score}/ {score?.wickets}</h1>
                                <span className='font-medium lg:text-md text-sm text-white text-center '>{score?.overs}</span>
                            </div>
                        ))}
                    </div>
                    <div className=" flex flex-col  justify-center items-center gap-y-1 ">
                        <span className="w-[100px] font-medium lg:text-2xl text-sm   text-white text-md text-center">
                            VS
                        </span>
                    </div>
                    <div className="flex items-center lg:p-5 justify-center">
                        {score?.miniscore?.matchScoreDetails?.inningsScoreList.map((score) => (
                            data?.data?.team2?.teamSName === score?.batTeamName &&
                            <div className="flex  flex-col justify-center me-5">
                                <h1 className='font-medium lg:text-2xl text-sm text-white text-center '>{score?.score}/ {score?.wickets}</h1>
                                <span className='font-medium lg:text-md text-sm text-white text-center '>{score?.overs}</span>
                            </div>
                        ))}
                        <div className="flex justify-center  flex-col items-center" >
                            <div className=" bg-[#E5E5E5] lg:w-[104.48px]  lg:h-[104.48px] w-[45px] h-[45px] rounded-full flex justify-center items-center">
                                <Image src={`/${imageData[data?.data?.team2?.teamId]}`} width={100} height={100} alt="img" />
                            </div>
                            <span className="text-white font-bold pt-2 text-sm text-center">{data?.data?.team2?.teamName}</span>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-col-1 p-5 text-sm w-100 gap-2 text-white  ">
                    <div className="flex ">
                        <span className="text-md font-bold flex">Series: </span>
                        <p className="text-sm ms-2 truncate lg:w-[290px] w-[200px] "> {data?.data?.seriesName}, {data?.data?.matchDesc}</p>
                    </div>
                    <div className="flex lg:justify-center">
                        <span className="text-md font-bold flex">Venue:</span>
                        <p className="text-sm  truncate lg:w-[290px] w-[200px] ms-2"> {data?.data?.venueInfo.ground}, {data?.data?.venueInfo.city}, {data?.data?.venueInfo.country}</p>
                    </div>
                    <div className="flex  lg:justify-end">
                        <span className="text-md font-bold text-end">Date & Time:  </span>
                        <p className="text-sm ms-2"> {format(new Date(Number(data?.data?.startDate)), "dd/LL/yyyy hh:mm a")}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MatchBoard;