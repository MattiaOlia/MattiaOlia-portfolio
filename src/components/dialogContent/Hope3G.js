// Hope3G.js
import React, { Suspense, lazy } from 'react';
import { useMediaQuery } from '@mui/material';
import { Box, Typography} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton} from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import HOPE3G_1 from "../../images/Hope3g/HOPE3G_1.png"
import HOPE3G_2 from "../../images/Hope3g/HOPE3G_2.svg"
import HOPE3G_3 from "../../images/Hope3g/HOPE3G_3.svg"
import HOPE3G_4 from "../../images/Hope3g/HOPE3G_4.png"
// Lazy load the image component
const LazyImage = lazy(() => import('./LazyImage'));

function Hope3G() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
     
        
          <Box m={isSmallScreen ? 0 : 'auto'} display="flex" flexDirection="column">
            <Box display={"flex"} alignItems={"center"} justifyContent={"right"}>
                <IconButton
                  color="primary"
                  component="a"
                  href="https://hope3g.com/"
                  target="Go to website"
                  rel="noopener noreferrer"
                >
                  <OpenInBrowserIcon sx={{ fontSize: "3rem" }} />
                </IconButton>
              </Box>
          <Typography mb={2} variant="h6" color="text.secondary">
          HOPE 3G is an innovative centre for immersive learning experiences, as well as a web-based platform for informational purposes and course purchasing. HOPE 3G stands out as an inventive project that leverages Augmented Reality (AR) technology, seamlessly weaving reading and typing lessons into engaging activities for children.
          </Typography>
      
          <Suspense fallback={<div>Loading...</div>}>
          <Box my={2}>
              <LazyImage source={HOPE3G_3} />
              </Box>
              </Suspense>
              <Typography my={2} variant="h6" color="text.secondary">
          As part of my role, I was responsible for maintaining the front end of HOPE 3G. This involved ensuring their smooth operation and implementing new components to enhance the functionality of the platform.
          </Typography>
          <Typography my={2} variant="h6" color="text.secondary">   
I’ve had the opportunity to contribute refactored code on websites by creating reusable functional components and reproduced design mock-ups. I also
set up forms designed to collect and store data inputs, linking them to Swagger APIs for seamless interaction with database tables.
          </Typography>
            <Suspense fallback={<div>Loading...</div>}>
               
              <Box my={2}>
              <LazyImage source={HOPE3G_1} />
              </Box>
              <Box my={2}>
              <LazyImage source={HOPE3G_2} />
              </Box>
            </Suspense>
            <Typography my={2} variant="h6" color="text.secondary">   
            This was a valuable opportunity that helped me develop not just my React skills but also delved into the exploration and application of additional skills. I was able to get more practical knowledge and expertise with technologies like Redux, Ant Design, and Bootstrap during this trip. Throughout this time, I received a lot of practical experience that helped me improve as a front-end developer and equipped me with a diverse skill set that I can't wait to use on new projects.
          </Typography>
          <Suspense fallback={<div>Loading...</div>}>
          <Box my={2}>
              <LazyImage source={HOPE3G_4} />
              </Box>
              </Suspense>
          </Box>
          
    </div>
  );
}

export default Hope3G;