import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import sliderService from '../../services/http-requests/slider.service';

import './Slider.css';

const Slider = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    sliderService.getSliders().then(res => setItems(res.data));
  }, []);

  const slides =
    items.length &&
    items.map((item, i) => {
      return (
        <Carousel.Item key={2 + i}>
          <img
            className='d-block w-100'
            src={item.imageUrl}
            alt={item.text}
            width={props.width || '100%'}
            height={props.height || '100%'}
            style={{
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption>
            <div className='card w-75 text-dark slider-card'>
              <div className='card-body slider-body'>
                <h3 className='card-title slider slider-title'>{item.text}</h3>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });

  return <Carousel>{slides}</Carousel>;
};

export default Slider;
