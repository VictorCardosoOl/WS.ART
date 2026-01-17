import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
        <style>{`
            @media (min-width: 768px) {
                body { cursor: none; }
                a, button { cursor: none; }
            }
        `}</style>
        <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-pantone-ink rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            scale: isHovering ? 2.5 : 1,
        }}
        transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            mass: 0.5
        }}
        />
    </>
  );
};

export default CustomCursor;