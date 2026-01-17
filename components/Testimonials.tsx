import React from 'react';
import Reveal from './Reveal';
import FluidBackground from './FluidBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen py-32 md:py-48 bg-[#FAF7F7] overflow-hidden flex flex-col justify-center">
      
      {/* SEPARATOR TOP: Curve from White (Previous section) into Shader */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[80px] fill-white rotate-180">
             <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* 
        LAYER 0: SHADER
        Container absoluto que cobre 100% da seção.
      */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <FluidBackground />
      </div>

      {/* 
        LAYER 1: TEXTO DECORATIVO "EMOTION"
      */}
      <div className="absolute top-[15%] md:top-[20%] left-0 w-full z-0 pointer-events-none select-none mix-blend-multiply">
         <Reveal width="100%">
            <h2 className="text-[22vw] md:text-[16vw] font-serif font-medium leading-none text-[#754548] opacity-[0.15] tracking-tighter text-left pl-[5vw] whitespace-nowrap blur-[1px]">
                EMOTION
            </h2>
         </Reveal>
      </div>

      {/* 
        LAYER 2: CONTEÚDO
      */}
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            <div className="hidden md:block md:col-span-5 h-full"></div>

            <div className="md:col-span-7 flex flex-col gap-16 md:pl-12">
              
              <Reveal delay={200}>
                  <div className="backdrop-blur-sm bg-white/50 border border-white/60 p-8 md:p-12 shadow-[0_4px_20px_-5px_rgba(117,69,72,0.1)] rounded-sm relative">
                      <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-stone-800 relative z-10 italic">
                          "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim."
                      </p>
                      <div className="flex flex-col gap-1 relative z-10 pl-4 border-l-2 border-[#754548]">
                          <span className="text-xs uppercase tracking-widest text-stone-900 font-bold">Ana Clara</span>
                          <span className="text-[10px] uppercase tracking-wider text-stone-500">Arquiteta</span>
                      </div>
                  </div>
              </Reveal>

              <Reveal delay={400}>
                  <div className="relative w-full max-w-sm ml-auto bg-white p-3 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out-expo">
                       <div className="relative z-10 aspect-[3/4]">
                          <img 
                              src="https://picsum.photos/800/1000?grayscale&random=99" 
                              alt="Tattoo Detail"
                              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.05]"
                          />
                       </div>
                       <div className="absolute -bottom-6 -left-8 z-20 bg-[#1c1917] text-white py-4 px-8 shadow-xl">
                          <span className="font-serif italic text-lg tracking-wide">"Eterno."</span>
                       </div>
                  </div>
              </Reveal>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;