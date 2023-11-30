

const URL=`${process.env.baseUrl}stories/list`;

const getTopStories = async () => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getTopStories;