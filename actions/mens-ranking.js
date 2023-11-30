

const URL=`${process.env.baseUrl}stats/get-icc-rankings/`;

const getMensRanking = async (query) => {
  
  const res = await fetch(`${URL}${query.matchType}`);
  return res.json();
};

export default getMensRanking;