import { MiniScoreCard } from "./component/mini-score-card";




const Commentary = ({data}) => {


    return (

        <div className="grid grid-cols-3">
            <div className=" lg:col-span-2 col-span-3">
            <MiniScoreCard data={data}/>
            </div>
            <div className=" col-span-1">
<h1>hello</h1>
            </div>
           
        </div>
       
    );
}

export default Commentary;