import Image from "next/image";
import { MiniScoreCard } from "./component/mini-score-card";
import AddsPromotion from "@/components/adds";
import PointTable from "./component/point-table";
import { Card, CardContent } from "@/components/ui/card";

const Commentary = ({ data, pointtable }) => {
    console.log("commentry", pointtable);
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className=" lg:col-span-2 col-span-3">
                <MiniScoreCard data={data} />
            </div>
            <div className=" lg:col-span-1  col-span-3  rounded-md">
   {
    pointtable?.data?.pointsTable?.map((data, index)=>(
        <Card key ={index} className="mt-5">
        <CardContent className="mt-2 p-0 ps-1 pe-1">
    <PointTable data={data}/>
    </CardContent>
    </Card>
    ))

   }
               
                <div className="mb-3 w-auto">
                    <AddsPromotion />
                </div>
                <Image className="rounded-md" src="/images/sidebanner.webp" alt="me" width="460" height="702" />
            </div>
        </div>
    );
}

export default Commentary;