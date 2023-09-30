

const URL=`https://cricapp.bingerush.com/api/matches/get-scorecard`;

const getPlayerScore = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getPlayerScore;