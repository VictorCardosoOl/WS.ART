import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-[#FAF7F7] overflow-hidden">
      
      {/* --- BACKGROUND ARTISTRY --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_#754548_0%,_transparent_70%)] opacity-[0.03] blur-[100px] pointer-events-none z-0"></div>
      
      <div className="absolute top-1/4 left-[-100px] md:left-10 w-[300px] h-[300px] opacity-[0.06] pointer-events-none z-0 rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#1c1917" strokeWidth="1" d="M43.6,133.1C55.9,139.6,99.8,110.3,95.5,86.6C92.2,68.4,59.6,73.4,53.6,96.3c-3.9,14.9,23.3,34.8,44.9,32.8c34.7-3.2,52.2-46.7,35.3-73.6c-18.1-28.8-73.4-18.3-90.8,10.2c-20.9,34.2,2.3,92.5,43.2,106.6c54.3,18.7,113.6-26.6,108.6-83.3"/>
        </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* PARTE 1: TEXTO EDITORIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-24 md:mb-32">
            {/* Coluna Esquerda Vazia (para layout) */}
            <div className="hidden lg:block"></div>

            {/* Coluna Direita: Conteúdo */}
            <div className="flex flex-col justify-center items-start lg:pl-12">
                <Reveal>
                    <h2 className="font-sans font-medium text-5xl md:text-6xl lg:text-[6rem] leading-[0.9] tracking-tighter text-stone-900 uppercase mb-8 relative">
                        Eu sou William Siqueira, e eu <span className="text-stone-400 italic">materializo</span> histórias.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="flex flex-col md:flex-row items-end md:items-start justify-between w-full gap-8 mt-4">
                        <p className="font-serif text-xl md:text-3xl text-stone-600 leading-relaxed max-w-xl">
                            Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* PARTE 2: GRID DE 3 IMAGENS (Niveladas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
            
            {/* Imagem 01 */}
            <Reveal delay={100} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                    <div className="absolute inset-0 border-[0.5px] border-[#1c1917]/20 z-20 pointer-events-none m-2"></div>
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=101" 
                        alt="Processo Criativo" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

            {/* Imagem 02 */}
            <Reveal delay={200} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                    <div className="absolute inset-0 border-[0.5px] border-[#1c1917]/20 z-20 pointer-events-none m-2"></div>
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=102" 
                        alt="Retrato William Siqueira" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

            {/* Imagem 03 */}
            <Reveal delay={300} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                    <div className="absolute inset-0 border-[0.5px] border-[#1c1917]/20 z-20 pointer-events-none m-2"></div>
                    <img 
                        src="https://picsum.photos/800/1066?grayscale&random=103" 
                        alt="Detalhe Estúdio" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

        </div>

      </div>
      
      {/* Separador Orgânico Inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
         <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#E5D0D4] opacity-50" preserveAspectRatio="none">
            <path d="M0 50C240 80 480 20 720 50C960 80 1200 20 1440 50" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
         </svg>
      </div>
    </section>
  );
};

export default About;