import React from 'react';
import Loader from 'react-loader-spinner';
import './loading.css';

export default function Loading() {
	return (
		<div className='s1'>
			<div className='s2'>
				<Loader type='Oval' color='#00BFFF' height={100} width={100} />
			</div>
		</div>
	);
}
