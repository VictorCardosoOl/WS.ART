import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 md:py-24 font-sans text-sm relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-stone-800 pb-16 mb-16">
          
          {/* Column 1: Brand Identity & Contact */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              {/* Circular Icon/Logo placeholder matching reference */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl mb-6">
                W
              </div>
              <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-4">
                Intervenções Artísticas Únicas //<br/>
                Tatuagem Neotradicional
              </h3>
              <p className="text-stone-500 leading-relaxed max-w-sm text-sm">
                Fundada por William Siqueira, unimos técnica clássica e visão contemporânea, 
                redefinindo as possibilidades da arte na pele. Cada projeto é uma colaboração única.
              </p>
            </div>
            
            <div className="space-y-2 text-xs uppercase tracking-wide">
              <p className="text-white">Estúdio Privado</p>
              <p>São Paulo, SP - Brasil</p>
              <a href="mailto:contato@wsart.com" className="block hover:text-white transition-colors mt-4 lowercase">hello@williamsiqueira.art</a>
              
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Stacked with borders) */}
          <div className="lg:col-span-4 flex flex-col">
            {[
              { name: 'SOBRE', href: '#about' },
              { name: 'GALERIA', href: '#gallery' },
              { name: 'FLASH DAY', href: '#flashday' },
              { name: 'DÚVIDAS', href: '#faq' },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className="group flex justify-between items-center py-5 border-b border-stone-800 first:border-t hover:text-white transition-colors"
              >
                <span className="tracking-widest uppercase text-xs font-bold">{link.name}</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-0 group-hover:opacity-100" />
              </a>
            ))}
             <a 
                href="#booking"
                className="group flex justify-between items-center py-5 border-b border-stone-800 hover:text-white transition-colors"
              >
                <span className="tracking-widest uppercase text-xs font-bold text-white">ENTRE EM CONTATO</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-0 group-hover:opacity-100" />
              </a>
          </div>

          {/* Column 3: Big CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight mb-6">
                Pronto para dar início a uma sessão de descoberta?
              </h2>
              <p className="text-stone-500 text-sm mb-8">
                Compartilhe suas ideias conosco e começaremos a transformar sua visão em realidade hoje mesmo.
              </p>
            </div>
            
            <div className="flex justify-end relative">
               <div className="fixed bottom-8 right-8 z-50">
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors animate-bounce"
                  >
                    <MessageCircle size={28} />
                  </a>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 text-xs uppercase tracking-wide text-stone-600 mb-8 md:mb-0">
             <a href="#" className="hover:text-stone-400">Guia de cuidados</a>
             <a href="#" className="hover:text-stone-400">Showroom</a>
             <a href="#" className="hover:text-stone-400">Contate-nos</a>
             <a href="#" className="hover:text-stone-400">Aluguel de móveis</a>
             <a href="#" className="hover:text-stone-400">Devoluções e reembolsos</a>
             <a href="#" className="hover:text-stone-400">Programa Comercial</a>
             <a href="#" className="hover:text-stone-400">Garantia</a>
          </div>
          
          <div className="text-right">
             <h1 className="text-[12vw] md:text-[14vw] font-black text-white leading-none tracking-tighter mix-blend-difference opacity-90 select-none pointer-events-none">
               SIQUEIRA
             </h1>
             <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-stone-600 mt-2">
                <span>© 2024 William Siqueira Art Ltd.</span>
                <span>Termos e Condições</span>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;