import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button } from 'react-bootstrap';
import './Backoffice.css';
import { Link } from 'react-router-dom';

const MenuUser = () => {
	// CAMBIAR LOS LINKS Y LOS TEXTOS DE LOS BOTONES PARA REDIRIGIR A LAS PAGINAS CORRECTAMENTE
	return (
		<div className='expand'>
			<Navbar bg='light' expand='lg'>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<div>
						<Navbar.Brand>BackOffice / .....</Navbar.Brand>
						<ul className='list-unstyled ps-0'>
							<li className='mb-1'>
								<Link to='/backoffice/home'>
									{' '}
									{/**COLOCAR RUTA HACIA EDITAR USARIO */}
									<Button
										variant='light'
										className='btn btn-toggle align-items-center rounded'>
										Editar Usuario
									</Button>
								</Link>
							</li>
						</ul>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default MenuUser;
