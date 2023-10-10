import { convertToNextInteger } from "@/lib/utils";

const LiveCommentary = ({ data }) => {
  return (
    <div className="flex flex-col ">
      {data?.commentaryList?.map((commentary, index) => (
        <div className=" p-2" key={index}>
          {
            commentary?.overSeparator &&
            <div className="w-100 bg-slate-300 p-2  mb-3 text-sm rounded-md flex justify-around items-center">
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
                <div className=" font-bold">
                  <span>
                    {commentary?.overSeparator?.batTeamName}
                  </span>
                  <span>
                    {commentary?.overSeparator?.score}
                  </span>
                </div>

              </div>
              |

              <div className="flex flex-col items-center">

                <div className="flex justify-between">
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

              |

              <div className="flex flex-col items-center">

                <div className="flex flex-col items-center justify-between">
                  {
                     commentary?.overSeparator?.bowlNames?.map((bolname, index)=>(
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
          }

          <div className="flex">
            <span className="me-3 text-md font-bold">{commentary.overNumber}</span>
            <p className="text-sm">
              {commentary?.commText.replace(/\n/g, '<br />') // Replace \n with <br />
                .split(/(B\d\$|I\d\$|\n\n)/).map((part, index) => {
                  if (part === '\n') {
                    return <br key={index} />;
                  } else if (/^B\d\$/.test(part)) {
                    const formatIndex = commentary.commentaryFormats.bold.formatId.indexOf(part);
                    return (
                      <strong key={index}>
                        {commentary.commentaryFormats.bold.formatValue[formatIndex]}
                      </strong>
                    );
                  } else if (/^I\d\$/.test(part)) {
                    const formatIndex = commentary.commentaryFormats.italic.formatId.indexOf(part);
                    return (
                      <em key={index}>
                        {commentary.commentaryFormats.italic.formatValue[formatIndex]}
                      </em>
                    );
                  }


                  return part;
                })}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default LiveCommentary;
