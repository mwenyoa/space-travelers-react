const URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketData = async () => {
  const response = (await fetch(URL)) || [];
  const resRockets = response.json();
  return resRockets;
};

fetchRocketData();
export default fetchRocketData;
