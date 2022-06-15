import React from 'react';
import propTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';

const StatusBadge = () => (
  <div>
    <Badge bg="secondary">
      Not a member
    </Badge>
  </div>
);

const JoinBtn = () => (
  <Button
    variant="outline-secondary"
    type="Button"
    className="text-nowrap"
  >
    Join Mission
  </Button>
);

const Mission = ({ id, name, description }) => (
  <tr key={id}>
    <td><b>{name}</b></td>
    <td>{description}</td>
    <td className="align-middle">
      <StatusBadge />
    </td>
    <td className="align-middle">
      <JoinBtn />
    </td>
  </tr>
);

Mission.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
export default Mission;
