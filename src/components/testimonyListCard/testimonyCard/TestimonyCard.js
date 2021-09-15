import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './TestimonyCard.css';

const TestimonyCard = ({ testimony }) => {
  return (
    <div>
      <Col>
        <Card>
          <div className='rounded'>
            <Card.Img
              variant='top'
              src={testimony.image}
              className='testimony-image'
            />
          </div>
          <Card.Body>
            <Card.Title>{testimony.name}</Card.Title>
            <p>{testimony.content}</p>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default TestimonyCard;
