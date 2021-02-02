import React, { useContext } from 'react';
import { SlideContext } from '../../SlideContext';

const Slide = ({ imageUrl }) => {
  const { slides, setSlides, currentSlide, setCurrentSlide } = useContext(SlideContext);

  return (
    <div>
      { currentSlide }
      <img src={imageUrl} alt="" width="300" />
    </div>
  );
}

export default Slide;
