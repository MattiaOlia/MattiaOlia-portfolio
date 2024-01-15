
import React, { Suspense, lazy } from 'react';
import { useMediaQuery } from '@mui/material';
import { Box, Typography} from '@mui/material';


import HopeIS_2 from "../../images/HopeIS/HopeIS_2.png"

import HOPEIS_3 from "../../images/HopeIS/HopeIS_3.png"
// Lazy load the image component
const LazyImage = lazy(() => import('./LazyImage'));

function HopeIS() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
     
        
          <Box m={isSmallScreen ? 0 : 'auto'} display="flex" flexDirection="column">
          <Typography mb={2} variant="h6" color="text.secondary">
          

As a Frontend Developer at HOPE (Humanitarian Operations CIO, HOPE 5D Ltd, and HOPE 3G Ltd), I contributed to the development of the Internal System, designed to optimize various organizational processes. <br/>
</Typography>

<Suspense fallback={<div>Loading...</div>}>
              <Box my={2}>
              <LazyImage source={HOPEIS_3} />
              </Box>
            </Suspense>

            <Typography my={2} variant="h6" color="text.secondary">    
The primary objectives of the Internal System include:
<ul>
  <li>Staff Management: Keeping track of staff details, including electronic storage of all relevant documents and forms. This information is integral to user management within the system.</li>
  <li>Asset Repository: Storing electronic assets such as images, animations, and clothing details vital to HOPE's operations.</li>
  <li>Organization Details: Managing information about external organizations set to utilize applications developed by HOPE.</li>
</ul>

</Typography>

          

          
      
          <Suspense fallback={<div>Loading...</div>}>
          <Box my={2}>
              <LazyImage source={HopeIS_2} />
              </Box>
              </Suspense>
              <Typography my={2} variant="h6" color="text.secondary">
              This project showcases my ability to manage challenging front-end projects. I used TypeScript, React, and JavaScript to create a responsive user interface. I also integrated APIs strategically and organized components meticulously for scalability and maintainability.
          </Typography>
          
          </Box>
          
    </div>
  );
}

export default HopeIS;