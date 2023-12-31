

const URL=`${process.env.baseUrl}stories/detail`;

const getTopStoryDetail = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getTopStoryDetail;