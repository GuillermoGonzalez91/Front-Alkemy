import React, { useEffect, useState } from 'react';

import organizationService from '../../../services/http-requests/organization.service';
import sliderService from '../../../services/http-requests/slider.service';

import EditHome from '../../../components/backoffice/EditHome/EditHome';

export default function EditHomePage() {
  const [welcomeText, setWelcomeText] = useState('');
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await Promise.all([
        organizationService.getOrganizationData(),
        sliderService.getSliders(),
      ]);
      setWelcomeText(response[0].data[0].welcomeText);
      setSlides(response[1].data);
    };
    requestData();
  }, []);

  return (
    <>
      <EditHome
        welcomeText={welcomeText}
        slides={slides}
        setSlides={setSlides}
      />
    </>
  );
}
