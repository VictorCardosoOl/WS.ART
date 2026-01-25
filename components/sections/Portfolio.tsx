import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Dados do Portfólio com configurações de Layout Específicas para criar o "Vazio"
const projects = [
  {
    id: "01",
    title: "Soul Connection",
    category: "Costas / Fine Line",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1200&auto=format&fit=crop",
    // Configurações de Grid (Tailwind)
    colSpan: "md:col-span-5", 
    startCol: "md:col-start-2",
    aspect: "aspect-[3/4]",
    marginTop: "mt-0", // Primeiro item
    parallaxSpeed: 0.5
  },
  {
    id: "02",
    title: "Botanical Flow",
    category: "Braço / Textura",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    startCol: "md:col-start-8",
    aspect: "aspect-[3/4]",
    marginTop: "md:mt-32", // Empurra para baixo criando vazio no topo
    parallaxSpeed: 1.2
  },
  {
    id: "03",
    title: "Abstract Geometry",
    category: "Torso / Conceitual",
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1600&auto=format&fit=crop",
    colSpan: "md:col-span-8", // Imagem Larga
    startCol: "md:col-start-3",
    aspect: "aspect-[16/9]",
    marginTop: "md:mt-48", // Muito espaço vazio antes desta
    parallaxSpeed: 0.8
  },
  {
    id: "04",
    title: "Dark Peonies",
    category: "Antebraço / Neotrad",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop",
    colSpan: "md:col-span-4",
    startCol: "md:col-start-2",
    aspect: "aspect-[4/5]",
    marginTop: "md:mt-24",
    parallaxSpeed: 0.6
  },
  {
    id: "05",
    title: "Serenity",
    category: "Ombro / Delicado",
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop",
    colSpan: "md:col-span-5",
    startCol: "md:col-start-7",
    aspect: "aspect-[3/4]",
    marginTop: "md:mt-64", // Grande gap vertical assimétrico
    parallaxSpeed: 1.1
  }
];

type Project = typeof projects[0];

const PortfolioItem: React.FC<{ project: Project }> = ({ project }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Efeito Parallax na Imagem (A imagem move dentro do container)
            if (imgRef.current && containerRef.current) {
                gsap.fromTo(imgRef.current, 
                    { scale: 1.2, yPercent: -10 },
                    { 
                        yPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div 
            ref={containerRef}
            className={`relative flex flex-col ${project.colSpan} ${project.startCol} ${project.marginTop} mb-12 md:mb-0`}
        >
            {/* Image Container */}
            <div className={`relative w-full ${project.aspect} overflow-hidden bg-stone-200 shadow-sm group`}>
                <img 
                    ref={imgRef}
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out will-change-transform"
                />
                
                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-[#754548]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply pointer-events-none"></div>

                {/* Corner Label */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                        <ArrowUpRight size={14} className="text-[#754548]" />
                    </div>
                </div>
            </div>

            {/* Typography Below Image */}
            <div className="mt-6 flex justify-between items-end border-b border-transparent hover:border-stone-200 pb-4 transition-colors duration-500 group cursor-pointer">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
                        {project.id} — {project.category}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-none group-hover:italic transition-all">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative bg-white pt-32 pb-48 overflow-hidden">
        
      {/* Background Typography Decoration (SENSITIVELY) */}
      <div className="absolute top-[15%] left-0 w-full pointer-events-none z-0 overflow-hidden select-none opacity-[0.04]">
          <h2 className="font-sans font-black text-[25vw] leading-[0.8] text-center tracking-tighter text-stone-900 mix-blend-multiply whitespace-nowrap">
              SENSITIVELY
          </h2>
      </div>

      <div className="absolute top-[28%] right-[10%] w-full pointer-events-none z-0 overflow-hidden select-none text-right pr-24">
          <h2 className="font-serif italic text-[8vw] leading-[0.8] text-[#754548] opacity-20">
              about you
          </h2>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Intro Text */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
             <Reveal>
                 <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[0.9]">
                    Acervo<br/>
                    <span className="text-[#754548] italic">Selecionado</span>
                 </h2>
             </Reveal>
             <Reveal delay={200}>
                 <p className="mt-8 md:mt-0 max-w-xs text-right text-stone-500 text-sm leading-relaxed">
                    Cada espaço vazio é proposital. Uma galeria respirável onde a arte e a anatomia dialogam sem ruído.
                 </p>
             </Reveal>
        </div>

        {/* The Scatter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            {projects.map((project, index) => (
                <PortfolioItem key={project.id} project={project} />
            ))}
        </div>

        {/* Footer Link */}
        <div className="mt-48 flex justify-center">
            <Reveal>
                <a href="https://instagram.com" className="group flex flex-col items-center gap-4">
                    <span className="font-serif text-2xl italic text-stone-400 group-hover:text-[#754548] transition-colors">Ver todos os projetos</span>
                    <div className="h-16 w-[1px] bg-stone-300 group-hover:h-24 group-hover:bg-[#754548] transition-all duration-500"></div>
                </a>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;