import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "./inputForm.css";
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import theme from "../../theme";
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from '@emotion/react';

const InputForm = (props) => {
  const [isHovered, setHovered] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [message, setMessage] = useState("");
  
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Simulating a fetch request to Formspree
      const response = await fetch('https://formspree.io/f/mnqenoqw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }), // Assuming 'message' is the key you want to send
      });
  
      if (response.ok) {
        console.log('Message sent successfully!');
        setMessage('');
      } else {
        console.error('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <FormControl>
          <Box className={"customBorder"}>
            <OutlinedInput
              sx={{ minWidth: isSmallScreen ? "300px" : "370px" }}
              name="message" value={message} onChange={handleChange}
            />
          </Box>
        </FormControl>

        {message && (
          <IconButton
            color="primary"
            sx={{
              '&:hover': {
                borderRadius: '50%',
              }
            }}
            onClick={handleSubmit}
          >
            <SendIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default InputForm;