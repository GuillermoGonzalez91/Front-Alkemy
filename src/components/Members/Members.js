import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import memberService from '../../services/http-requests/member.service';

import ApiErrorTemplate from '../apiErrorTemplate/ApiErrorTemplate';
import Loading from '../loading/Loading';

import MemberItem from './MemberItem';

import './Members.css';

const Members = () => {
  const [membersData, setMembersData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    memberService
      .getMembers()
      .then(res => setMembersData(res.data))
      .catch(() => setError(true));
  }, []);

  return (
    <>
      {!membersData ? (
        <Loading />
      ) : error ? (
        <ApiErrorTemplate />
      ) : (
        <div className='container'>
          <h1 className='text-center pt-5 pb-4'>Miembros</h1>
          <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
            {membersData.map(member => (
              <Col key={member.id}>
                <MemberItem memberData={member} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default Members;
