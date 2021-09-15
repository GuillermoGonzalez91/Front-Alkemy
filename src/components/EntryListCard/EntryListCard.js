import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

import './EntryListCard.css';

const EntryListCard = ({ entry }) => {
  const history = useHistory();

  return (
    <Col>
      <Card>
        <div
          className='image'
          onClick={() => {
            history.push(`/novedades/${entry.id}`);
          }}
        >
          <Card.Img variant='top' src={entry.image} />
        </div>
        <Card.Body>
          <Card.Title>{entry.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default EntryListCard;
