import React, { useState, useEffect } from "react";
import './App.css';
import Home from './Home';
import 'typeface-heebo'
import HeroAnimationAvatar from './components/HeroAnimationAvatar';

const App = () => {
  

  return (
    <div>
     <HeroAnimationAvatar />
     <Home />
    </div>
  );
};


export default App;
