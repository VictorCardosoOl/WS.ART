import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from './SplitText';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', light = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Seleciona todos os caracteres dentro deste componente específico
      const chars = containerRef.current?.querySelectorAll('.title-char');
      
      if (chars && chars.length > 0) {
        gsap.fromTo(chars, 
          { 
            y: "100%", // Começa escondido em baixo (fora do overflow-hidden do pai)
            opacity: 0
          },
          {
            y: "0%",
            opacity: 1,
            duration: 1.2,
            stagger: 0.02, // Efeito de onda letra por letra
            ease: "power4.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%", // Aciona quando o topo do título chega a 85% da tela
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <div 
      ref={containerRef} 
      className={`mb-24 md:mb-36 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {/* Subtítulo com Reveal Simples (Fade Up) */}
      <Reveal>
        <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
             <div className={`h-[1px] w-8 ${light ? 'bg-rose-200' : 'bg-[#754548]'}`}></div>
             <span className={`uppercase tracking-[0.3em] text-[9px] font-bold ${light ? 'text-rose-200' : 'text-[#754548]'}`}>
              {subtitle}
            </span>
        </div>
      </Reveal>
      
      {/* Título com Mask Reveal (Texto nasce da linha) */}
      <h2 className={`text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tighter leading-[0.85] ${light ? 'text-white' : 'text-stone-900'}`}>
          <SplitText 
            wordClass="overflow-hidden pb-2 inline-block align-top" // O segredo: overflow-hidden no wrapper da palavra
            charClass="title-char inline-block will-change-transform" // O alvo da animação
          >
            {title}
          </SplitText>
      </h2>
    </div>
  );
};

export default SectionTitle;