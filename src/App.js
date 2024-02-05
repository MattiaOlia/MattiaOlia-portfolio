import React, { useState, useEffect } from "react";
import './App.css';
import Home from './Home';
import 'typeface-heebo'
import HeroAnimationAvatar from './components/HeroAnimationAvatar';
import { Box } from "@mui/material";

const App = () => {
  

  return (
    <Box>
      
     <HeroAnimationAvatar />
     <Home />
    </Box>
  );
};


export default App;
