import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    location: '',
    scale: '',
    concept: ''
  });

  const locations = [
    { id: 'arm', label: 'Braço / Antebraço' },
    { id: 'leg', label: 'Perna / Coxa' },
    { id: 'back', label: 'Costas' },
    { id: 'torso', label: 'Torso / Peito' },
    { id: 'other', label: 'Outro' }
  ];

  const scales = [
    { id: 'single', label: 'Peça Única (15cm+)' },
    { id: 'composition', label: 'Composição Média' },
    { id: 'full', label: 'Fechamento (Sleeve/Back)' }
  ];

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSelect = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    handleNext();
  };

  const handleWhatsappRedirect = () => {
    const message = `Olá William. Passei pelo Concierge Digital.\n\n📍 Local: ${data.location}\n📐 Escala: ${data.scale}\n💡 Ideia: ${data.concept || 'A definir'}\n\nGostaria de orçar um projeto exclusivo.`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#FAF7F7] w-full max-w-2xl rounded-sm overflow-hidden shadow-2xl flex flex-col min-h-[500px] animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-8 border-b border-stone-200">
           <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-[#754548] font-bold">Concierge Digital</span>
              <span className="font-serif text-2xl text-stone-900">
                 {step === 0 && "Onde será a arte?"}
                 {step === 1 && "Qual a escala?"}
                 {step === 2 && "Conceito Breve"}
              </span>
           </div>
           <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors">
              <X size={24} strokeWidth={1} />
           </button>
        </div>

        {/* Body */}
        <div className="flex-grow p-8 md:p-12 bg-white relative">
            
            {/* Step 0: Location */}
            {step === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {locations.map((loc) => (
                      <button 
                        key={loc.id}
                        onClick={() => handleSelect('location', loc.label)}
                        className="text-left p-6 border border-stone-100 hover:border-[#754548] hover:bg-stone-50 transition-all group"
                      >
                         <span className="block font-serif text-xl text-stone-700 group-hover:text-stone-900">{loc.label}</span>
                      </button>
                   ))}
                </div>
            )}

            {/* Step 1: Scale */}
            {step === 1 && (
                <div className="flex flex-col gap-4">
                   {scales.map((s) => (
                      <button 
                        key={s.id}
                        onClick={() => handleSelect('scale', s.label)}
                        className="text-left p-6 border border-stone-100 hover:border-[#754548] hover:bg-stone-50 transition-all group flex justify-between items-center"
                      >
                         <span className="block font-serif text-xl text-stone-700 group-hover:text-stone-900">{s.label}</span>
                         <ArrowRight size={18} className="text-stone-300 group-hover:text-[#754548]" />
                      </button>
                   ))}
                </div>
            )}

            {/* Step 2: Final / Concept */}
            {step === 2 && (
                <div className="flex flex-col h-full">
                    <p className="text-stone-500 mb-6 text-sm font-light">Se tiver uma ideia inicial, descreva brevemente (opcional). Ou apenas prossiga para conexão direta.</p>
                    <textarea 
                        className="w-full p-4 border border-stone-200 focus:border-[#754548] outline-none min-h-[120px] font-serif text-lg bg-stone-50 resize-none mb-8"
                        placeholder="Ex: Gostaria de representar resiliência com elementos florais..."
                        value={data.concept}
                        onChange={(e) => setData({...data, concept: e.target.value})}
                    />
                    
                    <button 
                        onClick={handleWhatsappRedirect}
                        className="mt-auto w-full py-5 bg-[#1c1917] text-white font-bold uppercase tracking-widest hover:bg-[#754548] transition-colors flex items-center justify-center gap-3"
                    >
                        Conectar via WhatsApp <MessageCircle size={18} />
                    </button>
                </div>
            )}

        </div>

        {/* Footer Navigation */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-between items-center">
             {step > 0 ? (
                 <button onClick={handleBack} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900">
                     <ArrowLeft size={14} /> Voltar
                 </button>
             ) : (
                 <span className="text-xs text-stone-300 uppercase tracking-widest">Passo 1 de 3</span>
             )}
             
             <div className="flex gap-2">
                 {[0, 1, 2].map(i => (
                     <div key={i} className={`h-1 w-8 rounded-full transition-colors ${i <= step ? 'bg-[#754548]' : 'bg-stone-200'}`}></div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;