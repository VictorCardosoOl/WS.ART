import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FormData } from '../../types';
import { Upload, CheckCircle, ArrowRight, AlertTriangle, Loader2 } from 'lucide-react';
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

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreeToDeposit: e.target.checked }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Security: Validate file type and size here in a real scenario
      setFormData(prev => ({ ...prev, referenceFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToDeposit) return;
    
    setStatus('submitting');
    
    try {
      // Simulation of API call with error boundary
      await new Promise((resolve, reject) => {
          setTimeout(() => {
              // Simulate success (replace with actual fetch)
              resolve(true); 
          }, 2000);
      });
      setStatus('success');
    } catch (error) {
      console.error("Submission failed safely:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="booking" className="py-40 bg-white">
        <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 text-center">
            <Reveal>
                <div className="flex justify-center mb-8">
                    <CheckCircle className="w-20 h-20 text-stone-900 stroke-[0.5]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Solicitação Enviada.</h3>
                <p className="text-stone-500 max-w-md mx-auto text-lg font-light leading-relaxed">
                    Agradeço o contato. Analisarei sua ideia pessoalmente e retornarei em breve para darmos vida a este projeto.
                </p>
                <button 
                    onClick={() => {
                        setFormData({
                            name: '', email: '', phone: '', placement: '', sizeCm: '', description: '', referenceFile: null, agreeToDeposit: false
                        });
                        setStatus('idle');
                    }}
                    className="mt-12 text-[#754548] font-bold text-[10px] uppercase tracking-[0.25em] border-b border-[#754548] pb-1 hover:opacity-70 transition-opacity"
                >
                    Enviar nova solicitação
                </button>
            </Reveal>
        </div>
      </section>
    );
  }

  const inputClasses = (fieldName: string) => `
    w-full py-4 bg-transparent border-b transition-all duration-500 ease-out text-lg text-stone-900 font-serif placeholder:text-stone-300 focus:outline-none rounded-none appearance-none
    ${focusedField === fieldName ? 'border-[#754548] pl-2' : 'border-stone-200'}
  `;

  const labelClasses = "block text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-1";

  return (
    <section id="booking" className="py-32 md:py-48 bg-white scroll-mt-20">
      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20">
        <SectionTitle subtitle="Agendamento" title="Inicie sua Jornada" />
        
        <div className="max-w-4xl mx-auto mt-20">
            
            {/* Context/Disclaimer */}
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

            <form onSubmit={handleSubmit} className="space-y-16" noValidate>
                
                {/* Contact Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="relative group">
                        <label htmlFor="name" className={labelClasses}>Nome Completo</label>
                        <input 
                            id="name" type="text" name="name" required placeholder="Como prefere ser chamado"
                            className={inputClasses('name')}
                            onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                            value={formData.name} onChange={handleInputChange}
                        />
                    </div>
                    <div className="relative group">
                        <label htmlFor="phone" className={labelClasses}>WhatsApp / Contato</label>
                        <input 
                            id="phone" type="tel" name="phone" required placeholder="(00) 00000-0000"
                            className={inputClasses('phone')}
                            onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                            value={formData.phone} onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Project Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <label htmlFor="placement" className={labelClasses}>Local do Corpo</label>
                        <input 
                            id="placement" type="text" name="placement" required placeholder="Ex: Antebraço interno"
                            className={inputClasses('placement')}
                            onFocus={() => setFocusedField('placement')} onBlur={() => setFocusedField(null)}
                            value={formData.placement} onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="sizeCm" className={labelClasses}>Tamanho Estimado (cm)</label>
                        <input 
                            id="sizeCm" type="text" name="sizeCm" required placeholder="Ex: 15cm x 10cm"
                            className={inputClasses('sizeCm')}
                            onFocus={() => setFocusedField('sizeCm')} onBlur={() => setFocusedField(null)}
                            value={formData.sizeCm} onChange={handleInputChange}
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className={labelClasses}>Conceito da Obra</label>
                    <textarea 
                        id="description" name="description" rows={1} required
                        placeholder="Descreva a história, elementos e sentimentos que deseja representar..."
                        className={`${inputClasses('description')} resize-none overflow-hidden min-h-[50px]`}
                        onFocus={(e) => { setFocusedField('description'); e.target.rows = 4; }} 
                        onBlur={(e) => { setFocusedField(null); if(!formData.description) e.target.rows = 1; }}
                        value={formData.description} onChange={handleInputChange}
                    ></textarea>
                </div>

                {/* File Upload */}
                <div>
                     <span className={labelClasses}>Referência Visual (Opcional)</span>
                     <label htmlFor="file-upload" className="flex items-center gap-4 cursor-pointer mt-4 group w-fit">
                        <div className="w-12 h-12 border border-stone-300 rounded-full flex items-center justify-center group-hover:border-[#754548] group-hover:bg-[#754548] group-hover:text-white transition-all duration-300">
                            <Upload size={18} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm text-stone-500 group-hover:text-stone-900 transition-colors border-b border-transparent group-hover:border-stone-900 pb-px">
                            {formData.referenceFile ? formData.referenceFile.name : "Selecionar arquivo de referência"}
                        </span>
                        <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                     </label>
                </div>

                {/* Terms & Submit */}
                <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-start gap-3 max-w-sm">
                        <input 
                            type="checkbox" id="deposit" name="agreeToDeposit" required
                            checked={formData.agreeToDeposit} onChange={handleCheckboxChange}
                            className="mt-1 w-4 h-4 text-[#754548] border-stone-300 focus:ring-[#754548] cursor-pointer"
                        />
                        <label htmlFor="deposit" className="text-xs text-stone-500 leading-relaxed cursor-pointer select-none">
                            Concordo que o pagamento de <strong>Sinal</strong> é necessário para reserva da data e início da criação.
                        </label>
                    </div>

                    <button 
                        type="submit"
                        disabled={status === 'submitting' || !formData.agreeToDeposit}
                        className="group relative px-12 py-5 bg-stone-900 text-white overflow-hidden rounded-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <div className="absolute inset-0 w-0 bg-[#754548] transition-all duration-[600ms] ease-out group-hover:w-full"></div>
                        <div className="relative flex items-center gap-4">
                            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em]">
                                {status === 'submitting' ? "Processando..." : "Enviar Solicitação"}
                            </span>
                            {status !== 'submitting' && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
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