import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TornPaperTop, TornPaperBottom } from '../ui/ArtisticDecorations';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotateSig = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section id="about" ref={containerRef} className="relative py-48 bg-[#1a1919] text-[#FAF7F7] overflow-visible">
      
      {/* TRANSITIONS: TORN PAPER EFFECT */}
      <TornPaperTop />

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
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
          <div className="md:col-span-8 md:col-start-5 relative">
             
             {/* Handwritten Margin Note */}
             <motion.div style={{ y: yImage }} className="absolute -left-20 top-10 w-32 hidden lg:block pointer-events-none z-20">
                 <span className="font-hand text-xl text-stone-400 rotate-[-15deg] block text-center leading-tight">
                    "não há<br/>suporte plano"
                 </span>
                 <svg className="w-full h-10 text-stone-500/50 mt-2" viewBox="0 0 50 20">
                     <path d="M10,10 Q25,20 40,5" fill="none" stroke="currentColor" strokeWidth="1" />
                 </svg>
             </motion.div>

             {/* Título Principal */}
             <Reveal delay={100}>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] tracking-tight mb-16 relative z-10">
                  A pele não é<br/>
                  apenas suporte.<br/>
                  <span className="italic text-[#754548] opacity-90">É território.</span>
                </h2>
             </Reveal>

             {/* Corpo de Texto com Parallax */}
             <motion.div style={{ y: yText }} className="space-y-8 text-lg md:text-xl font-serif font-light leading-relaxed text-[#FAF7F7]/80 max-w-2xl relative z-10">
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

                 {/* Handwritten Correction/Note */}
                 <div className="absolute -right-16 bottom-10 hidden lg:block opacity-60">
                     <span className="font-hand text-2xl text-[#754548] rotate-[5deg] block">
                        ( único )
                     </span>
                     <svg className="w-16 h-16 absolute -top-4 -left-2 text-[#754548]/30" viewBox="0 0 100 100">
                         <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10 50 50)" />
                     </svg>
                 </div>
             </motion.div>

             {/* Lista de Credenciais / Background */}
             <div className="border-t border-stone-800 mt-20 pt-10 relative z-10">
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
                        <motion.li 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-3 group cursor-default"
                        >
                            <span className="text-[10px] font-bold text-[#754548] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                0{i+1}
                            </span>
                            <span className="font-serif text-xl text-[#FAF7F7] italic opacity-80 group-hover:opacity-100 transition-opacity">
                                {item}
                            </span>
                        </motion.li>
                        ))}
                    </ul>
                </Reveal>
             </div>

             {/* Imagem de Assinatura Visual */}
             <Reveal delay={500} width="100%">
                 <motion.div style={{ y: yImage, rotate: rotateSig }} className="mt-20 relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm opacity-60 grayscale hover:grayscale-0 transition-all duration-1000">
                     <img 
                        src="https://picsum.photos/1200/600?grayscale&random=99" 
                        alt="Atelier" 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
                 </motion.div>
             </Reveal>

          </div>
        </div>
      </div>
      
      {/* TRANSITIONS: TORN PAPER BOTTOM */}
      <TornPaperBottom />
    </section>
  );
};

export default About;