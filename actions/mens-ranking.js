

const URL=`https://cricapp.bingerush.com/api/stats/get-icc-rankings/batsmen/odi/`;

const getMensRanking = async () => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getMensRanking;