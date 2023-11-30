
import qs from "query-string";

const URL=`https://cricapp.bingerush.com/api/matches/list/live`;

const getLive = async (query) => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      matchType: query.matchType,
    },
  });

  const res = await fetch(url);
  return res.json();
};

export default getLive;