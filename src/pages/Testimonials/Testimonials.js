import React from 'react';

import TestimonyListCard from '../../components/testimonyListCard/TestimonyListCard';

export default function Testimonials() {
  return (
    <>
      <section className='text-center'>
        <h1 className='pt-5 pb-4'>Testimonios</h1>
        <p className='container' style={{ fontSize: 22 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          totam nisi repellendus libero facilis necessitatibus recusandae quae
          et dolor accusamus debitis error veritatis, a ea nobis quo enim?
          Fugiat, fuga!
        </p>
      </section>
      <TestimonyListCard />
    </>
  );
}
