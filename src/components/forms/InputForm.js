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
import { useMediaQuery } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
const InputForm = () => { 
  const [isHovered, setHovered] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} >
    <FormControl >
      <Box display={"flex"} width={"100%"} alignItems={"center"} gap={2} >
      <Box className={"customBorder"}>
      <OutlinedInput sx={{ minWidth: isSmallScreen ? "300px" : "370px"}}
        id="custom-input"
      />
    </Box>
    <Box>   
    <IconButton
                  color="primary"
                  component="a"
                  href="https://github.com/MattiaOlia"
                  target="_blank"
                  sx={{
                    '&:hover': {
                      borderRadius: '50%'
                    }}}
                >
                  <SendIcon sx={{fontSize: "3rem" }} />
     </IconButton>
     </Box>     
</Box>
    </FormControl>
   {/*<Box  maxHeight={"80px"}>
    <Arrow />
</Box>*/}
    </Box>
  );
};

export default InputForm;