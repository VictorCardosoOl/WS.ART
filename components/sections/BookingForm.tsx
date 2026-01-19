import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FormData } from '../../types';
import { AlertTriangle, Upload, CheckCircle, Loader2 } from 'lucide-react';

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
      <section id="booking" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">Solicitação Enviada!</h3>
            <p className="text-stone-600 max-w-md mx-auto text-sm md:text-base">
                Obrigado pelo interesse. Analisarei sua ideia e entrarei em contato em breve para discutirmos os detalhes e o orçamento.
            </p>
            <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-rose-500 font-medium underline text-sm uppercase tracking-wide"
            >
                Enviar nova solicitação
            </button>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Agendamento" title="Solicite um Orçamento" />
        
        <div className="max-w-3xl mx-auto">
            {/* Warning Box */}
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 mb-10 rounded-r-lg">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                    <AlertTriangle className="text-rose-500 w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-serif text-lg font-bold text-rose-900 mb-2">Informações Importantes</h4>
                        <ul className="list-disc list-inside text-sm text-stone-700 space-y-2 leading-relaxed">
                            <li>Valor mínimo de saída: <strong>R$ 100,00</strong>.</li>
                            <li>Cobrança feita por desenho/tamanho/detalhe.</li>
                            <li>O pagamento do <strong>Sinal</strong> é obrigatório para reservar a data.</li>
                            <li>Não trabalho com Realismo, Lettering ou Mandalas.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Nome Completo</label>
                        <input 
                            type="text" name="name" required
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors text-base"
                            value={formData.name} onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">WhatsApp / Telefone</label>
                        <input 
                            type="tel" name="phone" required
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors text-base"
                            value={formData.phone} onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Local do Corpo</label>
                        <input 
                            type="text" name="placement" required placeholder="Ex: Antebraço"
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors text-base"
                            value={formData.placement} onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">Tamanho Aproximado (em CM)</label>
                        <input 
                            type="text" name="sizeCm" required placeholder="Ex: 15cm x 10cm"
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors text-base"
                            value={formData.sizeCm} onChange={handleInputChange}
                        />
                        <p className="text-xs text-rose-500 mt-1">Essencial para o orçamento.</p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Descrição da Ideia</label>
                    <textarea 
                        name="description" rows={4} required
                        placeholder="Descreva o conceito, elementos principais e estilo desejado..."
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 transition-colors text-base"
                        value={formData.description} onChange={handleInputChange}
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Referência Visual</label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-stone-300 border-dashed rounded-lg cursor-pointer bg-stone-50 hover:bg-stone-100 transition-colors">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                                <Upload className="w-8 h-8 mb-3 text-stone-400" />
                                <p className="text-sm text-stone-500">
                                    {formData.referenceFile ? formData.referenceFile.name : "Clique para enviar imagem"}
                                </p>
                            </div>
                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                        </label>
                    </div>
                </div>

                <div className="flex items-start gap-3 mt-4">
                    <input 
                        type="checkbox" id="deposit" name="agreeToDeposit" required
                        checked={formData.agreeToDeposit} onChange={handleCheckboxChange}
                        className="mt-1 w-5 h-5 md:w-4 md:h-4 text-rose-600 rounded border-stone-300 focus:ring-rose-500 flex-shrink-0"
                    />
                    <label htmlFor="deposit" className="text-sm text-stone-600 leading-tight">
                        Estou ciente de que o agendamento requer pagamento de <strong>Sinal</strong> (adiantamento) para reserva da data.
                    </label>
                </div>

                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-stone-900 text-white py-4 rounded font-sans uppercase tracking-widest hover:bg-rose-600 transition-all duration-300 shadow-lg mt-6 text-sm md:text-base font-bold disabled:bg-stone-400 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={18} />
                            Enviando...
                        </>
                    ) : (
                        "Enviar Solicitação"
                    )}
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;