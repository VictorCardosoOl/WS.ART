import React from 'react';
import Reveal from './Reveal';

interface SectionTitleProps {
  number?: string;
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, subtitle, title, align = 'center', light = false }) => {
  return (
    <div className={`mb-24 md:mb-32 ${align === 'center' ? 'text-center' : 'text-left flex flex-col items-start'}`}>
      <Reveal>
        <div className="flex flex-col gap-4">
            {/* Numeração Estilo Kasia Siwosz */}
            {number && (
                <span className={`font-sans text-[10px] font-bold tracking-[0.2em] block opacity-60 ${light ? 'text-stone-300' : 'text-stone-500'} ${align === 'center' ? 'mx-auto' : ''}`}>
                    ( {number} )
                </span>
            )}
            
            <span className={`uppercase tracking-[0.3em] text-[10px] font-bold block ${light ? 'text-rose-200' : 'text-[#754548]'}`}>
            {subtitle}
            </span>
        </div>
      </Reveal>
      
      <Reveal delay={150}>
        {/* Leading apertado para visual de revista de moda */}
        <h2 className={`mt-6 text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h2>
      </Reveal>

      {align === 'center' && (
          <Reveal delay={300}>
            <div className={`h-[1px] w-12 bg-[#754548]/30 mt-10 mx-auto`} />
          </Reveal>
      )}
    </div>
  );
};

export default SectionTitle;