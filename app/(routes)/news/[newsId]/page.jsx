"use client"

import React from 'react'
import Billboard from '../components/billboard'
import { useParams } from 'next/navigation'
import getTopStoryDetail from '@/actions/get-topStoryDetail'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { format } from 'date-fns'
import AddsPromotion from '@/components/adds'


export default function NewsDetail() {

  const params = useParams()

  const { data: topStoryDetail, error: topStoryDetailError, isLoading: topStoryDetailLoading } = useQuery(['topStoryDetail'], async () => {
    try {
      const topStories = await getTopStoryDetail(params.newsId);
      return topStories;
    } catch (error) {
      throw new Error(`Error fetching player score: ${error.message}`);
    }
  },

    {
      staleTime: 1, // Set the stale time to 60 seconds (1 minute)
    });

  if (topStoryDetailLoading) {
    <div>Loading</div>
  }

  console.log("topStoryDetail", topStoryDetail);

  return (
    <div className='container grid grid-cols-3 gap-2'>
      <div className=' col-span-2' >
        <div className='p-5 mb-0 '>
          <h2 className="text-3xl font-bold tracking-tight">{topStoryDetail?.data?.headline}</h2>
          <p className="text-sm text-muted-foreground">
            {topStoryDetail?.data?.context}
          </p>
        </div>
        <div className=" rounded-lg p-3">
          <Image className=" rounded-lg" src={`https://cricapp.bingerush.com/${topStoryDetail?.data?.imageData}`} width={800} height={347} alt="img" />
        </div>

        {
          topStoryDetail?.data?.content?.map((content, index) => (
            <div  key={index} className='pt-5 w-[90%] ms-1 gap-4'>
              <p className='mb-5  text-justify text-base font-normal font-[helvetica, "Segoe UI", Arial, sans-serif]  tracking-tight '>{content?.content?.contentValue?.replace(/@L0\$/, topStoryDetail?.data?.format[1].value[0])}</p>
            </div>

          ))
        }

        <span className='text-xs text-muted-foreground'>
           by {topStoryDetail?.data?.authors?.map((authdata) => authdata?.name)}    
        </span>

      </div>

      <div className=" col-span-1  rounded-md">
                <div className="mb-3 w-100">
                    <AddsPromotion />
                </div>
                <Image className="rounded-md" src="/images/sidebanner.webp" alt="me" width="460" height="702" />
            </div>


    </div>
  )
}
