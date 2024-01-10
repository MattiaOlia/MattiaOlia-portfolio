// Hope3G.js
import React, { Suspense, lazy } from 'react';
import { useMediaQuery } from '@mui/material';
import { Box, Typography} from '@mui/material';
import { motion } from 'framer-motion';

import HOPE3G_1 from "../../images/Hope3g/HOPE3G_1.png"
import HOPE3G_2 from "../../images/Hope3g/HOPE3G_2.svg"
import HOPE3G_3 from "../../images/Hope3g/HOPE3G_3.svg"
// Lazy load the image component
const LazyImage = lazy(() => import('./LazyImage'));

function Hope3G() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
     
        
          <Box m={isSmallScreen ? 0 : 'auto'} display="flex" flexDirection="column">
          <Typography variant="h6" color="text.secondary">As part of my role, I was responsible for maintaining the front end of wales.com and visitwales.com. This involved ensuring their smooth operation and implementing new components to enhance the functionality of both platforms.

</Typography>
             

          <Typography my={2} variant="body1" color="text.secondary">As part of my role, I was responsible for maintaining the front end of wales.com and visitwales.com. This involved ensuring their smooth operation and implementing new components to enhance the functionality of both platforms.

</Typography>
          <Typography variant="body1" color="text.secondary">As part of my role, I was responsible for maintaining the front end of wales.com and visitwales.com. This involved ensuring their smooth operation and implementing new components to enhance the functionality of both platforms.

</Typography>
            <Suspense fallback={<div>Loading...</div>}>
               <Box my={2}>
              <LazyImage source={HOPE3G_3} />
              </Box>
              <Box my={2}>
              <LazyImage source={HOPE3G_1} />
              </Box>
              <Box my={2}>
              <LazyImage source={HOPE3G_2} />
              </Box>
            </Suspense>
          </Box>
    </div>
  );
}

export default Hope3G;