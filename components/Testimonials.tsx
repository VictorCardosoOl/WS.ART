import React from 'react';
import Reveal from './Reveal';
import FluidBackground from './FluidBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden bg-transparent">
      
      {/* 
        LAYER 0: FLUID BACKGROUND 
        Cobre toda a seção. Pointer-events-none para não bloquear cliques.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FluidBackground />
      </div>

      {/* 
        LAYER 1: TYPOGRAPHY DECORATION
        Posicionamento absoluto para não interferir no fluxo do grid.
        Fica entre o fundo e o conteúdo.
      */}
      <div className="absolute top-20 md:top-32 left-0 w-full z-1 pointer-events-none overflow-hidden">
         <Reveal width="100%">
            <h2 className="text-[18vw] md:text-[14vw] font-serif leading-none text-rose-950 mix-blend-multiply opacity-[0.15] select-none tracking-tighter text-center md:text-left md:pl-[5vw]">
                EMOTION
            </h2>
         </Reveal>
      </div>

      {/* 
        LAYER 2: CONTENT GRID 
        O conteúdo real. Z-index maior para ficar sobre o texto e o fundo.
      */}
      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-32">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Coluna Esquerda (Espaço Vazio + Orbe Visual) */}
            <div className="hidden md:block md:col-span-5 lg:col-span-6">
               {/* 
                  Este espaço permite que a "Orbe" do shader e o texto "EMOTION" 
                  apareçam limpos no lado esquerdo em telas grandes.
               */}
            </div>

            {/* Coluna Direita (Conteúdo) */}
            <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-16 md:gap-24">
              
              <Reveal delay={200}>
                  {/* Cartão Glassmorphism */}
                  <div className="backdrop-blur-xl bg-white/40 border border-white/60 p-8 md:p-12 rounded-sm shadow-[0_20px_40px_-10px_rgba(117,69,72,0.1)] relative">
                      
                      <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-stone-800 relative z-10">
                          "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim."
                      </p>
                      
                      <div className="flex flex-col gap-6 relative z-10">
                          <div className="flex items-center gap-4">
                              <div className="h-[1px] w-8 bg-rose-400"></div>
                              <span className="text-xs uppercase tracking-widest text-stone-600 font-bold">Ana Clara, Arquiteta</span>
                          </div>
                      </div>
                      
                      {/* Efeito de brilho sutil no canto */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/80 to-transparent pointer-events-none opacity-50"></div>
                  </div>
              </Reveal>

              <Reveal delay={400}>
                  {/* Imagem com sobreposição */}
                  <div className="relative pl-0 md:pl-12">
                       <div className="relative z-10 aspect-[4/5] md:aspect-[3/4] w-full max-w-md mx-auto md:ml-auto shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out border-[6px] border-white bg-white">
                          <img 
                              src="https://picsum.photos/800/1000?grayscale&random=99" 
                              alt="Tattoo Detail"
                              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.05]"
                          />
                       </div>
                       
                       <div className="absolute -bottom-6 -left-2 md:left-6 z-20 backdrop-blur-md bg-stone-900 border border-stone-800 p-4 shadow-xl">
                          <span className="font-serif italic text-xl text-stone-200">"Eterno."</span>
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