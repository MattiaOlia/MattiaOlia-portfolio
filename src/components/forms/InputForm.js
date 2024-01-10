import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import  "./inputForm.css"
import { Box, Typography} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import theme from "../../theme";
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from '@emotion/react';

const InputForm = (props) => { 
  const [isHovered, setHovered] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box display={"flex"} justifyContent={"space-between"} >
    <FormControl >
      {!props.isHero && <label><Typography variant="h6">{props.label}</Typography></label>}
      <Box display={"flex"} width={"100%"} alignItems={"center"} gap={2} >
      <Box className={"customBorder"}>
      
      <OutlinedInput 
       sx={{ minWidth: isSmallScreen ? "300px" : "370px"}}
        id="custom-input"
      />
    </Box>
    
    {props.isHero &&
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
     </Box>   }  
</Box>
    </FormControl>
    </Box>
    </ThemeProvider>
  );
};

export default InputForm;