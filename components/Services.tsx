import React from 'react';
import SectionTitle from './SectionTitle';
import { PenTool, Layers, Zap, Palette } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Projetos Autorais",
    description: "Criações exclusivas no estilo Neotradicional, desenvolvidas especificamente para a anatomia do seu corpo. Cada peça é única e desenhada do zero.",
    icon: PenTool
  },
  {
    title: "Coberturas (Cover-up)",
    description: "Resignificação de tatuagens antigas ou indesejadas. Utilizamos técnicas avançadas de pigmentação para transformar o passado em uma nova obra de arte.",
    icon: Layers
  },
  {
    title: "Flash Days",
    description: "Eventos periódicos com desenhos prontos e exclusivos. Uma oportunidade de colecionar peças menores com a mesma qualidade artística.",
    icon: Zap
  },
  {
    title: "Reformas",
    description: "Revitalização de trabalhos antigos que precisam de mais vida, contraste e definição, respeitando a ideia e os traços originais.",
    icon: Palette
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="O que fazemos" title="Especialidades" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 md:p-8 rounded-lg bg-stone-50 hover:bg-rose-50 transition-colors duration-500 border border-transparent hover:border-rose-100 group cursor-default">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-6 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 text-rose-500">
                <service.icon size={28} md:size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-stone-800 mb-3 md:mb-4">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;