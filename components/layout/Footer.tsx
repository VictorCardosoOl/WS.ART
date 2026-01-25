import React from 'react';
import { Instagram, ArrowUpRight, MessageCircle, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-24 md:pt-32 pb-0 font-sans overflow-hidden">
      
      {/* Clean Separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-stone-800"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-stone-800 pb-16">
          
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-serif font-bold text-xl">W</div>
                <h3 className="font-sans text-meta font-bold text-stone-300">
                  INTERVENÇÕES ARTÍSTICAS ÚNICAS //<br/>EXPERIÊNCIAS IMERSIVAS
                </h3>
              </div>
              
              <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-12 font-light tracking-wide font-sans">
                Fundada por William Siqueira, unimos décadas de prática artística e visão neotradicional, redefinindo as possibilidades da arte na pele.
              </p>
            </div>
            
            <div className="space-y-4 text-sm text-stone-400 font-light font-sans tracking-wide">
              <p>Estúdio Privado, São Paulo - SP</p>
              <a href="mailto:contato@wsart.com" className="block text-white hover:text-stone-300 transition-colors">hello@williamsiqueira.art</a>
              
              <div className="flex gap-4 mt-6 pt-6 border-t border-stone-800 w-fit">
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Nav */}
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
                className="group flex justify-between items-center py-5 border-b border-stone-800 first:border-t hover:pl-2 transition-all duration-300 cursor-pointer"
              >
                <span className="font-sans text-meta font-bold text-stone-300 group-hover:text-white">{link.name}</span>
                <ArrowUpRight size={16} className="text-stone-500 group-hover:text-white" />
              </a>
            ))}
             <a href="#booking" className="group flex justify-between items-center py-5 border-b border-stone-800 hover:pl-2 transition-all duration-300 cursor-pointer">
                <span className="font-sans text-meta font-bold text-white">ENTRE EM CONTATO</span>
                <ArrowUpRight size={16} className="text-white" />
              </a>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="font-serif text-fluid-h3 text-white leading-tight-editorial mb-6 uppercase tracking-tighter font-semibold">
              Pronto para dar início a uma sessão de descoberta?
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light font-sans tracking-wide">
              Compartilhe suas ideias conosco e começaremos a transformar sua visão em realidade hoje mesmo.
            </p>
            
            <div className="mt-auto flex justify-start md:justify-end">
               <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors group">
                 <span className="font-sans text-meta font-bold">Iniciar conversa</span>
                 <MessageCircle size={32} className="group-hover:scale-110 transition-transform"/>
               </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 pb-4 flex flex-col md:flex-row items-end justify-between relative">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-sans text-meta text-stone-500 mb-12 md:mb-0 w-full md:w-auto">
             <a href="#" className="hover:text-white transition-colors">Guia de cuidados</a>
             <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-white transition-colors">Termos e Condições</a>
          </div>
          
          <div className="w-full text-right">
             <h1 className="font-serif font-bold text-[18vw] leading-[0.7] text-stone-900 select-none pointer-events-none translate-y-2">
               SIQUEIRA
             </h1>
             <p className="font-sans text-[9px] uppercase tracking-widest text-stone-600 absolute bottom-4 right-0">© 2024 William Siqueira Art Ltd.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;