import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import { Typography, Box, Fade, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { TextField } from '@mui/material';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1 }
    );

    observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div ref={aboutRef} id="about">
        {/*<Box p={2} display={"flex"} flexDirection={"column"}>
          <Typography my={2} ml={5} variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
            Get in touch
          </Typography>
          <FormControl>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent={isSmallScreen ? 'center' : 'space-around'}
            alignItems={isLargeScreen ? 'center' : 'center'}
           
            width="100%"
            gap={isSmallScreen ? "" : "4"}
            minWidth={isSmallScreen ? "0" : "300px"}
            alignSelf={isSmallScreen ? "center" : "left"}
            margin={"4em auto"}
          >
           <Box
            display="flex"
            flexDirection='column'
            justifyContent={isSmallScreen ? 'center' : 'space-around'}
           >
              <Box mb={2}>
                <label>
                  <Typography variant="h6">Your Name</Typography>
                </label>
                <Box display="flex" width="100%" alignItems="center" gap={2}>
                  <OutlinedInput sx={{ minWidth: isSmallScreen ? '300px' : '370px' }} id="custom-input" />
                </Box>
              </Box>
            
              <Box mb={2}>
                <label>
                  <Typography variant="h6">Your Email</Typography>
                </label>
                <Box display="flex" width="100%" alignItems="center" gap={2}>
                  <OutlinedInput sx={{ minWidth: isSmallScreen ? '300px' : '370px' }} id="custom-input" />
                </Box>
              </Box>
              </Box>

            <Box>
              <Box mb={2}>
                <label>
                  <Typography variant="h6">Message</Typography>
                </label>
                <Box display="flex" width="100%" alignItems="center" gap={2}>
                  <TextField
                    required
                    variant="outlined"
                    multiline
                    rows={4}
                    InputProps={{ sx: { border: 'none' } }}
                    name="message"
                    sx={{ minWidth: isSmallScreen ? '300px' : '370px' }}
                    id="custom-input-textfield"
                  />
                </Box>
              </Box>

              <Button my={2} type="submit" variant="contained" color="primary">
                Submit
              </Button>
          </Box>
          </Box>
          </FormControl>
  </Box>*/}
  <Box p={2}>
          <Typography my={2} ml={5} variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
            Get in touch
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={isSmallScreen ? 'center' : 'space-between'}
            alignItems={isLargeScreen ? 'left' : 'center'}
            border="solid"
            width="100%"
            gap={4}
          >
            <FormControl>
              <Box mb={2}>
                <label>
                  <Typography variant="h6">Your Name</Typography>
                </label>
                <Box display="flex" width="100%" alignItems="center" gap={2}>
                  <OutlinedInput sx={{ minWidth: isSmallScreen ? '300px' : '370px' }} id="custom-input" />
                </Box>
              </Box>

              <Box mb={2}>
                <label>
                  <Typography variant="h6">Your Email</Typography>
                </label>
                <Box display="flex" width="100%" alignItems="center" gap={2}>
                  <OutlinedInput sx={{ minWidth: isSmallScreen ? '300px' : '370px' }} id="custom-input" />
                </Box>
              </Box>

              <Box mb={2}>
                <label>
                  <Typography variant="h6">Message</Typography>
                </label>
                <Box display="flex" width="100%" alignItems="center" gap={2}>
                  <TextField
                    required
                    variant="outlined"
                    multiline
                    rows={4}
                    InputProps={{ sx: { border: 'none' } }}
                    name="message"
                    sx={{ minWidth: isSmallScreen ? '300px' : '370px' }}
                    id="custom-input-textfield"
                  />
                </Box>
              </Box>

              <Button my={2} type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </FormControl>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
        


