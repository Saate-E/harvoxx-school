import React, { useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import dsp from '../Images/dsp100.jpg'
import m1 from '../Images/m1.jpeg'





const FadeSlide = () => {

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={dsp}  />,
        <img src={m1}  />,
        <img src={dsp}   />,
      ];
    

  return (
    <div>
        <AliceCarousel mouseTracking items={items} />
    </div>
  );
}
  

export default FadeSlide