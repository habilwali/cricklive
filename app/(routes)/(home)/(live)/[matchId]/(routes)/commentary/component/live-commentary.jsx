const LiveCommentary = ({data}) => {
    return ( 
        <div className="flex flex-col ">
          {
            data?.commentaryList?.map((comentary) => (
              <div className="flex p-2">
                <span className="me-3 text-md font-bold"> {comentary.overNumber} </span>
                <p className="text-sm">
                  {comentary?.commText.split(/(B\d\$)/).map((part, index) => {
                    const isFormatId = /^B\d\$/.test(part);
                    if (isFormatId) {
                      const formatIndex = comentary.commentaryFormats.bold.formatId.indexOf(part);
                      return (
                        <strong key={index}>
                          {comentary.commentaryFormats.bold.formatValue[formatIndex]}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>

              </div>
            ))

          }

        </div>
     );
}
 
export default LiveCommentary;