import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  const history = useHistory();

  return (
    <Col onClick={() => history.push(`actividades/${activity.id}`)}>
      <Card className='activity-container'>
        <div className='image'>
          <Card.Img
            variant='top'
            src={activity.image}
            className='activity-image'
          />
        </div>
        <Card.Body>
          <Card.Title>{activity.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ActivityCard;
