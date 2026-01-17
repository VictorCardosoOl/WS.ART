import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} style={{ width, position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{
          duration: 1.0,
          delay: delay / 1000,
          ease: "easeOut" 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;