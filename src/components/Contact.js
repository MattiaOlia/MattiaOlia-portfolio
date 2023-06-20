import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from "../theme";
import { Typography, Box, Fade } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 600px)');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

    

  return (
    <ThemeProvider theme={theme}>
      <div ref={contactRef} id="contact">
        {isLargeScreen ? (
        <Fade in={isVisible} timeout={1000}>
          <Box bgcolor={theme.palette.primary.secondary}  color={"white"} display={"flex"} flexDirection={"column"} p={2}>
         
         <Box display={"flex"} sx={{width:"100%"}} justifyContent={"center"} gap={5} m={1} >
         <Box display="flex"  justifyContent="left" sx={{ padding: '2em',paddingTop:'0', textAlign:"left" }} flexDirection="column" alignItems="center" >
          <Box mt={0}>
           <Typography variant='h5'>Site
           </Typography>
           <Typography  color="darkgreen" variant="body1" sx={{ fontSize: 20 ,textDecoration: "underline", transition: 'fade in 0.3s ease',
            '&:hover': {
              color: 'white'}}}>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  Home
                </ScrollLink>
              </Typography>
              <Typography  color="darkgreen" variant="body1" sx={{ fontSize: 20 ,textDecoration: "underline", transition: 'fade in 0.3s ease',
            '&:hover': {
              color: 'white'}}}>
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
              <Typography color="darkgreen" variant="body1" sx={{ fontSize: 20 ,textDecoration: "underline", transition: 'fade in 0.3s ease',
            '&:hover': {
              color: 'white'}}}>
              <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  About
                </ScrollLink>
              </Typography>
          </Box>
         </Box>
           <Box bp={1} display={"flex"} flexDirection={"column"}>
             <IconButton

               color= "black"
               component="a"
               href="https://www.linkedin.com/"
               target="_blank"
               rel="noopener noreferrer"
               >
             <LinkedInIcon sx={{ fontSize: "3rem", transition: 'fade in 0.3s ease',
             '&:hover': {
               color: 'white'} }} />
             </IconButton>
             <IconButton
               color="black"
               component="a"
               href="https://github.com/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <GitHubIcon sx={{ fontSize: "3rem", transition: 'fade in 0.3s ease',
       '&:hover': {
         color: 'white'} }} />
             </IconButton>
           </Box>
         </Box>
         <Box m={2}>
         <Typography variant='h6'>Feel free to get in touch if you have any questions or inquiries.</Typography>
 <Typography variant='h6'>You can email me at:<br/></Typography> <a style={{textDecoration: "underline", color:"darkgreen" }} href="mailto:mattiaolia97@gmail.com">
    <Typography sx={{transition: 'fade in 0.3s ease',
       '&:hover': {
         color: 'white'}}} variant='h5'>mattiaolia97@gmail.com</Typography></a>
         <Typography variant='h6'><br/> Designed and developed by: <br /> Mattia Olia<br/>
2023.</Typography>
           </Box>
         </Box> 
         
        </Fade>):(
          <Box bgcolor={theme.palette.primary.secondary}  color={"white"} display={"flex"} flexDirection={"column"} p={2}>
         
          <Box display={"flex"} sx={{width:"100%"}} justifyContent={"space-evenly"} m={1} >
          <Box display="flex"  justifyContent="left" sx={{ padding: '2em', textAlign:"left" }} flexDirection="column" alignItems="center" >
           <Box>
            <Typography variant='h6'>Site
            </Typography>
            <Typography  color="darkgreen" variant="body1" sx={{ fontSize: 20 ,textDecoration: "underline", transition: 'fade in 0.3s ease',
            '&:hover': {
              color: 'white'}}}>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  Home
                </ScrollLink>
              </Typography>
              <Typography  color="darkgreen" variant="body1" sx={{ fontSize: 20 ,textDecoration: "underline", transition: 'fade in 0.3s ease',
            '&:hover': {
              color: 'white'}}}>
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
              <Typography color="darkgreen" variant="body1" sx={{ fontSize: 20 ,textDecoration: "underline", transition: 'fade in 0.3s ease',
            '&:hover': {
              color: 'white'}}}>
              <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  style={{ textDecoration: 'none', color: 'inherit', cursor:"pointer" }}
                  offset={-100}
                >
                  About
                </ScrollLink>
              </Typography>
           </Box>
          </Box>
            <Box  p={1} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
              <IconButton

                color= "black"
                component="a"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                >
              <LinkedInIcon sx={{ fontSize: "3rem", transition: 'fade in 0.3s ease',
              '&:hover': {
                color: 'white'} }} />
              </IconButton>
              <IconButton
                color="black"
                component="a"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ fontSize: "3rem", transition: 'fade in 0.3s ease',
        '&:hover': {
          color: 'white'} }} />
              </IconButton>
            </Box>
          </Box>
          <Box m={2}>
          <Typography variant='body1'>Feel free to get in touch if you have any questions or inquiries.</Typography>
  <Typography>You can email me at:<br/></Typography> <a style={{textDecoration: "underline", color:"darkgreen" }} href="mailto:mattiaolia97@gmail.com">
     <Typography sx={{transition: 'fade in 0.3s ease',
        '&:hover': {
          color: 'white'}}} variant='h6'>mattiaolia97@gmail.com</Typography></a>
          <Typography variant='body1'><br/> Designed and developed by: <br /> Mattia Olia<br/>
2023.</Typography>
            </Box>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}

export default Contact;
