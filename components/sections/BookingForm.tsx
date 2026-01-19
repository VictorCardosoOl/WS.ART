import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FormData } from '../../types';
import { AlertTriangle, Upload, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    placement: '',
    sizeCm: '',
    description: '',
    referenceFile: null,
    agreeToDeposit: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToDeposit: e.target.checked }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, referenceFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
            <Reveal>
              <div className="flex justify-center mb-8">
                  <CheckCircle className="w-12 h-12 text-stone-900 stroke-1" />
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 italic">Solicitação Recebida</h3>
              <p className="text-stone-500 max-w-md mx-auto text-sm leading-relaxed tracking-wide">
                  Obrigado pelo interesse. Sua visão está sendo analisada. Entrarei em contato em breve para darmos vida a este projeto.
              </p>
              <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-[10px] uppercase tracking-[0.25em] font-bold text-pantone-sophisticated border-b border-pantone-sophisticated pb-1 hover:opacity-70 transition-opacity"
              >
                  Iniciar nova consulta
              </button>
            </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-32 md:py-48 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 md:mb-32">
             <SectionTitle subtitle="Consultoria" title="Inicie seu Projeto" align="left" />
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Info Column */}
            <div className="lg:col-span-4">
                <Reveal>
                    <div className="bg-[#FAF7F7] p-8 md:p-10 rounded-sm">
                        <div className="flex items-start gap-4 mb-6">
                            <AlertTriangle className="text-pantone-sophisticated w-5 h-5 flex-shrink-0 mt-1 stroke-1" />
                            <h4 className="font-serif text-xl text-stone-900 italic">Protocolo</h4>
                        </div>
                        <ul className="space-y-6 text-stone-500 text-sm font-light leading-relaxed">
                            <li className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Mínimo</span>
                                <span>Valor de saída: R$ 100,00</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Reserva</span>
                                <span>Pagamento de sinal obrigatório para bloqueio de agenda.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Estilo</span>
                                <span>Foco exclusivo em Neotradicional e Autoral.</span>
                            </li>
                        </ul>
                    </div>
                </Reveal>
            </div>

            {/* Form Column - Minimalist Style */}
            <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                    
                    {/* Group 1: Identity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        <div className="group relative">
                            <input 
                                type="text" name="name" required placeholder=" "
                                className="peer w-full py-4 bg-transparent border-b border-stone-200 focus:border-pantone-sophisticated focus:outline-none transition-colors text-stone-800 text-lg font-serif placeholder-transparent"
                                value={formData.name} onChange={handleInputChange}
                            />
                            <label className="absolute left-0 -top-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-stone-300 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-pantone-sophisticated">
                                Nome Completo
                            </label>
                        </div>
                        <div className="group relative">
                            <input 
                                type="tel" name="phone" required placeholder=" "
                                className="peer w-full py-4 bg-transparent border-b border-stone-200 focus:border-pantone-sophisticated focus:outline-none transition-colors text-stone-800 text-lg font-serif placeholder-transparent"
                                value={formData.phone} onChange={handleInputChange}
                            />
                            <label className="absolute left-0 -top-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-stone-300 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-pantone-sophisticated">
                                WhatsApp
                            </label>
                        </div>
                    </div>

                    {/* Group 2: Anatomy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        <div className="group relative">
                            <input 
                                type="text" name="placement" required placeholder=" "
                                className="peer w-full py-4 bg-transparent border-b border-stone-200 focus:border-pantone-sophisticated focus:outline-none transition-colors text-stone-800 text-lg font-serif placeholder-transparent"
                                value={formData.placement} onChange={handleInputChange}
                            />
                            <label className="absolute left-0 -top-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-stone-300 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-pantone-sophisticated">
                                Local do Corpo
                            </label>
                        </div>
                        <div className="group relative">
                            <input 
                                type="text" name="sizeCm" required placeholder=" "
                                className="peer w-full py-4 bg-transparent border-b border-stone-200 focus:border-pantone-sophisticated focus:outline-none transition-colors text-stone-800 text-lg font-serif placeholder-transparent"
                                value={formData.sizeCm} onChange={handleInputChange}
                            />
                            <label className="absolute left-0 -top-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-stone-300 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-pantone-sophisticated">
                                Tamanho (cm)
                            </label>
                        </div>
                    </div>

                    {/* Group 3: Concept */}
                    <div className="group relative">
                        <textarea 
                            name="description" rows={1} required placeholder=" "
                            className="peer w-full py-4 bg-transparent border-b border-stone-200 focus:border-pantone-sophisticated focus:outline-none transition-colors text-stone-800 text-lg font-serif placeholder-transparent resize-y min-h-[60px]"
                            value={formData.description} onChange={handleInputChange}
                        ></textarea>
                        <label className="absolute left-0 -top-3 text-[10px] uppercase tracking-widest font-bold text-stone-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:text-stone-300 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-pantone-sophisticated">
                            Descrição do Conceito
                        </label>
                    </div>

                    <div className="pt-4">
                        <label className="flex flex-col md:flex-row items-center gap-6 cursor-pointer group">
                            <div className="w-full md:w-auto h-16 px-8 border border-dashed border-stone-300 group-hover:border-pantone-sophisticated rounded-sm flex items-center justify-center transition-colors bg-stone-50/50">
                                <Upload className="w-5 h-5 text-stone-400 group-hover:text-pantone-sophisticated transition-colors" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 block mb-1">Referência Visual</span>
                                <span className="text-sm text-stone-600 font-serif italic">
                                    {formData.referenceFile ? formData.referenceFile.name : "Anexar imagens de inspiração"}
                                </span>
                            </div>
                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                        </label>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <input 
                            type="checkbox" id="deposit" name="agreeToDeposit" required
                            checked={formData.agreeToDeposit} onChange={handleCheckboxChange}
                            className="w-4 h-4 text-pantone-sophisticated border-stone-300 rounded-sm focus:ring-0 cursor-pointer"
                        />
                        <label htmlFor="deposit" className="text-xs text-stone-500 tracking-wide cursor-pointer select-none">
                            Concordo com a política de <strong>Sinal para Reserva</strong>.
                        </label>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group relative py-6 bg-stone-900 text-white overflow-hidden disabled:bg-stone-300 disabled:cursor-not-allowed mt-8 transition-all hover:bg-pantone-sophisticated"
                    >
                         <div className="relative z-10 flex items-center justify-center gap-3">
                            {isSubmitting ? (
                                <Loader2 className="animate-spin w-4 h-4" />
                            ) : (
                                <>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Enviar Solicitação</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                         </div>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;