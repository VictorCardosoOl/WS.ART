import React from 'react';
import SectionTitle from './SectionTitle';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/400/600?random=1", category: "Neotraditional", title: "Lady Face" },
  { id: 2, src: "https://picsum.photos/400/400?random=2", category: "Color", title: "Floral Piece" },
  { id: 3, src: "https://picsum.photos/400/550?random=3", category: "Cover-up", title: "Tiger Back" },
  { id: 4, src: "https://picsum.photos/400/350?random=4", category: "Neotraditional", title: "Dagger" },
  { id: 5, src: "https://picsum.photos/400/650?random=5", category: "Concept", title: "Surrealism" },
  { id: 6, src: "https://picsum.photos/400/450?random=6", category: "Neotraditional", title: "Animal Portrait" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-rose-50">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Portfólio" title="Trabalhos Recentes" />
        
        <p className="text-center text-stone-500 max-w-2xl mx-auto mb-12">
          Peças autorais, coberturas e reformas. Cada projeto é único e desenvolvido exclusivamente para a anatomia do cliente.
        </p>

        {/* Masonry Layout using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="text-sm font-sans uppercase tracking-widest mt-2">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-800 border-b border-rose-500 pb-1 hover:text-rose-600 transition-colors">
             Ver mais no Instagram
           </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;