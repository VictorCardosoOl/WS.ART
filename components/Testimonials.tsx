import React from 'react';
import Reveal from './Reveal';
import FluidBackground from './FluidBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="relative w-full py-32 md:py-64 overflow-visible bg-[#FAF7F7]">
      
      {/* 
        LAYER 0: FLUID BACKGROUND EXPANDIDO
        O container é maior que a seção (top -50%, height 200%) para garantir
        que o degradê radial morra suavemente no branco sem corte seco.
      */}
      <div className="absolute top-[-50%] left-0 w-full h-[200%] z-0 pointer-events-none overflow-hidden">
        <FluidBackground />
      </div>

      {/* 
        LAYER 1: TYPOGRAPHY WATERMARK
        Centralizado e ultra sutil.
      */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none select-none mix-blend-multiply">
         <Reveal width="100%">
            <h2 className="text-[20vw] md:text-[15vw] font-serif font-medium leading-none text-[#754548] opacity-[0.06] tracking-tighter text-center md:text-left md:pl-[5vw] whitespace-nowrap blur-[1px]">
                EMOTION
            </h2>
         </Reveal>
      </div>

      {/* 
        LAYER 2: CONTENT GRID 
      */}
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Espaço Vazio Esquerdo (Visual do Shader) */}
            <div className="hidden md:block md:col-span-6 lg:col-span-7 h-full min-h-[400px]"></div>

            {/* Coluna Direita: Conteúdo */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-12">
              
              <Reveal delay={200}>
                  {/* Cartão de Depoimento */}
                  <div className="backdrop-blur-md bg-white/40 border border-white/60 p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(117,69,72,0.1)] relative">
                      <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-stone-800 relative z-10">
                          "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim."
                      </p>
                      
                      <div className="flex flex-col gap-2 relative z-10 border-t border-rose-900/10 pt-6">
                          <div className="flex items-center gap-4">
                              <span className="text-xs uppercase tracking-widest text-stone-900 font-bold">Ana Clara</span>
                              <div className="h-[1px] w-8 bg-rose-400"></div>
                              <span className="text-[10px] uppercase tracking-wider text-stone-500">Arquiteta</span>
                          </div>
                      </div>
                  </div>
              </Reveal>

              <Reveal delay={400}>
                  {/* Bloco de Imagem - RETO E LIMPO */}
                  <div className="relative w-full ml-auto">
                       {/* Imagem alinhada, sem rotação, borda branca sólida */}
                       <div className="relative z-10 aspect-[3/4] shadow-2xl border-[12px] border-white bg-white">
                          <img 
                              src="https://picsum.photos/800/1000?grayscale&random=99" 
                              alt="Tattoo Detail"
                              className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[1.05]"
                          />
                       </div>
                       
                       {/* Tag Minimalista */}
                       <div className="absolute -bottom-6 -right-6 z-20 bg-[#1a1a1a] text-white py-4 px-8 shadow-xl">
                          <span className="font-serif italic text-xl tracking-wide">"Eterno."</span>
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