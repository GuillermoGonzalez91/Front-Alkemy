import React from 'react';
import { Card } from 'react-bootstrap';

import './Members.css';

const MembersImg = ({ memberData }) => {
  return (
    <Card>
      <div className='rounded'>
        <Card.Img
          className='member-image'
          variant='top'
          src={memberData.image}
        />
      </div>
      <Card.Body>
        <Card.Title>{memberData.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MembersImg;
