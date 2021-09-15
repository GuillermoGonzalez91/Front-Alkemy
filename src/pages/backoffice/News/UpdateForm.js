import React, { useEffect, useState } from 'react';

import newsService from '../../../services/http-requests/news.service';

import EntryForm from '../../../components/EntryForm/EntryForm';

export default function UpdateForm(params) {
  const [entry, setEntry] = useState('');

  const { id } = params.match.params;

  useEffect(() => {
    newsService
      .getNewsById(id)
      .then(res => {
        setEntry({
          ...res.data.newsEntry,
          category: res.data.newsEntry.categoryId,
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  return <>{entry && <EntryForm entry={entry} />}</>;
}
