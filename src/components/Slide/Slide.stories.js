import React, { useContext, useMemo } from 'react';
import Slide from './Slide';
import { SlideContext } from '../../SlideContext';

export default {
  title: 'Components/Slide',
  component: Slide,
}

// We create a “template” of how args map to rendering
const Template = (args) => (
    <SlideContext.Provider value={ {} }>
      <Slide {...args} />
    </SlideContext.Provider>
  );

// Each story then reuses that template
export const ImageSlide = Template.bind({});
ImageSlide.args = {
  slides: {
    "data": []
  },
  imageUrl: 'https://content.glisser.com/presentation/3981701/722c6b4f-67ba-40bf-9974-1c4632c1f8da.jpg'
};