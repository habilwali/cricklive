import { convertToNextInteger } from "@/lib/utils";

const OverSummery = ({commentary}) => {
  
    return ( 
        <div className="w-100 bg-slate-300 p-2  mb-3 text-sm  rounded-md flex justify-around items-center">
              <span>
                {convertToNextInteger(commentary?.overSeparator?.overNum)}
              </span>
              |
              <div className="flex flex-col items-center">
                <span>
                  Runs Scored: {commentary?.overSeparator?.runs}
                </span>
                <span>
                  {commentary?.overSeparator?.o_summary
                  }
                </span>
              </div>
              |

              <div className="flex flex-col items-center">
                <span>
                  Score after {convertToNextInteger(commentary?.overSeparator?.overNum)} over
                </span>
                <div className=" font-bold gap-1">
                  <span>
                    {commentary?.overSeparator?.batTeamName } 

                  </span>
                  <span> </span>
                  <span>
                     {commentary?.overSeparator?.score} 
                  </span>
                  - <span>
                    {commentary?.overSeparator?.wickets} 
                  </span>
                 
                  
                </div>

              </div>
              |
              <div className="lg:block hidden  ">
             

              <div className="flex flex-col items-center">
           
                <div className="flex justify-between ">
                  <span className="w-15">
                    {commentary?.overSeparator?.batNonStrikerNames} :
                  </span>
                  <span>
                    {commentary?.overSeparator?.batNonStrikerRuns}({commentary?.overSeparator?.batNonStrikerBalls})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="w-15">
                    {commentary?.overSeparator?.batStrikerNames} :
                  </span>
                  <span>
                    {commentary?.overSeparator?.batStrikerRuns}({commentary?.overSeparator?.batStrikerBalls})
                  </span>
                </div>
              </div>
              </div>
              <div className="lg:block hidden">
              |
              </div>
              <div className="lg:block hidden">
             
              <div className="flex flex-col items-center ">
                <div className="flex flex-col items-center justify-between">
                  {
                    commentary?.overSeparator?.bowlNames?.map((bolname, index) => (
                      <span key={index} className="w-15">
                        {bolname}
                      </span>
                    ))

                  }

                  <span>
                    {commentary?.overSeparator?.bowlOvers}-{commentary?.overSeparator?.bowlMaidens}-{commentary?.overSeparator?.bowlRuns}-{commentary?.overSeparator?.bowlWickets
                    }
                  </span>
                </div>

              </div>
            </div>
            </div>
     );
}
 
export default OverSummery;