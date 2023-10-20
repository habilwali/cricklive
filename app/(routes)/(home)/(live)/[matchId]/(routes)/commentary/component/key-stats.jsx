const KeyStats = ({data}) => {
    return ( 
        <div className=" border-[#E5E5E5] lg:col-span-1  col-span-3">
        <div className=" bg-[#E5E5E5] p-3 " >
           <h1 className="text-sm  text-foreground font-bold text-slate-500">Key Stats</h1>
        </div>
        <div className="flex flex-col gap-2 p-2 text-sm " > 
          <span><span className=" font-bold">Partnership:</span> {data?.miniscore?.partnerShip?.runs} ({data?.miniscore?.partnerShip?.balls})</span>
          <span><span className=" font-bold">Last Wicket:</span> {data?.miniscore?.lastWicket}</span>
          {data?.miniscore?.latestPerformance?.map((latestPerformance,index) => (
            <span key={index}> <span className=" font-bold">{latestPerformance.label}:</span> {latestPerformance.runs}, {latestPerformance.wkts} wkts</span>
          ))}
          <span > <span className=" font-bold">Toss:</span>  {data?.matchHeader?.tossResults?.tossWinnerName} ({data?.matchHeader?.tossResults?.decision})</span>
        </div>
      </div>
     );
}
 
export default KeyStats;