import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import newsService from '../../services/http-requests/news.service';

import EntryListCard from '../EntryListCard/EntryListCard';

import './EntryList.css';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    newsService
      .getNews()
      .then(res => setEntries(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container>
      <section className='text-center '>
        <h2 className='pt-5 pb-4'>Novedades</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          cupiditate ut nesciunt recusandae quia inventore nisi quas dolor, aut
          placeat, vitae ducimus deleniti ea dolore rem laboriosam, dolores
          perspiciatis earum?
        </p>
      </section>
      <Row xs={1} md={3} className='g-4'>
        {entries.map(item => (
          <EntryListCard key={item.id} entry={item} />
        ))}
      </Row>
    </Container>
  );
};

export default EntryList;
