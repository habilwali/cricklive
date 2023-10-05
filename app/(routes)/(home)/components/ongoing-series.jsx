import { Star } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const OngoingSeries = ({data}) => {

console.log("OngoingSeries", data);
    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <span className="ms-1 pt-3 text-sm font-medium">
                    Ongoing Series 
                </span>
                {/* <Button className="me-0 rounded-full bg-[#FFFFFF] text-black  hover:text-white">View More</Button> */}
            </div>


         
            <Card className="grid lg:grid-rows  grid-cols-1 gap-2 p-5 mt-2">
                {
                    data?.data?.typeMatches?.filter((data) => data.seriesMatches).map((ongoning) => (
                        <>
                        <CardHeader className=" m-0 pb-0 pt-2 relative ps-0 ">
                        <CardDescription className=" font-sans size-[14.68px] mt-1 font-medium ">{ongoning?.seriesMatches?.seriesName} </CardDescription>
                        <Star fill="#022FF8" className=" absolute top-1 right-3 text-[#022FF8] " />
                    </CardHeader>
                        <Separator />

                        </>
                    ))
                }
               
            
             
            </Card>

        </div>
    );
}

export default OngoingSeries;