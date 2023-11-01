const URL=`https://cricapp.bingerush.com/api/videos`;

const getVideo = async () => {
  
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getVideo;


