import { Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const whatsappUrl = 'https://wa.me/5516981699137?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20J2FX.';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    interest: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    newsletter: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const applyStoredInterest = () => {
      const selectedInterest = window.sessionStorage.getItem('j2fx-selected-interest');

      if (selectedInterest) {
        setFormData(prev => ({
          ...prev,
          interest: selectedInterest,
          message: prev.message || `Tenho interesse em ${selectedInterest}. Gostaria de saber mais detalhes.`,
        }));
      }
    };

    applyStoredInterest();
    window.addEventListener('j2fx-interest-selected', applyStoredInterest);

    return () => {
      window.removeEventListener('j2fx-interest-selected', applyStoredInterest);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const nextValue = type === 'checkbox' && e.target instanceof HTMLInputElement
      ? e.target.checked ? 'sim' : ''
      : value;

    setFormData(prev => ({ ...prev, [name]: nextValue }));
  };

  const encode = (data: Record<string, string>) => {
    return new URLSearchParams(data).toString();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar formulário');
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        interest: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        message: '',
        newsletter: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitError('Não foi possível enviar agora. Tente novamente ou chame pelo WhatsApp.');
    }
  };

  return (
    <section id="contact" className="section-padding bg-[linear-gradient(135deg,#07111d_0%,#0f1419_55%,#123653_100%)] text-white">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-accent">Contato</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Solicite um diagnóstico gratuito da sua estrutura de TI
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              Conte rapidamente o cenário da empresa. A J2FX retorna com uma leitura inicial e o melhor próximo passo para infraestrutura, segurança, cloud ou suporte.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-white/10">
                  <Mail className="text-j2fx-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-300">contato@j2fx.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-white/10">
                  <MessageSquare className="text-j2fx-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp Business</h3>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-white"
                  >
                    Fale com um especialista
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-white/10">
                  <ShieldCheck className="text-j2fx-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Próximo passo claro</h3>
                  <p className="text-slate-300">Resposta inicial com direcionamento em até 24h úteis.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white p-6 text-j2fx-ink shadow-2xl md:p-8">
            <h3 className="mb-2 text-2xl font-bold">Agendar diagnóstico</h3>
            <p className="mb-6 text-slate-600">Preencha os dados para a J2FX entender seu cenário.</p>

            {submitSuccess ? (
              <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-emerald-700">
                  Recebemos sua solicitação. Entraremos em contato em até 24h úteis.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Não preencha este campo: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="interest" className="mb-1 block text-sm font-semibold text-slate-700">Tenho interesse em</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30"
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="Infraestrutura, cloud e suporte">Infraestrutura, cloud e suporte</option>
                      <option value="Chatbot imobiliário">Chatbot imobiliário</option>
                      <option value="Controle de vendas">Controle de vendas</option>
                      <option value="Perfect Teams">Perfect Teams</option>
                      <option value="Chatbot para reservas em restaurantes">Chatbot para reservas em restaurantes</option>
                      <option value="Outro projeto ou automação">Outro projeto ou automação</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">Nome</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-slate-700">Telefone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-semibold text-slate-700">Empresa</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="role" className="mb-1 block text-sm font-semibold text-slate-700">Cargo</label>
                    <input id="role" name="role" value={formData.role} onChange={handleChange} className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30" />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte o principal desafio: instabilidade, cloud, segurança, backup, suporte ou crescimento da operação."
                    className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-j2fx-medium focus:outline-none focus:ring-2 focus:ring-j2fx-accent/30"
                    required
                  />
                </div>

                <label className="mt-4 flex items-start gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter === 'sim'}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-j2fx-medium focus:ring-j2fx-accent"
                  />
                  Desejo receber atualizações sobre tecnologia, segurança e infraestrutura.
                </label>

                {submitError && (
                  <div className="mt-5 rounded-md border border-red-200 bg-red-50 p-4">
                    <p className="text-red-700">{submitError}</p>
                  </div>
                )}

                <Button type="submit" className="mt-6 h-12 w-full rounded-md bg-j2fx-medium font-semibold text-white hover:bg-j2fx-ink" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico gratuito'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
