"use client"

import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Billboard({ data }) {
    const params = useParams()
    const firstElement = data?.filter((_, index) => index === 0);
    console.log("firstElement", firstElement);
    return (
        <div className="pt-3 pb-3 lg:p-0 lg:pt-8 lg:pb-8 rounded-xl overflow-hidden ">
            {
                firstElement?.map((data, index) => (
                    <div key={index} style={{ backgroundImage: `url(https://cricapp.bingerush.com/${data?.imageData})`, }} className="rounded-xl  relative aspect-square  md:aspect-[2.4/1]   overflow-hidden bg-cover   ">
                        <div className="h-full w-full flex flex-col  justify-end pb-2 p-3 items-start text-center gap-y-8">
                            <div className='flex  lg:justify-between lg:flex-row  flex-col  w-full items-center'>
                                {
                                    !params?.newsId &&
                                    <>
                                        <div className="text-neutral-100 lg:text-xl  text-md  w-[500px] font-medium  font-['Satoshi'] bg-black    bg-opacity-50  ">
                                            {data?.hline}</div>
                                        <Button className="text-center lg:block hidden text-neutral-950 text-lg font-medium font-['Satoshi'] opacity-40 bg-neutral-200 hover:bg-red-300 hover:text-white">Read More</Button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
