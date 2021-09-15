import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

import './Contribute.css';

export default function Contribute() {
  return (
    <Container className='contribute-container'>
      <Row className='align-items-center justify-content-between mt-5 contribute-objects'>
        <h2>¡Contribuye!</h2>
        <Button variant='primary' size='lg'>
          Contribuir
        </Button>
      </Row>
    </Container>
  );
}
