import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Twitter, Facebook } from 'lucide-react';
import Reveal from './Reveal';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-0 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-stone-800 pb-12 md:pb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-black text-xl flex-shrink-0">
                  W
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase leading-tight text-stone-300">
                  INTERVENÇÕES ARTÍSTICAS ÚNICAS //<br/>
                  EXPERIÊNCIAS IMERSIVAS
                </h3>
              </div>
              
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                Fundada por William Siqueira, unimos décadas de prática artística e visão neotradicional, redefinindo as possibilidades da arte na pele e no ambiente construído.
              </p>
            </div>
            
            <address className="not-italic space-y-4 text-sm text-stone-400">
              <p>Estúdio Privado, São Paulo - SP</p>
              <a href="mailto:contato@wsart.com" className="block text-white hover:text-stone-300 transition-colors">hello@williamsiqueira.art</a>
              
              <nav aria-label="Social Media" className="flex gap-4 mt-6 pt-6 border-t border-stone-800 w-fit">
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              </nav>
            </address>
          </div>

          {/* Column 2: Navigation Links */}
          <nav className="lg:col-span-4 flex flex-col" aria-label="Footer Navigation">
            {[
              { name: 'INÍCIO', href: '#' },
              { name: 'PROJETOS', href: '#gallery' },
              { name: 'O QUE FAZEMOS', href: '#about' },
              { name: 'ÚLTIMAS NOTÍCIAS', href: '#flashday' },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className="group flex justify-between items-center py-4 md:py-6 border-b border-stone-800 first:border-t hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-stone-300 group-hover:text-white">{link.name}</span>
                <ArrowUpRight size={16} className="text-stone-500 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
             <a 
                href="#booking"
                className="group flex justify-between items-center py-4 md:py-6 border-b border-stone-800 hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-white">ENTRE EM CONTATO</span>
                <ArrowUpRight size={16} className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
          </nav>

          {/* Column 3: CTA */}
          <div className="lg:col-span-4 flex flex-col md:items-start lg:items-end text-left lg:text-right">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-6">
              Pronto para dar início a uma sessão de descoberta?
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-xs">
              Compartilhe suas ideias conosco e começaremos a transformar sua visão em realidade hoje mesmo.
            </p>
            
            <div className="mt-auto">
               <a 
                 href="https://wa.me/5511999999999" 
                 target="_blank" 
                 rel="noreferrer"
                 className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors group"
               >
                 <span className="uppercase tracking-widest text-xs font-bold">Iniciar conversa</span>
                 <MessageCircle size={32} className="group-hover:scale-110 transition-transform"/>
               </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex flex-col md:flex-row items-end justify-between relative pb-4">
          
          {/* Small Links Grid - Stack on mobile, inline on desktop */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3 text-[10px] uppercase tracking-wider text-stone-500 mb-12 md:mb-16 w-full md:w-auto relative z-10 text-center md:text-left">
             <a href="#" className="hover:text-white transition-colors">Guia de cuidados</a>
             <a href="#" className="hover:text-white transition-colors">Showroom</a>
             <a href="#" className="hover:text-white transition-colors">Política</a>
             <a href="#" className="hover:text-white transition-colors">Termos</a>
             <a href="#" className="hover:text-white transition-colors">Devoluções</a>
             <a href="#" className="hover:text-white transition-colors">Garantia</a>
          </nav>
          
          {/* Massive Brand Name - Centered on Mobile, Right on Desktop */}
          <div className="w-full relative h-auto overflow-visible flex flex-col items-center md:items-end">
             <h1 className="text-[15vw] md:text-[17vw] leading-[0.75] font-black text-white tracking-tighter mix-blend-difference select-none pointer-events-none translate-y-[5%] text-center md:text-right w-full">
               SIQUEIRA
             </h1>
             <div className="w-full text-center md:text-right mt-4 md:mt-0 md:absolute md:bottom-12 md:right-0 z-20">
                <p className="text-[10px] uppercase tracking-widest text-stone-600">© 2024 William Siqueira Art Ltd.</p>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;