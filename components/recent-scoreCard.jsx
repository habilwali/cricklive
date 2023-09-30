"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Star } from "lucide-react";
import ReactConfetti from "react-confetti";
import Contifier from './contifier';
import { useRouter } from 'next/navigation';
import { getImagesData } from '@/lib/localdata';
import Image from 'next/image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 711 },
        items: 2,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 710, min: 360 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function RecentScoreCard({ data }) {
    const imageData = getImagesData();
    const router = useRouter();
    const handleClick = (matchId) => {
        router.push(`/${matchId}/scorecard`);
        
        console.log();
    };
    return (
        <div className="mt-5">
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                className='w-[100%] h-[230px]'
            // dotListClass="custom-dot-list-style"
            >
                {data?.map((matches, index) => (
                    <Card onClick={() => handleClick(matches?.matchInfo?.matchId)} key={index} className={`lg:w-[440.84px]  lg:h-[192px] md:w-[340.84px]  w-[320.84px]  h-[192px] relative rounded-[12.23px] dark:bg-gray-800 ${index % 2 === 0 ? ' bg-blue-600 text-white' : null}`} >
                        {/* {
                            index === 1 &&
                            <Contifier />
                        } */}
                        <CardHeader className=" m-0 pt-2 relative gap-2 ">
                            <CardDescription className={`text-center font-sans size-[14.68px] font-medium  ${index % 2 === 0 ? ' bg-blue-600 text-white' : null}`}>{matches.matchInfo.seriesName} </CardDescription>
                            <Star className=" absolute top-0 right-3" />
                        </CardHeader>
                        <CardContent className="flex justify-between ">
                            <div className="flex ">
                                <div className=" flex justify-center items-center   flex-col">
                                    <div className=" bg-yellow-300 w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center">
                                    <Image src={`/${imageData[matches?.matchInfo?.team1?.teamId]}`} width={26} height={31} />
                                    </div>
                                    <h1 className='lg:w-[100px] w-[80px] text-center lg:text-sm text-xs mt-3 '>{matches.matchInfo.team1.teamSName}</h1>
                                </div>
                                <div className="flex  mt-5 flex-col  lg:ms-4  ms-0 " >
                                    <span className=" font-sans text-sm font-medium">{matches?.matchScore?.team1Score?.inngs1?.runs}/{matches?.matchScore?.team1Score?.inngs1?.wickets}</span>
                                    <span className=" font-sans text-xs text-center font-normal">{matches?.matchScore?.team1Score?.inngs1?.overs}</span>
                                </div>
                            </div>
                            <div className="flex  justify-between">
                                {
                                    matches?.matchScore?.team2Score &&
                                    <div className="flex  mt-5 flex-col  lg:me-4  me-2 " >
                                        <span className=" font-sans text-sm font-medium">{matches?.matchScore?.team2Score?.inngs1?.runs}/{matches?.matchScore?.team2Score?.inngs1?.wickets}</span>
                                        <span className=" font-sans text-xs text-center font-normal">{matches?.matchScore?.team2Score?.inngs1?.overs}</span>
                                    </div>
                                }
                                <div className=" flex justify-center items-center   flex-col">
                                    <div className=" bg-yellow-300 w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center">
                                    <Image src={`/${imageData[matches?.matchInfo?.team2?.teamId]}`} width={26} height={31} />
                                    </div>
                                    <h1 className='lg:w-[100px] w-[80px] text-center lg:text-sm text-xs mt-3 '>{matches.matchInfo.team2.teamSName}</h1>
                                </div>
                            </div>
                        </CardContent>
                        <h3 className=" absolute bottom-2 top lg:left-[125px] left-[50px]  text-sm font-normal   truncate w-[230px] ">{matches?.matchInfo?.status}</h3>
                    </Card>
                ))}
            </Carousel>
        </div>
    )
}

export default RecentScoreCard