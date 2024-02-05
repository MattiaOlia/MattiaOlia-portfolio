import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { scroller } from 'react-scroll'


function Navbar() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedProjects, setClickedProjects] = useState(false);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef =useRef (null);


    const buttonStyles = {
      '&:hover': {
        backgroundColor: 'green', // Cambia il colore di sfondo al passaggio del mouse
        color: 'white', // Cambia il colore del testo al passaggio del mouse
      },
    }
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      scroll.scrollTo(projectsRef.current.offsetTop, { duration: 500, smooth: true });
      handleClose();
    }
  };


  const scrollToAbout = () => {
    if (aboutRef.current) {
      scroller.scrollTo(aboutRef.current.offsetTop, { duration: 500, smooth: true });
      handleClose();
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      scroller.scrollTo(contactRef.current.offsetTop - 300, { duration: 500, smooth: true });
      handleClose();
    }
  };

 




  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" style={{zIndex:5}}>
        {isSmallScreen ? (
          <Toolbar position={"fixed"}>
            <Box display={"flex"} justifyContent={"space-between"} sx={{width:"100%"}} alignItems={"center"}>
            <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {
                scrollToProjects();
              }}><ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClose}
              style={{ textDecoration: 'none', color: 'inherit',cursor:"pointer" }}
              offset={-70}
            >
                Work
                </ScrollLink>
              </MenuItem>

              <MenuItem onClick={() => {
                scrollToAbout();
              }}><ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClose}
              style={{ textDecoration: 'none', color: 'inherit'}}
              offset={-90}
            >
                Contact
                </ScrollLink>
              </MenuItem>

             
              <MenuItem onClick={() => {
                scrollToContact();
              }}><ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onClick={handleClose}
              style={{ textDecoration: 'none', color: 'inherit'  }}
              offset={+400}
            >
                Info
                </ScrollLink>
              </MenuItem>

             
            </Menu>
            <Typography color="white" variant="h5" sx={{ transition: 'fade in 0.5s ease',
            '&:hover': {
              textDecoration: "underline"}}}>
              <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  Mattia's Portfolio
                </ScrollLink>
              </Typography>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar>
            <Box display={'flex'} width={"100%"}
            justifyContent={"space-evenly"}
            alignItems={"center"}>
               <Typography color="white" variant="h5" sx={{ transition: 'fade in 0.5s ease',
            '&:hover': {
              textDecoration: "underline"}}}>
              <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  Mattia's Portfolio
                </ScrollLink>
              </Typography>
            <Box
              display="flex"
              
              gap={3}
              sx={{ marginLeft: 'auto' }}
              margin={3}
            >
              
              <Typography color="white" variant="h5" sx={{ transition: 'fade in 0.5s ease',
            '&:hover': {
              textDecoration: "underline"}}}>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  Work
                </ScrollLink>
              </Typography>
              
              <Typography color="white" variant="h5" sx={{ transition: 'fade in 0.5s ease',
            '&:hover': {
              textDecoration: "underline"}}}>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit',cursor:"pointer"}}
                  offset={-100}
                >
                  Contact
                </ScrollLink>
              </Typography>
              

              <Typography color="white" variant="h5" sx={{ transition: 'fade in 0.5s ease',
            '&:hover': {
              textDecoration: "underline"}}}>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                   style={{ textDecoration: 'none', color: 'inherit',cursor:"pointer" }}
                  
                >
                  Info
                </ScrollLink>
              </Typography>
               
              </Box>
            </Box>
          </Toolbar>
        )}
      </AppBar>
      
    </ThemeProvider>
  );
}


export default Navbar;