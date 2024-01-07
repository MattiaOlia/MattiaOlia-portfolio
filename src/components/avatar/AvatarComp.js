import React, { useEffect, useRef } from 'react';

const AvatarComp = ({ onAnimationPlayed }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const lottieModule = await import('lottie-web');
        const animationData = (await import('./animation.json')).default;
  
        const animation = lottieModule.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          animationData: animationData,
        });
  
        animation.addEventListener('complete', () => {
          if (containerRef.current) {
           containerRef.current.style.display = 'none';
            if (typeof onAnimationPlayed === 'function') {
              onAnimationPlayed();
              
            }
          }
        });
  
        animation.play();
      } catch (error) {
        console.error('Error loading Lottie or animation:', error);
      }
    };
  
    loadAnimation();
  
    // Cleanup function to handle component unmounting
    return () => {
      // Stop the animation and cleanup
      if (containerRef.current) {
       // containerRef.current.style.display = 'none';
        if (typeof onAnimationPlayed === 'function') {
          //onAnimationPlayed();
          //console.log("completed")
        }
      }
    };
  }, [onAnimationPlayed]);

  return <div ref={containerRef} />;
};

export default AvatarComp;