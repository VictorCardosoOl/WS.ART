import React from 'react';
import Reveal from './Reveal';
import FluidBackground from './FluidBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden bg-[#FAF7F7]">
      
      {/* 
        LAYER 0: SHADER
        Fundo dinâmico cobrindo toda a área.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FluidBackground />
      </div>

      {/* 
        LAYER 1: TEXTO DECORATIVO
        Alinhado ao Topo/Esquerda para coincidir com o "sol" do shader.
      */}
      <div className="absolute top-20 left-0 w-full z-0 pointer-events-none select-none mix-blend-multiply">
         <Reveal width="100%">
            <h2 className="text-[22vw] md:text-[18vw] font-serif font-medium leading-none text-[#754548] opacity-[0.08] tracking-tighter text-left pl-[2vw] whitespace-nowrap blur-[1px]">
                EMOTION
            </h2>
         </Reveal>
      </div>

      {/* 
        LAYER 2: CONTEÚDO
      */}
      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-48">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Esquerda Vazia (Permite ver o gradiente e texto) */}
            <div className="hidden md:block md:col-span-6 h-full min-h-[300px]"></div>

            {/* Direita: Card e Imagem */}
            <div className="md:col-span-6 flex flex-col gap-16">
              
              <Reveal delay={200}>
                  {/* Card Glass */}
                  <div className="backdrop-blur-sm bg-white/40 border border-white/60 p-8 md:p-12 shadow-sm rounded-sm relative">
                      <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-stone-800 relative z-10 italic">
                          "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim."
                      </p>
                      <div className="flex flex-col gap-1 relative z-10 pl-4 border-l-2 border-rose-400">
                          <span className="text-xs uppercase tracking-widest text-stone-900 font-bold">Ana Clara</span>
                          <span className="text-[10px] uppercase tracking-wider text-stone-500">Arquiteta</span>
                      </div>
                  </div>
              </Reveal>

              <Reveal delay={400}>
                  {/* Imagem Reta e Clean */}
                  <div className="relative w-full max-w-sm ml-auto bg-white p-2 shadow-2xl">
                       <div className="relative z-10 aspect-[3/4]">
                          <img 
                              src="https://picsum.photos/800/1000?grayscale&random=99" 
                              alt="Tattoo Detail"
                              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.05]"
                          />
                       </div>
                       <div className="absolute -bottom-5 -left-5 z-20 bg-[#1a1a1a] text-white py-3 px-6 shadow-xl">
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