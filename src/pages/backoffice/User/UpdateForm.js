import React, { useEffect, useState } from 'react';

import userService from '../../../services/http-requests/user.service';

import UserForm from '../../../components/editUser/EditUserForm';

export default function UpdateForm(params) {
  const [user, setUser] = useState('');

  const { id } = params.match.params;

  useEffect(() => {
    userService
      .getUserById(id)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return <>{user && <UserForm user={user} />}</>;
}
