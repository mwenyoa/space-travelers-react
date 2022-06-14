const url = 'https://api.spacexdata.com/v3/missions';

const getData = async () => {
  const res = (await fetch(url)) || [];
  const data = res.json();
  console.log(data);
  return data;
};
export default getData;
