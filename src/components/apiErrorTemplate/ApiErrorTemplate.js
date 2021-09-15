import React from 'react';
import './ApiErrorTemplate.css';

function ApiErrorTemplate() {
	return (
		<div className='container error'>
			<div className='row'>
				<div className='col-md-12'>
					<div className='error-template'>
						<h1>Oops!</h1>
						<h2>Something went wrong!</h2>
						<p className='error-details'>Try refreshing your browser!</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ApiErrorTemplate;
