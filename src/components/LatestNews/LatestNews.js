import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';

import EntryListCard from '../EntryListCard/EntryListCard';

export default function LatestNews({ entries }) {
  const history = useHistory();

  return (
    <section className='mb-5'>
      <h2 className='text-center'>Ultimas Novedades</h2>
      <Row xs={1} md={4} className='g-4'>
        {entries.length
          ? entries.map((entry, i) => (
              <EntryListCard key={i + 3} entry={entry} />
            ))
          : null}
      </Row>
      <Button
        onClick={() => history.push('/novedades')}
        variant='outline-primary button-size mx-auto d-block mt-4'
        size='sm'
      >
        Ver todas
      </Button>
    </section>
  );
}
