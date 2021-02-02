import React, { useContext, useMemo } from 'react';
import SlideTabs from './SlideTabs';
import { SlideContext } from '../../SlideContext';

export default {
  title: 'Components/SlideTabs',
  component: SlideTabs,
}

const Template = (args) => (
    <SlideContext.Provider value={ {} }>
      <SlideTabs {...args} />
    </SlideContext.Provider>
  );

export const ImageSlideTabs = Template.bind({});
ImageSlideTabs.args = {
  active: false,
  imageUrl: 'https://content.glisser.com/presentation/3981701/722c6b4f-67ba-40bf-9974-1c4632c1f8da.jpg'
};

export const ImageSlideTabsActive = Template.bind({});
ImageSlideTabsActive.args = {
  active: true,
  imageUrl: 'https://content.glisser.com/presentation/3981701/722c6b4f-67ba-40bf-9974-1c4632c1f8da.jpg'
};