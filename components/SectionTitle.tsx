import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = 'center', light = false }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className={`uppercase tracking-[0.2em] text-sm font-medium ${light ? 'text-rose-200' : 'text-rose-500'}`}>
        {subtitle}
      </span>
      <h2 className={`text-4xl md:text-5xl font-serif mt-2 ${light ? 'text-white' : 'text-stone-800'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-rose-400 mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;