import React from 'react';
import Reveal from './Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-end justify-start overflow-hidden bg-stone-900">
      
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1200?grayscale&random=99" 
          alt="William Siqueira Art" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pb-20 md:pb-24 relative z-10">
        <div className="flex flex-col">
          
          <Reveal>
            <div className="flex items-center gap-4 mb-4 md:mb-8 ml-2">
                <div className="h-[1px] w-8 md:w-12 bg-rose-500"></div>
                <p className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-rose-400">
                  Estúdio Privado
                </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="font-serif text-[22vw] md:text-[16vw] leading-[0.75] tracking-tighter text-white select-none mix-blend-screen">
              WILLIAM
            </h1>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-2 md:mt-0 px-2">
                <h2 className="font-serif text-3xl md:text-5xl italic text-stone-400 font-light tracking-wide">
                    Siqueira
                </h2>
                
                <p className="hidden md:block text-stone-400 text-xs font-mono uppercase tracking-widest max-w-md text-right opacity-70">
                   Neotraditional • Fine Art • São Paulo
                </p>
            </div>
          </Reveal>

        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3 text-stone-500 animate-pulse">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </div>

    </section>
  );
};

export default Hero;