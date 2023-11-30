

const URL=`${process.env.baseUrl}series/get-points-table`;

const getPointTable = async (id) => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getPointTable;