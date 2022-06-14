import React from 'react';

const Rockets = () => (
  <>
    <section className="rocket-details d-flex">
      <div className="rocket-img-sec"><img src="" alt="Rocket-img" /></div>
      <div className="reserve-rocket-info d-flex flex-d-column">
        <h2>Rocket Name</h2>
        <div className="rocket-desc"><p>Hello World from spacex</p></div>
        <div className="reserve-btn">
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </section>
  </>
);
export default Rockets;
