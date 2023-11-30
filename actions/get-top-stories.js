

const URL=`https://cricapp.bingerush.com/api/stories/list`;

const getTopStories = async () => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getTopStories;