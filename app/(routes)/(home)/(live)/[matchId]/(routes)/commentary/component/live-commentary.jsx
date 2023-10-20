import { addLineBreaks, convertToNextInteger } from "@/lib/utils";
import OverSummery from "./over-summery";

const LiveCommentary = ({ data }) => {

  return (
    <div className="flex flex-col ">
      {data?.commentaryList?.map((commentary, index) => (
        <div className=" p-2" key={index}>
          {
            commentary?.overSeparator &&
            <OverSummery commentary={commentary}/>
          }
          <div className="flex text-sm ">
            <span className="me-3 text-md font-bold">{commentary.overNumber}</span>
            <p className="text-sm ">
              {commentary?.commText.split(/(B\d\$|I\d\$)/).map((part, index) => {
                if (/^B\d\$/.test(part)) {
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
                const value = addLineBreaks(part);
                return value;
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveCommentary;
