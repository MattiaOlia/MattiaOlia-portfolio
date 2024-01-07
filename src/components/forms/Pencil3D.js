import React, { Suspense } from 'react';
import { Box } from '@mui/material';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Pencil3D() {
  return (
    <div
  style={{
    
    transform: "translateY(-120px) translateX(80px)",
    overflow: "visible",
    zIndex: 0,
    position: "relative",
    height: "600px",
    width: "100%",
    minWidth: "500px",
    background: `url('https://prod.spline.design/Wph70Kq8p7pxfX9w/scene.splinecode')`,
    backgroundSize: "contain", // o "contain" a seconda delle tue esigenze
    backgroundPosition: "center",
  }}
>
  <Suspense fallback={<div>Loading...</div>}>
    {/* Assicurati che il componente Spline supporti uno stile background */}
    <Spline
      sx={{ zIndex: 0, position: "relative" }}
      scene="https://prod.spline.design/D34pt2kLna45AUH9/scene.splinecode"
    />
  </Suspense>
</div>
);
}

