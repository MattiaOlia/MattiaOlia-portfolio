import {ReactComponentElement,useState} from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero" 
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Contact } from './components/Contact';
import { InView } from 'react-intersection-observer';
import { Fade } from '@mui/material';
import BackgroundComp from './components/background/BackgroundComp';

function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen=useMediaQuery('(max-width: 1371px)');
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef= useRef(null);
  const heroRef=useRef(null)
  const [isVisible, setIsVisible] = useState(false);
  

  return (
    <div>
        <Router>
          
          <Navbar />
          <InView onChange={(inView, entry) => setIsVisible(inView)}>
          <Fade in={isVisible} timeout={1000}>
          <Box
             m={isSmallScreen ? 0 : 'auto'}
             display="flex"
             flexDirection="column"
             mt={"2em"}
             id="hero" ref={heroRef}
             >
            
            <Hero />
          <Box bgcolor={"white"}>
          <  Box  m={isSmallScreen ? 0 : '2em'}  id="projects" ref={projectsRef}>
            <Projects />
        </Box>
        <Box  id="about" ref={aboutRef}>
          <About />
        </Box>
        <Box id="contact" ref={contactRef} >
          <Contact />
        </Box>
        </Box>
      </Box>
      </Fade>
      </InView>
    </Router>
    </div>
  );
}

export default Home
