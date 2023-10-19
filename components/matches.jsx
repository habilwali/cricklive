import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { format } from "date-fns";
import { getImagesData } from "@/lib/localdata";
import Image from "next/image";

const Matches = ({ data }) => {
    const imageData = getImagesData();
    return (
        <>
            {data.filter((data) => data.seriesMatches).map((matches, index) => (
                <div className="mt-2" key={index}>
                    <div className="flex justify-between">
                        <span className="ms-1 pt-3 text-sm font-medium">
                            {matches.seriesMatches.seriesName}
                        </span>
                        {/* <Button className="me-2 rounded-full bg-[#FFFFFF] text-black  hover:text-white">View More</Button> */}
                    </div>
                    <div className="grid lg:grid-cols-2 lg:text-sm text-xs rounded-md bg-white pb-0 mt-2 grid-cols-1 gap-2 sm:divide-y-0 divide-y-2 ">
                        {matches.seriesMatches.matches.map((match, index) => (
                            <div className="ps-5 pe-5 m-0 " key={index}>
                                <CardHeader className=" m-0 pb-0 pt-2  flex flex-row justify-between relative ">
                                    <CardDescription className=" font-sans lg:text-sm text-xs size-[14.68px] mt-2 font-medium ">{match.matchInfo.matchDesc} {match.matchInfo.seriesName} </CardDescription>
                                    <Star className="  top-1 right-0" />
                                </CardHeader>
                                <div className="m-3 flex justify-between items-center">
                                    <div className="m-0 p-0">
                                        <div className="flex flex-row  items-center  p-0  ">
                                            <div className=" bg-[#E5E5E5] w-[47.48px] h-[47.48px] me-0 rounded-full flex justify-center items-center">
                                                <Image src={`/${imageData[match?.matchInfo?.team1?.teamId]}`} width={100} height={100} alt="img" />
                                            </div>
                                            <div className="mt-3 p-3   w-[130px] ">
                                                <span>{match.matchInfo.team1.teamName}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row  items-center  p-0 ">
                                            <div className=" bg-[#E5E5E5] w-[47.48px] h-[47.48px] me-0 rounded-full flex justify-center items-center">
                                            <Image src={`/${imageData[match?.matchInfo?.team2?.teamId]}`} width={100} height={100}  alt="img" />
                                            </div>
                                            <div className="mt-3 p-3   w-[130px] ">
                                                <span>{match.matchInfo.team2.teamName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" flex flex-col  justify-center items-center  border-solid  border-s-2 ps-2">
                                        <span className=" text-start lg:truncate lg:w-[280px] text-[#911414]">
                                            {match.matchInfo.status}
                                            {/* {format(new Date(Number(match?.matchInfo?.startDate)), "MMM d, yyyy, hh:mm a")} */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </>
    );
}

export default Matches;