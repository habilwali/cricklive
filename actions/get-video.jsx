const URL=`http://192.168.50.36:5000/api/videos`;

const getVideo = async () => {
  
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getVideo;


