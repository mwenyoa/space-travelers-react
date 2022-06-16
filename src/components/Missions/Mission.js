import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { handleJoinButton } from '../../Redux/missions/missionReducer';

const StatusBadge = () => (
  <div>
    <Badge bg="secondary">
      Not a member
    </Badge>
  </div>
);

const JoinBtn = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="outline-secondary"
      type="Button"
      className="text-nowrap"
      onClick={() => dispatch(handleJoinButton(id))}
    >
      Join Mission
    </Button>
  );
};

const Mission = ({ id, name, description }) => (
  <tr key={id}>
    <td><b>{name}</b></td>
    <td>{description}</td>
    <td className="align-middle">
      <StatusBadge />
    </td>
    <td className="align-middle">
      <JoinBtn id={id} />
    </td>
  </tr>
);

Mission.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

JoinBtn.propTypes = {
  id: propTypes.string.isRequired,
};
export default Mission;
