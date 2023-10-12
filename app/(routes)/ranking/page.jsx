import getMensRanking from "@/actions/mens-ranking";
import RankingTable from "./components/ranking-table";
import AddsPromotion from "@/components/adds";
import Image from "next/image";

const RankingPage = async () => {

    const data = await getMensRanking();
    return (
        <div className="container">
            <div className="grid grid-cols-4 w-100">

                <div className=" col-span-3">
                    <div className='p-5 mb-0 '>
                        <h2 className="text-3xl font-bold tracking-tight">ICC Cricket Rankings - Men's Batting</h2>
                        <p className="text-sm text-muted-foreground">
                            {/* {topStoryDetail?.data?.context} */}
                        </p>
                    </div>
                    <div className='p-5 mb-0  '>
                        <RankingTable data={data} />
                    </div>
                </div>

                <div className="lg:col-span-1 col-span-3">
                    <AddsPromotion />
                    <Image className="rounded-md mt-5" src="/images/cardbanner.webp" alt="me" width="442" height="392" />

                </div>

            </div>

        </div>
    );
}

export default RankingPage;