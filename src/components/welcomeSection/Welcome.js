import React from 'react';

import './Welcome.css';

function Welcome({ welcomeText }) {
  return (
    <section className='p-2'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md p-2 welcome-section'>
            <h1 className='pt-4 pb-4'>¡Bienvenidos!</h1>
            <p>{welcomeText}</p>
          </div>
          <div className='col-md pt-4'>
            <svg
              viewBox='0 0 500 500'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='100%'
              id='blobSvg'
            >
              <defs>
                <clipPath id='shape'>
                  <path
                    id='blob'
                    d='M448,303Q434,356,396,396Q358,436,304,467Q250,498,199.5,461.5Q149,425,92.5,399.5Q36,374,20.5,312Q5,250,27.5,192.5Q50,135,94,96Q138,57,194,30.5Q250,4,310,23Q370,42,411.5,87.5Q453,133,457.5,191.5Q462,250,448,303Z'
                    fill='#d1d8e0'
                  ></path>
                </clipPath>
              </defs>
              <image
                x='0'
                y='0'
                width='100%'
                height='100%'
                clipPath='url(#shape)'
                xlinkHref='https://images.squarespace-cdn.com/content/v1/603c11839959d83fcdc14604/1614551696394-OUQFZUP8SRE0IMDUFD1K/annie-spratt-cVEOh_JJmEE-unsplash.jpg?format=1500w'
                preserveAspectRatio='none'
              ></image>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
