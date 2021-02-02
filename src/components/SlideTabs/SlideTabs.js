import React from 'react';
import './SlideTabs.css';

const SlideTabs = ({ imageUrl, active }) => {

  return (
    <div
      className={ `slidetabs ${active && `slidetabs--active`}` }>
      <img src={imageUrl} alt={imageUrl} className="slidetabs-img" />
    </div>
  );
}

export default SlideTabs;
