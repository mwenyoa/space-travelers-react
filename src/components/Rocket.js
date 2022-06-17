/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Rockets = ({ rocket }) => {
  const {
    rocket_name, description, flickr_images, reserved,
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
            className={reserved === true ? 'disabled button' : 'reserve-btn button'}
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
