import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(4px)', y: -20 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Curva "Cinema" (Custom cubic-bezier)
      }}
      className="w-full will-change-[opacity,transform,filter]"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;