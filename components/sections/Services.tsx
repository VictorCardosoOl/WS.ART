import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../ui/Reveal';
import { SERVICES_ITEMS } from '../../data/services';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ service, index }: { service: typeof SERVICES_ITEMS[0], index: number }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 md:py-24 border-t border-stone-200 first:border-t-0">
        <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-sm mb-8 group cursor-none">
            <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            
            {/* Overlay Title on Image (Mobile Only) */}
            <div className="absolute bottom-6 left-6 md:hidden">
                <span className="text-[10px] uppercase tracking-widest text-white bg-black/50 px-2 py-1 backdrop-blur-md">
                    0{index + 1} — {service.title}
                </span>
            </div>
        </div>

        <div className="flex flex-col gap-6 pr-0 md:pr-12">
            <h3 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight block md:hidden">
                {service.title}
            </h3>
            <p className="text-stone-600 font-serif text-lg md:text-xl leading-relaxed max-w-xl">
                {service.details}
            </p>
            <ul className="flex flex-wrap gap-3 mt-2">
                <li className="text-[10px] font-bold uppercase tracking-widest text-stone-400 border border-stone-200 px-3 py-1 rounded-full">
                    {service.description}
                </li>
                <li className="text-[10px] font-bold uppercase tracking-widest text-[#754548] border border-[#754548]/30 px-3 py-1 rounded-full flex items-center gap-1">
                    Saiba mais <ArrowUpRight size={10} />
                </li>
            </ul>
        </div>
    </div>
  );
};

const Services: React.FC = () => {
  const containerRef = useRef(null);
  
  return (
    <section id="services" className="bg-[#FDFBF7] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row" ref={containerRef}>
            
            {/* LADO ESQUERDO: STICKY NAVIGATION & TITLES */}
            <div className="hidden lg:flex w-1/2 h-screen sticky top-0 flex-col justify-between py-24 pl-4 pr-20 border-r border-[#754548]/5">
                
                {/* Header */}
                <div className="relative">
                    <Reveal>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] block mb-6">
                            Expertise & Técnica
                        </span>
                        <h2 className="text-7xl xl:text-8xl font-serif text-stone-900 leading-[0.85] tracking-tighter">
                            Nossas<br/>
                            <span className="italic text-stone-300">Vertentes.</span>
                        </h2>
                    </Reveal>

                    <div className="mt-12 space-y-2">
                        {SERVICES_ITEMS.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-[10px] font-mono text-[#754548]">0{idx + 1}</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-stone-900 group-hover:translate-x-2 transition-transform duration-300">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Decorativo */}
                <div className="flex items-end justify-between">
                    <div className="w-24 h-[1px] bg-stone-300"></div>
                    <p className="text-[10px] text-stone-400 max-w-[150px] text-right leading-relaxed">
                        Abordagem artística focada em longevidade e harmonia anatômica.
                    </p>
                </div>
            </div>

            {/* LADO DIREITO: SCROLLABLE CONTENT */}
            <div className="w-full lg:w-1/2 lg:pl-20">
                {/* Mobile Header */}
                <div className="lg:hidden pt-24 pb-12">
                     <Reveal>
                        <h2 className="text-5xl font-serif text-stone-900 leading-none">
                            Especialidades<span className="text-[#754548]">.</span>
                        </h2>
                     </Reveal>
                </div>

                {SERVICES_ITEMS.map((service, index) => (
                    <Reveal key={index} width="100%">
                         <ServiceCard service={service} index={index} />
                    </Reveal>
                ))}

                {/* Spacer Final para respiro */}
                <div className="h-24"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Services;