import  {React,useRef,useState,useEffect} from 'react'
import theme from "../theme"
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { Button } from '@mui/material';
import "./Hero.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import AvatarComp from './avatar/AvatarComp';
import BackgroundComp from './background/BackgroundComp';


 function Hero() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1200px)');
    const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    const isXLargeScreen = useMediaQuery('(min-width: 1371px)');;
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null)
    const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    setZoomed(()=>!zoomed);
  }, []);

    

    return (
        <ThemeProvider theme={theme} >
                <Box  display={isSmallScreen ? 'block' : 'flex'}
                      alignItems={isSmallScreen ? 'center' : 'flex-start'}
                      justifyContent={isSmallScreen ? 'center' : 'flex-end'}
                      p={3}>
                  
                   {isSmallScreen ? (
                           <Box minHeight={"100vh"} display={"flex"}
                           flexDirection={"column"} alignItems={'center'} gap={1} justifyContent={"center"}>
                            
                            <Box className="image-container" mt= {"-5em"}>
                               {/*<img src={imageHero} alt="Hero" />*/}
                               <AvatarComp />
                               </Box>
                                  <Typography variant="h4" fontWeight={600}>
                                  Hi, I am Mattia, <br/>
                                 Front-end developer
                                  </Typography>
                                  <Typography variant="body1">
    I focus on development of web applications, something that I enjoy exploring and learning more about everyday.
    Always looking to connect!<br/>
Want to get in touch about a project? Send me a message at :
    </Typography>
    <a style={{color:"green" }} href="mailto:mattiaolia97@gmail.com">
     <Typography variant="h6" fontWeight={600} sx={{transition: 'fade in 0.3s ease',
        '&:hover': {
          textDecoration: "underline"}}}>mattiaolia97@gmail.com</Typography></a>
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
  margin={isLargeScreen ? "8em auto" : "5em auto"}
>
  <Box flexShrink={0} className="image-container" sx={{ marginLeft: isLargeScreen ? "auto 6em" : "auto 2em", width: isLargeScreen ? "300px" : "200px" ,
          height: isLargeScreen ? "270px" : "200px" , overflow: "hidden" }}>
    <Box sx={{
          width: '100%',
          transition: 'all 5s ease',
          transform: zoomed ? 'scale(1.4)' : 'scale(1)'
           
        }}>
      <AvatarComp /></Box>
  </Box>
  <Box flexGrow={1} pl={3}  sx={{marginLeft: isLargeScreen ? "2em" : "1.5Cem", paddingRight : isLargeScreen ? "6em" : "2em"}} display={'flex'} flexDirection={"column"} gap={2} >
    <Typography variant={isLargeScreen ? "h1": "h4"} fontWeight={isLargeScreen ? 500 : 400 }>
      Hi, I am Mattia, <br />
      Front-End Developer
    </Typography>
    <Typography variant="h6">
    I focus on development of web applications, something that I enjoy exploring and learning more about everyday.
   
    Always looking to connect!<br/>
Want to get in touch about a project? Send me a message at:
    </Typography>
  
    <a style={{color:"green" }} href="mailto:mattiaolia97@gmail.com">
     <Typography variant="h5" fontWeight={600} sx={{transition: 'fade in 0.3s ease',
        '&:hover': {
          textDecoration: "underline"}}}>mattiaolia97@gmail.com</Typography></a>

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
          {isLargeScreen && <BackgroundComp />} 
                </Box>
        </ThemeProvider>
        
    )
}

export default Hero;

