import getData from './fetchAPI';

export const ADD_STORE = 'space-travelers-react/Redux/ADD_STORE';
export const JOIN_MISSION = 'space-travelers-react/Redux/JOIN_MISSION';

export const addStore = (payload) => ({
  type: ADD_STORE,
  payload,
});

export const reserveMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const displayMissions = () => async (dispatch) => {
  const missions = await getData();
  const arr = [];
  missions.forEach((obj) => {
    arr.push({
      id: obj.mission_id,
      name: obj.mission_name,
      description: obj.description,
    });
  });
  dispatch(addStore(arr));
};
export const handleJoinButton = (id) => (dispatch) => {
  dispatch(reserveMission(id));
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STORE:
      return [...state, action.payload];
    case JOIN_MISSION:
      return state.flat().map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

export default missionReducer;
