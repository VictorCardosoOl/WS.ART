import React from 'react';
import Reveal from './Reveal';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtitle, 
  title, 
  align = 'center', 
  light = false,
  className = ''
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }[align];

  return (
    <div className={`mb-20 md:mb-32 max-w-4xl ${alignClass} ${className}`}>
      <Reveal>
        <span className={`font-sans text-meta uppercase font-bold block mb-4 ${light ? 'text-rose-200' : 'text-rose-500'}`}>
          {subtitle}
        </span>
      </Reveal>
      <Reveal delay={150}>
        {/* Panchang: Kerning negativo (-0.06em) e Leading apertado (0.9) */}
        <h2 className={`font-serif text-fluid-h2 font-semibold tracking-tighter leading-tight-editorial uppercase ${light ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionTitle;