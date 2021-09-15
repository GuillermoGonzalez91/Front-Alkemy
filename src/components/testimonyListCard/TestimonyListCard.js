import React, { useEffect, useState } from 'react';
import testimonyService from '../../services/http-requests/testimony.service';
import TestimonyCard from './testimonyCard/TestimonyCard';
import { Row, Container } from 'react-bootstrap';

export default function TestimonyListCard({ cardCount }) {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    testimonyService
      .getTestimonials()
      .then(res => {
        if (cardCount) setTestimonials(res.data.slice(-cardCount));
        else setTestimonials(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <Row xs={1} md={3} className='g-4'>
        {testimonials.map(testimony => (
          <TestimonyCard testimony={testimony} key={testimony.id} />
        ))}
      </Row>
    </Container>
  );
}
