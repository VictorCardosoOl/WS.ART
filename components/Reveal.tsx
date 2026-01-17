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
    <div ref={ref} style={{ width, position: 'relative', overflow: 'visible' }}>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 } : {}}
        transition={{
          duration: 1.2,
          delay: delay / 1000,
          ease: [0.19, 1, 0.22, 1] // 'ease-out-expo' matching the design system
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;