import React, { useRef, useState, useEffect, Suspense } from 'react';
import theme from "../theme";
import { ThemeProvider } from '@emotion/react';
import { Typography, Box, Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMediaQuery } from '@mui/material';
import BackgroundComp from './background/BackgroundComp';
import CVfile from "./Mattia Olia CV.pdf";
import { pdfjs } from 'react-pdf';
import Pencil3D from './forms/Pencil3D';
import HeroInput from './forms/HeroInput';
import AvatarComp from '../components/avatar/AvatarComp';
import { motion } from 'framer-motion';

function Hero() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');
  const [zoomed, setZoomed] = useState(false);
  const pdfUrl = CVfile;

  useEffect(() => {
    setZoomed(!zoomed);
  }, []);

  

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Mattia Olia CV.pdf';
    link.click();
  };

  return (
    <ThemeProvider theme={theme}>
      
      <Box
        display={isLargeScreen ? 'block' : 'flex'}
        alignItems={isLargeScreen ? 'center' : 'center'}
        justifyContent={"center"}
        //maxHeight={"700px"}
       
        maxWidth={"1400px"}
        margin={"0 auto"}
        
      >

        {isSmallScreen ? (
           <Box minHeight={"100vh"}  display={"flex"} flexDirection={"column"}  alignItems={'left'} gap={1} justifyContent={"center"}  p={1} border={"solid"}>
           
           
           
           <Typography variant={isSmallScreen ? 'h4' : "h2"} mt={2} fontWeight={600}>
             Hi, I am Mattia, <br />
             Front-end developer
           </Typography>
           
           <Typography variant="body1"  my={2}>
             I focus on the development of web applications, something that I enjoy exploring and learning more about every day.
             Always looking to connect!<br />
             Want to get in touch about a project? 
           </Typography>
          
           <Box display={"flex"} width={"100%"}  >
      <HeroInput />
</Box>
         
         </Box>
          
        ) : isLargeScreen ? (
          // Code for large screens
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            textAlign="left"
            pl={isLargeScreen ? "7em" : "0"}
            marginTop="7em"
          >
            
            <Box flexGrow={1} pl={3} sx={{ marginLeft: isLargeScreen ? "2em" : "1em"}} display={'flex'} flexDirection={"column"} >
              <Typography variant={isLargeScreen ? "h2" : "h4"} fontWeight={isLargeScreen ? 600 : 400} my={2}>
                Hi, I am Mattia, <br />
                Front-End Developer
              </Typography>
              <Typography variant="h6" my={2}>
                I focus on the development of web applications, <br/> something that I enjoy exploring and learning more about every day.<br/>
                Always looking to connect!<br />

              </Typography>
              <Box display={"flex"} width={"100%"}>
                <HeroInput  />
                
               <Box  width={"100%"}  sx={{transform: "translateY(-190px) translateX(-30px)" }}>
                  <Pencil3D url="https://prod.spline.design/HNIC8SaqO7hOUfGp/scene.splinecode/" />
                </Box>
              </Box>
            </Box>
          </Box>
        ) :
        <Box minHeight={"100vh"}  mt={"6em"}>
        <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
        textAlign="left"
       
       
        width={"100%"}
        
      >
      
      <Box flexGrow={1} pl={10} my={2}  display={'flex'} flexDirection={"column"} >
              <Typography variant="h3" fontWeight={600}>
                Hi, I am Mattia, <br />
                Front-End Developer
              </Typography>
              <Typography variant="h6">
                I focus on the development of web applications, <br/> something that I enjoy exploring and learning more about every day.<br/>
                Always looking to connect!<br />
               
              </Typography>
      </Box>
      
      </Box>
      <Box display={"flex"} width={"100%"}  flexGrow={1}>
      <HeroInput />
</Box> </Box> }
        
      </Box>
      
    </ThemeProvider>
  );
}

export default Hero;