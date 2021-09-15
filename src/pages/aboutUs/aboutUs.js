import React from 'react';

import Members from '../../components/Members/Members';

export default function AboutUs() {
  return (
    <>
      <section className='text-center'>
        <h2 className='p-5'>Sobre nosotros</h2>
        <p className='container'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloremque, praesentium non natus aliquam explicabo mollitia, minus
          excepturi esse asperiores laudantium modi? Ipsa delectus non porro
          accusantium maiores nulla optio!
        </p>
      </section>
      <Members />
    </>
  );
}
