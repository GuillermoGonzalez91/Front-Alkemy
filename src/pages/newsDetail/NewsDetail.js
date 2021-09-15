import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import newsService from './../../services/http-requests/news.service';

import ApiErrorTemplate from '../../components/apiErrorTemplate/ApiErrorTemplate';

import Banner from '../../components/banner/Banner';
import Content from '../../components/content/Content';
import Loading from '../../components/loading/Loading';

function NewsDetail() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [error, setError] = useState(false);

  const request = useCallback(() => {
    newsService
      .getNewsById(id)
      .then(res => setPost(res.data.newsEntry))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    request();
  }, [request]);

  return (
    <>
      {!post ? (
        <Loading />
      ) : error ? (
        <>
          <ApiErrorTemplate />
        </>
      ) : (
        <>
          <Banner
            name={post.name}
            imageUrl={post.image}
            postDate={moment(post.createdAt).format('DD/MM/YYYY')}
            type={post.type}
          />
          <Content content={post.content} />
        </>
      )}
    </>
  );
}

export default NewsDetail;
