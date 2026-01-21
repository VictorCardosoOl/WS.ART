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
    <div className={`mb-20 md:mb-32 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <Reveal>
        <span className={`uppercase tracking-[0.3em] text-[10px] font-bold block mb-5 ${light ? 'text-rose-200' : 'text-[#754548]'}`}>
          {subtitle}
        </span>
      </Reveal>
      <Reveal delay={150}>
        {/* Título com leading apertado (0.9) e tracking negativo para impacto editorial */}
        <h2 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h2>
      </Reveal>
      {align === 'center' && (
          <Reveal delay={300}>
            <div className={`h-[1px] w-12 bg-[#754548]/30 mt-8 mx-auto`} />
          </Reveal>
      )}
    </div>
  );
};

export default SectionTitle;