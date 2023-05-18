import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme"
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function Navbar() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedProjects, setClickedProjects] = useState(false);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef =useRef (null);
 

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
      scroll.scrollTo(aboutRef.current.offsetTop, { duration: 500, smooth: true });
      handleClose();
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      scroll.scrollTo(contactRef.current.offsetTop, { duration: 500, smooth: true });
      handleClose();
    }
  };

 




  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        {isSmallScreen ? (
          <Toolbar position={"fixed"}>
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
                Projects
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
              offset={-70}
            >
                About
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
            >
                Contact
                </ScrollLink>
              </MenuItem>

             
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
          </Toolbar>
        ) : (
          <Toolbar>
            <Box
              display="flex"
              justifyContent="flex-end"
              gap={3}
              sx={{ marginLeft: 'auto' }}
              margin={3}
            >
              <Typography variant="body1" sx={{ fontSize: 20 }
            }>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  Projects
                </ScrollLink>
              </Typography>

              <Typography variant="body1" sx={{ fontSize: 20 } }>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit',cursor:"pointer"}}
                  offset={-100}
                >
                  About
                </ScrollLink>
              </Typography>

              <Typography variant="body1" sx={{ fontSize: 20 } }>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit',cursor:"pointer" }}
                >
                  Contact
                </ScrollLink>
              </Typography>  

            </Box>
          </Toolbar>
        )}
      </AppBar>
      
    </ThemeProvider>
  );
}

export default Navbar;