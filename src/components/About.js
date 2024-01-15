import React, { useRef, useState, useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import { Typography, Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width: 900px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userMessage: ""
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSendCorrectly, setisSendCorrectly] = useState(false);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.userName || !form.userEmail || !form.userMessage || !isValidEmail(form.userEmail)) {
      // Check if all fields are completed and email is valid
      setDialogOpen(true);
      setisSendCorrectly(false);
      return;
    }

    // Send the form to Formspree
    const response = await fetch('https://formspree.io/f/mnqenoqw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setForm({
        userName: '',
        userEmail: '',
        userMessage: '',
      });
      setDialogOpen(true);
      setisSendCorrectly(true);
    } else {
      setDialogOpen(true);
      setisSendCorrectly(false);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
        <Box p={2}>
          <Typography my={2} ml={5} variant={isSmallScreen ? 'h2' : 'h1'} fontWeight={400}>
            Get in touch
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection={"column"}
            justifyContent={isSmallScreen ? 'center' : 'space-between'}
            alignItems={isLargeScreen ? 'left' : 'center'}
            border="solid"
            width="100%"
            gap={1}
          >
            <Box mb={2}>
              <Typography variant="h6">Your Name</Typography>
              <OutlinedInput
                name="userName" value={form.userName} onChange={(e) => setForm({ ...form, userName: e.target.value })}
                sx={{ minWidth: isSmallScreen ? '300px' : '370px' }} />
            </Box>

            <Box mb={2}>
              <Typography variant="h6">Your Email</Typography>
              <OutlinedInput
                name="userEmail" value={form.userEmail} onChange={(e) => setForm({ ...form, userEmail: e.target.value })}
                sx={{ minWidth: isSmallScreen ? '300px' : '370px' }} />
            </Box>

            <Box mb={2}>
              <Typography variant="h6">Message</Typography>
              <OutlinedInput
                required
                variant="outlined"
                multiline
                rows={4}
                InputProps={{ sx: { border: 'none' } }}
                sx={{ minWidth: isSmallScreen ? '300px' : '370px' }}
                id="custom-input-textfield"
                name="userMessage" value={form.userMessage} onChange={(e) => setForm({ ...form, userMessage: e.target.value })}
              />
            </Box>

            <Button type="submit" variant="contained" sx={{ width: 'fit-content' }} color="primary">
              Submit
            </Button>

            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
              <DialogTitle>
                <Box width={"md"}>
                  <Typography variant="h6">{isSendCorrectly ? "Thanks, your messagge has been sent correctly" : "Please fill in all fields correctly"}</Typography>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Button onClick={handleCloseDialog} variant="contained" color="primary">
                  Close
                </Button>
              </DialogContent>
            </Dialog>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
