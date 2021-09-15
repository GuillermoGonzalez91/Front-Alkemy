import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';

import './Backoffice.css';

const routes = [
  { title: 'Home', path: '' },
  { title: 'Novedades', path: 'novedades' },
  { title: 'Categorias', path: 'categorias' },
  { title: 'Testimonios', path: 'testimonios' },
  { title: 'Actividades', path: 'actividades' },
  { title: 'Organizacion', path: 'editar-organizacion' },
  { title: 'Usuarios', path: 'usuarios' },
  { title: 'Contactos', path: 'contacto' },
];

export default function Backoffice() {
  return (
    <div className='expand'>
      <Navbar bg='light' expand='lg pt-3 backoffice-navbar'>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <div>
            <Navbar.Brand>BackOffice</Navbar.Brand>
            <ul className='list-unstyled ps-0 mt-3'>
              {routes.map((item, index) => (
                <section key={item.title}>
                  <li className='mb-1'>
                    <Button
                      variant='light'
                      className='btn btn-toggle align-items-center rounded'
                      as={Link}
                      to={`/backoffice/${item.path}`}
                    >
                      {item.title}
                    </Button>
                  </li>
                  {index === 3 && <li className='border-top my-3'></li>}
                </section>
              ))}
            </ul>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
