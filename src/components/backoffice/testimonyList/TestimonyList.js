import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import testimonyService from '../../../services/http-requests/testimony.service';

import './TestimonyList.css';

export default function TestimonyList() {
  const [testimonials, setTestimonials] = useState([]);

  const history = useHistory();

  useEffect(() => {
    testimonyService.getTestimonials().then(res => {
      setTestimonials(res.data);
    });
  }, []);

  const handleDelete = id => {
    testimonyService
      .deleteTestimony(id)
      .then(() => setTestimonials([...testimonials.filter(t => t.id !== id)]))
      .catch(err => console.error(err));
  };

  if (!testimonials.length) {
    return <h3 className='no-content'>No hay testimonios</h3>;
  }

  return (
    <div className='testimonials-list mt-5'>
      <h1 className='testimonials-title'>Lista de testimonios</h1>
      <ul>
        {testimonials.map(({ id, name }) => (
          <li key={id}>
            <span>{name}</span>
            <section className='actions'>
              <button
                onClick={() => history.push(`/backoffice/testimonios/${id}`)}
              >
                <i className='fas fa-pen-square'></i>
              </button>
              <button onClick={() => handleDelete(id)}>
                <i className='fas fa-trash'></i>
              </button>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
