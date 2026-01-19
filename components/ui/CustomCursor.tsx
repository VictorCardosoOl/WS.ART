import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsVisible(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsVisible(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
        <style>{`
            @media (pointer: fine) {
                body { cursor: none; }
                a, button { cursor: none; }
            }
        `}</style>
        
        {/* Main Cursor Dot */}
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            animate={{
                x: mousePosition.x - 8,
                y: mousePosition.y - 8,
                scale: isHovering ? 4 : 1,
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 250,
                mass: 0.5
            }}
        />
    </>
  );
};

export default CustomCursor;