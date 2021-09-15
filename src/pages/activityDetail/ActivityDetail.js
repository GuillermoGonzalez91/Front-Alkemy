import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import activityService from '../../services/http-requests/activity.service';

import ApiErrorTemplate from '../../components/apiErrorTemplate/ApiErrorTemplate';

import Banner from '../../components/banner/Banner';
import Content from '../../components/content/Content';

const ActivityDetail = () => {
  const { id } = useParams();

  const [activity, setActivity] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    activityService
      .getActivityById(id)
      .then(res => setActivity(res.data))
      .catch(() => setError(true));
  }, []);

  return (
    <>
      {error ? (
        <>
          <ApiErrorTemplate />
        </>
      ) : (
        <>
          <Banner
            key={activity.id}
            name={activity.name}
            imageUrl={activity.image}
          />
          <Content content={activity.content} />
        </>
      )}
    </>
  );
};

export default ActivityDetail;
