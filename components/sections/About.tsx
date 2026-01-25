import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FAF7F7] overflow-hidden">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,_#E5D0D4_0%,_transparent_60%)] opacity-20 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* PARTE 1: MANIFESTO (Texto no Topo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 md:mb-32">
            <div className="lg:col-span-8">
                <Reveal>
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#754548] mb-8 block">Sobre Mim</span>
                    <h2 className="font-sans font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-stone-900 mb-12">
                        Não sigo regras rígidas.<br/>
                        Meu estilo é <span className="font-serif italic text-[#754548]">liberdade</span>.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="space-y-8 max-w-2xl text-lg md:text-xl font-light text-stone-600 leading-relaxed font-serif">
                        <p>
                            A arte sempre foi minha linguagem. Do design gráfico ao cinema de animação, explorei diversas formas de expressão visual até encontrar na tatuagem o meio definitivo.
                        </p>
                        <p>
                            O Neotradicional me permite mesclar a solidez do clássico com a vibração do contemporâneo. É vibrante, detalhado e, acima de tudo, conceitual. Busco sempre criar uma conexão intrínseca entre a obra e a pessoa que a carrega.
                        </p>
                    </div>
                </Reveal>
            </div>
            
            <div className="lg:col-span-4 flex items-end justify-end">
                 <Reveal delay={400}>
                    <img 
                        src="https://signature.freefire-name.com/img.php?f=7&t=William" 
                        alt="Assinatura" 
                        className="h-20 opacity-80 mix-blend-multiply" 
                    />
                </Reveal>
            </div>
        </div>

        {/* PARTE 2: 3 FOTOS DO ARTISTA (Sem bordas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Foto 1 */}
            <Reveal delay={100} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                    <img 
                        src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop" 
                        alt="William Siqueira Portrait" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 hover:scale-100"
                    />
                </div>
            </Reveal>

            {/* Foto 2 */}
            <Reveal delay={200} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 md:translate-y-12">
                    <img 
                        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo de Tatuagem" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 hover:scale-100"
                    />
                </div>
            </Reveal>

            {/* Foto 3 */}
            <Reveal delay={300} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                    <img 
                        src="https://images.unsplash.com/photo-1550537687-c91357788f04?q=80&w=800&auto=format&fit=crop" 
                        alt="Estúdio Detalhe" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 hover:scale-100"
                    />
                </div>
            </Reveal>

        </div>

      </div>
    </section>
  );
};

export default About;