import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
};

export default Rockets;
