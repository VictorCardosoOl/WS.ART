import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  
  const [isVisible, setIsVisible] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false
  );
  
  const [cursorText, setCursorText] = useState("");
  const [cursorMode, setCursorMode] = useState<'default' | 'lens' | 'text'>('default');
  const [isHovering, setIsHovering] = useState(false);

  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handleMediaChange = (e: MediaQueryListEvent) => setIsVisible(e.matches);
    setIsVisible(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isVisible || !cursorRef.current) return;

    const cursor = cursorRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    xTo.current = gsap.quickTo(cursor, "x", { duration: 0.25, ease: "power3.out" });
    yTo.current = gsap.quickTo(cursor, "y", { duration: 0.25, ease: "power3.out" });

    const updateMousePosition = (e: MouseEvent) => {
      xTo.current?.(e.clientX);
      yTo.current?.(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Lens Mode (Priority)
      const lensTarget = target.closest('[data-cursor="lens"]');
      if (lensTarget) {
          setIsHovering(true);
          setCursorMode('lens');
          setCursorText("");
          return;
      }

      // 2. Custom Text Mode
      const customCursorData = target.closest('[data-cursor-text]');
      if (customCursorData) {
        setIsHovering(true);
        setCursorMode('text');
        const text = customCursorData.getAttribute('data-cursor-text');
        setCursorText(text || "");
        return;
      }

      // 3. Standard Interactive
      const isInteractive = 
        target.matches('a, button, input, textarea, label') || 
        target.closest('a, button, [role="button"]');

      if (isInteractive) {
        setIsHovering(true);
        setCursorMode('default');
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorMode('default');
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Animation Logic
  useEffect(() => {
    if (!cursorRef.current || !isVisible) return;
    const cursor = cursorRef.current;
    const textEl = textRef.current;

    if (isHovering) {
        if (cursorMode === 'lens') {
             // LENS MODE: Huge, difference blend, transparent fill (or white with difference)
             gsap.to(cursor, { 
                width: 150, 
                height: 150, 
                backgroundColor: "#ffffff",
                mixBlendMode: "difference",
                opacity: 1,
                duration: 0.6,
                ease: "expo.out" 
            });
            if(textEl) gsap.to(textEl, { opacity: 0 });
        } else if (cursorMode === 'text' && cursorText) {
            // TEXT MODE
            gsap.to(cursor, { 
                width: 100, 
                height: 100, 
                backgroundColor: "#FAF7F7",
                mixBlendMode: "difference", 
                opacity: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.75)"
            });
            if(textEl) gsap.to(textEl, { opacity: 1, scale: 1, duration: 0.3, delay: 0.1 });
        } else {
            // STANDARD HOVER (Small dot)
            gsap.to(cursor, { 
                width: 20, 
                height: 20,
                backgroundColor: "#FAF7F7",
                mixBlendMode: "difference",
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });
            if(textEl) gsap.to(textEl, { opacity: 0, scale: 0.5, duration: 0.2 });
        }
    } else {
        // IDLE
        gsap.to(cursor, { 
            width: 10,
            height: 10,
            backgroundColor: "#1c1917", // Black default
            mixBlendMode: "normal",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
        });
        if(textEl) gsap.to(textEl, { opacity: 0, scale: 0.5, duration: 0.2 });
    }
  }, [isHovering, cursorText, cursorMode, isVisible]);

  if (!isVisible) return null;

  return (
    <>
        <style>{`
            @media (pointer: fine) {
                body, a, button, input, textarea, [role="button"] { 
                    cursor: none !important; 
                }
            }
        `}</style>
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center bg-pantone-ink will-change-transform backdrop-blur-[1px]"
            style={{ width: 10, height: 10 }}
        >
            <span 
                ref={textRef}
                className="text-[10px] font-bold text-stone-900 uppercase tracking-widest text-center leading-none opacity-0 transform scale-50"
            >
                {cursorText}
            </span>
        </div>
    </>
  );
};

export default CustomCursor;