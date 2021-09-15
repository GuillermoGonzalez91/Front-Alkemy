import React from 'react';

import './Banner.css';

function Banner({ name, imageUrl, postDate, type }) {
  return (
    <div
      className='jumbotron text-white'
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container'>
        <h1 className='display-5 post-name'>{name}</h1>
        <hr className='my-4' />

        <div className={!postDate && !type ? 'd-none' : ''}>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='mr-10 post-date'>Fecha de posteo: {postDate}</span>
            <span className='post-type'>{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
