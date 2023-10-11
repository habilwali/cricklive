import RankingTable from "./components/ranking-table";

const RankingPage = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-6 w-100">
                <div className=" col-span-5">
                    <div className='p-5 mb-0  '>
                        <h2 className="text-3xl font-bold tracking-tight">ICC Cricket Rankings - Men's Batting</h2>
                        <p className="text-sm text-muted-foreground">
                            {/* {topStoryDetail?.data?.context} */}
                        </p>
                    </div>

                    <div className='p-5 mb-0  '>
                       <RankingTable/>
                    </div>
                </div>

                <div className='p-5 mb-0  '>
                    helo
                </div>

            </div>

        </div>
    );
}

export default RankingPage;