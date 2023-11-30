

const URL=`${process.env.baseUrl}matches/get-scorecard`;

const getPlayerScore = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getPlayerScore;