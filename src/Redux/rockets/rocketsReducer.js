import fetchRocketData from './rocketAPI';

const GET_ROCKETS = 'space-travelers-react/Redux/GET_ROCKETS';
const fetchRockets = (payload) => ({
  type: GET_ROCKETS, payload,
}
);

export const fetchRocketsData = () => async (dispatch) => {
  const rockets = await fetchRocketData();
  rockets.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
    });
  });
  dispatch(fetchRockets(rockets));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rocketReducer;
