import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle'; // You can replace this icon with your desired one
import BorderImage from '../../images/borderInput.svg'; // Replace with the path to your border image
import  "./inputForm.css"
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { WidthFull } from '@mui/icons-material';
import arrowButton from "../../images/arrowButton.svg"
import { Button } from "@mui/material"
import arrowButtonHover from "../../images/arrowButtonHover.svg"
import Arrow from '../arrow/Arrow';

const InputForm = () => { 
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} >
    <FormControl >
      <Box display={"flex"}  paddingRight={"2em"} width={"100%"} >
      <Box className={"customBorder"}>
      <OutlinedInput sx={{minWidth:"380px"}}
        id="custom-input"
      />
    </Box>
    
    <Button
  component="a"
  href="https://github.com/MattiaOlia"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    position: "relative",
    overflow: "hidden",
    maxHeight: "100px",
    transform: "translateX(0px)",
    '& img': {
      width: '100%',
      height: '100%',
      transition: '0.2s ease',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 1
    },
    '& img:nth-child(1)': {
      zIndex: 2,
    },
    '& img:nth-child(2)': {
      zIndex: 1,
      opacity: 0,
    },
    '&:hover img:nth-child(1)': {
      opacity: 0,
    },
    '&:hover img:nth-child(2)': {
      opacity: 1,
    },
    '&:hover': {
      '& img:nth-child(2)': {
        opacity: 1,
      },
    },
  }}
>
 
      <img src={arrowButtonHover} alt="Original Image" />
      <img src={arrowButton} alt="Hovered Image" />
    </Button>
       
          
</Box>
    </FormControl>
    <Box  maxHeight={"80px"}>
    <Arrow />
    </Box>
    </Box>
  );
};

export default InputForm;