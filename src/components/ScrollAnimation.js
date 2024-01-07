import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollAnimation = ({ isVisible }) => {
  const slideVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div>
          <motion.div
            key="slide"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideVariants}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#1b5e20",
              opacity: 1,
              zIndex: 11, // Increase zIndex to make it on top
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "white",
              opacity: 1,
              zIndex: 10,
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollAnimation;