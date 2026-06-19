import { useEffect } from 'react';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Dumbbell,
  HelpCircle,
  Home,
  LineChart,
  MessageCircle,
  PhoneCall,
  Send,
  ShoppingBag,
  Sparkles,
  Store,
  Stethoscope,
  UserRoundCheck,
  UsersRound,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Altere aqui o telefone principal dos CTAs de WhatsApp.
const WHATSAPP_NUMBER = '5516981699137';
const WHATSAPP_MESSAGE =
  'Ola, tenho interesse no Atendimento Inteligente para WhatsApp da J2FX';
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const pains = [
  { icon: Clock3, title: 'Clientes esperando resposta' },
  { icon: HelpCircle, title: 'Perguntas repetidas no WhatsApp' },
  { icon: ShoppingBag, title: 'Vendas perdidas fora do horario' },
  { icon: ClipboardList, title: 'Falta de organizacao dos contatos' },
  { icon: UsersRound, title: 'Atendimento manual e cansativo' },
  { icon: UserRoundCheck, title: 'Leads que somem antes do atendimento' },
];

const benefits = [
  'Atendimento 24 horas',
  'Captacao de novos clientes',
  'Agendamentos automaticos',
  'Respostas para duvidas frequentes',
  'Encaminhamento para atendente humano',
  'Organizacao dos atendimentos',
];

const segments: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Home,
    title: 'Imobiliarias',
    text: 'Captacao de interessados, filtro por regiao, faixa de preco, tipo de imovel e agendamento de visitas.',
  },
  {
    icon: Stethoscope,
    title: 'Clinicas',
    text: 'Agendamento de consultas, confirmacao de horarios, envio de informacoes e triagem inicial.',
  },
  {
    icon: Store,
    title: 'Restaurantes',
    text: 'Reservas de mesas, envio de cardapio, pedidos e atendimento fora do horario.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Servicos',
    text: 'Captacao de clientes, coleta de informacoes e agendamento de reunioes.',
  },
  {
    icon: Dumbbell,
    title: 'Academias',
    text: 'Agendamento de aula experimental, apresentacao de planos e captacao de novos alunos.',
  },
  {
    icon: ShoppingBag,
    title: 'Lojas e varejo',
    text: 'Envio de catalogo, orcamentos, duvidas frequentes e pre-vendas.',
  },
];

const steps = [
  'Entendemos seu atendimento',
  'Criamos o fluxo ideal',
  'Configuramos o chatbot no WhatsApp',
  'Acompanhamos e melhoramos os resultados',
];

const plans = [
  {
    name: 'Start',
    audience: 'Indicado para autonomos e pequenos negocios',
    setup: 'Implantacao: R$ 497',
    monthly: 'Mensalidade: R$ 97/mes',
    featured: false,
    items: [
      'Atendimento automatico no WhatsApp',
      'Ate 20 perguntas e respostas',
      'Captacao basica de leads',
      'Encaminhamento para humano',
      'Ajustes simples mensais',
    ],
  },
  {
    name: 'Pro',
    audience: 'Indicado para clinicas, imobiliarias, lojas e empresas locais',
    setup: 'Implantacao: R$ 997',
    monthly: 'Mensalidade: R$ 197/mes',
    featured: true,
    items: [
      'Fluxos personalizados',
      'Atendimento com respostas mais completas',
      'Agendamentos',
      'Captacao e qualificacao de leads',
      'Relatorios basicos',
      'Organizacao em agenda, planilhas ou CRM',
    ],
  },
  {
    name: 'Business',
    audience: 'Indicado para empresas com maior volume de atendimento',
    setup: 'Implantacao: R$ 2.497',
    monthly: 'Mensalidade: R$ 397/mes',
    featured: false,
    items: [
      'Multiatendimento',
      'Fluxos avancados',
      'Organizacao personalizada',
      'Dashboard',
      'Suporte prioritario',
      'Automacoes sob medida',
    ],
  },
];

const faq = [
  {
    question: 'O chatbot substitui meu atendimento humano?',
    answer:
      'Nao. Ele organiza, responde duvidas iniciais e encaminha para um atendente quando necessario.',
  },
  {
    question: 'Preciso ter sistema proprio?',
    answer: 'Nao. Podemos comecar com WhatsApp, planilhas e ferramentas simples.',
  },
  {
    question: 'Funciona para empresas pequenas?',
    answer: 'Sim. Existem planos para autonomos, pequenos negocios e empresas maiores.',
  },
  {
    question: 'Posso personalizar as mensagens?',
    answer: 'Sim. O fluxo e criado de acordo com o atendimento da sua empresa.',
  },
  {
    question: 'Tem mensalidade?',
    answer:
      'Sim. A mensalidade cobre manutencao, suporte, monitoramento e pequenos ajustes.',
  },
];

const AtendimentoWhatsApp = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'Atendimento Inteligente para WhatsApp | J2FX Tecnologia';
    description?.setAttribute(
      'content',
      'Atendimento Inteligente para WhatsApp com respostas automaticas, captacao de clientes, agendamentos e organizacao de atendimentos para empresas.',
    );

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) {
        description.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="container-custom flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="J2FX Tecnologia">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-j2fx-accent font-black text-j2fx-ink">
              J2
            </span>
            <span className="text-lg font-bold">
              J2FX<span className="text-j2fx-accent">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 md:flex">
            <a href="#solucao" className="transition-colors hover:text-j2fx-accent">Solucao</a>
            <a href="#segmentos" className="transition-colors hover:text-j2fx-accent">Segmentos</a>
            <a href="#planos" className="transition-colors hover:text-j2fx-accent">Planos</a>
            <a href="#faq" className="transition-colors hover:text-j2fx-accent">FAQ</a>
          </nav>

          <Button asChild className="hidden rounded-md bg-emerald-400 font-semibold text-slate-950 hover:bg-emerald-300 sm:inline-flex">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar demo</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden pt-28">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.95)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="container-custom relative grid min-h-[calc(100vh-5rem)] items-center gap-10 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-sm font-bold text-emerald-200">
              <Sparkles className="h-4 w-4" />
              J2FX Atendimento Inteligente para WhatsApp
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Seu WhatsApp pode vender e atender mesmo quando voce esta ocupado
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              A J2FX cria atendimentos automaticos para WhatsApp que respondem clientes, captam novos contatos,
              fazem agendamentos e organizam o atendimento da sua empresa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-md bg-emerald-400 px-6 text-base font-semibold text-slate-950 hover:bg-emerald-300">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar demonstracao
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-md border-white/30 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <a href="#planos">Conhecer os planos</a>
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md animate-slide-in">
            <div className="rounded-lg border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <div className="rounded-md bg-[#e8f4ed] p-4 text-slate-950">
                <div className="mb-4 flex items-center gap-3 border-b border-emerald-900/10 pb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Bot className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">Assistente J2FX</p>
                    <p className="text-xs font-semibold text-emerald-700">atendendo agora</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="max-w-[86%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
                    Ola! Posso te ajudar com orcamento, agendamento ou duvidas sobre os servicos.
                  </div>
                  <div className="ml-auto max-w-[74%] rounded-lg rounded-tr-none bg-emerald-100 p-3 shadow-sm">
                    Quero agendar uma avaliacao.
                  </div>
                  <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
                    Claro. Qual seu nome, empresa e melhor horario para contato?
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-white p-4 shadow-sm">
                    <p className="mb-3 font-bold">Lead qualificado</p>
                    <ul className="space-y-2 text-slate-700">
                      <li>Interesse: demonstracao</li>
                      <li>Segmento: clinica</li>
                      <li>Horario: amanha de manha</li>
                      <li>Status: encaminhar para humano</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-slate-950">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Dores</p>
            <h2 className="text-3xl font-bold md:text-4xl">Sua empresa perde oportunidades todos os dias?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pains.map(({ icon: Icon, title }) => (
              <article key={title} className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <Icon className="mb-4 h-7 w-7 text-emerald-600" />
                <h3 className="text-lg font-bold leading-snug">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucao" className="section-padding bg-slate-100 text-slate-950">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Solucao</p>
            <h2 className="text-3xl font-bold md:text-4xl">Atendimento inteligente para WhatsApp</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Com a J2FX, seu WhatsApp passa a atender automaticamente, entender o que o cliente precisa,
              coletar informacoes importantes e encaminhar cada conversa para o atendimento certo.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-md bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="font-semibold text-slate-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="segmentos" className="section-padding bg-white text-slate-950">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Segmentos</p>
            <h2 className="text-3xl font-bold md:text-4xl">Solucoes para diversos tipos de negocio</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {segments.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-md border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <Icon className="mb-5 h-8 w-8 text-emerald-600" />
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Como funciona</p>
            <h2 className="text-3xl font-bold md:text-4xl">Do atendimento manual para um fluxo organizado</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step} className="rounded-md border border-white/10 bg-white/5 p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400 font-bold text-slate-950">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold leading-snug">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="section-padding bg-white text-slate-950">
        <div className="container-custom">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Pacotes</p>
              <h2 className="text-3xl font-bold md:text-4xl">Planos para comecar simples e evoluir com demanda</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              Valores pensados para validar o servico em Franca com empresas locais, gerar casos reais e evoluir os
              pacotes conforme os resultados aparecerem.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-md border p-6 ${
                  plan.featured
                    ? 'border-emerald-400 bg-slate-950 text-white shadow-xl'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="mb-6">
                  {plan.featured && (
                    <span className="mb-4 inline-flex rounded-md bg-emerald-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-950">
                      Mais procurado
                    </span>
                  )}
                  <h3 className="text-2xl font-bold">Plano {plan.name}</h3>
                  <p className={`mt-3 leading-7 ${plan.featured ? 'text-slate-200' : 'text-slate-600'}`}>
                    {plan.audience}
                  </p>
                </div>

                {/* Altere aqui os textos e valores de cada pacote. */}
                <div className="mb-6 space-y-2">
                  <p className="text-lg font-bold">{plan.setup}</p>
                  <p className={plan.featured ? 'text-emerald-200' : 'text-emerald-700'}>{plan.monthly}</p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? 'text-emerald-300' : 'text-emerald-600'}`} />
                      <span className={plan.featured ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className={`w-full rounded-md font-semibold ${
                  plan.featured
                    ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
                    : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Falar sobre o {plan.name}
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-100 text-slate-950">
        <div className="container-custom grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Primeiros 90 dias</p>
            <h2 className="text-3xl font-bold md:text-4xl">Agora a prioridade e validacao, nao faturamento alto</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              A meta inicial e colocar fluxos reais funcionando em negocios de Franca, colher depoimentos e entender
              onde o atendimento automatico gera mais resultado no dia a dia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <UsersRound className="mb-4 h-7 w-7 text-emerald-600" />
              <p className="text-3xl font-bold">5</p>
              <p className="mt-2 font-semibold text-slate-700">clientes pagando R$ 97/mes</p>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <MessageCircle className="mb-4 h-7 w-7 text-emerald-600" />
              <p className="text-3xl font-bold">5</p>
              <p className="mt-2 font-semibold text-slate-700">depoimentos para prova social</p>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <Bot className="mb-4 h-7 w-7 text-emerald-600" />
              <p className="text-3xl font-bold">5</p>
              <p className="mt-2 font-semibold text-slate-700">fluxos funcionando na pratica</p>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <LineChart className="mb-4 h-7 w-7 text-emerald-600" />
              <p className="text-3xl font-bold">~R$ 500</p>
              <p className="mt-2 font-semibold text-slate-700">por mes recorrente + experiencia real</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-emerald-50 text-slate-950">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Demonstracao</p>
            <h2 className="text-3xl font-bold md:text-4xl">Veja como seria no seu negocio</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              A J2FX pode montar uma demonstracao baseada no seu segmento para mostrar como o atendimento automatico
              funcionaria na pratica.
            </p>
          </div>
          <div className="rounded-md border border-emerald-200 bg-white p-6 shadow-sm">
            <Zap className="mb-4 h-8 w-8 text-emerald-700" />
            <h3 className="mb-3 text-2xl font-bold">Quero uma demonstracao</h3>
            <p className="mb-6 leading-7 text-slate-600">
              Envie seu segmento e conte como chegam os atendimentos hoje. A demo fica mais proxima da sua rotina.
            </p>
            <Button asChild className="w-full rounded-md bg-emerald-600 font-semibold text-white hover:bg-emerald-700">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Solicitar demonstracao
                <PhoneCall className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="section-padding bg-white text-slate-950">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">FAQ</p>
            <h2 className="text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {faq.map(({ question, answer }) => (
              <article key={question} className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-3 text-lg font-bold">{question}</h3>
                <p className="leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Contato</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Pronto para transformar seu WhatsApp em um canal de vendas organizado?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Solicite uma demonstracao e veja como a J2FX pode automatizar o atendimento da sua empresa.
            </p>
            <Button asChild className="mt-8 rounded-md bg-emerald-400 font-semibold text-slate-950 hover:bg-emerald-300">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar com a J2FX pelo WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Altere aqui os textos do formulario se quiser mudar a qualificacao do lead. */}
          <form
            name="atendimento-whatsapp"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-md bg-white p-6 text-slate-950 shadow-xl"
          >
            <input type="hidden" name="form-name" value="atendimento-whatsapp" />
            <p className="hidden">
              <label>
                Nao preencha este campo: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" placeholder="Seu nome" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" name="whatsapp" type="tel" placeholder="(16) 99999-9999" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" name="company" placeholder="Nome da empresa" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="segment">Segmento</Label>
                <Input id="segment" name="segment" placeholder="Clinica, loja, imobiliaria..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Plano de interesse</Label>
                <select
                  id="plan"
                  name="plan"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Start">Start</option>
                  <option value="Pro">Pro</option>
                  <option value="Business">Business</option>
                  <option value="Ainda nao sei">Ainda nao sei</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">Volume de mensagens</Label>
                <Input id="volume" name="volume" placeholder="Ex.: 30 por dia" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">O que voce quer automatizar?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Ex.: perguntas frequentes, agendamento, captacao de leads, orcamentos..."
                  rows={4}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-6 h-12 w-full rounded-md bg-emerald-600 text-base font-semibold text-white hover:bg-emerald-700">
              Solicitar demonstracao
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-white">
        <div className="container-custom flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>J2FX Tecnologia - Atendimento Inteligente para WhatsApp.</p>
          <a href="/" className="font-semibold text-emerald-300 hover:text-emerald-200">
            Voltar para o site
          </a>
        </div>
      </footer>
    </main>
  );
};

export default AtendimentoWhatsApp;
