const LiveCommentary = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data?.commentaryList?.map((commentary, index) => (
        <div className="flex p-2" key={index}>
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

              console.log("part",part);
              return part;
            })}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LiveCommentary;
