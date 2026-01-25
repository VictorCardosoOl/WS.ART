import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FAF7F7] overflow-hidden">
      
      {/* --- BACKGROUND ARTISTRY --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_#754548_0%,_transparent_70%)] opacity-[0.03] blur-[100px] pointer-events-none z-0"></div>
      
      <div className="absolute top-1/4 left-[-100px] md:left-10 w-[300px] h-[300px] opacity-[0.06] pointer-events-none z-0 rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="#1c1917" strokeWidth="1" d="M43.6,133.1C55.9,139.6,99.8,110.3,95.5,86.6C92.2,68.4,59.6,73.4,53.6,96.3c-3.9,14.9,23.3,34.8,44.9,32.8c34.7-3.2,52.2-46.7,35.3-73.6c-18.1-28.8-73.4-18.3-90.8,10.2c-20.9,34.2,2.3,92.5,43.2,106.6c54.3,18.7,113.6-26.6,108.6-83.3"/>
        </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* PARTE 1: TEXTO EDITORIAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 md:mb-48 gap-12">
            {/* Imagem de Destaque Esquerda (Nova para preencher espaço) */}
            <div className="hidden lg:block relative h-full min-h-[600px]">
                <Reveal width="100%">
                    <div className="relative w-full h-[700px] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop" 
                            alt="Artist Portrait Artistic" 
                            className="w-full h-full object-cover grayscale opacity-90"
                        />
                        {/* Texto sobreposto estilo revista */}
                        <div className="absolute bottom-10 left-[-50px] bg-white p-6 shadow-xl max-w-xs">
                            <p className="font-serif italic text-2xl text-stone-900 leading-tight">
                                "A pele respira, a tinta permanece."
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Coluna Direita: Conteúdo */}
            <div className="flex flex-col justify-center items-start lg:pl-12 pt-12">
                <Reveal>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#754548] mb-6 block">O Artista</span>
                    <h2 className="font-sans font-medium text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-stone-900 uppercase mb-12 relative">
                        Eu sou William Siqueira, e eu <span className="text-stone-400 italic font-serif lowercase">materializo</span> histórias.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="space-y-8 max-w-xl">
                        <p className="font-serif text-2xl text-stone-700 leading-relaxed">
                            Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                        </p>
                        <p className="font-sans text-sm text-stone-500 leading-loose tracking-wide text-justify">
                            Minha jornada começou com o desenho clássico e evoluiu para a complexidade da pele humana. 
                            Cada projeto é uma colaboração íntima entre sua visão e minha técnica, resultando em peças que não apenas adornam, mas completam o corpo.
                            Busco fluidez, contraste e longevidade em cada traço.
                        </p>
                    </div>
                </Reveal>
                
                <Reveal delay={300}>
                    <div className="mt-12 flex gap-8">
                        <div>
                            <span className="block text-4xl font-serif text-stone-900">10+</span>
                            <span className="text-[10px] uppercase tracking-widest text-stone-400">Anos de Experiência</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-serif text-stone-900">1k+</span>
                            <span className="text-[10px] uppercase tracking-widest text-stone-400">Obras Realizadas</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* PARTE 2: GRID DE 3 IMAGENS (Maior e mais imersivo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            
            {/* Imagem 01 */}
            <Reveal delay={100} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                    <div className="absolute inset-0 border-[0.5px] border-[#1c1917]/20 z-20 pointer-events-none m-3"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1515965885000-142962f872f8?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Criativo Sketching" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] bg-white px-2 py-1 uppercase tracking-widest font-bold">Sketching</span>
                    </div>
                </div>
            </Reveal>

            {/* Imagem 02 */}
            <Reveal delay={200} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group md:-mt-12">
                    <div className="absolute inset-0 border-[0.5px] border-[#1c1917]/20 z-20 pointer-events-none m-3"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop" 
                        alt="Estúdio Interior" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                     <div className="absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] bg-white px-2 py-1 uppercase tracking-widest font-bold">Atmosfera</span>
                    </div>
                </div>
            </Reveal>

            {/* Imagem 03 */}
            <Reveal delay={300} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                    <div className="absolute inset-0 border-[0.5px] border-[#1c1917]/20 z-20 pointer-events-none m-3"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=800&auto=format&fit=crop" 
                        alt="Detalhe Equipamento" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                     <div className="absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] bg-white px-2 py-1 uppercase tracking-widest font-bold">Ferramentas</span>
                    </div>
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