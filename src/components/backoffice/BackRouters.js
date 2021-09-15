import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../features/user/UserSlice';

import AboutUs from '../../pages/aboutUs/aboutUs';
import Category from '../../pages/category/Category';
import NewsUpdateForm from '../../pages/backoffice/News/UpdateForm';
import NewsCreateForm from '../../pages/backoffice/News/CreateForm';
import TestimonyCreateForm from '../../pages/backoffice/Testimony/CreateForm';
import TestimonyUpdateForm from '../../pages/backoffice/Testimony/UpdateForm';
import CategoryCreateForm from '../../pages/backoffice/Category/CreateForm';
import CategoryUpdateForm from '../../pages/backoffice/Category/UpdateForm';
import ActivityCreateForm from '../../pages/backoffice/Activity/CreateForm';
import ActivityUpdateForm from '../../pages/backoffice/Activity/UpdateForm';
import EditHome from '../../pages/backoffice/Home/EditHome';
import EditUser from '../../pages/backoffice/User/UpdateForm';

import News from './news/News';
import Backoffice from './Backoffice';
import ContactsList from '../contact/ContactsList';
import Activities from '../../pages/backoffice/Activity/List';
import BackofficeEdit from './backofficeEdit/BackofficeEdit';
import TestimonyList from './testimonyList/TestimonyList';
import UserList from '../../pages/backoffice/User/List';

import './Backoffice.css';

const BackRouters = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {user && user.userRole === 1 ? (
        <div className='d-flex admin-routes'>
          <Backoffice />
          <Route exact path='/backoffice/actividades' component={Activities} />
          <Route
            exact
            path='/backoffice/crear-actividad'
            component={ActivityCreateForm}
          />
          <Route
            exact
            path='/backoffice/actividades/:id'
            component={ActivityUpdateForm}
          />

          <Route exact path='/backoffice' component={EditHome} />
          <Route exact path='/backoffice/nosotros' component={AboutUs} />
          <Route exact path='/backoffice/usuarios' component={UserList} />
          <Route exact path='/backoffice/usuarios/:id' component={EditUser} />
          <Route exact path='/backoffice/novedades' component={News} />
          <Route
            exact
            path='/backoffice/crear-novedad'
            component={NewsCreateForm}
          />
          <Route
            exact
            path='/backoffice/novedades/:id'
            component={NewsUpdateForm}
          />
          <Route exact path='/backoffice/categorias' component={Category} />
          <Route
            exact
            path='/backoffice/crear-categoria'
            component={CategoryCreateForm}
          />
          <Route
            exact
            path='/backoffice/categorias/:id'
            component={CategoryUpdateForm}
          />
          <Route
            exact
            path='/backoffice/testimonios'
            component={TestimonyList}
          />
          <Route
            exact
            path='/backoffice/crear-testimonio'
            component={TestimonyCreateForm}
          />
          <Route
            exact
            path='/backoffice/testimonios/:id'
            component={TestimonyUpdateForm}
          />
          <Route exact path='/backoffice/contacto' component={ContactsList} />
          <Route
            exact
            path='/backoffice/editar-organizacion'
            component={BackofficeEdit}
          />
        </div>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};

export default BackRouters;
