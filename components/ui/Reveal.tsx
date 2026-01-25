import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, width = 'fit-content', delay = 0, className = "" }) => {
  return (
    <div style={{ width }} className={`relative overflow-visible ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ 
            duration: 0.8, 
            delay: delay / 1000, 
            ease: [0.16, 1, 0.3, 1] // Out-Expo easing
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;