import { convertToNextInteger } from "@/lib/utils";

const MiniScore = ({data}) => {
    return ( 
        <div className="pt-3 ps-0 pb-3">
          {data?.miniscore?.matchScoreDetails?.inningsScoreList?.map((score, index) => (

            <div className={`flex ${data?.miniscore?.inningsId === score?.inningsId ? 'text-2xl font-extrabold' : 'text-md '} items-start w-[300px]  mb-4 `} key={index}>
              <h1 className="me-5">{score?.batTeamName}</h1>
              <span >{score?.score}</span>
              <span >/</span>
              <span >{score?.wickets}</span>
              <span className="ms-1">({convertToNextInteger(score?.overs)})</span>
              {
                data?.miniscore?.inningsId === score?.inningsId ? (
                  <span className={`  ms-1   text-sm text-[#911414] mt-2 `}> CRR: {data?.miniscore?.currentRunRate}</span>

                ) : (
                  null
                )
              }
            </div>
          ))}

          <span className="ms-1  text-sm text-[#911414]  ">{data?.matchHeader?.status}</span>
        </div>
     );
}
 
export default MiniScore;