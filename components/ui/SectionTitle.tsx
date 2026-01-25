import React from 'react';
import Reveal from './Reveal';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', light = false }) => {
  return (
    <div className={`mb-24 md:mb-36 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <Reveal>
        <div className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
             <div className={`h-[1px] w-8 ${light ? 'bg-rose-200' : 'bg-[#754548]'}`}></div>
             <span className={`uppercase tracking-[0.3em] text-[9px] font-bold ${light ? 'text-rose-200' : 'text-[#754548]'}`}>
              {subtitle}
            </span>
        </div>
      </Reveal>
      <Reveal delay={150}>
        {/* Título com leading apertado e mistura de estilos */}
        <h2 className={`text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tighter leading-[0.85] ${light ? 'text-white' : 'text-stone-900'}`}>
          {title.split(' ').map((word, i) => (
             <span key={i} className={i % 2 !== 0 ? 'italic opacity-90 ml-2' : ''}>{word} </span>
          ))}
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionTitle;