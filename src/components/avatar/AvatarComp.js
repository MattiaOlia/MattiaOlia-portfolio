import React, { useEffect, useRef } from 'react';

const AvatarComp = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const lottie = await import('lottie-web');
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: (await import('./animation.json')).default,
      });
    };

    loadAnimation();
  }, []);

  return <div  ref={containerRef} />;
};

export default AvatarComp;