import React from 'react'
import InputForm from './InputForm'
import { Box } from '@mui/material'
import "./inputForm.css"
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton , Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { pdfjs } from 'react-pdf';
import CVfile from "../../CVfile/MattiaOliaCV.pdf";

const HeroInput = () => {
   
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 1350px)');
  
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
    
    <Box sx={{ flexGrow: 1 }}>
    <Box sx={{ zIndex: "3 !important", position: "relative" }} width={"100%"}  display={"flex"} justifyContent={"center"}>
   
      
      
        <Box> 
        <Typography variant="h6">
                         Say HI to me!
              </Typography> 
         <InputForm isHero={true} />
    
      
      <Box display={'flex'} alignItems={'center'} gap={"1.5em"} justifyContent={isLargeScreen ? "" : "center"} >
    <Button onClick={downloadPDF} variant="contained" color="primary" sx={{ width: 'fit-content' }}>
      Download CV
    </Button>
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
     </Box>
  </Box>
  )
}

export default HeroInput



