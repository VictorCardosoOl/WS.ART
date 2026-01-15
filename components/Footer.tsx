import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            
            <div className="text-center md:text-left">
                <h2 className="font-serif text-3xl mb-2">William Siqueira</h2>
                <p className="text-stone-400 text-sm">Tattoo Artist & Visual Designer</p>
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
                <h3 className="font-serif text-lg text-rose-500">Contato</h3>
                <a href="mailto:contato@williamsiqueira.com" className="flex items-center justify-center md:justify-start gap-2 text-stone-300 hover:text-white transition-colors">
                    <Mail size={16} /> contato@williamsiqueira.com
                </a>
                <div className="flex items-center justify-center md:justify-start gap-2 text-stone-300">
                    <MapPin size={16} /> Estúdio Privado (Localização enviada após agendamento)
                </div>
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
                <h3 className="font-serif text-lg text-rose-500">Social</h3>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-stone-300 hover:text-white transition-colors">
                    <Instagram size={16} /> @williamsiqueira.tattoo
                </a>
            </div>

        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-stone-500 text-xs">
            <p>&copy; {new Date().getFullYear()} William Siqueira Tattoo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;