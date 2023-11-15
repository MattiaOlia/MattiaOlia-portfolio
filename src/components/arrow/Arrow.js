
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './arrow.json';

function Arrow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    // Rotate the animation by -90 degrees
    animation.setSpeed(-1); // Reverse the animation
    animation.setDirection(-1); // Reverse the animation
    animation.play(); // Start the animation

    return () => {
      // Cleanup on component unmount
      animation.destroy();
    };
  }, []);

  const containerStyle = {
   
    width: '400px',
    height: '200px',
    zIndex: 0,
    transform: "scale(1, -1) rotate(100deg) translateY(70px) translateX(70px)",
    transformOrigin: "center",
    


  };

  return <div style={containerStyle} ref={containerRef} />;
}

export default Arrow;