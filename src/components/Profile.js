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
  return (
    <Container>
      <Row>
        <Col className="mission-pr p-5">
          <h2>
            <b>My Missions</b>
          </h2>
          <ListGroup className="w-100 mx-auto">
            {reservedMissions.map((mission) => (
              <ListGroup.Item key={mission.id}>{mission.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="rockets-pr p-5">
          <h2>
            <b>My Rockets</b>
          </h2>
          <ListGroup />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
