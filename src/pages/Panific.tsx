import { useEffect } from 'react';
import { ArrowRight, Barcode, Check, ClipboardList, LineChart, MessageCircle, Smartphone, Users, Wallet } from 'lucide-react';
import './panific.css';

const whatsappUrl = `https://wa.me/5516981699137?text=${encodeURIComponent('Olá! Quero solicitar a ativação do teste grátis de 14 dias do Panific para meu estabelecimento. Gostaria de conhecer a oferta de lançamento de R$ 49,90/mês.')}`;
const planBenefits = [
  'PDV e registro de vendas.',
  'Cadastro de produtos e categorias.',
  'Usuários com acesso por PIN.',
  'Abertura e fechamento de caixa.',
  'Histórico de vendas e relatórios.',
  'Suporte por mensagem em horário comercial.',
];
const features = [
  { icon: Barcode, title: 'Venda do seu jeito', text: 'Adicione produtos por código de barras, busca por nome ou atalhos. Confira quantidades e total no carrinho antes de finalizar.' },
  { icon: ClipboardList, title: 'Catálogo organizado', text: 'Cadastre produtos, preços e apresentações. Organize por categorias e ative ou desative itens conforme a rotina do negócio.' },
  { icon: Wallet, title: 'Caixa acompanhado', text: 'Abra e feche o caixa, registre vendas em dinheiro, PIX, débito ou crédito e consulte o resumo por forma de pagamento.' },
  { icon: Users, title: 'Cada pessoa com seu acesso', text: 'Operadores entram com PIN para vender. Gerentes acessam a gestão e autorizam cancelamentos no histórico.' },
  { icon: LineChart, title: 'Números para decidir', text: 'Consulte total vendido, transações, ticket médio e produtos mais vendidos por período. Exporte o histórico em CSV.' },
  { icon: Smartphone, title: 'Pensado para o celular', text: 'Interface web com controles de toque e acesso aos dados da empresa em outros aparelhos, com conexão à internet.' },
];
const questions = [
  { title: 'O que está incluído no plano?', text: 'Por R$ 49,90/mês por estabelecimento, o plano inclui PDV e registro de vendas, cadastro de produtos e categorias, usuários com acesso por PIN, abertura e fechamento de caixa, histórico de vendas, relatórios e suporte por mensagem em horário comercial.' },
  { title: 'Como funciona o teste grátis?', text: 'Solicite a ativação pelo atendimento no WhatsApp. A equipe libera o acesso para você testar por 14 dias, sem cartão e sem cobrança automática. Após o teste, você pode continuar por R$ 49,90/mês mediante contratação.' },
  { title: 'Como posso cancelar?', text: 'Solicite o cancelamento pelo atendimento no WhatsApp. O plano não tem permanência mínima. Durante o teste, a continuidade depende de contratação: não há cobrança automática.' },
  { title: 'Preciso de internet?', text: 'Sim. O acesso e a confirmação das vendas precisam de conexão à internet. Use o Panific pelo navegador no celular ou computador conectado.' },
  { title: 'Qual a diferença entre implantação gratuita e configuração assistida?', text: 'A implantação gratuita inclui liberação de acesso e material de orientação. Você faz o cadastro dos produtos. A configuração assistida é um serviço opcional com ajuda na configuração e treinamento remoto de até 1 hora, por R$ 149 em pagamento único. Não é obrigatório contratar esse serviço para usar o plano.' },
  { title: 'Como funciona o preço de lançamento?', text: 'O preço de R$ 49,90/mês é garantido por 12 meses para os primeiros 20 clientes. Após os 12 meses, o preço será comunicado antes de eventual reajuste.' },
  { title: 'Para quais negócios o Panific é indicado?', text: 'O Panific atende pequenos e médios negócios de diferentes segmentos que precisam registrar vendas de produtos, organizar o cadastro e acompanhar o caixa. É pensado especialmente para quem ainda anota as vendas em papel e quer passar a controlar a rotina pelo celular. Fale com a equipe para conferir se os recursos atendem à sua operação.' },
  { title: 'Preciso instalar um programa?', text: 'O Panific é um sistema web acessado pelo navegador. A demonstração ajuda a conferir o uso nos aparelhos e na rotina da sua empresa.' },
];

export default function Panific() {
  useEffect(() => {
    const title = document.title;
    const updates = [
      ['meta[name="description"]', 'content', 'Ainda anota vendas no papel? Conheça o Panific: controle vendas, produtos e caixa pelo celular para pequenos e médios negócios. Teste por 14 dias.'],
      ['link[rel="canonical"]', 'href', 'https://j2fx.com.br/panific'],
      ['meta[property="og:title"]', 'content', 'Panific | Seu negócio, na palma da mão'],
      ['meta[property="og:description"]', 'content', 'Troque as anotações no papel pelo controle de vendas no celular. Panific para pequenos e médios negócios, com teste grátis de 14 dias.'],
      ['meta[property="og:url"]', 'content', 'https://j2fx.com.br/panific'],
      ['meta[name="twitter:title"]', 'content', 'Panific | Seu negócio, na palma da mão'],
      ['meta[name="twitter:description"]', 'content', 'Controle vendas, produtos e caixa pelo celular. Panific para pequenos e médios negócios que ainda anotam no papel.'],
    ];
    const previous = updates.map(([selector, attribute, value]) => {
      const element = document.querySelector(selector);
      const original = element?.getAttribute(attribute) ?? null;
      element?.setAttribute(attribute, value);
      return { element, attribute, original };
    });
    document.title = 'Panific | Seu negócio, na palma da mão';
    return () => {
      document.title = title;
      previous.forEach(({ element, attribute, original }) => {
        if (original === null) element?.removeAttribute(attribute);
        else element?.setAttribute(attribute, original);
      });
    };
  }, []);

  return (
    <div className="panific-page">
      <a href="#panific-content" className="sr-only focus:not-sr-only focus:block focus:p-4">Pular para o conteúdo</a>
      <header className="border-b border-stone-200 bg-white">
        <nav aria-label="Navegação Panific" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <a href="/panific" aria-label="Panific — início"><img src="/panific/logo.png" alt="Panific" width="2172" height="724" className="w-52" /></a>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            <a href="#recursos" className="panific-nav-link">Recursos</a>
            <a href="#preco" className="panific-nav-link">Preço</a>
            <a href="#duvidas" className="panific-nav-link">Dúvidas</a>
            <a href="/#projects" className="panific-nav-link">Conheça a J2FX</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="panific-primary">Quero testar por 14 dias <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </nav>
      </header>
      <main id="panific-content">
        <section className="relative overflow-hidden border-b border-amber-100 bg-[radial-gradient(ellipse_at_top_right,#FEF3C7,transparent_65%)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">Pequenos e médios negócios · por J2FX</p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">Ainda anota vendas no papel?<br /><span className="text-amber-700">Controle suas vendas pelo celular.</span></h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">Para pequenos e médios negócios de diferentes segmentos que ainda usam cadernos e folhas para anotar vendas. Com o Panific, registre cada venda, organize seus produtos e acompanhe o caixa pelo celular ou computador.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#preco" className="panific-primary">Conhecer o plano <ArrowRight size={18} aria-hidden="true" /></a>
                <a href="#como-funciona" className="panific-secondary">Veja como funciona</a>
              </div>
              <p className="mt-5 text-sm text-stone-600">14 dias grátis, sem cartão. Ativação pelo atendimento.</p>
            </div>
            <figure className="rounded-3xl border border-amber-100 bg-white/80 px-4 pb-6 pt-10 shadow-xl shadow-amber-900/5">
              <img src="/panific/balcao.png" alt="Ilustração de um balcão com tablet, produtos e leitor de código de barras" width="1774" height="887" className="h-auto w-full" />
              <figcaption className="mt-6 text-center text-sm text-stone-500">Ilustração conceitual da marca Panific.</figcaption>
              <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Áreas do sistema">
                {['Vendas', 'Produtos', 'Caixa', 'Relatórios'].map(item => <span key={item} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">{item}</span>)}
              </div>
            </figure>
          </div>
        </section>
        <section id="recursos" className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">Da venda à gestão</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Troque as anotações no papel<br />por vendas organizadas.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-stone-200 bg-white p-7">
                <div className="mb-5 inline-flex rounded-xl bg-amber-50 p-3 text-amber-700"><Icon size={26} aria-hidden="true" /></div>
                <h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="como-funciona" className="bg-stone-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr]">
            <div><p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Uma rotina conectada</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Abra o caixa.<br />Venda. Acompanhe.</h2><p className="mt-6 leading-8 text-stone-300">Para pequenos e médios negócios de diferentes segmentos. Em vez de somar anotações no fim do dia, registre as vendas no sistema e consulte os resultados da operação.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="panific-primary mt-8">Ver em uma demonstração <ArrowRight size={18} aria-hidden="true" /></a></div>
            <ol className="space-y-6">
              {[
                ['Prepare o dia', 'Entre na conta da empresa, acesse seu perfil por PIN e abra o caixa com o valor inicial.'],
                ['Registre a venda', 'Encontre os produtos, confira o carrinho e registre a forma de pagamento.'],
                ['Confira os resultados', 'Consulte histórico e relatórios por período, acompanhe os pagamentos e feche o caixa.'],
              ].map(([title, text], index) => <li key={title} className="flex gap-5 rounded-2xl border border-stone-700 p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-900">{index + 1}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-stone-300">{text}</p></div></li>)}
            </ol>
          </div>
        </section>
        <section id="preco" aria-labelledby="panific-price-title" className="border-y border-amber-200 bg-amber-50">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
            <div className="text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-800">Condição de lançamento</p>
              <h2 id="panific-price-title" className="text-3xl font-bold tracking-tight sm:text-4xl">Comece a organizar seu negócio por R$ 49,90/mês</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">Controle vendas, produtos e caixa pelo celular ou computador, com um sistema simples para o dia a dia.</p>
            </div>
            <article aria-labelledby="panific-plan-title" className="mx-auto mt-10 max-w-xl rounded-2xl border border-amber-200 bg-white p-6 shadow-lg shadow-amber-900/5 sm:p-8">
              <h3 id="panific-plan-title" className="text-2xl font-bold">Panific</h3>
              <p className="mt-4 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">R$ 49,90<span className="text-xl font-medium text-stone-600">/mês</span></p>
              <p className="mt-2 text-stone-600">Por estabelecimento.</p>
              <ul className="my-7 space-y-4">
                {planBenefits.map(benefit => <li key={benefit} className="flex items-start gap-3 leading-6 text-stone-700"><Check size={20} className="mt-0.5 shrink-0 text-emerald-700" aria-hidden="true" /><span>{benefit}</span></li>)}
              </ul>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <ul className="space-y-3 font-semibold leading-6 text-amber-900">
                  <li>14 dias grátis, sem cartão.</li>
                  <li>Implantação gratuita.</li>
                  <li>Sem permanência mínima.</li>
                  <li>Preço garantido por 12 meses para os primeiros 20 clientes.</li>
                </ul>
                <p className="mt-4 text-sm leading-6 text-stone-600">Condição de lançamento. O preço após os 12 meses será comunicado antes de eventual reajuste.</p>
              </div>
              <p className="my-6 leading-7 text-stone-600">A implantação gratuita inclui liberação de acesso e material de orientação; o cadastro dos produtos é feito pelo cliente.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="panific-primary w-full"><MessageCircle size={20} className="shrink-0" aria-hidden="true" />Quero testar por 14 dias</a>
              <p className="mt-3 text-center text-sm leading-6 text-stone-600">Solicite a ativação do teste pelo atendimento no WhatsApp.</p>
              <p className="mt-4 text-center text-sm leading-6 text-stone-600">Após o teste, continue por R$ 49,90/mês mediante contratação. Sem cobrança automática durante o teste.</p>
            </article>
            <aside aria-label="Serviço opcional" className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-stone-600">
              <p>Quer ajuda para começar? Configuração assistida e treinamento remoto de até 1 hora por R$ 149, em pagamento único.</p>
              <p className="mt-2">Esse serviço é opcional e não é obrigatório para usar o Panific.</p>
            </aside>
          </div>
        </section>
        <section id="duvidas" className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="mb-8 text-3xl font-bold">Antes de começar</h2>
          {questions.map(({ title, text }) => <details key={title} className="border-b border-stone-200 py-5"><summary className="min-h-12 cursor-pointer text-lg font-semibold">{title}</summary><p className="pb-2 leading-7 text-stone-600">{text}</p></details>)}
        </section>
        <section id="demonstracao" className="border-y border-amber-200 bg-amber-50">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Conheça o Panific na prática.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">Conte como funciona seu negócio. A J2FX apresenta os recursos e conversa com você sobre o próximo passo.</p>
            <div className="my-7 flex flex-wrap justify-center gap-5 text-sm text-stone-700">{['14 dias grátis, sem cartão', 'Implantação gratuita', 'Sem permanência mínima'].map(item => <span key={item} className="inline-flex items-center gap-2"><Check size={18} aria-hidden="true" className="text-emerald-700" />{item}</span>)}</div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="panific-primary"><MessageCircle size={20} aria-hidden="true" />Quero testar por 14 dias</a>
            <p className="mt-6 text-sm text-stone-600">Já tem uma conta habilitada? <a className="font-semibold text-amber-800 underline underline-offset-4" href="https://panific.j2fx.com.br" target="_blank" rel="noopener noreferrer">Acessar o Panific</a></p>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-stone-600"><p>© {new Date().getFullYear()} Panific · Um produto J2FX Tecnologia.</p><a href="/" className="panific-nav-link">Voltar ao site da J2FX</a></footer>
    </div>
  );
}

