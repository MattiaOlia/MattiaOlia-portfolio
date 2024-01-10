import React from 'react';
import HOPE3G_1 from "../../images/Hope3g/HOPE3G_1.png"

const LazyImage = (props) => {
  return (
    <img
      src={props.source}
      alt="Description of the image"
      width="100%"
      height="100%"
    />
  );
};

export default LazyImage;