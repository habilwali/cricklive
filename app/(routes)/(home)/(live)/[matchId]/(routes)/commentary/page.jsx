import Image from "next/image";
import { MiniScoreCard } from "./component/mini-score-card";




const Commentary = ({data}) => {


    return (

        <div className="grid grid-cols-3 gap-2">
            <div className=" lg:col-span-2 col-span-3">
            <MiniScoreCard data={data}/>
            </div>
            <div className=" col-span-1 mt-5 rounded-md">
            <Image  className="rounded-md" src="/images/sidebanner.webp" alt="me" width="360" height="702" />
            </div>
           
        </div>
       
    );
}

export default Commentary;