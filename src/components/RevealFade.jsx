import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealFade = ({ children, d }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView]);
    return (
      <div ref={ref} className="overflow-hidden relative">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.85 + d }}
        >
          {children}
        </motion.div>
      </div>
    );
  };

export default RevealFade