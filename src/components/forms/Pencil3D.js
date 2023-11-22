import React, { Suspense } from 'react';
import { Box } from '@mui/material';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Pencil3D() {
  return (
    <div
    border={"solid"}
    
    style={{transform: "translateY(0) translateX(0px)",overflow:"visible" , zIndex: 0,position: "relative",height:"500px", width:"100%", minWidth:"500px"}}
    
  >
    <Suspense fallback={<div>Loading...</div>}>
      <Spline sx={{ zIndex: 0, position: "relative"}} scene="https://prod.spline.design/Z48vmifrvpoOCNbG/scene.splinecode" />
    </Suspense>
  </div>
);
}

