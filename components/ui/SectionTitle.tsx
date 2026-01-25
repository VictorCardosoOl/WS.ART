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
        <span className={`font-sans text-meta uppercase font-bold block mb-4 ${light ? 'text-rose-200' : 'text-rose-500'}`}>
          {subtitle}
        </span>
      </Reveal>
      <Reveal delay={150}>
        <h2 className={`font-serif text-fluid-h2 font-semibold tracking-tighter leading-tight-editorial uppercase ${light ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionTitle;