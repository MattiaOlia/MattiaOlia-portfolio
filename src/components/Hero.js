import  {React,useRef,useState,useEffect} from 'react'
import theme from "../theme"
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { Button } from '@mui/material';
import imageHero from "../images/imageHero.avif"
import "./Hero.css"
import { Fade } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

 function Hero() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1200px)');
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    const isXLargeScreen = useMediaQuery('(min-width: 1371px)');;
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null)

    

    return (
        <ThemeProvider theme={theme} >
                <Box  display={isSmallScreen ? 'block' : 'flex'}
                      alignItems={isSmallScreen ? 'center' : 'flex-start'}
                      justifyContent={isSmallScreen ? 'center' : 'flex-end'}
                      p={3}>
                  
                   {isSmallScreen ? (
                           <Box minHeight={"100vh"} display={"flex"}
                           flexDirection={"column"} alignItems={'center'} gap={3} justifyContent={"center"}>
                            
                            <Box className="image-container" mt= {"-8em"}>
                               <img src={imageHero} alt="Hero" />
                               </Box>
                                  <Typography variant="h4" fontWeight={600}>
                                  Hi, I am Mattia, <br/>
                                 Front-end developer
                                  </Typography>
                                  <Typography variant="body1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
                                  <Box alignItems={'center'} display={'flex'}>
                                  <Button variant="contained" color="primary">Download CV</Button>
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
      ) : (
        <Box
  display="flex"
  alignItems={"center"}
  justifyContent="center"
  textAlign="left"
  pl={isLargeScreen ? "5em" : "0"}
  margin={isXLargeScreen ? "8em auto" : "5em auto"}
>
  <Box flexShrink={0} className="image-container" sx={{ marginLeft: isLargeScreen ? "auto 6em" : "auto 2em", width: isLargeScreen ? "250px" : "200px" ,
          height: isLargeScreen ? "250px" : "200px" , }}>
    <img src={imageHero} alt="Hero"  sx={{
          width: '100%',
          maxWidth: '400px',
          transition: 'all 0.3s ease',
          '@media (min-width: 600px)': {
            '&:hover': {
              transform: 'scale(1.2)',
            },
          },
        }} />
  </Box>
  <Box flexGrow={1} pl={3}  sx={{marginLeft: isLargeScreen ? "2em" : "1.5Cem", paddingRight : isLargeScreen ? "6em" : "2em"}} display={'flex'} flexDirection={"column"} gap={2} >
    <Typography variant={isLargeScreen ? "h1": "h4"} fontWeight={isLargeScreen ? 500 : 400 }>
      Hi, I am John, <br />
      Creative Technologist
    </Typography>
    <Typography variant="body1">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </Typography>
    <Box display={'flex'} alignItems={'center'} gap={"1.5em"}>
    <Button variant="contained" color="primary" sx={{ width: 'fit-content' }}>
      Download CV
    </Button>
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
      )}    
              
                </Box>
        </ThemeProvider>
        
    )
}

export default Hero;
