import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

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

    // GSAP Setup
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const updateMousePosition = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
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

  // Animate hover state changes
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (isHovering) {
        if (cursorText) {
            // Text mode
            gsap.to(cursor, { 
                width: 64, 
                height: 64, 
                opacity: 0.9, 
                backgroundColor: "#ffffff",
                mixBlendMode: "difference",
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        } else {
            // Standard Hover
            gsap.to(cursor, { 
                scale: 2.5, 
                width: 16, 
                height: 16,
                opacity: 1,
                backgroundColor: "#ffffff",
                mixBlendMode: "difference",
                duration: 0.3
            });
        }
    } else {
        // Idle
        gsap.to(cursor, { 
            scale: 1,
            width: 16,
            height: 16,
            opacity: 1,
            backgroundColor: "#1c1917", // pantone-ink
            mixBlendMode: "normal",
            duration: 0.3
        });
    }
  }, [isHovering, cursorText]);

  if (!isVisible) return null;

  return (
    <>
        <style>{`
            @media (pointer: fine) {
                body, a, button, input, textarea { cursor: none !important; }
            }
        `}</style>
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center bg-pantone-ink"
            style={{ width: 16, height: 16 }}
        >
            <span className={`text-[3px] font-bold text-black uppercase tracking-widest transition-opacity duration-200 ${isHovering && cursorText ? 'opacity-100' : 'opacity-0'}`}>
                {cursorText}
            </span>
        </div>
    </>
  );
};

export default CustomCursor;