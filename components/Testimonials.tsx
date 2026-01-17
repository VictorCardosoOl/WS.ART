import React from 'react';
import Reveal from './Reveal';
import FluidBackground from './FluidBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="relative pt-32 pb-40 md:py-56 overflow-hidden">
      
      {/* 
        1. BACKGROUND 
        O shader desenha o gradiente em coordenadas relativas.
        Mantemos o container expandido para garantir que o "glow" não seja cortado.
      */}
      <div className="absolute top-[-25%] left-0 w-full h-[150%] z-0 pointer-events-none">
        <FluidBackground />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TÍTULO ALINHADO
            O gradiente está em (0.35, 0.65) no shader (esquerda/cima).
            Posicionamos o título para interagir com essa área escura.
        */}
        <div className="mb-16 md:mb-24 text-left relative">
          <Reveal>
              <h2 className="text-[14vw] md:text-[13vw] font-serif leading-none text-rose-950 mix-blend-multiply opacity-[0.2] select-none tracking-tighter transform translate-x-[-2%]">
                  EMOTION
              </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Espaço para o visual respirar no lado esquerdo onde o gradiente é mais forte */}
            <div className="hidden md:block"></div>

            {/* Conteúdo à direita */}
            <div className="flex flex-col gap-12">
              <Reveal delay={200}>
                  {/* Cartão Glassmorphism refinado */}
                  <div className="backdrop-blur-xl bg-white/40 border border-white/60 p-8 md:p-12 rounded-sm shadow-[0_15px_35px_-10px_rgba(117,69,72,0.1)] relative overflow-hidden">
                      
                      <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-stone-800 relative z-10">
                          "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim."
                      </p>
                      
                      <div className="flex flex-col gap-6 relative z-10">
                          <div className="flex items-center gap-4">
                              <div className="h-[1px] w-8 bg-rose-400"></div>
                              <span className="text-xs uppercase tracking-widest text-stone-600 font-bold">Ana Clara, Arquiteta</span>
                          </div>
                          
                          <div className="pt-6 border-t border-rose-900/10">
                               <p className="font-serif text-lg italic mb-2 text-stone-700">"A precisão do traço é surreal."</p>
                               <span className="text-[10px] uppercase tracking-widest text-stone-500">Roberto M., Músico</span>
                          </div>
                      </div>
                  </div>
              </Reveal>

              <Reveal delay={400}>
                  <div className="relative pl-8 md:pl-20">
                       <img 
                          src="https://picsum.photos/800/1000?grayscale&random=99" 
                          alt="Tattoo Detail"
                          className="relative z-10 w-full h-auto grayscale contrast-[1.1] brightness-[1.05] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 ease-out border-[6px] border-white"
                       />
                       
                       <div className="absolute -bottom-5 -left-4 z-20 backdrop-blur-md bg-stone-900 border border-stone-800 p-4 shadow-xl">
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