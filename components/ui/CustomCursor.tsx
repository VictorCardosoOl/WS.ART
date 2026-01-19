import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

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
      
      // Verifica se o elemento tem um cursor personalizado definido via data-attribute
      const customCursorData = target.closest('[data-cursor]');
      
      if (customCursorData) {
        setIsHovering(true);
        setCursorText(customCursorData.getAttribute('data-cursor') || "");
        return;
      }

      // Verifica elementos interativos padrão
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
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
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference bg-white"
            animate={{
                x: mousePosition.x - (isHovering && cursorText ? 32 : 8),
                y: mousePosition.y - (isHovering && cursorText ? 32 : 8),
                scale: isHovering ? (cursorText ? 4 : 2.5) : 1,
                width: isHovering && cursorText ? 64 : 16,
                height: isHovering && cursorText ? 64 : 16,
                opacity: isHovering && cursorText ? 0.7 : 1, // Translucency effect
            }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
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