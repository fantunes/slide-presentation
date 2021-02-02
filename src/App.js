import React, {useEffect, useMemo, useState} from 'react';
import { SlideContext } from './SlideContext';
import { fetchSlides } from './utils/fetchSlides';
import Slide from './components/Slide';
import SlideTabs from './components/SlideTabs';

const App = () => {
  const IMG_BASE_URL = 'https://content.glisser.com/presentation/3981701/';
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstSlide, setFirstSlide] = useState(true);
  const [lastSlide, setLastSlide] = useState(false);

  // This is useful to prevent rerendering when slides change:
  const contextData = useMemo(() => (
      {
        slides,
        setSlides,
        currentSlide,
        setCurrentSlide,
        firstSlide,
        setFirstSlide,
        lastSlide,
        setLastSlide
      }
    ),
    [
      slides,
      setSlides,
      currentSlide,
      setCurrentSlide,
      firstSlide,
      setFirstSlide,
      lastSlide,
      setLastSlide
    ]
  );

  useEffect(() => {
    (async () => {
      const slidesData = await fetchSlides();
      setSlides(slidesData.data);
    })();
  }, []);

  // debugger;

  return (
    <SlideContext.Provider value={ contextData }>
      <div className="row">
        <div className="col-8">
          { slides[currentSlide] &&
            <Slide
              key={ slides[currentSlide].id }
              imageUrl={ IMG_BASE_URL + slides[currentSlide].image.name } />
          }
        </div>
        <div className="col-4">
        {
          slides.map(s =>
            <SlideTabs
              active={(s.id === slides[currentSlide].id)}
              key={ s.id }
              imageUrl={ IMG_BASE_URL + s.image.name }
            />
          )
        }
        </div>
      </div>
    </SlideContext.Provider>
  );
}

export default App;
