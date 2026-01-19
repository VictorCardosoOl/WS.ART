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
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <Reveal>
        <span className={`uppercase tracking-ultra text-xs font-bold block mb-3 ${light ? 'text-rose-200' : 'text-rose-500'}`}>
          {subtitle}
        </span>
      </Reveal>
      <Reveal delay={150}>
        <h2 className={`text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1] ${light ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h2>
      </Reveal>
      <Reveal delay={300}>
        <div className={`h-[1px] w-24 bg-rose-400 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      </Reveal>
    </div>
  );
};

export default SectionTitle;