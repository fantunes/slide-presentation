import React, {useEffect, useMemo, useState} from 'react';
import { SlideContext } from './SlideContext';
import { fetchSlides } from './utils/fetchSlides';
import Slide from './components/Slide';
import SlideTabs from './components/SlideTabs';

const App = () => {
  const IMG_BASE_URL = 'https://content.glisser.com/presentation/3981701/';
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // This is useful to prevent rerendering when slides change:
  const contextData = useMemo(() => (
      { slides, setSlides, currentSlide, setCurrentSlide }
    ),
    [slides, setSlides, currentSlide, setCurrentSlide]
  );

  useEffect(() => {
    (async () => {
      const slidesData = await fetchSlides();
      setSlides(slidesData.data);
    })();
  }, []);

  return (
    <SlideContext.Provider value={ contextData }>
      {
        slides.map(s => (
          <>
            <Slide imageUrl={ IMG_BASE_URL + s.image.name } currentSlide={ currentSlide } />
            <SlideTabs imageUrl={ IMG_BASE_URL + s.image.name } />
          </>
        ))
      }
    </SlideContext.Provider>
  );
}

export default App;
