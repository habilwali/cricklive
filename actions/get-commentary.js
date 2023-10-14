

const URL=`https://cricapp.bingerush.com/api/getMatchCommentary`;

const getCommentary = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCommentary;