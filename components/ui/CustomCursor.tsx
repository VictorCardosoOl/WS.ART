import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Inicializa verificando a media query imediatamente para evitar renderização nula inicial se for desktop
  const [isVisible, setIsVisible] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false
  );
  
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // Refs para armazenar as funções otimizadas do GSAP
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();

  // 1. Monitoramento de Media Query (Responsividade)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsVisible(e.matches);
    };
    
    // Atualiza estado se mudar
    setIsVisible(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  // 2. Setup do GSAP e Listeners de Mouse
  useEffect(() => {
    // Só inicia se o cursor estiver visível e montado no DOM
    if (!isVisible || !cursorRef.current) return;

    const cursor = cursorRef.current;

    // Configuração inicial do GSAP
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    // Cria as funções quickTo (muito mais performáticas que .to() em loop)
    xTo.current = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    yTo.current = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    // Função de movimento do mouse
    const updateMousePosition = (e: MouseEvent) => {
      xTo.current?.(e.clientX);
      yTo.current?.(e.clientY);
    };

    // Função de detecção de Hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Verifica atributos data-cursor (prioridade)
      const customCursorData = target.closest('[data-cursor]');
      
      if (customCursorData) {
        setIsHovering(true);
        setCursorText(customCursorData.getAttribute('data-cursor') || "");
        return;
      }

      // 2. Verifica elementos interativos padrões
      const isInteractive = 
        target.matches('a, button, input, textarea, label') || 
        target.closest('a, button, [role="button"]');

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
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]); // Importante: Recria se a visibilidade mudar (ex: resize da tela)

  // 3. Animação de Estados (Hover / Texto)
  useEffect(() => {
    if (!cursorRef.current || !isVisible) return;

    const cursor = cursorRef.current;

    if (isHovering) {
        if (cursorText) {
            // Modo Texto
            gsap.to(cursor, { 
                width: 80, 
                height: 80, 
                opacity: 1, 
                backgroundColor: "#FAF7F7", // white background
                mixBlendMode: "difference", // Inverte a cor do fundo
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        } else {
            // Modo Hover Simples (Pequeno círculo)
            gsap.to(cursor, { 
                scale: 1,
                width: 24, 
                height: 24,
                opacity: 0.8,
                backgroundColor: "#FAF7F7",
                mixBlendMode: "difference",
                duration: 0.3
            });
        }
    } else {
        // Estado Normal (Idle)
        gsap.to(cursor, { 
            scale: 1,
            width: 12,
            height: 12,
            opacity: 1,
            backgroundColor: "#1c1917", // pantone-ink (Preto)
            mixBlendMode: "normal",
            duration: 0.3
        });
    }
  }, [isHovering, cursorText, isVisible]);

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
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center bg-pantone-ink will-change-transform"
            style={{ width: 12, height: 12 }}
        >
            <span className={`text-[10px] font-bold text-stone-900 uppercase tracking-widest text-center leading-none transition-opacity duration-200 ${isHovering && cursorText ? 'opacity-100' : 'opacity-0'}`}>
                {cursorText}
            </span>
        </div>
    </>
  );
};

export default CustomCursor;