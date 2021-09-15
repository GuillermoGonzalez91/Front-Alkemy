import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
	const user = {
		id: 'xssatasdasfafad',
		name: 'Maria',
		surname: 'Googes',
		email: 'mg@gmail.com',
	};

	let history = useHistory();

	const DeleteAcount = async (userId) => {
		const confirm = window.confirm('¿Realmente quiere eliminar su cuenta?');
		if (confirm) {
			alert('Usuario: ' + userId);
			// call services
			// show alert acount deleted
			// redirect to home
		}
	};

	const handlerDelete = React.useCallback(() => {
		DeleteAcount(user.id);
	}, [user.id]);

	return (
		<div className='card'>
			<img
				src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png'
				alt='Avatar'
				style={{ width: '100%' }}
			/>
			<div className='container'>
				<h4
					className='text-center text-white'
					style={{ textShadow: '2px 2px #000000' }}>
					<b>Perfil</b>
				</h4>
				<ul className='text-muted'>
					<li>Nombre: {user.name}</li>
					<li>Usuario: {user.surname}</li>
					<li>Email: {user.email}</li>
				</ul>
				<div className='box-buttons'>
					<Button
						variant='dark'
						className='mr-1'
						onClick={() => {
							history.push(`/editProfile/${user.id}`);
						}}>
						Editar datos
					</Button>
					<Button className='mr-1' variant='danger' onClick={handlerDelete}>
						Eliminar mi cuenta
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
