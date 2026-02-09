import React from 'react';
import { Instagram, ArrowUpRight, Twitter, Facebook } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white pt-24 md:pt-32 pb-12 font-sans overflow-hidden">
      
      {/* SEPARATOR: INVERTED CURVE FROM LIGHT (BOOKING SECTION) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-[#FAF7F7]">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="opacity-100"></path>
         </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 md:gap-y-16 border-b border-stone-800 pb-12 md:pb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-black text-xl flex-shrink-0">
                  W
                </div>
                {/* Tracking aumentado para estética editorial */}
                <h3 className="text-[10px] font-bold tracking-widest uppercase leading-loose text-stone-300">
                  INTERVENÇÕES ARTÍSTICAS ÚNICAS //<br/>
                  EXPERIÊNCIAS IMERSIVAS
                </h3>
              </div>
              
              {/* Uso do leading-luxury (2.0) para texto com muito respiro */}
              <p className="text-stone-500 text-sm leading-luxury max-w-sm mb-8 md:mb-12 font-light">
                Fundada por William Siqueira, unimos décadas de prática artística e visão neotradicional, redefinindo as possibilidades da arte na pele e no ambiente construído.
              </p>
            </div>
            
            <div className="space-y-4 text-sm text-stone-400">
              <p className="font-serif italic text-lg text-white">Estúdio Privado, São Paulo - SP</p>
              <a href="mailto:contato@wsart.com" className="block text-white hover:text-stone-300 transition-colors tracking-wide">hello@williamsiqueira.art</a>
              
              <div className="flex gap-4 mt-6 pt-6 border-t border-stone-800 w-fit">
                <Magnetic>
                    <a href="https://instagram.com" className="hover:text-white transition-colors p-2 -ml-2"><Instagram size={20} /></a>
                </Magnetic>
                <Magnetic>
                    <a href="https://twitter.com" className="hover:text-white transition-colors p-2"><Twitter size={20} /></a>
                </Magnetic>
                <Magnetic>
                    <a href="https://facebook.com" className="hover:text-white transition-colors p-2"><Facebook size={20} /></a>
                </Magnetic>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
             <h4 className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-8">Menu</h4>
             <ul className="space-y-4">
                <li><Link to="/" className="text-white hover:text-rose-300 transition-colors text-sm tracking-wide">Início</Link></li>
                <li><Link to="/processo" className="text-white hover:text-rose-300 transition-colors text-sm tracking-wide">Processo</Link></li>
                <li><a href="#gallery" className="text-white hover:text-rose-300 transition-colors text-sm tracking-wide">Portfólio</a></li>
                <li><a href="#booking" className="text-white hover:text-rose-300 transition-colors text-sm tracking-wide">Contato</a></li>
             </ul>
          </div>

          {/* Column 3: Legal / Extra */}
          <div className="lg:col-span-2">
             <h4 className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-8">Legal</h4>
             <ul className="space-y-4">
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm tracking-wide">Termos de Uso</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm tracking-wide">Privacidade</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm tracking-wide">Cuidados (FAQ)</a></li>
             </ul>
          </div>

          {/* Column 4: Newsletter / Action */}
          <div className="lg:col-span-3">
             <h4 className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-8">Fique Atualizado</h4>
             <p className="text-stone-400 text-xs leading-luxury mb-6">
                Novas aberturas de agenda e flash days exclusivos.
             </p>
             <form className="flex border-b border-stone-700 pb-2 group focus-within:border-white transition-colors">
                <input type="email" placeholder="Seu e-mail" className="bg-transparent border-none outline-none text-white placeholder-stone-600 text-sm w-full" />
                <button type="button" className="text-stone-400 hover:text-white transition-colors">
                   <ArrowUpRight size={18} />
                </button>
             </form>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-stone-600 text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} William Siqueira. All rights reserved.
           </p>
           <p className="text-stone-700 text-[10px] uppercase tracking-widest flex items-center gap-2">
              Designed with <span className="text-rose-900">♥</span> in SP
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;