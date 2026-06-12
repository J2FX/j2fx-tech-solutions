import { AlertTriangle, ArrowRight, Building2, ServerCrash } from 'lucide-react';

const useCases = [
  {
    icon: ServerCrash,
    title: 'Ambiente instável',
    challenge: 'Quedas, lentidão e dependência de correções emergenciais.',
    solution: 'Diagnóstico de infraestrutura, priorização de riscos e plano de estabilização.',
  },
  {
    icon: AlertTriangle,
    title: 'Segurança sem clareza',
    challenge: 'Acessos, backups e dados críticos sem rotina de validação.',
    solution: 'Revisão de controles, políticas práticas e medidas de proteção por prioridade.',
  },
  {
    icon: Building2,
    title: 'Crescimento da operação',
    challenge: 'Novas equipes, sistemas e unidades aumentando complexidade técnica.',
    solution: 'Arquitetura mais organizada, cloud/híbrido quando fizer sentido e suporte gerenciado.',
  },
];

const UseCases = () => {
  return (
    <section className="section-padding bg-j2fx-ink text-white">
      <div className="container-custom">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-j2fx-accent">Cenários comuns</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Quando a TI começa a limitar a operação, é hora de revisar a base
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Em vez de prometer milagres, começamos pelo que dá visibilidade: entender o ambiente, separar urgência de prioridade e executar um plano técnico realista.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, title, challenge, solution }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/6 p-6 backdrop-blur">
              <Icon className="mb-5 h-9 w-9 text-j2fx-accent" />
              <h3 className="mb-4 text-xl font-bold">{title}</h3>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Desafio</p>
              <p className="mb-5 leading-7 text-slate-300">{challenge}</p>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Como atuamos</p>
              <p className="leading-7 text-slate-200">{solution}</p>
            </article>
          ))}
        </div>

        <a href="#contact" className="mt-10 inline-flex items-center gap-2 font-semibold text-j2fx-accent hover:text-white">
          Quero avaliar meu cenário
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default UseCases;
