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

function Hero() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 1350px)');
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
        display={isSmallScreen ? 'block' : 'flex'}
        alignItems={isSmallScreen ? 'center' : 'flex-start'}
        justifyContent={isSmallScreen ? 'center' : 'flex-end'}
        maxHeight={"700px"}
        border={"solid red"}
        maxWidth={"1400px"}
        margin={"0 auto"}
      >
        {isSmallScreen ? (
           <Box minHeight={"100vh"}  display={"flex"} flexDirection={"column"} alignItems={'center'} gap={1} justifyContent={"center"} mt={8}>
           <Box
              flexShrink={0}
              className="image-container"
              sx={{
                width: isLargeScreen ? "270px" : "230px",
                height: isLargeScreen ? "300px" : "230px",
                overflow: "hidden",
                backgroundSize: "cover"
        
              }}
            
            >
              <Box
                sx={{
                  width: '100%',
                  transition: 'all 5s ease',
                  transform: `scale(${zoomed ? 1.4 : 1})`,
                  height:"90%",
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <AvatarComp />
                </Suspense>
              </Box>
            </Box>
           <Typography variant="h4" fontWeight={600}>
             Hi, I am Mattia, <br />
             Front-end developer
           </Typography>
           <Typography variant="body1">
             I focus on the development of web applications, something that I enjoy exploring and learning more about every day.
             Always looking to connect!<br />
             Want to get in touch about a project? 
           </Typography>
           <Box display={"flex"} width={"100%"} border={"solid green"} flexGrow={1}>
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
            pl={isLargeScreen ? "1em" : "0"}
            marginTop="5em"
          >
            <Box
              flexShrink={0}
              className="image-container"
              sx={{
                width: isLargeScreen ? "270px" : "200px",
                height: isLargeScreen ? "300px" : "200px",
                overflow: "hidden",
                backgroundSize: "cover",
                transform: "translateY(-100px)"
              }}
              border={"solid blu"}
            >
              <Box
                sx={{
                  width: '100%',
                  transition: 'all 5s ease',
                  transform: `scale(${zoomed ? 1.4 : 1})`,
                  height:"90%",
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <AvatarComp />
                </Suspense>
              </Box>
            </Box>
            <Box border={"solid red"} flexGrow={1} pl={3} sx={{ marginLeft: isLargeScreen ? "2em" : "1em"}} display={'flex'} flexDirection={"column"} >
              <Typography variant={isLargeScreen ? "h2" : "h4"} fontWeight={isLargeScreen ? 600 : 400}>
                Hi, I am Mattia, <br />
                Front-End Developer
              </Typography>
              <Typography variant="h6">
                I focus on the development of web applications, <br/> something that I enjoy exploring and learning more about every day.<br/>
                Always looking to connect!<br />
                Want to get in touch about a project? Send me a message at:
              </Typography>
              <Box display={"flex"} width={"100%"} border={"solid green"} flexGrow={1}>
                <HeroInput />
                <Box border={"solid"} width={"100%"}  sx={{transform: "translateY(-190px) translateX(-70px)" }}>
                  <Pencil3D />
                </Box>
              </Box>
            </Box>
          </Box>
        ) :
        <Box>
        <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        textAlign="left"
        mt={"3em"}
        border={"solid green"}
        width={"100%"}
      >
        <Box
          flexShrink={0}
          className="image-container"
          sx={{
            width: "250px",
            height: "250px",
            overflow: "hidden",
            backgroundSize: "cover",
            
          }}
          border={"solid blu"}
        >
        <Box
          sx={{
            width: '100%',
            transition: 'all 5s ease',
            transform: `scale(${zoomed ? 1.4 : 1})`,
            height:"90%",
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <AvatarComp />
          </Suspense>
        </Box>
      </Box>
      <Box border={"solid red"} flexGrow={1} p={2}  display={'flex'} flexDirection={"column"} >
              <Typography variant="h4" fontWeight={500}>
                Hi, I am Mattia, <br />
                Front-End Developer
              </Typography>
              <Typography variant="h6">
                I focus on the development of web applications, <br/> something that I enjoy exploring and learning more about every day.<br/>
                Always looking to connect!<br />
                Want to get in touch about a project? Send me a message at:
              </Typography>
      </Box>
      
      </Box>
      <Box display={"flex"} width={"100%"} border={"solid green"} flexGrow={1}>
      <HeroInput />
</Box></Box>}
        {isLargeScreen && <BackgroundComp />}
      </Box>
    </ThemeProvider>
  );
}

export default Hero;
