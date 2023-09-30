import ScoreCard from "@/components/scoreCard";
import Matches from "../components/matches";
import getUpcoming from "@/actions/get-upcoming";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UpcomingScoreCard from "@/components/upcoming-scoreCard";
import FilterButtons from "@/components/filter";
const cards = [
    { id: 1, title: 'Card 1', content: 'Super 4 match pak vs ind ' },
    { id: 2, title: 'Card 2', content: 'Super 4 match pak vs ind ' },
    { id: 3, title: 'Card 3', content: 'Super 4 match pak vs ind ' },
    { id: 4, title: 'Card 4', content: 'Super 4 match pak vs ind ' },
    { id: 5, title: 'Card 5', content: 'Super 4 match pak vs ind ' },

];
const UpcomingMatches = async () => {
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

export default UpcomingMatches;