import  {React,useRef,useState,useEffect,Suspense} from 'react'
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

import BackgroundComp from './background/BackgroundComp';
import CVfile from "./Mattia Olia CV.pdf"
import { Document, Page, pdfjs } from 'react-pdf';

import HeroInput from './forms/HeroInput';
import AvatarComp from '../components/avatar/AvatarComp'

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

  const pdfUrl = CVfile;


  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
    const downloadPDF = () => {
      
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = '_blank';
      link.download = 'Mattia Olia CV.pdf'; 
      link.click();
    };
  
  
  

    

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
                              {/*<AvatarComp  />*/}
                              
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
                                  <Button variant="contained" color="primary" onClick={downloadPDF}>Download CV</Button>
                                  <IconButton
                  color="primary"
                  component="a"
                  href="https://www.linkedin.com/in/mattiaolia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
                <IconButton
                  color="primary"
                  component="a"
                  href="https://github.com/MattiaOlia"
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
  marginTop={isLargeScreen ? "5em" : "5em"}

>
  <Box flexShrink={0} className="image-container" sx={{ marginLeft: isLargeScreen ? "auto 6em" : "auto 2em", width: isLargeScreen ? "300px" : "200px" ,
          height: isLargeScreen ? "250px" : "200px" , overflow: "hidden" }}>
    <Box sx={{
          width: '100%',
          transition: 'all 5s ease',
          transform: `scale(${zoomed ? 1.4 : 1}) translateY(-100px)`,
           border:"solid red"
        }}>
      <Suspense fallback={<div>Loading...</div>}>
      <AvatarComp/>
      </Suspense> 
    </Box>
  </Box>
  <Box flexGrow={1} pl={3}  sx={{marginLeft: isLargeScreen ? "2em" : "1.5Cem", paddingRight : isLargeScreen ? "6em" : "2em"}} display={'flex'} flexDirection={"column"} gap={2} >
    <Typography variant={isLargeScreen ? "h2": "h4"} fontWeight={isLargeScreen ? 600 : 400 }>
      Hi, I am Mattia, <br />
      Front-End Developer
    </Typography>
    <Typography variant="h6">
    I focus on development of web applications, something that I enjoy exploring and learning more about everyday.
   
    Always looking to connect!<br/>
Want to get in touch about a project? Send me a message at:
    </Typography>
  
   {/*} <a style={{color:"green" }} href="mailto:mattiaolia97@gmail.com">
     <Typography variant="h5" fontWeight={600} sx={{transition: 'fade in 0.3s ease',
        '&:hover': {
        textDecoration: "underline"}}}>mattiaolia97@gmail.com</Typography></a>*/}

  
                <HeroInput />
               
  </Box>
</Box>
      )}    
          {isLargeScreen && <BackgroundComp />} 
                </Box>
        </ThemeProvider>
        
    )
}
 

export default Hero;

