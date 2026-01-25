import React, { useState, useRef, useEffect } from 'react';
import Reveal from '../ui/Reveal';
import gsap from 'gsap';

const steps = [
  {
    id: "01",
    title: "Briefing & Conexão",
    shortDesc: "A raiz da ideia.",
    fullDesc: "A sondagem da tatuagem. Nesta etapa inicial, realizamos uma conversa profunda para entender as motivações, símbolos e memórias que devem compor a obra. Não é apenas sobre o desenho, é sobre o significado.",
  },
  {
    id: "02",
    title: "Estudo Anatômico",
    shortDesc: "Moldando no corpo.",
    fullDesc: "Utilizamos fotografia e edição digital (Photoshop) para projetar o desenho diretamente sobre a foto do seu corpo. Isso garante que a arte respeite sua musculatura, curvaturas e fluxo natural, criando uma peça orgânica e fluida.",
  },
  {
    id: "03",
    title: "Sketching",
    shortDesc: "O traço ganha vida.",
    fullDesc: "Desenvolvimento dos rascunhos e arte final antes da tatuagem acontecer. Aqui definimos contraste, pesos de linha e paleta de cores. O desenho é refinado até atingir a excelência estética e técnica necessária.",
  },
  {
    id: "04",
    title: "A Sessão",
    shortDesc: "Materialização.",
    fullDesc: "O momento da materialização. Em um ambiente privado e estéril, a arte é transferida para a pele. Utilizamos técnicas modernas para garantir a durabilidade do pigmento e o conforto durante o procedimento.",
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
        gsap.fromTo(contentRef.current, 
            { opacity: 0, x: 20, filter: "blur(5px)" }, 
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.6, ease: "cinema" }
        );
    }
  }, [activeStep]);

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[#FAF7F7]" id="process">
      
      {/* --- ARTISTIC BACKGROUND ELEMENTS --- */}
      {/* Mancha de grafite suave */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(28,25,23,0.03)_0%,_transparent_70%)] blur-[80px] pointer-events-none z-0 mix-blend-multiply"></div>
      
      {/* Textura de papel sutil global */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 pb-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Column: Navigation List */}
          <div className="w-full lg:w-5/12 relative">
             <Reveal>
               <div className="mb-16 pl-6 relative">
                   {/* Decorative Scribble */}
                   <svg className="absolute -left-2 top-1 w-6 h-6 overflow-visible" viewBox="0 0 20 20">
                        <path d="M0,10 Q5,0 10,10 T20,10" fill="none" stroke="#754548" strokeWidth="1.5" />
                   </svg>
                   <span className="text-xs font-bold uppercase tracking-ultra text-[#754548]">O Processo Criativo</span>
               </div>
             </Reveal>

             {/* Organic Vertical Line Container */}
             <div className="relative pl-6">
                {/* A linha orgânica contínua de fundo */}
                <div className="absolute left-[3px] top-0 h-full w-[2px] opacity-20 overflow-hidden">
                    <svg height="100%" width="10" preserveAspectRatio="none">
                        <path d="M1,0 Q 4,200 1,500 T 2,1000" stroke="#1c1917" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" style={{ filter: 'url(#pencil-process)' }} />
                    </svg>
                </div>

                <div className="flex flex-col gap-12" role="tablist">
                {steps.map((step, index) => (
                    <div 
                        key={index}
                        role="tab"
                        onClick={() => setActiveStep(index)}
                        onMouseEnter={() => setActiveStep(index)}
                        className={`group relative cursor-pointer transition-all duration-500 outline-none`}
                    >
                        {/* Active Indicator: Organic Circle */}
                        <div className={`absolute -left-[26px] top-2 transition-all duration-500 ${activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                             <svg width="14" height="14" viewBox="0 0 20 20" className="text-[#754548] fill-current">
                                <circle cx="10" cy="10" r="4" style={{ filter: 'url(#pencil-dot)' }} />
                             </svg>
                        </div>

                        {/* Inactive Dot */}
                        <div className={`absolute -left-[23px] top-[14px] w-1.5 h-1.5 rounded-full bg-stone-300 transition-opacity duration-300 ${activeStep === index ? 'opacity-0' : 'opacity-100'}`}></div>

                        <div className="flex flex-col">
                            <h3 className={`font-serif text-3xl md:text-4xl transition-all duration-500 origin-left ${activeStep === index ? 'text-[#1c1917] italic translate-x-2' : 'text-stone-400'}`}>
                                {step.title}
                            </h3>
                            <p className={`text-stone-500 font-sans text-xs tracking-widest uppercase mt-2 transition-all duration-500 ${activeStep === index ? 'opacity-100 translate-x-2' : 'opacity-0 -translate-y-2 h-0 overflow-hidden'}`}>
                                {step.shortDesc}
                            </p>
                        </div>
                    </div>
                ))}
                </div>
             </div>
          </div>

          {/* Right Column: Detailed Content */}
          <div className="w-full lg:w-7/12 relative lg:h-[600px] flex items-center">
            {/* Visual Divider: Sketchy Line */}
            <div className="hidden lg:block absolute left-0 top-10 bottom-10 w-[1px] opacity-10">
                <svg height="100%" width="10" preserveAspectRatio="none">
                    <path d="M0,0 Q 5,300 0,800" stroke="#1c1917" strokeWidth="1" fill="none" vectorEffect="non-scaling-stroke" style={{ filter: 'url(#pencil-process)' }} />
                </svg>
            </div>

            <div className="w-full lg:pl-16">
               <div ref={contentRef} className="relative will-change-transform">
                     {/* Background Number Watermark - Organic positioning */}
                     <span className="absolute -top-32 -left-20 text-[16rem] font-serif text-[#754548] opacity-[0.03] select-none pointer-events-none font-italic leading-none mix-blend-multiply blur-[2px]">
                        {steps[activeStep].id}
                     </span>

                     <div className="relative z-10">
                         <div className="mb-8 flex items-end gap-4">
                            <span className="font-serif text-6xl text-[#754548] leading-none opacity-80">
                                {steps[activeStep].id}
                            </span>
                            <div className="h-[1px] w-20 bg-[#754548] mb-4 opacity-30"></div>
                         </div>
                         
                         <h3 className="text-3xl font-serif text-[#1c1917] mb-8 italic">
                            {steps[activeStep].title}
                         </h3>
                         
                         <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed font-serif max-w-xl">
                           {steps[activeStep].fullDesc}
                         </p>

                         {/* Decorative Signature/Stamp */}
                         <div className="mt-12 opacity-40 mix-blend-multiply">
                            <svg width="100" height="40" viewBox="0 0 100 40">
                                <path d="M10,20 Q30,5 50,20 T90,20" fill="none" stroke="#754548" strokeWidth="1" />
                            </svg>
                         </div>
                     </div>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* SVG Filters Definitions */}
      <svg className="absolute w-0 h-0">
        <defs>
            <filter id="pencil-process">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="pencil-dot">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
        </defs>
      </svg>
    </section>
  );
};

export default Process;