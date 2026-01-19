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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
            <Reveal>
                <div className="flex justify-center mb-8">
                    <CheckCircle className="w-20 h-20 text-stone-900 stroke-[0.5]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Solicitação Enviada.</h3>
                <p className="text-stone-500 max-w-md mx-auto text-lg font-light leading-relaxed">
                    Agradeço o contato. Analisarei sua ideia pessoalmente e retornarei em breve para darmos vida a este projeto.
                </p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-[#754548] font-bold text-[10px] uppercase tracking-[0.25em] border-b border-[#754548] pb-1 hover:opacity-70 transition-opacity"
                >
                    Enviar nova solicitação
                </button>
            </Reveal>
        </div>
      </section>
    )
  }

  // Estilo comum para inputs minimalistas (Line Style)
  const inputClasses = (fieldName: string) => `
    w-full py-4 bg-transparent border-b transition-all duration-500 ease-out text-lg text-stone-900 font-serif placeholder:text-stone-300 focus:outline-none rounded-none
    ${focusedField === fieldName ? 'border-[#754548] pl-2' : 'border-stone-200'}
  `;

  const labelClasses = "block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-1";

  return (
    <section id="booking" className="py-32 md:py-48 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Agendamento" title="Inicie sua Jornada" />
        
        <div className="max-w-4xl mx-auto mt-20">
            
            {/* Contexto - Texto Editorial */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                <div className="md:col-span-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548] mb-4">
                        Informações Essenciais
                    </p>
                </div>
                <div className="md:col-span-8">
                    <p className="font-serif text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
                        Cada projeto é único. Para garantir a qualidade técnica e artística, trabalho apenas com designs autorais. 
                        O sinal de reserva é obrigatório para bloqueio da agenda.
                        <br/><br/>
                        <span className="text-sm font-sans text-stone-400 uppercase tracking-wider">Valor mínimo de saída: R$ 100,00</span>
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-16">
                
                {/* Grupo 1: Contato */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="relative group">
                        <label className={labelClasses}>Nome Completo</label>
                        <input 
                            type="text" name="name" required placeholder="Como prefere ser chamado"
                            className={inputClasses('name')}
                            onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                            value={formData.name} onChange={handleInputChange}
                        />
                    </div>
                    <div className="relative group">
                        <label className={labelClasses}>WhatsApp / Contato</label>
                        <input 
                            type="tel" name="phone" required placeholder="(00) 00000-0000"
                            className={inputClasses('phone')}
                            onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                            value={formData.phone} onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Grupo 2: Projeto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <label className={labelClasses}>Local do Corpo</label>
                        <input 
                            type="text" name="placement" required placeholder="Ex: Antebraço interno"
                            className={inputClasses('placement')}
                            onFocus={() => setFocusedField('placement')} onBlur={() => setFocusedField(null)}
                            value={formData.placement} onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>Tamanho Estimado (cm)</label>
                        <input 
                            type="text" name="sizeCm" required placeholder="Ex: 15cm x 10cm"
                            className={inputClasses('sizeCm')}
                            onFocus={() => setFocusedField('sizeCm')} onBlur={() => setFocusedField(null)}
                            value={formData.sizeCm} onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Descrição - Full Width */}
                <div>
                    <label className={labelClasses}>Conceito da Obra</label>
                    <textarea 
                        name="description" rows={1} required
                        placeholder="Descreva a história, elementos e sentimentos que deseja representar..."
                        className={`${inputClasses('description')} resize-none overflow-hidden min-h-[50px]`}
                        onFocus={(e) => { setFocusedField('description'); e.target.rows = 4; }} 
                        onBlur={(e) => { setFocusedField(null); if(!formData.description) e.target.rows = 1; }}
                        value={formData.description} onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* Upload Minimalista */}
                <div>
                     <label className={labelClasses}>Referência Visual (Opcional)</label>
                     <label className="flex items-center gap-4 cursor-pointer mt-4 group w-fit">
                        <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center group-hover:border-[#754548] group-hover:bg-[#754548] group-hover:text-white transition-all duration-300">
                            <Upload size={18} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm text-stone-500 group-hover:text-stone-900 transition-colors border-b border-transparent group-hover:border-stone-900 pb-px">
                            {formData.referenceFile ? formData.referenceFile.name : "Selecionar arquivo de referência"}
                        </span>
                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                     </label>
                </div>

                {/* Termos & Submit */}
                <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-start gap-3 max-w-sm">
                        <input 
                            type="checkbox" id="deposit" name="agreeToDeposit" required
                            checked={formData.agreeToDeposit} onChange={handleCheckboxChange}
                            className="mt-1 w-4 h-4 text-[#754548] border-stone-300 focus:ring-[#754548]"
                        />
                        <label htmlFor="deposit" className="text-xs text-stone-500 leading-relaxed">
                            Concordo que o pagamento de <strong>Sinal</strong> é necessário para reserva da data e início da criação.
                        </label>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative px-12 py-5 bg-stone-900 text-white overflow-hidden rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 w-0 bg-[#754548] transition-all duration-[600ms] ease-out group-hover:w-full"></div>
                        <div className="relative flex items-center gap-4">
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em]">
                                {isSubmitting ? "Processando..." : "Enviar Solicitação"}
                            </span>
                            {!isSubmitting && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                        </div>
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;