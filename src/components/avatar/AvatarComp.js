import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './animation.json';

function AvatarComp() {
  const containerRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  }, []);

  return <div  ref={containerRef} />;
}

export default AvatarComp;