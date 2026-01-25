import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden">
      
      {/* --- ARTISANAL BACKGROUND --- */}
      {/* Base Paper Color */}
      <div className="absolute inset-0 bg-[#FAF7F7] z-0"></div>
      
      {/* Light Source / Focus Gradient */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(117,69,72,0.05)_0%,_transparent_70%)] blur-[80px] pointer-events-none z-0"></div>
      
      {/* Graphite Texture Overlay */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(28,25,23,0.03)_0%,_transparent_60%)] blur-[60px] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* PARTE 1: MANIFESTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
            <div className="lg:col-span-8">
                <Reveal>
                    <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-stone-900 mb-8 uppercase mix-blend-darken">
                        Eu sou William<br/> 
                        Siqueira, e eu<br/>
                        <span className="text-stone-400">materializo</span><br/>
                        histórias.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="space-y-6 max-w-xl text-lg text-stone-600 leading-relaxed font-serif relative pl-6 mt-12">
                        {/* Hand-drawn vertical line */}
                        <div className="absolute left-0 top-0 w-[2px] h-full bg-[#754548] opacity-60" style={{ clipPath: 'polygon(0 0, 100% 2%, 80% 100%, 10% 98%)' }}></div>
                        
                        <p className="font-medium text-stone-900">
                            Especialista em Neotradicional.
                        </p>
                        <p>
                            Transformo narrativas pessoais em anatomia e arte perene. Não sigo regras rígidas, meu estilo é liberdade e conexão.
                        </p>
                    </div>
                </Reveal>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end pb-4">
                 <Reveal delay={400}>
                    <img 
                        src="https://signature.freefire-name.com/img.php?f=7&t=William" 
                        alt="Assinatura" 
                        className="h-24 opacity-80 mix-blend-multiply rotate-[-2deg]" 
                    />
                </Reveal>
            </div>
        </div>

        {/* PARTE 2: 3 FOTOS DO ARTISTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Foto 1 */}
            <Reveal delay={100} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 shadow-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop" 
                        alt="Atmosfera Pessoal" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 border border-stone-900/5 pointer-events-none"></div>
                </div>
            </Reveal>

            {/* Foto 2 */}
            <Reveal delay={200} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 shadow-sm translate-y-8 md:translate-y-0">
                    <img 
                        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Criativo" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 border border-stone-900/5 pointer-events-none"></div>
                </div>
            </Reveal>

            {/* Foto 3 */}
            <Reveal delay={300} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 shadow-sm">
                    <img 
                        src="https://images.unsplash.com/photo-1550537687-c91357788f04?q=80&w=800&auto=format&fit=crop" 
                        alt="Estúdio Detalhe" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 border border-stone-900/5 pointer-events-none"></div>
                </div>
            </Reveal>

        </div>

      </div>

      {/* SEPARATOR: HAND-DRAWN GRAPHITE LINE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 mix-blend-multiply opacity-30">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[30px] fill-none stroke-[#1c1917] stroke-2">
             <path d="M0,20 Q100,25 200,20 T400,22 T600,18 T800,21 T1000,19 T1200,20" vectorEffect="non-scaling-stroke" style={{ filter: 'url(#pencil)' }} />
             <defs>
                <filter id="pencil">
                    <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchTiles="stitch" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
             </defs>
        </svg>
      </div>
    </section>
  );
};

export default About;