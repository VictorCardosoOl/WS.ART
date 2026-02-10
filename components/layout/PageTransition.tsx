import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.6, // Levemente mais rápido para compensar a falta do blur
        ease: [0.22, 1, 0.36, 1] // Curva "Cinema" mantida
      }}
      className="w-full will-change-[transform,opacity]" // Blur removido do will-change
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;