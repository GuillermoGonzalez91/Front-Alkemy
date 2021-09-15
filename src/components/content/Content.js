import React from 'react';
import parse from 'html-react-parser';

function Content({ content }) {
  return (
    <div className='container ck-content'>
      <div className='row my-5'>
        <div className='col-lg-8 col-md-10 mx-auto'>
          {content && parse(content)}
        </div>
      </div>
    </div>
  );
}

export default Content;
