import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BrushStrokeTransition, InkSplatter } from '../ui/ArtisticDecorations';

const pillars = [
  {
    id: "01",
    title: "Sondagem",
    subtitle: "A Escuta Ativa",
    desc: "Tudo começa muito antes da agulha. Realizamos uma imersão na sua ideia, investigando referências, memórias e o simbolismo oculto. Não queremos apenas saber 'o que' você quer tatuar, mas 'por que'. Esta etapa define a alma do projeto."
  },
  {
    id: "02",
    title: "Estudo Anatômico",
    subtitle: "Engenharia Visual",
    desc: "Seu corpo não é uma tela plana. Projetamos a arte digitalmente sobre fotos da sua musculatura, respeitando curvas, dobras e movimentos naturais. O desenho é esculpido para fluir organicamente com você, criando harmonia visual."
  },
  {
    id: "03",
    title: "A Execução",
    subtitle: "O Ritual",
    desc: "O momento da materialização. Em um ambiente privado, estéril e controlado, transformamos o conceito em realidade perene. Utilizamos pigmentos premium e técnicas de trauma reduzido para garantir longevidade e uma cicatrização superior."
  }
];

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // Gradient Background starts here and flows into next section
    <section ref={containerRef} className="relative pt-48 pb-32 overflow-hidden bg-gradient-to-b from-[#FAF7F7] via-[#F5E6E8]/40 to-white" id="process">
      
      {/* DECORATION: Ink Splatter */}
      <InkSplatter className="top-20 right-[10%] w-64 h-64 text-[#754548]" />

      {/* Hand Drawn Organic Line Decoration (Desktop) */}
      <div className="absolute left-1/2 top-40 bottom-20 w-[2px] -translate-x-1/2 hidden md:block bg-[#754548]/10">
         <motion.div 
            style={{ scaleY, originY: 0 }}
            className="w-full h-full bg-[#754548]"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <SectionTitle 
            number="03"
            subtitle="Metodologia"
            title="O Processo"
            align="center"
        />

        <div className="space-y-24 md:space-y-0 mt-20">
            {pillars.map((pillar, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={pillar.id} className={`flex flex-col md:flex-row items-center justify-between md:gap-20 relative ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        
                        {/* Ink Blot / Organic Dot on Line */}
                        <motion.div 
                             initial={{ scale: 0, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             transition={{ duration: 0.5, delay: 0.2 }}
                             viewport={{ once: true, margin: "-100px" }}
                             className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center"
                        >
                             <div className="w-4 h-4 bg-[#754548] rounded-full border-4 border-[#FAF7F7] shadow-sm relative z-10"></div>
                             <div className="absolute inset-0 bg-[#754548] rounded-full animate-ping opacity-20"></div>
                        </motion.div>

                        <div className={`w-full md:w-5/12 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                            <Reveal width="100%" delay={index * 100}>
                                <div className={`flex flex-col gap-2 relative ${isEven ? 'items-end' : 'items-start'}`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] mb-2 block font-hand text-xl transform -rotate-2 opacity-80`}>
                                        Etapa {pillar.id}
                                    </span>
                                    <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
                                        {pillar.title}
                                    </h3>
                                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 relative inline-block">
                                        {pillar.subtitle}
                                        {/* Underline Scribble */}
                                        <motion.svg 
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            viewport={{ once: true }}
                                            className="absolute top-full left-0 w-full h-2 text-[#754548]/30" 
                                            viewBox="0 0 100 10" 
                                            preserveAspectRatio="none"
                                        >
                                            <motion.path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </motion.svg>
                                    </h4>
                                    <p className={`font-sans text-stone-600 font-light leading-relaxed text-sm md:text-base max-w-md ${isEven ? 'text-right' : 'text-left'}`}>
                                        {pillar.desc}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                        <div className="w-full md:w-5/12 hidden md:block"></div>
                    </div>
                );
            })}
        </div>

    </div>
    </section>
  );
};

export default Process;