import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import organizationService from '../../services/http-requests/organization.service';
import newsService from '../../services/http-requests/news.service';

import Slider from '../../components/slider/Slider';
import Welcome from '../../components/welcomeSection/Welcome';
import LatestNews from '../../components/LatestNews/LatestNews';
import TestimonyListCard from '../../components/testimonyListCard/TestimonyListCard';

const Home = () => {
  const [organization, setOrganization] = useState({ public: {}, entries: [] });

  useEffect(() => {
    const requestData = async () => {
      const response = await Promise.all([
        organizationService.getOrganizationData(),
        newsService.getNews(),
      ]);
      const organizationDetailsData = await response[0].data[0];
      const entryDetailsData = await response[1].data.slice(-4);
      setOrganization({
        public: organizationDetailsData,
        entries: entryDetailsData,
      });
    };
    requestData();
  }, []);

  return (
    <>
      <Slider height='500px' />
      <Container>
        <Welcome {...organization.public} />
        <LatestNews entries={organization.entries} />
        <h2 className='text-center'>Testimonios</h2>
        <TestimonyListCard cardCount={3} />
      </Container>
    </>
  );
};

export default Home;
