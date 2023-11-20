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
import Spline from '@splinetool/react-spline';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect } from 'react'


const HeroInput = () => {
 


  return (
    
    <Box sx={{ flexGrow: 1 }}>
    <Box  display={"flex"} sx={{ zIndex: "5 !important", position: "relative" }} width={"100%"}>
    <Grid container spacing={6} >
      <Grid item xs={12}>
      
        <Box>
        <InputForm />
      
    </Box>
      </Grid>
      <Grid item xs={12}>
      <Box display={'flex'} alignItems={'center'} gap={"1.5em"} >
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
      </Grid>
    </Grid>
   
    </Box>
    
  </Box>
  )
}

export default HeroInput



