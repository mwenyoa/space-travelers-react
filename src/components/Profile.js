import React from 'react';
import { useSelector } from 'react-redux';
import {
  ListGroup, Col, Row, Container,
} from 'react-bootstrap';

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  const rocketsReserved = useSelector((state) => state.rockets.rockets);
  const reservedRocketsList = rocketsReserved.filter(
    (rocketsReserve) => rocketsReserve.reserved === true,
  );
  return (
    <Container>
      <Row className="profile">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="mission-pr p-5">
          <h2>
            <b>My Missions</b>
          </h2>
          <ListGroup className="w-100 mx-auto">
            {reservedMissions.map((mission) => (
              <ListGroup.Item key={mission.id}>{mission.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="rockets-pr p-5">
          <h2>
            <b>My Rockets</b>
          </h2>
          {reservedRocketsList.map((myRockets) => (
            <ListGroup.Item key={myRockets.rocket_id}>{myRockets.rocket_name}</ListGroup.Item>
          ))}

          <ListGroup />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
