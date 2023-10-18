"use client"


import { ScoreCardTable } from "./component/score-card";
import { useParams } from "next/navigation";
import { useQueries, useQuery } from "@tanstack/react-query";
import Squads from "../squads/page";
import MatchBoard from "../components/match-info";
import axios from "axios";
import getPlayerScore from "@/actions/get-player-score";
import getInfo from "@/actions/get-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Commentary from "../commentary/page";
import getCommentary from "@/actions/get-commentary";
import MatchInfoSkeleton from "@/components/skeletonUi/match-info-skeleton";
import ButtonSkeleton from "@/components/skeletonUi/button-skeleton";
import CommentarySkeleton from "@/components/skeletonUi/commentarycardSkeleton";
import SocialLinkSkeleton from "@/components/skeletonUi/social-links-skeleton";
import getPointTable from "@/actions/get-point-table";

const ScoreCard = () => {
    const params = useParams();
    const matchId = params?.matchId;
    const { data: matchInfo, error: matchInfoError, isLoading: matchInfoLoading } = useQuery(['matchInfo', matchId], async () => {
        try {
            if (!matchId) {
                throw new Error('Match ID is undefined.');
            }
            const matchInfo = await getInfo(matchId);
            return matchInfo;
        } catch (error) {
            throw new Error(`Error fetching player score: ${error.message}`);
        }
    });




    const seriesId = matchInfo?.data?.seriesId;


    const { data: pointTable, error: pointTableError, isLoading:pointTableLoading } = useQuery(['pointTable', seriesId], async () => {
        try {
            if (!seriesId) {
                throw new Error('Series ID is undefined.');
            }
            const pointTable = await getPointTable(seriesId);
            return pointTable;
        } catch (error) {
            throw new Error(`Error fetching player score: ${error.message}`);
        }
    });

  
    const { data: playerScore, error: playerScoreError, isLoading: playerScoreLoading } = useQuery(['playerScore', matchId], async () => {
        try {
            if (!matchId) {
                throw new Error('Match ID is undefined.');
            }
            const playerScore = await getPlayerScore(matchId);
            return playerScore;
        } catch (error) {
            throw new Error(`Error fetching player score: ${error.message}`);
        }
    });

    const { data: commentry, error: commentryError, isLoading: commentryLoading } = useQuery(['commentry', matchId], async () => {
        try {
            if (!matchId) {
                throw new Error('Match ID is undefined.');
            }
            const commentry = await getCommentary(matchId);
            return commentry;
        }
        catch (error) {
            throw new Error(`Error fetching player score: ${error.message}`);
        }
    },
        {
            refetchInterval: 6000
        }
    );
    const commentryLoadings = true
    if (matchInfoLoading || playerScoreLoading || commentryLoading) {
        return (
            <div >
                <MatchInfoSkeleton />
                <ButtonSkeleton />
               <CommentarySkeleton />
            </div>
        )
    }

    if (matchInfoError || playerScoreError) {
        return <div>Error: {matchInfoError ? matchInfoError.message : playerScoreError.message}</div>;
    }

    return (
        <div>
            <MatchBoard data={matchInfo} score={commentry} />
            <div className="lg:container ">
                <Tabs defaultValue="commentary" >
                    <TabsList className="mt-5 flex items-center gap-3 bg-transparent">
                        <TabsTrigger className="h-10 bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="commentary">Commentary</TabsTrigger>
                        <TabsTrigger className="h-10 bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="scorecard">Scorecard</TabsTrigger>
                        <TabsTrigger className="h-10 bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="Squad">Squad</TabsTrigger>
                    </TabsList>
                    <TabsContent value="scorecard">
                        <div className="grid grid-cols-5 ">
                            <div className=" lg:col-span-3 col-span-5">
                                {
                                    playerScore?.data?.scorecard?.map((score, index) => (
                                        <div className="" key={index}>
                                            <ScoreCardTable data={score} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-span-2">
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="Squad">
                        <Squads data={matchInfo} />
                    </TabsContent>
                    <TabsContent value="commentary">
                        <Commentary data={commentry} pointtable={pointTable}/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default ScoreCard