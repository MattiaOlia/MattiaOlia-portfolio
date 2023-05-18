import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from "../theme";
import { Typography, Box, Fade } from '@mui/material';
import { useMediaQuery } from '@mui/material';


export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 }
    );

    observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div ref={aboutRef} id="about">
        {isLargeScreen ? (
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Typography variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
                About
              </Typography>
              <Box display="flex" justifyContent="center" sx={{ padding: '5em' }}>
                <Fade in={isVisible} timeout={1000}>
                  <Typography variant="body1">
                    As a frontend developer, my expertise lies in creating seamless and intuitive user experiences.
                    I specialize in using cutting-edge technologies to produce high-quality web applications.
                    Specifically, I have vast knowledge of ReactJS and NodeJS, which allow me to build complex and dynamic applications with ease.
                  </Typography>
                </Fade>
              </Box>
            </Box>
          </Fade>
        ) : (
          <Box>
            <Typography variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
              About
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ padding: '5em' }}>
                <Typography variant="body1">
                  As a frontend developer, my expertise lies in creating seamless and intuitive user experiences.
                  I specialize in using cutting-edge technologies to produce high-quality web applications.
                  Specifically, I have vast knowledge of ReactJS and NodeJS, which allow me to build complex and dynamic applications with ease.
                </Typography>
            </Box>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}

export default About;