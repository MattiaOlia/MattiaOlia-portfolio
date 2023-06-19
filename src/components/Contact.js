import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from "../theme";
import { Typography, Box, Fade } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';


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
          
          <Box bgcolor={theme.palette.primary.main}>
            <Typography variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
              Contact
            </Typography>
            
            <Box display="flex" justifyContent="center" sx={{ padding: '5em' }} flexDirection="column" alignItems="center">
              <Typography variant="body1">I always look for passionate people to work with.</Typography>
              <Typography variant="h6">Let's get in touch.</Typography>
              <Typography mt={5} variant={isSmallScreen ? 'h5' : 'h3'}>mattiaolia97@gmail.com</Typography>
              <Box mt={5}>
                <IconButton
                  color="primary"
                  component="a"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton
                  color="primary"
                  component="a"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
              </Box>
            </Box>
            
          </Box>
        </Fade>):(
          <Box bgcolor={theme.palette.primary.secondary}  color={"white"} display={"flex"} flexDirection={"column"} p={2}>
         
          <Box display={"flex"} sx={{width:"100%"}} justifyContent={"space-evenly"} m={1} >
          <Box display="flex"  justifyContent="left" sx={{ padding: '2em', textAlign:"left" }} flexDirection="column" alignItems="center" border={"solid"}>
           <Box>
            <Typography variant='h6'>Site
            </Typography>
            <Typography variant='body1'>Home
            </Typography>
            <Typography variant='body1'>
               Projects
            </Typography>
           </Box>
          </Box>
            <Box border={"solid"} p={1} display={"flex"} flexDirection={"column"}>
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
