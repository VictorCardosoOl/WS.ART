import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20 pb-0 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 md:gap-y-16 border-b border-stone-800 pb-12 md:pb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-black text-xl flex-shrink-0">
                  W
                </div>
                <h3 className="text-xs font-bold tracking-widest uppercase leading-tight text-stone-300">
                  INTERVENÇÕES ARTÍSTICAS ÚNICAS //<br/>
                  EXPERIÊNCIAS IMERSIVAS
                </h3>
              </div>
              
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-8 md:mb-12">
                Fundada por William Siqueira, unimos décadas de prática artística e visão neotradicional, redefinindo as possibilidades da arte na pele e no ambiente construído.
              </p>
            </div>
            
            <div className="space-y-4 text-sm text-stone-400">
              <p>Estúdio Privado, São Paulo - SP</p>
              <a href="mailto:contato@wsart.com" className="block text-white hover:text-stone-300 transition-colors">hello@williamsiqueira.art</a>
              
              <div className="flex gap-4 mt-6 pt-6 border-t border-stone-800 w-fit">
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-4 flex flex-col">
            {[
              { name: 'INÍCIO', href: '#' },
              { name: 'PROJETOS', href: '#gallery' },
              { name: 'O QUE FAZEMOS', href: '#about' },
              { name: 'ÚLTIMAS NOTÍCIAS', href: '#flashday' },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className="group flex justify-between items-center py-5 md:py-6 border-b border-stone-800 first:border-t hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-stone-300 group-hover:text-white">{link.name}</span>
                <ArrowUpRight size={16} className="text-stone-500 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
             <a 
                href="#booking"
                className="group flex justify-between items-center py-5 md:py-6 border-b border-stone-800 hover:pl-4 transition-all duration-300 cursor-pointer"
              >
                <span className="tracking-[0.2em] uppercase text-xs font-bold text-white">ENTRE EM CONTATO</span>
                <ArrowUpRight size={16} className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
          </div>

          {/* Column 3: CTA */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-4 md:mb-6">
              Pronto para dar início a uma sessão de descoberta?
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Compartilhe suas ideias conosco e começaremos a transformar sua visão em realidade hoje mesmo.
            </p>
            
            <div className="mt-auto flex justify-start md:justify-end">
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
        <div className="pt-10 md:pt-12 flex flex-col md:flex-row items-end justify-between relative">
          
          {/* Small Links Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[10px] uppercase tracking-wider text-stone-500 mb-12 md:mb-16 w-full md:w-auto relative z-10">
             <a href="#" className="hover:text-white transition-colors">Guia de cuidados</a>
             <a href="#" className="hover:text-white transition-colors">Showroom</a>
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
             <a href="#" className="hover:text-white transition-colors">Devoluções</a>
             <a href="#" className="hover:text-white transition-colors">Garantia</a>
          </div>
          
          {/* Massive Brand Name - SIQUEIRA with Q Safe Zone */}
          <div className="w-full text-right relative h-auto overflow-visible pb-2 md:pb-4">
             {/* Adjusted text size to scale on mobile (~17vw) and desktop to avoid cutoff */}
             <h1 className="text-[17vw] leading-[0.75] font-black text-white tracking-tighter mix-blend-difference select-none pointer-events-none translate-y-[5%]">
               SIQUEIRA
             </h1>
             <div className="absolute bottom-6 md:bottom-12 left-0 md:left-auto md:right-0 w-full md:w-auto text-center md:text-right z-20">
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone-600">© 2024 William Siqueira Art Ltd.</p>
             </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;