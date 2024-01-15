import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { Fade } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Projects from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import HeroAnimationAvatar from './components/HeroAnimationAvatar'
import { Box } from '@mui/material';
import ScrollAnimation from './components/ScrollAnimation';
import { motion, useAnimation } from 'framer-motion';



function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();


  const handleScroll = () => {
    const scrollY = window.scrollY;
    controls.start({ y: -scrollY });
  };

  useEffect(() => {
    console.log("Componente montato, offsetTop:", projectsRef.current?.offsetTop);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Router>
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 3, delay: 3}}
  >
    <Box maxWidth={"1600px"} display="flex" flexDirection={"column"} margin={"auto"} overflowX={"hidden"} width={"100%"} justifyContent={"center"}>
      <Navbar />
      <InView onChange={(inView, entry) => setIsVisible(inView)}>
        <Fade in={isVisible} timeout={1000}>
          <Box
            display="flex"
            flexDirection="column"
           
            sx={{ position: 'relative' }}
            width={"100%"}
          >
            <Box id="hero" ref={heroRef}>
              <Hero />
            </Box>
          </Box>
          </Fade>
        </InView>
        <Box backgroundColor={"white"} px={isLargeScreen ? 10 : 0}>
          <Box bgcolor={"white"} m={isSmallScreen ? 0 : '2em 0'} id="projects" ref={projectsRef} width="100%">
            <Projects />
          </Box>
          <Box id="about" ref={aboutRef}  my={5} width="100%">
            <About />
          </Box>
          <Box id="contact" ref={contactRef} width="100%" mb={6}>
            <Contact />
          </Box>
        </Box>
      </Box>
</motion.div>
</Router>
      </div>
  );
}

export default Home;
