"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LogIn, Star } from "lucide-react";
import ReactConfetti from "react-confetti";
import Contifier from './contifier';
import { getImagesData } from '@/lib/localdata';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { convertToNextInteger } from '@/lib/utils';

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

function ScoreCard({ data }) {
    const loaderProp = ({ src }) => {
        return src;
    }
    const imageData = getImagesData();
    const router = useRouter();
    const handleClick = (matchId) => {
        router.push(`/${matchId}/scorecard`);
    };
    return (
        <div className="mt-5">
            {
                data.length === 0 ? (<Image className=" rounded-xl  p-0 w-auto lg:h-auto h-[150px] " src="/images/nolive.jpg" loader={loaderProp} alt="me" width="1400" height="192" />) : (<Carousel
                    responsive={responsive}
                    autoPlay={false}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    partialVisible={false}
                    className={`w-[100%] h-[230px] ${ data.length < 3 ? 'flex justify-center' : " "}  `}
                // dotListClass="custom-dot-list-style"
                >
                    {
                        data?.map((match, index) => (
                            <>
                                <Card key={match?.matchInfo?.matchId} onClick={() => handleClick(match?.matchInfo?.matchId)} className={`lg:w-[440.84px]   lg:h-[192px] md:w-[340.84px] font-[helvetica, "Segoe UI", Arial, sans-serif]   w-auto  h-[182px] relative hover:cursor-pointer rounded-[12.23px]  ${index % 2 === 0 ? ' bg-[#022FF8] text-white' : null}`} >
                                    <svg className="group88  absolute top-0 bottom-0 " width={442} height={192} viewBox="0 0 442 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse className='lg:block hidden' cx="432.922" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                                        <ellipse className='lg:hidden' cx="335.922" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                                        <ellipse className='lg:block hidden' cx="4.8918" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                                        <ellipse className='lg:hidden' cx="-28.7918" cy="91.4894" rx="106.396" ry="106.128" fill="#D9D9D9" fillOpacity="0.1" />
                                    </svg>
                                    {/* {
                                index === 1 &&
                                <Contifier />
                            } */}
                                    <CardHeader className=" m-0 pt-2 relative gap-2 ">
                                        <CardDescription className={`text-center  lg:ms-[46px]  size-[14.68px] font-medium lg:truncate lg:w-[280px] ${index % 2 === 0 ? '  bg-transparent text-white' : null}`}>{match?.matchInfo?.seriesName} </CardDescription>
                                        <Star className=" absolute top-0 right-3" />
                                    </CardHeader>
                                    <CardContent className="flex justify-between p-0 ">
                                        <div className="flex justify-between items-center">
                                            <div className=" flex justify-center items-center   flex-col">
                                                <div className=" bg-yellow-300 w-[47.48px] h-[47.48px] me-0 rounded-full flex justify-center items-center">
                                                    <Image src={`/${imageData[match?.matchInfo?.team1?.teamId]}`} width={100} height={100} alt="" />
                                                </div>
                                                <h1 className='lg:w-[100px] w-[80px] text-center lg:text-sm text-xs mt-3 '>{match.matchInfo.team1.teamSName}</h1>
                                            </div>
                                            {
                                                match?.matchScore?.team1Score &&
                                                <div className="flex  mt-1 flex-col  lg:ms-4  ms-0  " >
                                                    <div>
                                                        <span className="  text-sm font-medium">{match?.matchScore?.team1Score?.inngs1?.runs ? (match?.matchScore?.team1Score?.inngs1?.runs) : (0)} / </span>
                                                        <span className="  text-sm font-medium">{match?.matchScore?.team1Score?.inngs1?.wickets ? (match?.matchScore?.team1Score?.inngs1?.wickets) : (0)}</span>
                                                    </div>
                                                    <span className="  text-xs text-center font-normal">{convertToNextInteger(match?.matchScore?.team1Score?.inngs1?.overs ? (match?.matchScore?.team1Score?.inngs1?.overs) : (0))}</span>
                                                </div>
                                            }
                                        </div>
                                        <div className="flex  justify-between">
                                            {
                                                match?.matchScore?.team2Score &&
                                                <div className="flex  mt-5 flex-col  lg:me-4  me-2 " >
                                                    <div>
                                                        <span className="  text-sm font-medium">{match?.matchScore?.team2Score?.inngs1?.runs ? (match?.matchScore?.team2Score?.inngs1?.runs) : (0)}/</span>
                                                        <span className="  text-sm font-medium">{match?.matchScore?.team2Score?.inngs1?.wickets ? (match?.matchScore?.team2Score?.inngs1?.wickets) : (0)}</span>
                                                    </div>
                                                    <span className="  text-xs text-center font-normal">{convertToNextInteger(match?.matchScore?.team2Score?.inngs1?.overs ? (match?.matchScore?.team2Score?.inngs1?.overs) : (0))}</span>
                                                </div>
                                            }
                                            <div className=" flex justify-center items-center   flex-col">
                                                <div className=" bg-yellow-300 w-[47.48px] h-[47.48px] rounded-full flex justify-center items-center">
                                                    <Image src={`/${imageData[match?.matchInfo?.team2?.teamId]}`} width={100} height={100} alt="" />
                                                </div>
                                                <h1 className='lg:w-[100px] w-[80px] text-center lg:text-sm text-xs mt-3 '>{match.matchInfo.team2.teamSName}</h1>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <h3 className=" absolute bottom-2 top lg:left-[125px] left-[70px]  text-sm font-normal   truncate w-[230px] ">{match?.matchInfo?.status}</h3>
                                </Card>
                            </>
                        ))
                    }
                </Carousel>)
            }

        </div>


    )
}

export default ScoreCard