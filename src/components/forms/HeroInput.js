import React from 'react'
import InputForm from './InputForm'
import { Box } from '@mui/material'
import SayHi from "../../images/SayHI.svg"
import "./inputForm.css"
import Grid from '@mui/material/Grid';
import Arrow from '../arrow/Arrow'
import { Button } from '@mui/material';
import { Application } from '@splinetool/runtime';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

import { useMediaQuery } from '@mui/material';

const HeroInput = () => {
   
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isLargeScreen = useMediaQuery('(min-width: 1350px)');

  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <Box sx={{ zIndex: "3 !important", position: "relative" }} width={"100%"}  display={"flex"} justifyContent={"center"}>
    
      
      
        <Box>  
         <InputForm />
    
      
      <Box display={'flex'} alignItems={'center'} gap={"1.5em"} justifyContent={isLargeScreen ? "" : "center"} >
    <Button  variant="contained" color="primary" sx={{ width: 'fit-content' }}>
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



