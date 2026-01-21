import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsVisible(e.matches);
    };
    
    setIsVisible(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) {
       return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check for data-cursor attribute
      const customCursorData = target.closest('[data-cursor]');
      
      if (customCursorData) {
        setIsHovering(true);
        setCursorText(customCursorData.getAttribute('data-cursor') || "");
        return;
      }

      // Check for interactive elements
      const isInteractive = target.matches('a, button, input, textarea, label') || target.closest('a, button');

      if (isInteractive) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

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
                body, a, button, input, textarea { cursor: none !important; }
            }
        `}</style>
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference bg-white"
            style={{
                x: mousePosition.x - (isHovering && cursorText ? 32 : 8),
                y: mousePosition.y - (isHovering && cursorText ? 32 : 8),
            }}
            animate={{
                scale: isHovering ? (cursorText ? 4 : 2.5) : 1,
                width: isHovering && cursorText ? 64 : 16,
                height: isHovering && cursorText ? 64 : 16,
                opacity: isHovering && cursorText ? 0.9 : 1,
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 350,
                mass: 0.5
            }}
        >
            {cursorText && (
                <span className="text-[3px] font-bold text-black uppercase tracking-widest mix-blend-normal">
                    {cursorText}
                </span>
            )}
        </motion.div>
    </>
  );
};

export default CustomCursor;