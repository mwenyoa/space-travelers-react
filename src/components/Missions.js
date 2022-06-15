import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../Redux/missions/fetchAPI';
import { addStore } from '../Redux/missions/missionReducer';

const displayMissions = () => async (dispatch) => {
  const missions = await getData();
  const arr = [];
  missions.forEach((obj) => {
    arr.push({
      mission_id: obj.mission_id,
      mission_name: obj.mission_name,
      description: obj.description,
    });
  });
  dispatch(addStore(arr));
  return arr;
};

const Missions = () => {
  const missionList = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  useCallback(() => {
    dispatch(displayMissions());
  }, []);

  console.log(missionList);
  return <div>Hello</div>;
};
export default Missions;
