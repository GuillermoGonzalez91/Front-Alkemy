import React, { useEffect, useState } from 'react';

import testimonySerivce from '../../../services/http-requests/testimony.service';

import TestimonyForm from '../../../components/backoffice/testimonyForm/TestimonyForm';

export default function UpdateForm(params) {
  const [testimony, setTestimony] = useState('');

  const { id } = params.match.params;

  useEffect(() => {
    testimonySerivce
      .getTestimonyById(id)
      .then(res => {
        setTestimony(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return <>{testimony && <TestimonyForm testimony={testimony} />}</>;
}
