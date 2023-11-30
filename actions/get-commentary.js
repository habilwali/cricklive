

const URL=`${process.env.baseUrl}getMatchCommentary`;

const getCommentary = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCommentary;