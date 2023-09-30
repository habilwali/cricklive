
import { MiniScoreTable, } from "./mini-score-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MiniBowlerTable } from "./mini-bowler-table";

export const MiniScoreCard = ({ data }) => {
  console.log("data?.miniscore?.batsmanStriker>>", data?.miniscore?.batsmanStriker);

  return (
    <>

      <Card className="mt-5 rounded-md p-2">
         
      {data?.miniscore?.matchScoreDetails?.inningsScoreList?.map((score, index)=>(
  <div className="flex justify-around w-[200px]" key={index}>
  <h1 className="ms-3 ">{score?.batTeamName}</h1> 
 
  <h1>{score?.score}</h1>
  /
  <h1>{score?.wickets}</h1>
  <h1>{score?.overs}</h1>

 </div>
      ))}
       
       
          <MiniScoreTable  data={data?.miniscore} />
          <MiniBowlerTable data={data?.miniscore}/>
          
        
        
      </Card>


    </>
  );
};