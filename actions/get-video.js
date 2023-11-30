const URL=`${process.env.baseUrl}videos`;

const getVideo = async () => {

  const res = await fetch(`${URL}`);
  
  return res.json();
};

export default getVideo;


