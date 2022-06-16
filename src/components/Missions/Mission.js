import React from 'react';
import propTypes from 'prop-types';
import { Badge } from 'react-bootstrap';
import JoinBtn from './JoinBtn';

const StatusBadge = () => (
  <div>
    <Badge bg="secondary">
      Not a member
    </Badge>
  </div>
);

const Mission = ({
  id, name, description, reserved,
}) => (
  <tr key={id}>
    <td><b>{name}</b></td>
    <td>{description}</td>
    <td className="align-middle">
      <StatusBadge />
    </td>
    <td className="align-middle">
      <JoinBtn id={id} reserved={reserved} />
    </td>
  </tr>
);

Mission.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};

export default Mission;
