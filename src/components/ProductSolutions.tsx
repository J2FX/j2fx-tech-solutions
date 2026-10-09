import {
  ArrowRight,
  Bot,
  Store,
  CalendarClock,
  ClipboardList,
  MessageSquare,
  Trophy,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Product = {
  icon: LucideIcon;
  segment: string;
  title: string;
  status: 'Disponível' | 'Em validação' | 'Sob demanda';
  description: string;
  outcomes: string[];
  interest: string;
  whatsappMessage: string;
  href: string;
  cta: string;
};

const products: Product[] = [
  {
    icon: Store,
    segment: 'Pequenos e médios negócios',
    title: 'Panific',
    status: 'Em validação',
    description: 'Ainda anota vendas no papel? Registre suas vendas, organize produtos e acompanhe o caixa pelo celular com o Panific, para negócios de diferentes segmentos.',
    outcomes: ['PDV e caixa', 'Produtos e categorias', 'Relatórios de vendas'],
    interest: 'Panific',
    whatsappMessage: 'Olá! Quero conhecer o Panific e agendar uma demonstração com a J2FX.',
    href: '/panific',
    cta: 'Conhecer Panific',
  },
  {
    icon: Bot,
    segment: 'Imobiliárias',
    title: 'Chatbot imobiliário',
    status: 'Disponível',
    description: 'Atendimento automático para captar interessados, responder dúvidas iniciais e direcionar leads de imóveis com mais velocidade.',
    outcomes: ['Captação de leads', 'Pré-atendimento', 'WhatsApp e site'],
    interest: 'Chatbot imobiliário',
    whatsappMessage: 'Olá! Quero saber mais sobre o chatbot imobiliário da J2FX.',
    href: '/bot-imobiliario-franca',
    cta: 'Ver solução',
  },
  {
    icon: ClipboardList,
    segment: 'Pequenos negócios',
    title: 'Controle de vendas',
    status: 'Em validação',
    description: 'App simples para acompanhar vendas, clientes, pagamentos e desempenho sem depender de planilhas difíceis de manter.',
    outcomes: ['Vendas do dia', 'Clientes e produtos', 'Resumo financeiro'],
    interest: 'Controle de vendas',
    whatsappMessage: 'Olá! Tenho interesse no app de controle de vendas para pequenos negócios.',
    href: '#contact',
    cta: 'Tenho interesse',
  },
  {
    icon: Trophy,
    segment: 'Esportes',
    title: 'Perfect Teams',
    status: 'Em validação',
    description: 'Organização de jogos com confirmação de presença, sorteio de times e apoio para grupos esportivos funcionarem com menos bagunça.',
    outcomes: ['Confirmação de jogadores', 'Sorteio equilibrado', 'Compartilhamento rápido'],
    interest: 'Perfect Teams',
    whatsappMessage: 'Olá! Quero saber mais sobre o Perfect Teams para organização de jogos.',
    href: '#contact',
    cta: 'Conhecer app',
  },
  {
    icon: CalendarClock,
    segment: 'Restaurantes',
    title: 'Chatbot para reservas',
    status: 'Sob demanda',
    description: 'Fluxo automatizado para receber pedidos de reserva, confirmar horários e reduzir tempo gasto no atendimento repetitivo.',
    outcomes: ['Reservas por WhatsApp', 'Confirmação de horário', 'Atendimento inicial'],
    interest: 'Chatbot para reservas em restaurantes',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o chatbot para reservas em restaurantes.',
    href: '#contact',
    cta: 'Explorar ideia',
  },
];

const statusStyles: Record<Product['status'], string> = {
  Disponível: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'Em validação': 'bg-cyan-50 text-j2fx-medium ring-cyan-200',
  'Sob demanda': 'bg-slate-100 text-slate-600 ring-slate-200',
};

const ProductSolutions = () => {
  const selectInterest = (interest: string) => {
    window.sessionStorage.setItem('j2fx-selected-interest', interest);
    window.dispatchEvent(new Event('j2fx-interest-selected'));
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-medium">
              Produtos e automações
            </p>
            <h2 className="text-3xl font-bold text-j2fx-ink md:text-4xl">
              Soluções digitais para vender, atender e organizar melhor
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Além da consultoria em TI, a J2FX desenvolve produtos próprios e automações sob medida para operações que precisam transformar processos simples em experiências mais rápidas.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map(({ icon: Icon, segment, title, status, description, outcomes, interest, whatsappMessage, href, cta }) => (
<article
              key={title}
              className={`group flex flex-col rounded-xl border p-6 transition-colors ${title === 'Panific' ? 'border-amber-200 bg-amber-50/60 lg:col-span-2' : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white'}`}
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-j2fx-ink text-j2fx-accent transition-colors group-hover:bg-j2fx-accent group-hover:text-j2fx-ink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{segment}</p>
                    <h3 className="text-xl font-bold text-j2fx-ink">{title}</h3>
                  </div>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusStyles[status]}`}>
                  {status}
                </span>
              </div>

              <p className="mb-5 leading-7 text-slate-600">{description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {outcomes.map((outcome) => (
                  <span key={outcome} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200">
                    {outcome}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={href}
                  onClick={() => selectInterest(interest)}
                  className="inline-flex items-center gap-2 font-semibold text-j2fx-medium hover:text-j2fx-ink"
                >
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/5516981699137?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSolutions;
