import React, { useState, useRef, useEffect } from 'react';
import Reveal from '../ui/Reveal';
import gsap from 'gsap';

const steps = [
  {
    id: "01",
    title: "Briefing",
    shortDesc: "Alinhamento de expectativas.",
    fullDesc: "A etapa fundamental de coleta de informações. Realizamos uma conversa técnica para entender as referências, dimensões, local do corpo e a narrativa que deve compor a obra. Definimos aqui a viabilidade técnica do projeto.",
  },
  {
    id: "02",
    title: "Concept Art",
    shortDesc: "Desenvolvimento do projeto.",
    fullDesc: "Criação digital e manual do desenho. Utilizamos softwares de edição para projetar a arte sobre a foto da sua anatomia (Mockup), garantindo fluidez e encaixe perfeito antes de qualquer intervenção na pele.",
  },
  {
    id: "03",
    title: "Preparação",
    shortDesc: "Montagem de bancada.",
    fullDesc: "Definição de paleta de cores, calibração de máquinas e preparação da bancada estéril. Todo o material é conferido e aberto na frente do cliente para garantir segurança biológica total.",
  },
  {
    id: "04",
    title: "Execução",
    shortDesc: "A sessão de tatuagem.",
    fullDesc: "Aplicação técnica do pigmento. Focamos em traços limpos e solidez na cor, otimizando o tempo de sessão para reduzir o trauma na pele e garantir uma cicatrização mais eficiente.",
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
        gsap.fromTo(contentRef.current, 
            { opacity: 0, x: 20 }, 
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
        );
    }
  }, [activeStep]);

  // Guard clause to prevent crashes if index is out of bounds
  const currentStep = steps[activeStep] || steps[0];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden" id="process">
      
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#F2E8E9] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FAF7F7] to-transparent z-1"></div>
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* List Content */}
          <div className="w-full lg:w-1/2">
             <Reveal>
               <div className="flex items-center gap-4 mb-12">
                   <div className="w-3 h-3 rounded-full border border-[#754548] bg-transparent"></div>
                   <span className="text-xs font-bold uppercase tracking-ultra text-[#754548]">Fluxo de Criação</span>
               </div>
             </Reveal>

             <div className="flex flex-col" role="tablist" aria-orientation="vertical">
               {steps.map((step, index) => (
                 <div 
                    key={index}
                    role="tab"
                    id={`process-tab-${index}`}
                    aria-selected={activeStep === index}
                    aria-controls="process-panel"
                    tabIndex={0}
                    className={`group border-b border-[#1c1917]/10 py-10 cursor-pointer relative transition-all duration-500 focus-visible:outline-none focus-visible:bg-white/50 rounded-sm ${activeStep === index ? 'pl-8 border-[#754548]' : 'hover:pl-4'}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(index);
                      }
                    }}
                 >
                    {/* Active Indicator */}
                    <div 
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-12 bg-[#754548] transition-all duration-300 ${activeStep === index ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                        style={{ maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 3 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.5,0 Q0,25 3,50\' stroke=\'black\' stroke-width=\'3\' fill=\'none\'/%3E%3C/svg%3E")' }}
                    />

                    <div className="flex items-baseline justify-between mb-2">
                        <h3 className={`text-3xl md:text-5xl font-serif transition-colors duration-500 tracking-tight ${activeStep === index ? 'text-[#754548] italic' : 'text-[#1c1917]'}`}>
                            {step.title}
                        </h3>
                        <span className={`text-xs font-bold transition-colors ${activeStep === index ? 'text-[#754548]' : 'text-stone-400'}`}>
                            {step.id}
                        </span>
                    </div>
                    <p className={`text-stone-500 font-sans text-sm tracking-wide transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-60'}`}>
                        {step.shortDesc}
                    </p>
                 </div>
               ))}
             </div>
          </div>

          {/* Text Description Reveal */}
          <div className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center">
            <div className="w-full lg:sticky lg:top-32 lg:pl-12 border-l border-[#754548]/20">
               <div ref={contentRef} className="relative will-change-transform">
                     {/* Watermark Number */}
                     <span className="absolute -top-24 -left-16 text-[14rem] font-serif text-[#754548] opacity-[0.05] select-none pointer-events-none font-italic leading-none mix-blend-multiply">
                        {currentStep.id}
                     </span>

                     <h4 className="font-serif text-4xl md:text-6xl text-[#1c1917] mb-6 leading-none opacity-10 relative z-10" aria-hidden="true">
                        {currentStep.id}
                     </h4>
                     <h3 className="text-2xl font-serif text-[#1c1917] mb-6 relative z-10">
                        Detalhes da Etapa
                     </h3>
                     <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed font-serif relative z-10">
                       {currentStep.fullDesc}
                     </p>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Process;