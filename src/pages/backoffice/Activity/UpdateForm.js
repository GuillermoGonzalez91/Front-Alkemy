import React, { useEffect, useState } from 'react';

import activityService from '../../../services/http-requests/activity.service';

import ActivityForm from '../../../components/backoffice/activityForm/ActivityForm';

export default function UpdateForm(params) {
  const [activity, setActivity] = useState('');

  const { id } = params.match.params;

  useEffect(() => {
    activityService
      .getActivityById(id)
      .then(res => {
        setActivity(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return <>{activity && <ActivityForm activity={activity} />}</>;
}
