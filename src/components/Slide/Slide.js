import React, { useContext, useEffect } from 'react';
import { SlideContext } from '../../SlideContext';
import './Slide.css';

const Slide = ({ imageUrl, slides }) => {
  const {
    currentSlide,
    setCurrentSlide,
    firstSlide,
    setFirstSlide,
    lastSlide,
    setLastSlide
  } = useContext(SlideContext);

  // Slide control
  const handleSlideControl = (e, orientation, currentSlide) => {
    e.preventDefault();

    // Check if first slide is current
    setFirstSlide((currentSlide + orientation) <= 0);

    // Set current slide
    setCurrentSlide(currentSlide + orientation);
  }

  useEffect(() => {
    setLastSlide && setLastSlide((currentSlide + 1) === slides.length);
  });

  return (
    <div className="slide">
      <button
        className="slide-button slide-button--previous"
        onClick={e => handleSlideControl(e, -1, currentSlide)}
        disabled={ firstSlide }
      >
        prev
      </button>
      <img src={ imageUrl } alt={ imageUrl } className="slide-img" />
      <button
        className="slide-button slide-button--next"
        onClick={e => handleSlideControl(e, 1, currentSlide)}
        disabled={ lastSlide }
      >
        next
      </button>
    </div>
  );
}

export default Slide;
