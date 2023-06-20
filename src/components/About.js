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
                About Me
              </Typography>
              <Box display="flex" justifyContent="center" sx={{ padding: ' 2em 15em' }}>
                <Fade in={isVisible} timeout={1000}>
                <Typography variant="h6" align="center">
                Hello! I'm Mattia, <br /> a front-end developer with expertise in ReactJS and Material-UI. I'm dedicated to creating engaging and intuitive digital experiences.
I have invested my time in learning React and Material-UI.
I'm always on the lookout for exciting projects to apply my skills and continue growing as a developer.
In addition to React and Material-UI, I have a solid foundation in HTML, CSS, and JavaScript, allowing me to create well-structured and interactive web pages. I'm also proficient in using modern development tools like npm and Webpack to enhance the efficiency of my workflow.
I'm a creative and detail-oriented individual with a results-driven mindset. I am open to learning from experienced developers. I'm determined to grow professionally and achieve increasingly ambitious goals in the field of web development. <br /><br />
Thank you for visiting my portfolio !
                </Typography>
                </Fade>
              </Box>
            </Box>
          </Fade>
        ) : (
          <Box>
            <Typography variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
              About me
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ padding: '3em' }}>
                <Typography variant="body1" align="center">
                Hello! I'm Mattia, <br /> a front-end developer with expertise in ReactJS and Material-UI. I'm dedicated to creating engaging and intuitive digital experiences.
I have invested my time in learning React and Material-UI.
I'm always on the lookout for exciting projects to apply my skills and continue growing as a developer.
In addition to React and Material-UI, I have a solid foundation in HTML, CSS, and JavaScript, allowing me to create well-structured and interactive web pages. I'm also proficient in using modern development tools like npm and Webpack to enhance the efficiency of my workflow.
I'm a creative and detail-oriented individual with a results-driven mindset. I am open to learning from experienced developers. I'm determined to grow professionally and achieve increasingly ambitious goals in the field of web development. <br /><br />
Thank you for visiting my portfolio !
                </Typography>
            </Box>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}

export default About;