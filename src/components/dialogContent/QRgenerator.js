
import React, { Suspense, lazy } from 'react';
import { useMediaQuery } from '@mui/material';
import { Box, Typography} from '@mui/material';


import qrgenerator2 from "../../images/Qrgen/qrgenerator2.png"
import qrgeneratoframe2  from "../../images/Qrgen/qrgeneratoframe2.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton} from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
// Lazy load the image component
const LazyImage = lazy(() => import('./LazyImage'));

function QRgenerator() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
     
        
          <Box m={isSmallScreen ? 0 : 'auto'} display="flex" flexDirection="column">
            
            <Box display={"flex"} alignItems={"center"} justifyContent={"right"}>
          <IconButton
                  
                  component="a"
                  href="https://github.com/MattiaOlia/qr-generator"
                  target="Github"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon sx={{ fontSize: "3rem",color:"#6491A5" }} />
                </IconButton>
                <IconButton 
                  href="https://qr-generator-black.vercel.app"           
                  component="a"
                  target="Go to website"
                  rel="noopener noreferrer"
                >
                  <OpenInBrowserIcon sx={{ fontSize: "3rem",color:"#6491A5" }} />
                </IconButton>
              </Box>
          <Typography mb={2} variant="h6" color="text.secondary">
          This platform allows users to create QR codes for various purposes, including email sending, phone number sending, calling actions, Wi-Fi network setting, etc. The versatility also extends to customization features such as choosing different colors, downloading QR codes in various formats, and sharing them easily across social media channels.
      </Typography>
      <Suspense fallback={<div>Loading...</div>}>
          <Box my={2}>
              <LazyImage source={qrgenerator2} />
              </Box>
              </Suspense>
              <Typography my={2} variant="h6" color="text.secondary">
              As self developer project, I faced many challenges and put in a lot of effort to make the codebase reusable and maintainable. I used my programming skills to build reusable functional components to make the development process faster and more efficient. This involved careful code refactoring to create a modular and scalable architecture.
          </Typography>
          <Typography my={2} variant="h6" color="text.secondary">   
          The platform has an easy-to-use interface that makes it easy for people to navigate and change QR code parameters. One of the most important parts of the development process was setting up the forms for data input.
          </Typography>
            <Suspense fallback={<div>Loading...</div>}>
               
              <Box my={2}>
              <LazyImage source={qrgeneratoframe2} />
              </Box>
            </Suspense>
            <Typography my={2} variant="h6" color="text.secondary">   
            This QR Code Generator project showcases my skills in React and Mobile User Interface (MUI). It shows not only my technical skills but also my commitment to building user-friendly and impactful applications.
          </Typography>
          
          </Box>
          
    </div>
  );
}

export default QRgenerator;