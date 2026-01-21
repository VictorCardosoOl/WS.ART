import React from 'react';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';
import { Droplets, Moon, Ban, Shirt } from 'lucide-react';

const careItems = [
  {
    icon: <Droplets size={32} strokeWidth={1} />,
    title: "Hidratação Profunda",
    content: "Comece a hidratar a região da tatuagem 7 dias antes. Uma pele hidratada recebe melhor a tinta, reduz o trauma e facilita drasticamente a cicatrização."
  },
  {
    icon: <Moon size={32} strokeWidth={1} />,
    title: "Descanso Pleno",
    content: "Durma bem na noite anterior (8h+). O corpo precisa de energia para lidar com a sessão. Faça uma refeição reforçada antes de vir ao estúdio."
  },
  {
    icon: <Ban size={32} strokeWidth={1} />,
    title: "Zero Álcool",
    content: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    icon: <Shirt size={32} strokeWidth={1} />,
    title: "Vestimenta",
    content: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local."
  }
];

const PreCare: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Aligned Left as requested */}
        <div className="max-w-4xl mb-16 md:mb-24">
            <SectionTitle 
                subtitle="Cuidados Pré-Sessão" 
                title="Preparação" 
                align="left" 
            />
            <Reveal delay={200}>
                <p className="text-stone-500 max-w-lg mt-[-30px] leading-relaxed">
                    A qualidade da sua tatuagem depende 50% do artista e 50% da sua pele. Siga este guia para garantir o melhor resultado possível.
                </p>
            </Reveal>
        </div>

        {/* Grid Layout Redesign */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
           {careItems.map((item, index) => (
             <Reveal key={index} delay={index * 100} width="100%">
               <div className="group h-full bg-[#FAF7F7] p-8 md:p-10 rounded-3xl border border-transparent hover:border-pantone-accent/30 transition-all duration-500 hover:shadow-lg hover:bg-white">
                 <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white rounded-2xl text-pantone-ink group-hover:text-pantone-accent group-hover:bg-pantone-skin transition-colors duration-500 shadow-sm">
                        {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-hover:text-pantone-accent transition-colors">
                        0{index + 1}
                    </span>
                 </div>
                 
                 <h3 className="font-serif text-2xl md:text-3xl text-pantone-ink mb-4 group-hover:italic transition-all">
                    {item.title}
                 </h3>
                 
                 <p className="text-stone-600 font-sans leading-relaxed text-sm md:text-base font-light">
                    {item.content}
                 </p>
               </div>
             </Reveal>
           ))}
        </div>
      </div>
    </section>
  );
};

export default PreCare;