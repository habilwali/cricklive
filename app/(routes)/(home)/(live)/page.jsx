"use client"
// import Matches from "./components/matches";
import ScoreCard from "@/components/scoreCard";
import getLive from "@/actions/get-live";

import TopStories from "../components/top-stories";
// import FeatureVideos from "./components/feature-videos";
// import ReactConfetti from "react-confetti";
import AddsPromotion from "@/components/adds";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ScorecardSkeleton from "@/components/skeletonUi/scorecard-skeleton";
import OngoingSeries from "../components/ongoing-series";
import { getImagesData } from "@/lib/localdata";
import FilterButtons from "@/components/filter";
import getTopStories from "@/actions/get-top-stories";
import { useQuery } from "@tanstack/react-query";
import getUpcoming from "@/actions/get-upcoming";
import Image from "next/image";

export default function Home() {

  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true)
  const imageData = getImagesData();
 
  const fetchData = async () => {
    try {
      const response = await getLive({ matchType: 'International' });
  
      setLoading(false)
      setData(prevData => ({
        ...prevData,
        newData: response?.data
      }));
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data
    const interval = setInterval(fetchData, 1000000); // Fetch data every 20 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  
  const { data: topStories, error: topStoriesError, isLoading: topStoriesLoading } = useQuery(['topStories'], async () => {
    try {
      

        const topStories = await getTopStories();

        return topStories;
    } catch (error) {
        throw new Error(`Error fetching player score: ${error.message}`);
    }
});



const { data: onGoingSeries, error: onGoingSeriesError, isLoading: onGoingSeriesLoading } = useQuery(['onGoingSeries'], async () => {
  try {
    

      const onGoingSeries = await getUpcoming({ matchType: "International" });

      return onGoingSeries;
  } catch (error) {
      throw new Error(`Error fetching player score: ${error.message}`);
  }
});




  

  return (
    <>
      <div className="container  px-6  ">

      <FilterButtons/>
        <Tabs defaultValue="international" className="mt-3">
          {/* <TabsList className=" flex justify-center bg-transparent">
            <TabsTrigger value="international" className=" rounded-none" >International</TabsTrigger>
            <TabsTrigger value="league" className=" rounded-none">League</TabsTrigger>
            <TabsTrigger value="domestic" className=" rounded-none" >Domestic</TabsTrigger>
            <TabsTrigger value="women" className=" rounded-none" >Women</TabsTrigger>
          </TabsList> */}
          {isLoading && 
          <ScorecardSkeleton/>
          }
          {
            data.newData ? (<ScoreCard data={data?.newData?.typeMatches} />) : (null)
          }
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="col-span-2">
              <TabsContent value="international" >
                {/* <Matches /> */}
              </TabsContent>
              <OngoingSeries  data={onGoingSeries}/>
              <TopStories data={topStories}/>
              {/* <FeatureVideos /> */}
            </div>
            <div className="">
              <AddsPromotion />
              <Image  className="rounded-md mt-5" src="/images/cardbanner.webp" alt="me" width="442" height="192" />
              
            </div>
          </div>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>

      {/* <div className="container mt-3 w-100 h-100">
    <ContentSection/>

    </div>
     */}
    </>

  );
}
