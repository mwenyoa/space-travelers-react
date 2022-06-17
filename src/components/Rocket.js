/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserve } from '../Redux/rockets/rocketsReducer';

const Rockets = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    rocket_id, rocket_name, description, flickr_images, reserved,
  } = rocket;

  return (
    <div className="rocket-details d-flex">
      <div className="detail-image d-flex">
        <img src={flickr_images} alt={rocket_name} />
      </div>
      <div className="reserve-rocket-info d-flex-column">
        <h2 className="rocket-name">{rocket_name}</h2>
        <p className="rocket-description">
          <span className={reserved ? 'status' : ' '}>
            {reserved ? 'Reserved' : ''}
          </span>
          {description}
        </p>
        <div>
          <button
            type="button"
            className={reserved === true ? 'disabled' : 'reserve-btn button'}
            onClick={() => (!reserved ? dispatch(reserveRocket(rocket_id))
              : dispatch(cancelReserve(rocket_id)))}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </div>
  );
};

Rockets.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rockets;
