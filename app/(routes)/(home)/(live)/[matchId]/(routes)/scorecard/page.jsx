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





const ScoreCard = () => {
    const params = useParams();

    const matchId = params?.matchId;

    const { data: matchInfo, error: matchInfoError, isLoading: matchInfoLoading } = useQuery(['matchInfo', matchId], async () => {
        try {
            if (!matchId) {
                throw new Error('Match ID is undefined.');
            }

            const playerScore = await getInfo(matchId);

            return playerScore;
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
            const commentry = await  getCommentary(80411);
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

    if (matchInfoLoading || playerScoreLoading ) {
        return <div>Loading...</div>;
    }

    if (matchInfoError || playerScoreError  ) {
        return <div>Error: {matchInfoError ? matchInfoError.message : playerScoreError.message}</div>;
    }

    return (
        <div>

            <MatchBoard data={matchInfo} />
            <div className="lg:container container-full">

                <Tabs defaultValue="scorecard" >
                    <TabsList className="mt-5 flex items-center gap-3 bg-transparent">
                        <TabsTrigger className="h-10 bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="scorecard">Scorecard</TabsTrigger>
                        <TabsTrigger className="h-10 bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="Squad">Squad</TabsTrigger>
                        <TabsTrigger className="h-10 bg-[#FFFFFF] text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="commentary">Commentary</TabsTrigger>
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
                        <Commentary data={commentry}/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>

    );
}

export default ScoreCard