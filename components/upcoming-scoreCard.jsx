"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Star } from "lucide-react";
import ReactConfetti from "react-confetti";
import Contifier from './contifier';
import { format } from 'date-fns';
import { getImagesData } from '@/lib/localdata';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


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

function UpcomingScoreCard({ data }) {
    const router = useRouter();
    const imageData = getImagesData();
    const handleClick = (matchId) => {
        router.push(`/${matchId}/scorecard`);
        
  
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
                    <Card onClick={() => handleClick(matches?.matchInfo?.matchId)} key={index} className={`lg:w-[440.84px] font-[helvetica, "Segoe UI", Arial, sans-serif] hover:cursor-pointer md:w-[340.84px] mt-0    w-auto h-[192px] relative rounded-[12.23px]  ${index % 2 === 0 ? ' bg-[#022FF8] text-white' : null}`} >
                     <svg className="group88  absolute top-0 bottom-0 " width={442} height={192} viewBox="0 0 442 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse  className='lg:block hidden' cx="432.922" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                            <ellipse className='lg:hidden' cx="335.922" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                            <ellipse className='lg:block hidden' cx="4.8918" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                            <ellipse className='lg:hidden' cx="-28.7918" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                        </svg>
                        {/* {
                            index === 1 &&
                            <Contifier />
                        } */}
                        <CardHeader className=" m-0 pt-2 relative gap-2 ">
                            <CardDescription  className={` text-center lg:ms-[46px] font-sans size-[14.68px] font-medium  lg:truncate lg:w-[280px] ${index % 2 === 0 ? ' text-white' : null}`}>{matches?.matchInfo?.seriesName} </CardDescription>
                            <Star className=" absolute top-0 right-3" />
                        </CardHeader>
                        <CardContent className="flex justify-between ">
                            <div className="flex justify-center flex-col items-start">
                                <div className="flex items-center flex-col justify-center">
                                    <div  className=" bg-yellow-300 w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center">
                                    <Image src={`/${imageData[matches?.matchInfo?.team1?.teamId]}`} width={100} height={100}  alt=""/>
                                    </div>
                                    <h1 className='w-[70px] text-center'>{matches.matchInfo.team1.teamSName}</h1>
                                </div>
                            </div>
                            <div className=" flex flex-col  justify-center items-center gap-y-3 ">
                                <span className="w-[100px] text-md text-center">
                                    Start Time
                                </span>
                                <span className='w-[100px] text-center text-sm '>
                                    {format(new Date(Number(matches?.matchInfo?.startDate)), "dd/LL/yyyy hh:mm a")}
                                </span>
                            </div>
                            <div className="flex  justify-between">
                                <div className="flex items-center flex-col justify-center">
                                    <div className=" bg-yellow-300 w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center">
                                    <Image src={`/${imageData[matches?.matchInfo?.team2?.teamId]}`} width={100} height={100} alt=""/>
                                    </div>
                                    <h1 className='w-[70px] text-center'>{matches.matchInfo.team2.teamSName}</h1>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Carousel>
        </div>
    )
}

export default UpcomingScoreCard