import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#1a1919] text-[#FAF7F7] overflow-hidden">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* LAYOUT EDITORIAL ASSIMÉTRICO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-start">
          
          {/* COLUNA ESQUERDA: Rótulo Sticky */}
          <div className="md:col-span-3 md:sticky md:top-32 self-start">
             <Reveal>
                <div className="flex flex-col gap-2">
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-stone-500 block">
                        ( 02 )
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] block">
                        Manifesto
                    </span>
                    <div className="h-[1px] w-8 bg-[#754548]/50 mt-4"></div>
                </div>
             </Reveal>
          </div>

          {/* COLUNA DIREITA: Conteúdo Editorial */}
          <div className="md:col-span-8 md:col-start-5">
             
             {/* Título Principal */}
             <Reveal delay={100}>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] tracking-tight mb-16">
                  A pele não é<br/>
                  apenas suporte.<br/>
                  <span className="italic text-[#754548] opacity-90">É território.</span>
                </h2>
             </Reveal>

             {/* Corpo de Texto com Drop Cap */}
             <div className="space-y-8 text-lg md:text-xl font-serif font-light leading-relaxed text-[#FAF7F7]/80 max-w-2xl">
                <Reveal delay={200}>
                    <p>
                      <span className="text-[#754548] text-4xl md:text-5xl float-left mr-3 mt-[-8px] font-serif">A</span>
                      creditamos que a tatuagem transcende a estética. É um rito de passagem, uma demarcação de memória, um diálogo silencioso entre quem fomos e quem desejamos ser. Rejeitamos o industrial em favor do anatômico.
                    </p>
                </Reveal>
                <Reveal delay={300}>
                    <p>
                      Cada linha traçada no estúdio é projetada para a curvatura específica do portador. Não existem dois corpos iguais; portanto, a repetição é a antítese da nossa arte. Unimos a solidez técnica do clássico com a liberdade poética do contemporâneo.
                    </p>
                </Reveal>
             </div>

             {/* Lista de Credenciais / Background */}
             <div className="border-t border-stone-800 mt-20 pt-10">
                <Reveal delay={400}>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 block mb-8">
                        Background
                    </span>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                        "Neotradicional",
                        "Fine Art",
                        "Estúdio Privado",
                        "São Paulo, BR"
                        ].map((item, i) => (
                        <li key={i} className="flex flex-col gap-3 group cursor-default">
                            <span className="text-[10px] font-bold text-[#754548] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                0{i+1}
                            </span>
                            <span className="font-serif text-xl text-[#FAF7F7] italic opacity-80 group-hover:opacity-100 transition-opacity">
                                {item}
                            </span>
                        </li>
                        ))}
                    </ul>
                </Reveal>
             </div>

             {/* Imagem de Assinatura Visual */}
             <Reveal delay={500} width="100%">
                 <div className="mt-20 relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-1000">
                     <img 
                        src="https://picsum.photos/1200/600?grayscale&random=99" 
                        alt="Atelier" 
                        className="w-full h-full object-cover"
                     />
                 </div>
             </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;