"use client"

import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Billboard() {
    const params = useParams()
    console.log("params", params);
    return (
        <div className="pt-3 pb-3 lg:p-0 lg:pt-8 lg:pb-8 rounded-xl overflow-hidden ">
            <div style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/a607/543f/252a4c1704ab4a5393cf35e9e201063a?Expires=1697414400&Signature=RQcULFN4QhoOLDj1T5d6W7eaMlR9G4ek-EbVw4eT6zSZbdnvDeMi12CqukZ~giL1wUajlhpGsvRVOHM5Cmb396ByYEmpMQEup8ARZGj0Mger4wbr~j4NoD6yhrK6FVc0Ao-46MmpnjQ5zeflsCq0BusRJFwDghGqG6L8NapF1JUCUPBdgPeuaOqjSSKIQ5eoiiRWexKTUtW7LO4ys-yLifqm1mZHSpt0xrI7tsOpzbyCjJVPLPgt1bYcjtLiUhnkJhHt04yCt4UM9mrHvx6~YydamG9eaOzjFzU0bEyYdssgyfmtwmctWOXNkGBilCTVMPUBVn6nOIdW~nVNBKXttw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1]   overflow-hidden bg-cover lg:bg-top bg-center ">
                <div className="h-full w-full flex flex-col  justify-end pb-0 p-3 items-start text-center gap-y-8">
                    <div className='flex  lg:justify-between lg:flex-row  flex-col  w-full items-center'>
                        {
                            !params?.newsId &&
                            <>
                                <div className="text-neutral-100 lg:text-xl  text-md  w-[500px] font-medium  font-['Satoshi'] bg-black    bg-opacity-50  ">
                                    Super11 Asia Cup 2023 | Final | India vs Sri Lanka |<br />Highlights</div>
                                <Button className="text-center lg:block hidden text-neutral-950 text-lg font-medium font-['Satoshi'] opacity-40 bg-neutral-200 hover:bg-red-300 hover:text-white">Read More</Button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
