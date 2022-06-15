import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displayMissions } from '../Redux/missions/missionReducer';

let triggerOnce = false;

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (triggerOnce) return;
    dispatch(displayMissions());
    triggerOnce = true;
  }, []);

  return (
    <div>Hello</div>
  );
};
export default Missions;
