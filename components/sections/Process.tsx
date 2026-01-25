import React, { useState, useRef, useEffect } from 'react';
import Reveal from '../ui/Reveal';
import gsap from 'gsap';

const steps = [
  {
    id: "01",
    title: "Briefing & Conexão",
    shortDesc: "Entendemos sua história.",
    fullDesc: "A sondagem da tatuagem. Nesta etapa inicial, realizamos uma conversa profunda para entender as motivações, símbolos e memórias que devem compor a obra. Não é apenas sobre o desenho, é sobre o significado.",
  },
  {
    id: "02",
    title: "Estudo Anatômico",
    shortDesc: "Projeção digital no corpo.",
    fullDesc: "Utilizamos fotografia e edição digital (Photoshop) para projetar o desenho diretamente sobre a foto do seu corpo. Isso garante que a arte respeite sua musculatura, curvaturas e fluxo natural, criando uma peça orgânica e fluida.",
  },
  {
    id: "03",
    title: "Sketching",
    shortDesc: "O desenho ganha vida.",
    fullDesc: "Desenvolvimento dos rascunhos e arte final antes da tatuagem acontecer. Aqui definimos contraste, pesos de linha e paleta de cores. O desenho é refinado até atingir a excelência estética e técnica necessária.",
  },
  {
    id: "04",
    title: "A Sessão",
    shortDesc: "Execução técnica.",
    fullDesc: "O momento da materialização. Em um ambiente privado e estéril, a arte é transferida para a pele. Utilizamos técnicas modernas para garantir a durabilidade do pigmento e o conforto durante o procedimento.",
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

  return (
    <section className="relative py-32 md:py-48 overflow-hidden" id="process">
      
      {/* --- BACKGROUND ARTISTRY (Ink Wash Paper) --- */}
      <div className="absolute inset-0 bg-[#F2E8E9] z-0"></div>
      
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FAF7F7] to-transparent z-1"></div>

      {/* Abstract Ink Blot 1 */}
      <div className="absolute top-20 right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(117,69,72,0.08)_0%,_transparent_60%)] blur-[100px] pointer-events-none z-0"></div>
      
      {/* Abstract Ink Blot 2 */}
      <div className="absolute bottom-20 left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(28,25,23,0.04)_0%,_transparent_60%)] blur-[80px] pointer-events-none z-0"></div>

      {/* Hand Drawn Decorative Line */}
      <div className="absolute top-0 right-[20%] w-[2px] h-full opacity-10 hidden lg:block z-0 overflow-hidden">
         <svg height="100%" width="20" preserveAspectRatio="none">
            <path d="M10,0 Q 20,400 0,1000" stroke="#754548" strokeWidth="2" fill="none" style={{ filter: 'url(#pencil-process)' }} />
            <defs>
                <filter id="pencil-process">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                </filter>
            </defs>
         </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* List Content */}
          <div className="w-full lg:w-1/2">
             <Reveal>
               <div className="flex items-center gap-4 mb-12">
                   {/* Artistic Bullet */}
                   <div className="w-3 h-3 rounded-full border border-[#754548] bg-transparent"></div>
                   <span className="text-xs font-bold uppercase tracking-ultra text-[#754548]">O Processo Criativo</span>
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
                    {/* Active Indicator Line (Sketch Style) */}
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
                     {/* Background Number Watermark */}
                     <span className="absolute -top-24 -left-16 text-[14rem] font-serif text-[#754548] opacity-[0.05] select-none pointer-events-none font-italic leading-none mix-blend-multiply">
                        {steps[activeStep].id}
                     </span>

                     <h4 className="font-serif text-4xl md:text-6xl text-[#1c1917] mb-6 leading-none opacity-10 relative z-10" aria-hidden="true">
                        {steps[activeStep].id}
                     </h4>
                     <h3 className="text-2xl font-serif text-[#1c1917] mb-6 relative z-10">
                        Detalhes da Etapa
                     </h3>
                     <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed font-serif relative z-10">
                       {steps[activeStep].fullDesc}
                     </p>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom transition to white */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Process;