
import Matches from "../../../../components/matches";
import getUpcoming from "@/actions/get-upcoming";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpcomingScoreCard from "@/components/upcoming-scoreCard";
import FilterButtons from "@/components/filter";
const Upcoming = async () => {
    const data = await getUpcoming({ matchType: "International" });
   
    
    return (
        <div className="container  px-6  ">
               <FilterButtons/>
            <Tabs defaultValue="international" className=" mt-3">
                {/* <TabsList className=" flex justify-center bg-transparent">
                    <TabsTrigger className=" rounded-none" value="international" >International</TabsTrigger>
                    <TabsTrigger className=" rounded-none" value="league">League</TabsTrigger>
                    <TabsTrigger className=" rounded-none" value="domestic">Domestic</TabsTrigger>
                    <TabsTrigger className=" rounded-none" value="women">Women</TabsTrigger>
                </TabsList> */}
                <UpcomingScoreCard data={data?.data?.filteredData} />
                <TabsContent value="international" >
                    <Matches  data={data.data.typeMatches} />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Upcoming;