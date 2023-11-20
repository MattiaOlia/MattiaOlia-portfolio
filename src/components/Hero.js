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
        display={isSmallScreen ? 'block' : 'flex'}
        alignItems={isSmallScreen ? 'center' : 'flex-start'}
        justifyContent={isSmallScreen ? 'center' : 'flex-end'}
        p={3}
      >
        {isSmallScreen ? (
          <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"} alignItems={'center'} gap={1} justifyContent={"center"}>
            <Box className="image-container" mt={"-5em"}>
              {/*<img src={imageHero} alt="Hero" />*/}
              {/*<AvatarComp  />*/}
            </Box>
            <Typography variant="h4" fontWeight={600}>
              Hi, I am Mattia, <br />
              Front-end developer
            </Typography>
            <Typography variant="body1">
              I focus on the development of web applications, something that I enjoy exploring and learning more about every day.
              Always looking to connect!<br />
              Want to get in touch about a project? Send me a message at:
            </Typography>
            <a style={{ color: "green" }} href="mailto:mattiaolia97@gmail.com">
              <Typography variant="h6" fontWeight={600} sx={{ transition: 'fade in 0.3s ease', '&:hover': { textDecoration: "underline" } }}>mattiaolia97@gmail.com</Typography>
            </a>
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
            <Box
              flexShrink={0}
              className="image-container"
              sx={{
                marginLeft: isLargeScreen ? "auto 6em" : "auto 2em",
                width: isLargeScreen ? "270px" : "200px",
                height: isLargeScreen ? "270px" : "200px",
                overflow: "hidden",
                backgroundSize: "cover"
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  transition: 'all 5s ease',
                  transform: `scale(${zoomed ? 1.4 : 1})`,
                  height:"100%",
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <AvatarComp />
                </Suspense>
              </Box>
            </Box>
            <Box flexGrow={1} pl={3} sx={{ marginLeft: isLargeScreen ? "2em" : "1.5Cem", paddingRight: isLargeScreen ? "6em" : "2em" }} display={'flex'} flexDirection={"column"} gap={2}>
              <Typography variant={isLargeScreen ? "h2" : "h4"} fontWeight={isLargeScreen ? 600 : 400}>
                Hi, I am Mattia, <br />
                Front-End Developer
              </Typography>
              <Typography variant="h6">
                I focus on the development of web applications, something that I enjoy exploring and learning more about every day.
                Always looking to connect!<br />
                Want to get in touch about a project? Send me a message at:
              </Typography>
              {/*} <a style={{color:"green" }} href="mailto:mattiaolia97@gmail.com">
                 <Typography variant="h5" fontWeight={600} sx={{transition: 'fade in 0.3s ease',
                    '&:hover': {
                    textDecoration: "underline"}}}>mattiaolia97@gmail.com</Typography></a>*/}
              <Box display={"flex"} width={"100%"} >
                <HeroInput />
                <Box width={"100%"}  sx={{transform: "translateY(-150px) translateX(0px)" }}>
                  <Pencil3D />
                </Box>
                
              </Box>
            </Box>
          </Box>
        )}
        {isLargeScreen && <BackgroundComp />}
      </Box>
    </ThemeProvider>
  );
}

export default Hero;
