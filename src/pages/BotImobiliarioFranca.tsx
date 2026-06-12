import { useEffect } from 'react';
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  Filter,
  Home,
  ListChecks,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
  UserRound,
  UsersRound,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const whatsappUrl =
  'https://wa.me/5516981699137?text=Tenho%20interesse%20em%20testar%20o%20Bot%20Imobili%C3%A1rio%20Franca';

const pains = [
  'Leads chegam fora de hora e ficam sem resposta.',
  'Muitos contatos curiosos tomam tempo do atendimento.',
  'Orçamento, bairro e interesse precisam ser perguntados toda vez.',
  'Conversas importantes se perdem no meio do WhatsApp.',
];

const botQuestions = [
  'Nome do interessado',
  'Compra ou aluguel',
  'Faixa de orçamento',
  'Bairro de preferência',
  'Urgência para fechar',
  'Resumo enviado ao corretor',
];

const benefits = [
  { icon: Zap, title: 'Responder mais rápido', text: 'O primeiro contato acontece na hora, mesmo quando você está em visita ou reunião.' },
  { icon: MessageCircle, title: 'Não perder leads', text: 'Todo interessado recebe uma resposta inicial e segue por um fluxo simples de qualificação.' },
  { icon: Clock3, title: 'Economizar tempo', text: 'As perguntas repetidas ficam com o bot, e você entra quando o lead já tem contexto.' },
  { icon: Filter, title: 'Focar nos clientes certos', text: 'Orçamento, bairro e urgência ajudam a priorizar quem está mais perto de comprar ou alugar.' },
  { icon: ListChecks, title: 'Organizar o atendimento', text: 'O resumo do lead chega pronto para continuar a conversa humana no WhatsApp.' },
];

const audience = [
  { icon: UserRound, title: 'Corretores autônomos', text: 'Para quem atende sozinho e precisa ganhar velocidade no primeiro contato.' },
  { icon: Building2, title: 'Imobiliárias pequenas e médias', text: 'Para equipes que recebem leads pelo WhatsApp e precisam padronizar a triagem.' },
  { icon: UsersRound, title: 'Profissionais com muitos contatos', text: 'Para quem anuncia imóveis e quer separar curiosos de oportunidades reais.' },
];

const steps = [
  'O cliente chama no WhatsApp',
  'O bot faz as perguntas principais',
  'O corretor recebe o resumo do lead',
  'O atendimento humano continua',
];

const BotImobiliarioFranca = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute('content');

    document.title = 'Bot Imobiliário Franca | Pré-atendimento no WhatsApp para corretores';
    description?.setAttribute(
      'content',
      'Landing page de validação do Bot Imobiliário Franca, um bot de WhatsApp para captar, qualificar e organizar leads imobiliários.',
    );

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) {
        description.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="container-custom flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400 text-slate-950">
              <Bot className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">Bot Imobiliário Franca</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 md:flex">
            <a href="#problema" className="transition-colors hover:text-white">Problema</a>
            <a href="#solucao" className="transition-colors hover:text-white">Solução</a>
            <a href="#como-funciona" className="transition-colors hover:text-white">Como funciona</a>
            <a href="#interesse" className="transition-colors hover:text-white">Contato</a>
          </nav>

          <Button asChild className="hidden rounded-md bg-emerald-400 font-semibold text-slate-950 hover:bg-emerald-300 sm:inline-flex">
            <a href="#interesse">Quero testar</a>
          </Button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-slate-950 pt-28 text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.92)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="container-custom relative grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl animate-fade-in">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-sm font-semibold text-emerald-200">
              <MapPin className="h-4 w-4" />
              Validação com corretores de Franca, SP
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Um bot de WhatsApp para captar e qualificar leads imobiliários antes do atendimento humano.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              O Bot Imobiliário Franca ajuda corretores e pequenas imobiliárias a responder rápido,
              filtrar interesse, organizar dados do cliente e receber um resumo claro de cada lead.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-md bg-emerald-400 px-6 text-base font-semibold text-slate-950 hover:bg-emerald-300">
                <a href="#interesse">
                  Quero ver uma demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-md border-white/30 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-slide-in">
            <div className="rounded-[2rem] border border-white/15 bg-slate-900 p-3 shadow-2xl">
              <div className="rounded-[1.5rem] bg-[#e8f4ed] p-4 text-slate-900">
                <div className="mb-4 flex items-center gap-3 border-b border-emerald-900/10 pb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
                    <Bot className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">Bot Imobiliário Franca</p>
                    <p className="text-xs text-emerald-700">online agora</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
                    Olá! Você procura comprar ou alugar um imóvel em Franca?
                  </div>
                  <div className="ml-auto max-w-[72%] rounded-lg rounded-tr-none bg-emerald-100 p-3 shadow-sm">
                    Comprar, até R$ 450 mil.
                  </div>
                  <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white p-3 shadow-sm">
                    Perfeito. Qual bairro de preferência e em quanto tempo pretende fechar?
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-white p-4 shadow-sm">
                    <p className="mb-3 font-bold text-slate-950">Resumo para o corretor</p>
                    <ul className="space-y-2 text-slate-700">
                      <li>Nome: Mariana Alves</li>
                      <li>Interesse: compra</li>
                      <li>Orçamento: até R$ 450 mil</li>
                      <li>Bairro: Jardim Noemia</li>
                      <li>Urgência: até 60 dias</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Problema</p>
            <h2 className="text-3xl font-bold md:text-4xl">O lead imobiliário esfria rápido quando o primeiro atendimento demora.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pains.map((pain) => (
              <div key={pain} className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <CheckCircle2 className="mb-4 h-6 w-6 text-amber-500" />
                <p className="font-medium leading-relaxed text-slate-800">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucao" className="section-padding bg-slate-100">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Solução</p>
            <h2 className="text-3xl font-bold md:text-4xl">O bot faz a triagem inicial e entrega o lead pronto para continuar.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Ele atende 24/7 no WhatsApp, faz perguntas objetivas e envia para o corretor um resumo
              com as informações que realmente ajudam a priorizar o atendimento.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {botQuestions.map((question) => (
              <div key={question} className="flex items-center gap-3 rounded-md bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <span className="font-semibold text-slate-800">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Beneficios</p>
            <h2 className="text-3xl font-bold md:text-4xl">Mais velocidade no WhatsApp, menos tempo perdido com lead sem perfil.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-md border border-slate-200 p-5">
                <Icon className="mb-4 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Para quem e</p>
            <h2 className="text-3xl font-bold md:text-4xl">Feito para quem recebe leads por WhatsApp e precisa atender com mais critério.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {audience.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-md border border-white/10 bg-white/5 p-6">
                <Icon className="mb-5 h-8 w-8 text-emerald-300" />
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="leading-relaxed text-white/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Como funciona</p>
            <h2 className="text-3xl font-bold md:text-4xl">Um fluxo simples para organizar o primeiro contato.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-lg font-bold leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-emerald-50">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">Validação</p>
            <h2 className="text-3xl font-bold md:text-4xl">O produto está em fase de validação com corretores da região.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Estamos formando o primeiro grupo de testes em Franca para entender os fluxos mais comuns,
              ajustar as perguntas e medir se o bot realmente ajuda no dia a dia comercial.
            </p>
          </div>
          <div className="rounded-md border border-emerald-200 bg-white p-6">
            <Home className="mb-4 h-8 w-8 text-emerald-700" />
            <h3 className="mb-3 text-2xl font-bold">Participe do primeiro grupo</h3>
            <p className="mb-6 leading-relaxed text-slate-600">
              Deixe seu contato ou chame no WhatsApp para ver a demonstração inicial e dizer como você atende seus leads hoje.
            </p>
            <Button asChild className="w-full rounded-md bg-emerald-600 font-semibold text-white hover:bg-emerald-700">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <PhoneCall className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="interesse" className="section-padding bg-slate-950 text-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">Lista de interessados</p>
            <h2 className="text-3xl font-bold md:text-4xl">Quero testar o bot no meu atendimento imobiliário.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Preencha os dados para receber o contato sobre a demonstração e entrar na lista de corretores interessados.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold">Quero testar o bot</span>
              <span className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold">Quero ver uma demonstração</span>
              <span className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold">Entrar para a lista</span>
            </div>
          </div>

          <form
            name="bot-imobiliario-franca"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="rounded-md bg-white p-6 text-slate-950 shadow-xl"
          >
            <input type="hidden" name="form-name" value="bot-imobiliario-franca" />
            <p className="hidden">
              <label>
                Não preencha este campo: <input name="bot-field" />
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
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" name="city" defaultValue="Franca, SP" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile">Atua como corretor ou imobiliária?</Label>
                <select
                  id="profile"
                  name="profile"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  defaultValue=""
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Corretor autonomo">Corretor autônomo</option>
                  <option value="Imobiliaria">Imobiliária</option>
                  <option value="Equipe comercial">Equipe comercial</option>
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="challenge">Principal dificuldade hoje</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  placeholder="Ex.: responder rápido, filtrar curiosos, organizar leads..."
                  rows={4}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-6 h-12 w-full rounded-md bg-emerald-600 text-base font-semibold text-white hover:bg-emerald-700">
              Entrar para a lista de interessados
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-white">
        <div className="container-custom flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Bot Imobiliário Franca por J2FX Tecnologia.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-300 hover:text-emerald-200">
            Quero testar o bot
          </a>
        </div>
      </footer>
    </main>
  );
};

export default BotImobiliarioFranca;
