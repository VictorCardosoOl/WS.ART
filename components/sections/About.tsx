import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 overflow-hidden bg-[#FAF7F7]">
      
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Section - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
            <div className="lg:col-span-9">
                <Reveal>
                    <span className="block text-[#754548] text-xs font-bold uppercase tracking-[0.3em] mb-8">Manifesto</span>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-stone-900 mb-12">
                        Não é apenas um estúdio.<br/> 
                        É um <span className="italic text-[#754548] opacity-80">Santuário</span>.
                    </h2>
                </Reveal>
            </div>
            
            <div className="lg:col-span-3 flex justify-end">
                 <Reveal delay={200}>
                    <div className="w-24 h-[1px] bg-stone-900 mt-12 hidden lg:block"></div>
                 </Reveal>
            </div>
        </div>

        {/* Poetry Layout - Staggered Text (Kasia Siwosz Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
            
            {/* Imagem Flutuante inserida no meio do grid para quebrar o ritmo */}
            <div className="col-span-12 md:col-span-5 md:col-start-8 mb-12 md:mb-0 relative order-first md:order-last">
                 <Reveal delay={300}>
                    <div className="aspect-[3/4] w-full overflow-hidden shadow-2xl rounded-sm" data-cursor="O Artista">
                        <img 
                            src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop" 
                            alt="William Siqueira" 
                            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                 </Reveal>
                 <div className="absolute -bottom-6 -left-6 z-[-1] w-full h-full border border-[#754548]/20 rounded-sm"></div>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col gap-16 md:gap-24 text-lg md:text-xl font-light text-stone-600 font-serif leading-relaxed">
                
                {/* Parágrafo 1 - Alinhado à esquerda com borda */}
                <Reveal delay={200}>
                    <div className="max-w-md ml-0 border-l-2 border-[#754548] pl-6 py-2">
                        <p>
                            "Minha prática não se trata de decorar a pele, mas de <strong className="text-stone-900 font-medium">revelar</strong> o que já existe internamente. Cada projeto é uma colaboração íntima entre a sua história e a minha visão."
                        </p>
                    </div>
                </Reveal>

                {/* Parágrafo 2 - Indentado fortemente (Revista Style) */}
                <Reveal delay={300}>
                    <p className="max-w-md ml-0 md:ml-24 lg:ml-48">
                        Abandonei as regras rígidas da tatuagem comercial para focar em <span className="italic text-stone-900 bg-[#754548]/10 px-1">liberdade anatômica</span>. O Neotradicional é a ferramenta, mas a conexão humana é a essência.
                    </p>
                </Reveal>

                {/* Parágrafo 3 - Retorno ao centro visual */}
                <Reveal delay={400}>
                    <p className="max-w-md ml-0 md:ml-12">
                        Aqui, o tempo desacelera. Cada sessão é um ritual de transformação, realizado em total privacidade para garantir que a arte receba o respeito que merece.
                    </p>
                </Reveal>

                 <Reveal delay={500}>
                    <img 
                        src="https://signature.freefire-name.com/img.php?f=7&t=William" 
                        alt="Assinatura" 
                        className="h-24 opacity-80 mix-blend-multiply mt-8 ml-0 md:ml-32 rotate-[-2deg]" 
                    />
                </Reveal>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;