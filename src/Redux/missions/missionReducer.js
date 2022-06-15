// import getData from './fetchAPI';
// import { useDispatch } from "react-redux";
export const ADD_STORE = 'ADD_STORE';

export const addStore = (payload) => ({
  type: ADD_STORE,
  payload,
});

// export const displayMissions = () =>
// async (dispatch) => {
//   const missions = await getData();
//   const arr = [];
//   missions.forEach((obj) => {
//     arr.push({
//       mission_id: obj.mission_id,
//       mission_name: obj.mission_name,
//       description: obj.description,
//     });
//   });
//   dispatch(addStore(arr));
// };

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_STORE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionReducer;
