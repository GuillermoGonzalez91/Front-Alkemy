import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

import { logout, selectUser } from '../../features/user/UserSlice';

import Logo from './../../assets/LOGO-SOMOS MAS.png';

import './Header.css';

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const routes = [
    { title: 'Inicio', path: '/' },
    { title: 'Nosotros', path: '/nosotros' },
    { title: 'Actividades', path: '/actividades' },
    { title: 'Novedades', path: '/novedades' },
    { title: 'Testimonios', path: '/testimonios' },
    { title: 'Contacto', path: '/contacto' },
    { title: 'Contribuye', path: '/contribuye' },
  ];

  return (
    <Container
      fluid='xxl'
      className={location.pathname.includes('backoffice') ? 'd-none' : ''}
    >
      <Navbar expand='xl'>
        <Navbar.Brand as={Link} to='/'>
          <img
            src={Logo}
            width='100'
            height='100'
            className='d-inline-block align-top'
            alt='Logo somo-mas'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='mr-auto my-2 my-lg-0' navbarScroll>
            {routes.map(route => (
              <Nav.Link
                as={Link}
                className='nav-item nav-link color-a'
                key={route.title}
                to={route.path}
              >
                {route.title}
              </Nav.Link>
            ))}
          </Nav>
          {user && user.token ? (
            <>
              {user.userRole === 1 ? (
                <Button
                  variant='outline-primary'
                  className='button-log-in mr-2'
                  as={Link}
                  to='/backoffice'
                >
                  Backoffice
                </Button>
              ) : (
                <Button
                  variant='outline-primary'
                  className='button-log-in mr-2'
                  as={Link}
                  to='/perfil'
                >
                  Mi perfil
                </Button>
              )}
              <Button
                variant='outline-primary'
                className='button-log-in mr-2'
                onClick={() => {
                  dispatch(logout());
                  history.push('/');
                }}
              >
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <Button
                variant='outline-primary'
                className='button-log-in mr-2'
                as={Link}
                to='/login'
              >
                Iniciar sesión
              </Button>
              <Button
                variant='primary'
                className='button-register button-size'
                as={Link}
                to='/registrarse'
              >
                Registrarse
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
