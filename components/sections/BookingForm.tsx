import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FormData } from '../../types';
import { CheckCircle, Loader2, ArrowRight } from 'lucide-react';
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

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToDeposit: e.target.checked }));
    if (errors.agreeToDeposit) {
        setErrors(prev => ({ ...prev, agreeToDeposit: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, referenceFile: e.target.files![0] }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.phone) newErrors.phone = "Contato é obrigatório";
    if (!formData.placement) newErrors.placement = "Local do corpo é obrigatório";
    if (!formData.sizeCm) newErrors.sizeCm = "Tamanho aproximado é obrigatório";
    if (!formData.description) newErrors.description = "Descreva sua ideia";
    if (!formData.agreeToDeposit) newErrors.agreeToDeposit = "É necessário concordar com a política";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

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

  // Styles for the giant editorial inputs
  const inputBaseClasses = "w-full py-4 bg-transparent border-b-2 border-stone-100 focus:border-pantone-sophisticated focus:outline-none transition-all duration-500 font-serif placeholder-stone-300 text-stone-900";
  const inputSizeLarge = "text-3xl md:text-5xl";
  const inputSizeMedium = "text-2xl md:text-3xl";

  return (
    <section id="booking" className="py-32 md:py-48 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 md:mb-32">
             <SectionTitle subtitle="Consultoria" title="Inicie seu Projeto" align="left" />
        </div>
        
        <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} noValidate className="space-y-16 md:space-y-24">
                
                {/* Section 1: Introduction */}
                <div>
                     <Reveal>
                        <div className="relative">
                            <input 
                                type="text" name="name" 
                                placeholder="Seu Nome Completo"
                                className={`${inputBaseClasses} ${inputSizeLarge}`}
                                value={formData.name} onChange={handleInputChange}
                            />
                            {errors.name && <p className="mt-2 text-xs text-rose-500 uppercase tracking-widest">{errors.name}</p>}
                        </div>
                     </Reveal>
                </div>

                {/* Section 2: Contact */}
                <div>
                    <Reveal delay={100}>
                        <div className="relative">
                            <input 
                                type="tel" name="phone" 
                                placeholder="WhatsApp ou Telefone"
                                className={`${inputBaseClasses} ${inputSizeLarge}`}
                                value={formData.phone} onChange={handleInputChange}
                            />
                            {errors.phone && <p className="mt-2 text-xs text-rose-500 uppercase tracking-widest">{errors.phone}</p>}
                        </div>
                    </Reveal>
                </div>

                {/* Section 3: The Project */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    <Reveal delay={200} width="100%">
                        <div className="relative">
                            <input 
                                type="text" name="placement" 
                                placeholder="Local do Corpo"
                                className={`${inputBaseClasses} ${inputSizeMedium}`}
                                value={formData.placement} onChange={handleInputChange}
                            />
                            {errors.placement && <p className="mt-2 text-xs text-rose-500 uppercase tracking-widest">{errors.placement}</p>}
                        </div>
                    </Reveal>
                    <Reveal delay={300} width="100%">
                        <div className="relative">
                            <input 
                                type="text" name="sizeCm" 
                                placeholder="Tamanho (cm)"
                                className={`${inputBaseClasses} ${inputSizeMedium}`}
                                value={formData.sizeCm} onChange={handleInputChange}
                            />
                             {errors.sizeCm && <p className="mt-2 text-xs text-rose-500 uppercase tracking-widest">{errors.sizeCm}</p>}
                        </div>
                    </Reveal>
                </div>

                {/* Section 4: The Vision */}
                <div>
                    <Reveal delay={400}>
                        <div className="relative">
                            <textarea 
                                name="description" rows={1} 
                                placeholder="Descreva sua ideia, elementos e simbolismos..."
                                className={`${inputBaseClasses} ${inputSizeLarge} resize-none overflow-hidden min-h-[80px]`}
                                style={{ height: 'auto' }}
                                onInput={(e) => {
                                    e.currentTarget.style.height = 'auto';
                                    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                }}
                                value={formData.description} onChange={handleInputChange}
                            ></textarea>
                            {errors.description && <p className="mt-2 text-xs text-rose-500 uppercase tracking-widest">{errors.description}</p>}
                        </div>
                    </Reveal>
                </div>

                {/* Section 5: Reference & Policies */}
                <Reveal delay={500}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-8 border-t border-stone-100">
                        
                        {/* File Upload - Text Only */}
                        <label className="cursor-pointer group flex items-center gap-4">
                             <div className="text-3xl text-stone-300 group-hover:text-pantone-sophisticated transition-colors">+</div>
                             <div className="flex flex-col">
                                 <span className="font-serif text-xl text-stone-500 group-hover:text-stone-900 transition-colors italic">
                                    {formData.referenceFile ? formData.referenceFile.name : "Adicionar Referência"}
                                 </span>
                                 <span className="text-[9px] uppercase tracking-widest text-stone-400">Jpg, Png (Max 5mb)</span>
                             </div>
                             <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                        </label>

                        {/* Checkbox */}
                        <div className="flex flex-col items-end gap-2">
                             <label className="flex items-center gap-3 cursor-pointer group">
                                <input 
                                    type="checkbox" name="agreeToDeposit" 
                                    checked={formData.agreeToDeposit} onChange={handleCheckboxChange}
                                    className="appearance-none w-5 h-5 border border-stone-300 checked:bg-pantone-sophisticated checked:border-pantone-sophisticated transition-colors cursor-pointer"
                                />
                                <span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">
                                    Concordo com o Sinal de Reserva
                                </span>
                             </label>
                             {errors.agreeToDeposit && <p className="text-xs text-rose-500 uppercase tracking-widest">{errors.agreeToDeposit}</p>}
                        </div>
                    </div>
                </Reveal>

                {/* Submit */}
                <Reveal delay={600}>
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto py-6 px-12 bg-stone-900 text-white hover:bg-pantone-sophisticated transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed mt-12"
                    >
                         <div className="flex items-center gap-4">
                            {isSubmitting ? (
                                <Loader2 className="animate-spin w-5 h-5" />
                            ) : (
                                <>
                                    <span className="text-xs font-bold uppercase tracking-[0.3em]">Enviar Solicitação</span>
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                         </div>
                    </button>
                </Reveal>

            </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;