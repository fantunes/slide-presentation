import { SlideContext } from './SlideContext';
import Slide from './components/Slide';
import SlideTabs from './components/SlideTabs';

function App() {
  return (
    <SlideContext.Provider>
      <Slide />
      <SlideTabs />
    </SlideContext.Provider>
  );
}

export default App;
