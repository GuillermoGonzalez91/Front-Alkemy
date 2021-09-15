import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

import userService from '../../../services/http-requests/user.service';
import { confirmAlert } from '../../../services/alerts/Alerts';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

export default function UsersList() {
  const [usersList, setUsersList] = useState([]);
  let history = useHistory();

  const imageStyle = {
    border: '5px solid #555',
    height: '70px',
    width: '100px',
  };

  const tableStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  };

  useEffect(() => {
    userService
      .getUsers()
      .then(res => setUsersList(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = React.useCallback(id => {
    confirmAlert().then(async res => {
      if (res) {
        await userService.deleteUser(id);
        setUsersList([...usersList.filter(u => u.id !== id)]);
      }
    });
  }, []);

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between align-items-center pb-3'>
        <h1>Listado de Usuarios</h1>
        <button
          className='btn btn-primary '
          onClick={() => history.push('crear-actividad')}
        >
          Crear
        </button>
      </div>

      <Table
        responsive='md'
        striped
        bordered
        hover
        variant='dark'
        style={tableStyle}
      >
        <thead>
          <tr className='text-center align-middle'>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Contenido</th>
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(item => (
            <tr key={item.id}>
              <td className='text-center align-middle'>{item.id}</td>
              <td className='text-center align-middle'>
                <img src={item.image} style={imageStyle} alt={'title'} />
              </td>
              <td className='text-center align-middle'>{item.firstName}</td>
              <td className='text-center align-middle'>
                {moment(item.createdAt).format('DD/MM/YYYY')}
              </td>
              <td className='text-center align-middle'>
                <Button
                  variant='outline-primary'
                  onClick={() => {
                    history.push(`/backoffice/usuarios/${item.id}`);
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant='outline-danger'
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
