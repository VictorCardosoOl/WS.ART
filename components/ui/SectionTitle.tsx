import React from 'react';
import Reveal from './Reveal';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', light = false }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const marginClass = align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto mr-0' : '';

  return (
    <div className={`mb-16 md:mb-24 ${alignClass}`}>
      <Reveal>
        <span className={`uppercase tracking-[0.25em] text-[10px] font-bold block mb-4 md:mb-6 ${light ? 'text-rose-200' : 'text-rose-500'}`}>
          {subtitle}
        </span>
      </Reveal>
      <Reveal delay={150}>
        <h2 className={`text-5xl md:text-7xl font-serif font-medium tracking-tighter leading-[0.9] ${light ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h2>
      </Reveal>
      <Reveal delay={300}>
        <div className={`h-[1px] w-24 bg-rose-400 mt-8 ${marginClass}`} />
      </Reveal>
    </div>
  );
};

export default SectionTitle;