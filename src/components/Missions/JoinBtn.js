import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import propTypes from 'prop-types';
import {
  handleJoinButton,
  handleLeaveButton,
} from '../../Redux/missions/missionReducer';

const JoinBtn = ({ id, reserved }) => {
  const dispatch = useDispatch();
  let button;
  if (!reserved) {
    button = (
      <Button
        variant="outline-secondary"
        type="Button"
        className="text-nowrap"
        onClick={() => dispatch(handleJoinButton(id))}
      >
        Join Mission
      </Button>
    );
  } else {
    button = (
      <Button
        variant="outline-danger"
        type="Button"
        className="text-nowrap"
        onClick={() => dispatch(handleLeaveButton(id))}
      >
        Leave Mission
      </Button>
    );
  }
  return (
    <div>
      {button}
    </div>
  );
};

JoinBtn.propTypes = {
  id: propTypes.string.isRequired,
  reserved: propTypes.bool.isRequired,
};

export default JoinBtn;
