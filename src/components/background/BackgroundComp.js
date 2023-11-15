import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './animationBg.json';
import { useMediaQuery } from '@mui/material';

function BackgroundComp() {
  const containerRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  }, []);
  const containerStyle = {
    position: "fixed",
    opacity: "0.2",
    backgroundRepeat: "no-repeat",
    top: -100,
    right: -500,
    width:  '150%',
    height: '130%',
    zIndex: -1
  };

  return (
    <div style={containerStyle} ref={containerRef} />
  );
}
  


export default BackgroundComp;