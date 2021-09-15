import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import activityService from '../../services/http-requests/activity.service';

import ActivityCard from './ActivityCard';

const ActivityList = () => {
  const [activitiesArray, setActivitiesArray] = useState();

  useEffect(() => {
    activityService
      .getActivities()
      .then(res => setActivitiesArray(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='container mt-5'>
      <div>
        <h2 className='mb-4 text-center'>Actividades</h2>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          modi deserunt molestiae id voluptatibus! Qui debitis optio consectetur
          vero reprehenderit?
        </p>
      </div>
      <Row xs={1} md={3} className='g-4'>
        {activitiesArray &&
          activitiesArray.map((activity, i) => (
            <ActivityCard key={i + 3} activity={activity} />
          ))}
      </Row>
    </div>
  );
};

export default ActivityList;
