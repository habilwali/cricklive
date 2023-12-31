import getMensRanking from "@/actions/mens-ranking";
import RankingTable from "./components/ranking-table";
import AddsPromotion from "@/components/adds";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardBanner from "@/components/card-bannner";

const Teams = async () => {

    const odiData = await getMensRanking({ matchType: "teams/odi" });
    const t20Data = await getMensRanking({ matchType: "teams/t20" });
    const testData = await getMensRanking({ matchType: "teams/test" });
    return (
        <div className="lg:container lg:p-0  container-full p-1">
            <Tabs defaultValue="odi" >
                <TabsList className="mt-5 flex items-center gap-5 bg-transparent">
                    <TabsTrigger className="h-10   text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="odi">ODI</TabsTrigger>
                    <TabsTrigger className="h-10  text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="t20">T20</TabsTrigger>
                    <TabsTrigger className="h-10  text-black  px-4 py-2 text-sm font-medium transition-colors  rounded-md" value="test">Test</TabsTrigger>
                </TabsList>
                <div className="grid grid-cols-4 w-100 gap-3">
                    <div className=" lg:col-span-3 col-span-4">
                        <TabsContent value="odi">
                            <div className='p-5 mb-0 '>
                                <h2 className="lg:text-3xl  text-2xl font-bold tracking-tight">ICC Cricket ODI Rankings - Men's Teams</h2>
                            </div>
                            <div className='p-2 mb-0  '>
                                <RankingTable data={odiData} />
                            </div>
                        </TabsContent>
                        <TabsContent value="t20">
                            <div className='p-5 mb-0 '>
                                <h2 className="lg:text-3xl text-2xl font-bold tracking-tight">ICC Cricket T20 Rankings - Men's Teams</h2>
                                <p className="text-sm text-muted-foreground">
                                    {/* {topStoryDetail?.data?.context} */}
                                </p>
                            </div>
                            <div className='p-2 mb-0  '>
                                <RankingTable data={t20Data} />
                            </div>
                        </TabsContent>
                        <TabsContent value="test">
                            <div className='p-5 mb-0 '>
                                <h2 className="lg:text-3xl text-2xl font-bold tracking-tight">ICC Cricket Test Rankings - Men's Teams</h2>
                                <p className="text-sm text-muted-foreground">
                                    {/* {topStoryDetail?.data?.context} */}
                                </p>
                            </div>
                            <div className='p-2 mb-0  '>
                                <RankingTable data={testData} />
                            </div>
                        </TabsContent>
                    </div>
                    <div className="lg:col-span-1 col-span-4 lg:p-0 p-2">
                        <AddsPromotion />
                        <CardBanner />                    </div>
                </div>
            </Tabs>
        </div>
    );
}

export default Teams;