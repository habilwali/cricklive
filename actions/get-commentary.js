

const URL=`https://www.cricbuzz.com/api/cricket-match/commentary`;

const getCommentary = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCommentary;