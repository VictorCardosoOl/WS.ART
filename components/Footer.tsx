import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative h-screen min-h-[700px] bg-stone-900 text-white flex flex-col justify-between font-sans overflow-hidden">
      
      <div className="container mx-auto px-6 pt-20 flex-grow flex flex-col">
        
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 flex-grow">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center text-white font-serif italic text-xl">
                W
              </div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase leading-tight text-stone-400">
                William Siqueira<br/>Art & Tattoo
              </h3>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-stone-100">
              Vamos criar algo <br/> <span className="text-rose-500 italic">único</span> juntos?
            </h2>

            <div className="mt-auto space-y-6">
               <a href="mailto:contato@wsart.com" className="text-xl md:text-2xl hover:text-rose-400 transition-colors block">
                 hello@williamsiqueira.art
               </a>
               
               <div className="flex gap-6">
                 <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Instagram size={18} /></a>
                 <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Twitter size={18} /></a>
                 <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all"><Facebook size={18} /></a>
               </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 lg:col-start-7 flex flex-col justify-center space-y-2">
            {[
              { name: 'Home', href: '#' },
              { name: 'Galeria', href: '#gallery' },
              { name: 'Sobre', href: '#about' },
              { name: 'Flash Day', href: '#flashday' },
              { name: 'FAQ', href: '#faq' },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className="group flex items-center gap-4 py-3 hover:pl-4 transition-all duration-300"
              >
                <span className="w-2 h-2 bg-stone-800 rounded-full group-hover:bg-rose-500 transition-colors"></span>
                <span className="text-2xl font-serif text-stone-400 group-hover:text-white group-hover:italic">{link.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3 flex flex-col justify-end items-start lg:items-end pb-10 lg:pb-0">
             <a 
               href="https://wa.me/5511999999999" 
               target="_blank" 
               rel="noreferrer"
               className="group relative inline-flex items-center gap-3 px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition-all duration-300"
             >
               <span className="uppercase tracking-widest text-xs font-bold">WhatsApp</span>
               <MessageCircle size={20} />
             </a>
          </div>
        </div>

      </div>

      {/* Bottom Big Text & Copyright - Separate container to avoid overlap */}
      <div className="relative w-full mt-auto">
         
         {/* Copyright Bar */}
         <div className="absolute top-0 left-0 w-full flex justify-between px-6 py-4 text-[10px] uppercase tracking-widest text-stone-500 z-20 border-t border-stone-800/50 backdrop-blur-sm bg-stone-900/10">
            <span>© 2024 William Siqueira</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos</a>
            </div>
         </div>

         {/* Big Text */}
         <h1 className="text-[17vw] leading-[0.75] font-black text-stone-800 text-center tracking-tighter select-none pointer-events-none transform translate-y-2 md:translate-y-4">
           SIQUEIRA
         </h1>
      </div>
    </footer>
  );
};

export default Footer;