import React, { Suspense } from 'react';
import { Box } from '@mui/material';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Pencil3D() {
  return (
    <div
    border={"solid"}
    
    style={{ transform: "translateY(-300px) translateX(250px)", zIndex: 0, position: "relative",height:"50vh", width:"90%" }}
    
  >
    <Suspense fallback={<div>Loading...</div>}>
      <Spline sx={{ zIndex: 0, position: "relative" }} scene="https://prod.spline.design/Z48vmifrvpoOCNbG/scene.splinecode" />
    </Suspense>
  </div>
);
}

