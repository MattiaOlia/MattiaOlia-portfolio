import React, { useState, useEffect, useRef } from 'react';
import AvatarComp from './avatar/AvatarComp';
import { Typography, Box, Button } from '@mui/material';
import ScrollAnimation from './ScrollAnimation';
import theme from "../theme";
import { ThemeProvider } from '@emotion/react';
import { animateScroll as scroll } from 'react-scroll';
import { useMediaQuery } from '@mui/material';

export default function HeroAnimationAvatar() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [showHero, setHeroVisible] = useState(true);
  const [isSlideVisible, setSlideVisibility] = useState(false);
  const projectsRef = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width: 1350px)');

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setSlideVisibility(false);
    }, 1500);

    return () => clearTimeout(closeTimer);
  }, [isSlideVisible]);

  

  const scrollToProjects = () => {
    if (projectsRef.current && projectsRef.current.offsetTop !== undefined) {
      console.log("scroll working");
      console.log("projectsRef.current.offsetTop:", projectsRef.current.offsetTop);
      scroll.scrollTo(projectsRef.current.offsetTop, { duration: 500, smooth: true });
    } else {
      console.log("projectsRef.current.offsetTop is undefined");
    }
  };

  const handleAnimationComplete = () => {
    scrollToProjects();
    setSlideVisibility(true);
    setAnimationPlayed(true);
    setHeroVisible(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseSlide = () => {
    setSlideVisibility(false);
  };

  const animationClose = () => {
    handleAnimationComplete()
  }

  return (
    <>
     <ThemeProvider theme={theme}>
     
      <ScrollAnimation isVisible={isSlideVisible} onClose={handleCloseSlide} />
      {showHero && (
          <Box
          backgroundColor={'white'}
          width={'100%'}
          position={'fixed'}
          height={'150vh'}
          sx={{ zIndex: 10 }}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'} 
            margin={'0 auto'}
          >
            <Box
              display="flex"
              alignItems={'center'}
              justifyContent="center"
              marginBottom={ isLargeScreen ? 5 : 0} 
            >
              <Box
                flexShrink={0}
                className="image-container"
                sx={{
                  width: '550px',
                  height: '600px',
                  overflow: 'hidden',
                  backgroundSize: 'cover',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    transition: 'all 5s ease',
                    height: '90%',
                  }}
                >
                  <AvatarComp onAnimationPlayed={handleAnimationComplete} />
                </Box>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={animationClose}
              sx={{ alignSelf: isLargeScreen ? 'flex-end' : "center", marginRight: isLargeScreen ? "5em" : "0"}} 
            >
              SKIP ANIMATION
            </Button>
          </Box>
        </Box>
      )}
      </ThemeProvider>
    </>
  );
}