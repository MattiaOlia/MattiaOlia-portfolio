import React, { Suspense } from 'react';
import { Box } from '@mui/material';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Pencil3D(props) {
  return (
    <div
  style={{
    
    transform: "translateY(-120px) translateX(80px)",
    overflow: "visible",
    zIndex: 0,
    position: "relative",
    height: "700px",
    width: "100%",
    minWidth: "800px",
    background: `url('https://prod.spline.design/rlV6cCP8yUe-4dJv/scene.splinecode')`,
    backgroundSize: "contain", 
    backgroundPosition: "center",
  }}
>
  <Suspense fallback={<div>Loading...</div>}>
    <Spline
      sx={{ zIndex: 0, position: "relative" }}
      scene={props.url} />
      </Suspense>
</div>
);
}

