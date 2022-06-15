import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import { displayMissions } from '../../Redux/missions/missionReducer';
import Mission from './Mission';

let triggerOnce = false;

const Missions = () => {
  const missionList = useSelector(
    (state) => state.missionReducer,
    shallowEqual,
  ).flat();

  const dispatch = useDispatch();

  useEffect(() => {
    if (triggerOnce) return;
    dispatch(displayMissions());
    triggerOnce = true;
  }, []);

  return (
    <div>
      <Table
        responsive
        striped
        bordered
        hover
        className="mt-4 mx-auto w-75"
        size="sm"
      >
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missionList.map(({ id, name, description }) => (
            <Mission key={id} id={id} name={name} description={description} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Missions;
