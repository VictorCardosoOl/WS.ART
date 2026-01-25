import React, { useRef, useLayoutEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Droplets, Moon, Ban, Shirt } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const careItems = [
  {
    icon: <Droplets size={32} strokeWidth={1} />,
    title: "Hidratação",
    subtitle: "Preparação da tela",
    content: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta, reduz o trauma da agulha e facilita drasticamente a cicatrização posterior."
  },
  {
    icon: <Moon size={32} strokeWidth={1} />,
    title: "Descanso",
    subtitle: "Energia vital",
    content: "Durma bem na noite anterior (8h+). O corpo precisa de energia para lidar com a sessão. Faça uma refeição reforçada antes de vir ao estúdio para evitar quedas de pressão."
  },
  {
    icon: <Ban size={32} strokeWidth={1} />,
    title: "Zero Álcool",
    subtitle: "Coagulação sanguínea",
    content: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    icon: <Shirt size={32} strokeWidth={1} />,
    title: "Vestimenta",
    subtitle: "Conforto e acesso",
    content: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local e permitindo a circulação."
  }
];

const PreCare: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".precare-header", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );

      // Cards Animation (Staggered pop-up)
      const cards = gsap.utils.toArray('.precare-card');
      gsap.fromTo(cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-40 bg-[#F5F5F5] text-stone-900 relative overflow-hidden" id="precare">
      
      {/* GRADIENTE RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/40 via-[#F5F5F5] to-[#F5F5F5] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Gigante Editorial */}
        <div className="precare-header mb-32 md:mb-48 mt-12">
             <h2 className="font-sans font-medium text-7xl md:text-9xl tracking-tighter text-stone-900 leading-[0.8]">
                O Preparo
                <span className="block font-serif text-2xl md:text-4xl italic font-normal text-stone-500 mt-2 tracking-normal">
                    (guia essencial)
                </span>
            </h2>
        </div>

        {/* Grid de Colunas com Linhas */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
           {careItems.map((item, index) => (
               <div key={index} className="precare-card flex flex-col h-full group will-change-transform">
                 
                 <div className="flex items-center gap-3 mb-4">
                     <span className="text-pantone-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
                         {item.icon}
                     </span>
                     <span className="text-xs font-bold font-sans">0{index + 1}</span>
                 </div>

                 <h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-1 leading-none group-hover:text-pantone-accent transition-colors duration-300">
                    {item.title}
                 </h3>
                 <span className="text-sm text-stone-500 font-light mb-6 block font-sans">
                    {item.subtitle}
                 </span>

                 <div className="w-full h-[1px] bg-stone-300 mb-6 group-hover:bg-[#754548] transition-colors duration-500 origin-left group-hover:scale-x-110"></div>

                 <p className="text-sm leading-relaxed text-stone-600 font-sans max-w-xs">
                    {item.content}
                 </p>

               </div>
           ))}
        </div>

      </div>

      {/* SEPARATOR: SOFT WASH TO TESTIMONIALS (Rose-50) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#FAF7F7] pointer-events-none z-10"></div>
    </section>
  );
};

export default PreCare;