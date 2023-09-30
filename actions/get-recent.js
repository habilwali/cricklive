
import qs from "query-string";

const URL=`https://cricapp.bingerush.com/api/matches/list/recent`;

const getRecent = async (query) => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      matchType: query.matchType,
    },
  });
  

  const res = await fetch(url,{ cache: 'force-cache' });
  return res.json();
};

export default getRecent;