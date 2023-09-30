

const URL=`https://cricapp.bingerush.com/api/matches/get-info`;

const getInfo = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getInfo;