

const URL=`https://cricapp.bingerush.com/api/matches/get-scorecard`;

const getScorecard = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getScorecard;