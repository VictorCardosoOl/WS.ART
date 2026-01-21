import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraphiteScribble } from '../ui/ArtisticDecorations';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const rotateSig = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    // Mudança: Fundo claro com gradiente sutil para manter continuidade
    <section id="about" ref={containerRef} className="relative py-32 md:py-48 bg-gradient-to-b from-[#FAF7F7] via-[#fdfbf7] to-[#FAF7F7] overflow-hidden">
      
      {/* Decoração de Fundo: Mancha Artística/Grafite */}
      <GraphiteScribble className="top-20 -left-20 w-[600px] h-[600px] text-[#754548] opacity-[0.03] rotate-180" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#754548] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-start">
          
          {/* COLUNA ESQUERDA: Rótulo Sticky */}
          <div className="md:col-span-3 md:sticky md:top-32 self-start">
             <Reveal>
                <div className="flex flex-col gap-2 border-l border-[#754548]/20 pl-4">
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-stone-400 block">
                        ( 02 )
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] block">
                        Manifesto
                    </span>
                </div>
             </Reveal>
          </div>

          {/* COLUNA DIREITA: Conteúdo Editorial */}
          <div className="md:col-span-8 md:col-start-5 relative">
             
             {/* Handwritten Margin Note */}
             <motion.div style={{ y: yImage }} className="absolute -left-24 top-10 w-32 hidden lg:block pointer-events-none z-20">
                 <span className="font-hand text-xl text-stone-400 rotate-[-15deg] block text-center leading-tight">
                    "não há<br/>suporte plano"
                 </span>
                 <svg className="w-full h-10 text-stone-400/50 mt-2" viewBox="0 0 50 20">
                     <path d="M10,10 Q25,20 40,5" fill="none" stroke="currentColor" strokeWidth="1" />
                 </svg>
             </motion.div>

             {/* Título Principal - Agora Escuro */}
             <Reveal delay={100}>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] tracking-tight mb-16 relative z-10 text-stone-900">
                  A pele não é<br/>
                  apenas suporte.<br/>
                  <span className="italic text-[#754548] opacity-90">É território.</span>
                </h2>
             </Reveal>

             {/* Corpo de Texto com Parallax - Texto Escuro */}
             <motion.div style={{ y: yText }} className="space-y-8 text-lg md:text-xl font-serif font-light leading-relaxed text-stone-600 max-w-2xl relative z-10">
                <Reveal delay={200}>
                    <p>
                      <span className="text-[#754548] text-4xl md:text-5xl float-left mr-3 mt-[-6px] font-serif">A</span>
                      creditamos que a tatuagem transcende a estética. É um rito de passagem, uma demarcação de memória, um diálogo silencioso entre quem fomos e quem desejamos ser. Rejeitamos o industrial em favor do anatômico.
                    </p>
                </Reveal>
                <Reveal delay={300}>
                    <p>
                      Cada linha traçada no estúdio é projetada para a curvatura específica do portador. Não existem dois corpos iguais; portanto, a repetição é a antítese da nossa arte. Unimos a solidez técnica do clássico com a liberdade poética do contemporâneo.
                    </p>
                </Reveal>
             </motion.div>

             {/* Lista de Credenciais - Design Limpo */}
             <div className="mt-24 pt-10 relative z-10">
                <Reveal delay={400}>
                    <div className="flex items-center gap-4 mb-8">
                         <div className="h-[1px] w-12 bg-[#754548]/30"></div>
                         <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">Background</span>
                    </div>
                   
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-8">
                        {[
                        "Neotradicional",
                        "Fine Art",
                        "Estúdio Privado",
                        "São Paulo, BR"
                        ].map((item, i) => (
                        <motion.li 
                            key={i} 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-2 group cursor-default"
                        >
                            <span className="text-[10px] font-bold text-[#754548] opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                                0{i+1}
                            </span>
                            <span className="font-serif text-lg text-stone-800 italic group-hover:text-[#754548] transition-colors">
                                {item}
                            </span>
                        </motion.li>
                        ))}
                    </ul>
                </Reveal>
             </div>

             {/* Imagem de Assinatura Visual - Integrada ao fundo claro */}
             <Reveal delay={500} width="100%">
                 <motion.div style={{ y: yImage, rotate: rotateSig }} className="mt-20 relative aspect-[21/9] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
                     <img 
                        src="https://picsum.photos/1200/600?grayscale&random=99" 
                        alt="Atelier" 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-[#754548]/10 mix-blend-multiply"></div>
                 </motion.div>
             </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;